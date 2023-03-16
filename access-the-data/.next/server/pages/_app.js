/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*\\.json$":
/*!***********************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*\.json$ namespace object ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common.json": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./fr/common.json": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./lib/apolloClient.ts":
/*!*****************************!*\
  !*** ./lib/apolloClient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-rest */ \"apollo-link-rest\");\n/* harmony import */ var apollo_link_rest__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_rest__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nlet apolloClient;\nconst restLink = new apollo_link_rest__WEBPACK_IMPORTED_MODULE_4__.RestLink({\n  uri: next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.DMS + '/api/3/action/',\n  endpoints: {\n    wordpress: `https://public-api.wordpress.com/rest/v1.1/sites/${next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.CMS}/posts/slug:`,\n    'wordpress-posts': `https://public-api.wordpress.com/rest/v1.1/sites/${next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.CMS}/posts/`\n  },\n  typePatcher: {\n    Search: data => {\n      if (data.result != null) {\n        data.result.__typename = 'SearchResponse';\n\n        if (data.result.results != null) {\n          data.result.results = data.result.results.map(item => {\n            if (item.organization != null) {\n              item.organization.__typename = 'Organization';\n            }\n\n            return _objectSpread({\n              __typename: 'Package'\n            }, item);\n          });\n        }\n      }\n\n      return data;\n    },\n    Response: data => {\n      if (data.result != null) {\n        data.result.__typename = 'Package';\n\n        if (data.result.organization != null) {\n          data.result.organization.__typename = 'Organization';\n        }\n\n        if (data.result.resources != null) {\n          data.result.resources = data.result.resources.map(item => {\n            return _objectSpread({\n              __typename: 'Resource'\n            }, item);\n          });\n        }\n      }\n\n      return data;\n    }\n  }\n});\n\nfunction createApolloClient() {\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    link: restLink,\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState = null) {\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7O0FBQ0EsWUFBbUMsT0FBT0MsYUFBUCxDQVprQyxDQWFyRTs7QUFDQSxNQUFJLENBQUN4QixZQUFMLEVBQW1CQSxZQUFZLEdBQUd3QixhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUVNLFNBQVNFLFNBQVQsQ0FDTEgsWUFBWSxHQUFHLElBRFYsRUFFZ0U7QUFDckUsUUFBTUksS0FBSyxHQUFHaEMsOENBQU8sQ0FBQyxNQUFNMkIsZ0JBQWdCLENBQUNDLFlBQUQsQ0FBdkIsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9JLEtBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRhbC1tYWluLy4vbGliL2Fwb2xsb0NsaWVudC50cz9lOGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHtcbiAgSW5NZW1vcnlDYWNoZSxcbiAgTm9ybWFsaXplZENhY2hlLFxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3QsXG59IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBSZXN0TGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXJlc3QnO1xuXG5sZXQgYXBvbGxvQ2xpZW50OlxuICB8IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGU+XG4gIHwgQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XG5cbmNvbnN0IHJlc3RMaW5rID0gbmV3IFJlc3RMaW5rKHtcbiAgdXJpOiBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnLkRNUyArICcvYXBpLzMvYWN0aW9uLycsXG4gIGVuZHBvaW50czoge1xuICAgIHdvcmRwcmVzczogYGh0dHBzOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy8ke1xuICAgICAgZ2V0Q29uZmlnKCkucHVibGljUnVudGltZUNvbmZpZy5DTVNcbiAgICB9L3Bvc3RzL3NsdWc6YCxcbiAgICAnd29yZHByZXNzLXBvc3RzJzogYGh0dHBzOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy8ke1xuICAgICAgZ2V0Q29uZmlnKCkucHVibGljUnVudGltZUNvbmZpZy5DTVNcbiAgICB9L3Bvc3RzL2AsXG4gIH0sXG4gIHR5cGVQYXRjaGVyOiB7XG4gICAgU2VhcmNoOiAoZGF0YTogYW55KTogYW55ID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEucmVzdWx0Ll9fdHlwZW5hbWUgPSAnU2VhcmNoUmVzcG9uc2UnO1xuXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdC5yZXN1bHRzICE9IG51bGwpIHtcbiAgICAgICAgICBkYXRhLnJlc3VsdC5yZXN1bHRzID0gZGF0YS5yZXN1bHQucmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLm9yZ2FuaXphdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGl0ZW0ub3JnYW5pemF0aW9uLl9fdHlwZW5hbWUgPSAnT3JnYW5pemF0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IF9fdHlwZW5hbWU6ICdQYWNrYWdlJywgLi4uaXRlbSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIFJlc3BvbnNlOiAoZGF0YTogYW55KTogYW55ID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEucmVzdWx0Ll9fdHlwZW5hbWUgPSAnUGFja2FnZSc7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdC5vcmdhbml6YXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEucmVzdWx0Lm9yZ2FuaXphdGlvbi5fX3R5cGVuYW1lID0gJ09yZ2FuaXphdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQucmVzb3VyY2VzICE9IG51bGwpIHtcbiAgICAgICAgICBkYXRhLnJlc3VsdC5yZXNvdXJjZXMgPSBkYXRhLnJlc3VsdC5yZXNvdXJjZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBfX3R5cGVuYW1lOiAnUmVzb3VyY2UnLCAuLi5pdGVtIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogcmVzdExpbmssXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhcbiAgaW5pdGlhbFN0YXRlID0gbnVsbFxuKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZT4gfCBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQ6XG4gICAgfCBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlPlxuICAgIHwgQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPVxuICAgIGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKFxuICBpbml0aWFsU3RhdGUgPSBudWxsXG4pOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlPiB8IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsImdldENvbmZpZyIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJSZXN0TGluayIsImFwb2xsb0NsaWVudCIsInJlc3RMaW5rIiwidXJpIiwicHVibGljUnVudGltZUNvbmZpZyIsIkRNUyIsImVuZHBvaW50cyIsIndvcmRwcmVzcyIsIkNNUyIsInR5cGVQYXRjaGVyIiwiU2VhcmNoIiwiZGF0YSIsInJlc3VsdCIsIl9fdHlwZW5hbWUiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsIm9yZ2FuaXphdGlvbiIsIlJlc3BvbnNlIiwicmVzb3VyY2VzIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwibGluayIsImNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apolloClient.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNamespaces\": () => (/* binding */ loadNamespaces),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apolloClient */ \"./lib/apolloClient.ts\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes */ \"./themes/index.ts\");\n/* harmony import */ var _themes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/utils */ \"./themes/utils.ts\");\n/* harmony import */ var next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/I18nProvider */ \"next-translate/I18nProvider\");\n/* harmony import */ var next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/home/judson/dev/h4la/accessthedata-ckan/access-the-data/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nasync function loadNamespaces(namespaces, lang) {\n  const res = {};\n\n  for (const ns of namespaces) {\n    res[ns] = await __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${lang}/${ns}.json`).then(m => m.default);\n  }\n\n  return res;\n}\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__.useApollo)(pageProps.initialApolloState);\n  const {\n    0: theme\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_themes__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_THEME); // setTheme\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    /**\n     * We can switch theme.\n     * e.g. setTheme('primary');\n     * */\n    (0,_themes_utils__WEBPACK_IMPORTED_MODULE_4__.applyTheme)(theme);\n  }, [theme]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_5___default()), {\n    lang: router.locale,\n    namespaces: pageProps._ns,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n      client: apolloClient,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNTyxlQUFlUSxjQUFmLENBQ0xDLFVBREssRUFFTEMsSUFGSyxFQUdlO0FBQ3BCLFFBQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssTUFBTUMsRUFBWCxJQUFpQkgsVUFBakIsRUFBNkI7QUFDM0JFLElBQUFBLEdBQUcsQ0FBQ0MsRUFBRCxDQUFILEdBQVUsTUFBTSx1RUFBUSxLQUFhRixJQUFLLElBQUdFLEVBQUcsT0FBaEMsRUFBd0NDLElBQXhDLENBQ2JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxPQURLLENBQWhCO0FBR0Q7O0FBQ0QsU0FBT0osR0FBUDtBQUNEOztBQU9ELE1BQU1LLEtBQXNCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBRCxLQUE4QjtBQUMzRCxRQUFNQyxZQUFZLEdBQUdoQiw0REFBUyxDQUFDZSxTQUFTLENBQUNFLGtCQUFYLENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDO0FBQUQsTUFBVXBCLCtDQUFRLENBQUNHLGtEQUFELENBQXhCLENBRjJELENBRWxCOztBQUN6QyxRQUFNa0IsTUFBTSxHQUFHZixzREFBUyxFQUF4QjtBQUVBUCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDtBQUNKO0FBQ0E7QUFDQTtBQUVJSyxJQUFBQSx5REFBVSxDQUFDZ0IsS0FBRCxDQUFWO0FBQ0QsR0FQUSxFQU9OLENBQUNBLEtBQUQsQ0FQTSxDQUFUO0FBU0Esc0JBQ0UsOERBQUMsb0VBQUQ7QUFBYyxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBM0I7QUFBbUMsY0FBVSxFQUFFTCxTQUFTLENBQUNNLEdBQXpEO0FBQUEsMkJBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IsWUFBTSxFQUFFTCxZQUF4QjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQXJCRDs7QUF1QkEsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwtbWFpbi8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvQ2xpZW50JztcbmltcG9ydCB7IERFRkFVTFRfVEhFTUUgfSBmcm9tICcuLi90aGVtZXMnO1xuaW1wb3J0IHsgYXBwbHlUaGVtZSB9IGZyb20gJy4uL3RoZW1lcy91dGlscyc7XG5pbXBvcnQgSTE4blByb3ZpZGVyIGZyb20gJ25leHQtdHJhbnNsYXRlL0kxOG5Qcm92aWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmludGVyZmFjZSBJOG5PYmplY3Qge1xuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWROYW1lc3BhY2VzKFxuICBuYW1lc3BhY2VzOiBzdHJpbmdbXSxcbiAgbGFuZzogc3RyaW5nXG4pOiBQcm9taXNlPEk4bk9iamVjdD4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgZm9yIChjb25zdCBucyBvZiBuYW1lc3BhY2VzKSB7XG4gICAgcmVzW25zXSA9IGF3YWl0IGltcG9ydChgLi4vbG9jYWxlcy8ke2xhbmd9LyR7bnN9Lmpzb25gKS50aGVuKFxuICAgICAgKG0pID0+IG0uZGVmYXVsdFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgQ29tcG9uZW50OiBhbnk7XG4gIHBhZ2VQcm9wczogYW55O1xufTtcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xuICBjb25zdCBbdGhlbWVdID0gdXNlU3RhdGUoREVGQVVMVF9USEVNRSk7IC8vIHNldFRoZW1lXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogV2UgY2FuIHN3aXRjaCB0aGVtZS5cbiAgICAgKiBlLmcuIHNldFRoZW1lKCdwcmltYXJ5Jyk7XG4gICAgICogKi9cblxuICAgIGFwcGx5VGhlbWUodGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxJMThuUHJvdmlkZXIgbGFuZz17cm91dGVyLmxvY2FsZX0gbmFtZXNwYWNlcz17cGFnZVByb3BzLl9uc30+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvSTE4blByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIkRFRkFVTFRfVEhFTUUiLCJhcHBseVRoZW1lIiwiSTE4blByb3ZpZGVyIiwidXNlUm91dGVyIiwibG9hZE5hbWVzcGFjZXMiLCJuYW1lc3BhY2VzIiwibGFuZyIsInJlcyIsIm5zIiwidGhlbiIsIm0iLCJkZWZhdWx0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJ0aGVtZSIsInJvdXRlciIsImxvY2FsZSIsIl9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./themes/base.ts":
