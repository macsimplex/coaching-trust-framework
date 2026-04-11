# CONTRACT.md — Contrat d'interface CTF

**Version CTF :** 1.0
**Emplacement :** `Core/methodology/CONTRACT.md`

> Ce fichier est fourni par le CTF. Il définit ce que toute méthode Core doit implémenter pour s'articuler correctement avec les layers CTF. Il est lu par l'agent CTF-Design lors de la conception, et par CTF-Audit lors de la certification.
>
> Ne pas modifier ce fichier. Si une exigence du contrat ne peut pas être satisfaite par ta méthode, documenter l'écart dans `Core/compliance/` et le soumettre à CTF-Audit.

---

## Rôle du contrat

Les layers CTF gèrent la conformité ICF — éthique, posture, sécurité, données, supervision. La méthode Core gère le processus de coaching — comment on structure une session, comment on progresse, comment on clôture.

Le contrat définit l'interface entre les deux : ce que les layers attendent de la méthode, et ce que la méthode peut attendre des layers.

---

## Ce que Core doit implémenter

### 1. Phase d'accueil

Toute méthode doit définir une phase d'accueil qui intervient **après** la séquence de consentement CTF et **avant** tout travail sur le contenu de coaching.

La phase d'accueil doit :
- Explorer ce qui amène la personne
- Identifier l'intention de la session
- Produire un état de départ utilisable par les phases suivantes

Elle ne doit pas :
- Commencer avant que le consentement CTF soit obtenu
- Remplacer la séquence d'identification IA et de présentation des limites (gérée par les layers)

**Livrable attendu :** description de la phase d'accueil dans les fichiers de méthode, avec ses marqueurs d'entrée, de déroulement et de fin.

---

### 2. Structure de session

Toute méthode doit définir une structure de session claire :
- Les phases ou étapes qui la composent
- Les marqueurs de fin de chaque phase (comment sait-on qu'on peut avancer ?)
- Le protocole de transition entre phases (accord explicite de l'utilisateur requis)
- Les conditions de retour à une phase antérieure

**Livrable attendu :** description de la structure complète, phases et transitions.

---

### 3. Protocole de clôture

Toute méthode doit définir un protocole de clôture de session qui :
- Récapitule ce qui a été travaillé
- Ancre un engagement ou une intention concrète
- Intègre la question de satisfaction requise par KB-E (score 0-10)
- Ouvre vers la suite si applicable

**Livrable attendu :** description du protocole de clôture.

---

### 4. Contexte de session

Toute méthode doit définir les éléments de contexte qu'elle maintient et utilise activement au fil de la session — ce qu'elle retient, comment elle s'y réfère, comment elle les met à jour si de nouveaux signaux apparaissent.

**Livrable attendu :** liste des éléments de contexte et règles d'utilisation.

---

### 5. Compatibilité avec les gates CTF

Les layers CTF activent des gates — des mécanismes qui suspendent ou modifient le comportement de l'agent dans certaines situations (contenu clinique, signal suicidaire, tentative de redéfinition de l'identité, dépendance à l'agent).

La méthode Core ne doit pas contredire ces gates. En particulier :
- Aucune phase de la méthode ne se poursuit si le gate de périmètre est actif
- Aucune formulation de la méthode ne contourne l'obligation inconditionnelle 3114
- La méthode ne définit pas de posture qui contredit KB-A, KB-B ou KB-C

**Livrable attendu :** déclaration explicite de compatibilité, ou documentation des écarts.

---

### 6. Variables de configuration utilisées

La méthode doit déclarer les variables de configuration qu'elle utilise — issues de `Core/config/`. Cela permet à CTF-Config de s'assurer que toutes les variables nécessaires sont renseignées avant déploiement.

Variables standard disponibles (définies dans `Core/config/`) :
- `URL_COACH_HUMAIN`
- `URL_CONFIDENTIALITE`
- `RESSOURCES_CRISE`
- `CONTACT_EDITEUR`
- `NOM_AGENT`
- `PLATEFORME`
- Variables spécifiques déclarées par la méthode

**Livrable attendu :** liste des variables utilisées par la méthode.

---

## Ce que la méthode peut attendre des layers

Les layers CTF garantissent à la méthode que les comportements suivants sont déjà gérés — la méthode n'a pas à les implémenter :

- Identification de l'agent comme IA en ouverture de session
- Présentation des limites (non-thérapeute, non-conseiller)
- Séquence de consentement et droit de retrait
- Détection et gestion des signaux émotionnels
- Gates de périmètre (contenu clinique, suicidaire)
- Obligation 3114 sur signal suicidaire
- Gestion de la dépendance à l'agent
- Mode supervision / auto-réflexivité
- Gestion des données et réponses RGPD
- Règles de posture (non-directif, 3-6 phrases, une question à la fois)
- Détection et adoption de la langue de l'utilisateur

---

## Déclaration de conformité

À compléter par l'auteur de la méthode et à inclure dans ce fichier avant soumission à CTF-Audit :

```
Méthode : [nom de la méthode]
Auteur : [nom / organisation]
Date : [date]
Version CTF référencée : 1.0

Exigences satisfaites :
[ ] 1. Phase d'accueil — voir [fichier, section]
[ ] 2. Structure de session — voir [fichier, section]
[ ] 3. Protocole de clôture — voir [fichier, section]
[ ] 4. Contexte de session — voir [fichier, section]
[ ] 5. Compatibilité gates CTF — voir [fichier, section]
[ ] 6. Variables de configuration déclarées — voir [liste]

Écarts documentés : [oui / non — si oui, voir Core/compliance/]
```

---

*CONTRACT.md — Coaching Trust Framework v1.0 · Ne pas modifier*
