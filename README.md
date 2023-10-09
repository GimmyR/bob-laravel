# Bread on Board

Bread on Board (littéralement "pain sur la planche") est une application web développée sous *Laravel* avec *Inertia*, *React* et *Postgres*, qui permet de créer des recettes de cuisine et de les consulter en mode To-Do List.

## Prérequis

* **PHP** version **8.1.2** (ou plus)
* **Composer** version **2.5.8** (ou plus)
* **Node** version **18.18.0** (ou plus)
* **NPM** version **9.7.1** (ou plus)
* **Postgres** version **14.9** (ou plus)

## Variables d'environnement

Les variables d'environnement qu'il faut absolument fournir sont *APP_NAME*, *APP_ENV*, *APP_KEY*, *APP_DEBUG*, *APP_URL*, *DB_CONNECTION*, *DB_HOST*, *DB_PORT*, *DB_DATABASE*, *DB_USERNAME*, *DB_PASSWORD*, *MAIL_MAILER*, *MAIL_HOST*, *MAIL_PORT*, *MAIL_USERNAME*, *MAIL_PASSWORD*, *MAIL_ENCRYPTION*, *MAIL_FROM_ADDRESS*, *MAIL_FROM_NAME*

## Installation des dépendances

Exécutez les commandes `composer install` et `npm install`.

## Créer les tables de la base de données

Exécutez la commande `php artisan migrate`.

## Lancement du serveur

Exécutez la commande `php artisan serve`.
Si vous êtes en mode développement, exécutez la commande `npm run dev` sur un autre terminal.

## Build la partie Front-End pour la production

Exécutez la commande `npm run build`.