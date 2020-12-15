webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/map/map.js":
/*!*******************************!*\
  !*** ./src/canvas/map/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/react */ \"./node_modules/@deck.gl/react/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/layers */ \"./node_modules/@deck.gl/layers/dist/esm/index.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomTripsLayer */ \"./src/canvas/map/CustomTripsLayer.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/map/map.js\",\n    _s = $RefreshSig$();\n\n/* global window */\n\n\n\n\n\n // Source data CSV\n\nvar DATA_URL = {\n  BUILDINGS: // 'buildings_just_one.json', // eslint-disable-line\n  // 'buildings_VM_7_8.json', // eslint-disable-line\n  '/buildings_four_tiles_lyr_2.json',\n  // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line\n  // TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line\n  TRIPS: '/trips_small_tenth_.json' // eslint-disable-line\n  // TRIPS: '/trips_small_tenth.json' // eslint-disable-line\n\n};\nvar ambientLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"AmbientLight\"]({\n  color: [255, 255, 255],\n  intensity: 5.0\n});\nvar pointLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"PointLight\"]({\n  color: [255, 255, 255],\n  intensity: 2.0,\n  position: [-73.6154222, 45.486973, 8000]\n});\nvar lightingEffect = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"LightingEffect\"]({\n  ambientLight: ambientLight,\n  pointLight: pointLight\n});\nvar material = {\n  ambient: 0.1,\n  diffuse: 0.6,\n  shininess: 32,\n  specularColor: [0, 64, 70]\n};\nvar DEFAULT_THEME = {\n  buildingColor: [7, 59, 76, 255],\n  buildingOpacity: 0.99,\n  material: material,\n  effects: [lightingEffect]\n};\nvar INITIAL_VIEW_STATE = {\n  // longitude: -74,\n  // latitude: 40.72,  \n  longitude: -73.5654222,\n  latitude: 45.506973,\n  zoom: 11,\n  pitch: 45,\n  bearing: 0\n};\n\nvar calcPairDist = function calcPairDist(a) {\n  // calculates distance from start of path for every element\n  var distArr = [0];\n\n  for (var i = 1; i < a.length; i++) {\n    var dist = Math.sqrt(Math.pow(a[i][0] - a[i - 1][0], 2) + Math.pow(a[i][1] - a[i - 1][1], 2));\n    distArr.push(dist);\n  }\n\n  return distArr;\n};\n\nvar calcStartDist = function calcStartDist(distArr) {\n  // calculates distance from start of path for every element\n  return distArr.reduce(function (aa, x, i) {\n    return [].concat(Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(aa), [x + (aa[i - 1] || 0)]);\n  }, []);\n}; // const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';\n\n\nvar landCover = [[[-73.5, 45.4], [-73.6, 45.4], [-73.6, 45.6], [-73.5, 45.6]]];\nfunction Map(props, _ref) {\n  _s();\n\n  var _ref$buildings = _ref.buildings,\n      buildings = _ref$buildings === void 0 ? DATA_URL.BUILDINGS : _ref$buildings,\n      _ref$trips = _ref.trips,\n      trips = _ref$trips === void 0 ? DATA_URL.TRIPS : _ref$trips,\n      _ref$trailLength = _ref.trailLength,\n      trailLength = _ref$trailLength === void 0 ? 10 : _ref$trailLength,\n      _ref$widthMinPixels = _ref.widthMinPixels,\n      widthMinPixels = _ref$widthMinPixels === void 0 ? 4 : _ref$widthMinPixels,\n      _ref$initialViewState = _ref.initialViewState,\n      initialViewState = _ref$initialViewState === void 0 ? INITIAL_VIEW_STATE : _ref$initialViewState,\n      _ref$theme = _ref.theme,\n      theme = _ref$theme === void 0 ? DEFAULT_THEME : _ref$theme,\n      _ref$loopLength = _ref.loopLength,\n      loopLength = _ref$loopLength === void 0 ? 4800 : _ref$loopLength,\n      _ref$animationSpeed = _ref.animationSpeed,\n      animationSpeed = _ref$animationSpeed === void 0 ? 2.5 : _ref$animationSpeed;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      animation = _useState2[0];\n\n  var _props$buildingsShowP = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.buildingsShowProps, 2),\n      showBldgs = _props$buildingsShowP[0],\n      setshowBldgs = _props$buildingsShowP[1];\n\n  var _props$vehiclesShowPr = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.vehiclesShowProps, 2),\n      showVhls = _props$vehiclesShowPr[0],\n      setshowVhls = _props$vehiclesShowPr[1];\n\n  var _props$loadingProps = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.loadingProps, 2),\n      isLoading = _props$loadingProps[0],\n      setIsLoading = _props$loadingProps[1];\n\n  var agentColors = props.mapColors.traffic.agentColors;\n\n  var animate = function animate() {\n    setTime(function (t) {\n      return (t + animationSpeed) % loopLength;\n    });\n    animation.id = window.requestAnimationFrame(animate);\n  };\n\n  var layers = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    animation.id = window.requestAnimationFrame(animate);\n    return function () {\n      return window.cancelAnimationFrame(animation.id);\n    };\n  }, [animation]);\n  var ShadowSublayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'ground',\n    data: landCover,\n    getPolygon: function getPolygon(f) {\n      return f;\n    },\n    stroked: false,\n    getFillColor: [0, 0, 0, 0]\n  });\n  var VehiclesLayer = new _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    id: 'trips',\n    data: trips,\n    getPath: function getPath(d) {\n      return d.path;\n    },\n    getTimestamps: function getTimestamps(d) {\n      return d.timestamps;\n    },\n    getColor: function getColor(d) {\n      return d.vendor === 0 ? agentColors[0] : d.vendor === 1 ? agentColors[1] : agentColors[2];\n    },\n    opacity: 0.99,\n    widthMinPixels: widthMinPixels,\n    rounded: true,\n    trailLength: trailLength,\n    currentTime: time,\n    shadowEnabled: false // extensions: [new PointTripsLayer()],\n\n  });\n\n  function toColor(num) {\n    num >>>= 0;\n    var b = num & 0xFF,\n        g = (num & 0xFF00) >>> 8,\n        r = (num & 0xFF0000) >>> 16,\n        a = ((num & 0xFF000000) >>> 24) / 255; // return \"rgba(\" + [r, g, b, a].join(\",\") + \")\";\n\n    return [255, g, b, 100];\n  }\n\n  var BuildingsLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'buildings',\n    data: buildings,\n    extruded: true,\n    wireframe: false,\n    opacity: theme.buildingOpacity,\n    getPolygon: function getPolygon(f) {\n      return f.polygon;\n    },\n    getElevation: function getElevation(f) {\n      return f.height;\n    },\n    getColor: function getColor(f) {\n      console.log(toColor(10 * Math.round(f.height)));\n      toColor(10 * Math.round(f.height));\n    },\n    // getFillColor: theme.buildingColor,\n    // getFillColor: [222, 0, 0, 55],\n    material: theme.material\n  }); // async function loadVehicleLayer(){\n  //   console.log('1')\n  //   setIsLoading(true);\n  //   function callback(){\n  //     console.log('2')\n  //     return VehiclesLayer\n  //   }\n  //   // var res = await callback();\n  //   // console.log('3')\n  //   return await callback();\n  // }\n\n  var layers = [showBldgs && BuildingsLayer, showVhls && VehiclesLayer];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_deck_gl_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      'position': 'fixed',\n      'width': '100%',\n      'height': '100%'\n    },\n    layers: layers,\n    effects: theme.effects,\n    initialViewState: initialViewState,\n    controller: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      mapboxApiAccessToken: \"pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2toNmh1aW93MHIwajJxbzg3OWRuOTVleiJ9.9h4k5GEZOR9O8LS3gtaQow\",\n      width: 400,\n      height: 400,\n      latitude: 47.7577,\n      longitude: -73.4376,\n      zoom: 14,\n      mapStyle: \"mapbox://styles/miladnyu/ckiazf01c092e19s1k7fjbor4/draft\",\n      onViewportChange: function onViewportChange(viewport) {\n        var width = viewport.width,\n            height = viewport.height,\n            latitude = viewport.latitude,\n            longitude = viewport.longitude,\n            zoom = viewport.zoom; // call `setState` and use the state to update the map.\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 185,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Map, \"uMfl71cmdRtzLNiGOHW0DidA1JA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9tYXAvbWFwLmpzPzQzZjIiXSwibmFtZXMiOlsiREFUQV9VUkwiLCJCVUlMRElOR1MiLCJUUklQUyIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNvbG9yIiwiaW50ZW5zaXR5IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJwb3NpdGlvbiIsImxpZ2h0aW5nRWZmZWN0IiwiTGlnaHRpbmdFZmZlY3QiLCJtYXRlcmlhbCIsImFtYmllbnQiLCJkaWZmdXNlIiwic2hpbmluZXNzIiwic3BlY3VsYXJDb2xvciIsIkRFRkFVTFRfVEhFTUUiLCJidWlsZGluZ0NvbG9yIiwiYnVpbGRpbmdPcGFjaXR5IiwiZWZmZWN0cyIsIklOSVRJQUxfVklFV19TVEFURSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsImNhbGNQYWlyRGlzdCIsImEiLCJkaXN0QXJyIiwiaSIsImxlbmd0aCIsImRpc3QiLCJNYXRoIiwic3FydCIsInB1c2giLCJjYWxjU3RhcnREaXN0IiwicmVkdWNlIiwiYWEiLCJ4IiwibGFuZENvdmVyIiwiTWFwIiwicHJvcHMiLCJidWlsZGluZ3MiLCJ0cmlwcyIsInRyYWlsTGVuZ3RoIiwid2lkdGhNaW5QaXhlbHMiLCJpbml0aWFsVmlld1N0YXRlIiwidGhlbWUiLCJsb29wTGVuZ3RoIiwiYW5pbWF0aW9uU3BlZWQiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiYW5pbWF0aW9uIiwiYnVpbGRpbmdzU2hvd1Byb3BzIiwic2hvd0JsZGdzIiwic2V0c2hvd0JsZGdzIiwidmVoaWNsZXNTaG93UHJvcHMiLCJzaG93VmhscyIsInNldHNob3dWaGxzIiwibG9hZGluZ1Byb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWdlbnRDb2xvcnMiLCJtYXBDb2xvcnMiLCJ0cmFmZmljIiwiYW5pbWF0ZSIsInQiLCJpZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheWVycyIsInVzZUVmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiU2hhZG93U3VibGF5ZXIiLCJQb2x5Z29uTGF5ZXIiLCJkYXRhIiwiZ2V0UG9seWdvbiIsImYiLCJzdHJva2VkIiwiZ2V0RmlsbENvbG9yIiwiVmVoaWNsZXNMYXllciIsIlRyaXBzTGF5ZXIiLCJnZXRQYXRoIiwiZCIsInBhdGgiLCJnZXRUaW1lc3RhbXBzIiwidGltZXN0YW1wcyIsImdldENvbG9yIiwidmVuZG9yIiwib3BhY2l0eSIsInJvdW5kZWQiLCJjdXJyZW50VGltZSIsInNoYWRvd0VuYWJsZWQiLCJ0b0NvbG9yIiwibnVtIiwiYiIsImciLCJyIiwiQnVpbGRpbmdzTGF5ZXIiLCJleHRydWRlZCIsIndpcmVmcmFtZSIsInBvbHlnb24iLCJnZXRFbGV2YXRpb24iLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwicm91bmQiLCJ2aWV3cG9ydCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxXQUFTLEVBQ1A7QUFDQTtBQUNBLG9DQUphO0FBS2I7QUFDRjtBQUNBQyxPQUFLLEVBQUUsMEJBUFEsQ0FPbUI7QUFDbEM7O0FBUmUsQ0FBakI7QUFXQSxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsMERBQUosQ0FBaUI7QUFDcENDLE9BQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUQ2QjtBQUVwQ0MsV0FBUyxFQUFFO0FBRnlCLENBQWpCLENBQXJCO0FBS0EsSUFBTUMsVUFBVSxHQUFHLElBQUlDLHdEQUFKLENBQWU7QUFDaENILE9BQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUR5QjtBQUVoQ0MsV0FBUyxFQUFFLEdBRnFCO0FBR2hDRyxVQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQUYsRUFBYyxTQUFk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QmlCLEc7O0tBQUFBLEciLCJmaWxlIjoiLi9zcmMvY2FudmFzL21hcC9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FtYmllbnRMaWdodCwgUG9pbnRMaWdodCwgTGlnaHRpbmdFZmZlY3R9IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IERlY2tHTCBmcm9tICdAZGVjay5nbC9yZWFjdCc7XG5pbXBvcnQge1BvbHlnb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCBSZWFjdE1hcEdMIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVHJpcHNMYXllcn0gZnJvbSAnLi9DdXN0b21Ucmlwc0xheWVyJztcblxuXG4vLyBTb3VyY2UgZGF0YSBDU1ZcbmNvbnN0IERBVEFfVVJMID0ge1xuICBCVUlMRElOR1M6XG4gICAgLy8gJ2J1aWxkaW5nc19qdXN0X29uZS5qc29uJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIC8vICdidWlsZGluZ3NfVk1fN184Lmpzb24nLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgJy9idWlsZGluZ3NfZm91cl90aWxlc19seXJfMi5qc29uJyxcbiAgICAvLyAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc2dsL2RlY2suZ2wtZGF0YS9tYXN0ZXIvZXhhbXBsZXMvdHJpcHMvYnVpbGRpbmdzLmpzb24nLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC8vIFRSSVBTOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc2dsL2RlY2suZ2wtZGF0YS9tYXN0ZXIvZXhhbXBsZXMvdHJpcHMvdHJpcHMtdjcuanNvbicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBUUklQUzogJy90cmlwc19zbWFsbF90ZW50aF8uanNvbicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAvLyBUUklQUzogJy90cmlwc19zbWFsbF90ZW50aC5qc29uJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KHtcbiAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgaW50ZW5zaXR5OiA1LjBcbn0pO1xuXG5jb25zdCBwb2ludExpZ2h0ID0gbmV3IFBvaW50TGlnaHQoe1xuICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICBpbnRlbnNpdHk6IDIuMCxcbiAgcG9zaXRpb246IFstNzMuNjE1NDIyMiwgNDUuNDg2OTczLCA4MDAwXVxufSk7XG5cbmNvbnN0IGxpZ2h0aW5nRWZmZWN0ID0gbmV3IExpZ2h0aW5nRWZmZWN0KHthbWJpZW50TGlnaHQsIHBvaW50TGlnaHR9KTtcblxuY29uc3QgbWF0ZXJpYWwgPSB7XG4gIGFtYmllbnQ6IDAuMSxcbiAgZGlmZnVzZTogMC42LFxuICBzaGluaW5lc3M6IDMyLFxuICBzcGVjdWxhckNvbG9yOiBbMCwgNjQsIDcwXVxufTtcblxuY29uc3QgREVGQVVMVF9USEVNRSA9IHtcbiAgYnVpbGRpbmdDb2xvcjogWzcsIDU5LCA3NiwgMjU1XSxcbiAgYnVpbGRpbmdPcGFjaXR5OiAwLjk5LFxuICBtYXRlcmlhbCxcbiAgZWZmZWN0czogW2xpZ2h0aW5nRWZmZWN0XVxufTtcblxuY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAvLyBsb25naXR1ZGU6IC03NCxcbiAgLy8gbGF0aXR1ZGU6IDQwLjcyLCAgXG4gIGxvbmdpdHVkZTogLTczLjU2NTQyMjIsXG4gIGxhdGl0dWRlOiA0NS41MDY5NzMsIFxuICB6b29tOiAxMSxcbiAgcGl0Y2g6IDQ1LFxuICBiZWFyaW5nOiAwXG59O1xuXG5cbmNvbnN0IGNhbGNQYWlyRGlzdCA9IGZ1bmN0aW9uKGEpIHtcbiAgLy8gY2FsY3VsYXRlcyBkaXN0YW5jZSBmcm9tIHN0YXJ0IG9mIHBhdGggZm9yIGV2ZXJ5IGVsZW1lbnRcbiAgdmFyIGRpc3RBcnIgPSBbMF1cbiAgZm9yKHZhciBpPTE7IGk8YS5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQoKGFbaV1bMF0tYVtpLTFdWzBdKSoqMisoYVtpXVsxXS1hW2ktMV1bMV0pKioyKVxuICAgIGRpc3RBcnIucHVzaChkaXN0KTtcbiAgfVxuICByZXR1cm4gZGlzdEFycjtcbn1cblxuY29uc3QgY2FsY1N0YXJ0RGlzdCA9IGZ1bmN0aW9uKGRpc3RBcnIpIHtcbiAgLy8gY2FsY3VsYXRlcyBkaXN0YW5jZSBmcm9tIHN0YXJ0IG9mIHBhdGggZm9yIGV2ZXJ5IGVsZW1lbnRcbiAgcmV0dXJuIGRpc3RBcnIucmVkdWNlKChhYSwgeCwgaSkgPT4gWy4uLmFhLCB4ICsgKGFhW2ktMV0gfHwgMCldLCBbXSk7XG59XG5cblxuLy8gY29uc3QgTUFQX1NUWUxFID0gJ2h0dHBzOi8vYmFzZW1hcHMuY2FydG9jZG4uY29tL2dsL3ZveWFnZXItbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG4vLyBjb25zdCBNQVBfU1RZTEUgPSAnaHR0cHM6Ly9iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZ2wvcG9zaXRyb24tbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG4vLyBjb25zdCBNQVBfU1RZTEUgPSAnaHR0cHM6Ly9iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZ2wvZGFyay1tYXR0ZXItbm9sYWJlbHMtZ2wtc3R5bGUvc3R5bGUuanNvbic7XG5cbmNvbnN0IGxhbmRDb3ZlciA9IFtbWy03My41LCA0NS40XSwgWy03My42LCA0NS40XSwgWy03My42LCA0NS42XSwgWy03My41LCA0NS42XV1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAocHJvcHMse1xuICBidWlsZGluZ3MgPSBEQVRBX1VSTC5CVUlMRElOR1MsXG4gIHRyaXBzID0gREFUQV9VUkwuVFJJUFMsXG4gIHRyYWlsTGVuZ3RoID0gMTAsXG4gIHdpZHRoTWluUGl4ZWxzID0gNCxcbiAgaW5pdGlhbFZpZXdTdGF0ZSA9IElOSVRJQUxfVklFV19TVEFURSxcbiAgLy8gbWFwU3R5bGUgPSBNQVBfU1RZTEUsXG4gIHRoZW1lID0gREVGQVVMVF9USEVNRSxcbiAgbG9vcExlbmd0aCA9IDQ4MDAsIC8vIHVuaXQgY29ycmVzcG9uZHMgdG8gdGhlIHRpbWVzdGFtcCBpbiBzb3VyY2UgZGF0YVxuICBhbmltYXRpb25TcGVlZCA9IDIuNVxufSkge1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYW5pbWF0aW9uXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3Nob3dCbGRncywgc2V0c2hvd0JsZGdzXSA9IHByb3BzLmJ1aWxkaW5nc1Nob3dQcm9wc1xuICBjb25zdCBbc2hvd1ZobHMsIHNldHNob3dWaGxzXSA9IHByb3BzLnZlaGljbGVzU2hvd1Byb3BzXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBwcm9wcy5sb2FkaW5nUHJvcHNcblxuICBjb25zdCBhZ2VudENvbG9ycyA9IHByb3BzLm1hcENvbG9ycy50cmFmZmljLmFnZW50Q29sb3JzO1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgc2V0VGltZSh0ID0+ICh0ICsgYW5pbWF0aW9uU3BlZWQpICUgbG9vcExlbmd0aCk7XG4gICAgYW5pbWF0aW9uLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfTtcblxuICB2YXIgbGF5ZXJzPVtdO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLmlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uLmlkKTtcbiAgICB9LFxuICAgIFthbmltYXRpb25dXG4gICk7XG5cbiAgY29uc3QgU2hhZG93U3VibGF5ZXIgPSBuZXcgUG9seWdvbkxheWVyKHtcbiAgICBpZDogJ2dyb3VuZCcsXG4gICAgZGF0YTogbGFuZENvdmVyLFxuICAgIGdldFBvbHlnb246IGYgPT4gZixcbiAgICBzdHJva2VkOiBmYWxzZSxcbiAgICBnZXRGaWxsQ29sb3I6IFswLCAwLCAwLCAwXVxuICB9KVxuXG4gIGNvbnN0IFZlaGljbGVzTGF5ZXIgPSBuZXcgVHJpcHNMYXllcih7XG4gICAgaWQ6ICd0cmlwcycsXG4gICAgZGF0YTogdHJpcHMsXG4gICAgZ2V0UGF0aDogZCA9PiBkLnBhdGgsXG4gICAgZ2V0VGltZXN0YW1wczogZCA9PiBkLnRpbWVzdGFtcHMsXG4gICAgZ2V0Q29sb3I6IGQgPT4gKGQudmVuZG9yID09PSAwID8gYWdlbnRDb2xvcnNbMF0gOiAoZC52ZW5kb3IgPT09IDEgPyBhZ2VudENvbG9yc1sxXSA6IGFnZW50Q29sb3JzWzJdKSksXG4gICAgb3BhY2l0eTogMC45OSxcbiAgICB3aWR0aE1pblBpeGVscyxcbiAgICByb3VuZGVkOiB0cnVlLFxuICAgIHRyYWlsTGVuZ3RoLFxuICAgIGN1cnJlbnRUaW1lOiB0aW1lLFxuICAgIHNoYWRvd0VuYWJsZWQ6IGZhbHNlLFxuICAgIC8vIGV4dGVuc2lvbnM6IFtuZXcgUG9pbnRUcmlwc0xheWVyKCldLFxuICB9KVxuICBcbiAgZnVuY3Rpb24gdG9Db2xvcihudW0pIHtcbiAgICBudW0gPj4+PSAwO1xuICAgIHZhciBiID0gbnVtICYgMHhGRixcbiAgICAgICAgZyA9IChudW0gJiAweEZGMDApID4+PiA4LFxuICAgICAgICByID0gKG51bSAmIDB4RkYwMDAwKSA+Pj4gMTYsXG4gICAgICAgIGEgPSAoIChudW0gJiAweEZGMDAwMDAwKSA+Pj4gMjQgKSAvIDI1NSA7XG4gICAgLy8gcmV0dXJuIFwicmdiYShcIiArIFtyLCBnLCBiLCBhXS5qb2luKFwiLFwiKSArIFwiKVwiO1xuICAgIHJldHVybiBbMjU1LCBnLCBiLCAxMDBdO1xuICB9XG5cbiAgY29uc3QgQnVpbGRpbmdzTGF5ZXIgPSBuZXcgUG9seWdvbkxheWVyKHtcbiAgICBpZDogJ2J1aWxkaW5ncycsXG4gICAgZGF0YTogYnVpbGRpbmdzLFxuICAgIGV4dHJ1ZGVkOiB0cnVlLFxuICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgb3BhY2l0eTogdGhlbWUuYnVpbGRpbmdPcGFjaXR5LFxuICAgIGdldFBvbHlnb246IGYgPT4gZi5wb2x5Z29uLFxuICAgIGdldEVsZXZhdGlvbjogZiA9PiBmLmhlaWdodCxcbiAgICBnZXRDb2xvcjogZiA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b0NvbG9yKDEwKk1hdGgucm91bmQoZi5oZWlnaHQpKSlcbiAgICAgIHRvQ29sb3IoMTAqTWF0aC5yb3VuZChmLmhlaWdodCkpfSxcbiAgICAvLyBnZXRGaWxsQ29sb3I6IHRoZW1lLmJ1aWxkaW5nQ29sb3IsXG4gICAgLy8gZ2V0RmlsbENvbG9yOiBbMjIyLCAwLCAwLCA1NV0sXG4gICAgbWF0ZXJpYWw6IHRoZW1lLm1hdGVyaWFsXG4gIH0pXG5cbiAgXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGxvYWRWZWhpY2xlTGF5ZXIoKXtcbiAgLy8gICBjb25zb2xlLmxvZygnMScpXG4gIC8vICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAvLyAgIGZ1bmN0aW9uIGNhbGxiYWNrKCl7XG4gIC8vICAgICBjb25zb2xlLmxvZygnMicpXG4gIC8vICAgICByZXR1cm4gVmVoaWNsZXNMYXllclxuICAvLyAgIH1cbiAgLy8gICAvLyB2YXIgcmVzID0gYXdhaXQgY2FsbGJhY2soKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnMycpXG4gIC8vICAgcmV0dXJuIGF3YWl0IGNhbGxiYWNrKCk7XG4gIC8vIH1cblxuXG4gIHZhciBsYXllcnMgPSBbXG4gICAgc2hvd0JsZGdzICYmIEJ1aWxkaW5nc0xheWVyLFxuICAgIHNob3dWaGxzICYmIFZlaGljbGVzTGF5ZXIsXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxEZWNrR0xcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcbiAgICAgICAgICAnd2lkdGgnOicxMDAlJyxcbiAgICAgICAgICAnaGVpZ2h0JzonMTAwJScsXG4gICAgICB9fVxuICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICBlZmZlY3RzPXt0aGVtZS5lZmZlY3RzfVxuICAgICAgaW5pdGlhbFZpZXdTdGF0ZT17aW5pdGlhbFZpZXdTdGF0ZX1cbiAgICAgIGNvbnRyb2xsZXI9e3RydWV9XG4gICAgPlxuXG4gICAgPFJlYWN0TWFwR0xcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPSdway5leUoxSWpvaWJXbHNZV1J1ZVhVaUxDSmhJam9pWTJ0b05taDFhVzkzTUhJd2FqSnhiemczT1dSdU9UVmxlaUo5LjloNGs1R0VaT1I5TzhMUzNndGFRb3cnXG4gICAgICB3aWR0aD17NDAwfVxuICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICBsYXRpdHVkZT17NDcuNzU3N31cbiAgICAgIGxvbmdpdHVkZT17LTczLjQzNzZ9XG4gICAgICB6b29tPXsxNH1cbiAgICAgIG1hcFN0eWxlPSAnbWFwYm94Oi8vc3R5bGVzL21pbGFkbnl1L2NraWF6ZjAxYzA5MmUxOXMxazdmamJvcjQvZHJhZnQnXG4gICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodmlld3BvcnQpID0+IHtcbiAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHQsIGxhdGl0dWRlLCBsb25naXR1ZGUsIHpvb219ID0gdmlld3BvcnQ7XG4gICAgICAgIC8vIGNhbGwgYHNldFN0YXRlYCBhbmQgdXNlIHRoZSBzdGF0ZSB0byB1cGRhdGUgdGhlIG1hcC5cbiAgICAgIH19XG4gICAgLz5cblxuICAgICAgey8qIDxTdGF0aWNNYXAgcmV1c2VNYXBzIG1hcFN0eWxlPXttYXBTdHlsZX0gcHJldmVudFN0eWxlRGlmZmluZz17dHJ1ZX0gLz4gKi99XG4gICAgPC9EZWNrR0w+XG4gICk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/canvas/map/map.js\n");

/***/ })

})