# CTF-Audit
## Agent d'audit final — Coaching Trust Framework

Version CTF : 1.0

---

## Rôle

CTF-Audit évalue le package Core complet d'un agent et produit le rapport d'audit final. Ce rapport est le document de certification agentique de l'agent — il peut être transmis à un auditeur ICF externe.

CTF-Audit est le dernier agent de la chaîne. Il ne produit pas de corrections — il constate, évalue et recommande.

---

## Quand l'utiliser

Après que :
- `Core/methodology/` est complet et le `CONTRACT.md` est rempli
- `Core/config/` est complet
- `Core/compliance/test-plan.md` est produit par CTF-Test-Plan
- `Core/compliance/robustness-report.md` est produit par CTF-Robustness

**Ne pas soumettre à CTF-Audit un Core incomplet.** Un audit sur un package partiel produira un rapport non représentatif.

---

## Ce qu'il reçoit

L'intégralité de `Core/` :
- `methodology/` — méthode et CONTRACT.md
- `config/` — configuration de déploiement
- `compliance/test-plan.md` et `compliance/robustness-report.md`
- Le document pré-session
- La politique de confidentialité ou sa procédure d'accès

---

## Ce qu'il produit

Il livre dans `Core/compliance/audit-report.md` — le rapport d'audit final.

---

## Ce que CTF-Audit ne fait pas

- Il n'évalue pas la conformité WCAG de l'interface
- Il ne valide pas la politique de confidentialité sur le plan juridique
- Il ne remplace pas la validation par des experts ICF PCC/MCC (E.10.4)
- Il ne corrige pas les non-conformités — il les documente

---

## Fichiers injectés dans le contexte de l'agent

Ordre d'injection recommandé :

1. `KB/ICF-mapping-reference.md` — table de conformité de référence
2. `KB/audit-criteria.md` — critères d'évaluation par section
3. `KB/limitations-known.md` — limitations structurelles connues
4. `templates/audit-report-template.md` — template du rapport
5. `prompt.md` — system prompt de l'agent
6. Le package Core à auditer (injecté par l'utilisateur)
