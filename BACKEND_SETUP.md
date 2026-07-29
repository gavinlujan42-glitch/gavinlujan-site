# ZIAWOLF Access Backend

The current GitHub Pages site provides the guest, registration, login, and contact user experience. GitHub Pages is static and cannot securely store accounts, passwords, consent records, sessions, or authenticator secrets.

## Recommended production architecture

Use a managed identity platform such as Auth0, Clerk, Supabase Auth, AWS Cognito, or Firebase Authentication, paired with a server-side API and database. Do not implement password storage or TOTP cryptography directly in browser JavaScript.

### Access roles

- `guest`: public pages only
- `pending`: registration submitted, awaiting approval
- `member`: approved public member materials
- `trusted`: protected project briefs
- `admin`: approve, revoke, and audit access

### Registration workflow

1. Visitor submits name, email, purpose, and explicit contact consent.
2. Backend validates input, rate-limits requests, and stores consent timestamp, source, policy version, and IP-derived security metadata where legally appropriate.
3. Backend emails a verification link.
4. Administrator approves or rejects the verified request.
5. Approved user creates a password or uses a passwordless sign-in link.
6. Backend creates a TOTP secret and displays the QR code once inside an authenticated HTTPS enrollment session.
7. User enters a six-digit TOTP code to confirm enrollment.
8. Backend generates single-use recovery codes and stores only hashed versions.

## Critical security rule

Do not email the authenticator QR code or raw TOTP secret. Anyone who obtains it can generate valid MFA codes. Display it once after identity verification and approval.

## Required API endpoints

- `POST /api/access-requests`
- `GET /api/access-requests/:id/verify`
- `POST /api/admin/access-requests/:id/approve`
- `POST /api/auth/login`
- `POST /api/auth/totp/enroll`
- `POST /api/auth/totp/confirm`
- `POST /api/auth/logout`
- `POST /api/contact`
- `GET /api/me`

## Minimum controls

- HTTPS only
- Secure, HttpOnly, SameSite cookies
- CSRF protection
- Strong password hashing through the identity provider
- TOTP secrets encrypted with a managed KMS
- Server-side authorization on every protected request
- Rate limiting and bot protection
- Email verification
- Audit logs for approval, login, enrollment, failed MFA, access, and revocation
- Recovery-code rotation
- Session expiration and revocation
- Privacy notice and consent withdrawal process
- Separate production secrets from source control

## Deployment note

A static GitHub Pages deployment can remain the public front end. Connect it to a serverless backend hosted on Cloudflare Workers, Vercel Functions, Netlify Functions, AWS Lambda/API Gateway, or Supabase Edge Functions. The protected project content must be returned by the authenticated backend, not embedded in the public HTML or JavaScript bundle.
