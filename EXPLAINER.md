# CTF Explained — Plain-Language Guide

*This document is for anyone who wants to understand the Coaching Trust Framework — coaches, federation officers, platform operators, researchers, journalists, curious humans. It assumes no prior knowledge of AI, software development, open-source projects, or technical standards. Where a technical term is unavoidable, it is explained on first use and listed in the glossary at the end.*

*If you already know the field and want the precise version, read the [README](./README.md) and the [normative document](./document/ctf-v1.0.md) instead.*

---

## Why this framework exists

AI agents are showing up in the field of coaching and personal development. Some of them are well-built and respectful of the people who use them. Some are not. As of today, there is no shared standard that says: *here is what a trustworthy AI coaching agent should look like, here is how to build one well, here is how to verify it actually works as it should*.

Without such a standard, two things tend to happen. First, every platform reinvents its own ethical answers, with very uneven results. Second, the people who consult these agents — sometimes in vulnerable moments — have no way to know whether they can trust what is being offered to them. Professional federations like ICF and EMCC have written important normative documents about AI in coaching, but a normative document by itself does not tell a software team how to translate principles into code, into testing, into ongoing oversight.

CTF is meant to fill this gap. It is a shared, free, open framework that any platform can adopt, that any federation can adapt, and that any practitioner can read and verify. It is built to evolve over time, through contributions from the field rather than through unilateral decisions.

## What CTF actually is

CTF is three things bundled together.

First, **a written framework** — a document that articulates the operational expectations any AI coaching agent should meet. Things like: how the agent presents itself to the user, how it handles distress, how transparent it is about its own limits, how the platform tests it before deployment, how the platform keeps watch over it once it is running. The framework is deliberately light at version 1.0 — only the things that almost certainly belong to any trustworthy AI coaching agent, regardless of which professional tradition it serves. The richness will grow over time, in a specific way described later.

Second, **a toolkit of seven helper agents**. These are small AI tools, themselves carefully designed, that assist humans in doing the work of building, testing, configuring, auditing and evolving coaching agents. They are not coaching agents themselves. They are quality engineering aids. Think of them as the way a serious carpentry workshop has not only saws and chisels but also rulers, squares, levels, and inspection lamps. The toolkit is what allows a platform to actually do the work that the framework describes.

Third, **a way to declare publicly that one is following the framework**. This can take the form of self-declaration, where the platform commits in writing on its own website. Or it can take the form of certification by a professional federation, once that federation has produced its own adapted version of CTF. Both pathways are valid; they address different audiences.

## A founding principle, written first

The whole project is governed by one principle, written at the head of every key document:

> *The common good prevails over any organization, including any organization that might one day emerge to steward this standard.*

What this means in practice. CTF was founded by an individual (Maxime). Over time, organizations may emerge — associations, cooperatives, foundations — to help maintain it. None of them, including any future organization founded by Maxime himself, has the right to close the framework, restrict its use, or claim it as private property. The framework was published from day one under a license that makes such enclosure legally impossible. The founding principle re-states this commitment in plain words, so that anyone reading the project understands its non-negotiable nature.

## How CTF grows: from below, not from above

This is the most counter-intuitive aspect of CTF, and the one that distinguishes it from many other standards.

Most standards work from the top down. A central authority writes a comprehensive document. The world is then expected to comply. CTF works the other way around. The central document — what we call the **common core** — is intentionally minimal at version 1.0. It contains only the operational expectations that almost certainly apply to every trustworthy AI coaching agent.

The richness of the framework lives in **declinations**. A declination is an adapted version of CTF that integrates the specific requirements of a professional federation. So there will be a CTF-ICF, which combines the common core with all the specific expectations of the International Coaching Federation. There will be a CTF-EMCC for the European Mentoring and Coaching Council. There may be others.

