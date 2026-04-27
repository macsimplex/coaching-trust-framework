# Spécification — Politique de confidentialité
## CTF — Ce que la politique de confidentialité doit contenir

Exigence ICF : F.12.4 · F.12.7
Exigence RGPD : Art. 13 · Art. 14 · Art. 17
Version CTF : 1.0

---

> Ce fichier est fourni par le CTF. Il définit les exigences de contenu de la politique de confidentialité que l'intégrateur doit produire et rendre accessible depuis l'interface.
> La politique de confidentialité elle-même est propre à chaque déploiement — elle dépend de la plateforme, du LLM et de l'éditeur.
> Sa validité juridique doit être vérifiée par un juriste avant publication.

---

## Principe

La politique de confidentialité est un document juridique et informatif. Elle complète le document pré-session — elle en est la version détaillée et opposable.

**Public cible :** tout utilisateur souhaitant comprendre en détail le traitement de ses données.
**Format :** page web accessible en permanence depuis l'interface, ou document PDF lié.
**Langue :** langue principale de déploiement. Une traduction peut être nécessaire selon la réglementation applicable.

---

## Contenu obligatoire

### 1. Identité du responsable de traitement

- Nom de l'éditeur ou de l'organisation (`NOM_EDITEUR`)
- Adresse postale
- Email de contact (`CONTACT_EDITEUR`)
- Le cas échéant : nom du délégué à la protection des données (DPO)

---

### 2. Finalités et base légale du traitement

- Pourquoi les données sont collectées : fourniture du service de coaching IA
- Base légale : consentement de l'utilisateur (Art. 6.1.a RGPD)
- Données traitées : contenu des échanges conversationnels, identifiant utilisateur
- Données non collectées : à lister explicitement si pertinent (ex. données de santé au sens RGPD)

---

### 3. Sous-traitants et transferts

Pour chaque sous-traitant (`PLATEFORME`, `LLM`) :
- Nom de l'entité
- Rôle dans le traitement
- Pays de localisation des serveurs
- Lien vers leur politique de confidentialité
- Mécanisme de transfert hors UE si applicable (clauses contractuelles types, décision d'adéquation)

---

### 4. Durée de conservation

- Combien de temps l'historique conversationnel est conservé
- Conditions de suppression automatique si applicable
- Durée de conservation des logs techniques

---

### 5. Droits des utilisateurs

Pour chaque droit, expliquer comment l'exercer concrètement :

- **Droit d'accès** (Art. 15 RGPD) — comment obtenir une copie des données
- **Droit de rectification** (Art. 16 RGPD)
- **Droit à l'effacement** (Art. 17 RGPD) — `PROCEDURE_EFFACEMENT` : natif ou manuel via `CONTACT_EDITEUR`
- **Droit à la limitation** (Art. 18 RGPD)
- **Droit à la portabilité** (Art. 20 RGPD)
- **Droit d'opposition** (Art. 21 RGPD)
- **Droit de retrait du consentement** à tout moment, sans conséquence

Contact pour exercer ces droits : `CONTACT_EDITEUR`
Délai de réponse : préciser (max 30 jours selon RGPD)

---

### 6. Sécurité des données

- Mesures techniques en place (chiffrement en transit, accès restreint)
- Mesures organisationnelles
- Procédure en cas de violation de données

---

### 7. Cookies et traceurs

- Si des cookies sont utilisés : lesquels, pour quoi, durée
- Si aucun cookie : le mentionner explicitement

---

### 8. Droit de recours

- L'utilisateur peut déposer une réclamation auprès de l'autorité de protection des données compétente
- France : CNIL — cnil.fr
- Belgique : APD — autoriteprotectiondonnees.be
- Suisse : PFPDT — edoeb.admin.ch
- Adapter selon le pays de déploiement

---

### 9. Date de dernière mise à jour

- Date de la version en vigueur
- Modalités de notification en cas de modification

---

## Ce que cette politique n'est pas

- Un substitut au document pré-session — elle est plus complète, moins lisible, réservée aux utilisateurs qui veulent le détail
- Un document générique copié-collé — chaque déploiement a ses propres sous-traitants et conditions

---

## Checklist de validation

Avant de publier et de renseigner `URL_CONFIDENTIALITE` dans Configuration :

- [ ] Identité du responsable de traitement complète
- [ ] Sous-traitants listés avec leur pays et leur politique
- [ ] Droits des utilisateurs expliqués avec la procédure concrète
- [ ] `PROCEDURE_EFFACEMENT` cohérente avec `EFFACEMENT_NATIF` dans Configuration
- [ ] Droit de recours mentionné avec l'autorité compétente du pays de déploiement
- [ ] Date de mise à jour renseignée
- [ ] Document relu par un juriste ou un DPO avant publication

---

*privacy-policy-spec.md — Coaching Trust Framework v1.0*
