# Sarah Nina Meridor - Artist Portfolio

A complete local mirror of the Sarah Nina Meridor portfolio website (sarahnina.com) with all styling, images, and functionality preserved. Features high-resolution artwork downloads, authentic Wix theme replication, and comprehensive project galleries.

## About the Artist

Sarah Nina Meridor is a Jerusalem-based artist whose work explores the intersection of celestial and terrestrial realms through painting and visual art. Her pieces evoke mystical beauty and transcendental wisdom, spanning multiple series including MATRONITA, IMAGEWORK, FINE-STRUCTURE CONSTANT, CHARCOAL, and TRANSPHERA.

## Website Structure

```
sarahnina.com/
├── *.html                    # All website pages (10 total)
│   ├── index.html           # Homepage with artwork overview
│   ├── selected-work.html   # Curated artwork selection
│   ├── artist-s-statement.html # Artist's philosophy
│   ├── matronita.html       # MATRONITA project
│   ├── imagework.html       # IMAGEWORK project  
│   ├── fine-structure.html  # FINE-STRUCTURE CONSTANT project
│   ├── charcoal.html        # CHARCOAL project
│   ├── transphera.html      # TRANSPHERA project
│   ├── projects-3.html      # News and exhibitions
│   └── contact.html         # Contact form and info
├── css/                     # Complete styling system
│   ├── main.css            # Base Wix framework styles
│   ├── renderer.css        # Wix rendering engine styles
│   ├── custom.css          # Enhanced custom styles
│   └── sarahnina-theme.css # Extracted original theme
├── fonts/                   # Local typography
│   ├── questrial-regular.ttf   # Primary site font (148KB)
│   ├── raleway-regular.ttf     # Button font (139KB)
│   └── local-fonts.css        # Font definitions
├── images/                  # Complete image collection (43 files, ~23MB)
│   ├── gallery/            # Web-optimized artwork (2KB each)
│   ├── high-res/           # High-resolution images by project
│   │   ├── hero/           # 3500px hero image (1.2MB)
│   │   ├── matronita/      # 2400px MATRONITA artworks
│   │   ├── imagework/      # 2400px IMAGEWORK artwork
│   │   ├── fine-structure/ # 1015px FINE-STRUCTURE artwork
│   │   ├── charcoal/       # 724px CHARCOAL artwork
│   │   ├── originals/      # Unprocessed maximum quality (up to 7.4MB)
│   │   └── premium/        # Premium quality variants (q_100)
│   ├── Core site images    # Favicons, icons, social media
│   └── Wix backup images   # Medium quality backups
├── js/
│   └── main.js             # Site functionality
├── robots.txt              # SEO directives
├── sitemap.xml             # SEO sitemap
├── README.md               # This file
└── IMAGE-INVENTORY.md      # Complete image documentation
```

## Features

- **Complete Portfolio**: All 5 art projects with high-resolution images
- **Authentic Styling**: Extracted and replicated original Wix theme
- **Custom Typography**: Questrial and Raleway fonts served locally (no external dependencies)
- **Multiple Image Qualities**: Web-optimized (2KB) to print quality (7.4MB)
- **Responsive Design**: Mobile-first approach, works on all devices
- **Project-Specific Pages**: Dedicated pages for each artwork collection
- **Contact Form**: Functional contact page with form validation
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **High Performance**: Optimized loading with multiple image quality options

## Requirements for Local Development

### Web Server Required
A local web server is **required** due to:
- **Font Loading**: CORS restrictions prevent local font file loading
- **CSS Imports**: Multiple stylesheet dependencies
- **MIME Types**: Proper content type serving for assets

### Supported Browsers
- Chrome/Chromium 80+
- Firefox 75+  
- Safari 13+
- Edge 80+

## Running Locally

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the website directory
cd /path/to/sarahnina.com

# Python 3 (recommended)
python3 -m http.server 8000

# Python 2 (fallback)
python -m SimpleHTTPServer 8000