/*!************************!*\
  !*** ./themes/base.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  primary: '#896A00',\n  secondary: '#254E70',\n  black: '#0C0C0C',\n  positive: '#0C0C0C',\n  textPrimary: '#896A00',\n  backgroundPrimary: '#FAEEC5',\n  // Define font size variables\n  fontSmall: '18px',\n  fontMedium: '30px',\n  fontLarge: '45px'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7QUFDYkEsRUFBQUEsT0FBTyxFQUFFLFNBREk7QUFFYkMsRUFBQUEsU0FBUyxFQUFFLFNBRkU7QUFHYkMsRUFBQUEsS0FBSyxFQUFFLFNBSE07QUFJYkMsRUFBQUEsUUFBUSxFQUFFLFNBSkc7QUFLYkMsRUFBQUEsV0FBVyxFQUFFLFNBTEE7QUFNYkMsRUFBQUEsaUJBQWlCLEVBQUUsU0FOTjtBQVFiO0FBQ0FDLEVBQUFBLFNBQVMsRUFBRSxNQVRFO0FBVWJDLEVBQUFBLFVBQVUsRUFBRSxNQVZDO0FBV2JDLEVBQUFBLFNBQVMsRUFBRTtBQVhFLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwtbWFpbi8uL3RoZW1lcy9iYXNlLnRzPzQzODkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBwcmltYXJ5OiAnIzg5NkEwMCcsXG4gIHNlY29uZGFyeTogJyMyNTRFNzAnLFxuICBibGFjazogJyMwQzBDMEMnLFxuICBwb3NpdGl2ZTogJyMwQzBDMEMnLFxuICB0ZXh0UHJpbWFyeTogJyM4OTZBMDAnLFxuICBiYWNrZ3JvdW5kUHJpbWFyeTogJyNGQUVFQzUnLFxuXG4gIC8vIERlZmluZSBmb250IHNpemUgdmFyaWFibGVzXG4gIGZvbnRTbWFsbDogJzE4cHgnLFxuICBmb250TWVkaXVtOiAnMzBweCcsXG4gIGZvbnRMYXJnZTogJzQ1cHgnLFxufTtcbiJdLCJuYW1lcyI6WyJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiYmxhY2siLCJwb3NpdGl2ZSIsInRleHRQcmltYXJ5IiwiYmFja2dyb3VuZFByaW1hcnkiLCJmb250U21hbGwiLCJmb250TWVkaXVtIiwiZm9udExhcmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/base.ts\n");

/***/ }),

