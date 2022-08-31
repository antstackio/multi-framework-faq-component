var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// ../../common/temp/node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.cjs.dev.js
var require_vanilla_extract_private_cjs_dev = __commonJS({
  "../../common/temp/node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.cjs.dev.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getVarName2(variable) {
      var matches = variable.match(/^var\((.*)\)$/);
      if (matches) {
        return matches[1];
      }
      return variable;
    }
    function get2(obj, path) {
      var result = obj;
      for (var key of path) {
        if (!(key in result)) {
          throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
        }
        result = result[key];
      }
      return result;
    }
    function walkObject2(obj, fn) {
      var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      var clone = obj.constructor();
      for (var key in obj) {
        var _value = obj[key];
        var currentPath = [...path, key];
        if (typeof _value === "string" || typeof _value === "number" || _value == null) {
          clone[key] = fn(_value, currentPath);
        } else if (typeof _value === "object" && !Array.isArray(_value)) {
          clone[key] = walkObject2(_value, fn, currentPath);
        } else {
          console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
        }
      }
      return clone;
    }
    exports.get = get2;
    exports.getVarName = getVarName2;
    exports.walkObject = walkObject2;
  }
});

// ../../common/temp/node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.cjs.js
var require_vanilla_extract_private_cjs = __commonJS({
  "../../common/temp/node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.cjs.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_vanilla_extract_private_cjs_dev();
    }
  }
});

// ../../common/temp/node_modules/.pnpm/@vanilla-extract+dynamic@2.0.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.dev.js
var require_vanilla_extract_dynamic_cjs_dev = __commonJS({
  "../../common/temp/node_modules/.pnpm/@vanilla-extract+dynamic@2.0.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.dev.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _private = require_vanilla_extract_private_cjs();
    function assignInlineVars3(varsOrContract, tokens) {
      var styles = {};
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          var varName2 = _private.get(_contract, path);
          styles[_private.getVarName(varName2)] = String(value);
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          styles[_private.getVarName(varName)] = _vars[varName];
        }
      }
      Object.defineProperty(styles, "toString", {
        value: function value() {
          return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
        },
        writable: false
      });
      return styles;
    }
    function setVar(element, variable, value) {
      element.style.setProperty(_private.getVarName(variable), value);
    }
    function setElementVars(element, varsOrContract, tokens) {
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          setVar(element, _private.get(_contract, path), String(value));
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          setVar(element, varName, _vars[varName]);
        }
      }
    }
    exports.assignInlineVars = assignInlineVars3;
    exports.setElementVars = setElementVars;
  }
});

// ../../common/temp/node_modules/.pnpm/@vanilla-extract+dynamic@2.0.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.js
var require_vanilla_extract_dynamic_cjs = __commonJS({
  "../../common/temp/node_modules/.pnpm/@vanilla-extract+dynamic@2.0.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_vanilla_extract_dynamic_cjs_dev();
    }
  }
});

// src/components/Faq/Faq.tsx
import React7 from "react";

// src/components/Accordion/Accordion.tsx
import React from "react";

