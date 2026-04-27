# HANDOFF — prendre la main sur le repo CTF

*Ce document est destiné à Maxime, propriétaire du repo. Il décrit comment installer le kit en local, le pousser sur GitHub, configurer le site, et continuer le travail avec Claude Code. Il n'est pas publié sur le site (exclu dans `_config.yml`).*

---

## Ce que contient ce kit

Le dossier `ctf/` est une copie complète et structurée du repo CTF v1.0, prête à remplacer le contenu actuel de `github.com/macsimplex/coaching-trust-framework`. Tous les placeholders ont été remplacés par tes informations (Maxime Bui, maxime@simplex.coach, github.com/macsimplex/coaching-trust-framework, coaching-trust-framework.org).

**Inventaire** :

```
ctf/
├── README.md                              ← entrée technique
├── EXPLAINER.md                           ← guide pédagogique EN
├── EXPLAINER.fr.md                        ← guide pédagogique FR
├── LICENSE                                ← CC BY-SA 4.0
├── CHANGELOG.md                           ← v1.0 release notes
├── GOVERNANCE.md                          ← gouvernance, RFC, trajectoire
├── CONTRIBUTING.md                        ← comment contribuer
├── ADOPTERS.md                            ← EGG comme reference implementer
├── CONTRIBUTORS.md                        ← Maxime fondateur
├── CLAUDE.md                              ← briefing pour Claude Code (exclu du site)
├── HANDOFF.md                             ← ce document (exclu du site)
├── index.md                               ← page d'accueil du site
├── CNAME                                  ← coaching-trust-framework.org
├── _config.yml                            ← config Jekyll pour GitHub Pages
├── .gitignore
│
├── document/
│   └── ctf-v1.0.md                        ← norme commune (squelette, à enrichir)
│
├── tools/                                 ← 7 helper agents, READMEs uniquement
│   ├── ctf-translator/README.md
│   ├── ctf-converger/README.md
│   ├── ctf-designer/README.md
│   ├── ctf-test-plan/README.md
│   ├── ctf-robustness/README.md
│   ├── ctf-config/README.md               ← nouveau, ajouté dans cette migration
│   └── ctf-audit/README.md
│
├── declinations/
│   ├── README.md                          ← taxonomie des statuts
│   └── ctf-icf/                           ← nouvelle structure pour la déclinaison ICF
│       ├── README.md
│       ├── status.md                      ← working-draft
│       └── source-material/
│           └── README.md                  ← où déposer ton existant /layers/
│
├── certification-scheme/
│   ├── self-declaration.md
│   ├── federation-pathway.md
│   └── community-pathway.md
│
├── rfcs/
│   └── rfc-template.md
│
└── validation/
    ├── methodology.md
    ├── feedback-template.md
    └── evidence-log.md
```

**Total** : 28 fichiers (hors arborescence vide).

## Étape 1 — Installer le kit en local

Récupère le zip, dézippe-le dans ton emplacement de travail habituel. Tu obtiens un dossier `ctf/`.

```bash
cd ~/path/to/your/work
unzip ctf-v1.0-kit.zip
cd ctf-repo  # ou le nom du dossier dézippé
```

## Étape 2 — Pousser sur le repo GitHub existant

Le repo `github.com/macsimplex/coaching-trust-framework` contient une version antérieure que cette migration remplace. Deux options :

### Option A — Remplacement complet (recommandé)

Si tu veux un historique propre avec un commit de migration explicite :

```bash
# Cloner ton repo existant à part
git clone https://github.com/macsimplex/coaching-trust-framework.git existing-repo
cd existing-repo

# Effacer tout le contenu suivi
git rm -rf .

# Copier le nouveau contenu (depuis le dossier dézippé)
cp -r /path/to/ctf-repo/. .

# Vérifier
git status

# Commit et push
git add -A
git commit -m "v1.0: migrate to inductive framework with helper toolkit, declinations, GitHub Pages

- Restructure as inductive framework (minimal common core + per-federation declinations)
- Seven helper agents (Translator, Converger, Designer, Test Plan, Robustness, Config, Audit)
- Three certification pathways (self-declaration, federation, community)
- Validation infrastructure (methodology, feedback template, evidence log)
- Plain-language EXPLAINER in EN and FR
- GitHub Pages setup with custom domain coaching-trust-framework.org
- Founding principle: the common good prevails over any organization

The prior architecture (CTF as direct ICF translation with layered KBs) is migrated:
- /layers/ content goes to declinations/ctf-icf/source-material/ (to be done manually
  or via Claude Code, see HANDOFF.md)
- /certification/ agent prompts go to tools/ctf-*/system-prompt.md and kb/
  (to be done manually or via Claude Code, see HANDOFF.md)"
git push origin main
```

### Option B — Branche de migration

Si tu préfères garder l'ancienne version visible et merger la nouvelle via PR :

```bash
git clone https://github.com/macsimplex/coaching-trust-framework.git existing-repo
cd existing-repo
git checkout -b v1.0-migration

# Remplacer le contenu
git rm -rf .
cp -r /path/to/ctf-repo/. .

git add -A
git commit -m "v1.0 migration — see HANDOFF.md for context"
git push origin v1.0-migration

# Puis ouvrir un PR sur GitHub.com et merger
```

