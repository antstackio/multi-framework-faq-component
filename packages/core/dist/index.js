"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.dev.js
  var require_vanilla_extract_recipes_createRuntimeFn_cjs_dev = __commonJS({
    "../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.dev.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
        for (var key of Object.keys(compoundCheck)) {
          var _selections$key;
          if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
            return false;
          }
        }
        return true;
      };
      var createRuntimeFn = (config) => (options) => {
        var className = config.defaultClassName;
        var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
        for (var variantName in selections) {
          var _selections$variantNa;
          var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
          if (variantSelection != null) {
            var selection = variantSelection;
            if (typeof selection === "boolean") {
              selection = selection === true ? "true" : "false";
            }
            var selectionClassName = config.variantClassNames[variantName][selection];
            if (selectionClassName) {
              className += " " + selectionClassName;
            }
          }
        }
        for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
          if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
            className += " " + compoundClassName;
          }
        }
        return className;
      };
      exports.createRuntimeFn = createRuntimeFn;
    }
  });

  // ../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.js
  var require_vanilla_extract_recipes_createRuntimeFn_cjs = __commonJS({
    "../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_vanilla_extract_recipes_createRuntimeFn_cjs_dev();
      }
    }
  });

  // src/components/Accordion/accordion.styles.css.ts
  var import_createRuntimeFn = __toESM(require_vanilla_extract_recipes_createRuntimeFn_cjs(), 1);
  var accordionContentClass = "accordion.styles__t2atlm7";
  var accordionGroupClass = "accordion.styles__t2atlm3";
  var accordionIconClass = (0, import_createRuntimeFn.createRuntimeFn)({ defaultClassName: "accordion.styles__t2atlm8", variantClassNames: { position: { right: "accordion.styles_position_right__t2atlm9", left: "accordion.styles_position_left__t2atlma" } }, defaultVariants: {}, compoundVariants: [] });
  var accordionThemeClass = "accordion.styles__t2atlm0";
  var accordionThemeVars = { accordionTransform: "var(--accordionTransform__t2atlm1)", accordionTransition: "var(--accordionTransition__t2atlm2)" };
  var detailsClass = "accordion.styles__t2atlm4";
  var summaryClass = "accordion.styles__t2atlm6";
  var summaryOpenClass = "accordion.styles__t2atlm5";
})();
