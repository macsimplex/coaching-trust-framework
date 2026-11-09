# RFC 0007 : Suppression de l'auto-déclaration

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise, qui fait foi en cas de divergence : [0007-remove-self-declaration.md](./0007-remove-self-declaration.md).*

## En-tête

- **Numéro :** 0007
- **Titre :** Suppression de l'auto-déclaration
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** du 2026-11-09 au 2026-12-09 (30 jours)
- **Statut :** Ouverte aux commentaires (preuves à réunir)
- **Concerne :** Dispositif de certification · README · EXPLAINER · INTEGRATION · ADOPTERS
- **Remplace :** —

## Résumé

Cette RFC propose de supprimer l'auto-déclaration de conformité comme voie d'adhésion au CTF, au profit de la seule validation par le consortium indépendant (RFC 0006). Une plateforme ne peut plus se déclarer conforme d'elle-même.

## Motivation

Le postulat 3 de la vision pose qu'une plateforme ne peut pas se certifier elle-même. Or `certification-scheme/self-declaration.md` permet précisément à une plateforme de se déclarer conforme « sans la permission de personne », sans audit externe, et affirme que cette déclaration « n'est pas plus faible » qu'une certification fédérale. Cette voie est aujourd'hui présentée comme la voie par défaut (glossaire de l'EXPLAINER) et clôt le guide d'intégration (`INTEGRATION.md`, étape 6).

## Proposition détaillée

1. **Suppression.** L'auto-déclaration cesse d'être une voie de conformité au CTF. Le fichier `certification-scheme/self-declaration.md` est retiré, ou archivé avec une mention explicite indiquant qu'il n'a plus cours.
2. **Voie unique.** La conformité au CTF résulte uniquement d'une validation par le consortium, selon les briques Éprouver, Surveiller et Garantir.
3. **Adhésion.** Une plateforme peut toujours **adhérer** au CTF, c'est-à-dire accepter ses conditions (tests incognito, supervision des échanges, anonymisation) et s'engager dans la démarche. L'adhésion n'est pas une conformité et ne peut pas être présentée comme telle.
4. **Transition.** Les auto-déclarations existantes (voir `ADOPTERS.md`) disposent d'un délai pour engager la validation par le consortium ; à défaut, elles sont retirées de la liste.
5. **Mises à jour.** Le README, les deux EXPLAINER, `INTEGRATION.md` et `ADOPTERS.md` sont alignés.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; ils seront réunis pendant la période de commentaires (**preuves à réunir**), conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Les plateformes auto-déclarées, dont EGG, doivent engager la validation par le consortium. Tant que le consortium n'existe pas (RFC 0006, étape 1), aucune plateforme ne peut se dire conforme.

### Sur les déclinaisons

Aucun changement de fond.

### Sur les agents assistants

Aucun changement.

### Sur le dispositif de certification

Le dispositif de certification passe de trois voies (auto-déclaration, fédération, communauté) à une validation par le consortium, à laquelle fédérations et communauté contribuent.

## Alternatives envisagées

- **Conserver l'auto-déclaration** (situation actuelle) : faible friction, mais contraire au postulat 3.
- **La conserver comme simple engagement**, explicitement distinct d'une certification : écartée par le mainteneur au profit d'une suppression nette, la notion d'adhésion (point 3) en reprenant l'intention.

## Questions ouvertes

- Quelle durée pour la transition des auto-déclarations existantes ?
- Que peut afficher une plateforme adhérente avant d'être validée ?
- Faut-il retirer le fichier `self-declaration.md` ou le conserver archivé pour la traçabilité ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial et ouverture aux commentaires.
