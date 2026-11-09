# CTF expliqué — Guide en langage clair

*Ce document s'adresse à toute personne qui souhaite comprendre le Coaching Trust Framework — coachs, responsables de fédération, opérateurs de plateformes, chercheurs, journalistes, curieux. Il ne suppose aucune connaissance préalable en intelligence artificielle, en développement logiciel, en projets open source ou en standards techniques. Quand un terme technique est inévitable, il est expliqué à sa première apparition et repris dans le glossaire à la fin.*

*Si vous êtes déjà familier du domaine et souhaitez la version précise, lisez plutôt le [README](./README.md) et le [document normatif](./document/ctf-v1.0.md).*

*Le présent document est la version française de l'[EXPLAINER](./EXPLAINER.md) anglais. En cas de divergence entre les deux versions, la version anglaise fait foi.*

---

## Pourquoi ce framework existe

Des agents IA apparaissent dans le champ du coaching et du développement personnel. Certains sont bien construits et respectueux des personnes qui les utilisent. D'autres ne le sont pas. À ce jour, il n'existe pas de standard partagé qui dise : *voici à quoi devrait ressembler un agent IA de coaching digne de confiance, voici comment bien le construire, voici comment vérifier qu'il fait effectivement ce qu'il devrait faire*.

Sans un tel standard, deux choses se produisent. D'une part, chaque plateforme réinvente ses propres réponses éthiques, avec des résultats très inégaux. D'autre part, les personnes qui consultent ces agents — parfois dans des moments de vulnérabilité — n'ont aucun moyen de savoir si elles peuvent faire confiance à ce qui leur est proposé. Des fédérations professionnelles comme l'ICF et l'EMCC ont publié des documents normatifs importants sur l'IA dans le coaching, mais un document normatif ne dit pas, à lui seul, à une équipe technique comment traduire des principes en code, en tests, en supervision continue.

Le CTF vise à combler cet écart. C'est un framework partagé, libre et ouvert, que toute plateforme peut adopter, que toute fédération peut adapter, et que tout praticien peut lire et vérifier. Il est conçu pour évoluer dans le temps, par les contributions du terrain plutôt que par des décisions unilatérales.

## Ce qu'est concrètement le CTF

Le CTF, c'est trois choses réunies.

D'abord, **un framework écrit** — un document qui articule les attentes opérationnelles que tout agent IA de coaching devrait satisfaire. Des choses comme : la manière dont l'agent se présente à l'utilisateur, la manière dont il gère les situations de détresse, sa transparence sur ses propres limites, la manière dont la plateforme le teste avant déploiement, la manière dont la plateforme le surveille une fois en production. Le framework est délibérément léger en version 1.0 — uniquement ce qui appartient presque certainement à tout agent IA de coaching digne de confiance, indépendamment de la tradition professionnelle qu'il sert. Sa richesse augmentera dans le temps, selon une logique précise décrite plus loin.

Ensuite, **une boîte à outils de sept agents assistants**. Ce sont de petits outils IA, eux-mêmes soigneusement conçus, qui aident des humains à faire le travail de construction, de test, de configuration, d'audit et d'évolution des agents de coaching. Ce ne sont pas eux-mêmes des agents de coaching. Ce sont des aides à l'ingénierie qualité. On peut les imaginer comme les instruments qu'un atelier de menuiserie sérieux possède en plus des scies et des ciseaux : règles, équerres, niveaux, lampes d'inspection. La boîte à outils est ce qui permet à une plateforme de faire effectivement le travail décrit par le framework.

Enfin, **une manière de déclarer publiquement qu'on suit le framework**. Cela peut prendre la forme d'une auto-déclaration, où la plateforme s'engage par écrit sur son propre site. Ou la forme d'une certification par une fédération professionnelle, une fois que cette fédération a produit sa propre version adaptée du CTF. Les deux voies sont valides ; elles s'adressent à des publics différents.

## Un principe fondateur, écrit en premier

L'ensemble du projet est régi par un principe, inscrit en tête de chaque document clé :

> *Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.*

