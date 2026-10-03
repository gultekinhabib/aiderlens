# Aider Lens product foundation

## Principle

Aider Lens is **camera-first and mode-free**.

The user should never need to decide whether they are scanning a receipt, grocery product, letter, invoice, warranty, baby, or pet before capture. The product recognizes the input first and then presents the appropriate experience.

## Initial result types

### Product
- product identity and barcode
- ingredients
- nutrition
- plain-language ingredient explanations
- explainable health profile
- dietary / household profile compatibility
- pregnancy guidance only when backed by appropriate authoritative rules and context

### Receipt
- merchant
- transaction date
- line items
- subtotal, tax, total
- payment method when visible
- category
- return window
- warranty memory
- searchable purchase record

### Document
Always answer these first:
1. What is this?
2. Does it require money or action?
3. What is the deadline?

Then expose detailed summary, sender, amounts, important links, extracted actions and reminders.

### Living
Entertainment-oriented camera experiences.

Initial concepts:
- Baby Speak
- Pet Speak

These must not claim to translate or infer a baby's or animal's actual thoughts, emotions, medical state or intent.

## Navigation

- Lens
- Vault
- Ask
- Profile

## Web scope

The web app is a marketing and acquisition site only.

It should:
- explain the product
- show the Lens interaction
- show key use cases
- establish trust/privacy
- link to App Store and Google Play
- support SEO pages later

It should **not** reproduce the mobile scanning product.

## Mobile strategy

iOS and Android are native applications inside the same monorepo.

The backend and data contract are shared. Platform camera/scanner implementations remain native so each platform can use its strongest first-party capabilities.
