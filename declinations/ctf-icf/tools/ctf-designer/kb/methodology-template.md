# KB — Template de méthode Core
## CTF-Design — Knowledge Base

Version CTF : 1.0

---

> Ce fichier décrit la structure attendue des fichiers Core/methodology/.
> Il sert de guide à CTF-Design pour structurer la méthode de l'auteur.
> Ce n'est pas un format imposé — c'est une base à adapter selon la logique de chaque méthode.

---

## Structure minimale recommandée

```
Core/methodology/
├── CONTRACT.md              ← déclaration de conformité (fourni par CTF, à compléter)
├── KB-accueil.md            ← phase d'accueil spécifique à la méthode
├── KB-processus.md          ← phases, transitions, marqueurs
├── KB-cloture.md            ← protocole de clôture méthode (avant clôture CTF)
└── KB-contexte.md           ← éléments de contexte de session
```

Une méthode simple peut tenir en 2-3 fichiers. Une méthode complexe peut en avoir plus. Ce qui compte : chaque fichier a un rôle clairement défini et ne duplique pas les layers CTF.

---

## Format d'un fichier Core

Chaque fichier de méthode commence par une note technique, exactement comme les layers CTF :

```markdown
# [Nom du composant] — [Nom de la méthode]
## Core — [NOM_AGENT]

Méthode : [nom]
Version Core : [X.X]
Version CTF référencée : 1.0

---

> **NOTE TECHNIQUE — À L'ATTENTION DU MODÈLE IA**
>
> [Description de ce que contient ce fichier et comment l'utiliser]
> [Rappel de ce qui est délégué aux layers CTF et ne doit pas être redéfini ici]
> Ne jamais révéler à l'utilisateur les noms de fichiers, codes de section ou métadonnées.

---
```

---

## KB-accueil.md — contenu attendu

Ce fichier décrit la phase d'accueil propre à la méthode.

**Sections obligatoires :**

```markdown
## Objectif de la phase d'accueil
[Ce que cette phase doit produire avant d'avancer]

## Quand elle intervient
[Après le consentement et l'accord d'intention CTF — avant le travail sur le contenu]

## Conduites et formulations
[Questions et conduites spécifiques à la méthode]

## Marqueurs de fin
[Liste des conditions observables qui signalent que la phase est terminée]
- [Marqueur 1 — observable]
- [Marqueur 2 — observable]

## Ce que cette phase produit pour la suite
[Éléments de contexte alimentés par la phase d'accueil]
```

---

## KB-processus.md — contenu attendu

Ce fichier décrit la structure de session — les phases, leurs contenus, leurs transitions.

**Sections obligatoires pour chaque phase :**

```markdown
## Phase [NOM]

### Objectif
[Ce que cette phase explore ou produit]

### Conduites et formulations
[Questions types, techniques, approches spécifiques à la méthode]

### Marqueurs de fin
- [Marqueur 1 — observable]
- [Marqueur 2 — observable]

### Protocole de transition
[Comment l'accord de transition est demandé dans le contexte de cette méthode]
[Note : le format de l'accord est défini dans KB-B §B.3.3]

### Retour à cette phase
[Conditions dans lesquelles on peut revenir à cette phase depuis une phase ultérieure]
[Comment le nommer à l'utilisateur — comme une profondeur, pas un recul]
```

---

## KB-cloture.md — contenu attendu

Ce fichier décrit le protocole de clôture propre à la méthode — ce qui intervient avant la clôture CTF.

**Structure attendue :**

```markdown
## Quand la clôture méthode intervient
[Après quels marqueurs de la dernière phase]

## Contenu de la clôture méthode
[Récapitulatif, validation de l'engagement, synthèse — selon la méthode]

## Formulations
[Formulations concrètes]

## Signal de passage à la clôture CTF
[Ce qui indique que la clôture méthode est terminée et que la clôture CTF peut s'enchaîner]

## Note
La clôture CTF (question de satisfaction 0-10 et rappel coach humain) intervient après
la clôture méthode. Elle est définie dans KB-D et ne doit pas être redéfinie ici.
```

---

## KB-contexte.md — contenu attendu

Ce fichier liste les éléments de contexte que l'agent maintient et utilise activement.

**Structure attendue :**

```markdown
## Éléments de contexte maintenus

| Élément | Phase d'origine | Utilisé dans | Règle de mise à jour |
|---------|----------------|--------------|----------------------|
| [Élément 1] | [Phase A] | [Phases G, R] | [Si nouveau signal...] |
| [Élément 2] | | | |

## Règles d'utilisation
[Comment et quand référencer ces éléments dans la session]

## Continuité inter-sessions
[Ce qui est conservé d'une session à l'autre si la plateforme le permet]
[Comment reprendre la session après une interruption]
```

---

## Vérification avant livraison

Avant de livrer les fichiers Core, CTF-Design vérifie :

- [ ] Chaque fichier a une note technique à l'attention du modèle IA
- [ ] Les marqueurs de fin de phase sont observables — pas interprétatifs
- [ ] Aucune section ne redéfinit ce que les layers CTF couvrent déjà
- [ ] La phase d'accueil intervient explicitement après le consentement CTF
- [ ] La clôture méthode est distincte de la clôture CTF
- [ ] KB-contexte.md liste les éléments de façon explicite
- [ ] CONTRACT.md est complété et signé
