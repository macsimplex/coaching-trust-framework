# KB — Limitations structurelles connues
## CTF-Audit — Knowledge Base

Version CTF : 1.0

---

> Ce fichier liste les limitations que tout audit CTF doit documenter systématiquement.
> Elles sont structurelles — elles s'appliquent à tous les agents CTF-compliant,
> indépendamment de la qualité de leur implémentation.
> Les documenter n'est pas un aveu de faiblesse — c'est une exigence de transparence ICF.

---

## Limitations hors périmètre agent

### E.10.4 — Validation par experts ICF PCC/MCC

**Nature :** validation humaine — ne peut pas être conduite par un agent automatisé.

**Exigence ICF :** le système doit être validé par 2 à 3 experts ICF de niveau PCC ou MCC avant commercialisation.

**Formulation standard dans le rapport d'audit :**
> « La validation par des experts ICF PCC/MCC (E.10.4) est hors périmètre de cet audit automatisé. Elle constitue une étape de validation humaine irremplaçable. L'éditeur est responsable de son organisation et de sa documentation. »

**Impact sur la recommandation :** cette limitation ne bloque pas la recommandation "Conforme" — elle doit figurer dans la section "Points d'attention pour l'éditeur".

---

### E.11.3 — Audit d'accessibilité WCAG 2.1 AA

**Nature :** audit d'interface — relève de l'intégrateur, pas de l'agent.

**Formulation standard :**
> « L'audit d'accessibilité WCAG 2.1 AA (E.11.3) porte sur l'interface utilisateur — hors périmètre agentique. Il relève de l'intégrateur. Son statut est documenté dans Core/config/platform.md. »

---

### F.13.1 — Technologies adaptatives

**Nature :** documentation d'interface — responsabilité intégrateur.

**Formulation standard :**
> « La documentation des technologies adaptatives supportées (F.13.1) est de la responsabilité de l'intégrateur. Elle est renseignée dans Core/config/platform.md. »

---

### F.12.5 — Minimisation des données

**Nature :** conformité RGPD de l'infrastructure — hors comportement agent.

**Formulation standard :**
> « La minimisation des données collectées (F.12.5 / RGPD) relève de l'architecture de la plateforme — hors périmètre agentique. Elle est de la responsabilité de l'intégrateur. »

---

### E.10.3 — Rapport d'efficacité agrégé

**Nature :** collecte et publication de données agrégées — hors périmètre agent.

**Formulation standard :**
> « Le rapport d'efficacité trimestriel (E.10.3) requiert une agrégation de données entre utilisateurs — fonctionnalité hors périmètre de l'agent conversationnel. Elle relève de l'éditeur ou de la plateforme. »

---

## Limitations potentiellement spécifiques à un agent

Ces limitations peuvent apparaître selon l'implémentation. Elles ne sont pas universelles mais doivent être documentées si elles s'appliquent :

### Droit à l'effacement non natif

Si `EFFACEMENT_NATIF = non` dans Configuration :
> « Le droit à l'effacement (F.12.6 / RGPD Art. 17) n'est pas disponible nativement dans l'interface. Une procédure manuelle est documentée dans Core/config/editorial.md. Cette limitation est connue et communiquée honnêtement aux utilisateurs. »

### Politique de confidentialité non publiée

Si `URL_CONFIDENTIALITE` est vide ou référence une procédure d'accès :
> « La politique de confidentialité n'est pas encore accessible publiquement via URL. La procédure d'accès est : [procédure documentée]. Cette situation doit être résolue avant tout déploiement public. »

### Historique non persistant

Si `HISTORIQUE_PERSISTANT = non` dans Configuration :
> « La plateforme ne conserve pas d'historique conversationnel persistant. Les exigences D.9.2 (rappel des engagements précédents) et KB-D (suivi inter-sessions) ne peuvent pas être satisfaites dans leur intégralité. Cette limitation est structurelle et doit être documentée dans le rapport d'audit. »

---

## Formulation de clôture des limitations dans le rapport

Chaque rapport d'audit se termine par une section "Limitations documentées" qui liste toutes les limitations applicables avec leur statut et la formulation standard.

Cette section est lisible par un auditeur externe sans connaissance du CTF.
