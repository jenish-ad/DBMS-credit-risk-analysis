from django.db import connection
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    hashed_pwd = make_password(password)

    # Remove try/except so the error appears in the server terminal
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s)",
            [username, email, hashed_pwd]
        )
    return Response({"message": "User created successfully!"}, status=201)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    with connection.cursor() as cursor:
        cursor.execute("SELECT password_hash FROM users WHERE username = %s", [username])
        row = cursor.fetchone()

    if row and check_password(password, row[0]):
        return Response({"message": "Login successful!", "username": username}, status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)