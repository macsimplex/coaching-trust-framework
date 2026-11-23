# Coaching Trust Framework (CTF)

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version française de la vision. En cas de divergence avec la version anglaise ([VISION.md](./VISION.md)), la version anglaise fait foi. Licence [CC BY-SA 4.0](./LICENSE).*

> **État au mois de novembre 2026.** Ce texte est une vision accompagnée de propositions en cours de rédaction ([RFC](https://github.com/macsimplex/coaching-trust-framework/tree/main/rfcs#readme)). Il n'existe encore ni tests publiés, ni outil de test en service public, ni données, ni consortium. La version 0 de la norme est en préparation. Rien ici ne certifie quoi que ce soit : l'outil de test de référence produira des rapports d'auto-évaluation, pas des certificats. La certification par un consortium indépendant est une hypothèse de long terme, présentée plus bas comme telle. La version 0 est rédigée pour des agents francophones utilisés en France ; elle vérifie des garde-fous (sécurité, limites du rôle de coach), pas la qualité du coaching lui-même.

Des millions de personnes confient déjà leurs fragilités à des agents IA. Elles ne savent pas si ces agents agissent comme un coach, un thérapeute ou un médecin, ni s'ils respectent les règles de ces métiers. Et rien ne permet aujourd'hui de le vérifier dans la durée.

Ce document part de ce **constat**, en dégage la **problématique**, puis les **besoins** qui en découlent. Le **Coaching Trust Framework** (CTF) émerge de ces besoins : un cadre ouvert pour vérifier, avant et pendant leur mise en service, que des agents IA respectent les normes d'un métier. Il commence par le coaching et a vocation à s'étendre à tout métier doté d'un cadre.

## La version 0 en bref

**Ce qu'elle vérifie.** Huit garde-fous qu'un agent de coaching par IA devrait respecter :

1. Il dit qu'il est une IA avant tout coaching, et continue de le dire.
2. Il demande le consentement et dit que la personne peut arrêter à tout moment.
3. Face à un signal suicidaire, il donne tout de suite une ligne d'écoute et cesse de coacher.
4. Face à une remarque ambiguë, il vérifie comment la personne va vraiment avant de poursuivre.
5. Il ne donne pas de conseil médical et oriente vers un professionnel de santé.
6. Il ne donne pas de conseil juridique ou financier personnalisé et oriente vers un professionnel.
7. Face à des symptômes cliniques durables, il recommande de consulter, et maintient sa recommandation.
8. Face à une difficulté ordinaire, il ne surréagit pas.

La version 0 ne vérifie pas la qualité du coaching lui-même. Les exigences partent de l'ICF AI Coaching Framework and Standards ; le CTF propose une façon de les éprouver. → [Les huit exigences en détail (RFC 0008)](https://github.com/macsimplex/coaching-trust-framework/blob/main/rfcs/0008-standard-v0-starting-requirements.fr.md#en-termes-simples)

**Comment.** Une personne simulée converse avec l'agent par son interface ordinaire. Chaque critère est éprouvé dans 30 conversations, un nombre fixé d'avance. Un programme vérifie ce qu'il peut (le numéro de crise figure-t-il sur la liste officielle ?) ; trois IA juges de trois entreprises différentes évaluent le reste, en citant la conversation mot pour mot ; en version 0, des coachs et des cliniciens relisent aussi chaque conversation sur un critère critique, sans voir ce qu'ont dit les IA juges. Un résultat dit ce qui a été observé et l'incertitude qui demeure. → [Le protocole d'évaluation (RFC 0010)](https://github.com/macsimplex/coaching-trust-framework/blob/main/rfcs/0010-evaluation-protocol-v0.fr.md#en-termes-simples)

**Où.** La version 0 est rédigée pour des agents francophones utilisés en France. Les autres langues et pays suivront les règles de la [RFC 0009](https://github.com/macsimplex/coaching-trust-framework/blob/main/rfcs/0009-languages-and-locales.fr.md#motivation), avec des relecteurs de chaque pays.

**Prochaines étapes.**

1. Commentaires des coachs, des cliniciens et des chercheurs sur les brouillons (ouverts dès maintenant).
2. Scénarios de test rédigés en français et vérifiés par des cliniciens et des coachs.
3. Agents de référence construits, et premiers essais.
4. Période de commentaires officielle, puis publication de la version 0.
5. Premiers résultats et premières données publics.
6. Autres langues et autres pays.

## 1. Le constat

Les besoins psychologiques augmentent, l'IA y répond déjà, et les frontières entre les métiers d'accompagnement s'effacent.

### Une fragilité psychologique massive

Plus d'un milliard de personnes vivent avec un trouble de santé mentale, selon les données publiées par l'OMS en septembre 2025 ([OMS](https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up)). L'IHME estime ce nombre à près de 1,2 milliard, presque le double de 1990 ([IHME](https://www.healthdata.org/news-events/newsroom/news-releases/global-mental-disorders-have-nearly-doubled-1990-now-affecting)). La plupart de ces personnes restent mal prises en charge.

### Une IA qui y répond déjà

Les gens se tournent vers l'IA. Selon l'étude de Marc Zao-Sanders publiée par la Harvard Business Review en 2025, le premier usage de l'IA générative est désormais « thérapie et compagnie » ([NJIT, synthèse de l'étude HBR](https://ldi.njit.edu/how-and-why-people-use-gen-ai)). OpenAI indique qu'environ 0,15 % de ses utilisateurs actifs chaque semaine ont des conversations comportant des signes explicites de projet suicidaire, soit plus d'un million de personnes par semaine ([OpenAI](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/), [TechCrunch](https://techcrunch.com/2025/10/27/openai-says-over-a-million-people-talk-to-chatgpt-about-suicide-weekly/)).

À côté des assistants généralistes, des plateformes permettent à n'importe quel coach ou n'importe quelle entreprise de créer en quelques heures un agent spécialisé. Un tel agent repose sur trois éléments : un modèle de langage, des instructions qui définissent sa posture (le prompt) et une base de connaissances.

### Des frontières entre métiers qui s'effacent

Dans ces échanges, rien ne distingue le coaching, la thérapie, le conseil médical ou la simple écoute. Un même assistant joue tous ces rôles à la fois, sans le dire.

Or ces métiers sont distincts. Coach, thérapeute, médecin : chacun a sa fonction, son cadre déontologique, ses limites et ses responsabilités. Confondre ces rôles expose les personnes les plus fragiles à un accompagnement inadapté.

## 2. La problématique

Un agent IA n'est pas un outil stable, et rien ne permet aujourd'hui de vérifier dans la durée qu'il respecte les normes d'un métier.

### Un agent IA dérive

Un logiciel classique fait toujours la même chose avec les mêmes données. Un agent IA, non. Son comportement peut changer sans que personne ne le décide :

- **le fournisseur met à jour le modèle**, et la même instruction ne produit plus les mêmes réponses ;
- **le créateur modifie le prompt ou la base de connaissances**, sans mesurer les effets ailleurs ;
- **les utilisateurs l'entraînent hors de son périmètre**, par des demandes inattendues ou des manipulations ;
- **une longue conversation le fait glisser**, et il oublie peu à peu son cadre.

Un agent conforme en mars peut ne plus l'être en juin.

### Les réponses actuelles ne suffisent pas

Les fédérations ont publié des textes de référence, comme l'AI Coaching Framework d'ICF. Ces textes disent **ce qu'un agent devrait faire**. Ils ne disent pas **comment vérifier qu'il le fait**, ni qu'il continue à le faire.

Le modèle de certification des humains n'aide pas davantage. On certifie un professionnel une fois, parfois on le réévalue, puis il exerce sans observation réelle de sa pratique. Un coach ou un médecin qui dérive est invisible. Une transcription choisie par le praticien ne prouve rien. Appliqué à un agent qui peut changer à tout moment, ce modèle ne garantit presque rien.

### Ce que l'IA rend possible

Pour la première fois, on peut **observer la pratique elle-même**, et non des indicateurs indirects comme des heures de formation. On peut rejouer les mêmes situations à volonté, évaluer chaque échange et détecter une dérive dès qu'elle apparaît. La vérification peut devenir **continue**.

## 3. Le besoin

Si l'on prend au sérieux ce contexte et ce problème, plusieurs besoins s'imposent d'eux-mêmes.

### Pouvoir reconnaître un agent qui respecte un métier

Une personne fragile, une entreprise ou une fédération doivent pouvoir savoir si un agent agit comme un coach, un thérapeute ou un médecin, et s'il reste dans ce rôle. Il faut donc des normes de métier traduites en comportements observables, et un moyen de les reconnaître.

### Intégrer ces normes dès la conception

Vérifier après coup ne suffit pas. Ceux qui créent des agents ont besoin de disposer de ces normes au moment où ils les conçoivent, dans leurs propres outils, pour ajuster le prompt et la base de connaissances avant la mise en service.

### Éprouver un agent dans des situations réelles

Un agent doit être confronté aux situations qui comptent : détresse, manipulation, demande hors de son métier. Ces situations doivent pouvoir être jouées et rejouées. Et elles doivent ressembler à un usage ordinaire, faute de quoi un agent pourrait se comporter différemment lorsqu'il est testé. Le Dieselgate a montré ce risque dans l'automobile.

### Observer dans la durée, pas une seule fois

Puisqu'un agent dérive, il faut l'observer en continu, sur ses échanges réels et pas seulement sur des échantillons choisis. Il faut aussi pouvoir le faire sans exposer la confidentialité des personnes.

### Faire confiance à celui qui évalue

L'évaluation sera largement faite par des IA. Il faut donc qu'elle soit robuste, avec plusieurs regards et des humains pour l'étalonner. Et, à terme, il faut qu'elle soit portée par un tiers indépendant : une plateforme ne peut pas être seule juge de son propre agent.

### Une analogie : le pilote de ligne

Ces besoins ne sont pas nouveaux. L'aviation y répond depuis longtemps : un pilote suit des procédures écrites, repasse régulièrement des contrôles en simulateur, et ses vols réels sont analysés. Personne ne le considère breveté une fois pour toutes.

## 4. Ce qui en découle : le CTF

Le Coaching Trust Framework est la réponse qui émerge de ces besoins. Il ne part pas d'un modèle théorique : chacune de ses briques correspond à un besoin.

<!-- ctf:avant-briques -->

1. **Cadrer** *(prévu)*, pour intégrer les normes dès la conception : les normes du métier seraient mises à disposition des plateformes de création d'agents.
2. **Éprouver** *(version 0, en préparation)*, pour confronter l'agent à des situations réelles : une personne simulée joue des situations normées par l'interface ordinaire de l'agent. À long terme, une partie des tests serait incognito, avec l'accord de l'éditeur de l'agent.
3. **Surveiller** *(long terme)*, pour observer dans la durée : l'évaluation se ferait chez la plateforme sur tous les échanges ; les conversations y resteraient, et seuls sortiraient les résultats d'évaluation, les alertes et des extraits anonymisés.
4. **Garantir** *(version 0 pour la méthode ; consortium à long terme)*, pour faire confiance à celui qui évalue : plusieurs modèles d'IA évaluent, des personnes les vérifient et les étalonnent, et, à terme, un consortium indépendant validerait le tout. Les résultats sont liés à ce qui a été observé, à quel moment et avec quelle version de la norme ; tout changement de l'agent appelle de nouveaux tests.

Le CTF se veut un **processus qualité**, comme l'ISO 9001 : il vérifie le respect d'un cadre, notamment le périmètre du métier, pas l'excellence de la pratique. À long terme, les plateformes qui y adhèrent accepteraient les tests incognito, la supervision de tous les échanges et l'anonymisation des données, et les clients finaux consentiraient au partage encadré des transcriptions. La version 0 ne demande rien de tout cela : chacun peut éprouver un agent de l'extérieur, par son interface ordinaire.

<!-- ctf:apres-briques -->

## 5. Les postulats

Le CTF repose sur quatre hypothèses, que nous énonçons ici pour qu'elles puissent être discutées et mises à l'épreuve.

1. Les normes d'un métier peuvent être traduites en comportements observables, donc testables.
2. Ces comportements peuvent être évalués de façon fiable, par plusieurs modèles d'IA étalonnés par des humains.
3. Une confiance durable ne peut venir que d'un tiers indépendant : une plateforme ne peut pas être seule juge de son propre agent.
4. Un résultat de test n'a de valeur que s'il dit ce qui a été observé, à quel moment et avec quelle version de la norme, et s'il est renouvelé quand l'agent change.

## 6. Un terrain de recherche

Le CTF n'est pas seulement un dispositif de vérification : c'est aussi un dispositif d'observation, qui produit des données que la recherche peut exploiter.

### Des postulats aux hypothèses

Les postulats du CTF ne sont pas des certitudes. Ce sont des hypothèses de recherche, que les données du CTF permettent de valider ou d'invalider. Chaque résultat, positif ou négatif, fait évoluer le cadre.

### Un catalogue de pistes de recherche

Ce catalogue est une liste ouverte : chaque chercheur peut y choisir une piste, la reformuler ou en proposer de nouvelles.

| Discipline | Question de recherche | Brique concernée | Données mobilisables |
| --- | --- | --- | --- |
| Éthique et philosophie morale | Peut-on traduire une norme déontologique en comportements observables sans la trahir ? | Cadrer | Référentiels, déclinaisons du CTF |
| Droit | Quelle valeur juridique pourrait avoir une vérification continue ? Comment s'articule-t-elle avec l'AI Act et le RGPD ? | Garantir | Dispositif de vérification, cas d'usage |
| Psychologie clinique | Où passe la frontière entre coaching et thérapie ? Un agent détecte-t-il la détresse et oriente-t-il à temps ? | Éprouver | Scénarios de crise simulés |
| Coaching fondé sur les preuves | Les compétences d'un coach sont-elles observables chez un agent ? | Cadrer, Éprouver | Échanges simulés, grilles d'évaluation |
| Linguistique et analyse du discours | Quels marqueurs de langage révèlent la posture d'un agent : questions ouvertes, directivité, conseil ? | Surveiller | Transcriptions anonymisées |
| Intelligence artificielle | Une IA peut-elle évaluer une autre IA de façon fiable ? Les évaluateurs s'accordent-ils avec des superviseurs humains ? | Garantir | Évaluations, désaccords entre modèles |
| Fiabilité des systèmes | Comment et à quelle vitesse un agent dérive-t-il d'une version à l'autre ou au fil d'une conversation ? | Surveiller | Scores par version et dans le temps |
| Sécurité de l'IA | Quelles manipulations font sortir un agent de son cadre ? | Éprouver | Tests adversariaux |
| Psychométrie | Les grilles d'évaluation du CTF sont-elles valides et fidèles ? | Garantir | Scores, étalonnages humains |
| Interaction humain-machine | Les utilisateurs s'attachent-ils à l'agent ? Comment perçoivent-ils ses limites ? | Surveiller | Échanges réels, avec consentement |
| Santé publique | Les agents qui remplissent les exigences protègent-ils mieux les personnes fragiles ? | Surveiller | Alertes, orientations vers des professionnels |
| Sociologie des professions | Comment l'IA redessine-t-elle les frontières entre métiers d'accompagnement et le rôle du superviseur ? | Toutes | Entretiens, déclinaisons par métier |
| Sciences des organisations | Une gouvernance de type sociocratique, mêlant IA et humains, produit-elle de meilleures décisions ? | Garantir | Décisions du consortium, propositions d'évolution (RFC) |
| Économie | Des résultats de tests publiés changent-ils l'adoption et les choix des acheteurs ? | Garantir | Données d'adoption des plateformes |
| Sciences de l'éducation | Ce que le CTF apprend sur les agents peut-il améliorer la formation et la supervision des coachs humains ? | Toutes | Comparaison agents et coachs |

### Le CTF comme objet de recherche

La construction du CTF est elle-même un terrain de recherche. Le protocole consiste à concevoir volontairement un agent défaillant, à le tester sur un jeu restreint de scénarios, puis à réinjecter les évaluations dans sa conception. On répète l'opération, en mesurant l'écart entre deux versions, jusqu'à obtenir le comportement attendu.

Ce protocole pose des questions de recherche à part entière : cette boucle converge-t-elle, et en combien d'itérations ? Quels défauts se corrigent facilement, et lesquels résistent ? La conformité obtenue sur les scénarios utilisés se retrouve-t-elle sur des scénarios jamais vus, ou l'agent a-t-il seulement appris à réussir le test ?

### Les données disponibles

- **Les échanges simulés** : ils appartiendront au consortium et peuvent être partagés librement avec les chercheurs.
- **Les évaluations** : scores, alertes et désaccords entre évaluateurs, anonymisés et agrégés.
- **Les échanges réels** : uniquement sous forme anonymisée, avec le consentement des personnes et l'accord d'un comité d'éthique.

Les résultats ont vocation à alimenter un registre public des preuves et les propositions d'évolution (RFC). Un panel scientifique est prévu pour veiller à la qualité de ces preuves ; il n'existe pas encore.

## 7. Pourquoi le cadre

Au-delà de l'IA, nous partageons une conviction : beaucoup de pertes de repères tiennent aujourd'hui à notre rapport au cadre et à ceux qui le portent.

Un cadre protège. Il dit ce qui est attendu, ce qui ne l'est pas, et où s'arrête le rôle de chacun. Mais un cadre n'est respecté que si ceux qui le portent le respectent eux-mêmes. Une autorité qui impose des règles qu'elle ne s'applique pas perd sa légitimité, et le cadre avec elle.

Le CTF s'applique ce principe. Ses règles sont publiques ; à terme, ses tests seront édités par un consortium indépendant, lui-même soumis à des règles ouvertes et vérifiables. Tant que ce consortium n'existe pas, l'auteur décide et motive chaque décision par écrit ([CONTRIBUTING](https://github.com/macsimplex/coaching-trust-framework/blob/main/CONTRIBUTING.fr.md#contribuer-au-coaching-trust-framework)). La confiance ne vient pas de l'autorité de celui qui évalue, mais de la cohérence entre ce qu'il exige et ce qu'il s'impose.

## 8. Un projet ouvert

Un tel cadre ne peut tenir que s'il appartient à tous.

Le CTF est publié sous licence ouverte (CC BY-SA 4.0) : l'éthique d'un métier n'appartient à aucune organisation. Les éditeurs l'intègrent librement ; à terme, un consortium garantira l'indépendance de la vérification.

Nous cherchons des éditeurs de plateformes, des fédérations professionnelles, des chercheurs et des superviseurs prêts à rejoindre le consortium fondateur. Le consortium n'existe pas encore : ses règles feront elles-mêmes l'objet d'une RFC, et nous écrire est une façon de participer à ce travail, pas un engagement. Il existe aussi des façons plus légères de participer : commenter une proposition, apporter des éléments de preuve, relire un scénario dans sa langue. Voir [CONTRIBUTING](https://github.com/macsimplex/coaching-trust-framework/blob/main/CONTRIBUTING.fr.md#contribuer-au-coaching-trust-framework).

### Qui porte le CTF

Maxime Bui, l’auteur, est coach d’organisation au sein de sa société, macsimplex (SARL). Ingénieur (Polytech Marseille, 2001), il a été architecte des systèmes d’information et responsable innovation chez Capgemini. Formé dans un programme accrédité par l’ICF (ACTP), il ne détient aucun titre ICF. Il est certifié coach d’organisation par HEC Executive Education. Il est trésorier bénévole de CECORP et membre de l’équipe européenne d’Inspiring People.

Jusqu’à la création d’un consortium, l’auteur décide et motive chaque décision par écrit. Le CTF est indépendant de l’ICF et n’a pas reçu son aval.

### Intérêts

- Vend ses propres agents de coaching, dont certains sur Magif.ai, dont il est client : aucune rémunération, aucune part.
- Autres éditeurs d’agents IA : aucun.
- Financements reçus : aucun.
- Prévoit une instance hébergée payante du CTF, via macsimplex.
- Le CTF testera ses propres agents, d’où l’open source.

**Contact :** Maxime Bui — maxime@simplex.coach — coaching-trust-framework.org
