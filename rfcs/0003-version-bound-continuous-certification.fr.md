# RFC 0003 : Certification continue liée à une version

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise : [0003-version-bound-continuous-certification.md](./0003-version-bound-continuous-certification.md).*

## En-tête

- **Numéro :** 0003
- **Titre :** Certification continue liée à une version
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** [à fixer par le mainteneur à l'ouverture]
- **Statut :** Brouillon
- **Concerne :** Brique Garantir · Document normatif · Dispositif de certification · CTF Audit · CTF Config
- **Remplace :** —

## Résumé

Cette RFC propose qu'un certificat CTF vaille pour une version précise d'un agent, définie par son modèle, son prompt et sa base de connaissances. Tout changement de l'un de ces éléments relance les tests. La certification cesse d'être un événement ponctuel pour devenir un état continu.

## Motivation

Un agent IA dérive : le fournisseur met à jour le modèle, le créateur modifie le prompt ou la base de connaissances. Un agent conforme en mars peut ne plus l'être en juin. Or le dépôt prévoit aujourd'hui des certifications à durée fixe (par exemple 24 mois dans `certification-scheme/federation-pathway.md`), des revues annuelles, et une recertification limitée aux « changements significatifs » de conception (`document/ctf-v1.0.md`).

## Proposition détaillée

1. **Identité de version.** Une version d'agent est définie par le triplet : identifiant exact du modèle (y compris sa version chez le fournisseur), empreinte du prompt, empreinte de la base de connaissances.
2. **Portée du certificat.** Un certificat porte sur une version d'agent, et sur elle seule. Il mentionne le triplet.
3. **Déclenchement.** Toute modification de l'un des trois éléments, y compris une mise à jour du modèle par le fournisseur, invalide le certificat et relance les tests de la brique Éprouver.
4. **Continuité.** Entre deux changements, la brique Surveiller maintient l'observation des échanges réels ; une dérive détectée peut suspendre le certificat.
5. **Publicité.** L'état du certificat (valide, suspendu, en cours de re-test) est publié et consultable à tout moment.
6. **Proportionnalité.** Le volume de tests relancés peut être proportionné à l'ampleur du changement, selon des règles fixées par le consortium, sans jamais être nul.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; les éléments empiriques devront être réunis avant l'ouverture de la période de commentaires, conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Les plateformes doivent tracer les versions de leurs agents et notifier tout changement. Les mises à jour silencieuses de modèle chez un fournisseur deviennent un enjeu : il faut épingler les versions de modèle.

### Sur les déclinaisons

Aucune adaptation de fond, sinon l'alignement des durées de validité prévues.

### Sur les agents assistants

CTF Config doit enregistrer le triplet de version. La mise en cache de scénarios déjà réussis (`tools/ctf-config/best-practices.md`) doit être revue : elle ne peut pas s'appliquer lorsque le modèle ou la base change.

### Sur le dispositif de certification

Les durées de validité fixes et les revues annuelles sont remplacées par un état continu lié à la version.

## Alternatives envisagées

- **Certification à durée fixe** (situation actuelle) : lisible, mais aveugle aux changements entre deux échéances.
- **Re-test seulement pour les changements « significatifs »** : moins coûteux, mais laisse au créateur le soin de juger ce qui est significatif.

## Questions ouvertes

- Comment traiter les fournisseurs qui ne permettent pas d'épingler une version de modèle ?
- Quel délai de grâce entre un changement et la fin du re-test ?
- Faut-il un niveau de re-test allégé pour les changements mineurs de base de connaissances ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (brouillon).
