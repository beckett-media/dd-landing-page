var _rollbarConfig = {
  accessToken: "ae2a0d5c266d4b96a39e210a3e725de2",
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: "production",
  },
}
// Rollbar Snippet
!(function (r) {
  function e(n) {
    if (o[n]) return o[n].exports
    var t = (o[n] = { exports: {}, id: n, loaded: !1 })
    return r[n].call(t.exports, t, t.exports, e), (t.loaded = !0), t.exports
  }
  var o = {}
  return (e.m = r), (e.c = o), (e.p = ""), e(0)
})([
  function (r, e, o) {
    "use strict"
    var n = o(1),
      t = o(4)
    ;(_rollbarConfig = _rollbarConfig || {}),
      (_rollbarConfig.rollbarJsUrl =
        _rollbarConfig.rollbarJsUrl ||
        "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.4.6/rollbar.min.js"),
      (_rollbarConfig.async =
        void 0 === _rollbarConfig.async || _rollbarConfig.async)
    var a = n.setupShim(window, _rollbarConfig),
      l = t(_rollbarConfig)
    ;(window.rollbar = n.Rollbar),
      a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, l)
  },
  function (r, e, o) {
    "use strict"
    function n(r) {
      return function () {
        try {
          return r.apply(this, arguments)
        } catch (r) {
          try {
            console.error("[Rollbar]: Internal error", r)
          } catch (r) {}
        }
      }
    }
    function t(r, e) {
      ;(this.options = r), (this._rollbarOldOnError = null)
      var o = s++
      ;(this.shimId = function () {
        return o
      }),
        "undefined" != typeof window &&
          window._rollbarShims &&
          (window._rollbarShims[o] = { handler: e, messages: [] })
    }
    function a(r, e) {
      if (r) {
        var o = e.globalAlias || "Rollbar"
        if ("object" == typeof r[o]) return r[o]
        ;(r._rollbarShims = {}), (r._rollbarWrappedError = null)
        var t = new p(e)
        return n(function () {
          e.captureUncaught &&
            ((t._rollbarOldOnError = r.onerror),
            i.captureUncaughtExceptions(r, t, !0),
            i.wrapGlobals(r, t, !0)),
            e.captureUnhandledRejections &&
              i.captureUnhandledRejections(r, t, !0)
          var n = e.autoInstrument
          return (
            e.enabled !== !1 &&
              (void 0 === n ||
                n === !0 ||
                ("object" == typeof n && n.network)) &&
              r.addEventListener &&
              (r.addEventListener("load", t.captureLoad.bind(t)),
              r.addEventListener(
                "DOMContentLoaded",
                t.captureDomContentLoaded.bind(t)
              )),
            (r[o] = t),
            t
          )
        })()
      }
    }
    function l(r) {
      return n(function () {
        var e = this,
          o = Array.prototype.slice.call(arguments, 0),
          n = { shim: e, method: r, args: o, ts: new Date() }
        window._rollbarShims[this.shimId()].messages.push(n)
      })
    }
    var i = o(2),
      s = 0,
      d = o(3),
      c = function (r, e) {
        return new t(r, e)
      },
      p = d.bind(null, c)
    ;(t.prototype.loadFull = function (r, e, o, t, a) {
      var l = function () {
          var e
          if (void 0 === r._rollbarDidLoad) {
            e = new Error("rollbar.js did not load")
            for (var o, n, t, l, i = 0; (o = r._rollbarShims[i++]); )
              for (o = o.messages || []; (n = o.shift()); )
                for (t = n.args || [], i = 0; i < t.length; ++i)
                  if (((l = t[i]), "function" == typeof l)) {
                    l(e)
                    break
                  }
          }
          "function" == typeof a && a(e)
        },
        i = !1,
        s = e.createElement("script"),
        d = e.getElementsByTagName("script")[0],
        c = d.parentNode
      ;(s.crossOrigin = ""),
        (s.src = t.rollbarJsUrl),
        o || (s.async = !0),
        (s.onload = s.onreadystatechange =
          n(function () {
            if (
              !(
                i ||
                (this.readyState &&
                  "loaded" !== this.readyState &&
                  "complete" !== this.readyState)
              )
            ) {
              s.onload = s.onreadystatechange = null
              try {
                c.removeChild(s)
              } catch (r) {}
              ;(i = !0), l()
            }
          })),
        c.insertBefore(s, d)
    }),
      (t.prototype.wrap = function (r, e, o) {
        try {
          var n
          if (
            ((n =
              "function" == typeof e
                ? e
                : function () {
                    return e || {}
                  }),
            "function" != typeof r)
          )
            return r
          if (r._isWrap) return r
          if (
            !r._rollbar_wrapped &&
            ((r._rollbar_wrapped = function () {
              o && "function" == typeof o && o.apply(this, arguments)
              try {
                return r.apply(this, arguments)
              } catch (o) {
                var e = o
                throw (
                  (e &&
                    ("string" == typeof e && (e = new String(e)),
                    (e._rollbarContext = n() || {}),
                    (e._rollbarContext._wrappedSource = r.toString()),
                    (window._rollbarWrappedError = e)),
                  e)
                )
              }
            }),
            (r._rollbar_wrapped._isWrap = !0),
            r.hasOwnProperty)
          )
            for (var t in r)
              r.hasOwnProperty(t) && (r._rollbar_wrapped[t] = r[t])
          return r._rollbar_wrapped
        } catch (e) {
          return r
        }
      })
    for (
      var u =
          "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(
            ","
          ),
        f = 0;
      f < u.length;
      ++f
    )
      t.prototype[u[f]] = l(u[f])
    r.exports = { setupShim: a, Rollbar: p }
  },
  function (r, e) {
    "use strict"
    function o(r, e, o) {
      if (r) {
        var t
        "function" == typeof e._rollbarOldOnError
          ? (t = e._rollbarOldOnError)
          : r.onerror &&
            !r.onerror.belongsToShim &&
            ((t = r.onerror), (e._rollbarOldOnError = t))
        var a = function () {
          var o = Array.prototype.slice.call(arguments, 0)
          n(r, e, t, o)
        }
        ;(a.belongsToShim = o), (r.onerror = a)
      }
    }
    function n(r, e, o, n) {
      r._rollbarWrappedError &&
        (n[4] || (n[4] = r._rollbarWrappedError),
        n[5] || (n[5] = r._rollbarWrappedError._rollbarContext),
        (r._rollbarWrappedError = null)),
        e.handleUncaughtException.apply(e, n),
        o && o.apply(r, n)
    }
    function t(r, e, o) {
      if (r) {
        "function" == typeof r._rollbarURH &&
          r._rollbarURH.belongsToShim &&
          r.removeEventListener("unhandledrejection", r._rollbarURH)
        var n = function (r) {
          var o, n, t
          try {
            o = r.reason
          } catch (r) {
            o = void 0
          }
          try {
            n = r.promise
          } catch (r) {
            n = "[unhandledrejection] error getting `promise` from event"
          }
          try {
            ;(t = r.detail), !o && t && ((o = t.reason), (n = t.promise))
          } catch (r) {
            t = "[unhandledrejection] error getting `detail` from event"
          }
          o || (o = "[unhandledrejection] error getting `reason` from event"),
            e && e.handleUnhandledRejection && e.handleUnhandledRejection(o, n)
        }
        ;(n.belongsToShim = o),
          (r._rollbarURH = n),
          r.addEventListener("unhandledrejection", n)
      }
    }
    function a(r, e, o) {
      if (r) {
        var n,
          t,
          a =
            "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
              ","
            )
        for (n = 0; n < a.length; ++n)
          (t = a[n]), r[t] && r[t].prototype && l(e, r[t].prototype, o)
      }
    }
    function l(r, e, o) {
      if (e.hasOwnProperty && e.hasOwnProperty("addEventListener")) {
        for (var n = e.addEventListener; n._rollbarOldAdd && n.belongsToShim; )
          n = n._rollbarOldAdd
        var t = function (e, o, t) {
          n.call(this, e, r.wrap(o), t)
        }
        ;(t._rollbarOldAdd = n), (t.belongsToShim = o), (e.addEventListener = t)
        for (
          var a = e.removeEventListener;
          a._rollbarOldRemove && a.belongsToShim;

        )
          a = a._rollbarOldRemove
        var l = function (r, e, o) {
          a.call(this, r, (e && e._rollbar_wrapped) || e, o)
        }
        ;(l._rollbarOldRemove = a),
          (l.belongsToShim = o),
          (e.removeEventListener = l)
      }
    }
    r.exports = {
      captureUncaughtExceptions: o,
      captureUnhandledRejections: t,
      wrapGlobals: a,
    }
  },
  function (r, e) {
    "use strict"
    function o(r, e) {
      ;(this.impl = r(e, this)), (this.options = e), n(o.prototype)
    }
    function n(r) {
      for (
        var e = function (r) {
            return function () {
              var e = Array.prototype.slice.call(arguments, 0)
              if (this.impl[r]) return this.impl[r].apply(this.impl, e)
            }
          },
          o =
            "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(
              ","
            ),
          n = 0;
        n < o.length;
        n++
      )
        r[o[n]] = e(o[n])
    }
    ;(o.prototype._swapAndProcessMessages = function (r, e) {
      this.impl = r(this.options)
      for (var o, n, t; (o = e.shift()); )
        (n = o.method),
          (t = o.args),
          this[n] &&
            "function" == typeof this[n] &&
            ("captureDomContentLoaded" === n || "captureLoad" === n
              ? this[n].apply(this, [t[0], o.ts])
              : this[n].apply(this, t))
      return this
    }),
      (r.exports = o)
  },
  function (r, e) {
    "use strict"
    r.exports = function (r) {
      return function (e) {
        if (!e && !window._rollbarInitialized) {
          r = r || {}
          for (
            var o,
              n,
              t = r.globalAlias || "Rollbar",
              a = window.rollbar,
              l = function (r) {
                return new a(r)
              },
              i = 0;
            (o = window._rollbarShims[i++]);

          )
            n || (n = o.handler),
              o.handler._swapAndProcessMessages(l, o.messages)
          ;(window[t] = n), (window._rollbarInitialized = !0)
        }
      }
    }
  },
])

