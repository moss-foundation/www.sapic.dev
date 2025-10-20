terraform {
  required_version = ">= 1.5.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.11"
    }
    time = {
      source  = "hashicorp/time"
      version = "~> 0.11"
    }
  }

  cloud {
    organization = "moss-foundation"
    workspaces {
      name = "www-sapic-dev"
    }
  }
}
