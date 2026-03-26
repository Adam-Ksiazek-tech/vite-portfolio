FROM node:22-alpine

WORKDIR /app

# Zainstaluj git i zależności systemowe potrzebne do npm
RUN apk add --no-cache git bash openssh

# Skopiuj package.json i package-lock.json
COPY package*.json ./

# Zainstaluj wszystkie zależności + devDependencies
RUN npm install

# Skopiuj resztę kodu
COPY . .

# Zainstaluj Tailwind, PostCSS i Autoprefixer jeśli są w devDependencies
RUN npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# Otwórz port dla Vite
EXPOSE 5173

# Domyślny start kontenera (Vite dev server)
CMD ["npm", "run", "dev", "--", "--host"]