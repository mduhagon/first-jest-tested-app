# Starting with Jest Step-by-Step

I followed this guide to get started: https://jestjs.io/docs/getting-started

1. Install via npm:

```
npm install --save-dev jest
```

I got a bunch of warns because my npm was too old / not compatible:
npm WARN notsup Unsupported engine for jest@27.0.3: wanted: {"node":"^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"} (current: {"node":"14.14.0","npm":"6.14.8"})

Updated npm:

 npm update -g

This did not upgrade node, so I tried some other recommendation (https://phoenixnap.com/kb/update-node-js-version)

npm cache clean -f
npm install -g n
sudo n latest

I had an older node installed via homebrew that was making noise.. I uninstalled that via brew

2. Once I had Jest Installed, I needed to create a first file to test (sudoku_core.js) and a test file for it (sudoku_core.test.js). Also a package.json is required, specifying some basics of my 'app' plus the script / test magic.
With these 3 things, I can run the tests:

```
npm run test
```