# Access at: http://localhost:8000
```

## Artwork Collections

- **MATRONITA**: Mystical feminine divine series (2 high-res images)
- **IMAGEWORK**: Conceptual and experimental pieces (1 high-res image)
- **FINE-STRUCTURE CONSTANT**: Physics-inspired abstract works (1 high-res image)
- **CHARCOAL**: Traditional charcoal drawings (1 high-res image)
- **TRANSPHERA**: Transformational and spiritual themes (uses gallery images)

## Technical Details

### Styling Architecture
- **CSS Variables**: Complete color palette and typography scales extracted from original
- **Responsive Design**: Mobile-first with breakpoints at 768px and 480px
- **Grid Layouts**: CSS Grid for gallery sections with auto-fit columns
- **Custom Fonts**: Questrial (primary) and Raleway (buttons) served locally

### Image Quality Levels
1. **Web Gallery** (gallery/): 2KB each - Fast loading, web display
2. **High-Resolution** (high-res/[project]/): 106KB-1.2MB - Project displays  
3. **Premium Quality** (high-res/premium/): 255KB-1.2MB - High quality (q_100)
4. **Original Quality** (high-res/originals/): 64KB-7.4MB - Maximum available quality

### Color Palette (Custom Black Theme)
- **Primary Background**: `rgb(0,0,0)` - Pure black
- **Content Sections**: `rgb(30,30,30)` - Dark gray
- **Text Primary**: `rgb(255,255,255)` - Pure white
- **Accent Golden**: `rgb(220,150,100)` - Warm golden accents
- **Button Colors**: Golden background with black text

### Typography Hierarchy
- **H1**: 88px (Desktop) / 48px (Mobile) - Questrial
- **H2**: 72px (Desktop) / 36px (Mobile) - Questrial  
- **H3**: 50px (Desktop) / 28px (Mobile) - Questrial
- **Body Text**: 18px/1.75 line height - Questrial
- **Buttons**: 14px/1.4 - Raleway
- **Captions**: 14px/1.79 - Questrial

## Troubleshooting

### Fonts Not Loading
**Problem**: Fonts appear as Arial/Helvetica instead of Questrial/Raleway
**Solution**: Ensure you're using a web server (not opening files directly)
```bash
# Wrong - will not work
file:///path/to/sarahnina.com/index.html

# Correct - use web server
http://localhost:8000/index.html
```

### Images Not Displaying  
**Problem**: Some images appear broken
**Solution**: Check image paths are relative and case-sensitive
```bash
# Verify image files exist
ls -la images/gallery/
ls -la images/high-res/
```

### CSS Not Loading
**Problem**: Site appears unstyled  
**Solution**: Ensure CSS imports are working via web server
```bash
# Check CSS files exist
ls -la css/
# Verify imports in custom.css
head -5 css/custom.css
```

### Contact Form Not Working
**Problem**: Form submission doesn't work
**Note**: The form is HTML-only and requires backend processing to be functional

## Development Setup

### Prerequisites
- Modern web browser (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Local web server (Python, Node.js, PHP, or Apache/Nginx)
- Text editor/IDE for modifications

### File Structure for Modifications
- **Content**: Edit `.html` files directly
- **Styling**: Modify `css/custom.css` or `css/sarahnina-theme.css`
- **Images**: Replace files in `images/` directories (maintain naming)
- **Fonts**: Located in `fonts/` directory with local serving

## Deployment Options

### Option 1: GitHub Pages (Recommended for Static Hosting)
1. Upload all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" → "main" → "/ (root)"
4. Site available at: `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag the entire `sarahnina.com` folder to Netlify dashboard
2. Automatic deployment with custom domain support

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the website directory
3. Follow deployment prompts

### Option 4: Traditional Web Hosting
Upload all files to your web hosting provider's public folder

## Customization

### Adding New Artwork
1. **High-Resolution Images**: Add to `images/high-res/[project]/`
2. **Web-Optimized Versions**: Add to `images/gallery/` 
3. **Update HTML**: Reference new images in relevant project pages
4. **Maintain Naming**: Follow existing conventions (artwork-X.jpg)

### Modifying Styles  
- **Colors**: Edit CSS variables in `css/sarahnina-theme.css`
- **Typography**: Modify font variables in theme file
- **Layout**: Update `css/custom.css` for structural changes
- **Responsive**: Adjust breakpoints in media queries

