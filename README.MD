# Vodyani eslint-config

*⚙ With a little preparation, the typescript eslint generic rules for vodyani may be readily integrated into projects.*

[![Npm](https://img.shields.io/npm/v/@vodyani/eslint-config)](https://www.npmjs.com/package/@vodyani/eslint-config)
[![Npm](https://img.shields.io/npm/dm/@vodyani/eslint-config)](https://www.npmjs.com/package/@vodyani/eslint-config)
[![License](https://img.shields.io/github/license/vodyani/eslint-config)](LICENSE)
![Workflow](https://github.com/vodyani/eslint-config/actions/workflows/release.yml/badge.svg)

## Installation

```sh
npm install --save-dev @vodyani/eslint-config
```

## Usage

**Add the `eslintConfig` configuration to `package.json`, then the inheritance relationship like this:**

```json
{
  "eslintConfig": {
    "extends": "@vodyani"
  }
}
```

## Dependencies

- eslint `v8`
- eslint-plugin-import `v2`
- typescript-eslint/parser `v5`
- typescript-eslint/eslint-plugin `v5`

## License

Vodyani eslint-config is [MIT licensed](LICENSE).
