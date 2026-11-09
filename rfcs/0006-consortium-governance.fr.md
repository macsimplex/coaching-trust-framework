# RFC 0006 : Gouvernance par un consortium indépendant

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise, qui fait foi en cas de divergence : [0006-consortium-governance.md](./0006-consortium-governance.md).*

## En-tête

- **Numéro :** 0006
- **Titre :** Gouvernance par un consortium indépendant
- **Type :** Gouvernance (« Governance »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** du 2026-11-09 au 2026-12-09 (30 jours)
- **Statut :** Ouverte aux commentaires (preuves à réunir)
- **Concerne :** Gouvernance · Brique Garantir · Dispositif de certification · Méthodologie de validation
- **Remplace :** —

## Résumé

Cette RFC propose que la gouvernance du CTF passe, à terme, d'un mainteneur unique (le fondateur) à un consortium indépendant, lui-même soumis à des règles ouvertes et vérifiables. Le consortium édite les tests, valide le protocole d'évaluation et délivre les certifications. La transition se fait par étapes, et le principe fondateur reste au-dessus de toute organisation, y compris du consortium.

## Motivation

La vision pose qu'une plateforme ne peut pas se certifier elle-même et que la confiance ne peut venir que d'un tiers indépendant (postulat 3). Elle confie la validation à un consortium indépendant dont les règles sont publiques. Or `GOVERNANCE.md` prévoit aujourd'hui un mainteneur unique, le fondateur, qui décide seul ; le cercle consultatif et le panel scientifique n'émettent que des avis. Le fondateur crée et initie le CTF pour l'élargir, non pour en rester propriétaire. Il applique en outre le CTF à ses propres projets d'agents de coaching, ce qui crée un conflit d'intérêts dès qu'il s'agit de certifier : d'autres contributeurs, et des chercheurs pour lire et analyser les données, sont nécessaires.

## Proposition détaillée

1. **Rôle du consortium.** Le consortium : édite et renouvelle les tests (publics et réservés, RFC 0005) ; valide chaque version du protocole d'évaluation (RFC 0002) ; délivre, suspend et retire les certifications (RFC 0003) ; tranche les RFC.
2. **Composition.** Le consortium réunit plusieurs collèges : éditeurs de plateformes, fédérations professionnelles, chercheurs, superviseurs. Aucun collège ne détient seul la majorité.
3. **Règles ouvertes.** Ses statuts, ses décisions motivées, ses comptes et les conflits d'intérêts déclarés de ses membres sont publics. Il s'applique à lui-même les exigences qu'il impose : c'est la cohérence entre ce qu'il exige et ce qu'il s'impose qui fonde sa légitimité.
4. **Conflits d'intérêts.** Un membre qui édite un agent ne participe à aucune décision concernant cet agent ni ses concurrents directs. Cette règle s'applique au fondateur pour ses propres agents.
5. **Transition par étapes.**
    - *Étape 1 (actuelle)* : le fondateur est mainteneur ; le consortium fondateur se constitue.
    - *Étape 2* : le consortium fondateur valide les évaluations et les certifications ; le mainteneur garde la décision sur les RFC, après avis du consortium.
    - *Étape 3* : le consortium reprend l'ensemble des décisions ; le rôle de mainteneur unique prend fin.
6. **Principe fondateur.** Le principe « le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard » s'applique au consortium. Il n'est pas modifiable par le consortium par la procédure ordinaire.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; ils seront réunis pendant la période de commentaires (**preuves à réunir**), conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Les plateformes traitent avec le consortium et non plus avec le seul fondateur. Elles peuvent rejoindre le collège des éditeurs.

### Sur les déclinaisons

Les déclinaisons portées par une fédération restent sous la responsabilité de celle-ci ; leur reconnaissance comme déclinaison du CTF relève du consortium.

### Sur les agents assistants

Aucun changement direct. La maintenance des agents assistants passe sous la responsabilité du consortium à l'étape 3.

### Sur le dispositif de certification

Le consortium devient l'autorité de certification ; les fédérations y participent par leur collège plutôt qu'en certifiant seules (voir `certification-scheme/federation-pathway.md`).

## Alternatives envisagées

- **Mainteneur unique** (situation actuelle) : rapide et cohérent, mais incompatible avec le postulat 3 dès lors qu'il faut certifier.
- **Consortium immédiat** : conforme à la vision, mais irréaliste tant que les membres ne sont pas réunis.
- **Confier la certification à une organisation existante** (organisme de certification, fédération) : crédible, mais contraire au principe fondateur et à l'indépendance vis-à-vis des traditions professionnelles.

## Questions ouvertes

- Quelle forme juridique pour le consortium (association, fondation, coopérative) et dans quel pays ?
- Quel critère déclenche le passage d'une étape à la suivante ?
- Comment financer le consortium sans dépendre des plateformes qu'il certifie ?
- Quelle place pour le cercle consultatif et le panel scientifique actuels ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial et ouverture aux commentaires.
