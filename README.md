<img src="https://ugeek.github.io/blog/images-blog/node.png" width="150px" align="right" />

# eCommerce APP 

### **Description**

eCommerce APP developed in a MEVN stack

### **Requirements**

- Node.js v16.0+
- MongoDB Community Server or MongoDB Atlas account (https://www.mongodb.com/)

### **Features**

✔️ TypeScript

✔️ MongoDB

✔️ Email notifications (nodemailer + sendgrid)

✔️ Logging (winston)

✔️ Authentication (JWT)

✔️ Sockets (socket.io)

✔️ Validation (joi)

✔️ Docs (swagger)


### **Install**

- Install Server dependencies:

```console
$ cd server && npm install
```

- Install Client dependencies:

```console
$ cd client && npm install
```

### **Build and Run Project**

```console
$ npm run build:start
```

### Docker

Create the Docker image:
```console
$ docker build .
```

Create container from that image and run it on port 8080, create an .env file with the environment variables as shown in the env.example file and run:
```console
$ docker run -p 8080:8080 --env-file ./.env ecommerce
```