## Étape 3 — Configurer GitHub Pages avec le domaine

Une fois la nouvelle version sur `main` :

1. Sur GitHub.com, va dans **Settings → Pages** du repo.
2. **Source** : `Deploy from a branch`.
3. **Branch** : `main`, dossier `/` (root).
4. Clique sur **Save**. GitHub commence à builder le site (1-2 min).
5. Dans le champ **Custom domain**, entre `coaching-trust-framework.org` et clique **Save**. Le fichier `CNAME` est déjà au bon endroit dans le repo, donc GitHub le reconnaîtra.
6. Coche **Enforce HTTPS** une fois que le certificat est provisionné (peut prendre quelques minutes).

### Configuration DNS chez ton registrar

Chez le bureau d'enregistrement où tu as acheté `coaching-trust-framework.org`, configure ces enregistrements :

**Pour le domaine apex (`coaching-trust-framework.org`)** — quatre A records vers les IPs de GitHub Pages :

```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

**Pour `www.coaching-trust-framework.org`** (optionnel mais recommandé) :

```
Type: CNAME    Host: www    Value: macsimplex.github.io
```

La propagation DNS prend de quelques minutes à quelques heures. Tu peux vérifier avec `dig coaching-trust-framework.org +short` ou un outil web type `dnschecker.org`.

Une fois le DNS propagé et le site en ligne, GitHub provisionnera automatiquement un certificat HTTPS via Let's Encrypt.

## Étape 4 — Travail à faire ensuite avec Claude Code

Le repo migré est structurellement complet mais plusieurs pièces de fond restent à produire. Le briefing pour Claude Code est dans `CLAUDE.md` à la racine — il sera lu automatiquement quand tu lances Claude Code dans ce dossier.

Les sessions Claude Code suggérées, par ordre :

**Session 1 — Migrer ton existant** (1-2 h)
- Repérer les anciens fichiers `/layers/KB-*.md` et `/certification/CTF-*/` du commit précédent du repo.
- Déplacer `/layers/*` dans `declinations/ctf-icf/source-material/`.
- Déplacer chaque `/certification/CTF-X/system-prompt.md` et KB associée dans le `tools/ctf-x/` correspondant.
- Renommer si nécessaire (CTF-Design → CTF Designer, etc.).

**Session 2 — Compléter le common core** (3-4 h)
- Ouvrir `document/ctf-v1.0.md` (squelette actuel).
- Pour chaque section, écrire le contenu normatif minimal.
- Posture : ne mettre QUE ce qui s'applique presque certainement à tout agent IA de coaching digne de confiance, indépendamment de la fédération. Le reste va dans la déclinaison ICF.

**Session 3 — Produire la déclinaison CTF-ICF** (2-3 h)
- Source : `declinations/ctf-icf/source-material/` (tes anciennes KB).
- Outil : agent CTF Translator (à concevoir) ou rédaction manuelle assistée.
- Cible : `declinations/ctf-icf/declination/` (à créer) avec un fichier par section CTF.
- Préserver les références ICF V1.01 explicites.

**Session 4 — Préparer la communication ICF/EMCC** (1 h)
- Adapter `magif-ai-transmission-note.md` (livré séparément) pour ICF puis EMCC.
- Préparer un email cadre pour première prise de contact.

## Étape 5 — Décisions à prendre quand tu seras prêt

- **`ctf.energetics.systems`** : redirige vers `coaching-trust-framework.org` ou laisse mourir le sous-domaine. Une redirection 301 est la voie courtoise pour les liens existants.
- **Site multilingue** : actuellement le site rend tous les `.md` en HTML. Pour un sélecteur de langue propre EN/FR sur la home, c'est une session Claude Code séparée — pas urgent.
- **Issue templates** sur GitHub : créer des templates pour `bug`, `proposal`, `feedback (evidence log)`. Une session courte.
- **GitHub Discussions** : à activer si tu veux des conversations communautaires distinctes des issues. Recommandé maintenant que magif.ai est founding partner.
- **Branding visuel** : pas obligatoire en v1.0, mais un logo simple + une favicon améliorent la perception. À discuter quand tu auras du temps pour ça.

## Quelques rappels importants

- **Principe fondateur** inscrit en tête de chaque document clé : *Le bien commun prime sur toute organisation, y compris toute organisation qui pourrait un jour émerger pour porter ce standard*. Tout changement qui affaiblirait ce principe demande une RFC et une délibération publique.
- **Discipline lexicale** : pas de *meta-agent*, pas de *user*, pas de *marketplace* pour le rapport CTF↔contributeurs, pas de *score / rating / ranking*. Voir `CLAUDE.md` section vocabulaire.
- **Indépendance vs EGG** : EGG est *un* implémenteur de référence, pas l'éditeur du CTF. Le CTF a sa propre intégrité et son propre tempo.
- **Anglais comme langue principale du repo** : seule exception, l'EXPLAINER existe aussi en français (`EXPLAINER.fr.md`). En cas de divergence, l'anglais fait foi.

---

*Document de prise en main — non publié sur le site. Généré lors de la migration v1.0, avril 2026.*
