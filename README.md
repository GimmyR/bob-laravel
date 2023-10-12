# Bread on Board

Bread on Board is a web application developed in Laravel with Inertia, React and Postgres, which lets you create recipes and consult them in To-Do List mode.

## Prerequisites

* **PHP** version **8.1.2**
* **Composer** version **2.5.8**
* **Node** version **18.18.0**
* **NPM** version **9.7.1**
* **Postgres** version **14.9**

## Environment variables

The environment variables that must be supplied are :

* *APP_NAME*
* *APP_ENV*
* *APP_KEY*
* *APP_DEBUG*
* *APP_URL*
* *DB_CONNECTION*
* *DB_HOST*
* *DB_PORT*
* *DB_DATABASE*
* *DB_USERNAME*
* *DB_PASSWORD*
* *MAIL_MAILER*
* *MAIL_HOST*
* *MAIL_PORT*
* *MAIL_USERNAME*
* *MAIL_PASSWORD*
* *MAIL_ENCRYPTION*
* *MAIL_FROM_ADDRESS*
* *MAIL_FROM_NAME*

## Dependency installation

Run commands `composer install` and `npm install`.

## Create the tables of the database

Run the command `php artisan migrate`.

## Server launch

Run the command `php artisan serve`.
If you are in developement mode, run the command `npm run dev` on another terminal.

## Build Front-End part for production

Run the command `npm run build`.