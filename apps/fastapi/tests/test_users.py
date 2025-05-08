import pytest
from unittest.mock import patch
from app.models.user import UserCreate
from fastapi import status
from fastapi.testclient import TestClient


def test_get_users(client: TestClient):
    """Test getting all users."""
    response = client.get("/users/")
    assert response.status_code == status.HTTP_200_OK
    assert len(response.json()) == 2
    assert response.json()[0]["name"] == "Test User 1"
    assert response.json()[1]["name"] == "Test User 2"


def test_get_user_by_id(client: TestClient):
    """Test getting a user by ID."""
    user_id = "123e4567-e89b-12d3-a456-426614174000"
    response = client.get(f"/users/{user_id}")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["id"] == user_id
    assert response.json()["name"] == "Test User 1"
    assert response.json()["email"] == "test1@example.com"


def test_get_user_not_found(client: TestClient):
    """Test getting a non-existent user."""
    user_id = "999e4567-e89b-12d3-a456-426614174000"
    response = client.get(f"/users/{user_id}")
    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json()["detail"] == "User not found"


@patch("app.models.user.UserCreate.dict")
def test_create_user(mock_dict, client: TestClient):
    """Test creating a new user."""
    # Mock the dict method to return the user data
    mock_dict.return_value = {
        "name": "New User",
        "email": "new@example.com"
    }
    
    user_data = {
        "name": "New User",
        "email": "new@example.com"
    }
    response = client.post("/users/", json=user_data)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["name"] == "New User"
    assert response.json()["email"] == "new@example.com"
    assert "id" in response.json()


@patch("app.routers.users.UserCreate")
def test_update_user(mock_user_create, client: TestClient):
    """Test updating a user."""
    # Mock the dict method for the user data
    mock_instance = mock_user_create.return_value
    mock_instance.dict.return_value = {"name": "Updated User"}
    
    user_id = "123e4567-e89b-12d3-a456-426614174000"
    user_data = {
        "name": "Updated User"
    }
    response = client.put(f"/users/{user_id}", json=user_data)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["id"] == user_id
    assert response.json()["name"] == "Updated User"
    assert response.json()["email"] == "test1@example.com"


def test_delete_user(client: TestClient):
    """Test deleting a user."""
    user_id = "123e4567-e89b-12d3-a456-426614174000"
    response = client.delete(f"/users/{user_id}")
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert response.content == b""