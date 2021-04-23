/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

//proj-html-vuejs - 21/04/21
// Author: lorenzobernini
var app = new Vue({
  el: '#root',
  data: {
    //array background disponibili per il jumbo
    backgroundHeader: ["./assets/img/theme_slider1_bg-1.jpg", "./assets/img/theme_slider2_bg-1.jpg", "./assets/img/theme_slider3_bg-1.jpg"],
    //menu della navbar
    menu: [{
      titolo: "Home",
      items: [{
        text: "Driving School"
      }, {
        text: "High School"
      }, {
        text: "Kinder Garten"
      }, {
        text: "Header Video"
      }]
    }, {
      titolo: "Courses",
      items: [{
        text: "Our Courses"
      }, {
        text: "Single Course"
      }, {
        text: "Instructor Profile"
      }, {
        text: "Become A Teacher"
      }]
    }, {
      titolo: "About Us"
    }, {
      titolo: "News",
      items: [{
        text: "EduPrime Blog"
      }, {
        text: "Single Post"
      }, {
        text: "Category Posts"
      }]
    }, {
      titolo: "Pages",
      items: [{
        text: "How it Works"
      }, {
        text: "Single Event"
      }, {
        text: "University Shop"
      }, {
        text: "Single Product"
      }]
    }, {
      titolo: "Contact"
    }, {
      titolo: "Purchase"
    }],
    //background del jumbo corrente random
    currentBg: {},
    partners: [{
      path: './assets/img/Partner-2.png',
      alt: 'Medals',
      url: '#'
    }, {
      path: './assets/img/Partner-3.png',
      alt: 'Light Bulb',
      url: '#'
    }, {
      path: './assets/img/Partner-4.png',
      alt: 'Stack Books',
      url: '#'
    }, {
      path: './assets/img/Partner-5.png',
      alt: 'School Building',
      url: '#'
    }, {
      path: './assets/img/Partner-6.png',
      alt: 'Handmade',
      url: '#'
    }, {
      path: './assets/img/Partner-8.png',
      alt: 'Cup logo',
      url: '#'
    }, {
      path: './assets/img/Partner-1.png',
      alt: 'paper plane',
      url: '#'
    }, {
      path: './assets/img/Partner-7.png',
      alt: 'ABC Communications',
      url: '#'
    }],
    footerLinks1: [{
      text: 'Get EduPrime',
      url: ''
    }, {
      text: 'Request a website',
      url: '#'
    }, {
      text: 'Browse Themes',
      url: '#'
    }, {
      text: 'Payments options',
      url: '#'
    }, {
      text: 'Support System',
      url: '#'
    }, {
      text: 'Checkout',
      url: '#'
    }, {
      text: 'Purchase Theme',
      url: '#'
    }],
    footerLinks2: [{
      text: 'Networking',
      url: ''
    }, {
      text: 'Purchase Theme',
      url: '#'
    }, {
      text: 'Our Benefits',
      url: '#'
    }, {
      text: 'Our Team',
      url: '#'
    }, {
      text: 'Our Services',
      url: '#'
    }, {
      text: 'Other Products',
      url: '#'
    }, {
      text: 'My Account',
      url: '#'
    }],
    categorie: [{
      id: 0,
      desc: 'economy'
    }, {
      id: 1,
      desc: 'design'
    }, {
      id: 2,
      desc: 'coaching'
    }, {
      id: 3,
      desc: 'business'
    }, {
      id: 4,
      desc: 'medicine'
    }, {
      id: 5,
      desc: 'law'
    }, {
      id: 6,
      desc: 'fitness'
    }]
  },
  mounted: function mounted() {
    //metto in current BG un background random
    var rand = Math.floor(Math.random() * 3);
    this.currentBg = {
      backgroundImage: "url('".concat(this.backgroundHeader[rand], "')")
    };
  },
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/main": 0,
/******/ 			"assets/css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;