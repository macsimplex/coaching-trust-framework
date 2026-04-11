# Certification — Pipeline CTF
## Coaching Trust Framework — Agents de certification

Version CTF : 1.0

---

## Principe

Le CTF fournit cinq agents de certification qui forment une chaîne séquentielle. Chaque agent lit des documents en entrée et livre ses outputs dans le package Core de l'agent évalué.

Ces agents sont eux-mêmes des agents CTF-compliant — ils ont été conçus avec CTF-Design.

---

## La chaîne

```
CTF-Design     →  conçoit la méthode Core avec l'auteur
                  puis oriente vers CTF-Config en fin de démarche
                  livre dans Core/methodology/ + docs/ + compliance/

CTF-Config     →  collecte les variables de déploiement
                  utilisable seul pour reconfiguration
                  livre dans Core/config/

CTF-Test-Plan  →  lit Core/ complet
                  produit le plan de tests utilisateurs
                  livre dans Core/compliance/test-plan.md

                  [ tests utilisateurs conduits par l'éditeur ]

CTF-Robustness →  lit Core/compliance/test-plan.md + résultats de tests
                  analyse la robustesse comportementale
                  livre dans Core/compliance/robustness-report.md

CTF-Audit      →  lit Core/ complet (y compris compliance/)
                  produit le rapport d'audit final
                  livre dans Core/compliance/audit-report.md
```

---

## Ordre recommandé

1. **CTF-Design** — conception de la méthode Core avec l'auteur de l'agent
2. **CTF-Config** — appelé par CTF-Design en fin de démarche · produit `Core/config/`
3. Déploiement — l'intégrateur suit `injection-order.md` sur sa plateforme *(→ CTF-Deploy via API, évolution future)*
4. **CTF-Test-Plan** — après que `Core/` est complet
5. Tests utilisateurs — conduits par l'éditeur selon le plan *(→ CTF-Tester via API pour les scénarios déterministes, évolution future)*
6. **CTF-Robustness** — après réception des résultats de tests
7. **CTF-Audit** — en dernier, quand tout `Core/` est disponible

---

## Ce que contient chaque agent

| Agent | README | prompt.md | KB/ | templates/ |
|-------|--------|-----------|-----|------------|
| CTF-Config | Quand l'utiliser · inputs · outputs | System prompt | Règles de configuration · exigences ICF F | CONFIG-template.md · CONFIG-GUIDE.md |
| CTF-Design | Quand l'utiliser · CONTRACT | System prompt | ICF mapping · CONTRACT | methodology-template.md · pre-session-spec.md · privacy-policy-spec.md |
| CTF-Test-Plan | Quand l'utiliser · inputs | System prompt | Exigences ICF E.10 | test-plan-template.md |
| CTF-Robustness | Quand l'utiliser · inputs | System prompt | Méthodes d'analyse comportementale | robustness-report-template.md |
| CTF-Audit | Quand l'utiliser · inputs · livrables | System prompt | ICF mapping complet | audit-report-template.md |

---

## Ce que reçoit un auditeur externe

Un auditeur ICF externe reçoit uniquement `Core/` — il n'a pas besoin du CTF (public et identique pour tous les agents qui en sont issus).

`Core/` contient :
- La méthode de l'agent
- La configuration de déploiement
- Le plan de tests utilisateurs
- Le rapport de robustesse
- Le rapport d'audit final

---

## Limites de ces agents

Les agents de certification CTF couvrent la conformité **agentique** — les règles de comportement, les protocoles, les données. Ils ne couvrent pas :

- La validation par des experts ICF PCC/MCC (E.10.4) — humaine, à planifier par l'éditeur
- L'audit d'accessibilité WCAG 2.1 AA (E.11.3) — responsabilité intégrateur
- La conformité juridique de la politique de confidentialité — à valider par un juriste

Ces limitations sont documentées dans KB-E §E.10.1 / E.10.4 et dans Core/compliance/audit-report.md.
