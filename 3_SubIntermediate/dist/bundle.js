(() => {
  var t = {
      267: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      978: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      266: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        .card {\n          background-color: ;\n          padding: 20px;\n          border-style: solid;\n          border-radius: 20px;\n          height: 100%;\n        }\n      ";
                },
              },
              {
                key: "setData",
                value: function (t) {
                  (this.noteData = t), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this.updateStyle();
                  var t = "\n        "
                    .concat(
                      this._style.outerHTML,
                      '\n          <div class="card">\n              <h5 class="card-header"> ',
                    )
                    .concat(
                      this.noteData.title,
                      ' </h5>\n              <div class="card-body">\n                  <p class="card-text"> ',
                    )
                    .concat(
                      this.noteData.body,
                      " </p>\n              </div>\n          </div>\n      ",
                    );
                  this._shadowRoot.innerHTML = t;
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("custom-card", c);
      },
      830: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n\n        .form-title {\n            width: 100%;\n        }\n\n        .form-body {\n            width : 100%;\n            height: 100%;\n        }\n\n        .btn {\n            background-color: dodgerblue;\n            border-style: none;\n            border-radius: 4px;\n            padding: 10px 20px;\n            color: white;\n            margin-top: 20px;\n        }\n\n        .form-label {\n            font-size: 22px;\n        }\n\n        .formm {\n            margin-top: 20px\n        }\n      ";
                },
              },
              {
                key: "render",
                value: function () {
                  this.updateStyle();
                  var t = "\n        ".concat(
                    this._style.outerHTML,
                    '\n            <div class="mb-3 formm">\n                <label for="form-title" class="form-label">Judul</label> <br>\n                <input type="text" class="form-title" id="form-title">\n            </div>\n            <div class="mb-3 formm">\n                <label for="form-body" class="form-label">Isi</label> <br>\n                <textarea class="form-body" id="form-body" rows="3"></textarea>\n            </div>\n            <button type="submit" class="btn btn-primary">Add Note</button>\n      ',
                  );
                  this._shadowRoot.innerHTML = t;
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("custom-form", c);
      },
      551: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              ((e = (function (e, n, r) {
                return (
                  (n = a(n)),
                  (function (e, n) {
                    if (n && ("object" == t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(n, r || [], a(e).constructor)
                      : n.apply(e, r),
                  )
                );
              })(this, r))._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        .navbar-brand {\n          font-weight: 600;\n          margin-left: 30%;\n          width: 100%;\n          display: block;\n          font-size: 30px;\n        }\n      ";
                },
              },
              {
                key: "render",
                value: function () {
                  this.updateStyle();
                  var t = "\n        ".concat(
                    this._style.outerHTML,
                    '\n          <div>\n            <span class="navbar-brand">Note App</span>\n          </div>\n      ',
                  );
                  this._shadowRoot.innerHTML = t;
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("custom-nav", c);
      },
      106: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(978),
          o = n.n(r),
          i = n(267),
          a = n.n(i)()(o());
        a.push([
          t.id,
          ".form {\n    margin-top: 50px;\n    margin-bottom: 100px;\n    border-style: solid;\n    padding: 40px;\n    border-radius: 20px;\n}\n\n.cards {\n    margin-block: 1rem;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 40px;\n    row-gap: 80px;\n}",
          "",
        ]);
        const c = a;
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              f = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: y, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        s = n(540),
        l = n.n(s),
        f = n(113),
        p = n.n(f),
        d = n(106),
        y = {};
      (y.styleTagTransform = p()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = l()),
        e()(d.A, y),
        d.A && d.A.locals && d.A.locals;
      var b = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      console.log(b);
      const v = b;
      n(266),
        n(830),
        n(551),
        v.forEach(function (t) {
          var e = document.createElement("custom-card"),
            n = document.querySelector(".cards");
          e.setData(t), n.appendChild(e);
        });
      var h = document.createElement("custom-form");
      document.querySelector(".form").appendChild(h);
      var m = document.createElement("custom-nav");
      document.querySelector(".navbar").appendChild(m);
    })();
})();
