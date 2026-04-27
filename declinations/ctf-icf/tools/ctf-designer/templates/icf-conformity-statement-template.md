# Déclaration de conformité ICF
## [NOM-AGENT] — Document de conformité agentique

Agent : [NOM-AGENT]
Éditeur : [NOM-EDITEUR]
Méthode : [NOM-METHODE]
Version CTF : 1.0
Référentiel ICF : AI Coaching Framework and Standards V1.01 — 2024
Date : [DATE]
Produit par : CTF-Design

---

## Présentation

Ce document déclare la conformité de l'agent [NOM-AGENT] avec le référentiel ICF AI Coaching Framework and Standards V1.01 (2024), dans le périmètre de sa couche agentique — les règles de comportement, les protocoles de sécurité, le traitement des données en session et les droits des utilisateurs.

Il est destiné à être transmis à un auditeur ICF externe. Il est autonome — sa lecture ne nécessite pas de connaissance du Coaching Trust Framework.

---

## Architecture de conformité

L'agent [NOM-AGENT] est construit sur le Coaching Trust Framework (CTF) v1.0 — un socle de conformité ICF. Il est composé de trois couches :

**Couche 1 — Layers CTF (conformité ICF)**
Huit fichiers de règles comportementales couvrant les sections A à F du référentiel ICF. Ces fichiers sont invariants — identiques pour tous les agents CTF-compliant.

**Couche 2 — Méthode [NOM-METHODE]**
La logique de coaching propre à cet agent : accueil, phases, transitions, clôture, contexte de session.

**Couche 3 — Configuration**
Les variables de déploiement : éditeur, plateforme, ressources de crise locales, URLs.

---

## Couverture par section ICF

### Section A — Éthique & Identification

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| A.1.1 — Identification IA (Basic + Advanced) | ✅ Couverte | layers/KB-A-ethics.md §A.1.1 |
| A.1.2 — Limites contextuelles (5 contextes) | ✅ Couverte | layers/KB-A-ethics.md §A.1.2 |
| A.1.5 — Biais | ✅ Couverte | layers/KB-A-ethics.md §A.1.5 |
| A.1.6 — Transparence des données | ✅ Couverte | layers/KB-A-ethics.md §A.1.6 |
| A.1.7 — Consentement & droit de retrait | ✅ Couverte | layers/KB-A-ethics.md §A.1.7 |
| A.2.1 — Posture non-directive | ✅ Couverte | layers/KB-C-presence.md |

### Section B — Relation de coaching

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| B.3.1/B.3.2 — Accord d'intention | ✅ Couverte | layers/KB-B-agreements.md + methodology/ |
| B.3.3 — Accord de transition | ✅ Couverte | layers/KB-B-agreements.md + methodology/ |
| B.3.5 — Droit de retrait | ✅ Couverte | layers/KB-A-ethics.md §A.1.7 |
| B.4.1–B.4.4 — Confiance et sécurité | ✅ Couverte | layers/KB-B-agreements.md |
| B.4.5 — Protocole de dérivation sécurité | ✅ Couverte | layers/KB-safety.md |
| B.5.2–B.5.3 — Présence et dépendance | ✅ Couverte | layers/KB-B-agreements.md + KB-safety.md |

### Section C — Compétences

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| C.6.1–C.6.3 — Écoute active | ✅ Couverte | layers/KB-C-presence.md |
| C.7.1–C.7.4 — Questions puissantes | ✅ Couverte | layers/KB-C-presence.md |

### Section D — Processus

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| D.8.1–D.8.2 — Objectif de session | ✅ Couverte | methodology/ |
| D.8.3–D.8.6 — Réalité, obstacles, options, perspectives | ✅ Couverte | methodology/ |
| D.8.7 — Focus agenda utilisateur | ✅ Couverte | layers/KB-C-presence.md |
| D.9.1–D.9.3 — Engagement, rappel, pratique | ✅ Couverte | layers/KB-D-growth.md |
| D.9.4 — Clôture intentionnelle | ✅ Couverte | layers/KB-D-growth.md + methodology/ |
| D.9.5 — Bilan périodique | ✅ Couverte | layers/KB-D-growth.md |

### Section E — Évaluation

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| E.10.1 — Rapport de tests | ✅ Couverte | compliance/test-plan.md (scénarios) + transcripts/TX-*.md (séances jouées) + compliance/robustness-report.md (analyse) |
| E.10.2 — Mesure de satisfaction | ✅ Couverte | layers/KB-D-growth.md §Clôture |
| E.10.4 — Validation experts ICF PCC/MCC | ⚠️ Hors périmètre | Validation humaine — à planifier par l'éditeur |
| E.11.2 — Document pré-session | ✅ Produit | docs/pre-session.md |
| E.11.3 — Accessibilité WCAG 2.1 AA | 🔲 Intégrateur | Responsabilité intégrateur |

### Section F — Données

| Exigence | Couverture | Fichier |
|----------|------------|---------|
| F.12.1–F.12.3 — Architecture et accès | ✅ Couverte | layers/KB-F-data.md + config/ |
| F.12.4 — Politique de confidentialité | ✅ Produite | docs/privacy-policy.md |
| F.12.6 — Droit à l'effacement | ✅ Couverte | layers/KB-F-data.md + config/ |
| F.12.7 — Contact éditeur | ✅ Couverte | config/editorial.md |
| F.13.1–F.13.2 — Accessibilité | 🔲 Intégrateur | Responsabilité intégrateur |

---

## Limitations documentées

Ces limitations sont connues et documentées. Elles ne remettent pas en cause la conformité comportementale de l'agent — elles identifient les étapes restantes.

| Limitation | Nature | Responsabilité |
|------------|--------|---------------|
| E.10.4 — Validation par experts ICF PCC/MCC | Validation humaine irremplaçable | Éditeur |
| E.11.3 — Audit WCAG 2.1 AA | Audit d'interface | Intégrateur |
| F.13.1 — Technologies adaptatives | Documentation d'interface | Intégrateur |

---

## Étapes de certification restantes

1. Remplir `config/` et déployer l'agent
2. Utiliser CTF-Test-Plan pour produire le plan de tests
3. Conduire les tests utilisateurs selon le plan
4. Utiliser CTF-Robustness pour analyser les résultats
5. Utiliser CTF-Audit pour produire le rapport d'audit final
6. Planifier la validation par des experts ICF PCC/MCC (E.10.4)

---

*Déclaration de conformité produite par CTF-Design v1.0 · Coaching Trust Framework*
*Ce document est le point de départ de la certification — il est complété par le rapport CTF-Audit.*
