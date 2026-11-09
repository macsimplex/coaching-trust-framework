# RFC 0005 : Jeu de tests réservé

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise : [0005-reserved-test-set.md](./0005-reserved-test-set.md).*

## En-tête

- **Numéro :** 0005
- **Titre :** Jeu de tests réservé
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** [à fixer par le mainteneur à l'ouverture]
- **Statut :** Brouillon
- **Concerne :** Brique Éprouver · Brique Garantir · CTF Test Plan · Gouvernance
- **Remplace :** —

## Résumé

Cette RFC propose qu'en plus des tests publics, le consortium détienne un jeu de tests réservé, non publié et renouvelé régulièrement, afin d'éviter qu'un agent soit optimisé pour réussir les seuls tests connus (bachotage).

## Motivation

Des tests entièrement publics permettent d'ajuster un agent pour qu'il réussisse ces tests précis sans respecter le cadre en général. Ce risque est bien connu des évaluations de modèles d'IA. La transparence du CTF (règles publiques) doit être conciliée avec la robustesse de la vérification.

## Proposition détaillée

1. **Deux jeux.** Les tests se composent d'un jeu public, publié dans le dépôt, et d'un jeu réservé, détenu par le consortium.
2. **Même grille.** Le jeu réservé couvre les mêmes exigences et la même grille d'évaluation que le jeu public ; seuls les scénarios diffèrent. Les règles restent publiques, seuls les cas sont réservés.
3. **Renouvellement.** Le jeu réservé est renouvelé à une fréquence fixée par le consortium. Les scénarios retirés peuvent être publiés et rejoindre le jeu public.
4. **Usage.** Une certification combine des tests publics et réservés. Un écart marqué entre les résultats sur les deux jeux constitue une alerte.
5. **Garde.** L'accès au jeu réservé est limité, tracé, et soumis à des règles de conflit d'intérêts, en particulier pour les membres du consortium qui éditent eux-mêmes des agents.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; les éléments empiriques devront être réunis avant l'ouverture de la période de commentaires, conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Aucun développement requis. Les plateformes ne peuvent plus préparer leurs agents sur la totalité des tests.

### Sur les déclinaisons

Chaque déclinaison devra disposer de son propre jeu réservé, ou d'un jeu commun adapté.

### Sur les agents assistants

CTF Test Plan peut servir à générer des candidats pour le jeu réservé, sous le contrôle du consortium.

### Sur le dispositif de certification

Les certifications s'appuient sur les deux jeux.

## Alternatives envisagées

- **Tests entièrement publics** (situation actuelle) : transparence maximale, mais exposés au bachotage.
- **Tests entièrement secrets** : robustes, mais contraires au principe de règles publiques et vérifiables.

## Questions ouvertes

- Quelle proportion entre tests publics et réservés ?
- Quelle fréquence de renouvellement ?
- Comment concilier le jeu réservé avec le principe fondateur et l'exigence de vérifiabilité par tous ?
- Comment gérer les conflits d'intérêts des membres du consortium qui sont aussi éditeurs, y compris le fondateur (EGG) ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (brouillon).
