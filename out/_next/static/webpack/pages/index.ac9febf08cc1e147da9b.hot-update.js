webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/welcome/infobox.js":
/*!***************************************!*\
  !*** ./src/canvas/welcome/infobox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoBox; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_icons_ionicons_outline_Enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/ionicons-outline/Enter */ \"./node_modules/@styled-icons/ionicons-outline/Enter/Enter.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/welcome/infobox.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //// component styling ////\n\nvar InfoBoxStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div).withConfig({\n  displayName: \"infobox__InfoBoxStyle\",\n  componentId: \"sc-1lzkqc8-0\"\n})([\"position:fixed;display:block;margin:auto;top:60px;bottom:40px;left:10px;right:10px;max-width:450px;padding:30px;background-color:#1f2933;border-radius:20px;border:none;box-shadow:0px 3px 10px rgba(0,0,0,.8);z-index:1000;font-size:1rem;\"]);\n_c = InfoBoxStyle;\nvar InfoBoxHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h2.withConfig({\n  displayName: \"infobox__InfoBoxHeader\",\n  componentId: \"sc-1lzkqc8-1\"\n})([\"font-size:\", \"rem;color:#a6c1d2;margin:0;font-family:Helvetica,Arial,sans-serif;\"], function (props) {\n  return props.size;\n});\n_c2 = InfoBoxHeader;\nvar InfoBoxText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h1.withConfig({\n  displayName: \"infobox__InfoBoxText\",\n  componentId: \"sc-1lzkqc8-2\"\n})([\"padding:1rem;margin:1rem;font-size:\", \"rem;color:#a6c1d2;margin:0;font-family:Helvetica,Arial,sans-serif;\"], function (props) {\n  return props.size;\n});\n_c3 = InfoBoxText;\nvar CloseInfoBoxButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].button).withConfig({\n  displayName: \"infobox__CloseInfoBoxButton\",\n  componentId: \"sc-1lzkqc8-3\"\n})([\"left:0;right:0;margin-left:auto;margin-right:auto;position:absolute;bottom:10%;padding-right:15px;padding-bottom:0.5rem;width:7rem;border:none;border-radius:2rem;background-color:#1f2933;&:hover{background-color:#364759;}\"]);\n_c4 = CloseInfoBoxButton;\nvar CloseInfoBoxIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_styled_icons_ionicons_outline_Enter__WEBPACK_IMPORTED_MODULE_5__[\"Enter\"]).withConfig({\n  displayName: \"infobox__CloseInfoBoxIcon\",\n  componentId: \"sc-1lzkqc8-4\"\n})([\"\", \" color:#a6c1d2;width:4rem;font-weight:bolder;\"], ''\n/* position: absolute; */\n);\n_c5 = CloseInfoBoxIcon;\nvar CloseInfoBoxText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h4.withConfig({\n  displayName: \"infobox__CloseInfoBoxText\",\n  componentId: \"sc-1lzkqc8-5\"\n})([\"font-size:1.2rem;color:#a6c1d2;margin:0;margin-left:5px;font-family:Helvetica,Arial,sans-serif;\"]); //// animation settings ////\n\n_c6 = CloseInfoBoxText;\nvar InfoBoxVariant = {\n  hidden: {\n    y: -800,\n    opacity: 1.0,\n    scale: 0.0\n  },\n  animate: {\n    y: 0,\n    opacity: .9,\n    scale: .8,\n    transition: {\n      delay: 3,\n      type: \"spring\",\n      bounceDamping: 20,\n      stiffness: 100,\n      // ease: \"easeInOut\", \n      duration: .5\n    }\n  },\n  exit: {\n    scale: .0,\n    y: [-200, 800],\n    transition: {\n      type: \"spring\",\n      bounceDamping: 20,\n      stiffness: 100,\n      ease: \"easeInOut\",\n      duration: .5\n    }\n  }\n};\nvar InfoBoxButtonVariant = {\n  whileHover: {\n    opacity: .9,\n    scale: 1.1,\n    transition: {\n      duration: .1\n    }\n  },\n  whileTap: {\n    scale: .95\n  }\n};\nvar Curtain = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div).withConfig({\n  displayName: \"infobox__Curtain\",\n  componentId: \"sc-1lzkqc8-6\"\n})([\"position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.7);width:100%;height:100%;z-index:999;\"]); //// JSX ////\n\n_c7 = Curtain;\nfunction InfoBox() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),\n      _React$useState2 = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      showResults = _React$useState2[0],\n      setShowResults = _React$useState2[1];\n\n  var onClick = function onClick() {\n    return setShowResults(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n    children: showResults && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Curtain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxStyle, {\n        initial: \"hidden\",\n        animate: \"animate\",\n        exit: \"exit\",\n        variants: InfoBoxVariant,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxHeader, {\n          size: 1.4,\n          children: \"Welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxHeader, {\n          size: 2.,\n          children: \"Montreal Traffic Simulation\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxText, {\n          size: 1.,\n          children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet nisl. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Faucibus turpis in eu mi bibendum neque egestas. Nulla aliquet porttitor lacus luctus. Diam vulputate ut pharetra sit. Amet venenatis urna cursus eget nunc scelerisque. Turpis massa sed elementum tempus egestas. Vitae nunc sed velit dignissim sodales ut eu sem integer. Cursus in hac habitasse platea dictumst quisque. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Sed faucibus turpis in eu mi bibendum neque egestas.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxText, {\n          size: 1.,\n          children: \"Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Velit scelerisque in dictum non consectetur a. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Fermentum odio eu feugiat pretium nibh ipsum consequat. Scelerisque purus semper eget duis. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Purus faucibus ornare suspendisse sed nisi lacus sed. Egestas dui id ornare arcu odio ut. Erat velit scelerisque in dictum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Porta nibh venenatis cras sed felis eget. Pellentesque dignissim enim sit amet. Nunc consequat interdum varius sit amet mattis vulputate enim.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxButton, {\n          whileHover: \"whileHover\",\n          whileTap: \"whileTap\",\n          variants: InfoBoxButtonVariant,\n          onClick: onClick,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxIcon, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxText, {\n            children: \" ENTER \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 5\n  }, this);\n}\n\n_s(InfoBox, \"VGxh5eZA2BKFgSvDZ8xvBXZ9Pxk=\");\n\n_c8 = InfoBox;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"InfoBoxStyle\");\n$RefreshReg$(_c2, \"InfoBoxHeader\");\n$RefreshReg$(_c3, \"InfoBoxText\");\n$RefreshReg$(_c4, \"CloseInfoBoxButton\");\n$RefreshReg$(_c5, \"CloseInfoBoxIcon\");\n$RefreshReg$(_c6, \"CloseInfoBoxText\");\n$RefreshReg$(_c7, \"Curtain\");\n$RefreshReg$(_c8, \"InfoBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy93ZWxjb21lL2luZm9ib3guanM/Y2UxOSJdLCJuYW1lcyI6WyJJbmZvQm94U3R5bGUiLCJzdHlsZWQiLCJtb3Rpb24iLCJkaXYiLCJJbmZvQm94SGVhZGVyIiwiaDIiLCJwcm9wcyIsInNpemUiLCJJbmZvQm94VGV4dCIsImgxIiwiQ2xvc2VJbmZvQm94QnV0dG9uIiwiYnV0dG9uIiwiQ2xvc2VJbmZvQm94SWNvbiIsIkVudGVyIiwiQ2xvc2VJbmZvQm94VGV4dCIsImg0IiwiSW5mb0JveFZhcmlhbnQiLCJoaWRkZW4iLCJ5Iiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJib3VuY2VEYW1waW5nIiwic3RpZmZuZXNzIiwiZHVyYXRpb24iLCJleGl0IiwiZWFzZSIsIkluZm9Cb3hCdXR0b25WYXJpYW50Iiwid2hpbGVIb3ZlciIsIndoaWxlVGFwIiwiQ3VydGFpbiIsIkluZm9Cb3giLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd1Jlc3VsdHMiLCJzZXRTaG93UmVzdWx0cyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxHQUFSLENBQVQ7QUFBQTtBQUFBO0FBQUEsbVBBQWxCO0tBQU1ILFk7QUFrQk4sSUFBTUksYUFBYSxHQUFHSCx5REFBTSxDQUFDSSxFQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUNGLFVBQUNDLEtBQUQ7QUFBQSxTQUFVQSxLQUFLLENBQUNDLElBQWhCO0FBQUEsQ0FERSxDQUFuQjtNQUFNSCxhO0FBT04sSUFBTUksV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLGtIQUdBLFVBQUNILEtBQUQ7QUFBQSxTQUFVQSxLQUFLLENBQUNDLElBQWhCO0FBQUEsQ0FIQSxD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QUNJLG9CQUFVLEVBQUMsWUFEZjtBQUVJLGtCQUFRLEVBQUMsVUFGYjtBQUdJLGtCQUFRLEVBQUVjLG9CQUhkO0FBSUksaUJBQU8sRUFBRVMsT0FKYjtBQUFBLGtDQU1JLHFFQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFPSSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFxQ0g7O0dBekN1QkwsTzs7TUFBQUEsTyIsImZpbGUiOiIuL3NyYy9jYW52YXMvd2VsY29tZS9pbmZvYm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHttb3Rpb24sIEFuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQge0VudGVyfSBmcm9tICdAc3R5bGVkLWljb25zL2lvbmljb25zLW91dGxpbmUvRW50ZXInXG5cblxuLy8vLyBjb21wb25lbnQgc3R5bGluZyAvLy8vXG5jb25zdCBJbmZvQm94U3R5bGUgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDYwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5MzM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuYFxuXG5jb25zdCBJbmZvQm94SGVhZGVyID0gc3R5bGVkLmgyYFxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpPT4ocHJvcHMuc2l6ZSl9cmVtO1xuICAgIGNvbG9yOiAjYTZjMWQyO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmBcblxuY29uc3QgSW5mb0JveFRleHQgPSBzdHlsZWQuaDFgXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcyk9Pihwcm9wcy5zaXplKX1yZW07XG4gICAgY29sb3I6ICNhNmMxZDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuYFxuXG5jb25zdCBDbG9zZUluZm9Cb3hCdXR0b24gPSBzdHlsZWQobW90aW9uLmJ1dHRvbilgXG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzMztcbiAgICAmOiBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQ3NTk7XG4gICAgfVxuYFxuXG5jb25zdCBDbG9zZUluZm9Cb3hJY29uID0gc3R5bGVkKEVudGVyKWBcbiAgICAkeycnIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi99XG4gICAgY29sb3I6ICNhNmMxZDI7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmBcblxuY29uc3QgQ2xvc2VJbmZvQm94VGV4dCA9IHN0eWxlZC5oNGBcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogI2E2YzFkMjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmBcblxuLy8vLyBhbmltYXRpb24gc2V0dGluZ3MgLy8vL1xuY29uc3QgSW5mb0JveFZhcmlhbnQgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICAgIHk6IC04MDAsXG4gICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgc2NhbGU6IDAuMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogLjksXG4gICAgICAgIHNjYWxlOiAuOCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZGVsYXk6IDMsXG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgYm91bmNlRGFtcGluZzogMjAsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICAgICAgICAgIC8vIGVhc2U6IFwiZWFzZUluT3V0XCIsIFxuICAgICAgICAgICAgZHVyYXRpb246IC41LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHNjYWxlOiAuMCxcbiAgICAgICAgeTogWy0yMDAsIDgwMF0sXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICBib3VuY2VEYW1waW5nOiAyMCxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIiwgXG4gICAgICAgICAgICBkdXJhdGlvbjogLjUsXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5jb25zdCBJbmZvQm94QnV0dG9uVmFyaWFudCA9IHtcbiAgICB3aGlsZUhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IC45LFxuICAgICAgICBzY2FsZTogMS4xLFxuICAgICAgICB0cmFuc2l0aW9uOiB7IFxuICAgICAgICAgICAgZHVyYXRpb246IC4xLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2hpbGVUYXA6IHtcbiAgICAgICAgc2NhbGU6IC45NVxuICAgIH1cbn1cblxuY29uc3QgQ3VydGFpbiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG5gXG5cbi8vLy8gSlNYIC8vLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9Cb3goKSB7XG4gICAgY29uc3QgW3Nob3dSZXN1bHRzLCBzZXRTaG93UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzZXRTaG93UmVzdWx0cyhmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge3Nob3dSZXN1bHRzICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEN1cnRhaW4vPlxuICAgICAgICAgICAgICAgIDxJbmZvQm94U3R5bGUgXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbicgXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9J2FuaW1hdGUnICBcbiAgICAgICAgICAgICAgICAgICAgZXhpdD0nZXhpdCdcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e0luZm9Cb3hWYXJpYW50fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9Cb3hIZWFkZXIgc2l6ZT17MS40fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQm94SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb0JveEhlYWRlciBzaXplPXsyLn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250cmVhbCBUcmFmZmljIFNpbXVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQm94SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb0JveFRleHQgc2l6ZT17MS59PlxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gQXJjdSBub24gc29kYWxlcyBuZXF1ZSBzb2RhbGVzIHV0IGV0aWFtIHNpdCBhbWV0IG5pc2wuIFF1aXMgZWxlaWZlbmQgcXVhbSBhZGlwaXNjaW5nIHZpdGFlIHByb2luIHNhZ2l0dGlzIG5pc2wgcmhvbmN1cyBtYXR0aXMuIEZhdWNpYnVzIHR1cnBpcyBpbiBldSBtaSBiaWJlbmR1bSBuZXF1ZSBlZ2VzdGFzLiBOdWxsYSBhbGlxdWV0IHBvcnR0aXRvciBsYWN1cyBsdWN0dXMuIERpYW0gdnVscHV0YXRlIHV0IHBoYXJldHJhIHNpdC4gQW1ldCB2ZW5lbmF0aXMgdXJuYSBjdXJzdXMgZWdldCBudW5jIHNjZWxlcmlzcXVlLiBUdXJwaXMgbWFzc2Egc2VkIGVsZW1lbnR1bSB0ZW1wdXMgZWdlc3Rhcy4gVml0YWUgbnVuYyBzZWQgdmVsaXQgZGlnbmlzc2ltIHNvZGFsZXMgdXQgZXUgc2VtIGludGVnZXIuIEN1cnN1cyBpbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCBxdWlzcXVlLiBFdCBsaWd1bGEgdWxsYW1jb3JwZXIgbWFsZXN1YWRhIHByb2luIGxpYmVybyBudW5jIGNvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMuIFNlZCBmYXVjaWJ1cyB0dXJwaXMgaW4gZXUgbWkgYmliZW5kdW0gbmVxdWUgZWdlc3Rhcy5cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQm94VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9Cb3hUZXh0IHNpemU9ezEufT5cbiAgICAgICAgICAgICAgICAgICAgVGluY2lkdW50IG51bmMgcHVsdmluYXIgc2FwaWVuIGV0IGxpZ3VsYSB1bGxhbWNvcnBlciBtYWxlc3VhZGEgcHJvaW4gbGliZXJvLiBWZWxpdCBzY2VsZXJpc3F1ZSBpbiBkaWN0dW0gbm9uIGNvbnNlY3RldHVyIGEuIE1pIGlwc3VtIGZhdWNpYnVzIHZpdGFlIGFsaXF1ZXQgbmVjIHVsbGFtY29ycGVyIHNpdC4gRmVybWVudHVtIG9kaW8gZXUgZmV1Z2lhdCBwcmV0aXVtIG5pYmggaXBzdW0gY29uc2VxdWF0LiBTY2VsZXJpc3F1ZSBwdXJ1cyBzZW1wZXIgZWdldCBkdWlzLiBNYWduYSBlZ2V0IGVzdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nLiBQdXJ1cyBmYXVjaWJ1cyBvcm5hcmUgc3VzcGVuZGlzc2Ugc2VkIG5pc2kgbGFjdXMgc2VkLiBFZ2VzdGFzIGR1aSBpZCBvcm5hcmUgYXJjdSBvZGlvIHV0LiBFcmF0IHZlbGl0IHNjZWxlcmlzcXVlIGluIGRpY3R1bS4gU2VtcGVyIGF1Y3RvciBuZXF1ZSB2aXRhZSB0ZW1wdXMgcXVhbSBwZWxsZW50ZXNxdWUgbmVjIG5hbSBhbGlxdWFtLiBQb3J0YSBuaWJoIHZlbmVuYXRpcyBjcmFzIHNlZCBmZWxpcyBlZ2V0LiBQZWxsZW50ZXNxdWUgZGlnbmlzc2ltIGVuaW0gc2l0IGFtZXQuIE51bmMgY29uc2VxdWF0IGludGVyZHVtIHZhcml1cyBzaXQgYW1ldCBtYXR0aXMgdnVscHV0YXRlIGVuaW0uIFxuICAgICAgICAgICAgICAgICAgICA8L0luZm9Cb3hUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJbmZvQm94QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj0nd2hpbGVIb3ZlcicgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD0nd2hpbGVUYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17SW5mb0JveEJ1dHRvblZhcmlhbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJbmZvQm94SWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJbmZvQm94VGV4dD4gRU5URVIgPC9DbG9zZUluZm9Cb3hUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0Nsb3NlSW5mb0JveEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0luZm9Cb3hTdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/canvas/welcome/infobox.js\n");

/***/ })

})