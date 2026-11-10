# Revive Aesthetics Clinic

Next.js App Router, strict TypeScript, Tailwind CSS and scoped GSAP/ScrollTrigger. All content is rendered on the server; only navigation, treatment selection and motion are client components.

## Run

`npm install`, then `npm run dev`. Local preview: http://localhost:3000.

`npm run lint`, `npm run typecheck`, `npm run build`, `npm start`.

## Content and release controls

- Business facts: `lib/config.ts`. Exact address, opening hours, Maps and WhatsApp remain unset.
- Two editable practitioner records are unverified and contain no public identities. Development shows explicit placeholders.
- Treatment catalogue: `lib/services.ts`. General pages require clinical copy review and further treatment-specific detail before public launch.
- Five complete articles: `lib/articles.json`. All are drafts. Preview at `/preview/journal/[slug]` in development only. Production returns 404 unless ENABLE_CONTENT_PREVIEW=true; never enable that on a public environment. Public `/journal/[slug]` deliberately returns 404 pending approval and a publishing implementation. Preview URLs are noindex and excluded from sitemap.
- Set NEXT_PUBLIC_SITE_URL to the confirmed domain and rebuild. Until then pages are noindex, robots disallows crawling and sitemap is empty. Canonicals and verified-facts clinic/breadcrumb JSON-LD activate with this domain. No ratings, reviews, invented address or physician markup.
- Asset provenance and replacement list: ASSET-INVENTORY.md. Stock imagery must be replaced or approved before launch. No patient results are represented.
- No contact form backend; booking is a genuine call/contact path.

## Design and motion

Ivory editorial layouts with local Cormorant Garamond, espresso text and muted rose accents. Hero text choreography and masked portrait intro; scroll reveals and a full-bleed consultation narrative with image parallax and sequential word emphasis. No pinning or scroll-jacking. Reduced-motion disables choreography and transitions; underlying content remains server-rendered and visible without JavaScript.

## Launch requirements

Confirm the two current practitioners, registration/credentials, bios and consented portraits; clinician approval of treatment copy and all five article drafts; exact address, hours and Maps URL; final domain; licensed/approved clinic and editorial photography. Optional: authentic consented results, verifiable reviews, validated international WhatsApp number, treatment pricing. No performance or clinical outcome claims should be inferred from this prototype.

## Validation limits

Production build and TypeScript passed. Browser review covered 360, 390, 768, 1024 and 1440 widths, menu opening and treatment selection. No Lighthouse/field CWV or full WCAG audit has been performed. Public deployment has not been performed; local preview is available.

## Online booking and reviews

`/online-consultation` explains availability confirmation, agreed payment, sharing the receipt on WhatsApp, and confirmation by the clinic. The fee is PKR 0 marked provisional in `lib/config.ts`. No payment processor is connected and no payment instructions are invented. Set the actual clinic-owned international number in NEXT_PUBLIC_WHATSAPP_NUMBER (country code, no local leading zero) and set NEXT_PUBLIC_WHATSAPP_VERIFIED=true, then rebuild/restart to enable the WhatsApp availability-request link. Until then the page displays a placeholder and a real telephone fallback.

`/reviews` renders only records from `lib/trust.ts` with permissionVerified=true and a source URL, attribution and review text. No testimonials, ratings or results are fabricated.

## Media and scrolling update

Journal and draft-article art use five custom SVG concept illustrations with matching subjects in `public/illustrations`. Layout and article text remain unchanged. `lib/media.ts` imports imagery statically, producing content-hashed asset URLs and immutable caching. Photo renders responsive sizes; only the hero is preloaded; other images use default lazy loading. Next optimizes raster responses as WebP at quality 75, and local raster imports provide blur placeholders. Native SVG artwork is lightweight and cached without raster conversion.

Removed Lenis wheel interception and the scroll mutation observer. Native wheel, touch, keyboard and scrollbar input control the page, with native smooth anchor links. Mobile menu scroll lock restores the previous overflow on close, route change and desktop resize. GSAP still handles scoped visual choreography.

Validated production responses: selected homepage hero WebP was 71,808 bytes with an immutable Cache-Control response and cache HIT on both requests; first Journal SVG was 1,554 bytes with immutable caching. These are local response measurements, not Lighthouse or field CWV claims. Browser checks confirmed menu-lock release on desktop resize and navigation, and working scrolling afterward.

## Mobile scroll and menu repair

Global CSS smooth scrolling is disabled so browser history, scroll restoration and animation refreshes do not repeatedly animate scroll positions. No wheel/touch listener prevents scrolling. Mobile section reveals use IntersectionObserver and short GSAP transform/opacity tweens, rather than continuously scrubbed ScrollTrigger scenes. ScrollTrigger ignores mobile browser-toolbar resizes; the remaining scrubbed scene runs only above 1100px.

The mobile menu is rendered in a body portal, separate from header transforms. It has its own opaque surface, numbered animated links, booking action, close button and focus trap. The underlying header is inert while it is open. Root overflow locking uses a single data attribute that is removed on close, route change, desktop breakpoint change, page restore and unmount. Header scroll styling uses useSyncExternalStore, updating React only when the threshold changes.
