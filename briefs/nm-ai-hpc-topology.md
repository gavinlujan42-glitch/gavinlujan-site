# NM AI HPC Fabric Topology

**Architecture companion to:** NM AI HPC Coordination Fabric  
**Date:** 22 August 2026

## Logical topology

```text
AUTHORIZED USERS / AGENCIES / RESEARCH / COMMERCIAL
                         |
                 API + IDENTITY EDGE
                         |
              +----------v----------+
              | NM AI CONTROL PLANE |
              | policy / scheduler  |
              | tokens / metering   |
              +----------+----------+
                         |
              capacity + job intent
                         |
        +----------------+----------------+
        |                                 |
+-------v--------+                +-------v--------+
| SLURM HPC      |                | KUBERNETES     |
| batch/training |                | inference/API  |
+-------+--------+                +-------+--------+
        |                                 |
        +----------------+----------------+
                         |
             COMPUTE FABRIC / NCCL
                         |
             QUANTUM-X800 XDR IB
                 800 Gb/s class
                         |
          +--------------+--------------+
          |                             |
+---------v---------+         +---------v---------+
| GB300 NVL72 #1   |         | GB300 NVL72 #N   |
| 72 GPU domain    |         | 72 GPU domain    |
| NVLink/NVSwitch  |         | NVLink/NVSwitch  |
+---------+---------+         +---------+---------+
          |                             |
          +--------------+--------------+
                         |
                    DATA FABRIC
                         |
        +----------------+----------------+
        |                |                |
   NVMe-oF /         Parallel FS      Object tier
   flash tier         / datasets       / archive

SEPARATE MANAGEMENT PLANE
BMC/OOB -> provisioning -> telemetry -> SIEM/SOC -> configuration
```

## Physical design intent

### Scale-up
Each GB300 NVL72-class domain uses NVLink/NVSwitch for tightly coupled GPU communication. Treat the scale-up domain as a computational unit for large distributed models.

### Scale-out
Connect scale-up domains through ConnectX-8 and Quantum-X800-class XDR InfiniBand. Target a rail-optimized non-blocking Clos/fat-tree architecture for high-value distributed training and HPC workloads.

### Storage
Keep bulk data traffic from contending with the primary GPU collective-communications fabric. Use high-throughput parallel storage, NVMe tiers and GPUDirect-capable data paths where justified.

### Management
Maintain an isolated management plane for BMC/OOB access, provisioning, observability, vulnerability management, configuration and incident response.

## Security zones

```text
PUBLIC / PARTNER EDGE
        |
   API GATEWAY
        |
IDENTITY + POLICY
        |
WORKLOAD ADMISSION
        |
+-------+-----------------------+
|                               |
RESTRICTED COMPUTE          GENERAL COMPUTE
|                               |
PROTECTED DATA              APPROVED DATA
|                               |
+---------------+---------------+
                |
        METERING / AUDIT
                |
        SECURITY TELEMETRY
```

No workload crosses zones solely because capacity is available. Data classification, organizational authority, workload provenance and policy determine placement.

## Expansion pattern

```text
PHASE 0      Development / validation environment
    |
PHASE 1      Initial GB300-class production domain
    |
PHASE 2      Multi-domain XDR InfiniBand fabric
    |
PHASE 3      Federated institutional providers
    |
PHASE 4      Statewide compute exchange
    |
PHASE 5      Multi-site sovereign AI/HPC fabric
```

## Topology principle

**The network is not plumbing around the computer. At AI/HPC scale, the fabric is part of the computer.**
