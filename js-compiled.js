var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) {
  if (b.get || b.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[c] = b.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ba() {
  ba = function() {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(this);
  }});
  m = function() {
  };
}
function ea(a) {
  var c = 0;
  return fa(function() {
    return c < a.length ? {done:!1, value:a[c++]} : {done:!0};
  });
}
function fa(a) {
  m();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var c = a[Symbol.iterator];
  return c ? c.call(a) : ea(a);
}
function p(a, c) {
  this.x = a;
  this.y = c;
}
function r(a, c) {
  var b = a.originalEvent.touches[void 0 === c ? 0 : c];
  return new p(b.pageX, b.pageY);
}
function t(a, c) {
  return !!c && a.x == c.x && a.y == c.y;
}
function u(a, c) {
  return new p(a.x - c.x, a.y - c.y);
}
g = p.prototype;
g.add = function(a) {
  return new p(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new p(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new p(this.x * a, this.y * a);
};
function w(a) {
  return new p(a.x, a.y - 1);
}
function x(a) {
  return new p(a.x, a.y + 1);
}
function y(a) {
  return new p(a.x - 1, a.y);
}
g.right = function(a) {
  return new p(this.x + (void 0 === a ? 1 : a), this.y);
};
var z = ["+", "\u2012", "\u2013", "-", "|"], A = [">", "<", "^", "v"], ga = z.concat(A), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new p(-1, 0), E = new p(1, 0), F = new p(0, -1), G = new p(0, 1), H = [C, E, F, G];
function I(a, c) {
  this.a = Math.min(a.x, c.x);
  this.b = Math.min(a.y, c.y);
  this.c = Math.max(a.x, c.x);
  this.f = Math.max(a.y, c.y);
}
function ha(a) {
  return new p(a.a, a.b);
}
I.prototype.contains = function(a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function ia() {
  this.a = this.value = null;
}
function J(a) {
  return null != a.a ? a.a : a.value;
}
function L(a) {
  return ga.includes(J(a));
}
function M(a) {
  return null == a.value && null == a.a;
}
function ja(a, c, b, e) {
  this.a = a;
  this.right = c;
  this.c = b;
  this.b = e;
  this.h = this.f = this.l = this.g = !1;
}
function N(a) {
  return a.a + a.right + a.c + a.b;
}
function ka(a, c) {
  this.position = a;
  this.value = c;
}
function la(a, c) {
  this.position = a;
  this.a = c;
}
;function ma(a) {
  for (var c = 0;c < a.a.length;c++) {
    for (var b = 0;b < a.a[c].length;b++) {
      null != J(a.a[c][b]) && O(a, new p(c, b), "\u2009");
    }
  }
  P(a);
}
function Q(a, c) {
  return a.a[c.x][c.y];
}
function O(a, c, b) {
  var e = Q(a, c);
  a.b.push(new la(c, e));
  e.a = b;
  a.c = !0;
}
function R(a, c, b) {
  J(Q(a, c)) != b && O(a, c, b);
}
function S(a) {
  for (var c = n(a.b), b = c.next();!b.done;b = c.next()) {
    b.value.a.a = null;
  }
  a.b.length = 0;
}
function T(a, c) {
  var b = Q(a, c), e = null != b.a ? b.a : b.value, d = z.includes(e), f = A.includes(e);
  if (!d && !f) {
    return e;
  }
  b = U(a, c);
  if (d && b.a && b.right && !b.c && !b.b) {
    return "-";
  }
  if (d && !b.a && !b.right && b.c && b.b) {
    return "|";
  }
  if (4 == N(b)) {
    return "-";
  }
  if (f && 3 == N(b)) {
    if (!b.a) {
      return "<";
    }
    if (!b.c) {
      return "^";
    }
    if (!b.b) {
      return "v";
    }
    if (!b.right) {
      return ">";
    }
  }
  if ((d || f) && 3 == N(b)) {
    b.g = L(Q(a, w(y(c))));
    b.l = L(Q(a, w(c.right())));
    b.f = L(Q(a, x(y(c))));
    b.h = L(Q(a, x(c.right())));
    if (!b.right && b.g && b.f || !b.a && b.l && b.h) {
      return "|";
    }
    if (!b.b && b.g && b.l || !b.c && b.h && b.f) {
      return "-";
    }
    e = M(Q(a, w(y(c))));
    d = M(Q(a, w(c.right())));
    if (b.c && b.a && b.right && (!e || !d)) {
      return "-";
    }
    e = M(Q(a, x(y(c))));
    d = M(Q(a, x(c.right())));
    return !(b.b && b.a && b.right) || e && d ? "+" : "-";
  }
  if (f && 1 == N(b)) {
    if (b.a) {
      return ">";
    }
    if (b.c) {
      return "v";
    }
    if (b.b) {
      return "^";
    }
    if (b.right) {
      return "<";
    }
  }
  return e;
}
function U(a, c) {
  var b = L(Q(a, y(c))), e = L(Q(a, c.right())), d = L(Q(a, w(c))), f = L(Q(a, x(c)));
  return new ja(b, e, d, f);
}
function P(a, c) {
  var b = [], e = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), d = a.b.filter(function(a, b) {
    return e.indexOf(e[b]) == b;
  });
  a.b.length = 0;
  for (var d = n(d), f = d.next();!f.done;f = d.next()) {
    var k = f.value, f = k.position, k = k.a;
    b.push(new ka(f, null != k.value ? k.value : " "));
    var l = J(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    L(k) && (l = T(a, f));
    k.a = null;
    k.value = l;
  }
  d = c ? a.f : a.g;
  0 < b.length && (50 < d.length && d.shift(), d.push(b));
  a.c = !0;
}
function na(a) {
  if (a.g.length) {
    for (var c = a.g.pop(), c = n(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, O(a, b.position, b.value);
    }
    P(a, !0);
  }
}
function oa(a) {
  if (a.f.length) {
    for (var c = a.f.pop(), c = n(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, O(a, b.position, b.value);
    }
    P(a);
  }
}
function pa(a) {
  for (var c = new p(Number.MAX_VALUE, Number.MAX_VALUE), b = new p(-1, -1), e = 0;e < a.a.length;e++) {
    for (var d = 0;d < a.a[e].length;d++) {
      null != J(a.a[e][d]) && (e < c.x && (c.x = e), d < c.y && (c.y = d), e > b.x && (b.x = e), d > b.y && (b.y = d));
    }
  }
  if (0 > b.x) {
    return "";
  }
  for (var f = "", d = c.y;d <= b.y;d++) {
    for (var k = "", e = c.x;e <= b.x;e++) {
      var l = T(a, new p(e, d)), k = k + (null == l || "\u2009" == l ? " " : l);
    }
    f += k.replace(/\s+$/, "") + "\n";
  }
  return f;
}
;function V(a, c, b, e, d) {
  d = void 0 === d ? "+" : d;
  var f = new I(c, b), k = f.a, l = f.b, v = f.c, f = f.f, D = e ? b.x : c.x;
  for (e = e ? c.y : b.y;k++ < v;) {
    var q = new p(k, e), K = U(a, new p(k, e));
    " " == d && 2 == K.c + K.b || R(a, q, d);
  }
  for (;l++ < f;) {
    q = new p(D, l), K = U(a, new p(D, l)), " " == d && 2 == K.a + K.right || R(a, q, d);
  }
  O(a, c, d);
  O(a, b, d);
  R(a, new p(D, e), d);
}
;function W(a) {
  this.a = a;
  this.b = null;
}
g = W.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.m = function() {
  P(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function qa(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function ra(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, sa(a);
  }
  window.requestAnimationFrame(function() {
    ra(a);
  });
}
function sa(a) {
  var c = a.context;
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, a.b.width, a.b.height);
  c.scale(a.c, a.c);
  c.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var b = u(X(a, new p(0, 0)), new p(3, 3)), e = X(a, new p(a.b.width, a.b.height)).add(new p(3, 3));
  b.x = Math.max(0, Math.min(b.x, 2E3));
  e.x = Math.max(0, Math.min(e.x, 2E3));
  b.y = Math.max(0, Math.min(b.y, 600));
  e.y = Math.max(0, Math.min(e.y, 600));
  c.lineWidth = "1";
  c.strokeStyle = "#EEEEEE";
  c.beginPath();
  for (var d = b.x;d < e.x;d++) {
    c.moveTo(9 * d - a.a.x, 0 - a.a.y), c.lineTo(9 * d - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (d = b.y;d < e.y;d++) {
    c.moveTo(0 - a.a.x, 17 * d - a.a.y), c.lineTo(9 * a.g.a.length - a.a.x, 17 * d - a.a.y);
  }
  a.context.stroke();
  d = !a.h;
  c.font = "15px Courier New";
  for (var f = b.x;f < e.x;f++) {
    for (var k = b.y;k < e.y;k++) {
      var l = Q(a.g, new p(f, k));
      if (L(l) || null != l.a && " " != J(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", c.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var v = T(a.g, new p(f, k));
      null == v || L(l) && !d || (a.context.fillStyle = "#000000", c.fillText(v, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    c.lineWidth = "1";
    c.strokeStyle = "#000000";
    c.beginPath();
    for (d = b.x;d < e.x;d++) {
      for (l = !1, f = b.y;f < e.y;f++) {
        k = Q(a.g, new p(d, f)), L(k) && f != e.y - 1 || !l || (c.moveTo(9 * d - a.a.x + 4.5, 17 * l - a.a.y - 8.5), c.lineTo(9 * d - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), L(k) && !l && (l = f);
      }
    }
    for (f = b.y;f < e.y;f++) {
      for (l = !1, d = b.x;d < e.x;d++) {
        k = Q(a.g, new p(d, f)), L(k) && d != e.x - 1 || !l || (c.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), c.lineTo(9 * (d - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), L(k) && !l && (l = d);
      }
    }
    a.context.stroke();
  }
}
function X(a, c) {
  var b = new p((c.x - a.b.width / 2) / a.c + a.a.x, (c.y - a.b.height / 2) / a.c + a.a.y);
  return new p(Math.min(Math.max(1, Math.round((b.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((b.y + 8.5) / 17)), 598));
}
;function Y(a) {
  this.c = a;
  this.a = this.b = null;
}
g = Y.prototype;
g.start = function(a) {
  this.b = a;
  this.i(a);
};
g.i = function(a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var c = Math.max(this.b.x, this.a.x), b = Math.max(this.b.y, this.a.y), e = Math.min(this.b.x, this.a.x);e <= c;e++) {
    for (var d = a;d <= b;d++) {
      O(this.c, new p(e, d), "\u2009");
    }
  }
};
g.m = function() {
  P(this.c);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function ta(a, c) {
  this.a = a;
  this.c = c;
  this.b = null;
}
g = ta.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  var c = U(this.a, this.b), b = U(this.a, a);
  V(this.a, this.b, a, c.c && c.b || b.a && b.right);
  this.c && O(this.a, a, b.c ? "^" : b.b ? "v" : b.a ? "<" : ">");
};
g.m = function() {
  P(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function ua(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.l = [];
}
g = ua.prototype;
g.start = function(a) {
  this.a && this.b && (new I(this.a, this.b)).contains(a) ? (this.f = a, va(this), wa(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function va(a) {
  var c = a.c.b.filter(function(a) {
    return null != J(a.a) && "\u2009" != J(a.a);
  }), b = ha(new I(a.a, a.b));
  a.l = c.map(function(a) {
    return new ka(u(a.position, b), J(a.a));
  });
}
g.i = function(a) {
  if (this.f) {
    wa(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new I(this.a, a);
      for (var c = a.a;c <= a.c;c++) {
        for (var b = a.b;b <= a.f;b++) {
          var e = new p(c, b), d = J(Q(this.c, e));
          O(this.c, e, null == d ? "\u2009" : d);
        }
      }
    }
  }
};
function wa(a, c) {
  a.g = c;
  S(a.c);
  var b = new Y(a.c);
  b.start(a.a);
  b.i(a.b);
  b = u(a.g, a.f).add(ha(new I(a.a, a.b)));
  xa(a, b);
}
function xa(a, c) {
  for (var b = n(a.l), e = b.next();!e.done;e = b.next()) {
    var e = e.value, d = e.value;
    O(a.c, e.position.add(c), d);
  }
}
g.m = function() {
  this.f && (P(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.o = function(a) {
  return this.a && this.b && (new I(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.j = function(a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || va(this), "<cut>" == a)) {
    var c = new Y(this.c);
    c.start(this.a);
    c.i(this.b);
    P(this.c);
  }
  "<paste>" == a && (xa(this, this.a), P(this.c));
};
function ya(a) {
  this.b = a;
  this.c = this.a = null;
}
g = ya.prototype;
g.start = function(a) {
  P(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = J(Q(this.b, this.a));
  O(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function() {
};
g.m = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.o = function() {
  return "pointer";
};
g.j = function() {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var c = this.b, b = this.c, e = 0, d = 0, a = n(a), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (d++, e = 0) : (O(c, b.add(new p(e, d)), f), e++);
  }
};
function za(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = za.prototype;
g.start = function(a) {
  var c;
  if (B) {
    if (L(Q(this.a, a))) {
      c = a;
    } else {
      var b = H.concat([C.add(F), C.add(G), E.add(F), E.add(G)]);
      c = null;
      for (var e = 0, b = n(b), d = b.next();!d.done;d = b.next()) {
        var d = d.value, f = a.add(d), k = N(U(this.a, f));
        L(Q(this.a, f)) && k > e && (c = d, e = k);
      }
      c = null == c ? a : a.add(c);
    }
  } else {
    c = a;
  }
  this.b = c;
  this.c = [];
  if (L(Q(this.a, this.b))) {
    U(this.a, this.b);
    c = [];
    e = n(H);
    for (b = e.next();!b.done;b = e.next()) {
      for (b = b.value, d = Aa(this, this.b, b), d = n(d), f = d.next();!f.done;f = d.next()) {
        var f = f.value, k = 0 != b.x, l = -1 != A.indexOf(J(Q(this.a, a))), v = -1 != A.indexOf(J(Q(this.a, f)));
        if (1 == N(U(this.a, f))) {
          c.push({position:f, s:k, v:l, u:v});
        } else {
          for (var D = n(H), q = D.next();!q.done;q = D.next()) {
            q = q.value, 0 != b.add(q).length() && 2 != b.add(q).length() && (q = Aa(this, f, q), q.length && (q = q[0], c.push({position:q, s:k, v:l, w:v, u:-1 != A.indexOf(J(Q(this.a, q)))})));
          }
        }
      }
    }
    this.c = c;
    this.i(this.b);
  }
};
g.i = function(a) {
  S(this.a);
  for (var c = n(this.c), b = c.next();!b.done;b = c.next()) {
    b = b.value, V(this.a, this.b, b.position, b.s, " ");
  }
  c = n(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, V(this.a, a, b.position, b.s);
  }
  c = n(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, b.v && O(this.a, a, "^"), b.u && O(this.a, b.position, "^"), b.w && O(this.a, new p(b.s ? b.position.x : a.x, b.s ? a.y : b.position.y), "^");
  }
};
g.m = function() {
  P(this.a);
};
function Aa(a, c, b) {
  for (var e = c.clone(), d = [];;) {
    var f = e.add(b);
    if (!L(Q(a.a, f))) {
      return t(c, e) || d.push(e), d;
    }
    e = f;
    3 == N(U(a.a, e)) && d.push(e);
  }
}
g.o = function(a) {
  return L(Q(this.a, a)) ? "pointer" : "default";
};
g.j = function() {
};
function Ba(a, c) {
  this.a = a;
  this.value = c;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = Ba.prototype;
g.start = function(a) {
  O(this.a, a, this.value);
};
g.i = function(a) {
  O(this.a, a, this.value);
};
g.m = function() {
  P(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function(a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function Ca(a, c) {
  var b = X(a.a, c);
  a.f || (a.f = b);
  t(b, a.f) || (a.a.b.style.cursor = a.c.o(b));
  2 != a.mode || t(b, a.f) || a.c.i(b);
  if (1 == a.mode) {
    var e = a.a, d = a.h.add(u(a.g, c).scale(1 / a.a.c));
    e.a = d;
    e.f = !0;
  }
  a.f = b;
}
function Z(a) {
  2 == a.mode && a.c.m();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Da(a) {
  $(window).resize(function() {
    qa(a.a);
  });
  $("#draw-tools > button.tool").click(function(c) {
    $("#text-tool-widget").hide(0);
    c = c.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + c).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == c && (a.c = new W(a.b));
    "line-button" == c && (a.c = new ta(a.b, !1));
    "arrow-button" == c && (a.c = new ta(a.b, !0));
    "freeform-button" == c && (a.c = new Ba(a.b, "X"));
    "erase-button" == c && (a.c = new Y(a.b));
    "move-button" == c && (a.c = new za(a.b));
    "text-button" == c && (a.c = new ya(a.b));
    "select-button" == c && (a.c = new ua(a.b));
    P(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(c) {
    c = c.target.id;
    $(".dialog").removeClass("visible");
    $("#" + c + "-dialog").toggleClass("visible");
    "import-button" == c && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == c && ($("#export-area").val(pa(a.b)), $("#export-area").select());
    "clear-button" == c && ma(a.b);
    "undo-button" == c && na(a.b);
    "redo-button" == c && oa(a.b);
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    ma(a.b);
    for (var c = a.b, b = $("#import-area").val(), e = X(a.a, new p(a.a.b.width / 2, a.a.b.height / 2)), b = b.split("\n"), d = new p(0, Math.round(b.length / 2)), f = 0;f < b.length;f++) {
      d.x = Math.max(d.x, Math.round(b[f].length / 2));
    }
    for (f = 0;f < b.length;f++) {
      for (var k = b[f], l = 0;l < k.length;l++) {
        var v = k.charAt(l);
        z.includes(v) && (v = "+");
        O(c, u((new p(l, f)).add(e), d), v);
      }
    }
    P(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !0;
    c.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !1;
    c.f = !0;
  });
  $(window).keypress(function(c) {
    c.ctrlKey || c.metaKey || 13 == c.keyCode || a.c.j(String.fromCharCode(c.keyCode));
  });
  $(window).keydown(function(c) {
    var b = null;
    if (c.ctrlKey || c.metaKey) {
      67 == c.keyCode && (b = "<copy>"), 86 == c.keyCode && (b = "<paste>"), 90 == c.keyCode && na(a.b), 89 == c.keyCode && oa(a.b), 88 == c.keyCode && (b = "<cut>");
    }
    8 == c.keyCode && (b = "<backspace>");
    13 == c.keyCode && (b = "<enter>");
    38 == c.keyCode && (b = "<up>");
    40 == c.keyCode && (b = "<down>");
    37 == c.keyCode && (b = "<left>");
    39 == c.keyCode && (b = "<right>");
    null != b && a.c.j(b);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.j("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.j("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    P(a.b);
  });
}
;function Ea(a) {
  var c = $(a.a.a.b);
  c.on("mousewheel", function(b) {
    b = a.a.a.c * (0 < b.originalEvent.wheelDelta ? 1.1 : .9);
    b = Math.max(Math.min(b, 5), .2);
    var c = a.a.a;
    c.c = b;
    c.f = !0;
  });
  c.mousedown(function(b) {
    if (b.ctrlKey || b.metaKey) {
      var c = a.a;
      b = new p(b.clientX, b.clientY);
      c.mode = 1;
      c.g = b;
      c.h = c.a.a;
    } else {
      c = a.a, b = new p(b.clientX, b.clientY), c.mode = 2, c.c.start(X(c.a, b));
    }
  });
  c.mouseup(function() {
    Z(a.a);
  });
  c.mouseleave(function() {
    Z(a.a);
  });
  c.mousemove(function(b) {
    Ca(a.a, new p(b.clientX, b.clientY));
  });
}
function Fa(a, c) {
  a.f = c;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && a.f) {
      var b = a.a;
      b.mode = 2;
      b.c.start(X(b.a, c));
    }
  }, 150);
}
function Ga(a) {
  var c = $(a.a.a.b);
  c.on("touchstart", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      Fa(a, r(b));
    } else {
      if (1 < b.originalEvent.touches.length) {
        var c = r(b, 0);
        b = r(b, 1);
        Z(a.a);
        a.c = !0;
        a.b = !1;
        a.l = u(c, b).length();
        a.g = a.a.a.c;
      }
    }
  });
  c.on("touchmove", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      b = r(b);
      if (!a.b && 150 > $.now() - a.h && 6 < u(b, a.f).length()) {
        a.b = !0;
        var c = a.a;
        c.mode = 1;
        c.g = b;
        c.h = c.a.a;
      }
      Ca(a.a, b);
    } else {
      1 < b.originalEvent.touches.length && a.c && (b = a.g * u(r(b, 0), r(b, 1)).length() / a.l, b = Math.max(Math.min(b, 5), .5), c = a.a.a, c.c = b, c.f = !0);
    }
  });
  c.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Z(a.a);
  });
}
;var Ha = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var c = 0;c < this.a[a].length;c++) {
      this.a[a][c] = new ia;
    }
  }
}, Ia = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new p(9E3, 5100);
  this.f = !0;
  this.h = !1;
  qa(this);
}(Ha), Ja = new function(a, c) {
  this.a = a;
  this.b = c;
  this.c = new W(c);
  this.mode = 0;
  this.f = null;
  Da(this);
}(Ia, Ha);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Ga(this);
}(Ja);
new function(a) {
  this.a = a;
  Ea(this);
}(Ja);
ra(Ia);