// ../core/dist/index.js
(() => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps2 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_vanilla_extract_recipes_createRuntimeFn_cjs_dev = __commonJS2({
    "../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.dev.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperty2(obj, key, value) {
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
      function ownKeys2(object, enumerableOnly) {
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
      function _objectSpread22(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys2(Object(source), true).forEach(function(key) {
              _defineProperty2(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys2(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var shouldApplyCompound2 = (compoundCheck, selections, defaultVariants) => {
        for (var key of Object.keys(compoundCheck)) {
          var _selections$key;
          if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
            return false;
          }
        }
        return true;
      };
      var createRuntimeFn2 = (config) => (options) => {
        var className = config.defaultClassName;
        var selections = _objectSpread22(_objectSpread22({}, config.defaultVariants), options);
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
          if (shouldApplyCompound2(compoundCheck, selections, config.defaultVariants)) {
            className += " " + compoundClassName;
          }
        }
        return className;
      };
      exports.createRuntimeFn = createRuntimeFn2;
    }
  });
  var require_vanilla_extract_recipes_createRuntimeFn_cjs = __commonJS2({
    "../../common/temp/node_modules/.pnpm/@vanilla-extract+recipes@0.2.5_@vanilla-extract+css@1.7.3/node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.cjs.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_vanilla_extract_recipes_createRuntimeFn_cjs_dev();
      }
    }
  });
  var import_createRuntimeFn = __toESM2(require_vanilla_extract_recipes_createRuntimeFn_cjs(), 1);
  var accordionContentClass3 = "accordion.styles__t2atlm7";
  var accordionGroupClass3 = "accordion.styles__t2atlm3";
  var accordionIconClass3 = (0, import_createRuntimeFn.createRuntimeFn)({ defaultClassName: "accordion.styles__t2atlm8", variantClassNames: { position: { right: "accordion.styles_position_right__t2atlm9", left: "accordion.styles_position_left__t2atlma" } }, defaultVariants: {}, compoundVariants: [] });
  var accordionThemeClass3 = "accordion.styles__t2atlm0";
  var accordionThemeVars3 = { accordionTransform: "var(--accordionTransform__t2atlm1)", accordionTransition: "var(--accordionTransition__t2atlm2)" };
  var detailsClass3 = "accordion.styles__t2atlm4";
  var summaryClass3 = "accordion.styles__t2atlm6";
  var summaryOpenClass = "accordion.styles__t2atlm5";
})();

// src/components/Accordion/Accordion.tsx
var Accordion = (_a, ref) => {
  var _b = _a, { children, onToggle, className } = _b, nativeProps = __objRest(_b, ["children", "onToggle", "className"]);
  return /* @__PURE__ */ React.createElement("details", __spreadValues({
    ref,
    onToggle,
    className: `${void 0} ${void 0} ${className}`
  }, nativeProps), children);
};
var AccordionWithRef = React.forwardRef(Accordion);

// src/components/Accordion/AccordionContent.tsx
import React2 from "react";
var AccordionContent = (_a) => {
  var _b = _a, { children, className } = _b, nativeProps = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ React2.createElement("div", __spreadValues({
    className: `${void 0} ${className}`
  }, nativeProps), children);
};
var AccordionContentWithRef = React2.forwardRef(AccordionContent);

// src/components/Accordion/AccordionGroup.tsx
import React3 from "react";
var AccordionGroup = (_a, ref) => {
  var _b = _a, { children, className } = _b, nativeProps = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ React3.createElement("div", __spreadValues({
    ref,
    className: `${void 0} ${className}`
  }, nativeProps), children);
};
var AccordionGroupWithRef = React3.forwardRef(AccordionGroup);

// src/components/Accordion/AccordionSummary.tsx
var import_dynamic = __toESM(require_vanilla_extract_dynamic_cjs());
import React6 from "react";

// ../../common/temp/node_modules/.pnpm/@hover-design+react@0.1.7/node_modules/@hover-design/react/dist/hover-react.es.js
import React4, { forwardRef, useState, useEffect } from "react";
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
var badgeThemeClass = "_1guu9y00";
var badgeThemeVars = { badgeStyleColor: "var(--_1guu9y01)", badgeStyleTextColor: "var(--_1guu9y02)" };
var badgeWrapper = "_1guu9y03";
var badges = createRuntimeFn({ defaultClassName: "_1guu9y04", variantClassNames: { shape: { rounded: "_1guu9y05", "rounded-circle": "_1guu9y06" }, visible: { show: "_1guu9y07", hide: "_1guu9y08" }, position: { "default": "_1guu9y09", "top-start": "_1guu9y0a", "top-end": "_1guu9y0b", "bottom-start": "_1guu9y0c", "bottom-end": "_1guu9y0d" } }, defaultVariants: {}, compoundVariants: [] });
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
function get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}
function walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  var clone = obj.constructor();
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === "string" || typeof _value === "number" || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === "object" && !Array.isArray(_value)) {
      clone[key] = walkObject(_value, fn, currentPath);
    } else {
      console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
    }
  }
  return clone;
}
function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === "object") {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      var varName2 = get(_contract, path);
      styles[getVarName(varName2)] = String(value);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      styles[getVarName(varName)] = _vars[varName];
    }
  }
  Object.defineProperty(styles, "toString", {
    value: function value() {
      return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
    },
    writable: false
  });
  return styles;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var f = React4;
