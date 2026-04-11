# CTF — Coaching Trust Framework

**Version :** 1.0
**Référentiel :** ICF AI Coaching Framework and Standards V1.01 — 2024
**Statut :** Draft de travail
**Auteur :** Maxime Bui — © 2025-2026
**Licence :** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)

---

## Qu'est-ce que le CTF ?

Le Coaching Trust Framework (CTF) est un socle de conformité open source pour les agents de coaching IA. Il traduit les exigences de l'ICF AI Coaching Framework and Standards en règles comportementales, protocoles de sécurité et outils d'audit directement utilisables dans un agent conversationnel.

Le CTF ne fait pas de coaching. Il garantit que l'agent qui s'en sert le fait de façon éthique, sécurisée et conforme — quelle que soit la méthode de coaching qu'il embarque.

---

## Philosophie

**Un socle de conformité invariant, dans lequel on branche une méthode, sur lequel on pose une configuration de déploiement.**

Le CTF repose sur trois couches distinctes, portées par trois auteurs différents :

| Couche | Nom | Auteur | Mutabilité |
|--------|-----|--------|------------|
| Le socle | **CTF** | Communauté CTF | Immuable — évolue uniquement avec l'ICF |
| La méthode | **Core** | L'auteur de l'agent | Libre — propre à chaque agent |
| Les variables | **Configuration** | L'intégrateur | Spécifique à chaque déploiement |

Un agent = CTF + Core + Configuration.

---

## Ce que le CTF contient

### `/layers/` — les couches comportementales

Les couches sont les fichiers injectés dans le contexte de l'agent. Elles sont invariantes : on ne les modifie pas, on ne les complète pas. Elles couvrent l'ensemble des exigences comportementales de l'ICF.

| Fichier | Section ICF | Contenu |
|---------|-------------|---------|
| `KB-A-ethics.md` | A | Identification IA · limites contextuelles · biais · consentement |
| `KB-B-agreements.md` | B | Accords d'intention · confiance · sécurité relationnelle |
| `KB-C-presence.md` | C | Présence · écoute active · questions puissantes |
| `KB-D-growth.md` | D | Engagement · suivi · clôture · croissance |
| `KB-E-evaluation.md` | E | Satisfaction · efficacité · comportements de suivi |
| `KB-F-data.md` | F | Données · droits utilisateurs · RGPD — placeholders uniquement |
| `KB-safety.md` | — | Gates de périmètre · crises · obligations inconditionnelles |
| `KB-supervision.md` | — | Mode supervision · auto-réflexivité |
| `entrypoint.md` | — | Orchestration ICF · appel du slot Core |

### `/certification/` — la chaîne de certification

Quatre agents IA séquentiels qui permettent de concevoir, tester, analyser et auditer un agent CTF-compliant. Chaque agent lit des documents en entrée et livre ses outputs dans le package Core de l'agent évalué.

| Agent | Entrée | Sortie |
|-------|--------|--------|
| **CTF-Design** | Les layers CTF + la méthode | `Core/methodology/` |
| **CTF-Test-Plan** | Le package Core complet | `Core/compliance/test-plan.md` |
| **CTF-Robustness** | Le plan de tests + les résultats | `Core/compliance/robustness-report.md` |
| **CTF-Audit** | Tout Core/ | `Core/compliance/audit-report.md` |
| **CTF-Config** | Dialogue avec l'intégrateur | `Core/config/` |

---

## Ce que le CTF ne contient pas

- **La méthode de coaching** — c'est l'auteur de l'agent qui l'apporte dans `Core/`.
- **Les documents finaux** (politique de confidentialité, document pré-session) — ils dépendent de la méthode et de la configuration. Les agents de certification les produisent et les livrent dans `Core/`.
- **Les variables de déploiement** — elles sont renseignées par l'intégrateur dans `Core/config/`.

---

## Structure du package Core (produit par l'auteur de l'agent)

Un package Core est le package complet d'un agent. C'est ce qu'un auditeur ICF reçoit — il n'a pas besoin du CTF pour conduire son audit.

