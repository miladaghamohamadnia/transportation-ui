webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/map/map.js":
/*!*******************************!*\
  !*** ./src/canvas/map/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/react */ \"./node_modules/@deck.gl/react/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/layers */ \"./node_modules/@deck.gl/layers/dist/esm/index.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomTripsLayer */ \"./src/canvas/map/CustomTripsLayer.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/map/map.js\",\n    _s = $RefreshSig$();\n\n/* global window */\n\n\n\n\n\n // Source data CSV\n\nvar DATA_URL = {\n  BUILDINGS: // 'buildings_just_one.json', // eslint-disable-line\n  // 'buildings_VM_7_8.json', // eslint-disable-line\n  '/buildings_four_tiles_lyr_2.json',\n  // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line\n  // TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line\n  TRIPS: '/trips_small_tenth_.json' // eslint-disable-line\n  // TRIPS: '/trips_small_tenth.json' // eslint-disable-line\n\n};\nvar ambientLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"AmbientLight\"]({\n  color: [255, 255, 255],\n  intensity: 5.0\n});\nvar pointLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"PointLight\"]({\n  color: [255, 255, 255],\n  intensity: 2.0,\n  position: [-73.6154222, 45.486973, 8000]\n});\nvar lightingEffect = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"LightingEffect\"]({\n  ambientLight: ambientLight,\n  pointLight: pointLight\n});\nvar material = {\n  ambient: 0.1,\n  diffuse: 0.6,\n  shininess: 32,\n  specularColor: [0, 64, 70]\n};\nvar DEFAULT_THEME = {\n  buildingColor: [7, 59, 76, 255],\n  buildingOpacity: 0.99,\n  material: material,\n  effects: [lightingEffect]\n};\nvar INITIAL_VIEW_STATE = {\n  // longitude: -74,\n  // latitude: 40.72,  \n  longitude: -73.5654222,\n  latitude: 45.506973,\n  zoom: 11,\n  pitch: 45,\n  bearing: 0\n};\n\nvar calcPairDist = function calcPairDist(a) {\n  // calculates distance from start of path for every element\n  var distArr = [0];\n\n  for (var i = 1; i < a.length; i++) {\n    var dist = Math.sqrt(Math.pow(a[i][0] - a[i - 1][0], 2) + Math.pow(a[i][1] - a[i - 1][1], 2));\n    distArr.push(dist);\n  }\n\n  return distArr;\n};\n\nvar calcStartDist = function calcStartDist(distArr) {\n  // calculates distance from start of path for every element\n  return distArr.reduce(function (aa, x, i) {\n    return [].concat(Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(aa), [x + (aa[i - 1] || 0)]);\n  }, []);\n}; // const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';\n\n\nvar landCover = [[[-73.5, 45.4], [-73.6, 45.4], [-73.6, 45.6], [-73.5, 45.6]]];\nfunction Map(props, _ref) {\n  _s();\n\n  var _ref$buildings = _ref.buildings,\n      buildings = _ref$buildings === void 0 ? DATA_URL.BUILDINGS : _ref$buildings,\n      _ref$trips = _ref.trips,\n      trips = _ref$trips === void 0 ? DATA_URL.TRIPS : _ref$trips,\n      _ref$trailLength = _ref.trailLength,\n      trailLength = _ref$trailLength === void 0 ? 10 : _ref$trailLength,\n      _ref$widthMinPixels = _ref.widthMinPixels,\n      widthMinPixels = _ref$widthMinPixels === void 0 ? 4 : _ref$widthMinPixels,\n      _ref$initialViewState = _ref.initialViewState,\n      initialViewState = _ref$initialViewState === void 0 ? INITIAL_VIEW_STATE : _ref$initialViewState,\n      _ref$theme = _ref.theme,\n      theme = _ref$theme === void 0 ? DEFAULT_THEME : _ref$theme,\n      _ref$loopLength = _ref.loopLength,\n      loopLength = _ref$loopLength === void 0 ? 4800 : _ref$loopLength,\n      _ref$animationSpeed = _ref.animationSpeed,\n      animationSpeed = _ref$animationSpeed === void 0 ? 2.5 : _ref$animationSpeed;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      animation = _useState2[0];\n\n  var _props$buildingsShowP = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.buildingsShowProps, 2),\n      showBldgs = _props$buildingsShowP[0],\n      setshowBldgs = _props$buildingsShowP[1];\n\n  var _props$vehiclesShowPr = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.vehiclesShowProps, 2),\n      showVhls = _props$vehiclesShowPr[0],\n      setshowVhls = _props$vehiclesShowPr[1];\n\n  var _props$loadingProps = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.loadingProps, 2),\n      isLoading = _props$loadingProps[0],\n      setIsLoading = _props$loadingProps[1];\n\n  var agentColors = props.mapColors.traffic.agentColors;\n\n  var animate = function animate() {\n    setTime(function (t) {\n      return (t + animationSpeed) % loopLength;\n    });\n    animation.id = window.requestAnimationFrame(animate);\n  };\n\n  var layers = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    animation.id = window.requestAnimationFrame(animate);\n    return function () {\n      return window.cancelAnimationFrame(animation.id);\n    };\n  }, [animation]);\n  var ShadowSublayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'ground',\n    data: landCover,\n    getPolygon: function getPolygon(f) {\n      return f;\n    },\n    stroked: false,\n    getFillColor: [0, 0, 0, 0]\n  });\n  var VehiclesLayer = new _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    id: 'trips',\n    data: trips,\n    getPath: function getPath(d) {\n      return d.path;\n    },\n    getTimestamps: function getTimestamps(d) {\n      return d.timestamps;\n    },\n    getColor: function getColor(d) {\n      return d.vendor === 0 ? agentColors[0] : d.vendor === 1 ? agentColors[1] : agentColors[2];\n    },\n    opacity: 0.99,\n    widthMinPixels: widthMinPixels,\n    rounded: true,\n    trailLength: trailLength,\n    currentTime: time,\n    shadowEnabled: false // extensions: [new PointTripsLayer()],\n\n  });\n\n  function toColor(num) {\n    num >>>= 0;\n    var b = num & 0xFF,\n        g = (num & 0xFF00) >>> 8,\n        r = (num & 0xFF0000) >>> 16,\n        a = ((num & 0xFF000000) >>> 24) / 255; // return \"rgba(\" + [r, g, b, a].join(\",\") + \")\";\n\n    return [r, g, b, a];\n  }\n\n  var BuildingsLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'buildings',\n    data: buildings,\n    extruded: true,\n    wireframe: false,\n    opacity: theme.buildingOpacity,\n    getPolygon: function getPolygon(f) {\n      return f.polygon;\n    },\n    getElevation: function getElevation(f) {\n      return f.height;\n    },\n    getColor: function getColor(f) {\n      return toColor(Math.round(f.height));\n    },\n    getFillColor: theme.buildingColor,\n    // getFillColor: [222, 0, 0, 55],\n    material: theme.material\n  }); // async function loadVehicleLayer(){\n  //   console.log('1')\n  //   setIsLoading(true);\n  //   function callback(){\n  //     console.log('2')\n  //     return VehiclesLayer\n  //   }\n  //   // var res = await callback();\n  //   // console.log('3')\n  //   return await callback();\n  // }\n\n  var layers = [showBldgs && BuildingsLayer, showVhls && VehiclesLayer];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_deck_gl_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      'position': 'fixed',\n      'width': '100%',\n      'height': '100%'\n    },\n    layers: layers,\n    effects: theme.effects,\n    initialViewState: initialViewState,\n    controller: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      mapboxApiAccessToken: \"pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2toNmh1aW93MHIwajJxbzg3OWRuOTVleiJ9.9h4k5GEZOR9O8LS3gtaQow\",\n      width: 400,\n      height: 400,\n      latitude: 47.7577,\n      longitude: -73.4376,\n      zoom: 14,\n      mapStyle: \"mapbox://styles/miladnyu/ckiazf01c092e19s1k7fjbor4/draft\",\n      onViewportChange: function onViewportChange(viewport) {\n        var width = viewport.width,\n            height = viewport.height,\n            latitude = viewport.latitude,\n            longitude = viewport.longitude,\n            zoom = viewport.zoom; // call `setState` and use the state to update the map.\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Map, \"uMfl71cmdRtzLNiGOHW0DidA1JA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9tYXAvbWFwLmpzPzQzZjIiXSwibmFtZXMiOlsiREFUQV9VUkwiLCJCVUlMRElOR1MiLCJUUklQUyIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNvbG9yIiwiaW50ZW5zaXR5IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJwb3NpdGlvbiIsImxpZ2h0aW5nRWZmZWN0IiwiTGlnaHRpbmdFZmZlY3QiLCJtYXRlcmlhbCIsImFtYmllbnQiLCJkaWZmdXNlIiwic2hpbmluZXNzIiwic3BlY3VsYXJDb2xvciIsIkRFRkFVTFRfVEhFTUUiLCJidWlsZGluZ0NvbG9yIiwiYnVpbGRpbmdPcGFjaXR5IiwiZWZmZWN0cyIsIklOSVRJQUxfVklFV19TVEFURSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsImNhbGNQYWlyRGlzdCIsImEiLCJkaXN0QXJyIiwiaSIsImxlbmd0aCIsImRpc3QiLCJNYXRoIiwic3FydCIsInB1c2giLCJjYWxjU3RhcnREaXN0IiwicmVkdWNlIiwiYWEiLCJ4IiwibGFuZENvdmVyIiwiTWFwIiwicHJvcHMiLCJidWlsZGluZ3MiLCJ0cmlwcyIsInRyYWlsTGVuZ3RoIiwid2lkdGhNaW5QaXhlbHMiLCJpbml0aWFsVmlld1N0YXRlIiwidGhlbWUiLCJsb29wTGVuZ3RoIiwiYW5pbWF0aW9uU3BlZWQiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiYW5pbWF0aW9uIiwiYnVpbGRpbmdzU2hvd1Byb3BzIiwic2hvd0JsZGdzIiwic2V0c2hvd0JsZGdzIiwidmVoaWNsZXNTaG93UHJvcHMiLCJzaG93VmhscyIsInNldHNob3dWaGxzIiwibG9hZGluZ1Byb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWdlbnRDb2xvcnMiLCJtYXBDb2xvcnMiLCJ0cmFmZmljIiwiYW5pbWF0ZSIsInQiLCJpZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheWVycyIsInVzZUVmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiU2hhZG93U3VibGF5ZXIiLCJQb2x5Z29uTGF5ZXIiLCJkYXRhIiwiZ2V0UG9seWdvbiIsImYiLCJzdHJva2VkIiwiZ2V0RmlsbENvbG9yIiwiVmVoaWNsZXNMYXllciIsIlRyaXBzTGF5ZXIiLCJnZXRQYXRoIiwiZCIsInBhdGgiLCJnZXRUaW1lc3RhbXBzIiwidGltZXN0YW1wcyIsImdldENvbG9yIiwidmVuZG9yIiwib3BhY2l0eSIsInJvdW5kZWQiLCJjdXJyZW50VGltZSIsInNoYWRvd0VuYWJsZWQiLCJ0b0NvbG9yIiwibnVtIiwiYiIsImciLCJyIiwiQnVpbGRpbmdzTGF5ZXIiLCJleHRydWRlZCIsIndpcmVmcmFtZSIsInBvbHlnb24iLCJnZXRFbGV2YXRpb24iLCJoZWlnaHQiLCJyb3VuZCIsInZpZXdwb3J0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLFdBQVMsRUFDUDtBQUNBO0FBQ0Esb0NBSmE7QUFLYjtBQUNGO0FBQ0FDLE9BQUssRUFBRSwwQkFQUSxDQU9tQjtBQUNsQzs7QUFSZSxDQUFqQjtBQVdBLElBQU1DLFlBQVksR0FBRyxJQUFJQywwREFBSixDQUFpQjtBQUNwQ0MsT0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRDZCO0FBRXBDQyxXQUFTLEVBQUU7QUFGeUIsQ0FBakIsQ0FBckI7QUFLQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsd0RBQUosQ0FBZTtBQUNoQ0gsT0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRHlCO0FBRWhDQyxXQUFTLEVBQUUsR0FGcUI7QUFHaENHLFVBQVEsRUFBRSxDQUFDLENBQUMsVUFBRixFQUFjLFNBQWQsRUFBeUIsSUFBekI7QUFI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d2luZG93ICovXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FtYmllbnRMaWdodCwgUG9pbnRMaWdodCwgTGlnaHRpbmdFZmZlY3R9IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IERlY2tHTCBmcm9tICdAZGVjay5nbC9yZWFjdCc7XG5pbXBvcnQge1BvbHlnb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCBSZWFjdE1hcEdMIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVHJpcHNMYXllcn0gZnJvbSAnLi9DdXN0b21Ucmlwc0xheWVyJztcblxuXG4vLyBTb3VyY2UgZGF0YSBDU1ZcbmNvbnN0IERBVEFfVVJMID0ge1xuICBCVUlMRElOR1M6XG4gICAgLy8gJ2J1aWxkaW5nc19qdXN0X29uZS5qc29uJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIC8vICdidWlsZGluZ3NfVk1fN184Lmpzb24nLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgJy9idWlsZGluZ3NfZm91cl90aWxlc19seXJfMi5qc29uJyxcbiAgICAvLyAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc2dsL2RlY2suZ2wtZGF0YS9tYXN0ZXIvZXhhbXBsZXMvdHJpcHMvYnVpbGRpbmdzLmpzb24nLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC8vIFRSSVBTOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc2dsL2RlY2suZ2wtZGF0YS9tYXN0ZXIvZXhhbXBsZXMvdHJpcHMvdHJpcHMtdjcuanNvbicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBUUklQUzogJy90cmlwc19zbWFsbF90ZW50aF8uanNvbicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAvLyBUUklQUzogJy90cmlwc19zbWFsbF90ZW50aC5qc29uJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KHtcbiAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgaW50ZW5zaXR5OiA1LjBcbn0pO1xuXG5jb25zdCBwb2ludExpZ2h0ID0gbmV3IFBvaW50TGlnaHQoe1xuICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICBpbnRlbnNpdHk6IDIuMCxcbiAgcG9zaXRpb246IFstNzMuNjE1NDIyMiwgNDUuNDg2OTczLCA4MDAwXVxufSk7XG5cbmNvbnN0IGxpZ2h0aW5nRWZmZWN0ID0gbmV3IExpZ2h0aW5nRWZmZWN0KHthbWJpZW50TGlnaHQsIHBvaW50TGlnaHR9KTtcblxuY29uc3QgbWF0ZXJpYWwgPSB7XG4gIGFtYmllbnQ6IDAuMSxcbiAgZGlmZnVzZTogMC42LFxuICBzaGluaW5lc3M6IDMyLFxuICBzcGVjdWxhckNvbG9yOiBbMCwgNjQsIDcwXVxufTtcblxuY29uc3QgREVGQVVMVF9USEVNRSA9IHtcbiAgYnVpbGRpbmdDb2xvcjogWzcsIDU5LCA3NiwgMjU1XSxcbiAgYnVpbGRpbmdPcGFjaXR5OiAwLjk5LFxuICBtYXRlcmlhbCxcbiAgZWZmZWN0czogW2xpZ2h0aW5nRWZmZWN0XVxufTtcblxuY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAvLyBsb25naXR1ZGU6IC03NCxcbiAgLy8gbGF0aXR1ZGU6IDQwLjcyLCAgXG4gIGxvbmdpdHVkZTogLTczLjU2NTQyMjIsXG4gIGxhdGl0dWRlOiA0NS41MDY5NzMsIFxuICB6b29tOiAxMSxcbiAgcGl0Y2g6IDQ1LFxuICBiZWFyaW5nOiAwXG59O1xuXG5cbmNvbnN0IGNhbGNQYWlyRGlzdCA9IGZ1bmN0aW9uKGEpIHtcbiAgLy8gY2FsY3VsYXRlcyBkaXN0YW5jZSBmcm9tIHN0YXJ0IG9mIHBhdGggZm9yIGV2ZXJ5IGVsZW1lbnRcbiAgdmFyIGRpc3RBcnIgPSBbMF1cbiAgZm9yKHZhciBpPTE7IGk8YS5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQoKGFbaV1bMF0tYVtpLTFdWzBdKSoqMisoYVtpXVsxXS1hW2ktMV1bMV0pKioyKVxuICAgIGRpc3RBcnIucHVzaChkaXN0KTtcbiAgfVxuICByZXR1cm4gZGlzdEFycjtcbn1cblxuY29uc3QgY2FsY1N0YXJ0RGlzdCA9IGZ1bmN0aW9uKGRpc3RBcnIpIHtcbiAgLy8gY2FsY3VsYXRlcyBkaXN0YW5jZSBmcm9tIHN0YXJ0IG9mIHBhdGggZm9yIGV2ZXJ5IGVsZW1lbnRcbiAgcmV0dXJuIGRpc3RBcnIucmVkdWNlKChhYSwgeCwgaSkgPT4gWy4uLmFhLCB4ICsgKGFhW2ktMV0gfHwgMCldLCBbXSk7XG59XG5cblxuLy8gY29uc3QgTUFQX1NUWUxFID0gJ2h0dHBzOi8vYmFzZW1hcHMuY2FydG9jZG4uY29tL2dsL3ZveWFnZXItbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG4vLyBjb25zdCBNQVBfU1RZTEUgPSAnaHR0cHM6Ly9iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZ2wvcG9zaXRyb24tbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG4vLyBjb25zdCBNQVBfU1RZTEUgPSAnaHR0cHM6Ly9iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZ2wvZGFyay1tYXR0ZXItbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG5cbmNvbnN0IGxhbmRDb3ZlciA9IFtbWy03My41LCA0NS40XSwgWy03My42LCA0NS40XSwgWy03My42LCA0NS42XSwgWy03My41LCA0NS42XV1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAocHJvcHMse1xuICBidWlsZGluZ3MgPSBEQVRBX1VSTC5CVUlMRElOR1MsXG4gIHRyaXBzID0gREFUQV9VUkwuVFJJUFMsXG4gIHRyYWlsTGVuZ3RoID0gMTAsXG4gIHdpZHRoTWluUGl4ZWxzID0gNCxcbiAgaW5pdGlhbFZpZXdTdGF0ZSA9IElOSVRJQUxfVklFV19TVEFURSxcbiAgLy8gbWFwU3R5bGUgPSBNQVBfU1RZTEUsXG4gIHRoZW1lID0gREVGQVVMVF9USEVNRSxcbiAgbG9vcExlbmd0aCA9IDQ4MDAsIC8vIHVuaXQgY29ycmVzcG9uZHMgdG8gdGhlIHRpbWVzdGFtcCBpbiBzb3VyY2UgZGF0YVxuICBhbmltYXRpb25TcGVlZCA9IDIuNVxufSkge1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYW5pbWF0aW9uXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3Nob3dCbGRncywgc2V0c2hvd0JsZGdzXSA9IHByb3BzLmJ1aWxkaW5nc1Nob3dQcm9wc1xuICBjb25zdCBbc2hvd1ZobHMsIHNldHNob3dWaGxzXSA9IHByb3BzLnZlaGljbGVzU2hvd1Byb3BzXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBwcm9wcy5sb2FkaW5nUHJvcHNcblxuICBjb25zdCBhZ2VudENvbG9ycyA9IHByb3BzLm1hcENvbG9ycy50cmFmZmljLmFnZW50Q29sb3JzO1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgc2V0VGltZSh0ID0+ICh0ICsgYW5pbWF0aW9uU3BlZWQpICUgbG9vcExlbmd0aCk7XG4gICAgYW5pbWF0aW9uLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfTtcblxuICB2YXIgbGF5ZXJzPVtdO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uLmlkKTtcbiAgICB9LFxuICAgIFthbmltYXRpb25dXG4gICk7XG5cbiAgY29uc3QgU2hhZG93U3VibGF5ZXIgPSBuZXcgUG9seWdvbkxheWVyKHtcbiAgICBpZDogJ2dyb3VuZCcsXG4gICAgZGF0YTogbGFuZENvdmVyLFxuICAgIGdldFBvbHlnb246IGYgPT4gZixcbiAgICBzdHJva2VkOiBmYWxzZSxcbiAgICBnZXRGaWxsQ29sb3I6IFswLCAwLCAwLCAwXVxuICB9KVxuXG4gIGNvbnN0IFZlaGljbGVzTGF5ZXIgPSBuZXcgVHJpcHNMYXllcih7XG4gICAgaWQ6ICd0cmlwcycsXG4gICAgZGF0YTogdHJpcHMsXG4gICAgZ2V0UGF0aDogZCA9PiBkLnBhdGgsXG4gICAgZ2V0VGltZXN0YW1wczogZCA9PiBkLnRpbWVzdGFtcHMsXG4gICAgZ2V0Q29sb3I6IGQgPT4gKGQudmVuZG9yID09PSAwID8gYWdlbnRDb2xvcnNbMF0gOiAoZC52ZW5kb3IgPT09IDEgPyBhZ2VudENvbG9yc1sxXSA6IGFnZW50Q29sb3JzWzJdKSksXG4gICAgb3BhY2l0eTogMC45OSxcbiAgICB3aWR0aE1pblBpeGVscyxcbiAgICByb3VuZGVkOiB0cnVlLFxuICAgIHRyYWlsTGVuZ3RoLFxuICAgIGN1cnJlbnRUaW1lOiB0aW1lLFxuICAgIHNoYWRvd0VuYWJsZWQ6IGZhbHNlLFxuICAgIC8vIGV4dGVuc2lvbnM6IFtuZXcgUG9pbnRUcmlwc0xheWVyKCldLFxuICB9KVxuICBcbiAgZnVuY3Rpb24gdG9Db2xvcihudW0pIHtcbiAgICBudW0gPj4+PSAwO1xuICAgIHZhciBiID0gbnVtICYgMHhGRixcbiAgICAgICAgZyA9IChudW0gJiAweEZGMDApID4+PiA4LFxuICAgICAgICByID0gKG51bSAmIDB4RkYwMDAwKSA+Pj4gMTYsXG4gICAgICAgIGEgPSAoIChudW0gJiAweEZGMDAwMDAwKSA+Pj4gMjQgKSAvIDI1NSA7XG4gICAgLy8gcmV0dXJuIFwicmdiYShcIiArIFtyLCBnLCBiLCBhXS5qb2luKFwiLFwiKSArIFwiKVwiO1xuICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gIH1cblxuICBjb25zdCBCdWlsZGluZ3NMYXllciA9IG5ldyBQb2x5Z29uTGF5ZXIoe1xuICAgIGlkOiAnYnVpbGRpbmdzJyxcbiAgICBkYXRhOiBidWlsZGluZ3MsXG4gICAgZXh0cnVkZWQ6IHRydWUsXG4gICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICBvcGFjaXR5OiB0aGVtZS5idWlsZGluZ09wYWNpdHksXG4gICAgZ2V0UG9seWdvbjogZiA9PiBmLnBvbHlnb24sXG4gICAgZ2V0RWxldmF0aW9uOiBmID0+IGYuaGVpZ2h0LFxuICAgIGdldENvbG9yOiBmID0+IHRvQ29sb3IoTWF0aC5yb3VuZChmLmhlaWdodCkpLFxuICAgIGdldEZpbGxDb2xvcjogdGhlbWUuYnVpbGRpbmdDb2xvcixcbiAgICAvLyBnZXRGaWxsQ29sb3I6IFsyMjIsIDAsIDAsIDU1XSxcbiAgICBtYXRlcmlhbDogdGhlbWUubWF0ZXJpYWxcbiAgfSlcblxuICBcbiAgLy8gYXN5bmMgZnVuY3Rpb24gbG9hZFZlaGljbGVMYXllcigpe1xuICAvLyAgIGNvbnNvbGUubG9nKCcxJylcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgZnVuY3Rpb24gY2FsbGJhY2soKXtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCcyJylcbiAgLy8gICAgIHJldHVybiBWZWhpY2xlc0xheWVyXG4gIC8vICAgfVxuICAvLyAgIC8vIHZhciByZXMgPSBhd2FpdCBjYWxsYmFjaygpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKCczJylcbiAgLy8gICByZXR1cm4gYXdhaXQgY2FsbGJhY2soKTtcbiAgLy8gfVxuXG5cbiAgdmFyIGxheWVycyA9IFtcbiAgICBzaG93QmxkZ3MgJiYgQnVpbGRpbmdzTGF5ZXIsXG4gICAgc2hvd1ZobHMgJiYgVmVoaWNsZXNMYXllcixcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPERlY2tHTFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAgICd3aWR0aCc6JzEwMCUnLFxuICAgICAgICAgICdoZWlnaHQnOicxMDAlJyxcbiAgICAgIH19XG4gICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgIGVmZmVjdHM9e3RoZW1lLmVmZmVjdHN9XG4gICAgICBpbml0aWFsVmlld1N0YXRlPXtpbml0aWFsVmlld1N0YXRlfVxuICAgICAgY29udHJvbGxlcj17dHJ1ZX1cbiAgICA+XG5cbiAgICA8UmVhY3RNYXBHTFxuICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49J3BrLmV5SjFJam9pYldsc1lXUnVlWFVpTENKaElqb2lZMnRvTm1oMWFXOTNNSEl3YWpKeGJ6ZzNPV1J1T1RWbGVpSjkuOWg0azVHRVpPUjlPOExTM2d0YVFvdydcbiAgICAgIHdpZHRoPXs0MDB9XG4gICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgIGxhdGl0dWRlPXs0Ny43NTc3fVxuICAgICAgbG9uZ2l0dWRlPXstNzMuNDM3Nn1cbiAgICAgIHpvb209ezE0fVxuICAgICAgbWFwU3R5bGU9ICdtYXBib3g6Ly9zdHlsZXMvbWlsYWRueXUvY2tpYXpmMDFjMDkyZTE5czFrN2ZqYm9yNC9kcmFmdCdcbiAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyh2aWV3cG9ydCkgPT4ge1xuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodCwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgem9vbX0gPSB2aWV3cG9ydDtcbiAgICAgICAgLy8gY2FsbCBgc2V0U3RhdGVgIGFuZCB1c2UgdGhlIHN0YXRlIHRvIHVwZGF0ZSB0aGUgbWFwLlxuICAgICAgfX1cbiAgICAvPlxuXG4gICAgICB7LyogPFN0YXRpY01hcCByZXVzZU1hcHMgbWFwU3R5bGU9e21hcFN0eWxlfSBwcmV2ZW50U3R5bGVEaWZmaW5nPXt0cnVlfSAvPiAqL31cbiAgICA8L0RlY2tHTD5cbiAgKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas/map/map.js\n");

/***/ })

})