Now here is the important mechanism. As declinations get produced and used in the real world, we will start to notice that some requirements are present in several declinations. ICF and EMCC may both have very similar requirements about, say, how an agent should handle distress. When the same requirement shows up across multiple declinations, it stops being specific to any one tradition. It becomes a candidate to be **promoted into the common core**. The common core grows over time, but only by accumulating what has been independently validated as common to multiple federations.

This is what we call the **inductive cycle**. We do not decide in advance what is universal. We observe what turns out to be common in practice, and we promote it once that commonality is documented.

This way of building a standard has three virtues. It is honest — it does not pretend to know in advance what is universal. It is collaborative — it lets each federation contribute its specific tradition without anyone having to compromise their identity. And it is evidence-based — promotions to the common core are motivated by observed convergence, not by anyone's opinion.

## Who plays what role

CTF involves several distinct roles. Understanding them helps make sense of the documents in the repository.

**The founder** is the person who initially authored CTF. The founder is recognized in the license attribution and in the project's documentation. Founder status is a recognition of origin; it does not grant ongoing power.

**The caretaker** (technical name: *custodian*) is the person responsible for keeping the project running on a day-to-day basis. They process proposals for change, publish new versions, keep the repository in good order. The current caretaker is the founder. Over time, the caretaker role may be transferred or shared. The caretaker is not the owner of CTF; they are its housekeeper.

**Contributors** are individuals or organizations who propose evolutions of the framework, write or improve helper agents, translate documents, document edge cases. Anyone can become a contributor. There is no membership fee.

**Adopters** are platforms, organizations or independent practitioners who implement CTF in their AI coaching practice. They publicly declare their conformance. Adopters and contributors can overlap: a platform can both implement CTF and contribute to its evolution.

**Federations** are professional bodies like ICF and EMCC. They occupy a specific role: they are the authors (or at least the validators) of declinations specific to their professional sphere. Once a declination has been validated by a federation, the federation becomes the certification authority for platforms operating in its sphere.

**The advisory circle** (technical name: *consultative council*) is a non-binding group that will be formed once two or more federations are engaged with CTF. Its function is to ensure that the evolution of the framework reflects the diversity of professional traditions, rather than the perspective of one founder or one early-adopting platform.

**The scientific panel** is a non-binding group of researchers who review the quality of empirical evidence cited in proposals for change. It includes specialists in AI ethics, evidence-based coaching, and methodology. It is non-binding but its opinions are published alongside decisions.

**Certified supervisors** are humans qualified and independent of the platforms whose agents they review. They participate in the audit of deployed AI coaching agents, alongside the platform's own team and the CTF Audit helper agent. Supervision is tripartite by design — three parties looking together at the same agent.

## How decisions get made: the proposal process

Any change to CTF — to the common core, to a helper agent, to the certification scheme, to the governance — goes through a public proposal process inspired by the way technical standards have been built for decades on the internet.

Anyone can submit a **proposal for change** (the technical name is *Request For Comments*, or RFC). The proposal is published in the repository. There is then an **open feedback window** of thirty to sixty days during which anyone can comment, criticize, suggest improvements. After the feedback window, the caretaker publishes a documented decision — accepted, accepted with changes, rejected, or sent back for more work. Accepted proposals are integrated into the next version of CTF.

When the advisory circle exists, substantive proposals are also reviewed by the circle for non-binding advice. When the proposal cites empirical evidence (which all substantive proposals must do), the scientific panel reviews the quality of that evidence.

There is one type of proposal that receives extra rigor: proposals to **promote a requirement into the common core**. These can only be accepted if the requirement is already present in at least two independent declinations. This is a deliberate constraint borrowed from technical standards practice: we never decree that something belongs to the common, we only ratify what has shown itself to be common in actual use.

## Empirical traces are a structural object

Because CTF is inductive, the observations and lessons learned from real-world use are not an afterthought — they are central to how the framework evolves. This is a deliberate choice: a framework that claims to be evidence-based has to actually treat evidence as a first-class object.

Three things follow from this commitment.

