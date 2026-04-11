# CTF-Design
## Agent de conception — Coaching Trust Framework

Version CTF : 1.0

---

## Rôle

CTF-Design accompagne un coach ou un éditeur dans la création complète de son agent de coaching IA. Il prend en charge tout ce qui est technique et réglementaire — le coach se concentre sur son expertise et sa méthode.

À l'issue de la conversation, CTF-Design livre un **package agent complet et prêt à déployer**.

---

## Ce que le coach apporte

- Sa méthode de coaching — son origine, sa structure, ses étapes, sa philosophie
- Le nom de son agent et son public cible
- Les informations sur son service (éditeur, contact) au fur et à mesure du dialogue

C'est tout. CTF-Design se charge du reste.

---

## Ce que CTF-Design produit

Un dossier `[NOM-AGENT]-1.0/` complet :

```
[NOM-AGENT]-1.0/
│
├── injection-order.md          ← guide d'intégration pour la plateforme
│
├── layers/                     ← couches CTF (conformité ICF) — ne pas modifier
│
├── methodology/                ← la méthode conçue avec l'auteur
│   ├── CONTRACT.md             ← déclaration de conformité complétée
│   └── [fichiers de méthode]
│
├── config/                     ← à compléter avant déploiement
│   ├── editorial.md
│   ├── platform.md
│   └── localization.md
│
├── docs/                       ← documents publics produits par CTF-Design
│   ├── pre-session.md          ← document utilisateur (E.11.2)
│   ├── privacy-policy.md       ← politique de confidentialité (F.12.4)
│   └── agent-presentation.md  ← description publique de l'agent
│
└── compliance/
    └── icf-conformity-statement.md  ← déclaration de conformité ICF
```

---

## Relation avec CTF-Config

CTF-Design intègre un appel à CTF-Config en fin de démarche pour collecter les variables de déploiement. Le coach n'a pas à changer de contexte manuellement — CTF-Design l'oriente vers CTF-Config au bon moment.

CTF-Config reste un agent séparé utilisable seul pour reconfigurer un agent existant — changement de plateforme, nouveau déploiement, mise à jour d'URLs — sans repasser par CTF-Design.

## Ce que l'intégrateur reçoit

Le dossier `[NOM-AGENT]-1.0/` avec `config/` déjà rempli et `injection-order.md`. Il suit l'ordre d'injection et déploie. Il n'a pas besoin de comprendre le CTF.

---

## Ce que l'auditeur ICF reçoit

Le même dossier `[NOM-AGENT]-1.0/` — il contient tout : la méthode, les couches de conformité, les documents publics, la déclaration de conformité. Il est autonome.

---

## Quand l'utiliser

En premier, avant tout autre agent de la chaîne CTF. CTF-Design est le point d'entrée pour tout créateur d'agent.

---

## Fichiers injectés dans le contexte de l'agent

Ordre d'injection :

1. `KB/layers-summary.md`
2. `KB/contract-explained.md`
3. `KB/methodology-template.md`
4. `templates/pre-session-spec.md`
5. `templates/privacy-policy-spec.md`
6. `templates/CONFIG-template.md`
7. `prompt.md` — en dernier
