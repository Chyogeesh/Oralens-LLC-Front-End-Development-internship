import pytest
from app import app

@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_submit(client):
    data = {
        "name": "John Doe",
        "age": "30",
    }
    response = client.post("/submit", data=data)
    assert response.status_code == 400  # File is missing
