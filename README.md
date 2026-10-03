# Aider Lens

**Point. Understand. Act.**

Aider Lens is a camera-first mobile application that understands what the user is looking at, determines the object/document type automatically, turns it into structured digital information, and helps the user act on it.

## Product direction

The user opens the Lens and points the camera. The app decides what was scanned instead of asking the user to choose a mode first.

Initial intelligence routes:

- **Product** — barcode, ingredients, nutrition, product facts, explainable health guidance, and profile-aware guidance.
- **Receipt** — merchant, date, line items, subtotal/tax/total, purchase memory, return window, and warranty tracking.
- **Document** — plain-language classification, money/action required, deadlines, and reminders.
- **Living** — future playful experiences such as Baby Speak and Pet Speak, clearly positioned as entertainment rather than factual interpretation.

## Monorepo

```text
aiderlens/
├── apps/
│   ├── web/                 # Marketing website only
│   ├── ios/                 # Native SwiftUI iOS app
│   └── android/             # Native Jetpack Compose Android app
├── services/
│   └── api/                 # Cloudflare Worker API
├── packages/
│   └── api-contract/        # Shared OpenAPI contract
├── docs/
│   └── PRODUCT.md
└── .github/
    └── workflows/
```

### apps/web

Public product website for **aiderlens.com**. It advertises Aider Lens and directs visitors to the Apple App Store and Google Play. It is intentionally not the Aider Lens product itself.

### apps/ios

Native SwiftUI application. The camera and scanning layer will use Apple-native capabilities such as Vision/VisionKit where appropriate.

### apps/android

Native Android application built with Kotlin and Jetpack Compose. Android-specific camera and recognition capabilities will live here.

### services/api

Cloudflare Worker API shared by the mobile apps. It will own authenticated server-side workflows, scan routing, AI orchestration, product-data enrichment, and persistence integrations.

### packages/api-contract

OpenAPI specification that acts as the source of truth for communication between the mobile clients and the API.

## Core UX

```text
Open Lens
    ↓
Capture / live scan
    ↓
Automatic type detection
    ├── Product
    ├── Receipt
    ├── Document
    └── Living
    ↓
Structured result
    ↓
Save to Vault / Ask / Act
```

The user should not have to pick a scanner mode before capture.

## Primary navigation

- **Lens** — camera-first capture
- **Vault** — saved products, purchases, receipts, documents, warranties, and deadlines
- **Ask** — conversational intelligence over saved and current context
- **Profile** — preferences, household profiles, privacy, and subscription

## Local development

### Marketing web

```bash
npm install
npm run dev:web
```

### API

```bash
npm install
npm run dev:api
```

### iOS

Install XcodeGen once, then:

```bash
cd apps/ios
xcodegen generate
open AiderLens.xcodeproj
```

### Android

Open `apps/android` in Android Studio.

## Status

Foundation / initial monorepo scaffold.