Ce que cela signifie en pratique. Le CTF a été fondé par un individu (Maxime). Avec le temps, des organisations pourront émerger — associations, coopératives, fondations — pour aider à le maintenir. Aucune d'elles, y compris une éventuelle organisation future fondée par Maxime lui-même, n'a le droit de fermer le framework, de restreindre son usage, ni de le revendiquer comme propriété privée. Le framework a été publié dès le premier jour sous une licence qui rend juridiquement impossible une telle clôture. Le principe fondateur réaffirme cet engagement en mots simples, pour que toute personne qui découvre le projet comprenne sa nature non-négociable.

## Comment le CTF grandit : par le bas, pas par le haut

C'est l'aspect le plus contre-intuitif du CTF, et celui qui le distingue de nombreux autres standards.

La plupart des standards fonctionnent du haut vers le bas. Une autorité centrale rédige un document exhaustif. Le monde est ensuite censé s'y conformer. Le CTF fonctionne dans l'autre sens. Le document central — ce que nous appelons le **noyau commun** — est volontairement minimal en version 1.0. Il ne contient que les attentes opérationnelles qui s'appliquent presque certainement à tout agent IA de coaching digne de confiance.

La richesse du framework vit dans les **déclinaisons**. Une déclinaison est une version adaptée du CTF qui intègre les exigences spécifiques d'une fédération professionnelle. Il y aura ainsi un CTF-ICF, qui combine le noyau commun avec les attentes spécifiques de l'International Coaching Federation. Il y aura un CTF-EMCC pour l'European Mentoring and Coaching Council. Il pourra y en avoir d'autres.

Voici maintenant le mécanisme important. À mesure que des déclinaisons sont produites et utilisées dans le monde réel, on commencera à observer que certaines exigences sont présentes dans plusieurs déclinaisons. L'ICF et l'EMCC peuvent par exemple avoir des exigences très similaires sur la manière dont un agent doit gérer la détresse. Quand la même exigence apparaît dans plusieurs déclinaisons, elle cesse d'être spécifique à une seule tradition. Elle devient candidate à une **promotion vers le noyau commun**. Le noyau commun s'étoffe dans le temps, mais uniquement en accumulant ce qui a été indépendamment validé comme commun à plusieurs fédérations.

C'est ce que nous appelons le **cycle inductif**. Nous ne décidons pas à l'avance ce qui est universel. Nous observons ce qui se révèle commun en pratique, et nous le promouvons une fois cette communauté documentée.

Cette manière de construire un standard a trois vertus. Elle est honnête — elle ne prétend pas savoir à l'avance ce qui est universel. Elle est collaborative — elle laisse chaque fédération apporter sa tradition spécifique sans qu'aucune n'ait à compromettre son identité. Et elle est fondée sur les preuves — les promotions vers le noyau commun sont motivées par une convergence observée, pas par l'opinion de quiconque.

## Qui joue quel rôle

Le CTF mobilise plusieurs rôles distincts. Les comprendre aide à se repérer dans les documents du dépôt.

**Le fondateur** est la personne qui a initialement rédigé le CTF. Le fondateur est reconnu dans l'attribution de la licence et dans la documentation du projet. Le statut de fondateur est une reconnaissance d'origine ; il ne confère aucun pouvoir continu.

**Le mainteneur** (nom technique anglais : *caretaker* ou *custodian*) est la personne responsable du fonctionnement quotidien du projet. Il traite les propositions d'évolution, publie les nouvelles versions, garde le dépôt en bon ordre. Le mainteneur actuel est le fondateur. Avec le temps, le rôle de mainteneur pourra être transféré ou partagé. Le mainteneur n'est pas le propriétaire du CTF ; il en est le gardien fonctionnel.

**Les contributeurs** sont les individus ou organisations qui proposent des évolutions du framework, écrivent ou améliorent les agents assistants, traduisent les documents, documentent des cas limites. N'importe qui peut devenir contributeur. Il n'y a pas de cotisation.

**Les adoptants** sont les plateformes, organisations ou praticiens indépendants qui implémentent le CTF dans leur pratique IA de coaching. Ils déclarent publiquement leur conformité. Adoptants et contributeurs peuvent se recouvrir : une plateforme peut à la fois implémenter le CTF et contribuer à son évolution.

**Les fédérations** sont des organisations professionnelles comme l'ICF et l'EMCC. Elles occupent un rôle spécifique : elles sont les autrices (ou au minimum les validatrices) des déclinaisons spécifiques à leur sphère professionnelle. Une fois qu'une déclinaison a été validée par une fédération, cette fédération devient l'autorité de certification pour les plateformes opérant dans sa sphère.

