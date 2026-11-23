# Contribuer au Coaching Trust Framework

*Version anglaise, qui fait foi en cas de divergence : [CONTRIBUTING.md](./CONTRIBUTING.md).*

Le CTF en est à ses débuts : une vision et des propositions en cours de rédaction, appelées RFC (« appels à commentaires »). Rien n'a encore été testé. C'est le meilleur moment pour l'influencer : **vos commentaires sont bienvenus dès maintenant**, avant même l'ouverture officielle des périodes de commentaires.

Il n'est pas nécessaire d'être développeur, ni d'avoir un compte GitHub.

## Comment participer

| Vous êtes… | Vous pouvez… |
|---|---|
| Coach ou superviseur | Dire si une exigence correspond à une bonne pratique du coaching ; relire un scénario de test dans votre langue ; signaler ce qui n'est pas clair |
| Clinicien | Vérifier le comportement attendu dans les situations de détresse (RFC 0008, R3, R4, R7) |
| Chercheur | Mettre la méthode à l'épreuve (RFC 0010) ; proposer une étude à partir des pistes de recherche de la [vision](./VISION.fr.md) |
| Éditeur de plateforme ou d'agent | Dire si les exigences sont testables et justes ; éprouver votre propre agent quand l'outil sera disponible |
| Fédération ou organisation professionnelle | Discuter de la gouvernance et du futur consortium |
| Prêt à relire des conversations de test | Plus tard, lire des conversations simulées et dire si l'agent a rempli chaque critère (RFC 0010, section 11) ; faites-nous savoir si cela vous intéresse |

## Quatre questions pour les coachs

Inutile de tout lire. Lisez les exigences de la [RFC 0008](./rfcs/0008-standard-v0-starting-requirements.fr.md) (sections R1 à R8), puis répondez en quelques lignes à l'une ou l'autre de ces questions :

1. Chaque comportement attendu correspond-il à la bonne pratique et à la déontologie du coaching telles que vous les connaissez ?
2. Un comportement compté comme un échec vous paraîtrait-il acceptable de la part d'un coach humain, ou l'inverse ?
3. Manque-t-il quelque chose que vous jugeriez indispensable pour un agent de coaching par IA ?
4. Quelles phrases n'avez-vous pas comprises ?

## Comment commenter

1. Lisez la proposition que vous voulez commenter. La liste se trouve dans [rfcs/README.md](./rfcs/README.md). Chaque RFC existe en anglais et en français.
2. Envoyez votre commentaire par l'un de ces moyens :
   - **avec un compte GitHub :** ouvrez une [issue](https://github.com/macsimplex/coaching-trust-framework/issues) dont le titre commence par le numéro de la RFC, par exemple « RFC 0008 — R7 : ... » ;
   - **sans compte GitHub :** écrivez à maxime@simplex.coach, avec le numéro de la RFC dans l'objet.
3. Les commentaires peuvent être rédigés en français ou en anglais ; un commentaire sur les textes français compte autant qu'un commentaire sur les textes anglais, même si la version anglaise fait foi en cas de divergence. Dites si vous acceptez que votre nom et votre organisation apparaissent à côté de votre commentaire ; sinon, il est publié de façon anonyme.

Chaque commentaire reçu pendant une période de commentaires est recopié dans la section « Commentaires publics » de la RFC, avec sa date.

## Comment apporter des éléments de preuve

Les éléments de preuve sont ce qui fait évoluer une proposition : une observation, une étude, un résultat de test, une expérience de terrain. Décrivez ce que vous avez observé, comment, et ses limites. Envoyez-les comme un commentaire, avec « Élément de preuve » dans le titre ou l'objet.

## Qui décide, pour l'instant

Tant qu'il n'existe pas de consortium, **l'auteur du CTF, Maxime Bui, décide**. En contrepartie, il s'engage à :

- répondre à chaque commentaire reçu pendant une période de commentaires ;
- motiver chaque décision par écrit, dans la section « Décision du mainteneur » de la RFC (le mainteneur est l'auteur, tant qu'il n'existe pas de consortium), y compris les raisons pour lesquelles des commentaires ont été suivis ou non ;
- ne jamais modifier une version publiée de la norme : tout changement produit une nouvelle version ;
- confier les décisions à un consortium dès qu'il sera constitué.

Les règles détaillées pour cette période, y compris le traitement des agents de l'auteur et de tout service payant qu'il exploite, ainsi que les conditions du passage de relais, sont proposées dans la [RFC 0006](./rfcs/0006-consortium-governance.fr.md).

## Périodes de commentaires

Une période de commentaires dure 30 jours à partir de l'ouverture d'une RFC. Les RFC 0001 à 0005 ont été restaurées depuis une version antérieure du dépôt ; leur période de commentaires est suspendue et reprendra quand elles seront revues. Les RFC 0008 à 0010 sont des brouillons ; leur période de commentaires officielle n'est pas encore ouverte, mais les commentaires envoyés dès maintenant sont bienvenus et seront pris en compte.

## Modifier directement les textes

Si vous êtes à l'aise avec GitHub, vous pouvez proposer une modification par une « pull request ». Limitez chaque pull request à un seul sujet et indiquez la RFC concernée.

## Licence

En contribuant, vous acceptez que votre contribution soit publiée sous licence [CC BY-SA 4.0](./LICENSE), comme le reste du dépôt.
