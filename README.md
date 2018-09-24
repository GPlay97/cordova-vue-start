# cordova-vue-start
Easy VueJS integration for cordova as a quickstart implementation.

It uses [Vuetify](https://github.com/vuetifyjs/vuetify) as an easy to use Material Design component framework.

It comes with support for Polyfills, Babel and Rollup.

So you just need to enter a command to build the bundle file - and then just build the native application with Cordova.

It's that easy.

### Features
- Vue.JS
- Vue Router
- Vuetify
- Babel
- Polyfills
- Rollup
- Ready-to-use project structure

### Prerequisites
- Node.JS (+ NPM)
- Cordova

### How to use
- Directly clone this repository or clone your own forked version
- Change in `app` directory
- Run `npm install -g rollup` once
- Run `npm install` once
- Then execute `rollup -c --watch`  (every time you want to generate the build)
- Afterwards you can run `cordova platform add android` once and then every time `cordova build android` for example, if you want to build the APK file (requires working Cordova environment)

### How to edit
- The main initialization file is located within `www/js/index.js`
- Your own js files should be inside `www/js`
- Your own css files should be inside `www/css`
- External js and css files should be located within the `external` directory of the specified type (e.g. `www/js/external/external-lib.js`)
- Your Vue.js components should be within `www/components`.
- You can structure your components in pages, modules, ..
- All css and js files must be declared within `www/index.html` file
