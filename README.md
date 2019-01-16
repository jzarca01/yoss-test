# Movie Quizz

## Progression

- [x] Config initiale
- [x] Récupération des données de TMDB
- [x] Composants graphiques
- [x] Gestion des états de jeu
- [] Affichage des scores
- [] Timer
- [] Equilibrage des réponses

## Enoncé

Nous allons coder un jeu nommé **Movie Quizz**, qui teste la culture cinématographique du joueur.

**Le principe de base est ultra simple:**

A chaque round, on présente un acteur et une affiche de film.
Le joueur doit dire si l'acteur a joué dans le film présenté.

A la première mauvaise réponse, game over. Le jeu continue tant que le joueur donne des bonnes réponses.

Et voilà, plutôt basique, mais efficace.


## Ce qu'on demande

Une **Single Page Application**, codée avec **React**. On te laisse libre sur le reste de la stack. On aime bien les (bonnes) surprises ;)

Côté DB, pas de pré-requis: soit tout en mémoire, soit du local storage, soit .... ce que tu veux, mais ne perds pas trop de temps sur cette partie, au détriment de la partie Front.

Réalise le tout dans un repo git pour qu'on puisse ensuite voir comment tu organises tes commits, faire les codes reviews nécessaires, etc..

### Pré-requis

Dans cette app, on a besoin d'une source de données sur le cinéma. 

On te conseille fortement d'utiliser l'[API](https://www.themoviedb.org/documentation/api) de **The Movie Database**.

Si tu préfères une autre API, no problem ;)


### Le jeu (/play)

#### Etat initial

Le jeu est dans son état initial, on affiche seulement un bouton **Play**.
Dès que le joueur clique dessus, le jeu commence (obviously)

#### Jeu en cours

- Un **timer**, implacable, affiche le temps qui s'écoule pendant toute la durée du jeu.

- On affiche le **nombre de bonnes réponses** du joueur

- Juste en dessous, on présente aléatoirement **un acteur** et **une affiche de film**

- Le joueur doit dire **si l'acteur a joué dans ce film** (des boutons OUI / NON suffiront ici).

- Si la réponse est **bonne** => on recommence avec une autre paire Film / Acteur

- Si la réponse est **mauvaise** => le jeu passe en état "Game Over"

*Hint 1: Pour une meilleure expérience de jeu, il est préférable de se baser sur des données "populaires"*

*Hint 2: Toujours dans le même but d'améliorer l'expérience de jeu, il faudrait éviter le fait que la bonne réponse soit majoritairement "non", mais essayer d'équilibrer les oui et les non*


#### Game Over

- On stoppe le timer

- On affiche le récapitulatif du jeu: Temps écoulé / Nombre de bonnes réponses

- Si les conditions sont réunies (cf partie "Highscores", on propose au joueur de l'inclure dans les highscores (on lui demandera seulement son nom)

- Un bouton "Play again" permet de rejouer

### Highscores (/highscores)

Les 10 meilleures parties sont listées ici, classées par nombre de bonnes réponses

Pour chaque ligne de highscore, on affiche le nombre de bonne réponses, le temps écoulé, et le nom du joueur

## Bonus

Ce sont des idées en vrac, à faire si tu as envie et le temps.
Si tu as d'autres idées, no problem ;)

 - Pendant le jeu, il serait cool d'afficher au joueur son **meilleur score à côté du score actuel**, et de trouver une façon de **notifier** le joueur lorsqu'il fait mieux que son meilleur score

 - Pouvoir **reset les highscores**

 - Trouver d'**autres modes de jeu** et les implémenter (là on serait plus en mode "Survivor", mais on pourrait par exemple imaginer de fixer le nombre de rounds, de faire un max de bonnes réponses en 30 secondes, etc...)
 
 - Imaginer un mode multijoueurs
 
 - Les **perfs** sont importantes aussi. Pense au poids, rapidité, mise en cache, code splitting, etc...
