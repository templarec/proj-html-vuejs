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
    backgroundHeader: [{
      background: "./assets/img/theme_slider1_bg-1.jpg",
      title: "Showcase your courses"
    }, {
      background: "./assets/img/theme_slider2_bg-1.jpg",
      title: "Key to your Success"
    }, {
      background: "./assets/img/theme_slider3_bg-1.jpg",
      title: "Lead. Inspire. Win!"
    }],
    //menu links della navbar
    menu: [{
      titolo: "Home",
      items: [{
        text: "Driving School",
        url: "#"
      }, {
        text: "High School",
        url: "#"
      }, {
        text: "Kinder Garten",
        url: "#"
      }, {
        text: "Header Video",
        url: "#"
      }]
    }, {
      titolo: "Courses",
      items: [{
        text: "Our Courses",
        url: "#latest-courses"
      }, {
        text: "Single Course",
        url: "#"
      }, {
        text: "Instructor Profile",
        url: "#"
      }, {
        text: "Become A Teacher",
        url: "#"
      }]
    }, {
      titolo: "About Us"
    }, {
      titolo: "News",
      items: [{
        text: "EduPrime Blog",
        url: "#"
      }, {
        text: "Single Post",
        url: "#"
      }, {
        text: "Category Posts",
        url: "#"
      }]
    }, {
      titolo: "Pages",
      items: [{
        text: "How it Works",
        url: "#"
      }, {
        text: "Single Event",
        url: "#"
      }, {
        text: "University Shop",
        url: "#"
      }, {
        text: "Single Product",
        url: "#"
      }]
    }, {
      titolo: "Contact"
    }, {
      titolo: "Purchase"
    }],
    //background del jumbo corrente random
    currentBg: {},
    currentTitle: '',
    currentJumboPos: 0,
    toggleJumbo: true,
    toggleJumbo2: false,
    //tab corrente lista facoltà
    currentTab: 1,
    //lista facoltà
    faculties: [{
      image: './assets/img/Gavel-Illustration-e1556884768193.png',
      titolo: 'Law Faculty',
      descrizione: 'Learning from world-leading academics and practitioners, ' + 'you\'ll not only receive an outstanding grounding in the theory of law, ' + 'but you will be able to understand how those principles are applied in practice ' + 'through a range of student-led activities and competitions.'
    }, {
      image: './assets/img/Economy.png',
      titolo: 'Economy',
      descrizione: 'Economics focuses on the behaviour and interactions of economic ' + 'agents and how economies work. Microeconomics analyzes basic elements in the ' + 'economy, including individual agents and markets, their interactions, and the ' + 'outcomes of interactions, including unemployment of resource.'
    }, {
      image: './assets/img/Medicine.png',
      titolo: 'Medicine',
      descrizione: 'Medicine is the science and practice of establishing the diagnosis,' + ' prognosis, treatment, and prevention of disease. Medicine encompasses a' + ' variety of health care practices evolved to maintain and restore health ' + 'by the prevention and treatment of illness.'
    }, {
      image: './assets/img/Computer-Science.png',
      titolo: 'Computer Science',
      descrizione: 'Computer science is the study of processes that interact with ' + 'data and that can be represented as data in the form of programs. ' + 'It enables the use of algorithms to manipulate, store, and communicate ' + 'digital information. A computer scientist studies the theory of ' + 'computation software systems.'
    }, {
      image: './assets/img/Graphic-Design.png',
      titolo: 'Graphic Design',
      descrizione: 'Graphic design is the process of visual communication and ' + 'problem-solving through the use of typography, photography and ' + 'illustration. The field is considered a subset of visual communication ' + 'and communication design, but sometimes the term ``graphic design`` ' + 'is used synonymously.'
    }],
    //lista partners
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
    //V-model all'input della newsletter
    inputNewsletter: '',
    //Array per salvare le email newsletter
    emailNewsletter: [],
    showOveralay: false,
    //1 links del footer
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
    //2 links del footer
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
    //categorie per tags di ricerca
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
    this.currentJumboPos = rand;
    this.currentBg = {
      backgroundImage: "url('".concat(this.backgroundHeader[rand].background, "')")
    };
    this.currentTitle = this.backgroundHeader[rand].title; //cambio jumbo ogni 10 secondi

    this.avvioTimer(10000);
  },
  computed: {},
  methods: {
    //cambio jumbo in base alle frecce
    changeJumbo: function changeJumbo(direction) {
      this.toggleJumbo = !this.toggleJumbo;
      this.toggleJumbo2 = !this.toggleJumbo2;

      if (direction === 0) {
        //sinistra
        if (this.currentJumboPos > 0) {
          this.currentJumboPos--;
        } else if (this.currentJumboPos === 0) {
          this.currentJumboPos = 2;
        }
      } else if (direction === 1) {
        //destra
        if (this.currentJumboPos < 2) {
          this.currentJumboPos++;
        } else if (this.currentJumboPos === 2) {
          this.currentJumboPos = 0;
        }
      }

      this.currentBg = {
        backgroundImage: "url('".concat(this.backgroundHeader[this.currentJumboPos].background, "')")
      };
      this.currentTitle = this.backgroundHeader[this.currentJumboPos].title;
    },
    avvioTimer: function avvioTimer(timeout) {
      var _this = this;

      setInterval(function () {
        _this.changeJumbo(1);
      }, timeout);
    },
    //cambiamento tab al click
    changeTab: function changeTab(numero) {
      this.currentTab = numero;
    },
    //salvataggio in array email newsletter
    saveEmail: function saveEmail() {
      var _this2 = this;

      this.emailNewsletter.push(this.inputNewsletter); //timer per mostrare overlay di inserimento email newsletter

      setTimeout(function () {
        _this2.showOveralay = true;
        setTimeout(function () {
          _this2.showOveralay = false;
        }, 3800);
      }, 400);
    },
    backToTop: function backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
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