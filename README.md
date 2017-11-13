# Projet Bases de données évoluées

## 1. Base de données

`MongoDB`

## 2. Datasets utilisés 
[OpenDataSoft](https://public.opendatasoft.com/explore/dataset/affaires-de-corruption-en-france/)

Le dataset présente les affaires de corruption en France (avec condamnation).

### Champs

* Description
* Vie publique (oui/non)
* Personnes ou entités impliquées
* Date des faits
* Date de la condamnation
* Juridiction du jugement
* Lieu
* Département
* Région
* Références
* Tags
* Entités impliquées
* Infractions pertinentes

## 3. Intégration des données

### 3.1 Affaires de corruption

Script JS qui
* Simplifie la mise en forme des données
* Rajoute les numéros de départements pour les aggrégations
* Corrige les noms de lieux

## 4. Requêtes
### 4.1 Nombre d'affaires de corruption par ville

`db.affairesCorruption.aggregate([{$group:{_id:"$lieu", affaires:{$sum:1}}}])`

### Exécution

`mongo localhost <fichier>.js`