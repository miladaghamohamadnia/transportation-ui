webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/canvas.js":
/*!******************************!*\
  !*** ./src/canvas/canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _slidings_sidebox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slidings/sidebox */ \"./src/canvas/slidings/sidebox.js\");\n/* harmony import */ var _welcome_infobox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/infobox */ \"./src/canvas/welcome/infobox.js\");\n/* harmony import */ var _slidings_slidingmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slidings/slidingmenu */ \"./src/canvas/slidings/slidingmenu.js\");\n/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map */ \"./src/canvas/map/map.js\");\n/* harmony import */ var _loading_loadingspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading/loadingspinner */ \"./src/canvas/loading/loadingspinner.js\");\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/canvas.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CanvasStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"canvas__CanvasStyle\",\n  componentId: \"sc-44bnp8-0\"\n})([\"position:relative;\"]); // const initialMapParams = {\n//     basemap: 'dark',\n// }\n\n_c = CanvasStyle;\nvar mapColors = {\n  traffic: {\n    agentColors: [[200, 200, 0, 255], [0, 200, 200, 255], [200, 0, 200, 255]]\n  },\n  buildings: {}\n};\nfunction Canvas() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showCtrlsSlider = _useState[0],\n      setShowCtrlsSlider = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showAboutSlider = _useState2[0],\n      setshowAboutSlider = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showBldgs = _useState3[0],\n      setshowBldgs = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showVhls = _useState4[0],\n      setshowVhls = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLoading = _useState5[0],\n      setIsLoading = _useState5[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CanvasStyle, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_welcome_infobox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_map_map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      buildingsShowProps: [showBldgs, setshowBldgs],\n      vehiclesShowProps: [showVhls, setshowVhls],\n      loadingProps: [isLoading, setIsLoading],\n      mapColors: mapColors\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_slidings_slidingmenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      buildingsShowProps: [showBldgs, setshowBldgs],\n      vehiclesShowProps: [showVhls, setshowVhls],\n      controlProps: [showCtrlsSlider, setShowCtrlsSlider],\n      aboutProps: [showAboutSlider, setshowAboutSlider],\n      mapColors: mapColors\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_loading_loadingspinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 27\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Canvas, \"xA3uLGHBVFIsjf8noogiXyfrmgs=\");\n\n_c2 = Canvas;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CanvasStyle\");\n$RefreshReg$(_c2, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9jYW52YXMuanM/MjU0NSJdLCJuYW1lcyI6WyJDYW52YXNTdHlsZSIsInN0eWxlZCIsImRpdiIsIm1hcENvbG9ycyIsInRyYWZmaWMiLCJhZ2VudENvbG9ycyIsImJ1aWxkaW5ncyIsIkNhbnZhcyIsInVzZVN0YXRlIiwic2hvd0N0cmxzU2xpZGVyIiwic2V0U2hvd0N0cmxzU2xpZGVyIiwic2hvd0Fib3V0U2xpZGVyIiwic2V0c2hvd0Fib3V0U2xpZGVyIiwic2hvd0JsZGdzIiwic2V0c2hvd0JsZGdzIiwic2hvd1ZobHMiLCJzZXRzaG93VmhscyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBakIsQyxDQUlBO0FBQ0E7QUFDQTs7S0FOTUYsVztBQVFOLElBQU1HLFNBQVMsR0FBRztBQUNkQyxTQUFPLEVBQUM7QUFDSkMsZUFBVyxFQUFFLENBQ2IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsRUFBYyxHQUFkLENBRGEsRUFFYixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLEdBQWQsQ0FGYSxFQUdiLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULEVBQWMsR0FBZCxDQUhhO0FBRFQsR0FETTtBQU9kQyxXQUFTLEVBQUU7QUFQRyxDQUFsQjtBQWFlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsS0FBRCxDQUR6QjtBQUFBLE1BQ3RCQyxlQURzQjtBQUFBLE1BQ0xDLGtCQURLOztBQUFBLG1CQUVpQkYsc0RBQVEsQ0FBQyxLQUFELENBRnpCO0FBQUEsTUFFdEJHLGVBRnNCO0FBQUEsTUFFTEMsa0JBRks7O0FBQUEsbUJBR0tKLHNEQUFRLENBQUMsS0FBRCxDQUhiO0FBQUEsTUFHdEJLLFNBSHNCO0FBQUEsTUFHWEMsWUFIVzs7QUFBQSxtQkFJR04sc0RBQVEsQ0FBQyxLQUFELENBSlg7QUFBQSxNQUl0Qk8sUUFKc0I7QUFBQSxNQUlaQyxXQUpZOztBQUFBLG1CQUtLUixzREFBUSxDQUFDLEtBQUQsQ0FMYjtBQUFBLE1BS3RCUyxTQUxzQjtBQUFBLE1BS1hDLFlBTFc7O0FBTzdCLHNCQUNJLHFFQUFDLFdBQUQ7QUFBQSw0QkFDSSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxnREFBRDtBQUNJLHdCQUFrQixFQUFFLENBQUNMLFNBQUQsRUFBWUMsWUFBWixDQUR4QjtBQUVJLHVCQUFpQixFQUFFLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxDQUZ2QjtBQUdJLGtCQUFZLEVBQUUsQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLENBSGxCO0FBSUksZUFBUyxFQUFJZjtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFRSSxxRUFBQyw2REFBRDtBQUNJLHdCQUFrQixFQUFFLENBQUNVLFNBQUQsRUFBWUMsWUFBWixDQUR4QjtBQUVJLHVCQUFpQixFQUFFLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxDQUZ2QjtBQUdJLGtCQUFZLEVBQUUsQ0FBQ1AsZUFBRCxFQUFrQkMsa0JBQWxCLENBSGxCO0FBSUksZ0JBQVUsRUFBRSxDQUFDQyxlQUFELEVBQWtCQyxrQkFBbEIsQ0FKaEI7QUFLSSxlQUFTLEVBQUVUO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLEVBbUJLYyxTQUFTLGlCQUFJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQTlCdUJWLE07O01BQUFBLE0iLCJmaWxlIjoiLi9zcmMvY2FudmFzL2NhbnZhcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBTaWRlQm94IGZyb20gJy4vc2xpZGluZ3Mvc2lkZWJveCdcbmltcG9ydCBJbmZvQm94IGZyb20gJy4vd2VsY29tZS9pbmZvYm94J1xuaW1wb3J0IFNsaWRpbmdNZW51IGZyb20gJy4vc2xpZGluZ3Mvc2xpZGluZ21lbnUnXG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwL21hcCdcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuL2xvYWRpbmcvbG9hZGluZ3NwaW5uZXInXG5cblxuY29uc3QgQ2FudmFzU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcbiBcbi8vIGNvbnN0IGluaXRpYWxNYXBQYXJhbXMgPSB7XG4vLyAgICAgYmFzZW1hcDogJ2RhcmsnLFxuLy8gfVxuXG5jb25zdCBtYXBDb2xvcnMgPSB7XG4gICAgdHJhZmZpYzp7XG4gICAgICAgIGFnZW50Q29sb3JzOiBbXG4gICAgICAgIFsyMDAsIDIwMCwgMCwgMjU1XSxcbiAgICAgICAgWzAsIDIwMCwgMjAwLCAyNTVdLFxuICAgICAgICBbMjAwLCAwLCAyMDAsIDI1NV0sXVxuICAgIH0sXG4gICAgYnVpbGRpbmdzOiB7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FudmFzKCkge1xuICAgIGNvbnN0IFtzaG93Q3RybHNTbGlkZXIsIHNldFNob3dDdHJsc1NsaWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc2hvd0Fib3V0U2xpZGVyLCBzZXRzaG93QWJvdXRTbGlkZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Nob3dCbGRncywgc2V0c2hvd0JsZGdzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzaG93Vmhscywgc2V0c2hvd1ZobHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhbnZhc1N0eWxlPlxuICAgICAgICAgICAgPEluZm9Cb3gvPlxuICAgICAgICAgICAgPE1hcCBcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NTaG93UHJvcHM9e1tzaG93QmxkZ3MsIHNldHNob3dCbGRnc119IFxuICAgICAgICAgICAgICAgIHZlaGljbGVzU2hvd1Byb3BzPXtbc2hvd1ZobHMsIHNldHNob3dWaGxzXX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nUHJvcHM9e1tpc0xvYWRpbmcsIHNldElzTG9hZGluZ119XG4gICAgICAgICAgICAgICAgbWFwQ29sb3JzID0ge21hcENvbG9yc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2xpZGluZ01lbnVcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NTaG93UHJvcHM9e1tzaG93QmxkZ3MsIHNldHNob3dCbGRnc119IFxuICAgICAgICAgICAgICAgIHZlaGljbGVzU2hvd1Byb3BzPXtbc2hvd1ZobHMsIHNldHNob3dWaGxzXX1cbiAgICAgICAgICAgICAgICBjb250cm9sUHJvcHM9e1tzaG93Q3RybHNTbGlkZXIsIHNldFNob3dDdHJsc1NsaWRlcl19XG4gICAgICAgICAgICAgICAgYWJvdXRQcm9wcz17W3Nob3dBYm91dFNsaWRlciwgc2V0c2hvd0Fib3V0U2xpZGVyXX1cbiAgICAgICAgICAgICAgICBtYXBDb2xvcnM9e21hcENvbG9yc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogPFNpZGVCb3gvPiAqL31cbiAgICAgICAgICAgIHsvKiA8TWV0cmljcy8+ICovfVxuICAgICAgICAgICAgey8qIDxDb250cm9scy8+ICovfVxuICAgICAgICAgICAgey8qIDxDcmVkaXRzLz4gKi99XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nU3Bpbm5lci8+fVxuICAgICAgICA8L0NhbnZhc1N0eWxlPlxuICAgIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas/canvas.js\n");

/***/ })

})