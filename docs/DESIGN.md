---
name: Giovanni Safari & Coastal
colors:
  surface: '#fff8f5'
  surface-dim: '#e9d7cb'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#fdeade'
  surface-container-high: '#f7e5d9'
  surface-container-highest: '#f2dfd3'
  on-surface: '#231a13'
  on-surface-variant: '#554336'
  inverse-surface: '#392e26'
  inverse-on-surface: '#ffede3'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#006b2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e8642'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#95f8a7'
  tertiary-fixed-dim: '#79db8d'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#005323'
  background: '#fff8f5'
  on-background: '#231a13'
  surface-variant: '#f2dfd3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  section-padding: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style
The design system for this product embodies the concept of "Rugged Elegance." It targets high-net-worth adventurers seeking the thrill of the African wild paired with the exclusivity of coastal luxury. The UI must balance the heat of the savannah with the coolness of the deep ocean.

The aesthetic is **Modern Corporate with Tactile Luxury**, utilizing heavy whitespace, high-end photography, and subtle glassmorphism to create a sense of depth and prestige. It avoids the clutter of traditional travel sites, opting for a curated, editorial feel that mimics a luxury travel magazine.

## Colors
The palette is rooted in natural prestige. 
- **Savannah Gold (#D97706)**: Used for primary calls to action, highlights, and the minimalist leopard logo. It evokes the sun and the raw spirit of the safari.
- **Midnight Blue (#1E293B)**: Provides the premium weight. Used for typography and deep-section backgrounds to signify professional reliability.
- **Safari Green (#15803D)**: An accent color for success states, sustainability badges, and price highlights.
- **Cream (#FDFBF7)**: The primary canvas color, softer and more "organic" than pure white, providing a paper-like quality to the one-page experience.

## Typography
Typography is the primary driver of the "World-Class" feel. 
- **Playfair Display** handles all major headings. It should be used with tight tracking in display sizes to maintain a sleek, editorial look.
- **Montserrat** provides a clean, geometric contrast for body text and navigation. Its wider character set ensures high readability for itinerary details and package descriptions.
- **Labels** should always utilize uppercase styling with increased letter spacing to denote section headers or category tags (e.g., "SAFARI EXCURSION").

## Layout & Spacing
The design system utilizes a **Fixed Grid** approach for desktop (12 columns) to ensure content remains centered and readable, with generous horizontal margins of at least 80px. 

Vertical rhythm is intentionally "airy." Use a base-8 spacing scale, but prioritize large section gaps (128px on desktop, 80px on mobile) to separate the different stages of the user's journey. Imagery should often break the grid or use asymmetric layouts to mimic a high-end scrapbook or travel journal.

## Elevation & Depth
Depth is created through "Soft Atmosphere." 
- **The Navbar**: Uses a high-blur Glassmorphism effect (backdrop-filter: blur(20px)) with a subtle 1px border colored at 10% white.
- **Cards & Containers**: Utilize deep, diffused ambient shadows (e.g., `0 20px 50px rgba(30, 41, 59, 0.08)`) to make elements appear floating over the cream background.
- **Tonal Layers**: Dark sections should use Midnight Blue with slightly lighter Blue-Grey overlays for nested content to maintain a sense of hierarchy without relying on harsh lines.

## Shapes
Following the "2xl" requirement, this design system uses a generous corner radius. 
- **Standard Cards**: 1.5rem (24px) to soften the adventurous imagery.
- **Action Buttons**: Slightly less rounded at 0.75rem to maintain a sense of precision and professional intent.
- **Imagery**: Should always feature rounded corners; never use sharp 90-degree angles for photos of nature or landscapes.

## Components
- **Primary Buttons**: Background in Savannah Gold, text in Midnight Blue. On hover, apply a slight upward lift and a deeper shadow.
- **Interactive Chips**: For "Safari," "Coastal," or "Adventure" tags. Use a Safari Green stroke with a 5% opacity fill of the same color.
- **Package Cards**: Must feature a 16:9 aspect ratio image at the top. Use a "floating" price badge in the top right corner that overlaps the image and the card body.
- **Navigation**: The glassmorphic bar should be fixed. Links use Montserrat Medium with a thin Savannah Gold underline that appears on hover/active states.
- **Input Fields**: Soft cream backgrounds with Midnight Blue borders (20% opacity). Focus states should transition the border to full opacity Savannah Gold.
- **Imagery Placeholders**: Always use high-contrast, warm-toned photography. For Jet-skiing, emphasize the blue-to-gold transition of a sunset. For Safaris, emphasize the texture of the grasslands.