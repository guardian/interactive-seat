System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/main": [
      "src/js/main"
    ]
  },

  map: {
    "ded/bonzo": "github:ded/bonzo@2.0.0",
    "ded/bowser": "github:ded/bowser@1.0.0",
    "guardian/iframe-messenger": "github:guardian/iframe-messenger@master",
    "handlebars": "github:components/handlebars.js@4.0.5",
    "json": "github:systemjs/plugin-json@0.1.0",
    "reqwest": "github:ded/reqwest@1.1.5",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93"
  }
});
