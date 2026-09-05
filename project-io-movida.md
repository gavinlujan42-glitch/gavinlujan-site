# PROJECT IO — MOVIDA
## La Movida in the Age of AI
### New Mexico Public Integrity Observatory

**Status:** Prototype / research methodology  
**Date:** 2026-09-05  
**Principle:** A relationship is not wrongdoing. A pattern is not proof. An allegation is not a finding. Every public dollar should have a traceable lineage from appropriation to measurable public benefit.

## Mission
MOVIDA is an evidence-first public-integrity intelligence methodology under PROJECT IO. It maps how public money, authority, relationships, procurement, regulation, litigation and outcomes move through New Mexico government. Its purpose is not to label people corrupt. Its purpose is to make fragmented public records analytically legible, expose control weaknesses, identify anomalies worthy of human review, and preserve the distinction between allegations and proven findings.

## Core analytic chain
**Appropriation → Budget → Procurement → Scope of Work → Deliverable → Invoice → Acceptance → Payment → Public Outcome**

For each link, capture the responsible authority, date, legal authority, source document, dollar value, related parties, approvals, exceptions, amendments and evidence.

## Core data domains
1. People and public offices
2. Agencies, boards, commissions and public bodies
3. Vendors, nonprofits, LLCs, PACs and other organizations
4. Appropriations, grants, contracts, purchase orders, invoices and payments
5. Campaign contributions and lobbying relationships
6. Appointments, sponsorships, votes, regulatory actions and administrative decisions
7. Audits, ethics matters, civil cases, criminal cases and judicial outcomes
8. Deliverables, acceptance evidence and measurable public outcomes
9. Spatial context: projects, facilities, parcels, districts, infrastructure and regulated resources
10. Time: the sequence of relationships and decisions

## Evidence firewall
Every assertion receives both an evidence level and disposition.

- Level 0 — reporting/research lead
- Level 1 — documented relationship
- Level 2 — formal allegation or complaint
- Level 3 — audit or administrative finding
- Level 4 — civil enforcement/action
- Level 5 — criminal charge/indictment
- Level 6 — adjudicated finding/settlement
- Level 7 — conviction/guilty plea

Disposition is separately recorded as pending, substantiated, disputed, dismissed, overturned, settled, convicted, acquitted or unknown. Network proximity never raises an evidence level by itself.

## Control tests
### Segregation of duties
Flag when the same person or tightly connected control group materially participates in multiple stages such as requesting funds, selecting a vendor, writing or approving the SOW, administering the contract, certifying an invoice and accepting a deliverable.

### Deliverable-to-dollar test
For every professional-services or consulting agreement record:
- total authorized value
- actual payments
- defined deliverables
- accepted deliverables
- acceptance authority
- objective evidence of completion
- milestones and due dates
- amendments/change orders
- measurable public outcome

A weak or absent deliverable is a governance/control signal, not proof of corruption.

### Temporal analysis
Measure whether contributions, lobbying, appointments, employment, appropriations, contract awards, accelerated decisions or regulatory outcomes occur in meaningful sequence. Sequence establishes a lead for review, not causation.

### Network analysis
Use degree centrality, betweenness centrality, community detection, recurring relationship analysis, ownership resolution, procurement concentration and cross-agency recurrence to identify unusually influential nodes and clusters.

## Initial calibration cases
### Stapleton / APS / Robotics
Known-positive criminal calibration case. Reconstruct the full chain from CTE appropriations and APS budget authority through procurement, sole-source justification, SOW, invoices, certification, payment, vendor expenditures and proven criminal outcome. Central research question: at what point could an integrated control system have surfaced the pattern before criminal investigators reconstructed it?

### Project Jupiter
Contested/pending cross-agency case. Map water and environmental permitting, economic-development relationships, lobbying, administrative timing, protests, litigation, agency responses and court actions. Do not convert allegations of preferential treatment into findings. Compare decision timing and procedure against materially similar applications.

### Survivors' Truth Commission / governance
Mission and governance case. Keep survivor outcomes at the center. Trace appropriation, expenditures, communications/professional-services contracts, SOWs, invoices, acceptance, investigative activity, subpoenas/referrals, survivor support and public deliverables. Measure mission execution separately from political controversy.

## Proposed technical architecture
- PostgreSQL/PostGIS authoritative relational and spatial store
- Object storage for source documents and immutable evidence
- Graph database or graph layer for relationships
- Full-text/vector search for document retrieval
- ETL/API connectors for public data sources
- Provenance ledger for every extracted assertion
- Human-review workflow for entity resolution and risk flags
- GIS interface for spatial relationships
- Timeline interface for temporal analysis
- AI assistant restricted to extraction, correlation, summarization, anomaly detection and hypothesis generation

AI does not determine guilt, ethics violations, illegality or contract acceptance. Those remain human/legal determinations.

## Prototype interfaces
1. **Orbit dashboard** — statewide integrity signals and case status
2. **Case room** — evidence timeline, actors, money, decisions and sources
3. **Money lineage** — appropriation-to-outcome Sankey/flow view
4. **Relationship graph** — people, agencies, vendors, lobbyists, contracts and decisions
5. **Contract X-ray** — SOW, deliverables, invoices, acceptance and outcome
6. **Spatial view** — project locations, districts, facilities, contracts, incentives and regulated resources
7. **Comparator** — compare processing time, exceptions, prices and outcomes against peer transactions
8. **Evidence ledger** — source, confidence, evidence level, disposition and human reviewer

## Immediate build backlog
- Ingest the Stapleton public contracting record and construct the first complete money/deliverable lineage.
- Acquire APS Purchase Agreement #15278, related professional-services agreements, amendments, invoices and acceptance evidence.
- Build the Project Jupiter cross-agency timeline and procedural comparator.
- Build a Truth Commission mission/outcome and spending scorecard.
- Define a New Mexico public-source registry covering procurement, Sunshine Portal, State Auditor, State Ethics Commission, Secretary of State campaign finance/lobbying, Legislature, courts and agency-specific records.
- Add entity-resolution rules for people, vendors, LLCs, addresses and aliases.
- Add a public methodology page explaining false-positive controls and right-of-response/correction practices.

## Governance safeguards
MOVIDA should be nonpartisan by architecture. Apply identical tests regardless of party, administration, agency, vendor or policy position. Preserve source documents. Publish methodology. Record corrections. Give contested subjects a response field. Never infer family relationships, beneficial ownership or wrongdoing without reliable evidence. Sensitive personal information unrelated to public duties is excluded.

## North-star question
**Can New Mexico trace a public dollar from legislative intent to an objectively verifiable public benefit, while showing who exercised authority at every consequential step?**

If not, MOVIDA identifies where the chain breaks and what evidence is needed to understand why.
