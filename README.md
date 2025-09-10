URU.zone Website
A modern, responsive website for URU.zone - AI coaching + strength wearable for lifters.

🚀 Tech Stack
Next.js 15 - React framework with App Router
Tailwind CSS 4 - Utility-first CSS framework
TypeScript - Type safety and better DX
Lucide React - Beautiful, customizable icons
Class Variance Authority - Component variant management
📁 Project Structure
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
├── components/
│   ├── ProductSlideshow.tsx # Full-screen product hero with slideshow
│   ├── ComparisonTable.tsx  # Feature comparison table
│   └── TestimonialGrid.tsx  # Customer testimonials
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles and Tailwind imports
🛠️ Setup Instructions
Install dependencies
bash
npm install
Add your images Place the following images in the public/images/ directory:
URU_Wristband.png
URU_Wristband-2.png
URU_Wristband-3.png
URU-app-1.png
URU-app-2.png
URU-app-3.png
UruFace.png (for logo)
Start the development server
bash
npm run dev
Open your browser Navigate to http://localhost:3000
🎨 Design Features
Dark Theme - Modern dark aesthetic with zinc color palette
Responsive Design - Mobile-first approach with breakpoints
Smooth Animations - Subtle transitions and hover effects
Product Slideshows - Auto-rotating image galleries for products
Accessibility - WCAG compliant with proper ARIA labels
Performance Optimized - Next.js Image optimization and lazy loading
📱 Responsive Breakpoints
Mobile: < 768px
Tablet: 768px - 1023px
Desktop: 1024px+
Large Desktop: 1200px+
🎯 Key Components
ProductSlideshow
Full-screen hero sections with rotating product images and overlay content.

ComparisonTable
Feature comparison between URU.zone and competitors with visual status indicators.

TestimonialGrid
Customer testimonials in a responsive grid layout.

🚀 Performance Optimizations
Next.js Image component for optimized images
Lazy loading for below-the-fold content
Reduced motion support for accessibility
Optimized fonts with display swap
Minimal JavaScript bundle size
🎨 Customization
Colors
The design uses a zinc-based color palette. Modify colors in tailwind.config.js:

javascript
colors: {
  primary: '#fef752',    // Yellow accent
  background: '#080a0c', // Dark background
  foreground: '#cecee2', // Light text
}
Typography
The site uses Inter font. Change fonts in layout.tsx:

typescript
const inter = Inter({ subsets: ['latin'] })
Animations
Customize animation durations in globals.css and component files.

📈 SEO Optimized
Meta tags for social sharing
Structured data markup
Semantic HTML elements
Fast loading times
Mobile-friendly design
🔧 Scripts
bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
🌟 Features
✅ Responsive design
✅ Dark theme
✅ Smooth scrolling
✅ Product slideshows
✅ Comparison tables
✅ Testimonials
✅ SEO optimized
✅ Accessibility compliant
✅ Performance optimized
✅ Type safety
📄 License
MIT License - feel free to use this for your projects!

Built with ❤️ in Reykjavík for the strength training community.

