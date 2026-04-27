# Specification — Privacy policy
## CTF — What the privacy policy must contain

ICF Requirement: F.12.4 · F.12.7
GDPR Requirement: Art. 13 · Art. 14 · Art. 17
CTF Version: 1.0

---

> This file is provided by CTF. It defines the content requirements for the privacy policy that the integrator must produce and make accessible from the interface.
> The privacy policy itself is specific to each deployment — it depends on the platform, the LLM, and the publisher.
> Its legal validity must be verified by a legal professional before publication.

---

## Principle

The privacy policy is a legal and informational document. It complements the pre-session document — it is its detailed and enforceable version.

**Target audience:** any user who wishes to understand in detail how their data is processed.
**Format:** web page permanently accessible from the interface, or linked PDF document.
**Language:** primary deployment language. A translation may be required depending on applicable regulations.

---

## Mandatory content

### 1. Identity of the data controller

- Name of the publisher or organization (`NOM_EDITEUR`)
- Postal address
- Contact email (`CONTACT_EDITEUR`)
- If applicable: name of the Data Protection Officer (DPO)

---

### 2. Purposes and legal basis of processing

- Why data is collected: provision of the AI coaching service
- Legal basis: user consent (Art. 6.1.a GDPR)
- Data processed: conversational exchange content, user identifier
- Data not collected: list explicitly if relevant (e.g., health data in the GDPR sense)

---

### 3. Subprocessors and transfers

For each subprocessor (`PLATEFORME`, `LLM`):
- Entity name
- Role in the processing
- Country of server location
- Link to their privacy policy
- Transfer mechanism outside the EU if applicable (standard contractual clauses, adequacy decision)

---

### 4. Retention period

- How long conversational history is retained
- Conditions for automatic deletion if applicable
- Retention period for technical logs

---

### 5. User rights

For each right, explain how to exercise it concretely:

- **Right of access** (Art. 15 GDPR) — how to obtain a copy of the data
- **Right to rectification** (Art. 16 GDPR)
- **Right to erasure** (Art. 17 GDPR) — `PROCEDURE_EFFACEMENT`: native or manual via `CONTACT_EDITEUR`
- **Right to restriction** (Art. 18 GDPR)
- **Right to data portability** (Art. 20 GDPR)
- **Right to object** (Art. 21 GDPR)
- **Right to withdraw consent** at any time, without consequence

Contact to exercise these rights: `CONTACT_EDITEUR`
Response time: specify (max 30 days per GDPR)

---

### 6. Data security

- Technical measures in place (encryption in transit, restricted access)
- Organizational measures
- Procedure in case of data breach

---

### 7. Cookies and trackers

- If cookies are used: which ones, for what purpose, duration
- If no cookies: state this explicitly

---

### 8. Right of recourse

- The user may file a complaint with the competent data protection authority
- France: CNIL — cnil.fr
- Belgium: APD — autoriteprotectiondonnees.be
- Switzerland: PFPDT — edoeb.admin.ch
- Adapt according to the deployment country

---

### 9. Last updated date

- Date of the current version
- Notification procedures in case of modification

---

## What this policy is not

- A substitute for the pre-session document — it is more comprehensive, less readable, reserved for users who want the details
- A generic copy-pasted document — each deployment has its own subprocessors and conditions

---

## Validation checklist

Before publishing and entering `URL_CONFIDENTIALITE` in Configuration:

- [ ] Data controller identity is complete
- [ ] Subprocessors listed with their country and policy
- [ ] User rights explained with the concrete procedure
- [ ] `PROCEDURE_EFFACEMENT` consistent with `EFFACEMENT_NATIF` in Configuration
- [ ] Right of recourse mentioned with the competent authority for the deployment country
- [ ] Last updated date filled in
- [ ] Document reviewed by a legal professional or DPO before publication

---

*privacy-policy-spec.md — Coaching Trust Framework v1.0*
