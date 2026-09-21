FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npx tailwindcss \
    -i ./public/css/styles.css \
    -o ./public/css/output.css

EXPOSE 3000

CMD ["node", "app.js"]