// new script by Hudson
;(function (w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : ""
  j.async = true
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
  f.parentNode.insertBefore(j, f)
})(window, document, "script", "dataLayer", "GTM-N5S4G39")

var EhAPI = EhAPI || {}
EhAPI.after_load = function () {
  EhAPI.set_account("s2q2h14jacgkkhmvvuip3s9hk2", "duedilly")
  EhAPI.execute("rules")
}
;(function (d, s, f) {
  var sc = document.createElement(s)
  sc.type = "text/javascript"
  sc.async = true
  sc.src = f
  var m = document.getElementsByTagName(s)[0]
  m.parentNode.insertBefore(sc, m)
})(document, "script", "//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js")

adroll_adv_id = "ZHPD7I2QSJA6PN3MVLQZJQ"
adroll_pix_id = "YN4H6NK6D5EPLA4QTQQEHI"
adroll_version = "2.0"
;(function (w, d, e, o, a) {
  w.__adroll_loaded = true
  w.adroll = w.adroll || []
  w.adroll.f = ["setProperties", "identify", "track"]
  var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"
  for (a = 0; a < w.adroll.f.length; a++) {
    w.adroll[w.adroll.f[a]] =
      w.adroll[w.adroll.f[a]] ||
      (function (n) {
        return function () {
          w.adroll.push([n, arguments])
        }
      })(w.adroll.f[a])
  }
  e = d.createElement("script")
  o = d.getElementsByTagName("script")[0]
  e.async = 1
  e.src = roundtripUrl
  o.parentNode.insertBefore(e, o)
})(window, document)
adroll.track("pageView")

