# DNS Domain Verification

Uses txt entries to verify the owner of a domain.

## How to use

1. Install `npm i @uelstudios/dns-verficication`
2. Import `const { generateVerificationToken, hasTxtEntry, hasToken } = require("npm i @uelstudios/dns-verficication");`

## Exported Functions

### generateVerificationToken

generates a verification token

### hasTxtEntry

validates if a domain has a specific txt entry

### hasToken

validates if a domain has a txt entry with a matching token

## Intended Flow

1. Generate token and hand it to the user.
2. User adds a txt entry with the token to the domains dns settings he wants to verify.
3. Run `hasToken` against the domain. The returned boolean will indicate if the domain has a txt entry with the correct token. The domain is now verified.

**Note:** If you verify a subdomain (e.g. sub.domain.com), that does not mean that the user owns the domain domain.com. Do multiple validatations for multiple domains.
