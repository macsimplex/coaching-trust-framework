# Ordre d'injection — [NOM-AGENT]
## Guide d'intégration plateforme

Agent : [NOM-AGENT]
Version : [VERSION]
Version CTF référencée : 1.0
Produit par : CTF-Design

---

> **À l'intégrateur**
>
> Ce fichier liste dans l'ordre exact les fichiers à injecter dans le contexte de l'agent sur votre plateforme.
> Injectez-les dans cet ordre — l'ordre est fonctionnel, pas arbitraire.
> Ne modifiez pas les fichiers `layers/` — ils sont invariants.
> Les fichiers `config/` doivent être remplis avant déploiement (voir `config/editorial.md`).

---

## Ordre d'injection

### 1. Couches de conformité ICF (layers/)

Ces fichiers définissent le comportement éthique, la posture, la sécurité et la gestion des données de l'agent. Ils sont fournis par le CTF et ne doivent pas être modifiés.

| Ordre | Fichier | Rôle |
|-------|---------|------|
| 1 | `layers/KB-A-ethics.md` | Identification IA · limites · consentement · biais |
| 2 | `layers/KB-B-agreements.md` | Accords · confiance · sécurité relationnelle |
| 3 | `layers/KB-C-presence.md` | Posture · écoute · questions · trajectoire |
| 4 | `layers/KB-D-growth.md` | Engagement · suivi · bilan · clôture |
| 5 | `layers/KB-E-evaluation.md` | Satisfaction · efficacité · documentation |
| 6 | `layers/KB-F-data.md` | Données · RGPD · droits utilisateurs |
| 7 | `layers/KB-safety.md` | Sécurité · gates · obligations inconditionnelles |
| 8 | `layers/KB-supervision.md` | Mode supervision · auto-réflexivité |

### 2. Méthode de coaching (methodology/)

Ces fichiers définissent la logique de coaching propre à cet agent.

| Ordre | Fichier | Rôle |
|-------|---------|------|
| 9 | `methodology/[FICHIER-ACCUEIL]` | Phase d'accueil |
| 10 | `methodology/[FICHIER-PROCESSUS]` | Phases et transitions |
| 11 | `methodology/[FICHIER-CLOTURE]` | Protocole de clôture méthode |
| 12 | `methodology/[FICHIER-CONTEXTE]` | Éléments de contexte de session |

### 3. Configuration (config/)

Ces fichiers fournissent les variables de déploiement — éditeur, plateforme, ressources.

| Ordre | Fichier | Rôle |
|-------|---------|------|
| 13 | `config/editorial.md` | Éditeur · contact · URLs |
| 14 | `config/platform.md` | Plateforme · LLM · historique |
| 15 | `config/localization.md` | Langue · ressources de crise |

### 4. Point d'entrée (en dernier — obligatoire)

| Ordre | Fichier | Rôle |
|-------|---------|------|
| 16 | `layers/entrypoint.md` | Orchestration CTF + appel du slot méthode |

---

## Avant de déployer

- [ ] Tous les fichiers `config/` sont remplis (aucun placeholder `[...]` restant)
- [ ] `config/localization.md` — `RESSOURCES_CRISE` correspond au pays de déploiement
- [ ] `docs/pre-session.md` est accessible depuis l'interface utilisateur
- [ ] `docs/privacy-policy.md` est accessible depuis l'interface utilisateur
- [ ] L'ordre d'injection ci-dessus est respecté sur la plateforme

---

## Documents publics à publier

Ces fichiers sont dans `docs/` — ils doivent être accessibles aux utilisateurs :

| Fichier | Où le publier |
|---------|--------------|
| `docs/pre-session.md` | Page d'accueil ou modal d'onboarding |
| `docs/privacy-policy.md` | Lien permanent depuis l'interface |
| `docs/agent-presentation.md` | Page de présentation du service |