/***/ "./themes/index.ts":
/*!*************************!*\
  !*** ./themes/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_THEME\": () => (/* binding */ DEFAULT_THEME),\n/* harmony export */   \"themes\": () => (/* binding */ themes)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./themes/base.ts\");\n\n\n/**\n * The default theme to load\n */\nconst DEFAULT_THEME = 'base';\nconst themes = {\n  base: _base__WEBPACK_IMPORTED_MODULE_0__.default\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBR0E7QUFDQTtBQUNBO0FBQ08sTUFBTUMsYUFBYSxHQUFHLE1BQXRCO0FBRUEsTUFBTUMsTUFBZSxHQUFHO0FBQzdCRixFQUFBQSxJQUFJQSw0Q0FBQUE7QUFEeUIsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwtbWFpbi8uL3RoZW1lcy9pbmRleC50cz81ZWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJVGhlbWVzIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgdGhlbWUgdG8gbG9hZFxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9USEVNRSA9ICdiYXNlJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lczogSVRoZW1lcyA9IHtcbiAgYmFzZSxcbn07XG4iXSwibmFtZXMiOlsiYmFzZSIsIkRFRkFVTFRfVEhFTUUiLCJ0aGVtZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./themes/index.ts\n");

/***/ }),

/***/ "./themes/utils.ts":
/*!*************************!*\
  !*** ./themes/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mapTheme\": () => (/* binding */ mapTheme),\n/* harmony export */   \"applyTheme\": () => (/* binding */ applyTheme),\n/* harmony export */   \"extend\": () => (/* binding */ extend)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./themes/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst mapTheme = variables => {\n  return {\n    '--color-primary': variables.primary || '',\n    '--color-secondary': variables.secondary || '',\n    '--color-positive': variables.positive || '',\n    '--color-negative': variables.negative || '',\n    '--color-text-primary': variables.textPrimary || '',\n    '--background-primary': variables.backgroundPrimary || '',\n    '--background-sec': variables.backgroundSecondary || '',\n    '--font-size-small': variables.fontSmall || '18px',\n    '--font-size-medium': variables.fontMedium || '30px',\n    '--font-size-large': variables.fontLarge || '45px'\n  };\n};\nconst applyTheme = theme => {\n  const themeObject = mapTheme(_index__WEBPACK_IMPORTED_MODULE_0__.themes[theme]);\n  if (!themeObject) return;\n  const root = document.documentElement;\n  Object.keys(themeObject).forEach(property => {\n    if (property === 'name') {\n      return;\n    }\n\n    root.style.setProperty(property, themeObject[property]);\n  });\n};\nconst extend = (extending, newTheme) => {\n  return _objectSpread(_objectSpread({}, extending), newTheme);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBY08sTUFBTUMsUUFBUSxHQUFJQyxTQUFELElBQXFDO0FBQzNELFNBQU87QUFDTCx1QkFBbUJBLFNBQVMsQ0FBQ0MsT0FBVixJQUFxQixFQURuQztBQUVMLHlCQUFxQkQsU0FBUyxDQUFDRSxTQUFWLElBQXVCLEVBRnZDO0FBR0wsd0JBQW9CRixTQUFTLENBQUNHLFFBQVYsSUFBc0IsRUFIckM7QUFJTCx3QkFBb0JILFNBQVMsQ0FBQ0ksUUFBVixJQUFzQixFQUpyQztBQUtMLDRCQUF3QkosU0FBUyxDQUFDSyxXQUFWLElBQXlCLEVBTDVDO0FBTUwsNEJBQXdCTCxTQUFTLENBQUNNLGlCQUFWLElBQStCLEVBTmxEO0FBT0wsd0JBQW9CTixTQUFTLENBQUNPLG1CQUFWLElBQWlDLEVBUGhEO0FBUUwseUJBQXFCUCxTQUFTLENBQUNRLFNBQVYsSUFBdUIsTUFSdkM7QUFTTCwwQkFBc0JSLFNBQVMsQ0FBQ1MsVUFBVixJQUF3QixNQVR6QztBQVVMLHlCQUFxQlQsU0FBUyxDQUFDVSxTQUFWLElBQXVCO0FBVnZDLEdBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTUMsVUFBVSxHQUFJQyxLQUFELElBQXlCO0FBQ2pELFFBQU1DLFdBQXlCLEdBQUdkLFFBQVEsQ0FBQ0QsMENBQU0sQ0FBQ2MsS0FBRCxDQUFQLENBQTFDO0FBQ0EsTUFBSSxDQUFDQyxXQUFMLEVBQWtCO0FBRWxCLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxlQUF0QjtBQUVBQyxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsV0FBWixFQUF5Qk0sT0FBekIsQ0FBa0NDLFFBQUQsSUFBYztBQUM3QyxRQUFJQSxRQUFRLEtBQUssTUFBakIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRE4sSUFBQUEsSUFBSSxDQUFDTyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJGLFFBQXZCLEVBQWlDUCxXQUFXLENBQUNPLFFBQUQsQ0FBNUM7QUFDRCxHQU5EO0FBT0QsQ0FiTTtBQWVBLE1BQU1HLE1BQU0sR0FBRyxDQUFDQyxTQUFELEVBQW9CQyxRQUFwQixLQUFpRDtBQUNyRSx5Q0FBWUQsU0FBWixHQUEwQkMsUUFBMUI7QUFDRCxDQUZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGFsLW1haW4vLi90aGVtZXMvdXRpbHMudHM/OTZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBJVGhlbWUge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRoZW1lcyB7XG4gIFtrZXk6IHN0cmluZ106IElUaGVtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWFwcGVkVGhlbWUge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbWFwVGhlbWUgPSAodmFyaWFibGVzOiBJVGhlbWUpOiBJTWFwcGVkVGhlbWUgPT4ge1xuICByZXR1cm4ge1xuICAgICctLWNvbG9yLXByaW1hcnknOiB2YXJpYWJsZXMucHJpbWFyeSB8fCAnJyxcbiAgICAnLS1jb2xvci1zZWNvbmRhcnknOiB2YXJpYWJsZXMuc2Vjb25kYXJ5IHx8ICcnLFxuICAgICctLWNvbG9yLXBvc2l0aXZlJzogdmFyaWFibGVzLnBvc2l0aXZlIHx8ICcnLFxuICAgICctLWNvbG9yLW5lZ2F0aXZlJzogdmFyaWFibGVzLm5lZ2F0aXZlIHx8ICcnLFxuICAgICctLWNvbG9yLXRleHQtcHJpbWFyeSc6IHZhcmlhYmxlcy50ZXh0UHJpbWFyeSB8fCAnJyxcbiAgICAnLS1iYWNrZ3JvdW5kLXByaW1hcnknOiB2YXJpYWJsZXMuYmFja2dyb3VuZFByaW1hcnkgfHwgJycsXG4gICAgJy0tYmFja2dyb3VuZC1zZWMnOiB2YXJpYWJsZXMuYmFja2dyb3VuZFNlY29uZGFyeSB8fCAnJyxcbiAgICAnLS1mb250LXNpemUtc21hbGwnOiB2YXJpYWJsZXMuZm9udFNtYWxsIHx8ICcxOHB4JyxcbiAgICAnLS1mb250LXNpemUtbWVkaXVtJzogdmFyaWFibGVzLmZvbnRNZWRpdW0gfHwgJzMwcHgnLFxuICAgICctLWZvbnQtc2l6ZS1sYXJnZSc6IHZhcmlhYmxlcy5mb250TGFyZ2UgfHwgJzQ1cHgnLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcGx5VGhlbWUgPSAodGhlbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zdCB0aGVtZU9iamVjdDogSU1hcHBlZFRoZW1lID0gbWFwVGhlbWUodGhlbWVzW3RoZW1lXSk7XG4gIGlmICghdGhlbWVPYmplY3QpIHJldHVybjtcblxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIE9iamVjdC5rZXlzKHRoZW1lT2JqZWN0KS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ25hbWUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhlbWVPYmplY3RbcHJvcGVydHldKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gKGV4dGVuZGluZzogSVRoZW1lLCBuZXdUaGVtZTogSVRoZW1lKTogSVRoZW1lID0+IHtcbiAgcmV0dXJuIHsgLi4uZXh0ZW5kaW5nLCAuLi5uZXdUaGVtZSB9O1xufTtcbiJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJtYXBUaGVtZSIsInZhcmlhYmxlcyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwidGV4dFByaW1hcnkiLCJiYWNrZ3JvdW5kUHJpbWFyeSIsImJhY2tncm91bmRTZWNvbmRhcnkiLCJmb250U21hbGwiLCJmb250TWVkaXVtIiwiZm9udExhcmdlIiwiYXBwbHlUaGVtZSIsInRoZW1lIiwidGhlbWVPYmplY3QiLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImV4dGVuZCIsImV4dGVuZGluZyIsIm5ld1RoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/utils.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-rest":
/*!***********************************!*\
  !*** external "apollo-link-rest" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link-rest");

/***/ }),

/***/ "next-translate/I18nProvider":
/*!**********************************************!*\
  !*** external "next-translate/I18nProvider" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/I18nProvider");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();