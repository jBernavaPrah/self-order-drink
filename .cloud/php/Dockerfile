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
# For Thinker
RUN mkdir /home/www && chown www /home/www
USER www


