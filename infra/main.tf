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

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Cloudflare Pages project
resource "cloudflare_pages_project" "sapic_dev" {
  account_id        = var.cloudflare_account_id
  name              = "www-sapic-dev"
  production_branch = "main"
}

# Custom domain for the Pages project
resource "cloudflare_pages_domain" "sapic_dev" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.sapic_dev.name
  name         = "sapic.dev"
}

# DNS record for the custom domain
resource "cloudflare_dns_record" "sapic_dev_root" {
  zone_id = var.cloudflare_sapic_dev_zone_id
  name    = "@"
  content = cloudflare_pages_project.sapic_dev.subdomain
  type    = "CNAME"
  proxied = true
  ttl     = 1
  comment = "www.sapic.dev root domain"
}

# www subdomain
resource "cloudflare_dns_record" "sapic_dev_www" {
  zone_id = var.cloudflare_sapic_dev_zone_id
  name    = "www"
  content = cloudflare_pages_project.sapic_dev.subdomain
  type    = "CNAME"
  proxied = true
  ttl     = 1
  comment = "www.sapic.dev www subdomain"
}
