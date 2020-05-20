#
# PHP Dependencies
#
FROM composer:latest as vendor

COPY database/ database/

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

#
# Frontend
#
FROM node:12 as frontend

RUN mkdir -p /app/public

COPY package.json webpack.mix.js yarn.lock tsconfig.json /app/
COPY resources/ts /app/resources/ts

WORKDIR /app

RUN yarn install  && yarn production

#
# Application
#
FROM php:7.4-fpm

WORKDIR /var/www/html

RUN DEBIAN_FRONTEND=noninteractive

RUN set -xe; \
    useradd www; \
    apt-get update -y && apt-get install -y openssl zip unzip wget libpq-dev libzip-dev git

RUN docker-php-ext-install pdo pdo_pgsql pgsql zip
RUN docker-php-source extract && \
        pecl install redis && \
        docker-php-ext-enable redis && \
        docker-php-source delete

COPY . /var/www/html
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
COPY --from=frontend /app/public/js/ /var/www/html/public/js/
COPY --from=frontend /app/mix-manifest.json /var/www/html/mix-manifest.json
