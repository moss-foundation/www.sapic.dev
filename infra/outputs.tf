output "pages_project_name" {
  value       = cloudflare_pages_project.sapic_dev.name
  description = "Cloudflare Pages project name"
}

output "pages_subdomain" {
  value       = cloudflare_pages_project.sapic_dev.subdomain
  description = "Cloudflare Pages subdomain"
}

output "pages_url" {
  value       = "https://${cloudflare_pages_project.sapic_dev.subdomain}"
  description = "Cloudflare Pages URL"
}

output "custom_domain" {
  value       = "https://sapic.dev"
  description = "Custom domain URL"
}
