# Coaching Trust Framework (CTF)

> **The common good prevails over any organization, including any organization that might one day emerge to steward this standard.**

*This English version of the vision is authoritative. A French version is available in [VISION.fr.md](./VISION.fr.md). License [CC BY-SA 4.0](./LICENSE).*

Millions of people already confide their vulnerabilities to AI agents. They do not know whether these agents are acting as a coach, a therapist or a doctor, nor whether they respect the rules of those professions. And nothing today makes it possible to verify this over time.

This document starts from that **observation**, draws out the **problem**, then the **needs** that follow from it. The **Coaching Trust Framework** (CTF) emerges from these needs: an open framework for verifying, before and during deployment, that AI agents respect the norms of a profession. It starts with coaching and is meant to extend to any profession that has a framework of its own.

## 1. The observation

Psychological needs are growing, AI is already responding to them, and the boundaries between the helping professions are fading.

### Widespread psychological vulnerability

More than one billion people live with a mental health condition, according to data published by the WHO in September 2025 ([WHO](https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up)). The IHME puts the number at close to 1.2 billion, almost double the 1990 figure ([IHME](https://www.healthdata.org/news-events/newsroom/news-releases/global-mental-disorders-have-nearly-doubled-1990-now-affecting)). Most of these people remain poorly cared for.

### AI is already responding

People are turning to AI. According to Marc Zao-Sanders's study published in the Harvard Business Review in 2025, the leading use of generative AI is now "therapy and companionship" ([NJIT, summary of the HBR study](https://ldi.njit.edu/how-and-why-people-use-gen-ai)). OpenAI reports that around 0.15% of its weekly active users have conversations that include explicit indicators of suicidal planning, which amounts to more than one million people per week ([OpenAI](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/), [TechCrunch](https://techcrunch.com/2025/10/27/openai-says-over-a-million-people-talk-to-chatgpt-about-suicide-weekly/)).

Alongside general-purpose assistants, platforms allow any coach or any company to build a specialized agent in a few hours. Such an agent rests on three elements: a language model, instructions that define its posture (the prompt), and a knowledge base.

### Boundaries between professions are fading

In these exchanges, nothing distinguishes coaching, therapy, medical advice or simply listening. A single assistant plays all of these roles at once, without saying so. Our position: the major AI companies have little interest in drawing these boundaries, because an assistant that can do everything retains its users better than one that says "this is not my role".

Yet these professions are distinct. Coach, therapist, doctor: each has its own function, its own code of ethics, its own limits and responsibilities. Blurring these roles exposes the most vulnerable people to inappropriate support.

## 2. The problem

An AI agent is not a stable tool, and nothing today makes it possible to verify over time that it respects the norms of a profession.

### An AI agent drifts

Conventional software always does the same thing with the same data. An AI agent does not. Its behavior can change without anyone deciding it:

- **the provider updates the model**, and the same instruction no longer produces the same answers;
- **the creator changes the prompt or the knowledge base**, without measuring the effects elsewhere;
- **people draw it outside its scope**, through unexpected requests or manipulation;
- **a long conversation makes it slide**, and it gradually loses track of its framework.

An agent that conforms in March may no longer conform in June.

### Current answers are not enough

Federations have published reference texts, such as the ICF AI Coaching Framework. These texts say **what an agent should do**. They do not say **how to verify that it does it**, nor that it keeps doing it.

The model used to certify humans does not help either. A professional is certified once, sometimes reassessed, and then practices without any real observation of their practice. A coach or a doctor who drifts is invisible. A transcript chosen by the practitioner proves nothing. Applied to an agent that can change at any moment, this model guarantees almost nothing.

### What AI makes possible

For the first time, it is possible to **observe the practice itself**, rather than indirect indicators such as hours of training. The same situations can be replayed at will, every exchange can be evaluated, and drift can be detected as soon as it appears. Certification can become **continuous**.

## 3. The need

If this context and this problem are taken seriously, several needs follow naturally.

### Being able to recognize an agent that respects a profession

A vulnerable person, a company or a federation must be able to know whether an agent is acting as a coach, a therapist or a doctor, and whether it stays in that role. This requires professional norms translated into observable behaviors, and a way to recognize them.

### Building these norms in from the design stage

Checking after the fact is not enough. Those who create agents need these norms at the moment they design them, in their own tools, so they can adjust the prompt and the knowledge base before deployment.

### Putting an agent to the test in real situations

An agent must be confronted with the situations that matter: distress, manipulation, requests outside its profession. These situations must be playable and replayable. And they must look like ordinary use; otherwise an agent might behave differently when it is being tested. Dieselgate showed this risk in the automotive industry.

### Observing over time, not just once

Since an agent drifts, it must be observed continuously, on its real exchanges and not only on selected samples. This must also be possible without compromising people's confidentiality.

### Trusting the evaluator

Evaluation will largely be carried out by AI. It must therefore be robust, with several perspectives and with humans to calibrate it. And it must be carried by an independent third party: a platform cannot certify itself.

### An analogy: the airline pilot

These needs are not new. Aviation has long answered them: a pilot follows written procedures, regularly retakes checks in a simulator, and their real flights are analyzed. No one considers them licensed once and for all.

## 4. What follows: CTF

The Coaching Trust Framework is the answer that emerges from these needs. It does not start from a theoretical model: each of its building blocks corresponds to a need.

1. **Frame**, to build norms in from the design stage: the norms of the profession are made available to agent-building platforms.
2. **Test**, to confront the agent with real situations: simulated agents play standardized situations, some of them incognito, through the ordinary interface and from ordinary accounts.
3. **Monitor**, to observe over time: evaluation runs at the platform on all exchanges; only evaluation results, alerts and anonymized extracts leave it.
4. **Guarantee**, to trust the evaluator: several models evaluate, another arbitrates, humans calibrate, and an independent consortium validates the whole. Certification is tied to a precise version of the agent, and any change re-triggers the tests.

CTF is a **quality process**, like ISO 9001: it certifies respect for a framework, notably the scope of the profession, not excellence of practice. In return, platforms that adhere to it accept incognito tests, supervision of all exchanges and anonymization of data; end clients consent to the framed sharing of transcripts.

## 5. The postulates

CTF rests on four assumptions, which we state here so that they can be discussed and put to the test.

1. The norms of a profession can be translated into observable, and therefore testable, behaviors.
2. These behaviors can be evaluated reliably, by several AI models calibrated by humans.
3. Trust can only come from an independent third party: a platform cannot certify itself.
4. A certification is only worth something if it is tied to a precise version of the agent and renewed with every change.

## 6. Why the framework matters

Beyond AI, we share a conviction: much of today's loss of bearings stems from our relationship to frameworks and to those who uphold them.

A framework protects. It says what is expected, what is not, and where each person's role ends. But a framework is only respected if those who uphold it respect it themselves. An authority that imposes rules it does not apply to itself loses its legitimacy, and the framework with it.

CTF applies this principle to itself. Its rules are public, its tests are published by an independent consortium, and that consortium is itself subject to open and verifiable rules. Trust does not come from the authority of the certifier, but from the consistency between what it requires and what it imposes on itself.

## 7. An open project

Such a framework can only hold if it belongs to everyone.

CTF is open source (CC BY-SA 4.0): the ethics of a profession belong to no organization. Software publishers integrate it freely; the consortium guarantees the independence of verification.

We are looking for platform publishers, professional federations, researchers and supervisors willing to join the founding consortium.

**Contact:** Maxime Bui — maxime@simplex.coach — coaching-trust-framework.org

