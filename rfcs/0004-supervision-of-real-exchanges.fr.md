# RFC 0004 : Supervision des échanges réels

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise : [0004-supervision-of-real-exchanges.md](./0004-supervision-of-real-exchanges.md).*

## En-tête

- **Numéro :** 0004
- **Titre :** Supervision des échanges réels
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** [à fixer par le mainteneur à l'ouverture]
- **Statut :** Brouillon
- **Concerne :** Brique Surveiller · Document normatif · CTF Audit · Dispositif de certification
- **Remplace :** —

## Résumé

Cette RFC propose que l'évaluation des agents s'exécute chez la plateforme, sur la totalité des échanges réels. Seuls sortent de la plateforme les résultats d'évaluation, les alertes et des extraits anonymisés. L'accès humain aux échanges est minimal et tracé. Elle précise les obligations de la plateforme et des clients finaux, et prévoit des modèles de documents RGPD.

## Motivation

Puisqu'un agent dérive, il faut l'observer en continu, sur ses échanges réels et pas seulement sur des échantillons choisis. Aujourd'hui, CTF Audit travaille sur un échantillon de transcriptions choisi et anonymisé par la plateforme (`tools/ctf-audit/README.md`), ou sur les seuls artefacts de test (`tools/ctf-audit/system-prompt.md`). Une transcription choisie par celui qui est évalué ne prouve rien.

## Proposition détaillée

1. **Évaluation sur place.** Le protocole d'évaluation (RFC 0002) s'exécute dans l'infrastructure de la plateforme, ou dans un environnement qu'elle contrôle, sur tous les échanges.
2. **Ce qui sort.** Seuls quittent la plateforme : les résultats d'évaluation agrégés, les alertes, et des extraits anonymisés nécessaires à l'étalonnage et à l'examen des alertes.
3. **Accès humain.** L'accès humain à un échange est l'exception : il est motivé, limité au strict nécessaire, et tracé dans un journal consultable par le consortium.
4. **Obligations de la plateforme.** Anonymiser les données avant toute sortie ; installer et maintenir l'environnement d'évaluation ; conserver le journal des accès ; informer les clients finaux.
5. **Obligations et droits des clients finaux.** Les clients finaux consentent au partage encadré des transcriptions anonymisées ; ils sont informés de la finalité, de la durée de conservation et de leurs droits.
6. **Documents RGPD.** Le CTF fournit des modèles : analyse d'impact relative à la protection des données (AIPD), clause de consentement, registre des traitements, accord de traitement entre la plateforme et le consortium.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; les éléments empiriques devront être réunis avant l'ouverture de la période de commentaires, conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Charge significative : intégrer un environnement d'évaluation, une chaîne d'anonymisation et un recueil de consentement. Les modèles de documents RGPD réduisent la charge juridique.

### Sur les déclinaisons

Les déclinaisons peuvent préciser les situations qui déclenchent une alerte propre à leur tradition.

### Sur les agents assistants

CTF Audit doit pouvoir traiter des flux d'échanges réels et non plus seulement des lots ou des artefacts de test. La contradiction actuelle entre le README et le prompt système de CTF Audit doit être levée.

### Sur le dispositif de certification

L'adhésion implique d'accepter la supervision de tous les échanges. La simple information des personnes (`document/ctf-v1.0.md`) devient un consentement.

## Alternatives envisagées

- **Audit sur échantillon choisi par la plateforme** (situation actuelle) : léger, mais sans valeur probante.
- **Export de tous les échanges vers le consortium** : plus simple à contrôler, mais inacceptable pour la confidentialité.
- **Échantillon tiré au sort par le consortium** : compromis possible, mais ne détecte pas les dérives rares.

## Questions ouvertes

- Quelle architecture technique de référence pour l'évaluation sur place ?
- Quel standard d'anonymisation pour les extraits qui sortent ?
- Que faire lorsqu'un client final refuse le consentement : l'échange est-il exclu de l'évaluation ou l'accès au service refusé ?
- Le terme « score » utilisé dans la vision est aujourd'hui écarté du vocabulaire du CTF : faut-il le réintroduire ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (brouillon).
