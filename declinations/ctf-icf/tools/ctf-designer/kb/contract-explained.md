# KB — Le CONTRACT.md expliqué
## CTF-Design — Knowledge Base

Version CTF : 1.0

---

> Ce fichier explique chaque exigence du CONTRACT.md — pourquoi elle existe, ce qu'elle doit produire,
> et comment évaluer si elle est satisfaite.
> Il est utilisé par CTF-Design pour guider l'auteur d'une méthode Core.

---

## Exigence 1 — Phase d'accueil

**Pourquoi :** les layers CTF gèrent le consentement et l'accord d'intention génériques. Mais chaque méthode a sa propre façon d'explorer ce qui amène la personne — son moteur de venue, son état du moment, son intention. Cette exploration est spécifique à la méthode.

**Ce que la méthode doit définir :**
- Quand intervient la phase d'accueil (après le consentement CTF, avant le travail sur le contenu)
- Quelles questions ou conduites la composent
- Ses marqueurs de fin : comment sait-on que l'accueil est terminé et qu'on peut avancer ?

**Exemples de marqueurs valides :**
- L'utilisateur a nommé ce qui l'amène
- L'intention de session est formulée
- Le profil d'engagement a été identifié (si la méthode l'utilise)

**Signal d'insuffisance :** "l'accueil est terminé quand l'atmosphère est bonne" n'est pas un marqueur observable.

---

## Exigence 2 — Structure de session

**Pourquoi :** pour qu'un agent puisse progresser de façon cohérente, il doit savoir où il est, où il va, et quand il peut avancer. Sans structure définie, il improvise — et l'improvisation dans un contexte clinique ou émotionnel est un risque de conformité.

**Ce que la méthode doit définir :**
- Les phases ou étapes qui composent une session
- Les marqueurs de fin de chaque phase — observables et précis
- Le protocole de transition : comment l'accord est demandé, sous quelle forme
- Les conditions de retour à une phase antérieure et comment le nommer

**Exemples de marqueurs valides (observables) :**
- « L'utilisateur a énoncé son objectif en termes mesurables et temporels »
- « Au moins trois options distinctes ont été nommées »
- « L'utilisateur a choisi explicitement une option parmi celles identifiées »
- « L'utilisateur a répondu oui à la question de transition »

**Signaux d'insuffisance :**
- « Quand l'exploration est suffisante » → trop flou, non testable
- « Quand le client se sent prêt » → interprétation, pas observation
- « Quand l'énergie de la session est bonne » → non mesurable

**Ce que le Core ne définit pas :**
- Le format de l'accord de transition (géré par KB-B §B.3.3)
- La posture lors des transitions (géré par KB-C)

---

## Exigence 3 — Protocole de clôture

**Pourquoi :** KB-D définit la clôture CTF (question de satisfaction, rappel coach humain). Mais avant cette clôture, la méthode a son propre moment de fermeture — récapitulatif, engagement, synthèse. Ce moment doit être défini pour ne pas créer de chevauchement avec la clôture CTF.

**Ce que la méthode doit définir :**
- Ce qui constitue la fin du processus de la méthode (ex : engagement pris, synthèse recueillie)
- La formulation de validation finale de l'engagement
- Ce que la clôture méthode produit comme signal pour que la clôture CTF puisse s'enchaîner

**Exemples de signaux de fin valides :**
- « Un engagement concret, daté et motivé a été formalisé par l'utilisateur »
- « Une synthèse en 3 points a été validée par l'utilisateur »
- « L'utilisateur a confirmé qu'il emporte [élément précis] »

**Signaux d'insuffisance :**
- « Quand la session atteint son but » → circulaire
- « Quand le coach considère que c'est terminé » → il n'y a pas de coach humain, c'est l'agent

**Ce que le Core ne définit pas :**
- La question de satisfaction 0-10 (KB-D)
- Le rappel du coach humain (KB-D + Configuration)

---

## Exigence 4 — Contexte de session

**Pourquoi :** un agent sans mémoire active du contexte produit des sessions incohérentes — il pose des questions déjà posées, oublie ce qui a été dit, perd le fil. Le contexte de session est ce qui garantit la continuité interne d'une session.

**Ce que la méthode doit définir :**
- Les éléments de contexte qu'elle maintient (ex : intention formulée, objectif, réalité explorée, options identifiées, engagement pris)
- Les règles d'utilisation de ces éléments (quand y faire référence, comment les mettre à jour si de nouveaux signaux apparaissent)
- Ce qui est conservé entre les sessions (si la plateforme le permet)

