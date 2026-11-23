# RFC 0006 : Gouvernance, d'un auteur unique à un consortium indépendant

> **Le bien commun prime sur toute organisation, y compris sur toute organisation qui viendrait un jour à émerger pour porter cette norme.**

*Version anglaise : [0006-consortium-governance.md](./0006-consortium-governance.md). En cas de divergence, la version anglaise fait foi.*

## En-tête

- **Numéro de RFC :** 0006
- **Titre :** Gouvernance, d'un auteur unique à un consortium indépendant
- **Type :** Gouvernance
- **Auteur(s) :** Maxime Bui
- **Date de dépôt :** 2026-11-09 ; brouillon révisé du 2026-11-23
- **Période de commentaires publics :** pas encore ouverte
- **Statut :** Brouillon (révision de la version archivée du 9 novembre 2026)
- **Concerne :** Gouvernance ; protocole d'évaluation (RFC 0010) ; jeu de test réservé (RFC 0005)
- **Liée à :** [RFC 0005](./0005-reserved-test-set.fr.md) (jeu de test réservé), [RFC 0008](./0008-standard-v0-starting-requirements.fr.md) (exigences), [RFC 0010](./0010-evaluation-protocol-v0.fr.md) (protocole d'évaluation)
- **Remplace :** la version de cette RFC déposée le 2026-11-09

## Résumé

Aujourd'hui, une seule personne, l'auteur, rédige la norme CTF, décide des changements, détient le matériel de test réservé et construit l'outil de test de référence. Cette même personne vend des agents de coaching et prévoit un service de test hébergé payant. Cette RFC fixe les règles qui s'appliquent **dès maintenant**, tant que c'est le cas : décisions écrites, intérêts déclarés, et limites à la façon dont sont traités les agents de l'auteur et son propre service. Elle décrit ensuite comment les décisions passeraient, en trois étapes et à des conditions énoncées, à un consortium indépendant. La version 0 ne produit que des rapports de test ; cette RFC ne crée aucune certification.

## En termes simples

- **Aujourd'hui, l'auteur décide**, par écrit, et publie ses intérêts. C'est une faiblesse, et cette RFC le dit.
- **Tant qu'il n'y a pas de consortium, les agents de l'auteur ne reçoivent aucun traitement de faveur.** Leurs rapports disent qui les a construits et qui a mené le test, et leurs résultats sur les scénarios réservés ne comptent pas, puisque l'auteur connaît ces scénarios.
- **Le service payant que prévoit l'auteur ne peut pas devenir le seul moyen d'être testé.** La norme, les scénarios non réservés et l'outil de test restent libres et ouverts, et chacun peut les utiliser.
- **Les décisions passent à d'autres par étapes**, chacune déclenchée par une condition vérifiable, et non par une date.
- **Le consortium fixerait les règles, vérifierait les preuves et déciderait des changements.** La question de savoir s'il délivrerait un jour des certifications est laissée à une RFC distincte.

## Motivation

La vision pose qu'une plateforme ne peut pas être seule juge de son propre agent (postulat 3). Le même raisonnement vaut pour l'auteur d'une norme qui construit et vend des agents, et prévoit d'en tester. La version archivée de cette RFC (9 novembre 2026) décrivait l'état final, un consortium, mais disait peu de chose de la période qui le précède : c'est pourtant celle où la version 0 est rédigée et utilisée pour la première fois.

Quatre risques précis existent pendant cette période :

1. **Favoritisme.** L'auteur pourrait écrire des exigences ou des scénarios que ses propres agents réussissent facilement, ou trancher les cas limites en leur faveur.
2. **Matériel réservé.** La RFC 0005 repose sur des scénarios ou des formulations que les agents n'ont pas vus. L'auteur les détient et développe aussi des agents.
3. **Capture commerciale.** Un service hébergé payant, exploité par la société de l'auteur, pourrait devenir de fait le seul moyen d'obtenir un rapport de test CTF.
4. **Intérim sans fin.** Sans conditions de passage de relais, « tant qu'il n'y a pas de consortium » peut durer indéfiniment.

## Proposition détaillée

### 1. Principe fondateur

Le bien commun prime sur toute organisation, y compris sur toute organisation qui viendrait un jour à émerger pour porter cette norme. La norme, les scénarios non réservés et l'outil de test de référence sont publiés sous licences ouvertes. Aucune étape de cette RFC ne peut changer cela, et aucune RFC ordinaire ne peut modifier ce principe.

### 2. Étape 0 (maintenant) : l'auteur décide, sous conditions

L'auteur (actuellement Maxime Bui) assure le rôle de mainteneur. Il décide des RFC et publie les versions de la norme. En contrepartie :

1. **Décisions écrites.** Chaque décision est consignée dans la section « Décision du mainteneur » de la RFC, avec ses motifs et la façon dont chaque commentaire a été pris en compte ou non.
2. **Intérêts déclarés.** Les intérêts de l'auteur sont publiés sur la page d'accueil du projet et mis à jour dans les 30 jours suivant tout changement. Toute autre personne qui décide ou relit (relecteurs humains, cliniciens) déclare les siens de la même façon.
3. **Aucune modification d'une version publiée.** Tout changement produit une nouvelle version.
4. **Les agents de l'auteur.** Pour tout agent construit, vendu ou exploité par l'auteur, ou par une société qu'il contrôle :
    - le rapport de test l'indique en première page, avec le nom de qui a mené le test ;
    - les résultats sur les scénarios ou formulations réservés (RFC 0005) ne sont pas publiés pour ces agents, puisque l'auteur les connaît ;
    - un tel agent ne peut pas servir d'agent de référence pour valider des scénarios (RFC 0010) ;
    - la relecture humaine de ses essais critiques (RFC 0010) est faite par des relecteurs qui ne sont pas payés par l'auteur pour cette relecture et qui ignorent à qui appartient l'agent, dans la mesure où la transcription le permet.
5. **Exigences et scénarios.** Quand l'auteur propose ou modifie une exigence ou un scénario, la RFC indique si, à sa connaissance, ses propres agents la réussiraient ou y échoueraient.
6. **Service hébergé.** Si la société de l'auteur exploite une instance hébergée payante de l'outil de test :
    - elle utilise une version publiée de la norme et de l'outil, sans scénario ni règle non publiés ;
    - ses rapports indiquent qui a mené le test et qu'il s'agit d'un service payant ;
    - elle ne reçoit aucun matériel réservé qui ne soit pas aussi accessible, aux mêmes conditions, à tout autre testeur ;
    - l'outil libre et ouvert reste capable de produire le même rapport.
7. **Second dépositaire.** Dès qu'une personne indépendante de l'auteur l'accepte, le matériel réservé lui est confié, comme la RFC 0010 le prévoit déjà pour les formulations réservées. D'ici là, les rapports indiquent que l'auteur est seul à le détenir.

### 3. Étape 1 : des relecteurs indépendants

**Condition.** Au moins deux cliniciens et deux coachs indépendants de l'auteur (ni employés, ni payés, ni mandatés par lui, et ne vendant pas d'agent de coaching) ont accepté de relire les scénarios et les RFC.

