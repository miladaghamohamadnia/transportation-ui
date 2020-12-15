webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/welcome/infobox.js":
/*!***************************************!*\
  !*** ./src/canvas/welcome/infobox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoBox; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_icons_ionicons_outline_Enter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/ionicons-outline/Enter */ \"./node_modules/@styled-icons/ionicons-outline/Enter/Enter.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/welcome/infobox.js\",\n    _s = $RefreshSig$();\n\n\n\n\n //// component styling ////\n\nvar InfoBoxStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div).withConfig({\n  displayName: \"infobox__InfoBoxStyle\",\n  componentId: \"sc-1lzkqc8-0\"\n})([\"position:fixed;display:block;margin:auto;top:60px;bottom:40px;left:10px;right:10px;max-width:450px;padding:30px;background-color:#1f2933;border-radius:20px;border:none;box-shadow:0px 3px 10px rgba(0,0,0,.8);z-index:1000;font-size:1rem;\"]);\n_c = InfoBoxStyle;\nvar InfoBoxHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h2.withConfig({\n  displayName: \"infobox__InfoBoxHeader\",\n  componentId: \"sc-1lzkqc8-1\"\n})([\"font-size:\", \"rem;color:#a6c1d2;margin:0;font-family:Helvetica,Arial,sans-serif;\"], function (props) {\n  return props.size;\n});\n_c2 = InfoBoxHeader;\nvar InfoBoxText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n  displayName: \"infobox__InfoBoxText\",\n  componentId: \"sc-1lzkqc8-2\"\n})([\"padding:2rem;font-size:\", \"rem;color:#a6c1d2;margin:0;font-family:Helvetica,Arial,sans-serif;\"], function (props) {\n  return props.size;\n});\n_c3 = InfoBoxText;\nvar CloseInfoBoxButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].button).withConfig({\n  displayName: \"infobox__CloseInfoBoxButton\",\n  componentId: \"sc-1lzkqc8-3\"\n})([\"left:0;right:0;margin-left:auto;margin-right:auto;position:absolute;bottom:10%;padding-right:15px;padding-bottom:0.5rem;width:7rem;border:none;border-radius:2rem;background-color:#1f2933;&:hover{background-color:#364759;}\"]);\n_c4 = CloseInfoBoxButton;\nvar CloseInfoBoxIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_styled_icons_ionicons_outline_Enter__WEBPACK_IMPORTED_MODULE_5__[\"Enter\"]).withConfig({\n  displayName: \"infobox__CloseInfoBoxIcon\",\n  componentId: \"sc-1lzkqc8-4\"\n})([\"\", \" color:#a6c1d2;width:4rem;font-weight:bolder;\"], ''\n/* position: absolute; */\n);\n_c5 = CloseInfoBoxIcon;\nvar CloseInfoBoxText = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h4.withConfig({\n  displayName: \"infobox__CloseInfoBoxText\",\n  componentId: \"sc-1lzkqc8-5\"\n})([\"font-size:1.2rem;color:#a6c1d2;margin:0;margin-left:5px;font-family:Helvetica,Arial,sans-serif;\"]); //// animation settings ////\n\n_c6 = CloseInfoBoxText;\nvar InfoBoxVariant = {\n  hidden: {\n    y: -800,\n    opacity: 1.0,\n    scale: 0.0\n  },\n  animate: {\n    y: 0,\n    opacity: .9,\n    scale: .8,\n    transition: {\n      delay: 3,\n      type: \"spring\",\n      bounceDamping: 20,\n      stiffness: 100,\n      // ease: \"easeInOut\", \n      duration: .5\n    }\n  },\n  exit: {\n    scale: .0,\n    y: [-200, 800],\n    transition: {\n      type: \"spring\",\n      bounceDamping: 20,\n      stiffness: 100,\n      ease: \"easeInOut\",\n      duration: .5\n    }\n  }\n};\nvar InfoBoxButtonVariant = {\n  whileHover: {\n    opacity: .9,\n    scale: 1.1,\n    transition: {\n      duration: .1\n    }\n  },\n  whileTap: {\n    scale: .95\n  }\n};\nvar Curtain = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div).withConfig({\n  displayName: \"infobox__Curtain\",\n  componentId: \"sc-1lzkqc8-6\"\n})([\"position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.7);width:100%;height:100%;z-index:999;\"]); //// JSX ////\n\n_c7 = Curtain;\nfunction InfoBox() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),\n      _React$useState2 = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      showResults = _React$useState2[0],\n      setShowResults = _React$useState2[1];\n\n  var onClick = function onClick() {\n    return setShowResults(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n    children: showResults && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Curtain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxStyle, {\n        initial: \"hidden\",\n        animate: \"animate\",\n        exit: \"exit\",\n        variants: InfoBoxVariant,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxHeader, {\n          size: 1.4,\n          children: \"Welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxHeader, {\n          size: 2.,\n          children: \"Montreal Traffic Simulation\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InfoBoxText, {\n          size: 1.,\n          children: \"Montreal Traffic Simulation\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxButton, {\n          whileHover: \"whileHover\",\n          whileTap: \"whileTap\",\n          variants: InfoBoxButtonVariant,\n          onClick: onClick,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxIcon, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 161,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CloseInfoBoxText, {\n            children: \" ENTER \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 162,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 136,\n    columnNumber: 5\n  }, this);\n}\n\n_s(InfoBox, \"VGxh5eZA2BKFgSvDZ8xvBXZ9Pxk=\");\n\n_c8 = InfoBox;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"InfoBoxStyle\");\n$RefreshReg$(_c2, \"InfoBoxHeader\");\n$RefreshReg$(_c3, \"InfoBoxText\");\n$RefreshReg$(_c4, \"CloseInfoBoxButton\");\n$RefreshReg$(_c5, \"CloseInfoBoxIcon\");\n$RefreshReg$(_c6, \"CloseInfoBoxText\");\n$RefreshReg$(_c7, \"Curtain\");\n$RefreshReg$(_c8, \"InfoBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy93ZWxjb21lL2luZm9ib3guanM/Y2UxOSJdLCJuYW1lcyI6WyJJbmZvQm94U3R5bGUiLCJzdHlsZWQiLCJtb3Rpb24iLCJkaXYiLCJJbmZvQm94SGVhZGVyIiwiaDIiLCJwcm9wcyIsInNpemUiLCJJbmZvQm94VGV4dCIsInNwYW4iLCJDbG9zZUluZm9Cb3hCdXR0b24iLCJidXR0b24iLCJDbG9zZUluZm9Cb3hJY29uIiwiRW50ZXIiLCJDbG9zZUluZm9Cb3hUZXh0IiwiaDQiLCJJbmZvQm94VmFyaWFudCIsImhpZGRlbiIsInkiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwidHlwZSIsImJvdW5jZURhbXBpbmciLCJzdGlmZm5lc3MiLCJkdXJhdGlvbiIsImV4aXQiLCJlYXNlIiwiSW5mb0JveEJ1dHRvblZhcmlhbnQiLCJ3aGlsZUhvdmVyIiwid2hpbGVUYXAiLCJDdXJ0YWluIiwiSW5mb0JveCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzaG93UmVzdWx0cyIsInNldFNob3dSZXN1bHRzIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLEdBQVIsQ0FBVDtBQUFBO0FBQUE7QUFBQSxtUEFBbEI7S0FBTUgsWTtBQWtCTixJQUFNSSxhQUFhLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEseUZBQ0YsVUFBQ0MsS0FBRDtBQUFBLFNBQVVBLEtBQUssQ0FBQ0MsSUFBaEI7QUFBQSxDQURFLENBQW5CO01BQU1ILGE7QUFPTixJQUFNSSxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLElBQVY7QUFBQTtBQUFBO0FBQUEsc0dBRUEsVUFBQ0gsS0FBRDtBQUFBLFNBQVVBLEtBQUssQ0FBQ0MsSUFBaEI7QUFBQSxDQUZB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QU8sRUFBRVMsT0FKYjtBQUFBLGtDQU1JLHFFQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFPSSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQWtDSDs7R0F0Q3VCTCxPOztNQUFBQSxPIiwiZmlsZSI6Ii4vc3JjL2NhbnZhcy93ZWxjb21lL2luZm9ib3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7RW50ZXJ9IGZyb20gJ0BzdHlsZWQtaWNvbnMvaW9uaWNvbnMtb3V0bGluZS9FbnRlcidcblxuXG4vLy8vIGNvbXBvbmVudCBzdHlsaW5nIC8vLy9cbmNvbnN0IEluZm9Cb3hTdHlsZSA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogNjBweDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzMztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG5gXG5cbmNvbnN0IEluZm9Cb3hIZWFkZXIgPSBzdHlsZWQuaDJgXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcyk9Pihwcm9wcy5zaXplKX1yZW07XG4gICAgY29sb3I6ICNhNmMxZDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuYFxuXG5jb25zdCBJbmZvQm94VGV4dCA9IHN0eWxlZC5zcGFuYFxuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcyk9Pihwcm9wcy5zaXplKX1yZW07XG4gICAgY29sb3I6ICNhNmMxZDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuYFxuXG5jb25zdCBDbG9zZUluZm9Cb3hCdXR0b24gPSBzdHlsZWQobW90aW9uLmJ1dHRvbilgXG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgd2lkdGg6IDdyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzMztcbiAgICAmOiBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQ3NTk7XG4gICAgfVxuYFxuXG5jb25zdCBDbG9zZUluZm9Cb3hJY29uID0gc3R5bGVkKEVudGVyKWBcbiAgICAkeycnIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi99XG4gICAgY29sb3I6ICNhNmMxZDI7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmBcblxuY29uc3QgQ2xvc2VJbmZvQm94VGV4dCA9IHN0eWxlZC5oNGBcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogI2E2YzFkMjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmBcblxuLy8vLyBhbmltYXRpb24gc2V0dGluZ3MgLy8vL1xuY29uc3QgSW5mb0JveFZhcmlhbnQgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICAgIHk6IC04MDAsXG4gICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgc2NhbGU6IDAuMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogLjksXG4gICAgICAgIHNjYWxlOiAuOCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZGVsYXk6IDMsXG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgYm91bmNlRGFtcGluZzogMjAsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICAgICAgICAgIC8vIGVhc2U6IFwiZWFzZUluT3V0XCIsIFxuICAgICAgICAgICAgZHVyYXRpb246IC41LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHNjYWxlOiAuMCxcbiAgICAgICAgeTogWy0yMDAsIDgwMF0sXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICBib3VuY2VEYW1waW5nOiAyMCxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIiwgXG4gICAgICAgICAgICBkdXJhdGlvbjogLjUsXG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5jb25zdCBJbmZvQm94QnV0dG9uVmFyaWFudCA9IHtcbiAgICB3aGlsZUhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IC45LFxuICAgICAgICBzY2FsZTogMS4xLFxuICAgICAgICB0cmFuc2l0aW9uOiB7IFxuICAgICAgICAgICAgZHVyYXRpb246IC4xLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2hpbGVUYXA6IHtcbiAgICAgICAgc2NhbGU6IC45NVxuICAgIH1cbn1cblxuY29uc3QgQ3VydGFpbiA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG5gXG5cbi8vLy8gSlNYIC8vLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9Cb3goKSB7XG4gICAgY29uc3QgW3Nob3dSZXN1bHRzLCBzZXRTaG93UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzZXRTaG93UmVzdWx0cyhmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge3Nob3dSZXN1bHRzICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEN1cnRhaW4vPlxuICAgICAgICAgICAgICAgIDxJbmZvQm94U3R5bGUgXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbicgXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9J2FuaW1hdGUnICBcbiAgICAgICAgICAgICAgICAgICAgZXhpdD0nZXhpdCdcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e0luZm9Cb3hWYXJpYW50fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9Cb3hIZWFkZXIgc2l6ZT17MS40fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQm94SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb0JveEhlYWRlciBzaXplPXsyLn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250cmVhbCBUcmFmZmljIFNpbXVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQm94SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb0JveFRleHQgc2l6ZT17MS59PlxuICAgICAgICAgICAgICAgICAgICAgICAgTW9udHJlYWwgVHJhZmZpYyBTaW11bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvSW5mb0JveFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUluZm9Cb3hCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPSd3aGlsZUhvdmVyJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPSd3aGlsZVRhcCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtJbmZvQm94QnV0dG9uVmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUluZm9Cb3hJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUluZm9Cb3hUZXh0PiBFTlRFUiA8L0Nsb3NlSW5mb0JveFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2xvc2VJbmZvQm94QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvSW5mb0JveFN0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas/welcome/infobox.js\n");

/***/ })

})