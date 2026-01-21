import requests

BASE_URL = "http://127.0.0.1:8000/api/"

def test_signup():
    data = {
        "username": "testuser",
        "email": "test@example.com",
        "password": "securepassword123"
    }
    response = requests.post(f"{BASE_URL}signup/", json=data)
    print(f"Signup Status: {response.status_code}, Response: {response.json()}")

def test_login():
    data = {
        "username": "testuser",
        "password": "securepassword123"
    }
    response = requests.post(f"{BASE_URL}login/", json=data)
    print(f"Login Status: {response.status_code}, Response: {response.json()}")

if __name__ == "__main__":
    test_signup()
    test_login()