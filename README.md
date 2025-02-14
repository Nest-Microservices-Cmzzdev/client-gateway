<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Client Gateway

The gateway is the communication point between our clients and our services. It is an owner to receiving requests, sending them to the corresponding services and returning the response data to the client.

## Dev

1. Clone rep
2. Install dependencies
3. Create `.env` file based on `env.example`
4. Have launched NATS server

```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

5. Have launched the microservices to be consumed

6. ```
   docker compose up -d
   ```
7. Exec `npm run start:dev`
