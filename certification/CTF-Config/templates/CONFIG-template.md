# Configuration — Variables de déploiement
## À remplir par l'intégrateur avant tout déploiement

Cet agent instancié : [NOM_AGENT]
Version CTF référencée : 1.0
Date de configuration : [DATE]

---

> **Note :** ce fichier est produit par l'agent CTF-Config après dialogue avec l'éditeur et l'intégrateur.
> Il centralise toutes les valeurs variables du service. C'est le seul fichier à mettre à jour
> lors d'un changement de plateforme, d'URL ou de contact.
> Les layers CTF et le Core n'ont pas à être modifiés — ils référencent ces clés.

---

## /editorial/ — Responsabilité éditeur

| Clé | Valeur | Obligatoire |
|-----|--------|-------------|
| `NOM_AGENT` | [nom commercial de l'agent] | Oui |
| `NOM_EDITEUR` | [nom de l'éditeur ou de l'organisation] | Oui |
| `CONTACT_EDITEUR` | [email de contact éditeur] | Oui |
| `URL_CONFIDENTIALITE` | [URL de la politique de confidentialité] | Oui — avant lancement |
| `URL_COACH_HUMAIN` | [URL d'annuaire de coachs ICF certifiés] | Oui |
| `NOM_METHODE` | [nom de la méthode de coaching utilisée] | Oui |

**Note sur `URL_CONFIDENTIALITE` :** si non disponible au lancement, ne pas laisser le champ vide — indiquer `"disponible sur demande à [CONTACT_EDITEUR]"`. L'agent utilisera cette valeur pour informer les utilisateurs.

---

## /platform/ — Responsabilité intégrateur technique

| Clé | Valeur | Obligatoire |
|-----|--------|-------------|
| `PLATEFORME` | [nom de la plateforme d'hébergement] | Oui |
| `LLM` | [nom du moteur LLM utilisé] | Oui |
| `HISTORIQUE_PERSISTANT` | [oui / non — la plateforme conserve-t-elle un historique conversationnel par utilisateur ?] | Oui |
| `EFFACEMENT_NATIF` | [oui / non — l'utilisateur peut-il effacer son historique depuis l'interface ?] | Oui |
| `PROCEDURE_EFFACEMENT` | [si oui : description de la procédure. Si non : "demande manuelle à [CONTACT_EDITEUR]"] | Oui |
| `WCAG_AUDIT` | [conduit / non conduit / en cours] | Oui |
| `TECHNOLOGIES_ADAPTATIVES` | [liste des technologies supportées, ou "non documenté"] | Oui |

---

## /localization/ — Responsabilité éditeur / intégrateur

| Clé | Valeur | Obligatoire |
|-----|--------|-------------|
| `LANGUE_DEFAUT` | [langue par défaut si non détectée automatiquement] | Oui |
| `RESSOURCES_CRISE` | [ressources de crise locales : numéro, nom, disponibilité] | Oui |
| `FUSEAU_HORAIRE` | [fuseau horaire de référence pour le service] | Non |

**Note sur `RESSOURCES_CRISE` :** cette valeur est utilisée dans les obligations inconditionnelles de sécurité. Elle doit être adaptée au pays ou à la région de déploiement.

Exemples :
- France : `3114 (numéro national de prévention du suicide — gratuit, 24h/24)`
- Belgique : `0800 32 123 (Centre de Prévention du Suicide — gratuit, 24h/24)`
- Suisse : `143 (La Main Tendue — gratuit, 24h/24)`
- International : `findahelpline.com`

---

## /milestone/ — Paramètres de session

| Clé | Valeur par défaut | Description |
|-----|-------------------|-------------|
| `MILESTONE_INTERVAL` | 5 | Nombre de cycles complets entre deux bilans périodiques |

---

## Checklist de validation avant déploiement

- [ ] Toutes les clés obligatoires sont renseignées
- [ ] `URL_CONFIDENTIALITE` est accessible publiquement ou sa procédure d'accès est documentée
- [ ] `RESSOURCES_CRISE` correspond au pays / région de déploiement
- [ ] `EFFACEMENT_NATIF` et `PROCEDURE_EFFACEMENT` sont cohérents entre eux
- [ ] `NOM_METHODE` correspond au Core déployé
- [ ] Ce fichier a été relu par l'éditeur et validé avant mise en production

---

*Ce fichier fait partie du package Core de l'agent. Il est produit par CTF-Config et doit être transmis à CTF-Audit avec l'ensemble du package.*