```
/Core/
│
├── README.md                    ← présentation de l'agent
│
├── /methodology/                ← la méthode · produite avec CTF-Design
│   ├── CONTRACT.md              ← contrat d'interface CTF (fourni par le CTF)
│   └── ...                      ← fichiers de la méthode
│
├── /compliance/                 ← produit par les agents de certification
│   ├── test-plan.md
│   ├── robustness-report.md
│   └── audit-report.md
│
└── /config/                     ← produit avec CTF-Config
    ├── platform.md
    ├── editorial.md
    └── localization.md
```

---

## Comment utiliser le CTF

### Je veux créer un agent de coaching IA

1. Lire `certification/CTF-Design/README.md`
2. Utiliser l'agent CTF-Design pour concevoir ta méthode — il livre dans `Core/methodology/`
3. Utiliser CTF-Config pour renseigner ta configuration — il livre dans `Core/config/`
4. Déployer CTF layers + Core sur ta plateforme

### Je veux certifier un agent existant

1. Fournir le package Core de l'agent à CTF-Test-Plan
2. Conduire les tests utilisateurs selon le plan produit
3. Fournir les résultats à CTF-Robustness
4. Soumettre tout Core/ à CTF-Audit
5. Le rapport d'audit dans `Core/compliance/audit-report.md` est le document de certification

### Je veux auditer un agent (côté ICF / évaluateur externe)

Demander le package `Core/` de l'agent. Il contient tout — méthode, configuration, documents de conformité, rapport d'audit. Le CTF est public et identique pour tous les agents qui en sont issus.

---

## Conformité et versioning

Le CTF est indexé sur la version de l'ICF AI Coaching Framework and Standards.

| Version CTF | Référentiel ICF | Statut |
|-------------|-----------------|--------|
| 1.0 | ICF V1.01 — 2024 | Draft de travail |

Les évolutions du CTF suivent les révisions de l'ICF. Un package Core qui référence `CTF v1.0` reste valide tant que CTF v1.0 est en vigueur — une mise à jour de version du CTF ne rend pas les agents existants non-conformes ; elle ouvre une fenêtre de mise à jour documentée dans `CHANGELOG.md`.

---

## Évolutions futures

Le CTF est conçu pour s'étendre sans modifier ses couches invariantes. Trois évolutions sont identifiées :

### CTF-Deploy — automatisation du déploiement

Aujourd'hui, l'intégrateur suit `injection-order.md` manuellement sur sa plateforme. Quand une API de déploiement est disponible, un agent CTF-Deploy lit ce fichier et pousse les fichiers dans l'ordre sur la plateforme cible sans intervention humaine.

L'`injection-order.md` est déjà structuré pour être machine-readable — cette évolution ne nécessite aucune modification du package agent.

### CTF-Tester — automatisation partielle des tests

Aujourd'hui, les tests utilisateurs sont conduits manuellement par l'éditeur selon le plan produit par CTF-Test-Plan.

Les scénarios **déterministes** — identification IA, consentement, obligations inconditionnelles, gates de périmètre sur signal unique — peuvent être automatisés via API : l'agent est sollicité avec le script exact du scénario et la réponse est évaluée par rapport au comportement attendu.

Les scénarios de **robustesse sous pression cumulative** — stabilité d'identité sur plusieurs échanges, résistance à la redéfinition progressive, trajectoire de session — restent humains ou nécessitent un agent testeur capable de jouer un rôle sur plusieurs tours.

CTF-Tester produirait un rapport versionné et horodaté, intégrable directement dans `Core/compliance/`.

### CTF-Monitor — supervision continue en production

Un agent de monitoring post-déploiement qui analyse des échantillons de sessions anonymisées pour détecter les dérives comportementales — directivité croissante, gate non activé, formulations de présence simulée. Il produirait des alertes et des recommandations de re-calibration.

---

## Contribuer

Le CTF est un framework communautaire. Les contributions sont les bienvenues sur :
- Les layers comportementaux (corrections, précisions, nouvelles exigences ICF)
- Les agents de certification (amélioration des prompts et KB)
- Les templates de compliance

Toute modification des layers fait l'objet d'une révision de version.

---

*CTF — Coaching Trust Framework · Référentiel ICF AI Coaching Framework and Standards V1.01 — 2024*
