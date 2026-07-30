(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        a(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const h of o.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && a(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function a(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = u(r);
        fetch(r.href, o)
    }
}
)();
var Mh = {
    exports: {}
}
  , Gr = {};
var wg;
function hS() {
    if (wg)
        return Gr;
    wg = 1;
    var f = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function u(a, r, o) {
        var h = null;
        if (o !== void 0 && (h = "" + o),
        r.key !== void 0 && (h = "" + r.key),
        "key"in r) {
            o = {};
            for (var d in r)
                d !== "key" && (o[d] = r[d])
        } else
            o = r;
        return r = o.ref,
        {
            $$typeof: f,
            type: a,
            key: h,
            ref: r !== void 0 ? r : null,
            props: o
        }
    }
    return Gr.Fragment = i,
    Gr.jsx = u,
    Gr.jsxs = u,
    Gr
}
var Rg;
function dS() {
    return Rg || (Rg = 1,
    Mh.exports = hS()),
    Mh.exports
}
var Z = dS()
  , Ch = {
    exports: {}
}
  , Vr = {}
  , wh = {
    exports: {}
}
  , Rh = {};
var Ng;
function pS() {
    return Ng || (Ng = 1,
    (function(f) {
        function i(R, Q) {
            var et = R.length;
            R.push(Q);
            t: for (; 0 < et; ) {
                var rt = et - 1 >>> 1
                  , D = R[rt];
                if (0 < r(D, Q))
                    R[rt] = Q,
                    R[et] = D,
                    et = rt;
                else
                    break t
            }
        }
        function u(R) {
            return R.length === 0 ? null : R[0]
        }
        function a(R) {
            if (R.length === 0)
                return null;
            var Q = R[0]
              , et = R.pop();
            if (et !== Q) {
                R[0] = et;
                t: for (var rt = 0, D = R.length, z = D >>> 1; rt < z; ) {
                    var G = 2 * (rt + 1) - 1
                      , P = R[G]
                      , I = G + 1
                      , ut = R[I];
                    if (0 > r(P, et))
                        I < D && 0 > r(ut, P) ? (R[rt] = ut,
                        R[I] = et,
                        rt = I) : (R[rt] = P,
                        R[G] = et,
                        rt = G);
                    else if (I < D && 0 > r(ut, et))
                        R[rt] = ut,
                        R[I] = et,
                        rt = I;
                    else
                        break t
                }
            }
            return Q
        }
        function r(R, Q) {
            var et = R.sortIndex - Q.sortIndex;
            return et !== 0 ? et : R.id - Q.id
        }
        if (f.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            f.unstable_now = function() {
                return o.now()
            }
        } else {
            var h = Date
              , d = h.now();
            f.unstable_now = function() {
                return h.now() - d
            }
        }
        var m = []
          , g = []
          , _ = 1
          , S = null
          , b = 3
          , y = !1
          , E = !1
          , x = !1
          , M = !1
          , L = typeof setTimeout == "function" ? setTimeout : null
          , Y = typeof clearTimeout == "function" ? clearTimeout : null
          , q = typeof setImmediate < "u" ? setImmediate : null;
        function H(R) {
            for (var Q = u(g); Q !== null; ) {
                if (Q.callback === null)
                    a(g);
                else if (Q.startTime <= R)
                    a(g),
                    Q.sortIndex = Q.expirationTime,
                    i(m, Q);
                else
                    break;
                Q = u(g)
            }
        }
        function X(R) {
            if (x = !1,
            H(R),
            !E)
                if (u(m) !== null)
                    E = !0,
                    F || (F = !0,
                    tt());
                else {
                    var Q = u(g);
                    Q !== null && _t(X, Q.startTime - R)
                }
        }
        var F = !1
          , C = -1
          , $ = 5
          , J = -1;
        function W() {
            return M ? !0 : !(f.unstable_now() - J < $)
        }
        function dt() {
            if (M = !1,
            F) {
                var R = f.unstable_now();
                J = R;
                var Q = !0;
                try {
                    t: {
                        E = !1,
                        x && (x = !1,
                        Y(C),
                        C = -1),
                        y = !0;
                        var et = b;
                        try {
                            e: {
                                for (H(R),
                                S = u(m); S !== null && !(S.expirationTime > R && W()); ) {
                                    var rt = S.callback;
                                    if (typeof rt == "function") {
                                        S.callback = null,
                                        b = S.priorityLevel;
                                        var D = rt(S.expirationTime <= R);
                                        if (R = f.unstable_now(),
                                        typeof D == "function") {
                                            S.callback = D,
                                            H(R),
                                            Q = !0;
                                            break e
                                        }
                                        S === u(m) && a(m),
                                        H(R)
                                    } else
                                        a(m);
                                    S = u(m)
                                }
                                if (S !== null)
                                    Q = !0;
                                else {
                                    var z = u(g);
                                    z !== null && _t(X, z.startTime - R),
                                    Q = !1
                                }
                            }
                            break t
                        } finally {
                            S = null,
                            b = et,
                            y = !1
                        }
                        Q = void 0
                    }
                } finally {
                    Q ? tt() : F = !1
                }
            }
        }
        var tt;
        if (typeof q == "function")
            tt = function() {
                q(dt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var bt = new MessageChannel
              , ht = bt.port2;
            bt.port1.onmessage = dt,
            tt = function() {
                ht.postMessage(null)
            }
        } else
            tt = function() {
                L(dt, 0)
            }
            ;
        function _t(R, Q) {
            C = L(function() {
                R(f.unstable_now())
            }, Q)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(R) {
            R.callback = null
        }
        ,
        f.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < R ? Math.floor(1e3 / R) : 5
        }
        ,
        f.unstable_getCurrentPriorityLevel = function() {
            return b
        }
        ,
        f.unstable_next = function(R) {
            switch (b) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = b
            }
            var et = b;
            b = Q;
            try {
                return R()
            } finally {
                b = et
            }
        }
        ,
        f.unstable_requestPaint = function() {
            M = !0
        }
        ,
        f.unstable_runWithPriority = function(R, Q) {
            switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
            }
            var et = b;
            b = R;
            try {
                return Q()
            } finally {
                b = et
            }
        }
        ,
        f.unstable_scheduleCallback = function(R, Q, et) {
            var rt = f.unstable_now();
            switch (typeof et == "object" && et !== null ? (et = et.delay,
            et = typeof et == "number" && 0 < et ? rt + et : rt) : et = rt,
            R) {
            case 1:
                var D = -1;
                break;
            case 2:
                D = 250;
                break;
            case 5:
                D = 1073741823;
                break;
            case 4:
                D = 1e4;
                break;
            default:
                D = 5e3
            }
            return D = et + D,
            R = {
                id: _++,
                callback: Q,
                priorityLevel: R,
                startTime: et,
                expirationTime: D,
                sortIndex: -1
            },
            et > rt ? (R.sortIndex = et,
            i(g, R),
            u(m) === null && R === u(g) && (x ? (Y(C),
            C = -1) : x = !0,
            _t(X, et - rt))) : (R.sortIndex = D,
            i(m, R),
            E || y || (E = !0,
            F || (F = !0,
            tt()))),
            R
        }
        ,
        f.unstable_shouldYield = W,
        f.unstable_wrapCallback = function(R) {
            var Q = b;
            return function() {
                var et = b;
                b = Q;
                try {
                    return R.apply(this, arguments)
                } finally {
                    b = et
                }
            }
        }
    }
    )(Rh)),
    Rh
}
var Ug;
function mS() {
    return Ug || (Ug = 1,
    wh.exports = pS()),
    wh.exports
}
var Nh = {
    exports: {}
}
  , St = {};
var Hg;
function gS() {
    if (Hg)
        return St;
    Hg = 1;
    var f = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , a = Symbol.for("react.strict_mode")
      , r = Symbol.for("react.profiler")
      , o = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , _ = Symbol.for("react.lazy")
      , S = Symbol.for("react.activity")
      , b = Symbol.iterator;
    function y(z) {
        return z === null || typeof z != "object" ? null : (z = b && z[b] || z["@@iterator"],
        typeof z == "function" ? z : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , x = Object.assign
      , M = {};
    function L(z, G, P) {
        this.props = z,
        this.context = G,
        this.refs = M,
        this.updater = P || E
    }
    L.prototype.isReactComponent = {},
    L.prototype.setState = function(z, G) {
        if (typeof z != "object" && typeof z != "function" && z != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, z, G, "setState")
    }
    ,
    L.prototype.forceUpdate = function(z) {
        this.updater.enqueueForceUpdate(this, z, "forceUpdate")
    }
    ;
    function Y() {}
    Y.prototype = L.prototype;
    function q(z, G, P) {
        this.props = z,
        this.context = G,
        this.refs = M,
        this.updater = P || E
    }
    var H = q.prototype = new Y;
    H.constructor = q,
    x(H, L.prototype),
    H.isPureReactComponent = !0;
    var X = Array.isArray;
    function F() {}
    var C = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , $ = Object.prototype.hasOwnProperty;
    function J(z, G, P) {
        var I = P.ref;
        return {
            $$typeof: f,
            type: z,
            key: G,
            ref: I !== void 0 ? I : null,
            props: P
        }
    }
    function W(z, G) {
        return J(z.type, G, z.props)
    }
    function dt(z) {
        return typeof z == "object" && z !== null && z.$$typeof === f
    }
    function tt(z) {
        var G = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + z.replace(/[=:]/g, function(P) {
            return G[P]
        })
    }
    var bt = /\/+/g;
    function ht(z, G) {
        return typeof z == "object" && z !== null && z.key != null ? tt("" + z.key) : G.toString(36)
    }
    function _t(z) {
        switch (z.status) {
        case "fulfilled":
            return z.value;
        case "rejected":
            throw z.reason;
        default:
            switch (typeof z.status == "string" ? z.then(F, F) : (z.status = "pending",
            z.then(function(G) {
                z.status === "pending" && (z.status = "fulfilled",
                z.value = G)
            }, function(G) {
                z.status === "pending" && (z.status = "rejected",
                z.reason = G)
            })),
            z.status) {
            case "fulfilled":
                return z.value;
            case "rejected":
                throw z.reason
            }
        }
        throw z
    }
    function R(z, G, P, I, ut) {
        var ft = typeof z;
        (ft === "undefined" || ft === "boolean") && (z = null);
        var pt = !1;
        if (z === null)
            pt = !0;
        else
            switch (ft) {
            case "bigint":
            case "string":
            case "number":
                pt = !0;
                break;
            case "object":
                switch (z.$$typeof) {
                case f:
                case i:
                    pt = !0;
                    break;
                case _:
                    return pt = z._init,
                    R(pt(z._payload), G, P, I, ut)
                }
            }
        if (pt)
            return ut = ut(z),
            pt = I === "" ? "." + ht(z, 0) : I,
            X(ut) ? (P = "",
            pt != null && (P = pt.replace(bt, "$&/") + "/"),
            R(ut, G, P, "", function(Dn) {
                return Dn
            })) : ut != null && (dt(ut) && (ut = W(ut, P + (ut.key == null || z && z.key === ut.key ? "" : ("" + ut.key).replace(bt, "$&/") + "/") + pt)),
            G.push(ut)),
            1;
        pt = 0;
        var kt = I === "" ? "." : I + ":";
        if (X(z))
            for (var Ct = 0; Ct < z.length; Ct++)
                I = z[Ct],
                ft = kt + ht(I, Ct),
                pt += R(I, G, P, ft, ut);
        else if (Ct = y(z),
        typeof Ct == "function")
            for (z = Ct.call(z),
            Ct = 0; !(I = z.next()).done; )
                I = I.value,
                ft = kt + ht(I, Ct++),
                pt += R(I, G, P, ft, ut);
        else if (ft === "object") {
            if (typeof z.then == "function")
                return R(_t(z), G, P, I, ut);
            throw G = String(z),
            Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.")
        }
        return pt
    }
    function Q(z, G, P) {
        if (z == null)
            return z;
        var I = []
          , ut = 0;
        return R(z, I, "", "", function(ft) {
            return G.call(P, ft, ut++)
        }),
        I
    }
    function et(z) {
        if (z._status === -1) {
            var G = z._result;
            G = G(),
            G.then(function(P) {
                (z._status === 0 || z._status === -1) && (z._status = 1,
                z._result = P)
            }, function(P) {
                (z._status === 0 || z._status === -1) && (z._status = 2,
                z._result = P)
            }),
            z._status === -1 && (z._status = 0,
            z._result = G)
        }
        if (z._status === 1)
            return z._result.default;
        throw z._result
    }
    var rt = typeof reportError == "function" ? reportError : function(z) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var G = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
                error: z
            });
            if (!window.dispatchEvent(G))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", z);
            return
        }
        console.error(z)
    }
      , D = {
        map: Q,
        forEach: function(z, G, P) {
            Q(z, function() {
                G.apply(this, arguments)
            }, P)
        },
        count: function(z) {
            var G = 0;
            return Q(z, function() {
                G++
            }),
            G
        },
        toArray: function(z) {
            return Q(z, function(G) {
                return G
            }) || []
        },
        only: function(z) {
            if (!dt(z))
                throw Error("React.Children.only expected to receive a single React element child.");
            return z
        }
    };
    return St.Activity = S,
    St.Children = D,
    St.Component = L,
    St.Fragment = u,
    St.Profiler = r,
    St.PureComponent = q,
    St.StrictMode = a,
    St.Suspense = m,
    St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C,
    St.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(z) {
            return C.H.useMemoCache(z)
        }
    },
    St.cache = function(z) {
        return function() {
            return z.apply(null, arguments)
        }
    }
    ,
    St.cacheSignal = function() {
        return null
    }
    ,
    St.cloneElement = function(z, G, P) {
        if (z == null)
            throw Error("The argument must be a React element, but you passed " + z + ".");
        var I = x({}, z.props)
          , ut = z.key;
        if (G != null)
            for (ft in G.key !== void 0 && (ut = "" + G.key),
            G)
                !$.call(G, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && G.ref === void 0 || (I[ft] = G[ft]);
        var ft = arguments.length - 2;
        if (ft === 1)
            I.children = P;
        else if (1 < ft) {
            for (var pt = Array(ft), kt = 0; kt < ft; kt++)
                pt[kt] = arguments[kt + 2];
            I.children = pt
        }
        return J(z.type, ut, I)
    }
    ,
    St.createContext = function(z) {
        return z = {
            $$typeof: h,
            _currentValue: z,
            _currentValue2: z,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        z.Provider = z,
        z.Consumer = {
            $$typeof: o,
            _context: z
        },
        z
    }
    ,
    St.createElement = function(z, G, P) {
        var I, ut = {}, ft = null;
        if (G != null)
            for (I in G.key !== void 0 && (ft = "" + G.key),
            G)
                $.call(G, I) && I !== "key" && I !== "__self" && I !== "__source" && (ut[I] = G[I]);
        var pt = arguments.length - 2;
        if (pt === 1)
            ut.children = P;
        else if (1 < pt) {
            for (var kt = Array(pt), Ct = 0; Ct < pt; Ct++)
                kt[Ct] = arguments[Ct + 2];
            ut.children = kt
        }
        if (z && z.defaultProps)
            for (I in pt = z.defaultProps,
            pt)
                ut[I] === void 0 && (ut[I] = pt[I]);
        return J(z, ft, ut)
    }
    ,
    St.createRef = function() {
        return {
            current: null
        }
    }
    ,
    St.forwardRef = function(z) {
        return {
            $$typeof: d,
            render: z
        }
    }
    ,
    St.isValidElement = dt,
    St.lazy = function(z) {
        return {
            $$typeof: _,
            _payload: {
                _status: -1,
                _result: z
            },
            _init: et
        }
    }
    ,
    St.memo = function(z, G) {
        return {
            $$typeof: g,
            type: z,
            compare: G === void 0 ? null : G
        }
    }
    ,
    St.startTransition = function(z) {
        var G = C.T
          , P = {};
        C.T = P;
        try {
            var I = z()
              , ut = C.S;
            ut !== null && ut(P, I),
            typeof I == "object" && I !== null && typeof I.then == "function" && I.then(F, rt)
        } catch (ft) {
            rt(ft)
        } finally {
            G !== null && P.types !== null && (G.types = P.types),
            C.T = G
        }
    }
    ,
    St.unstable_useCacheRefresh = function() {
        return C.H.useCacheRefresh()
    }
    ,
    St.use = function(z) {
        return C.H.use(z)
    }
    ,
    St.useActionState = function(z, G, P) {
        return C.H.useActionState(z, G, P)
    }
    ,
    St.useCallback = function(z, G) {
        return C.H.useCallback(z, G)
    }
    ,
    St.useContext = function(z) {
        return C.H.useContext(z)
    }
    ,
    St.useDebugValue = function() {}
    ,
    St.useDeferredValue = function(z, G) {
        return C.H.useDeferredValue(z, G)
    }
    ,
    St.useEffect = function(z, G) {
        return C.H.useEffect(z, G)
    }
    ,
    St.useEffectEvent = function(z) {
        return C.H.useEffectEvent(z)
    }
    ,
    St.useId = function() {
        return C.H.useId()
    }
    ,
    St.useImperativeHandle = function(z, G, P) {
        return C.H.useImperativeHandle(z, G, P)
    }
    ,
    St.useInsertionEffect = function(z, G) {
        return C.H.useInsertionEffect(z, G)
    }
    ,
    St.useLayoutEffect = function(z, G) {
        return C.H.useLayoutEffect(z, G)
    }
    ,
    St.useMemo = function(z, G) {
        return C.H.useMemo(z, G)
    }
    ,
    St.useOptimistic = function(z, G) {
        return C.H.useOptimistic(z, G)
    }
    ,
    St.useReducer = function(z, G, P) {
        return C.H.useReducer(z, G, P)
    }
    ,
    St.useRef = function(z) {
        return C.H.useRef(z)
    }
    ,
    St.useState = function(z) {
        return C.H.useState(z)
    }
    ,
    St.useSyncExternalStore = function(z, G, P) {
        return C.H.useSyncExternalStore(z, G, P)
    }
    ,
    St.useTransition = function() {
        return C.H.useTransition()
    }
    ,
    St.version = "19.2.7",
    St
}
var Bg;
function yd() {
    return Bg || (Bg = 1,
    Nh.exports = gS()),
    Nh.exports
}
var Uh = {
    exports: {}
}
  , fn = {};
var Yg;
function _S() {
    if (Yg)
        return fn;
    Yg = 1;
    var f = yd();
    function i(m) {
        var g = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var _ = 2; _ < arguments.length; _++)
                g += "&args[]=" + encodeURIComponent(arguments[_])
        }
        return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var a = {
        d: {
            f: u,
            r: function() {
                throw Error(i(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , r = Symbol.for("react.portal");
    function o(m, g, _) {
        var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: r,
            key: S == null ? null : "" + S,
            children: m,
            containerInfo: g,
            implementation: _
        }
    }
    var h = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(m, g) {
        if (m === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a,
    fn.createPortal = function(m, g) {
        var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(i(299));
        return o(m, g, null, _)
    }
    ,
    fn.flushSync = function(m) {
        var g = h.T
          , _ = a.p;
        try {
            if (h.T = null,
            a.p = 2,
            m)
                return m()
        } finally {
            h.T = g,
            a.p = _,
            a.d.f()
        }
    }
    ,
    fn.preconnect = function(m, g) {
        typeof m == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        a.d.C(m, g))
    }
    ,
    fn.prefetchDNS = function(m) {
        typeof m == "string" && a.d.D(m)
    }
    ,
    fn.preinit = function(m, g) {
        if (typeof m == "string" && g && typeof g.as == "string") {
            var _ = g.as
              , S = d(_, g.crossOrigin)
              , b = typeof g.integrity == "string" ? g.integrity : void 0
              , y = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            _ === "style" ? a.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: S,
                integrity: b,
                fetchPriority: y
            }) : _ === "script" && a.d.X(m, {
                crossOrigin: S,
                integrity: b,
                fetchPriority: y,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    fn.preinitModule = function(m, g) {
        if (typeof m == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var _ = d(g.as, g.crossOrigin);
                    a.d.M(m, {
                        crossOrigin: _,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && a.d.M(m)
    }
    ,
    fn.preload = function(m, g) {
        if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var _ = g.as
              , S = d(_, g.crossOrigin);
            a.d.L(m, _, {
                crossOrigin: S,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    fn.preloadModule = function(m, g) {
        if (typeof m == "string")
            if (g) {
                var _ = d(g.as, g.crossOrigin);
                a.d.m(m, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: _,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                a.d.m(m)
    }
    ,
    fn.requestFormReset = function(m) {
        a.d.r(m)
    }
    ,
    fn.unstable_batchedUpdates = function(m, g) {
        return m(g)
    }
    ,
    fn.useFormState = function(m, g, _) {
        return h.H.useFormState(m, g, _)
    }
    ,
    fn.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    fn.version = "19.2.7",
    fn
}
var Lg;
function vS() {
    if (Lg)
        return Uh.exports;
    Lg = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (i) {
                console.error(i)
            }
    }
    return f(),
    Uh.exports = _S(),
    Uh.exports
}
var jg;
function yS() {
    if (jg)
        return Vr;
    jg = 1;
    var f = mS()
      , i = yd()
      , u = vS();
    function a(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function o(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function d(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function m(t) {
        if (o(t) !== t)
            throw Error(a(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = o(t),
            e === null)
                throw Error(a(188));
            return e !== t ? null : t
        }
        for (var n = t, l = e; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var c = s.alternate;
            if (c === null) {
                if (l = s.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (s.child === c.child) {
                for (c = s.child; c; ) {
                    if (c === n)
                        return m(s),
                        t;
                    if (c === l)
                        return m(s),
                        e;
                    c = c.sibling
                }
                throw Error(a(188))
            }
            if (n.return !== l.return)
                n = s,
                l = c;
            else {
                for (var p = !1, v = s.child; v; ) {
                    if (v === n) {
                        p = !0,
                        n = s,
                        l = c;
                        break
                    }
                    if (v === l) {
                        p = !0,
                        l = s,
                        n = c;
                        break
                    }
                    v = v.sibling
                }
                if (!p) {
                    for (v = c.child; v; ) {
                        if (v === n) {
                            p = !0,
                            n = c,
                            l = s;
                            break
                        }
                        if (v === l) {
                            p = !0,
                            l = c,
                            n = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!p)
                        throw Error(a(189))
                }
            }
            if (n.alternate !== l)
                throw Error(a(190))
        }
        if (n.tag !== 3)
            throw Error(a(188));
        return n.stateNode.current === n ? t : e
    }
    function _(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = _(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var S = Object.assign
      , b = Symbol.for("react.element")
      , y = Symbol.for("react.transitional.element")
      , E = Symbol.for("react.portal")
      , x = Symbol.for("react.fragment")
      , M = Symbol.for("react.strict_mode")
      , L = Symbol.for("react.profiler")
      , Y = Symbol.for("react.consumer")
      , q = Symbol.for("react.context")
      , H = Symbol.for("react.forward_ref")
      , X = Symbol.for("react.suspense")
      , F = Symbol.for("react.suspense_list")
      , C = Symbol.for("react.memo")
      , $ = Symbol.for("react.lazy")
      , J = Symbol.for("react.activity")
      , W = Symbol.for("react.memo_cache_sentinel")
      , dt = Symbol.iterator;
    function tt(t) {
        return t === null || typeof t != "object" ? null : (t = dt && t[dt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var bt = Symbol.for("react.client.reference");
    function ht(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === bt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case x:
            return "Fragment";
        case L:
            return "Profiler";
        case M:
            return "StrictMode";
        case X:
            return "Suspense";
        case F:
            return "SuspenseList";
        case J:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case E:
                return "Portal";
            case q:
                return t.displayName || "Context";
            case Y:
                return (t._context.displayName || "Context") + ".Consumer";
            case H:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case C:
                return e = t.displayName || null,
                e !== null ? e : ht(t.type) || "Memo";
            case $:
                e = t._payload,
                t = t._init;
                try {
                    return ht(t(e))
                } catch {}
            }
        return null
    }
    var _t = Array.isArray
      , R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , et = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , rt = []
      , D = -1;
    function z(t) {
        return {
            current: t
        }
    }
    function G(t) {
        0 > D || (t.current = rt[D],
        rt[D] = null,
        D--)
    }
    function P(t, e) {
        D++,
        rt[D] = t.current,
        t.current = e
    }
    var I = z(null)
      , ut = z(null)
      , ft = z(null)
      , pt = z(null);
    function kt(t, e) {
        switch (P(ft, e),
        P(ut, t),
        P(I, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? tg(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = tg(e),
                t = eg(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        G(I),
        P(I, t)
    }
    function Ct() {
        G(I),
        G(ut),
        G(ft)
    }
    function Dn(t) {
        t.memoizedState !== null && P(pt, t);
        var e = I.current
          , n = eg(e, t.type);
        e !== n && (P(ut, t),
        P(I, n))
    }
    function Ne(t) {
        ut.current === t && (G(I),
        G(ut)),
        pt.current === t && (G(pt),
        Lr._currentValue = et)
    }
    var Ge, Yt;
    function Ft(t) {
        if (Ge === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                Ge = e && e[1] || "",
                Yt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ge + t + Yt
    }
    var Je = !1;
    function Ie(t, e) {
        if (!t || Je)
            return "";
        Je = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (B) {
                                    var U = B
                                }
                                Reflect.construct(t, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (B) {
                                    U = B
                                }
                                t.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (B) {
                                U = B
                            }
                            (K = t()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (B) {
                        if (B && U && typeof B.stack == "string")
                            return [B.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = l.DetermineComponentFrameRoot()
              , p = c[0]
              , v = c[1];
            if (p && v) {
                var T = p.split(`
`)
                  , N = v.split(`
`);
                for (s = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (l === T.length || s === N.length)
                    for (l = T.length - 1,
                    s = N.length - 1; 1 <= l && 0 <= s && T[l] !== N[s]; )
                        s--;
                for (; 1 <= l && 0 <= s; l--,
                s--)
                    if (T[l] !== N[s]) {
                        if (l !== 1 || s !== 1)
                            do
                                if (l--,
                                s--,
                                0 > s || T[l] !== N[s]) {
                                    var V = `
` + T[l].replace(" at new ", " at ");
                                    return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)),
                                    V
                                }
                            while (1 <= l && 0 <= s);
                        break
                    }
            }
        } finally {
            Je = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Ft(n) : ""
    }
    function j(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ft(t.type);
        case 16:
            return Ft("Lazy");
        case 13:
            return t.child !== e && e !== null ? Ft("Suspense Fallback") : Ft("Suspense");
        case 19:
            return Ft("SuspenseList");
        case 0:
        case 15:
            return Ie(t.type, !1);
        case 11:
            return Ie(t.type.render, !1);
        case 1:
            return Ie(t.type, !0);
        case 31:
            return Ft("Activity");
        default:
            return ""
        }
    }
    function rn(t) {
        try {
            var e = ""
              , n = null;
            do
                e += j(t, n),
                n = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var Vn = Object.prototype.hasOwnProperty
      , oi = f.unstable_scheduleCallback
      , ae = f.unstable_cancelCallback
      , Ni = f.unstable_shouldYield
      , qi = f.unstable_requestPaint
      , De = f.unstable_now
      , Ue = f.unstable_getCurrentPriorityLevel
      , Ui = f.unstable_ImmediatePriority
      , oe = f.unstable_UserBlockingPriority
      , sn = f.unstable_NormalPriority
      , On = f.unstable_LowPriority
      , fi = f.unstable_IdlePriority
      , ma = f.log
      , xe = f.unstable_setDisableYieldValue
      , Xi = null
      , pe = null;
    function _n(t) {
        if (typeof ma == "function" && xe(t),
        pe && typeof pe.setStrictMode == "function")
            try {
                pe.setStrictMode(Xi, t)
            } catch {}
    }
    var He = Math.clz32 ? Math.clz32 : At
      , Gi = Math.log
      , il = Math.LN2;
    function At(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Gi(t) / il | 0) | 0
    }
    var hi = 256
      , cn = 262144
      , on = 4194304;
    function Ve(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function di(t, e, n) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var s = 0
          , c = t.suspendedLanes
          , p = t.pingedLanes;
        t = t.warmLanes;
        var v = l & 134217727;
        return v !== 0 ? (l = v & ~c,
        l !== 0 ? s = Ve(l) : (p &= v,
        p !== 0 ? s = Ve(p) : n || (n = v & ~t,
        n !== 0 && (s = Ve(n))))) : (v = l & ~c,
        v !== 0 ? s = Ve(v) : p !== 0 ? s = Ve(p) : n || (n = l & ~t,
        n !== 0 && (s = Ve(n)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & c) === 0 && (c = s & -s,
        n = e & -e,
        c >= n || c === 32 && (n & 4194048) !== 0) ? e : s
    }
    function pi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Hi(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Ml() {
        var t = on;
        return on <<= 1,
        (on & 62914560) === 0 && (on = 4194304),
        t
    }
    function vt(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function st(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function Vt(t, e, n, l, s, c) {
        var p = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , T = t.expirationTimes
          , N = t.hiddenUpdates;
        for (n = p & ~n; 0 < n; ) {
            var V = 31 - He(n)
              , K = 1 << V;
            v[V] = 0,
            T[V] = -1;
            var U = N[V];
            if (U !== null)
                for (N[V] = null,
                V = 0; V < U.length; V++) {
                    var B = U[V];
                    B !== null && (B.lane &= -536870913)
                }
            n &= ~K
        }
        l !== 0 && nt(t, l, 0),
        c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(p & ~e))
    }
    function nt(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - He(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930
    }
    function yt(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var l = 31 - He(n)
              , s = 1 << l;
            s & e | t[l] & e && (t[l] |= e),
            n &= ~s
        }
    }
    function ct(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : gt(n),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }
    function gt(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Te(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function wt() {
        var t = Q.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Eg(t.type))
    }
    function fe(t, e) {
        var n = Q.p;
        try {
            return Q.p = t,
            e()
        } finally {
            Q.p = n
        }
    }
    var ue = Math.random().toString(36).slice(2)
      , zt = "__reactFiber$" + ue
      , Dt = "__reactProps$" + ue
      , Gt = "__reactContainer$" + ue
      , vn = "__reactEvents$" + ue
      , re = "__reactListeners$" + ue
      , yn = "__reactHandles$" + ue
      , Qn = "__reactResources$" + ue
      , me = "__reactMarker$" + ue;
    function Oe(t) {
        delete t[zt],
        delete t[Dt],
        delete t[vn],
        delete t[re],
        delete t[yn]
    }
    function ge(t) {
        var e = t[zt];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[Gt] || n[zt]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = sg(t); t !== null; ) {
                        if (n = t[zt])
                            return n;
                        t = sg(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function Mn(t) {
        if (t = t[zt] || t[Gt]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Vi(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(a(33))
    }
    function _e(t) {
        var e = t[Qn];
        return e || (e = t[Qn] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Rt(t) {
        t[me] = !0
    }
    var Zn = new Set
      , Ia = {};
    function Qi(t, e) {
        mi(t, e),
        mi(t + "Capture", e)
    }
    function mi(t, e) {
        for (Ia[t] = e,
        t = 0; t < e.length; t++)
            Zn.add(e[t])
    }
    var gi = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Cl = {}
      , ga = {};
    function Zi(t) {
        return Vn.call(ga, t) ? !0 : Vn.call(Cl, t) ? !1 : gi.test(t) ? ga[t] = !0 : (Cl[t] = !0,
        !1)
    }
    function Ts(t, e, n) {
        if (Zi(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function Es(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function ll(t, e, n, l) {
        if (l === null)
            t.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + l)
        }
    }
    function _i(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function kd(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function av(t, e, n) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var s = l.get
              , c = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(p) {
                    n = "" + p,
                    c.call(this, p)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(p) {
                    n = "" + p
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function bo(t) {
        if (!t._valueTracker) {
            var e = kd(t) ? "checked" : "value";
            t._valueTracker = av(t, e, "" + t[e])
        }
    }
    function Kd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , l = "";
        return t && (l = kd(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function zs(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var uv = /[\n"\\]/g;
    function vi(t) {
        return t.replace(uv, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function xo(t, e, n, l, s, c, p, v) {
        t.name = "",
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.type = p : t.removeAttribute("type"),
        e != null ? p === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + _i(e)) : t.value !== "" + _i(e) && (t.value = "" + _i(e)) : p !== "submit" && p !== "reset" || t.removeAttribute("value"),
        e != null ? To(t, p, _i(e)) : n != null ? To(t, p, _i(n)) : l != null && t.removeAttribute("value"),
        s == null && c != null && (t.defaultChecked = !!c),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + _i(v) : t.removeAttribute("name")
    }
    function Jd(t, e, n, l, s, c, p, v) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
        e != null || n != null) {
            if (!(c !== "submit" && c !== "reset" || e != null)) {
                bo(t);
                return
            }
            n = n != null ? "" + _i(n) : "",
            e = e != null ? "" + _i(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? s,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = v ? t.checked : !!l,
        t.defaultChecked = !!l,
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p),
        bo(t)
    }
    function To(t, e, n) {
        e === "number" && zs(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function tu(t, e, n, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < n.length; s++)
                e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++)
                s = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== s && (t[n].selected = s),
                s && l && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + _i(n),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0,
                    l && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Fd(t, e, n) {
        if (e != null && (e = "" + _i(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + _i(n) : ""
    }
    function Wd(t, e, n, l) {
        if (e == null) {
            if (l != null) {
                if (n != null)
                    throw Error(a(92));
                if (_t(l)) {
                    if (1 < l.length)
                        throw Error(a(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            e = n
        }
        n = _i(e),
        t.defaultValue = n,
        l = t.textContent,
        l === n && l !== "" && l !== null && (t.value = l),
        bo(t)
    }
    function eu(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var rv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function $d(t, e, n) {
        var l = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || rv.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function Pd(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(a(62));
        if (t = t.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var s in e)
                l = e[s],
                e.hasOwnProperty(s) && n[s] !== l && $d(t, s, l)
        } else
            for (var c in e)
                e.hasOwnProperty(c) && $d(t, c, e[c])
    }
    function Eo(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var sv = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , cv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function As(t) {
        return cv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function al() {}
    var zo = null;
    function Ao(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var nu = null
      , iu = null;
    function Id(t) {
        var e = Mn(t);
        if (e && (t = e.stateNode)) {
            var n = t[Dt] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (xo(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + vi("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var l = n[e];
                        if (l !== t && l.form === t.form) {
                            var s = l[Dt] || null;
                            if (!s)
                                throw Error(a(90));
                            xo(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        l = n[e],
                        l.form === t.form && Kd(l)
                }
                break t;
            case "textarea":
                Fd(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && tu(t, !!n.multiple, e, !1)
            }
        }
    }
    var Do = !1;
    function t0(t, e, n) {
        if (Do)
            return t(e, n);
        Do = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (Do = !1,
            (nu !== null || iu !== null) && (dc(),
            nu && (e = nu,
            t = iu,
            iu = nu = null,
            Id(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Id(t[e])
        }
    }
    function er(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var l = n[Dt] || null;
        if (l === null)
            return null;
        n = l[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(a(231, e, typeof n));
        return n
    }
    var ul = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Oo = !1;
    if (ul)
        try {
            var nr = {};
            Object.defineProperty(nr, "passive", {
                get: function() {
                    Oo = !0
                }
            }),
            window.addEventListener("test", nr, nr),
            window.removeEventListener("test", nr, nr)
        } catch {
            Oo = !1
        }
    var wl = null
      , Mo = null
      , Ds = null;
    function e0() {
        if (Ds)
            return Ds;
        var t, e = Mo, n = e.length, l, s = "value"in wl ? wl.value : wl.textContent, c = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++)
            ;
        var p = n - t;
        for (l = 1; l <= p && e[n - l] === s[c - l]; l++)
            ;
        return Ds = s.slice(t, 1 < l ? 1 - l : void 0)
    }
    function Os(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Ms() {
        return !0
    }
    function n0() {
        return !1
    }
    function Cn(t) {
        function e(n, l, s, c, p) {
            this._reactName = n,
            this._targetInst = s,
            this.type = l,
            this.nativeEvent = c,
            this.target = p,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(c) : c[v]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ms : n0,
            this.isPropagationStopped = n0,
            this
        }
        return S(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ms)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ms)
            },
            persist: function() {},
            isPersistent: Ms
        }),
        e
    }
    var _a = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Cs = Cn(_a), ir = S({}, _a, {
        view: 0,
        detail: 0
    }), ov = Cn(ir), Co, wo, lr, ws = S({}, ir, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: No,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== lr && (lr && t.type === "mousemove" ? (Co = t.screenX - lr.screenX,
            wo = t.screenY - lr.screenY) : wo = Co = 0,
            lr = t),
            Co)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : wo
        }
    }), i0 = Cn(ws), fv = S({}, ws, {
        dataTransfer: 0
    }), hv = Cn(fv), dv = S({}, ir, {
        relatedTarget: 0
    }), Ro = Cn(dv), pv = S({}, _a, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), mv = Cn(pv), gv = S({}, _a, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), _v = Cn(gv), vv = S({}, _a, {
        data: 0
    }), l0 = Cn(vv), yv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Sv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, bv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function xv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = bv[t]) ? !!e[t] : !1
    }
    function No() {
        return xv
    }
    var Tv = S({}, ir, {
        key: function(t) {
            if (t.key) {
                var e = yv[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Os(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Sv[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: No,
        charCode: function(t) {
            return t.type === "keypress" ? Os(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Os(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Ev = Cn(Tv)
      , zv = S({}, ws, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , a0 = Cn(zv)
      , Av = S({}, ir, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: No
    })
      , Dv = Cn(Av)
      , Ov = S({}, _a, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Mv = Cn(Ov)
      , Cv = S({}, ws, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , wv = Cn(Cv)
      , Rv = S({}, _a, {
        newState: 0,
        oldState: 0
    })
      , Nv = Cn(Rv)
      , Uv = [9, 13, 27, 32]
      , Uo = ul && "CompositionEvent"in window
      , ar = null;
    ul && "documentMode"in document && (ar = document.documentMode);
    var Hv = ul && "TextEvent"in window && !ar
      , u0 = ul && (!Uo || ar && 8 < ar && 11 >= ar)
      , r0 = " "
      , s0 = !1;
    function c0(t, e) {
        switch (t) {
        case "keyup":
            return Uv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function o0(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var lu = !1;
    function Bv(t, e) {
        switch (t) {
        case "compositionend":
            return o0(e);
        case "keypress":
            return e.which !== 32 ? null : (s0 = !0,
            r0);
        case "textInput":
            return t = e.data,
            t === r0 && s0 ? null : t;
        default:
            return null
        }
    }
    function Yv(t, e) {
        if (lu)
            return t === "compositionend" || !Uo && c0(t, e) ? (t = e0(),
            Ds = Mo = wl = null,
            lu = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return u0 && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var Lv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function f0(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Lv[t.type] : e === "textarea"
    }
    function h0(t, e, n, l) {
        nu ? iu ? iu.push(l) : iu = [l] : nu = l,
        e = Sc(e, "onChange"),
        0 < e.length && (n = new Cs("onChange","change",null,n,l),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var ur = null
      , rr = null;
    function jv(t) {
        Jm(t, 0)
    }
    function Rs(t) {
        var e = Vi(t);
        if (Kd(e))
            return t
    }
    function d0(t, e) {
        if (t === "change")
            return e
    }
    var p0 = !1;
    if (ul) {
        var Ho;
        if (ul) {
            var Bo = "oninput"in document;
            if (!Bo) {
                var m0 = document.createElement("div");
                m0.setAttribute("oninput", "return;"),
                Bo = typeof m0.oninput == "function"
            }
            Ho = Bo
        } else
            Ho = !1;
        p0 = Ho && (!document.documentMode || 9 < document.documentMode)
    }
    function g0() {
        ur && (ur.detachEvent("onpropertychange", _0),
        rr = ur = null)
    }
    function _0(t) {
        if (t.propertyName === "value" && Rs(rr)) {
            var e = [];
            h0(e, rr, t, Ao(t)),
            t0(jv, e)
        }
    }
    function qv(t, e, n) {
        t === "focusin" ? (g0(),
        ur = e,
        rr = n,
        ur.attachEvent("onpropertychange", _0)) : t === "focusout" && g0()
    }
    function Xv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Rs(rr)
    }
    function Gv(t, e) {
        if (t === "click")
            return Rs(e)
    }
    function Vv(t, e) {
        if (t === "input" || t === "change")
            return Rs(e)
    }
    function Qv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var kn = typeof Object.is == "function" ? Object.is : Qv;
    function sr(t, e) {
        if (kn(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , l = Object.keys(e);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var s = n[l];
            if (!Vn.call(e, s) || !kn(t[s], e[s]))
                return !1
        }
        return !0
    }
    function v0(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function y0(t, e) {
        var n = v0(t);
        t = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = t + n.textContent.length,
                t <= e && l >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = v0(n)
        }
    }
    function S0(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? S0(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function b0(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = zs(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = zs(t.document)
        }
        return e
    }
    function Yo(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Zv = ul && "documentMode"in document && 11 >= document.documentMode
      , au = null
      , Lo = null
      , cr = null
      , jo = !1;
    function x0(t, e, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        jo || au == null || au !== zs(l) || (l = au,
        "selectionStart"in l && Yo(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        cr && sr(cr, l) || (cr = l,
        l = Sc(Lo, "onSelect"),
        0 < l.length && (e = new Cs("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = au)))
    }
    function va(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var uu = {
        animationend: va("Animation", "AnimationEnd"),
        animationiteration: va("Animation", "AnimationIteration"),
        animationstart: va("Animation", "AnimationStart"),
        transitionrun: va("Transition", "TransitionRun"),
        transitionstart: va("Transition", "TransitionStart"),
        transitioncancel: va("Transition", "TransitionCancel"),
        transitionend: va("Transition", "TransitionEnd")
    }
      , qo = {}
      , T0 = {};
    ul && (T0 = document.createElement("div").style,
    "AnimationEvent"in window || (delete uu.animationend.animation,
    delete uu.animationiteration.animation,
    delete uu.animationstart.animation),
    "TransitionEvent"in window || delete uu.transitionend.transition);
    function ya(t) {
        if (qo[t])
            return qo[t];
        if (!uu[t])
            return t;
        var e = uu[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in T0)
                return qo[t] = e[n];
        return t
    }
    var E0 = ya("animationend")
      , z0 = ya("animationiteration")
      , A0 = ya("animationstart")
      , kv = ya("transitionrun")
      , Kv = ya("transitionstart")
      , Jv = ya("transitioncancel")
      , D0 = ya("transitionend")
      , O0 = new Map
      , Xo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xo.push("scrollEnd");
    function Bi(t, e) {
        O0.set(t, e),
        Qi(e, [t])
    }
    var Ns = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , yi = []
      , ru = 0
      , Go = 0;
    function Us() {
        for (var t = ru, e = Go = ru = 0; e < t; ) {
            var n = yi[e];
            yi[e++] = null;
            var l = yi[e];
            yi[e++] = null;
            var s = yi[e];
            yi[e++] = null;
            var c = yi[e];
            if (yi[e++] = null,
            l !== null && s !== null) {
                var p = l.pending;
                p === null ? s.next = s : (s.next = p.next,
                p.next = s),
                l.pending = s
            }
            c !== 0 && M0(n, s, c)
        }
    }
    function Hs(t, e, n, l) {
        yi[ru++] = t,
        yi[ru++] = e,
        yi[ru++] = n,
        yi[ru++] = l,
        Go |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function Vo(t, e, n, l) {
        return Hs(t, e, n, l),
        Bs(t)
    }
    function Sa(t, e) {
        return Hs(t, null, null, e),
        Bs(t)
    }
    function M0(t, e, n) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n);
        for (var s = !1, c = t.return; c !== null; )
            c.childLanes |= n,
            l = c.alternate,
            l !== null && (l.childLanes |= n),
            c.tag === 22 && (t = c.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = c,
            c = c.return;
        return t.tag === 3 ? (c = t.stateNode,
        s && e !== null && (s = 31 - He(n),
        t = c.hiddenUpdates,
        l = t[s],
        l === null ? t[s] = [e] : l.push(e),
        e.lane = n | 536870912),
        c) : null
    }
    function Bs(t) {
        if (50 < wr)
            throw wr = 0,
            If = null,
            Error(a(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var su = {};
    function Fv(t, e, n, l) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kn(t, e, n, l) {
        return new Fv(t,e,n,l)
    }
    function Qo(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function rl(t, e) {
        var n = t.alternate;
        return n === null ? (n = Kn(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function C0(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Ys(t, e, n, l, s, c) {
        var p = 0;
        if (l = t,
        typeof t == "function")
            Qo(t) && (p = 1);
        else if (typeof t == "string")
            p = tS(t, n, I.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case J:
                return t = Kn(31, n, e, s),
                t.elementType = J,
                t.lanes = c,
                t;
            case x:
                return ba(n.children, s, c, e);
            case M:
                p = 8,
                s |= 24;
                break;
            case L:
                return t = Kn(12, n, e, s | 2),
                t.elementType = L,
                t.lanes = c,
                t;
            case X:
                return t = Kn(13, n, e, s),
                t.elementType = X,
                t.lanes = c,
                t;
            case F:
                return t = Kn(19, n, e, s),
                t.elementType = F,
                t.lanes = c,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case q:
                        p = 10;
                        break t;
                    case Y:
                        p = 9;
                        break t;
                    case H:
                        p = 11;
                        break t;
                    case C:
                        p = 14;
                        break t;
                    case $:
                        p = 16,
                        l = null;
                        break t
                    }
                p = 29,
                n = Error(a(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = Kn(p, n, e, s),
        e.elementType = t,
        e.type = l,
        e.lanes = c,
        e
    }
    function ba(t, e, n, l) {
        return t = Kn(7, t, l, e),
        t.lanes = n,
        t
    }
    function Zo(t, e, n) {
        return t = Kn(6, t, null, e),
        t.lanes = n,
        t
    }
    function w0(t) {
        var e = Kn(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function ko(t, e, n) {
        return e = Kn(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var R0 = new WeakMap;
    function Si(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = R0.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: rn(e)
            },
            R0.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: rn(e)
        }
    }
    var cu = []
      , ou = 0
      , Ls = null
      , or = 0
      , bi = []
      , xi = 0
      , Rl = null
      , ki = 1
      , Ki = "";
    function sl(t, e) {
        cu[ou++] = or,
        cu[ou++] = Ls,
        Ls = t,
        or = e
    }
    function N0(t, e, n) {
        bi[xi++] = ki,
        bi[xi++] = Ki,
        bi[xi++] = Rl,
        Rl = t;
        var l = ki;
        t = Ki;
        var s = 32 - He(l) - 1;
        l &= ~(1 << s),
        n += 1;
        var c = 32 - He(e) + s;
        if (30 < c) {
            var p = s - s % 5;
            c = (l & (1 << p) - 1).toString(32),
            l >>= p,
            s -= p,
            ki = 1 << 32 - He(e) + s | n << s | l,
            Ki = c + t
        } else
            ki = 1 << c | n << s | l,
            Ki = t
    }
    function Ko(t) {
        t.return !== null && (sl(t, 1),
        N0(t, 1, 0))
    }
    function Jo(t) {
        for (; t === Ls; )
            Ls = cu[--ou],
            cu[ou] = null,
            or = cu[--ou],
            cu[ou] = null;
        for (; t === Rl; )
            Rl = bi[--xi],
            bi[xi] = null,
            Ki = bi[--xi],
            bi[xi] = null,
            ki = bi[--xi],
            bi[xi] = null
    }
    function U0(t, e) {
        bi[xi++] = ki,
        bi[xi++] = Ki,
        bi[xi++] = Rl,
        ki = e.id,
        Ki = e.overflow,
        Rl = t
    }
    var tn = null
      , se = null
      , qt = !1
      , Nl = null
      , Ti = !1
      , Fo = Error(a(519));
    function Ul(t) {
        var e = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw fr(Si(e, t)),
        Fo
    }
    function H0(t) {
        var e = t.stateNode
          , n = t.type
          , l = t.memoizedProps;
        switch (e[zt] = t,
        e[Dt] = l,
        n) {
        case "dialog":
            Bt("cancel", e),
            Bt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            Bt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Nr.length; n++)
                Bt(Nr[n], e);
            break;
        case "source":
            Bt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            Bt("error", e),
            Bt("load", e);
            break;
        case "details":
            Bt("toggle", e);
            break;
        case "input":
            Bt("invalid", e),
            Jd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            Bt("invalid", e);
            break;
        case "textarea":
            Bt("invalid", e),
            Wd(e, l.value, l.defaultValue, l.children)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || Pm(e.textContent, n) ? (l.popover != null && (Bt("beforetoggle", e),
        Bt("toggle", e)),
        l.onScroll != null && Bt("scroll", e),
        l.onScrollEnd != null && Bt("scrollend", e),
        l.onClick != null && (e.onclick = al),
        e = !0) : e = !1,
        e || Ul(t, !0)
    }
    function B0(t) {
        for (tn = t.return; tn; )
            switch (tn.tag) {
            case 5:
            case 31:
            case 13:
                Ti = !1;
                return;
            case 27:
            case 3:
                Ti = !0;
                return;
            default:
                tn = tn.return
            }
    }
    function fu(t) {
        if (t !== tn)
            return !1;
        if (!qt)
            return B0(t),
            qt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || ph(t.type, t.memoizedProps)),
        n = !n),
        n && se && Ul(t),
        B0(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(a(317));
            se = rg(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(a(317));
            se = rg(t)
        } else
            e === 27 ? (e = se,
            Jl(t.type) ? (t = yh,
            yh = null,
            se = t) : se = e) : se = tn ? zi(t.stateNode.nextSibling) : null;
        return !0
    }
    function xa() {
        se = tn = null,
        qt = !1
    }
    function Wo() {
        var t = Nl;
        return t !== null && (Un === null ? Un = t : Un.push.apply(Un, t),
        Nl = null),
        t
    }
    function fr(t) {
        Nl === null ? Nl = [t] : Nl.push(t)
    }
    var $o = z(null)
      , Ta = null
      , cl = null;
    function Hl(t, e, n) {
        P($o, e._currentValue),
        e._currentValue = n
    }
    function ol(t) {
        t._currentValue = $o.current,
        G($o)
    }
    function Po(t, e, n) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Io(t, e, n, l) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var c = s.dependencies;
            if (c !== null) {
                var p = s.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var v = c;
                    c = s;
                    for (var T = 0; T < e.length; T++)
                        if (v.context === e[T]) {
                            c.lanes |= n,
                            v = c.alternate,
                            v !== null && (v.lanes |= n),
                            Po(c.return, n, t),
                            l || (p = null);
                            break t
                        }
                    c = v.next
                }
            } else if (s.tag === 18) {
                if (p = s.return,
                p === null)
                    throw Error(a(341));
                p.lanes |= n,
                c = p.alternate,
                c !== null && (c.lanes |= n),
                Po(p, n, t),
                p = null
            } else
                p = s.child;
            if (p !== null)
                p.return = s;
            else
                for (p = s; p !== null; ) {
                    if (p === t) {
                        p = null;
                        break
                    }
                    if (s = p.sibling,
                    s !== null) {
                        s.return = p.return,
                        p = s;
                        break
                    }
                    p = p.return
                }
            s = p
        }
    }
    function hu(t, e, n, l) {
        t = null;
        for (var s = e, c = !1; s !== null; ) {
            if (!c) {
                if ((s.flags & 524288) !== 0)
                    c = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var p = s.alternate;
                if (p === null)
                    throw Error(a(387));
                if (p = p.memoizedProps,
                p !== null) {
                    var v = s.type;
                    kn(s.pendingProps.value, p.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === pt.current) {
                if (p = s.alternate,
                p === null)
                    throw Error(a(387));
                p.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Lr) : t = [Lr])
            }
            s = s.return
        }
        t !== null && Io(e, t, n, l),
        e.flags |= 262144
    }
    function js(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!kn(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Ea(t) {
        Ta = t,
        cl = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function en(t) {
        return Y0(Ta, t)
    }
    function qs(t, e) {
        return Ta === null && Ea(t),
        Y0(t, e)
    }
    function Y0(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        cl === null) {
            if (t === null)
                throw Error(a(308));
            cl = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            cl = cl.next = e;
        return n
    }
    var Wv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , $v = f.unstable_scheduleCallback
      , Pv = f.unstable_NormalPriority
      , Be = {
        $$typeof: q,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function tf() {
        return {
            controller: new Wv,
            data: new Map,
            refCount: 0
        }
    }
    function hr(t) {
        t.refCount--,
        t.refCount === 0 && $v(Pv, function() {
            t.controller.abort()
        })
    }
    var dr = null
      , ef = 0
      , du = 0
      , pu = null;
    function Iv(t, e) {
        if (dr === null) {
            var n = dr = [];
            ef = 0,
            du = ah(),
            pu = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return ef++,
        e.then(L0, L0),
        e
    }
    function L0() {
        if (--ef === 0 && dr !== null) {
            pu !== null && (pu.status = "fulfilled");
            var t = dr;
            dr = null,
            du = 0,
            pu = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function ty(t, e) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(e)
        }, function(s) {
            for (l.status = "rejected",
            l.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        l
    }
    var j0 = R.S;
    R.S = function(t, e) {
        xm = De(),
        typeof e == "object" && e !== null && typeof e.then == "function" && Iv(t, e),
        j0 !== null && j0(t, e)
    }
    ;
    var za = z(null);
    function nf() {
        var t = za.current;
        return t !== null ? t : ne.pooledCache
    }
    function Xs(t, e) {
        e === null ? P(za, za.current) : P(za, e.pool)
    }
    function q0() {
        var t = nf();
        return t === null ? null : {
            parent: Be._currentValue,
            pool: t
        }
    }
    var mu = Error(a(460))
      , lf = Error(a(474))
      , Gs = Error(a(542))
      , Vs = {
        then: function() {}
    };
    function X0(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function G0(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(al, al),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            Q0(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(al, al);
            else {
                if (t = ne,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(a(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                Q0(t),
                t
            }
            throw Da = e,
            mu
        }
    }
    function Aa(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Da = n,
            mu) : n
        }
    }
    var Da = null;
    function V0() {
        if (Da === null)
            throw Error(a(459));
        var t = Da;
        return Da = null,
        t
    }
    function Q0(t) {
        if (t === mu || t === Gs)
            throw Error(a(483))
    }
    var gu = null
      , pr = 0;
    function Qs(t) {
        var e = pr;
        return pr += 1,
        gu === null && (gu = []),
        G0(gu, t, e)
    }
    function mr(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Zs(t, e) {
        throw e.$$typeof === b ? Error(a(525)) : (t = Object.prototype.toString.call(e),
        Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Z0(t) {
        function e(O, A) {
            if (t) {
                var w = O.deletions;
                w === null ? (O.deletions = [A],
                O.flags |= 16) : w.push(A)
            }
        }
        function n(O, A) {
            if (!t)
                return null;
            for (; A !== null; )
                e(O, A),
                A = A.sibling;
            return null
        }
        function l(O) {
            for (var A = new Map; O !== null; )
                O.key !== null ? A.set(O.key, O) : A.set(O.index, O),
                O = O.sibling;
            return A
        }
        function s(O, A) {
            return O = rl(O, A),
            O.index = 0,
            O.sibling = null,
            O
        }
        function c(O, A, w) {
            return O.index = w,
            t ? (w = O.alternate,
            w !== null ? (w = w.index,
            w < A ? (O.flags |= 67108866,
            A) : w) : (O.flags |= 67108866,
            A)) : (O.flags |= 1048576,
            A)
        }
        function p(O) {
            return t && O.alternate === null && (O.flags |= 67108866),
            O
        }
        function v(O, A, w, k) {
            return A === null || A.tag !== 6 ? (A = Zo(w, O.mode, k),
            A.return = O,
            A) : (A = s(A, w),
            A.return = O,
            A)
        }
        function T(O, A, w, k) {
            var ot = w.type;
            return ot === x ? V(O, A, w.props.children, k, w.key) : A !== null && (A.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === $ && Aa(ot) === A.type) ? (A = s(A, w.props),
            mr(A, w),
            A.return = O,
            A) : (A = Ys(w.type, w.key, w.props, null, O.mode, k),
            mr(A, w),
            A.return = O,
            A)
        }
        function N(O, A, w, k) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== w.containerInfo || A.stateNode.implementation !== w.implementation ? (A = ko(w, O.mode, k),
            A.return = O,
            A) : (A = s(A, w.children || []),
            A.return = O,
            A)
        }
        function V(O, A, w, k, ot) {
            return A === null || A.tag !== 7 ? (A = ba(w, O.mode, k, ot),
            A.return = O,
            A) : (A = s(A, w),
            A.return = O,
            A)
        }
        function K(O, A, w) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = Zo("" + A, O.mode, w),
                A.return = O,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case y:
                    return w = Ys(A.type, A.key, A.props, null, O.mode, w),
                    mr(w, A),
                    w.return = O,
                    w;
                case E:
                    return A = ko(A, O.mode, w),
                    A.return = O,
                    A;
                case $:
                    return A = Aa(A),
                    K(O, A, w)
                }
                if (_t(A) || tt(A))
                    return A = ba(A, O.mode, w, null),
                    A.return = O,
                    A;
                if (typeof A.then == "function")
                    return K(O, Qs(A), w);
                if (A.$$typeof === q)
                    return K(O, qs(O, A), w);
                Zs(O, A)
            }
            return null
        }
        function U(O, A, w, k) {
            var ot = A !== null ? A.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return ot !== null ? null : v(O, A, "" + w, k);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case y:
                    return w.key === ot ? T(O, A, w, k) : null;
                case E:
                    return w.key === ot ? N(O, A, w, k) : null;
                case $:
                    return w = Aa(w),
                    U(O, A, w, k)
                }
                if (_t(w) || tt(w))
                    return ot !== null ? null : V(O, A, w, k, null);
                if (typeof w.then == "function")
                    return U(O, A, Qs(w), k);
                if (w.$$typeof === q)
                    return U(O, A, qs(O, w), k);
                Zs(O, w)
            }
            return null
        }
        function B(O, A, w, k, ot) {
            if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
                return O = O.get(w) || null,
                v(A, O, "" + k, ot);
            if (typeof k == "object" && k !== null) {
                switch (k.$$typeof) {
                case y:
                    return O = O.get(k.key === null ? w : k.key) || null,
                    T(A, O, k, ot);
                case E:
                    return O = O.get(k.key === null ? w : k.key) || null,
                    N(A, O, k, ot);
                case $:
                    return k = Aa(k),
                    B(O, A, w, k, ot)
                }
                if (_t(k) || tt(k))
                    return O = O.get(w) || null,
                    V(A, O, k, ot, null);
                if (typeof k.then == "function")
                    return B(O, A, w, Qs(k), ot);
                if (k.$$typeof === q)
                    return B(O, A, w, qs(A, k), ot);
                Zs(A, k)
            }
            return null
        }
        function it(O, A, w, k) {
            for (var ot = null, Qt = null, at = A, Et = A = 0, jt = null; at !== null && Et < w.length; Et++) {
                at.index > Et ? (jt = at,
                at = null) : jt = at.sibling;
                var Zt = U(O, at, w[Et], k);
                if (Zt === null) {
                    at === null && (at = jt);
                    break
                }
                t && at && Zt.alternate === null && e(O, at),
                A = c(Zt, A, Et),
                Qt === null ? ot = Zt : Qt.sibling = Zt,
                Qt = Zt,
                at = jt
            }
            if (Et === w.length)
                return n(O, at),
                qt && sl(O, Et),
                ot;
            if (at === null) {
                for (; Et < w.length; Et++)
                    at = K(O, w[Et], k),
                    at !== null && (A = c(at, A, Et),
                    Qt === null ? ot = at : Qt.sibling = at,
                    Qt = at);
                return qt && sl(O, Et),
                ot
            }
            for (at = l(at); Et < w.length; Et++)
                jt = B(at, O, Et, w[Et], k),
                jt !== null && (t && jt.alternate !== null && at.delete(jt.key === null ? Et : jt.key),
                A = c(jt, A, Et),
                Qt === null ? ot = jt : Qt.sibling = jt,
                Qt = jt);
            return t && at.forEach(function(Il) {
                return e(O, Il)
            }),
            qt && sl(O, Et),
            ot
        }
        function mt(O, A, w, k) {
            if (w == null)
                throw Error(a(151));
            for (var ot = null, Qt = null, at = A, Et = A = 0, jt = null, Zt = w.next(); at !== null && !Zt.done; Et++,
            Zt = w.next()) {
                at.index > Et ? (jt = at,
                at = null) : jt = at.sibling;
                var Il = U(O, at, Zt.value, k);
                if (Il === null) {
                    at === null && (at = jt);
                    break
                }
                t && at && Il.alternate === null && e(O, at),
                A = c(Il, A, Et),
                Qt === null ? ot = Il : Qt.sibling = Il,
                Qt = Il,
                at = jt
            }
            if (Zt.done)
                return n(O, at),
                qt && sl(O, Et),
                ot;
            if (at === null) {
                for (; !Zt.done; Et++,
                Zt = w.next())
                    Zt = K(O, Zt.value, k),
                    Zt !== null && (A = c(Zt, A, Et),
                    Qt === null ? ot = Zt : Qt.sibling = Zt,
                    Qt = Zt);
                return qt && sl(O, Et),
                ot
            }
            for (at = l(at); !Zt.done; Et++,
            Zt = w.next())
                Zt = B(at, O, Et, Zt.value, k),
                Zt !== null && (t && Zt.alternate !== null && at.delete(Zt.key === null ? Et : Zt.key),
                A = c(Zt, A, Et),
                Qt === null ? ot = Zt : Qt.sibling = Zt,
                Qt = Zt);
            return t && at.forEach(function(fS) {
                return e(O, fS)
            }),
            qt && sl(O, Et),
            ot
        }
        function ee(O, A, w, k) {
            if (typeof w == "object" && w !== null && w.type === x && w.key === null && (w = w.props.children),
            typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case y:
                    t: {
                        for (var ot = w.key; A !== null; ) {
                            if (A.key === ot) {
                                if (ot = w.type,
                                ot === x) {
                                    if (A.tag === 7) {
                                        n(O, A.sibling),
                                        k = s(A, w.props.children),
                                        k.return = O,
                                        O = k;
                                        break t
                                    }
                                } else if (A.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === $ && Aa(ot) === A.type) {
                                    n(O, A.sibling),
                                    k = s(A, w.props),
                                    mr(k, w),
                                    k.return = O,
                                    O = k;
                                    break t
                                }
                                n(O, A);
                                break
                            } else
                                e(O, A);
                            A = A.sibling
                        }
                        w.type === x ? (k = ba(w.props.children, O.mode, k, w.key),
                        k.return = O,
                        O = k) : (k = Ys(w.type, w.key, w.props, null, O.mode, k),
                        mr(k, w),
                        k.return = O,
                        O = k)
                    }
                    return p(O);
                case E:
                    t: {
                        for (ot = w.key; A !== null; ) {
                            if (A.key === ot)
                                if (A.tag === 4 && A.stateNode.containerInfo === w.containerInfo && A.stateNode.implementation === w.implementation) {
                                    n(O, A.sibling),
                                    k = s(A, w.children || []),
                                    k.return = O,
                                    O = k;
                                    break t
                                } else {
                                    n(O, A);
                                    break
                                }
                            else
                                e(O, A);
                            A = A.sibling
                        }
                        k = ko(w, O.mode, k),
                        k.return = O,
                        O = k
                    }
                    return p(O);
                case $:
                    return w = Aa(w),
                    ee(O, A, w, k)
                }
                if (_t(w))
                    return it(O, A, w, k);
                if (tt(w)) {
                    if (ot = tt(w),
                    typeof ot != "function")
                        throw Error(a(150));
                    return w = ot.call(w),
                    mt(O, A, w, k)
                }
                if (typeof w.then == "function")
                    return ee(O, A, Qs(w), k);
                if (w.$$typeof === q)
                    return ee(O, A, qs(O, w), k);
                Zs(O, w)
            }
            return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w,
            A !== null && A.tag === 6 ? (n(O, A.sibling),
            k = s(A, w),
            k.return = O,
            O = k) : (n(O, A),
            k = Zo(w, O.mode, k),
            k.return = O,
            O = k),
            p(O)) : n(O, A)
        }
        return function(O, A, w, k) {
            try {
                pr = 0;
                var ot = ee(O, A, w, k);
                return gu = null,
                ot
            } catch (at) {
                if (at === mu || at === Gs)
                    throw at;
                var Qt = Kn(29, at, null, O.mode);
                return Qt.lanes = k,
                Qt.return = O,
                Qt
            }
        }
    }
    var Oa = Z0(!0)
      , k0 = Z0(!1)
      , Bl = !1;
    function af(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function uf(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Yl(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ll(t, e, n) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Kt & 2) !== 0) {
            var s = l.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            l.pending = e,
            e = Bs(t),
            M0(t, null, n),
            e
        }
        return Hs(t, l, e, n),
        Bs(t)
    }
    function gr(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            yt(t, n)
        }
    }
    function rf(t, e) {
        var n = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var s = null
              , c = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var p = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? s = c = p : c = c.next = p,
                    n = n.next
                } while (n !== null);
                c === null ? s = c = e : c = c.next = e
            } else
                s = c = e;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: c,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var sf = !1;
    function _r() {
        if (sf) {
            var t = pu;
            if (t !== null)
                throw t
        }
    }
    function vr(t, e, n, l) {
        sf = !1;
        var s = t.updateQueue;
        Bl = !1;
        var c = s.firstBaseUpdate
          , p = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var T = v
              , N = T.next;
            T.next = null,
            p === null ? c = N : p.next = N,
            p = T;
            var V = t.alternate;
            V !== null && (V = V.updateQueue,
            v = V.lastBaseUpdate,
            v !== p && (v === null ? V.firstBaseUpdate = N : v.next = N,
            V.lastBaseUpdate = T))
        }
        if (c !== null) {
            var K = s.baseState;
            p = 0,
            V = N = T = null,
            v = c;
            do {
                var U = v.lane & -536870913
                  , B = U !== v.lane;
                if (B ? (Lt & U) === U : (l & U) === U) {
                    U !== 0 && U === du && (sf = !0),
                    V !== null && (V = V.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var it = t
                          , mt = v;
                        U = e;
                        var ee = n;
                        switch (mt.tag) {
                        case 1:
                            if (it = mt.payload,
                            typeof it == "function") {
                                K = it.call(ee, K, U);
                                break t
                            }
                            K = it;
                            break t;
                        case 3:
                            it.flags = it.flags & -65537 | 128;
                        case 0:
                            if (it = mt.payload,
                            U = typeof it == "function" ? it.call(ee, K, U) : it,
                            U == null)
                                break t;
                            K = S({}, K, U);
                            break t;
                        case 2:
                            Bl = !0
                        }
                    }
                    U = v.callback,
                    U !== null && (t.flags |= 64,
                    B && (t.flags |= 8192),
                    B = s.callbacks,
                    B === null ? s.callbacks = [U] : B.push(U))
                } else
                    B = {
                        lane: U,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    V === null ? (N = V = B,
                    T = K) : V = V.next = B,
                    p |= U;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    B = v,
                    v = B.next,
                    B.next = null,
                    s.lastBaseUpdate = B,
                    s.shared.pending = null
                }
            } while (!0);
            V === null && (T = K),
            s.baseState = T,
            s.firstBaseUpdate = N,
            s.lastBaseUpdate = V,
            c === null && (s.shared.lanes = 0),
            Vl |= p,
            t.lanes = p,
            t.memoizedState = K
        }
    }
    function K0(t, e) {
        if (typeof t != "function")
            throw Error(a(191, t));
        t.call(e)
    }
    function J0(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                K0(n[t], e)
    }
    var _u = z(null)
      , ks = z(0);
    function F0(t, e) {
        t = yl,
        P(ks, t),
        P(_u, e),
        yl = t | e.baseLanes
    }
    function cf() {
        P(ks, yl),
        P(_u, _u.current)
    }
    function of() {
        yl = ks.current,
        G(_u),
        G(ks)
    }
    var Jn = z(null)
      , Ei = null;
    function jl(t) {
        var e = t.alternate;
        P(Me, Me.current & 1),
        P(Jn, t),
        Ei === null && (e === null || _u.current !== null || e.memoizedState !== null) && (Ei = t)
    }
    function ff(t) {
        P(Me, Me.current),
        P(Jn, t),
        Ei === null && (Ei = t)
    }
    function W0(t) {
        t.tag === 22 ? (P(Me, Me.current),
        P(Jn, t),
        Ei === null && (Ei = t)) : ql()
    }
    function ql() {
        P(Me, Me.current),
        P(Jn, Jn.current)
    }
    function Fn(t) {
        G(Jn),
        Ei === t && (Ei = null),
        G(Me)
    }
    var Me = z(0);
    function Ks(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || _h(n) || vh(n)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var fl = 0
      , xt = null
      , It = null
      , Ye = null
      , Js = !1
      , vu = !1
      , Ma = !1
      , Fs = 0
      , yr = 0
      , yu = null
      , ey = 0;
    function Ee() {
        throw Error(a(321))
    }
    function hf(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!kn(t[n], e[n]))
                return !1;
        return !0
    }
    function df(t, e, n, l, s, c) {
        return fl = c,
        xt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        R.H = t === null || t.memoizedState === null ? Np : Of,
        Ma = !1,
        c = n(l, s),
        Ma = !1,
        vu && (c = P0(e, n, l, s)),
        $0(t),
        c
    }
    function $0(t) {
        R.H = xr;
        var e = It !== null && It.next !== null;
        if (fl = 0,
        Ye = It = xt = null,
        Js = !1,
        yr = 0,
        yu = null,
        e)
            throw Error(a(300));
        t === null || Le || (t = t.dependencies,
        t !== null && js(t) && (Le = !0))
    }
    function P0(t, e, n, l) {
        xt = t;
        var s = 0;
        do {
            if (vu && (yu = null),
            yr = 0,
            vu = !1,
            25 <= s)
                throw Error(a(301));
            if (s += 1,
            Ye = It = null,
            t.updateQueue != null) {
                var c = t.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            R.H = Up,
            c = e(n, l)
        } while (vu);
        return c
    }
    function ny() {
        var t = R.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Sr(e) : e,
        t = t.useState()[0],
        (It !== null ? It.memoizedState : null) !== t && (xt.flags |= 1024),
        e
    }
    function pf() {
        var t = Fs !== 0;
        return Fs = 0,
        t
    }
    function mf(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function gf(t) {
        if (Js) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Js = !1
        }
        fl = 0,
        Ye = It = xt = null,
        vu = !1,
        yr = Fs = 0,
        yu = null
    }
    function Sn() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ye === null ? xt.memoizedState = Ye = t : Ye = Ye.next = t,
        Ye
    }
    function Ce() {
        if (It === null) {
            var t = xt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = It.next;
        var e = Ye === null ? xt.memoizedState : Ye.next;
        if (e !== null)
            Ye = e,
            It = t;
        else {
            if (t === null)
                throw xt.alternate === null ? Error(a(467)) : Error(a(310));
            It = t,
            t = {
                memoizedState: It.memoizedState,
                baseState: It.baseState,
                baseQueue: It.baseQueue,
                queue: It.queue,
                next: null
            },
            Ye === null ? xt.memoizedState = Ye = t : Ye = Ye.next = t
        }
        return Ye
    }
    function Ws() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Sr(t) {
        var e = yr;
        return yr += 1,
        yu === null && (yu = []),
        t = G0(yu, t, e),
        e = xt,
        (Ye === null ? e.memoizedState : Ye.next) === null && (e = e.alternate,
        R.H = e === null || e.memoizedState === null ? Np : Of),
        t
    }
    function $s(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Sr(t);
            if (t.$$typeof === q)
                return en(t)
        }
        throw Error(a(438, String(t)))
    }
    function _f(t) {
        var e = null
          , n = xt.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var l = xt.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = Ws(),
        xt.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                n[l] = W;
        return e.index++,
        n
    }
    function hl(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Ps(t) {
        var e = Ce();
        return vf(e, It, t)
    }
    function vf(t, e, n) {
        var l = t.queue;
        if (l === null)
            throw Error(a(311));
        l.lastRenderedReducer = n;
        var s = t.baseQueue
          , c = l.pending;
        if (c !== null) {
            if (s !== null) {
                var p = s.next;
                s.next = c.next,
                c.next = p
            }
            e.baseQueue = s = c,
            l.pending = null
        }
        if (c = t.baseState,
        s === null)
            t.memoizedState = c;
        else {
            e = s.next;
            var v = p = null
              , T = null
              , N = e
              , V = !1;
            do {
                var K = N.lane & -536870913;
                if (K !== N.lane ? (Lt & K) === K : (fl & K) === K) {
                    var U = N.revertLane;
                    if (U === 0)
                        T !== null && (T = T.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }),
                        K === du && (V = !0);
                    else if ((fl & U) === U) {
                        N = N.next,
                        U === du && (V = !0);
                        continue
                    } else
                        K = {
                            lane: 0,
                            revertLane: N.revertLane,
                            gesture: null,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        },
                        T === null ? (v = T = K,
                        p = c) : T = T.next = K,
                        xt.lanes |= U,
                        Vl |= U;
                    K = N.action,
                    Ma && n(c, K),
                    c = N.hasEagerState ? N.eagerState : n(c, K)
                } else
                    U = {
                        lane: K,
                        revertLane: N.revertLane,
                        gesture: N.gesture,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    },
                    T === null ? (v = T = U,
                    p = c) : T = T.next = U,
                    xt.lanes |= K,
                    Vl |= K;
                N = N.next
            } while (N !== null && N !== e);
            if (T === null ? p = c : T.next = v,
            !kn(c, t.memoizedState) && (Le = !0,
            V && (n = pu,
            n !== null)))
                throw n;
            t.memoizedState = c,
            t.baseState = p,
            t.baseQueue = T,
            l.lastRenderedState = c
        }
        return s === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function yf(t) {
        var e = Ce()
          , n = e.queue;
        if (n === null)
            throw Error(a(311));
        n.lastRenderedReducer = t;
        var l = n.dispatch
          , s = n.pending
          , c = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var p = s = s.next;
            do
                c = t(c, p.action),
                p = p.next;
            while (p !== s);
            kn(c, e.memoizedState) || (Le = !0),
            e.memoizedState = c,
            e.baseQueue === null && (e.baseState = c),
            n.lastRenderedState = c
        }
        return [c, l]
    }
    function I0(t, e, n) {
        var l = xt
          , s = Ce()
          , c = qt;
        if (c) {
            if (n === void 0)
                throw Error(a(407));
            n = n()
        } else
            n = e();
        var p = !kn((It || s).memoizedState, n);
        if (p && (s.memoizedState = n,
        Le = !0),
        s = s.queue,
        xf(np.bind(null, l, s, t), [t]),
        s.getSnapshot !== e || p || Ye !== null && Ye.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Su(9, {
                destroy: void 0
            }, ep.bind(null, l, s, n, e), null),
            ne === null)
                throw Error(a(349));
            c || (fl & 127) !== 0 || tp(l, e, n)
        }
        return n
    }
    function tp(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = xt.updateQueue,
        e === null ? (e = Ws(),
        xt.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function ep(t, e, n, l) {
        e.value = n,
        e.getSnapshot = l,
        ip(e) && lp(t)
    }
    function np(t, e, n) {
        return n(function() {
            ip(e) && lp(t)
        })
    }
    function ip(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !kn(t, n)
        } catch {
            return !0
        }
    }
    function lp(t) {
        var e = Sa(t, 2);
        e !== null && Hn(e, t, 2)
    }
    function Sf(t) {
        var e = Sn();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            Ma) {
                _n(!0);
                try {
                    n()
                } finally {
                    _n(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hl,
            lastRenderedState: t
        },
        e
    }
    function ap(t, e, n, l) {
        return t.baseState = n,
        vf(t, It, typeof l == "function" ? l : hl)
    }
    function iy(t, e, n, l, s) {
        if (ec(t))
            throw Error(a(485));
        if (t = e.action,
        t !== null) {
            var c = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(p) {
                    c.listeners.push(p)
                }
            };
            R.T !== null ? n(!0) : c.isTransition = !1,
            l(c),
            n = e.pending,
            n === null ? (c.next = e.pending = c,
            up(e, c)) : (c.next = n.next,
            e.pending = n.next = c)
        }
    }
    function up(t, e) {
        var n = e.action
          , l = e.payload
          , s = t.state;
        if (e.isTransition) {
            var c = R.T
              , p = {};
            R.T = p;
            try {
                var v = n(s, l)
                  , T = R.S;
                T !== null && T(p, v),
                rp(t, e, v)
            } catch (N) {
                bf(t, e, N)
            } finally {
                c !== null && p.types !== null && (c.types = p.types),
                R.T = c
            }
        } else
            try {
                c = n(s, l),
                rp(t, e, c)
            } catch (N) {
                bf(t, e, N)
            }
    }
    function rp(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            sp(t, e, l)
        }, function(l) {
            return bf(t, e, l)
        }) : sp(t, e, n)
    }
    function sp(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        cp(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        up(t, n)))
    }
    function bf(t, e, n) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = n,
                cp(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function cp(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function op(t, e) {
        return e
    }
    function fp(t, e) {
        if (qt) {
            var n = ne.formState;
            if (n !== null) {
                t: {
                    var l = xt;
                    if (qt) {
                        if (se) {
                            e: {
                                for (var s = se, c = Ti; s.nodeType !== 8; ) {
                                    if (!c) {
                                        s = null;
                                        break e
                                    }
                                    if (s = zi(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                c = s.data,
                                s = c === "F!" || c === "F" ? s : null
                            }
                            if (s) {
                                se = zi(s.nextSibling),
                                l = s.data === "F!";
                                break t
                            }
                        }
                        Ul(l)
                    }
                    l = !1
                }
                l && (e = n[0])
            }
        }
        return n = Sn(),
        n.memoizedState = n.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: op,
            lastRenderedState: e
        },
        n.queue = l,
        n = Cp.bind(null, xt, l),
        l.dispatch = n,
        l = Sf(!1),
        c = Df.bind(null, xt, !1, l.queue),
        l = Sn(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = s,
        n = iy.bind(null, xt, s, c, n),
        s.dispatch = n,
        l.memoizedState = t,
        [e, n, !1]
    }
    function hp(t) {
        var e = Ce();
        return dp(e, It, t)
    }
    function dp(t, e, n) {
        if (e = vf(t, e, op)[0],
        t = Ps(hl)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = Sr(e)
            } catch (p) {
                throw p === mu ? Gs : p
            }
        else
            l = e;
        e = Ce();
        var s = e.queue
          , c = s.dispatch;
        return n !== e.memoizedState && (xt.flags |= 2048,
        Su(9, {
            destroy: void 0
        }, ly.bind(null, s, n), null)),
        [l, c, t]
    }
    function ly(t, e) {
        t.action = e
    }
    function pp(t) {
        var e = Ce()
          , n = It;
        if (n !== null)
            return dp(e, n, t);
        Ce(),
        e = e.memoizedState,
        n = Ce();
        var l = n.queue.dispatch;
        return n.memoizedState = t,
        [e, l, !1]
    }
    function Su(t, e, n, l) {
        return t = {
            tag: t,
            create: n,
            deps: l,
            inst: e,
            next: null
        },
        e = xt.updateQueue,
        e === null && (e = Ws(),
        xt.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (l = n.next,
        n.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function mp() {
        return Ce().memoizedState
    }
    function Is(t, e, n, l) {
        var s = Sn();
        xt.flags |= t,
        s.memoizedState = Su(1 | e, {
            destroy: void 0
        }, n, l === void 0 ? null : l)
    }
    function tc(t, e, n, l) {
        var s = Ce();
        l = l === void 0 ? null : l;
        var c = s.memoizedState.inst;
        It !== null && l !== null && hf(l, It.memoizedState.deps) ? s.memoizedState = Su(e, c, n, l) : (xt.flags |= t,
        s.memoizedState = Su(1 | e, c, n, l))
    }
    function gp(t, e) {
        Is(8390656, 8, t, e)
    }
    function xf(t, e) {
        tc(2048, 8, t, e)
    }
    function ay(t) {
        xt.flags |= 4;
        var e = xt.updateQueue;
        if (e === null)
            e = Ws(),
            xt.updateQueue = e,
            e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }
    function _p(t) {
        var e = Ce().memoizedState;
        return ay({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((Kt & 2) !== 0)
                throw Error(a(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function vp(t, e) {
        return tc(4, 2, t, e)
    }
    function yp(t, e) {
        return tc(4, 4, t, e)
    }
    function Sp(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function bp(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        tc(4, 4, Sp.bind(null, e, t), n)
    }
    function Tf() {}
    function xp(t, e) {
        var n = Ce();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        return e !== null && hf(e, l[1]) ? l[0] : (n.memoizedState = [t, e],
        t)
    }
    function Tp(t, e) {
        var n = Ce();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        if (e !== null && hf(e, l[1]))
            return l[0];
        if (l = t(),
        Ma) {
            _n(!0);
            try {
                t()
            } finally {
                _n(!1)
            }
        }
        return n.memoizedState = [l, e],
        l
    }
    function Ef(t, e, n) {
        return n === void 0 || (fl & 1073741824) !== 0 && (Lt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Em(),
        xt.lanes |= t,
        Vl |= t,
        n)
    }
    function Ep(t, e, n, l) {
        return kn(n, e) ? n : _u.current !== null ? (t = Ef(t, n, l),
        kn(t, e) || (Le = !0),
        t) : (fl & 42) === 0 || (fl & 1073741824) !== 0 && (Lt & 261930) === 0 ? (Le = !0,
        t.memoizedState = n) : (t = Em(),
        xt.lanes |= t,
        Vl |= t,
        e)
    }
    function zp(t, e, n, l, s) {
        var c = Q.p;
        Q.p = c !== 0 && 8 > c ? c : 8;
        var p = R.T
          , v = {};
        R.T = v,
        Df(t, !1, e, n);
        try {
            var T = s()
              , N = R.S;
            if (N !== null && N(v, T),
            T !== null && typeof T == "object" && typeof T.then == "function") {
                var V = ty(T, l);
                br(t, e, V, Pn(t))
            } else
                br(t, e, l, Pn(t))
        } catch (K) {
            br(t, e, {
                then: function() {},
                status: "rejected",
                reason: K
            }, Pn())
        } finally {
            Q.p = c,
            p !== null && v.types !== null && (p.types = v.types),
            R.T = p
        }
    }
    function uy() {}
    function zf(t, e, n, l) {
        if (t.tag !== 5)
            throw Error(a(476));
        var s = Ap(t).queue;
        zp(t, s, e, et, n === null ? uy : function() {
            return Dp(t),
            n(l)
        }
        )
    }
    function Ap(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: et,
            baseState: et,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hl,
                lastRenderedState: et
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hl,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Dp(t) {
        var e = Ap(t);
        e.next === null && (e = t.alternate.memoizedState),
        br(t, e.next.queue, {}, Pn())
    }
    function Af() {
        return en(Lr)
    }
    function Op() {
        return Ce().memoizedState
    }
    function Mp() {
        return Ce().memoizedState
    }
    function ry(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = Pn();
                t = Yl(n);
                var l = Ll(e, t, n);
                l !== null && (Hn(l, e, n),
                gr(l, e, n)),
                e = {
                    cache: tf()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function sy(t, e, n) {
        var l = Pn();
        n = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ec(t) ? wp(e, n) : (n = Vo(t, e, n, l),
        n !== null && (Hn(n, t, l),
        Rp(n, e, l)))
    }
    function Cp(t, e, n) {
        var l = Pn();
        br(t, e, n, l)
    }
    function br(t, e, n, l) {
        var s = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ec(t))
            wp(e, s);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer,
            c !== null))
                try {
                    var p = e.lastRenderedState
                      , v = c(p, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    kn(v, p))
                        return Hs(t, e, s, 0),
                        ne === null && Us(),
                        !1
                } catch {}
            if (n = Vo(t, e, s, l),
            n !== null)
                return Hn(n, t, l),
                Rp(n, e, l),
                !0
        }
        return !1
    }
    function Df(t, e, n, l) {
        if (l = {
            lane: 2,
            revertLane: ah(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ec(t)) {
            if (e)
                throw Error(a(479))
        } else
            e = Vo(t, n, l, 2),
            e !== null && Hn(e, t, 2)
    }
    function ec(t) {
        var e = t.alternate;
        return t === xt || e !== null && e === xt
    }
    function wp(t, e) {
        vu = Js = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Rp(t, e, n) {
        if ((n & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            yt(t, n)
        }
    }
    var xr = {
        readContext: en,
        use: $s,
        useCallback: Ee,
        useContext: Ee,
        useEffect: Ee,
        useImperativeHandle: Ee,
        useLayoutEffect: Ee,
        useInsertionEffect: Ee,
        useMemo: Ee,
        useReducer: Ee,
        useRef: Ee,
        useState: Ee,
        useDebugValue: Ee,
        useDeferredValue: Ee,
        useTransition: Ee,
        useSyncExternalStore: Ee,
        useId: Ee,
        useHostTransitionStatus: Ee,
        useFormState: Ee,
        useActionState: Ee,
        useOptimistic: Ee,
        useMemoCache: Ee,
        useCacheRefresh: Ee
    };
    xr.useEffectEvent = Ee;
    var Np = {
        readContext: en,
        use: $s,
        useCallback: function(t, e) {
            return Sn().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: en,
        useEffect: gp,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            Is(4194308, 4, Sp.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return Is(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            Is(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = Sn();
            e = e === void 0 ? null : e;
            var l = t();
            if (Ma) {
                _n(!0);
                try {
                    t()
                } finally {
                    _n(!1)
                }
            }
            return n.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, n) {
            var l = Sn();
            if (n !== void 0) {
                var s = n(e);
                if (Ma) {
                    _n(!0);
                    try {
                        n(e)
                    } finally {
                        _n(!1)
                    }
                }
            } else
                s = e;
            return l.memoizedState = l.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            l.queue = t,
            t = t.dispatch = sy.bind(null, xt, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = Sn();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Sf(t);
            var e = t.queue
              , n = Cp.bind(null, xt, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: Tf,
        useDeferredValue: function(t, e) {
            var n = Sn();
            return Ef(n, t, e)
        },
        useTransition: function() {
            var t = Sf(!1);
            return t = zp.bind(null, xt, t.queue, !0, !1),
            Sn().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var l = xt
              , s = Sn();
            if (qt) {
                if (n === void 0)
                    throw Error(a(407));
                n = n()
            } else {
                if (n = e(),
                ne === null)
                    throw Error(a(349));
                (Lt & 127) !== 0 || tp(l, e, n)
            }
            s.memoizedState = n;
            var c = {
                value: n,
                getSnapshot: e
            };
            return s.queue = c,
            gp(np.bind(null, l, c, t), [t]),
            l.flags |= 2048,
            Su(9, {
                destroy: void 0
            }, ep.bind(null, l, c, n, e), null),
            n
        },
        useId: function() {
            var t = Sn()
              , e = ne.identifierPrefix;
            if (qt) {
                var n = Ki
                  , l = ki;
                n = (l & ~(1 << 32 - He(l) - 1)).toString(32) + n,
                e = "_" + e + "R_" + n,
                n = Fs++,
                0 < n && (e += "H" + n.toString(32)),
                e += "_"
            } else
                n = ey++,
                e = "_" + e + "r_" + n.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Af,
        useFormState: fp,
        useActionState: fp,
        useOptimistic: function(t) {
            var e = Sn();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = Df.bind(null, xt, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: _f,
        useCacheRefresh: function() {
            return Sn().memoizedState = ry.bind(null, xt)
        },
        useEffectEvent: function(t) {
            var e = Sn()
              , n = {
                impl: t
            };
            return e.memoizedState = n,
            function() {
                if ((Kt & 2) !== 0)
                    throw Error(a(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Of = {
        readContext: en,
        use: $s,
        useCallback: xp,
        useContext: en,
        useEffect: xf,
        useImperativeHandle: bp,
        useInsertionEffect: vp,
        useLayoutEffect: yp,
        useMemo: Tp,
        useReducer: Ps,
        useRef: mp,
        useState: function() {
            return Ps(hl)
        },
        useDebugValue: Tf,
        useDeferredValue: function(t, e) {
            var n = Ce();
            return Ep(n, It.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Ps(hl)[0]
              , e = Ce().memoizedState;
            return [typeof t == "boolean" ? t : Sr(t), e]
        },
        useSyncExternalStore: I0,
        useId: Op,
        useHostTransitionStatus: Af,
        useFormState: hp,
        useActionState: hp,
        useOptimistic: function(t, e) {
            var n = Ce();
            return ap(n, It, t, e)
        },
        useMemoCache: _f,
        useCacheRefresh: Mp
    };
    Of.useEffectEvent = _p;
    var Up = {
        readContext: en,
        use: $s,
        useCallback: xp,
        useContext: en,
        useEffect: xf,
        useImperativeHandle: bp,
        useInsertionEffect: vp,
        useLayoutEffect: yp,
        useMemo: Tp,
        useReducer: yf,
        useRef: mp,
        useState: function() {
            return yf(hl)
        },
        useDebugValue: Tf,
        useDeferredValue: function(t, e) {
            var n = Ce();
            return It === null ? Ef(n, t, e) : Ep(n, It.memoizedState, t, e)
        },
        useTransition: function() {
            var t = yf(hl)[0]
              , e = Ce().memoizedState;
            return [typeof t == "boolean" ? t : Sr(t), e]
        },
        useSyncExternalStore: I0,
        useId: Op,
        useHostTransitionStatus: Af,
        useFormState: pp,
        useActionState: pp,
        useOptimistic: function(t, e) {
            var n = Ce();
            return It !== null ? ap(n, It, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: _f,
        useCacheRefresh: Mp
    };
    Up.useEffectEvent = _p;
    function Mf(t, e, n, l) {
        e = t.memoizedState,
        n = n(l, e),
        n = n == null ? e : S({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var Cf = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var l = Pn()
              , s = Yl(l);
            s.payload = e,
            n != null && (s.callback = n),
            e = Ll(t, s, l),
            e !== null && (Hn(e, t, l),
            gr(e, t, l))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var l = Pn()
              , s = Yl(l);
            s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = Ll(t, s, l),
            e !== null && (Hn(e, t, l),
            gr(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = Pn()
              , l = Yl(n);
            l.tag = 2,
            e != null && (l.callback = e),
            e = Ll(t, l, n),
            e !== null && (Hn(e, t, n),
            gr(e, t, n))
        }
    };
    function Hp(t, e, n, l, s, c, p) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, c, p) : e.prototype && e.prototype.isPureReactComponent ? !sr(n, l) || !sr(s, c) : !0
    }
    function Bp(t, e, n, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l),
        e.state !== t && Cf.enqueueReplaceState(e, e.state, null)
    }
    function Ca(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var l in e)
                l !== "ref" && (n[l] = e[l])
        }
        if (t = t.defaultProps) {
            n === e && (n = S({}, n));
            for (var s in t)
                n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }
    function Yp(t) {
        Ns(t)
    }
    function Lp(t) {
        console.error(t)
    }
    function jp(t) {
        Ns(t)
    }
    function nc(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function qp(t, e, n) {
        try {
            var l = t.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function wf(t, e, n) {
        return n = Yl(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            nc(t, e)
        }
        ,
        n
    }
    function Xp(t) {
        return t = Yl(t),
        t.tag = 3,
        t
    }
    function Gp(t, e, n, l) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var c = l.value;
            t.payload = function() {
                return s(c)
            }
            ,
            t.callback = function() {
                qp(e, n, l)
            }
        }
        var p = n.stateNode;
        p !== null && typeof p.componentDidCatch == "function" && (t.callback = function() {
            qp(e, n, l),
            typeof s != "function" && (Ql === null ? Ql = new Set([this]) : Ql.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function cy(t, e, n, l, s) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = n.alternate,
            e !== null && hu(e, n, s, !0),
            n = Jn.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ei === null ? pc() : n.alternate === null && ze === 0 && (ze = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    l === Vs ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([l]) : e.add(l),
                    nh(t, l, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === Vs ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([l]) : n.add(l)),
                    nh(t, l, s)),
                    !1
                }
                throw Error(a(435, n.tag))
            }
            return nh(t, l, s),
            pc(),
            !1
        }
        if (qt)
            return e = Jn.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            l !== Fo && (t = Error(a(422), {
                cause: l
            }),
            fr(Si(t, n)))) : (l !== Fo && (e = Error(a(423), {
                cause: l
            }),
            fr(Si(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            l = Si(l, n),
            s = wf(t.stateNode, l, s),
            rf(t, s),
            ze !== 4 && (ze = 2)),
            !1;
        var c = Error(a(520), {
            cause: l
        });
        if (c = Si(c, n),
        Cr === null ? Cr = [c] : Cr.push(c),
        ze !== 4 && (ze = 2),
        e === null)
            return !0;
        l = Si(l, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = s & -s,
                n.lanes |= t,
                t = wf(n.stateNode, l, t),
                rf(n, t),
                !1;
            case 1:
                if (e = n.type,
                c = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Ql === null || !Ql.has(c))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = Xp(s),
                    Gp(s, t, n, l),
                    rf(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Rf = Error(a(461))
      , Le = !1;
    function nn(t, e, n, l) {
        e.child = t === null ? k0(e, null, n, l) : Oa(e, t.child, n, l)
    }
    function Vp(t, e, n, l, s) {
        n = n.render;
        var c = e.ref;
        if ("ref"in l) {
            var p = {};
            for (var v in l)
                v !== "ref" && (p[v] = l[v])
        } else
            p = l;
        return Ea(e),
        l = df(t, e, n, p, c, s),
        v = pf(),
        t !== null && !Le ? (mf(t, e, s),
        dl(t, e, s)) : (qt && v && Ko(e),
        e.flags |= 1,
        nn(t, e, l, s),
        e.child)
    }
    function Qp(t, e, n, l, s) {
        if (t === null) {
            var c = n.type;
            return typeof c == "function" && !Qo(c) && c.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = c,
            Zp(t, e, c, l, s)) : (t = Ys(n.type, null, l, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (c = t.child,
        !qf(t, s)) {
            var p = c.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : sr,
            n(p, l) && t.ref === e.ref)
                return dl(t, e, s)
        }
        return e.flags |= 1,
        t = rl(c, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function Zp(t, e, n, l, s) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (sr(c, l) && t.ref === e.ref)
                if (Le = !1,
                e.pendingProps = l = c,
                qf(t, s))
                    (t.flags & 131072) !== 0 && (Le = !0);
                else
                    return e.lanes = t.lanes,
                    dl(t, e, s)
        }
        return Nf(t, e, n, l, s)
    }
    function kp(t, e, n, l) {
        var s = l.children
          , c = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | n : n,
                t !== null) {
                    for (l = e.child = t.child,
                    s = 0; l !== null; )
                        s = s | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = s & ~c
                } else
                    l = 0,
                    e.child = null;
                return Kp(t, e, c, n, l)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Xs(e, c !== null ? c.cachePool : null),
                c !== null ? F0(e, c) : cf(),
                W0(e);
            else
                return l = e.lanes = 536870912,
                Kp(t, e, c !== null ? c.baseLanes | n : n, n, l)
        } else
            c !== null ? (Xs(e, c.cachePool),
            F0(e, c),
            ql(),
            e.memoizedState = null) : (t !== null && Xs(e, null),
            cf(),
            ql());
        return nn(t, e, s, n),
        e.child
    }
    function Tr(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function Kp(t, e, n, l, s) {
        var c = nf();
        return c = c === null ? null : {
            parent: Be._currentValue,
            pool: c
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: c
        },
        t !== null && Xs(e, null),
        cf(),
        W0(e),
        t !== null && hu(t, e, l, !0),
        e.childLanes = s,
        null
    }
    function ic(t, e) {
        return e = ac({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function Jp(t, e, n) {
        return Oa(e, t.child, null, n),
        t = ic(e, e.pendingProps),
        t.flags |= 2,
        Fn(e),
        e.memoizedState = null,
        t
    }
    function oy(t, e, n) {
        var l = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (qt) {
                if (l.mode === "hidden")
                    return t = ic(e, l),
                    e.lanes = 536870912,
                    Tr(null, t);
                if (ff(e),
                (t = se) ? (t = ug(t, Ti),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Rl !== null ? {
                        id: ki,
                        overflow: Ki
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = w0(t),
                n.return = e,
                e.child = n,
                tn = e,
                se = null)) : t = null,
                t === null)
                    throw Ul(e);
                return e.lanes = 536870912,
                null
            }
            return ic(e, l)
        }
        var c = t.memoizedState;
        if (c !== null) {
            var p = c.dehydrated;
            if (ff(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = Jp(t, e, n);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(a(558));
            else if (Le || hu(t, e, n, !1),
            s = (n & t.childLanes) !== 0,
            Le || s) {
                if (l = ne,
                l !== null && (p = ct(l, n),
                p !== 0 && p !== c.retryLane))
                    throw c.retryLane = p,
                    Sa(t, p),
                    Hn(l, t, p),
                    Rf;
                pc(),
                e = Jp(t, e, n)
            } else
                t = c.treeContext,
                se = zi(p.nextSibling),
                tn = e,
                qt = !0,
                Nl = null,
                Ti = !1,
                t !== null && U0(e, t),
                e = ic(e, l),
                e.flags |= 4096;
            return e
        }
        return t = rl(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function lc(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(a(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function Nf(t, e, n, l, s) {
        return Ea(e),
        n = df(t, e, n, l, void 0, s),
        l = pf(),
        t !== null && !Le ? (mf(t, e, s),
        dl(t, e, s)) : (qt && l && Ko(e),
        e.flags |= 1,
        nn(t, e, n, s),
        e.child)
    }
    function Fp(t, e, n, l, s, c) {
        return Ea(e),
        e.updateQueue = null,
        n = P0(e, l, n, s),
        $0(t),
        l = pf(),
        t !== null && !Le ? (mf(t, e, c),
        dl(t, e, c)) : (qt && l && Ko(e),
        e.flags |= 1,
        nn(t, e, n, c),
        e.child)
    }
    function Wp(t, e, n, l, s) {
        if (Ea(e),
        e.stateNode === null) {
            var c = su
              , p = n.contextType;
            typeof p == "object" && p !== null && (c = en(p)),
            c = new n(l,c),
            e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Cf,
            e.stateNode = c,
            c._reactInternals = e,
            c = e.stateNode,
            c.props = l,
            c.state = e.memoizedState,
            c.refs = {},
            af(e),
            p = n.contextType,
            c.context = typeof p == "object" && p !== null ? en(p) : su,
            c.state = e.memoizedState,
            p = n.getDerivedStateFromProps,
            typeof p == "function" && (Mf(e, n, p, l),
            c.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            p !== c.state && Cf.enqueueReplaceState(c, c.state, null),
            vr(e, l, c, s),
            _r(),
            c.state = e.memoizedState),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            c = e.stateNode;
            var v = e.memoizedProps
              , T = Ca(n, v);
            c.props = T;
            var N = c.context
              , V = n.contextType;
            p = su,
            typeof V == "object" && V !== null && (p = en(V));
            var K = n.getDerivedStateFromProps;
            V = typeof K == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            V || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || N !== p) && Bp(e, c, l, p),
            Bl = !1;
            var U = e.memoizedState;
            c.state = U,
            vr(e, l, c, s),
            _r(),
            N = e.memoizedState,
            v || U !== N || Bl ? (typeof K == "function" && (Mf(e, n, K, l),
            N = e.memoizedState),
            (T = Bl || Hp(e, n, T, l, U, N, p)) ? (V || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = N),
            c.props = l,
            c.state = N,
            c.context = p,
            l = T) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            c = e.stateNode,
            uf(t, e),
            p = e.memoizedProps,
            V = Ca(n, p),
            c.props = V,
            K = e.pendingProps,
            U = c.context,
            N = n.contextType,
            T = su,
            typeof N == "object" && N !== null && (T = en(N)),
            v = n.getDerivedStateFromProps,
            (N = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== K || U !== T) && Bp(e, c, l, T),
            Bl = !1,
            U = e.memoizedState,
            c.state = U,
            vr(e, l, c, s),
            _r();
            var B = e.memoizedState;
            p !== K || U !== B || Bl || t !== null && t.dependencies !== null && js(t.dependencies) ? (typeof v == "function" && (Mf(e, n, v, l),
            B = e.memoizedState),
            (V = Bl || Hp(e, n, V, l, U, B, T) || t !== null && t.dependencies !== null && js(t.dependencies)) ? (N || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, B, T),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, B, T)),
            typeof c.componentDidUpdate == "function" && (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && U === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = B),
            c.props = l,
            c.state = B,
            c.context = T,
            l = V) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && U === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return c = l,
        lc(t, e),
        l = (e.flags & 128) !== 0,
        c || l ? (c = e.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = Oa(e, t.child, null, s),
        e.child = Oa(e, null, n, s)) : nn(t, e, n, s),
        e.memoizedState = c.state,
        t = e.child) : t = dl(t, e, s),
        t
    }
    function $p(t, e, n, l) {
        return xa(),
        e.flags |= 256,
        nn(t, e, n, l),
        e.child
    }
    var Uf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Hf(t) {
        return {
            baseLanes: t,
            cachePool: q0()
        }
    }
    function Bf(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= $n),
        t
    }
    function Pp(t, e, n) {
        var l = e.pendingProps, s = !1, c = (e.flags & 128) !== 0, p;
        if ((p = c) || (p = t !== null && t.memoizedState === null ? !1 : (Me.current & 2) !== 0),
        p && (s = !0,
        e.flags &= -129),
        p = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (qt) {
                if (s ? jl(e) : ql(),
                (t = se) ? (t = ug(t, Ti),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Rl !== null ? {
                        id: ki,
                        overflow: Ki
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = w0(t),
                n.return = e,
                e.child = n,
                tn = e,
                se = null)) : t = null,
                t === null)
                    throw Ul(e);
                return vh(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var v = l.children;
            return l = l.fallback,
            s ? (ql(),
            s = e.mode,
            v = ac({
                mode: "hidden",
                children: v
            }, s),
            l = ba(l, s, n, null),
            v.return = e,
            l.return = e,
            v.sibling = l,
            e.child = v,
            l = e.child,
            l.memoizedState = Hf(n),
            l.childLanes = Bf(t, p, n),
            e.memoizedState = Uf,
            Tr(null, l)) : (jl(e),
            Yf(e, v))
        }
        var T = t.memoizedState;
        if (T !== null && (v = T.dehydrated,
        v !== null)) {
            if (c)
                e.flags & 256 ? (jl(e),
                e.flags &= -257,
                e = Lf(t, e, n)) : e.memoizedState !== null ? (ql(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (ql(),
                v = l.fallback,
                s = e.mode,
                l = ac({
                    mode: "visible",
                    children: l.children
                }, s),
                v = ba(v, s, n, null),
                v.flags |= 2,
                l.return = e,
                v.return = e,
                l.sibling = v,
                e.child = l,
                Oa(e, t.child, null, n),
                l = e.child,
                l.memoizedState = Hf(n),
                l.childLanes = Bf(t, p, n),
                e.memoizedState = Uf,
                e = Tr(null, l));
            else if (jl(e),
            vh(v)) {
                if (p = v.nextSibling && v.nextSibling.dataset,
                p)
                    var N = p.dgst;
                p = N,
                l = Error(a(419)),
                l.stack = "",
                l.digest = p,
                fr({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = Lf(t, e, n)
            } else if (Le || hu(t, e, n, !1),
            p = (n & t.childLanes) !== 0,
            Le || p) {
                if (p = ne,
                p !== null && (l = ct(p, n),
                l !== 0 && l !== T.retryLane))
                    throw T.retryLane = l,
                    Sa(t, l),
                    Hn(p, t, l),
                    Rf;
                _h(v) || pc(),
                e = Lf(t, e, n)
            } else
                _h(v) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = T.treeContext,
                se = zi(v.nextSibling),
                tn = e,
                qt = !0,
                Nl = null,
                Ti = !1,
                t !== null && U0(e, t),
                e = Yf(e, l.children),
                e.flags |= 4096);
            return e
        }
        return s ? (ql(),
        v = l.fallback,
        s = e.mode,
        T = t.child,
        N = T.sibling,
        l = rl(T, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = T.subtreeFlags & 65011712,
        N !== null ? v = rl(N, v) : (v = ba(v, s, n, null),
        v.flags |= 2),
        v.return = e,
        l.return = e,
        l.sibling = v,
        e.child = l,
        Tr(null, l),
        l = e.child,
        v = t.child.memoizedState,
        v === null ? v = Hf(n) : (s = v.cachePool,
        s !== null ? (T = Be._currentValue,
        s = s.parent !== T ? {
            parent: T,
            pool: T
        } : s) : s = q0(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: s
        }),
        l.memoizedState = v,
        l.childLanes = Bf(t, p, n),
        e.memoizedState = Uf,
        Tr(t.child, l)) : (jl(e),
        n = t.child,
        t = n.sibling,
        n = rl(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (p = e.deletions,
        p === null ? (e.deletions = [t],
        e.flags |= 16) : p.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Yf(t, e) {
        return e = ac({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function ac(t, e) {
        return t = Kn(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Lf(t, e, n) {
        return Oa(e, t.child, null, n),
        t = Yf(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Ip(t, e, n) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        Po(t.return, e, n)
    }
    function jf(t, e, n, l, s, c) {
        var p = t.memoizedState;
        p === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: s,
            treeForkCount: c
        } : (p.isBackwards = e,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = l,
        p.tail = n,
        p.tailMode = s,
        p.treeForkCount = c)
    }
    function tm(t, e, n) {
        var l = e.pendingProps
          , s = l.revealOrder
          , c = l.tail;
        l = l.children;
        var p = Me.current
          , v = (p & 2) !== 0;
        if (v ? (p = p & 1 | 2,
        e.flags |= 128) : p &= 1,
        P(Me, p),
        nn(t, e, l, n),
        l = qt ? or : 0,
        !v && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Ip(t, n, e);
                else if (t.tag === 19)
                    Ip(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && Ks(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            jf(e, !1, s, n, c, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && Ks(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            jf(e, !0, n, null, c, l);
            break;
        case "together":
            jf(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function dl(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Vl |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (hu(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(a(153));
        if (e.child !== null) {
            for (t = e.child,
            n = rl(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = rl(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function qf(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && js(t)))
    }
    function fy(t, e, n) {
        switch (e.tag) {
        case 3:
            kt(e, e.stateNode.containerInfo),
            Hl(e, Be, t.memoizedState.cache),
            xa();
            break;
        case 27:
        case 5:
            Dn(e);
            break;
        case 4:
            kt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Hl(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                ff(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (jl(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? Pp(t, e, n) : (jl(e),
                t = dl(t, e, n),
                t !== null ? t.sibling : null);
            jl(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (l = (n & e.childLanes) !== 0,
            l || (hu(t, e, n, !1),
            l = (n & e.childLanes) !== 0),
            s) {
                if (l)
                    return tm(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            P(Me, Me.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            kp(t, e, n, e.pendingProps);
        case 24:
            Hl(e, Be, t.memoizedState.cache)
        }
        return dl(t, e, n)
    }
    function em(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Le = !0;
            else {
                if (!qf(t, n) && (e.flags & 128) === 0)
                    return Le = !1,
                    fy(t, e, n);
                Le = (t.flags & 131072) !== 0
            }
        else
            Le = !1,
            qt && (e.flags & 1048576) !== 0 && N0(e, or, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Aa(e.elementType),
                e.type = t,
                typeof t == "function")
                    Qo(t) ? (l = Ca(t, l),
                    e.tag = 1,
                    e = Wp(null, e, t, l, n)) : (e.tag = 0,
                    e = Nf(null, e, t, l, n));
                else {
                    if (t != null) {
                        var s = t.$$typeof;
                        if (s === H) {
                            e.tag = 11,
                            e = Vp(null, e, t, l, n);
                            break t
                        } else if (s === C) {
                            e.tag = 14,
                            e = Qp(null, e, t, l, n);
                            break t
                        }
                    }
                    throw e = ht(t) || t,
                    Error(a(306, e, ""))
                }
            }
            return e;
        case 0:
            return Nf(t, e, e.type, e.pendingProps, n);
        case 1:
            return l = e.type,
            s = Ca(l, e.pendingProps),
            Wp(t, e, l, s, n);
        case 3:
            t: {
                if (kt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(a(387));
                l = e.pendingProps;
                var c = e.memoizedState;
                s = c.element,
                uf(t, e),
                vr(e, l, null, n);
                var p = e.memoizedState;
                if (l = p.cache,
                Hl(e, Be, l),
                l !== c.cache && Io(e, [Be], n, !0),
                _r(),
                l = p.element,
                c.isDehydrated)
                    if (c = {
                        element: l,
                        isDehydrated: !1,
                        cache: p.cache
                    },
                    e.updateQueue.baseState = c,
                    e.memoizedState = c,
                    e.flags & 256) {
                        e = $p(t, e, l, n);
                        break t
                    } else if (l !== s) {
                        s = Si(Error(a(424)), e),
                        fr(s),
                        e = $p(t, e, l, n);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        se = zi(t.firstChild),
                        tn = e,
                        qt = !0,
                        Nl = null,
                        Ti = !0,
                        n = k0(e, null, l, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (xa(),
                    l === s) {
                        e = dl(t, e, n);
                        break t
                    }
                    nn(t, e, l, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return lc(t, e),
            t === null ? (n = hg(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : qt || (n = e.type,
            t = e.pendingProps,
            l = bc(ft.current).createElement(n),
            l[zt] = e,
            l[Dt] = t,
            ln(l, n, t),
            Rt(l),
            e.stateNode = l) : e.memoizedState = hg(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return Dn(e),
            t === null && qt && (l = e.stateNode = cg(e.type, e.pendingProps, ft.current),
            tn = e,
            Ti = !0,
            s = se,
            Jl(e.type) ? (yh = s,
            se = zi(l.firstChild)) : se = s),
            nn(t, e, e.pendingProps.children, n),
            lc(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && qt && ((s = l = se) && (l = Xy(l, e.type, e.pendingProps, Ti),
            l !== null ? (e.stateNode = l,
            tn = e,
            se = zi(l.firstChild),
            Ti = !1,
            s = !0) : s = !1),
            s || Ul(e)),
            Dn(e),
            s = e.type,
            c = e.pendingProps,
            p = t !== null ? t.memoizedProps : null,
            l = c.children,
            ph(s, c) ? l = null : p !== null && ph(s, p) && (e.flags |= 32),
            e.memoizedState !== null && (s = df(t, e, ny, null, null, n),
            Lr._currentValue = s),
            lc(t, e),
            nn(t, e, l, n),
            e.child;
        case 6:
            return t === null && qt && ((t = n = se) && (n = Gy(n, e.pendingProps, Ti),
            n !== null ? (e.stateNode = n,
            tn = e,
            se = null,
            t = !0) : t = !1),
            t || Ul(e)),
            null;
        case 13:
            return Pp(t, e, n);
        case 4:
            return kt(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = Oa(e, null, l, n) : nn(t, e, l, n),
            e.child;
        case 11:
            return Vp(t, e, e.type, e.pendingProps, n);
        case 7:
            return nn(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return nn(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return nn(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return l = e.pendingProps,
            Hl(e, e.type, l.value),
            nn(t, e, l.children, n),
            e.child;
        case 9:
            return s = e.type._context,
            l = e.pendingProps.children,
            Ea(e),
            s = en(s),
            l = l(s),
            e.flags |= 1,
            nn(t, e, l, n),
            e.child;
        case 14:
            return Qp(t, e, e.type, e.pendingProps, n);
        case 15:
            return Zp(t, e, e.type, e.pendingProps, n);
        case 19:
            return tm(t, e, n);
        case 31:
            return oy(t, e, n);
        case 22:
            return kp(t, e, n, e.pendingProps);
        case 24:
            return Ea(e),
            l = en(Be),
            t === null ? (s = nf(),
            s === null && (s = ne,
            c = tf(),
            s.pooledCache = c,
            c.refCount++,
            c !== null && (s.pooledCacheLanes |= n),
            s = c),
            e.memoizedState = {
                parent: l,
                cache: s
            },
            af(e),
            Hl(e, Be, s)) : ((t.lanes & n) !== 0 && (uf(t, e),
            vr(e, null, null, n),
            _r()),
            s = t.memoizedState,
            c = e.memoizedState,
            s.parent !== l ? (s = {
                parent: l,
                cache: l
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Hl(e, Be, l)) : (l = c.cache,
            Hl(e, Be, l),
            l !== s.cache && Io(e, [Be], n, !0))),
            nn(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(a(156, e.tag))
    }
    function pl(t) {
        t.flags |= 4
    }
    function Xf(t, e, n, l, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (s & 335544128) === s)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Om())
                    t.flags |= 8192;
                else
                    throw Da = Vs,
                    lf
        } else
            t.flags &= -16777217
    }
    function nm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !_g(e))
            if (Om())
                t.flags |= 8192;
            else
                throw Da = Vs,
                lf
    }
    function uc(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Ml() : 536870912,
        t.lanes |= e,
        Eu |= e)
    }
    function Er(t, e) {
        if (!qt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function ce(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , l = 0;
        if (e)
            for (var s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags & 65011712,
                l |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags,
                l |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = n,
        e
    }
    function hy(t, e, n) {
        var l = e.pendingProps;
        switch (Jo(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ce(e),
            null;
        case 1:
            return ce(e),
            null;
        case 3:
            return n = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            ol(Be),
            Ct(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (fu(e) ? pl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Wo())),
            ce(e),
            null;
        case 26:
            var s = e.type
              , c = e.memoizedState;
            return t === null ? (pl(e),
            c !== null ? (ce(e),
            nm(e, c)) : (ce(e),
            Xf(e, s, null, l, n))) : c ? c !== t.memoizedState ? (pl(e),
            ce(e),
            nm(e, c)) : (ce(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && pl(e),
            ce(e),
            Xf(e, s, t, l, n)),
            null;
        case 27:
            if (Ne(e),
            n = ft.current,
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && pl(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(a(166));
                    return ce(e),
                    null
                }
                t = I.current,
                fu(e) ? H0(e) : (t = cg(s, l, n),
                e.stateNode = t,
                pl(e))
            }
            return ce(e),
            null;
        case 5:
            if (Ne(e),
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && pl(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(a(166));
                    return ce(e),
                    null
                }
                if (c = I.current,
                fu(e))
                    H0(e);
                else {
                    var p = bc(ft.current);
                    switch (c) {
                    case 1:
                        c = p.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        c = p.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            c = p.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            c = p.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            c = p.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof l.is == "string" ? p.createElement("select", {
                                is: l.is
                            }) : p.createElement("select"),
                            l.multiple ? c.multiple = !0 : l.size && (c.size = l.size);
                            break;
                        default:
                            c = typeof l.is == "string" ? p.createElement(s, {
                                is: l.is
                            }) : p.createElement(s)
                        }
                    }
                    c[zt] = e,
                    c[Dt] = l;
                    t: for (p = e.child; p !== null; ) {
                        if (p.tag === 5 || p.tag === 6)
                            c.appendChild(p.stateNode);
                        else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                            p.child.return = p,
                            p = p.child;
                            continue
                        }
                        if (p === e)
                            break t;
                        for (; p.sibling === null; ) {
                            if (p.return === null || p.return === e)
                                break t;
                            p = p.return
                        }
                        p.sibling.return = p.return,
                        p = p.sibling
                    }
                    e.stateNode = c;
                    t: switch (ln(c, s, l),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && pl(e)
                }
            }
            return ce(e),
            Xf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && pl(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(a(166));
                if (t = ft.current,
                fu(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    l = null,
                    s = tn,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            l = s.memoizedProps
                        }
                    t[zt] = e,
                    t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Pm(t.nodeValue, n)),
                    t || Ul(e, !0)
                } else
                    t = bc(t).createTextNode(l),
                    t[zt] = e,
                    e.stateNode = t
            }
            return ce(e),
            null;
        case 31:
            if (n = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = fu(e),
                n !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(a(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(a(557));
                        t[zt] = e
                    } else
                        xa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    ce(e),
                    t = !1
                } else
                    n = Wo(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Fn(e),
                    e) : (Fn(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(a(558))
            }
            return ce(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = fu(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(a(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(a(317));
                        s[zt] = e
                    } else
                        xa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    ce(e),
                    s = !1
                } else
                    s = Wo(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (Fn(e),
                    e) : (Fn(e),
                    null)
            }
            return Fn(e),
            (e.flags & 128) !== 0 ? (e.lanes = n,
            e) : (n = l !== null,
            t = t !== null && t.memoizedState !== null,
            n && (l = e.child,
            s = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool),
            c = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool),
            c !== s && (l.flags |= 2048)),
            n !== t && n && (e.child.flags |= 8192),
            uc(e, e.updateQueue),
            ce(e),
            null);
        case 4:
            return Ct(),
            t === null && ch(e.stateNode.containerInfo),
            ce(e),
            null;
        case 10:
            return ol(e.type),
            ce(e),
            null;
        case 19:
            if (G(Me),
            l = e.memoizedState,
            l === null)
                return ce(e),
                null;
            if (s = (e.flags & 128) !== 0,
            c = l.rendering,
            c === null)
                if (s)
                    Er(l, !1);
                else {
                    if (ze !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (c = Ks(t),
                            c !== null) {
                                for (e.flags |= 128,
                                Er(l, !1),
                                t = c.updateQueue,
                                e.updateQueue = t,
                                uc(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    C0(n, t),
                                    n = n.sibling;
                                return P(Me, Me.current & 1 | 2),
                                qt && sl(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && De() > fc && (e.flags |= 128,
                    s = !0,
                    Er(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = Ks(c),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        uc(e, t),
                        Er(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !c.alternate && !qt)
                            return ce(e),
                            null
                    } else
                        2 * De() - l.renderingStartTime > fc && n !== 536870912 && (e.flags |= 128,
                        s = !0,
                        Er(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (c.sibling = e.child,
                e.child = c) : (t = l.last,
                t !== null ? t.sibling = c : e.child = c,
                l.last = c)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = De(),
            t.sibling = null,
            n = Me.current,
            P(Me, s ? n & 1 | 2 : n & 1),
            qt && sl(e, l.treeForkCount),
            t) : (ce(e),
            null);
        case 22:
        case 23:
            return Fn(e),
            of(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (ce(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e),
            n = e.updateQueue,
            n !== null && uc(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== n && (e.flags |= 2048),
            t !== null && G(za),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            ol(Be),
            ce(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(a(156, e.tag))
    }
    function dy(t, e) {
        switch (Jo(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return ol(Be),
            Ct(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Ne(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Fn(e),
                e.alternate === null)
                    throw Error(a(340));
                xa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Fn(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(a(340));
                xa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return G(Me),
            null;
        case 4:
            return Ct(),
            null;
        case 10:
            return ol(e.type),
            null;
        case 22:
        case 23:
            return Fn(e),
            of(),
            t !== null && G(za),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return ol(Be),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function im(t, e) {
        switch (Jo(e),
        e.tag) {
        case 3:
            ol(Be),
            Ct();
            break;
        case 26:
        case 27:
        case 5:
            Ne(e);
            break;
        case 4:
            Ct();
            break;
        case 31:
            e.memoizedState !== null && Fn(e);
            break;
        case 13:
            Fn(e);
            break;
        case 19:
            G(Me);
            break;
        case 10:
            ol(e.type);
            break;
        case 22:
        case 23:
            Fn(e),
            of(),
            t !== null && G(za);
            break;
        case 24:
            ol(Be)
        }
    }
    function zr(t, e) {
        try {
            var n = e.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        l = void 0;
                        var c = n.create
                          , p = n.inst;
                        l = c(),
                        p.destroy = l
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (v) {
            $t(e, e.return, v)
        }
    }
    function Xl(t, e, n) {
        try {
            var l = e.updateQueue
              , s = l !== null ? l.lastEffect : null;
            if (s !== null) {
                var c = s.next;
                l = c;
                do {
                    if ((l.tag & t) === t) {
                        var p = l.inst
                          , v = p.destroy;
                        if (v !== void 0) {
                            p.destroy = void 0,
                            s = e;
                            var T = n
                              , N = v;
                            try {
                                N()
                            } catch (V) {
                                $t(s, T, V)
                            }
                        }
                    }
                    l = l.next
                } while (l !== c)
            }
        } catch (V) {
            $t(e, e.return, V)
        }
    }
    function lm(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                J0(e, n)
            } catch (l) {
                $t(t, t.return, l)
            }
        }
    }
    function am(t, e, n) {
        n.props = Ca(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            $t(t, e, l)
        }
    }
    function Ar(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(l) : n.current = l
            }
        } catch (s) {
            $t(t, e, s)
        }
    }
    function Ji(t, e) {
        var n = t.ref
          , l = t.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (s) {
                    $t(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    $t(t, e, s)
                }
            else
                n.current = null
    }
    function um(t) {
        var e = t.type
          , n = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break t;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (s) {
            $t(t, t.return, s)
        }
    }
    function Gf(t, e, n) {
        try {
            var l = t.stateNode;
            Hy(l, t.type, n, e),
            l[Dt] = e
        } catch (s) {
            $t(t, t.return, s)
        }
    }
    function rm(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jl(t.type) || t.tag === 4
    }
    function Vf(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || rm(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Jl(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Qf(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = al));
        else if (l !== 4 && (l === 27 && Jl(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Qf(t, e, n),
            t = t.sibling; t !== null; )
                Qf(t, e, n),
                t = t.sibling
    }
    function rc(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (l !== 4 && (l === 27 && Jl(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (rc(t, e, n),
            t = t.sibling; t !== null; )
                rc(t, e, n),
                t = t.sibling
    }
    function sm(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var l = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            ln(e, l, n),
            e[zt] = t,
            e[Dt] = n
        } catch (c) {
            $t(t, t.return, c)
        }
    }
    var ml = !1
      , je = !1
      , Zf = !1
      , cm = typeof WeakSet == "function" ? WeakSet : Set
      , Fe = null;
    function py(t, e) {
        if (t = t.containerInfo,
        hh = Oc,
        t = b0(t),
        Yo(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var s = l.anchorOffset
                          , c = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            c.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var p = 0
                          , v = -1
                          , T = -1
                          , N = 0
                          , V = 0
                          , K = t
                          , U = null;
                        e: for (; ; ) {
                            for (var B; K !== n || s !== 0 && K.nodeType !== 3 || (v = p + s),
                            K !== c || l !== 0 && K.nodeType !== 3 || (T = p + l),
                            K.nodeType === 3 && (p += K.nodeValue.length),
                            (B = K.firstChild) !== null; )
                                U = K,
                                K = B;
                            for (; ; ) {
                                if (K === t)
                                    break e;
                                if (U === n && ++N === s && (v = p),
                                U === c && ++V === l && (T = p),
                                (B = K.nextSibling) !== null)
                                    break;
                                K = U,
                                U = K.parentNode
                            }
                            K = B
                        }
                        n = v === -1 || T === -1 ? null : {
                            start: v,
                            end: T
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (dh = {
            focusedElem: t,
            selectionRange: n
        },
        Oc = !1,
        Fe = e; Fe !== null; )
            if (e = Fe,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                Fe = t;
            else
                for (; Fe !== null; ) {
                    switch (e = Fe,
                    c = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (n = 0; n < t.length; n++)
                                s = t[n],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && c !== null) {
                            t = void 0,
                            n = e,
                            s = c.memoizedProps,
                            c = c.memoizedState,
                            l = n.stateNode;
                            try {
                                var it = Ca(n.type, s);
                                t = l.getSnapshotBeforeUpdate(it, c),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (mt) {
                                $t(n, n.return, mt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                gh(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    gh(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(a(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Fe = t;
                        break
                    }
                    Fe = e.return
                }
    }
    function om(t, e, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            _l(t, n),
            l & 4 && zr(5, n);
            break;
        case 1:
            if (_l(t, n),
            l & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (p) {
                        $t(n, n.return, p)
                    }
                else {
                    var s = Ca(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (p) {
                        $t(n, n.return, p)
                    }
                }
            l & 64 && lm(n),
            l & 512 && Ar(n, n.return);
            break;
        case 3:
            if (_l(t, n),
            l & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    J0(t, e)
                } catch (p) {
                    $t(n, n.return, p)
                }
            }
            break;
        case 27:
            e === null && l & 4 && sm(n);
        case 26:
        case 5:
            _l(t, n),
            e === null && l & 4 && um(n),
            l & 512 && Ar(n, n.return);
            break;
        case 12:
            _l(t, n);
            break;
        case 31:
            _l(t, n),
            l & 4 && dm(t, n);
            break;
        case 13:
            _l(t, n),
            l & 4 && pm(t, n),
            l & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = Ty.bind(null, n),
            Vy(t, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || ml,
            !l) {
                e = e !== null && e.memoizedState !== null || je,
                s = ml;
                var c = je;
                ml = l,
                (je = e) && !c ? vl(t, n, (n.subtreeFlags & 8772) !== 0) : _l(t, n),
                ml = s,
                je = c
            }
            break;
        case 30:
            break;
        default:
            _l(t, n)
        }
    }
    function fm(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        fm(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Oe(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var he = null
      , wn = !1;
    function gl(t, e, n) {
        for (n = n.child; n !== null; )
            hm(t, e, n),
            n = n.sibling
    }
    function hm(t, e, n) {
        if (pe && typeof pe.onCommitFiberUnmount == "function")
            try {
                pe.onCommitFiberUnmount(Xi, n)
            } catch {}
        switch (n.tag) {
        case 26:
            je || Ji(n, e),
            gl(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            je || Ji(n, e);
            var l = he
              , s = wn;
            Jl(n.type) && (he = n.stateNode,
            wn = !1),
            gl(t, e, n),
            Hr(n.stateNode),
            he = l,
            wn = s;
            break;
        case 5:
            je || Ji(n, e);
        case 6:
            if (l = he,
            s = wn,
            he = null,
            gl(t, e, n),
            he = l,
            wn = s,
            he !== null)
                if (wn)
                    try {
                        (he.nodeType === 9 ? he.body : he.nodeName === "HTML" ? he.ownerDocument.body : he).removeChild(n.stateNode)
                    } catch (c) {
                        $t(n, e, c)
                    }
                else
                    try {
                        he.removeChild(n.stateNode)
                    } catch (c) {
                        $t(n, e, c)
                    }
            break;
        case 18:
            he !== null && (wn ? (t = he,
            lg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            Ru(t)) : lg(he, n.stateNode));
            break;
        case 4:
            l = he,
            s = wn,
            he = n.stateNode.containerInfo,
            wn = !0,
            gl(t, e, n),
            he = l,
            wn = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Xl(2, n, e),
            je || Xl(4, n, e),
            gl(t, e, n);
            break;
        case 1:
            je || (Ji(n, e),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && am(n, e, l)),
            gl(t, e, n);
            break;
        case 21:
            gl(t, e, n);
            break;
        case 22:
            je = (l = je) || n.memoizedState !== null,
            gl(t, e, n),
            je = l;
            break;
        default:
            gl(t, e, n)
        }
    }
    function dm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ru(t)
            } catch (n) {
                $t(e, e.return, n)
            }
        }
    }
    function pm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ru(t)
            } catch (n) {
                $t(e, e.return, n)
            }
    }
    function my(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new cm),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new cm),
            e;
        default:
            throw Error(a(435, t.tag))
        }
    }
    function sc(t, e) {
        var n = my(t);
        e.forEach(function(l) {
            if (!n.has(l)) {
                n.add(l);
                var s = Ey.bind(null, t, l);
                l.then(s, s)
            }
        })
    }
    function Rn(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var s = n[l]
                  , c = t
                  , p = e
                  , v = p;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Jl(v.type)) {
                            he = v.stateNode,
                            wn = !1;
                            break t
                        }
                        break;
                    case 5:
                        he = v.stateNode,
                        wn = !1;
                        break t;
                    case 3:
                    case 4:
                        he = v.stateNode.containerInfo,
                        wn = !0;
                        break t
                    }
                    v = v.return
                }
                if (he === null)
                    throw Error(a(160));
                hm(c, p, s),
                he = null,
                wn = !1,
                c = s.alternate,
                c !== null && (c.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                mm(e, t),
                e = e.sibling
    }
    var Yi = null;
    function mm(t, e) {
        var n = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Rn(e, t),
            Nn(t),
            l & 4 && (Xl(3, t, t.return),
            zr(3, t),
            Xl(5, t, t.return));
            break;
        case 1:
            Rn(e, t),
            Nn(t),
            l & 512 && (je || n === null || Ji(n, n.return)),
            l & 64 && ml && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var s = Yi;
            if (Rn(e, t),
            Nn(t),
            l & 512 && (je || n === null || Ji(n, n.return)),
            l & 4) {
                var c = n !== null ? n.memoizedState : null;
                if (l = t.memoizedState,
                n === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                n = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (l) {
                                case "title":
                                    c = s.getElementsByTagName("title")[0],
                                    (!c || c[me] || c[zt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(l),
                                    s.head.insertBefore(c, s.querySelector("head > title"))),
                                    ln(c, l, n),
                                    c[zt] = t,
                                    Rt(c),
                                    l = c;
                                    break t;
                                case "link":
                                    var p = mg("link", "href", s).get(l + (n.href || ""));
                                    if (p) {
                                        for (var v = 0; v < p.length; v++)
                                            if (c = p[v],
                                            c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                p.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(l),
                                    ln(c, l, n),
                                    s.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (p = mg("meta", "content", s).get(l + (n.content || ""))) {
                                        for (v = 0; v < p.length; v++)
                                            if (c = p[v],
                                            c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                p.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(l),
                                    ln(c, l, n),
                                    s.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(a(468, l))
                                }
                                c[zt] = t,
                                Rt(c),
                                l = c
                            }
                            t.stateNode = l
                        } else
                            gg(s, t.type, t.stateNode);
                    else
                        t.stateNode = pg(s, l, t.memoizedProps);
                else
                    c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : c.count--,
                    l === null ? gg(s, t.type, t.stateNode) : pg(s, l, t.memoizedProps)) : l === null && t.stateNode !== null && Gf(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            Rn(e, t),
            Nn(t),
            l & 512 && (je || n === null || Ji(n, n.return)),
            n !== null && l & 4 && Gf(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (Rn(e, t),
            Nn(t),
            l & 512 && (je || n === null || Ji(n, n.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    eu(s, "")
                } catch (it) {
                    $t(t, t.return, it)
                }
            }
            l & 4 && t.stateNode != null && (s = t.memoizedProps,
            Gf(t, s, n !== null ? n.memoizedProps : s)),
            l & 1024 && (Zf = !0);
            break;
        case 6:
            if (Rn(e, t),
            Nn(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(a(162));
                l = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = l
                } catch (it) {
                    $t(t, t.return, it)
                }
            }
            break;
        case 3:
            if (Ec = null,
            s = Yi,
            Yi = xc(e.containerInfo),
            Rn(e, t),
            Yi = s,
            Nn(t),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ru(e.containerInfo)
                } catch (it) {
                    $t(t, t.return, it)
                }
            Zf && (Zf = !1,
            gm(t));
            break;
        case 4:
            l = Yi,
            Yi = xc(t.stateNode.containerInfo),
            Rn(e, t),
            Nn(t),
            Yi = l;
            break;
        case 12:
            Rn(e, t),
            Nn(t);
            break;
        case 31:
            Rn(e, t),
            Nn(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            sc(t, l)));
            break;
        case 13:
            Rn(e, t),
            Nn(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (oc = De()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            sc(t, l)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var T = n !== null && n.memoizedState !== null
              , N = ml
              , V = je;
            if (ml = N || s,
            je = V || T,
            Rn(e, t),
            je = V,
            ml = N,
            Nn(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || T || ml || je || wa(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (c = T.stateNode,
                                s)
                                    p = c.style,
                                    typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                                else {
                                    v = T.stateNode;
                                    var K = T.memoizedProps.style
                                      , U = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    v.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (it) {
                                $t(T, T.return, it)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = s ? "" : T.memoizedProps
                            } catch (it) {
                                $t(T, T.return, it)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            T = e;
                            try {
                                var B = T.stateNode;
                                s ? ag(B, !0) : ag(T.stateNode, !1)
                            } catch (it) {
                                $t(T, T.return, it)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            sc(t, n))));
            break;
        case 19:
            Rn(e, t),
            Nn(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            sc(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Rn(e, t),
            Nn(t)
        }
    }
    function Nn(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, l = t.return; l !== null; ) {
                    if (rm(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(a(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , c = Vf(t);
                    rc(t, c, s);
                    break;
                case 5:
                    var p = n.stateNode;
                    n.flags & 32 && (eu(p, ""),
                    n.flags &= -33);
                    var v = Vf(t);
                    rc(t, v, p);
                    break;
                case 3:
                case 4:
                    var T = n.stateNode.containerInfo
                      , N = Vf(t);
                    Qf(t, N, T);
                    break;
                default:
                    throw Error(a(161))
                }
            } catch (V) {
                $t(t, t.return, V)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function gm(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                gm(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function _l(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                om(t, e.alternate, e),
                e = e.sibling
    }
    function wa(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Xl(4, e, e.return),
                wa(e);
                break;
            case 1:
                Ji(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && am(e, e.return, n),
                wa(e);
                break;
            case 27:
                Hr(e.stateNode);
            case 26:
            case 5:
                Ji(e, e.return),
                wa(e);
                break;
            case 22:
                e.memoizedState === null && wa(e);
                break;
            case 30:
                wa(e);
                break;
            default:
                wa(e)
            }
            t = t.sibling
        }
    }
    function vl(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , s = t
              , c = e
              , p = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                vl(s, c, n),
                zr(4, c);
                break;
            case 1:
                if (vl(s, c, n),
                l = c,
                s = l.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (N) {
                        $t(l, l.return, N)
                    }
                if (l = c,
                s = l.updateQueue,
                s !== null) {
                    var v = l.stateNode;
                    try {
                        var T = s.shared.hiddenCallbacks;
                        if (T !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < T.length; s++)
                                K0(T[s], v)
                    } catch (N) {
                        $t(l, l.return, N)
                    }
                }
                n && p & 64 && lm(c),
                Ar(c, c.return);
                break;
            case 27:
                sm(c);
            case 26:
            case 5:
                vl(s, c, n),
                n && l === null && p & 4 && um(c),
                Ar(c, c.return);
                break;
            case 12:
                vl(s, c, n);
                break;
            case 31:
                vl(s, c, n),
                n && p & 4 && dm(s, c);
                break;
            case 13:
                vl(s, c, n),
                n && p & 4 && pm(s, c);
                break;
            case 22:
                c.memoizedState === null && vl(s, c, n),
                Ar(c, c.return);
                break;
            case 30:
                break;
            default:
                vl(s, c, n)
            }
            e = e.sibling
        }
    }
    function kf(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && hr(n))
    }
    function Kf(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && hr(t))
    }
    function Li(t, e, n, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                _m(t, e, n, l),
                e = e.sibling
    }
    function _m(t, e, n, l) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Li(t, e, n, l),
            s & 2048 && zr(9, e);
            break;
        case 1:
            Li(t, e, n, l);
            break;
        case 3:
            Li(t, e, n, l),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && hr(t)));
            break;
        case 12:
            if (s & 2048) {
                Li(t, e, n, l),
                t = e.stateNode;
                try {
                    var c = e.memoizedProps
                      , p = c.id
                      , v = c.onPostCommit;
                    typeof v == "function" && v(p, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (T) {
                    $t(e, e.return, T)
                }
            } else
                Li(t, e, n, l);
            break;
        case 31:
            Li(t, e, n, l);
            break;
        case 13:
            Li(t, e, n, l);
            break;
        case 23:
            break;
        case 22:
            c = e.stateNode,
            p = e.alternate,
            e.memoizedState !== null ? c._visibility & 2 ? Li(t, e, n, l) : Dr(t, e) : c._visibility & 2 ? Li(t, e, n, l) : (c._visibility |= 2,
            bu(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && kf(p, e);
            break;
        case 24:
            Li(t, e, n, l),
            s & 2048 && Kf(e.alternate, e);
            break;
        default:
            Li(t, e, n, l)
        }
    }
    function bu(t, e, n, l, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var c = t
              , p = e
              , v = n
              , T = l
              , N = p.flags;
            switch (p.tag) {
            case 0:
            case 11:
            case 15:
                bu(c, p, v, T, s),
                zr(8, p);
                break;
            case 23:
                break;
            case 22:
                var V = p.stateNode;
                p.memoizedState !== null ? V._visibility & 2 ? bu(c, p, v, T, s) : Dr(c, p) : (V._visibility |= 2,
                bu(c, p, v, T, s)),
                s && N & 2048 && kf(p.alternate, p);
                break;
            case 24:
                bu(c, p, v, T, s),
                s && N & 2048 && Kf(p.alternate, p);
                break;
            default:
                bu(c, p, v, T, s)
            }
            e = e.sibling
        }
    }
    function Dr(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , l = e
                  , s = l.flags;
                switch (l.tag) {
                case 22:
                    Dr(n, l),
                    s & 2048 && kf(l.alternate, l);
                    break;
                case 24:
                    Dr(n, l),
                    s & 2048 && Kf(l.alternate, l);
                    break;
                default:
                    Dr(n, l)
                }
                e = e.sibling
            }
    }
    var Or = 8192;
    function xu(t, e, n) {
        if (t.subtreeFlags & Or)
            for (t = t.child; t !== null; )
                vm(t, e, n),
                t = t.sibling
    }
    function vm(t, e, n) {
        switch (t.tag) {
        case 26:
            xu(t, e, n),
            t.flags & Or && t.memoizedState !== null && eS(n, Yi, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            xu(t, e, n);
            break;
        case 3:
        case 4:
            var l = Yi;
            Yi = xc(t.stateNode.containerInfo),
            xu(t, e, n),
            Yi = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = Or,
            Or = 16777216,
            xu(t, e, n),
            Or = l) : xu(t, e, n));
            break;
        default:
            xu(t, e, n)
        }
    }
    function ym(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Mr(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    Fe = l,
                    bm(l, t)
                }
            ym(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Sm(t),
                t = t.sibling
    }
    function Sm(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Mr(t),
            t.flags & 2048 && Xl(9, t, t.return);
            break;
        case 3:
            Mr(t);
            break;
        case 12:
            Mr(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            cc(t)) : Mr(t);
            break;
        default:
            Mr(t)
        }
    }
    function cc(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    Fe = l,
                    bm(l, t)
                }
            ym(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Xl(8, e, e.return),
                cc(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                cc(e));
                break;
            default:
                cc(e)
            }
            t = t.sibling
        }
    }
    function bm(t, e) {
        for (; Fe !== null; ) {
            var n = Fe;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Xl(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                hr(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                Fe = l;
            else
                t: for (n = t; Fe !== null; ) {
                    l = Fe;
                    var s = l.sibling
                      , c = l.return;
                    if (fm(l),
                    l === n) {
                        Fe = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = c,
                        Fe = s;
                        break t
                    }
                    Fe = c
                }
        }
    }
    var gy = {
        getCacheForType: function(t) {
            var e = en(Be)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        },
        cacheSignal: function() {
            return en(Be).controller.signal
        }
    }
      , _y = typeof WeakMap == "function" ? WeakMap : Map
      , Kt = 0
      , ne = null
      , Ht = null
      , Lt = 0
      , Wt = 0
      , Wn = null
      , Gl = !1
      , Tu = !1
      , Jf = !1
      , yl = 0
      , ze = 0
      , Vl = 0
      , Ra = 0
      , Ff = 0
      , $n = 0
      , Eu = 0
      , Cr = null
      , Un = null
      , Wf = !1
      , oc = 0
      , xm = 0
      , fc = 1 / 0
      , hc = null
      , Ql = null
      , Qe = 0
      , Zl = null
      , zu = null
      , Sl = 0
      , $f = 0
      , Pf = null
      , Tm = null
      , wr = 0
      , If = null;
    function Pn() {
        return (Kt & 2) !== 0 && Lt !== 0 ? Lt & -Lt : R.T !== null ? ah() : wt()
    }
    function Em() {
        if ($n === 0)
            if ((Lt & 536870912) === 0 || qt) {
                var t = cn;
                cn <<= 1,
                (cn & 3932160) === 0 && (cn = 262144),
                $n = t
            } else
                $n = 536870912;
        return t = Jn.current,
        t !== null && (t.flags |= 32),
        $n
    }
    function Hn(t, e, n) {
        (t === ne && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null) && (Au(t, 0),
        kl(t, Lt, $n, !1)),
        st(t, n),
        ((Kt & 2) === 0 || t !== ne) && (t === ne && ((Kt & 2) === 0 && (Ra |= n),
        ze === 4 && kl(t, Lt, $n, !1)),
        Fi(t))
    }
    function zm(t, e, n) {
        if ((Kt & 6) !== 0)
            throw Error(a(327));
        var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || pi(t, e)
          , s = l ? Sy(t, e) : eh(t, e, !0)
          , c = l;
        do {
            if (s === 0) {
                Tu && !l && kl(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                c && !vy(n)) {
                    s = eh(t, e, !1),
                    c = !1;
                    continue
                }
                if (s === 2) {
                    if (c = e,
                    t.errorRecoveryDisabledLanes & c)
                        var p = 0;
                    else
                        p = t.pendingLanes & -536870913,
                        p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
                    if (p !== 0) {
                        e = p;
                        t: {
                            var v = t;
                            s = Cr;
                            var T = v.current.memoizedState.isDehydrated;
                            if (T && (Au(v, p).flags |= 256),
                            p = eh(v, p, !1),
                            p !== 2) {
                                if (Jf && !T) {
                                    v.errorRecoveryDisabledLanes |= c,
                                    Ra |= c,
                                    s = 4;
                                    break t
                                }
                                c = Un,
                                Un = s,
                                c !== null && (Un === null ? Un = c : Un.push.apply(Un, c))
                            }
                            s = p
                        }
                        if (c = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Au(t, 0),
                    kl(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    c = s,
                    c) {
                    case 0:
                    case 1:
                        throw Error(a(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        kl(l, e, $n, !Gl);
                        break t;
                    case 2:
                        Un = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(a(329))
                    }
                    if ((e & 62914560) === e && (s = oc + 300 - De(),
                    10 < s)) {
                        if (kl(l, e, $n, !Gl),
                        di(l, 0, !0) !== 0)
                            break t;
                        Sl = e,
                        l.timeoutHandle = ng(Am.bind(null, l, n, Un, hc, Wf, e, $n, Ra, Eu, Gl, c, "Throttled", -0, 0), s);
                        break t
                    }
                    Am(l, n, Un, hc, Wf, e, $n, Ra, Eu, Gl, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        Fi(t)
    }
    function Am(t, e, n, l, s, c, p, v, T, N, V, K, U, B) {
        if (t.timeoutHandle = -1,
        K = e.subtreeFlags,
        K & 8192 || (K & 16785408) === 16785408) {
            K = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: al
            },
            vm(e, c, K);
            var it = (c & 62914560) === c ? oc - De() : (c & 4194048) === c ? xm - De() : 0;
            if (it = nS(K, it),
            it !== null) {
                Sl = c,
                t.cancelPendingCommit = it(Um.bind(null, t, e, c, n, l, s, p, v, T, V, K, null, U, B)),
                kl(t, c, p, !N);
                return
            }
        }
        Um(t, e, c, n, l, s, p, v, T)
    }
    function vy(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var s = n[l]
                      , c = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!kn(c(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function kl(t, e, n, l) {
        e &= ~Ff,
        e &= ~Ra,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var c = 31 - He(s)
              , p = 1 << c;
            l[c] = -1,
            s &= ~p
        }
        n !== 0 && nt(t, n, e)
    }
    function dc() {
        return (Kt & 6) === 0 ? (Rr(0),
        !1) : !0
    }
    function th() {
        if (Ht !== null) {
            if (Wt === 0)
                var t = Ht.return;
            else
                t = Ht,
                cl = Ta = null,
                gf(t),
                gu = null,
                pr = 0,
                t = Ht;
            for (; t !== null; )
                im(t.alternate, t),
                t = t.return;
            Ht = null
        }
    }
    function Au(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        Ly(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        Sl = 0,
        th(),
        ne = t,
        Ht = n = rl(t.current, null),
        Lt = e,
        Wt = 0,
        Wn = null,
        Gl = !1,
        Tu = pi(t, e),
        Jf = !1,
        Eu = $n = Ff = Ra = Vl = ze = 0,
        Un = Cr = null,
        Wf = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var s = 31 - He(l)
                  , c = 1 << s;
                e |= t[s],
                l &= ~c
            }
        return yl = e,
        Us(),
        n
    }
    function Dm(t, e) {
        xt = null,
        R.H = xr,
        e === mu || e === Gs ? (e = V0(),
        Wt = 3) : e === lf ? (e = V0(),
        Wt = 4) : Wt = e === Rf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Wn = e,
        Ht === null && (ze = 1,
        nc(t, Si(e, t.current)))
    }
    function Om() {
        var t = Jn.current;
        return t === null ? !0 : (Lt & 4194048) === Lt ? Ei === null : (Lt & 62914560) === Lt || (Lt & 536870912) !== 0 ? t === Ei : !1
    }
    function Mm() {
        var t = R.H;
        return R.H = xr,
        t === null ? xr : t
    }
    function Cm() {
        var t = R.A;
        return R.A = gy,
        t
    }
    function pc() {
        ze = 4,
        Gl || (Lt & 4194048) !== Lt && Jn.current !== null || (Tu = !0),
        (Vl & 134217727) === 0 && (Ra & 134217727) === 0 || ne === null || kl(ne, Lt, $n, !1)
    }
    function eh(t, e, n) {
        var l = Kt;
        Kt |= 2;
        var s = Mm()
          , c = Cm();
        (ne !== t || Lt !== e) && (hc = null,
        Au(t, e)),
        e = !1;
        var p = ze;
        t: do
            try {
                if (Wt !== 0 && Ht !== null) {
                    var v = Ht
                      , T = Wn;
                    switch (Wt) {
                    case 8:
                        th(),
                        p = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Jn.current === null && (e = !0);
                        var N = Wt;
                        if (Wt = 0,
                        Wn = null,
                        Du(t, v, T, N),
                        n && Tu) {
                            p = 0;
                            break t
                        }
                        break;
                    default:
                        N = Wt,
                        Wt = 0,
                        Wn = null,
                        Du(t, v, T, N)
                    }
                }
                yy(),
                p = ze;
                break
            } catch (V) {
                Dm(t, V)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        cl = Ta = null,
        Kt = l,
        R.H = s,
        R.A = c,
        Ht === null && (ne = null,
        Lt = 0,
        Us()),
        p
    }
    function yy() {
        for (; Ht !== null; )
            wm(Ht)
    }
    function Sy(t, e) {
        var n = Kt;
        Kt |= 2;
        var l = Mm()
          , s = Cm();
        ne !== t || Lt !== e ? (hc = null,
        fc = De() + 500,
        Au(t, e)) : Tu = pi(t, e);
        t: do
            try {
                if (Wt !== 0 && Ht !== null) {
                    e = Ht;
                    var c = Wn;
                    e: switch (Wt) {
                    case 1:
                        Wt = 0,
                        Wn = null,
                        Du(t, e, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (X0(c)) {
                            Wt = 0,
                            Wn = null,
                            Rm(e);
                            break
                        }
                        e = function() {
                            Wt !== 2 && Wt !== 9 || ne !== t || (Wt = 7),
                            Fi(t)
                        }
                        ,
                        c.then(e, e);
                        break t;
                    case 3:
                        Wt = 7;
                        break t;
                    case 4:
                        Wt = 5;
                        break t;
                    case 7:
                        X0(c) ? (Wt = 0,
                        Wn = null,
                        Rm(e)) : (Wt = 0,
                        Wn = null,
                        Du(t, e, c, 7));
                        break;
                    case 5:
                        var p = null;
                        switch (Ht.tag) {
                        case 26:
                            p = Ht.memoizedState;
                        case 5:
                        case 27:
                            var v = Ht;
                            if (p ? _g(p) : v.stateNode.complete) {
                                Wt = 0,
                                Wn = null;
                                var T = v.sibling;
                                if (T !== null)
                                    Ht = T;
                                else {
                                    var N = v.return;
                                    N !== null ? (Ht = N,
                                    mc(N)) : Ht = null
                                }
                                break e
                            }
                        }
                        Wt = 0,
                        Wn = null,
                        Du(t, e, c, 5);
                        break;
                    case 6:
                        Wt = 0,
                        Wn = null,
                        Du(t, e, c, 6);
                        break;
                    case 8:
                        th(),
                        ze = 6;
                        break t;
                    default:
                        throw Error(a(462))
                    }
                }
                by();
                break
            } catch (V) {
                Dm(t, V)
            }
        while (!0);
        return cl = Ta = null,
        R.H = l,
        R.A = s,
        Kt = n,
        Ht !== null ? 0 : (ne = null,
        Lt = 0,
        Us(),
        ze)
    }
    function by() {
        for (; Ht !== null && !Ni(); )
            wm(Ht)
    }
    function wm(t) {
        var e = em(t.alternate, t, yl);
        t.memoizedProps = t.pendingProps,
        e === null ? mc(t) : Ht = e
    }
    function Rm(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = Fp(n, e, e.pendingProps, e.type, void 0, Lt);
            break;
        case 11:
            e = Fp(n, e, e.pendingProps, e.type.render, e.ref, Lt);
            break;
        case 5:
            gf(e);
        default:
            im(n, e),
            e = Ht = C0(e, yl),
            e = em(n, e, yl)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? mc(t) : Ht = e
    }
    function Du(t, e, n, l) {
        cl = Ta = null,
        gf(e),
        gu = null,
        pr = 0;
        var s = e.return;
        try {
            if (cy(t, s, e, n, Lt)) {
                ze = 1,
                nc(t, Si(n, t.current)),
                Ht = null;
                return
            }
        } catch (c) {
            if (s !== null)
                throw Ht = s,
                c;
            ze = 1,
            nc(t, Si(n, t.current)),
            Ht = null;
            return
        }
        e.flags & 32768 ? (qt || l === 1 ? t = !0 : Tu || (Lt & 536870912) !== 0 ? t = !1 : (Gl = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Jn.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        Nm(e, t)) : mc(e)
    }
    function mc(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Nm(e, Gl);
                return
            }
            t = e.return;
            var n = hy(e.alternate, e, yl);
            if (n !== null) {
                Ht = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                Ht = e;
                return
            }
            Ht = e = t
        } while (e !== null);
        ze === 0 && (ze = 5)
    }
    function Nm(t, e) {
        do {
            var n = dy(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                Ht = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                Ht = t;
                return
            }
            Ht = t = n
        } while (t !== null);
        ze = 6,
        Ht = null
    }
    function Um(t, e, n, l, s, c, p, v, T) {
        t.cancelPendingCommit = null;
        do
            gc();
        while (Qe !== 0);
        if ((Kt & 6) !== 0)
            throw Error(a(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(a(177));
            if (c = e.lanes | e.childLanes,
            c |= Go,
            Vt(t, n, c, p, v, T),
            t === ne && (Ht = ne = null,
            Lt = 0),
            zu = e,
            Zl = t,
            Sl = n,
            $f = c,
            Pf = s,
            Tm = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            zy(sn, function() {
                return jm(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = R.T,
                R.T = null,
                s = Q.p,
                Q.p = 2,
                p = Kt,
                Kt |= 4;
                try {
                    py(t, e, n)
                } finally {
                    Kt = p,
                    Q.p = s,
                    R.T = l
                }
            }
            Qe = 1,
            Hm(),
            Bm(),
            Ym()
        }
    }
    function Hm() {
        if (Qe === 1) {
            Qe = 0;
            var t = Zl
              , e = zu
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = R.T,
                R.T = null;
                var l = Q.p;
                Q.p = 2;
                var s = Kt;
                Kt |= 4;
                try {
                    mm(e, t);
                    var c = dh
                      , p = b0(t.containerInfo)
                      , v = c.focusedElem
                      , T = c.selectionRange;
                    if (p !== v && v && v.ownerDocument && S0(v.ownerDocument.documentElement, v)) {
                        if (T !== null && Yo(v)) {
                            var N = T.start
                              , V = T.end;
                            if (V === void 0 && (V = N),
                            "selectionStart"in v)
                                v.selectionStart = N,
                                v.selectionEnd = Math.min(V, v.value.length);
                            else {
                                var K = v.ownerDocument || document
                                  , U = K && K.defaultView || window;
                                if (U.getSelection) {
                                    var B = U.getSelection()
                                      , it = v.textContent.length
                                      , mt = Math.min(T.start, it)
                                      , ee = T.end === void 0 ? mt : Math.min(T.end, it);
                                    !B.extend && mt > ee && (p = ee,
                                    ee = mt,
                                    mt = p);
                                    var O = y0(v, mt)
                                      , A = y0(v, ee);
                                    if (O && A && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B.focusNode !== A.node || B.focusOffset !== A.offset)) {
                                        var w = K.createRange();
                                        w.setStart(O.node, O.offset),
                                        B.removeAllRanges(),
                                        mt > ee ? (B.addRange(w),
                                        B.extend(A.node, A.offset)) : (w.setEnd(A.node, A.offset),
                                        B.addRange(w))
                                    }
                                }
                            }
                        }
                        for (K = [],
                        B = v; B = B.parentNode; )
                            B.nodeType === 1 && K.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < K.length; v++) {
                            var k = K[v];
                            k.element.scrollLeft = k.left,
                            k.element.scrollTop = k.top
                        }
                    }
                    Oc = !!hh,
                    dh = hh = null
                } finally {
                    Kt = s,
                    Q.p = l,
                    R.T = n
                }
            }
            t.current = e,
            Qe = 2
        }
    }
    function Bm() {
        if (Qe === 2) {
            Qe = 0;
            var t = Zl
              , e = zu
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = R.T,
                R.T = null;
                var l = Q.p;
                Q.p = 2;
                var s = Kt;
                Kt |= 4;
                try {
                    om(t, e.alternate, e)
                } finally {
                    Kt = s,
                    Q.p = l,
                    R.T = n
                }
            }
            Qe = 3
        }
    }
    function Ym() {
        if (Qe === 4 || Qe === 3) {
            Qe = 0,
            qi();
            var t = Zl
              , e = zu
              , n = Sl
              , l = Tm;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qe = 5 : (Qe = 0,
            zu = Zl = null,
            Lm(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Ql = null),
            Te(n),
            e = e.stateNode,
            pe && typeof pe.onCommitFiberRoot == "function")
                try {
                    pe.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = R.T,
                s = Q.p,
                Q.p = 2,
                R.T = null;
                try {
                    for (var c = t.onRecoverableError, p = 0; p < l.length; p++) {
                        var v = l[p];
                        c(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    R.T = e,
                    Q.p = s
                }
            }
            (Sl & 3) !== 0 && gc(),
            Fi(t),
            s = t.pendingLanes,
            (n & 261930) !== 0 && (s & 42) !== 0 ? t === If ? wr++ : (wr = 0,
            If = t) : wr = 0,
            Rr(0)
        }
    }
    function Lm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        hr(e)))
    }
    function gc() {
        return Hm(),
        Bm(),
        Ym(),
        jm()
    }
    function jm() {
        if (Qe !== 5)
            return !1;
        var t = Zl
          , e = $f;
        $f = 0;
        var n = Te(Sl)
          , l = R.T
          , s = Q.p;
        try {
            Q.p = 32 > n ? 32 : n,
            R.T = null,
            n = Pf,
            Pf = null;
            var c = Zl
              , p = Sl;
            if (Qe = 0,
            zu = Zl = null,
            Sl = 0,
            (Kt & 6) !== 0)
                throw Error(a(331));
            var v = Kt;
            if (Kt |= 4,
            Sm(c.current),
            _m(c, c.current, p, n),
            Kt = v,
            Rr(0, !1),
            pe && typeof pe.onPostCommitFiberRoot == "function")
                try {
                    pe.onPostCommitFiberRoot(Xi, c)
                } catch {}
            return !0
        } finally {
            Q.p = s,
            R.T = l,
            Lm(t, e)
        }
    }
    function qm(t, e, n) {
        e = Si(n, e),
        e = wf(t.stateNode, e, 2),
        t = Ll(t, e, 2),
        t !== null && (st(t, 2),
        Fi(t))
    }
    function $t(t, e, n) {
        if (t.tag === 3)
            qm(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    qm(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ql === null || !Ql.has(l))) {
                        t = Si(n, t),
                        n = Xp(2),
                        l = Ll(e, n, 2),
                        l !== null && (Gp(n, l, e, t),
                        st(l, 2),
                        Fi(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function nh(t, e, n) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new _y;
            var s = new Set;
            l.set(e, s)
        } else
            s = l.get(e),
            s === void 0 && (s = new Set,
            l.set(e, s));
        s.has(n) || (Jf = !0,
        s.add(n),
        t = xy.bind(null, t, e, n),
        e.then(t, t))
    }
    function xy(t, e, n) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        ne === t && (Lt & n) === n && (ze === 4 || ze === 3 && (Lt & 62914560) === Lt && 300 > De() - oc ? (Kt & 2) === 0 && Au(t, 0) : Ff |= n,
        Eu === Lt && (Eu = 0)),
        Fi(t)
    }
    function Xm(t, e) {
        e === 0 && (e = Ml()),
        t = Sa(t, e),
        t !== null && (st(t, e),
        Fi(t))
    }
    function Ty(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        Xm(t, n)
    }
    function Ey(t, e) {
        var n = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(a(314))
        }
        l !== null && l.delete(e),
        Xm(t, n)
    }
    function zy(t, e) {
        return oi(t, e)
    }
    var _c = null
      , Ou = null
      , ih = !1
      , vc = !1
      , lh = !1
      , Kl = 0;
    function Fi(t) {
        t !== Ou && t.next === null && (Ou === null ? _c = Ou = t : Ou = Ou.next = t),
        vc = !0,
        ih || (ih = !0,
        Dy())
    }
    function Rr(t, e) {
        if (!lh && vc) {
            lh = !0;
            do
                for (var n = !1, l = _c; l !== null; ) {
                    if (t !== 0) {
                        var s = l.pendingLanes;
                        if (s === 0)
                            var c = 0;
                        else {
                            var p = l.suspendedLanes
                              , v = l.pingedLanes;
                            c = (1 << 31 - He(42 | t) + 1) - 1,
                            c &= s & ~(p & ~v),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (n = !0,
                        Zm(l, c))
                    } else
                        c = Lt,
                        c = di(l, l === ne ? c : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (c & 3) === 0 || pi(l, c) || (n = !0,
                        Zm(l, c));
                    l = l.next
                }
            while (n);
            lh = !1
        }
    }
    function Ay() {
        Gm()
    }
    function Gm() {
        vc = ih = !1;
        var t = 0;
        Kl !== 0 && Yy() && (t = Kl);
        for (var e = De(), n = null, l = _c; l !== null; ) {
            var s = l.next
              , c = Vm(l, e);
            c === 0 ? (l.next = null,
            n === null ? _c = s : n.next = s,
            s === null && (Ou = n)) : (n = l,
            (t !== 0 || (c & 3) !== 0) && (vc = !0)),
            l = s
        }
        Qe !== 0 && Qe !== 5 || Rr(t),
        Kl !== 0 && (Kl = 0)
    }
    function Vm(t, e) {
        for (var n = t.suspendedLanes, l = t.pingedLanes, s = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
            var p = 31 - He(c)
              , v = 1 << p
              , T = s[p];
            T === -1 ? ((v & n) === 0 || (v & l) !== 0) && (s[p] = Hi(v, e)) : T <= e && (t.expiredLanes |= v),
            c &= ~v
        }
        if (e = ne,
        n = Lt,
        n = di(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        n === 0 || t === e && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && ae(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || pi(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (l !== null && ae(l),
            Te(n)) {
            case 2:
            case 8:
                n = oe;
                break;
            case 32:
                n = sn;
                break;
            case 268435456:
                n = fi;
                break;
            default:
                n = sn
            }
            return l = Qm.bind(null, t),
            n = oi(n, l),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return l !== null && l !== null && ae(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Qm(t, e) {
        if (Qe !== 0 && Qe !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (gc() && t.callbackNode !== n)
            return null;
        var l = Lt;
        return l = di(t, t === ne ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (zm(t, l, e),
        Vm(t, De()),
        t.callbackNode != null && t.callbackNode === n ? Qm.bind(null, t) : null)
    }
    function Zm(t, e) {
        if (gc())
            return null;
        zm(t, e, !0)
    }
    function Dy() {
        jy(function() {
            (Kt & 6) !== 0 ? oi(Ui, Ay) : Gm()
        })
    }
    function ah() {
        if (Kl === 0) {
            var t = du;
            t === 0 && (t = hi,
            hi <<= 1,
            (hi & 261888) === 0 && (hi = 256)),
            Kl = t
        }
        return Kl
    }
    function km(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : As("" + t)
    }
    function Km(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Oy(t, e, n, l, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var c = km((s[Dt] || null).action)
              , p = l.submitter;
            p && (e = (e = p[Dt] || null) ? km(e.formAction) : p.getAttribute("formAction"),
            e !== null && (c = e,
            p = null));
            var v = new Cs("action","action",null,l,s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Kl !== 0) {
                                var T = p ? Km(s, p) : new FormData(s);
                                zf(n, {
                                    pending: !0,
                                    data: T,
                                    method: s.method,
                                    action: c
                                }, null, T)
                            }
                        } else
                            typeof c == "function" && (v.preventDefault(),
                            T = p ? Km(s, p) : new FormData(s),
                            zf(n, {
                                pending: !0,
                                data: T,
                                method: s.method,
                                action: c
                            }, c, T))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var uh = 0; uh < Xo.length; uh++) {
        var rh = Xo[uh]
          , My = rh.toLowerCase()
          , Cy = rh[0].toUpperCase() + rh.slice(1);
        Bi(My, "on" + Cy)
    }
    Bi(E0, "onAnimationEnd"),
    Bi(z0, "onAnimationIteration"),
    Bi(A0, "onAnimationStart"),
    Bi("dblclick", "onDoubleClick"),
    Bi("focusin", "onFocus"),
    Bi("focusout", "onBlur"),
    Bi(kv, "onTransitionRun"),
    Bi(Kv, "onTransitionStart"),
    Bi(Jv, "onTransitionCancel"),
    Bi(D0, "onTransitionEnd"),
    mi("onMouseEnter", ["mouseout", "mouseover"]),
    mi("onMouseLeave", ["mouseout", "mouseover"]),
    mi("onPointerEnter", ["pointerout", "pointerover"]),
    mi("onPointerLeave", ["pointerout", "pointerover"]),
    Qi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Qi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Qi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Qi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , wy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));
    function Jm(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var l = t[n]
              , s = l.event;
            l = l.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var p = l.length - 1; 0 <= p; p--) {
                        var v = l[p]
                          , T = v.instance
                          , N = v.currentTarget;
                        if (v = v.listener,
                        T !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = N;
                        try {
                            c(s)
                        } catch (V) {
                            Ns(V)
                        }
                        s.currentTarget = null,
                        c = T
                    }
                else
                    for (p = 0; p < l.length; p++) {
                        if (v = l[p],
                        T = v.instance,
                        N = v.currentTarget,
                        v = v.listener,
                        T !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = N;
                        try {
                            c(s)
                        } catch (V) {
                            Ns(V)
                        }
                        s.currentTarget = null,
                        c = T
                    }
            }
        }
    }
    function Bt(t, e) {
        var n = e[vn];
        n === void 0 && (n = e[vn] = new Set);
        var l = t + "__bubble";
        n.has(l) || (Fm(e, t, 2, !1),
        n.add(l))
    }
    function sh(t, e, n) {
        var l = 0;
        e && (l |= 4),
        Fm(n, t, l, e)
    }
    var yc = "_reactListening" + Math.random().toString(36).slice(2);
    function ch(t) {
        if (!t[yc]) {
            t[yc] = !0,
            Zn.forEach(function(n) {
                n !== "selectionchange" && (wy.has(n) || sh(n, !1, t),
                sh(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[yc] || (e[yc] = !0,
            sh("selectionchange", !1, e))
        }
    }
    function Fm(t, e, n, l) {
        switch (Eg(e)) {
        case 2:
            var s = aS;
            break;
        case 8:
            s = uS;
            break;
        default:
            s = Eh
        }
        n = s.bind(null, e, n, t),
        s = void 0,
        !Oo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        l ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }
    function oh(t, e, n, l, s) {
        var c = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var p = l.tag;
                if (p === 3 || p === 4) {
                    var v = l.stateNode.containerInfo;
                    if (v === s)
                        break;
                    if (p === 4)
                        for (p = l.return; p !== null; ) {
                            var T = p.tag;
                            if ((T === 3 || T === 4) && p.stateNode.containerInfo === s)
                                return;
                            p = p.return
                        }
                    for (; v !== null; ) {
                        if (p = ge(v),
                        p === null)
                            return;
                        if (T = p.tag,
                        T === 5 || T === 6 || T === 26 || T === 27) {
                            l = c = p;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                l = l.return
            }
        t0(function() {
            var N = c
              , V = Ao(n)
              , K = [];
            t: {
                var U = O0.get(t);
                if (U !== void 0) {
                    var B = Cs
                      , it = t;
                    switch (t) {
                    case "keypress":
                        if (Os(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        B = Ev;
                        break;
                    case "focusin":
                        it = "focus",
                        B = Ro;
                        break;
                    case "focusout":
                        it = "blur",
                        B = Ro;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        B = Ro;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        B = i0;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        B = hv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        B = Dv;
                        break;
                    case E0:
                    case z0:
                    case A0:
                        B = mv;
                        break;
                    case D0:
                        B = Mv;
                        break;
                    case "scroll":
                    case "scrollend":
                        B = ov;
                        break;
                    case "wheel":
                        B = wv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        B = _v;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        B = a0;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        B = Nv
                    }
                    var mt = (e & 4) !== 0
                      , ee = !mt && (t === "scroll" || t === "scrollend")
                      , O = mt ? U !== null ? U + "Capture" : null : U;
                    mt = [];
                    for (var A = N, w; A !== null; ) {
                        var k = A;
                        if (w = k.stateNode,
                        k = k.tag,
                        k !== 5 && k !== 26 && k !== 27 || w === null || O === null || (k = er(A, O),
                        k != null && mt.push(Ur(A, k, w))),
                        ee)
                            break;
                        A = A.return
                    }
                    0 < mt.length && (U = new B(U,it,null,n,V),
                    K.push({
                        event: U,
                        listeners: mt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (U = t === "mouseover" || t === "pointerover",
                    B = t === "mouseout" || t === "pointerout",
                    U && n !== zo && (it = n.relatedTarget || n.fromElement) && (ge(it) || it[Gt]))
                        break t;
                    if ((B || U) && (U = V.window === V ? V : (U = V.ownerDocument) ? U.defaultView || U.parentWindow : window,
                    B ? (it = n.relatedTarget || n.toElement,
                    B = N,
                    it = it ? ge(it) : null,
                    it !== null && (ee = o(it),
                    mt = it.tag,
                    it !== ee || mt !== 5 && mt !== 27 && mt !== 6) && (it = null)) : (B = null,
                    it = N),
                    B !== it)) {
                        if (mt = i0,
                        k = "onMouseLeave",
                        O = "onMouseEnter",
                        A = "mouse",
                        (t === "pointerout" || t === "pointerover") && (mt = a0,
                        k = "onPointerLeave",
                        O = "onPointerEnter",
                        A = "pointer"),
                        ee = B == null ? U : Vi(B),
                        w = it == null ? U : Vi(it),
                        U = new mt(k,A + "leave",B,n,V),
                        U.target = ee,
                        U.relatedTarget = w,
                        k = null,
                        ge(V) === N && (mt = new mt(O,A + "enter",it,n,V),
                        mt.target = w,
                        mt.relatedTarget = ee,
                        k = mt),
                        ee = k,
                        B && it)
                            e: {
                                for (mt = Ry,
                                O = B,
                                A = it,
                                w = 0,
                                k = O; k; k = mt(k))
                                    w++;
                                k = 0;
                                for (var ot = A; ot; ot = mt(ot))
                                    k++;
                                for (; 0 < w - k; )
                                    O = mt(O),
                                    w--;
                                for (; 0 < k - w; )
                                    A = mt(A),
                                    k--;
                                for (; w--; ) {
                                    if (O === A || A !== null && O === A.alternate) {
                                        mt = O;
                                        break e
                                    }
                                    O = mt(O),
                                    A = mt(A)
                                }
                                mt = null
                            }
                        else
                            mt = null;
                        B !== null && Wm(K, U, B, mt, !1),
                        it !== null && ee !== null && Wm(K, ee, it, mt, !0)
                    }
                }
                t: {
                    if (U = N ? Vi(N) : window,
                    B = U.nodeName && U.nodeName.toLowerCase(),
                    B === "select" || B === "input" && U.type === "file")
                        var Qt = d0;
                    else if (f0(U))
                        if (p0)
                            Qt = Vv;
                        else {
                            Qt = Xv;
                            var at = qv
                        }
                    else
                        B = U.nodeName,
                        !B || B.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? N && Eo(N.elementType) && (Qt = d0) : Qt = Gv;
                    if (Qt && (Qt = Qt(t, N))) {
                        h0(K, Qt, n, V);
                        break t
                    }
                    at && at(t, U, N),
                    t === "focusout" && N && U.type === "number" && N.memoizedProps.value != null && To(U, "number", U.value)
                }
                switch (at = N ? Vi(N) : window,
                t) {
                case "focusin":
                    (f0(at) || at.contentEditable === "true") && (au = at,
                    Lo = N,
                    cr = null);
                    break;
                case "focusout":
                    cr = Lo = au = null;
                    break;
                case "mousedown":
                    jo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    jo = !1,
                    x0(K, n, V);
                    break;
                case "selectionchange":
                    if (Zv)
                        break;
                case "keydown":
                case "keyup":
                    x0(K, n, V)
                }
                var Et;
                if (Uo)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var jt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            jt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            jt = "onCompositionUpdate";
                            break t
                        }
                        jt = void 0
                    }
                else
                    lu ? c0(t, n) && (jt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (jt = "onCompositionStart");
                jt && (u0 && n.locale !== "ko" && (lu || jt !== "onCompositionStart" ? jt === "onCompositionEnd" && lu && (Et = e0()) : (wl = V,
                Mo = "value"in wl ? wl.value : wl.textContent,
                lu = !0)),
                at = Sc(N, jt),
                0 < at.length && (jt = new l0(jt,t,null,n,V),
                K.push({
                    event: jt,
                    listeners: at
                }),
                Et ? jt.data = Et : (Et = o0(n),
                Et !== null && (jt.data = Et)))),
                (Et = Hv ? Bv(t, n) : Yv(t, n)) && (jt = Sc(N, "onBeforeInput"),
                0 < jt.length && (at = new l0("onBeforeInput","beforeinput",null,n,V),
                K.push({
                    event: at,
                    listeners: jt
                }),
                at.data = Et)),
                Oy(K, t, N, n, V)
            }
            Jm(K, e)
        })
    }
    function Ur(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function Sc(t, e) {
        for (var n = e + "Capture", l = []; t !== null; ) {
            var s = t
              , c = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || c === null || (s = er(t, n),
            s != null && l.unshift(Ur(t, s, c)),
            s = er(t, e),
            s != null && l.push(Ur(t, s, c))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function Ry(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Wm(t, e, n, l, s) {
        for (var c = e._reactName, p = []; n !== null && n !== l; ) {
            var v = n
              , T = v.alternate
              , N = v.stateNode;
            if (v = v.tag,
            T !== null && T === l)
                break;
            v !== 5 && v !== 26 && v !== 27 || N === null || (T = N,
            s ? (N = er(n, c),
            N != null && p.unshift(Ur(n, N, T))) : s || (N = er(n, c),
            N != null && p.push(Ur(n, N, T)))),
            n = n.return
        }
        p.length !== 0 && t.push({
            event: e,
            listeners: p
        })
    }
    var Ny = /\r\n?/g
      , Uy = /\u0000|\uFFFD/g;
    function $m(t) {
        return (typeof t == "string" ? t : "" + t).replace(Ny, `
`).replace(Uy, "")
    }
    function Pm(t, e) {
        return e = $m(e),
        $m(t) === e
    }
    function te(t, e, n, l, s, c) {
        switch (n) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || eu(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && eu(t, "" + l);
            break;
        case "className":
            Es(t, "class", l);
            break;
        case "tabIndex":
            Es(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Es(t, n, l);
            break;
        case "style":
            Pd(t, l, c);
            break;
        case "data":
            if (e !== "object") {
                Es(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = As("" + l),
            t.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (n === "formAction" ? (e !== "input" && te(t, e, "name", s.name, s, null),
                te(t, e, "formEncType", s.formEncType, s, null),
                te(t, e, "formMethod", s.formMethod, s, null),
                te(t, e, "formTarget", s.formTarget, s, null)) : (te(t, e, "encType", s.encType, s, null),
                te(t, e, "method", s.method, s, null),
                te(t, e, "target", s.target, s, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = As("" + l),
            t.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (t.onclick = al);
            break;
        case "onScroll":
            l != null && Bt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Bt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(a(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(a(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = As("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
            break;
        case "popover":
            Bt("beforetoggle", t),
            Bt("toggle", t),
            Ts(t, "popover", l);
            break;
        case "xlinkActuate":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            ll(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            ll(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            ll(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            ll(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            Ts(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = sv.get(n) || n,
            Ts(t, n, l))
        }
    }
    function fh(t, e, n, l, s, c) {
        switch (n) {
        case "style":
            Pd(t, l, c);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(a(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(a(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? eu(t, l) : (typeof l == "number" || typeof l == "bigint") && eu(t, "" + l);
            break;
        case "onScroll":
            l != null && Bt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Bt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = al);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Ia.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    e = n.slice(2, s ? n.length - 7 : void 0),
                    c = t[Dt] || null,
                    c = c != null ? c[n] : null,
                    typeof c == "function" && t.removeEventListener(e, c, s),
                    typeof l == "function")) {
                        typeof c != "function" && c !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, l, s);
                        break t
                    }
                    n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Ts(t, n, l)
                }
        }
    }
    function ln(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Bt("error", t),
            Bt("load", t);
            var l = !1, s = !1, c;
            for (c in n)
                if (n.hasOwnProperty(c)) {
                    var p = n[c];
                    if (p != null)
                        switch (c) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(a(137, e));
                        default:
                            te(t, e, c, p, n, null)
                        }
                }
            s && te(t, e, "srcSet", n.srcSet, n, null),
            l && te(t, e, "src", n.src, n, null);
            return;
        case "input":
            Bt("invalid", t);
            var v = c = p = s = null
              , T = null
              , N = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var V = n[l];
                    if (V != null)
                        switch (l) {
                        case "name":
                            s = V;
                            break;
                        case "type":
                            p = V;
                            break;
                        case "checked":
                            T = V;
                            break;
                        case "defaultChecked":
                            N = V;
                            break;
                        case "value":
                            c = V;
                            break;
                        case "defaultValue":
                            v = V;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (V != null)
                                throw Error(a(137, e));
                            break;
                        default:
                            te(t, e, l, V, n, null)
                        }
                }
            Jd(t, c, v, T, N, p, s, !1);
            return;
        case "select":
            Bt("invalid", t),
            l = p = c = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (v = n[s],
                v != null))
                    switch (s) {
                    case "value":
                        c = v;
                        break;
                    case "defaultValue":
                        p = v;
                        break;
                    case "multiple":
                        l = v;
                    default:
                        te(t, e, s, v, n, null)
                    }
            e = c,
            n = p,
            t.multiple = !!l,
            e != null ? tu(t, !!l, e, !1) : n != null && tu(t, !!l, n, !0);
            return;
        case "textarea":
            Bt("invalid", t),
            c = s = l = null;
            for (p in n)
                if (n.hasOwnProperty(p) && (v = n[p],
                v != null))
                    switch (p) {
                    case "value":
                        l = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        c = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(a(91));
                        break;
                    default:
                        te(t, e, p, v, n, null)
                    }
            Wd(t, l, s, c);
            return;
        case "option":
            for (T in n)
                n.hasOwnProperty(T) && (l = n[T],
                l != null) && (T === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : te(t, e, T, l, n, null));
            return;
        case "dialog":
            Bt("beforetoggle", t),
            Bt("toggle", t),
            Bt("cancel", t),
            Bt("close", t);
            break;
        case "iframe":
        case "object":
            Bt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Nr.length; l++)
                Bt(Nr[l], t);
            break;
        case "image":
            Bt("error", t),
            Bt("load", t);
            break;
        case "details":
            Bt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            Bt("error", t),
            Bt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (N in n)
                if (n.hasOwnProperty(N) && (l = n[N],
                l != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(a(137, e));
                    default:
                        te(t, e, N, l, n, null)
                    }
            return;
        default:
            if (Eo(e)) {
                for (V in n)
                    n.hasOwnProperty(V) && (l = n[V],
                    l !== void 0 && fh(t, e, V, l, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (l = n[v],
            l != null && te(t, e, v, l, n, null))
    }
    function Hy(t, e, n, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , c = null
              , p = null
              , v = null
              , T = null
              , N = null
              , V = null;
            for (B in n) {
                var K = n[B];
                if (n.hasOwnProperty(B) && K != null)
                    switch (B) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        T = K;
                    default:
                        l.hasOwnProperty(B) || te(t, e, B, null, l, K)
                    }
            }
            for (var U in l) {
                var B = l[U];
                if (K = n[U],
                l.hasOwnProperty(U) && (B != null || K != null))
                    switch (U) {
                    case "type":
                        c = B;
                        break;
                    case "name":
                        s = B;
                        break;
                    case "checked":
                        N = B;
                        break;
                    case "defaultChecked":
                        V = B;
                        break;
                    case "value":
                        p = B;
                        break;
                    case "defaultValue":
                        v = B;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (B != null)
                            throw Error(a(137, e));
                        break;
                    default:
                        B !== K && te(t, e, U, B, l, K)
                    }
            }
            xo(t, p, v, T, N, V, c, s);
            return;
        case "select":
            B = p = v = U = null;
            for (c in n)
                if (T = n[c],
                n.hasOwnProperty(c) && T != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        B = T;
                    default:
                        l.hasOwnProperty(c) || te(t, e, c, null, l, T)
                    }
            for (s in l)
                if (c = l[s],
                T = n[s],
                l.hasOwnProperty(s) && (c != null || T != null))
                    switch (s) {
                    case "value":
                        U = c;
                        break;
                    case "defaultValue":
                        v = c;
                        break;
                    case "multiple":
                        p = c;
                    default:
                        c !== T && te(t, e, s, c, l, T)
                    }
            e = v,
            n = p,
            l = B,
            U != null ? tu(t, !!n, U, !1) : !!l != !!n && (e != null ? tu(t, !!n, e, !0) : tu(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            B = U = null;
            for (v in n)
                if (s = n[v],
                n.hasOwnProperty(v) && s != null && !l.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        te(t, e, v, null, l, s)
                    }
            for (p in l)
                if (s = l[p],
                c = n[p],
                l.hasOwnProperty(p) && (s != null || c != null))
                    switch (p) {
                    case "value":
                        U = s;
                        break;
                    case "defaultValue":
                        B = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(a(91));
                        break;
                    default:
                        s !== c && te(t, e, p, s, l, c)
                    }
            Fd(t, U, B);
            return;
        case "option":
            for (var it in n)
                U = n[it],
                n.hasOwnProperty(it) && U != null && !l.hasOwnProperty(it) && (it === "selected" ? t.selected = !1 : te(t, e, it, null, l, U));
            for (T in l)
                U = l[T],
                B = n[T],
                l.hasOwnProperty(T) && U !== B && (U != null || B != null) && (T === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : te(t, e, T, U, l, B));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var mt in n)
                U = n[mt],
                n.hasOwnProperty(mt) && U != null && !l.hasOwnProperty(mt) && te(t, e, mt, null, l, U);
            for (N in l)
                if (U = l[N],
                B = n[N],
                l.hasOwnProperty(N) && U !== B && (U != null || B != null))
                    switch (N) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(a(137, e));
                        break;
                    default:
                        te(t, e, N, U, l, B)
                    }
            return;
        default:
            if (Eo(e)) {
                for (var ee in n)
                    U = n[ee],
                    n.hasOwnProperty(ee) && U !== void 0 && !l.hasOwnProperty(ee) && fh(t, e, ee, void 0, l, U);
                for (V in l)
                    U = l[V],
                    B = n[V],
                    !l.hasOwnProperty(V) || U === B || U === void 0 && B === void 0 || fh(t, e, V, U, l, B);
                return
            }
        }
        for (var O in n)
            U = n[O],
            n.hasOwnProperty(O) && U != null && !l.hasOwnProperty(O) && te(t, e, O, null, l, U);
        for (K in l)
            U = l[K],
            B = n[K],
            !l.hasOwnProperty(K) || U === B || U == null && B == null || te(t, e, K, U, l, B)
    }
    function Im(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function By() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
                var s = n[l]
                  , c = s.transferSize
                  , p = s.initiatorType
                  , v = s.duration;
                if (c && v && Im(p)) {
                    for (p = 0,
                    v = s.responseEnd,
                    l += 1; l < n.length; l++) {
                        var T = n[l]
                          , N = T.startTime;
                        if (N > v)
                            break;
                        var V = T.transferSize
                          , K = T.initiatorType;
                        V && Im(K) && (T = T.responseEnd,
                        p += V * (T < v ? 1 : (v - N) / (T - N)))
                    }
                    if (--l,
                    e += 8 * (c + p) / (s.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var hh = null
      , dh = null;
    function bc(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function tg(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function eg(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function ph(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var mh = null;
    function Yy() {
        var t = window.event;
        return t && t.type === "popstate" ? t === mh ? !1 : (mh = t,
        !0) : (mh = null,
        !1)
    }
    var ng = typeof setTimeout == "function" ? setTimeout : void 0
      , Ly = typeof clearTimeout == "function" ? clearTimeout : void 0
      , ig = typeof Promise == "function" ? Promise : void 0
      , jy = typeof queueMicrotask == "function" ? queueMicrotask : typeof ig < "u" ? function(t) {
        return ig.resolve(null).then(t).catch(qy)
    }
    : ng;
    function qy(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Jl(t) {
        return t === "head"
    }
    function lg(t, e) {
        var n = e
          , l = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n),
            s && s.nodeType === 8)
                if (n = s.data,
                n === "/$" || n === "/&") {
                    if (l === 0) {
                        t.removeChild(s),
                        Ru(e);
                        return
                    }
                    l--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    l++;
                else if (n === "html")
                    Hr(t.ownerDocument.documentElement);
                else if (n === "head") {
                    n = t.ownerDocument.head,
                    Hr(n);
                    for (var c = n.firstChild; c; ) {
                        var p = c.nextSibling
                          , v = c.nodeName;
                        c[me] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c),
                        c = p
                    }
                } else
                    n === "body" && Hr(t.ownerDocument.body);
            n = s
        } while (n);
        Ru(e)
    }
    function ag(t, e) {
        var n = t;
        t = 0;
        do {
            var l = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = l
        } while (n)
    }
    function gh(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                gh(n),
                Oe(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function Xy(t, e, n, l) {
        for (; t.nodeType === 1; ) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[me])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (c = t.getAttribute("rel"),
                        c === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (c !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (c = t.getAttribute("src"),
                        (c !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === c)
                    return t
            } else
                return t;
            if (t = zi(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function Gy(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = zi(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function ug(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = zi(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function _h(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function vh(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function Vy(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function zi(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var yh = null;
    function rg(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0)
                        return zi(t.nextSibling);
                    e--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function sg(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function cg(t, e, n) {
        switch (e = bc(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(a(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(a(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(a(454));
            return t;
        default:
            throw Error(a(451))
        }
    }
    function Hr(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        Oe(t)
    }
    var Ai = new Map
      , og = new Set;
    function xc(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var bl = Q.d;
    Q.d = {
        f: Qy,
        r: Zy,
        D: ky,
        C: Ky,
        L: Jy,
        m: Fy,
        X: $y,
        S: Wy,
        M: Py
    };
    function Qy() {
        var t = bl.f()
          , e = dc();
        return t || e
    }
    function Zy(t) {
        var e = Mn(t);
        e !== null && e.tag === 5 && e.type === "form" ? Dp(e) : bl.r(t)
    }
    var Mu = typeof document > "u" ? null : document;
    function fg(t, e, n) {
        var l = Mu;
        if (l && typeof e == "string" && e) {
            var s = vi(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            og.has(s) || (og.add(s),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            l.querySelector(s) === null && (e = l.createElement("link"),
            ln(e, "link", t),
            Rt(e),
            l.head.appendChild(e)))
        }
    }
    function ky(t) {
        bl.D(t),
        fg("dns-prefetch", t, null)
    }
    function Ky(t, e) {
        bl.C(t, e),
        fg("preconnect", t, e)
    }
    function Jy(t, e, n) {
        bl.L(t, e, n);
        var l = Mu;
        if (l && t && e) {
            var s = 'link[rel="preload"][as="' + vi(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + vi(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + vi(n.imageSizes) + '"]')) : s += '[href="' + vi(t) + '"]';
            var c = s;
            switch (e) {
            case "style":
                c = Cu(t);
                break;
            case "script":
                c = wu(t)
            }
            Ai.has(c) || (t = S({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Ai.set(c, t),
            l.querySelector(s) !== null || e === "style" && l.querySelector(Br(c)) || e === "script" && l.querySelector(Yr(c)) || (e = l.createElement("link"),
            ln(e, "link", t),
            Rt(e),
            l.head.appendChild(e)))
        }
    }
    function Fy(t, e) {
        bl.m(t, e);
        var n = Mu;
        if (n && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + vi(l) + '"][href="' + vi(t) + '"]'
              , c = s;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = wu(t)
            }
            if (!Ai.has(c) && (t = S({
                rel: "modulepreload",
                href: t
            }, e),
            Ai.set(c, t),
            n.querySelector(s) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Yr(c)))
                        return
                }
                l = n.createElement("link"),
                ln(l, "link", t),
                Rt(l),
                n.head.appendChild(l)
            }
        }
    }
    function Wy(t, e, n) {
        bl.S(t, e, n);
        var l = Mu;
        if (l && t) {
            var s = _e(l).hoistableStyles
              , c = Cu(t);
            e = e || "default";
            var p = s.get(c);
            if (!p) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (p = l.querySelector(Br(c)))
                    v.loading = 5;
                else {
                    t = S({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Ai.get(c)) && Sh(t, n);
                    var T = p = l.createElement("link");
                    Rt(T),
                    ln(T, "link", t),
                    T._p = new Promise(function(N, V) {
                        T.onload = N,
                        T.onerror = V
                    }
                    ),
                    T.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    T.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    Tc(p, e, l)
                }
                p = {
                    type: "stylesheet",
                    instance: p,
                    count: 1,
                    state: v
                },
                s.set(c, p)
            }
        }
    }
    function $y(t, e) {
        bl.X(t, e);
        var n = Mu;
        if (n && t) {
            var l = _e(n).hoistableScripts
              , s = wu(t)
              , c = l.get(s);
            c || (c = n.querySelector(Yr(s)),
            c || (t = S({
                src: t,
                async: !0
            }, e),
            (e = Ai.get(s)) && bh(t, e),
            c = n.createElement("script"),
            Rt(c),
            ln(c, "link", t),
            n.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function Py(t, e) {
        bl.M(t, e);
        var n = Mu;
        if (n && t) {
            var l = _e(n).hoistableScripts
              , s = wu(t)
              , c = l.get(s);
            c || (c = n.querySelector(Yr(s)),
            c || (t = S({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ai.get(s)) && bh(t, e),
            c = n.createElement("script"),
            Rt(c),
            ln(c, "link", t),
            n.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function hg(t, e, n, l) {
        var s = (s = ft.current) ? xc(s) : null;
        if (!s)
            throw Error(a(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Cu(n.href),
            n = _e(s).hoistableStyles,
            l = n.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = Cu(n.href);
                var c = _e(s).hoistableStyles
                  , p = c.get(t);
                if (p || (s = s.ownerDocument || s,
                p = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(t, p),
                (c = s.querySelector(Br(t))) && !c._p && (p.instance = c,
                p.state.loading = 5),
                Ai.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Ai.set(t, n),
                c || Iy(s, t, n, p.state))),
                e && l === null)
                    throw Error(a(528, ""));
                return p
            }
            if (e && l !== null)
                throw Error(a(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = wu(n),
            n = _e(s).hoistableScripts,
            l = n.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(a(444, t))
        }
    }
    function Cu(t) {
        return 'href="' + vi(t) + '"'
    }
    function Br(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function dg(t) {
        return S({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Iy(t, e, n, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        ln(e, "link", n),
        Rt(e),
        t.head.appendChild(e))
    }
    function wu(t) {
        return '[src="' + vi(t) + '"]'
    }
    function Yr(t) {
        return "script[async]" + t
    }
    function pg(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + vi(n.href) + '"]');
                if (l)
                    return e.instance = l,
                    Rt(l),
                    l;
                var s = S({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                Rt(l),
                ln(l, "style", s),
                Tc(l, n.precedence, t),
                e.instance = l;
            case "stylesheet":
                s = Cu(n.href);
                var c = t.querySelector(Br(s));
                if (c)
                    return e.state.loading |= 4,
                    e.instance = c,
                    Rt(c),
                    c;
                l = dg(n),
                (s = Ai.get(s)) && Sh(l, s),
                c = (t.ownerDocument || t).createElement("link"),
                Rt(c);
                var p = c;
                return p._p = new Promise(function(v, T) {
                    p.onload = v,
                    p.onerror = T
                }
                ),
                ln(c, "link", l),
                e.state.loading |= 4,
                Tc(c, n.precedence, t),
                e.instance = c;
            case "script":
                return c = wu(n.src),
                (s = t.querySelector(Yr(c))) ? (e.instance = s,
                Rt(s),
                s) : (l = n,
                (s = Ai.get(c)) && (l = S({}, n),
                bh(l, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                Rt(s),
                ln(s, "link", l),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(a(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            Tc(l, n.precedence, t));
        return e.instance
    }
    function Tc(t, e, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, c = s, p = 0; p < l.length; p++) {
            var v = l[p];
            if (v.dataset.precedence === e)
                c = v;
            else if (c !== s)
                break
        }
        c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function Sh(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function bh(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Ec = null;
    function mg(t, e, n) {
        if (Ec === null) {
            var l = new Map
              , s = Ec = new Map;
            s.set(n, l)
        } else
            s = Ec,
            l = s.get(n),
            l || (l = new Map,
            s.set(n, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        n = n.getElementsByTagName(t),
        s = 0; s < n.length; s++) {
            var c = n[s];
            if (!(c[me] || c[zt] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var p = c.getAttribute(e) || "";
                p = t + p;
                var v = l.get(p);
                v ? v.push(c) : l.set(p, [c])
            }
        }
        return l
    }
    function gg(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function tS(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled,
            typeof e.precedence == "string" && t == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function _g(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function eS(t, e, n, l) {
        if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = Cu(l.href)
                  , c = e.querySelector(Br(s));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = zc.bind(t),
                    e.then(t, t)),
                    n.state.loading |= 4,
                    n.instance = c,
                    Rt(c);
                    return
                }
                c = e.ownerDocument || e,
                l = dg(l),
                (s = Ai.get(s)) && Sh(l, s),
                c = c.createElement("link"),
                Rt(c);
                var p = c;
                p._p = new Promise(function(v, T) {
                    p.onload = v,
                    p.onerror = T
                }
                ),
                ln(c, "link", l),
                n.instance = c
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(n, e),
            (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++,
            n = zc.bind(t),
            e.addEventListener("load", n),
            e.addEventListener("error", n))
        }
    }
    var xh = 0;
    function nS(t, e) {
        return t.stylesheets && t.count === 0 && Dc(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(n) {
            var l = setTimeout(function() {
                if (t.stylesheets && Dc(t, t.stylesheets),
                t.unsuspend) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, 6e4 + e);
            0 < t.imgBytes && xh === 0 && (xh = 62500 * By());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && Dc(t, t.stylesheets),
                t.unsuspend)) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, (t.imgBytes > xh ? 50 : 800) + e);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(s)
            }
        }
        : null
    }
    function zc() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Dc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Ac = null;
    function Dc(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Ac = new Map,
        e.forEach(iS, t),
        Ac = null,
        zc.call(t))
    }
    function iS(t, e) {
        if (!(e.state.loading & 4)) {
            var n = Ac.get(t);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                Ac.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++) {
                    var p = s[c];
                    (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p),
                    l = p)
                }
                l && n.set(null, l)
            }
            s = e.instance,
            p = s.getAttribute("data-precedence"),
            c = n.get(p) || l,
            c === l && n.set(null, s),
            n.set(p, s),
            this.count++,
            l = zc.bind(this),
            s.addEventListener("load", l),
            s.addEventListener("error", l),
            c ? c.parentNode.insertBefore(s, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Lr = {
        $$typeof: q,
        Provider: null,
        Consumer: null,
        _currentValue: et,
        _currentValue2: et,
        _threadCount: 0
    };
    function lS(t, e, n, l, s, c, p, v, T) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = vt(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = vt(0),
        this.hiddenUpdates = vt(null),
        this.identifierPrefix = l,
        this.onUncaughtError = s,
        this.onCaughtError = c,
        this.onRecoverableError = p,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = T,
        this.incompleteTransitions = new Map
    }
    function vg(t, e, n, l, s, c, p, v, T, N, V, K) {
        return t = new lS(t,e,n,p,T,N,V,K,v),
        e = 1,
        c === !0 && (e |= 24),
        c = Kn(3, null, null, e),
        t.current = c,
        c.stateNode = t,
        e = tf(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        c.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: e
        },
        af(c),
        t
    }
    function yg(t) {
        return t ? (t = su,
        t) : su
    }
    function Sg(t, e, n, l, s, c) {
        s = yg(s),
        l.context === null ? l.context = s : l.pendingContext = s,
        l = Yl(e),
        l.payload = {
            element: n
        },
        c = c === void 0 ? null : c,
        c !== null && (l.callback = c),
        n = Ll(t, l, e),
        n !== null && (Hn(n, t, e),
        gr(n, t, e))
    }
    function bg(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function Th(t, e) {
        bg(t, e),
        (t = t.alternate) && bg(t, e)
    }
    function xg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Sa(t, 67108864);
            e !== null && Hn(e, t, 67108864),
            Th(t, 67108864)
        }
    }
    function Tg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Pn();
            e = gt(e);
            var n = Sa(t, e);
            n !== null && Hn(n, t, e),
            Th(t, e)
        }
    }
    var Oc = !0;
    function aS(t, e, n, l) {
        var s = R.T;
        R.T = null;
        var c = Q.p;
        try {
            Q.p = 2,
            Eh(t, e, n, l)
        } finally {
            Q.p = c,
            R.T = s
        }
    }
    function uS(t, e, n, l) {
        var s = R.T;
        R.T = null;
        var c = Q.p;
        try {
            Q.p = 8,
            Eh(t, e, n, l)
        } finally {
            Q.p = c,
            R.T = s
        }
    }
    function Eh(t, e, n, l) {
        if (Oc) {
            var s = zh(l);
            if (s === null)
                oh(t, e, l, Mc, n),
                zg(t, l);
            else if (sS(s, t, e, n, l))
                l.stopPropagation();
            else if (zg(t, l),
            e & 4 && -1 < rS.indexOf(t)) {
                for (; s !== null; ) {
                    var c = Mn(s);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var p = Ve(c.pendingLanes);
                                if (p !== 0) {
                                    var v = c;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; p; ) {
                                        var T = 1 << 31 - He(p);
                                        v.entanglements[1] |= T,
                                        p &= ~T
                                    }
                                    Fi(c),
                                    (Kt & 6) === 0 && (fc = De() + 500,
                                    Rr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = Sa(c, 2),
                            v !== null && Hn(v, c, 2),
                            dc(),
                            Th(c, 2)
                        }
                    if (c = zh(l),
                    c === null && oh(t, e, l, Mc, n),
                    c === s)
                        break;
                    s = c
                }
                s !== null && l.stopPropagation()
            } else
                oh(t, e, l, null, n)
        }
    }
    function zh(t) {
        return t = Ao(t),
        Ah(t)
    }
    var Mc = null;
    function Ah(t) {
        if (Mc = null,
        t = ge(t),
        t !== null) {
            var e = o(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 31) {
                    if (t = d(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Mc = t,
        null
    }
    function Eg(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ue()) {
            case Ui:
                return 2;
            case oe:
                return 8;
            case sn:
            case On:
                return 32;
            case fi:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Dh = !1
      , Fl = null
      , Wl = null
      , $l = null
      , jr = new Map
      , qr = new Map
      , Pl = []
      , rS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zg(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Fl = null;
            break;
        case "dragenter":
        case "dragleave":
            Wl = null;
            break;
        case "mouseover":
        case "mouseout":
            $l = null;
            break;
        case "pointerover":
        case "pointerout":
            jr.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            qr.delete(e.pointerId)
        }
    }
    function Xr(t, e, n, l, s, c) {
        return t === null || t.nativeEvent !== c ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: c,
            targetContainers: [s]
        },
        e !== null && (e = Mn(e),
        e !== null && xg(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function sS(t, e, n, l, s) {
        switch (e) {
        case "focusin":
            return Fl = Xr(Fl, t, e, n, l, s),
            !0;
        case "dragenter":
            return Wl = Xr(Wl, t, e, n, l, s),
            !0;
        case "mouseover":
            return $l = Xr($l, t, e, n, l, s),
            !0;
        case "pointerover":
            var c = s.pointerId;
            return jr.set(c, Xr(jr.get(c) || null, t, e, n, l, s)),
            !0;
        case "gotpointercapture":
            return c = s.pointerId,
            qr.set(c, Xr(qr.get(c) || null, t, e, n, l, s)),
            !0
        }
        return !1
    }
    function Ag(t) {
        var e = ge(t.target);
        if (e !== null) {
            var n = o(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = h(n),
                    e !== null) {
                        t.blockedOn = e,
                        fe(t.priority, function() {
                            Tg(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = d(n),
                    e !== null) {
                        t.blockedOn = e,
                        fe(t.priority, function() {
                            Tg(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Cc(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = zh(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var l = new n.constructor(n.type,n);
                zo = l,
                n.target.dispatchEvent(l),
                zo = null
            } else
                return e = Mn(n),
                e !== null && xg(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Dg(t, e, n) {
        Cc(t) && n.delete(e)
    }
    function cS() {
        Dh = !1,
        Fl !== null && Cc(Fl) && (Fl = null),
        Wl !== null && Cc(Wl) && (Wl = null),
        $l !== null && Cc($l) && ($l = null),
        jr.forEach(Dg),
        qr.forEach(Dg)
    }
    function wc(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Dh || (Dh = !0,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, cS)))
    }
    var Rc = null;
    function Og(t) {
        Rc !== t && (Rc = t,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            Rc === t && (Rc = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , l = t[e + 1]
                  , s = t[e + 2];
                if (typeof l != "function") {
                    if (Ah(l || n) === null)
                        continue;
                    break
                }
                var c = Mn(n);
                c !== null && (t.splice(e, 3),
                e -= 3,
                zf(c, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: l
                }, l, s))
            }
        }))
    }
    function Ru(t) {
        function e(T) {
            return wc(T, t)
        }
        Fl !== null && wc(Fl, t),
        Wl !== null && wc(Wl, t),
        $l !== null && wc($l, t),
        jr.forEach(e),
        qr.forEach(e);
        for (var n = 0; n < Pl.length; n++) {
            var l = Pl[n];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < Pl.length && (n = Pl[0],
        n.blockedOn === null); )
            Ag(n),
            n.blockedOn === null && Pl.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var s = n[l]
                  , c = n[l + 1]
                  , p = s[Dt] || null;
                if (typeof c == "function")
                    p || Og(n);
                else if (p) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (s = c,
                        p = c[Dt] || null)
                            v = p.formAction;
                        else if (Ah(s) !== null)
                            continue
                    } else
                        v = p.action;
                    typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3),
                    l -= 3),
                    Og(n)
                }
            }
    }
    function Mg() {
        function t(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(p) {
                        return s = p
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            l || setTimeout(n, 20)
        }
        function n() {
            if (!l && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , s = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(n, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function Oh(t) {
        this._internalRoot = t
    }
    Nc.prototype.render = Oh.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(a(409));
        var n = e.current
          , l = Pn();
        Sg(n, l, t, e, null, null)
    }
    ,
    Nc.prototype.unmount = Oh.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Sg(t.current, 2, null, t, null, null),
            dc(),
            e[Gt] = null
        }
    }
    ;
    function Nc(t) {
        this._internalRoot = t
    }
    Nc.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = wt();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < Pl.length && e !== 0 && e < Pl[n].priority; n++)
                ;
            Pl.splice(n, 0, t),
            n === 0 && Ag(t)
        }
    }
    ;
    var Cg = i.version;
    if (Cg !== "19.2.7")
        throw Error(a(527, Cg, "19.2.7"));
    Q.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","),
            Error(a(268, t)));
        return t = g(e),
        t = t !== null ? _(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var oS = {
        bundleType: 0,
        version: "19.2.7",
        rendererPackageName: "react-dom",
        currentDispatcherRef: R,
        reconcilerVersion: "19.2.7"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Uc.isDisabled && Uc.supportsFiber)
            try {
                Xi = Uc.inject(oS),
                pe = Uc
            } catch {}
    }
    return Vr.createRoot = function(t, e) {
        if (!r(t))
            throw Error(a(299));
        var n = !1
          , l = ""
          , s = Yp
          , c = Lp
          , p = jp;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
        e = vg(t, 1, !1, null, null, n, l, null, s, c, p, Mg),
        t[Gt] = e.current,
        ch(t),
        new Oh(e)
    }
    ,
    Vr.hydrateRoot = function(t, e, n) {
        if (!r(t))
            throw Error(a(299));
        var l = !1
          , s = ""
          , c = Yp
          , p = Lp
          , v = jp
          , T = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
        n.onCaughtError !== void 0 && (p = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.formState !== void 0 && (T = n.formState)),
        e = vg(t, 1, !0, e, n ?? null, l, s, T, c, p, v, Mg),
        e.context = yg(null),
        n = e.current,
        l = Pn(),
        l = gt(l),
        s = Yl(l),
        s.callback = null,
        Ll(n, s, l),
        n = l,
        e.current.lanes = n,
        st(e, n),
        Fi(e),
        t[Gt] = e.current,
        ch(t),
        new Nc(e)
    }
    ,
    Vr.version = "19.2.7",
    Vr
}
var qg;
function SS() {
    if (qg)
        return Ch.exports;
    qg = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (i) {
                console.error(i)
            }
    }
    return f(),
    Ch.exports = yS(),
    Ch.exports
}
var bS = SS()
  , Mt = yd()
  , Xg = "1.3.23";
function R_(f, i, u) {
    return Math.max(f, Math.min(i, u))
}
function xS(f, i, u) {
    return (1 - u) * f + u * i
}
function TS(f, i, u, a) {
    return xS(f, i, 1 - Math.exp(-u * a))
}
function ES(f, i) {
    return (f % i + i) % i
}
var zS = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(f) {
        if (!this.isRunning)
            return;
        let i = !1;
        if (this.duration && this.easing) {
            this.currentTime += f;
            const u = R_(0, this.currentTime / this.duration, 1);
            i = u >= 1;
            const a = i ? 1 : this.easing(u);
            this.value = this.from + (this.to - this.from) * a
        } else
            this.lerp ? (this.value = TS(this.value, this.to, this.lerp * 60, f),
            Math.round(this.value) === Math.round(this.to) && (this.value = this.to,
            i = !0)) : (this.value = this.to,
            i = !0);
        i && this.stop(),
        this.onUpdate?.(this.value, i)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(f, i, {lerp: u, duration: a, easing: r, onStart: o, onUpdate: h}) {
        this.from = this.value = f,
        this.to = i,
        this.lerp = u,
        this.duration = a,
        this.easing = r,
        this.currentTime = 0,
        this.isRunning = !0,
        o?.(),
        this.onUpdate = h
    }
}
;
function AS(f, i) {
    let u;
    return function(...a) {
        clearTimeout(u),
        u = setTimeout( () => {
            u = void 0,
            f.apply(this, a)
        }
        , i)
    }
}
var DS = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(f, i, {autoResize: u=!0, debounce: a=250}={}) {
        this.wrapper = f,
        this.content = i,
        u && (this.debouncedResize = AS(this.resize, a),
        this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
    }
    resize = () => {
        this.onWrapperResize(),
        this.onContentResize()
    }
    ;
    onWrapperResize = () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth,
        this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
        this.height = this.wrapper.clientHeight)
    }
    ;
    onContentResize = () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
        this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
        this.scrollWidth = this.wrapper.scrollWidth)
    }
    ;
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
  , N_ = class {
    events = {};
    emit(f, ...i) {
        const u = this.events[f] || [];
        for (let a = 0, r = u.length; a < r; a++)
            u[a]?.(...i)
    }
    on(f, i) {
        return this.events[f] ? this.events[f].push(i) : this.events[f] = [i],
        () => {
            this.events[f] = this.events[f]?.filter(u => i !== u)
        }
    }
    off(f, i) {
        this.events[f] = this.events[f]?.filter(u => i !== u)
    }
    destroy() {
        this.events = {}
    }
}
;
const OS = 100 / 6
  , ta = {
    passive: !1
};
function Gg(f, i) {
    return f === 1 ? OS : f === 2 ? i : 1
}
var MS = class {
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new N_;
    constructor(f, i={
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        this.element = f,
        this.options = i,
        window.addEventListener("resize", this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, ta),
        this.element.addEventListener("touchstart", this.onTouchStart, ta),
        this.element.addEventListener("touchmove", this.onTouchMove, ta),
        this.element.addEventListener("touchend", this.onTouchEnd, ta)
    }
    on(f, i) {
        return this.emitter.on(f, i)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize),
        this.element.removeEventListener("wheel", this.onWheel, ta),
        this.element.removeEventListener("touchstart", this.onTouchStart, ta),
        this.element.removeEventListener("touchmove", this.onTouchMove, ta),
        this.element.removeEventListener("touchend", this.onTouchEnd, ta)
    }
    onTouchStart = f => {
        const {clientX: i, clientY: u} = f.targetTouches ? f.targetTouches[0] : f;
        this.touchStart.x = i,
        this.touchStart.y = u,
        this.lastDelta = {
            x: 0,
            y: 0
        },
        this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event: f
        })
    }
    ;
    onTouchMove = f => {
        const {clientX: i, clientY: u} = f.targetTouches ? f.targetTouches[0] : f
          , a = -(i - this.touchStart.x) * this.options.touchMultiplier
          , r = -(u - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = i,
        this.touchStart.y = u,
        this.lastDelta = {
            x: a,
            y: r
        },
        this.emitter.emit("scroll", {
            deltaX: a,
            deltaY: r,
            event: f
        })
    }
    ;
    onTouchEnd = f => {
        this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: f
        })
    }
    ;
    onWheel = f => {
        let {deltaX: i, deltaY: u, deltaMode: a} = f;
        const r = Gg(a, this.window.width)
          , o = Gg(a, this.window.height);
        i *= r,
        u *= o,
        i *= this.options.wheelMultiplier,
        u *= this.options.wheelMultiplier,
        this.emitter.emit("scroll", {
            deltaX: i,
            deltaY: u,
            event: f
        })
    }
    ;
    onWindowResize = () => {
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
;
const Vg = f => Math.min(1, 1.001 - 2 ** (-10 * f));
var CS = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new zS;
    emitter = new N_;
    dimensions;
    virtualScroll;
    constructor({wrapper: f=window, content: i=document.documentElement, eventsTarget: u=f, smoothWheel: a=!0, syncTouch: r=!1, syncTouchLerp: o=.075, touchInertiaExponent: h=1.7, duration: d, easing: m, lerp: g=.1, infinite: _=!1, orientation: S="vertical", gestureOrientation: b=S === "horizontal" ? "both" : "vertical", touchMultiplier: y=1, wheelMultiplier: E=1, autoResize: x=!0, prevent: M, virtualScroll: L, overscroll: Y=!0, autoRaf: q=!1, anchors: H=!1, autoToggle: X=!1, allowNestedScroll: F=!1, __experimental__naiveDimensions: C=!1, naiveDimensions: $=C, stopInertiaOnNavigate: J=!1}={}) {
        window.lenisVersion = Xg,
        window.lenis || (window.lenis = {}),
        window.lenis.version = Xg,
        S === "horizontal" && (window.lenis.horizontal = !0),
        r === !0 && (window.lenis.touch = !0),
        (!f || f === document.documentElement) && (f = window),
        typeof d == "number" && typeof m != "function" ? m = Vg : typeof m == "function" && typeof d != "number" && (d = 1),
        this.options = {
            wrapper: f,
            content: i,
            eventsTarget: u,
            smoothWheel: a,
            syncTouch: r,
            syncTouchLerp: o,
            touchInertiaExponent: h,
            duration: d,
            easing: m,
            lerp: g,
            infinite: _,
            gestureOrientation: b,
            orientation: S,
            touchMultiplier: y,
            wheelMultiplier: E,
            autoResize: x,
            prevent: M,
            virtualScroll: L,
            overscroll: Y,
            autoRaf: q,
            anchors: H,
            autoToggle: X,
            allowNestedScroll: F,
            naiveDimensions: $,
            stopInertiaOnNavigate: J
        },
        this.dimensions = new DS(f,i,{
            autoResize: x
        }),
        this.updateClassName(),
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
        this.virtualScroll = new MS(u,{
            touchMultiplier: y,
            wheelMultiplier: E
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll),
        this.options.autoToggle && (this.checkOverflow(),
        this.rootElement.addEventListener("transitionend", this.onTransitionEnd)),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown),
        (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId)
    }
    on(f, i) {
        return this.emitter.on(f, i)
    }
    off(f, i) {
        return this.emitter.off(f, i)
    }
    onScrollEnd = f => {
        f instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && f.stopPropagation()
    }
    ;
    dispatchScrollendEvent = () => {
        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{
            bubbles: this.options.wrapper === window,
            detail: {
                lenisScrollEnd: !0
            }
        }))
    }
    ;
    get overflow() {
        const f = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[f]
    }
    checkOverflow() {
        ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
    }
    onTransitionEnd = f => {
        f.propertyName?.includes("overflow") && f.target === this.rootElement && this.checkOverflow()
    }
    ;
    setScroll(f) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
            left: f,
            behavior: "instant"
        }) : this.options.wrapper.scrollTo({
            top: f,
            behavior: "instant"
        })
    }
    onClick = f => {
        const i = f.composedPath().filter(a => a instanceof HTMLAnchorElement && a.href).map(a => new URL(a.href))
          , u = new URL(window.location.href);
        if (this.options.anchors) {
            const a = i.find(r => u.host === r.host && u.pathname === r.pathname && r.hash);
            if (a) {
                const r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0
                  , o = `#${a.hash.split("#")[1]}`;
                this.scrollTo(o, r);
                return
            }
        }
        if (this.options.stopInertiaOnNavigate && i.some(a => u.host === a.host && u.pathname !== a.pathname)) {
            this.reset();
            return
        }
    }
    ;
    onPointerDown = f => {
        f.button === 1 && this.reset()
    }
    ;
    onVirtualScroll = f => {
        if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(f) === !1)
            return;
        const {deltaX: i, deltaY: u, event: a} = f;
        if (this.emitter.emit("virtual-scroll", {
            deltaX: i,
            deltaY: u,
            event: a
        }),
        a.ctrlKey || a.lenisStopPropagation)
            return;
        const r = a.type.includes("touch")
          , o = a.type.includes("wheel");
        this.isTouching = a.type === "touchstart" || a.type === "touchmove";
        const h = i === 0 && u === 0;
        if (this.options.syncTouch && r && a.type === "touchstart" && h && !this.isStopped && !this.isLocked) {
            this.reset();
            return
        }
        const d = this.options.gestureOrientation === "vertical" && u === 0 || this.options.gestureOrientation === "horizontal" && i === 0;
        if (h || d)
            return;
        let m = a.composedPath();
        m = m.slice(0, m.indexOf(this.rootElement));
        const g = this.options.prevent
          , _ = Math.abs(i) >= Math.abs(u) ? "horizontal" : "vertical";
        if (m.find(E => E instanceof HTMLElement && (typeof g == "function" && g?.(E) || E.hasAttribute?.("data-lenis-prevent") || _ === "vertical" && E.hasAttribute?.("data-lenis-prevent-vertical") || _ === "horizontal" && E.hasAttribute?.("data-lenis-prevent-horizontal") || r && E.hasAttribute?.("data-lenis-prevent-touch") || o && E.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(E, {
            deltaX: i,
            deltaY: u
        }))))
            return;
        if (this.isStopped || this.isLocked) {
            a.cancelable && a.preventDefault();
            return
        }
        if (!(this.options.syncTouch && r || this.options.smoothWheel && o)) {
            this.isScrolling = "native",
            this.animate.stop(),
            a.lenisStopPropagation = !0;
            return
        }
        let S = u;
        this.options.gestureOrientation === "both" ? S = Math.abs(u) > Math.abs(i) ? u : i : this.options.gestureOrientation === "horizontal" && (S = i),
        (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && u > 0 || this.animatedScroll === this.limit && u < 0)) && (a.lenisStopPropagation = !0),
        a.cancelable && a.preventDefault();
        const b = r && this.options.syncTouch
          , y = r && a.type === "touchend";
        y && (S = Math.sign(S) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + S, {
            programmatic: !1,
            ...b ? {
                lerp: y ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }
        })
    }
    ;
    resize() {
        this.dimensions.resize(),
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    onNativeScroll = () => {
        if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout),
        this._resetVelocityTimeout = null),
        this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = !1;
            return
        }
        if (this.isScrolling === !1 || this.isScrolling === "native") {
            const f = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.lastVelocity = this.velocity,
            this.velocity = this.animatedScroll - f,
            this.direction = Math.sign(this.animatedScroll - f),
            this.isStopped || (this.isScrolling = "native"),
            this.emit(),
            this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout( () => {
                this.lastVelocity = this.velocity,
                this.velocity = 0,
                this.isScrolling = !1,
                this.emit()
            }
            , 400))
        }
    }
    ;
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        if (this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.removeProperty("overflow");
                return
            }
            this.internalStart()
        }
    }
    internalStart() {
        this.isStopped && (this.reset(),
        this.isStopped = !1,
        this.emit())
    }
    stop() {
        if (!this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.setProperty("overflow", "clip");
                return
            }
            this.internalStop()
        }
    }
    internalStop() {
        this.isStopped || (this.reset(),
        this.isStopped = !0,
        this.emit())
    }
    raf = f => {
        const i = f - (this.time || f);
        this.time = f,
        this.animate.advance(i * .001),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
    }
    ;
    scrollTo(f, {offset: i=0, immediate: u=!1, lock: a=!1, programmatic: r=!0, lerp: o=r ? this.options.lerp : void 0, duration: h=r ? this.options.duration : void 0, easing: d=r ? this.options.easing : void 0, onStart: m, onComplete: g, force: _=!1, userData: S}={}) {
        if ((this.isStopped || this.isLocked) && !_)
            return;
        let b = f
          , y = i;
        if (typeof b == "string" && ["top", "left", "start", "#"].includes(b))
            b = 0;
        else if (typeof b == "string" && ["bottom", "right", "end"].includes(b))
            b = this.limit;
        else {
            let E = null;
            if (typeof b == "string" ? (E = document.querySelector(b),
            E || (b === "#top" ? b = 0 : console.warn("Lenis: Target not found", b))) : b instanceof HTMLElement && b?.nodeType && (E = b),
            E) {
                if (this.options.wrapper !== window) {
                    const H = this.rootElement.getBoundingClientRect();
                    y -= this.isHorizontal ? H.left : H.top
                }
                const x = E.getBoundingClientRect()
                  , M = getComputedStyle(E)
                  , L = this.isHorizontal ? Number.parseFloat(M.scrollMarginLeft) : Number.parseFloat(M.scrollMarginTop)
                  , Y = getComputedStyle(this.rootElement)
                  , q = this.isHorizontal ? Number.parseFloat(Y.scrollPaddingLeft) : Number.parseFloat(Y.scrollPaddingTop);
                b = (this.isHorizontal ? x.left : x.top) + this.animatedScroll - (Number.isNaN(L) ? 0 : L) - (Number.isNaN(q) ? 0 : q)
            }
        }
        if (typeof b == "number") {
            if (b += y,
            this.options.infinite) {
                if (r) {
                    this.targetScroll = this.animatedScroll = this.scroll;
                    const E = b - this.animatedScroll;
                    E > this.limit / 2 ? b -= this.limit : E < -this.limit / 2 && (b += this.limit)
                }
            } else
                b = R_(0, b, this.limit);
            if (b === this.targetScroll) {
                m?.(this),
                g?.(this);
                return
            }
            if (this.userData = S ?? {},
            u) {
                this.animatedScroll = this.targetScroll = b,
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                g?.(this),
                this.userData = {},
                requestAnimationFrame( () => {
                    this.dispatchScrollendEvent()
                }
                );
                return
            }
            r || (this.targetScroll = b),
            typeof h == "number" && typeof d != "function" ? d = Vg : typeof d == "function" && typeof h != "number" && (h = 1),
            this.animate.fromTo(this.animatedScroll, b, {
                duration: h,
                easing: d,
                lerp: o,
                onStart: () => {
                    a && (this.isLocked = !0),
                    this.isScrolling = "smooth",
                    m?.(this)
                }
                ,
                onUpdate: (E, x) => {
                    this.isScrolling = "smooth",
                    this.lastVelocity = this.velocity,
                    this.velocity = E - this.animatedScroll,
                    this.direction = Math.sign(this.velocity),
                    this.animatedScroll = E,
                    this.setScroll(this.scroll),
                    r && (this.targetScroll = E),
                    x || this.emit(),
                    x && (this.reset(),
                    this.emit(),
                    g?.(this),
                    this.userData = {},
                    requestAnimationFrame( () => {
                        this.dispatchScrollendEvent()
                    }
                    ),
                    this.preventNextNativeScrollEvent())
                }
            })
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0,
        requestAnimationFrame( () => {
            this._preventNextNativeScrollEvent = !1
        }
        )
    }
    hasNestedScroll(f, {deltaX: i, deltaY: u}) {
        const a = Date.now();
        f._lenis || (f._lenis = {});
        const r = f._lenis;
        let o, h, d, m, g, _, S, b, y, E;
        if (a - (r.time ?? 0) > 2e3) {
            r.time = Date.now();
            const F = window.getComputedStyle(f);
            if (r.computedStyle = F,
            o = ["auto", "overlay", "scroll"].includes(F.overflowX),
            h = ["auto", "overlay", "scroll"].includes(F.overflowY),
            g = ["auto"].includes(F.overscrollBehaviorX),
            _ = ["auto"].includes(F.overscrollBehaviorY),
            r.hasOverflowX = o,
            r.hasOverflowY = h,
            !(o || h))
                return !1;
            S = f.scrollWidth,
            b = f.scrollHeight,
            y = f.clientWidth,
            E = f.clientHeight,
            d = S > y,
            m = b > E,
            r.isScrollableX = d,
            r.isScrollableY = m,
            r.scrollWidth = S,
            r.scrollHeight = b,
            r.clientWidth = y,
            r.clientHeight = E,
            r.hasOverscrollBehaviorX = g,
            r.hasOverscrollBehaviorY = _
        } else
            d = r.isScrollableX,
            m = r.isScrollableY,
            o = r.hasOverflowX,
            h = r.hasOverflowY,
            S = r.scrollWidth,
            b = r.scrollHeight,
            y = r.clientWidth,
            E = r.clientHeight,
            g = r.hasOverscrollBehaviorX,
            _ = r.hasOverscrollBehaviorY;
        if (!(o && d || h && m))
            return !1;
        const x = Math.abs(i) >= Math.abs(u) ? "horizontal" : "vertical";
        let M, L, Y, q, H, X;
        if (x === "horizontal")
            M = Math.round(f.scrollLeft),
            L = S - y,
            Y = i,
            q = o,
            H = d,
            X = g;
        else if (x === "vertical")
            M = Math.round(f.scrollTop),
            L = b - E,
            Y = u,
            q = h,
            H = m,
            X = _;
        else
            return !1;
        return !X && (M >= L || M <= 0) ? !0 : (Y > 0 ? M < L : M > 0) && q && H
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        const f = this.options.wrapper;
        return this.isHorizontal ? f.scrollX ?? f.scrollLeft : f.scrollY ?? f.scrollTop
    }
    get scroll() {
        return this.options.infinite ? ES(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(f) {
        this._isScrolling !== f && (this._isScrolling = f,
        this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(f) {
        this._isStopped !== f && (this._isStopped = f,
        this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(f) {
        this._isLocked !== f && (this._isLocked = f,
        this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let f = "lenis";
        return this.options.autoToggle && (f += " lenis-autoToggle"),
        this.isStopped && (f += " lenis-stopped"),
        this.isLocked && (f += " lenis-locked"),
        this.isScrolling && (f += " lenis-scrolling"),
        this.isScrolling === "smooth" && (f += " lenis-smooth"),
        f
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.className.split(" ").forEach(f => {
            this.rootElement.classList.add(f)
        }
        )
    }
    cleanUpClassName() {
        for (const f of Array.from(this.rootElement.classList))
            (f === "lenis" || f.startsWith("lenis-")) && this.rootElement.classList.remove(f)
    }
}
;
function xl(f) {
    if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f
}
function U_(f, i) {
    f.prototype = Object.create(i.prototype),
    f.prototype.constructor = f,
    f.__proto__ = i
}
var ri = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, hs = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Sd, un, de, Ci = 1e8, le = 1 / Ci, Fh = Math.PI * 2, wS = Fh / 4, RS = 0, H_ = Math.sqrt, NS = Math.cos, US = Math.sin, Pe = function(i) {
    return typeof i == "string"
}, Ae = function(i) {
    return typeof i == "function"
}, Dl = function(i) {
    return typeof i == "number"
}, bd = function(i) {
    return typeof i > "u"
}, nl = function(i) {
    return typeof i == "object"
}, Ln = function(i) {
    return i !== !1
}, xd = function() {
    return typeof window < "u"
}, Hc = function(i) {
    return Ae(i) || Pe(i)
}, B_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, gn = Array.isArray, HS = /random\([^)]+\)/g, BS = /,\s*/g, Qg = /(?:-?\.?\d|\.)+/gi, Y_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ju = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Hh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, L_ = /[+-]=-?[.\d]+/, YS = /[^,'"\[\]\s]+/gi, LS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ye, Wi, Wh, Td, si = {}, lo = {}, j_, q_ = function(i) {
    return (lo = Fu(i, si)) && Gn
}, Ed = function(i, u) {
    return console.warn("Invalid property", i, "set to", u, "Missing plugin? gsap.registerPlugin()")
}, ds = function(i, u) {
    return !u && console.warn(i)
}, X_ = function(i, u) {
    return i && (si[i] = u) && lo && (lo[i] = u) || si
}, ps = function() {
    return 0
}, jS = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Fc = {
    suppressEvents: !0,
    kill: !1
}, qS = {
    suppressEvents: !0
}, zd = {}, ra = [], $h = {}, G_, ei = {}, Bh = {}, Zg = 30, Wc = [], Ad = "", Dd = function(i) {
    var u = i[0], a, r;
    if (nl(u) || Ae(u) || (i = [i]),
    !(a = (u._gsap || {}).harness)) {
        for (r = Wc.length; r-- && !Wc[r].targetTest(u); )
            ;
        a = Wc[r]
    }
    for (r = i.length; r--; )
        i[r] && (i[r]._gsap || (i[r]._gsap = new o1(i[r],a))) || i.splice(r, 1);
    return i
}, qa = function(i) {
    return i._gsap || Dd(wi(i))[0]._gsap
}, V_ = function(i, u, a) {
    return (a = i[u]) && Ae(a) ? i[u]() : bd(a) && i.getAttribute && i.getAttribute(u) || a
}, jn = function(i, u) {
    return (i = i.split(",")).forEach(u) || i
}, we = function(i) {
    return Math.round(i * 1e5) / 1e5 || 0
}, ve = function(i) {
    return Math.round(i * 1e7) / 1e7 || 0
}, Gu = function(i, u) {
    var a = u.charAt(0)
      , r = parseFloat(u.substr(2));
    return i = parseFloat(i),
    a === "+" ? i + r : a === "-" ? i - r : a === "*" ? i * r : i / r
}, XS = function(i, u) {
    for (var a = u.length, r = 0; i.indexOf(u[r]) < 0 && ++r < a; )
        ;
    return r < a
}, ao = function() {
    var i = ra.length, u = ra.slice(0), a, r;
    for ($h = {},
    ra.length = 0,
    a = 0; a < i; a++)
        r = u[a],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, Od = function(i) {
    return !!(i._initted || i._startAt || i.add)
}, Q_ = function(i, u, a, r) {
    ra.length && !un && ao(),
    i.render(u, a, !!(un && u < 0 && Od(i))),
    ra.length && !un && ao()
}, Z_ = function(i) {
    var u = parseFloat(i);
    return (u || u === 0) && (i + "").match(YS).length < 2 ? u : Pe(i) ? i.trim() : i
}, k_ = function(i) {
    return i
}, ci = function(i, u) {
    for (var a in u)
        a in i || (i[a] = u[a]);
    return i
}, GS = function(i) {
    return function(u, a) {
        for (var r in a)
            r in u || r === "duration" && i || r === "ease" || (u[r] = a[r])
    }
}, Fu = function(i, u) {
    for (var a in u)
        i[a] = u[a];
    return i
}, kg = function f(i, u) {
    for (var a in u)
        a !== "__proto__" && a !== "constructor" && a !== "prototype" && (i[a] = nl(u[a]) ? f(i[a] || (i[a] = {}), u[a]) : u[a]);
    return i
}, uo = function(i, u) {
    var a = {}, r;
    for (r in i)
        r in u || (a[r] = i[r]);
    return a
}, ts = function(i) {
    var u = i.parent || ye
      , a = i.keyframes ? GS(gn(i.keyframes)) : ci;
    if (Ln(i.inherit))
        for (; u; )
            a(i, u.vars.defaults),
            u = u.parent || u._dp;
    return i
}, VS = function(i, u) {
    for (var a = i.length, r = a === u.length; r && a-- && i[a] === u[a]; )
        ;
    return a < 0
}, K_ = function(i, u, a, r, o) {
    var h = i[r], d;
    if (o)
        for (d = u[o]; h && h[o] > d; )
            h = h._prev;
    return h ? (u._next = h._next,
    h._next = u) : (u._next = i[a],
    i[a] = u),
    u._next ? u._next._prev = u : i[r] = u,
    u._prev = h,
    u.parent = u._dp = i,
    u
}, _o = function(i, u, a, r) {
    a === void 0 && (a = "_first"),
    r === void 0 && (r = "_last");
    var o = u._prev
      , h = u._next;
    o ? o._next = h : i[a] === u && (i[a] = h),
    h ? h._prev = o : i[r] === u && (i[r] = o),
    u._next = u._prev = u.parent = null
}, oa = function(i, u) {
    i.parent && (!u || i.parent.autoRemoveChildren) && i.parent.remove && i.parent.remove(i),
    i._act = 0
}, Xa = function(i, u) {
    if (i && (!u || u._end > i._dur || u._start < 0))
        for (var a = i; a; )
            a._dirty = 1,
            a = a.parent;
    return i
}, QS = function(i) {
    for (var u = i.parent; u && u.parent; )
        u._dirty = 1,
        u.totalDuration(),
        u = u.parent;
    return i
}, Ph = function(i, u, a, r) {
    return i._startAt && (un ? i._startAt.revert(Fc) : i.vars.immediateRender && !i.vars.autoRevert || i._startAt.render(u, !0, r))
}, ZS = function f(i) {
    return !i || i._ts && f(i.parent)
}, Kg = function(i) {
    return i._repeat ? Wu(i._tTime, i = i.duration() + i._rDelay) * i : 0
}, Wu = function(i, u) {
    var a = Math.floor(i = ve(i / u));
    return i && a === i ? a - 1 : a
}, ro = function(i, u) {
    return (i - u._start) * u._ts + (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
}, vo = function(i) {
    return i._end = ve(i._start + (i._tDur / Math.abs(i._ts || i._rts || le) || 0))
}, yo = function(i, u) {
    var a = i._dp;
    return a && a.smoothChildTiming && i._ts && (i._start = ve(a._time - (i._ts > 0 ? u / i._ts : ((i._dirty ? i.totalDuration() : i._tDur) - u) / -i._ts)),
    vo(i),
    a._dirty || Xa(a, i)),
    i
}, J_ = function(i, u) {
    var a;
    if ((u._time || !u._dur && u._initted || u._start < i._time && (u._dur || !u.add)) && (a = ro(i.rawTime(), u),
    (!u._dur || xs(0, u.totalDuration(), a) - u._tTime > le) && u.render(a, !0)),
    Xa(i, u)._dp && i._initted && i._time >= i._dur && i._ts) {
        if (i._dur < i.duration())
            for (a = i; a._dp; )
                a.rawTime() >= 0 && a.totalTime(a._tTime),
                a = a._dp;
        i._zTime = -le
    }
}, Pi = function(i, u, a, r) {
    return u.parent && oa(u),
    u._start = ve((Dl(a) ? a : a || i !== ye ? Di(i, a, u) : i._time) + u._delay),
    u._end = ve(u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0)),
    K_(i, u, "_first", "_last", i._sort ? "_start" : 0),
    Ih(u) || (i._recent = u),
    r || J_(i, u),
    i._ts < 0 && yo(i, i._tTime),
    i
}, F_ = function(i, u) {
    return (si.ScrollTrigger || Ed("scrollTrigger", u)) && si.ScrollTrigger.create(u, i)
}, W_ = function(i, u, a, r, o) {
    if (Cd(i, u, o),
    !i._initted)
        return 1;
    if (!a && i._pt && !un && (i._dur && i.vars.lazy !== !1 || !i._dur && i.vars.lazy) && G_ !== ii.frame)
        return ra.push(i),
        i._lazy = [o, r],
        1
}, kS = function f(i) {
    var u = i.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || f(u))
}, Ih = function(i) {
    var u = i.data;
    return u === "isFromStart" || u === "isStart"
}, KS = function(i, u, a, r) {
    var o = i.ratio, h = u < 0 || !u && (!i._start && kS(i) && !(!i._initted && Ih(i)) || (i._ts < 0 || i._dp._ts < 0) && !Ih(i)) ? 0 : 1, d = i._rDelay, m = 0, g, _, S;
    if (d && i._repeat && (m = xs(0, i._tDur, u),
    _ = Wu(m, d),
    i._yoyo && _ & 1 && (h = 1 - h),
    _ !== Wu(i._tTime, d) && (o = 1 - h,
    i.vars.repeatRefresh && i._initted && i.invalidate())),
    h !== o || un || r || i._zTime === le || !u && i._zTime) {
        if (!i._initted && W_(i, u, r, a, m))
            return;
        for (S = i._zTime,
        i._zTime = u || (a ? le : 0),
        a || (a = u && !S),
        i.ratio = h,
        i._from && (h = 1 - h),
        i._time = 0,
        i._tTime = m,
        g = i._pt; g; )
            g.r(h, g.d),
            g = g._next;
        u < 0 && Ph(i, u, a, !0),
        i._onUpdate && !a && ai(i, "onUpdate"),
        m && i._repeat && !a && i.parent && ai(i, "onRepeat"),
        (u >= i._tDur || u < 0) && i.ratio === h && (h && oa(i, 1),
        !a && !un && (ai(i, h ? "onComplete" : "onReverseComplete", !0),
        i._prom && i._prom()))
    } else
        i._zTime || (i._zTime = u)
}, JS = function(i, u, a) {
    var r;
    if (a > u)
        for (r = i._first; r && r._start <= a; ) {
            if (r.data === "isPause" && r._start > u)
                return r;
            r = r._next
        }
    else
        for (r = i._last; r && r._start >= a; ) {
            if (r.data === "isPause" && r._start < u)
                return r;
            r = r._prev
        }
}, $u = function(i, u, a, r) {
    var o = i._repeat
      , h = ve(u) || 0
      , d = i._tTime / i._tDur;
    return d && !r && (i._time *= h / i._dur),
    i._dur = h,
    i._tDur = o ? o < 0 ? 1e10 : ve(h * (o + 1) + i._rDelay * o) : h,
    d > 0 && !r && yo(i, i._tTime = i._tDur * d),
    i.parent && vo(i),
    a || Xa(i.parent, i),
    i
}, Jg = function(i) {
    return i instanceof Yn ? Xa(i) : $u(i, i._dur)
}, FS = {
    _start: 0,
    endTime: ps,
    totalDuration: ps
}, Di = function f(i, u, a) {
    var r = i.labels, o = i._recent || FS, h = i.duration() >= Ci ? o.endTime(!1) : i._dur, d, m, g;
    return Pe(u) && (isNaN(u) || u in r) ? (m = u.charAt(0),
    g = u.substr(-1) === "%",
    d = u.indexOf("="),
    m === "<" || m === ">" ? (d >= 0 && (u = u.replace(/=/, "")),
    (m === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(u.substr(1)) || 0) * (g ? (d < 0 ? o : a).totalDuration() / 100 : 1)) : d < 0 ? (u in r || (r[u] = h),
    r[u]) : (m = parseFloat(u.charAt(d - 1) + u.substr(d + 1)),
    g && a && (m = m / 100 * (gn(a) ? a[0] : a).totalDuration()),
    d > 1 ? f(i, u.substr(0, d - 1), a) + m : h + m)) : u == null ? h : +u
}, es = function(i, u, a) {
    var r = Dl(u[1]), o = (r ? 2 : 1) + (i < 2 ? 0 : 1), h = u[o], d, m;
    if (r && (h.duration = u[1]),
    h.parent = a,
    i) {
        for (d = h,
        m = a; m && !("immediateRender"in d); )
            d = m.vars.defaults || {},
            m = Ln(m.vars.inherit) && m.parent;
        h.immediateRender = Ln(d.immediateRender),
        i < 2 ? h.runBackwards = 1 : h.startAt = u[o - 1]
    }
    return new Xe(u[0],h,u[o + 1])
}, pa = function(i, u) {
    return i || i === 0 ? u(i) : u
}, xs = function(i, u, a) {
    return a < i ? i : a > u ? u : a
}, pn = function(i, u) {
    return !Pe(i) || !(u = LS.exec(i)) ? "" : u[1]
}, WS = function(i, u, a) {
    return pa(a, function(r) {
        return xs(i, u, r)
    })
}, td = [].slice, $_ = function(i, u) {
    return i && nl(i) && "length"in i && (!u && !i.length || i.length - 1 in i && nl(i[0])) && !i.nodeType && i !== Wi
}, $S = function(i, u, a) {
    return a === void 0 && (a = []),
    i.forEach(function(r) {
        var o;
        return Pe(r) && !u || $_(r, 1) ? (o = a).push.apply(o, wi(r)) : a.push(r)
    }) || a
}, wi = function(i, u, a) {
    return de && !u && de.selector ? de.selector(i) : Pe(i) && !a && (Wh || !Pu()) ? td.call((u || Td).querySelectorAll(i), 0) : gn(i) ? $S(i, a) : $_(i) ? td.call(i, 0) : i ? [i] : []
}, ed = function(i) {
    return i = wi(i)[0] || ds("Invalid scope") || {},
    function(u) {
        var a = i.current || i.nativeElement || i;
        return wi(u, a.querySelectorAll ? a : a === i ? ds("Invalid scope") || Td.createElement("div") : i)
    }
}, P_ = function(i) {
    return i.sort(function() {
        return .5 - Math.random()
    })
}, I_ = function(i) {
    if (Ae(i))
        return i;
    var u = nl(i) ? i : {
        each: i
    }
      , a = Ga(u.ease)
      , r = u.from || 0
      , o = parseFloat(u.base) || 0
      , h = {}
      , d = r > 0 && r < 1
      , m = isNaN(r) || d
      , g = u.axis
      , _ = r
      , S = r;
    return Pe(r) ? _ = S = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !d && m && (_ = r[0],
    S = r[1]),
    function(b, y, E) {
        var x = (E || u).length, M = h[x], L, Y, q, H, X, F, C, $, J;
        if (!M) {
            if (J = u.grid === "auto" ? 0 : (u.grid || [1, Ci])[1],
            !J) {
                for (C = -Ci; C < (C = E[J++].getBoundingClientRect().left) && J < x; )
                    ;
                J < x && J--
            }
            for (M = h[x] = [],
            L = m ? Math.min(J, x) * _ - .5 : r % J,
            Y = J === Ci ? 0 : m ? x * S / J - .5 : r / J | 0,
            C = 0,
            $ = Ci,
            F = 0; F < x; F++)
                q = F % J - L,
                H = Y - (F / J | 0),
                M[F] = X = g ? Math.abs(g === "y" ? H : q) : H_(q * q + H * H),
                X > C && (C = X),
                X < $ && ($ = X);
            r === "random" && P_(M),
            M.max = C - $,
            M.min = $,
            M.v = x = (parseFloat(u.amount) || parseFloat(u.each) * (J > x ? x - 1 : g ? g === "y" ? x / J : J : Math.max(J, x / J)) || 0) * (r === "edges" ? -1 : 1),
            M.b = x < 0 ? o - x : o,
            M.u = pn(u.amount || u.each) || 0,
            a = a && x < 0 ? ob(a) : a
        }
        return x = (M[b] - M.min) / M.max || 0,
        ve(M.b + (a ? a(x) : x) * M.v) + M.u
    }
}, nd = function(i) {
    var u = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function(a) {
        var r = ve(Math.round(parseFloat(a) / i) * i * u);
        return (r - r % 1) / u + (Dl(a) ? 0 : pn(a))
    }
}, t1 = function(i, u) {
    var a = gn(i), r, o;
    return !a && nl(i) && (r = a = i.radius || Ci,
    i.values ? (i = wi(i.values),
    (o = !Dl(i[0])) && (r *= r)) : i = nd(i.increment)),
    pa(u, a ? Ae(i) ? function(h) {
        return o = i(h),
        Math.abs(o - h) <= r ? o : h
    }
    : function(h) {
        for (var d = parseFloat(o ? h.x : h), m = parseFloat(o ? h.y : 0), g = Ci, _ = 0, S = i.length, b, y; S--; )
            o ? (b = i[S].x - d,
            y = i[S].y - m,
            b = b * b + y * y) : b = Math.abs(i[S] - d),
            b < g && (g = b,
            _ = S);
        return _ = !r || g <= r ? i[_] : h,
        o || _ === h || Dl(h) ? _ : _ + pn(h)
    }
    : nd(i))
}, e1 = function(i, u, a, r) {
    return pa(gn(i) ? !u : a === !0 ? !!(a = 0) : !r, function() {
        return gn(i) ? i[~~(Math.random() * i.length)] : (a = a || 1e-5) && (r = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((i - a / 2 + Math.random() * (u - i + a * .99)) / a) * a * r) / r
    })
}, PS = function() {
    for (var i = arguments.length, u = new Array(i), a = 0; a < i; a++)
        u[a] = arguments[a];
    return function(r) {
        return u.reduce(function(o, h) {
            return h(o)
        }, r)
    }
}, IS = function(i, u) {
    return function(a) {
        return i(parseFloat(a)) + (u || pn(a))
    }
}, tb = function(i, u, a) {
    return i1(i, u, 0, 1, a)
}, n1 = function(i, u, a) {
    return pa(a, function(r) {
        return i[~~u(r)]
    })
}, eb = function f(i, u, a) {
    var r = u - i;
    return gn(i) ? n1(i, f(0, i.length), u) : pa(a, function(o) {
        return (r + (o - i) % r) % r + i
    })
}, nb = function f(i, u, a) {
    var r = u - i
      , o = r * 2;
    return gn(i) ? n1(i, f(0, i.length - 1), u) : pa(a, function(h) {
        return h = (o + (h - i) % o) % o || 0,
        i + (h > r ? o - h : h)
    })
}, ms = function(i) {
    return i.replace(HS, function(u) {
        var a = u.indexOf("[") + 1
          , r = u.substring(a || 7, a ? u.indexOf("]") : u.length - 1).split(BS);
        return e1(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5)
    })
}, i1 = function(i, u, a, r, o) {
    var h = u - i
      , d = r - a;
    return pa(o, function(m) {
        return a + ((m - i) / h * d || 0)
    })
}, ib = function f(i, u, a, r) {
    var o = isNaN(i + u) ? 0 : function(y) {
        return (1 - y) * i + y * u
    }
    ;
    if (!o) {
        var h = Pe(i), d = {}, m, g, _, S, b;
        if (a === !0 && (r = 1) && (a = null),
        h)
            i = {
                p: i
            },
            u = {
                p: u
            };
        else if (gn(i) && !gn(u)) {
            for (_ = [],
            S = i.length,
            b = S - 2,
            g = 1; g < S; g++)
                _.push(f(i[g - 1], i[g]));
            S--,
            o = function(E) {
                E *= S;
                var x = Math.min(b, ~~E);
                return _[x](E - x)
            }
            ,
            a = u
        } else
            r || (i = Fu(gn(i) ? [] : {}, i));
        if (!_) {
            for (m in u)
                Md.call(d, i, m, "get", u[m]);
            o = function(E) {
                return Nd(E, d) || (h ? i.p : i)
            }
        }
    }
    return pa(a, o)
}, Fg = function(i, u, a) {
    var r = i.labels, o = Ci, h, d, m;
    for (h in r)
        d = r[h] - u,
        d < 0 == !!a && d && o > (d = Math.abs(d)) && (m = h,
        o = d);
    return m
}, ai = function(i, u, a) {
    var r = i.vars, o = r[u], h = de, d = i._ctx, m, g, _;
    if (o)
        return m = r[u + "Params"],
        g = r.callbackScope || i,
        a && ra.length && ao(),
        d && (de = d),
        _ = m ? o.apply(g, m) : o.call(g),
        de = h,
        _
}, Kr = function(i) {
    return oa(i),
    i.scrollTrigger && i.scrollTrigger.kill(!!un),
    i.progress() < 1 && ai(i, "onInterrupt"),
    i
}, qu, l1 = [], a1 = function(i) {
    if (i)
        if (i = !i.name && i.default || i,
        xd() || i.headless) {
            var u = i.name
              , a = Ae(i)
              , r = u && !a && i.init ? function() {
                this._props = []
            }
            : i
              , o = {
                init: ps,
                render: Nd,
                add: Md,
                kill: Sb,
                modifier: yb,
                rawVars: 0
            }
              , h = {
                targetTest: 0,
                get: 0,
                getSetter: Rd,
                aliases: {},
                register: 0
            };
            if (Pu(),
            i !== r) {
                if (ei[u])
                    return;
                ci(r, ci(uo(i, o), h)),
                Fu(r.prototype, Fu(o, uo(i, h))),
                ei[r.prop = u] = r,
                i.targetTest && (Wc.push(r),
                zd[u] = 1),
                u = (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) + "Plugin"
            }
            X_(u, r),
            i.register && i.register(Gn, r, qn)
        } else
            l1.push(i)
}, ie = 255, Jr = {
    aqua: [0, ie, ie],
    lime: [0, ie, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ie],
    navy: [0, 0, 128],
    white: [ie, ie, ie],
    olive: [128, 128, 0],
    yellow: [ie, ie, 0],
    orange: [ie, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ie, 0, 0],
    pink: [ie, 192, 203],
    cyan: [0, ie, ie],
    transparent: [ie, ie, ie, 0]
}, Yh = function(i, u, a) {
    return i += i < 0 ? 1 : i > 1 ? -1 : 0,
    (i * 6 < 1 ? u + (a - u) * i * 6 : i < .5 ? a : i * 3 < 2 ? u + (a - u) * (2 / 3 - i) * 6 : u) * ie + .5 | 0
}, u1 = function(i, u, a) {
    var r = i ? Dl(i) ? [i >> 16, i >> 8 & ie, i & ie] : 0 : Jr.black, o, h, d, m, g, _, S, b, y, E;
    if (!r) {
        if (i.substr(-1) === "," && (i = i.substr(0, i.length - 1)),
        Jr[i])
            r = Jr[i];
        else if (i.charAt(0) === "#") {
            if (i.length < 6 && (o = i.charAt(1),
            h = i.charAt(2),
            d = i.charAt(3),
            i = "#" + o + o + h + h + d + d + (i.length === 5 ? i.charAt(4) + i.charAt(4) : "")),
            i.length === 9)
                return r = parseInt(i.substr(1, 6), 16),
                [r >> 16, r >> 8 & ie, r & ie, parseInt(i.substr(7), 16) / 255];
            i = parseInt(i.substr(1), 16),
            r = [i >> 16, i >> 8 & ie, i & ie]
        } else if (i.substr(0, 3) === "hsl") {
            if (r = E = i.match(Qg),
            !u)
                m = +r[0] % 360 / 360,
                g = +r[1] / 100,
                _ = +r[2] / 100,
                h = _ <= .5 ? _ * (g + 1) : _ + g - _ * g,
                o = _ * 2 - h,
                r.length > 3 && (r[3] *= 1),
                r[0] = Yh(m + 1 / 3, o, h),
                r[1] = Yh(m, o, h),
                r[2] = Yh(m - 1 / 3, o, h);
            else if (~i.indexOf("="))
                return r = i.match(Y_),
                a && r.length < 4 && (r[3] = 1),
                r
        } else
            r = i.match(Qg) || Jr.transparent;
        r = r.map(Number)
    }
    return u && !E && (o = r[0] / ie,
    h = r[1] / ie,
    d = r[2] / ie,
    S = Math.max(o, h, d),
    b = Math.min(o, h, d),
    _ = (S + b) / 2,
    S === b ? m = g = 0 : (y = S - b,
    g = _ > .5 ? y / (2 - S - b) : y / (S + b),
    m = S === o ? (h - d) / y + (h < d ? 6 : 0) : S === h ? (d - o) / y + 2 : (o - h) / y + 4,
    m *= 60),
    r[0] = ~~(m + .5),
    r[1] = ~~(g * 100 + .5),
    r[2] = ~~(_ * 100 + .5)),
    a && r.length < 4 && (r[3] = 1),
    r
}, r1 = function(i) {
    var u = []
      , a = []
      , r = -1;
    return i.split(sa).forEach(function(o) {
        var h = o.match(ju) || [];
        u.push.apply(u, h),
        a.push(r += h.length + 1)
    }),
    u.c = a,
    u
}, Wg = function(i, u, a) {
    var r = "", o = (i + r).match(sa), h = u ? "hsla(" : "rgba(", d = 0, m, g, _, S;
    if (!o)
        return i;
    if (o = o.map(function(b) {
        return (b = u1(b, u, 1)) && h + (u ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) + ")"
    }),
    a && (_ = r1(i),
    m = a.c,
    m.join(r) !== _.c.join(r)))
        for (g = i.replace(sa, "1").split(ju),
        S = g.length - 1; d < S; d++)
            r += g[d] + (~m.indexOf(d) ? o.shift() || h + "0,0,0,0)" : (_.length ? _ : o.length ? o : a).shift());
    if (!g)
        for (g = i.split(sa),
        S = g.length - 1; d < S; d++)
            r += g[d] + o[d];
    return r + g[S]
}, sa = (function() {
    var f = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", i;
    for (i in Jr)
        f += "|" + i + "\\b";
    return new RegExp(f + ")","gi")
}
)(), lb = /hsl[a]?\(/, s1 = function(i) {
    var u = i.join(" "), a;
    if (sa.lastIndex = 0,
    sa.test(u))
        return a = lb.test(u),
        i[1] = Wg(i[1], a),
        i[0] = Wg(i[0], a, r1(i[1])),
        !0
}, gs, ii = (function() {
    var f = Date.now, i = 500, u = 33, a = f(), r = a, o = 1e3 / 240, h = o, d = [], m, g, _, S, b, y, E = function x(M) {
        var L = f() - r, Y = M === !0, q, H, X, F;
        if ((L > i || L < 0) && (a += L - u),
        r += L,
        X = r - a,
        q = X - h,
        (q > 0 || Y) && (F = ++S.frame,
        b = X - S.time * 1e3,
        S.time = X = X / 1e3,
        h += q + (q >= o ? 4 : o - q),
        H = 1),
        Y || (m = g(x)),
        H)
            for (y = 0; y < d.length; y++)
                d[y](X, b, F, M)
    };
    return S = {
        time: 0,
        frame: 0,
        tick: function() {
            E(!0)
        },
        deltaRatio: function(M) {
            return b / (1e3 / (M || 60))
        },
        wake: function() {
            j_ && (!Wh && xd() && (Wi = Wh = window,
            Td = Wi.document || {},
            si.gsap = Gn,
            (Wi.gsapVersions || (Wi.gsapVersions = [])).push(Gn.version),
            q_(lo || Wi.GreenSockGlobals || !Wi.gsap && Wi || {}),
            l1.forEach(a1)),
            _ = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            m && S.sleep(),
            g = _ || function(M) {
                return setTimeout(M, h - S.time * 1e3 + 1 | 0)
            }
            ,
            gs = 1,
            E(2))
        },
        sleep: function() {
            (_ ? cancelAnimationFrame : clearTimeout)(m),
            gs = 0,
            g = ps
        },
        lagSmoothing: function(M, L) {
            i = M || 1 / 0,
            u = Math.min(L || 33, i)
        },
        fps: function(M) {
            o = 1e3 / (M || 240),
            h = S.time * 1e3 + o
        },
        add: function(M, L, Y) {
            var q = L ? function(H, X, F, C) {
                M(H, X, F, C),
                S.remove(q)
            }
            : M;
            return S.remove(M),
            d[Y ? "unshift" : "push"](q),
            Pu(),
            q
        },
        remove: function(M, L) {
            ~(L = d.indexOf(M)) && d.splice(L, 1) && y >= L && y--
        },
        _listeners: d
    },
    S
}
)(), Pu = function() {
    return !gs && ii.wake()
}, Xt = {}, ab = /^[\d.\-M][\d.\-,\s]/, ub = /["']/g, rb = function(i) {
    for (var u = {}, a = i.substr(1, i.length - 3).split(":"), r = a[0], o = 1, h = a.length, d, m, g; o < h; o++)
        m = a[o],
        d = o !== h - 1 ? m.lastIndexOf(",") : m.length,
        g = m.substr(0, d),
        u[r] = isNaN(g) ? g.replace(ub, "").trim() : +g,
        r = m.substr(d + 1).trim();
    return u
}, sb = function(i) {
    var u = i.indexOf("(") + 1
      , a = i.indexOf(")")
      , r = i.indexOf("(", u);
    return i.substring(u, ~r && r < a ? i.indexOf(")", a + 1) : a)
}, cb = function(i) {
    var u = (i + "").split("(")
      , a = Xt[u[0]];
    return a && u.length > 1 && a.config ? a.config.apply(null, ~i.indexOf("{") ? [rb(u[1])] : sb(i).split(",").map(Z_)) : Xt._CE && ab.test(i) ? Xt._CE("", i) : a
}, ob = function(i) {
    return function(u) {
        return 1 - i(1 - u)
    }
}, Ga = function(i, u) {
    return i && (Ae(i) ? i : Xt[i] || cb(i)) || u
}, $a = function(i, u, a, r) {
    a === void 0 && (a = function(m) {
        return 1 - u(1 - m)
    }
    ),
    r === void 0 && (r = function(m) {
        return m < .5 ? u(m * 2) / 2 : 1 - u((1 - m) * 2) / 2
    }
    );
    var o = {
        easeIn: u,
        easeOut: a,
        easeInOut: r
    }, h;
    return jn(i, function(d) {
        Xt[d] = si[d] = o,
        Xt[h = d.toLowerCase()] = a;
        for (var m in o)
            Xt[h + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")] = Xt[d + "." + m] = o[m]
    }),
    o
}, c1 = function(i) {
    return function(u) {
        return u < .5 ? (1 - i(1 - u * 2)) / 2 : .5 + i((u - .5) * 2) / 2
    }
}, Lh = function f(i, u, a) {
    var r = u >= 1 ? u : 1
      , o = (a || (i ? .3 : .45)) / (u < 1 ? u : 1)
      , h = o / Fh * (Math.asin(1 / r) || 0)
      , d = function(_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * US((_ - h) * o) + 1
    }
      , m = i === "out" ? d : i === "in" ? function(g) {
        return 1 - d(1 - g)
    }
    : c1(d);
    return o = Fh / o,
    m.config = function(g, _) {
        return f(i, g, _)
    }
    ,
    m
}, jh = function f(i, u) {
    u === void 0 && (u = 1.70158);
    var a = function(h) {
        return h ? --h * h * ((u + 1) * h + u) + 1 : 0
    }
      , r = i === "out" ? a : i === "in" ? function(o) {
        return 1 - a(1 - o)
    }
    : c1(a);
    return r.config = function(o) {
        return f(i, o)
    }
    ,
    r
};
jn("Linear,Quad,Cubic,Quart,Quint,Strong", function(f, i) {
    var u = i < 5 ? i + 1 : i;
    $a(f + ",Power" + (u - 1), i ? function(a) {
        return Math.pow(a, u)
    }
    : function(a) {
        return a
    }
    , function(a) {
        return 1 - Math.pow(1 - a, u)
    }, function(a) {
        return a < .5 ? Math.pow(a * 2, u) / 2 : 1 - Math.pow((1 - a) * 2, u) / 2
    })
});
Xt.Linear.easeNone = Xt.none = Xt.Linear.easeIn;
$a("Elastic", Lh("in"), Lh("out"), Lh());
(function(f, i) {
    var u = 1 / i
      , a = 2 * u
      , r = 2.5 * u
      , o = function(d) {
        return d < u ? f * d * d : d < a ? f * Math.pow(d - 1.5 / i, 2) + .75 : d < r ? f * (d -= 2.25 / i) * d + .9375 : f * Math.pow(d - 2.625 / i, 2) + .984375
    };
    $a("Bounce", function(h) {
        return 1 - o(1 - h)
    }, o)
}
)(7.5625, 2.75);
$a("Expo", function(f) {
    return Math.pow(2, 10 * (f - 1)) * f + f * f * f * f * f * f * (1 - f)
});
$a("Circ", function(f) {
    return -(H_(1 - f * f) - 1)
});
$a("Sine", function(f) {
    return f === 1 ? 1 : -NS(f * wS) + 1
});
$a("Back", jh("in"), jh("out"), jh());
Xt.SteppedEase = Xt.steps = si.SteppedEase = {
    config: function(i, u) {
        i === void 0 && (i = 1);
        var a = 1 / i
          , r = i + (u ? 0 : 1)
          , o = u ? 1 : 0
          , h = 1 - le;
        return function(d) {
            return ((r * xs(0, h, d) | 0) + o) * a
        }
    }
};
hs.ease = Xt["quad.out"];
jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(f) {
    return Ad += f + "," + f + "Params,"
});
var o1 = function(i, u) {
    this.id = RS++,
    i._gsap = this,
    this.target = i,
    this.harness = u,
    this.get = u ? u.get : V_,
    this.set = u ? u.getSetter : Rd
}
  , _s = (function() {
    function f(u) {
        this.vars = u,
        this._delay = +u.delay || 0,
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) && (this._rDelay = u.repeatDelay || 0,
        this._yoyo = !!u.yoyo || !!u.yoyoEase),
        this._ts = 1,
        $u(this, +u.duration, 1, 1),
        this.data = u.data,
        de && (this._ctx = de,
        de.data.push(this)),
        gs || ii.wake()
    }
    var i = f.prototype;
    return i.delay = function(a) {
        return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay),
        this._delay = a,
        this) : this._delay
    }
    ,
    i.duration = function(a) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur
    }
    ,
    i.totalDuration = function(a) {
        return arguments.length ? (this._dirty = 0,
        $u(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    i.totalTime = function(a, r) {
        if (Pu(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (yo(this, a),
            !o._dp || o.parent || J_(o, this); o && o.parent; )
                o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && Pi(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== a || !this._dur && !r || this._initted && Math.abs(this._zTime) === le || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a),
        Q_(this, a, r)),
        this
    }
    ,
    i.time = function(a, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + Kg(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), r) : this._time
    }
    ,
    i.totalProgress = function(a, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * a, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    i.progress = function(a, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + Kg(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    i.iteration = function(a, r) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (a - 1) * o, r) : this._repeat ? Wu(this._tTime, o) + 1 : 1
    }
    ,
    i.timeScale = function(a, r) {
        if (!arguments.length)
            return this._rts === -le ? 0 : this._rts;
        if (this._rts === a)
            return this;
        var o = this.parent && this._ts ? ro(this.parent._time, this) : this._tTime;
        return this._rts = +a || 0,
        this._ts = this._ps || a === -le ? 0 : this._rts,
        this.totalTime(xs(-Math.abs(this._delay), this.totalDuration(), o), r !== !1),
        vo(this),
        QS(this)
    }
    ,
    i.paused = function(a) {
        return arguments.length ? (this._ps !== a && (this._ps = a,
        a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Pu(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== le && (this._tTime -= le)))),
        this) : this._ps
    }
    ,
    i.startTime = function(a) {
        if (arguments.length) {
            this._start = ve(a);
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && Pi(r, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    i.endTime = function(a) {
        return this._start + (Ln(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    i.rawTime = function(a) {
        var r = this.parent || this._dp;
        return r ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ro(r.rawTime(a), this) : this._tTime : this._tTime
    }
    ,
    i.revert = function(a) {
        a === void 0 && (a = qS);
        var r = un;
        return un = a,
        Od(this) && (this.timeline && this.timeline.revert(a),
        this.totalTime(-.01, a.suppressEvents)),
        this.data !== "nested" && a.kill !== !1 && this.kill(),
        un = r,
        this
    }
    ,
    i.globalTime = function(a) {
        for (var r = this, o = arguments.length ? a : r.rawTime(); r; )
            o = r._start + o / (Math.abs(r._ts) || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.globalTime(a) : o
    }
    ,
    i.repeat = function(a) {
        return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a,
        Jg(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    i.repeatDelay = function(a) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = a,
            Jg(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    i.yoyo = function(a) {
        return arguments.length ? (this._yoyo = a,
        this) : this._yoyo
    }
    ,
    i.seek = function(a, r) {
        return this.totalTime(Di(this, a), Ln(r))
    }
    ,
    i.restart = function(a, r) {
        return this.play().totalTime(a ? -this._delay : 0, Ln(r)),
        this._dur || (this._zTime = -le),
        this
    }
    ,
    i.play = function(a, r) {
        return a != null && this.seek(a, r),
        this.reversed(!1).paused(!1)
    }
    ,
    i.reverse = function(a, r) {
        return a != null && this.seek(a || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    i.pause = function(a, r) {
        return a != null && this.seek(a, r),
        this.paused(!0)
    }
    ,
    i.resume = function() {
        return this.paused(!1)
    }
    ,
    i.reversed = function(a) {
        return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -le : 0)),
        this) : this._rts < 0
    }
    ,
    i.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -le,
        this
    }
    ,
    i.isActive = function() {
        var a = this.parent || this._dp, r = this._start, o;
        return !!(!a || this._ts && this._initted && a.isActive() && (o = a.rawTime(!0)) >= r && o < this.endTime(!0) - le)
    }
    ,
    i.eventCallback = function(a, r, o) {
        var h = this.vars;
        return arguments.length > 1 ? (r ? (h[a] = r,
        o && (h[a + "Params"] = o),
        a === "onUpdate" && (this._onUpdate = r)) : delete h[a],
        this) : h[a]
    }
    ,
    i.then = function(a) {
        var r = this
          , o = r._prom;
        return new Promise(function(h) {
            var d = Ae(a) ? a : k_
              , m = function() {
                var _ = r.then;
                r.then = null,
                o && o(),
                Ae(d) && (d = d(r)) && (d.then || d === r) && (r.then = _),
                h(d),
                r.then = _
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? m() : r._prom = m
        }
        )
    }
    ,
    i.kill = function() {
        Kr(this)
    }
    ,
    f
}
)();
ci(_s.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -le,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Yn = (function(f) {
    U_(i, f);
    function i(a, r) {
        var o;
        return a === void 0 && (a = {}),
        o = f.call(this, a) || this,
        o.labels = {},
        o.smoothChildTiming = !!a.smoothChildTiming,
        o.autoRemoveChildren = !!a.autoRemoveChildren,
        o._sort = Ln(a.sortChildren),
        ye && Pi(a.parent || ye, xl(o), r),
        a.reversed && o.reverse(),
        a.paused && o.paused(!0),
        a.scrollTrigger && F_(xl(o), a.scrollTrigger),
        o
    }
    var u = i.prototype;
    return u.to = function(r, o, h) {
        return es(0, arguments, this),
        this
    }
    ,
    u.from = function(r, o, h) {
        return es(1, arguments, this),
        this
    }
    ,
    u.fromTo = function(r, o, h, d) {
        return es(2, arguments, this),
        this
    }
    ,
    u.set = function(r, o, h) {
        return o.duration = 0,
        o.parent = this,
        ts(o).repeatDelay || (o.repeat = 0),
        o.immediateRender = !!o.immediateRender,
        new Xe(r,o,Di(this, h),1),
        this
    }
    ,
    u.call = function(r, o, h) {
        return Pi(this, Xe.delayedCall(0, r, o), h)
    }
    ,
    u.staggerTo = function(r, o, h, d, m, g, _) {
        return h.duration = o,
        h.stagger = h.stagger || d,
        h.onComplete = g,
        h.onCompleteParams = _,
        h.parent = this,
        new Xe(r,h,Di(this, m)),
        this
    }
    ,
    u.staggerFrom = function(r, o, h, d, m, g, _) {
        return h.runBackwards = 1,
        ts(h).immediateRender = Ln(h.immediateRender),
        this.staggerTo(r, o, h, d, m, g, _)
    }
    ,
    u.staggerFromTo = function(r, o, h, d, m, g, _, S) {
        return d.startAt = h,
        ts(d).immediateRender = Ln(d.immediateRender),
        this.staggerTo(r, o, d, m, g, _, S)
    }
    ,
    u.render = function(r, o, h) {
        var d = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, _ = r <= 0 ? 0 : ve(r), S = this._zTime < 0 != r < 0 && (this._initted || !g), b, y, E, x, M, L, Y, q, H, X, F, C;
        if (this !== ye && _ > m && r >= 0 && (_ = m),
        _ !== this._tTime || h || S) {
            if (d !== this._time && g && (_ += this._time - d,
            r += this._time - d),
            b = _,
            H = this._start,
            q = this._ts,
            L = !q,
            S && (g || (d = this._zTime),
            (r || !o) && (this._zTime = r)),
            this._repeat) {
                if (F = this._yoyo,
                M = g + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(M * 100 + r, o, h);
                if (b = ve(_ % M),
                _ === m ? (x = this._repeat,
                b = g) : (X = ve(_ / M),
                x = ~~X,
                x && x === X && (b = g,
                x--),
                b > g && (b = g)),
                X = Wu(this._tTime, M),
                !d && this._tTime && X !== x && this._tTime - X * M - this._dur <= 0 && (X = x),
                F && x & 1 && (b = g - b,
                C = 1),
                x !== X && !this._lock) {
                    var $ = F && X & 1
                      , J = $ === (F && x & 1);
                    if (x < X && ($ = !$),
                    d = $ ? 0 : _ % g ? g : _,
                    this._lock = 1,
                    this.render(d || (C ? 0 : ve(x * M)), o, !g)._lock = 0,
                    this._tTime = _,
                    !o && this.parent && ai(this, "onRepeat"),
                    this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1,
                    X = x),
                    d && d !== this._time || L !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (g = this._dur,
                    m = this._tDur,
                    J && (this._lock = 2,
                    d = $ ? g : -1e-4,
                    this.render(d, !0),
                    this.vars.repeatRefresh && !C && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !L)
                        return this
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (Y = JS(this, ve(d), ve(b)),
            Y && (_ -= b - (b = Y._start))),
            this._tTime = _,
            this._time = b,
            this._act = !!q,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            d = 0),
            !d && _ && g && !o && !X && (ai(this, "onStart"),
            this._tTime !== _))
                return this;
            if (b >= d && r >= 0)
                for (y = this._first; y; ) {
                    if (E = y._next,
                    (y._act || b >= y._start) && y._ts && Y !== y) {
                        if (y.parent !== this)
                            return this.render(r, o, h);
                        if (y.render(y._ts > 0 ? (b - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (b - y._start) * y._ts, o, h),
                        b !== this._time || !this._ts && !L) {
                            Y = 0,
                            E && (_ += this._zTime = -le);
                            break
                        }
                    }
                    y = E
                }
            else {
                y = this._last;
                for (var W = r < 0 ? r : b; y; ) {
                    if (E = y._prev,
                    (y._act || W <= y._end) && y._ts && Y !== y) {
                        if (y.parent !== this)
                            return this.render(r, o, h);
                        if (y.render(y._ts > 0 ? (W - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (W - y._start) * y._ts, o, h || un && Od(y)),
                        b !== this._time || !this._ts && !L) {
                            Y = 0,
                            E && (_ += this._zTime = W ? -le : le);
                            break
                        }
                    }
                    y = E
                }
            }
            if (Y && !o && (this.pause(),
            Y.render(b >= d ? 0 : -le)._zTime = b >= d ? 1 : -1,
            this._ts))
                return this._start = H,
                vo(this),
                this.render(r, o, h);
            this._onUpdate && !o && ai(this, "onUpdate", !0),
            (_ === m && this._tTime >= this.totalDuration() || !_ && d) && (H === this._start || Math.abs(q) !== Math.abs(this._ts)) && (this._lock || ((r || !g) && (_ === m && this._ts > 0 || !_ && this._ts < 0) && oa(this, 1),
            !o && !(r < 0 && !d) && (_ || d || !m) && (ai(this, _ === m && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(_ < m && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    u.add = function(r, o) {
        var h = this;
        if (Dl(o) || (o = Di(this, o, r)),
        !(r instanceof _s)) {
            if (gn(r))
                return r.forEach(function(d) {
                    return h.add(d, o)
                }),
                this;
            if (Pe(r))
                return this.addLabel(r, o);
            if (Ae(r))
                r = Xe.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? Pi(this, r, o) : this
    }
    ,
    u.getChildren = function(r, o, h, d) {
        r === void 0 && (r = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = !0),
        d === void 0 && (d = -Ci);
        for (var m = [], g = this._first; g; )
            g._start >= d && (g instanceof Xe ? o && m.push(g) : (h && m.push(g),
            r && m.push.apply(m, g.getChildren(!0, o, h)))),
            g = g._next;
        return m
    }
    ,
    u.getById = function(r) {
        for (var o = this.getChildren(1, 1, 1), h = o.length; h--; )
            if (o[h].vars.id === r)
                return o[h]
    }
    ,
    u.remove = function(r) {
        return Pe(r) ? this.removeLabel(r) : Ae(r) ? this.killTweensOf(r) : (r.parent === this && _o(this, r),
        r === this._recent && (this._recent = this._last),
        Xa(this))
    }
    ,
    u.totalTime = function(r, o) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = ve(ii.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        f.prototype.totalTime.call(this, r, o),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    u.addLabel = function(r, o) {
        return this.labels[r] = Di(this, o),
        this
    }
    ,
    u.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    u.addPause = function(r, o, h) {
        var d = Xe.delayedCall(0, o || ps, h);
        return d.data = "isPause",
        this._hasPause = 1,
        Pi(this, d, Di(this, r))
    }
    ,
    u.removePause = function(r) {
        var o = this._first;
        for (r = Di(this, r); o; )
            o._start === r && o.data === "isPause" && oa(o),
            o = o._next
    }
    ,
    u.killTweensOf = function(r, o, h) {
        for (var d = this.getTweensOf(r, h), m = d.length; m--; )
            na !== d[m] && d[m].kill(r, o);
        return this
    }
    ,
    u.getTweensOf = function(r, o) {
        for (var h = [], d = wi(r), m = this._first, g = Dl(o), _; m; )
            m instanceof Xe ? XS(m._targets, d) && (g ? (!na || m._initted && m._ts) && m.globalTime(0) <= o && m.globalTime(m.totalDuration()) > o : !o || m.isActive()) && h.push(m) : (_ = m.getTweensOf(d, o)).length && h.push.apply(h, _),
            m = m._next;
        return h
    }
    ,
    u.tweenTo = function(r, o) {
        o = o || {};
        var h = this, d = Di(h, r), m = o, g = m.startAt, _ = m.onStart, S = m.onStartParams, b = m.immediateRender, y, E = Xe.to(h, ci({
            ease: o.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: d,
            overwrite: "auto",
            duration: o.duration || Math.abs((d - (g && "time"in g ? g.time : h._time)) / h.timeScale()) || le,
            onStart: function() {
                if (h.pause(),
                !y) {
                    var M = o.duration || Math.abs((d - (g && "time"in g ? g.time : h._time)) / h.timeScale());
                    E._dur !== M && $u(E, M, 0, 1).render(E._time, !0, !0),
                    y = 1
                }
                _ && _.apply(E, S || [])
            }
        }, o));
        return b ? E.render(0) : E
    }
    ,
    u.tweenFromTo = function(r, o, h) {
        return this.tweenTo(o, ci({
            startAt: {
                time: Di(this, r)
            }
        }, h))
    }
    ,
    u.recent = function() {
        return this._recent
    }
    ,
    u.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        Fg(this, Di(this, r))
    }
    ,
    u.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        Fg(this, Di(this, r), 1)
    }
    ,
    u.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + le)
    }
    ,
    u.shiftChildren = function(r, o, h) {
        h === void 0 && (h = 0);
        var d = this._first, m = this.labels, g;
        for (r = ve(r); d; )
            d._start >= h && (d._start += r,
            d._end += r),
            d = d._next;
        if (o)
            for (g in m)
                m[g] >= h && (m[g] += r);
        return Xa(this)
    }
    ,
    u.invalidate = function(r) {
        var o = this._first;
        for (this._lock = 0; o; )
            o.invalidate(r),
            o = o._next;
        return f.prototype.invalidate.call(this, r)
    }
    ,
    u.clear = function(r) {
        r === void 0 && (r = !0);
        for (var o = this._first, h; o; )
            h = o._next,
            this.remove(o),
            o = h;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Xa(this)
    }
    ,
    u.totalDuration = function(r) {
        var o = 0, h = this, d = h._last, m = Ci, g, _, S;
        if (arguments.length)
            return h.timeScale((h._repeat < 0 ? h.duration() : h.totalDuration()) / (h.reversed() ? -r : r));
        if (h._dirty) {
            for (S = h.parent; d; )
                g = d._prev,
                d._dirty && d.totalDuration(),
                _ = d._start,
                _ > m && h._sort && d._ts && !h._lock ? (h._lock = 1,
                Pi(h, d, _ - d._delay, 1)._lock = 0) : m = _,
                _ < 0 && d._ts && (o -= _,
                (!S && !h._dp || S && S.smoothChildTiming) && (h._start += ve(_ / h._ts),
                h._time -= _,
                h._tTime -= _),
                h.shiftChildren(-_, !1, -1 / 0),
                m = 0),
                d._end > o && d._ts && (o = d._end),
                d = g;
            $u(h, h === ye && h._time > o ? h._time : o, 1, 1),
            h._dirty = 0
        }
        return h._tDur
    }
    ,
    i.updateRoot = function(r) {
        if (ye._ts && (Q_(ye, ro(r, ye)),
        G_ = ii.frame),
        ii.frame >= Zg) {
            Zg += ri.autoSleep || 120;
            var o = ye._first;
            if ((!o || !o._ts) && ri.autoSleep && ii._listeners.length < 2) {
                for (; o && !o._ts; )
                    o = o._next;
                o || ii.sleep()
            }
        }
    }
    ,
    i
}
)(_s);
ci(Yn.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var fb = function(i, u, a, r, o, h, d) {
    var m = new qn(this._pt,i,u,0,1,g1,null,o), g = 0, _ = 0, S, b, y, E, x, M, L, Y;
    for (m.b = a,
    m.e = r,
    a += "",
    r += "",
    (L = ~r.indexOf("random(")) && (r = ms(r)),
    h && (Y = [a, r],
    h(Y, i, u),
    a = Y[0],
    r = Y[1]),
    b = a.match(Hh) || []; S = Hh.exec(r); )
        E = S[0],
        x = r.substring(g, S.index),
        y ? y = (y + 1) % 5 : x.substr(-5) === "rgba(" && (y = 1),
        E !== b[_++] && (M = parseFloat(b[_ - 1]) || 0,
        m._pt = {
            _next: m._pt,
            p: x || _ === 1 ? x : ",",
            s: M,
            c: E.charAt(1) === "=" ? Gu(M, E) - M : parseFloat(E) - M,
            m: y && y < 4 ? Math.round : 0
        },
        g = Hh.lastIndex);
    return m.c = g < r.length ? r.substring(g, r.length) : "",
    m.fp = d,
    (L_.test(r) || L) && (m.e = 0),
    this._pt = m,
    m
}, Md = function(i, u, a, r, o, h, d, m, g, _) {
    Ae(r) && (r = r(o || 0, i, h));
    var S = i[u], b = a !== "get" ? a : Ae(S) ? g ? i[u.indexOf("set") || !Ae(i["get" + u.substr(3)]) ? u : "get" + u.substr(3)](g) : i[u]() : S, y = Ae(S) ? g ? gb : p1 : wd, E;
    if (Pe(r) && (~r.indexOf("random(") && (r = ms(r)),
    r.charAt(1) === "=" && (E = Gu(b, r) + (pn(b) || 0),
    (E || E === 0) && (r = E))),
    !_ || b !== r || id)
        return !isNaN(b * r) && r !== "" ? (E = new qn(this._pt,i,u,+b || 0,r - (b || 0),typeof S == "boolean" ? vb : m1,0,y),
        g && (E.fp = g),
        d && E.modifier(d, this, i),
        this._pt = E) : (!S && !(u in i) && Ed(u, r),
        fb.call(this, i, u, b, r, y, m || ri.stringFilter, g))
}, hb = function(i, u, a, r, o) {
    if (Ae(i) && (i = ns(i, o, u, a, r)),
    !nl(i) || i.style && i.nodeType || gn(i) || B_(i))
        return Pe(i) ? ns(i, o, u, a, r) : i;
    var h = {}, d;
    for (d in i)
        h[d] = ns(i[d], o, u, a, r);
    return h
}, f1 = function(i, u, a, r, o, h) {
    var d, m, g, _;
    if (ei[i] && (d = new ei[i]).init(o, d.rawVars ? u[i] : hb(u[i], r, o, h, a), a, r, h) !== !1 && (a._pt = m = new qn(a._pt,o,i,0,1,d.render,d,0,d.priority),
    a !== qu))
        for (g = a._ptLookup[a._targets.indexOf(o)],
        _ = d._props.length; _--; )
            g[d._props[_]] = m;
    return d
}, na, id, Cd = function f(i, u, a) {
    var r = i.vars, o = r.ease, h = r.startAt, d = r.immediateRender, m = r.lazy, g = r.onUpdate, _ = r.runBackwards, S = r.yoyoEase, b = r.keyframes, y = r.autoRevert, E = i._dur, x = i._startAt, M = i._targets, L = i.parent, Y = L && L.data === "nested" ? L.vars.targets : M, q = i._overwrite === "auto" && !Sd, H = i.timeline, X = r.easeReverse || S, F, C, $, J, W, dt, tt, bt, ht, _t, R, Q, et;
    if (H && (!b || !o) && (o = "none"),
    i._ease = Ga(o, hs.ease),
    i._rEase = X && (Ga(X) || i._ease),
    i._from = !H && !!r.runBackwards,
    i._from && (i.ratio = 1),
    !H || b && !r.stagger) {
        if (bt = M[0] ? qa(M[0]).harness : 0,
        Q = bt && r[bt.prop],
        F = uo(r, zd),
        x && (x._zTime < 0 && x.progress(1),
        u < 0 && _ && d && !y ? x.render(-1, !0) : x.revert(_ && E ? Fc : jS),
        x._lazy = 0),
        h) {
            if (oa(i._startAt = Xe.set(M, ci({
                data: "isStart",
                overwrite: !1,
                parent: L,
                immediateRender: !0,
                lazy: !x && Ln(m),
                startAt: null,
                delay: 0,
                onUpdate: g && function() {
                    return ai(i, "onUpdate")
                }
                ,
                stagger: 0
            }, h))),
            i._startAt._dp = 0,
            i._startAt._sat = i,
            u < 0 && (un || !d && !y) && i._startAt.revert(Fc),
            d && E && u <= 0 && a <= 0) {
                u && (i._zTime = u);
                return
            }
        } else if (_ && E && !x) {
            if (u && (d = !1),
            $ = ci({
                overwrite: !1,
                data: "isFromStart",
                lazy: d && !x && Ln(m),
                immediateRender: d,
                stagger: 0,
                parent: L
            }, F),
            Q && ($[bt.prop] = Q),
            oa(i._startAt = Xe.set(M, $)),
            i._startAt._dp = 0,
            i._startAt._sat = i,
            u < 0 && (un ? i._startAt.revert(Fc) : i._startAt.render(-1, !0)),
            i._zTime = u,
            !d)
                f(i._startAt, le, le);
            else if (!u)
                return
        }
        for (i._pt = i._ptCache = 0,
        m = E && Ln(m) || m && !E,
        C = 0; C < M.length; C++) {
            if (W = M[C],
            tt = W._gsap || Dd(M)[C]._gsap,
            i._ptLookup[C] = _t = {},
            $h[tt.id] && ra.length && ao(),
            R = Y === M ? C : Y.indexOf(W),
            bt && (ht = new bt).init(W, Q || F, i, R, Y) !== !1 && (i._pt = J = new qn(i._pt,W,ht.name,0,1,ht.render,ht,0,ht.priority),
            ht._props.forEach(function(rt) {
                _t[rt] = J
            }),
            ht.priority && (dt = 1)),
            !bt || Q)
                for ($ in F)
                    ei[$] && (ht = f1($, F, i, R, W, Y)) ? ht.priority && (dt = 1) : _t[$] = J = Md.call(i, W, $, "get", F[$], R, Y, 0, r.stringFilter);
            i._op && i._op[C] && i.kill(W, i._op[C]),
            q && i._pt && (na = i,
            ye.killTweensOf(W, _t, i.globalTime(u)),
            et = !i.parent,
            na = 0),
            i._pt && m && ($h[tt.id] = 1)
        }
        dt && _1(i),
        i._onInit && i._onInit(i)
    }
    i._onUpdate = g,
    i._initted = (!i._op || i._pt) && !et,
    b && u <= 0 && H.render(Ci, !0, !0)
}, db = function(i, u, a, r, o, h, d, m) {
    var g = (i._pt && i._ptCache || (i._ptCache = {}))[u], _, S, b, y;
    if (!g)
        for (g = i._ptCache[u] = [],
        b = i._ptLookup,
        y = i._targets.length; y--; ) {
            if (_ = b[y][u],
            _ && _.d && _.d._pt)
                for (_ = _.d._pt; _ && _.p !== u && _.fp !== u; )
                    _ = _._next;
            if (!_)
                return id = 1,
                i.vars[u] = "+=0",
                Cd(i, d),
                id = 0,
                m ? ds(u + " not eligible for reset. Try splitting into individual properties") : 1;
            g.push(_)
        }
    for (y = g.length; y--; )
        S = g[y],
        _ = S._pt || S,
        _.s = (r || r === 0) && !o ? r : _.s + (r || 0) + h * _.c,
        _.c = a - _.s,
        S.e && (S.e = we(a) + pn(S.e)),
        S.b && (S.b = _.s + pn(S.b))
}, pb = function(i, u) {
    var a = i[0] ? qa(i[0]).harness : 0, r = a && a.aliases, o, h, d, m;
    if (!r)
        return u;
    o = Fu({}, u);
    for (h in r)
        if (h in o)
            for (m = r[h].split(","),
            d = m.length; d--; )
                o[m[d]] = o[h];
    return o
}, mb = function(i, u, a, r) {
    var o = u.ease || r || "power1.inOut", h, d;
    if (gn(u))
        d = a[i] || (a[i] = []),
        u.forEach(function(m, g) {
            return d.push({
                t: g / (u.length - 1) * 100,
                v: m,
                e: o
            })
        });
    else
        for (h in u)
            d = a[h] || (a[h] = []),
            h === "ease" || d.push({
                t: parseFloat(i),
                v: u[h],
                e: o
            })
}, ns = function(i, u, a, r, o) {
    return Ae(i) ? i.call(u, a, r, o) : Pe(i) && ~i.indexOf("random(") ? ms(i) : i
}, h1 = Ad + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", d1 = {};
jn(h1 + ",id,stagger,delay,duration,paused,scrollTrigger", function(f) {
    return d1[f] = 1
});
var Xe = (function(f) {
    U_(i, f);
    function i(a, r, o, h) {
        var d;
        typeof r == "number" && (o.duration = r,
        r = o,
        o = null),
        d = f.call(this, h ? r : ts(r)) || this;
        var m = d.vars, g = m.duration, _ = m.delay, S = m.immediateRender, b = m.stagger, y = m.overwrite, E = m.keyframes, x = m.defaults, M = m.scrollTrigger, L = r.parent || ye, Y = (gn(a) || B_(a) ? Dl(a[0]) : "length"in r) ? [a] : wi(a), q, H, X, F, C, $, J, W;
        if (d._targets = Y.length ? Dd(Y) : ds("GSAP target " + a + " not found. https://gsap.com", !ri.nullTargetWarn) || [],
        d._ptLookup = [],
        d._overwrite = y,
        E || b || Hc(g) || Hc(_)) {
            r = d.vars;
            var dt = r.easeReverse || r.yoyoEase;
            if (q = d.timeline = new Yn({
                data: "nested",
                defaults: x || {},
                targets: L && L.data === "nested" ? L.vars.targets : Y
            }),
            q.kill(),
            q.parent = q._dp = xl(d),
            q._start = 0,
            b || Hc(g) || Hc(_)) {
                if (F = Y.length,
                J = b && I_(b),
                nl(b))
                    for (C in b)
                        ~h1.indexOf(C) && (W || (W = {}),
                        W[C] = b[C]);
                for (H = 0; H < F; H++)
                    X = uo(r, d1),
                    X.stagger = 0,
                    dt && (X.easeReverse = dt),
                    W && Fu(X, W),
                    $ = Y[H],
                    X.duration = +ns(g, xl(d), H, $, Y),
                    X.delay = (+ns(_, xl(d), H, $, Y) || 0) - d._delay,
                    !b && F === 1 && X.delay && (d._delay = _ = X.delay,
                    d._start += _,
                    X.delay = 0),
                    q.to($, X, J ? J(H, $, Y) : 0),
                    q._ease = Xt.none;
                q.duration() ? g = _ = 0 : d.timeline = 0
            } else if (E) {
                ts(ci(q.vars.defaults, {
                    ease: "none"
                })),
                q._ease = Ga(E.ease || r.ease || "none");
                var tt = 0, bt, ht, _t;
                if (gn(E))
                    E.forEach(function(R) {
                        return q.to(Y, R, ">")
                    }),
                    q.duration();
                else {
                    X = {};
                    for (C in E)
                        C === "ease" || C === "easeEach" || mb(C, E[C], X, E.easeEach);
                    for (C in X)
                        for (bt = X[C].sort(function(R, Q) {
                            return R.t - Q.t
                        }),
                        tt = 0,
                        H = 0; H < bt.length; H++)
                            ht = bt[H],
                            _t = {
                                ease: ht.e,
                                duration: (ht.t - (H ? bt[H - 1].t : 0)) / 100 * g
                            },
                            _t[C] = ht.v,
                            q.to(Y, _t, tt),
                            tt += _t.duration;
                    q.duration() < g && q.to({}, {
                        duration: g - q.duration()
                    })
                }
            }
            g || d.duration(g = q.duration())
        } else
            d.timeline = 0;
        return y === !0 && !Sd && (na = xl(d),
        ye.killTweensOf(Y),
        na = 0),
        Pi(L, xl(d), o),
        r.reversed && d.reverse(),
        r.paused && d.paused(!0),
        (S || !g && !E && d._start === ve(L._time) && Ln(S) && ZS(xl(d)) && L.data !== "nested") && (d._tTime = -le,
        d.render(Math.max(0, -_) || 0)),
        M && F_(xl(d), M),
        d
    }
    var u = i.prototype;
    return u.render = function(r, o, h) {
        var d = this._time, m = this._tDur, g = this._dur, _ = r < 0, S = r > m - le && !_ ? m : r < le ? 0 : r, b, y, E, x, M, L, Y, q;
        if (!g)
            KS(this, r, o, h);
        else if (S !== this._tTime || !r || h || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
            if (b = S,
            q = this.timeline,
            this._repeat) {
                if (x = g + this._rDelay,
                this._repeat < -1 && _)
                    return this.totalTime(x * 100 + r, o, h);
                if (b = ve(S % x),
                S === m ? (E = this._repeat,
                b = g) : (M = ve(S / x),
                E = ~~M,
                E && E === M ? (b = g,
                E--) : b > g && (b = g)),
                L = this._yoyo && E & 1,
                L && (b = g - b),
                M = Wu(this._tTime, x),
                b === d && !h && this._initted && E === M)
                    return this._tTime = S,
                    this;
                E !== M && this.vars.repeatRefresh && !L && !this._lock && b !== x && this._initted && (this._lock = h = 1,
                this.render(ve(x * E), !0).invalidate()._lock = 0)
            }
            if (!this._initted) {
                if (W_(this, _ ? r : b, h, o, S))
                    return this._tTime = 0,
                    this;
                if (d !== this._time && !(h && this.vars.repeatRefresh && E !== M))
                    return this;
                if (g !== this._dur)
                    return this.render(r, o, h)
            }
            if (this._rEase) {
                var H = b < d;
                if (H !== this._inv) {
                    var X = H ? d : g - d;
                    this._inv = H,
                    this._from && (this.ratio = 1 - this.ratio),
                    this._invRatio = this.ratio,
                    this._invTime = d,
                    this._invRecip = X ? (H ? -1 : 1) / X : 0,
                    this._invScale = H ? -this.ratio : 1 - this.ratio,
                    this._invEase = H ? this._rEase : this._ease
                }
                this.ratio = Y = this._invRatio + this._invScale * this._invEase((b - this._invTime) * this._invRecip)
            } else
                this.ratio = Y = this._ease(b / g);
            if (this._from && (this.ratio = Y = 1 - Y),
            this._tTime = S,
            this._time = b,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            !d && S && !o && !M && (ai(this, "onStart"),
            this._tTime !== S))
                return this;
            for (y = this._pt; y; )
                y.r(Y, y.d),
                y = y._next;
            q && q.render(r < 0 ? r : q._dur * q._ease(b / this._dur), o, h) || this._startAt && (this._zTime = r),
            this._onUpdate && !o && (_ && Ph(this, r, o, h),
            ai(this, "onUpdate")),
            this._repeat && E !== M && this.vars.onRepeat && !o && this.parent && ai(this, "onRepeat"),
            (S === this._tDur || !S) && this._tTime === S && (_ && !this._onUpdate && Ph(this, r, !0, !0),
            (r || !g) && (S === this._tDur && this._ts > 0 || !S && this._ts < 0) && oa(this, 1),
            !o && !(_ && !d) && (S || d || L) && (ai(this, S === m ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(S < m && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    u.targets = function() {
        return this._targets
    }
    ,
    u.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        f.prototype.invalidate.call(this, r)
    }
    ,
    u.resetTo = function(r, o, h, d, m) {
        gs || ii.wake(),
        this._ts || this.play();
        var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), _;
        return this._initted || Cd(this, g),
        _ = this._ease(g / this._dur),
        db(this, r, o, h, d, _, g, m) ? this.resetTo(r, o, h, d, 1) : (yo(this, 0),
        this.parent || K_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    u.kill = function(r, o) {
        if (o === void 0 && (o = "all"),
        !r && (!o || o === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Kr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!un),
            this;
        if (this.timeline) {
            var h = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, o, na && na.vars.overwrite !== !0)._first || Kr(this),
            this.parent && h !== this.timeline.totalDuration() && $u(this, this._dur * this.timeline._tDur / h, 0, 1),
            this
        }
        var d = this._targets, m = r ? wi(r) : d, g = this._ptLookup, _ = this._pt, S, b, y, E, x, M, L;
        if ((!o || o === "all") && VS(d, m))
            return o === "all" && (this._pt = 0),
            Kr(this);
        for (S = this._op = this._op || [],
        o !== "all" && (Pe(o) && (x = {},
        jn(o, function(Y) {
            return x[Y] = 1
        }),
        o = x),
        o = pb(d, o)),
        L = d.length; L--; )
            if (~m.indexOf(d[L])) {
                b = g[L],
                o === "all" ? (S[L] = o,
                E = b,
                y = {}) : (y = S[L] = S[L] || {},
                E = o);
                for (x in E)
                    M = b && b[x],
                    M && ((!("kill"in M.d) || M.d.kill(x) === !0) && _o(this, M, "_pt"),
                    delete b[x]),
                    y !== "all" && (y[x] = 1)
            }
        return this._initted && !this._pt && _ && Kr(this),
        this
    }
    ,
    i.to = function(r, o) {
        return new i(r,o,arguments[2])
    }
    ,
    i.from = function(r, o) {
        return es(1, arguments)
    }
    ,
    i.delayedCall = function(r, o, h, d) {
        return new i(o,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: h,
            onReverseCompleteParams: h,
            callbackScope: d
        })
    }
    ,
    i.fromTo = function(r, o, h) {
        return es(2, arguments)
    }
    ,
    i.set = function(r, o) {
        return o.duration = 0,
        o.repeatDelay || (o.repeat = 0),
        new i(r,o)
    }
    ,
    i.killTweensOf = function(r, o, h) {
        return ye.killTweensOf(r, o, h)
    }
    ,
    i
}
)(_s);
ci(Xe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
jn("staggerTo,staggerFrom,staggerFromTo", function(f) {
    Xe[f] = function() {
        var i = new Yn
          , u = td.call(arguments, 0);
        return u.splice(f === "staggerFromTo" ? 5 : 4, 0, 0),
        i[f].apply(i, u)
    }
});
var wd = function(i, u, a) {
    return i[u] = a
}
  , p1 = function(i, u, a) {
    return i[u](a)
}
  , gb = function(i, u, a, r) {
    return i[u](r.fp, a)
}
  , _b = function(i, u, a) {
    return i.setAttribute(u, a)
}
  , Rd = function(i, u) {
    return Ae(i[u]) ? p1 : bd(i[u]) && i.setAttribute ? _b : wd
}
  , m1 = function(i, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * i) * 1e6) / 1e6, u)
}
  , vb = function(i, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * i), u)
}
  , g1 = function(i, u) {
    var a = u._pt
      , r = "";
    if (!i && u.b)
        r = u.b;
    else if (i === 1 && u.e)
        r = u.e;
    else {
        for (; a; )
            r = a.p + (a.m ? a.m(a.s + a.c * i) : Math.round((a.s + a.c * i) * 1e4) / 1e4) + r,
            a = a._next;
        r += u.c
    }
    u.set(u.t, u.p, r, u)
}
  , Nd = function(i, u) {
    for (var a = u._pt; a; )
        a.r(i, a.d),
        a = a._next
}
  , yb = function(i, u, a, r) {
    for (var o = this._pt, h; o; )
        h = o._next,
        o.p === r && o.modifier(i, u, a),
        o = h
}
  , Sb = function(i) {
    for (var u = this._pt, a, r; u; )
        r = u._next,
        u.p === i && !u.op || u.op === i ? _o(this, u, "_pt") : u.dep || (a = 1),
        u = r;
    return !a
}
  , bb = function(i, u, a, r) {
    r.mSet(i, u, r.m.call(r.tween, a, r.mt), r)
}
  , _1 = function(i) {
    for (var u = i._pt, a, r, o, h; u; ) {
        for (a = u._next,
        r = o; r && r.pr > u.pr; )
            r = r._next;
        (u._prev = r ? r._prev : h) ? u._prev._next = u : o = u,
        (u._next = r) ? r._prev = u : h = u,
        u = a
    }
    i._pt = o
}
  , qn = (function() {
    function f(u, a, r, o, h, d, m, g, _) {
        this.t = a,
        this.s = o,
        this.c = h,
        this.p = r,
        this.r = d || m1,
        this.d = m || this,
        this.set = g || wd,
        this.pr = _ || 0,
        this._next = u,
        u && (u._prev = this)
    }
    var i = f.prototype;
    return i.modifier = function(a, r, o) {
        this.mSet = this.mSet || this.set,
        this.set = bb,
        this.m = a,
        this.mt = o,
        this.tween = r
    }
    ,
    f
}
)();
jn(Ad + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(f) {
    return zd[f] = 1
});
si.TweenMax = si.TweenLite = Xe;
si.TimelineLite = si.TimelineMax = Yn;
ye = new Yn({
    sortChildren: !1,
    defaults: hs,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
ri.stringFilter = s1;
var Va = []
  , $c = {}
  , xb = []
  , $g = 0
  , Tb = 0
  , qh = function(i) {
    return ($c[i] || xb).map(function(u) {
        return u()
    })
}
  , ld = function() {
    var i = Date.now()
      , u = [];
    i - $g > 2 && (qh("matchMediaInit"),
    Va.forEach(function(a) {
        var r = a.queries, o = a.conditions, h, d, m, g;
        for (d in r)
            h = Wi.matchMedia(r[d]).matches,
            h && (m = 1),
            h !== o[d] && (o[d] = h,
            g = 1);
        g && (a.revert(),
        m && u.push(a))
    }),
    qh("matchMediaRevert"),
    u.forEach(function(a) {
        return a.onMatch(a, function(r) {
            return a.add(null, r)
        })
    }),
    $g = i,
    qh("matchMedia"))
}
  , v1 = (function() {
    function f(u, a) {
        this.selector = a && ed(a),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Tb++,
        u && this.add(u)
    }
    var i = f.prototype;
    return i.add = function(a, r, o) {
        Ae(a) && (o = r,
        r = a,
        a = Ae);
        var h = this
          , d = function() {
            var g = de, _ = h.selector, S;
            return g && g !== h && g.data.push(h),
            o && (h.selector = ed(o)),
            de = h,
            S = r.apply(h, arguments),
            Ae(S) && h._r.push(S),
            de = g,
            h.selector = _,
            h.isReverted = !1,
            S
        };
        return h.last = d,
        a === Ae ? d(h, function(m) {
            return h.add(null, m)
        }) : a ? h[a] = d : d
    }
    ,
    i.ignore = function(a) {
        var r = de;
        de = null,
        a(this),
        de = r
    }
    ,
    i.getTweens = function() {
        var a = [];
        return this.data.forEach(function(r) {
            return r instanceof f ? a.push.apply(a, r.getTweens()) : r instanceof Xe && !(r.parent && r.parent.data === "nested") && a.push(r)
        }),
        a
    }
    ,
    i.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    i.kill = function(a, r) {
        var o = this;
        if (a ? (function() {
            for (var d = o.getTweens(), m = o.data.length, g; m--; )
                g = o.data[m],
                g.data === "isFlip" && (g.revert(),
                g.getChildren(!0, !0, !1).forEach(function(_) {
                    return d.splice(d.indexOf(_), 1)
                }));
            for (d.map(function(_) {
                return {
                    g: _._dur || _._delay || _._sat && !_._sat.vars.immediateRender ? _.globalTime(0) : -1 / 0,
                    t: _
                }
            }).sort(function(_, S) {
                return S.g - _.g || -1 / 0
            }).forEach(function(_) {
                return _.t.revert(a)
            }),
            m = o.data.length; m--; )
                g = o.data[m],
                g instanceof Yn ? g.data !== "nested" && (g.scrollTrigger && g.scrollTrigger.revert(),
                g.kill()) : !(g instanceof Xe) && g.revert && g.revert(a);
            o._r.forEach(function(_) {
                return _(a, o)
            }),
            o.isReverted = !0
        }
        )() : this.data.forEach(function(d) {
            return d.kill && d.kill()
        }),
        this.clear(),
        r)
            for (var h = Va.length; h--; )
                Va[h].id === this.id && Va.splice(h, 1)
    }
    ,
    i.revert = function(a) {
        this.kill(a || {})
    }
    ,
    f
}
)()
  , Eb = (function() {
    function f(u) {
        this.contexts = [],
        this.scope = u,
        de && de.data.push(this)
    }
    var i = f.prototype;
    return i.add = function(a, r, o) {
        nl(a) || (a = {
            matches: a
        });
        var h = new v1(0,o || this.scope), d = h.conditions = {}, m, g, _;
        de && !h.selector && (h.selector = de.selector),
        this.contexts.push(h),
        r = h.add("onMatch", r),
        h.queries = a;
        for (g in a)
            g === "all" ? _ = 1 : (m = Wi.matchMedia(a[g]),
            m && (Va.indexOf(h) < 0 && Va.push(h),
            (d[g] = m.matches) && (_ = 1),
            m.addListener ? m.addListener(ld) : m.addEventListener("change", ld)));
        return _ && r(h, function(S) {
            return h.add(null, S)
        }),
        this
    }
    ,
    i.revert = function(a) {
        this.kill(a || {})
    }
    ,
    i.kill = function(a) {
        this.contexts.forEach(function(r) {
            return r.kill(a, !0)
        })
    }
    ,
    f
}
)()
  , so = {
    registerPlugin: function() {
        for (var i = arguments.length, u = new Array(i), a = 0; a < i; a++)
            u[a] = arguments[a];
        u.forEach(function(r) {
            return a1(r)
        })
    },
    timeline: function(i) {
        return new Yn(i)
    },
    getTweensOf: function(i, u) {
        return ye.getTweensOf(i, u)
    },
    getProperty: function(i, u, a, r) {
        Pe(i) && (i = wi(i)[0]);
        var o = qa(i || {}).get
          , h = a ? k_ : Z_;
        return a === "native" && (a = ""),
        i && (u ? h((ei[u] && ei[u].get || o)(i, u, a, r)) : function(d, m, g) {
            return h((ei[d] && ei[d].get || o)(i, d, m, g))
        }
        )
    },
    quickSetter: function(i, u, a) {
        if (i = wi(i),
        i.length > 1) {
            var r = i.map(function(_) {
                return Gn.quickSetter(_, u, a)
            })
              , o = r.length;
            return function(_) {
                for (var S = o; S--; )
                    r[S](_)
            }
        }
        i = i[0] || {};
        var h = ei[u]
          , d = qa(i)
          , m = d.harness && (d.harness.aliases || {})[u] || u
          , g = h ? function(_) {
            var S = new h;
            qu._pt = 0,
            S.init(i, a ? _ + a : _, qu, 0, [i]),
            S.render(1, S),
            qu._pt && Nd(1, qu)
        }
        : d.set(i, m);
        return h ? g : function(_) {
            return g(i, m, a ? _ + a : _, d, 1)
        }
    },
    quickTo: function(i, u, a) {
        var r, o = Gn.to(i, ci((r = {},
        r[u] = "+=0.1",
        r.paused = !0,
        r.stagger = 0,
        r), a || {})), h = function(m, g, _) {
            return o.resetTo(u, m, g, _)
        };
        return h.tween = o,
        h
    },
    isTweening: function(i) {
        return ye.getTweensOf(i, !0).length > 0
    },
    defaults: function(i) {
        return i && i.ease && (i.ease = Ga(i.ease, hs.ease)),
        kg(hs, i || {})
    },
    config: function(i) {
        return kg(ri, i || {})
    },
    registerEffect: function(i) {
        var u = i.name
          , a = i.effect
          , r = i.plugins
          , o = i.defaults
          , h = i.extendTimeline;
        (r || "").split(",").forEach(function(d) {
            return d && !ei[d] && !si[d] && ds(u + " effect requires " + d + " plugin.")
        }),
        Bh[u] = function(d, m, g) {
            return a(wi(d), ci(m || {}, o), g)
        }
        ,
        h && (Yn.prototype[u] = function(d, m, g) {
            return this.add(Bh[u](d, nl(m) ? m : (g = m) && {}, this), g)
        }
        )
    },
    registerEase: function(i, u) {
        Xt[i] = Ga(u)
    },
    parseEase: function(i, u) {
        return arguments.length ? Ga(i, u) : Xt
    },
    getById: function(i) {
        return ye.getById(i)
    },
    exportRoot: function(i, u) {
        i === void 0 && (i = {});
        var a = new Yn(i), r, o;
        for (a.smoothChildTiming = Ln(i.smoothChildTiming),
        ye.remove(a),
        a._dp = 0,
        a._time = a._tTime = ye._time,
        r = ye._first; r; )
            o = r._next,
            (u || !(!r._dur && r instanceof Xe && r.vars.onComplete === r._targets[0])) && Pi(a, r, r._start - r._delay),
            r = o;
        return Pi(ye, a, 0),
        a
    },
    context: function(i, u) {
        return i ? new v1(i,u) : de
    },
    matchMedia: function(i) {
        return new Eb(i)
    },
    matchMediaRefresh: function() {
        return Va.forEach(function(i) {
            var u = i.conditions, a, r;
            for (r in u)
                u[r] && (u[r] = !1,
                a = 1);
            a && i.revert()
        }) || ld()
    },
    addEventListener: function(i, u) {
        var a = $c[i] || ($c[i] = []);
        ~a.indexOf(u) || a.push(u)
    },
    removeEventListener: function(i, u) {
        var a = $c[i]
          , r = a && a.indexOf(u);
        r >= 0 && a.splice(r, 1)
    },
    utils: {
        wrap: eb,
        wrapYoyo: nb,
        distribute: I_,
        random: e1,
        snap: t1,
        normalize: tb,
        getUnit: pn,
        clamp: WS,
        splitColor: u1,
        toArray: wi,
        selector: ed,
        mapRange: i1,
        pipe: PS,
        unitize: IS,
        interpolate: ib,
        shuffle: P_
    },
    install: q_,
    effects: Bh,
    ticker: ii,
    updateRoot: Yn.updateRoot,
    plugins: ei,
    globalTimeline: ye,
    core: {
        PropTween: qn,
        globals: X_,
        Tween: Xe,
        Timeline: Yn,
        Animation: _s,
        getCache: qa,
        _removeLinkedListItem: _o,
        reverting: function() {
            return un
        },
        context: function(i) {
            return i && de && (de.data.push(i),
            i._ctx = de),
            de
        },
        suppressOverwrites: function(i) {
            return Sd = i
        }
    }
};
jn("to,from,fromTo,delayedCall,set,killTweensOf", function(f) {
    return so[f] = Xe[f]
});
ii.add(Yn.updateRoot);
qu = so.to({}, {
    duration: 0
});
var zb = function(i, u) {
    for (var a = i._pt; a && a.p !== u && a.op !== u && a.fp !== u; )
        a = a._next;
    return a
}
  , Ab = function(i, u) {
    var a = i._targets, r, o, h;
    for (r in u)
        for (o = a.length; o--; )
            h = i._ptLookup[o][r],
            h && (h = h.d) && (h._pt && (h = zb(h, r)),
            h && h.modifier && h.modifier(u[r], i, a[o], r))
}
  , Xh = function(i, u) {
    return {
        name: i,
        headless: 1,
        rawVars: 1,
        init: function(r, o, h) {
            h._onInit = function(d) {
                var m, g;
                if (Pe(o) && (m = {},
                jn(o, function(_) {
                    return m[_] = 1
                }),
                o = m),
                u) {
                    m = {};
                    for (g in o)
                        m[g] = u(o[g]);
                    o = m
                }
                Ab(d, o)
            }
        }
    }
}
  , Gn = so.registerPlugin({
    name: "attr",
    init: function(i, u, a, r, o) {
        var h, d, m;
        this.tween = a;
        for (h in u)
            m = i.getAttribute(h) || "",
            d = this.add(i, "setAttribute", (m || 0) + "", u[h], r, o, 0, 0, h),
            d.op = h,
            d.b = m,
            this._props.push(h)
    },
    render: function(i, u) {
        for (var a = u._pt; a; )
            un ? a.set(a.t, a.p, a.b, a) : a.r(i, a.d),
            a = a._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(i, u) {
        for (var a = u.length; a--; )
            this.add(i, a, i[a] || 0, u[a], 0, 0, 0, 0, 0, 1)
    }
}, Xh("roundProps", nd), Xh("modifiers"), Xh("snap", t1)) || so;
Xe.version = Yn.version = Gn.version = "3.15.0";
j_ = 1;
xd() && Pu();
Xt.Power0;
Xt.Power1;
Xt.Power2;
Xt.Power3;
Xt.Power4;
Xt.Linear;
Xt.Quad;
Xt.Cubic;
Xt.Quart;
Xt.Quint;
Xt.Strong;
Xt.Elastic;
Xt.Back;
Xt.SteppedEase;
Xt.Bounce;
Xt.Sine;
Xt.Expo;
Xt.Circ;
var Pg, ia, Vu, Ud, La, Ig, Hd, Db = function() {
    return typeof window < "u"
}, Ol = {}, Ha = 180 / Math.PI, Qu = Math.PI / 180, Nu = Math.atan2, t_ = 1e8, Bd = /([A-Z])/g, Ob = /(left|right|width|margin|padding|x)/i, Mb = /[\s,\(]\S/, Ii = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ad = function(i, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * i) * 1e4) / 1e4 + u.u, u)
}, Cb = function(i, u) {
    return u.set(u.t, u.p, i === 1 ? u.e : Math.round((u.s + u.c * i) * 1e4) / 1e4 + u.u, u)
}, wb = function(i, u) {
    return u.set(u.t, u.p, i ? Math.round((u.s + u.c * i) * 1e4) / 1e4 + u.u : u.b, u)
}, Rb = function(i, u) {
    return u.set(u.t, u.p, i === 1 ? u.e : i ? Math.round((u.s + u.c * i) * 1e4) / 1e4 + u.u : u.b, u)
}, Nb = function(i, u) {
    var a = u.s + u.c * i;
    u.set(u.t, u.p, ~~(a + (a < 0 ? -.5 : .5)) + u.u, u)
}, y1 = function(i, u) {
    return u.set(u.t, u.p, i ? u.e : u.b, u)
}, S1 = function(i, u) {
    return u.set(u.t, u.p, i !== 1 ? u.b : u.e, u)
}, Ub = function(i, u, a) {
    return i.style[u] = a
}, Hb = function(i, u, a) {
    return i.style.setProperty(u, a)
}, Bb = function(i, u, a) {
    return i._gsap[u] = a
}, Yb = function(i, u, a) {
    return i._gsap.scaleX = i._gsap.scaleY = a
}, Lb = function(i, u, a, r, o) {
    var h = i._gsap;
    h.scaleX = h.scaleY = a,
    h.renderTransform(o, h)
}, jb = function(i, u, a, r, o) {
    var h = i._gsap;
    h[u] = a,
    h.renderTransform(o, h)
}, be = "transform", Xn = be + "Origin", qb = function f(i, u) {
    var a = this
      , r = this.target
      , o = r.style
      , h = r._gsap;
    if (i in Ol && o) {
        if (this.tfm = this.tfm || {},
        i !== "transform")
            i = Ii[i] || i,
            ~i.indexOf(",") ? i.split(",").forEach(function(d) {
                return a.tfm[d] = Tl(r, d)
            }) : this.tfm[i] = h.x ? h[i] : Tl(r, i),
            i === Xn && (this.tfm.zOrigin = h.zOrigin);
        else
            return Ii.transform.split(",").forEach(function(d) {
                return f.call(a, d, u)
            });
        if (this.props.indexOf(be) >= 0)
            return;
        h.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(Xn, u, "")),
        i = be
    }
    (o || u) && this.props.push(i, u, o[i])
}, b1 = function(i) {
    i.translate && (i.removeProperty("translate"),
    i.removeProperty("scale"),
    i.removeProperty("rotate"))
}, Xb = function() {
    var i = this.props, u = this.target, a = u.style, r = u._gsap, o, h;
    for (o = 0; o < i.length; o += 3)
        i[o + 1] ? i[o + 1] === 2 ? u[i[o]](i[o + 2]) : u[i[o]] = i[o + 2] : i[o + 2] ? a[i[o]] = i[o + 2] : a.removeProperty(i[o].substr(0, 2) === "--" ? i[o] : i[o].replace(Bd, "-$1").toLowerCase());
    if (this.tfm) {
        for (h in this.tfm)
            r[h] = this.tfm[h];
        r.svg && (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        o = Hd(),
        (!o || !o.isStart) && !a[be] && (b1(a),
        r.zOrigin && a[Xn] && (a[Xn] += " " + r.zOrigin + "px",
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, x1 = function(i, u) {
    var a = {
        target: i,
        props: [],
        revert: Xb,
        save: qb
    };
    return i._gsap || Gn.core.getCache(i),
    u && i.style && i.nodeType && u.split(",").forEach(function(r) {
        return a.save(r)
    }),
    a
}, T1, ud = function(i, u) {
    var a = ia.createElementNS ? ia.createElementNS((u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), i) : ia.createElement(i);
    return a && a.style ? a : ia.createElement(i)
}, ui = function f(i, u, a) {
    var r = getComputedStyle(i);
    return r[u] || r.getPropertyValue(u.replace(Bd, "-$1").toLowerCase()) || r.getPropertyValue(u) || !a && f(i, Iu(u) || u, 1) || ""
}, e_ = "O,Moz,ms,Ms,Webkit".split(","), Iu = function(i, u, a) {
    var r = u || La
      , o = r.style
      , h = 5;
    if (i in o && !a)
        return i;
    for (i = i.charAt(0).toUpperCase() + i.substr(1); h-- && !(e_[h] + i in o); )
        ;
    return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? e_[h] : "") + i
}, rd = function() {
    Db() && window.document && (Pg = window,
    ia = Pg.document,
    Vu = ia.documentElement,
    La = ud("div") || {
        style: {}
    },
    ud("div"),
    be = Iu(be),
    Xn = be + "Origin",
    La.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    T1 = !!Iu("perspective"),
    Hd = Gn.core.reverting,
    Ud = 1)
}, n_ = function(i) {
    var u = i.ownerSVGElement, a = ud("svg", u && u.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = i.cloneNode(!0), o;
    r.style.display = "block",
    a.appendChild(r),
    Vu.appendChild(a);
    try {
        o = r.getBBox()
    } catch {}
    return a.removeChild(r),
    Vu.removeChild(a),
    o
}, i_ = function(i, u) {
    for (var a = u.length; a--; )
        if (i.hasAttribute(u[a]))
            return i.getAttribute(u[a])
}, E1 = function(i) {
    var u, a;
    try {
        u = i.getBBox()
    } catch {
        u = n_(i),
        a = 1
    }
    return u && (u.width || u.height) || a || (u = n_(i)),
    u && !u.width && !u.x && !u.y ? {
        x: +i_(i, ["x", "cx", "x1"]) || 0,
        y: +i_(i, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : u
}, z1 = function(i) {
    return !!(i.getCTM && (!i.parentNode || i.ownerSVGElement) && E1(i))
}, fa = function(i, u) {
    if (u) {
        var a = i.style, r;
        u in Ol && u !== Xn && (u = be),
        a.removeProperty ? (r = u.substr(0, 2),
        (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
        a.removeProperty(r === "--" ? u : u.replace(Bd, "-$1").toLowerCase())) : a.removeAttribute(u)
    }
}, la = function(i, u, a, r, o, h) {
    var d = new qn(i._pt,u,a,0,1,h ? S1 : y1);
    return i._pt = d,
    d.b = r,
    d.e = o,
    i._props.push(a),
    d
}, l_ = {
    deg: 1,
    rad: 1,
    turn: 1
}, Gb = {
    grid: 1,
    flex: 1
}, ha = function f(i, u, a, r) {
    var o = parseFloat(a) || 0, h = (a + "").trim().substr((o + "").length) || "px", d = La.style, m = Ob.test(u), g = i.tagName.toLowerCase() === "svg", _ = (g ? "client" : "offset") + (m ? "Width" : "Height"), S = 100, b = r === "px", y = r === "%", E, x, M, L;
    if (r === h || !o || l_[r] || l_[h])
        return o;
    if (h !== "px" && !b && (o = f(i, u, a, "px")),
    L = i.getCTM && z1(i),
    (y || h === "%") && (Ol[u] || ~u.indexOf("adius")))
        return E = L ? i.getBBox()[m ? "width" : "height"] : i[_],
        we(y ? o / E * S : o / 100 * E);
    if (d[m ? "width" : "height"] = S + (b ? h : r),
    x = r !== "rem" && ~u.indexOf("adius") || r === "em" && i.appendChild && !g ? i : i.parentNode,
    L && (x = (i.ownerSVGElement || {}).parentNode),
    (!x || x === ia || !x.appendChild) && (x = ia.body),
    M = x._gsap,
    M && y && M.width && m && M.time === ii.time && !M.uncache)
        return we(o / M.width * S);
    if (y && (u === "height" || u === "width")) {
        var Y = i.style[u];
        i.style[u] = S + r,
        E = i[_],
        Y ? i.style[u] = Y : fa(i, u)
    } else
        (y || h === "%") && !Gb[ui(x, "display")] && (d.position = ui(i, "position")),
        x === i && (d.position = "static"),
        x.appendChild(La),
        E = La[_],
        x.removeChild(La),
        d.position = "absolute";
    return m && y && (M = qa(x),
    M.time = ii.time,
    M.width = x[_]),
    we(b ? E * o / S : E && o ? S / E * o : 0)
}, Tl = function(i, u, a, r) {
    var o;
    return Ud || rd(),
    u in Ii && u !== "transform" && (u = Ii[u],
    ~u.indexOf(",") && (u = u.split(",")[0])),
    Ol[u] && u !== "transform" ? (o = ys(i, r),
    o = u !== "transformOrigin" ? o[u] : o.svg ? o.origin : oo(ui(i, Xn)) + " " + o.zOrigin + "px") : (o = i.style[u],
    (!o || o === "auto" || r || ~(o + "").indexOf("calc(")) && (o = co[u] && co[u](i, u, a) || ui(i, u) || V_(i, u) || (u === "opacity" ? 1 : 0))),
    a && !~(o + "").trim().indexOf(" ") ? ha(i, u, o, a) + a : o
}, Vb = function(i, u, a, r) {
    if (!a || a === "none") {
        var o = Iu(u, i, 1)
          , h = o && ui(i, o, 1);
        h && h !== a ? (u = o,
        a = h) : u === "borderColor" && (a = ui(i, "borderTopColor"))
    }
    var d = new qn(this._pt,i.style,u,0,1,g1), m = 0, g = 0, _, S, b, y, E, x, M, L, Y, q, H, X;
    if (d.b = a,
    d.e = r,
    a += "",
    r += "",
    r.substring(0, 6) === "var(--" && (r = ui(i, r.substring(4, r.indexOf(")")))),
    r === "auto" && (x = i.style[u],
    i.style[u] = r,
    r = ui(i, u) || r,
    x ? i.style[u] = x : fa(i, u)),
    _ = [a, r],
    s1(_),
    a = _[0],
    r = _[1],
    b = a.match(ju) || [],
    X = r.match(ju) || [],
    X.length) {
        for (; S = ju.exec(r); )
            M = S[0],
            Y = r.substring(m, S.index),
            E ? E = (E + 1) % 5 : (Y.substr(-5) === "rgba(" || Y.substr(-5) === "hsla(") && (E = 1),
            M !== (x = b[g++] || "") && (y = parseFloat(x) || 0,
            H = x.substr((y + "").length),
            M.charAt(1) === "=" && (M = Gu(y, M) + H),
            L = parseFloat(M),
            q = M.substr((L + "").length),
            m = ju.lastIndex - q.length,
            q || (q = q || ri.units[u] || H,
            m === r.length && (r += q,
            d.e += q)),
            H !== q && (y = ha(i, u, x, q) || 0),
            d._pt = {
                _next: d._pt,
                p: Y || g === 1 ? Y : ",",
                s: y,
                c: L - y,
                m: E && E < 4 || u === "zIndex" ? Math.round : 0
            });
        d.c = m < r.length ? r.substring(m, r.length) : ""
    } else
        d.r = u === "display" && r === "none" ? S1 : y1;
    return L_.test(r) && (d.e = 0),
    this._pt = d,
    d
}, a_ = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Qb = function(i) {
    var u = i.split(" ")
      , a = u[0]
      , r = u[1] || "50%";
    return (a === "top" || a === "bottom" || r === "left" || r === "right") && (i = a,
    a = r,
    r = i),
    u[0] = a_[a] || a,
    u[1] = a_[r] || r,
    u.join(" ")
}, Zb = function(i, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
        var a = u.t, r = a.style, o = u.u, h = a._gsap, d, m, g;
        if (o === "all" || o === !0)
            r.cssText = "",
            m = 1;
        else
            for (o = o.split(","),
            g = o.length; --g > -1; )
                d = o[g],
                Ol[d] && (m = 1,
                d = d === "transformOrigin" ? Xn : be),
                fa(a, d);
        m && (fa(a, be),
        h && (h.svg && a.removeAttribute("transform"),
        r.scale = r.rotate = r.translate = "none",
        ys(a, 1),
        h.uncache = 1,
        b1(r)))
    }
}, co = {
    clearProps: function(i, u, a, r, o) {
        if (o.data !== "isFromStart") {
            var h = i._pt = new qn(i._pt,u,a,0,0,Zb);
            return h.u = r,
            h.pr = -10,
            h.tween = o,
            i._props.push(a),
            1
        }
    }
}, vs = [1, 0, 0, 1, 0, 0], A1 = {}, D1 = function(i) {
    return i === "matrix(1, 0, 0, 1, 0, 0)" || i === "none" || !i
}, u_ = function(i) {
    var u = ui(i, be);
    return D1(u) ? vs : u.substr(7).match(Y_).map(we)
}, Yd = function(i, u) {
    var a = i._gsap || qa(i), r = i.style, o = u_(i), h, d, m, g;
    return a.svg && i.getAttribute("transform") ? (m = i.transform.baseVal.consolidate().matrix,
    o = [m.a, m.b, m.c, m.d, m.e, m.f],
    o.join(",") === "1,0,0,1,0,0" ? vs : o) : (o === vs && !i.offsetParent && i !== Vu && !a.svg && (m = r.display,
    r.display = "block",
    h = i.parentNode,
    (!h || !i.offsetParent && !i.getBoundingClientRect().width) && (g = 1,
    d = i.nextElementSibling,
    Vu.appendChild(i)),
    o = u_(i),
    m ? r.display = m : fa(i, "display"),
    g && (d ? h.insertBefore(i, d) : h ? h.appendChild(i) : Vu.removeChild(i))),
    u && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, sd = function(i, u, a, r, o, h) {
    var d = i._gsap, m = o || Yd(i, !0), g = d.xOrigin || 0, _ = d.yOrigin || 0, S = d.xOffset || 0, b = d.yOffset || 0, y = m[0], E = m[1], x = m[2], M = m[3], L = m[4], Y = m[5], q = u.split(" "), H = parseFloat(q[0]) || 0, X = parseFloat(q[1]) || 0, F, C, $, J;
    a ? m !== vs && (C = y * M - E * x) && ($ = H * (M / C) + X * (-x / C) + (x * Y - M * L) / C,
    J = H * (-E / C) + X * (y / C) - (y * Y - E * L) / C,
    H = $,
    X = J) : (F = E1(i),
    H = F.x + (~q[0].indexOf("%") ? H / 100 * F.width : H),
    X = F.y + (~(q[1] || q[0]).indexOf("%") ? X / 100 * F.height : X)),
    r || r !== !1 && d.smooth ? (L = H - g,
    Y = X - _,
    d.xOffset = S + (L * y + Y * x) - L,
    d.yOffset = b + (L * E + Y * M) - Y) : d.xOffset = d.yOffset = 0,
    d.xOrigin = H,
    d.yOrigin = X,
    d.smooth = !!r,
    d.origin = u,
    d.originIsAbsolute = !!a,
    i.style[Xn] = "0px 0px",
    h && (la(h, d, "xOrigin", g, H),
    la(h, d, "yOrigin", _, X),
    la(h, d, "xOffset", S, d.xOffset),
    la(h, d, "yOffset", b, d.yOffset)),
    i.setAttribute("data-svg-origin", H + " " + X)
}, ys = function(i, u) {
    var a = i._gsap || new o1(i);
    if ("x"in a && !u && !a.uncache)
        return a;
    var r = i.style, o = a.scaleX < 0, h = "px", d = "deg", m = getComputedStyle(i), g = ui(i, Xn) || "0", _, S, b, y, E, x, M, L, Y, q, H, X, F, C, $, J, W, dt, tt, bt, ht, _t, R, Q, et, rt, D, z, G, P, I, ut;
    return _ = S = b = x = M = L = Y = q = H = 0,
    y = E = 1,
    a.svg = !!(i.getCTM && z1(i)),
    m.translate && ((m.translate !== "none" || m.scale !== "none" || m.rotate !== "none") && (r[be] = (m.translate !== "none" ? "translate3d(" + (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") + (m.scale !== "none" ? "scale(" + m.scale.split(" ").join(",") + ") " : "") + (m[be] !== "none" ? m[be] : "")),
    r.scale = r.rotate = r.translate = "none"),
    C = Yd(i, a.svg),
    a.svg && (a.uncache ? (et = i.getBBox(),
    g = a.xOrigin - et.x + "px " + (a.yOrigin - et.y) + "px",
    Q = "") : Q = !u && i.getAttribute("data-svg-origin"),
    sd(i, Q || g, !!Q || a.originIsAbsolute, a.smooth !== !1, C)),
    X = a.xOrigin || 0,
    F = a.yOrigin || 0,
    C !== vs && (dt = C[0],
    tt = C[1],
    bt = C[2],
    ht = C[3],
    _ = _t = C[4],
    S = R = C[5],
    C.length === 6 ? (y = Math.sqrt(dt * dt + tt * tt),
    E = Math.sqrt(ht * ht + bt * bt),
    x = dt || tt ? Nu(tt, dt) * Ha : 0,
    Y = bt || ht ? Nu(bt, ht) * Ha + x : 0,
    Y && (E *= Math.abs(Math.cos(Y * Qu))),
    a.svg && (_ -= X - (X * dt + F * bt),
    S -= F - (X * tt + F * ht))) : (ut = C[6],
    P = C[7],
    D = C[8],
    z = C[9],
    G = C[10],
    I = C[11],
    _ = C[12],
    S = C[13],
    b = C[14],
    $ = Nu(ut, G),
    M = $ * Ha,
    $ && (J = Math.cos(-$),
    W = Math.sin(-$),
    Q = _t * J + D * W,
    et = R * J + z * W,
    rt = ut * J + G * W,
    D = _t * -W + D * J,
    z = R * -W + z * J,
    G = ut * -W + G * J,
    I = P * -W + I * J,
    _t = Q,
    R = et,
    ut = rt),
    $ = Nu(-bt, G),
    L = $ * Ha,
    $ && (J = Math.cos(-$),
    W = Math.sin(-$),
    Q = dt * J - D * W,
    et = tt * J - z * W,
    rt = bt * J - G * W,
    I = ht * W + I * J,
    dt = Q,
    tt = et,
    bt = rt),
    $ = Nu(tt, dt),
    x = $ * Ha,
    $ && (J = Math.cos($),
    W = Math.sin($),
    Q = dt * J + tt * W,
    et = _t * J + R * W,
    tt = tt * J - dt * W,
    R = R * J - _t * W,
    dt = Q,
    _t = et),
    M && Math.abs(M) + Math.abs(x) > 359.9 && (M = x = 0,
    L = 180 - L),
    y = we(Math.sqrt(dt * dt + tt * tt + bt * bt)),
    E = we(Math.sqrt(R * R + ut * ut)),
    $ = Nu(_t, R),
    Y = Math.abs($) > 2e-4 ? $ * Ha : 0,
    H = I ? 1 / (I < 0 ? -I : I) : 0),
    a.svg && (Q = i.getAttribute("transform"),
    a.forceCSS = i.setAttribute("transform", "") || !D1(ui(i, be)),
    Q && i.setAttribute("transform", Q))),
    Math.abs(Y) > 90 && Math.abs(Y) < 270 && (o ? (y *= -1,
    Y += x <= 0 ? 180 : -180,
    x += x <= 0 ? 180 : -180) : (E *= -1,
    Y += Y <= 0 ? 180 : -180)),
    u = u || a.uncache,
    a.x = _ - ((a.xPercent = _ && (!u && a.xPercent || (Math.round(i.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? i.offsetWidth * a.xPercent / 100 : 0) + h,
    a.y = S - ((a.yPercent = S && (!u && a.yPercent || (Math.round(i.offsetHeight / 2) === Math.round(-S) ? -50 : 0))) ? i.offsetHeight * a.yPercent / 100 : 0) + h,
    a.z = b + h,
    a.scaleX = we(y),
    a.scaleY = we(E),
    a.rotation = we(x) + d,
    a.rotationX = we(M) + d,
    a.rotationY = we(L) + d,
    a.skewX = Y + d,
    a.skewY = q + d,
    a.transformPerspective = H + h,
    (a.zOrigin = parseFloat(g.split(" ")[2]) || !u && a.zOrigin || 0) && (r[Xn] = oo(g)),
    a.xOffset = a.yOffset = 0,
    a.force3D = ri.force3D,
    a.renderTransform = a.svg ? Kb : T1 ? O1 : kb,
    a.uncache = 0,
    a
}, oo = function(i) {
    return (i = i.split(" "))[0] + " " + i[1]
}, Gh = function(i, u, a) {
    var r = pn(u);
    return we(parseFloat(u) + parseFloat(ha(i, "x", a + "px", r))) + r
}, kb = function(i, u) {
    u.z = "0px",
    u.rotationY = u.rotationX = "0deg",
    u.force3D = 0,
    O1(i, u)
}, Na = "0deg", Qr = "0px", Ua = ") ", O1 = function(i, u) {
    var a = u || this
      , r = a.xPercent
      , o = a.yPercent
      , h = a.x
      , d = a.y
      , m = a.z
      , g = a.rotation
      , _ = a.rotationY
      , S = a.rotationX
      , b = a.skewX
      , y = a.skewY
      , E = a.scaleX
      , x = a.scaleY
      , M = a.transformPerspective
      , L = a.force3D
      , Y = a.target
      , q = a.zOrigin
      , H = ""
      , X = L === "auto" && i && i !== 1 || L === !0;
    if (q && (S !== Na || _ !== Na)) {
        var F = parseFloat(_) * Qu, C = Math.sin(F), $ = Math.cos(F), J;
        F = parseFloat(S) * Qu,
        J = Math.cos(F),
        h = Gh(Y, h, C * J * -q),
        d = Gh(Y, d, -Math.sin(F) * -q),
        m = Gh(Y, m, $ * J * -q + q)
    }
    M !== Qr && (H += "perspective(" + M + Ua),
    (r || o) && (H += "translate(" + r + "%, " + o + "%) "),
    (X || h !== Qr || d !== Qr || m !== Qr) && (H += m !== Qr || X ? "translate3d(" + h + ", " + d + ", " + m + ") " : "translate(" + h + ", " + d + Ua),
    g !== Na && (H += "rotate(" + g + Ua),
    _ !== Na && (H += "rotateY(" + _ + Ua),
    S !== Na && (H += "rotateX(" + S + Ua),
    (b !== Na || y !== Na) && (H += "skew(" + b + ", " + y + Ua),
    (E !== 1 || x !== 1) && (H += "scale(" + E + ", " + x + Ua),
    Y.style[be] = H || "translate(0, 0)"
}, Kb = function(i, u) {
    var a = u || this, r = a.xPercent, o = a.yPercent, h = a.x, d = a.y, m = a.rotation, g = a.skewX, _ = a.skewY, S = a.scaleX, b = a.scaleY, y = a.target, E = a.xOrigin, x = a.yOrigin, M = a.xOffset, L = a.yOffset, Y = a.forceCSS, q = parseFloat(h), H = parseFloat(d), X, F, C, $, J;
    m = parseFloat(m),
    g = parseFloat(g),
    _ = parseFloat(_),
    _ && (_ = parseFloat(_),
    g += _,
    m += _),
    m || g ? (m *= Qu,
    g *= Qu,
    X = Math.cos(m) * S,
    F = Math.sin(m) * S,
    C = Math.sin(m - g) * -b,
    $ = Math.cos(m - g) * b,
    g && (_ *= Qu,
    J = Math.tan(g - _),
    J = Math.sqrt(1 + J * J),
    C *= J,
    $ *= J,
    _ && (J = Math.tan(_),
    J = Math.sqrt(1 + J * J),
    X *= J,
    F *= J)),
    X = we(X),
    F = we(F),
    C = we(C),
    $ = we($)) : (X = S,
    $ = b,
    F = C = 0),
    (q && !~(h + "").indexOf("px") || H && !~(d + "").indexOf("px")) && (q = ha(y, "x", h, "px"),
    H = ha(y, "y", d, "px")),
    (E || x || M || L) && (q = we(q + E - (E * X + x * C) + M),
    H = we(H + x - (E * F + x * $) + L)),
    (r || o) && (J = y.getBBox(),
    q = we(q + r / 100 * J.width),
    H = we(H + o / 100 * J.height)),
    J = "matrix(" + X + "," + F + "," + C + "," + $ + "," + q + "," + H + ")",
    y.setAttribute("transform", J),
    Y && (y.style[be] = J)
}, Jb = function(i, u, a, r, o) {
    var h = 360, d = Pe(o), m = parseFloat(o) * (d && ~o.indexOf("rad") ? Ha : 1), g = m - r, _ = r + g + "deg", S, b;
    return d && (S = o.split("_")[1],
    S === "short" && (g %= h,
    g !== g % (h / 2) && (g += g < 0 ? h : -h)),
    S === "cw" && g < 0 ? g = (g + h * t_) % h - ~~(g / h) * h : S === "ccw" && g > 0 && (g = (g - h * t_) % h - ~~(g / h) * h)),
    i._pt = b = new qn(i._pt,u,a,r,g,Cb),
    b.e = _,
    b.u = "deg",
    i._props.push(a),
    b
}, r_ = function(i, u) {
    for (var a in u)
        i[a] = u[a];
    return i
}, Fb = function(i, u, a) {
    var r = r_({}, a._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", h = a.style, d, m, g, _, S, b, y, E;
    r.svg ? (g = a.getAttribute("transform"),
    a.setAttribute("transform", ""),
    h[be] = u,
    d = ys(a, 1),
    fa(a, be),
    a.setAttribute("transform", g)) : (g = getComputedStyle(a)[be],
    h[be] = u,
    d = ys(a, 1),
    h[be] = g);
    for (m in Ol)
        g = r[m],
        _ = d[m],
        g !== _ && o.indexOf(m) < 0 && (y = pn(g),
        E = pn(_),
        S = y !== E ? ha(a, m, g, E) : parseFloat(g),
        b = parseFloat(_),
        i._pt = new qn(i._pt,d,m,S,b - S,ad),
        i._pt.u = E || 0,
        i._props.push(m));
    r_(d, r)
};
jn("padding,margin,Width,Radius", function(f, i) {
    var u = "Top"
      , a = "Right"
      , r = "Bottom"
      , o = "Left"
      , h = (i < 3 ? [u, a, r, o] : [u + o, u + a, r + a, r + o]).map(function(d) {
        return i < 2 ? f + d : "border" + d + f
    });
    co[i > 1 ? "border" + f : f] = function(d, m, g, _, S) {
        var b, y;
        if (arguments.length < 4)
            return b = h.map(function(E) {
                return Tl(d, E, g)
            }),
            y = b.join(" "),
            y.split(b[0]).length === 5 ? b[0] : y;
        b = (_ + "").split(" "),
        y = {},
        h.forEach(function(E, x) {
            return y[E] = b[x] = b[x] || b[(x - 1) / 2 | 0]
        }),
        d.init(m, y, S)
    }
});
var M1 = {
    name: "css",
    register: rd,
    targetTest: function(i) {
        return i.style && i.nodeType
    },
    init: function(i, u, a, r, o) {
        var h = this._props, d = i.style, m = a.vars.startAt, g, _, S, b, y, E, x, M, L, Y, q, H, X, F, C, $, J;
        Ud || rd(),
        this.styles = this.styles || x1(i),
        $ = this.styles.props,
        this.tween = a;
        for (x in u)
            if (x !== "autoRound" && (_ = u[x],
            !(ei[x] && f1(x, u, a, r, i, o)))) {
                if (y = typeof _,
                E = co[x],
                y === "function" && (_ = _.call(a, r, i, o),
                y = typeof _),
                y === "string" && ~_.indexOf("random(") && (_ = ms(_)),
                E)
                    E(this, i, x, _, a) && (C = 1);
                else if (x.substr(0, 2) === "--")
                    g = (getComputedStyle(i).getPropertyValue(x) + "").trim(),
                    _ += "",
                    sa.lastIndex = 0,
                    sa.test(g) || (M = pn(g),
                    L = pn(_),
                    L ? M !== L && (g = ha(i, x, g, L) + L) : M && (_ += M)),
                    this.add(d, "setProperty", g, _, r, o, 0, 0, x),
                    h.push(x),
                    $.push(x, 0, d[x]);
                else if (y !== "undefined") {
                    if (m && x in m ? (g = typeof m[x] == "function" ? m[x].call(a, r, i, o) : m[x],
                    Pe(g) && ~g.indexOf("random(") && (g = ms(g)),
                    pn(g + "") || g === "auto" || (g += ri.units[x] || pn(Tl(i, x)) || ""),
                    (g + "").charAt(1) === "=" && (g = Tl(i, x))) : g = Tl(i, x),
                    b = parseFloat(g),
                    Y = y === "string" && _.charAt(1) === "=" && _.substr(0, 2),
                    Y && (_ = _.substr(2)),
                    S = parseFloat(_),
                    x in Ii && (x === "autoAlpha" && (b === 1 && Tl(i, "visibility") === "hidden" && S && (b = 0),
                    $.push("visibility", 0, d.visibility),
                    la(this, d, "visibility", b ? "inherit" : "hidden", S ? "inherit" : "hidden", !S)),
                    x !== "scale" && x !== "transform" && (x = Ii[x],
                    ~x.indexOf(",") && (x = x.split(",")[0]))),
                    q = x in Ol,
                    q) {
                        if (this.styles.save(x),
                        J = _,
                        y === "string" && _.substring(0, 6) === "var(--") {
                            if (_ = ui(i, _.substring(4, _.indexOf(")"))),
                            _.substring(0, 5) === "calc(") {
                                var W = i.style.perspective;
                                i.style.perspective = _,
                                _ = ui(i, "perspective"),
                                W ? i.style.perspective = W : fa(i, "perspective")
                            }
                            S = parseFloat(_)
                        }
                        if (H || (X = i._gsap,
                        X.renderTransform && !u.parseTransform || ys(i, u.parseTransform),
                        F = u.smoothOrigin !== !1 && X.smooth,
                        H = this._pt = new qn(this._pt,d,be,0,1,X.renderTransform,X,0,-1),
                        H.dep = 1),
                        x === "scale")
                            this._pt = new qn(this._pt,X,"scaleY",X.scaleY,(Y ? Gu(X.scaleY, Y + S) : S) - X.scaleY || 0,ad),
                            this._pt.u = 0,
                            h.push("scaleY", x),
                            x += "X";
                        else if (x === "transformOrigin") {
                            $.push(Xn, 0, d[Xn]),
                            _ = Qb(_),
                            X.svg ? sd(i, _, 0, F, 0, this) : (L = parseFloat(_.split(" ")[2]) || 0,
                            L !== X.zOrigin && la(this, X, "zOrigin", X.zOrigin, L),
                            la(this, d, x, oo(g), oo(_)));
                            continue
                        } else if (x === "svgOrigin") {
                            sd(i, _, 1, F, 0, this);
                            continue
                        } else if (x in A1) {
                            Jb(this, X, x, b, Y ? Gu(b, Y + _) : _);
                            continue
                        } else if (x === "smoothOrigin") {
                            la(this, X, "smooth", X.smooth, _);
                            continue
                        } else if (x === "force3D") {
                            X[x] = _;
                            continue
                        } else if (x === "transform") {
                            Fb(this, _, i);
                            continue
                        }
                    } else
                        x in d || (x = Iu(x) || x);
                    if (q || (S || S === 0) && (b || b === 0) && !Mb.test(_) && x in d)
                        M = (g + "").substr((b + "").length),
                        S || (S = 0),
                        L = pn(_) || (x in ri.units ? ri.units[x] : M),
                        M !== L && (b = ha(i, x, g, L)),
                        this._pt = new qn(this._pt,q ? X : d,x,b,(Y ? Gu(b, Y + S) : S) - b,!q && (L === "px" || x === "zIndex") && u.autoRound !== !1 ? Nb : ad),
                        this._pt.u = L || 0,
                        q && J !== _ ? (this._pt.b = g,
                        this._pt.e = J,
                        this._pt.r = Rb) : M !== L && L !== "%" && (this._pt.b = g,
                        this._pt.r = wb);
                    else if (x in d)
                        Vb.call(this, i, x, g, Y ? Y + _ : _);
                    else if (x in i)
                        this.add(i, x, g || i[x], Y ? Y + _ : _, r, o);
                    else if (x !== "parseTransform") {
                        Ed(x, _);
                        continue
                    }
                    q || (x in d ? $.push(x, 0, d[x]) : typeof i[x] == "function" ? $.push(x, 2, i[x]()) : $.push(x, 1, g || i[x])),
                    h.push(x)
                }
            }
        C && _1(this)
    },
    render: function(i, u) {
        if (u.tween._time || !Hd())
            for (var a = u._pt; a; )
                a.r(i, a.d),
                a = a._next;
        else
            u.styles.revert()
    },
    get: Tl,
    aliases: Ii,
    getSetter: function(i, u, a) {
        var r = Ii[u];
        return r && r.indexOf(",") < 0 && (u = r),
        u in Ol && u !== Xn && (i._gsap.x || Tl(i, "x")) ? a && Ig === a ? u === "scale" ? Yb : Bb : (Ig = a || {}) && (u === "scale" ? Lb : jb) : i.style && !bd(i.style[u]) ? Ub : ~u.indexOf("-") ? Hb : Rd(i, u)
    },
    core: {
        _removeProperty: fa,
        _getMatrix: Yd
    }
};
Gn.utils.checkPrefix = Iu;
Gn.core.getStyleSaver = x1;
(function(f, i, u, a) {
    var r = jn(f + "," + i + "," + u, function(o) {
        Ol[o] = 1
    });
    jn(i, function(o) {
        ri.units[o] = "deg",
        A1[o] = 1
    }),
    Ii[r[13]] = f + "," + i,
    jn(a, function(o) {
        var h = o.split(":");
        Ii[h[1]] = r[h[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(f) {
    ri.units[f] = "px"
});
Gn.registerPlugin(M1);
var Ke = Gn.registerPlugin(M1) || Gn;
Ke.core.Tween;
function Wb(f, i) {
    for (var u = 0; u < i.length; u++) {
        var a = i[u];
        a.enumerable = a.enumerable || !1,
        a.configurable = !0,
        "value"in a && (a.writable = !0),
        Object.defineProperty(f, a.key, a)
    }
}
function $b(f, i, u) {
    return i && Wb(f.prototype, i),
    f
}
var an, Pc, li, aa, ua, Zu, C1, Ba, ku, w1, zl, ji, R1, N1 = function() {
    return an || typeof window < "u" && (an = window.gsap) && an.registerPlugin && an
}, U1 = 1, Xu = [], Ut = [], el = [], is = Date.now, cd = function(i, u) {
    return u
}, Pb = function() {
    var i = ku.core
      , u = i.bridge || {}
      , a = i._scrollers
      , r = i._proxies;
    a.push.apply(a, Ut),
    r.push.apply(r, el),
    Ut = a,
    el = r,
    cd = function(h, d) {
        return u[h](d)
    }
}, ca = function(i, u) {
    return ~el.indexOf(i) && el[el.indexOf(i) + 1][u]
}, ls = function(i) {
    return !!~w1.indexOf(i)
}, xn = function(i, u, a, r, o) {
    return i.addEventListener(u, a, {
        passive: r !== !1,
        capture: !!o
    })
}, bn = function(i, u, a, r) {
    return i.removeEventListener(u, a, !!r)
}, Bc = "scrollLeft", Yc = "scrollTop", od = function() {
    return zl && zl.isPressed || Ut.cache++
}, fo = function(i, u) {
    var a = function r(o) {
        if (o || o === 0) {
            U1 && (li.history.scrollRestoration = "manual");
            var h = zl && zl.isPressed;
            o = r.v = Math.round(o) || (zl && zl.iOS ? 1 : 0),
            i(o),
            r.cacheID = Ut.cache,
            h && cd("ss", o)
        } else
            (u || Ut.cache !== r.cacheID || cd("ref")) && (r.cacheID = Ut.cache,
            r.v = i());
        return r.v + r.offset
    };
    return a.offset = 0,
    i && a
}, An = {
    s: Bc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: fo(function(f) {
        return arguments.length ? li.scrollTo(f, ke.sc()) : li.pageXOffset || aa[Bc] || ua[Bc] || Zu[Bc] || 0
    })
}, ke = {
    s: Yc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: An,
    sc: fo(function(f) {
        return arguments.length ? li.scrollTo(An.sc(), f) : li.pageYOffset || aa[Yc] || ua[Yc] || Zu[Yc] || 0
    })
}, Bn = function(i, u) {
    return (u && u._ctx && u._ctx.selector || an.utils.toArray)(i)[0] || (typeof i == "string" && an.config().nullTargetWarn !== !1 ? console.warn("Element not found:", i) : null)
}, Ib = function(i, u) {
    for (var a = u.length; a--; )
        if (u[a] === i || u[a].contains(i))
            return !0;
    return !1
}, da = function(i, u) {
    var a = u.s
      , r = u.sc;
    ls(i) && (i = aa.scrollingElement || ua);
    var o = Ut.indexOf(i)
      , h = r === ke.sc ? 1 : 2;
    !~o && (o = Ut.push(i) - 1),
    Ut[o + h] || xn(i, "scroll", od);
    var d = Ut[o + h]
      , m = d || (Ut[o + h] = fo(ca(i, a), !0) || (ls(i) ? r : fo(function(g) {
        return arguments.length ? i[a] = g : i[a]
    })));
    return m.target = i,
    d || (m.smooth = an.getProperty(i, "scrollBehavior") === "smooth"),
    m
}, fd = function(i, u, a) {
    var r = i
      , o = i
      , h = is()
      , d = h
      , m = u || 50
      , g = Math.max(500, m * 3)
      , _ = function(E, x) {
        var M = is();
        x || M - h > m ? (o = r,
        r = E,
        d = h,
        h = M) : a ? r += E : r = o + (E - o) / (M - d) * (h - d)
    }
      , S = function() {
        o = r = a ? 0 : r,
        d = h = 0
    }
      , b = function(E) {
        var x = d
          , M = o
          , L = is();
        return (E || E === 0) && E !== r && _(E),
        h === d || L - d > g ? 0 : (r + (a ? M : -M)) / ((a ? L : h) - x) * 1e3
    };
    return {
        update: _,
        reset: S,
        getVelocity: b
    }
}, Zr = function(i, u) {
    return u && !i._gsapAllow && i.cancelable !== !1 && i.preventDefault(),
    i.changedTouches ? i.changedTouches[0] : i
}, s_ = function(i) {
    var u = Math.max.apply(Math, i)
      , a = Math.min.apply(Math, i);
    return Math.abs(u) >= Math.abs(a) ? u : a
}, H1 = function() {
    ku = an.core.globals().ScrollTrigger,
    ku && ku.core && Pb()
}, B1 = function(i) {
    return an = i || N1(),
    !Pc && an && typeof document < "u" && document.body && (li = window,
    aa = document,
    ua = aa.documentElement,
    Zu = aa.body,
    w1 = [li, aa, ua, Zu],
    an.utils.clamp,
    R1 = an.core.context || function() {}
    ,
    Ba = "onpointerenter"in Zu ? "pointer" : "mouse",
    C1 = Re.isTouch = li.matchMedia && li.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in li || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    ji = Re.eventTypes = ("ontouchstart"in ua ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in ua ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return U1 = 0
    }, 500),
    Pc = 1),
    ku || H1(),
    Pc
};
An.op = ke;
Ut.cache = 0;
var Re = (function() {
    function f(u) {
        this.init(u)
    }
    var i = f.prototype;
    return i.init = function(a) {
        Pc || B1(an) || console.warn("Please gsap.registerPlugin(Observer)"),
        ku || H1();
        var r = a.tolerance
          , o = a.dragMinimum
          , h = a.type
          , d = a.target
          , m = a.lineHeight
          , g = a.debounce
          , _ = a.preventDefault
          , S = a.onStop
          , b = a.onStopDelay
          , y = a.ignore
          , E = a.wheelSpeed
          , x = a.event
          , M = a.onDragStart
          , L = a.onDragEnd
          , Y = a.onDrag
          , q = a.onPress
          , H = a.onRelease
          , X = a.onRight
          , F = a.onLeft
          , C = a.onUp
          , $ = a.onDown
          , J = a.onChangeX
          , W = a.onChangeY
          , dt = a.onChange
          , tt = a.onToggleX
          , bt = a.onToggleY
          , ht = a.onHover
          , _t = a.onHoverEnd
          , R = a.onMove
          , Q = a.ignoreCheck
          , et = a.isNormalizer
          , rt = a.onGestureStart
          , D = a.onGestureEnd
          , z = a.onWheel
          , G = a.onEnable
          , P = a.onDisable
          , I = a.onClick
          , ut = a.scrollSpeed
          , ft = a.capture
          , pt = a.allowClicks
          , kt = a.lockAxis
          , Ct = a.onLockAxis;
        this.target = d = Bn(d) || ua,
        this.vars = a,
        y && (y = an.utils.toArray(y)),
        r = r || 1e-9,
        o = o || 0,
        E = E || 1,
        ut = ut || 1,
        h = h || "wheel,touch,pointer",
        g = g !== !1,
        m || (m = parseFloat(li.getComputedStyle(Zu).lineHeight) || 22);
        var Dn, Ne, Ge, Yt, Ft, Je, Ie, j = this, rn = 0, Vn = 0, oi = a.passive || !_ && a.passive !== !1, ae = da(d, An), Ni = da(d, ke), qi = ae(), De = Ni(), Ue = ~h.indexOf("touch") && !~h.indexOf("pointer") && ji[0] === "pointerdown", Ui = ls(d), oe = d.ownerDocument || aa, sn = [0, 0, 0], On = [0, 0, 0], fi = 0, ma = function() {
            return fi = is()
        }, xe = function(st, Vt) {
            return (j.event = st) && y && Ib(st.target, y) || Vt && Ue && st.pointerType !== "touch" || Q && Q(st, Vt)
        }, Xi = function() {
            j._vx.reset(),
            j._vy.reset(),
            Ne.pause(),
            S && S(j)
        }, pe = function() {
            var st = j.deltaX = s_(sn)
              , Vt = j.deltaY = s_(On)
              , nt = Math.abs(st) >= r
              , yt = Math.abs(Vt) >= r;
            dt && (nt || yt) && dt(j, st, Vt, sn, On),
            nt && (X && j.deltaX > 0 && X(j),
            F && j.deltaX < 0 && F(j),
            J && J(j),
            tt && j.deltaX < 0 != rn < 0 && tt(j),
            rn = j.deltaX,
            sn[0] = sn[1] = sn[2] = 0),
            yt && ($ && j.deltaY > 0 && $(j),
            C && j.deltaY < 0 && C(j),
            W && W(j),
            bt && j.deltaY < 0 != Vn < 0 && bt(j),
            Vn = j.deltaY,
            On[0] = On[1] = On[2] = 0),
            (Yt || Ge) && (R && R(j),
            Ge && (M && Ge === 1 && M(j),
            Y && Y(j),
            Ge = 0),
            Yt = !1),
            Je && !(Je = !1) && Ct && Ct(j),
            Ft && (z(j),
            Ft = !1),
            Dn = 0
        }, _n = function(st, Vt, nt) {
            sn[nt] += st,
            On[nt] += Vt,
            j._vx.update(st),
            j._vy.update(Vt),
            g ? Dn || (Dn = requestAnimationFrame(pe)) : pe()
        }, He = function(st, Vt) {
            kt && !Ie && (j.axis = Ie = Math.abs(st) > Math.abs(Vt) ? "x" : "y",
            Je = !0),
            Ie !== "y" && (sn[2] += st,
            j._vx.update(st, !0)),
            Ie !== "x" && (On[2] += Vt,
            j._vy.update(Vt, !0)),
            g ? Dn || (Dn = requestAnimationFrame(pe)) : pe()
        }, Gi = function(st) {
            if (!xe(st, 1)) {
                st = Zr(st, _);
                var Vt = st.clientX
                  , nt = st.clientY
                  , yt = Vt - j.x
                  , ct = nt - j.y
                  , gt = j.isDragging;
                j.x = Vt,
                j.y = nt,
                (gt || (yt || ct) && (Math.abs(j.startX - Vt) >= o || Math.abs(j.startY - nt) >= o)) && (Ge || (Ge = gt ? 2 : 1),
                gt || (j.isDragging = !0),
                He(yt, ct))
            }
        }, il = j.onPress = function(vt) {
            xe(vt, 1) || vt && vt.button || (j.axis = Ie = null,
            Ne.pause(),
            j.isPressed = !0,
            vt = Zr(vt),
            rn = Vn = 0,
            j.startX = j.x = vt.clientX,
            j.startY = j.y = vt.clientY,
            j._vx.reset(),
            j._vy.reset(),
            xn(et ? d : oe, ji[1], Gi, oi, !0),
            j.deltaX = j.deltaY = 0,
            q && q(j))
        }
        , At = j.onRelease = function(vt) {
            if (!xe(vt, 1)) {
                bn(et ? d : oe, ji[1], Gi, !0);
                var st = !isNaN(j.y - j.startY)
                  , Vt = j.isDragging
                  , nt = Vt && (Math.abs(j.x - j.startX) > 3 || Math.abs(j.y - j.startY) > 3)
                  , yt = Zr(vt);
                !nt && st && (j._vx.reset(),
                j._vy.reset(),
                _ && pt && an.delayedCall(.08, function() {
                    if (is() - fi > 300 && !vt.defaultPrevented) {
                        if (vt.target.click)
                            vt.target.click();
                        else if (oe.createEvent) {
                            var ct = oe.createEvent("MouseEvents");
                            ct.initMouseEvent("click", !0, !0, li, 1, yt.screenX, yt.screenY, yt.clientX, yt.clientY, !1, !1, !1, !1, 0, null),
                            vt.target.dispatchEvent(ct)
                        }
                    }
                })),
                j.isDragging = j.isGesturing = j.isPressed = !1,
                S && Vt && !et && Ne.restart(!0),
                Ge && pe(),
                L && Vt && L(j),
                H && H(j, nt)
            }
        }
        , hi = function(st) {
            return st.touches && st.touches.length > 1 && (j.isGesturing = !0) && rt(st, j.isDragging)
        }, cn = function() {
            return (j.isGesturing = !1) || D(j)
        }, on = function(st) {
            if (!xe(st)) {
                var Vt = ae()
                  , nt = Ni();
                _n((Vt - qi) * ut, (nt - De) * ut, 1),
                qi = Vt,
                De = nt,
                S && Ne.restart(!0)
            }
        }, Ve = function(st) {
            if (!xe(st)) {
                st = Zr(st, _),
                z && (Ft = !0);
                var Vt = (st.deltaMode === 1 ? m : st.deltaMode === 2 ? li.innerHeight : 1) * E;
                _n(st.deltaX * Vt, st.deltaY * Vt, 0),
                S && !et && Ne.restart(!0)
            }
        }, di = function(st) {
            if (!xe(st)) {
                var Vt = st.clientX
                  , nt = st.clientY
                  , yt = Vt - j.x
                  , ct = nt - j.y;
                j.x = Vt,
                j.y = nt,
                Yt = !0,
                S && Ne.restart(!0),
                (yt || ct) && He(yt, ct)
            }
        }, pi = function(st) {
            j.event = st,
            ht(j)
        }, Hi = function(st) {
            j.event = st,
            _t(j)
        }, Ml = function(st) {
            return xe(st) || Zr(st, _) && I(j)
        };
        Ne = j._dc = an.delayedCall(b || .25, Xi).pause(),
        j.deltaX = j.deltaY = 0,
        j._vx = fd(0, 50, !0),
        j._vy = fd(0, 50, !0),
        j.scrollX = ae,
        j.scrollY = Ni,
        j.isDragging = j.isGesturing = j.isPressed = !1,
        R1(this),
        j.enable = function(vt) {
            return j.isEnabled || (xn(Ui ? oe : d, "scroll", od),
            h.indexOf("scroll") >= 0 && xn(Ui ? oe : d, "scroll", on, oi, ft),
            h.indexOf("wheel") >= 0 && xn(d, "wheel", Ve, oi, ft),
            (h.indexOf("touch") >= 0 && C1 || h.indexOf("pointer") >= 0) && (xn(d, ji[0], il, oi, ft),
            xn(oe, ji[2], At),
            xn(oe, ji[3], At),
            pt && xn(d, "click", ma, !0, !0),
            I && xn(d, "click", Ml),
            rt && xn(oe, "gesturestart", hi),
            D && xn(oe, "gestureend", cn),
            ht && xn(d, Ba + "enter", pi),
            _t && xn(d, Ba + "leave", Hi),
            R && xn(d, Ba + "move", di)),
            j.isEnabled = !0,
            j.isDragging = j.isGesturing = j.isPressed = Yt = Ge = !1,
            j._vx.reset(),
            j._vy.reset(),
            qi = ae(),
            De = Ni(),
            vt && vt.type && il(vt),
            G && G(j)),
            j
        }
        ,
        j.disable = function() {
            j.isEnabled && (Xu.filter(function(vt) {
                return vt !== j && ls(vt.target)
            }).length || bn(Ui ? oe : d, "scroll", od),
            j.isPressed && (j._vx.reset(),
            j._vy.reset(),
            bn(et ? d : oe, ji[1], Gi, !0)),
            bn(Ui ? oe : d, "scroll", on, ft),
            bn(d, "wheel", Ve, ft),
            bn(d, ji[0], il, ft),
            bn(oe, ji[2], At),
            bn(oe, ji[3], At),
            bn(d, "click", ma, !0),
            bn(d, "click", Ml),
            bn(oe, "gesturestart", hi),
            bn(oe, "gestureend", cn),
            bn(d, Ba + "enter", pi),
            bn(d, Ba + "leave", Hi),
            bn(d, Ba + "move", di),
            j.isEnabled = j.isPressed = j.isDragging = !1,
            P && P(j))
        }
        ,
        j.kill = j.revert = function() {
            j.disable();
            var vt = Xu.indexOf(j);
            vt >= 0 && Xu.splice(vt, 1),
            zl === j && (zl = 0)
        }
        ,
        Xu.push(j),
        et && ls(d) && (zl = j),
        j.enable(x)
    }
    ,
    $b(f, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    f
}
)();
Re.version = "3.15.0";
Re.create = function(f) {
    return new Re(f)
}
;
Re.register = B1;
Re.getAll = function() {
    return Xu.slice()
}
;
Re.getById = function(f) {
    return Xu.filter(function(i) {
        return i.vars.id === f
    })[0]
}
;
N1() && an.registerPlugin(Re);
var lt, Yu, Nt, Pt, ni, Jt, Ld, ho, Ss, as, Fr, Lc, hn, So, hd, En, c_, o_, Lu, Y1, Vh, L1, Tn, dd, j1, q1, ea, pd, jd, Ku, qd, us, md, Qh, jc = 1, dn = Date.now, Zh = dn(), Ri = 0, Wr = 0, f_ = function(i, u, a) {
    var r = ti(i) && (i.substr(0, 6) === "clamp(" || i.indexOf("max") > -1);
    return a["_" + u + "Clamp"] = r,
    r ? i.substr(6, i.length - 7) : i
}, h_ = function(i, u) {
    return u && (!ti(i) || i.substr(0, 6) !== "clamp(") ? "clamp(" + i + ")" : i
}, t2 = function f() {
    return Wr && requestAnimationFrame(f)
}, d_ = function() {
    return So = 1
}, p_ = function() {
    return So = 0
}, $i = function(i) {
    return i
}, $r = function(i) {
    return Math.round(i * 1e5) / 1e5 || 0
}, X1 = function() {
    return typeof window < "u"
}, G1 = function() {
    return lt || X1() && (lt = window.gsap) && lt.registerPlugin && lt
}, Ka = function(i) {
    return !!~Ld.indexOf(i)
}, V1 = function(i) {
    return (i === "Height" ? qd : Nt["inner" + i]) || ni["client" + i] || Jt["client" + i]
}, Q1 = function(i) {
    return ca(i, "getBoundingClientRect") || (Ka(i) ? function() {
        return io.width = Nt.innerWidth,
        io.height = qd,
        io
    }
    : function() {
        return El(i)
    }
    )
}, e2 = function(i, u, a) {
    var r = a.d
      , o = a.d2
      , h = a.a;
    return (h = ca(i, "getBoundingClientRect")) ? function() {
        return h()[r]
    }
    : function() {
        return (u ? V1(o) : i["client" + o]) || 0
    }
}, n2 = function(i, u) {
    return !u || ~el.indexOf(i) ? Q1(i) : function() {
        return io
    }
}, tl = function(i, u) {
    var a = u.s
      , r = u.d2
      , o = u.d
      , h = u.a;
    return Math.max(0, (a = "scroll" + r) && (h = ca(i, a)) ? h() - Q1(i)()[o] : Ka(i) ? (ni[a] || Jt[a]) - V1(r) : i[a] - i["offset" + r])
}, qc = function(i, u) {
    for (var a = 0; a < Lu.length; a += 3)
        (!u || ~u.indexOf(Lu[a + 1])) && i(Lu[a], Lu[a + 1], Lu[a + 2])
}, ti = function(i) {
    return typeof i == "string"
}, mn = function(i) {
    return typeof i == "function"
}, Pr = function(i) {
    return typeof i == "number"
}, Ya = function(i) {
    return typeof i == "object"
}, kr = function(i, u, a) {
    return i && i.progress(u ? 0 : 1) && a && i.pause()
}, Uu = function(i, u, a) {
    if (i.enabled) {
        var r = i._ctx ? i._ctx.add(function() {
            return u(i, a)
        }) : u(i, a);
        r && r.totalTime && (i.callbackAnimation = r)
    }
}, Hu = Math.abs, Z1 = "left", k1 = "top", Xd = "right", Gd = "bottom", Qa = "width", Za = "height", rs = "Right", ss = "Left", cs = "Top", os = "Bottom", qe = "padding", Oi = "margin", tr = "Width", Vd = "Height", Ze = "px", Mi = function(i) {
    return Nt.getComputedStyle(i.nodeType === Node.DOCUMENT_NODE ? i.scrollingElement : i)
}, i2 = function(i) {
    var u = Mi(i).position;
    i.style.position = u === "absolute" || u === "fixed" ? u : "relative"
}, m_ = function(i, u) {
    for (var a in u)
        a in i || (i[a] = u[a]);
    return i
}, El = function(i, u) {
    var a = u && Mi(i)[hd] !== "matrix(1, 0, 0, 1, 0, 0)" && lt.to(i, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = i.getBoundingClientRect ? i.getBoundingClientRect() : i.scrollingElement.getBoundingClientRect();
    return a && a.progress(0).kill(),
    r
}, po = function(i, u) {
    var a = u.d2;
    return i["offset" + a] || i["client" + a] || 0
}, K1 = function(i) {
    var u = [], a = i.labels, r = i.duration(), o;
    for (o in a)
        u.push(a[o] / r);
    return u
}, l2 = function(i) {
    return function(u) {
        return lt.utils.snap(K1(i), u)
    }
}, Qd = function(i) {
    var u = lt.utils.snap(i)
      , a = Array.isArray(i) && i.slice(0).sort(function(r, o) {
        return r - o
    });
    return a ? function(r, o, h) {
        h === void 0 && (h = .001);
        var d;
        if (!o)
            return u(r);
        if (o > 0) {
            for (r -= h,
            d = 0; d < a.length; d++)
                if (a[d] >= r)
                    return a[d];
            return a[d - 1]
        } else
            for (d = a.length,
            r += h; d--; )
                if (a[d] <= r)
                    return a[d];
        return a[0]
    }
    : function(r, o, h) {
        h === void 0 && (h = .001);
        var d = u(r);
        return !o || Math.abs(d - r) < h || d - r < 0 == o < 0 ? d : u(o < 0 ? r - i : r + i)
    }
}, a2 = function(i) {
    return function(u, a) {
        return Qd(K1(i))(u, a.direction)
    }
}, Xc = function(i, u, a, r) {
    return a.split(",").forEach(function(o) {
        return i(u, o, r)
    })
}, $e = function(i, u, a, r, o) {
    return i.addEventListener(u, a, {
        passive: !r,
        capture: !!o
    })
}, We = function(i, u, a, r) {
    return i.removeEventListener(u, a, !!r)
}, Gc = function(i, u, a) {
    a = a && a.wheelHandler,
    a && (i(u, "wheel", a),
    i(u, "touchmove", a))
}, g_ = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Vc = {
    toggleActions: "play",
    anticipatePin: 0
}, mo = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Ic = function(i, u) {
    if (ti(i)) {
        var a = i.indexOf("=")
          , r = ~a ? +(i.charAt(a - 1) + 1) * parseFloat(i.substr(a + 1)) : 0;
        ~a && (i.indexOf("%") > a && (r *= u / 100),
        i = i.substr(0, a - 1)),
        i = r + (i in mo ? mo[i] * u : ~i.indexOf("%") ? parseFloat(i) * u / 100 : parseFloat(i) || 0)
    }
    return i
}, Qc = function(i, u, a, r, o, h, d, m) {
    var g = o.startColor
      , _ = o.endColor
      , S = o.fontSize
      , b = o.indent
      , y = o.fontWeight
      , E = Pt.createElement("div")
      , x = Ka(a) || ca(a, "pinType") === "fixed"
      , M = i.indexOf("scroller") !== -1
      , L = x ? Jt : a.tagName === "IFRAME" ? a.contentDocument.body : a
      , Y = i.indexOf("start") !== -1
      , q = Y ? g : _
      , H = "border-color:" + q + ";font-size:" + S + ";color:" + q + ";font-weight:" + y + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return H += "position:" + ((M || m) && x ? "fixed;" : "absolute;"),
    (M || m || !x) && (H += (r === ke ? Xd : Gd) + ":" + (h + parseFloat(b)) + "px;"),
    d && (H += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"),
    E._isStart = Y,
    E.setAttribute("class", "gsap-marker-" + i + (u ? " marker-" + u : "")),
    E.style.cssText = H,
    E.innerText = u || u === 0 ? i + "-" + u : i,
    L.children[0] ? L.insertBefore(E, L.children[0]) : L.appendChild(E),
    E._offset = E["offset" + r.op.d2],
    to(E, 0, r, Y),
    E
}, to = function(i, u, a, r) {
    var o = {
        display: "block"
    }
      , h = a[r ? "os2" : "p2"]
      , d = a[r ? "p2" : "os2"];
    i._isFlipped = r,
    o[a.a + "Percent"] = r ? -100 : 0,
    o[a.a] = r ? "1px" : 0,
    o["border" + h + tr] = 1,
    o["border" + d + tr] = 0,
    o[a.p] = u + "px",
    lt.set(i, o)
}, Ot = [], gd = {}, bs, __ = function() {
    return dn() - Ri > 34 && (bs || (bs = requestAnimationFrame(Al)))
}, Bu = function() {
    (!Tn || !Tn.isPressed || Tn.startX > Jt.clientWidth) && (Ut.cache++,
    Tn ? bs || (bs = requestAnimationFrame(Al)) : Al(),
    Ri || Fa("scrollStart"),
    Ri = dn())
}, kh = function() {
    q1 = Nt.innerWidth,
    j1 = Nt.innerHeight
}, Ir = function(i) {
    Ut.cache++,
    (i === !0 || !hn && !L1 && !Pt.fullscreenElement && !Pt.webkitFullscreenElement && (!dd || q1 !== Nt.innerWidth || Math.abs(Nt.innerHeight - j1) > Nt.innerHeight * .25)) && ho.restart(!0)
}, Ja = {}, u2 = [], J1 = function f() {
    return We(Tt, "scrollEnd", f) || ja(!0)
}, Fa = function(i) {
    return Ja[i] && Ja[i].map(function(u) {
        return u()
    }) || u2
}, In = [], F1 = function(i) {
    for (var u = 0; u < In.length; u += 5)
        (!i || In[u + 4] && In[u + 4].query === i) && (In[u].style.cssText = In[u + 1],
        In[u].getBBox && In[u].setAttribute("transform", In[u + 2] || ""),
        In[u + 3].uncache = 1)
}, W1 = function() {
    return Ut.forEach(function(i) {
        return mn(i) && ++i.cacheID && (i.rec = i())
    })
}, Zd = function(i, u) {
    var a;
    for (En = 0; En < Ot.length; En++)
        a = Ot[En],
        a && (!u || a._ctx === u) && (i ? a.kill(1) : a.revert(!0, !0));
    us = !0,
    u && F1(u),
    u || Fa("revert")
}, $1 = function(i, u) {
    Ut.cache++,
    (u || !zn) && Ut.forEach(function(a) {
        return mn(a) && a.cacheID++ && (a.rec = 0)
    }),
    ti(i) && (Nt.history.scrollRestoration = jd = i)
}, zn, ka = 0, v_, r2 = function() {
    if (v_ !== ka) {
        var i = v_ = ka;
        requestAnimationFrame(function() {
            return i === ka && ja(!0)
        })
    }
}, P1 = function() {
    Jt.appendChild(Ku),
    qd = !Tn && Ku.offsetHeight || Nt.innerHeight,
    Jt.removeChild(Ku)
}, y_ = function(i) {
    return Ss(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(u) {
        return u.style.display = i ? "none" : "block"
    })
}, ja = function(i, u) {
    if (ni = Pt.documentElement,
    Jt = Pt.body,
    Ld = [Nt, Pt, ni, Jt],
    Ri && !i && !us) {
        $e(Tt, "scrollEnd", J1);
        return
    }
    P1(),
    zn = Tt.isRefreshing = !0,
    us || W1();
    var a = Fa("refreshInit");
    Y1 && Tt.sort(),
    u || Zd(),
    Ut.forEach(function(r) {
        mn(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
        r(0))
    }),
    Ot.slice(0).forEach(function(r) {
        return r.refresh()
    }),
    us = !1,
    Ot.forEach(function(r) {
        if (r._subPinOffset && r.pin) {
            var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , h = r.pin[o];
            r.revert(!0, 1),
            r.adjustPinSpacing(r.pin[o] - h),
            r.refresh()
        }
    }),
    md = 1,
    y_(!0),
    Ot.forEach(function(r) {
        var o = tl(r.scroller, r._dir)
          , h = r.vars.end === "max" || r._endClamp && r.end > o
          , d = r._startClamp && r.start >= o;
        (h || d) && r.setPositions(d ? o - 1 : r.start, h ? Math.max(d ? o : r.start + 1, o) : r.end, !0)
    }),
    y_(!1),
    md = 0,
    a.forEach(function(r) {
        return r && r.render && r.render(-1)
    }),
    Ut.forEach(function(r) {
        mn(r) && (r.smooth && requestAnimationFrame(function() {
            return r.target.style.scrollBehavior = "smooth"
        }),
        r.rec && r(r.rec))
    }),
    $1(jd, 1),
    ho.pause(),
    ka++,
    zn = 2,
    Al(2),
    Ot.forEach(function(r) {
        return mn(r.vars.onRefresh) && r.vars.onRefresh(r)
    }),
    zn = Tt.isRefreshing = !1,
    Fa("refresh")
}, _d = 0, eo = 1, fs, Al = function(i) {
    if (i === 2 || !zn && !us) {
        Tt.isUpdating = !0,
        fs && fs.update(0);
        var u = Ot.length
          , a = dn()
          , r = a - Zh >= 50
          , o = u && Ot[0].scroll();
        if (eo = _d > o ? -1 : 1,
        zn || (_d = o),
        r && (Ri && !So && a - Ri > 200 && (Ri = 0,
        Fa("scrollEnd")),
        Fr = Zh,
        Zh = a),
        eo < 0) {
            for (En = u; En-- > 0; )
                Ot[En] && Ot[En].update(0, r);
            eo = 1
        } else
            for (En = 0; En < u; En++)
                Ot[En] && Ot[En].update(0, r);
        Tt.isUpdating = !1
    }
    bs = 0
}, vd = [Z1, k1, Gd, Xd, Oi + os, Oi + rs, Oi + cs, Oi + ss, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], no = vd.concat([Qa, Za, "boxSizing", "max" + tr, "max" + Vd, "position", Oi, qe, qe + cs, qe + rs, qe + os, qe + ss]), s2 = function(i, u, a) {
    Ju(a);
    var r = i._gsap;
    if (r.spacerIsNative)
        Ju(r.spacerState);
    else if (i._gsap.swappedIn) {
        var o = u.parentNode;
        o && (o.insertBefore(i, u),
        o.removeChild(u))
    }
    i._gsap.swappedIn = !1
}, Kh = function(i, u, a, r) {
    if (!i._gsap.swappedIn) {
        for (var o = vd.length, h = u.style, d = i.style, m; o--; )
            m = vd[o],
            h[m] = a[m];
        h.position = a.position === "absolute" ? "absolute" : "relative",
        a.display === "inline" && (h.display = "inline-block"),
        d[Gd] = d[Xd] = "auto",
        h.flexBasis = a.flexBasis || "auto",
        h.overflow = "visible",
        h.boxSizing = "border-box",
        h[Qa] = po(i, An) + Ze,
        h[Za] = po(i, ke) + Ze,
        h[qe] = d[Oi] = d[k1] = d[Z1] = "0",
        Ju(r),
        d[Qa] = d["max" + tr] = a[Qa],
        d[Za] = d["max" + Vd] = a[Za],
        d[qe] = a[qe],
        i.parentNode !== u && (i.parentNode.insertBefore(u, i),
        u.appendChild(i)),
        i._gsap.swappedIn = !0
    }
}, c2 = /([A-Z])/g, Ju = function(i) {
    if (i) {
        var u = i.t.style, a = i.length, r = 0, o, h;
        for ((i.t._gsap || lt.core.getCache(i.t)).uncache = 1; r < a; r += 2)
            h = i[r + 1],
            o = i[r],
            h ? u[o] = h : u[o] && u.removeProperty(o.replace(c2, "-$1").toLowerCase())
    }
}, Zc = function(i) {
    for (var u = no.length, a = i.style, r = [], o = 0; o < u; o++)
        r.push(no[o], a[no[o]]);
    return r.t = i,
    r
}, o2 = function(i, u, a) {
    for (var r = [], o = i.length, h = a ? 8 : 0, d; h < o; h += 2)
        d = i[h],
        r.push(d, d in u ? u[d] : i[h + 1]);
    return r.t = i.t,
    r
}, io = {
    left: 0,
    top: 0
}, S_ = function(i, u, a, r, o, h, d, m, g, _, S, b, y, E) {
    mn(i) && (i = i(m)),
    ti(i) && i.substr(0, 3) === "max" && (i = b + (i.charAt(4) === "=" ? Ic("0" + i.substr(3), a) : 0));
    var x = y ? y.time() : 0, M, L, Y;
    if (y && y.seek(0),
    isNaN(i) || (i = +i),
    Pr(i))
        y && (i = lt.utils.mapRange(y.scrollTrigger.start, y.scrollTrigger.end, 0, b, i)),
        d && to(d, a, r, !0);
    else {
        mn(u) && (u = u(m));
        var q = (i || "0").split(" "), H, X, F, C;
        Y = Bn(u, m) || Jt,
        H = El(Y) || {},
        (!H || !H.left && !H.top) && Mi(Y).display === "none" && (C = Y.style.display,
        Y.style.display = "block",
        H = El(Y),
        C ? Y.style.display = C : Y.style.removeProperty("display")),
        X = Ic(q[0], H[r.d]),
        F = Ic(q[1] || "0", a),
        i = H[r.p] - g[r.p] - _ + X + o - F,
        d && to(d, F, r, a - F < 20 || d._isStart && F > 20),
        a -= a - F
    }
    if (E && (m[E] = i || -.001,
    i < 0 && (i = 0)),
    h) {
        var $ = i + a
          , J = h._isStart;
        M = "scroll" + r.d2,
        to(h, $, r, J && $ > 20 || !J && (S ? Math.max(Jt[M], ni[M]) : h.parentNode[M]) <= $ + 1),
        S && (g = El(d),
        S && (h.style[r.op.p] = g[r.op.p] - r.op.m - h._offset + Ze))
    }
    return y && Y && (M = El(Y),
    y.seek(b),
    L = El(Y),
    y._caScrollDist = M[r.p] - L[r.p],
    i = i / y._caScrollDist * b),
    y && y.seek(x),
    y ? i : Math.round(i)
}, f2 = /(webkit|moz|length|cssText|inset)/i, b_ = function(i, u, a, r) {
    if (i.parentNode !== u) {
        var o = i.style, h, d;
        if (u === Jt) {
            i._stOrig = o.cssText,
            d = Mi(i);
            for (h in d)
                !+h && !f2.test(h) && d[h] && typeof o[h] == "string" && h !== "0" && (o[h] = d[h]);
            o.top = a,
            o.left = r
        } else
            o.cssText = i._stOrig;
        lt.core.getCache(i).uncache = 1,
        u.appendChild(i)
    }
}, I1 = function(i, u, a) {
    var r = u
      , o = r;
    return function(h) {
        var d = Math.round(i());
        return d !== r && d !== o && Math.abs(d - r) > 3 && Math.abs(d - o) > 3 && (h = d,
        a && a()),
        o = r,
        r = Math.round(h),
        r
    }
}, kc = function(i, u, a) {
    var r = {};
    r[u.p] = "+=" + a,
    lt.set(i, r)
}, x_ = function(i, u) {
    var a = da(i, u)
      , r = "_scroll" + u.p2
      , o = function h(d, m, g, _, S) {
        var b = h.tween
          , y = m.onComplete
          , E = {};
        g = g || a();
        var x = I1(a, g, function() {
            b.kill(),
            h.tween = 0
        });
        return S = _ && S || 0,
        _ = _ || d - g,
        b && b.kill(),
        m[r] = d,
        m.inherit = !1,
        m.modifiers = E,
        E[r] = function() {
            return x(g + _ * b.ratio + S * b.ratio * b.ratio)
        }
        ,
        m.onUpdate = function() {
            Ut.cache++,
            h.tween && Al()
        }
        ,
        m.onComplete = function() {
            h.tween = 0,
            y && y.call(b)
        }
        ,
        b = h.tween = lt.to(i, m),
        b
    };
    return i[r] = a,
    a.wheelHandler = function() {
        return o.tween && o.tween.kill() && (o.tween = 0)
    }
    ,
    $e(i, "wheel", a.wheelHandler),
    Tt.isTouch && $e(i, "touchmove", a.wheelHandler),
    o
}, Tt = (function() {
    function f(u, a) {
        Yu || f.register(lt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        pd(this),
        this.init(u, a)
    }
    var i = f.prototype;
    return i.init = function(a, r) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Wr) {
            this.update = this.refresh = this.kill = $i;
            return
        }
        a = m_(ti(a) || Pr(a) || a.nodeType ? {
            trigger: a
        } : a, Vc);
        var o = a, h = o.onUpdate, d = o.toggleClass, m = o.id, g = o.onToggle, _ = o.onRefresh, S = o.scrub, b = o.trigger, y = o.pin, E = o.pinSpacing, x = o.invalidateOnRefresh, M = o.anticipatePin, L = o.onScrubComplete, Y = o.onSnapComplete, q = o.once, H = o.snap, X = o.pinReparent, F = o.pinSpacer, C = o.containerAnimation, $ = o.fastScrollEnd, J = o.preventOverlaps, W = a.horizontal || a.containerAnimation && a.horizontal !== !1 ? An : ke, dt = !S && S !== 0, tt = Bn(a.scroller || Nt), bt = lt.core.getCache(tt), ht = Ka(tt), _t = ("pinType"in a ? a.pinType : ca(tt, "pinType") || ht && "fixed") === "fixed", R = [a.onEnter, a.onLeave, a.onEnterBack, a.onLeaveBack], Q = dt && a.toggleActions.split(" "), et = "markers"in a ? a.markers : Vc.markers, rt = ht ? 0 : parseFloat(Mi(tt)["border" + W.p2 + tr]) || 0, D = this, z = a.onRefreshInit && function() {
            return a.onRefreshInit(D)
        }
        , G = e2(tt, ht, W), P = n2(tt, ht), I = 0, ut = 0, ft = 0, pt = da(tt, W), kt, Ct, Dn, Ne, Ge, Yt, Ft, Je, Ie, j, rn, Vn, oi, ae, Ni, qi, De, Ue, Ui, oe, sn, On, fi, ma, xe, Xi, pe, _n, He, Gi, il, At, hi, cn, on, Ve, di, pi, Hi;
        if (D._startClamp = D._endClamp = !1,
        D._dir = W,
        M *= 45,
        D.scroller = tt,
        D.scroll = C ? C.time.bind(C) : pt,
        Ne = pt(),
        D.vars = a,
        r = r || a.animation,
        "refreshPriority"in a && (Y1 = 1,
        a.refreshPriority === -9999 && (fs = D)),
        bt.tweenScroll = bt.tweenScroll || {
            top: x_(tt, ke),
            left: x_(tt, An)
        },
        D.tweenTo = kt = bt.tweenScroll[W.p],
        D.scrubDuration = function(nt) {
            hi = Pr(nt) && nt,
            hi ? At ? At.duration(nt) : At = lt.to(r, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: hi,
                paused: !0,
                onComplete: function() {
                    return L && L(D)
                }
            }) : (At && At.progress(1).kill(),
            At = 0)
        }
        ,
        r && (r.vars.lazy = !1,
        r._initted && !D.isReverted || r.vars.immediateRender !== !1 && a.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
        D.animation = r.pause(),
        r.scrollTrigger = D,
        D.scrubDuration(S),
        Gi = 0,
        m || (m = r.vars.id)),
        H && ((!Ya(H) || H.push) && (H = {
            snapTo: H
        }),
        "scrollBehavior"in Jt.style && lt.set(ht ? [Jt, ni] : tt, {
            scrollBehavior: "auto"
        }),
        Ut.forEach(function(nt) {
            return mn(nt) && nt.target === (ht ? Pt.scrollingElement || ni : tt) && (nt.smooth = !1)
        }),
        Dn = mn(H.snapTo) ? H.snapTo : H.snapTo === "labels" ? l2(r) : H.snapTo === "labelsDirectional" ? a2(r) : H.directional !== !1 ? function(nt, yt) {
            return Qd(H.snapTo)(nt, dn() - ut < 500 ? 0 : yt.direction)
        }
        : lt.utils.snap(H.snapTo),
        cn = H.duration || {
            min: .1,
            max: 2
        },
        cn = Ya(cn) ? as(cn.min, cn.max) : as(cn, cn),
        on = lt.delayedCall(H.delay || hi / 2 || .1, function() {
            var nt = pt()
              , yt = dn() - ut < 500
              , ct = kt.tween;
            if ((yt || Math.abs(D.getVelocity()) < 10) && !ct && !So && I !== nt) {
                var gt = (nt - Yt) / ae, Te = r && !dt ? r.totalProgress() : gt, wt = yt ? 0 : (Te - il) / (dn() - Fr) * 1e3 || 0, fe = lt.utils.clamp(-gt, 1 - gt, Hu(wt / 2) * wt / .185), ue = gt + (H.inertia === !1 ? 0 : fe), zt, Dt, Gt = H, vn = Gt.onStart, re = Gt.onInterrupt, yn = Gt.onComplete;
                if (zt = Dn(ue, D),
                Pr(zt) || (zt = ue),
                Dt = Math.max(0, Math.round(Yt + zt * ae)),
                nt <= Ft && nt >= Yt && Dt !== nt) {
                    if (ct && !ct._initted && ct.data <= Hu(Dt - nt))
                        return;
                    H.inertia === !1 && (fe = zt - gt),
                    kt(Dt, {
                        duration: cn(Hu(Math.max(Hu(ue - Te), Hu(zt - Te)) * .185 / wt / .05 || 0)),
                        ease: H.ease || "power3",
                        data: Hu(Dt - nt),
                        onInterrupt: function() {
                            return on.restart(!0) && re && Uu(D, re)
                        },
                        onComplete: function() {
                            D.update(),
                            I = pt(),
                            r && !dt && (At ? At.resetTo("totalProgress", zt, r._tTime / r._tDur) : r.progress(zt)),
                            Gi = il = r && !dt ? r.totalProgress() : D.progress,
                            Y && Y(D),
                            yn && Uu(D, yn)
                        }
                    }, nt, fe * ae, Dt - nt - fe * ae),
                    vn && Uu(D, vn, kt.tween)
                }
            } else
                D.isActive && I !== nt && on.restart(!0)
        }).pause()),
        m && (gd[m] = D),
        b = D.trigger = Bn(b || y !== !0 && y),
        Hi = b && b._gsap && b._gsap.stRevert,
        Hi && (Hi = Hi(D)),
        y = y === !0 ? b : Bn(y),
        ti(d) && (d = {
            targets: b,
            className: d
        }),
        y && (E === !1 || E === Oi || (E = !E && y.parentNode && y.parentNode.style && Mi(y.parentNode).display === "flex" ? !1 : qe),
        D.pin = y,
        Ct = lt.core.getCache(y),
        Ct.spacer ? Ni = Ct.pinState : (F && (F = Bn(F),
        F && !F.nodeType && (F = F.current || F.nativeElement),
        Ct.spacerIsNative = !!F,
        F && (Ct.spacerState = Zc(F))),
        Ct.spacer = Ue = F || Pt.createElement("div"),
        Ue.classList.add("pin-spacer"),
        m && Ue.classList.add("pin-spacer-" + m),
        Ct.pinState = Ni = Zc(y)),
        a.force3D !== !1 && lt.set(y, {
            force3D: !0
        }),
        D.spacer = Ue = Ct.spacer,
        He = Mi(y),
        ma = He[E + W.os2],
        oe = lt.getProperty(y),
        sn = lt.quickSetter(y, W.a, Ze),
        Kh(y, Ue, He),
        De = Zc(y)),
        et) {
            Vn = Ya(et) ? m_(et, g_) : g_,
            j = Qc("scroller-start", m, tt, W, Vn, 0),
            rn = Qc("scroller-end", m, tt, W, Vn, 0, j),
            Ui = j["offset" + W.op.d2];
            var Ml = Bn(ca(tt, "content") || tt);
            Je = this.markerStart = Qc("start", m, Ml, W, Vn, Ui, 0, C),
            Ie = this.markerEnd = Qc("end", m, Ml, W, Vn, Ui, 0, C),
            C && (pi = lt.quickSetter([Je, Ie], W.a, Ze)),
            !_t && !(el.length && ca(tt, "fixedMarkers") === !0) && (i2(ht ? Jt : tt),
            lt.set([j, rn], {
                force3D: !0
            }),
            Xi = lt.quickSetter(j, W.a, Ze),
            _n = lt.quickSetter(rn, W.a, Ze))
        }
        if (C) {
            var vt = C.vars.onUpdate
              , st = C.vars.onUpdateParams;
            C.eventCallback("onUpdate", function() {
                D.update(0, 0, 1),
                vt && vt.apply(C, st || [])
            })
        }
        if (D.previous = function() {
            return Ot[Ot.indexOf(D) - 1]
        }
        ,
        D.next = function() {
            return Ot[Ot.indexOf(D) + 1]
        }
        ,
        D.revert = function(nt, yt) {
            if (!yt)
                return D.kill(!0);
            var ct = nt !== !1 || !D.enabled
              , gt = hn;
            ct !== D.isReverted && (ct && (Ve = Math.max(pt(), D.scroll.rec || 0),
            ft = D.progress,
            di = r && r.progress()),
            Je && [Je, Ie, j, rn].forEach(function(Te) {
                return Te.style.display = ct ? "none" : "block"
            }),
            ct && (hn = D,
            D.update(ct)),
            y && (!X || !D.isActive) && (ct ? s2(y, Ue, Ni) : Kh(y, Ue, Mi(y), xe)),
            ct || D.update(ct),
            hn = gt,
            D.isReverted = ct)
        }
        ,
        D.refresh = function(nt, yt, ct, gt) {
            if (!((hn || !D.enabled) && !yt)) {
                if (y && nt && Ri) {
                    $e(f, "scrollEnd", J1);
                    return
                }
                !zn && z && z(D),
                hn = D,
                kt.tween && !ct && (kt.tween.kill(),
                kt.tween = 0),
                At && At.pause(),
                x && r && (r.revert({
                    kill: !1
                }).invalidate(),
                r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(Zi) {
                    return Zi.vars.immediateRender && Zi.render(0, !0, !0)
                }) : r.vars.immediateRender && r.render(0, !0, !0)),
                D.isReverted || D.revert(!0, !0),
                D._subPinOffset = !1;
                var Te = G(), wt = P(), fe = C ? C.duration() : tl(tt, W), ue = ae <= .01 || !ae, zt = 0, Dt = gt || 0, Gt = Ya(ct) ? ct.end : a.end, vn = a.endTrigger || b, re = Ya(ct) ? ct.start : a.start || (a.start === 0 || !b ? 0 : y ? "0 0" : "0 100%"), yn = D.pinnedContainer = a.pinnedContainer && Bn(a.pinnedContainer, D), Qn = b && Math.max(0, Ot.indexOf(D)) || 0, me = Qn, Oe, ge, Mn, Vi, _e, Rt, Zn, Ia, Qi, mi, gi, Cl, ga;
                for (et && Ya(ct) && (Cl = lt.getProperty(j, W.p),
                ga = lt.getProperty(rn, W.p)); me-- > 0; )
                    Rt = Ot[me],
                    Rt.end || Rt.refresh(0, 1) || (hn = D),
                    Zn = Rt.pin,
                    Zn && (Zn === b || Zn === y || Zn === yn) && !Rt.isReverted && (mi || (mi = []),
                    mi.unshift(Rt),
                    Rt.revert(!0, !0)),
                    Rt !== Ot[me] && (Qn--,
                    me--);
                for (mn(re) && (re = re(D)),
                re = f_(re, "start", D),
                Yt = S_(re, b, Te, W, pt(), Je, j, D, wt, rt, _t, fe, C, D._startClamp && "_startClamp") || (y ? -.001 : 0),
                mn(Gt) && (Gt = Gt(D)),
                ti(Gt) && !Gt.indexOf("+=") && (~Gt.indexOf(" ") ? Gt = (ti(re) ? re.split(" ")[0] : "") + Gt : (zt = Ic(Gt.substr(2), Te),
                Gt = ti(re) ? re : (C ? lt.utils.mapRange(0, C.duration(), C.scrollTrigger.start, C.scrollTrigger.end, Yt) : Yt) + zt,
                vn = b)),
                Gt = f_(Gt, "end", D),
                Ft = Math.max(Yt, S_(Gt || (vn ? "100% 0" : fe), vn, Te, W, pt() + zt, Ie, rn, D, wt, rt, _t, fe, C, D._endClamp && "_endClamp")) || -.001,
                zt = 0,
                me = Qn; me--; )
                    Rt = Ot[me] || {},
                    Zn = Rt.pin,
                    Zn && Rt.start - Rt._pinPush <= Yt && !C && Rt.end > 0 && (Oe = Rt.end - (D._startClamp ? Math.max(0, Rt.start) : Rt.start),
                    (Zn === b && Rt.start - Rt._pinPush < Yt || Zn === yn) && isNaN(re) && (zt += Oe * (1 - Rt.progress)),
                    Zn === y && (Dt += Oe));
                if (Yt += zt,
                Ft += zt,
                D._startClamp && (D._startClamp += zt),
                D._endClamp && !zn && (D._endClamp = Ft || -.001,
                Ft = Math.min(Ft, tl(tt, W))),
                ae = Ft - Yt || (Yt -= .01) && .001,
                ue && (ft = lt.utils.clamp(0, 1, lt.utils.normalize(Yt, Ft, Ve))),
                D._pinPush = Dt,
                Je && zt && (Oe = {},
                Oe[W.a] = "+=" + zt,
                yn && (Oe[W.p] = "-=" + pt()),
                lt.set([Je, Ie], Oe)),
                y && !(md && D.end >= tl(tt, W)))
                    Oe = Mi(y),
                    Vi = W === ke,
                    Mn = pt(),
                    On = parseFloat(oe(W.a)) + Dt,
                    !fe && Ft > 1 && (gi = (ht ? Pt.scrollingElement || ni : tt).style,
                    gi = {
                        style: gi,
                        value: gi["overflow" + W.a.toUpperCase()]
                    },
                    ht && Mi(Jt)["overflow" + W.a.toUpperCase()] !== "scroll" && (gi.style["overflow" + W.a.toUpperCase()] = "scroll")),
                    Kh(y, Ue, Oe),
                    De = Zc(y),
                    ge = El(y, !0),
                    Ia = _t && da(tt, Vi ? An : ke)(),
                    E ? (xe = [E + W.os2, ae + Dt + Ze],
                    xe.t = Ue,
                    me = E === qe ? po(y, W) + ae + Dt : 0,
                    me && (xe.push(W.d, me + Ze),
                    Ue.style.flexBasis !== "auto" && (Ue.style.flexBasis = me + Ze)),
                    Ju(xe),
                    yn && Ot.forEach(function(Zi) {
                        Zi.pin === yn && Zi.vars.pinSpacing !== !1 && (Zi._subPinOffset = !0)
                    }),
                    _t && pt(Ve)) : (me = po(y, W),
                    me && Ue.style.flexBasis !== "auto" && (Ue.style.flexBasis = me + Ze)),
                    _t && (_e = {
                        top: ge.top + (Vi ? Mn - Yt : Ia) + Ze,
                        left: ge.left + (Vi ? Ia : Mn - Yt) + Ze,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    _e[Qa] = _e["max" + tr] = Math.ceil(ge.width) + Ze,
                    _e[Za] = _e["max" + Vd] = Math.ceil(ge.height) + Ze,
                    _e[Oi] = _e[Oi + cs] = _e[Oi + rs] = _e[Oi + os] = _e[Oi + ss] = "0",
                    _e[qe] = Oe[qe],
                    _e[qe + cs] = Oe[qe + cs],
                    _e[qe + rs] = Oe[qe + rs],
                    _e[qe + os] = Oe[qe + os],
                    _e[qe + ss] = Oe[qe + ss],
                    qi = o2(Ni, _e, X),
                    zn && pt(0)),
                    r ? (Qi = r._initted,
                    Vh(1),
                    r.render(r.duration(), !0, !0),
                    fi = oe(W.a) - On + ae + Dt,
                    pe = Math.abs(ae - fi) > 1,
                    _t && pe && qi.splice(qi.length - 2, 2),
                    r.render(0, !0, !0),
                    Qi || r.invalidate(!0),
                    r.parent || r.totalTime(r.totalTime()),
                    Vh(0)) : fi = ae,
                    gi && (gi.value ? gi.style["overflow" + W.a.toUpperCase()] = gi.value : gi.style.removeProperty("overflow-" + W.a));
                else if (b && pt() && !C)
                    for (ge = b.parentNode; ge && ge !== Jt; )
                        ge._pinOffset && (Yt -= ge._pinOffset,
                        Ft -= ge._pinOffset),
                        ge = ge.parentNode;
                mi && mi.forEach(function(Zi) {
                    return Zi.revert(!1, !0)
                }),
                D.start = Yt,
                D.end = Ft,
                Ne = Ge = zn ? Ve : pt(),
                !C && !zn && (Ne < Ve && pt(Ve),
                D.scroll.rec = 0),
                D.revert(!1, !0),
                ut = dn(),
                on && (I = -1,
                on.restart(!0)),
                hn = 0,
                r && dt && (r._initted || di) && r.progress() !== di && r.progress(di || 0, !0).render(r.time(), !0, !0),
                (ue || ft !== D.progress || C || x || r && !r._initted) && (r && !dt && (r._initted || ft || r.vars.immediateRender !== !1) && r.totalProgress(C && Yt < -.001 && !ft ? lt.utils.normalize(Yt, Ft, 0) : ft, !0),
                D.progress = ue || (Ne - Yt) / ae === ft ? 0 : ft),
                y && E && (Ue._pinOffset = Math.round(D.progress * fi)),
                At && At.invalidate(),
                isNaN(Cl) || (Cl -= lt.getProperty(j, W.p),
                ga -= lt.getProperty(rn, W.p),
                kc(j, W, Cl),
                kc(Je, W, Cl - (gt || 0)),
                kc(rn, W, ga),
                kc(Ie, W, ga - (gt || 0))),
                ue && !zn && D.update(),
                _ && !zn && !oi && (oi = !0,
                _(D),
                oi = !1)
            }
        }
        ,
        D.getVelocity = function() {
            return (pt() - Ge) / (dn() - Fr) * 1e3 || 0
        }
        ,
        D.endAnimation = function() {
            kr(D.callbackAnimation),
            r && (At ? At.progress(1) : r.paused() ? dt || kr(r, D.direction < 0, 1) : kr(r, r.reversed()))
        }
        ,
        D.labelToScroll = function(nt) {
            return r && r.labels && (Yt || D.refresh() || Yt) + r.labels[nt] / r.duration() * ae || 0
        }
        ,
        D.getTrailing = function(nt) {
            var yt = Ot.indexOf(D)
              , ct = D.direction > 0 ? Ot.slice(0, yt).reverse() : Ot.slice(yt + 1);
            return (ti(nt) ? ct.filter(function(gt) {
                return gt.vars.preventOverlaps === nt
            }) : ct).filter(function(gt) {
                return D.direction > 0 ? gt.end <= Yt : gt.start >= Ft
            })
        }
        ,
        D.update = function(nt, yt, ct) {
            if (!(C && !ct && !nt)) {
                var gt = zn === !0 ? Ve : D.scroll(), Te = nt ? 0 : (gt - Yt) / ae, wt = Te < 0 ? 0 : Te > 1 ? 1 : Te || 0, fe = D.progress, ue, zt, Dt, Gt, vn, re, yn, Qn;
                if (yt && (Ge = Ne,
                Ne = C ? pt() : gt,
                H && (il = Gi,
                Gi = r && !dt ? r.totalProgress() : wt)),
                M && y && !hn && !jc && Ri && (!wt && Yt < gt + (gt - Ge) / (dn() - Fr) * M ? wt = 1e-4 : wt === 1 && Ft > gt + (gt - Ge) / (dn() - Fr) * M && (wt = .9999)),
                wt !== fe && D.enabled) {
                    if (ue = D.isActive = !!wt && wt < 1,
                    zt = !!fe && fe < 1,
                    re = ue !== zt,
                    vn = re || !!wt != !!fe,
                    D.direction = wt > fe ? 1 : -1,
                    D.progress = wt,
                    vn && !hn && (Dt = wt && !fe ? 0 : wt === 1 ? 1 : fe === 1 ? 2 : 3,
                    dt && (Gt = !re && Q[Dt + 1] !== "none" && Q[Dt + 1] || Q[Dt],
                    Qn = r && (Gt === "complete" || Gt === "reset" || Gt in r))),
                    J && (re || Qn) && (Qn || S || !r) && (mn(J) ? J(D) : D.getTrailing(J).forEach(function(Mn) {
                        return Mn.endAnimation()
                    })),
                    dt || (At && !hn && !jc ? (At._dp._time - At._start !== At._time && At.render(At._dp._time - At._start),
                    At.resetTo ? At.resetTo("totalProgress", wt, r._tTime / r._tDur) : (At.vars.totalProgress = wt,
                    At.invalidate().restart())) : r && r.totalProgress(wt, !!(hn && (ut || nt)))),
                    y) {
                        if (nt && E && (Ue.style[E + W.os2] = ma),
                        !_t)
                            sn($r(On + fi * wt));
                        else if (vn) {
                            if (yn = !nt && wt > fe && Ft + 1 > gt && gt + 1 >= tl(tt, W),
                            X)
                                if (!nt && (ue || yn)) {
                                    var me = El(y, !0)
                                      , Oe = gt - Yt;
                                    b_(y, Jt, me.top + (W === ke ? Oe : 0) + Ze, me.left + (W === ke ? 0 : Oe) + Ze)
                                } else
                                    b_(y, Ue);
                            Ju(ue || yn ? qi : De),
                            pe && wt < 1 && ue || sn(On + (wt === 1 && !yn ? fi : 0))
                        }
                    }
                    H && !kt.tween && !hn && !jc && on.restart(!0),
                    d && (re || q && wt && (wt < 1 || !Qh)) && Ss(d.targets).forEach(function(Mn) {
                        return Mn.classList[ue || q ? "add" : "remove"](d.className)
                    }),
                    h && !dt && !nt && h(D),
                    vn && !hn ? (dt && (Qn && (Gt === "complete" ? r.pause().totalProgress(1) : Gt === "reset" ? r.restart(!0).pause() : Gt === "restart" ? r.restart(!0) : r[Gt]()),
                    h && h(D)),
                    (re || !Qh) && (g && re && Uu(D, g),
                    R[Dt] && Uu(D, R[Dt]),
                    q && (wt === 1 ? D.kill(!1, 1) : R[Dt] = 0),
                    re || (Dt = wt === 1 ? 1 : 3,
                    R[Dt] && Uu(D, R[Dt]))),
                    $ && !ue && Math.abs(D.getVelocity()) > (Pr($) ? $ : 2500) && (kr(D.callbackAnimation),
                    At ? At.progress(1) : kr(r, Gt === "reverse" ? 1 : !wt, 1))) : dt && h && !hn && h(D)
                }
                if (_n) {
                    var ge = C ? gt / C.duration() * (C._caScrollDist || 0) : gt;
                    Xi(ge + (j._isFlipped ? 1 : 0)),
                    _n(ge)
                }
                pi && pi(-gt / C.duration() * (C._caScrollDist || 0))
            }
        }
        ,
        D.enable = function(nt, yt) {
            D.enabled || (D.enabled = !0,
            $e(tt, "resize", Ir),
            ht || $e(tt, "scroll", Bu),
            z && $e(f, "refreshInit", z),
            nt !== !1 && (D.progress = ft = 0,
            Ne = Ge = I = pt()),
            yt !== !1 && D.refresh())
        }
        ,
        D.getTween = function(nt) {
            return nt && kt ? kt.tween : At
        }
        ,
        D.setPositions = function(nt, yt, ct, gt) {
            if (C) {
                var Te = C.scrollTrigger
                  , wt = C.duration()
                  , fe = Te.end - Te.start;
                nt = Te.start + fe * nt / wt,
                yt = Te.start + fe * yt / wt
            }
            D.refresh(!1, !1, {
                start: h_(nt, ct && !!D._startClamp),
                end: h_(yt, ct && !!D._endClamp)
            }, gt),
            D.update()
        }
        ,
        D.adjustPinSpacing = function(nt) {
            if (xe && nt) {
                var yt = xe.indexOf(W.d) + 1;
                xe[yt] = parseFloat(xe[yt]) + nt + Ze,
                xe[1] = parseFloat(xe[1]) + nt + Ze,
                Ju(xe)
            }
        }
        ,
        D.disable = function(nt, yt) {
            if (nt !== !1 && D.revert(!0, !0),
            D.enabled && (D.enabled = D.isActive = !1,
            yt || At && At.pause(),
            Ve = 0,
            Ct && (Ct.uncache = 1),
            z && We(f, "refreshInit", z),
            on && (on.pause(),
            kt.tween && kt.tween.kill() && (kt.tween = 0)),
            !ht)) {
                for (var ct = Ot.length; ct--; )
                    if (Ot[ct].scroller === tt && Ot[ct] !== D)
                        return;
                We(tt, "resize", Ir),
                ht || We(tt, "scroll", Bu)
            }
        }
        ,
        D.kill = function(nt, yt) {
            D.disable(nt, yt),
            At && !yt && At.kill(),
            m && delete gd[m];
            var ct = Ot.indexOf(D);
            ct >= 0 && Ot.splice(ct, 1),
            ct === En && eo > 0 && En--,
            ct = 0,
            Ot.forEach(function(gt) {
                return gt.scroller === D.scroller && (ct = 1)
            }),
            ct || zn || (D.scroll.rec = 0),
            r && (r.scrollTrigger = null,
            nt && r.revert({
                kill: !1
            }),
            yt || r.kill()),
            Je && [Je, Ie, j, rn].forEach(function(gt) {
                return gt.parentNode && gt.parentNode.removeChild(gt)
            }),
            fs === D && (fs = 0),
            y && (Ct && (Ct.uncache = 1),
            ct = 0,
            Ot.forEach(function(gt) {
                return gt.pin === y && ct++
            }),
            ct || (Ct.spacer = 0)),
            a.onKill && a.onKill(D)
        }
        ,
        Ot.push(D),
        D.enable(!1, !1),
        Hi && Hi(D),
        r && r.add && !ae) {
            var Vt = D.update;
            D.update = function() {
                D.update = Vt,
                Ut.cache++,
                Yt || Ft || D.refresh()
            }
            ,
            lt.delayedCall(.01, D.update),
            ae = .01,
            Yt = Ft = 0
        } else
            D.refresh();
        y && r2()
    }
    ,
    f.register = function(a) {
        return Yu || (lt = a || G1(),
        X1() && window.document && f.enable(),
        Yu = Wr),
        Yu
    }
    ,
    f.defaults = function(a) {
        if (a)
            for (var r in a)
                Vc[r] = a[r];
        return Vc
    }
    ,
    f.disable = function(a, r) {
        Wr = 0,
        Ot.forEach(function(h) {
            return h[r ? "kill" : "disable"](a)
        }),
        We(Nt, "wheel", Bu),
        We(Pt, "scroll", Bu),
        clearInterval(Lc),
        We(Pt, "touchcancel", $i),
        We(Jt, "touchstart", $i),
        Xc(We, Pt, "pointerdown,touchstart,mousedown", d_),
        Xc(We, Pt, "pointerup,touchend,mouseup", p_),
        ho.kill(),
        qc(We);
        for (var o = 0; o < Ut.length; o += 3)
            Gc(We, Ut[o], Ut[o + 1]),
            Gc(We, Ut[o], Ut[o + 2])
    }
    ,
    f.enable = function() {
        if (Nt = window,
        Pt = document,
        ni = Pt.documentElement,
        Jt = Pt.body,
        lt) {
            if (Ss = lt.utils.toArray,
            as = lt.utils.clamp,
            pd = lt.core.context || $i,
            Vh = lt.core.suppressOverwrites || $i,
            jd = Nt.history.scrollRestoration || "auto",
            _d = Nt.pageYOffset || 0,
            lt.core.globals("ScrollTrigger", f),
            Jt) {
                Wr = 1,
                Ku = document.createElement("div"),
                Ku.style.height = "100vh",
                Ku.style.position = "absolute",
                P1(),
                t2(),
                Re.register(lt),
                f.isTouch = Re.isTouch,
                ea = Re.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                dd = Re.isTouch === 1,
                $e(Nt, "wheel", Bu),
                Ld = [Nt, Pt, ni, Jt],
                lt.matchMedia ? (f.matchMedia = function(_) {
                    var S = lt.matchMedia(), b;
                    for (b in _)
                        S.add(b, _[b]);
                    return S
                }
                ,
                lt.addEventListener("matchMediaInit", function() {
                    W1(),
                    Zd()
                }),
                lt.addEventListener("matchMediaRevert", function() {
                    return F1()
                }),
                lt.addEventListener("matchMedia", function() {
                    ja(0, 1),
                    Fa("matchMedia")
                }),
                lt.matchMedia().add("(orientation: portrait)", function() {
                    return kh(),
                    kh
                })) : console.warn("Requires GSAP 3.11.0 or later"),
                kh(),
                $e(Pt, "scroll", Bu);
                var a = Jt.hasAttribute("style"), r = Jt.style, o = r.borderTopStyle, h = lt.core.Animation.prototype, d, m;
                for (h.revert || Object.defineProperty(h, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                r.borderTopStyle = "solid",
                d = El(Jt),
                ke.m = Math.round(d.top + ke.sc()) || 0,
                An.m = Math.round(d.left + An.sc()) || 0,
                o ? r.borderTopStyle = o : r.removeProperty("border-top-style"),
                a || (Jt.setAttribute("style", ""),
                Jt.removeAttribute("style")),
                Lc = setInterval(__, 250),
                lt.delayedCall(.5, function() {
                    return jc = 0
                }),
                $e(Pt, "touchcancel", $i),
                $e(Jt, "touchstart", $i),
                Xc($e, Pt, "pointerdown,touchstart,mousedown", d_),
                Xc($e, Pt, "pointerup,touchend,mouseup", p_),
                hd = lt.utils.checkPrefix("transform"),
                no.push(hd),
                Yu = dn(),
                ho = lt.delayedCall(.2, ja).pause(),
                Lu = [Pt, "visibilitychange", function() {
                    var _ = Nt.innerWidth
                      , S = Nt.innerHeight;
                    Pt.hidden ? (c_ = _,
                    o_ = S) : (c_ !== _ || o_ !== S) && Ir()
                }
                , Pt, "DOMContentLoaded", ja, Nt, "load", ja, Nt, "resize", Ir],
                qc($e),
                Ot.forEach(function(_) {
                    return _.enable(0, 1)
                }),
                m = 0; m < Ut.length; m += 3)
                    Gc(We, Ut[m], Ut[m + 1]),
                    Gc(We, Ut[m], Ut[m + 2])
            } else if (Pt) {
                var g = function _() {
                    f.enable(),
                    Pt.removeEventListener("DOMContentLoaded", _)
                };
                Pt.addEventListener("DOMContentLoaded", g)
            }
        }
    }
    ,
    f.config = function(a) {
        "limitCallbacks"in a && (Qh = !!a.limitCallbacks);
        var r = a.syncInterval;
        r && clearInterval(Lc) || (Lc = r) && setInterval(__, r),
        "ignoreMobileResize"in a && (dd = f.isTouch === 1 && a.ignoreMobileResize),
        "autoRefreshEvents"in a && (qc(We) || qc($e, a.autoRefreshEvents || "none"),
        L1 = (a.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    f.scrollerProxy = function(a, r) {
        var o = Bn(a)
          , h = Ut.indexOf(o)
          , d = Ka(o);
        ~h && Ut.splice(h, d ? 6 : 2),
        r && (d ? el.unshift(Nt, r, Jt, r, ni, r) : el.unshift(o, r))
    }
    ,
    f.clearMatchMedia = function(a) {
        Ot.forEach(function(r) {
            return r._ctx && r._ctx.query === a && r._ctx.kill(!0, !0)
        })
    }
    ,
    f.isInViewport = function(a, r, o) {
        var h = (ti(a) ? Bn(a) : a).getBoundingClientRect()
          , d = h[o ? Qa : Za] * r || 0;
        return o ? h.right - d > 0 && h.left + d < Nt.innerWidth : h.bottom - d > 0 && h.top + d < Nt.innerHeight
    }
    ,
    f.positionInViewport = function(a, r, o) {
        ti(a) && (a = Bn(a));
        var h = a.getBoundingClientRect()
          , d = h[o ? Qa : Za]
          , m = r == null ? d / 2 : r in mo ? mo[r] * d : ~r.indexOf("%") ? parseFloat(r) * d / 100 : parseFloat(r) || 0;
        return o ? (h.left + m) / Nt.innerWidth : (h.top + m) / Nt.innerHeight
    }
    ,
    f.killAll = function(a) {
        if (Ot.slice(0).forEach(function(o) {
            return o.vars.id !== "ScrollSmoother" && o.kill()
        }),
        a !== !0) {
            var r = Ja.killAll || [];
            Ja = {},
            r.forEach(function(o) {
                return o()
            })
        }
    }
    ,
    f
}
)();
Tt.version = "3.15.0";
Tt.saveStyles = function(f) {
    return f ? Ss(f).forEach(function(i) {
        if (i && i.style) {
            var u = In.indexOf(i);
            u >= 0 && In.splice(u, 5),
            In.push(i, i.style.cssText, i.getBBox && i.getAttribute("transform"), lt.core.getCache(i), pd())
        }
    }) : In
}
;
Tt.revert = function(f, i) {
    return Zd(!f, i)
}
;
Tt.create = function(f, i) {
    return new Tt(f,i)
}
;
Tt.refresh = function(f) {
    return f ? Ir(!0) : (Yu || Tt.register()) && ja(!0)
}
;
Tt.update = function(f) {
    return ++Ut.cache && Al(f === !0 ? 2 : 0)
}
;
Tt.clearScrollMemory = $1;
Tt.maxScroll = function(f, i) {
    return tl(f, i ? An : ke)
}
;
Tt.getScrollFunc = function(f, i) {
    return da(Bn(f), i ? An : ke)
}
;
Tt.getById = function(f) {
    return gd[f]
}
;
Tt.getAll = function() {
    return Ot.filter(function(f) {
        return f.vars.id !== "ScrollSmoother"
    })
}
;
Tt.isScrolling = function() {
    return !!Ri
}
;
Tt.snapDirectional = Qd;
Tt.addEventListener = function(f, i) {
    var u = Ja[f] || (Ja[f] = []);
    ~u.indexOf(i) || u.push(i)
}
;
Tt.removeEventListener = function(f, i) {
    var u = Ja[f]
      , a = u && u.indexOf(i);
    a >= 0 && u.splice(a, 1)
}
;
Tt.batch = function(f, i) {
    var u = [], a = {}, r = i.interval || .016, o = i.batchMax || 1e9, h = function(g, _) {
        var S = []
          , b = []
          , y = lt.delayedCall(r, function() {
            _(S, b),
            S = [],
            b = []
        }).pause();
        return function(E) {
            S.length || y.restart(!0),
            S.push(E.trigger),
            b.push(E),
            o <= S.length && y.progress(1)
        }
    }, d;
    for (d in i)
        a[d] = d.substr(0, 2) === "on" && mn(i[d]) && d !== "onRefreshInit" ? h(d, i[d]) : i[d];
    return mn(o) && (o = o(),
    $e(Tt, "refresh", function() {
        return o = i.batchMax()
    })),
    Ss(f).forEach(function(m) {
        var g = {};
        for (d in a)
            g[d] = a[d];
        g.trigger = m,
        u.push(Tt.create(g))
    }),
    u
}
;
var T_ = function(i, u, a, r) {
    return u > r ? i(r) : u < 0 && i(0),
    a > r ? (r - u) / (a - u) : a < 0 ? u / (u - a) : 1
}, Jh = function f(i, u) {
    u === !0 ? i.style.removeProperty("touch-action") : i.style.touchAction = u === !0 ? "auto" : u ? "pan-" + u + (Re.isTouch ? " pinch-zoom" : "") : "none",
    i === ni && f(Jt, u)
}, Kc = {
    auto: 1,
    scroll: 1
}, h2 = function(i) {
    var u = i.event, a = i.target, r = i.axis, o = (u.changedTouches ? u.changedTouches[0] : u).target, h = o._gsap || lt.core.getCache(o), d = dn(), m;
    if (!h._isScrollT || d - h._isScrollT > 2e3) {
        for (; o && o !== Jt && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Kc[(m = Mi(o)).overflowY] || Kc[m.overflowX])); )
            o = o.parentNode;
        h._isScroll = o && o !== a && !Ka(o) && (Kc[(m = Mi(o)).overflowY] || Kc[m.overflowX]),
        h._isScrollT = d
    }
    (h._isScroll || r === "x") && (u.stopPropagation(),
    u._gsapAllow = !0)
}, tv = function(i, u, a, r) {
    return Re.create({
        target: i,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: u,
        onWheel: r = r && h2,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return a && $e(Pt, Re.eventTypes[0], z_, !1, !0)
        },
        onDisable: function() {
            return We(Pt, Re.eventTypes[0], z_, !0)
        }
    })
}, d2 = /(input|label|select|textarea)/i, E_, z_ = function(i) {
    var u = d2.test(i.target.tagName);
    (u || E_) && (i._gsapAllow = !0,
    E_ = u)
}, p2 = function(i) {
    Ya(i) || (i = {}),
    i.preventDefault = i.isNormalizer = i.allowClicks = !0,
    i.type || (i.type = "wheel,touch"),
    i.debounce = !!i.debounce,
    i.id = i.id || "normalizer";
    var u = i, a = u.normalizeScrollX, r = u.momentum, o = u.allowNestedScroll, h = u.onRelease, d, m, g = Bn(i.target) || ni, _ = lt.core.globals().ScrollSmoother, S = _ && _.get(), b = ea && (i.content && Bn(i.content) || S && i.content !== !1 && !S.smooth() && S.content()), y = da(g, ke), E = da(g, An), x = 1, M = (Re.isTouch && Nt.visualViewport ? Nt.visualViewport.scale * Nt.visualViewport.width : Nt.outerWidth) / Nt.innerWidth, L = 0, Y = mn(r) ? function() {
        return r(d)
    }
    : function() {
        return r || 2.8
    }
    , q, H, X = tv(g, i.type, !0, o), F = function() {
        return H = !1
    }, C = $i, $ = $i, J = function() {
        m = tl(g, ke),
        $ = as(ea ? 1 : 0, m),
        a && (C = as(0, tl(g, An))),
        q = ka
    }, W = function() {
        b._gsap.y = $r(parseFloat(b._gsap.y) + y.offset) + "px",
        b.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(b._gsap.y) + ", 0, 1)",
        y.offset = y.cacheID = 0
    }, dt = function() {
        if (H) {
            requestAnimationFrame(F);
            var et = $r(d.deltaY / 2)
              , rt = $(y.v - et);
            if (b && rt !== y.v + y.offset) {
                y.offset = rt - y.v;
                var D = $r((parseFloat(b && b._gsap.y) || 0) - y.offset);
                b.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + D + ", 0, 1)",
                b._gsap.y = D + "px",
                y.cacheID = Ut.cache,
                Al()
            }
            return !0
        }
        y.offset && W(),
        H = !0
    }, tt, bt, ht, _t, R = function() {
        J(),
        tt.isActive() && tt.vars.scrollY > m && (y() > m ? tt.progress(1) && y(m) : tt.resetTo("scrollY", m))
    };
    return b && lt.set(b, {
        y: "+=0"
    }),
    i.ignoreCheck = function(Q) {
        return ea && Q.type === "touchmove" && dt() || x > 1.05 && Q.type !== "touchstart" || d.isGesturing || Q.touches && Q.touches.length > 1
    }
    ,
    i.onPress = function() {
        H = !1;
        var Q = x;
        x = $r((Nt.visualViewport && Nt.visualViewport.scale || 1) / M),
        tt.pause(),
        Q !== x && Jh(g, x > 1.01 ? !0 : a ? !1 : "x"),
        bt = E(),
        ht = y(),
        J(),
        q = ka
    }
    ,
    i.onRelease = i.onGestureStart = function(Q, et) {
        if (y.offset && W(),
        !et)
            _t.restart(!0);
        else {
            Ut.cache++;
            var rt = Y(), D, z;
            a && (D = E(),
            z = D + rt * .05 * -Q.velocityX / .227,
            rt *= T_(E, D, z, tl(g, An)),
            tt.vars.scrollX = C(z)),
            D = y(),
            z = D + rt * .05 * -Q.velocityY / .227,
            rt *= T_(y, D, z, tl(g, ke)),
            tt.vars.scrollY = $(z),
            tt.invalidate().duration(rt).play(.01),
            (ea && tt.vars.scrollY >= m || D >= m - 1) && lt.to({}, {
                onUpdate: R,
                duration: rt
            })
        }
        h && h(Q)
    }
    ,
    i.onWheel = function() {
        tt._ts && tt.pause(),
        dn() - L > 1e3 && (q = 0,
        L = dn())
    }
    ,
    i.onChange = function(Q, et, rt, D, z) {
        if (ka !== q && J(),
        et && a && E(C(D[2] === et ? bt + (Q.startX - Q.x) : E() + et - D[1])),
        rt) {
            y.offset && W();
            var G = z[2] === rt
              , P = G ? ht + Q.startY - Q.y : y() + rt - z[1]
              , I = $(P);
            G && P !== I && (ht += I - P),
            y(I)
        }
        (rt || et) && Al()
    }
    ,
    i.onEnable = function() {
        Jh(g, a ? !1 : "x"),
        Tt.addEventListener("refresh", R),
        $e(Nt, "resize", R),
        y.smooth && (y.target.style.scrollBehavior = "auto",
        y.smooth = E.smooth = !1),
        X.enable()
    }
    ,
    i.onDisable = function() {
        Jh(g, !0),
        We(Nt, "resize", R),
        Tt.removeEventListener("refresh", R),
        X.kill()
    }
    ,
    i.lockAxis = i.lockAxis !== !1,
    d = new Re(i),
    d.iOS = ea,
    ea && !y() && y(1),
    ea && lt.ticker.add($i),
    _t = d._dc,
    tt = lt.to(d, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: a ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: I1(y, y(), function() {
                return tt.pause()
            })
        },
        onUpdate: Al,
        onComplete: _t.vars.onComplete
    }),
    d
};
Tt.sort = function(f) {
    if (mn(f))
        return Ot.sort(f);
    var i = Nt.pageYOffset || 0;
    return Tt.getAll().forEach(function(u) {
        return u._sortY = u.trigger ? i + u.trigger.getBoundingClientRect().top : u.start + Nt.innerHeight
    }),
    Ot.sort(f || function(u, a) {
        return (u.vars.refreshPriority || 0) * -1e6 + (u.vars.containerAnimation ? 1e6 : u._sortY) - ((a.vars.containerAnimation ? 1e6 : a._sortY) + (a.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
Tt.observe = function(f) {
    return new Re(f)
}
;
Tt.normalizeScroll = function(f) {
    if (typeof f > "u")
        return Tn;
    if (f === !0 && Tn)
        return Tn.enable();
    if (f === !1) {
        Tn && Tn.kill(),
        Tn = f;
        return
    }
    var i = f instanceof Re ? f : p2(f);
    return Tn && Tn.target === i.target && Tn.kill(),
    Ka(i.target) && (Tn = i),
    i
}
;
Tt.core = {
    _getVelocityProp: fd,
    _inputObserver: tv,
    _scrollers: Ut,
    _proxies: el,
    bridge: {
        ss: function() {
            Ri || Fa("scrollStart"),
            Ri = dn()
        },
        ref: function() {
            return hn
        }
    }
};
G1() && lt.registerPlugin(Tt);
Ke.registerPlugin(Tt);
function m2() {
    const f = Mt.useRef(null);
    return Mt.useEffect( () => {
        const i = new CS({
            duration: 1.2,
            easing: u => Math.min(1, 1.001 - Math.pow(2, -10 * u)),
            touchMultiplier: 2
        });
        return f.current = i,
        i.on("scroll", Tt.update),
        Ke.ticker.add(u => {
            i.raf(u * 1e3)
        }
        ),
        Ke.ticker.lagSmoothing(0),
        () => {
            i.destroy(),
            Ke.ticker.remove(i.raf)
        }
    }
    , []),
    f
}
const g2 = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , _2 = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, u, a) => a ? a.toUpperCase() : u.toLowerCase())
  , A_ = f => {
    const i = _2(f);
    return i.charAt(0).toUpperCase() + i.slice(1)
}
  , ev = (...f) => f.filter( (i, u, a) => !!i && i.trim() !== "" && a.indexOf(i) === u).join(" ").trim()
  , v2 = f => {
    for (const i in f)
        if (i.startsWith("aria-") || i === "role" || i === "title")
            return !0
}
;
var y2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const S2 = Mt.forwardRef( ({color: f="currentColor", size: i=24, strokeWidth: u=2, absoluteStrokeWidth: a, className: r="", children: o, iconNode: h, ...d}, m) => Mt.createElement("svg", {
    ref: m,
    ...y2,
    width: i,
    height: i,
    stroke: f,
    strokeWidth: a ? Number(u) * 24 / Number(i) : u,
    className: ev("lucide", r),
    ...!o && !v2(d) && {
        "aria-hidden": "true"
    },
    ...d
}, [...h.map( ([g,_]) => Mt.createElement(g, _)), ...Array.isArray(o) ? o : [o]]));
const Pa = (f, i) => {
    const u = Mt.forwardRef( ({className: a, ...r}, o) => Mt.createElement(S2, {
        ref: o,
        iconNode: i,
        className: ev(`lucide-${g2(A_(f))}`, `lucide-${f}`, a),
        ...r
    }));
    return u.displayName = A_(f),
    u
}
;
const b2 = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , x2 = Pa("chevron-down", b2);
const T2 = [["path", {
    d: "M12 6v6l4 2",
    key: "mmk7yg"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]
  , E2 = Pa("clock", T2);
const z2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , A2 = Pa("globe", z2);
const D2 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , O2 = Pa("map-pin", D2);
const M2 = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , C2 = Pa("sparkles", M2);
const w2 = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]
  , R2 = Pa("volume-2", w2);
const N2 = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]
  , U2 = Pa("volume-x", N2);
function H2({lang: f, onLangChange: i, musicOn: u, onMusicToggle: a}) {
    return Z.jsxs(Z.Fragment, {
        children: [Z.jsxs("button", {
            "code-path": "src/components/FixedUI.tsx:14:7",
            onClick: i,
            className: "fixed top-4 right-4 z-40 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-sage/20 text-charcoal text-sm font-body hover:bg-white transition-colors",
            children: [Z.jsx(A2, {
                "code-path": "src/components/FixedUI.tsx:18:9",
                size: 16,
                className: "text-sage"
            }), Z.jsx("span", {
                "code-path": "src/components/FixedUI.tsx:19:9",
                className: "uppercase tracking-wider text-xs font-medium",
                children: f === "en" ? "FR" : f === "fr" ? "AR" : "EN"
            })]
        }), Z.jsx("button", {
            "code-path": "src/components/FixedUI.tsx:23:7",
            onClick: a,
            className: "fixed bottom-4 right-4 z-40 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-sage/20 text-charcoal hover:bg-white transition-all hover:scale-105  hidden",
            children: u ? Z.jsx(R2, {
                "code-path": "src/components/FixedUI.tsx:28:11",
                size: 20,
                className: "text-sage"
            }) : Z.jsx(U2, {
                "code-path": "src/components/FixedUI.tsx:30:11",
                size: 20,
                className: "text-charcoal/50"
            })
        })]
    })
}
const Se = {
    bride: "Nadine",
    groom: "Abdulrahman",
    brideFull: "Nadine",
    groomFull: "Abdulrahman",
    familyName: "",
    concernedFamily: "",
    concernedSide: "bride",
    weddingDate: "2026-08-18T18:30:00",
    dateDisplay: "18 août 2026",
    timeDisplay: "14H00",
    timeDisplayEN: "  Starting from 2:00 PM",
    venue: "Salle des fêtes Maachi",
    address: "Batna",
    mapsLink: "https://maps.app.goo.gl/U5vqR4D28A5vJevb8",
    mapCoords: "36.742257,2.9842149",
      conditions: `• Les photos sont interdites afin de préserver l’intimité de la cérémonie
• La salle n’accepte pas les enfants – yahia aux adultes uniquement
• نرجو من ضيوفنا الكرام تفهّم أن قاعة الحفلات لا تستقبل الأطفال`,
               
                


    introImage: "golden seal.png",
    introVideo: "intro-video2.mp4",
    bgVideo: "bg3.mp4",
    music: "/assets/background-music-violent.mp3"
};
function B2({onOpenComplete: f, onStartMusic: i, onPlayBgVideo: u}) {
    const a = Mt.useRef(null)
      , r = Mt.useRef(null)
      , o = Mt.useRef(null)
      , [h,d] = Mt.useState(!1)
      , m = () => {
        Ke.to(a.current, {
            opacity: 0,
            duration: .5,
            ease: "power2.inOut",
            onComplete: f
        })
    }
      , g = () => {
        if (h)
            return;
        d(!0);
        try {
            i()
        } catch {}
        try {
            u()
        } catch {}
        if (!o.current) {
            m();
            return
        }
         const _ = o.current
          , S = () => {
            _.removeEventListener("playing", S),
            Ke.to(r.current, {
                opacity: 0,
                duration: .5,
                ease: "power2.inOut"
            }),
            Ke.to(_, {
                opacity: 1,
                duration: .5,
                ease: "power2.inOut"
            })
        }
        ;
        _.addEventListener("playing", S),
        _.play().catch( () => {
            _.removeEventListener("playing", S),
            Ke.to(r.current, {
                opacity: 0,
                duration: .4,
                onComplete: m
            })
        }
        )
    }
    ;
    return Z.jsxs("div", {
        "code-path": "src/components/EnvelopeOverlay.tsx:54:5",
        ref: a,
        className: "fixed inset-0 z-50 cursor-pointer",
        style: {
            background: "#F5F0E8"
        },
        onClick: g,
        children: [Z.jsx("video", {
            "code-path": "src/components/EnvelopeOverlay.tsx:61:7",
            ref: _ => {
                if (_) {
                    try {
                        _.muted = !0
                    } catch {}
                    o.current = _
                }
            }
            ,
            src: Se.introVideo,
            playsInline: !0,
            preload: "auto",
            className: "absolute inset-0 w-full h-full object-cover",
            style: {
                opacity: 0
            },
            onEnded: m
        }), Z.jsxs("div", {
            "code-path": "src/components/EnvelopeOverlay.tsx:78:7",
            ref: r,
            className: "absolute inset-0 ",
            children:[ Z.jsx("img", {
                "code-path": "src/components/EnvelopeOverlay.tsx:79:9",
                src: Se.introImage,
                alt: "",
                className: "w-full h-full object-cover"
        }),
             Z.jsx("button", {
            style: {
        position: "fixed",
        bottom: "460px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "transparent",
        color: "#6D1F32",
        padding: "14px 32px",
        border: "2px solid #6D1F32",
        borderRadius: "9999px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 0 12px rgba(212,175,55,0.35)",
         backdropFilter: "blur(2px)"
    },                   
        onClick: e => {
            e.stopPropagation(); // يمنع تنفيذ onClick مرتين
            g();
        },
        children: " اضغط لفتح الدعوة"
            })
            ]
        })]
    })
}
let D_ = typeof document < "u" ? Mt.useLayoutEffect : Mt.useEffect
  , O_ = f => f && !Array.isArray(f) && typeof f == "object"
  , Jc = []
  , Y2 = {}
  , nv = Ke;
const Wa = (f, i=Jc) => {
    let u = Y2;
    O_(f) ? (u = f,
    f = null,
    i = "dependencies"in u ? u.dependencies : Jc) : O_(i) && (u = i,
    i = "dependencies"in u ? u.dependencies : Jc),
    f && typeof f != "function" && console.warn("First parameter must be a function or config object");
    const {scope: a, revertOnUpdate: r} = u
      , o = Mt.useRef(!1)
      , h = Mt.useRef(nv.context( () => {}
    , a))
      , d = Mt.useRef(g => h.current.add(null, g))
      , m = i && i.length && !r;
    return m && D_( () => (o.current = !0,
    () => h.current.revert()), Jc),
    D_( () => {
        if (f && h.current.add(f, a),
        !m || !o.current)
            return () => h.current.revert()
    }
    , i),
    {
        context: h.current,
        contextSafe: d.current
    }
}
;
Wa.register = f => {
    nv = f
}
;
Wa.headless = !0;
Ke.registerPlugin(Tt);
function L2({envelopeOpened: f, t: i, onRegisterBgPlay: u}) {
    const a = Mt.useRef(null)
      , r = Mt.useRef(null)
      , o = Mt.useRef(null)
      , h = Mt.useRef(null);
    Mt.useEffect( () => {
        u && u( () => {
            h.current && (h.current.muted = !0,
            h.current.play().catch( () => {}
            ))
        }
        )
    }
    , []),
    Wa( () => {
        !r.current || !a.current || Ke.to(r.current, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: a.current,
                start: "top top",
                end: "bottom top",
                scrub: !0
            }
        })
    }
    , {
        scope: a
    }),
    Wa( () => {
        !f || !o.current || Ke.fromTo(o.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power2.out"
        })
    }
    , [f]);
    const d = () => {
        const m = a.current;
        if (m) {
            const g = m.nextElementSibling;
            g && g.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    ;
    return Z.jsxs("section", {
        "code-path": "src/sections/Section.tsx:69:5",
        ref: a,
        className: "relative min-h-screen flex items-start justify-center overflow-hidden",
        children: [Z.jsxs("div", {
            "code-path": "src/sections/HeroSection.tsx:73:7",
            ref: r,
            className: "absolute inset-0 w-full h-[120%] -top-[10%]",
            children: [Z.jsx("video", {
                "code-path": "src/sections/HeroSection.tsx:77:9",
                ref: h,
                src: Se.bgVideo,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                disablePictureInPicture: !0,
                className: "w-full h-full object-cover pointer-events-none select-none"
            }), Z.jsx("div", {
                "code-path": "src/sections/HeroSection.tsx:87:9",
                className: "absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40"
            })]
        }), Z.jsxs("div", {
            "code-path": "src/sections/HeroSection.tsx:91:7",
            ref: o,
            className: "relative z-10 text-center px-6 mt-96",
            style: {
                opacity: 0
            },
            children: [Z.jsx("p", {
                "code-path": "src/sections/HeroSection.tsx:96:9",
                className: "font-arabic text-2xl mb-2",
                style: {
                    color: "#F5F0E8"
                },
                dir: "rtl",
                children: "بسم الله الرحمن الرحيم"
            }), Z.jsx("p", {
                "code-path": "src/sections/HeroSection.tsx:99:9",
                className: "font-body text-xs uppercase tracking-[0.3em] mb-2",
                style: {
                    color: "#F5F0E8"
                },
                children: i.gettingMarried
            }), Z.jsxs("h1", {
                "code-path": "src/sections/HeroSection.tsx:103:9",
                className: `${i.nameFont} text-3xl md:text-5xl drop-shadow-lg mb-2 leading-tight whitespace-nowrap`,
                style: {
                    color: "#F5F0E8"
                },
                children: [ i.groom , " & " , i.bride ]
            }),
            
    
            
             Z.jsxs("div", {
                "code-path": "src/sections/HeroSection.tsx:107:9",
                className: "flex items-center justify-center gap-3 mb-2",
                children: [Z.jsx("div", {
                    "code-path": "src/sections/HeroSection.tsx:108:11",
                    className: "w-12 h-px",
                    style: {
                        background: "#F5F0E866"
                    }
                }), Z.jsxs("div", {
                    "code-path": "src/sections/HeroSection.tsx:109:11",
                    className: "flex gap-1",
                    children: [Z.jsx("div", {
                        "code-path": "src/sections/HeroSection.tsx:110:13",
                        className: "w-1.5 h-1.5 rounded-full",
                        style: {
                            background: "#F5F0E899"
                        }
                    }), Z.jsx("div", {
                        "code-path": "src/sections/HeroSection.tsx:111:13",
                        className: "w-2.5 h-2.5 rounded-full",
                        style: {
                            background: "#F5F0E8"
                        }
                    }), Z.jsx("div", {
                        "code-path": "src/sections/HeroSection.tsx:112:13",
                        className: "w-1.5 h-1.5 rounded-full",
                        style: {
                            background: "#F5F0E899"
                        }
                    })]
                }), Z.jsx("div", {
                    "code-path": "src/sections/HeroSection.tsx:114:11",
                    className: "w-12 h-px",
                    style: {
                        background: "#F5F0E866"
                    }
                })]
            }), Z.jsx("p", {
                "code-path": "src/sections/HeroSection.tsx:117:9",
                className: "font-body text-sm uppercase tracking-[0.25em] mb-12",
                style: {
                    color: "#F5F0E8"
                },
                children: i.dateDisplay.toUpperCase()
            })]
        }), Z.jsx("button", {
            "code-path": "src/sections/HeroSection.tsx:122:7",
            onClick: d,
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group cursor-pointer",
            children: Z.jsx(x2, {
                "code-path": "src/sections/HeroSection.tsx:126:9",
                size: 24,
                className: "text-white/80 animate-bounce-gentle group-hover:text-peach transition-colors"
            })
        })]
    })
}
Ke.registerPlugin(Tt);
function j2({t: f}) {
    const i = Mt.useRef(null)
      , u = Mt.useRef(null);
    return Wa( () => {
        if (!u.current)
            return;
        const a = u.current.querySelectorAll(".animate-item");
        Ke.from(a, {
            opacity: 0,
            y: 24,
            duration: .7,
            stagger: .18,
            ease: "power2.out",
            scrollTrigger: {
                trigger: u.current,
                start: "top 80%",
                once: !0
            }
        })
    }
    , {
        scope: i
    }),
       Z.jsx("section", {
        "code-path": "src/sections/LoveStorySection.tsx:37:5",
        ref: i,
        className: "bg-cream py-20 md:py-28 px-6",
        children: Z.jsxs("div", {
            "code-path": "src/sections/LoveStorySection.tsx:38:7",
            className: "max-w-xl mx-auto",
            ref: u,
            children: [Z.jsx("p", {
                "code-path": "src/sections/LoveStorySection.tsx:40:9",
                className: "animate-item font-body text-xs uppercase tracking-[0.3em] text-gold text-center mb-3",
                children: f.ourJourney
            }), Z.jsxs("div", {
                "code-path": "src/sections/LoveStorySection.tsx:44:9",
                className: "animate-item flex items-center justify-center gap-1.5 mb-10",
                children: [[4, 5, 7, 8, 7, 5, 4].map( (a, r) => Z.jsx("div", {
                    "code-path": "src/sections/LoveStorySection.tsx:46:13",
                    style: {
                        width: a,
                        height: a,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f5ede2 40%, #dccbb4 75%, #c0a882 100%)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.13), inset 0 -1px 2px rgba(255,255,255,0.8)"
                    }
                }, r)), Z.jsx("span", {
                    "code-path": "src/sections/LoveStorySection.tsx:50:11",
                    className: "text-gold text-sm mx-2",
                    children: "♡"
                }), [4, 5, 7, 8, 7, 5, 4].map( (a, r) => Z.jsx("div", {
                    "code-path": "src/sections/LoveStorySection.tsx:52:13",
                    style: {
                        width: a,
                        height: a,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f5ede2 40%, #dccbb4 75%, #c0a882 100%)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.13), inset 0 -1px 2px rgba(255,255,255,0.8)"
                    }
                }, r))]
            }), Z.jsxs("div", {
                "code-path": "src/sections/LoveStorySection.tsx:58:9",
                className: "lace-card relative px-8 md:px-12 text-center",
                style: {
                    paddingTop: 70,
                    paddingBottom: 70
                },
                children: [Z.jsx("img", {
                    "code-path": "src/sections/LoveStorySection.tsx:61:11",
                    src: "dentelle.svg",
                    alt: "",
                    className: "absolute top-0 left-0 w-full pointer-events-none z-10",
                    style: {
                        filter: "sepia(0.4) saturate(1.5) brightness(0.95)"
                    }
                }), Z.jsx("img", {
                    "code-path": "src/sections/LoveStorySection.tsx:66:11",
                    src: "dentelle.svg",
                    alt: "",
                    className: "absolute bottom-0 left-0 w-full pointer-events-none z-10",
                    style: {
                        transform: "scaleY(-1)",
                        filter: "sepia(0.4) saturate(1.5) brightness(0.95)"
                    }
                }), Z.jsxs("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:70:11",
                    className: "animate-item font-serif-display text-lg md:text-xl text-charcoal/90 leading-relaxed italic",
                    children: [f.fairepartIntroPre, " ", Se.concernedFamily, " ", f.fairepartIntroPostDaughter]
                }), Z.jsx("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:74:11",
                    className: `animate-item ${f.nameFont} text-3xl md:text-4xl text-[#8B7045] mt-6 mb-1`,
                    children: f.brideFull
                }), Z.jsx("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:78:11",
                    className: "animate-item  font-serif-display text-xs uppercase tracking-[0.25em] text-charcoal/50 my-3",
                    children: f.fairepartConnector
                }), Z.jsx("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:82:11",
                    className: `animate-item ${f.nameFont} text-3xl md:text-4xl text-[#8B7045] mb-6`,
                    children: f.groomFull
                }), Z.jsx("div", {
                    "code-path": "src/sections/LoveStorySection.tsx:86:11",
                    className: "animate-item w-8 h-px bg-gold/50 mx-auto mb-6"
                }), Z.jsx("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:88:11",
                    className: "animate-item font-serif-display text-lg md:text-xl text-charcoal/90 leading-relaxed italic mb-6",
                    children: f.fairepartPara2
                }), Z.jsx("div", {
                    "code-path": "src/sections/LoveStorySection.tsx:92:11",
                    className: "animate-item w-8 h-px bg-gold/50 mx-auto mb-6"
                }), Z.jsx("p", {
                    "code-path": "src/sections/LoveStorySection.tsx:94:11",
                    className: "animate-item font-serif-display text-lg md:text-xl text-charcoal/90 leading-relaxed italic",
                    children: f.fairepartPara3
                })]
            })]
        })
    })
}
Ke.registerPlugin(Tt);
const q2 = new Date(Se.weddingDate);
function M_() {
    const f = q2.getTime() - Date.now();
    return f <= 0 ? {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    } : {
        days: Math.floor(f / 864e5),
        hours: Math.floor(f % 864e5 / 36e5),
        minutes: Math.floor(f % 36e5 / 6e4),
        seconds: Math.floor(f % 6e4 / 1e3)
    }
}
const go = [5, 6, 8, 9, 8, 6, 5];
function iv({size: f}) {
    return Z.jsx("div", {
        "code-path": "src/sections/CountdownSection.tsx:27:5",
        style: {
            width: f,
            height: f,
            flexShrink: 0,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f5ede2 40%, #dccbb4 75%, #c0a882 100%)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.13), inset 0 -1px 2px rgba(255,255,255,0.8)"
        }
    })
}
function C_({count: f=30}) {
    return Z.jsx("div", {
        "code-path": "src/sections/CountdownSection.tsx:43:5",
        className: "flex justify-center items-center gap-[3px] overflow-hidden",
        children: Array.from({
            length: f
        }).map( (i, u) => Z.jsx(iv, {
            "code-path": "src/sections/CountdownSection.tsx:45:9",
            size: go[u % go.length]
        }, u))
    })
}
function w_({count: f=18}) {
    return Z.jsx("div", {
        "code-path": "src/sections/CountdownSection.tsx:53:5",
        className: "flex flex-col justify-between items-center gap-[3px] py-[3px]",
        children: Array.from({
            length: f
        }).map( (i, u) => Z.jsx(iv, {
            "code-path": "src/sections/CountdownSection.tsx:55:9",
            size: go[u % go.length]
        }, u))
    })
}
function X2({t: f}) {
    const [i,u] = Mt.useState(M_)
      , a = Mt.useRef(null)
      , r = Mt.useRef(null);
    Mt.useEffect( () => {
        const h = setInterval( () => u(M_()), 1e3);
        return () => clearInterval(h)
    }
    , []),
    Wa( () => {
        if (!r.current)
            return;
        const h = r.current.querySelectorAll(".animate-item");
        Ke.from(h, {
            opacity: 0,
            y: 22,
            duration: .7,
            stagger: .14,
            ease: "power2.out",
            scrollTrigger: {
                trigger: r.current,
                start: "top 80%",
                once: !0
            }
        })
    }
    , {
        scope: a
    });
    const o = [{
        value: i.days,
        label: f.countdownDays
    }, {
        value: i.hours,
        label: f.countdownHours
    }, {
        value: i.minutes,
        label: f.countdownMinutes
    }, {
        value: i.seconds,
        label: f.countdownSeconds
    }];
    return Z.jsx("section", {
        "code-path": "src/sections/CountdownSection.tsx:100:5",
        ref: a,
        className: "bg-cream py-20 md:py-28 relative",
        children: Z.jsx("div", {
            "code-path": "src/sections/CountdownSection.tsx:104:7",
            ref: r,
            className: "max-w-xl mx-auto",
            children: Z.jsxs("div", {
                "code-path": "src/sections/CountdownSection.tsx:107:9",
                className: "animate-item flex flex-col",
                children: [Z.jsx(C_, {
                    "code-path": "src/sections/CountdownSection.tsx:110:11",
                    count: 28
                }), Z.jsxs("div", {
                    "code-path": "src/sections/CountdownSection.tsx:113:11",
                    className: "flex items-stretch overflow-visible",
                    children: [Z.jsx(w_, {
                        "code-path": "src/sections/CountdownSection.tsx:114:13",
                        count: 20
                    }), Z.jsxs("div", {
                        "code-path": "src/sections/CountdownSection.tsx:117:13",
                        className: "flex-1 px-6 py-8 text-center",
                        style: {
                            backgroundImage: "url(textured-paper.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        },
                        children: [Z.jsx("p", {
                            "code-path": "src/sections/CountdownSection.tsx:127:15",
                            className: "animate-item font-script text-4xl md:text-5xl text-[#8B7045] drop-shadow-sm mb-2 ",
                            children: f.countdownTitle
                        }), Z.jsxs("p", {
                            "code-path": "src/sections/CountdownSection.tsx:132:15",
                            className: "animate-item font-body text-[11px] uppercase tracking-[0.28em] text-charcoal/55 mb-8",
                            children: [f.countdownUntil, " ", f.dateDisplay, " — ", Se.timeDisplay]
                        }), Z.jsx("div", {
                            "code-path": "src/sections/CountdownSection.tsx:137:15",
                            className: "animate-item flex justify-center items-center",
                            children: o.map( (h, d) => Z.jsxs("div", {
                                "code-path": "src/sections/CountdownSection.tsx:139:19",
                                className: "flex items-center",
                                children: [Z.jsxs("div", {
                                    "code-path": "src/sections/CountdownSection.tsx:140:21",
                                    className: "flex flex-col items-center px-3 md:px-5",
                                    children: [Z.jsx("span", {
                                        "code-path": "src/sections/CountdownSection.tsx:141:23",
                                        className: "font-script text-5xl md:text-6xl text-[#8B7045] leading-none tabular-nums",
                                        children: String(h.value).padStart(2, "0")
                                    }), Z.jsx("span", {
                                        "code-path": "src/sections/CountdownSection.tsx:144:23",
                                        className: "font-body text-[9px] uppercase tracking-[0.22em] text-charcoal/45 mt-2",
                                        children: h.label
                                    })]
                                }), d < o.length - 1 && Z.jsx("div", {
                                    "code-path": "src/sections/CountdownSection.tsx:149:23",
                                    className: "w-px h-10 bg-[#C9A96E]/40 self-center"
                                })]
                            }, d))
                        })]
                    }), Z.jsx(w_, {
                        "code-path": "src/sections/CountdownSection.tsx:157:13",
                        count: 20
                    })]
                }), Z.jsx(C_, {
                    "code-path": "src/sections/CountdownSection.tsx:161:11",
                    count: 28
                })]
            })
        })
    })
}
Ke.registerPlugin(Tt);
function lv({children: f, delay: i=0, direction: u="up", className: a="", duration: r=.6, stagger: o=0}) {
    const h = Mt.useRef(null);
    return Wa( () => {
        if (!h.current)
            return;
        const d = {
            opacity: 0,
            duration: r,
            delay: i,
            ease: "power2.out"
        };
        u === "up" ? d.y = 30 : u === "left" ? (d.x = 0,
        d.y = 30) : u === "scale" ? d.scale = .95 : u === "lace" && (d.clipPath = "inset(0 100% 0 0)",
        d.opacity = 0);
        const m = o > 0 ? h.current.children : h.current;
        Ke.from(m, {
            ...d,
            stagger: o > 0 ? o : 0,
            scrollTrigger: {
                trigger: h.current,
                start: "top 80%",
                once: !0
            }
        })
    }
    , {
        scope: h
    }),
    Z.jsx("div", {
        "code-path": "src/components/ScrollReveal.tsx:64:5",
        ref: h,
        className: a,
        children: f
    })
}
function G2({t: f, lang: i}) {
    const u = "https://maps.app.goo.gl/2BSkYjepoasrruiz6"
      , a = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.0527824938895!2d6.0818411999999995!3d35.5523986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f413007a41e939%3A0xee7a19d790f27f89!2sSalle%20des%20f%C3%AAtes%20maachi!5e0!3m2!1sfr!2sdz!4v1784942200843!5m2!1sfr!2sdz";
    return Z.jsx("section", {
        "code-path": "src/sections/EventDetailsSection.tsx:20:5",
        className: "bg-cream py-20 md:py-28 px-6",
        children: Z.jsx("div", {
            "code-path": "src/sections/EventDetailsSection.tsx:21:7",
            className: "max-w-xl mx-auto",
            children: Z.jsx(lv, {
                "code-path": "src/sections/EventDetailsSection.tsx:22:9",
                children: Z.jsx("div", {
                    "code-path": "src/sections/EventDetailsSection.tsx:23:11",
                    className: "lace-card p-6 md:p-8 mb-6",
                    children: Z.jsxs("div", {
                        "code-path": "src/sections/EventDetailsSection.tsx:24:13",
                        className: "text-center",
                        children: [Z.jsx(C2, {
                            "code-path": "src/sections/EventDetailsSection.tsx:25:15",
                            size: 24,
                            className: "text-gold mx-auto mb-3"
                        }), Z.jsx("h2", {
                            "code-path": "src/sections/EventDetailsSection.tsx:26:15",
                            className: "font-serif-display text-3xl md:text-4xl text-charcoal mb-6",
                            children: f.weddingCeremony
                        }), Z.jsxs("div", {
                            "code-path": "src/sections/EventDetailsSection.tsx:30:15",
                            className: "space-y-2 mb-4",
                            children: [Z.jsxs("div", {
                                "code-path": "src/sections/EventDetailsSection.tsx:31:17",
                                className: "flex items-center justify-center gap-2 text-charcoal/80",
                                children: [Z.jsx(E2, {
                                    "code-path": "src/sections/EventDetailsSection.tsx:32:19",
                                    size: 16,
                                    className: "text-gold"
                                }), Z.jsx("span", {
                                    "code-path": "src/sections/EventDetailsSection.tsx:33:19",
                                    className: "font-body text-sm",
                                    children:  f.timeDisplayEN 
                                })]
                            }), Z.jsxs("div", {
                                "code-path": "src/sections/EventDetailsSection.tsx:35:17",
                                className: "flex items-center justify-center gap-2 text-charcoal/80",
                                children: [Z.jsx(O2, {
                                    "code-path": "src/sections/EventDetailsSection.tsx:36:19",
                                    size: 16,
                                    className: "text-gold"
                                }), Z.jsx("span", {
                                    "code-path": "src/sections/EventDetailsSection.tsx:37:19",
                                    className: "font-body text-sm",
                                    children: f.venue
                                })]
                            }), Z.jsx("p", {
                                "code-path": "src/sections/EventDetailsSection.tsx:39:17",
                                className: "font-body text-xs text-charcoal/60",
                                children: Se.address
                            })]
                        }), Z.jsxs("div", {
                            "code-path": "src/sections/EventDetailsSection.tsx:44:15",
                            className: "relative rounded-lg overflow-hidden mb-4 border border-[#E8DCC4]",
                            children: [Z.jsx("iframe", {
                                "code-path": "src/sections/EventDetailsSection.tsx:45:17",
                                src: a,
                                width: "100%",
                                height: "200",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: !0,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade",
                                title: "Wedding Venue Location",
                                className: "rounded-lg"
                            }), Z.jsx("a", {
                                "code-path": "src/sections/EventDetailsSection.tsx:57:17",
                                href: u,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "absolute inset-0"
                            })]
                        }), Z.jsx("p", {
                            "code-path": "src/sections/EventDetailsSection.tsx:65:15",
                            className: "font-body text-sm text-charcoal/70 leading-relaxed",
                            children: f.ceremonyDesc
                        })]
                    })
                })
            })
        })
    })
}
function V2({t: f}) {
    return Z.jsx("section", {
        "code-path": "src/sections/ConditionsSection.tsx:20:5",
        className: "bg-cream py-20 md:py-28 px-6",
        children: Z.jsx("div", {
            "code-path": "src/sections/ConditionsSection.tsx:21:7",
            className: "max-w-xl mx-auto",
            children: Z.jsx(lv, {
                "code-path": "src/sections/ConditionsSection.tsx:22:9",
                children: Z.jsxs("div", {
                    "code-path": "src/sections/ConditionsSection.tsx:23:11",
                    className: "lace-card relative px-8 md:px-12 py-20",
                    children: [
                        Z.jsx("img", {
                            "code-path": "src/sections/ConditionsSection.tsx:25:13",
                            src: "dentelle.svg",
                            alt: "",
                            className: "absolute top-0 left-0 w-full pointer-events-none z-10",
                            style: {
                                filter: "sepia(0.4) saturate(1.5) brightness(0.95)"
                            }
                        }),
                        Z.jsx("img", {
                            "code-path": "src/sections/ConditionsSection.tsx:28:13",
                            src: "dentelle.svg",
                            alt: "",
                            className: "absolute bottom-0 left-0 w-full pointer-events-none z-10",
                            style: {
                                transform: "scaleY(-1)",
                                filter: "sepia(0.4) saturate(1.5) brightness(0.95)"
                            }
                        }),
                        Z.jsxs("div", {
                            "code-path": "src/sections/ConditionsSection.tsx:32:13",
                            className: "relative z-20",
                            children: [
                                Z.jsxs("div", {
                                    "code-path": "src/sections/ConditionsSection.tsx:33:15",
                                    className: "text-center mb-8",
                                    children: [
                                        Z.jsx("h2", {
                                            "code-path": "src/sections/ConditionsSection.tsx:35:17",
                                            className: "font-serif-display text-3xl md:text-4xl text-charcoal  text-gold",
                                            children: f.conditionsTitle
                                        }),
                                        Z.jsx("div", {
                                            "code-path": "src/sections/ConditionsSection.tsx:38:17",
                                            className: "w-16 h-px bg-gold/40 mx-auto mt-4"
                                        })
                                    ]
                                }),
                                Z.jsxs("div", {
                                    "code-path": "src/sections/ConditionsSection.tsx:41:15",
                                    className: "text-center space-y-4",
                                    children: [
                                        Z.jsx("p", {
                                            className: "ayah font-arabic text-3xl leading-loose   text-gold",
                                             dir: "rtl",
                                            children: "﴿ يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ ﴾"
                                        }),
                                        Z.jsx("p", {
                                            className: "surah text-lg mt-4 text-gold",
                                            children: "سورة الحجرات - الآية 13"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
function Q2({t: f}) {
    return Z.jsxs("footer", {
        "code-path": "src/sections/FooterSection.tsx:10:5",
        className: "bg-cream border-t border-gold/20 py-6 px-6 text-center",
        children: [Z.jsxs("p", {
            "code-path": "src/sections/FooterSection.tsx:11:7",
            className: "font-script text-2xl text-[#8B7045] mb-1",
            children: [f.bride, " & ", f.groom]
        }), Z.jsxs("p", {
            "code-path": "src/sections/FooterSection.tsx:14:7",
            className: "font-body text-[10px] uppercase tracking-[0.2em] text-charcoal/40",
            children: [f.dateDisplay, "  ·  ", f.madeWithLove, " ", Z.jsx("span", {
                "code-path": "src/sections/FooterSection.tsx:15:61",
                className: "text-gold",
                children: "♥"
            }), " ", f.forOurSpecialDay]
        }), Z.jsx("p", {
            "code-path": "src/sections/FooterSection.tsx:17:7",
            className: "font-body text-[9px] tracking-[0.15em] text-charcoal/25 mt-2",
            children: ""
        })]
    })
}
const Z2 = {
    en: { 
        timeDisplayEN: "  Starting from 2:00 PM",
        venue: "Salle des fêtes Maachi",
        nameFont: "font-script",
        dateDisplay:"18 August 2026",
        brideFull: "Nadine",
        groomFull: "Abdulrahman",
        bride: "Nadine",
        groom: "Abdulrahman",
        youAreInvited: "You are invited",
        gettingMarried: "wedding ceremony",
        confirmAttendance: "CONFIRM ATTENDANCE",
        ourJourney: "Wedding Invitation",
        ourLoveStory: "Wedding Invitation",
        fairepartIntroPre: "With great joy and gratitude to Allah, the",
        fairepartIntroPostDaughter: " family Benali is delighted to announce the marriage of their daughter",
        fairepartIntroPostSon: "family is delighted to announce the marriage of their son",
        fairepartBride: "Ines Megharbi",
        fairepartConnector: "to",
        fairepartGroom: "Karim Babouri",
        fairepartPara2: "and would be truly honored by your presence as they celebrate this special occasion, a beautiful symbol of love, commitment, and blessings.",
        fairepartPara3: "We would be delighted to share this precious and memorable day with you, and your presence will make this celebration all the more meaningful and cherished forever.",
        fairepartPara1: "",
        fairepartPara4: "",
        timeline2020: "",
        timeline2020Desc: "",
        timeline2021: "",
        timeline2021Desc: "",
        timeline2023: "",
        timeline2023Desc: "",
        timeline2025: "",
        timeline2025Desc: "",
        countdownTitle: "Countdown",
        countdownUntil: "Until",
        countdownMonth: "June",
        countdownDays: "Days",
        countdownHours: "Hours",
        countdownMinutes: "Minutes",
        countdownSeconds: "Seconds",
        dayProgram: "Day Program",
        dayProgramSubtitle: "What we have prepared for you",
        guestArrival: "Guest Arrival",
        guestArrivalDesc: "Welcome and reception",
        ceremony: "Ceremony",
        ceremonyShortDesc: "Civil wedding",
        cocktail: "Cocktail",
        cocktailDesc: "Aperitifs and drinks",
        dinner: "Dinner",
        dinnerDesc: "Wedding banquet",
        firstDance: "First Dance",
        firstDanceDesc: "The newlyweds' dance",
        party: "Party",
        partyDesc: "Let's dance!",
        end: "End",
        endDesc: "Goodbye",
        giftsTitle: "Gifts",
        giftsDesc: "Your presence is what matters most to us. If you wish to give us a gift, you can do so in the way that suits you best.",
        contribution: "Contribution",
        joinUs: "",
        eventDetails: "Venue & Reception Time",
        eventDetailsDesc: "",
        conditionsTitle: "قال تعالى ",
        weddingCeremony: "Celebration Venue",
        venueAddress: "La Salle Stand'all — Bordj El Kiffan, Alger",
        ceremonyDesc: "Join us as we celebrate this beautiful union surrounded by the people we love most.",
        openInMaps: "Open in Maps",
        addToCalendar: "Add to Calendar",
        dressCode: "Dress Code",
        dressCodeType: "Formal / Black Tie Optional",
        dressCodeDesc: "We kindly ask guests to dress elegantly for our celebration.",
        beOurGuest: "BE OUR GUEST",
        rsvpTitle: "RSVP",
        rsvpDesc: "Please let us know if you'll be joining us by October 22, 2026",
        fullName: "Full Name",
        emailAddress: "Email Address",
        willYouAttend: "Will you be attending?",
        joyfullyAccept: "Joyfully Accept",
        regretfullyDecline: "Regretfully Decline",
        messageForCouple: "Message for the Couple",
        messagePlaceholder: "Share your well wishes...",
        sendRSVP: "Send RSVP",
        thankYou: "Thank you! We can't wait to celebrate with you.",
        planYourVisit: "PLAN YOUR VISIT",
        travelAccommodation: "Travel & Accommodation",
        travelDesc: "We want to make your visit as comfortable as possible. Here are some recommendations.",
        whereToStay: "Where to Stay",
        grandHotel: "Grand Hotel",
        fiveStar: "5 Star",
        grandHotelDesc: "Special rate for wedding guests",
        boutiqueInn: "Boutique Inn",
        fourStar: "4 Star",
        boutiqueInnDesc: "Charming and intimate",
        cityCenterHotel: "City Center Hotel",
        cityCenterDesc: "Great for exploring the city",
        minFromVenue: "min from venue",
        thingsToDo: "Things to Do",
        thingsToDoDesc: "If you're extending your stay, here are some local attractions we love:",
        historicOldTown: "Historic Old Town",
        beautifulBeaches: "Beautiful Beaches",
        localMarkets: "Local Markets",
        fineDining: "Fine Dining Restaurants",
        questions: "Questions?",
        questionsDesc: "Don't hesitate to reach out if you need any help planning your trip.",
        madeWithLove: "Made with",
        forOurSpecialDay: "for our special day",
        hashtag: "#InesAndKarim2026"
    },
    
    ar: { 
     timeDisplayEN: "ابتداءً من الساعة 2:00 زوالًا",
    venue: "قاعة الحفلات معاشي",
     nameFont: "font-arabic",
    dateDisplay:"18 أوت 2026",
    brideFull: "ندين",
    groomFull: "عبد الرحمن",
    bride: "ندين",
    groom: "عبد الرحمن",   
    youAreInvited: "أنتم مدعوون",
    gettingMarried: "دعوة زفاف",
    confirmAttendance: "تأكيد الحضور",
    ourJourney: "دعوة زفاف",
    ourLoveStory: "دعوة زفاف",
    fairepartIntroPre: "بكل فرح وامتنان لله، تتشرف عائلة  بن علي ",
    fairepartIntroPostDaughter: "بدعوتكم لمشاركة فرحتها بزفاف ابنتها ",
    fairepartIntroPostSon: "بدعوتكم لمشاركة فرحتها بزفاف ابنها",
    fairepartBride: "إيناس مغربي",
    fairepartConnector: "و",
    fairepartGroom: "كريم بابوري",
    fairepartPara2: "ويسعدها ويشرفها حضوركم لمشاركتها هذه المناسبة المباركة التي تجمع بينهما في المحبة والمودة والبركة.",
    fairepartPara3: "إن حضوركم سيزيد فرحتنا بهجة، وسيجعل هذا اليوم ذكرى خالدة نعتز بها دائمًا.",
    fairepartPara1: "",
    fairepartPara4: "",

    timeline2020: "",
    timeline2020Desc: "",
    timeline2021: "",
    timeline2021Desc: "",
    timeline2023: "",
    timeline2023Desc: "",
    timeline2025: "",
    timeline2025Desc: "",

    countdownTitle: "العد التنازلي",
    countdownUntil: "حتى",
    countdownMonth: "يونيو",
    countdownDays: "الأيام",
    countdownHours: "الساعات",
    countdownMinutes: "الدقائق",
    countdownSeconds: "الثواني",

    dayProgram: "برنامج الحفل",
    dayProgramSubtitle: "ما أعددناه لكم",

    guestArrival: "استقبال الضيوف",
    guestArrivalDesc: "الترحيب والاستقبال",

    ceremony: "المراسم",
    ceremonyShortDesc: "عقد القران",

    cocktail: "الضيافة",
    cocktailDesc: "المقبلات والمشروبات",

    dinner: "حفل العشاء",
    dinnerDesc: "مأدبة الزفاف",

    firstDance: "الرقصة الأولى",
    firstDanceDesc: "رقصة العروسين",

    party: "الاحتفال",
    partyDesc: "هيا نحتفل!",

    end: "الختام",
    endDesc: "شكرًا لحضوركم",

    giftsTitle: "الهدايا",
    giftsDesc: "وجودكم معنا هو أعظم هدية بالنسبة لنا، وإن رغبتم في تقديم هدية فذلك يعود لاختياركم الكريم.",
    contribution: "مساهمة",

    joinUs: "",

    eventDetails: "مكان الحفل وموعد الاستقبال",
    eventDetailsDesc: "",

    conditionsTitle: "قال تعالى",

    weddingCeremony: "مكان الاحتفال",
    venueAddress: "قاعة Stand'all — برج الكيفان، الجزائر",

    ceremonyDesc: "انضموا إلينا للاحتفال بهذه المناسبة السعيدة وسط أحبائنا.",

    openInMaps: "فتح في الخرائط",
    addToCalendar: "إضافة إلى التقويم",

    dressCode: "الزي الرسمي",
    dressCodeType: "رسمي",
    dressCodeDesc: "يرجى من ضيوفنا الكرام ارتداء لباس أنيق يليق بهذه المناسبة.",

    beOurGuest: "يشرفنا حضوركم",

    rsvpTitle: "تأكيد الحضور",
    rsvpDesc: "يرجى إعلامنا بحضوركم قبل 22 أكتوبر 2026.",

    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",

    willYouAttend: "هل ستحضر؟",
    joyfullyAccept: "بكل سرور",
    regretfullyDecline: "مع الاعتذار",

    messageForCouple: "رسالة للعروسين",
    messagePlaceholder: "اكتب أجمل أمنياتك...",

    sendRSVP: "إرسال",

    thankYou: "شكرًا لكم، نتطلع للاحتفال معكم.",

    planYourVisit: "خطط لزيارتك",

    travelAccommodation: "السفر والإقامة",
    travelDesc: "نسعى لجعل زيارتكم مريحة قدر الإمكان، وإليكم بعض التوصيات.",

    whereToStay: "أماكن الإقامة",

    grandHotel: "الفندق الكبير",
    fiveStar: "5 نجوم",
    grandHotelDesc: "أسعار خاصة لضيوف الزفاف",

    boutiqueInn: "فندق بوتيك",
    fourStar: "4 نجوم",
    boutiqueInnDesc: "إقامة مميزة وهادئة",

    cityCenterHotel: "فندق وسط المدينة",
    cityCenterDesc: "مثالي لاستكشاف المدينة",

    minFromVenue: "دقيقة من مكان الحفل",

    thingsToDo: "أماكن يمكن زيارتها",
    thingsToDoDesc: "إذا كنتم ستطيلون مدة إقامتكم، فإليكم بعض الأماكن التي ننصح بها:",

    historicOldTown: "المدينة القديمة",
    beautifulBeaches: "الشواطئ الجميلة",
    localMarkets: "الأسواق المحلية",
    fineDining: "مطاعم راقية",

    questions: "هل لديكم استفسار؟",
    questionsDesc: "لا تترددوا في التواصل معنا إذا احتجتم أي مساعدة.",

    madeWithLove: "صُنع بكل حب",
    forOurSpecialDay: "ليومنا المميز",

    hashtag: "#إيناس_وكريم_2026"
 },
    
    
    
    
    
    fr: { 
         timeDisplayEN: "  À partir de 2:00 PM",
        venue: "Salle des fêtes Maachi",
        nameFont: "font-script",
        dateDisplay:"18 août 2026",
        brideFull: "Nadine",
        groomFull: "Abdulrahman",
        bride: "Nadine",
        groom: "Abdulrahman",
        youAreInvited: "Vous êtes invités",
        gettingMarried: "Cérémonie de Marriage",
        confirmAttendance: "CONFIRMER LA PRÉSENCE",
        ourJourney: "Faire-part de Mariage",
        ourLoveStory: "Faire-part de Mariage",
        fairepartIntroPre: "Dans la joie et la gratitude envers Allah, la famille Benali ",
        fairepartIntroPostDaughter: "a l'immense honneur de vous annoncer l'union de leur fille",
        fairepartIntroPostSon: "a l'immense bonheur de vous annoncer l'union de leur fils",
        fairepartBride: "Inès Megharbi",
        fairepartConnector: "avec",
        fairepartGroom: "Karim Babouri",
        fairepartPara2: "et serait profondément honorée de votre présence pour célébrer avec eux cette journée d'exception, symbole d'amour, d'engagement et de bénédictions.",
        fairepartPara3: "Nous serions heureux de partager avec vous ce moment unique et précieux, et votre présence à nos côtés fera de cette célébration un souvenir inoubliable que nous chérirons pour toujours.",
        fairepartPara1: "",
        fairepartPara4: "",
        timeline2020: "",
        timeline2020Desc: "",
        timeline2021: "",
        timeline2021Desc: "",
        timeline2023: "",
        timeline2023Desc: "",
        timeline2025: "",
        timeline2025Desc: "",
        countdownTitle: "Compte à Rebours",
        countdownUntil: "Jusqu'au",
        countdownMonth: "Juin",
        countdownDays: "Jours",
        countdownHours: "Heures",
        countdownMinutes: "Minutes",
        countdownSeconds: "Secondes",
        dayProgram: "Déroulement de la Journée",
        dayProgramSubtitle: "Ce que nous avons préparé pour vous",
        guestArrival: "Arrivée des Invités",
        guestArrivalDesc: "Accueil et réception",
        ceremony: "Cérémonie",
        ceremonyShortDesc: "Mariage civil",
        cocktail: "Cocktail",
        cocktailDesc: "Apéritifs et boissons",
        dinner: "Dîner",
        dinnerDesc: "Banquet de mariage",
        firstDance: "Premiere Danse",
        firstDanceDesc: "La danse des mariés",
        party: "Soirée",
        partyDesc: "Dansons!",
        end: "Fin",
        endDesc: "Au revoir",
        giftsTitle: "Cadeaux",
        giftsDesc: "Votre présence est ce qui compte le plus pour nous. Si vous souhaitez nous offrir un cadeau, vous pouvez le faire de la manière qui vous convient le mieux.",
        contribution: "Contribution",
        joinUs: "",
        eventDetails: "Lieu de Célébration & Heure de Réception",
        eventDetailsDesc: "",
        conditionsTitle: "قال تعالى",
        weddingCeremony: "Lieu de Célébration",
        venueAddress: "La Salle Stand'all — Bordj El Kiffan, Alger",
        ceremonyDesc: "Rejoignez-nous pour célébrer cette belle union entourés des personnes qui nous sont chères.",
        openInMaps: "Ouvrir dans Maps",
        addToCalendar: "Ajouter au Calendrier",
        dressCode: "Code Vestimentaire",
        dressCodeType: "Formel / smoking optionnel",
        dressCodeDesc: "Nous vous prions de vous habiller élégamment pour notre célébration.",
        beOurGuest: "SOYEZ NOS INVITÉS",
        rsvpTitle: "RSVP",
        rsvpDesc: "Merci de nous faire savoir si vous serez des nôtres d'ici le 22 octobre 2026",
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        willYouAttend: "Serez-vous présent?",
        joyfullyAccept: "Avec Plaisir",
        regretfullyDecline: "Avec Regret",
        messageForCouple: "Message pour les Mariés",
        messagePlaceholder: "Partagez vos vœux...",
        sendRSVP: "Envoyer RSVP",
        thankYou: "Merci! Nous avons hâte de célébrer avec vous.",
        planYourVisit: "PLANIFIEZ VOTRE VISITE",
        travelAccommodation: "Voyage & Hébergement",
        travelDesc: "Nous voulons rendre votre visite aussi confortable que possible. Voici quelques recommandations.",
        whereToStay: "Où Séjourner",
        grandHotel: "Grand Hôtel",
        fiveStar: "5 Étoiles",
        grandHotelDesc: "Tarif spécial pour les invités du mariage",
        boutiqueInn: "Auberge Boutique",
        fourStar: "4 Étoiles",
        boutiqueInnDesc: "Charmant et intime",
        cityCenterHotel: "Hôtel Centre-Ville",
        cityCenterDesc: "Idéal pour explorer la ville",
        minFromVenue: "min du lieu",
        thingsToDo: "Choses à Faire",
        thingsToDoDesc: "Si vous prolongez votre séjour, voici quelques attractions locales que nous aimons:",
        historicOldTown: "Vieille Ville Historique",
        beautifulBeaches: "Belles Plages",
        localMarkets: "Marchés Locaux",
        fineDining: "Restaurants Gastronomiques",
        questions: "Des Questions?",
        questionsDesc: "N'hésitez pas à nous contacter si vous avez besoin d'aide pour planifier votre voyage.",
        madeWithLove: "Fait avec",
        forOurSpecialDay: "pour notre jour spécial",
        hashtag: "#InesEtKarim2026"
    }
};
function k2() {
    m2();
    const [f,i] = Mt.useState(!1)
      , [u,a] = Mt.useState("ar")
      , [r,o] = Mt.useState(!1)
      , h = Mt.useRef(null)
      , d = Mt.useRef(null);


      Mt.useEffect(() => {
    document.documentElement.lang = u;
    document.documentElement.dir = u === "ar" ? "rtl" : "ltr";
}, [u]);



    Mt.useEffect( () => {
        try {
            const y = new Audio(Se.music);
            return y.loop = !0,
            y.volume = .6,
            h.current = y,
            () => {
                try {
                    y.pause()
                } catch {}
            }
        } catch {}
    }
    , []),
    Mt.useEffect( () => {
        h.current && (r ? h.current.play().catch( () => {}
        ) : h.current.pause())
    }
    , [r]);
    const m = Mt.useCallback( () => {
        i(!0)
    }
    , [])
      , g = Mt.useCallback( () => {
        o(!0)
    }
    , [])
      , _ = Mt.useCallback( () => {
        a(y => y === "en" ? "fr" : y === "fr" ? "ar" : "en");
    }
    , [])
      , S = Mt.useCallback( () => {
        o(y => !y)
    }
    , [])
      , b = Z2[u];
    return Z.jsxs("div", {
        "code-path": "src/App.tsx:60:5",
        className: "relative w-full overflow-x-hidden",
        children: [Z.jsx(H2, {
            "code-path": "src/App.tsx:61:7",
            lang: u,
            onLangChange: _,
            musicOn: r,
            onMusicToggle: S
        }), !f && Z.jsx(B2, {
            "code-path": "src/App.tsx:69:9",
            onOpenComplete: m,
            onStartMusic: g,
            onPlayBgVideo: () => {
                try {
                    d.current?.()
                } catch {}
            }
        }), Z.jsxs("main", {
            "code-path": "src/App.tsx:76:7",
            className: "relative",
            children: [Z.jsx(L2, {
                "code-path": "src/App.tsx:77:9",
                envelopeOpened: f,
                t: b,
                onRegisterBgPlay: y => {
                    d.current = y
                }
            }),Z.jsx(V2, {
                "code-path": "src/App.tsx:85:9",
                t: b
            }), 
            
            
            
               Z.jsx(j2, {
                "code-path": "src/App.tsx:82:9",
                t: b
            }), Z.jsx(X2, {
                "code-path": "src/App.tsx:83:9",
                t: b
            }), Z.jsx(G2, {
                "code-path": "src/App.tsx:84:9",
                t: b,
                lang: u
            }), Z.jsx("img", {
                "code-path": "src/App.tsx:86:9",
                src: "pearl-garland.png",
                alt: "",
                className: "w-full block"
            }), Z.jsx("img", {
                "code-path": "src/App.tsx:87:9",
                src: "dentelle2.svg",
                alt: "",
                className: "w-full block",
                style: {
                    filter: "sepia(0.4) saturate(1.5) brightness(0.95)"
                }
            }), Z.jsx(Q2, {
                "code-path": "src/App.tsx:89:9",
                t: b
            })]
        })]
    })
}
bS.createRoot(document.getElementById("root")).render(Z.jsx(k2, {
    "code-path": "src/main.tsx:13:53"
}));
