set shell := ["bash", "-eu", "-o", "pipefail", "-c"]

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