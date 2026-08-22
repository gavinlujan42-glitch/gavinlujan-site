# NM AI HPC Coordination Fabric

**Status:** Concept brief / architecture control  
**Date:** 22 August 2026

## Executive thesis

New Mexico should treat advanced AI/HPC compute as strategic infrastructure: discoverable, schedulable, metered, governed and shareable across authorized public, research and commercial participants.

The proposed control plane coordinates GB300-class compute, high-speed fabrics, storage and federated partner capacity. It brokers authorized compute airtime through auditable **compute-token allocations**. A compute token is an accounting and entitlement unit, not inherently a cryptocurrency or speculative asset.

> Compute is the resource. Tokens are the allocation mechanism. Policy is the governor. The network is the fabric. AI assists the scheduler. New Mexico is the domain.

## Reference compute fabric

The flagship tier uses GB300 NVL72-class systems. Inside each scale-up domain, GPUs communicate over NVLink/NVSwitch. Scale-out traffic between compute domains uses ConnectX-8 and XDR InfiniBand through Quantum-X800-class switching, with a non-blocking Clos/fat-tree target for tightly coupled AI/HPC jobs.

The architecture separates three planes:

1. **Compute fabric:** NVLink scale-up plus 800 Gb/s-class InfiniBand scale-out for GPU east-west traffic.
2. **Data fabric:** high-throughput Ethernet/InfiniBand and NVMe-oF/parallel storage with GPUDirect-capable paths where appropriate.
3. **Management fabric:** physically/logically isolated OOB management, provisioning, telemetry, security and orchestration.

## Control plane

Users request capability rather than a particular rack: GPU type/count, memory, duration, data classification, priority and locality. The control plane performs identity verification, authorization, policy evaluation, capacity discovery, placement, reservation, execution, metering and settlement.

Core services include:

- Identity, federation and Zero Trust policy
- Slurm for HPC/batch scheduling
- Kubernetes for services and inference
- Capacity registry and provider federation
- Policy-aware scheduler
- Token ledger and allocation service
- Usage metering and chargeback/showback
- Audit/event ledger
- Model and dataset governance
- Energy-aware placement
- Open APIs for authorized consumers and providers

## Compute-token model

Tokens represent rights to measurable resources. Pricing or allocation weights can incorporate GPU model, GPU-hours, memory, CPU, storage, network, energy, priority and security requirements.

Recommended classes:

- **Mission:** critical government, emergency, cyber, water and infrastructure workloads
- **Research:** universities, laboratories and approved scientific work
- **Innovation:** startup and economic-development allocations
- **Commercial:** paid surplus-capacity access
- **Community:** education, tribal partnership and workforce programs
- **Priority:** policy-controlled accelerated scheduling

Commercial demand must never displace the **NM Sovereign Compute Reserve**.

## Sovereign compute reserve

A defined percentage of capacity remains outside ordinary brokerage for wildfire, drought, water-resource forecasting, cyber incidents, emergency management, critical infrastructure, public safety and other sovereign missions. Emergency policy may preempt lower-priority workloads according to published rules.

## Settlement

Every job creates an auditable record containing requester, provider, resource type, allocation, actual consumption, GPU-hours, storage/network/energy consumption, token debit, provider credit, security classification and immutable audit references.

This supports grant accounting, interagency showback/chargeback, research allocations and commercial settlement without requiring a public cryptocurrency.

## Federation philosophy

Institutions retain ownership and administrative control of their infrastructure and data. Approved excess compute may be advertised to the coordination fabric. Compute federation is separate from data federation: a provider can contribute compute without contributing datasets.

The scheduler should bring authorized computation to protected data when feasible, enabling federated sovereign AI while preserving institutional boundaries.

## Design principles

1. **Mission before market.** Brokerage exists to strengthen public and research capacity, not consume it.
2. **Policy before placement.** No job reaches compute until identity, authority and data policy are resolved.
3. **Fabric before fleet.** Fast interconnect and topology are first-class architecture, not accessories.
4. **Measure everything.** Allocation, utilization, latency, energy and cost must be observable.
5. **Federate rather than centralize by default.** Coordination can create statewide capacity without requiring one owner of every GPU.
6. **Separate compute, data and management planes.** Performance and security both improve when responsibilities are explicit.
7. **Open interfaces, controlled participation.** Avoid architectural captivity while maintaining rigorous provider certification.
8. **Human authority remains explicit.** AI may optimize scheduling but policy, eligibility, emergency priority and economic rules remain governed decisions.

## Roadmap

### Phase I: Foundation
Deploy initial GPU, fabric, storage, Slurm/Kubernetes, identity, telemetry and metering.

### Phase II: Accounting
Measure GPU-hours, CPU, memory, storage, network and energy. Issue internal compute credits.

### Phase III: Federation
Connect approved institutional capacity through standardized discovery, submission, policy and accounting APIs.

### Phase IV: Exchange
Enable approved providers to advertise surplus capacity and authorized consumers to obtain allocations under transparent pricing and governance.

### Phase V: Autonomous coordination
Use AI-assisted scheduling to optimize performance, cost, energy, locality and mission priority while preserving deterministic policy controls and human accountability.

## Strategic outcome

The objective is not merely a supercomputer. It is a statewide coordination layer through which heterogeneous New Mexico AI/HPC resources can operate as an auditable, policy-governed computational commons.
