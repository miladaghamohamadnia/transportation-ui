webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/map/map.js":
/*!*******************************!*\
  !*** ./src/canvas/map/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/react */ \"./node_modules/@deck.gl/react/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/layers */ \"./node_modules/@deck.gl/layers/dist/esm/index.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomTripsLayer */ \"./src/canvas/map/CustomTripsLayer.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/map/map.js\",\n    _s = $RefreshSig$();\n\n/* global window */\n\n\n\n\n\n // Source data CSV\n\nvar DATA_URL = {\n  BUILDINGS: // 'buildings_just_one.json', // eslint-disable-line\n  // 'buildings_VM_7_8.json', // eslint-disable-line\n  '/buildings_four_tiles_lyr_2.json',\n  // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line\n  // TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line\n  TRIPS: '/trips_small_tenth_.json' // eslint-disable-line\n  // TRIPS: '/trips_small_tenth.json' // eslint-disable-line\n\n};\nvar ambientLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"AmbientLight\"]({\n  color: [255, 255, 255],\n  intensity: 5.0\n});\nvar pointLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"PointLight\"]({\n  color: [255, 255, 255],\n  intensity: 2.0,\n  position: [-73.6154222, 45.486973, 8000]\n});\nvar lightingEffect = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"LightingEffect\"]({\n  ambientLight: ambientLight,\n  pointLight: pointLight\n});\nvar material = {\n  ambient: 0.1,\n  diffuse: 0.6,\n  shininess: 32,\n  specularColor: [0, 64, 70]\n};\nvar DEFAULT_THEME = {\n  buildingColor: [7, 59, 76, 255],\n  buildingOpacity: 0.99,\n  material: material,\n  effects: [lightingEffect]\n};\nvar INITIAL_VIEW_STATE = {\n  // longitude: -74,\n  // latitude: 40.72,  \n  longitude: -73.5654222,\n  latitude: 45.506973,\n  zoom: 11,\n  pitch: 45,\n  bearing: 0\n};\n\nvar calcPairDist = function calcPairDist(a) {\n  // calculates distance from start of path for every element\n  var distArr = [0];\n\n  for (var i = 1; i < a.length; i++) {\n    var dist = Math.sqrt(Math.pow(a[i][0] - a[i - 1][0], 2) + Math.pow(a[i][1] - a[i - 1][1], 2));\n    distArr.push(dist);\n  }\n\n  return distArr;\n};\n\nvar calcStartDist = function calcStartDist(distArr) {\n  // calculates distance from start of path for every element\n  return distArr.reduce(function (aa, x, i) {\n    return [].concat(Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(aa), [x + (aa[i - 1] || 0)]);\n  }, []);\n}; // const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';\n\n\nvar landCover = [[[-73.5, 45.4], [-73.6, 45.4], [-73.6, 45.6], [-73.5, 45.6]]];\nfunction Map(props, _ref) {\n  _s();\n\n  var _ref$buildings = _ref.buildings,\n      buildings = _ref$buildings === void 0 ? DATA_URL.BUILDINGS : _ref$buildings,\n      _ref$trips = _ref.trips,\n      trips = _ref$trips === void 0 ? DATA_URL.TRIPS : _ref$trips,\n      _ref$trailLength = _ref.trailLength,\n      trailLength = _ref$trailLength === void 0 ? 10 : _ref$trailLength,\n      _ref$widthMinPixels = _ref.widthMinPixels,\n      widthMinPixels = _ref$widthMinPixels === void 0 ? 4 : _ref$widthMinPixels,\n      _ref$initialViewState = _ref.initialViewState,\n      initialViewState = _ref$initialViewState === void 0 ? INITIAL_VIEW_STATE : _ref$initialViewState,\n      _ref$theme = _ref.theme,\n      theme = _ref$theme === void 0 ? DEFAULT_THEME : _ref$theme,\n      _ref$loopLength = _ref.loopLength,\n      loopLength = _ref$loopLength === void 0 ? 4800 : _ref$loopLength,\n      _ref$animationSpeed = _ref.animationSpeed,\n      animationSpeed = _ref$animationSpeed === void 0 ? 2.5 : _ref$animationSpeed;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      animation = _useState2[0];\n\n  var _props$buildingsShowP = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.buildingsShowProps, 2),\n      showBldgs = _props$buildingsShowP[0],\n      setshowBldgs = _props$buildingsShowP[1];\n\n  var _props$vehiclesShowPr = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.vehiclesShowProps, 2),\n      showVhls = _props$vehiclesShowPr[0],\n      setshowVhls = _props$vehiclesShowPr[1];\n\n  var _props$loadingProps = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.loadingProps, 2),\n      isLoading = _props$loadingProps[0],\n      setIsLoading = _props$loadingProps[1];\n\n  var agentColors = props.mapColors.traffic.agentColors;\n\n  var animate = function animate() {\n    setTime(function (t) {\n      return (t + animationSpeed) % loopLength;\n    });\n    animation.id = window.requestAnimationFrame(animate);\n  };\n\n  var layers = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    animation.id = window.requestAnimationFrame(animate);\n    return function () {\n      return window.cancelAnimationFrame(animation.id);\n    };\n  }, [animation]);\n  var ShadowSublayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'ground',\n    data: landCover,\n    getPolygon: function getPolygon(f) {\n      return f;\n    },\n    stroked: false,\n    getFillColor: [0, 0, 0, 0]\n  });\n  var VehiclesLayer = new _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    id: 'trips',\n    data: trips,\n    getPath: function getPath(d) {\n      return d.path;\n    },\n    getTimestamps: function getTimestamps(d) {\n      return d.timestamps;\n    },\n    getColor: function getColor(d) {\n      return d.vendor === 0 ? agentColors[0] : d.vendor === 1 ? agentColors[1] : agentColors[2];\n    },\n    opacity: 0.99,\n    widthMinPixels: widthMinPixels,\n    rounded: true,\n    trailLength: trailLength,\n    currentTime: time,\n    shadowEnabled: false // extensions: [new PointTripsLayer()],\n\n  });\n\n  function toColor(num) {\n    num >>>= 0;\n    var b = num & 0xFF,\n        g = (num & 0xFF00) >>> 8,\n        r = (num & 0xFF0000) >>> 16,\n        a = ((num & 0xFF000000) >>> 24) / 255; // return \"rgba(\" + [r, g, b, a].join(\",\") + \")\";\n\n    return [255, g, b, 100];\n  }\n\n  var BuildingsLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'buildings',\n    data: buildings,\n    extruded: true,\n    wireframe: false,\n    opacity: theme.buildingOpacity,\n    getPolygon: function getPolygon(f) {\n      return f.polygon;\n    },\n    getElevation: function getElevation(f) {\n      return f.height;\n    },\n    getColor: function getColor(f) {\n      return toColor(10 * Math.round(f.height));\n    },\n    // getFillColor: theme.buildingColor,\n    // getFillColor: [222, 0, 0, 55],\n    material: theme.material\n  }); // async function loadVehicleLayer(){\n  //   console.log('1')\n  //   setIsLoading(true);\n  //   function callback(){\n  //     console.log('2')\n  //     return VehiclesLayer\n  //   }\n  //   // var res = await callback();\n  //   // console.log('3')\n  //   return await callback();\n  // }\n\n  var layers = [showBldgs && BuildingsLayer, showVhls && VehiclesLayer];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_deck_gl_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      'position': 'fixed',\n      'width': '100%',\n      'height': '100%'\n    },\n    layers: layers,\n    effects: theme.effects,\n    initialViewState: initialViewState,\n    controller: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      mapboxApiAccessToken: \"pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2toNmh1aW93MHIwajJxbzg3OWRuOTVleiJ9.9h4k5GEZOR9O8LS3gtaQow\",\n      width: 400,\n      height: 400,\n      latitude: 47.7577,\n      longitude: -73.4376,\n      zoom: 14,\n      mapStyle: \"mapbox://styles/miladnyu/ckiazf01c092e19s1k7fjbor4/draft\",\n      onViewportChange: function onViewportChange(viewport) {\n        var width = viewport.width,\n            height = viewport.height,\n            latitude = viewport.latitude,\n            longitude = viewport.longitude,\n            zoom = viewport.zoom; // call `setState` and use the state to update the map.\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Map, \"uMfl71cmdRtzLNiGOHW0DidA1JA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9tYXAvbWFwLmpzPzQzZjIiXSwibmFtZXMiOlsiREFUQV9VUkwiLCJCVUlMRElOR1MiLCJUUklQUyIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNvbG9yIiwiaW50ZW5zaXR5IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJwb3NpdGlvbiIsImxpZ2h0aW5nRWZmZWN0IiwiTGlnaHRpbmdFZmZlY3QiLCJtYXRlcmlhbCIsImFtYmllbnQiLCJkaWZmdXNlIiwic2hpbmluZXNzIiwic3BlY3VsYXJDb2xvciIsIkRFRkFVTFRfVEhFTUUiLCJidWlsZGluZ0NvbG9yIiwiYnVpbGRpbmdPcGFjaXR5IiwiZWZmZWN0cyIsIklOSVRJQUxfVklFV19TVEFURSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsImNhbGNQYWlyRGlzdCIsImEiLCJkaXN0QXJyIiwiaSIsImxlbmd0aCIsImRpc3QiLCJNYXRoIiwic3FydCIsInB1c2giLCJjYWxjU3RhcnREaXN0IiwicmVkdWNlIiwiYWEiLCJ4IiwibGFuZENvdmVyIiwiTWFwIiwicHJvcHMiLCJidWlsZGluZ3MiLCJ0cmlwcyIsInRyYWlsTGVuZ3RoIiwid2lkdGhNaW5QaXhlbHMiLCJpbml0aWFsVmlld1N0YXRlIiwidGhlbWUiLCJsb29wTGVuZ3RoIiwiYW5pbWF0aW9uU3BlZWQiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiYW5pbWF0aW9uIiwiYnVpbGRpbmdzU2hvd1Byb3BzIiwic2hvd0JsZGdzIiwic2V0c2hvd0JsZGdzIiwidmVoaWNsZXNTaG93UHJvcHMiLCJzaG93VmhscyIsInNldHNob3dWaGxzIiwibG9hZGluZ1Byb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWdlbnRDb2xvcnMiLCJtYXBDb2xvcnMiLCJ0cmFmZmljIiwiYW5pbWF0ZSIsInQiLCJpZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheWVycyIsInVzZUVmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiU2hhZG93U3VibGF5ZXIiLCJQb2x5Z29uTGF5ZXIiLCJkYXRhIiwiZ2V0UG9seWdvbiIsImYiLCJzdHJva2VkIiwiZ2V0RmlsbENvbG9yIiwiVmVoaWNsZXNMYXllciIsIlRyaXBzTGF5ZXIiLCJnZXRQYXRoIiwiZCIsInBhdGgiLCJnZXRUaW1lc3RhbXBzIiwidGltZXN0YW1wcyIsImdldENvbG9yIiwidmVuZG9yIiwib3BhY2l0eSIsInJvdW5kZWQiLCJjdXJyZW50VGltZSIsInNoYWRvd0VuYWJsZWQiLCJ0b0NvbG9yIiwibnVtIiwiYiIsImciLCJyIiwiQnVpbGRpbmdzTGF5ZXIiLCJleHRydWRlZCIsIndpcmVmcmFtZSIsInBvbHlnb24iLCJnZXRFbGV2YXRpb24iLCJoZWlnaHQiLCJyb3VuZCIsInZpZXdwb3J0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLFdBQVMsRUFDUDtBQUNBO0FBQ0Esb0NBSmE7QUFLYjtBQUNGO0FBQ0FDLE9BQUssRUFBRSwwQkFQUSxDQU9tQjtBQUNsQzs7QUFSZSxDQUFqQjtBQVdBLElBQU1DLFlBQVksR0FBRyxJQUFJQywwREFBSixDQUFpQjtBQUNwQ0MsT0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRDZCO0FBRXBDQyxXQUFTLEVBQUU7QUFGeUIsQ0FBakIsQ0FBckI7QUFLQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsd0RBQUosQ0FBZTtBQUNoQ0gsT0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRHlCO0FBRWhDQyxXQUFTLEVBQUUsR0FGcUI7QUFHaENHLFVBQVEsRUFBRSxDQUFDLENBQUMsVUFBRixFQUFjLFNBQWQsRUFBeUIsSUFBekI7QUFI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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBSTRELE1BQU0sR0FBRyxDQUNYaEIsU0FBUyxJQUFJNEMsY0FERixFQUVYekMsUUFBUSxJQUFJdUIsYUFGRCxDQUFiO0FBS0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDSCxrQkFBWSxPQURUO0FBRUgsZUFBUSxNQUZMO0FBR0gsZ0JBQVM7QUFITixLQURUO0FBTUUsVUFBTSxFQUFFVixNQU5WO0FBT0UsV0FBTyxFQUFFeEIsS0FBSyxDQUFDNUIsT0FQakI7QUFRRSxvQkFBZ0IsRUFBRTJCLGdCQVJwQjtBQVNFLGNBQVUsRUFBRSxJQVRkO0FBQUEsMkJBWUEscUVBQUMsb0RBQUQ7QUFDRSwwQkFBb0IsRUFBQyw0RkFEdkI7QUFFRSxXQUFLLEVBQUUsR0FGVDtBQUdFLFlBQU0sRUFBRSxHQUhWO0FBSUUsY0FBUSxFQUFFLE9BSlo7QUFLRSxlQUFTLEVBQUUsQ0FBQyxPQUxkO0FBTUUsVUFBSSxFQUFFLEVBTlI7QUFPRSxjQUFRLEVBQUUsMERBUFo7QUFRRSxzQkFBZ0IsRUFBRSwwQkFBQzRELFFBQUQsRUFBYztBQUFBLFlBQ3ZCQyxLQUR1QixHQUNxQkQsUUFEckIsQ0FDdkJDLEtBRHVCO0FBQUEsWUFDaEJILE1BRGdCLEdBQ3FCRSxRQURyQixDQUNoQkYsTUFEZ0I7QUFBQSxZQUNSbEYsUUFEUSxHQUNxQm9GLFFBRHJCLENBQ1JwRixRQURRO0FBQUEsWUFDRUQsU0FERixHQUNxQnFGLFFBRHJCLENBQ0VyRixTQURGO0FBQUEsWUFDYUUsSUFEYixHQUNxQm1GLFFBRHJCLENBQ2FuRixJQURiLEVBRTlCO0FBQ0Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQWxJdUJpQixHOztLQUFBQSxHIiwiZmlsZSI6Ii4vc3JjL2NhbnZhcy9tYXAvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBbWJpZW50TGlnaHQsIFBvaW50TGlnaHQsIExpZ2h0aW5nRWZmZWN0fSBmcm9tICdAZGVjay5nbC9jb3JlJztcbmltcG9ydCBEZWNrR0wgZnJvbSAnQGRlY2suZ2wvcmVhY3QnO1xuaW1wb3J0IHtQb2x5Z29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFRyaXBzTGF5ZXJ9IGZyb20gJy4vQ3VzdG9tVHJpcHNMYXllcic7XG5cblxuLy8gU291cmNlIGRhdGEgQ1NWXG5jb25zdCBEQVRBX1VSTCA9IHtcbiAgQlVJTERJTkdTOlxuICAgIC8vICdidWlsZGluZ3NfanVzdF9vbmUuanNvbicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAvLyAnYnVpbGRpbmdzX1ZNXzdfOC5qc29uJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICcvYnVpbGRpbmdzX2ZvdXJfdGlsZXNfbHlyXzIuanNvbicsXG4gICAgLy8gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS92aXNnbC9kZWNrLmdsLWRhdGEvbWFzdGVyL2V4YW1wbGVzL3RyaXBzL2J1aWxkaW5ncy5qc29uJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAvLyBUUklQUzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS92aXNnbC9kZWNrLmdsLWRhdGEvbWFzdGVyL2V4YW1wbGVzL3RyaXBzL3RyaXBzLXY3Lmpzb24nIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgVFJJUFM6ICcvdHJpcHNfc21hbGxfdGVudGhfLmpzb24nIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLy8gVFJJUFM6ICcvdHJpcHNfc21hbGxfdGVudGguanNvbicgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCh7XG4gIGNvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gIGludGVuc2l0eTogNS4wXG59KTtcblxuY29uc3QgcG9pbnRMaWdodCA9IG5ldyBQb2ludExpZ2h0KHtcbiAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgaW50ZW5zaXR5OiAyLjAsXG4gIHBvc2l0aW9uOiBbLTczLjYxNTQyMjIsIDQ1LjQ4Njk3MywgODAwMF1cbn0pO1xuXG5jb25zdCBsaWdodGluZ0VmZmVjdCA9IG5ldyBMaWdodGluZ0VmZmVjdCh7YW1iaWVudExpZ2h0LCBwb2ludExpZ2h0fSk7XG5cbmNvbnN0IG1hdGVyaWFsID0ge1xuICBhbWJpZW50OiAwLjEsXG4gIGRpZmZ1c2U6IDAuNixcbiAgc2hpbmluZXNzOiAzMixcbiAgc3BlY3VsYXJDb2xvcjogWzAsIDY0LCA3MF1cbn07XG5cbmNvbnN0IERFRkFVTFRfVEhFTUUgPSB7XG4gIGJ1aWxkaW5nQ29sb3I6IFs3LCA1OSwgNzYsIDI1NV0sXG4gIGJ1aWxkaW5nT3BhY2l0eTogMC45OSxcbiAgbWF0ZXJpYWwsXG4gIGVmZmVjdHM6IFtsaWdodGluZ0VmZmVjdF1cbn07XG5cbmNvbnN0IElOSVRJQUxfVklFV19TVEFURSA9IHtcbiAgLy8gbG9uZ2l0dWRlOiAtNzQsXG4gIC8vIGxhdGl0dWRlOiA0MC43MiwgIFxuICBsb25naXR1ZGU6IC03My41NjU0MjIyLFxuICBsYXRpdHVkZTogNDUuNTA2OTczLCBcbiAgem9vbTogMTEsXG4gIHBpdGNoOiA0NSxcbiAgYmVhcmluZzogMFxufTtcblxuXG5jb25zdCBjYWxjUGFpckRpc3QgPSBmdW5jdGlvbihhKSB7XG4gIC8vIGNhbGN1bGF0ZXMgZGlzdGFuY2UgZnJvbSBzdGFydCBvZiBwYXRoIGZvciBldmVyeSBlbGVtZW50XG4gIHZhciBkaXN0QXJyID0gWzBdXG4gIGZvcih2YXIgaT0xOyBpPGEubGVuZ3RoOyBpKyspe1xuICAgIHZhciBkaXN0ID0gTWF0aC5zcXJ0KChhW2ldWzBdLWFbaS0xXVswXSkqKjIrKGFbaV1bMV0tYVtpLTFdWzFdKSoqMilcbiAgICBkaXN0QXJyLnB1c2goZGlzdCk7XG4gIH1cbiAgcmV0dXJuIGRpc3RBcnI7XG59XG5cbmNvbnN0IGNhbGNTdGFydERpc3QgPSBmdW5jdGlvbihkaXN0QXJyKSB7XG4gIC8vIGNhbGN1bGF0ZXMgZGlzdGFuY2UgZnJvbSBzdGFydCBvZiBwYXRoIGZvciBldmVyeSBlbGVtZW50XG4gIHJldHVybiBkaXN0QXJyLnJlZHVjZSgoYWEsIHgsIGkpID0+IFsuLi5hYSwgeCArIChhYVtpLTFdIHx8IDApXSwgW10pO1xufVxuXG5cbi8vIGNvbnN0IE1BUF9TVFlMRSA9ICdodHRwczovL2Jhc2VtYXBzLmNhcnRvY2RuLmNvbS9nbC92b3lhZ2VyLW5vbGFiZWxzLWdsLXN0eWxlL3N0eWxlLmpzb24nO1xuLy8gY29uc3QgTUFQX1NUWUxFID0gJ2h0dHBzOi8vYmFzZW1hcHMuY2FydG9jZG4uY29tL2dsL3Bvc2l0cm9uLW5vbGFiZWxzLWdsLXN0eWxlL3N0eWxlLmpzb24nO1xuLy8gY29uc3QgTUFQX1NUWUxFID0gJ2h0dHBzOi8vYmFzZW1hcHMuY2FydG9jZG4uY29tL2dsL2RhcmstbWF0dGVyLW5vbGFiZWxzLWdsLXN0eWxlL3N0eWxlLmpzb24nO1xuXG5jb25zdCBsYW5kQ292ZXIgPSBbW1stNzMuNSwgNDUuNF0sIFstNzMuNiwgNDUuNF0sIFstNzMuNiwgNDUuNl0sIFstNzMuNSwgNDUuNl1dXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKHByb3BzLHtcbiAgYnVpbGRpbmdzID0gREFUQV9VUkwuQlVJTERJTkdTLFxuICB0cmlwcyA9IERBVEFfVVJMLlRSSVBTLFxuICB0cmFpbExlbmd0aCA9IDEwLFxuICB3aWR0aE1pblBpeGVscyA9IDQsXG4gIGluaXRpYWxWaWV3U3RhdGUgPSBJTklUSUFMX1ZJRVdfU1RBVEUsXG4gIC8vIG1hcFN0eWxlID0gTUFQX1NUWUxFLFxuICB0aGVtZSA9IERFRkFVTFRfVEhFTUUsXG4gIGxvb3BMZW5ndGggPSA0ODAwLCAvLyB1bml0IGNvcnJlc3BvbmRzIHRvIHRoZSB0aW1lc3RhbXAgaW4gc291cmNlIGRhdGFcbiAgYW5pbWF0aW9uU3BlZWQgPSAyLjVcbn0pIHtcblxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FuaW1hdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtzaG93QmxkZ3MsIHNldHNob3dCbGRnc10gPSBwcm9wcy5idWlsZGluZ3NTaG93UHJvcHNcbiAgY29uc3QgW3Nob3dWaGxzLCBzZXRzaG93Vmhsc10gPSBwcm9wcy52ZWhpY2xlc1Nob3dQcm9wc1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gcHJvcHMubG9hZGluZ1Byb3BzXG5cbiAgY29uc3QgYWdlbnRDb2xvcnMgPSBwcm9wcy5tYXBDb2xvcnMudHJhZmZpYy5hZ2VudENvbG9ycztcblxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIHNldFRpbWUodCA9PiAodCArIGFuaW1hdGlvblNwZWVkKSAlIGxvb3BMZW5ndGgpO1xuICAgIGFuaW1hdGlvbi5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH07XG5cbiAgdmFyIGxheWVycz1bXTtcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5pZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbi5pZCk7XG4gICAgfSxcbiAgICBbYW5pbWF0aW9uXVxuICApO1xuXG4gIGNvbnN0IFNoYWRvd1N1YmxheWVyID0gbmV3IFBvbHlnb25MYXllcih7XG4gICAgaWQ6ICdncm91bmQnLFxuICAgIGRhdGE6IGxhbmRDb3ZlcixcbiAgICBnZXRQb2x5Z29uOiBmID0+IGYsXG4gICAgc3Ryb2tlZDogZmFsc2UsXG4gICAgZ2V0RmlsbENvbG9yOiBbMCwgMCwgMCwgMF1cbiAgfSlcblxuICBjb25zdCBWZWhpY2xlc0xheWVyID0gbmV3IFRyaXBzTGF5ZXIoe1xuICAgIGlkOiAndHJpcHMnLFxuICAgIGRhdGE6IHRyaXBzLFxuICAgIGdldFBhdGg6IGQgPT4gZC5wYXRoLFxuICAgIGdldFRpbWVzdGFtcHM6IGQgPT4gZC50aW1lc3RhbXBzLFxuICAgIGdldENvbG9yOiBkID0+IChkLnZlbmRvciA9PT0gMCA/IGFnZW50Q29sb3JzWzBdIDogKGQudmVuZG9yID09PSAxID8gYWdlbnRDb2xvcnNbMV0gOiBhZ2VudENvbG9yc1syXSkpLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgd2lkdGhNaW5QaXhlbHMsXG4gICAgcm91bmRlZDogdHJ1ZSxcbiAgICB0cmFpbExlbmd0aCxcbiAgICBjdXJyZW50VGltZTogdGltZSxcbiAgICBzaGFkb3dFbmFibGVkOiBmYWxzZSxcbiAgICAvLyBleHRlbnNpb25zOiBbbmV3IFBvaW50VHJpcHNMYXllcigpXSxcbiAgfSlcbiAgXG4gIGZ1bmN0aW9uIHRvQ29sb3IobnVtKSB7XG4gICAgbnVtID4+Pj0gMDtcbiAgICB2YXIgYiA9IG51bSAmIDB4RkYsXG4gICAgICAgIGcgPSAobnVtICYgMHhGRjAwKSA+Pj4gOCxcbiAgICAgICAgciA9IChudW0gJiAweEZGMDAwMCkgPj4+IDE2LFxuICAgICAgICBhID0gKCAobnVtICYgMHhGRjAwMDAwMCkgPj4+IDI0ICkgLyAyNTUgO1xuICAgIC8vIHJldHVybiBcInJnYmEoXCIgKyBbciwgZywgYiwgYV0uam9pbihcIixcIikgKyBcIilcIjtcbiAgICByZXR1cm4gWzI1NSwgZywgYiwgMTAwXTtcbiAgfVxuXG4gIGNvbnN0IEJ1aWxkaW5nc0xheWVyID0gbmV3IFBvbHlnb25MYXllcih7XG4gICAgaWQ6ICdidWlsZGluZ3MnLFxuICAgIGRhdGE6IGJ1aWxkaW5ncyxcbiAgICBleHRydWRlZDogdHJ1ZSxcbiAgICB3aXJlZnJhbWU6IGZhbHNlLFxuICAgIG9wYWNpdHk6IHRoZW1lLmJ1aWxkaW5nT3BhY2l0eSxcbiAgICBnZXRQb2x5Z29uOiBmID0+IGYucG9seWdvbixcbiAgICBnZXRFbGV2YXRpb246IGYgPT4gZi5oZWlnaHQsXG4gICAgZ2V0Q29sb3I6IGYgPT4gdG9Db2xvcigxMCpNYXRoLnJvdW5kKGYuaGVpZ2h0KSksXG4gICAgLy8gZ2V0RmlsbENvbG9yOiB0aGVtZS5idWlsZGluZ0NvbG9yLFxuICAgIC8vIGdldEZpbGxDb2xvcjogWzIyMiwgMCwgMCwgNTVdLFxuICAgIG1hdGVyaWFsOiB0aGVtZS5tYXRlcmlhbFxuICB9KVxuXG4gIFxuICAvLyBhc3luYyBmdW5jdGlvbiBsb2FkVmVoaWNsZUxheWVyKCl7XG4gIC8vICAgY29uc29sZS5sb2coJzEnKVxuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgLy8gICBmdW5jdGlvbiBjYWxsYmFjaygpe1xuICAvLyAgICAgY29uc29sZS5sb2coJzInKVxuICAvLyAgICAgcmV0dXJuIFZlaGljbGVzTGF5ZXJcbiAgLy8gICB9XG4gIC8vICAgLy8gdmFyIHJlcyA9IGF3YWl0IGNhbGxiYWNrKCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJzMnKVxuICAvLyAgIHJldHVybiBhd2FpdCBjYWxsYmFjaygpO1xuICAvLyB9XG5cblxuICB2YXIgbGF5ZXJzID0gW1xuICAgIHNob3dCbGRncyAmJiBCdWlsZGluZ3NMYXllcixcbiAgICBzaG93VmhscyAmJiBWZWhpY2xlc0xheWVyLFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8RGVja0dMXG4gICAgICBzdHlsZT17e1xuICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXG4gICAgICAgICAgJ3dpZHRoJzonMTAwJScsXG4gICAgICAgICAgJ2hlaWdodCc6JzEwMCUnLFxuICAgICAgfX1cbiAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgZWZmZWN0cz17dGhlbWUuZWZmZWN0c31cbiAgICAgIGluaXRpYWxWaWV3U3RhdGU9e2luaXRpYWxWaWV3U3RhdGV9XG4gICAgICBjb250cm9sbGVyPXt0cnVlfVxuICAgID5cblxuICAgIDxSZWFjdE1hcEdMXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj0ncGsuZXlKMUlqb2liV2xzWVdSdWVYVWlMQ0poSWpvaVkydG9ObWgxYVc5M01ISXdhakp4YnpnM09XUnVPVFZsZWlKOS45aDRrNUdFWk9SOU84TFMzZ3RhUW93J1xuICAgICAgd2lkdGg9ezQwMH1cbiAgICAgIGhlaWdodD17NDAwfVxuICAgICAgbGF0aXR1ZGU9ezQ3Ljc1Nzd9XG4gICAgICBsb25naXR1ZGU9ey03My40Mzc2fVxuICAgICAgem9vbT17MTR9XG4gICAgICBtYXBTdHlsZT0gJ21hcGJveDovL3N0eWxlcy9taWxhZG55dS9ja2lhemYwMWMwOTJlMTlzMWs3Zmpib3I0L2RyYWZ0J1xuICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZpZXdwb3J0KSA9PiB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0LCBsYXRpdHVkZSwgbG9uZ2l0dWRlLCB6b29tfSA9IHZpZXdwb3J0O1xuICAgICAgICAvLyBjYWxsIGBzZXRTdGF0ZWAgYW5kIHVzZSB0aGUgc3RhdGUgdG8gdXBkYXRlIHRoZSBtYXAuXG4gICAgICB9fVxuICAgIC8+XG5cbiAgICAgIHsvKiA8U3RhdGljTWFwIHJldXNlTWFwcyBtYXBTdHlsZT17bWFwU3R5bGV9IHByZXZlbnRTdHlsZURpZmZpbmc9e3RydWV9IC8+ICovfVxuICAgIDwvRGVja0dMPlxuICApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/canvas/map/map.js\n");

/***/ })

})