**Le cercle consultatif** (nom technique anglais : *advisory circle* ou *consultative council*) est un groupe non-décisionnaire qui sera formé une fois que deux fédérations ou plus seront engagées avec le CTF. Sa fonction est de garantir que l'évolution du framework reflète la diversité des traditions professionnelles, plutôt que la perspective d'un seul fondateur ou d'une seule plateforme adoptante précoce.

**Le panel scientifique** est un groupe non-décisionnaire de chercheurs qui examinent la qualité des preuves empiriques citées dans les propositions d'évolution. Il inclut des spécialistes de l'éthique de l'IA, du coaching fondé sur les preuves, et de la méthodologie. Il est non-décisionnaire mais ses avis sont publiés aux côtés des décisions.

**Les superviseurs certifiés** sont des humains qualifiés et indépendants des plateformes dont ils examinent les agents. Ils participent à l'audit des agents IA de coaching déployés, aux côtés de l'équipe de la plateforme et de l'agent assistant CTF Audit. La supervision est tripartite par construction — trois parties qui regardent ensemble le même agent.

## Comment les décisions se prennent : le processus de proposition

Toute évolution du CTF — du noyau commun, d'un agent assistant, du schéma de certification, de la gouvernance — passe par un processus public de proposition, inspiré de la manière dont les standards techniques sont construits depuis des décennies sur internet.

N'importe qui peut soumettre une **proposition d'évolution** (le nom technique anglais est *Request For Comments*, ou RFC). La proposition est publiée dans le dépôt. S'ouvre alors une **fenêtre de retours publics** de trente à soixante jours pendant laquelle quiconque peut commenter, critiquer, suggérer des améliorations. Après cette fenêtre, le mainteneur publie une décision documentée — acceptée, acceptée avec modifications, rejetée, ou renvoyée pour retravail. Les propositions acceptées sont intégrées à la version suivante du CTF.

Quand le cercle consultatif existe, les propositions de fond sont également examinées par le cercle pour avis non-décisionnaire. Quand la proposition cite des preuves empiriques (ce que toute proposition de fond doit faire), le panel scientifique examine la qualité de ces preuves.

Un type de proposition reçoit une rigueur supplémentaire : les propositions de **promotion d'une exigence vers le noyau commun**. Elles ne peuvent être acceptées que si l'exigence est déjà présente dans au moins deux déclinaisons indépendantes. C'est une contrainte délibérée empruntée à la pratique des standards techniques : nous ne décrétons jamais que quelque chose appartient au commun, nous ratifions uniquement ce qui s'est montré commun dans l'usage réel.

## Les traces empiriques sont un objet structurel

Parce que le CTF est inductif, les observations et les enseignements tirés de l'usage réel ne sont pas un complément — ils sont centraux dans la manière dont le framework évolue. C'est un choix délibéré : un framework qui se prétend fondé sur les preuves doit effectivement traiter les preuves comme un objet de premier plan.

Trois conséquences en découlent.

D'abord, il existe un **document de méthodologie** qui décrit comment les observations sont collectées, ce qui constitue une trace valide, et comment différents types de preuves sont pondérés. Ce n'est pas une thèse de doctorat ; c'est un guide pratique qui permet aux adoptants et aux examinateurs de savoir à quoi ressemble une bonne preuve dans ce contexte.

Ensuite, il existe un **format standardisé** pour que les adoptants, les superviseurs et les chercheurs envoient leurs observations. Sans format partagé, les observations arriveraient sous des dizaines de formes différentes et ne seraient pas comparables. Avec un format unique, elles peuvent être agrégées, indexées, retrouvées.

Enfin, il existe un **registre public des preuves** qui compile, version après version, ce qui a été documenté. Le registre est ouvert : tout le monde peut le lire, le citer, contester une entrée. C'est une des choses qui rendent le CTF auditable en tant que projet, pas seulement en tant qu'ensemble de règles.

## Comment une plateforme utilise concrètement le CTF

Concrètement, une plateforme qui souhaite implémenter le CTF passe par les étapes suivantes.