**Signal d'insuffisance :** "l'agent se souvient de la session" n'est pas suffisant. La liste des éléments doit être explicite.

**Exemple valide (méthode GROW) :**
| Élément | Phase d'origine | Règle de mise à jour |
|---|---|---|
| `goal` (objectif formulé) | Goal | Révisable si la Reality révèle une contradiction |
| `reality_points` (liste des éléments de réalité explorés) | Reality | Append-only |
| `options` (liste des options identifiées) | Options | Append-only |
| `commitment` (engagement pris) | Will | Unique — finalisé à la clôture |

---

## Exigence 5 — Compatibilité gates CTF

**Pourquoi :** les gates CTF (gate de périmètre continu, obligations inconditionnelles) s'appliquent sur le contenu, indépendamment de l'avancement dans la méthode. Une méthode qui contournerait ces gates — même involontairement — crée un risque de sécurité.

**Ce que la méthode doit vérifier :**
- Aucune phase de la méthode ne se poursuit si le gate de périmètre est actif
- Aucune formulation de la méthode ne contourne l'obligation inconditionnelle de la ressource de crise
- La méthode ne définit pas de posture qui contredit KB-A, KB-B ou KB-C

**Comment vérifier :**
- Lire chaque phase de la méthode en se demandant : "si un signal de niveau 3 apparaît ici, le gate peut-il s'activer sans friction ?"
- Vérifier qu'il n'y a pas de formulation du type "continuer à explorer en toutes circonstances"

**Si une tension existe :** la documenter dans la déclaration de conformité. CTF-Audit la prendra en compte.

**Exemples de tensions à résoudre ou documenter :**
- Une méthode qui demanderait à l'agent de « rester sur l'objectif même si l'utilisateur exprime une détresse » → viole le gate de périmètre. **À reformuler.**
- Une méthode qui prescrit un feedback direct (ex : « dire ce qui ne va pas dans son projet ») → risque de contradiction avec la posture non-directive. **À ajuster en reformulation sans jugement.**
- Une méthode avec un lexique propre (« la vibration du client ») → OK tant que l'observation reste testable. **Demander des marqueurs objectifs.**

---

## Exigence 6 — Variables de configuration

**Pourquoi :** les variables de Configuration sont les seuls éléments personnalisables du service. La méthode doit déclarer celles qu'elle utilise pour que CTF-Config sache quoi demander à l'intégrateur, et que CTF-Audit puisse vérifier qu'elles sont renseignées.

**Variables standard disponibles :**
- `NOM_AGENT` — nom de l'agent affiché à l'utilisateur
- `NOM_METHODE` — nom de la méthode (utilisé dans B.4.1)
- `URL_COACH_HUMAIN` — lien vers un annuaire de coachs
- `URL_CONFIDENTIALITE` — politique de confidentialité
- `CONTACT_EDITEUR` — email de contact
- `RESSOURCES_CRISE` — ressources de crise locales
- `PLATEFORME` et `LLM` — sous-traitants (utilisés dans KB-F)
- `MILESTONE_INTERVAL` — fréquence du bilan périodique

**Variables spécifiques :** si la méthode en a besoin, les déclarer explicitement dans la déclaration de conformité.

**Exemple valide :** une méthode orientée cycles hebdomadaires déclare `MILESTONE_INTERVAL=7` et une variable spécifique `WEEK_REVIEW_QUESTIONS` qui contient les 3 questions de review hebdomadaire.

**Signal d'insuffisance :** une méthode qui utilise des paramètres implicites sans les déclarer (« le coach définit ses objectifs avec le client ») — s'il s'agit d'un paramètre, il doit être nommé et documenté.

---

## Déclaration de conformité — comment la remplir

```markdown
## Déclaration de conformité

Méthode : [nom]
Auteur : [nom / organisation]
Date : [date]
Version CTF référencée : 1.0

Exigences satisfaites :
[x] 1. Phase d'accueil — voir [fichier, section]
[x] 2. Structure de session — voir [fichier, section]
[x] 3. Protocole de clôture — voir [fichier, section]
[x] 4. Contexte de session — voir [fichier, section]
[x] 5. Compatibilité gates CTF — voir [fichier, section]
[x] 6. Variables de configuration déclarées — [liste]

Écarts documentés : [oui / non — si oui, voir Core/compliance/]
```

**Un écart documenté n'est pas un échec.** Il est transmis à CTF-Audit qui l'évalue. Un écart non documenté est une non-conformité.