**Changement.** Avant chaque décision sur une RFC, leurs avis sont publiés à côté d'elle. Quand l'auteur décide contre l'avis de la majorité d'entre eux, il explique pourquoi dans sa décision. Ce sont aussi eux qui choisissent, entre eux, les relecteurs des agents de l'auteur.

### 4. Étape 2 : consortium fondateur

**Condition.** Au moins trois des collèges ci-dessous comptent chacun au moins un membre indépendant de l'auteur, et les statuts du consortium ont été proposés par RFC puis adoptés après une période de commentaires publics.

**Collèges.** Éditeurs de plateformes ; fédérations et associations professionnelles de coachs ; chercheurs ; cliniciens ; superviseurs. Aucun collège ne détient seul la majorité.

**Changement.** Le consortium valide chaque version du protocole d'évaluation et détient le matériel réservé. L'auteur garde la décision sur les autres RFC, après avis du consortium, et ne peut pas passer outre son avis sur le protocole ou sur le matériel réservé.

### 5. Étape 3 : consortium indépendant

**Condition.** Deux ans après le début de l'étape 2, ou plus tôt si le consortium le décide selon les règles de ses statuts.

**Changement.** Le consortium reprend toutes les décisions. Le rôle de mainteneur unique prend fin. L'auteur conserve les droits de tout autre membre, ainsi que la règle sur les conflits d'intérêts ci-dessous.

