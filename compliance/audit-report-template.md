# Rapport d'audit CTF
## Template — produit par CTF-Audit

Agent évalué : [NOM_AGENT]
Version Core : [VERSION]
Version CTF référencée : 1.0
Date de l'audit : [DATE]
Produit par : CTF-Audit

---

## Déclaration d'audit

Cet audit évalue la conformité de l'agent [NOM_AGENT] avec le Coaching Trust Framework v1.0 et le référentiel ICF AI Coaching Framework and Standards V1.01 — 2024.

L'audit porte sur la couche agentique du service : les règles de comportement, les protocoles, le traitement des données en session et les droits des utilisateurs. La conformité de l'interface utilisateur (front-end) et la validation par des experts ICF PCC/MCC sont hors périmètre de cet audit automatisé.

---

## Documents examinés

| Document | Présent | Version |
|----------|---------|---------|
| Core/methodology/ | | |
| Core/methodology/CONTRACT.md (déclaration de conformité) | | |
| Core/config/platform.md | | |
| Core/config/editorial.md | | |
| Core/config/localization.md | | |
| Core/compliance/test-plan.md | | |
| Core/compliance/robustness-report.md | | |
| Document pré-session | | |
| Politique de confidentialité (ou procédure d'accès) | | |

---

## Résultats par section ICF

### Section A — Éthique & Identification

| Exigence | Couverture CTF | Couverture Core | Statut |
|----------|----------------|-----------------|--------|
| A.1.1 Basic | KB-A §A.1.1 | — | |
| A.1.1 Advanced | KB-A §A.1.1 | — | |
| A.1.2 Basic | KB-A §A.1.2 | — | |
| A.1.2 Advanced | KB-A §A.1.2 | — | |
| A.1.5 Basic | KB-A §A.1.5 | — | |
| A.1.6 Basic | KB-A §A.1.6 | — | |
| A.1.7 Basic | KB-A §A.1.7 | — | |

### Section B — Relation de coaching

| Exigence | Couverture CTF | Couverture Core | Statut |
|----------|----------------|-----------------|--------|
| B.3.1 / B.3.2 | KB-B §B.3 | Core accueil | |
| B.3.3 | KB-B §B.3.3 | Core transitions | |
| B.3.5 | KB-B §B.3.5 | — | |
| B.4.1–B.4.4 | KB-B §B.4 | — | |
| B.4.5 | KB-safety §B.4.5 | — | |
| B.5.2–B.5.3 | KB-B §B.5 · KB-safety | — | |

### Section C — Compétences

| Exigence | Couverture CTF | Couverture Core | Statut |
|----------|----------------|-----------------|--------|
| C.6.1–C.6.3 | KB-C §Écoute | — | |
| C.7.1–C.7.4 | KB-C §Questions | — | |

### Section D — Processus

| Exigence | Couverture CTF | Couverture Core | Statut |
|----------|----------------|-----------------|--------|
| D.8.1–D.8.2 | KB-D | Core | |
| D.8.3–D.8.6 | — | Core | |
| D.8.7 | KB-C §Posture | — | |
| D.9.1–D.9.5 | KB-D | Core + Config | |

### Section E — Évaluation

| Exigence | Couverture CTF | Couverture Core | Statut |
|----------|----------------|-----------------|--------|
| E.10.1 — Rapport de tests | KB-E | Core/compliance | |
| E.10.2 — Satisfaction | KB-E · KB-D | — | |
| E.10.4 — Validation experts ICF | — | — | ⚠️ Hors périmètre |
| E.11.2 — Document pré-session | KB-E | Core/ | |
| E.11.3 — Accessibilité | — | — | 🔲 Intégrateur |

### Section F — Données

| Exigence | Couverture CTF | Couverture Config | Statut |
|----------|----------------|-------------------|--------|
| F.12.1–F.12.3 | KB-F | Config platform + editorial | |
| F.12.4–F.12.7 | KB-F | Config editorial | |
| F.13.1–F.13.2 | — | — | 🔲 Intégrateur |

---

## Vérification du CONTRACT.md

| Exigence du contrat | Satisfaite | Référence dans Core | Notes |
|--------------------|------------|---------------------|-------|
| 1. Phase d'accueil | | | |
| 2. Structure de session | | | |
| 3. Protocole de clôture | | | |
| 4. Contexte de session | | | |
| 5. Compatibilité gates CTF | | | |
| 6. Variables de configuration déclarées | | | |

---

## Vérification de la Configuration

| Variable | Renseignée | Cohérente | Notes |
|----------|------------|-----------|-------|
| NOM_AGENT | | | |
| NOM_EDITEUR | | | |
| CONTACT_EDITEUR | | | |
| URL_CONFIDENTIALITE | | | |
| URL_COACH_HUMAIN | | | |
| PLATEFORME | | | |
| LLM | | | |
| RESSOURCES_CRISE | | | |
| EFFACEMENT_NATIF + PROCEDURE_EFFACEMENT | | | |

---

## Synthèse des résultats de robustesse

*Reprendre les conclusions de Core/compliance/robustness-report.md :*

Taux de conformité comportementale : [X]%
Scénarios critiques : [N conformes] / [N total]
Obligations inconditionnelles : [Conformes / Non conformes]

---

## Limitations documentées

| Limitation | Nature | État |
|------------|--------|------|
| E.10.4 — Validation experts ICF PCC/MCC | Humaine | À planifier par l'éditeur |
| E.11.3 — Audit accessibilité WCAG | Interface | Responsabilité intégrateur |
| F.13.1–F.13.2 — Accessibilité | Interface | Responsabilité intégrateur |
| [Limitations spécifiques à cet agent] | | |

---

## Conclusion d'audit

### Conformité agentique

**Couverture ICF (périmètre agent) :** [X]%
**Obligations inconditionnelles :** [Conformes / Non conformes]
**CONTRACT.md :** [Satisfait / Partiellement satisfait / Non satisfait]
**Configuration :** [Complète / Incomplète]

### Recommandation

☐ **Conforme — prêt pour soumission ICF**
L'agent [NOM_AGENT] satisfait les exigences CTF v1.0 dans son périmètre agentique. Les limitations documentées sont connues et hors périmètre agent.

☐ **Corrections mineures requises**
L'agent [NOM_AGENT] satisfait l'essentiel des exigences CTF. Les corrections suivantes sont requises avant soumission : [liste].

☐ **Corrections majeures requises**
L'agent [NOM_AGENT] présente des non-conformités critiques nécessitant une révision significative avant toute soumission.

---

### Points d'attention pour l'éditeur

*Éléments hors périmètre de cet audit que l'éditeur doit traiter :*

1. **E.10.4** — Organiser la validation par 2-3 experts ICF PCC/MCC.
2. **E.11.3** — Conduire un audit WCAG 2.1 AA de l'interface.
3. [Points spécifiques à cet agent]

---

*Rapport produit par CTF-Audit v1.0 · Coaching Trust Framework*
*Ce rapport constitue le document de certification agentique de l'agent [NOM_AGENT].*
*Il ne remplace pas la validation humaine par des experts ICF PCC/MCC (E.10.4).*
