# Prettier Setup Guide

## ✅ What's Been Added

### 🔧 Core Tools

- **Prettier** - Code formatter with consistent style
- **ESLint Integration** - Prettier rules integrated with ESLint
- **Husky** - Git hooks manager
- **lint-staged** - Fast pre-commit linting

### 📁 Configuration Files

- `.prettierrc` - Prettier configuration with project standards
- `.prettierignore` - Files to exclude from formatting
- `.eslintrc.json` - Updated with Prettier integration
- `.husky/pre-commit` - Pre-commit hook configuration

### 📦 NPM Scripts

```json
{
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "lint:fix": "next lint --fix",
  "prepare": "husky"
}
```

## 🚀 How to Use

### Manual Formatting

```bash
# Format all files
npm run format

# Check if files need formatting
npm run format:check

# Fix linting issues
npm run lint:fix
```

### Automatic Formatting

- **Pre-commit**: Automatically formats staged files before commit
- **IDE Integration**: Install Prettier extension in your editor

## 🎯 What Gets Formatted

### JavaScript/TypeScript Files

- Prettier formatting + ESLint fixes
- Includes: `.js`, `.jsx`, `.ts`, `.tsx`

### Other Files

- Prettier formatting only
- Includes: `.json`, `.css`, `.md`, `.mdx`

## 🔧 Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "bracketSameLine": false
}
```

## 🛡️ ESLint Integration

### Added Rules

- `prettier/prettier: error` - Prettier violations are ESLint errors
- `react/no-unescaped-entities: off` - Disabled for content-rich pages
- `@typescript-eslint/no-unused-vars` - Configured to ignore `_` prefixed vars

### Pre-commit Hook

- Formats staged files automatically
- Runs ESLint fixes on JS/TS files
- Prevents commits with formatting issues

## 🎉 Benefits

1. **Consistent Code Style** - No more style debates
2. **Automatic Formatting** - Format on save and commit
3. **Faster Code Reviews** - Focus on logic, not formatting
4. **Better Developer Experience** - Less manual formatting work
5. **Team Alignment** - Everyone follows the same standards

## 🔍 Troubleshooting

### Pre-commit Hook Not Working?

```bash
# Reinstall hooks
npx husky install
```

### Formatting Issues?

```bash
# Check what files need formatting
npm run format:check

# Format everything
npm run format
```

### ESLint Errors?

```bash
# Fix auto-fixable issues
npm run lint:fix

# Check remaining issues
npm run lint
```

---

_This setup follows the [Next.js Best Practices](./cursor/rules/nextjs-best-practices.mdc) from our development guidelines._
