# CIO: The Rogue Game

A fantasy DevSecOps management roguelike embedded in GavinLujan.com and intentionally structured so it can later split into a standalone project.

## Product premise
You are the CIO of a living enterprise kingdom. Build and lead a multidisciplinary technology party while balancing mission delivery, cyber risk, reliability, people, politics, money, technical debt and executive trust.

## Design pillars
1. **D&D-flavored enterprise fantasy** — dragons, wizards, dwarves, elves, mimics, guilds, councils and dungeons map to recognizable technology-management problems.
2. **CIO decisions, not twitch combat** — encounters are won through prioritization, delegation, governance, architecture and calculated risk.
3. **DevSecOps is the party system** — Development, Security, Operations, Network, Infrastructure, Web, Product/Marketing, Finance and executive stakeholders have complementary abilities and tensions.
4. **Consequences compound** — technical debt, morale, trust, vulnerabilities and budget decisions persist through a run.
5. **ASCII-first** — terminal presentation is part of the identity, not a temporary placeholder.
6. **Portable core** — game state and rules should remain independent of GavinLujan.com presentation code.

## Architecture target
- `core/` pure game rules and state
- `data/` classes, encounters, items, campaigns
- `ui/` ASCII renderer and browser controls
- `saves/` browser-local persistence initially
- host page imports the game rather than owning game logic

## Ramp plan
### V0.2 — The Party
Character classes, stats, d20 checks, initiative-like incident rounds, party health/morale, technical debt and CIO attributes.

### V0.3 — The Dungeon
Procedural enterprise map: Dev Tower, SOC Keep, Network Forest, Infrastructure Mines, Cloud Citadel, Procurement Swamp, CAB Tower, Board Chamber and Audit Dungeon.

### V0.4 — Campaign
Quarterly objectives, project portfolio, hiring, vendors, budget cycle, compliance quests and boss incidents.

### V0.5 — Deep systems
Equipment, skill trees, spells/policies, AI companions, burnout, succession, architecture choices, cloud economics, reputation factions and persistent campaigns.

### Standalone threshold
Split into its own repository when the core engine, save format and campaign data no longer depend on the personal-site shell.

## Tone
Smart, funny and recognizable to technology professionals. Fantasy amplifies the absurdity of enterprise IT without turning the simulation into pure parody.
