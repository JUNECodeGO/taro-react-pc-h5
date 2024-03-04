/** @format */

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).echarts =
          {})
      );
})(this, function (t) {
  'use strict';
  var _ = function (t, e) {
    return (_ =
      Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array
        ? function (t, e) {
            t.__proto__ = e;
          }
        : function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          }))(t, e);
  };
  function u(t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError(
        'Class extends value ' + String(e) + ' is not a constructor or null'
      );
    function n() {
      this.constructor = t;
    }
    _(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  var x = function () {
      (this.firefox = !1),
        (this.ie = !1),
        (this.edge = !1),
        (this.newEdge = !1),
        (this.weChat = !1);
    },
    b = new (function () {
      (this.browser = new x()),
        (this.node = !1),
        (this.wxa = !1),
        (this.worker = !1),
        (this.svgSupported = !1),
        (this.touchEventsSupported = !1),
        (this.pointerEventsSupported = !1),
        (this.domSupported = !1),
        (this.transformSupported = !1),
        (this.transform3dSupported = !1),
        (this.hasGlobalWindow = 'undefined' != typeof window);
    })();
  'object' == typeof wx && 'function' == typeof wx.getSystemInfoSync
    ? ((b.wxa = !0), (b.touchEventsSupported = !0))
    : 'undefined' == typeof document && 'undefined' != typeof self
    ? (b.worker = !0)
    : 'undefined' == typeof navigator ||
      0 === navigator.userAgent.indexOf('Node.js')
    ? ((b.node = !0), (b.svgSupported = !0))
    : ((J = navigator.userAgent),
      (re = (Ht = b).browser),
      (rt = J.match(/Firefox\/([\d.]+)/)),
      (U = J.match(/MSIE\s([\d.]+)/) || J.match(/Trident\/.+?rv:(([\d.]+))/)),
      (Q = J.match(/Edge?\/([\d.]+)/)),
      (J = /micromessenger/i.test(J)),
      rt && ((re.firefox = !0), (re.version = rt[1])),
      U && ((re.ie = !0), (re.version = U[1])),
      Q &&
        ((re.edge = !0),
        (re.version = Q[1]),
        (re.newEdge = 18 < +Q[1].split('.')[0])),
      J && (re.weChat = !0),
      (Ht.svgSupported = 'undefined' != typeof SVGRect),
      (Ht.touchEventsSupported =
        'ontouchstart' in window && !re.ie && !re.edge),
      (Ht.pointerEventsSupported =
        'onpointerdown' in window && (re.edge || (re.ie && 11 <= +re.version))),
      (Ht.domSupported = 'undefined' != typeof document),
      (rt = document.documentElement.style),
      (Ht.transform3dSupported =
        ((re.ie && 'transition' in rt) ||
          re.edge ||
          ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) ||
          'MozPerspective' in rt) &&
        !('OTransition' in rt)),
      (Ht.transformSupported =
        Ht.transform3dSupported || (re.ie && 9 <= +re.version)));
  var j = '12px sans-serif';
  var w,
    M,
    T = (function (t) {
      var e = {};
      if ('undefined' != typeof JSON)
        for (var n = 0; n < t.length; n++) {
          var i = String.fromCharCode(n + 32),
            r = (t.charCodeAt(n) - 20) / 100;
          e[i] = r;
        }
      return e;
    })(
      "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N"
    ),
    W = {
      createCanvas: function () {
        return (
          'undefined' != typeof document && document.createElement('canvas')
        );
      },
      measureText: function (t, e) {
        if ((w || ((n = W.createCanvas()), (w = n && n.getContext('2d'))), w))
          return M !== e && (M = w.font = e || j), w.measureText(t);
        (t = t || ''), (e = e || j);
        var n = /(\d+)px/.exec(e),
          i = (n && +n[1]) || 12,
          r = 0;
        if (0 <= e.indexOf('mono')) r = i * t.length;
        else
          for (var o = 0; o < t.length; o++) {
            var a = T[t[o]];
            r += null == a ? i : a * i;
          }
        return {width: r};
      },
      loadImage: function (t, e, n) {
        var i = new Image();
        return (i.onload = e), (i.onerror = n), (i.src = t), i;
      },
    };
  function C(t) {
    for (var e in W) t[e] && (W[e] = t[e]);
  }
  var A = lt(
      [
        'Function',
        'RegExp',
        'Date',
        'Error',
        'CanvasGradient',
        'CanvasPattern',
        'Image',
        'Canvas',
      ],
      function (t, e) {
        return (t['[object ' + e + ']'] = !0), t;
      },
      {}
    ),
    P = lt(
      [
        'Int8',
        'Uint8',
        'Uint8Clamped',
        'Int16',
        'Uint16',
        'Int32',
        'Uint32',
        'Float32',
        'Float64',
      ],
      function (t, e) {
        return (t['[object ' + e + 'Array]'] = !0), t;
      },
      {}
    ),
    G = Object.prototype.toString,
    U = Array.prototype,
    X = U.forEach,
    q = U.filter,
    K = U.slice,
    $ = U.map,
    Q = function () {}.constructor,
    J = Q ? Q.prototype : null,
    tt = '__proto__',
    et = 2311;
  function nt() {
    return et++;
  }
  function it() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    'undefined' != typeof console && console.error.apply(console, t);
  }
  function y(t) {
    if (null == t || 'object' != typeof t) return t;
    var e = t,
      n = G.call(t);
    if ('[object Array]' === n) {
      if (!kt(t))
        for (var e = [], i = 0, r = t.length; i < r; i++) e[i] = y(t[i]);
    } else if (P[n]) {
      if (!kt(t)) {
        var o = t.constructor;
        if (o.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (i = 0, r = t.length; i < r; i++) e[i] = t[i];
        }
      }
    } else if (!A[n] && !kt(t) && !yt(t))
      for (var a in ((e = {}), t))
        t.hasOwnProperty(a) && a !== tt && (e[a] = y(t[a]));
    return e;
  }
  function d(t, e, n) {
    if (!O(e) || !O(t)) return n ? y(e) : t;
    for (var i in e) {
      var r, o;
      e.hasOwnProperty(i) &&
        i !== tt &&
        ((r = t[i]),
        !O((o = e[i])) ||
        !O(r) ||
        F(o) ||
        F(r) ||
        yt(o) ||
        yt(r) ||
        ft(o) ||
        ft(r) ||
        kt(o) ||
        kt(r)
          ? (!n && i in t) || (t[i] = y(e[i]))
          : d(r, o, n));
    }
    return t;
  }
  function L(t, e) {
    if (Object.assign) Object.assign(t, e);
    else for (var n in e) e.hasOwnProperty(n) && n !== tt && (t[n] = e[n]);
    return t;
  }
  function E(t, e, n) {
    for (var i = ht(e), r = 0; r < i.length; r++) {
      var o = i[r];
      (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
    }
    return t;
  }
  var rt = W.createCanvas;
  function I(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
    }
    return -1;
  }
  function ot(t, e) {
    var n,
      i = t.prototype;
    function r() {}
    for (n in ((r.prototype = e.prototype), (t.prototype = new r()), i))
      i.hasOwnProperty(n) && (t.prototype[n] = i[n]);
    (t.prototype.constructor = t).superClass = e;
  }
  function at(t, e, n) {
    if (
      ((t = 'prototype' in t ? t.prototype : t),
      (e = 'prototype' in e ? e.prototype : e),
      Object.getOwnPropertyNames)
    )
      for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
        var o = i[r];
        'constructor' !== o &&
          (n ? null != e[o] : null == t[o]) &&
          (t[o] = e[o]);
      }
    else E(t, e, n);
  }
  function st(t) {
    return !!t && 'string' != typeof t && 'number' == typeof t.length;
  }
  function z(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === X) t.forEach(e, n);
      else if (t.length === +t.length)
        for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t);
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
  }
  function N(t, e, n) {
    if (!t) return [];
    if (!e) return St(t);
    if (t.map && t.map === $) return t.map(e, n);
    for (var i = [], r = 0, o = t.length; r < o; r++)
      i.push(e.call(n, t[r], r, t));
    return i;
  }
  function lt(t, e, n, i) {
    if (t && e) {
      for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t);
      return n;
    }
  }
  function ut(t, e, n) {
    if (!t) return [];
    if (!e) return St(t);
    if (t.filter && t.filter === q) return t.filter(e, n);
    for (var i = [], r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t) && i.push(t[r]);
    return i;
  }
  function ht(t) {
    if (!t) return [];
    if (Object.keys) return Object.keys(t);
    var e,
      n = [];
    for (e in t) t.hasOwnProperty(e) && n.push(e);
    return n;
  }
  var S =
    J && D(J.bind)
      ? J.call.bind(J.bind)
      : function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          return function () {
            return t.apply(e, n.concat(K.call(arguments)));
          };
        };
  function ct(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return function () {
      return t.apply(this, e.concat(K.call(arguments)));
    };
  }
  function F(t) {
    return Array.isArray ? Array.isArray(t) : '[object Array]' === G.call(t);
  }
  function D(t) {
    return 'function' == typeof t;
  }
  function V(t) {
    return 'string' == typeof t;
  }
  function pt(t) {
    return '[object String]' === G.call(t);
  }
  function dt(t) {
    return 'number' == typeof t;
  }
  function O(t) {
    var e = typeof t;
    return 'function' == e || (!!t && 'object' == e);
  }
  function ft(t) {
    return !!A[G.call(t)];
  }
  function gt(t) {
    return !!P[G.call(t)];
  }
  function yt(t) {
    return (
      'object' == typeof t &&
      'number' == typeof t.nodeType &&
      'object' == typeof t.ownerDocument
    );
  }
  function mt(t) {
    return null != t.colorStops;
  }
  function vt(t) {
    return null != t.image;
  }
  function _t(t) {
    return '[object RegExp]' === G.call(t);
  }
  function xt(t) {
    return t != t;
  }
  function wt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n];
  }
  function R(t, e) {
    return null != t ? t : e;
  }
  function bt(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }
  function St(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return K.apply(t, e);
  }
  function Mt(t) {
    var e;
    return 'number' == typeof t
      ? [t, t, t, t]
      : 2 === (e = t.length)
      ? [t[0], t[1], t[0], t[1]]
      : 3 === e
      ? [t[0], t[1], t[2], t[1]]
      : t;
  }
  function Tt(t, e) {
    if (!t) throw new Error(e);
  }
  function Ct(t) {
    return null == t
      ? null
      : 'function' == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
  var It = '__ec_primitive__';
  function Dt(t) {
    t[It] = !0;
  }
  function kt(t) {
    return t[It];
  }
  (Pt.prototype.delete = function (t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }),
    (Pt.prototype.has = function (t) {
      return this.data.hasOwnProperty(t);
    }),
    (Pt.prototype.get = function (t) {
      return this.data[t];
    }),
    (Pt.prototype.set = function (t, e) {
      return (this.data[t] = e), this;
    }),
    (Pt.prototype.keys = function () {
      return ht(this.data);
    }),
    (Pt.prototype.forEach = function (t) {
      var e,
        n = this.data;
      for (e in n) n.hasOwnProperty(e) && t(n[e], e);
    });
  var At = Pt;
  function Pt() {
    this.data = {};
  }
  var Lt = 'function' == typeof Map;
  (Rt.prototype.hasKey = function (t) {
    return this.data.has(t);
  }),
    (Rt.prototype.get = function (t) {
      return this.data.get(t);
    }),
    (Rt.prototype.set = function (t, e) {
      return this.data.set(t, e), e;
    }),
    (Rt.prototype.each = function (n, i) {
      this.data.forEach(function (t, e) {
        n.call(i, t, e);
      });
    }),
    (Rt.prototype.keys = function () {
      var t = this.data.keys();
      return Lt ? Array.from(t) : t;
    }),
    (Rt.prototype.removeKey = function (t) {
      this.data.delete(t);
    });
  var Ot = Rt;
  function Rt(t) {
    var n = F(t),
      i = ((this.data = new (Lt ? Map : At)()), this);
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }
    t instanceof Rt ? t.each(e) : t && z(t, e);
  }
  function B(t) {
    return new Ot(t);
  }
  function Bt(t, e) {
    for (
      var n = new t.constructor(t.length + e.length), i = 0;
      i < t.length;
      i++
    )
      n[i] = t[i];
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
    return n;
  }
  function zt(t, e) {
    var n,
      t = Object.create
        ? Object.create(t)
        : (((n = function () {}).prototype = t), new n());
    return e && L(t, e), t;
  }
  function Et(t) {
    t = t.style;
    (t.webkitUserSelect = 'none'),
      (t.userSelect = 'none'),
      (t.webkitTapHighlightColor = 'rgba(0,0,0,0)'),
      (t['-webkit-touch-callout'] = 'none');
  }
  function Nt(t, e) {
    return t.hasOwnProperty(e);
  }
  function Ft() {}
  var Vt = 180 / Math.PI,
    Ht = Object.freeze({
      __proto__: null,
      HashMap: Ot,
      RADIAN_TO_DEGREE: Vt,
      assert: Tt,
      bind: S,
      clone: y,
      concatArray: Bt,
      createCanvas: rt,
      createHashMap: B,
      createObject: zt,
      curry: ct,
      defaults: E,
      disableUserSelect: Et,
      each: z,
      eqNaN: xt,
      extend: L,
      filter: ut,
      find: function (t, e, n) {
        if (t && e)
          for (var i = 0, r = t.length; i < r; i++)
            if (e.call(n, t[i], i, t)) return t[i];
      },
      guid: nt,
      hasOwn: Nt,
      indexOf: I,
      inherits: ot,
      isArray: F,
      isArrayLike: st,
      isBuiltInObject: ft,
      isDom: yt,
      isFunction: D,
      isGradientObject: mt,
      isImagePatternObject: vt,
      isNumber: dt,
      isObject: O,
      isPrimitive: kt,
      isRegExp: _t,
      isString: V,
      isStringSafe: pt,
      isTypedArray: gt,
      keys: ht,
      logError: it,
      map: N,
      merge: d,
      mergeAll: function (t, e) {
        for (var n = t[0], i = 1, r = t.length; i < r; i++) n = d(n, t[i], e);
        return n;
      },
      mixin: at,
      noop: Ft,
      normalizeCssArray: Mt,
      reduce: lt,
      retrieve: wt,
      retrieve2: R,
      retrieve3: bt,
      setAsPrimitive: Dt,
      slice: St,
      trim: Ct,
    });
  function Wt(t, e) {
    return [(t = null == t ? 0 : t), (e = null == e ? 0 : e)];
  }
  function Gt(t) {
    return [t[0], t[1]];
  }
  function Ut(t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
  }
  function Zt(t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
  }
  function Yt(t) {
    return Math.sqrt(Xt(t));
  }
  function Xt(t) {
    return t[0] * t[0] + t[1] * t[1];
  }
  function qt(t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
  }
  function jt(t, e) {
    var n = Yt(e);
    return (
      0 === n
        ? ((t[0] = 0), (t[1] = 0))
        : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
      t
    );
  }
  function Kt(t, e) {
    return Math.sqrt(
      (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    );
  }
  var $t = Kt;
  function Qt(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }
  var Jt = Qt;
  function te(t, e, n, i) {
    return (
      (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t
    );
  }
  function ee(t, e, n) {
    var i = e[0],
      e = e[1];
    return (
      (t[0] = n[0] * i + n[2] * e + n[4]),
      (t[1] = n[1] * i + n[3] * e + n[5]),
      t
    );
  }
  function ne(t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
  }
  function ie(t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
  }
  var re = Object.freeze({
      __proto__: null,
      add: Ut,
      applyTransform: ee,
      clone: Gt,
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      },
      create: Wt,
      dist: $t,
      distSquare: Jt,
      distance: Kt,
      distanceSquare: Qt,
      div: function (t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      },
      dot: function (t, e) {
        return t[0] * e[0] + t[1] * e[1];
      },
      len: Yt,
      lenSquare: Xt,
      length: Yt,
      lengthSquare: Xt,
      lerp: te,
      max: ie,
      min: ne,
      mul: function (t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      },
      negate: function (t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      },
      normalize: jt,
      scale: qt,
      scaleAndAdd: function (t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t;
      },
      set: function (t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      },
      sub: Zt,
    }),
    oe = function (t, e) {
      (this.target = t), (this.topTarget = e && e.topTarget);
    },
    ae =
      ((se.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget;
        e &&
          (((this._draggingTarget = e).dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new oe(e, t), 'dragstart', t.event));
      }),
      (se.prototype._drag = function (t) {
        var e,
          n,
          i,
          r,
          o = this._draggingTarget;
        o &&
          ((e = t.offsetX),
          (n = t.offsetY),
          (i = e - this._x),
          (r = n - this._y),
          (this._x = e),
          (this._y = n),
          o.drift(i, r, t),
          this.handler.dispatchToElement(new oe(o, t), 'drag', t.event),
          (i = this.handler.findHover(e, n, o).target),
          (r = this._dropTarget),
          o !== (this._dropTarget = i)) &&
          (r &&
            i !== r &&
            this.handler.dispatchToElement(new oe(r, t), 'dragleave', t.event),
          i) &&
          i !== r &&
          this.handler.dispatchToElement(new oe(i, t), 'dragenter', t.event);
      }),
      (se.prototype._dragEnd = function (t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new oe(e, t), 'dragend', t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new oe(this._dropTarget, t),
              'drop',
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null);
      }),
      se);
  function se(t) {
    (this.handler = t).on('mousedown', this._dragStart, this),
      t.on('mousemove', this._drag, this),
      t.on('mouseup', this._dragEnd, this);
  }
  (ue.prototype.on = function (t, e, n, i) {
    this._$handlers || (this._$handlers = {});
    var r = this._$handlers;
    if (('function' == typeof e && ((i = n), (n = e), (e = null)), n && t)) {
      var o = this._$eventProcessor;
      null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
        r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
      (o = {
        h: n,
        query: e,
        ctx: i || this,
        callAtLast: n.zrEventfulCallAtLast,
      }),
        (e = r[t].length - 1),
        (i = r[t][e]);
      i && i.callAtLast ? r[t].splice(e, 0, o) : r[t].push(o);
    }
    return this;
  }),
    (ue.prototype.isSilent = function (t) {
      var e = this._$handlers;
      return !e || !e[t] || !e[t].length;
    }),
    (ue.prototype.off = function (t, e) {
      var n = this._$handlers;
      if (n)
        if (t)
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, o = n[t].length; r < o; r++)
                n[t][r].h !== e && i.push(n[t][r]);
              n[t] = i;
            }
            n[t] && 0 === n[t].length && delete n[t];
          } else delete n[t];
        else this._$handlers = {};
      return this;
    }),
    (ue.prototype.trigger = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (var o = e.length, a = i.length, s = 0; s < a; s++) {
            var l = i[s];
            if (!r || !r.filter || null == l.query || r.filter(t, l.query))
              switch (o) {
                case 0:
                  l.h.call(l.ctx);
                  break;
                case 1:
                  l.h.call(l.ctx, e[0]);
                  break;
                case 2:
                  l.h.call(l.ctx, e[0], e[1]);
                  break;
                default:
                  l.h.apply(l.ctx, e);
              }
          }
        r && r.afterTrigger && r.afterTrigger(t);
      }
      return this;
    }),
    (ue.prototype.triggerWithContext = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (
            var o = e.length, a = e[o - 1], s = i.length, l = 0;
            l < s;
            l++
          ) {
            var u = i[l];
            if (!r || !r.filter || null == u.query || r.filter(t, u.query))
              switch (o) {
                case 0:
                  u.h.call(a);
                  break;
                case 1:
                  u.h.call(a, e[0]);
                  break;
                case 2:
                  u.h.call(a, e[0], e[1]);
                  break;
                default:
                  u.h.apply(a, e.slice(1, o - 1));
              }
          }
        r && r.afterTrigger && r.afterTrigger(t);
      }
      return this;
    });
  var le = ue;
  function ue(t) {
    t && (this._$eventProcessor = t);
  }
  var he = Math.log(2);
  function ce(t, e, n, i, r, o) {
    var a,
      s = i + '-' + r,
      l = t.length;
    if (o.hasOwnProperty(s)) return o[s];
    if (1 === e)
      return (a = Math.round(Math.log(((1 << l) - 1) & ~r) / he)), t[n][a];
    for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++;
    for (var c = 0, p = 0, d = 0; p < l; p++) {
      var f = 1 << p;
      f & r ||
        ((c += (d % 2 ? -1 : 1) * t[n][p] * ce(t, e - 1, h, u, r | f, o)), d++);
    }
    return (o[s] = c);
  }
  function pe(t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
      ],
      i = {},
      r = ce(n, 8, 0, 0, 0, i);
    if (0 !== r) {
      for (var o = [], a = 0; a < 8; a++)
        for (var s = 0; s < 8; s++)
          null == o[s] && (o[s] = 0),
            (o[s] +=
              ((((a + s) % 2 ? -1 : 1) *
                ce(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) /
                r) *
              e[a]);
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1;
        (t[0] = (e * o[0] + n * o[1] + o[2]) / i),
          (t[1] = (e * o[3] + n * o[4] + o[5]) / i);
      };
    }
  }
  var de = '___zrEVENTSAVED',
    fe = [];
  function ge(t, e, n, i, r) {
    if (e.getBoundingClientRect && b.domSupported && !ye(e)) {
      var o = e[de] || (e[de] = {}),
        e = (function (t, e, n) {
          for (
            var i = n ? 'invTrans' : 'trans',
              r = e[i],
              o = e.srcCoords,
              a = [],
              s = [],
              l = !0,
              u = 0;
            u < 4;
            u++
          ) {
            var h = t[u].getBoundingClientRect(),
              c = 2 * u,
              p = h.left,
              h = h.top;
            a.push(p, h),
              (l = l && o && p === o[c] && h === o[1 + c]),
              s.push(t[u].offsetLeft, t[u].offsetTop);
          }
          return l && r
            ? r
            : ((e.srcCoords = a), (e[i] = n ? pe(s, a) : pe(a, s)));
        })(
          (function (t, e) {
            var n = e.markers;
            if (!n) {
              n = e.markers = [];
              for (
                var i = ['left', 'right'], r = ['top', 'bottom'], o = 0;
                o < 4;
                o++
              ) {
                var a = document.createElement('div'),
                  s = a.style,
                  l = o % 2,
                  u = (o >> 1) % 2;
                (s.cssText = [
                  'position: absolute',
                  'visibility: hidden',
                  'padding: 0',
                  'margin: 0',
                  'border-width: 0',
                  'user-select: none',
                  'width:0',
                  'height:0',
                  i[l] + ':0',
                  r[u] + ':0',
                  i[1 - l] + ':auto',
                  r[1 - u] + ':auto',
                  '',
                ].join('!important;')),
                  t.appendChild(a),
                  n.push(a);
              }
            }
            return n;
          })(e, o),
          o,
          r
        );
      if (e) return e(t, n, i), !0;
    }
    return !1;
  }
  function ye(t) {
    return 'CANVAS' === t.nodeName.toUpperCase();
  }
  var me = /([&<>"'])/g,
    ve = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  function _e(t) {
    return null == t
      ? ''
      : (t + '').replace(me, function (t, e) {
          return ve[e];
        });
  }
  var xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = [],
    be = b.browser.firefox && +b.browser.version.split('.')[0] < 39;
  function Se(t, e, n, i) {
    return (
      (n = n || {}),
      i
        ? Me(t, e, n)
        : be && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Me(t, e, n),
      n
    );
  }
  function Me(t, e, n) {
    if (b.domSupported && t.getBoundingClientRect) {
      var i,
        r = e.clientX,
        e = e.clientY;
      if (ye(t))
        return (
          (i = t.getBoundingClientRect()),
          (n.zrX = r - i.left),
          void (n.zrY = e - i.top)
        );
      if (ge(we, t, r, e)) return (n.zrX = we[0]), void (n.zrY = we[1]);
    }
    n.zrX = n.zrY = 0;
  }
  function Te(t) {
    return t || window.event;
  }
  function Ce(t, e, n) {
    var i;
    return (
      null == (e = Te(e)).zrX &&
        ((i = e.type) && 0 <= i.indexOf('touch')
          ? (i = ('touchend' !== i ? e.targetTouches : e.changedTouches)[0]) &&
            Se(t, i, e, n)
          : (Se(t, e, e, n),
            (i = (function (t) {
              var e = t.wheelDelta;
              if (e) return e;
              var n = t.deltaX,
                t = t.deltaY;
              return null != n && null != t
                ? 3 *
                    (0 !== t ? Math.abs(t) : Math.abs(n)) *
                    (0 < t || (!(t < 0) && 0 < n) ? -1 : 1)
                : e;
            })(e)),
            (e.zrDelta = i ? i / 120 : -(e.detail || 0) / 3)),
        (t = e.button),
        null == e.which && void 0 !== t && xe.test(e.type)) &&
        (e.which = 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0),
      e
    );
  }
  var Ie = function (t) {
    t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
  };
  function De(t) {
    return 2 === t.which || 3 === t.which;
  }
  (Ae.prototype.recognize = function (t, e, n) {
    return this._doTrack(t, e, n), this._recognize(t);
  }),
    (Ae.prototype.clear = function () {
      return (this._track.length = 0), this;
    }),
    (Ae.prototype._doTrack = function (t, e, n) {
      var i = t.touches;
      if (i) {
        for (
          var r = {points: [], touches: [], target: e, event: t},
            o = 0,
            a = i.length;
          o < a;
          o++
        ) {
          var s = i[o],
            l = Se(n, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }
        this._track.push(r);
      }
    }),
    (Ae.prototype._recognize = function (t) {
      for (var e in Le)
        if (Le.hasOwnProperty(e)) {
          e = Le[e](this._track, t);
          if (e) return e;
        }
    });
  var ke = Ae;
  function Ae() {
    this._track = [];
  }
  function Pe(t) {
    var e = t[1][0] - t[0][0],
      t = t[1][1] - t[0][1];
    return Math.sqrt(e * e + t * t);
  }
  var Le = {
    pinch: function (t, e) {
      var n,
        i = t.length;
      if (i)
        return (
          (n = (t[i - 1] || {}).points),
          (i = (t[i - 2] || {}).points || n) &&
          1 < i.length &&
          n &&
          1 < n.length
            ? ((i = Pe(n) / Pe(i)),
              isFinite(i) || (i = 1),
              (e.pinchScale = i),
              (i = [(n[0][0] + n[1][0]) / 2, (n[0][1] + n[1][1]) / 2]),
              (e.pinchX = i[0]),
              (e.pinchY = i[1]),
              {type: 'pinch', target: t[0].target, event: e})
            : void 0
        );
    },
  };
  function Oe() {
    return [1, 0, 0, 1, 0, 0];
  }
  function Re(t) {
    return (
      (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
    );
  }
  function Be(t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4]),
      (t[5] = e[5]),
      t
    );
  }
  function ze(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      n = e[1] * n[4] + e[3] * n[5] + e[5];
    return (
      (t[0] = i), (t[1] = r), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = n), t
    );
  }
  function Ee(t, e, n) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4] + n[0]),
      (t[5] = e[5] + n[1]),
      t
    );
  }
  function Ne(t, e, n, i) {
    void 0 === i && (i = [0, 0]);
    var r = e[0],
      o = e[2],
      a = e[4],
      s = e[1],
      l = e[3],
      e = e[5],
      u = Math.sin(n),
      n = Math.cos(n);
    return (
      (t[0] = r * n + s * u),
      (t[1] = -r * u + s * n),
      (t[2] = o * n + l * u),
      (t[3] = -o * u + n * l),
      (t[4] = n * (a - i[0]) + u * (e - i[1]) + i[0]),
      (t[5] = n * (e - i[1]) - u * (a - i[0]) + i[1]),
      t
    );
  }
  function Fe(t, e, n) {
    var i = n[0],
      n = n[1];
    return (
      (t[0] = e[0] * i),
      (t[1] = e[1] * n),
      (t[2] = e[2] * i),
      (t[3] = e[3] * n),
      (t[4] = e[4] * i),
      (t[5] = e[5] * n),
      t
    );
  }
  function Ve(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      o = e[1],
      a = e[3],
      e = e[5],
      s = n * a - o * i;
    return s
      ? ((t[0] = a * (s = 1 / s)),
        (t[1] = -o * s),
        (t[2] = -i * s),
        (t[3] = n * s),
        (t[4] = (i * e - a * r) * s),
        (t[5] = (o * r - n * e) * s),
        t)
      : null;
  }
  var He = Object.freeze({
      __proto__: null,
      clone: function (t) {
        var e = Oe();
        return Be(e, t), e;
      },
      copy: Be,
      create: Oe,
      identity: Re,
      invert: Ve,
      mul: ze,
      rotate: Ne,
      scale: Fe,
      translate: Ee,
    }),
    H =
      ((e.prototype.copy = function (t) {
        return (this.x = t.x), (this.y = t.y), this;
      }),
      (e.prototype.clone = function () {
        return new e(this.x, this.y);
      }),
      (e.prototype.set = function (t, e) {
        return (this.x = t), (this.y = e), this;
      }),
      (e.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y;
      }),
      (e.prototype.add = function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      }),
      (e.prototype.scale = function (t) {
        (this.x *= t), (this.y *= t);
      }),
      (e.prototype.scaleAndAdd = function (t, e) {
        (this.x += t.x * e), (this.y += t.y * e);
      }),
      (e.prototype.sub = function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      }),
      (e.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y;
      }),
      (e.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }),
      (e.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y;
      }),
      (e.prototype.normalize = function () {
        var t = this.len();
        return (this.x /= t), (this.y /= t), this;
      }),
      (e.prototype.distance = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y;
        return Math.sqrt(e * e + t * t);
      }),
      (e.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y;
        return e * e + t * t;
      }),
      (e.prototype.negate = function () {
        return (this.x = -this.x), (this.y = -this.y), this;
      }),
      (e.prototype.transform = function (t) {
        var e, n;
        if (t)
          return (
            (e = this.x),
            (n = this.y),
            (this.x = t[0] * e + t[2] * n + t[4]),
            (this.y = t[1] * e + t[3] * n + t[5]),
            this
          );
      }),
      (e.prototype.toArray = function (t) {
        return (t[0] = this.x), (t[1] = this.y), t;
      }),
      (e.prototype.fromArray = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (e.set = function (t, e, n) {
        (t.x = e), (t.y = n);
      }),
      (e.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y);
      }),
      (e.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      }),
      (e.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y;
      }),
      (e.dot = function (t, e) {
        return t.x * e.x + t.y * e.y;
      }),
      (e.add = function (t, e, n) {
        (t.x = e.x + n.x), (t.y = e.y + n.y);
      }),
      (e.sub = function (t, e, n) {
        (t.x = e.x - n.x), (t.y = e.y - n.y);
      }),
      (e.scale = function (t, e, n) {
        (t.x = e.x * n), (t.y = e.y * n);
      }),
      (e.scaleAndAdd = function (t, e, n, i) {
        (t.x = e.x + n.x * i), (t.y = e.y + n.y * i);
      }),
      (e.lerp = function (t, e, n, i) {
        var r = 1 - i;
        (t.x = r * e.x + i * n.x), (t.y = r * e.y + i * n.y);
      }),
      e);
  function e(t, e) {
    (this.x = t || 0), (this.y = e || 0);
  }
  var We = Math.min,
    Ge = Math.max,
    Ue = new H(),
    Ze = new H(),
    Ye = new H(),
    Xe = new H(),
    qe = new H(),
    je = new H(),
    Z =
      ((Ke.prototype.union = function (t) {
        var e = We(t.x, this.x),
          n = We(t.y, this.y);
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Ge(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Ge(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n);
      }),
      (Ke.prototype.applyTransform = function (t) {
        Ke.applyTransform(this, this, t);
      }),
      (Ke.prototype.calculateTransform = function (t) {
        var e = t.width / this.width,
          n = t.height / this.height,
          i = Oe();
        return (
          Ee(i, i, [-this.x, -this.y]),
          Fe(i, i, [e, n]),
          Ee(i, i, [t.x, t.y]),
          i
        );
      }),
      (Ke.prototype.intersect = function (t, e) {
        if (!t) return !1;
        t instanceof Ke || (t = Ke.create(t));
        var n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h = this,
          c = h.x,
          p = h.x + h.width,
          d = h.y,
          h = h.y + h.height,
          f = t.x,
          g = t.x + t.width,
          y = t.y,
          t = t.y + t.height,
          m = !(p < f || g < c || h < y || t < d);
        return (
          e &&
            ((n = 1 / 0),
            (i = 0),
            (r = Math.abs(p - f)),
            (o = Math.abs(g - c)),
            (a = Math.abs(h - y)),
            (s = Math.abs(t - d)),
            (l = Math.min(r, o)),
            (u = Math.min(a, s)),
            p < f || g < c
              ? i < l && ((i = l), r < o ? H.set(je, -r, 0) : H.set(je, o, 0))
              : l < n && ((n = l), r < o ? H.set(qe, r, 0) : H.set(qe, -o, 0)),
            h < y || t < d
              ? i < u && ((i = u), a < s ? H.set(je, 0, -a) : H.set(je, 0, s))
              : l < n && ((n = l), a < s ? H.set(qe, 0, a) : H.set(qe, 0, -s))),
          e && H.copy(e, m ? qe : je),
          m
        );
      }),
      (Ke.prototype.contain = function (t, e) {
        var n = this;
        return (
          t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        );
      }),
      (Ke.prototype.clone = function () {
        return new Ke(this.x, this.y, this.width, this.height);
      }),
      (Ke.prototype.copy = function (t) {
        Ke.copy(this, t);
      }),
      (Ke.prototype.plain = function () {
        return {x: this.x, y: this.y, width: this.width, height: this.height};
      }),
      (Ke.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        );
      }),
      (Ke.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height;
      }),
      (Ke.create = function (t) {
        return new Ke(t.x, t.y, t.width, t.height);
      }),
      (Ke.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
      }),
      (Ke.applyTransform = function (t, e, n) {
        var i, r, o, a;
        n
          ? n[1] < 1e-5 && -1e-5 < n[1] && n[2] < 1e-5 && -1e-5 < n[2]
            ? ((i = n[0]),
              (r = n[3]),
              (o = n[4]),
              (a = n[5]),
              (t.x = e.x * i + o),
              (t.y = e.y * r + a),
              (t.width = e.width * i),
              (t.height = e.height * r),
              t.width < 0 && ((t.x += t.width), (t.width = -t.width)),
              t.height < 0 && ((t.y += t.height), (t.height = -t.height)))
            : ((Ue.x = Ye.x = e.x),
              (Ue.y = Xe.y = e.y),
              (Ze.x = Xe.x = e.x + e.width),
              (Ze.y = Ye.y = e.y + e.height),
              Ue.transform(n),
              Xe.transform(n),
              Ze.transform(n),
              Ye.transform(n),
              (t.x = We(Ue.x, Ze.x, Ye.x, Xe.x)),
              (t.y = We(Ue.y, Ze.y, Ye.y, Xe.y)),
              (o = Ge(Ue.x, Ze.x, Ye.x, Xe.x)),
              (a = Ge(Ue.y, Ze.y, Ye.y, Xe.y)),
              (t.width = o - t.x),
              (t.height = a - t.y))
          : t !== e && Ke.copy(t, e);
      }),
      Ke);
  function Ke(t, e, n, i) {
    n < 0 && ((t += n), (n = -n)),
      i < 0 && ((e += i), (i = -i)),
      (this.x = t),
      (this.y = e),
      (this.width = n),
      (this.height = i);
  }
  var $e = 'silent';
  function Qe() {
    Ie(this.event);
  }
  u(en, (Je = le)),
    (en.prototype.dispose = function () {}),
    (en.prototype.setCursor = function () {});
  var Je,
    tn = en;
  function en() {
    var t = (null !== Je && Je.apply(this, arguments)) || this;
    return (t.handler = null), t;
  }
  var nn,
    rn = function (t, e) {
      (this.x = t), (this.y = e);
    },
    on = [
      'click',
      'dblclick',
      'mousewheel',
      'mouseout',
      'mouseup',
      'mousedown',
      'mousemove',
      'contextmenu',
    ],
    an = new Z(0, 0, 0, 0),
    sn =
      (u(ln, (nn = le)),
      (ln.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (z(
              on,
              function (t) {
                e.on && e.on(t, this[t], this);
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e);
      }),
      (ln.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = hn(this, e, n),
          r = this._hovered,
          o = r.target,
          i =
            (o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target),
            (this._hovered = i ? new rn(e, n) : this.findHover(e, n))),
          e = i.target,
          n = this.proxy;
        n.setCursor && n.setCursor(e ? e.cursor : 'default'),
          o && e !== o && this.dispatchToElement(r, 'mouseout', t),
          this.dispatchToElement(i, 'mousemove', t),
          e && e !== o && this.dispatchToElement(i, 'mouseover', t);
      }),
      (ln.prototype.mouseout = function (t) {
        var e = t.zrEventControl;
        'only_globalout' !== e &&
          this.dispatchToElement(this._hovered, 'mouseout', t),
          'no_globalout' !== e &&
            this.trigger('globalout', {type: 'globalout', event: t});
      }),
      (ln.prototype.resize = function () {
        this._hovered = new rn(0, 0);
      }),
      (ln.prototype.dispatch = function (t, e) {
        t = this[t];
        t && t.call(this, e);
      }),
      (ln.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null);
      }),
      (ln.prototype.setCursorStyle = function (t) {
        var e = this.proxy;
        e.setCursor && e.setCursor(t);
      }),
      (ln.prototype.dispatchToElement = function (t, e, n) {
        var i = (t = t || {}).target;
        if (!i || !i.silent) {
          for (
            var r = 'on' + e,
              o = {
                type: e,
                event: n,
                target: (t = t).target,
                topTarget: t.topTarget,
                cancelBubble: !1,
                offsetX: n.zrX,
                offsetY: n.zrY,
                gestureEvent: n.gestureEvent,
                pinchX: n.pinchX,
                pinchY: n.pinchY,
                pinchScale: n.pinchScale,
                wheelDelta: n.zrDelta,
                zrByTouch: n.zrByTouch,
                which: n.which,
                stop: Qe,
              };
            i &&
            (i[r] && (o.cancelBubble = !!i[r].call(i, o)),
            i.trigger(e, o),
            (i = i.__hostTarget || i.parent),
            !o.cancelBubble);

          );
          o.cancelBubble ||
            (this.trigger(e, o),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (t) {
                'function' == typeof t[r] && t[r].call(t, o),
                  t.trigger && t.trigger(e, o);
              }));
        }
      }),
      (ln.prototype.findHover = function (t, e, n) {
        var i = this.storage.getDisplayList(),
          r = new rn(t, e);
        if ((un(i, r, t, e, n), this._pointerSize && !r.target)) {
          for (
            var o = [],
              a = this._pointerSize,
              s = a / 2,
              l = new Z(t - s, e - s, a, a),
              u = i.length - 1;
            0 <= u;
            u--
          ) {
            var h = i[u];
            h === n ||
              h.ignore ||
              h.ignoreCoarsePointer ||
              (h.parent && h.parent.ignoreCoarsePointer) ||
              (an.copy(h.getBoundingRect()),
              h.transform && an.applyTransform(h.transform),
              an.intersect(l) && o.push(h));
          }
          if (o.length)
            for (var c = Math.PI / 12, p = 2 * Math.PI, d = 0; d < s; d += 4)
              for (var f = 0; f < p; f += c)
                if (
                  (un(o, r, t + d * Math.cos(f), e + d * Math.sin(f), n),
                  r.target)
                )
                  return r;
        }
        return r;
      }),
      (ln.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new ke());
        var n = this._gestureMgr,
          i =
            ('start' === e && n.clear(),
            n.recognize(
              t,
              this.findHover(t.zrX, t.zrY, null).target,
              this.proxy.dom
            ));
        'end' === e && n.clear(),
          i &&
            ((e = i.type),
            (t.gestureEvent = e),
            ((n = new rn()).target = i.target),
            this.dispatchToElement(n, e, i.event));
      }),
      ln);
  function ln(t, e, n, i, r) {
    var o = nn.call(this) || this;
    return (
      (o._hovered = new rn(0, 0)),
      (o.storage = t),
      (o.painter = e),
      (o.painterRoot = i),
      (o._pointerSize = r),
      (n = n || new tn()),
      (o.proxy = null),
      o.setHandlerProxy(n),
      (o._draggingMgr = new ae(o)),
      o
    );
  }
  function un(t, e, n, i, r) {
    for (var o = t.length - 1; 0 <= o; o--) {
      var a = t[o],
        s = void 0;
      if (
        a !== r &&
        !a.ignore &&
        (s = (function (t, e, n) {
          if (t[t.rectHover ? 'rectContain' : 'contain'](e, n)) {
            for (var i = t, r = void 0, o = !1; i; ) {
              if (!(o = i.ignoreClip ? !0 : o)) {
                var a = i.getClipPath();
                if (a && !a.contain(e, n)) return !1;
              }
              i.silent && (r = !0);
              (a = i.__hostTarget), (i = a || i.parent);
            }
            return !r || $e;
          }
          return !1;
        })(a, n, i)) &&
        (e.topTarget || (e.topTarget = a), s !== $e)
      ) {
        e.target = a;
        break;
      }
    }
  }
  function hn(t, e, n) {
    t = t.painter;
    return e < 0 || e > t.getWidth() || n < 0 || n > t.getHeight();
  }
  z(
    ['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'],
    function (a) {
      sn.prototype[a] = function (t) {
        var e,
          n,
          i = t.zrX,
          r = t.zrY,
          o = hn(this, i, r);
        if (
          (('mouseup' === a && o) || (n = (e = this.findHover(i, r)).target),
          'mousedown' === a)
        )
          (this._downEl = n),
            (this._downPoint = [t.zrX, t.zrY]),
            (this._upEl = n);
        else if ('mouseup' === a) this._upEl = n;
        else if ('click' === a) {
          if (
            this._downEl !== this._upEl ||
            !this._downPoint ||
            4 < $t(this._downPoint, [t.zrX, t.zrY])
          )
            return;
          this._downPoint = null;
        }
        this.dispatchToElement(e, a, t);
      };
    }
  );
  var cn = 32,
    pn = 7;
  function dn(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; r < n && i(t[r], t[r - 1]) < 0; ) r++;
      var o = t,
        a = e,
        s = r;
      for (s--; a < s; ) {
        var l = o[a];
        (o[a++] = o[s]), (o[s--] = l);
      }
    } else for (; r < n && 0 <= i(t[r], t[r - 1]); ) r++;
    return r - e;
  }
  function fn(t, e, n, i, r) {
    for (i === e && i++; i < n; i++) {
      for (var o, a = t[i], s = e, l = i; s < l; )
        r(a, t[(o = (s + l) >>> 1)]) < 0 ? (l = o) : (s = 1 + o);
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; 0 < u; ) (t[s + u] = t[s + u - 1]), u--;
      }
      t[s] = a;
    }
  }
  function gn(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (0 < o(t, e[n + r])) {
      for (s = i - r; l < s && 0 < o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      s < l && (l = s), (a += r), (l += r);
    } else {
      for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      (i = a), (a = r - (l = s < l ? s : l)), (l = r - i);
    }
    for (a++; a < l; ) {
      var u = a + ((l - a) >>> 1);
      0 < o(t, e[n + u]) ? (a = u + 1) : (l = u);
    }
    return l;
  }
  function yn(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) < 0) {
      for (s = r + 1; l < s && o(t, e[n + r - l]) < 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      var u = a,
        a = r - (l = s < l ? s : l),
        l = r - u;
    } else {
      for (s = i - r; l < s && 0 <= o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      s < l && (l = s), (a += r), (l += r);
    }
    for (a++; a < l; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1);
    }
    return l;
  }
  function mn(A, P) {
    var L,
      O,
      R = pn,
      B = 0,
      z = [];
    function e(t) {
      var e = L[t],
        n = O[t],
        i = L[t + 1],
        r = O[t + 1],
        t =
          ((O[t] = n + r),
          t === B - 3 && ((L[t + 1] = L[t + 2]), (O[t + 1] = O[t + 2])),
          B--,
          yn(A[i], A, e, n, 0, P));
      if (
        ((e += t),
        0 != (n -= t) && 0 !== (r = gn(A[e + n - 1], A, i, r, r - 1, P)))
      )
        if (n <= r) {
          var o = e,
            a = n,
            t = i,
            s = r,
            l = 0;
          for (l = 0; l < a; l++) z[l] = A[o + l];
          var u = 0,
            h = t,
            c = o;
          if (((A[c++] = A[h++]), 0 == --s))
            for (l = 0; l < a; l++) A[c + l] = z[u + l];
          else if (1 === a) {
            for (l = 0; l < s; l++) A[c + l] = A[h + l];
            A[c + s] = z[u];
          } else {
            for (var p, d, f, g = R; ; ) {
              (d = p = 0), (f = !1);
              do {
                if (P(A[h], z[u]) < 0) {
                  if (((A[c++] = A[h++]), d++, (p = 0) == --s)) {
                    f = !0;
                    break;
                  }
                } else if (((A[c++] = z[u++]), p++, (d = 0), 1 == --a)) {
                  f = !0;
                  break;
                }
              } while ((p | d) < g);
              if (f) break;
              do {
                if (0 !== (p = yn(A[h], z, u, a, 0, P))) {
                  for (l = 0; l < p; l++) A[c + l] = z[u + l];
                  if (((c += p), (u += p), (a -= p) <= 1)) {
                    f = !0;
                    break;
                  }
                }
                if (((A[c++] = A[h++]), 0 == --s)) {
                  f = !0;
                  break;
                }
                if (0 !== (d = gn(z[u], A, h, s, 0, P))) {
                  for (l = 0; l < d; l++) A[c + l] = A[h + l];
                  if (((c += d), (h += d), 0 === (s -= d))) {
                    f = !0;
                    break;
                  }
                }
                if (((A[c++] = z[u++]), 1 == --a)) {
                  f = !0;
                  break;
                }
              } while ((g--, pn <= p || pn <= d));
              if (f) break;
              g < 0 && (g = 0), (g += 2);
            }
            if (((R = g) < 1 && (R = 1), 1 === a)) {
              for (l = 0; l < s; l++) A[c + l] = A[h + l];
              A[c + s] = z[u];
            } else {
              if (0 === a) throw new Error();
              for (l = 0; l < a; l++) A[c + l] = z[u + l];
            }
          }
        } else {
          var y = e,
            m = n,
            v = i,
            _ = r,
            x = 0;
          for (x = 0; x < _; x++) z[x] = A[v + x];
          var w = y + m - 1,
            b = _ - 1,
            S = v + _ - 1,
            M = 0,
            T = 0;
          if (((A[S--] = A[w--]), 0 == --m))
            for (M = S - (_ - 1), x = 0; x < _; x++) A[M + x] = z[x];
          else if (1 === _) {
            for (T = (S -= m) + 1, M = (w -= m) + 1, x = m - 1; 0 <= x; x--)
              A[T + x] = A[M + x];
            A[S] = z[b];
          } else {
            for (var C = R; ; ) {
              var I = 0,
                D = 0,
                k = !1;
              do {
                if (P(z[b], A[w]) < 0) {
                  if (((A[S--] = A[w--]), I++, (D = 0) == --m)) {
                    k = !0;
                    break;
                  }
                } else if (((A[S--] = z[b--]), D++, (I = 0), 1 == --_)) {
                  k = !0;
                  break;
                }
              } while ((I | D) < C);
              if (k) break;
              do {
                if (0 !== (I = m - yn(z[b], A, y, m, m - 1, P))) {
                  for (
                    m -= I, T = (S -= I) + 1, M = (w -= I) + 1, x = I - 1;
                    0 <= x;
                    x--
                  )
                    A[T + x] = A[M + x];
                  if (0 === m) {
                    k = !0;
                    break;
                  }
                }
                if (((A[S--] = z[b--]), 1 == --_)) {
                  k = !0;
                  break;
                }
                if (0 !== (D = _ - gn(A[w], z, 0, _, _ - 1, P))) {
                  for (
                    _ -= D, T = (S -= D) + 1, M = (b -= D) + 1, x = 0;
                    x < D;
                    x++
                  )
                    A[T + x] = z[M + x];
                  if (_ <= 1) {
                    k = !0;
                    break;
                  }
                }
                if (((A[S--] = A[w--]), 0 == --m)) {
                  k = !0;
                  break;
                }
              } while ((C--, pn <= I || pn <= D));
              if (k) break;
              C < 0 && (C = 0), (C += 2);
            }
            if (((R = C) < 1 && (R = 1), 1 === _)) {
              for (T = (S -= m) + 1, M = (w -= m) + 1, x = m - 1; 0 <= x; x--)
                A[T + x] = A[M + x];
              A[S] = z[b];
            } else {
              if (0 === _) throw new Error();
              for (M = S - (_ - 1), x = 0; x < _; x++) A[M + x] = z[x];
            }
          }
        }
    }
    return (
      (L = []),
      (O = []),
      {
        mergeRuns: function () {
          for (; 1 < B; ) {
            var t = B - 2;
            if (
              (1 <= t && O[t - 1] <= O[t] + O[t + 1]) ||
              (2 <= t && O[t - 2] <= O[t] + O[t - 1])
            )
              O[t - 1] < O[t + 1] && t--;
            else if (O[t] > O[t + 1]) break;
            e(t);
          }
        },
        forceMergeRuns: function () {
          for (; 1 < B; ) {
            var t = B - 2;
            0 < t && O[t - 1] < O[t + 1] && t--, e(t);
          }
        },
        pushRun: function (t, e) {
          (L[B] = t), (O[B] = e), (B += 1);
        },
      }
    );
  }
  function vn(t, e, n, i) {
    var r = (i = i || t.length) - (n = n || 0);
    if (!(r < 2)) {
      var o = 0;
      if (r < cn) fn(t, n, i, n + (o = dn(t, n, i, e)), e);
      else {
        var a,
          s = mn(t, e),
          l = (function (t) {
            for (var e = 0; cn <= t; ) (e |= 1 & t), (t >>= 1);
            return t + e;
          })(r);
        do {} while (
          ((o = dn(t, n, i, e)) < l &&
            (fn(t, n, n + (a = l < (a = r) ? l : r), n + o, e), (o = a)),
          s.pushRun(n, o),
          s.mergeRuns(),
          (n += o),
          0 !== (r -= o))
        );
        s.forceMergeRuns();
      }
    }
  }
  var _n = 1,
    xn = 4,
    wn = !1;
  function bn() {
    wn ||
      ((wn = !0),
      console.warn(
        'z / z2 / zlevel of displayable is invalid, which may cause unexpected errors'
      ));
  }
  function Sn(t, e) {
    return t.zlevel === e.zlevel
      ? t.z === e.z
        ? t.z2 - e.z2
        : t.z - e.z
      : t.zlevel - e.zlevel;
  }
  (Tn.prototype.traverse = function (t, e) {
    for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
  }),
    (Tn.prototype.getDisplayList = function (t, e) {
      e = e || !1;
      var n = this._displayList;
      return (!t && n.length) || this.updateDisplayList(e), n;
    }),
    (Tn.prototype.updateDisplayList = function (t) {
      this._displayListLen = 0;
      for (
        var e = this._roots, n = this._displayList, i = 0, r = e.length;
        i < r;
        i++
      )
        this._updateAndAddDisplayable(e[i], null, t);
      (n.length = this._displayListLen), vn(n, Sn);
    }),
    (Tn.prototype._updateAndAddDisplayable = function (t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.update(), t.afterUpdate();
        var i = t.getClipPath();
        if (t.ignoreClip) e = null;
        else if (i) {
          e = e ? e.slice() : [];
          for (var r = i, o = t; r; )
            (r.parent = o),
              r.updateTransform(),
              e.push(r),
              (r = (o = r).getClipPath());
        }
        if (t.childrenRef) {
          for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
            var l = a[s];
            t.__dirty && (l.__dirty |= _n),
              this._updateAndAddDisplayable(l, e, n);
          }
          t.__dirty = 0;
        } else {
          i = t;
          e && e.length
            ? (i.__clipPaths = e)
            : i.__clipPaths && 0 < i.__clipPaths.length && (i.__clipPaths = []),
            isNaN(i.z) && (bn(), (i.z = 0)),
            isNaN(i.z2) && (bn(), (i.z2 = 0)),
            isNaN(i.zlevel) && (bn(), (i.zlevel = 0)),
            (this._displayList[this._displayListLen++] = i);
        }
        (i = t.getDecalElement && t.getDecalElement()),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n),
            t.getTextGuideLine())),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n), t.getTextContent()));
        i && this._updateAndAddDisplayable(i, e, n);
      }
    }),
    (Tn.prototype.addRoot = function (t) {
      (t.__zr && t.__zr.storage === this) || this._roots.push(t);
    }),
    (Tn.prototype.delRoot = function (t) {
      if (t instanceof Array)
        for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]);
      else {
        var i = I(this._roots, t);
        0 <= i && this._roots.splice(i, 1);
      }
    }),
    (Tn.prototype.delAllRoots = function () {
      (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
    }),
    (Tn.prototype.getRoots = function () {
      return this._roots;
    }),
    (Tn.prototype.dispose = function () {
      (this._displayList = null), (this._roots = null);
    });
  var Mn = Tn;
  function Tn() {
    (this._roots = []),
      (this._displayList = []),
      (this._displayListLen = 0),
      (this.displayableSortFunc = Sn);
  }
  var Cn =
      (b.hasGlobalWindow &&
        ((window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
          (window.msRequestAnimationFrame &&
            window.msRequestAnimationFrame.bind(window)) ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame)) ||
      function (t) {
        return setTimeout(t, 16);
      },
    In = {
      linear: function (t) {
        return t;
      },
      quadraticIn: function (t) {
        return t * t;
      },
      quadraticOut: function (t) {
        return t * (2 - t);
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      cubicIn: function (t) {
        return t * t * t;
      },
      cubicOut: function (t) {
        return --t * t * t + 1;
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      quarticIn: function (t) {
        return t * t * t * t;
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t;
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      quinticIn: function (t) {
        return t * t * t * t * t;
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1;
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      sinusoidalOut: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      sinusoidalInOut: function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1);
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      exponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      circularInOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      elasticIn: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            -(
              n *
              Math.pow(2, 10 * --t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4)
            ));
      },
      elasticOut: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            n *
              Math.pow(2, -10 * t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
              1);
      },
      elasticInOut: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? n *
                Math.pow(2, 10 * --t) *
                Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                -0.5
              : n *
                  Math.pow(2, -10 * --t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                  0.5 +
                1);
      },
      backIn: function (t) {
        return t * t * (2.70158 * t - 1.70158);
      },
      backOut: function (t) {
        return --t * t * (2.70158 * t + 1.70158) + 1;
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1
          ? t * t * ((1 + e) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + e) * t + e) + 2);
      },
      bounceIn: function (t) {
        return 1 - In.bounceOut(1 - t);
      },
      bounceOut: function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      bounceInOut: function (t) {
        return t < 0.5
          ? 0.5 * In.bounceIn(2 * t)
          : 0.5 * In.bounceOut(2 * t - 1) + 0.5;
      },
    },
    Dn = Math.pow,
    kn = Math.sqrt,
    An = 1e-8,
    Pn = kn(3),
    Ln = 1 / 3,
    On = Wt(),
    Rn = Wt(),
    Bn = Wt();
  function zn(t) {
    return -An < t && t < An;
  }
  function En(t) {
    return An < t || t < -An;
  }
  function Nn(t, e, n, i, r) {
    var o = 1 - r;
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);
  }
  function Fn(t, e, n, i, r) {
    var o = 1 - r;
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);
  }
  function Vn(t, e, n, i, r, o) {
    var a,
      s,
      i = i + 3 * (e - n) - t,
      n = 3 * (n - 2 * e + t),
      e = 3 * (e - t),
      t = t - r,
      r = n * n - 3 * i * e,
      l = n * e - 9 * i * t,
      t = e * e - 3 * n * t,
      u = 0;
    return (
      zn(r) && zn(l)
        ? zn(n)
          ? (o[0] = 0)
          : 0 <= (a = -e / n) && a <= 1 && (o[u++] = a)
        : zn((e = l * l - 4 * r * t))
        ? ((s = -(t = l / r) / 2),
          0 <= (a = -n / i + t) && a <= 1 && (o[u++] = a),
          0 <= s && s <= 1 && (o[u++] = s))
        : 0 < e
        ? ((e = r * n + 1.5 * i * (-l - (t = kn(e)))),
          0 <=
            (a =
              (-n -
                ((t =
                  (t = r * n + 1.5 * i * (-l + t)) < 0
                    ? -Dn(-t, Ln)
                    : Dn(t, Ln)) +
                  (e = e < 0 ? -Dn(-e, Ln) : Dn(e, Ln)))) /
              (3 * i)) &&
            a <= 1 &&
            (o[u++] = a))
        : ((t = (2 * r * n - 3 * i * l) / (2 * kn(r * r * r))),
          (e = Math.acos(t) / 3),
          (a = (-n - 2 * (l = kn(r)) * (t = Math.cos(e))) / (3 * i)),
          (s = (-n + l * (t + Pn * Math.sin(e))) / (3 * i)),
          (r = (-n + l * (t - Pn * Math.sin(e))) / (3 * i)),
          0 <= a && a <= 1 && (o[u++] = a),
          0 <= s && s <= 1 && (o[u++] = s),
          0 <= r && r <= 1 && (o[u++] = r)),
      u
    );
  }
  function Hn(t, e, n, i, r) {
    var o,
      a = 6 * n - 12 * e + 6 * t,
      i = 9 * e + 3 * i - 3 * t - 9 * n,
      n = 3 * e - 3 * t,
      e = 0;
    return (
      zn(i)
        ? En(a) && 0 <= (o = -n / a) && o <= 1 && (r[e++] = o)
        : zn((t = a * a - 4 * i * n))
        ? (r[0] = -a / (2 * i))
        : 0 < t &&
          ((t = (-a - (n = kn(t))) / (2 * i)),
          0 <= (o = (-a + n) / (2 * i)) && o <= 1 && (r[e++] = o),
          0 <= t) &&
          t <= 1 &&
          (r[e++] = t),
      e
    );
  }
  function Wn(t, e, n, i, r, o) {
    var a = (e - t) * r + t,
      e = (n - e) * r + e,
      n = (i - n) * r + n,
      s = (e - a) * r + a,
      e = (n - e) * r + e,
      r = (e - s) * r + s;
    (o[0] = t),
      (o[1] = a),
      (o[2] = s),
      (o[3] = r),
      (o[4] = r),
      (o[5] = e),
      (o[6] = n),
      (o[7] = i);
  }
  function Gn(t, e, n, i, r, o, a, s, l, u, h) {
    var c,
      p,
      d,
      f,
      g = 0.005,
      y = 1 / 0;
    (On[0] = l), (On[1] = u);
    for (var m = 0; m < 1; m += 0.05)
      (Rn[0] = Nn(t, n, r, a, m)),
        (Rn[1] = Nn(e, i, o, s, m)),
        (d = Jt(On, Rn)) < y && ((c = m), (y = d));
    for (var y = 1 / 0, v = 0; v < 32 && !(g < 1e-4); v++)
      (p = c + g),
        (Rn[0] = Nn(t, n, r, a, (f = c - g))),
        (Rn[1] = Nn(e, i, o, s, f)),
        (d = Jt(Rn, On)),
        0 <= f && d < y
          ? ((c = f), (y = d))
          : ((Bn[0] = Nn(t, n, r, a, p)),
            (Bn[1] = Nn(e, i, o, s, p)),
            (f = Jt(Bn, On)),
            p <= 1 && f < y ? ((c = p), (y = f)) : (g *= 0.5));
    return h && ((h[0] = Nn(t, n, r, a, c)), (h[1] = Nn(e, i, o, s, c))), kn(y);
  }
  function Un(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n;
  }
  function Zn(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }
  function Yn(t, e, n) {
    n = t + n - 2 * e;
    return 0 == n ? 0.5 : (t - e) / n;
  }
  function Xn(t, e, n, i, r) {
    var o = (e - t) * i + t,
      e = (n - e) * i + e,
      i = (e - o) * i + o;
    (r[0] = t), (r[1] = o), (r[2] = i), (r[3] = i), (r[4] = e), (r[5] = n);
  }
  function qn(t, e, n, i, r, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0;
    (On[0] = a), (On[1] = s);
    for (var p = 0; p < 1; p += 0.05)
      (Rn[0] = Un(t, n, r, p)),
        (Rn[1] = Un(e, i, o, p)),
        (y = Jt(On, Rn)) < c && ((u = p), (c = y));
    for (var c = 1 / 0, d = 0; d < 32 && !(h < 1e-4); d++) {
      var f = u - h,
        g = u + h,
        y = ((Rn[0] = Un(t, n, r, f)), (Rn[1] = Un(e, i, o, f)), Jt(Rn, On));
      0 <= f && y < c
        ? ((u = f), (c = y))
        : ((Bn[0] = Un(t, n, r, g)),
          (Bn[1] = Un(e, i, o, g)),
          (f = Jt(Bn, On)),
          g <= 1 && f < c ? ((u = g), (c = f)) : (h *= 0.5));
    }
    return l && ((l[0] = Un(t, n, r, u)), (l[1] = Un(e, i, o, u))), kn(c);
  }
  var jn = /cubic-bezier\(([0-9,\.e ]+)\)/;
  function Kn(t) {
    t = t && jn.exec(t);
    if (t) {
      var e,
        t = t[1].split(','),
        n = +Ct(t[0]),
        i = +Ct(t[1]),
        r = +Ct(t[2]),
        o = +Ct(t[3]);
      if (!isNaN(n + i + r + o))
        return (
          (e = []),
          function (t) {
            return t <= 0
              ? 0
              : 1 <= t
              ? 1
              : Vn(0, n, r, 1, t, e) && Nn(0, i, o, 1, e[0]);
          }
        );
    }
  }
  (Qn.prototype.step = function (t, e) {
    if (
      (this._inited ||
        ((this._startTime = t + this._delay), (this._inited = !0)),
      !this._paused)
    ) {
      var n = this._life,
        i = t - this._startTime - this._pausedTime,
        r = i / n,
        o = (r < 0 && (r = 0), (r = Math.min(r, 1)), this.easingFunc),
        o = o ? o(r) : r;
      if ((this.onframe(o), 1 === r)) {
        if (!this.loop) return !0;
        (this._startTime = t - (i % n)),
          (this._pausedTime = 0),
          this.onrestart();
      }
      return !1;
    }
    this._pausedTime += e;
  }),
    (Qn.prototype.pause = function () {
      this._paused = !0;
    }),
    (Qn.prototype.resume = function () {
      this._paused = !1;
    }),
    (Qn.prototype.setEasing = function (t) {
      (this.easing = t), (this.easingFunc = D(t) ? t : In[t] || Kn(t));
    });
  var $n = Qn;
  function Qn(t) {
    (this._inited = !1),
      (this._startTime = 0),
      (this._pausedTime = 0),
      (this._paused = !1),
      (this._life = t.life || 1e3),
      (this._delay = t.delay || 0),
      (this.loop = t.loop || !1),
      (this.onframe = t.onframe || Ft),
      (this.ondestroy = t.ondestroy || Ft),
      (this.onrestart = t.onrestart || Ft),
      t.easing && this.setEasing(t.easing);
  }
  var Jn = function (t) {
      this.value = t;
    },
    ti =
      ((ei.prototype.insert = function (t) {
        t = new Jn(t);
        return this.insertEntry(t), t;
      }),
      (ei.prototype.insertEntry = function (t) {
        this.head
          ? (((this.tail.next = t).prev = this.tail),
            (t.next = null),
            (this.tail = t))
          : (this.head = this.tail = t),
          this._len++;
      }),
      (ei.prototype.remove = function (t) {
        var e = t.prev,
          n = t.next;
        e ? (e.next = n) : (this.head = n),
          n ? (n.prev = e) : (this.tail = e),
          (t.next = t.prev = null),
          this._len--;
      }),
      (ei.prototype.len = function () {
        return this._len;
      }),
      (ei.prototype.clear = function () {
        (this.head = this.tail = null), (this._len = 0);
      }),
      ei);
  function ei() {
    this._len = 0;
  }
  (ii.prototype.put = function (t, e) {
    var n,
      i,
      r = this._list,
      o = this._map,
      a = null;
    return (
      null == o[t] &&
        ((i = r.len()),
        (n = this._lastRemovedEntry),
        i >= this._maxSize &&
          0 < i &&
          ((i = r.head),
          r.remove(i),
          delete o[i.key],
          (a = i.value),
          (this._lastRemovedEntry = i)),
        n ? (n.value = e) : (n = new Jn(e)),
        (n.key = t),
        r.insertEntry(n),
        (o[t] = n)),
      a
    );
  }),
    (ii.prototype.get = function (t) {
      var t = this._map[t],
        e = this._list;
      if (null != t)
        return t !== e.tail && (e.remove(t), e.insertEntry(t)), t.value;
    }),
    (ii.prototype.clear = function () {
      this._list.clear(), (this._map = {});
    }),
    (ii.prototype.len = function () {
      return this._list.len();
    });
  var ni = ii;
  function ii(t) {
    (this._list = new ti()),
      (this._maxSize = 10),
      (this._map = {}),
      (this._maxSize = t);
  }
  var ri = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1],
  };
  function oi(t) {
    return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t;
  }
  function ai(t) {
    return t < 0 ? 0 : 1 < t ? 1 : t;
  }
  function si(t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? oi((parseFloat(t) / 100) * 255)
      : oi(parseInt(t, 10));
  }
  function li(t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? ai(parseFloat(t) / 100)
      : ai(parseFloat(t));
  }
  function ui(t, e, n) {
    return (
      n < 0 ? (n += 1) : 1 < n && --n,
      6 * n < 1
        ? t + (e - t) * n * 6
        : 2 * n < 1
        ? e
        : 3 * n < 2
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  function hi(t, e, n) {
    return t + (e - t) * n;
  }
  function ci(t, e, n, i, r) {
    return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t;
  }
  function pi(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
  }
  var di = new ni(20),
    fi = null;
  function gi(t, e) {
    fi && pi(fi, e), (fi = di.put(t, fi || e.slice()));
  }
  function yi(t, e) {
    if (t) {
      e = e || [];
      var n = di.get(t);
      if (n) return pi(e, n);
      n = (t += '').replace(/ /g, '').toLowerCase();
      if (n in ri) return pi(e, ri[n]), gi(t, e), e;
      var i = n.length;
      if ('#' === n.charAt(0))
        return 4 === i || 5 === i
          ? 0 <= (r = parseInt(n.slice(1, 4), 16)) && r <= 4095
            ? (ci(
                e,
                ((3840 & r) >> 4) | ((3840 & r) >> 8),
                (240 & r) | ((240 & r) >> 4),
                (15 & r) | ((15 & r) << 4),
                5 === i ? parseInt(n.slice(4), 16) / 15 : 1
              ),
              gi(t, e),
              e)
            : void ci(e, 0, 0, 0, 1)
          : 7 === i || 9 === i
          ? 0 <= (r = parseInt(n.slice(1, 7), 16)) && r <= 16777215
            ? (ci(
                e,
                (16711680 & r) >> 16,
                (65280 & r) >> 8,
                255 & r,
                9 === i ? parseInt(n.slice(7), 16) / 255 : 1
              ),
              gi(t, e),
              e)
            : void ci(e, 0, 0, 0, 1)
          : void 0;
      var r = n.indexOf('('),
        o = n.indexOf(')');
      if (-1 !== r && o + 1 === i) {
        var i = n.substr(0, r),
          a = n.substr(r + 1, o - (r + 1)).split(','),
          s = 1;
        switch (i) {
          case 'rgba':
            if (4 !== a.length)
              return 3 === a.length
                ? ci(e, +a[0], +a[1], +a[2], 1)
                : ci(e, 0, 0, 0, 1);
            s = li(a.pop());
          case 'rgb':
            return 3 <= a.length
              ? (ci(
                  e,
                  si(a[0]),
                  si(a[1]),
                  si(a[2]),
                  3 === a.length ? s : li(a[3])
                ),
                gi(t, e),
                e)
              : void ci(e, 0, 0, 0, 1);
          case 'hsla':
            return 4 !== a.length
              ? void ci(e, 0, 0, 0, 1)
              : ((a[3] = li(a[3])), mi(a, e), gi(t, e), e);
          case 'hsl':
            return 3 !== a.length
              ? void ci(e, 0, 0, 0, 1)
              : (mi(a, e), gi(t, e), e);
          default:
            return;
        }
      }
      ci(e, 0, 0, 0, 1);
    }
  }
  function mi(t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      i = li(t[1]),
      r = li(t[2]),
      i = r <= 0.5 ? r * (i + 1) : r + i - r * i,
      r = 2 * r - i;
    return (
      ci(
        (e = e || []),
        oi(255 * ui(r, i, n + 1 / 3)),
        oi(255 * ui(r, i, n)),
        oi(255 * ui(r, i, n - 1 / 3)),
        1
      ),
      4 === t.length && (e[3] = t[3]),
      e
    );
  }
  function vi(t, e) {
    var n = yi(t);
    if (n) {
      for (var i = 0; i < 3; i++)
        (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
          255 < n[i] ? (n[i] = 255) : n[i] < 0 && (n[i] = 0);
      return bi(n, 4 === n.length ? 'rgba' : 'rgb');
    }
  }
  function _i(t, e, n) {
    var i, r, o;
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (n = n || []),
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (o = Math.ceil(t)),
        (r = e[i]),
        (e = e[o]),
        (n[0] = oi(hi(r[0], e[0], (o = t - i)))),
        (n[1] = oi(hi(r[1], e[1], o))),
        (n[2] = oi(hi(r[2], e[2], o))),
        (n[3] = ai(hi(r[3], e[3], o))),
        n
      );
  }
  var xi = _i;
  function wi(t, e, n) {
    var i, r, o, a;
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (r = Math.ceil(t)),
        (a = yi(e[i])),
        (e = yi(e[r])),
        (a = bi(
          [
            oi(hi(a[0], e[0], (o = t - i))),
            oi(hi(a[1], e[1], o)),
            oi(hi(a[2], e[2], o)),
            ai(hi(a[3], e[3], o)),
          ],
          'rgba'
        )),
        n ? {color: a, leftIndex: i, rightIndex: r, value: t} : a
      );
  }
  var n = wi;
  function bi(t, e) {
    var n;
    if (t && t.length)
      return (
        (n = t[0] + ',' + t[1] + ',' + t[2]),
        ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (n += ',' + t[3]),
        e + '(' + n + ')'
      );
  }
  function Si(t, e) {
    t = yi(t);
    return t
      ? ((0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) * t[3]) / 255 +
          (1 - t[3]) * e
      : 0;
  }
  var Mi = new ni(100);
  function Ti(t) {
    var e;
    return V(t)
      ? ((e = Mi.get(t)) || ((e = vi(t, -0.1)), Mi.put(t, e)), e)
      : mt(t)
      ? (((e = L({}, t)).colorStops = N(t.colorStops, function (t) {
          return {offset: t.offset, color: vi(t.color, -0.1)};
        })),
        e)
      : t;
  }
  xi = Object.freeze({
    __proto__: null,
    fastLerp: _i,
    fastMapToColor: xi,
    lerp: wi,
    lift: vi,
    liftColor: Ti,
    lum: Si,
    mapToColor: n,
    modifyAlpha: function (t, e) {
      if ((t = yi(t)) && null != e) return (t[3] = ai(e)), bi(t, 'rgba');
    },
    modifyHSL: function (t, e, n, i) {
      var r = yi(t);
      if (t)
        return (
          (r = (function (t) {
            var e, n, i, r, o, a, s, l, u, h;
            if (t)
              return (
                (h = t[0] / 255),
                (e = t[1] / 255),
                (n = t[2] / 255),
                (s = Math.min(h, e, n)),
                (r = ((i = Math.max(h, e, n)) + s) / 2),
                0 == (u = i - s)
                  ? (a = o = 0)
                  : ((a = r < 0.5 ? u / (i + s) : u / (2 - i - s)),
                    (s = ((i - h) / 6 + u / 2) / u),
                    (l = ((i - e) / 6 + u / 2) / u),
                    (u = ((i - n) / 6 + u / 2) / u),
                    h === i
                      ? (o = u - l)
                      : e === i
                      ? (o = 1 / 3 + s - u)
                      : n === i && (o = 2 / 3 + l - s),
                    o < 0 && (o += 1),
                    1 < o && --o),
                (h = [360 * o, a, r]),
                null != t[3] && h.push(t[3]),
                h
              );
          })(r)),
          null != e &&
            (r[0] = ((t = e), (t = Math.round(t)) < 0 ? 0 : 360 < t ? 360 : t)),
          null != n && (r[1] = li(n)),
          null != i && (r[2] = li(i)),
          bi(mi(r), 'rgba')
        );
    },
    parse: yi,
    random: function () {
      return bi(
        [
          Math.round(255 * Math.random()),
          Math.round(255 * Math.random()),
          Math.round(255 * Math.random()),
        ],
        'rgb'
      );
    },
    stringify: bi,
    toHex: function (t) {
      if ((t = yi(t)))
        return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2])
          .toString(16)
          .slice(1);
    },
  });
  b.hasGlobalWindow && D(window.btoa);
  var Ci = Array.prototype.slice;
  function Ii(t, e, n) {
    return (e - t) * n + t;
  }
  function Di(t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = Ii(e[o], n[o], i);
    return t;
  }
  function ki(t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i;
    return t;
  }
  function Ai(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i;
    }
    return t;
  }
  function Pi(t) {
    if (st(t)) {
      var e = t.length;
      if (st(t[0])) {
        for (var n = [], i = 0; i < e; i++) n.push(Ci.call(t[i]));
        return n;
      }
      return Ci.call(t);
    }
    return t;
  }
  function Li(t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      'rgba(' + t.join(',') + ')'
    );
  }
  function Oi(t) {
    return 4 === t || 5 === t;
  }
  function Ri(t) {
    return 1 === t || 2 === t;
  }
  var Bi = [0, 0, 0, 0],
    zi =
      ((Ei.prototype.isFinished = function () {
        return this._finished;
      }),
      (Ei.prototype.setFinished = function () {
        (this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished();
      }),
      (Ei.prototype.needsAnimate = function () {
        return 1 <= this.keyframes.length;
      }),
      (Ei.prototype.getAdditiveTrack = function () {
        return this._additiveTrack;
      }),
      (Ei.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0;
        var i,
          r = this.keyframes,
          o = r.length,
          a = !1,
          s = 6,
          l = e,
          u =
            (st(e)
              ? ((1 == (s = i = st((i = e) && i[0]) ? 2 : 1) && !dt(e[0])) ||
                  (2 == i && !dt(e[0][0]))) &&
                (a = !0)
              : dt(e) && !xt(e)
              ? (s = 0)
              : V(e)
              ? isNaN(+e)
                ? (i = yi(e)) && ((l = i), (s = 3))
                : (s = 0)
              : mt(e) &&
                (((u = L({}, l)).colorStops = N(e.colorStops, function (t) {
                  return {offset: t.offset, color: yi(t.color)};
                })),
                'linear' === e.type ? (s = 4) : 'radial' === e.type && (s = 5),
                (l = u)),
            0 === o
              ? (this.valType = s)
              : (s === this.valType && 6 !== s) || (a = !0),
            (this.discrete = this.discrete || a),
            {time: t, value: l, rawValue: e, percent: 0});
        return (
          n && ((u.easing = n), (u.easingFunc = D(n) ? n : In[n] || Kn(n))),
          r.push(u),
          u
        );
      }),
      (Ei.prototype.prepare = function (t, e) {
        for (
          var n = this.keyframes,
            i =
              (this._needsSort &&
                n.sort(function (t, e) {
                  return t.time - e.time;
                }),
              this.valType),
            r = n.length,
            o = n[r - 1],
            a = this.discrete,
            s = Ri(i),
            l = Oi(i),
            u = 0;
          u < r;
          u++
        ) {
          var h = n[u],
            c = h.value,
            p = o.value;
          if (((h.percent = h.time / t), !a))
            if (s && u !== r - 1) {
              x = _ = v = m = y = g = f = d = h = void 0;
              var d = p,
                f = i,
                g = (h = c),
                y = d;
              if (g.push && y.push) {
                var h = g.length,
                  m = y.length;
                if (h !== m)
                  if (m < h) g.length = m;
                  else
                    for (var v = h; v < m; v++)
                      g.push(1 === f ? y[v] : Ci.call(y[v]));
                for (var _ = g[0] && g[0].length, v = 0; v < g.length; v++)
                  if (1 === f) isNaN(g[v]) && (g[v] = y[v]);
                  else
                    for (var x = 0; x < _; x++)
                      isNaN(g[v][x]) && (g[v][x] = y[v][x]);
              }
            } else if (l) {
              T = M = S = b = w = h = d = void 0;
              for (
                var d = c.colorStops,
                  h = p.colorStops,
                  w = d.length,
                  b = h.length,
                  S = b < w ? h : d,
                  h = Math.min(w, b),
                  M = S[h - 1] || {color: [0, 0, 0, 0], offset: 0},
                  T = h;
                T < Math.max(w, b);
                T++
              )
                S.push({offset: M.offset, color: M.color.slice()});
            }
        }
        if (
          !a &&
          5 !== i &&
          e &&
          this.needsAnimate() &&
          e.needsAnimate() &&
          i === e.valType &&
          !e._finished
        ) {
          this._additiveTrack = e;
          for (var C = n[0].value, u = 0; u < r; u++)
            0 === i
              ? (n[u].additiveValue = n[u].value - C)
              : 3 === i
              ? (n[u].additiveValue = ki([], n[u].value, C, -1))
              : Ri(i) &&
                (n[u].additiveValue = (1 === i ? ki : Ai)(
                  [],
                  n[u].value,
                  C,
                  -1
                ));
        }
      }),
      (Ei.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null);
          var n,
            i,
            r,
            o,
            a = null != this._additiveTrack,
            s = a ? 'additiveValue' : 'value',
            l = this.valType,
            u = this.keyframes,
            h = u.length,
            c = this.propName,
            p = 3 === l,
            d = this._lastFr,
            f = Math.min;
          if (1 === h) n = i = u[0];
          else {
            if (e < 0) g = 0;
            else if (e < this._lastFrP) {
              for (
                var g = f(d + 1, h - 1);
                0 <= g && !(u[g].percent <= e);
                g--
              );
              g = f(g, h - 2);
            } else {
              for (g = d; g < h && !(u[g].percent > e); g++);
              g = f(g - 1, h - 2);
            }
            (i = u[g + 1]), (n = u[g]);
          }
          n &&
            i &&
            ((this._lastFr = g),
            (this._lastFrP = e),
            (d = i.percent - n.percent),
            (r = 0 == d ? 1 : f((e - n.percent) / d, 1)),
            i.easingFunc && (r = i.easingFunc(r)),
            (f = a ? this._additiveValue : p ? Bi : t[c]),
            (Ri(l) || p) && (f = f || (this._additiveValue = [])),
            this.discrete
              ? (t[c] = (r < 1 ? n : i).rawValue)
              : Ri(l)
              ? (1 === l
                  ? Di
                  : function (t, e, n, i) {
                      for (
                        var r = e.length, o = r && e[0].length, a = 0;
                        a < r;
                        a++
                      ) {
                        t[a] || (t[a] = []);
                        for (var s = 0; s < o; s++)
                          t[a][s] = Ii(e[a][s], n[a][s], i);
                      }
                    })(f, n[s], i[s], r)
              : Oi(l)
              ? ((d = n[s]),
                (o = i[s]),
                (t[c] = {
                  type: (l = 4 === l) ? 'linear' : 'radial',
                  x: Ii(d.x, o.x, r),
                  y: Ii(d.y, o.y, r),
                  colorStops: N(d.colorStops, function (t, e) {
                    e = o.colorStops[e];
                    return {
                      offset: Ii(t.offset, e.offset, r),
                      color: Li(Di([], t.color, e.color, r)),
                    };
                  }),
                  global: o.global,
                }),
                l
                  ? ((t[c].x2 = Ii(d.x2, o.x2, r)),
                    (t[c].y2 = Ii(d.y2, o.y2, r)))
                  : (t[c].r = Ii(d.r, o.r, r)))
              : p
              ? (Di(f, n[s], i[s], r), a || (t[c] = Li(f)))
              : ((l = Ii(n[s], i[s], r)),
                a ? (this._additiveValue = l) : (t[c] = l)),
            a) &&
            this._addToTarget(t);
        }
      }),
      (Ei.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue;
        0 === e
          ? (t[n] = t[n] + i)
          : 3 === e
          ? (yi(t[n], Bi), ki(Bi, Bi, i, 1), (t[n] = Li(Bi)))
          : 1 === e
          ? ki(t[n], t[n], i, 1)
          : 2 === e && Ai(t[n], t[n], i, 1);
      }),
      Ei);
  function Ei(t) {
    (this.keyframes = []),
      (this.discrete = !1),
      (this._invalid = !1),
      (this._needsSort = !1),
      (this._lastFr = 0),
      (this._lastFrP = 0),
      (this.propName = t);
  }
  (Fi.prototype.getMaxTime = function () {
    return this._maxTime;
  }),
    (Fi.prototype.getDelay = function () {
      return this._delay;
    }),
    (Fi.prototype.getLoop = function () {
      return this._loop;
    }),
    (Fi.prototype.getTarget = function () {
      return this._target;
    }),
    (Fi.prototype.changeTarget = function (t) {
      this._target = t;
    }),
    (Fi.prototype.when = function (t, e, n) {
      return this.whenWithKeys(t, e, ht(e), n);
    }),
    (Fi.prototype.whenWithKeys = function (t, e, n, i) {
      for (var r = this._tracks, o = 0; o < n.length; o++) {
        var a = n[o];
        if (!(l = r[a])) {
          var s,
            l = (r[a] = new zi(a)),
            u = void 0,
            h = this._getAdditiveTrack(a);
          if (
            (h
              ? ((u = (s = (s = h.keyframes)[s.length - 1]) && s.value),
                3 === h.valType && (u = u && Li(u)))
              : (u = this._target[a]),
            null == u)
          )
            continue;
          0 < t && l.addKeyframe(0, Pi(u), i), this._trackKeys.push(a);
        }
        l.addKeyframe(t, Pi(e[a]), i);
      }
      return (this._maxTime = Math.max(this._maxTime, t)), this;
    }),
    (Fi.prototype.pause = function () {
      this._clip.pause(), (this._paused = !0);
    }),
    (Fi.prototype.resume = function () {
      this._clip.resume(), (this._paused = !1);
    }),
    (Fi.prototype.isPaused = function () {
      return !!this._paused;
    }),
    (Fi.prototype.duration = function (t) {
      return (this._maxTime = t), (this._force = !0), this;
    }),
    (Fi.prototype._doneCallback = function () {
      this._setTracksFinished(), (this._clip = null);
      var t = this._doneCbs;
      if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this);
    }),
    (Fi.prototype._abortedCallback = function () {
      this._setTracksFinished();
      var t = this.animation,
        e = this._abortedCbs;
      if ((t && t.removeClip(this._clip), (this._clip = null), e))
        for (var n = 0; n < e.length; n++) e[n].call(this);
    }),
    (Fi.prototype._setTracksFinished = function () {
      for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++)
        t[e[n]].setFinished();
    }),
    (Fi.prototype._getAdditiveTrack = function (t) {
      var e,
        n = this._additiveAnimators;
      if (n)
        for (var i = 0; i < n.length; i++) {
          var r = n[i].getTrack(t);
          r && (e = r);
        }
      return e;
    }),
    (Fi.prototype.start = function (t) {
      if (!(0 < this._started)) {
        this._started = 1;
        for (
          var e, o = this, a = [], n = this._maxTime || 0, i = 0;
          i < this._trackKeys.length;
          i++
        ) {
          var r = this._trackKeys[i],
            s = this._tracks[r],
            r = this._getAdditiveTrack(r),
            l = s.keyframes,
            u = l.length;
          s.prepare(n, r),
            s.needsAnimate() &&
              (!this._allowDiscrete && s.discrete
                ? ((r = l[u - 1]) && (o._target[s.propName] = r.rawValue),
                  s.setFinished())
                : a.push(s));
        }
        return (
          a.length || this._force
            ? ((e = new $n({
                life: n,
                loop: this._loop,
                delay: this._delay || 0,
                onframe: function (t) {
                  o._started = 2;
                  var e = o._additiveAnimators;
                  if (e) {
                    for (var n = !1, i = 0; i < e.length; i++)
                      if (e[i]._clip) {
                        n = !0;
                        break;
                      }
                    n || (o._additiveAnimators = null);
                  }
                  for (i = 0; i < a.length; i++) a[i].step(o._target, t);
                  var r = o._onframeCbs;
                  if (r) for (i = 0; i < r.length; i++) r[i](o._target, t);
                },
                ondestroy: function () {
                  o._doneCallback();
                },
              })),
              (this._clip = e),
              this.animation && this.animation.addClip(e),
              t && e.setEasing(t))
            : this._doneCallback(),
          this
        );
      }
    }),
    (Fi.prototype.stop = function (t) {
      var e;
      this._clip &&
        ((e = this._clip), t && e.onframe(1), this._abortedCallback());
    }),
    (Fi.prototype.delay = function (t) {
      return (this._delay = t), this;
    }),
    (Fi.prototype.during = function (t) {
      return (
        t &&
          (this._onframeCbs || (this._onframeCbs = []),
          this._onframeCbs.push(t)),
        this
      );
    }),
    (Fi.prototype.done = function (t) {
      return (
        t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
        this
      );
    }),
    (Fi.prototype.aborted = function (t) {
      return (
        t &&
          (this._abortedCbs || (this._abortedCbs = []),
          this._abortedCbs.push(t)),
        this
      );
    }),
    (Fi.prototype.getClip = function () {
      return this._clip;
    }),
    (Fi.prototype.getTrack = function (t) {
      return this._tracks[t];
    }),
    (Fi.prototype.getTracks = function () {
      var e = this;
      return N(this._trackKeys, function (t) {
        return e._tracks[t];
      });
    }),
    (Fi.prototype.stopTracks = function (t, e) {
      if (!t.length || !this._clip) return !0;
      for (
        var n = this._tracks, i = this._trackKeys, r = 0;
        r < t.length;
        r++
      ) {
        var o = n[t[r]];
        o &&
          !o.isFinished() &&
          (e
            ? o.step(this._target, 1)
            : 1 === this._started && o.step(this._target, 0),
          o.setFinished());
      }
      for (var a = !0, r = 0; r < i.length; r++)
        if (!n[i[r]].isFinished()) {
          a = !1;
          break;
        }
      return a && this._abortedCallback(), a;
    }),
    (Fi.prototype.saveTo = function (t, e, n) {
      if (t) {
        e = e || this._trackKeys;
        for (var i = 0; i < e.length; i++) {
          var r = e[i],
            o = this._tracks[r];
          o &&
            !o.isFinished() &&
            (o = (o = o.keyframes)[n ? 0 : o.length - 1]) &&
            (t[r] = Pi(o.rawValue));
        }
      }
    }),
    (Fi.prototype.__changeFinalValue = function (t, e) {
      e = e || ht(t);
      for (var n = 0; n < e.length; n++) {
        var i,
          r = e[n],
          o = this._tracks[r];
        o &&
          1 < (i = o.keyframes).length &&
          ((i = i.pop()),
          o.addKeyframe(i.time, t[r]),
          o.prepare(this._maxTime, o.getAdditiveTrack()));
      }
    });
  var Ni = Fi;
  function Fi(t, e, n, i) {
    (this._tracks = {}),
      (this._trackKeys = []),
      (this._maxTime = 0),
      (this._started = 0),
      (this._clip = null),
      (this._target = t),
      (this._loop = e) && i
        ? it("Can' use additive animation on looped animation.")
        : ((this._additiveAnimators = i), (this._allowDiscrete = n));
  }
  function Vi() {
    return new Date().getTime();
  }
  u(Gi, (Hi = le)),
    (Gi.prototype.addClip = function (t) {
      t.animation && this.removeClip(t),
        this._head
          ? (((this._tail.next = t).prev = this._tail),
            (t.next = null),
            (this._tail = t))
          : (this._head = this._tail = t),
        (t.animation = this);
    }),
    (Gi.prototype.addAnimator = function (t) {
      t.animation = this;
      t = t.getClip();
      t && this.addClip(t);
    }),
    (Gi.prototype.removeClip = function (t) {
      var e, n;
      t.animation &&
        ((e = t.prev),
        (n = t.next),
        e ? (e.next = n) : (this._head = n),
        n ? (n.prev = e) : (this._tail = e),
        (t.next = t.prev = t.animation = null));
    }),
    (Gi.prototype.removeAnimator = function (t) {
      var e = t.getClip();
      e && this.removeClip(e), (t.animation = null);
    }),
    (Gi.prototype.update = function (t) {
      for (
        var e = Vi() - this._pausedTime, n = e - this._time, i = this._head;
        i;

      )
        var r = i.next,
          i = (i.step(e, n) && (i.ondestroy(), this.removeClip(i)), r);
      (this._time = e),
        t ||
          (this.trigger('frame', n), this.stage.update && this.stage.update());
    }),
    (Gi.prototype._startLoop = function () {
      var e = this;
      (this._running = !0),
        Cn(function t() {
          e._running && (Cn(t), e._paused || e.update());
        });
    }),
    (Gi.prototype.start = function () {
      this._running ||
        ((this._time = Vi()), (this._pausedTime = 0), this._startLoop());
    }),
    (Gi.prototype.stop = function () {
      this._running = !1;
    }),
    (Gi.prototype.pause = function () {
      this._paused || ((this._pauseStart = Vi()), (this._paused = !0));
    }),
    (Gi.prototype.resume = function () {
      this._paused &&
        ((this._pausedTime += Vi() - this._pauseStart), (this._paused = !1));
    }),
    (Gi.prototype.clear = function () {
      for (var t = this._head; t; ) {
        var e = t.next;
        (t.prev = t.next = t.animation = null), (t = e);
      }
      this._head = this._tail = null;
    }),
    (Gi.prototype.isFinished = function () {
      return null == this._head;
    }),
    (Gi.prototype.animate = function (t, e) {
      (e = e || {}), this.start();
      t = new Ni(t, e.loop);
      return this.addAnimator(t), t;
    });
  var Hi,
    Wi = Gi;
  function Gi(t) {
    var e = Hi.call(this) || this;
    return (
      (e._running = !1),
      (e._time = 0),
      (e._pausedTime = 0),
      (e._pauseStart = 0),
      (e._paused = !1),
      (e.stage = (t = t || {}).stage || {}),
      e
    );
  }
  var Ui,
    Zi = b.domSupported,
    Yi =
      ((Ui = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}),
      {
        mouse: (n = [
          'click',
          'dblclick',
          'mousewheel',
          'wheel',
          'mouseout',
          'mouseup',
          'mousedown',
          'mousemove',
          'contextmenu',
        ]),
        touch: ['touchstart', 'touchend', 'touchmove'],
        pointer: N(n, function (t) {
          var e = t.replace('mouse', 'pointer');
          return Ui.hasOwnProperty(e) ? e : t;
        }),
      }),
    Xi = ['mousemove', 'mouseup'],
    qi = ['pointermove', 'pointerup'],
    ji = !1;
  function Ki(t) {
    t = t.pointerType;
    return 'pen' === t || 'touch' === t;
  }
  function $i(t) {
    t && (t.zrByTouch = !0);
  }
  function Qi(t, e) {
    for (
      var n = e, i = !1;
      n &&
      9 !== n.nodeType &&
      !(i = n.domBelongToZr || (n !== e && n === t.painterRoot));

    )
      n = n.parentNode;
    return i;
  }
  var Ji = function (t, e) {
      (this.stopPropagation = Ft),
        (this.stopImmediatePropagation = Ft),
        (this.preventDefault = Ft),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    },
    tr = {
      mousedown: function (t) {
        (t = Ce(this.dom, t)),
          (this.__mayPointerCapture = [t.zrX, t.zrY]),
          this.trigger('mousedown', t);
      },
      mousemove: function (t) {
        t = Ce(this.dom, t);
        var e = this.__mayPointerCapture;
        !e ||
          (t.zrX === e[0] && t.zrY === e[1]) ||
          this.__togglePointerCapture(!0),
          this.trigger('mousemove', t);
      },
      mouseup: function (t) {
        (t = Ce(this.dom, t)),
          this.__togglePointerCapture(!1),
          this.trigger('mouseup', t);
      },
      mouseout: function (t) {
        Qi(this, (t = Ce(this.dom, t)).toElement || t.relatedTarget) ||
          (this.__pointerCapturing && (t.zrEventControl = 'no_globalout'),
          this.trigger('mouseout', t));
      },
      wheel: function (t) {
        (ji = !0), (t = Ce(this.dom, t)), this.trigger('mousewheel', t);
      },
      mousewheel: function (t) {
        ji || ((t = Ce(this.dom, t)), this.trigger('mousewheel', t));
      },
      touchstart: function (t) {
        $i((t = Ce(this.dom, t))),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, 'start'),
          tr.mousemove.call(this, t),
          tr.mousedown.call(this, t);
      },
      touchmove: function (t) {
        $i((t = Ce(this.dom, t))),
          this.handler.processGesture(t, 'change'),
          tr.mousemove.call(this, t);
      },
      touchend: function (t) {
        $i((t = Ce(this.dom, t))),
          this.handler.processGesture(t, 'end'),
          tr.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < 300 && tr.click.call(this, t);
      },
      pointerdown: function (t) {
        tr.mousedown.call(this, t);
      },
      pointermove: function (t) {
        Ki(t) || tr.mousemove.call(this, t);
      },
      pointerup: function (t) {
        tr.mouseup.call(this, t);
      },
      pointerout: function (t) {
        Ki(t) || tr.mouseout.call(this, t);
      },
    },
    er =
      (z(['click', 'dblclick', 'contextmenu'], function (e) {
        tr[e] = function (t) {
          (t = Ce(this.dom, t)), this.trigger(e, t);
        };
      }),
      {
        pointermove: function (t) {
          Ki(t) || er.mousemove.call(this, t);
        },
        pointerup: function (t) {
          er.mouseup.call(this, t);
        },
        mousemove: function (t) {
          this.trigger('mousemove', t);
        },
        mouseup: function (t) {
          var e = this.__pointerCapturing;
          this.__togglePointerCapture(!1),
            this.trigger('mouseup', t),
            e &&
              ((t.zrEventControl = 'only_globalout'),
              this.trigger('mouseout', t));
        },
      });
  function nr(i, r) {
    var o = r.domHandlers;
    b.pointerEventsSupported
      ? z(Yi.pointer, function (e) {
          rr(r, e, function (t) {
            o[e].call(i, t);
          });
        })
      : (b.touchEventsSupported &&
          z(Yi.touch, function (n) {
            rr(r, n, function (t) {
              var e;
              o[n].call(i, t),
                ((e = r).touching = !0),
                null != e.touchTimer &&
                  (clearTimeout(e.touchTimer), (e.touchTimer = null)),
                (e.touchTimer = setTimeout(function () {
                  (e.touching = !1), (e.touchTimer = null);
                }, 700));
            });
          }),
        z(Yi.mouse, function (e) {
          rr(r, e, function (t) {
            (t = Te(t)), r.touching || o[e].call(i, t);
          });
        }));
  }
  function ir(i, r) {
    function t(n) {
      rr(
        r,
        n,
        function (t) {
          var e;
          (t = Te(t)),
            Qi(i, t.target) ||
              ((e = t),
              (t = Ce(i.dom, new Ji(i, e), !0)),
              r.domHandlers[n].call(i, t));
        },
        {capture: !0}
      );
    }
    b.pointerEventsSupported ? z(qi, t) : b.touchEventsSupported || z(Xi, t);
  }
  function rr(t, e, n, i) {
    (t.mounted[e] = n),
      (t.listenerOpts[e] = i),
      t.domTarget.addEventListener(e, n, i);
  }
  function or(t) {
    var e,
      n,
      i,
      r,
      o,
      a = t.mounted;
    for (e in a)
      a.hasOwnProperty(e) &&
        ((n = t.domTarget),
        (r = a[(i = e)]),
        (o = t.listenerOpts[e]),
        n.removeEventListener(i, r, o));
    t.mounted = {};
  }
  var ar,
    sr = function (t, e) {
      (this.mounted = {}),
        (this.listenerOpts = {}),
        (this.touching = !1),
        (this.domTarget = t),
        (this.domHandlers = e);
    },
    lr =
      (u(ur, (ar = le)),
      (ur.prototype.dispose = function () {
        or(this._localHandlerScope), Zi && or(this._globalHandlerScope);
      }),
      (ur.prototype.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || 'default');
      }),
      (ur.prototype.__togglePointerCapture = function (t) {
        var e;
        (this.__mayPointerCapture = null),
          Zi &&
            +this.__pointerCapturing ^ +t &&
            ((this.__pointerCapturing = t),
            (e = this._globalHandlerScope),
            t ? ir(this, e) : or(e));
      }),
      ur);
  function ur(t, e) {
    var n = ar.call(this) || this;
    return (
      (n.__pointerCapturing = !1),
      (n.dom = t),
      (n.painterRoot = e),
      (n._localHandlerScope = new sr(t, tr)),
      Zi && (n._globalHandlerScope = new sr(document, er)),
      nr(n, n._localHandlerScope),
      n
    );
  }
  var n = 1,
    hr = (n = b.hasGlobalWindow
      ? Math.max(
          window.devicePixelRatio ||
            (window.screen &&
              window.screen.deviceXDPI / window.screen.logicalXDPI) ||
            1,
          1
        )
      : n),
    cr = '#333',
    pr = '#ccc',
    dr = Re;
  function fr(t) {
    return 5e-5 < t || t < -5e-5;
  }
  var gr = [],
    yr = [],
    mr = Oe(),
    vr = Math.abs,
    _r =
      ((xr.prototype.getLocalTransform = function (t) {
        return xr.getLocalTransform(this, t);
      }),
      (xr.prototype.setPosition = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (xr.prototype.setScale = function (t) {
        (this.scaleX = t[0]), (this.scaleY = t[1]);
      }),
      (xr.prototype.setSkew = function (t) {
        (this.skewX = t[0]), (this.skewY = t[1]);
      }),
      (xr.prototype.setOrigin = function (t) {
        (this.originX = t[0]), (this.originY = t[1]);
      }),
      (xr.prototype.needLocalTransform = function () {
        return (
          fr(this.rotation) ||
          fr(this.x) ||
          fr(this.y) ||
          fr(this.scaleX - 1) ||
          fr(this.scaleY - 1) ||
          fr(this.skewX) ||
          fr(this.skewY)
        );
      }),
      (xr.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform;
        e || t
          ? ((n = n || Oe()),
            e ? this.getLocalTransform(n) : dr(n),
            t && (e ? ze(n, t, n) : Be(n, t)),
            (this.transform = n),
            this._resolveGlobalScaleRatio(n))
          : n && (dr(n), (this.invTransform = null));
      }),
      (xr.prototype._resolveGlobalScaleRatio = function (t) {
        var e,
          n,
          i = this.globalScaleRatio;
        null != i &&
          1 !== i &&
          (this.getGlobalScale(gr),
          (n = ((gr[1] - (n = gr[1] < 0 ? -1 : 1)) * i + n) / gr[1] || 0),
          (t[0] *= i =
            ((gr[0] - (e = gr[0] < 0 ? -1 : 1)) * i + e) / gr[0] || 0),
          (t[1] *= i),
          (t[2] *= n),
          (t[3] *= n)),
          (this.invTransform = this.invTransform || Oe()),
          Ve(this.invTransform, t);
      }),
      (xr.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
        for (; (t = e.pop()); ) t.updateTransform();
        return this.transform;
      }),
      (xr.prototype.setLocalTransform = function (t) {
        var e, n, i, r;
        t &&
          ((r = t[0] * t[0] + t[1] * t[1]),
          (i = t[2] * t[2] + t[3] * t[3]),
          (e = Math.atan2(t[1], t[0])),
          (n = Math.PI / 2 + e - Math.atan2(t[3], t[2])),
          (i = Math.sqrt(i) * Math.cos(n)),
          (r = Math.sqrt(r)),
          (this.skewX = n),
          (this.skewY = 0),
          (this.rotation = -e),
          (this.x = +t[4]),
          (this.y = +t[5]),
          (this.scaleX = r),
          (this.scaleY = i),
          (this.originX = 0),
          (this.originY = 0));
      }),
      (xr.prototype.decomposeTransform = function () {
        var t, e, n;
        this.transform &&
          ((e = this.parent),
          (t = this.transform),
          e &&
            e.transform &&
            ((e.invTransform = e.invTransform || Oe()),
            ze(yr, e.invTransform, t),
            (t = yr)),
          (e = this.originX),
          (n = this.originY),
          (e || n) &&
            ((mr[4] = e),
            (mr[5] = n),
            ze(yr, t, mr),
            (yr[4] -= e),
            (yr[5] -= n),
            (t = yr)),
          this.setLocalTransform(t));
      }),
      (xr.prototype.getGlobalScale = function (t) {
        var e = this.transform;
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]))
            : ((t[0] = 1), (t[1] = 1)),
          t
        );
      }),
      (xr.prototype.transformCoordToLocal = function (t, e) {
        (t = [t, e]), (e = this.invTransform);
        return e && ee(t, t, e), t;
      }),
      (xr.prototype.transformCoordToGlobal = function (t, e) {
        (t = [t, e]), (e = this.transform);
        return e && ee(t, t, e), t;
      }),
      (xr.prototype.getLineScale = function () {
        var t = this.transform;
        return t && 1e-10 < vr(t[0] - 1) && 1e-10 < vr(t[3] - 1)
          ? Math.sqrt(vr(t[0] * t[3] - t[2] * t[1]))
          : 1;
      }),
      (xr.prototype.copyTransform = function (t) {
        for (var e = this, n = t, i = 0; i < wr.length; i++) {
          var r = wr[i];
          e[r] = n[r];
        }
      }),
      (xr.getLocalTransform = function (t, e) {
        e = e || [];
        var n = t.originX || 0,
          i = t.originY || 0,
          r = t.scaleX,
          o = t.scaleY,
          a = t.anchorX,
          s = t.anchorY,
          l = t.rotation || 0,
          u = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          t = t.skewY ? Math.tan(-t.skewY) : 0;
        return (
          n || i || a || s
            ? ((e[4] = -(a = n + a) * r - c * (s = i + s) * o),
              (e[5] = -s * o - t * a * r))
            : (e[4] = e[5] = 0),
          (e[0] = r),
          (e[3] = o),
          (e[1] = t * r),
          (e[2] = c * o),
          l && Ne(e, e, l),
          (e[4] += n + u),
          (e[5] += i + h),
          e
        );
      }),
      (xr.initDefaultProps =
        (((n = xr.prototype).scaleX = n.scaleY = n.globalScaleRatio = 1),
        void (n.x =
          n.y =
          n.originX =
          n.originY =
          n.skewX =
          n.skewY =
          n.rotation =
          n.anchorX =
          n.anchorY =
            0))),
      xr);
  function xr() {}
  var wr = [
    'x',
    'y',
    'originX',
    'originY',
    'anchorX',
    'anchorY',
    'rotation',
    'scaleX',
    'scaleY',
    'skewX',
    'skewY',
  ];
  var br = {};
  function Sr(t, e) {
    var n = br[(e = e || j)],
      i = (n = n || (br[e] = new ni(500))).get(t);
    return null == i && ((i = W.measureText(t, e).width), n.put(t, i)), i;
  }
  function Mr(t, e, n, i) {
    (t = Sr(t, e)), (e = Dr(e)), (n = Cr(0, t, n)), (i = Ir(0, e, i));
    return new Z(n, i, t, e);
  }
  function Tr(t, e, n, i) {
    var r = ((t || '') + '').split('\n');
    if (1 === r.length) return Mr(r[0], e, n, i);
    for (var o = new Z(0, 0, 0, 0), a = 0; a < r.length; a++) {
      var s = Mr(r[a], e, n, i);
      0 === a ? o.copy(s) : o.union(s);
    }
    return o;
  }
  function Cr(t, e, n) {
    return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
  }
  function Ir(t, e, n) {
    return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t;
  }
  function Dr(t) {
    return Sr('国', t);
  }
  function kr(t, e) {
    return 'string' == typeof t
      ? 0 <= t.lastIndexOf('%')
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : t;
  }
  function Ar(t, e, n) {
    var i = e.position || 'inside',
      r = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = 'left',
      c = 'top';
    if (i instanceof Array)
      (l += kr(i[0], n.width)), (u += kr(i[1], n.height)), (c = h = null);
    else
      switch (i) {
        case 'left':
          (l -= r), (u += s), (h = 'right'), (c = 'middle');
          break;
        case 'right':
          (l += r + a), (u += s), (c = 'middle');
          break;
        case 'top':
          (l += a / 2), (u -= r), (h = 'center'), (c = 'bottom');
          break;
        case 'bottom':
          (l += a / 2), (u += o + r), (h = 'center');
          break;
        case 'inside':
          (l += a / 2), (u += s), (h = 'center'), (c = 'middle');
          break;
        case 'insideLeft':
          (l += r), (u += s), (c = 'middle');
          break;
        case 'insideRight':
          (l += a - r), (u += s), (h = 'right'), (c = 'middle');
          break;
        case 'insideTop':
          (l += a / 2), (u += r), (h = 'center');
          break;
        case 'insideBottom':
          (l += a / 2), (u += o - r), (h = 'center'), (c = 'bottom');
          break;
        case 'insideTopLeft':
          (l += r), (u += r);
          break;
        case 'insideTopRight':
          (l += a - r), (u += r), (h = 'right');
          break;
        case 'insideBottomLeft':
          (l += r), (u += o - r), (c = 'bottom');
          break;
        case 'insideBottomRight':
          (l += a - r), (u += o - r), (h = 'right'), (c = 'bottom');
      }
    return (
      ((t = t || {}).x = l), (t.y = u), (t.align = h), (t.verticalAlign = c), t
    );
  }
  var Pr,
    Lr = '__zr_normal__',
    Or = wr.concat(['ignore']),
    Rr = lt(
      wr,
      function (t, e) {
        return (t[e] = !0), t;
      },
      {ignore: !1}
    ),
    Br = {},
    zr = new Z(0, 0, 0, 0),
    n =
      ((i.prototype._init = function (t) {
        this.attr(t);
      }),
      (i.prototype.drift = function (t, e, n) {
        switch (this.draggable) {
          case 'horizontal':
            e = 0;
            break;
          case 'vertical':
            t = 0;
        }
        var i = this.transform;
        ((i = i || (this.transform = [1, 0, 0, 1, 0, 0]))[4] += t),
          (i[5] += e),
          this.decomposeTransform(),
          this.markRedraw();
      }),
      (i.prototype.beforeUpdate = function () {}),
      (i.prototype.afterUpdate = function () {}),
      (i.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText();
      }),
      (i.prototype.updateInnerText = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c = this._textContent;
        !c ||
          (c.ignore && !t) ||
          (this.textConfig || (this.textConfig = {}),
          (l = (t = this.textConfig).local),
          (i = n = void 0),
          (r = !1),
          ((e = c.innerTransformable).parent = l ? this : null),
          (h = !1),
          e.copyTransform(c),
          null != t.position &&
            ((u = zr),
            t.layoutRect
              ? u.copy(t.layoutRect)
              : u.copy(this.getBoundingRect()),
            l || u.applyTransform(this.transform),
            this.calculateTextPosition
              ? this.calculateTextPosition(Br, t, u)
              : Ar(Br, t, u),
            (e.x = Br.x),
            (e.y = Br.y),
            (n = Br.align),
            (i = Br.verticalAlign),
            (o = t.origin)) &&
            null != t.rotation &&
            ((s = a = void 0),
            (s =
              'center' === o
                ? ((a = 0.5 * u.width), 0.5 * u.height)
                : ((a = kr(o[0], u.width)), kr(o[1], u.height))),
            (h = !0),
            (e.originX = -e.x + a + (l ? 0 : u.x)),
            (e.originY = -e.y + s + (l ? 0 : u.y))),
          null != t.rotation && (e.rotation = t.rotation),
          (o = t.offset) &&
            ((e.x += o[0]),
            (e.y += o[1]),
            h || ((e.originX = -o[0]), (e.originY = -o[1]))),
          (a =
            null == t.inside
              ? 'string' == typeof t.position &&
                0 <= t.position.indexOf('inside')
              : t.inside),
          (s =
            this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {})),
          (h = u = l = void 0),
          a && this.canBeInsideText()
            ? ((l = t.insideFill),
              (u = t.insideStroke),
              (null != l && 'auto' !== l) || (l = this.getInsideTextFill()),
              (null != u && 'auto' !== u) ||
                ((u = this.getInsideTextStroke(l)), (h = !0)))
            : ((l = t.outsideFill),
              (u = t.outsideStroke),
              (null != l && 'auto' !== l) || (l = this.getOutsideFill()),
              (null != u && 'auto' !== u) ||
                ((u = this.getOutsideStroke(l)), (h = !0))),
          ((l = l || '#000') === s.fill &&
            u === s.stroke &&
            h === s.autoStroke &&
            n === s.align &&
            i === s.verticalAlign) ||
            ((r = !0),
            (s.fill = l),
            (s.stroke = u),
            (s.autoStroke = h),
            (s.align = n),
            (s.verticalAlign = i),
            c.setDefaultTextStyle(s)),
          (c.__dirty |= _n),
          r && c.dirtyStyle(!0));
      }),
      (i.prototype.canBeInsideText = function () {
        return !0;
      }),
      (i.prototype.getInsideTextFill = function () {
        return '#fff';
      }),
      (i.prototype.getInsideTextStroke = function (t) {
        return '#000';
      }),
      (i.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? pr : cr;
      }),
      (i.prototype.getOutsideStroke = function (t) {
        for (
          var e = this.__zr && this.__zr.getBackgroundColor(),
            n = 'string' == typeof e && yi(e),
            i = (n = n || [255, 255, 255, 1])[3],
            r = this.__zr.isDarkMode(),
            o = 0;
          o < 3;
          o++
        )
          n[o] = n[o] * i + (r ? 0 : 255) * (1 - i);
        return (n[3] = 1), bi(n, 'rgba');
      }),
      (i.prototype.traverse = function (t, e) {}),
      (i.prototype.attrKV = function (t, e) {
        'textConfig' === t
          ? this.setTextConfig(e)
          : 'textContent' === t
          ? this.setTextContent(e)
          : 'clipPath' === t
          ? this.setClipPath(e)
          : 'extra' === t
          ? ((this.extra = this.extra || {}), L(this.extra, e))
          : (this[t] = e);
      }),
      (i.prototype.hide = function () {
        (this.ignore = !0), this.markRedraw();
      }),
      (i.prototype.show = function () {
        (this.ignore = !1), this.markRedraw();
      }),
      (i.prototype.attr = function (t, e) {
        if ('string' == typeof t) this.attrKV(t, e);
        else if (O(t))
          for (var n = ht(t), i = 0; i < n.length; i++) {
            var r = n[i];
            this.attrKV(r, t[r]);
          }
        return this.markRedraw(), this;
      }),
      (i.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            r = i.__fromStateTransition;
          i.getLoop() ||
            (r && r !== Lr) ||
            ((r = (r = i.targetName) ? e[r] : e), i.saveTo(r));
        }
      }),
      (i.prototype._innerSaveToNormal = function (t) {
        var e = (e = this._normalState) || (this._normalState = {});
        t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, Or);
      }),
      (i.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          null == t[r] || r in e || (e[r] = this[r]);
        }
      }),
      (i.prototype.hasState = function () {
        return 0 < this.currentStates.length;
      }),
      (i.prototype.getState = function (t) {
        return this.states[t];
      }),
      (i.prototype.ensureState = function (t) {
        var e = this.states;
        return e[t] || (e[t] = {}), e[t];
      }),
      (i.prototype.clearStates = function (t) {
        this.useState(Lr, !1, t);
      }),
      (i.prototype.useState = function (t, e, n, i) {
        var r = t === Lr,
          o = this.hasState();
        if (o || !r) {
          var a,
            o = this.currentStates,
            s = this.stateTransition;
          if (!(0 <= I(o, t)) || (!e && 1 !== o.length)) {
            if (
              (a =
                (a = this.stateProxy && !r ? this.stateProxy(t) : a) ||
                (this.states && this.states[t])) ||
              r
            )
              return (
                r || this.saveCurrentToNormalState(a),
                (o = !!((a && a.hoverLayer) || i)) &&
                  this._toggleHoverLayerFlag(!0),
                this._applyStateObj(
                  t,
                  a,
                  this._normalState,
                  e,
                  !n && !this.__inHover && s && 0 < s.duration,
                  s
                ),
                (i = this._textContent),
                (s = this._textGuide),
                i && i.useState(t, e, n, o),
                s && s.useState(t, e, n, o),
                r
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !o &&
                  this.__inHover &&
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~_n)),
                a
              );
            it('State ' + t + ' not exists.');
          }
        }
      }),
      (i.prototype.useStates = function (t, e, n) {
        if (t.length) {
          var i = [],
            r = this.currentStates,
            o = t.length,
            a = o === r.length;
          if (a)
            for (var s = 0; s < o; s++)
              if (t[s] !== r[s]) {
                a = !1;
                break;
              }
          if (!a) {
            for (s = 0; s < o; s++) {
              var l = t[s],
                u = void 0;
              (u =
                (u = this.stateProxy ? this.stateProxy(l, t) : u) ||
                this.states[l]) && i.push(u);
            }
            var h = i[o - 1],
              h = !!((h && h.hoverLayer) || n),
              n = (h && this._toggleHoverLayerFlag(!0), this._mergeStates(i)),
              c = this.stateTransition,
              n =
                (this.saveCurrentToNormalState(n),
                this._applyStateObj(
                  t.join(','),
                  n,
                  this._normalState,
                  !1,
                  !e && !this.__inHover && c && 0 < c.duration,
                  c
                ),
                this._textContent),
              c = this._textGuide;
            n && n.useStates(t, e, h),
              c && c.useStates(t, e, h),
              this._updateAnimationTargets(),
              (this.currentStates = t.slice()),
              this.markRedraw(),
              !h &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~_n));
          }
        } else this.clearStates();
      }),
      (i.prototype.isSilent = function () {
        for (var t = this.silent, e = this.parent; !t && e; ) {
          if (e.silent) {
            t = !0;
            break;
          }
          e = e.parent;
        }
        return t;
      }),
      (i.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName]);
        }
      }),
      (i.prototype.removeState = function (t) {
        var e,
          t = I(this.currentStates, t);
        0 <= t &&
          ((e = this.currentStates.slice()).splice(t, 1), this.useStates(e));
      }),
      (i.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          t = I(i, t),
          r = 0 <= I(i, e);
        0 <= t ? (r ? i.splice(t, 1) : (i[t] = e)) : n && !r && i.push(e),
          this.useStates(i);
      }),
      (i.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t);
      }),
      (i.prototype._mergeStates = function (t) {
        for (var e, n = {}, i = 0; i < t.length; i++) {
          var r = t[i];
          L(n, r), r.textConfig && L((e = e || {}), r.textConfig);
        }
        return e && (n.textConfig = e), n;
      }),
      (i.prototype._applyStateObj = function (t, e, n, i, r, o) {
        for (
          var a = !(e && i),
            s =
              (e && e.textConfig
                ? ((this.textConfig = L({}, (i ? this : n).textConfig)),
                  L(this.textConfig, e.textConfig))
                : a && n.textConfig && (this.textConfig = n.textConfig),
              {}),
            l = !1,
            u = 0;
          u < Or.length;
          u++
        ) {
          var h = Or[u],
            c = r && Rr[h];
          e && null != e[h]
            ? c
              ? ((l = !0), (s[h] = e[h]))
              : (this[h] = e[h])
            : a &&
              null != n[h] &&
              (c ? ((l = !0), (s[h] = n[h])) : (this[h] = n[h]));
        }
        if (!r)
          for (u = 0; u < this.animators.length; u++) {
            var p = this.animators[u],
              d = p.targetName;
            p.getLoop() || p.__changeFinalValue(d ? (e || n)[d] : e || n);
          }
        l && this._transitionState(t, s, o);
      }),
      (i.prototype._attachComponent = function (t) {
        var e;
        (t.__zr && !t.__hostTarget) ||
          (t !== this &&
            ((e = this.__zr) && t.addSelfToZr(e),
            (t.__zr = e),
            (t.__hostTarget = this)));
      }),
      (i.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null);
      }),
      (i.prototype.getClipPath = function () {
        return this._clipPath;
      }),
      (i.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw();
      }),
      (i.prototype.removeClipPath = function () {
        var t = this._clipPath;
        t &&
          (this._detachComponent(t),
          (this._clipPath = null),
          this.markRedraw());
      }),
      (i.prototype.getTextContent = function () {
        return this._textContent;
      }),
      (i.prototype.setTextContent = function (t) {
        var e = this._textContent;
        e !== t &&
          (e && e !== t && this.removeTextContent(),
          (t.innerTransformable = new _r()),
          this._attachComponent(t),
          (this._textContent = t),
          this.markRedraw());
      }),
      (i.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          L(this.textConfig, t),
          this.markRedraw();
      }),
      (i.prototype.removeTextConfig = function () {
        (this.textConfig = null), this.markRedraw();
      }),
      (i.prototype.removeTextContent = function () {
        var t = this._textContent;
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw());
      }),
      (i.prototype.getTextGuideLine = function () {
        return this._textGuide;
      }),
      (i.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw();
      }),
      (i.prototype.removeTextGuideLine = function () {
        var t = this._textGuide;
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw());
      }),
      (i.prototype.markRedraw = function () {
        this.__dirty |= _n;
        var t = this.__zr;
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw();
      }),
      (i.prototype.dirty = function () {
        this.markRedraw();
      }),
      (i.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t;
        var e = this._textContent,
          n = this._textGuide;
        e && (e.__inHover = t), n && (n.__inHover = t);
      }),
      (i.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t);
        }
      }),
      (i.prototype.removeSelfFromZr = function (t) {
        if (this.__zr) {
          this.__zr = null;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t);
        }
      }),
      (i.prototype.animate = function (t, e, n) {
        var i = t ? this[t] : this,
          i = new Ni(i, e, n);
        return t && (i.targetName = t), this.addAnimator(i, t), i;
      }),
      (i.prototype.addAnimator = function (n, t) {
        var e = this.__zr,
          i = this;
        n
          .during(function () {
            i.updateDuringAnimation(t);
          })
          .done(function () {
            var t = i.animators,
              e = I(t, n);
            0 <= e && t.splice(e, 1);
          }),
          this.animators.push(n),
          e && e.animation.addAnimator(n),
          e && e.wakeUp();
      }),
      (i.prototype.updateDuringAnimation = function (t) {
        this.markRedraw();
      }),
      (i.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, r = [], o = 0; o < i; o++) {
          var a = n[o];
          t && t !== a.scope ? r.push(a) : a.stop(e);
        }
        return (this.animators = r), this;
      }),
      (i.prototype.animateTo = function (t, e, n) {
        Nr(this, t, e, n);
      }),
      (i.prototype.animateFrom = function (t, e, n) {
        Nr(this, t, e, n, !0);
      }),
      (i.prototype._transitionState = function (t, e, n, i) {
        for (var r = Nr(this, e, n, i), o = 0; o < r.length; o++)
          r[o].__fromStateTransition = t;
      }),
      (i.prototype.getBoundingRect = function () {
        return null;
      }),
      (i.prototype.getPaintRect = function () {
        return null;
      }),
      (i.initDefaultProps =
        (((Pr = i.prototype).type = 'element'),
        (Pr.name = ''),
        (Pr.ignore =
          Pr.silent =
          Pr.isGroup =
          Pr.draggable =
          Pr.dragging =
          Pr.ignoreClip =
          Pr.__inHover =
            !1),
        (Pr.__dirty = _n),
        void (
          Object.defineProperty &&
          (Er('position', '_legacyPos', 'x', 'y'),
          Er('scale', '_legacyScale', 'scaleX', 'scaleY'),
          Er('origin', '_legacyOrigin', 'originX', 'originY'))
        ))),
      i);
  function i(t) {
    (this.id = et++),
      (this.animators = []),
      (this.currentStates = []),
      (this.states = {}),
      this._init(t);
  }
  function Er(t, e, n, i) {
    function r(e, t) {
      Object.defineProperty(t, 0, {
        get: function () {
          return e[n];
        },
        set: function (t) {
          e[n] = t;
        },
      }),
        Object.defineProperty(t, 1, {
          get: function () {
            return e[i];
          },
          set: function (t) {
            e[i] = t;
          },
        });
    }
    Object.defineProperty(Pr, t, {
      get: function () {
        var t;
        return this[e] || ((t = this[e] = []), r(this, t)), this[e];
      },
      set: function (t) {
        (this[n] = t[0]), (this[i] = t[1]), (this[e] = t), r(this, t);
      },
    });
  }
  function Nr(t, e, n, i, r) {
    function o() {
      (u = !0), --l <= 0 && (u ? h && h() : c && c());
    }
    function a() {
      --l <= 0 && (u ? h && h() : c && c());
    }
    var s = [],
      l =
        (!(function t(e, n, i, r, o, a, s, l) {
          var u = ht(r);
          var h = o.duration;
          var c = o.delay;
          var p = o.additive;
          var d = o.setToFinal;
          var f = !O(a);
          var g = e.animators;
          var y = [];
          for (var m = 0; m < u.length; m++) {
            var v = u[m],
              _ = r[v];
            null != _ && null != i[v] && (f || a[v])
              ? !O(_) || st(_) || mt(_)
                ? y.push(v)
                : n
                ? l || ((i[v] = _), e.updateDuringAnimation(n))
                : t(e, v, i[v], _, o, a && a[v], s, l)
              : l || ((i[v] = _), e.updateDuringAnimation(n), y.push(v));
          }
          var x = y.length;
          if (!p && x)
            for (var w, b = 0; b < g.length; b++)
              (S = g[b]).targetName === n &&
                S.stopTracks(y) &&
                ((w = I(g, S)), g.splice(w, 1));
          o.force ||
            ((y = ut(y, function (t) {
              return !Hr(r[t], i[t]);
            })),
            (x = y.length));
          if (0 < x || (o.force && !s.length)) {
            var S,
              M = void 0,
              T = void 0,
              C = void 0;
            if (l) {
              (T = {}), d && (M = {});
              for (b = 0; b < x; b++) {
                v = y[b];
                (T[v] = i[v]), d ? (M[v] = r[v]) : (i[v] = r[v]);
              }
            } else if (d) {
              C = {};
              for (b = 0; b < x; b++) {
                v = y[b];
                (C[v] = Pi(i[v])), Vr(i, r, v);
              }
            }
            ((S = new Ni(
              i,
              !1,
              !1,
              p
                ? ut(g, function (t) {
                    return t.targetName === n;
                  })
                : null
            )).targetName = n),
              o.scope && (S.scope = o.scope),
              d && M && S.whenWithKeys(0, M, y),
              C && S.whenWithKeys(0, C, y),
              S.whenWithKeys(null == h ? 500 : h, l ? T : r, y).delay(c || 0),
              e.addAnimator(S, n),
              s.push(S);
          }
        })(t, '', t, e, (n = n || {}), i, s, r),
        s.length),
      u = !1,
      h = n.done,
      c = n.aborted;
    l || (h && h()),
      0 < s.length &&
        n.during &&
        s[0].during(function (t, e) {
          n.during(e);
        });
    for (var p = 0; p < s.length; p++) {
      var d = s[p];
      d.done(o),
        d.aborted(a),
        n.force && d.duration(n.duration),
        d.start(n.easing);
    }
    return s;
  }
  function Fr(t, e, n) {
    for (var i = 0; i < n; i++) t[i] = e[i];
  }
  function Vr(t, e, n) {
    if (st(e[n]))
      if ((st(t[n]) || (t[n] = []), gt(e[n]))) {
        var i = e[n].length;
        t[n].length !== i &&
          ((t[n] = new e[n].constructor(i)), Fr(t[n], e[n], i));
      } else {
        var r = e[n],
          o = t[n],
          a = r.length;
        if (st(r[0]))
          for (var s = r[0].length, l = 0; l < a; l++)
            o[l]
              ? Fr(o[l], r[l], s)
              : (o[l] = Array.prototype.slice.call(r[l]));
        else Fr(o, r, a);
        o.length = r.length;
      }
    else t[n] = e[n];
  }
  function Hr(t, e) {
    return (
      t === e ||
      (st(t) &&
        st(e) &&
        (function (t, e) {
          var n = t.length;
          if (n !== e.length) return !1;
          for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
          return !0;
        })(t, e))
    );
  }
  at(n, le), at(n, _r);
  u(Ur, (Wr = n)),
    (Ur.prototype.childrenRef = function () {
      return this._children;
    }),
    (Ur.prototype.children = function () {
      return this._children.slice();
    }),
    (Ur.prototype.childAt = function (t) {
      return this._children[t];
    }),
    (Ur.prototype.childOfName = function (t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n];
    }),
    (Ur.prototype.childCount = function () {
      return this._children.length;
    }),
    (Ur.prototype.add = function (t) {
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          (this._children.push(t), this._doAdd(t)),
        this
      );
    }),
    (Ur.prototype.addBefore = function (t, e) {
      var n;
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          e &&
          e.parent === this &&
          0 <= (e = (n = this._children).indexOf(e)) &&
          (n.splice(e, 0, t), this._doAdd(t)),
        this
      );
    }),
    (Ur.prototype.replace = function (t, e) {
      t = I(this._children, t);
      return 0 <= t && this.replaceAt(e, t), this;
    }),
    (Ur.prototype.replaceAt = function (t, e) {
      var n = this._children,
        i = n[e];
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          t !== i &&
          ((n[e] = t),
          (i.parent = null),
          (n = this.__zr) && i.removeSelfFromZr(n),
          this._doAdd(t)),
        this
      );
    }),
    (Ur.prototype._doAdd = function (t) {
      t.parent && t.parent.remove(t);
      var e = (t.parent = this).__zr;
      e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
    }),
    (Ur.prototype.remove = function (t) {
      var e = this.__zr,
        n = this._children,
        i = I(n, t);
      return (
        i < 0 ||
          (n.splice(i, 1),
          (t.parent = null),
          e && t.removeSelfFromZr(e),
          e && e.refresh()),
        this
      );
    }),
    (Ur.prototype.removeAll = function () {
      for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
        var i = t[n];
        e && i.removeSelfFromZr(e), (i.parent = null);
      }
      return (t.length = 0), this;
    }),
    (Ur.prototype.eachChild = function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i);
      }
      return this;
    }),
    (Ur.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n],
          r = t.call(e, i);
        i.isGroup && !r && i.traverse(t, e);
      }
      return this;
    }),
    (Ur.prototype.addSelfToZr = function (t) {
      Wr.prototype.addSelfToZr.call(this, t);
      for (var e = 0; e < this._children.length; e++)
        this._children[e].addSelfToZr(t);
    }),
    (Ur.prototype.removeSelfFromZr = function (t) {
      Wr.prototype.removeSelfFromZr.call(this, t);
      for (var e = 0; e < this._children.length; e++)
        this._children[e].removeSelfFromZr(t);
    }),
    (Ur.prototype.getBoundingRect = function (t) {
      for (
        var e = new Z(0, 0, 0, 0),
          n = t || this._children,
          i = [],
          r = null,
          o = 0;
        o < n.length;
        o++
      ) {
        var a,
          s = n[o];
        s.ignore ||
          s.invisible ||
          ((a = s.getBoundingRect()),
          (s = s.getLocalTransform(i))
            ? (Z.applyTransform(e, a, s), (r = r || e.clone()).union(e))
            : (r = r || a.clone()).union(a));
      }
      return r || e;
    });
  var Wr,
    Gr = Ur;
  function Ur(t) {
    var e = Wr.call(this) || this;
    return (e.isGroup = !0), (e._children = []), e.attr(t), e;
  }
  Gr.prototype.type = 'group';
  var Zr = {},
    Yr = {};
  (jr.prototype.add = function (t) {
    !this._disposed &&
      t &&
      (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }),
    (jr.prototype.remove = function (t) {
      !this._disposed &&
        t &&
        (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
    }),
    (jr.prototype.configLayer = function (t, e) {
      this._disposed ||
        (this.painter.configLayer && this.painter.configLayer(t, e),
        this.refresh());
    }),
    (jr.prototype.setBackgroundColor = function (t) {
      this._disposed ||
        (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = (function (t) {
          if (t) {
            if ('string' == typeof t) return Si(t, 1) < 0.4;
            if (t.colorStops) {
              for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++)
                n += Si(e[r].color, 1);
              return (n /= i) < 0.4;
            }
          }
          return !1;
        })(t)));
    }),
    (jr.prototype.getBackgroundColor = function () {
      return this._backgroundColor;
    }),
    (jr.prototype.setDarkMode = function (t) {
      this._darkMode = t;
    }),
    (jr.prototype.isDarkMode = function () {
      return this._darkMode;
    }),
    (jr.prototype.refreshImmediately = function (t) {
      this._disposed ||
        (t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1));
    }),
    (jr.prototype.refresh = function () {
      this._disposed || ((this._needsRefresh = !0), this.animation.start());
    }),
    (jr.prototype.flush = function () {
      this._disposed || this._flush(!1);
    }),
    (jr.prototype._flush = function (t) {
      var e,
        n = Vi(),
        t =
          (this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
          this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately()),
          Vi());
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger('rendered', {elapsedTime: t - n}))
        : 0 < this._sleepAfterStill &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill) &&
          this.animation.stop();
    }),
    (jr.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t;
    }),
    (jr.prototype.wakeUp = function () {
      this._disposed || (this.animation.start(), (this._stillFrameAccum = 0));
    }),
    (jr.prototype.refreshHover = function () {
      this._needsRefreshHover = !0;
    }),
    (jr.prototype.refreshHoverImmediately = function () {
      this._disposed ||
        ((this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          'canvas' === this.painter.getType() &&
          this.painter.refreshHover());
    }),
    (jr.prototype.resize = function (t) {
      this._disposed ||
        (this.painter.resize((t = t || {}).width, t.height),
        this.handler.resize());
    }),
    (jr.prototype.clearAnimation = function () {
      this._disposed || this.animation.clear();
    }),
    (jr.prototype.getWidth = function () {
      if (!this._disposed) return this.painter.getWidth();
    }),
    (jr.prototype.getHeight = function () {
      if (!this._disposed) return this.painter.getHeight();
    }),
    (jr.prototype.setCursorStyle = function (t) {
      this._disposed || this.handler.setCursorStyle(t);
    }),
    (jr.prototype.findHover = function (t, e) {
      if (!this._disposed) return this.handler.findHover(t, e);
    }),
    (jr.prototype.on = function (t, e, n) {
      return this._disposed || this.handler.on(t, e, n), this;
    }),
    (jr.prototype.off = function (t, e) {
      this._disposed || this.handler.off(t, e);
    }),
    (jr.prototype.trigger = function (t, e) {
      this._disposed || this.handler.trigger(t, e);
    }),
    (jr.prototype.clear = function () {
      if (!this._disposed) {
        for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
          t[e] instanceof Gr && t[e].removeSelfFromZr(this);
        this.storage.delAllRoots(), this.painter.clear();
      }
    }),
    (jr.prototype.dispose = function () {
      var t;
      this._disposed ||
        (this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        (this._disposed = !0),
        (t = this.id),
        delete Yr[t]);
    });
  var Xr,
    qr = jr;
  function jr(t, e, n) {
    var i,
      r = this,
      o =
        ((this._sleepAfterStill = 10),
        (this._stillFrameAccum = 0),
        (this._needsRefresh = !0),
        (this._needsRefreshHover = !0),
        (this._darkMode = !1),
        (n = n || {}),
        (this.dom = e),
        (this.id = t),
        new Mn()),
      a = n.renderer || 'canvas',
      a =
        (Zr[a] || (a = ht(Zr)[0]),
        (n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect),
        new Zr[a](e, o, n, t)),
      e = n.ssr || a.ssrOnly,
      t =
        ((this.storage = o),
        (this.painter = a),
        b.node || b.worker || e ? null : new lr(a.getViewportRoot(), a.root)),
      s = n.useCoarsePointer;
    (null == s || 'auto' === s ? b.touchEventsSupported : !!s) &&
      (i = R(n.pointerSize, 44)),
      (this.handler = new sn(o, a, t, a.root, i)),
      (this.animation = new Wi({
        stage: {
          update: e
            ? null
            : function () {
                return r._flush(!0);
              },
        },
      })),
      e || this.animation.start();
  }
  function Kr(t, e) {
    t = new qr(et++, t, e);
    return (Yr[t.id] = t);
  }
  function $r(t, e) {
    Zr[t] = e;
  }
  function Qr(t) {
    Xr = t;
  }
  var Jr = Object.freeze({
      __proto__: null,
      dispose: function (t) {
        t.dispose();
      },
      disposeAll: function () {
        for (var t in Yr) Yr.hasOwnProperty(t) && Yr[t].dispose();
        Yr = {};
      },
      getElementSSRData: function (t) {
        if ('function' == typeof Xr) return Xr(t);
      },
      getInstance: function (t) {
        return Yr[t];
      },
      init: Kr,
      registerPainter: $r,
      registerSSRDataGetter: Qr,
      version: '5.5.0',
    }),
    to = 20;
  function eo(t, e, n, i) {
    var r = e[0],
      e = e[1],
      o = n[0],
      n = n[1],
      a = e - r,
      s = n - o;
    if (0 == a) return 0 == s ? o : (o + n) / 2;
    if (i)
      if (0 < a) {
        if (t <= r) return o;
        if (e <= t) return n;
      } else {
        if (r <= t) return o;
        if (t <= e) return n;
      }
    else {
      if (t === r) return o;
      if (t === e) return n;
    }
    return ((t - r) / a) * s + o;
  }
  function no(t, e) {
    switch (t) {
      case 'center':
      case 'middle':
        t = '50%';
        break;
      case 'left':
      case 'top':
        t = '0%';
        break;
      case 'right':
      case 'bottom':
        t = '100%';
    }
    return V(t)
      ? t.replace(/^\s+|\s+$/g, '').match(/%$/)
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : null == t
      ? NaN
      : +t;
  }
  function io(t, e, n) {
    return (
      null == e && (e = 10),
      (e = Math.min(Math.max(0, e), to)),
      (t = (+t).toFixed(e)),
      n ? t : +t
    );
  }
  function ro(t) {
    return (
      t.sort(function (t, e) {
        return t - e;
      }),
      t
    );
  }
  function oo(t) {
    if (((t = +t), isNaN(t))) return 0;
    if (1e-14 < t)
      for (var e = 1, n = 0; n < 15; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n;
    return ao(t);
  }
  function ao(t) {
    var t = t.toString().toLowerCase(),
      e = t.indexOf('e'),
      n = 0 < e ? +t.slice(e + 1) : 0,
      e = 0 < e ? e : t.length,
      t = t.indexOf('.');
    return Math.max(0, (t < 0 ? 0 : e - 1 - t) - n);
  }
  function so(t, e) {
    var n = Math.log,
      i = Math.LN10,
      t = Math.floor(n(t[1] - t[0]) / i),
      n = Math.round(n(Math.abs(e[1] - e[0])) / i),
      e = Math.min(Math.max(-t + n, 0), 20);
    return isFinite(e) ? e : 20;
  }
  function lo(t, e) {
    var n = lt(
      t,
      function (t, e) {
        return t + (isNaN(e) ? 0 : e);
      },
      0
    );
    if (0 === n) return [];
    for (
      var i = Math.pow(10, e),
        e = N(t, function (t) {
          return ((isNaN(t) ? 0 : t) / n) * i * 100;
        }),
        r = 100 * i,
        o = N(e, function (t) {
          return Math.floor(t);
        }),
        a = lt(
          o,
          function (t, e) {
            return t + e;
          },
          0
        ),
        s = N(e, function (t, e) {
          return t - o[e];
        });
      a < r;

    ) {
      for (
        var l = Number.NEGATIVE_INFINITY, u = null, h = 0, c = s.length;
        h < c;
        ++h
      )
        s[h] > l && ((l = s[h]), (u = h));
      ++o[u], (s[u] = 0), ++a;
    }
    return N(o, function (t) {
      return t / i;
    });
  }
  function uo(t) {
    var e = 2 * Math.PI;
    return ((t % e) + e) % e;
  }
  function ho(t) {
    return -1e-4 < t && t < 1e-4;
  }
  var co =
    /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
  function po(t) {
    var e, n;
    return t instanceof Date
      ? t
      : V(t)
      ? (e = co.exec(t))
        ? e[8]
          ? ((n = +e[4] || 0),
            'Z' !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
            new Date(
              Date.UTC(
                +e[1],
                +(e[2] || 1) - 1,
                +e[3] || 1,
                n,
                +(e[5] || 0),
                +e[6] || 0,
                e[7] ? +e[7].substring(0, 3) : 0
              )
            ))
          : new Date(
              +e[1],
              +(e[2] || 1) - 1,
              +e[3] || 1,
              +e[4] || 0,
              +(e[5] || 0),
              +e[6] || 0,
              e[7] ? +e[7].substring(0, 3) : 0
            )
        : new Date(NaN)
      : null == t
      ? new Date(NaN)
      : new Date(Math.round(t));
  }
  function fo(t) {
    return Math.pow(10, go(t));
  }
  function go(t) {
    var e;
    return 0 === t
      ? 0
      : ((e = Math.floor(Math.log(t) / Math.LN10)),
        10 <= t / Math.pow(10, e) && e++,
        e);
  }
  function yo(t, e) {
    var n = go(t),
      i = Math.pow(10, n),
      r = t / i,
      e = e
        ? r < 1.5
          ? 1
          : r < 2.5
          ? 2
          : r < 4
          ? 3
          : r < 7
          ? 5
          : 10
        : r < 1
        ? 1
        : r < 2
        ? 2
        : r < 3
        ? 3
        : r < 5
        ? 5
        : 10;
    return (t = e * i), -20 <= n ? +t.toFixed(n < 0 ? -n : 0) : t;
  }
  function mo(t) {
    var e = parseFloat(t);
    return e == t && (0 !== e || !V(t) || t.indexOf('x') <= 0) ? e : NaN;
  }
  function vo(t) {
    return !isNaN(mo(t));
  }
  function _o() {
    return Math.round(9 * Math.random());
  }
  function xo(t, e) {
    return null == t
      ? e
      : null == e
      ? t
      : (t * e) /
        (function t(e, n) {
          return 0 === n ? e : t(n, e % n);
        })(t, e);
  }
  function f(t) {
    throw new Error(t);
  }
  function wo(t, e, n) {
    return (e - t) * n + t;
  }
  var bo = 'series\0';
  function So(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }
  function Mo(t, e, n) {
    if (t) {
      (t[e] = t[e] || {}),
        (t.emphasis = t.emphasis || {}),
        (t.emphasis[e] = t.emphasis[e] || {});
      for (var i = 0, r = n.length; i < r; i++) {
        var o = n[i];
        !t.emphasis[e].hasOwnProperty(o) &&
          t[e].hasOwnProperty(o) &&
          (t.emphasis[e][o] = t[e][o]);
      }
    }
  }
  var To = [
    'fontStyle',
    'fontWeight',
    'fontSize',
    'fontFamily',
    'rich',
    'tag',
    'color',
    'textBorderColor',
    'textBorderWidth',
    'width',
    'height',
    'lineHeight',
    'align',
    'verticalAlign',
    'baseline',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'textShadowColor',
    'textShadowBlur',
    'textShadowOffsetX',
    'textShadowOffsetY',
    'backgroundColor',
    'borderColor',
    'borderWidth',
    'borderRadius',
    'padding',
  ];
  function Co(t) {
    return !O(t) || F(t) || t instanceof Date ? t : t.value;
  }
  function Io(t, n, e) {
    var o,
      a,
      s,
      l,
      r,
      u,
      i,
      h,
      c,
      p,
      d = 'normalMerge' === e,
      f = 'replaceMerge' === e,
      g = 'replaceAll' === e,
      y = ((t = t || []), (n = (n || []).slice()), B()),
      e =
        (z(n, function (t, e) {
          O(t) || (n[e] = null);
        }),
        (function (t, e, n) {
          var i = [];
          if ('replaceAll' !== n)
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              o && null != o.id && e.set(o.id, r),
                i.push({
                  existing: 'replaceMerge' === n || Lo(o) ? null : o,
                  newOption: null,
                  keyInfo: null,
                  brandNew: null,
                });
            }
          return i;
        })(t, y, e));
    return (
      (d || f) &&
        ((o = e),
        (a = t),
        (s = y),
        z((l = n), function (t, e) {
          var n, i, r;
          t &&
            null != t.id &&
            ((n = ko(t.id)), null != (i = s.get(n))) &&
            (Tt(!(r = o[i]).newOption, 'Duplicated option on id "' + n + '".'),
            (r.newOption = t),
            (r.existing = a[i]),
            (l[e] = null));
        })),
      d &&
        ((r = e),
        z((u = n), function (t, e) {
          if (t && null != t.name)
            for (var n = 0; n < r.length; n++) {
              var i = r[n].existing;
              if (
                !r[n].newOption &&
                i &&
                (null == i.id || null == t.id) &&
                !Lo(t) &&
                !Lo(i) &&
                Do('name', i, t)
              )
                return (r[n].newOption = t), void (u[e] = null);
            }
        })),
      d || f
        ? ((h = e),
          (c = f),
          z(n, function (t) {
            if (t) {
              for (
                var e, n = 0;
                (e = h[n]) &&
                (e.newOption ||
                  Lo(e.existing) ||
                  (e.existing && null != t.id && !Do('id', t, e.existing)));

              )
                n++;
              e
                ? ((e.newOption = t), (e.brandNew = c))
                : h.push({
                    newOption: t,
                    brandNew: c,
                    existing: null,
                    keyInfo: null,
                  }),
                n++;
            }
          }))
        : g &&
          ((i = e),
          z(n, function (t) {
            i.push({newOption: t, brandNew: !0, existing: null, keyInfo: null});
          })),
      (t = e),
      (p = B()),
      z(t, function (t) {
        var e = t.existing;
        e && p.set(e.id, t);
      }),
      z(t, function (t) {
        var e = t.newOption;
        Tt(
          !e || null == e.id || !p.get(e.id) || p.get(e.id) === t,
          'id duplicates: ' + (e && e.id)
        ),
          e && null != e.id && p.set(e.id, t),
          t.keyInfo || (t.keyInfo = {});
      }),
      z(t, function (t, e) {
        var n = t.existing,
          i = t.newOption,
          r = t.keyInfo;
        if (O(i)) {
          if (((r.name = null != i.name ? ko(i.name) : n ? n.name : bo + e), n))
            r.id = ko(n.id);
          else if (null != i.id) r.id = ko(i.id);
          else
            for (var o = 0; (r.id = '\0' + r.name + '\0' + o++), p.get(r.id); );
          p.set(r.id, t);
        }
      }),
      e
    );
  }
  function Do(t, e, n) {
    (e = Ao(e[t], null)), (n = Ao(n[t], null));
    return null != e && null != n && e === n;
  }
  function ko(t) {
    return Ao(t, '');
  }
  function Ao(t, e) {
    return null == t ? e : V(t) ? t : dt(t) || pt(t) ? t + '' : e;
  }
  function Po(t) {
    t = t.name;
    return !(!t || !t.indexOf(bo));
  }
  function Lo(t) {
    return t && null != t.id && 0 === ko(t.id).indexOf('\0_ec_\0');
  }
  function Oo(t, r, o) {
    z(t, function (t) {
      var e,
        n,
        i = t.newOption;
      O(i) &&
        ((t.keyInfo.mainType = r),
        (t.keyInfo.subType =
          ((e = r),
          (i = i),
          (t = t.existing),
          (n = o),
          i.type || (t ? t.subType : n.determineSubType(e, i)))));
    });
  }
  function Ro(e, t) {
    return null != t.dataIndexInside
      ? t.dataIndexInside
      : null != t.dataIndex
      ? F(t.dataIndex)
        ? N(t.dataIndex, function (t) {
            return e.indexOfRawIndex(t);
          })
        : e.indexOfRawIndex(t.dataIndex)
      : null != t.name
      ? F(t.name)
        ? N(t.name, function (t) {
            return e.indexOfName(t);
          })
        : e.indexOfName(t.name)
      : void 0;
  }
  function Bo() {
    var e = '__ec_inner_' + zo++;
    return function (t) {
      return t[e] || (t[e] = {});
    };
  }
  var zo = _o();
  function Eo(n, t, i) {
    var t = No(t, i),
      e = t.mainTypeSpecified,
      r = t.queryOptionMap,
      o = t.others,
      a = i ? i.defaultMainType : null;
    return (
      !e && a && r.set(a, {}),
      r.each(function (t, e) {
        t = Ho(n, e, t, {
          useDefault: a === e,
          enableAll: !i || null == i.enableAll || i.enableAll,
          enableNone: !i || null == i.enableNone || i.enableNone,
        });
        (o[e + 'Models'] = t.models), (o[e + 'Model'] = t.models[0]);
      }),
      o
    );
  }
  function No(t, i) {
    var e = V(t) ? (((e = {})[t + 'Index'] = 0), e) : t,
      r = B(),
      o = {},
      a = !1;
    return (
      z(e, function (t, e) {
        var n;
        'dataIndex' === e || 'dataIndexInside' === e
          ? (o[e] = t)
          : ((n = (e = e.match(/^(\w+)(Index|Id|Name)$/) || [])[1]),
            (e = (e[2] || '').toLowerCase()),
            !n ||
              !e ||
              (i && i.includeMainTypes && I(i.includeMainTypes, n) < 0) ||
              ((a = a || !!n), ((r.get(n) || r.set(n, {}))[e] = t)));
      }),
      {mainTypeSpecified: a, queryOptionMap: r, others: o}
    );
  }
  var Fo = {useDefault: !0, enableAll: !1, enableNone: !1},
    Vo = {useDefault: !1, enableAll: !0, enableNone: !0};
  function Ho(t, e, n, i) {
    i = i || Fo;
    var r = n.index,
      o = n.id,
      n = n.name,
      a = {models: null, specified: null != r || null != o || null != n};
    return (
      a.specified
        ? 'none' === r || !1 === r
          ? (Tt(
              i.enableNone,
              '`"none"` or `false` is not a valid value on index option.'
            ),
            (a.models = []))
          : ('all' === r &&
              (Tt(i.enableAll, '`"all"` is not a valid value on index option.'),
              (r = o = n = null)),
            (a.models = t.queryComponents({
              mainType: e,
              index: r,
              id: o,
              name: n,
            })))
        : ((r = void 0),
          (a.models = i.useDefault && (r = t.getComponent(e)) ? [r] : [])),
      a
    );
  }
  function Wo(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
  }
  var Go = '.',
    Uo = '___EC__COMPONENT__CONTAINER___',
    Zo = '___EC__EXTENDED_CLASS___';
  function Yo(t) {
    var e = {main: '', sub: ''};
    return (
      t && ((t = t.split(Go)), (e.main = t[0] || ''), (e.sub = t[1] || '')), e
    );
  }
  function Xo(t) {
    (t.$constructor = t).extend = function (t) {
      var e,
        n,
        i,
        r = this;
      function o() {
        return n.apply(this, arguments) || this;
      }
      return (
        D((i = r)) && /^class\s/.test(Function.prototype.toString.call(i))
          ? (u(o, (n = r)), (e = o))
          : ot(
              (e = function () {
                (t.$constructor || r).apply(this, arguments);
              }),
              this
            ),
        L(e.prototype, t),
        (e[Zo] = !0),
        (e.extend = this.extend),
        (e.superCall = Ko),
        (e.superApply = $o),
        (e.superClass = r),
        e
      );
    };
  }
  function qo(t, e) {
    t.extend = e.extend;
  }
  var jo = Math.round(10 * Math.random());
  function Ko(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return this.superClass.prototype[e].apply(t, n);
  }
  function $o(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }
  function Qo(t) {
    var r = {};
    (t.registerClass = function (t) {
      var e,
        n = t.type || t.prototype.type;
      return (
        n &&
          (Tt(
            /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test((e = n)),
            'componentType "' + e + '" illegal'
          ),
          (e = Yo((t.prototype.type = n))).sub
            ? e.sub !== Uo &&
              ((function (t) {
                var e = r[t.main];
                (e && e[Uo]) ||
                  (e = r[t.main] = {___EC__COMPONENT__CONTAINER___: !0});
                return e;
              })(e)[e.sub] = t)
            : (r[e.main] = t)),
        t
      );
    }),
      (t.getClass = function (t, e, n) {
        var i = r[t];
        if ((i && i[Uo] && (i = e ? i[e] : null), n && !i))
          throw new Error(
            e
              ? 'Component ' +
                t +
                '.' +
                (e || '') +
                ' is used but not imported.'
              : t + '.type should be specified.'
          );
        return i;
      }),
      (t.getClassesByMainType = function (t) {
        var t = Yo(t),
          n = [],
          t = r[t.main];
        return (
          t && t[Uo]
            ? z(t, function (t, e) {
                e !== Uo && n.push(t);
              })
            : n.push(t),
          n
        );
      }),
      (t.hasClass = function (t) {
        t = Yo(t);
        return !!r[t.main];
      }),
      (t.getAllClassMainTypes = function () {
        var n = [];
        return (
          z(r, function (t, e) {
            n.push(e);
          }),
          n
        );
      }),
      (t.hasSubTypes = function (t) {
        (t = Yo(t)), (t = r[t.main]);
        return t && t[Uo];
      });
  }
  function Jo(a, s) {
    for (var t = 0; t < a.length; t++) a[t][1] || (a[t][1] = a[t][0]);
    return (
      (s = s || !1),
      function (t, e, n) {
        for (var i = {}, r = 0; r < a.length; r++) {
          var o = a[r][1];
          (e && 0 <= I(e, o)) ||
            (n && I(n, o) < 0) ||
            (null != (o = t.getShallow(o, s)) && (i[a[r][0]] = o));
        }
        return i;
      }
    );
  }
  var ta = Jo([
      ['fill', 'color'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['opacity'],
      ['shadowColor'],
    ]),
    ea =
      ((na.prototype.getAreaStyle = function (t, e) {
        return ta(this, t, e);
      }),
      na);
  function na() {}
  var ia = new ni(50);
  function ra(t, e, n, i, r) {
    return t
      ? 'string' == typeof t
        ? ((e && e.__zrImageSrc === t) ||
            !n ||
            ((n = {hostEl: n, cb: i, cbPayload: r}),
            (i = ia.get(t))
              ? aa((e = i.image)) || i.pending.push(n)
              : (((e = W.loadImage(t, oa, oa)).__zrImageSrc = t),
                ia.put(t, (e.__cachedImgObj = {image: e, pending: [n]})))),
          e)
        : t
      : e;
  }
  function oa() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty();
    }
    t.pending.length = 0;
  }
  function aa(t) {
    return t && t.width && t.height;
  }
  var sa = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
  function la(t, e, n, i, r) {
    if (!e) return '';
    var o = (t + '').split('\n');
    r = ua(e, n, i, r);
    for (var a = 0, s = o.length; a < s; a++) o[a] = ha(o[a], r);
    return o.join('\n');
  }
  function ua(t, e, n, i) {
    for (
      var r = L({}, (i = i || {})),
        o =
          ((r.font = e),
          (n = R(n, '...')),
          (r.maxIterations = R(i.maxIterations, 2)),
          (r.minChar = R(i.minChar, 0))),
        a = ((r.cnCharWidth = Sr('国', e)), (r.ascCharWidth = Sr('a', e))),
        s = ((r.placeholder = R(i.placeholder, '')), (t = Math.max(0, t - 1))),
        l = 0;
      l < o && a <= s;
      l++
    )
      s -= a;
    i = Sr(n, e);
    return (
      s < i && ((n = ''), (i = 0)),
      (s = t - i),
      (r.ellipsis = n),
      (r.ellipsisWidth = i),
      (r.contentWidth = s),
      (r.containerWidth = t),
      r
    );
  }
  function ha(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return '';
    var o = Sr(t, i);
    if (!(o <= n)) {
      for (var a = 0; ; a++) {
        if (o <= r || a >= e.maxIterations) {
          t += e.ellipsis;
          break;
        }
        var s =
            0 === a
              ? (function (t, e, n, i) {
                  for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
                    var s = t.charCodeAt(o);
                    r += 0 <= s && s <= 127 ? n : i;
                  }
                  return o;
                })(t, r, e.ascCharWidth, e.cnCharWidth)
              : 0 < o
              ? Math.floor((t.length * r) / o)
              : 0,
          o = Sr((t = t.substr(0, s)), i);
      }
      '' === t && (t = e.placeholder);
    }
    return t;
  }
  var ca = function () {},
    pa = function (t) {
      (this.tokens = []), t && (this.tokens = t);
    },
    da = function () {
      (this.width = 0),
        (this.height = 0),
        (this.contentWidth = 0),
        (this.contentHeight = 0),
        (this.outerWidth = 0),
        (this.outerHeight = 0),
        (this.lines = []);
    };
  function fa(t, e) {
    var n = new da();
    if ((null != t && (t += ''), t)) {
      for (
        var i,
          r = e.width,
          o = e.height,
          a = e.overflow,
          s =
            ('break' !== a && 'breakAll' !== a) || null == r
              ? null
              : {width: r, accumWidth: 0, breakAll: 'breakAll' === a},
          l = (sa.lastIndex = 0);
        null != (i = sa.exec(t));

      ) {
        var u = i.index;
        l < u && ga(n, t.substring(l, u), e, s),
          ga(n, i[2], e, s, i[1]),
          (l = sa.lastIndex);
      }
      l < t.length && ga(n, t.substring(l, t.length), e, s);
      var h,
        c = [],
        p = 0,
        d = 0,
        f = e.padding,
        g = 'truncate' === a,
        y = 'truncate' === e.lineOverflow;
      t: for (var m = 0; m < n.lines.length; m++) {
        for (
          var v = n.lines[m], _ = 0, x = 0, w = 0;
          w < v.tokens.length;
          w++
        ) {
          var b = ((k = v.tokens[w]).styleName && e.rich[k.styleName]) || {},
            S = (k.textPadding = b.padding),
            M = S ? S[1] + S[3] : 0,
            T = (k.font = b.font || e.font),
            C = ((k.contentHeight = Dr(T)), R(b.height, k.contentHeight));
          if (
            ((k.innerHeight = C),
            S && (C += S[0] + S[2]),
            (k.height = C),
            (k.lineHeight = bt(b.lineHeight, e.lineHeight, C)),
            (k.align = (b && b.align) || e.align),
            (k.verticalAlign = (b && b.verticalAlign) || 'middle'),
            y && null != o && p + k.lineHeight > o)
          ) {
            0 < w
              ? ((v.tokens = v.tokens.slice(0, w)),
                P(v, x, _),
                (n.lines = n.lines.slice(0, m + 1)))
              : (n.lines = n.lines.slice(0, m));
            break t;
          }
          var I,
            S = b.width,
            D = null == S || 'auto' === S;
          'string' == typeof S && '%' === S.charAt(S.length - 1)
            ? ((k.percentWidth = S),
              c.push(k),
              (k.contentWidth = Sr(k.text, T)))
            : (D &&
                (S = (S = b.backgroundColor) && S.image) &&
                ((I = void 0),
                aa(
                  (S =
                    'string' == typeof (h = S) ? (I = ia.get(h)) && I.image : h)
                )) &&
                (k.width = Math.max(k.width, (S.width * C) / S.height)),
              null != (I = g && null != r ? r - x : null) && I < k.width
                ? !D || I < M
                  ? ((k.text = ''), (k.width = k.contentWidth = 0))
                  : ((k.text = la(k.text, I - M, T, e.ellipsis, {
                      minChar: e.truncateMinChar,
                    })),
                    (k.width = k.contentWidth = Sr(k.text, T)))
                : (k.contentWidth = Sr(k.text, T))),
            (k.width += M),
            (x += k.width),
            b && (_ = Math.max(_, k.lineHeight));
        }
        P(v, x, _);
      }
      (n.outerWidth = n.width = R(r, d)),
        (n.outerHeight = n.height = R(o, p)),
        (n.contentHeight = p),
        (n.contentWidth = d),
        f && ((n.outerWidth += f[1] + f[3]), (n.outerHeight += f[0] + f[2]));
      for (m = 0; m < c.length; m++) {
        var k,
          A = (k = c[m]).percentWidth;
        k.width = (parseInt(A, 10) / 100) * n.width;
      }
    }
    return n;
    function P(t, e, n) {
      (t.width = e), (t.lineHeight = n), (p += n), (d = Math.max(d, e));
    }
  }
  function ga(t, e, n, i, r) {
    var o,
      a,
      s = '' === e,
      l = (r && n.rich[r]) || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1;
    i
      ? ((n = (t = l.padding) ? t[1] + t[3] : 0),
        null != l.width && 'auto' !== l.width
          ? ((t = kr(l.width, i.width) + n),
            0 < u.length &&
              t + i.accumWidth > i.width &&
              ((o = e.split('\n')), (c = !0)),
            (i.accumWidth = t))
          : ((t = ma(e, h, i.width, i.breakAll, i.accumWidth)),
            (i.accumWidth = t.accumWidth + n),
            (a = t.linesWidths),
            (o = t.lines)))
      : (o = e.split('\n'));
    for (var p = 0; p < o.length; p++) {
      var d,
        f,
        g = o[p],
        y = new ca();
      (y.styleName = r),
        (y.text = g),
        (y.isLineHolder = !g && !s),
        'number' == typeof l.width
          ? (y.width = l.width)
          : (y.width = a ? a[p] : Sr(g, h)),
        p || c
          ? u.push(new pa([y]))
          : 1 ===
              (f = (d = (u[u.length - 1] || (u[0] = new pa())).tokens)
                .length) && d[0].isLineHolder
          ? (d[0] = y)
          : (!g && f && !s) || d.push(y);
    }
  }
  var ya = lt(
    ',&?/;] '.split(''),
    function (t, e) {
      return (t[e] = !0), t;
    },
    {}
  );
  function ma(t, e, n, i, r) {
    for (
      var o, a = [], s = [], l = '', u = '', h = 0, c = 0, p = 0;
      p < t.length;
      p++
    ) {
      var d,
        f,
        g = t.charAt(p);
      '\n' === g
        ? (u && ((l += u), (c += h)),
          a.push(l),
          s.push(c),
          (u = l = ''),
          (c = h = 0))
        : ((d = Sr(g, e)),
          (f = !(
            i ||
            ((f = void 0),
            !(
              (32 <= (f = (f = o = g).charCodeAt(0)) && f <= 591) ||
              (880 <= f && f <= 4351) ||
              (4608 <= f && f <= 5119) ||
              (7680 <= f && f <= 8303)
            )) ||
            !!ya[o]
          )),
          (a.length ? n < c + d : n < r + c + d)
            ? c
              ? (l || u) &&
                (c = f
                  ? (l || ((l = u), (u = ''), (c = h = 0)),
                    a.push(l),
                    s.push(c - h),
                    (u += g),
                    (l = ''),
                    (h += d))
                  : (u && ((l += u), (u = ''), (h = 0)),
                    a.push(l),
                    s.push(c),
                    (l = g),
                    d))
              : f
              ? (a.push(u), s.push(h), (u = g), (h = d))
              : (a.push(g), s.push(d))
            : ((c += d),
              f
                ? ((u += g), (h += d))
                : (u && ((l += u), (u = ''), (h = 0)), (l += g))));
    }
    return (
      a.length || l || ((l = t), (u = ''), (h = 0)),
      u && (l += u),
      l && (a.push(l), s.push(c)),
      1 === a.length && (c += r),
      {accumWidth: c, lines: a, linesWidths: s}
    );
  }
  var va,
    _a = '__zr_style_' + Math.round(10 * Math.random()),
    xa = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: '#000',
      opacity: 1,
      blend: 'source-over',
    },
    wa = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0,
      },
    },
    ba = ((xa[_a] = !0), ['z', 'z2', 'invisible']),
    Sa = ['invisible'],
    n =
      (u(r, (va = n)),
      (r.prototype._init = function (t) {
        for (var e = ht(t), n = 0; n < e.length; n++) {
          var i = e[n];
          'style' === i
            ? this.useStyle(t[i])
            : va.prototype.attrKV.call(this, i, t[i]);
        }
        this.style || this.useStyle({});
      }),
      (r.prototype.beforeBrush = function () {}),
      (r.prototype.afterBrush = function () {}),
      (r.prototype.innerBeforeBrush = function () {}),
      (r.prototype.innerAfterBrush = function () {}),
      (r.prototype.shouldBePainted = function (t, e, n, i) {
        var r = this.transform;
        if (
          this.ignore ||
          this.invisible ||
          0 === this.style.opacity ||
          (this.culling &&
            (function (t, e, n) {
              Ma.copy(t.getBoundingRect()),
                t.transform && Ma.applyTransform(t.transform);
              return (Ta.width = e), (Ta.height = n), !Ma.intersect(Ta);
            })(this, t, e)) ||
          (r && !r[0] && !r[3])
        )
          return !1;
        if (n && this.__clipPaths)
          for (var o = 0; o < this.__clipPaths.length; ++o)
            if (this.__clipPaths[o].isZeroArea()) return !1;
        if (i && this.parent)
          for (var a = this.parent; a; ) {
            if (a.ignore) return !1;
            a = a.parent;
          }
        return !0;
      }),
      (r.prototype.contain = function (t, e) {
        return this.rectContain(t, e);
      }),
      (r.prototype.traverse = function (t, e) {
        t.call(e, this);
      }),
      (r.prototype.rectContain = function (t, e) {
        t = this.transformCoordToLocal(t, e);
        return this.getBoundingRect().contain(t[0], t[1]);
      }),
      (r.prototype.getPaintRect = function () {
        var t,
          e,
          n,
          i,
          r,
          o = this._paintRect;
        return (
          (this._paintRect && !this.__dirty) ||
            ((r = this.transform),
            (t = this.getBoundingRect()),
            (e = (i = this.style).shadowBlur || 0),
            (n = i.shadowOffsetX || 0),
            (i = i.shadowOffsetY || 0),
            (o = this._paintRect || (this._paintRect = new Z(0, 0, 0, 0))),
            r ? Z.applyTransform(o, t, r) : o.copy(t),
            (e || n || i) &&
              ((o.width += 2 * e + Math.abs(n)),
              (o.height += 2 * e + Math.abs(i)),
              (o.x = Math.min(o.x, o.x + n - e)),
              (o.y = Math.min(o.y, o.y + i - e))),
            (r = this.dirtyRectTolerance),
            o.isZero()) ||
            ((o.x = Math.floor(o.x - r)),
            (o.y = Math.floor(o.y - r)),
            (o.width = Math.ceil(o.width + 1 + 2 * r)),
            (o.height = Math.ceil(o.height + 1 + 2 * r))),
          o
        );
      }),
      (r.prototype.setPrevPaintRect = function (t) {
        t
          ? ((this._prevPaintRect = this._prevPaintRect || new Z(0, 0, 0, 0)),
            this._prevPaintRect.copy(t))
          : (this._prevPaintRect = null);
      }),
      (r.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
      }),
      (r.prototype.animateStyle = function (t) {
        return this.animate('style', t);
      }),
      (r.prototype.updateDuringAnimation = function (t) {
        'style' === t ? this.dirtyStyle() : this.markRedraw();
      }),
      (r.prototype.attrKV = function (t, e) {
        'style' !== t
          ? va.prototype.attrKV.call(this, t, e)
          : this.style
          ? this.setStyle(e)
          : this.useStyle(e);
      }),
      (r.prototype.setStyle = function (t, e) {
        return (
          'string' == typeof t ? (this.style[t] = e) : L(this.style, t),
          this.dirtyStyle(),
          this
        );
      }),
      (r.prototype.dirtyStyle = function (t) {
        t || this.markRedraw(),
          (this.__dirty |= 2),
          this._rect && (this._rect = null);
      }),
      (r.prototype.dirty = function () {
        this.dirtyStyle();
      }),
      (r.prototype.styleChanged = function () {
        return !!(2 & this.__dirty);
      }),
      (r.prototype.styleUpdated = function () {
        this.__dirty &= -3;
      }),
      (r.prototype.createStyle = function (t) {
        return zt(xa, t);
      }),
      (r.prototype.useStyle = function (t) {
        t[_a] || (t = this.createStyle(t)),
          this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
          this.dirtyStyle();
      }),
      (r.prototype.isStyleObject = function (t) {
        return t[_a];
      }),
      (r.prototype._innerSaveToNormal = function (t) {
        va.prototype._innerSaveToNormal.call(this, t);
        var e = this._normalState;
        t.style &&
          !e.style &&
          (e.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(t, e, ba);
      }),
      (r.prototype._applyStateObj = function (t, e, n, i, r, o) {
        va.prototype._applyStateObj.call(this, t, e, n, i, r, o);
        var a,
          s = !(e && i);
        if (
          (e && e.style
            ? r
              ? i
                ? (a = e.style)
                : ((a = this._mergeStyle(this.createStyle(), n.style)),
                  this._mergeStyle(a, e.style))
              : ((a = this._mergeStyle(
                  this.createStyle(),
                  (i ? this : n).style
                )),
                this._mergeStyle(a, e.style))
            : s && (a = n.style),
          a)
        )
          if (r) {
            var l = this.style;
            if (((this.style = this.createStyle(s ? {} : l)), s))
              for (var u = ht(l), h = 0; h < u.length; h++)
                (p = u[h]) in a && ((a[p] = a[p]), (this.style[p] = l[p]));
            for (var c = ht(a), h = 0; h < c.length; h++) {
              var p = c[h];
              this.style[p] = this.style[p];
            }
            this._transitionState(
              t,
              {style: a},
              o,
              this.getAnimationStyleProps()
            );
          } else this.useStyle(a);
        for (var d = this.__inHover ? Sa : ba, h = 0; h < d.length; h++) {
          p = d[h];
          e && null != e[p]
            ? (this[p] = e[p])
            : s && null != n[p] && (this[p] = n[p]);
        }
      }),
      (r.prototype._mergeStates = function (t) {
        for (
          var e, n = va.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i];
          r.style && this._mergeStyle((e = e || {}), r.style);
        }
        return e && (n.style = e), n;
      }),
      (r.prototype._mergeStyle = function (t, e) {
        return L(t, e), t;
      }),
      (r.prototype.getAnimationStyleProps = function () {
        return wa;
      }),
      (r.initDefaultProps =
        (((n = r.prototype).type = 'displayable'),
        (n.invisible = !1),
        (n.z = 0),
        (n.z2 = 0),
        (n.zlevel = 0),
        (n.culling = !1),
        (n.cursor = 'pointer'),
        (n.rectHover = !1),
        (n.incremental = !1),
        (n._rect = null),
        (n.dirtyRectTolerance = 0),
        void (n.__dirty = 2 | _n))),
      r);
  function r(t) {
    return va.call(this, t) || this;
  }
  var Ma = new Z(0, 0, 0, 0),
    Ta = new Z(0, 0, 0, 0);
  var Ca = Math.min,
    Ia = Math.max,
    Da = Math.sin,
    ka = Math.cos,
    Aa = 2 * Math.PI,
    Pa = Wt(),
    La = Wt(),
    Oa = Wt();
  function Ra(t, e, n, i, r, o) {
    (r[0] = Ca(t, n)), (r[1] = Ca(e, i)), (o[0] = Ia(t, n)), (o[1] = Ia(e, i));
  }
  var Ba = [],
    za = [];
  var Y = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7},
    Ea = [],
    Na = [],
    Fa = [],
    Va = [],
    Ha = [],
    Wa = [],
    Ga = Math.min,
    Ua = Math.max,
    Za = Math.cos,
    Ya = Math.sin,
    Xa = Math.abs,
    qa = Math.PI,
    ja = 2 * qa,
    Ka = 'undefined' != typeof Float32Array,
    $a = [];
  function Qa(t) {
    return ((Math.round((t / qa) * 1e8) / 1e8) % 2) * qa;
  }
  function Ja(t, e) {
    var n = Qa(t[0]),
      i = (n < 0 && (n += ja), n - t[0]),
      r = t[1];
    (r += i),
      !e && ja <= r - n
        ? (r = n + ja)
        : e && ja <= n - r
        ? (r = n - ja)
        : !e && r < n
        ? (r = n + (ja - Qa(n - r)))
        : e && n < r && (r = n - (ja - Qa(r - n))),
      (t[0] = n),
      (t[1] = r);
  }
  (o.prototype.increaseVersion = function () {
    this._version++;
  }),
    (o.prototype.getVersion = function () {
      return this._version;
    }),
    (o.prototype.setScale = function (t, e, n) {
      0 < (n = n || 0) &&
        ((this._ux = Xa(n / hr / t) || 0), (this._uy = Xa(n / hr / e) || 0));
    }),
    (o.prototype.setDPR = function (t) {
      this.dpr = t;
    }),
    (o.prototype.setContext = function (t) {
      this._ctx = t;
    }),
    (o.prototype.getContext = function () {
      return this._ctx;
    }),
    (o.prototype.beginPath = function () {
      return this._ctx && this._ctx.beginPath(), this.reset(), this;
    }),
    (o.prototype.reset = function () {
      this._saveData && (this._len = 0),
        this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
        this._version++;
    }),
    (o.prototype.moveTo = function (t, e) {
      return (
        this._drawPendingPt(),
        this.addData(Y.M, t, e),
        this._ctx && this._ctx.moveTo(t, e),
        (this._x0 = t),
        (this._y0 = e),
        (this._xi = t),
        (this._yi = e),
        this
      );
    }),
    (o.prototype.lineTo = function (t, e) {
      var n = Xa(t - this._xi),
        i = Xa(e - this._yi),
        r = n > this._ux || i > this._uy;
      return (
        this.addData(Y.L, t, e),
        this._ctx && r && this._ctx.lineTo(t, e),
        r
          ? ((this._xi = t), (this._yi = e), (this._pendingPtDist = 0))
          : (r = n * n + i * i) > this._pendingPtDist &&
            ((this._pendingPtX = t),
            (this._pendingPtY = e),
            (this._pendingPtDist = r)),
        this
      );
    }),
    (o.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
      return (
        this._drawPendingPt(),
        this.addData(Y.C, t, e, n, i, r, o),
        this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o),
        (this._xi = r),
        (this._yi = o),
        this
      );
    }),
    (o.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(Y.Q, t, e, n, i),
        this._ctx && this._ctx.quadraticCurveTo(t, e, n, i),
        (this._xi = n),
        (this._yi = i),
        this
      );
    }),
    (o.prototype.arc = function (t, e, n, i, r, o) {
      return (
        this._drawPendingPt(),
        ($a[0] = i),
        ($a[1] = r),
        Ja($a, o),
        this.addData(
          Y.A,
          t,
          e,
          n,
          n,
          (i = $a[0]),
          (r = $a[1]) - i,
          0,
          o ? 0 : 1
        ),
        this._ctx && this._ctx.arc(t, e, n, i, r, o),
        (this._xi = Za(r) * n + t),
        (this._yi = Ya(r) * n + e),
        this
      );
    }),
    (o.prototype.arcTo = function (t, e, n, i, r) {
      return (
        this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
      );
    }),
    (o.prototype.rect = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this._ctx && this._ctx.rect(t, e, n, i),
        this.addData(Y.R, t, e, n, i),
        this
      );
    }),
    (o.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(Y.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && t.closePath(), (this._xi = e), (this._yi = n), this;
    }),
    (o.prototype.fill = function (t) {
      t && t.fill(), this.toStatic();
    }),
    (o.prototype.stroke = function (t) {
      t && t.stroke(), this.toStatic();
    }),
    (o.prototype.len = function () {
      return this._len;
    }),
    (o.prototype.setData = function (t) {
      var e = t.length;
      (this.data && this.data.length === e) ||
        !Ka ||
        (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++) this.data[n] = t[n];
      this._len = e;
    }),
    (o.prototype.appendPath = function (t) {
      for (
        var e = (t = t instanceof Array ? t : [t]).length,
          n = 0,
          i = this._len,
          r = 0;
        r < e;
        r++
      )
        n += t[r].len();
      Ka &&
        this.data instanceof Float32Array &&
        (this.data = new Float32Array(i + n));
      for (r = 0; r < e; r++)
        for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
      this._len = i;
    }),
    (o.prototype.addData = function (t, e, n, i, r, o, a, s, l) {
      if (this._saveData) {
        var u = this.data;
        this._len + arguments.length > u.length &&
          (this._expandData(), (u = this.data));
        for (var h = 0; h < arguments.length; h++)
          u[this._len++] = arguments[h];
      }
    }),
    (o.prototype._drawPendingPt = function () {
      0 < this._pendingPtDist &&
        (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
        (this._pendingPtDist = 0));
    }),
    (o.prototype._expandData = function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t;
      }
    }),
    (o.prototype.toStatic = function () {
      var t;
      this._saveData &&
        (this._drawPendingPt(), (t = this.data) instanceof Array) &&
        ((t.length = this._len), Ka) &&
        11 < this._len &&
        (this.data = new Float32Array(t));
    }),
    (o.prototype.getBoundingRect = function () {
      (Fa[0] = Fa[1] = Ha[0] = Ha[1] = Number.MAX_VALUE),
        (Va[0] = Va[1] = Wa[0] = Wa[1] = -Number.MAX_VALUE);
      for (
        var t, e = this.data, n = 0, i = 0, r = 0, o = 0, a = 0;
        a < this._len;

      ) {
        var z = e[a++],
          E = 1 === a;
        switch ((E && ((r = n = e[a]), (o = i = e[a + 1])), z)) {
          case Y.M:
            (n = r = e[a++]),
              (i = o = e[a++]),
              (Ha[0] = r),
              (Ha[1] = o),
              (Wa[0] = r),
              (Wa[1] = o);
            break;
          case Y.L:
            Ra(n, i, e[a], e[a + 1], Ha, Wa), (n = e[a++]), (i = e[a++]);
            break;
          case Y.C:
            W =
              H =
              m =
              y =
              V =
              g =
              f =
              d =
              p =
              c =
              F =
              N =
              h =
              u =
              l =
              s =
                void 0;
            var s = n,
              l = i,
              u = e[a++],
              h = e[a++],
              N = e[a++],
              F = e[a++],
              c = e[a],
              p = e[a + 1],
              d = Ha,
              f = Wa,
              g = Hn,
              V = Nn,
              y = g(s, u, N, c, Ba);
            (d[0] = 1 / 0), (d[1] = 1 / 0), (f[0] = -1 / 0), (f[1] = -1 / 0);
            for (var m = 0; m < y; m++) {
              var H = V(s, u, N, c, Ba[m]);
              (d[0] = Ca(H, d[0])), (f[0] = Ia(H, f[0]));
            }
            for (y = g(l, h, F, p, za), m = 0; m < y; m++) {
              var W = V(l, h, F, p, za[m]);
              (d[1] = Ca(W, d[1])), (f[1] = Ia(W, f[1]));
            }
            (d[0] = Ca(s, d[0])),
              (f[0] = Ia(s, f[0])),
              (d[0] = Ca(c, d[0])),
              (f[0] = Ia(c, f[0])),
              (d[1] = Ca(l, d[1])),
              (f[1] = Ia(l, f[1])),
              (d[1] = Ca(p, d[1])),
              (f[1] = Ia(p, f[1])),
              (n = e[a++]),
              (i = e[a++]);
            break;
          case Y.Q:
            (g = n),
              (L = i),
              (M = e[a++]),
              (x = e[a++]),
              (S = e[a]),
              (v = e[a + 1]),
              (b = Ha),
              (T = Wa),
              (t = w = t = _ = void 0),
              (_ = Un),
              (t = Ia(Ca((w = Yn)(g, M, S), 1), 0)),
              (w = Ia(Ca(w(L, x, v), 1), 0)),
              (M = _(g, M, S, t)),
              (t = _(L, x, v, w)),
              (b[0] = Ca(g, S, M)),
              (b[1] = Ca(L, v, t)),
              (T[0] = Ia(g, S, M)),
              (T[1] = Ia(L, v, t)),
              (n = e[a++]),
              (i = e[a++]);
            break;
          case Y.A:
            var v,
              _ = e[a++],
              x = e[a++],
              w = e[a++],
              b = e[a++],
              S = e[a++],
              M = e[a++] + S,
              T = ((a += 1), !e[a++]),
              C =
                (E && ((r = Za(S) * w + _), (o = Ya(S) * b + x)),
                (B = v = U = G = R = O = L = P = A = k = D = I = C = void 0),
                _),
              I = x,
              D = w,
              k = b,
              A = S,
              P = M,
              L = T,
              O = Ha,
              R = Wa,
              G = ne,
              U = ie;
            if ((v = Math.abs(A - P)) % Aa < 1e-4 && 1e-4 < v)
              (O[0] = C - D), (O[1] = I - k), (R[0] = C + D), (R[1] = I + k);
            else {
              (Pa[0] = ka(A) * D + C),
                (Pa[1] = Da(A) * k + I),
                (La[0] = ka(P) * D + C),
                (La[1] = Da(P) * k + I),
                G(O, Pa, La),
                U(R, Pa, La),
                (A %= Aa) < 0 && (A += Aa),
                (P %= Aa) < 0 && (P += Aa),
                P < A && !L ? (P += Aa) : A < P && L && (A += Aa),
                L && ((v = P), (P = A), (A = v));
              for (var B = 0; B < P; B += Math.PI / 2)
                A < B &&
                  ((Oa[0] = ka(B) * D + C),
                  (Oa[1] = Da(B) * k + I),
                  G(O, Oa, O),
                  U(R, Oa, R));
            }
            (n = Za(M) * w + _), (i = Ya(M) * b + x);
            break;
          case Y.R:
            Ra(
              (r = n = e[a++]),
              (o = i = e[a++]),
              r + e[a++],
              o + e[a++],
              Ha,
              Wa
            );
            break;
          case Y.Z:
            (n = r), (i = o);
        }
        ne(Fa, Fa, Ha), ie(Va, Va, Wa);
      }
      return (
        0 === a && (Fa[0] = Fa[1] = Va[0] = Va[1] = 0),
        new Z(Fa[0], Fa[1], Va[0] - Fa[0], Va[1] - Fa[1])
      );
    }),
    (o.prototype._calculateLength = function () {
      for (
        var t = this.data,
          e = this._len,
          n = this._ux,
          i = this._uy,
          r = 0,
          o = 0,
          a = 0,
          s = 0,
          l = (this._pathSegLen || (this._pathSegLen = []), this._pathSegLen),
          u = 0,
          h = 0,
          c = 0;
        c < e;

      ) {
        var p = t[c++],
          d = 1 === c,
          f = (d && ((a = r = t[c]), (s = o = t[c + 1])), -1);
        switch (p) {
          case Y.M:
            (r = a = t[c++]), (o = s = t[c++]);
            break;
          case Y.L:
            var g = t[c++],
              y = (_ = t[c++]) - o;
            (Xa((I = g - r)) > n || Xa(y) > i || c === e - 1) &&
              ((f = Math.sqrt(I * I + y * y)), (r = g), (o = _));
            break;
          case Y.C:
            var m = t[c++],
              v = t[c++],
              g = t[c++],
              _ = t[c++],
              x = t[c++],
              w = t[c++],
              f = (function (t, e, n, i, r, o, a, s, l) {
                for (var u = t, h = e, c = 0, p = 1 / l, d = 1; d <= l; d++) {
                  var f = d * p,
                    g = Nn(t, n, r, a, f),
                    f = Nn(e, i, o, s, f),
                    y = g - u,
                    m = f - h;
                  (c += Math.sqrt(y * y + m * m)), (u = g), (h = f);
                }
                return c;
              })(r, o, m, v, g, _, x, w, 10),
              r = x,
              o = w;
            break;
          case Y.Q:
            (f = (function (t, e, n, i, r, o, a) {
              for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
                var p = c * h,
                  d = Un(t, n, r, p),
                  p = Un(e, i, o, p),
                  f = d - s,
                  g = p - l;
                (u += Math.sqrt(f * f + g * g)), (s = d), (l = p);
              }
              return u;
            })(
              r,
              o,
              (m = t[c++]),
              (v = t[c++]),
              (g = t[c++]),
              (_ = t[c++]),
              10
            )),
              (r = g),
              (o = _);
            break;
          case Y.A:
            var x = t[c++],
              w = t[c++],
              b = t[c++],
              S = t[c++],
              M = t[c++],
              T = t[c++],
              C = T + M;
            (c += 1),
              d && ((a = Za(M) * b + x), (s = Ya(M) * S + w)),
              (f = Ua(b, S) * Ga(ja, Math.abs(T))),
              (r = Za(C) * b + x),
              (o = Ya(C) * S + w);
            break;
          case Y.R:
            (a = r = t[c++]), (s = o = t[c++]);
            f = 2 * t[c++] + 2 * t[c++];
            break;
          case Y.Z:
            var I = a - r,
              y = s - o;
            (f = Math.sqrt(I * I + y * y)), (r = a), (o = s);
        }
        0 <= f && (u += l[h++] = f);
      }
      return (this._pathLen = u);
    }),
    (o.prototype.rebuildPath = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        u,
        h = this.data,
        z = this._ux,
        E = this._uy,
        N = this._len,
        c = e < 1,
        p = 0,
        d = 0,
        f = 0;
      if (
        !c ||
        (this._pathSegLen || this._calculateLength(),
        (a = this._pathSegLen),
        (s = e * this._pathLen))
      )
        t: for (var g = 0; g < N; ) {
          var y = h[g++],
            F = 1 === g;
          switch (
            (F && ((n = r = h[g]), (i = o = h[g + 1])),
            y !== Y.L && 0 < f && (t.lineTo(l, u), (f = 0)),
            y)
          ) {
            case Y.M:
              (n = r = h[g++]), (i = o = h[g++]), t.moveTo(r, o);
              break;
            case Y.L:
              var m = h[g++],
                v = h[g++],
                _ = Xa(m - r),
                x = Xa(v - o);
              if (z < _ || E < x) {
                if (c) {
                  if (s < p + (B = a[d++])) {
                    var w = (s - p) / B;
                    t.lineTo(r * (1 - w) + m * w, o * (1 - w) + v * w);
                    break t;
                  }
                  p += B;
                }
                t.lineTo(m, v), (r = m), (o = v), (f = 0);
              } else {
                _ = _ * _ + x * x;
                f < _ && ((l = m), (u = v), (f = _));
              }
              break;
            case Y.C:
              var b = h[g++],
                S = h[g++],
                M = h[g++],
                T = h[g++],
                x = h[g++],
                _ = h[g++];
              if (c) {
                if (s < p + (B = a[d++])) {
                  Wn(r, b, M, x, (w = (s - p) / B), Ea),
                    Wn(o, S, T, _, w, Na),
                    t.bezierCurveTo(Ea[1], Na[1], Ea[2], Na[2], Ea[3], Na[3]);
                  break t;
                }
                p += B;
              }
              t.bezierCurveTo(b, S, M, T, x, _), (r = x), (o = _);
              break;
            case Y.Q:
              (b = h[g++]), (S = h[g++]), (M = h[g++]), (T = h[g++]);
              if (c) {
                if (s < p + (B = a[d++])) {
                  Xn(r, b, M, (w = (s - p) / B), Ea),
                    Xn(o, S, T, w, Na),
                    t.quadraticCurveTo(Ea[1], Na[1], Ea[2], Na[2]);
                  break t;
                }
                p += B;
              }
              t.quadraticCurveTo(b, S, M, T), (r = M), (o = T);
              break;
            case Y.A:
              var C = h[g++],
                I = h[g++],
                D = h[g++],
                k = h[g++],
                A = h[g++],
                P = h[g++],
                L = h[g++],
                V = !h[g++],
                H = k < D ? D : k,
                O = 0.001 < Xa(D - k),
                R = A + P,
                W = !1;
              if (
                (c &&
                  (s < p + (B = a[d++]) &&
                    ((R = A + (P * (s - p)) / B), (W = !0)),
                  (p += B)),
                O && t.ellipse
                  ? t.ellipse(C, I, D, k, L, A, R, V)
                  : t.arc(C, I, H, A, R, V),
                W)
              )
                break t;
              F && ((n = Za(A) * D + C), (i = Ya(A) * k + I)),
                (r = Za(R) * D + C),
                (o = Ya(R) * k + I);
              break;
            case Y.R:
              (n = r = h[g]), (i = o = h[g + 1]), (m = h[g++]), (v = h[g++]);
              var B,
                P = h[g++],
                O = h[g++];
              if (c) {
                if (s < p + (B = a[d++])) {
                  L = s - p;
                  t.moveTo(m, v),
                    t.lineTo(m + Ga(L, P), v),
                    0 < (L -= P) && t.lineTo(m + P, v + Ga(L, O)),
                    0 < (L -= O) && t.lineTo(m + Ua(P - L, 0), v + O),
                    0 < (L -= P) && t.lineTo(m, v + Ua(O - L, 0));
                  break t;
                }
                p += B;
              }
              t.rect(m, v, P, O);
              break;
            case Y.Z:
              if (c) {
                if (s < p + (B = a[d++])) {
                  w = (s - p) / B;
                  t.lineTo(r * (1 - w) + n * w, o * (1 - w) + i * w);
                  break t;
                }
                p += B;
              }
              t.closePath(), (r = n), (o = i);
          }
        }
    }),
    (o.prototype.clone = function () {
      var t = new o(),
        e = this.data;
      return (
        (t.data = e.slice ? e.slice() : Array.prototype.slice.call(e)),
        (t._len = this._len),
        t
      );
    }),
    (o.CMD = Y),
    (o.initDefaultProps =
      (((fu = o.prototype)._saveData = !0),
      (fu._ux = 0),
      (fu._uy = 0),
      (fu._pendingPtDist = 0),
      void (fu._version = 0)));
  var ts = o;
  function o(t) {
    (this.dpr = 1),
      (this._xi = 0),
      (this._yi = 0),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._len = 0),
      t && (this._saveData = !1),
      this._saveData && (this.data = []);
  }
  function es(t, e, n, i, r, o, a) {
    var s;
    if (0 !== r)
      return (
        (s = 0),
        !(
          (e + (r = r) < a && i + r < a) ||
          (a < e - r && a < i - r) ||
          (t + r < o && n + r < o) ||
          (o < t - r && o < n - r)
        ) &&
          (t === n
            ? Math.abs(o - t) <= r / 2
            : ((o =
                (s = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n)) *
                o) /
                (s * s + 1) <=
              ((r / 2) * r) / 2)
      );
  }
  var ns = 2 * Math.PI;
  function is(t) {
    return (t %= ns) < 0 && (t += ns), t;
  }
  var rs = 2 * Math.PI;
  function os(t, e, n, i, r, o) {
    return (e < o && i < o) || (o < e && o < i) || i === e
      ? 0
      : (n = (o = (o - e) / (i - e)) * (n - t) + t) === r
      ? 1 / 0
      : r < n
      ? 1 != o && 0 != o
        ? i < e
          ? 1
          : -1
        : i < e
        ? 0.5
        : -0.5
      : 0;
  }
  var as = ts.CMD,
    ss = 2 * Math.PI,
    ls = 1e-4;
  var us = [-1, -1, -1],
    hs = [-1, -1];
  function cs(t, e, n, i, r, o, a, s, l, u) {
    if (
      (e < u && i < u && o < u && s < u) ||
      (u < e && u < i && u < o && u < s)
    )
      return 0;
    var h = Vn(e, i, o, s, u, us);
    if (0 === h) return 0;
    for (var c, p = 0, d = -1, f = void 0, g = void 0, y = 0; y < h; y++) {
      var m = us[y],
        v = 0 === m || 1 === m ? 0.5 : 1;
      Nn(t, n, r, a, m) < l ||
        (d < 0 &&
          ((d = Hn(e, i, o, s, hs)),
          hs[1] < hs[0] &&
            1 < d &&
            ((c = void 0), (c = hs[0]), (hs[0] = hs[1]), (hs[1] = c)),
          (f = Nn(e, i, o, s, hs[0])),
          1 < d) &&
          (g = Nn(e, i, o, s, hs[1])),
        2 === d
          ? m < hs[0]
            ? (p += f < e ? v : -v)
            : m < hs[1]
            ? (p += g < f ? v : -v)
            : (p += s < g ? v : -v)
          : m < hs[0]
          ? (p += f < e ? v : -v)
          : (p += s < f ? v : -v));
    }
    return p;
  }
  function ps(t, e, n, i, r, o, a, s) {
    if ((e < s && i < s && o < s) || (s < e && s < i && s < o)) return 0;
    (c = us),
      (h = (l = e) - 2 * (u = i) + (h = o)),
      (u = 2 * (u - l)),
      (l -= s = s),
      (s = 0),
      zn(h)
        ? En(u) && 0 <= (p = -l / u) && p <= 1 && (c[s++] = p)
        : zn((l = u * u - 4 * h * l))
        ? 0 <= (p = -u / (2 * h)) && p <= 1 && (c[s++] = p)
        : 0 < l &&
          ((d = (-u - (l = kn(l))) / (2 * h)),
          0 <= (p = (-u + l) / (2 * h)) && p <= 1 && (c[s++] = p),
          0 <= d) &&
          d <= 1 &&
          (c[s++] = d);
    var l,
      u,
      h,
      c,
      p,
      d,
      f = s;
    if (0 === f) return 0;
    var g = Yn(e, i, o);
    if (0 <= g && g <= 1) {
      for (var y = 0, m = Un(e, i, o, g), v = 0; v < f; v++) {
        var _ = 0 === us[v] || 1 === us[v] ? 0.5 : 1;
        Un(t, n, r, us[v]) < a ||
          (us[v] < g ? (y += m < e ? _ : -_) : (y += o < m ? _ : -_));
      }
      return y;
    }
    return (
      (_ = 0 === us[0] || 1 === us[0] ? 0.5 : 1),
      Un(t, n, r, us[0]) < a ? 0 : o < e ? _ : -_
    );
  }
  function ds(t, e, n, i, r) {
    for (
      var o, a = t.data, s = t.len(), l = 0, u = 0, h = 0, c = 0, p = 0, d = 0;
      d < s;

    ) {
      var f = a[d++],
        g = 1 === d;
      switch (
        (f === as.M && 1 < d && (n || (l += os(u, h, c, p, i, r))),
        g && ((c = u = a[d]), (p = h = a[d + 1])),
        f)
      ) {
        case as.M:
          (u = c = a[d++]), (h = p = a[d++]);
          break;
        case as.L:
          if (n) {
            if (es(u, h, a[d], a[d + 1], e, i, r)) return !0;
          } else l += os(u, h, a[d], a[d + 1], i, r) || 0;
          (u = a[d++]), (h = a[d++]);
          break;
        case as.C:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l, u, h) {
                if (0 !== l)
                  return (
                    !(
                      (e + (l = l) < h &&
                        i + l < h &&
                        o + l < h &&
                        s + l < h) ||
                      (h < e - l && h < i - l && h < o - l && h < s - l) ||
                      (t + l < u && n + l < u && r + l < u && a + l < u) ||
                      (u < t - l && u < n - l && u < r - l && u < a - l)
                    ) && Gn(t, e, n, i, r, o, a, s, u, h, null) <= l / 2
                  );
              })(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0;
          } else
            l +=
              cs(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, r) ||
              0;
          (u = a[d++]), (h = a[d++]);
          break;
        case as.Q:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    !(
                      (e + (a = a) < l && i + a < l && o + a < l) ||
                      (l < e - a && l < i - a && l < o - a) ||
                      (t + a < s && n + a < s && r + a < s) ||
                      (s < t - a && s < n - a && s < r - a)
                    ) && qn(t, e, n, i, r, o, s, l, null) <= a / 2
                  );
              })(u, h, a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0;
          } else l += ps(u, h, a[d++], a[d++], a[d], a[d + 1], i, r) || 0;
          (u = a[d++]), (h = a[d++]);
          break;
        case as.A:
          var y = a[d++],
            m = a[d++],
            v = a[d++],
            _ = a[d++],
            x = a[d++],
            w = a[d++],
            b = ((d += 1), !!(1 - a[d++])),
            S = Math.cos(x) * v + y,
            M = Math.sin(x) * _ + m,
            T =
              (g ? ((c = S), (p = M)) : (l += os(u, h, S, M, i, r)),
              ((i - y) * _) / v + y);
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    (a = a),
                    (s -= t),
                    (l -= e),
                    !(n < (t = Math.sqrt(s * s + l * l)) - a || t + a < n) &&
                      (Math.abs(i - r) % rs < 1e-4 ||
                        ((r = o
                          ? ((e = i), (i = is(r)), is(e))
                          : ((i = is(i)), is(r))) < i && (r += rs),
                        (t = Math.atan2(l, s)) < 0 && (t += rs),
                        i <= t && t <= r) ||
                        (i <= t + rs && t + rs <= r))
                  );
              })(y, m, _, x, x + w, b, e, T, r)
            )
              return !0;
          } else
            l += (function (t, e, n, i, r, o, a, s) {
              if (n < (s -= e) || s < -n) return 0;
              var e = Math.sqrt(n * n - s * s);
              if (((us[0] = -e), (us[1] = e), (n = Math.abs(i - r)) < 1e-4))
                return 0;
              if (ss - 1e-4 <= n)
                return (
                  (r = ss),
                  (h = o ? 1 : -1),
                  a >= us[(i = 0)] + t && a <= us[1] + t ? h : 0
                );
              r < i && ((e = i), (i = r), (r = e)),
                i < 0 && ((i += ss), (r += ss));
              for (var l = 0, u = 0; u < 2; u++) {
                var h,
                  c = us[u];
                a < c + t &&
                  ((h = o ? 1 : -1),
                  (i <= (c = (c = Math.atan2(s, c)) < 0 ? ss + c : c) &&
                    c <= r) ||
                    (i <= c + ss && c + ss <= r)) &&
                  (l += h = c > Math.PI / 2 && c < 1.5 * Math.PI ? -h : h);
              }
              return l;
            })(y, m, _, x, x + w, b, T, r);
          (u = Math.cos(x + w) * v + y), (h = Math.sin(x + w) * _ + m);
          break;
        case as.R:
          (c = u = a[d++]), (p = h = a[d++]);
          if (((S = c + a[d++]), (M = p + a[d++]), n)) {
            if (
              es(c, p, S, p, e, i, r) ||
              es(S, p, S, M, e, i, r) ||
              es(S, M, c, M, e, i, r) ||
              es(c, M, c, p, e, i, r)
            )
              return !0;
          } else l = (l += os(S, p, S, M, i, r)) + os(c, M, c, p, i, r);
          break;
        case as.Z:
          if (n) {
            if (es(u, h, c, p, e, i, r)) return !0;
          } else l += os(u, h, c, p, i, r);
          (u = c), (h = p);
      }
    }
    return (
      n ||
        ((t = h), (o = p), Math.abs(t - o) < ls) ||
        (l += os(u, h, c, p, i, r) || 0),
      0 !== l
    );
  }
  var fs,
    gs = E(
      {
        fill: '#000',
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: 'butt',
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1,
      },
      xa
    ),
    ys = {
      style: E(
        {
          fill: !0,
          stroke: !0,
          strokePercent: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineDashOffset: !0,
          lineWidth: !0,
          miterLimit: !0,
        },
        wa.style
      ),
    },
    ms = wr.concat(['invisible', 'culling', 'z', 'z2', 'zlevel', 'parent']),
    vs =
      (u(a, (fs = n)),
      (a.prototype.update = function () {
        var e = this,
          t = (fs.prototype.update.call(this), this.style);
        if (t.decal) {
          var n,
            i = (this._decalEl = this._decalEl || new a()),
            r =
              (i.buildPath === a.prototype.buildPath &&
                (i.buildPath = function (t) {
                  e.buildPath(t, e.shape);
                }),
              (i.silent = !0),
              i.style);
          for (n in t) r[n] !== t[n] && (r[n] = t[n]);
          (r.fill = t.fill ? t.decal : null),
            (r.decal = null),
            (r.shadowColor = null),
            t.strokeFirst && (r.stroke = null);
          for (var o = 0; o < ms.length; ++o) i[ms[o]] = this[ms[o]];
          i.__dirty |= _n;
        } else this._decalEl && (this._decalEl = null);
      }),
      (a.prototype.getDecalElement = function () {
        return this._decalEl;
      }),
      (a.prototype._init = function (t) {
        var e = ht(t),
          n = ((this.shape = this.getDefaultShape()), this.getDefaultStyle());
        n && this.useStyle(n);
        for (var i = 0; i < e.length; i++) {
          var r = e[i],
            o = t[r];
          'style' === r
            ? this.style
              ? L(this.style, o)
              : this.useStyle(o)
            : 'shape' === r
            ? L(this.shape, o)
            : fs.prototype.attrKV.call(this, r, o);
        }
        this.style || this.useStyle({});
      }),
      (a.prototype.getDefaultStyle = function () {
        return null;
      }),
      (a.prototype.getDefaultShape = function () {
        return {};
      }),
      (a.prototype.canBeInsideText = function () {
        return this.hasFill();
      }),
      (a.prototype.getInsideTextFill = function () {
        var t,
          e = this.style.fill;
        if ('none' !== e) {
          if (V(e)) return 0.5 < (t = Si(e, 0)) ? cr : 0.2 < t ? '#eee' : pr;
          if (e) return pr;
        }
        return cr;
      }),
      (a.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill;
        if (V(e)) {
          var n = this.__zr;
          if (!(!n || !n.isDarkMode()) == Si(t, 0) < 0.4) return e;
        }
      }),
      (a.prototype.buildPath = function (t, e, n) {}),
      (a.prototype.pathUpdated = function () {
        this.__dirty &= ~xn;
      }),
      (a.prototype.getUpdatedPathProxy = function (t) {
        return (
          this.path || this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, t),
          this.path
        );
      }),
      (a.prototype.createPathProxy = function () {
        this.path = new ts(!1);
      }),
      (a.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return !(null == e || 'none' === e || !(0 < t.lineWidth));
      }),
      (a.prototype.hasFill = function () {
        var t = this.style.fill;
        return null != t && 'none' !== t;
      }),
      (a.prototype.getBoundingRect = function () {
        var t,
          e,
          n = this._rect,
          i = this.style,
          r = !n;
        return (
          r &&
            ((t = !1),
            this.path || ((t = !0), this.createPathProxy()),
            (e = this.path),
            (t || this.__dirty & xn) &&
              (e.beginPath(),
              this.buildPath(e, this.shape, !1),
              this.pathUpdated()),
            (n = e.getBoundingRect())),
          (this._rect = n),
          this.hasStroke() && this.path && 0 < this.path.len()
            ? ((t = this._rectStroke || (this._rectStroke = n.clone())),
              (this.__dirty || r) &&
                (t.copy(n),
                (e = i.strokeNoScale ? this.getLineScale() : 1),
                (r = i.lineWidth),
                this.hasFill() ||
                  ((i = this.strokeContainThreshold),
                  (r = Math.max(r, null == i ? 4 : i))),
                1e-10 < e) &&
                ((t.width += r / e),
                (t.height += r / e),
                (t.x -= r / e / 2),
                (t.y -= r / e / 2)),
              t)
            : n
        );
      }),
      (a.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;
        if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
          n = this.path;
          if (this.hasStroke()) {
            (i = r.lineWidth), (r = r.strokeNoScale ? this.getLineScale() : 1);
            if (
              1e-10 < r &&
              (this.hasFill() || (i = Math.max(i, this.strokeContainThreshold)),
              ds(n, i / r, !0, t, e))
            )
              return !0;
          }
          if (this.hasFill()) return ds(n, 0, !1, t, e);
        }
        return !1;
      }),
      (a.prototype.dirtyShape = function () {
        (this.__dirty |= xn),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw();
      }),
      (a.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape();
      }),
      (a.prototype.animateShape = function (t) {
        return this.animate('shape', t);
      }),
      (a.prototype.updateDuringAnimation = function (t) {
        'style' === t
          ? this.dirtyStyle()
          : 'shape' === t
          ? this.dirtyShape()
          : this.markRedraw();
      }),
      (a.prototype.attrKV = function (t, e) {
        'shape' === t ? this.setShape(e) : fs.prototype.attrKV.call(this, t, e);
      }),
      (a.prototype.setShape = function (t, e) {
        var n = (n = this.shape) || (this.shape = {});
        return (
          'string' == typeof t ? (n[t] = e) : L(n, t), this.dirtyShape(), this
        );
      }),
      (a.prototype.shapeChanged = function () {
        return !!(this.__dirty & xn);
      }),
      (a.prototype.createStyle = function (t) {
        return zt(gs, t);
      }),
      (a.prototype._innerSaveToNormal = function (t) {
        fs.prototype._innerSaveToNormal.call(this, t);
        var e = this._normalState;
        t.shape && !e.shape && (e.shape = L({}, this.shape));
      }),
      (a.prototype._applyStateObj = function (t, e, n, i, r, o) {
        fs.prototype._applyStateObj.call(this, t, e, n, i, r, o);
        var a,
          s = !(e && i);
        if (
          (e && e.shape
            ? r
              ? i
                ? (a = e.shape)
                : ((a = L({}, n.shape)), L(a, e.shape))
              : ((a = L({}, (i ? this : n).shape)), L(a, e.shape))
            : s && (a = n.shape),
          a)
        )
          if (r) {
            this.shape = L({}, this.shape);
            for (var l = {}, u = ht(a), h = 0; h < u.length; h++) {
              var c = u[h];
              'object' == typeof a[c] ? (this.shape[c] = a[c]) : (l[c] = a[c]);
            }
            this._transitionState(t, {shape: l}, o);
          } else (this.shape = a), this.dirtyShape();
      }),
      (a.prototype._mergeStates = function (t) {
        for (
          var e, n = fs.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i];
          r.shape && this._mergeStyle((e = e || {}), r.shape);
        }
        return e && (n.shape = e), n;
      }),
      (a.prototype.getAnimationStyleProps = function () {
        return ys;
      }),
      (a.prototype.isZeroArea = function () {
        return !1;
      }),
      (a.extend = function (n) {
        u(r, (i = a)),
          (r.prototype.getDefaultStyle = function () {
            return y(n.style);
          }),
          (r.prototype.getDefaultShape = function () {
            return y(n.shape);
          });
        var i,
          t,
          e = r;
        function r(t) {
          var e = i.call(this, t) || this;
          return n.init && n.init.call(e, t), e;
        }
        for (t in n) 'function' == typeof n[t] && (e.prototype[t] = n[t]);
        return e;
      }),
      (a.initDefaultProps =
        (((fu = a.prototype).type = 'path'),
        (fu.strokeContainThreshold = 5),
        (fu.segmentIgnoreThreshold = 0),
        (fu.subPixelOptimize = !1),
        (fu.autoBatch = !1),
        void (fu.__dirty = 2 | _n | xn))),
      a);
  function a(t) {
    return fs.call(this, t) || this;
  }
  var _s,
    xs = E(
      {
        strokeFirst: !0,
        font: j,
        x: 0,
        y: 0,
        textAlign: 'left',
        textBaseline: 'top',
        miterLimit: 2,
      },
      gs
    ),
    ws =
      (u(bs, (_s = n)),
      (bs.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return null != e && 'none' !== e && 0 < t.lineWidth;
      }),
      (bs.prototype.hasFill = function () {
        var t = this.style.fill;
        return null != t && 'none' !== t;
      }),
      (bs.prototype.createStyle = function (t) {
        return zt(xs, t);
      }),
      (bs.prototype.setBoundingRect = function (t) {
        this._rect = t;
      }),
      (bs.prototype.getBoundingRect = function () {
        var t,
          e = this.style;
        return (
          this._rect ||
            (null != (t = e.text) ? (t += '') : (t = ''),
            ((t = Tr(t, e.font, e.textAlign, e.textBaseline)).x += e.x || 0),
            (t.y += e.y || 0),
            this.hasStroke() &&
              ((e = e.lineWidth),
              (t.x -= e / 2),
              (t.y -= e / 2),
              (t.width += e),
              (t.height += e)),
            (this._rect = t)),
          this._rect
        );
      }),
      (bs.initDefaultProps = void (bs.prototype.dirtyRectTolerance = 10)),
      bs);
  function bs() {
    return (null !== _s && _s.apply(this, arguments)) || this;
  }
  ws.prototype.type = 'tspan';
  var Ss = E({x: 0, y: 0}, xa),
    Ms = {
      style: E(
        {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          sx: !0,
          sy: !0,
          sWidth: !0,
          sHeight: !0,
        },
        wa.style
      ),
    };
  u(Is, (Ts = n)),
    (Is.prototype.createStyle = function (t) {
      return zt(Ss, t);
    }),
    (Is.prototype._getSize = function (t) {
      var e,
        n = this.style,
        i = n[t];
      return null != i
        ? i
        : (i =
            (i = n.image) && 'string' != typeof i && i.width && i.height
              ? n.image
              : this.__image)
        ? null == (e = n[(n = 'width' === t ? 'height' : 'width')])
          ? i[t]
          : (i[t] / i[n]) * e
        : 0;
    }),
    (Is.prototype.getWidth = function () {
      return this._getSize('width');
    }),
    (Is.prototype.getHeight = function () {
      return this._getSize('height');
    }),
    (Is.prototype.getAnimationStyleProps = function () {
      return Ms;
    }),
    (Is.prototype.getBoundingRect = function () {
      var t = this.style;
      return (
        this._rect ||
          (this._rect = new Z(
            t.x || 0,
            t.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      );
    });
  var Ts,
    Cs = Is;
  function Is() {
    return (null !== Ts && Ts.apply(this, arguments)) || this;
  }
  Cs.prototype.type = 'image';
  var Ds = Math.round;
  function ks(t, e, n) {
    var i, r, o;
    if (e)
      return (
        (i = e.x1),
        (r = e.x2),
        (o = e.y1),
        (e = e.y2),
        (t.x1 = i),
        (t.x2 = r),
        (t.y1 = o),
        (t.y2 = e),
        (n = n && n.lineWidth) &&
          (Ds(2 * i) === Ds(2 * r) && (t.x1 = t.x2 = Ps(i, n, !0)),
          Ds(2 * o) === Ds(2 * e)) &&
          (t.y1 = t.y2 = Ps(o, n, !0)),
        t
      );
  }
  function As(t, e, n) {
    var i, r, o;
    if (e)
      return (
        (i = e.x),
        (r = e.y),
        (o = e.width),
        (e = e.height),
        (t.x = i),
        (t.y = r),
        (t.width = o),
        (t.height = e),
        (n = n && n.lineWidth) &&
          ((t.x = Ps(i, n, !0)),
          (t.y = Ps(r, n, !0)),
          (t.width = Math.max(Ps(i + o, n, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Ps(r + e, n, !1) - t.y, 0 === e ? 0 : 1))),
        t
      );
  }
  function Ps(t, e, n) {
    var i;
    return e
      ? ((i = Ds(2 * t)) + Ds(e)) % 2 == 0
        ? i / 2
        : (i + (n ? 1 : -1)) / 2
      : t;
  }
  var Ls,
    Os = function () {
      (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
    },
    Rs = {},
    Bs =
      (u(zs, (Ls = vs)),
      (zs.prototype.getDefaultShape = function () {
        return new Os();
      }),
      (zs.prototype.buildPath = function (t, e) {
        var n, i, r, o, a, s, l, u, h, c, p, d, f, g;
        this.subPixelOptimize
          ? ((n = (a = As(Rs, e, this.style)).x),
            (i = a.y),
            (r = a.width),
            (o = a.height),
            (a.r = e.r),
            (e = a))
          : ((n = e.x), (i = e.y), (r = e.width), (o = e.height)),
          e.r
            ? ((a = t),
              (p = (e = e).x),
              (d = e.y),
              (f = e.width),
              (g = e.height),
              (e = e.r),
              f < 0 && ((p += f), (f = -f)),
              g < 0 && ((d += g), (g = -g)),
              'number' == typeof e
                ? (s = l = u = h = e)
                : e instanceof Array
                ? 1 === e.length
                  ? (s = l = u = h = e[0])
                  : 2 === e.length
                  ? ((s = u = e[0]), (l = h = e[1]))
                  : 3 === e.length
                  ? ((s = e[0]), (l = h = e[1]), (u = e[2]))
                  : ((s = e[0]), (l = e[1]), (u = e[2]), (h = e[3]))
                : (s = l = u = h = 0),
              f < s + l && ((s *= f / (c = s + l)), (l *= f / c)),
              f < u + h && ((u *= f / (c = u + h)), (h *= f / c)),
              g < l + u && ((l *= g / (c = l + u)), (u *= g / c)),
              g < s + h && ((s *= g / (c = s + h)), (h *= g / c)),
              a.moveTo(p + s, d),
              a.lineTo(p + f - l, d),
              0 !== l && a.arc(p + f - l, d + l, l, -Math.PI / 2, 0),
              a.lineTo(p + f, d + g - u),
              0 !== u && a.arc(p + f - u, d + g - u, u, 0, Math.PI / 2),
              a.lineTo(p + h, d + g),
              0 !== h && a.arc(p + h, d + g - h, h, Math.PI / 2, Math.PI),
              a.lineTo(p, d + s),
              0 !== s && a.arc(p + s, d + s, s, Math.PI, 1.5 * Math.PI))
            : t.rect(n, i, r, o);
      }),
      (zs.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
      }),
      zs);
  function zs(t) {
    return Ls.call(this, t) || this;
  }
  Bs.prototype.type = 'rect';
  var Es,
    Ns = {fill: '#000'},
    Fs = {
      style: E(
        {
          fill: !0,
          stroke: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineWidth: !0,
          fontSize: !0,
          lineHeight: !0,
          width: !0,
          height: !0,
          textShadowColor: !0,
          textShadowBlur: !0,
          textShadowOffsetX: !0,
          textShadowOffsetY: !0,
          backgroundColor: !0,
          padding: !0,
          borderColor: !0,
          borderWidth: !0,
          borderRadius: !0,
        },
        wa.style
      ),
    },
    Vs =
      (u(Hs, (Es = n)),
      (Hs.prototype.childrenRef = function () {
        return this._children;
      }),
      (Hs.prototype.update = function () {
        Es.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts();
        for (var t = 0; t < this._children.length; t++) {
          var e = this._children[t];
          (e.zlevel = this.zlevel),
            (e.z = this.z),
            (e.z2 = this.z2),
            (e.culling = this.culling),
            (e.cursor = this.cursor),
            (e.invisible = this.invisible);
        }
      }),
      (Hs.prototype.updateTransform = function () {
        var t = this.innerTransformable;
        t
          ? (t.updateTransform(), t.transform && (this.transform = t.transform))
          : Es.prototype.updateTransform.call(this);
      }),
      (Hs.prototype.getLocalTransform = function (t) {
        var e = this.innerTransformable;
        return e
          ? e.getLocalTransform(t)
          : Es.prototype.getLocalTransform.call(this, t);
      }),
      (Hs.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          Es.prototype.getComputedTransform.call(this)
        );
      }),
      (Hs.prototype._updateSubTexts = function () {
        var t;
        (this._childCursor = 0),
          Ys((t = this.style)),
          z(t.rich, Ys),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated();
      }),
      (Hs.prototype.addSelfToZr = function (t) {
        Es.prototype.addSelfToZr.call(this, t);
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = t;
      }),
      (Hs.prototype.removeSelfFromZr = function (t) {
        Es.prototype.removeSelfFromZr.call(this, t);
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = null;
      }),
      (Hs.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var t = new Z(0, 0, 0, 0),
              e = this._children,
              n = [],
              i = null,
              r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r],
              a = o.getBoundingRect(),
              o = o.getLocalTransform(n);
            o
              ? (t.copy(a), t.applyTransform(o), (i = i || t.clone()).union(t))
              : (i = i || a.clone()).union(a);
          }
          this._rect = i || t;
        }
        return this._rect;
      }),
      (Hs.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || Ns;
      }),
      (Hs.prototype.setTextContent = function (t) {}),
      (Hs.prototype._mergeStyle = function (t, e) {
        var n, i;
        return (
          e &&
            ((n = e.rich),
            (i = t.rich || (n && {})),
            L(t, e),
            n && i ? (this._mergeRich(i, n), (t.rich = i)) : i && (t.rich = i)),
          t
        );
      }),
      (Hs.prototype._mergeRich = function (t, e) {
        for (var n = ht(e), i = 0; i < n.length; i++) {
          var r = n[i];
          (t[r] = t[r] || {}), L(t[r], e[r]);
        }
      }),
      (Hs.prototype.getAnimationStyleProps = function () {
        return Fs;
      }),
      (Hs.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor];
        return (
          (e && e instanceof t) || (e = new t()),
          ((this._children[this._childCursor++] = e).__zr = this.__zr),
          (e.parent = this),
          e
        );
      }),
      (Hs.prototype._updatePlainTexts = function () {
        for (
          var t,
            e = this.style,
            n = e.font || j,
            i = e.padding,
            r = (function (t, e) {
              null != t && (t += '');
              var n,
                i = e.overflow,
                r = e.padding,
                o = e.font,
                a = 'truncate' === i,
                s = Dr(o),
                l = R(e.lineHeight, s),
                u = !!e.backgroundColor,
                h = 'truncate' === e.lineOverflow,
                c = e.width,
                i =
                  (n =
                    null == c || ('break' !== i && 'breakAll' !== i)
                      ? t
                        ? t.split('\n')
                        : []
                      : t
                      ? ma(t, e.font, c, 'breakAll' === i, 0).lines
                      : []).length * l,
                p = R(e.height, i);
              if (
                (p < i && h && ((h = Math.floor(p / l)), (n = n.slice(0, h))),
                t && a && null != c)
              )
                for (
                  var d = ua(c, o, e.ellipsis, {
                      minChar: e.truncateMinChar,
                      placeholder: e.placeholder,
                    }),
                    f = 0;
                  f < n.length;
                  f++
                )
                  n[f] = ha(n[f], d);
              for (var h = p, g = 0, f = 0; f < n.length; f++)
                g = Math.max(Sr(n[f], o), g);
              return (
                null == c && (c = g),
                (t = g),
                r &&
                  ((h += r[0] + r[2]), (t += r[1] + r[3]), (c += r[1] + r[3])),
                {
                  lines: n,
                  height: p,
                  outerWidth: (t = u ? c : t),
                  outerHeight: h,
                  lineHeight: l,
                  calculatedLineHeight: s,
                  contentWidth: g,
                  contentHeight: i,
                  width: c,
                }
              );
            })(Ks(e), e),
            o = $s(e),
            a = !!e.backgroundColor,
            s = r.outerHeight,
            l = r.outerWidth,
            u = r.contentWidth,
            h = r.lines,
            c = r.lineHeight,
            p = this._defaultStyle,
            d = e.x || 0,
            f = e.y || 0,
            g = e.align || p.align || 'left',
            y = e.verticalAlign || p.verticalAlign || 'top',
            m = d,
            v = Ir(f, r.contentHeight, y),
            _ =
              ((o || i) &&
                ((t = Cr(d, l, g)), (f = Ir(f, s, y)), o) &&
                this._renderBackground(e, e, t, f, l, s),
              (v += c / 2),
              i &&
                ((m = js(d, g, i)),
                'top' === y ? (v += i[0]) : 'bottom' === y && (v -= i[2])),
              0),
            o = !1,
            x = qs((('fill' in e) ? e : ((o = !0), p)).fill),
            w = Xs(
              ('stroke' in e)
                ? e.stroke
                : a || (p.autoStroke && !o)
                ? null
                : ((_ = 2), p.stroke)
            ),
            b = 0 < e.textShadowBlur,
            S =
              null != e.width &&
              ('truncate' === e.overflow ||
                'break' === e.overflow ||
                'breakAll' === e.overflow),
            M = r.calculatedLineHeight,
            T = 0;
          T < h.length;
          T++
        ) {
          var C = this._getOrCreateChild(ws),
            I = C.createStyle();
          C.useStyle(I),
            (I.text = h[T]),
            (I.x = m),
            (I.y = v),
            g && (I.textAlign = g),
            (I.textBaseline = 'middle'),
            (I.opacity = e.opacity),
            (I.strokeFirst = !0),
            b &&
              ((I.shadowBlur = e.textShadowBlur || 0),
              (I.shadowColor = e.textShadowColor || 'transparent'),
              (I.shadowOffsetX = e.textShadowOffsetX || 0),
              (I.shadowOffsetY = e.textShadowOffsetY || 0)),
            (I.stroke = w),
            (I.fill = x),
            w &&
              ((I.lineWidth = e.lineWidth || _),
              (I.lineDash = e.lineDash),
              (I.lineDashOffset = e.lineDashOffset || 0)),
            (I.font = n),
            Zs(I, e),
            (v += c),
            S &&
              C.setBoundingRect(
                new Z(
                  Cr(I.x, e.width, I.textAlign),
                  Ir(I.y, M, I.textBaseline),
                  u,
                  M
                )
              );
        }
      }),
      (Hs.prototype._updateRichTexts = function () {
        for (
          var t = this.style,
            e = fa(Ks(t), t),
            n = e.width,
            i = e.outerWidth,
            r = e.outerHeight,
            o = t.padding,
            a = t.x || 0,
            s = t.y || 0,
            l = this._defaultStyle,
            u = t.align || l.align,
            l = t.verticalAlign || l.verticalAlign,
            a = Cr(a, i, u),
            u = Ir(s, r, l),
            h = a,
            c = u,
            p = (o && ((h += o[3]), (c += o[0])), h + n),
            d =
              ($s(t) && this._renderBackground(t, t, a, u, i, r),
              !!t.backgroundColor),
            f = 0;
          f < e.lines.length;
          f++
        ) {
          for (
            var g = e.lines[f],
              y = g.tokens,
              m = y.length,
              v = g.lineHeight,
              _ = g.width,
              x = 0,
              w = h,
              b = p,
              S = m - 1,
              M = void 0;
            x < m && (!(M = y[x]).align || 'left' === M.align);

          )
            this._placeToken(M, t, v, c, w, 'left', d),
              (_ -= M.width),
              (w += M.width),
              x++;
          for (; 0 <= S && 'right' === (M = y[S]).align; )
            this._placeToken(M, t, v, c, b, 'right', d),
              (_ -= M.width),
              (b -= M.width),
              S--;
          for (w += (n - (w - h) - (p - b) - _) / 2; x <= S; )
            (M = y[x]),
              this._placeToken(M, t, v, c, w + M.width / 2, 'center', d),
              (w += M.width),
              x++;
          c += v;
        }
      }),
      (Hs.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {},
          l = ((s.text = t.text), t.verticalAlign),
          u = i + n / 2;
        'top' === l
          ? (u = i + t.height / 2)
          : 'bottom' === l && (u = i + n - t.height / 2);
        !t.isLineHolder &&
          $s(s) &&
          this._renderBackground(
            s,
            e,
            'right' === o ? r - t.width : 'center' === o ? r - t.width / 2 : r,
            u - t.height / 2,
            t.width,
            t.height
          );
        var l = !!s.backgroundColor,
          i = t.textPadding,
          n =
            (i &&
              ((r = js(r, o, i)),
              (u -= t.height / 2 - i[0] - t.innerHeight / 2)),
            this._getOrCreateChild(ws)),
          i = n.createStyle(),
          h = (n.useStyle(i), this._defaultStyle),
          c = !1,
          p = 0,
          d = qs(('fill' in s ? s : 'fill' in e ? e : ((c = !0), h)).fill),
          l = Xs(
            'stroke' in s
              ? s.stroke
              : 'stroke' in e
              ? e.stroke
              : l || a || (h.autoStroke && !c)
              ? null
              : ((p = 2), h.stroke)
          ),
          a = 0 < s.textShadowBlur || 0 < e.textShadowBlur,
          c =
            ((i.text = t.text),
            (i.x = r),
            (i.y = u),
            a &&
              ((i.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
              (i.shadowColor =
                s.textShadowColor || e.textShadowColor || 'transparent'),
              (i.shadowOffsetX =
                s.textShadowOffsetX || e.textShadowOffsetX || 0),
              (i.shadowOffsetY =
                s.textShadowOffsetY || e.textShadowOffsetY || 0)),
            (i.textAlign = o),
            (i.textBaseline = 'middle'),
            (i.font = t.font || j),
            (i.opacity = bt(s.opacity, e.opacity, 1)),
            Zs(i, s),
            l &&
              ((i.lineWidth = bt(s.lineWidth, e.lineWidth, p)),
              (i.lineDash = R(s.lineDash, e.lineDash)),
              (i.lineDashOffset = e.lineDashOffset || 0),
              (i.stroke = l)),
            d && (i.fill = d),
            t.contentWidth),
          h = t.contentHeight;
        n.setBoundingRect(
          new Z(Cr(i.x, c, i.textAlign), Ir(i.y, h, i.textBaseline), c, h)
        );
      }),
      (Hs.prototype._renderBackground = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h = t.backgroundColor,
          c = t.borderWidth,
          p = t.borderColor,
          d = h && h.image,
          f = h && !d,
          g = t.borderRadius,
          y = this,
          g =
            ((f || t.lineHeight || (c && p)) &&
              ((a = this._getOrCreateChild(Bs)).useStyle(a.createStyle()),
              (a.style.fill = null),
              ((l = a.shape).x = n),
              (l.y = i),
              (l.width = r),
              (l.height = o),
              (l.r = g),
              a.dirtyShape()),
            f
              ? (((u = a.style).fill = h || null),
                (u.fillOpacity = R(t.fillOpacity, 1)))
              : d &&
                (((s = this._getOrCreateChild(Cs)).onload = function () {
                  y.dirtyStyle();
                }),
                ((l = s.style).image = h.image),
                (l.x = n),
                (l.y = i),
                (l.width = r),
                (l.height = o)),
            c &&
              p &&
              (((u = a.style).lineWidth = c),
              (u.stroke = p),
              (u.strokeOpacity = R(t.strokeOpacity, 1)),
              (u.lineDash = t.borderDash),
              (u.lineDashOffset = t.borderDashOffset || 0),
              (a.strokeContainThreshold = 0),
              a.hasFill()) &&
              a.hasStroke() &&
              ((u.strokeFirst = !0), (u.lineWidth *= 2)),
            (a || s).style);
        (g.shadowBlur = t.shadowBlur || 0),
          (g.shadowColor = t.shadowColor || 'transparent'),
          (g.shadowOffsetX = t.shadowOffsetX || 0),
          (g.shadowOffsetY = t.shadowOffsetY || 0),
          (g.opacity = bt(t.opacity, e.opacity, 1));
      }),
      (Hs.makeFont = function (t) {
        var e,
          n = '';
        return (
          ((n =
            null != (e = t).fontSize || e.fontFamily || e.fontWeight
              ? [
                  t.fontStyle,
                  t.fontWeight,
                  'string' != typeof (e = t.fontSize) ||
                  (-1 === e.indexOf('px') &&
                    -1 === e.indexOf('rem') &&
                    -1 === e.indexOf('em'))
                    ? isNaN(+e)
                      ? '12px'
                      : e + 'px'
                    : e,
                  t.fontFamily || 'sans-serif',
                ].join(' ')
              : n) &&
            Ct(n)) ||
          t.textFont ||
          t.font
        );
      }),
      Hs);
  function Hs(t) {
    var e = Es.call(this) || this;
    return (
      (e.type = 'text'),
      (e._children = []),
      (e._defaultStyle = Ns),
      e.attr(t),
      e
    );
  }
  var Ws = {left: !0, right: 1, center: 1},
    Gs = {top: 1, bottom: 1, middle: 1},
    Us = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily'];
  function Zs(t, e) {
    for (var n = 0; n < Us.length; n++) {
      var i = Us[n],
        r = e[i];
      null != r && (t[i] = r);
    }
  }
  function Ys(t) {
    var e;
    t &&
      ((t.font = Vs.makeFont(t)),
      (e = t.align),
      (t.align =
        null == (e = 'middle' === e ? 'center' : e) || Ws[e] ? e : 'left'),
      (e = t.verticalAlign),
      (t.verticalAlign =
        null == (e = 'center' === e ? 'middle' : e) || Gs[e] ? e : 'top'),
      t.padding) &&
      (t.padding = Mt(t.padding));
  }
  function Xs(t, e) {
    return null == t || e <= 0 || 'transparent' === t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t;
  }
  function qs(t) {
    return null == t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t;
  }
  function js(t, e, n) {
    return 'right' === e
      ? t - n[1]
      : 'center' === e
      ? t + n[3] / 2 - n[1] / 2
      : t + n[3];
  }
  function Ks(t) {
    t = t.text;
    return null != t && (t += ''), t;
  }
  function $s(t) {
    return !!(
      t.backgroundColor ||
      t.lineHeight ||
      (t.borderWidth && t.borderColor)
    );
  }
  var k = Bo(),
    Qs = 1,
    Js = {},
    tl = Bo(),
    el = Bo(),
    nl = 0,
    il = 1,
    rl = 2,
    ol = ['emphasis', 'blur', 'select'],
    al = ['normal', 'emphasis', 'blur', 'select'],
    sl = 'highlight',
    ll = 'downplay',
    ul = 'select',
    hl = 'unselect',
    cl = 'toggleSelect';
  function pl(t) {
    return null != t && 'none' !== t;
  }
  function dl(t, e, n) {
    t.onHoverStateChange &&
      (t.hoverState || 0) !== n &&
      t.onHoverStateChange(e),
      (t.hoverState = n);
  }
  function fl(t) {
    dl(t, 'emphasis', rl);
  }
  function gl(t) {
    t.hoverState === rl && dl(t, 'normal', nl);
  }
  function yl(t) {
    dl(t, 'blur', il);
  }
  function ml(t) {
    t.hoverState === il && dl(t, 'normal', nl);
  }
  function vl(t) {
    t.selected = !0;
  }
  function _l(t) {
    t.selected = !1;
  }
  function xl(t, e, n) {
    e(t, n);
  }
  function wl(t, e, n) {
    xl(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          xl(t, e, n);
        });
  }
  function bl(t, e, n) {
    var i = 0 <= I(t.currentStates, e),
      r = t.style.opacity,
      t = i
        ? null
        : (function (t, e, n, i) {
            for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
              var s = e[a],
                l = r[s];
              o[s] = null == l ? i && i[s] : l;
            }
            for (a = 0; a < t.animators.length; a++) {
              var u = t.animators[a];
              u.__fromStateTransition &&
                u.__fromStateTransition.indexOf(n) < 0 &&
                'style' === u.targetName &&
                u.saveTo(o, e);
            }
            return o;
          })(t, ['opacity'], e, {opacity: 1}),
      e = (n = n || {}).style || {};
    return (
      null == e.opacity &&
        ((n = L({}, n)),
        (e = L({opacity: i ? r : 0.1 * t.opacity}, e)),
        (n.style = e)),
      n
    );
  }
  function Sl(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s = this.states[t];
    if (this.style) {
      if ('emphasis' === t)
        return (
          (n = this),
          (i = s),
          (e = (e = e) && 0 <= I(e, 'select')),
          (a = !1),
          n instanceof vs &&
            ((r = tl(n)),
            (o = (e && r.selectFill) || r.normalFill),
            (e = (e && r.selectStroke) || r.normalStroke),
            pl(o) || pl(e)) &&
            ('inherit' === (r = (i = i || {}).style || {}).fill
              ? ((a = !0), (i = L({}, i)), ((r = L({}, r)).fill = o))
              : !pl(r.fill) && pl(o)
              ? ((a = !0), (i = L({}, i)), ((r = L({}, r)).fill = Ti(o)))
              : !pl(r.stroke) &&
                pl(e) &&
                (a || ((i = L({}, i)), (r = L({}, r))), (r.stroke = Ti(e))),
            (i.style = r)),
          i &&
            null == i.z2 &&
            (a || (i = L({}, i)),
            (o = n.z2EmphasisLift),
            (i.z2 = n.z2 + (null != o ? o : 10))),
          i
        );
      if ('blur' === t) return bl(this, t, s);
      if ('select' === t)
        return (
          (e = this),
          (r = s) &&
            null == r.z2 &&
            ((r = L({}, r)),
            (a = e.z2SelectLift),
            (r.z2 = e.z2 + (null != a ? a : 9))),
          r
        );
    }
    return s;
  }
  function Ml(t) {
    t.stateProxy = Sl;
    var e = t.getTextContent(),
      t = t.getTextGuideLine();
    e && (e.stateProxy = Sl), t && (t.stateProxy = Sl);
  }
  function Tl(t, e) {
    Ll(t, e) || t.__highByOuter || wl(t, fl);
  }
  function Cl(t, e) {
    Ll(t, e) || t.__highByOuter || wl(t, gl);
  }
  function Il(t, e) {
    (t.__highByOuter |= 1 << (e || 0)), wl(t, fl);
  }
  function Dl(t, e) {
    (t.__highByOuter &= ~(1 << (e || 0))) || wl(t, gl);
  }
  function kl(t) {
    wl(t, ml);
  }
  function Al(t) {
    wl(t, vl);
  }
  function Pl(t) {
    wl(t, _l);
  }
  function Ll(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }
  function Ol(r) {
    var e = r.getModel(),
      o = [],
      a = [];
    e.eachComponent(function (t, e) {
      var n = el(e),
        t = 'series' === t,
        i = t ? r.getViewOfSeriesModel(e) : r.getViewOfComponentModel(e);
      t || a.push(i),
        n.isBlured &&
          (i.group.traverse(function (t) {
            ml(t);
          }),
          t) &&
          o.push(e),
        (n.isBlured = !1);
    }),
      z(a, function (t) {
        t && t.toggleBlurSeries && t.toggleBlurSeries(o, !1, e);
      });
  }
  function Rl(t, o, a, s) {
    var l,
      u,
      h,
      n = s.getModel();
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n]);
        i && kl(i);
      }
    }
    (a = a || 'coordinateSystem'),
      null != t &&
        o &&
        'none' !== o &&
        ((l = n.getSeriesByIndex(t)),
        (u = l.coordinateSystem) && u.master && (u = u.master),
        (h = []),
        n.eachSeries(function (t) {
          var e = l === t,
            n = t.coordinateSystem,
            n = (n = n && n.master ? n.master : n) && u ? n === u : e;
          if (
            !(
              ('series' === a && !e) ||
              ('coordinateSystem' === a && !n) ||
              ('series' === o && e)
            )
          ) {
            if (
              (s.getViewOfSeriesModel(t).group.traverse(function (t) {
                (t.__highByOuter && e && 'self' === o) || yl(t);
              }),
              st(o))
            )
              c(t.getData(), o);
            else if (O(o))
              for (var i = ht(o), r = 0; r < i.length; r++)
                c(t.getData(i[r]), o[i[r]]);
            h.push(t), (el(t).isBlured = !0);
          }
        }),
        n.eachComponent(function (t, e) {
          'series' !== t &&
            (t = s.getViewOfComponentModel(e)) &&
            t.toggleBlurSeries &&
            t.toggleBlurSeries(h, !0, n);
        }));
  }
  function Bl(t, e, n) {
    var i;
    null != t &&
      null != e &&
      (t = n.getModel().getComponent(t, e)) &&
      ((el(t).isBlured = !0), (i = n.getViewOfComponentModel(t))) &&
      i.focusBlurEnabled &&
      i.group.traverse(function (t) {
        yl(t);
      });
  }
  function zl(t, e, n, i) {
    var r = {focusSelf: !1, dispatchers: null};
    if (null == t || 'series' === t || null == e || null == n) return r;
    t = i.getModel().getComponent(t, e);
    if (!t) return r;
    e = i.getViewOfComponentModel(t);
    if (!e || !e.findHighDownDispatchers) return r;
    for (var o, a = e.findHighDownDispatchers(n), s = 0; s < a.length; s++)
      if ('self' === k(a[s]).focus) {
        o = !0;
        break;
      }
    return {focusSelf: o, dispatchers: a};
  }
  function El(i) {
    z(i.getAllData(), function (t) {
      var e = t.data,
        n = t.type;
      e.eachItemGraphicEl(function (t, e) {
        (i.isSelected(e, n) ? Al : Pl)(t);
      });
    });
  }
  function Nl(t, e, n) {
    Gl(t, !0), wl(t, Ml);
    (t = k(t)),
      null != e
        ? ((t.focus = e), (t.blurScope = n))
        : t.focus && (t.focus = null);
  }
  function Fl(t, e, n, i) {
    i ? Gl(t, !1) : Nl(t, e, n);
  }
  var Vl = ['emphasis', 'blur', 'select'],
    Hl = {
      itemStyle: 'getItemStyle',
      lineStyle: 'getLineStyle',
      areaStyle: 'getAreaStyle',
    };
  function Wl(t, e, n, i) {
    n = n || 'itemStyle';
    for (var r = 0; r < Vl.length; r++) {
      var o = Vl[r],
        a = e.getModel([o, n]);
      t.ensureState(o).style = i ? i(a) : a[Hl[n]]();
    }
  }
  function Gl(t, e) {
    var e = !1 === e,
      n = t;
    t.highDownSilentOnTouch &&
      (n.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (e && !n.__highDownDispatcher) ||
        ((n.__highByOuter = n.__highByOuter || 0),
        (n.__highDownDispatcher = !e));
  }
  function Ul(t) {
    return !(!t || !t.__highDownDispatcher);
  }
  function Zl(t) {
    t = t.type;
    return t === ul || t === hl || t === cl;
  }
  function Yl(t) {
    t = t.type;
    return t === sl || t === ll;
  }
  var Xl = ts.CMD,
    ql = [[], [], []],
    jl = Math.sqrt,
    Kl = Math.atan2;
  var $l = Math.sqrt,
    Ql = Math.sin,
    Jl = Math.cos,
    tu = Math.PI;
  function eu(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  function nu(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (eu(t) * eu(e));
  }
  function iu(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(nu(t, e));
  }
  function ru(t, e, n, i, r, o, a, s, l, u, h) {
    var l = l * (tu / 180),
      c = (Jl(l) * (t - n)) / 2 + (Ql(l) * (e - i)) / 2,
      p = (-1 * Ql(l) * (t - n)) / 2 + (Jl(l) * (e - i)) / 2,
      d = (c * c) / (a * a) + (p * p) / (s * s),
      d =
        (1 < d && ((a *= $l(d)), (s *= $l(d))),
        (r === o ? -1 : 1) *
          $l(
            (a * a * (s * s) - a * a * (p * p) - s * s * (c * c)) /
              (a * a * (p * p) + s * s * (c * c))
          ) || 0),
      r = (d * a * p) / s,
      d = (d * -s * c) / a,
      t = (t + n) / 2 + Jl(l) * r - Ql(l) * d,
      n = (e + i) / 2 + Ql(l) * r + Jl(l) * d,
      e = iu([1, 0], [(c - r) / a, (p - d) / s]),
      i = [(c - r) / a, (p - d) / s],
      c = [(-1 * c - r) / a, (-1 * p - d) / s],
      r = iu(i, c);
    nu(i, c) <= -1 && (r = tu),
      (r = 1 <= nu(i, c) ? 0 : r) < 0 &&
        ((p = Math.round((r / tu) * 1e6) / 1e6), (r = 2 * tu + (p % 2) * tu)),
      h.addData(u, t, n, a, s, e, r, l, o);
  }
  var ou = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    au = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
  u(uu, (su = vs)), (uu.prototype.applyTransform = function (t) {});
  var su,
    lu = uu;
  function uu() {
    return (null !== su && su.apply(this, arguments)) || this;
  }
  function hu(t) {
    return null != t.setData;
  }
  function cu(t, e) {
    var S = (function (t) {
        var e = new ts();
        if (t) {
          var n,
            i = 0,
            r = 0,
            o = i,
            a = r,
            s = ts.CMD,
            l = t.match(ou);
          if (l) {
            for (var u = 0; u < l.length; u++) {
              for (
                var h = l[u],
                  c = h.charAt(0),
                  p = void 0,
                  d = h.match(au) || [],
                  f = d.length,
                  g = 0;
                g < f;
                g++
              )
                d[g] = parseFloat(d[g]);
              for (var y = 0; y < f; ) {
                var m = void 0,
                  v = void 0,
                  _ = void 0,
                  x = void 0,
                  w = void 0,
                  b = void 0,
                  S = void 0,
                  M = i,
                  T = r,
                  C = void 0,
                  I = void 0;
                switch (c) {
                  case 'l':
                    (i += d[y++]), (r += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'L':
                    (i = d[y++]), (r = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'm':
                    (i += d[y++]),
                      (r += d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = 'l');
                    break;
                  case 'M':
                    (i = d[y++]),
                      (r = d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = 'L');
                    break;
                  case 'h':
                    (i += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'H':
                    (i = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'v':
                    (r += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'V':
                    (r = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case 'C':
                    (p = s.C),
                      e.addData(
                        p,
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++]
                      ),
                      (i = d[y - 2]),
                      (r = d[y - 1]);
                    break;
                  case 'c':
                    (p = s.C),
                      e.addData(
                        p,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r
                      ),
                      (i += d[y - 2]),
                      (r += d[y - 1]);
                    break;
                  case 'S':
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      e.addData(p, m, v, M, T, i, r);
                    break;
                  case 's':
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = i + d[y++]),
                      (T = r + d[y++]),
                      (i += d[y++]),
                      (r += d[y++]),
                      e.addData(p, m, v, M, T, i, r);
                    break;
                  case 'Q':
                    (M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r);
                    break;
                  case 'q':
                    (M = d[y++] + i),
                      (T = d[y++] + r),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r);
                    break;
                  case 'T':
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r);
                    break;
                  case 't':
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r);
                    break;
                  case 'A':
                    (_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      ru(
                        (M = i),
                        (T = r),
                        (i = d[y++]),
                        (r = d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      );
                    break;
                  case 'a':
                    (_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      ru(
                        (M = i),
                        (T = r),
                        (i += d[y++]),
                        (r += d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      );
                }
              }
              ('z' !== c && 'Z' !== c) ||
                ((p = s.Z), e.addData(p), (i = o), (r = a)),
                (n = p);
            }
            e.toStatic();
          }
        }
        return e;
      })(t),
      t = L({}, e);
    return (
      (t.buildPath = function (t) {
        var e;
        hu(t)
          ? (t.setData(S.data), (e = t.getContext()) && t.rebuildPath(e, 1))
          : S.rebuildPath((e = t), 1);
      }),
      (t.applyTransform = function (t) {
        var e = S,
          n = t;
        if (n) {
          for (
            var i,
              r,
              o,
              a,
              s = e.data,
              l = e.len(),
              u = Xl.M,
              h = Xl.C,
              c = Xl.L,
              p = Xl.R,
              d = Xl.A,
              f = Xl.Q,
              g = 0,
              y = 0;
            g < l;

          ) {
            switch (((i = s[g++]), (y = g), (r = 0), i)) {
              case u:
              case c:
                r = 1;
                break;
              case h:
                r = 3;
                break;
              case f:
                r = 2;
                break;
              case d:
                var m = n[4],
                  v = n[5],
                  _ = jl(n[0] * n[0] + n[1] * n[1]),
                  x = jl(n[2] * n[2] + n[3] * n[3]),
                  w = Kl(-n[1] / x, n[0] / _);
                (s[g] *= _),
                  (s[g++] += m),
                  (s[g] *= x),
                  (s[g++] += v),
                  (s[g++] *= _),
                  (s[g++] *= x),
                  (s[g++] += w),
                  (s[g++] += w),
                  (y = g += 2);
                break;
              case p:
                (a[0] = s[g++]),
                  (a[1] = s[g++]),
                  ee(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]),
                  (a[0] += s[g++]),
                  (a[1] += s[g++]),
                  ee(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]);
            }
            for (o = 0; o < r; o++) {
              var b = ql[o];
              (b[0] = s[g++]),
                (b[1] = s[g++]),
                ee(b, b, n),
                (s[y++] = b[0]),
                (s[y++] = b[1]);
            }
          }
          e.increaseVersion();
        }
        this.dirtyShape();
      }),
      t
    );
  }
  var pu,
    du = function () {
      (this.cx = 0), (this.cy = 0), (this.r = 0);
    },
    fu =
      (u(gu, (pu = vs)),
      (gu.prototype.getDefaultShape = function () {
        return new du();
      }),
      (gu.prototype.buildPath = function (t, e) {
        t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
      }),
      gu);
  function gu(t) {
    return pu.call(this, t) || this;
  }
  fu.prototype.type = 'circle';
  var yu,
    mu = function () {
      (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
    },
    vu =
      (u(_u, (yu = vs)),
      (_u.prototype.getDefaultShape = function () {
        return new mu();
      }),
      (_u.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.rx,
          e = e.ry,
          o = 0.5522848 * r,
          a = 0.5522848 * e;
        t.moveTo(n - r, i),
          t.bezierCurveTo(n - r, i - a, n - o, i - e, n, i - e),
          t.bezierCurveTo(n + o, i - e, n + r, i - a, n + r, i),
          t.bezierCurveTo(n + r, i + a, n + o, i + e, n, i + e),
          t.bezierCurveTo(n - o, i + e, n - r, i + a, n - r, i),
          t.closePath();
      }),
      _u);
  function _u(t) {
    return yu.call(this, t) || this;
  }
  vu.prototype.type = 'ellipse';
  var xu = Math.PI,
    wu = 2 * xu,
    bu = Math.sin,
    Su = Math.cos,
    Mu = Math.acos,
    Tu = Math.atan2,
    Cu = Math.abs,
    Iu = Math.sqrt,
    Du = Math.max,
    ku = Math.min,
    Au = 1e-4;
  function Pu(t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      a = (a ? o : -o) / Iu(s * s + l * l),
      l = a * l,
      a = -a * s,
      s = t + l,
      t = e + a,
      e = n + l,
      n = i + a,
      i = (s + e) / 2,
      u = (t + n) / 2,
      h = e - s,
      c = n - t,
      p = h * h + c * c,
      o = r - o,
      s = s * n - e * t,
      n = (c < 0 ? -1 : 1) * Iu(Du(0, o * o * p - s * s)),
      e = (s * c - h * n) / p,
      t = (-s * h - c * n) / p,
      d = (s * c + h * n) / p,
      s = (-s * h + c * n) / p,
      h = e - i,
      c = t - u,
      n = d - i,
      p = s - u;
    return (
      n * n + p * p < h * h + c * c && ((e = d), (t = s)),
      {cx: e, cy: t, x0: -l, y0: -a, x1: e * (r / o - 1), y1: t * (r / o - 1)}
    );
  }
  function Lu(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m,
      v,
      _,
      x,
      w,
      b,
      S,
      M,
      T,
      C,
      I,
      D,
      k,
      A,
      P,
      L = Du(e.r, 0),
      O = Du(e.r0 || 0, 0),
      R = 0 < L;
    (R || 0 < O) &&
      (R || ((L = O), (O = 0)),
      L < O && ((R = L), (L = O), (O = R)),
      (R = e.startAngle),
      (n = e.endAngle),
      isNaN(R) ||
        isNaN(n) ||
        ((i = e.cx),
        (r = e.cy),
        (o = !!e.clockwise),
        (m = Cu(n - R)),
        Au < (a = wu < m && m % wu) && (m = a),
        Au < L
          ? wu - Au < m
            ? (t.moveTo(i + L * Su(R), r + L * bu(R)),
              t.arc(i, r, L, R, n, !o),
              Au < O &&
                (t.moveTo(i + O * Su(n), r + O * bu(n)),
                t.arc(i, r, O, n, R, o)))
            : ((S =
                b =
                w =
                x =
                _ =
                v =
                c =
                h =
                I =
                C =
                T =
                M =
                u =
                l =
                s =
                a =
                  void 0),
              (p = L * Su(R)),
              (d = L * bu(R)),
              (f = O * Su(n)),
              (g = O * bu(n)),
              (y = Au < m) &&
                ((e = e.cornerRadius) &&
                  ((a = (e = (function (t) {
                    if (F(t)) {
                      var e = t.length;
                      if (!e) return t;
                      e =
                        1 === e
                          ? [t[0], t[0], 0, 0]
                          : 2 === e
                          ? [t[0], t[0], t[1], t[1]]
                          : 3 === e
                          ? t.concat(t[2])
                          : t;
                    } else e = [t, t, t, t];
                    return e;
                  })(e))[0]),
                  (s = e[1]),
                  (l = e[2]),
                  (u = e[3])),
                (e = Cu(L - O) / 2),
                (M = ku(e, l)),
                (T = ku(e, u)),
                (C = ku(e, a)),
                (I = ku(e, s)),
                (v = h = Du(M, T)),
                (_ = c = Du(C, I)),
                Au < h || Au < c) &&
                ((x = L * Su(n)),
                (w = L * bu(n)),
                (b = O * Su(R)),
                (S = O * bu(R)),
                m < xu) &&
                (e = (function (t, e, n, i, r, o, a, s) {
                  var l = (s = s - o) * (n = n - t) - (a = a - r) * (i = i - e);
                  if (!(l * l < Au))
                    return [
                      t + (l = (a * (e - o) - s * (t - r)) / l) * n,
                      e + l * i,
                    ];
                })(p, d, b, S, x, w, f, g)) &&
                ((M = p - e[0]),
                (T = d - e[1]),
                (C = x - e[0]),
                (I = w - e[1]),
                (m =
                  1 /
                  bu(
                    Mu(
                      (M * C + T * I) / (Iu(M * M + T * T) * Iu(C * C + I * I))
                    ) / 2
                  )),
                (M = Iu(e[0] * e[0] + e[1] * e[1])),
                (v = ku(h, (L - M) / (1 + m))),
                (_ = ku(c, (O - M) / (m - 1)))),
              y
                ? Au < v
                  ? ((D = ku(l, v)),
                    (k = ku(u, v)),
                    (A = Pu(b, S, p, d, L, D, o)),
                    (P = Pu(x, w, f, g, L, k, o)),
                    t.moveTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    v < h && D === k
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          v,
                          Tu(A.y0, A.x0),
                          Tu(P.y0, P.x0),
                          !o
                        )
                      : (0 < D &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            D,
                            Tu(A.y0, A.x0),
                            Tu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          L,
                          Tu(A.cy + A.y1, A.cx + A.x1),
                          Tu(P.cy + P.y1, P.cx + P.x1),
                          !o
                        ),
                        0 < k &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            k,
                            Tu(P.y1, P.x1),
                            Tu(P.y0, P.x0),
                            !o
                          )))
                  : (t.moveTo(i + p, r + d), t.arc(i, r, L, R, n, !o))
                : t.moveTo(i + p, r + d),
              Au < O && y
                ? Au < _
                  ? ((D = ku(a, _)),
                    (A = Pu(f, g, x, w, O, -(k = ku(s, _)), o)),
                    (P = Pu(p, d, b, S, O, -D, o)),
                    t.lineTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    _ < c && D === k
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          _,
                          Tu(A.y0, A.x0),
                          Tu(P.y0, P.x0),
                          !o
                        )
                      : (0 < k &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            k,
                            Tu(A.y0, A.x0),
                            Tu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          O,
                          Tu(A.cy + A.y1, A.cx + A.x1),
                          Tu(P.cy + P.y1, P.cx + P.x1),
                          o
                        ),
                        0 < D &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            D,
                            Tu(P.y1, P.x1),
                            Tu(P.y0, P.x0),
                            !o
                          )))
                  : (t.lineTo(i + f, r + g), t.arc(i, r, O, n, R, o))
                : t.lineTo(i + f, r + g))
          : t.moveTo(i, r),
        t.closePath()));
  }
  var Ou,
    Ru = function () {
      (this.cx = 0),
        (this.cy = 0),
        (this.r0 = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = 2 * Math.PI),
        (this.clockwise = !0),
        (this.cornerRadius = 0);
    },
    Bu =
      (u(zu, (Ou = vs)),
      (zu.prototype.getDefaultShape = function () {
        return new Ru();
      }),
      (zu.prototype.buildPath = function (t, e) {
        Lu(t, e);
      }),
      (zu.prototype.isZeroArea = function () {
        return (
          this.shape.startAngle === this.shape.endAngle ||
          this.shape.r === this.shape.r0
        );
      }),
      zu);
  function zu(t) {
    return Ou.call(this, t) || this;
  }
  Bu.prototype.type = 'sector';
  var Eu,
    Nu = function () {
      (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
    },
    Fu =
      (u(Vu, (Eu = vs)),
      (Vu.prototype.getDefaultShape = function () {
        return new Nu();
      }),
      (Vu.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
        t.moveTo(n + e.r, i),
          t.arc(n, i, e.r, 0, r, !1),
          t.moveTo(n + e.r0, i),
          t.arc(n, i, e.r0, 0, r, !0);
      }),
      Vu);
  function Vu(t) {
    return Eu.call(this, t) || this;
  }
  function Hu(t, e, n) {
    var i = e.smooth,
      r = e.points;
    if (r && 2 <= r.length) {
      if (i)
        for (
          var o = (function (t, e, n, i) {
              var r,
                o,
                a = [],
                s = [],
                l = [],
                u = [];
              if (i) {
                for (
                  var h = [1 / 0, 1 / 0],
                    c = [-1 / 0, -1 / 0],
                    p = 0,
                    d = t.length;
                  p < d;
                  p++
                )
                  ne(h, h, t[p]), ie(c, c, t[p]);
                ne(h, h, i[0]), ie(c, c, i[1]);
              }
              for (p = 0, d = t.length; p < d; p++) {
                var f = t[p];
                if (n) (r = t[p ? p - 1 : d - 1]), (o = t[(p + 1) % d]);
                else {
                  if (0 === p || p === d - 1) {
                    a.push(Gt(t[p]));
                    continue;
                  }
                  (r = t[p - 1]), (o = t[p + 1]);
                }
                Zt(s, o, r), qt(s, s, e);
                var g = Kt(f, r),
                  y = Kt(f, o),
                  m = g + y,
                  m =
                    (0 !== m && ((g /= m), (y /= m)),
                    qt(l, s, -g),
                    qt(u, s, y),
                    Ut([], f, l)),
                  g = Ut([], f, u);
                i && (ie(m, m, h), ne(m, m, c), ie(g, g, h), ne(g, g, c)),
                  a.push(m),
                  a.push(g);
              }
              return n && a.push(a.shift()), a;
            })(r, i, n, e.smoothConstraint),
            a = (t.moveTo(r[0][0], r[0][1]), r.length),
            s = 0;
          s < (n ? a : a - 1);
          s++
        ) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = r[(s + 1) % a];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      else {
        t.moveTo(r[0][0], r[0][1]);
        for (var s = 1, c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1]);
      }
      n && t.closePath();
    }
  }
  Fu.prototype.type = 'ring';
  var Wu,
    Gu = function () {
      (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
    },
    Uu =
      (u(Zu, (Wu = vs)),
      (Zu.prototype.getDefaultShape = function () {
        return new Gu();
      }),
      (Zu.prototype.buildPath = function (t, e) {
        Hu(t, e, !0);
      }),
      Zu);
  function Zu(t) {
    return Wu.call(this, t) || this;
  }
  Uu.prototype.type = 'polygon';
  var Yu,
    Xu = function () {
      (this.points = null),
        (this.percent = 1),
        (this.smooth = 0),
        (this.smoothConstraint = null);
    },
    qu =
      (u(ju, (Yu = vs)),
      (ju.prototype.getDefaultStyle = function () {
        return {stroke: '#000', fill: null};
      }),
      (ju.prototype.getDefaultShape = function () {
        return new Xu();
      }),
      (ju.prototype.buildPath = function (t, e) {
        Hu(t, e, !1);
      }),
      ju);
  function ju(t) {
    return Yu.call(this, t) || this;
  }
  qu.prototype.type = 'polyline';
  var Ku,
    $u = {},
    Qu = function () {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.percent = 1);
    },
    Ju =
      (u(th, (Ku = vs)),
      (th.prototype.getDefaultStyle = function () {
        return {stroke: '#000', fill: null};
      }),
      (th.prototype.getDefaultShape = function () {
        return new Qu();
      }),
      (th.prototype.buildPath = function (t, e) {
        o = (
          this.subPixelOptimize
            ? ((n = (o = ks($u, e, this.style)).x1), (i = o.y1), (r = o.x2), o)
            : ((n = e.x1), (i = e.y1), (r = e.x2), e)
        ).y2;
        var n,
          i,
          r,
          o,
          e = e.percent;
        0 !== e &&
          (t.moveTo(n, i),
          e < 1 && ((r = n * (1 - e) + r * e), (o = i * (1 - e) + o * e)),
          t.lineTo(r, o));
      }),
      (th.prototype.pointAt = function (t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
      }),
      th);
  function th(t) {
    return Ku.call(this, t) || this;
  }
  Ju.prototype.type = 'line';
  var eh = [],
    nh = function () {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.cpx1 = 0),
        (this.cpy1 = 0),
        (this.percent = 1);
    };
  function ih(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null != i || null != r
      ? [
          (n ? Fn : Nn)(t.x1, t.cpx1, t.cpx2, t.x2, e),
          (n ? Fn : Nn)(t.y1, t.cpy1, t.cpy2, t.y2, e),
        ]
      : [
          (n ? Zn : Un)(t.x1, t.cpx1, t.x2, e),
          (n ? Zn : Un)(t.y1, t.cpy1, t.y2, e),
        ];
  }
  u(ah, (rh = vs)),
    (ah.prototype.getDefaultStyle = function () {
      return {stroke: '#000', fill: null};
    }),
    (ah.prototype.getDefaultShape = function () {
      return new nh();
    }),
    (ah.prototype.buildPath = function (t, e) {
      var n = e.x1,
        i = e.y1,
        r = e.x2,
        o = e.y2,
        a = e.cpx1,
        s = e.cpy1,
        l = e.cpx2,
        u = e.cpy2,
        e = e.percent;
      0 !== e &&
        (t.moveTo(n, i),
        null == l || null == u
          ? (e < 1 &&
              (Xn(n, a, r, e, eh),
              (a = eh[1]),
              (r = eh[2]),
              Xn(i, s, o, e, eh),
              (s = eh[1]),
              (o = eh[2])),
            t.quadraticCurveTo(a, s, r, o))
          : (e < 1 &&
              (Wn(n, a, l, r, e, eh),
              (a = eh[1]),
              (l = eh[2]),
              (r = eh[3]),
              Wn(i, s, u, o, e, eh),
              (s = eh[1]),
              (u = eh[2]),
              (o = eh[3])),
            t.bezierCurveTo(a, s, l, u, r, o)));
    }),
    (ah.prototype.pointAt = function (t) {
      return ih(this.shape, t, !1);
    }),
    (ah.prototype.tangentAt = function (t) {
      t = ih(this.shape, t, !0);
      return jt(t, t);
    });
  var rh,
    oh = ah;
  function ah(t) {
    return rh.call(this, t) || this;
  }
  oh.prototype.type = 'bezier-curve';
  var sh,
    lh = function () {
      (this.cx = 0),
        (this.cy = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = 2 * Math.PI),
        (this.clockwise = !0);
    },
    uh =
      (u(hh, (sh = vs)),
      (hh.prototype.getDefaultStyle = function () {
        return {stroke: '#000', fill: null};
      }),
      (hh.prototype.getDefaultShape = function () {
        return new lh();
      }),
      (hh.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          o = e.startAngle,
          a = e.endAngle,
          e = e.clockwise,
          s = Math.cos(o),
          l = Math.sin(o);
        t.moveTo(s * r + n, l * r + i), t.arc(n, i, r, o, a, !e);
      }),
      hh);
  function hh(t) {
    return sh.call(this, t) || this;
  }
  uh.prototype.type = 'arc';
  u(dh, (ch = vs)),
    (dh.prototype._updatePathDirty = function () {
      for (
        var t = this.shape.paths, e = this.shapeChanged(), n = 0;
        n < t.length;
        n++
      )
        e = e || t[n].shapeChanged();
      e && this.dirtyShape();
    }),
    (dh.prototype.beforeBrush = function () {
      this._updatePathDirty();
      for (
        var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
        n < t.length;
        n++
      )
        t[n].path || t[n].createPathProxy(),
          t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
    }),
    (dh.prototype.buildPath = function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++)
        n[i].buildPath(t, n[i].shape, !0);
    }),
    (dh.prototype.afterBrush = function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
        t[e].pathUpdated();
    }),
    (dh.prototype.getBoundingRect = function () {
      return (
        this._updatePathDirty.call(this),
        vs.prototype.getBoundingRect.call(this)
      );
    });
  var ch,
    ph = dh;
  function dh() {
    var t = (null !== ch && ch.apply(this, arguments)) || this;
    return (t.type = 'compound'), t;
  }
  gh.prototype.addColorStop = function (t, e) {
    this.colorStops.push({offset: t, color: e});
  };
  var fh = gh;
  function gh(t) {
    this.colorStops = t || [];
  }
  u(vh, (yh = fh));
  var yh,
    mh = vh;
  function vh(t, e, n, i, r, o) {
    r = yh.call(this, r) || this;
    return (
      (r.x = null == t ? 0 : t),
      (r.y = null == e ? 0 : e),
      (r.x2 = null == n ? 1 : n),
      (r.y2 = null == i ? 0 : i),
      (r.type = 'linear'),
      (r.global = o || !1),
      r
    );
  }
  u(xh, (_h = fh));
  var _h,
    fh = xh;
  function xh(t, e, n, i, r) {
    i = _h.call(this, i) || this;
    return (
      (i.x = null == t ? 0.5 : t),
      (i.y = null == e ? 0.5 : e),
      (i.r = null == n ? 0.5 : n),
      (i.type = 'radial'),
      (i.global = r || !1),
      i
    );
  }
  var wh = [0, 0],
    bh = [0, 0],
    Sh = new H(),
    Mh = new H(),
    Th =
      ((Ch.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          t = o + t.height;
        if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, t), n[3].set(r, t), e))
          for (var s = 0; s < 4; s++) n[s].transform(e);
        H.sub(i[0], n[1], n[0]),
          H.sub(i[1], n[3], n[0]),
          i[0].normalize(),
          i[1].normalize();
        for (s = 0; s < 2; s++) this._origin[s] = i[s].dot(n[0]);
      }),
      (Ch.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e;
        return (
          Sh.set(1 / 0, 1 / 0),
          Mh.set(0, 0),
          (!this._intersectCheckOneSide(this, t, Sh, Mh, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, Sh, Mh, i, -1) &&
              ((n = !1), i)) ||
            i ||
            H.copy(e, n ? Sh : Mh),
          n
        );
      }),
      (Ch.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; s < 2; s++) {
          var l = this._axes[s];
          if (
            (this._getProjMinMaxOnAxis(s, t._corners, wh),
            this._getProjMinMaxOnAxis(s, e._corners, bh),
            wh[1] < bh[0] || bh[1] < wh[0])
          ) {
            if (((a = !1), r)) return a;
            var u = Math.abs(bh[0] - wh[1]),
              h = Math.abs(wh[0] - bh[1]);
            Math.min(u, h) > i.len() &&
              (u < h ? H.scale(i, l, -u * o) : H.scale(i, l, h * o));
          } else
            n &&
              ((u = Math.abs(bh[0] - wh[1])),
              (h = Math.abs(wh[0] - bh[1])),
              Math.min(u, h) < n.len()) &&
              (u < h ? H.scale(n, l, u * o) : H.scale(n, l, -h * o));
        }
        return a;
      }),
      (Ch.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (
          var i = this._axes[t],
            r = this._origin,
            o = e[0].dot(i) + r[t],
            a = o,
            s = o,
            l = 1;
          l < e.length;
          l++
        )
          var u = e[l].dot(i) + r[t], a = Math.min(u, a), s = Math.max(u, s);
        (n[0] = a), (n[1] = s);
      }),
      Ch);
  function Ch(t, e) {
    (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
    for (var n = 0; n < 4; n++) this._corners[n] = new H();
    for (n = 0; n < 2; n++) this._axes[n] = new H();
    t && this.fromBoundingRect(t, e);
  }
  var Ih,
    Dh = [],
    n =
      (u(kh, (Ih = n)),
      (kh.prototype.traverse = function (t, e) {
        t.call(e, this);
      }),
      (kh.prototype.useStyle = function () {
        this.style = {};
      }),
      (kh.prototype.getCursor = function () {
        return this._cursor;
      }),
      (kh.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
      }),
      (kh.prototype.clearDisplaybles = function () {
        (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1);
      }),
      (kh.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
      }),
      (kh.prototype.addDisplayable = function (t, e) {
        (e ? this._temporaryDisplayables : this._displayables).push(t),
          this.markRedraw();
      }),
      (kh.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
      }),
      (kh.prototype.getDisplayables = function () {
        return this._displayables;
      }),
      (kh.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
      }),
      (kh.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++)
          t && t(this._displayables[e]);
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          t && t(this._temporaryDisplayables[e]);
      }),
      (kh.prototype.update = function () {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++)
          ((e = this._displayables[t]).parent = this),
            e.update(),
            (e.parent = null);
        for (var e, t = 0; t < this._temporaryDisplayables.length; t++)
          ((e = this._temporaryDisplayables[t]).parent = this),
            e.update(),
            (e.parent = null);
      }),
      (kh.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var t = new Z(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone();
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Dh)),
              t.union(i);
          }
          this._rect = t;
        }
        return this._rect;
      }),
      (kh.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1]))
          for (var i = 0; i < this._displayables.length; i++)
            if (this._displayables[i].contain(t, e)) return !0;
        return !1;
      }),
      kh);
  function kh() {
    var t = (null !== Ih && Ih.apply(this, arguments)) || this;
    return (
      (t.notClear = !0),
      (t.incremental = !0),
      (t._displayables = []),
      (t._temporaryDisplayables = []),
      (t._cursor = 0),
      t
    );
  }
  var Ah = Bo();
  function Ph(t, e, n, i, r, o, a) {
    var s,
      l,
      u,
      h,
      c,
      p,
      d = !1,
      f =
        (D(r)
          ? ((a = o), (o = r), (r = null))
          : O(r) &&
            ((o = r.cb),
            (a = r.during),
            (d = r.isFrom),
            (l = r.removeOpt),
            (r = r.dataIndex)),
        'leave' === t),
      g =
        (f || e.stopAnimation('leave'),
        (p = t),
        (s = r),
        (l = f ? l || {} : null),
        (i =
          (g = i) && i.getAnimationDelayParams
            ? i.getAnimationDelayParams(e, r)
            : null),
        g &&
          g.ecModel &&
          (u = (u = g.ecModel.getUpdatePayload()) && u.animation),
        (p = 'update' === p),
        g && g.isAnimationEnabled()
          ? ((c = h = r = void 0),
            (c = l
              ? ((r = R(l.duration, 200)), (h = R(l.easing, 'cubicOut')), 0)
              : ((r = g.getShallow(
                  p ? 'animationDurationUpdate' : 'animationDuration'
                )),
                (h = g.getShallow(
                  p ? 'animationEasingUpdate' : 'animationEasing'
                )),
                g.getShallow(p ? 'animationDelayUpdate' : 'animationDelay'))),
            D(
              (c =
                u &&
                (null != u.duration && (r = u.duration),
                null != u.easing && (h = u.easing),
                null != u.delay)
                  ? u.delay
                  : c)
            ) && (c = c(s, i)),
            {duration: (r = D(r) ? r(s) : r) || 0, delay: c, easing: h})
          : null);
    g && 0 < g.duration
      ? ((p = {
          duration: g.duration,
          delay: g.delay || 0,
          easing: g.easing,
          done: o,
          force: !!o || !!a,
          setToFinal: !f,
          scope: t,
          during: a,
        }),
        d ? e.animateFrom(n, p) : e.animateTo(n, p))
      : (e.stopAnimation(), d || e.attr(n), a && a(1), o && o());
  }
  function Lh(t, e, n, i, r, o) {
    Ph('update', t, e, n, i, r, o);
  }
  function Oh(t, e, n, i, r, o) {
    Ph('enter', t, e, n, i, r, o);
  }
  function Rh(t) {
    if (!t.__zr) return !0;
    for (var e = 0; e < t.animators.length; e++)
      if ('leave' === t.animators[e].scope) return !0;
    return !1;
  }
  function Bh(t, e, n, i, r, o) {
    Rh(t) || Ph('leave', t, e, n, i, r, o);
  }
  function zh(t, e, n, i) {
    t.removeTextContent(),
      t.removeTextGuideLine(),
      Bh(t, {style: {opacity: 0}}, e, n, i);
  }
  function Eh(t, e, n) {
    function i() {
      t.parent && t.parent.remove(t);
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || zh(t, e, n, i);
        })
      : zh(t, e, n, i);
  }
  function Nh(t) {
    Ah(t).oldStyle = t.style;
  }
  var Fh = Math.max,
    Vh = Math.min,
    Hh = {};
  function Wh(t) {
    return vs.extend(t);
  }
  var Gh = function (t, e) {
    var n,
      i = cu(t, e);
    function r(t) {
      t = n.call(this, t) || this;
      return (
        (t.applyTransform = i.applyTransform), (t.buildPath = i.buildPath), t
      );
    }
    return u(r, (n = lu)), r;
  };
  function Uh(t, e) {
    return Gh(t, e);
  }
  function Zh(t, e) {
    Hh[t] = e;
  }
  function Yh(t) {
    if (Hh.hasOwnProperty(t)) return Hh[t];
  }
  function Xh(t, e, n, i) {
    t = new lu(cu(t, e));
    return (
      n && ('center' === i && (n = jh(n, t.getBoundingRect())), $h(t, n)), t
    );
  }
  function qh(t, e, n) {
    var i = new Cs({
      style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height},
      onload: function (t) {
        'center' === n &&
          ((t = {width: t.width, height: t.height}), i.setStyle(jh(e, t)));
      },
    });
    return i;
  }
  function jh(t, e) {
    var e = e.width / e.height,
      n = t.height * e,
      e = n <= t.width ? t.height : (n = t.width) / e;
    return {
      x: t.x + t.width / 2 - n / 2,
      y: t.y + t.height / 2 - e / 2,
      width: n,
      height: e,
    };
  }
  function Kh(t, e) {
    for (var n = [], i = t.length, r = 0; r < i; r++) {
      var o = t[r];
      n.push(o.getUpdatedPathProxy(!0));
    }
    return (
      (e = new vs(e)).createPathProxy(),
      (e.buildPath = function (t) {
        var e;
        hu(t) && (t.appendPath(n), (e = t.getContext())) && t.rebuildPath(e, 1);
      }),
      e
    );
  }
  function $h(t, e) {
    t.applyTransform &&
      ((e = t.getBoundingRect().calculateTransform(e)), t.applyTransform(e));
  }
  function Qh(t, e) {
    return ks(t, t, {lineWidth: e}), t;
  }
  var Jh = Ps;
  function tc(t, e) {
    for (var n = Re([]); t && t !== e; )
      ze(n, t.getLocalTransform(), n), (t = t.parent);
    return n;
  }
  function ec(t, e, n) {
    return (
      e && !st(e) && (e = _r.getLocalTransform(e)),
      ee([], t, (e = n ? Ve([], e) : e))
    );
  }
  function nc(t, e, n) {
    var i =
        0 === e[4] || 0 === e[5] || 0 === e[0]
          ? 1
          : Math.abs((2 * e[4]) / e[0]),
      r =
        0 === e[4] || 0 === e[5] || 0 === e[2]
          ? 1
          : Math.abs((2 * e[4]) / e[2]),
      i = ec(
        [
          'left' === t ? -i : 'right' === t ? i : 0,
          'top' === t ? -r : 'bottom' === t ? r : 0,
        ],
        e,
        n
      );
    return Math.abs(i[0]) > Math.abs(i[1])
      ? 0 < i[0]
        ? 'right'
        : 'left'
      : 0 < i[1]
      ? 'bottom'
      : 'top';
  }
  function ic(t) {
    return !t.isGroup;
  }
  function rc(t, e, i) {
    var r, n;
    function o(t) {
      var e = {x: t.x, y: t.y, rotation: t.rotation};
      return null != t.shape && (e.shape = L({}, t.shape)), e;
    }
    t &&
      e &&
      ((n = {}),
      t.traverse(function (t) {
        ic(t) && t.anid && (n[t.anid] = t);
      }),
      (r = n),
      e.traverse(function (t) {
        var e, n;
        ic(t) &&
          t.anid &&
          (e = r[t.anid]) &&
          ((n = o(t)), t.attr(o(e)), Lh(t, n, i, k(t).dataIndex));
      }));
  }
  function oc(t, n) {
    return N(t, function (t) {
      var e = t[0],
        e = Fh(e, n.x),
        t = ((e = Vh(e, n.x + n.width)), t[1]),
        t = Fh(t, n.y);
      return [e, Vh(t, n.y + n.height)];
    });
  }
  function ac(t, e) {
    var n = Fh(t.x, e.x),
      i = Vh(t.x + t.width, e.x + e.width),
      r = Fh(t.y, e.y),
      t = Vh(t.y + t.height, e.y + e.height);
    if (n <= i && r <= t) return {x: n, y: r, width: i - n, height: t - r};
  }
  function sc(t, e, n) {
    var e = L({rectHover: !0}, e),
      i = (e.style = {strokeNoScale: !0});
    if (((n = n || {x: -1, y: -1, width: 2, height: 2}), t))
      return 0 === t.indexOf('image://')
        ? ((i.image = t.slice(8)), E(i, n), new Cs(e))
        : Xh(t.replace('path://', ''), e, n, 'center');
  }
  function lc(t, e, n, i, r, o, a, s) {
    var l,
      n = n - t,
      i = i - e,
      a = a - r,
      s = s - o,
      u = a * i - n * s;
    return !(
      ((l = u) <= 1e-6 && -1e-6 <= l) ||
      (r = ((l = t - r) * i - n * (t = e - o)) / u) < 0 ||
      1 < r ||
      (i = (l * s - a * t) / u) < 0 ||
      1 < i
    );
  }
  function uc(t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      i = t.itemName,
      e = V(e) ? {formatter: e} : e,
      r = n.mainType,
      n = n.componentIndex,
      o = {componentType: r, name: i, $vars: ['name']},
      a = ((o[r + 'Index'] = n), t.formatterParamsExtra),
      t =
        (a &&
          z(ht(a), function (t) {
            Nt(o, t) || ((o[t] = a[t]), o.$vars.push(t));
          }),
        k(t.el));
    (t.componentMainType = r),
      (t.componentIndex = n),
      (t.tooltipConfig = {
        name: i,
        option: E({content: i, formatterParams: o}, e),
      });
  }
  function hc(t, e) {
    var n;
    (n = t.isGroup ? e(t) : n) || t.traverse(e);
  }
  function cc(t, e) {
    if (t)
      if (F(t)) for (var n = 0; n < t.length; n++) hc(t[n], e);
      else hc(t, e);
  }
  Zh('circle', fu),
    Zh('ellipse', vu),
    Zh('sector', Bu),
    Zh('ring', Fu),
    Zh('polygon', Uu),
    Zh('polyline', qu),
    Zh('rect', Bs),
    Zh('line', Ju),
    Zh('bezierCurve', oh),
    Zh('arc', uh);
  var pc = Object.freeze({
      __proto__: null,
      Arc: uh,
      BezierCurve: oh,
      BoundingRect: Z,
      Circle: fu,
      CompoundPath: ph,
      Ellipse: vu,
      Group: Gr,
      Image: Cs,
      IncrementalDisplayable: n,
      Line: Ju,
      LinearGradient: mh,
      OrientedBoundingRect: Th,
      Path: vs,
      Point: H,
      Polygon: Uu,
      Polyline: qu,
      RadialGradient: fh,
      Rect: Bs,
      Ring: Fu,
      Sector: Bu,
      Text: Vs,
      applyTransform: ec,
      clipPointsByRect: oc,
      clipRectByRect: ac,
      createIcon: sc,
      extendPath: Uh,
      extendShape: Wh,
      getShapeClass: Yh,
      getTransform: tc,
      groupTransition: rc,
      initProps: Oh,
      isElementRemoved: Rh,
      lineLineIntersect: lc,
      linePolygonIntersect: function (t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
          var s = r[o];
          if (lc(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
          a = s;
        }
      },
      makeImage: qh,
      makePath: Xh,
      mergePath: Kh,
      registerShape: Zh,
      removeElement: Bh,
      removeElementWithFadeOut: Eh,
      resizePath: $h,
      setTooltipConfig: uc,
      subPixelOptimize: Jh,
      subPixelOptimizeLine: Qh,
      subPixelOptimizeRect: function (t) {
        return As(t.shape, t.shape, t.style), t;
      },
      transformDirection: nc,
      traverseElements: cc,
      updateProps: Lh,
    }),
    dc = {};
  function fc(t, e) {
    for (var n = 0; n < ol.length; n++) {
      var i = ol[n],
        r = e[i],
        i = t.ensureState(i);
      (i.style = i.style || {}), (i.style.text = r);
    }
    var o = t.currentStates.slice();
    t.clearStates(!0), t.setStyle({text: e.normal}), t.useStates(o, !0);
  }
  function gc(t, e, n) {
    for (
      var i,
        r = t.labelFetcher,
        o = t.labelDataIndex,
        a = t.labelDimIndex,
        s = e.normal,
        l = {
          normal: (i =
            null ==
            (i = r
              ? r.getFormattedLabel(
                  o,
                  'normal',
                  null,
                  a,
                  s && s.get('formatter'),
                  null != n ? {interpolatedValue: n} : null
                )
              : i)
              ? D(t.defaultText)
                ? t.defaultText(o, t, n)
                : t.defaultText
              : i),
        },
        u = 0;
      u < ol.length;
      u++
    ) {
      var h = ol[u],
        c = e[h];
      l[h] = R(
        r ? r.getFormattedLabel(o, h, null, a, c && c.get('formatter')) : null,
        i
      );
    }
    return l;
  }
  function yc(t, e, n, i) {
    n = n || dc;
    for (var r = t instanceof Vs, o = !1, a = 0; a < al.length; a++)
      if ((p = e[al[a]]) && p.getShallow('show')) {
        o = !0;
        break;
      }
    var s = r ? t : t.getTextContent();
    if (o) {
      r ||
        (s || ((s = new Vs()), t.setTextContent(s)),
        t.stateProxy && (s.stateProxy = t.stateProxy));
      var l = gc(n, e),
        u = e.normal,
        h = !!u.getShallow('show'),
        c = vc(u, i && i.normal, n, !1, !r);
      (c.text = l.normal), r || t.setTextConfig(_c(u, n, !1));
      for (a = 0; a < ol.length; a++) {
        var p,
          d,
          f,
          g = ol[a];
        (p = e[g]) &&
          ((d = s.ensureState(g)),
          (f = !!R(p.getShallow('show'), h)) != h && (d.ignore = !f),
          (d.style = vc(p, i && i[g], n, !0, !r)),
          (d.style.text = l[g]),
          r || (t.ensureState(g).textConfig = _c(p, n, !0)));
      }
      (s.silent = !!u.getShallow('silent')),
        null != s.style.x && (c.x = s.style.x),
        null != s.style.y && (c.y = s.style.y),
        (s.ignore = !h),
        s.useStyle(c),
        s.dirty(),
        n.enableTextSetter &&
          (Mc(s).setLabelText = function (t) {
            t = gc(n, e, t);
            fc(s, t);
          });
    } else s && (s.ignore = !0);
    t.dirty();
  }
  function mc(t, e) {
    for (
      var n = {normal: t.getModel((e = e || 'label'))}, i = 0;
      i < ol.length;
      i++
    ) {
      var r = ol[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function vc(t, e, n, i, r) {
    var o,
      a = {},
      s = a,
      l = t,
      u = n,
      h = i,
      c = r;
    u = u || dc;
    var p,
      t = l.ecModel,
      d = t && t.option.textStyle,
      f = (function (t) {
        var e;
        for (; t && t !== t.ecModel; ) {
          var n = (t.option || dc).rich;
          if (n) {
            e = e || {};
            for (var i = ht(n), r = 0; r < i.length; r++) {
              var o = i[r];
              e[o] = 1;
            }
          }
          t = t.parentModel;
        }
        return e;
      })(l);
    if (f)
      for (var g in ((p = {}), f))
        f.hasOwnProperty(g) &&
          ((o = l.getModel(['rich', g])),
          Sc((p[g] = {}), o, d, u, h, c, !1, !0));
    return (
      p && (s.rich = p),
      (t = l.get('overflow')) && (s.overflow = t),
      null != (t = l.get('minMargin')) && (s.margin = t),
      Sc(s, l, d, u, h, c, !0, !1),
      e && L(a, e),
      a
    );
  }
  function _c(t, e, n) {
    e = e || {};
    var i = {},
      r = t.getShallow('rotate'),
      o = R(t.getShallow('distance'), n ? null : 5),
      a = t.getShallow('offset'),
      n = t.getShallow('position') || (n ? null : 'inside');
    return (
      null != (n = 'outside' === n ? e.defaultOutsidePosition || 'top' : n) &&
        (i.position = n),
      null != a && (i.offset = a),
      null != r && ((r *= Math.PI / 180), (i.rotation = r)),
      null != o && (i.distance = o),
      (i.outsideFill =
        'inherit' === t.get('color') ? e.inheritColor || null : 'auto'),
      i
    );
  }
  var xc = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY',
    ],
    wc = [
      'align',
      'lineHeight',
      'width',
      'height',
      'tag',
      'verticalAlign',
      'ellipsis',
    ],
    bc = [
      'padding',
      'borderWidth',
      'borderRadius',
      'borderDashOffset',
      'backgroundColor',
      'borderColor',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY',
    ];
  function Sc(t, e, n, i, r, o, a, s) {
    n = (!r && n) || dc;
    var l = i && i.inheritColor,
      u = e.getShallow('color'),
      h = e.getShallow('textBorderColor'),
      c = R(e.getShallow('opacity'), n.opacity),
      u =
        (('inherit' !== u && 'auto' !== u) || (u = l || null),
        ('inherit' !== h && 'auto' !== h) || (h = l || null),
        o || ((u = u || n.color), (h = h || n.textBorderColor)),
        null != u && (t.fill = u),
        null != h && (t.stroke = h),
        R(e.getShallow('textBorderWidth'), n.textBorderWidth)),
      h =
        (null != u && (t.lineWidth = u),
        R(e.getShallow('textBorderType'), n.textBorderType)),
      u =
        (null != h && (t.lineDash = h),
        R(e.getShallow('textBorderDashOffset'), n.textBorderDashOffset));
    null != u && (t.lineDashOffset = u),
      null != (c = r || null != c || s ? c : i && i.defaultOpacity) &&
        (t.opacity = c),
      r || o || (null == t.fill && i.inheritColor && (t.fill = i.inheritColor));
    for (var p = 0; p < xc.length; p++) {
      var d = xc[p];
      null != (f = R(e.getShallow(d), n[d])) && (t[d] = f);
    }
    for (var p = 0; p < wc.length; p++) {
      d = wc[p];
      null != (f = e.getShallow(d)) && (t[d] = f);
    }
    if (
      (null == t.verticalAlign &&
        null != (h = e.getShallow('baseline')) &&
        (t.verticalAlign = h),
      !a || !i.disableBox)
    ) {
      for (p = 0; p < bc.length; p++) {
        var f,
          d = bc[p];
        null != (f = e.getShallow(d)) && (t[d] = f);
      }
      u = e.getShallow('borderType');
      null != u && (t.borderDash = u),
        ('auto' !== t.backgroundColor && 'inherit' !== t.backgroundColor) ||
          !l ||
          (t.backgroundColor = l),
        ('auto' !== t.borderColor && 'inherit' !== t.borderColor) ||
          !l ||
          (t.borderColor = l);
    }
  }
  var Mc = Bo();
  function Tc(n, i, r, t, o) {
    var a,
      s,
      l,
      u = Mc(n);
    u.valueAnimation &&
      u.prevValue !== u.value &&
      ((a = u.defaultInterpolatedText),
      (s = R(u.interpolatedValue, u.prevValue)),
      (l = u.value),
      (n.percent = 0),
      (null == u.prevValue ? Oh : Lh)(
        n,
        {percent: 1},
        t,
        i,
        null,
        function (t) {
          var e = (function (t, e, n, i, r) {
              var o = null == e || 'auto' === e;
              if (null == i) return i;
              if (dt(i))
                return io(
                  (p = wo(n || 0, i, r)),
                  o ? Math.max(oo(n || 0), oo(i)) : e
                );
              if (V(i)) return r < 1 ? n : i;
              for (
                var a = [],
                  s = n,
                  l = i,
                  u = Math.max(s ? s.length : 0, l.length),
                  h = 0;
                h < u;
                ++h
              ) {
                var c,
                  p,
                  d = t.getDimensionInfo(h);
                d && 'ordinal' === d.type
                  ? (a[h] = (r < 1 && s ? s : l)[h])
                  : ((p = wo((d = s && s[h] ? s[h] : 0), (c = l[h]), r)),
                    (a[h] = io(p, o ? Math.max(oo(d), oo(c)) : e)));
              }
              return a;
            })(r, u.precision, s, l, t),
            t =
              ((u.interpolatedValue = 1 === t ? null : e),
              gc(
                {
                  labelDataIndex: i,
                  labelFetcher: o,
                  defaultText: a ? a(e) : e + '',
                },
                u.statesModels,
                e
              ));
          fc(n, t);
        }
      ));
  }
  var Cc = ['textStyle', 'color'],
    Ic = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'padding',
      'lineHeight',
      'rich',
      'width',
      'height',
      'overflow',
    ],
    Dc = new Vs(),
    Jh =
      ((kc.prototype.getTextColor = function (t) {
        var e = this.ecModel;
        return this.getShallow('color') || (!t && e ? e.get(Cc) : null);
      }),
      (kc.prototype.getFont = function () {
        return (
          (t = {
            fontStyle: this.getShallow('fontStyle'),
            fontWeight: this.getShallow('fontWeight'),
            fontSize: this.getShallow('fontSize'),
            fontFamily: this.getShallow('fontFamily'),
          }),
          (e = (e = this.ecModel) && e.getModel('textStyle')),
          Ct(
            [
              t.fontStyle || (e && e.getShallow('fontStyle')) || '',
              t.fontWeight || (e && e.getShallow('fontWeight')) || '',
              (t.fontSize || (e && e.getShallow('fontSize')) || 12) + 'px',
              t.fontFamily || (e && e.getShallow('fontFamily')) || 'sans-serif',
            ].join(' ')
          )
        );
        var t, e;
      }),
      (kc.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow('verticalAlign') || this.getShallow('baseline'),
            },
            n = 0;
          n < Ic.length;
          n++
        )
          e[Ic[n]] = this.getShallow(Ic[n]);
        return Dc.useStyle(e), Dc.update(), Dc.getBoundingRect();
      }),
      kc);
  function kc() {}
  var Ac = [
      ['lineWidth', 'width'],
      ['stroke', 'color'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'type'],
      ['lineDashOffset', 'dashOffset'],
      ['lineCap', 'cap'],
      ['lineJoin', 'join'],
      ['miterLimit'],
    ],
    Pc = Jo(Ac),
    Lc =
      ((Oc.prototype.getLineStyle = function (t) {
        return Pc(this, t);
      }),
      Oc);
  function Oc() {}
  var Rc = [
      ['fill', 'color'],
      ['stroke', 'borderColor'],
      ['lineWidth', 'borderWidth'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'borderType'],
      ['lineDashOffset', 'borderDashOffset'],
      ['lineCap', 'borderCap'],
      ['lineJoin', 'borderJoin'],
      ['miterLimit', 'borderMiterLimit'],
    ],
    Bc = Jo(Rc),
    zc =
      ((Ec.prototype.getItemStyle = function (t, e) {
        return Bc(this, t, e);
      }),
      Ec);
  function Ec() {}
  (Vc.prototype.init = function (t, e, n) {}),
    (Vc.prototype.mergeOption = function (t, e) {
      d(this.option, t, !0);
    }),
    (Vc.prototype.get = function (t, e) {
      return null == t
        ? this.option
        : this._doGet(this.parsePath(t), !e && this.parentModel);
    }),
    (Vc.prototype.getShallow = function (t, e) {
      var n = this.option,
        n = null == n ? n : n[t];
      return (
        null != n || e || ((e = this.parentModel) && (n = e.getShallow(t))), n
      );
    }),
    (Vc.prototype.getModel = function (t, e) {
      var n = null != t,
        t = n ? this.parsePath(t) : null;
      return new Vc(
        n ? this._doGet(t) : this.option,
        (e =
          e ||
          (this.parentModel &&
            this.parentModel.getModel(this.resolveParentPath(t)))),
        this.ecModel
      );
    }),
    (Vc.prototype.isEmpty = function () {
      return null == this.option;
    }),
    (Vc.prototype.restoreData = function () {}),
    (Vc.prototype.clone = function () {
      return new this.constructor(y(this.option));
    }),
    (Vc.prototype.parsePath = function (t) {
      return 'string' == typeof t ? t.split('.') : t;
    }),
    (Vc.prototype.resolveParentPath = function (t) {
      return t;
    }),
    (Vc.prototype.isAnimationEnabled = function () {
      if (!b.node && this.option)
        return null != this.option.animation
          ? !!this.option.animation
          : this.parentModel
          ? this.parentModel.isAnimationEnabled()
          : void 0;
    }),
    (Vc.prototype._doGet = function (t, e) {
      var n = this.option;
      if (t) {
        for (
          var i = 0;
          i < t.length &&
          (!t[i] || null != (n = n && 'object' == typeof n ? n[t[i]] : null));
          i++
        );
        null == n &&
          e &&
          (n = e._doGet(this.resolveParentPath(t), e.parentModel));
      }
      return n;
    });
  var Nc,
    Fc = Vc;
  function Vc(t, e, n) {
    (this.parentModel = e), (this.ecModel = n), (this.option = t);
  }
  Xo(Fc),
    (np = Fc),
    (Nc = ['__\0is_clz', jo++].join('_')),
    (np.prototype[Nc] = !0),
    (np.isInstance = function (t) {
      return !(!t || !t[Nc]);
    }),
    at(Fc, Lc),
    at(Fc, zc),
    at(Fc, ea),
    at(Fc, Jh);
  var Hc = Math.round(10 * Math.random());
  function Wc(t) {
    return [t || '', Hc++].join('_');
  }
  function Gc(t, e) {
    return d(d({}, t, !0), e, !0);
  }
  var Uc = 'ZH',
    Zc = 'EN',
    Yc = Zc,
    Xc = {},
    qc = {},
    jc =
      b.domSupported &&
      -1 <
        (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage ||
          Yc
        )
          .toUpperCase()
          .indexOf(Uc)
        ? Uc
        : Yc;
  function Kc(t, e) {
    (t = t.toUpperCase()), (qc[t] = new Fc(e)), (Xc[t] = e);
  }
  Kc(Zc, {
    time: {
      month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthAbbr: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      dayOfWeekAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    legend: {selector: {all: 'All', inverse: 'Inv'}},
    toolbox: {
      brush: {
        title: {
          rect: 'Box Select',
          polygon: 'Lasso Select',
          lineX: 'Horizontally Select',
          lineY: 'Vertically Select',
          keep: 'Keep Selections',
          clear: 'Clear Selections',
        },
      },
      dataView: {title: 'Data View', lang: ['Data View', 'Close', 'Refresh']},
      dataZoom: {title: {zoom: 'Zoom', back: 'Zoom Reset'}},
      magicType: {
        title: {
          line: 'Switch to Line Chart',
          bar: 'Switch to Bar Chart',
          stack: 'Stack',
          tiled: 'Tile',
        },
      },
      restore: {title: 'Restore'},
      saveAsImage: {
        title: 'Save as Image',
        lang: ['Right Click to Save Image'],
      },
    },
    series: {
      typeNames: {
        pie: 'Pie chart',
        bar: 'Bar chart',
        line: 'Line chart',
        scatter: 'Scatter plot',
        effectScatter: 'Ripple scatter plot',
        radar: 'Radar chart',
        tree: 'Tree',
        treemap: 'Treemap',
        boxplot: 'Boxplot',
        candlestick: 'Candlestick',
        k: 'K line chart',
        heatmap: 'Heat map',
        map: 'Map',
        parallel: 'Parallel coordinate map',
        lines: 'Line graph',
        graph: 'Relationship graph',
        sankey: 'Sankey diagram',
        funnel: 'Funnel chart',
        gauge: 'Gauge',
        pictorialBar: 'Pictorial bar',
        themeRiver: 'Theme River Map',
        sunburst: 'Sunburst',
        custom: 'Custom chart',
        chart: 'Chart',
      },
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: 'This is a chart',
      },
      series: {
        single: {
          prefix: '',
          withName: ' with type {seriesType} named {seriesName}.',
          withoutName: ' with type {seriesType}.',
        },
        multiple: {
          prefix: '. It consists of {seriesCount} series count.',
          withName:
            ' The {seriesId} series is a {seriesType} representing {seriesName}.',
          withoutName: ' The {seriesId} series is a {seriesType}.',
          separator: {middle: '', end: ''},
        },
      },
      data: {
        allData: 'The data is as follows: ',
        partialData: 'The first {displayCnt} items are: ',
        withName: 'the data for {name} is {value}',
        withoutName: '{value}',
        separator: {middle: ', ', end: '. '},
      },
    },
  }),
    Kc(Uc, {
      time: {
        month: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
        ],
        monthAbbr: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        dayOfWeek: [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
        ],
        dayOfWeekAbbr: ['日', '一', '二', '三', '四', '五', '六'],
      },
      legend: {selector: {all: '全选', inverse: '反选'}},
      toolbox: {
        brush: {
          title: {
            rect: '矩形选择',
            polygon: '圈选',
            lineX: '横向选择',
            lineY: '纵向选择',
            keep: '保持选择',
            clear: '清除选择',
          },
        },
        dataView: {title: '数据视图', lang: ['数据视图', '关闭', '刷新']},
        dataZoom: {title: {zoom: '区域缩放', back: '区域缩放还原'}},
        magicType: {
          title: {
            line: '切换为折线图',
            bar: '切换为柱状图',
            stack: '切换为堆叠',
            tiled: '切换为平铺',
          },
        },
        restore: {title: '还原'},
        saveAsImage: {title: '保存为图片', lang: ['右键另存为图片']},
      },
      series: {
        typeNames: {
          pie: '饼图',
          bar: '柱状图',
          line: '折线图',
          scatter: '散点图',
          effectScatter: '涟漪散点图',
          radar: '雷达图',
          tree: '树图',
          treemap: '矩形树图',
          boxplot: '箱型图',
          candlestick: 'K线图',
          k: 'K线图',
          heatmap: '热力图',
          map: '地图',
          parallel: '平行坐标图',
          lines: '线图',
          graph: '关系图',
          sankey: '桑基图',
          funnel: '漏斗图',
          gauge: '仪表盘图',
          pictorialBar: '象形柱图',
          themeRiver: '主题河流图',
          sunburst: '旭日图',
          custom: '自定义图表',
          chart: '图表',
        },
      },
      aria: {
        general: {
          withTitle: '这是一个关于“{title}”的图表。',
          withoutTitle: '这是一个图表，',
        },
        series: {
          single: {
            prefix: '',
            withName: '图表类型是{seriesType}，表示{seriesName}。',
            withoutName: '图表类型是{seriesType}。',
          },
          multiple: {
            prefix: '它由{seriesCount}个图表系列组成。',
            withName:
              '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
            withoutName: '第{seriesId}个系列是一个{seriesType}，',
            separator: {middle: '；', end: '。'},
          },
        },
        data: {
          allData: '其数据是——',
          partialData: '其中，前{displayCnt}项是——',
          withName: '{name}的数据是{value}',
          withoutName: '{value}',
          separator: {middle: '，', end: ''},
        },
      },
    });
  var $c = 1e3,
    Qc = 60 * $c,
    Jc = 60 * Qc,
    tp = 24 * Jc,
    jo = 365 * tp,
    ep = {
      year: '{yyyy}',
      month: '{MMM}',
      day: '{d}',
      hour: '{HH}:{mm}',
      minute: '{HH}:{mm}',
      second: '{HH}:{mm}:{ss}',
      millisecond: '{HH}:{mm}:{ss} {SSS}',
      none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}',
    },
    np = '{yyyy}-{MM}-{dd}',
    ip = {
      year: '{yyyy}',
      month: '{yyyy}-{MM}',
      day: np,
      hour: np + ' ' + ep.hour,
      minute: np + ' ' + ep.minute,
      second: np + ' ' + ep.second,
      millisecond: ep.none,
    },
    rp = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    op = [
      'year',
      'half-year',
      'quarter',
      'month',
      'week',
      'half-week',
      'day',
      'half-day',
      'quarter-day',
      'hour',
      'minute',
      'second',
      'millisecond',
    ];
  function ap(t, e) {
    return '0000'.substr(0, e - (t += '').length) + t;
  }
  function sp(t) {
    switch (t) {
      case 'half-year':
      case 'quarter':
        return 'month';
      case 'week':
      case 'half-week':
        return 'day';
      case 'half-day':
      case 'quarter-day':
        return 'hour';
      default:
        return t;
    }
  }
  function lp(t, e, n, i) {
    var t = po(t),
      r = t[cp(n)](),
      o = t[pp(n)]() + 1,
      a = Math.floor((o - 1) / 3) + 1,
      s = t[dp(n)](),
      l = t['get' + (n ? 'UTC' : '') + 'Day'](),
      u = t[fp(n)](),
      h = ((u - 1) % 12) + 1,
      c = t[gp(n)](),
      p = t[yp(n)](),
      t = t[mp(n)](),
      n = (i instanceof Fc ? i : qc[i || jc] || qc[Yc]).getModel('time'),
      i = n.get('month'),
      d = n.get('monthAbbr'),
      f = n.get('dayOfWeek'),
      n = n.get('dayOfWeekAbbr');
    return (e || '')
      .replace(/{yyyy}/g, r + '')
      .replace(/{yy}/g, ap((r % 100) + '', 2))
      .replace(/{Q}/g, a + '')
      .replace(/{MMMM}/g, i[o - 1])
      .replace(/{MMM}/g, d[o - 1])
      .replace(/{MM}/g, ap(o, 2))
      .replace(/{M}/g, o + '')
      .replace(/{dd}/g, ap(s, 2))
      .replace(/{d}/g, s + '')
      .replace(/{eeee}/g, f[l])
      .replace(/{ee}/g, n[l])
      .replace(/{e}/g, l + '')
      .replace(/{HH}/g, ap(u, 2))
      .replace(/{H}/g, u + '')
      .replace(/{hh}/g, ap(h + '', 2))
      .replace(/{h}/g, h + '')
      .replace(/{mm}/g, ap(c, 2))
      .replace(/{m}/g, c + '')
      .replace(/{ss}/g, ap(p, 2))
      .replace(/{s}/g, p + '')
      .replace(/{SSS}/g, ap(t, 3))
      .replace(/{S}/g, t + '');
  }
  function up(t, e) {
    var t = po(t),
      n = t[pp(e)]() + 1,
      i = t[dp(e)](),
      r = t[fp(e)](),
      o = t[gp(e)](),
      a = t[yp(e)](),
      t = 0 === t[mp(e)](),
      e = t && 0 === a,
      a = e && 0 === o,
      o = a && 0 === r,
      r = o && 1 === i;
    return r && 1 === n
      ? 'year'
      : r
      ? 'month'
      : o
      ? 'day'
      : a
      ? 'hour'
      : e
      ? 'minute'
      : t
      ? 'second'
      : 'millisecond';
  }
  function hp(t, e, n) {
    var i = dt(t) ? po(t) : t;
    switch ((e = e || up(t, n))) {
      case 'year':
        return i[cp(n)]();
      case 'half-year':
        return 6 <= i[pp(n)]() ? 1 : 0;
      case 'quarter':
        return Math.floor((i[pp(n)]() + 1) / 4);
      case 'month':
        return i[pp(n)]();
      case 'day':
        return i[dp(n)]();
      case 'half-day':
        return i[fp(n)]() / 24;
      case 'hour':
        return i[fp(n)]();
      case 'minute':
        return i[gp(n)]();
      case 'second':
        return i[yp(n)]();
      case 'millisecond':
        return i[mp(n)]();
    }
  }
  function cp(t) {
    return t ? 'getUTCFullYear' : 'getFullYear';
  }
  function pp(t) {
    return t ? 'getUTCMonth' : 'getMonth';
  }
  function dp(t) {
    return t ? 'getUTCDate' : 'getDate';
  }
  function fp(t) {
    return t ? 'getUTCHours' : 'getHours';
  }
  function gp(t) {
    return t ? 'getUTCMinutes' : 'getMinutes';
  }
  function yp(t) {
    return t ? 'getUTCSeconds' : 'getSeconds';
  }
  function mp(t) {
    return t ? 'getUTCMilliseconds' : 'getMilliseconds';
  }
  function vp(t) {
    return t ? 'setUTCMonth' : 'setMonth';
  }
  function _p(t) {
    return t ? 'setUTCDate' : 'setDate';
  }
  function xp(t) {
    return t ? 'setUTCHours' : 'setHours';
  }
  function wp(t) {
    return t ? 'setUTCMinutes' : 'setMinutes';
  }
  function bp(t) {
    return t ? 'setUTCSeconds' : 'setSeconds';
  }
  function Sp(t) {
    return t ? 'setUTCMilliseconds' : 'setMilliseconds';
  }
  function Mp(t) {
    var e;
    return vo(t)
      ? (e = (t + '').split('.'))[0].replace(
          /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
          '$1,'
        ) + (1 < e.length ? '.' + e[1] : '')
      : V(t)
      ? t
      : '-';
  }
  function Tp(t, e) {
    return (
      (t = (t || '').toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      })),
      (t = e ? t && t.charAt(0).toUpperCase() + t.slice(1) : t)
    );
  }
  var Cp = Mt;
  function Ip(t, e, n) {
    function i(t) {
      return t && Ct(t) ? t : '-';
    }
    function r(t) {
      return null != t && !isNaN(t) && isFinite(t);
    }
    var o = 'time' === e,
      a = t instanceof Date;
    if (o || a) {
      var o = o ? po(t) : t;
      if (!isNaN(+o)) return lp(o, '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}', n);
      if (a) return '-';
    }
    return 'ordinal' === e
      ? pt(t)
        ? i(t)
        : dt(t) && r(t)
        ? t + ''
        : '-'
      : r((o = mo(t)))
      ? Mp(o)
      : pt(t)
      ? i(t)
      : 'boolean' == typeof t
      ? t + ''
      : '-';
  }
  function Dp(t, e) {
    return '{' + t + (null == e ? '' : e) + '}';
  }
  var kp = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  function Ap(t, e, n) {
    var i = (e = F(e) ? e : [e]).length;
    if (!i) return '';
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = kp[o];
      t = t.replace(Dp(a), Dp(a, 0));
    }
    for (var s = 0; s < i; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(Dp(kp[l], s), n ? _e(u) : u);
      }
    return t;
  }
  function Pp(t, e) {
    var t = V(t) ? {color: t, extraCssText: e} : t || {},
      n = t.color,
      i = t.type,
      r = ((e = t.extraCssText), t.renderMode || 'html');
    return n
      ? 'html' === r
        ? 'subItem' === i
          ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            _e(n) +
            ';' +
            (e || '') +
            '"></span>'
          : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            _e(n) +
            ';' +
            (e || '') +
            '"></span>'
        : {
            renderMode: r,
            content: '{' + (t.markerId || 'markerX') + '|}  ',
            style:
              'subItem' === i
                ? {width: 4, height: 4, borderRadius: 2, backgroundColor: n}
                : {width: 10, height: 10, borderRadius: 5, backgroundColor: n},
          }
      : '';
  }
  function Lp(t, e) {
    return (
      (e = e || 'transparent'),
      V(t) ? t : (O(t) && t.colorStops && (t.colorStops[0] || {}).color) || e
    );
  }
  function Op(t, e) {
    var n;
    '_blank' === e || 'blank' === e
      ? (((n = window.open()).opener = null), (n.location.href = t))
      : window.open(t, e);
  }
  var Rp = z,
    Bp = ['left', 'right', 'top', 'bottom', 'width', 'height'],
    zp = [
      ['width', 'left', 'right'],
      ['height', 'top', 'bottom'],
    ];
  function Ep(a, s, l, u, h) {
    var c = 0,
      p = 0,
      d = (null == u && (u = 1 / 0), null == h && (h = 1 / 0), 0);
    s.eachChild(function (t, e) {
      var n,
        i,
        r,
        o = t.getBoundingRect(),
        e = s.childAt(e + 1),
        e = e && e.getBoundingRect();
      (d =
        'horizontal' === a
          ? ((i = o.width + (e ? -e.x + o.x : 0)),
            u < (n = c + i) || t.newline
              ? ((c = 0), (n = i), (p += d + l), o.height)
              : Math.max(d, o.height))
          : ((i = o.height + (e ? -e.y + o.y : 0)),
            h < (r = p + i) || t.newline
              ? ((c += d + l), (p = 0), (r = i), o.width)
              : Math.max(d, o.width))),
        t.newline ||
          ((t.x = c),
          (t.y = p),
          t.markRedraw(),
          'horizontal' === a ? (c = n + l) : (p = r + l));
    });
  }
  var Np = Ep;
  function Fp(t, e, n) {
    n = Cp(n || 0);
    var i = e.width,
      r = e.height,
      o = no(t.left, i),
      a = no(t.top, r),
      e = no(t.right, i),
      s = no(t.bottom, r),
      l = no(t.width, i),
      u = no(t.height, r),
      h = n[2] + n[0],
      c = n[1] + n[3],
      p = t.aspect;
    switch (
      (isNaN(l) && (l = i - e - c - o),
      isNaN(u) && (u = r - s - h - a),
      null != p &&
        (isNaN(l) && isNaN(u) && (i / r < p ? (l = 0.8 * i) : (u = 0.8 * r)),
        isNaN(l) && (l = p * u),
        isNaN(u)) &&
        (u = l / p),
      isNaN(o) && (o = i - e - l - c),
      isNaN(a) && (a = r - s - u - h),
      t.left || t.right)
    ) {
      case 'center':
        o = i / 2 - l / 2 - n[3];
        break;
      case 'right':
        o = i - l - c;
    }
    switch (t.top || t.bottom) {
      case 'middle':
      case 'center':
        a = r / 2 - u / 2 - n[0];
        break;
      case 'bottom':
        a = r - u - h;
    }
    (o = o || 0),
      (a = a || 0),
      isNaN(l) && (l = i - c - o - (e || 0)),
      isNaN(u) && (u = r - h - a - (s || 0));
    p = new Z(o + n[3], a + n[0], l, u);
    return (p.margin = n), p;
  }
  function Vp(t) {
    t = t.layoutMode || t.constructor.layoutMode;
    return O(t) ? t : t ? {type: t} : null;
  }
  function Hp(l, u, t) {
    var h = t && t.ignoreSize,
      t = (F(h) || (h = [h, h]), n(zp[0], 0)),
      e = n(zp[1], 1);
    function n(t, e) {
      var n = {},
        i = 0,
        r = {},
        o = 0;
      if (
        (Rp(t, function (t) {
          r[t] = l[t];
        }),
        Rp(t, function (t) {
          c(u, t) && (n[t] = r[t] = u[t]), p(n, t) && i++, p(r, t) && o++;
        }),
        h[e])
      )
        p(u, t[1]) ? (r[t[2]] = null) : p(u, t[2]) && (r[t[1]] = null);
      else if (2 !== o && i) {
        if (!(2 <= i))
          for (var a = 0; a < t.length; a++) {
            var s = t[a];
            if (!c(n, s) && c(l, s)) {
              n[s] = l[s];
              break;
            }
          }
        return n;
      }
      return r;
    }
    function c(t, e) {
      return t.hasOwnProperty(e);
    }
    function p(t, e) {
      return null != t[e] && 'auto' !== t[e];
    }
    function i(t, e, n) {
      Rp(t, function (t) {
        e[t] = n[t];
      });
    }
    i(zp[0], l, t), i(zp[1], l, e);
  }
  function Wp(t) {
    return (
      (e = {}),
      (n = t) &&
        e &&
        Rp(Bp, function (t) {
          n.hasOwnProperty(t) && (e[t] = n[t]);
        }),
      e
    );
    var e, n;
  }
  ct(Ep, 'vertical'), ct(Ep, 'horizontal');
  var Gp,
    Up,
    Zp,
    Yp,
    Xp = Bo(),
    g =
      (u(qp, (Gp = Fc)),
      (qp.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n);
      }),
      (qp.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Vp(this),
          i = n ? Wp(t) : {};
        d(t, e.getTheme().get(this.mainType)),
          d(t, this.getDefaultOption()),
          n && Hp(t, i, n);
      }),
      (qp.prototype.mergeOption = function (t, e) {
        d(this.option, t, !0);
        var n = Vp(this);
        n && Hp(this.option, t, n);
      }),
      (qp.prototype.optionUpdated = function (t, e) {}),
      (qp.prototype.getDefaultOption = function () {
        var t = this.constructor;
        if (!(e = t) || !e[Zo]) return t.defaultOption;
        var e = Xp(this);
        if (!e.defaultOption) {
          for (var n = [], i = t; i; ) {
            var r = i.prototype.defaultOption;
            r && n.push(r), (i = i.superClass);
          }
          for (var o = {}, a = n.length - 1; 0 <= a; a--) o = d(o, n[a], !0);
          e.defaultOption = o;
        }
        return e.defaultOption;
      }),
      (qp.prototype.getReferringComponents = function (t, e) {
        var n = t + 'Id';
        return Ho(
          this.ecModel,
          t,
          {index: this.get(t + 'Index', !0), id: this.get(n, !0)},
          e
        );
      }),
      (qp.prototype.getBoxLayoutParams = function () {
        return {
          left: this.get('left'),
          top: this.get('top'),
          right: this.get('right'),
          bottom: this.get('bottom'),
          width: this.get('width'),
          height: this.get('height'),
        };
      }),
      (qp.prototype.getZLevelKey = function () {
        return '';
      }),
      (qp.prototype.setZLevel = function (t) {
        this.option.zlevel = t;
      }),
      (qp.protoInitialize =
        (((Lc = qp.prototype).type = 'component'),
        (Lc.id = ''),
        (Lc.name = ''),
        (Lc.mainType = ''),
        (Lc.subType = ''),
        void (Lc.componentIndex = 0))),
      qp);
  function qp(t, e, n) {
    t = Gp.call(this, t, e, n) || this;
    return (t.uid = Wc('ec_cpt_model')), t;
  }
  function jp(t, e) {
    return t[e] || (t[e] = {predecessor: [], successor: []}), t[e];
  }
  qo(g, Fc),
    Qo(g),
    (Zp = {}),
    ((Up = g).registerSubTypeDefaulter = function (t, e) {
      t = Yo(t);
      Zp[t.main] = e;
    }),
    (Up.determineSubType = function (t, e) {
      var n,
        i = e.type;
      return (
        i || ((n = Yo(t).main), Up.hasSubTypes(t) && Zp[n] && (i = Zp[n](e))), i
      );
    }),
    (Yp = function (t) {
      var e = [];
      z(g.getClassesByMainType(t), function (t) {
        e = e.concat(t.dependencies || t.prototype.dependencies || []);
      }),
        (e = N(e, function (t) {
          return Yo(t).main;
        })),
        'dataset' !== t && I(e, 'dataset') <= 0 && e.unshift('dataset');
      return e;
    }),
    (g.topologicalTravel = function (t, e, n, i) {
      if (t.length) {
        (a = {}),
          (s = []),
          z((o = e), function (n) {
            var e,
              i,
              r = jp(a, n),
              t = (r.originalDeps = Yp(n)),
              t =
                ((e = o),
                (i = []),
                z(t, function (t) {
                  0 <= I(e, t) && i.push(t);
                }),
                i);
            (r.entryCount = t.length),
              0 === r.entryCount && s.push(n),
              z(t, function (t) {
                I(r.predecessor, t) < 0 && r.predecessor.push(t);
                var e = jp(a, t);
                I(e.successor, t) < 0 && e.successor.push(n);
              });
          });
        var o,
          a,
          s,
          e = {graph: a, noEntryList: s},
          r = e.graph,
          l = e.noEntryList,
          u = {};
        for (
          z(t, function (t) {
            u[t] = !0;
          });
          l.length;

        ) {
          var h = l.pop(),
            c = r[h],
            p = !!u[h];
          p && (n.call(i, h, c.originalDeps.slice()), delete u[h]),
            z(c.successor, p ? f : d);
        }
        z(u, function () {
          throw new Error('');
        });
      }
      function d(t) {
        r[t].entryCount--, 0 === r[t].entryCount && l.push(t);
      }
      function f(t) {
        (u[t] = !0), d(t);
      }
    });
  var zc = '',
    ea =
      ('undefined' != typeof navigator && (zc = navigator.platform || ''),
      'rgba(0, 0, 0, 0.2)'),
    Kp = {
      darkMode: 'auto',
      colorBy: 'series',
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc',
      ],
      gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
      aria: {
        decal: {
          decals: [
            {
              color: ea,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6,
            },
            {
              color: ea,
              symbol: 'circle',
              dashArrayX: [
                [8, 8],
                [0, 8, 8, 0],
              ],
              dashArrayY: [6, 0],
              symbolSize: 0.8,
            },
            {
              color: ea,
              dashArrayX: [1, 0],
              dashArrayY: [4, 3],
              rotation: -Math.PI / 4,
            },
            {
              color: ea,
              dashArrayX: [
                [6, 6],
                [0, 6, 6, 0],
              ],
              dashArrayY: [6, 0],
            },
            {
              color: ea,
              dashArrayX: [
                [1, 0],
                [1, 6],
              ],
              dashArrayY: [1, 0, 6, 0],
              rotation: Math.PI / 4,
            },
            {
              color: ea,
              symbol: 'triangle',
              dashArrayX: [
                [9, 9],
                [0, 9, 9, 0],
              ],
              dashArrayY: [7, 2],
              symbolSize: 0.75,
            },
          ],
        },
      },
      textStyle: {
        fontFamily: zc.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      blendMode: null,
      stateAnimation: {duration: 300, easing: 'cubicOut'},
      animation: 'auto',
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicInOut',
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1,
    },
    $p = B([
      'tooltip',
      'label',
      'itemName',
      'itemId',
      'itemGroupId',
      'itemChildGroupId',
      'seriesName',
    ]),
    Qp = 'original',
    Jp = 'arrayRows',
    td = 'objectRows',
    ed = 'keyedColumns',
    nd = 'typedArray',
    id = 'unknown',
    rd = 'column',
    od = 'row',
    ad = {Must: 1, Might: 2, Not: 3},
    sd = Bo();
  function ld(n, t, e) {
    var r,
      o,
      a,
      i,
      s,
      l = {},
      u = hd(t);
    return (
      u &&
        n &&
        ((r = []),
        (o = []),
        (t = t.ecModel),
        (t = sd(t).datasetMap),
        (u = u.uid + '_' + e.seriesLayoutBy),
        z((n = n.slice()), function (t, e) {
          t = O(t) ? t : (n[e] = {name: t});
          'ordinal' === t.type && null == a && ((a = e), (i = c(t))),
            (l[t.name] = []);
        }),
        (s = t.get(u) || t.set(u, {categoryWayDim: i, valueWayDim: 0})),
        z(n, function (t, e) {
          var n,
            i = t.name,
            t = c(t);
          null == a
            ? ((n = s.valueWayDim),
              h(l[i], n, t),
              h(o, n, t),
              (s.valueWayDim += t))
            : a === e
            ? (h(l[i], 0, t), h(r, 0, t))
            : ((n = s.categoryWayDim),
              h(l[i], n, t),
              h(o, n, t),
              (s.categoryWayDim += t));
        }),
        r.length && (l.itemName = r),
        o.length) &&
        (l.seriesName = o),
      l
    );
    function h(t, e, n) {
      for (var i = 0; i < n; i++) t.push(e + i);
    }
    function c(t) {
      t = t.dimsDef;
      return t ? t.length : 1;
    }
  }
  function ud(t, l, u) {
    var h,
      c,
      p,
      e = {};
    return (
      hd(t) &&
        ((h = l.sourceFormat),
        (c = l.dimensionsDefine),
        (h !== td && h !== ed) ||
          z(c, function (t, e) {
            'name' === (O(t) ? t.name : t) && (p = e);
          }),
        (t = (function () {
          for (
            var t = {}, e = {}, n = [], i = 0, r = Math.min(5, u);
            i < r;
            i++
          ) {
            var o = pd(l.data, h, l.seriesLayoutBy, c, l.startIndex, i),
              a = (n.push(o), o === ad.Not);
            if (
              (a && null == t.v && i !== p && (t.v = i),
              (null != t.n && t.n !== t.v && (a || n[t.n] !== ad.Not)) ||
                (t.n = i),
              s(t) && n[t.n] !== ad.Not)
            )
              return t;
            a ||
              (o === ad.Might && null == e.v && i !== p && (e.v = i),
              null != e.n && e.n !== e.v) ||
              (e.n = i);
          }
          function s(t) {
            return null != t.v && null != t.n;
          }
          return s(t) ? t : s(e) ? e : null;
        })())) &&
        ((e.value = [t.v]),
        (t = null != p ? p : t.n),
        (e.itemName = [t]),
        (e.seriesName = [t])),
      e
    );
  }
  function hd(t) {
    if (!t.get('data', !0))
      return Ho(
        t.ecModel,
        'dataset',
        {index: t.get('datasetIndex', !0), id: t.get('datasetId', !0)},
        Fo
      ).models[0];
  }
  function cd(t, e) {
    return pd(
      t.data,
      t.sourceFormat,
      t.seriesLayoutBy,
      t.dimensionsDefine,
      t.startIndex,
      e
    );
  }
  function pd(t, e, n, i, r, o) {
    var a, s, l;
    if (!gt(t)) {
      if (
        (i && (O((i = i[o])) ? ((s = i.name), (l = i.type)) : V(i) && (s = i)),
        null != l)
      )
        return 'ordinal' === l ? ad.Must : ad.Not;
      if (e === Jp) {
        var u = t;
        if (n === od) {
          for (var h = u[o], c = 0; c < (h || []).length && c < 5; c++)
            if (null != (a = m(h[r + c]))) return a;
        } else
          for (c = 0; c < u.length && c < 5; c++) {
            var p = u[r + c];
            if (p && null != (a = m(p[o]))) return a;
          }
      } else if (e === td) {
        var d = t;
        if (!s) return ad.Not;
        for (c = 0; c < d.length && c < 5; c++)
          if ((g = d[c]) && null != (a = m(g[s]))) return a;
      } else if (e === ed) {
        if (!s) return ad.Not;
        if (!(h = t[s]) || gt(h)) return ad.Not;
        for (c = 0; c < h.length && c < 5; c++)
          if (null != (a = m(h[c]))) return a;
      } else if (e === Qp)
        for (var f = t, c = 0; c < f.length && c < 5; c++) {
          var g,
            y = Co((g = f[c]));
          if (!F(y)) return ad.Not;
          if (null != (a = m(y[o]))) return a;
        }
    }
    return ad.Not;
    function m(t) {
      var e = V(t);
      return null != t && isFinite(t) && '' !== t
        ? e
          ? ad.Might
          : ad.Not
        : e && '-' !== t
        ? ad.Must
        : void 0;
    }
  }
  var dd = B();
  var fd,
    gd,
    yd,
    md = Bo(),
    vd =
      (Bo(),
      (_d.prototype.getColorFromPalette = function (t, e, n) {
        var i = So(this.get('color', !0)),
          r = this.get('colorLayer', !0),
          o = this,
          a = md;
        return (
          (a = a((e = e || o))),
          (o = a.paletteIdx || 0),
          (e = a.paletteNameMap = a.paletteNameMap || {}).hasOwnProperty(t)
            ? e[t]
            : (r = (r = n == null || !r ? i : xd(r, n)) || i) && r.length
            ? ((n = r[o]),
              t && (e[t] = n),
              (a.paletteIdx = (o + 1) % r.length),
              n)
            : void 0
        );
      }),
      (_d.prototype.clearColorPalette = function () {
        var t, e;
        ((e = md)((t = this)).paletteIdx = 0), (e(t).paletteNameMap = {});
      }),
      _d);
  function _d() {}
  function xd(t, e) {
    for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];
    return t[n - 1];
  }
  var wd,
    bd = '\0_ec_inner',
    Sd =
      (u(s, (wd = Fc)),
      (s.prototype.init = function (t, e, n, i, r, o) {
        (i = i || {}),
          (this.option = null),
          (this._theme = new Fc(i)),
          (this._locale = new Fc(r)),
          (this._optionManager = o);
      }),
      (s.prototype.setOption = function (t, e, n) {
        e = Cd(e);
        this._optionManager.setOption(t, n, e), this._resetOption(null, e);
      }),
      (s.prototype.resetOption = function (t, e) {
        return this._resetOption(t, Cd(e));
      }),
      (s.prototype._resetOption = function (t, e) {
        var n,
          i = !1,
          r = this._optionManager;
        return (
          (t && 'recreate' !== t) ||
            ((n = r.mountOption('recreate' === t)),
            this.option && 'recreate' !== t
              ? (this.restoreData(), this._mergeOption(n, e))
              : yd(this, n),
            (i = !0)),
          ('timeline' !== t && 'media' !== t) || this.restoreData(),
          (t && 'recreate' !== t && 'timeline' !== t) ||
            ((n = r.getTimelineOption(this)) &&
              ((i = !0), this._mergeOption(n, e))),
          (t && 'recreate' !== t && 'media' !== t) ||
            ((n = r.getMediaOption(this)).length &&
              z(
                n,
                function (t) {
                  (i = !0), this._mergeOption(t, e);
                },
                this
              )),
          i
        );
      }),
      (s.prototype.mergeOption = function (t) {
        this._mergeOption(t, null);
      }),
      (s.prototype._mergeOption = function (i, t) {
        var r = this.option,
          h = this._componentsMap,
          c = this._componentsCount,
          n = [],
          o = B(),
          p = t && t.replaceMergeMainTypeMap;
        (sd(this).datasetMap = B()),
          z(i, function (t, e) {
            null != t &&
              (g.hasClass(e)
                ? e && (n.push(e), o.set(e, !0))
                : (r[e] = null == r[e] ? y(t) : d(r[e], t, !0)));
          }),
          p &&
            p.each(function (t, e) {
              g.hasClass(e) && !o.get(e) && (n.push(e), o.set(e, !0));
            }),
          g.topologicalTravel(
            n,
            g.getAllClassMainTypes(),
            function (o) {
              var a,
                t = (function (t, e, n) {
                  return (e = (e = dd.get(e)) && e(t)) ? n.concat(e) : n;
                })(this, o, So(i[o])),
                e = h.get(o),
                n = e
                  ? p && p.get(o)
                    ? 'replaceMerge'
                    : 'normalMerge'
                  : 'replaceAll',
                e = Io(e, t, n),
                s =
                  (Oo(e, o, g), (r[o] = null), h.set(o, null), c.set(o, 0), []),
                l = [],
                u = 0;
              z(
                e,
                function (t, e) {
                  var n = t.existing,
                    i = t.newOption;
                  if (i) {
                    var r = g.getClass(o, t.keyInfo.subType, !('series' === o));
                    if (!r) return;
                    if ('tooltip' === o) {
                      if (a) return;
                      a = !0;
                    }
                    n && n.constructor === r
                      ? ((n.name = t.keyInfo.name),
                        n.mergeOption(i, this),
                        n.optionUpdated(i, !1))
                      : ((e = L({componentIndex: e}, t.keyInfo)),
                        L((n = new r(i, this, this, e)), e),
                        t.brandNew && (n.__requireNewView = !0),
                        n.init(i, this, this),
                        n.optionUpdated(null, !0));
                  } else
                    n && (n.mergeOption({}, this), n.optionUpdated({}, !1));
                  n
                    ? (s.push(n.option), l.push(n), u++)
                    : (s.push(void 0), l.push(void 0));
                },
                this
              ),
                (r[o] = s),
                h.set(o, l),
                c.set(o, u),
                'series' === o && fd(this);
            },
            this
          ),
          this._seriesIndices || fd(this);
      }),
      (s.prototype.getOption = function () {
        var a = y(this.option);
        return (
          z(a, function (t, e) {
            if (g.hasClass(e)) {
              for (var n = So(t), i = n.length, r = !1, o = i - 1; 0 <= o; o--)
                n[o] && !Lo(n[o]) ? (r = !0) : ((n[o] = null), r || i--);
              (n.length = i), (a[e] = n);
            }
          }),
          delete a[bd],
          a
        );
      }),
      (s.prototype.getTheme = function () {
        return this._theme;
      }),
      (s.prototype.getLocaleModel = function () {
        return this._locale;
      }),
      (s.prototype.setUpdatePayload = function (t) {
        this._payload = t;
      }),
      (s.prototype.getUpdatePayload = function () {
        return this._payload;
      }),
      (s.prototype.getComponent = function (t, e) {
        var n = this._componentsMap.get(t);
        if (n) {
          t = n[e || 0];
          if (t) return t;
          if (null == e)
            for (var i = 0; i < n.length; i++) if (n[i]) return n[i];
        }
      }),
      (s.prototype.queryComponents = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.mainType;
        return a &&
          ((e = t.index),
          (n = t.id),
          (i = t.name),
          (r = this._componentsMap.get(a))) &&
          r.length
          ? (null != e
              ? ((o = []),
                z(So(e), function (t) {
                  r[t] && o.push(r[t]);
                }))
              : (o =
                  null != n
                    ? Md('id', n, r)
                    : null != i
                    ? Md('name', i, r)
                    : ut(r, function (t) {
                        return !!t;
                      })),
            Td(o, t))
          : [];
      }),
      (s.prototype.findComponents = function (t) {
        var e,
          n = t.query,
          i = t.mainType,
          r =
            ((r = i + 'Index'),
            (o = i + 'Id'),
            (e = i + 'Name'),
            !(n = n) || (null == n[r] && null == n[o] && null == n[e])
              ? null
              : {mainType: i, index: n[r], id: n[o], name: n[e]}),
          o = r
            ? this.queryComponents(r)
            : ut(this._componentsMap.get(i), function (t) {
                return !!t;
              });
        return (n = Td(o, t)), t.filter ? ut(n, t.filter) : n;
      }),
      (s.prototype.eachComponent = function (t, e, n) {
        var i = this._componentsMap;
        if (D(t)) {
          var r = e,
            o = t;
          i.each(function (t, e) {
            for (var n = 0; t && n < t.length; n++) {
              var i = t[n];
              i && o.call(r, e, i, i.componentIndex);
            }
          });
        } else
          for (
            var a = V(t) ? i.get(t) : O(t) ? this.findComponents(t) : null,
              s = 0;
            a && s < a.length;
            s++
          ) {
            var l = a[s];
            l && e.call(n, l, l.componentIndex);
          }
      }),
      (s.prototype.getSeriesByName = function (t) {
        var e = Ao(t, null);
        return ut(this._componentsMap.get('series'), function (t) {
          return !!t && null != e && t.name === e;
        });
      }),
      (s.prototype.getSeriesByIndex = function (t) {
        return this._componentsMap.get('series')[t];
      }),
      (s.prototype.getSeriesByType = function (e) {
        return ut(this._componentsMap.get('series'), function (t) {
          return !!t && t.subType === e;
        });
      }),
      (s.prototype.getSeries = function () {
        return ut(this._componentsMap.get('series'), function (t) {
          return !!t;
        });
      }),
      (s.prototype.getSeriesCount = function () {
        return this._componentsCount.get('series');
      }),
      (s.prototype.eachSeries = function (n, i) {
        gd(this),
          z(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t];
              n.call(i, e, t);
            },
            this
          );
      }),
      (s.prototype.eachRawSeries = function (e, n) {
        z(this._componentsMap.get('series'), function (t) {
          t && e.call(n, t, t.componentIndex);
        });
      }),
      (s.prototype.eachSeriesByType = function (n, i, r) {
        gd(this),
          z(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t];
              e.subType === n && i.call(r, e, t);
            },
            this
          );
      }),
      (s.prototype.eachRawSeriesByType = function (t, e, n) {
        return z(this.getSeriesByType(t), e, n);
      }),
      (s.prototype.isSeriesFiltered = function (t) {
        return gd(this), null == this._seriesIndicesMap.get(t.componentIndex);
      }),
      (s.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice();
      }),
      (s.prototype.filterSeries = function (n, i) {
        gd(this);
        var r = [];
        z(
          this._seriesIndices,
          function (t) {
            var e = this._componentsMap.get('series')[t];
            n.call(i, e, t) && r.push(t);
          },
          this
        ),
          (this._seriesIndices = r),
          (this._seriesIndicesMap = B(r));
      }),
      (s.prototype.restoreData = function (n) {
        fd(this);
        var t = this._componentsMap,
          i = [];
        t.each(function (t, e) {
          g.hasClass(e) && i.push(e);
        }),
          g.topologicalTravel(i, g.getAllClassMainTypes(), function (e) {
            z(t.get(e), function (t) {
              !t ||
                ('series' === e &&
                  (function (t, e) {
                    {
                      var n, i;
                      if (e)
                        return (
                          (n = e.seriesIndex),
                          (i = e.seriesId),
                          (e = e.seriesName),
                          (null != n && t.componentIndex !== n) ||
                            (null != i && t.id !== i) ||
                            (null != e && t.name !== e)
                        );
                    }
                  })(t, n)) ||
                t.restoreData();
            });
          });
      }),
      (s.internalField =
        ((fd = function (t) {
          var e = (t._seriesIndices = []);
          z(t._componentsMap.get('series'), function (t) {
            t && e.push(t.componentIndex);
          }),
            (t._seriesIndicesMap = B(e));
        }),
        (gd = function (t) {}),
        void (yd = function (t, e) {
          (t.option = {}),
            (t.option[bd] = 1),
            (t._componentsMap = B({series: []})),
            (t._componentsCount = B());
          var n,
            i,
            r = e.aria;
          O(r) && null == r.enabled && (r.enabled = !0),
            (n = e),
            (r = t._theme.option),
            (i = n.color && !n.colorLayer),
            z(r, function (t, e) {
              ('colorLayer' === e && i) ||
                g.hasClass(e) ||
                ('object' == typeof t
                  ? (n[e] = n[e] ? d(n[e], t, !1) : y(t))
                  : null == n[e] && (n[e] = t));
            }),
            d(e, Kp, !1),
            t._mergeOption(e, null);
        }))),
      s);
  function s() {
    return (null !== wd && wd.apply(this, arguments)) || this;
  }
  function Md(e, t, n) {
    var i, r;
    return F(t)
      ? ((i = B()),
        z(t, function (t) {
          null != t && null != Ao(t, null) && i.set(t, !0);
        }),
        ut(n, function (t) {
          return t && i.get(t[e]);
        }))
      : ((r = Ao(t, null)),
        ut(n, function (t) {
          return t && null != r && t[e] === r;
        }));
  }
  function Td(t, e) {
    return e.hasOwnProperty('subType')
      ? ut(t, function (t) {
          return t && t.subType === e.subType;
        })
      : t;
  }
  function Cd(t) {
    var e = B();
    return (
      t &&
        z(So(t.replaceMerge), function (t) {
          e.set(t, !0);
        }),
      {replaceMergeMainTypeMap: e}
    );
  }
  at(Sd, vd);
  function Id(e) {
    z(
      Dd,
      function (t) {
        this[t] = S(e[t], e);
      },
      this
    );
  }
  var Dd = [
      'getDom',
      'getZr',
      'getWidth',
      'getHeight',
      'getDevicePixelRatio',
      'dispatchAction',
      'isSSR',
      'isDisposed',
      'on',
      'off',
      'getDataURL',
      'getConnectedDataURL',
      'getOption',
      'getId',
      'updateLabelLayout',
    ],
    kd = {},
    Ad =
      ((Pd.prototype.create = function (n, i) {
        var r = [];
        z(kd, function (t, e) {
          t = t.create(n, i);
          r = r.concat(t || []);
        }),
          (this._coordinateSystems = r);
      }),
      (Pd.prototype.update = function (e, n) {
        z(this._coordinateSystems, function (t) {
          t.update && t.update(e, n);
        });
      }),
      (Pd.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice();
      }),
      (Pd.register = function (t, e) {
        kd[t] = e;
      }),
      (Pd.get = function (t) {
        return kd[t];
      }),
      Pd);
  function Pd() {
    this._coordinateSystems = [];
  }
  var Ld = /^(min|max)?(.+)$/,
    Od =
      ((Rd.prototype.setOption = function (t, e, n) {
        t &&
          (z(So(t.series), function (t) {
            t && t.data && gt(t.data) && Dt(t.data);
          }),
          z(So(t.dataset), function (t) {
            t && t.source && gt(t.source) && Dt(t.source);
          })),
          (t = y(t));
        var i = this._optionBackup,
          t = (function (t, n, i) {
            var e,
              r,
              o = [],
              a = t.baseOption,
              s = t.timeline,
              l = t.options,
              u = t.media,
              h = !!t.media,
              c = !!(l || s || (a && a.timeline));
            a
              ? (r = a).timeline || (r.timeline = s)
              : ((c || h) && (t.options = t.media = null), (r = t));
            h &&
              F(u) &&
              z(u, function (t) {
                t && t.option && (t.query ? o.push(t) : (e = e || t));
              });
            function p(e) {
              z(n, function (t) {
                t(e, i);
              });
            }
            return (
              p(r),
              z(l, p),
              z(o, function (t) {
                return p(t.option);
              }),
              {
                baseOption: r,
                timelineOptions: l || [],
                mediaDefault: e,
                mediaList: o,
              }
            );
          })(t, e, !i);
        (this._newBaseOption = t.baseOption),
          i
            ? (t.timelineOptions.length &&
                (i.timelineOptions = t.timelineOptions),
              t.mediaList.length && (i.mediaList = t.mediaList),
              t.mediaDefault && (i.mediaDefault = t.mediaDefault))
            : (this._optionBackup = t);
      }),
      (Rd.prototype.mountOption = function (t) {
        var e = this._optionBackup;
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          y(t ? e.baseOption : this._newBaseOption)
        );
      }),
      (Rd.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions;
        return (e =
          n.length && (t = t.getComponent('timeline'))
            ? y(n[t.getCurrentIndex()])
            : e);
      }),
      (Rd.prototype.getMediaOption = function (t) {
        var e = this._api.getWidth(),
          n = this._api.getHeight(),
          i = this._mediaList,
          r = this._mediaDefault,
          o = [],
          a = [];
        if (i.length || r) {
          for (var s, l, u = 0, h = i.length; u < h; u++)
            !(function (t, e, n) {
              var i = {width: e, height: n, aspectratio: e / n},
                r = !0;
              return (
                z(t, function (t, e) {
                  var n,
                    e = e.match(Ld);
                  e &&
                    e[1] &&
                    e[2] &&
                    ((n = e[1]),
                    (e = e[2].toLowerCase()),
                    (e = i[e]),
                    (t = t),
                    ('min' === (n = n)
                      ? t <= e
                      : 'max' === n
                      ? e <= t
                      : e === t) || (r = !1));
                }),
                r
              );
            })(i[u].query, e, n) || o.push(u);
          (o = !o.length && r ? [-1] : o).length &&
            ((s = o),
            (l = this._currentMediaIndices),
            s.join(',') !== l.join(',')) &&
            (a = N(o, function (t) {
              return y((-1 === t ? r : i[t]).option);
            })),
            (this._currentMediaIndices = o);
        }
        return a;
      }),
      Rd);
  function Rd(t) {
    (this._timelineOptions = []),
      (this._mediaList = []),
      (this._currentMediaIndices = []),
      (this._api = t);
  }
  var Bd = z,
    zd = O,
    Ed = [
      'areaStyle',
      'lineStyle',
      'nodeStyle',
      'linkStyle',
      'chordStyle',
      'label',
      'labelLine',
    ];
  function Nd(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = Ed.length; n < i; n++) {
        var r = Ed[n],
          o = e.normal,
          a = e.emphasis;
        o &&
          o[r] &&
          ((t[r] = t[r] || {}),
          t[r].normal ? d(t[r].normal, o[r]) : (t[r].normal = o[r]),
          (o[r] = null)),
          a &&
            a[r] &&
            ((t[r] = t[r] || {}),
            t[r].emphasis ? d(t[r].emphasis, a[r]) : (t[r].emphasis = a[r]),
            (a[r] = null));
      }
  }
  function Fd(t, e, n) {
    var i, r;
    t &&
      t[e] &&
      (t[e].normal || t[e].emphasis) &&
      ((i = t[e].normal),
      (r = t[e].emphasis),
      i &&
        (n ? ((t[e].normal = t[e].emphasis = null), E(t[e], i)) : (t[e] = i)),
      r) &&
      ((t.emphasis = t.emphasis || {}),
      (t.emphasis[e] = r).focus && (t.emphasis.focus = r.focus),
      r.blurScope) &&
      (t.emphasis.blurScope = r.blurScope);
  }
  function Vd(t) {
    Fd(t, 'itemStyle'),
      Fd(t, 'lineStyle'),
      Fd(t, 'areaStyle'),
      Fd(t, 'label'),
      Fd(t, 'labelLine'),
      Fd(t, 'upperLabel'),
      Fd(t, 'edgeLabel');
  }
  function Hd(t, e) {
    var n = zd(t) && t[e],
      i = zd(n) && n.textStyle;
    if (i)
      for (var r = 0, o = To.length; r < o; r++) {
        var a = To[r];
        i.hasOwnProperty(a) && (n[a] = i[a]);
      }
  }
  function Wd(t) {
    t && (Vd(t), Hd(t, 'label'), t.emphasis) && Hd(t.emphasis, 'label');
  }
  function Gd(t) {
    return F(t) ? t : t ? [t] : [];
  }
  function Ud(t) {
    return (F(t) ? t[0] : t) || {};
  }
  function Zd(e, t) {
    Bd(Gd(e.series), function (t) {
      if (zd(t))
        if (zd(t)) {
          Nd(t),
            Vd(t),
            Hd(t, 'label'),
            Hd(t, 'upperLabel'),
            Hd(t, 'edgeLabel'),
            t.emphasis &&
              (Hd(t.emphasis, 'label'),
              Hd(t.emphasis, 'upperLabel'),
              Hd(t.emphasis, 'edgeLabel'));
          var e = t.markPoint,
            n = (e && (Nd(e), Wd(e)), t.markLine),
            i = (n && (Nd(n), Wd(n)), t.markArea),
            r = (i && Wd(i), t.data);
          if ('graph' === t.type) {
            var r = r || t.nodes,
              o = t.links || t.edges;
            if (o && !gt(o)) for (var a = 0; a < o.length; a++) Wd(o[a]);
            z(t.categories, function (t) {
              Vd(t);
            });
          }
          if (r && !gt(r)) for (a = 0; a < r.length; a++) Wd(r[a]);
          if ((e = t.markPoint) && e.data)
            for (var s = e.data, a = 0; a < s.length; a++) Wd(s[a]);
          if ((n = t.markLine) && n.data)
            for (var l = n.data, a = 0; a < l.length; a++)
              F(l[a]) ? (Wd(l[a][0]), Wd(l[a][1])) : Wd(l[a]);
          'gauge' === t.type
            ? (Hd(t, 'axisLabel'), Hd(t, 'title'), Hd(t, 'detail'))
            : 'treemap' === t.type
            ? (Fd(t.breadcrumb, 'itemStyle'),
              z(t.levels, function (t) {
                Vd(t);
              }))
            : 'tree' === t.type && Vd(t.leaves);
        }
    });
    var n = [
      'xAxis',
      'yAxis',
      'radiusAxis',
      'angleAxis',
      'singleAxis',
      'parallelAxis',
      'radar',
    ];
    t && n.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
      Bd(n, function (t) {
        Bd(Gd(e[t]), function (t) {
          t && (Hd(t, 'axisLabel'), Hd(t.axisPointer, 'label'));
        });
      }),
      Bd(Gd(e.parallel), function (t) {
        t = t && t.parallelAxisDefault;
        Hd(t, 'axisLabel'), Hd(t && t.axisPointer, 'label');
      }),
      Bd(Gd(e.calendar), function (t) {
        Fd(t, 'itemStyle'),
          Hd(t, 'dayLabel'),
          Hd(t, 'monthLabel'),
          Hd(t, 'yearLabel');
      }),
      Bd(Gd(e.radar), function (t) {
        Hd(t, 'name'),
          t.name &&
            null == t.axisName &&
            ((t.axisName = t.name), delete t.name),
          null != t.nameGap &&
            null == t.axisNameGap &&
            ((t.axisNameGap = t.nameGap), delete t.nameGap);
      }),
      Bd(Gd(e.geo), function (t) {
        zd(t) &&
          (Wd(t),
          Bd(Gd(t.regions), function (t) {
            Wd(t);
          }));
      }),
      Bd(Gd(e.timeline), function (t) {
        Wd(t), Fd(t, 'label'), Fd(t, 'itemStyle'), Fd(t, 'controlStyle', !0);
        t = t.data;
        F(t) &&
          z(t, function (t) {
            O(t) && (Fd(t, 'label'), Fd(t, 'itemStyle'));
          });
      }),
      Bd(Gd(e.toolbox), function (t) {
        Fd(t, 'iconStyle'),
          Bd(t.feature, function (t) {
            Fd(t, 'iconStyle');
          });
      }),
      Hd(Ud(e.axisPointer), 'label'),
      Hd(Ud(e.tooltip).axisPointer, 'label');
  }
  function Yd(e) {
    e &&
      z(Xd, function (t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
      });
  }
  var Xd = [
      ['x', 'left'],
      ['y', 'top'],
      ['x2', 'right'],
      ['y2', 'bottom'],
    ],
    qd = [
      'grid',
      'geo',
      'parallel',
      'legend',
      'toolbox',
      'title',
      'visualMap',
      'dataZoom',
      'timeline',
    ],
    jd = [
      ['borderRadius', 'barBorderRadius'],
      ['borderColor', 'barBorderColor'],
      ['borderWidth', 'barBorderWidth'],
    ];
  function Kd(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0; n < jd.length; n++) {
        var i = jd[n][1],
          r = jd[n][0];
        null != e[i] && (e[r] = e[i]);
      }
  }
  function $d(t) {
    t &&
      'edge' === t.alignTo &&
      null != t.margin &&
      null == t.edgeDistance &&
      (t.edgeDistance = t.margin);
  }
  function Qd(t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay);
  }
  function Jd(e, t) {
    Zd(e, t),
      (e.series = So(e.series)),
      z(e.series, function (t) {
        if (O(t)) {
          var e,
            n = t.type;
          if ('line' === n) null != t.clipOverflow && (t.clip = t.clipOverflow);
          else if ('pie' === n || 'gauge' === n) {
            if (
              (null != t.clockWise && (t.clockwise = t.clockWise),
              $d(t.label),
              (e = t.data) && !gt(e))
            )
              for (var i = 0; i < e.length; i++) $d(e[i]);
            null != t.hoverOffset &&
              ((t.emphasis = t.emphasis || {}),
              (t.emphasis.scaleSize = null)) &&
              (t.emphasis.scaleSize = t.hoverOffset);
          } else if ('gauge' === n) {
            var r = (function (t, e) {
              for (
                var n = e.split(','), i = t, r = 0;
                r < n.length && null != (i = i && i[n[r]]);
                r++
              );
              return i;
            })(t, 'pointer.color');
            if (null != r) {
              var o = t;
              var a = 'itemStyle.color';
              var s = void 0;
              for (var l, u = a.split(','), h = o, c = 0; c < u.length - 1; c++)
                null == h[(l = u[c])] && (h[l] = {}), (h = h[l]);
              (!s && null != h[u[c]]) || (h[u[c]] = r);
            }
          } else if ('bar' === n) {
            if (
              (Kd(t),
              Kd(t.backgroundStyle),
              Kd(t.emphasis),
              (e = t.data) && !gt(e))
            )
              for (i = 0; i < e.length; i++)
                'object' == typeof e[i] &&
                  (Kd(e[i]), Kd(e[i] && e[i].emphasis));
          } else
            'sunburst' === n
              ? ((a = t.highlightPolicy) &&
                  ((t.emphasis = t.emphasis || {}),
                  t.emphasis.focus || (t.emphasis.focus = a)),
                Qd(t),
                (function t(e, n) {
                  if (e)
                    for (var i = 0; i < e.length; i++)
                      n(e[i]), e[i] && t(e[i].children, n);
                })(t.data, Qd))
              : 'graph' === n || 'sankey' === n
              ? (o = t) &&
                null != o.focusNodeAdjacency &&
                ((o.emphasis = o.emphasis || {}), null == o.emphasis.focus) &&
                (o.emphasis.focus = 'adjacency')
              : 'map' === n &&
                (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation) &&
                E(t, t.mapLocation);
          null != t.hoverAnimation &&
            ((t.emphasis = t.emphasis || {}), t.emphasis) &&
            null == t.emphasis.scale &&
            (t.emphasis.scale = t.hoverAnimation),
            Yd(t);
        }
      }),
      e.dataRange && (e.visualMap = e.dataRange),
      z(qd, function (t) {
        t = e[t];
        t &&
          z((t = F(t) ? t : [t]), function (t) {
            Yd(t);
          });
      });
  }
  function tf(_) {
    z(_, function (p, d) {
      var f = [],
        g = [NaN, NaN],
        t = [p.stackResultDimension, p.stackedOverDimension],
        y = p.data,
        m = p.isStackedByIndex,
        v = p.seriesModel.get('stackStrategy') || 'samesign';
      y.modify(t, function (t, e, n) {
        var i,
          r,
          o = y.get(p.stackedDimension, n);
        if (isNaN(o)) return g;
        m ? (r = y.getRawIndex(n)) : (i = y.get(p.stackedByDimension, n));
        for (var a, s, l, u = NaN, h = d - 1; 0 <= h; h--) {
          var c = _[h];
          if (0 <= (r = m ? r : c.data.rawIndexOf(c.stackedByDimension, i))) {
            c = c.data.getByRawIndex(c.stackResultDimension, r);
            if (
              'all' === v ||
              ('positive' === v && 0 < c) ||
              ('negative' === v && c < 0) ||
              ('samesign' === v && 0 <= o && 0 < c) ||
              ('samesign' === v && o <= 0 && c < 0)
            ) {
              (a = o),
                (s = c),
                (l = void 0),
                (l = Math.max(oo(a), oo(s))),
                (a += s),
                (o = to < l ? a : io(a, l)),
                (u = c);
              break;
            }
          }
        }
        return (f[0] = o), (f[1] = u), f;
      });
    });
  }
  var ef,
    nf,
    rf = function (t) {
      (this.data = t.data || (t.sourceFormat === ed ? {} : [])),
        (this.sourceFormat = t.sourceFormat || id),
        (this.seriesLayoutBy = t.seriesLayoutBy || rd),
        (this.startIndex = t.startIndex || 0),
        (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
        (this.metaRawOption = t.metaRawOption);
      var e = (this.dimensionsDefine = t.dimensionsDefine);
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          null == i.type && cd(this, n) === ad.Must && (i.type = 'ordinal');
        }
    };
  function of(t) {
    return t instanceof rf;
  }
  function af(t, e, n) {
    n = n || lf(t);
    var i = e.seriesLayoutBy,
      r = (function (t, e, n, i, r) {
        var o, a;
        if (!t)
          return {
            dimensionsDefine: uf(r),
            startIndex: a,
            dimensionsDetectedCount: o,
          };
        {
          var s;
          e === Jp
            ? ((s = t),
              'auto' === i || null == i
                ? hf(
                    function (t) {
                      null != t &&
                        '-' !== t &&
                        (V(t) ? null == a && (a = 1) : (a = 0));
                    },
                    n,
                    s,
                    10
                  )
                : (a = dt(i) ? i : i ? 1 : 0),
              r ||
                1 !== a ||
                ((r = []),
                hf(
                  function (t, e) {
                    r[e] = null != t ? t + '' : '';
                  },
                  n,
                  s,
                  1 / 0
                )),
              (o = r
                ? r.length
                : n === od
                ? s.length
                : s[0]
                ? s[0].length
                : null))
            : e === td
            ? (r =
                r ||
                (function (t) {
                  var e,
                    n = 0;
                  for (; n < t.length && !(e = t[n++]); );
                  if (e) return ht(e);
                })(t))
            : e === ed
            ? r ||
              ((r = []),
              z(t, function (t, e) {
                r.push(e);
              }))
            : e === Qp && ((i = Co(t[0])), (o = (F(i) && i.length) || 1));
        }
        return {
          startIndex: a,
          dimensionsDefine: uf(r),
          dimensionsDetectedCount: o,
        };
      })(t, n, i, e.sourceHeader, e.dimensions);
    return new rf({
      data: t,
      sourceFormat: n,
      seriesLayoutBy: i,
      dimensionsDefine: r.dimensionsDefine,
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount,
      metaRawOption: y(e),
    });
  }
  function sf(t) {
    return new rf({data: t, sourceFormat: gt(t) ? nd : Qp});
  }
  function lf(t) {
    var e = id;
    if (gt(t)) e = nd;
    else if (F(t)) {
      0 === t.length && (e = Jp);
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n];
        if (null != r) {
          if (F(r) || gt(r)) {
            e = Jp;
            break;
          }
          if (O(r)) {
            e = td;
            break;
          }
        }
      }
    } else if (O(t))
      for (var o in t)
        if (Nt(t, o) && st(t[o])) {
          e = ed;
          break;
        }
    return e;
  }
  function uf(t) {
    var i;
    if (t)
      return (
        (i = B()),
        N(t, function (t, e) {
          var n,
            t = {
              name: (t = O(t) ? t : {name: t}).name,
              displayName: t.displayName,
              type: t.type,
            };
          return (
            null != t.name &&
              ((t.name += ''),
              null == t.displayName && (t.displayName = t.name),
              (n = i.get(t.name))
                ? (t.name += '-' + n.count++)
                : i.set(t.name, {count: 1})),
            t
          );
        })
      );
  }
  function hf(t, e, n, i) {
    if (e === od)
      for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r);
    else for (var o = n[0] || [], r = 0; r < o.length && r < i; r++) t(o[r], r);
  }
  function cf(t) {
    t = t.sourceFormat;
    return t === td || t === ed;
  }
  (yf.prototype.getSource = function () {
    return this._source;
  }),
    (yf.prototype.count = function () {
      return 0;
    }),
    (yf.prototype.getItem = function (t, e) {}),
    (yf.prototype.appendData = function (t) {}),
    (yf.prototype.clean = function () {}),
    (yf.protoInitialize =
      (((Jh = yf.prototype).pure = !1), void (Jh.persistent = !0))),
    (yf.internalField =
      ((nf = function (t, e, n) {
        var i,
          r = n.sourceFormat,
          o = n.seriesLayoutBy,
          a = n.startIndex,
          n = n.dimensionsDefine;
        L(t, ef[If(r, o)]),
          r === nd
            ? ((t.getItem = pf), (t.count = ff), (t.fillStorage = df))
            : ((i = xf(r, o)),
              (t.getItem = S(i, null, e, a, n)),
              (i = Sf(r, o)),
              (t.count = S(i, null, e, a, n)));
      }),
      (pf = function (t, e) {
        (t -= this._offset), (e = e || []);
        for (
          var n = this._data, i = this._dimSize, r = i * t, o = 0;
          o < i;
          o++
        )
          e[o] = n[r + o];
        return e;
      }),
      (df = function (t, e, n, i) {
        for (var r = this._data, o = this._dimSize, a = 0; a < o; a++) {
          for (
            var s = i[a],
              l = null == s[0] ? 1 / 0 : s[0],
              u = null == s[1] ? -1 / 0 : s[1],
              h = e - t,
              c = n[a],
              p = 0;
            p < h;
            p++
          ) {
            var d = r[p * o + a];
            (c[t + p] = d) < l && (l = d), u < d && (u = d);
          }
          (s[0] = l), (s[1] = u);
        }
      }),
      (ff = function () {
        return this._data ? this._data.length / this._dimSize : 0;
      }),
      ((Jh = {})[Jp + '_' + rd] = {pure: !0, appendData: mf}),
      (Jh[Jp + '_' + od] = {
        pure: !0,
        appendData: function () {
          throw new Error(
            'Do not support appendData when set seriesLayoutBy: "row".'
          );
        },
      }),
      (Jh[td] = {pure: !0, appendData: mf}),
      (Jh[ed] = {
        pure: !0,
        appendData: function (t) {
          var r = this._data;
          z(t, function (t, e) {
            for (var n = r[e] || (r[e] = []), i = 0; i < (t || []).length; i++)
              n.push(t[i]);
          });
        },
      }),
      (Jh[Qp] = {appendData: mf}),
      (Jh[nd] = {
        persistent: !1,
        pure: !0,
        appendData: function (t) {
          this._data = t;
        },
        clean: function () {
          (this._offset += this.count()), (this._data = null);
        },
      }),
      void (ef = Jh)));
  var pf,
    df,
    ff,
    gf = yf;
  function yf(t, e) {
    var t = of(t) ? t : sf(t),
      n = ((this._source = t), (this._data = t.data));
    t.sourceFormat === nd &&
      ((this._offset = 0), (this._dimSize = e), (this._data = n)),
      nf(this, n, t);
  }
  function mf(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e]);
  }
  function vf(t, e, n, i) {
    return t[i];
  }
  ((np = {})[Jp + '_' + rd] = function (t, e, n, i) {
    return t[i + e];
  }),
    (np[Jp + '_' + od] = function (t, e, n, i, r) {
      i += e;
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s];
        o[s] = l ? l[i] : null;
      }
      return o;
    }),
    (np[td] = vf),
    (np[ed] = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = t[n[a].name];
        o[a] = s ? s[i] : null;
      }
      return o;
    }),
    (np[Qp] = vf);
  var _f = np;
  function xf(t, e) {
    return _f[If(t, e)];
  }
  function wf(t, e, n) {
    return t.length;
  }
  ((Lc = {})[Jp + '_' + rd] = function (t, e, n) {
    return Math.max(0, t.length - e);
  }),
    (Lc[Jp + '_' + od] = function (t, e, n) {
      t = t[0];
      return t ? Math.max(0, t.length - e) : 0;
    }),
    (Lc[td] = wf),
    (Lc[ed] = function (t, e, n) {
      t = t[n[0].name];
      return t ? t.length : 0;
    }),
    (Lc[Qp] = wf);
  var bf = Lc;
  function Sf(t, e) {
    return bf[If(t, e)];
  }
  function Mf(t, e, n) {
    return t[e];
  }
  ((ea = {})[Jp] = Mf),
    (ea[td] = function (t, e, n) {
      return t[n];
    }),
    (ea[ed] = Mf),
    (ea[Qp] = function (t, e, n) {
      t = Co(t);
      return t instanceof Array ? t[e] : t;
    }),
    (ea[nd] = Mf);
  var Tf = ea;
  function Cf(t) {
    return Tf[t];
  }
  function If(t, e) {
    return t === Jp ? t + '_' + e : t;
  }
  function Df(t, e, n) {
    if (t) {
      var i,
        r,
        e = t.getRawDataItem(e);
      if (null != e)
        return (
          (i = (r = t.getStore()).getSource().sourceFormat),
          null != n
            ? ((t = t.getDimensionIndex(n)),
              (n = r.getDimensionProperty(t)),
              Cf(i)(e, t, n))
            : ((r = e), i === Qp ? Co(e) : r)
        );
    }
  }
  var kf = /\{@(.+?)\}/g,
    zc =
      ((Af.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          o = n.getName(t),
          a = n.getRawDataItem(t),
          s = n.getItemVisual(t, 'style'),
          t = s && s[n.getItemVisual(t, 'drawType') || 'fill'],
          s = s && s.stroke,
          l = this.mainType,
          u = 'series' === l,
          n = n.userOutput && n.userOutput.get();
        return {
          componentType: l,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: u ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: u ? this.id : null,
          seriesName: u ? this.name : null,
          name: o,
          dataIndex: r,
          data: a,
          dataType: e,
          value: i,
          color: t,
          borderColor: s,
          dimensionNames: n ? n.fullDimensions : null,
          encode: n ? n.encode : null,
          $vars: ['seriesName', 'name', 'value'],
        };
      }),
      (Af.prototype.getFormattedLabel = function (i, t, e, n, r, o) {
        t = t || 'normal';
        var a = this.getData(e),
          e = this.getDataParams(i, e);
        return (
          o && (e.value = o.interpolatedValue),
          null != n && F(e.value) && (e.value = e.value[n]),
          D(
            (r =
              r ||
              a
                .getItemModel(i)
                .get(
                  'normal' === t
                    ? ['label', 'formatter']
                    : [t, 'label', 'formatter']
                ))
          )
            ? ((e.status = t), (e.dimensionIndex = n), r(e))
            : V(r)
            ? Ap(r, e).replace(kf, function (t, e) {
                var n = e.length,
                  n =
                    ('[' === e.charAt(0) &&
                      ']' === e.charAt(n - 1) &&
                      (e = +e.slice(1, n - 1)),
                    Df(a, i, e));
                return null !=
                  (n =
                    o &&
                    F(o.interpolatedValue) &&
                    0 <= (e = a.getDimensionIndex(e))
                      ? o.interpolatedValue[e]
                      : n)
                  ? n + ''
                  : '';
              })
            : void 0
        );
      }),
      (Af.prototype.getRawValue = function (t, e) {
        return Df(this.getData(e), t);
      }),
      (Af.prototype.formatTooltip = function (t, e, n) {}),
      Af);
  function Af() {}
  function Pf(t) {
    var e, n;
    return O(t) ? t.type && (n = t) : (e = t), {text: e, frag: n};
  }
  function Lf(t) {
    return new Of(t);
  }
  (Rf.prototype.perform = function (t) {
    var e,
      n,
      i = this._upstream,
      r = t && t.skip,
      o =
        (this._dirty &&
          i &&
          ((o = this.context).data = o.outputData = i.context.outputData),
        this.__pipeline && (this.__pipeline.currentTask = this),
        this._plan && !r && (e = this._plan(this.context)),
        u(this._modBy)),
      a = this._modDataCount || 0,
      s = u(t && t.modBy),
      l = (t && t.modDataCount) || 0;
    function u(t) {
      return (t = 1 <= t ? t : 1);
    }
    (o === s && a === l) || (e = 'reset'),
      (!this._dirty && 'reset' !== e) ||
        ((this._dirty = !1), (n = this._doReset(r))),
      (this._modBy = s),
      (this._modDataCount = l);
    o = t && t.step;
    if (
      ((this._dueEnd = i
        ? i._outputDueEnd
        : this._count
        ? this._count(this.context)
        : 1 / 0),
      this._progress)
    ) {
      var h = this._dueIndex,
        c = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd);
      if (!r && (n || h < c)) {
        var p = this._progress;
        if (F(p))
          for (var d = 0; d < p.length; d++) this._doProgress(p[d], h, c, s, l);
        else this._doProgress(p, h, c, s, l);
      }
      this._dueIndex = c;
      a = null != this._settedOutputEnd ? this._settedOutputEnd : c;
      this._outputDueEnd = a;
    } else
      this._dueIndex = this._outputDueEnd =
        null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished();
  }),
    (Rf.prototype.dirty = function () {
      (this._dirty = !0), this._onDirty && this._onDirty(this.context);
    }),
    (Rf.prototype._doProgress = function (t, e, n, i, r) {
      Hf.reset(e, n, i, r),
        (this._callingProgress = t),
        this._callingProgress(
          {start: e, end: n, count: n - e, next: Hf.next},
          this.context
        );
    }),
    (Rf.prototype._doReset = function (t) {
      (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
        (this._settedOutputEnd = null),
        !t &&
          this._reset &&
          ((e = this._reset(this.context)) &&
            e.progress &&
            ((n = e.forceFirstProgress), (e = e.progress)),
          F(e)) &&
          !e.length &&
          (e = null),
        (this._progress = e),
        (this._modBy = this._modDataCount = null);
      var e,
        n,
        t = this._downstream;
      return t && t.dirty(), n;
    }),
    (Rf.prototype.unfinished = function () {
      return this._progress && this._dueIndex < this._dueEnd;
    }),
    (Rf.prototype.pipe = function (t) {
      (this._downstream === t && !this._dirty) ||
        (((this._downstream = t)._upstream = this), t.dirty());
    }),
    (Rf.prototype.dispose = function () {
      this._disposed ||
        (this._upstream && (this._upstream._downstream = null),
        this._downstream && (this._downstream._upstream = null),
        (this._dirty = !1),
        (this._disposed = !0));
    }),
    (Rf.prototype.getUpstream = function () {
      return this._upstream;
    }),
    (Rf.prototype.getDownstream = function () {
      return this._downstream;
    }),
    (Rf.prototype.setOutputEnd = function (t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    });
  var Of = Rf;
  function Rf(t) {
    (this._reset = (t = t || {}).reset),
      (this._plan = t.plan),
      (this._count = t.count),
      (this._onDirty = t.onDirty),
      (this._dirty = !0);
  }
  var Bf,
    zf,
    Ef,
    Nf,
    Ff,
    Vf,
    Hf = (Vf = {
      reset: function (t, e, n, i) {
        (zf = t),
          (Bf = e),
          (Ef = n),
          (Nf = i),
          (Ff = Math.ceil(Nf / Ef)),
          (Vf.next = 1 < Ef && 0 < Nf ? Gf : Wf);
      },
    });
  function Wf() {
    return zf < Bf ? zf++ : null;
  }
  function Gf() {
    var t = (zf % Ff) * Ef + Math.ceil(zf / Ff),
      t = Bf <= zf ? null : t < Nf ? t : zf;
    return zf++, t;
  }
  function Uf(t, e) {
    e = e && e.type;
    return 'ordinal' === e
      ? t
      : null ==
          (t = 'time' !== e || dt(t) || null == t || '-' === t ? t : +po(t)) ||
        '' === t
      ? NaN
      : +t;
  }
  var Zf = B({
    number: function (t) {
      return parseFloat(t);
    },
    time: function (t) {
      return +po(t);
    },
    trim: function (t) {
      return V(t) ? Ct(t) : t;
    },
  });
  function Yf(t) {
    return Zf.get(t);
  }
  var Xf = {
      lt: function (t, e) {
        return t < e;
      },
      lte: function (t, e) {
        return t <= e;
      },
      gt: function (t, e) {
        return e < t;
      },
      gte: function (t, e) {
        return e <= t;
      },
    },
    qf =
      ((jf.prototype.evaluate = function (t) {
        return dt(t)
          ? this._opFn(t, this._rvalFloat)
          : this._opFn(mo(t), this._rvalFloat);
      }),
      jf);
  function jf(t, e) {
    dt(e) || f(''), (this._opFn = Xf[t]), (this._rvalFloat = mo(e));
  }
  $f.prototype.evaluate = function (t, e) {
    var n = dt(t) ? t : mo(t),
      i = dt(e) ? e : mo(e),
      r = isNaN(n),
      o = isNaN(i);
    return (
      r && (n = this._incomparable),
      o && (i = this._incomparable),
      r &&
        o &&
        ((r = V(t)), (o = V(e)), r && (n = o ? t : 0), o) &&
        (i = r ? e : 0),
      n < i ? this._resultLT : i < n ? -this._resultLT : 0
    );
  };
  var Kf = $f;
  function $f(t, e) {
    t = 'desc' === t;
    (this._resultLT = t ? 1 : -1),
      (this._incomparable =
        'min' === (e = null == e ? (t ? 'min' : 'max') : e) ? -1 / 0 : 1 / 0);
  }
  Jf.prototype.evaluate = function (t) {
    var e,
      n = t === this._rval;
    return (
      n ||
        (e = typeof t) === this._rvalTypeof ||
        ('number' != e && 'number' !== this._rvalTypeof) ||
        (n = mo(t) === this._rvalFloat),
      this._isEQ ? n : !n
    );
  };
  var Qf = Jf;
  function Jf(t, e) {
    (this._rval = e),
      (this._isEQ = t),
      (this._rvalTypeof = typeof e),
      (this._rvalFloat = mo(e));
  }
  (eg.prototype.getRawData = function () {
    throw new Error('not supported');
  }),
    (eg.prototype.getRawDataItem = function (t) {
      throw new Error('not supported');
    }),
    (eg.prototype.cloneRawData = function () {}),
    (eg.prototype.getDimensionInfo = function (t) {}),
    (eg.prototype.cloneAllDimensionInfo = function () {}),
    (eg.prototype.count = function () {}),
    (eg.prototype.retrieveValue = function (t, e) {}),
    (eg.prototype.retrieveValueFromItem = function (t, e) {}),
    (eg.prototype.convertValue = Uf);
  var tg = eg;
  function eg() {}
  function ng(t) {
    return lg(t.sourceFormat) || f(''), t.data;
  }
  function ig(t) {
    var e = t.sourceFormat,
      n = t.data;
    if ((lg(e) || f(''), e === Jp)) {
      for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice());
      return i;
    }
    if (e === td) {
      for (i = [], r = 0, o = n.length; r < o; r++) i.push(L({}, n[r]));
      return i;
    }
  }
  function rg(t, e, n) {
    if (null != n)
      return dt(n) || (!isNaN(n) && !Nt(e, n))
        ? t[n]
        : Nt(e, n)
        ? e[n]
        : void 0;
  }
  function og(t) {
    return y(t);
  }
  var ag = B();
  function sg(t, e) {
    var n = So(t),
      t = n.length;
    t || f('');
    for (var i = 0, r = t; i < r; i++)
      (e = (function (t, i) {
        i.length || f('');
        O(t) || f('');
        var e = t.type,
          d = ag.get(e);
        d || f('');
        e = N(i, function (t) {
          var e = t,
            t = d,
            n = new tg(),
            i = e.data,
            r = (n.sourceFormat = e.sourceFormat),
            o = e.startIndex,
            a = (e.seriesLayoutBy !== rd && f(''), []),
            s = {};
          if ((h = e.dimensionsDefine))
            z(h, function (t, e) {
              var n = t.name,
                e = {index: e, name: n, displayName: t.displayName};
              a.push(e), null != n && (Nt(s, n) && f(''), (s[n] = e));
            });
          else
            for (var l = 0; l < e.dimensionsDetectedCount; l++)
              a.push({index: l});
          var u = xf(r, rd),
            h =
              (t.__isBuiltIn &&
                ((n.getRawDataItem = function (t) {
                  return u(i, o, a, t);
                }),
                (n.getRawData = S(ng, null, e))),
              (n.cloneRawData = S(ig, null, e)),
              Sf(r, rd)),
            c = ((n.count = S(h, null, i, o, a)), Cf(r)),
            p =
              ((n.retrieveValue = function (t, e) {
                t = u(i, o, a, t);
                return p(t, e);
              }),
              (n.retrieveValueFromItem = function (t, e) {
                var n;
                return null != t && (n = a[e]) ? c(t, e, n.name) : void 0;
              }));
          return (
            (n.getDimensionInfo = S(rg, null, a, s)),
            (n.cloneAllDimensionInfo = S(og, null, a)),
            n
          );
        });
        return N(
          So(
            d.transform({upstream: e[0], upstreamList: e, config: y(t.config)})
          ),
          function (t, e) {
            O(t) || f(''), t.data || f('');
            lg(lf(t.data)) || f('');
            var n = i[0],
              e =
                n && 0 === e && !t.dimensions
                  ? ((e = n.startIndex) &&
                      (t.data = n.data.slice(0, e).concat(t.data)),
                    {
                      seriesLayoutBy: rd,
                      sourceHeader: e,
                      dimensions: n.metaRawOption.dimensions,
                    })
                  : {
                      seriesLayoutBy: rd,
                      sourceHeader: 0,
                      dimensions: t.dimensions,
                    };
            return af(t.data, e, null);
          }
        );
      })(n[i], e)),
        i !== r - 1 && (e.length = Math.max(e.length, 1));
    return e;
  }
  function lg(t) {
    return t === Jp || t === td;
  }
  var ug,
    Jh = 'undefined',
    hg = typeof Uint32Array == Jh ? Array : Uint32Array,
    cg = typeof Uint16Array == Jh ? Array : Uint16Array,
    pg = typeof Int32Array == Jh ? Array : Int32Array,
    np = typeof Float64Array == Jh ? Array : Float64Array,
    dg = {float: np, int: pg, ordinal: Array, number: Array, time: np};
  function fg(t) {
    return 65535 < t ? hg : cg;
  }
  function gg() {
    return [1 / 0, -1 / 0];
  }
  function yg(t, e, n, i, r) {
    n = dg[n || 'float'];
    if (r) {
      var o = t[e],
        a = o && o.length;
      if (a !== i) {
        for (var s = new n(i), l = 0; l < a; l++) s[l] = o[l];
        t[e] = s;
      }
    } else t[e] = new n(i);
  }
  (l.prototype.initData = function (t, e, n) {
    (this._provider = t),
      (this._chunks = []),
      (this._indices = null),
      (this.getRawIndex = this._getRawIdxIdentity);
    var i = t.getSource(),
      r = (this.defaultDimValueGetter = ug[i.sourceFormat]);
    (this._dimValueGetter = n || r),
      (this._rawExtent = []),
      cf(i),
      (this._dimensions = N(e, function (t) {
        return {type: t.type, property: t.property};
      })),
      this._initDataFromProvider(0, t.count());
  }),
    (l.prototype.getProvider = function () {
      return this._provider;
    }),
    (l.prototype.getSource = function () {
      return this._provider.getSource();
    }),
    (l.prototype.ensureCalculationDimension = function (t, e) {
      var n = this._calcDimNameToIdx,
        i = this._dimensions,
        r = n.get(t);
      if (null != r) {
        if (i[r].type === e) return r;
      } else r = i.length;
      return (
        (i[r] = {type: e}),
        n.set(t, r),
        (this._chunks[r] = new dg[e || 'float'](this._rawCount)),
        (this._rawExtent[r] = gg()),
        r
      );
    }),
    (l.prototype.collectOrdinalMeta = function (t, e) {
      for (
        var n = this._chunks[t],
          i = this._dimensions[t],
          r = this._rawExtent,
          o = i.ordinalOffset || 0,
          a = n.length,
          s = (0 === o && (r[t] = gg()), r[t]),
          l = o;
        l < a;
        l++
      ) {
        var u = (n[l] = e.parseAndCollect(n[l]));
        isNaN(u) || ((s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1])));
      }
      (i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = 'ordinal');
    }),
    (l.prototype.getOrdinalMeta = function (t) {
      return this._dimensions[t].ordinalMeta;
    }),
    (l.prototype.getDimensionProperty = function (t) {
      t = this._dimensions[t];
      return t && t.property;
    }),
    (l.prototype.appendData = function (t) {
      var e = this._provider,
        n = this.count(),
        t = (e.appendData(t), e.count());
      return (
        e.persistent || (t += n),
        n < t && this._initDataFromProvider(n, t, !0),
        [n, t]
      );
    }),
    (l.prototype.appendValues = function (t, e) {
      for (
        var n = this._chunks,
          i = this._dimensions,
          r = i.length,
          o = this._rawExtent,
          a = this.count(),
          s = a + Math.max(t.length, e || 0),
          l = 0;
        l < r;
        l++
      )
        yg(n, l, (d = i[l]).type, s, !0);
      for (var u = [], h = a; h < s; h++)
        for (var c = h - a, p = 0; p < r; p++) {
          var d = i[p],
            f = ug.arrayRows.call(this, t[c] || u, d.property, c, p),
            g = ((n[p][h] = f), o[p]);
          f < g[0] && (g[0] = f), f > g[1] && (g[1] = f);
        }
      return {start: a, end: (this._rawCount = this._count = s)};
    }),
    (l.prototype._initDataFromProvider = function (t, e, n) {
      for (
        var i = this._provider,
          r = this._chunks,
          o = this._dimensions,
          a = o.length,
          s = this._rawExtent,
          l = N(o, function (t) {
            return t.property;
          }),
          u = 0;
        u < a;
        u++
      ) {
        var h = o[u];
        s[u] || (s[u] = gg()), yg(r, u, h.type, e, n);
      }
      if (i.fillStorage) i.fillStorage(t, e, r, s);
      else
        for (var c = [], p = t; p < e; p++)
          for (var c = i.getItem(p, c), d = 0; d < a; d++) {
            var f = r[d],
              g = this._dimValueGetter(c, l[d], p, d),
              f = ((f[p] = g), s[d]);
            g < f[0] && (f[0] = g), g > f[1] && (f[1] = g);
          }
      !i.persistent && i.clean && i.clean(),
        (this._rawCount = this._count = e),
        (this._extent = []);
    }),
    (l.prototype.count = function () {
      return this._count;
    }),
    (l.prototype.get = function (t, e) {
      return 0 <= e && e < this._count && (t = this._chunks[t])
        ? t[this.getRawIndex(e)]
        : NaN;
    }),
    (l.prototype.getValues = function (t, e) {
      var n = [],
        i = [];
      if (null == e) {
        (e = t), (t = []);
        for (var r = 0; r < this._dimensions.length; r++) i.push(r);
      } else i = t;
      for (var r = 0, o = i.length; r < o; r++) n.push(this.get(i[r], e));
      return n;
    }),
    (l.prototype.getByRawIndex = function (t, e) {
      return 0 <= e && e < this._rawCount && (t = this._chunks[t]) ? t[e] : NaN;
    }),
    (l.prototype.getSum = function (t) {
      var e = 0;
      if (this._chunks[t])
        for (var n = 0, i = this.count(); n < i; n++) {
          var r = this.get(t, n);
          isNaN(r) || (e += r);
        }
      return e;
    }),
    (l.prototype.getMedian = function (t) {
      var e = [],
        t =
          (this.each([t], function (t) {
            isNaN(t) || e.push(t);
          }),
          e.sort(function (t, e) {
            return t - e;
          })),
        n = this.count();
      return 0 === n
        ? 0
        : n % 2 == 1
        ? t[(n - 1) / 2]
        : (t[n / 2] + t[n / 2 - 1]) / 2;
    }),
    (l.prototype.indexOfRawIndex = function (t) {
      if (!(t >= this._rawCount || t < 0)) {
        if (!this._indices) return t;
        var e = this._indices,
          n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; i <= r; ) {
          var o = ((i + r) / 2) | 0;
          if (e[o] < t) i = 1 + o;
          else {
            if (!(e[o] > t)) return o;
            r = o - 1;
          }
        }
      }
      return -1;
    }),
    (l.prototype.indicesOfNearest = function (t, e, n) {
      var i = this._chunks[t],
        r = [];
      if (i) {
        null == n && (n = 1 / 0);
        for (
          var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count();
          l < u;
          l++
        ) {
          var h = e - i[this.getRawIndex(l)],
            c = Math.abs(h);
          c <= n &&
            ((c < o || (c === o && 0 <= h && a < 0)) &&
              ((o = c), (a = h), (s = 0)),
            h === a) &&
            (r[s++] = l);
        }
        r.length = s;
      }
      return r;
    }),
    (l.prototype.getIndices = function () {
      var t = this._indices;
      if (t) {
        var e = t.constructor,
          n = this._count;
        if (e === Array) for (var i = new e(n), r = 0; r < n; r++) i[r] = t[r];
        else i = new e(t.buffer, 0, n);
      } else {
        i = new (e = fg(this._rawCount))(this.count());
        for (r = 0; r < i.length; r++) i[r] = r;
      }
      return i;
    }),
    (l.prototype.filter = function (t, e) {
      if (!this._count) return this;
      for (
        var n = this.clone(),
          i = n.count(),
          r = new (fg(n._rawCount))(i),
          o = [],
          a = t.length,
          s = 0,
          l = t[0],
          u = n._chunks,
          h = 0;
        h < i;
        h++
      ) {
        var c = void 0,
          p = n.getRawIndex(h);
        if (0 === a) c = e(h);
        else if (1 === a) c = e(u[l][p], h);
        else {
          for (var d = 0; d < a; d++) o[d] = u[t[d]][p];
          (o[d] = h), (c = e.apply(null, o));
        }
        c && (r[s++] = p);
      }
      return (
        s < i && (n._indices = r),
        (n._count = s),
        (n._extent = []),
        n._updateGetRawIdx(),
        n
      );
    }),
    (l.prototype.selectRange = function (t) {
      var e = this.clone(),
        n = e._count;
      if (!n) return this;
      var i = ht(t),
        r = i.length;
      if (!r) return this;
      var o = e.count(),
        a = new (fg(e._rawCount))(o),
        s = 0,
        l = i[0],
        u = t[l][0],
        h = t[l][1],
        c = e._chunks,
        l = !1;
      if (!e._indices) {
        var p = 0;
        if (1 === r) {
          for (var d = c[i[0]], f = 0; f < n; f++)
            ((u <= (v = d[f]) && v <= h) || isNaN(v)) && (a[s++] = p), p++;
          l = !0;
        } else if (2 === r) {
          for (
            var d = c[i[0]], g = c[i[1]], y = t[i[1]][0], m = t[i[1]][1], f = 0;
            f < n;
            f++
          ) {
            var v = d[f],
              _ = g[f];
            ((u <= v && v <= h) || isNaN(v)) &&
              ((y <= _ && _ <= m) || isNaN(_)) &&
              (a[s++] = p),
              p++;
          }
          l = !0;
        }
      }
      if (!l)
        if (1 === r)
          for (f = 0; f < o; f++) {
            var x = e.getRawIndex(f);
            ((u <= (v = c[i[0]][x]) && v <= h) || isNaN(v)) && (a[s++] = x);
          }
        else
          for (f = 0; f < o; f++) {
            for (var w = !0, x = e.getRawIndex(f), b = 0; b < r; b++) {
              var S = i[b];
              ((v = c[S][x]) < t[S][0] || v > t[S][1]) && (w = !1);
            }
            w && (a[s++] = e.getRawIndex(f));
          }
      return (
        s < o && (e._indices = a),
        (e._count = s),
        (e._extent = []),
        e._updateGetRawIdx(),
        e
      );
    }),
    (l.prototype.map = function (t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }),
    (l.prototype.modify = function (t, e) {
      this._updateDims(this, t, e);
    }),
    (l.prototype._updateDims = function (t, e, n) {
      for (
        var i = t._chunks,
          r = [],
          o = e.length,
          a = t.count(),
          s = [],
          l = t._rawExtent,
          u = 0;
        u < e.length;
        u++
      )
        l[e[u]] = gg();
      for (var h = 0; h < a; h++) {
        for (var c = t.getRawIndex(h), p = 0; p < o; p++) s[p] = i[e[p]][c];
        s[o] = h;
        var d = n && n.apply(null, s);
        if (null != d) {
          'object' != typeof d && ((r[0] = d), (d = r));
          for (u = 0; u < d.length; u++) {
            var f = e[u],
              g = d[u],
              y = l[f],
              f = i[f];
            f && (f[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
          }
        }
      }
    }),
    (l.prototype.lttbDownSample = function (t, e) {
      var n,
        i = this.clone([t], !0),
        r = i._chunks[t],
        o = this.count(),
        a = 0,
        s = Math.floor(1 / e),
        l = this.getRawIndex(0),
        u = new (fg(this._rawCount))(Math.min(2 * (Math.ceil(o / s) + 2), o));
      u[a++] = l;
      for (var h = 1; h < o - 1; h += s) {
        for (
          var c = Math.min(h + s, o - 1),
            p = Math.min(h + 2 * s, o),
            d = (p + c) / 2,
            f = 0,
            g = c;
          g < p;
          g++
        ) {
          var y = r[(M = this.getRawIndex(g))];
          isNaN(y) || (f += y);
        }
        f /= p - c;
        for (
          var c = h,
            m = Math.min(h + s, o),
            v = h - 1,
            _ = r[l],
            x = -1,
            w = c,
            b = -1,
            S = 0,
            g = c;
          g < m;
          g++
        ) {
          var M,
            y = r[(M = this.getRawIndex(g))];
          isNaN(y)
            ? (S++, b < 0 && (b = M))
            : x < (n = Math.abs((v - d) * (y - _) - (v - g) * (f - _))) &&
              ((x = n), (w = M));
        }
        0 < S && S < m - c && ((u[a++] = Math.min(b, w)), (w = Math.max(b, w))),
          (l = u[a++] = w);
      }
      return (
        (u[a++] = this.getRawIndex(o - 1)),
        (i._count = a),
        (i._indices = u),
        (i.getRawIndex = this._getRawIdx),
        i
      );
    }),
    (l.prototype.downSample = function (t, e, n, i) {
      for (
        var r = this.clone([t], !0),
          o = r._chunks,
          a = [],
          s = Math.floor(1 / e),
          l = o[t],
          u = this.count(),
          h = (r._rawExtent[t] = gg()),
          c = new (fg(this._rawCount))(Math.ceil(u / s)),
          p = 0,
          d = 0;
        d < u;
        d += s
      ) {
        u - d < s && (a.length = s = u - d);
        for (var f = 0; f < s; f++) {
          var g = this.getRawIndex(d + f);
          a[f] = l[g];
        }
        var y = n(a),
          m = this.getRawIndex(Math.min(d + i(a, y) || 0, u - 1));
        (l[m] = y) < h[0] && (h[0] = y), y > h[1] && (h[1] = y), (c[p++] = m);
      }
      return (r._count = p), (r._indices = c), r._updateGetRawIdx(), r;
    }),
    (l.prototype.each = function (t, e) {
      if (this._count)
        for (
          var n = t.length, i = this._chunks, r = 0, o = this.count();
          r < o;
          r++
        ) {
          var a = this.getRawIndex(r);
          switch (n) {
            case 0:
              e(r);
              break;
            case 1:
              e(i[t[0]][a], r);
              break;
            case 2:
              e(i[t[0]][a], i[t[1]][a], r);
              break;
            default:
              for (var s = 0, l = []; s < n; s++) l[s] = i[t[s]][a];
              (l[s] = r), e.apply(null, l);
          }
        }
    }),
    (l.prototype.getDataExtent = function (t) {
      var e = this._chunks[t],
        n = gg();
      if (!e) return n;
      var i = this.count();
      if (!this._indices) return this._rawExtent[t].slice();
      if ((r = this._extent[t])) return r.slice();
      for (var r, o = (r = n)[0], a = r[1], s = 0; s < i; s++) {
        var l = e[this.getRawIndex(s)];
        l < o && (o = l), a < l && (a = l);
      }
      return (this._extent[t] = r = [o, a]);
    }),
    (l.prototype.getRawDataItem = function (t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent) return this._provider.getItem(e);
      for (var n = [], i = this._chunks, r = 0; r < i.length; r++)
        n.push(i[r][e]);
      return n;
    }),
    (l.prototype.clone = function (t, e) {
      var n,
        i,
        r = new l(),
        o = this._chunks,
        a =
          t &&
          lt(
            t,
            function (t, e) {
              return (t[e] = !0), t;
            },
            {}
          );
      if (a)
        for (var s = 0; s < o.length; s++)
          r._chunks[s] = a[s]
            ? ((n = o[s]),
              (i = void 0),
              (i = n.constructor) === Array ? n.slice() : new i(n))
            : o[s];
      else r._chunks = o;
      return (
        this._copyCommonProps(r),
        e || (r._indices = this._cloneIndices()),
        r._updateGetRawIdx(),
        r
      );
    }),
    (l.prototype._copyCommonProps = function (t) {
      (t._count = this._count),
        (t._rawCount = this._rawCount),
        (t._provider = this._provider),
        (t._dimensions = this._dimensions),
        (t._extent = y(this._extent)),
        (t._rawExtent = y(this._rawExtent));
    }),
    (l.prototype._cloneIndices = function () {
      if (this._indices) {
        var t = this._indices.constructor,
          e = void 0;
        if (t === Array)
          for (var n = this._indices.length, e = new t(n), i = 0; i < n; i++)
            e[i] = this._indices[i];
        else e = new t(this._indices);
        return e;
      }
      return null;
    }),
    (l.prototype._getRawIdxIdentity = function (t) {
      return t;
    }),
    (l.prototype._getRawIdx = function (t) {
      return t < this._count && 0 <= t ? this._indices[t] : -1;
    }),
    (l.prototype._updateGetRawIdx = function () {
      this.getRawIndex = this._indices
        ? this._getRawIdx
        : this._getRawIdxIdentity;
    }),
    (l.internalField = void (ug = {
      arrayRows: vg,
      objectRows: function (t, e, n, i) {
        return Uf(t[e], this._dimensions[i]);
      },
      keyedColumns: vg,
      original: function (t, e, n, i) {
        t = t && (null == t.value ? t : t.value);
        return Uf(t instanceof Array ? t[i] : t, this._dimensions[i]);
      },
      typedArray: function (t, e, n, i) {
        return t[i];
      },
    }));
  var mg = l;
  function l() {
    (this._chunks = []),
      (this._rawExtent = []),
      (this._extent = []),
      (this._count = 0),
      (this._rawCount = 0),
      (this._calcDimNameToIdx = B());
  }
  function vg(t, e, n, i) {
    return Uf(t[i], this._dimensions[i]);
  }
  (xg.prototype.dirty = function () {
    this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0);
  }),
    (xg.prototype._setLocalSource = function (t, e) {
      (this._sourceList = t),
        (this._upstreamSignList = e),
        this._versionSignBase++,
        9e10 < this._versionSignBase && (this._versionSignBase = 0);
    }),
    (xg.prototype._getVersionSign = function () {
      return this._sourceHost.uid + '_' + this._versionSignBase;
    }),
    (xg.prototype.prepareSource = function () {
      this._isDirty() && (this._createSource(), (this._dirty = !1));
    }),
    (xg.prototype._createSource = function () {
      this._setLocalSource([], []);
      var t,
        e,
        n,
        i,
        r,
        o,
        a,
        s = this._sourceHost,
        l = this._getUpstreamSourceManagers(),
        u = !!l.length;
      bg(s)
        ? ((i = s),
          (r = t = o = void 0),
          (e = u
            ? ((e = l[0]).prepareSource(),
              (o = (r = e.getSource()).data),
              (t = r.sourceFormat),
              [e._getVersionSign()])
            : ((t = gt((o = i.get('data', !0))) ? nd : Qp), [])),
          (i = this._getSourceMetaRawOption() || {}),
          (r = (r && r.metaRawOption) || {}),
          (a = R(i.seriesLayoutBy, r.seriesLayoutBy) || null),
          (n = R(i.sourceHeader, r.sourceHeader)),
          (i = R(i.dimensions, r.dimensions)),
          (r =
            a !== r.seriesLayoutBy || !!n != !!r.sourceHeader || i
              ? [af(o, {seriesLayoutBy: a, sourceHeader: n, dimensions: i}, t)]
              : []))
        : ((o = s),
          (e = u
            ? ((r = (a = this._applyTransform(l)).sourceList),
              a.upstreamSignList)
            : ((r = [
                af(o.get('source', !0), this._getSourceMetaRawOption(), null),
              ]),
              []))),
        this._setLocalSource(r, e);
    }),
    (xg.prototype._applyTransform = function (t) {
      var e,
        n = this._sourceHost,
        i = n.get('transform', !0),
        r = n.get('fromTransformResult', !0),
        o = (null != r && 1 !== t.length && Sg(''), []),
        a = [];
      return (
        z(t, function (t) {
          t.prepareSource();
          var e = t.getSource(r || 0);
          null == r || e || Sg(''), o.push(e), a.push(t._getVersionSign());
        }),
        i
          ? (e = sg(i, o, n.componentIndex))
          : null != r &&
            (e = [
              new rf({
                data: (t = o[0]).data,
                sourceFormat: t.sourceFormat,
                seriesLayoutBy: t.seriesLayoutBy,
                dimensionsDefine: y(t.dimensionsDefine),
                startIndex: t.startIndex,
                dimensionsDetectedCount: t.dimensionsDetectedCount,
              }),
            ]),
        {sourceList: e, upstreamSignList: a}
      );
    }),
    (xg.prototype._isDirty = function () {
      if (this._dirty) return !0;
      for (
        var t = this._getUpstreamSourceManagers(), e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e];
        if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign())
          return !0;
      }
    }),
    (xg.prototype.getSource = function (t) {
      var e = this._sourceList[(t = t || 0)];
      return (
        e || ((e = this._getUpstreamSourceManagers())[0] && e[0].getSource(t))
      );
    }),
    (xg.prototype.getSharedDataStore = function (t) {
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }),
    (xg.prototype._innerGetDataStore = function (t, e, n) {
      var i,
        r = this._storeList,
        o = r[0],
        r = (o = o || (r[0] = {}))[n];
      return (
        r ||
          ((i = this._getUpstreamSourceManagers()[0]),
          bg(this._sourceHost) && i
            ? (r = i._innerGetDataStore(t, e, n))
            : (r = new mg()).initData(new gf(e, t.length), t),
          (o[n] = r)),
        r
      );
    }),
    (xg.prototype._getUpstreamSourceManagers = function () {
      var t,
        e = this._sourceHost;
      return bg(e)
        ? (t = hd(e))
          ? [t.getSourceManager()]
          : []
        : N(
            (t = e).get('transform', !0) || t.get('fromTransformResult', !0)
              ? Ho(
                  t.ecModel,
                  'dataset',
                  {
                    index: t.get('fromDatasetIndex', !0),
                    id: t.get('fromDatasetId', !0),
                  },
                  Fo
                ).models
              : [],
            function (t) {
              return t.getSourceManager();
            }
          );
    }),
    (xg.prototype._getSourceMetaRawOption = function () {
      var t,
        e,
        n,
        i = this._sourceHost;
      return (
        bg(i)
          ? ((t = i.get('seriesLayoutBy', !0)),
            (e = i.get('sourceHeader', !0)),
            (n = i.get('dimensions', !0)))
          : this._getUpstreamSourceManagers().length ||
            ((t = (i = i).get('seriesLayoutBy', !0)),
            (e = i.get('sourceHeader', !0)),
            (n = i.get('dimensions', !0))),
        {seriesLayoutBy: t, sourceHeader: e, dimensions: n}
      );
    });
  var _g = xg;
  function xg(t) {
    (this._sourceList = []),
      (this._storeList = []),
      (this._upstreamSignList = []),
      (this._versionSignBase = 0),
      (this._dirty = !0),
      (this._sourceHost = t);
  }
  function wg(t) {
    t.option.transform && Dt(t.option.transform);
  }
  function bg(t) {
    return 'series' === t.mainType;
  }
  function Sg(t) {
    throw new Error(t);
  }
  var Mg = 'line-height:1';
  function Tg(t, e) {
    var n = t.color || '#6e7079',
      i = t.fontSize || 12,
      r = t.fontWeight || '400',
      o = t.color || '#464646',
      a = t.fontSize || 14,
      t = t.fontWeight || '900';
    return 'html' === e
      ? {
          nameStyle:
            'font-size:' +
            _e(i + '') +
            'px;color:' +
            _e(n) +
            ';font-weight:' +
            _e(r + ''),
          valueStyle:
            'font-size:' +
            _e(a + '') +
            'px;color:' +
            _e(o) +
            ';font-weight:' +
            _e(t + ''),
        }
      : {
          nameStyle: {fontSize: i, fill: n, fontWeight: r},
          valueStyle: {fontSize: a, fill: o, fontWeight: t},
        };
  }
  var Cg = [0, 10, 20, 30],
    Ig = ['', '\n', '\n\n', '\n\n\n'];
  function Dg(t, e) {
    return (e.type = t), e;
  }
  function kg(t) {
    return 'section' === t.type;
  }
  function Ag(t) {
    return kg(t) ? Pg : Lg;
  }
  function Pg(i, r, t, o) {
    var n,
      e = r.noHeader,
      a =
        ((l = (function n(t) {
          var i, e, r;
          return kg(t)
            ? ((i = 0),
              (e = t.blocks.length),
              (r = 1 < e || (0 < e && !t.noHeader)),
              z(t.blocks, function (t) {
                var e = n(t);
                i <= e && (i = e + +(r && (!e || (kg(t) && !t.noHeader))));
              }),
              i)
            : 0;
        })(r)),
        {html: Cg[l], richText: Ig[l]}),
      s = [],
      l = r.blocks || [],
      u = (Tt(!l || F(l)), (l = l || []), i.orderMode),
      h =
        (r.sortBlocks &&
          u &&
          ((l = l.slice()),
          Nt((h = {valueAsc: 'asc', valueDesc: 'desc'}), u)
            ? ((n = new Kf(h[u], null)),
              l.sort(function (t, e) {
                return n.evaluate(t.sortParam, e.sortParam);
              }))
            : 'seriesDesc' === u && l.reverse()),
        z(l, function (t, e) {
          var n = r.valueFormatter,
            n = Ag(t)(
              n ? L(L({}, i), {valueFormatter: n}) : i,
              t,
              0 < e ? a.html : 0,
              o
            );
          null != n && s.push(n);
        }),
        'richText' === i.renderMode
          ? s.join(a.richText)
          : Rg(s.join(''), e ? t : a.html));
    return e
      ? h
      : ((u = Ip(r.header, 'ordinal', i.useUTC)),
        (l = Tg(o, i.renderMode).nameStyle),
        'richText' === i.renderMode
          ? Bg(i, u, l) + a.richText + h
          : Rg(
              '<div style="' + l + ';' + Mg + ';">' + _e(u) + '</div>' + h,
              t
            ));
  }
  function Lg(t, e, n, i) {
    var r,
      o,
      a,
      s,
      l = t.renderMode,
      u = e.noName,
      h = e.noValue,
      c = !e.markerType,
      p = e.name,
      d = t.useUTC,
      f =
        e.valueFormatter ||
        t.valueFormatter ||
        function (t) {
          return N((t = F(t) ? t : [t]), function (t, e) {
            return Ip(t, F(o) ? o[e] : o, d);
          });
        };
    if (!u || !h)
      return (
        (r = c
          ? ''
          : t.markupStyleCreator.makeTooltipMarker(
              e.markerType,
              e.markerColor || '#333',
              l
            )),
        (p = u ? '' : Ip(p, 'ordinal', d)),
        (o = e.valueType),
        (f = h ? [] : f(e.value, e.dataIndex)),
        (e = !c || !u),
        (a = !c && u),
        (i = Tg(i, l)),
        (s = i.nameStyle),
        (i = i.valueStyle),
        'richText' === l
          ? (c ? '' : r) +
            (u ? '' : Bg(t, p, s)) +
            (h
              ? ''
              : (function (t, e, n, i, r) {
                  (r = [r]), (i = i ? 10 : 20);
                  return (
                    n && r.push({padding: [0, 0, 0, i], align: 'right'}),
                    t.markupStyleCreator.wrapRichTextStyle(
                      F(e) ? e.join('  ') : e,
                      r
                    )
                  );
                })(t, f, e, a, i))
          : Rg(
              (c ? '' : r) +
                (u
                  ? ''
                  : '<span style="' +
                    s +
                    ';' +
                    (!c ? 'margin-left:2px' : '') +
                    '">' +
                    _e(p) +
                    '</span>') +
                (h
                  ? ''
                  : (function (t, e, n, i) {
                      (n = n ? '10px' : '20px'),
                        (e = e ? 'float:right;margin-left:' + n : '');
                      return (
                        (t = F(t) ? t : [t]),
                        '<span style="' +
                          e +
                          ';' +
                          i +
                          '">' +
                          N(t, _e).join('&nbsp;&nbsp;') +
                          '</span>'
                      );
                    })(f, e, a, i)),
              n
            )
      );
  }
  function Og(t, e, n, i, r, o) {
    if (t)
      return Ag(t)(
        {
          useUTC: r,
          renderMode: n,
          orderMode: i,
          markupStyleCreator: e,
          valueFormatter: t.valueFormatter,
        },
        t,
        0,
        o
      );
  }
  function Rg(t, e) {
    return (
      '<div style="' +
      ('margin: ' + e + 'px 0 0') +
      ';' +
      Mg +
      ';">' +
      t +
      '<div style="clear:both"></div></div>'
    );
  }
  function Bg(t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n);
  }
  function zg(t, e) {
    t = t.get('padding');
    return null != t ? t : 'richText' === e ? [8, 10] : 10;
  }
  (Ng.prototype._generateStyleName = function () {
    return '__EC_aUTo_' + this._nextStyleNameId++;
  }),
    (Ng.prototype.makeTooltipMarker = function (t, e, n) {
      var i = 'richText' === n ? this._generateStyleName() : null,
        e = Pp({color: e, type: t, renderMode: n, markerId: i});
      return V(e) ? e : ((this.richTextStyles[i] = e.style), e.content);
    }),
    (Ng.prototype.wrapRichTextStyle = function (t, e) {
      var n = {},
        e =
          (F(e)
            ? z(e, function (t) {
                return L(n, t);
              })
            : L(n, e),
          this._generateStyleName());
      return (this.richTextStyles[e] = n), '{' + e + '|' + t + '}';
    });
  var Eg = Ng;
  function Ng() {
    (this.richTextStyles = {}), (this._nextStyleNameId = _o());
  }
  function Fg(t) {
    var e,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p = t.series,
      d = t.dataIndex,
      t = t.multipleSeries,
      f = p.getData(),
      g = f.mapDimensionsAll('defaultedTooltip'),
      y = g.length,
      m = p.getRawValue(d),
      v = F(m),
      _ =
        ((_ = d),
        Lp((w = p).getData().getItemVisual(_, 'style')[w.visualDrawType]));
    function x(t, e) {
      e = s.getDimensionInfo(e);
      e &&
        !1 !== e.otherDims.tooltip &&
        (l
          ? c.push(
              Dg('nameValue', {
                markerType: 'subItem',
                markerColor: a,
                name: e.displayName,
                value: t,
                valueType: e.type,
              })
            )
          : (u.push(t), h.push(e.type)));
    }
    1 < y || (v && !y)
      ? ((w = m),
        (r = d),
        (o = g),
        (a = _),
        (s = p.getData()),
        (l = lt(
          w,
          function (t, e, n) {
            n = s.getDimensionInfo(n);
            return t || (n && !1 !== n.tooltip && null != n.displayName);
          },
          !1
        )),
        (u = []),
        (h = []),
        (c = []),
        o.length
          ? z(o, function (t) {
              x(Df(s, r, t), t);
            })
          : z(w, x),
        (e = (o = {inlineValues: u, inlineValueTypes: h, blocks: c})
          .inlineValueTypes),
        (n = o.blocks),
        (i = (o = o.inlineValues)[0]))
      : y
      ? ((w = f.getDimensionInfo(g[0])), (i = o = Df(f, d, g[0])), (e = w.type))
      : (i = o = v ? m[0] : m);
    var y = Po(p),
      g = (y && p.name) || '',
      w = f.getName(d),
      v = t ? g : w;
    return Dg('section', {
      header: g,
      noHeader: t || !y,
      sortParam: i,
      blocks: [
        Dg('nameValue', {
          markerType: 'item',
          markerColor: _,
          name: v,
          noName: !Ct(v),
          value: o,
          valueType: e,
          dataIndex: d,
        }),
      ].concat(n || []),
    });
  }
  var Vg = Bo();
  function Hg(t, e) {
    return t.getName(e) || t.getId(e);
  }
  u(h, (Wg = g)),
    (h.prototype.init = function (t, e, n) {
      (this.seriesIndex = this.componentIndex),
        (this.dataTask = Lf({count: Zg, reset: Yg})),
        (this.dataTask.context = {model: this}),
        this.mergeDefaultAndTheme(t, n);
      (Vg(this).sourceManager = new _g(this)).prepareSource();
      t = this.getInitialData(t, n);
      qg(t, this),
        (this.dataTask.context.data = t),
        (Vg(this).dataBeforeProcessed = t),
        Ug(this),
        this._initSelectedMapFromData(t);
    }),
    (h.prototype.mergeDefaultAndTheme = function (t, e) {
      var n = Vp(this),
        i = n ? Wp(t) : {},
        r = this.subType;
      g.hasClass(r),
        d(t, e.getTheme().get(this.subType)),
        d(t, this.getDefaultOption()),
        Mo(t, 'label', ['show']),
        this.fillDataTextStyle(t.data),
        n && Hp(t, i, n);
    }),
    (h.prototype.mergeOption = function (t, e) {
      (t = d(this.option, t, !0)), this.fillDataTextStyle(t.data);
      var n = Vp(this),
        n = (n && Hp(this.option, t, n), Vg(this).sourceManager),
        n = (n.dirty(), n.prepareSource(), this.getInitialData(t, e));
      qg(n, this),
        this.dataTask.dirty(),
        (this.dataTask.context.data = n),
        (Vg(this).dataBeforeProcessed = n),
        Ug(this),
        this._initSelectedMapFromData(n);
    }),
    (h.prototype.fillDataTextStyle = function (t) {
      if (t && !gt(t))
        for (var e = ['show'], n = 0; n < t.length; n++)
          t[n] && t[n].label && Mo(t[n], 'label', e);
    }),
    (h.prototype.getInitialData = function (t, e) {}),
    (h.prototype.appendData = function (t) {
      this.getRawData().appendData(t.data);
    }),
    (h.prototype.getData = function (t) {
      var e = Kg(this);
      return e
        ? ((e = e.context.data), null == t ? e : e.getLinkedData(t))
        : Vg(this).data;
    }),
    (h.prototype.getAllData = function () {
      var t = this.getData();
      return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{data: t}];
    }),
    (h.prototype.setData = function (t) {
      var e,
        n = Kg(this);
      n &&
        (((e = n.context).outputData = t), n !== this.dataTask) &&
        (e.data = t),
        (Vg(this).data = t);
    }),
    (h.prototype.getEncode = function () {
      var t = this.get('encode', !0);
      if (t) return B(t);
    }),
    (h.prototype.getSourceManager = function () {
      return Vg(this).sourceManager;
    }),
    (h.prototype.getSource = function () {
      return this.getSourceManager().getSource();
    }),
    (h.prototype.getRawData = function () {
      return Vg(this).dataBeforeProcessed;
    }),
    (h.prototype.getColorBy = function () {
      return this.get('colorBy') || 'series';
    }),
    (h.prototype.isColorBySeries = function () {
      return 'series' === this.getColorBy();
    }),
    (h.prototype.getBaseAxis = function () {
      var t = this.coordinateSystem;
      return t && t.getBaseAxis && t.getBaseAxis();
    }),
    (h.prototype.formatTooltip = function (t, e, n) {
      return Fg({series: this, dataIndex: t, multipleSeries: e});
    }),
    (h.prototype.isAnimationEnabled = function () {
      var t = this.ecModel;
      return (
        !!(!b.node || (t && t.ssr)) &&
        !!(t =
          (t = this.getShallow('animation')) &&
          this.getData().count() > this.getShallow('animationThreshold')
            ? !1
            : t)
      );
    }),
    (h.prototype.restoreData = function () {
      this.dataTask.dirty();
    }),
    (h.prototype.getColorFromPalette = function (t, e, n) {
      var i = this.ecModel;
      return (
        vd.prototype.getColorFromPalette.call(this, t, e, n) ||
        i.getColorFromPalette(t, e, n)
      );
    }),
    (h.prototype.coordDimToDataDim = function (t) {
      return this.getRawData().mapDimensionsAll(t);
    }),
    (h.prototype.getProgressive = function () {
      return this.get('progressive');
    }),
    (h.prototype.getProgressiveThreshold = function () {
      return this.get('progressiveThreshold');
    }),
    (h.prototype.select = function (t, e) {
      this._innerSelect(this.getData(e), t);
    }),
    (h.prototype.unselect = function (t, e) {
      var n = this.option.selectedMap;
      if (n) {
        var i = this.option.selectedMode,
          r = this.getData(e);
        if ('series' === i || 'all' === n)
          (this.option.selectedMap = {}), (this._selectedDataIndicesMap = {});
        else
          for (var o = 0; o < t.length; o++) {
            var a = Hg(r, t[o]);
            (n[a] = !1), (this._selectedDataIndicesMap[a] = -1);
          }
      }
    }),
    (h.prototype.toggleSelect = function (t, e) {
      for (var n = [], i = 0; i < t.length; i++)
        (n[0] = t[i]),
          this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e);
    }),
    (h.prototype.getSelectedDataIndices = function () {
      if ('all' === this.option.selectedMap)
        return [].slice.call(this.getData().getIndices());
      for (
        var t = this._selectedDataIndicesMap, e = ht(t), n = [], i = 0;
        i < e.length;
        i++
      ) {
        var r = t[e[i]];
        0 <= r && n.push(r);
      }
      return n;
    }),
    (h.prototype.isSelected = function (t, e) {
      var n = this.option.selectedMap;
      return (
        !!n &&
        ((e = this.getData(e)), 'all' === n || n[Hg(e, t)]) &&
        !e.getItemModel(t).get(['select', 'disabled'])
      );
    }),
    (h.prototype.isUniversalTransitionEnabled = function () {
      var t;
      return (
        !!this.__universalTransitionEnabled ||
        (!!(t = this.option.universalTransition) &&
          (!0 === t || (t && t.enabled)))
      );
    }),
    (h.prototype._innerSelect = function (t, e) {
      var n = this.option,
        i = n.selectedMode,
        r = e.length;
      if (i && r)
        if ('series' === i) n.selectedMap = 'all';
        else if ('multiple' === i) {
          O(n.selectedMap) || (n.selectedMap = {});
          for (var o = n.selectedMap, a = 0; a < r; a++) {
            var s,
              l = e[a];
            (o[(s = Hg(t, l))] = !0),
              (this._selectedDataIndicesMap[s] = t.getRawIndex(l));
          }
        } else
          ('single' !== i && !0 !== i) ||
            ((s = Hg(t, (i = e[r - 1]))),
            (n.selectedMap = (((n = {})[s] = !0), n)),
            (this._selectedDataIndicesMap =
              (((n = {})[s] = t.getRawIndex(i)), n)));
    }),
    (h.prototype._initSelectedMapFromData = function (n) {
      var i;
      this.option.selectedMap ||
        ((i = []),
        n.hasItemOption &&
          n.each(function (t) {
            var e = n.getRawDataItem(t);
            e && e.selected && i.push(t);
          }),
        0 < i.length && this._innerSelect(n, i));
    }),
    (h.registerClass = function (t) {
      return g.registerClass(t);
    }),
    (h.protoInitialize =
      (((Lc = h.prototype).type = 'series.__base__'),
      (Lc.seriesIndex = 0),
      (Lc.ignoreStyleOnData = !1),
      (Lc.hasSymbolVisual = !1),
      (Lc.defaultSymbol = 'circle'),
      (Lc.visualStyleAccessPath = 'itemStyle'),
      void (Lc.visualDrawType = 'fill')));
  var Wg,
    Gg = h;
  function h() {
    var t = (null !== Wg && Wg.apply(this, arguments)) || this;
    return (t._selectedDataIndicesMap = {}), t;
  }
  function Ug(t) {
    var e,
      n,
      i = t.name;
    Po(t) ||
      (t.name =
        ((t = (e = (t = t).getRawData()).mapDimensionsAll('seriesName')),
        (n = []),
        z(t, function (t) {
          t = e.getDimensionInfo(t);
          t.displayName && n.push(t.displayName);
        }),
        n.join(' ') || i));
  }
  function Zg(t) {
    return t.model.getRawData().count();
  }
  function Yg(t) {
    t = t.model;
    return t.setData(t.getRawData().cloneShallow()), Xg;
  }
  function Xg(t, e) {
    e.outputData &&
      t.end > e.outputData.count() &&
      e.model.getRawData().cloneShallow(e.outputData);
  }
  function qg(e, n) {
    z(Bt(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function (t) {
      e.wrapMethod(t, ct(jg, n));
    });
  }
  function jg(t, e) {
    t = Kg(t);
    return t && t.setOutputEnd((e || this).count()), e;
  }
  function Kg(t) {
    var e,
      n = (t.ecModel || {}).scheduler,
      n = n && n.getPipeline(t.uid);
    if (n)
      return (n = n.currentTask) && (e = n.agentStubMap) ? e.get(t.uid) : n;
  }
  at(Gg, zc), at(Gg, vd), qo(Gg, g);
  (Qg.prototype.init = function (t, e) {}),
    (Qg.prototype.render = function (t, e, n, i) {}),
    (Qg.prototype.dispose = function (t, e) {}),
    (Qg.prototype.updateView = function (t, e, n, i) {}),
    (Qg.prototype.updateLayout = function (t, e, n, i) {}),
    (Qg.prototype.updateVisual = function (t, e, n, i) {}),
    (Qg.prototype.toggleBlurSeries = function (t, e, n) {}),
    (Qg.prototype.eachRendered = function (t) {
      var e = this.group;
      e && e.traverse(t);
    });
  var $g = Qg;
  function Qg() {
    (this.group = new Gr()), (this.uid = Wc('viewComponent'));
  }
  function Jg() {
    var o = Bo();
    return function (t) {
      var e = o(t),
        t = t.pipelineContext,
        n = !!e.large,
        i = !!e.progressiveRender,
        r = (e.large = !(!t || !t.large)),
        e = (e.progressiveRender = !(!t || !t.progressiveRender));
      return !(n == r && i == e) && 'reset';
    };
  }
  Xo($g), Qo($g);
  var ty = Bo(),
    ey = Jg(),
    ny =
      ((iy.prototype.init = function (t, e) {}),
      (iy.prototype.render = function (t, e, n, i) {}),
      (iy.prototype.highlight = function (t, e, n, i) {
        t = t.getData(i && i.dataType);
        t && oy(t, i, 'emphasis');
      }),
      (iy.prototype.downplay = function (t, e, n, i) {
        t = t.getData(i && i.dataType);
        t && oy(t, i, 'normal');
      }),
      (iy.prototype.remove = function (t, e) {
        this.group.removeAll();
      }),
      (iy.prototype.dispose = function (t, e) {}),
      (iy.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (iy.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (iy.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (iy.prototype.eachRendered = function (t) {
        cc(this.group, t);
      }),
      (iy.markUpdateMethod = function (t, e) {
        ty(t).updateMethod = e;
      }),
      (iy.protoInitialize = void (iy.prototype.type = 'chart')),
      iy);
  function iy() {
    (this.group = new Gr()),
      (this.uid = Wc('viewChart')),
      (this.renderTask = Lf({plan: ay, reset: sy})),
      (this.renderTask.context = {view: this});
  }
  function ry(t, e, n) {
    t && Ul(t) && ('emphasis' === e ? Il : Dl)(t, n);
  }
  function oy(e, t, n) {
    var i,
      r = Ro(e, t),
      o =
        t && null != t.highlightKey
          ? ((t = t.highlightKey),
            (i = null == (i = Js[t]) && Qs <= 32 ? (Js[t] = Qs++) : i))
          : null;
    null != r
      ? z(So(r), function (t) {
          ry(e.getItemGraphicEl(t), n, o);
        })
      : e.eachItemGraphicEl(function (t) {
          ry(t, n, o);
        });
  }
  function ay(t) {
    return ey(t.model);
  }
  function sy(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      t = t.view,
      a = r && ty(r).updateMethod,
      o = o ? 'incrementalPrepareRender' : a && t[a] ? a : 'render';
    return 'render' !== o && t[o](e, n, i, r), ly[o];
  }
  Xo(ny), Qo(ny);
  var ly = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
        },
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload);
        },
      },
    },
    uy = '\0__throttleOriginMethod',
    hy = '\0__throttleRate',
    cy = '\0__throttleType';
  function py(t, r, o) {
    var a,
      s,
      l,
      u,
      h,
      c = 0,
      p = 0,
      d = null;
    function f() {
      (p = new Date().getTime()), (d = null), t.apply(l, u || []);
    }
    r = r || 0;
    function e() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      (a = new Date().getTime()), (l = this), (u = t);
      var n = h || r,
        i = h || o;
      (h = null),
        (s = a - (i ? c : p) - n),
        clearTimeout(d),
        i ? (d = setTimeout(f, n)) : 0 <= s ? f() : (d = setTimeout(f, -s)),
        (c = a);
    }
    return (
      (e.clear = function () {
        d && (clearTimeout(d), (d = null));
      }),
      (e.debounceNextCall = function (t) {
        h = t;
      }),
      e
    );
  }
  function dy(t, e, n, i) {
    var r = t[e];
    if (r) {
      var o = r[uy] || r,
        a = r[cy];
      if (r[hy] !== n || a !== i) {
        if (null == n || !i) return (t[e] = o);
        ((r = t[e] = py(o, n, 'debounce' === i))[uy] = o),
          (r[cy] = i),
          (r[hy] = n);
      }
    }
  }
  function fy(t, e) {
    var n = t[e];
    n && n[uy] && (n.clear && n.clear(), (t[e] = n[uy]));
  }
  var gy = Bo(),
    yy = {itemStyle: Jo(Rc, !0), lineStyle: Jo(Ac, !0)},
    my = {lineStyle: 'stroke', itemStyle: 'fill'};
  function vy(t, e) {
    t = t.visualStyleMapper || yy[e];
    return t || (console.warn("Unknown style type '" + e + "'."), yy.itemStyle);
  }
  function _y(t, e) {
    t = t.visualDrawType || my[e];
    return t || (console.warn("Unknown style type '" + e + "'."), 'fill');
  }
  var ea = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (r, t) {
        var e = r.getData(),
          n = r.visualStyleAccessPath || 'itemStyle',
          i = r.getModel(n),
          o = vy(r, n)(i),
          i = i.getShallow('decal'),
          a = (i && (e.setVisual('decal', i), (i.dirty = !0)), _y(r, n)),
          i = o[a],
          s = D(i) ? i : null,
          n = 'auto' === o.fill || 'auto' === o.stroke;
        if (
          ((o[a] && !s && !n) ||
            ((i = r.getColorFromPalette(r.name, null, t.getSeriesCount())),
            o[a] || ((o[a] = i), e.setVisual('colorFromPalette', !0)),
            (o.fill = 'auto' === o.fill || D(o.fill) ? i : o.fill),
            (o.stroke = 'auto' === o.stroke || D(o.stroke) ? i : o.stroke)),
          e.setVisual('style', o),
          e.setVisual('drawType', a),
          !t.isSeriesFiltered(r) && s)
        )
          return (
            e.setVisual('colorFromPalette', !1),
            {
              dataEach: function (t, e) {
                var n = r.getDataParams(e),
                  i = L({}, o);
                (i[a] = s(n)), t.setItemVisual(e, 'style', i);
              },
            }
          );
      },
    },
    xy = new Fc(),
    Jh = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var i, r, o;
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t))
          return (
            (e = t.getData()),
            (i = t.visualStyleAccessPath || 'itemStyle'),
            (r = vy(t, i)),
            (o = e.getVisual('drawType')),
            {
              dataEach: e.hasItemOption
                ? function (t, e) {
                    var n = t.getRawDataItem(e);
                    n &&
                      n[i] &&
                      ((xy.option = n[i]),
                      (n = r(xy)),
                      L(t.ensureUniqueItemVisual(e, 'style'), n),
                      xy.option.decal &&
                        (t.setItemVisual(e, 'decal', xy.option.decal),
                        (xy.option.decal.dirty = !0)),
                      o in n) &&
                      t.setItemVisual(e, 'colorFromPalette', !1);
                  }
                : null,
            }
          );
      },
    },
    np = {
      performRawSeries: !0,
      overallReset: function (e) {
        var i = B();
        e.eachSeries(function (t) {
          var e,
            n = t.getColorBy();
          t.isColorBySeries() ||
            ((n = t.type + '-' + n),
            (e = i.get(n)) || i.set(n, (e = {})),
            (gy(t).scope = e));
        }),
          e.eachSeries(function (i) {
            var r, o, a, s, t, l;
            i.isColorBySeries() ||
              e.isSeriesFiltered(i) ||
              ((r = i.getRawData()),
              (o = {}),
              (a = i.getData()),
              (s = gy(i).scope),
              (t = i.visualStyleAccessPath || 'itemStyle'),
              (l = _y(i, t)),
              a.each(function (t) {
                var e = a.getRawIndex(t);
                o[e] = t;
              }),
              r.each(function (t) {
                var e,
                  n = o[t];
                a.getItemVisual(n, 'colorFromPalette') &&
                  ((n = a.ensureUniqueItemVisual(n, 'style')),
                  (t = r.getName(t) || t + ''),
                  (e = r.count()),
                  (n[l] = i.getColorFromPalette(t, s, e)));
              }));
          });
      },
    },
    wy = Math.PI;
  (Sy.prototype.restoreData = function (t, e) {
    t.restoreData(e),
      this._stageTaskMap.each(function (t) {
        t = t.overallTask;
        t && t.dirty();
      });
  }),
    (Sy.prototype.getPerformArgs = function (t, e) {
      var n, i;
      if (t.__pipeline)
        return (
          (i = (n = this._pipelineMap.get(t.__pipeline.id)).context),
          {
            step: (e =
              !e &&
              n.progressiveEnabled &&
              (!i || i.progressiveRender) &&
              t.__idxInPipeline > n.blockIndex
                ? n.step
                : null),
            modBy: null != (t = i && i.modDataCount) ? Math.ceil(t / e) : null,
            modDataCount: t,
          }
        );
    }),
    (Sy.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t);
    }),
    (Sy.prototype.updateStreamModes = function (t, e) {
      var n = this._pipelineMap.get(t.uid),
        i = t.getData().count(),
        e =
          n.progressiveEnabled &&
          e.incrementalPrepareRender &&
          i >= n.threshold,
        r = t.get('large') && i >= t.get('largeThreshold'),
        i = 'mod' === t.get('progressiveChunkMode') ? i : null;
      t.pipelineContext = n.context = {
        progressiveRender: e,
        modDataCount: i,
        large: r,
      };
    }),
    (Sy.prototype.restorePipelines = function (t) {
      var i = this,
        r = (i._pipelineMap = B());
      t.eachSeries(function (t) {
        var e = t.getProgressive(),
          n = t.uid;
        r.set(n, {
          id: n,
          head: null,
          tail: null,
          threshold: t.getProgressiveThreshold(),
          progressiveEnabled:
            e && !(t.preventIncremental && t.preventIncremental()),
          blockIndex: -1,
          step: Math.round(e || 700),
          count: 0,
        }),
          i._pipe(t, t.dataTask);
      });
    }),
    (Sy.prototype.prepareStageTasks = function () {
      var n = this._stageTaskMap,
        i = this.api.getModel(),
        r = this.api;
      z(
        this._allHandlers,
        function (t) {
          var e = n.get(t.uid) || n.set(t.uid, {});
          Tt(!(t.reset && t.overallReset), ''),
            t.reset && this._createSeriesStageTask(t, e, i, r),
            t.overallReset && this._createOverallStageTask(t, e, i, r);
        },
        this
      );
    }),
    (Sy.prototype.prepareView = function (t, e, n, i) {
      var r = t.renderTask,
        o = r.context;
      (o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (r.__block = !t.incrementalPrepareRender),
        this._pipe(e, r);
    }),
    (Sy.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {block: !0});
    }),
    (Sy.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }),
    (Sy.prototype._performStageTasks = function (t, s, l, u) {
      u = u || {};
      var h = !1,
        c = this;
      function p(t, e) {
        return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
      }
      z(t, function (i, t) {
        var e, n, r, o, a;
        (u.visualType && u.visualType !== i.visualType) ||
          ((e = (n = c._stageTaskMap.get(i.uid)).seriesTaskMap),
          (n = n.overallTask)
            ? ((o = n.agentStubMap).each(function (t) {
                p(u, t) && (t.dirty(), (r = !0));
              }),
              r && n.dirty(),
              c.updatePayload(n, l),
              (a = c.getPerformArgs(n, u.block)),
              o.each(function (t) {
                t.perform(a);
              }),
              n.perform(a) && (h = !0))
            : e &&
              e.each(function (t, e) {
                p(u, t) && t.dirty();
                var n = c.getPerformArgs(t, u.block);
                (n.skip =
                  !i.performRawSeries && s.isSeriesFiltered(t.context.model)),
                  c.updatePayload(t, l),
                  t.perform(n) && (h = !0);
              }));
      }),
        (this.unfinished = h || this.unfinished);
    }),
    (Sy.prototype.performSeriesTasks = function (t) {
      var e;
      t.eachSeries(function (t) {
        e = t.dataTask.perform() || e;
      }),
        (this.unfinished = e || this.unfinished);
    }),
    (Sy.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
        } while ((e = e.getUpstream()));
      });
    }),
    (Sy.prototype.updatePayload = function (t, e) {
      'remain' !== e && (t.context.payload = e);
    }),
    (Sy.prototype._createSeriesStageTask = function (n, t, i, r) {
      var o = this,
        a = t.seriesTaskMap,
        s = (t.seriesTaskMap = B()),
        t = n.seriesType,
        e = n.getTargetSeries;
      function l(t) {
        var e = t.uid,
          e = s.set(e, (a && a.get(e)) || Lf({plan: Dy, reset: ky, count: Ly}));
        (e.context = {
          model: t,
          ecModel: i,
          api: r,
          useClearVisual: n.isVisual && !n.isLayout,
          plan: n.plan,
          reset: n.reset,
          scheduler: o,
        }),
          o._pipe(t, e);
      }
      n.createOnAllSeries
        ? i.eachRawSeries(l)
        : t
        ? i.eachRawSeriesByType(t, l)
        : e && e(i, r).each(l);
    }),
    (Sy.prototype._createOverallStageTask = function (t, e, n, i) {
      var r = this,
        o = (e.overallTask = e.overallTask || Lf({reset: My})),
        a =
          ((o.context = {
            ecModel: n,
            api: i,
            overallReset: t.overallReset,
            scheduler: r,
          }),
          o.agentStubMap),
        s = (o.agentStubMap = B()),
        e = t.seriesType,
        l = t.getTargetSeries,
        u = !0,
        h = !1;
      function c(t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || ((h = !0), Lf({reset: Ty, onDirty: Iy}))
          );
        (e.context = {model: t, overallProgress: u}),
          (e.agent = o),
          (e.__block = u),
          r._pipe(t, e);
      }
      Tt(!t.createOnAllSeries, ''),
        e
          ? n.eachRawSeriesByType(e, c)
          : l
          ? l(n, i).each(c)
          : ((u = !1), z(n.getSeries(), c)),
        h && o.dirty();
    }),
    (Sy.prototype._pipe = function (t, e) {
      (t = t.uid), (t = this._pipelineMap.get(t));
      t.head || (t.head = e),
        t.tail && t.tail.pipe(e),
        ((t.tail = e).__idxInPipeline = t.count++),
        (e.__pipeline = t);
    }),
    (Sy.wrapStageHandler = function (t, e) {
      return (
        ((t = D(t)
          ? {
              overallReset: t,
              seriesType: (function (t) {
                Oy = null;
                try {
                  t(Ry, By);
                } catch (t) {}
                return Oy;
              })(t),
            }
          : t).uid = Wc('stageHandler')),
        e && (t.visualType = e),
        t
      );
    });
  var by = Sy;
  function Sy(t, e, n, i) {
    (this._stageTaskMap = B()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i));
  }
  function My(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }
  function Ty(t) {
    return t.overallProgress && Cy;
  }
  function Cy() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function Iy() {
    this.agent && this.agent.dirty();
  }
  function Dy(t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
  }
  function ky(t) {
    t.useClearVisual && t.data.clearAllVisual();
    t = t.resetDefines = So(t.reset(t.model, t.ecModel, t.api, t.payload));
    return 1 < t.length
      ? N(t, function (t, e) {
          return Py(e);
        })
      : Ay;
  }
  var Ay = Py(0);
  function Py(o) {
    return function (t, e) {
      var n = e.data,
        i = e.resetDefines[o];
      if (i && i.dataEach)
        for (var r = t.start; r < t.end; r++) i.dataEach(n, r);
      else i && i.progress && i.progress(t, n);
    };
  }
  function Ly(t) {
    return t.data.count();
  }
  var Oy,
    Ry = {},
    By = {};
  function zy(t, e) {
    for (var n in e.prototype) t[n] = Ft;
  }
  zy(Ry, Sd),
    zy(By, Id),
    (Ry.eachSeriesByType = Ry.eachRawSeriesByType =
      function (t) {
        Oy = t;
      }),
    (Ry.eachComponent = function (t) {
      'series' === t.mainType && t.subType && (Oy = t.subType);
    });
  function Ey() {
    return {
      axisLine: {lineStyle: {color: Ny}},
      splitLine: {lineStyle: {color: '#484753'}},
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      minorSplitLine: {lineStyle: {color: '#20203B'}},
    };
  }
  var Lc = [
      '#37A2DA',
      '#32C5E9',
      '#67E0E3',
      '#9FE6B8',
      '#FFDB5C',
      '#ff9f7f',
      '#fb7293',
      '#E062AE',
      '#E690D1',
      '#e7bcf3',
      '#9d96f5',
      '#8378EA',
      '#96BFFF',
    ],
    zc = {
      color: Lc,
      colorLayer: [
        ['#37A2DA', '#ffd85c', '#fd7b5f'],
        ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
        [
          '#37A2DA',
          '#32C5E9',
          '#9FE6B8',
          '#FFDB5C',
          '#ff9f7f',
          '#fb7293',
          '#e7bcf3',
          '#8378EA',
          '#96BFFF',
        ],
        Lc,
      ],
    },
    Ny = '#B9B8CE',
    Rc = '#100C2A',
    Ac = [
      '#4992ff',
      '#7cffb2',
      '#fddd60',
      '#ff6e76',
      '#58d9f9',
      '#05c091',
      '#ff8a45',
      '#8d48e3',
      '#dd79ff',
    ],
    Lc = {
      darkMode: !0,
      color: Ac,
      backgroundColor: Rc,
      axisPointer: {
        lineStyle: {color: '#817f91'},
        crossStyle: {color: '#817f91'},
        label: {color: '#fff'},
      },
      legend: {textStyle: {color: Ny}},
      textStyle: {color: Ny},
      title: {textStyle: {color: '#EEF1FA'}, subtextStyle: {color: '#B9B8CE'}},
      toolbox: {iconStyle: {borderColor: Ny}},
      dataZoom: {
        borderColor: '#71708A',
        textStyle: {color: Ny},
        brushStyle: {color: 'rgba(135,163,206,0.3)'},
        handleStyle: {color: '#353450', borderColor: '#C5CBE3'},
        moveHandleStyle: {color: '#B0B6C3', opacity: 0.3},
        fillerColor: 'rgba(135,163,206,0.2)',
        emphasis: {
          handleStyle: {borderColor: '#91B7F2', color: '#4D587D'},
          moveHandleStyle: {color: '#636D9A', opacity: 0.7},
        },
        dataBackground: {
          lineStyle: {color: '#71708A', width: 1},
          areaStyle: {color: '#71708A'},
        },
        selectedDataBackground: {
          lineStyle: {color: '#87A3CE'},
          areaStyle: {color: '#87A3CE'},
        },
      },
      visualMap: {textStyle: {color: Ny}},
      timeline: {
        lineStyle: {color: Ny},
        label: {color: Ny},
        controlStyle: {color: Ny, borderColor: Ny},
      },
      calendar: {
        itemStyle: {color: Rc},
        dayLabel: {color: Ny},
        monthLabel: {color: Ny},
        yearLabel: {color: Ny},
      },
      timeAxis: Ey(),
      logAxis: Ey(),
      valueAxis: Ey(),
      categoryAxis: Ey(),
      line: {symbol: 'circle'},
      graph: {color: Ac},
      gauge: {
        title: {color: Ny},
        axisLine: {lineStyle: {color: [[1, 'rgba(207,212,219,0.2)']]}},
        axisLabel: {color: Ny},
        detail: {color: '#EEF1FA'},
      },
      candlestick: {
        itemStyle: {
          color: '#f64e56',
          color0: '#54ea92',
          borderColor: '#f64e56',
          borderColor0: '#54ea92',
        },
      },
    },
    Fy =
      ((Lc.categoryAxis.splitLine.show = !1),
      (Vy.prototype.normalizeQuery = function (t) {
        var e,
          a,
          s,
          l = {},
          u = {},
          h = {};
        return (
          V(t)
            ? ((e = Yo(t)),
              (l.mainType = e.main || null),
              (l.subType = e.sub || null))
            : ((a = ['Index', 'Name', 'Id']),
              (s = {name: 1, dataIndex: 1, dataType: 1}),
              z(t, function (t, e) {
                for (var n = !1, i = 0; i < a.length; i++) {
                  var r = a[i],
                    o = e.lastIndexOf(r);
                  0 < o &&
                    o === e.length - r.length &&
                    'data' !== (o = e.slice(0, o)) &&
                    ((l.mainType = o), (l[r.toLowerCase()] = t), (n = !0));
                }
                s.hasOwnProperty(e) && ((u[e] = t), (n = !0)), n || (h[e] = t);
              })),
          {cptQuery: l, dataQuery: u, otherQuery: h}
        );
      }),
      (Vy.prototype.filter = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = this.eventInfo;
        return (
          !s ||
          ((n = s.targetEl),
          (i = s.packedEvent),
          (r = s.model),
          (s = s.view),
          !r) ||
          !s ||
          ((o = e.cptQuery),
          (a = e.dataQuery),
          l(o, r, 'mainType') &&
            l(o, r, 'subType') &&
            l(o, r, 'index', 'componentIndex') &&
            l(o, r, 'name') &&
            l(o, r, 'id') &&
            l(a, i, 'name') &&
            l(a, i, 'dataIndex') &&
            l(a, i, 'dataType') &&
            (!s.filterForExposedEvent ||
              s.filterForExposedEvent(t, e.otherQuery, n, i)))
        );
        function l(t, e, n, i) {
          return null == t[n] || e[i || n] === t[n];
        }
      }),
      (Vy.prototype.afterTrigger = function () {
        this.eventInfo = null;
      }),
      Vy);
  function Vy() {}
  var Hy = ['symbol', 'symbolSize', 'symbolRotate', 'symbolOffset'],
    Wy = Hy.concat(['symbolKeepAspect']),
    Rc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (a, t) {
        var e = a.getData();
        if (
          (a.legendIcon && e.setVisual('legendIcon', a.legendIcon),
          a.hasSymbolVisual)
        ) {
          for (var s, n = {}, l = {}, i = !1, r = 0; r < Hy.length; r++) {
            var o = Hy[r],
              u = a.get(o);
            D(u) ? ((i = !0), (l[o] = u)) : (n[o] = u);
          }
          if (
            ((n.symbol = n.symbol || a.defaultSymbol),
            e.setVisual(
              L(
                {
                  legendIcon: a.legendIcon || n.symbol,
                  symbolKeepAspect: a.get('symbolKeepAspect'),
                },
                n
              )
            ),
            !t.isSeriesFiltered(a))
          )
            return (
              (s = ht(l)),
              {
                dataEach: i
                  ? function (t, e) {
                      for (
                        var n = a.getRawValue(e), i = a.getDataParams(e), r = 0;
                        r < s.length;
                        r++
                      ) {
                        var o = s[r];
                        t.setItemVisual(e, o, l[o](n, i));
                      }
                    }
                  : null,
              }
            );
        }
      },
    },
    Ac = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t))
          return {
            dataEach: t.getData().hasItemOption
              ? function (t, e) {
                  for (var n = t.getItemModel(e), i = 0; i < Wy.length; i++) {
                    var r = Wy[i],
                      o = n.getShallow(r, !0);
                    null != o && t.setItemVisual(e, r, o);
                  }
                }
              : null,
          };
      },
    };
  function Gy(o, t) {
    z(
      [
        [o + 'ToggleSelect', 'toggleSelect'],
        [o + 'Select', 'select'],
        [o + 'UnSelect', 'unselect'],
      ],
      function (r) {
        t(r[0], function (t, e, n) {
          var i;
          (t = L({}, t)),
            n.dispatchAction(
              L(t, {
                type: r[1],
                seriesIndex:
                  ((n = t),
                  (i = []),
                  e.eachComponent(
                    {mainType: 'series', subType: o, query: n},
                    function (t) {
                      i.push(t.seriesIndex);
                    }
                  ),
                  i),
              })
            );
        });
      }
    );
  }
  function Uy(t, e, s, n, l) {
    var u = t + e;
    s.isSilent(u) ||
      n.eachComponent({mainType: 'series', subType: 'pie'}, function (t) {
        for (
          var e,
            n,
            i = t.seriesIndex,
            r = t.option.selectedMap,
            o = l.selected,
            a = 0;
          a < o.length;
          a++
        )
          o[a].seriesIndex === i &&
            ((n = Ro((e = t.getData()), l.fromActionPayload)),
            s.trigger(u, {
              type: u,
              seriesId: t.id,
              name: F(n) ? e.getName(n[0]) : e.getName(n),
              selected: V(r) ? r : L({}, r),
            }));
      });
  }
  function Zy(t, e, n) {
    for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent;
    return i;
  }
  var Yy = Math.round(9 * Math.random()),
    Xy = 'function' == typeof Object.defineProperty,
    qy =
      ((jy.prototype.get = function (t) {
        return this._guard(t)[this._id];
      }),
      (jy.prototype.set = function (t, e) {
        t = this._guard(t);
        return (
          Xy
            ? Object.defineProperty(t, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0,
              })
            : (t[this._id] = e),
          this
        );
      }),
      (jy.prototype.delete = function (t) {
        return !!this.has(t) && (delete this._guard(t)[this._id], !0);
      }),
      (jy.prototype.has = function (t) {
        return !!this._guard(t)[this._id];
      }),
      (jy.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError('Value of WeakMap is not a non-null object.');
        return t;
      }),
      jy);
  function jy() {
    this._id = '__ec_inner_' + Yy++;
  }
  var Ky = vs.extend({
      type: 'triangle',
      shape: {cx: 0, cy: 0, width: 0, height: 0},
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2;
        t.moveTo(n, i - e),
          t.lineTo(n + r, i + e),
          t.lineTo(n - r, i + e),
          t.closePath();
      },
    }),
    $y = vs.extend({
      type: 'diamond',
      shape: {cx: 0, cy: 0, width: 0, height: 0},
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2;
        t.moveTo(n, i - e),
          t.lineTo(n + r, i),
          t.lineTo(n, i + e),
          t.lineTo(n - r, i),
          t.closePath();
      },
    }),
    Qy = vs.extend({
      type: 'pin',
      shape: {x: 0, y: 0, width: 0, height: 0},
      buildPath: function (t, e) {
        var n = e.x,
          i = e.y,
          r = (e.width / 5) * 3,
          e = Math.max(r, e.height),
          r = r / 2,
          o = (r * r) / (e - r),
          e = i - e + r + o,
          a = Math.asin(o / r),
          s = Math.cos(a) * r,
          l = Math.sin(a),
          u = Math.cos(a),
          h = 0.6 * r,
          c = 0.7 * r;
        t.moveTo(n - s, e + o),
          t.arc(n, e, r, Math.PI - a, 2 * Math.PI + a),
          t.bezierCurveTo(n + s - l * h, e + o + u * h, n, i - c, n, i),
          t.bezierCurveTo(n, i - c, n - s + l * h, e + o + u * h, n - s, e + o),
          t.closePath();
      },
    }),
    Jy = vs.extend({
      type: 'arrow',
      shape: {x: 0, y: 0, width: 0, height: 0},
      buildPath: function (t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          e = e.y,
          i = (i / 3) * 2;
        t.moveTo(r, e),
          t.lineTo(r + i, e + n),
          t.lineTo(r, e + (n / 4) * 3),
          t.lineTo(r - i, e + n),
          t.lineTo(r, e),
          t.closePath();
      },
    }),
    t0 = {
      line: function (t, e, n, i, r) {
        (r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2);
      },
      rect: function (t, e, n, i, r) {
        (r.x = t), (r.y = e), (r.width = n), (r.height = i);
      },
      roundRect: function (t, e, n, i, r) {
        (r.x = t),
          (r.y = e),
          (r.width = n),
          (r.height = i),
          (r.r = Math.min(n, i) / 4);
      },
      square: function (t, e, n, i, r) {
        n = Math.min(n, i);
        (r.x = t), (r.y = e), (r.width = n), (r.height = n);
      },
      circle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2);
      },
      diamond: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
      pin: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      arrow: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      triangle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
    },
    e0 = {},
    n0 =
      (z(
        {
          line: Ju,
          rect: Bs,
          roundRect: Bs,
          square: Bs,
          circle: fu,
          diamond: $y,
          pin: Qy,
          arrow: Jy,
          triangle: Ky,
        },
        function (t, e) {
          e0[e] = new t();
        }
      ),
      vs.extend({
        type: 'symbol',
        shape: {symbolType: '', x: 0, y: 0, width: 0, height: 0},
        calculateTextPosition: function (t, e, n) {
          var t = Ar(t, e, n),
            i = this.shape;
          return (
            i &&
              'pin' === i.symbolType &&
              'inside' === e.position &&
              (t.y = n.y + 0.4 * n.height),
            t
          );
        },
        buildPath: function (t, e, n) {
          var i,
            r = e.symbolType;
          'none' !== r &&
            ((i = (i = e0[r]) || e0[(r = 'rect')]),
            t0[r](e.x, e.y, e.width, e.height, i.shape),
            i.buildPath(t, i.shape, n));
        },
      }));
  function i0(t, e) {
    var n;
    'image' !== this.type &&
      ((n = this.style),
      this.__isEmptyBrush
        ? ((n.stroke = t), (n.fill = e || '#fff'), (n.lineWidth = 2))
        : 'line' === this.shape.symbolType
        ? (n.stroke = t)
        : (n.fill = t),
      this.markRedraw());
  }
  function r0(t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf('empty');
    return (
      ((a =
        0 ===
        (t = s ? t.substr(5, 1).toLowerCase() + t.substr(6) : t).indexOf(
          'image://'
        )
          ? qh(t.slice(8), new Z(e, n, i, r), a ? 'center' : 'cover')
          : 0 === t.indexOf('path://')
          ? Xh(t.slice(7), {}, new Z(e, n, i, r), a ? 'center' : 'cover')
          : new n0({
              shape: {symbolType: t, x: e, y: n, width: i, height: r},
            })).__isEmptyBrush = s),
      (a.setColor = i0),
      o && a.setColor(o),
      a
    );
  }
  function o0(t) {
    return isFinite(t);
  }
  function a0(t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p =
          'radial' === e.type
            ? ((i = t),
              (r = e),
              (a = (o = n).width),
              (s = o.height),
              (l = Math.min(a, s)),
              (u = null == r.x ? 0.5 : r.x),
              (h = null == r.y ? 0.5 : r.y),
              (c = null == r.r ? 0.5 : r.r),
              r.global || ((u = u * a + o.x), (h = h * s + o.y), (c *= l)),
              (u = o0(u) ? u : 0.5),
              (h = o0(h) ? h : 0.5),
              (c = 0 <= c && o0(c) ? c : 0.5),
              i.createRadialGradient(u, h, 0, u, h, c))
            : ((r = t),
              (a = n),
              (o = null == (s = e).x ? 0 : s.x),
              (l = null == s.x2 ? 1 : s.x2),
              (i = null == s.y ? 0 : s.y),
              (u = null == s.y2 ? 0 : s.y2),
              s.global ||
                ((o = o * a.width + a.x),
                (l = l * a.width + a.x),
                (i = i * a.height + a.y),
                (u = u * a.height + a.y)),
              (o = o0(o) ? o : 0),
              (l = o0(l) ? l : 1),
              (i = o0(i) ? i : 0),
              (u = o0(u) ? u : 0),
              r.createLinearGradient(o, i, l, u)),
        d = e.colorStops,
        f = 0;
      f < d.length;
      f++
    )
      p.addColorStop(d[f].offset, d[f].color);
    return p;
  }
  function s0(t) {
    return parseInt(t, 10);
  }
  function l0(t, e, n) {
    var i = ['width', 'height'][e],
      r = ['clientWidth', 'clientHeight'][e],
      o = ['paddingLeft', 'paddingTop'][e],
      e = ['paddingRight', 'paddingBottom'][e];
    return null != n[i] && 'auto' !== n[i]
      ? parseFloat(n[i])
      : ((n = document.defaultView.getComputedStyle(t)),
        ((t[r] || s0(n[i]) || s0(t.style[i])) -
          (s0(n[o]) || 0) -
          (s0(n[e]) || 0)) |
          0);
  }
  function u0(t) {
    var e,
      n = t.style,
      i =
        n.lineDash &&
        0 < n.lineWidth &&
        ((r = n.lineDash),
        (i = n.lineWidth),
        r && 'solid' !== r && 0 < i
          ? 'dashed' === r
            ? [4 * i, 2 * i]
            : 'dotted' === r
            ? [i]
            : dt(r)
            ? [r]
            : F(r)
            ? r
            : null
          : null),
      r = n.lineDashOffset;
    return (
      i &&
        (e = n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1) &&
        1 !== e &&
        ((i = N(i, function (t) {
          return t / e;
        })),
        (r /= e)),
      [i, r]
    );
  }
  var h0 = new ts(!0);
  function c0(t) {
    var e = t.stroke;
    return !(null == e || 'none' === e || !(0 < t.lineWidth));
  }
  function p0(t) {
    return 'string' == typeof t && 'none' !== t;
  }
  function d0(t) {
    t = t.fill;
    return null != t && 'none' !== t;
  }
  function f0(t, e) {
    var n;
    null != e.fillOpacity && 1 !== e.fillOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.fillOpacity * e.opacity),
        t.fill(),
        (t.globalAlpha = n))
      : t.fill();
  }
  function g0(t, e) {
    var n;
    null != e.strokeOpacity && 1 !== e.strokeOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.strokeOpacity * e.opacity),
        t.stroke(),
        (t.globalAlpha = n))
      : t.stroke();
  }
  function y0(t, e, n) {
    var n = ra(e.image, e.__image, n);
    if (aa(n))
      return (
        (t = t.createPattern(n, e.repeat || 'repeat')),
        'function' == typeof DOMMatrix &&
          t &&
          t.setTransform &&
          ((n = new DOMMatrix()).translateSelf(e.x || 0, e.y || 0),
          n.rotateSelf(0, 0, (e.rotation || 0) * Vt),
          n.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          t.setTransform(n)),
        t
      );
  }
  var m0 = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
    v0 = [
      ['lineCap', 'butt'],
      ['lineJoin', 'miter'],
      ['miterLimit', 10],
    ];
  function _0(t, e, n, i, r) {
    var o,
      a = !1;
    if (!i && e === (n = n || {})) return !1;
    (!i && e.opacity === n.opacity) ||
      (C0(t, r),
      (a = !0),
      (o = Math.max(Math.min(e.opacity, 1), 0)),
      (t.globalAlpha = isNaN(o) ? xa.opacity : o)),
      (!i && e.blend === n.blend) ||
        (a || (C0(t, r), (a = !0)),
        (t.globalCompositeOperation = e.blend || xa.blend));
    for (var s = 0; s < m0.length; s++) {
      var l = m0[s];
      (!i && e[l] === n[l]) ||
        (a || (C0(t, r), (a = !0)), (t[l] = t.dpr * (e[l] || 0)));
    }
    return (
      (!i && e.shadowColor === n.shadowColor) ||
        (a || (C0(t, r), (a = !0)),
        (t.shadowColor = e.shadowColor || xa.shadowColor)),
      a
    );
  }
  function x0(t, e, n, i, r) {
    var o = I0(e, r.inHover),
      a = i ? null : (n && I0(n, r.inHover)) || {};
    if (o !== a) {
      var s = _0(t, o, a, i, r);
      (i || o.fill !== a.fill) &&
        (s || (C0(t, r), (s = !0)), p0(o.fill)) &&
        (t.fillStyle = o.fill),
        (i || o.stroke !== a.stroke) &&
          (s || (C0(t, r), (s = !0)), p0(o.stroke)) &&
          (t.strokeStyle = o.stroke),
        (!i && o.opacity === a.opacity) ||
          (s || (C0(t, r), (s = !0)),
          (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
        e.hasStroke() &&
          ((n =
            o.lineWidth /
            (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1)),
          t.lineWidth !== n) &&
          (s || (C0(t, r), (s = !0)), (t.lineWidth = n));
      for (var l = 0; l < v0.length; l++) {
        var u = v0[l],
          h = u[0];
        (!i && o[h] === a[h]) ||
          (s || (C0(t, r), (s = !0)), (t[h] = o[h] || u[1]));
      }
    }
  }
  function w0(t, e) {
    var e = e.transform,
      n = t.dpr || 1;
    e
      ? t.setTransform(
          n * e[0],
          n * e[1],
          n * e[2],
          n * e[3],
          n * e[4],
          n * e[5]
        )
      : t.setTransform(n, 0, 0, n, 0, 0);
  }
  var b0 = 1,
    S0 = 2,
    M0 = 3,
    T0 = 4;
  function C0(t, e) {
    e.batchFill && t.fill(),
      e.batchStroke && t.stroke(),
      (e.batchFill = ''),
      (e.batchStroke = '');
  }
  function I0(t, e) {
    return (e && t.__hoverStyle) || t.style;
  }
  function D0(t, e) {
    k0(t, e, {inHover: !1, viewWidth: 0, viewHeight: 0}, !0);
  }
  function k0(t, e, n, z) {
    var i = e.transform;
    if (e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) {
      var r = e.__clipPaths,
        o = n.prevElClipPaths,
        a = !1,
        s = !1;
      if (
        !o ||
        (function (t, e) {
          if (t !== e && (t || e)) {
            if (!t || !e || t.length !== e.length) return 1;
            for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return 1;
          }
        })(r, o)
      ) {
        if (
          (o &&
            o.length &&
            (C0(t, n),
            t.restore(),
            (s = a = !0),
            (n.prevElClipPaths = null),
            (n.allClipped = !1),
            (n.prevEl = null)),
          r && r.length)
        ) {
          C0(t, n), t.save();
          for (var E = r, l = t, o = n, N = !1, F = 0; F < E.length; F++) {
            var V = E[F],
              N = N || V.isZeroArea();
            w0(l, V), l.beginPath(), V.buildPath(l, V.shape), l.clip();
          }
          (o.allClipped = N), (a = !0);
        }
        n.prevElClipPaths = r;
      }
      if (n.allClipped) e.__isRendered = !1;
      else {
        e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
        var u,
          h,
          c,
          p,
          d,
          f,
          g,
          y,
          m,
          v,
          _,
          x,
          w,
          H,
          b,
          S,
          M,
          T,
          C,
          I,
          D,
          k,
          A,
          o = n.prevEl,
          P =
            (o || (s = a = !0),
            e instanceof vs &&
              e.autoBatch &&
              ((r = e.style),
              (P = d0(r)),
              (u = c0(r)),
              !(
                r.lineDash ||
                !(+P ^ +u) ||
                (P && 'string' != typeof r.fill) ||
                (u && 'string' != typeof r.stroke) ||
                r.strokePercent < 1 ||
                r.strokeOpacity < 1 ||
                r.fillOpacity < 1
              ))),
          a =
            (a ||
            ((u = i),
            (r = o.transform),
            u && r
              ? u[0] !== r[0] ||
                u[1] !== r[1] ||
                u[2] !== r[2] ||
                u[3] !== r[3] ||
                u[4] !== r[4] ||
                u[5] !== r[5]
              : u || r)
              ? (C0(t, n), w0(t, e))
              : P || C0(t, n),
            I0(e, n.inHover));
        if (e instanceof vs)
          n.lastDrawType !== b0 && ((s = !0), (n.lastDrawType = b0)),
            x0(t, e, o, s, n),
            (P && (n.batchFill || n.batchStroke)) || t.beginPath(),
            (i = t),
            (r = e),
            (R = P),
            (b = c0((p = a))),
            (S = d0(p)),
            (M = p.strokePercent),
            (T = M < 1),
            (C = !r.path),
            (r.silent && !T) || !C || r.createPathProxy(),
            (I = r.path || h0),
            (D = r.__dirty),
            R ||
              ((d = p.fill),
              (A = p.stroke),
              (f = S && !!d.colorStops),
              (g = b && !!A.colorStops),
              (y = S && !!d.image),
              (m = b && !!A.image),
              (k = w = x = _ = v = void 0),
              (f || g) && (k = r.getBoundingRect()),
              f &&
                ((v = D ? a0(i, d, k) : r.__canvasFillGradient),
                (r.__canvasFillGradient = v)),
              g &&
                ((_ = D ? a0(i, A, k) : r.__canvasStrokeGradient),
                (r.__canvasStrokeGradient = _)),
              y &&
                ((x =
                  D || !r.__canvasFillPattern
                    ? y0(i, d, r)
                    : r.__canvasFillPattern),
                (r.__canvasFillPattern = x)),
              m &&
                ((w =
                  D || !r.__canvasStrokePattern
                    ? y0(i, A, r)
                    : r.__canvasStrokePattern),
                (r.__canvasStrokePattern = x)),
              f ? (i.fillStyle = v) : y && (x ? (i.fillStyle = x) : (S = !1)),
              g
                ? (i.strokeStyle = _)
                : m && (w ? (i.strokeStyle = w) : (b = !1))),
            (k = r.getGlobalScale()),
            I.setScale(k[0], k[1], r.segmentIgnoreThreshold),
            i.setLineDash && p.lineDash && ((H = (d = u0(r))[0]), (O = d[1])),
            (A = !0),
            (C || D & xn) &&
              (I.setDPR(i.dpr),
              T ? I.setContext(null) : (I.setContext(i), (A = !1)),
              I.reset(),
              r.buildPath(I, r.shape, R),
              I.toStatic(),
              r.pathUpdated()),
            A && I.rebuildPath(i, T ? M : 1),
            H && (i.setLineDash(H), (i.lineDashOffset = O)),
            R ||
              (p.strokeFirst
                ? (b && g0(i, p), S && f0(i, p))
                : (S && f0(i, p), b && g0(i, p))),
            H && i.setLineDash([]),
            P &&
              ((n.batchFill = a.fill || ''), (n.batchStroke = a.stroke || ''));
        else if (e instanceof ws)
          n.lastDrawType !== M0 && ((s = !0), (n.lastDrawType = M0)),
            x0(t, e, o, s, n),
            (f = t),
            (v = e),
            null != (x = (y = a).text) && (x += ''),
            x &&
              ((f.font = y.font || j),
              (f.textAlign = y.textAlign),
              (f.textBaseline = y.textBaseline),
              (_ = g = void 0),
              f.setLineDash && y.lineDash && ((g = (v = u0(v))[0]), (_ = v[1])),
              g && (f.setLineDash(g), (f.lineDashOffset = _)),
              y.strokeFirst
                ? (c0(y) && f.strokeText(x, y.x, y.y),
                  d0(y) && f.fillText(x, y.x, y.y))
                : (d0(y) && f.fillText(x, y.x, y.y),
                  c0(y) && f.strokeText(x, y.x, y.y)),
              g) &&
              f.setLineDash([]);
        else if (e instanceof Cs)
          n.lastDrawType !== S0 && ((s = !0), (n.lastDrawType = S0)),
            (m = o),
            (w = s),
            _0(t, I0(e, (k = n).inHover), m && I0(m, k.inHover), w, k),
            (d = t),
            (C = a),
            (r = (D = e).__image = ra(C.image, D.__image, D, D.onload)) &&
              aa(r) &&
              ((A = C.x || 0),
              (I = C.y || 0),
              (T = D.getWidth()),
              (D = D.getHeight()),
              (M = r.width / r.height),
              null == T && null != D
                ? (T = D * M)
                : null == D && null != T
                ? (D = T / M)
                : null == T && null == D && ((T = r.width), (D = r.height)),
              C.sWidth && C.sHeight
                ? ((h = C.sx || 0),
                  (c = C.sy || 0),
                  d.drawImage(r, h, c, C.sWidth, C.sHeight, A, I, T, D))
                : C.sx && C.sy
                ? ((h = C.sx),
                  (c = C.sy),
                  d.drawImage(r, h, c, T - h, D - c, A, I, T, D))
                : d.drawImage(r, A, I, T, D));
        else if (e.getTemporalDisplayables) {
          n.lastDrawType !== T0 && ((s = !0), (n.lastDrawType = T0));
          var L,
            W,
            G = t,
            O = e,
            R = n,
            U = O.getDisplayables(),
            Z = O.getTemporalDisplayables(),
            Y =
              (G.save(),
              {
                prevElClipPaths: null,
                prevEl: null,
                allClipped: !1,
                viewWidth: R.viewWidth,
                viewHeight: R.viewHeight,
                inHover: R.inHover,
              });
          for (L = O.getCursor(), W = U.length; L < W; L++)
            (B = U[L]).beforeBrush && B.beforeBrush(),
              B.innerBeforeBrush(),
              k0(G, B, Y, L === W - 1),
              B.innerAfterBrush(),
              B.afterBrush && B.afterBrush(),
              (Y.prevEl = B);
          for (var B, X = 0, q = Z.length; X < q; X++)
            (B = Z[X]).beforeBrush && B.beforeBrush(),
              B.innerBeforeBrush(),
              k0(G, B, Y, X === q - 1),
              B.innerAfterBrush(),
              B.afterBrush && B.afterBrush(),
              (Y.prevEl = B);
          O.clearTemporalDisplayables(), (O.notClear = !0), G.restore();
        }
        P && z && C0(t, n),
          e.innerAfterBrush(),
          e.afterBrush && e.afterBrush(),
          ((n.prevEl = e).__dirty = 0),
          (e.__isRendered = !0);
      }
    } else (e.__dirty &= ~_n), (e.__isRendered = !1);
  }
  var A0 = new qy(),
    P0 = new ni(100),
    L0 = [
      'symbol',
      'symbolSize',
      'symbolKeepAspect',
      'color',
      'backgroundColor',
      'dashArrayX',
      'dashArrayY',
      'maxTileWidth',
      'maxTileHeight',
    ];
  function O0(t, e) {
    if ('none' === t) return null;
    var a = e.getDevicePixelRatio(),
      s = e.getZr(),
      l = 'svg' === s.painter.type,
      e = (t.dirty && A0.delete(t), A0.get(t));
    if (e) return e;
    for (
      var n,
        u = E(t, {
          symbol: 'rect',
          symbolSize: 1,
          symbolKeepAspect: !0,
          color: 'rgba(0, 0, 0, 0.2)',
          backgroundColor: null,
          dashArrayX: 5,
          dashArrayY: 5,
          rotation: 0,
          maxTileWidth: 512,
          maxTileHeight: 512,
        }),
        e =
          ('none' === u.backgroundColor && (u.backgroundColor = null),
          {repeat: 'repeat'}),
        i = e,
        r = [a],
        o = !0,
        h = 0;
      h < L0.length;
      ++h
    ) {
      var c = u[L0[h]];
      if (null != c && !F(c) && !V(c) && !dt(c) && 'boolean' != typeof c) {
        o = !1;
        break;
      }
      r.push(c);
    }
    o &&
      ((n = r.join(',') + (l ? '-svg' : '')), (v = P0.get(n))) &&
      (l ? (i.svgElement = v) : (i.image = v));
    var p,
      d = (function t(e) {
        if (!e || 0 === e.length) return [[0, 0]];
        if (dt(e)) return [[(o = Math.ceil(e)), o]];
        var n = !0;
        for (var i = 0; i < e.length; ++i)
          if (!dt(e[i])) {
            n = !1;
            break;
          }
        if (n) return t([e]);
        var r = [];
        for (i = 0; i < e.length; ++i) {
          var o;
          dt(e[i])
            ? ((o = Math.ceil(e[i])), r.push([o, o]))
            : (o = N(e[i], function (t) {
                return Math.ceil(t);
              })).length %
                2 ==
              1
            ? r.push(o.concat(o))
            : r.push(o);
        }
        return r;
      })(u.dashArrayX),
      f = (function (t) {
        if (!t || ('object' == typeof t && 0 === t.length)) return [0, 0];
        if (dt(t)) return [(e = Math.ceil(t)), e];
        var e = N(t, function (t) {
          return Math.ceil(t);
        });
        return t.length % 2 ? e.concat(e) : e;
      })(u.dashArrayY),
      g = (function t(e) {
        if (!e || 0 === e.length) return [['rect']];
        if (V(e)) return [[e]];
        var n = !0;
        for (var i = 0; i < e.length; ++i)
          if (!V(e[i])) {
            n = !1;
            break;
          }
        if (n) return t([e]);
        var r = [];
        for (i = 0; i < e.length; ++i) V(e[i]) ? r.push([e[i]]) : r.push(e[i]);
        return r;
      })(u.symbol),
      y = (function (t) {
        return N(t, R0);
      })(d),
      m = R0(f),
      v = !l && W.createCanvas(),
      _ = l && {tag: 'g', attrs: {}, key: 'dcl', children: []},
      x = (function () {
        for (var t = 1, e = 0, n = y.length; e < n; ++e) t = xo(t, y[e]);
        for (var i = 1, e = 0, n = g.length; e < n; ++e) i = xo(i, g[e].length);
        t *= i;
        var r = m * y.length * g.length;
        return {
          width: Math.max(1, Math.min(t, u.maxTileWidth)),
          height: Math.max(1, Math.min(r, u.maxTileHeight)),
        };
      })();
    v &&
      ((v.width = x.width * a),
      (v.height = x.height * a),
      (p = v.getContext('2d'))),
      p &&
        (p.clearRect(0, 0, v.width, v.height), u.backgroundColor) &&
        ((p.fillStyle = u.backgroundColor),
        p.fillRect(0, 0, v.width, v.height));
    for (var w = 0, b = 0; b < f.length; ++b) w += f[b];
    if (!(w <= 0))
      for (var S = -m, M = 0, T = 0, C = 0; S < x.height; ) {
        if (M % 2 == 0) {
          for (
            var I = (T / 2) % g.length, D = 0, k = 0, A = 0;
            D < 2 * x.width;

          ) {
            for (var P, L, O, R, B, z = 0, b = 0; b < d[C].length; ++b)
              z += d[C][b];
            if (z <= 0) break;
            k % 2 == 0 &&
              ((L = 0.5 * (1 - u.symbolSize)),
              (P = D + d[C][k] * L),
              (L = S + f[M] * L),
              (O = d[C][k] * u.symbolSize),
              (R = f[M] * u.symbolSize),
              (B = (A / 2) % g[I].length),
              (function (t, e, n, i, r) {
                var o = l ? 1 : a,
                  r = r0(
                    r,
                    t * o,
                    e * o,
                    n * o,
                    i * o,
                    u.color,
                    u.symbolKeepAspect
                  );
                l
                  ? (t = s.painter.renderOneToVNode(r)) && _.children.push(t)
                  : D0(p, r);
              })(P, L, O, R, g[I][B])),
              (D += d[C][k]),
              ++A,
              ++k === d[C].length && (k = 0);
          }
          ++C === d.length && (C = 0);
        }
        (S += f[M]), ++T, ++M === f.length && (M = 0);
      }
    return (
      o && P0.put(n, v || _),
      (i.image = v),
      (i.svgElement = _),
      (i.svgWidth = x.width),
      (i.svgHeight = x.height),
      (e.rotation = u.rotation),
      (e.scaleX = e.scaleY = l ? 1 : 1 / a),
      A0.set(t, e),
      (t.dirty = !1),
      e
    );
  }
  function R0(t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
    return t.length % 2 == 1 ? 2 * e : e;
  }
  var B0 = new le(),
    z0 = {};
  var $y = {
      PROCESSOR: {FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3},
      VISUAL: {
        LAYOUT: 1e3,
        PROGRESSIVE_LAYOUT: 1100,
        GLOBAL: 2e3,
        CHART: 3e3,
        POST_CHART_LAYOUT: 4600,
        COMPONENT: 4e3,
        BRUSH: 5e3,
        CHART_ITEM: 4500,
        ARIA: 6e3,
        DECAL: 7e3,
      },
    },
    E0 = '__flagInMainProcess',
    N0 = '__pendingUpdate',
    F0 = '__needsUpdateStatus',
    V0 = /^[a-zA-Z0-9_]+$/,
    H0 = '__connectUpdateStatus';
  function W0(n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      if (!this.isDisposed()) return U0(this, n, t);
      this.id;
    };
  }
  function G0(n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return U0(this, n, t);
    };
  }
  function U0(t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), le.prototype[e].apply(t, n);
  }
  u(X0, (Z0 = le));
  var Z0,
    Y0 = X0;
  function X0() {
    return (null !== Z0 && Z0.apply(this, arguments)) || this;
  }
  var q0,
    j0,
    K0,
    $0,
    Q0,
    J0,
    tm,
    em,
    nm,
    im,
    rm,
    om,
    am,
    sm,
    lm,
    um,
    hm,
    cm,
    pm,
    Qy = Y0.prototype,
    dm =
      ((Qy.on = G0('on')),
      (Qy.off = G0('off')),
      u(c, (pm = le)),
      (c.prototype._onframe = function () {
        if (!this._disposed) {
          cm(this);
          var t = this._scheduler;
          if (this[N0]) {
            var e = this[N0].silent;
            this[E0] = !0;
            try {
              q0(this), $0.update.call(this, null, this[N0].updateParams);
            } catch (t) {
              throw ((this[E0] = !1), (this[N0] = null), t);
            }
            this._zr.flush(),
              (this[E0] = !1),
              (this[N0] = null),
              em.call(this, e),
              nm.call(this, e);
          } else if (t.unfinished) {
            var n = 1,
              i = this._model,
              r = this._api;
            t.unfinished = !1;
            do {
              var o = +new Date();
            } while (
              (t.performSeriesTasks(i),
              t.performDataProcessorTasks(i),
              J0(this, i),
              t.performVisualTasks(i),
              sm(this, this._model, r, 'remain', {}),
              0 < (n -= +new Date() - o) && t.unfinished)
            );
            t.unfinished || this._zr.flush();
          }
        }
      }),
      (c.prototype.getDom = function () {
        return this._dom;
      }),
      (c.prototype.getId = function () {
        return this.id;
      }),
      (c.prototype.getZr = function () {
        return this._zr;
      }),
      (c.prototype.isSSR = function () {
        return this._ssr;
      }),
      (c.prototype.setOption = function (t, e, n) {
        if (!this[E0])
          if (this._disposed) this.id;
          else {
            O(e) &&
              ((n = e.lazyUpdate),
              (i = e.silent),
              (r = e.replaceMerge),
              (o = e.transition),
              (e = e.notMerge)),
              (this[E0] = !0),
              (this._model && !e) ||
                ((e = new Od(this._api)),
                (a = this._theme),
                ((s = this._model = new Sd()).scheduler = this._scheduler),
                (s.ssr = this._ssr),
                s.init(null, null, null, a, this._locale, e)),
              this._model.setOption(t, {replaceMerge: r}, Sm);
            var i,
              r,
              o,
              a,
              s = {seriesTransition: o, optionChanged: !0};
            if (n)
              (this[N0] = {silent: i, updateParams: s}),
                (this[E0] = !1),
                this.getZr().wakeUp();
            else {
              try {
                q0(this), $0.update.call(this, null, s);
              } catch (t) {
                throw ((this[N0] = null), (this[E0] = !1), t);
              }
              this._ssr || this._zr.flush(),
                (this[N0] = null),
                (this[E0] = !1),
                em.call(this, i),
                nm.call(this, i);
            }
          }
      }),
      (c.prototype.setTheme = function () {}),
      (c.prototype.getModel = function () {
        return this._model;
      }),
      (c.prototype.getOption = function () {
        return this._model && this._model.getOption();
      }),
      (c.prototype.getWidth = function () {
        return this._zr.getWidth();
      }),
      (c.prototype.getHeight = function () {
        return this._zr.getHeight();
      }),
      (c.prototype.getDevicePixelRatio = function () {
        return (
          this._zr.painter.dpr ||
          (b.hasGlobalWindow && window.devicePixelRatio) ||
          1
        );
      }),
      (c.prototype.getRenderedCanvas = function (t) {
        return this.renderToCanvas(t);
      }),
      (c.prototype.renderToCanvas = function (t) {
        return this._zr.painter.getRenderedCanvas({
          backgroundColor:
            (t = t || {}).backgroundColor || this._model.get('backgroundColor'),
          pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
        });
      }),
      (c.prototype.renderToSVGString = function (t) {
        return this._zr.painter.renderToString({
          useViewBox: (t = t || {}).useViewBox,
        });
      }),
      (c.prototype.getSvgDataURL = function () {
        var t;
        if (b.svgSupported)
          return (
            z((t = this._zr).storage.getDisplayList(), function (t) {
              t.stopAnimation(null, !0);
            }),
            t.painter.toDataURL()
          );
      }),
      (c.prototype.getDataURL = function (t) {
        var e, n, i, r;
        if (!this._disposed)
          return (
            (r = (t = t || {}).excludeComponents),
            (e = this._model),
            (n = []),
            (i = this),
            z(r, function (t) {
              e.eachComponent({mainType: t}, function (t) {
                t = i._componentsMap[t.__viewId];
                t.group.ignore || (n.push(t), (t.group.ignore = !0));
              });
            }),
            (r =
              'svg' === this._zr.painter.getType()
                ? this.getSvgDataURL()
                : this.renderToCanvas(t).toDataURL(
                    'image/' + ((t && t.type) || 'png')
                  )),
            z(n, function (t) {
              t.group.ignore = !1;
            }),
            r
          );
        this.id;
      }),
      (c.prototype.getConnectedDataURL = function (i) {
        var r, o, a, s, l, u, h, c, p, e, t, n, d, f, g;
        if (!this._disposed)
          return (
            (r = 'svg' === i.type),
            (o = this.group),
            (a = Math.min),
            (s = Math.max),
            Dm[o]
              ? ((u = l = 1 / 0),
                (c = h = -1 / 0),
                (p = []),
                (e = (i && i.pixelRatio) || this.getDevicePixelRatio()),
                z(Im, function (t, e) {
                  var n;
                  t.group === o &&
                    ((n = r
                      ? t.getZr().painter.getSvgDom().innerHTML
                      : t.renderToCanvas(y(i))),
                    (t = t.getDom().getBoundingClientRect()),
                    (l = a(t.left, l)),
                    (u = a(t.top, u)),
                    (h = s(t.right, h)),
                    (c = s(t.bottom, c)),
                    p.push({dom: n, left: t.left, top: t.top}));
                }),
                (t = (h *= e) - (l *= e)),
                (n = (c *= e) - (u *= e)),
                (d = W.createCanvas()),
                (f = Kr(d, {renderer: r ? 'svg' : 'canvas'})).resize({
                  width: t,
                  height: n,
                }),
                r
                  ? ((g = ''),
                    z(p, function (t) {
                      var e = t.left - l,
                        n = t.top - u;
                      g +=
                        '<g transform="translate(' +
                        e +
                        ',' +
                        n +
                        ')">' +
                        t.dom +
                        '</g>';
                    }),
                    (f.painter.getSvgRoot().innerHTML = g),
                    i.connectedBackgroundColor &&
                      f.painter.setBackgroundColor(i.connectedBackgroundColor),
                    f.refreshImmediately(),
                    f.painter.toDataURL())
                  : (i.connectedBackgroundColor &&
                      f.add(
                        new Bs({
                          shape: {x: 0, y: 0, width: t, height: n},
                          style: {fill: i.connectedBackgroundColor},
                        })
                      ),
                    z(p, function (t) {
                      t = new Cs({
                        style: {
                          x: t.left * e - l,
                          y: t.top * e - u,
                          image: t.dom,
                        },
                      });
                      f.add(t);
                    }),
                    f.refreshImmediately(),
                    d.toDataURL('image/' + ((i && i.type) || 'png'))))
              : this.getDataURL(i)
          );
        this.id;
      }),
      (c.prototype.convertToPixel = function (t, e) {
        return Q0(this, 'convertToPixel', t, e);
      }),
      (c.prototype.convertFromPixel = function (t, e) {
        return Q0(this, 'convertFromPixel', t, e);
      }),
      (c.prototype.containPixel = function (t, i) {
        var r;
        if (!this._disposed)
          return (
            z(
              Eo(this._model, t),
              function (t, n) {
                0 <= n.indexOf('Models') &&
                  z(
                    t,
                    function (t) {
                      var e = t.coordinateSystem;
                      e && e.containPoint
                        ? (r = r || !!e.containPoint(i))
                        : 'seriesModels' === n &&
                          (e = this._chartsMap[t.__viewId]) &&
                          e.containPoint &&
                          (r = r || e.containPoint(i, t));
                    },
                    this
                  );
              },
              this
            ),
            !!r
          );
        this.id;
      }),
      (c.prototype.getVisual = function (t, e) {
        var t = Eo(this._model, t, {defaultMainType: 'series'}),
          n = t.seriesModel.getData(),
          t = t.hasOwnProperty('dataIndexInside')
            ? t.dataIndexInside
            : t.hasOwnProperty('dataIndex')
            ? n.indexOfRawIndex(t.dataIndex)
            : null;
        if (null != t) {
          var i = n,
            r = t,
            o = e;
          switch (o) {
            case 'color':
              return i.getItemVisual(r, 'style')[i.getVisual('drawType')];
            case 'opacity':
              return i.getItemVisual(r, 'style').opacity;
            case 'symbol':
            case 'symbolSize':
            case 'liftZ':
              return i.getItemVisual(r, o);
          }
        } else {
          var a = n,
            s = e;
          switch (s) {
            case 'color':
              return a.getVisual('style')[a.getVisual('drawType')];
            case 'opacity':
              return a.getVisual('style').opacity;
            case 'symbol':
            case 'symbolSize':
            case 'liftZ':
              return a.getVisual(s);
          }
        }
      }),
      (c.prototype.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId];
      }),
      (c.prototype.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId];
      }),
      (c.prototype._initEvents = function () {
        var t,
          n,
          i,
          s = this;
        z(_m, function (a) {
          function t(t) {
            var n,
              e,
              i,
              r = s.getModel(),
              o = t.target;
            'globalout' === a
              ? (n = {})
              : o &&
                Zy(
                  o,
                  function (t) {
                    var e,
                      t = k(t);
                    return t && null != t.dataIndex
                      ? ((e = t.dataModel || r.getSeriesByIndex(t.seriesIndex)),
                        (n =
                          (e && e.getDataParams(t.dataIndex, t.dataType, o)) ||
                          {}),
                        1)
                      : t.eventData && ((n = L({}, t.eventData)), 1);
                  },
                  !0
                ),
              n &&
                ((e = n.componentType),
                (i = n.componentIndex),
                ('markLine' !== e && 'markPoint' !== e && 'markArea' !== e) ||
                  ((e = 'series'), (i = n.seriesIndex)),
                (i =
                  (e = e && null != i && r.getComponent(e, i)) &&
                  s['series' === e.mainType ? '_chartsMap' : '_componentsMap'][
                    e.__viewId
                  ]),
                (n.event = t),
                (n.type = a),
                (s._$eventProcessor.eventInfo = {
                  targetEl: o,
                  packedEvent: n,
                  model: e,
                  view: i,
                }),
                s.trigger(a, n));
          }
          (t.zrEventfulCallAtLast = !0), s._zr.on(a, t, s);
        }),
          z(wm, function (t, e) {
            s._messageCenter.on(
              e,
              function (t) {
                this.trigger(e, t);
              },
              s
            );
          }),
          z(['selectchanged'], function (e) {
            s._messageCenter.on(
              e,
              function (t) {
                this.trigger(e, t);
              },
              s
            );
          }),
          (t = this._messageCenter),
          (i = (n = this)._api),
          t.on('selectchanged', function (t) {
            var e = i.getModel();
            t.isFromClick
              ? (Uy('map', 'selectchanged', n, e, t),
                Uy('pie', 'selectchanged', n, e, t))
              : 'select' === t.fromAction
              ? (Uy('map', 'selected', n, e, t), Uy('pie', 'selected', n, e, t))
              : 'unselect' === t.fromAction &&
                (Uy('map', 'unselected', n, e, t),
                Uy('pie', 'unselected', n, e, t));
          });
      }),
      (c.prototype.isDisposed = function () {
        return this._disposed;
      }),
      (c.prototype.clear = function () {
        this._disposed ? this.id : this.setOption({series: []}, !0);
      }),
      (c.prototype.dispose = function () {
        var t, e, n;
        this._disposed
          ? this.id
          : ((this._disposed = !0),
            this.getDom() && Wo(this.getDom(), Pm, ''),
            (e = (t = this)._api),
            (n = t._model),
            z(t._componentsViews, function (t) {
              t.dispose(n, e);
            }),
            z(t._chartsViews, function (t) {
              t.dispose(n, e);
            }),
            t._zr.dispose(),
            (t._dom =
              t._model =
              t._chartsMap =
              t._componentsMap =
              t._chartsViews =
              t._componentsViews =
              t._scheduler =
              t._api =
              t._zr =
              t._throttledZrFlush =
              t._theme =
              t._coordSysMgr =
              t._messageCenter =
                null),
            delete Im[t.id]);
      }),
      (c.prototype.resize = function (t) {
        if (!this[E0])
          if (this._disposed) this.id;
          else {
            this._zr.resize(t);
            var e = this._model;
            if ((this._loadingFX && this._loadingFX.resize(), e)) {
              var e = e.resetOption('media'),
                n = t && t.silent;
              this[N0] &&
                (null == n && (n = this[N0].silent),
                (e = !0),
                (this[N0] = null)),
                (this[E0] = !0);
              try {
                e && q0(this),
                  $0.update.call(this, {
                    type: 'resize',
                    animation: L({duration: 0}, t && t.animation),
                  });
              } catch (t) {
                throw ((this[E0] = !1), t);
              }
              (this[E0] = !1), em.call(this, n), nm.call(this, n);
            }
          }
      }),
      (c.prototype.showLoading = function (t, e) {
        this._disposed
          ? this.id
          : (O(t) && ((e = t), (t = '')),
            (t = t || 'default'),
            this.hideLoading(),
            Cm[t] &&
              ((t = Cm[t](this._api, e)),
              (e = this._zr),
              (this._loadingFX = t),
              e.add(t)));
      }),
      (c.prototype.hideLoading = function () {
        this._disposed
          ? this.id
          : (this._loadingFX && this._zr.remove(this._loadingFX),
            (this._loadingFX = null));
      }),
      (c.prototype.makeActionFromEvent = function (t) {
        var e = L({}, t);
        return (e.type = wm[t.type]), e;
      }),
      (c.prototype.dispatchAction = function (t, e) {
        var n;
        this._disposed
          ? this.id
          : (O(e) || (e = {silent: !!e}),
            xm[t.type] &&
              this._model &&
              (this[E0]
                ? this._pendingActions.push(t)
                : ((n = e.silent),
                  tm.call(this, t, n),
                  (t = e.flush)
                    ? this._zr.flush()
                    : !1 !== t && b.browser.weChat && this._throttledZrFlush(),
                  em.call(this, n),
                  nm.call(this, n))));
      }),
      (c.prototype.updateLabelLayout = function () {
        B0.trigger('series:layoutlabels', this._model, this._api, {
          updatedSeries: [],
        });
      }),
      (c.prototype.appendData = function (t) {
        var e;
        this._disposed
          ? this.id
          : ((e = t.seriesIndex),
            this.getModel().getSeriesByIndex(e).appendData(t),
            (this._scheduler.unfinished = !0),
            this.getZr().wakeUp());
      }),
      (c.internalField =
        ((q0 = function (t) {
          var e = t._scheduler;
          e.restorePipelines(t._model),
            e.prepareStageTasks(),
            j0(t, !0),
            j0(t, !1),
            e.plan();
        }),
        (j0 = function (t, r) {
          for (
            var o = t._model,
              a = t._scheduler,
              s = r ? t._componentsViews : t._chartsViews,
              l = r ? t._componentsMap : t._chartsMap,
              u = t._zr,
              h = t._api,
              e = 0;
            e < s.length;
            e++
          )
            s[e].__alive = !1;
          function n(t) {
            var e,
              n = t.__requireNewView,
              i = ((t.__requireNewView = !1), '_ec_' + t.id + '_' + t.type),
              n = !n && l[i];
            n ||
              ((e = Yo(t.type)),
              (n = new (
                r ? $g.getClass(e.main, e.sub) : ny.getClass(e.sub)
              )()).init(o, h),
              (l[i] = n),
              s.push(n),
              u.add(n.group)),
              (t.__viewId = n.__id = i),
              (n.__alive = !0),
              (n.__model = t),
              (n.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex,
              }),
              r || a.prepareView(n, t, o, h);
          }
          r
            ? o.eachComponent(function (t, e) {
                'series' !== t && n(e);
              })
            : o.eachSeries(n);
          for (e = 0; e < s.length; ) {
            var i = s[e];
            i.__alive
              ? e++
              : (r || i.renderTask.dispose(),
                u.remove(i.group),
                i.dispose(o, h),
                s.splice(e, 1),
                l[i.__id] === i && delete l[i.__id],
                (i.__id = i.group.__ecComponentInfo = null));
          }
        }),
        (K0 = function (c, e, p, n, t) {
          var i,
            d,
            r = c._model;
          function o(t) {
            t && t.__alive && t[e] && t[e](t.__model, r, c._api, p);
          }
          r.setUpdatePayload(p),
            n
              ? (((i = {})[n + 'Id'] = p[n + 'Id']),
                (i[n + 'Index'] = p[n + 'Index']),
                (i[n + 'Name'] = p[n + 'Name']),
                (i = {mainType: n, query: i}),
                t && (i.subType = t),
                null != (t = p.excludeSeriesId) &&
                  ((d = B()),
                  z(So(t), function (t) {
                    t = Ao(t, null);
                    null != t && d.set(t, !0);
                  })),
                r &&
                  r.eachComponent(
                    i,
                    function (t) {
                      var e,
                        n,
                        i = d && null != d.get(t.id);
                      if (!i)
                        if (Yl(p))
                          if (t instanceof Gg) {
                            if (
                              p.type === sl &&
                              !p.notBlur &&
                              !t.get(['emphasis', 'disabled'])
                            ) {
                              var i = t,
                                r = p,
                                o = c._api,
                                a = i.seriesIndex,
                                s = i.getData(r.dataType);
                              if (s) {
                                var r = (F((r = Ro(s, r))) ? r[0] : r) || 0,
                                  l = s.getItemGraphicEl(r);
                                if (!l)
                                  for (var u = s.count(), h = 0; !l && h < u; )
                                    l = s.getItemGraphicEl(h++);
                                l
                                  ? Rl(a, (r = k(l)).focus, r.blurScope, o)
                                  : ((r = i.get(['emphasis', 'focus'])),
                                    (i = i.get(['emphasis', 'blurScope'])),
                                    null != r && Rl(a, r, i, o));
                              }
                            }
                          } else {
                            (a = zl(
                              t.mainType,
                              t.componentIndex,
                              p.name,
                              c._api
                            )),
                              (r = a.focusSelf),
                              (i = a.dispatchers);
                            p.type === sl &&
                              r &&
                              !p.notBlur &&
                              Bl(t.mainType, t.componentIndex, c._api),
                              i &&
                                z(i, function (t) {
                                  (p.type === sl ? Il : Dl)(t);
                                });
                          }
                        else
                          Zl(p) &&
                            t instanceof Gg &&
                            ((o = t),
                            (i = p),
                            c._api,
                            Zl(i) &&
                              ((e = i.dataType),
                              F((n = Ro(o.getData(e), i))) || (n = [n]),
                              o[
                                i.type === cl
                                  ? 'toggleSelect'
                                  : i.type === ul
                                  ? 'select'
                                  : 'unselect'
                              ](n, e)),
                            El(t),
                            hm(c));
                    },
                    c
                  ),
                r &&
                  r.eachComponent(
                    i,
                    function (t) {
                      (d && null != d.get(t.id)) ||
                        o(
                          c['series' === n ? '_chartsMap' : '_componentsMap'][
                            t.__viewId
                          ]
                        );
                    },
                    c
                  ))
              : z([].concat(c._componentsViews).concat(c._chartsViews), o);
        }),
        ($0 = {
          prepareAndUpdate: function (t) {
            q0(this),
              $0.update.call(this, t, {optionChanged: null != t.newOption});
          },
          update: function (t, e) {
            var n = this._model,
              i = this._api,
              r = this._zr,
              o = this._coordSysMgr,
              a = this._scheduler;
            n &&
              (n.setUpdatePayload(t),
              a.restoreData(n, t),
              a.performSeriesTasks(n),
              o.create(n, i),
              a.performDataProcessorTasks(n, t),
              J0(this, n),
              o.update(n, i),
              fm(n),
              a.performVisualTasks(n, t),
              om(this, n, i, t, e),
              (o = n.get('backgroundColor') || 'transparent'),
              (a = n.get('darkMode')),
              r.setBackgroundColor(o),
              null != a && 'auto' !== a && r.setDarkMode(a),
              B0.trigger('afterupdate', n, i));
          },
          updateTransform: function (n) {
            var i,
              r,
              o = this,
              a = this._model,
              s = this._api;
            a &&
              (a.setUpdatePayload(n),
              (i = []),
              a.eachComponent(function (t, e) {
                'series' !== t &&
                  (t = o.getViewOfComponentModel(e)) &&
                  t.__alive &&
                  (!t.updateTransform ||
                    ((e = t.updateTransform(e, a, s, n)) && e.update)) &&
                  i.push(t);
              }),
              (r = B()),
              a.eachSeries(function (t) {
                var e = o._chartsMap[t.__viewId];
                (!e.updateTransform ||
                  ((e = e.updateTransform(t, a, s, n)) && e.update)) &&
                  r.set(t.uid, 1);
              }),
              fm(a),
              this._scheduler.performVisualTasks(a, n, {
                setDirty: !0,
                dirtyMap: r,
              }),
              sm(this, a, s, n, {}, r),
              B0.trigger('afterupdate', a, s));
          },
          updateView: function (t) {
            var e = this._model;
            e &&
              (e.setUpdatePayload(t),
              ny.markUpdateMethod(t, 'updateView'),
              fm(e),
              this._scheduler.performVisualTasks(e, t, {setDirty: !0}),
              om(this, e, this._api, t, {}),
              B0.trigger('afterupdate', e, this._api));
          },
          updateVisual: function (n) {
            var i = this,
              r = this._model;
            r &&
              (r.setUpdatePayload(n),
              r.eachSeries(function (t) {
                t.getData().clearAllVisual();
              }),
              ny.markUpdateMethod(n, 'updateVisual'),
              fm(r),
              this._scheduler.performVisualTasks(r, n, {
                visualType: 'visual',
                setDirty: !0,
              }),
              r.eachComponent(function (t, e) {
                'series' !== t &&
                  (t = i.getViewOfComponentModel(e)) &&
                  t.__alive &&
                  t.updateVisual(e, r, i._api, n);
              }),
              r.eachSeries(function (t) {
                i._chartsMap[t.__viewId].updateVisual(t, r, i._api, n);
              }),
              B0.trigger('afterupdate', r, this._api));
          },
          updateLayout: function (t) {
            $0.update.call(this, t);
          },
        }),
        (Q0 = function (t, e, n, i) {
          if (t._disposed) t.id;
          else
            for (
              var r = t._model,
                o = t._coordSysMgr.getCoordinateSystems(),
                a = Eo(r, n),
                s = 0;
              s < o.length;
              s++
            ) {
              var l = o[s];
              if (l[e] && null != (l = l[e](r, a, i))) return l;
            }
        }),
        (J0 = function (t, e) {
          var n = t._chartsMap,
            i = t._scheduler;
          e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId]);
          });
        }),
        (tm = function (i, t) {
          var r,
            o,
            a = this,
            e = this.getModel(),
            n = i.type,
            s = i.escapeConnect,
            l = xm[n],
            u = l.actionInfo,
            h = (u.update || 'update').split(':'),
            c = h.pop(),
            p = null != h[0] && Yo(h[0]),
            h = ((this[E0] = !0), [i]),
            d = !1,
            f =
              (i.batch &&
                ((d = !0),
                (h = N(i.batch, function (t) {
                  return ((t = E(L({}, t), i)).batch = null), t;
                }))),
              []),
            g = Zl(i),
            y = Yl(i);
          if (
            (y && Ol(this._api),
            z(h, function (t) {
              var e, n;
              ((r = (r = l.action(t, a._model, a._api)) || L({}, t)).type =
                u.event || r.type),
                f.push(r),
                y
                  ? ((e = (n = No(i)).queryOptionMap),
                    (n = n.mainTypeSpecified ? e.keys()[0] : 'series'),
                    K0(a, c, t, n),
                    hm(a))
                  : g
                  ? (K0(a, c, t, 'series'), hm(a))
                  : p && K0(a, c, t, p.main, p.sub);
            }),
            'none' !== c && !y && !g && !p)
          )
            try {
              this[N0]
                ? (q0(this), $0.update.call(this, i), (this[N0] = null))
                : $0[c].call(this, i);
            } catch (t) {
              throw ((this[E0] = !1), t);
            }
          (r = d ? {type: u.event || n, escapeConnect: s, batch: f} : f[0]),
            (this[E0] = !1),
            t ||
              ((h = this._messageCenter).trigger(r.type, r),
              g &&
                ((d = {
                  type: 'selectchanged',
                  escapeConnect: s,
                  selected:
                    ((o = []),
                    e.eachSeries(function (n) {
                      z(n.getAllData(), function (t) {
                        t.data;
                        var t = t.type,
                          e = n.getSelectedDataIndices();
                        0 < e.length &&
                          ((e = {dataIndex: e, seriesIndex: n.seriesIndex}),
                          null != t && (e.dataType = t),
                          o.push(e));
                      });
                    }),
                    o),
                  isFromClick: i.isFromClick || !1,
                  fromAction: i.type,
                  fromActionPayload: i,
                }),
                h.trigger(d.type, d)));
        }),
        (em = function (t) {
          for (var e = this._pendingActions; e.length; ) {
            var n = e.shift();
            tm.call(this, n, t);
          }
        }),
        (nm = function (t) {
          t || this.trigger('updated');
        }),
        (im = function (e, n) {
          e.on('rendered', function (t) {
            n.trigger('rendered', t),
              !e.animation.isFinished() ||
                n[N0] ||
                n._scheduler.unfinished ||
                n._pendingActions.length ||
                n.trigger('finished');
          });
        }),
        (rm = function (t, a) {
          t.on('mouseover', function (t) {
            var e,
              n,
              i,
              r,
              o = Zy(t.target, Ul);
            o &&
              ((o = o),
              (e = t),
              (t = a._api),
              (n = k(o)),
              (i = (r = zl(
                n.componentMainType,
                n.componentIndex,
                n.componentHighDownName,
                t
              )).dispatchers),
              (r = r.focusSelf),
              i
                ? (r && Bl(n.componentMainType, n.componentIndex, t),
                  z(i, function (t) {
                    return Tl(t, e);
                  }))
                : (Rl(n.seriesIndex, n.focus, n.blurScope, t),
                  'self' === n.focus &&
                    Bl(n.componentMainType, n.componentIndex, t),
                  Tl(o, e)),
              hm(a));
          })
            .on('mouseout', function (t) {
              var e,
                n,
                i = Zy(t.target, Ul);
              i &&
                ((i = i),
                (e = t),
                Ol((t = a._api)),
                (n = zl(
                  (n = k(i)).componentMainType,
                  n.componentIndex,
                  n.componentHighDownName,
                  t
                ).dispatchers)
                  ? z(n, function (t) {
                      return Cl(t, e);
                    })
                  : Cl(i, e),
                hm(a));
            })
            .on('click', function (t) {
              var e,
                t = Zy(
                  t.target,
                  function (t) {
                    return null != k(t).dataIndex;
                  },
                  !0
                );
              t &&
                ((e = t.selected ? 'unselect' : 'select'),
                (t = k(t)),
                a._api.dispatchAction({
                  type: e,
                  dataType: t.dataType,
                  dataIndexInside: t.dataIndex,
                  seriesIndex: t.seriesIndex,
                  isFromClick: !0,
                }));
            });
        }),
        (om = function (t, e, n, i, r) {
          var o, a, s, l, u, h, c;
          (u = []),
            (c = !(h = [])),
            (o = e).eachComponent(function (t, e) {
              var n = e.get('zlevel') || 0,
                i = e.get('z') || 0,
                r = e.getZLevelKey();
              (c = c || !!r),
                ('series' === t ? h : u).push({
                  zlevel: n,
                  z: i,
                  idx: e.componentIndex,
                  type: t,
                  key: r,
                });
            }),
            c &&
              (vn((a = u.concat(h)), function (t, e) {
                return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel;
              }),
              z(a, function (t) {
                var e = o.getComponent(t.type, t.idx),
                  n = t.zlevel,
                  t = t.key;
                null != s && (n = Math.max(s, n)),
                  t
                    ? (n === s && t !== l && n++, (l = t))
                    : l && (n === s && n++, (l = '')),
                  (s = n),
                  e.setZLevel(n);
              })),
            am(t, e, n, i, r),
            z(t._chartsViews, function (t) {
              t.__alive = !1;
            }),
            sm(t, e, n, i, r),
            z(t._chartsViews, function (t) {
              t.__alive || t.remove(e, n);
            });
        }),
        (am = function (t, n, i, r, e, o) {
          z(o || t._componentsViews, function (t) {
            var e = t.__model;
            mm(0, t), t.render(e, n, i, r), ym(e, t), vm(e, t);
          });
        }),
        (sm = function (r, t, e, o, n, a) {
          var i,
            s,
            l,
            u,
            h = r._scheduler,
            c =
              ((n = L(n || {}, {updatedSeries: t.getSeries()})),
              B0.trigger('series:beforeupdate', t, e, n),
              !1);
          t.eachSeries(function (t) {
            var e,
              n = r._chartsMap[t.__viewId],
              i = ((n.__alive = !0), n.renderTask);
            h.updatePayload(i, o),
              mm(0, n),
              a && a.get(t.uid) && i.dirty(),
              i.perform(h.getPerformArgs(i)) && (c = !0),
              (n.group.silent = !!t.get('silent')),
              (i = n),
              (e = t.get('blendMode') || null),
              i.eachRendered(function (t) {
                t.isGroup || (t.style.blend = e);
              }),
              El(t);
          }),
            (h.unfinished = c || h.unfinished),
            B0.trigger('series:layoutlabels', t, e, n),
            B0.trigger('series:transition', t, e, n),
            t.eachSeries(function (t) {
              var e = r._chartsMap[t.__viewId];
              ym(t, e), vm(t, e);
            }),
            (s = t),
            (l = (i = r)._zr.storage),
            (u = 0),
            l.traverse(function (t) {
              t.isGroup || u++;
            }),
            u > s.get('hoverLayerThreshold') &&
              !b.node &&
              !b.worker &&
              s.eachSeries(function (t) {
                t.preventUsingHoverLayer ||
                  ((t = i._chartsMap[t.__viewId]).__alive &&
                    t.eachRendered(function (t) {
                      t.states.emphasis && (t.states.emphasis.hoverLayer = !0);
                    }));
              }),
            B0.trigger('series:afterupdate', t, e, n);
        }),
        (hm = function (t) {
          (t[F0] = !0), t.getZr().wakeUp();
        }),
        (cm = function (t) {
          t[F0] &&
            (t.getZr().storage.traverse(function (t) {
              Rh(t) || gm(t);
            }),
            (t[F0] = !1));
        }),
        (lm = function (n) {
          return (
            u(t, (e = Id)),
            (t.prototype.getCoordinateSystems = function () {
              return n._coordSysMgr.getCoordinateSystems();
            }),
            (t.prototype.getComponentByElement = function (t) {
              for (; t; ) {
                var e = t.__ecComponentInfo;
                if (null != e)
                  return n._model.getComponent(e.mainType, e.index);
                t = t.parent;
              }
            }),
            (t.prototype.enterEmphasis = function (t, e) {
              Il(t, e), hm(n);
            }),
            (t.prototype.leaveEmphasis = function (t, e) {
              Dl(t, e), hm(n);
            }),
            (t.prototype.enterBlur = function (t) {
              wl(t, yl), hm(n);
            }),
            (t.prototype.leaveBlur = function (t) {
              kl(t), hm(n);
            }),
            (t.prototype.enterSelect = function (t) {
              Al(t), hm(n);
            }),
            (t.prototype.leaveSelect = function (t) {
              Pl(t), hm(n);
            }),
            (t.prototype.getModel = function () {
              return n.getModel();
            }),
            (t.prototype.getViewOfComponentModel = function (t) {
              return n.getViewOfComponentModel(t);
            }),
            (t.prototype.getViewOfSeriesModel = function (t) {
              return n.getViewOfSeriesModel(t);
            }),
            new t(n)
          );
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var e;
        }),
        void (um = function (i) {
          function r(t, e) {
            for (var n = 0; n < t.length; n++) t[n][H0] = e;
          }
          z(wm, function (t, e) {
            i._messageCenter.on(e, function (t) {
              var e, n;
              !Dm[i.group] ||
                0 === i[H0] ||
                (t && t.escapeConnect) ||
                ((e = i.makeActionFromEvent(t)),
                (n = []),
                z(Im, function (t) {
                  t !== i && t.group === i.group && n.push(t);
                }),
                r(n, 0),
                z(n, function (t) {
                  1 !== t[H0] && t.dispatchAction(e);
                }),
                r(n, 2));
            });
          });
        }))),
      c);
  function c(t, e, n) {
    var i = pm.call(this, new Fy()) || this,
      t =
        ((i._chartsViews = []),
        (i._chartsMap = {}),
        (i._componentsViews = []),
        (i._componentsMap = {}),
        (i._pendingActions = []),
        (n = n || {}),
        V(e) && (e = Tm[e]),
        (i._dom = t),
        n.ssr &&
          Qr(function (t) {
            var e,
              t = k(t),
              n = t.dataIndex;
            if (null != n)
              return (
                (e = B()).set('series_index', t.seriesIndex),
                e.set('data_index', n),
                t.ssrType && e.set('ssr_type', t.ssrType),
                e
              );
          }),
        (i._zr = Kr(t, {
          renderer: n.renderer || 'canvas',
          devicePixelRatio: n.devicePixelRatio,
          width: n.width,
          height: n.height,
          ssr: n.ssr,
          useDirtyRect: R(n.useDirtyRect, !1),
          useCoarsePointer: R(n.useCoarsePointer, 'auto'),
          pointerSize: n.pointerSize,
        }))),
      n =
        ((i._ssr = n.ssr),
        (i._throttledZrFlush = py(S(t.flush, t), 17)),
        (e = y(e)) && Jd(e, !0),
        (i._theme = e),
        (i._locale = V((e = n.locale || jc))
          ? ((n = Xc[e.toUpperCase()] || {}),
            e === Uc || e === Zc ? y(n) : d(y(n), y(Xc[Yc]), !1))
          : d(y(e), y(Xc[Yc]), !1)),
        (i._coordSysMgr = new Ad()),
        (i._api = lm(i)));
    function r(t, e) {
      return t.__prio - e.__prio;
    }
    return (
      vn(Mm, r),
      vn(bm, r),
      (i._scheduler = new by(i, n, bm, Mm)),
      (i._messageCenter = new Y0()),
      i._initEvents(),
      (i.resize = S(i.resize, i)),
      t.animation.on('frame', i._onframe, i),
      im(t, i),
      rm(t, i),
      Dt(i),
      i
    );
  }
  function fm(t) {
    t.clearColorPalette(),
      t.eachSeries(function (t) {
        t.clearColorPalette();
      });
  }
  function gm(t) {
    for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
      var r = n[i];
      'emphasis' !== r && 'blur' !== r && 'select' !== r && e.push(r);
    }
    t.selected && t.states.select && e.push('select'),
      t.hoverState === rl && t.states.emphasis
        ? e.push('emphasis')
        : t.hoverState === il && t.states.blur && e.push('blur'),
      t.useStates(e);
  }
  function ym(t, e) {
    var n, i;
    t.preventAutoZ ||
      ((n = t.get('z') || 0),
      (i = t.get('zlevel') || 0),
      e.eachRendered(function (t) {
        return (
          (function t(e, n, i, r) {
            var o = e.getTextContent();
            var a = e.getTextGuideLine();
            var s = e.isGroup;
            if (s)
              for (var l = e.childrenRef(), u = 0; u < l.length; u++)
                r = Math.max(t(l[u], n, i, r), r);
            else (e.z = n), (e.zlevel = i), (r = Math.max(e.z2, r));
            o && ((o.z = n), (o.zlevel = i), isFinite(r)) && (o.z2 = r + 2);
            a &&
              ((s = e.textGuideLineConfig),
              (a.z = n),
              (a.zlevel = i),
              isFinite(r)) &&
              (a.z2 = r + (s && s.showAbove ? 1 : -1));
            return r;
          })(t, n, i, -1 / 0),
          !0
        );
      }));
  }
  function mm(t, e) {
    e.eachRendered(function (t) {
      var e, n;
      Rh(t) ||
        ((e = t.getTextContent()),
        (n = t.getTextGuideLine()),
        t.stateTransition && (t.stateTransition = null),
        e && e.stateTransition && (e.stateTransition = null),
        n && n.stateTransition && (n.stateTransition = null),
        t.hasState()
          ? ((t.prevStates = t.currentStates), t.clearStates())
          : t.prevStates && (t.prevStates = null));
    });
  }
  function vm(t, e) {
    var n = t.getModel('stateAnimation'),
      r = t.isAnimationEnabled(),
      t = n.get('duration'),
      o =
        0 < t
          ? {duration: t, delay: n.get('delay'), easing: n.get('easing')}
          : null;
    e.eachRendered(function (t) {
      var e, n, i;
      t.states &&
        t.states.emphasis &&
        (Rh(t) ||
          (t instanceof vs &&
            (((i = tl((n = t))).normalFill = n.style.fill),
            (i.normalStroke = n.style.stroke),
            (n = n.states.select || {}),
            (i.selectFill = (n.style && n.style.fill) || null),
            (i.selectStroke = (n.style && n.style.stroke) || null)),
          t.__dirty && (i = t.prevStates) && t.useStates(i),
          r &&
            ((t.stateTransition = o),
            (n = t.getTextContent()),
            (e = t.getTextGuideLine()),
            n && (n.stateTransition = o),
            e) &&
            (e.stateTransition = o),
          t.__dirty && gm(t)));
    });
  }
  var Jy = dm.prototype,
    _m =
      ((Jy.on = W0('on')),
      (Jy.off = W0('off')),
      (Jy.one = function (i, r, t) {
        var o = this;
        this.on.call(
          this,
          i,
          function t() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            r && r.apply && r.apply(this, e), o.off(i, t);
          },
          t
        );
      }),
      [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'mousemove',
        'mousedown',
        'mouseup',
        'globalout',
        'contextmenu',
      ]);
  var xm = {},
    wm = {},
    bm = [],
    Sm = [],
    Mm = [],
    Tm = {},
    Cm = {},
    Im = {},
    Dm = {},
    km = +new Date(),
    Am = +new Date(),
    Pm = '_echarts_instance_';
  function Lm(t) {
    Dm[t] = !1;
  }
  Ky = Lm;
  function Om(t) {
    return Im[((e = Pm), (t = t).getAttribute ? t.getAttribute(e) : t[e])];
    var e;
  }
  function Rm(t, e) {
    Tm[t] = e;
  }
  function Bm(t) {
    I(Sm, t) < 0 && Sm.push(t);
  }
  function zm(t, e) {
    Zm(bm, t, e, 2e3);
  }
  function Em(t) {
    Fm('afterinit', t);
  }
  function Nm(t) {
    Fm('afterupdate', t);
  }
  function Fm(t, e) {
    B0.on(t, e);
  }
  function Vm(t, e, n) {
    D(e) && ((n = e), (e = ''));
    var i = O(t) ? t.type : [t, (t = {event: e})][0];
    (t.event = (t.event || i).toLowerCase()),
      (e = t.event),
      wm[e] ||
        (Tt(V0.test(i) && V0.test(e)),
        xm[i] || (xm[i] = {action: n, actionInfo: t}),
        (wm[e] = i));
  }
  function Hm(t, e) {
    Ad.register(t, e);
  }
  function Wm(t, e) {
    Zm(Mm, t, e, 1e3, 'layout');
  }
  function Gm(t, e) {
    Zm(Mm, t, e, 3e3, 'visual');
  }
  var Um = [];
  function Zm(t, e, n, i, r) {
    (D(e) || O(e)) && ((n = e), (e = i)),
      0 <= I(Um, n) ||
        (Um.push(n),
        ((i = by.wrapStageHandler(n, r)).__prio = e),
        (i.__raw = n),
        t.push(i));
  }
  function Ym(t, e) {
    Cm[t] = e;
  }
  function Xm(t, e, n) {
    var i = z0.registerMap;
    i && i(t, e, n);
  }
  function qm(t) {
    var e = (t = y(t)).type,
      n = (e || f(''), e.split(':')),
      i = (2 !== n.length && f(''), !1);
    'echarts' === n[0] && ((e = n[1]), (i = !0)),
      (t.__isBuiltIn = i),
      ag.set(e, t);
  }
  Gm(2e3, ea),
    Gm(4500, Jh),
    Gm(4500, np),
    Gm(2e3, Rc),
    Gm(4500, Ac),
    Gm(7e3, function (e, i) {
      e.eachRawSeries(function (t) {
        var n;
        !e.isSeriesFiltered(t) &&
          ((n = t.getData()).hasItemVisual() &&
            n.each(function (t) {
              var e = n.getItemVisual(t, 'decal');
              e && (n.ensureUniqueItemVisual(t, 'style').decal = O0(e, i));
            }),
          (t = n.getVisual('decal'))) &&
          (n.getVisual('style').decal = O0(t, i));
      });
    }),
    Bm(Jd),
    zm(900, function (t) {
      var i = B();
      t.eachSeries(function (t) {
        var e,
          n = t.get('stack');
        n &&
          ((n = i.get(n) || i.set(n, [])),
          (t = {
            stackResultDimension: (e = t.getData()).getCalculationInfo(
              'stackResultDimension'
            ),
            stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
            stackedDimension: e.getCalculationInfo('stackedDimension'),
            stackedByDimension: e.getCalculationInfo('stackedByDimension'),
            isStackedByIndex: e.getCalculationInfo('isStackedByIndex'),
            data: e,
            seriesModel: t,
          }).stackedDimension) &&
          (t.isStackedByIndex || t.stackedByDimension) &&
          (n.length &&
            e.setCalculationInfo(
              'stackedOnSeries',
              n[n.length - 1].seriesModel
            ),
          n.push(t));
      }),
        i.each(tf);
    }),
    Ym('default', function (i, r) {
      E((r = r || {}), {
        text: 'loading',
        textColor: '#000',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        showSpinner: !0,
        color: '#5470c6',
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0,
      });
      var o,
        t = new Gr(),
        a = new Bs({style: {fill: r.maskColor}, zlevel: r.zlevel, z: 1e4}),
        s =
          (t.add(a),
          new Vs({
            style: {
              text: r.text,
              fill: r.textColor,
              fontSize: r.fontSize,
              fontWeight: r.fontWeight,
              fontStyle: r.fontStyle,
              fontFamily: r.fontFamily,
            },
            zlevel: r.zlevel,
            z: 10001,
          })),
        l = new Bs({
          style: {fill: 'none'},
          textContent: s,
          textConfig: {position: 'right', distance: 10},
          zlevel: r.zlevel,
          z: 10001,
        });
      return (
        t.add(l),
        r.showSpinner &&
          ((o = new uh({
            shape: {
              startAngle: -wy / 2,
              endAngle: -wy / 2 + 0.1,
              r: r.spinnerRadius,
            },
            style: {stroke: r.color, lineCap: 'round', lineWidth: r.lineWidth},
            zlevel: r.zlevel,
            z: 10001,
          }))
            .animateShape(!0)
            .when(1e3, {endAngle: (3 * wy) / 2})
            .start('circularInOut'),
          o
            .animateShape(!0)
            .when(1e3, {startAngle: (3 * wy) / 2})
            .delay(300)
            .start('circularInOut'),
          t.add(o)),
        (t.resize = function () {
          var t = s.getBoundingRect().width,
            e = r.showSpinner ? r.spinnerRadius : 0,
            t =
              (i.getWidth() - 2 * e - (r.showSpinner && t ? 10 : 0) - t) / 2 -
              (r.showSpinner && t ? 0 : 5 + t / 2) +
              (r.showSpinner ? 0 : t / 2) +
              (t ? 0 : e),
            n = i.getHeight() / 2;
          r.showSpinner && o.setShape({cx: t, cy: n}),
            l.setShape({x: t - e, y: n - e, width: 2 * e, height: 2 * e}),
            a.setShape({
              x: 0,
              y: 0,
              width: i.getWidth(),
              height: i.getHeight(),
            });
        }),
        t.resize(),
        t
      );
    }),
    Vm({type: sl, event: sl, update: sl}, Ft),
    Vm({type: ll, event: ll, update: ll}, Ft),
    Vm({type: ul, event: ul, update: ul}, Ft),
    Vm({type: hl, event: hl, update: hl}, Ft),
    Vm({type: cl, event: cl, update: cl}, Ft),
    Rm('light', zc),
    Rm('dark', Lc);
  function jm(t) {
    return null == t ? 0 : t.length || 1;
  }
  function Km(t) {
    return t;
  }
  (Qm.prototype.add = function (t) {
    return (this._add = t), this;
  }),
    (Qm.prototype.update = function (t) {
      return (this._update = t), this;
    }),
    (Qm.prototype.updateManyToOne = function (t) {
      return (this._updateManyToOne = t), this;
    }),
    (Qm.prototype.updateOneToMany = function (t) {
      return (this._updateOneToMany = t), this;
    }),
    (Qm.prototype.updateManyToMany = function (t) {
      return (this._updateManyToMany = t), this;
    }),
    (Qm.prototype.remove = function (t) {
      return (this._remove = t), this;
    }),
    (Qm.prototype.execute = function () {
      this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']();
    }),
    (Qm.prototype._executeOneToOne = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = new Array(t.length),
        r = new Array(e.length);
      this._initIndexMap(t, null, i, '_oldKeyGetter'),
        this._initIndexMap(e, n, r, '_newKeyGetter');
      for (var o = 0; o < t.length; o++) {
        var a,
          s = i[o],
          l = n[s],
          u = jm(l);
        1 < u
          ? ((a = l.shift()),
            1 === l.length && (n[s] = l[0]),
            this._update && this._update(a, o))
          : 1 === u
          ? ((n[s] = null), this._update && this._update(l, o))
          : this._remove && this._remove(o);
      }
      this._performRestAdd(r, n);
    }),
    (Qm.prototype._executeMultiple = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = {},
        r = [],
        o = [];
      this._initIndexMap(t, n, r, '_oldKeyGetter'),
        this._initIndexMap(e, i, o, '_newKeyGetter');
      for (var a = 0; a < r.length; a++) {
        var s = r[a],
          l = n[s],
          u = i[s],
          h = jm(l),
          c = jm(u);
        if (1 < h && 1 === c)
          this._updateManyToOne && this._updateManyToOne(u, l), (i[s] = null);
        else if (1 === h && 1 < c)
          this._updateOneToMany && this._updateOneToMany(u, l), (i[s] = null);
        else if (1 === h && 1 === c)
          this._update && this._update(u, l), (i[s] = null);
        else if (1 < h && 1 < c)
          this._updateManyToMany && this._updateManyToMany(u, l), (i[s] = null);
        else if (1 < h)
          for (var p = 0; p < h; p++) this._remove && this._remove(l[p]);
        else this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }),
    (Qm.prototype._performRestAdd = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = e[i],
          o = jm(r);
        if (1 < o) for (var a = 0; a < o; a++) this._add && this._add(r[a]);
        else 1 === o && this._add && this._add(r);
        e[i] = null;
      }
    }),
    (Qm.prototype._initIndexMap = function (t, e, n, i) {
      for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var a,
          s,
          l = '_ec_' + this[i](t[o], o);
        r || (n[o] = l),
          e &&
            (0 === (s = jm((a = e[l])))
              ? ((e[l] = o), r && n.push(l))
              : 1 === s
              ? (e[l] = [a, o])
              : a.push(o));
      }
    });
  var $m = Qm;
  function Qm(t, e, n, i, r, o) {
    (this._old = t),
      (this._new = e),
      (this._oldKeyGetter = n || Km),
      (this._newKeyGetter = i || Km),
      (this.context = r),
      (this._diffModeMultiple = 'multiple' === o);
  }
  (tv.prototype.get = function () {
    return {
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode,
    };
  }),
    (tv.prototype._getFullDimensionNames = function () {
      return (
        this._cachedDimNames ||
          (this._cachedDimNames = this._schema
            ? this._schema.makeOutputDimensionNames()
            : []),
        this._cachedDimNames
      );
    });
  var Jm = tv;
  function tv(t, e) {
    (this._encode = t), (this._schema = e);
  }
  function ev(o, t) {
    var e = {},
      a = (e.encode = {}),
      s = B(),
      l = [],
      u = [],
      h = {},
      i =
        (z(o.dimensions, function (t) {
          var e,
            n,
            i = o.getDimensionInfo(t),
            r = i.coordDim;
          r &&
            ((e = i.coordDimIndex),
            (nv(a, r)[e] = t),
            i.isExtraCoord ||
              (s.set(r, 1),
              'ordinal' !== (n = i.type) && 'time' !== n && (l[0] = t),
              (nv(h, r)[e] = o.getDimensionIndex(i.name))),
            i.defaultTooltip) &&
            u.push(t),
            $p.each(function (t, e) {
              var n = nv(a, e),
                e = i.otherDims[e];
              null != e && !1 !== e && (n[e] = i.name);
            });
        }),
        []),
      r = {},
      n =
        (s.each(function (t, e) {
          var n = a[e];
          (r[e] = n[0]), (i = i.concat(n));
        }),
        (e.dataDimsOnCoord = i),
        (e.dataDimIndicesOnCoord = N(i, function (t) {
          return o.getDimensionInfo(t).storeDimIndex;
        })),
        (e.encodeFirstDimNotExtra = r),
        a.label),
      n = (n && n.length && (l = n.slice()), a.tooltip);
    return (
      n && n.length ? (u = n.slice()) : u.length || (u = l.slice()),
      (a.defaultedLabel = l),
      (a.defaultedTooltip = u),
      (e.userOutput = new Jm(h, t)),
      e
    );
  }
  function nv(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }
  var iv = function (t) {
      (this.otherDims = {}), null != t && L(this, t);
    },
    rv = Bo(),
    ov = {float: 'f', int: 'i', ordinal: 'o', number: 'n', time: 't'},
    av =
      ((sv.prototype.isDimensionOmitted = function () {
        return this._dimOmitted;
      }),
      (sv.prototype._updateDimOmitted = function (t) {
        (this._dimOmitted = t) &&
          !this._dimNameMap &&
          (this._dimNameMap = hv(this.source));
      }),
      (sv.prototype.getSourceDimensionIndex = function (t) {
        return R(this._dimNameMap.get(t), -1);
      }),
      (sv.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine;
        if (e) return e[t];
      }),
      (sv.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = cf(this.source),
            n = !(30 < t),
            i = '',
            r = [],
            o = 0,
            a = 0;
          o < t;
          o++
        ) {
          var s,
            l = void 0,
            u = void 0,
            h = void 0,
            c = this.dimensions[a];
          c && c.storeDimIndex === o
            ? ((l = e ? c.name : null), (u = c.type), (h = c.ordinalMeta), a++)
            : (s = this.getSourceDimension(o)) &&
              ((l = e ? s.name : null), (u = s.type)),
            r.push({property: l, type: u, ordinalMeta: h}),
            !e ||
              null == l ||
              (c && c.isCalculationCoord) ||
              (i += n ? l.replace(/\`/g, '`1').replace(/\$/g, '`2') : l),
            (i = i + '$' + (ov[u] || 'f')),
            h && (i += h.uid),
            (i += '$');
        }
        var p = this.source;
        return {
          dimensions: r,
          hash: [p.seriesLayoutBy, p.startIndex, i].join('$$'),
        };
      }),
      (sv.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            r = this.dimensions[n];
          r && r.storeDimIndex === e
            ? (r.isCalculationCoord || (i = r.name), n++)
            : (r = this.getSourceDimension(e)) && (i = r.name),
            t.push(i);
        }
        return t;
      }),
      (sv.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0);
      }),
      sv);
  function sv(t) {
    (this.dimensions = t.dimensions),
      (this._dimOmitted = t.dimensionOmitted),
      (this.source = t.source),
      (this._fullDimCount = t.fullDimensionCount),
      this._updateDimOmitted(t.dimensionOmitted);
  }
  function lv(t) {
    return t instanceof av;
  }
  function uv(t) {
    for (var e = B(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        i = O(i) ? i.name : i;
      null != i && null == e.get(i) && e.set(i, n);
    }
    return e;
  }
  function hv(t) {
    var e = rv(t);
    return e.dimNameMap || (e.dimNameMap = uv(t.dimensionsDefine));
  }
  var cv,
    pv,
    dv,
    fv,
    gv,
    yv,
    mv,
    vv = O,
    _v = N,
    xv = 'undefined' == typeof Int32Array ? Array : Int32Array,
    wv = [
      'hasItemOption',
      '_nameList',
      '_idList',
      '_invertedIndicesMap',
      '_dimSummary',
      'userOutput',
      '_rawData',
      '_dimValueGetter',
      '_nameDimIdx',
      '_idDimIdx',
      '_nameRepeatCount',
    ],
    bv = ['_approximateExtent'],
    Sv =
      ((p.prototype.getDimension = function (t) {
        var e;
        return null == (e = this._recognizeDimIndex(t))
          ? t
          : ((e = t),
            this._dimOmitted
              ? null != (t = this._dimIdxToName.get(e))
                ? t
                : (t = this._schema.getSourceDimension(e))
                ? t.name
                : void 0
              : this.dimensions[e]);
      }),
      (p.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t);
        return null != e
          ? e
          : null == t
          ? -1
          : (e = this._getDimInfo(t))
          ? e.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(t)
          : -1;
      }),
      (p.prototype._recognizeDimIndex = function (t) {
        if (
          dt(t) ||
          (null != t &&
            !isNaN(t) &&
            !this._getDimInfo(t) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        )
          return +t;
      }),
      (p.prototype._getStoreDimIndex = function (t) {
        return this.getDimensionIndex(t);
      }),
      (p.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t));
      }),
      (p.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos;
        this._getDimInfo = t
          ? function (t) {
              return e.hasOwnProperty(t) ? e[t] : void 0;
            }
          : function (t) {
              return e[t];
            };
      }),
      (p.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice();
      }),
      (p.prototype.mapDimension = function (t, e) {
        var n = this._dimSummary;
        return null == e
          ? n.encodeFirstDimNotExtra[t]
          : (n = n.encode[t])
          ? n[e]
          : null;
      }),
      (p.prototype.mapDimensionsAll = function (t) {
        return (this._dimSummary.encode[t] || []).slice();
      }),
      (p.prototype.getStore = function () {
        return this._store;
      }),
      (p.prototype.initData = function (t, e, n) {
        var i,
          r,
          o = this;
        (i = t instanceof mg ? t : i) ||
          ((r = this.dimensions),
          (t = of(t) || st(t) ? new gf(t, r.length) : t),
          (i = new mg()),
          (r = _v(r, function (t) {
            return {type: o._dimInfos[t].type, property: t};
          })),
          i.initData(t, r, n)),
          (this._store = i),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, i.count()),
          (this._dimSummary = ev(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput);
      }),
      (p.prototype.appendData = function (t) {
        t = this._store.appendData(t);
        this._doInit(t[0], t[1]);
      }),
      (p.prototype.appendValues = function (t, e) {
        var t = this._store.appendValues(t, e.length),
          n = t.start,
          i = t.end,
          r = this._shouldMakeIdFromName();
        if ((this._updateOrdinalMeta(), e))
          for (var o = n; o < i; o++)
            (this._nameList[o] = e[o - n]), r && mv(this, o);
      }),
      (p.prototype._updateOrdinalMeta = function () {
        for (
          var t = this._store, e = this.dimensions, n = 0;
          n < e.length;
          n++
        ) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
        }
      }),
      (p.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider();
        return (
          null == this._idDimIdx &&
          t.getSource().sourceFormat !== nd &&
          !t.fillStorage
        );
      }),
      (p.prototype._doInit = function (t, e) {
        if (!(e <= t)) {
          var n = this._store.getProvider(),
            i = (this._updateOrdinalMeta(), this._nameList),
            r = this._idList;
          if (n.getSource().sourceFormat === Qp && !n.pure)
            for (var o = [], a = t; a < e; a++) {
              var s,
                l = n.getItem(a, o);
              this.hasItemOption ||
                !O((s = l)) ||
                s instanceof Array ||
                (this.hasItemOption = !0),
                l &&
                  ((s = l.name),
                  null == i[a] && null != s && (i[a] = Ao(s, null)),
                  (l = l.id),
                  null == r[a]) &&
                  null != l &&
                  (r[a] = Ao(l, null));
            }
          if (this._shouldMakeIdFromName()) for (a = t; a < e; a++) mv(this, a);
          cv(this);
        }
      }),
      (p.prototype.getApproximateExtent = function (t) {
        return (
          this._approximateExtent[t] ||
          this._store.getDataExtent(this._getStoreDimIndex(t))
        );
      }),
      (p.prototype.setApproximateExtent = function (t, e) {
        (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
      }),
      (p.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t];
      }),
      (p.prototype.setCalculationInfo = function (t, e) {
        vv(t) ? L(this._calculationInfo, t) : (this._calculationInfo[t] = e);
      }),
      (p.prototype.getName = function (t) {
        var t = this.getRawIndex(t),
          e = this._nameList[t];
        return (e =
          null ==
          (e =
            null == e && null != this._nameDimIdx
              ? dv(this, this._nameDimIdx, t)
              : e)
            ? ''
            : e);
      }),
      (p.prototype._getCategory = function (t, e) {
        (e = this._store.get(t, e)), (t = this._store.getOrdinalMeta(t));
        return t ? t.categories[e] : e;
      }),
      (p.prototype.getId = function (t) {
        return pv(this, this.getRawIndex(t));
      }),
      (p.prototype.count = function () {
        return this._store.count();
      }),
      (p.prototype.get = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t];
        if (t) return n.get(t.storeDimIndex, e);
      }),
      (p.prototype.getByRawIndex = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t];
        if (t) return n.getByRawIndex(t.storeDimIndex, e);
      }),
      (p.prototype.getIndices = function () {
        return this._store.getIndices();
      }),
      (p.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t));
      }),
      (p.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t));
      }),
      (p.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t));
      }),
      (p.prototype.getValues = function (t, e) {
        var n = this,
          i = this._store;
        return F(t)
          ? i.getValues(
              _v(t, function (t) {
                return n._getStoreDimIndex(t);
              }),
              e
            )
          : i.getValues(t);
      }),
      (p.prototype.hasValue = function (t) {
        for (
          var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length;
          n < i;
          n++
        )
          if (isNaN(this._store.get(e[n], t))) return !1;
        return !0;
      }),
      (p.prototype.indexOfName = function (t) {
        for (var e = 0, n = this._store.count(); e < n; e++)
          if (this.getName(e) === t) return e;
        return -1;
      }),
      (p.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t);
      }),
      (p.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t);
      }),
      (p.prototype.rawIndexOf = function (t, e) {
        t = (t && this._invertedIndicesMap[t])[e];
        return null == t || isNaN(t) ? -1 : t;
      }),
      (p.prototype.indicesOfNearest = function (t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
      }),
      (p.prototype.each = function (t, e, n) {
        D(t) && ((n = e), (e = t), (t = []));
        (n = n || this), (t = _v(fv(t), this._getStoreDimIndex, this));
        this._store.each(t, n ? S(e, n) : e);
      }),
      (p.prototype.filterSelf = function (t, e, n) {
        D(t) && ((n = e), (e = t), (t = []));
        (n = n || this), (t = _v(fv(t), this._getStoreDimIndex, this));
        return (this._store = this._store.filter(t, n ? S(e, n) : e)), this;
      }),
      (p.prototype.selectRange = function (n) {
        var i = this,
          r = {};
        return (
          z(ht(n), function (t) {
            var e = i._getStoreDimIndex(t);
            r[e] = n[t];
          }),
          (this._store = this._store.selectRange(r)),
          this
        );
      }),
      (p.prototype.mapArray = function (t, e, n) {
        D(t) && ((n = e), (e = t), (t = []));
        var i = [];
        return (
          this.each(
            t,
            function () {
              i.push(e && e.apply(this, arguments));
            },
            (n = n || this)
          ),
          i
        );
      }),
      (p.prototype.map = function (t, e, n, i) {
        (n = n || i || this),
          (i = _v(fv(t), this._getStoreDimIndex, this)),
          (t = yv(this));
        return (t._store = this._store.map(i, n ? S(e, n) : e)), t;
      }),
      (p.prototype.modify = function (t, e, n, i) {
        (n = n || i || this), (i = _v(fv(t), this._getStoreDimIndex, this));
        this._store.modify(i, n ? S(e, n) : e);
      }),
      (p.prototype.downSample = function (t, e, n, i) {
        var r = yv(this);
        return (
          (r._store = this._store.downSample(
            this._getStoreDimIndex(t),
            e,
            n,
            i
          )),
          r
        );
      }),
      (p.prototype.lttbDownSample = function (t, e) {
        var n = yv(this);
        return (
          (n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)),
          n
        );
      }),
      (p.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t);
      }),
      (p.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          t = this.getRawDataItem(t);
        return new Fc(t, e, e && e.ecModel);
      }),
      (p.prototype.diff = function (e) {
        var n = this;
        return new $m(
          e ? e.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (t) {
            return pv(e, t);
          },
          function (t) {
            return pv(n, t);
          }
        );
      }),
      (p.prototype.getVisual = function (t) {
        var e = this._visual;
        return e && e[t];
      }),
      (p.prototype.setVisual = function (t, e) {
        (this._visual = this._visual || {}),
          vv(t) ? L(this._visual, t) : (this._visual[t] = e);
      }),
      (p.prototype.getItemVisual = function (t, e) {
        (t = this._itemVisuals[t]), (t = t && t[e]);
        return null == t ? this.getVisual(e) : t;
      }),
      (p.prototype.hasItemVisual = function () {
        return 0 < this._itemVisuals.length;
      }),
      (p.prototype.ensureUniqueItemVisual = function (t, e) {
        var n = this._itemVisuals,
          i = n[t],
          n = (i = i || (n[t] = {}))[e];
        return (
          null == n &&
            (F((n = this.getVisual(e)))
              ? (n = n.slice())
              : vv(n) && (n = L({}, n)),
            (i[e] = n)),
          n
        );
      }),
      (p.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {};
        (this._itemVisuals[t] = i), vv(e) ? L(i, e) : (i[e] = n);
      }),
      (p.prototype.clearAllVisual = function () {
        (this._visual = {}), (this._itemVisuals = []);
      }),
      (p.prototype.setLayout = function (t, e) {
        vv(t) ? L(this._layout, t) : (this._layout[t] = e);
      }),
      (p.prototype.getLayout = function (t) {
        return this._layout[t];
      }),
      (p.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t];
      }),
      (p.prototype.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? L(this._itemLayouts[t] || {}, e) : e;
      }),
      (p.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0;
      }),
      (p.prototype.setItemGraphicEl = function (t, e) {
        var n,
          i,
          r,
          o,
          a = this.hostModel && this.hostModel.seriesIndex;
        (n = a),
          (i = this.dataType),
          (r = t),
          (a = e) &&
            (((o = k(a)).dataIndex = r),
            (o.dataType = i),
            (o.seriesIndex = n),
            (o.ssrType = 'chart'),
            'group' === a.type) &&
            a.traverse(function (t) {
              t = k(t);
              (t.seriesIndex = n),
                (t.dataIndex = r),
                (t.dataType = i),
                (t.ssrType = 'chart');
            }),
          (this._graphicEls[t] = e);
      }),
      (p.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t];
      }),
      (p.prototype.eachItemGraphicEl = function (n, i) {
        z(this._graphicEls, function (t, e) {
          t && n && n.call(i, t, e);
        });
      }),
      (p.prototype.cloneShallow = function (t) {
        return (
          (t =
            t ||
            new p(
              this._schema || _v(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          gv(t, this),
          (t._store = this._store),
          t
        );
      }),
      (p.prototype.wrapMethod = function (t, e) {
        var n = this[t];
        D(n) &&
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(t),
          (this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(St(arguments)));
          }));
      }),
      (p.internalField =
        ((cv = function (a) {
          var s = a._invertedIndicesMap;
          z(s, function (t, e) {
            var n = a._dimInfos[e],
              i = n.ordinalMeta,
              r = a._store;
            if (i) {
              t = s[e] = new xv(i.categories.length);
              for (var o = 0; o < t.length; o++) t[o] = -1;
              for (o = 0; o < r.count(); o++) t[r.get(n.storeDimIndex, o)] = o;
            }
          });
        }),
        (dv = function (t, e, n) {
          return Ao(t._getCategory(e, n), null);
        }),
        (pv = function (t, e) {
          var n = t._idList[e];
          return (n =
            null ==
            (n = null == n && null != t._idDimIdx ? dv(t, t._idDimIdx, e) : n)
              ? 'e\0\0' + e
              : n);
        }),
        (fv = function (t) {
          return (t = F(t) ? t : null != t ? [t] : []);
        }),
        (yv = function (t) {
          var e = new p(
            t._schema || _v(t.dimensions, t._getDimInfo, t),
            t.hostModel
          );
          return gv(e, t), e;
        }),
        (gv = function (e, n) {
          z(wv.concat(n.__wrappedMethods || []), function (t) {
            n.hasOwnProperty(t) && (e[t] = n[t]);
          }),
            (e.__wrappedMethods = n.__wrappedMethods),
            z(bv, function (t) {
              e[t] = y(n[t]);
            }),
            (e._calculationInfo = L({}, n._calculationInfo));
        }),
        void (mv = function (t, e) {
          var n = t._nameList,
            i = t._idList,
            r = t._nameDimIdx,
            o = t._idDimIdx,
            a = n[e],
            s = i[e];
          null == a && null != r && (n[e] = a = dv(t, r, e)),
            null == s && null != o && (i[e] = s = dv(t, o, e)),
            null == s &&
              null != a &&
              ((s = a),
              1 < (r = (n = t._nameRepeatCount)[a] = (n[a] || 0) + 1) &&
                (s += '__ec__' + r),
              (i[e] = s));
        }))),
      p);
  function p(t, e) {
    (this.type = 'list'),
      (this._dimOmitted = !1),
      (this._nameList = []),
      (this._idList = []),
      (this._visual = {}),
      (this._layout = {}),
      (this._itemVisuals = []),
      (this._itemLayouts = []),
      (this._graphicEls = []),
      (this._approximateExtent = {}),
      (this._calculationInfo = {}),
      (this.hasItemOption = !1),
      (this.TRANSFERABLE_METHODS = [
        'cloneShallow',
        'downSample',
        'lttbDownSample',
        'map',
      ]),
      (this.CHANGABLE_METHODS = ['filterSelf', 'selectRange']);
    for (
      var n,
        i,
        r = !(this.DOWNSAMPLE_METHODS = ['downSample', 'lttbDownSample']),
        o =
          (lv(t)
            ? ((n = t.dimensions),
              (this._dimOmitted = t.isDimensionOmitted()),
              (this._schema = t))
            : ((r = !0), (n = t)),
          (n = n || ['x', 'y']),
          {}),
        a = [],
        s = {},
        l = !1,
        u = {},
        h = 0;
      h < n.length;
      h++
    ) {
      var c = n[h],
        c = V(c) ? new iv({name: c}) : c instanceof iv ? c : new iv(c),
        p = c.name,
        d =
          ((c.type = c.type || 'float'),
          c.coordDim || ((c.coordDim = p), (c.coordDimIndex = 0)),
          (c.otherDims = c.otherDims || {}));
      a.push(p),
        null != u[p] && (l = !0),
        (o[p] = c).createInvertedIndices && (s[p] = []),
        0 === d.itemName && (this._nameDimIdx = h),
        0 === d.itemId && (this._idDimIdx = h),
        r && (c.storeDimIndex = h);
    }
    (this.dimensions = a),
      (this._dimInfos = o),
      this._initGetDimensionInfo(l),
      (this.hostModel = e),
      (this._invertedIndicesMap = s),
      this._dimOmitted &&
        ((i = this._dimIdxToName = B()),
        z(a, function (t) {
          i.set(o[t].storeDimIndex, t);
        }));
  }
  function Mv(t, e) {
    of(t) || (t = sf(t));
    for (
      var n,
        i,
        r = (e = e || {}).coordDimensions || [],
        o = e.dimensionsDefine || t.dimensionsDefine || [],
        a = B(),
        s = [],
        l =
          ((u = t),
          (n = r),
          (p = e.dimensionsCount),
          (i = Math.max(
            u.dimensionsDetectedCount || 1,
            n.length,
            o.length,
            p || 0
          )),
          z(n, function (t) {
            O(t) && (t = t.dimsDef) && (i = Math.max(i, t.length));
          }),
          i),
        u = e.canOmitUnusedDimensions && 30 < l,
        h = o === t.dimensionsDefine,
        c = h ? hv(t) : uv(o),
        p = e.encodeDefine,
        d = B((p = !p && e.encodeDefaulter ? e.encodeDefaulter(t, l) : p)),
        f = new pg(l),
        g = 0;
      g < f.length;
      g++
    )
      f[g] = -1;
    function y(t) {
      var e,
        n,
        i,
        r = f[t];
      return r < 0
        ? ((e = O((e = o[t])) ? e : {name: e}),
          (n = new iv()),
          null != (i = e.name) &&
            null != c.get(i) &&
            (n.name = n.displayName = i),
          null != e.type && (n.type = e.type),
          null != e.displayName && (n.displayName = e.displayName),
          (f[t] = s.length),
          (n.storeDimIndex = t),
          s.push(n),
          n)
        : s[r];
    }
    if (!u) for (g = 0; g < l; g++) y(g);
    d.each(function (t, n) {
      var i,
        t = So(t).slice();
      1 === t.length && !V(t[0]) && t[0] < 0
        ? d.set(n, !1)
        : ((i = d.set(n, [])),
          z(t, function (t, e) {
            t = V(t) ? c.get(t) : t;
            null != t && t < l && v(y((i[e] = t)), n, e);
          }));
    });
    var m = 0;
    function v(t, e, n) {
      null != $p.get(e)
        ? (t.otherDims[e] = n)
        : ((t.coordDim = e), (t.coordDimIndex = n), a.set(e, !0));
    }
    z(r, function (t) {
      V(t)
        ? ((o = t), (r = {}))
        : ((o = (r = t).name),
          (t = r.ordinalMeta),
          (r.ordinalMeta = null),
          ((r = L({}, r)).ordinalMeta = t),
          (n = r.dimsDef),
          (i = r.otherDims),
          (r.name =
            r.coordDim =
            r.coordDimIndex =
            r.dimsDef =
            r.otherDims =
              null));
      var n,
        i,
        r,
        o,
        e = d.get(o);
      if (!1 !== e) {
        if (!(e = So(e)).length)
          for (var a = 0; a < ((n && n.length) || 1); a++) {
            for (; m < l && null != y(m).coordDim; ) m++;
            m < l && e.push(m++);
          }
        z(e, function (t, e) {
          t = y(t);
          h && null != r.type && (t.type = r.type),
            v(E(t, r), o, e),
            null == t.name &&
              n &&
              (O((e = n[e])) || (e = {name: e}),
              (t.name = t.displayName = e.name),
              (t.defaultTooltip = e.defaultTooltip)),
            i && E(t.otherDims, i);
        });
      }
    });
    var _ = e.generateCoord,
      x = null != (w = e.generateCoordCount),
      w = _ ? w || 1 : 0,
      b = _ || 'value';
    function S(t) {
      null == t.name && (t.name = t.coordDim);
    }
    if (u)
      z(s, function (t) {
        S(t);
      }),
        s.sort(function (t, e) {
          return t.storeDimIndex - e.storeDimIndex;
        });
    else
      for (var M = 0; M < l; M++) {
        var T = y(M);
        null == T.coordDim &&
          ((T.coordDim = (function (t, e, n) {
            if (n || e.hasKey(t)) {
              for (var i = 0; e.hasKey(t + i); ) i++;
              t += i;
            }
            return e.set(t, !0), t;
          })(b, a, x)),
          (T.coordDimIndex = 0),
          (!_ || w <= 0) && (T.isExtraCoord = !0),
          w--),
          S(T),
          null != T.type ||
            (cd(t, M) !== ad.Must &&
              (!T.isExtraCoord ||
                (null == T.otherDims.itemName &&
                  null == T.otherDims.seriesName))) ||
            (T.type = 'ordinal');
      }
    for (var C = s, I = B(), D = 0; D < C.length; D++) {
      var k = C[D],
        A = k.name,
        P = I.get(A) || 0;
      0 < P && (k.name = A + (P - 1)), P++, I.set(A, P);
    }
    return new av({
      source: t,
      dimensions: s,
      fullDimensionCount: l,
      dimensionOmitted: u,
    });
  }
  var Tv = function (t) {
    (this.coordSysDims = []),
      (this.axisMap = B()),
      (this.categoryAxisMap = B()),
      (this.coordSysName = t);
  };
  var Cv = {
    cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents('xAxis', Fo).models[0],
        t = t.getReferringComponents('yAxis', Fo).models[0];
      (e.coordSysDims = ['x', 'y']),
        n.set('x', r),
        n.set('y', t),
        Iv(r) && (i.set('x', r), (e.firstCategoryDimIndex = 0)),
        Iv(t) &&
          (i.set('y', t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1);
    },
    singleAxis: function (t, e, n, i) {
      t = t.getReferringComponents('singleAxis', Fo).models[0];
      (e.coordSysDims = ['single']),
        n.set('single', t),
        Iv(t) && (i.set('single', t), (e.firstCategoryDimIndex = 0));
    },
    polar: function (t, e, n, i) {
      var t = t.getReferringComponents('polar', Fo).models[0],
        r = t.findAxisModel('radiusAxis'),
        t = t.findAxisModel('angleAxis');
      (e.coordSysDims = ['radius', 'angle']),
        n.set('radius', r),
        n.set('angle', t),
        Iv(r) && (i.set('radius', r), (e.firstCategoryDimIndex = 0)),
        Iv(t) &&
          (i.set('angle', t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1);
    },
    geo: function (t, e, n, i) {
      e.coordSysDims = ['lng', 'lat'];
    },
    parallel: function (t, i, r, o) {
      var a = t.ecModel,
        t = a.getComponent('parallel', t.get('parallelIndex')),
        s = (i.coordSysDims = t.dimensions.slice());
      z(t.parallelAxisIndex, function (t, e) {
        var t = a.getComponent('parallelAxis', t),
          n = s[e];
        r.set(n, t),
          Iv(t) &&
            (o.set(n, t), null == i.firstCategoryDimIndex) &&
            (i.firstCategoryDimIndex = e);
      });
    },
  };
  function Iv(t) {
    return 'category' === t.get('type');
  }
  function Dv(t, e, n) {
    var i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p = (n = n || {}).byIndex,
      d = n.stackedCoordDimension,
      f =
        (lv(e.schema)
          ? ((r = e.schema), (i = r.dimensions), (o = e.store))
          : (i = e),
        !(!t || !t.get('stack')));
    return (
      z(i, function (t, e) {
        V(t) && (i[e] = t = {name: t}),
          f &&
            !t.isExtraCoord &&
            (p || a || !t.ordinalMeta || (a = t),
            s ||
              'ordinal' === t.type ||
              'time' === t.type ||
              (d && d !== t.coordDim) ||
              (s = t));
      }),
      !s || p || a || (p = !0),
      s &&
        ((l = '__\0ecstackresult_' + t.id),
        (u = '__\0ecstackedover_' + t.id),
        a && (a.createInvertedIndices = !0),
        (h = s.coordDim),
        (n = s.type),
        (c = 0),
        z(i, function (t) {
          t.coordDim === h && c++;
        }),
        (e = {
          name: l,
          coordDim: h,
          coordDimIndex: c,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length,
        }),
        (t = {
          name: u,
          coordDim: u,
          coordDimIndex: c + 1,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length + 1,
        }),
        r
          ? (o &&
              ((e.storeDimIndex = o.ensureCalculationDimension(u, n)),
              (t.storeDimIndex = o.ensureCalculationDimension(l, n))),
            r.appendCalculationDimension(e),
            r.appendCalculationDimension(t))
          : (i.push(e), i.push(t))),
      {
        stackedDimension: s && s.name,
        stackedByDimension: a && a.name,
        isStackedByIndex: p,
        stackedOverDimension: u,
        stackResultDimension: l,
      }
    );
  }
  function kv(t, e) {
    return !!e && e === t.getCalculationInfo('stackedDimension');
  }
  function Av(t, e) {
    return kv(t, e) ? t.getCalculationInfo('stackResultDimension') : e;
  }
  function Pv(t, e, n) {
    n = n || {};
    var i,
      r,
      o,
      a,
      s,
      l,
      u = e.getSourceManager(),
      h = !1,
      t =
        (t
          ? ((h = !0), (i = sf(t)))
          : (h = (i = u.getSource()).sourceFormat === Qp),
        (function (t) {
          var e = t.get('coordinateSystem'),
            n = new Tv(e);
          if ((e = Cv[e])) return e(t, n, n.axisMap, n.categoryAxisMap), n;
        })(e)),
      c =
        ((r = t),
        (c = (c = e).get('coordinateSystem')),
        (c = Ad.get(c)),
        (p = (p =
          r && r.coordSysDims
            ? N(r.coordSysDims, function (t) {
                var e = {name: t},
                  t = r.axisMap.get(t);
                return (
                  t &&
                    ((t = t.get('type')),
                    (e.type =
                      'category' === (t = t)
                        ? 'ordinal'
                        : 'time' === t
                        ? 'time'
                        : 'float')),
                  e
                );
              })
            : p) ||
          (c &&
            (c.getDimensionsInfo
              ? c.getDimensionsInfo()
              : c.dimensions.slice())) || ['x', 'y'])),
      p = n.useEncodeDefaulter,
      p = D(p) ? p : p ? ct(ld, c, e) : null,
      c = {
        coordDimensions: c,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: p,
        canOmitUnusedDimensions: !h,
      },
      p = Mv(i, c),
      d =
        ((c = p.dimensions),
        (o = n.createInvertedIndices),
        (a = t) &&
          z(c, function (t, e) {
            var n = t.coordDim,
              n = a.categoryAxisMap.get(n);
            n &&
              (null == s && (s = e), (t.ordinalMeta = n.getOrdinalMeta()), o) &&
              (t.createInvertedIndices = !0),
              null != t.otherDims.itemName && (l = !0);
          }),
        l || null == s || (c[s].otherDims.itemName = 0),
        s),
      n = h ? null : u.getSharedDataStore(p),
      t = Dv(e, {schema: p, store: n}),
      c = new Sv(p, e),
      p =
        (c.setCalculationInfo(t),
        null == d ||
        (u = i).sourceFormat !== Qp ||
        F(
          Co(
            (function (t) {
              var e = 0;
              for (; e < t.length && null == t[e]; ) e++;
              return t[e];
            })(u.data || [])
          )
        )
          ? null
          : function (t, e, n, i) {
              return i === d ? n : this.defaultDimValueGetter(t, e, n, i);
            });
    return (c.hasItemOption = !1), c.initData(h ? i : n, null, p), c;
  }
  (Ov.prototype.getSetting = function (t) {
    return this._setting[t];
  }),
    (Ov.prototype.unionExtent = function (t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }),
    (Ov.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (Ov.prototype.getExtent = function () {
      return this._extent.slice();
    }),
    (Ov.prototype.setExtent = function (t, e) {
      var n = this._extent;
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
    }),
    (Ov.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }),
    (Ov.prototype.isBlank = function () {
      return this._isBlank;
    }),
    (Ov.prototype.setBlank = function (t) {
      this._isBlank = t;
    });
  var Lv = Ov;
  function Ov(t) {
    (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
  }
  Qo(Lv);
  var Rv = 0,
    Bv =
      ((zv.createByAxisModel = function (t) {
        var t = t.option,
          e = t.data,
          e = e && N(e, Ev);
        return new zv({
          categories: e,
          needCollect: !e,
          deduplication: !1 !== t.dedplication,
        });
      }),
      (zv.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t);
      }),
      (zv.prototype.parseAndCollect = function (t) {
        var e,
          n,
          i = this._needCollect;
        return V(t) || i
          ? (i && !this._deduplication
              ? ((n = this.categories.length), (this.categories[n] = t))
              : null == (n = (e = this._getOrCreateMap()).get(t)) &&
                (i
                  ? ((n = this.categories.length),
                    (this.categories[n] = t),
                    e.set(t, n))
                  : (n = NaN)),
            n)
          : t;
      }),
      (zv.prototype._getOrCreateMap = function () {
        return this._map || (this._map = B(this.categories));
      }),
      zv);
  function zv(t) {
    (this.categories = t.categories || []),
      (this._needCollect = t.needCollect),
      (this._deduplication = t.deduplication),
      (this.uid = ++Rv);
  }
  function Ev(t) {
    return O(t) && null != t.value ? t.value : t + '';
  }
  function Nv(t) {
    return 'interval' === t.type || 'log' === t.type;
  }
  function Fv(t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      o = (r.interval = yo(o / e, !0)),
      e =
        (null != n && o < n && (o = r.interval = n),
        null != i && i < o && (o = r.interval = i),
        (r.intervalPrecision = Hv(o))),
      n = (r.niceTickExtent = [
        io(Math.ceil(t[0] / o) * o, e),
        io(Math.floor(t[1] / o) * o, e),
      ]);
    return (
      (i = n),
      (o = t),
      isFinite(i[0]) || (i[0] = o[0]),
      isFinite(i[1]) || (i[1] = o[1]),
      Wv(i, 0, o),
      Wv(i, 1, o),
      i[0] > i[1] && (i[0] = i[1]),
      r
    );
  }
  function Vv(t) {
    var e = Math.pow(10, go(t)),
      t = t / e;
    return (
      t ? (2 === t ? (t = 3) : 3 === t ? (t = 5) : (t *= 2)) : (t = 1),
      io(t * e)
    );
  }
  function Hv(t) {
    return oo(t) + 2;
  }
  function Wv(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }
  function Gv(t, e) {
    return t >= e[0] && t <= e[1];
  }
  function Uv(t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  }
  function Zv(t, e) {
    return t * (e[1] - e[0]) + e[0];
  }
  u(qv, (Yv = Lv)),
    (qv.prototype.parse = function (t) {
      return null == t
        ? NaN
        : V(t)
        ? this._ordinalMeta.getOrdinal(t)
        : Math.round(t);
    }),
    (qv.prototype.contain = function (t) {
      return (
        Gv((t = this.parse(t)), this._extent) &&
        null != this._ordinalMeta.categories[t]
      );
    }),
    (qv.prototype.normalize = function (t) {
      return Uv((t = this._getTickNumber(this.parse(t))), this._extent);
    }),
    (qv.prototype.scale = function (t) {
      return (t = Math.round(Zv(t, this._extent))), this.getRawOrdinalNumber(t);
    }),
    (qv.prototype.getTicks = function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
        t.push({value: n}), n++;
      return t;
    }),
    (qv.prototype.getMinorTicks = function (t) {}),
    (qv.prototype.setSortInfo = function (t) {
      if (null == t)
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
      else {
        for (
          var e = t.ordinalNumbers,
            n = (this._ordinalNumbersByTick = []),
            i = (this._ticksByOrdinalNumber = []),
            r = 0,
            o = this._ordinalMeta.categories.length,
            a = Math.min(o, e.length);
          r < a;
          ++r
        ) {
          var s = e[r];
          i[(n[r] = s)] = r;
        }
        for (var l = 0; r < o; ++r) {
          for (; null != i[l]; ) l++;
          n.push(l), (i[l] = r);
        }
      }
    }),
    (qv.prototype._getTickNumber = function (t) {
      var e = this._ticksByOrdinalNumber;
      return e && 0 <= t && t < e.length ? e[t] : t;
    }),
    (qv.prototype.getRawOrdinalNumber = function (t) {
      var e = this._ordinalNumbersByTick;
      return e && 0 <= t && t < e.length ? e[t] : t;
    }),
    (qv.prototype.getLabel = function (t) {
      if (!this.isBlank())
        return (
          (t = this.getRawOrdinalNumber(t.value)),
          null == (t = this._ordinalMeta.categories[t]) ? '' : t + ''
        );
    }),
    (qv.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1;
    }),
    (qv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (qv.prototype.isInExtentRange = function (t) {
      return (
        (t = this._getTickNumber(t)),
        this._extent[0] <= t && this._extent[1] >= t
      );
    }),
    (qv.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta;
    }),
    (qv.prototype.calcNiceTicks = function () {}),
    (qv.prototype.calcNiceExtent = function () {}),
    (qv.type = 'ordinal');
  var Yv,
    Xv = qv;
  function qv(t) {
    var t = Yv.call(this, t) || this,
      e = ((t.type = 'ordinal'), t.getSetting('ordinalMeta'));
    return (
      F((e = e || new Bv({}))) &&
        (e = new Bv({
          categories: N(e, function (t) {
            return O(t) ? t.value : t;
          }),
        })),
      (t._ordinalMeta = e),
      (t._extent = t.getSetting('extent') || [0, e.categories.length - 1]),
      t
    );
  }
  Lv.registerClass(Xv);
  var jv,
    Kv = io,
    $v =
      (u(Qv, (jv = Lv)),
      (Qv.prototype.parse = function (t) {
        return t;
      }),
      (Qv.prototype.contain = function (t) {
        return Gv(t, this._extent);
      }),
      (Qv.prototype.normalize = function (t) {
        return Uv(t, this._extent);
      }),
      (Qv.prototype.scale = function (t) {
        return Zv(t, this._extent);
      }),
      (Qv.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
      }),
      (Qv.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]),
          t[1] > e[1] && (e[1] = t[1]),
          this.setExtent(e[0], e[1]);
      }),
      (Qv.prototype.getInterval = function () {
        return this._interval;
      }),
      (Qv.prototype.setInterval = function (t) {
        (this._interval = t),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Hv(t));
      }),
      (Qv.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = [];
        if (e) {
          n[0] < i[0] && o.push(t ? {value: Kv(i[0] - e, r)} : {value: n[0]});
          for (
            var a = i[0];
            a <= i[1] &&
            (o.push({value: a}), (a = Kv(a + e, r)) !== o[o.length - 1].value);

          )
            if (1e4 < o.length) return [];
          var s = o.length ? o[o.length - 1].value : i[1];
          n[1] > s && o.push(t ? {value: Kv(s + e, r)} : {value: n[1]});
        }
        return o;
      }),
      (Qv.prototype.getMinorTicks = function (t) {
        for (
          var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1;
          r < e.length;
          r++
        ) {
          for (
            var o = e[r],
              a = e[r - 1],
              s = 0,
              l = [],
              u = (o.value - a.value) / t;
            s < t - 1;

          ) {
            var h = Kv(a.value + (s + 1) * u);
            h > i[0] && h < i[1] && l.push(h), s++;
          }
          n.push(l);
        }
        return n;
      }),
      (Qv.prototype.getLabel = function (t, e) {
        return null == t
          ? ''
          : (null == (e = e && e.precision)
              ? (e = oo(t.value) || 0)
              : 'auto' === e && (e = this._intervalPrecision),
            Mp(Kv(t.value, e, !0)));
      }),
      (Qv.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        isFinite(r) &&
          (r < 0 && i.reverse(),
          (r = Fv(i, t, e, n)),
          (this._intervalPrecision = r.intervalPrecision),
          (this._interval = r.interval),
          (this._niceExtent = r.niceTickExtent));
      }),
      (Qv.prototype.calcNiceExtent = function (t) {
        var e = this._extent,
          n =
            (e[0] === e[1] &&
              (0 !== e[0]
                ? ((n = Math.abs(e[0])),
                  t.fixMax || (e[1] += n / 2),
                  (e[0] -= n / 2))
                : (e[1] = 1)),
            e[1] - e[0]),
          n =
            (isFinite(n) || ((e[0] = 0), (e[1] = 1)),
            this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval),
            this._interval);
        t.fixMin || (e[0] = Kv(Math.floor(e[0] / n) * n)),
          t.fixMax || (e[1] = Kv(Math.ceil(e[1] / n) * n));
      }),
      (Qv.prototype.setNiceExtent = function (t, e) {
        this._niceExtent = [t, e];
      }),
      (Qv.type = 'interval'),
      Qv);
  function Qv() {
    var t = (null !== jv && jv.apply(this, arguments)) || this;
    return (
      (t.type = 'interval'), (t._interval = 0), (t._intervalPrecision = 2), t
    );
  }
  Lv.registerClass($v);
  var Jv = 'undefined' != typeof Float32Array,
    t_ = Jv ? Float32Array : Array;
  function e_(t) {
    return F(t) ? (Jv ? new Float32Array(t) : t) : new t_(t);
  }
  var n_ = '__ec_stack_';
  function i_(t) {
    return t.get('stack') || n_ + t.seriesIndex;
  }
  function r_(t) {
    return t.dim + t.index;
  }
  function o_(t, e) {
    var n = [];
    return (
      e.eachSeriesByType(t, function (t) {
        l_(t) && n.push(t);
      }),
      n
    );
  }
  function a_(t) {
    var a,
      d,
      l = (function (t) {
        var e,
          l = {},
          n =
            (z(t, function (t) {
              var e = t.coordinateSystem.getBaseAxis();
              if ('time' === e.type || 'value' === e.type)
                for (
                  var t = t.getData(),
                    n = e.dim + '_' + e.index,
                    i = t.getDimensionIndex(t.mapDimension(e.dim)),
                    r = t.getStore(),
                    o = 0,
                    a = r.count();
                  o < a;
                  ++o
                ) {
                  var s = r.get(i, o);
                  l[n] ? l[n].push(s) : (l[n] = [s]);
                }
            }),
            {});
        for (e in l)
          if (l.hasOwnProperty(e)) {
            var i = l[e];
            if (i) {
              i.sort(function (t, e) {
                return t - e;
              });
              for (var r = null, o = 1; o < i.length; ++o) {
                var a = i[o] - i[o - 1];
                0 < a && (r = null === r ? a : Math.min(r, a));
              }
              n[e] = r;
            }
          }
        return n;
      })(t),
      u = [];
    return (
      z(t, function (t) {
        var e,
          n = t.coordinateSystem.getBaseAxis(),
          i = n.getExtent(),
          r =
            ((e =
              'category' === n.type
                ? n.getBandWidth()
                : 'value' === n.type || 'time' === n.type
                ? ((e = n.dim + '_' + n.index),
                  (e = l[e]),
                  (r = Math.abs(i[1] - i[0])),
                  (o = n.scale.getExtent()),
                  (o = Math.abs(o[1] - o[0])),
                  e ? (r / o) * e : r)
                : ((o = t.getData()), Math.abs(i[1] - i[0]) / o.count())),
            no(t.get('barWidth'), e)),
          i = no(t.get('barMaxWidth'), e),
          o = no(t.get('barMinWidth') || (u_(t) ? 0.5 : 1), e),
          a = t.get('barGap'),
          s = t.get('barCategoryGap');
        u.push({
          bandWidth: e,
          barWidth: r,
          barMaxWidth: i,
          barMinWidth: o,
          barGap: a,
          barCategoryGap: s,
          axisKey: r_(n),
          stackId: i_(t),
        });
      }),
      (a = {}),
      z(u, function (t, e) {
        var n = t.axisKey,
          i = t.bandWidth,
          i = a[n] || {
            bandWidth: i,
            remainedWidth: i,
            autoWidthCount: 0,
            categoryGap: null,
            gap: '20%',
            stacks: {},
          },
          r = i.stacks,
          n = ((a[n] = i), t.stackId),
          o =
            (r[n] || i.autoWidthCount++,
            (r[n] = r[n] || {width: 0, maxWidth: 0}),
            t.barWidth),
          o =
            (o &&
              !r[n].width &&
              ((r[n].width = o),
              (o = Math.min(i.remainedWidth, o)),
              (i.remainedWidth -= o)),
            t.barMaxWidth),
          o = (o && (r[n].maxWidth = o), t.barMinWidth),
          r = (o && (r[n].minWidth = o), t.barGap),
          n = (null != r && (i.gap = r), t.barCategoryGap);
        null != n && (i.categoryGap = n);
      }),
      (d = {}),
      z(a, function (t, n) {
        d[n] = {};
        var i,
          e = t.stacks,
          r = t.bandWidth,
          o = t.categoryGap,
          a =
            (null == o &&
              ((a = ht(e).length), (o = Math.max(35 - 4 * a, 15) + '%')),
            no(o, r)),
          s = no(t.gap, 1),
          l = t.remainedWidth,
          u = t.autoWidthCount,
          h = (l - a) / (u + (u - 1) * s),
          h = Math.max(h, 0),
          c =
            (z(e, function (t) {
              var e,
                n = t.maxWidth,
                i = t.minWidth;
              t.width
                ? ((e = t.width),
                  n && (e = Math.min(e, n)),
                  i && (e = Math.max(e, i)),
                  (t.width = e),
                  (l -= e + s * e),
                  u--)
                : ((e = h),
                  n && n < e && (e = Math.min(n, l)),
                  (e = i && e < i ? i : e) !== h &&
                    ((t.width = e), (l -= e + s * e), u--));
            }),
            (h = (l - a) / (u + (u - 1) * s)),
            (h = Math.max(h, 0)),
            0),
          p =
            (z(e, function (t, e) {
              t.width || (t.width = h), (c += (i = t).width * (1 + s));
            }),
            i && (c -= i.width * s),
            -c / 2);
        z(e, function (t, e) {
          (d[n][e] = d[n][e] || {bandWidth: r, offset: p, width: t.width}),
            (p += t.width * (1 + s));
        });
      }),
      d
    );
  }
  function s_(t, e) {
    var t = o_(t, e),
      r = a_(t);
    z(t, function (t) {
      var e = t.getData(),
        n = t.coordinateSystem.getBaseAxis(),
        t = i_(t),
        n = r[r_(n)][t],
        t = n.offset,
        i = n.width;
      e.setLayout({bandWidth: n.bandWidth, offset: t, size: i});
    });
  }
  function l_(t) {
    return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type;
  }
  function u_(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }
  u(p_, (h_ = $v)),
    (p_.prototype.getLabel = function (t) {
      var e = this.getSetting('useUTC');
      return lp(
        t.value,
        ip[
          (function (t) {
            switch (t) {
              case 'year':
              case 'month':
                return 'day';
              case 'millisecond':
                return 'millisecond';
              default:
                return 'second';
            }
          })(sp(this._minLevelUnit))
        ] || ip.second,
        e,
        this.getSetting('locale')
      );
    }),
    (p_.prototype.getFormattedLabel = function (t, e, n) {
      var i = this.getSetting('useUTC'),
        r = this.getSetting('locale'),
        o = null;
      if (V(n)) o = n;
      else if (D(n)) o = n(t.value, e, {level: t.level});
      else {
        var a = L({}, ep);
        if (0 < t.level)
          for (var s = 0; s < rp.length; ++s)
            a[rp[s]] = '{primary|' + a[rp[s]] + '}';
        var l = n ? (!1 === n.inherit ? n : E(n, a)) : a,
          u = up(t.value, i);
        if (l[u]) o = l[u];
        else if (l.inherit) {
          for (s = op.indexOf(u) - 1; 0 <= s; --s)
            if (l[u]) {
              o = l[u];
              break;
            }
          o = o || a.none;
        }
        F(o) &&
          ((e =
            null == t.level ? 0 : 0 <= t.level ? t.level : o.length + t.level),
          (o = o[(e = Math.min(e, o.length - 1))]));
      }
      return lp(new Date(t.value), o, i, r);
    }),
    (p_.prototype.getTicks = function () {
      var t = this._interval,
        e = this._extent,
        n = [];
      return (
        t &&
          (n.push({value: e[0], level: 0}),
          (t = this.getSetting('useUTC')),
          (t = (function (t, b, S, M) {
            var e = op,
              n = 0;
            function i(t, e, n) {
              var i = [],
                r = !e.length;
              if (
                !(function (t, e, n, i) {
                  function r(t) {
                    return hp(c, t, i) === hp(p, t, i);
                  }
                  function o() {
                    return r('year');
                  }
                  function a() {
                    return o() && r('month');
                  }
                  function s() {
                    return a() && r('day');
                  }
                  function l() {
                    return s() && r('hour');
                  }
                  function u() {
                    return l() && r('minute');
                  }
                  function h() {
                    return u() && r('second');
                  }
                  var c = po(e),
                    p = po(n);
                  switch (t) {
                    case 'year':
                      return o();
                    case 'month':
                      return a();
                    case 'day':
                      return s();
                    case 'hour':
                      return l();
                    case 'minute':
                      return u();
                    case 'second':
                      return h();
                    case 'millisecond':
                      return h() && r('millisecond');
                  }
                })(sp(t), M[0], M[1], S)
              ) {
                r &&
                  (e = [
                    {
                      value: (function (t, e, n) {
                        var i = new Date(t);
                        switch (sp(e)) {
                          case 'year':
                          case 'month':
                            i[vp(n)](0);
                          case 'day':
                            i[_p(n)](1);
                          case 'hour':
                            i[xp(n)](0);
                          case 'minute':
                            i[wp(n)](0);
                          case 'second':
                            i[bp(n)](0), i[Sp(n)](0);
                        }
                        return i.getTime();
                      })(new Date(M[0]), t, S),
                    },
                    {value: M[1]},
                  ]);
                for (var o, a, s = 0; s < e.length - 1; s++) {
                  var l = e[s].value,
                    u = e[s + 1].value;
                  if (l !== u) {
                    var h = void 0,
                      c = void 0,
                      p = void 0;
                    switch (t) {
                      case 'year':
                        (h = Math.max(1, Math.round(b / tp / 365))),
                          (c = cp(S)),
                          (p = S ? 'setUTCFullYear' : 'setFullYear');
                        break;
                      case 'half-year':
                      case 'quarter':
                      case 'month':
                        (a = b),
                          (h =
                            6 < (a /= 30 * tp) ? 6 : 3 < a ? 3 : 2 < a ? 2 : 1),
                          (c = pp(S)),
                          (p = vp(S));
                        break;
                      case 'week':
                      case 'half-week':
                      case 'day':
                        (a = b),
                          (h =
                            16 < (a /= tp)
                              ? 16
                              : 7.5 < a
                              ? 7
                              : 3.5 < a
                              ? 4
                              : 1.5 < a
                              ? 2
                              : 1),
                          (c = dp(S)),
                          (p = _p(S)),
                          0;
                        break;
                      case 'half-day':
                      case 'quarter-day':
                      case 'hour':
                        (o = b),
                          (h =
                            12 < (o /= Jc)
                              ? 12
                              : 6 < o
                              ? 6
                              : 3.5 < o
                              ? 4
                              : 2 < o
                              ? 2
                              : 1),
                          (c = fp(S)),
                          (p = xp(S));
                        break;
                      case 'minute':
                        (h = f_(b, !0)), (c = gp(S)), (p = wp(S));
                        break;
                      case 'second':
                        (h = f_(b, !1)), (c = yp(S)), (p = bp(S));
                        break;
                      case 'millisecond':
                        (h = yo(b, !0)), (c = mp(S)), (p = Sp(S));
                    }
                    w = x = _ = v = m = y = g = f = d = void 0;
                    for (
                      var d = h,
                        f = l,
                        g = u,
                        y = c,
                        m = p,
                        v = i,
                        _ = new Date(f),
                        x = f,
                        w = _[y]();
                      x < g && x <= M[1];

                    )
                      v.push({value: x}), _[m]((w += d)), (x = _.getTime());
                    v.push({value: x, notAdd: !0}),
                      'year' === t &&
                        1 < n.length &&
                        0 === s &&
                        n.unshift({value: n[0].value - h});
                  }
                }
                for (s = 0; s < i.length; s++) n.push(i[s]);
              }
            }
            for (
              var r = [], o = [], a = 0, s = 0, l = 0;
              l < e.length && n++ < 1e4;
              ++l
            ) {
              var u = sp(e[l]);
              if (
                (function (t) {
                  return t === sp(t);
                })(e[l])
              ) {
                i(e[l], r[r.length - 1] || [], o);
                var h = e[l + 1] ? sp(e[l + 1]) : null;
                if (u !== h) {
                  if (o.length) {
                    (s = a),
                      o.sort(function (t, e) {
                        return t.value - e.value;
                      });
                    for (var c = [], p = 0; p < o.length; ++p) {
                      var d = o[p].value;
                      (0 !== p && o[p - 1].value === d) ||
                        (c.push(o[p]), d >= M[0] && d <= M[1] && a++);
                    }
                    u = (M[1] - M[0]) / b;
                    if (1.5 * u < a && u / 1.5 < s) break;
                    if ((r.push(c), u < a || t === e[l])) break;
                  }
                  o = [];
                }
              }
            }
            for (
              var f = ut(
                  N(r, function (t) {
                    return ut(t, function (t) {
                      return t.value >= M[0] && t.value <= M[1] && !t.notAdd;
                    });
                  }),
                  function (t) {
                    return 0 < t.length;
                  }
                ),
                g = [],
                y = f.length - 1,
                l = 0;
              l < f.length;
              ++l
            )
              for (var m = f[l], v = 0; v < m.length; ++v)
                g.push({value: m[v].value, level: y - l});
            g.sort(function (t, e) {
              return t.value - e.value;
            });
            for (var _ = [], l = 0; l < g.length; ++l)
              (0 !== l && g[l].value === g[l - 1].value) || _.push(g[l]);
            return _;
          })(this._minLevelUnit, this._approxInterval, t, e)),
          (n = n.concat(t)).push({value: e[1], level: 0})),
        n
      );
    }),
    (p_.prototype.calcNiceExtent = function (t) {
      var e,
        n = this._extent;
      n[0] === n[1] && ((n[0] -= tp), (n[1] += tp)),
        n[1] === -1 / 0 &&
          n[0] === 1 / 0 &&
          ((e = new Date()),
          (n[1] = +new Date(e.getFullYear(), e.getMonth(), e.getDate())),
          (n[0] = n[1] - tp)),
        this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
    }),
    (p_.prototype.calcNiceTicks = function (t, e, n) {
      var i = this._extent,
        i = i[1] - i[0],
        i =
          ((this._approxInterval = i / (t = t || 10)),
          null != e && this._approxInterval < e && (this._approxInterval = e),
          null != n && this._approxInterval > n && (this._approxInterval = n),
          d_.length),
        t = Math.min(
          (function (t, e, n, i) {
            for (; n < i; ) {
              var r = (n + i) >>> 1;
              t[r][1] < e ? (n = 1 + r) : (i = r);
            }
            return n;
          })(d_, this._approxInterval, 0, i),
          i - 1
        );
      (this._interval = d_[t][1]),
        (this._minLevelUnit = d_[Math.max(t - 1, 0)][0]);
    }),
    (p_.prototype.parse = function (t) {
      return dt(t) ? t : +po(t);
    }),
    (p_.prototype.contain = function (t) {
      return Gv(this.parse(t), this._extent);
    }),
    (p_.prototype.normalize = function (t) {
      return Uv(this.parse(t), this._extent);
    }),
    (p_.prototype.scale = function (t) {
      return Zv(t, this._extent);
    }),
    (p_.type = 'time');
  var h_,
    c_ = p_;
  function p_(t) {
    t = h_.call(this, t) || this;
    return (t.type = 'time'), t;
  }
  var d_ = [
    ['second', $c],
    ['minute', Qc],
    ['hour', Jc],
    ['quarter-day', 6 * Jc],
    ['half-day', 12 * Jc],
    ['day', 1.2 * tp],
    ['half-week', 3.5 * tp],
    ['week', 7 * tp],
    ['month', 31 * tp],
    ['quarter', 95 * tp],
    ['half-year', jo / 2],
    ['year', jo],
  ];
  function f_(t, e) {
    return 30 < (t /= e ? Qc : $c)
      ? 30
      : 20 < t
      ? 20
      : 15 < t
      ? 15
      : 10 < t
      ? 10
      : 5 < t
      ? 5
      : 2 < t
      ? 2
      : 1;
  }
  Lv.registerClass(c_);
  var g_,
    y_ = Lv.prototype,
    m_ = $v.prototype,
    v_ = io,
    __ = Math.floor,
    x_ = Math.ceil,
    w_ = Math.pow,
    b_ = Math.log,
    S_ =
      (u(M_, (g_ = Lv)),
      (M_.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent();
        return N(
          m_.getTicks.call(this, t),
          function (t) {
            var t = t.value,
              e = io(w_(this.base, t)),
              e = t === n[0] && this._fixMin ? T_(e, i[0]) : e;
            return {value: t === n[1] && this._fixMax ? T_(e, i[1]) : e};
          },
          this
        );
      }),
      (M_.prototype.setExtent = function (t, e) {
        var n = b_(this.base);
        (t = b_(Math.max(0, t)) / n),
          (e = b_(Math.max(0, e)) / n),
          m_.setExtent.call(this, t, e);
      }),
      (M_.prototype.getExtent = function () {
        var t = this.base,
          e = y_.getExtent.call(this);
        (e[0] = w_(t, e[0])), (e[1] = w_(t, e[1]));
        t = this._originalScale.getExtent();
        return (
          this._fixMin && (e[0] = T_(e[0], t[0])),
          this._fixMax && (e[1] = T_(e[1], t[1])),
          e
        );
      }),
      (M_.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        (t[0] = b_(t[0]) / b_(e)),
          (t[1] = b_(t[1]) / b_(e)),
          y_.unionExtent.call(this, t);
      }),
      (M_.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e));
      }),
      (M_.prototype.calcNiceTicks = function (t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(n == 1 / 0 || n <= 0)) {
          var i = fo(n);
          for (
            (t / n) * i <= 0.5 && (i *= 10);
            !isNaN(i) && Math.abs(i) < 1 && 0 < Math.abs(i);

          )
            i *= 10;
          t = [io(x_(e[0] / i) * i), io(__(e[1] / i) * i)];
          (this._interval = i), (this._niceExtent = t);
        }
      }),
      (M_.prototype.calcNiceExtent = function (t) {
        m_.calcNiceExtent.call(this, t),
          (this._fixMin = t.fixMin),
          (this._fixMax = t.fixMax);
      }),
      (M_.prototype.parse = function (t) {
        return t;
      }),
      (M_.prototype.contain = function (t) {
        return Gv((t = b_(t) / b_(this.base)), this._extent);
      }),
      (M_.prototype.normalize = function (t) {
        return Uv((t = b_(t) / b_(this.base)), this._extent);
      }),
      (M_.prototype.scale = function (t) {
        return (t = Zv(t, this._extent)), w_(this.base, t);
      }),
      (M_.type = 'log'),
      M_);
  function M_() {
    var t = (null !== g_ && g_.apply(this, arguments)) || this;
    return (
      (t.type = 'log'),
      (t.base = 10),
      (t._originalScale = new $v()),
      (t._interval = 0),
      t
    );
  }
  qy = S_.prototype;
  function T_(t, e) {
    return v_(t, oo(e));
  }
  (qy.getMinorTicks = m_.getMinorTicks),
    (qy.getLabel = m_.getLabel),
    Lv.registerClass(S_);
  (I_.prototype._prepareParams = function (t, e, n) {
    n[1] < n[0] && (n = [NaN, NaN]),
      (this._dataMin = n[0]),
      (this._dataMax = n[1]);
    var i = (this._isOrdinal = 'ordinal' === t.type),
      r =
        ((this._needCrossZero =
          'interval' === t.type && e.getNeedCrossZero && e.getNeedCrossZero()),
        (this._modelMinRaw = e.get('min', !0))),
      r =
        (D(r)
          ? (this._modelMinNum = P_(t, r({min: n[0], max: n[1]})))
          : 'dataMin' !== r && (this._modelMinNum = P_(t, r)),
        (this._modelMaxRaw = e.get('max', !0)));
    D(r)
      ? (this._modelMaxNum = P_(t, r({min: n[0], max: n[1]})))
      : 'dataMax' !== r && (this._modelMaxNum = P_(t, r)),
      i
        ? (this._axisDataLen = e.getCategories().length)
        : 'boolean' ==
            typeof (t = F((n = e.get('boundaryGap')))
              ? n
              : [n || 0, n || 0])[0] || 'boolean' == typeof t[1]
        ? (this._boundaryGapInner = [0, 0])
        : (this._boundaryGapInner = [kr(t[0], 1), kr(t[1], 1)]);
  }),
    (I_.prototype.calculate = function () {
      var t = this._isOrdinal,
        e = this._dataMin,
        n = this._dataMax,
        i = this._axisDataLen,
        r = this._boundaryGapInner,
        o = t ? null : n - e || Math.abs(e),
        a = 'dataMin' === this._modelMinRaw ? e : this._modelMinNum,
        s = 'dataMax' === this._modelMaxRaw ? n : this._modelMaxNum,
        l = null != a,
        u = null != s,
        e =
          (null == a && (a = t ? (i ? 0 : NaN) : e - r[0] * o),
          null == s && (s = t ? (i ? i - 1 : NaN) : n + r[1] * o),
          (null != a && isFinite(a)) || (a = NaN),
          (null != s && isFinite(s)) || (s = NaN),
          xt(a) || xt(s) || (t && !i)),
        n =
          (this._needCrossZero &&
            (a = 0 < a && 0 < s && !l ? 0 : a) < 0 &&
            s < 0 &&
            !u &&
            (s = 0),
          this._determinedMin),
        r = this._determinedMax;
      return (
        null != n && ((a = n), (l = !0)),
        null != r && ((s = r), (u = !0)),
        {min: a, max: s, minFixed: l, maxFixed: u, isBlank: e}
      );
    }),
    (I_.prototype.modifyDataMinMax = function (t, e) {
      this[k_[t]] = e;
    }),
    (I_.prototype.setDeterminedMinMax = function (t, e) {
      this[D_[t]] = e;
    }),
    (I_.prototype.freeze = function () {
      this.frozen = !0;
    });
  var C_ = I_;
  function I_(t, e, n) {
    this._prepareParams(t, e, n);
  }
  var D_ = {min: '_determinedMin', max: '_determinedMax'},
    k_ = {min: '_dataMin', max: '_dataMax'};
  function A_(t, e, n) {
    var i = t.rawExtentInfo;
    return i || ((i = new C_(t, e, n)), (t.rawExtentInfo = i)), i;
  }
  function P_(t, e) {
    return null == e ? null : xt(e) ? NaN : t.parse(e);
  }
  function L_(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l = t.type,
      u = A_(t, e, t.getExtent()).calculate(),
      t = (t.setBlank(u.isBlank), u.min),
      h = u.max,
      c = e.ecModel;
    return (
      c &&
        'time' === l &&
        ((l = o_('bar', c)),
        (n = !1),
        z(l, function (t) {
          n = n || t.getBaseAxis() === e.axis;
        }),
        n) &&
        ((c = a_(l)),
        (l = t),
        (i = h),
        (c = c),
        (s = (s = (r = e).axis.getExtent())[1] - s[0]),
        void 0 !==
          (c = (function (t, e, n) {
            if (t && e)
              return null != (t = t[r_(e)]) && null != n ? t[i_(n)] : t;
          })(c, r.axis)) &&
          ((o = 1 / 0),
          z(c, function (t) {
            o = Math.min(t.offset, o);
          }),
          (a = -1 / 0),
          z(c, function (t) {
            a = Math.max(t.offset + t.width, a);
          }),
          (o = Math.abs(o)),
          (a = Math.abs(a)),
          (i += (a / (r = o + a)) * (s = (c = i - l) / (1 - (o + a) / s) - c)),
          (l -= (o / r) * s)),
        (t = (c = {min: l, max: i}).min),
        (h = c.max)),
      {extent: [t, h], fixMin: u.minFixed, fixMax: u.maxFixed}
    );
  }
  function O_(t, e) {
    var n = L_(t, e),
      i = n.extent,
      r = e.get('splitNumber'),
      o = (t instanceof S_ && (t.base = e.get('logBase')), t.type),
      a = e.get('interval'),
      o = 'interval' === o || 'time' === o;
    t.setExtent(i[0], i[1]),
      t.calcNiceExtent({
        splitNumber: r,
        fixMin: n.fixMin,
        fixMax: n.fixMax,
        minInterval: o ? e.get('minInterval') : null,
        maxInterval: o ? e.get('maxInterval') : null,
      }),
      null != a && t.setInterval && t.setInterval(a);
  }
  function R_(t, e) {
    if ((e = e || t.get('type')))
      switch (e) {
        case 'category':
          return new Xv({
            ordinalMeta: t.getOrdinalMeta
              ? t.getOrdinalMeta()
              : t.getCategories(),
            extent: [1 / 0, -1 / 0],
          });
        case 'time':
          return new c_({
            locale: t.ecModel.getLocaleModel(),
            useUTC: t.ecModel.get('useUTC'),
          });
        default:
          return new (Lv.getClass(e) || $v)();
      }
  }
  function B_(n) {
    var i,
      e,
      r,
      t = n.getLabelModel().get('formatter'),
      o = 'category' === n.type ? n.scale.getExtent()[0] : null;
    return 'time' === n.scale.type
      ? ((r = t),
        function (t, e) {
          return n.scale.getFormattedLabel(t, e, r);
        })
      : V(t)
      ? ((e = t),
        function (t) {
          t = n.scale.getLabel(t);
          return e.replace('{value}', null != t ? t : '');
        })
      : D(t)
      ? ((i = t),
        function (t, e) {
          return (
            null != o && (e = t.value - o),
            i(z_(n, t), e, null != t.level ? {level: t.level} : null)
          );
        })
      : function (t) {
          return n.scale.getLabel(t);
        };
  }
  function z_(t, e) {
    return 'category' === t.type ? t.scale.getLabel(e) : e.value;
  }
  function E_(t) {
    var e = t.model,
      n = t.scale;
    if (e.get(['axisLabel', 'show']) && !n.isBlank()) {
      var i,
        r,
        o = n.getExtent(),
        a = n instanceof Xv ? n.count() : (i = n.getTicks()).length,
        s = t.getLabelModel(),
        l = B_(t),
        u = 1;
      40 < a && (u = Math.ceil(a / 40));
      for (var h, c, p, d = 0; d < a; d += u) {
        var f = l(i ? i[d] : {value: o[0] + d}, d),
          f = s.getTextRect(f),
          g =
            ((f = f),
            (h = s.get('rotate') || 0),
            (c = p = g = c = void 0),
            (h = (h * Math.PI) / 180),
            (c = f.width),
            (g = f.height),
            (p = c * Math.abs(Math.cos(h)) + Math.abs(g * Math.sin(h))),
            (c = c * Math.abs(Math.sin(h)) + Math.abs(g * Math.cos(h))),
            new Z(f.x, f.y, p, c));
        r ? r.union(g) : (r = g);
      }
      return r;
    }
  }
  function N_(t) {
    t = t.get('interval');
    return null == t ? 'auto' : t;
  }
  function F_(t) {
    return 'category' === t.type && 0 === N_(t.getLabelModel());
  }
  function V_(e, t) {
    var n = {};
    return (
      z(e.mapDimensionsAll(t), function (t) {
        n[Av(e, t)] = !0;
      }),
      ht(n)
    );
  }
  (W_.prototype.getNeedCrossZero = function () {
    return !this.option.scale;
  }),
    (W_.prototype.getCoordSysModel = function () {});
  var H_ = W_;
  function W_() {}
  var Qy = Object.freeze({
      __proto__: null,
      createDimensions: function (t, e) {
        return Mv(t, e).dimensions;
      },
      createList: function (t) {
        return Pv(null, t);
      },
      createScale: function (t, e) {
        var n = e;
        return (
          (e = R_((n = e instanceof Fc ? n : new Fc(e)))).setExtent(t[0], t[1]),
          O_(e, n),
          e
        );
      },
      createSymbol: r0,
      createTextStyle: function (t, e) {
        return vc(t, null, null, 'normal' !== (e = e || {}).state);
      },
      dataStack: {
        isDimensionStacked: kv,
        enableDataStack: Dv,
        getStackedDimension: Av,
      },
      enableHoverEmphasis: Nl,
      getECData: k,
      getLayoutRect: Fp,
      mixinAxisModelCommonMethods: function (t) {
        at(t, H_);
      },
    }),
    G_ = [],
    U_ = {
      registerPreprocessor: Bm,
      registerProcessor: zm,
      registerPostInit: Em,
      registerPostUpdate: Nm,
      registerUpdateLifecycle: Fm,
      registerAction: Vm,
      registerCoordinateSystem: Hm,
      registerLayout: Wm,
      registerVisual: Gm,
      registerTransform: qm,
      registerLoading: Ym,
      registerMap: Xm,
      registerImpl: function (t, e) {
        z0[t] = e;
      },
      PRIORITY: $y,
      ComponentModel: g,
      ComponentView: $g,
      SeriesModel: Gg,
      ChartView: ny,
      registerComponentModel: function (t) {
        g.registerClass(t);
      },
      registerComponentView: function (t) {
        $g.registerClass(t);
      },
      registerSeriesModel: function (t) {
        Gg.registerClass(t);
      },
      registerChartView: function (t) {
        ny.registerClass(t);
      },
      registerSubTypeDefaulter: function (t, e) {
        g.registerSubTypeDefaulter(t, e);
      },
      registerPainter: function (t, e) {
        $r(t, e);
      },
    };
  function Z_(t) {
    F(t)
      ? z(t, function (t) {
          Z_(t);
        })
      : 0 <= I(G_, t) ||
        (G_.push(t), (t = D(t) ? {install: t} : t).install(U_));
  }
  var Y_ = 1e-8;
  function X_(t, e) {
    return Math.abs(t - e) < Y_;
  }
  function q_(t, e, n) {
    var i = 0,
      r = t[0];
    if (r) {
      for (var o = 1; o < t.length; o++) {
        var a = t[o];
        (i += os(r[0], r[1], a[0], a[1], e, n)), (r = a);
      }
      var s = t[0];
      return (
        (X_(r[0], s[0]) && X_(r[1], s[1])) ||
          (i += os(r[0], r[1], s[0], s[1], e, n)),
        0 !== i
      );
    }
  }
  var j_ = [];
  function K_(t, e) {
    for (var n = 0; n < t.length; n++) ee(t[n], t[n], e);
  }
  function $_(t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      (o = i ? i.project(o) : o) &&
        isFinite(o[0]) &&
        isFinite(o[1]) &&
        (ne(e, e, o), ie(n, n, o));
    }
  }
  (Q_.prototype.setCenter = function (t) {
    this._center = t;
  }),
    (Q_.prototype.getCenter = function () {
      return this._center || (this._center = this.calcCenter());
    });
  Jy = Q_;
  function Q_(t) {
    this.name = t;
  }
  var J_,
    t1,
    e1 = function (t, e) {
      (this.type = 'polygon'), (this.exterior = t), (this.interiors = e);
    },
    n1 = function (t) {
      (this.type = 'linestring'), (this.points = t);
    },
    i1 =
      (u(r1, (J_ = Jy)),
      (r1.prototype.calcCenter = function () {
        for (var t, e = this.geometries, n = 0, i = 0; i < e.length; i++) {
          var r = e[i],
            o = r.exterior,
            o = o && o.length;
          n < o && ((t = r), (n = o));
        }
        if (t) {
          for (
            var a = t.exterior,
              s = 0,
              l = 0,
              u = 0,
              h = a.length,
              c = a[h - 1][0],
              p = a[h - 1][1],
              d = 0;
            d < h;
            d++
          ) {
            var f = a[d][0],
              g = a[d][1],
              y = c * g - f * p;
            (s += y), (l += (c + f) * y), (u += (p + g) * y), (c = f), (p = g);
          }
          return s ? [l / s / 3, u / s / 3, s] : [a[0][0] || 0, a[0][1] || 0];
        }
        var m = this.getBoundingRect();
        return [m.x + m.width / 2, m.y + m.height / 2];
      }),
      (r1.prototype.getBoundingRect = function (e) {
        var n,
          i,
          t = this._rect;
        return (
          (t && !e) ||
            ((n = [1 / 0, 1 / 0]),
            (i = [-1 / 0, -1 / 0]),
            z(this.geometries, function (t) {
              'polygon' === t.type
                ? $_(t.exterior, n, i, e)
                : z(t.points, function (t) {
                    $_(t, n, i, e);
                  });
            }),
            (isFinite(n[0]) &&
              isFinite(n[1]) &&
              isFinite(i[0]) &&
              isFinite(i[1])) ||
              (n[0] = n[1] = i[0] = i[1] = 0),
            (t = new Z(n[0], n[1], i[0] - n[0], i[1] - n[1])),
            e) ||
            (this._rect = t),
          t
        );
      }),
      (r1.prototype.contain = function (t) {
        var e = this.getBoundingRect(),
          n = this.geometries;
        if (e.contain(t[0], t[1]))
          t: for (var i = 0, r = n.length; i < r; i++) {
            var o = n[i];
            if ('polygon' === o.type) {
              var a = o.exterior,
                s = o.interiors;
              if (q_(a, t[0], t[1])) {
                for (var l = 0; l < (s ? s.length : 0); l++)
                  if (q_(s[l], t[0], t[1])) continue t;
                return !0;
              }
            }
          }
        return !1;
      }),
      (r1.prototype.transformTo = function (t, e, n, i) {
        for (
          var r = this.getBoundingRect(),
            o = r.width / r.height,
            o = (n ? (i = i || n / o) : (n = o * i), new Z(t, e, n, i)),
            a = r.calculateTransform(o),
            s = this.geometries,
            l = 0;
          l < s.length;
          l++
        ) {
          var u = s[l];
          'polygon' === u.type
            ? (K_(u.exterior, a),
              z(u.interiors, function (t) {
                K_(t, a);
              }))
            : z(u.points, function (t) {
                K_(t, a);
              });
        }
        (r = this._rect).copy(o),
          (this._center = [r.x + r.width / 2, r.y + r.height / 2]);
      }),
      (r1.prototype.cloneShallow = function (t) {
        t = new r1(
          (t = null == t ? this.name : t),
          this.geometries,
          this._center
        );
        return (t._rect = this._rect), (t.transformTo = null), t;
      }),
      r1);
  function r1(t, e, n) {
    t = J_.call(this, t) || this;
    return (
      (t.type = 'geoJSON'),
      (t.geometries = e),
      (t._center = n && [n[0], n[1]]),
      t
    );
  }
  function o1(t, e) {
    t = t1.call(this, t) || this;
    return (t.type = 'geoSVG'), (t._elOnlyForCalculate = e), t;
  }
  function a1(t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = s1(t[i], e[i], n);
  }
  function s1(t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = ((s = t.charCodeAt(a) - 64) >> 1) ^ -(1 & s),
        l = ((l = t.charCodeAt(a + 1) - 64) >> 1) ^ -(1 & l);
      i.push([(r = s += r) / n, (o = l += o) / n]);
    }
    return i;
  }
  function l1(t, o) {
    var e, n, r;
    return N(
      ut(
        (t = (e = t).UTF8Encoding
          ? (null == (r = (n = e).UTF8Scale) && (r = 1024),
            z(n.features, function (t) {
              var e = t.geometry,
                n = e.encodeOffsets,
                i = e.coordinates;
              if (n)
                switch (e.type) {
                  case 'LineString':
                    e.coordinates = s1(i, n, r);
                    break;
                  case 'Polygon':
                  case 'MultiLineString':
                    a1(i, n, r);
                    break;
                  case 'MultiPolygon':
                    z(i, function (t, e) {
                      return a1(t, n[e], r);
                    });
                }
            }),
            (n.UTF8Encoding = !1),
            n)
          : e).features,
        function (t) {
          return (
            t.geometry && t.properties && 0 < t.geometry.coordinates.length
          );
        }
      ),
      function (t) {
        var e = t.properties,
          n = t.geometry,
          i = [];
        switch (n.type) {
          case 'Polygon':
            var r = n.coordinates;
            i.push(new e1(r[0], r.slice(1)));
            break;
          case 'MultiPolygon':
            z(n.coordinates, function (t) {
              t[0] && i.push(new e1(t[0], t.slice(1)));
            });
            break;
          case 'LineString':
            i.push(new n1([n.coordinates]));
            break;
          case 'MultiLineString':
            i.push(new n1(n.coordinates));
        }
        t = new i1(e[o || 'name'], i, e.cp);
        return (t.properties = e), t;
      }
    );
  }
  u(o1, (t1 = Jy)),
    (o1.prototype.calcCenter = function () {
      for (
        var t = this._elOnlyForCalculate,
          e = t.getBoundingRect(),
          e = [e.x + e.width / 2, e.y + e.height / 2],
          n = Re(j_),
          i = t;
        i && !i.isGeoSVGGraphicRoot;

      )
        ze(n, i.getLocalTransform(), n), (i = i.parent);
      return Ve(n, n), ee(e, e, n), e;
    });
  var ea = Object.freeze({
      __proto__: null,
      MAX_SAFE_INTEGER: 9007199254740991,
      asc: ro,
      getPercentWithPrecision: function (t, e, n) {
        return (t[e] && lo(t, n)[e]) || 0;
      },
      getPixelPrecision: so,
      getPrecision: oo,
      getPrecisionSafe: ao,
      isNumeric: vo,
      isRadianAroundZero: ho,
      linearMap: eo,
      nice: yo,
      numericToNumber: mo,
      parseDate: po,
      quantile: function (t, e) {
        var e = (t.length - 1) * e + 1,
          n = Math.floor(e),
          i = +t[n - 1];
        return (e = e - n) ? i + e * (t[n] - i) : i;
      },
      quantity: fo,
      quantityExponent: go,
      reformIntervals: function (t) {
        t.sort(function (t, e) {
          return (function t(e, n, i) {
            return (
              e.interval[i] < n.interval[i] ||
              (e.interval[i] === n.interval[i] &&
                (e.close[i] - n.close[i] == (i ? -1 : 1) || (!i && t(e, n, 1))))
            );
          })(t, e, 0)
            ? -1
            : 1;
        });
        for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
          for (var r = t[i].interval, o = t[i].close, a = 0; a < 2; a++)
            r[a] <= e && ((r[a] = e), (o[a] = a ? 1 : 1 - n)),
              (e = r[a]),
              (n = o[a]);
          r[0] === r[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++;
        }
        return t;
      },
      remRadian: uo,
      round: io,
    }),
    Jh = Object.freeze({__proto__: null, format: lp, parse: po}),
    np = Object.freeze({
      __proto__: null,
      Arc: uh,
      BezierCurve: oh,
      BoundingRect: Z,
      Circle: fu,
      CompoundPath: ph,
      Ellipse: vu,
      Group: Gr,
      Image: Cs,
      IncrementalDisplayable: n,
      Line: Ju,
      LinearGradient: mh,
      Polygon: Uu,
      Polyline: qu,
      RadialGradient: fh,
      Rect: Bs,
      Ring: Fu,
      Sector: Bu,
      Text: Vs,
      clipPointsByRect: oc,
      clipRectByRect: ac,
      createIcon: sc,
      extendPath: Uh,
      extendShape: Wh,
      getShapeClass: Yh,
      getTransform: tc,
      initProps: Oh,
      makeImage: qh,
      makePath: Xh,
      mergePath: Kh,
      registerShape: Zh,
      resizePath: $h,
      updateProps: Lh,
    }),
    Rc = Object.freeze({
      __proto__: null,
      addCommas: Mp,
      capitalFirst: function (t) {
        return t && t.charAt(0).toUpperCase() + t.substr(1);
      },
      encodeHTML: _e,
      formatTime: function (t, e, n) {
        ('week' !== t &&
          'month' !== t &&
          'quarter' !== t &&
          'half-year' !== t &&
          'year' !== t) ||
          (t = 'MM-dd\nyyyy');
        var i = (e = po(e))[(n = n ? 'getUTC' : 'get') + 'FullYear'](),
          r = e[n + 'Month']() + 1,
          o = e[n + 'Date'](),
          a = e[n + 'Hours'](),
          s = e[n + 'Minutes'](),
          l = e[n + 'Seconds'](),
          e = e[n + 'Milliseconds']();
        return (t = t
          .replace('MM', ap(r, 2))
          .replace('M', r)
          .replace('yyyy', i)
          .replace('yy', ap((i % 100) + '', 2))
          .replace('dd', ap(o, 2))
          .replace('d', o)
          .replace('hh', ap(a, 2))
          .replace('h', a)
          .replace('mm', ap(s, 2))
          .replace('m', s)
          .replace('ss', ap(l, 2))
          .replace('s', l)
          .replace('SSS', ap(e, 3)));
      },
      formatTpl: Ap,
      getTextRect: function (t, e, n, i, r, o, a, s) {
        return new Vs({
          style: {
            text: t,
            font: e,
            align: n,
            verticalAlign: i,
            padding: r,
            rich: o,
            overflow: a ? 'truncate' : null,
            lineHeight: s,
          },
        }).getBoundingRect();
      },
      getTooltipMarker: Pp,
      normalizeCssArray: Cp,
      toCamelCase: Tp,
      truncateText: la,
    }),
    Ac = Object.freeze({
      __proto__: null,
      bind: S,
      clone: y,
      curry: ct,
      defaults: E,
      each: z,
      extend: L,
      filter: ut,
      indexOf: I,
      inherits: ot,
      isArray: F,
      isFunction: D,
      isObject: O,
      isString: V,
      map: N,
      merge: d,
      reduce: lt,
    }),
    u1 = Bo();
  function h1(t) {
    return 'category' === t.type
      ? ((r = (e = t).getLabelModel()),
        (o = p1(e, r)),
        !r.get('show') || e.scale.isBlank()
          ? {labels: [], labelCategoryInterval: o.labelCategoryInterval}
          : o)
      : ((r = (n = t).scale.getTicks()),
        (i = B_(n)),
        {
          labels: N(r, function (t, e) {
            return {
              level: t.level,
              formattedLabel: i(t, e),
              rawLabel: n.scale.getLabel(t),
              tickValue: t.value,
            };
          }),
        });
    var n, i, e, r, o;
  }
  function c1(t, e) {
    var n, i, r, o, a, s;
    return 'category' === t.type
      ? ((e = e),
        (o = d1((n = t), 'ticks')),
        (a = N_(e)),
        (s = f1(o, a)) ||
          ((e.get('show') && !n.scale.isBlank()) || (i = []),
          (i = D(a)
            ? m1(n, a, !0)
            : 'auto' === a
            ? ((s = p1(n, n.getLabelModel())),
              (r = s.labelCategoryInterval),
              N(s.labels, function (t) {
                return t.tickValue;
              }))
            : y1(n, (r = a), !0)),
          g1(o, a, {ticks: i, tickCategoryInterval: r})))
      : {
          ticks: N(t.scale.getTicks(), function (t) {
            return t.value;
          }),
        };
  }
  function p1(t, e) {
    var n,
      i = d1(t, 'labels'),
      e = N_(e),
      r = f1(i, e);
    return (
      r ||
      g1(i, e, {
        labels: D(e)
          ? m1(t, e)
          : y1(
              t,
              (n =
                'auto' === e
                  ? null != (i = u1((r = t)).autoInterval)
                    ? i
                    : (u1(r).autoInterval = r.calculateCategoryInterval())
                  : e)
            ),
        labelCategoryInterval: n,
      })
    );
  }
  function d1(t, e) {
    return u1(t)[e] || (u1(t)[e] = []);
  }
  function f1(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }
  function g1(t, e, n) {
    return t.push({key: e, value: n}), n;
  }
  function y1(t, e, n) {
    for (
      var i = B_(t),
        r = t.scale,
        o = r.getExtent(),
        a = t.getLabelModel(),
        s = [],
        l = Math.max((e || 0) + 1, 1),
        e = o[0],
        u = r.count(),
        u =
          (0 !== e &&
            1 < l &&
            2 < u / l &&
            (e = Math.round(Math.ceil(e / l) * l)),
          F_(t)),
        t = a.get('showMinLabel') || u,
        a = a.get('showMaxLabel') || u,
        h = (t && e !== o[0] && c(o[0]), e);
      h <= o[1];
      h += l
    )
      c(h);
    function c(t) {
      var e = {value: t};
      s.push(
        n ? t : {formattedLabel: i(e), rawLabel: r.getLabel(e), tickValue: t}
      );
    }
    return a && h - l !== o[1] && c(o[1]), s;
  }
  function m1(t, i, r) {
    var o = t.scale,
      a = B_(t),
      s = [];
    return (
      z(o.getTicks(), function (t) {
        var e = o.getLabel(t),
          n = t.value;
        i(t.value, e) &&
          s.push(r ? n : {formattedLabel: a(t), rawLabel: e, tickValue: n});
      }),
      s
    );
  }
  var v1 = [0, 1],
    zc =
      ((_1.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          e = Math.max(e[0], e[1]);
        return n <= t && t <= e;
      }),
      (_1.prototype.containData = function (t) {
        return this.scale.contain(t);
      }),
      (_1.prototype.getExtent = function () {
        return this._extent.slice();
      }),
      (_1.prototype.getPixelPrecision = function (t) {
        return so(t || this.scale.getExtent(), this._extent);
      }),
      (_1.prototype.setExtent = function (t, e) {
        var n = this._extent;
        (n[0] = t), (n[1] = e);
      }),
      (_1.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale;
        return (
          (t = i.normalize(t)),
          this.onBand && 'ordinal' === i.type && x1((n = n.slice()), i.count()),
          eo(t, v1, n, e)
        );
      }),
      (_1.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale,
          i =
            (this.onBand &&
              'ordinal' === i.type &&
              x1((n = n.slice()), i.count()),
            eo(t, n, v1, e));
        return this.scale.scale(i);
      }),
      (_1.prototype.pointToData = function (t, e) {}),
      (_1.prototype.getTicksCoords = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l = (t = t || {}).tickModel || this.getTickModel(),
          u = N(
            c1(this, l).ticks,
            function (t) {
              return {
                coord: this.dataToCoord(
                  'ordinal' === this.scale.type
                    ? this.scale.getRawOrdinalNumber(t)
                    : t
                ),
                tickValue: t,
              };
            },
            this
          ),
          l = l.get('alignWithLabel');
        function h(t, e) {
          return (t = io(t)), (e = io(e)), a ? e < t : t < e;
        }
        return (
          (e = this),
          (n = u),
          (l = l),
          (t = t.clamp),
          (s = n.length),
          e.onBand &&
            !l &&
            s &&
            ((l = e.getExtent()),
            1 === s
              ? ((n[0].coord = l[0]), (i = n[1] = {coord: l[1]}))
              : ((o = n[s - 1].tickValue - n[0].tickValue),
                (r = (n[s - 1].coord - n[0].coord) / o),
                z(n, function (t) {
                  t.coord -= r / 2;
                }),
                (e = 1 + (o = e.scale.getExtent())[1] - n[s - 1].tickValue),
                (i = {coord: n[s - 1].coord + r * e}),
                n.push(i)),
            (a = l[0] > l[1]),
            h(n[0].coord, l[0]) && (t ? (n[0].coord = l[0]) : n.shift()),
            t && h(l[0], n[0].coord) && n.unshift({coord: l[0]}),
            h(l[1], i.coord) && (t ? (i.coord = l[1]) : n.pop()),
            t) &&
            h(i.coord, l[1]) &&
            n.push({coord: l[1]}),
          u
        );
      }),
      (_1.prototype.getMinorTicksCoords = function () {
        var t;
        return 'ordinal' === this.scale.type
          ? []
          : ((t = this.model.getModel('minorTick').get('splitNumber')),
            N(
              this.scale.getMinorTicks((t = 0 < t && t < 100 ? t : 5)),
              function (t) {
                return N(
                  t,
                  function (t) {
                    return {coord: this.dataToCoord(t), tickValue: t};
                  },
                  this
                );
              },
              this
            ));
      }),
      (_1.prototype.getViewLabels = function () {
        return h1(this).labels;
      }),
      (_1.prototype.getLabelModel = function () {
        return this.model.getModel('axisLabel');
      }),
      (_1.prototype.getTickModel = function () {
        return this.model.getModel('axisTick');
      }),
      (_1.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          e = e[1] - e[0] + (this.onBand ? 1 : 0),
          t = (0 === e && (e = 1), Math.abs(t[1] - t[0]));
        return Math.abs(t) / e;
      }),
      (_1.prototype.calculateCategoryInterval = function () {
        r = (n = d = this).getLabelModel();
        var t = {
            axisRotate: n.getRotate
              ? n.getRotate()
              : n.isHorizontal && !n.isHorizontal()
              ? 90
              : 0,
            labelRotate: r.get('rotate') || 0,
            font: r.getFont(),
          },
          e = B_(d),
          n = ((t.axisRotate - t.labelRotate) / 180) * Math.PI,
          i = (r = d.scale).getExtent(),
          r = r.count();
        if (i[1] - i[0] < 1) return 0;
        for (
          var o = 1,
            a = (40 < r && (o = Math.max(1, Math.floor(r / 40))), i[0]),
            s = d.dataToCoord(a + 1) - d.dataToCoord(a),
            l = Math.abs(s * Math.cos(n)),
            s = Math.abs(s * Math.sin(n)),
            u = 0,
            h = 0;
          a <= i[1];
          a += o
        )
          var c = 1.3 * (p = Tr(e({value: a}), t.font, 'center', 'top')).width,
            p = 1.3 * p.height,
            u = Math.max(u, c, 7),
            h = Math.max(h, p, 7);
        var n = u / l,
          l = h / s,
          s =
            (isNaN(n) && (n = 1 / 0),
            isNaN(l) && (l = 1 / 0),
            Math.max(0, Math.floor(Math.min(n, l)))),
          n = u1(d.model),
          l = d.getExtent(),
          d = n.lastAutoInterval,
          f = n.lastTickCount;
        return (
          null != d &&
          null != f &&
          Math.abs(d - s) <= 1 &&
          Math.abs(f - r) <= 1 &&
          s < d &&
          n.axisExtent0 === l[0] &&
          n.axisExtent1 === l[1]
            ? (s = d)
            : ((n.lastTickCount = r),
              (n.lastAutoInterval = s),
              (n.axisExtent0 = l[0]),
              (n.axisExtent1 = l[1])),
          s
        );
      }),
      _1);
  function _1(t, e, n) {
    (this.onBand = !1),
      (this.inverse = !1),
      (this.dim = t),
      (this.scale = e),
      (this._extent = n || [0, 0]);
  }
  function x1(t, e) {
    e = (t[1] - t[0]) / e / 2;
    (t[0] += e), (t[1] -= e);
  }
  var w1 = 2 * Math.PI,
    b1 = ts.CMD,
    S1 = ['top', 'right', 'bottom', 'left'];
  function M1(t, e, n, i, r, o, a, s) {
    var l = r - t,
      u = o - e,
      n = n - t,
      i = i - e,
      h = Math.sqrt(n * n + i * i),
      l = (l * (n /= h) + u * (i /= h)) / h,
      u = (s && (l = Math.min(Math.max(l, 0), 1)), (a[0] = t + (l *= h) * n)),
      s = (a[1] = e + l * i);
    return Math.sqrt((u - r) * (u - r) + (s - o) * (s - o));
  }
  function T1(t, e, n, i, r, o, a) {
    n < 0 && ((t += n), (n = -n)), i < 0 && ((e += i), (i = -i));
    (n = t + n),
      (i = e + i),
      (t = a[0] = Math.min(Math.max(r, t), n)),
      (n = a[1] = Math.min(Math.max(o, e), i));
    return Math.sqrt((t - r) * (t - r) + (n - o) * (n - o));
  }
  var C1 = [];
  function I1(t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p = 0,
        d = 0,
        f = 0,
        g = 0,
        y = 1 / 0,
        m = e.data,
        v = t.x,
        _ = t.y,
        x = 0;
      x < m.length;

    ) {
      var w = m[x++],
        b = (1 === x && ((f = p = m[x]), (g = d = m[x + 1])), y);
      switch (w) {
        case b1.M:
          (p = f = m[x++]), (d = g = m[x++]);
          break;
        case b1.L:
          (b = M1(p, d, m[x], m[x + 1], v, _, C1, !0)),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case b1.C:
          (b = Gn(
            p,
            d,
            m[x++],
            m[x++],
            m[x++],
            m[x++],
            m[x],
            m[x + 1],
            v,
            _,
            C1
          )),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case b1.Q:
          (b = qn(p, d, m[x++], m[x++], m[x], m[x + 1], v, _, C1)),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case b1.A:
          var S = m[x++],
            M = m[x++],
            T = m[x++],
            C = m[x++],
            I = m[x++],
            D = m[x++],
            k = ((x += 1), !!(1 - m[x++])),
            A = Math.cos(I) * T + S,
            P = Math.sin(I) * C + M;
          x <= 1 && ((f = A), (g = P)),
            (P = (A = I) + D),
            (k = k),
            (a = ((v - S) * (o = C)) / T + S),
            (s = _),
            (l = C1),
            (c = h = u = void 0),
            (a -= i = S),
            (s -= r = M),
            (u = Math.sqrt(a * a + s * s)),
            (h = (a /= u) * o + i),
            (c = (s /= u) * o + r),
            (b =
              Math.abs(A - P) % w1 < 1e-4 ||
              ((P = k ? ((k = A), (A = is(P)), is(k)) : ((A = is(A)), is(P))) <
                A && (P += w1),
              (k = Math.atan2(s, a)) < 0 && (k += w1),
              A <= k && k <= P) ||
              (A <= k + w1 && k + w1 <= P)
                ? ((l[0] = h), (l[1] = c), u - o)
                : (c =
                    ((k = o * Math.cos(A) + i) - a) * (k - a) +
                    ((h = o * Math.sin(A) + r) - s) * (h - s)) <
                  (i =
                    ((u = o * Math.cos(P) + i) - a) * (u - a) +
                    ((A = o * Math.sin(P) + r) - s) * (A - s))
                ? ((l[0] = k), (l[1] = h), Math.sqrt(c))
                : ((l[0] = u), (l[1] = A), Math.sqrt(i))),
            (p = Math.cos(I + D) * T + S),
            (d = Math.sin(I + D) * C + M);
          break;
        case b1.R:
          b = T1((f = p = m[x++]), (g = d = m[x++]), m[x++], m[x++], v, _, C1);
          break;
        case b1.Z:
          (b = M1(p, d, f, g, v, _, C1, !0)), (p = f), (d = g);
      }
      b < y && ((y = b), n.set(C1[0], C1[1]));
    }
    return y;
  }
  var D1 = new H(),
    k1 = new H(),
    A1 = new H(),
    P1 = new H(),
    L1 = new H();
  function O1(t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        i = t.getTextContent();
      if (i && n) {
        var r = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          a = r.candidates || S1,
          s = i.getBoundingRect().clone(),
          l = (s.applyTransform(i.getComputedTransform()), 1 / 0),
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && Ve([], h),
          p = e.get('length2') || 0;
        u && A1.copy(u);
        for (var d, f = 0; f < a.length; f++) {
          var g = a[f],
            y = ((b = w = x = _ = v = m = y = void 0), g),
            m = 0,
            v = s,
            _ = D1,
            x = P1,
            w = v.width,
            b = v.height;
          switch (y) {
            case 'top':
              _.set(v.x + w / 2, v.y - m), x.set(0, -1);
              break;
            case 'bottom':
              _.set(v.x + w / 2, v.y + b + m), x.set(0, 1);
              break;
            case 'left':
              _.set(v.x - m, v.y + b / 2), x.set(-1, 0);
              break;
            case 'right':
              _.set(v.x + w + m, v.y + b / 2), x.set(1, 0);
          }
          H.scaleAndAdd(k1, D1, P1, p), k1.transform(c);
          (g = t.getBoundingRect()),
            (g = u
              ? u.distance(k1)
              : t instanceof vs
              ? I1(k1, t.path, A1)
              : ((y = A1),
                (d = T1((d = g).x, g.y, g.width, g.height, k1.x, k1.y, C1)),
                y.set(C1[0], C1[1]),
                d));
          g < l &&
            ((l = g),
            k1.transform(h),
            A1.transform(h),
            A1.toArray(o[0]),
            k1.toArray(o[1]),
            D1.toArray(o[2]));
        }
        z1(o, e.get('minTurnAngle')), n.setShape({points: o});
      }
    }
  }
  var R1 = [],
    B1 = new H();
  function z1(t, e) {
    var n, i;
    e <= 180 &&
      0 < e &&
      ((e = (e / 180) * Math.PI),
      D1.fromArray(t[0]),
      k1.fromArray(t[1]),
      A1.fromArray(t[2]),
      H.sub(P1, D1, k1),
      H.sub(L1, A1, k1),
      (i = P1.len()),
      (n = L1.len()),
      i < 0.001 ||
        n < 0.001 ||
        (P1.scale(1 / i),
        L1.scale(1 / n),
        (i = P1.dot(L1)),
        Math.cos(e) < i &&
          ((n = M1(k1.x, k1.y, A1.x, A1.y, D1.x, D1.y, R1, !1)),
          B1.fromArray(R1),
          B1.scaleAndAdd(L1, n / Math.tan(Math.PI - e)),
          (i =
            A1.x !== k1.x
              ? (B1.x - k1.x) / (A1.x - k1.x)
              : (B1.y - k1.y) / (A1.y - k1.y)),
          isNaN(i) ||
            (i < 0 ? H.copy(B1, k1) : 1 < i && H.copy(B1, A1),
            B1.toArray(t[1])))));
  }
  function E1(t, e, n, i) {
    var r = 'normal' === n,
      n = r ? t : t.ensureState(n),
      e = ((n.ignore = e), i.get('smooth')),
      e =
        (e && !0 === e && (e = 0.3),
        (n.shape = n.shape || {}),
        0 < e && (n.shape.smooth = e),
        i.getModel('lineStyle').getLineStyle());
    r ? t.useStyle(e) : (n.style = e);
  }
  function N1(t, e) {
    var n = e.smooth,
      i = e.points;
    if (i)
      if ((t.moveTo(i[0][0], i[0][1]), 0 < n && 3 <= i.length)) {
        var e = $t(i[0], i[1]),
          r = $t(i[1], i[2]);
        e && r
          ? ((n = Math.min(e, r) * n),
            (e = te([], i[1], i[0], n / e)),
            (n = te([], i[1], i[2], n / r)),
            (r = te([], e, n, 0.5)),
            t.bezierCurveTo(e[0], e[1], e[0], e[1], r[0], r[1]),
            t.bezierCurveTo(n[0], n[1], n[0], n[1], i[2][0], i[2][1]))
          : (t.lineTo(i[1][0], i[1][1]), t.lineTo(i[2][0], i[2][1]));
      } else for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1]);
  }
  function F1(t, e, n) {
    var i = t.getTextGuideLine(),
      r = t.getTextContent();
    if (r) {
      for (
        var o = e.normal, a = o.get('show'), s = r.ignore, l = 0;
        l < al.length;
        l++
      ) {
        var u,
          h = al[l],
          c = e[h],
          p = 'normal' === h;
        c &&
          ((u = c.get('show')),
          (p ? s : R(r.states[h] && r.states[h].ignore, s)) || !R(u, a)
            ? ((u = p ? i : i && i.states[h]) && (u.ignore = !0),
              i && E1(i, !0, h, c))
            : (i ||
                ((i = new qu()),
                t.setTextGuideLine(i),
                p || (!s && a) || E1(i, !0, 'normal', e.normal),
                t.stateProxy && (i.stateProxy = t.stateProxy)),
              E1(i, !1, h, c)));
      }
      i &&
        (E(i.style, n),
        (i.style.fill = null),
        (n = o.get('showAbove')),
        ((t.textGuideLineConfig = t.textGuideLineConfig || {}).showAbove =
          n || !1),
        (i.buildPath = N1));
    } else i && t.removeTextGuideLine();
  }
  function V1(t, e) {
    for (
      var n = {normal: t.getModel((e = e || 'labelLine'))}, i = 0;
      i < ol.length;
      i++
    ) {
      var r = ol[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function H1(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u = t[n];
      u.defaultAttr.ignore ||
        ((r = (i = u.label).getComputedTransform()),
        (o = i.getBoundingRect()),
        (a = !r || (r[1] < 1e-5 && r[2] < 1e-5)),
        (l = i.style.margin || 0),
        (s = o.clone()).applyTransform(r),
        (s.x -= l / 2),
        (s.y -= l / 2),
        (s.width += l),
        (s.height += l),
        (l = a ? new Th(o, r) : null),
        e.push({
          label: i,
          labelLine: u.labelLine,
          rect: s,
          localRect: o,
          obb: l,
          priority: u.priority,
          defaultAttr: u.defaultAttr,
          layoutOption: u.computedLayoutOption,
          axisAligned: a,
          transform: r,
        }));
    }
    return e;
  }
  function W1(s, l, u, t, e, n) {
    var h = s.length;
    if (!(h < 2)) {
      s.sort(function (t, e) {
        return t.rect[l] - e.rect[l];
      });
      for (var i = 0, o = !1, r = 0, a = 0; a < h; a++) {
        var c,
          p = s[a],
          d = p.rect;
        (c = d[l] - i) < 0 && ((d[l] -= c), (p.label[l] -= c), (o = !0)),
          (r += Math.max(-c, 0)),
          (i = d[l] + d[u]);
      }
      0 < r && n && x(-r / h, 0, h);
      var f,
        g,
        y = s[0],
        m = s[h - 1];
      return (
        v(),
        f < 0 && w(-f, 0.8),
        g < 0 && w(g, 0.8),
        v(),
        _(f, g, 1),
        _(g, f, -1),
        v(),
        f < 0 && b(-f),
        g < 0 && b(g),
        o
      );
    }
    function v() {
      (f = y.rect[l] - t), (g = e - m.rect[l] - m.rect[u]);
    }
    function _(t, e, n) {
      t < 0 &&
        (0 < (e = Math.min(e, -t))
          ? (x(e * n, 0, h), (e = e + t) < 0 && w(-e * n, 1))
          : w(-t * n, 1));
    }
    function x(t, e, n) {
      0 !== t && (o = !0);
      for (var i = e; i < n; i++) {
        var r = s[i];
        (r.rect[l] += t), (r.label[l] += t);
      }
    }
    function w(t, e) {
      for (var n = [], i = 0, r = 1; r < h; r++) {
        var o = s[r - 1].rect,
          o = Math.max(s[r].rect[l] - o[l] - o[u], 0);
        n.push(o), (i += o);
      }
      if (i) {
        var a = Math.min(Math.abs(t) / i, e);
        if (0 < t) for (r = 0; r < h - 1; r++) x(n[r] * a, 0, r + 1);
        else for (r = h - 1; 0 < r; r--) x(-(n[r - 1] * a), r, h);
      }
    }
    function b(t) {
      for (
        var e = t < 0 ? -1 : 1,
          n = ((t = Math.abs(t)), Math.ceil(t / (h - 1))),
          i = 0;
        i < h - 1;
        i++
      )
        if ((0 < e ? x(n, 0, i + 1) : x(-n, h - i - 1, h), (t -= n) <= 0))
          return;
    }
  }
  function G1(t, e, n, i) {
    return W1(t, 'y', 'height', e, n, i);
  }
  function U1(t) {
    var e = [],
      n =
        (t.sort(function (t, e) {
          return e.priority - t.priority;
        }),
        new Z(0, 0, 0, 0));
    function i(t) {
      var e;
      t.ignore ||
        (null == (e = t.ensureState('emphasis')).ignore && (e.ignore = !1)),
        (t.ignore = !0);
    }
    for (var r = 0; r < t.length; r++) {
      for (
        var o = t[r],
          a = o.axisAligned,
          s = o.localRect,
          l = o.transform,
          u = o.label,
          h = o.labelLine,
          c =
            (n.copy(o.rect),
            (n.width -= 0.1),
            (n.height -= 0.1),
            (n.x += 0.05),
            (n.y += 0.05),
            o.obb),
          p = !1,
          d = 0;
        d < e.length;
        d++
      ) {
        var f = e[d];
        if (n.intersect(f.rect)) {
          if (a && f.axisAligned) {
            p = !0;
            break;
          }
          if (
            (f.obb || (f.obb = new Th(f.localRect, f.transform)),
            (c = c || new Th(s, l)).intersect(f.obb))
          ) {
            p = !0;
            break;
          }
        }
      }
      p
        ? (i(u), h && i(h))
        : (u.attr('ignore', o.defaultAttr.ignore),
          h && h.attr('ignore', o.defaultAttr.labelGuideIgnore),
          e.push(o));
    }
  }
  function Z1(t, e) {
    var n = t.label,
      e = e && e.getTextGuideLine();
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: (function (t) {
        if (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
          return e;
        }
      })(e && e.shape.points),
    };
  }
  var Y1 = ['align', 'verticalAlign', 'width', 'height', 'fontSize'],
    X1 = new _r(),
    q1 = Bo(),
    j1 = Bo();
  function K1(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      null != e[r] && (t[r] = e[r]);
    }
  }
  var $1 = ['x', 'y', 'rotation'],
    Q1 =
      ((J1.prototype.clearLabels = function () {
        (this._labelList = []), (this._chartViewList = []);
      }),
      (J1.prototype._addLabel = function (t, e, n, i, r) {
        var o,
          a = i.style,
          s = i.__hostTarget.textConfig || {},
          l = i.getComputedTransform(),
          u = i.getBoundingRect().plain(),
          l =
            (Z.applyTransform(u, u, l),
            l
              ? X1.setLocalTransform(l)
              : ((X1.x = X1.y = X1.rotation = X1.originX = X1.originY = 0),
                (X1.scaleX = X1.scaleY = 1)),
            (X1.rotation = is(X1.rotation)),
            i.__hostTarget),
          h =
            (l &&
              ((o = l.getBoundingRect().plain()),
              (h = l.getComputedTransform()),
              Z.applyTransform(o, o, h)),
            o && l.getTextGuideLine());
        this._labelList.push({
          label: i,
          labelLine: h,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: r,
          computedLayoutOption: null,
          rect: u,
          hostRect: o,
          priority: o ? o.width * o.height : 0,
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: h && h.ignore,
            x: X1.x,
            y: X1.y,
            scaleX: X1.scaleX,
            scaleY: X1.scaleY,
            rotation: X1.rotation,
            style: {
              x: a.x,
              y: a.y,
              align: a.align,
              verticalAlign: a.verticalAlign,
              width: a.width,
              height: a.height,
              fontSize: a.fontSize,
            },
            cursor: i.cursor,
            attachedPos: s.position,
            attachedRot: s.rotation,
          },
        });
      }),
      (J1.prototype.addLabelsOfSeries = function (t) {
        var n = this,
          i = (this._chartViewList.push(t), t.__model),
          r = i.get('labelLayout');
        (D(r) || ht(r).length) &&
          t.group.traverse(function (t) {
            if (t.ignore) return !0;
            var e = t.getTextContent(),
              t = k(t);
            e &&
              !e.disableLabelLayout &&
              n._addLabel(t.dataIndex, t.dataType, i, e, r);
          });
      }),
      (J1.prototype.updateLayoutConfig = function (t) {
        var e = t.getWidth(),
          n = t.getHeight();
        for (var i = 0; i < this._labelList.length; i++) {
          var r = this._labelList[i],
            o = r.label,
            a = o.__hostTarget,
            s = r.defaultAttr,
            l = void 0,
            l = D(r.layoutOption) ? r.layoutOption(Z1(r, a)) : r.layoutOption,
            u = ((r.computedLayoutOption = l = l || {}), Math.PI / 180),
            h =
              (a &&
                a.setTextConfig({
                  local: !1,
                  position: null != l.x || null != l.y ? null : s.attachedPos,
                  rotation: null != l.rotate ? l.rotate * u : s.attachedRot,
                  offset: [l.dx || 0, l.dy || 0],
                }),
              !1);
          null != l.x
            ? ((o.x = no(l.x, e)), o.setStyle('x', 0), (h = !0))
            : ((o.x = s.x), o.setStyle('x', s.style.x)),
            null != l.y
              ? ((o.y = no(l.y, n)), o.setStyle('y', 0), (h = !0))
              : ((o.y = s.y), o.setStyle('y', s.style.y)),
            l.labelLinePoints &&
              (c = a.getTextGuideLine()) &&
              (c.setShape({points: l.labelLinePoints}), (h = !1)),
            (q1(o).needsUpdateLabelLine = h),
            (o.rotation = null != l.rotate ? l.rotate * u : s.rotation),
            (o.scaleX = s.scaleX),
            (o.scaleY = s.scaleY);
          for (var c, p = 0; p < Y1.length; p++) {
            var d = Y1[p];
            o.setStyle(d, (null != l[d] ? l : s.style)[d]);
          }
          l.draggable
            ? ((o.draggable = !0),
              (o.cursor = 'move'),
              a &&
                ((c = r.seriesModel),
                null != r.dataIndex &&
                  (c = r.seriesModel
                    .getData(r.dataType)
                    .getItemModel(r.dataIndex)),
                o.on(
                  'drag',
                  (function (t, e) {
                    return function () {
                      O1(t, e);
                    };
                  })(a, c.getModel('labelLine'))
                )))
            : (o.off('drag'), (o.cursor = s.cursor));
        }
      }),
      (J1.prototype.layout = function (t) {
        var e,
          n = t.getWidth(),
          t = t.getHeight(),
          i = H1(this._labelList),
          r = ut(i, function (t) {
            return 'shiftX' === t.layoutOption.moveOverlap;
          }),
          o = ut(i, function (t) {
            return 'shiftY' === t.layoutOption.moveOverlap;
          });
        W1(r, 'x', 'width', 0, n, e),
          G1(o, 0, t),
          U1(
            ut(i, function (t) {
              return t.layoutOption.hideOverlap;
            })
          );
      }),
      (J1.prototype.processLabelsOverall = function () {
        var a = this;
        z(this._chartViewList, function (t) {
          var i = t.__model,
            r = t.ignoreLabelLineUpdate,
            o = i.isAnimationEnabled();
          t.group.traverse(function (t) {
            if (t.ignore && !t.forceLabelAnimation) return !0;
            var e = !r,
              n = t.getTextContent();
            (e = !e && n ? q1(n).needsUpdateLabelLine : e) &&
              a._updateLabelLine(t, i),
              o && a._animateLabels(t, i);
          });
        });
      }),
      (J1.prototype._updateLabelLine = function (t, e) {
        var n = t.getTextContent(),
          i = k(t),
          r = i.dataIndex;
        n &&
          null != r &&
          ((e = (n = e.getData(i.dataType)).getItemModel(r)),
          (i = {}),
          (r = n.getItemVisual(r, 'style')) &&
            ((n = n.getVisual('drawType')), (i.stroke = r[n])),
          (r = e.getModel('labelLine')),
          F1(t, V1(e), i),
          O1(t, r));
      }),
      (J1.prototype._animateLabels = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = t.getTextContent(),
          l = t.getTextGuideLine();
        !s ||
          (!t.forceLabelAnimation &&
            (s.ignore || s.invisible || t.disableLabelAnimation || Rh(t))) ||
          ((o = (r = q1(s)).oldLayout),
          (n = (i = k(t)).dataIndex),
          (a = {x: s.x, y: s.y, rotation: s.rotation}),
          (i = e.getData(i.dataType)),
          o
            ? (s.attr(o),
              (t = t.prevStates) &&
                (0 <= I(t, 'select') && s.attr(r.oldLayoutSelect),
                0 <= I(t, 'emphasis')) &&
                s.attr(r.oldLayoutEmphasis),
              Lh(s, a, e, n))
            : (s.attr(a),
              Mc(s).valueAnimation ||
                ((t = R(s.style.opacity, 1)),
                (s.style.opacity = 0),
                Oh(s, {style: {opacity: t}}, e, n))),
          (r.oldLayout = a),
          s.states.select &&
            (K1((t = r.oldLayoutSelect = {}), a, $1),
            K1(t, s.states.select, $1)),
          s.states.emphasis &&
            (K1((t = r.oldLayoutEmphasis = {}), a, $1),
            K1(t, s.states.emphasis, $1)),
          Tc(s, n, i, e, e)),
          !l ||
            l.ignore ||
            l.invisible ||
            ((o = (r = j1(l)).oldLayout),
            (a = {points: l.shape.points}),
            o
              ? (l.attr({shape: o}), Lh(l, {shape: a}, e))
              : (l.setShape(a),
                (l.style.strokePercent = 0),
                Oh(l, {style: {strokePercent: 1}}, e)),
            (r.oldLayout = a));
      }),
      J1);
  function J1() {
    (this._labelList = []), (this._chartViewList = []);
  }
  var tx = Bo();
  function ex(t) {
    t.registerUpdateLifecycle('series:beforeupdate', function (t, e, n) {
      (tx(e).labelManager || (tx(e).labelManager = new Q1())).clearLabels();
    }),
      t.registerUpdateLifecycle('series:layoutlabels', function (t, e, n) {
        var i = tx(e).labelManager;
        n.updatedSeries.forEach(function (t) {
          i.addLabelsOfSeries(e.getViewOfSeriesModel(t));
        }),
          i.updateLayoutConfig(e),
          i.layout(e),
          i.processLabelsOverall();
      });
  }
  function nx(t, e, n) {
    var i = W.createCanvas(),
      r = e.getWidth(),
      e = e.getHeight(),
      o = i.style;
    return (
      o &&
        ((o.position = 'absolute'),
        (o.left = '0'),
        (o.top = '0'),
        (o.width = r + 'px'),
        (o.height = e + 'px'),
        i.setAttribute('data-zr-dom-id', t)),
      (i.width = r * n),
      (i.height = e * n),
      i
    );
  }
  Z_(ex);
  u(ox, (ix = le)),
    (ox.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex;
    }),
    (ox.prototype.afterBrush = function () {
      (this.__prevStartIndex = this.__startIndex),
        (this.__prevEndIndex = this.__endIndex);
    }),
    (ox.prototype.initContext = function () {
      (this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr);
    }),
    (ox.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0;
    }),
    (ox.prototype.createBackBuffer = function () {
      var t = this.dpr;
      (this.domBack = nx('back-' + this.id, this.painter, t)),
        (this.ctxBack = this.domBack.getContext('2d')),
        1 !== t && this.ctxBack.scale(t, t);
    }),
    (ox.prototype.createRepaintRects = function (t, e, n, i) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
      var l = [],
        u = this.maxRepaintRectCount,
        h = !1,
        c = new Z(0, 0, 0, 0);
      function r(t) {
        if (t.isFinite() && !t.isZero())
          if (0 === l.length) (e = new Z(0, 0, 0, 0)).copy(t), l.push(e);
          else {
            for (var e, n = !1, i = 1 / 0, r = 0, o = 0; o < l.length; ++o) {
              var a = l[o];
              if (a.intersect(t)) {
                var s = new Z(0, 0, 0, 0);
                s.copy(a), s.union(t), (l[o] = s), (n = !0);
                break;
              }
              h &&
                (c.copy(t),
                c.union(a),
                (s = t.width * t.height),
                (a = a.width * a.height),
                (a = c.width * c.height - s - a) < i) &&
                ((i = a), (r = o));
            }
            h && (l[r].union(t), (n = !0)),
              n || ((e = new Z(0, 0, 0, 0)).copy(t), l.push(e)),
              (h = h || l.length >= u);
          }
      }
      for (var o, a = this.__startIndex; a < this.__endIndex; ++a)
        (s = t[a]) &&
          ((d = s.shouldBePainted(n, i, !0, !0)),
          (p =
            s.__isRendered && (s.__dirty & _n || !d)
              ? s.getPrevPaintRect()
              : null) && r(p),
          (o =
            d && (s.__dirty & _n || !s.__isRendered)
              ? s.getPaintRect()
              : null)) &&
          r(o);
      for (a = this.__prevStartIndex; a < this.__prevEndIndex; ++a) {
        var s,
          p,
          d = (s = e[a]) && s.shouldBePainted(n, i, !0, !0);
        !s ||
          (d && s.__zr) ||
          !s.__isRendered ||
          ((p = s.getPrevPaintRect()) && r(p));
      }
      do {
        for (var f = !1, a = 0; a < l.length; )
          if (l[a].isZero()) l.splice(a, 1);
          else {
            for (var g = a + 1; g < l.length; )
              l[a].intersect(l[g])
                ? ((f = !0), l[a].union(l[g]), l.splice(g, 1))
                : g++;
            a++;
          }
      } while (f);
      return (this._paintRects = l);
    }),
    (ox.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice();
    }),
    (ox.prototype.resize = function (t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        o = this.domBack;
      r && ((r.width = t + 'px'), (r.height = e + 'px')),
        (i.width = t * n),
        (i.height = e * n),
        o &&
          ((o.width = t * n), (o.height = e * n), 1 !== n) &&
          this.ctxBack.scale(n, n);
    }),
    (ox.prototype.clear = function (t, o, e) {
      var n = this.dom,
        a = this.ctx,
        i = n.width,
        r = n.height,
        s = ((o = o || this.clearColor), this.motionBlur && !t),
        l = this.lastFrameAlpha,
        u = this.dpr,
        h = this,
        c =
          (s &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = 'copy'),
            this.ctxBack.drawImage(n, 0, 0, i / u, r / u)),
          this.domBack);
      function p(t, e, n, i) {
        var r;
        a.clearRect(t, e, n, i),
          o &&
            'transparent' !== o &&
            ((r = void 0),
            mt(o)
              ? ((r =
                  ((o.global || (o.__width === n && o.__height === i)) &&
                    o.__canvasGradient) ||
                  a0(a, o, {x: 0, y: 0, width: n, height: i})),
                (o.__canvasGradient = r),
                (o.__width = n),
                (o.__height = i))
              : vt(o) &&
                ((o.scaleX = o.scaleX || u),
                (o.scaleY = o.scaleY || u),
                (r = y0(a, o, {
                  dirty: function () {
                    h.setUnpainted(), h.painter.refresh();
                  },
                }))),
            a.save(),
            (a.fillStyle = r || o),
            a.fillRect(t, e, n, i),
            a.restore()),
          s &&
            (a.save(),
            (a.globalAlpha = l),
            a.drawImage(c, t, e, n, i),
            a.restore());
      }
      !e || s
        ? p(0, 0, i, r)
        : e.length &&
          z(e, function (t) {
            p(t.x * u, t.y * u, t.width * u, t.height * u);
          });
    });
  var ix,
    rx = ox;
  function ox(t, e, n) {
    var i,
      r = ix.call(this) || this,
      t =
        ((r.motionBlur = !1),
        (r.lastFrameAlpha = 0.7),
        (r.dpr = 1),
        (r.virtual = !1),
        (r.config = {}),
        (r.incremental = !1),
        (r.zlevel = 0),
        (r.maxRepaintRectCount = 5),
        (r.__dirty = !0),
        (r.__firstTimePaint = !0),
        (r.__used = !1),
        (r.__drawIndex = 0),
        (r.__startIndex = 0),
        (r.__endIndex = 0),
        (r.__prevStartIndex = null),
        (r.__prevEndIndex = null),
        (n = n || hr),
        'string' == typeof t ? (i = nx(t, e, n)) : O(t) && (t = (i = t).id),
        (r.id = t),
        (r.dom = i).style);
    return (
      t &&
        (Et(i),
        (i.onselectstart = function () {
          return !1;
        }),
        (t.padding = '0'),
        (t.margin = '0'),
        (t.borderWidth = '0')),
      (r.painter = e),
      (r.dpr = n),
      r
    );
  }
  var ax = 314159;
  (m.prototype.getType = function () {
    return 'canvas';
  }),
    (m.prototype.isSingleCanvas = function () {
      return this._singleCanvas;
    }),
    (m.prototype.getViewportRoot = function () {
      return this._domRoot;
    }),
    (m.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot();
      if (t)
        return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0};
    }),
    (m.prototype.refresh = function (t) {
      var e = this.storage.getDisplayList(!0),
        n = this._prevDisplayList,
        i = this._zlevelList;
      (this._redrawId = Math.random()),
        this._paintList(e, n, t, this._redrawId);
      for (var r = 0; r < i.length; r++) {
        var o,
          a = i[r],
          a = this._layers[a];
        !a.__builtin__ &&
          a.refresh &&
          ((o = 0 === r ? this._backgroundColor : null), a.refresh(o));
      }
      return (
        this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      );
    }),
    (m.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1));
    }),
    (m.prototype._paintHoverList = function (t) {
      var e = t.length,
        n = this._hoverlayer;
      if ((n && n.clear(), e)) {
        for (
          var i,
            r = {inHover: !0, viewWidth: this._width, viewHeight: this._height},
            o = 0;
          o < e;
          o++
        ) {
          var a = t[o];
          a.__inHover &&
            ((n = n || (this._hoverlayer = this.getLayer(1e5))),
            i || (i = n.ctx).save(),
            k0(i, a, r, o === e - 1));
        }
        i && i.restore();
      }
    }),
    (m.prototype.getHoverLayer = function () {
      return this.getLayer(1e5);
    }),
    (m.prototype.paintOne = function (t, e) {
      D0(t, e);
    }),
    (m.prototype._paintList = function (t, e, n, i) {
      var r, o, a;
      this._redrawId === i &&
        ((n = n || !1),
        this._updateLayerStatus(t),
        (r = (o = this._doPaintList(t, e, n)).finished),
        (o = o.needsRefreshHover),
        this._needsManuallyCompositing && this._compositeManually(),
        o && this._paintHoverList(t),
        r
          ? this.eachLayer(function (t) {
              t.afterBrush && t.afterBrush();
            })
          : ((a = this),
            Cn(function () {
              a._paintList(t, e, n, i);
            })));
    }),
    (m.prototype._compositeManually = function () {
      var e = this.getLayer(ax).ctx,
        n = this._domRoot.width,
        i = this._domRoot.height;
      e.clearRect(0, 0, n, i),
        this.eachBuiltinLayer(function (t) {
          t.virtual && e.drawImage(t.dom, 0, 0, n, i);
        });
    }),
    (m.prototype._doPaintList = function (d, f, g) {
      for (
        var y = this, m = [], v = this._opts.useDirtyRect, t = 0;
        t < this._zlevelList.length;
        t++
      ) {
        var e = this._zlevelList[t],
          e = this._layers[e];
        e.__builtin__ &&
          e !== this._hoverlayer &&
          (e.__dirty || g) &&
          m.push(e);
      }
      for (
        var _ = !0,
          x = !1,
          n = function (t) {
            function e(t) {
              var e = {
                inHover: !1,
                allClipped: !1,
                prevEl: null,
                viewWidth: y._width,
                viewHeight: y._height,
              };
              for (i = s; i < r.__endIndex; i++) {
                var n = d[i];
                if (
                  (n.__inHover && (x = !0),
                  y._doPaintEl(n, r, v, t, e, i === r.__endIndex - 1),
                  l)
                )
                  if (15 < Date.now() - u) break;
              }
              e.prevElClipPaths && o.restore();
            }
            var n,
              i,
              r = m[t],
              o = r.ctx,
              a = v && r.createRepaintRects(d, f, w._width, w._height),
              s = g ? r.__startIndex : r.__drawIndex,
              l = !g && r.incremental && Date.now,
              u = l && Date.now(),
              t = r.zlevel === w._zlevelList[0] ? w._backgroundColor : null;
            (r.__startIndex !== r.__endIndex &&
              (s !== r.__startIndex ||
                ((n = d[s]).incremental && n.notClear && !g))) ||
              r.clear(!1, t, a),
              -1 === s &&
                (console.error('For some unknown reason. drawIndex is -1'),
                (s = r.__startIndex));
            if (a)
              if (0 === a.length) i = r.__endIndex;
              else
                for (var h = w.dpr, c = 0; c < a.length; ++c) {
                  var p = a[c];
                  o.save(),
                    o.beginPath(),
                    o.rect(p.x * h, p.y * h, p.width * h, p.height * h),
                    o.clip(),
                    e(p),
                    o.restore();
                }
            else o.save(), e(), o.restore();
            (r.__drawIndex = i), r.__drawIndex < r.__endIndex && (_ = !1);
          },
          w = this,
          i = 0;
        i < m.length;
        i++
      )
        n(i);
      return (
        b.wxa &&
          z(this._layers, function (t) {
            t && t.ctx && t.ctx.draw && t.ctx.draw();
          }),
        {finished: _, needsRefreshHover: x}
      );
    }),
    (m.prototype._doPaintEl = function (t, e, n, i, r, o) {
      e = e.ctx;
      n
        ? ((n = t.getPaintRect()),
          (!i || (n && n.intersect(i))) &&
            (k0(e, t, r, o), t.setPrevPaintRect(n)))
        : k0(e, t, r, o);
    }),
    (m.prototype.getLayer = function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = ax);
      var n = this._layers[t];
      return (
        n ||
          (((n = new rx('zr_' + t, this, this.dpr)).zlevel = t),
          (n.__builtin__ = !0),
          this._layerConfig[t]
            ? d(n, this._layerConfig[t], !0)
            : this._layerConfig[t - 0.01] &&
              d(n, this._layerConfig[t - 0.01], !0),
          e && (n.virtual = e),
          this.insertLayer(t, n),
          n.initContext()),
        n
      );
    }),
    (m.prototype.insertLayer = function (t, e) {
      var n,
        i = this._layers,
        r = this._zlevelList,
        o = r.length,
        a = this._domRoot,
        s = null,
        l = -1;
      if (
        !i[t] &&
        (n = e) &&
        (n.__builtin__ ||
          ('function' == typeof n.resize && 'function' == typeof n.refresh))
      ) {
        if (0 < o && t > r[0]) {
          for (l = 0; l < o - 1 && !(r[l] < t && r[l + 1] > t); l++);
          s = i[r[l]];
        }
        r.splice(l + 1, 0, t),
          (i[t] = e).virtual ||
            (s
              ? (n = s.dom).nextSibling
                ? a.insertBefore(e.dom, n.nextSibling)
                : a.appendChild(e.dom)
              : a.firstChild
              ? a.insertBefore(e.dom, a.firstChild)
              : a.appendChild(e.dom)),
          e.painter || (e.painter = this);
      }
    }),
    (m.prototype.eachLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, this._layers[r], r);
      }
    }),
    (m.prototype.eachBuiltinLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r];
        o.__builtin__ && t.call(e, o, r);
      }
    }),
    (m.prototype.eachOtherLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r];
        o.__builtin__ || t.call(e, o, r);
      }
    }),
    (m.prototype.getLayers = function () {
      return this._layers;
    }),
    (m.prototype._updateLayerStatus = function (t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), (r.__endIndex = t));
      }
      if (
        (this.eachBuiltinLayer(function (t, e) {
          t.__dirty = t.__used = !1;
        }),
        this._singleCanvas)
      )
        for (var n = 1; n < t.length; n++)
          if ((s = t[n]).zlevel !== t[n - 1].zlevel || s.incremental) {
            this._needsManuallyCompositing = !0;
            break;
          }
      for (var i, r = null, o = 0, a = 0; a < t.length; a++) {
        var s,
          l = (s = t[a]).zlevel,
          u = void 0;
        i !== l && ((i = l), (o = 0)),
          s.incremental
            ? (((u = this.getLayer(
                l + 0.001,
                this._needsManuallyCompositing
              )).incremental = !0),
              (o = 1))
            : (u = this.getLayer(
                l + (0 < o ? 0.01 : 0),
                this._needsManuallyCompositing
              )),
          u.__builtin__ ||
            it('ZLevel ' + l + ' has been used by unkown layer ' + u.id),
          u !== r &&
            ((u.__used = !0),
            u.__startIndex !== a && (u.__dirty = !0),
            (u.__startIndex = a),
            u.incremental ? (u.__drawIndex = -1) : (u.__drawIndex = a),
            e(a),
            (r = u)),
          s.__dirty & _n &&
            !s.__inHover &&
            ((u.__dirty = !0), u.incremental) &&
            u.__drawIndex < 0 &&
            (u.__drawIndex = a);
      }
      e(a),
        this.eachBuiltinLayer(function (t, e) {
          !t.__used &&
            0 < t.getElementCount() &&
            ((t.__dirty = !0),
            (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
            t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
        });
    }),
    (m.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }),
    (m.prototype._clearLayer = function (t) {
      t.clear();
    }),
    (m.prototype.setBackgroundColor = function (t) {
      (this._backgroundColor = t),
        z(this._layers, function (t) {
          t.setUnpainted();
        });
    }),
    (m.prototype.configLayer = function (t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? d(n[t], e, !0) : (n[t] = e);
        for (var i = 0; i < this._zlevelList.length; i++) {
          var r = this._zlevelList[i];
          (r !== t && r !== t + 0.01) || d(this._layers[r], n[t], !0);
        }
      }
    }),
    (m.prototype.delLayer = function (t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      i &&
        (i.dom.parentNode.removeChild(i.dom),
        delete e[t],
        n.splice(I(n, t), 1));
    }),
    (m.prototype.resize = function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot,
          i = ((n.style.display = 'none'), this._opts),
          r = this.root;
        if (
          (null != t && (i.width = t),
          null != e && (i.height = e),
          (t = l0(r, 0, i)),
          (e = l0(r, 1, i)),
          (n.style.display = ''),
          this._width !== t || e !== this._height)
        ) {
          for (var o in ((n.style.width = t + 'px'),
          (n.style.height = e + 'px'),
          this._layers))
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
          this.refresh(!0);
        }
        (this._width = t), (this._height = e);
      } else {
        if (null == t || null == e) return;
        (this._width = t), (this._height = e), this.getLayer(ax).resize(t, e);
      }
      return this;
    }),
    (m.prototype.clearLayer = function (t) {
      t = this._layers[t];
      t && t.clear();
    }),
    (m.prototype.dispose = function () {
      (this.root.innerHTML = ''),
        (this.root = this.storage = this._domRoot = this._layers = null);
    }),
    (m.prototype.getRenderedCanvas = function (t) {
      if (this._singleCanvas && !this._compositeManually)
        return this._layers[ax].dom;
      var e = new rx('image', this, (t = t || {}).pixelRatio || this.dpr),
        n =
          (e.initContext(),
          e.clear(!1, t.backgroundColor || this._backgroundColor),
          e.ctx);
      if (t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width,
          r = e.dom.height;
        this.eachLayer(function (t) {
          t.__builtin__
            ? n.drawImage(t.dom, 0, 0, i, r)
            : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore());
        });
      } else
        for (
          var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            a = this.storage.getDisplayList(!0),
            s = 0,
            l = a.length;
          s < l;
          s++
        ) {
          var u = a[s];
          k0(n, u, o, s === l - 1);
        }
      return e.dom;
    }),
    (m.prototype.getWidth = function () {
      return this._width;
    }),
    (m.prototype.getHeight = function () {
      return this._height;
    });
  var sx = m;
  function m(t, e, n, i) {
    (this.type = 'canvas'),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = 'canvas');
    var r = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase();
    (this._opts = n = L({}, n || {})),
      (this.dpr = n.devicePixelRatio || hr),
      (this._singleCanvas = r);
    (this.root = t).style && (Et(t), (t.innerHTML = '')), (this.storage = e);
    var o,
      a,
      e = this._zlevelList,
      s = ((this._prevDisplayList = []), this._layers);
    r
      ? ((o = (r = t).width),
        (a = r.height),
        null != n.width && (o = n.width),
        null != n.height && (a = n.height),
        (this.dpr = n.devicePixelRatio || 1),
        (r.width = o * this.dpr),
        (r.height = a * this.dpr),
        (this._width = o),
        (this._height = a),
        ((o = new rx(r, this, this.dpr)).__builtin__ = !0),
        o.initContext(),
        ((s[ax] = o).zlevel = ax),
        e.push(ax),
        (this._domRoot = t))
      : ((this._width = l0(t, 0, n)),
        (this._height = l0(t, 1, n)),
        (o = this._domRoot =
          ((a = this._width),
          (r = this._height),
          ((s = document.createElement('div')).style.cssText =
            [
              'position:relative',
              'width:' + a + 'px',
              'height:' + r + 'px',
              'padding:0',
              'margin:0',
              'border-width:0',
            ].join(';') + ';'),
          s)),
        t.appendChild(o));
  }
  u(hx, (lx = g)),
    (hx.prototype.init = function (t, e, n) {
      lx.prototype.init.call(this, t, e, n),
        (this._sourceManager = new _g(this)),
        wg(this);
    }),
    (hx.prototype.mergeOption = function (t, e) {
      lx.prototype.mergeOption.call(this, t, e), wg(this);
    }),
    (hx.prototype.optionUpdated = function () {
      this._sourceManager.dirty();
    }),
    (hx.prototype.getSourceManager = function () {
      return this._sourceManager;
    }),
    (hx.type = 'dataset'),
    (hx.defaultOption = {seriesLayoutBy: rd});
  var lx,
    ux = hx;
  function hx() {
    var t = (null !== lx && lx.apply(this, arguments)) || this;
    return (t.type = 'dataset'), t;
  }
  u(dx, (cx = $g)), (dx.type = 'dataset');
  var cx,
    px = dx;
  function dx() {
    var t = (null !== cx && cx.apply(this, arguments)) || this;
    return (t.type = 'dataset'), t;
  }
  function fx(t) {
    t.registerComponentModel(ux), t.registerComponentView(px);
  }
  Z_([
    function (t) {
      t.registerPainter('canvas', sx);
    },
    fx,
  ]),
    Z_(ex);
  var gx = {
      average: function (t) {
        for (var e = 0, n = 0, i = 0; i < t.length; i++)
          isNaN(t[i]) || ((e += t[i]), n++);
        return 0 === n ? NaN : e / n;
      },
      sum: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
        return e;
      },
      max: function (t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
        return isFinite(e) ? e : NaN;
      },
      min: function (t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
        return isFinite(e) ? e : NaN;
      },
      minmax: function (t) {
        for (var e = -1 / 0, n = -1 / 0, i = 0; i < t.length; i++) {
          var r = t[i],
            o = Math.abs(r);
          e < o && ((e = o), (n = r));
        }
        return isFinite(n) ? n : NaN;
      },
      nearest: function (t) {
        return t[0];
      },
    },
    yx = function (t) {
      return Math.round(t.length / 2);
    };
  u(vx, (mx = Gg)),
    (vx.prototype.getInitialData = function (t, e) {
      return Pv(null, this, {useEncodeDefaulter: !0});
    }),
    (vx.prototype.getMarkerPosition = function (t, p, e) {
      var d,
        f,
        n = this.coordinateSystem;
      return n && n.clampData
        ? ((d = n.clampData(t)),
          (f = n.dataToPoint(d)),
          e
            ? z(n.getAxes(), function (t, e) {
                if ('category' === t.type && null != p) {
                  var n = t.getTicksCoords(),
                    i = t.getTickModel().get('alignWithLabel'),
                    r = d[e],
                    o = 'x1' === p[e] || 'y1' === p[e];
                  if ((o && !i && (r += 1), !(n.length < 2)))
                    if (2 === n.length)
                      f[e] = t.toGlobalCoord(t.getExtent()[o ? 1 : 0]);
                    else {
                      for (
                        var a = void 0, s = void 0, l = 1, u = 0;
                        u < n.length;
                        u++
                      ) {
                        var h = n[u].coord,
                          c =
                            u === n.length - 1
                              ? n[u - 1].tickValue + l
                              : n[u].tickValue;
                        if (c === r) {
                          s = h;
                          break;
                        }
                        if (c < r) a = h;
                        else if (null != a && r < c) {
                          s = (h + a) / 2;
                          break;
                        }
                        1 === u && (l = c - n[0].tickValue);
                      }
                      null == s && (s = (a ? n[n.length - 1] : n[0]).coord),
                        (f[e] = t.toGlobalCoord(s));
                    }
                }
              })
            : ((e = (t = this.getData()).getLayout('offset')),
              (t = t.getLayout('size')),
              (n = n.getBaseAxis().isHorizontal() ? 0 : 1),
              (f[n] += e + t / 2)),
          f)
        : [NaN, NaN];
    }),
    (vx.type = 'series.__base_bar__'),
    (vx.defaultOption = {
      z: 2,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: 'mod',
    });
  var mx,
    Lc = vx;
  function vx() {
    var t = (null !== mx && mx.apply(this, arguments)) || this;
    return (t.type = vx.type), t;
  }
  Gg.registerClass(Lc);
  u(bx, (_x = Lc)),
    (bx.prototype.getInitialData = function () {
      return Pv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get('realtimeSort', !0) || null,
      });
    }),
    (bx.prototype.getProgressive = function () {
      return !!this.get('large') && this.get('progressive');
    }),
    (bx.prototype.getProgressiveThreshold = function () {
      var t = this.get('progressiveThreshold'),
        e = this.get('largeThreshold');
      return (t = t < e ? e : t);
    }),
    (bx.prototype.brushSelector = function (t, e, n) {
      return n.rect(e.getItemLayout(t));
    }),
    (bx.type = 'series.bar'),
    (bx.dependencies = ['grid', 'polar']),
    (bx.defaultOption = Gc(Lc.defaultOption, {
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
        borderColor: null,
        borderWidth: 0,
        borderType: 'solid',
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1,
      },
      select: {itemStyle: {borderColor: '#212121'}},
      realtimeSort: !1,
    }));
  var _x,
    xx = bx;
  function bx() {
    var t = (null !== _x && _x.apply(this, arguments)) || this;
    return (t.type = bx.type), t;
  }
  function Sx(t, e, n, i, r) {
    var o, a, s, l, u, h, c, p, d;
    return t
      ? 'polar' === t.type
        ? ((l = e),
          (u = n),
          (h = (s = t).getArea()),
          (c = io(h.r0, 1)),
          (p = io(h.r, 1)),
          (d = new Bu({
            shape: {
              cx: io(s.cx, 1),
              cy: io(s.cy, 1),
              r0: c,
              r: p,
              startAngle: h.startAngle,
              endAngle: h.endAngle,
              clockwise: h.clockwise,
            },
          })),
          l &&
            ('angle' === s.getBaseAxis().dim
              ? (d.shape.endAngle = h.startAngle)
              : (d.shape.r = c),
            Oh(d, {shape: {endAngle: h.endAngle, r: p}}, u)),
          d)
        : 'cartesian2d' === t.type
        ? ((l = e),
          (s = n),
          (c = i),
          (o = r),
          (u = (p = (h = t).getArea()).x),
          (d = p.y),
          (e = p.width),
          (p = p.height),
          (n = s.get(['lineStyle', 'width']) || 2),
          (u -= n / 2),
          (d -= n / 2),
          (e += n),
          (p += n),
          (e = Math.ceil(e)),
          u !== Math.floor(u) && ((u = Math.floor(u)), e++),
          (a = new Bs({shape: {x: u, y: d, width: e, height: p}})),
          l &&
            ((l = (n = h.getBaseAxis()).isHorizontal()),
            (h = n.inverse),
            l
              ? (h && (a.shape.x += e), (a.shape.width = 0))
              : (h || (a.shape.y += p), (a.shape.height = 0)),
            (n = D(o)
              ? function (t) {
                  o(t, a);
                }
              : null),
            Oh(a, {shape: {width: e, height: p, x: u, y: d}}, s, null, c, n)),
          a)
        : null
      : null;
  }
  var Mx,
    Tx = function () {
      (this.cx = 0),
        (this.cy = 0),
        (this.r0 = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = 2 * Math.PI),
        (this.clockwise = !0);
    },
    Cx =
      (u(Ix, (Mx = vs)),
      (Ix.prototype.getDefaultShape = function () {
        return new Tx();
      }),
      (Ix.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          o = Math.max(e.r, 0),
          a = 0.5 * (o - r),
          s = r + a,
          l = e.startAngle,
          u = e.endAngle,
          e = e.clockwise,
          h = 2 * Math.PI,
          c = e ? u - l < h : l - u < h,
          h = (c || (l = u - (e ? h : -h)), Math.cos(l)),
          p = Math.sin(l),
          d = Math.cos(u),
          f = Math.sin(u);
        c
          ? (t.moveTo(h * r + n, p * r + i),
            t.arc(h * s + n, p * s + i, a, -Math.PI + l, l, !e))
          : t.moveTo(h * o + n, p * o + i),
          t.arc(n, i, o, l, u, !e),
          t.arc(d * s + n, f * s + i, a, u - 2 * Math.PI, u - Math.PI, !e),
          0 !== r && t.arc(n, i, r, u, l, e);
      }),
      Ix);
  function Ix(t) {
    t = Mx.call(this, t) || this;
    return (t.type = 'sausage'), t;
  }
  function Dx(t, e) {
    return t.type === e;
  }
  function kx(t, e, n) {
    return e * Math.sin(t) * (n ? -1 : 1);
  }
  function Ax(t, e, n) {
    return e * Math.cos(t) * (n ? 1 : -1);
  }
  function Px(t, e, n) {
    t = t.get('borderRadius');
    if (null == t) return n ? {cornerRadius: 0} : null;
    F(t) || (t = [t, t, t, t]);
    var i = Math.abs(e.r || 0 - e.r0 || 0);
    return {
      cornerRadius: N(t, function (t) {
        return kr(t, i);
      }),
    };
  }
  var Lx = Math.max,
    Ox = Math.min;
  u(zx, (Rx = ny)),
    (zx.prototype.render = function (t, e, n, i) {
      (this._model = t),
        this._removeOnRenderedListener(n),
        this._updateDrawMode(t);
      var r = t.get('coordinateSystem');
      ('cartesian2d' !== r && 'polar' !== r) ||
        ((this._progressiveEls = null),
        this._isLargeDraw
          ? this._renderLarge(t, e, n)
          : this._renderNormal(t, e, n, i));
    }),
    (zx.prototype.incrementalPrepareRender = function (t) {
      this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
    }),
    (zx.prototype.incrementalRender = function (t, e) {
      (this._progressiveEls = []), this._incrementalRenderLarge(t, e);
    }),
    (zx.prototype.eachRendered = function (t) {
      cc(this._progressiveEls || this.group, t);
    }),
    (zx.prototype._updateDrawMode = function (t) {
      t = t.pipelineContext.large;
      (null != this._isLargeDraw && t === this._isLargeDraw) ||
        ((this._isLargeDraw = t), this._clear());
    }),
    (zx.prototype._renderNormal = function (a, t, e, n) {
      var s,
        i,
        r,
        l = this.group,
        u = a.getData(),
        h = this._data,
        c = a.coordinateSystem,
        p = c.getBaseAxis(),
        d =
          ('cartesian2d' === c.type
            ? (s = p.isHorizontal())
            : 'polar' === c.type && (s = 'angle' === p.dim),
          a.isAnimationEnabled() ? a : null),
        f = (function (t, e) {
          var t = t.get('realtimeSort', !0),
            n = e.getBaseAxis();
          if (t && 'category' === n.type && 'cartesian2d' === e.type)
            return {baseAxis: n, otherAxis: e.getOtherAxis(n)};
        })(a, c),
        g = (f && this._enableRealtimeSort(f, u, e), a.get('clip', !0) || f),
        y =
          ((e = u),
          (r = (i = c).getArea && i.getArea()),
          !Dx(i, 'cartesian2d') ||
            ('category' === (i = i.getBaseAxis()).type && i.onBand) ||
            ((e = e.getLayout('bandWidth')),
            i.isHorizontal()
              ? ((r.x -= e), (r.width += 2 * e))
              : ((r.y -= e), (r.height += 2 * e))),
          r),
        m = (l.removeClipPath(), a.get('roundCap', !0)),
        v = a.get('showBackground', !0),
        _ = a.getModel('backgroundStyle'),
        x = _.get('borderRadius') || 0,
        w = [],
        b = this._backgroundEls,
        S = n && n.isInitSort,
        M = n && 'changeAxisOrder' === n.type;
      function T(t) {
        var e = Ux[c.type](u, t),
          n =
            ((n = s),
            new ('polar' === c.type ? Bu : Bs)({
              shape: Jx(n, e, c),
              silent: !0,
              z2: 0,
            }));
        return (
          n.useStyle(_.getItemStyle()),
          'cartesian2d' === c.type
            ? n.setShape('r', x)
            : n.setShape('cornerRadius', x),
          (w[t] = n)
        );
      }
      u.diff(h)
        .add(function (t) {
          var e,
            n,
            i = u.getItemModel(t),
            r = Ux[c.type](u, t, i);
          v && T(t),
            u.hasValue(t) &&
              Gx[c.type](r) &&
              ((e = !1),
              g && (e = Ex[c.type](y, r)),
              (n = Nx[c.type](a, u, t, r, s, d, p.model, !1, m)),
              f && (n.forceLabelAnimation = !0),
              Yx(n, u, t, i, r, a, s, 'polar' === c.type),
              S
                ? n.attr({shape: r})
                : f
                ? Fx(f, d, n, r, t, s, !1, !1)
                : Oh(n, {shape: r}, a, t),
              u.setItemGraphicEl(t, n),
              l.add(n),
              (n.ignore = e));
        })
        .update(function (t, e) {
          var n,
            i = u.getItemModel(t),
            r = Ux[c.type](u, t, i),
            o =
              (v &&
                ((o = void 0),
                0 === b.length
                  ? (o = T(e))
                  : ((o = b[e]).useStyle(_.getItemStyle()),
                    'cartesian2d' === c.type
                      ? o.setShape('r', x)
                      : o.setShape('cornerRadius', x),
                    (w[t] = o)),
                (n = Ux[c.type](u, t)),
                Lh(o, {shape: Jx(s, n, c)}, d, t)),
              h.getItemGraphicEl(e));
          u.hasValue(t) && Gx[c.type](r)
            ? ((n = !1),
              g && (n = Ex[c.type](y, r)) && l.remove(o),
              o ? Nh(o) : (o = Nx[c.type](a, u, t, r, s, d, p.model, !!o, m)),
              f && (o.forceLabelAnimation = !0),
              M
                ? (e = o.getTextContent()) &&
                  null != (e = Mc(e)).prevValue &&
                  (e.prevValue = e.value)
                : Yx(o, u, t, i, r, a, s, 'polar' === c.type),
              S
                ? o.attr({shape: r})
                : f
                ? Fx(f, d, o, r, t, s, !0, M)
                : Lh(o, {shape: r}, a, t, null),
              u.setItemGraphicEl(t, o),
              (o.ignore = n),
              l.add(o))
            : l.remove(o);
        })
        .remove(function (t) {
          var e = h.getItemGraphicEl(t);
          e && Eh(e, a, t);
        })
        .execute();
      var o = this._backgroundGroup || (this._backgroundGroup = new Gr());
      o.removeAll();
      for (var C = 0; C < w.length; ++C) o.add(w[C]);
      l.add(o), (this._backgroundEls = w), (this._data = u);
    }),
    (zx.prototype._renderLarge = function (t, e, n) {
      this._clear(), $x(t, this.group), this._updateLargeClip(t);
    }),
    (zx.prototype._incrementalRenderLarge = function (t, e) {
      this._removeBackground(), $x(e, this.group, this._progressiveEls, !0);
    }),
    (zx.prototype._updateLargeClip = function (t) {
      var t = t.get('clip', !0) && Sx(t.coordinateSystem, !1, t),
        e = this.group;
      t ? e.setClipPath(t) : e.removeClipPath();
    }),
    (zx.prototype._enableRealtimeSort = function (t, e, n) {
      var i,
        r,
        o = this;
      e.count() &&
        ((i = t.baseAxis),
        this._isFirstFrame
          ? (this._dispatchInitSort(e, t, n), (this._isFirstFrame = !1))
          : ((r = function (t) {
              (t = e.getItemGraphicEl(t)), (t = t && t.shape);
              return (
                (t && Math.abs(i.isHorizontal() ? t.height : t.width)) || 0
              );
            }),
            (this._onRendered = function () {
              o._updateSortWithinSameData(e, r, i, n);
            }),
            n.getZr().on('rendered', this._onRendered)));
    }),
    (zx.prototype._dataSort = function (t, e, i) {
      var r = [];
      return (
        t.each(t.mapDimension(e.dim), function (t, e) {
          var n = i(e);
          r.push({
            dataIndex: e,
            mappedValue: null == n ? NaN : n,
            ordinalNumber: t,
          });
        }),
        r.sort(function (t, e) {
          return e.mappedValue - t.mappedValue;
        }),
        {
          ordinalNumbers: N(r, function (t) {
            return t.ordinalNumber;
          }),
        }
      );
    }),
    (zx.prototype._isOrderChangedWithinSameData = function (t, e, n) {
      for (
        var i = n.scale,
          r = t.mapDimension(n.dim),
          o = Number.MAX_VALUE,
          a = 0,
          s = i.getOrdinalMeta().categories.length;
        a < s;
        ++a
      ) {
        var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a)),
          l = l < 0 ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
        if (o < l) return !0;
        o = l;
      }
      return !1;
    }),
    (zx.prototype._isOrderDifferentInView = function (t, e) {
      for (
        var n = e.scale,
          e = n.getExtent(),
          i = Math.max(0, e[0]),
          r = Math.min(e[1], n.getOrdinalMeta().categories.length - 1);
        i <= r;
        ++i
      )
        if (t.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0;
    }),
    (zx.prototype._updateSortWithinSameData = function (t, e, n, i) {
      this._isOrderChangedWithinSameData(t, e, n) &&
        ((t = this._dataSort(t, n, e)), this._isOrderDifferentInView(t, n)) &&
        (this._removeOnRenderedListener(i),
        i.dispatchAction({
          type: 'changeAxisOrder',
          componentType: n.dim + 'Axis',
          axisId: n.index,
          sortInfo: t,
        }));
    }),
    (zx.prototype._dispatchInitSort = function (e, n, t) {
      var i = n.baseAxis,
        r = this._dataSort(e, i, function (t) {
          return e.get(e.mapDimension(n.otherAxis.dim), t);
        });
      t.dispatchAction({
        type: 'changeAxisOrder',
        componentType: i.dim + 'Axis',
        isInitSort: !0,
        axisId: i.index,
        sortInfo: r,
      });
    }),
    (zx.prototype.remove = function (t, e) {
      this._clear(this._model), this._removeOnRenderedListener(e);
    }),
    (zx.prototype.dispose = function (t, e) {
      this._removeOnRenderedListener(e);
    }),
    (zx.prototype._removeOnRenderedListener = function (t) {
      this._onRendered &&
        (t.getZr().off('rendered', this._onRendered),
        (this._onRendered = null));
    }),
    (zx.prototype._clear = function (e) {
      var t = this.group,
        n = this._data;
      e && e.isAnimationEnabled() && n && !this._isLargeDraw
        ? (this._removeBackground(),
          (this._backgroundEls = []),
          n.eachItemGraphicEl(function (t) {
            Eh(t, e, k(t).dataIndex);
          }))
        : t.removeAll(),
        (this._data = null),
        (this._isFirstFrame = !0);
    }),
    (zx.prototype._removeBackground = function () {
      this.group.remove(this._backgroundGroup), (this._backgroundGroup = null);
    }),
    (zx.type = 'bar');
  var Rx,
    Bx = zx;
  function zx() {
    var t = Rx.call(this) || this;
    return (t.type = zx.type), (t._isFirstFrame = !0), t;
  }
  var Ex = {
      cartesian2d: function (t, e) {
        var n = e.width < 0 ? -1 : 1,
          i = e.height < 0 ? -1 : 1,
          r =
            (n < 0 && ((e.x += e.width), (e.width = -e.width)),
            i < 0 && ((e.y += e.height), (e.height = -e.height)),
            t.x + t.width),
          o = t.y + t.height,
          a = Lx(e.x, t.x),
          s = Ox(e.x + e.width, r),
          t = Lx(e.y, t.y),
          l = Ox(e.y + e.height, o),
          u = s < a,
          h = l < t;
        return (
          (e.x = u && r < a ? s : a),
          (e.y = h && o < t ? l : t),
          (e.width = u ? 0 : s - a),
          (e.height = h ? 0 : l - t),
          n < 0 && ((e.x += e.width), (e.width = -e.width)),
          i < 0 && ((e.y += e.height), (e.height = -e.height)),
          u || h
        );
      },
      polar: function (t, e) {
        var n,
          i = e.r0 <= e.r ? 1 : -1,
          r = (i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), Ox(e.r, t.r)),
          t = Lx(e.r0, t.r0),
          r = (e.r = r) - (e.r0 = t) < 0;
        return i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), r;
      },
    },
    Nx = {
      cartesian2d: function (t, e, n, i, r, o, a, s, l) {
        i = new Bs({shape: L({}, i), z2: 1});
        return (
          (i.__dataIndex = n),
          (i.name = 'item'),
          o && (i.shape[r ? 'height' : 'width'] = 0),
          i
        );
      },
      polar: function (t, e, n, i, r, o, a, s, l) {
        var w,
          b,
          l = !r && l ? Cx : Bu,
          u = new l({shape: i, z2: 1}),
          h = ((u.name = 'item'), Zx(r));
        return (
          (u.calculateTextPosition =
            ((w = h),
            (b = ({isRoundCap: l === Cx} || {}).isRoundCap),
            function (t, e, n) {
              var i = e.position;
              if (!i || i instanceof Array) return Ar(t, e, n);
              var i = w(i),
                r = null != e.distance ? e.distance : 5,
                o = this.shape,
                a = o.cx,
                s = o.cy,
                l = o.r,
                u = o.r0,
                h = (l + u) / 2,
                c = o.startAngle,
                p = o.endAngle,
                d = (c + p) / 2,
                f = b ? Math.abs(l - u) / 2 : 0,
                g = Math.cos,
                y = Math.sin,
                m = a + l * g(c),
                v = s + l * y(c),
                _ = 'left',
                x = 'top';
              switch (i) {
                case 'startArc':
                  (m = a + (u - r) * g(d)),
                    (v = s + (u - r) * y(d)),
                    (_ = 'center'),
                    (x = 'top');
                  break;
                case 'insideStartArc':
                  (m = a + (u + r) * g(d)),
                    (v = s + (u + r) * y(d)),
                    (_ = 'center'),
                    (x = 'bottom');
                  break;
                case 'startAngle':
                  (m = a + h * g(c) + kx(c, r + f, !1)),
                    (v = s + h * y(c) + Ax(c, r + f, !1)),
                    (_ = 'right'),
                    (x = 'middle');
                  break;
                case 'insideStartAngle':
                  (m = a + h * g(c) + kx(c, f - r, !1)),
                    (v = s + h * y(c) + Ax(c, f - r, !1)),
                    (_ = 'left'),
                    (x = 'middle');
                  break;
                case 'middle':
                  (m = a + h * g(d)),
                    (v = s + h * y(d)),
                    (_ = 'center'),
                    (x = 'middle');
                  break;
                case 'endArc':
                  (m = a + (l + r) * g(d)),
                    (v = s + (l + r) * y(d)),
                    (_ = 'center'),
                    (x = 'bottom');
                  break;
                case 'insideEndArc':
                  (m = a + (l - r) * g(d)),
                    (v = s + (l - r) * y(d)),
                    (_ = 'center'),
                    (x = 'top');
                  break;
                case 'endAngle':
                  (m = a + h * g(p) + kx(p, r + f, !0)),
                    (v = s + h * y(p) + Ax(p, r + f, !0)),
                    (_ = 'left'),
                    (x = 'middle');
                  break;
                case 'insideEndAngle':
                  (m = a + h * g(p) + kx(p, f - r, !0)),
                    (v = s + h * y(p) + Ax(p, f - r, !0)),
                    (_ = 'right'),
                    (x = 'middle');
                  break;
                default:
                  return Ar(t, e, n);
              }
              return (
                ((t = t || {}).x = m),
                (t.y = v),
                (t.align = _),
                (t.verticalAlign = x),
                t
              );
            })),
          o &&
            ((h = {}),
            (u.shape[(l = r ? 'r' : 'endAngle')] = r ? i.r0 : i.startAngle),
            (h[l] = i[l]),
            (s ? Lh : Oh)(u, {shape: h}, o)),
          u
        );
      },
    };
  function Fx(t, e, n, i, r, o, a, s) {
    var l,
      o = o
        ? ((l = {x: i.x, width: i.width}), {y: i.y, height: i.height})
        : ((l = {y: i.y, height: i.height}), {x: i.x, width: i.width});
    s || (a ? Lh : Oh)(n, {shape: o}, e, r, null),
      (a ? Lh : Oh)(n, {shape: l}, e ? t.baseAxis.model : null, r);
  }
  function Vx(t, e) {
    for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return 1;
  }
  var Hx = ['x', 'y', 'width', 'height'],
    Wx = ['cx', 'cy', 'r', 'startAngle', 'endAngle'],
    Gx = {
      cartesian2d: function (t) {
        return !Vx(t, Hx);
      },
      polar: function (t) {
        return !Vx(t, Wx);
      },
    },
    Ux = {
      cartesian2d: function (t, e, n) {
        var t = t.getItemLayout(e),
          i =
            n &&
            ((e = t), (i = (n = n).get(['itemStyle', 'borderColor']))) &&
            'none' !== i
              ? ((i = n.get(['itemStyle', 'borderWidth']) || 0),
                (n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width)),
                (e = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height)),
                Math.min(i, n, e))
              : 0,
          n = 0 < t.width ? 1 : -1,
          e = 0 < t.height ? 1 : -1;
        return {
          x: t.x + (n * i) / 2,
          y: t.y + (e * i) / 2,
          width: t.width - n * i,
          height: t.height - e * i,
        };
      },
      polar: function (t, e, n) {
        t = t.getItemLayout(e);
        return {
          cx: t.cx,
          cy: t.cy,
          r0: t.r0,
          r: t.r,
          startAngle: t.startAngle,
          endAngle: t.endAngle,
          clockwise: t.clockwise,
        };
      },
    };
  function Zx(t) {
    return (
      (e = t ? 'Arc' : 'Angle'),
      function (t) {
        switch (t) {
          case 'start':
          case 'insideStart':
          case 'end':
          case 'insideEnd':
            return t + e;
          default:
            return t;
        }
      }
    );
    var e;
  }
  function Yx(t, s, e, n, i, r, o, a) {
    var l = s.getItemVisual(e, 'style'),
      u =
        (a
          ? r.get('roundCap') ||
            (L((u = t.shape), Px(n.getModel('itemStyle'), u, !0)),
            t.setShape(u))
          : ((u = n.get(['itemStyle', 'borderRadius']) || 0),
            t.setShape('r', u)),
        t.useStyle(l),
        n.getShallow('cursor')),
      u =
        (u && t.attr('cursor', u),
        a
          ? o
            ? i.r >= i.r0
              ? 'endArc'
              : 'startArc'
            : i.endAngle >= i.startAngle
            ? 'endAngle'
            : 'startAngle'
          : o
          ? 0 <= i.height
            ? 'bottom'
            : 'top'
          : 0 <= i.width
          ? 'right'
          : 'left'),
      h = mc(n),
      l =
        (yc(t, h, {
          labelFetcher: r,
          labelDataIndex: e,
          defaultText: (function (t, e) {
            var n,
              i = t.mapDimensionsAll('defaultedLabel'),
              r = i.length;
            if (1 === r) return null != (n = Df(t, e, i[0])) ? n + '' : null;
            if (r) {
              for (var o = [], a = 0; a < i.length; a++) o.push(Df(t, e, i[a]));
              return o.join(' ');
            }
          })(r.getData(), e),
          inheritColor: l.fill,
          defaultOpacity: l.opacity,
          defaultOutsidePosition: u,
        }),
        t.getTextContent()),
      h =
        (a &&
          l &&
          ((a = n.get(['label', 'position'])),
          (t.textConfig.inside = 'middle' === a || null),
          (function (t, e, n, i) {
            if (dt(i)) t.setTextConfig({rotation: i});
            else if (F(e)) t.setTextConfig({rotation: 0});
            else {
              var r,
                i = t.shape,
                o = i.clockwise ? i.startAngle : i.endAngle,
                a = i.clockwise ? i.endAngle : i.startAngle,
                s = (o + a) / 2,
                i = n(e);
              switch (i) {
                case 'startArc':
                case 'insideStartArc':
                case 'middle':
                case 'insideEndArc':
                case 'endArc':
                  r = s;
                  break;
                case 'startAngle':
                case 'insideStartAngle':
                  r = o;
                  break;
                case 'endAngle':
                case 'insideEndAngle':
                  r = a;
                  break;
                default:
                  return t.setTextConfig({rotation: 0});
              }
              n = 1.5 * Math.PI - r;
              'middle' === i &&
                n > Math.PI / 2 &&
                n < 1.5 * Math.PI &&
                (n -= Math.PI),
                t.setTextConfig({rotation: n});
            }
          })(t, 'outside' === a ? u : a, Zx(o), n.get(['label', 'rotate']))),
        (u = l),
        (a = h),
        (o = r.getRawValue(e)),
        (l = function (t) {
          var e = s,
            n = t,
            i = e.mapDimensionsAll('defaultedLabel');
          if (!F(n)) return n + '';
          for (var r = [], o = 0; o < i.length; o++) {
            var a = e.getDimensionIndex(i[o]);
            0 <= a && r.push(n[a]);
          }
          return r.join(' ');
        }),
        u &&
          (((u = Mc(u)).prevValue = u.value),
          (u.value = o),
          (o = a.normal),
          (u.valueAnimation = o.get('valueAnimation')),
          u.valueAnimation) &&
          ((u.precision = o.get('precision')),
          (u.defaultInterpolatedText = l),
          (u.statesModels = a)),
        n.getModel(['emphasis']));
    Fl(t, h.get('focus'), h.get('blurScope'), h.get('disabled')),
      Wl(t, n),
      null != (r = i).startAngle &&
        null != r.endAngle &&
        r.startAngle === r.endAngle &&
        ((t.style.fill = 'none'),
        (t.style.stroke = 'none'),
        z(t.states, function (t) {
          t.style && (t.style.fill = t.style.stroke = 'none');
        }));
  }
  var Xx,
    qx = function () {},
    jx =
      (u(Kx, (Xx = vs)),
      (Kx.prototype.getDefaultShape = function () {
        return new qx();
      }),
      (Kx.prototype.buildPath = function (t, e) {
        for (
          var n = e.points,
            i = this.baseDimIdx,
            r = 1 - this.baseDimIdx,
            o = [],
            a = [],
            s = this.barWidth,
            l = 0;
          l < n.length;
          l += 3
        )
          (a[i] = s),
            (a[r] = n[l + 2]),
            (o[i] = n[l + i]),
            (o[r] = n[l + r]),
            t.rect(o[0], o[1], a[0], a[1]);
      }),
      Kx);
  function Kx(t) {
    t = Xx.call(this, t) || this;
    return (t.type = 'largeBar'), t;
  }
  function $x(t, e, n, i) {
    var r = t.getData(),
      o = r.getLayout('valueAxisHorizontal') ? 1 : 0,
      a = r.getLayout('largeDataIndices'),
      s = r.getLayout('size'),
      l = t.getModel('backgroundStyle'),
      u = r.getLayout('largeBackgroundPoints'),
      l =
        (u &&
          (((u = new jx({
            shape: {points: u},
            incremental: !!i,
            silent: !0,
            z2: 0,
          })).baseDimIdx = o),
          (u.largeDataIndices = a),
          (u.barWidth = s),
          u.useStyle(l.getItemStyle()),
          e.add(u),
          n) &&
          n.push(u),
        new jx({
          shape: {points: r.getLayout('largePoints')},
          incremental: !!i,
          ignoreCoarsePointer: !0,
          z2: 1,
        }));
    (l.baseDimIdx = o),
      (l.largeDataIndices = a),
      (l.barWidth = s),
      e.add(l),
      l.useStyle(r.getVisual('style')),
      (k(l).seriesIndex = t.seriesIndex),
      t.get('silent') || (l.on('mousedown', Qx), l.on('mousemove', Qx)),
      n && n.push(l);
  }
  var Qx = py(
    function (t) {
      t = (function (t, e, n) {
        for (
          var i = t.baseDimIdx,
            r = 1 - i,
            o = t.shape.points,
            a = t.largeDataIndices,
            s = [],
            l = [],
            u = t.barWidth,
            h = 0,
            c = o.length / 3;
          h < c;
          h++
        ) {
          var p = 3 * h;
          if (
            ((l[i] = u),
            (l[r] = o[2 + p]),
            (s[i] = o[p + i]),
            (s[r] = o[p + r]),
            l[r] < 0 && ((s[r] += l[r]), (l[r] = -l[r])),
            s[0] <= e && e <= s[0] + l[0] && s[1] <= n && n <= s[1] + l[1])
          )
            return a[h];
        }
        return -1;
      })(this, t.offsetX, t.offsetY);
      k(this).dataIndex = 0 <= t ? t : null;
    },
    30,
    !1
  );
  function Jx(t, e, n) {
    var i, r;
    return Dx(n, 'cartesian2d')
      ? ((i = e),
        (r = n.getArea()),
        {
          x: (t ? i : r).x,
          y: (t ? r : i).y,
          width: (t ? i : r).width,
          height: (t ? r : i).height,
        })
      : {
          cx: (r = n.getArea()).cx,
          cy: r.cy,
          r0: (t ? r : e).r0,
          r: (t ? r : e).r,
          startAngle: t ? e.startAngle : 0,
          endAngle: t ? e.endAngle : 2 * Math.PI,
        };
  }
  Z_(function (t) {
    t.registerChartView(Bx),
      t.registerSeriesModel(xx),
      t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, ct(s_, 'bar')),
      t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, {
        seriesType: 'bar',
        plan: Jg(),
        reset: function (t) {
          var e, x, n, w, b, S, i, r, M, T, C, I, D, k, A, P;
          if (l_(t))
            return (
              (e = t.getData()),
              (i = (x = t.coordinateSystem).getBaseAxis()),
              (n = x.getOtherAxis(i)),
              (w = e.getDimensionIndex(e.mapDimension(n.dim))),
              (b = e.getDimensionIndex(e.mapDimension(i.dim))),
              (S = t.get('showBackground', !0)),
              (i = e.mapDimension(n.dim)),
              (r = e.getCalculationInfo('stackResultDimension')),
              (M = kv(e, i) && !!e.getCalculationInfo('stackedOnSeries')),
              (T = n.isHorizontal()),
              (C = n.toGlobalCoord(n.dataToCoord('log' === n.type ? 1 : 0))),
              (I = u_(t)),
              (D = t.get('barMinHeight') || 0),
              (k = r && e.getDimensionIndex(r)),
              (A = e.getLayout('size')),
              (P = e.getLayout('offset')),
              {
                progress: function (t, e) {
                  for (
                    var n,
                      i = t.count,
                      r = I && e_(3 * i),
                      o = I && S && e_(3 * i),
                      a = I && e_(i),
                      s = x.master.getRect(),
                      l = T ? s.width : s.height,
                      u = e.getStore(),
                      h = 0;
                    null != (n = t.next());

                  ) {
                    var c,
                      p = u.get(M ? k : w, n),
                      d = u.get(b, n),
                      f = C,
                      g = void 0,
                      y = (M && (g = +p - u.get(w, n)), void 0),
                      m = void 0,
                      v = void 0,
                      _ = void 0;
                    T
                      ? ((c = x.dataToPoint([p, d])),
                        (y = f = M ? x.dataToPoint([g, d])[0] : f),
                        (m = c[1] + P),
                        (v = c[0] - f),
                        (_ = A),
                        Math.abs(v) < D && (v = (v < 0 ? -1 : 1) * D))
                      : ((c = x.dataToPoint([d, p])),
                        M && (f = x.dataToPoint([d, g])[1]),
                        (y = c[0] + P),
                        (m = f),
                        (v = A),
                        (_ = c[1] - f),
                        Math.abs(_) < D && (_ = (_ <= 0 ? -1 : 1) * D)),
                      I
                        ? ((r[h] = y),
                          (r[h + 1] = m),
                          (r[h + 2] = T ? v : _),
                          o &&
                            ((o[h] = T ? s.x : y),
                            (o[h + 1] = T ? m : s.y),
                            (o[h + 2] = l)),
                          (a[n] = n))
                        : e.setItemLayout(n, {x: y, y: m, width: v, height: _}),
                      (h += 3);
                  }
                  I &&
                    e.setLayout({
                      largePoints: r,
                      largeDataIndices: a,
                      largeBackgroundPoints: o,
                      valueAxisHorizontal: T,
                    });
                },
              }
            );
        },
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, {
        seriesType: 'bar',
        reset: function (t, e, n) {
          var i,
            r = t.getData(),
            o = t.get('sampling'),
            a = t.coordinateSystem,
            s = r.count();
          10 < s &&
            'cartesian2d' === a.type &&
            o &&
            ((i = a.getBaseAxis()),
            (a = a.getOtherAxis(i)),
            (i = i.getExtent()),
            (n = n.getDevicePixelRatio()),
            (i = Math.abs(i[1] - i[0]) * (n || 1)),
            (n = Math.round(s / i)),
            isFinite(n)) &&
            1 < n &&
            ('lttb' === o &&
              t.setData(r.lttbDownSample(r.mapDimension(a.dim), 1 / n)),
            (s = void 0),
            V(o) ? (s = gx[o]) : D(o) && (s = o),
            s) &&
            t.setData(r.downSample(r.mapDimension(a.dim), 1 / n, s, yx));
        },
      }),
      t.registerAction(
        {type: 'changeAxisOrder', event: 'changeAxisOrder', update: 'update'},
        function (e, t) {
          var n = e.componentType || 'series';
          t.eachComponent({mainType: n, query: e}, function (t) {
            e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo);
          });
        }
      );
  });
  var tw = 2 * Math.PI,
    ew = Math.PI / 180;
  function nw(t, e) {
    return Fp(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight(),
    });
  }
  function iw(t, e) {
    var n,
      i = nw(t, e),
      r = t.get('center'),
      o = t.get('radius'),
      a = (F(o) || (o = [0, o]), no(i.width, e.getWidth())),
      e = no(i.height, e.getHeight()),
      s = Math.min(a, e),
      l = no(o[0], s / 2),
      o = no(o[1], s / 2),
      s = t.coordinateSystem;
    return (
      (s = s
        ? ((n = (t = s.dataToPoint(r))[0] || 0), t[1] || 0)
        : ((n = no((r = F(r) ? r : [r, r])[0], a) + i.x), no(r[1], e) + i.y)),
      {cx: n, cy: s, r0: l, r: o}
    );
  }
  function rw(t, e, C) {
    e.eachSeriesByType(t, function (t) {
      var r,
        a = t.getData(),
        e = a.mapDimension('value'),
        n = nw(t, C),
        i = iw(t, C),
        s = i.cx,
        l = i.cy,
        u = i.r,
        h = i.r0,
        o = -t.get('startAngle') * ew,
        i = t.get('endAngle'),
        c = t.get('padAngle') * ew,
        i = 'auto' === i ? o - tw : -i * ew,
        p = t.get('minAngle') * ew + c,
        d = 0,
        f =
          (a.each(e, function (t) {
            isNaN(t) || d++;
          }),
          a.getSum(e)),
        g = (Math.PI / (f || d)) * 2,
        y = t.get('clockwise'),
        m = t.get('roseType'),
        v = t.get('stillShowZeroSum'),
        _ = a.getDataExtent(e),
        x = ((_[0] = 0), y ? 1 : -1),
        t = [o, i],
        w = (x * c) / 2,
        b = (Ja(t, !y), (o = t[0]), Math.abs(t[1] - o)),
        S = b,
        M = 0,
        T = o;
      a.setLayout({viewRect: n, r: u}),
        a.each(e, function (t, e) {
          var n, i, r, o;
          isNaN(t)
            ? a.setItemLayout(e, {
                angle: NaN,
                startAngle: NaN,
                endAngle: NaN,
                clockwise: y,
                cx: s,
                cy: l,
                r0: h,
                r: m ? NaN : u,
              })
            : ((n = 'area' !== m ? (0 === f && v ? g : t * g) : b / d) < p
                ? (S -= n = p)
                : (M += t),
              (i = T + x * n),
              (o = r = 0),
              (o = n < c ? (r = T + (x * n) / 2) : ((r = T + w), i - w)),
              a.setItemLayout(e, {
                angle: n,
                startAngle: r,
                endAngle: o,
                clockwise: y,
                cx: s,
                cy: l,
                r0: h,
                r: m ? eo(t, _, [h, u]) : u,
              }),
              (T = i));
        }),
        S < tw &&
          d &&
          (S <= 0.001
            ? ((r = b / d),
              a.each(e, function (t, e) {
                var n, i;
                isNaN(t) ||
                  ((i = t = 0),
                  (i =
                    ((n = a.getItemLayout(e)).angle = r) < c
                      ? (t = o + x * (e + 0.5) * r)
                      : ((t = o + x * e * r + w), o + x * (e + 1) * r - w)),
                  (n.startAngle = t),
                  (n.endAngle = i));
              }))
            : ((g = S / M),
              (T = o),
              a.each(e, function (t, e) {
                var n, i;
                isNaN(t) ||
                  ((i = n = 0),
                  (i =
                    (t = (e = a.getItemLayout(e)).angle === p ? p : t * g) < c
                      ? (n = T + (x * t) / 2)
                      : ((n = T + w), T + x * t - w)),
                  (e.startAngle = n),
                  (e.endAngle = i),
                  (T += x * t));
              })));
    });
  }
  var ow = Math.PI / 180;
  function aw(t, s, l, u, h, e, n, i, r, o) {
    if (!(t.length < 2)) {
      for (var a, c = t.length, p = 0; p < c; p++)
        'outer' === t[p].position &&
          'labelLine' === t[p].labelAlignTo &&
          ((a = t[p].label.x - o),
          (t[p].linePoints[1][0] += a),
          (t[p].label.x = o));
      if (G1(t, r, r + n)) {
        for (
          var d,
            f,
            g,
            y,
            m,
            v = t,
            _ = {list: [], maxY: 0},
            x = {list: [], maxY: 0},
            w = 0;
          w < v.length;
          w++
        )
          'none' === v[w].labelAlignTo &&
            ((f = (d = v[w]).label.y > l ? x : _),
            (g = Math.abs(d.label.y - l)) >= f.maxY &&
              ((m = d.label.x - s - d.len2 * h),
              (y = u + d.len),
              (m =
                Math.abs(m) < y
                  ? Math.sqrt((g * g) / (1 - (m * m) / y / y))
                  : y),
              (f.rB = m),
              (f.maxY = g)),
            f.list.push(d));
        b(_), b(x);
      }
    }
    function b(t) {
      for (var e = t.rB, n = e * e, i = 0; i < t.list.length; i++) {
        var r = t.list[i],
          o = Math.abs(r.label.y - l),
          a = u + r.len,
          a = a * a,
          o = Math.sqrt((1 - Math.abs((o * o) / n)) * a),
          a = s + (o + r.len2) * h,
          o = a - r.label.x;
        sw(r, r.targetTextWidth - o * h, !0), (r.label.x = a);
      }
    }
  }
  function sw(t, e, n) {
    var i, r, o, a, s, l, u;
    void 0 === n && (n = !1),
      null == t.labelStyleWidth &&
        ((s = (i = t.label).style),
        (r = t.rect),
        (l = s.backgroundColor),
        (u = (u = s.padding) ? u[1] + u[3] : 0),
        (s = s.overflow),
        e < (o = r.width + (l ? 0 : u)) || n) &&
        ((a = r.height),
        s && s.match('break')
          ? (i.setStyle('backgroundColor', null),
            i.setStyle('width', e - u),
            (s = i.getBoundingRect()),
            i.setStyle('width', Math.ceil(s.width)),
            i.setStyle('backgroundColor', l))
          : ((s = e - u),
            (l = !(e < o) && (!n || s > t.unconstrainedWidth) ? null : s),
            i.setStyle('width', l)),
        (u = i.getBoundingRect()),
        (r.width = u.width),
        (e = (i.style.margin || 0) + 2.1),
        (r.height = u.height + e),
        (r.y -= (r.height - a) / 2));
  }
  function lw(t) {
    return 'center' === t.position;
  }
  function uw(t) {
    var S,
      M,
      T = t.getData(),
      C = [],
      I = !1,
      D = (t.get('minShowLabelAngle') || 0) * ow,
      e = T.getLayout('viewRect'),
      k = T.getLayout('r'),
      A = e.width,
      P = e.x,
      n = e.y,
      e = e.height;
    function L(t) {
      t.ignore = !0;
    }
    if (
      (T.each(function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c = T.getItemGraphicEl(t),
          p = c.shape,
          d = c.getTextContent(),
          f = c.getTextGuideLine(),
          t = T.getItemModel(t),
          g = t.getModel('label'),
          y = g.get('position') || t.get(['emphasis', 'label', 'position']),
          m = g.get('distanceToLabelLine'),
          v = g.get('alignTo'),
          _ = no(g.get('edgeDistance'), A),
          x = g.get('bleedMargin'),
          t = t.getModel('labelLine'),
          w = no(t.get('length'), A),
          b = no(t.get('length2'), A);
        Math.abs(p.endAngle - p.startAngle) < D
          ? (z(d.states, L),
            (d.ignore = !0),
            f && (z(f.states, L), (f.ignore = !0)))
          : (function (t) {
              if (!t.ignore) return 1;
              for (var e in t.states) if (!1 === t.states[e].ignore) return 1;
            })(d) &&
            ((h = (p.startAngle + p.endAngle) / 2),
            (e = Math.cos(h)),
            (n = Math.sin(h)),
            (S = p.cx),
            (M = p.cy),
            (i = 'inside' === y || 'inner' === y),
            (s =
              'center' === y
                ? ((r = p.cx), (o = p.cy), 'center')
                : ((r =
                    (s = (i ? ((p.r + p.r0) / 2) * e : p.r * e) + S) + 3 * e),
                  (o =
                    (l = (i ? ((p.r + p.r0) / 2) * n : p.r * n) + M) + 3 * n),
                  i ||
                    ((a = s + e * (w + k - p.r)),
                    (p = l + n * (w + k - p.r)),
                    (u = a + (e < 0 ? -1 : 1) * b),
                    (r =
                      'edge' === v
                        ? e < 0
                          ? P + _
                          : P + A - _
                        : u + (e < 0 ? -m : m)),
                    (a = [
                      [s, l],
                      [a, (o = p)],
                      [u, p],
                    ])),
                  i
                    ? 'center'
                    : 'edge' === v
                    ? 0 < e
                      ? 'right'
                      : 'left'
                    : 0 < e
                    ? 'left'
                    : 'right')),
            (l = Math.PI),
            (u = 0),
            dt((p = g.get('rotate')))
              ? (u = p * (l / 180))
              : 'center' === y
              ? (u = 0)
              : 'radial' === p || !0 === p
              ? (u = e < 0 ? -h + l : -h)
              : 'tangential' === p &&
                'outside' !== y &&
                'outer' !== y &&
                ((g = Math.atan2(e, n)) < 0 && (g = 2 * l + g),
                (u = (g = 0 < n ? l + g : g) - l)),
            (I = !!u),
            (d.x = r),
            (d.y = o),
            (d.rotation = u),
            d.setStyle({verticalAlign: 'middle'}),
            i
              ? (d.setStyle({align: s}),
                (h = d.states.select) && ((h.x += d.x), (h.y += d.y)))
              : ((p = d.getBoundingRect().clone()).applyTransform(
                  d.getComputedTransform()
                ),
                (g = (d.style.margin || 0) + 2.1),
                (p.y -= g / 2),
                (p.height += g),
                C.push({
                  label: d,
                  labelLine: f,
                  position: y,
                  len: w,
                  len2: b,
                  minTurnAngle: t.get('minTurnAngle'),
                  maxSurfaceAngle: t.get('maxSurfaceAngle'),
                  surfaceNormal: new H(e, n),
                  linePoints: a,
                  textAlign: s,
                  labelDistance: m,
                  labelAlignTo: v,
                  edgeDistance: _,
                  bleedMargin: x,
                  rect: p,
                  unconstrainedWidth: p.width,
                  labelStyleWidth: d.style.width,
                })),
            c.setTextConfig({inside: i}));
      }),
      !I && t.get('avoidLabelOverlap'))
    ) {
      for (
        var i = C,
          r = S,
          t = M,
          o = k,
          a = A,
          s = P,
          l = [],
          u = [],
          h = Number.MAX_VALUE,
          c = -Number.MAX_VALUE,
          p = 0;
        p < i.length;
        p++
      ) {
        var d = i[p].label;
        lw(i[p]) ||
          (d.x < r
            ? ((h = Math.min(h, d.x)), l)
            : ((c = Math.max(c, d.x)), u)
          ).push(i[p]);
      }
      for (var f, p = 0; p < i.length; p++)
        !lw((g = i[p])) &&
          g.linePoints &&
          null == g.labelStyleWidth &&
          ((d = g.label),
          (y = g.linePoints),
          (f = void 0),
          (f =
            'edge' === g.labelAlignTo
              ? d.x < r
                ? y[2][0] - g.labelDistance - s - g.edgeDistance
                : s + a - g.edgeDistance - y[2][0] - g.labelDistance
              : 'labelLine' === g.labelAlignTo
              ? d.x < r
                ? h - s - g.bleedMargin
                : s + a - c - g.bleedMargin
              : d.x < r
              ? d.x - s - g.bleedMargin
              : s + a - d.x - g.bleedMargin),
          (g.targetTextWidth = f),
          sw(g, f));
      aw(u, r, t, o, 1, 0, e, 0, n, c), aw(l, r, t, o, -1, 0, e, 0, n, h);
      for (var g, y, m, v, _, p = 0; p < i.length; p++)
        !lw((g = i[p])) &&
          g.linePoints &&
          ((d = g.label),
          (y = g.linePoints),
          (m = 'edge' === g.labelAlignTo),
          (v = (v = d.style.padding) ? v[1] + v[3] : 0),
          (v = d.style.backgroundColor ? 0 : v),
          (v = g.rect.width + v),
          (_ = y[1][0] - y[2][0]),
          m
            ? d.x < r
              ? (y[2][0] = s + g.edgeDistance + v + g.labelDistance)
              : (y[2][0] = s + a - g.edgeDistance - v - g.labelDistance)
            : (d.x < r
                ? (y[2][0] = d.x + g.labelDistance)
                : (y[2][0] = d.x - g.labelDistance),
              (y[1][0] = y[2][0] + _)),
          (y[1][1] = y[2][1] = d.y));
    }
    for (var x = 0; x < C.length; x++) {
      var w,
        b = C[x],
        O = b.label,
        R = b.labelLine,
        B = isNaN(O.x) || isNaN(O.y);
      O &&
        (O.setStyle({align: b.textAlign}),
        B && (z(O.states, L), (O.ignore = !0)),
        (w = O.states.select)) &&
        ((w.x += O.x), (w.y += O.y)),
        R &&
          ((w = b.linePoints),
          B || !w
            ? (z(R.states, L), (R.ignore = !0))
            : (z1(w, b.minTurnAngle),
              (function (t, e, n) {
                if (n <= 180 && 0 < n) {
                  (n = (n / 180) * Math.PI),
                    D1.fromArray(t[0]),
                    k1.fromArray(t[1]),
                    A1.fromArray(t[2]),
                    H.sub(P1, k1, D1),
                    H.sub(L1, A1, k1);
                  var i = P1.len(),
                    r = L1.len();
                  if (!(i < 0.001 || r < 0.001))
                    if (
                      (P1.scale(1 / i),
                      L1.scale(1 / r),
                      P1.dot(e) < Math.cos(n))
                    ) {
                      (i = M1(k1.x, k1.y, A1.x, A1.y, D1.x, D1.y, R1, !1)),
                        (r = (B1.fromArray(R1), Math.PI / 2)),
                        (e = r + Math.acos(L1.dot(e)) - n);
                      if (r <= e) H.copy(B1, A1);
                      else {
                        B1.scaleAndAdd(L1, i / Math.tan(Math.PI / 2 - e));
                        n =
                          A1.x !== k1.x
                            ? (B1.x - k1.x) / (A1.x - k1.x)
                            : (B1.y - k1.y) / (A1.y - k1.y);
                        if (isNaN(n)) return;
                        n < 0 ? H.copy(B1, k1) : 1 < n && H.copy(B1, A1);
                      }
                      B1.toArray(t[1]);
                    }
                }
              })(w, b.surfaceNormal, b.maxSurfaceAngle),
              R.setShape({points: w}),
              (O.__hostTarget.textGuideLineConfig = {
                anchor: new H(w[0][0], w[0][1]),
              })));
    }
  }
  u(pw, (hw = Bu)),
    (pw.prototype.updateData = function (t, e, n, i) {
      var r = this,
        o = t.hostModel,
        a = t.getItemModel(e),
        s = a.getModel('emphasis'),
        l = t.getItemLayout(e),
        u = L(Px(a.getModel('itemStyle'), l, !0), l);
      isNaN(u.startAngle)
        ? r.setShape(u)
        : (i
            ? (r.setShape(u),
              (i = o.getShallow('animationType')),
              o.ecModel.ssr
                ? (Oh(r, {scaleX: 0, scaleY: 0}, o, {dataIndex: e, isFrom: !0}),
                  (r.originX = u.cx),
                  (r.originY = u.cy))
                : 'scale' === i
                ? ((r.shape.r = l.r0), Oh(r, {shape: {r: l.r}}, o, e))
                : null != n
                ? (r.setShape({startAngle: n, endAngle: n}),
                  Oh(
                    r,
                    {shape: {startAngle: l.startAngle, endAngle: l.endAngle}},
                    o,
                    e
                  ))
                : ((r.shape.endAngle = l.startAngle),
                  Lh(r, {shape: {endAngle: l.endAngle}}, o, e)))
            : (Nh(r), Lh(r, {shape: u}, o, e)),
          r.useStyle(t.getItemVisual(e, 'style')),
          Wl(r, a),
          (i = (l.startAngle + l.endAngle) / 2),
          (n = o.get('selectedOffset')),
          (u = Math.cos(i) * n),
          (i = Math.sin(i) * n),
          (n = a.getShallow('cursor')) && r.attr('cursor', n),
          this._updateLabel(o, t, e),
          (r.ensureState('emphasis').shape = L(
            {r: l.r + ((s.get('scale') && s.get('scaleSize')) || 0)},
            Px(s.getModel('itemStyle'), l)
          )),
          L(r.ensureState('select'), {
            x: u,
            y: i,
            shape: Px(a.getModel(['select', 'itemStyle']), l),
          }),
          L(r.ensureState('blur'), {
            shape: Px(a.getModel(['blur', 'itemStyle']), l),
          }),
          (n = r.getTextGuideLine()),
          (o = r.getTextContent()),
          n && L(n.ensureState('select'), {x: u, y: i}),
          L(o.ensureState('select'), {x: u, y: i}),
          Fl(this, s.get('focus'), s.get('blurScope'), s.get('disabled')));
    }),
    (pw.prototype._updateLabel = function (t, e, n) {
      var i = e.getItemModel(n),
        r = i.getModel('labelLine'),
        o = e.getItemVisual(n, 'style'),
        a = o && o.fill,
        o = o && o.opacity,
        e =
          (yc(this, mc(i), {
            labelFetcher: e.hostModel,
            labelDataIndex: n,
            inheritColor: a,
            defaultOpacity: o,
            defaultText: t.getFormattedLabel(n, 'normal') || e.getName(n),
          }),
          this.getTextContent()),
        n =
          (this.setTextConfig({position: null, rotation: null}),
          e.attr({z2: 10}),
          t.get(['label', 'position']));
      'outside' !== n && 'outer' !== n
        ? this.removeTextGuideLine()
        : (this.getTextGuideLine() ||
            ((e = new qu()), this.setTextGuideLine(e)),
          F1(this, V1(i), {
            stroke: a,
            opacity: bt(r.get(['lineStyle', 'opacity']), o, 1),
          }));
    });
  var hw,
    cw = pw;
  function pw(t, e, n) {
    var i = hw.call(this) || this,
      r = ((i.z2 = 2), new Vs());
    return i.setTextContent(r), i.updateData(t, e, n, !0), i;
  }
  u(gw, (dw = ny)),
    (gw.prototype.render = function (e, t, n, i) {
      var r,
        o = e.getData(),
        a = this._data,
        s = this.group;
      if (!a && 0 < o.count()) {
        for (
          var l = o.getItemLayout(0), u = 1;
          isNaN(l && l.startAngle) && u < o.count();
          ++u
        )
          l = o.getItemLayout(u);
        l && (r = l.startAngle);
      }
      this._emptyCircleSector && s.remove(this._emptyCircleSector),
        0 === o.count() &&
          e.get('showEmptyCircle') &&
          ((n = new Bu({shape: iw(e, n)})).useStyle(
            e.getModel('emptyCircleStyle').getItemStyle()
          ),
          (this._emptyCircleSector = n),
          s.add(n)),
        o
          .diff(a)
          .add(function (t) {
            var e = new cw(o, t, r);
            o.setItemGraphicEl(t, e), s.add(e);
          })
          .update(function (t, e) {
            e = a.getItemGraphicEl(e);
            e.updateData(o, t, r),
              e.off('click'),
              s.add(e),
              o.setItemGraphicEl(t, e);
          })
          .remove(function (t) {
            Eh(a.getItemGraphicEl(t), e, t);
          })
          .execute(),
        uw(e),
        'expansion' !== e.get('animationTypeUpdate') && (this._data = o);
    }),
    (gw.prototype.dispose = function () {}),
    (gw.prototype.containPoint = function (t, e) {
      var n,
        e = e.getData().getItemLayout(0);
      if (e)
        return (
          (n = t[0] - e.cx),
          (t = t[1] - e.cy),
          (n = Math.sqrt(n * n + t * t)) <= e.r && n >= e.r0
        );
    }),
    (gw.type = 'pie');
  var dw,
    fw = gw;
  function gw() {
    var t = (null !== dw && dw.apply(this, arguments)) || this;
    return (t.ignoreLabelLineUpdate = !0), t;
  }
  (mw.prototype.getAllNames = function () {
    var t = this._getRawData();
    return t.mapArray(t.getName);
  }),
    (mw.prototype.containName = function (t) {
      return 0 <= this._getRawData().indexOfName(t);
    }),
    (mw.prototype.indexOfName = function (t) {
      return this._getDataWithEncodedVisual().indexOfName(t);
    }),
    (mw.prototype.getItemVisual = function (t, e) {
      return this._getDataWithEncodedVisual().getItemVisual(t, e);
    });
  var yw = mw;
  function mw(t, e) {
    (this._getDataWithEncodedVisual = t), (this._getRawData = e);
  }
  var vw,
    _w = Bo(),
    xw =
      (u(ww, (vw = Gg)),
      (ww.prototype.init = function (t) {
        vw.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new yw(
            S(this.getData, this),
            S(this.getRawData, this)
          )),
          this._defaultLabelLine(t);
      }),
      (ww.prototype.mergeOption = function () {
        vw.prototype.mergeOption.apply(this, arguments);
      }),
      (ww.prototype.getInitialData = function () {
        return (
          (e = F(
            (e = {
              coordDimensions: ['value'],
              encodeDefaulter: ct(ud, (t = this)),
            })
          )
            ? {coordDimensions: e}
            : L({encodeDefine: t.getEncode()}, e)),
          (i = t.getSource()),
          (e = Mv(i, e).dimensions),
          (e = new Sv(e, t)).initData(i, n),
          e
        );
        var t, e, n, i;
      }),
      (ww.prototype.getDataParams = function (t) {
        var e,
          n = this.getData(),
          i = _w(n),
          r = i.seats,
          i =
            (r ||
              ((e = []),
              n.each(n.mapDimension('value'), function (t) {
                e.push(t);
              }),
              (r = i.seats = lo(e, n.hostModel.get('percentPrecision')))),
            vw.prototype.getDataParams.call(this, t));
        return (i.percent = r[t] || 0), i.$vars.push('percent'), i;
      }),
      (ww.prototype._defaultLabelLine = function (t) {
        Mo(t, 'labelLine', ['show']);
        var e = t.labelLine,
          n = t.emphasis.labelLine;
        (e.show = e.show && t.label.show),
          (n.show = n.show && t.emphasis.label.show);
      }),
      (ww.type = 'series.pie'),
      (ww.defaultOption = {
        z: 2,
        legendHoverLink: !0,
        colorBy: 'data',
        center: ['50%', '50%'],
        radius: [0, '75%'],
        clockwise: !0,
        startAngle: 90,
        endAngle: 'auto',
        padAngle: 0,
        minAngle: 0,
        minShowLabelAngle: 0,
        selectedOffset: 10,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          rotate: 0,
          show: !0,
          overflow: 'truncate',
          position: 'outer',
          alignTo: 'none',
          edgeDistance: '25%',
          bleedMargin: 10,
          distanceToLabelLine: 5,
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: {width: 1, type: 'solid'},
        },
        itemStyle: {borderWidth: 1, borderJoin: 'round'},
        showEmptyCircle: !0,
        emptyCircleStyle: {color: 'lightgray', opacity: 1},
        labelLayout: {hideOverlap: !0},
        emphasis: {scale: !0, scaleSize: 5},
        avoidLabelOverlap: !0,
        animationType: 'expansion',
        animationDuration: 1e3,
        animationTypeUpdate: 'transition',
        animationEasingUpdate: 'cubicInOut',
        animationDurationUpdate: 500,
        animationEasing: 'cubicInOut',
      }),
      ww);
  function ww() {
    return (null !== vw && vw.apply(this, arguments)) || this;
  }
  Z_(function (t) {
    t.registerChartView(fw),
      t.registerSeriesModel(xw),
      Gy('pie', t.registerAction),
      t.registerLayout(ct(rw, 'pie')),
      t.registerProcessor({
        seriesType: 'pie',
        reset: function (t, e) {
          var i,
            r = e.findComponents({mainType: 'legend'});
          r &&
            r.length &&
            (i = t.getData()).filterSelf(function (t) {
              for (var e = i.getName(t), n = 0; n < r.length; n++)
                if (!r[n].isSelected(e)) return !1;
              return !0;
            });
        },
      }),
      t.registerProcessor({
        seriesType: 'pie',
        reset: function (t, e) {
          var n = t.getData();
          n.filterSelf(function (t) {
            var e = n.mapDimension('value'),
              e = n.get(e, t);
            return !(dt(e) && !isNaN(e) && e < 0);
          });
        },
      });
  });
  u(Mw, (bw = g)),
    (Mw.type = 'grid'),
    (Mw.dependencies = ['xAxis', 'yAxis']),
    (Mw.layoutMode = 'box'),
    (Mw.defaultOption = {
      show: !1,
      z: 0,
      left: '10%',
      top: 60,
      right: '10%',
      bottom: 70,
      containLabel: !1,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 1,
      borderColor: '#ccc',
    });
  var bw,
    Sw = Mw;
  function Mw() {
    return (null !== bw && bw.apply(this, arguments)) || this;
  }
  u(Iw, (Tw = g)),
    (Iw.prototype.getCoordSysModel = function () {
      return this.getReferringComponents('grid', Fo).models[0];
    }),
    (Iw.type = 'cartesian2dAxis');
  var Tw,
    Cw = Iw;
  function Iw() {
    return (null !== Tw && Tw.apply(this, arguments)) || this;
  }
  at(Cw, H_);
  var jo = {
      show: !0,
      z: 0,
      inverse: !1,
      name: '',
      nameLocation: 'end',
      nameRotate: null,
      nameTruncate: {maxWidth: null, ellipsis: '...', placeholder: '.'},
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: {show: !1},
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: {color: '#6E7079', width: 1, type: 'solid'},
        symbol: ['none', 'none'],
        symbolSize: [10, 15],
      },
      axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12,
      },
      splitLine: {
        show: !0,
        lineStyle: {color: ['#E0E6F1'], width: 1, type: 'solid'},
      },
      splitArea: {
        show: !1,
        areaStyle: {color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']},
      },
    },
    qy = d(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: 'auto'},
        axisLabel: {interval: 'auto'},
      },
      jo
    ),
    Jy = d(
      {
        boundaryGap: [0, 0],
        axisLine: {show: 'auto'},
        axisTick: {show: 'auto'},
        splitNumber: 5,
        minorTick: {show: !1, splitNumber: 5, length: 3, lineStyle: {}},
        minorSplitLine: {show: !1, lineStyle: {color: '#F4F7FD', width: 1}},
      },
      jo
    ),
    Dw = {
      category: qy,
      value: Jy,
      time: d(
        {
          splitNumber: 6,
          axisLabel: {
            showMinLabel: !1,
            showMaxLabel: !1,
            rich: {primary: {fontWeight: 'bold'}},
          },
          splitLine: {show: !1},
        },
        Jy
      ),
      log: E({logBase: 10}, Jy),
    },
    kw = {value: 1, category: 1, time: 1, log: 1};
  function Aw(o, a, s, l) {
    z(kw, function (t, r) {
      var e,
        n = d(d({}, Dw[r], !0), l, !0),
        n =
          (u(i, (e = s)),
          (i.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = Vp(this),
              i = n ? Wp(t) : {};
            d(t, e.getTheme().get(r + 'Axis')),
              d(t, this.getDefaultOption()),
              (t.type = Pw(t)),
              n && Hp(t, i, n);
          }),
          (i.prototype.optionUpdated = function () {
            'category' === this.option.type &&
              (this.__ordinalMeta = Bv.createByAxisModel(this));
          }),
          (i.prototype.getCategories = function (t) {
            var e = this.option;
            if ('category' === e.type)
              return t ? e.data : this.__ordinalMeta.categories;
          }),
          (i.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta;
          }),
          (i.type = a + 'Axis.' + r),
          (i.defaultOption = n),
          i);
      function i() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.type = a + 'Axis.' + r), t;
      }
      o.registerComponentModel(n);
    }),
      o.registerSubTypeDefaulter(a + 'Axis', Pw);
  }
  function Pw(t) {
    return t.type || (t.data ? 'category' : 'value');
  }
  function Lw(t) {
    (this.type = 'cartesian'),
      (this._dimList = []),
      (this._axes = {}),
      (this.name = t || '');
  }
  (Lw.prototype.getAxis = function (t) {
    return this._axes[t];
  }),
    (Lw.prototype.getAxes = function () {
      return N(
        this._dimList,
        function (t) {
          return this._axes[t];
        },
        this
      );
    }),
    (Lw.prototype.getAxesByScale = function (e) {
      return (
        (e = e.toLowerCase()),
        ut(this.getAxes(), function (t) {
          return t.scale.type === e;
        })
      );
    }),
    (Lw.prototype.addAxis = function (t) {
      var e = t.dim;
      (this._axes[e] = t), this._dimList.push(e);
    });
  var Ow = ['x', 'y'];
  function Rw(t) {
    return 'interval' === t.type || 'time' === t.type;
  }
  u(Ew, (Bw = Lw)),
    (Ew.prototype.calcAffineTransform = function () {
      this._transform = this._invTransform = null;
      var t,
        e,
        n,
        i,
        r = this.getAxis('x').scale,
        o = this.getAxis('y').scale;
      Rw(r) &&
        Rw(o) &&
        ((r = r.getExtent()),
        (o = o.getExtent()),
        (i = this.dataToPoint([r[0], o[0]])),
        (e = this.dataToPoint([r[1], o[1]])),
        (t = r[1] - r[0]),
        (n = o[1] - o[0]),
        t) &&
        n &&
        ((t = (e[0] - i[0]) / t),
        (e = (e[1] - i[1]) / n),
        (n = i[0] - r[0] * t),
        (r = i[1] - o[0] * e),
        (i = this._transform = [t, 0, 0, e, n, r]),
        (this._invTransform = Ve([], i)));
    }),
    (Ew.prototype.getBaseAxis = function () {
      return (
        this.getAxesByScale('ordinal')[0] ||
        this.getAxesByScale('time')[0] ||
        this.getAxis('x')
      );
    }),
    (Ew.prototype.containPoint = function (t) {
      var e = this.getAxis('x'),
        n = this.getAxis('y');
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    }),
    (Ew.prototype.containData = function (t) {
      return (
        this.getAxis('x').containData(t[0]) &&
        this.getAxis('y').containData(t[1])
      );
    }),
    (Ew.prototype.containZone = function (t, e) {
      var t = this.dataToPoint(t),
        e = this.dataToPoint(e),
        n = this.getArea(),
        e = new Z(t[0], t[1], e[0] - t[0], e[1] - t[1]);
      return n.intersect(e);
    }),
    (Ew.prototype.dataToPoint = function (t, e, n) {
      n = n || [];
      var i,
        r = t[0],
        o = t[1];
      return this._transform &&
        null != r &&
        isFinite(r) &&
        null != o &&
        isFinite(o)
        ? ee(n, t, this._transform)
        : ((t = this.getAxis('x')),
          (i = this.getAxis('y')),
          (n[0] = t.toGlobalCoord(t.dataToCoord(r, e))),
          (n[1] = i.toGlobalCoord(i.dataToCoord(o, e))),
          n);
    }),
    (Ew.prototype.clampData = function (t, e) {
      var n = this.getAxis('x').scale,
        i = this.getAxis('y').scale,
        r = n.getExtent(),
        o = i.getExtent(),
        n = n.parse(t[0]),
        i = i.parse(t[1]);
      return (
        ((e = e || [])[0] = Math.min(
          Math.max(Math.min(r[0], r[1]), n),
          Math.max(r[0], r[1])
        )),
        (e[1] = Math.min(
          Math.max(Math.min(o[0], o[1]), i),
          Math.max(o[0], o[1])
        )),
        e
      );
    }),
    (Ew.prototype.pointToData = function (t, e) {
      var n,
        i,
        r = [];
      return this._invTransform
        ? ee(r, t, this._invTransform)
        : ((n = this.getAxis('x')),
          (i = this.getAxis('y')),
          (r[0] = n.coordToData(n.toLocalCoord(t[0]), e)),
          (r[1] = i.coordToData(i.toLocalCoord(t[1]), e)),
          r);
    }),
    (Ew.prototype.getOtherAxis = function (t) {
      return this.getAxis('x' === t.dim ? 'y' : 'x');
    }),
    (Ew.prototype.getArea = function (t) {
      t = t || 0;
      var e = this.getAxis('x').getGlobalExtent(),
        n = this.getAxis('y').getGlobalExtent(),
        i = Math.min(e[0], e[1]) - t,
        r = Math.min(n[0], n[1]) - t,
        e = Math.max(e[0], e[1]) - i + t,
        n = Math.max(n[0], n[1]) - r + t;
      return new Z(i, r, e, n);
    });
  var Bw,
    zw = Ew;
  function Ew() {
    var t = (null !== Bw && Bw.apply(this, arguments)) || this;
    return (t.type = 'cartesian2d'), (t.dimensions = Ow), t;
  }
  u(Vw, (Nw = zc)),
    (Vw.prototype.isHorizontal = function () {
      var t = this.position;
      return 'top' === t || 'bottom' === t;
    }),
    (Vw.prototype.getGlobalExtent = function (t) {
      var e = this.getExtent();
      return (
        (e[0] = this.toGlobalCoord(e[0])),
        (e[1] = this.toGlobalCoord(e[1])),
        t && e[0] > e[1] && e.reverse(),
        e
      );
    }),
    (Vw.prototype.pointToData = function (t, e) {
      return this.coordToData(
        this.toLocalCoord(t['x' === this.dim ? 0 : 1]),
        e
      );
    }),
    (Vw.prototype.setCategorySortInfo = function (t) {
      if ('category' !== this.type) return !1;
      (this.model.option.categorySortInfo = t), this.scale.setSortInfo(t);
    });
  var Nw,
    Fw = Vw;
  function Vw(t, e, n, i, r) {
    t = Nw.call(this, t, e, n) || this;
    return (
      (t.index = 0), (t.type = i || 'value'), (t.position = r || 'bottom'), t
    );
  }
  function Hw(t, e, n) {
    n = n || {};
    var t = t.coordinateSystem,
      i = e.axis,
      r = {},
      o = i.getAxesOnZeroOf()[0],
      a = i.position,
      s = o ? 'onZero' : a,
      i = i.dim,
      t = t.getRect(),
      t = [t.x, t.x + t.width, t.y, t.y + t.height],
      l = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2},
      u = e.get('offset') || 0,
      u = 'x' === i ? [t[2] - u, t[3] + u] : [t[0] - u, t[1] + u],
      h =
        (o &&
          ((h = o.toGlobalCoord(o.dataToCoord(0))),
          (u[l.onZero] = Math.max(Math.min(h, u[1]), u[0]))),
        (r.position = ['y' === i ? u[l[s]] : t[0], 'x' === i ? u[l[s]] : t[3]]),
        (r.rotation = (Math.PI / 2) * ('x' === i ? 0 : 1)),
        (r.labelDirection =
          r.tickDirection =
          r.nameDirection =
            {top: -1, bottom: 1, left: -1, right: 1}[a]),
        (r.labelOffset = o ? u[l[a]] - u[l.onZero] : 0),
        e.get(['axisTick', 'inside']) && (r.tickDirection = -r.tickDirection),
        wt(n.labelInside, e.get(['axisLabel', 'inside'])) &&
          (r.labelDirection = -r.labelDirection),
        e.get(['axisLabel', 'rotate']));
    return (r.labelRotate = 'top' === s ? -h : h), (r.z2 = 1), r;
  }
  function Ww(t) {
    return 'cartesian2d' === t.get('coordinateSystem');
  }
  function Gw(i) {
    var r = {xAxisModel: null, yAxisModel: null};
    return (
      z(r, function (t, e) {
        var n = e.replace(/Model$/, ''),
          n = i.getReferringComponents(n, Fo).models[0];
        r[e] = n;
      }),
      r
    );
  }
  var Uw = Math.log;
  (Yw.prototype.getRect = function () {
    return this._rect;
  }),
    (Yw.prototype.update = function (t, e) {
      var n = this._axesMap;
      function i(t) {
        var d,
          e = ht(t),
          n = e.length;
        if (n) {
          for (var i = [], r = n - 1; 0 <= r; r--) {
            var o = t[+e[r]],
              a = o.model,
              s = o.scale;
            Nv(s) && a.get('alignTicks') && null == a.get('interval')
              ? i.push(o)
              : (O_(s, a), Nv(s) && (d = o));
          }
          i.length &&
            (d || O_((d = i.pop()).scale, d.model),
            z(i, function (t) {
              var e = t.scale,
                t = t.model,
                n = d.scale,
                i = $v.prototype,
                r = i.getTicks.call(n),
                o = i.getTicks.call(n, !0),
                a = r.length - 1,
                n = i.getInterval.call(n),
                s = (t = L_(e, t)).extent,
                l = t.fixMin,
                t = t.fixMax,
                u =
                  ('log' === e.type &&
                    ((u = Uw(e.base)), (s = [Uw(s[0]) / u, Uw(s[1]) / u])),
                  e.setExtent(s[0], s[1]),
                  e.calcNiceExtent({splitNumber: a, fixMin: l, fixMax: t}),
                  i.getExtent.call(e)),
                h =
                  (l && (s[0] = u[0]),
                  t && (s[1] = u[1]),
                  i.getInterval.call(e)),
                c = s[0],
                p = s[1];
              if (l && t) h = (p - c) / a;
              else if (l)
                for (
                  p = s[0] + h * a;
                  p < s[1] && isFinite(p) && isFinite(s[1]);

                )
                  (h = Vv(h)), (p = s[0] + h * a);
              else if (t)
                for (
                  c = s[1] - h * a;
                  c > s[0] && isFinite(c) && isFinite(s[0]);

                )
                  (h = Vv(h)), (c = s[1] - h * a);
              else {
                u = (h = a < e.getTicks().length - 1 ? Vv(h) : h) * a;
                (c = io((p = Math.ceil(s[1] / h) * h) - u)) < 0 && 0 <= s[0]
                  ? ((c = 0), (p = io(u)))
                  : 0 < p && s[1] <= 0 && ((p = 0), (c = -io(u)));
              }
              (l = (r[0].value - o[0].value) / n),
                (t = (r[a].value - o[a].value) / n),
                i.setExtent.call(e, c + h * l, p + h * t),
                i.setInterval.call(e, h),
                (l || t) && i.setNiceExtent.call(e, c + h, p - h);
            }));
        }
      }
      this._updateScale(t, this.model), i(n.x), i(n.y);
      var r = {};
      z(n.x, function (t) {
        qw(n, 'y', t, r);
      }),
        z(n.y, function (t) {
          qw(n, 'x', t, r);
        }),
        this.resize(this.model, e);
    }),
    (Yw.prototype.resize = function (t, e, n) {
      var i = t.getBoxLayoutParams(),
        n = !n && t.get('containLabel'),
        a = Fp(i, {width: e.getWidth(), height: e.getHeight()}),
        r = ((this._rect = a), this._axesList);
      function o() {
        z(r, function (t) {
          var e,
            n,
            i = t.isHorizontal(),
            r = i ? [0, a.width] : [0, a.height],
            o = t.inverse ? 1 : 0;
          t.setExtent(r[o], r[1 - o]),
            (r = t),
            (e = i ? a.x : a.y),
            (o = r.getExtent()),
            (n = o[0] + o[1]),
            (r.toGlobalCoord =
              'x' === r.dim
                ? function (t) {
                    return t + e;
                  }
                : function (t) {
                    return n - t + e;
                  }),
            (r.toLocalCoord =
              'x' === r.dim
                ? function (t) {
                    return t - e;
                  }
                : function (t) {
                    return n - t + e;
                  });
        });
      }
      o(),
        n &&
          (z(r, function (t) {
            var e, n, i;
            t.model.get(['axisLabel', 'inside']) ||
              ((e = E_(t)) &&
                ((n = t.isHorizontal() ? 'height' : 'width'),
                (i = t.model.get(['axisLabel', 'margin'])),
                (a[n] -= e[n] + i),
                'top' === t.position
                  ? (a.y += e.height + i)
                  : 'left' === t.position && (a.x += e.width + i)));
          }),
          o()),
        z(this._coordsList, function (t) {
          t.calcAffineTransform();
        });
    }),
    (Yw.prototype.getAxis = function (t, e) {
      t = this._axesMap[t];
      if (null != t) return t[e || 0];
    }),
    (Yw.prototype.getAxes = function () {
      return this._axesList.slice();
    }),
    (Yw.prototype.getCartesian = function (t, e) {
      if (null != t && null != e) return this._coordsMap['x' + t + 'y' + e];
      O(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
      for (var n = 0, i = this._coordsList; n < i.length; n++)
        if (i[n].getAxis('x').index === t || i[n].getAxis('y').index === e)
          return i[n];
    }),
    (Yw.prototype.getCartesians = function () {
      return this._coordsList.slice();
    }),
    (Yw.prototype.convertToPixel = function (t, e, n) {
      e = this._findConvertTarget(e);
      return e.cartesian
        ? e.cartesian.dataToPoint(n)
        : e.axis
        ? e.axis.toGlobalCoord(e.axis.dataToCoord(n))
        : null;
    }),
    (Yw.prototype.convertFromPixel = function (t, e, n) {
      e = this._findConvertTarget(e);
      return e.cartesian
        ? e.cartesian.pointToData(n)
        : e.axis
        ? e.axis.coordToData(e.axis.toLocalCoord(n))
        : null;
    }),
    (Yw.prototype._findConvertTarget = function (t) {
      var e,
        n,
        i = t.seriesModel,
        r =
          t.xAxisModel ||
          (i && i.getReferringComponents('xAxis', Fo).models[0]),
        o =
          t.yAxisModel ||
          (i && i.getReferringComponents('yAxis', Fo).models[0]),
        t = t.gridModel,
        a = this._coordsList;
      return (
        i
          ? I(a, (e = i.coordinateSystem)) < 0 && (e = null)
          : r && o
          ? (e = this.getCartesian(r.componentIndex, o.componentIndex))
          : r
          ? (n = this.getAxis('x', r.componentIndex))
          : o
          ? (n = this.getAxis('y', o.componentIndex))
          : t && t.coordinateSystem === this && (e = this._coordsList[0]),
        {cartesian: e, axis: n}
      );
    }),
    (Yw.prototype.containPoint = function (t) {
      var e = this._coordsList[0];
      if (e) return e.containPoint(t);
    }),
    (Yw.prototype._initCartesian = function (o, t, e) {
      var a = this,
        s = this,
        l = {left: !1, right: !1, top: !1, bottom: !1},
        u = {x: {}, y: {}},
        h = {x: 0, y: 0};
      function n(r) {
        return function (t, e) {
          var n, i;
          Xw(t, o) &&
            ((n = t.get('position')),
            'x' === r
              ? 'top' !== n &&
                'bottom' !== n &&
                (n = l.bottom ? 'top' : 'bottom')
              : 'left' !== n &&
                'right' !== n &&
                (n = l.left ? 'right' : 'left'),
            (l[n] = !0),
            (i =
              'category' ===
              (n = new Fw(r, R_(t), [0, 0], t.get('type'), n)).type),
            (n.onBand = i && t.get('boundaryGap')),
            (n.inverse = t.get('inverse')),
            ((t.axis = n).model = t),
            (n.grid = s),
            (n.index = e),
            s._axesList.push(n),
            (u[r][e] = n),
            h[r]++);
        };
      }
      t.eachComponent('xAxis', n('x'), this),
        t.eachComponent('yAxis', n('y'), this),
        h.x && h.y
          ? z((this._axesMap = u).x, function (i, r) {
              z(u.y, function (t, e) {
                var e = 'x' + r + 'y' + e,
                  n = new zw(e);
                (n.master = a),
                  (n.model = o),
                  (a._coordsMap[e] = n),
                  a._coordsList.push(n),
                  n.addAxis(i),
                  n.addAxis(t);
              });
            })
          : ((this._axesMap = {}), (this._axesList = []));
    }),
    (Yw.prototype._updateScale = function (t, i) {
      function r(e, n) {
        z(V_(e, n.dim), function (t) {
          n.scale.unionExtentFromData(e, t);
        });
      }
      z(this._axesList, function (t) {
        var e;
        t.scale.setExtent(1 / 0, -1 / 0),
          'category' === t.type &&
            ((e = t.model.get('categorySortInfo')), t.scale.setSortInfo(e));
      }),
        t.eachSeries(function (t) {
          var e, n;
          Ww(t) &&
            ((n = (e = Gw(t)).xAxisModel), (e = e.yAxisModel), Xw(n, i)) &&
            Xw(e, i) &&
            ((n = this.getCartesian(n.componentIndex, e.componentIndex)),
            (e = t.getData()),
            (t = n.getAxis('x')),
            (n = n.getAxis('y')),
            r(e, t),
            r(e, n));
        }, this);
    }),
    (Yw.prototype.getTooltipAxes = function (n) {
      var i = [],
        r = [];
      return (
        z(this.getCartesians(), function (t) {
          var e = null != n && 'auto' !== n ? t.getAxis(n) : t.getBaseAxis(),
            t = t.getOtherAxis(e);
          I(i, e) < 0 && i.push(e), I(r, t) < 0 && r.push(t);
        }),
        {baseAxes: i, otherAxes: r}
      );
    }),
    (Yw.create = function (i, r) {
      var o = [];
      return (
        i.eachComponent('grid', function (t, e) {
          var n = new Yw(t, i, r);
          (n.name = 'grid_' + e),
            n.resize(t, r, !0),
            (t.coordinateSystem = n),
            o.push(n);
        }),
        i.eachSeries(function (t) {
          var e, n, i;
          Ww(t) &&
            ((e = (n = Gw(t)).xAxisModel),
            (n = n.yAxisModel),
            (i = e.getCoordSysModel().coordinateSystem),
            (t.coordinateSystem = i.getCartesian(
              e.componentIndex,
              n.componentIndex
            )));
        }),
        o
      );
    }),
    (Yw.dimensions = Ow);
  var Zw = Yw;
  function Yw(t, e, n) {
    (this.type = 'grid'),
      (this._coordsMap = {}),
      (this._coordsList = []),
      (this._axesMap = {}),
      (this._axesList = []),
      (this.axisPointerEnabled = !0),
      (this.dimensions = Ow),
      this._initCartesian(t, e, n),
      (this.model = t);
  }
  function Xw(t, e) {
    return t.getCoordSysModel() === e;
  }
  function qw(t, e, n, i) {
    n.getAxesOnZeroOf = function () {
      return r ? [r] : [];
    };
    var r,
      o = t[e],
      t = n.model,
      e = t.get(['axisLine', 'onZero']),
      n = t.get(['axisLine', 'onZeroAxisIndex']);
    if (e) {
      if (null != n) jw(o[n]) && (r = o[n]);
      else
        for (var a in o)
          if (o.hasOwnProperty(a) && jw(o[a]) && !i[s(o[a])]) {
            r = o[a];
            break;
          }
      r && (i[s(r)] = !0);
    }
    function s(t) {
      return t.dim + '_' + t.index;
    }
  }
  function jw(t) {
    return (
      t &&
      'category' !== t.type &&
      'time' !== t.type &&
      ((e = (t = (t = t).scale.getExtent())[0]),
      (t = t[1]),
      !((0 < e && 0 < t) || (e < 0 && t < 0)))
    );
    var e;
  }
  var Kw = Math.PI,
    $w =
      ((Qw.prototype.hasBuilder = function (t) {
        return !!Jw[t];
      }),
      (Qw.prototype.add = function (t) {
        Jw[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }),
      (Qw.prototype.getGroup = function () {
        return this.group;
      }),
      (Qw.innerTextLayout = function (t, e, n) {
        var i,
          e = uo(e - t),
          t = ho(e)
            ? ((i = 0 < n ? 'top' : 'bottom'), 'center')
            : ho(e - Kw)
            ? ((i = 0 < n ? 'bottom' : 'top'), 'center')
            : ((i = 'middle'),
              0 < e && e < Kw
                ? 0 < n
                  ? 'right'
                  : 'left'
                : 0 < n
                ? 'left'
                : 'right');
        return {rotation: e, textAlign: t, textVerticalAlign: i};
      }),
      (Qw.makeAxisEventDataBase = function (t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return (e[t.mainType + 'Index'] = t.componentIndex), e;
      }),
      (Qw.isLabelSilent = function (t) {
        var e = t.get('tooltip');
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show));
      }),
      Qw);
  function Qw(t, e) {
    (this.group = new Gr()),
      (this.opt = e),
      (this.axisModel = t),
      E(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function () {
          return !0;
        },
      });
    t = new Gr({x: e.position[0], y: e.position[1], rotation: e.rotation});
    t.updateTransform(), (this._transformGroup = t);
  }
  var Jw = {
    axisLine: function (i, t, r, e) {
      var o,
        a,
        s,
        l,
        u,
        h,
        c,
        n = t.get(['axisLine', 'show']);
      (n =
        'auto' === n && i.handleAutoShown
          ? i.handleAutoShown('axisLine')
          : n) &&
        ((n = t.axis.getExtent()),
        (e = e.transform),
        (o = [n[0], 0]),
        (a = [n[1], 0]),
        (s = a[0] < o[0]),
        e && (ee(o, o, e), ee(a, a, e)),
        (l = L(
          {lineCap: 'round'},
          t.getModel(['axisLine', 'lineStyle']).getLineStyle()
        )),
        Qh(
          (n = new Ju({
            shape: {x1: o[0], y1: o[1], x2: a[0], y2: a[1]},
            style: l,
            strokeContainThreshold: i.strokeContainThreshold || 5,
            silent: !0,
            z2: 1,
          })).shape,
          n.style.lineWidth
        ),
        (n.anid = 'line'),
        r.add(n),
        null != (u = t.get(['axisLine', 'symbol']))) &&
        ((e = t.get(['axisLine', 'symbolSize'])),
        V(u) && (u = [u, u]),
        (V(e) || dt(e)) && (e = [e, e]),
        (n = (function (t, e) {
          if (null != t)
            return [
              no((t = F(t) ? t : [t, t])[0], e[0]) || 0,
              no(R(t[1], t[0]), e[1]) || 0,
            ];
        })(t.get(['axisLine', 'symbolOffset']) || 0, e)),
        (h = e[0]),
        (c = e[1]),
        z(
          [
            {rotate: i.rotation + Math.PI / 2, offset: n[0], r: 0},
            {
              rotate: i.rotation - Math.PI / 2,
              offset: n[1],
              r: Math.sqrt(
                (o[0] - a[0]) * (o[0] - a[0]) + (o[1] - a[1]) * (o[1] - a[1])
              ),
            },
          ],
          function (t, e) {
            var n;
            'none' !== u[e] &&
              null != u[e] &&
              ((e = r0(u[e], -h / 2, -c / 2, h, c, l.stroke, !0)),
              (n = t.r + t.offset),
              e.attr({
                rotation: t.rotate,
                x: (t = s ? a : o)[0] + n * Math.cos(i.rotation),
                y: t[1] - n * Math.sin(i.rotation),
                silent: !0,
                z2: 11,
              }),
              r.add(e));
          }
        ));
    },
    axisTickLabel: function (t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u = (function (t, e, n, i) {
          var r = n.axis,
            o = n.getModel('axisTick'),
            a = o.get('show');
          'auto' === a &&
            i.handleAutoShown &&
            (a = i.handleAutoShown('axisTick'));
          if (a && !r.scale.isBlank()) {
            for (
              var a = o.getModel('lineStyle'),
                i = i.tickDirection * o.get('length'),
                s = ib(
                  r.getTicksCoords(),
                  e.transform,
                  i,
                  E(a.getLineStyle(), {
                    stroke: n.get(['axisLine', 'lineStyle', 'color']),
                  }),
                  'ticks'
                ),
                l = 0;
              l < s.length;
              l++
            )
              t.add(s[l]);
            return s;
          }
        })(n, i, e, t),
        h = (function (f, g, y, m) {
          var v,
            _,
            x,
            w,
            b,
            S,
            M,
            T,
            C = y.axis,
            t = wt(m.axisLabelShow, y.get(['axisLabel', 'show']));
          if (t && !C.scale.isBlank())
            return (
              (v = y.getModel('axisLabel')),
              (_ = v.get('margin')),
              (x = C.getViewLabels()),
              (t = ((wt(m.labelRotate, v.get('rotate')) || 0) * Kw) / 180),
              (w = $w.innerTextLayout(m.rotation, t, m.labelDirection)),
              (b = y.getCategories && y.getCategories(!0)),
              (S = []),
              (M = $w.isLabelSilent(y)),
              (T = y.get('triggerEvent')),
              z(x, function (t, e) {
                var n =
                    'ordinal' === C.scale.type
                      ? C.scale.getRawOrdinalNumber(t.tickValue)
                      : t.tickValue,
                  i = t.formattedLabel,
                  r = t.rawLabel,
                  o = v,
                  a =
                    (o =
                      b && b[n] && O((a = b[n])) && a.textStyle
                        ? new Fc(a.textStyle, v, y.ecModel)
                        : o).getTextColor() ||
                    y.get(['axisLine', 'lineStyle', 'color']),
                  s = C.dataToCoord(n),
                  l = o.getShallow('align', !0) || w.textAlign,
                  u = R(o.getShallow('alignMinLabel', !0), l),
                  h = R(o.getShallow('alignMaxLabel', !0), l),
                  c =
                    o.getShallow('verticalAlign', !0) ||
                    o.getShallow('baseline', !0) ||
                    w.textVerticalAlign,
                  p = R(o.getShallow('verticalAlignMinLabel', !0), c),
                  d = R(o.getShallow('verticalAlignMaxLabel', !0), c),
                  s = new Vs({
                    x: s,
                    y: m.labelOffset + m.labelDirection * _,
                    rotation: w.rotation,
                    silent: M,
                    z2: 10 + (t.level || 0),
                    style: vc(o, {
                      text: i,
                      align: 0 === e ? u : e === x.length - 1 ? h : l,
                      verticalAlign: 0 === e ? p : e === x.length - 1 ? d : c,
                      fill: D(a)
                        ? a(
                            'category' === C.type
                              ? r
                              : 'value' === C.type
                              ? n + ''
                              : n,
                            e
                          )
                        : a,
                    }),
                  });
                (s.anid = 'label_' + n),
                  T &&
                    (((t = $w.makeAxisEventDataBase(y)).targetType =
                      'axisLabel'),
                    (t.value = r),
                    (t.tickIndex = e),
                    'category' === C.type && (t.dataIndex = n),
                    (k(s).eventData = t)),
                  g.add(s),
                  s.updateTransform(),
                  S.push(s),
                  f.add(s),
                  s.decomposeTransform();
              }),
              S
            );
        })(n, i, e, t),
        c =
          ((o = h),
          (u = u),
          F_((r = e).axis) ||
            ((d = r.get(['axisLabel', 'showMinLabel'])),
            (r = r.get(['axisLabel', 'showMaxLabel'])),
            (u = u || []),
            (y = (o = o || [])[0]),
            (f = o[1]),
            (a = o[o.length - 1]),
            (o = o[o.length - 2]),
            (s = u[0]),
            (g = u[1]),
            (l = u[u.length - 1]),
            (u = u[u.length - 2]),
            !1 === d
              ? (tb(y), tb(s))
              : eb(y, f) && (d ? (tb(f), tb(g)) : (tb(y), tb(s))),
            !1 === r
              ? (tb(a), tb(l))
              : eb(o, a) && (r ? (tb(o), tb(u)) : (tb(a), tb(l)))),
          n),
        p = i,
        d = e,
        f = t.tickDirection,
        g = d.axis,
        y = d.getModel('minorTick');
      if (y.get('show') && !g.scale.isBlank()) {
        var m = g.getMinorTicksCoords();
        if (m.length)
          for (
            var g = y.getModel('lineStyle'),
              v = f * y.get('length'),
              _ = E(
                g.getLineStyle(),
                E(d.getModel('axisTick').getLineStyle(), {
                  stroke: d.get(['axisLine', 'lineStyle', 'color']),
                })
              ),
              x = 0;
            x < m.length;
            x++
          )
            for (
              var w = ib(m[x], p.transform, v, _, 'minorticks_' + x), b = 0;
              b < w.length;
              b++
            )
              c.add(w[b]);
      }
      e.get(['axisLabel', 'hideOverlap']) &&
        U1(
          H1(
            N(h, function (t) {
              return {
                label: t,
                priority: t.z2,
                defaultAttr: {ignore: t.ignore},
              };
            })
          )
        );
    },
    axisName: function (t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p = wt(t.axisName, e.get('name'));
      p &&
        ((c = e.get('nameLocation')),
        (l = t.nameDirection),
        (r = e.getModel('nameTextStyle')),
        (u = e.get('nameGap') || 0),
        (o = (h = e.axis.getExtent())[0] > h[1] ? -1 : 1),
        (o = [
          'start' === c
            ? h[0] - o * u
            : 'end' === c
            ? h[1] + o * u
            : (h[0] + h[1]) / 2,
          nb(c) ? t.labelOffset + l * u : 0,
        ]),
        null != (u = e.get('nameRotate')) && (u = (u * Kw) / 180),
        nb(c)
          ? (a = $w.innerTextLayout(t.rotation, null != u ? u : t.rotation, l))
          : ((a = (function (t, e, n, i) {
              var r,
                n = uo(n - t),
                t = i[0] > i[1],
                i = ('start' === e && !t) || ('start' !== e && t);
              e = ho(n - Kw / 2)
                ? ((r = i ? 'bottom' : 'top'), 'center')
                : ho(n - 1.5 * Kw)
                ? ((r = i ? 'top' : 'bottom'), 'center')
                : ((r = 'middle'),
                  n < 1.5 * Kw && Kw / 2 < n
                    ? i
                      ? 'left'
                      : 'right'
                    : i
                    ? 'right'
                    : 'left');
              return {rotation: n, textAlign: e, textVerticalAlign: r};
            })(t.rotation, c, u || 0, h)),
            null != (s = t.axisNameAvailableWidth) &&
              ((s = Math.abs(s / Math.sin(a.rotation))),
              isFinite(s) || (s = null))),
        (l = r.getFont()),
        (u = (c = e.get('nameTruncate', !0) || {}).ellipsis),
        (h = wt(t.nameTruncateMaxWidth, c.maxWidth, s)),
        uc({
          el: (t = new Vs({
            x: o[0],
            y: o[1],
            rotation: a.rotation,
            silent: $w.isLabelSilent(e),
            style: vc(r, {
              text: p,
              font: l,
              overflow: 'truncate',
              width: h,
              ellipsis: u,
              fill:
                r.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
              align: r.get('align') || a.textAlign,
              verticalAlign: r.get('verticalAlign') || a.textVerticalAlign,
            }),
            z2: 1,
          })),
          componentModel: e,
          itemName: p,
        }),
        (t.__fullText = p),
        (t.anid = 'name'),
        e.get('triggerEvent') &&
          (((c = $w.makeAxisEventDataBase(e)).targetType = 'axisName'),
          (c.name = p),
          (k(t).eventData = c)),
        i.add(t),
        t.updateTransform(),
        n.add(t),
        t.decomposeTransform());
    },
  };
  function tb(t) {
    t && (t.ignore = !0);
  }
  function eb(t, e) {
    var n,
      i = t && t.getBoundingRect().clone(),
      r = e && e.getBoundingRect().clone();
    if (i && r)
      return (
        Ne((n = Re([])), n, -t.rotation),
        i.applyTransform(ze([], n, t.getLocalTransform())),
        r.applyTransform(ze([], n, e.getLocalTransform())),
        i.intersect(r)
      );
  }
  function nb(t) {
    return 'middle' === t || 'center' === t;
  }
  function ib(t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord,
        u =
          ((a[0] = u),
          (s[(a[1] = 0)] = u),
          (s[1] = n),
          e && (ee(a, a, e), ee(s, s, e)),
          new Ju({
            shape: {x1: a[0], y1: a[1], x2: s[0], y2: s[1]},
            style: i,
            z2: 2,
            autoBatch: !0,
            silent: !0,
          }));
      Qh(u.shape, u.style.lineWidth),
        (u.anid = r + '_' + t[l].tickValue),
        o.push(u);
    }
    return o;
  }
  function rb(t, e) {
    var h,
      c,
      r,
      p,
      d,
      f,
      o,
      n = {
        axesInfo: {},
        seriesInvolved: !1,
        coordSysAxesInfo: {},
        coordSysMap: {},
      };
    return (
      (h = n),
      (e = e),
      (r = (c = t).getComponent('tooltip')),
      (p = c.getComponent('axisPointer')),
      (d = p.get('link', !0) || []),
      (f = []),
      z(e.getCoordinateSystems(), function (s) {
        var l, u, t, e, n;
        function i(t, e, n) {
          var i,
            r,
            o = n.model.getModel('axisPointer', p),
            a = o.get('show');
          a &&
            ('auto' !== a || t || sb(o)) &&
            (null == e && (e = o.get('triggerTooltip')),
            (a = (o = t
              ? (function (t, e, n, i, r, o) {
                  var a = e.getModel('axisPointer'),
                    s = {};
                  z(
                    [
                      'type',
                      'snap',
                      'lineStyle',
                      'shadowStyle',
                      'label',
                      'animation',
                      'animationDurationUpdate',
                      'animationEasingUpdate',
                      'z',
                    ],
                    function (t) {
                      s[t] = y(a.get(t));
                    }
                  ),
                    (s.snap = 'category' !== t.type && !!o),
                    'cross' === a.get('type') && (s.type = 'line');
                  e = s.label || (s.label = {});
                  null == e.show && (e.show = !1),
                    'cross' === r &&
                      ((r = a.get(['label', 'show'])),
                      (e.show = null == r || r),
                      o ||
                        ((r = s.lineStyle = a.get('crossStyle')) &&
                          E(e, r.textStyle)));
                  return t.model.getModel('axisPointer', new Fc(s, n, i));
                })(n, u, p, c, t, e)
              : o).get('snap')),
            (t = o.get('triggerEmphasis')),
            (i = lb(n.model)),
            (r = e || a || 'category' === n.type),
            (e = h.axesInfo[i] =
              {
                key: i,
                axis: n,
                coordSys: s,
                axisPointerModel: o,
                triggerTooltip: e,
                triggerEmphasis: t,
                involveSeries: r,
                snap: a,
                useHandle: sb(o),
                seriesModels: [],
                linkGroup: null,
              }),
            (l[i] = e),
            (h.seriesInvolved = h.seriesInvolved || r),
            null !=
              (t = (function (t, e) {
                for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
                  var o = t[r] || {};
                  if (
                    ob(o[i + 'AxisId'], n.id) ||
                    ob(o[i + 'AxisIndex'], n.componentIndex) ||
                    ob(o[i + 'AxisName'], n.name)
                  )
                    return r;
                }
              })(d, n))) &&
            (((a = f[t] || (f[t] = {axesInfo: {}})).axesInfo[i] = e),
            (a.mapper = d[t].mapper),
            (e.linkGroup = a));
        }
        s.axisPointerEnabled &&
          ((t = lb(s.model)),
          (l = h.coordSysAxesInfo[t] = {}),
          (u = (h.coordSysMap[t] = s).model.getModel('tooltip', r)),
          z(s.getAxes(), ct(i, !1, null)),
          s.getTooltipAxes) &&
          r &&
          u.get('show') &&
          ((t = 'axis' === u.get('trigger')),
          (e = 'cross' === u.get(['axisPointer', 'type'])),
          (n = s.getTooltipAxes(u.get(['axisPointer', 'axis']))),
          (t || e) && z(n.baseAxes, ct(i, !e || 'cross', t)),
          e) &&
          z(n.otherAxes, ct(i, 'cross', !1));
      }),
      n.seriesInvolved &&
        ((o = n),
        t.eachSeries(function (n) {
          var i = n.coordinateSystem,
            t = n.get(['tooltip', 'trigger'], !0),
            e = n.get(['tooltip', 'show'], !0);
          i &&
            'none' !== t &&
            !1 !== t &&
            'item' !== t &&
            !1 !== e &&
            !1 !== n.get(['axisPointer', 'show'], !0) &&
            z(o.coordSysAxesInfo[lb(i.model)], function (t) {
              var e = t.axis;
              i.getAxis(e.dim) === e &&
                (t.seriesModels.push(n),
                null == t.seriesDataCount && (t.seriesDataCount = 0),
                (t.seriesDataCount += n.getData().count()));
            });
        })),
      n
    );
  }
  function ob(t, e) {
    return 'all' === t || (F(t) && 0 <= I(t, e)) || t === e;
  }
  function ab(t) {
    var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
    return e && e.axesInfo[lb(t)];
  }
  function sb(t) {
    return !!t.get(['handle', 'show']);
  }
  function lb(t) {
    return t.type + '||' + t.id;
  }
  var ub,
    hb = {},
    cb =
      (u(pb, (ub = $g)),
      (pb.prototype.render = function (t, e, n, i) {
        var r, o, a, s, l, u;
        this.axisPointerClass &&
          (r = ab((r = t))) &&
          ((l = r.axisPointerModel),
          (o = r.axis.scale),
          (a = l.option),
          (u = l.get('status')),
          null != (s = l.get('value')) && (s = o.parse(s)),
          (l = sb(l)),
          null == u && (a.status = l ? 'show' : 'hide'),
          (u = o.getExtent().slice())[0] > u[1] && u.reverse(),
          (s = null == s || s > u[1] ? u[1] : s) < u[0] && (s = u[0]),
          (a.value = s),
          l) &&
          (a.status = r.axis.scale.isBlank() ? 'hide' : 'show'),
          ub.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(t, n, !0);
      }),
      (pb.prototype.updateAxisPointer = function (t, e, n, i) {
        this._doUpdateAxisPointerClass(t, n, !1);
      }),
      (pb.prototype.remove = function (t, e) {
        var n = this._axisPointer;
        n && n.remove(e);
      }),
      (pb.prototype.dispose = function (t, e) {
        this._disposeAxisPointer(e),
          ub.prototype.dispose.apply(this, arguments);
      }),
      (pb.prototype._doUpdateAxisPointerClass = function (t, e, n) {
        var i,
          r = pb.getAxisPointerClass(this.axisPointerClass);
        r &&
          ((i = (i = ab((i = t))) && i.axisPointerModel)
            ? (this._axisPointer || (this._axisPointer = new r())).render(
                t,
                i,
                e,
                n
              )
            : this._disposeAxisPointer(e));
      }),
      (pb.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t),
          (this._axisPointer = null);
      }),
      (pb.registerAxisPointerClass = function (t, e) {
        hb[t] = e;
      }),
      (pb.getAxisPointerClass = function (t) {
        return t && hb[t];
      }),
      (pb.type = 'axis'),
      pb);
  function pb() {
    var t = (null !== ub && ub.apply(this, arguments)) || this;
    return (t.type = pb.type), t;
  }
  var db = Bo();
  var fb,
    gb = ['axisLine', 'axisTickLabel', 'axisName'],
    yb = ['splitArea', 'splitLine', 'minorSplitLine'],
    oh =
      (u(mb, (fb = cb)),
      (mb.prototype.render = function (i, t, e, n) {
        this.group.removeAll();
        var r,
          o,
          a = this._axisGroup;
        (this._axisGroup = new Gr()),
          this.group.add(this._axisGroup),
          i.get('show') &&
            ((o = Hw((r = i.getCoordSysModel()), i)),
            (o = new $w(
              i,
              L(
                {
                  handleAutoShown: function (t) {
                    for (
                      var e = r.coordinateSystem.getCartesians(), n = 0;
                      n < e.length;
                      n++
                    )
                      if (Nv(e[n].getOtherAxis(i.axis).scale)) return !0;
                    return !1;
                  },
                },
                o
              )
            )),
            z(gb, o.add, o),
            this._axisGroup.add(o.getGroup()),
            z(
              yb,
              function (t) {
                i.get([t, 'show']) && _b[t](this, this._axisGroup, i, r);
              },
              this
            ),
            (n && 'changeAxisOrder' === n.type && n.isInitSort) ||
              rc(a, this._axisGroup, i),
            fb.prototype.render.call(this, i, t, e, n));
      }),
      (mb.prototype.remove = function () {
        db(this).splitAreaColors = null;
      }),
      (mb.type = 'cartesianAxis'),
      mb);
  function mb() {
    var t = (null !== fb && fb.apply(this, arguments)) || this;
    return (t.type = mb.type), (t.axisPointerClass = 'CartesianAxisPointer'), t;
  }
  var vb,
    _b = {
      splitLine: function (t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank())
          for (
            var n = n.getModel('splitLine'),
              o = n.getModel('lineStyle'),
              a = F((a = o.get('color'))) ? a : [a],
              s = i.coordinateSystem.getRect(),
              l = r.isHorizontal(),
              u = 0,
              h = r.getTicksCoords({tickModel: n}),
              c = [],
              p = [],
              d = o.getLineStyle(),
              f = 0;
            f < h.length;
            f++
          ) {
            var g = r.toGlobalCoord(h[f].coord),
              g =
                (l
                  ? ((c[0] = g),
                    (c[1] = s.y),
                    (p[0] = g),
                    (p[1] = s.y + s.height))
                  : ((c[0] = s.x),
                    (c[1] = g),
                    (p[0] = s.x + s.width),
                    (p[1] = g)),
                u++ % a.length),
              y = h[f].tickValue,
              y = new Ju({
                anid: null != y ? 'line_' + h[f].tickValue : null,
                autoBatch: !0,
                shape: {x1: c[0], y1: c[1], x2: p[0], y2: p[1]},
                style: E({stroke: a[g]}, d),
                silent: !0,
              });
            Qh(y.shape, d.lineWidth), e.add(y);
          }
      },
      minorSplitLine: function (t, e, n, i) {
        var r = n.axis,
          n = n.getModel('minorSplitLine').getModel('lineStyle'),
          o = i.coordinateSystem.getRect(),
          a = r.isHorizontal(),
          s = r.getMinorTicksCoords();
        if (s.length)
          for (
            var l = [], u = [], h = n.getLineStyle(), c = 0;
            c < s.length;
            c++
          )
            for (var p = 0; p < s[c].length; p++) {
              var d = r.toGlobalCoord(s[c][p].coord),
                d =
                  (a
                    ? ((l[0] = d),
                      (l[1] = o.y),
                      (u[0] = d),
                      (u[1] = o.y + o.height))
                    : ((l[0] = o.x),
                      (l[1] = d),
                      (u[0] = o.x + o.width),
                      (u[1] = d)),
                  new Ju({
                    anid: 'minor_line_' + s[c][p].tickValue,
                    autoBatch: !0,
                    shape: {x1: l[0], y1: l[1], x2: u[0], y2: u[1]},
                    style: h,
                    silent: !0,
                  }));
              Qh(d.shape, h.lineWidth), e.add(d);
            }
      },
      splitArea: function (t, e, n, i) {
        var r = e,
          e = i,
          o = (i = n).axis;
        if (!o.scale.isBlank()) {
          var i = i.getModel('splitArea'),
            n = i.getModel('areaStyle'),
            a = n.get('color'),
            s = e.coordinateSystem.getRect(),
            l = o.getTicksCoords({tickModel: i, clamp: !0});
          if (l.length) {
            var u = a.length,
              h = db(t).splitAreaColors,
              c = B(),
              p = 0;
            if (h)
              for (var d = 0; d < l.length; d++) {
                var f = h.get(l[d].tickValue);
                if (null != f) {
                  p = (f + (u - 1) * d) % u;
                  break;
                }
              }
            for (
              var g = o.toGlobalCoord(l[0].coord),
                y = n.getAreaStyle(),
                a = F(a) ? a : [a],
                d = 1;
              d < l.length;
              d++
            ) {
              var m = o.toGlobalCoord(l[d].coord),
                v = void 0,
                _ = void 0,
                x = void 0,
                w = void 0,
                g = o.isHorizontal()
                  ? ((v = g), (_ = s.y), (w = s.height), v + (x = m - v))
                  : ((v = s.x), (_ = g), (x = s.width), _ + (w = m - _)),
                m = l[d - 1].tickValue;
              null != m && c.set(m, p),
                r.add(
                  new Bs({
                    anid: null != m ? 'area_' + m : null,
                    shape: {x: v, y: _, width: x, height: w},
                    style: E({fill: a[p]}, y),
                    autoBatch: !0,
                    silent: !0,
                  })
                ),
                (p = (p + 1) % u);
            }
            db(t).splitAreaColors = c;
          }
        }
      },
    },
    xb = (u(wb, (vb = oh)), (wb.type = 'xAxis'), wb);
  function wb() {
    var t = (null !== vb && vb.apply(this, arguments)) || this;
    return (t.type = wb.type), t;
  }
  u(Mb, (bb = oh)), (Mb.type = 'yAxis');
  var bb,
    Sb = Mb;
  function Mb() {
    var t = (null !== bb && bb.apply(this, arguments)) || this;
    return (t.type = xb.type), t;
  }
  u(Ib, (Tb = $g)),
    (Ib.prototype.render = function (t, e) {
      this.group.removeAll(),
        t.get('show') &&
          this.group.add(
            new Bs({
              shape: t.coordinateSystem.getRect(),
              style: E({fill: t.get('backgroundColor')}, t.getItemStyle()),
              silent: !0,
              z2: -1,
            })
          );
    }),
    (Ib.type = 'grid');
  var Tb,
    Cb = Ib;
  function Ib() {
    var t = (null !== Tb && Tb.apply(this, arguments)) || this;
    return (t.type = 'grid'), t;
  }
  var Db = {offset: 0};
  Z_(function (t) {
    t.registerComponentView(Cb),
      t.registerComponentModel(Sw),
      t.registerCoordinateSystem('cartesian2d', Zw),
      Aw(t, 'x', Cw, Db),
      Aw(t, 'y', Cw, Db),
      t.registerComponentView(xb),
      t.registerComponentView(Sb),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
      });
  });
  u(Pb, (kb = g)),
    (Pb.type = 'title'),
    (Pb.defaultOption = {
      z: 6,
      show: !0,
      text: '',
      target: 'blank',
      subtext: '',
      subtarget: 'blank',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {fontSize: 18, fontWeight: 'bold', color: '#464646'},
      subtextStyle: {fontSize: 12, color: '#6E7079'},
    });
  var kb,
    Ab = Pb;
  function Pb() {
    var t = (null !== kb && kb.apply(this, arguments)) || this;
    return (
      (t.type = Pb.type), (t.layoutMode = {type: 'box', ignoreSize: !0}), t
    );
  }
  u(Rb, (Lb = $g)),
    (Rb.prototype.render = function (t, e, n) {
      var i, r, o, a, s, l, u, h, c;
      this.group.removeAll(),
        t.get('show') &&
          ((i = this.group),
          (u = t.getModel('textStyle')),
          (r = t.getModel('subtextStyle')),
          (h = t.get('textAlign')),
          (c = R(t.get('textBaseline'), t.get('textVerticalAlign'))),
          (s = (u = new Vs({
            style: vc(
              u,
              {text: t.get('text'), fill: u.getTextColor()},
              {disableBox: !0}
            ),
            z2: 10,
          })).getBoundingRect()),
          (l = t.get('subtext')),
          (r = new Vs({
            style: vc(
              r,
              {
                text: l,
                fill: r.getTextColor(),
                y: s.height + t.get('itemGap'),
                verticalAlign: 'top',
              },
              {disableBox: !0}
            ),
            z2: 10,
          })),
          (o = t.get('link')),
          (a = t.get('sublink')),
          (s = t.get('triggerEvent', !0)),
          (u.silent = !o && !s),
          (r.silent = !a && !s),
          o &&
            u.on('click', function () {
              Op(o, '_' + t.get('target'));
            }),
          a &&
            r.on('click', function () {
              Op(a, '_' + t.get('subtarget'));
            }),
          (k(u).eventData = k(r).eventData =
            s
              ? {componentType: 'title', componentIndex: t.componentIndex}
              : null),
          i.add(u),
          l && i.add(r),
          (s = i.getBoundingRect()),
          ((l = t.getBoxLayoutParams()).width = s.width),
          (l.height = s.height),
          (l = Fp(
            l,
            {width: n.getWidth(), height: n.getHeight()},
            t.get('padding')
          )),
          h ||
            ('right' ===
            (h =
              'middle' === (h = t.get('left') || t.get('right')) ? 'center' : h)
              ? (l.x += l.width)
              : 'center' === h && (l.x += l.width / 2)),
          c ||
            ('bottom' ===
            (c =
              'center' === (c = t.get('top') || t.get('bottom')) ? 'middle' : c)
              ? (l.y += l.height)
              : 'middle' === c && (l.y += l.height / 2),
            (c = c || 'top')),
          (i.x = l.x),
          (i.y = l.y),
          i.markRedraw(),
          u.setStyle((n = {align: h, verticalAlign: c})),
          r.setStyle(n),
          (s = i.getBoundingRect()),
          (u = l.margin),
          ((h = t.getItemStyle(['color', 'opacity'])).fill =
            t.get('backgroundColor')),
          (c = new Bs({
            shape: {
              x: s.x - u[3],
              y: s.y - u[0],
              width: s.width + u[1] + u[3],
              height: s.height + u[0] + u[2],
              r: t.get('borderRadius'),
            },
            style: h,
            subPixelOptimize: !0,
            silent: !0,
          })),
          i.add(c));
    }),
    (Rb.type = 'title');
  var Lb,
    Ob = Rb;
  function Rb() {
    var t = (null !== Lb && Lb.apply(this, arguments)) || this;
    return (t.type = Rb.type), t;
  }
  Z_(function (t) {
    t.registerComponentModel(Ab), t.registerComponentView(Ob);
  });
  u(Eb, (Bb = g)),
    (Eb.prototype.init = function (t, e, n) {
      this.mergeDefaultAndTheme(t, n),
        (t.selected = t.selected || {}),
        this._updateSelector(t);
    }),
    (Eb.prototype.mergeOption = function (t, e) {
      Bb.prototype.mergeOption.call(this, t, e), this._updateSelector(t);
    }),
    (Eb.prototype._updateSelector = function (t) {
      var n = t.selector,
        i = this.ecModel;
      F((n = !0 === n ? (t.selector = ['all', 'inverse']) : n)) &&
        z(n, function (t, e) {
          V(t) && (t = {type: t}),
            (n[e] = d(
              t,
              ((e = i),
              'all' === (t = t.type)
                ? {
                    type: 'all',
                    title: e
                      .getLocaleModel()
                      .get(['legend', 'selector', 'all']),
                  }
                : 'inverse' === t
                ? {
                    type: 'inverse',
                    title: e
                      .getLocaleModel()
                      .get(['legend', 'selector', 'inverse']),
                  }
                : void 0)
            ));
        });
    }),
    (Eb.prototype.optionUpdated = function () {
      this._updateData(this.ecModel);
      var t = this._data;
      if (t[0] && 'single' === this.get('selectedMode')) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get('name');
          if (this.isSelected(i)) {
            this.select(i), (e = !0);
            break;
          }
        }
        e || this.select(t[0].get('name'));
      }
    }),
    (Eb.prototype._updateData = function (i) {
      var r = [],
        o = [],
        t =
          (i.eachRawSeries(function (t) {
            var e,
              n = t.name;
            o.push(n),
              t.legendVisualProvider &&
              ((n = t.legendVisualProvider.getAllNames()),
              i.isSeriesFiltered(t) || (o = o.concat(n)),
              n.length)
                ? (r = r.concat(n))
                : (e = !0),
              e && Po(t) && r.push(t.name);
          }),
          (this._availableNames = o),
          this.get('data') || r),
        e = B(),
        t = N(
          t,
          function (t) {
            return (
              (V(t) || dt(t)) && (t = {name: t}),
              e.get(t.name)
                ? null
                : (e.set(t.name, !0), new Fc(t, this, this.ecModel))
            );
          },
          this
        );
      this._data = ut(t, function (t) {
        return !!t;
      });
    }),
    (Eb.prototype.getData = function () {
      return this._data;
    }),
    (Eb.prototype.select = function (t) {
      var e = this.option.selected;
      'single' === this.get('selectedMode') &&
        z(this._data, function (t) {
          e[t.get('name')] = !1;
        }),
        (e[t] = !0);
    }),
    (Eb.prototype.unSelect = function (t) {
      'single' !== this.get('selectedMode') && (this.option.selected[t] = !1);
    }),
    (Eb.prototype.toggleSelected = function (t) {
      var e = this.option.selected;
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? 'unSelect' : 'select'](t);
    }),
    (Eb.prototype.allSelect = function () {
      var t = this._data,
        e = this.option.selected;
      z(t, function (t) {
        e[t.get('name', !0)] = !0;
      });
    }),
    (Eb.prototype.inverseSelect = function () {
      var t = this._data,
        e = this.option.selected;
      z(t, function (t) {
        t = t.get('name', !0);
        e.hasOwnProperty(t) || (e[t] = !0), (e[t] = !e[t]);
      });
    }),
    (Eb.prototype.isSelected = function (t) {
      var e = this.option.selected;
      return !(e.hasOwnProperty(t) && !e[t]) && 0 <= I(this._availableNames, t);
    }),
    (Eb.prototype.getOrient = function () {
      return 'vertical' === this.get('orient')
        ? {index: 1, name: 'vertical'}
        : {index: 0, name: 'horizontal'};
    }),
    (Eb.type = 'legend.plain'),
    (Eb.dependencies = ['series']),
    (Eb.defaultOption = {
      z: 4,
      show: !0,
      orient: 'horizontal',
      left: 'center',
      top: 0,
      align: 'auto',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: 'inherit',
      symbolKeepAspect: !0,
      inactiveColor: '#ccc',
      inactiveBorderColor: '#ccc',
      inactiveBorderWidth: 'auto',
      itemStyle: {
        color: 'inherit',
        opacity: 'inherit',
        borderColor: 'inherit',
        borderWidth: 'auto',
        borderCap: 'inherit',
        borderJoin: 'inherit',
        borderDashOffset: 'inherit',
        borderMiterLimit: 'inherit',
      },
      lineStyle: {
        width: 'auto',
        color: 'inherit',
        inactiveColor: '#ccc',
        inactiveWidth: 2,
        opacity: 'inherit',
        type: 'inherit',
        cap: 'inherit',
        join: 'inherit',
        dashOffset: 'inherit',
        miterLimit: 'inherit',
      },
      textStyle: {color: '#333'},
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: 'sans-serif',
        color: '#666',
        borderWidth: 1,
        borderColor: '#666',
      },
      emphasis: {
        selectorLabel: {show: !0, color: '#eee', backgroundColor: '#666'},
      },
      selectorPosition: 'auto',
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {show: !1},
    });
  var Bb,
    zb = Eb;
  function Eb() {
    var t = (null !== Bb && Bb.apply(this, arguments)) || this;
    return (
      (t.type = Eb.type), (t.layoutMode = {type: 'box', ignoreSize: !0}), t
    );
  }
  var Nb,
    Fb = ct,
    Vb = z,
    Hb = Gr,
    Wb =
      (u(Gb, (Nb = $g)),
      (Gb.prototype.init = function () {
        this.group.add((this._contentGroup = new Hb())),
          this.group.add((this._selectorGroup = new Hb())),
          (this._isFirstRender = !0);
      }),
      (Gb.prototype.getContentGroup = function () {
        return this._contentGroup;
      }),
      (Gb.prototype.getSelectorGroup = function () {
        return this._selectorGroup;
      }),
      (Gb.prototype.render = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._isFirstRender;
        (this._isFirstRender = !1),
          this.resetInner(),
          t.get('show', !0) &&
            ((r = t.get('align')),
            (i = t.get('orient')),
            (r && 'auto' !== r) ||
              (r =
                'right' === t.get('left') && 'vertical' === i
                  ? 'right'
                  : 'left'),
            (a = t.get('selector', !0)),
            (s = t.get('selectorPosition', !0)),
            this.renderInner(
              r,
              t,
              e,
              n,
              a,
              i,
              (s =
                !a || (s && 'auto' !== s)
                  ? s
                  : 'horizontal' === i
                  ? 'end'
                  : 'start')
            ),
            (o = Fp(
              (e = t.getBoxLayoutParams()),
              (i = {width: n.getWidth(), height: n.getHeight()}),
              (n = t.get('padding'))
            )),
            (o = Fp(
              E(
                {
                  width: (r = this.layoutInner(t, r, o, l, a, s)).width,
                  height: r.height,
                },
                e
              ),
              i,
              n
            )),
            (this.group.x = o.x - r.x),
            (this.group.y = o.y - r.y),
            this.group.markRedraw(),
            this.group.add(
              (this._backgroundEl =
                ((l = r),
                (s = Cp((a = t).get('padding'))),
                ((e = a.getItemStyle(['color', 'opacity'])).fill =
                  a.get('backgroundColor')),
                (l = new Bs({
                  shape: {
                    x: l.x - s[3],
                    y: l.y - s[0],
                    width: l.width + s[1] + s[3],
                    height: l.height + s[0] + s[2],
                    r: a.get('borderRadius'),
                  },
                  style: e,
                  silent: !0,
                  z2: -1,
                }))))
            ));
      }),
      (Gb.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll();
      }),
      (Gb.prototype.renderInner = function (s, l, u, h, t, e, n) {
        var c = this.getContentGroup(),
          p = B(),
          d = l.get('selectedMode'),
          f = [];
        u.eachRawSeries(function (t) {
          t.get('legendHoverLink') || f.push(t.id);
        }),
          Vb(
            l.getData(),
            function (r, o) {
              var e,
                t,
                n,
                i,
                a = r.get('name');
              this.newlineDisabled || ('' !== a && '\n' !== a)
                ? ((e = u.getSeriesByName(a)[0]),
                  p.get(a) ||
                    (e
                      ? ((i =
                          (n = e.getData()).getVisual('legendLineStyle') || {}),
                        (t = n.getVisual('legendIcon')),
                        (n = n.getVisual('style')),
                        (i = this._createItem(e, a, o, r, l, s, i, n, t, d, h))
                          .on('click', Fb(Ub, a, null, h, f))
                          .on('mouseover', Fb(Yb, e.name, null, h, f))
                          .on('mouseout', Fb(Xb, e.name, null, h, f)),
                        u.ssr &&
                          i.eachChild(function (t) {
                            t = k(t);
                            (t.seriesIndex = e.seriesIndex),
                              (t.dataIndex = o),
                              (t.ssrType = 'legend');
                          }),
                        p.set(a, !0))
                      : u.eachRawSeries(function (e) {
                          var t, n, i;
                          p.get(a) ||
                            (e.legendVisualProvider &&
                              (n = e.legendVisualProvider).containName(a) &&
                              ((i = n.indexOfName(a)),
                              (t = n.getItemVisual(i, 'style')),
                              (n = n.getItemVisual(i, 'legendIcon')),
                              (i = yi(t.fill)) &&
                                0 === i[3] &&
                                ((i[3] = 0.2),
                                (t = L(L({}, t), {fill: bi(i, 'rgba')}))),
                              (i = this._createItem(
                                e,
                                a,
                                o,
                                r,
                                l,
                                s,
                                {},
                                t,
                                n,
                                d,
                                h
                              ))
                                .on('click', Fb(Ub, null, a, h, f))
                                .on('mouseover', Fb(Yb, null, a, h, f))
                                .on('mouseout', Fb(Xb, null, a, h, f)),
                              u.ssr &&
                                i.eachChild(function (t) {
                                  t = k(t);
                                  (t.seriesIndex = e.seriesIndex),
                                    (t.dataIndex = o),
                                    (t.ssrType = 'legend');
                                }),
                              p.set(a, !0)));
                        }, this)))
                : (((n = new Hb()).newline = !0), c.add(n));
            },
            this
          ),
          t && this._createSelector(t, l, h, e, n);
      }),
      (Gb.prototype._createSelector = function (t, i, r, e, n) {
        var o = this.getSelectorGroup();
        Vb(t, function (t) {
          var e = t.type,
            n = new Vs({
              style: {x: 0, y: 0, align: 'center', verticalAlign: 'middle'},
              onclick: function () {
                r.dispatchAction({
                  type: 'all' === e ? 'legendAllSelect' : 'legendInverseSelect',
                });
              },
            });
          o.add(n),
            yc(
              n,
              {
                normal: i.getModel('selectorLabel'),
                emphasis: i.getModel(['emphasis', 'selectorLabel']),
              },
              {defaultText: t.title}
            ),
            Nl(n);
        });
      }),
      (Gb.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
        var c = t.visualDrawType,
          p = r.get('itemWidth'),
          d = r.get('itemHeight'),
          f = r.isSelected(e),
          g = i.get('symbolRotate'),
          y = i.get('symbolKeepAspect'),
          m = i.get('icon'),
          a = (function (t, e, n, i, r, o, a) {
            function s(n, i) {
              'auto' === n.lineWidth && (n.lineWidth = 0 < i.lineWidth ? 2 : 0),
                Vb(n, function (t, e) {
                  'inherit' === n[e] && (n[e] = i[e]);
                });
            }
            var l = e.getModel('itemStyle'),
              u = l.getItemStyle(),
              t = 0 === t.lastIndexOf('empty', 0) ? 'fill' : 'stroke',
              l = l.getShallow('decal');
            (u.decal = l && 'inherit' !== l ? O0(l, a) : i.decal),
              'inherit' === u.fill && (u.fill = i[r]);
            'inherit' === u.stroke && (u.stroke = i[t]);
            'inherit' === u.opacity &&
              (u.opacity = ('fill' === r ? i : n).opacity);
            s(u, i);
            (l = e.getModel('lineStyle')), (a = l.getLineStyle());
            s(a, n),
              'auto' === u.fill && (u.fill = i.fill),
              'auto' === u.stroke && (u.stroke = i.fill),
              'auto' === a.stroke && (a.stroke = i.fill),
              o ||
                ((r = e.get('inactiveBorderWidth')),
                (n = u[t]),
                (u.lineWidth =
                  'auto' === r ? (0 < i.lineWidth && n ? 2 : 0) : u.lineWidth),
                (u.fill = e.get('inactiveColor')),
                (u.stroke = e.get('inactiveBorderColor')),
                (a.stroke = l.get('inactiveColor')),
                (a.lineWidth = l.get('inactiveWidth')));
            return {itemStyle: u, lineStyle: a};
          })((l = m || l || 'roundRect'), i, a, s, c, f, h),
          s = new Hb(),
          c = i.getModel('textStyle'),
          m =
            (!D(t.getLegendIcon) || (m && 'inherit' !== m)
              ? ((h =
                  'inherit' === m && t.getData().getVisual('symbol')
                    ? 'inherit' === g
                      ? t.getData().getVisual('symbolRotate')
                      : g
                    : 0),
                s.add(
                  (function (t) {
                    var e = t.icon || 'roundRect',
                      n = r0(
                        e,
                        0,
                        0,
                        t.itemWidth,
                        t.itemHeight,
                        t.itemStyle.fill,
                        t.symbolKeepAspect
                      );
                    n.setStyle(t.itemStyle),
                      (n.rotation = ((t.iconRotate || 0) * Math.PI) / 180),
                      n.setOrigin([t.itemWidth / 2, t.itemHeight / 2]),
                      -1 < e.indexOf('empty') &&
                        ((n.style.stroke = n.style.fill),
                        (n.style.fill = '#fff'),
                        (n.style.lineWidth = 2));
                    return n;
                  })({
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: h,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y,
                  })
                ))
              : s.add(
                  t.getLegendIcon({
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: g,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y,
                  })
                ),
            'left' === o ? p + 5 : -5),
          h = o,
          t = r.get('formatter'),
          l = e,
          g =
            (V(t) && t
              ? (l = t.replace('{name}', null != e ? e : ''))
              : D(t) && (l = t(e)),
            f ? c.getTextColor() : i.get('inactiveColor')),
          a =
            (s.add(
              new Vs({
                style: vc(
                  c,
                  {
                    text: l,
                    x: m,
                    y: d / 2,
                    fill: g,
                    align: h,
                    verticalAlign: 'middle',
                  },
                  {inheritColor: g}
                ),
              })
            ),
            new Bs({shape: s.getBoundingRect(), style: {fill: 'transparent'}})),
          y = i.getModel('tooltip');
        return (
          y.get('show') &&
            uc({
              el: a,
              componentModel: r,
              itemName: e,
              itemTooltipOption: y.option,
            }),
          s.add(a),
          s.eachChild(function (t) {
            t.silent = !0;
          }),
          (a.silent = !u),
          this.getContentGroup().add(s),
          Nl(s),
          (s.__legendDataIndex = n),
          s
        );
      }),
      (Gb.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h,
          c = this.getContentGroup(),
          p = this.getSelectorGroup(),
          n =
            (Np(t.get('orient'), c, t.get('itemGap'), n.width, n.height),
            c.getBoundingRect()),
          d = [-n.x, -n.y];
        return (
          p.markRedraw(),
          c.markRedraw(),
          r
            ? (Np('horizontal', p, t.get('selectorItemGap', !0)),
              (a = [-(r = p.getBoundingRect()).x, -r.y]),
              (s = t.get('selectorButtonGap', !0)),
              (l = 0 === (t = t.getOrient().index) ? 'width' : 'height'),
              (u = 0 === t ? 'height' : 'width'),
              (h = 0 === t ? 'y' : 'x'),
              'end' === o ? (a[t] += n[l] + s) : (d[t] += r[l] + s),
              (a[1 - t] += n[u] / 2 - r[u] / 2),
              (p.x = a[0]),
              (p.y = a[1]),
              (c.x = d[0]),
              (c.y = d[1]),
              ((o = {x: 0, y: 0})[l] = n[l] + s + r[l]),
              (o[u] = Math.max(n[u], r[u])),
              (o[h] = Math.min(0, r[h] + a[1 - t])),
              o)
            : ((c.x = d[0]), (c.y = d[1]), this.group.getBoundingRect())
        );
      }),
      (Gb.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0);
      }),
      (Gb.type = 'legend.plain'),
      Gb);
  function Gb() {
    var t = (null !== Nb && Nb.apply(this, arguments)) || this;
    return (t.type = Gb.type), (t.newlineDisabled = !1), t;
  }
  function Ub(t, e, n, i) {
    Xb(t, e, n, i),
      n.dispatchAction({type: 'legendToggleSelect', name: null != t ? t : e}),
      Yb(t, e, n, i);
  }
  function Zb(t) {
    for (
      var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length;
      i < r && !(e = n[i].states.emphasis);

    )
      i++;
    return e && e.hoverLayer;
  }
  function Yb(t, e, n, i) {
    Zb(n) ||
      n.dispatchAction({
        type: 'highlight',
        seriesName: t,
        name: e,
        excludeSeriesId: i,
      });
  }
  function Xb(t, e, n, i) {
    Zb(n) ||
      n.dispatchAction({
        type: 'downplay',
        seriesName: t,
        name: e,
        excludeSeriesId: i,
      });
  }
  function qb(t) {
    var n = t.findComponents({mainType: 'legend'});
    n &&
      n.length &&
      t.filterSeries(function (t) {
        for (var e = 0; e < n.length; e++)
          if (!n[e].isSelected(t.name)) return !1;
        return !0;
      });
  }
  function jb(t, e, n) {
    var i,
      r = {},
      o = 'toggleSelected' === t;
    return (
      n.eachComponent('legend', function (n) {
        o && null != i
          ? n[i ? 'select' : 'unSelect'](e.name)
          : 'allSelect' === t || 'inverseSelect' === t
          ? n[t]()
          : (n[t](e.name), (i = n.isSelected(e.name))),
          z(n.getData(), function (t) {
            var e,
              t = t.get('name');
            '\n' !== t &&
              '' !== t &&
              ((e = n.isSelected(t)),
              r.hasOwnProperty(t) ? (r[t] = r[t] && e) : (r[t] = e));
          });
      }),
      'allSelect' === t || 'inverseSelect' === t
        ? {selected: r}
        : {name: e.name, selected: r}
    );
  }
  function Kb(t) {
    t.registerComponentModel(zb),
      t.registerComponentView(Wb),
      t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, qb),
      t.registerSubTypeDefaulter('legend', function () {
        return 'plain';
      }),
      (t = t).registerAction(
        'legendToggleSelect',
        'legendselectchanged',
        ct(jb, 'toggleSelected')
      ),
      t.registerAction(
        'legendAllSelect',
        'legendselectall',
        ct(jb, 'allSelect')
      ),
      t.registerAction(
        'legendInverseSelect',
        'legendinverseselect',
        ct(jb, 'inverseSelect')
      ),
      t.registerAction('legendSelect', 'legendselected', ct(jb, 'select')),
      t.registerAction(
        'legendUnSelect',
        'legendunselected',
        ct(jb, 'unSelect')
      );
  }
  u(Jb, ($b = zb)),
    (Jb.prototype.setScrollDataIndex = function (t) {
      this.option.scrollDataIndex = t;
    }),
    (Jb.prototype.init = function (t, e, n) {
      var i = Wp(t);
      $b.prototype.init.call(this, t, e, n), tS(this, t, i);
    }),
    (Jb.prototype.mergeOption = function (t, e) {
      $b.prototype.mergeOption.call(this, t, e), tS(this, this.option, t);
    }),
    (Jb.type = 'legend.scroll'),
    (Jb.defaultOption = Gc(zb.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: 'end',
      pageFormatter: '{current}/{total}',
      pageIcons: {
        horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
        vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'],
      },
      pageIconColor: '#2f4554',
      pageIconInactiveColor: '#aaa',
      pageIconSize: 15,
      pageTextStyle: {color: '#333'},
      animationDurationUpdate: 800,
    }));
  var $b,
    Qb = Jb;
  function Jb() {
    var t = (null !== $b && $b.apply(this, arguments)) || this;
    return (t.type = Jb.type), t;
  }
  function tS(t, e, n) {
    var i = [1, 1];
    (i[t.getOrient().index] = 0), Hp(e, n, {type: 'box', ignoreSize: !!i});
  }
  var eS,
    nS = Gr,
    iS = ['width', 'height'],
    rS = ['x', 'y'],
    oS =
      (u(aS, (eS = Wb)),
      (aS.prototype.init = function () {
        eS.prototype.init.call(this),
          this.group.add((this._containerGroup = new nS())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new nS()));
      }),
      (aS.prototype.resetInner = function () {
        eS.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null);
      }),
      (aS.prototype.renderInner = function (t, i, e, r, n, o, a) {
        var s = this,
          l =
            (eS.prototype.renderInner.call(this, t, i, e, r, n, o, a),
            this._controllerGroup),
          t = i.get('pageIconSize', !0),
          u = F(t) ? t : [t, t],
          e = (h('pagePrev', 0), i.getModel('pageTextStyle'));
        function h(t, e) {
          var n = t + 'DataIndex',
            e = sc(
              i.get('pageIcons', !0)[i.getOrient().name][e],
              {onclick: S(s._pageGo, s, n, i, r)},
              {x: -u[0] / 2, y: -u[1] / 2, width: u[0], height: u[1]}
            );
          (e.name = t), l.add(e);
        }
        l.add(
          new Vs({
            name: 'pageText',
            style: {
              text: 'xx/xx',
              fill: e.getTextColor(),
              font: e.getFont(),
              verticalAlign: 'middle',
              align: 'center',
            },
            silent: !0,
          })
        ),
          h('pageNext', 1);
      }),
      (aS.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          s = t.getOrient().index,
          l = iS[s],
          u = rS[s],
          h = iS[1 - s],
          c = rS[1 - s],
          p =
            (r && Np('horizontal', a, t.get('selectorItemGap', !0)),
            t.get('selectorButtonGap', !0)),
          d = a.getBoundingRect(),
          f = [-d.x, -d.y],
          g = y(n),
          n =
            (r && (g[l] = n[l] - d[l] - p),
            this._layoutContentAndController(t, i, g, s, l, h, c, u));
        return (
          r &&
            ('end' === o
              ? (f[s] += n[l] + p)
              : ((t = d[l] + p), (f[s] -= t), (n[u] -= t)),
            (n[l] += d[l] + p),
            (f[1 - s] += n[c] + n[h] / 2 - d[h] / 2),
            (n[h] = Math.max(n[h], d[h])),
            (n[c] = Math.min(n[c], d[c] + f[1 - s])),
            (a.x = f[0]),
            (a.y = f[1]),
            a.markRedraw()),
          n
        );
      }),
      (aS.prototype._layoutContentAndController = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s
      ) {
        var l = this.getContentGroup(),
          u = this._containerGroup,
          h = this._controllerGroup,
          c =
            (Np(
              t.get('orient'),
              l,
              t.get('itemGap'),
              i ? n.width : null,
              i ? null : n.height
            ),
            Np('horizontal', h, t.get('pageButtonItemGap', !0)),
            l.getBoundingRect()),
          p = h.getBoundingRect(),
          d = (this._showController = c[r] > n[r]),
          f = [-c.x, -c.y],
          e = (e || (f[i] = l[s]), [0, 0]),
          s = [-p.x, -p.y],
          g = R(t.get('pageButtonGap', !0), t.get('itemGap', !0)),
          f =
            (d &&
              ('end' === t.get('pageButtonPosition', !0)
                ? (s[i] += n[r] - p[r])
                : (e[i] += p[r] + g)),
            (s[1 - i] += c[o] / 2 - p[o] / 2),
            l.setPosition(f),
            u.setPosition(e),
            h.setPosition(s),
            {x: 0, y: 0}),
          c =
            ((f[r] = (d ? n : c)[r]),
            (f[o] = Math.max(c[o], p[o])),
            (f[a] = Math.min(0, p[a] + s[1 - i])),
            (u.__rectSize = n[r]),
            d
              ? (((e = {x: 0, y: 0})[r] = Math.max(n[r] - p[r] - g, 0)),
                (e[o] = f[o]),
                u.setClipPath(new Bs({shape: e})),
                (u.__rectSize = e[r]))
              : h.eachChild(function (t) {
                  t.attr({invisible: !0, silent: !0});
                }),
            this._getPageInfo(t));
        return (
          null != c.pageIndex &&
            Lh(
              l,
              {x: c.contentPosition[0], y: c.contentPosition[1]},
              d ? t : null
            ),
          this._updatePageInfoView(t, c),
          f
        );
      }),
      (aS.prototype._pageGo = function (t, e, n) {
        t = this._getPageInfo(e)[t];
        null != t &&
          n.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: t,
            legendId: e.id,
          });
      }),
      (aS.prototype._updatePageInfoView = function (n, i) {
        var r = this._controllerGroup,
          t =
            (z(['pagePrev', 'pageNext'], function (t) {
              var e = null != i[t + 'DataIndex'],
                t = r.childOfName(t);
              t &&
                (t.setStyle(
                  'fill',
                  e
                    ? n.get('pageIconColor', !0)
                    : n.get('pageIconInactiveColor', !0)
                ),
                (t.cursor = e ? 'pointer' : 'default'));
            }),
            r.childOfName('pageText')),
          e = n.get('pageFormatter'),
          o = i.pageIndex,
          o = null != o ? o + 1 : 0,
          a = i.pageCount;
        t &&
          e &&
          t.setStyle(
            'text',
            V(e)
              ? e
                  .replace('{current}', null == o ? '' : o + '')
                  .replace('{total}', null == a ? '' : a + '')
              : e({current: o, total: a})
          );
      }),
      (aS.prototype._getPageInfo = function (t) {
        var e = t.get('scrollDataIndex', !0),
          n = this.getContentGroup(),
          i = this._containerGroup.__rectSize,
          t = t.getOrient().index,
          r = iS[t],
          o = rS[t],
          e = this._findTargetItemIndex(e),
          a = n.children(),
          s = a[e],
          l = a.length,
          u = l ? 1 : 0,
          h = {
            contentPosition: [n.x, n.y],
            pageCount: u,
            pageIndex: u - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null,
          };
        if (s) {
          n = g(s);
          h.contentPosition[t] = -n.s;
          for (var c = e + 1, p = n, d = n, f = null; c <= l; ++c)
            ((!(f = g(a[c])) && d.e > p.s + i) || (f && !y(f, p.s))) &&
              (p = d.i > p.i ? d : f) &&
              (null == h.pageNextDataIndex && (h.pageNextDataIndex = p.i),
              ++h.pageCount),
              (d = f);
          for (c = e - 1, p = n, d = n, f = null; -1 <= c; --c)
            ((f = g(a[c])) && y(d, f.s)) ||
              !(p.i < d.i) ||
              ((d = p),
              null == h.pagePrevDataIndex && (h.pagePrevDataIndex = p.i),
              ++h.pageCount,
              ++h.pageIndex),
              (p = f);
        }
        return h;
        function g(t) {
          var e, n;
          if (t)
            return {
              s: (n = (e = t.getBoundingRect())[o] + t[o]),
              e: n + e[r],
              i: t.__legendDataIndex,
            };
        }
        function y(t, e) {
          return t.e >= e && t.s <= e + i;
        }
      }),
      (aS.prototype._findTargetItemIndex = function (n) {
        var i, r;
        return this._showController
          ? (this.getContentGroup().eachChild(function (t, e) {
              t = t.__legendDataIndex;
              null == r && null != t && (r = e), t === n && (i = e);
            }),
            null != i ? i : r)
          : 0;
      }),
      (aS.type = 'legend.scroll'),
      aS);
  function aS() {
    var t = (null !== eS && eS.apply(this, arguments)) || this;
    return (
      (t.type = aS.type), (t.newlineDisabled = !0), (t._currentIndex = 0), t
    );
  }
  Z_(function (t) {
    Z_(Kb),
      t.registerComponentModel(Qb),
      t.registerComponentView(oS),
      t.registerAction('legendScroll', 'legendscroll', function (t, e) {
        var n = t.scrollDataIndex;
        null != n &&
          e.eachComponent(
            {mainType: 'legend', subType: 'scroll', query: t},
            function (t) {
              t.setScrollDataIndex(n);
            }
          );
      });
  });
  var sS = Bo(),
    lS = y,
    uS = S;
  function hS() {
    (this._dragging = !1), (this.animationThreshold = 15);
  }
  function cS(t, e, n, i) {
    !(function n(i, t) {
      {
        var r;
        return O(i) && O(t)
          ? ((r = !0),
            z(t, function (t, e) {
              r = r && n(i[e], t);
            }),
            !!r)
          : i === t;
      }
    })(sS(n).lastProp, i) &&
      ((sS(n).lastProp = i), e ? Lh(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }
  function pS(t, e) {
    t[e.get(['label', 'show']) ? 'show' : 'hide']();
  }
  function dS(t) {
    return {x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0};
  }
  function fS(t, e, n) {
    var i = e.get('z'),
      r = e.get('zlevel');
    t &&
      t.traverse(function (t) {
        'group' !== t.type &&
          (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n));
      });
  }
  function gS(t, e, n, i, r) {
    var o = yS(n.get('value'), e.axis, e.ecModel, n.get('seriesDataIndices'), {
        precision: n.get(['label', 'precision']),
        formatter: n.get(['label', 'formatter']),
      }),
      n = n.getModel('label'),
      a = Cp(n.get('padding') || 0),
      s = n.getFont(),
      l = Tr(o, s),
      u = r.position,
      h = l.width + a[1] + a[3],
      l = l.height + a[0] + a[2],
      c = r.align,
      c =
        ('right' === c && (u[0] -= h),
        'center' === c && (u[0] -= h / 2),
        r.verticalAlign),
      i =
        ('bottom' === c && (u[1] -= l),
        'middle' === c && (u[1] -= l / 2),
        (r = u),
        (c = h),
        (h = l),
        (i = (l = i).getWidth()),
        (l = l.getHeight()),
        (r[0] = Math.min(r[0] + c, i) - c),
        (r[1] = Math.min(r[1] + h, l) - h),
        (r[0] = Math.max(r[0], 0)),
        (r[1] = Math.max(r[1], 0)),
        n.get('backgroundColor'));
    (i && 'auto' !== i) || (i = e.get(['axisLine', 'lineStyle', 'color'])),
      (t.label = {
        x: u[0],
        y: u[1],
        style: vc(n, {
          text: o,
          font: s,
          fill: n.getTextColor(),
          padding: a,
          backgroundColor: i,
        }),
        z2: 10,
      });
  }
  function yS(t, e, n, i, r) {
    t = e.scale.parse(t);
    var o,
      a = e.scale.getLabel({value: t}, {precision: r.precision}),
      r = r.formatter;
    return (
      r &&
        ((o = {
          value: z_(e, {value: t}),
          axisDimension: e.dim,
          axisIndex: e.index,
          seriesData: [],
        }),
        z(i, function (t) {
          var e = n.getSeriesByIndex(t.seriesIndex),
            t = t.dataIndexInside,
            e = e && e.getDataParams(t);
          e && o.seriesData.push(e);
        }),
        V(r) ? (a = r.replace('{value}', a)) : D(r) && (a = r(o))),
      a
    );
  }
  function mS(t, e, n) {
    var i = Oe();
    return (
      Ne(i, i, n.rotation),
      Ee(i, i, n.position),
      ec(
        [
          t.dataToCoord(e),
          (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0),
        ],
        i
      )
    );
  }
  (hS.prototype.render = function (t, e, n, i) {
    var r,
      o,
      a = e.get('value'),
      s = e.get('status');
    (this._axisModel = t),
      (this._axisPointerModel = e),
      (this._api = n),
      (!i && this._lastValue === a && this._lastStatus === s) ||
        ((this._lastValue = a),
        (this._lastStatus = s),
        (i = this._group),
        (r = this._handle),
        s && 'hide' !== s
          ? (i && i.show(),
            r && r.show(),
            this.makeElOption((s = {}), a, t, e, n),
            (o = s.graphicKey) !== this._lastGraphicKey && this.clear(n),
            (this._lastGraphicKey = o),
            (o = this._moveAnimation = this.determineAnimation(t, e)),
            i
              ? ((o = ct(cS, e, o)),
                this.updatePointerEl(i, s, o),
                this.updateLabelEl(i, s, o, e))
              : ((i = this._group = new Gr()),
                this.createPointerEl(i, s, t, e),
                this.createLabelEl(i, s, t, e),
                n.getZr().add(i)),
            fS(i, e, !0),
            this._renderHandle(a))
          : (i && i.hide(), r && r.hide()));
  }),
    (hS.prototype.remove = function (t) {
      this.clear(t);
    }),
    (hS.prototype.dispose = function (t) {
      this.clear(t);
    }),
    (hS.prototype.determineAnimation = function (t, e) {
      var n,
        i = e.get('animation'),
        r = t.axis,
        o = 'category' === r.type,
        e = e.get('snap');
      return (
        !(!e && !o) &&
        ('auto' === i || null == i
          ? ((n = this.animationThreshold),
            (o && r.getBandWidth() > n) ||
              (!!e &&
                ((o = ab(t).seriesDataCount),
                (e = r.getExtent()),
                Math.abs(e[0] - e[1]) / o > n)))
          : !0 === i)
      );
    }),
    (hS.prototype.makeElOption = function (t, e, n, i, r) {}),
    (hS.prototype.createPointerEl = function (t, e, n, i) {
      var r = e.pointer;
      r && ((r = sS(t).pointerEl = new pc[r.type](lS(e.pointer))), t.add(r));
    }),
    (hS.prototype.createLabelEl = function (t, e, n, i) {
      e.label &&
        ((e = sS(t).labelEl = new Vs(lS(e.label))), t.add(e), pS(e, i));
    }),
    (hS.prototype.updatePointerEl = function (t, e, n) {
      t = sS(t).pointerEl;
      t &&
        e.pointer &&
        (t.setStyle(e.pointer.style), n(t, {shape: e.pointer.shape}));
    }),
    (hS.prototype.updateLabelEl = function (t, e, n, i) {
      t = sS(t).labelEl;
      t &&
        (t.setStyle(e.label.style),
        n(t, {x: e.label.x, y: e.label.y}),
        pS(t, i));
    }),
    (hS.prototype._renderHandle = function (t) {
      var e, n, i, r, o, a;
      !this._dragging &&
        this.updateHandleTransform &&
        ((e = this._axisPointerModel),
        (n = this._api.getZr()),
        (i = this._handle),
        (r = e.getModel('handle')),
        (a = e.get('status')),
        r.get('show') && a && 'hide' !== a
          ? (this._handle ||
              ((o = !0),
              (i = this._handle =
                sc(r.get('icon'), {
                  cursor: 'move',
                  draggable: !0,
                  onmousemove: function (t) {
                    Ie(t.event);
                  },
                  onmousedown: uS(this._onHandleDragMove, this, 0, 0),
                  drift: uS(this._onHandleDragMove, this),
                  ondragend: uS(this._onHandleDragEnd, this),
                })),
              n.add(i)),
            fS(i, e, !1),
            i.setStyle(
              r.getItemStyle(null, [
                'color',
                'borderColor',
                'borderWidth',
                'opacity',
                'shadowColor',
                'shadowBlur',
                'shadowOffsetX',
                'shadowOffsetY',
              ])
            ),
            F((a = r.get('size'))) || (a = [a, a]),
            (i.scaleX = a[0] / 2),
            (i.scaleY = a[1] / 2),
            dy(
              this,
              '_doDispatchAxisPointer',
              r.get('throttle') || 0,
              'fixRate'
            ),
            this._moveHandleToValue(t, o))
          : (i && n.remove(i), (this._handle = null)));
    }),
    (hS.prototype._moveHandleToValue = function (t, e) {
      cS(
        this._axisPointerModel,
        !e && this._moveAnimation,
        this._handle,
        dS(this.getHandleTransform(t, this._axisModel, this._axisPointerModel))
      );
    }),
    (hS.prototype._onHandleDragMove = function (t, e) {
      var n = this._handle;
      n &&
        ((this._dragging = !0),
        (t = this.updateHandleTransform(
          dS(n),
          [t, e],
          this._axisModel,
          this._axisPointerModel
        )),
        (this._payloadInfo = t),
        n.stopAnimation(),
        n.attr(dS(t)),
        (sS(n).lastProp = null),
        this._doDispatchAxisPointer());
    }),
    (hS.prototype._doDispatchAxisPointer = function () {
      var t, e;
      this._handle &&
        ((t = this._payloadInfo),
        (e = this._axisModel),
        this._api.dispatchAction({
          type: 'updateAxisPointer',
          x: t.cursorPoint[0],
          y: t.cursorPoint[1],
          tooltipOption: t.tooltipOption,
          axesInfo: [{axisDim: e.axis.dim, axisIndex: e.componentIndex}],
        }));
    }),
    (hS.prototype._onHandleDragEnd = function () {
      var t;
      (this._dragging = !1),
        this._handle &&
          ((t = this._axisPointerModel.get('value')),
          this._moveHandleToValue(t),
          this._api.dispatchAction({type: 'hideTip'}));
    }),
    (hS.prototype.clear = function (t) {
      (this._lastValue = null), (this._lastStatus = null);
      var t = t.getZr(),
        e = this._group,
        n = this._handle;
      t &&
        e &&
        ((this._lastGraphicKey = null),
        e && t.remove(e),
        n && t.remove(n),
        (this._group = null),
        (this._handle = null),
        (this._payloadInfo = null)),
        fy(this, '_doDispatchAxisPointer');
    }),
    (hS.prototype.doClear = function () {}),
    (hS.prototype.buildLabel = function (t, e, n) {
      return {x: t[(n = n || 0)], y: t[1 - n], width: e[n], height: e[1 - n]};
    });
  u(xS, (vS = hS)),
    (xS.prototype.makeElOption = function (t, e, n, i, r) {
      var o,
        a,
        s = n.axis,
        l = s.grid,
        u = i.get('type'),
        h = wS(l, s).getOtherAxis(s).getGlobalExtent(),
        c = s.toGlobalCoord(s.dataToCoord(e, !0)),
        p =
          (u &&
            'none' !== u &&
            ((o = (a = i).get('type')),
            (a = a.getModel(o + 'Style')),
            'line' === o
              ? ((p = a.getLineStyle()).fill = null)
              : 'shadow' === o && ((p = a.getAreaStyle()).stroke = null),
            (o = p),
            ((a = bS[u](s, c, h)).style = o),
            (t.graphicKey = a.type),
            (t.pointer = a)),
          Hw(l.model, n));
      (u = e),
        (s = t),
        (c = p),
        (h = n),
        (o = i),
        (a = r),
        (l = $w.innerTextLayout(c.rotation, 0, c.labelDirection)),
        (c.labelMargin = o.get(['label', 'margin'])),
        gS(s, h, o, a, {
          position: mS(h.axis, u, c),
          align: l.textAlign,
          verticalAlign: l.textVerticalAlign,
        });
    }),
    (xS.prototype.getHandleTransform = function (t, e, n) {
      var i = Hw(e.axis.grid.model, e, {labelInside: !1}),
        n = ((i.labelMargin = n.get(['handle', 'margin'])), mS(e.axis, t, i));
      return {
        x: n[0],
        y: n[1],
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0),
      };
    }),
    (xS.prototype.updateHandleTransform = function (t, e, n, i) {
      var n = n.axis,
        r = n.grid,
        o = n.getGlobalExtent(!0),
        r = wS(r, n).getOtherAxis(n).getGlobalExtent(),
        n = 'x' === n.dim ? 0 : 1,
        a = [t.x, t.y],
        e =
          ((a[n] += e[n]),
          (a[n] = Math.min(o[1], a[n])),
          (a[n] = Math.max(o[0], a[n])),
          (r[1] + r[0]) / 2),
        o = [e, e];
      o[n] = a[n];
      return {
        x: a[0],
        y: a[1],
        rotation: t.rotation,
        cursorPoint: o,
        tooltipOption: [{verticalAlign: 'middle'}, {align: 'center'}][n],
      };
    });
  var vS,
    _S = xS;
  function xS() {
    return (null !== vS && vS.apply(this, arguments)) || this;
  }
  function wS(t, e) {
    var n = {};
    return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n);
  }
  var bS = {
    line: function (t, e, n) {
      var i;
      return (
        (i = [e, n[0]]),
        (e = [e, n[1]]),
        (n = SS(t)),
        {
          type: 'Line',
          subPixelOptimize: !0,
          shape: {x1: i[(n = n || 0)], y1: i[1 - n], x2: e[n], y2: e[1 - n]},
        }
      );
    },
    shadow: function (t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
        r = n[1] - n[0];
      return {
        type: 'Rect',
        shape:
          ((e = [e - i / 2, n[0]]),
          (n = [i, r]),
          (i = SS(t)),
          {x: e[(i = i || 0)], y: e[1 - i], width: n[i], height: n[1 - i]}),
      };
    },
  };
  function SS(t) {
    return 'x' === t.dim ? 0 : 1;
  }
  u(CS, (MS = g)),
    (CS.type = 'axisPointer'),
    (CS.defaultOption = {
      show: 'auto',
      z: 50,
      type: 'line',
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {color: '#B9BEC9', width: 1, type: 'dashed'},
      shadowStyle: {color: 'rgba(210,219,238,0.2)'},
      label: {
        show: !0,
        formatter: null,
        precision: 'auto',
        margin: 3,
        color: '#fff',
        padding: [5, 7, 5, 7],
        backgroundColor: 'auto',
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3,
      },
      handle: {
        show: !1,
        icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
        size: 45,
        margin: 50,
        color: '#333',
        shadowBlur: 3,
        shadowColor: '#aaa',
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40,
      },
    });
  var MS,
    TS = CS;
  function CS() {
    var t = (null !== MS && MS.apply(this, arguments)) || this;
    return (t.type = CS.type), t;
  }
  var IS = Bo(),
    DS = z;
  function kS(t, e, n) {
    var i, c, p;
    function r(t, h) {
      c.on(t, function (e) {
        n = p;
        var n,
          i,
          r = {dispatchAction: o, pendings: (i = {showTip: [], hideTip: []})};
        function o(t) {
          var e = i[t.type];
          e ? e.push(t) : ((t.dispatchAction = o), n.dispatchAction(t));
        }
        DS(IS(c).records, function (t) {
          t && h(t, e, r.dispatchAction);
        });
        var t,
          a = r.pendings,
          s = p,
          l = a.showTip.length,
          u = a.hideTip.length;
        l ? (t = a.showTip[l - 1]) : u && (t = a.hideTip[u - 1]),
          t && ((t.dispatchAction = null), s.dispatchAction(t));
      });
    }
    b.node ||
      ((i = e.getZr()),
      IS(i).records || (IS(i).records = {}),
      (p = e),
      IS((c = i)).initialized ||
        ((IS(c).initialized = !0),
        r('click', ct(PS, 'click')),
        r('mousemove', ct(PS, 'mousemove')),
        r('globalout', AS)),
      ((IS(i).records[t] || (IS(i).records[t] = {})).handler = n));
  }
  function AS(t, e, n) {
    t.handler('leave', null, n);
  }
  function PS(t, e, n, i) {
    e.handler(t, n, i);
  }
  function LS(t, e) {
    b.node ||
      ((e = e.getZr()), (IS(e).records || {})[t] && (IS(e).records[t] = null));
  }
  u(BS, (OS = $g)),
    (BS.prototype.render = function (t, e, n) {
      var e = e.getComponent('tooltip'),
        i =
          t.get('triggerOn') || (e && e.get('triggerOn')) || 'mousemove|click';
      kS('axisPointer', n, function (t, e, n) {
        'none' !== i &&
          ('leave' === t || 0 <= i.indexOf(t)) &&
          n({
            type: 'updateAxisPointer',
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY,
          });
      });
    }),
    (BS.prototype.remove = function (t, e) {
      LS('axisPointer', e);
    }),
    (BS.prototype.dispose = function (t, e) {
      LS('axisPointer', e);
    }),
    (BS.type = 'axisPointer');
  var OS,
    RS = BS;
  function BS() {
    var t = (null !== OS && OS.apply(this, arguments)) || this;
    return (t.type = BS.type), t;
  }
  function zS(t, e) {
    var n,
      i,
      r,
      o,
      a = [],
      s = t.seriesIndex;
    return null == s ||
      !(e = e.getSeriesByIndex(s)) ||
      null == (s = Ro((n = e.getData()), t)) ||
      s < 0 ||
      F(s)
      ? {point: []}
      : ((i = n.getItemGraphicEl(s)),
        (r = e.coordinateSystem),
        e.getTooltipPosition
          ? (a = e.getTooltipPosition(s) || [])
          : r && r.dataToPoint
          ? (a = t.isStacked
              ? ((e = r.getBaseAxis()),
                (t = r.getOtherAxis(e).dim),
                (e = e.dim),
                (t = 'x' === t || 'radius' === t ? 1 : 0),
                (e = n.mapDimension(e)),
                ((o = [])[t] = n.get(e, s)),
                (o[1 - t] = n.get(
                  n.getCalculationInfo('stackResultDimension'),
                  s
                )),
                r.dataToPoint(o) || [])
              : r.dataToPoint(
                  n.getValues(
                    N(r.dimensions, function (t) {
                      return n.mapDimension(t);
                    }),
                    s
                  )
                ) || [])
          : i &&
            ((e = i.getBoundingRect().clone()).applyTransform(i.transform),
            (a = [e.x + e.width / 2, e.y + e.height / 2])),
        {point: a, el: i});
  }
  var ES = Bo();
  function NS(t, e, n) {
    var o,
      a,
      i,
      s,
      l,
      r,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m = t.currTrigger,
      v = [t.x, t.y],
      _ = t,
      x = t.dispatchAction || S(n.dispatchAction, n),
      w = e.getComponent('axisPointer').coordSysAxesInfo;
    if (w)
      return (
        GS(v) &&
          (v = zS(
            {seriesIndex: _.seriesIndex, dataIndex: _.dataIndex},
            e
          ).point),
        (o = GS(v)),
        (a = _.axesInfo),
        (i = w.axesInfo),
        (s = 'leave' === m || GS(v)),
        (l = {}),
        (e = {list: [], map: {}}),
        (u = {showPointer: ct(VS, (r = {})), showTooltip: ct(HS, e)}),
        z(w.coordSysMap, function (t, e) {
          var r = o || t.containPoint(v);
          z(w.coordSysAxesInfo[e], function (t, e) {
            var n = t.axis,
              i = (function (t, e) {
                for (var n = 0; n < (t || []).length; n++) {
                  var i = t[n];
                  if (
                    e.axis.dim === i.axisDim &&
                    e.axis.model.componentIndex === i.axisIndex
                  )
                    return i;
                }
              })(a, t);
            s ||
              !r ||
              (a && !i) ||
              (null !=
                (i = null != (i = i && i.value) || o ? i : n.pointToData(v)) &&
                FS(t, i, u, !1, l));
          });
        }),
        (h = {}),
        z(i, function (n, t) {
          var i = n.linkGroup;
          i &&
            !r[t] &&
            z(i.axesInfo, function (t, e) {
              var e = r[e];
              t !== n &&
                e &&
                ((e = e.value),
                i.mapper && (e = n.axis.scale.parse(i.mapper(e, WS(t), WS(n)))),
                (h[n.key] = e));
            });
        }),
        z(h, function (t, e) {
          FS(i[e], t, u, !0, l);
        }),
        (c = r),
        (_ = i),
        (p = l.axesInfo = []),
        z(_, function (t, e) {
          var n = t.axisPointerModel.option,
            e = c[e];
          e
            ? (t.useHandle || (n.status = 'show'),
              (n.value = e.value),
              (n.seriesDataIndices = (e.payloadBatch || []).slice()))
            : t.useHandle || (n.status = 'hide'),
            'show' === n.status &&
              p.push({
                axisDim: t.axis.dim,
                axisIndex: t.axis.model.componentIndex,
                value: n.value,
              });
        }),
        (m = e),
        (_ = t),
        (e = x),
        GS((t = v)) || !m.list.length
          ? e({type: 'hideTip'})
          : ((x =
              ((m.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] ||
              {}),
            e({
              type: 'showTip',
              escapeConnect: !0,
              x: t[0],
              y: t[1],
              tooltipOption: _.tooltipOption,
              position: _.position,
              dataIndexInside: x.dataIndexInside,
              dataIndex: x.dataIndex,
              seriesIndex: x.seriesIndex,
              dataByCoordSys: m.list,
            })),
        (e = i),
        (_ = (t = n).getZr()),
        (x = 'axisPointerLastHighlights'),
        (d = ES(_)[x] || {}),
        (f = ES(_)[x] = {}),
        z(e, function (t, e) {
          var n = t.axisPointerModel.option;
          'show' === n.status &&
            t.triggerEmphasis &&
            z(n.seriesDataIndices, function (t) {
              var e = t.seriesIndex + ' | ' + t.dataIndex;
              f[e] = t;
            });
        }),
        (g = []),
        (y = []),
        z(d, function (t, e) {
          f[e] || y.push(t);
        }),
        z(f, function (t, e) {
          d[e] || g.push(t);
        }),
        y.length &&
          t.dispatchAction({
            type: 'downplay',
            escapeConnect: !0,
            notBlur: !0,
            batch: y,
          }),
        g.length &&
          t.dispatchAction({
            type: 'highlight',
            escapeConnect: !0,
            notBlur: !0,
            batch: g,
          }),
        l
      );
  }
  function FS(t, e, n, i, r) {
    var o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g = t.axis;
    !g.scale.isBlank() &&
      g.containData(e) &&
      (t.involveSeries
        ? ((a = e),
          (s = t.axis),
          (l = s.dim),
          (u = a),
          (h = []),
          (c = Number.MAX_VALUE),
          (p = -1),
          z(t.seriesModels, function (e, t) {
            var n,
              i = e.getData().mapDimensionsAll(l);
            if (e.getAxisTooltipData)
              var r = e.getAxisTooltipData(i, a, s),
                o = r.dataIndices,
                r = r.nestestValue;
            else {
              if (
                !(o = e
                  .getData()
                  .indicesOfNearest(
                    i[0],
                    a,
                    'category' === s.type ? 0.5 : null
                  )).length
              )
                return;
              r = e.getData().get(i[0], o[0]);
            }
            null != r &&
              isFinite(r) &&
              ((i = a - r), (n = Math.abs(i)) <= c) &&
              ((n < c || (0 <= i && p < 0)) &&
                ((c = n), (p = i), (u = r), (h.length = 0)),
              z(o, function (t) {
                h.push({
                  seriesIndex: e.seriesIndex,
                  dataIndexInside: t,
                  dataIndex: e.getData().getRawIndex(t),
                });
              }));
          }),
          (f = (o = {payloadBatch: h, snapToValue: u}).snapToValue),
          (d = o.payloadBatch)[0] && null == r.seriesIndex && L(r, d[0]),
          !i && t.snap && g.containData(f) && null != f && (e = f),
          n.showPointer(t, e, d),
          n.showTooltip(t, o, f))
        : n.showPointer(t, e));
  }
  function VS(t, e, n, i) {
    t[e.key] = {value: n, payloadBatch: i};
  }
  function HS(t, e, n, i) {
    var r,
      o,
      n = n.payloadBatch,
      a = e.axis,
      s = a.model,
      l = e.axisPointerModel;
    e.triggerTooltip &&
      n.length &&
      ((r = lb((e = e.coordSys.model))),
      (o = t.map[r]) ||
        ((o = t.map[r] =
          {
            coordSysId: e.id,
            coordSysIndex: e.componentIndex,
            coordSysType: e.type,
            coordSysMainType: e.mainType,
            dataByAxis: [],
          }),
        t.list.push(o)),
      o.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: s.componentIndex,
        axisType: s.type,
        axisId: s.id,
        value: i,
        valueLabelOpt: {
          precision: l.get(['label', 'precision']),
          formatter: l.get(['label', 'formatter']),
        },
        seriesDataIndices: n.slice(),
      }));
  }
  function WS(t) {
    var e = t.axis.model,
      n = {},
      t = (n.axisDim = t.axis.dim);
    return (
      (n.axisIndex = n[t + 'AxisIndex'] = e.componentIndex),
      (n.axisName = n[t + 'AxisName'] = e.name),
      (n.axisId = n[t + 'AxisId'] = e.id),
      n
    );
  }
  function GS(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }
  function US(t) {
    cb.registerAxisPointerClass('CartesianAxisPointer', _S),
      t.registerComponentModel(TS),
      t.registerComponentView(RS),
      t.registerPreprocessor(function (t) {
        var e;
        t &&
          ((t.axisPointer && 0 !== t.axisPointer.length) ||
            (t.axisPointer = {}),
          (e = t.axisPointer.link)) &&
          !F(e) &&
          (t.axisPointer.link = [e]);
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent('axisPointer').coordSysAxesInfo = rb(t, e);
      }),
      t.registerAction(
        {
          type: 'updateAxisPointer',
          event: 'updateAxisPointer',
          update: ':updateAxisPointer',
        },
        NS
      );
  }
  u(XS, (ZS = g)),
    (XS.type = 'tooltip'),
    (XS.dependencies = ['axisPointer']),
    (XS.defaultOption = {
      z: 60,
      show: !0,
      showContent: !0,
      trigger: 'item',
      triggerOn: 'mousemove|click',
      alwaysShowContent: !1,
      displayMode: 'single',
      renderMode: 'auto',
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: '#fff',
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      padding: null,
      extraCssText: '',
      axisPointer: {
        type: 'line',
        axis: 'auto',
        animation: 'auto',
        animationDurationUpdate: 200,
        animationEasingUpdate: 'exponentialOut',
        crossStyle: {color: '#999', width: 1, type: 'dashed', textStyle: {}},
      },
      textStyle: {color: '#666', fontSize: 14},
    });
  var ZS,
    YS = XS;
  function XS() {
    var t = (null !== ZS && ZS.apply(this, arguments)) || this;
    return (t.type = XS.type), t;
  }
  function qS(t) {
    var e = t.get('confine');
    return null != e ? e : 'richText' === t.get('renderMode');
  }
  function jS(t) {
    if (b.domSupported)
      for (
        var e = document.documentElement.style, n = 0, i = t.length;
        n < i;
        n++
      )
        if (t[n] in e) return t[n];
  }
  var KS = jS([
    'transform',
    'webkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform',
  ]);
  function $S(t, e) {
    if (!t) return e;
    e = Tp(e, !0);
    var n = t.indexOf(e);
    return (t = -1 === n ? e : '-' + t.slice(0, n) + '-' + e).toLowerCase();
  }
  var QS = $S(
      jS([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition',
      ]),
      'transition'
    ),
    JS = $S(KS, 'transform'),
    tM =
      'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
      (b.transform3dSupported ? 'will-change:transform;' : '');
  function eM(t, e, n) {
    var i,
      t = t.toFixed(0) + 'px',
      e = e.toFixed(0) + 'px';
    return b.transformSupported
      ? ((i =
          'translate' +
          ((i = b.transform3dSupported) ? '3d' : '') +
          '(' +
          t +
          ',' +
          e +
          (i ? ',0' : '') +
          ')'),
        n
          ? 'top:0;left:0;' + JS + ':' + i + ';'
          : [
              ['top', 0],
              ['left', 0],
              [KS, i],
            ])
      : n
      ? 'top:' + e + ';left:' + t + ';'
      : [
          ['top', e],
          ['left', t],
        ];
  }
  function nM(i, t, e) {
    var n,
      r,
      o = [],
      a = i.get('transitionDuration'),
      s = i.get('backgroundColor'),
      l = i.get('shadowBlur'),
      u = i.get('shadowColor'),
      h = i.get('shadowOffsetX'),
      c = i.get('shadowOffsetY'),
      p = i.getModel('textStyle'),
      d = zg(i, 'html');
    return (
      o.push('box-shadow:' + (h + 'px ' + c + 'px ' + l + 'px ' + u)),
      t &&
        a &&
        o.push(
          ((u =
            'opacity' +
            (l =
              ' ' + (h = a) / 2 + 's ' + (c = 'cubic-bezier(0.23,1,0.32,1)')) +
            ',visibility' +
            l),
          e ||
            ((l = ' ' + h + 's ' + c),
            (u += b.transformSupported
              ? ',' + JS + l
              : ',left' + l + ',top' + l)),
          QS + ':' + u)
        ),
      s && o.push('background-color:' + s),
      z(['width', 'color', 'radius'], function (t) {
        var e = 'border-' + t,
          n = Tp(e),
          n = i.get(n);
        null != n && o.push(e + ':' + n + ('color' === t ? '' : 'px'));
      }),
      o.push(
        ((r = []),
        (t = (n = p).get('fontSize')),
        (a = n.getTextColor()) && r.push('color:' + a),
        r.push('font:' + n.getFont()),
        t && r.push('line-height:' + Math.round((3 * t) / 2) + 'px'),
        (a = n.get('textShadowColor')),
        (t = n.get('textShadowBlur') || 0),
        (e = n.get('textShadowOffsetX') || 0),
        (h = n.get('textShadowOffsetY') || 0),
        a &&
          t &&
          r.push('text-shadow:' + e + 'px ' + h + 'px ' + t + 'px ' + a),
        z(['decoration', 'align'], function (t) {
          var e = n.get(t);
          e && r.push('text-' + t + ':' + e);
        }),
        r.join(';'))
      ),
      null != d && o.push('padding:' + Cp(d).join('px ') + 'px'),
      o.join(';') + ';'
    );
  }
  function iM(t, e, n, i, r) {
    var o,
      a,
      s = e && e.painter;
    n
      ? (o = s && s.getViewportRoot()) &&
        ((a = t), (n = n), ge(fe, o, i, r, !0)) &&
        ge(a, n, fe[0], fe[1])
      : ((t[0] = i),
        (t[1] = r),
        (o = s && s.getViewportRootOffset()) &&
          ((t[0] += o.offsetLeft), (t[1] += o.offsetTop))),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight());
  }
  (oM.prototype.update = function (t) {
    this._container ||
      ((i = this._api.getDom()),
      (n = 'position'),
      (n = (e =
        (e = i).currentStyle ||
        (document.defaultView && document.defaultView.getComputedStyle(e)))
        ? n
          ? e[n]
          : e
        : null),
      'absolute' !== (e = i.style).position &&
        'absolute' !== n &&
        (e.position = 'relative'));
    var e,
      n,
      i = t.get('alwaysShowContent');
    i && this._moveIfResized(),
      (this._alwaysShowContent = i),
      (this.el.className = t.get('className') || '');
  }),
    (oM.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el,
        i = n.style,
        r = this._styleCoord;
      n.innerHTML
        ? (i.cssText =
            tM +
            nM(t, !this._firstShow, this._longHide) +
            eM(r[0], r[1], !0) +
            'border-color:' +
            Lp(e) +
            ';' +
            (t.get('extraCssText') || '') +
            ';pointer-events:' +
            (this._enterable ? 'auto' : 'none'))
        : (i.display = 'none'),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1);
    }),
    (oM.prototype.setContent = function (t, e, n, i, r) {
      var o = this.el;
      if (null == t) o.innerHTML = '';
      else {
        var a,
          s,
          l,
          u,
          h,
          c = '';
        if (
          (V(r) &&
            'item' === n.get('trigger') &&
            !qS(n) &&
            ((n = n),
            (i = i),
            (c =
              V((r = r)) && 'inside' !== r
                ? ((a = n.get('backgroundColor')),
                  (n = n.get('borderWidth')),
                  (i = Lp(i)),
                  (r = r =
                    'left' === (r = r)
                      ? 'right'
                      : 'right' === r
                      ? 'left'
                      : 'top' === r
                      ? 'bottom'
                      : 'top'),
                  (p = Math.max(1.5 * Math.round(n), 6)),
                  (s = ''),
                  (l = JS + ':'),
                  -1 < I(['left', 'right'], r)
                    ? ((s += 'top:50%'),
                      (l +=
                        'translateY(-50%) rotate(' +
                        (h = 'left' == r ? -225 : -45) +
                        'deg)'))
                    : ((s += 'left:50%'),
                      (l +=
                        'translateX(-50%) rotate(' +
                        (h = 'top' == r ? 225 : 45) +
                        'deg)')),
                  (h = (h * Math.PI) / 180),
                  (h =
                    (u = p + n) * Math.abs(Math.cos(h)) +
                    u * Math.abs(Math.sin(h))),
                  (i = i + ' solid ' + n + 'px;'),
                  '<div style="' +
                    [
                      'position:absolute;width:' +
                        p +
                        'px;height:' +
                        p +
                        'px;z-index:-1;',
                      (s +=
                        ';' +
                        r +
                        ':-' +
                        Math.round(
                          100 *
                            ((h - Math.SQRT2 * n) / 2 +
                              Math.SQRT2 * n -
                              (h - u) / 2)
                        ) /
                          100 +
                        'px') +
                        ';' +
                        l +
                        ';',
                      'border-bottom:' + i,
                      'border-right:' + i,
                      'background-color:' + a + ';',
                    ].join('') +
                    '"></div>')
                : '')),
          V(t))
        )
          o.innerHTML = t + c;
        else if (t) {
          (o.innerHTML = ''), F(t) || (t = [t]);
          for (var p, d = 0; d < t.length; d++)
            yt(t[d]) && t[d].parentNode !== o && o.appendChild(t[d]);
          c &&
            o.childNodes.length &&
            (((p = document.createElement('div')).innerHTML = c),
            o.appendChild(p));
        }
      }
    }),
    (oM.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (oM.prototype.getSize = function () {
      var t = this.el;
      return [t.offsetWidth, t.offsetHeight];
    }),
    (oM.prototype.moveTo = function (t, e) {
      var n,
        i = this._styleCoord;
      iM(i, this._zr, this._container, t, e),
        null != i[0] &&
          null != i[1] &&
          ((n = this.el.style),
          z(eM(i[0], i[1]), function (t) {
            n[t[0]] = t[1];
          }));
    }),
    (oM.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (oM.prototype.hide = function () {
      var t = this,
        e = this.el.style;
      (e.visibility = 'hidden'),
        (e.opacity = '0'),
        b.transform3dSupported && (e.willChange = ''),
        (this._show = !1),
        (this._longHideTimeout = setTimeout(function () {
          return (t._longHide = !0);
        }, 500));
    }),
    (oM.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(S(this.hide, this), t)))
          : this.hide());
    }),
    (oM.prototype.isShow = function () {
      return this._show;
    }),
    (oM.prototype.dispose = function () {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this.el.parentNode;
      t && t.removeChild(this.el), (this.el = this._container = null);
    });
  var rM = oM;
  function oM(t, e) {
    if (
      ((this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._alwaysShowContent = !1),
      (this._firstShow = !0),
      (this._longHide = !0),
      b.wxa)
    )
      return null;
    var n = document.createElement('div'),
      i = ((n.domBelongToZr = !0), (this.el = n), (this._zr = t.getZr())),
      e = e.appendTo,
      e =
        e &&
        (V(e) ? document.querySelector(e) : yt(e) ? e : D(e) && e(t.getDom())),
      r =
        (iM(this._styleCoord, i, e, t.getWidth() / 2, t.getHeight() / 2),
        (e || t.getDom()).appendChild(n),
        (this._api = t),
        (this._container = e),
        this);
    (n.onmouseenter = function () {
      r._enterable && (clearTimeout(r._hideTimeout), (r._show = !0)),
        (r._inContent = !0);
    }),
      (n.onmousemove = function (t) {
        var e;
        (t = t || window.event),
          r._enterable ||
            ((e = i.handler),
            Ce(i.painter.getViewportRoot(), t, !0),
            e.dispatch('mousemove', t));
      }),
      (n.onmouseleave = function () {
        (r._inContent = !1),
          r._enterable && r._show && r.hideLater(r._hideDelay);
      });
  }
  (sM.prototype.update = function (t) {
    t = t.get('alwaysShowContent');
    t && this._moveIfResized(), (this._alwaysShowContent = t);
  }),
    (sM.prototype.show = function () {
      this._hideTimeout && clearTimeout(this._hideTimeout),
        this.el.show(),
        (this._show = !0);
    }),
    (sM.prototype.setContent = function (t, e, n, i, r) {
      var o = this,
        a =
          (O(t) && f(''),
          this.el && this._zr.remove(this.el),
          n.getModel('textStyle')),
        s =
          ((this.el = new Vs({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: a.get('textShadowColor'),
              fill: n.get(['textStyle', 'color']),
              padding: zg(n, 'richText'),
              verticalAlign: 'top',
              align: 'left',
            },
            z: n.get('z'),
          })),
          z(
            [
              'backgroundColor',
              'borderRadius',
              'shadowColor',
              'shadowBlur',
              'shadowOffsetX',
              'shadowOffsetY',
            ],
            function (t) {
              o.el.style[t] = n.get(t);
            }
          ),
          z(
            ['textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY'],
            function (t) {
              o.el.style[t] = a.get(t) || 0;
            }
          ),
          this._zr.add(this.el),
          this);
      this.el.on('mouseover', function () {
        s._enterable && (clearTimeout(s._hideTimeout), (s._show = !0)),
          (s._inContent = !0);
      }),
        this.el.on('mouseout', function () {
          s._enterable && s._show && s.hideLater(s._hideDelay),
            (s._inContent = !1);
        });
    }),
    (sM.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (sM.prototype.getSize = function () {
      var t = this.el,
        e = this.el.getBoundingRect(),
        t = uM(t.style);
      return [e.width + t.left + t.right, e.height + t.top + t.bottom];
    }),
    (sM.prototype.moveTo = function (t, e) {
      var n,
        i,
        r = this.el;
      r &&
        (hM((i = this._styleCoord), this._zr, t, e),
        (t = i[0]),
        (e = i[1]),
        (n = lM((i = r.style).borderWidth || 0)),
        (i = uM(i)),
        (r.x = t + n + i.left),
        (r.y = e + n + i.top),
        r.markRedraw());
    }),
    (sM.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (sM.prototype.hide = function () {
      this.el && this.el.hide(), (this._show = !1);
    }),
    (sM.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(S(this.hide, this), t)))
          : this.hide());
    }),
    (sM.prototype.isShow = function () {
      return this._show;
    }),
    (sM.prototype.dispose = function () {
      this._zr.remove(this.el);
    });
  var aM = sM;
  function sM(t) {
    (this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._alwaysShowContent = !1),
      (this._enterable = !0),
      (this._zr = t.getZr()),
      hM(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
  }
  function lM(t) {
    return Math.max(0, t);
  }
  function uM(t) {
    var e = lM(t.shadowBlur || 0),
      n = lM(t.shadowOffsetX || 0),
      t = lM(t.shadowOffsetY || 0);
    return {
      left: lM(e - n),
      right: lM(e + n),
      top: lM(e - t),
      bottom: lM(e + t),
    };
  }
  function hM(t, e, n, i) {
    (t[0] = n),
      (t[1] = i),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight());
  }
  var cM,
    pM = new Bs({shape: {x: -1, y: -1, width: 2, height: 2}}),
    dM =
      (u(fM, (cM = $g)),
      (fM.prototype.init = function (t, e) {
        var n;
        !b.node &&
          e.getDom() &&
          ((t = t.getComponent('tooltip')),
          (n = this._renderMode =
            'auto' === (n = t.get('renderMode'))
              ? b.domSupported
                ? 'html'
                : 'richText'
              : n || 'html'),
          (this._tooltipContent =
            'richText' === n
              ? new aM(e)
              : new rM(e, {
                  appendTo: t.get('appendToBody', !0)
                    ? 'body'
                    : t.get('appendTo', !0),
                })));
      }),
      (fM.prototype.render = function (t, e, n) {
        !b.node &&
          n.getDom() &&
          (this.group.removeAll(),
          (this._tooltipModel = t),
          (this._ecModel = e),
          (this._api = n),
          (e = this._tooltipContent).update(t),
          e.setEnterable(t.get('enterable')),
          this._initGlobalListener(),
          this._keepShow(),
          'richText' !== this._renderMode && t.get('transitionDuration')
            ? dy(this, '_updatePosition', 50, 'fixRate')
            : fy(this, '_updatePosition'));
      }),
      (fM.prototype._initGlobalListener = function () {
        var i = this._tooltipModel.get('triggerOn');
        kS(
          'itemTooltip',
          this._api,
          S(function (t, e, n) {
            'none' !== i &&
              (0 <= i.indexOf(t)
                ? this._tryShow(e, n)
                : 'leave' === t && this._hide(n));
          }, this)
        );
      }),
      (fM.prototype._keepShow = function () {
        var t,
          e = this._tooltipModel,
          n = this._ecModel,
          i = this._api,
          r = e.get('triggerOn');
        null != this._lastX &&
          null != this._lastY &&
          'none' !== r &&
          'click' !== r &&
          ((t = this),
          clearTimeout(this._refreshUpdateTimeout),
          (this._refreshUpdateTimeout = setTimeout(function () {
            i.isDisposed() ||
              t.manuallyShowTip(e, n, i, {
                x: t._lastX,
                y: t._lastY,
                dataByCoordSys: t._lastDataByCoordSys,
              });
          })));
      }),
      (fM.prototype.manuallyShowTip = function (t, e, n, i) {
        var r, o, a, s;
        i.from !== this.uid &&
          !b.node &&
          n.getDom() &&
          ((r = yM(i, n)),
          (this._ticket = ''),
          (s = i.dataByCoordSys),
          (o = (function (n, t, e) {
            var i = No(n).queryOptionMap,
              r = i.keys()[0];
            if (r && 'series' !== r) {
              var o,
                t = Ho(t, r, i.get(r), {
                  useDefault: !1,
                  enableAll: !1,
                  enableNone: !1,
                }).models[0];
              if (t)
                if (
                  (e.getViewOfComponentModel(t).group.traverse(function (t) {
                    var e = k(t).tooltipConfig;
                    if (e && e.name === n.name) return (o = t), !0;
                  }),
                  o)
                )
                  return {
                    componentMainType: r,
                    componentIndex: t.componentIndex,
                    el: o,
                  };
            }
          })(i, e, n))
            ? ((a = o.el.getBoundingRect().clone()).applyTransform(
                o.el.transform
              ),
              this._tryShow(
                {
                  offsetX: a.x + a.width / 2,
                  offsetY: a.y + a.height / 2,
                  target: o.el,
                  position: i.position,
                  positionDefault: 'bottom',
                },
                r
              ))
            : i.tooltip && null != i.x && null != i.y
            ? (((a = pM).x = i.x),
              (a.y = i.y),
              a.update(),
              (k(a).tooltipConfig = {name: null, option: i.tooltip}),
              this._tryShow({offsetX: i.x, offsetY: i.y, target: a}, r))
            : s
            ? this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  dataByCoordSys: s,
                  tooltipOption: i.tooltipOption,
                },
                r
              )
            : null != i.seriesIndex
            ? this._manuallyAxisShowTip(t, e, n, i) ||
              ((a = (o = zS(i, e)).point[0]),
              (s = o.point[1]),
              null != a &&
                null != s &&
                this._tryShow(
                  {
                    offsetX: a,
                    offsetY: s,
                    target: o.el,
                    position: i.position,
                    positionDefault: 'bottom',
                  },
                  r
                ))
            : null != i.x &&
              null != i.y &&
              (n.dispatchAction({type: 'updateAxisPointer', x: i.x, y: i.y}),
              this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  target: n.getZr().findHover(i.x, i.y).target,
                },
                r
              )));
      }),
      (fM.prototype.manuallyHideTip = function (t, e, n, i) {
        var r = this._tooltipContent;
        this._tooltipModel && r.hideLater(this._tooltipModel.get('hideDelay')),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          i.from !== this.uid && this._hide(yM(i, n));
      }),
      (fM.prototype._manuallyAxisShowTip = function (t, e, n, i) {
        var r = i.seriesIndex,
          o = i.dataIndex,
          a = e.getComponent('axisPointer').coordSysAxesInfo;
        if (null != r && null != o && null != a) {
          a = e.getSeriesByIndex(r);
          if (a) {
            e = gM(
              [
                a.getData().getItemModel(o),
                a,
                (a.coordinateSystem || {}).model,
              ],
              this._tooltipModel
            );
            if ('axis' === e.get('trigger'))
              return (
                n.dispatchAction({
                  type: 'updateAxisPointer',
                  seriesIndex: r,
                  dataIndex: o,
                  position: i.position,
                }),
                !0
              );
          }
        }
      }),
      (fM.prototype._tryShow = function (t, e) {
        var n,
          i,
          r,
          o = t.target;
        this._tooltipModel &&
          ((this._lastX = t.offsetX),
          (this._lastY = t.offsetY),
          (n = t.dataByCoordSys) && n.length
            ? this._showAxisTooltip(n, t)
            : o
            ? 'legend' !== k(o).ssrType &&
              (Zy(
                o,
                function (t) {
                  return null != k(t).dataIndex
                    ? ((i = t), 1)
                    : null != k(t).tooltipConfig && ((r = t), 1);
                },
                !(this._lastDataByCoordSys = null)
              ),
              i
                ? this._showSeriesItemTooltip(t, i, e)
                : r
                ? this._showComponentItemTooltip(t, r, e)
                : this._hide(e))
            : ((this._lastDataByCoordSys = null), this._hide(e)));
      }),
      (fM.prototype._showOrMove = function (t, e) {
        t = t.get('showDelay');
        (e = S(e, this)),
          clearTimeout(this._showTimout),
          0 < t ? (this._showTimout = setTimeout(e, t)) : e();
      }),
      (fM.prototype._showAxisTooltip = function (t, e) {
        var u = this._ecModel,
          h = this._tooltipModel,
          n = [e.offsetX, e.offsetY],
          i = gM([e.tooltipOption], h),
          c = this._renderMode,
          p = [],
          d = Dg('section', {blocks: [], noHeader: !0}),
          f = [],
          g = new Eg(),
          r =
            (z(t, function (t) {
              z(t.dataByAxis, function (r) {
                var o,
                  a,
                  s = u.getComponent(r.axisDim + 'Axis', r.axisIndex),
                  l = r.value;
                s &&
                  null != l &&
                  ((o = yS(l, s.axis, u, r.seriesDataIndices, r.valueLabelOpt)),
                  (a = Dg('section', {
                    header: o,
                    noHeader: !Ct(o),
                    sortBlocks: !0,
                    blocks: [],
                  })),
                  d.blocks.push(a),
                  z(r.seriesDataIndices, function (t) {
                    var e,
                      n = u.getSeriesByIndex(t.seriesIndex),
                      t = t.dataIndexInside,
                      i = n.getDataParams(t);
                    i.dataIndex < 0 ||
                      ((i.axisDim = r.axisDim),
                      (i.axisIndex = r.axisIndex),
                      (i.axisType = r.axisType),
                      (i.axisId = r.axisId),
                      (i.axisValue = z_(s.axis, {value: l})),
                      (i.axisValueLabel = o),
                      (i.marker = g.makeTooltipMarker('item', Lp(i.color), c)),
                      (e = (t = Pf(n.formatTooltip(t, !0, null))).frag) &&
                        ((n = gM([n], h).get('valueFormatter')),
                        a.blocks.push(n ? L({valueFormatter: n}, e) : e)),
                      t.text && f.push(t.text),
                      p.push(i));
                  }));
              });
            }),
            d.blocks.reverse(),
            f.reverse(),
            e.position),
          e = i.get('order'),
          e = Og(d, g, c, e, u.get('useUTC'), i.get('textStyle')),
          e = (e && f.unshift(e), 'richText' === c ? '\n\n' : '<br/>'),
          o = f.join(e);
        this._showOrMove(i, function () {
          this._updateContentNotChangedOnAxis(t, p)
            ? this._updatePosition(i, r, n[0], n[1], this._tooltipContent, p)
            : this._showTooltipContent(
                i,
                o,
                p,
                Math.random() + '',
                n[0],
                n[1],
                r,
                null,
                g
              );
        });
      }),
      (fM.prototype._showSeriesItemTooltip = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._ecModel,
          e = k(e),
          u = e.seriesIndex,
          h = l.getSeriesByIndex(u),
          c = e.dataModel || h,
          p = e.dataIndex,
          e = e.dataType,
          d = c.getData(e),
          f = this._renderMode,
          g = t.positionDefault,
          y = gM(
            [d.getItemModel(p), c, h && (h.coordinateSystem || {}).model],
            this._tooltipModel,
            g ? {position: g} : null
          ),
          h = y.get('trigger');
        (null != h && 'item' !== h) ||
          ((i = c.getDataParams(p, e)),
          (r = new Eg()),
          (i.marker = r.makeTooltipMarker('item', Lp(i.color), f)),
          (g = Pf(c.formatTooltip(p, !1, e))),
          (h = y.get('order')),
          (e = y.get('valueFormatter')),
          (o = g.frag),
          (a = o
            ? Og(
                e ? L({valueFormatter: e}, o) : o,
                r,
                f,
                h,
                l.get('useUTC'),
                y.get('textStyle')
              )
            : g.text),
          (s = 'item_' + c.name + '_' + p),
          this._showOrMove(y, function () {
            this._showTooltipContent(
              y,
              a,
              i,
              s,
              t.offsetX,
              t.offsetY,
              t.position,
              t.target,
              r
            );
          }),
          n({
            type: 'showTip',
            dataIndexInside: p,
            dataIndex: d.getRawIndex(p),
            seriesIndex: u,
            from: this.uid,
          }));
      }),
      (fM.prototype._showComponentItemTooltip = function (e, n, t) {
        var i = k(n),
          r = i.tooltipConfig.option || {},
          o = [(r = V(r) ? {content: r, formatter: r} : r)],
          i = this._ecModel.getComponent(i.componentMainType, i.componentIndex),
          i =
            (i && o.push(i), o.push({formatter: r.content}), e.positionDefault),
          a = gM(o, this._tooltipModel, i ? {position: i} : null),
          s = a.get('content'),
          l = Math.random() + '',
          u = new Eg();
        this._showOrMove(a, function () {
          var t = y(a.get('formatterParams') || {});
          this._showTooltipContent(
            a,
            s,
            t,
            l,
            e.offsetX,
            e.offsetY,
            e.position,
            n,
            u
          );
        }),
          t({type: 'showTip', from: this.uid});
      }),
      (fM.prototype._showTooltipContent = function (n, t, i, e, r, o, a, s, l) {
        var u, h, c, p, d;
        (this._ticket = ''),
          n.get('showContent') &&
            n.get('show') &&
            ((u = this._tooltipContent).setEnterable(n.get('enterable')),
            (h = n.get('formatter')),
            (a = a || n.get('position')),
            (t = t),
            (c = this._getNearestPoint(
              [r, o],
              i,
              n.get('trigger'),
              n.get('borderColor')
            ).color),
            h &&
              (t = V(h)
                ? ((p = n.ecModel.get('useUTC')),
                  (t = h),
                  Ap(
                    (t =
                      (d = F(i) ? i[0] : i) &&
                      d.axisType &&
                      0 <= d.axisType.indexOf('time')
                        ? lp(d.axisValue, t, p)
                        : t),
                    i,
                    !0
                  ))
                : D(h)
                ? ((d = S(function (t, e) {
                    t === this._ticket &&
                      (u.setContent(e, l, n, c, a),
                      this._updatePosition(n, a, r, o, u, i, s));
                  }, this)),
                  (this._ticket = e),
                  h(i, e, d))
                : h),
            u.setContent(t, l, n, c, a),
            u.show(n, c),
            this._updatePosition(n, a, r, o, u, i, s));
      }),
      (fM.prototype._getNearestPoint = function (t, e, n, i) {
        return 'axis' === n || F(e)
          ? {color: i || ('html' === this._renderMode ? '#fff' : 'none')}
          : F(e)
          ? void 0
          : {color: i || e.color || e.borderColor};
      }),
      (fM.prototype._updatePosition = function (t, e, n, i, r, o, a) {
        var s,
          l = this._api.getWidth(),
          u = this._api.getHeight(),
          h = ((e = e || t.get('position')), r.getSize()),
          c = t.get('align'),
          p = t.get('verticalAlign'),
          d = a && a.getBoundingRect().clone();
        a && d.applyTransform(a.transform),
          F(
            (e = D(e)
              ? e([n, i], o, r.el, d, {
                  viewSize: [l, u],
                  contentSize: h.slice(),
                })
              : e)
          )
            ? ((n = no(e[0], l)), (i = no(e[1], u)))
            : O(e)
            ? (((o = e).width = h[0]),
              (o.height = h[1]),
              (n = (o = Fp(o, {width: l, height: u})).x),
              (i = o.y),
              (p = c = null))
            : (i =
                ((n = (s =
                  V(e) && a
                    ? (function (t, e, n, i) {
                        var r = n[0],
                          o = n[1],
                          a = Math.ceil(Math.SQRT2 * i) + 8,
                          s = 0,
                          l = 0,
                          u = e.width,
                          h = e.height;
                        switch (t) {
                          case 'inside':
                            (s = e.x + u / 2 - r / 2),
                              (l = e.y + h / 2 - o / 2);
                            break;
                          case 'top':
                            (s = e.x + u / 2 - r / 2), (l = e.y - o - a);
                            break;
                          case 'bottom':
                            (s = e.x + u / 2 - r / 2), (l = e.y + h + a);
                            break;
                          case 'left':
                            (s = e.x - r - a), (l = e.y + h / 2 - o / 2);
                            break;
                          case 'right':
                            (s = e.x + u + a), (l = e.y + h / 2 - o / 2);
                        }
                        return [s, l];
                      })(e, d, h, t.get('borderWidth'))
                    : (function (t, e, n, i, r, o, a) {
                        var n = n.getSize(),
                          s = n[0],
                          n = n[1];
                        null != o &&
                          (i < t + s + o + 2 ? (t -= s + o) : (t += o));
                        null != a && (r < e + n + a ? (e -= n + a) : (e += a));
                        return [t, e];
                      })(n, i, r, l, u, c ? null : 20, p ? null : 20))[0]),
                s[1])),
          c && (n -= mM(c) ? h[0] / 2 : 'right' === c ? h[0] : 0),
          p && (i -= mM(p) ? h[1] / 2 : 'bottom' === p ? h[1] : 0),
          qS(t) &&
            ((o = n),
            (a = i),
            (e = l),
            (d = u),
            (c = (c = r).getSize()),
            (p = c[0]),
            (c = c[1]),
            (o = Math.min(o + p, e) - p),
            (a = Math.min(a + c, d) - c),
            (o = Math.max(o, 0)),
            (a = Math.max(a, 0)),
            (n = (s = [o, a])[0]),
            (i = s[1])),
          r.moveTo(n, i);
      }),
      (fM.prototype._updateContentNotChangedOnAxis = function (n, o) {
        var t = this._lastDataByCoordSys,
          a = this._cbParamsList,
          s = !!t && t.length === n.length;
        return (
          s &&
            z(t, function (t, e) {
              var t = t.dataByAxis || [],
                r = (n[e] || {}).dataByAxis || [];
              (s = s && t.length === r.length) &&
                z(t, function (t, e) {
                  var e = r[e] || {},
                    n = t.seriesDataIndices || [],
                    i = e.seriesDataIndices || [];
                  (s =
                    s &&
                    t.value === e.value &&
                    t.axisType === e.axisType &&
                    t.axisId === e.axisId &&
                    n.length === i.length) &&
                    z(n, function (t, e) {
                      e = i[e];
                      s =
                        s &&
                        t.seriesIndex === e.seriesIndex &&
                        t.dataIndex === e.dataIndex;
                    }),
                    a &&
                      z(t.seriesDataIndices, function (t) {
                        var t = t.seriesIndex,
                          e = o[t],
                          t = a[t];
                        e && t && t.data !== e.data && (s = !1);
                      });
                });
            }),
          (this._lastDataByCoordSys = n),
          (this._cbParamsList = o),
          !!s
        );
      }),
      (fM.prototype._hide = function (t) {
        (this._lastDataByCoordSys = null), t({type: 'hideTip', from: this.uid});
      }),
      (fM.prototype.dispose = function (t, e) {
        !b.node &&
          e.getDom() &&
          (fy(this, '_updatePosition'),
          this._tooltipContent.dispose(),
          LS('itemTooltip', e));
      }),
      (fM.type = 'tooltip'),
      fM);
  function fM() {
    var t = (null !== cM && cM.apply(this, arguments)) || this;
    return (t.type = fM.type), t;
  }
  function gM(t, e, n) {
    for (
      var i = e.ecModel,
        r = n ? ((r = new Fc(n, i, i)), new Fc(e.option, r, i)) : e,
        o = t.length - 1;
      0 <= o;
      o--
    ) {
      var a = t[o];
      (a =
        a &&
        (V((a = a instanceof Fc ? a.get('tooltip', !0) : a))
          ? {formatter: a}
          : a)) && (r = new Fc(a, r, i));
    }
    return r;
  }
  function yM(t, e) {
    return t.dispatchAction || S(e.dispatchAction, e);
  }
  function mM(t) {
    return 'center' === t || 'middle' === t;
  }
  Z_(function (t) {
    Z_(US),
      t.registerComponentModel(YS),
      t.registerComponentView(dM),
      t.registerAction(
        {type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip'},
        Ft
      ),
      t.registerAction(
        {type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip'},
        Ft
      );
  });
  var vM = ['x', 'y', 'radius', 'angle', 'single'],
    _M = ['cartesian2d', 'polar', 'singleAxis'];
  function xM(t) {
    return t + 'Axis';
  }
  function wM(t, e) {
    var i,
      r = B(),
      n = [],
      o = B();
    for (
      t.eachComponent({mainType: 'dataZoom', query: e}, function (t) {
        o.get(t.uid) || s(t);
      });
      (i = !1), t.eachComponent('dataZoom', a), i;

    );
    function a(t) {
      var n;
      !o.get(t.uid) &&
        ((n = !1),
        t.eachTargetAxis(function (t, e) {
          t = r.get(t);
          t && t[e] && (n = !0);
        }),
        n) &&
        (s(t), (i = !0));
    }
    function s(t) {
      o.set(t.uid, !0),
        n.push(t),
        t.eachTargetAxis(function (t, e) {
          (r.get(t) || r.set(t, []))[e] = !0;
        });
    }
    return n;
  }
  function bM(t) {
    var r = t.ecModel,
      o = {infoList: [], infoMap: B()};
    return (
      t.eachTargetAxis(function (t, e) {
        var n,
          i,
          t = r.getComponent(xM(t), e);
        t &&
          (e = t.getCoordSysModel()) &&
          ((n = e.uid),
          (i = o.infoMap.get(n)) ||
            (o.infoList.push((i = {model: e, axisModels: []})),
            o.infoMap.set(n, i)),
          i.axisModels.push(t));
      }),
      o
    );
  }
  MM.prototype.add = function (t) {
    this.indexMap[t] || (this.indexList.push(t), (this.indexMap[t] = !0));
  };
  var SM = MM;
  function MM() {
    (this.indexList = []), (this.indexMap = []);
  }
  u(CM, (TM = g)),
    (CM.prototype.init = function (t, e, n) {
      var i = IM(t);
      (this.settledOption = i),
        this.mergeDefaultAndTheme(t, n),
        this._doInit(i);
    }),
    (CM.prototype.mergeOption = function (t) {
      var e = IM(t);
      d(this.option, t, !0), d(this.settledOption, e, !0), this._doInit(e);
    }),
    (CM.prototype._doInit = function (t) {
      var n = this.option,
        i =
          (this._setDefaultThrottle(t),
          this._updateRangeUse(t),
          this.settledOption);
      z(
        [
          ['start', 'startValue'],
          ['end', 'endValue'],
        ],
        function (t, e) {
          'value' === this._rangePropMode[e] && (n[t[0]] = i[t[0]] = null);
        },
        this
      ),
        this._resetTarget();
    }),
    (CM.prototype._resetTarget = function () {
      var t = this.get('orient', !0),
        e = (this._targetAxisInfoMap = B());
      this._fillSpecifiedTargetAxis(e)
        ? (this._orient = t || this._makeAutoOrientByTargetAxis())
        : ((this._orient = t || 'horizontal'),
          this._fillAutoTargetAxisByOrient(e, this._orient)),
        (this._noTarget = !0),
        e.each(function (t) {
          t.indexList.length && (this._noTarget = !1);
        }, this);
    }),
    (CM.prototype._fillSpecifiedTargetAxis = function (i) {
      var r = !1;
      return (
        z(
          vM,
          function (t) {
            var e,
              n = this.getReferringComponents(xM(t), Vo);
            n.specified &&
              ((r = !0),
              (e = new SM()),
              z(n.models, function (t) {
                e.add(t.componentIndex);
              }),
              i.set(t, e));
          },
          this
        ),
        r
      );
    }),
    (CM.prototype._fillAutoTargetAxisByOrient = function (o, e) {
      var t,
        i = this.ecModel,
        a = !0;
      function n(t, e) {
        var n,
          i,
          r = t[0];
        r &&
          ((n = new SM()).add(r.componentIndex),
          o.set(e, n),
          (a = !1),
          ('x' !== e && 'y' !== e) ||
            ((i = r.getReferringComponents('grid', Fo).models[0]) &&
              z(t, function (t) {
                r.componentIndex !== t.componentIndex &&
                  i === t.getReferringComponents('grid', Fo).models[0] &&
                  n.add(t.componentIndex);
              })));
      }
      a &&
        n(
          i.findComponents({
            mainType: (t = 'vertical' === e ? 'y' : 'x') + 'Axis',
          }),
          t
        ),
        a &&
          n(
            i.findComponents({
              mainType: 'singleAxis',
              filter: function (t) {
                return t.get('orient', !0) === e;
              },
            }),
            'single'
          ),
        a &&
          z(
            vM,
            function (t) {
              var e, n;
              a &&
                (e = i.findComponents({
                  mainType: xM(t),
                  filter: function (t) {
                    return 'category' === t.get('type', !0);
                  },
                }))[0] &&
                ((n = new SM()).add(e[0].componentIndex),
                o.set(t, n),
                (a = !1));
            },
            this
          );
    }),
    (CM.prototype._makeAutoOrientByTargetAxis = function () {
      var e;
      return (
        this.eachTargetAxis(function (t) {
          e = e || t;
        }, this),
        'y' === e ? 'vertical' : 'horizontal'
      );
    }),
    (CM.prototype._setDefaultThrottle = function (t) {
      t.hasOwnProperty('throttle') && (this._autoThrottle = !1),
        this._autoThrottle &&
          ((t = this.ecModel.option),
          (this.option.throttle =
            t.animation && 0 < t.animationDurationUpdate ? 100 : 20));
    }),
    (CM.prototype._updateRangeUse = function (i) {
      var r = this._rangePropMode,
        o = this.get('rangeMode');
      z(
        [
          ['start', 'startValue'],
          ['end', 'endValue'],
        ],
        function (t, e) {
          var n = null != i[t[0]],
            t = null != i[t[1]];
          n && !t
            ? (r[e] = 'percent')
            : !n && t
            ? (r[e] = 'value')
            : o
            ? (r[e] = o[e])
            : n && (r[e] = 'percent');
        }
      );
    }),
    (CM.prototype.noTarget = function () {
      return this._noTarget;
    }),
    (CM.prototype.getFirstTargetAxisModel = function () {
      var n;
      return (
        this.eachTargetAxis(function (t, e) {
          null == n && (n = this.ecModel.getComponent(xM(t), e));
        }, this),
        n
      );
    }),
    (CM.prototype.eachTargetAxis = function (n, i) {
      this._targetAxisInfoMap.each(function (t, e) {
        z(t.indexList, function (t) {
          n.call(i, e, t);
        });
      });
    }),
    (CM.prototype.getAxisProxy = function (t, e) {
      t = this.getAxisModel(t, e);
      if (t) return t.__dzAxisProxy;
    }),
    (CM.prototype.getAxisModel = function (t, e) {
      var n = this._targetAxisInfoMap.get(t);
      if (n && n.indexMap[e]) return this.ecModel.getComponent(xM(t), e);
    }),
    (CM.prototype.setRawRange = function (e) {
      var n = this.option,
        i = this.settledOption;
      z(
        [
          ['start', 'startValue'],
          ['end', 'endValue'],
        ],
        function (t) {
          (null == e[t[0]] && null == e[t[1]]) ||
            ((n[t[0]] = i[t[0]] = e[t[0]]), (n[t[1]] = i[t[1]] = e[t[1]]));
        },
        this
      ),
        this._updateRangeUse(e);
    }),
    (CM.prototype.setCalculatedRange = function (e) {
      var n = this.option;
      z(['start', 'startValue', 'end', 'endValue'], function (t) {
        n[t] = e[t];
      });
    }),
    (CM.prototype.getPercentRange = function () {
      var t = this.findRepresentativeAxisProxy();
      if (t) return t.getDataPercentWindow();
    }),
    (CM.prototype.getValueRange = function (t, e) {
      return null != t || null != e
        ? this.getAxisProxy(t, e).getDataValueWindow()
        : (t = this.findRepresentativeAxisProxy())
        ? t.getDataValueWindow()
        : void 0;
    }),
    (CM.prototype.findRepresentativeAxisProxy = function (t) {
      if (t) return t.__dzAxisProxy;
      for (var e, n = this._targetAxisInfoMap.keys(), i = 0; i < n.length; i++)
        for (
          var r = n[i], o = this._targetAxisInfoMap.get(r), a = 0;
          a < o.indexList.length;
          a++
        ) {
          var s = this.getAxisProxy(r, o.indexList[a]);
          if (s.hostedBy(this)) return s;
          e = e || s;
        }
      return e;
    }),
    (CM.prototype.getRangePropMode = function () {
      return this._rangePropMode.slice();
    }),
    (CM.prototype.getOrient = function () {
      return this._orient;
    }),
    (CM.type = 'dataZoom'),
    (CM.dependencies = [
      'xAxis',
      'yAxis',
      'radiusAxis',
      'angleAxis',
      'singleAxis',
      'series',
      'toolbox',
    ]),
    (CM.defaultOption = {z: 4, filterMode: 'filter', start: 0, end: 100});
  var TM,
    fu = CM;
  function CM() {
    var t = (null !== TM && TM.apply(this, arguments)) || this;
    return (
      (t.type = CM.type),
      (t._autoThrottle = !0),
      (t._noTarget = !0),
      (t._rangePropMode = ['percent', 'percent']),
      t
    );
  }
  function IM(e) {
    var n = {};
    return (
      z(['start', 'end', 'startValue', 'endValue', 'throttle'], function (t) {
        e.hasOwnProperty(t) && (n[t] = e[t]);
      }),
      n
    );
  }
  u(AM, (DM = fu)),
    (AM.type = 'dataZoom.inside'),
    (AM.defaultOption = Gc(fu.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0,
    }));
  var DM,
    kM = AM;
  function AM() {
    var t = (null !== DM && DM.apply(this, arguments)) || this;
    return (t.type = AM.type), t;
  }
  u(LM, (PM = $g)),
    (LM.prototype.render = function (t, e, n, i) {
      (this.dataZoomModel = t), (this.ecModel = e), (this.api = n);
    }),
    (LM.type = 'dataZoom');
  var PM,
    ph = LM;
  function LM() {
    var t = (null !== PM && PM.apply(this, arguments)) || this;
    return (t.type = LM.type), t;
  }
  function OM(t, e, n, i, r, o) {
    t = t || 0;
    var a = n[1] - n[0],
      a =
        (null != r && (r = BM(r, [0, a])),
        null != o && (o = Math.max(o, null != r ? r : 0)),
        'all' === i &&
          ((s = BM((s = Math.abs(e[1] - e[0])), [0, a])),
          (r = o = BM(s, [r, o])),
          (i = 0)),
        (e[0] = BM(e[0], n)),
        (e[1] = BM(e[1], n)),
        RM(e, i)),
      s = ((e[i] += t), r || 0),
      t = n.slice();
    a.sign < 0 ? (t[0] += s) : (t[1] -= s),
      (e[i] = BM(e[i], t)),
      (n = RM(e, i)),
      null != r &&
        (n.sign !== a.sign || n.span < r) &&
        (e[1 - i] = e[i] + a.sign * r),
      (n = RM(e, i)),
      null != o && n.span > o && (e[1 - i] = e[i] + n.sign * o);
  }
  function RM(t, e) {
    t = t[e] - t[1 - e];
    return {span: Math.abs(t), sign: 0 < t || (!(t < 0) && e) ? -1 : 1};
  }
  function BM(t, e) {
    return Math.min(
      null != e[1] ? e[1] : 1 / 0,
      Math.max(null != e[0] ? e[0] : -1 / 0, t)
    );
  }
  var zM = '\0_ec_interaction_mutex';
  function EM(t, e) {
    return ((t = t)[zM] || (t[zM] = {}))[e];
  }
  Vm(
    {type: 'takeGlobalCursor', event: 'globalCursorTaken', update: 'update'},
    Ft
  );
  u(VM, (NM = le)),
    (VM.prototype.isDragging = function () {
      return this._dragging;
    }),
    (VM.prototype.isPinching = function () {
      return this._pinching;
    }),
    (VM.prototype.setPointerChecker = function (t) {
      this.pointerChecker = t;
    }),
    (VM.prototype.dispose = function () {
      this.disable();
    }),
    (VM.prototype._mousedownHandler = function (t) {
      if (!De(t)) {
        for (var e = t.target; e; ) {
          if (e.draggable) return;
          e = e.__hostTarget || e.parent;
        }
        var n = t.offsetX,
          i = t.offsetY;
        this.pointerChecker &&
          this.pointerChecker(t, n, i) &&
          ((this._x = n), (this._y = i), (this._dragging = !0));
      }
    }),
    (VM.prototype._mousemoveHandler = function (t) {
      var e, n, i, r, o, a;
      this._dragging &&
        GM('moveOnMouseMove', t, this._opt) &&
        'pinch' !== t.gestureEvent &&
        !EM(this._zr, 'globalPan') &&
        ((e = t.offsetX),
        (n = t.offsetY),
        (o = e - (i = this._x)),
        (a = n - (r = this._y)),
        (this._x = e),
        (this._y = n),
        this._opt.preventDefaultMouseMove && Ie(t.event),
        WM(this, 'pan', 'moveOnMouseMove', t, {
          dx: o,
          dy: a,
          oldX: i,
          oldY: r,
          newX: e,
          newY: n,
          isAvailableBehavior: null,
        }));
    }),
    (VM.prototype._mouseupHandler = function (t) {
      De(t) || (this._dragging = !1);
    }),
    (VM.prototype._mousewheelHandler = function (t) {
      var e = GM('zoomOnMouseWheel', t, this._opt),
        n = GM('moveOnMouseWheel', t, this._opt),
        i = t.wheelDelta,
        r = Math.abs(i),
        o = t.offsetX,
        a = t.offsetY;
      0 !== i &&
        (e || n) &&
        (e &&
          ((e = 3 < r ? 1.4 : 1 < r ? 1.2 : 1.1),
          HM(this, 'zoom', 'zoomOnMouseWheel', t, {
            scale: 0 < i ? e : 1 / e,
            originX: o,
            originY: a,
            isAvailableBehavior: null,
          })),
        n) &&
        HM(this, 'scrollMove', 'moveOnMouseWheel', t, {
          scrollDelta:
            (0 < i ? 1 : -1) *
            (3 < (r = Math.abs(i)) ? 0.4 : 1 < r ? 0.15 : 0.05),
          originX: o,
          originY: a,
          isAvailableBehavior: null,
        });
    }),
    (VM.prototype._pinchHandler = function (t) {
      EM(this._zr, 'globalPan') ||
        HM(this, 'zoom', null, t, {
          scale: 1 < t.pinchScale ? 1.1 : 1 / 1.1,
          originX: t.pinchX,
          originY: t.pinchY,
          isAvailableBehavior: null,
        });
    });
  var NM,
    FM = VM;
  function VM(n) {
    var t = NM.call(this) || this,
      i = ((t._zr = n), S(t._mousedownHandler, t)),
      r = S(t._mousemoveHandler, t),
      o = S(t._mouseupHandler, t),
      a = S(t._mousewheelHandler, t),
      s = S(t._pinchHandler, t);
    return (
      (t.enable = function (t, e) {
        this.disable(),
          (this._opt = E(y(e) || {}, {
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0,
          })),
          (!0 !== (t = null == t ? !0 : t) && 'move' !== t && 'pan' !== t) ||
            (n.on('mousedown', i), n.on('mousemove', r), n.on('mouseup', o)),
          (!0 !== t && 'scale' !== t && 'zoom' !== t) ||
            (n.on('mousewheel', a), n.on('pinch', s));
      }),
      (t.disable = function () {
        n.off('mousedown', i),
          n.off('mousemove', r),
          n.off('mouseup', o),
          n.off('mousewheel', a),
          n.off('pinch', s);
      }),
      t
    );
  }
  function HM(t, e, n, i, r) {
    t.pointerChecker &&
      t.pointerChecker(i, r.originX, r.originY) &&
      (Ie(i.event), WM(t, e, n, i, r));
  }
  function WM(t, e, n, i, r) {
    (r.isAvailableBehavior = S(GM, null, n, i)), t.trigger(e, r);
  }
  function GM(t, e, n) {
    n = n[t];
    return !t || (n && (!V(n) || e.event[n + 'Key']));
  }
  var UM = Bo();
  function ZM(t, e) {
    e && (t.removeKey(e.model.uid), (t = e.controller)) && t.dispose();
  }
  function YM(t, e) {
    t.isDisposed() ||
      t.dispatchAction({
        type: 'dataZoom',
        animation: {easing: 'cubicOut', duration: 100},
        batch: e,
      });
  }
  function XM(t, e, n, i) {
    return t.coordinateSystem.containPoint([n, i]);
  }
  function qM(t) {
    t.registerProcessor(t.PRIORITY.PROCESSOR.FILTER, function (t, a) {
      var e = UM(a),
        l = e.coordSysRecordMap || (e.coordSysRecordMap = B());
      l.each(function (t) {
        t.dataZoomInfoMap = null;
      }),
        t.eachComponent(
          {mainType: 'dataZoom', subType: 'inside'},
          function (r) {
            z(bM(r).infoList, function (t) {
              var o,
                e,
                n = t.model.uid,
                i =
                  l.get(n) ||
                  l.set(
                    n,
                    ((n = a),
                    (i = t.model),
                    (o = {
                      model: i,
                      containsPoint: ct(XM, i),
                      dispatchAction: ct(YM, n),
                      dataZoomInfoMap: null,
                      controller: null,
                    }),
                    (e = o.controller = new FM(n.getZr())),
                    z(['pan', 'zoom', 'scrollMove'], function (r) {
                      e.on(r, function (n) {
                        var i = [];
                        o.dataZoomInfoMap.each(function (t) {
                          var e;
                          n.isAvailableBehavior(t.model.option) &&
                            ((e =
                              (e = (t.getRange || {})[r]) &&
                              e(
                                t.dzReferCoordSysInfo,
                                o.model.mainType,
                                o.controller,
                                n
                              )),
                            !t.model.get('disabled', !0)) &&
                            e &&
                            i.push({
                              dataZoomId: t.model.id,
                              start: e[0],
                              end: e[1],
                            });
                        }),
                          i.length && o.dispatchAction(i);
                      });
                    }),
                    o)
                  );
              (i.dataZoomInfoMap || (i.dataZoomInfoMap = B())).set(r.uid, {
                dzReferCoordSysInfo: t,
                model: r,
                getRange: null,
              });
            });
          }
        ),
        l.each(function (t) {
          var e,
            n,
            i,
            r,
            o,
            a = t.controller,
            s = t.dataZoomInfoMap;
          (e = s && null != (n = s.keys()[0]) ? s.get(n) : e)
            ? ((r = {
                type_true: 2,
                type_move: 1,
                type_false: 0,
                type_undefined: -1,
              }),
              (o = !0),
              s.each(function (t) {
                var t = t.model,
                  e =
                    !t.get('disabled', !0) &&
                    (!t.get('zoomLock', !0) || 'move');
                r['type_' + i] < r['type_' + e] && (i = e),
                  (o = o && t.get('preventDefaultMouseMove', !0));
              }),
              (n = {
                controlType: i,
                opt: {
                  zoomOnMouseWheel: !0,
                  moveOnMouseMove: !0,
                  moveOnMouseWheel: !0,
                  preventDefaultMouseMove: !!o,
                },
              }),
              a.enable(n.controlType, n.opt),
              a.setPointerChecker(t.containsPoint),
              dy(t, 'dispatchAction', e.model.get('throttle', !0), 'fixRate'))
            : ZM(l, t);
        });
    });
  }
  u($M, (jM = ph)),
    ($M.prototype.render = function (t, e, n) {
      var i, r;
      jM.prototype.render.apply(this, arguments),
        t.noTarget()
          ? this._clear()
          : ((this.range = t.getPercentRange()),
            (n = n),
            (i = t),
            (r = {
              pan: S(QM.pan, this),
              zoom: S(QM.zoom, this),
              scrollMove: S(QM.scrollMove, this),
            }),
            UM(n).coordSysRecordMap.each(function (t) {
              t = t.dataZoomInfoMap.get(i.uid);
              t && (t.getRange = r);
            }));
    }),
    ($M.prototype.dispose = function () {
      this._clear(), jM.prototype.dispose.apply(this, arguments);
    }),
    ($M.prototype._clear = function () {
      for (
        var t = this.api,
          e = this.dataZoomModel,
          n = UM(t).coordSysRecordMap,
          i = n.keys(),
          r = 0;
        r < i.length;
        r++
      ) {
        var o,
          a = i[r],
          a = n.get(a),
          s = a.dataZoomInfoMap;
        s &&
          ((o = e.uid), s.get(o)) &&
          (s.removeKey(o), s.keys().length || ZM(n, a));
      }
      this.range = null;
    }),
    ($M.type = 'dataZoom.inside');
  var jM,
    KM = $M;
  function $M() {
    var t = (null !== jM && jM.apply(this, arguments)) || this;
    return (t.type = 'dataZoom.inside'), t;
  }
  var QM = {
    zoom: function (t, e, n, i) {
      var r = this.range,
        o = r.slice(),
        a = t.axisModels[0];
      if (a)
        return (
          (a =
            ((0 < (e = tT[e](null, [i.originX, i.originY], a, n, t)).signal
              ? e.pixelStart + e.pixelLength - e.pixel
              : e.pixel - e.pixelStart) /
              e.pixelLength) *
              (o[1] - o[0]) +
            o[0]),
          (n = Math.max(1 / i.scale, 0)),
          (o[0] = (o[0] - a) * n + a),
          (o[1] = (o[1] - a) * n + a),
          OM(
            0,
            o,
            [0, 100],
            0,
            (t = this.dataZoomModel
              .findRepresentativeAxisProxy()
              .getMinMaxSpan()).minSpan,
            t.maxSpan
          ),
          (this.range = o),
          r[0] !== o[0] || r[1] !== o[1] ? o : void 0
        );
    },
    pan: JM(function (t, e, n, i, r, o) {
      i = tT[i]([o.oldX, o.oldY], [o.newX, o.newY], e, r, n);
      return (i.signal * (t[1] - t[0]) * i.pixel) / i.pixelLength;
    }),
    scrollMove: JM(function (t, e, n, i, r, o) {
      return (
        tT[i]([0, 0], [o.scrollDelta, o.scrollDelta], e, r, n).signal *
        (t[1] - t[0]) *
        o.scrollDelta
      );
    }),
  };
  function JM(s) {
    return function (t, e, n, i) {
      var r = this.range,
        o = r.slice(),
        a = t.axisModels[0];
      if (a)
        return (
          OM(s(o, a, t, e, n, i), o, [0, 100], 'all'),
          (this.range = o),
          r[0] !== o[0] || r[1] !== o[1] ? o : void 0
        );
    };
  }
  var tT = {
      grid: function (t, e, n, i, r) {
        var n = n.axis,
          o = {},
          r = r.model.coordinateSystem.getRect();
        return (
          (t = t || [0, 0]),
          'x' === n.dim
            ? ((o.pixel = e[0] - t[0]),
              (o.pixelLength = r.width),
              (o.pixelStart = r.x),
              (o.signal = n.inverse ? 1 : -1))
            : ((o.pixel = e[1] - t[1]),
              (o.pixelLength = r.height),
              (o.pixelStart = r.y),
              (o.signal = n.inverse ? -1 : 1)),
          o
        );
      },
      polar: function (t, e, n, i, r) {
        var o = n.axis,
          a = {},
          r = r.model.coordinateSystem,
          s = r.getRadiusAxis().getExtent(),
          l = r.getAngleAxis().getExtent();
        return (
          (t = t ? r.pointToCoord(t) : [0, 0]),
          (e = r.pointToCoord(e)),
          'radiusAxis' === n.mainType
            ? ((a.pixel = e[0] - t[0]),
              (a.pixelLength = s[1] - s[0]),
              (a.pixelStart = s[0]),
              (a.signal = o.inverse ? 1 : -1))
            : ((a.pixel = e[1] - t[1]),
              (a.pixelLength = l[1] - l[0]),
              (a.pixelStart = l[0]),
              (a.signal = o.inverse ? -1 : 1)),
          a
        );
      },
      singleAxis: function (t, e, n, i, r) {
        var n = n.axis,
          r = r.model.coordinateSystem.getRect(),
          o = {};
        return (
          (t = t || [0, 0]),
          'horizontal' === n.orient
            ? ((o.pixel = e[0] - t[0]),
              (o.pixelLength = r.width),
              (o.pixelStart = r.x),
              (o.signal = n.inverse ? 1 : -1))
            : ((o.pixel = e[1] - t[1]),
              (o.pixelLength = r.height),
              (o.pixelStart = r.y),
              (o.signal = n.inverse ? -1 : 1)),
          o
        );
      },
    },
    eT = z,
    nT = ro,
    iT =
      ((rT.prototype.hostedBy = function (t) {
        return this._dataZoomModel === t;
      }),
      (rT.prototype.getDataValueWindow = function () {
        return this._valueWindow.slice();
      }),
      (rT.prototype.getDataPercentWindow = function () {
        return this._percentWindow.slice();
      }),
      (rT.prototype.getTargetSeriesModels = function () {
        var n = [];
        return (
          this.ecModel.eachSeries(function (t) {
            var e;
            (e = (e = t).get('coordinateSystem')),
              0 <= I(_M, e) &&
                ((e = xM(this._dimName)),
                (e = t.getReferringComponents(e, Fo).models[0])) &&
                this._axisIndex === e.componentIndex &&
                n.push(t);
          }, this),
          n
        );
      }),
      (rT.prototype.getAxisModel = function () {
        return this.ecModel.getComponent(
          this._dimName + 'Axis',
          this._axisIndex
        );
      }),
      (rT.prototype.getMinMaxSpan = function () {
        return y(this._minMaxSpan);
      }),
      (rT.prototype.calculateDataWindow = function (i) {
        var r,
          o = this._dataExtent,
          s = this.getAxisModel().axis.scale,
          a = this._dataZoomModel.getRangePropMode(),
          l = [0, 100],
          u = [],
          h = [],
          c =
            (eT(['start', 'end'], function (t, e) {
              var n = i[t],
                t = i[t + 'Value'];
              'percent' === a[e]
                ? (t = s.parse(eo((n = null == n ? l[e] : n), l, o)))
                : ((r = !0),
                  (n = eo((t = null == t ? o[e] : s.parse(t)), o, l))),
                (h[e] = null == t || isNaN(t) ? o[e] : t),
                (u[e] = null == n || isNaN(n) ? l[e] : n);
            }),
            nT(h),
            nT(u),
            this._minMaxSpan);
        function t(t, e, n, i, r) {
          var o = r ? 'Span' : 'ValueSpan';
          OM(0, t, n, 'all', c['min' + o], c['max' + o]);
          for (var a = 0; a < 2; a++)
            (e[a] = eo(t[a], n, i, !0)), r && (e[a] = s.parse(e[a]));
        }
        return (
          r ? t(h, u, o, l, !1) : t(u, h, l, o, !0),
          {valueWindow: h, percentWindow: u}
        );
      }),
      (rT.prototype.reset = function (t) {
        var e, i, r, n;
        t === this._dataZoomModel &&
          ((n = this.getTargetSeriesModels()),
          (this._dataExtent =
            ((i = (e = this)._dimName),
            (r = [1 / 0, -1 / 0]),
            eT((n = n), function (t) {
              var e, n;
              (e = r),
                (n = t.getData()),
                (t = i),
                n &&
                  z(V_(n, t), function (t) {
                    t = n.getApproximateExtent(t);
                    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
                  });
            }),
            [
              (e = A_((n = e.getAxisModel()).axis.scale, n, r).calculate()).min,
              e.max,
            ])),
          this._updateMinMaxSpan(),
          (n = this.calculateDataWindow(t.settledOption)),
          (this._valueWindow = n.valueWindow),
          (this._percentWindow = n.percentWindow),
          this._setAxisModel());
      }),
      (rT.prototype.filterData = function (t, e) {
        var r, n, o, c;
        t === this._dataZoomModel &&
          ((r = this._dimName),
          (n = this.getTargetSeriesModels()),
          (o = t.get('filterMode')),
          (c = this._valueWindow),
          'none' !== o) &&
          eT(n, function (n) {
            var l,
              u,
              i = n.getData(),
              h = i.mapDimensionsAll(r);
            h.length &&
              ('weakFilter' === o
                ? ((l = i.getStore()),
                  (u = N(
                    h,
                    function (t) {
                      return i.getDimensionIndex(t);
                    },
                    i
                  )),
                  i.filterSelf(function (t) {
                    for (var e, n, i, r = 0; r < h.length; r++) {
                      var o = l.get(u[r], t),
                        a = !isNaN(o),
                        s = o < c[0],
                        o = o > c[1];
                      if (a && !s && !o) return !0;
                      a && (i = !0), s && (e = !0), o && (n = !0);
                    }
                    return i && e && n;
                  }))
                : eT(h, function (t) {
                    var e;
                    'empty' === o
                      ? n.setData(
                          (i = i.map(t, function (t) {
                            return (e = t) >= c[0] && e <= c[1] ? t : NaN;
                            var e;
                          }))
                        )
                      : (((e = {})[t] = c), i.selectRange(e));
                  }),
              eT(h, function (t) {
                i.setApproximateExtent(c, t);
              }));
          });
      }),
      (rT.prototype._updateMinMaxSpan = function () {
        var i = (this._minMaxSpan = {}),
          r = this._dataZoomModel,
          o = this._dataExtent;
        eT(
          ['min', 'max'],
          function (t) {
            var e = r.get(t + 'Span'),
              n = r.get(t + 'ValueSpan');
            null !=
            (n = null != n ? this.getAxisModel().axis.scale.parse(n) : n)
              ? (e = eo(o[0] + n, o, [0, 100], !0))
              : null != e && (n = eo(e, [0, 100], o, !0) - o[0]),
              (i[t + 'Span'] = e),
              (i[t + 'ValueSpan'] = n);
          },
          this
        );
      }),
      (rT.prototype._setAxisModel = function () {
        var t,
          e = this.getAxisModel(),
          n = this._percentWindow,
          i = this._valueWindow;
        n &&
          ((t = so(i, [0, 500])),
          (t = Math.min(t, 20)),
          (e = e.axis.scale.rawExtentInfo),
          0 !== n[0] && e.setDeterminedMinMax('min', +i[0].toFixed(t)),
          100 !== n[1] && e.setDeterminedMinMax('max', +i[1].toFixed(t)),
          e.freeze());
      }),
      rT);
  function rT(t, e, n, i) {
    (this._dimName = t),
      (this._axisIndex = e),
      (this.ecModel = i),
      (this._dataZoomModel = n);
  }
  var oT = {
    getTargetSeries: function (o) {
      function t(r) {
        o.eachComponent('dataZoom', function (i) {
          i.eachTargetAxis(function (t, e) {
            var n = o.getComponent(xM(t), e);
            r(t, e, n, i);
          });
        });
      }
      t(function (t, e, n, i) {
        n.__dzAxisProxy = null;
      });
      var r = [],
        e =
          (t(function (t, e, n, i) {
            n.__dzAxisProxy ||
              ((n.__dzAxisProxy = new iT(t, e, i, o)), r.push(n.__dzAxisProxy));
          }),
          B());
      return (
        z(r, function (t) {
          z(t.getTargetSeriesModels(), function (t) {
            e.set(t.uid, t);
          });
        }),
        e
      );
    },
    overallReset: function (t, i) {
      t.eachComponent('dataZoom', function (n) {
        n.eachTargetAxis(function (t, e) {
          n.getAxisProxy(t, e).reset(n);
        }),
          n.eachTargetAxis(function (t, e) {
            n.getAxisProxy(t, e).filterData(n, i);
          });
      }),
        t.eachComponent('dataZoom', function (t) {
          var e,
            n = t.findRepresentativeAxisProxy();
          n &&
            ((e = n.getDataPercentWindow()),
            (n = n.getDataValueWindow()),
            t.setCalculatedRange({
              start: e[0],
              end: e[1],
              startValue: n[0],
              endValue: n[1],
            }));
        });
    },
  };
  var aT = !1;
  function sT(t) {
    aT ||
      ((aT = !0),
      t.registerProcessor(t.PRIORITY.PROCESSOR.FILTER, oT),
      t.registerAction('dataZoom', function (e, t) {
        z(wM(t, e), function (t) {
          t.setRawRange({
            start: e.start,
            end: e.end,
            startValue: e.startValue,
            endValue: e.endValue,
          });
        });
      }),
      t.registerSubTypeDefaulter('dataZoom', function () {
        return 'slider';
      }));
  }
  function lT(t) {
    sT(t), t.registerComponentModel(kM), t.registerComponentView(KM), qM(t);
  }
  u(cT, (uT = fu)),
    (cT.type = 'dataZoom.slider'),
    (cT.layoutMode = 'box'),
    (cT.defaultOption = Gc(fu.defaultOption, {
      show: !0,
      right: 'ph',
      top: 'ph',
      width: 'ph',
      height: 'ph',
      left: null,
      bottom: null,
      borderColor: '#d2dbee',
      borderRadius: 3,
      backgroundColor: 'rgba(47,69,84,0)',
      dataBackground: {
        lineStyle: {color: '#d2dbee', width: 0.5},
        areaStyle: {color: '#d2dbee', opacity: 0.2},
      },
      selectedDataBackground: {
        lineStyle: {color: '#8fb0f7', width: 0.5},
        areaStyle: {color: '#8fb0f7', opacity: 0.2},
      },
      fillerColor: 'rgba(135,175,274,0.2)',
      handleIcon:
        'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
      handleSize: '100%',
      handleStyle: {color: '#fff', borderColor: '#ACB8D1'},
      moveHandleSize: 7,
      moveHandleIcon:
        'path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z',
      moveHandleStyle: {color: '#D2DBEE', opacity: 0.7},
      showDetail: !0,
      showDataShadow: 'auto',
      realtime: !0,
      zoomLock: !1,
      textStyle: {color: '#6E7079'},
      brushSelect: !0,
      brushStyle: {color: 'rgba(135,175,274,0.15)'},
      emphasis: {
        handleStyle: {borderColor: '#8FB0F7'},
        moveHandleStyle: {color: '#8FB0F7'},
      },
    }));
  var uT,
    hT = cT;
  function cT() {
    var t = (null !== uT && uT.apply(this, arguments)) || this;
    return (t.type = cT.type), t;
  }
  var pT,
    dT = Bs,
    fT = 'horizontal',
    gT = 'vertical',
    yT = ['line', 'bar', 'candlestick', 'scatter'],
    mT = {easing: 'cubicOut', duration: 100, delay: 0},
    vT =
      (u(v, (pT = ph)),
      (v.prototype.init = function (t, e) {
        (this.api = e),
          (this._onBrush = S(this._onBrush, this)),
          (this._onBrushEnd = S(this._onBrushEnd, this));
      }),
      (v.prototype.render = function (t, e, n, i) {
        pT.prototype.render.apply(this, arguments),
          dy(this, '_dispatchZoomAction', t.get('throttle'), 'fixRate'),
          (this._orient = t.getOrient()),
          !1 === t.get('show')
            ? this.group.removeAll()
            : t.noTarget()
            ? (this._clear(), this.group.removeAll())
            : ((i && 'dataZoom' === i.type && i.from === this.uid) ||
                this._buildView(),
              this._updateView());
      }),
      (v.prototype.dispose = function () {
        this._clear(), pT.prototype.dispose.apply(this, arguments);
      }),
      (v.prototype._clear = function () {
        fy(this, '_dispatchZoomAction');
        var t = this.api.getZr();
        t.off('mousemove', this._onBrush), t.off('mouseup', this._onBrushEnd);
      }),
      (v.prototype._buildView = function () {
        var t = this.group,
          e =
            (t.removeAll(),
            (this._brushing = !1),
            (this._displayables.brushRect = null),
            this._resetLocation(),
            this._resetInterval(),
            (this._displayables.sliderGroup = new Gr()));
        this._renderBackground(),
          this._renderHandle(),
          this._renderDataShadow(),
          t.add(e),
          this._positionGroup();
      }),
      (v.prototype._resetLocation = function () {
        var t = this.dataZoomModel,
          e = this.api,
          n = t.get('brushSelect') ? 7 : 0,
          i = this._findCoordRect(),
          e = {width: e.getWidth(), height: e.getHeight()},
          r =
            this._orient === fT
              ? {
                  right: e.width - i.x - i.width,
                  top: e.height - 30 - 7 - n,
                  width: i.width,
                  height: 30,
                }
              : {right: 7, top: i.y, width: 30, height: i.height},
          o = Wp(t.option),
          n =
            (z(['right', 'top', 'width', 'height'], function (t) {
              'ph' === o[t] && (o[t] = r[t]);
            }),
            Fp(o, e));
        (this._location = {x: n.x, y: n.y}),
          (this._size = [n.width, n.height]),
          this._orient === gT && this._size.reverse();
      }),
      (v.prototype._positionGroup = function () {
        var t = this.group,
          e = this._location,
          n = this._orient,
          i = this.dataZoomModel.getFirstTargetAxisModel(),
          i = i && i.get('inverse'),
          r = this._displayables.sliderGroup,
          o = (this._dataShadowInfo || {}).otherAxisInverse,
          n =
            (r.attr(
              n !== fT || i
                ? n === fT && i
                  ? {scaleY: o ? 1 : -1, scaleX: -1}
                  : n !== gT || i
                  ? {scaleY: o ? -1 : 1, scaleX: -1, rotation: Math.PI / 2}
                  : {scaleY: o ? -1 : 1, scaleX: 1, rotation: Math.PI / 2}
                : {scaleY: o ? 1 : -1, scaleX: 1}
            ),
            t.getBoundingRect([r]));
        (t.x = e.x - n.x), (t.y = e.y - n.y), t.markRedraw();
      }),
      (v.prototype._getViewExtent = function () {
        return [0, this._size[0]];
      }),
      (v.prototype._renderBackground = function () {
        var t = this.dataZoomModel,
          e = this._size,
          n = this._displayables.sliderGroup,
          i = t.get('brushSelect'),
          t =
            (n.add(
              new dT({
                silent: !0,
                shape: {x: 0, y: 0, width: e[0], height: e[1]},
                style: {fill: t.get('backgroundColor')},
                z2: -40,
              })
            ),
            new dT({
              shape: {x: 0, y: 0, width: e[0], height: e[1]},
              style: {fill: 'transparent'},
              z2: 0,
              onclick: S(this._onClickPanel, this),
            })),
          e = this.api.getZr();
        i
          ? (t.on('mousedown', this._onBrushStart, this),
            (t.cursor = 'crosshair'),
            e.on('mousemove', this._onBrush),
            e.on('mouseup', this._onBrushEnd))
          : (e.off('mousemove', this._onBrush),
            e.off('mouseup', this._onBrushEnd)),
          n.add(t);
      }),
      (v.prototype._renderDataShadow = function () {
        var t = (this._dataShadowInfo = this._prepareDataShadowInfo());
        if (((this._displayables.dataShadowSegs = []), t)) {
          var e = this._size,
            n = this._shadowSize || [],
            i = t.series,
            r = i.getRawData(),
            o = i.getShadowDim && i.getShadowDim(),
            o = o && r.getDimensionInfo(o) ? i.getShadowDim() : t.otherDim;
          if (null != o)
            for (
              var a,
                s,
                l,
                u,
                h,
                c,
                p,
                d,
                f,
                g,
                y = this._shadowPolygonPts,
                m = this._shadowPolylinePts,
                v =
                  ((r === this._shadowData &&
                    o === this._shadowDim &&
                    e[0] === n[0] &&
                    e[1] === n[1]) ||
                    ((i = 0.3 * ((a = r.getDataExtent(o))[1] - a[0])),
                    (a = [a[0] - i, a[1] + i]),
                    (s = [0, e[1]]),
                    (t = [0, e[0]]),
                    (l = [
                      [e[0], 0],
                      [0, 0],
                    ]),
                    (u = []),
                    (h = t[1] / (r.count() - 1)),
                    (c = 0),
                    (p = Math.round(r.count() / e[0])),
                    r.each([o], function (t, e) {
                      var n;
                      0 < p && e % p
                        ? (c += h)
                        : ((t = (n = null == t || isNaN(t) || '' === t)
                            ? 0
                            : eo(t, a, s, !0)),
                          n && !d && e
                            ? (l.push([l[l.length - 1][0], 0]),
                              u.push([u[u.length - 1][0], 0]))
                            : !n && d && (l.push([c, 0]), u.push([c, 0])),
                          l.push([c, t]),
                          u.push([c, t]),
                          (c += h),
                          (d = n));
                    }),
                    (y = this._shadowPolygonPts = l),
                    (m = this._shadowPolylinePts = u)),
                  (this._shadowData = r),
                  (this._shadowDim = o),
                  (this._shadowSize = [e[0], e[1]]),
                  this.dataZoomModel),
                _ = 0;
              _ < 3;
              _++
            ) {
              (f = 1 === _),
                (x = g = void 0),
                (f = v.getModel(
                  f ? 'selectedDataBackground' : 'dataBackground'
                )),
                (g = new Gr()),
                (x = new Uu({
                  shape: {points: y},
                  segmentIgnoreThreshold: 1,
                  style: f.getModel('areaStyle').getAreaStyle(),
                  silent: !0,
                  z2: -20,
                })),
                (f = new qu({
                  shape: {points: m},
                  segmentIgnoreThreshold: 1,
                  style: f.getModel('lineStyle').getLineStyle(),
                  silent: !0,
                  z2: -19,
                })),
                g.add(x),
                g.add(f);
              var x = g;
              this._displayables.sliderGroup.add(x),
                this._displayables.dataShadowSegs.push(x);
            }
        }
      }),
      (v.prototype._prepareDataShadowInfo = function () {
        var s,
          l,
          t = this.dataZoomModel,
          u = t.get('showDataShadow');
        if (!1 !== u)
          return (
            (l = this.ecModel),
            t.eachTargetAxis(function (o, a) {
              z(
                t.getAxisProxy(o, a).getTargetSeriesModels(),
                function (t) {
                  var e, n, i, r;
                  s ||
                    (!0 !== u && I(yT, t.get('type')) < 0) ||
                    ((e = l.getComponent(xM(o), a).axis),
                    (r = t.coordinateSystem),
                    null !=
                      (n = {x: 'y', y: 'x', radius: 'angle', angle: 'radius'}[
                        o
                      ]) &&
                      r.getOtherAxis &&
                      (i = r.getOtherAxis(e).inverse),
                    (n = t.getData().mapDimension(n)),
                    (s = {
                      thisAxis: e,
                      series: t,
                      thisDim: o,
                      otherDim: n,
                      otherAxisInverse: i,
                    }));
                },
                this
              );
            }, this),
            s
          );
      }),
      (v.prototype._renderHandle = function () {
        var t,
          e,
          r = this.group,
          n = this._displayables,
          o = (n.handles = [null, null]),
          a = (n.handleLabels = [null, null]),
          s = this._displayables.sliderGroup,
          i = this._size,
          l = this.dataZoomModel,
          u = this.api,
          h = l.get('borderRadius') || 0,
          c = l.get('brushSelect'),
          p = (n.filler = new dT({
            silent: c,
            style: {fill: l.get('fillerColor')},
            textConfig: {position: 'inside'},
          })),
          h =
            (s.add(p),
            s.add(
              new dT({
                silent: !0,
                subPixelOptimize: !0,
                shape: {x: 0, y: 0, width: i[0], height: i[1], r: h},
                style: {
                  stroke: l.get('dataBackgroundColor') || l.get('borderColor'),
                  lineWidth: 1,
                  fill: 'rgba(0,0,0,0)',
                },
              })
            ),
            z(
              [0, 1],
              function (t) {
                var e = l.get('handleIcon'),
                  e = r0(
                    (e =
                      !e0[e] &&
                      e.indexOf('path://') < 0 &&
                      e.indexOf('image://') < 0
                        ? 'path://' + e
                        : e),
                    -1,
                    0,
                    2,
                    2,
                    null,
                    !0
                  ),
                  n =
                    (e.attr({
                      cursor: _T(this._orient),
                      draggable: !0,
                      drift: S(this._onDragMove, this, t),
                      ondragend: S(this._onDragEnd, this),
                      onmouseover: S(this._showDataInfo, this, !0),
                      onmouseout: S(this._showDataInfo, this, !1),
                      z2: 5,
                    }),
                    e.getBoundingRect()),
                  i = l.get('handleSize'),
                  i =
                    ((this._handleHeight = no(i, this._size[1])),
                    (this._handleWidth =
                      (n.width / n.height) * this._handleHeight),
                    e.setStyle(l.getModel('handleStyle').getItemStyle()),
                    (e.style.strokeNoScale = !0),
                    (e.rectHover = !0),
                    (e.ensureState('emphasis').style = l
                      .getModel(['emphasis', 'handleStyle'])
                      .getItemStyle()),
                    Nl(e),
                    l.get('handleColor')),
                  n =
                    (null != i && (e.style.fill = i),
                    s.add((o[t] = e)),
                    l.getModel('textStyle'));
                r.add(
                  (a[t] = new Vs({
                    silent: !0,
                    invisible: !0,
                    style: vc(n, {
                      x: 0,
                      y: 0,
                      text: '',
                      verticalAlign: 'middle',
                      align: 'center',
                      fill: n.getTextColor(),
                      font: n.getFont(),
                    }),
                    z2: 10,
                  }))
                );
              },
              this
            ),
            p);
        c &&
          ((p = no(l.get('moveHandleSize'), i[1])),
          (t = n.moveHandle =
            new Bs({
              style: l.getModel('moveHandleStyle').getItemStyle(),
              silent: !0,
              shape: {r: [0, 0, 2, 2], y: i[1] - 0.5, height: p},
            })),
          (c = 0.8 * p),
          ((c = n.moveHandleIcon =
            r0(
              l.get('moveHandleIcon'),
              -c / 2,
              -c / 2,
              c,
              c,
              '#fff',
              !0
            )).silent = !0),
          (c.y = i[1] + p / 2 - 0.5),
          (t.ensureState('emphasis').style = l
            .getModel(['emphasis', 'moveHandleStyle'])
            .getItemStyle()),
          (e = Math.min(i[1] / 2, Math.max(p, 10))),
          (h = n.moveZone =
            new Bs({invisible: !0, shape: {y: i[1] - e, height: p + e}}))
            .on('mouseover', function () {
              u.enterEmphasis(t);
            })
            .on('mouseout', function () {
              u.leaveEmphasis(t);
            }),
          s.add(t),
          s.add(c),
          s.add(h)),
          h.attr({
            draggable: !0,
            cursor: _T(this._orient),
            drift: S(this._onDragMove, this, 'all'),
            ondragstart: S(this._showDataInfo, this, !0),
            ondragend: S(this._onDragEnd, this),
            onmouseover: S(this._showDataInfo, this, !0),
            onmouseout: S(this._showDataInfo, this, !1),
          });
      }),
      (v.prototype._resetInterval = function () {
        var t = (this._range = this.dataZoomModel.getPercentRange()),
          e = this._getViewExtent();
        this._handleEnds = [
          eo(t[0], [0, 100], e, !0),
          eo(t[1], [0, 100], e, !0),
        ];
      }),
      (v.prototype._updateInterval = function (t, e) {
        var n = this.dataZoomModel,
          i = this._handleEnds,
          r = this._getViewExtent(),
          o = n.findRepresentativeAxisProxy().getMinMaxSpan(),
          a = [0, 100],
          e =
            (OM(
              e,
              i,
              r,
              n.get('zoomLock') ? 'all' : t,
              null != o.minSpan ? eo(o.minSpan, a, r, !0) : null,
              null != o.maxSpan ? eo(o.maxSpan, a, r, !0) : null
            ),
            this._range),
          n = (this._range = ro([eo(i[0], r, a, !0), eo(i[1], r, a, !0)]));
        return !e || e[0] !== n[0] || e[1] !== n[1];
      }),
      (v.prototype._updateView = function (t) {
        for (
          var i = this._displayables,
            r = this._handleEnds,
            e = ro(r.slice()),
            o = this._size,
            n =
              (z(
                [0, 1],
                function (t) {
                  var e = i.handles[t],
                    n = this._handleHeight;
                  e.attr({
                    scaleX: n / 2,
                    scaleY: n / 2,
                    x: r[t] + (t ? -1 : 1),
                    y: o[1] / 2 - n / 2,
                  });
                },
                this
              ),
              i.filler.setShape({
                x: e[0],
                y: 0,
                width: e[1] - e[0],
                height: o[1],
              }),
              {x: e[0], width: e[1] - e[0]}),
            a =
              (i.moveHandle &&
                (i.moveHandle.setShape(n),
                i.moveZone.setShape(n),
                i.moveZone.getBoundingRect(),
                i.moveHandleIcon) &&
                i.moveHandleIcon.attr('x', n.x + n.width / 2),
              i.dataShadowSegs),
            s = [0, e[0], e[1], o[0]],
            l = 0;
          l < a.length;
          l++
        ) {
          var u = a[l],
            h = u.getClipPath();
          h || ((h = new Bs()), u.setClipPath(h)),
            h.setShape({x: s[l], y: 0, width: s[l + 1] - s[l], height: o[1]});
        }
        this._updateDataInfo(t);
      }),
      (v.prototype._updateDataInfo = function (t) {
        var e,
          n,
          i = this.dataZoomModel,
          r = this._displayables,
          o = r.handleLabels,
          a = this._orient,
          s = ['', ''],
          l =
            (i.get('showDetail') &&
              (i = i.findRepresentativeAxisProxy()) &&
              ((e = i.getAxisModel().axis),
              (n = this._range),
              (t = t
                ? i.calculateDataWindow({start: n[0], end: n[1]}).valueWindow
                : i.getDataValueWindow()),
              (s = [this._formatLabel(t[0], e), this._formatLabel(t[1], e)])),
            ro(this._handleEnds.slice()));
        function u(t) {
          var e = tc(r.handles[t].parent, this.group),
            n = nc(0 === t ? 'right' : 'left', e),
            i = this._handleWidth / 2 + 5,
            i = ec([l[t] + (0 === t ? -i : i), this._size[1] / 2], e);
          o[t].setStyle({
            x: i[0],
            y: i[1],
            verticalAlign: a === fT ? 'middle' : n,
            align: a === fT ? n : 'center',
            text: s[t],
          });
        }
        u.call(this, 0), u.call(this, 1);
      }),
      (v.prototype._formatLabel = function (t, e) {
        var n = this.dataZoomModel,
          i = n.get('labelFormatter'),
          n = n.get('labelPrecision'),
          e =
            ((null != n && 'auto' !== n) || (n = e.getPixelPrecision()),
            null == t || isNaN(t)
              ? ''
              : 'category' === e.type || 'time' === e.type
              ? e.scale.getLabel({value: Math.round(t)})
              : t.toFixed(Math.min(n, 20)));
        return D(i) ? i(t, e) : V(i) ? i.replace('{value}', e) : e;
      }),
      (v.prototype._showDataInfo = function (t) {
        t = this._dragging || t;
        var e = this._displayables,
          n = e.handleLabels;
        n[0].attr('invisible', !t),
          n[1].attr('invisible', !t),
          e.moveHandle &&
            this.api[t ? 'enterEmphasis' : 'leaveEmphasis'](e.moveHandle, 1);
      }),
      (v.prototype._onDragMove = function (t, e, n, i) {
        (this._dragging = !0), Ie(i.event);
        (i = ec(
          [e, n],
          this._displayables.sliderGroup.getLocalTransform(),
          !0
        )),
          (e = this._updateInterval(t, i[0])),
          (n = this.dataZoomModel.get('realtime'));
        this._updateView(!n), e && n && this._dispatchZoomAction(!0);
      }),
      (v.prototype._onDragEnd = function () {
        (this._dragging = !1),
          this._showDataInfo(!1),
          this.dataZoomModel.get('realtime') || this._dispatchZoomAction(!1);
      }),
      (v.prototype._onClickPanel = function (t) {
        var e = this._size,
          t = this._displayables.sliderGroup.transformCoordToLocal(
            t.offsetX,
            t.offsetY
          );
        t[0] < 0 ||
          t[0] > e[0] ||
          t[1] < 0 ||
          t[1] > e[1] ||
          ((e = ((e = this._handleEnds)[0] + e[1]) / 2),
          (t = this._updateInterval('all', t[0] - e)),
          this._updateView(),
          t && this._dispatchZoomAction(!1));
      }),
      (v.prototype._onBrushStart = function (t) {
        var e = t.offsetX,
          t = t.offsetY;
        (this._brushStart = new H(e, t)),
          (this._brushing = !0),
          (this._brushStartTime = +new Date());
      }),
      (v.prototype._onBrushEnd = function (t) {
        var e, n, i;
        this._brushing &&
          ((e = this._displayables.brushRect), (this._brushing = !1), e) &&
          (e.attr('ignore', !0),
          (e = e.shape),
          (+new Date() - this._brushStartTime < 200 && Math.abs(e.width) < 5) ||
            ((n = this._getViewExtent()),
            (this._range = ro([
              eo(e.x, n, (i = [0, 100]), !0),
              eo(e.x + e.width, n, i, !0),
            ])),
            (this._handleEnds = [e.x, e.x + e.width]),
            this._updateView(),
            this._dispatchZoomAction(!1)));
      }),
      (v.prototype._onBrush = function (t) {
        this._brushing &&
          (Ie(t.event), this._updateBrushRect(t.offsetX, t.offsetY));
      }),
      (v.prototype._updateBrushRect = function (t, e) {
        var n = this._displayables,
          i = this.dataZoomModel,
          r = n.brushRect,
          i =
            (r ||
              ((r = n.brushRect =
                new dT({
                  silent: !0,
                  style: i.getModel('brushStyle').getItemStyle(),
                })),
              n.sliderGroup.add(r)),
            r.attr('ignore', !1),
            this._brushStart),
          n = this._displayables.sliderGroup,
          t = n.transformCoordToLocal(t, e),
          e = n.transformCoordToLocal(i.x, i.y),
          n = this._size;
        (t[0] = Math.max(Math.min(n[0], t[0]), 0)),
          r.setShape({x: e[0], y: 0, width: t[0] - e[0], height: n[1]});
      }),
      (v.prototype._dispatchZoomAction = function (t) {
        var e = this._range;
        this.api.dispatchAction({
          type: 'dataZoom',
          from: this.uid,
          dataZoomId: this.dataZoomModel.id,
          animation: t ? mT : null,
          start: e[0],
          end: e[1],
        });
      }),
      (v.prototype._findCoordRect = function () {
        var t,
          e,
          n = bM(this.dataZoomModel).infoList;
        return (t = (t =
          !t && n.length
            ? (n = n[0].model.coordinateSystem).getRect && n.getRect()
            : t)
          ? t
          : {
              x: 0.2 * (n = this.api.getWidth()),
              y: 0.2 * (e = this.api.getHeight()),
              width: 0.6 * n,
              height: 0.6 * e,
            });
      }),
      (v.type = 'dataZoom.slider'),
      v);
  function v() {
    var t = (null !== pT && pT.apply(this, arguments)) || this;
    return (t.type = v.type), (t._displayables = {}), t;
  }
  function _T(t) {
    return 'vertical' === t ? 'ns-resize' : 'ew-resize';
  }
  function xT(t) {
    t.registerComponentModel(hT), t.registerComponentView(vT), sT(t);
  }
  Z_(function (t) {
    Z_(lT), Z_(xT);
  }),
    Z_(fx);
  var wT = {
      value: 'eq',
      '<': 'lt',
      '<=': 'lte',
      '>': 'gt',
      '>=': 'gte',
      '=': 'eq',
      '!=': 'ne',
      '<>': 'ne',
    },
    bT =
      ((ST.prototype.evaluate = function (t) {
        var e = typeof t;
        return V(e)
          ? this._condVal.test(t)
          : !!dt(e) && this._condVal.test(t + '');
      }),
      ST);
  function ST(t) {
    null == (this._condVal = V(t) ? new RegExp(t) : _t(t) ? t : null) && f('');
  }
  TT.prototype.evaluate = function () {
    return this.value;
  };
  var MT = TT;
  function TT() {}
  IT.prototype.evaluate = function () {
    for (var t = this.children, e = 0; e < t.length; e++)
      if (!t[e].evaluate()) return !1;
    return !0;
  };
  var CT = IT;
  function IT() {}
  kT.prototype.evaluate = function () {
    for (var t = this.children, e = 0; e < t.length; e++)
      if (t[e].evaluate()) return !0;
    return !1;
  };
  var DT = kT;
  function kT() {}
  PT.prototype.evaluate = function () {
    return !this.child.evaluate();
  };
  var AT = PT;
  function PT() {}
  OT.prototype.evaluate = function () {
    for (
      var t = !!this.valueParser,
        e = (0, this.getValue)(this.valueGetterParam),
        n = t ? this.valueParser(e) : null,
        i = 0;
      i < this.subCondList.length;
      i++
    )
      if (!this.subCondList[i].evaluate(t ? n : e)) return !1;
    return !0;
  };
  var LT = OT;
  function OT() {}
  function RT(t, e) {
    if (!0 === t || !1 === t) return ((n = new MT()).value = t), n;
    var n;
    if ((zT(t) || f(''), t.and)) return BT('and', t, e);
    if (t.or) return BT('or', t, e);
    if (t.not)
      return (
        (n = e),
        zT((o = (o = t).not)) || f(''),
        ((l = new AT()).child = RT(o, n)),
        l.child || f(''),
        l
      );
    for (
      var i = t,
        r = e,
        o = r.prepareGetValue(i),
        a = [],
        s = ht(i),
        l = i.parser,
        u = l ? Yf(l) : null,
        h = 0;
      h < s.length;
      h++
    ) {
      var c,
        p = s[h];
      'parser' === p ||
        r.valueGetterAttrMap.get(p) ||
        ((c = Nt(wT, p) ? wT[p] : p),
        (p = i[p]),
        (p = u ? u(p) : p),
        (c =
          (function (t, e) {
            return 'eq' === t || 'ne' === t
              ? new Qf('eq' === t, e)
              : Nt(Xf, t)
              ? new qf(t, e)
              : null;
          })(c, p) ||
          ('reg' === c && new bT(p))) || f(''),
        a.push(c));
    }
    return (
      a.length || f(''),
      ((l = new LT()).valueGetterParam = o),
      (l.valueParser = u),
      (l.getValue = r.getValue),
      (l.subCondList = a),
      l
    );
  }
  function BT(t, e, n) {
    (e = e[t]),
      F(e) || f(''),
      e.length || f(''),
      (t = new ('and' === t ? CT : DT)());
    return (
      (t.children = N(e, function (t) {
        return RT(t, n);
      })),
      t.children.length || f(''),
      t
    );
  }
  function zT(t) {
    return O(t) && !st(t);
  }
  NT.prototype.evaluate = function () {
    return this._cond.evaluate();
  };
  var ET = NT;
  function NT(t, e) {
    this._cond = RT(t, e);
  }
  var FT = {
      type: 'echarts:filter',
      transform: function (t) {
        for (
          var e,
            n,
            i = t.upstream,
            r =
              ((t = t.config),
              (n = {
                valueGetterAttrMap: B({dimension: !0}),
                prepareGetValue: function (t) {
                  var e = t.dimension,
                    t = (Nt(t, 'dimension') || f(''), i.getDimensionInfo(e));
                  return t || f(''), {dimIdx: t.index};
                },
                getValue: function (t) {
                  return i.retrieveValueFromItem(e, t.dimIdx);
                },
              }),
              new ET(t, n)),
            o = [],
            a = 0,
            s = i.count();
          a < s;
          a++
        )
          (e = i.getRawDataItem(a)), r.evaluate() && o.push(e);
        return {data: o};
      },
    },
    VT = {
      type: 'echarts:sort',
      transform: function (t) {
        for (
          var a = t.upstream,
            t = t.config,
            t = So(t),
            s = (t.length || f(''), []),
            t =
              (z(t, function (t) {
                var e = t.dimension,
                  n = t.order,
                  i = t.parser,
                  t = t.incomparable,
                  e =
                    (null == e && f(''),
                    'asc' !== n && 'desc' !== n && f(''),
                    t && 'min' !== t && 'max' !== t && f(''),
                    'asc' !== n && 'desc' !== n && f(''),
                    a.getDimensionInfo(e)),
                  r = (e || f(''), i ? Yf(i) : null);
                i && !r && f(''),
                  s.push({
                    dimIdx: e.index,
                    parser: r,
                    comparator: new Kf(n, t),
                  });
              }),
              a.sourceFormat),
            e = (t !== Jp && t !== td && f(''), []),
            n = 0,
            i = a.count();
          n < i;
          n++
        )
          e.push(a.getRawDataItem(n));
        return (
          e.sort(function (t, e) {
            for (var n = 0; n < s.length; n++) {
              var i = s[n],
                r = a.retrieveValueFromItem(t, i.dimIdx),
                o = a.retrieveValueFromItem(e, i.dimIdx),
                i =
                  (i.parser && ((r = i.parser(r)), (o = i.parser(o))),
                  i.comparator.evaluate(r, o));
              if (0 !== i) return i;
            }
            return 0;
          }),
          {data: e}
        );
      },
    };
  Z_(function (t) {
    t.registerTransform(FT), t.registerTransform(VT);
  }),
    (t.Axis = zc),
    (t.ChartView = ny),
    (t.ComponentModel = g),
    (t.ComponentView = $g),
    (t.List = Sv),
    (t.Model = Fc),
    (t.PRIORITY = $y),
    (t.SeriesModel = Gg),
    (t.color = xi),
    (t.connect = function (e) {
      var t;
      return (
        F(e) &&
          ((t = e),
          (e = null),
          z(t, function (t) {
            null != t.group && (e = t.group);
          }),
          (e = e || 'g_' + Am++),
          z(t, function (t) {
            t.group = e;
          })),
        (Dm[e] = !0),
        e
      );
    }),
    (t.dataTool = {}),
    (t.dependencies = {zrender: '5.5.0'}),
    (t.disConnect = Ky),
    (t.disconnect = Lm),
    (t.dispose = function (t) {
      V(t) ? (t = Im[t]) : t instanceof dm || (t = Om(t)),
        t instanceof dm && !t.isDisposed() && t.dispose();
    }),
    (t.env = b),
    (t.extendChartView = function (t) {
      return (t = ny.extend(t)), ny.registerClass(t), t;
    }),
    (t.extendComponentModel = function (t) {
      return (t = g.extend(t)), g.registerClass(t), t;
    }),
    (t.extendComponentView = function (t) {
      return (t = $g.extend(t)), $g.registerClass(t), t;
    }),
    (t.extendSeriesModel = function (t) {
      return (t = Gg.extend(t)), Gg.registerClass(t), t;
    }),
    (t.format = Rc),
    (t.getCoordinateSystemDimensions = function (t) {
      if ((t = Ad.get(t)))
        return t.getDimensionsInfo
          ? t.getDimensionsInfo()
          : t.dimensions.slice();
    }),
    (t.getInstanceByDom = Om),
    (t.getInstanceById = function (t) {
      return Im[t];
    }),
    (t.getMap = function (t) {
      var e = z0.getMap;
      return e && e(t);
    }),
    (t.graphic = np),
    (t.helper = Qy),
    (t.init = function (t, e, n) {
      var i = !(n && n.ssr);
      if (i) {
        var r = Om(t);
        if (r) return r;
      }
      return (
        ((r = new dm(t, e, n)).id = 'ec_' + km++),
        (Im[r.id] = r),
        i && Wo(t, Pm, r.id),
        um(r),
        B0.trigger('afterinit', r),
        r
      );
    }),
    (t.innerDrawElementOnCanvas = D0),
    (t.matrix = He),
    (t.number = ea),
    (t.parseGeoJSON = l1),
    (t.parseGeoJson = l1),
    (t.registerAction = Vm),
    (t.registerCoordinateSystem = Hm),
    (t.registerLayout = Wm),
    (t.registerLoading = Ym),
    (t.registerLocale = Kc),
    (t.registerMap = Xm),
    (t.registerPostInit = Em),
    (t.registerPostUpdate = Nm),
    (t.registerPreprocessor = Bm),
    (t.registerProcessor = zm),
    (t.registerTheme = Rm),
    (t.registerTransform = qm),
    (t.registerUpdateLifecycle = Fm),
    (t.registerVisual = Gm),
    (t.setCanvasCreator = function (t) {
      C({createCanvas: t});
    }),
    (t.setPlatformAPI = C),
    (t.throttle = py),
    (t.time = Jh),
    (t.use = Z_),
    (t.util = Ac),
    (t.vector = re),
    (t.version = '5.5.0'),
    (t.zrUtil = Ht),
    (t.zrender = Jr);
});
