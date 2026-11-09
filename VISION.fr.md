# Coaching Trust Framework (CTF)

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version française de référence de la vision. La traduction anglaise se trouve dans [VISION.md](./VISION.md). Licence [CC BY-SA 4.0](./LICENSE).*

Des millions de personnes confient déjà leurs fragilités à des agents IA. Elles ne savent pas si ces agents agissent comme un coach, un thérapeute ou un médecin, ni s'ils respectent les règles de ces métiers. Et rien ne permet aujourd'hui de le vérifier dans la durée.

Ce document part de ce **constat**, en dégage la **problématique**, puis les **besoins** qui en découlent. Le **Coaching Trust Framework** (CTF) émerge de ces besoins : un cadre ouvert pour vérifier, avant et pendant leur mise en service, que des agents IA respectent les normes d'un métier. Il commence par le coaching et a vocation à s'étendre à tout métier doté d'un cadre.

## 1. Le constat

Les besoins psychologiques augmentent, l'IA y répond déjà, et les frontières entre les métiers d'accompagnement s'effacent.

### Une fragilité psychologique massive

Plus d'un milliard de personnes vivent avec un trouble de santé mentale, selon les données publiées par l'OMS en septembre 2025 ([OMS](https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up)). L'IHME estime ce nombre à près de 1,2 milliard, presque le double de 1990 ([IHME](https://www.healthdata.org/news-events/newsroom/news-releases/global-mental-disorders-have-nearly-doubled-1990-now-affecting)). La plupart de ces personnes restent mal prises en charge.

### Une IA qui y répond déjà

Les gens se tournent vers l'IA. Selon l'étude de Marc Zao-Sanders publiée par la Harvard Business Review en 2025, le premier usage de l'IA générative est désormais « thérapie et compagnie » ([NJIT, synthèse de l'étude HBR](https://ldi.njit.edu/how-and-why-people-use-gen-ai)). OpenAI indique qu'environ 0,15 % de ses utilisateurs actifs chaque semaine ont des conversations comportant des signes explicites de projet suicidaire, soit plus d'un million de personnes par semaine ([OpenAI](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/), [TechCrunch](https://techcrunch.com/2025/10/27/openai-says-over-a-million-people-talk-to-chatgpt-about-suicide-weekly/)).

À côté des assistants généralistes, des plateformes permettent à n'importe quel coach ou n'importe quelle entreprise de créer en quelques heures un agent spécialisé. Un tel agent repose sur trois éléments : un modèle de langage, des instructions qui définissent sa posture (le prompt) et une base de connaissances.

### Des frontières entre métiers qui s'effacent

Dans ces échanges, rien ne distingue le coaching, la thérapie, le conseil médical ou la simple écoute. Un même assistant joue tous ces rôles à la fois, sans le dire. Notre position : les grands acteurs de l'IA ont peu d'intérêt à tracer ces frontières, car un assistant qui sait tout faire retient mieux ses utilisateurs qu'un assistant qui dit « ce n'est pas mon rôle ».

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

Pour la première fois, on peut **observer la pratique elle-même**, et non des indicateurs indirects comme des heures de formation. On peut rejouer les mêmes situations à volonté, évaluer chaque échange et détecter une dérive dès qu'elle apparaît. La certification peut devenir **continue**.

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

L'évaluation sera largement faite par des IA. Il faut donc qu'elle soit robuste, avec plusieurs regards et des humains pour l'étalonner. Et il faut qu'elle soit portée par un tiers indépendant : une plateforme ne peut pas se certifier elle-même.

### Une analogie : le pilote de ligne

Ces besoins ne sont pas nouveaux. L'aviation y répond depuis longtemps : un pilote suit des procédures écrites, repasse régulièrement des contrôles en simulateur, et ses vols réels sont analysés. Personne ne le considère breveté une fois pour toutes.

## 4. Ce qui en découle : le CTF

Le Coaching Trust Framework est la réponse qui émerge de ces besoins. Il ne part pas d'un modèle théorique : chacune de ses briques correspond à un besoin.

1. **Cadrer**, pour intégrer les normes dès la conception : les normes du métier sont mises à disposition des plateformes de création d'agents.
2. **Éprouver**, pour confronter l'agent à des situations réelles : des agents simulés jouent des situations normées, dont une partie incognito, par l'interface utilisateur et depuis des comptes ordinaires.
3. **Surveiller**, pour observer dans la durée : l'évaluation tourne chez la plateforme sur tous les échanges ; seuls sortent les scores, les alertes et des extraits anonymisés.
4. **Garantir**, pour faire confiance à celui qui évalue : plusieurs modèles évaluent, un autre arbitre, des humains étalonnent, et un consortium indépendant valide le tout. La certification est liée à une version précise de l'agent, et tout changement relance les tests.

Le CTF est un **processus qualité**, comme l'ISO 9001 : il certifie le respect d'un cadre, notamment le périmètre du métier, pas l'excellence de la pratique. En contrepartie, les plateformes qui y adhèrent acceptent les tests incognito, la supervision de tous les échanges et l'anonymisation des données ; les clients finaux consentent au partage encadré des transcriptions.

## 5. Les postulats

Le CTF repose sur quatre hypothèses, que nous énonçons ici pour qu'elles puissent être discutées et mises à l'épreuve.

1. Les normes d'un métier peuvent être traduites en comportements observables, donc testables.
2. Ces comportements peuvent être évalués de façon fiable, par plusieurs modèles d'IA étalonnés par des humains.
3. La confiance ne peut venir que d'un tiers indépendant : une plateforme ne peut pas se certifier elle-même.
4. Une certification n'a de valeur que si elle est liée à une version précise de l'agent et renouvelée à chaque changement.

## 6. Pourquoi le cadre

Au-delà de l'IA, nous partageons une conviction : beaucoup de pertes de repères tiennent aujourd'hui à notre rapport au cadre et à ceux qui le portent.

Un cadre protège. Il dit ce qui est attendu, ce qui ne l'est pas, et où s'arrête le rôle de chacun. Mais un cadre n'est respecté que si ceux qui le portent le respectent eux-mêmes. Une autorité qui impose des règles qu'elle ne s'applique pas perd sa légitimité, et le cadre avec elle.

Le CTF s'applique ce principe. Ses règles sont publiques, ses tests sont édités par un consortium indépendant, et ce consortium est lui-même soumis à des règles ouvertes et vérifiables. La confiance ne vient pas de l'autorité de celui qui certifie, mais de la cohérence entre ce qu'il exige et ce qu'il s'impose.

## 7. Un projet ouvert

Un tel cadre ne peut tenir que s'il appartient à tous.

Le CTF est open source (CC BY-SA 4.0) : l'éthique d'un métier n'appartient à aucune organisation. Les éditeurs l'intègrent librement ; le consortium garantit l'indépendance de la vérification.

Nous cherchons des éditeurs de plateformes, des fédérations professionnelles, des chercheurs et des superviseurs prêts à rejoindre le consortium fondateur.

**Contact :** Maxime Bui — maxime@simplex.coach — coaching-trust-framework.org

---

*Pour aller plus loin : le [README technique](./README.md) décrit l'architecture et les outils ; l'[EXPLAINER](./EXPLAINER.fr.md) présente chaque concept en langage clair.*
