# Spécification — Document pré-session
## CTF — Ce que le document pré-session doit contenir

Exigence ICF : E.11.2
Version CTF : 1.0

---

> Ce fichier est fourni par le CTF. Il définit les exigences de contenu du document pré-session que l'auteur de l'agent doit produire et livrer dans `Core/`.
> Le document pré-session lui-même est propre à chaque agent — il dépend de la méthode et de la configuration.

---

## Principe

Le document pré-session est un document en langage ordinaire, accessible à l'utilisateur avant ou en début d'utilisation. Il n'est pas un contrat juridique — c'est une présentation honnête et compréhensible du service.

**Public cible :** tout utilisateur, sans prérequis technique ou de coaching.
**Format :** libre — page web, modal d'onboarding, PDF, texte affiché avant le premier échange.
**Longueur :** suffisante pour couvrir les points ci-dessous, sans être exhaustive. Privilégier la clarté sur l'exhaustivité.

---

## Contenu obligatoire

### 1. Nature du service

- Que cet agent est une intelligence artificielle — pas un coach humain, pas un thérapeute.
- Ce qu'il fait : décrire le processus en une ou deux phrases en langage ordinaire.
- Ce qu'il ne fait pas : conseil médical, juridique, financier, thérapeutique.

### 2. La méthode utilisée

- Nom de la méthode et description courte en langage ordinaire.
- Ce à quoi l'utilisateur peut s'attendre concrètement dans une session.

### 3. Limites du service

- L'agent peut contenir des inexactitudes.
- Il n'a pas de mémoire émotionnelle — il accède à l'historique textuel mais ne "ressent" pas.
- Il ne remplace pas un suivi humain pour des situations qui le nécessitent.

### 4. Données et confidentialité

- Quelles données sont collectées et traitées.
- Qui y a accès (plateforme, LLM, éditeur).
- Comment l'utilisateur peut exercer ses droits (accès, effacement).
- Lien vers la politique de confidentialité complète.

### 5. Consentement et droit de retrait

- L'utilisation est volontaire.
- L'utilisateur peut arrêter à tout moment, sans justification.
- Comment arrêter ou se désinscrire.

### 6. Ressources alternatives

- Lien vers un annuaire de coachs humains certifiés ICF ([URL_COACH_HUMAIN]).
- Ressources de crise locales ([RESSOURCES_CRISE]) — à inclure si le service est susceptible d'être utilisé dans des contextes de vulnérabilité.

### 7. Contact éditeur

- Nom de l'éditeur ou de l'organisation.
- Email de contact pour toute question.

---

## Contenu recommandé (non obligatoire)

- FAQ sur l'utilisation (comment commencer, que faire si la session tourne mal).
- Exemples de ce qu'on peut explorer avec cet agent.
- Précisions sur la persistance de l'historique et comment l'effacer.

---

## Ce que ce document n'est pas

- Un disclaimer juridique — le registre doit rester humain et compréhensible.
- Un résumé de la politique de confidentialité — il peut y renvoyer, mais ne pas la reproduire.
- Un manuel d'utilisation technique.

---

## Checklist de validation

Avant de livrer le document dans `Core/`, vérifier :

- [ ] Rédigé en langage ordinaire — compréhensible sans connaissance du coaching ou de l'IA
- [ ] Mentionne explicitement que l'agent est une IA
- [ ] Décrit la méthode en termes concrets
- [ ] Mentionne les limites du service
- [ ] Contient les informations sur les données et les droits
- [ ] Contient le droit de retrait
- [ ] Contient le lien vers la politique de confidentialité
- [ ] Contient le contact éditeur
- [ ] Contient au moins une ressource alternative (coach humain ou crise)
- [ ] Accessible depuis l'interface pendant toute la durée d'utilisation