Elle choisit la version qu'elle implémente : soit le noyau commun générique (adapté aux adoptants précoces et aux situations où aucune déclinaison ne couvre encore le domaine de la plateforme), soit une déclinaison spécifique comme CTF-ICF (quand elle existe et qu'elle est pertinente).

Elle utilise **CTF Designer** pendant la phase de conception d'un nouvel agent de coaching. Designer est un agent assistant qui guide l'équipe de la plateforme à travers les choix de conception requis par le CTF — périmètre, posture, sources de connaissance, comportements de refus, parcours d'orientation, mentions de transparence. La sortie est un document de conception structuré qui consigne chaque décision constitutive. La conception produite par Designer est **portable** — elle décrit *ce que* l'agent doit faire, indépendamment de *l'endroit où* il est déployé.

Elle utilise **CTF Test Plan** pour produire un plan de test à partir du document de conception. Le plan de test est suffisamment détaillé pour que des humains ou des outils automatisés puissent exécuter les tests et rapporter les succès et les échecs.

Elle utilise **CTF Robustness** pour mettre l'agent à l'épreuve face à des scénarios adversariaux et limites — simulations de détresse, tentatives de manipulation, dérive hors-périmètre, pression d'anthropomorphisation, et autres catégories. La sortie est un rapport de robustesse qui peut conduire à des révisions de conception.

Elle utilise **CTF Config** pour produire la configuration de déploiement — les variables propres à la plateforme qui transforment une conception portable en un agent réellement déployé sur une plateforme cible : choix du modèle de fondation, langue, mentions légales régionales, intégration avec l'UI de la plateforme, format des transcriptions d'audit. Designer et Config se partagent le travail proprement : Designer produit le *quoi*, Config produit le *comment ici*. La même conception peut être redéployée sur une autre plateforme en ré-exécutant Config sans ré-exécuter Designer.

Une fois l'agent déployé, la plateforme exécute périodiquement **CTF Audit**. L'audit examine des transcriptions anonymisées d'interactions réelles et produit des rapports structurés sur la question de savoir si l'agent se comporte toujours comme le document de conception le prévoyait. L'audit est exécuté conjointement par trois parties : le concepteur de l'agent (un humain), un superviseur certifié indépendant, et l'agent assistant CTF Audit. Aucun des trois ne peut faire dériver l'agent dans son sens propre sans que les deux autres ne le voient.

La plateforme publie une auto-déclaration de conformité sur son propre site. Elle s'ajoute à la liste publique des adoptants dans le dépôt CTF. Elle envoie périodiquement ses observations via le format de retour standardisé. Quand les modèles de fondation utilisés par la plateforme sont mis à jour, le cycle se répète.

Si la plateforme opère dans la sphère d'une fédération (par exemple, elle sert des coachs accrédités ICF), elle peut viser une certification portée par la fédération une fois que celle-ci a approuvé sa déclinaison du CTF.

## Comment une fédération s'engage avec le CTF

Une fédération a deux manières de s'engager avec le CTF, et peut choisir l'une, l'autre, ou les deux.

La première manière est de **rédiger ou approuver une déclinaison**. La fédération peut produire sa propre déclinaison CTF de zéro (voie portée par la fédération). Ou bien elle peut examiner et valider une déclinaison qu'un membre de la communauté CTF a produite à partir de ses documents normatifs (voie portée par la communauté). Dans les deux cas, la fédération a le dernier mot sur le contenu de sa déclinaison. Une fois la déclinaison approuvée, la fédération devient l'autorité de certification pour les plateformes de sa sphère.

La seconde manière est de **contribuer au noyau commun**. Via le processus de proposition, les fédérations peuvent proposer que des exigences présentes dans leur déclinaison soient promues vers le CTF générique, où elles bénéficieraient à d'autres fédérations et à d'autres adoptants. C'est le mécanisme de remontée (*upstream*) décrit plus haut.

Ces deux manières sont complémentaires. Une fédération qui rédige une déclinaison fait naturellement émerger des contributions pour le noyau commun. Une fédération qui contribue au noyau commun gagne en familiarité avec le framework, ce qui aide le travail sur sa propre déclinaison.

Le CTF ne demande rien de financier aux fédérations. Pas de frais, pas de partenariat exclusif, pas d'engagement requis. L'engagement est une contribution à un bien public, pas une transaction.

