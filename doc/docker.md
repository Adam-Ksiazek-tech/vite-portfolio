# Docker


## Docker local
docker exec -it vite-react sh

docker build -f Dockerfile.dev -t vite-dev .
docker run -p 5173:5173 vite-dev

## Docker PROD

docker compose -f docker-compose.prod.yml up -d --build