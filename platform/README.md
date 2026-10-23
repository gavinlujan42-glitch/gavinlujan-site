# ZiaWolf Continuous GRC Platform

Production-oriented Cloudflare Worker backend for the gavinlujan.com Continuous GRC prototype.

## Architecture

- Cloudflare Worker: authenticated API/control plane boundary
- D1: tenants, controls, signals, findings, risk snapshots, immutable-style audit events
- R2: raw evidence/signal payload objects
- Cron Triggers: scheduled risk snapshots at 12:00 and 21:00 UTC
- Cloudflare Access: recommended identity gate in front of `/api/*`
- GitHub Pages: public presentation layer remains separate from sensitive tenant data

## Bootstrap

1. `cd platform && npm install`
2. `npx wrangler login`
3. `npx wrangler d1 create ziawolf-grc`
4. Put the returned database ID into `wrangler.jsonc`.
5. `npx wrangler r2 bucket create ziawolf-grc-evidence`
6. `npm run types`
7. `npm run db:remote`
8. `npm run deploy`
9. Put the Worker behind Cloudflare Access before ingesting non-demo data.
10. Configure a custom API hostname and update the frontend to call it.

## API

- `GET /api/health`
- `GET /api/dashboard`
- `POST /api/signals`
- `POST /api/snapshot`
- `GET /api/audit`

Requests are tenant-scoped with `X-Tenant-ID`. In production, do not trust a browser-supplied tenant header by itself. Bind tenant identity to verified Cloudflare Access identity or another server-side authorization mapping before storing sensitive data.

Example signal:

```json
{"type":"threat","domain":"Controls","severity":"high","title":"Active exploitation intersects known exposure","source":"Threat Intel","confidence":92}
```

## Security gates before production data

- Cloudflare Access authentication and explicit tenant authorization
- rate limiting and request-size limits
- schema validation for all payloads
- secrets via Wrangler Secrets / Secrets Store, never source control
- retention/lifecycle policy for R2 evidence
- backup/export and recovery procedure for D1
- formal audit-log retention and tamper-evidence design
- authoritative control/framework mappings
- connector-specific least-privilege service credentials
- privacy/data classification review

The repository intentionally contains no credentials or Cloudflare account identifiers.
