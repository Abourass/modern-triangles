// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(v) {
      return new Vector(this.x + v.x, this.y + v.y);
    }
  }, {
    key: "addTo",
    value: function addTo(v) {
      this.x += v.x;
      this.y += v.y;
    }
  }, {
    key: "sub",
    value: function sub(v) {
      return new Vector(this.x - v.x, this.y - v.y);
    }
  }, {
    key: "subFrom",
    value: function subFrom(v) {
      this.x -= v.x;
      this.y -= v.y;
    }
  }, {
    key: "mult",
    value: function mult(n) {
      return new Vector(this.x * n, this.y * n);
    }
  }, {
    key: "multTo",
    value: function multTo(n) {
      this.x *= n;
      this.y *= n;
      return this;
    }
  }, {
    key: "div",
    value: function div(n) {
      return new Vector(this.x / n, this.y / n);
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var length = this.getLength();
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    }
  }, {
    key: "setLength",
    value: function setLength(length) {
      var angle = this.getAngle();
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "getLengthSq",
    value: function getLengthSq() {
      return this.x * this.x + this.y * this.y;
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(v) {
      return this.sub(v).getLength();
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return this.x == v.x && this.y == v.y;
    }
  }]);

  return Vector;
}();

var _default = Vector;
exports.default = _default;
},{}],"js/triangles.js":[function(require,module,exports) {
"use strict";

var _Vector = _interopRequireDefault(require("./Vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Triangle =
/*#__PURE__*/
function () {
  function Triangle(a, b, c) {
    _classCallCheck(this, Triangle);

    this.a = a;
    this.b = b;
    this.c = c;
  }

  _createClass(Triangle, [{
    key: "vertexes",
    value: function vertexes() {
      return [this.a, this.b, this.c];
    }
  }, {
    key: "edges",
    value: function edges() {
      return [[this.a, this.b], [this.b, this.c], [this.c, this.a]];
    }
  }, {
    key: "sharesAVertexWith",
    value: function sharesAVertexWith(triangle) {
      // TODO: optimize me please!
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var v = this.vertexes()[i];
          var vv = triangle.vertexes()[j];

          if (v.equals(vv)) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "hasEdge",
    value: function hasEdge(edge) {
      for (var i = 0; i < 3; i++) {
        var e = this.edges()[i];

        if (e[0].equals(edge[0]) && e[1].equals(edge[1]) || e[1].equals(edge[0]) && e[0].equals(edge[1])) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "circumcenter",
    value: function circumcenter() {
      var d = 2 * (this.a.x * (this.b.y - this.c.y) + this.b.x * (this.c.y - this.a.y) + this.c.x * (this.a.y - this.b.y));
      var x = 1 / d * ((this.a.x * this.a.x + this.a.y * this.a.y) * (this.b.y - this.c.y) + (this.b.x * this.b.x + this.b.y * this.b.y) * (this.c.y - this.a.y) + (this.c.x * this.c.x + this.c.y * this.c.y) * (this.a.y - this.b.y));
      var y = 1 / d * ((this.a.x * this.a.x + this.a.y * this.a.y) * (this.c.x - this.b.x) + (this.b.x * this.b.x + this.b.y * this.b.y) * (this.a.x - this.c.x) + (this.c.x * this.c.x + this.c.y * this.c.y) * (this.b.x - this.a.x));
      return new _Vector.default(x, y);
    }
  }, {
    key: "circumradius",
    value: function circumradius() {
      return this.circumcenter().sub(this.a).getLength();
    }
  }, {
    key: "pointIsInsideCircumcircle",
    value: function pointIsInsideCircumcircle(point) {
      var circumcenter = this.circumcenter();
      var circumradius = circumcenter.sub(this.a).getLength();
      var dist = point.sub(circumcenter).getLength();
      return dist < circumradius;
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = "black";
      ctx.fillStyle = getRandomColor();
      ctx.lineWidth = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.lineTo(this.a.x, this.a.y);
      ctx.lineTo(this.b.x, this.b.y);
      ctx.lineTo(this.c.x, this.c.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke(); // Similar triangles, see link at the top

      var nrOfPoints = Math.round(Math.random() * 9 + 2);
      var points1 = this.getPoints(this.c, this.a, nrOfPoints);
      var points2 = this.getPoints(this.c, this.b, nrOfPoints);

      for (var i = 0; i < nrOfPoints; i++) {
        ctx.beginPath();
        ctx.moveTo(points1[i].x, points1[i].y);
        ctx.lineTo(points2[i].x, points2[i].y);
        ctx.stroke();
      }
    }
  }, {
    key: "getPoints",
    value: function getPoints(p1, p2, nrOfPoints) {
      var points = [];
      var delta = p1.sub(p2).div(nrOfPoints + 1);

      for (var i = 1; i < nrOfPoints + 1; i++) {
        var currentPos = p2.add(delta.mult(i));
        points.push(currentPos);
      }

      return points;
    }
  }]);

  return Triangle;
}();

var canvas;
var ctx;
var w, h;
var colors;
var colorSchemeIndex;

function setup() {
  setupColors();
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  ctx.font = '45px \'Poiret One\'';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  var middleWidth = canvas.width / 2;
  ctx.fillText("TheModern.Farm", middleWidth, h / 22);
  reset();
  window.addEventListener("resize", reset);
  canvas.addEventListener("click", draw);
}

function setupColors() {
  colors = [[// Purples and Pinks
  "#9c89b8", "#f0a6ca", "#efc3e6", "#f0e6ef", "#b8bedd"], [// Blue and Pink Pastel
  "#7bdff2", "#b2f7ef", "#3da79a", "#D291BC", "#f2b5d4"], [// Blues
  "#05668d", "#028090", "#00a896", "#02c39a", "#D991E0"], [// Blues
  "#E0BBE4", "#957DAD", "#5062b6", "#58d7ca", "#D991E0"], ["#9c89b8", // Purple
  "#f0a6ca", // Pink
  "#efc3e6", // Pink
  "#957DAD", // Grey
  "#b8bedd" // Blue
  ]];
}

function getRandomColor() {
  var len = colors[colorSchemeIndex].length;
  var randomIndex = Math.floor(Math.random() * len);
  return colors[colorSchemeIndex][randomIndex];
}

function reset() {
  if (window.innerWidth <= 1920 && window.innerWidth >= 960) {
    w = canvas.width = window.innerWidth / 3;
  }

  if (window.innerWidth < 960 && window.innerWidth > 633) {
    w = canvas.width = window.innerWidth / 2;
  }

  if (window.innerWidth <= 633 && window.innerWidth > 488) {
    w = canvas.width = window.innerWidth / 3 + window.innerWidth / 3;
  }

  if (window.innerWidth <= 488) {
    w = canvas.width = 0;
  }

  h = canvas.height = window.innerHeight;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  draw();
}

function getRandomPoints() {
  var pointList = [];
  var divisor = Math.random() * 5000 + 5000;
  var nrOfPoints = w * h / divisor;

  for (var i = 0; i < nrOfPoints; i++) {
    pointList.push(new _Vector.default( // Keeps the triangles from touching the corners
    Math.random() * w * 0.96 + w * 0.025, Math.random() * h * 0.92 + h * 0.05));
  }

  return pointList;
}

function bowyerWatson(superTriangle, pointList) {
  // pointList is a set of coordinates defining the
  // points to be triangulated
  var triangulation = []; // add super-triangle to triangulation
  // must be large enough to completely contain all
  // the points in pointList

  triangulation.push(superTriangle); // add all the points one at a time to the triangulation

  pointList.forEach(function (point) {
    var badTriangles = []; // first find all the triangles that are no
    // longer valid due to the insertion

    triangulation.forEach(function (triangle) {
      if (triangle.pointIsInsideCircumcircle(point)) {
        badTriangles.push(triangle);
      }
    });
    var polygon = []; // find the boundary of the polygonal hole

    badTriangles.forEach(function (triangle) {
      triangle.edges().forEach(function (edge) {
        var edgeIsShared = false;
        badTriangles.forEach(function (otherTriangle) {
          if (triangle !== otherTriangle && otherTriangle.hasEdge(edge)) {
            edgeIsShared = true;
          }
        });

        if (!edgeIsShared) {
          //edge is not shared by any other
          // triangles in badTriangles
          polygon.push(edge);
        }
      });
    }); // remove them from the data structure

    badTriangles.forEach(function (triangle) {
      var index = triangulation.indexOf(triangle);

      if (index > -1) {
        triangulation.splice(index, 1);
      }
    }); // re-triangulate the polygonal hole

    polygon.forEach(function (edge) {
      //form a triangle from edge to point
      var newTri = new Triangle(edge[0], edge[1], point);
      triangulation.push(newTri);
    });
  }); // done inserting points, now clean up

  var i = triangulation.length;

  while (i--) {
    var triangle = triangulation[i];

    if (triangle.sharesAVertexWith(superTriangle)) {
      //remove triangle from triangulation
      var index = triangulation.indexOf(triangle);

      if (index > -1) {
        triangulation.splice(index, 1);
      }
    }
  }

  return triangulation;
}

function draw() {
  colorSchemeIndex = Math.floor(Math.random() * colors.length);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = getRandomColor();
  var superTriangle = new Triangle(new _Vector.default(-w * 2, h * 10), new _Vector.default(w * 10, h * 2), new _Vector.default(w / 2, -h * 10));
  var pointList = getRandomPoints();
  var triangles = bowyerWatson(superTriangle, pointList);
  triangles.forEach(function (t) {
    return t.draw();
  });
  ctx.font = '45px \'Poiret One\'';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  var middleWidth = canvas.width / 2;
  ctx.fillText("TheModern.Farm", middleWidth, h / 22);
  ctx.fillStyle = getRandomColor();
  console.log(ctx);
}

setup();
},{"./Vector":"js/Vector.js"}],"../../../../../../../home/navi/.nvm/versions/node/v12.12.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63445" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../home/navi/.nvm/versions/node/v12.12.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/triangles.js"], null)
//# sourceMappingURL=/triangles.f91f4387.js.map