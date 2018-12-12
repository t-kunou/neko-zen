FROM node:8.9.4-alpine

ENV NODE_ENV=development
ENV PORT=2525

RUN npm install -g express-generator@4.16.0

WORKDIR /app

EXPOSE 2525

CMD ["npm", "start"]