First, there is a **methodology document** that describes how observations are collected, what counts as a valid trace, and how different kinds of evidence are weighted. This is not a Ph.D. thesis; it is a practical guide that allows adopters and reviewers to know what good evidence looks like in this context.

Second, there is a **standardized format** for adopters, supervisors and researchers to send their observations. Without a shared format, observations would arrive in dozens of different shapes and would not be comparable. With one, they can be aggregated, indexed, retrieved.

Third, there is a **public evidence log** that compiles, version by version, what has been documented. The log is open: anyone can read it, anyone can cite it, anyone can challenge an entry. It is one of the things that makes CTF auditable as a project, not just as a set of rules.

## How a platform actually uses CTF

Concretely, a platform that wants to implement CTF goes through the following steps.

It chooses which version it implements: either the generic common core (suitable for early adopters and for situations where no declination yet covers the platform's domain), or a specific declination such as CTF-ICF (when one is available and relevant).

It uses **CTF Designer** during the design phase of a new coaching agent. Designer is a helper agent that walks the platform team through the design choices CTF requires — scope, posture, knowledge sources, refusal behaviors, escalation paths, transparency disclosures. The output is a structured design document that captures every constitutive decision. The design produced by Designer is **portable** — it captures *what* the agent should do, independently of *where* it is deployed.

It uses **CTF Test Plan** to produce a test plan from the design document. The test plan is detailed enough that humans or automated tools can execute the tests and report pass/fail.

It uses **CTF Robustness** to stress-test the agent against adversarial and edge-case scenarios — distress simulations, manipulation attempts, off-scope drift, anthropomorphizing pressure, and other categories. The output is a robustness report that may lead to design revisions.

It uses **CTF Config** to produce the deployment configuration — the platform-specific variables that turn a portable design into an actual running agent on a target platform: choice of foundation model, language, regional legal disclosures, integration with the platform's UI, format of audit transcripts. Designer and Config split work cleanly: Designer produces the *what*, Config produces the *how here*. The same design can be re-deployed on another platform by re-running Config without re-running Designer.

Once the agent is deployed, the platform runs **CTF Audit** periodically. The audit examines anonymized transcripts of real interactions and produces structured reports about whether the agent is still behaving the way the design said it should. The audit is run jointly by three parties: the agent's designer (a human), an independent certified supervisor, and the CTF Audit helper agent. None of the three can let the agent drift in their own direction without the other two seeing it.

The platform publishes a self-declaration of conformance on its own website. It adds itself to the public list of adopters in the CTF repository. It periodically sends its observations through the standardized feedback format. When the foundation models the platform uses are updated, the cycle repeats.

If the platform operates in a federation's sphere (e.g. it serves ICF-credentialed coaches), it can pursue federation-led certification once the federation has approved its CTF declination.

## How a federation engages with CTF

A federation has two ways to engage with CTF, and may take either one or both.

The first way is to **author or endorse a declination**. The federation can produce its own CTF declination from scratch (federation-led pathway). Or it can review and validate a declination that a CTF community member has produced from the federation's normative documents (community-led pathway). In both cases, the federation has the final word on the content of its declination. Once the declination is approved, the federation becomes the certification authority for platforms in its sphere.

The second way is to **contribute to the common core**. Through the proposal process, federations can propose that requirements present in their declination be promoted into the generic CTF, where they would benefit other federations and adopters. This is the upstream mechanism described earlier.

These two ways are complementary. A federation that authors a declination naturally surfaces contributions for the common core. A federation that contributes to the common core gains familiarity with the framework that helps its own declination work.

CTF asks nothing financial of federations. There is no fee, no exclusive partnership, no required commitment. Engagement is a contribution to a public good, not a transaction.

## What CTF is not

A few clarifications, since the field is full of things that look superficially similar.

CTF is **not a coaching method**. It does not tell coaches how to coach. It tells AI coaching agents (and the platforms that build them) how to behave responsibly when AI is involved.

CTF is **not a substitute for human professional certification**. A human coach still needs to be trained, supervised and credentialed by a professional federation. CTF concerns the AI side of practice.

CTF is **not a marketplace**. It does not connect coaches with clients, does not take a cut of any transaction, has no commercial interest in any platform.

CTF is **not owned by anyone**. The license guarantees this in legal terms; the founding principle states it in plain terms. No organization can take CTF private.

CTF is **not finished**. Version 1.0 is a starting point. It will evolve as declinations get produced and as evidence accumulates. The mechanism for that evolution is part of the framework itself.

## Where to go from here

If you are **curious** and want to read more, the [normative document](./document/ctf-v1.0.md) is the canonical text of the common core, and the [README](./README.md) is the technical entry point.

If you are a **coach** considering whether AI agents using CTF could be helpful in your practice, read the description of CTF-ICF or CTF-EMCC declinations once they are available. Until then, ask the platforms you consider whether they self-declare conformance to CTF, and check the public adopter list.

If you are a **platform operator**, the practical pathway is described in `certification-scheme/self-declaration.md` and the helper agents in `tools/`. Begin with the design phase of a new agent (using CTF Designer); the rest of the cycle follows.

If you represent a **federation**, the dedicated document is `certification-scheme/federation-pathway.md`. It describes both authoring a declination from scratch and validating a community-led declination of your standards.

If you want to **contribute** in any other way — proposing changes, translating, documenting edge cases, reviewing — `CONTRIBUTING.md` describes how.

---

## Glossary

This glossary defines the technical terms that appear across the CTF documentation, in the same plain register as the rest of this guide.

**Adopter** — A platform, organization or individual practitioner who publicly commits to following CTF. Adopters are listed in `ADOPTERS.md`.

**Advisory circle** *(also: consultative council)* — A non-binding group, formed once two or more federations are engaged with CTF, that provides advisory opinions on substantive proposals. Its purpose is to ensure that the evolution of the framework reflects the diversity of professional traditions.

**Agent** *(in the AI sense)* — An AI program that interacts with a user (or with another tool) by receiving an input and producing a response. CTF distinguishes *coaching agents* (deployed by platforms to interact with people in coaching contexts) from *helper agents* (deployed within the CTF toolkit to assist humans in building coaching agents).

**Anonymization** — The transformation of data so that the identity of the people involved cannot be recovered. CTF requires that audit transcripts be anonymized by construction — not after the fact, but in the data pipeline before they reach any reviewer.

**Audit** — The process by which a deployed coaching agent's actual behavior is checked against the expectations declared in its design document. CTF Audit is the helper agent that supports this process.

**Caretaker** *(technical name: custodian)* — The person responsible for keeping the project running on a day-to-day basis. Currently the founder. The caretaker is not the owner of CTF.

**Certification** — A public declaration, made or validated by a recognized authority, that a platform conforms to CTF. CTF supports two pathways: self-declaration (by the platform itself) and federation-led certification (once a federation has approved its declination).

**Certified supervisor** — A human, qualified and independent of the platform, who participates in the audit of a deployed coaching agent alongside the platform's designer and the CTF Audit helper agent.

**Common core** — The generic part of CTF — what is meant to apply to any trustworthy AI coaching agent regardless of professional tradition. Initially minimal, the common core grows over time by absorbing requirements that turn out to be common across multiple declinations.

**Contributor** — An individual or organization who proposes evolutions of CTF or otherwise contributes to its work. Contributors are listed in `CONTRIBUTORS.md`.

**Custodian** — See *caretaker*.

**Declination** — An adapted version of CTF that integrates the specific requirements of a professional federation. CTF-ICF, CTF-EMCC, etc. Declinations live in the `declinations/` folder of the repository.

**Evidence log** — A public, versioned record of the empirical observations that motivate CTF's evolution. Lives in `validation/evidence-log.md`.

**Federation** — A professional body that establishes standards for coaching practice. Examples: International Coaching Federation (ICF), European Mentoring and Coaching Council (EMCC).

**Foundation model** — The underlying large language model on which an AI agent is built. Coaching agents typically run on top of a foundation model (e.g. one of the well-known LLMs from various providers). When the foundation model changes, the agent's behavior may change subtly and the audit cycle should be re-run.

**Founder** — The person who initially authored CTF. Recognized in the license attribution. Founder status does not grant ongoing power.

**Helper agent** — One of the seven AI tools that make up the CTF toolkit. Helper agents are sollicited tools, not conversational companions. They include CTF Translator, CTF Converger, CTF Designer, CTF Test Plan, CTF Robustness, CTF Config, CTF Audit.

**Implementation** — A concrete coaching agent (or set of agents) built by a platform, said to "implement CTF" if it follows the framework's expectations.

**Inductive** — Building from observation upward, rather than from principle downward. CTF is inductive in that the common core grows by absorbing what has been observed to be common across declinations.

**Knowledge base (KB)** — The structured set of texts that an AI agent draws on to formulate its responses. For a CTF helper agent, the KB includes the relevant CTF documents and any specific reference material.

**License (CC BY-SA 4.0)** — The specific Creative Commons license under which CTF is published. It allows free use including commercial use, requires attribution to the founder, and requires that any republication or modification of the CTF text be shared under the same license. It does not propagate to platforms that merely implement CTF in their own products.

**Multiple implementations rule** — The rule, borrowed from technical standards practice, that no requirement may be promoted into the common core unless it is already present in at least two independent declinations.

**Norm / Normative document** — The written part of CTF that articulates expectations. The common core is a normative document; each declination is also a normative document.

**Platform** — An organization that builds and deploys AI coaching agents.

**Posture** — The overall stance an AI coaching agent takes toward the user. CTF expects coaching agents to maintain a sollicited posture (the user invokes a tool with a context) rather than a relational or companion posture.

**Promote / Promotion** *(also: upstream / upstreaming)* — The act of moving a requirement from one or more declinations into the common core. Promotions are decided through the proposal process and require evidence of cross-declination convergence.

**Proposal for change** *(technical name: RFC, Request For Comments)* — The formal mechanism by which anyone can propose an evolution of CTF. Submitted as a document, opened for public feedback, and decided by the caretaker.

**Robustness testing** — The activity of stress-testing an agent against adversarial and edge-case scenarios, to surface failure modes that ordinary testing misses. CTF Robustness is the helper agent that supports this activity.

**Scientific panel** — A non-binding group of researchers who review the quality of empirical evidence cited in proposals for change. Its opinions are published but do not, by themselves, decide.

**Self-declaration** — The pathway by which a platform publicly commits to following CTF without involving any external authority. The lightest form of conformance, and currently the default.

**ShareAlike clause** — The clause of the CC BY-SA 4.0 license that requires republications or modifications of CTF to be released under the same license. It is what prevents anyone from forking CTF into a closed, proprietary version.

**Sollicited (vs. conversational)** — A posture in which the agent is invoked with a specific context to produce a specific response, rather than entering into an ongoing relational exchange. CTF requires its agents (both coaching and helper) to be sollicited, not conversational.

**System prompt** — The configuration text given to a foundation model to define how an agent should behave. The system prompts of CTF helper agents are published in the repository as part of the toolkit.

**Test plan** — A structured set of tests that verify whether an agent behaves as its design document declares. CTF Test Plan is the helper agent that produces test plans.

**Tripartite supervision** — The audit model in which three parties — the agent's human designer, an independent certified supervisor, and the CTF Audit helper agent — examine the agent jointly.

**Upstream / Upstreaming** — See *promote*.

---

*This explainer is itself published under CC BY-SA 4.0. You may translate it, adapt it, share it, with attribution to the founder of CTF.*
