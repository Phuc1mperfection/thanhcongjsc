# Lovable Prompt: Product Detail Page UI Design

## Project Context
This is a Vietnamese construction/infrastructure company website (Thanh Cong JSC) that sells bridge bearings, expansion joints, noise barriers, and geotechnical solutions. The website uses React + Tailwind CSS with a premium, professional aesthetic.

## Design Requirements

### Page: Product Detail Page
**URL Pattern:** `/products/{categoryId}/{subcategorySlug}`  
**Example:** `/products/bridge-bearings/pot-bearings`

### Current Design Style (MUST PRESERVE)
- **Color palette:** Deep navy (`#1a1a2e`), gold/amber accents (`#d4a853`), white/off-white backgrounds, soft neutral grays
- **Typography:** Display font for headings (bold, uppercase tracking for labels), clean sans-serif for body text
- **Card style:** Rounded-2xl borders, subtle shadows (`shadow-(--shadow-card)`), hover lift effects
- **Animations:** Fade-in on scroll, smooth transitions (300-500ms), hover scale effects
- **Overall feel:** Premium, professional, warm, trustworthy — suitable for B2B engineering/construction

### Page Layout Structure

#### 1. Hero Section
- Full-width background image of the category (e.g., bridge image for bridge bearings)
- Gradient overlay: `bg-gradient-to-t {category.accent} mix-blend-multiply` + dark gradient from bottom
- Breadcrumb navigation: Home > Products > Category Name > Product Name
- Product icon in a white rounded container with shadow
- Product title (Vietnamese name) as large display heading
- English name as subtitle in lighter text
- Short description paragraph

#### 2. Main Content Area (2/3 width on desktop)
Sections in order:
- **Concept** — Lightbulb icon, heading "Khái niệm", descriptive paragraph
- **Features** — CheckCircle icon, heading "Đặc điểm nổi bật", bullet list with green check marks
- **Structure** — Layers icon, heading "Cấu tạo", numbered cards with gray background
- **Classification** (if exists) — Tag icon, heading "Phân loại", gold-tinted cards in 2-column grid
- **Variants** (if exists) — GitBranch icon, heading "Biến thể", card for each variant with name, description, feature list
- **Technical Highlights** — Zap icon, heading "Thông số kỹ thuật nổi bật", 2-column grid of highlight cards with star icons

#### 3. Sidebar (1/3 width on desktop)
- **Applications card** — MapPin icon, heading "Ứng dụng", bullet list
- **Catalogue Download card** — Gold gradient background, FileText icon, heading "Tài liệu kỹ thuật", download button
- **Contact CTA card** — "Cần tư vấn?" heading, description, contact button
- **Other Products in Category card** — List of other subcategories with icons, active state highlighted with gold border

### Design Guidelines
1. **Keep all existing content structure** — Do not remove any sections
2. **Maintain current color scheme** — Deep navy, gold, white, soft grays
3. **Preserve all interactive states** — Hover effects, transitions, link styles
4. **Keep breadcrumb navigation** with proper links
5. **Maintain responsive behavior** — Stack sidebar below content on mobile
6. **Keep the same icon system** using Lucide icons
7. **Preserve the gradient map** for category-specific colors:
   - Bridge Bearings: amber gradient
   - Expansion Joints: blue gradient
   - Noise Barriers: orange gradient
   - Geotechnical: slate gradient

### What to Improve / Enhance
- Make the hero section more immersive with parallax-like feel
- Add subtle micro-interactions on section scroll entry
- Improve visual hierarchy and spacing between sections
- Add a sticky sidebar on desktop for better navigation
- Enhance the "Other Products" list with hover preview effects
- Add smooth anchor scroll between sections
- Consider adding a "Back to products" floating button

### Technical Notes
- Built with React + TypeScript + Tailwind CSS
- Uses `@tanstack/react-router` for navigation
- Uses `lucide-react` for icons
- Data comes from a local `products.json` file
- The `slugify` function converts product names to URL-friendly slugs
- Category ID is used as the first URL segment (e.g., `bridge-bearings`)
- Subcategory slug is the second URL segment (e.g., `pot-bearings`)

---

**Please generate a polished, production-ready UI design for this Product Detail page that maintains the existing premium engineering brand identity while enhancing the visual experience.**