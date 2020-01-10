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

