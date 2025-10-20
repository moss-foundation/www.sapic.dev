set shell := ["bash", "-eu", "-o", "pipefail", "-c"]

run:
    @pnpm dev

assert-env-var VAR:
    @if [ -z "$${VAR}" ]; then \
      echo "❌ Environment variable '${VAR}' is not set"; \
      exit 1; \
    fi

deploy:
    #!/usr/bin/env bash
    set -euo pipefail

    # Load environment variables from .env
    if [ -f .env ]; then
        set -a
        source .env
        set +a
    else
        echo "❌ .env file not found. Please create it with required variables"
        exit 1
    fi

    just assert-env-var CLOUDFLARE_ACCOUNT_ID
    just assert-env-var CLOUDFLARE_API_TOKEN
    just assert-env-var CLOUDFLARE_SAPIC_DEV_ZONE_ID
    just assert-env-var TF_API_TOKEN

    echo "🏗️  Building the application..."
    pnpm install
    pnpm build

    echo "🌍 Creating infrastructure with Terraform..."
    cd infra
    
    # Setup Terraform Cloud token
    export TF_TOKEN_app_terraform_io="${TF_API_TOKEN}"
    
    export TF_VAR_cloudflare_api_token="${CLOUDFLARE_API_TOKEN}"
    export TF_VAR_cloudflare_account_id="${CLOUDFLARE_ACCOUNT_ID}"
    export TF_VAR_cloudflare_sapic_dev_zone_id="${CLOUDFLARE_SAPIC_DEV_ZONE_ID}"
    
    terraform init
    terraform apply -auto-approve
    
    cd ..
    
    echo "📦 Deploying content to Cloudflare Pages..."
    export CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN}"
    export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID}"
    
    pnpm wrangler pages deploy dist \
      --project-name=www-sapic-dev \
      --branch=main \
      --commit-dirty=true
    
    echo "✅ Deployment completed!"
    echo "🌐 Your site should be available at:"
    echo "   - https://sapic.dev"