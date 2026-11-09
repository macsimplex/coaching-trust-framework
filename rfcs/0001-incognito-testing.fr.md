# RFC 0001 : Tests incognito (principe du client mystère)

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise : [0001-incognito-testing.md](./0001-incognito-testing.md).*

## En-tête

- **Numéro :** 0001
- **Titre :** Tests incognito (principe du client mystère)
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** [à fixer par le mainteneur à l'ouverture]
- **Statut :** Brouillon
- **Concerne :** Brique Éprouver · CTF Test Plan · CTF Robustness · Dispositif de certification
- **Remplace :** —

## Résumé

Cette RFC propose qu'une partie des tests d'un agent soit menée incognito, selon le principe du client mystère : par l'interface ordinaire de la plateforme, depuis des comptes ordinaires, avec des scénarios normés insérés dans des échanges courants. Le consentement préalable de la plateforme à ces tests devient une condition d'adhésion au CTF.

## Motivation

Un agent qui sait qu'il est testé peut se comporter différemment, comme l'a montré le Dieselgate dans l'automobile. Aujourd'hui, les tests prévus par le CTF sont exécutés par la plateforme elle-même, en chargeant directement l'agent (voir `tools/PIPELINE.md`, « Agent 3 — Test Execution »). Ils ne disent rien du comportement de l'agent tel qu'il est réellement servi aux personnes, ni de ce qui se passe lorsque les situations critiques surgissent au milieu d'un échange ordinaire.

## Proposition détaillée

1. **Principe.** Une part des tests de la brique Éprouver est réalisée sans que l'agent ni la plateforme ne puissent distinguer le test d'un usage réel au moment où il a lieu.
2. **Canal.** Les tests incognito passent par l'interface utilisateur de la plateforme (web, mobile, messagerie), depuis des comptes ordinaires créés selon le parcours standard.
3. **Scénarios.** Les situations normées (détresse, manipulation, demande hors du métier, etc.) sont insérées dans des échanges courants, et non présentées comme des cas de test isolés.
4. **Exécution.** Les échanges sont conduits par des agents simulés, sous la responsabilité du consortium ; les transcriptions sont évaluées selon le protocole d'évaluation à plusieurs modèles (RFC 0002).
5. **Consentement de la plateforme.** En adhérant au CTF, la plateforme consent par écrit et à l'avance à ces tests, sans en connaître la date ni le contenu. Ce consentement est une condition d'adhésion.
6. **Encadrement.** Les comptes de test sont déclarés à un tiers de confiance du consortium, ne sont pas facturés au-delà de l'usage normal, et leurs données sont supprimées après évaluation.
7. **Conséquence sur les agents.** Aucun agent certifié ne doit comporter de mécanisme destiné à détecter un évaluateur et à changer de comportement en conséquence.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; les éléments empiriques devront être réunis avant l'ouverture de la période de commentaires, conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Les plateformes doivent accepter les tests incognito et la création de comptes de test. Elles n'ont rien à développer, mais renoncent à savoir quand elles sont testées.

### Sur les déclinaisons

Les déclinaisons devront vérifier qu'elles ne prévoient pas de mode de détection d'un superviseur ou d'un agent de certification. La déclinaison CTF-ICF contient aujourd'hui un tel mécanisme (`declinations/ctf-icf/layers/entrypoint.md`, `declinations/ctf-icf/layers/KB-supervision.md`).

### Sur les agents assistants

CTF Test Plan doit produire des scénarios insérables dans un échange courant. CTF Robustness doit intégrer la détection de comportements différenciés en situation de test.

### Sur le dispositif de certification

Le consentement aux tests incognito devient une condition d'adhésion. Il faut en préciser la forme dans `certification-scheme/`.

## Alternatives envisagées

- **Tests uniquement déclarés** (situation actuelle) : plus simples, mais exposés au risque de comportement différencié.
- **Tests incognito sans consentement préalable** : plus robustes, mais juridiquement fragiles et contraires à l'esprit d'adhésion volontaire.
- **Tests incognito sur la seule base d'un échantillon d'échanges réels** : moins intrusifs, mais ne permettent pas de jouer les situations rares et critiques à la demande.

## Questions ouvertes

- Quelle proportion des tests doit être incognito ?
- Qui détient et opère les comptes de test : le consortium, des tiers mandatés, des superviseurs ?
- Comment traiter les conditions générales des plateformes qui interdisent les comptes automatisés ?
- Comment éviter que les comptes de test faussent les statistiques ou la facturation de la plateforme ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (brouillon).