## Ce que le CTF n'est pas

Quelques clarifications, puisque le champ est plein de choses qui se ressemblent superficiellement.

Le CTF **n'est pas une méthode de coaching**. Il ne dit pas aux coachs comment coacher. Il dit aux agents IA de coaching (et aux plateformes qui les construisent) comment se comporter de manière responsable quand l'IA est impliquée.

Le CTF **n'est pas un substitut à la certification professionnelle humaine**. Un coach humain a toujours besoin d'être formé, supervisé et accrédité par une fédération professionnelle. Le CTF concerne le côté IA de la pratique.

Le CTF **n'est pas une place de marché**. Il ne met pas en relation des coachs et des clients, ne prélève aucune commission sur aucune transaction, n'a aucun intérêt commercial dans aucune plateforme.

Le CTF **n'appartient à personne**. La licence le garantit en termes juridiques ; le principe fondateur l'énonce en termes simples. Aucune organisation ne peut privatiser le CTF.

Le CTF **n'est pas terminé**. La version 1.0 est un point de départ. Il évoluera à mesure que les déclinaisons seront produites et que les preuves s'accumuleront. Le mécanisme de cette évolution fait partie du framework lui-même.

## Pour aller plus loin

Si vous êtes **curieux** et souhaitez en lire davantage, le [document normatif](./document/ctf-v1.0.md) est le texte canonique du noyau commun, et le [README](./README.md) est le point d'entrée technique.

Si vous êtes **coach** et vous demandez si des agents IA conformes au CTF pourraient être utiles dans votre pratique, lisez la description des déclinaisons CTF-ICF ou CTF-EMCC une fois qu'elles seront disponibles. En attendant, demandez aux plateformes que vous envisagez si elles s'auto-déclarent conformes au CTF, et vérifiez la liste publique des adoptants.

Si vous **opérez une plateforme**, le parcours pratique est décrit dans `certification-scheme/self-declaration.md` et les agents assistants dans `tools/`. Commencez par la phase de conception d'un nouvel agent (avec CTF Designer) ; le reste du cycle suit.

Si vous représentez une **fédération**, le document dédié est `certification-scheme/federation-pathway.md`. Il décrit à la fois la rédaction d'une déclinaison de zéro et la validation d'une déclinaison portée par la communauté à partir de vos standards.

Si vous souhaitez **contribuer** d'une autre manière — proposer des évolutions, traduire, documenter des cas limites, examiner — `CONTRIBUTING.md` décrit comment.

---

## Glossaire

Ce glossaire définit les termes techniques qui apparaissent dans la documentation CTF, dans le même registre clair que le reste de ce guide. Pour chaque terme, l'équivalent anglais utilisé dans le dépôt est indiqué entre parenthèses.

**Adoptant** *(EN : adopter)* — Une plateforme, une organisation ou un praticien individuel qui s'engage publiquement à suivre le CTF. Les adoptants sont listés dans `ADOPTERS.md`.

**Agent** *(au sens IA, EN : agent)* — Un programme IA qui interagit avec un utilisateur (ou avec un autre outil) en recevant une entrée et en produisant une réponse. Le CTF distingue les *agents de coaching* (déployés par les plateformes pour interagir avec des personnes en contexte de coaching) des *agents assistants* (déployés au sein de la boîte à outils CTF pour aider les humains à construire des agents de coaching).

**Agent assistant** *(EN : helper agent)* — L'un des sept outils IA qui composent la boîte à outils CTF. Les agents assistants sont des outils sollicités, pas des compagnons conversationnels. Ils incluent CTF Translator, CTF Converger, CTF Designer, CTF Test Plan, CTF Robustness, CTF Config, CTF Audit.

**Anonymisation** *(EN : anonymization)* — La transformation des données afin que l'identité des personnes impliquées ne puisse pas être reconstituée. Le CTF exige que les transcriptions d'audit soient anonymisées par construction — pas après coup, mais dans le pipeline de données avant qu'elles n'atteignent un examinateur.

**Audit** *(EN : audit)* — Le processus par lequel le comportement réel d'un agent de coaching déployé est confronté aux attentes déclarées dans son document de conception. CTF Audit est l'agent assistant qui appuie ce processus.

