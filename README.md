## Full Stack Web Developer Challenge 
exelero.com

## Project Requirements
You own a drink bar with self-order through a tablet as a menu.  
You want your customer to have a drink experience that starts from
selecting a favourite ingredient.  
Customers can choose one ingredient and have an overview of
suggested drinks that matches, then they can make an order
directly from the tablet.  

You will use data from TheCocktailDB.com.

## Technologies
Laravel, SQL Database (PostgreSQL), Docker, React (typescript)

##Installation
Development environment requirements:

Docker >= 17.06 CE  
Docker Compose

Setting up your development environment on your local machine:  

```bash
$ git clone https://github.com/jbernavaprah/self-order-drink.git  
$ cd self-order-drink
$ cp .env.example .env
$ docker-compose run --rm --no-deps composer install
$ docker-compose run --rm --no-deps artisan key:generate
$ docker-compose run --rm --no-deps artisan migrate
$ docker-compose run --rm --no-deps artisan storage:link
$ docker-compose run --rm --entrypoint="yarn" --no-deps  npm install
$ docker-compose run --rm --entrypoint="yarn" --no-deps  npm dev
$ docker-compose up -d
```

Now you can access the application via http://localhost:8080.

**There is no need to run ```php artisan serve```. PHP is already running in a dedicated container.**

## What next?

- Better documentation of API.
- Docker image for production.
- Better ui and user experience.


# Packages:
- Package created for composer: jbernavaprah/cocktaildb-laravel (https://github.com/jBernavaPrah/cocktaildb-laravel)
