/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.html");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/mattari.png":
/*!********************************!*\
  !*** ./src/images/mattari.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/mattari.png\";\n\n//# sourceURL=webpack:///./src/images/mattari.png?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <title>Mattari</title>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1\\\">\\n    <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"stylesheets/bundle.css\\\" />\\n  </head>\\n  <body>\\n    <nav class=\\\"navbar\\\" role=\\\"navigation\\\" aria-label=\\\"main navigation\\\">\\n      <div class=\\\"navbar-brand\\\">\\n        <a class=\\\"navbar-item\\\" href=\\\"/\\\">\\n          <img src=\\\"\" + __webpack_require__(/*! ./images/mattari.png */ \"./src/images/mattari.png\") + \"\\\" width=\\\"112\\\" height=\\\"28\\\">\\n        </a>\\n        <a role=\\\"button\\\" class=\\\"navbar-burger burger\\\" aria-label=\\\"menu\\\" aria-expanded=\\\"false\\\" data-target=\\\"navbarBasicExample\\\">\\n          <span aria-hidden=\\\"true\\\"></span>\\n          <span aria-hidden=\\\"true\\\"></span>\\n          <span aria-hidden=\\\"true\\\"></span>\\n        </a>\\n      </div>\\n      <div id=\\\"navbarBasicExample\\\" class=\\\"navbar-menu\\\">\\n        <div class=\\\"navbar-end\\\">\\n          <a class=\\\"navbar-item\\\">Services</a>\\n          <a class=\\\"navbar-item\\\">Tech</a>\\n        </div>\\n      </div>\\n    </nav>\\n    <div class=\\\"container\\\">\\n    </div>\\n    <script type=\\\"text/javascript\\\" src=\\\"javascripts/bundle.js\\\"></script>\\n  </body>\\n  <footer class=\\\"footer\\\">\\n    <div class=\\\"content has-text-centered\\\">\\n      <p>Copyright (c) 2019 Mattari All Rights Reserved.</p>\\n    </div>\\n  </footer>\\n</html>\\n\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ })

/******/ });