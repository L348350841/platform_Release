window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20250217"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20250217"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20250217"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20250217"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20250217"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20250217"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20250217"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20250217"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20250217"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20250217"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20250217"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "g80yEv2wS5Ii4wAlv0iLT7BeAU1rYUsj";
(function() {
    function aa(a) {
        throw a;
    }
    var l = void 0
      , q = !0
      , s = null
      , t = !1;
    function ba() {
        return function() {}
    }
    function ca(a) {
        return function(b) {
            this[a] = b
        }
    }
    function u(a) {
        return function() {
            return this[a]
        }
    }
    function da(a) {
        return function() {
            return a
        }
    }
    var ea, fa = [];
    function ga(a) {
        return function() {
            return fa[a].apply(this, arguments)
        }
    }
    function ha(a, b) {
        return fa[a] = b
    }
    var ia, w = ia = w || {
        version: "1.3.4"
    };
    w.ca = "$BAIDU$";
    window[w.ca] = window[w.ca] || {};
    w.object = w.object || {};
    w.extend = w.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    w.R = w.R || {};
    w.R.ea = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : s
    }
    ;
    w.ea = w.Hc = w.R.ea;
    w.R.$ = function(a) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    w.$ = w.R.$;
    w.lang = w.lang || {};
    w.lang.Gg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    w.Gg = w.lang.Gg;
    w.lang.sE = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a)
                return t;
            return q
        }
        return t
    }
    ;
    w.sE = w.lang.sE;
    w.R.ck = function(a) {
        return w.lang.Gg(a) ? document.getElementById(a) : a
    }
    ;
    w.ck = w.R.ck;
    w.R.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == s && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
            for (k = i = 0; i < f; i++)
                g.test(e[i].className) && (c[k] = e[i],
                k++)
        }
        return c
    }
    ;
    w.getElementsByClassName = w.R.getElementsByClassName;
    w.R.contains = function(a, b) {
        var c = w.R.ck
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    w.fa = w.fa || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (w.fa.na = w.na = document.documentMode || +RegExp.$1);
    var ja = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > w.fa.na ? (ja["for"] = "htmlFor",
    ja["class"] = "className") : (ja.htmlFor = "for",
    ja.className = "class");
    w.R.UG = ja;
    w.R.qF = function(a, b, c) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = w.R.UG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    w.qF = w.R.qF;
    w.R.rF = function(a, b) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        for (var c in b)
            w.R.qF(a, c, b[c]);
        return a
    }
    ;
    w.rF = w.R.rF;
    w.hl = w.hl || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        w.hl.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    }
    )();
    w.trim = w.hl.trim;
    w.hl.rp = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    }
    ;
    w.rp = w.hl.rp;
    w.R.pc = function(a, b) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    w.pc = w.R.pc;
    w.R.Sx = function(a, b, c) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        var e;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    }
    ;
    w.Sx = w.R.Sx;
    w.R.show = function(a) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        a.style.display = "";
        return a
    }
    ;
    w.show = w.R.show;
    w.R.MD = function(a) {
        a = w.R.ea(a);
        return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    w.R.hb = function(a, b) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++)
            f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    }
    ;
    w.hb = w.R.hb;
    w.R.HB = w.R.HB || {};
    w.R.em = w.R.em || [];
    w.R.em.filter = function(a, b, c) {
        for (var e = 0, f = w.R.em, g; g = f[e]; e++)
            if (g = g[c])
                b = g(a, b);
        return b
    }
    ;
    w.hl.LO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    w.R.A0 = function(a) {
        w.R.vt(a, "expand") ? w.R.pc(a, "expand") : w.R.hb(a, "expand")
    }
    ;
    w.R.vt = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        w.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = q)
        });
        return c
    }
    ;
    w.R.uf = function(a, b) {
        var c = w.R
          , a = c.ea(a);
        if (a === s)
            return a;
        var b = w.hl.LO(b)
          , e = a.style[b];
        if (!e)
            var f = c.HB[b]
              , e = a.currentStyle || (w.fa.na ? a.style : getComputedStyle(a, s))
              , e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.em)
            e = f.filter(b, e, "get");
        return e
    }
    ;
    w.uf = w.R.uf;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (w.fa.opera = +RegExp.$1);
    w.fa.CM = /webkit/i.test(navigator.userAgent);
    w.fa.ZY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    w.fa.yE = "CSS1Compat" == document.compatMode;
    w.R.la = function(a) {
        a = w.R.ea(a);
        if (a === s)
            return a;
        var b = w.R.MD(a)
          , c = w.fa
          , e = w.R.uf;
        c.ZY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        }, g;
        if (a == (c.na && !c.yE ? b.body : b.documentElement))
            return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.na && !c.yE) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.CM > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);
            if (c.opera > 0 || c.CM > 0 && e(a, "position") == "absolute")
                f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body; ) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR")
                    f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (w.fa.Ve = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (w.fa.I2 = q);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (w.fa.Dy = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (w.fa.Rw = +RegExp.$1);
    w.mc = w.mc || {};
    w.mc.Pb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t)
                    break
            }
        return a
    }
    ;
    w.Pb = w.mc.Pb;
    w.lang.ca = function() {
        return "TANGRAM__" + (window[w.ca]._counter++).toString(36)
    }
    ;
    window[w.ca]._counter = window[w.ca]._counter || 1;
    window[w.ca]._instances = window[w.ca]._instances || {};
    w.lang.Et = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    w.lang.Ha = function(a) {
        this.ca = a || w.lang.ca();
        window[w.ca]._instances[this.ca] = this
    }
    ;
    window[w.ca]._instances = window[w.ca]._instances || {};
    w.lang.Ha.prototype.mi = ga(2);
    w.lang.Ha.prototype.toString = function() {
        return "[object " + (this.MQ || "Object") + "]"
    }
    ;
    w.lang.Qu = function(a, b) {
        this.type = a;
        this.returnValue = q;
        this.target = b || s;
        this.currentTarget = s
    }
    ;
    w.lang.Ha.prototype.addEventListener = function(a, b, c) {
        if (w.lang.Et(b)) {
            !b.ul && (b.ul = {});
            !this.Ri && (this.Ri = {});
            var e = this.Ri, f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.fM = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.ul[a] != "object" && (b.ul[a] = {});
            f = f || w.lang.ca();
            b.ul[a].fM = f;
            e[a][f] = b
        }
    }
    ;
    w.lang.Ha.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (w.lang.Et(b)) {
            if (!b.ul || !b.ul[a])
                return;
            b = b.ul[a].fM
        } else if (!w.lang.Gg(b))
            return;
        !this.Ri && (this.Ri = {});
        var c = this.Ri;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    w.lang.Ha.prototype.dispatchEvent = function(a, b) {
        w.lang.Gg(a) && (a = new w.lang.Qu(a));
        !this.Ri && (this.Ri = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var e = this.Ri
          , f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        w.lang.Et(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f])
                e[f][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    w.lang.va = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g)
            f[e] = g[e];
        a.prototype.constructor = a;
        a.o0 = b.prototype;
        if ("string" == typeof c)
            f.MQ = c
    }
    ;
    w.va = w.lang.va;
    w.lang.je = function(a) {
        return window[w.ca]._instances[a] || s
    }
    ;
    w.platform = w.platform || {};
    w.platform.wM = /macintosh/i.test(navigator.userAgent);
    w.platform.V4 = /MicroMessenger/i.test(navigator.userAgent);
    w.platform.DM = /windows/i.test(navigator.userAgent);
    w.platform.gZ = /x11/i.test(navigator.userAgent);
    w.platform.Rk = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (w.platform.eC = w.eC = RegExp.$1);
    w.platform.P4 = /ipad/i.test(navigator.userAgent);
    w.platform.vM = /iphone/i.test(navigator.userAgent);
    function na(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    w.lang.dx = function(a) {
        var b = window[w.ca];
        b.SS && delete b.SS[a]
    }
    ;
    w.event = {};
    w.U = w.event.U = function(a, b, c) {
        if (!(a = w.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    w.Ge = w.event.Ge = function(a, b, c) {
        if (!(a = w.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    w.R.vt = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    }
    ;
    w.dL = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.gL = this.Pk ? "touchstart" : "mousedown",
            this.sD = this.Pk ? "touchmove" : "mousemove",
            this.rD = this.Pk ? "touchend" : "mouseup",
            this.Ch = t,
            this.wu = this.vu = 0,
            this.element.addEventListener(this.gL, this, t),
            ia.U(this.element, "mousedown", ba()),
            this.handleEvent(s))
        }
        a.prototype = {
            Pk: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                oa(a);
                this.Ch = t;
                this.vu = this.Pk ? a.touches[0].clientX : a.clientX;
                this.wu = this.Pk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.sD, this, t);
                this.element.addEventListener(this.rD, this, t)
            },
            move: function(a) {
                pa(a);
                var c = this.Pk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Pk ? a.touches[0].clientX : a.clientX) - this.vu) || 10 < Math.abs(c - this.wu))
                    this.Ch = q
            },
            end: function(a) {
                pa(a);
                this.Ch || (a = document.createEvent("Event"),
                a.initEvent("tap", t, q),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.sD, this, t);
                this.element.removeEventListener(this.rD, this, t)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.gL:
                        this.start(a);
                        break;
                    case this.sD:
                        this.move(a);
                        break;
                    case this.rD:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var C = window.BMap || {};
    C.version = "3.0";
    C.coordType || (C.coordType = "BMAP_COORD_BD09");
    C.A2 = 0.34 > Math.random();
    0 <= C.version.indexOf("#") && (C.version = "3.1");
    C.Sr = [];
    C.df = function(a) {
        this.Sr.push(a)
    }
    ;
    C.Lr = [];
    C.Wk = function(a) {
        this.Lr.push(a)
    }
    ;
    C.eV = C.apiLoad || ba();
    C.Zy = C.verify || function(a) {
        if (C.version && C.version >= 1.5) {
            var b = window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? window._BMapSecurityConfig.serviceHost + "?qt=verify" : C.bd + "?qt=verify&ak=" + qa;
            a && (b = b + "&fromPanorama=" + a);
            ra(b, function(a) {
                if (a && a.error !== 0) {
                    C = s;
                    var b = "\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    a.error && sa[a.error] && (b = sa[a.error] + "\u8be6\u60c5\u67e5\u770b\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002");
                    alert(b);
                    if (typeof map !== "undefined" && typeof map.Ra === "function") {
                        map.Ra().innerHTML = "";
                        map.Ri = {}
                    }
                }
            })
        }
        var a = +new Date
          , c = I("script", {
            type: "text/javascript",
            async: ""
        });
        c.charset = "utf-8";
        c.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js?_t=" + a;
        c.onload = function() {
            if (window.___abvk) {
                var a = window.___abvk;
                localStorage ? localStorage.setItem("SECKEY_ABVK", a) : sessionStorage && sessionStorage.setItem("SECKEY_ABVK", a)
            }
        }
        ;
        window.__abbaidu_2063_cb = function(a) {
            a = JSON.parse(a).data;
            localStorage ? localStorage.setItem("BMAP_SECKEY", a) : sessionStorage && sessionStorage.setItem("BMAP_SECKEY", a)
        }
        ;
        c.addEventListener ? c.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : c.attachEvent && c.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(c);
            c = s
        }, 1)
    }
    ;
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = s;
    var ta = window.BMap_loadScriptTime
      , ua = (new Date).getTime()
      , va = s
      , wa = q
      , xa = 5042
      , za = 5002
      , Aa = 5003
      , Ba = "load_mapclick"
      , Ca = 5038
      , Da = 5041
      , Fa = 5047
      , Ga = 5036
      , Ha = 5039
      , Ia = 5037
      , Ja = 5040
      , Ka = 5011
      , La = 7E3
      , sa = {
        101: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5ak\u6709\u95ee\u9898\uff0c\u4e0d\u652f\u6301jsapi\u670d\u52a1\uff0c\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u5bc6\u94a5\u3002",
        102: "MCODE\u53c2\u6570\u4e0d\u5b58\u5728\uff0cmobile\u7c7b\u578bMCODE\u53c2\u6570\u5fc5\u9700\u3002",
        200: "APP\u4e0d\u5b58\u5728\uff0cAK\u6709\u8bef\u8bf7\u68c0\u67e5\u518d\u91cd\u8bd5\u3002",
        201: "APP\u88ab\u60a8\u7981\u7528\u5566\u3002",
        202: "APP\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
        203: "APP\u7c7b\u578b\u9519\u8bef\u3002",
        210: "APP IP\u6821\u9a8c\u5931\u8d25\u3002",
        220: "APP Referer\u6821\u9a8c\u5931\u8d25\u3002\u8bf7\u68c0\u67e5\u8be5ak\u8bbe\u7f6e\u7684\u767d\u540d\u5355\u4e0e\u8bbf\u95ee\u6240\u6709\u7684\u57df\u540d\u662f\u5426\u4e00\u81f4\u3002",
        230: "APP Mcode\u7801\u6821\u9a8c\u5931\u8d25\u3002",
        240: "APP\u670d\u52a1\u88ab\u7981\u7528\u4e86\u3002",
        250: "\u8be5\u7528\u6237\u4e0d\u5b58\u5728...",
        251: "\u8be5\u7528\u6237\u88ab\u81ea\u5df1\u5220\u9664\u5566\u3002",
        252: "\u8be5\u7528\u6237\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
        260: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u4e0d\u5305\u542b\u8be5\u670d\u52a1\u5462\uff0c",
        261: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u7684\u8be5\u670d\u52a1\u88ab\u7981\u7528\u5566\uff0c",
        401: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5e76\u53d1\u8d85\u9650\u4e86\uff0c",
        302: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5929\u914d\u989d\u8d85\u9650\u4e86\uff0c"
    };
    var Ma = 0
      , Na = "BMAP_COORD_BD09"
      , Oa = "BMAP_COORD_GCJ02"
      , Qa = "BMAP_COORD_MERCATOR";
    function Ra(a, b) {
        if (a = w.ea(a)) {
            var c = this;
            w.lang.Ha.call(c);
            b = b || {};
            c.K = {
                tC: 200,
                gc: q,
                ix: t,
                hD: q,
                np: q,
                pp: b.enableWheelZoom || t,
                bL: q,
                jD: q,
                op: q,
                Xs: q,
                oD: q,
                lp: b.enable3DBuilding || t,
                Mc: 25,
                v1: 240,
                SU: 450,
                zc: L.zc,
                Hd: L.Hd,
                Gt: !!b.Gt,
                hc: Math.round(b.minZoom) || 1,
                oc: Math.round(b.maxZoom) || 19,
                Ua: b.mapType || Ta,
                T5: t,
                ZK: b.drawer || Ma,
                hx: q,
                gx: 500,
                WW: b.enableHighResolution !== t,
                Cm: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                dG: 99,
                Ce: b.mapStyle || s,
                nZ: b.logoControl === t ? t : q,
                lV: [],
                L2: b.beforeClickIcon || s,
                Yf: t,
                Ck: t,
                gp: t,
                SE: q,
                dD: b.enableBizAuthLogo === t ? t : q,
                Ma: b.coordsType || C.coordType,
                y6: b.touchZoomCenter || 0,
                lD: b.enablePinchDragging === t ? t : q
            };
            c.K.Ce && (this.NY(c.K.Ce.controls),
            this.qM(c.K.Ce.geotableId));
            c.K.Ce && c.K.Ce.styleId && c.n4(c.K.Ce.styleId);
            c.K.wC = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.K.Xs = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.K.oD = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.K.bL = b.enableDeepZoom);
            var e = c.K.lV;
            if (M())
                for (var f = 0, g = e.length; f < g; f++)
                    if (w.fa[e[f]]) {
                        c.K.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f)
                c.K.dG = 99;
            c.Ya = a;
            c.BB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.za());
            b.size && this.Fe(b.size);
            e = c.ub();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.De = c.platform.firstChild;
            c.De.style.width = c.width + "px";
            c.De.style.height = c.height + "px";
            c.ae = {};
            c.ee = new N(0,0);
            c.Gb = new N(0,0);
            c.Xa = 3;
            c.Ac = 0;
            c.HC = s;
            c.GC = s;
            c.Ob = "";
            c.Sw = "";
            c.Rh = {};
            c.Rh.custom = {};
            c.Ti = {};
            c.Za = 0;
            b.useWebGL === t && Ua(t);
            c.V = new Va(a,{
                We: "api",
                WS: q
            });
            c.V.$();
            c.V.xF(c);
            b = b || {};
            e = c.Ua = c.K.Ua;
            c.Cc = e.yj();
            e && e.AF(c.K.Ma);
            Wa(Xa(1, 1), ["instance", "engine"]);
            e === Ya && Za(za);
            e === $a && Za(Aa);
            e === ab || e === $a ? Wa(Xa(3, 2), ["layer", "raster"]) : Wa(Xa(3, 17), ["layer", "normal_map"]);
            e = c.K;
            e.dP = Math.round(b.minZoom);
            e.cP = Math.round(b.maxZoom);
            c.hv();
            c.aa = {
                Oc: t,
                nc: 0,
                Lt: 0,
                JM: 0,
                Z4: 0,
                lC: t,
                eF: -1,
                ve: []
            };
            c.platform.style.cursor = c.K.zc;
            for (f = 0; f < C.Sr.length; f++)
                C.Sr[f](c);
            c.aa.eF = f;
            c.ga();
            bb.load("map", function() {
                c.mb()
            });
            c.K.Cm && (setTimeout(function() {
                Za(Ba)
            }, 1E3),
            bb.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ca] = new cb(c)
            }, q));
            db() && bb.load("oppc", function() {
                c.Yu()
            });
            M() && bb.load("opmb", function() {
                c.Yu()
            });
            a = s;
            c.PB = []
        }
    }
    w.lang.va(Ra, w.lang.Ha, "Map");
    w.extend(Ra.prototype, {
        za: function() {
            var a = I("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = I("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        BB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== eb(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ga: function() {
            var a = this;
            a.No = function() {
                var b = a.ub();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new O(a.width,a.height)
                      , e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.uk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.De.style.width = (a.width = b.width) + "px";
                    a.De.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.K.Xs && (a.aa.pm = setInterval(a.No, 80))
        },
        uk: function(a, b, c, e) {
            var f = this.wa().Ub(this.ka())
              , g = this.Cc
              , i = q;
            if (c && (c instanceof R || c instanceof N))
                c = fb(c, this.K.Ma);
            c && R.uE(c) && (this.ee = new N(c.lng,c.lat),
            i = t);
            if (c = c && e ? g.vi(c, this.Ob) : this.Gb)
                if (this.Gb = new N(c.lng + a * f,c.lat - b * f),
                (a = g.Bh(this.Gb, this.Ob)) && i)
                    this.ee = a
        },
        Tg: function(a, b) {
            if (gb(a) && (this.hv(),
            this.dispatchEvent(new Q("onzoomstart")),
            a = this.ko(a).zoom,
            a !== this.Xa)) {
                this.Ac = this.Xa;
                this.Xa = a;
                var c;
                b ? c = b : this.uh() && (c = this.uh().la());
                c && (c = this.xo(fb(c, this.K.Ma), this.Ac),
                this.uk(this.width / 2 - c.x, this.height / 2 - c.y, this.sg(c, this.Ac), q));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Vc: function(a) {
            this.Tg(a)
        },
        lG: function(a) {
            this.Tg(this.Xa + 1, a)
        },
        mG: function(a) {
            this.Tg(this.Xa - 1, a)
        },
        Di: function(a) {
            if (a instanceof R || a instanceof N)
                a = fb(a, this.K.Ma),
                this.Gb = this.Cc.vi(a, this.Ob),
                this.ee = R.uE(a) ? new N(a.lng,a.lat) : this.Cc.Bh(this.Gb, this.Ob)
        },
        Mg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.uk(-a, -b)
        },
        Ro: function(a) {
            a && hb(a.Ke) && (a.Ke(this),
            this.dispatchEvent(new Q("onaddcontrol",a)))
        },
        SN: function(a) {
            a && hb(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremovecontrol",a)))
        },
        jm: function(a) {
            a && hb(a.xa) && (a.xa(this),
            this.dispatchEvent(new Q("onaddcontextmenu",a)))
        },
        bq: function(a) {
            a && hb(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu",a)),
            a.remove())
        },
        Pa: function(a) {
            a && hb(a.Ke) && (a.Ke(this),
            this.dispatchEvent(new Q("onaddoverlay",a)))
        },
        Jb: function(a) {
            a && hb(a.remove) && (a.remove(),
            this.dispatchEvent(new Q("onremoveoverlay",a)))
        },
        vK: function() {
            this.dispatchEvent(new Q("onclearoverlays"))
        },
        Se: function(a) {
            a && this.dispatchEvent(new Q("onaddtilelayer",a))
        },
        fg: function(a) {
            a && this.dispatchEvent(new Q("onremovetilelayer",a))
        },
        Qg: function(a) {
            if (this.Ua !== a) {
                this.K.qZ && this.N_(a);
                var b = new Q("onsetmaptype");
                b.J5 = this.Ua;
                this.Ua = this.K.Ua = a;
                this.Cc = this.Ua.yj();
                this.uk(0, 0, this.tv(), q);
                this.hv();
                var c = this.ko(this.ka()).zoom;
                this.Tg(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Xa = c;
                b.Ua = a;
                this.dispatchEvent(b);
                a.AF(this.K.Ma);
                a === ab || a === $a ? (Za(Aa),
                Wa(Xa(3, 2), ["layer", "raster"])) : Wa(Xa(3, 17), ["layer", "normal_map"])
            }
        },
        N_: function(a) {
            a === ab || a === $a ? (this.Hy(q),
            this.jO(t),
            this.K.Yf = t,
            this.K.Ck = t,
            Wa(Xa(3, 2), ["layer", "raster"])) : (this.Hy(t),
            this.jO(q),
            this.K.Yf = q,
            this.K.Ck = q,
            Wa(Xa(3, 1), ["layer", "vector"]))
        },
        zf: function(a) {
            var b = this;
            if (a instanceof R || a instanceof N)
                b.Di(a, {
                    noAnimation: q
                });
            else if (ib(a))
                if (b.Ua === Ya) {
                    var c = L.pC[a];
                    c && (pt = c.o,
                    b.zf(pt))
                } else {
                    var e = this.UH();
                    e.ku(function(c) {
                        0 === e.Mm() && 2 === e.Ia.result.type && (c = c.kt(0).point,
                        c = new N(c.lng,c.lat),
                        b.zf(c),
                        Ya.Hk(a) && b.tF(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        dd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            var c = this;
            ra(window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? window._BMapSecurityConfig.serviceHost + "?qt=business" : ("http:" === window.location.protocol ? "http:" : "https:") + "//api.map.baidu.com?qt=business&ak=" + qa, function(a) {
                a && 0 === a.error && a.content && 0 === a.content.business && 1 === a.content.unauth ? (a = new jb,
                a.Px({
                    hG: c.Ya.getAttribute("id"),
                    iG: "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743"
                })) : a && a.error && (a = new jb,
                a.Px({
                    hG: c.Ya,
                    iG: "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743"
                }))
            });
            if (ib(a))
                if (c.Ua === Ya) {
                    var e = L.pC[a];
                    e && (pt = e.o,
                    c.dd(pt, b))
                } else {
                    var f = c.UH();
                    f.ku(function(e) {
                        if (0 === f.Mm() && (2 === f.Ia.result.type || 11 === f.Ia.result.type)) {
                            var g = e.kt(0).point
                              , e = b || kb.nx(f.Ia.content.level, c)
                              , g = new N(g.lng,g.lat);
                            c.dd(g, e);
                            Ya.Hk(a) && c.tF(a)
                        } else
                            e = new R(116.403765,39.91485),
                            c.dd(e, b),
                            console.error("\u60a8\u597d\uff0c\u57ce\u5e02\u521d\u59cb\u5316\u5730\u56fe\u4f7f\u7528\u4e86qt=s\u68c0\u7d22\u670d\u52a1\uff0c\u8bf7\u68c0\u67e5\u8be5\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u8d85\u914d\u989d\u3002")
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if ((a instanceof R || a instanceof N) && b) {
                b = c.ko(b).zoom;
                c.Ac = c.Xa || b;
                c.Xa = b;
                e = c.ee;
                a = fb(a, this.K.Ma);
                c.ee = new N(a.lng,a.lat);
                c.Gb = c.Cc.vi(c.ee, c.Ob);
                c.HC = c.HC || c.Xa;
                c.GC = c.GC || c.ee;
                var g = new Q("onload")
                  , i = new Q("onloadcode");
                g.point = new N(a.lng,a.lat);
                g.pixel = c.xo(c.ee, c.Xa);
                g.zoom = b;
                c.loaded || (c.loaded = q,
                c.dispatchEvent(g),
                va || (va = mb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.Yz = "centerAndZoom";
                e.Tb(c.ee) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.Ac !== c.Xa && (e = new Q("onzoomend"),
                e.Yz = "centerAndZoom",
                c.dispatchEvent(e));
                c.K.lp && c.lp()
            }
        },
        UH: function() {
            this.aa.UM || (this.aa.UM = new nb(1));
            return this.aa.UM
        },
        reset: function() {
            this.dd(this.GC, this.HC, q)
        },
        enableDragging: function() {
            this.K.gc = q
        },
        disableDragging: function() {
            this.K.gc = t
        },
        enableInertialDragging: function() {
            this.K.hx = q
        },
        disableInertialDragging: function() {
            this.K.hx = t
        },
        enableScrollWheelZoom: function() {
            this.K.pp = q
        },
        disableScrollWheelZoom: function() {
            this.K.pp = t
        },
        enableContinuousZoom: function() {
            this.K.np = q
        },
        disableContinuousZoom: function() {
            this.K.np = t
        },
        enableDoubleClickZoom: function() {
            this.K.hD = q
        },
        disableDoubleClickZoom: function() {
            this.K.hD = t
        },
        enableKeyboard: function() {
            this.K.ix = q
        },
        disableKeyboard: function() {
            this.K.ix = t
        },
        enablePinchToZoom: function() {
            this.K.op = q
        },
        disablePinchToZoom: function() {
            this.K.op = t
        },
        enableAutoResize: function() {
            this.K.Xs = q;
            this.No();
            this.aa.pm || (this.aa.pm = setInterval(this.No, 80))
        },
        disableAutoResize: function() {
            this.K.Xs = t;
            this.aa.pm && (clearInterval(this.aa.pm),
            this.aa.pm = s)
        },
        enableBizAuthLogo: function() {
            this.K.dD = q;
            this.Wo && this.Wo.show()
        },
        disableBizAuthLogo: function() {
            this.K.dD = t;
            this.Wo && this.Wo.$()
        },
        enableMapClick: function() {
            this.K.Cm = q;
            var a = this;
            window.MPC_Mgr && window.MPC_Mgr[a.ca] ? window.MPC_Mgr[a.ca].open() : (setTimeout(function() {
                Za(Ba)
            }, 1E3),
            bb.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[a.ca] = new cb(a)
            }, q))
        },
        disableMapClick: function() {
            window.MPC_Mgr && window.MPC_Mgr[this.ca] && window.MPC_Mgr[this.ca].close();
            this.K.Cm = t
        },
        lp: function() {
            this.K.lp = q;
            this.Xn || (this.Xn = new BuildingLayer({
                t3: q
            }),
            this.Se(this.Xn))
        },
        vW: function() {
            this.K.lp = t;
            this.Xn && (this.fg(this.Xn),
            this.Xn = s,
            delete this.Xn)
        },
        ub: function() {
            return this.Ks && this.Ks instanceof O ? new O(this.Ks.width,this.Ks.height) : new O(this.Ya.clientWidth,this.Ya.clientHeight)
        },
        Fe: function(a) {
            a && a instanceof O ? (this.Ks = a,
            this.Ya.style.width = a.width + "px",
            this.Ya.style.height = a.height + "px") : this.Ks = s
        },
        Eb: function() {
            return ob(this.ee, this.K.Ma)
        },
        tv: u("ee"),
        ka: u("Xa"),
        JV: function() {
            this.No()
        },
        ko: function(a) {
            var b = this.K.hc
              , c = this.K.oc
              , e = t
              , a = Math.round(a);
            a < b && (e = q,
            a = b);
            a > c && (e = q,
            a = c);
            return {
                zoom: a,
                tD: e
            }
        },
        Ra: u("Ya"),
        uc: function(a, b) {
            a = fb(a, this.K.Ma);
            b = b || this.ka();
            return this.Cc.uc(a, b, this.Gb, this.ub(), this.Ob)
        },
        xo: function(a, b) {
            b = b || this.ka();
            return this.Cc.uc(a, b, this.Gb, this.ub(), this.Ob)
        },
        sg: function(a, b) {
            b = b || this.ka();
            return this.Cc.$b(a, b, this.Gb, this.ub(), this.Ob)
        },
        DT: function(a, b) {
            b = b || this.ka();
            return this.Cc.uy(a, b, this.Gb, this.ub())
        },
        uy: function(a, b) {
            return this.DT(a, b)
        },
        $b: function(a, b) {
            return ob(this.sg(a, b), this.K.Ma)
        },
        cf: function(a, b) {
            if (a) {
                var a = fb(a, this.K.Ma)
                  , c = this.xo(new N(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        tZ: function(a, b) {
            b = b || this.ka();
            return this.Cc.uZ(a, b, this.Gb, this.ub(), this.Ob)
        },
        sZ: function(a, b) {
            if (a) {
                var c = this.tZ(new N(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        DN: function(a, b) {
            if (a) {
                var c = new T(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.$b(c, b)
            }
        },
        yT: function(a, b) {
            if (a) {
                var c = new T(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.sg(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Ob;
            this.Ua === Ya && c && pb.CK(a, this, b)
        },
        B5: function(a, b) {
            var c = map.Ob;
            this.Ua === Ya && c && pb.BK(a, this, b)
        },
        C5: function(a, b) {
            var c = this
              , e = map.Ob;
            c.Ua === Ya && e && pb.CK(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        z5: function(a, b) {
            var c = map.Ob;
            this.Ua === Ya && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            pb.BK(a, this, b))
        },
        Jd: function(a) {
            if (!this.Ft())
                return new qb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || s
              , b = this.$b({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.$b({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new qb(b,a)
        },
        yX: function(a) {
            if (!this.Ft())
                return new qb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || s
              , b = this.uy({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.uy({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new qb(b,a)
        },
        Ft: function() {
            return !!this.loaded
        },
        aS: function(a, b) {
            for (var c = this.wa(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.sf(), k = c = c.Xe(); k >= i; k--) {
                var m = this.wa().Ub(k);
                if (a.XF().lng / m < this.width - g && a.XF().lat / m < this.height - e)
                    break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        ut: function(a, b) {
            var c = {
                center: this.Eb(),
                zoom: this.ka()
            };
            if (!a || !a instanceof qb && 0 === a.length || a instanceof qb && a.Dj())
                return c;
            var e = [];
            a instanceof qb ? (e.push(a.ze()),
            e.push(a.Ld())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
                var k = fb(e[g], this.K.Ma);
                f.push(this.Cc.vi(k, this.Ob))
            }
            e = new qb;
            for (g = f.length - 1; 0 <= g; g--)
                e.extend(f[g]);
            if (e.Dj())
                return c;
            c = e.Eb();
            f = this.aS(e, b);
            b.margins && (e = b.margins,
            g = (e[1] - e[3]) / 2,
            e = (e[0] - e[2]) / 2,
            i = this.wa().Ub(f),
            b.offset && (g = b.offset.width,
            e = b.offset.height),
            c.lng += i * g,
            c.lat += i * e);
            c = this.Cc.Bh(c, this.Ob);
            return {
                center: ob(new N(c.lng,c.lat), this.K.Ma),
                zoom: f
            }
        },
        Rg: function(a, b) {
            var c;
            c = a && a.center ? a : this.ut(a, b);
            var b = b || {}
              , e = b.delay || 200;
            if (c.zoom === this.Xa && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.Di(c.center, {
                        duration: 210
                    })
                }, e)
            } else
                this.dd(c.center, c.zoom)
        },
        Zf: u("ae"),
        uh: function() {
            return this.aa.vb && this.aa.vb.bb() ? this.aa.vb : s
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.Tb(b))
                    return 0;
                var c = this.K ? this.K.Ma : 5
                  , a = fb(a, c)
                  , b = fb(b, c)
                  , c = 0
                  , c = U.Jk(a, b);
                if (c === s || c === l)
                    c = 0;
                return c
            }
        },
        Ax: function() {
            var a = []
              , b = this.sa
              , c = this.He;
            if (b)
                for (var e in b)
                    b[e]instanceof rb && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++)
                    a.push(c[e])
            }
            return a
        },
        wa: function() {
            this.Ua.AF(this.K.Ma);
            return this.Ua
        },
        qY: u("Fd"),
        Yu: function() {
            for (var a = this.aa.eF; a < C.Sr.length; a++)
                C.Sr[a](this);
            this.aa.eF = a
        },
        tF: function(a) {
            this.Ob = Ya.Hk(a);
            this.Sw = Ya.wL(this.Ob);
            this.Ua === Ya && this.Cc instanceof sb && (this.Cc.pj = this.Ob)
        },
        setDefaultCursor: function(a) {
            this.K.zc = a;
            this.platform && (this.platform.style.cursor = this.K.zc)
        },
        getDefaultCursor: function() {
            return this.K.zc
        },
        setDraggingCursor: function(a) {
            this.K.Hd = a
        },
        getDraggingCursor: function() {
            return this.K.Hd
        },
        Mx: function() {
            return this.K.WW && 1.5 <= this.K.devicePixelRatio
        },
        VB: function(a, b) {
            b ? this.Rh[b] || (this.Rh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof tb && (this.Rh[b][a.ca] = a,
            a.xa(this));
            var c = this;
            bb.load("hotspot", function() {
                c.Yu()
            }, q)
        },
        m_: function(a, b) {
            b || (b = "custom");
            this.Rh[b][a.ca] && delete this.Rh[b][a.ca]
        },
        Uw: function(a) {
            a || (a = "custom");
            this.Rh[a] = {}
        },
        hv: function() {
            var a = this.Ua.sf()
              , b = this.Ua.Xe()
              , c = this.K;
            c.hc = c.dP || a;
            c.oc = c.cP || b;
            c.hc < a && (c.hc = a);
            c.oc > b && (c.oc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.K.oc && (a = this.K.oc);
            this.K.dP = a;
            this.HJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.K.hc && (a = this.K.hc);
            this.K.cP = a;
            this.HJ()
        },
        HJ: function() {
            this.hv();
            var a = this.K;
            this.Xa < a.hc ? this.Vc(a.hc) : this.Xa > a.oc && this.Vc(a.oc);
            var b = new Q("onzoomspanchange");
            b.hc = a.hc;
            b.oc = a.oc;
            this.dispatchEvent(b)
        },
        r4: u("PB"),
        getKey: function() {
            return qa
        },
        P_: function(a) {
            function b(a) {
                c.k0 = a;
                if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
                    var b = window._BMapSecurityConfig.serviceHost + "custom/v2/mapstyle"
                      , g = "qt=custom_v2&version=4&";
                else
                    b = C.bd + "custom/v2/mapstyle",
                    g = "qt=custom_v2&version=4&ak=" + qa + "&";
                g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.PF(a, f)));
                a = ub(b + "?" + g);
                g = a.substring(a.indexOf("?") + 1);
                vb(b, g, window[e + "cb"])
            }
            var c = this
              , e = this.ca;
            Wa(Xa(1, 2, 1), ["instance", "custom_style", "vector"]);
            this.Hy(t);
            this.K.qZ = q;
            window.MPC_Mgr && window.MPC_Mgr[c.ca] && window.MPC_Mgr[c.ca].close();
            c.K.Cm = t;
            this.addEventListener("hidecopyright", function() {
                c.zk.$();
                c.K.gp = !!a.customEditor;
                c.K.gp === t && c.sF(new O(1,1))
            });
            c.zk && c.zk.$();
            this.K.gp = !!a.customEditor;
            this.K.i6 = !!a.sharing;
            this.K.N5 = !!a.preview;
            this.K.gp === t && this.sF(new O(1,1));
            bb.load("hotspot", function() {
                c.Yu()
            }, q);
            window[e + "zoomRegion"] = {};
            window.X6 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.ka();
            w.extend({}, a);
            window[e + "cb"] = function(a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style,
                window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style,
                c.ZO(),
                c.UY())
            }
            ;
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.PX(a.styleId, g, b)
            } else
                b(a.styleJson);
            window.iconSetInfo_high || ra(C.url.proto + C.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        PX: function(a, b, c) {
            var e = this
              , f = this.ca
              , g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function(a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.py(a.content.data.json));
                c && c(b)
            }
            ;
            window[f + "_cbk_si_api" + g] = function(a) {
                var b = [];
                0 === a.status && (b = a.info ? e.py(a.info.json) : e.py(a.data.json));
                c && c(b)
            }
            ;
            var i = "/apiconsole/custommap/";
            if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
                var k = window._BMapSecurityConfig.serviceHost + "?qt=custom_map&v=3.0"
                  , k = k + ("&style_id=" + a + "&type=publish");
            else
                k = C.bd + "?qt=custom_map&v=3.0",
                k += "&style_id=" + a + "&type=publish&ak=" + qa;
            k += "&callback=" + f + "_cbk_si_phpui" + g;
            switch (b) {
            case "jsapi":
                i = k;
                break;
            case "sharing":
                i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
                break;
            case "preview":
                i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
            }
            ra(i)
        },
        pW: function() {
            Array.prototype.map || (Array.prototype.map = function(a, b) {
                var c, e, f;
                this == s && aa(new TypeError(" this is null or not defined"));
                var g = Object(this)
                  , i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i; ) {
                    var k;
                    f in g && (k = g[f],
                    k = a.call(c, k, f, g),
                    e[f] = k);
                    f++
                }
                return e
            }
            )
        },
        py: function(a) {
            if (a === s || "" === a)
                return [];
            this.pW();
            var b = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            }
              , c = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon",
                "g.tf": "geometry.fill"
            };
            return a.split(",").map(function(a) {
                var a = a.split("|").map(function(a) {
                    var e = b[a.split(":")[0]]
                      , a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                    switch (a) {
                    case "poi":
                        a = "poilabel";
                        break;
                    case "districtlabel":
                        a = "districtlabel"
                    }
                    var f = {};
                    f[e] = a;
                    return f
                })
                  , f = a[0]
                  , g = 1;
                a[1].elementType && (g = 2,
                w.extend(f, a[1]));
                for (var i = {}; g < a.length; g++)
                    w.extend(i, a[g]);
                return w.extend(f, {
                    stylers: i
                })
            })
        },
        vY: function() {
            return this.ef.ng
        },
        c4: function(a, b) {
            var c = this
              , e = this.ca
              , f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function(b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.T0(b, a);
                c.ZO(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            }
            ;
            if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
                var g = window._BMapSecurityConfig.serviceHost + "custom/v2/mapstyle"
                  , i = "qt=custom_v2&";
            else
                g = C.bd + "custom/v2/mapstyle",
                i = "qt=custom_v2&ak=" + qa + "&";
            i += "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.PF(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.PF(c.k0, parseInt(a, 10))));
            i = ub(g + "?" + i);
            i = i.substring(i.indexOf("?") + 1);
            vb(g, i, window[e + "_cbk" + f])
        },
        sF: function(a, b) {
            var c = new Q("oncopyrightoffsetchange",{
                HE: a,
                dW: b
            });
            this.K.GK = b;
            this.dispatchEvent(c)
        },
        hu: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ca] && window.MPC_Mgr[b.ca].close();
            b.K.Cm = t;
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.l0(a.styleJson));
                M() && w.fa.Dy ? setTimeout(function() {
                    b.K.Ce = a;
                    b.dispatchEvent(new Q("onsetcustomstyles",a))
                }, 50) : (this.K.Ce = a,
                this.dispatchEvent(new Q("onsetcustomstyles",a)),
                this.qM(b.K.Ce.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = q);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = q);
                Za(5050, c);
                a.style && (c = b.K.wC[a.style] ? b.K.wC[a.style].backColor : b.K.wC.normal.backColor) && (this.Ra().style.backgroundColor = c)
            }
        },
        NY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new wb,
                scaleControl: new xb,
                overviewMapControl: new yb,
                mapTypeControl: new zb
            });
            var b = this, c;
            for (c in this.controls)
                b.SN(b.controls[c]);
            a = a || [];
            w.mc.Pb(a, function(a) {
                b.Ro(b.controls[a])
            })
        },
        qM: function(a) {
            a ? this.Is && this.Is.Jf === a || (this.fg(this.Is),
            this.Is = new Ab({
                geotableId: a
            }),
            this.Se(this.Is)) : this.fg(this.Is)
        },
        Td: function() {
            var a = this.ka() >= this.K.dG && this.wa() === Ta && 18 >= this.ka()
              , b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = q
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.oh,
                code: this.ts
            }
        },
        jt: function() {
            this.V.po();
            return this.V
        },
        RY: function(a) {
            Ta.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.$e = a;
            this.dispatchEvent(b);
            this.K.Yf = t
        },
        UY: function(a) {
            if (this.K.Yf) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else
                b = new Q("oninitindoorlayer"),
                b.$e = a,
                this.dispatchEvent(b),
                this.K.Yf = q,
                this.K.Ck = q
        },
        Hy: function(a) {
            this.K.SE = a;
            this.ef.Kb || (this.ef.Kb = this.ef.Fj[0].Kb);
            this.ef.Kb.parentElement.style.display = a ? "block" : "none"
        },
        jO: function(a) {
            this.ef.ng.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.V = a;
            this.V.xF(this)
        },
        PF: function(a, b) {
            for (var c = this.ca, e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }, f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.f"
            }, g = [], i = this.Ua.sf(); i <= this.Ua.Xe(); i++)
                window[c + "zoomFrontStyle"][i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0, k; k = a[i]; i++)
                if (!this.aZ(k)) {
                    b = this.JX(k, b);
                    if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers && (!k.stylers.visibility || "off" !== k.stylers.visibility))
                        k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color);
                    "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color,
                    window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color),
                    "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                    "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
                    k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
                    "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
                    var m = {};
                    w.extend(m, k);
                    k = m.stylers;
                    delete m.stylers;
                    w.extend(m, k);
                    k = [];
                    for (var n in e)
                        if (m[n] && !this.YY(n))
                            if ("elementType" === n)
                                k.push(e[n] + ":" + f[m[n]]);
                            else {
                                switch (m[n]) {
                                case "poilabel":
                                    m[n] = "poi";
                                    break;
                                case "districtlabel":
                                    m[n] = "label"
                                }
                                k.push(e[n] + ":" + m[n])
                            }
                    2 < k.length && g.push(k.join("|"))
                }
            return g.join(",")
        },
        l0: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                w.extend(g, i);
                var i = [], k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k)
                            i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                            case "poilabel":
                                g[k] = "poi";
                                break;
                            case "districtlabel":
                                g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        JX: function(a) {
            a = a.stylers.level;
            return a === l ? "main" : parseInt(a, 10)
        },
        aZ: function(a) {
            var b = {};
            w.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return w.sE(b) ? q : t
        },
        R4: function(a, b) {
            var c = a.stylers.level;
            return c === l ? q : c === b + "" ? q : t
        },
        YY: function(a) {
            return {
                curZoomRegionId: q,
                curZoomRegion: q
            }[a] ? q : t
        },
        s4: function(a, b) {
            var c = a.stylers.level
              , e = {};
            w.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = q);
            return e
        },
        T0: function(a, b) {
            var c = this.ca;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b])
                for (var e = this.Ua.sf(), f = this.Ua.Xe(); e <= f; e++)
                    window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
        },
        ZO: function() {
            var a = this.ca;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
                for (var b = this.Ua.sf(); b <= this.Ua.Xe(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor)
                for (b = this.Ua.sf(); b <= this.Ua.Xe(); b++)
                    window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
                for (b = this.Ua.sf(); b <= this.Ua.Xe(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
                for (b = this.Ua.sf(); b <= this.Ua.Xe(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
                for (b = this.Ua.sf(); b <= this.Ua.Xe(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        O2: function(a, b) {
            var c = {};
            w.extend(c, a);
            if (c[b]) {
                for (var e = this.Ua.sf(), f = this.Ua.Xe(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = q;
                        break
                    }
                delete c[b]
            }
            return c
        },
        O4: function(a) {
            return a.Dt || "0" === a.uid ? t : q
        },
        NV: function() {
            delete this.Ti.c_
        },
        T2: function() {
            this.Ti = {}
        },
        Qo: function(a, b, c) {
            if (!this.K.gp)
                return t;
            a = a || "sp" + this.aa.l6++;
            if (b && 0 !== b.length)
                return c = c || {},
                this.Ti[a] = this.Ti[a] || {
                    polygon: [],
                    polyline: []
                },
                this.Ti = this.Ti || {},
                this.Ti[a][c.type].push({
                    KF: b,
                    bc: c.bc,
                    type: c.type,
                    style: c.style
                }),
                a
        },
        n1: function(a) {
            return Bb / Math.pow(2, 18 - a)
        }
    });
    var Bb = 4.007545274461451E7
      , Qa = 1;
    function Za(a, b) {
        if (a) {
            var b = b || {}, c = "", e;
            for (e in b)
                c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (Cb = q,
                setTimeout(function() {
                    Db.src = C.bd + "images/blank.gif?" + a.src
                }, 50))
            }
              , g = function() {
                var a = Eb.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            Cb ? Eb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + C.version + "&sub_product_v=" + C.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + C.version + "&sub_product_v=" + C.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            Fb || (w.U(Db, "load", function() {
                Cb = t;
                g()
            }),
            w.U(Db, "error", function() {
                Cb = t;
                g()
            }),
            Fb = q)
        }
    }
    var Cb, Fb, Eb = [], Db = new Image;
    Za(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    C.kM = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            other: ["api.map.baidu.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "maponline0.bdimg.com"
    };
    C.FY = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "maponline0.bdimg.com"
    };
    C.U0 = {
        "0": {
            proto: "http://",
            domain: C.FY
        },
        1: {
            proto: "https://",
            domain: C.kM
        },
        2: {
            proto: "https://",
            domain: C.kM
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    C.Hu = window.HOST_TYPE || "0";
    C.url = C.U0[C.Hu];
    C.Sp = C.url.proto + C.url.domain.baidumap + "/";
    C.bd = window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? window._BMapSecurityConfig.serviceHost : C.url.proto + ("2" == C.Hu ? C.url.domain.main_domain_nocdn.other : C.url.domain.main_domain_nocdn.baidu) + "/";
    C.oa = C.url.proto + ("2" == C.Hu ? C.url.domain.main_domain_cdn.other[0] : C.url.domain.main_domain_nocdn.baidu) + "/";
    C.mj = C.url.proto + C.url.domain.main_domain_cdn.webmap[0] + "/";
    // C.EN = C.url.proto + C.url.domain.panoVerify + "/";
    C.EN = '';
    C.vh = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = C.bd + b;
            break;
        case "main_domain_cdn":
            c = C.oa + b;
            break;
        default:
            e = C.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [],
            w.mc.Pb(e, function(a, e) {
                c[e] = C.url.proto + a + "/" + b
            })) : c = C.url.proto + C.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function Gb(a) {
        var b = {
            duration: 1E3,
            Mc: 30,
            ip: 0,
            cc: Hb.RM,
            Ut: ba()
        };
        this.hg = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.m = b;
        if (gb(b.ip)) {
            var e = this;
            setTimeout(function() {
                e.start()
            }, b.ip)
        } else
            b.ip != Ib && this.start()
    }
    var Ib = "INFINITE";
    Gb.prototype.start = function() {
        this.$u = mb();
        this.Xz = this.$u + this.m.duration;
        Jb(this)
    }
    ;
    Gb.prototype.add = function(a) {
        this.hg.push(a)
    }
    ;
    function Jb(a) {
        var b = mb();
        b >= a.Xz ? (hb(a.m.za) && a.m.za(a.m.cc(1)),
        hb(a.m.finish) && a.m.finish(),
        0 < a.hg.length && (b = a.hg[0],
        b.hg = [].concat(a.hg.slice(1)),
        b.start())) : (a.Ey = a.m.cc((b - a.$u) / a.m.duration),
        hb(a.m.za) && a.m.za(a.Ey),
        a.RF || (a.hs = setTimeout(function() {
            Jb(a)
        }, 1E3 / a.m.Mc)))
    }
    Gb.prototype.stop = function(a) {
        this.RF = q;
        for (var b = 0; b < this.hg.length; b++)
            this.hg[b].stop(),
            this.hg[b] = s;
        this.hg.length = 0;
        this.hs && (clearTimeout(this.hs),
        this.hs = s);
        this.m.Ut(this.Ey);
        a && (this.Xz = this.$u,
        Jb(this))
    }
    ;
    Gb.prototype.cancel = ga(0);
    var Hb = {
        RM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        bD: function(a) {
            return a * a
        },
        $C: function(a) {
            return Math.pow(a, 3)
        },
        Vs: function(a) {
            return -(a * (a - 2))
        },
        $K: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        aD: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        i3: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        j3: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    Hb["ease-in"] = Hb.bD;
    Hb["ease-out"] = Hb.Vs;
    var L = {
        pG: 34,
        qG: 21,
        rG: new O(21,32),
        tP: new O(10,32),
        sP: new O(24,36),
        rP: new O(12,36),
        nG: new O(13,1),
        ra: C.oa + "images/",
        I4: "http://mapapip0.bdimg.com/images/",
        oG: C.oa + "images/markers_new.png",
        pP: 24,
        qP: 73,
        pC: {
            "\u5317\u4eac": {
                ty: "bj",
                o: new N(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                ty: "sh",
                o: new N(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                ty: "sz",
                o: new N(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                ty: "gz",
                o: new N(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    w.fa.Ve ? (w.extend(L, {
        LK: "url(" + L.ra + "ruler.cur),crosshair",
        zc: "-moz-grab",
        Hd: "-moz-grabbing"
    }),
    w.platform.DM && (L.fontFamily = "arial,simsun,sans-serif")) : w.fa.Rw || w.fa.Dy ? w.extend(L, {
        LK: "url(" + L.ra + "ruler.cur) 2 6,crosshair",
        zc: "url(" + L.ra + "openhand.cur) 8 8,default",
        Hd: "url(" + L.ra + "closedhand.cur) 8 8,move"
    }) : w.extend(L, {
        LK: "url(" + L.ra + "ruler.cur),crosshair",
        zc: "url(" + L.ra + "openhand.cur),default",
        Hd: "url(" + L.ra + "closedhand.cur),move"
    });
    function Kb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function Lb(a) {
        0 < w.fa.na ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function Mb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Nb(a, b) {
        w.R.Sx(a, "beforeEnd", b);
        return a.lastChild
    }
    function Ob(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function oa(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = q
    }
    function Pb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function pa(a) {
        oa(a);
        return Pb(a)
    }
    function Qb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Rb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Sb(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , e;
        for (e in a)
            c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function I(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return w.R.rF(e, b || {})
    }
    function eb(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, s)
    }
    function hb(a) {
        return "function" === typeof a
    }
    function gb(a) {
        return "number" === typeof a
    }
    function ib(a) {
        return "string" == typeof a
    }
    function Tb(a) {
        return "undefined" != typeof a
    }
    function Ub(a) {
        return "object" == typeof a
    }
    var Vb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Wb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1
              , f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e,
            f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++)
            e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++)
            e = b.substr(5 * c, 5),
            f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Xb(a) {
        var b = "", c, e, f = "", g, i = "", k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Vb.indexOf(a.charAt(k++)),
            e = Vb.indexOf(a.charAt(k++)),
            g = Vb.indexOf(a.charAt(k++)),
            i = Vb.indexOf(a.charAt(k++)),
            c = c << 2 | e >> 4,
            e = (e & 15) << 4 | g >> 2,
            f = (g & 3) << 6 | i,
            b += String.fromCharCode(c),
            64 != g && (b += String.fromCharCode(e)),
            64 != i && (b += String.fromCharCode(f));
        while (k < a.length);
        return b
    }
    var Q = w.lang.Qu;
    function M() {
        var a = navigator.userAgent;
        return -1 < a.indexOf("iPhone") || -1 < a.indexOf("iPad") || -1 < a.indexOf("Android") || -1 < a.indexOf("Harmony") ? q : t
    }
    function db() {
        return !(!w.platform.DM && !w.platform.wM && !w.platform.gZ)
    }
    function mb() {
        return (new Date).getTime()
    }
    function Yb(a) {
        a = a.split("//");
        if (2 <= a.length) {
            var b = a[1].split("?");
            if (1 <= b.length) {
                var c = b[0].split("/")
                  , e = 1;
                window.urlSplitBeginIndex && (e = window.urlSplitBeginIndex);
                var f = e
                  , e = b.length - 1
                  , g = "/"
                  , i = c.length;
                f || (f = 0);
                e || (e = i - 1);
                g || (g = "");
                if (f > i - 1 || e > i - 1)
                    e = "";
                else {
                    for (i = ""; f <= e; f++)
                        i = f === e ? i + c[f] : i + (c[f] + g);
                    e = i
                }
                return {
                    host: b[0],
                    origin: a[0] + "//" + c[0],
                    path: "/" + e
                }
            }
        }
        return s
    }
    function Zb() {
        var a = document.body.appendChild(I("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : q;
        a.parentNode.removeChild(a);
        return b
    }
    function $b() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function ac() {
        return !!I("canvas").getContext
    }
    function bc(a) {
        return a * Math.PI / 180
    }
    C.mZ = function() {
        var a = q
          , b = q
          , c = q
          , e = q
          , f = 0
          , g = 0
          , i = 0
          , k = 0;
        return {
            XQ: function() {
                f += 1;
                a && (a = t,
                setTimeout(function() {
                    Za(5054, {
                        pic: f
                    });
                    a = q;
                    f = 0
                }, 1E4))
            },
            M1: function() {
                g += 1;
                b && (b = t,
                setTimeout(function() {
                    Za(5055, {
                        move: g
                    });
                    b = q;
                    g = 0
                }, 1E4))
            },
            O1: function() {
                i += 1;
                c && (c = t,
                setTimeout(function() {
                    Za(5056, {
                        zoom: i
                    });
                    c = q;
                    i = 0
                }, 1E4))
            },
            N1: function(a) {
                k += a;
                e && (e = t,
                setTimeout(function() {
                    Za(5057, {
                        tile: k
                    });
                    e = q;
                    k = 0
                }, 5E3))
            }
        }
    }();
    C.Iq = {
        FG: "#83a1ff",
        Kq: "#808080"
    };
    function cc(a, b, c) {
        b.KE || (b.KE = [],
        b.handle = {});
        b.KE.push({
            filter: c,
            Zs: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                dc(b.KE, function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.Zs.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t),
        b.handle.click = q)
    }
    function dc(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            b(c, a[c])
    }
    function ec(a) {
        var b = window.TILE_VERSION
          , c = "20190410";
        b && b.ditu && (b = b.ditu,
        b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    var fc = [72.6892532, 0.1939743381, 136.1168614, 54.392257]
      , gc = [72.69566833, 0.1999420909, 136.1232863, 54.39791217]
      , hc = 158
      , ic = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363]
      , jc = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886]
      , kc = 95
      , lc = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171]
      , mc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128]
      , nc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687]
      , oc = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563]
      , pc = 3E3
      , qc = 2.0E-5
      , rc = 3.0E-6
      , sc = 0.0174532925194
      , tc = 0.0065
      , uc = 0.006
      , vc = 4E4
      , wc = 0
      , xc = 3
      , yc = 1.0E-10
      , zc = 6370996.81
      , Ac = 1E8;
    function Bc(a, b, c) {
        for (var e = hc, f = 0; f < e; f += 2)
            if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1])
                return q;
        return t
    }
    function Cc(a) {
        var b = a.lng
          , c = a.lat
          , a = Math.sqrt(b * b + c * c) + Math.sin(c * pc * sc) * qc
          , b = Math.atan2(c, b) + Math.cos(b * pc * sc) * rc;
        return {
            lng: a * Math.cos(b) + tc,
            lat: a * Math.sin(b) + uc
        }
    }
    function Dc(a) {
        var b = Ec
          , c = {}
          , e = a.lng
          , f = a.lat
          , g = 1
          , i = a.lng
          , k = a.lat
          , m = e - g
          , n = 0
          , o = f + g
          , p = 0
          , v = e - g
          , z = 0
          , B = f - g
          , A = 0
          , D = e + g
          , F = 0
          , G = f - g
          , H = 0
          , E = e + g
          , J = 0
          , K = f + g
          , P = 0
          , o = m = 0
          , o = Fc(b, e, f)
          , m = o.lng
          , o = o.lat;
        if (1.0E-6 >= Gc(m, o, i, k))
            return c.lng = e,
            c.lat = f,
            c;
        for (; ; ) {
            m = e - g;
            o = f + g;
            v = e - g;
            B = f - g;
            D = e + g;
            G = f - g;
            E = e + g;
            K = f + g;
            e = Fc(b, m, o);
            n = e.lng;
            p = e.lat;
            e = Fc(b, v, B);
            z = e.lng;
            A = e.lat;
            e = Fc(b, D, G);
            F = e.lng;
            H = e.lat;
            e = Fc(b, E, K);
            J = e.lng;
            P = e.lat;
            e = Gc(n, p, i, k);
            n = Gc(z, A, i, k);
            z = Gc(F, H, i, k);
            J = Gc(J, P, i, k);
            if (1.0E-6 > e)
                return c.lng = m,
                c.lat = o,
                c;
            if (1.0E-6 > n)
                return c.lng = v,
                c.lat = B,
                c;
            if (1.0E-6 > z)
                return c.lng = D,
                c.lat = G,
                c;
            if (1.0E-6 > J)
                return c.lng = E,
                c.lat = K,
                c;
            F = 1 / e;
            n = 1 / n;
            z = 1 / z;
            J = 1 / J;
            e = (m * F + v * n + D * z + E * J) / (F + n + z + J);
            f = (o * F + B * n + G * z + K * J) / (F + n + z + J);
            o = Fc(b, e, f);
            m = o.lng;
            o = o.lat;
            if (1.0E-6 >= Gc(m, o, i, k))
                return c.lng = e,
                c.lat = f,
                c;
            g *= 0.6;
            if (1.0E-6 > g) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
                    g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
                    i = a.lng * Ac;
                    k = a.lat * Ac;
                    B = 1.0E-4 * Ac;
                    m = i - B;
                    o = i + B;
                    v = k - B;
                    D = k + B;
                    F = n = z = J = l;
                    E = n = B = G = z = J = 0;
                    b(a);
                    F = l;
                    for (K = 0; K <= c; K++) {
                        for (e = 0; e <= g; e++)
                            if (F = b(l),
                            J = l.lng * Ac,
                            z = l.lat * Ac,
                            n = F.lng * Ac,
                            F = F.lat * Ac,
                            !(n < m || F < v || n > o || F > D)) {
                                J -= n;
                                z -= F;
                                n = Math.sqrt((i - n) * (i - n) + (k - F) * (k - F));
                                if (1 > n) {
                                    c = {};
                                    c.lng = l.lng;
                                    c.lat = l.lat;
                                    break a
                                }
                                G += 1 * J / n;
                                B += 1 * z / n;
                                E += 1 / n
                            }
                        G /= E * Ac;
                        B /= E * Ac
                    }
                    b = G * Ac / Ac;
                    g = B * Ac / Ac;
                    c = {};
                    c.lng = a.lng + b;
                    c.lat = a.lat + g
                }
                return c
            }
        }
    }
    function Fc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }
    function Hc(a, b, c, e) {
        var f = arguments.length;
        this.Ig = {};
        this.Pg = {};
        0 !== f && 4 === f && this.normalize(a, b, c, e)
    }
    Hc.prototype.contains = function(a) {
        return a.lng > this.Ig.lng && a.lng < this.Pg.lng && a.lat > this.Ig.lat && a.lat < this.Pg.lat ? xc : Math.abs(a.lng - this.Ig.lng) < yc || Math.abs(a.lng - this.Pg.lng) < yc || Math.abs(a.lat - this.Ig.lat) < yc || Math.abs(a.y - this.Pg.lat) > yc ? 2 : wc
    }
    ;
    Hc.prototype.normalize = function(a, b, c, e) {
        a > c ? (this.Ig.lng = c,
        this.Pg.lng = a) : (this.Ig.lng = a,
        this.Pg.lng = c);
        b > e ? (this.Ig.lat = e,
        this.Pg.lat = b) : (this.Ig.lat = b,
        this.Pg.lat = e)
    }
    ;
    function Ic(a, b, c, e) {
        this.su = {
            lng: a,
            lat: b
        };
        this.jx = {
            lng: c,
            lat: e
        };
        this.fy = new Hc(a,b,c,e)
    }
    function Jc(a, b) {
        var c = a.lat * sc
          , e = b.lat * sc
          , f = c - e
          , g = a.lng * sc - b.lng * sc;
        return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2))) * zc
    }
    function Gc(a, b, c, e) {
        return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
    }
    function Kc(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }
    function Ec(a) {
        var b = {};
        if (a.lng < fc[0] - 0.4 || a.lat < fc[1] - 0.4 || a.lng > fc[2] + 0.4 || a.lat > fc[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (Bc(a, nc, oc))
            return b = Cc(a);
        for (var b = 0, c = vc, e = 0, f = new Hc, g = 0, e = 0; e < kc; ++e)
            mc[e] <= a.lat ? mc[(e + 1) % kc] > a.lat && 0 < Kc({
                lng: lc[e],
                lat: mc[e]
            }, {
                lng: lc[(e + 1) % kc],
                lat: mc[(e + 1) % kc]
            }, a) && ++g : mc[(e + 1) % kc] <= a.lat && 0 > Kc({
                lng: lc[e],
                lat: mc[e]
            }, {
                lng: lc[(e + 1) % kc],
                lat: mc[(e + 1) % kc]
            }, a) && --g;
        if ((0 === g ? wc : xc) === wc) {
            for (g = 0; g < kc; ++g)
                if (e = new Ic(lc[g],mc[g],lc[(g + 1) % kc],mc[(g + 1) % kc]),
                f.Ig.lng = e.fy.Ig.lng - 0.5,
                f.Ig.lat = e.fy.Ig.lat - 0.5,
                f.Pg.lng = e.fy.Pg.lng + 0.5,
                f.Pg.lat = e.fy.Pg.lat + 0.5,
                f.contains(a) !== wc) {
                    var i;
                    var k = e.su.lng
                      , m = e.su.lat
                      , n = e.jx.lng
                      , o = e.jx.lat;
                    i = o - m;
                    var p = k - n;
                    !(Math.abs(i - 0) > yc) && !(Math.abs(p - 0) > yc) ? i = e.su : (k = n * m - k * o,
                    m = p * a.lng - i * a.lat,
                    n = i * i - p * p,
                    i = {
                        lng: (p * m - i * k) / n,
                        lat: -(i * m + p * k) / n
                    });
                    p = 180;
                    k = 90;
                    m = -180;
                    n = -90;
                    n = e.su;
                    o = e.jx;
                    p = n.lng < o.lng ? n.lng : o.lng;
                    k = n.lat < o.lat ? n.lat : o.lat;
                    m = n.lng < o.lng ? n.lng : o.lng;
                    n = n.lat < o.lat ? n.lat : o.lat;
                    i.lng <= m && i.lng >= p && i.lng <= n && i.lat >= k ? (e = a.lat * sc,
                    p = a.lng * sc,
                    k = i.lat * sc,
                    i = i.lng * sc,
                    m = Math.cos(e) * Math.cos(k),
                    e = m * Math.cos(p) * Math.cos(i) + m * Math.sin(p) * Math.sin(i) + Math.sin(e) * Math.sin(k),
                    -1 > e ? e = -1 : 1 < e && (e = 1),
                    e = Math.acos(e) * zc) : (i = Jc(a, e.su),
                    e = Jc(a, e.jx),
                    e = i < e ? i : e);
                    e < c && (c = e)
                }
            c < vc && (b = (vc - c) / vc)
        } else
            b = 1;
        c = Cc(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }
    function Lc(a) {
        var b = {};
        if (a.lng < gc[0] - 0.4 || a.lat < gc[1] - 0.4 || a.lng > gc[2] + 0.4 || a.lat > gc[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (Bc(a, ic, jc)) {
            var b = a.lng - tc
              , c = a.lat - uc
              , a = Math.sqrt(b * b + c * c) - Math.sin(c * pc * sc) * qc
              , b = Math.atan2(c, b) - Math.cos(b * pc * sc) * rc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = Ec(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng,
        b.lat = a.lat,
        b) : Dc(a)
    }
    function fb(a, b) {
        if (b === Oa && a instanceof R) {
            var c = Ec(a);
            return new N(c.lng,c.lat)
        }
        return a
    }
    function ob(a, b) {
        if (b === Oa && a instanceof N) {
            var c = Lc(a);
            return new R(c.lng,c.lat)
        }
        return b === Na && a instanceof N ? new R(a.lng,a.lat) : a
    }
    function Mc(a, b) {
        switch (b) {
        case Oa:
            var c = Ec(a);
            return new R(c.lng,c.lat);
        case 3:
            return c = Ec(a),
            new R(c.lng,c.lat);
        default:
            return a
        }
    }
    function Nc(a) {
        switch (window.BMap.coordType) {
        case Oa:
            return a = Lc(a),
            new R(a.lng,a.lat);
        case 3:
            return a = Lc(a),
            new R(a.lng,a.lat);
        default:
            return a
        }
    }
    function Xa(a, b, c) {
        return 50331648 | (a || 0) << 16 | (b || 0) << 8 | (c || 0)
    }
    ;function ra(a, b, c) {
        if (/^http/.test(a)) return; //如果是调用外部资源就退出去

        if (b) {
            var e = (1E5 * Math.random()).toFixed(0);
            C._rd["_cbk" + e] = function(a) {
                a.result && a.result.error && 403 === a.result.error ? C.Tp !== s && C.Tp.update("\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002") : (b && b(a),
                delete C._rd["_cbk" + e])
            }
            ;
            a += "&callback=BMap._rd._cbk" + e
        }
        // c || (a = ub(a));
        var f = I("script", {
            type: "text/javascript"
        });
        f.charset = "utf-8";
        f.src = a;
        f.addEventListener ? f.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : f.attachEvent && f.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(f);
            f = s
        }, 1)
    }
    function Oc(a) {
        if (localStorage)
            return localStorage.getItem(a) ? localStorage.getItem(a) : -1;
        if (sessionStorage)
            return sessionStorage.getItem(a) ? sessionStorage.getItem(a) : -1
    }
    function ub(a) {
        var b = decodeURIComponent(a.substring(a.indexOf("?") + 1))
          , c = (new Date).getTime()
          , e = window.___abvk ? window.___abvk : Oc("SECKEY_ABVK")
          , f = Oc("BMAP_SECKEY")
          , a = a + "&v=3.0&seckey=" + encodeURIComponent(e + "," + f) + "&timeStamp=" + c;
        return a += Pc()(b + ("&v=3.0&seckey=" + e + "," + f + "&timeStamp=" + c))
    }
    ;var Qc = {
        map: "xiuh4z",
        common: "jdu4vi",
        style: "yakao4",
        tile: "zkjyqy",
        groundoverlay: "jptq42",
        pointcollection: "tn4ktb",
        marker: "xqsdqz",
        symbol: "w1jzil",
        canvablepath: "pfckmr",
        vmlcontext: "3l45ql",
        markeranimation: "2h12ea",
        poly: "5z51sp",
        draw: "5fyb2u",
        drawbysvg: "yh0g4r",
        drawbyvml: "mmj2np",
        drawbycanvas: "eamhok",
        infowindow: "tchzem",
        oppc: "2v2h2z",
        opmb: "ghwtc5",
        menu: "cq2hll",
        control: "irdqqs",
        navictrl: "i24a4d",
        geoctrl: "nfofsh",
        copyrightctrl: "zbipz4",
        citylistcontrol: "x2lts5",
        scommon: "3jnbl3",
        local: "xujccx",
        route: "rpq3bc",
        othersearch: "kkdq00",
        mapclick: "daaawx",
        buslinesearch: "3cxqlt",
        hotspot: "nnwtr1",
        autocomplete: "xn3no2",
        coordtrans: "zkysge",
        coordtransutils: "kg0zgf",
        convertor: "ckisrh",
        clayer: "kzg1cj",
        pservice: "a4iffp",
        pcommon: "o0uget",
        panorama: "yhe03a",
        panoramaflash: "00suwi"
    };
    w.Sy = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Qc[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , e = "localStorage"in window && c !== s && c !== l;
        return {
            bZ: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--; )
                        m = c.key(k),
                        -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Qc[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Qc[f]) : t
            },
            sK: a
        }
    }();
    function bb() {}
    w.object.extend(bb, {
        Pj: {
            GG: -1,
            $P: 0,
            Eq: 1
        },
        zL: function() {
            var a = "canvablepath";
            if (!M() || !ac())
                $b() || (Zb() ? a = "vmlcontext" : ac());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        I5: {},
        xG: {
            lQ: window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? window._BMapSecurityConfig.serviceHost + "getmodules?v=3.0" : C.oa + "getmodules?v=3.0",
            JU: 5E3
        },
        JC: t,
        Vd: {
            Nl: {},
            Rn: [],
            lw: []
        },
        load: function(a, b, c) {
            var e = this.ob(a);
            if (e.Qe == this.Pj.Eq)
                c && b();
            else {
                if (e.Qe == this.Pj.GG) {
                    this.yK(a);
                    this.ON(a);
                    var f = this;
                    f.JC == t && (f.JC = q,
                    setTimeout(function() {
                        for (var a = [], b = 0, c = f.Vd.Rn.length; b < c; b++) {
                            var e = f.Vd.Rn[b]
                              , n = "";
                            ia.Sy.sK(e) ? n = ia.Sy.get(e) : (n = "",
                            a.push(e + "_" + Qc[e]));
                            f.Vd.lw.push({
                                fN: e,
                                OE: n
                            })
                        }
                        f.JC = t;
                        f.Vd.Rn.length = 0;

                        // console.log("打印所需模块") 
                        // console.log(a)//打印所需模块，这很重要！！！！！！
                        //0 == a.length ? f.fL() : ra(f.xG.lQ + "&mod=" + a.join(","))
                        // console.log(f.xG.lQ) //IE error
                        //引用本地下载好的模块文件资源
                    if (a.length > 0) {
                        for (let i = 0; i < a.length; i++) {
                            let mf='./static/modules/'+a[i]+'.js'
                            //let mf = bmapcfg.home + 'modules/' + a[i] + '.js';
                            ra(mf);
                            // console.log('加载模块文件：' + mf) //IE error
                        }
                    } else {
                        f.fL()//这里的函数DK(),根据你上面注释的那一行函数名而定
                    }
                    }, 1));
                    e.Qe = this.Pj.$P
                }
                e.dv.push(b)
            }
        },
        yK: function(a) {
            if (a && this.zL()[a])
                for (var a = this.zL()[a], b = 0; b < a.length; b++)
                    this.yK(a[b]),
                    this.Vd.Nl[a[b]] || this.ON(a[b])
        },
        ON: function(a) {
            for (var b = 0; b < this.Vd.Rn.length; b++)
                if (this.Vd.Rn[b] == a)
                    return;
            this.Vd.Rn.push(a)
        },
        s_: function(a, b) {
            var c = this.ob(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Qe = this.Pj.Eq;
            for (var f = 0, g = c.dv.length; f < g; f++)
                c.dv[f]();
            c.dv.length = 0
        },
        sK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Vd.Nl[a].Qe != c.Pj.Eq ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.xG.JU)
        },
        ob: function(a) {
            this.Vd.Nl[a] || (this.Vd.Nl[a] = {},
            this.Vd.Nl[a].Qe = this.Pj.GG,
            this.Vd.Nl[a].dv = []);
            return this.Vd.Nl[a]
        },
        remove: function(a) {
            delete this.ob(a)
        },
        GV: function(a, b) {
            for (var c = this.Vd.lw, e = q, f = 0, g = c.length; f < g; f++)
                "" == c[f].OE && (c[f].fN == a ? c[f].OE = b : e = t);
            e && this.fL()
        },
        fL: function() {
            for (var a = this.Vd.lw, b = 0, c = a.length; b < c; b++)
                this.s_(a[b].fN, a[b].OE);
            this.Vd.lw.length = 0
        }
    });
    function T(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    T.prototype.Tb = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function O(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    O.prototype.Tb = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function vb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, q);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = ba();
        e.onreadystatechange = function() {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        }
        ;
        e.send(b)
    }
    ;(function(a) {
        function b(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }
        function c(a, c, e, f, g, i) {
            return b(b(b(c, a), b(f, i)) << g | b(b(c, a), b(f, i)) >>> 32 - g, e)
        }
        function e(a, b, e, f, g, i, k) {
            return c(b & e | ~b & f, a, b, g, i, k)
        }
        function f(a, b, e, f, g, i, k) {
            return c(b & f | e & ~f, a, b, g, i, k)
        }
        function g(a, b, e, f, g, i, k) {
            return c(e ^ (b | ~f), a, b, g, i, k)
        }
        function i(a, i) {
            a[i >> 5] |= 128 << i % 32;
            a[(i + 64 >>> 9 << 4) + 14] = i;
            var k, m, n, o, p, H = 1732584193, E = -271733879, J = -1732584194, K = 271733878;
            for (k = 0; k < a.length; k += 16)
                m = H,
                n = E,
                o = J,
                p = K,
                H = e(H, E, J, K, a[k], 7, -680876936),
                K = e(K, H, E, J, a[k + 1], 12, -389564586),
                J = e(J, K, H, E, a[k + 2], 17, 606105819),
                E = e(E, J, K, H, a[k + 3], 22, -1044525330),
                H = e(H, E, J, K, a[k + 4], 7, -176418897),
                K = e(K, H, E, J, a[k + 5], 12, 1200080426),
                J = e(J, K, H, E, a[k + 6], 17, -1473231341),
                E = e(E, J, K, H, a[k + 7], 22, -45705983),
                H = e(H, E, J, K, a[k + 8], 7, 1770035416),
                K = e(K, H, E, J, a[k + 9], 12, -1958414417),
                J = e(J, K, H, E, a[k + 10], 17, -42063),
                E = e(E, J, K, H, a[k + 11], 22, -1990404162),
                H = e(H, E, J, K, a[k + 12], 7, 1804603682),
                K = e(K, H, E, J, a[k + 13], 12, -40341101),
                J = e(J, K, H, E, a[k + 14], 17, -1502002290),
                E = e(E, J, K, H, a[k + 15], 22, 1236535329),
                H = f(H, E, J, K, a[k + 1], 5, -165796510),
                K = f(K, H, E, J, a[k + 6], 9, -1069501632),
                J = f(J, K, H, E, a[k + 11], 14, 643717713),
                E = f(E, J, K, H, a[k], 20, -373897302),
                H = f(H, E, J, K, a[k + 5], 5, -701558691),
                K = f(K, H, E, J, a[k + 10], 9, 38016083),
                J = f(J, K, H, E, a[k + 15], 14, -660478335),
                E = f(E, J, K, H, a[k + 4], 20, -405537848),
                H = f(H, E, J, K, a[k + 9], 5, 568446438),
                K = f(K, H, E, J, a[k + 14], 9, -1019803690),
                J = f(J, K, H, E, a[k + 3], 14, -187363961),
                E = f(E, J, K, H, a[k + 8], 20, 1163531501),
                H = f(H, E, J, K, a[k + 13], 5, -1444681467),
                K = f(K, H, E, J, a[k + 2], 9, -51403784),
                J = f(J, K, H, E, a[k + 7], 14, 1735328473),
                E = f(E, J, K, H, a[k + 12], 20, -1926607734),
                H = c(E ^ J ^ K, H, E, a[k + 5], 4, -378558),
                K = c(H ^ E ^ J, K, H, a[k + 8], 11, -2022574463),
                J = c(K ^ H ^ E, J, K, a[k + 11], 16, 1839030562),
                E = c(J ^ K ^ H, E, J, a[k + 14], 23, -35309556),
                H = c(E ^ J ^ K, H, E, a[k + 1], 4, -1530992060),
                K = c(H ^ E ^ J, K, H, a[k + 4], 11, 1272893353),
                J = c(K ^ H ^ E, J, K, a[k + 7], 16, -155497632),
                E = c(J ^ K ^ H, E, J, a[k + 10], 23, -1094730640),
                H = c(E ^ J ^ K, H, E, a[k + 13], 4, 681279174),
                K = c(H ^ E ^ J, K, H, a[k], 11, -358537222),
                J = c(K ^ H ^ E, J, K, a[k + 3], 16, -722521979),
                E = c(J ^ K ^ H, E, J, a[k + 6], 23, 76029189),
                H = c(E ^ J ^ K, H, E, a[k + 9], 4, -640364487),
                K = c(H ^ E ^ J, K, H, a[k + 12], 11, -421815835),
                J = c(K ^ H ^ E, J, K, a[k + 15], 16, 530742520),
                E = c(J ^ K ^ H, E, J, a[k + 2], 23, -995338651),
                H = g(H, E, J, K, a[k], 6, -198630844),
                K = g(K, H, E, J, a[k + 7], 10, 1126891415),
                J = g(J, K, H, E, a[k + 14], 15, -1416354905),
                E = g(E, J, K, H, a[k + 5], 21, -57434055),
                H = g(H, E, J, K, a[k + 12], 6, 1700485571),
                K = g(K, H, E, J, a[k + 3], 10, -1894986606),
                J = g(J, K, H, E, a[k + 10], 15, -1051523),
                E = g(E, J, K, H, a[k + 1], 21, -2054922799),
                H = g(H, E, J, K, a[k + 8], 6, 1873313359),
                K = g(K, H, E, J, a[k + 15], 10, -30611744),
                J = g(J, K, H, E, a[k + 6], 15, -1560198380),
                E = g(E, J, K, H, a[k + 13], 21, 1309151649),
                H = g(H, E, J, K, a[k + 4], 6, -145523070),
                K = g(K, H, E, J, a[k + 11], 10, -1120210379),
                J = g(J, K, H, E, a[k + 2], 15, 718787259),
                E = g(E, J, K, H, a[k + 9], 21, -343485551),
                H = b(H, m),
                E = b(E, n),
                J = b(J, o),
                K = b(K, p);
            return [H, E, J, K]
        }
        function k(a) {
            var b, c = "", e = 32 * a.length;
            for (b = 0; b < e; b += 8)
                c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return c
        }
        function m(a) {
            var b, c = [];
            c[(a.length >> 2) - 1] = l;
            for (b = 0; b < c.length; b += 1)
                c[b] = 0;
            var e = 8 * a.length;
            for (b = 0; b < e; b += 8)
                c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
            return c
        }
        function n(a) {
            var b = "", c, e;
            for (e = 0; e < a.length; e += 1)
                c = a.charCodeAt(e),
                b += "0123456789abcdef".charAt(c >>> 4 & 15) + "0123456789abcdef".charAt(c & 15);
            return b
        }
        function o(a, b) {
            var c = unescape(encodeURIComponent(a))
              , e = unescape(encodeURIComponent(b))
              , f = m(c)
              , g = []
              , n = [];
            g[15] = n[15] = l;
            16 < f.length && (f = i(f, 8 * c.length));
            for (c = 0; 16 > c; c += 1)
                g[c] = f[c] ^ 909522486,
                n[c] = f[c] ^ 1549556828;
            e = i(g.concat(m(e)), 512 + 8 * e.length);
            return k(i(n.concat(e), 640))
        }
        function p(a, b, c) {
            return !b ? !c ? n(k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length))) : k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length)) : !c ? n(o(b, a)) : o(b, a)
        }
        "function" === typeof define && define.C2 ? define(function() {
            return p
        }) : "object" === typeof module && module.cX ? module.cX = p : a.md5 = p
    }
    )(this);
    function jb() {
        function a() {
            if (1 === arguments.length && "object" === typeof arguments[0]) {
                var a = arguments[0] || {};
                for (key in a)
                    if (!a[key] || !(g[key] && a[key] === g[key]))
                        if (a[key] || 0 === a[key])
                            g[key] = a[key]
            }
            a = document.getElementById(g.Mi);
            a.parentNode.removeChild(a);
            m.disconnect()
        }
        function b(a) {
            if (1 === arguments.length && "object" === typeof arguments[0]) {
                var b = arguments[0] || {};
                for (key in b)
                    if (!b[key] || !(g[key] && b[key] === g[key]))
                        if (b[key] || 0 === b[key])
                            g[key] = b[key]
            }
            (b = document.getElementById(g.Mi)) && b.parentNode && b.parentNode.removeChild(b);
            var c = document.getElementById(g.hG);
            if (c) {
                b = c ? c : document.body;
                if (w.fa.na)
                    f = parseFloat(w.R.uf(b, "width")),
                    i = parseFloat(w.R.uf(b, "height"));
                else
                    var e = getComputedStyle(b, s)
                      , f = parseFloat(e.width)
                      , i = parseFloat(e.height);
                var o = document.getElementById(g.Mi)
                  , e = s;
                if (o)
                    o.shadowRoot && (e = o.shadowRoot);
                else {
                    o = document.createElement("div");
                    o.id = g.Mi;
                    o.setAttribute("style", "pointer-events: none !important; opacity: 1 !important; display: block !important;position: absolute !important;left: 0 !important;top: 0 !important;transform:scale(1) !important;scale: 1 !important;z-index:99 !important;margin: 0px !important;visibility: visible !important;");
                    var e = "function" === typeof o.attachShadow ? o.attachShadow({
                        mode: "closed"
                    }) : o
                      , G = b.children
                      , H = Math.floor(Math.random() * (G.length - 1));
                    G[H] ? b.insertBefore(o, G[H]) : b.appendChild(o)
                }
                g.ll = parseInt((f - g.yq) / (g.Gn + g.Hn)) || 1;
                o = parseInt((f - g.yq - g.Gn * g.ll) / g.ll);
                g.Hn = o ? g.Hn : o;
                g.ml = parseInt((i - g.zq) / (g.Fn + g.In)) || 1;
                o = parseInt((i - g.zq - g.Fn * g.ml) / g.ml);
                g.In = o ? g.In : o;
                var E;
                c ? (H = g.yq + g.Gn * g.ll + g.Hn * (g.ll - 1),
                E = g.zq + g.Fn * g.ml + g.In * (g.ml - 1)) : (H = 0 + g.yq + g.Gn * g.ll + g.Hn * (g.ll - 1),
                E = 0 + g.zq + g.Fn * g.ml + g.In * (g.ml - 1));
                for (var J, K, o = document.createDocumentFragment(), G = 0; G < g.ml; G++) {
                    K = c ? 0 + g.zq + (g.In + g.Fn) * G : g.zq + (i - E) / 2 + (g.In + g.Fn) * G;
                    for (var P = 0; P < g.ll; P++) {
                        J = c ? 0 + g.yq + (f - H) / 2 + (g.Gn + g.Hn) * P : g.yq + (f - H) / 2 + (g.Gn + g.Hn) * P;
                        var S = document.createElement("div");
                        S.appendChild(document.createTextNode(g.iG));
                        S.id = g.$y + G + P;
                        S.style.webkitTransform = "rotate(-" + g.Ku + "deg)";
                        S.style.MozTransform = "rotate(-" + g.Ku + "deg)";
                        S.style.msTransform = "rotate(-" + g.Ku + "deg)";
                        S.style.D1 = "rotate(-" + g.Ku + "deg)";
                        S.style.transform = "rotate(-" + g.Ku + "deg)";
                        S.style.visibility = "";
                        S.style.position = "absolute";
                        S.style.left = J + "px";
                        S.style.top = K + "px";
                        S.style.overflow = "hidden";
                        S.style.zIndex = "9999999";
                        S.style.opacity = g.e1;
                        S.style.fontSize = g.h1;
                        S.style.fontFamily = g.g1;
                        S.style.color = g.f1;
                        S.style.textAlign = "center";
                        S.style.width = g.Gn + "px";
                        S.style.height = g.Fn + "px";
                        S.style.display = "block";
                        S.style["-ms-user-select"] = "none";
                        o.appendChild(S)
                    }
                }
                c = e.querySelectorAll("style");
                for (G = 0; G < c.length; G++)
                    e.removeChild(c[G]);
                e.appendChild(o);
                if ((a.PE === l ? g.PE : a.PE) && k)
                    m.observe(b, n),
                    m.observe(document.getElementById(g.Mi), n)
            }
        }
        function c(a) {
            if (f)
                f = t;
            else {
                for (var c = t, e = 0, i = 0, k = 0; k < a.length; k++) {
                    if (o && a[k].target && a[k].target.getAttribute) {
                        var m = a[k].target.getAttribute("id");
                        if (m && (m === g.Mi || 0 <= m.indexOf(g.$y))) {
                            c = q;
                            break
                        }
                    }
                    for (var n = 0; n < a[k].addedNodes.length; n++)
                        if (m = a[k].addedNodes[n],
                        m = m.getAttribute("id"),
                        o && m && (m === g.Mi || 0 <= m.indexOf(g.$y))) {
                            e += 1;
                            break
                        }
                    for (n = 0; n < a[k].removedNodes.length; n++)
                        if (m = a[k].removedNodes[n],
                        m = m.getAttribute("id"),
                        o && m && (m === g.Mi || 0 <= m.indexOf(g.$y))) {
                            i += 1;
                            break
                        }
                }
                (c || !e && 0 < i) && b(o)
            }
        }
        var e = {}, f = t, g = {
            Mi: Math.random().toString(36).slice(2, 12),
            $y: "baidu_jsapi_watermark_span",
            iG: "\u6d4b\u8bd5\u6c34\u5370",
            yq: 20,
            zq: 20,
            ml: 0,
            ll: 0,
            Hn: 40,
            In: 40,
            g1: "\u5fae\u8f6f\u96c5\u9ed1",
            f1: "red",
            h1: "18px",
            e1: 1,
            Gn: 200,
            Fn: 50,
            Ku: 15,
            P6: 0,
            O6: 0,
            hG: s,
            PE: q
        }, i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, k = i !== l, m = k ? new i(c) : s, n = {
            childList: q,
            attributes: q
        }, o;
        e.Px = function(a) {
            o = a;
            for (var c = g.Mi, e = document.getElementById(c); e; )
                c = Math.random().toString(36).slice(2, 12),
                e = document.getElementById(c);
            g.Mi = c;
            b(a);
            w.U(window, "resize", function() {
                b(a)
            })
        }
        ;
        e.load = function(a) {
            o = a;
            b(a)
        }
        ;
        e.remove = function() {
            f = q;
            a()
        }
        ;
        return e
    }
    ;var Rc = C.bd + "?qt=jsapi_log"
      , Sc = Date.now()
      , Tc = s
      , Uc = s
      , Vc = {}
      , Wc = {};
    function Wa(a, b) {
        if (!window.navigator || navigator.onLine)
            Uc || (Uc = function() {
                Xc()
            }
            ),
            18E5 < Date.now() - Sc && (Sc = Date.now(),
            Vc = {},
            Wc = {}),
            Vc[a] || (Vc[a] = q,
            Wc[a] = b),
            !Tc && Uc && (Tc = setInterval(Uc, 1E3))
    }
    function Xc() {
        if (0 === Object.keys(Wc).length)
            clearInterval(Tc),
            Tc = s;
        else {
            var a = Object.keys(Wc)[0]
              , b = (new Date).getTime()
              , c = "logCbk" + Math.floor(1E10 * Math.random());
            window.BMap[c] = function() {
                delete window.BMap[c]
            }
            ;
            if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost) {
                var e = Rc + "&bmap3=1";
                NaN + (M() ? 1 : 0) + "&module=" + (Wc[a][0] || "") + "&func=" + (Wc[a][1] || "") + "&subfunc=" + (Wc[a][2] || "") + "&t=" + b + "&callback=BMap." + c
            } else
                e = Rc + "&ak=" + qa + "&bmap3=1&device=" + (M() ? 1 : 0) + "&module=" + (Wc[a][0] || "") + "&func=" + (Wc[a][1] || "") + "&subfunc=" + (Wc[a][2] || "") + "&t=" + b + "&callback=BMap." + c;
            e += Pc()(e);
            try {
                ra(e, s, q),
                delete Wc[a]
            } catch (f) {}
            0 === Object.keys(Wc).length && (clearInterval(Tc),
            Tc = s)
        }
    }
    ;for (var Yc = function(a, b) {
        function c(a) {
            return f(a, function(a) {
                return e(a)
            })
        }
        function e(a) {
            return g.axmim(a, "")[g.xiama][g.axmim(g.aeacm(m, "Char"), k)](a)
        }
        function f(a, b) {
            for (var c = "ccc"; c !== g.ieami; )
                switch (c) {
                case "mhx":
                    for (c = 0; g.hlxed(c, i); c++) {
                        var e = b(a[c]);
                        f.push(e)
                    }
                    c = g.mlllh;
                    break;
                case g.eedem:
                    var f = []
                      , c = "mhx";
                    break;
                case g.mlllh:
                    return f;
                case g.eaiha:
                    var i = a.length
                      , c = "iec"
                }
        }
        var g = {
            ieami: "laxx",
            hlxed: function(a, b) {
                return a < b
            },
            mlllh: "dea",
            eedem: "iec",
            eaiha: "ccc",
            axmim: function(a, b) {
                return a + b
            },
            xiama: "constructor",
            aeacm: function(a, b) {
                return a + b
            },
            echid: function(a, b) {
                return a(b)
            },
            amxxh: function(a, b) {
                return a + b
            },
            meacx: function(a, b) {
                return a(b)
            },
            ihadh: function(a, b, c) {
                return a(b, c)
            },
            chxcd: function(a, b, c) {
                return a(b, c)
            }
        }, i, k, m, n = decodeURIComponent;
        i = "de";
        m = g.aeacm("fro", "m");
        k = g.amxxh("Co", i);
        var o = c.call(e, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
        i = f([28782, 27702, 26416, 25167, 24183], function(a) {
            return g.echid(n, a)
        });
        var p = c.call(i, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430])
          , v = {};
        i = g.meacx(c, i);
        var z = RegExp(i.join("|"));
        for (i = 0; i < o.length; i++)
            v[p[i]] = o[i];
        b = g.ihadh(f, b.split(""), function(a) {
            return v[a] || a
        }).join("");
        return g.chxcd(f, b.split(z), function(a) {
            return g.echid(n, a)
        })
    }(this, "\u58a0\u735ci\u59c8l\u6730\u59c8\u735cl\u5ef2\u545a\u706e\u59c8\u59c8i\u56c4\u5ef2\u624f\u59c8\u545a\u59c8\u5ef2\u58a0\u5e77\u735c\u56c4i\u545ah\u5e77\u735c\u59c8\u5ef2\u545al\u6c36\u545ai\u735c\u5ef2\u58a0\u706eSJv\u6a4aY\u72bah\u6b31\u692dZ\u6b9bh\u72ba\u735aHS\u706e\u59c8\u735ci\u735c\u56c4\u706e\u545ah\u545a\u545a\u545a\u706e\u5ef2\u545ah\u5ef2\u545a\u6c36\u5f5f\u66f0\u6c19\u59c8\u5ef2ll\u5c2b\u5ef2\u59c8k\u5f5f\u6b31\u6b9b\u6730\u5ef2\u59c8\u58a0\u545al\u706e\u545ah\u58a0\u545al\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u545a\u72b8try\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6c36\u5ef2\u545a\u5ef2\u5ef2l\u706e\u5a32u\u72b8\u59c8ti\u7313\u72b8\u624f\u58a0\u5ef2\u59c8i\u545a\u706e\u56c4l\u56c4\u735c\u58a0\u6c36\u5f5f\u6a4a\u6c19\u5f5f\u62a1\u66f0\u5f5f\u6256\u62a1\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u645a\u5f5f\u62a1\u5e52\u5f5f\u6a4a\u62a1\u5f5f\u6256\u6c19\u5f5f\u62a1\u5fb4\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u63cb\u6b31\u5f5f\u6a4a\u62a1\u5f5f\u6256\u7209\u5f5f\u63cb\u692d\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u72ba\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u5f6e\u5f5f\u6256\u7209\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u645a\u5f5f\u63cb\u5e52\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u63cb\u5f5f\u63cb\u6a4a\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u645a\u5f5f\u62a1\u6b9b\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u6256\u5f5f\u6256\u5fb4\u5f5f\u6a4a\u7074\u5f5f\u63cb\u6b9b\u5f5f\u63cb\u7209\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u6b9b\u5f5f\u62a1\u6b31\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u5f6e\u5f5f\u5f6e\u5e52\u6c36i\u545a\u545ah\u706ei\u58a0\u5ef2\u706e\u5ef2ih\u624f\u5ef2hl\u59c8\u624f\u58a0\u5ef2h\u6c36i\u735c\u545a\u6c36i\u56c4\u545aih\u6730\u545a\u545a\u735chi\u624f\u545a\u59c8\u58a0\u735c\u545a\u624f\u59c8\u59c8i\u5e77\u545arr\u7313r\u6c36\u59c8\u58a0ii\u735c\u6c36\u56c4hh\u545a\u5ef2\u706e\u5ef2\u59c8l\u58a0\u545a\u6730i\u59c8\u58a0h\u58a0\u6c36i\u545a\u5ef2\u735c\u5ef2\u5e77\u56c4\u56c4h\u58a0\u56c4\u624f\u545a\u5ef2\u545a\u58a0\u545a\u6730\u58a0\u735c\u545a\u5ef2\u545a\u6730\u58a0\u5ef2h\u545a\u59c8\u624fh\u5ef2l\u56c4\u735c\u6730ih\u545a\u59c8\u735c\u5e77\u5ef2i\u5ef2\u56c4\u59c8\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u59c8\u7313u\u72b8t\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6730\u5f5f\u66f0\u6c19\u5ef2k\u5f5f\u6b31\u6b9b\u624f\u5f5f\u66f0\u6c19\u59c8\u7313\u72b8su\u735c\u545a\u5f5f\u6b31\u6b9b\u5e77\u59c8\u5ef2il\u735c\u706e\u545a\u59c8\u56c4l\u5ef2\u706e\u5ef2l\u5ef2\u56c4l\u6c36\u56c4\u545a\u5ef2\u545a\u59c8\u6c36\u735c\u735c\u58a0\u5ef2\u56c4\u706eP\u6256NOR\u6256M\u6256\u706ei\u735c\u5ef2\u735ch\u6c36\u545a\u545ai\u59c8\u5ef2\u706e\u5ef2i\u5ef2\u545a\u545a\u6730ll\u545a\u5e77\u545a\u59c8\u56c4\u5ef2\u545a\u624f\u545ahi\u735c\u545a\u6c36\u56c4\u56c4\u545a\u706e\u5ef2i\u56c4\u706e\u5ef2\u59c8\u735c\u624f\u58a0\u545a\u545a\u6730il\u56c4\u5e77i\u59c8\u5ef2\u5e77ih\u545a\u5e77\u5ef2\u545ah\u6730\u56c4l\u735c\u6c36\u545a\u545a\u735c\u706eh\u59c8\u5ef2\u706e\u735cll\u706eh\u56c4i\u706ei\u59c8i\u624f\u735c\u59c8i\u58a0\u59c8\u706el\u58a0i\u735c\u56c4\u624f\u735c\u735c\u735ch\u56c4\u5e77\u5ef2i\u5ef2i\u545a\u624fl\u735c\u56c4\u6730\u735ch\u5ef2h\u56c4\u624f\u56c4\u59c8\u545a\u56c4\u58a0\u706e\u545al\u56c4\u59c8\u59c8\u5e77\u58a0\u735c\u58a0\u59c8\u545a\u6c36\u5ef2\u735c\u545a\u545a\u545a\u6730\u5ef2uth_k\u545ay\u5f5f\u6b31\u6b9b\u6730\u56c4\u58a0l\u59c8\u5ef2"), Zc = 188, $c = ++Zc; --$c; )
        Yc.push(Yc.shift());
    function V(a) {
        return Yc[a - 0]
    }
    var cd = function(a) {
        for (var b = {
            cxiim: function(a, b, c) {
                return a(b, c)
            },
            dhhea: V("0x0"),
            aclxe: function(a, b) {
                return a + b
            },
            icxhx: function(a, b) {
                return a + b
            },
            ieama: function(a, b) {
                return a + b
            },
            ddhxd: "eac",
            eaexe: V("0x1"),
            ideih: V("0x2"),
            eemhi: V("0x3"),
            ecxme: V("0x4"),
            ehime: V("0x5")
        }, c = b[V("0x6")]; c !== b[V("0x7")]; )
            switch (c) {
            case b[V("0x8")]:
                var e = 0
                  , c = V("0x5");
                break;
            case V("0x9"):
                return function(a) {
                    var c = {
                        ecdla: V("0xa"),
                        aladl: function(a, b) {
                            return a(b)
                        },
                        deaec: function(a, b) {
                            return a !== b
                        },
                        mmxad: function(a, c, e) {
                            return b[V("0xb")](a, c, e)
                        },
                        xmeae: b[V("0xc")],
                        xahec: "dcx",
                        haldm: function(a, c) {
                            return b[V("0xd")](a, c)
                        },
                        ihecm: function(a, c) {
                            return b[V("0xe")](a, c)
                        },
                        aiadc: function(a, c) {
                            return b[V("0xf")](a, c)
                        },
                        cailm: b[V("0x10")],
                        aiaee: "lle",
                        ecdae: b[V("0x11")]
                    };
                    e += a;
                    f || (f = setTimeout(function() {
                        for (var a = "dcx"; a !== c[V("0x12")]; )
                            switch (a) {
                            case c[V("0x13")]:
                                var b = c.haldm(c[V("0x14")](c[V("0x15")](c[V("0x16")](C.EN, V("0x17")), C.version) + V("0x18"), qa) + V("0x19"), e)
                                  , a = c[V("0x1a")];
                                break;
                            case V("0x1"):
                                f = s;
                                a = V("0x0");
                                break;
                            case c[V("0x1a")]:
                                ra(b, function(a) {
                                    var b = {
                                        imamh: c[V("0x1b")],
                                        eeica: function(a, b) {
                                            return c[V("0x1c")](a, b)
                                        }
                                    };
                                    if (!a || a[c[V("0x1b")]] === l || c[V("0x1d")](a[V("0xa")], 0))
                                        c[V("0x1e")](ad, V("0x1f"), function(a) {
                                            if (!a || a[b.imamh] === l || 0 !== a[b[V("0x20")]])
                                                b[V("0x21")](bd, V("0x1f"))
                                        })
                                });
                                a = c[V("0x22")];
                                break;
                            case V("0x23"):
                                e = 0,
                                a = c[V("0x24")]
                            }
                    }, g))
                }
                ;
            case b[V("0x6")]:
                var f = s
                  , c = V("0x4");
                break;
            case b[V("0x25")]:
                var g = a ? a : 5E3
                  , c = "cci"
            }
    }();
    function dd(a, b) {
        for (var c = {
            mcixc: function(a, b) {
                return a !== b
            },
            lximd: "xlle",
            mmmhd: V("0x26"),
            aiaie: V("0x27"),
            mhahd: V("0x28"),
            dcedx: V("0x29"),
            laaxh: V("0x2a"),
            eldcc: V("0x2b"),
            xmxce: function(a, b) {
                return a + b
            },
            leacx: function(a, b) {
                return a + b
            },
            ameee: function(a, b) {
                return a + b
            },
            dxlca: function(a, b) {
                return a + b
            },
            xmicl: V("0x2c"),
            cmlae: V("0x2d"),
            xeeee: V("0x2e"),
            cmimd: V("0x2f"),
            ccida: V("0x30"),
            eaexe: "lmd",
            cecax: V("0x31"),
            aheme: V("0x32"),
            mdieh: function(a, b) {
                return a(b)
            },
            mcael: V("0x33"),
            eimax: function(a, b) {
                return a(b)
            },
            eheee: function(a, b) {
                return a + b
            },
            xemai: function(a, b) {
                return a + b
            },
            aehae: function(a, b) {
                return a + b
            }
        }, e = V("0x26"); c[V("0x34")](e, c[V("0x35")]); )
            switch (e) {
            case c[V("0x36")]:
                var f, g, e = c[V("0x37")];
                break;
            case V("0x38"):
                g = b.Lp === t ? t : q;
                e = c[V("0x39")];
                break;
            case V("0x27"):
                e = !b ? c[V("0x3a")] : c.laaxh;
                break;
            case "hca":
                var i = Date.parse(new Date)
                  , e = V("0x2d");
                break;
            case c[V("0x3b")]:
                var k = c[V("0x3c")](c.leacx(c[V("0x3d")](c[V("0x3d")](V("0x3e"), c[V("0x3f")](m, n)) + "-" + i, "-"), qa), "-") + o
                  , e = c[V("0x40")];
                break;
            case c[V("0x41")]:
                var m = i / 1E3
                  , e = c.xeeee;
                break;
            case c.cmimd:
                var n = 1800
                  , e = c[V("0x42")];
                break;
            case "ild":
                f = b.YV ? b.YV : 1;
                e = c[V("0x11")];
                break;
            case c.dcedx:
                f = 1;
                e = c[V("0x43")];
                break;
            case V("0x31"):
                g = q;
                e = c[V("0x39")];
                break;
            case c.aheme:
                return k;
            case "ihe":
                g && c[V("0x44")](cd, f);
                e = "hdi";
                break;
            case c[V("0x45")]:
                var o = c[V("0x46")](md5, v)
                  , e = c[V("0x3b")];
                break;
            case V("0x28"):
                var p = V("0x47")
                  , e = c[V("0x48")];
                break;
            case V("0x2e"):
                var v = c[V("0x49")](c.xemai(c.xemai(a + "-" + c[V("0x4a")](m, n) + "-" + i, "-"), qa), "-") + p
                  , e = c[V("0x45")]
            }
    }
    function ad(a, b) {
        var c = {
            acxel: function(a, b) {
                return a + b
            },
            ehxel: function(a, b) {
                return a + b
            },
            idmde: V("0x18"),
            aeaal: function(a, b) {
                return a === b
            },
            axxae: function(a, b) {
                return a + b
            },
            xacie: function(a, b) {
                return a + b
            },
            dldmx: V("0x4b")
        };
        switch (a) {
        case "PANORAMA":
            var e = c[V("0x4c")](c[V("0x4c")](c[V("0x4d")](C.EN + V("0x4e"), C.version), c.idmde), qa);
            c[V("0x4f")](typeof b, V("0x50")) ? ra(e, b) : ra(c.axxae(c[V("0x51")](e, c[V("0x52")]), b))
        }
    }
    function bd(a) {
        var b = {
            aadaa: function(a, b) {
                return a(b)
            },
            eaexe: V("0x53")
        };
        switch (a) {
        case "PANORAMA":
            b.aadaa(alert, b[V("0x11")])
        }
    }
    ;function Pc() {
        function a(a) {
            return b[a - 0]
        }
        var b = function(a, b) {
            function f(a) {
                var b = {
                    eexem: function(a, b) {
                        return k.aaxeh(a, b)
                    }
                };
                return i(a, function(a) {
                    return b.eexem(g, a)
                })
            }
            function g(a) {
                return (a + "").constructor[k.aamcc(k.aamcc(o, "Char"), n)](a)
            }
            function i(a, b) {
                for (var c = k.aedal; k.ledia(c, k.hmmhe); )
                    switch (c) {
                    case "aed":
                        var e = []
                          , c = k.dmaai;
                        break;
                    case "ahd":
                        for (c = 0; c < g; c++) {
                            var f = b(a[c]);
                            e.push(f)
                        }
                        c = "dxa";
                        break;
                    case "mee":
                        var g = a.length
                          , c = k.icihe;
                        break;
                    case k.ecaae:
                        return e
                    }
            }
            var k = {
                aedal: "mee",
                ledia: function(a, b) {
                    return a !== b
                },
                hmmhe: "iicx",
                dmaai: "ahd",
                icihe: "aed",
                ecaae: "dxa",
                aamcc: function(a, b) {
                    return a + b
                },
                aaxeh: function(a, b) {
                    return a(b)
                },
                hidxa: function(a, b) {
                    return a(b)
                },
                ahacc: function(a, b) {
                    return a < b
                },
                ddddm: function(a, b, c) {
                    return a(b, c)
                },
                aaaxe: function(a, b, c) {
                    return a(b, c)
                }
            }, m, n, o, p = decodeURIComponent;
            m = "de";
            o = k.aamcc("fro", "m");
            n = k.aamcc("Co", m);
            var v = f.call(g, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
            m = i([28782, 27702, 26416, 25167, 24183], function(a) {
                return k.aaxeh(p, a)
            });
            var z = f.call(m, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430])
              , B = {};
            m = k.hidxa(f, m);
            var A = RegExp(m.join("|"));
            for (m = 0; k.ahacc(m, v.length); m++)
                B[z[m]] = v[m];
            b = k.ddddm(i, b.split(""), function(a) {
                return B[a] || a
            }).join("");
            return k.aaaxe(i, b.split(A), function(a) {
                return p(a)
            })
        }(this, "\u5f5f\u66f0\u6c19si\u577a\u72b8\u5f5f\u6b31\u6b9b\u6730\u58a0lh\u6730\u5ef2i\u5ef2\u5e77H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u6730\u545a\u59c8\u545ai\u545a\u6730\u59c8\u5ef2h\u735ch\u5e77\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u5e77\u545a\u56c4iih\u624f\u58a0\u59c8\u58a0\u5ef2\u5ef2\u6c36l\u545a\u72b8\u577ath\u6c36l\u59c8i\u59c8\u545a\u624f\u545a\u58a0\u5ef2l\u59c8\u6730h\u58a0\u56c4\u735c\u56c4\u706e\u5ef2\u5ef2\u59c8\u56c4\u545a\u5e77l\u545a\u545a\u58a0\u706el\u545al\u5e77\u56c4\u735c\u59c8");
        (function(a, b) {
            for (var f = ++b; --f; )
                a.push(a.shift())
        }
        )(b, 456);
        return function(b) {
            for (var e = {
                eceie: function(a, b) {
                    return a !== b
                },
                ilahl: a("0x0"),
                cahmh: a("0x1"),
                ediih: a("0x2"),
                xcxaa: function(a, b) {
                    return a + b
                },
                dmmam: a("0x3"),
                lcice: a("0x4"),
                exalc: function(a, b) {
                    return a(b)
                },
                hxdmd: a("0x5"),
                aacde: a("0x6")
            }, f = "lel"; e[a("0x7")](f, e.ilahl); )
                switch (f) {
                case e[a("0x8")]:
                    var g = a("0x9")
                      , f = a("0x5");
                    break;
                case e[a("0xa")]:
                    return e[a("0xb")](e.dmmam, i.substring(i[a("0xc")] - 12));
                case e[a("0xd")]:
                    var i = e[a("0xe")](md5, md5(b + g) + k)
                      , f = "dmc";
                    break;
                case e[a("0xf")]:
                    var k = e[a("0x10")]
                      , f = a("0x4")
                }
        }
    }
    ;function tb(a, b) {
        a && (this.Mb = a,
        this.ca = "spot" + tb.ca++,
        b = b || {},
        this.lh = b.text || "",
        this.Qv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.NB = b.userData || s,
        this.Th = b.minZoom || s,
        this.Of = b.maxZoom || s)
    }
    tb.ca = 0;
    w.extend(tb.prototype, {
        xa: function(a) {
            this.Th == s && (this.Th = a.K.hc);
            this.Of == s && (this.Of = a.K.oc)
        },
        ta: function(a) {
            if (a instanceof R || a instanceof N)
                this.Mb = a
        },
        la: u("Mb"),
        lu: ca("lh"),
        aE: u("lh"),
        setUserData: ca("NB"),
        getUserData: u("NB")
    });
    function ed() {
        this.M = s;
        this.Nb = "control";
        this.Ta = this.iK = q
    }
    w.lang.va(ed, w.lang.Ha, "Control");
    w.extend(ed.prototype, {
        initialize: function(a) {
            this.M = a;
            if (this.P)
                return a.Ya.appendChild(this.P),
                this.P
        },
        Ke: function(a) {
            !this.P && (this.initialize && hb(this.initialize)) && (this.P = this.initialize(a));
            this.m = this.m || {
                Og: t
            };
            this.BB();
            this.Co();
            this.P && (this.P.Dr = this)
        },
        BB: function() {
            var a = this.P;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Vq || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Og || w.R.hb(a, "BMap_noprint");
                M() || w.U(a, "contextmenu", pa)
            }
        },
        remove: function() {
            this.M = s;
            this.P && (this.P.parentNode && this.P.parentNode.removeChild(this.P),
            this.P = this.P.Dr = s)
        },
        Fa: function() {
            this.P = Nb(this.M.Ya, "<div unselectable='on'></div>");
            this.Ta == t && w.R.$(this.P);
            return this.P
        },
        Co: function() {
            this.vc(this.m.anchor)
        },
        vc: function(a) {
            if (this.D2 || !gb(a) || isNaN(a) || a < fd || 3 < a)
                a = this.defaultAnchor;
            this.m = this.m || {
                Og: t
            };
            this.m.Ea = this.m.Ea || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.P) {
                var c = this.P
                  , e = this.m.Ea.width
                  , f = this.m.Ea.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case fd:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case gd:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case hd:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                w.R.pc(this.P, "anchor" + c[b]);
                w.R.hb(this.P, "anchor" + c[a])
            }
        },
        DD: function() {
            return this.m.anchor
        },
        getContainer: u("P"),
        Pd: function(a) {
            a instanceof O && (this.m = this.m || {
                Og: t
            },
            this.m.Ea = new O(a.width,a.height),
            this.P && this.vc(this.m.anchor))
        },
        wj: function() {
            return this.m.Ea
        },
        fd: u("P"),
        show: function() {
            this.Ta != q && (this.Ta = q,
            this.P && w.R.show(this.P))
        },
        $: function() {
            this.Ta != t && (this.Ta = t,
            this.P && w.R.$(this.P))
        },
        isPrintable: function() {
            return !!this.m.Og
        },
        Nc: function() {
            return !this.P && !this.M ? t : !!this.Ta
        }
    });
    var fd = 0
      , gd = 1
      , hd = 2;
    function wb(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            Og: t,
            HF: a.showZoomInfo || q,
            anchor: a.anchor,
            Ea: a.offset,
            type: a.type,
            VW: a.enableGeolocation || t
        };
        this.defaultAnchor = M() ? 3 : fd;
        this.defaultOffset = new O(10,10);
        this.vc(a.anchor);
        this.wn(a.type);
        this.Ff()
    }
    w.lang.va(wb, ed, "NavigationControl");
    w.extend(wb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        wn: function(a) {
            this.m.type = gb(a) && 0 <= a && 3 >= a ? a : 0
        },
        Fp: function() {
            return this.m.type
        },
        Ff: function() {
            var a = this;
            bb.load("navictrl", function() {
                a.Ef()
            })
        }
    });
    function id(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || hd,
            Ea: a.offset || new O(10,30),
            a0: a.showAddressBar !== t,
            l3: a.enableAutoLocation || t,
            YM: a.locationIcon || s
        };
        var b = this;
        this.Vq = 1200;
        b.X0 = [];
        this.se = [];
        bb.load("geoctrl", function() {
            (function e() {
                if (0 !== b.se.length) {
                    var a = b.se.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            }
            )();
            b.kQ()
        });
        Za(La)
    }
    w.lang.va(id, ed, "GeolocationControl");
    w.extend(id.prototype, {
        location: function() {
            this.se.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(s)
    });
    function jd(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            Og: t,
            anchor: a.anchor,
            Ea: a.offset
        };
        this.fc = [];
        this.defaultAnchor = hd;
        this.defaultOffset = new O(5,2);
        this.vc(a.anchor);
        this.iK = t;
        this.Ff()
    }
    w.lang.va(jd, ed, "CopyrightControl");
    w.object.extend(jd.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Hw: function(a) {
            if (a && gb(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: s,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.Fm(a.id))
                    for (var e in b)
                        a[e] = b[e];
                else
                    this.fc.push(b)
            }
        },
        Fm: function(a) {
            for (var b = 0, c = this.fc.length; b < c; b++)
                if (this.fc[b].id == a)
                    return this.fc[b]
        },
        LD: u("fc"),
        fF: function(a) {
            for (var b = 0, c = this.fc.length; b < c; b++)
                this.fc[b].id == a && (r = this.fc.splice(b, 1),
                b--,
                c = this.fc.length)
        },
        Ff: function() {
            var a = this;
            bb.load("copyrightctrl", function() {
                a.Ef()
            })
        }
    });
    function yb(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            Og: t,
            size: a.size || new O(150,150),
            padding: 5,
            bb: a.isOpen === q ? q : t,
            t1: 4,
            Ea: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new O(0,0);
        this.Tq = this.Uq = 13;
        this.vc(a.anchor);
        this.Fe(this.m.size);
        this.Ff()
    }
    w.lang.va(yb, ed, "OverviewMapControl");
    w.extend(yb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        vc: function(a) {
            ed.prototype.vc.call(this, a)
        },
        te: function() {
            this.te.Ao = q;
            this.m.bb = !this.m.bb;
            this.P || (this.te.Ao = t)
        },
        Fe: function(a) {
            a instanceof O || (a = new O(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        ub: function() {
            return this.m.size
        },
        bb: function() {
            return this.m.bb
        },
        Ff: function() {
            var a = this;
            bb.load("control", function() {
                a.Ef()
            })
        }
    });
    function kd(a) {
        ed.call(this);
        a = a || {};
        this.defaultAnchor = fd;
        this.EV = a.canCheckSize === t ? t : q;
        this.pj = "";
        this.defaultOffset = new O(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Og: t,
            Ea: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && hb(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && hb(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && hb(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.vc(a.anchor);
        this.Ff();
        Wa(Xa(5, 3), ["control", "city"])
    }
    w.lang.va(kd, ed, "CityListControl");
    w.object.extend(kd.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Ff: function() {
            var a = this;
            bb.load("citylistcontrol", function() {
                a.Ef()
            }, q)
        }
    });
    function xb(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            Og: t,
            color: "black",
            Yc: "metric",
            Ea: a.offset
        };
        this.defaultAnchor = hd;
        this.defaultOffset = new O(81,18);
        this.vc(a.anchor);
        this.di = {
            metric: {
                name: "metric",
                AK: 1,
                pM: 1E3,
                XO: "\u7c73",
                YO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                AK: 3.2808,
                pM: 5280,
                XO: "\u82f1\u5c3a",
                YO: "\u82f1\u91cc"
            }
        };
        this.di[this.m.Yc] || (this.m.Yc = "metric");
        this.cJ = s;
        this.aB = {};
        this.Ff()
    }
    w.lang.va(xb, ed, "ScaleControl");
    w.object.extend(xb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        al: function(a) {
            this.m.color = a + ""
        },
        K3: function() {
            return this.m.color
        },
        DF: function(a) {
            this.m.Yc = this.di[a] && this.di[a].name || this.m.Yc
        },
        uY: function() {
            return this.m.Yc
        },
        Ff: function() {
            var a = this;
            bb.load("control", function() {
                a.Ef()
            })
        }
    });
    var ld = 0;
    function zb(a) {
        ed.call(this);
        a = a || {};
        this.defaultAnchor = gd;
        this.defaultOffset = new O(10,10);
        this.m = {
            Og: t,
            zh: [Ta, ab, $a, Ya],
            oW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || ld,
            Ea: a.offset || this.defaultOffset,
            ZW: q
        };
        this.vc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.zh = a.mapTypes.slice(0));
        this.Ff()
    }
    w.lang.va(zb, ed, "MapTypeControl");
    w.object.extend(zb.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Ty: function(a) {
            this.M.no = a
        },
        Ff: function() {
            var a = this;
            bb.load("control", function() {
                a.Ef()
            }, q)
        }
    });
    function md(a) {
        ed.call(this);
        a = a || {};
        this.m = {
            Og: t,
            Ea: a.offset,
            anchor: a.anchor
        };
        this.cj = t;
        this.qw = s;
        this.II = new nd({
            We: "api"
        });
        this.JI = new od(s,{
            We: "api"
        });
        this.defaultAnchor = gd;
        this.defaultOffset = new O(10,10);
        this.vc(a.anchor);
        this.Ff();
        Za(xa)
    }
    w.lang.va(md, ed, "PanoramaControl");
    w.extend(md.prototype, {
        initialize: function(a) {
            this.M = a;
            return this.P
        },
        Ff: function() {
            var a = this;
            bb.load("control", function() {
                a.Ef()
            })
        }
    });
    function pd(a) {
        w.lang.Ha.call(this);
        this.m = {
            Ya: s,
            cursor: "default"
        };
        this.m = w.extend(this.m, a);
        this.Nb = "contextmenu";
        this.M = s;
        this.Ca = [];
        this.Qf = [];
        this.Ie = [];
        this.$w = this.Es = s;
        this.Sh = t;
        Wa(Xa(5, 2), ["control", "menu"]);
        var b = this;
        bb.load("menu", function() {
            b.mb()
        })
    }
    w.lang.va(pd, w.lang.Ha, "ContextMenu");
    w.object.extend(pd.prototype, {
        xa: function(a, b) {
            this.M = a;
            this.Rl = b || s
        },
        remove: function() {
            this.M = this.Rl = s
        },
        qs: function(a) {
            if (a && !("menuitem" != a.Nb || "" == a.lh || 0 >= a.jj)) {
                for (var b = 0, c = this.Ca.length; b < c; b++)
                    if (this.Ca[b] === a)
                        return;
                this.Ca.push(a);
                this.Qf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Nb) {
                for (var b = 0, c = this.Ca.length; b < c; b++)
                    this.Ca[b] === a && (this.Ca[b].remove(),
                    this.Ca.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.Qf.length; b < c; b++)
                    this.Qf[b] === a && (this.Qf[b].remove(),
                    this.Qf.splice(b, 1),
                    c--)
            }
        },
        YB: function() {
            this.Ca.push({
                Nb: "divider",
                Xj: this.Ie.length
            });
            this.Ie.push({
                R: s
            })
        },
        iF: function(a) {
            if (this.Ie[a]) {
                for (var b = 0, c = this.Ca.length; b < c; b++)
                    this.Ca[b] && ("divider" == this.Ca[b].Nb && this.Ca[b].Xj == a) && (this.Ca.splice(b, 1),
                    c--),
                    this.Ca[b] && ("divider" == this.Ca[b].Nb && this.Ca[b].Xj > a) && this.Ca[b].Xj--;
                this.Ie.splice(a, 1)
            }
        },
        fd: u("P"),
        show: function() {
            this.Sh != q && (this.Sh = q)
        },
        $: function() {
            this.Sh != t && (this.Sh = t)
        },
        G_: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.Qf[a]
        }
    });
    var qd = L.ra + "menu_zoom_in.png"
      , rd = L.ra + "menu_zoom_out.png";
    function sd(a, b, c) {
        if (a && hb(b)) {
            w.lang.Ha.call(this);
            this.m = {
                width: 100,
                id: "",
                Sm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.Sm = c.iconUrl ? c.iconUrl : "";
            this.lh = a + "";
            this.Cz = b;
            this.M = s;
            this.Nb = "menuitem";
            this.es = this.Gv = this.P = this.Nh = s;
            this.Qh = q;
            var e = this;
            bb.load("menu", function() {
                e.mb()
            })
        }
    }
    w.lang.va(sd, w.lang.Ha, "MenuItem");
    w.object.extend(sd.prototype, {
        xa: function(a, b) {
            this.M = a;
            this.Nh = b
        },
        remove: function() {
            this.M = this.Nh = s
        },
        lu: function(a) {
            a && (this.lh = a + "")
        },
        Vb: function(a) {
            a && (this.m.Sm = a)
        },
        fd: u("P"),
        enable: function() {
            this.Qh = q
        },
        disable: function() {
            this.Qh = t
        }
    });
    function qb(a, b) {
        a && !b && (b = a);
        this.Le = this.$d = this.Re = this.be = this.nf = this.kf = s;
        a && (this.nf = new R(a.lng,a.lat),
        this.kf = new R(b.lng,b.lat),
        this.Re = a.lng,
        this.be = a.lat,
        this.Le = b.lng,
        this.$d = b.lat)
    }
    w.object.extend(qb.prototype, {
        Dj: function() {
            return !this.nf || !this.kf
        },
        Tb: function(a) {
            return !(a instanceof qb) || this.Dj() ? t : this.Ld().Tb(a.Ld()) && this.ze().Tb(a.ze())
        },
        Ld: u("nf"),
        ze: u("kf"),
        UV: function(a) {
            return !(a instanceof qb) || this.Dj() || a.Dj() ? t : a.Re > this.Re && a.Le < this.Le && a.be > this.be && a.$d < this.$d
        },
        Eb: function() {
            return this.Dj() ? s : new R((this.Re + this.Le) / 2,(this.be + this.$d) / 2)
        },
        Bt: function(a) {
            if (!(a instanceof qb) || Math.max(a.Re, a.Le) < Math.min(this.Re, this.Le) || Math.min(a.Re, a.Le) > Math.max(this.Re, this.Le) || Math.max(a.be, a.$d) < Math.min(this.be, this.$d) || Math.min(a.be, a.$d) > Math.max(this.be, this.$d))
                return s;
            var b = Math.max(this.Re, a.Re)
              , c = Math.min(this.Le, a.Le)
              , e = Math.max(this.be, a.be)
              , a = Math.min(this.$d, a.$d);
            return new qb(new R(b,e),new R(c,a))
        },
        zs: function(a) {
            return !(a instanceof R || a instanceof N) || this.Dj() ? t : a.lng >= this.Re && a.lng <= this.Le && a.lat >= this.be && a.lat <= this.$d
        },
        extend: function(a) {
            if (a instanceof R || a instanceof N) {
                var b = a.lng
                  , a = a.lat;
                this.nf || (this.nf = new R(0,0));
                this.kf || (this.kf = new R(0,0));
                if (!this.Re || this.Re > b)
                    this.nf.lng = this.Re = b;
                if (!this.Le || this.Le < b)
                    this.kf.lng = this.Le = b;
                if (!this.be || this.be > a)
                    this.nf.lat = this.be = a;
                if (!this.$d || this.$d < a)
                    this.kf.lat = this.$d = a
            }
        },
        XF: function() {
            return this.Dj() ? new R(0,0) : new R(Math.abs(this.Le - this.Re),Math.abs(this.$d - this.be))
        }
    });
    function R(a, b) {
        isNaN(a) && (a = Xb(a),
        a = isNaN(a) ? 0 : a);
        ib(a) && (a = parseFloat(a));
        isNaN(b) && (b = Xb(b),
        b = isNaN(b) ? 0 : b);
        ib(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    R.uE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    R.prototype.Tb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function N(a, b) {
        isNaN(a) && (a = Xb(a),
        a = isNaN(a) ? 0 : a);
        ib(a) && (a = parseFloat(a));
        isNaN(b) && (b = Xb(b),
        b = isNaN(b) ? 0 : b);
        ib(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.We = "inner"
    }
    N.uE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    N.prototype.Tb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function td() {}
    td.prototype.Jg = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    td.prototype.Hj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function ud() {}
    ;var pb = {
        CK: function(a, b, c) {
            bb.load("coordtransutils", function() {
                pb.hV(a, b, c)
            }, q)
        },
        BK: function(a, b, c) {
            bb.load("coordtransutils", function() {
                pb.gV(a, b, c)
            }, q)
        }
    };
    function vd() {
        this.Oa = [];
        var a = this;
        bb.load("convertor", function() {
            a.iQ()
        })
    }
    w.va(vd, w.lang.Ha, "Convertor");
    w.extend(vd.prototype, {
        translate: function(a, b, c, e) {
            this.Oa.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    W(vd.prototype, {
        translate: vd.prototype.translate
    });
    function U() {}
    U.prototype = new td;
    w.extend(U, {
        DP: 6370996.81,
        KG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Tu: [86, 60, 45, 30, 15, 0],
        JP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        HG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        Q3: function(a, b) {
            if (!a || !b)
                return 0;
            var c, e, a = this.Wb(a);
            if (!a)
                return 0;
            c = this.jl(a.lng);
            e = this.jl(a.lat);
            b = this.Wb(b);
            return !b ? 0 : this.Kd(c, this.jl(b.lng), e, this.jl(b.lat))
        },
        Jk: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.RD(a.lng, -180, 180);
            a.lat = this.XD(a.lat, -80, 84);
            b.lng = this.RD(b.lng, -180, 180);
            b.lat = this.XD(b.lat, -80, 84);
            return this.Kd(this.jl(a.lng), this.jl(b.lng), this.jl(a.lat), this.jl(b.lat))
        },
        Wb: function(a) {
            if (a === s || a === l)
                return new N(0,0);
            var b, c;
            b = new N(Math.abs(a.lng),Math.abs(a.lat));
            for (var e = 0; e < this.KG.length; e++)
                if (b.lat >= this.KG[e]) {
                    c = this.JP[e];
                    break
                }
            a = this.DK(a, c);
            return a = new N(a.lng,a.lat)
        },
        Qa: function(a) {
            if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new N(0,0);
            var b, c;
            a.lng = this.RD(a.lng, -180, 180);
            a.lat = this.XD(a.lat, -85, 85);
            b = new N(a.lng,a.lat);
            for (var e = 0; e < this.Tu.length; e++)
                if (b.lat >= this.Tu[e]) {
                    c = this.HG[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.Tu.length; e++)
                    if (b.lat <= -this.Tu[e]) {
                        c = this.HG[e];
                        break
                    }
            a = this.DK(a, c);
            return a = new N(a.lng,a.lat)
        },
        DK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , e = Math.abs(a.lat) / b[9]
                  , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
                  , c = c * (0 > a.lng ? -1 : 1)
                  , e = e * (0 > a.lat ? -1 : 1);
                return new N(c,e)
            }
        },
        Kd: function(a, b, c, e) {
            return this.DP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        jl: function(a) {
            return Math.PI * a / 180
        },
        s6: function(a) {
            return 180 * a / Math.PI
        },
        XD: function(a, b, c) {
            b != s && (a = Math.max(a, b));
            c != s && (a = Math.min(a, c));
            return a
        },
        RD: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    w.extend(U.prototype, {
        vi: function(a) {
            return U.Qa(a)
        },
        Jg: function(a) {
            a = U.Qa(a);
            return new T(a.lng,a.lat)
        },
        Bh: function(a) {
            return U.Wb(a)
        },
        Hj: function(a) {
            a = new N(a.x,a.y);
            a = U.Wb(a);
            return new R(a.lng,a.lat)
        },
        uc: function(a, b, c, e, f) {
            if (a)
                return a = this.vi(a, f),
                b = this.Ub(b),
                new T(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        uZ: function(a, b, c, e) {
            if (a)
                return b = this.Ub(b),
                new T(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        $b: function(a, b, c, e, f) {
            if (a)
                return b = this.Ub(b),
                this.Bh(new N(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
        },
        uy: function(a, b, c, e) {
            if (a)
                return b = this.Ub(b),
                new N(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2))
        },
        Ub: function(a) {
            return Math.pow(2, 18 - a)
        },
        hO: ca("Ma")
    });
    function sb() {
        this.pj = "bj"
    }
    sb.prototype = new U;
    w.extend(sb.prototype, {
        vi: function(a, b) {
            return this.UQ(b, U.Qa(a))
        },
        Bh: function(a, b) {
            return U.Wb(this.VQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , e = U.Qa(a);
            bb.load("coordtrans", function() {
                var a = ud.UD(c.pj || "bj", e)
                  , a = new T(a.x,a.y);
                b && b(a)
            }, q)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , e = new R(a.x,a.y);
            bb.load("coordtrans", function() {
                var a = ud.SD(c.pj || "bj", e)
                  , a = new R(a.lng,a.lat)
                  , a = U.Wb(a);
                b && b(a)
            }, q)
        },
        UQ: function(a, b) {
            if (bb.ob("coordtrans").Qe == bb.Pj.Eq) {
                var c = ud.UD(a || "bj", b);
                return new R(c.x,c.y)
            }
            bb.load("coordtrans", ba());
            return new R(0,0)
        },
        VQ: function(a, b) {
            if (bb.ob("coordtrans").Qe == bb.Pj.Eq) {
                var c = ud.SD(a || "bj", b);
                return new R(c.lng,c.lat)
            }
            bb.load("coordtrans", ba());
            return new R(0,0)
        },
        Ub: function(a) {
            return Math.pow(2, 20 - a)
        },
        hO: ca("Ma")
    });
    function wd() {
        this.Nb = "overlay"
    }
    w.lang.va(wd, w.lang.Ha, "Overlay");
    wd.Ok = function(a) {
        a *= 1;
        return !a ? 0 : 1E5 * (90 - a) << 1
    }
    ;
    w.extend(wd.prototype, {
        Ke: function(a) {
            if (!this.ba && hb(this.initialize) && (this.ba = this.initialize(a)))
                this.ba.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
            this.ba = s;
            this.dispatchEvent(new Q("onremove"))
        },
        $: function() {
            this.ba && w.R.$(this.ba)
        },
        show: function() {
            this.ba && w.R.show(this.ba)
        },
        Nc: function() {
            return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : q
        }
    });
    C.df(function(a) {
        function b(a, b) {
            var c = I("div")
              , i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.aa;
        c.Uc = a.Uc = b(a.platform, 200);
        a.ae.wD = b(c.Uc, 800);
        a.ae.JE = b(c.Uc, 700);
        a.ae.lL = b(c.Uc, 600);
        a.ae.BE = b(c.Uc, 500);
        a.ae.bN = b(c.Uc, 400);
        a.ae.cN = b(c.Uc, 300);
        a.ae.iP = b(c.Uc, 201);
        a.ae.Ot = b(c.Uc, 200)
    });
    function rb() {
        w.lang.Ha.call(this);
        wd.call(this);
        this.map = s;
        this.Ta = q;
        this.Cb = s;
        this.vH = 0
    }
    w.lang.va(rb, wd, "OverlayInternal");
    w.extend(rb.prototype, {
        initialize: function(a) {
            this.map = a;
            w.lang.Ha.call(this, this.ca);
            return s
        },
        xx: u("map"),
        draw: ba(),
        Rj: ba(),
        remove: function() {
            this.map = s;
            w.lang.dx(this.ca);
            wd.prototype.remove.call(this)
        },
        $: function() {
            this.Ta !== t && (this.Ta = t)
        },
        show: function() {
            this.Ta !== q && (this.Ta = q)
        },
        Nc: function() {
            return !this.ba ? t : !!this.Ta
        },
        Ra: u("ba"),
        gO: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.D[b] = a[b]
        },
        pq: ca("zIndex"),
        uj: function() {
            this.D.uj = q
        },
        xW: function() {
            this.D.uj = t
        },
        jm: ca("rg"),
        bq: function() {
            this.rg = s
        }
    });
    function xd() {
        this.map = s;
        this.sa = {};
        this.He = []
    }
    C.df(function(a) {
        var b = new xd;
        b.map = a;
        a.sa = b.sa;
        a.He = b.He;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        w.fa.na && 8 > w.fa.na || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof rb)
                b.sa[a.ca] || (b.sa[a.ca] = a);
            else {
                for (var e = t, f = 0, g = b.He.length; f < g; f++)
                    if (b.He[f] === a) {
                        e = q;
                        break
                    }
                e || b.He.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof rb)
                delete b.sa[a.ca];
            else
                for (var e = 0, f = b.He.length; e < f; e++)
                    if (b.He[e] === a) {
                        b.He.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Lc();
            for (var a in b.sa)
                b.sa[a].D.uj && (b.sa[a].remove(),
                delete b.sa[a]);
            a = 0;
            for (var e = b.He.length; a < e; a++)
                b.He[a].enableMassClear !== t && (b.He[a].remove(),
                b.He[a] = s,
                b.He.splice(a, 1),
                a--,
                e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Cb;
            a && (w.R.$(a.Bc),
            w.R.$(a.ac))
        });
        a.addEventListener("movestart", function() {
            this.uh() && this.uh().jJ()
        });
        a.addEventListener("moveend", function() {
            this.uh() && this.uh().YI()
        })
    });
    xd.prototype.draw = function(a) {
        if (C.Hq) {
            var b = C.Hq.dt(this.map);
            "canvas" === b.Nb && b.canvas && b.PQ(b.canvas.getContext("2d"))
        }
        for (var c in this.sa)
            this.sa[c].draw(a);
        w.mc.Pb(this.He, function(a) {
            a.draw()
        });
        this.map.aa.vb && this.map.aa.vb.ta();
        C.Hq && b.zF()
    }
    ;
    function yd(a) {
        rb.call(this);
        a = a || {};
        this.D = {
            strokeColor: a.strokeColor || "#3a6bdb",
            qc: a.strokeWeight || 5,
            xd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            uj: a.enableMassClear === t ? t : q,
            Mk: s,
            Km: s,
            xe: a.enableEditing === q ? q : t,
            gN: 5,
            V0: t,
            of: a.enableClicking === t ? t : q,
            si: a.icons && 0 < a.icons.length ? a.icons : s,
            sX: a.geodesic === q ? q : t,
            FE: a.linkRight === q ? q : t
        };
        0 >= this.D.qc && (this.D.qc = 5);
        if (0 > this.D.xd || 1 < this.D.xd)
            this.D.xd = 0.65;
        if (0 > this.D.Cg || 1 < this.D.Cg)
            this.D.Cg = 0.65;
        "solid" != this.D.strokeStyle && "dashed" != this.D.strokeStyle && (this.D.strokeStyle = "solid");
        this.ba = s;
        this.av = new qb(0,0);
        this.lf = [];
        this.tc = [];
        this.Wa = {}
    }
    w.lang.va(yd, rb, "Graph");
    yd.tx = function(a) {
        var b = [];
        if (!a)
            return b;
        ib(a) && w.mc.Pb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new R(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    yd.VE = [0.09, 0.005, 1.0E-4, 1.0E-5];
    w.extend(yd.prototype, {
        initialize: function(a) {
            this.map = a;
            return s
        },
        draw: ba(),
        Yr: function(a) {
            this.lf.length = 0;
            this.ia = yd.tx(a).slice(0);
            this.Kh()
        },
        Qd: function(a) {
            this.Yr(a)
        },
        Kh: function() {
            if (this.ia) {
                var a = this;
                a.av = new qb;
                w.mc.Pb(this.ia, function(b) {
                    a.av.extend(b)
                })
            }
        },
        Ze: u("ia"),
        vn: function(a, b) {
            b && this.ia[a] && (this.lf.length = 0,
            this.ia[a] = new R(b.lng,b.lat),
            this.Kh())
        },
        setStrokeColor: function(a) {
            this.D.strokeColor = a
        },
        lY: function() {
            return this.D.strokeColor
        },
        oq: function(a) {
            0 < a && (this.D.qc = a)
        },
        QL: function() {
            return this.D.qc
        },
        mq: function(a) {
            a == l || (1 < a || 0 > a) || (this.D.xd = a)
        },
        mY: function() {
            return this.D.xd
        },
        fu: function(a) {
            1 < a || 0 > a || (this.D.Cg = a)
        },
        HX: function() {
            return this.D.Cg
        },
        nq: function(a) {
            "solid" != a && "dashed" != a || (this.D.strokeStyle = a)
        },
        PL: function() {
            return this.D.strokeStyle
        },
        setFillColor: function(a) {
            this.D.fillColor = a || ""
        },
        GX: function() {
            return this.D.fillColor
        },
        Jd: u("av"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Dv);
            rb.prototype.remove.call(this);
            this.lf.length = 0
        },
        xe: function() {
            if (!(2 > this.ia.length)) {
                this.D.xe = q;
                var a = this;
                bb.load("poly", function() {
                    a.xk()
                }, q)
            }
        },
        wW: function() {
            this.D.xe = t;
            var a = this;
            bb.load("poly", function() {
                a.ii()
            }, q)
        },
        DX: function() {
            return this.D.xe
        },
        KX: function() {
            for (var a = [], b = 0; b < this.ia.length - 1; b++)
                var c = this.BV(this.ia[b], this.ia[b + 1])
                  , a = a.concat(c);
            return a = a.concat(this.ia[this.ia.length - 1])
        },
        BV: function(a, b) {
            if (a.Tb(b))
                return [a];
            var c = U.Kd(bc(a.lng), bc(a.lat), bc(b.lng), bc(b.lat))
              , c = U.Jk(a, b);
            if (25E4 > c)
                return [a];
            var e = []
              , c = Math.round(c / 15E4)
              , f = this.lK(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.mK(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        mK: function(a, b, c, e) {
            var f = bc(a.lat)
              , g = bc(b.lat)
              , a = bc(a.lng)
              , i = bc(b.lng)
              , b = Math.sin((1 - c) * e) / Math.sin(e)
              , c = Math.sin(c * e) / Math.sin(e)
              , e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i)
              , a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new R(180 * (Math.atan2(a, e) / Math.PI),180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        lK: function(a, b) {
            var c = bc(a.lat)
              , e = bc(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(bc(b.lng) - bc(a.lng))))
        }
    });
    function zd(a) {
        rb.call(this);
        this.ba = this.map = s;
        this.D = {
            width: 0,
            height: 0,
            Ea: new O(0,0),
            opacity: 1,
            background: "transparent",
            $x: 1,
            PM: "#000",
            lZ: "solid",
            point: s
        };
        this.gO(a);
        this.point = this.D.point
    }
    w.lang.va(zd, rb, "Division");
    w.extend(zd.prototype, {
        Rj: function() {
            var a = this.D
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.$x + "px " + a.lZ + " " + a.PM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ba = Nb(this.map.Zf().JE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Rj();
            this.ba && (a = M() ? "touchstart" : "mousedown",
            w.U(this.ba, a, function(a) {
                oa(a)
            }));
            return this.ba
        },
        draw: function() {
            var a = this.map.cf(this.D.point);
            this.D.Ea = new O(-Math.round(this.D.width / 2) - Math.round(this.D.$x),-Math.round(this.D.height / 2) - Math.round(this.D.$x));
            this.ba.style.left = a.x + this.D.Ea.width + "px";
            this.ba.style.top = a.y + this.D.Ea.height + "px"
        },
        la: function() {
            return this.D.point
        },
        e2: function() {
            return this.map.xo(this.la())
        },
        ta: function(a) {
            this.D.point = a;
            this.draw()
        },
        H_: function(a, b) {
            this.D.width = Math.round(a);
            this.D.height = Math.round(b);
            this.ba && (this.ba.style.width = this.D.width + "px",
            this.ba.style.height = this.D.height + "px",
            this.draw())
        }
    });
    function Ad(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new O(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new O(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    w.extend(Ad.prototype, {
        iO: function(a) {
            a && (this.imageUrl = a)
        },
        Y_: function(a) {
            a && (this.printImageUrl = a)
        },
        Fe: function(a) {
            a && (this.size = new O(a.width,a.height))
        },
        vc: function(a) {
            a && (this.anchor = new O(a.width,a.height))
        },
        gu: function(a) {
            a && (this.imageOffset = new O(a.width,a.height))
        },
        M_: function(a) {
            a && (this.infoWindowAnchor = new O(a.width,a.height))
        },
        J_: function(a) {
            a && (this.imageSize = new O(a.width,a.height))
        },
        toString: da("Icon")
    });
    function Bd(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new O(0,0),
                fillColor: b.fillColor || "#000",
                Cg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                xd: b.strokeOpacity || 1,
                qc: b.strokeWeight
            };
            this.Nb = "number" === typeof a ? a : "UserDefined";
            this.Si = this.style.anchor;
            this.Ir = new O(0,0);
            this.anchor = s;
            this.nB = a;
            var c = this;
            bb.load("symbol", function() {
                c.Wn()
            }, q)
        }
    }
    w.extend(Bd.prototype, {
        setPath: ca("nB"),
        setAnchor: function(a) {
            this.Si = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.qc = a
        },
        setStrokeColor: function(a) {
            a = w.xs.zC(a, this.style.xd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.xd = a
        },
        setFillOpacity: function(a) {
            this.style.Cg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function Cd(a, b, c, e) {
        a && (this.Vv = {},
        this.kL = e ? !!e : t,
        this.$c = [],
        this.p0 = a instanceof Bd ? a : s,
        this.OI = b === l ? q : !!(b.indexOf("%") + 1),
        this.mk = isNaN(parseFloat(b)) ? 1 : this.OI ? parseFloat(b) / 100 : parseFloat(b),
        this.QI = !!(c.indexOf("%") + 1),
        this.repeat = c != l ? this.QI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function Dd(a, b) {
        w.lang.Ha.call(this);
        this.content = a;
        this.map = s;
        b = b || {};
        this.D = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Ea: b.offset || new O(0,0),
            title: b.title || "",
            LE: b.maxContent || "",
            rh: b.enableMaximize || t,
            Ws: b.enableAutoPan === t ? t : q,
            fD: b.enableCloseOnClick === t ? t : q,
            margin: b.margin || [10, 10, 40, 10],
            vC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            IY: t,
            KZ: b.onClosing || da(q),
            cL: t,
            kD: b.enableParano === q ? q : t,
            message: b.message,
            nD: b.enableSearchTool === q ? q : t,
            Ix: b.headerContent || "",
            gD: b.enableContentScroll || t
        };
        if (0 != this.D.width && (220 > this.D.width && (this.D.width = 220),
        730 < this.D.width))
            this.D.width = 730;
        if (0 != this.D.height && (60 > this.D.height && (this.D.height = 60),
        650 < this.D.height))
            this.D.height = 650;
        if (0 != this.D.maxWidth && (220 > this.D.maxWidth && (this.D.maxWidth = 220),
        730 < this.D.maxWidth))
            this.D.maxWidth = 730;
        this.ke = t;
        this.Ni = L.ra;
        this.wb = s;
        Wa(Xa(2, 10), ["overlay", "infowindow"]);
        var c = this;
        bb.load("infowindow", function() {
            c.mb()
        })
    }
    w.lang.va(Dd, w.lang.Ha, "InfoWindow");
    w.extend(Dd.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.D.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.D.height = a)
        },
        mO: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.D.maxWidth = a)
        },
        Gc: function(a) {
            this.D.title = a
        },
        getTitle: function() {
            return this.D.title
        },
        Pc: ca("content"),
        Ik: u("content"),
        iu: function(a) {
            this.D.LE = a + ""
        },
        pe: ba(),
        Ws: function() {
            this.D.Ws = q
        },
        disableAutoPan: function() {
            this.D.Ws = t
        },
        enableCloseOnClick: function() {
            this.D.fD = q
        },
        disableCloseOnClick: function() {
            this.D.fD = t
        },
        rh: function() {
            this.D.rh = q
        },
        fx: function() {
            this.D.rh = t
        },
        show: function() {
            this.Ta = q
        },
        $: function() {
            this.Ta = t
        },
        close: function() {
            this.$()
        },
        ey: function() {
            this.ke = q
        },
        restore: function() {
            this.ke = t
        },
        Nc: function() {
            return this.bb()
        },
        bb: da(t),
        la: function() {
            if (this.wb && this.wb.la)
                return this.wb.la()
        },
        wj: function() {
            return this.D.Ea
        }
    });
    Ra.prototype.Tc = function(a, b) {
        if (a instanceof Dd && (b instanceof R || b instanceof N)) {
            var c = this.aa;
            c.Wm ? c.Wm.ta(b) : (c.Wm = new Ed(b,{
                icon: new Ad(L.ra + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new O(0,0),
                clickable: t
            }),
            c.Wm.PR = 1);
            this.Pa(c.Wm);
            c.Wm.Tc(a)
        }
    }
    ;
    Ra.prototype.Lc = function() {
        var a = this.aa.vb || this.aa.Gl;
        a && a.wb && a.wb.Lc()
    }
    ;
    rb.prototype.Tc = function(a) {
        this.map && (this.map.Lc(),
        a.Ta = q,
        this.map.aa.Gl = a,
        a.wb = this,
        w.lang.Ha.call(a, a.ca))
    }
    ;
    rb.prototype.Lc = function() {
        this.map && this.map.aa.Gl && (this.map.aa.Gl.Ta = t,
        w.lang.dx(this.map.aa.Gl.ca),
        this.map.aa.Gl = s)
    }
    ;
    function Fd(a, b) {
        rb.call(this);
        this.content = a;
        this.ba = this.map = s;
        b = b || {};
        this.D = {
            width: 0,
            Ea: b.offset || new O(0,0),
            uq: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + L.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || s,
            uj: b.enableMassClear === t ? t : q,
            of: q
        };
        0 > this.D.width && (this.D.width = 0);
        Tb(b.enableClicking) && (this.D.of = b.enableClicking);
        this.point = this.D.position;
        Wa(Xa(2, 6), ["overlay", "dom_lable"]);
        var c = this;
        bb.load("marker", function() {
            c.mb()
        })
    }
    w.lang.va(Fd, rb, "Label");
    w.extend(Fd.prototype, {
        la: function() {
            return this.ro ? this.ro.la() : this.map ? ob(this.point, this.map.K.Ma) : this.point
        },
        ek: function() {
            return this.ro ? this.ro.ek() : this.point
        },
        ta: function(a) {
            if ((a instanceof R || a instanceof N) && !this.yx())
                this.point = this.D.position = new R(a.lng,a.lat)
        },
        Pc: ca("content"),
        yF: function(a) {
            0 <= a && 1 >= a && (this.D.opacity = a)
        },
        Pd: function(a) {
            a instanceof O && (this.D.Ea = new O(a.width,a.height))
        },
        wj: function() {
            return this.D.Ea
        },
        Rd: function(a) {
            a = a || {};
            this.D.uq = w.extend(this.D.uq, a)
        },
        Gi: function(a) {
            return this.Rd(a)
        },
        Gc: function(a) {
            this.D.title = a || ""
        },
        getTitle: function() {
            return this.D.title
        },
        lO: function(a) {
            this.point = (this.ro = a) ? this.D.position = a.ek() : this.D.position = s
        },
        yx: function() {
            return this.ro || s
        },
        Ik: u("content")
    });
    function Gd(a, b) {
        if (0 !== arguments.length) {
            rb.apply(this, arguments);
            b = b || {};
            this.D = {
                fb: a,
                opacity: b.opacity || 1,
                Jp: b.imageURL || "",
                Ns: b.displayOnMinLevel || 1,
                uj: b.enableMassClear === t ? t : q,
                Ms: b.displayOnMaxLevel || 19,
                j0: b.stretch || t
            };
            0 === b.opacity && (this.D.opacity = 0);
            Wa(Xa(2, 8), ["overlay", "ground_box"]);
            var c = this;
            bb.load("groundoverlay", function() {
                c.mb()
            })
        }
    }
    w.lang.va(Gd, rb, "GroundOverlay");
    w.extend(Gd.prototype, {
        setBounds: function(a) {
            this.D.fb = a
        },
        getBounds: function() {
            return this.D.fb
        },
        setOpacity: function(a) {
            this.D.opacity = a
        },
        getOpacity: function() {
            return this.D.opacity
        },
        setImageURL: function(a) {
            this.D.Jp = a
        },
        getImageURL: function() {
            return this.D.Jp
        },
        setDisplayOnMinLevel: function(a) {
            this.D.Ns = a
        },
        getDisplayOnMinLevel: function() {
            return this.D.Ns
        },
        setDisplayOnMaxLevel: function(a) {
            this.D.Ms = a
        },
        getDisplayOnMaxLevel: function() {
            return this.D.Ms
        }
    });
    var Hd = 3
      , Id = 4;
    function Jd() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function Kd(a, b) {
        var c = this;
        Jd() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        rb.apply(c, arguments),
        c.ha = {
            ia: a
        },
        c.D = {
            shape: b.shape || Hd,
            size: b.size || Id,
            color: b.color || "#fa937e",
            uj: q
        },
        this.kB = [],
        this.se = [],
        bb.load("pointcollection", function() {
            for (var a = 0, b; b = c.kB[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.se[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    w.lang.va(Kd, rb, "PointCollection");
    w.extend(Kd.prototype, {
        initialize: function(a) {
            this.kB && this.kB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.se && this.se.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.se && this.se.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.se && this.se.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.se && this.se.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var Ld = new Ad(L.ra + "marker_red_sprite.png",new O(19,25),{
        anchor: new O(10,25),
        infoWindowAnchor: new O(10,0)
    })
      , Md = new Ad(L.ra + "marker_red_sprite.png",new O(20,11),{
        anchor: new O(6,11),
        imageOffset: new O(-19,-13)
    });
    function Ed(a, b) {
        rb.call(this);
        b = b || {};
        this.point = a;
        this.Ma = (this.Qq = this.map = s) ? this.map.K.Ma : 5;
        this.D = {
            Ea: b.offset || new O(0,0),
            Ae: b.icon || Ld,
            cl: Md,
            title: b.title || "",
            label: s,
            gK: b.baseZIndex || 0,
            of: q,
            W6: t,
            zE: t,
            uj: b.enableMassClear === t ? t : q,
            gc: t,
            QN: b.raiseOnDrag === q ? q : t,
            XN: t,
            Hd: b.draggingCursor || L.Hd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.D.cl = s);
        b.enableDragging && (this.D.gc = b.enableDragging);
        Tb(b.enableClicking) && (this.D.of = b.enableClicking);
        Wa(Xa(2, 1), ["overlay", "marker"]);
        var c = this;
        bb.load("marker", function() {
            c.mb()
        })
    }
    Ed.Wu = wd.Ok(-90) + 1E6;
    Ed.BG = Ed.Wu + 1E6;
    w.lang.va(Ed, rb, "Marker");
    w.extend(Ed.prototype, {
        Vb: function(a) {
            if (a instanceof Ad || a instanceof Bd)
                this.D.Ae = a
        },
        xp: function() {
            return this.D.Ae
        },
        Ly: function(a) {
            a instanceof Ad && (this.D.cl = a)
        },
        getShadow: function() {
            return this.D.cl
        },
        Ij: function(a) {
            this.D.label = a || s
        },
        ft: function() {
            return this.D.label
        },
        gc: function() {
            this.D.gc = q
        },
        Ls: function() {
            this.D.gc = t
        },
        ek: u("point"),
        la: function() {
            return this.point instanceof R || this.point instanceof N ? this.map ? ob(this.point, this.map.K.Ma) : new R(this.point.lng,this.point.lat) : this.point
        },
        ta: function(a) {
            if (a instanceof R || a instanceof N)
                this.point = this.map ? fb(a, this.map.K.Ma) : new N(a.lng,a.lat)
        },
        Hi: function(a, b) {
            this.D.zE = !!a;
            a && (this.ZG = b || 0)
        },
        Gc: function(a) {
            this.D.title = a + ""
        },
        getTitle: function() {
            return this.D.title
        },
        Pd: function(a) {
            a instanceof O && (this.D.Ea = a)
        },
        wj: function() {
            return this.D.Ea
        },
        nn: ca("Qq"),
        Jy: function(a) {
            this.D.rotation = a
        },
        ML: function() {
            return this.D.rotation
        }
    });
    function Nd(a) {
        this.options = a || {};
        this.OZ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.VV = this.options.contextType || "2d"
    }
    Nd.prototype = new wd;
    Nd.prototype.initialize = function(a) {
        this.M = a;
        var b = this.canvas = document.createElement("canvas")
          , c = this.canvas.getContext(this.VV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Od(this);
        Pd(c);
        a.getPanes()[this.OZ].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            Od(e);
            Pd(c);
            e.mb()
        });
        return this.canvas
    }
    ;
    function Od(a) {
        var b = a.M.ub()
          , a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function Pd(a) {
        var b = (window.devicePixelRatio || 1) / (a.kV || a.Q6 || a.k5 || a.l5 || a.p5 || a.kV || 1)
          , c = a.canvas.width
          , e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Nd.prototype.draw = function() {
        var a = this
          , b = arguments;
        clearTimeout(a.x0);
        a.x0 = setTimeout(function() {
            a.mb.apply(a, b)
        }, 15)
    }
    ;
    ea = Nd.prototype;
    ea.mb = function() {
        var a = this.M;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    }
    ;
    ea.Ra = u("canvas");
    ea.show = function() {
        this.canvas || this.M.Pa(this);
        this.canvas.style.display = "block"
    }
    ;
    ea.$ = function() {
        this.canvas.style.display = "none"
    }
    ;
    ea.pq = function(a) {
        this.canvas.style.zIndex = a
    }
    ;
    ea.Ok = u("zIndex");
    function Qd(a, b) {
        yd.call(this, b);
        b = b || {};
        this.D.Cg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.D.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.Qd(a);
        var c = this;
        Wa(Xa(2, 4), ["overlay", "polygon"]);
        bb.load("poly", function() {
            c.mb()
        })
    }
    w.lang.va(Qd, yd, "Polygon");
    w.extend(Qd.prototype, {
        Qd: function(a, b) {
            this.Lo = yd.tx(a).slice(0);
            var c = yd.tx(a).slice(0);
            1 < c.length && c.push(new R(c[0].lng,c[0].lat));
            yd.prototype.Qd.call(this, c, b)
        },
        vn: function(a, b) {
            this.Lo[a] && (this.Lo[a] = new R(b.lng,b.lat),
            this.ia[a] = new R(b.lng,b.lat),
            0 == a && !this.ia[0].Tb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new R(b.lng,b.lat)),
            this.Kh())
        },
        Ze: function() {
            var a = this.Lo;
            0 == a.length && (a = this.ia);
            return a
        }
    });
    function Rd(a, b) {
        yd.call(this, b);
        this.Yr(a);
        var c = this;
        Wa(Xa(2, 3), ["overlay", "polyline"]);
        bb.load("poly", function() {
            c.mb()
        })
    }
    w.lang.va(Rd, yd, "Polyline");
    function Sd(a, b, c) {
        this.point = a;
        this.Da = Math.abs(b);
        Qd.call(this, [], c)
    }
    Sd.VE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    w.lang.va(Sd, Qd, "Circle");
    w.extend(Sd.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ia = this.xv(this.point, this.Da);
            this.Kh();
            return s
        },
        Eb: function() {
            return this.map ? ob(this.point, this.map.K.Ma) : this.point
        },
        tv: u("point"),
        zf: function(a) {
            a && (this.point = a)
        },
        KL: u("Da"),
        Af: function(a) {
            this.Da = Math.abs(a)
        },
        xv: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i
                  , m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k))
                  , k = new R(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new R(e.lng,e.lat));
            return c
        }
    });
    var Td = {};
    function Ud(a) {
        this.map = a;
        this.Fj = [];
        this.Cf = [];
        this.Sg = [];
        this.zV = 300;
        this.cF = 0;
        this.Kg = {};
        this.nj = {};
        this.Tk = 0;
        this.tE = q;
        this.lW = {};
        this.qo = this.br(1);
        this.xg = this.br(2);
        this.ng = this.br(3);
        this.Ql = this.br(4);
        a.platform.appendChild(this.qo);
        a.platform.appendChild(this.xg);
        a.platform.appendChild(this.Ql);
        a.platform.appendChild(this.ng);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = U.Qa(new N(180,0)).lng
          , c = c - a
          , b = -3 * b
          , e = U.Qa(new N(-180,0)).lng;
        this.qg = a;
        this.fh = e;
        this.Ll = c + (e - b);
        this.gh = a - e
    }
    C.df(function(a) {
        var b = new Ud(a);
        b.xa();
        a.ef = b
    });
    w.extend(Ud.prototype, {
        xa: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.Rp()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Se(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.fg(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Qg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Rc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.hu(b.target);
                a.dg(q)
            });
            b.addEventListener("initindoorlayer", function(b) {
                a.pE(b)
            })
        },
        Rp: function() {
            var a = this;
            if (w.fa.na)
                try {
                    document.execCommand("BackgroundImageCache", t, q)
                } catch (b) {}
            this.loaded || a.Qx();
            a.dg();
            this.loaded || (this.loaded = q,
            bb.load("tile", function() {
                a.jQ()
            }))
        },
        pE: function(a) {
            this.Iu = new Vd(this);
            this.Iu.Se(new Wd(this.map,this.Iu,a.$e))
        },
        Qx: function() {
            for (var a = this.map.wa().jf, b = 0; b < a.length; b++) {
                var c = new Xd;
                w.extend(c, a[b]);
                this.Fj.push(c);
                c.xa(this.map, this.qo)
            }
            this.hu()
        },
        br: function(a) {
            var b = I("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        Gf: function() {
            this.Tk--;
            var a = this;
            this.tE && (this.map.dispatchEvent(new Q("onfirsttileloaded")),
            this.tE = t);
            0 == this.Tk && (this.Xi && (clearTimeout(this.Xi),
            this.Xi = s),
            this.Xi = setTimeout(function() {
                if (a.Tk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.tE = q
                }
                a.Xi = s
            }, 80))
        },
        bE: function(a, b) {
            return "TILE-" + b.ca + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Lx: function(a) {
            var b = a.Fb;
            b && Mb(b) && b.parentNode.removeChild(b);
            delete this.Kg[a.name];
            a.loaded || (Yd(a),
            a.Fb = s,
            a.Xm = s)
        },
        VL: function(a, b, c) {
            var e = this.map
              , f = e.wa()
              , g = e.Xa
              , i = e.Gb
              , k = f.Ub(g)
              , m = this.AX()
              , n = m[0]
              , o = m[1]
              , p = m[2]
              , v = m[3]
              , z = m[4]
              , c = "undefined" != typeof c ? c : 0
              , f = f.ie()
              , m = e.ca.replace(/^TANGRAM_/, "");
            for (this.Ji ? this.Ji.length = 0 : this.Ji = []; n < p; n++)
                for (var B = o; B < v; B++) {
                    var A = n
                      , D = B;
                    this.Ji.push([A, D]);
                    A = m + "_" + b + "_" + A + "_" + D + "_" + g;
                    this.lW[A] = A
                }
            this.Ji.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([z[0] - 1, z[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Te ? this.Te.length = 0 : this.Te = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++)
                B = a.childNodes[n],
                B.Ar = t,
                this.Te.push(B);
            if (n = this.an)
                for (var F in n)
                    delete n[F];
            else
                this.an = {};
            this.Ue ? this.Ue.length = 0 : this.Ue = [];
            n = 0;
            for (e = this.Ji.length; n < e; n++) {
                F = this.Ji[n][0];
                k = this.Ji[n][1];
                B = 0;
                for (o = this.Te.length; B < o; B++)
                    if (p = this.Te[B],
                    p.id == m + "_" + b + "_" + F + "_" + k + "_" + g) {
                        p.Ar = q;
                        this.an[p.id] = p;
                        break
                    }
            }
            n = 0;
            for (e = this.Te.length; n < e; n++)
                p = this.Te[n],
                p.Ar || this.Ue.push(p);
            this.UF = [];
            B = (f + c) * this.map.K.devicePixelRatio;
            n = 0;
            for (e = this.Ji.length; n < e; n++)
                F = this.Ji[n][0],
                k = this.Ji[n][1],
                v = F * f + i[0] - c / 2,
                z = (-1 - k) * f + i[1] - c / 2,
                A = m + "_" + b + "_" + F + "_" + k + "_" + g,
                o = this.an[A],
                p = s,
                o ? (p = o.style,
                p.left = v + "px",
                p.top = z + "px",
                o.co || this.UF.push([F, k, o])) : (0 < this.Ue.length ? (o = this.Ue.shift(),
                o.getContext("2d").clearRect(-c / 2, -c / 2, B, B),
                p = o.style) : (o = document.createElement("canvas"),
                p = o.style,
                p.position = "absolute",
                p.width = f + c + "px",
                p.height = f + c + "px",
                this.eZ() && (p.WebkitTransform = "scale(1.001)"),
                o.setAttribute("width", B),
                o.setAttribute("height", B),
                a.appendChild(o)),
                o.id = A,
                p.left = v + "px",
                p.top = z + "px",
                -1 < A.indexOf("bg") && (v = "#F3F1EC",
                this.map.K.iV && (v = this.map.K.iV),
                p.background = v ? v : ""),
                this.UF.push([F, k, o])),
                o.style.visibility = "";
            n = 0;
            for (e = this.Ue.length; n < e; n++)
                this.Ue[n].style.visibility = "hidden";
            return this.UF
        },
        eZ: function() {
            return /M040/i.test(navigator.userAgent)
        },
        AX: function() {
            var a = this.map
              , b = a.wa()
              , c = b.$L(a.Xa)
              , e = a.Gb
              , f = Math.ceil(e.lng / c)
              , g = Math.ceil(e.lat / c)
              , b = b.ie()
              , c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        d0: function(a, b, c, e) {
            var f = this;
            f.R2 = b;
            var g = this.map.wa()
              , i = f.bE(a, c)
              , k = g.ie()
              , b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]]
              , m = this.Kg[i];
            if (this.map.wa() !== ab && this.map.wa() !== $a) {
                var n = this.tm(a[0], a[2]).offsetX;
                b[0] += n;
                b.l2 = n
            }
            m && m.Fb ? (Kb(m.Fb, b),
            e && (e = new T(a[0],a[1]),
            g = this.map.K.Ce ? this.map.K.Ce.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Zd(m, e)),
            m.loaded ? this.Gf() : $d(m, function() {
                f.Gf()
            })) : (m = this.nj[i]) && m.Fb ? (c.Kb.insertBefore(m.Fb, c.Kb.lastChild),
            this.Kg[i] = m,
            Kb(m.Fb, b),
            e && (e = new T(a[0],a[1]),
            g = this.map.K.Ce ? this.map.K.Ce.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Zd(m, e)),
            m.loaded ? this.Gf() : $d(m, function() {
                f.Gf()
            })) : (m = k * Math.pow(2, g.Xe() - a[2]),
            new N(a[0] * m,a[1] * m),
            e = new T(a[0],a[1]),
            g = this.map.K.Ce ? this.map.K.Ce.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m = new ae(this,e,b,a,c),
            $d(m, function() {
                f.Gf()
            }),
            m.po(),
            this.Kg[i] = m)
        },
        Gf: function() {
            this.Tk--;
            var a = this;
            0 == this.Tk && (this.Xi && (clearTimeout(this.Xi),
            this.Xi = s),
            this.Xi = setTimeout(function() {
                if (a.Tk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (wa) {
                        if (ta && ua && va) {
                            var b = mb()
                              , c = a.map.ub();
                            setTimeout(function() {
                                Za(5030, {
                                    load_script_time: ua - ta,
                                    load_tiles_time: b - va,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4)
                        }
                        wa = t
                    }
                }
                a.Xi = s
            }, 80))
        },
        bE: function(a, b) {
            return this.map.wa() === Ya ? "TILE-" + b.ca + "-" + this.map.Sw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ca + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Lx: function(a) {
            var b = a.Fb;
            b && (be(b),
            Mb(b) && b.parentNode.removeChild(b));
            delete this.Kg[a.name];
            a.loaded || (be(b),
            Yd(a),
            a.Fb = s,
            a.Xm = s)
        },
        tm: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
                a -= e,
                c -= this.Ll;
            for (; a < g; )
                a += e,
                c += this.Ll;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                oj: a
            }
        },
        jC: function(a) {
            for (var b = a.lng; b > this.qg; )
                b -= this.gh;
            for (; b < this.fh; )
                b += this.gh;
            a.lng = b;
            return a
        },
        kC: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.qg / c), f = Math.floor(this.fh / c), c = Math.floor(this.Ll / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i]
                  , m = k[0]
                  , k = k[1];
                if (m >= e) {
                    var m = m + c
                      , n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = q,
                    g.push([m, k]))
                } else
                    m <= f && (m -= c,
                    n = "id_" + m + "_" + k + "_" + b,
                    a[n] || (a[n] = q,
                    g.push([m, k])))
            }
            for (i = 0; i < g.length; i++)
                a.push(g[i]);
            return a
        },
        dg: function(a) {
            var b = this;
            if (b.map.wa() == Ya)
                bb.load("coordtrans", function() {
                    b.map.Ob || (b.map.Ob = Ya.Hk(b.map.oh),
                    b.map.Sw = Ya.wL(b.map.Ob));
                    b.vI()
                }, q);
            else {
                if (a && a)
                    for (var c in this.nj)
                        delete this.nj[c];
                b.vI(a)
            }
        },
        vI: function(a) {
            var b = this.map.K.Yf ? this.Cf : this.Fj.concat(this.Cf)
              , c = b.length
              , e = this.map
              , f = e.wa()
              , g = e.Gb
              , i = e.width
              , i = e.wa().Ub(e.Xa) * i
              , k = g.lng + i / 2
              , i = this.sM(g.lng - i / 2, k);
            this.map.wa() !== ab && this.map.wa() !== $a && (g = this.jC(g));
            for (var m = 0; m < c; m++) {
                var n = b[m];
                if (n.hc && e.Xa < n.hc)
                    break;
                if (n.Nw) {
                    k = this.Kb = n.Kb;
                    if (a) {
                        var o = k;
                        if (o && o.childNodes)
                            for (var p = o.childNodes.length, v = p - 1; 0 <= v; v--)
                                p = o.childNodes[v],
                                o.removeChild(p),
                                p = s
                    }
                    if (this.map.Td()) {
                        this.xg.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: q
                        });
                        continue
                    } else
                        k.style.display = "block",
                        this.xg.style.display = "none",
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!n.k2 && !(n.Wx && !this.map.Td() || n.BM && this.map.Td())) {
                    e = this.map;
                    f = e.wa();
                    p = f.yj();
                    k = e.Xa;
                    g = e.Gb;
                    f == Ya && g.Tb(new N(0,0)) && (g = e.Gb = p.vi(e.ee, e.Ob));
                    var z = f.Ub(k)
                      , p = f.$L(k)
                      , o = Math.ceil(g.lng / p)
                      , B = Math.ceil(g.lat / p)
                      , A = f.ie()
                      , p = [o, B, (g.lng - o * p) / p * A, (g.lat - B * p) / p * A]
                      , B = i ? 1.5 * (e.width / 2) : e.width / 2
                      , v = p[0] - Math.ceil((B - p[2]) / A)
                      , o = p[1] - Math.ceil((e.height / 2 - p[3]) / A)
                      , B = p[0] + Math.ceil((B + p[2]) / A)
                      , D = 0;
                    f === Ya && 15 == e.ka() && (D = 1);
                    f = p[1] + Math.ceil((e.height / 2 + p[3]) / A) + D;
                    this.cK = new N(g.lng,g.lat);
                    var F = this.Kg, A = -this.cK.lng / z, D = this.cK.lat / z, g = [Math.ceil(A), Math.ceil(D)], z = e.ka(), G;
                    for (G in F) {
                        var H = F[G]
                          , E = H.info;
                        (E[2] != z || E[2] == z && (v > E[0] || B <= E[0] || o > E[1] || f <= E[1])) && this.Lx(H)
                    }
                    F = -e.offsetX + e.width / 2;
                    H = -e.offsetY + e.height / 2;
                    n.Kb && (n.Kb.style.left = Math.ceil(A + F) - g[0] + "px",
                    n.Kb.style.top = Math.ceil(D + H) - g[1] + "px",
                    n.Kb.style.WebkitTransform = "translate3d(0,0,0)");
                    A = [];
                    for (e.PB = []; v < B; v++)
                        for (D = o; D < f; D++)
                            A.push([v, D]),
                            e.PB.push({
                                x: v,
                                y: D
                            });
                    this.map.wa() !== ab && this.map.wa() !== $a && (A = this.kC(A, k));
                    A.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([p[0] - 1, p[1] - 1]));
                    k = Math.ceil(this.qg / (256 * Math.pow(2, 18 - z)));
                    p = A.length;
                    this.Tk += p;
                    for (v = 0; v < p; v++) {
                        if (n.vO === q && (o = this.tm(A[v][0], z),
                        o.oj > k - 1 || o.oj < -k))
                            continue;
                        this.d0([A[v][0], A[v][1], z], g, n, a)
                    }
                }
            }
        },
        sM: function(a, b) {
            return a < this.fh || b > this.qg
        },
        Se: function(a) {
            var b = this
              , c = a.target;
            b.map.Td();
            c.Cn && this.map.Se(c.Cn);
            if (c.Wx) {
                for (a = 0; a < b.Sg.length; a++)
                    if (b.Sg[a] == c)
                        return;
                bb.load("vector", function() {
                    c.xa(b.map, b.xg);
                    b.Sg.push(c)
                }, q)
            } else {
                for (a = 0; a < b.Cf.length; a++)
                    if (b.Cf[a] == c)
                        return;
                c.xa(this.map, this.Ql);
                b.Cf.push(c)
            }
        },
        fg: function(a) {
            a = a.target;
            this.map.Td();
            a.Cn && this.map.fg(a.Cn);
            if (a.Wx)
                for (var b = 0, c = this.Sg.length; b < c; b++)
                    a == this.Sg[b] && this.Sg.splice(b, 1);
            else {
                b = 0;
                for (c = this.Cf.length; b < c; b++)
                    a == this.Cf[b] && this.Cf.splice(b, 1)
            }
            a.remove()
        },
        Qg: function() {
            for (var a = this.Fj, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Kb;
            this.Fj = [];
            this.nj = this.Kg = {};
            this.Qx();
            this.dg()
        },
        Rc: function() {
            var a = this;
            a.zd && w.R.$(a.zd);
            setTimeout(function() {
                a.dg();
                a.map.dispatchEvent(new Q("onzoomend"))
            }, 10)
        },
        G6: ba(),
        hu: function(a) {
            var b = this.map.wa();
            if (!this.map.Td() && (a ? this.map.K.m0 = a : a = this.map.K.m0,
            a))
                for (var c = s, c = "2" == C.Hu ? [C.url.proto + C.url.domain.main_domain_cdn.other[0] + "/"] : [C.url.proto + C.url.domain.main_domain_cdn.baidu[0] + "/", C.url.proto + C.url.domain.main_domain_cdn.baidu[1] + "/", C.url.proto + C.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.Fj[e]; e++)
                    if (f.vO == q) {
                        b.m.oc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x
                              , f = this.map.ef.tm(f, e).oj
                              , m = b.y
                              , n = ec("normal")
                              , o = 1;
                            this.map.Mx() && (o = 2);
                            n = window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? "customimage/tile?qt=customimage&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o : "customimage/tile?qt=customimage&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            n = c[Math.abs(f + m) % c.length] + n;
                            return n = ub(n)
                        }
                        ;
                        break
                    }
        }
    });
    function ae(a, b, c, e, f) {
        this.Xm = a;
        this.position = c;
        this.fv = [];
        this.name = a.bE(e, f);
        this.info = e;
        this.GJ = f.Jt();
        e = I("img");
        Lb(e);
        e.pL = t;
        var g = e.style
          , a = a.map.wa();
        g.position = "absolute";
        g.border = "none";
        g.width = a.ie() + "px";
        g.height = a.ie() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Fb = e;
        this.src = b;
        ce && (this.Fb.style.opacity = 0);
        var i = this;
        this.Fb.onload = function() {
            C.mZ.XQ();
            i.loaded = q;
            if (i.Xm) {
                var a = i.Xm
                  , b = a.nj;
                if (!b[i.name]) {
                    a.cF++;
                    b[i.name] = i
                }
                if (i.Fb && !Mb(i.Fb) && f.Kb) {
                    f.Kb.appendChild(i.Fb);
                    if (w.fa.na <= 6 && w.fa.na > 0 && i.GJ)
                        i.Fb.style.cssText = i.Fb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.cF - a.zV, e;
                for (e in b) {
                    if (c <= 0)
                        break;
                    if (!a.Kg[e]) {
                        b[e].Xm = s;
                        var g = b[e].Fb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            be(g)
                        }
                        g = s;
                        b[e].Fb = s;
                        delete b[e];
                        a.cF--;
                        c--
                    }
                }
                ce && new Gb({
                    Mc: 20,
                    duration: 200,
                    za: function(a) {
                        if (i.Fb && i.Fb.style)
                            i.Fb.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Fb && i.Fb.style && delete i.Fb.style.opacity
                    }
                });
                Yd(i)
            }
        }
        ;
        this.Fb.onerror = function() {
            Yd(i);
            if (i.Xm) {
                var a = i.Xm.map.wa();
                if (a.m.qD) {
                    i.error = q;
                    i.Fb.src = a.m.qD;
                    i.Fb && !Mb(i.Fb) && f.Kb.appendChild(i.Fb)
                }
            }
        }
        ;
        e = s
    }
    function $d(a, b) {
        a.fv.push(b)
    }
    ae.prototype.po = function() {
        this.Fb.src = 0 < w.fa.na && 6 >= w.fa.na && this.GJ ? L.ra + "blank.gif" : "" !== this.src && this.Fb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function Yd(a) {
        for (var b = 0; b < a.fv.length; b++)
            a.fv[b]();
        a.fv.length = 0
    }
    function be(a) {
        if (a) {
            a.onload = a.onerror = s;
            var b = a.attributes, c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    f = b[c].name,
                    hb(a[f]) && (a[f] = s)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    be(a.children[c])
            }
        }
    }
    function Zd(a, b) {
        a.src = b;
        a.po()
    }
    var ce = !w.fa.na || 8 < w.fa.na;
    function Xd(a) {
        this.$e = a || {};
        this.XV = this.$e.copyright || s;
        this.P0 = this.$e.transparentPng || t;
        this.Nw = this.$e.baseLayer || t;
        this.zIndex = this.$e.zIndex || 0;
        this.ca = Xd.GS++
    }
    Xd.GS = 0;
    w.lang.va(Xd, w.lang.Ha, "TileLayer");
    w.extend(Xd.prototype, {
        xa: function(a, b) {
            this.Nw && (this.zIndex = -100);
            this.map = a;
            if (!this.Kb) {
                var c = I("div")
                  , e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Kb = c
            }
        },
        remove: function() {
            this.Kb && this.Kb.parentNode && (this.Kb.innerHTML = "",
            this.Kb.parentNode.removeChild(this.Kb));
            delete this.Kb
        },
        Jt: u("P0"),
        getTilesUrl: function(a, b) {
            if (this.map.wa() !== ab && this.map.wa() !== $a)
                var c = this.map.ef.tm(a.x, b).oj;
            var e = "";
            this.$e.tileUrlTemplate && (e = this.$e.tileUrlTemplate.replace(/\{X\}/, c),
            e = e.replace(/\{Y\}/, a.y),
            e = e.replace(/\{Z\}/, b));
            return e
        },
        Fm: u("XV"),
        wa: function() {
            return this.Ua || Ta
        }
    });
    function de(a) {
        Xd.call(this, a);
        this.m = a || {};
        this.BM = q;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday)
                this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour)
                this.m.predictDate.hour = 0
        }
        this.IU = C.url.proto + C.url.domain.traffic + "/traffic/"
    }
    de.prototype = new Xd;
    de.prototype.xa = function(a, b) {
        Xd.prototype.xa.call(this, a, b);
        this.M = a;
        Wa(Xa(3, 3), ["layer", "traffic"])
    }
    ;
    de.prototype.Jt = da(q);
    de.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c = this.M.K.Yf ? c + "v=016&" : c + "label=web2D&v=016&");
        var c = this.IU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
          , e = 1;
        this.M.Mx() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var ee = [C.url.proto + C.url.domain.TILES_YUN_HOST[0] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[1] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[2] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , fe = C.url.proto + C.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , he = 100;
    function Ab(a, b) {
        Xd.call(this);
        var c = this;
        this.BM = q;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Ub(a) ? b = a || {} : (c.bo = a,
        b = b || {});
        b.geotableId && (c.Jf = b.geotableId);
        b.databoxId && (c.bo = b.databoxId);
        var f = C.bd + "geosearch";
        c.cb = {
            YE: b.pointDensity || he,
            DY: f + "/detail/",
            EY: f + "/v2/detail/",
            cC: b.age || 36E5,
            bF: b.q || "",
            HO: "png",
            F4: [5, 5, 5, 5],
            iZ: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            dC: b.ak || qa,
            QF: b.tags || "",
            filter: b.filter || "",
            JF: b.sortby || "",
            hE: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            cG: q
        };
        bb.load("clayer", function() {
            c.Bd()
        })
    }
    Ab.prototype = new Xd;
    Ab.prototype.xa = function(a, b) {
        Xd.prototype.xa.call(this, a, b);
        this.M = a
    }
    ;
    Ab.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = this.cb
          , g = ee[Math.abs(c + e) % ee.length]
          , c = window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost ? g + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.bF + "&tags=" + f.QF + "&filter=" + f.filter + "&sortby=" + f.JF + "&age=" + f.cC + "&page_size=" + f.YE + "&format=" + f.HO : g + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.bF + "&tags=" + f.QF + "&filter=" + f.filter + "&sortby=" + f.JF + "&ak=" + this.cb.dC + "&age=" + f.cC + "&page_size=" + f.YE + "&format=" + f.HO;
        f.cG || (f = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + f);
        this.Jf ? c += "&geotable_id=" + this.Jf : this.bo && (c += "&databox_id=" + this.bo);
        return c
    }
    ;
    Ab.prototype.enableUseCache = function() {
        this.cb.cG = q
    }
    ;
    Ab.prototype.disableUseCache = function() {
        this.cb.cG = t
    }
    ;
    Ab.fU = /^point\(|\)$/ig;
    Ab.gU = /\s+/;
    Ab.iU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var ie = {};
    function je(a, b) {
        this.ad = a;
        this.mQ = 18;
        this.m = {
            Au: 256,
            Cc: new U
        };
        w.extend(this.m, b || {})
    }
    var ke = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0]
      , le = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608]
      , ne = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19]
      , oe = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    je.prototype = {
        getName: u("ad"),
        ie: function(a) {
            return "na" === this.ad ? oe[a] : this.m.Au
        },
        wp: function(a) {
            return "na" === this.ad ? ne[a] : a
        },
        yj: function() {
            return this.m.Cc
        },
        Ub: function(a) {
            return Math.pow(2, this.mQ - a)
        },
        TD: function(a) {
            return "na" === this.ad ? le[ke[a]] : this.Ub(a) * this.ie(a)
        },
        wX: function(a) {
            a = Math.floor(a);
            return "na" === this.ad ? oe[ne[a]] : this.m.Au
        }
    };
    var pe = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0]
                      , n = f.Aj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], p = 0; p < o.length; p++) {
                            var v = o[p][1];
                            f.Nc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.dn(v[1], c, e, a)),
                            v = v["cache" + c],
                            f.M.Qo(b.canvas.id, v, {
                                type: "polygon",
                                bc: m,
                                style: n
                            }),
                            this.QW(b, v, n, c))
                        }
                }
        },
        QW: function(a, b, c, e) {
            c = c[0];
            if (!c.bc || !(6 < e && (71013 === c.bc || 71012 === c.bc || 71011 === c.bc) || 6 === e && (71011 === c.bc || 71012 === c.bc) || 5 === e && (71011 === c.bc || 71013 === c.bc) || 5 > e && (71012 === c.bc || 71013 === c.bc))) {
                a.fillStyle = c.mx;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2)
                    a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.Xo,
                a.lineWidth = c.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.Aj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][1];
                            f.Nc(p[0], c) && (p["cache" + c] || (p["cache" + c] = f.dn(p[1], c, e, a)),
                            p = p["cache" + c],
                            f.M.Qo(b.canvas.id, p, {
                                type: "polygon",
                                bc: k,
                                style: m
                            }),
                            this.SW(b, p, m))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.Aj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][1];
                            f.Nc(p[0], c) && (p["cache" + c] || (p["cache" + c] = f.dn(p[1], c, e, a)),
                            p = p["cache" + c],
                            f.M.Qo(b.canvas.id, p, {
                                type: "polygon",
                                bc: k,
                                style: m
                            }),
                            this.TW(b, p, m))
                        }
                }
        },
        SW: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.Xo;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        TW: function(a, b, c) {
            a.fillStyle = c[0].mx;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var qe = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.dn(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Nc(a[i], c)) {
                        var k = e[4 * i]
                          , m = e[4 * i + 1]
                          , n = e[4 * i + 2]
                          , o = e[4 * i + 3]
                          , p = (k + n) / 2
                          , v = (m + o) / 2
                          , n = (k - n) / f
                          , o = (m - o) / f
                          , k = p + n / 2
                          , n = p - n / 2
                          , m = v + o / 2
                          , o = v - o / 2;
                        this.IW(b, k, m, n, o)
                    }
            }
        },
        IW: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.AV([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        AV: function(a, b) {
            var c = b[0] - a[0]
              , e = b[1] - a[1]
              , f = 1.8 * Math.sqrt(c * c + e * e)
              , g = b[0] + 4.8410665352790705 * (c / f)
              , f = b[1] + 4.8410665352790705 * (e / f)
              , c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var re = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.Aj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][2];
                            if (f.Nc(p[0], c)) {
                                var v = p[2];
                                p["cache" + c] || (p["cache" + c] = f.dn(p[1], c, e, a));
                                p = p["cache" + c];
                                f.M.Qo(b.canvas.id, p, {
                                    type: "polygon",
                                    bc: k,
                                    style: m
                                });
                                this.RW(b, p, v, m)
                            }
                        }
                }
        },
        RW: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.hX;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.Xo,
                a.lineWidth = e.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        }
    };
    var se = {
        parse: function(a, b, c, e, f) {
            for (var g = e.M, i = g.ka(), k = Math.pow(2, 18 - i), m = g.Cc.vi(g.Eb()), n = m.lng, o = m.lat, m = g.ub(), p = m.width, v = m.height, m = [], z = 0; z < a.length; z++) {
                var B = []
                  , A = a[z].v0;
                B.x = A[0];
                B.y = A[1];
                B.V6 = A[2];
                for (var D = (A[0] * c * k - n) / k + p / 2, F = (o - (A[1] + 1) * c * k) / k + v / 2, G = 0; G < a[z].length; G++)
                    a[z][G].IM ? this.HN(a[z][G].IM, A, e, b, c, D, F, i, k, p, v, B) : a[z][G].KY ? this.HN(a[z][G].KY, A, e, b, c, D, F, i, k, p, v, B, q, window.J4) : this.UZ(a[z][G].jZ, A, e, b, c, D, F, i, k, p, v, B, f);
                m.push(B)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (z = 0; z < m.length; z++)
                    for (G = 0; G < m[z].length; G++)
                        a.push(m[z][G])
            } else
                a = this.h_(m, e.M.ka());
            g.NV();
            for (z = 0; z < a.length; z++)
                if (c = a[z],
                !c.Dt)
                    if (G = [c.bg, c.cg, c.bg, c.zi, c.yi, c.zi, c.yi, c.cg, c.bg, c.cg],
                    c.style && g.Qo("poi", G, {
                        type: "polygon",
                        bc: c.style.bc,
                        style: c.style
                    }),
                    "fixed" === c.type) {
                        G = t;
                        c.Ae && (c.style && 4 === c.direction) && (G = q);
                        if (c.Ae)
                            if (G) {
                                var H = this;
                                this.Us(b, c, e, G, function(a) {
                                    for (var c = 0; c < a.Bf.length; c++)
                                        H.WK(b, a.Bf[c].fe, a.Bf[c].ge, a.Bf[c].text, a.style, e)
                                })
                            } else
                                this.Us(b, c, e);
                        if (c.style && !G)
                            for (G = 0; G < c.Bf.length; G++)
                                this.WK(b, c.Bf[G].fe, c.Bf[G].ge, c.Bf[G].text, c.style, e)
                    } else if ("line" === c.type)
                        for (G = 0; G < c.nP.length; G++)
                            f = c.nP[G],
                            se.LW(b, f.fe, f.ge, f.dV, f.lP, f.width, f.height, c.style, e);
            return m
        },
        HN: function(a, b, c, e, f, g, i, k, m, n, o, p, v, z) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var B = a[b]
                      , A = B[0]
                      , D = c.Aj(A, "point", k, z)
                      , A = c.Aj(A, "pointText", k, z)
                      , B = B[1]
                      , F = s
                      , G = 100
                      , H = 0
                      , E = 0;
                    D && D[0] && (D = D[0],
                    F = D.Ae,
                    G = D.zoom || 100);
                    A = A && A[0] ? A[0] : s;
                    for (D = 0; D < B.length; D++) {
                        var J = B[D][4];
                        if (J && c.Nc(J[2], k)) {
                            var K = Math.round(J[0] / 100) / m + g
                              , P = f - Math.round(J[1] / 100) / m + i;
                            if (v || !(-50 > K || -50 > P || K > n + 50 || P > o + 50)) {
                                var S = J[7] || ""
                                  , la = {
                                    type: "fixed",
                                    uid: J[3] || "",
                                    name: S,
                                    Ay: J[4],
                                    yt: s,
                                    Bf: [],
                                    ly: [K, P],
                                    style: A
                                };
                                if (F) {
                                    var ma = window.iconSetInfo_high[F] || window.iconSetInfo_high["MapRes/" + F];
                                    if (!ma) {
                                        var Pa = F.charCodeAt(0);
                                        48 <= Pa && 57 >= Pa && (ma = window.iconSetInfo_high["_" + F])
                                    }
                                    ma && (H = ma[2],
                                    E = ma[3],
                                    H = H / 2 * G / 100,
                                    E = E / 2 * G / 100,
                                    la.yt = {
                                        fe: K - H / 2,
                                        ge: P - E / 2,
                                        width: H,
                                        height: E
                                    },
                                    la.Ae = F)
                                }
                                if (A) {
                                    J = J[5];
                                    "number" !== typeof J && (J = 0);
                                    var Ea = ma = 0
                                      , Pa = (A.fontSize || 12) / 2
                                      , Sa = 0.2 * Pa;
                                    e.font = se.sx(A, c);
                                    var S = S.split("\\")
                                      , ya = S.length;
                                    la.direction = J;
                                    for (var lb = 0; lb < ya; lb++) {
                                        var $h = S[lb]
                                          , ge = e.measureText($h).width;
                                        switch (J) {
                                        case 3:
                                            Ea = P - Pa / 2 * ya - Sa * (ya - 1) / 2;
                                            ma = K - ge - H / 2;
                                            Ea = Ea + Pa * lb + Sa * lb;
                                            break;
                                        case 1:
                                            Ea = P - Pa / 2 * ya - Sa * (ya - 1) / 2;
                                            ma = K + H / 2;
                                            Ea = Ea + Pa * lb + Sa * lb;
                                            break;
                                        case 2:
                                            Ea = P - E / 2 - Pa * ya - Sa * (ya - 1) - Sa;
                                            ma = K - ge / 2;
                                            Ea = Ea + Pa * lb + Sa * lb;
                                            break;
                                        case 0:
                                            Ea = P + E / 2 + Sa / 2;
                                            ma = K - ge / 2;
                                            Ea = Ea + Pa * lb + Sa * lb;
                                            break;
                                        case 4:
                                            Ea = P - Pa / 2 * ya - Sa * (ya - 1) / 2,
                                            ma = K - ge / 2,
                                            Ea = Ea + Pa * lb + Sa * lb
                                        }
                                        la.Bf.push({
                                            fe: ma,
                                            ge: Ea,
                                            width: ge,
                                            height: Pa,
                                            text: $h
                                        })
                                    }
                                }
                                p.push(la)
                            }
                        }
                    }
                }
        },
        UZ: function(a, b, c, e, f, g, i, k, m, n, o, p, v) {
            b = a[7].length;
            if ((n = c.Aj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = se.sx(n, c);
                var o = n.fontSize / 2
                  , z = a[1]
                  , B = a[2];
                if (B) {
                    for (var A = B.split("").length, D = a[4], F = D.slice(0, 2), G = 2; G < D.length; G += 2)
                        F[G] = F[G - 2] + D[G],
                        F[G + 1] = F[G - 1] + D[G + 1];
                    for (G = 2; G < D.length; G += 2)
                        0 === G % (2 * A) || 1 === G % (2 * A) || (F[G] = F[G - 2] + D[G] / v,
                        F[G + 1] = F[G - 1] + D[G + 1] / v);
                    for (v = 0; v < b; v++)
                        if (c.Nc(a[7][v], k)) {
                            var G = []
                              , H = l
                              , E = l
                              , J = l
                              , K = l
                              , P = B.split("");
                            a[6][v] && P.reverse();
                            for (var D = 2 * v * A, D = F.slice(D, D + 2 * A), S = 0; S < A; S++) {
                                var la = a[5][A * v + S]
                                  , ma = D[2 * S] / 100 / m + g
                                  , Pa = f - D[2 * S + 1] / 100 / m + i
                                  , Ea = P[S]
                                  , Sa = e.measureText(Ea).width;
                                if (H === l)
                                    H = ma - Sa / 2,
                                    E = Pa - o / 2,
                                    J = H + Sa,
                                    K = E + o;
                                else {
                                    var ya = ma - Sa / 2
                                      , lb = Pa - o / 2;
                                    ya < H && (H = ya);
                                    lb < E && (E = lb);
                                    ya + Sa > J && (J = ya + Sa);
                                    lb + o > K && (K = lb + o)
                                }
                                G.push({
                                    lP: Ea,
                                    fe: ma,
                                    ge: Pa,
                                    dV: la,
                                    width: Sa,
                                    height: o
                                })
                            }
                            p.push({
                                type: "line",
                                Ay: z,
                                style: n,
                                nP: G,
                                bg: H,
                                cg: E,
                                yi: J,
                                zi: K
                            })
                        }
                }
            }
        },
        Us: function(a, b, c, e, f) {
            var g = b.Ae;
            if ("lanche" !== g)
                if (se.Nx[g])
                    this.TK(a, b, se.Nx[g], e, f);
                else if (c = c.DL(g)) {
                    var i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function() {
                        se.Nx[g] = this;
                        k.TK(a, b, this, e, f);
                        i.onload = s
                    }
                    ;
                    i.src = c
                }
        },
        TK: function(a, b, c, e, f) {
            var g = b.yt
              , i = g.fe
              , k = g.ge
              , m = s
              , n = s
              , o = q
              , p = b.style ? b.style.bc : s;
            if (b.style && 62203 === p) {
                for (var v = n = m = 0; v < b.Bf.length; v++)
                    m < b.Bf[v].width && (m = b.Bf[v].width),
                    n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === p && (o = t);
            m !== s && n !== s ? this.PW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.Bf[0].width) + 6,
            this.HW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        PW: function(a, b, c, e, f, g) {
            var i = b.ly[0] - f / 2
              , b = b.ly[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        HW: function(a, b, c, e, f, g) {
            var i = b.ly[0] - f / 2
              , b = b.ly[1] - g / 2
              , g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        LW: function(a, b, c, e, f, g, i, k, m) {
            a.font = se.sx(k, m);
            a.fillStyle = k.mL;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Gx && (a.lineWidth = k.Gx,
            a.strokeStyle = k.eM,
            a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        WK: function(a, b, c, e, f, g) {
            a.font = se.sx(f, g);
            a.fillStyle = f.mL;
            0 < f.Gx && (a.lineWidth = f.Gx,
            a.strokeStyle = f.eM,
            a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        sx: function(a, b) {
            var c = a.fontSize / 2
              , e = 10 * a.fontWeight;
            return e = b.vM ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        h_: function(a, b) {
            var c = []
              , e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k]
                      , o = l
                      , p = l
                      , v = l
                      , z = l;
                    if ("fixed" === n.type) {
                        var B = n.yt
                          , A = n.Bf;
                        B && (o = B.fe,
                        p = B.ge,
                        v = B.fe + B.width,
                        z = B.ge + B.height);
                        for (B = 0; B < A.length; B++) {
                            var D = A[B];
                            o !== l ? (D.fe < o && (o = D.fe),
                            D.ge < p && (p = D.ge),
                            D.fe + D.width > v && (v = D.fe + D.width),
                            D.ge + D.height > z && (z = D.ge + D.height)) : (o = D.fe,
                            p = D.ge,
                            v = D.fe + D.width,
                            z = D.ge + D.height)
                        }
                    } else
                        "line" === n.type ? (o = n.bg,
                        p = n.cg,
                        v = n.yi,
                        z = n.zi) : "biaopai" === n.type && (z = n.F5,
                        o = z.fe,
                        p = z.ge,
                        v = z.fe + z.width,
                        z = z.ge + z.height);
                    o !== l && (n.bg = o,
                    n.cg = p,
                    n.yi = v,
                    n.zi = z,
                    c.push(n))
                }
            c.sort(function(a, b) {
                return b.Ay - a.Ay || b.bg - a.bg || b.cg - a.cg
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Dt = t;
                m.eK = [];
                for (k = f + 1; k < g; k++)
                    i = c[k],
                    m.yi - e < i.bg || (m.bg > i.yi - e || m.zi - e < i.cg || m.cg > i.zi - e) || m.eK.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f],
                k.Dt === t) {
                    e = k.eK;
                    k = 0;
                    for (m = e.length; k < m; k++)
                        c[e[k]].Dt = q
                }
            return c
        },
        Nx: {}
    };
    var te = ["round", "butt", "square"]
      , ue = ["miter", "round", "bevel"]
      , ve = {
        daojiao: [{
            stroke: "#FF6600",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        daojiao_bai: [{
            stroke: "#f5f3f0",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        junhuoxian: [],
        lundu: [{
            stroke: "#5c91c5",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [10, 11]
        }],
        shengjie: [],
        weidingguojie: [{
            stroke: "#aea08a",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        weidingguojie_guowai: [{
            stroke: "#a29e96",
            rb: 2,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        weidingguojie_guonei: [],
        weidingshengjie_guowai: []
    }
      , we = {
        weidingshengjie_guowai: [{
            stroke: "#737373",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        junhuoxian: [{
            stroke: "#DB7093",
            rb: 1.5,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }],
        shengjie: [{
            stroke: "#737373",
            rb: 1,
            pb: "round",
            qb: "round",
            Xc: [10, 4, 5, 4]
        }],
        weidingguojie_guonei: [{
            stroke: "#b2a471",
            rb: 2,
            pb: "round",
            qb: "round",
            Xc: [4, 3]
        }]
    }
      , xe = {};
    function ye(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility)
                return [];
            var e = "#ffffff"
              , f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b)
                return [{
                    stroke: e,
                    rb: 1.5,
                    pb: "butt",
                    qb: "round",
                    Xc: [10, 11]
                }, {
                    stroke: f,
                    rb: 2,
                    pb: "round",
                    qb: "round"
                }];
            if (17 <= b && 18 >= b)
                return [{
                    stroke: e,
                    rb: 2.5,
                    pb: "butt",
                    qb: "round",
                    Xc: [15, 16]
                }, {
                    stroke: f,
                    rb: 5,
                    pb: "round",
                    qb: "round"
                }];
            if (19 <= b && 20 >= b)
                return [{
                    stroke: e,
                    rb: 4.5,
                    pb: "butt",
                    qb: "round",
                    Xc: [25, 26]
                }, {
                    stroke: f,
                    rb: 5,
                    pb: "round",
                    qb: "round"
                }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b)
                return [{
                    stroke: "#868686",
                    rb: 1,
                    pb: "round",
                    qb: "round",
                    Xc: [7, 4]
                }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b)
                return [{
                    stroke: "#6e6e6e",
                    rb: 1,
                    pb: "round",
                    qb: "round",
                    Xc: [7, 4]
                }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 4,
                    pb: "square",
                    qb: "round"
                }, {
                    stroke: "#a8a8a8",
                    rb: 6,
                    pb: "square",
                    qb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 6,
                    pb: "square",
                    qb: "round"
                }, {
                    stroke: "#a8a8a8",
                    rb: 8,
                    pb: "square",
                    qb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 8,
                    pb: "square",
                    qb: "round"
                }, {
                    stroke: "#a8a8a8",
                    rb: 10,
                    pb: "square",
                    qb: "round"
                }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 4,
                    pb: "butt",
                    qb: "round",
                    Xc: [2, 1]
                }, {
                    stroke: "#bebebe",
                    rb: 6,
                    pb: "butt",
                    qb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 6,
                    pb: "butt",
                    qb: "round",
                    Xc: [3, 1]
                }, {
                    stroke: "#bebebe",
                    rb: 8,
                    pb: "butt",
                    qb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    rb: 8,
                    pb: "butt",
                    qb: "round",
                    Xc: [4, 2]
                }, {
                    stroke: "#bebebe",
                    rb: 10,
                    pb: "butt",
                    qb: "round"
                }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
            return 18 === b ? [{
                stroke: "#ffffff",
                rb: 6,
                pb: "butt",
                qb: "round",
                Xc: [4, 2]
            }, {
                stroke: "#bebebe",
                rb: 8,
                pb: "butt",
                qb: "round"
            }] : [{
                stroke: "#ffffff",
                rb: 8,
                pb: "butt",
                qb: "round",
                Xc: [4, 2]
            }, {
                stroke: "#bebebe",
                rb: 10,
                pb: "butt",
                qb: "round"
            }];
        return ve[a] || ve[a.replace("MapRes/", "")]
    }
    var ze = {
        drawLink: function(a, b, c, e, f) {
            this.ca = f.M.ca;
            var g = a[1];
            g && (a = a[6],
            this.WO(g, c, e, b, a, f, q),
            this.WO(g, c, e, b, a, f, t))
        },
        WO: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0]
                  , n = g.Aj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].Em || ye(n[0].Em, b, this.ca))
                        for (var o = a[k][1], p = 0; p < o.length; p++) {
                            var v = o[p][3];
                            g.Nc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.dn(v[1], b, c, f)),
                            v = v["cache" + b],
                            g.M.Qo(e.canvas.id, v, {
                                type: "polyline",
                                bc: m,
                                style: n
                            }),
                            this.MW(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.Aj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Nc(o[0], c)) {
                                var p;
                                o["cache" + c] || (o["cache" + c] = f.dn(o[1], c, e, a));
                                p = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.s1[c].Sc);
                                this.NW(b, p, k, o, f)
                            }
                        }
                }
        },
        NW: function(a, b, c, e, f) {
            var g = c[0].Em
              , i = this;
            if (xe[g])
                i.Us(b, e, a, xe[g]);
            else if (c = f.DL(g)) {
                var k = new Image;
                k.onload = function() {
                    xe[g] = k;
                    i.Us(b, e, a, k);
                    k.onload = s
                }
                ;
                k.src = c
            }
        },
        Us: function(a, b, c, e) {
            var f = [a[0], a[1]]
              , g = [a[2], a[3]]
              , a = g[0] - f[0]
              , g = g[1] - f[1]
              , f = [f[0] + a / 2, f[1] + g / 2]
              , i = Math.sqrt(a * a + g * g)
              , b = b / 10
              , a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        MW: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.Em) {
                var f = ye(c.Em, f, this.ca)
                  , g = we[c.Em] || we[c.Em.replace("MapRes/", "")];
                if (g) {
                    this.XK(a, b, c, g, q);
                    return
                }
                if (f) {
                    this.XK(a, b, c, f, t);
                    return
                }
            }
            a.beginPath();
            a.moveTo(b[0], b[1]);
            f = 2;
            for (g = b.length; f < g; f += 2)
                a.lineTo(b[f], b[f + 1]);
            c.borderWidth && e ? (a.strokeStyle = c.Xo,
            a.lineCap = te[c.tV],
            a.lineJoin = ue[1],
            a.lineWidth = c.borderWidth / 2,
            a.stroke()) : e || (a.strokeStyle = c.mx,
            a.lineCap = te[c.gX],
            a.lineJoin = ue[1],
            a.lineWidth = c.jL / 2,
            a.stroke())
        },
        XK: function(a, b, c, e, f) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.pb;
                a.lineJoin = c.qb;
                a.lineWidth = c.rb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, g = b.length; c < g; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.Xc)
                    f ? this.OW(a, b, e) : this.KW(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.pb;
                    a.lineJoin = e.qb;
                    a.lineWidth = e.rb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (g = b.length; c < g; c += 2)
                        a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        OW: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.pb;
            a.lineJoin = c.qb;
            a.lineWidth = c.rb;
            a.setLineDash(c.Xc);
            a.beginPath();
            for (c = 0; c < b.length - 2; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.stroke();
            a.setLineDash([])
        },
        KW: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.pb;
            a.lineJoin = c.qb;
            a.lineWidth = c.rb;
            var e = q
              , c = c.Xc[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f]
                  , i = b[f + 1]
                  , k = b[f + 2] - g
                  , m = b[f + 3] - i
                  , n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15
                  , m = Math.sqrt(k * k + m * m)
                  , o = c;
                for (a.moveTo(g, i); 0.1 <= m; ) {
                    o > m && (o = m);
                    var p = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (p = -p);
                    g += p;
                    i += n * p;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var Ae = 3, Be = 4, Ce = 7, De = 8, Ee = 15, Fe = 16, Ge = {}, He = {}, Ie = {}, Je, Ke = {
        3: {
            start: 3,
            Sc: 3
        },
        4: {
            start: 4,
            Sc: 5
        },
        5: {
            start: 4,
            Sc: 5
        },
        6: {
            start: 6,
            Sc: 7
        },
        7: {
            start: 6,
            Sc: 7
        },
        8: {
            start: 8,
            Sc: 9
        },
        9: {
            start: 8,
            Sc: 9
        },
        10: {
            start: 10,
            Sc: 10
        },
        11: {
            start: 11,
            Sc: 12
        },
        12: {
            start: 11,
            Sc: 12
        },
        13: {
            start: 11,
            Sc: 12
        },
        14: {
            start: 14,
            Sc: 15
        },
        15: {
            start: 14,
            Sc: 15
        },
        16: {
            start: 16,
            Sc: 17
        },
        17: {
            start: 16,
            Sc: 17
        },
        18: {
            start: 18,
            Sc: 19
        },
        19: {
            start: 18,
            Sc: 19
        },
        20: {
            start: 18,
            Sc: 19
        },
        21: {
            start: 18,
            Sc: 19
        }
    };
    function Le(a) {
        this.M = a;
        this.Kc = a.K.devicePixelRatio;
        this.s1 = Ke
    }
    Le.prototype = {
        WC: function(a, b, c, e, f, g, i, k, m) {
            this.M.BO = {};
            var n = this
              , o = n.M.ca;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m)
                setTimeout(function() {
                    n.WC(a, b, c, e, f, g, i, k, m + 1)
                }, 100);
            else {
                Je || (Je = k);
                var p = b.getContext("2d")
                  , v = b.parentNode;
                v.removeChild(b);
                p.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Kc;
                1 < v && !b._scale && (p.scale(v, v),
                b._scale = q);
                p.fillStyle = this.GN("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (p.fillStyle = this.GN(window[o + "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o;
                (o = Me.pY(c, g, i)) ? p.fillRect(o[0], o[1], o[2], o[3]) : p.fillRect(0, 0, g, g);
                if (a[0])
                    for (v = 0; v < a[0].length; v++) {
                        var z = a[0][v];
                        z[0] === Ce && pe.drawPoly(z, p, f, g, this)
                    }
                o && (0 < o[0] ? p.clearRect(0, 0, o[0], g) : p.clearRect(o[2], 0, g, g));
                17 <= this.M.ka() ? (n.VK(a, p, f, g, i, c, e),
                b.co = q) : setTimeout(function() {
                    if (!b.zH) {
                        n.VK(a, p, f, g, i, c, e);
                        b.co = q
                    }
                }, 1)
            }
        },
        VK: function(a, b, c, e) {
            var f = this.M.ca;
            if (a[0])
                for (var g = 0; g < a[0].length; g++) {
                    var i = a[0][g]
                      , k = i[0];
                    k === Be ? ze.drawLink(i, b, c, e, this) : k === Fe ? ze.drawLink(i, b, c, e, this) : k === Ee ? (pe.drawGaoqingRoadBorder(i, b, c, e, this),
                    pe.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && qe.drawArrow(i, b, c, e, Math.pow(2, c - Ke[c].Sc), this) : k === De ? re.drawHregion(i, b, c, e, this) : 19 === k && ze.drawSingleTexture(i, b, c, e, this)
                }
        },
        UK: function(a, b, c, e, f, g, i) {
            var k = this
              , m = k.M.ca;
            i || (i = 0);
            !window[m + "StyleBody"] && 100 > i ? setTimeout(function() {
                k.UK(a, b, c, e, f, g, i + 1)
            }, 100) : (Je || (Je = b),
            a.a_ = se.parse(a, c, e, this, f))
        },
        Aj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e)
                return Ge[f] || (Ge[f] = this.uf(a, b, c, e)),
                Ge[f];
            this.M.BO[f] = this.uf(a, b, c);
            return this.M.BO[f]
        },
        uf: function(a, b, c, e) {
            var f = this.M.ca, g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b)
                return this.QZ(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            var i = []
              , c = g[1][c - 1][0][a];
            if (!c)
                return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                    case "polygon":
                        k = this.ZZ(k, a);
                        break;
                    case "line":
                        k = this.VZ(k, a);
                        break;
                    case "pointText":
                        k = this.XZ(k, a);
                        break;
                    case "point":
                        k = this.WZ(k, a);
                        break;
                    case "polygon3d":
                        k = this.YZ(k, a)
                    }
                    k.m6 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        XZ: function(a, b) {
            return {
                bc: b,
                mL: this.Ng(a[0]),
                eM: this.Ng(a[1]),
                H2: this.Ng(a[2]),
                fontSize: a[3],
                Gx: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                sW: a[7]
            }
        },
        WZ: function(a, b) {
            return {
                bc: b,
                Ay: a[0],
                E6: a[1],
                Ae: a[2],
                GY: a[3],
                n5: a[4],
                sW: a[5],
                zoom: a[6]
            }
        },
        VZ: function(a, b) {
            return {
                bc: b,
                Xo: this.Ng(a[0]),
                mx: this.Ng(a[1]),
                borderWidth: a[2],
                jL: a[3],
                tV: a[4],
                gX: a[5],
                x4: a[6],
                y4: a[7],
                z4: a[8],
                S4: a[9],
                T4: a[10],
                uV: a[11],
                Em: a[12],
                vV: a[13],
                s3: a[14],
                Q4: a[15],
                v4: a[16],
                m5: a[17],
                R5: a[18]
            }
        },
        ZZ: function(a, b) {
            return {
                bc: b,
                mx: this.Ng(a[0]),
                Xo: this.Ng(a[1]),
                borderWidth: a[2],
                uV: a[3],
                vV: a[4],
                N6: a[5],
                u4: a[6],
                q6: a[7],
                r6: this.Ng(a[8])
            }
        },
        YZ: function(a, b) {
            return {
                bc: b,
                filter: a[0],
                RN: a[1],
                w4: a[2],
                borderWidth: a[3],
                Xo: this.Ng(a[4]),
                hX: this.Ng(a[5]),
                r3: this.Ng(a[6]),
                D5: a[7]
            }
        },
        QZ: function(a) {
            for (var b in a)
                return a = a[b],
                {
                    color: this.Ng(a[0]),
                    GY: a[1],
                    Ae: a[2]
                }
        },
        Ng: function(a) {
            var b = a;
            if (Ie[b])
                return Ie[b];
            a >>>= 0;
            Ie[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return Ie[b]
        },
        GN: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2)
                b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Nc: function(a, b) {
            var c;
            He[a] || (c = a.toString(2),
            8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
            He[a] = c);
            c = He[a];
            return "1" === c[b - Ke[b].start]
        },
        dn: function(a, b, c) {
            var e = []
              , b = Math.pow(2, b - Ke[b].Sc) / 100
              , f = a[0] * b
              , g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2)
                f += a[i] * b,
                g += a[i + 1] * b,
                e[e.length] = f,
                e[e.length] = c - g;
            return e
        },
        DL: function(a) {
            if (a) {
                var b = a.length % Je.length
                  , c = this.MX();
                return Je[b] + a + ".png?v=" + c.eG + "&udt=" + c.aG
            }
        },
        MX: function() {
            if (this.kE)
                return this.kE;
            var a = "undefined" !== typeof MSV ? MSV.mapstyle : {};
            return this.kE = {
                eG: a.version ? a.version : "001",
                aG: a.Q0 ? a.Q0 : "20150621"
            }
        }
    };
    Q = w.lang.Qu;
    Ae = 3;
    Be = 4;
    Ce = 7;
    De = 8;
    Ee = 15;
    Fe = 16;
    function Wd(a, b, c) {
        c = c || {};
        this.M = a;
        this.ww = b;
        this.Kc = b.RN;
        this.cb = {
            w0: "na",
            zIndex: 0,
            IO: c.tileUrls || {
                http: ["http://maponline0.bdimg.com/pvd/?qt=vtile", "http://maponline1.bdimg.com/pvd/?qt=vtile", "http://maponline2.bdimg.com/pvd/?qt=vtile", "http://maponline3.bdimg.com/pvd/?qt=vtile", "http://maponline0.bdimg.com/pvd/?qt=vtile"],
                https: ["https://maponline0.bdimg.com/pvd/?qt=vtile", "https://maponline1.bdimg.com/pvd/?qt=vtile", "https://maponline2.bdimg.com/pvd/?qt=vtile", "https://maponline3.bdimg.com/pvd/?qt=vtile", "https://maponline0.bdimg.com/pvd/?qt=vtile"]
            },
            jE: c.iconUrls || ["https://maponline0.bdimg.com/sty/map_icons2x/", "https://maponline1.bdimg.com/sty/map_icons2x/"],
            FF: q
        };
        this.MB = "";
        this.cT = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        }, e;
        for (e in c)
            c.hasOwnProperty(e) && (this.MB = this.MB + "&" + e + "=" + c[e]);
        this.qh = {};
        this.Fs = [];
        this.Kt = 0;
        this.Ux = t;
        this.Nx = {};
        a = this.cb.w0;
        ie[a] ? a = ie[a] : (b = new je(a,l),
        a = ie[a] = b);
        this.Fd = a;
        this.M.Fd = this.Fd
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    ea = Wd.prototype;
    ea.xa = function() {
        var a = this.M
          , b = a.ef;
        if (!this.Mo) {
            var c = b.br(this.cb.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Mo = c
        }
        b.ng.appendChild(this.Mo);
        b.K4 = c;
        if (this.cb.FF) {
            Ne(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY
                      , k = e.Fs.a_;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o],
                                !a.Dt && a.yt && b > a.bg && b < a.yi && c > a.cg && c < a.zi) {
                                    b = a.yt;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.fe + b.width / 2,
                                            y: b.ge + 6
                                        }
                                    };
                                    break a
                                }
                    b = s
                }
                b && (a = new Q("onvectorclick"),
                a.G4 = b,
                a.We = "base",
                this.dispatchEvent(a))
            })
        }
    }
    ;
    function Ne(a) {
        var b = a.M
          , c = b.ef
          , e = a.Kc
          , f = b.ub()
          , g = f.width
          , f = f.height
          , i = I("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.Yx = i;
        a.Op = i.getContext("2d");
        a.Op.scale(e, e);
        a.Op.textBaseline = "top";
        c.ng.appendChild(i);
        b.NS = i
    }
    ea.qY = u("Fd");
    ea.update = function(a, b) {
        b = b || {};
        this.bG = b.bG;
        b.Dm && (this.R0 = b.Dm);
        if (this.cb.FF && (b.um && this.um(),
        b.e0)) {
            var c = this.Kc
              , e = this.M.ub()
              , f = e.width
              , e = e.height
              , g = this.Yx
              , i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Op.scale(c, c);
            this.Op.textBaseline = "top"
        }
        if (b.H6) {
            c = this.Mo;
            f = 0;
            for (e = c.childNodes.length; f < e; f++)
                c.childNodes[f].co = t
        }
        this.ax = a;
        this.Rp(a)
    }
    ;
    ea.Rp = function(a) {
        this.Fs = [];
        var b = this.M
          , c = b.ka()
          , e = b.Cc.vi(b.ee)
          , f = this.Fd.Ub(c)
          , e = [Math.round(-e.lng / f), Math.round(e.lat / f)]
          , f = this.Fd.ie(c)
          , g = b.ca.replace(/^TANGRAM_/, "")
          , i = this.Fd.wp(c)
          , b = this.M
          , k = -b.offsetY + b.height / 2
          , m = this.Mo;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Te ? this.Te.length = 0 : this.Te = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.Ar = t;
            this.Te.push(n)
        }
        if (b = this.an)
            for (var o in b)
                delete b[o];
        else
            this.an = {};
        this.Ue ? this.Ue.length = 0 : this.Ue = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , p = a[b][1];
            o = Me.tm(a[b][0], a[b][2], a[b][3], c);
            o.offsetX && (a[b][0] = o.oj,
            a[b][4] = n,
            a[b][5] = o.offsetX);
            n = a[b][0];
            o = 0;
            for (var v = this.Te.length; o < v; o++) {
                var z = this.Te[o];
                if (z.id === g + "_" + n + "_" + p + "_" + i + "_" + c) {
                    z.Ar = q;
                    this.an[z.id] = z;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Te.length; b < k; b++)
            z = this.Te[b],
            z.Ar || (z.QB = s,
            delete z.QB,
            z.co = t,
            this.Ue.push(z));
        o = [];
        v = f * this.Kc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , p = a[b][1]
              , z = a[b][4] ? a[b][4] * f + e[0] + a[b][5] : n * f + e[0]
              , B = (-1 - p) * f + e[1]
              , A = g + "_" + n + "_" + p + "_" + i + "_" + c
              , D = this.an[A]
              , F = s;
            if (D)
                F = D.style,
                F.left = z + "px",
                F.top = B + "px",
                F.width = f + "px",
                F.height = f + "px",
                D.co ? D.TF && D.TF && this.Fs.push(D.TF) : (D.zH = q,
                D.QB = s,
                delete D.QB,
                o.push([n, p, D]));
            else {
                if (0 < this.Ue.length) {
                    var D = this.Ue.shift()
                      , G = D.getContext("2d");
                    D.getAttribute("width") !== v && (D._scale = t);
                    D.setAttribute("width", v);
                    D.setAttribute("height", v);
                    F = D.style;
                    F.width = f + "px";
                    F.height = f + "px";
                    G.clearRect(0, 0, v, v)
                } else
                    D = document.createElement("canvas"),
                    F = D.style,
                    F.position = "absolute",
                    this.cb.backgroundColor && (F.background = this.cb.backgroundColor),
                    F.width = f + "px",
                    F.height = f + "px",
                    D.setAttribute("width", v),
                    D.setAttribute("height", v),
                    m.appendChild(D);
                D.id = A;
                F.left = z + "px";
                F.top = B + "px";
                o.push([n, p, D])
            }
            D.style.visibility = ""
        }
        b = 0;
        for (k = this.Ue.length; b < k; b++)
            this.Ue[b].style.visibility = "hidden";
        if (0 === o.length) {
            Oe(this);
            a = this.M.ca.replace(/^TANGRAM_/, "");
            c = this.M.ka();
            e = this.Fd.wp(c);
            f = {};
            for (g = 0; g < this.ax.length; g++)
                i = this.ax[g],
                i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
                this.qh[i] && (f[i] = this.qh[i],
                this.bG && this.ww.XC.WC(this.qh[i].d1, this.qh[i].u0, this.qh[i].oj, this.qh[i].ln, this.qh[i].IE, this.Fd.ie(this.qh[i].IE), this.Fd.TD(this.qh[i].IE), this.cb.jE));
            this.qh = f
        } else {
            this.Kt = o.length;
            this.Ux = t;
            c = this.Fd.wp(this.M.ka());
            for (e = 0; e < a.length; e++)
                a[e][3] = c;
            for (e = 0; e < o.length; e++)
                a = o[e][2],
                f = o[e][0],
                g = o[e][1],
                o[e][3] = c,
                a.co = t,
                a.zH = t,
                Pe(this, f, g, c, a)
        }
    }
    ;
    function Pe(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e
          , i = a.cT;
        if (i[g]) {
            if ("loading" === i[g].status)
                return
        } else
            i[g] = {
                status: "init",
                YN: 0
            };
        var k = a
          , m = k.M
          , n = []
          , n = "0" === C.Hu ? k.cb.IO.http : k.cb.IO.https
          , o = Math.abs(b + c) % n.length
          , p = "x=" + b + "&y=" + c + "&z=" + e
          , v = Qe(a.ww)
          , z = v.eG
          , v = v.aG
          , B = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36)
          , p = p + a.MB + "v=" + z + "&udt=" + v + "&fn=window." + B
          , z = n[o] + "&" + p
          , z = n[o] + "&param=" + window.encodeURIComponent(Wb(p));
        window[B] = function(a) {
            clearTimeout(i[g].il);
            i[g] = s;
            if (a) {
                var n = m.ka(), o;
                a: {
                    for (o = 0; o < k.ax.length; o++) {
                        var p = k.ax[o];
                        if (p[0] === b && p[1] === c && p[3] === e) {
                            o = q;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Kc
                    });
                    m.dispatchEvent(o);
                    if (m.K.Ck) {
                        if (k.qh[f.id] = {
                            d1: a,
                            u0: f,
                            oj: b,
                            ln: c,
                            IE: n
                        },
                        k.ww.XC.WC(a, f, b, c, n, k.Fd.ie(n), k.Fd.TD(n), k.cb.jE),
                        k.cb.FF) {
                            n = [];
                            n.v0 = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++)
                                    a[0][o][0] === Ae && n.push({
                                        IM: a[0][o]
                                    });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++)
                                    n.push({
                                        jZ: a[2][o]
                                    });
                            f.TF = n;
                            k.Fs.push(n);
                            k.Ux === t && k.Kt--;
                            (0 === k.Kt || k.Ux === q) && Oe(k)
                        }
                    } else
                        k.Kt--,
                        (0 === k.Kt || k.Ux === q) && Oe(k);
                    delete window[B]
                }
            }
        }
        ;
        ra(z);
        i[g].status = "loading";
        k = a;
        i[g].il = setTimeout(function() {
            3 > i[g].YN ? (i[g].YN++,
            i[g].status = "init",
            Pe(k, b, c, e, f)) : i[g] = s
        }, 4E3)
    }
    function Oe(a) {
        if (a.Yx) {
            var b = a.M;
            a.Yx.style.left = -b.offsetX + "px";
            a.Yx.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.NS;
            b.dispatchEvent(c);
            if (b.K.Ck) {
                a.um();
                var c = a.Fd
                  , e = b.ka()
                  , f = c.wp(b.ka());
                a.ww.XC.UK(a.Fs, a.cb.jE, a.Op, c.ie(e), Math.pow(2, e - f), e);
                "moving" !== a.R0 && b.dispatchEvent(new Q("ontilesloaded"))
            }
        }
    }
    ea.um = function() {
        var a = this.M.ub()
          , b = this.Kc;
        this.Op.clearRect(0, 0, a.width * b, a.height * b)
    }
    ;
    ea.remove = function() {
        var a = this.M.ef;
        this.Mo && a.ng.removeChild(this.Mo)
    }
    ;
    function Vd(a) {
        this.M = a.map;
        this.jf = [];
        this.gs = {};
        this.RN = this.M.K.devicePixelRatio;
        this.XC = new Le(this.M);
        this.xa()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    ea = Vd.prototype;
    ea.xa = function() {
        var a = this
          , b = this.M;
        b.addEventListener("addtilelayer", function(b) {
            a.Se(b.target)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.fg(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) {
                "centerAndZoom" !== b.Yz && a.update({
                    Dm: "moveend"
                })
            });
            b.addEventListener("onmoving", function() {
                a.update({
                    Dm: "moving"
                })
            });
            b.addEventListener("onzoomend", function(b) {
                "centerAndZoom" !== b.Yz && a.update({
                    um: q,
                    Dm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function() {
                a.update({
                    um: q,
                    Dm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function() {
                a.update({
                    um: q,
                    bG: q,
                    Dm: "updatestyles"
                });
                a.M.zf(a.M.Eb());
                setTimeout(function() {
                    a.M.dispatchEvent(new Q("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function(b) {
                b.Ua === Ta && a.update({
                    um: q,
                    Dm: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", ba());
        b.addEventListener("onresize", function() {
            a.update({
                e0: q
            })
        });
        a.update()
    }
    ;
    ea.Se = function(a) {
        if (a instanceof Wd) {
            for (var b = 0; b < this.jf.length; b++)
                if (this.jf[b] === a)
                    return;
            this.jf.push(a);
            a.xa();
            this.M.loaded && this.update()
        }
    }
    ;
    ea.fg = function(a) {
        if (a instanceof Wd) {
            for (var b = 0; b < this.jf.length; b++)
                if (this.jf[b] === a) {
                    this.jf.splice(b, 1);
                    break
                }
            a.remove()
        }
    }
    ;
    ea.VL = function(a) {
        var b = a.getName();
        if (this.gs[b])
            return this.gs[b];
        var c = this.M
          , e = c.ka()
          , f = a.wp(e)
          , g = c.Gb
          , g = Me.jC(g)
          , i = a.TD(Math.floor(e))
          , a = a.wX(e);
        c.ca.replace(/^TANGRAM_/, "");
        var e = Math.ceil(g.lng / i)
          , g = Math.ceil(g.lat / i)
          , k = 0
          , m = 0
          , n = c.yX()
          , n = Me.DV(n, c.Gb);
        n.kf.lng > Me.qg && (c = Me.NL(f),
        k = Math.ceil(c / a));
        n.nf.lng < Me.fh && (c = Me.NL(f),
        m = Math.ceil(c / a));
        if (1.9505879362428114E7 < n.kf.lat || -1.5949096637571886E7 > n.nf.lat)
            n.kf.lat = 1.9505879362428114E7,
            n.nf.lat = -1.5949096637571886E7;
        for (var c = [Math.floor(n.nf.lng / i) - m, Math.floor(n.nf.lat / i)], o = [Math.floor(n.kf.lng / i) + k, Math.floor(n.kf.lat / i)], k = [], n = o[0] + 1, m = c[1], o = o[1] + 1, c = c[0]; c < n; c++)
            if (Me.Vx(c, f, a) !== q)
                for (var p = m; p < o; p++)
                    k.push([c, p, f, a]);
        k = Me.kC(k, f, a, i);
        k.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([e, g]));
        this.gs[b] = k;
        return this.gs[b]
    }
    ;
    function Qe(a) {
        if (a.fG)
            return a.fG;
        a.fG = {
            eG: "001",
            aG: ec("normal")
        };
        return a.fG
    }
    ea.update = function(a) {
        this.gs = {};
        for (var b = 0; b < this.jf.length; b++) {
            var c = this.jf[b]
              , e = this.VL(c.Fd);
            c.update(e, a)
        }
    }
    ;
    function Re(a, b, c) {
        this.ad = a;
        this.jf = b instanceof Xd ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            y0: c.tips || "",
            CE: "",
            hc: c.minZoom || 4,
            oc: c.maxZoom || 18,
            E4: c.minZoom || 4,
            D4: c.maxZoom || 18,
            Au: 256,
            SF: c.textColor || "black",
            qD: c.errorImageUrl || "",
            fb: new qb(new R(-21364736,-16023552),new R(23855104,19431424)),
            Cc: c.projection || new U
        };
        1 <= this.jf.length && (this.jf[0].Nw = q);
        w.extend(this.m, c)
    }
    w.extend(Re.prototype, {
        getName: u("ad"),
        nt: function() {
            return this.m.y0
        },
        Y3: function() {
            return this.m.CE
        },
        oY: function() {
            return this.jf[0]
        },
        o4: u("jf"),
        ie: function() {
            return this.m.Au
        },
        sf: function() {
            return this.m.hc
        },
        Xe: function() {
            return this.m.oc
        },
        setMaxZoom: function(a) {
            this.m.oc = a
        },
        Om: function() {
            return this.m.SF
        },
        yj: function() {
            return this.m.Cc
        },
        R3: function() {
            return this.m.qD
        },
        ie: function() {
            return this.m.Au
        },
        Ub: function(a) {
            return Math.pow(2, 18 - a)
        },
        $L: function(a) {
            return this.Ub(a) * this.ie()
        },
        AF: function(a) {
            this.yj().hO(a)
        }
    });
    var Se = [C.url.proto + C.url.domain.TILE_BASE_URLS[0], C.url.proto + C.url.domain.TILE_BASE_URLS[1], C.url.proto + C.url.domain.TILE_BASE_URLS[2], C.url.proto + C.url.domain.TILE_BASE_URLS[3]]
      , Te = [C.url.proto + C.url.domain.TILE_ONLINE_URLS[0] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[1] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[2] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[3] + "/tile/"]
      , Ue = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , Ve = new Xd;
    Ve.vO = q;
    Ve.getTilesUrl = function(a, b, c) {
        var e = a.x
          , a = a.y
          , f = ec("normal")
          , g = 1
          , c = Ue[c];
        // this.map.Mx() && (g = 2);
        // e = this.map.ef.tm(e, b).oj;
        // return (Te[Math.abs(e + a) % Te.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == w.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
        let tdir = bmapcfg.tiles_dir.length > 0 ? bmapcfg.tiles_dir: bmapcfg.home + "tiles";
        // console.log(tdir + '/' + b + '/' + e + '/' + a + bmapcfg.imgext);
        // return 'http://localhost/tiles' + '/' + b + '/' + e + '/' + a + bmapcfg.imgext; //使用nginx的瓦片 区别
        return tdir + '/' + b + '/' + e + '/' + a + bmapcfg.imgext; //使用本地的瓦片
    }
    ;
    var Ta = new Re("\u5730\u56fe",Ve,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , We = new Xd;
    We.GO = [C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    We.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = 256 * Math.pow(2, 20 - b)
          , e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.GO[Math.abs(c + e) % this.GO.length] + this.map.Ob + "/" + this.map.Sw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    }
    ;
    var Ya = new Re("\u4e09\u7ef4",We,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new sb
    });
    Ya.Ub = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Ya.Hk = function(a) {
        if (!a)
            return "";
        var b = L.pC, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].ty;
        return ""
    }
    ;
    Ya.wL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var Xe = new Xd({
        Nw: q
    });
    Xe.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y;
        return (Se[Math.abs(c + e) % Se.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + ec("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var ab = new Re("\u536b\u661f",Xe,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    })
      , Ye = new Xd({
        transparentPng: q
    });
    Ye.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = ec("satelliteStreet");
        return (Te[Math.abs(c + e) % Te.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == w.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var $a = new Re("\u6df7\u5408",[Xe, Ye],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var Ze = 1
      , X = {};
    window.w1 = X;
    function Y(a, b) {
        w.lang.Ha.call(this);
        this.nd = {};
        this.qn(a);
        b = b || {};
        b.ma = b.renderOptions || {};
        this.m = {
            ma: {
                ya: b.ma.panel || s,
                map: b.ma.map || s,
                zg: b.ma.autoViewport || q,
                du: b.ma.selectFirstResult,
                Qm: b.ma.highlightMode,
                gc: b.ma.enableDragging || t
            },
            Tt: b.onSearchComplete || ba(),
            vN: b.onMarkersSet || ba(),
            uN: b.onInfoHtmlSet || ba(),
            xN: b.onResultsHtmlSet || ba(),
            tN: b.onGetBusListComplete || ba(),
            sN: b.onGetBusLineComplete || ba(),
            qN: b.onBusListHtmlSet || ba(),
            pN: b.onBusLineHtmlSet || ba(),
            TE: b.onPolylinesSet || ba(),
            cq: b.reqFrom || ""
        };
        this.m.ma.zg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : q;
        this.m.ma.ya = w.Hc(this.m.ma.ya)
    }
    w.va(Y, w.lang.Ha);
    w.extend(Y.prototype, {
        getResults: function() {
            return this.Jc ? this.Ui : this.ja
        },
        enableAutoViewport: function() {
            this.m.ma.zg = q
        },
        disableAutoViewport: function() {
            this.m.ma.zg = t
        },
        qn: function(a) {
            a && (this.nd.src = a)
        },
        ku: function(a) {
            this.m.Tt = a || ba()
        },
        setMarkersSetCallback: function(a) {
            this.m.vN = a || ba()
        },
        setPolylinesSetCallback: function(a) {
            this.m.TE = a || ba()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.uN = a || ba()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.xN = a || ba()
        },
        Mm: u("Qe")
    });
    var $e = {
        MG: C.bd,
        jb: function(a, b, c, e, f) {
            var g = (1E5 * Math.random()).toFixed(0);
            C._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : b.result && b.result.error && 403 === b.result.error ? C.Tp !== s && C.Tp.update("\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002") : (c = c || {},
                a && a(b, c),
                delete C._rd["_cbk" + g])
            }
            ;
            e = e || "";
            b = c && c.W0 ? Sb(b, encodeURI) : Sb(b, encodeURIComponent);
            this.MG = c && c.eL ? c.WN ? c.WN : C.Sp : C.bd;
            e = this.MG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            window._BMapSecurityConfig || (e += "&ak=" + qa);
            ra(e + ("&callback=BMap._rd._cbk" + g))
        },
        O5: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && C.alog("cus.fire", "count", b)
            }
        }
    };
    window.G1 = $e;
    C._rd = {};
    var kb = {};
    window.F1 = kb;
    kb.gF = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    kb.RZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    kb.SZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var af = 2
      , bf = 6
      , cf = 8
      , df = 2
      , ef = 3
      , ff = 6
      , gf = 0
      , hf = "bt"
      , jf = "nav"
      , kf = "walk"
      , lf = "bl"
      , mf = "bsl"
      , nf = "ride"
      , of = 15
      , pf = 18;
    C.I = window.Instance = w.lang.je;
    function qf(a, b, c) {
        w.lang.Ha.call(this);
        if (a) {
            this.Ya = "object" == typeof a ? a : w.Hc(a);
            this.page = 1;
            this.Md = 100;
            this.dK = "pg";
            this.eg = 4;
            this.nK = b;
            this.update = q;
            a = {
                page: 1,
                w6: 100,
                Md: 100,
                eg: 4,
                dK: "pg",
                update: q
            };
            c || (c = a);
            for (var e in c)
                "undefined" != typeof c[e] && (this[e] = c[e]);
            this.za()
        }
    }
    w.extend(qf.prototype, {
        za: function() {
            this.xa()
        },
        xa: function() {
            this.IV();
            this.Ya.innerHTML = this.gW()
        },
        IV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Md)) && (this.Md = 1);
            1 > this.page && (this.page = 1);
            1 > this.Md && (this.Md = 1);
            this.page > this.Md && (this.page = this.Md);
            this.page = parseInt(this.page);
            this.Md = parseInt(this.Md)
        },
        f4: function() {
            location.search.match(RegExp("[?&]?" + this.dK + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        gW: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.eg) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ca + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ca + "').toPage(" + b + ");"))
            }
            if (this.page < this.eg)
                e = 0 == this.page % this.eg ? this.page - this.eg - 1 : this.page - this.page % this.eg + 1,
                b = e + this.eg - 1;
            else {
                e = Math.floor(this.eg / 2);
                var f = this.eg % 2 - 1
                  , b = this.Md > this.page + e ? this.page + e : this.Md;
                e = this.page - e - f
            }
            this.page > this.Md - this.eg && this.page >= this.eg && (e = this.Md - this.eg + 1,
            b = this.Md);
            for (f = e; f <= b; f++)
                0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Md && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>",
                a.push(e.replace("{temp3}", "BMap.I('" + this.ca + "').toPage(" + f + ");"))));
            c > this.Md || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ca + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.nK && (this.nK(a),
            this.page = a);
            this.update && this.za()
        }
    });
    function nb(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.tn(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.PC() : this.iD();
        this.sa = [];
        this.Df = [];
        this.Ja = -1;
        this.Oa = [];
        var c = this;
        bb.load("local", function() {
            c.Fz()
        }, q)
    }
    w.va(nb, Y, "LocalSearch");
    nb.Gq = 10;
    nb.B1 = 1;
    nb.On = 100;
    nb.AG = 2E3;
    nb.JG = 1E5;
    w.extend(nb.prototype, {
        search: function(a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        mn: function(a, b, c) {
            this.Oa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        jq: function(a, b, c, e) {
            this.Oa.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        ue: function() {
            delete this.Ia;
            delete this.Qe;
            delete this.ja;
            delete this.qa;
            this.Ja = -1;
            this.Va();
            this.m.ma.ya && (this.m.ma.ya.innerHTML = "")
        },
        Pm: ba(),
        iD: function() {
            this.m.ma.du = q
        },
        PC: function() {
            this.m.ma.du = t
        },
        tn: function(a) {
            this.m.Vk = "number" == typeof a && !isNaN(a) ? 1 > a ? nb.Gq : a > nb.On ? nb.Gq : a : nb.Gq
        },
        Ye: function() {
            return this.m.Vk
        },
        toString: da("LocalSearch")
    });
    var rf = nb.prototype;
    W(rf, {
        clearResults: rf.ue,
        setPageCapacity: rf.tn,
        getPageCapacity: rf.Ye,
        gotoPage: rf.Pm,
        searchNearby: rf.jq,
        searchInBounds: rf.mn,
        search: rf.search,
        enableFirstResultSelection: rf.iD,
        disableFirstResultSelection: rf.PC
    });
    function sf(a, b) {
        Y.call(this, a, b)
    }
    w.va(sf, Y, "BaseRoute");
    w.extend(sf.prototype, {
        ue: ba()
    });
    function tf(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.un(b.policy);
        this.wF(b.intercityPolicy);
        this.BF(b.transitTypePolicy);
        this.tn(b.pageCapacity);
        this.Bb = hf;
        this.Pn = Ze;
        this.sa = [];
        this.Ja = -1;
        this.m.Al = b.enableTraffic || t;
        this.Oa = [];
        var c = this;
        bb.load("route", function() {
            c.Bd()
        })
    }
    tf.On = 100;
    tf.EP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    tf.FP = [0, 3, 4, 0, 0, 0, 5];
    w.va(tf, sf, "TransitRoute");
    w.extend(tf.prototype, {
        un: function(a) {
            this.m.Nd = 0 <= a && 5 >= a ? a : 0
        },
        wF: function(a) {
            this.m.Um = 0 <= a && 2 >= a ? a : 0
        },
        BF: function(a) {
            this.m.zn = 0 <= a && 2 >= a ? a : 0
        },
        FA: function(a, b) {
            this.Oa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        tn: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.m.Vk = tf.On;
                return
            }
            this.m.Vk = "number" !== typeof a ? tf.On : 1 <= a && a <= tf.On ? Math.round(a) : tf.On
        },
        toString: da("TransitRoute"),
        t2: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var uf = tf.prototype;
    W(uf, {
        _internalSearch: uf.FA
    });
    function vf(a, b) {
        Y.call(this, a, b);
        this.sa = [];
        this.Ja = -1;
        this.Oa = [];
        var c = this
          , e = this.m.ma;
        1 !== e.Qm && 2 !== e.Qm && (e.Qm = 1);
        this.fo = this.m.ma.gc ? q : t;
        bb.load("route", function() {
            c.Bd()
        });
        this.Rx && this.Rx()
    }
    vf.TP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    w.va(vf, sf, "DWRoute");
    w.extend(vf.prototype, {
        search: function(a, b, c) {
            this.Oa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function wf(a, b) {
        vf.call(this, a, b);
        b = b || {};
        this.m.Al = b.enableTraffic || t;
        this.un(b.policy);
        this.Bb = jf;
        this.Pn = ef;
        Wa(Xa(4, 1), ["service", "drive"])
    }
    w.va(wf, vf, "DrivingRoute");
    wf.prototype.un = function(a) {
        this.m.Nd = 0 <= a && 11 >= a ? a : 0
    }
    ;
    function xf(a, b) {
        vf.call(this, a, b);
        this.Bb = kf;
        this.Pn = df;
        this.fo = t;
        Wa(Xa(4, 4), ["service", "walk"])
    }
    w.va(xf, vf, "WalkingRoute");
    function yf(a, b) {
        vf.call(this, a, b);
        b = b || {};
        this.m.Al = b.enableTraffic || t;
        this.YS = b.renderOptions.lineType || 0;
        this.Bb = jf;
        this.Pn = ef;
        Wa(Xa(4, 2), ["service", "truck"])
    }
    w.va(yf, vf, "TruckRoute");
    yf.prototype.un = function(a) {
        this.m.Nd = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function zf(a, b) {
        vf.call(this, a, b);
        this.Bb = nf;
        this.Pn = ff;
        this.fo = t;
        Wa(Xa(4, 3), ["service", "ride"])
    }
    w.va(zf, vf, "RidingRoute");
    function Af(a, b) {
        w.lang.Ha.call(this);
        this.ag = [];
        this.Xk = [];
        this.m = b;
        this.Ej = a;
        this.map = this.m.ma.map || s;
        this.dO = this.m.dO;
        this.Cb = s;
        this.Ak = 0;
        this.OF = "";
        this.rf = 1;
        this.pD = "";
        this.dq = [0, 0, 0, 0, 0, 0, 0];
        this.TM = [];
        this.Ds = [1, 1, 1, 1, 1, 1, 1];
        this.PO = [1, 1, 1, 1, 1, 1, 1];
        this.fq = [0, 0, 0, 0, 0, 0, 0];
        this.kn = [0, 0, 0, 0, 0, 0, 0];
        this.Ib = [{
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }, {
            p: "",
            Vf: 0,
            An: 0,
            x: 0,
            y: 0,
            rc: -1
        }];
        this.li = -1;
        this.Cu = [];
        this.$F = [];
        bb.load("route", ba())
    }
    w.lang.va(Af, w.lang.Ha, "RouteAddr");
    var Bf = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Bf);
    var Cf = /android/i.test(Bf);
    function Df(a) {
        this.$e = a || {}
    }
    w.extend(Df.prototype, {
        cO: function(a, b, c) {
            var e = this;
            bb.load("route", function() {
                e.Bd(a, b, c)
            })
        }
    });
    function Ef(a) {
        this.m = {};
        w.extend(this.m, a);
        this.Oa = [];
        var b = this;
        bb.load("othersearch", function() {
            b.Bd()
        })
    }
    w.va(Ef, w.lang.Ha, "Geocoder");
    w.extend(Ef.prototype, {
        Lm: function(a, b, c) {
            this.Oa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Im: function(a, b, c) {
            this.Oa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var Ff = Ef.prototype;
    W(Ff, {
        getPoint: Ff.Lm,
        getLocation: Ff.Im
    });
    function Geolocation(a) {
        a = a || {};
        this.K = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            Oi: a.SDKLocation || t
        };
        this.se = [];
        var b = this;
        bb.load("othersearch", function() {
            for (var a = 0, e; e = b.se[a]; a++)
                b[e.method].apply(b, e.arguments)
        })
    }
    w.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.se.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return af
        },
        enableSDKLocation: function() {
            M() && (this.K.Oi = q)
        },
        disableSDKLocation: function() {
            this.K.Oi = t
        }
    });
    function Gf(a) {
        a = a || {};
        a.ma = a.renderOptions || {};
        this.m = {
            ma: {
                map: a.ma.map || s
            }
        };
        this.Oa = [];
        var b = this;
        bb.load("othersearch", function() {
            b.Bd()
        })
    }
    w.va(Gf, w.lang.Ha, "LocalCity");
    w.extend(Gf.prototype, {
        get: function(a) {
            this.Oa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });
    function Hf() {
        this.Oa = [];
        var a = this;
        bb.load("othersearch", function() {
            a.Bd()
        })
    }
    w.va(Hf, w.lang.Ha, "Boundary");
    w.extend(Hf.prototype, {
        get: function(a, b) {
            this.Oa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });
    function If(a, b) {
        Y.call(this, a, b);
        this.QP = lf;
        this.SP = of;
        this.PP = mf;
        this.RP = pf;
        this.Oa = [];
        Wa(Xa(4, 5), ["service", "bus"]);
        var c = this;
        bb.load("buslinesearch", function() {
            c.Bd()
        })
    }
    If.Hv = L.ra + "iw_plus.gif";
    If.MS = L.ra + "iw_minus.gif";
    If.EU = L.ra + "stop_icon.png";
    w.va(If, Y);
    w.extend(If.prototype, {
        getBusList: function(a) {
            this.Oa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Oa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.tN = a || ba()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.sN = a || ba()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.qN = a || ba()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.pN = a || ba()
        },
        setPolylinesSetCallback: function(a) {
            this.m.TE = a || ba()
        }
    });
    function Jf(a) {
        Y.call(this, a);
        a = a || {};
        this.cb = {
            input: a.input || s,
            gC: a.baseDom || s,
            types: a.types || [],
            Tt: a.onSearchComplete || ba()
        };
        this.nd.src = a.location || "\u5168\u56fd";
        this.kj = "";
        this.wg = s;
        this.gI = "";
        this.aj();
        Za(Ka);
        var b = this;
        bb.load("autocomplete", function() {
            b.Bd()
        })
    }
    w.va(Jf, Y, "Autocomplete");
    w.extend(Jf.prototype, {
        aj: ba(),
        show: ba(),
        $: ba(),
        CF: function(a) {
            this.cb.types = a
        },
        qn: function(a) {
            this.nd.src = a
        },
        search: ca("kj"),
        Gy: ca("gI"),
        ku: function(a) {
            this.cb.Tt = a
        }
    });
    var cb;
    function Va(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Ne && db() && f.m.haveBreakId && f.m.indoorExitControl === q ? w.R.show(f.wr) : w.R.$(f.wr),
            this.td && this.m.closeControl && this.Hf && this.M && this.M.Ra() === this.P ? w.R.show(f.Hf) : w.R.$(f.Hf),
            this.m.forceCloseControl && w.R.show(f.Hf),
            Wa(Xa(3, 5), ["layer", "pano"])) : (w.R.$(f.Hf),
            w.R.$(f.wr))
        }
        this.P = "string" == typeof a ? w.ea(a) : a;
        this.ca = Kf++;
        this.m = {
            enableScrollWheelZoom: q,
            panoramaRenderer: Ua() ? "javascript" : "flash",
            swfSrc: C.vh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: q,
            indoorExitControl: q,
            indoorFloorControl: t,
            linksControl: q,
            clickOnRoad: q,
            navigationControl: q,
            closeControl: q,
            indoorSceneSwitchControl: q,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {}, e;
        for (e in b)
            this.m[e] = b[e];
        b.closeControl === q && (this.m.forceCloseControl = q);
        b.useWebGL === t && Ua(t);
        this.La = {
            heading: 0,
            pitch: 0
        };
        this.oo = [];
        this.Mb = this.gb = s;
        this.qk = this.tr();
        this.sa = [];
        this.Rc = 1;
        this.Ne = this.jT = this.Yg = "";
        this.Me = {};
        this.Tf = s;
        this.ih = [];
        this.Mr = [];
        "cvsRender" == this.qk || Ua() ? (this.ik = 90,
        this.kk = -90) : "cssRender" == this.qk && (this.ik = 45,
        this.kk = -45);
        this.Pr = t;
        var f = this
          , g = (1E5 * Math.random()).toFixed(0);
        C._rd = C._rd || {};
        C._rd["_cbk" + g] = function(a) {
            if (!a || a.error === l || a.error !== 0)
                bd("PANORAMA");
            else {
                this.qk === "flashRender" ? bb.load("panoramaflash", function() {
                    f.aj()
                }, q) : bb.load("panorama", function() {
                    f.mb()
                }, q);
                b.We == "api" ? Za(Ga) : Za(Ha)
            }
            delete C._rd["_cbk" + g]
        }
        ;
        this.po = function() {
            ad("PANORAMA", "BMap._rd._cbk" + g);
            this.po = ba()
        }
        ;
        this.m.WS !== q && this.po();
        this.QT(this.P);
        this.addEventListener("id_changed", function() {
            Za(Fa, {
                from: b.We
            })
        });
        this.eQ();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Lf = 4
      , Mf = 1
      , Nf = 5
      , Kf = 0;
    w.lang.va(Va, w.lang.Ha, "Panorama");
    w.extend(Va.prototype, {
        eQ: function() {
            var a = this
              , b = this.Hf = I("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.$()
            }
            ;
            this.P.appendChild(b);
            var c = this.wr = I("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.qp()
            }
            ;
            this.P.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        qp: ba(),
        QT: function(a) {
            var b, c;
            b = a.style;
            c = eb(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = eb(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        RX: u("oo"),
        Yb: u("gb"),
        rY: u("rw"),
        tO: u("rw"),
        la: u("Mb"),
        Ka: u("La"),
        ka: u("Rc"),
        Eg: u("Yg"),
        h4: function() {
            return this.p2 || []
        },
        a4: u("jT"),
        mt: u("Ne"),
        Ky: function(a) {
            a !== this.Ne && (this.Ne = a,
            this.dispatchEvent(new Q("onscene_type_changed")))
        },
        sO: function(a) {
            a !== Nf && (Nf = a)
        },
        nO: function(a) {
            a !== Lf && (Lf = a)
        },
        Fc: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = l);
            a != this.gb && (this.Jl = this.gb,
            this.Kl = this.Mb,
            this.gb = a,
            this.Ne = b || "street",
            this.Mb = s,
            c && c.pov && this.vd(c.pov))
        },
        ta: function(a) {
            a.Tb(this.Mb) || (this.Jl = this.gb,
            this.Kl = this.Mb,
            this.Mb = a,
            this.gb = s)
        },
        vd: function(a) {
            if (a) {
                var a = this.La.pitch
                  , b = this.La.heading
                  , b = this.IC(b);
                a > this.ik ? a = this.ik : a < this.kk && (a = this.kk);
                this.Pr = q;
                this.La.pitch = a;
                this.La.heading = b
            }
        },
        V_: function(a, b) {
            this.kk = 0 <= a ? 0 : a;
            this.ik = 0 >= b ? 0 : b
        },
        IC: function(a) {
            return a - 360 * Math.floor(a / 360)
        },
        Vc: function(a) {
            a != this.Rc && (a > Lf && (a = Lf),
            a < Mf && (a = Mf),
            a != this.Rc && (this.Rc = a),
            "cssRender" === this.qk && this.vd(this.La))
        },
        zB: function() {
            if (this.M)
                for (var a = this.M.Ax(), b = 0; b < a.length; b++)
                    (a[b]instanceof Ed || a[b]instanceof Fd) && a[b].point && this.sa.push(a[b])
        },
        xF: ca("M"),
        ju: function(a) {
            this.Tf = a || "none"
        },
        Jj: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.m[b][c] = a[b][c];
                else
                    this.m[b] = a[b];
                a.closeControl === q && (this.m.forceCloseControl = q);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new Q("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new Q("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new Q("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new Q("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new Q("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new Q("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new Q("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new Q("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        Qk: function() {
            this.Sl.style.visibility = "hidden"
        },
        Oy: function() {
            this.Sl.style.visibility = "visible"
        },
        YW: function() {
            this.m.enableScrollWheelZoom = q
        },
        yW: function() {
            this.m.enableScrollWheelZoom = t
        },
        show: function() {
            this.m.visible = q
        },
        $: function() {
            this.m.visible = t
        },
        tr: function() {
            return db() && !M() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !M() && ac() ? "cvsRender" : "cssRender"
        },
        Pa: function(a) {
            this.Me[a.od] = a
        },
        Jb: function(a) {
            delete this.Me[a]
        },
        Fx: function() {
            return this.m.visible
        },
        th: function() {
            return new O(this.P.clientWidth,this.P.clientHeight)
        },
        Ra: u("P"),
        tL: function() {
            var a = C.vh("baidumap", "?")
              , b = this.Yb();
            if (b) {
                var b = {
                    panotype: this.mt(),
                    heading: this.Ka().heading,
                    pitch: this.Ka().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Jx: function() {
            this.Jj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        GF: function() {
            this.Jj({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        XB: function(a) {
            function b(a, b) {
                return function() {
                    a.Mr.push({
                        eN: b,
                        dN: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
                e = c[f],
                this[e] = b(this, e);
            this.ih.push(a)
        },
        hF: function(a) {
            for (var b = this.ih.length; b--; )
                this.ih[b] === a && this.ih.splice(b, 1)
        },
        vF: ba()
    });
    var Of = Va.prototype;
    W(Of, {
        setId: Of.Fc,
        setPosition: Of.ta,
        setPov: Of.vd,
        setZoom: Of.Vc,
        setOptions: Of.Jj,
        getId: Of.Yb,
        getPosition: Of.la,
        getPov: Of.Ka,
        getZoom: Of.ka,
        getLinks: Of.RX,
        getBaiduMapUrl: Of.tL,
        hideMapLogo: Of.Jx,
        showMapLogo: Of.GF,
        enableDoubleClickZoom: Of.n3,
        disableDoubleClickZoom: Of.f3,
        enableScrollWheelZoom: Of.YW,
        disableScrollWheelZoom: Of.yW,
        show: Of.show,
        hide: Of.$,
        addPlugin: Of.XB,
        removePlugin: Of.hF,
        getVisible: Of.Fx,
        addOverlay: Of.Pa,
        removeOverlay: Of.Jb,
        getSceneType: Of.mt,
        setPanoramaPOIType: Of.ju,
        exitInter: Of.qp,
        setInteractiveState: Of.vF
    });
    W(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Pf() {
        w.lang.Ha.call(this);
        this.od = "PanoramaOverlay_" + this.ca;
        this.V = s;
        this.Ta = q
    }
    w.lang.va(Pf, w.lang.Ha, "PanoramaOverlayBase");
    w.extend(Pf.prototype, {
        d4: u("od"),
        xa: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Sf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Qf(a, b) {
        Pf.call(this);
        var c = {
            position: s,
            altitude: 2,
            displayDistance: q
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Mb = c.position;
        this.Vj = a;
        this.Pq = c.altitude;
        this.rR = c.displayDistance;
        this.SF = c.color;
        this.iM = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.fK = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.jK = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.lE = c.imageUrl;
        this.size = c.size;
        this.Be = c.image;
        this.width = c.width;
        this.height = c.height;
        this.JY = c.imageData;
        this.borderWidth = c.borderWidth
    }
    w.lang.va(Qf, Pf, "PanoramaLabel");
    w.extend(Qf.prototype, {
        G3: u("borderWidth"),
        getImageData: u("JY"),
        Om: u("SF"),
        V3: u("iM"),
        C3: u("backgroundColor"),
        D3: u("fK"),
        E3: u("borderColor"),
        F3: u("jK"),
        T3: u("fontSize"),
        e4: u("padding"),
        W3: u("lE"),
        ub: u("size"),
        ux: u("Be"),
        ta: function(a) {
            this.Mb = a;
            this.Sf("position", a)
        },
        la: u("Mb"),
        Pc: function(a) {
            this.Vj = a;
            this.Sf("content", a)
        },
        Ik: u("Vj"),
        pF: function(a) {
            this.Pq = a;
            this.Sf("altitude", a)
        },
        up: u("Pq"),
        Ka: function() {
            var a = this.la()
              , b = s
              , c = s;
            this.V && (c = this.V.la());
            if (a && c)
                if (a.Tb(c))
                    b = this.V.Ka();
                else {
                    b = {};
                    b.heading = Rf(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.up()
                      , e = this.jo();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        jo: function() {
            var a = 0, b, c;
            this.V && (b = this.V.la(),
            (c = this.la()) && !c.Tb(b) && (a = U.Jk(b, c)));
            return a
        },
        $: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Sf: ba()
    });
    var Sf = Qf.prototype;
    W(Sf, {
        setPosition: Sf.ta,
        getPosition: Sf.la,
        setContent: Sf.Pc,
        getContent: Sf.Ik,
        setAltitude: Sf.pF,
        getAltitude: Sf.up,
        getPov: Sf.Ka,
        show: Sf.show,
        hide: Sf.$
    });
    function Tf(a, b) {
        Pf.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: s,
            altitude: 2
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Mb = a;
        this.dI = c.icon;
        this.BJ = c.title;
        this.Pq = c.altitude;
        this.BT = c.panoInfo;
        this.La = {
            heading: 0,
            pitch: 0
        }
    }
    w.lang.va(Tf, Pf, "PanoramaMarker");
    w.extend(Tf.prototype, {
        ta: function(a) {
            this.Mb = a;
            this.Sf("position", a)
        },
        la: u("Mb"),
        Gc: function(a) {
            this.BJ = a;
            this.Sf("title", a)
        },
        Dp: u("BJ"),
        Vb: function(a) {
            this.dI = icon;
            this.Sf("icon", a)
        },
        xp: u("dI"),
        pF: function(a) {
            this.Pq = a;
            this.Sf("altitude", a)
        },
        up: u("Pq"),
        VD: u("BT"),
        Ka: function() {
            var a = s;
            if (this.V) {
                var a = this.V.la()
                  , b = this.la()
                  , a = Rf(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.La;
            return a
        },
        Sf: ba()
    });
    var Uf = Tf.prototype;
    W(Uf, {
        setPosition: Uf.ta,
        getPosition: Uf.la,
        setTitle: Uf.Gc,
        getTitle: Uf.Dp,
        setAltitude: Uf.pF,
        getAltitude: Uf.up,
        getPanoInfo: Uf.VD,
        getIcon: Uf.xp,
        setIcon: Uf.Vb,
        getPov: Uf.Ka
    });
    function Rf(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Ua(a) {
        if ("boolean" === typeof Vf)
            return Vf;
        if (a === t || !window.WebGLRenderingContext)
            return Vf = t;
        if (w.platform.Rk) {
            a = 0;
            try {
                var b = s
                  , c = navigator.userAgent.toLowerCase();
                0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                b = parseInt(b.split(".")[0], 10));
                a = b
            } catch (e) {
                console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
            }
            if (5 > a)
                return Vf = t
        }
        c = document.createElement("canvas");
        a = s;
        try {
            a = c.getContext("webgl")
        } catch (f) {
            Vf = t
        }
        return Vf = a === s ? t : q
    }
    var Vf;
    function Wf() {
        if ("boolean" === typeof Xf)
            return Xf;
        Xf = q;
        if (w.platform.vM)
            return q;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? q : Xf = t
    }
    var Xf;
    function od(a, b) {
        this.V = a || s;
        var c = this;
        c.V && c.ga();
        bb.load("pservice", function() {
            c.KQ()
        });
        "api" == (b || {}).We ? Za(Ia) : Za(Ja);
        this.Ad = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    C.Wk(function(a) {
        "flashRender" !== a.tr() && new od(a,{
            We: "api"
        })
    });
    w.extend(od.prototype, {
        ga: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.rw) {
                        b.tO(a.id);
                        b.ha = a;
                        Wf() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.gb != s && (b.Kl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Mb = a[c];
                                    break;
                                case "id":
                                    b.gb = a[c];
                                    break;
                                case "links":
                                    b.oo = a[c];
                                    break;
                                case "zoom":
                                    b.Rc = a[c]
                                }
                        if (b.Kl) {
                            var g = b.Kl
                              , i = b._position;
                            c = g.lat;
                            var k = i.lat
                              , m = bc(k - c)
                              , g = bc(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(bc(c)) * Math.cos(bc(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.wH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.rm ? (b.Jj({
                            haveBreakId: q
                        }),
                        db() && b.m.closeControl && w.R.show(b.wr)) : w.R.$(b.wr)
                    }
                } else
                    b.gb = b.Jl,
                    b.Mb = b.Kl,
                    b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.V
              , c = this;
            b.addEventListener("id_changed", function() {
                C.Zy("y");
                c.Bp(b.Yb(), a)
            });
            b.addEventListener("iid_changed", function() {
                C.Zy("y");
                c.vg(od.tl + "qt=idata&iid=" + b.vA + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , f = {};
                        f.rm = b.BreakID;
                        for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.Bp(f.id, a, f)
                    }
                }, q)
            });
            b.addEventListener("position_changed_inner", function() {
                C.Zy("y");
                c.xj(b.la(), a)
            })
        },
        Bp: function(a, b) {
            this.Ad.getPanoramaById.push(arguments)
        },
        xj: function(a, b, c) {
            this.Ad.getPanoramaByLocation.push(arguments)
        },
        fE: function(a, b, c, e) {
            this.Ad.getVisiblePOIs.push(arguments)
        },
        Dx: function(a, b) {
            this.Ad.getRecommendPanosById.push(arguments)
        },
        Cx: function(a) {
            this.Ad.getPanoramaVersions.push(arguments)
        },
        nC: function(a, b) {
            this.Ad.checkPanoSupportByCityCode.push(arguments)
        },
        Bx: function(a, b) {
            this.Ad.getPanoramaByPOIId.push(arguments)
        },
        xL: function(a) {
            this.Ad.getCopyrightProviders.push(arguments)
        }
    });
    var Yf = od.prototype;
    W(Yf, {
        getPanoramaById: Yf.Bp,
        getPanoramaByLocation: Yf.xj,
        getPanoramaByPOIId: Yf.Bx
    });
    function nd(a) {
        Xd.call(this);
        "api" == (a || {}).We ? Za(Ca) : Za(Da)
    }
    nd.RG = C.vh("pano", "");
    nd.prototype = new Xd;
    nd.prototype.getTilesUrl = function(a, b) {
        var c = nd.RG[(a.x + a.y) % nd.RG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        w.fa.na && 6 >= w.fa.na && (c += "&color_dep=32");
        var e = Yb(c);
        e ? (e = dd(e.path, {
            Lp: t
        }),
        c += "&" + e) : c = s;
        return c
    }
    ;
    nd.prototype.Jt = da(q);
    Zf.Zd = new U;
    function Zf() {}
    w.extend(Zf, {
        zW: function(a, b, c) {
            c = w.lang.je(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Zf.Zd.Hj(new T(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var $f = Zf;
    W($f, {
        dispatchFlashEvent: $f.zW
    });
    var ag = {
        HP: 50
    };
    ag.Uu = C.vh("pano")[0];
    ag.Su = {
        width: 220,
        height: 60
    };
    w.extend(ag, {
        rM: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                e();
            else {
                this.wo === l && (this.wo = new od(s,{
                    We: "api"
                }));
                var f = this;
                this.wo.nC(b, function(b) {
                    b ? f.wo.xj(c.lngLat, ag.HP, function(b) {
                        if (b && b.id) {
                            var g = b.id
                              , m = b.Dh
                              , b = b.Eh
                              , n = od.Zd.Jg(c.lngLat)
                              , o = f.oS(n, {
                                x: m,
                                y: b
                            })
                              , m = f.IL(g, o, 0, ag.Su.width, ag.Su.height);
                            a.content = f.pS(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.U(w.Hc("infoWndPano"), "click", function() {
                                    c.panoInstance.Fc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.vd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        pS: function(a, b, c, e) {
            var c = c || "", f;
            !e || !a.split(e)[0] ? (e = a,
            a = "") : (e = a.split(e)[0],
            f = e.lastIndexOf("<"),
            e = a.substring(0, f),
            a = a.substring(f));
            f = [];
            var g = ag.Su.width
              , i = ag.Su.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        oS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        IL: function(a, b, c, e, f) {
            var g = ag.Uu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}"
              , i = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            }
              , g = g.replace(/\{(.*?)\}/g, function(a, b) {
                return i[b]
            });
            return (a = Yb(g)) ? (a = dd(a.path, {
                Lp: t
            }),
            g + ("&" + a)) : s
        }
    });
    var cg = document, dg = Math, eg = cg.createElement("div").style, fg;
    a: {
        for (var gg = ["t", "webkitT", "MozT", "msT", "OT"], hg, ig = 0, jg = gg.length; ig < jg; ig++)
            if (hg = gg[ig] + "ransform",
            hg in eg) {
                fg = gg[ig].substr(0, gg[ig].length - 1);
                break a
            }
        fg = t
    }
    var kg = fg ? "-" + fg.toLowerCase() + "-" : ""
      , mg = lg("transform")
      , ng = lg("transitionProperty")
      , og = lg("transitionDuration")
      , pg = lg("transformOrigin")
      , qg = lg("transitionTimingFunction")
      , rg = lg("transitionDelay")
      , Cf = /android/gi.test(navigator.appVersion)
      , sg = /iphone|ipad/gi.test(navigator.appVersion)
      , tg = /hp-tablet/gi.test(navigator.appVersion)
      , ug = lg("perspective")in eg
      , vg = "ontouchstart"in window && !tg
      , wg = fg !== t
      , xg = lg("transition")in eg
      , yg = "onorientationchange"in window ? "orientationchange" : "resize"
      , zg = vg ? "touchstart" : "mousedown"
      , Ag = vg ? "touchmove" : "mousemove"
      , Bg = vg ? "touchend" : "mouseup"
      , Cg = vg ? "touchcancel" : "mouseup"
      , Dg = fg === t ? t : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[fg]
      , Eg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , Fg = window.cancelRequestAnimationFrame || window.R6 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , Gg = ug ? " translateZ(0)" : "";
    function Hg(a, b) {
        var c = this, e;
        c.Jn = "object" == typeof a ? a : cg.getElementById(a);
        c.Jn.style.overflow = "hidden";
        c.Qb = c.Jn.children[0];
        c.options = {
            Hp: q,
            Bn: q,
            x: 0,
            y: 0,
            Yo: q,
            wV: t,
            gy: q,
            GE: q,
            kl: q,
            Ki: t,
            D0: 0,
            Qw: t,
            Hx: q,
            ri: q,
            Li: q,
            vD: Cf,
            Kx: sg,
            fX: sg && ug,
            mF: "",
            zoom: t,
            ol: 1,
            Bq: 4,
            BW: 2,
            mP: "scroll",
            ru: t,
            Ry: 1,
            wN: s,
            oN: function(a) {
                a.preventDefault()
            },
            zN: s,
            nN: s,
            yN: s,
            mN: s,
            ky: s,
            AN: s,
            rN: s,
            Yp: s,
            BN: s,
            Xp: s
        };
        for (e in b)
            c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.kl = wg && c.options.kl;
        c.options.ri = c.options.Hp && c.options.ri;
        c.options.Li = c.options.Bn && c.options.Li;
        c.options.zoom = c.options.kl && c.options.zoom;
        c.options.Ki = xg && c.options.Ki;
        c.options.zoom && Cf && (Gg = "");
        c.Qb.style[ng] = c.options.kl ? kg + "transform" : "top left";
        c.Qb.style[og] = "0";
        c.Qb.style[pg] = "0 0";
        c.options.Ki && (c.Qb.style[qg] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.kl ? c.Qb.style[mg] = "translate(" + c.x + "px," + c.y + "px)" + Gg : c.Qb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Ki && (c.options.vD = q);
        c.refresh();
        c.ga(yg, window);
        c.ga(zg);
        !vg && "none" != c.options.mP && (c.ga("DOMMouseScroll"),
        c.ga("mousewheel"));
        c.options.Qw && (c.HV = setInterval(function() {
            c.IQ()
        }, 500));
        this.options.Hx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.hM || b, c) : e.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.hM || (b.hM = function(a) {
                a.j_ || b(a)
            }
            ), c) : e.call(document.body, a, b, c)
        }
        ),
        c.ga("click", document.body, q))
    }
    Hg.prototype = {
        enabled: q,
        x: 0,
        y: 0,
        Kj: [],
        scale: 1,
        DC: 0,
        EC: 0,
        af: [],
        xf: [],
        fC: s,
        az: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case zg:
                if (!vg && 0 !== a.button)
                    break;
                this.jw(a);
                break;
            case Ag:
                this.lT(a);
                break;
            case Bg:
            case Cg:
                this.pv(a);
                break;
            case yg:
                this.sB();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.QU(a);
                break;
            case Dg:
                this.MU(a);
                break;
            case "click":
                this.SQ(a)
            }
        },
        IQ: function() {
            !this.Ch && (!this.pl && !(this.nm || this.Fy == this.Qb.offsetWidth * this.scale && this.iq == this.Qb.offsetHeight * this.scale)) && this.refresh()
        },
        Zv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = cg.createElement("div"),
            this.options.mF ? b.className = this.options.mF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Li ? "7" : "2") + "px" : "width:7px;bottom:" + (this.ri ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + kg + "transition-property:opacity;" + kg + "transition-duration:" + (this.options.fX ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Kx ? "0" : "1"),
            this.Jn.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = cg.createElement("div"),
            this.options.mF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + kg + "background-clip:padding-box;" + kg + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + kg + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + kg + "transition-property:" + kg + "transform;" + kg + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + kg + "transition-duration:0;" + kg + "transform: translate(0,0)" + Gg,
            this.options.Ki && (b.style.cssText += ";" + kg + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.cM = this.dM.clientWidth,
            this.BY = dg.max(dg.round(this.cM * this.cM / this.Fy), 8),
            this.AY.style.width = this.BY + "px") : (this.eP = this.fP.clientHeight,
            this.$0 = dg.max(dg.round(this.eP * this.eP / this.iq), 8),
            this.Z0.style.height = this.$0 + "px"),
            this.tB(a, q)) : this[a + "ScrollbarWrapper"] && (wg && (this[a + "ScrollbarIndicator"].style[mg] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = s,
            this[a + "ScrollbarIndicator"] = s)
        },
        sB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, Cf ? 200 : 0)
        },
        Or: function(a, b) {
            this.pl || (a = this.Hp ? a : 0,
            b = this.Bn ? b : 0,
            this.options.kl ? this.Qb.style[mg] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Gg : (a = dg.round(a),
            b = dg.round(b),
            this.Qb.style.left = a + "px",
            this.Qb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.tB("h"),
            this.tB("v"))
        },
        tB: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.vD || (c = this[a + "ScrollbarIndicatorSize"] + dg.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.vD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - dg.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[rg] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Kx ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[mg] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Gg)
        },
        SQ: function(a) {
            if (a.KR === q)
                return this.TB = a.target,
                this.lx = Date.now(),
                q;
            if (this.TB && this.lx) {
                if (600 < Date.now() - this.lx)
                    return this.lx = this.TB = s,
                    q
            } else {
                for (var b = a.target; b != this.Qb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return q
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.j_ = q,
                a.stopPropagation(),
                a.preventDefault(),
                this.lx = this.TB = s,
                t
        },
        jw: function(a) {
            var b = vg ? a.touches[0] : a, c, e;
            if (this.enabled) {
                this.options.oN && this.options.oN.call(this, a);
                (this.options.Ki || this.options.zoom) && this.FJ(0);
                this.pl = this.nm = this.Ch = t;
                this.NC = this.MC = this.Cw = this.Bw = this.SC = this.RC = 0;
                this.options.zoom && (vg && 1 < a.touches.length) && (e = dg.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = dg.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.F0 = dg.sqrt(e * e + c * c),
                this.my = dg.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.jG) / 2 - this.x,
                this.ny = dg.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.kG) / 2 - this.y,
                this.options.Yp && this.options.Yp.call(this, a));
                if (this.options.gy && (this.options.kl ? (c = getComputedStyle(this.Qb, s)[mg].replace(/[^0-9\-.,]/g, "").split(","),
                e = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Qb, s).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Qb, s).top.replace(/[^0-9-]/g, "")),
                e != this.x || c != this.y))
                    this.options.Ki ? this.ce(Dg) : Fg(this.fC),
                    this.Kj = [],
                    this.Or(e, c),
                    this.options.ky && this.options.ky.call(this);
                this.Dw = this.x;
                this.Ew = this.y;
                this.vu = this.x;
                this.wu = this.y;
                this.Dh = b.pageX;
                this.Eh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.zN && this.options.zN.call(this, a);
                this.ga(Ag, window);
                this.ga(Bg, window);
                this.ga(Cg, window)
            }
        },
        lT: function(a) {
            var b = vg ? a.touches[0] : a
              , c = b.pageX - this.Dh
              , e = b.pageY - this.Eh
              , f = this.x + c
              , g = this.y + e
              , i = a.timeStamp || Date.now();
            this.options.nN && this.options.nN.call(this, a);
            if (this.options.zoom && vg && 1 < a.touches.length)
                f = dg.abs(a.touches[0].pageX - a.touches[1].pageX),
                g = dg.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.E0 = dg.sqrt(f * f + g * g),
                this.pl = q,
                b = 1 / this.F0 * this.E0 * this.scale,
                b < this.options.ol ? b = 0.5 * this.options.ol * Math.pow(2, b / this.options.ol) : b > this.options.Bq && (b = 2 * this.options.Bq * Math.pow(0.5, this.options.Bq / b)),
                this.Pp = b / this.scale,
                f = this.my - this.my * this.Pp + this.x,
                g = this.ny - this.ny * this.Pp + this.y,
                this.Qb.style[mg] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + Gg,
                this.options.BN && this.options.BN.call(this, a);
            else {
                this.Dh = b.pageX;
                this.Eh = b.pageY;
                if (0 < f || f < this.oe)
                    f = this.options.Yo ? this.x + c / 2 : 0 <= f || 0 <= this.oe ? 0 : this.oe;
                if (g > this.vf || g < this.ud)
                    g = this.options.Yo ? this.y + e / 2 : g >= this.vf || 0 <= this.ud ? this.vf : this.ud;
                this.RC += c;
                this.SC += e;
                this.Bw = dg.abs(this.RC);
                this.Cw = dg.abs(this.SC);
                6 > this.Bw && 6 > this.Cw || (this.options.GE && (this.Bw > this.Cw + 5 ? (g = this.y,
                e = 0) : this.Cw > this.Bw + 5 && (f = this.x,
                c = 0)),
                this.Ch = q,
                this.Or(f, g),
                this.MC = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.NC = 0 < e ? -1 : 0 > e ? 1 : 0,
                300 < i - this.startTime && (this.startTime = i,
                this.vu = this.x,
                this.wu = this.y),
                this.options.yN && this.options.yN.call(this, a))
            }
        },
        pv: function(a) {
            if (!(vg && 0 !== a.touches.length)) {
                var b = this, c = vg ? a.changedTouches[0] : a, e, f, g = {
                    Ga: 0,
                    time: 0
                }, i = {
                    Ga: 0,
                    time: 0
                }, k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.ce(Ag, window);
                b.ce(Bg, window);
                b.ce(Cg, window);
                b.options.mN && b.options.mN.call(b, a);
                if (b.pl)
                    e = b.scale * b.Pp,
                    e = Math.max(b.options.ol, e),
                    e = Math.min(b.options.Bq, e),
                    b.Pp = e / b.scale,
                    b.scale = e,
                    b.x = b.my - b.my * b.Pp + b.x,
                    b.y = b.ny - b.ny * b.Pp + b.y,
                    b.Qb.style[og] = "200ms",
                    b.Qb.style[mg] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Gg,
                    b.pl = t,
                    b.refresh(),
                    b.options.Xp && b.options.Xp.call(b, a);
                else {
                    if (b.Ch) {
                        if (300 > k && b.options.gy) {
                            g = e ? b.uI(e - b.vu, k, -b.x, b.Fy - b.Lu + b.x, b.options.Yo ? b.Lu : 0) : g;
                            i = f ? b.uI(f - b.wu, k, -b.y, 0 > b.ud ? b.iq - b.Kn + b.y - b.vf : 0, b.options.Yo ? b.Kn : 0) : i;
                            e = b.x + g.Ga;
                            f = b.y + i.Ga;
                            if (0 < b.x && 0 < e || b.x < b.oe && e < b.oe)
                                g = {
                                    Ga: 0,
                                    time: 0
                                };
                            if (b.y > b.vf && f > b.vf || b.y < b.ud && f < b.ud)
                                i = {
                                    Ga: 0,
                                    time: 0
                                }
                        }
                        g.Ga || i.Ga ? (c = dg.max(dg.max(g.time, i.time), 10),
                        b.options.ru && (g = e - b.Dw,
                        i = f - b.Ew,
                        dg.abs(g) < b.options.Ry && dg.abs(i) < b.options.Ry ? b.scrollTo(b.Dw, b.Ew, 200) : (g = b.sJ(e, f),
                        e = g.x,
                        f = g.y,
                        c = dg.max(g.time, c))),
                        b.scrollTo(dg.round(e), dg.round(f), c)) : b.options.ru ? (g = e - b.Dw,
                        i = f - b.Ew,
                        dg.abs(g) < b.options.Ry && dg.abs(i) < b.options.Ry ? b.scrollTo(b.Dw, b.Ew, 200) : (g = b.sJ(b.x, b.y),
                        (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.zo(200)
                    } else {
                        if (vg)
                            if (b.NK && b.options.zoom)
                                clearTimeout(b.NK),
                                b.NK = s,
                                b.options.Yp && b.options.Yp.call(b, a),
                                b.zoom(b.Dh, b.Eh, 1 == b.scale ? b.options.BW : 1),
                                b.options.Xp && setTimeout(function() {
                                    b.options.Xp.call(b, a)
                                }, 200);
                            else if (this.options.Hx) {
                                for (e = c.target; 1 != e.nodeType; )
                                    e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = cg.createEvent("MouseEvents"),
                                f.initMouseEvent("click", q, q, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, s),
                                f.KR = q,
                                e.dispatchEvent(f)) : e.focus()
                            }
                        b.zo(400)
                    }
                    b.options.AN && b.options.AN.call(b, a)
                }
            }
        },
        zo: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.oe ? this.oe : this.x
              , c = this.y >= this.vf || 0 < this.ud ? this.vf : this.y < this.ud ? this.ud : this.y;
            if (b == this.x && c == this.y) {
                if (this.Ch && (this.Ch = t,
                this.options.ky && this.options.ky.call(this)),
                this.ri && this.options.Kx && ("webkit" == fg && (this.dM.style[rg] = "300ms"),
                this.dM.style.opacity = "0"),
                this.Li && this.options.Kx)
                    "webkit" == fg && (this.fP.style[rg] = "300ms"),
                    this.fP.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        QU: function(a) {
            var b = this, c, e;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                e = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = e = a.wheelDelta / 12;
            else if ("detail"in a)
                c = e = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.mP) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)),
                e < b.options.ol && (e = b.options.ol),
                e > b.options.Bq && (e = b.options.Bq),
                e != b.scale)
                    !b.az && b.options.Yp && b.options.Yp.call(b, a),
                    b.az++,
                    b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function() {
                        b.az--;
                        !b.az && b.options.Xp && b.options.Xp.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                e = b.y + e,
                0 < c ? c = 0 : c < b.oe && (c = b.oe),
                e > b.vf ? e = b.vf : e < b.ud && (e = b.ud),
                0 > b.ud && b.scrollTo(c, e, 0)
        },
        MU: function(a) {
            a.target == this.Qb && (this.ce(Dg),
            this.FB())
        },
        FB: function() {
            var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
            a.nm || (a.Kj.length ? (f = a.Kj.shift(),
            f.x == b && f.y == c && (f.time = 0),
            a.nm = q,
            a.Ch = q,
            a.options.Ki) ? (a.FJ(f.time),
            a.Or(f.x, f.y),
            a.nm = t,
            f.time ? a.ga(Dg) : a.zo(0)) : (i = function() {
                var k = Date.now(), m;
                if (k >= e + f.time) {
                    a.Or(f.x, f.y);
                    a.nm = t;
                    a.options.JZ && a.options.JZ.call(a);
                    a.FB()
                } else {
                    k = (k - e) / f.time - 1;
                    g = dg.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Or(k, m);
                    if (a.nm)
                        a.fC = Eg(i)
                }
            }
            ,
            i()) : a.zo(400))
        },
        FJ: function(a) {
            a += "ms";
            this.Qb.style[og] = a;
            this.ri && (this.AY.style[og] = a);
            this.Li && (this.Z0.style[og] = a)
        },
        uI: function(a, b, c, e, f) {
            var b = dg.abs(a) / b
              , g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))),
            b = b * c / g,
            g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))),
            b = b * e / g,
            g = e);
            return {
                Ga: g * (0 > a ? -1 : 1),
                time: dg.round(b / 6.0E-4)
            }
        },
        mk: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.Jn && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        sJ: function(a, b) {
            var c, e, f;
            f = this.af.length - 1;
            c = 0;
            for (e = this.af.length; c < e; c++)
                if (a >= this.af[c]) {
                    f = c;
                    break
                }
            f == this.DC && (0 < f && 0 > this.MC) && f--;
            a = this.af[f];
            e = (e = dg.abs(a - this.af[this.DC])) ? 500 * (dg.abs(this.x - a) / e) : 0;
            this.DC = f;
            f = this.xf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.xf[c]) {
                    f = c;
                    break
                }
            f == this.EC && (0 < f && 0 > this.NC) && f--;
            b = this.xf[f];
            c = (c = dg.abs(b - this.xf[this.EC])) ? 500 * (dg.abs(this.y - b) / c) : 0;
            this.EC = f;
            f = dg.round(dg.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ga: function(a, b, c) {
            (b || this.Qb).addEventListener(a, this, !!c)
        },
        ce: function(a, b, c) {
            (b || this.Qb).removeEventListener(a, this, !!c)
        },
        KC: ga(1),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.ol && (this.scale = this.options.ol);
            this.Lu = this.Jn.clientWidth || 1;
            this.Kn = this.Jn.clientHeight || 1;
            this.vf = -this.options.D0 || 0;
            this.Fy = dg.round(this.Qb.offsetWidth * this.scale);
            this.iq = dg.round((this.Qb.offsetHeight + this.vf) * this.scale);
            this.oe = this.Lu - this.Fy;
            this.ud = this.Kn - this.iq + this.vf;
            this.NC = this.MC = 0;
            this.options.wN && this.options.wN.call(this);
            this.Hp = this.options.Hp && 0 > this.oe;
            this.Bn = this.options.Bn && (!this.options.wV && !this.Hp || this.iq > this.Kn);
            this.ri = this.Hp && this.options.ri;
            this.Li = this.Bn && this.options.Li && this.iq > this.Kn;
            a = this.mk(this.Jn);
            this.jG = -a.left;
            this.kG = -a.top;
            if ("string" == typeof this.options.ru) {
                this.af = [];
                this.xf = [];
                c = this.Qb.querySelectorAll(this.options.ru);
                a = 0;
                for (b = c.length; a < b; a++)
                    e = this.mk(c[a]),
                    e.left += this.jG,
                    e.top += this.kG,
                    this.af[a] = e.left < this.oe ? this.oe : e.left * this.scale,
                    this.xf[a] = e.top < this.ud ? this.ud : e.top * this.scale
            } else if (this.options.ru) {
                for (this.af = []; e >= this.oe; )
                    this.af[b] = e,
                    e -= this.Lu,
                    b++;
                this.oe % this.Lu && (this.af[this.af.length] = this.oe - this.af[this.af.length - 1] + this.af[this.af.length - 1]);
                b = e = 0;
                for (this.xf = []; e >= this.ud; )
                    this.xf[b] = e,
                    e -= this.Kn,
                    b++;
                this.ud % this.Kn && (this.xf[this.xf.length] = this.ud - this.xf[this.xf.length - 1] + this.xf[this.xf.length - 1])
            }
            this.Zv("h");
            this.Zv("v");
            this.pl || (this.Qb.style[og] = "0",
            this.zo(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                k_: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++)
                f[a].k_ && (f[a].x = this.x - f[a].x,
                f[a].y = this.y - f[a].y),
                this.Kj.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.FB()
        },
        disable: function() {
            this.stop();
            this.zo(0);
            this.enabled = t;
            this.ce(Ag, window);
            this.ce(Bg, window);
            this.ce(Cg, window)
        },
        enable: function() {
            this.enabled = q
        },
        stop: function() {
            this.options.Ki ? this.ce(Dg) : Fg(this.fC);
            this.Kj = [];
            this.nm = this.Ch = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.kl && (this.pl = q,
            e = e === l ? 200 : e,
            a = a - this.jG - this.x,
            b = b - this.kG - this.y,
            this.x = a - a * f + this.x,
            this.y = b - b * f + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.oe ? this.oe : this.x,
            this.y = this.y > this.vf ? this.vf : this.y < this.ud ? this.ud : this.y,
            this.Qb.style[og] = e + "ms",
            this.Qb.style[mg] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Gg,
            this.pl = t)
        }
    };
    function lg(a) {
        if ("" === fg)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return fg + a
    }
    eg = s;
    function Ig(a) {
        this.m = {
            anchor: hd,
            offset: new O(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.m[b] = a[b];
        this.cm = new od(s,{
            We: "api"
        });
        this.ok = [];
        this.V = s;
        this.mg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * Jg
        };
        this.Wc = this.uB = this.rm = this.ed = s
    }
    var Kg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , Lg = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    C.Wk(function(a) {
        var b = s;
        a.addEventListener("position_changed", function() {
            a.m.visible && a.m.albumsControl === q && (b ? b.By(a.Yb()) : (b = new Ig(a.m.albumsControlOptions),
            b.xa(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.m.albumsControl === q ? (b ? b.By(a.Yb()) : (b = new Ig(a.m.albumsControlOptions),
            b.xa(a)),
            b.show()) : b.$()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.Jj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.Fx() ? a.m.albumsControl === q && (b.P.style.visibility = "visible") : b.P.style.visibility = "hidden")
        })
    });
    var Jg = 1.8;
    M() && (Jg = 1);
    w.extend(Ig.prototype, {
        Jj: function(a) {
            for (var b in a)
                this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.vc(this.m.anchor);
            this.P.style.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
            this.P.style.height = a;
            this.sk.style.height = a;
            this.$h.style.height = a;
            this.mg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * Jg
            };
            this.rk.style.height = this.mg.height - 6 + "px";
            this.rk.style.width = this.mg.width - 6 + "px";
            this.By(this.V.Yb(), q)
        },
        xa: function(a) {
            this.V = a;
            this.Cs();
            this.qQ();
            this.QY();
            this.By(a.Yb())
        },
        Cs: function() {
            var a = this.m.imageHeight + "px";
            this.P = I("div");
            var b = this.P.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.sk = I("div");
            b = this.sk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.$h = I("div");
            b = this.$h.style;
            b.height = a;
            this.sk.appendChild(this.$h);
            this.P.appendChild(this.sk);
            this.V.P.appendChild(this.P);
            this.rk = I("div", {
                "class": "pano_photo_item_seleted"
            });
            this.rk.style.height = this.mg.height - 6 + "px";
            this.rk.style.width = this.mg.width - 6 + "px";
            this.vc(this.m.anchor)
        },
        PH: function(a) {
            for (var b = this.ok, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        By: function(a, b) {
            if (b || !this.ok[this.ed] || !(this.ok[this.ed].panoId == a && 3 !== this.ok[this.ed].recoType)) {
                var c = this
                  , e = this.PH(a);
                !b && -1 !== e && this.ok[e] && 3 !== this.ok[e].recoType ? this.lq(e) : this.fY(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, p = a.length; o < p; o++)
                        e = a[o].catlog,
                        k = a[o].floor,
                        l !== e && ("" === e && l !== k ? (m = q,
                        b[k] || (b[k] = []),
                        b[k].push(a[o])) : (b[Kg[e]] || (b[Kg[e]] = []),
                        b[Kg[e]].push(a[o])));
                    for (var v in b)
                        m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: Lg[v],
                            index: v
                        });
                    c.lH = b;
                    c.Zi = n;
                    c.gj(a);
                    0 == a.length ? c.$() : c.show()
                })
            }
        },
        hW: function() {
            if (!this.Wi) {
                var a = this.UX(this.Zi)
                  , b = I("div");
                b.style.cssText = ["width:" + 134 * this.Zi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = I("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Hg(a,{
                    Yo: t,
                    gy: q,
                    ri: t,
                    Li: t,
                    Bn: t,
                    GE: q,
                    Qw: q,
                    Hx: q
                });
                this.P.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f],
                    w.U(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.gj(c.lH[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++)
                                e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Wi = a
            }
        },
        eW: function() {
            if (this.Wi)
                a = this.vL(this.Zi),
                this.GQ.innerHTML = a;
            else {
                var a = this.vL(this.Zi)
                  , b = I("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                w.U(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.gj(c.lH[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
                            e[f].childNodes[0].getAttribute("dataindex") === a ? w.R.hb(e[f], "pano_catlogLiActive") : w.R.pc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = I("div")
                  , e = I("a")
                  , f = I("span")
                  , g = I("a")
                  , i = I("span")
                  , k = ["background:url(" + L.ra + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                w.U(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new Gb({
                        Mc: 60,
                        cc: Hb.Vs,
                        duration: 300,
                        za: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                w.U(e, "mouseout", function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                w.U(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new Gb({
                            Mc: 60,
                            cc: Hb.Vs,
                            duration: 300,
                            za: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                w.U(g, "mouseout", function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = I("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Wi = e;
                this.GQ = b;
                this.P.appendChild(e)
            }
        },
        fW: function() {
            if (this.Zi && !(0 >= this.Zi.length)) {
                var a = I("div");
                a.innerHTML = this.Zz;
                a.style.cssText = "position:absolute;background:#252525";
                this.P.appendChild(a);
                this.Ys = a;
                this.Wc.og.style.left = this.mg.width + 8 + "px";
                this.Wi && (this.Wi.style.left = parseInt(this.Wi.style.left, 10) + this.mg.width + 8 + "px");
                var b = this;
                w.U(a, "click", function() {
                    b.V.Fc(b.bX)
                })
            }
        },
        gj: function(a) {
            this.ok = a;
            this.m.showCatalog && (0 < this.Zi.length ? (db() ? this.eW() : this.hW(),
            this.Wc.offsetLeft = 60) : (this.Ys && (this.P.removeChild(this.Ys),
            this.Ys = s,
            this.Wc.og.style.left = "0px"),
            this.Wi && (this.P.removeChild(this.Wi),
            this.Wi = s),
            this.Wc.offsetLeft = 0));
            var b = this.OX(a);
            db() && (this.Zi && 0 < this.Zi.length && this.m.showExit && this.Zz) && (this.Wc.offsetLeft += this.mg.width + 8,
            this.Ys ? this.Ys.innerHTML = this.Zz : this.fW());
            this.$h.innerHTML = b;
            this.$h.style.width = (this.mg.width + 8) * a.length + 8 + "px";
            a = this.P.offsetWidth;
            b = this.$h.offsetWidth;
            this.Wc.ct && (b += this.Wc.ct());
            b < a - 2 * this.Wc.Pi - this.Wc.offsetLeft ? this.P.style.width = b + this.Wc.offsetLeft + "px" : (this.P.style.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px",
            b < this.P.offsetWidth - 2 * this.Wc.Pi - this.Wc.offsetLeft && (this.P.style.width = b + this.Wc.offsetLeft + "px"));
            this.Wc.refresh();
            this.uB = this.$h.children;
            this.$h.appendChild(this.rk);
            this.rk.style.left = "-100000px";
            a = this.PH(this.V.Yb(), this.s2);
            -1 !== a && this.lq(a)
        },
        UX: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
                b += c;
            return b
        },
        vL: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
                b += c;
            return b
        },
        OX: function(a) {
            for (var b, c, e, f, g = [], i = this.mg.height, k = this.mg.width, m = 0; m < a.length; m++)
                b = a[m],
                recoType = b.recoType,
                e = b.panoId,
                f = b.name,
                c = b.heading,
                b = b.pitch,
                c = ag.IL(e, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
                3 === recoType ? db() ? (this.Zz = b,
                this.bX = e,
                a.splice(m, 1),
                m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + L.ra + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
                g.push(b)) : g.push(b);
            return g.join("")
        },
        fY: function(a) {
            var b = this
              , c = this.V.Yb();
            c && this.cm.Dx(c, function(e) {
                b.V.Yb() === c && a(e)
            })
        },
        vc: function(a) {
            if (!gb(a) || isNaN(a) || a < fd || 3 < a)
                a = this.defaultAnchor;
            var b = this.P
              , c = this.m.offset.width
              , e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case fd:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case gd:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case hd:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        qQ: function() {
            this.oQ()
        },
        oQ: function() {
            var a = this;
            w.U(this.P, "touchstart", function(a) {
                a.stopPropagation()
            });
            w.U(this.sk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.ed)
                    a.lq(b),
                    a.V.Fc(a.ok[b].panoId)
            });
            w.U(this.$h, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== s && a.zK(b, q)
            });
            this.V.addEventListener("size_changed", function() {
                isNaN(Number(a.m.maxWidth)) && a.Jj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        lq: function(a) {
            this.rk.style.left = this.uB[a].offsetLeft + 8 + "px";
            this.rk.setAttribute("data-index", this.uB[a].getAttribute("data-index"));
            this.ed = a;
            this.zK(a)
        },
        zK: function(a, b) {
            var c = this.mg.width + 8
              , e = 0;
            this.Wc.ct && (e = this.Wc.ct() / 2);
            var f = this.sk.offsetWidth - 2 * e
              , g = this.$h.offsetLeft || this.Wc.x
              , g = g - e
              , i = -a * c;
            i > g && this.Wc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Wc.scrollTo(c + f + e)
        },
        QY: function() {
            this.Wc = M() ? new Hg(this.sk,{
                Yo: t,
                gy: q,
                ri: t,
                Li: t,
                Bn: t,
                GE: q,
                Qw: q,
                Hx: q
            }) : new Mg(this.sk)
        },
        $: function() {
            this.P.style.visibility = "hidden"
        },
        show: function() {
            this.P.style.visibility = "visible"
        }
    });
    function Mg(a) {
        this.P = a;
        this.kh = a.children[0];
        this.$r = s;
        this.Pi = 20;
        this.offsetLeft = 0;
        this.xa()
    }
    Mg.prototype = {
        xa: function() {
            this.kh.style.position = "relative";
            this.refresh();
            this.Cs();
            this.hC()
        },
        refresh: function() {
            this.uo = this.P.offsetWidth - this.ct();
            this.TA = -(this.kh.offsetWidth - this.uo - this.Pi);
            this.Lv = this.Pi + this.offsetLeft;
            this.kh.style.left = this.Lv + "px";
            this.kh.children[0] && (this.$r = this.kh.children[0].offsetWidth);
            this.og && (this.og.children[0].style.marginTop = this.Ur.children[0].style.marginTop = this.og.offsetHeight / 2 - this.og.children[0].offsetHeight / 2 + "px")
        },
        ct: function() {
            return 2 * this.Pi
        },
        Cs: function() {
            this.$v = I("div");
            this.$v.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.og = this.$v.children[0];
            this.Ur = this.$v.children[1];
            this.P.appendChild(this.$v);
            this.og.children[0].style.marginTop = this.Ur.children[0].style.marginTop = this.og.offsetHeight / 2 - this.og.children[0].offsetHeight / 2 + "px"
        },
        hC: function() {
            var a = this;
            w.U(this.og, "click", function() {
                a.scrollTo(a.kh.offsetLeft + a.uo)
            });
            w.U(this.Ur, "click", function() {
                a.scrollTo(a.kh.offsetLeft - a.uo)
            })
        },
        NU: function() {
            w.R.pc(this.og, "pano_arrow_disable");
            w.R.pc(this.Ur, "pano_arrow_disable");
            var a = this.kh.offsetLeft;
            a >= this.Lv && w.R.hb(this.og, "pano_arrow_disable");
            a - this.uo <= this.TA && w.R.hb(this.Ur, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.kh.offsetLeft ? Math.ceil((a - this.Pi - this.uo) / this.$r) * this.$r + this.uo + this.Pi - 8 : Math.ceil((a - this.Pi) / this.$r) * this.$r + this.Pi;
            a < this.TA ? a = this.TA : a > this.Lv && (a = this.Lv);
            var b = this.kh.offsetLeft
              , c = this;
            new Gb({
                Mc: 60,
                cc: Hb.Vs,
                duration: 300,
                za: function(e) {
                    c.kh.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.NU()
                }
            })
        }
    };
    function Ng() {
        var a = 256 * Math.pow(2, 15)
          , b = 3 * a
          , c = U.Qa(new R(180,0)).lng
          , b = b - c
          , e = -3 * a
          , a = U.Qa(new R(-180,0)).lng
          , e = a - e;
        this.OU = c / Math.pow(2, 15);
        this.qg = c;
        this.fh = a;
        this.Ll = b + e;
        this.gh = c - a;
        this.AU = b;
        this.eT = e
    }
    Ng.prototype = {
        tm: function(a, b, c, e) {
            for (var f = 0, b = 1536 * Math.pow(2, b - 3) / (c || 256), c = b / 2 - 1, g = -b / 2; a > c; )
                a -= b,
                f -= this.Ll;
            for (; a < g; )
                a += b,
                f += this.Ll;
            var i = f
              , f = Math.round(f / Math.pow(2, 18 - e));
            return {
                offsetX: f,
                B3: i,
                oj: a,
                H1: b,
                i5: c,
                j5: g
            }
        },
        jC: function(a) {
            for (var b = a.lng; b > this.qg; )
                b -= this.gh;
            for (; b < this.fh; )
                b += this.gh;
            a.lng = b;
            return a
        },
        DV: function(a, b) {
            for (var c = b || a.Eb(), e = a.nf.lng, f = a.kf.lng; c.lng > this.qg; )
                c.lng -= this.gh,
                e -= this.gh,
                f -= this.gh;
            for (; c.lng < this.fh; )
                c.lng += this.gh,
                e += this.gh,
                f += this.gh;
            a.nf.lng = e;
            a.kf.lng = f;
            return a
        },
        kC: function(a, b, c, e) {
            for (var c = c || 256, f = e || Math.pow(2, 18 - b) * c, e = Math.floor(this.qg / f), g = Math.floor(this.fh / f), i = Math.floor(this.Ll / f), f = [], k = 0; k < a.length; k++) {
                var m = a[k]
                  , n = m[0]
                  , m = m[1];
                if (n >= e) {
                    if (n += i,
                    this.Vx(n, b, c) !== q) {
                        var o = "id_" + n + "_" + m + "_" + b;
                        a[o] || (a[o] = q,
                        f.push([n, m, b, c]))
                    }
                } else
                    n <= g && (n -= i,
                    this.Vx(n, b, c) !== q && (o = "id_" + n + "_" + m + "_" + b,
                    a[o] || (a[o] = q,
                    f.push([n, m, b, c]))))
            }
            k = 0;
            for (e = f.length; k < e; k++)
                a.push(f[k]);
            for (k = a.length - 1; 0 <= k; k--)
                n = a[k][0],
                this.Vx(n, b, c) && a.splice(k, 1);
            return a
        },
        Vx: function(a, b, c) {
            for (var e = Math.pow(2, b - 3), b = Math.round(this.OU * e), e = 1536 * e / c; a > e / 2 - 1; )
                a -= e;
            for (; a < -(e / 2); )
                a += e;
            return 0 < a && a * c > b || 0 > a && Math.abs((a + 1) * c) > b ? q : t
        },
        sM: function(a, b) {
            return a < this.fh || b > this.qg
        },
        NL: function(a) {
            return Math.round((this.AU + this.eT) / Math.pow(2, 18 - a))
        },
        pY: function(a, b, c) {
            var b = b || 256
              , e = Math.ceil(this.qg / c)
              , f = Math.floor(this.fh / c);
            return a === e - 1 ? (a = (this.qg - c * (e - 1)) / c * b,
            a = Math.round(a),
            [0, 0, a, b]) : a === f ? (a = (this.fh - c * f) / c * b,
            a = Math.round(Math.abs(a)),
            [a, 0, b, b]) : s
        }
    };
    var Me = new Ng;
    C.Map = Ra;
    C.Hotspot = tb;
    C.MapType = Re;
    C.Point = R;
    C.Pixel = T;
    C.Size = O;
    C.Bounds = qb;
    C.TileLayer = Xd;
    C.Projection = td;
    C.MercatorProjection = U;
    C.PerspectiveProjection = sb;
    C.Copyright = function(a, b, c) {
        this.id = a;
        this.fb = b;
        this.content = c
    }
    ;
    C.Overlay = wd;
    C.Label = Fd;
    C.GroundOverlay = Gd;
    C.PointCollection = Kd;
    C.Marker = Ed;
    C.CanvasLayer = Nd;
    C.Icon = Ad;
    C.IconSequence = Cd;
    C.Symbol = Bd;
    C.Polyline = Rd;
    C.Polygon = Qd;
    C.InfoWindow = Dd;
    C.Circle = Sd;
    C.Control = ed;
    C.NavigationControl = wb;
    C.GeolocationControl = id;
    C.OverviewMapControl = yb;
    C.CopyrightControl = jd;
    C.ScaleControl = xb;
    C.MapTypeControl = zb;
    C.CityListControl = kd;
    C.PanoramaControl = md;
    C.TrafficLayer = de;
    C.CustomLayer = Ab;
    C.ContextMenu = pd;
    C.MenuItem = sd;
    C.LocalSearch = nb;
    C.TransitRoute = tf;
    C.DrivingRoute = wf;
    C.TruckRoute = yf;
    C.WalkingRoute = xf;
    C.RidingRoute = zf;
    C.Autocomplete = Jf;
    C.RouteSearch = Df;
    C.Geocoder = Ef;
    C.LocalCity = Gf;
    C.Geolocation = Geolocation;
    C.Convertor = vd;
    C.BusLineSearch = If;
    C.Boundary = Hf;
    C.Panorama = Va;
    C.PanoramaLabel = Qf;
    C.PanoramaService = od;
    C.PanoramaCoverageLayer = nd;
    C.PanoramaFlashInterface = Zf;
    function W(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    W(window, {
        BMap: C,
        _jsload2: function(a, b) {
            ia.Sy.bZ && ia.Sy.set(a, b);
            bb.GV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Og = Ra.prototype;
    W(Og, {
        getBounds: Og.Jd,
        getCenter: Og.Eb,
        getMapType: Og.wa,
        getSize: Og.ub,
        setSize: Og.Fe,
        getViewport: Og.ut,
        getZoom: Og.ka,
        centerAndZoom: Og.dd,
        panTo: Og.Di,
        panBy: Og.Mg,
        setCenter: Og.zf,
        setCurrentCity: Og.tF,
        setMapType: Og.Qg,
        setViewport: Og.Rg,
        setZoom: Og.Vc,
        highResolutionEnabled: Og.Mx,
        zoomTo: Og.Tg,
        zoomIn: Og.lG,
        zoomOut: Og.mG,
        addHotspot: Og.VB,
        removeHotspot: Og.m_,
        clearHotspots: Og.Uw,
        checkResize: Og.JV,
        addControl: Og.Ro,
        removeControl: Og.SN,
        getContainer: Og.Ra,
        addContextMenu: Og.jm,
        removeContextMenu: Og.bq,
        addOverlay: Og.Pa,
        removeOverlay: Og.Jb,
        clearOverlays: Og.vK,
        openInfoWindow: Og.Tc,
        closeInfoWindow: Og.Lc,
        pointToOverlayPixel: Og.cf,
        overlayPixelToPoint: Og.DN,
        getInfoWindow: Og.uh,
        getOverlays: Og.Ax,
        getPanes: function() {
            return {
                floatPane: this.ae.wD,
                markerMouseTarget: this.ae.JE,
                floatShadow: this.ae.lL,
                labelPane: this.ae.BE,
                markerPane: this.ae.bN,
                markerShadow: this.ae.cN,
                mapPane: this.ae.Ot,
                vertexPane: this.ae.iP
            }
        },
        addTileLayer: Og.Se,
        removeTileLayer: Og.fg,
        pixelToPoint: Og.$b,
        pointToPixel: Og.uc,
        setFeatureStyle: Og.f6,
        selectBaseElement: Og.Y5,
        setMapStyle: Og.hu,
        enable3DBuilding: Og.lp,
        disable3DBuilding: Og.vW,
        getPanorama: Og.jt,
        initIndoorLayer: Og.RY,
        setNormalMapDisplay: Og.Hy,
        setMapStyleV2: Og.P_,
        setBMapCopyrightOffset: Og.sF,
        getVectorContainer: Og.vY
    });
    W(window, {
        BMAP_COORD_MERCATOR: Qa,
        BMAP_COORD_BD09: Na,
        BMAP_COORD_GCJ02: Oa,
        BMAP_COORD_GCJ02MERCATOR: "BMAP_COORD_GCJ02MERCATOR",
        BMAP_COORD_WGS84: "BMAP_COORD_WGS84",
        BMAP_COORD_EPSG3857: "BMAP_COORD_EPSG3857"
    });
    var Pg = Re.prototype;
    W(Pg, {
        getTileLayer: Pg.oY,
        getMinZoom: Pg.sf,
        getMaxZoom: Pg.Xe,
        getProjection: Pg.yj,
        getTextColor: Pg.Om,
        getTips: Pg.nt
    });
    W(window, {
        BMAP_NORMAL_MAP: Ta,
        BMAP_PERSPECTIVE_MAP: Ya,
        BMAP_SATELLITE_MAP: ab,
        BMAP_HYBRID_MAP: $a
    });
    var Qg = U.prototype;
    W(Qg, {
        lngLatToPoint: Qg.Jg,
        pointToLngLat: Qg.Hj
    });
    var Rg = sb.prototype;
    W(Rg, {
        lngLatToPoint: Rg.Jg,
        pointToLngLat: Rg.Hj
    });
    var Sg = qb.prototype;
    W(Sg, {
        equals: Sg.Tb,
        containsPoint: Sg.zs,
        containsBounds: Sg.UV,
        intersects: Sg.Bt,
        extend: Sg.extend,
        getCenter: Sg.Eb,
        isEmpty: Sg.Dj,
        getSouthWest: Sg.Ld,
        getNorthEast: Sg.ze,
        toSpan: Sg.XF
    });
    var Tg = wd.prototype;
    W(Tg, {
        isVisible: Tg.Nc,
        show: Tg.show,
        hide: Tg.$
    });
    wd.getZIndex = wd.Ok;
    var Ug = rb.prototype;
    W(Ug, {
        openInfoWindow: Ug.Tc,
        closeInfoWindow: Ug.Lc,
        enableMassClear: Ug.uj,
        disableMassClear: Ug.xW,
        show: Ug.show,
        hide: Ug.$,
        getMap: Ug.xx,
        addContextMenu: Ug.jm,
        removeContextMenu: Ug.bq
    });
    var Vg = Ed.prototype;
    W(Vg, {
        setIcon: Vg.Vb,
        getIcon: Vg.xp,
        setPosition: Vg.ta,
        getPosition: Vg.la,
        setOffset: Vg.Pd,
        getOffset: Vg.wj,
        getLabel: Vg.ft,
        setLabel: Vg.Ij,
        setTitle: Vg.Gc,
        setTop: Vg.Hi,
        enableDragging: Vg.gc,
        disableDragging: Vg.Ls,
        setZIndex: Vg.pq,
        getMap: Vg.xx,
        setAnimation: Vg.nn,
        setShadow: Vg.Ly,
        hide: Vg.$,
        setRotation: Vg.Jy,
        getRotation: Vg.ML
    });
    W(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Wg = Fd.prototype;
    W(Wg, {
        setStyle: Wg.Rd,
        setStyles: Wg.Gi,
        setContent: Wg.Pc,
        setPosition: Wg.ta,
        getPosition: Wg.la,
        setOffset: Wg.Pd,
        getOffset: Wg.wj,
        setTitle: Wg.Gc,
        setZIndex: Wg.pq,
        getMap: Wg.xx,
        getContent: Wg.Ik
    });
    var Xg = Ad.prototype;
    W(Xg, {
        setImageUrl: Xg.iO,
        setSize: Xg.Fe,
        setAnchor: Xg.vc,
        setImageOffset: Xg.gu,
        setImageSize: Xg.J_,
        setInfoWindowAnchor: Xg.M_,
        setPrintImageUrl: Xg.Y_
    });
    var Yg = Dd.prototype;
    W(Yg, {
        redraw: Yg.pe,
        setTitle: Yg.Gc,
        setContent: Yg.Pc,
        getContent: Yg.Ik,
        getPosition: Yg.la,
        enableMaximize: Yg.rh,
        disableMaximize: Yg.fx,
        isOpen: Yg.bb,
        setMaxContent: Yg.iu,
        maximize: Yg.ey,
        enableAutoPan: Yg.Ws
    });
    var Zg = yd.prototype;
    W(Zg, {
        getPath: Zg.Ze,
        setPath: Zg.Qd,
        setPositionAt: Zg.vn,
        getStrokeColor: Zg.lY,
        setStrokeWeight: Zg.oq,
        getStrokeWeight: Zg.QL,
        setStrokeOpacity: Zg.mq,
        getStrokeOpacity: Zg.mY,
        setFillOpacity: Zg.fu,
        getFillOpacity: Zg.HX,
        setStrokeStyle: Zg.nq,
        getStrokeStyle: Zg.PL,
        getFillColor: Zg.GX,
        getBounds: Zg.Jd,
        enableEditing: Zg.xe,
        disableEditing: Zg.wW,
        getEditing: Zg.DX,
        getGeodesicPath: Zg.KX
    });
    var $g = Sd.prototype;
    W($g, {
        setCenter: $g.zf,
        getCenter: $g.Eb,
        getRadius: $g.KL,
        setRadius: $g.Af
    });
    var ah = Qd.prototype;
    W(ah, {
        getPath: ah.Ze,
        setPath: ah.Qd,
        setPositionAt: ah.vn
    });
    var bh = tb.prototype;
    W(bh, {
        getPosition: bh.la,
        setPosition: bh.ta,
        getText: bh.aE,
        setText: bh.lu
    });
    R.prototype.equals = R.prototype.Tb;
    T.prototype.equals = T.prototype.Tb;
    O.prototype.equals = O.prototype.Tb;
    W(window, {
        BMAP_ANCHOR_TOP_LEFT: fd,
        BMAP_ANCHOR_TOP_RIGHT: gd,
        BMAP_ANCHOR_BOTTOM_LEFT: hd,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var ch = ed.prototype;
    W(ch, {
        setAnchor: ch.vc,
        getAnchor: ch.DD,
        setOffset: ch.Pd,
        getOffset: ch.wj,
        show: ch.show,
        hide: ch.$,
        isVisible: ch.Nc,
        toString: ch.toString
    });
    var dh = wb.prototype;
    W(dh, {
        getType: dh.Fp,
        setType: dh.wn
    });
    W(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var eh = yb.prototype;
    W(eh, {
        changeView: eh.te,
        setSize: eh.Fe,
        getSize: eh.ub
    });
    var fh = xb.prototype;
    W(fh, {
        getUnit: fh.uY,
        setUnit: fh.DF
    });
    W(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var gh = jd.prototype;
    W(gh, {
        addCopyright: gh.Hw,
        removeCopyright: gh.fF,
        getCopyright: gh.Fm,
        getCopyrightCollection: gh.LD
    });
    W(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: ld,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var hh = Xd.prototype;
    W(hh, {
        getMapType: hh.wa,
        getCopyright: hh.Fm,
        isTransparentPng: hh.Jt
    });
    var ih = pd.prototype;
    W(ih, {
        addItem: ih.qs,
        addSeparator: ih.YB,
        removeSeparator: ih.iF
    });
    var jh = sd.prototype;
    W(jh, {
        setText: jh.lu
    });
    var kh = Y.prototype;
    W(kh, {
        getStatus: kh.Mm,
        setSearchCompleteCallback: kh.ku,
        getPageCapacity: kh.Ye,
        setPageCapacity: kh.tn,
        setLocation: kh.qn,
        disableFirstResultSelection: kh.PC,
        enableFirstResultSelection: kh.iD,
        gotoPage: kh.Pm,
        searchNearby: kh.jq,
        searchInBounds: kh.mn,
        search: kh.search
    });
    W(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: af,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: bf,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: cf
    });
    W(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    W(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    W(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    W(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    W(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    W(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var lh = sf.prototype;
    W(lh, {
        clearResults: lh.ue
    });
    uf = tf.prototype;
    W(uf, {
        setPolicy: uf.un,
        toString: uf.toString,
        setPageCapacity: uf.tn,
        setIntercityPolicy: uf.wF,
        setTransitTypePolicy: uf.BF
    });
    W(yf.prototype, {
        setPolicy: yf.un,
        toString: yf.toString,
        setPageCapacity: yf.tn,
        setIntercityPolicy: yf.wF,
        setTransitTypePolicy: yf.BF
    });
    W(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    W(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var mh = Df.prototype;
    W(mh, {
        routeCall: mh.cO
    });
    W(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    W(window, {
        BMAP_ROUTE_TYPE_DRIVING: ef,
        BMAP_ROUTE_TYPE_WALKING: df,
        BMAP_ROUTE_TYPE_RIDING: ff
    });
    W(window, {
        BMAP_ROUTE_STATUS_NORMAL: gf,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var nh = wf.prototype;
    W(nh, {
        setPolicy: nh.un
    });
    var oh = Jf.prototype;
    W(oh, {
        show: oh.show,
        hide: oh.$,
        setTypes: oh.CF,
        setLocation: oh.qn,
        search: oh.search,
        setInputValue: oh.Gy
    });
    W(Ab.prototype, {});
    var ph = Hf.prototype;
    W(ph, {
        get: ph.get
    });
    W(nd.prototype, {});
    W(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: he,
        BMAP_POINT_DENSITY_LOW: 50
    });
    W(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: Hd,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    W(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: Id,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    W(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    W(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: qd,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: rd
    });
    W(window, {
        BMAP_SYS_DRAWER: Ma,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    C.eV();
    C.Zy();
}
)()
