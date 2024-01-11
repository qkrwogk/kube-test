FROM node:20-alpine AS builder

WORKDIR /app

COPY . /app
RUN cd /app && \
    npm install && \
    npm run build

FROM node:20-alpine AS app

WORKDIR /app

USER node

COPY --chown=node:node --from=builder /app/dist /app/dist
COPY --chown=node:node --from=builder /app/node_modules /app/node_modules

RUN cd /app

EXPOSE 3000

CMD ["node", "dist/main"]