**Auto-déclaration** *(EN : self-declaration)* — La voie par laquelle une plateforme s'engage publiquement à suivre le CTF sans l'intervention d'une autorité externe. La forme la plus légère de conformité, et actuellement la voie par défaut.

**Base de connaissances (KB)** *(EN : knowledge base)* — L'ensemble structuré de textes sur lequel un agent IA s'appuie pour formuler ses réponses. Pour un agent assistant CTF, la KB inclut les documents CTF pertinents et tout matériel de référence spécifique.

**Bien commun** *(EN : common good)* — Patrimoine appartenant à l'humanité, non privatisable. Le CTF est conçu pour appartenir au bien commun et le rester.

**Boîte à outils** *(EN : toolkit)* — L'ensemble des sept agents assistants CTF (Translator, Converger, Designer, Test Plan, Robustness, Config, Audit) qui appuient le travail des humains pour construire, tester, configurer, auditer et faire évoluer des agents de coaching.

**Cercle consultatif** *(EN : advisory circle ou consultative council)* — Groupe non-décisionnaire, formé une fois que deux fédérations ou plus sont engagées avec le CTF, qui fournit des avis consultatifs sur les propositions de fond. Sa fonction est de garantir que l'évolution du framework reflète la diversité des traditions professionnelles.

**Certification** *(EN : certification)* — Une déclaration publique, faite ou validée par une autorité reconnue, qu'une plateforme se conforme au CTF. Le CTF prévoit deux voies : auto-déclaration (par la plateforme elle-même) et certification portée par la fédération (une fois qu'une fédération a approuvé sa déclinaison).

**Clause de partage à l'identique** *(EN : ShareAlike clause)* — La clause de la licence CC BY-SA 4.0 qui exige que toute republication ou modification du CTF soit publiée sous la même licence. C'est ce qui empêche quiconque de réaliser un fork fermé et propriétaire du CTF.

**Contributeur** *(EN : contributor)* — Un individu ou une organisation qui propose des évolutions du CTF ou contribue autrement à son travail. Les contributeurs sont listés dans `CONTRIBUTORS.md`.

**Cycle inductif** *(EN : inductive cycle)* — Le processus par lequel le noyau commun s'enrichit en absorbant des exigences qui se sont révélées présentes dans plusieurs déclinaisons indépendantes. Voir aussi *règle des implémentations multiples*.

**Déclinaison** *(EN : declination)* — Une version adaptée du CTF qui intègre les exigences spécifiques d'une fédération professionnelle. CTF-ICF, CTF-EMCC, etc. Les déclinaisons vivent dans le dossier `declinations/` du dépôt.

**Document normatif / Norme** *(EN : norm / normative document)* — La partie écrite du CTF qui articule les attentes. Le noyau commun est un document normatif ; chaque déclinaison est aussi un document normatif.

**Fédération** *(EN : federation)* — Un organisme professionnel qui établit des standards pour la pratique du coaching. Exemples : International Coaching Federation (ICF), European Mentoring and Coaching Council (EMCC).

**Fondateur** *(EN : founder)* — La personne qui a initialement rédigé le CTF. Reconnu dans l'attribution de la licence. Le statut de fondateur ne confère aucun pouvoir continu.

**Implémentation** *(EN : implementation)* — Un agent de coaching concret (ou un ensemble d'agents) construit par une plateforme, dont on dit qu'il "implémente le CTF" s'il suit les attentes du framework.

**Inductif** *(EN : inductive)* — Construire de l'observation vers le haut, plutôt que du principe vers le bas. Le CTF est inductif en ce que le noyau commun grandit en absorbant ce qui a été observé comme commun à plusieurs déclinaisons.

**Licence (CC BY-SA 4.0)** *(EN : License — CC BY-SA 4.0)* — La licence Creative Commons spécifique sous laquelle le CTF est publié. Elle autorise un usage libre y compris commercial, exige l'attribution au fondateur, et exige que toute republication ou modification du texte du CTF soit partagée sous la même licence. Elle ne se propage pas aux plateformes qui se contentent d'implémenter le CTF dans leurs propres produits.

**Mainteneur** *(EN : caretaker, parfois aussi custodian)* — La personne responsable du fonctionnement quotidien du projet. Actuellement le fondateur. Le mainteneur n'est pas le propriétaire du CTF.

**Modèle de fondation** *(EN : foundation model)* — Le grand modèle de langage sous-jacent sur lequel un agent IA est construit. Les agents de coaching s'exécutent typiquement par-dessus un modèle de fondation (par exemple l'un des LLMs bien connus de divers fournisseurs). Quand le modèle de fondation change, le comportement de l'agent peut changer subtilement et le cycle d'audit doit être ré-exécuté.

