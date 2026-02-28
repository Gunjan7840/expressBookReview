cURL Command:
curl -i -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{"username":"gunjan","password":"1234"}'

Output:
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "message": "Login successful",
  "token": "JWT token generated"
}
