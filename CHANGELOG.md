# Changelog

## [2.0.0](https://github.com/hugo-sid/hugo-blog-awesome/compare/v1.21.0...v2.0.0) (2026-06-07)


### ⚠ BREAKING CHANGES

* **templates:** Hugo template upgrade for `v0.160.0` and above ([#357](https://github.com/hugo-sid/hugo-blog-awesome/issues/357))

### :sparkles: Features

* add SVG icon for Tangled ([#346](https://github.com/hugo-sid/hugo-blog-awesome/issues/346)) ([eb92530](https://github.com/hugo-sid/hugo-blog-awesome/commit/eb92530a751563da3396a19405bdf0494171e682))
* **icons:** add codeberg svg icon ([#356](https://github.com/hugo-sid/hugo-blog-awesome/issues/356)) ([7931f9c](https://github.com/hugo-sid/hugo-blog-awesome/commit/7931f9cf1a9ba91fb7c1c6ff62aa3045e63af855))


### :bug: Bug Fixes

* **ci:** fix release please ci ([#360](https://github.com/hugo-sid/hugo-blog-awesome/issues/360)) ([f229b08](https://github.com/hugo-sid/hugo-blog-awesome/commit/f229b08effc2897e9464005d09b0a176b98c3a9c))
* JSON-LD template ([#353](https://github.com/hugo-sid/hugo-blog-awesome/issues/353)) ([f4511c7](https://github.com/hugo-sid/hugo-blog-awesome/commit/f4511c763abd2eb0b78b2b9ae80132643a5fe1a0))
* replace removed hugo methods, upgrade Hugo version ([#344](https://github.com/hugo-sid/hugo-blog-awesome/issues/344)) ([c485914](https://github.com/hugo-sid/hugo-blog-awesome/commit/c485914c4fe1e11b6f57a308234c83e5a2da98b4))
* time formatting ([#347](https://github.com/hugo-sid/hugo-blog-awesome/issues/347)) ([d4e60cd](https://github.com/hugo-sid/hugo-blog-awesome/commit/d4e60cd9f07c7a2413912a46846a31645a0dee2a))
* use release please config file ([#359](https://github.com/hugo-sid/hugo-blog-awesome/issues/359)) ([6868145](https://github.com/hugo-sid/hugo-blog-awesome/commit/6868145e59062c327ecfbced1d6e934fa21ffbcd))


### :hammer: Housekeeping

* **deps:** replace google-github-actions/release-please-action action with googleapis/release-please-action ([#342](https://github.com/hugo-sid/hugo-blog-awesome/issues/342)) ([5720de0](https://github.com/hugo-sid/hugo-blog-awesome/commit/5720de0aa87ab2ac7d797fa448c08c84a6b30ead))
* **deps:** update actions/checkout action to v5.0.1 ([#333](https://github.com/hugo-sid/hugo-blog-awesome/issues/333)) ([31146be](https://github.com/hugo-sid/hugo-blog-awesome/commit/31146be39bb4cfc00770b255407fd4e09d58ca4d))
* **deps:** update actions/checkout action to v6 ([#334](https://github.com/hugo-sid/hugo-blog-awesome/issues/334)) ([615c9c2](https://github.com/hugo-sid/hugo-blog-awesome/commit/615c9c2502ecfcc5c22b8bc71844c5ae4bdace8d))
* **deps:** update actions/stale action to v10.3.0 ([#336](https://github.com/hugo-sid/hugo-blog-awesome/issues/336)) ([145eb3d](https://github.com/hugo-sid/hugo-blog-awesome/commit/145eb3d495aaaa946b8caa11b9e3cb38b3fae173))
* **deps:** update actions/upload-artifact action to v6 ([#337](https://github.com/hugo-sid/hugo-blog-awesome/issues/337)) ([b30bd3b](https://github.com/hugo-sid/hugo-blog-awesome/commit/b30bd3b2fd934ea9c94f74ab601389cbdff42e77))
* **deps:** update actions/upload-artifact action to v7 ([#345](https://github.com/hugo-sid/hugo-blog-awesome/issues/345)) ([5062749](https://github.com/hugo-sid/hugo-blog-awesome/commit/5062749ddc90f9a378b6aaa6511bf45ca396fce0))
* **deps:** update codelytv/pr-size-labeler action to v1.10.4 ([#348](https://github.com/hugo-sid/hugo-blog-awesome/issues/348)) ([f808ff8](https://github.com/hugo-sid/hugo-blog-awesome/commit/f808ff8434a48c5101cb99912c85e0312aa6d556))
* **deps:** update github/codeql-action action to v4.36.1 ([#332](https://github.com/hugo-sid/hugo-blog-awesome/issues/332)) ([d0f8c97](https://github.com/hugo-sid/hugo-blog-awesome/commit/d0f8c978ffc22c4d4027417d57fa11a3f5771a84))
* **deps:** update github/codeql-action action to v4.36.2 ([#358](https://github.com/hugo-sid/hugo-blog-awesome/issues/358)) ([3ae2aba](https://github.com/hugo-sid/hugo-blog-awesome/commit/3ae2abaece1f059aa66db03c20bc47513983ceee))
* **deps:** update googleapis/release-please-action action to v5 ([#355](https://github.com/hugo-sid/hugo-blog-awesome/issues/355)) ([b011456](https://github.com/hugo-sid/hugo-blog-awesome/commit/b011456eaa3d7848caa8a854d1dd07396c9a8b4a))
* update README.md ([#351](https://github.com/hugo-sid/hugo-blog-awesome/issues/351)) ([daf1779](https://github.com/hugo-sid/hugo-blog-awesome/commit/daf1779772a4642c9cd268d390f9dfe2261dc832))
* update SVG for speakerdeck icon ([#339](https://github.com/hugo-sid/hugo-blog-awesome/issues/339)) ([a8ff7b8](https://github.com/hugo-sid/hugo-blog-awesome/commit/a8ff7b8d8af64ef73d4870620ed0f6f1abab3984))


### :recycle: Refactoring

* **templates:** Hugo template upgrade for `v0.160.0` and above ([#357](https://github.com/hugo-sid/hugo-blog-awesome/issues/357)) ([3ac1122](https://github.com/hugo-sid/hugo-blog-awesome/commit/3ac112226867c200ba84aa4d3e228bd895dc0bbd))


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
