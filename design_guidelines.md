# Design Guidelines: Siddhant Deshwal Portfolio Website

## Design Approach
**Terminal-Hacker Aesthetic**: Dark, black-themed interface inspired by command-line terminals with futuristic elements, pixel-art accents, and professional polish.

## Core Visual Theme
- **Primary Background**: Pure black (#000000) or near-black (#0a0a0a)
- **Terminal Green Accents**: Neon green (#00ff00, #39ff14) for terminal-style text and glowing effects
- **Subtle Grays**: Dark grays (#1a1a1a, #252525) for cards/sections
- **Glowing Cursors**: Animated terminal cursor effect (blinking or pulsing)
- **Background Texture**: Subtle noise/grain texture overlay for depth

## Typography
- **Monospace Primary**: Use JetBrains Mono, Fira Code, or IBM Plex Mono via Google Fonts
- **Terminal Prompts**: Prefix section headers with terminal-style symbols (>, $, ~)
- **Animated Text**: Typewriter effect for hero subtitle cycling
- **Hierarchy**: Monospace throughout, varying weights (400, 500, 700)

## Layout System
- **Spacing Units**: Tailwind 4, 8, 12, 16, 24, 32 for consistent rhythm
- **Container**: max-w-6xl for main content, full-width for hero
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Card Spacing**: gap-6 to gap-8 for grid layouts

## Component Library

### Hero Section
- Terminal-style greeting with animated typing effect
- Large monospace heading: "> Hello, I'm Siddhant_des."
- Subtitle cycling through 4 phrases with smooth fade/slide transitions
- Minimal, centered layout with glowing cursor animation
- No hero image - pure terminal aesthetic

### About Me Section
- Expanded text content in 3-4 polished paragraphs
- Terminal-prompt header: "$ cat about.txt"
- Link buttons styled as terminal commands: `[dotfiles]` `[setup]` `[rice-gallery]` `[video-demo]`
- Slight padding/border for text container with dark gray background

### Skills Section
- Icon-heavy grid layout (4-5 columns on desktop, 2 on mobile)
- Categories: Languages, Frameworks, Tools, Specialties
- Large, prominent icons (Font Awesome or DevIcons CDN)
- Minimal text labels beneath icons
- Pixel-art style border or separator between categories

### Competitive Programming Section
- Card-based layout (3 cards for platforms: LeetCode, Codeforces, CodeChef)
- Each card includes: platform icon, rank badge, rating, contest achievements
- Pixel-art trophy/badge icons for achievements
- Screenshot placeholders for profile images
- Terminal-style list for contest rankings (153rd, 1078th, 1210th)

### Projects Section
- 2-column card layout (CP Toolkit, WorkChat)
- Each card: Project name as terminal command, tech stack icons, brief bullet points (3-4 max), GitHub link button
- Subtle pulse animation for CP Toolkit graph
- Chat-bubble animation for WorkChat
- Dark gray card backgrounds with subtle border glow on hover

### Linux Ricing Section
- Terminal-style gallery header: "> ls ~/rice"
- Grid of setup screenshots/images (2x2 or 3x2)
- Icons row for: Arch logo, shell (bash/zsh), WM (bspwm/i3/hyprland), editor, terminal emulator
- Dotfiles repo link prominent
- Video demo embed or link with terminal-style frame

### Contact Section
- Terminal prompt: "> connect --with siddhant"
- Icon grid (2x3 or 3x2) for: Email, LinkedIn, GitHub, LeetCode, Codeforces, CodeChef
- Large, clickable icons with subtle neon glow effect
- Icons from Heroicons or Font Awesome

## Visual Enhancements
- **Pixel-Art Accents**: Small 8-bit style dividers, bullets, or decorative elements between sections
- **ASCII Dividers**: Use ASCII art (═══, ▬▬▬, ···) as section separators
- **Glowing Effects**: text-shadow for neon green elements, subtle box-shadow glow on cards
- **Smooth Animations**: CSS transitions 200-300ms, avoid jarring effects
- **Command-Line Transitions**: Section headers animate in with typing effect
- **Cursor Effects**: Custom cursor with glowing dot trail (CSS or minimal JS)

## Accessibility
- Maintain WCAG AA contrast despite dark theme (use lighter grays for body text)
- All icons accompanied by aria-labels
- Keyboard navigation for all interactive elements
- Focus states with neon green outline

## Images
**No large hero image** - the hero section is pure terminal text aesthetic.

**Profile Screenshots**: Platform profile screenshots for LeetCode, Codeforces, CodeChef cards (embedded within dark-bordered frames)

**Linux Rice Gallery**: 4-6 screenshots of the Arch Linux setup, window manager, themed applications (terminal, editor, desktop). Display in grid with subtle green borders.

**Video Placeholder**: Single video demo frame/thumbnail for Linux setup walkthrough with terminal-style play button overlay.

All images should have subtle green/cyan borders matching the terminal aesthetic.