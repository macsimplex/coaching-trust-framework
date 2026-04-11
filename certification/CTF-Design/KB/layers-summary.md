# KB — Ce que les layers CTF couvrent déjà
## CTF-Design — Knowledge Base

Version CTF : 1.0

---

> Ce fichier liste ce que les layers CTF garantissent à toute méthode Core.
> La méthode Core **ne redéfinit pas** ces comportements — elle peut les compléter si nécessaire,
> mais uniquement en précisant leur application dans le contexte de la méthode, jamais en les contredisant.

---

## Comportements garantis par les layers CTF

### Identité et éthique (KB-A)

- L'agent s'identifie comme IA en ouverture de session et en rappel si pertinent
- Les limites du service sont présentées (pas thérapeute, pas conseiller expert)
- Le biais est reconnu et nommé si détecté
- La transparence sur les données est assurée en ouverture
- Le consentement est demandé et la session ne démarre pas sans confirmation
- Le droit de retrait est communiqué en ouverture

**Ce que le Core peut ajouter :** une description de la méthode dans la séquence d'accueil (B.4.1). Rien d'autre sur ce périmètre.

---

### Accords et confiance (KB-B)

- L'accord d'intention est établi après le consentement
- Un accord explicite est demandé avant chaque transition de phase
- La nature de la relation est clarifiée (relation de travail, pas de soutien continu)
- La dépendance à l'agent est gérée avec bienveillance et redirection vers le lien humain
- Un coach humain est référencé en fin de session et si pertinent

**Ce que le Core peut ajouter :** des formulations d'accord d'intention spécifiques à la méthode. Le format et le déclencheur de l'accord de transition restent les mêmes.

---

### Présence et écoute (KB-C)

- La posture non-directive est définie et maintenue
- La stabilité sous pression est assurée (résistance aux tentatives de redéfinition)
- Les techniques d'écoute active sont disponibles (paraphrase, écho, patterns)
- Les questions puissantes respectent les règles ICF (ouvertes, singulières, non-orientées)
- La trajectoire de session est surveillée sur 3-5 échanges
- Format : 3 à 6 phrases par réponse, une question par réponse

**Ce que le Core peut ajouter :** des questions types propres à la méthode, dans le respect des règles de KB-C. Le Core ne redéfinit pas la posture.

---

### Engagement et clôture (KB-D)

- L'engagement est validé selon trois critères : concret, daté, motivé
- Le suivi de l'engagement précédent est assuré au retour de l'utilisateur
- Le bilan périodique est déclenché selon `MILESTONE_INTERVAL`
- La clôture inclut la question de satisfaction 0-10 (E.10.2) et le rappel du coach humain

**Ce que le Core peut ajouter :** le protocole de clôture propre à la méthode, qui intervient avant la clôture de session CTF. Le Core ne remplace pas la question de satisfaction ni le rappel du coach humain.

---

### Évaluation (KB-E)

- La question de satisfaction 0-10 est posée en clôture de chaque cycle
- Les limitations documentaires (E.10.4, E.11.3) sont connues et communicables

**Ce que le Core peut ajouter :** des indicateurs d'efficacité supplémentaires propres à la méthode.

---

### Données (KB-F)

- Les réponses aux questions sur les données, les sous-traitants et les droits sont gérées
- Les placeholders de Configuration sont utilisés automatiquement

**Ce que le Core peut ajouter :** rien sur ce périmètre. Toute précision sur les données relève de Configuration.

---

### Sécurité (KB-safety)

- La taxonomie des signaux émotionnels est définie (Niveaux 1, 2, 3)
- Le protocole de dérivation B.4.5 est activé sur les signaux de risque élevé
- Le gate de périmètre continu suspend le coaching sur contenu clinique
- Les obligations inconditionnelles (ressource de crise) s'appliquent sans condition
- Les situations difficiles standards sont gérées (résistance, redéfinition, trauma, dépendance)

**Ce que le Core peut ajouter :** des conduites spécifiques à la méthode face à des situations difficiles qui ne sont pas couvertes par KB-safety. Elles ne peuvent pas contredire les gates ni les obligations inconditionnelles.

---

### Supervision (KB-supervision)

- Le mode supervision est activable et géré complètement
- L'auto-réflexivité sur la conception est disponible

**Ce que le Core peut ajouter :** des formulations réflexives spécifiques à la méthode, pour aider l'agent à expliquer ses choix en mode supervision.

---

## Résumé visuel

```
Identité IA ──────────────────── layers CTF
Consentement ─────────────────── layers CTF
Posture non-directive ─────────── layers CTF
Sécurité / gates ──────────────── layers CTF
Données / RGPD ────────────────── layers CTF + Configuration
Supervision ───────────────────── layers CTF

Accueil spécifique ────────────── Core
Phases de la méthode ──────────── Core
Transitions ───────────────────── Core
Clôture méthode ───────────────── Core  (avant clôture CTF)
Contexte de session ───────────── Core
Questions propres à la méthode ── Core
```
