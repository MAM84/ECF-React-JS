ECF REACT JS

CEFIM : Formation : Cours JS REACT JS

Projet à rendre pour cette matière afin de valider la formation

Consignes :

Le but de l'exercice est de créer une application web permettant aux utilisateurs de rechercher des informations sur de la musique en utilisant l'immense base de donnée de MusicBrainz.
Fonctionnement de l'application
Vous devez impérativement implémenter les fonctionnalités suivantes :

Rechercher
En arrivant sur votre application, l'utilisateur doit pouvoir effectuer une recherche via un formulaire.
Il doit impérativement pouvoir choisir de rechercher parmi les artistes, les albums, les titres de musique ou tous ces critères simultanément.
L'utilisateur doit pouvoir lancer sa recherche en cliquant sur un bouton ou en appuyant sur Entrée dans l'un des champs.

Zone de résultats
La zone de résultats est là pour afficher les résultats d'une recherche.
Elle doit permettre d'afficher une liste (sous forme de tableau ou autre) de résultats ayant chacun un numéro (position dans la liste de résultat), un titre, un artiste, un album et un bouton permettant d'obtenir plus d'information sur ledit résultat.
Le nombre total de résultats de la recherche doit aussi être affiché à l'utilisateur.
La zone doit également afficher un message si aucune recherche n'a été effectué ou qu'il n'y a aucun résultat pour la recherche en cours.
Pour finir, si la recherche est en cours (s'il y a un chargement), cela devra être d'une manière ou d'une autre indiqué à l'utilisateur.

Note : l'API ne vous retournera peut-être pas tous les résultats en une seule requête. Il est toutefois impératif que vous affichiez tous les résultats ! (Plus d'informations à ce propos plus bas)

Panneau d'informations
Une fois les résultats obtenus, l'utilisateur doit pouvoir afficher plus d'informations sur une musique précise. En cliquant sur le bouton associé à un résultat, un panneau (représentable sous la forme d'une modal, d'un panneau latéral, etc...) doit être affiché sur la page afin d'afficher lesdites informations.
Parmi ces informations, on doit voir apparaitre le titre de la musique, le(s) artiste(s), le(s) album(s), le(s) genre(s), la durée de la musique, la note global qu'elle a reçu (si l'information est disponible) et l'ensemble des pochettes d'albums où elle apparait.

Développement
Vous devez impérativement respecter les consignes suivantes.
Langage/framework du projet
Vous pouvez développer votre application web de 2 façons possibles :
    En HTML, CSS et JavaScript vanilla (sans framework externe)
    En ReactJS
Vous pouvez utiliser toutes les bibliothèques dont vous avez besoin à l'exception des suivantes :
    jQuery, TypeScript et tout autre extension de langage imposant un format d'écriture du JavaScript.
    N'importe quel bibliothèque, officiel ou non, de MusicBrainz. Vous devez impérativement manipuler leur API et non une bibliothèque.

Rendu visuel
Bien que les bibliothèques de gestion du CSS tel que Bootstrap soient autorisées, votre page doit impérativement être user friendly et facile à utiliser.
Le fait que les actions soient simples et/ou guidées sera prit en compte.
La beauté graphique n'est quant à elle pas prise en compte, seulement l’expérience utilisateur.

Outils
Comme précisé plus haut, vous allez utiliser la base de donnée du site MusicBrainz comme source.
MusicBrainz est un site répertoriant une immense collection de musiques, alimenté par une grande communauté. Leur API est notamment utilisée par de grands sites de streaming musical.
Vous allez devoir utiliser leur API pour votre application. Les documentations sont disponibles ici :
    Web Service Documentation
    Cover Art Documentation

Faites toutefois attention, certaines de vos opérations nécessitent d'effectuer plusieurs requêtes à la suite. Or, MusicBrainz peut bloquer vos requêtes si ces dernières ne sont pas suffisamment espacées.

Note reçue : 19/20