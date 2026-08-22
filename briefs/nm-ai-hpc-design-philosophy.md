# NM AI HPC Design Philosophy

## Build the commons, not merely the machine

A powerful cluster can become an island. The New Mexico AI HPC concept begins with the opposite assumption: the durable asset is the **coordination system** that lets trusted institutions contribute, discover and consume computational capability without surrendering ownership, mission or data sovereignty.

### 1. Mission before market
Commercial brokerage is useful because it can increase utilization and help finance expansion. It is subordinate to public purpose. Emergency, scientific, infrastructure and sovereign workloads retain protected capacity and policy priority.

### 2. Compute is measurable infrastructure
GPU time should be treated with the rigor applied to other scarce infrastructure. Allocation must be observable and auditable. Compute tokens are therefore entitlements and accounting units representing measurable capacity, not speculative financial instruments by default.

### 3. The fabric is part of the computer
At large AI scale, accelerator performance without proportional interconnect creates expensive idle silicon. NVLink/NVSwitch governs scale-up behavior; XDR InfiniBand governs scale-out behavior. Topology, congestion, locality and collective communication are architectural concerns from day one.

### 4. Sovereignty through federation
Sovereignty does not require central ownership of every GPU. It requires enforceable control over identity, policy, data, scheduling, audit and mission priority. A federated model allows universities, laboratories, government and approved industry providers to participate while retaining institutional boundaries.

### 5. Move computation toward protected data
Data should not be copied merely because compute is elsewhere. When security and performance allow, place authorized workloads near governed datasets. Compute federation and data federation remain separate decisions.

### 6. Zero Trust from request to result
A valid network location is never sufficient authority. Every job must resolve identity, organization, entitlement, workload provenance, data classification, permitted destinations and execution policy before admission.

### 7. Human authority governs machine optimization
AI can improve placement, predict duration, forecast energy use and optimize queues. It does not silently rewrite eligibility, emergency priority or economic policy. Autonomous optimization operates inside explicit human-governed boundaries.

### 8. Design for graceful expansion
Begin with a useful production domain, but establish naming, identity, network, storage, scheduling, metering and provider interfaces that can grow to multiple racks and sites without architectural reinvention.

### 9. Prefer open interfaces over captivity
Use standards and portable workload interfaces wherever practical. Proprietary acceleration may be valuable, but control-plane data, accounting, governance and provider integration should remain exportable and understandable.

### 10. Measure value, not utilization alone
A cluster at 100% utilization can still be badly governed. Success includes mission outcomes, research throughput, time-to-result, equitable access, energy efficiency, security, reliability, provider economics and the ability to reserve capacity for New Mexico when it matters.

## Canonical statement

> Build enough compute to matter. Build enough fabric to make it move. Build enough governance to trust it. Build enough openness to let New Mexico grow around it.