var g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var h;
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var n = Object.prototype.hasOwnProperty;
var p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsx = jsxRuntime.exports.jsx;
var jsxs = jsxRuntime.exports.jsxs;
var BadgeComponent = ({
  color = "red",
  textColor = "#fff",
  hide = false,
  shape = "rounded-circle",
  position = "default",
  label,
  children,
  ...props
}, ref) => {
  const badgeStyle = badges({
    shape,
    visible: hide ? "hide" : "show",
    position
  });
  return /* @__PURE__ */ jsxs("span", {
    role: "status",
    className: `${badgeWrapper}`,
    ref,
    ...props,
    children: [children, /* @__PURE__ */ jsx("small", {
      style: assignInlineVars({
        [badgeThemeVars.badgeStyleColor]: color,
        [badgeThemeVars.badgeStyleTextColor]: textColor
      }),
      className: `${badgeStyle}  ${badgeThemeClass}`,
      children: label
    })]
  });
};
var BadgeWithRef = React4.forwardRef(BadgeComponent);
var buttonStyles = createRuntimeFn({ defaultClassName: "_17auuxj0", variantClassNames: { variant: { "default": "_17auuxj1", light: "_17auuxj2", ghost: "_17auuxj3", hallow: "_17auuxj4" }, padding: { "default": "_17auuxj5", small: "_17auuxj6", medium: "_17auuxj7", large: "_17auuxj8" }, fontSize: { small: "_17auuxj9", medium: "_17auuxja", large: "_17auuxjb" }, margin: { "default": "_17auuxjc", small: "_17auuxjd", medium: "_17auuxje", large: "_17auuxjf" }, isBlock: { true: "_17auuxjg", false: "_17auuxjh" } }, defaultVariants: {}, compoundVariants: [] });
var cardStyles = createRuntimeFn({ defaultClassName: "_1dj5dm00", variantClassNames: { variant: { plain: "_1dj5dm01", outline: "_1dj5dm02", shadow: "_1dj5dm03", solid: "_1dj5dm04" }, padding: { "default": "_1dj5dm05", small: "_1dj5dm06", medium: "_1dj5dm07", large: "_1dj5dm08" }, fontSize: { small: "_1dj5dm09", medium: "_1dj5dm0a", large: "_1dj5dm0b" }, margin: { "default": "_1dj5dm0c", small: "_1dj5dm0d", medium: "_1dj5dm0e", large: "_1dj5dm0f" } }, defaultVariants: {}, compoundVariants: [] });
var FlexComponent = ({
  alignContent = "normal",
  alignItems = "flex-start",
  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "normal",
  flexShrink = "1",
  flexGrow = "0",
  flexBasis = "auto",
  gap = "normal",
  children,
  style,
  display = "flex",
  ...nativeProps
}, ref) => {
  const flexStyles = assignInlineVars({
    display,
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    flexShrink: flexShrink.toString(),
    flexGrow: flexGrow.toString(),
    flexBasis: flexBasis.toString(),
    gap: gap.toString()
  });
  Object.assign(flexStyles, style);
  return /* @__PURE__ */ jsx("div", {
    style: flexStyles,
    ...nativeProps,
    ref,
    children
  });
};
var FlexWithRef = React4.forwardRef(FlexComponent);
var listStyles = createRuntimeFn({ defaultClassName: "_16p82c32", variantClassNames: { variant: { horizontal: "_16p82c33", vertical: "_16p82c34" } }, defaultVariants: {}, compoundVariants: [] });
var listThemeClass = "_16p82c30";
var listThemeVars = { listStyles: { listStyleType: "var(--_16p82c31)" } };
var ListComponent = ({
  children,
  variant,
  type,
  ...props
}, ref) => {
  const listStyle = listStyles({
    variant
  });
  return /* @__PURE__ */ jsx("ul", {
    style: assignInlineVars({
      [listThemeVars.listStyles.listStyleType]: type || "none"
    }),
    className: `${listStyle} ${listThemeClass} ${props.className || ""}`,
    ref,
    ...props,
    children
  });
};
var ListWithRef = React4.forwardRef(ListComponent);
var listItemStyles = createRuntimeFn({ defaultClassName: "y7izy00", variantClassNames: {}, defaultVariants: {}, compoundVariants: [] });
var ListItemComponent = ({
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("li", {
    className: `${listItemStyles} ${(props == null ? void 0 : props.className) || ""}`,
    ref,
    ...props,
    children
  });
};
var ListItemWithRef = React4.forwardRef(ListItemComponent);
var accordionContentClass2 = "_1ioruil7";
var accordionGroupClass2 = "_1ioruil3";
var accordionIconClass = createRuntimeFn({ defaultClassName: "_1ioruil8", variantClassNames: { position: { right: "_1ioruil9", left: "_1ioruila" } }, defaultVariants: {}, compoundVariants: [] });
var accordionThemeClass2 = "_1ioruil0";
var accordionThemeVars = { accordionTransform: "var(--_1ioruil1)", accordionTransition: "var(--_1ioruil2)" };
var detailsClass2 = "_1ioruil4";
var summaryClass = "_1ioruil6";
var Accordion2 = ({
  children,
  onToggle,
  className,
  ...nativeProps
}, ref) => {
  return /* @__PURE__ */ jsx("details", {
    ref,
    onToggle,
    className: `${detailsClass2} ${accordionThemeClass2} ${className}`,
    ...nativeProps,
    children
  });
};
var AccordionWithRef2 = React4.forwardRef(Accordion2);
var AccordionContent2 = ({
  children,
  className,
  ...nativeProps
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: `${accordionContentClass2} ${className}`,
    ...nativeProps,
    children
  });
};
var AccordionContentWithRef2 = React4.forwardRef(AccordionContent2);
var Icon = ({
  children,
  xmlns = "http://www.w3.org/2000/svg",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  strokeWidth = "2",
  stroke = "currentColor",
  fill = "none",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  ...nativeProps
}) => {
  return /* @__PURE__ */ jsx("svg", {
    xmlns,
    width,
    height,
    viewBox,
    strokeWidth,
    stroke,
    fill,
    strokeLinecap,
    strokeLinejoin,
    ...nativeProps,
    children
  });
};
var ChevronIcon = (props) => {
  return /* @__PURE__ */ jsxs(Icon, {
    ...props,
    children: [/* @__PURE__ */ jsx("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "6 9 12 15 18 9"
    })]
  });
};
var DefaultAccordionSummaryIcon = () => {
  return /* @__PURE__ */ jsx(ChevronIcon, {
    height: "18",
    width: "18"
  });
};
var AccordionSummary = ({
  children,
  Icon: Icon2,
  iconPosition = "right",
  iconTransform = "rotate(180deg)",
  iconTransition = "transform 0.2s ease-in-out",
  className,
  style,
  ...nativeProps
}, ref) => {
  const summaryStyle = Object.assign(assignInlineVars({
    [accordionThemeVars.accordionTransition]: iconTransition,
    [accordionThemeVars.accordionTransform]: iconTransform
  }), style);
  const SummaryIcon = () => {
    const accordionIconStyle = accordionIconClass({
      position: iconPosition
    });
    return /* @__PURE__ */ jsx(FlexWithRef, {
      "data-attribute": "chevron",
      justifyContent: "center",
      alignItems: "center",
      className: accordionIconStyle,
      children: Icon2 || /* @__PURE__ */ jsx(DefaultAccordionSummaryIcon, {
        iconPosition
      })
    });
  };
  return /* @__PURE__ */ jsxs("summary", {
    ref,
    style: summaryStyle,
    className: `${summaryClass} ${className}`,
    ...nativeProps,
    children: [iconPosition === "left" && SummaryIcon(), children, iconPosition === "right" && SummaryIcon()]
  });
};
var AccordionSummaryWithRef = React4.forwardRef(AccordionSummary);
var AccordionGroup2 = ({
  children,
  className,
  ...nativeProps
}, ref) => {
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: `${accordionGroupClass2} ${className}`,
    ...nativeProps,
    children
  });
};
var AccordionGroupWithRef2 = React4.forwardRef(AccordionGroup2);
var iconWrapper = "_173j509a";
var inputClass = "_173j5097";
var inputThemeClass = "_173j5091";
var inputThemeVars = { borderColor: "var(--_173j5092)", padding: { left: "var(--_173j5093)", right: "var(--_173j5094)", top: "var(--_173j5095)", bottom: "var(--_173j5096)" } };
var inputWrapperClass = "_173j5090";
var leftIconWrapper = "_173j5099";
var rightIconWrapper = "_173j5098";
var lightColors = {
  brand: {
    100: "hsla(51,10%,91%,1)",
    200: "hsla(51,33%,91%,1)",
    300: "hsla(51,76%,91%,1)",
    400: "hsla(213, 84%, 19%, 1)"
  },
  typography: {
    200: "hsla(0, 0%, 25%,1)",
    500: "hsla(0, 0%, 10%,1)",
    900: "hsla(0, 0%, 0%,1)"
  },
  success: "hsla(145, 63%, 42%, 1)",
  warning: "hsla(45, 74%, 56%, 1)",
  error: "hsla(0, 79%, 63%, 1)"
};
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function getValueAndUnit(value) {
  if (typeof value !== "string")
    return [value, ""];
  var matchedValue = value.match(cssRegex);
  if (matchedValue)
    return [parseFloat(value), matchedValue[2]];
  return [value, void 0];
}
var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};
function getRatio(ratioName) {
  return ratioNames[ratioName];
}
function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = "1em";
  }
  if (ratio === void 0) {
    ratio = 1.333;
  }
  if (typeof steps !== "number") {
    throw new PolishedError(42);
  }
  if (typeof ratio === "string" && !ratioNames[ratio]) {
    throw new PolishedError(43);
  }
  var _ref = typeof base === "string" ? getValueAndUnit(base) : [base, ""], realBase = _ref[0], unit = _ref[1];
  var realRatio = typeof ratio === "string" ? getRatio(ratio) : ratio;
  if (typeof realBase === "string") {
    throw new PolishedError(44, base);
  }
  return "" + realBase * Math.pow(realRatio, steps) + (unit || "");
}
var baseFontSizeInPx = 16;
var fontEnlargementScale = 1.3;
var createScale = (ratio, base) => (steps) => `${modularScale(steps, base, ratio)}px`;
var fontSizeScale = createScale(fontEnlargementScale, baseFontSizeInPx);
({
  "100": fontSizeScale(0),
  "200": fontSizeScale(1),
  "300": fontSizeScale(2),
  "400": fontSizeScale(3),
  "500": fontSizeScale(4),
  "600": fontSizeScale(5)
});
var Input = ({
  className,
  style,
  statusBorder = lightColors.brand[400],
  Icon: Icon2,
  iconPosition = "right",
  ...props
}, ref) => {
  const paddingForIcon = {
    left: iconPosition === "left" && Icon2 ? "38px" : "14px",
    right: iconPosition === "right" && Icon2 ? "38px" : "14px"
  };
  return /* @__PURE__ */ jsxs("div", {
    className: inputWrapperClass,
    children: [Icon2 && iconPosition === "left" && /* @__PURE__ */ jsx(FlexWithRef, {
      className: `${iconWrapper} ${leftIconWrapper}`,
      alignItems: "center",
      justifyContent: "center",
      children: Icon2
    }), /* @__PURE__ */ jsx("input", {
      ref,
      style: {
        ...assignInlineVars({
          [inputThemeVars.borderColor]: statusBorder,
          [inputThemeVars.padding.left]: paddingForIcon.left,
          [inputThemeVars.padding.right]: paddingForIcon.right
        }),
        ...style
      },
      className: `${inputClass} ${inputThemeClass} ${className || ""}`,
      ...props
    }), Icon2 && iconPosition === "right" && /* @__PURE__ */ jsx(FlexWithRef, {
      className: `${iconWrapper} ${rightIconWrapper}`,
      alignItems: "center",
      justifyContent: "center",
      children: Icon2
    })]
  });
};
var InputWithRef = React4.forwardRef(Input);
var labelClass = "vr301o0";
var Label = ({
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("label", {
    className: labelClass,
    ref,
    ...props,
    children
  });
};
var LabelWithRef = React4.forwardRef(Label);
var dividerHorizontal = createRuntimeFn({ defaultClassName: "vzk8v78 vzk8v77", variantClassNames: { type: { dashed: "vzk8v79", dotted: "vzk8v7a", solid: "vzk8v7b" } }, defaultVariants: {}, compoundVariants: [] });
var dividerVertical = createRuntimeFn({ defaultClassName: "vzk8v7c vzk8v77", variantClassNames: { type: { dashed: "vzk8v7d", dotted: "vzk8v7e", solid: "vzk8v7f" } }, defaultVariants: {}, compoundVariants: [] });
var labelHorizontal = createRuntimeFn({ defaultClassName: "vzk8v7h vzk8v7g", variantClassNames: { labelPosition: { start: "vzk8v7i", center: "vzk8v7j", end: "vzk8v7k" } }, defaultVariants: {}, compoundVariants: [] });
var labelVertical = createRuntimeFn({ defaultClassName: "vzk8v7l vzk8v7g", variantClassNames: { labelPosition: { start: "vzk8v7m", center: "vzk8v7n", end: "vzk8v7o" } }, defaultVariants: {}, compoundVariants: [] });
var textAreaColorClass = "_1j72d5u0";
var textAreaColorVars = { textAreaBorderColor: { statusBorderColor: "var(--_1j72d5u1)" } };
var textAreaResize = "_1j72d5u3";
var textAreaStyle = "_1j72d5u2";
var TextAreaComponent = ({
  className,
  children,
  style,
  fixedSize = false,
  statusBorder = "#082D59",
  ...nativeTextAreaProps
}, ref) => {
  let textAreaBorder = assignInlineVars({
    [textAreaColorVars.textAreaBorderColor.statusBorderColor]: statusBorder
  });
  Object.assign(textAreaBorder, style);
  return /* @__PURE__ */ jsx("textarea", {
    className: `${textAreaStyle} ${className} ${fixedSize ? textAreaResize : null} ${textAreaColorClass}`,
    style: textAreaBorder,
    ref,
    ...nativeTextAreaProps,
    children
  });
};
var TextAreaWithRef = React4.forwardRef(TextAreaComponent);
var badgeStyles = "_1ez3evsa";
var contentStyles = "_1ez3evs8";
var iconStyles = "_1ez3evs9";
var tabHeaderContainerStyles = "_1ez3evs4";
var tabRecipe = createRuntimeFn({ defaultClassName: "_1ez3evs5", variantClassNames: { active: { true: "_1ez3evs6" }, disabled: { true: "_1ez3evs7" } }, defaultVariants: {}, compoundVariants: [] });
var tabVars = { color: "var(--_1ez3evs1)", background: "var(--_1ez3evs2)", height: "var(--_1ez3evs3)" };
var TabComponent = ({
  defaultValue,
  value,
  color = "#2F80ED",
  background = "#d7e9ff",
  onChange = () => {
  },
  grow = false,
  height = "40px",
  tabData,
  style,
  className,
  children,
  ...nativeProps
}, ref) => {
  const [selectedTab, setSelectedTab] = useState(null);
  useEffect(() => {
    const activeValue = value || defaultValue;
    const tab = tabData.find((tabItem) => tabItem.value === activeValue);
    tab && setSelectedTab(tab);
  }, [defaultValue, tabData, value]);
  const internalOnClickHandler = (event, tabItem) => {
    onChange(tabItem, event);
    !value && setSelectedTab(tabItem);
  };
  return /* @__PURE__ */ jsxs("div", {
    ref,
    ...nativeProps,
    className,
    style,
    children: [/* @__PURE__ */ jsx(FlexWithRef, {
      style: assignInlineVars({
        [tabVars.height]: height
      }),
      className: `${tabHeaderContainerStyles}`,
      children: tabData.map((tabItem, ind) => {
        const tabClass = tabRecipe({
          active: tabItem.value === (selectedTab == null ? void 0 : selectedTab.value),
          disabled: tabItem.disabled
        });
        return /* @__PURE__ */ jsxs(FlexWithRef, {
          alignItems: "center",
          justifyContent: "center",
          flexGrow: grow ? "1" : "0",
          style: assignInlineVars({
            [tabVars.color]: color,
            [tabVars.background]: background
          }),
          className: tabClass,
          onClick: (event) => internalOnClickHandler(event, tabItem),
          children: [tabItem.icon && /* @__PURE__ */ jsx("span", {
            className: `${iconStyles}`,
            children: tabItem.icon
          }), tabItem.label && /* @__PURE__ */ jsx("span", {
            children: tabItem.label
          }), tabItem.badge && /* @__PURE__ */ jsx(BadgeWithRef, {
            label: tabItem.badge,
            className: `${badgeStyles}`,
            shape: "rounded",
            color: "#DA2C2C"
          })]
        }, ind);
      })
    }), selectedTab && /* @__PURE__ */ jsx("div", {
      className: `${contentStyles}`,
      children: children(selectedTab)
    })]
  });
};
var Tab = forwardRef(TabComponent);
var avatarChildClass = "_13jurtf0";
var avatarGaps = { xs: "-16px", sm: "-14px", md: "-12px", lg: "-10px", xl: "-8px" };
var avatarGroupThemeClass = "_13jurtf1";
var avatarGroupThemeVars = { avatarStyleGap: "var(--_13jurtf2)" };
var avatarImg = "_13jurtf8";
var avatarShapes = { xs: "2px", sm: "4px", md: "8px", lg: "16px", xl: "32px" };
var avatarSizes = { xs: "16px", sm: "24px", md: "32px", lg: "40px", xl: "48px" };
var avatarThemeClass = "_13jurtf3";
var avatarThemeVars = { avatarStyleColor: "var(--_13jurtf4)", avatarStyleTextColor: "var(--_13jurtf5)", avatarStyleBorderRadius: "var(--_13jurtf6)", avatarStyleSize: "var(--_13jurtf7)" };
var avatarWrapper = "_13jurtf9";
var AvatarComponent = ({
  children,
  src,
  alt,
  borderRadius = "xl",
  size = "md",
  color = "#000",
  textColor = "#fff",
  className,
  style,
  ...nativeProps
}, ref) => {
  const assignVariables = assignInlineVars({
    [avatarThemeVars.avatarStyleColor]: src ? "transparent" : color,
    [avatarThemeVars.avatarStyleTextColor]: textColor,
    [avatarThemeVars.avatarStyleBorderRadius]: avatarShapes[borderRadius] ? avatarShapes[borderRadius] : borderRadius,
    [avatarThemeVars.avatarStyleSize]: avatarSizes[size] ? avatarSizes[size] : size
  });
  return /* @__PURE__ */ jsx(FlexWithRef, {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    className: `${avatarWrapper} ${avatarThemeClass} ${className || ""}`,
    style: {
      ...assignVariables,
      ...style || {}
    },
    ref,
    ...nativeProps,
    children: src ? /* @__PURE__ */ jsx("img", {
      className: `${avatarImg}`,
      src,
      alt
    }) : children
  });
};
var AvatarWithRef = React4.forwardRef(AvatarComponent);
var AvatarGroup = ({
  children,
  gap = "xs",
  className,
  style,
  ...nativeProps
}, ref) => {
  const assignVariables = assignInlineVars({
    [avatarGroupThemeVars.avatarStyleGap]: avatarGaps[gap]
  });
  return /* @__PURE__ */ jsx(FlexWithRef, {
    alignItems: "center",
    ref,
    className: `${avatarChildClass} ${avatarGroupThemeClass} ${className || ""}`,
    style: {
      ...assignVariables,
      ...style || {}
    },
    ...nativeProps,
    children
  });
};
var AvatarGroupWithRef = React4.forwardRef(AvatarGroup);

// src/components/_internal/Icons/Chevron.tsx
import React5 from "react";
var ChevronIcon2 = (props) => {
  return /* @__PURE__ */ React5.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React5.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React5.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
};
var Chevron_default = ChevronIcon2;

// src/components/Accordion/AccordionSummary.tsx
var DefaultAccordionSummaryIcon2 = () => {
  return /* @__PURE__ */ React6.createElement(Chevron_default, {
    height: "18",
    width: "18"
  });
};
var AccordionSummary2 = (_a, ref) => {
  var _b = _a, {
    children,
    Icon: Icon2,
    iconPosition = "right",
    iconTransform = "rotate(180deg)",
    iconTransition = "transform 0.2s ease-in-out",
    className,
    style
  } = _b, nativeProps = __objRest(_b, [
    "children",
    "Icon",
    "iconPosition",
    "iconTransform",
    "iconTransition",
    "className",
    "style"
  ]);
  const summaryStyle = Object.assign(
    (0, import_dynamic.assignInlineVars)({
      [(void 0).accordionTransition]: iconTransition,
      [(void 0).accordionTransform]: iconTransform
    }),
    style
  );
  const SummaryIcon = () => {
    const accordionIconStyle = (void 0)({ position: iconPosition });
    return /* @__PURE__ */ React6.createElement(FlexWithRef, {
      "data-attribute": "chevron",
      justifyContent: "center",
      alignItems: "center",
      className: accordionIconStyle
    }, Icon2 || /* @__PURE__ */ React6.createElement(DefaultAccordionSummaryIcon2, {
      iconPosition
    }));
  };
  return /* @__PURE__ */ React6.createElement("summary", __spreadValues({
    ref,
    style: summaryStyle,
    className: `${void 0} ${className}`
  }, nativeProps), iconPosition === "left" && SummaryIcon(), children, iconPosition === "right" && SummaryIcon());
};
var AccordionSummaryWithRef2 = React6.forwardRef(AccordionSummary2);

// src/components/Faq/Faq.tsx
var Faq = ({}) => {
  return /* @__PURE__ */ React7.createElement(AccordionGroupWithRef, null, /* @__PURE__ */ React7.createElement(AccordionWithRef, null, /* @__PURE__ */ React7.createElement(AccordionSummaryWithRef2, null, "Tab Navigate Me!"), /* @__PURE__ */ React7.createElement(AccordionContentWithRef, null, /* @__PURE__ */ React7.createElement("div", null, "I have awesome accessibility"))), /* @__PURE__ */ React7.createElement(AccordionWithRef, null, /* @__PURE__ */ React7.createElement(AccordionSummaryWithRef2, null, "You will love tabbing me!"), /* @__PURE__ */ React7.createElement(AccordionContentWithRef, null, /* @__PURE__ */ React7.createElement("input", {
    type: "checkbox"
  }), " I am checkbox 1", /* @__PURE__ */ React7.createElement("input", {
    type: "checkbox"
  }), " I am checkbox 2", /* @__PURE__ */ React7.createElement("input", {
    type: "checkbox"
  }), " I am checkbox 3")), /* @__PURE__ */ React7.createElement(AccordionWithRef, null, /* @__PURE__ */ React7.createElement(AccordionSummaryWithRef2, null, "This is summary"), /* @__PURE__ */ React7.createElement(AccordionContentWithRef, null, /* @__PURE__ */ React7.createElement("div", null, "Hello"))));
};
export {
  Faq
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