### 6. Conflits d'intérêts (toutes étapes)

Une personne qui construit, vend ou exploite un agent, ou qui est payée par lui, ne prend part à aucune décision concernant cet agent ou ses concurrents directs, et ne relit pas ses tests. Cela s'applique à l'auteur.

### 7. Transparence du consortium (étapes 2 et 3)

Le consortium s'applique les règles qu'il fixe : ses statuts, ses décisions motivées, ses comptes et les intérêts déclarés de ses membres sont publics. Son financement ne peut pas dépendre pour plus d'un tiers des plateformes dont il teste les agents. Cette RFC ne tranche pas la question de savoir si le consortium délivrerait un jour des certifications, ni à quelles conditions ; il y faudrait une RFC distincte.

## Éléments empiriques

Cette RFC est une proposition de gouvernance ; elle ne s'appuie sur aucune entrée du registre des preuves. Elle s'inspire de deux pratiques établies :

- **La déclaration et la gestion des conflits d'intérêts** dans l'élaboration des normes et dans la recherche : ceux qui écrivent une norme ou évaluent des preuves déclarent leurs intérêts et se retirent des décisions qui les concernent.
- **La séparation entre ceux qui écrivent une norme, ceux qui testent au regard de cette norme et ceux qui décident**, comme dans l'accréditation des organismes de test (par exemple ISO/IEC 17025 pour les laboratoires et ISO/IEC 17065 pour les organismes de certification). Le CTF en est loin ; les étapes ci-dessus sont une façon d'aller vers cette séparation sans prétendre l'avoir atteinte.

## Analyse d'impact

- **Sur les contributeurs.** Ils savent qui décide, comment, et à quelles conditions cela changera.
- **Sur les plateformes.** Une plateforme concurrente des agents de l'auteur sait que ces agents ne reçoivent aucun traitement de faveur et que le service payant n'a aucune exclusivité.
- **Sur la version 0.** Les rapports sur les agents de l'auteur portent les mentions de la section 2.4. La RFC 0010 sera modifiée en conséquence à l'ouverture de sa période de commentaires.
- **Sur l'auteur.** L'auteur renonce à utiliser le matériel réservé pour ses propres agents, et accepte un chemin, aux conditions énoncées, vers la perte de son pouvoir de décision.

## Alternatives envisagées

- **Garder la version archivée** : elle décrivait le consortium mais laissait sans règles la période actuelle, celle où les risques ci-dessus sont les plus forts.
- **Attendre un consortium avant de publier quoi que ce soit** : plus sûr en principe, mais aucun consortium ne se forme autour d'une page blanche ; c'est un projet de norme que des membres peuvent rejoindre.
- **Confier la norme à une organisation existante** (une fédération, un organisme de certification) : cela apporterait de la crédibilité, mais lierait la norme à une seule tradition professionnelle et pourrait la fermer, contrairement au principe fondateur.
- **Des dates plutôt que des conditions pour chaque étape** : plus faciles à vérifier, mais une date peut arriver avant que quiconque d'indépendant n'ait rejoint le projet.

## Questions ouvertes

- **Q16.** Les conditions des étapes 1 et 2 sont-elles les bonnes ? L'étape 1 devrait-elle aussi exiger un chercheur ?
- **Q17.** La limite d'un tiers de la section 7 est-elle réaliste, et devrait-elle s'appliquer avant l'étape 2 aux revenus du service hébergé ?
- **Q18.** Quelle forme juridique pour le consortium (association, fondation, coopérative), et dans quel pays ?
- **Q19.** Les relecteurs des agents de l'auteur devraient-ils ignorer l'identité de l'agent même quand la transcription la révèle, par exemple en masquant les noms ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [CONTRIBUTING.fr.md](../CONTRIBUTING.fr.md).*

## Décision du mainteneur

*À compléter à la fin de la période de commentaires publics. Selon l'étape 0 de cette même RFC, l'auteur en décide et déclare son intérêt dans l'issue.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (version archivée : consortium décrit, étapes sans conditions).
- **2026-11-23** — Brouillon révisé : règles pour la période actuelle (étape 0), conditions de chaque étape, agents de l'auteur et service hébergé, certification renvoyée à une RFC distincte.