### Content Updates
- **Text**: Edit HTML files directly
- **Navigation**: Update menu links across all pages
- **Meta Tags**: Modify SEO tags in `<head>` sections
- **Images**: Replace files while maintaining filenames

## Performance Optimization

### Image Loading Strategy
- **Progressive Loading**: Small gallery images (2KB) load first
- **On-Demand**: High-res images loaded for specific project pages
- **Multiple Qualities**: Choose appropriate resolution for use case

### CSS Efficiency
- **CSS Variables**: Centralized theme management
- **Modular Imports**: Only necessary stylesheets loaded
- **Responsive Images**: Automatic sizing with CSS Grid

### Browser Support & Compatibility

#### Fully Supported
- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile: iOS Safari, Chrome Mobile, Samsung Internet

#### Fallback Support  
- **Fonts**: Arial/Helvetica fallbacks for all custom fonts
- **CSS Grid**: Flexbox fallbacks where needed
- **CSS Variables**: Default values for older browsers

## SEO & Accessibility Features

### SEO Optimization
- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Complete Open Graph and Twitter Card meta
- **JSON-LD**: Structured data for search engines
- **Sitemap**: XML sitemap for all pages
- **Alt Texts**: Descriptive alt texts for all images
- **Canonical URLs**: Proper URL structure

### Accessibility (Enhanced for Black Theme)
- **Keyboard Navigation**: Full keyboard accessibility with visible focus states
- **Screen Reader**: ARIA labels and semantic markup
- **Color Contrast**: Exceptional contrast ratios (21:1 black-to-white, 8:1+ for accents)
- **Dark Theme Optimized**: Reduces eye strain in low-light conditions
- **Golden Accents**: High contrast warm accent color for better visibility
- **Focus Indicators**: Golden focus states for excellent visibility

## File Size Summary

- **HTML Files**: ~10KB each (10 pages = 100KB total)
- **CSS Files**: ~25KB total (4 files)
- **Font Files**: ~285KB total (2 fonts)
- **JavaScript**: ~5KB total
- **Images**: ~23MB total (43 files, multiple quality levels)
- **Total Site**: ~23.5MB

## Development Workflow

1. **Start Local Server**: `python3 -m http.server 8000`
2. **Make Changes**: Edit HTML/CSS/Images as needed
3. **Test Changes**: Verify in multiple browsers
4. **Deploy**: Upload to hosting or push to Git repository

## Quick Start Guide

```bash
# Clone or download the website files
# Navigate to the directory
cd sarahnina.com

# Start local server (choose one method)
python3 -m http.server 8000
# OR
http-server -p 8000 --cors
# OR  
php -S localhost:8000

# Open browser
open http://localhost:8000
```

## Original Source & Credits

This complete mirror preserves the original Sarah Nina Meridor website design and content from https://www.sarahnina.com/. All styling, typography, and visual elements have been extracted and replicated from the original Wix site.

**Key Achievements:**
- ✅ Complete visual fidelity with enhanced black theme
- ✅ All 43 images downloaded and organized  
- ✅ Original fonts (Questrial/Raleway) served locally
- ✅ Custom black theme with golden accents for premium look
- ✅ Exceptional accessibility with 21:1 contrast ratios
- ✅ High-resolution images for print quality
- ✅ Mobile-responsive design maintained
- ✅ No external dependencies

## Contact

**For Artwork Inquiries:**
- Website: https://www.sarahnina.com
- Email: info@sarahnina.com
- Location: Jerusalem, Israel

**For Technical Issues:**
Please refer to the troubleshooting section above or check the `IMAGE-INVENTORY.md` file for detailed image documentation.

## License

This website replication is for archival and development purposes. All artwork and content remains the intellectual property of Sarah Nina Meridor. The code structure and technical implementation may be used as a reference for similar portfolio websites.

---

**Last Updated**: August 10, 2025  
**Version**: 1.0.0  
**Total Assets**: 43 images, 10 HTML pages, 4 CSS files, 2 fonts  
**Complete Mirror**: All content and styling from original site preserved