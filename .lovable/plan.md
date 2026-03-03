
# Fix Mobile Layout Across All Pages

## Problem
The mobile version of the site has several layout and spacing issues making it look broken on phones: oversized gaps, text that's too large for small screens, sections with excessive padding, and footer/nav elements that don't adapt well to narrow viewports.

## Changes

### 1. Navbar (src/components/Navbar.tsx)
- Reduce logo and text sizing on very small screens
- Ensure mobile menu has proper spacing and scrollability for many links

### 2. Homepage (src/pages/Index.tsx)
- Reduce hero title from `text-4xl` to `text-3xl` on smallest screens
- Tighten the "Join Today" marquee padding on mobile
- Reduce stat number sizes from `text-3xl` to `text-2xl` on mobile (the "200,000+" can overflow)
- Reduce program card padding from `p-8` to `p-5` on mobile
- Tighten section gaps on mobile

### 3. Our Work (src/pages/OurWork.tsx)
- Reduce stat numbers from `text-5xl` to `text-3xl` on mobile (they overflow on small screens)
- Reduce the icon circle sizes on mobile
- Tighten spacing between stat items

### 4. Programs (src/pages/Programs.tsx)
- Reduce `gap-16` to `gap-8` on mobile in the two-column program layout
- Ensure the program descriptions don't have excessive padding on mobile

### 5. Contact (src/pages/Contact.tsx)
- Reduce `gap-16` to `gap-8` on mobile in the three-column layout
- Ensure form inputs don't overflow on narrow screens

### 6. Membership (src/pages/Membership.tsx)
- Tighten benefit card padding on mobile
- Ensure the long benefit text wraps properly

### 7. Sponsors (src/pages/Sponsors.tsx)
- Reduce tier card padding on mobile
- Stack sponsor tiers properly on narrow screens (already md:grid-cols-3, OK)

### 8. Footer (src/components/Footer.tsx)
- Reduce `gap-12` to `gap-8` on mobile
- Tighten padding on mobile

### 9. Global Styles (src/index.css)
- Reduce `section-padding` from `py-20` to `py-12` on mobile for tighter sections
- Slightly reduce container horizontal padding on very small screens

## Technical Details

Files modified:
- `src/index.css` -- reduce mobile section padding
- `src/components/Navbar.tsx` -- mobile sizing tweaks
- `src/components/Footer.tsx` -- mobile gap/padding reduction
- `src/pages/Index.tsx` -- mobile font sizes, gaps, card padding
- `src/pages/OurWork.tsx` -- stat number sizes, icon sizes
- `src/pages/Programs.tsx` -- gap reduction
- `src/pages/Contact.tsx` -- gap reduction
- `src/pages/Membership.tsx` -- card padding
- `src/pages/Sponsors.tsx` -- card padding
- `src/pages/About.tsx` -- stat sizing consistency
- `src/pages/Hiring.tsx` -- hero text sizing

All changes are Tailwind class adjustments only -- no visual design changes, no content changes.
