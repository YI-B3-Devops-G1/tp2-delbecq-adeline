# B3 Devops - TP 2
## Info
mail: adeline.delbecq@ynov.com
github_username: redwappin

## Objectifs du tp
L'objectif du TP est d'utiliser une api en nodeJS associée à un reverse proxy nginx afin d'obtenir des informations provenant de bases de données redis et postgres.

## Prérequis
Installez docker et docker-compose.

## Installation
Clonez le dépot : ***git clone https://github.com/YI-B3-Devops-G1/tp2-delbecq-adeline.git***

## Fonctionnement
Positionnez vous à la racine du dossier du dépot et lancez la commande 
**docker-compose up --build**.


## Utilisation
localhost:3000 Page d'acceuil Nginx par défaut

localhost:3000/api Message'hello world'

localhost:3000/api/status Page de l'api node qui récupère le uptime de postgres et le nombre de clients connectés sur redis