cURL Command:
curl -X POST http://localhost:5000/auth/login ^
-H "Content-Type: application/json" ^
-d "{\"username\":\"gunjan\",\"password\":\"1234\"}"

Output:
{
  "message": "Login successful",
  "token": "JWT token generated"
}
