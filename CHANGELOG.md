# Changelog

## [1.0.0] - 2026-03-15

### Added
- Forked from hugo-blog-awesome theme
- Integrated new.css framework for minimal, responsive design
- Removed custom dark mode CSS in favor of new.css's built-in light/dark theming
- Updated SCSS color variables to inherit from new.css (neutral values like `inherit`, `transparent`)
- Removed theme toggle button (sun/moon icon) from navbar
- Removed `data-theme` attributes from HTML; theme now follows system preference via new.css
- Added emoji flag support for language selector via `data/flags.yml`
- Neutralized code syntax highlighting to inherit from new.css
- Updated JavaScript to remove theme switching logic, keeping only menu blur behavior

### Changed
- Theme name changed to hugo-blog-newcss
- Color palette now fully controlled by new.css stylesheet
- Language dropdown displays flag emojis instead of language codes

### Removed
- Custom dark mode styles (`html.dark`, `@media (prefers-color-scheme: dark)`)
- Theme toggle functionality
- Hardcoded color values in SCSS (replaced with inherit/transparent)

### Notes
- This version represents the initial fork and new.css integration
- All theming is now handled by new.css; no custom overrides
