webpackHotUpdate_N_E("pages/index",{

/***/ "./src/canvas/map/map.js":
/*!*******************************!*\
  !*** ./src/canvas/map/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/core */ \"./node_modules/@deck.gl/core/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/react */ \"./node_modules/@deck.gl/react/dist/esm/index.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/layers */ \"./node_modules/@deck.gl/layers/dist/esm/index.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomTripsLayer */ \"./src/canvas/map/CustomTripsLayer.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/home-imac/Documents/projects/react-apps/transportation-ui/src/canvas/map/map.js\",\n    _s = $RefreshSig$();\n\n/* global window */\n\n\n\n\n\n // Source data CSV\n\nvar DATA_URL = {\n  BUILDINGS: // 'buildings_just_one.json', // eslint-disable-line\n  // 'buildings_VM_7_8.json', // eslint-disable-line\n  '/buildings_four_tiles_lyr_2.json',\n  // 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line\n  // TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line\n  TRIPS: '/trips_small_tenth_.json' // eslint-disable-line\n  // TRIPS: '/trips_small_tenth.json' // eslint-disable-line\n\n};\nvar ambientLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"AmbientLight\"]({\n  color: [255, 255, 255],\n  intensity: 5.0\n});\nvar pointLight = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"PointLight\"]({\n  color: [255, 255, 255],\n  intensity: 2.0,\n  position: [-73.6154222, 45.486973, 8000]\n});\nvar lightingEffect = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__[\"LightingEffect\"]({\n  ambientLight: ambientLight,\n  pointLight: pointLight\n});\nvar material = {\n  ambient: 0.1,\n  diffuse: 0.6,\n  shininess: 32,\n  specularColor: [0, 64, 70]\n};\nvar DEFAULT_THEME = {\n  buildingColor: [7, 59, 76, 255],\n  buildingOpacity: 0.99,\n  material: material,\n  effects: [lightingEffect]\n};\nvar INITIAL_VIEW_STATE = {\n  // longitude: -74,\n  // latitude: 40.72,  \n  longitude: -73.5654222,\n  latitude: 45.506973,\n  zoom: 11,\n  pitch: 45,\n  bearing: 0\n};\n\nvar calcPairDist = function calcPairDist(a) {\n  // calculates distance from start of path for every element\n  var distArr = [0];\n\n  for (var i = 1; i < a.length; i++) {\n    var dist = Math.sqrt(Math.pow(a[i][0] - a[i - 1][0], 2) + Math.pow(a[i][1] - a[i - 1][1], 2));\n    distArr.push(dist);\n  }\n\n  return distArr;\n};\n\nvar calcStartDist = function calcStartDist(distArr) {\n  // calculates distance from start of path for every element\n  return distArr.reduce(function (aa, x, i) {\n    return [].concat(Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(aa), [x + (aa[i - 1] || 0)]);\n  }, []);\n}; // const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';\n// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';\n\n\nvar landCover = [[[-73.5, 45.4], [-73.6, 45.4], [-73.6, 45.6], [-73.5, 45.6]]];\nfunction Map(props, _ref) {\n  _s();\n\n  var _ref$buildings = _ref.buildings,\n      buildings = _ref$buildings === void 0 ? DATA_URL.BUILDINGS : _ref$buildings,\n      _ref$trips = _ref.trips,\n      trips = _ref$trips === void 0 ? DATA_URL.TRIPS : _ref$trips,\n      _ref$trailLength = _ref.trailLength,\n      trailLength = _ref$trailLength === void 0 ? 10 : _ref$trailLength,\n      _ref$widthMinPixels = _ref.widthMinPixels,\n      widthMinPixels = _ref$widthMinPixels === void 0 ? 4 : _ref$widthMinPixels,\n      _ref$initialViewState = _ref.initialViewState,\n      initialViewState = _ref$initialViewState === void 0 ? INITIAL_VIEW_STATE : _ref$initialViewState,\n      _ref$theme = _ref.theme,\n      theme = _ref$theme === void 0 ? DEFAULT_THEME : _ref$theme,\n      _ref$loopLength = _ref.loopLength,\n      loopLength = _ref$loopLength === void 0 ? 4800 : _ref$loopLength,\n      _ref$animationSpeed = _ref.animationSpeed,\n      animationSpeed = _ref$animationSpeed === void 0 ? 2.5 : _ref$animationSpeed;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      animation = _useState2[0];\n\n  var _props$buildingsShowP = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.buildingsShowProps, 2),\n      showBldgs = _props$buildingsShowP[0],\n      setshowBldgs = _props$buildingsShowP[1];\n\n  var _props$vehiclesShowPr = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.vehiclesShowProps, 2),\n      showVhls = _props$vehiclesShowPr[0],\n      setshowVhls = _props$vehiclesShowPr[1];\n\n  var _props$loadingProps = Object(_Users_home_imac_Documents_projects_react_apps_transportation_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props.loadingProps, 2),\n      isLoading = _props$loadingProps[0],\n      setIsLoading = _props$loadingProps[1];\n\n  var agentColors = props.mapColors.traffic.agentColors;\n\n  var animate = function animate() {\n    setTime(function (t) {\n      return (t + animationSpeed) % loopLength;\n    });\n    animation.id = window.requestAnimationFrame(animate);\n  };\n\n  var layers = [];\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    animation.id = window.requestAnimationFrame(animate);\n    return function () {\n      return window.cancelAnimationFrame(animation.id);\n    };\n  }, [animation]);\n  var ShadowSublayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'ground',\n    data: landCover,\n    getPolygon: function getPolygon(f) {\n      return f;\n    },\n    stroked: false,\n    getFillColor: [0, 0, 0, 0]\n  });\n  var VehiclesLayer = new _CustomTripsLayer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    id: 'trips',\n    data: trips,\n    getPath: function getPath(d) {\n      return d.path;\n    },\n    getTimestamps: function getTimestamps(d) {\n      return d.timestamps;\n    },\n    getColor: function getColor(d) {\n      return d.vendor === 0 ? agentColors[0] : d.vendor === 1 ? agentColors[1] : agentColors[2];\n    },\n    opacity: 0.99,\n    widthMinPixels: widthMinPixels,\n    rounded: true,\n    trailLength: trailLength,\n    currentTime: time,\n    shadowEnabled: false // extensions: [new PointTripsLayer()],\n\n  });\n\n  function toColor(num) {\n    num >>>= 0;\n    var b = num & 0xFF,\n        g = (num & 0xFF00) >>> 8,\n        r = (num & 0xFF0000) >>> 16,\n        a = ((num & 0xFF000000) >>> 24) / 255; // return \"rgba(\" + [r, g, b, a].join(\",\") + \")\";\n\n    return [255, g, b, 100];\n  }\n\n  var BuildingsLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_6__[\"PolygonLayer\"]({\n    id: 'buildings',\n    data: buildings,\n    extruded: true,\n    wireframe: false,\n    opacity: theme.buildingOpacity,\n    getPolygon: function getPolygon(f) {\n      return f.polygon;\n    },\n    getElevation: function getElevation(f) {\n      return f.height;\n    },\n    getFillColor: function getFillColor(f) {\n      return [255, 0, 0, 255];\n    },\n    // getFillColor: theme.buildingColor,\n    // getFillColor: [222, 0, 0, 55],\n    material: theme.material\n  }); // async function loadVehicleLayer(){\n  //   console.log('1')\n  //   setIsLoading(true);\n  //   function callback(){\n  //     console.log('2')\n  //     return VehiclesLayer\n  //   }\n  //   // var res = await callback();\n  //   // console.log('3')\n  //   return await callback();\n  // }\n\n  var layers = [showBldgs && BuildingsLayer, showVhls && VehiclesLayer];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_deck_gl_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      'position': 'fixed',\n      'width': '100%',\n      'height': '100%'\n    },\n    layers: layers,\n    effects: theme.effects,\n    initialViewState: initialViewState,\n    controller: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      mapboxApiAccessToken: \"pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2toNmh1aW93MHIwajJxbzg3OWRuOTVleiJ9.9h4k5GEZOR9O8LS3gtaQow\",\n      width: 400,\n      height: 400,\n      latitude: 47.7577,\n      longitude: -73.4376,\n      zoom: 14,\n      mapStyle: \"mapbox://styles/miladnyu/ckiazf01c092e19s1k7fjbor4/draft\",\n      onViewportChange: function onViewportChange(viewport) {\n        var width = viewport.width,\n            height = viewport.height,\n            latitude = viewport.latitude,\n            longitude = viewport.longitude,\n            zoom = viewport.zoom; // call `setState` and use the state to update the map.\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Map, \"uMfl71cmdRtzLNiGOHW0DidA1JA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NhbnZhcy9tYXAvbWFwLmpzPzQzZjIiXSwibmFtZXMiOlsiREFUQV9VUkwiLCJCVUlMRElOR1MiLCJUUklQUyIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNvbG9yIiwiaW50ZW5zaXR5IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJwb3NpdGlvbiIsImxpZ2h0aW5nRWZmZWN0IiwiTGlnaHRpbmdFZmZlY3QiLCJtYXRlcmlhbCIsImFtYmllbnQiLCJkaWZmdXNlIiwic2hpbmluZXNzIiwic3BlY3VsYXJDb2xvciIsIkRFRkFVTFRfVEhFTUUiLCJidWlsZGluZ0NvbG9yIiwiYnVpbGRpbmdPcGFjaXR5IiwiZWZmZWN0cyIsIklOSVRJQUxfVklFV19TVEFURSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsImNhbGNQYWlyRGlzdCIsImEiLCJkaXN0QXJyIiwiaSIsImxlbmd0aCIsImRpc3QiLCJNYXRoIiwic3FydCIsInB1c2giLCJjYWxjU3RhcnREaXN0IiwicmVkdWNlIiwiYWEiLCJ4IiwibGFuZENvdmVyIiwiTWFwIiwicHJvcHMiLCJidWlsZGluZ3MiLCJ0cmlwcyIsInRyYWlsTGVuZ3RoIiwid2lkdGhNaW5QaXhlbHMiLCJpbml0aWFsVmlld1N0YXRlIiwidGhlbWUiLCJsb29wTGVuZ3RoIiwiYW5pbWF0aW9uU3BlZWQiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiYW5pbWF0aW9uIiwiYnVpbGRpbmdzU2hvd1Byb3BzIiwic2hvd0JsZGdzIiwic2V0c2hvd0JsZGdzIiwidmVoaWNsZXNTaG93UHJvcHMiLCJzaG93VmhscyIsInNldHNob3dWaGxzIiwibG9hZGluZ1Byb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWdlbnRDb2xvcnMiLCJtYXBDb2xvcnMiLCJ0cmFmZmljIiwiYW5pbWF0ZSIsInQiLCJpZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheWVycyIsInVzZUVmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiU2hhZG93U3VibGF5ZXIiLCJQb2x5Z29uTGF5ZXIiLCJkYXRhIiwiZ2V0UG9seWdvbiIsImYiLCJzdHJva2VkIiwiZ2V0RmlsbENvbG9yIiwiVmVoaWNsZXNMYXllciIsIlRyaXBzTGF5ZXIiLCJnZXRQYXRoIiwiZCIsInBhdGgiLCJnZXRUaW1lc3RhbXBzIiwidGltZXN0YW1wcyIsImdldENvbG9yIiwidmVuZG9yIiwib3BhY2l0eSIsInJvdW5kZWQiLCJjdXJyZW50VGltZSIsInNoYWRvd0VuYWJsZWQiLCJ0b0NvbG9yIiwibnVtIiwiYiIsImciLCJyIiwiQnVpbGRpbmdzTGF5ZXIiLCJleHRydWRlZCIsIndpcmVmcmFtZSIsInBvbHlnb24iLCJnZXRFbGV2YXRpb24iLCJoZWlnaHQiLCJ2aWV3cG9ydCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxXQUFTLEVBQ1A7QUFDQTtBQUNBLG9DQUphO0FBS2I7QUFDRjtBQUNBQyxPQUFLLEVBQUUsMEJBUFEsQ0FPbUI7QUFDbEM7O0FBUmUsQ0FBakI7QUFXQSxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsMERBQUosQ0FBaUI7QUFDcENDLE9BQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUQ2QjtBQUVwQ0MsV0FBUyxFQUFFO0FBRnlCLENBQWpCLENBQXJCO0FBS0EsSUFBTUMsVUFBVSxHQUFHLElBQUlDLHdEQUFKLENBQWU7QUFDaENILE9BQUssRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUR5QjtBQUVoQ0MsV0FBUyxFQUFFLEdBRnFCO0FBR2hDRyxVQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQUYsRUFBYyxTQUFkLEVBQXlCLElBQXpCO0FBSHNCLENBQWYsQ0FBbkI7QUFNQSxJQUFNQyxjQUFjLEdBQUcsSUFBSUMsNERBQUosQ0FBbUI7QUFBQ1IsY0FBWSxFQUFaQSxZQUFEO0FBQWVJLFlBQVUsRUFBVkE7QUFBZixDQUFuQixDQUF2QjtBQUVBLElBQU1LLFFBQVEsR0FBRztBQUNmQyxTQUFPLEVBQUUsR0FETTtBQUVmQyxTQUFPLEVBQUUsR0FGTTtBQUdmQyxXQUFTLEVBQUUsRUFISTtBQUlmQyxlQUFhLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVI7QUFKQSxDQUFqQjtBQU9BLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsZUFBYSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksR0FBWixDQURLO0FBRXBCQyxpQkFBZSxFQUFFLElBRkc7QUFHcEJQLFVBQVEsRUFBUkEsUUFIb0I7QUFJcEJRLFNBQU8sRUFBRSxDQUFDVixjQUFEO0FBSlcsQ0FBdEI7QUFPQSxJQUFNVyxrQkFBa0IsR0FBRztBQUN6QjtBQUNBO0FBQ0FDLFdBQVMsRUFBRSxDQUFDLFVBSGE7QUFJekJDLFVBQVEsRUFBRSxTQUplO0FBS3pCQyxNQUFJLEVBQUUsRUFMbUI7QUFNekJDLE9BQUssRUFBRSxFQU5rQjtBQU96QkMsU0FBTyxFQUFFO0FBUGdCLENBQTNCOztBQVdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVNDLENBQVQsRUFBWTtBQUMvQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFDLENBQUQsQ0FBZDs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsQ0FBQyxDQUFDRyxNQUFqQixFQUF5QkQsQ0FBQyxFQUExQixFQUE2QjtBQUMzQixRQUFJRSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQUNOLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUssQ0FBTCxJQUFRRixDQUFDLENBQUNFLENBQUMsR0FBQyxDQUFILENBQUQsQ0FBTyxDQUFQLENBQVQsRUFBcUIsQ0FBckIsYUFBd0JGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUssQ0FBTCxJQUFRRixDQUFDLENBQUNFLENBQUMsR0FBQyxDQUFILENBQUQsQ0FBTyxDQUFQLENBQWhDLEVBQTRDLENBQTVDLENBQVYsQ0FBWDtBQUNBRCxXQUFPLENBQUNNLElBQVIsQ0FBYUgsSUFBYjtBQUNEOztBQUNELFNBQU9ILE9BQVA7QUFDRCxDQVJEOztBQVVBLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU1AsT0FBVCxFQUFrQjtBQUN0QztBQUNBLFNBQU9BLE9BQU8sQ0FBQ1EsTUFBUixDQUFlLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFRVCxDQUFSO0FBQUEsK0xBQWtCUSxFQUFsQixJQUFzQkMsQ0FBQyxJQUFJRCxFQUFFLENBQUNSLENBQUMsR0FBQyxDQUFILENBQUYsSUFBVyxDQUFmLENBQXZCO0FBQUEsR0FBZixFQUEwRCxFQUExRCxDQUFQO0FBQ0QsQ0FIRCxDLENBTUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFGLEVBQVEsSUFBUixDQUFELEVBQWdCLENBQUMsQ0FBQyxJQUFGLEVBQVEsSUFBUixDQUFoQixFQUErQixDQUFDLENBQUMsSUFBRixFQUFRLElBQVIsQ0FBL0IsRUFBOEMsQ0FBQyxDQUFDLElBQUYsRUFBUSxJQUFSLENBQTlDLENBQUQsQ0FBbEI7QUFFZSxTQUFTQyxHQUFULENBQWFDLEtBQWIsUUFVWjtBQUFBOztBQUFBLDRCQVREQyxTQVNDO0FBQUEsTUFUREEsU0FTQywrQkFUVzNDLFFBQVEsQ0FBQ0MsU0FTcEI7QUFBQSx3QkFSRDJDLEtBUUM7QUFBQSxNQVJEQSxLQVFDLDJCQVJPNUMsUUFBUSxDQUFDRSxLQVFoQjtBQUFBLDhCQVBEMkMsV0FPQztBQUFBLE1BUERBLFdBT0MsaUNBUGEsRUFPYjtBQUFBLGlDQU5EQyxjQU1DO0FBQUEsTUFOREEsY0FNQyxvQ0FOZ0IsQ0FNaEI7QUFBQSxtQ0FMREMsZ0JBS0M7QUFBQSxNQUxEQSxnQkFLQyxzQ0FMa0IxQixrQkFLbEI7QUFBQSx3QkFIRDJCLEtBR0M7QUFBQSxNQUhEQSxLQUdDLDJCQUhPL0IsYUFHUDtBQUFBLDZCQUZEZ0MsVUFFQztBQUFBLE1BRkRBLFVBRUMsZ0NBRlksSUFFWjtBQUFBLGlDQUREQyxjQUNDO0FBQUEsTUFEREEsY0FDQyxvQ0FEZ0IsR0FDaEI7O0FBQUEsa0JBRXVCQyxzREFBUSxDQUFDLENBQUQsQ0FGL0I7QUFBQSxNQUVNQyxJQUZOO0FBQUEsTUFFWUMsT0FGWjs7QUFBQSxtQkFHbUJGLHNEQUFRLENBQUMsRUFBRCxDQUgzQjtBQUFBLE1BR01HLFNBSE47O0FBQUEsb01BSWlDWixLQUFLLENBQUNhLGtCQUp2QztBQUFBLE1BSU1DLFNBSk47QUFBQSxNQUlpQkMsWUFKakI7O0FBQUEsb01BSytCZixLQUFLLENBQUNnQixpQkFMckM7QUFBQSxNQUtNQyxRQUxOO0FBQUEsTUFLZ0JDLFdBTGhCOztBQUFBLGtNQU1pQ2xCLEtBQUssQ0FBQ21CLFlBTnZDO0FBQUEsTUFNTUMsU0FOTjtBQUFBLE1BTWlCQyxZQU5qQjs7QUFRRCxNQUFNQyxXQUFXLEdBQUd0QixLQUFLLENBQUN1QixTQUFOLENBQWdCQyxPQUFoQixDQUF3QkYsV0FBNUM7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQmQsV0FBTyxDQUFDLFVBQUFlLENBQUM7QUFBQSxhQUFJLENBQUNBLENBQUMsR0FBR2xCLGNBQUwsSUFBdUJELFVBQTNCO0FBQUEsS0FBRixDQUFQO0FBQ0FLLGFBQVMsQ0FBQ2UsRUFBVixHQUFlQyxNQUFNLENBQUNDLHFCQUFQLENBQTZCSixPQUE3QixDQUFmO0FBQ0QsR0FIRDs7QUFLQSxNQUFJSyxNQUFNLEdBQUMsRUFBWDtBQUNBQyx5REFBUyxDQUNQLFlBQU07QUFDSm5CLGFBQVMsQ0FBQ2UsRUFBVixHQUFlQyxNQUFNLENBQUNDLHFCQUFQLENBQTZCSixPQUE3QixDQUFmO0FBQ0EsV0FBTztBQUFBLGFBQU1HLE1BQU0sQ0FBQ0ksb0JBQVAsQ0FBNEJwQixTQUFTLENBQUNlLEVBQXRDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FKTSxFQUtQLENBQUNmLFNBQUQsQ0FMTyxDQUFUO0FBUUEsTUFBTXFCLGNBQWMsR0FBRyxJQUFJQyw0REFBSixDQUFpQjtBQUN0Q1AsTUFBRSxFQUFFLFFBRGtDO0FBRXRDUSxRQUFJLEVBQUVyQyxTQUZnQztBQUd0Q3NDLGNBQVUsRUFBRSxvQkFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQSxLQUh5QjtBQUl0Q0MsV0FBTyxFQUFFLEtBSjZCO0FBS3RDQyxnQkFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVjtBQUx3QixHQUFqQixDQUF2QjtBQVFBLE1BQU1DLGFBQWEsR0FBRyxJQUFJQyx5REFBSixDQUFlO0FBQ25DZCxNQUFFLEVBQUUsT0FEK0I7QUFFbkNRLFFBQUksRUFBRWpDLEtBRjZCO0FBR25Dd0MsV0FBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxJQUFOO0FBQUEsS0FIeUI7QUFJbkNDLGlCQUFhLEVBQUUsdUJBQUFGLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNHLFVBQU47QUFBQSxLQUptQjtBQUtuQ0MsWUFBUSxFQUFFLGtCQUFBSixDQUFDO0FBQUEsYUFBS0EsQ0FBQyxDQUFDSyxNQUFGLEtBQWEsQ0FBYixHQUFpQjFCLFdBQVcsQ0FBQyxDQUFELENBQTVCLEdBQW1DcUIsQ0FBQyxDQUFDSyxNQUFGLEtBQWEsQ0FBYixHQUFpQjFCLFdBQVcsQ0FBQyxDQUFELENBQTVCLEdBQWtDQSxXQUFXLENBQUMsQ0FBRCxDQUFyRjtBQUFBLEtBTHdCO0FBTW5DMkIsV0FBTyxFQUFFLElBTjBCO0FBT25DN0Msa0JBQWMsRUFBZEEsY0FQbUM7QUFRbkM4QyxXQUFPLEVBQUUsSUFSMEI7QUFTbkMvQyxlQUFXLEVBQVhBLFdBVG1DO0FBVW5DZ0QsZUFBVyxFQUFFekMsSUFWc0I7QUFXbkMwQyxpQkFBYSxFQUFFLEtBWG9CLENBWW5DOztBQVptQyxHQUFmLENBQXRCOztBQWVBLFdBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3BCQSxPQUFHLE1BQU0sQ0FBVDtBQUNBLFFBQUlDLENBQUMsR0FBR0QsR0FBRyxHQUFHLElBQWQ7QUFBQSxRQUNJRSxDQUFDLEdBQUcsQ0FBQ0YsR0FBRyxHQUFHLE1BQVAsTUFBbUIsQ0FEM0I7QUFBQSxRQUVJRyxDQUFDLEdBQUcsQ0FBQ0gsR0FBRyxHQUFHLFFBQVAsTUFBcUIsRUFGN0I7QUFBQSxRQUdJcEUsQ0FBQyxHQUFHLENBQUUsQ0FBQ29FLEdBQUcsR0FBRyxVQUFQLE1BQXVCLEVBQXpCLElBQWdDLEdBSHhDLENBRm9CLENBTXBCOztBQUNBLFdBQU8sQ0FBQyxHQUFELEVBQU1FLENBQU4sRUFBU0QsQ0FBVCxFQUFZLEdBQVosQ0FBUDtBQUNEOztBQUVELE1BQU1HLGNBQWMsR0FBRyxJQUFJeEIsNERBQUosQ0FBaUI7QUFDdENQLE1BQUUsRUFBRSxXQURrQztBQUV0Q1EsUUFBSSxFQUFFbEMsU0FGZ0M7QUFHdEMwRCxZQUFRLEVBQUUsSUFINEI7QUFJdENDLGFBQVMsRUFBRSxLQUoyQjtBQUt0Q1gsV0FBTyxFQUFFM0MsS0FBSyxDQUFDN0IsZUFMdUI7QUFNdEMyRCxjQUFVLEVBQUUsb0JBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUN3QixPQUFOO0FBQUEsS0FOeUI7QUFPdENDLGdCQUFZLEVBQUUsc0JBQUF6QixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDMEIsTUFBTjtBQUFBLEtBUHVCO0FBUXRDeEIsZ0JBQVksRUFBRSxzQkFBQUYsQ0FBQztBQUFBLGFBQUksQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLENBQVQsRUFBWSxHQUFaLENBQUo7QUFBQSxLQVJ1QjtBQVN0QztBQUNBO0FBQ0FuRSxZQUFRLEVBQUVvQyxLQUFLLENBQUNwQztBQVhzQixHQUFqQixDQUF2QixDQXpEQyxDQXdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQUk0RCxNQUFNLEdBQUcsQ0FDWGhCLFNBQVMsSUFBSTRDLGNBREYsRUFFWHpDLFFBQVEsSUFBSXVCLGFBRkQsQ0FBYjtBQUtBLHNCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0gsa0JBQVksT0FEVDtBQUVILGVBQVEsTUFGTDtBQUdILGdCQUFTO0FBSE4sS0FEVDtBQU1FLFVBQU0sRUFBRVYsTUFOVjtBQU9FLFdBQU8sRUFBRXhCLEtBQUssQ0FBQzVCLE9BUGpCO0FBUUUsb0JBQWdCLEVBQUUyQixnQkFScEI7QUFTRSxjQUFVLEVBQUUsSUFUZDtBQUFBLDJCQVlBLHFFQUFDLG9EQUFEO0FBQ0UsMEJBQW9CLEVBQUMsNEZBRHZCO0FBRUUsV0FBSyxFQUFFLEdBRlQ7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLGNBQVEsRUFBRSxPQUpaO0FBS0UsZUFBUyxFQUFFLENBQUMsT0FMZDtBQU1FLFVBQUksRUFBRSxFQU5SO0FBT0UsY0FBUSxFQUFFLDBEQVBaO0FBUUUsc0JBQWdCLEVBQUUsMEJBQUMyRCxRQUFELEVBQWM7QUFBQSxZQUN2QkMsS0FEdUIsR0FDcUJELFFBRHJCLENBQ3ZCQyxLQUR1QjtBQUFBLFlBQ2hCRixNQURnQixHQUNxQkMsUUFEckIsQ0FDaEJELE1BRGdCO0FBQUEsWUFDUmxGLFFBRFEsR0FDcUJtRixRQURyQixDQUNSbkYsUUFEUTtBQUFBLFlBQ0VELFNBREYsR0FDcUJvRixRQURyQixDQUNFcEYsU0FERjtBQUFBLFlBQ2FFLElBRGIsR0FDcUJrRixRQURyQixDQUNhbEYsSUFEYixFQUU5QjtBQUNEO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FsSXVCaUIsRzs7S0FBQUEsRyIsImZpbGUiOiIuL3NyYy9jYW52YXMvbWFwL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QW1iaWVudExpZ2h0LCBQb2ludExpZ2h0LCBMaWdodGluZ0VmZmVjdH0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5pbXBvcnQgRGVja0dMIGZyb20gJ0BkZWNrLmdsL3JlYWN0JztcbmltcG9ydCB7UG9seWdvbkxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBUcmlwc0xheWVyfSBmcm9tICcuL0N1c3RvbVRyaXBzTGF5ZXInO1xuXG5cbi8vIFNvdXJjZSBkYXRhIENTVlxuY29uc3QgREFUQV9VUkwgPSB7XG4gIEJVSUxESU5HUzpcbiAgICAvLyAnYnVpbGRpbmdzX2p1c3Rfb25lLmpzb24nLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgLy8gJ2J1aWxkaW5nc19WTV83XzguanNvbicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAnL2J1aWxkaW5nc19mb3VyX3RpbGVzX2x5cl8yLmpzb24nLFxuICAgIC8vICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmlzZ2wvZGVjay5nbC1kYXRhL21hc3Rlci9leGFtcGxlcy90cmlwcy9idWlsZGluZ3MuanNvbicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLy8gVFJJUFM6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmlzZ2wvZGVjay5nbC1kYXRhL21hc3Rlci9leGFtcGxlcy90cmlwcy90cmlwcy12Ny5qc29uJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIFRSSVBTOiAnL3RyaXBzX3NtYWxsX3RlbnRoXy5qc29uJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC8vIFRSSVBTOiAnL3RyaXBzX3NtYWxsX3RlbnRoLmpzb24nIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoe1xuICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICBpbnRlbnNpdHk6IDUuMFxufSk7XG5cbmNvbnN0IHBvaW50TGlnaHQgPSBuZXcgUG9pbnRMaWdodCh7XG4gIGNvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gIGludGVuc2l0eTogMi4wLFxuICBwb3NpdGlvbjogWy03My42MTU0MjIyLCA0NS40ODY5NzMsIDgwMDBdXG59KTtcblxuY29uc3QgbGlnaHRpbmdFZmZlY3QgPSBuZXcgTGlnaHRpbmdFZmZlY3Qoe2FtYmllbnRMaWdodCwgcG9pbnRMaWdodH0pO1xuXG5jb25zdCBtYXRlcmlhbCA9IHtcbiAgYW1iaWVudDogMC4xLFxuICBkaWZmdXNlOiAwLjYsXG4gIHNoaW5pbmVzczogMzIsXG4gIHNwZWN1bGFyQ29sb3I6IFswLCA2NCwgNzBdXG59O1xuXG5jb25zdCBERUZBVUxUX1RIRU1FID0ge1xuICBidWlsZGluZ0NvbG9yOiBbNywgNTksIDc2LCAyNTVdLFxuICBidWlsZGluZ09wYWNpdHk6IDAuOTksXG4gIG1hdGVyaWFsLFxuICBlZmZlY3RzOiBbbGlnaHRpbmdFZmZlY3RdXG59O1xuXG5jb25zdCBJTklUSUFMX1ZJRVdfU1RBVEUgPSB7XG4gIC8vIGxvbmdpdHVkZTogLTc0LFxuICAvLyBsYXRpdHVkZTogNDAuNzIsICBcbiAgbG9uZ2l0dWRlOiAtNzMuNTY1NDIyMixcbiAgbGF0aXR1ZGU6IDQ1LjUwNjk3MywgXG4gIHpvb206IDExLFxuICBwaXRjaDogNDUsXG4gIGJlYXJpbmc6IDBcbn07XG5cblxuY29uc3QgY2FsY1BhaXJEaXN0ID0gZnVuY3Rpb24oYSkge1xuICAvLyBjYWxjdWxhdGVzIGRpc3RhbmNlIGZyb20gc3RhcnQgb2YgcGF0aCBmb3IgZXZlcnkgZWxlbWVudFxuICB2YXIgZGlzdEFyciA9IFswXVxuICBmb3IodmFyIGk9MTsgaTxhLmxlbmd0aDsgaSsrKXtcbiAgICB2YXIgZGlzdCA9IE1hdGguc3FydCgoYVtpXVswXS1hW2ktMV1bMF0pKioyKyhhW2ldWzFdLWFbaS0xXVsxXSkqKjIpXG4gICAgZGlzdEFyci5wdXNoKGRpc3QpO1xuICB9XG4gIHJldHVybiBkaXN0QXJyO1xufVxuXG5jb25zdCBjYWxjU3RhcnREaXN0ID0gZnVuY3Rpb24oZGlzdEFycikge1xuICAvLyBjYWxjdWxhdGVzIGRpc3RhbmNlIGZyb20gc3RhcnQgb2YgcGF0aCBmb3IgZXZlcnkgZWxlbWVudFxuICByZXR1cm4gZGlzdEFyci5yZWR1Y2UoKGFhLCB4LCBpKSA9PiBbLi4uYWEsIHggKyAoYWFbaS0xXSB8fCAwKV0sIFtdKTtcbn1cblxuXG4vLyBjb25zdCBNQVBfU1RZTEUgPSAnaHR0cHM6Ly9iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vZ2wvdm95YWdlci1ub2xhYmVscy1nbC1zdHlsZS9zdHlsZS5qc29uJztcbi8vIGNvbnN0IE1BUF9TVFlMRSA9ICdodHRwczovL2Jhc2VtYXBzLmNhcnRvY2RuLmNvbS9nbC9wb3NpdHJvbi1ub2xhYmVscy1nbC1zdHlsZS9zdHlsZS5qc29uJztcbi8vIGNvbnN0IE1BUF9TVFlMRSA9ICdodHRwczovL2Jhc2VtYXBzLmNhcnRvY2RuLmNvbS9nbC9kYXJrLW1hdHRlci1ub2xhYmVscy1nbC1zdHlsZS9zdHlsZS5qc29uJztcblxuY29uc3QgbGFuZENvdmVyID0gW1tbLTczLjUsIDQ1LjRdLCBbLTczLjYsIDQ1LjRdLCBbLTczLjYsIDQ1LjZdLCBbLTczLjUsIDQ1LjZdXV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcChwcm9wcyx7XG4gIGJ1aWxkaW5ncyA9IERBVEFfVVJMLkJVSUxESU5HUyxcbiAgdHJpcHMgPSBEQVRBX1VSTC5UUklQUyxcbiAgdHJhaWxMZW5ndGggPSAxMCxcbiAgd2lkdGhNaW5QaXhlbHMgPSA0LFxuICBpbml0aWFsVmlld1N0YXRlID0gSU5JVElBTF9WSUVXX1NUQVRFLFxuICAvLyBtYXBTdHlsZSA9IE1BUF9TVFlMRSxcbiAgdGhlbWUgPSBERUZBVUxUX1RIRU1FLFxuICBsb29wTGVuZ3RoID0gNDgwMCwgLy8gdW5pdCBjb3JyZXNwb25kcyB0byB0aGUgdGltZXN0YW1wIGluIHNvdXJjZSBkYXRhXG4gIGFuaW1hdGlvblNwZWVkID0gMi41XG59KSB7XG5cbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthbmltYXRpb25dID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2hvd0JsZGdzLCBzZXRzaG93QmxkZ3NdID0gcHJvcHMuYnVpbGRpbmdzU2hvd1Byb3BzXG4gIGNvbnN0IFtzaG93Vmhscywgc2V0c2hvd1ZobHNdID0gcHJvcHMudmVoaWNsZXNTaG93UHJvcHNcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHByb3BzLmxvYWRpbmdQcm9wc1xuXG4gIGNvbnN0IGFnZW50Q29sb3JzID0gcHJvcHMubWFwQ29sb3JzLnRyYWZmaWMuYWdlbnRDb2xvcnM7XG5cbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lKHQgPT4gKHQgKyBhbmltYXRpb25TcGVlZCkgJSBsb29wTGVuZ3RoKTtcbiAgICBhbmltYXRpb24uaWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9O1xuXG4gIHZhciBsYXllcnM9W107XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBhbmltYXRpb24uaWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24uaWQpO1xuICAgIH0sXG4gICAgW2FuaW1hdGlvbl1cbiAgKTtcblxuICBjb25zdCBTaGFkb3dTdWJsYXllciA9IG5ldyBQb2x5Z29uTGF5ZXIoe1xuICAgIGlkOiAnZ3JvdW5kJyxcbiAgICBkYXRhOiBsYW5kQ292ZXIsXG4gICAgZ2V0UG9seWdvbjogZiA9PiBmLFxuICAgIHN0cm9rZWQ6IGZhbHNlLFxuICAgIGdldEZpbGxDb2xvcjogWzAsIDAsIDAsIDBdXG4gIH0pXG5cbiAgY29uc3QgVmVoaWNsZXNMYXllciA9IG5ldyBUcmlwc0xheWVyKHtcbiAgICBpZDogJ3RyaXBzJyxcbiAgICBkYXRhOiB0cmlwcyxcbiAgICBnZXRQYXRoOiBkID0+IGQucGF0aCxcbiAgICBnZXRUaW1lc3RhbXBzOiBkID0+IGQudGltZXN0YW1wcyxcbiAgICBnZXRDb2xvcjogZCA9PiAoZC52ZW5kb3IgPT09IDAgPyBhZ2VudENvbG9yc1swXSA6IChkLnZlbmRvciA9PT0gMSA/IGFnZW50Q29sb3JzWzFdIDogYWdlbnRDb2xvcnNbMl0pKSxcbiAgICBvcGFjaXR5OiAwLjk5LFxuICAgIHdpZHRoTWluUGl4ZWxzLFxuICAgIHJvdW5kZWQ6IHRydWUsXG4gICAgdHJhaWxMZW5ndGgsXG4gICAgY3VycmVudFRpbWU6IHRpbWUsXG4gICAgc2hhZG93RW5hYmxlZDogZmFsc2UsXG4gICAgLy8gZXh0ZW5zaW9uczogW25ldyBQb2ludFRyaXBzTGF5ZXIoKV0sXG4gIH0pXG4gIFxuICBmdW5jdGlvbiB0b0NvbG9yKG51bSkge1xuICAgIG51bSA+Pj49IDA7XG4gICAgdmFyIGIgPSBudW0gJiAweEZGLFxuICAgICAgICBnID0gKG51bSAmIDB4RkYwMCkgPj4+IDgsXG4gICAgICAgIHIgPSAobnVtICYgMHhGRjAwMDApID4+PiAxNixcbiAgICAgICAgYSA9ICggKG51bSAmIDB4RkYwMDAwMDApID4+PiAyNCApIC8gMjU1IDtcbiAgICAvLyByZXR1cm4gXCJyZ2JhKFwiICsgW3IsIGcsIGIsIGFdLmpvaW4oXCIsXCIpICsgXCIpXCI7XG4gICAgcmV0dXJuIFsyNTUsIGcsIGIsIDEwMF07XG4gIH1cblxuICBjb25zdCBCdWlsZGluZ3NMYXllciA9IG5ldyBQb2x5Z29uTGF5ZXIoe1xuICAgIGlkOiAnYnVpbGRpbmdzJyxcbiAgICBkYXRhOiBidWlsZGluZ3MsXG4gICAgZXh0cnVkZWQ6IHRydWUsXG4gICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICBvcGFjaXR5OiB0aGVtZS5idWlsZGluZ09wYWNpdHksXG4gICAgZ2V0UG9seWdvbjogZiA9PiBmLnBvbHlnb24sXG4gICAgZ2V0RWxldmF0aW9uOiBmID0+IGYuaGVpZ2h0LFxuICAgIGdldEZpbGxDb2xvcjogZiA9PiBbMjU1LCAwLCAwLCAyNTVdLFxuICAgIC8vIGdldEZpbGxDb2xvcjogdGhlbWUuYnVpbGRpbmdDb2xvcixcbiAgICAvLyBnZXRGaWxsQ29sb3I6IFsyMjIsIDAsIDAsIDU1XSxcbiAgICBtYXRlcmlhbDogdGhlbWUubWF0ZXJpYWxcbiAgfSlcblxuICBcbiAgLy8gYXN5bmMgZnVuY3Rpb24gbG9hZFZlaGljbGVMYXllcigpe1xuICAvLyAgIGNvbnNvbGUubG9nKCcxJylcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgZnVuY3Rpb24gY2FsbGJhY2soKXtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCcyJylcbiAgLy8gICAgIHJldHVybiBWZWhpY2xlc0xheWVyXG4gIC8vICAgfVxuICAvLyAgIC8vIHZhciByZXMgPSBhd2FpdCBjYWxsYmFjaygpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKCczJylcbiAgLy8gICByZXR1cm4gYXdhaXQgY2FsbGJhY2soKTtcbiAgLy8gfVxuXG5cbiAgdmFyIGxheWVycyA9IFtcbiAgICBzaG93QmxkZ3MgJiYgQnVpbGRpbmdzTGF5ZXIsXG4gICAgc2hvd1ZobHMgJiYgVmVoaWNsZXNMYXllcixcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPERlY2tHTFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAgICd3aWR0aCc6JzEwMCUnLFxuICAgICAgICAgICdoZWlnaHQnOicxMDAlJyxcbiAgICAgIH19XG4gICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgIGVmZmVjdHM9e3RoZW1lLmVmZmVjdHN9XG4gICAgICBpbml0aWFsVmlld1N0YXRlPXtpbml0aWFsVmlld1N0YXRlfVxuICAgICAgY29udHJvbGxlcj17dHJ1ZX1cbiAgICA+XG5cbiAgICA8UmVhY3RNYXBHTFxuICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49J3BrLmV5SjFJam9pYldsc1lXUnVlWFVpTENKaElqb2lZMnRvTm1oMWFXOTNNSEl3YWpKeGJ6ZzNPV1J1T1RWbGVpSjkuOWg0azVHRVpPUjlPOExTM2d0YVFvdydcbiAgICAgIHdpZHRoPXs0MDB9XG4gICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgIGxhdGl0dWRlPXs0Ny43NTc3fVxuICAgICAgbG9uZ2l0dWRlPXstNzMuNDM3Nn1cbiAgICAgIHpvb209ezE0fVxuICAgICAgbWFwU3R5bGU9ICdtYXBib3g6Ly9zdHlsZXMvbWlsYWRueXUvY2tpYXpmMDFjMDkyZTE5czFrN2ZqYm9yNC9kcmFmdCdcbiAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyh2aWV3cG9ydCkgPT4ge1xuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodCwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgem9vbX0gPSB2aWV3cG9ydDtcbiAgICAgICAgLy8gY2FsbCBgc2V0U3RhdGVgIGFuZCB1c2UgdGhlIHN0YXRlIHRvIHVwZGF0ZSB0aGUgbWFwLlxuICAgICAgfX1cbiAgICAvPlxuXG4gICAgICB7LyogPFN0YXRpY01hcCByZXVzZU1hcHMgbWFwU3R5bGU9e21hcFN0eWxlfSBwcmV2ZW50U3R5bGVEaWZmaW5nPXt0cnVlfSAvPiAqL31cbiAgICA8L0RlY2tHTD5cbiAgKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas/map/map.js\n");

/***/ })

})