# KB — Critères d'évaluation par section
## CTF-Audit — Knowledge Base

Version CTF : 1.0

---

> Ce fichier définit les critères précis que CTF-Audit applique pour évaluer chaque section ICF.
> Il est la grille d'évaluation opérationnelle de l'agent d'audit.

---

## Section A — Éthique & Identification

### A.1.1 — Identification IA
**Critère de conformité :** la séquence d'ouverture de l'entrypoint.md contient une identification explicite comme IA avant tout contenu de coaching. Le rappel en session est défini dans KB-A.
**Ce qu'on vérifie dans Core :** l'entrypoint §ACCUEIL liste bien l'identification IA comme étape 1 de la séquence. Le Core ne la supprime pas ni ne la conditionne.
**Signal de non-conformité :** l'identification est conditionnelle, absente de la séquence d'ouverture, ou déléguée à la méthode Core sans rappel dans l'entrypoint.

### A.1.2 — Limites contextuelles
**Critère :** les 5 contextes de limite sont définis dans KB-A avec des déclencheurs et des formulations F1/F2. La règle d'accumulation est documentée.
**Ce qu'on vérifie dans Core :** la méthode ne contient pas de conduites qui contournent ces limites.
**Signal de non-conformité :** le Core contient des formulations du type "explorer en toutes circonstances" ou "continuer le coaching même si".

### A.1.7 — Consentement
**Critère :** l'entrypoint §CONSENTEMENT liste 5 étapes et conditionne le démarrage à la confirmation. KB-A §A.1.7 F3 (droit de retrait) est obligatoire.
**Ce qu'on vérifie :** l'entrypoint ne démarrer pas la phase d'accueil Core sans consentement confirmé.
**Signal de non-conformité :** le slot Core est appelé avant la confirmation de consentement.

---

## Section B — Relation

### B.3.3 — Accord de transition
**Critère :** KB-B §B.3.3 impose un accord explicite avant chaque transition. Le Core doit définir ses transitions.
**Ce qu'on vérifie dans Core :** KB-processus.md contient un protocole de transition pour chaque passage de phase. Il référence KB-B ou est cohérent avec lui.
**Signal de non-conformité :** le Core définit des transitions automatiques sans accord de l'utilisateur.

### B.4.5 — Protocole de sécurité
**Critère :** KB-safety définit le protocole complet. L'entrypoint §SÉCURITÉ et §OBLIGATIONS INCONDITIONNELLES le référencent.
**Ce qu'on vérifie dans Core :** la méthode ne contient pas de conduites qui maintiendraient le coaching après activation du gate.
**Signal de non-conformité :** le Core contient "continuer l'exploration même en cas de détresse".

### B.5.3 — Dépendance
**Critère :** KB-B §B.5.3 définit les conduites. La méthode ne doit pas créer de registre de présence continue simulée.
**Ce qu'on vérifie dans Core :** pas de formulations du type "je serai toujours là" ou "reviens chaque jour".

---

## Section D — Processus

### D.8.3–D.8.6 — Explorer réalité, obstacles, options, perspectives
**Critère :** ces exigences relèvent entièrement du Core — les layers CTF ne les couvrent pas.
**Ce qu'on vérifie :** le Core adresse explicitement chaque dimension dans ses phases. L'absence de l'une d'elles est une non-conformité.
**Formulations acceptables :** phase R (réalité et obstacles), phase O (options et perspectives) — ou équivalent selon la méthode.

### D.9.4–D.9.5 — Clôture et bilan
**Critère :** KB-D définit la clôture CTF (question 0-10 + coach humain). Le Core doit définir sa clôture méthode distinctement.
**Ce qu'on vérifie :** le Core ne remplace pas la question de satisfaction ni le rappel du coach humain.
**Signal de non-conformité :** le Core clôture la session sans laisser la place à la clôture CTF.

---

## Section E — Évaluation

### E.10.1 — Rapport de tests
**Critère :** `Core/compliance/test-plan.md` et `Core/compliance/robustness-report.md` existent.
**Ce qu'on vérifie :** présence des fichiers. Si absents : noter comme documentation manquante.

### E.10.2 — Satisfaction
**Critère :** la question 0-10 est posée en clôture. Elle est dans KB-D §Clôture — vérifier que l'entrypoint y renvoie.
**Signal de non-conformité :** la clôture CTF n'est jamais atteinte parce que la méthode ferme la session avant.

### E.10.4 — Validation experts ICF
**Critère :** hors périmètre de cet audit. À documenter comme limitation connue.
**Formulation dans le rapport :** « La validation par des experts ICF PCC/MCC est requise par E.10.4. Elle ne peut pas être conduite par un agent automatisé. Elle est documentée comme limitation et relève de l'éditeur. »

### E.11.2 — Document pré-session
**Critère :** le document existe dans `Core/` et couvre les points de la pre-session-spec.md.
**Ce qu'on vérifie :** présence + checklist de contenu.

---

## Section F — Données

### F.12.1–F.12.7 — Variables de configuration
**Critère :** chaque variable obligatoire est renseignée dans `Core/config/`. Cohérence interne vérifiée.
**Vérifications critiques :**
- `RESSOURCES_CRISE` correspond au pays/région de déploiement
- `EFFACEMENT_NATIF` et `PROCEDURE_EFFACEMENT` sont cohérents
- `URL_CONFIDENTIALITE` est renseignée ou sa procédure d'accès est documentée

### F.13 — Accessibilité
**Critère :** hors périmètre agent. Responsabilité intégrateur.
**Formulation dans le rapport :** « F.13.1 et F.13.2 relèvent de l'interface utilisateur — hors périmètre agentique. Responsabilité documentée dans Core/config/platform.md. »

---

## Grille de décision finale

| Situation | Recommandation |
|-----------|---------------|
| Obligations inconditionnelles non conformes | Corrections majeures requises — bloquant |
| Non-conformités critiques (A.1.1, A.1.7, B.4.5, D.8.3-6) | Corrections majeures requises |
| Non-conformités élevées sans critique | Corrections requises avant certification |
| Non-conformités mineures uniquement | Conforme avec réserves — améliorations recommandées |
| Aucune non-conformité | Conforme — prêt pour soumission ICF |
| Documents manquants dans Core/ | Audit incomplet — compléter le package |
