// new script by Hudson
(function (w, d, s, l, i) {
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