window.__lo_site_id = 319333
;(function () {
  var wa = document.createElement("script")
  wa.type = "text/javascript"
  wa.async = true
  wa.src = "https://d10lpsik1i8c69.cloudfront.net/w.js"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(wa, s)
})()

/////////facebook add script

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = !0
  n.version = "2.0"
  n.queue = []
  t = b.createElement(e)
  t.async = !0
  t.src = v
  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
fbq("init", "1784194841778811")
fbq("track", "PageView")
// ticktok script
!(function (w, d, t) {
  w.TiktokAnalyticsObject = t
  var ttq = (w[t] = w[t] || [])
  ;(ttq.methods = [
    "page",
    "track",
    "identify",
    "instances",
    "debug",
    "on",
    "off",
    "once",
    "ready",
    "alias",
    "group",
    "enableCookie",
    "disableCookie",
  ]),
    (ttq.setAndDefer = function (t, e) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
      }
    })
  for (var i = 0; i < ttq.methods.length; i++)
    ttq.setAndDefer(ttq, ttq.methods[i])
  ;(ttq.instance = function (t) {
    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
      ttq.setAndDefer(e, ttq.methods[n])
    return e
  }),
    (ttq.load = function (e, n) {
      var i = "https://analytics.tiktok.com/i18n/pixel/events.js"
      ;(ttq._i = ttq._i || {}),
        (ttq._i[e] = []),
        (ttq._i[e]._u = i),
        (ttq._t = ttq._t || {}),
        (ttq._t[e] = +new Date()),
        (ttq._o = ttq._o || {}),
        (ttq._o[e] = n || {})
      var o = document.createElement("script")
      ;(o.type = "text/javascript"),
        (o.async = !0),
        (o.src = i + "?sdkid=" + e + "&lib=" + t)
      var a = document.getElementsByTagName("script")[0]
      a.parentNode.insertBefore(o, a)
    })
  ttq.load("C75L80TP2K6V4FLP5H20")
  ttq.page()
})(window, document, "ttq")

// crisp script given by andrew
window.$crisp = []
window.CRISP_WEBSITE_ID = "90a8e458-3524-4397-893f-6cf2e0df5ef0"
;(function () {
  d = document
  s = d.createElement("script")
  s.src = "https://client.crisp.chat/l.js"
  s.async = 1
  d.getElementsByTagName("head")[0].appendChild(s)
})()
