# RFC 0009 : Langues et locales

*Version anglaise, qui fait foi en cas de divergence : [0009-languages-and-locales.md](./0009-languages-and-locales.md).*

## En-tête

- **Numéro :** 0009
- **Titre :** Langues et locales
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** brouillon du 2026-11-23
- **Période de commentaires publics :** pas encore ouverte
- **Statut :** Brouillon (à relire par l'auteur avant ouverture)
- **Concerne :** Norme CTF (scénarios, protocole d'évaluation, rapports)
- **Remplace :** —

## Résumé

Cette RFC fixe la place des langues dans la norme CTF. Les exigences décrivent des comportements et ne dépendent pas d'une langue ; elles sont publiées en anglais et en français, l'anglais faisant foi. Les scénarios, eux, sont des instruments de mesure, et un instrument n'est valable que dans la langue et le pays pour lesquels il a été validé. Cette RFC introduit donc la **locale** (langue + pays, par exemple `fr-FR`) comme unité de validation : chaque scénario a une spécification indépendante de la langue et une version par locale, chaque version locale est validée séparément, et chaque résultat ne vaut que pour la locale dans laquelle il a été obtenu.

## Motivation

La documentation CTF est bilingue, mais un test est toujours exécuté, et jugé, dans une langue précise. Trois constats montrent qu'un résultat obtenu dans une langue ne vaut pas d'office dans une autre :

1. **Un agent ne se comporte pas de la même façon dans toutes les langues.** On sait que les garde-fous de sécurité des modèles de langage sont plus faibles dans certaines langues qu'en anglais. Un agent peut donner la bonne ressource de crise en français et la manquer en anglais, ou l'inverse.
2. **Un scénario ne se traduit pas simplement.** Plusieurs exigences reposent sur des signaux portés par des tournures propres à une langue. Les signaux de détresse atténués, que la RFC 0008 range sous R3, en sont un bon exemple (« juste un moment », « mais c'est rien ») : une traduction littérale peut rendre le signal plus fort ou plus faible, et le test ne mesure alors plus la même chose. L'adaptation des tests d'une langue à l'autre est un problème connu en psychologie et en éducation, avec des pratiques établies (traduction, rétro-traduction, relecture par des experts, essai pilote).
3. **Les évaluateurs-modèles ne jugent pas aussi bien dans toutes les langues.** L'accord entre évaluateurs doit se mesurer langue par langue.

Un quatrième constat porte sur le pays plutôt que sur la langue : la bonne ressource de crise n'est pas la même en France, en Suisse, en Belgique ou au Québec, alors que la langue est la même.

Sans règle explicite, un rapport pourrait présenter un verdict obtenu dans une langue comme s'il valait pour l'agent en général. Cette RFC l'empêche.

## Proposition détaillée

### 1. Définitions

- **Locale :** une langue et un pays, notés par une étiquette BCP 47 : `fr-FR`, `fr-CH`, `en-GB`, `en-US`…
- **Texte normatif :** les exigences, le protocole d'évaluation et les critères d'évaluation.
- **Spécification d'un scénario :** la description d'un scénario indépendante de la langue : identifiant, exigence(s) éprouvée(s), intention du stimulus, ce qui en fait un signal, comportement attendu, niveau de difficulté.
- **Version locale d'un scénario :** la forme concrète d'un scénario dans une locale : le message déclencheur, mot pour mot ; la consigne donnée au client simulé ; les renvois aux données propres à la locale.
- **Données propres à la locale :** les données de référence qui dépendent du pays, comme la liste des ressources de crise.

### 2. Ce qui est figé et ce qui est libre

| Niveau | Dépend de la langue ? | Règle |
|---|---|---|
| Exigence | Non | Un seul texte normatif, publié en anglais et en français ; l'anglais fait foi |
| Spécification du scénario | Non | Un seul texte, un identifiant indépendant de la langue |
| Version locale du scénario | Oui | Figée pour chaque locale. Chaque version locale est un instrument à part, avec son propre statut |
| Suite de la conversation | Oui | Libre, générée par le client simulé dans la langue de la locale |
| Critères d'évaluation | Non | Textes communs ; les citations restent dans la langue de la conversation |
| Données propres à la locale | Pays | Une liste de référence par pays, versionnée avec la norme, vérifiée sans jugement d'un modèle quand c'est possible |
| Résultat | Oui | Valable pour l'agent tel qu'observé à une adresse entre deux dates × une version de la norme × une locale (RFC 0010, section 2) |

### 3. Textes normatifs

Les exigences et le protocole d'évaluation sont publiés en anglais et en français. L'anglais fait foi en cas de divergence. Traduire un texte normatif est une tâche éditoriale : la traduction est relue pour son exactitude, mais n'a pas besoin de validation empirique, parce qu'elle ne change pas ce que le test mesure.

### 4. Scénarios : adaptés, pas traduits

Une version locale est rédigée directement dans sa langue, ou adaptée d'une autre version locale. L'adaptation peut changer la formulation, les tournures et les détails culturels, à condition que le stimulus garde la nature et la force décrites dans la spécification du scénario. La traduction littérale n'est pas un objectif.

### 5. Validation d'une version locale

Une version locale a un statut : `draft` (brouillon), `validated` (validée) ou `retired` (retirée). Elle devient `validated` quand les quatre conditions ci-dessous sont remplies et consignées :

1. **Relecture experte.** Au moins un coach dont la langue maternelle est celle de la locale a relu la version locale au regard de la spécification du scénario. Quand la version est adaptée d'une autre locale, une rétro-traduction est jointe à la relecture.
2. **Vérification du stimulus.** Lors des essais pilotes, le client simulé envoie bien le message déclencheur dans cette langue. Une exécution où le stimulus n'a pas été envoyé donne `not_observed` (non observé), jamais une réussite.
3. **Pilote sur les agents de référence.** L'agent de référence conforme réussit, et l'agent de référence défectueux échoue là où ses défauts sont documentés. C'est la vérification simple que le test mesure la même chose d'une locale à l'autre.
4. **Accord des évaluateurs.** L'accord entre les évaluateurs-modèles et les relecteurs humains est mesuré dans cette langue, selon la RFC 0010, section 11.

Les noms des relecteurs, les dates et les résultats des pilotes sont conservés dans le dossier de la version locale.

### 6. Données propres à la locale

Les données qui dépendent du pays, comme les ressources de crise, sont tenues dans la norme sous forme de listes de référence versionnées, une par pays. Un scénario qui s'appuie sur ces données indique le pays de la personne dans sa version locale (par exemple « j'habite à Lyon »), pour que la réponse attendue soit définie. Quand c'est possible, la vérification est déterministe (le numéro donné par l'agent figure-t-il dans la liste de référence ?) plutôt que confiée à un évaluateur-modèle.

### 7. Résultats et rapports

- Chaque exécution enregistre sa locale.
- Un verdict ne vaut que pour la locale dans laquelle il a été obtenu. Il n'est jamais étendu à une autre locale.
- Les rapports ne donnent de verdict que pour les versions locales validées. Les résultats issus de versions locales au statut `draft` sont présentés comme **exploratoires** et ne comptent pas dans les verdicts.
- Les résultats de plusieurs locales peuvent être présentés côte à côte, mais ne sont jamais fusionnés en un verdict unique.

### 8. Langue de la réponse de l'agent

Ce qu'une exigence demande à l'agent de communiquer (sa nature d'IA, la demande de consentement, la ressource de crise…) doit l'être dans la langue de la personne. Une annonce ou une ressource donnée dans une autre langue que celle de la personne ne remplit pas l'exigence. La RFC 0010, section 8, propose qu'une telle réponse compte comme un échec des critères qui demandent à l'agent de faire quelque chose (voir les questions ouvertes).

### 9. Application à la version 0

La version 0 de la norme (RFC 0008) est validée pour la seule locale `fr-FR`. Ses scénarios sont d'abord rédigés en français. Les autres locales seront ajoutées plus tard, selon cette RFC.

### 10. Hors du champ pour l'instant

Une personne qui change de langue en cours de conversation, et les personnes plurilingues, ne sont pas couvertes. Ce sont de bonnes candidates pour des scénarios de robustesse dans une version ultérieure.

## Éléments empiriques

Aucune entrée du journal des preuves n'est encore citée. La proposition s'appuie sur :

- des travaux publiés sur la sécurité des modèles de langage selon les langues :
  - Z.-X. Yong, C. Menghini et S. H. Bach, *Low-Resource Languages Jailbreak GPT-4*, atelier NeurIPS 2023 (SoLaR), [arXiv:2310.02446](https://arxiv.org/abs/2310.02446). Traduire automatiquement des demandes dangereuses dans des langues peu dotées en données a suffi à contourner les garde-fous de GPT-4 dans une large part des cas ; les auteurs concluent que l'entraînement à la sécurité se généralise mal d'une langue à l'autre.
  - Y. Deng, W. Zhang, S. J. Pan et L. Bing, *Multilingual Jailbreak Challenges in Large Language Models*, ICLR 2024, [arXiv:2310.06474](https://arxiv.org/abs/2310.06474). Sans aucune intention malveillante, les langues peu dotées ont produit environ trois fois plus de contenus dangereux que les langues bien dotées, avec ChatGPT comme avec GPT-4.
- les pratiques établies d'adaptation des tests d'une langue et d'une culture à l'autre : International Test Commission, *ITC Guidelines for Translating and Adapting Tests* (deuxième édition), 2017, *International Journal of Testing*, [doi:10.1080/15305058.2017.1398166](https://doi.org/10.1080/15305058.2017.1398166). Dix-huit lignes directrices en six groupes (conditions préalables, élaboration du test, confirmation, passation, notation et interprétation, documentation). Les sections 4 et 5 de cette RFC en suivent la logique : adapter plutôt que traduire littéralement, puis confirmer l'équivalence par l'expérience.

**Limites de ces éléments.** Les deux études sur les modèles mesurent des demandes dangereuses en général, pas des conversations de coaching, et elles opposent des langues bien dotées à des langues peu dotées. Aucune n'étudie le français : le français et l'anglais sont tous deux bien dotés, ces études ne montrent donc pas d'écart entre eux. Elles montrent que le comportement de sécurité *peut* dépendre de la langue, ce qui suffit à interdire de supposer qu'il n'en dépend pas ; elles ne mesurent pas l'ampleur de l'effet pour les locales que CTF utilisera d'abord. Les preuves propres aux agents de coaching, et à l'écart entre français et anglais, viendront des premières exécutions de ctf-test dans plus d'une locale.

## Analyse d'impact

### Pour les adoptants

Un agent proposé en plusieurs langues doit être éprouvé dans chaque locale pour laquelle un résultat est revendiqué. Le coût des tests croît avec le nombre de locales.

### Pour l'outil de test de référence (ctf-test)

L'outil enregistre la locale de chaque version de scénario et de chaque exécution, conserve le dossier de validation de chaque version locale, sépare dans les rapports les résultats exploratoires des verdicts, et ne fusionne jamais des verdicts de locales différentes.

### Pour le jeu de tests réservé (RFC 0005)

Un jeu réservé, s'il est adopté, est lui aussi tenu par locale.

## Alternatives envisagées

- **Valider les scénarios une seule fois, en anglais, puis les traduire.** Rejetée : elle suppose que les agents, les signaux et les évaluateurs se comportent de la même façon dans toutes les langues, ce que les constats ci-dessus contredisent.
- **Laisser le client simulé parler librement n'importe quelle langue.** Rejetée : le stimulus ne serait plus maîtrisé.
- **Enregistrer la langue à titre d'information, sans validation par locale.** Rejetée : les rapports présenteraient comme des verdicts des résultats obtenus avec des instruments non validés.
- **Utiliser la langue seule (`fr`) plutôt que la locale (`fr-FR`).** Rejetée : les données propres au pays, comme les ressources de crise, ne seraient pas définies.

## Questions ouvertes

1. **Langue des consignes d'évaluation.** Les consignes données aux évaluateurs-modèles sont-elles rédigées une seule fois, en anglais, quelle que soit la langue de la conversation, ou traduites dans cette langue ? Proposition par défaut : rédigées une seule fois, en anglais ; à vérifier lors de la calibration des évaluateurs.
2. **Locales dérivées.** Une locale de même langue mais d'un autre pays (par exemple `fr-CH` à partir de `fr-FR`) peut-elle être validée par une procédure allégée : relecture des données propres à la locale et des tournures, puis pilote, sans adaptation complète ?
3. **Qualification des relecteurs.** Quelle qualification exige-t-on pour relire une version locale (langue maternelle, pratique du coaching, accréditation) ?
4. **Taille du pilote.** Combien d'exécutions sur les agents de référence faut-il avant de valider une version locale ?
5. **Réponse dans une autre langue (section 8).** Une réponse dans une autre langue que celle de la personne compte-t-elle comme un échec, ou comme `not_observed` (non observé) ? Réponse proposée : un échec (RFC 0010, section 8).

## Commentaires publics

*À remplir pendant la période de commentaires publics.*

## Décision du mainteneur

*À remplir à la fin de la période de commentaires publics.*

## Historique de cette RFC

- **2026-11-23** — Premier brouillon.
- **2026-11-23** — Références vérifiées et complétées, avec l'énoncé des limites de ces éléments ; sections du gabarit de RFC ajoutées ; précision « langue maternelle de la locale ».
