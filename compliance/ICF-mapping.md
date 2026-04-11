# ICF Mapping — Table de conformité CTF
## Coaching Trust Framework — Compliance

Référentiel : ICF AI Coaching Framework and Standards V1.01 — 2024
Version CTF : 1.0

---

> Ce document est la table de traçabilité entre les exigences ICF et leur implémentation dans les layers CTF.
> Il est utilisé par CTF-Audit pour évaluer la couverture de conformité d'un agent.
> Les colonnes "Statut Core" et "Statut Config" sont remplies par CTF-Audit lors de l'évaluation d'un agent spécifique.

---

## Légende

| Statut | Signification |
|--------|--------------|
| ✅ Couvert | Implémenté dans le layer indiqué |
| ⚙️ Partiel | Couvert dans le layer, complété par Core ou Config |
| 📋 Documentaire | Exigence documentaire — hors comportement agent |
| 🔲 Intégrateur | Responsabilité intégrateur — hors périmètre agent |
| ❌ Non couvert | À implémenter |

---

## Section A — Éthique & Fondements

### A.1 — Transparence et honnêteté

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| A.1.1 Basic | Indiquer que le système n'est pas humain avant tout service de coaching | KB-A | §A.1.1 Contexte 1 | ✅ | — | — |
| A.1.1 Advanced | Indiquer que le système n'est pas humain au moins une fois par session | KB-A | §A.1.1 Contexte 2 | ✅ | — | — |
| A.1.2 Basic | Communiquer les limites du système | KB-A | §A.1.2 (5 contextes) | ✅ | — | — |
| A.1.2 Advanced | Adapter la communication des limites au contexte | KB-A | §A.1.2 F1/F2 par contexte | ✅ | — | — |
| A.1.3 | Ne pas usurper une identité humaine | KB-A | §A.1.1 | ✅ | — | — |
| A.1.4 | Précision des informations fournies | entrypoint | §LIMITES | ✅ | — | — |
| A.1.5 Basic | Identifier et mitiger les biais | KB-A | §A.1.5 | ✅ | — | — |
| A.1.6 Basic | Transparence sur le traitement des données | KB-A | §A.1.6 · KB-F | §F.12.1 | ✅ | — | — |
| A.1.7 Basic | Consentement avant tout coaching | KB-A | §A.1.7 | ✅ | — | — |
| A.1.7 / B.3.5 | Droit de retrait à tout moment | KB-A | §A.1.7 F3 | ✅ | — | — |

### A.2 — Posture de coaching

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| A.2.1 Basic | Posture non-directive par défaut | KB-C | §Posture fondamentale | ✅ | — | — |
| A.2.1 Advanced | Adapter la directivité selon la science du coaching | KB-C | §Posture fondamentale | ✅ | ⚙️ Core | — |

---

## Section B — Relation de coaching

### B.3 — Accords

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| B.3.1 | Établir un accord sur l'objectif de la session | KB-B | §B.3.1/B.3.2 | ✅ | ⚙️ Core | — |
| B.3.2 | Établir un accord sur le processus | KB-B | §B.3.1/B.3.2 | ✅ | ⚙️ Core | — |
| B.3.3 | Accord explicite avant chaque transition | KB-B | §B.3.3 | ✅ | ⚙️ Core | — |
| B.3.5 | Droit de retrait communiqué | KB-B | §B.3.5 · KB-A §A.1.7 | ✅ | — | — |

### B.4 — Confiance et sécurité

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| B.4.1 | Informer sur la conception du système | KB-B | §B.4.1 | ✅ | ⚙️ Core | — |
| B.4.2 | Dialogue inclusif et non-discriminatoire | KB-B | §B.4.2 | ✅ | — | — |
| B.4.3 | Préciser la spécificité du domaine | KB-B | §B.4.3 | ✅ | ⚙️ Core | — |
| B.4.4 | Référencer un coach humain | KB-B | §B.4.4 | ✅ | — | Config |
| B.4.5 | Protocole de dérivation sécurité | KB-safety | §Protocole B.4.5 | ✅ | — | — |

### B.5 — Présence

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| B.5.2 | Nature de la relation claire | KB-B | §B.5.2 | ✅ | — | — |
| B.5.3 | Détecter et répondre aux signaux émotionnels | KB-safety | §Taxonomie · §Règle d'interaction | ✅ | — | — |

---

## Section C — Compétences de coaching

### C.6 — Écoute active

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| C.6.1 | Écouter et comprendre l'utilisateur | KB-C | §Écoute active | ✅ | — | — |
| C.6.2 | Refléter et paraphraser | KB-C | §Écoute active — Paraphrase | ✅ | — | — |
| C.6.3 | Détecter les patterns et thèmes | KB-C | §Écoute active — Nommer les patterns | ✅ | — | — |

### C.7 — Questions puissantes

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| C.7.1 | Questions ouvertes et exploratoires | KB-C | §Questions puissantes | ✅ | — | — |
| C.7.2 | Variété des stimuli | KB-C | §Questions puissantes — Variété | ✅ | — | — |
| C.7.3 | Questions non-orientées | KB-C | §Questions puissantes | ✅ | — | — |
| C.7.4 | Connecter aux valeurs et objectifs à long terme | KB-C | §Questions puissantes — Vision | ✅ | — | — |

