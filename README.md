## Razzle starter kit - create a UI project from scratch
Start by using the razzle starter kit

```
npx create-razzle-app my-app
```

### 1. Set the directory up
```
.gitignore
package.json
razzle.config.js
public
src
  | client.jsx (client.js)
  | configure-store.js
  | index.js 
  | logger.js
  | server.js
  | ui
    | _document.jsx (app.js)
    | routes.jsx
    | components
    | pages
      | Home
        | index.js
```
*Nameing rules*
1. All react components are CamalCase and starts with Capitial
2. All else are snake-case and all lower case

### 2. Adding other good stuff
```
npx install-peerdeps --dev eslint-config-airbnb
```

Setup eslintrc
```
{
  "extends": "airbnb",
  "plugins": [
    "jest",
    "import"
  ],
  "env": {
    "jest/globals": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "comma-dangle": ["error", "never"],
    "global-require": "off",
    "import/default": "warn",
    "import/named": "error",
    "import/prefer-default-export": "warn",
    "react/jsx-props-no-spreading": "off",
    "no-alert": "error",
    "no-bitwise": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    "padded-blocks": "error",
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
}
```

setup jest
Add setup-jest folder in root (file mock-request-animation-frame.js)
```
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}
```


```
const path = require('path')

module.exports = {
  rootDir: './src',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFiles: [
    path.resolve('setup-jest/mock-request-animation-frame.js')
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'logger.js'
  ],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)']
}
```

setup npm scripts
```
    "lint:deps": "npx updated",
    "lint:js": "npx eslint src",
    "lint:ec": "npx editorconfig-checker -exclude '(node_modules|\\.git|build|public).*' .",
    "lint": "npx npm-run-all -p lint:*",
    "test": "npm run lint && npm run unit && npm audit --audit-level=moderate",
    "unit": "jest",
```


### 3. Add styled-components
Using [styled-components](https://www.styled-components.com/) and [styled-system](https://github.com/styled-system/styled-system)
```
npm i styled-components styled-system
```

With styled-components, need to do some magic to make it work well with SSR
https://www.styled-components.com/docs/advanced#server-side-rendering
