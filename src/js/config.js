SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "interactive-es6/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "traceur": "github:jmcriffey/bower-traceur@0.0.93",
      "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
      "plugin-traceur": "npm:systemjs-plugin-traceur@0.0.2",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    },
    "packages": {
      "npm:systemjs-plugin-traceur@0.0.2": {
        "map": {
          "traceur": "github:jmcriffey/bower-traceur@0.0.95",
          "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.95"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "interactive-es6": {
      "main": "js/main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  },
  bundles: {
    "build/main": [
      "src/js/main"
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "classlist-polyfill": "npm:classlist-polyfill@1.0.3",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "ded/bowser": "github:ded/bowser@1.0.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fastclick": "npm:fastclick@1.0.6",
    "fg-loadcss": "npm:fg-loadcss@1.2.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "guardian/iframe-messenger": "github:guardian/iframe-messenger@master",
    "json": "github:systemjs/plugin-json@0.1.2",
    "lodash.clonedeep": "npm:lodash.clonedeep@4.3.2",
    "lodash.isstring": "npm:lodash.isstring@4.0.1",
    "lodash.throttle": "npm:lodash.throttle@4.0.1",
    "lodash.without": "npm:lodash.without@4.3.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "picturefill": "npm:picturefill@3.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reqwest": "github:ded/reqwest@1.1.5",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.2",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "vue": "npm:vue@1.0.26"
  },
  packages: {
    "npm:acorn@1.2.2": {
      "map": {}
    },
    "npm:amdefine@1.0.0": {
      "map": {}
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:bn.js@4.11.6": {
      "map": {}
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.1",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:commoner@0.10.4": {
      "map": {
        "commander": "npm:commander@2.9.0",
        "detective": "npm:detective@4.3.1",
        "glob": "npm:glob@5.0.15",
        "graceful-fs": "npm:graceful-fs@4.1.5",
        "iconv-lite": "npm:iconv-lite@0.4.13",
        "mkdirp": "npm:mkdirp@0.5.1",
        "private": "npm:private@0.1.6",
        "q": "npm:q@1.4.1",
        "recast": "npm:recast@0.10.43",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:detective@4.3.1": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "defined": "npm:defined@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:envify@3.4.1": {
      "map": {
        "jstransform": "npm:jstransform@11.0.3",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:esprima-fb@15001.1.0-dev-harmony-fb": {
      "map": {}
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "map": {}
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.5",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.2",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:graceful-fs@4.1.5": {
      "map": {}
    },
    "npm:graceful-readlink@1.0.1": {
      "map": {}
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:jstransform@11.0.3": {
      "map": {
        "base62": "npm:base62@1.1.1",
        "commoner": "npm:commoner@0.10.4",
        "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
        "object-assign": "npm:object-assign@2.1.1",
        "source-map": "npm:source-map@0.4.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:lodash._baseclone@4.5.7": {
      "map": {}
    },
    "npm:lodash.clonedeep@4.3.2": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@4.5.7"
      }
    },
    "npm:lodash.debounce@4.0.6": {
      "map": {}
    },
    "npm:lodash.throttle@4.0.1": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@4.0.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:minimatch@3.0.2": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.8.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:path-is-absolute@1.0.0": {
      "map": {}
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:picturefill@3.0.2": {
      "map": {}
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:q@1.4.1": {
      "map": {}
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:recast@0.10.43": {
      "map": {
        "ast-types": "npm:ast-types@0.8.15",
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:through@2.3.8": {
      "map": {}
    },
    "npm:vue@1.0.26": {
      "map": {
        "envify": "npm:envify@3.4.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    }
  }
});
