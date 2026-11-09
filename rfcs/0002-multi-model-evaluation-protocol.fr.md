# RFC 0002 : Protocole d'évaluation à plusieurs modèles

> **Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard.**

*Version anglaise : [0002-multi-model-evaluation-protocol.md](./0002-multi-model-evaluation-protocol.md).*

## En-tête

- **Numéro :** 0002
- **Titre :** Protocole d'évaluation à plusieurs modèles
- **Type :** Substantielle (« Substantive »)
- **Auteur :** Maxime Bui
- **Date de dépôt :** 2026-11-09
- **Période de commentaires publics :** [à fixer par le mainteneur à l'ouverture]
- **Statut :** Brouillon
- **Concerne :** Brique Garantir · CTF Audit · Méthodologie de validation · Gouvernance
- **Remplace :** —

## Résumé

Cette RFC propose que toute évaluation d'un agent dans le cadre du CTF soit conduite par plusieurs modèles d'IA distincts, avec arbitrage des désaccords, formulation de propositions soumises à objection, étalonnage régulier par des superviseurs humains et publication du taux d'accord. Les désaccords persistants alimentent l'évolution de la norme. Le protocole est versionné et validé par le consortium.

## Motivation

L'évaluation sera largement faite par des IA. Aujourd'hui, chaque agent assistant du CTF est un appel unique à un modèle (`tools/PIPELINE.md`), et le rapport d'audit d'un seul modèle peut tenir lieu de document de certification. Un seul regard, sans étalonnage, ne permet pas de faire confiance à celui qui évalue.

## Proposition détaillée

1. **Trois évaluateurs.** Chaque transcription est évaluée indépendamment par trois modèles distincts (de fournisseurs ou de familles différents), sur la même grille issue de la déclinaison.
2. **Un arbitre.** Un quatrième modèle examine les points de désaccord entre évaluateurs, motive sa décision et la consigne.
3. **Un proposant.** Un cinquième modèle formule, à partir des désaccords, des propositions (précision de la grille, nouveau cas, reformulation d'une exigence). Ces propositions sont soumises à objection des autres modèles puis des humains, selon une boucle de type sociocratique : une proposition est retenue s'il n'existe plus d'objection argumentée.
4. **Étalonnage humain.** Des superviseurs humains évaluent régulièrement un échantillon des mêmes transcriptions ; l'écart entre humains et modèles est mesuré et sert à recaler le protocole.
5. **Transparence.** Le taux d'accord entre évaluateurs, et entre modèles et humains, est publié pour chaque version du protocole.
6. **Évolution de la norme.** Les désaccords qui persistent après arbitrage sont versés au registre de preuves et peuvent fonder une RFC.
7. **Versionnage.** Le protocole (modèles, prompts, grille, seuils) porte un numéro de version. Toute nouvelle version est validée par le consortium avant usage.

## Éléments empiriques

Aucune entrée du registre de preuves (`validation/evidence-log.md`) n'est encore citée. Cette RFC est déposée comme **proposition de travail** issue de la [vision](../VISION.fr.md) ; les éléments empiriques devront être réunis avant l'ouverture de la période de commentaires, conformément à [`../validation/methodology.md`](../validation/methodology.md).

## Analyse d'impact

### Sur les adoptants

Aucun développement requis côté plateforme : le protocole est opéré par le consortium ou par des évaluateurs agréés. Le coût d'évaluation augmente (cinq appels de modèle au lieu d'un).

### Sur les déclinaisons

Les grilles d'évaluation des déclinaisons doivent être suffisamment explicites pour être appliquées de façon homogène par plusieurs modèles.

### Sur les agents assistants

CTF Audit devient l'un des rôles du protocole (évaluateur) et non plus l'évaluateur unique. Les rôles d'arbitre et de proposant sont à spécifier.

### Sur le dispositif de certification

Une certification ne peut s'appuyer que sur une évaluation menée selon une version validée du protocole.

## Alternatives envisagées

- **Un seul modèle** (situation actuelle) : simple et peu coûteux, mais sans mesure de fiabilité.
- **Vote majoritaire sans arbitre** : plus simple, mais perd la motivation des désaccords, qui sont précisément ce qui fait évoluer la norme.
- **Évaluation entièrement humaine** : fiable, mais impossible à l'échelle de tous les échanges.

## Questions ouvertes

- Comment garantir la diversité réelle des trois évaluateurs (fournisseurs, versions) ?
- Quelle fréquence et quelle taille pour l'étalonnage humain ?
- Quel taux d'accord minimal rend une évaluation recevable ?
- Le terme « score » est aujourd'hui écarté du vocabulaire du CTF : comment nommer le résultat d'une évaluation ?

## Commentaires publics

*À compléter pendant la période de commentaires publics. Pour commenter, voir [`../CONTRIBUTING.md`](../CONTRIBUTING.md).*

## Décision du mainteneur

*À compléter à l'issue de la période de commentaires.*

## Historique de cette RFC

- **2026-11-09** — Dépôt initial (brouillon).