---

## Section D — Processus de coaching

### D.8 — Objectifs et réalité

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| D.8.1 | Établir un objectif de session | KB-D | §Engagement | ⚙️ | ✅ Core | — |
| D.8.2 | Clarifier et valider l'objectif | KB-D | §Suivi inter-sessions | ⚙️ | ✅ Core | — |
| D.8.3 | Explorer la réalité actuelle | — | — | — | ✅ Core | — |
| D.8.4 | Identifier les obstacles et ressources | — | — | — | ✅ Core | — |
| D.8.5 | Explorer les options | — | — | — | ✅ Core | — |
| D.8.6 | Générer de nouvelles perspectives | — | — | — | ✅ Core | — |
| D.8.7 | Maintenir le focus sur l'agenda utilisateur | KB-C | §Posture fondamentale | ✅ | — | — |

### D.9 — Engagement et croissance

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| D.9.1 | Engagement concret et daté | KB-D | §Engagement | ✅ | ⚙️ Core | — |
| D.9.2 | Rappel des engagements précédents | KB-D | §D.9.2 | ✅ | — | — |
| D.9.3 | Rappels de pratique inter-sessions | KB-D | §D.9.3 | ✅ | — | — |
| D.9.4 | Clôture de session intentionnelle | KB-D | §Clôture | ✅ | ⚙️ Core | — |
| D.9.5 | Bilan périodique | KB-D | §Bilan périodique | ✅ | — | Config |

---

## Section E — Évaluation

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| E.10.1 | Rapport de tests utilisateurs formel | KB-E | §E.10.1 | 📋 | ✅ Core/compliance | — |
| E.10.2 | Mesure de satisfaction et d'efficacité | KB-E | §E.10.2 · KB-D §Clôture | ✅ | — | — |
| E.10.3 | Rapport d'efficacité agrégé | KB-E | §E.10.2 | 📋 | — | Éditeur |
| E.10.4 | Validation par experts ICF PCC/MCC | KB-E | §E.10.4 | 📋 | — | Éditeur |
| E.11.1 | Documentation de la méthode | — | — | — | ✅ Core | — |
| E.11.2 | Document pré-session utilisateur | KB-E | §E.11.2 | 📋 | ✅ Core | — |
| E.11.3 | Accessibilité WCAG 2.1 AA | KB-E | §E.11.3 | 🔲 | — | Intégrateur |

---

## Section F — Données et accessibilité

### F.12 — Données

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| F.12.1 | Architecture de traitement transparente | KB-F | §F.12.1 | ⚙️ | — | ✅ Config |
| F.12.2 | Informer sur ce que le système retient | KB-F | §F.12.2 | ⚙️ | — | ✅ Config |
| F.12.3 | Informer sur les accès tiers | KB-F | §F.12.3 | ⚙️ | — | ✅ Config |
| F.12.4 | Politique de confidentialité accessible | KB-F | §F.12.7 | ⚙️ | ✅ Core | ✅ Config |
| F.12.5 | Minimisation des données collectées | KB-F | — | 📋 | — | Intégrateur |
| F.12.6 | Droit à l'effacement | KB-F | §F.12.6 | ⚙️ | — | ✅ Config |
| F.12.7 | Contact éditeur accessible | KB-F | §F.12.7 | ⚙️ | — | ✅ Config |

### F.13 — Accessibilité

| Référence | Exigence | Layer CTF | Section | Statut CTF | Statut Core | Statut Config |
|-----------|----------|-----------|---------|------------|-------------|---------------|
| F.13.1 | Technologies adaptatives documentées | KB-F | §F.13.1 | 🔲 | — | Intégrateur |
| F.13.2 | Interface accessible (contraste, navigation) | KB-F | §F.13.2 | 🔲 | — | Intégrateur |

---

## Synthèse de couverture

| Section ICF | Total exigences | Couvertes CTF | Core requis | Config requis | Documentaires | Intégrateur |
|-------------|----------------|---------------|-------------|---------------|---------------|-------------|
| A — Éthique | 12 | 12 | 2 | 0 | 0 | 0 |
| B — Relation | 10 | 10 | 3 | 1 | 0 | 0 |
| C — Compétences | 7 | 7 | 0 | 0 | 0 | 0 |
| D — Processus | 12 | 8 | 9 | 1 | 0 | 0 |
| E — Évaluation | 7 | 2 | 3 | 0 | 4 | 1 |
| F — Données | 9 | 0 | 2 | 7 | 1 | 3 |
| **Total** | **57** | **39** | **19** | **9** | **5** | **4** |

**Couverture CTF seul (layers) :** ~68%
**Couverture CTF + Core + Config :** ~91%
**Hors périmètre agent (documentaire + intégrateur) :** ~9%

---

*Ce mapping est mis à jour à chaque révision du référentiel ICF ou de la version CTF.*
*Les colonnes "Statut Core" et "Statut Config" sont complétées par CTF-Audit lors de l'évaluation d'un agent spécifique.*
