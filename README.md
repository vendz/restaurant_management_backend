## API Reference

## Hosted Link

```
    http://127.0.0.1:3000/
```

## Endpoints

### POST /user/signup

```
    http://127.0.0.1:3000/user/register
```

#### Request Body

```
    {
      "name": "vandit",
      "lname": "vasa",
      "email": "vasavandit@gmail.com",
      "password": "vandit1234",
    }
```

#### Response

```
    {
      "message": "Signup successful",
      "data": {
        "user": {
          "name": "vandit",
          "lname": "vasa",
          "email": "vasavandit@gmail.com",
          "password": "$2a$10$QTnoaYoqzxs6.lL1yHqdYuAAv2weqAbXeVXQWctVGJexkm2Kys1KW",
          "role": "user"
          "_id": "63de552e16e351ad3c0a9df7",
          "__v": 0
        },
        "token": {
          "val": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhc2F2YW5kaXRAZ21haWwuY29tIiwiaWF0IjoxNjc1NTE1MTgzLCJleHAiOjE2NzU1MTg3ODN9.yyUYvMQ7puGCeOKHFu0Dbjd-M0uagHxoWsKpi7AL1xE",
          "email": "vasavandit@gmail.com",
          "_id": "63de552f16e351ad3c0a9df9",
          "__v": 0
        }
      }
    }
```

### POST /user/login

```
    http://127.0.0.1:3000/user/login
```

#### Request Body

```
    {
      "email": "vasavandit@gmail.com",
      "password": "vandit1234"
    }
```

#### Response

```
    {
      "message": "Signup successful",
      "data": {
        "user": {
          "_id": "63de552e16e351ad3c0a9df7",
          "name": "vandit",
          "lname": "vasa",
          "email": "vasavandit@gmail.com",
          "password": "$2a$10$QTnoaYoqzxs6.lL1yHqdYuAAv2weqAbXeVXQWctVGJexkm2Kys1KW",
          "role": "user",
          "__v": 0
        },
        "token": {
          "val": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhc2F2YW5kaXRAZ21haWwuY29tIiwiaWF0IjoxNjc1NTE1MjA5LCJleHAiOjE2NzU1MTg4MDl9.XkIT7dsSCkZazRIKmWS5JmxGkxuz4A1_YwmRwLlmW5c",
          "email": "vasavandit@gmail.com",
          "_id": "63de554916e351ad3c0a9dfc",
          "__v": 0
        }
      }
    }
```

### Note: After login set the authorization header as Bearer token

### POST /user/logout

```
    http://127.0.0.1:3000/user/logout
```

#### Headers

```
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdubyI6IjIwQklUMDA0NSIsImlhdCI6MTY2MzMxNTY4MX0.V57W5JI9jYTAJvignOgdtWzzMQBQMkmrith9dZ_J49A
```

#### Response

```
    {
      "message": "Logout successful",
      "data": {
        "acknowledged": true,
        "deletedCount": 1
      }
    }
```
