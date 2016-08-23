! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function i(e) {
        var t = xe[e] = {};
        return oe.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), oe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Se.test(n) ? oe.parseJSON(n) : n
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (oe.acceptData(e)) {
            var o, i, a = oe.expando,
                s = e.nodeType,
                l = s ? oe.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || oe.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)), i = l[u], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[oe.camelCase(t)] = n), "string" == typeof t ? (o = i[t], null == o && (o = i[oe.camelCase(t)])) : o = i, o
        }
    }

    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var r, o, i = e.nodeType,
                a = i ? oe.cache : e,
                s = i ? e[oe.expando] : oe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in r ? t = [t] : (t = oe.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete r[t[o]];
                    if (n ? !u(r) : !oe.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (i ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, o = 0,
            i = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!i)
            for (i = [], n = e.childNodes || e; null != (r = n[o]); o++) !t || oe.nodeName(r, t) ? i.push(r) : oe.merge(i, g(r, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], i) : i
    }

    function v(e) {
        De.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) oe._data(n, "globalEval", !t || oe._data(t[r], "globalEval"))
    }

    function C(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, r, o, i = oe._data(e),
                a = oe._data(t, i),
                s = i.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, o = s[n].length; o > r; r++) oe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = oe.extend({}, a.data))
        }
    }

    function T(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (r in o.events) oe.removeEvent(t, r, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, n) {
        var r, o = oe(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : oe.css(o[0], "display");
        return o.detach(), i
    }

    function k(e) {
        var t = he,
            n = Ze[e];
        return n || (n = S(e, t), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Qe.detach()), Ze[e] = n), n
    }

    function E(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = ft.length; o--;)
            if (t = ft[o] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = oe._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (i[a] = oe._data(r, "olddisplay", k(r.nodeName)))) : (o = Ae(r), (n && "none" !== n || !o) && oe._data(r, "olddisplay", o ? n : oe.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = lt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function D(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += oe.css(e, n + Ne[i], !0, o)), r ? ("content" === n && (a -= oe.css(e, "padding" + Ne[i], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + Ne[i] + "Width", !0, o))) : (a += oe.css(e, "padding" + Ne[i], !0, o), "padding" !== n && (a += oe.css(e, "border" + Ne[i] + "Width", !0, o)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = et(e),
            a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = tt(e, t, i), (0 > o || null == o) && (o = e.style[t]), rt.test(o)) return o;
            r = a && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + D(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }

    function q(e, t, n, r, o) {
        return new q.prototype.init(e, t, n, r, o)
    }

    function H() {
        return setTimeout(function() {
            pt = void 0
        }), pt = oe.now()
    }

    function O(e, t) {
        var n, r = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ne[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function _(e, t, n) {
        for (var r, o = (bt[t] || []).concat(bt["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function M(e, t, n) {
        var r, o, i, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            m = oe._data(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = oe.css(e, "display"), c = "none" === u ? oe._data(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], mt.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || oe.style(e, r)
            } else u = void 0;
        if (oe.isEmptyObject(f)) "inline" === ("none" === u ? k(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}), i && (m.hidden = !h), h ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in f) oe.style(e, t, f[t])
            });
            for (r in f) a = _(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function B(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = oe.camelCase(n), o = t[r], i = e[n], oe.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = oe.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function F(e, t, n) {
        var r, o, i = 0,
            a = yt.length,
            s = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = pt || H(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(i);
                return s.notifyWith(e, [u, i, n]), 1 > i && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); a > i; i++)
            if (r = yt[i].call(u, e, c, u.opts)) return r;
        return oe.map(c, _, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(be) || [];
            if (oe.isFunction(n))
                for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function I(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, oe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var i = {},
            a = e === Wt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function $(e, t) {
        var n, r, o = oe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
        return n && oe.extend(!0, e, n), e
    }

    function R(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) i = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    i = a;
                    break
                }
                r || (r = a)
            }
            i = i || r
        }
        return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0
    }

    function W(e, t, n, r) {
        var o, i, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (a = u[l + " " + i] || u["* " + i], !a)
                for (o in u)
                    if (s = o.split(" "), s[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, r) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            n || Vt.test(e) ? r(e, o) : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (o in t) z(e + "[" + o + "]", t[o], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        K = J.slice,
        Y = J.concat,
        G = J.push,
        Q = J.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: J.sort,
        splice: J.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (r in o) e = a[r], n = o[r], a !== n && (u && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, i = e && oe.isArray(e) ? e : []) : i = e && oe.isPlainObject(e) ? e : {}, a[r] = oe.extend(u, i, n)) : void 0 !== n && (a[r] = n));
        return a
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.apply(e[i], r), o === !1) break
            } else if (s)
                for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
            else
                for (i in e)
                    if (o = t.call(e[i], i, e[i]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ie, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r;) e[o++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[o++] = t[r++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > i; i++) o = t(e[i], i, r), null != o && l.push(o);
            else
                for (i in e) o = t(e[i], i, r), null != o && l.push(o);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = K.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, u, d, p, h, m;
            if ((t ? t.ownerDocument || t : I) !== q && L(t), t = t || q, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (o = ye.exec(e)))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (i = t.getElementById(a), !i || !i.parentNode) return n;
                            if (i.id === a) return n.push(i), n
                        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && F(t, i) && i.id === a) return n.push(i), n
                    } else {
                        if (o[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!_ || !_.test(e))) {
                    if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = k(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Q.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(le, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = R++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, a) {
                var s, l, u = [$, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (l = t[P] || (t[P] = {}), (s = l[r]) && s[0] === $ && s[1] === i) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function g(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));
            return a
        }

        function v(e, t, n, o, i, a) {
            return o && !o[P] && (o = v(o)), i && !i[P] && (i = v(i, a)), r(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, l),
                    b = n ? i || (r ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, l), o)
                    for (u = g(b, p), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = i ? ee(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : Q.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, o = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, o
                }]; o > s; s++)
                if (n = C.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; o > r && !C.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || i && C.find.TAG("*", u),
                        x = $ += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = a !== q && a); h !== w && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && ($ = x)
                        }
                        o && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, o && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Y.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && ($ = x, A = y), m
                };
            return o ? r(a) : a
        }
        var x, w, C, T, S, k, E, N, A, j, D, L, q, H, O, _, M, B, F, P = "sizzle" + 1 * new Date,
            I = e.document,
            $ = 0,
            R = 0,
            W = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (D = !0), 0
            },
            V = 1 << 31,
            J = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            G = K.push,
            Q = K.push,
            Z = K.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Ce = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                L()
            };
        try {
            Q.apply(K = Z.call(I.childNodes), I.childNodes), K[I.childNodes.length].nodeType
        } catch (Se) {
            Q = {
                apply: K.length ? function(e, t) {
                    G.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), O = !S(r), w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = o(function(e) {
                return H.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(we, Ce);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, M = [], _ = [], (w.qsa = ve.test(r.querySelectorAll)) && (o(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || _.push(".#.+[+~]")
            }), o(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
            })), (w.matchesSelector = ve.test(B = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), M.push("!=", ae)
            }), _ = _.length && new RegExp(_.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(H.compareDocumentPosition), F = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && F(I, e) ? -1 : t === r || t.ownerDocument === I && F(I, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, o = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (i === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[o] === u[o];) o++;
                return o ? a(l[o], u[o]) : l[o] === I ? -1 : u[o] === I ? 1 : 0
            }, r) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !O || M && M.test(n) || _ && _.test(n))) try {
                var r = B.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && J.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (D = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), D) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Ce).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (i) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), u = c[e] || [], p = u[0] === $ && u[1], f = u[0] === $ && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [$, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === $) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [$, f]), d !== t)););
                            return f -= o, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[P] ? i(n) : i.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(le, "$1"));
                    return o[P] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Ce),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, u, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) {
                (!r || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(le, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(o = he[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(),
                    i.push({
                        value: r,
                        type: a,
                        matches: o
                    }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = X[e + " "];
            if (!i) {
                for (t || (t = k(e)), n = t.length; n--;) i = y(t[n]), i[P] ? r.push(i) : o.push(i);
                i = X(e, b(o, r)), i.selector = e
            }
            return i
        }, N = t.select = function(e, t, n, r) {
            var o, i, a, s, l, u = "function" == typeof e && e,
                d = !r && k(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && O && C.relative[i[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (r = l(a.matches[0].replace(we, Ce), be.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && f(i), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (u || E(e, d))(r, t, !O, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!D, L(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                o = r.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, r[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, pe = oe(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, n) {
            for (var r = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && r.push(o), o = o[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? oe.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = oe.filter(r, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        xe = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || i(e) : oe.extend({}, e);
        var t, n, r, o, a, s, l = [],
            u = !e.once && [],
            c = function(i) {
                for (n = e.memory && i, r = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                    if (l[a].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var r = l.length;
                        ! function i(t) {
                            oe.each(t, function(t, n) {
                                var r = oe.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), t ? o = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, n) {
                        for (var r;
                            (r = oe.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, i) {
                                var a = oe.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, oe.each(t, function(e, i) {
                var a = i[2],
                    s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = K.call(arguments),
                a = i.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : oe.Deferred(),
                u = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? K.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && oe.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(l.reject).progress(u(o, n, t)) : --s;
            return s || l.resolveWith(r, i), l.promise()
        }
    });
    var we;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!he.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!we)
            if (we = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (r) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    a(), oe.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Ce, Te = "undefined";
    for (Ce in oe(ne)) break;
    ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(i), 1 === i.nodeType && !oe._data(i, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), l(i, r, o[r])));
                    oe._data(i, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : i ? l(i, e, oe.data(i, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = oe._data(e, t), n && (!r || oe.isArray(n) ? r = oe._data(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = oe._queueHooks(e, t),
                a = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = oe.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        je = oe.access = function(e, t, n, r, o, i, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (s in n) oe.access(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, oe.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(oe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
        },
        De = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Le = /^(?:input|select|textarea)$/i,
        qe = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        _e = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, m, g = oe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof oe === Te || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) i = _e.exec(t[s]) || [], p = m = i[1], h = (i[2] || "").split(".").sort(), p && (u = oe.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, d, f, p, h, m, g = oe.hasData(e) && oe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = _e.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = f.length; i--;) a = f[i], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(i, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) oe.event.remove(e, p + t[u], n, r, !0);
                oe.isEmptyObject(c) && (delete g.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, o) {
            var i, a, s, l, u, c, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), u = oe.event.special[p] || {}, o || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!o && !u.noBubble && !oe.isWindow(r)) {
                    for (l = u.delegateType || p, Oe.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, i = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), i && i.apply(s, n), i = a && s[a], i && i.apply && oe.acceptData(s) && (t.result = i.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && oe.acceptData(r) && a && r[p] && !oe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), oe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    oe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, r, o, i, a = [],
                s = K.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                u = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], i = 0; s > i; i++) r = t[i], n = r.selector + " ", void 0 === o[n] && (o[n] = r.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = He.test(o) ? this.mouseHooks : qe.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return (!o || o !== r && !oe.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Le.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = oe._data(r, t);
                o || r.addEventListener(e, n, !0), oe._data(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = oe._data(r, t) - 1;
                o ? oe._data(r, t, o) : (r.removeEventListener(e, n, !0), oe._removeData(r, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (i in e) this.on(i, t, n, e[i], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === o && (a = r, r = function(e) {
                return oe().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Be = / jQuery\d+="(?:null|\d+)"/g,
        Fe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $e = /<([\w:]+)/,
        Re = /<tbody/i,
        We = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ke = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><trqqq>", "</trqqq></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ye = m(he),
        Ge = Ye.appendChild(he.createElement("div"));
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, oe.extend({
        clone: function(e, t, n) {
            var r, o, i, a, s, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(i = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (r = g(i), s = g(e), a = 0; null != (o = s[a]); ++a) r[a] && T(o, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(i), a = 0; null != (o = s[a]); a++) C(o, r[a]);
                else C(e, i);
            return r = g(i, "script"), r.length > 0 && w(r, !l && g(e, "script")), r = s = o = null, i
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (i = e[h], i || 0 === i)
                    if ("object" === oe.type(i)) oe.merge(p, i.nodeType ? [i] : i);
                    else if (We.test(i)) {
                for (s = s || f.appendChild(t.createElement("div")), l = ($e.exec(i) || ["", ""])[1].toLowerCase(), c = Ke[l] || Ke._default, s.innerHTML = c[1] + i.replace(Ie, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Pe.test(i) && p.push(t.createTextNode(Pe.exec(i)[0])), !ne.tbody)
                    for (i = "table" !== l || Re.test(i) ? "<table>" !== c[1] || Re.test(i) ? 0 : s : s.firstChild, o = i && i.childNodes.length; o--;) oe.nodeName(u = i.childNodes[o], "tbody") && !u.childNodes.length && i.removeChild(u);
                for (oe.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(i));
            for (s && f.removeChild(s), ne.appendChecked || oe.grep(g(p, "input"), v), h = 0; i = p[h++];)
                if ((!r || -1 === oe.inArray(i, r)) && (a = oe.contains(i.ownerDocument, i), s = g(f.appendChild(i), "script"), a && w(s), n))
                    for (o = 0; i = s[o++];) Ue.test(i.type || "") && n.push(i);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, o, i, a = 0, s = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
                if ((t || oe.acceptData(n)) && (o = n[s], i = o && l[o])) {
                    if (i.events)
                        for (r in i.events) c[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, i.handle);
                    l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, J.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? oe.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Be, "") : void 0;
                if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Fe.test(e) || !ne.leadingWhitespace && Pe.test(e) || Ke[($e.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ie, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Y.apply([], e);
            var n, r, o, i, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = oe.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (i = oe.map(g(s, "script"), b), o = i.length; u > l; l++) r = s, l !== d && (r = oe.clone(r, !0, !0), o && oe.merge(i, g(r, "script"))), t.call(this[l], r, l);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, oe.map(i, x), l = 0; o > l; l++) r = i[l], Ue.test(r.type || "") && !oe._data(r, "globalEval") && oe.contains(a, r) && (r.src ? oe._evalUrl && oe._evalUrl(r.src) : oe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = 0, o = [], i = oe(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), oe(i[r])[t](n), G.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Qe, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width,
            o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !ot.test(t) && (r = s.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, i && (o.left = i)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, r, o;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = a = !1, l = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><trqqq><td></td><td>t</td></trqqq></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(r))
        }
        var n, r, o, i, a, s, l;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (r = o && o.style) && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, oe.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), oe.swap = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t) a[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t) e.style[i] = a[i];
        return o
    };
    var it = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ee + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = N(l, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                if (i = typeof n, "string" === i && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = N(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = tt(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || oe.isNumeric(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? st.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var o = r && et(e);
                return j(e, n, r ? D(e, t, r, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(i.replace(it, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = it.test(i) ? i.replace(it, o) : i + " " + o)
        }
    }), oe.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ne[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = j)
    }), oe.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (r = et(e), o = t.length; o > a; a++) i[t[a]] = oe.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = q.prototype.init, oe.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [M],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    o = gt.exec(t),
                    i = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    a = (oe.cssNumber[e] || "px" !== i && +r) && gt.exec(oe.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== i) {
                    i = i || a[3], o = o || [], a = +r || 1;
                    do s = s || ".5", a /= s, oe.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(F, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
            }, r
        }, oe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = oe.isEmptyObject(e),
                    i = oe.speed(t, n, r),
                    a = function() {
                        var t = F(this, oe.extend({}, e), i);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = oe.timers,
                        a = oe._data(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = oe._data(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = oe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, o)
            }
        }), oe.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                n = 0;
            for (pt = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe.fx.stop(), pt = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(ht), ht = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, o;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = oe.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), i) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = oe.makeArray(t), a = o.length; a--;)
                        if (r = o[a], oe.inArray(oe.valHooks.option.get(r), i) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Ct, Tt = oe.expr.attrHandle,
        St = /^(?:checked|selected)$/i,
        kt = ne.getSetAttribute,
        Et = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return je(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            return e && 3 !== i && 8 !== i && 2 !== i ? typeof e.getAttribute === Te ? oe.prop(e, t, n) : (1 === i && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Ct : wt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(be);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Et && kt || !St.test(n) ? e[r] = !1 : e[oe.camelCase("default-" + n)] = e[r] = !1 : oe.attr(e, n, ""), e.removeAttribute(kt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ct = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : Et && kt || !St.test(n) ? e.setAttribute(!kt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || oe.find.attr;
        Tt[t] = Et && kt || !St.test(t) ? function(e, t, r) {
            var o, i;
            return r || (i = Tt[t], Tt[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Tt[t] = i), o
        } : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Et && kt || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), kt || (wt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return je(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, o, i, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (i = 1 !== a || !oe.isXMLDoc(e), i && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        a = e ? oe.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, o = oe(this), i = e.match(be) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dt = oe.now(),
        Lt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(qt, function(e, t, o, i) {
            return n && t && (r = 0), 0 === r ? e : (n = o || t, r += !i - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var Ht, Ot, _t = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = {},
        Wt = {},
        zt = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Xt) {
        Ot = he.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    Ht = $t.exec(Ot.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: Ft.test(Ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, oe.ajaxSettings), t) : $(oe.ajaxSettings, e)
        },
        ajaxPrefilter: P(Rt),
        ajaxTransport: P(Wt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var o, c, v, y, x, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = R(d, w, n)), y = W(d, y, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (oe.etag[i] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", o ? h.resolveWith(f, [c, C, w]) : h.rejectWith(f, [w, C, v]), w.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? c : v]), m.fireWith(f, [w, C]), l && (p.trigger("ajaxComplete", [w, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, s, l, u, c, d = oe.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                h = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ot) + "").replace(_t, "").replace(It, Ht[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = $t.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Ht[1] && r[2] === Ht[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), I(Rt, d, t, w), 2 === b) return w;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (Lt.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(i) ? i.replace(Mt, "$1_=" + Dt++) : i + (Lt.test(i) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (oe.lastModified[i] && w.setRequestHeader("If-Modified-Since", oe.lastModified[i]), oe.etag[i] && w.setRequestHeader("If-None-Match", oe.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](d[o]);
            if (u = I(Wt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, o) {
            return oe.isFunction(n) && (o = o || r, r = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(oe.isFunction(e) ? function(t) {
                oe(this).wrapInner(e.call(this, t))
            } : function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Jt = /\r?\n/g,
        Kt = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, o);
        return r.join("&").replace(Ut, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Yt.test(this.nodeName) && !Kt.test(e) && (this.checked || !De.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Gt = 0,
        Qt = {},
        Zt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Qt) Qt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, r) {
                    var o, i = e.xhr(),
                        a = ++Gt;
                    if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && i.setRequestHeader(o, n[o] + "");
                    i.send(e.hasContent && e.data || null), t = function(n, o) {
                        var s, l, u;
                        if (t && (o || 4 === i.readyState))
                            if (delete Qt[a], t = void 0, i.onreadystatechange = oe.noop, o) 4 !== i.readyState && i.abort();
                            else {
                                u = {}, s = i.status, "string" == typeof i.responseText && (u.text = i.responseText);
                                try {
                                    l = i.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, l, u, i.getAllResponseHeaders())
                    }, e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = Qt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || oe("head")[0] || he.documentElement;
            return {
                send: function(r, o) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || oe.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || oe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), a && oe.isFunction(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], r.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = oe.trim(e.slice(s, e.length)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u, c = oe.css(e, "position"),
                d = oe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), i = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [i, l]) > -1, u ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                i = o && o.ownerDocument;
            return i ? (t = i.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Te && (r = o.getBoundingClientRect()), n = V(i), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === oe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(r, "marginTop", !0),
                    left: t.left - n.left - oe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function(r) {
            return je(this, function(e, r, o) {
                var i = V(e);
                return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? oe(i).scrollLeft() : o, n ? o : oe(i).scrollTop()) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = E(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return je(this, function(t, n, r) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var on = e.jQuery,
        an = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = an), t && e.jQuery === oe && (e.jQuery = on), oe
    }, typeof t === Te && (e.jQuery = e.$ = oe), oe
}), ! function(e) {
    var t = null;
    e.modal = function(n, r) {
        e.modal.close();
        var o, i;
        if (this.$body = e("body"), this.options = e.extend({}, e.modal.defaults, r), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), n.is("a"))
            if (i = n.attr("href"), /^#/.test(i)) {
                if (this.$elm = e(i), 1 !== this.$elm.length) return null;
                this.open()
            } else this.$elm = e("<div>"), this.$body.append(this.$elm), o = function(e, t) {
                t.elm.remove()
            }, this.showSpinner(), n.trigger(e.modal.AJAX_SEND), e.get(i).done(function(r) {
                t && (n.trigger(e.modal.AJAX_SUCCESS), t.$elm.empty().append(r).on(e.modal.CLOSE, o), t.hideSpinner(), t.open(), n.trigger(e.modal.AJAX_COMPLETE))
            }).fail(function() {
                n.trigger(e.modal.AJAX_FAIL), t.hideSpinner(), n.trigger(e.modal.AJAX_COMPLETE)
            });
        else this.$elm = n, this.open()
    }, e.modal.prototype = {
        constructor: e.modal,
        open: function() {
            var t = this;
            this.options.doFade ? (this.block(), setTimeout(function() {
                t.show()
            }, this.options.fadeDuration * this.options.fadeDelay)) : (this.block(), this.show()), this.options.escapeClose && e(document).on("keydown.modal", function(t) {
                27 == t.which && e.modal.close()
            }), this.options.clickClose && this.blocker.click(e.modal.close)
        },
        close: function() {
            this.unblock(), this.hide(), e(document).off("keydown.modal")
        },
        block: function() {
            var t = this.options.doFade ? 0 : this.options.opacity;
            this.$elm.trigger(e.modal.BEFORE_BLOCK, [this._ctx()]), this.blocker = e('<div class="jquery-modal blocker"></div>').css({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: this.options.zIndex,
                background: this.options.overlay,
                opacity: t
            }), this.$body.append(this.blocker), this.options.doFade && this.blocker.animate({
                opacity: this.options.opacity
            }, this.options.fadeDuration), this.$elm.trigger(e.modal.BLOCK, [this._ctx()])
        },
        unblock: function() {
            this.options.doFade ? this.blocker.fadeOut(this.options.fadeDuration, function() {
                e(this).remove()
            }) : this.blocker.remove()
        },
        show: function() {
            this.$elm.trigger(e.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = e('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass + " current"), this.center(), this.options.doFade ? this.$elm.fadeIn(this.options.fadeDuration) : this.$elm.show(), this.$elm.trigger(e.modal.OPEN, [this._ctx()])
        },
        hide: function() {
            this.$elm.trigger(e.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove(), this.$elm.removeClass("current"), this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration) : this.$elm.hide(), this.$elm.trigger(e.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || e('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },
        hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },
        center: function() {
            this.$elm.css({
                position: "fixed",
                top: "50%",
                left: "50%",
                marginTop: -(this.$elm.outerHeight() / 2),
                marginLeft: -(this.$elm.outerWidth() / 2),
                zIndex: this.options.zIndex + 1
            })
        },
        _ctx: function() {
            return {
                elm: this.$elm,
                blocker: this.blocker,
                options: this.options
            }
        }
    }, e.modal.prototype.resize = e.modal.prototype.center, e.modal.close = function(e) {
        if (t) {
            e && e.preventDefault(), t.close();
            var n = t.$elm;
            return t = null, n
        }
    }, e.modal.resize = function() {
        t && t.resize()
    }, e.modal.isActive = function() {
        return t ? !0 : !1
    }, e.modal.defaults = {
        overlay: "#000",
        opacity: .75,
        zIndex: 1,
        escapeClose: !0,
        clickClose: !0,
        closeText: "Close",
        closeClass: "",
        modalClass: "modal",
        spinnerHtml: null,
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    }, e.modal.BEFORE_BLOCK = "modal:before-block", e.modal.BLOCK = "modal:block", e.modal.BEFORE_OPEN = "modal:before-open", e.modal.OPEN = "modal:open", e.modal.BEFORE_CLOSE = "modal:before-close", e.modal.CLOSE = "modal:close", e.modal.AJAX_SEND = "modal:ajax:send", e.modal.AJAX_SUCCESS = "modal:ajax:success", e.modal.AJAX_FAIL = "modal:ajax:fail", e.modal.AJAX_COMPLETE = "modal:ajax:complete", e.fn.modal = function(n) {
        return 1 === this.length && (t = new e.modal(this, n)), this
    }, e(document).on("click.modal", 'a[rel="modal:close"]', e.modal.close), e(document).on("click.modal", 'a[rel="modal:open"]', function(t) {
        t.preventDefault(), e(this).modal()
    })
}(jQuery), ! function(e, t, n) {
    "use strict";
    ! function r(e, t, n) {
        function o(a, s) {
            if (!t[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (i) return i(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = t[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function(t) {
                    var n = e[a][1][t];
                    return o(n ? n : t)
                }, c, c.exports, r, e, t, n)
            }
            return t[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(r) {
            var o, i, a, s, l = function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                },
                u = r("./modules/handle-dom"),
                c = r("./modules/utils"),
                d = r("./modules/handle-swal-dom"),
                f = r("./modules/handle-click"),
                p = r("./modules/handle-key"),
                h = l(p),
                m = r("./modules/default-params"),
                g = l(m),
                v = r("./modules/set-params"),
                y = l(v);
            a = s = function() {
                function r(e) {
                    var t = a;
                    return t[e] === n ? g["default"][e] : t[e]
                }
                var a = arguments[0];
                if (u.addClass(t.body, "stop-scrolling"), d.resetInput(), a === n) return c.logStr("SweetAlert expects at least 1 attribute!"), !1;
                var l = c.extend({}, g["default"]);
                switch (typeof a) {
                    case "string":
                        l.title = a, l.text = arguments[1] || "", l.type = arguments[2] || "";
                        break;
                    case "object":
                        if (a.title === n) return c.logStr('Missing "title" argument!'), !1;
                        l.title = a.title;
                        for (var p in g["default"]) l[p] = r(p);
                        l.confirmButtonText = l.showCancelButton ? "Confirm" : g["default"].confirmButtonText, l.confirmButtonText = r("confirmButtonText"), l.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return c.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof a), !1
                }
                y["default"](l), d.fixVerticalPosition(), d.openModal(arguments[1]);
                for (var m = d.getModal(), v = m.querySelectorAll("button"), b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], x = function(e) {
                        return f.handleButton(e, l, m)
                    }, w = 0; w < v.length; w++)
                    for (var C = 0; C < b.length; C++) {
                        var T = b[C];
                        v[w][T] = x
                    }
                d.getOverlay().onclick = x, o = e.onkeydown;
                var S = function(e) {
                    return h["default"](e, l, m)
                };
                e.onkeydown = S, e.onfocus = function() {
                    setTimeout(function() {
                        i !== n && (i.focus(), i = n)
                    }, 0)
                }, s.enableButtons()
            }, a.setDefaults = s.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                c.extend(g["default"], e)
            }, a.close = s.close = function() {
                var r = d.getModal();
                u.fadeOut(d.getOverlay(), 5), u.fadeOut(r, 5), u.removeClass(r, "showSweetAlert"), u.addClass(r, "hideSweetAlert"), u.removeClass(r, "visible");
                var a = r.querySelector(".sa-icon.sa-success");
                u.removeClass(a, "animate"), u.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"), u.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");
                var s = r.querySelector(".sa-icon.sa-error");
                u.removeClass(s, "animateErrorIcon"), u.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                var l = r.querySelector(".sa-icon.sa-warning");
                return u.removeClass(l, "pulseWarning"), u.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"), u.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var e = r.getAttribute("data-custom-class");
                    u.removeClass(r, e)
                }, 300), u.removeClass(t.body, "stop-scrolling"), e.onkeydown = o, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(r.timeout), !0
            }, a.showInputError = s.showInputError = function(e) {
                var t = d.getModal(),
                    n = t.querySelector(".sa-input-error");
                u.addClass(n, "show");
                var r = t.querySelector(".sa-error-container");
                u.addClass(r, "show"), r.querySelector("p").innerHTML = e, setTimeout(function() {
                    a.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, a.resetInputError = s.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return !1;
                var t = d.getModal(),
                    n = t.querySelector(".sa-input-error");
                u.removeClass(n, "show");
                var r = t.querySelector(".sa-error-container");
                u.removeClass(r, "show")
            }, a.disableButtons = s.disableButtons = function() {
                var e = d.getModal(),
                    t = e.querySelector("button.confirm"),
                    n = e.querySelector("button.cancel");
                t.disabled = !0, n.disabled = !0
            }, a.enableButtons = s.enableButtons = function() {
                var e = d.getModal(),
                    t = e.querySelector("button.confirm"),
                    n = e.querySelector("button.cancel");
                t.disabled = !1, n.disabled = !1
            }, "undefined" != typeof e ? e.sweetAlert = e.swal = a : c.logStr("SweetAlert is a frontend module!")
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n["default"] = r, t.exports = n["default"]
        }, {}],
        3: [function(t, n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = t("./utils"),
                i = (t("./handle-swal-dom"), t("./handle-dom")),
                a = function(t, n, r) {
                    function a(e) {
                        h && n.confirmButtonColor && (p.style.backgroundColor = e)
                    }
                    var u, c, d, f = t || e.event,
                        p = f.target || f.srcElement,
                        h = -1 !== p.className.indexOf("confirm"),
                        m = -1 !== p.className.indexOf("sweet-overlay"),
                        g = i.hasClass(r, "visible"),
                        v = n.doneFunction && "true" === r.getAttribute("data-has-done-function");
                    switch (h && n.confirmButtonColor && (u = n.confirmButtonColor, c = o.colorLuminance(u, -.04), d = o.colorLuminance(u, -.14)), f.type) {
                        case "mouseover":
                            a(c);
                            break;
                        case "mouseout":
                            a(u);
                            break;
                        case "mousedown":
                            a(d);
                            break;
                        case "mouseup":
                            a(c);
                            break;
                        case "focus":
                            var y = r.querySelector("button.confirm"),
                                b = r.querySelector("button.cancel");
                            h ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
                            break;
                        case "click":
                            var x = r === p,
                                w = i.isDescendant(r, p);
                            if (!x && !w && g && !n.allowOutsideClick) break;
                            h && v && g ? s(r, n) : v && g || m ? l(r, n) : i.isDescendant(r, p) && "BUTTON" === p.tagName && sweetAlert.close()
                    }
                },
                s = function(e, t) {
                    var n = !0;
                    i.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                l = function(e, t) {
                    var n = String(t.doneFunction).replace(/\s/g, ""),
                        r = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                    r && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                };
            r["default"] = {
                handleButton: a,
                handleConfirm: s,
                handleCancel: l
            }, n.exports = r["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(n, r, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function(e, t) {
                    return new RegExp(" " + t + " ").test(" " + e.className + " ")
                },
                a = function(e, t) {
                    i(e, t) || (e.className += " " + t)
                },
                s = function(e, t) {
                    var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (i(e, t)) {
                        for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                        e.className = n.replace(/^\s+|\s+$/g, "")
                    }
                },
                l = function(e) {
                    var n = t.createElement("div");
                    return n.appendChild(t.createTextNode(e)), n.innerHTML
                },
                u = function(e) {
                    e.style.opacity = "", e.style.display = "block"
                },
                c = function(e) {
                    if (e && !e.length) return u(e);
                    for (var t = 0; t < e.length; ++t) u(e[t])
                },
                d = function(e) {
                    e.style.opacity = "", e.style.display = "none"
                },
                f = function(e) {
                    if (e && !e.length) return d(e);
                    for (var t = 0; t < e.length; ++t) d(e[t])
                },
                p = function(e, t) {
                    for (var n = t.parentNode; null !== n;) {
                        if (n === e) return !0;
                        n = n.parentNode
                    }
                    return !1
                },
                h = function(e) {
                    e.style.left = "-9999px", e.style.display = "block";
                    var t, n = e.clientHeight;
                    return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
                },
                m = function(e, t) {
                    if (+e.style.opacity < 1) {
                        t = t || 16, e.style.opacity = 0, e.style.display = "block";
                        var n = +new Date,
                            r = function(e) {
                                function t() {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function() {
                                e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(r, t)
                            });
                        r()
                    }
                    e.style.display = "block"
                },
                g = function(e, t) {
                    t = t || 16, e.style.opacity = 1;
                    var n = +new Date,
                        r = function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function() {
                            e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(r, t) : e.style.display = "none"
                        });
                    r()
                },
                v = function(n) {
                    if ("function" == typeof MouseEvent) {
                        var r = new MouseEvent("click", {
                            view: e,
                            bubbles: !1,
                            cancelable: !0
                        });
                        n.dispatchEvent(r)
                    } else if (t.createEvent) {
                        var o = t.createEvent("MouseEvents");
                        o.initEvent("click", !1, !1), n.dispatchEvent(o)
                    } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                },
                y = function(t) {
                    "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
                };
            o.hasClass = i, o.addClass = a, o.removeClass = s, o.escapeHtml = l, o._show = u, o.show = c, o._hide = d, o.hide = f, o.isDescendant = p, o.getTopMargin = h, o.fadeIn = m, o.fadeOut = g, o.fireClick = v, o.stopEventPropagation = y
        }, {}],
        5: [function(t, r, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = t("./handle-dom"),
                a = t("./handle-swal-dom"),
                s = function(t, r, o) {
                    var s = t || e.event,
                        l = s.keyCode || s.which,
                        u = o.querySelector("button.confirm"),
                        c = o.querySelector("button.cancel"),
                        d = o.querySelectorAll("button[tabindex]");
                    if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                        for (var f = s.target || s.srcElement, p = -1, h = 0; h < d.length; h++)
                            if (f === d[h]) {
                                p = h;
                                break
                            }
                        9 === l ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], i.stopEventPropagation(s), f.focus(), r.confirmButtonColor && a.setFocusStyle(f, r.confirmButtonColor)) : 13 === l ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === l && r.allowEscapeKey === !0 ? (f = c, i.fireClick(f, s)) : f = n
                    }
                };
            o["default"] = s, r.exports = o["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(n, r, o) {
            var i = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = n("./utils"),
                s = n("./handle-dom"),
                l = n("./default-params"),
                u = i(l),
                c = n("./injected-html"),
                d = i(c),
                f = ".sweet-alert",
                p = ".sweet-overlay",
                h = function() {
                    var e = t.createElement("div");
                    for (e.innerHTML = d["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
                },
                m = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function() {
                    var e = t.querySelector(f);
                    return e || (h(), e = m()), e
                }),
                g = function() {
                    var e = m();
                    return e ? e.querySelector("input") : void 0
                },
                v = function() {
                    return t.querySelector(p)
                },
                y = function(e, t) {
                    var n = a.hexToRgb(t);
                    e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                },
                b = function(n) {
                    var r = m();
                    s.fadeIn(v(), 10), s.show(r), s.addClass(r, "showSweetAlert"), s.removeClass(r, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                    var o = r.querySelector("button.confirm");
                    o.focus(), setTimeout(function() {
                        s.addClass(r, "visible")
                    }, 500);
                    var i = r.getAttribute("data-timer");
                    if ("null" !== i && "" !== i) {
                        var a = n;
                        r.timeout = setTimeout(function() {
                            var e = (a || null) && "true" === r.getAttribute("data-has-done-function");
                            e ? a(null) : sweetAlert.close()
                        }, i)
                    }
                },
                x = function() {
                    var e = m(),
                        t = g();
                    s.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), w()
                },
                w = function(e) {
                    if (e && 13 === e.keyCode) return !1;
                    var t = m(),
                        n = t.querySelector(".sa-input-error");
                    s.removeClass(n, "show");
                    var r = t.querySelector(".sa-error-container");
                    s.removeClass(r, "show")
                },
                C = function() {
                    var e = m();
                    e.style.marginTop = s.getTopMargin(m())
                };
            o.sweetAlertInitialize = h, o.getModal = m, o.getOverlay = v, o.getInput = g, o.setFocusStyle = y, o.openModal = b, o.resetInput = x, o.resetInputError = w, o.fixVerticalPosition = C
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n["default"] = r, t.exports = n["default"]
        }, {}],
        8: [function(e, t, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = e("./utils"),
                i = e("./handle-swal-dom"),
                a = e("./handle-dom"),
                s = ["error", "warning", "info", "success", "input", "prompt"],
                l = function(e) {
                    var t = i.getModal(),
                        r = t.querySelector("h2"),
                        l = t.querySelector("p"),
                        u = t.querySelector("button.cancel"),
                        c = t.querySelector("button.confirm");
                    if (r.innerHTML = e.html ? e.title : a.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text : a.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && a.show(l), e.customClass) a.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
                    else {
                        var d = t.getAttribute("data-custom-class");
                        a.removeClass(t, d), t.setAttribute("data-custom-class", "")
                    }
                    if (a.hide(t.querySelectorAll(".sa-icon")), e.type && !o.isIE8()) {
                        var f = function() {
                            for (var r = !1, o = 0; o < s.length; o++)
                                if (e.type === s[o]) {
                                    r = !0;
                                    break
                                }
                            if (!r) return logStr("Unknown alert type: " + e.type), {
                                v: !1
                            };
                            var l = ["success", "error", "warning", "info"],
                                u = n; - 1 !== l.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), a.show(u));
                            var c = i.getInput();
                            switch (e.type) {
                                case "success":
                                    a.addClass(u, "animate"), a.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), a.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case "error":
                                    a.addClass(u, "animateErrorIcon"), a.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case "warning":
                                    a.addClass(u, "pulseWarning"), a.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), a.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case "input":
                                case "prompt":
                                    c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), a.addClass(t, "show-input"), setTimeout(function() {
                                        c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                            }
                        }();
                        if ("object" == typeof f) return f.v
                    }
                    if (e.imageUrl) {
                        var p = t.querySelector(".sa-icon.sa-custom");
                        p.style.backgroundImage = "url(" + e.imageUrl + ")", a.show(p);
                        var h = 80,
                            m = 80;
                        if (e.imageSize) {
                            var g = e.imageSize.toString().split("x"),
                                v = g[0],
                                y = g[1];
                            v && y ? (h = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                        }
                        p.setAttribute("style", p.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
                    }
                    t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : a.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : a.hide(c), e.cancelButtonText && (u.innerHTML = a.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = a.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, i.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                    var b = e.doneFunction ? !0 : !1;
                    t.setAttribute("data-has-done-function", b), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                };
            r["default"] = l, t.exports = r["default"]
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(t, n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                },
                i = function(e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                },
                a = function() {
                    return e.attachEvent && !e.addEventListener
                },
                s = function(t) {
                    e.console && e.console.log("SweetAlert: " + t)
                },
                l = function(e, t) {
                    e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                    var n, r, o = "#";
                    for (r = 0; 3 > r; r++) n = parseInt(e.substr(2 * r, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), o += ("00" + n).substr(n.length);
                    return o
                };
            r.extend = o, r.hexToRgb = i, r.isIE8 = a, r.logStr = s, r.colorLuminance = l
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
}(this, function() {
    function e(e, t, n) {
        return t > e ? t : e > n ? n : e
    }

    function t(e) {
        return 100 * (-1 + e)
    }

    function n(e, n, r) {
        var o;
        return o = "translate3d" === u.positionUsing ? {
            transform: "translate3d(" + t(e) + "%,0,0)"
        } : "translate" === u.positionUsing ? {
            transform: "translate(" + t(e) + "%,0)"
        } : {
            "margin-left": t(e) + "%"
        }, o.transition = "all " + n + "ms " + r, o
    }

    function r(e, t) {
        var n = "string" == typeof e ? e : a(e);
        return n.indexOf(" " + t + " ") >= 0
    }

    function o(e, t) {
        var n = a(e),
            o = n + t;
        r(n, t) || (e.className = o.substring(1))
    }

    function i(e, t) {
        var n, o = a(e);
        r(e, t) && (n = o.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
    }

    function a(e) {
        return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
    }

    function s(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    var l = {};
    l.version = "0.2.0";
    var u = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function(e) {
            var t, n;
            for (t in e) n = e[t], void 0 !== n && e.hasOwnProperty(t) && (u[t] = n);
            return this
        }, l.status = null, l.set = function(t) {
            var r = l.isStarted();
            t = e(t, u.minimum, 1), l.status = 1 === t ? null : t;
            var o = l.render(!r),
                i = o.querySelector(u.barSelector),
                a = u.speed,
                s = u.easing;
            return o.offsetWidth, c(function(e) {
                "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), d(i, n(t, a, s)), 1 === t ? (d(o, {
                    transition: "none",
                    opacity: 1
                }), o.offsetWidth, setTimeout(function() {
                    d(o, {
                        transition: "all " + a + "ms linear",
                        opacity: 0
                    }), setTimeout(function() {
                        l.remove(), e()
                    }, a)
                }, a)) : setTimeout(e, a)
            }), this
        }, l.isStarted = function() {
            return "number" == typeof l.status
        }, l.start = function() {
            l.status || l.set(0);
            var e = function() {
                setTimeout(function() {
                    l.status && (l.trickle(), e())
                }, u.trickleSpeed)
            };
            return u.trickle && e(), this
        }, l.done = function(e) {
            return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
        }, l.inc = function(t) {
            var n = l.status;
            return n ? ("number" != typeof t && (t = (1 - n) * e(Math.random() * n, .1, .95)), n = e(n + t, 0, .994), l.set(n)) : l.start()
        }, l.trickle = function() {
            return l.inc(Math.random() * u.trickleRate)
        },
        function() {
            var e = 0,
                t = 0;
            l.promise = function(n) {
                return n && "resolved" !== n.state() ? (0 === t && l.start(), e++, t++, n.always(function() {
                    t--, 0 === t ? (e = 0, l.done()) : l.set((e - t) / e)
                }), this) : this
            }
        }(), l.render = function(e) {
            if (l.isRendered()) return document.getElementById("nprogress");
            o(document.documentElement, "nprogress-busy");
            var n = document.createElement("div");
            n.id = "nprogress", n.innerHTML = u.template;
            var r, i = n.querySelector(u.barSelector),
                a = e ? "-100" : t(l.status || 0),
                c = document.querySelector(u.parent);
            return d(i, {
                transition: "all 0 linear",
                transform: "translate3d(" + a + "%,0,0)"
            }), u.showSpinner || (r = n.querySelector(u.spinnerSelector), r && s(r)), c != document.body && o(c, "nprogress-custom-parent"), c.appendChild(n), n
        }, l.remove = function() {
            i(document.documentElement, "nprogress-busy"), i(document.querySelector(u.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && s(e)
        }, l.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, l.getPositioningCSS = function() {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
    var c = function() {
            function e() {
                var n = t.shift();
                n && n(e)
            }
            var t = [];
            return function(n) {
                t.push(n), 1 == t.length && e()
            }
        }(),
        d = function() {
            function e(e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                    return t.toUpperCase()
                })
            }

            function t(e) {
                var t = document.body.style;
                if (e in t) return e;
                for (var n, r = o.length, i = e.charAt(0).toUpperCase() + e.slice(1); r--;)
                    if (n = o[r] + i, n in t) return n;
                return e
            }

            function n(n) {
                return n = e(n), i[n] || (i[n] = t(n))
            }

            function r(e, t, r) {
                t = n(t), e.style[t] = r
            }
            var o = ["Webkit", "O", "Moz", "ms"],
                i = {};
            return function(e, t) {
                var n, o, i = arguments;
                if (2 == i.length)
                    for (n in t) o = t[n], void 0 !== o && t.hasOwnProperty(n) && r(e, n, o);
                else r(e, i[1], i[2])
            }
        }();
    return l
}), ! function(e) {
    "use strict";
    e.jscroll = {
        defaults: {
            debug: !1,
            autoTrigger: !0,
            autoTriggerUntil: !1,
            loadingHtml: "<small>Loading...</small>",
            padding: 0,
            nextSelector: "a:last",
            contentSelector: "",
            pagingSelector: "",
            callback: !1
        }
    };
    var t = function(t, n) {
        var r = t.data("jscroll"),
            o = "function" == typeof n ? {
                callback: n
            } : n,
            i = e.extend({}, e.jscroll.defaults, o, r || {}),
            a = "visible" === t.css("overflow-y"),
            s = t.find(i.nextSelector).first(),
            l = e(window),
            u = e("body"),
            c = a ? l : t,
            d = e.trim(s.attr("href") + " " + i.contentSelector),
            f = function() {
                var t = e(i.loadingHtml).filter("img").attr("src");
                if (t) {
                    var n = new Image;
                    n.src = t
                }
            },
            p = function() {
                t.find(".jscroll-inner").length || t.contents().wrapAll('<div class="jscroll-inner" />')
            },
            h = function(e) {
                var t;
                i.pagingSelector ? e.closest(i.pagingSelector).hide() : (t = e.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide(), t.length || e.wrap('<div class="jscroll-next-parent" />').parent().hide())
            },
            m = function() {
                return c.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()
            },
            g = function() {
                p();
                var e = t.find("div.jscroll-inner").first(),
                    n = t.data("jscroll"),
                    r = parseInt(t.css("borderTopWidth"), 10),
                    o = isNaN(r) ? 0 : r,
                    s = parseInt(t.css("paddingTop"), 10) + o,
                    l = a ? c.scrollTop() : t.offset().top,
                    u = e.length ? e.offset().top : 0,
                    d = Math.ceil(l - u + c.height() + s);
                return !n.waiting && d + i.padding >= e.outerHeight() ? (x("info", "jScroll:", e.outerHeight() - d, "from bottom. Loading next request..."), b()) : void 0
            },
            v = function(e) {
                return e = e || t.data("jscroll"), e && e.nextHref ? (y(), !0) : (x("warn", "jScroll: nextSelector not found - destroying"), m(), !1)
            },
            y = function() {
                var e = t.find(i.nextSelector).first();
                e.length && (i.autoTrigger && (i.autoTriggerUntil === !1 || i.autoTriggerUntil > 0) ? (h(e), u.height() <= l.height() && g(), c.unbind(".jscroll").bind("scroll.jscroll", function() {
                    return g()
                }), i.autoTriggerUntil > 0 && i.autoTriggerUntil--) : (c.unbind(".jscroll"), e.bind("click.jscroll", function() {
                    return h(e), b(), !1
                })))
            },
            b = function() {
                var n = t.find("div.jscroll-inner").first(),
                    r = t.data("jscroll");
                return r.waiting = !0, n.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">' + i.loadingHtml + "</div>"), t.animate({
                    scrollTop: n.outerHeight()
                }, 0, function() {
                    n.find("div.jscroll-added").last().load(r.nextHref, function(n, o) {
                        if ("error" === o) return m();
                        var a = e(this).find(i.nextSelector).first();
                        r.waiting = !1, r.nextHref = a.attr("href") ? e.trim(a.attr("href") + " " + i.contentSelector) : !1, e(".jscroll-next-parent", t).remove(), v(), i.callback && i.callback.call(this), x("dir", r)
                    })
                })
            },
            x = function(e) {
                if (i.debug && "object" == typeof console && ("object" == typeof e || "function" == typeof console[e]))
                    if ("object" == typeof e) {
                        var t = [];
                        for (var n in e) "function" == typeof console[n] ? (t = e[n].length ? e[n] : [e[n]], console[n].apply(console, t)) : console.log.apply(console, t)
                    } else console[e].apply(console, Array.prototype.slice.call(arguments, 1))
            };
        return t.data("jscroll", e.extend({}, r, {
            initialized: !0,
            waiting: !1,
            nextHref: d
        })), p(), f(), y(), e.extend(t.jscroll, {
            destroy: m
        }), t
    };
    e.fn.jscroll = function(n) {
        return this.each(function() {
            var r, o = e(this),
                i = o.data("jscroll");
            i && i.initialized || (r = new t(o, n))
        })
    }
}(jQuery);