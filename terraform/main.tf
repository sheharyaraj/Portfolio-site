terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

resource "docker_container" "portfolio" {
  image = "ghcr.io/sheharyaraj/portfolio-site:${var.image_tag}"
  name  = "portfolio-dev"
  
  ports {
    internal = 3000
    external = 3000
  }
  
  # Environment variables
  env = [
    "NODE_ENV=development",
    "NEXT_PUBLIC_CHATBOT_URL=http://localhost:7860"
  ]
  
  restart = "unless-stopped"
  
  # Health check
  healthcheck {
    test         = ["CMD", "curl", "-f", "http://localhost:3000"]
    interval     = "30s"
    timeout      = "10s"
    start_period = "30s"
    retries      = 3
  }
}