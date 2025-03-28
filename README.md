# [Havre-Sac.fr](https://havre-sac.fr/home) (Anciennement "wakfull.github.io") by Aekami

## But du site
Un petit site de référence concernant l'univers du jeu Wakfu, ayant pour but de répondre aux questions récurrentes des joueurs.
Un accent est mis sur l'explication aux nouveaux joueurs, pour leur permettre d'aborder le jeu facilement.

## A l'attention des Dev
- Le site est un projet Angular
- Comme le site est une page Github statique, toutes les sources sont comprises. Ce qui implique que le contenu du site est +- hardcodé.
    - La plupart des articles sont écrits directement dans l'html des composants, comme à l'ancienne.
        - Ceci dit, lorsque celà s'y prête, les sources sont placées dans des services appropriés, lesquels sont réutilisés à travers divers composants.
        - Vu qu'il n'y a pas d'API à appeller pour retrieve ces data, elles sont souvent hardcodées dans ces services.

# FAQ Générale
### Est ce que le site est mis à jour ?
Oui, je mets à jour le site semi-régulièrement. Le rythme n'est pas le plus soutenu, mais je rappelle qu'il s'agit d'un projet perso mené sur mon temps libre.

### Est ce que le site est en plusieurs langues ?
Pour l'instant non. A termes il est prévu qu'il soit en Français et en Anglais.

### Est ce que je peux proposer un changement / écrire un article / ...
Oui, je t'invite à rejoindre le [Discord](https://discord.com/invite/49EaCMrYsY) et à me faire part de tes idées !

### Where thème sombre ?
(╯°□°）╯︵

Blague à part, un thème sombre sera intégéré à terme, mais ce n'est pas la priorité du tout. Le thème "classique" du site a pour avantage d'être facile à lire, dans un site où il y a beaucoup de texte.
Les thèmes sombres sont jolis, mais se prêtent assez mal à la lecture.
Aussi, les thèmes sombres ont tendance à être moins accessibles aux gens ayant des problèmes de vison. De ce fait, tant que le site ne supporte qu'un seul thème, le choix se porte sur un thème accessible.

### Le site manque d'images / illustrations / mise en page
Oui, je suis au courant. Je n'ai malheureusement pas la fibre artistique.
C'est également un problème venant de la façon très wikipedia que j'utilise pour les articles. A terme j'ai l'intention de changer la présentation des diverses parties d'articles, ce qui devrait rendre la navigation moins écrasante.

# FAQ Devs
## Comment faire tourner ?
Prérequis :
- [NodeJS](https://nodejs.org/en)
- Angular CLI
    - `npm install -g @angular/cli`
- Git 
    - `git clone https://github.com/Wakfull/wakfull.github.io.git`

Cheatsheet pour ceux qui ne sont pas familiers avec Angular :
- (npm install)
- Le site se lance en local  avec : `ng serve`  
- Le build peut être généré avec : `ng build`

Testé  avec Angular CLI 18 et Node 22.  
/!\\ Ne fonctionne pas avec Angular < 17  

## Comment est ce que le code est généré ?
J'utilise Angular SSG et SSR pour générer le siet sur base des sources. Ce repo peut être vu comme étant divisé en deux parties :
- `/docs` qui contient le code généré. Aka, c'est celui qui est véritablement montré lorsqu'on navigue vers le site.
- `/` et `/src` qui contiennent les sources du projet. Aka, c'est le code "de base".

Le site est généré en utilisant `ng build`.
A noter qu'il faut ensuite remonter le code généré d'un directory.
(mv /docs/browser/* /docs/ )


## Pourquoi est ce que X et Y ne sont pas consistants ? Pourquoi parfois hardcodé ? Pourquoi parfois service ? Il y a des \<br\> dans certains de tes html ???
Malgré sa petite taille, le site souffre légèrement de legacy code.

Le site a en réalité commencé sous la forme de mes notes (des documents markdown [Obsidian pour ceux qui connaissent]) que j'avais mises à disposition et adaptées en html "vite fait" pour répondre aux questions récurrentes sur le stream. Ca avait l'avantage d'être "quick and easy".

Puis j'ai commencé à ajouter du contenu au site. Et encore. Et encore. Et nous voilà à aujourd'hui, à prouver encore une fois l'adage:

"Il n'y a rien de plus permanent qu'une solution temporaire"

De ceci découle :
- Le CSS du site est +- global. Le problème étant que certains éléments de certains composants ont été stylisés en se disant que le site a les couleurs qu'il a. Ce qui fait par exemple qu'un thème sombre cacherait visuellement certains éléments.
    - A noter que j'évite de faire ceci dans la plupart des composants "récents" (dans la mesure du possible). Mais il faudrait refactor pleins de petites choses à gauche à droite, rien de difficile, mais très time-consuming.
    - Et donc de ceci découle la difficulté d'ajouter un thême sombre.

- L'utilisation de balises \<br\> dans certains articles. Ils viennent tout droit du markdown.
    - Les articles plus récents utilisent soit \<p\> soit des \<div\> appropriées.

- Les articles sont écrits directement dans l'htlm.
    - Ici, il s'agit plutot d'une contrainte technique; à savoir qu'il n'existe pas de serveur backend. Les datas doivent donc vivre quelque part. Le mieux serait probablement dans des .json / .xml / .yaml / .toml ou autre séparés, lesquels seraient importés dans des services, lesquels seraient appelés par les composants, et finalement displayed. Ca fait beaucoup de complexité pour quelque chose qui peut simplement être écrit dans l'html. Vu ce qui est attendu du site, je pense que sur-complexifier n'a pas de sens. Le jour où je refais "proprement" le site avec un vrai serveur backend, je devrais de toute façon affectuer un refactor global.

