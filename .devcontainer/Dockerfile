ARG VARIANT="3.15"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}

RUN apk update \
    && apk add --no-cache \
        leiningen \
        nodejs \
        npm

RUN wget -O - \
    https://download.clojure.org/install/linux-install-1.11.0.1100.sh \
    | bash
