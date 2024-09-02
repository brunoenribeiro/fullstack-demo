# TODO: BIND MOUNT THIS TO HAVE ACTIVE DEVELOPMENT
# TODO: RUN COMMANDS TO POPULATE DATABASE WITH DATA FROM COURSE
FROM node:20 AS builder
WORKDIR /builder
COPY package*.json .
RUN npm ci
COPY . .

FROM alpine:3.20.2
RUN apk add --no-cache nodejs
RUN addgroup -S node && adduser -S node -G node
USER node
WORKDIR /app
COPY --from=builder --chown=node:node /builder /app

CMD ["node", "server.js"]
