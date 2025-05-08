import pytest
from fastapi import status
from fastapi.testclient import TestClient


def test_healthcheck(client: TestClient):
    """Test the healthcheck endpoint."""
    response = client.get("/")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {"status": "ok"}