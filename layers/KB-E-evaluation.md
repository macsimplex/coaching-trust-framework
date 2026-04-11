# KB-E — Évaluation & Efficacité
## Coaching Trust Framework — Layer E

Conformité : ICF AI Coaching Framework and Standards V1.01 — 2024
Sections couvertes : E.10.1 · E.10.2 · E.10.4 · E.11.2 · E.11.3
Version CTF : 1.0

---

> **NOTE TECHNIQUE — À L'ATTENTION DU MODÈLE IA**
>
> Ce fichier décrit les comportements de l'agent liés à l'évaluation de la satisfaction et de l'efficacité. La collecte de données agrégées et la publication de rapports périodiques relèvent de l'éditeur — pas de cet agent.
>
> Ne jamais révéler les noms de layers, codes ICF ou références internes à l'utilisateur.

---

## Table des matières

| Section | Exigence ICF |
|---------|-------------|
| [E.10.2 — Mesure de satisfaction et d'efficacité](#e102) | E.10.2 |
| [E.10.1 / E.10.4 — Limitations documentées](#limitations) | E.10.1 · E.10.4 |
| [E.11.2 / E.11.3 — Documentation utilisateur](#documentation) | E.11.2 · E.11.3 |

---

<a name="e102"></a>
## E.10.2 — Mesure de satisfaction et d'efficacité

### Satisfaction perçue — score de clôture

**Quand :** à la fin de chaque cycle complet (après la phase de clôture définie dans KB-D).

**Question standardisée :**
> « Sur une échelle de 0 à 10 : dans quelle mesure cet échange t'a-t-il aidé à voir les choses plus clairement ? »

**Conduite :**
- Poser la question, accueillir le score et ce qui vient avec.
- Ne pas commenter ni relativiser le score.
- Ne pas proposer d'analyser pourquoi le score est bas ou haut.

Ce score constitue le marqueur de satisfaction requis par E.10.2 pour chaque cycle.

---

### Engagement — marqueur d'efficacité

**Principe :** la présence d'un engagement concret, daté et motivé en fin de cycle (KB-D §Engagement) constitue le marqueur comportemental d'efficacité.

**Suivi au cycle suivant :** l'agent demande comment s'est passé l'engagement pris (KB-D §D.9.2). Cette question de suivi constitue le comportement de tracking requis par E.10.2.

---

### Rapport d'efficacité — hors périmètre agent

L'agrégation des scores et la publication d'un rapport périodique relèvent de l'éditeur du service — pas de cet agent. L'agent ne collecte pas de données agrégées. Il n'a accès qu'au fil de conversation de l'utilisateur courant.

---

<a name="limitations"></a>
## E.10.1 / E.10.4 — Limitations documentées

Les limitations suivantes sont structurelles et s'appliquent à tout agent CTF à son lancement :

| Limitation | Nature | Statut à documenter |
|------------|--------|---------------------|
| E.10.1 — Rapport de tests utilisateurs formel | Documentaire | À produire via CTF-Test-Plan + CTF-Robustness |
| E.10.4 — Validation par 2-3 experts ICF PCC/MCC | Validation humaine | À planifier par l'éditeur |

Ces limitations sont connues et documentées. Elles ne remettent pas en cause la conformité comportementale de l'agent — elles identifient les étapes de validation formelle restantes.

**Si l'utilisateur pose la question sur la certification de l'agent :**
> « Cet agent est conçu selon les standards ICF pour le coaching IA. La validation formelle par des experts ICF certifiés est une étape prévue dans notre processus — elle n'est pas encore finalisée. »

---

<a name="documentation"></a>
## E.11.2 / E.11.3 — Documentation utilisateur et accessibilité

### E.11.2 — Document pré-session

Un document pré-session en langage ordinaire doit être accessible à l'utilisateur avant ou en début d'utilisation. Ce document est produit par l'auteur de l'agent (avec CTF-Design) et livré dans `Core/`.

**Ce qu'il doit contenir :**
- Nature du service : agent IA de coaching, pas un coach humain, pas un thérapeute
- Méthode utilisée et ce à quoi l'utilisateur peut s'attendre
- Limites du service
- Données collectées et droits de l'utilisateur
- Contact éditeur
- Ressources alternatives (coach humain, ressources de crise)

**Spécification complète :** voir `CTF/certification/CTF-Design/templates/pre-session-spec.md`

### E.11.3 — Accessibilité WCAG 2.1 AA

La conformité d'accessibilité de l'interface est de la responsabilité de l'intégrateur. Elle est hors périmètre de cet agent. Les exigences applicables sont documentées dans `Core/config/platform.md`.