**Noyau commun** *(EN : common core)* — La partie générique du CTF — ce qui est censé s'appliquer à tout agent IA de coaching digne de confiance, indépendamment de la tradition professionnelle. Initialement minimal, le noyau commun grandit dans le temps en absorbant les exigences qui se révèlent communes à plusieurs déclinaisons.

**Panel scientifique** *(EN : scientific panel)* — Groupe non-décisionnaire de chercheurs qui examinent la qualité des preuves empiriques citées dans les propositions d'évolution. Ses avis sont publiés mais ne décident pas, à eux seuls.

**Plateforme** *(EN : platform)* — Une organisation qui construit et déploie des agents IA de coaching.

**Posture** *(EN : posture)* — La position d'ensemble qu'un agent IA de coaching adopte vis-à-vis de l'utilisateur. Le CTF attend des agents de coaching qu'ils maintiennent une posture sollicitée (l'utilisateur invoque un outil avec un contexte) plutôt qu'une posture relationnelle ou de compagnon.

**Promotion / Promouvoir** *(EN : promote / promotion, aussi upstream / upstreaming)* — L'acte de faire passer une exigence d'une ou plusieurs déclinaisons vers le noyau commun. Les promotions sont décidées via le processus de proposition et exigent des preuves de convergence inter-déclinaisons.

**Prompt système** *(EN : system prompt)* — Le texte de configuration donné à un modèle de fondation pour définir comment un agent doit se comporter. Les prompts système des agents assistants CTF sont publiés dans le dépôt comme partie de la boîte à outils.

**Proposition d'évolution** *(EN : proposal for change, nom technique : RFC, Request For Comments)* — Le mécanisme formel par lequel quiconque peut proposer une évolution du CTF. Soumise comme un document, ouverte aux retours publics, et tranchée par le mainteneur.

**Registre des preuves / Journal des observations** *(EN : evidence log)* — Registre public et versionné des observations empiriques qui motivent l'évolution du CTF. Vit dans `validation/evidence-log.md`.

**Règle des implémentations multiples** *(EN : multiple implementations rule)* — La règle, empruntée à la pratique des standards techniques, selon laquelle aucune exigence ne peut être promue dans le noyau commun à moins d'être déjà présente dans au moins deux déclinaisons indépendantes.

**Sollicité (vs conversationnel)** *(EN : sollicited vs conversational)* — Une posture dans laquelle l'agent est invoqué avec un contexte spécifique pour produire une réponse spécifique, plutôt que d'entrer dans un échange relationnel continu. Le CTF exige que ses agents (à la fois de coaching et assistants) soient sollicités, pas conversationnels.

**Superviseur certifié** *(EN : certified supervisor)* — Un humain qualifié et indépendant de la plateforme, qui participe à l'audit d'un agent de coaching déployé aux côtés du concepteur de la plateforme et de l'agent assistant CTF Audit.

**Supervision tripartite** *(EN : tripartite supervision)* — Le modèle d'audit dans lequel trois parties — le concepteur humain de l'agent, un superviseur certifié indépendant, et l'agent assistant CTF Audit — examinent l'agent conjointement.

**Test de robustesse** *(EN : robustness testing)* — L'activité de mise à l'épreuve d'un agent face à des scénarios adversariaux et limites, pour faire émerger des modes de défaillance que les tests ordinaires ratent. CTF Robustness est l'agent assistant qui appuie cette activité.

**Plan de test** *(EN : test plan)* — Un ensemble structuré de tests qui vérifient si un agent se comporte comme son document de conception le déclare. CTF Test Plan est l'agent assistant qui produit les plans de test.

**Remontée vers le noyau** *(EN : upstream / upstreaming)* — Voir *promotion*.

---

*Cet explainer est lui-même publié sous licence CC BY-SA 4.0. Vous pouvez le traduire, l'adapter, le partager, avec attribution au fondateur du CTF.*
