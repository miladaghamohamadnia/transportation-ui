webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/slidings/slidingcontrols.js":
/*!************************************************!*\
  !*** ./src/canvas/slidings/slidingcontrols.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SlidingControls; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _switchbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switchbutton */ \"./src/canvas/slidings/switchbutton.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/slidings/slidingcontrols.js\";\n\n\n\n\n\nvar Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div).withConfig({\n  displayName: \"slidingcontrols__Wrapper\",\n  componentId: \"sc-1aiv6m4-0\"\n})([\"position:relative;display:block;margin:2rem 0.2rem;padding:0rem;max-width:30vw;height:200px;background-color:rgba(31,41,51,255);\"]);\n_c = Wrapper;\nvar Attachedbutton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"slidingcontrols__Attachedbutton\",\n  componentId: \"sc-1aiv6m4-1\"\n})([\"position:absolute;display:block;right:0rem;top:50%;transform:translateY(-50%) translateX(100%) rotate(-180deg);margin:0rem;padding:0.0rem 0.0rem;writing-mode:tb-rl;text-align:center;opacity:0.6;&:hover{opacity:0.99;}\"]);\nvar SwitchList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].ul).withConfig({\n  displayName: \"slidingcontrols__SwitchList\",\n  componentId: \"sc-1aiv6m4-2\"\n})([\"position:absolute;display:flex;flex-direction:column;width:0;width:min-content;top:0;left:0;padding:0rem;padding:0.2rem;margin-top:0.2rem;background-color:rgba(45,60,74,255);text-align:center;font-size:1rem;font-weight:bold;color:rgba(235,239,242,255);\"]);\n_c2 = SwitchList;\nvar Switch = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li).withConfig({\n  displayName: \"slidingcontrols__Switch\",\n  componentId: \"sc-1aiv6m4-3\"\n})([\"position:relative;display:block;list-style-type:none;margin:5px;\"]);\n_c3 = Switch;\nfunction SlidingControls(props) {\n  var _props$controlProps = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.controlProps, 2),\n      showCtrlsSlider = _props$controlProps[0],\n      setShowCtrlsSlider = _props$controlProps[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Wrapper, {\n    animate: showCtrlsSlider ? 'show' : 'hidden' // exit='exit'\n    ,\n    variants: ctrlSliderVariant,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n      height: 'auto',\n      paddingTop: '.3rem',\n      paddingRight: '.3rem',\n      appearance: showCtrlsSlider ? 'primary' : 'secondary',\n      children: [\"controls\", showCtrlsSlider ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__[\"CaretRightIcon\"], {\n        color: \"danger\",\n        size: '1.5rem',\n        marginBottom: '.1rem'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 21\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__[\"CaretLeftIcon\"], {\n        color: \"danger\",\n        size: '1.5rem',\n        marginBottom: '.1rem'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SwitchList, {\n      children: [\"show/hide layers\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Switch, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_switchbutton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          stateVal: props.buildingsShowProps[0],\n          setStateVal: props.buildingsShowProps[1],\n          text: \"buildings\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Switch, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_switchbutton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          stateVal: props.vehiclesShowProps[0],\n          setStateVal: props.vehiclesShowProps[1],\n          text: \"vehicles\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, this);\n} //// animation settings ////\n\n_c4 = SlidingControls;\nvar ctrlSliderVariant = {\n  show: {\n    x: 0,\n    opacity: 0.99,\n    transition: {}\n  },\n  hidden: {\n    x: '-30vw',\n    opacity: 0.7,\n    transition: {}\n  },\n  exit: {\n    scale: .0,\n    y: [-200, 800],\n    transition: {\n      type: \"spring\",\n      bounceDamping: 20,\n      stiffness: 100,\n      ease: \"easeInOut\",\n      duration: .5\n    }\n  }\n};\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"SwitchList\");\n$RefreshReg$(_c3, \"Switch\");\n$RefreshReg$(_c4, \"SlidingControls\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9zbGlkaW5ncy9zbGlkaW5nY29udHJvbHMuanM/NjY1OSJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwibW90aW9uIiwiZGl2IiwiQXR0YWNoZWRidXR0b24iLCJTd2l0Y2hMaXN0IiwidWwiLCJTd2l0Y2giLCJsaSIsIlNsaWRpbmdDb250cm9scyIsInByb3BzIiwiY29udHJvbFByb3BzIiwic2hvd0N0cmxzU2xpZGVyIiwic2V0U2hvd0N0cmxzU2xpZGVyIiwiY3RybFNsaWRlclZhcmlhbnQiLCJidWlsZGluZ3NTaG93UHJvcHMiLCJ2ZWhpY2xlc1Nob3dQcm9wcyIsInNob3ciLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJoaWRkZW4iLCJleGl0Iiwic2NhbGUiLCJ5IiwidHlwZSIsImJvdW5jZURhbXBpbmciLCJzdGlmZm5lc3MiLCJlYXNlIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsR0FBUixDQUFUO0FBQUE7QUFBQTtBQUFBLHdJQUFiO0tBQU1ILE87QUFVTixJQUFNSSxjQUFjLEdBQUdILHlEQUFNLENBQUNFLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ09BQXBCO0FBZ0JBLElBQU1FLFVBQVUsR0FBR0osaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0ksRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLG9RQUFoQjtNQUFNRCxVO0FBa0JOLElBQU1FLE1BQU0sR0FBR04saUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ00sRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLHdFQUFaO01BQU1ELE07QUFTUyxTQUFTRSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBLGtNQUNHQSxLQUFLLENBQUNDLFlBRFQ7QUFBQSxNQUNwQ0MsZUFEb0M7QUFBQSxNQUNuQkMsa0JBRG1COztBQUUzQyxzQkFDSSxxRUFBQyxPQUFEO0FBQ0ksV0FBTyxFQUFFRCxlQUFlLEdBQUcsTUFBSCxHQUFZLFFBRHhDLENBRUk7QUFGSjtBQUdJLFlBQVEsRUFBRUUsaUJBSGQ7QUFBQSw0QkFRSSxxRUFBQyxtREFBRDtBQUNJLFlBQU0sRUFBRSxNQURaO0FBRUksZ0JBQVUsRUFBRSxPQUZoQjtBQUdJLGtCQUFZLEVBQUUsT0FIbEI7QUFJSSxnQkFBVSxFQUFFRixlQUFlLEdBQUcsU0FBSCxHQUFlLFdBSjlDO0FBQUEsNkJBT0tBLGVBQWUsZ0JBQ1oscUVBQUMsMkRBQUQ7QUFBZ0IsYUFBSyxFQUFDLFFBQXRCO0FBQStCLFlBQUksRUFBRSxRQUFyQztBQUErQyxvQkFBWSxFQUFFO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEWSxnQkFFWixxRUFBQywwREFBRDtBQUFlLGFBQUssRUFBQyxRQUFyQjtBQUE4QixZQUFJLEVBQUUsUUFBcEM7QUFBOEMsb0JBQVksRUFBRTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFzQkkscUVBQUMsVUFBRDtBQUFBLGtEQUVJLHFFQUFDLE1BQUQ7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUNJLGtCQUFRLEVBQUlGLEtBQUssQ0FBQ0ssa0JBQU4sQ0FBeUIsQ0FBekIsQ0FEaEI7QUFFSSxxQkFBVyxFQUFJTCxLQUFLLENBQUNLLGtCQUFOLENBQXlCLENBQXpCLENBRm5CO0FBR0ksY0FBSSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVNJLHFFQUFDLE1BQUQ7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUNJLGtCQUFRLEVBQUlMLEtBQUssQ0FBQ00saUJBQU4sQ0FBd0IsQ0FBeEIsQ0FEaEI7QUFFSSxxQkFBVyxFQUFJTixLQUFLLENBQUNNLGlCQUFOLENBQXdCLENBQXhCLENBRm5CO0FBR0ksY0FBSSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0gsQyxDQUdEOztNQS9Dd0JQLGU7QUFnRHhCLElBQU1LLGlCQUFpQixHQUFHO0FBRXRCRyxNQUFJLEVBQUU7QUFDRkMsS0FBQyxFQUFFLENBREQ7QUFFRkMsV0FBTyxFQUFFLElBRlA7QUFHRkMsY0FBVSxFQUFFO0FBSFYsR0FGZ0I7QUFPdEJDLFFBQU0sRUFBRTtBQUNKSCxLQUFDLEVBQUUsT0FEQztBQUVKQyxXQUFPLEVBQUUsR0FGTDtBQUdKQyxjQUFVLEVBQUU7QUFIUixHQVBjO0FBWXRCRSxNQUFJLEVBQUU7QUFDRkMsU0FBSyxFQUFFLEVBREw7QUFFRkMsS0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFGLEVBQU8sR0FBUCxDQUZEO0FBR0ZKLGNBQVUsRUFBRTtBQUNSSyxVQUFJLEVBQUUsUUFERTtBQUVSQyxtQkFBYSxFQUFFLEVBRlA7QUFHUkMsZUFBUyxFQUFFLEdBSEg7QUFJUkMsVUFBSSxFQUFFLFdBSkU7QUFLUkMsY0FBUSxFQUFFO0FBTEY7QUFIVjtBQVpnQixDQUExQiIsImZpbGUiOiIuL3NyYy9jYW52YXMvc2xpZGluZ3Mvc2xpZGluZ2NvbnRyb2xzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFN3aXRjaEJ1dHRvbiBmcm9tICcuL3N3aXRjaGJ1dHRvbidcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZXRSaWdodEljb24sIENhcmV0TGVmdEljb24sIGRlZmF1bHRUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ2V2ZXJncmVlbi11aSdcblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDJyZW0gMC4ycmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDUxLCAyNTUpO1xuYFxuXG5jb25zdCBBdHRhY2hlZGJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHJpZ2h0OiAwcmVtO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBtYXJnaW46IDByZW07XG4gICAgcGFkZGluZzogMC4wcmVtIDAuMHJlbTtcbiAgICB3cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgJjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMC45OTtcbiAgICB9XG5gXG5cbmNvbnN0IFN3aXRjaExpc3QgPSBzdHlsZWQobW90aW9uLnVsKWBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOjA7XG4gICAgd2lkdGg6bWluLWNvbnRlbnQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDYwLCA3NCwgMjU1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2JhKDIzNSwgMjM5LCAyNDIsIDI1NSk7XG5gXG5cbmNvbnN0IFN3aXRjaCA9IHN0eWxlZChtb3Rpb24ubGkpYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHg7XG5gXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkaW5nQ29udHJvbHMocHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd0N0cmxzU2xpZGVyLCBzZXRTaG93Q3RybHNTbGlkZXJdID0gcHJvcHMuY29udHJvbFByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXIgXG4gICAgICAgICAgICBhbmltYXRlPXtzaG93Q3RybHNTbGlkZXIgPyAnc2hvdycgOiAnaGlkZGVuJ30gIFxuICAgICAgICAgICAgLy8gZXhpdD0nZXhpdCdcbiAgICAgICAgICAgIHZhcmlhbnRzPXtjdHJsU2xpZGVyVmFyaWFudH1cbiAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxBdHRhY2hlZGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICB7Lyogb25DbGljayA9IHsoKT0+c2V0U2hvd0N0cmxzU2xpZGVyKCFzaG93Q3RybHNTbGlkZXIpfSAqL31cbiAgICAgICAgICAgIHsvKiA+ICovfVxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eydhdXRvJ30gXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcD17Jy4zcmVtJ30gXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXsnLjNyZW0nfSBcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPXtzaG93Q3RybHNTbGlkZXIgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgIHtzaG93Q3RybHNTbGlkZXIgPyBcbiAgICAgICAgICAgICAgICAgICAgPENhcmV0UmlnaHRJY29uIGNvbG9yPVwiZGFuZ2VyXCIgc2l6ZT17JzEuNXJlbSd9IG1hcmdpbkJvdHRvbT17Jy4xcmVtJ30vPiA6IFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZXRMZWZ0SWNvbiBjb2xvcj1cImRhbmdlclwiIHNpemU9eycxLjVyZW0nfSBtYXJnaW5Cb3R0b209eycuMXJlbSd9Lz59XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB7LyogY29udHJvbHMgKi99XG4gICAgICAgICAgICB7LyogPC9BdHRhY2hlZGJ1dHRvbj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxTd2l0Y2hMaXN0PlxuICAgICAgICAgICAgICAgIHNob3cvaGlkZSBsYXllcnMgXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlVmFsID0ge3Byb3BzLmJ1aWxkaW5nc1Nob3dQcm9wc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlVmFsID0ge3Byb3BzLmJ1aWxkaW5nc1Nob3dQcm9wc1sxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J2J1aWxkaW5ncydcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoQnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVWYWwgPSB7cHJvcHMudmVoaWNsZXNTaG93UHJvcHNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZVZhbCA9IHtwcm9wcy52ZWhpY2xlc1Nob3dQcm9wc1sxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J3ZlaGljbGVzJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9Td2l0Y2hMaXN0PlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKVxufVxuXG5cbi8vLy8gYW5pbWF0aW9uIHNldHRpbmdzIC8vLy9cbmNvbnN0IGN0cmxTbGlkZXJWYXJpYW50ID0ge1xuXG4gICAgc2hvdzoge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAwLjk5LFxuICAgICAgICB0cmFuc2l0aW9uOiB7fVxuICAgIH0sXG4gICAgaGlkZGVuOiB7XG4gICAgICAgIHg6ICctMzB2dycsXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICAgdHJhbnNpdGlvbjoge31cbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgc2NhbGU6IC4wLFxuICAgICAgICB5OiBbLTIwMCwgODAwXSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGJvdW5jZURhbXBpbmc6IDIwLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLCBcbiAgICAgICAgICAgIGR1cmF0aW9uOiAuNSxcbiAgICAgICAgfVxuICAgIH0sXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas/slidings/slidingcontrols.js\n");

/***/ })

})