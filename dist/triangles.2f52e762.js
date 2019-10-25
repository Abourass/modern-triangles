(function () {
// ASSET: js\Vector.js
function $CKb$var$_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function $CKb$var$_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function $CKb$var$_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) $CKb$var$_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) $CKb$var$_defineProperties(Constructor, staticProps);
  return Constructor;
}

var $CKb$export$default =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    $CKb$var$_classCallCheck(this, Vector);
    this.x = x;
    this.y = y;
  }

  $CKb$var$_createClass(Vector, [{
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
      return this.x === v.x && this.y === v.y;
    }
  }]);
  return Vector;
}();

function $YCp$var$_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function $YCp$var$_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function $YCp$var$_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) $YCp$var$_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) $YCp$var$_defineProperties(Constructor, staticProps);
  return Constructor;
}

var $YCp$var$Triangle =
/*#__PURE__*/
function () {
  function Triangle(a, b, c) {
    $YCp$var$_classCallCheck(this, Triangle);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  $YCp$var$_createClass(Triangle, [{
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
      return new $CKb$export$default(x, y);
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
      $YCp$var$ctx.strokeStyle = "black";
      $YCp$var$ctx.fillStyle = $YCp$var$getRandomColor();
      $YCp$var$ctx.lineWidth = Math.random() * 3 + 1;
      $YCp$var$ctx.beginPath();
      $YCp$var$ctx.lineTo(this.a.x, this.a.y);
      $YCp$var$ctx.lineTo(this.b.x, this.b.y);
      $YCp$var$ctx.lineTo(this.c.x, this.c.y);
      $YCp$var$ctx.closePath();
      $YCp$var$ctx.fill();
      $YCp$var$ctx.stroke(); // Similar triangles, see link at the top

      var nrOfPoints = Math.round(Math.random() * 9 + 2);
      var points1 = this.getPoints(this.c, this.a, nrOfPoints);
      var points2 = this.getPoints(this.c, this.b, nrOfPoints);

      for (var i = 0; i < nrOfPoints; i++) {
        $YCp$var$ctx.beginPath();
        $YCp$var$ctx.moveTo(points1[i].x, points1[i].y);
        $YCp$var$ctx.lineTo(points2[i].x, points2[i].y);
        $YCp$var$ctx.stroke();
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

var $YCp$var$canvas;
var $YCp$var$ctx;
var $YCp$var$w, $YCp$var$h;
var $YCp$var$colors;
var $YCp$var$colorSchemeIndex;

function $YCp$var$setup() {
  $YCp$var$setupColors();
  $YCp$var$canvas = document.querySelector("#canvas");
  $YCp$var$ctx = $YCp$var$canvas.getContext("2d");
  $YCp$var$ctx.font = '45px \'Poiret One\'';
  $YCp$var$ctx.textAlign = 'center';
  $YCp$var$ctx.fillStyle = 'black';
  var middleWidth = $YCp$var$canvas.width / 2;
  $YCp$var$ctx.fillText("TheModern.Farm", middleWidth, $YCp$var$h / 22);
  $YCp$var$reset();
  window.addEventListener("resize", $YCp$var$reset);
  $YCp$var$canvas.addEventListener("click", $YCp$var$draw);
}

function $YCp$var$setupColors() {
  $YCp$var$colors = [[// Purples and Pinks
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

function $YCp$var$getRandomColor() {
  var len = $YCp$var$colors[$YCp$var$colorSchemeIndex].length;
  var randomIndex = Math.floor(Math.random() * len);
  return $YCp$var$colors[$YCp$var$colorSchemeIndex][randomIndex];
}

function $YCp$var$reset() {
  if (window.innerWidth <= 1920 && window.innerWidth >= 960) {
    $YCp$var$w = $YCp$var$canvas.width = window.innerWidth / 3;
  }

  if (window.innerWidth < 960 && window.innerWidth > 633) {
    $YCp$var$w = $YCp$var$canvas.width = window.innerWidth / 2;
  }

  if (window.innerWidth <= 633 && window.innerWidth > 488) {
    $YCp$var$w = $YCp$var$canvas.width = window.innerWidth / 3 + window.innerWidth / 3;
  }

  if (window.innerWidth <= 488) {
    $YCp$var$w = $YCp$var$canvas.width = 0;
  }

  $YCp$var$h = $YCp$var$canvas.height = window.innerHeight;
  $YCp$var$ctx.lineCap = "round";
  $YCp$var$ctx.lineJoin = "round";
  $YCp$var$draw();
}

function $YCp$var$getRandomPoints() {
  var pointList = [];
  var divisor = Math.random() * 5000 + 5000;
  var nrOfPoints = $YCp$var$w * $YCp$var$h / divisor;

  for (var i = 0; i < nrOfPoints; i++) {
    pointList.push(new $CKb$export$default( // Keeps the triangles from touching the corners
    Math.random() * $YCp$var$w * 0.96 + $YCp$var$w * 0.025, Math.random() * $YCp$var$h * 0.92 + $YCp$var$h * 0.05));
  }

  return pointList;
}

function $YCp$var$bowyerWatson(superTriangle, pointList) {
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
      var newTri = new $YCp$var$Triangle(edge[0], edge[1], point);
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

function $YCp$var$draw() {
  $YCp$var$colorSchemeIndex = Math.floor(Math.random() * $YCp$var$colors.length);
  $YCp$var$ctx.fillStyle = "white";
  $YCp$var$ctx.fillRect(0, 0, $YCp$var$w, $YCp$var$h);
  $YCp$var$ctx.fillStyle = $YCp$var$getRandomColor();
  var superTriangle = new $YCp$var$Triangle(new $CKb$export$default(-$YCp$var$w * 2, $YCp$var$h * 10), new $CKb$export$default($YCp$var$w * 10, $YCp$var$h * 2), new $CKb$export$default($YCp$var$w / 2, -$YCp$var$h * 10));
  var pointList = $YCp$var$getRandomPoints();
  var triangles = $YCp$var$bowyerWatson(superTriangle, pointList);
  triangles.forEach(function (t) {
    return t.draw();
  });
  $YCp$var$ctx.font = '45px \'Poiret One\'';
  $YCp$var$ctx.textAlign = 'center';
  $YCp$var$ctx.fillStyle = 'black';
  var middleWidth = $YCp$var$canvas.width / 2;
  $YCp$var$ctx.fillText("TheModern.Farm", middleWidth, $YCp$var$h / 22);
  $YCp$var$ctx.fillStyle = $YCp$var$getRandomColor();
  console.log($YCp$var$ctx);
}

$YCp$var$setup();
})();