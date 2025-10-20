variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API token with Workers edit permissions"
}

variable "cloudflare_account_id" {
  type        = string
  description = "Cloudflare account ID"
}

variable "cloudflare_sapic_dev_zone_id" {
  type        = string
  description = "Cloudflare Zone ID for sapic.dev"
}
