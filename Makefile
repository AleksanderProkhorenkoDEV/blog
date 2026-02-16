.PHONY: help up down build clean

help:
	@echo "List of available commands:"
	@echo "  make up        - Start the development environment"
	@echo "  make down      - Stop the development environment"
	@echo "  make build     - Build the development environment"
	@echo "  make clean     - Remove all containers and volumes"
	@echo "  make help      - Show this help message"

up:
	cd infra && docker-compose -f docker-compose.dev.yml up -d
	@echo "Waiting for the containers to be ready..."
	@sleep 5
	@echo "✅ App deployed!"
	@echo "📌 Next.js: http://localhost:3000"
	@echo "📌 pgAdmin: http://localhost:8080"

down:
	cd infra && docker-compose -f docker-compose.dev.yml down

build:
	cd infra && docker-compose -f docker-compose.dev.yml up -d --build
	@echo "Waiting for the containers to be ready..."
	@sleep 10
	@echo "✅ App deployed!"
	@echo "📌 Next.js: http://localhost:3000"
	@echo "📌 pgAdmin: http://localhost:8080"

clean:
	cd infra && docker-compose -f docker-compose.dev.yml down -v --rmi all
