FROM node:22-alpine

WORKDIR /app

# Skopiuj package.json i package-lock.json jeśli istnieją
COPY package*.json ./

RUN npm install && \
    npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]