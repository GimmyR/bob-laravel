# Bread on Board

Bread on Board (littéralement "pain sur la planche") est une application web développée sous *Laravel* avec *Inertia*, *React* et *Postgres*, qui permet de créer des recettes de cuisine et de les consulter en mode To-Do List.

## Prérequis

* **PHP** version **8.1.2** (ou plus)
* **Composer** version **2.5.8** (ou plus)
* **Node** version **18.18.0** (ou plus)
* **NPM** version **9.7.1** (ou plus)
* **Postgres** version **14.9** (ou plus)

## Variables d'environnement

Les variables d'environnement qu'il faut absolument fournir sont celles qui sont précédées par les préfixes *DB_* et *MAIL_* (qui permettent respectivement de se connecter à la base de données et de se connecter à un système de mailing).

## Installation des dépendances

Exécutez les commandes `composer install` et `npm install`.

## Créer un lien symbolique entre */public/storage* et */storage/app/public*

Exécutez la commande `php artisan storage:link`.

## Créer les tables de la base de données

Exécutez la commande `php artisan migrate`.

## Lancement du serveur

Exécutez la commande `php artisan serve`.
Si vous êtes en mode développement, exécutez la commande `npm run dev` sur un autre terminal.

## Build la partie Front-End pour la production

Exécutez la commande `npm run build`.