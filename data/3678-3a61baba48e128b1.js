"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3678],
  {
    16463: function (e, t, n) {
      var r = n(71169);
      n.o(r, "redirect") &&
        n.d(t, {
          redirect: function () {
            return r.redirect;
          },
        }),
        n.o(r, "useParams") &&
          n.d(t, {
            useParams: function () {
              return r.useParams;
            },
          }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    31877: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(84080),
        o = n.n(r);
    },
    40905: function (e, t) {
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return a;
          },
          isEqualNode: function () {
            return i;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function o(e) {
        let { type: t, props: n } = e,
          o = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let i = r[e] || e.toLowerCase();
          "script" === t && ("async" === i || "defer" === i || "noModule" === i)
            ? (o[i] = !!n[e])
            : o.setAttribute(i, n[e]);
        }
        let { children: i, dangerouslySetInnerHTML: a } = n;
        return (
          a
            ? (o.innerHTML = a.__html || "")
            : i &&
              (o.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
          o
        );
      }
      function i(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function a() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              o = "";
            if (r) {
              let { children: e } = r.props;
              o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            o !== document.title && (document.title = o),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          a = Number(r.content),
          l = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < a;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var u;
          (null == n
            ? void 0
            : null == (u = n.tagName)
            ? void 0
            : u.toLowerCase()) === e && l.push(n);
        }
        let s = t.map(o).filter((e) => {
          for (let t = 0, n = l.length; t < n; t++)
            if (i(l[t], e)) return l.splice(t, 1), !1;
          return !0;
        });
        l.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          s.forEach((e) => n.insertBefore(e, r)),
          (r.content = (a - l.length + s.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    84080: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let r = n(51609),
        o = n(76720),
        i = n(57437),
        a = r._(n(54887)),
        l = o._(n(2265)),
        u = n(36590),
        s = n(40905),
        c = n(49189),
        d = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        y = (e) => {
          if (a.default.preinit) {
            e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        h = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: i,
              children: a = "",
              strategy: l = "afterInteractive",
              onError: u,
              stylesheets: c,
            } = e,
            h = n || t;
          if (h && f.has(h)) return;
          if (d.has(t)) {
            f.add(h), d.get(t).then(r, u);
            return;
          }
          let m = () => {
              o && o(), f.add(h);
            },
            g = document.createElement("script"),
            _ = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), r && r.call(this, t), m();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          for (let [n, r] of (i
            ? ((g.innerHTML = i.__html || ""), m())
            : a
            ? ((g.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              m())
            : t && ((g.src = t), d.set(t, _)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = s.DOMAttributeNames[n] || n.toLowerCase();
            g.setAttribute(e, r);
          }
          "worker" === l && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", l),
            c && y(c),
            document.body.appendChild(g);
        };
      function m(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => h(e));
            })
          : h(e);
      }
      function g(e) {
        e.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function _(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: o = null,
            strategy: s = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...y
          } = e,
          {
            updateScripts: m,
            scripts: g,
            getIsSsr: _,
            appDir: b,
            nonce: v,
          } = (0, l.useContext)(u.HeadManagerContext),
          E = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let e = t || n;
          E.current || (o && e && f.has(e) && o(), (E.current = !0));
        }, [o, t, n]);
        let O = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            !O.current &&
              ("afterInteractive" === s
                ? h(e)
                : "lazyOnload" === s &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => h(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => h(e));
                      })),
              (O.current = !0));
          }, [e, s]),
          ("beforeInteractive" === s || "worker" === s) &&
            (m
              ? ((g[s] = (g[s] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: o, onError: d, ...y },
                ])),
                m(g))
              : _ && _()
              ? f.add(t || n)
              : _ && !_() && h(e)),
          b)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === s)
          )
            return n
              ? (a.default.preload(
                  n,
                  y.integrity
                    ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin,
                      }
                    : { as: "script", nonce: v, crossOrigin: y.crossOrigin }
                ),
                (0, i.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...y, id: t }]) +
                      ")",
                  },
                }))
              : (y.dangerouslySetInnerHTML &&
                  ((y.children = y.dangerouslySetInnerHTML.__html),
                  delete y.dangerouslySetInnerHTML),
                (0, i.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...y, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === s &&
            n &&
            a.default.preload(
              n,
              y.integrity
                ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: v,
                    crossOrigin: y.crossOrigin,
                  }
                : { as: "script", nonce: v, crossOrigin: y.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(_, "__nextScript", { value: !0 });
      let b = _;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
]);
