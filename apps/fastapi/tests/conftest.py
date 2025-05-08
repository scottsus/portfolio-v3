import asyncio
import os
import sys
from typing import AsyncGenerator
from unittest.mock import AsyncMock, MagicMock, patch

import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from httpx import AsyncClient

# Set environment to test
os.environ["ENV"] = "dev"

# Mock the prisma module before importing app modules
sys.modules["prisma"] = MagicMock()
sys.modules["prisma.Prisma"] = MagicMock()

# Now we can safely import app modules
from app.main import api_router


@pytest.fixture(scope="session")
def event_loop():
    """Create an instance of the default event loop for each test case."""
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture
def client():
    """Create a test client for the FastAPI app."""
    with TestClient(api_router) as client:
        yield client


@pytest_asyncio.fixture
async def async_client():
    """Create an async test client for the FastAPI app."""
    # Create a TestClient for the FastAPI app
    app = TestClient(api_router)
    
    # Create a custom transport that uses the TestClient
    class TestClientTransport:
        async def handle_async_request(self, request):
            # Convert the request to a format TestClient can handle
            method = request.method
            url = str(request.url)
            headers = dict(request.headers)
            content = request.content
            
            # Use the TestClient to make the request
            response = app.request(
                method=method,
                url=url,
                headers=headers,
                content=content,
            )
            
            # Convert the response back to a format AsyncClient expects
            return response
    
    # Create an AsyncClient with the custom transport
    client = AsyncClient(base_url="http://testserver")
    client.transport = TestClientTransport()
    
    yield client


# Mock test data
test_users = [
    {"id": "123e4567-e89b-12d3-a456-426614174000", "name": "Test User 1", "email": "test1@example.com"},
    {"id": "223e4567-e89b-12d3-a456-426614174000", "name": "Test User 2", "email": "test2@example.com"},
]


# Create mock methods
async def mock_find_many(*args, **kwargs):
    return test_users


async def mock_find_unique(*args, **kwargs):
    user_id = kwargs.get("where", {}).get("id")
    if user_id:
        for user in test_users:
            if user["id"] == user_id:
                return user
    return None


async def mock_create(*args, **kwargs):
    user_data = kwargs.get("data", {})
    new_user = {
        "id": "323e4567-e89b-12d3-a456-426614174000",
        **user_data
    }
    return new_user


async def mock_update(*args, **kwargs):
    user_id = kwargs.get("where", {}).get("id")
    user_data = kwargs.get("data", {})
    
    for user in test_users:
        if user["id"] == user_id:
            updated_user = {**user, **user_data}
            return updated_user
    return None


async def mock_delete(*args, **kwargs):
    return None


# Apply the mocks using patch
@pytest.fixture(autouse=True)
def mock_db():
    """Mock the database for tests."""
    # Create a class to handle the async methods
    class AsyncMethodMock:
        async def __call__(self, *args, **kwargs):
            return self.return_value
        
        def __init__(self, return_value):
            self.return_value = return_value
    
    # Create the mock methods
    find_many_mock = AsyncMethodMock(test_users)
    find_unique_mock = MagicMock()
    find_unique_mock.side_effect = lambda **kwargs: AsyncMethodMock(
        next((user for user in test_users if user["id"] == kwargs.get("where", {}).get("id")), None)
    )()
    
    create_mock = MagicMock()
    create_mock.side_effect = lambda **kwargs: AsyncMethodMock({
        "id": "323e4567-e89b-12d3-a456-426614174000",
        **kwargs.get("data", {})
    })()
    
    update_mock = MagicMock()
    update_mock.side_effect = lambda **kwargs: AsyncMethodMock({
        "id": kwargs.get("where", {}).get("id"),
        "name": "Updated User",
        "email": "test1@example.com"
    })()
    
    delete_mock = AsyncMethodMock(None)
    
    # Create the patch
    with patch("app.db.db") as mock_db:
        # Create a mock user object
        mock_user = MagicMock()
        mock_user.find_many = find_many_mock
        mock_user.find_unique = find_unique_mock
        mock_user.create = create_mock
        mock_user.update = update_mock
        mock_user.delete = delete_mock
        
        # Attach the mock user to the mock db
        mock_db.user = mock_user
        
        # Mock the connect and disconnect methods
        mock_db.connect = AsyncMethodMock(None)
        mock_db.disconnect = AsyncMethodMock(None)
        
        yield mock_db