## API Reference

## Hosted Link

```
    https://restro-management.vercel.app/
```

## Endpoints

### POST /user/signup

```
    https://restro-management.vercel.app/user/register
```

#### Request Body

```
    {
      "name": "vandit",
      "lname": "vasa",
      "email": "vasavandit@gmail.com",
      "password": "vandit1234",
      "role": "user",
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
    https://restro-management.vercel.app/user/login
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
    https://restro-management.vercel.app/user/logout
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

### POST /user/forgotpassword

```
    https://restro-management.vercel.app/user/forgotpassword
```

#### Request Body

```
    {
      "email": "vasavandit@gmail.com"
    }
```

#### Response

```
    {
      "success": true,
      "message": "Email sent to: vasavandit@gmail.com"
    }
```

### PUT /user/resetpassword/:token

```
    http://restro-management.vercel.app/user/resetpassword/d65158cd52f9d6375906e266d9c763ea836020e7002e3fd01232af656a797e88
```

#### Request Body

```
    {
      "password": "123456789"
    }
```

#### Response

```
    {
      "message": "Success",
      "data": {
        "user": {
          "_id": "63e540e3497c2f237c85dd60",
          "name": "vandit",
          "lname": "vasa",
          "email": "vasavandit@gmail.com",
          "password": "$2a$10$DTAx9LWl/PcJnPm3O.Sqj.HtBLeo.liE9jqCtKjo3407clOL.MoPi",
          "role": "user",
          "__v": 0
        },
        "token": {
          "val": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhc2F2YW5kaXRAZ21haWwuY29tIiwiaWF0IjoxNjc1OTc2MDIxfQ.ZEaBkqF2FSpRTPLx9OtbgQR1FtLkt5FOmw8rCxjJOuI",
          "email": "vasavandit@gmail.com",
          "_id": "63e55d557e5d2fcccc4aad7a",
          "__v": 0
        }
      }
    }
```

### GET /menu/getall/:id

```
    https://restro-management.vercel.app/menu/getall/6419ed0747b12aee4330dbd1
```

#### Response

```
    [
      {
        "name": "paneer",
        "price": 300,
        "description": "best in town",
        "_id": "641a034fecffef4c541f0352"
      },
      {
        "name": "coffee",
        "price": 660,
        "description": "best coffee",
        "_id": "641a0454e4ce2d1945c9ed90"
      }
    ]
```

### POST /menu/add

```
    https://restro-management.vercel.app/menu/add
```

#### Request Body

```
    {
      "name": "sandwich",
      "price": 250,
      "description": "club sandwich"
    }
```

#### Response

```
    {
      "name": "sandwich",
      "price": 250,
      "description": "club sandwich"
    }
```

### DELETE /menu/delete/:id

```
    https://restro-management.vercel.app/menu/delete
```

> here the `id` is of a particular menu item

#### Response

```
    {
      "message": "Item deleted successfully"
    }
```

### POST /order/create

```
    https://restro-management.vercel.app/order/create
```

#### Request Body

```
    {
      "restaurant": "641a05018e92549ceb687922",
      "customer": "641aa05ae36f5cfa9f846939",
      "items": [
        {
          "name": "641aa0dee36f5cfa9f846941",
          "quantity": 3
        }
      ]
    }
```

#### Response

```
    {
      "restaurant": "641a05018e92549ceb687922",
      "customer": "641aa05ae36f5cfa9f846939",
      "items": [
        {
          "name": "641aa0dee36f5cfa9f846941",
          "quantity": 3,
          "_id": "641c4c6f3d26b986b6832f5c"
        }
      ],
      "status": "pending",
      "_id": "641c4c6f3d26b986b6832f5b",
      "__v": 0
    }
```

### GET /order/getAll

```
    https://restro-management.vercel.app/order/getAll
```

> pass bearer token

#### Response

```
    [
      {
        "_id": "641c4c6f3d26b986b6832f5b",
        "restaurant": "641a05018e92549ceb687922",
        "customer": "641aa05ae36f5cfa9f846939",
        "items": [
          {
            "name": "641aa0dee36f5cfa9f846941",
            "quantity": 3,
            "_id": "641c4c6f3d26b986b6832f5c"
          }
        ],
        "status": "pending",
        "__v": 0
      }
    ]
```
