(this.webpackJsonpwholesalecart = this.webpackJsonpwholesalecart || []).push([
    [31], {
        222: function(e, r, t) {
            "use strict";
            t.d(r, "a", (function() {
                return o
            }));
            var n = t(31);

            function o(e, r) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = Object(n.a)(e)) || r && e && "number" === typeof e.length) {
                        t && (e = t);
                        var o = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    c = !1;
                return {
                    s: function() {
                        t = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        c = !0, i = e
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }
        },
        535: function(__webpack_module__, __webpack_exports__, __webpack_require__) {
            "use strict";

            function ownKeys$1(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function _objectSpread2(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? ownKeys$1(Object(t), !0).forEach((function(r) {
                        _defineProperty(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function _defineProperty(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function _slicedToArray(e, r) {
                return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _unsupportedIterableToArray(e, r) || _nonIterableRest()
            }

            function _arrayWithHoles(e) {
                if (Array.isArray(e)) return e
            }

            function _iterableToArrayLimit(e, r) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var n, o, a = [],
                        i = !0,
                        s = !1;
                    try {
                        for (t = t.call(e); !(i = (n = t.next()).done) && (a.push(n.value), !r || a.length !== r); i = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }
            }

            function _unsupportedIterableToArray(e, r) {
                if (e) {
                    if ("string" == typeof e) return _arrayLikeToArray(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0
                }
            }

            function _arrayLikeToArray(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            __webpack_require__.d(__webpack_exports__, "a", (function() {
                return imageCompression
            }));
            var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

            function createCommonjsModule(e) {
                var r = {
                    exports: {}
                };
                return e(r, r.exports), r.exports
            }
            var check = function(e) {
                    return e && e.Math == Math && e
                },
                global$1 = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || function() {
                    return this
                }() || Function("return this")(),
                isPure = !1,
                setGlobal = function(e, r) {
                    try {
                        Object.defineProperty(global$1, e, {
                            value: r,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (t) {
                        global$1[e] = r
                    }
                    return r
                },
                SHARED = "__core-js_shared__",
                store$1 = global$1[SHARED] || setGlobal(SHARED, {}),
                sharedStore = store$1,
                shared = createCommonjsModule((function(e) {
                    (e.exports = function(e, r) {
                        return sharedStore[e] || (sharedStore[e] = void 0 !== r ? r : {})
                    })("versions", []).push({
                        version: "3.16.1",
                        mode: "global",
                        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
                    })
                })),
                requireObjectCoercible = function(e) {
                    if (null == e) throw TypeError("Can't call method on " + e);
                    return e
                },
                toObject = function(e) {
                    return Object(requireObjectCoercible(e))
                },
                hasOwnProperty = {}.hasOwnProperty,
                has$1 = Object.hasOwn || function(e, r) {
                    return hasOwnProperty.call(toObject(e), r)
                },
                id = 0,
                postfix = Math.random(),
                uid = function(e) {
                    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++id + postfix).toString(36)
                },
                aFunction$1 = function(e) {
                    return "function" == typeof e ? e : void 0
                },
                getBuiltIn = function(e, r) {
                    return arguments.length < 2 ? aFunction$1(global$1[e]) : global$1[e] && global$1[e][r]
                },
                engineUserAgent = getBuiltIn("navigator", "userAgent") || "",
                process$3 = global$1.process,
                Deno = global$1.Deno,
                versions = process$3 && process$3.versions || Deno && Deno.version,
                v8 = versions && versions.v8,
                match, version;
            v8 ? (match = v8.split("."), version = match[0] < 4 ? 1 : match[0] + match[1]) : engineUserAgent && (match = engineUserAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = engineUserAgent.match(/Chrome\/(\d+)/), match && (version = match[1])));
            var engineV8Version = version && +version,
                fails = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                },
                nativeSymbol = !!Object.getOwnPropertySymbols && !fails((function() {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && engineV8Version && engineV8Version < 41
                })),
                useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                WellKnownSymbolsStore = shared("wks"),
                Symbol$1 = global$1.Symbol,
                createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid,
                wellKnownSymbol = function(e) {
                    return has$1(WellKnownSymbolsStore, e) && (nativeSymbol || "string" == typeof WellKnownSymbolsStore[e]) || (nativeSymbol && has$1(Symbol$1, e) ? WellKnownSymbolsStore[e] = Symbol$1[e] : WellKnownSymbolsStore[e] = createWellKnownSymbol("Symbol." + e)), WellKnownSymbolsStore[e]
                },
                TO_STRING_TAG$4 = wellKnownSymbol("toStringTag"),
                test$1 = {};
            test$1[TO_STRING_TAG$4] = "z";
            var toStringTagSupport = "[object z]" === String(test$1),
                descriptors = !fails((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })),
                isObject = function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                },
                document$3 = global$1.document,
                EXISTS = isObject(document$3) && isObject(document$3.createElement),
                documentCreateElement = function(e) {
                    return EXISTS ? document$3.createElement(e) : {}
                },
                ie8DomDefine = !descriptors && !fails((function() {
                    return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })),
                anObject = function(e) {
                    if (!isObject(e)) throw TypeError(String(e) + " is not an object");
                    return e
                },
                isSymbol = useSymbolAsUid ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var r = getBuiltIn("Symbol");
                    return "function" == typeof r && Object(e) instanceof r
                },
                ordinaryToPrimitive = function(e, r) {
                    var t, n;
                    if ("string" === r && "function" == typeof(t = e.toString) && !isObject(n = t.call(e))) return n;
                    if ("function" == typeof(t = e.valueOf) && !isObject(n = t.call(e))) return n;
                    if ("string" !== r && "function" == typeof(t = e.toString) && !isObject(n = t.call(e))) return n;
                    throw TypeError("Can't convert object to primitive value")
                },
                TO_PRIMITIVE = wellKnownSymbol("toPrimitive"),
                toPrimitive = function(e, r) {
                    if (!isObject(e) || isSymbol(e)) return e;
                    var t, n = e[TO_PRIMITIVE];
                    if (void 0 !== n) {
                        if (void 0 === r && (r = "default"), t = n.call(e, r), !isObject(t) || isSymbol(t)) return t;
                        throw TypeError("Can't convert object to primitive value")
                    }
                    return void 0 === r && (r = "number"), ordinaryToPrimitive(e, r)
                },
                toPropertyKey = function(e) {
                    var r = toPrimitive(e, "string");
                    return isSymbol(r) ? r : String(r)
                },
                $defineProperty = Object.defineProperty,
                f$5 = descriptors ? $defineProperty : function(e, r, t) {
                    if (anObject(e), r = toPropertyKey(r), anObject(t), ie8DomDefine) try {
                        return $defineProperty(e, r, t)
                    } catch (e) {}
                    if ("get" in t || "set" in t) throw TypeError("Accessors not supported");
                    return "value" in t && (e[r] = t.value), e
                },
                objectDefineProperty = {
                    f: f$5
                },
                createPropertyDescriptor = function(e, r) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: r
                    }
                },
                createNonEnumerableProperty = descriptors ? function(e, r, t) {
                    return objectDefineProperty.f(e, r, createPropertyDescriptor(1, t))
                } : function(e, r, t) {
                    return e[r] = t, e
                },
                functionToString = Function.toString;
            "function" != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(e) {
                return functionToString.call(e)
            });
            var inspectSource = sharedStore.inspectSource,
                WeakMap$1 = global$1.WeakMap,
                nativeWeakMap = "function" == typeof WeakMap$1 && /native code/.test(inspectSource(WeakMap$1)),
                keys$2 = shared("keys"),
                sharedKey = function(e) {
                    return keys$2[e] || (keys$2[e] = uid(e))
                },
                hiddenKeys$1 = {},
                OBJECT_ALREADY_INITIALIZED = "Object already initialized",
                WeakMap = global$1.WeakMap,
                set$2, get$1, has, enforce = function(e) {
                    return has(e) ? get$1(e) : set$2(e, {})
                },
                getterFor = function(e) {
                    return function(r) {
                        var t;
                        if (!isObject(r) || (t = get$1(r)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return t
                    }
                };
            if (nativeWeakMap || sharedStore.state) {
                var store = sharedStore.state || (sharedStore.state = new WeakMap),
                    wmget = store.get,
                    wmhas = store.has,
                    wmset = store.set;
                set$2 = function(e, r) {
                    if (wmhas.call(store, e)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                    return r.facade = e, wmset.call(store, e, r), r
                }, get$1 = function(e) {
                    return wmget.call(store, e) || {}
                }, has = function(e) {
                    return wmhas.call(store, e)
                }
            } else {
                var STATE = sharedKey("state");
                hiddenKeys$1[STATE] = !0, set$2 = function(e, r) {
                    if (has$1(e, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                    return r.facade = e, createNonEnumerableProperty(e, STATE, r), r
                }, get$1 = function(e) {
                    return has$1(e, STATE) ? e[STATE] : {}
                }, has = function(e) {
                    return has$1(e, STATE)
                }
            }
            var internalState = {
                    set: set$2,
                    get: get$1,
                    has: has,
                    enforce: enforce,
                    getterFor: getterFor
                },
                redefine = createCommonjsModule((function(e) {
                    var r = internalState.get,
                        t = internalState.enforce,
                        n = String(String).split("String");
                    (e.exports = function(e, r, o, a) {
                        var i, s = !!a && !!a.unsafe,
                            c = !!a && !!a.enumerable,
                            l = !!a && !!a.noTargetGet;
                        "function" == typeof o && ("string" != typeof r || has$1(o, "name") || createNonEnumerableProperty(o, "name", r), (i = t(o)).source || (i.source = n.join("string" == typeof r ? r : ""))), e !== global$1 ? (s ? !l && e[r] && (c = !0) : delete e[r], c ? e[r] = o : createNonEnumerableProperty(e, r, o)) : c ? e[r] = o : setGlobal(r, o)
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && r(this).source || inspectSource(this)
                    }))
                })),
                toString$1 = {}.toString,
                classofRaw = function(e) {
                    return toString$1.call(e).slice(8, -1)
                },
                TO_STRING_TAG$3 = wellKnownSymbol("toStringTag"),
                CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
                    return arguments
                }()),
                tryGet = function(e, r) {
                    try {
                        return e[r]
                    } catch (e) {}
                },
                classof = toStringTagSupport ? classofRaw : function(e) {
                    var r, t, n;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(t = tryGet(r = Object(e), TO_STRING_TAG$3)) ? t : CORRECT_ARGUMENTS ? classofRaw(r) : "Object" == (n = classofRaw(r)) && "function" == typeof r.callee ? "Arguments" : n
                },
                objectToString = toStringTagSupport ? {}.toString : function() {
                    return "[object " + classof(this) + "]"
                };
            toStringTagSupport || redefine(Object.prototype, "toString", objectToString, {
                unsafe: !0
            });
            var $propertyIsEnumerable = {}.propertyIsEnumerable,
                getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor,
                NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({
                    1: 2
                }, 1),
                f$4 = NASHORN_BUG ? function(e) {
                    var r = getOwnPropertyDescriptor$4(this, e);
                    return !!r && r.enumerable
                } : $propertyIsEnumerable,
                objectPropertyIsEnumerable = {
                    f: f$4
                },
                split = "".split,
                indexedObject = fails((function() {
                    return !Object("z").propertyIsEnumerable(0)
                })) ? function(e) {
                    return "String" == classofRaw(e) ? split.call(e, "") : Object(e)
                } : Object,
                toIndexedObject = function(e) {
                    return indexedObject(requireObjectCoercible(e))
                },
                $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
                f$3 = descriptors ? $getOwnPropertyDescriptor : function(e, r) {
                    if (e = toIndexedObject(e), r = toPropertyKey(r), ie8DomDefine) try {
                        return $getOwnPropertyDescriptor(e, r)
                    } catch (e) {}
                    if (has$1(e, r)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e, r), e[r])
                },
                objectGetOwnPropertyDescriptor = {
                    f: f$3
                },
                ceil = Math.ceil,
                floor$7 = Math.floor,
                toInteger = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? floor$7 : ceil)(e)
                },
                min$6 = Math.min,
                toLength = function(e) {
                    return e > 0 ? min$6(toInteger(e), 9007199254740991) : 0
                },
                max$2 = Math.max,
                min$5 = Math.min,
                toAbsoluteIndex = function(e, r) {
                    var t = toInteger(e);
                    return t < 0 ? max$2(t + r, 0) : min$5(t, r)
                },
                createMethod$5 = function(e) {
                    return function(r, t, n) {
                        var o, a = toIndexedObject(r),
                            i = toLength(a.length),
                            s = toAbsoluteIndex(n, i);
                        if (e && t != t) {
                            for (; i > s;)
                                if ((o = a[s++]) != o) return !0
                        } else
                            for (; i > s; s++)
                                if ((e || s in a) && a[s] === t) return e || s || 0;
                        return !e && -1
                    }
                },
                arrayIncludes = {
                    includes: createMethod$5(!0),
                    indexOf: createMethod$5(!1)
                },
                indexOf = arrayIncludes.indexOf,
                objectKeysInternal = function(e, r) {
                    var t, n = toIndexedObject(e),
                        o = 0,
                        a = [];
                    for (t in n) !has$1(hiddenKeys$1, t) && has$1(n, t) && a.push(t);
                    for (; r.length > o;) has$1(n, t = r[o++]) && (~indexOf(a, t) || a.push(t));
                    return a
                },
                enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                hiddenKeys = enumBugKeys.concat("length", "prototype"),
                f$2 = Object.getOwnPropertyNames || function(e) {
                    return objectKeysInternal(e, hiddenKeys)
                },
                objectGetOwnPropertyNames = {
                    f: f$2
                },
                f$1 = Object.getOwnPropertySymbols,
                objectGetOwnPropertySymbols = {
                    f: f$1
                },
                ownKeys = getBuiltIn("Reflect", "ownKeys") || function(e) {
                    var r = objectGetOwnPropertyNames.f(anObject(e)),
                        t = objectGetOwnPropertySymbols.f;
                    return t ? r.concat(t(e)) : r
                },
                copyConstructorProperties = function(e, r) {
                    for (var t = ownKeys(r), n = objectDefineProperty.f, o = objectGetOwnPropertyDescriptor.f, a = 0; a < t.length; a++) {
                        var i = t[a];
                        has$1(e, i) || n(e, i, o(r, i))
                    }
                },
                replacement = /#|\.prototype\./,
                isForced = function(e, r) {
                    var t = data[normalize(e)];
                    return t == POLYFILL || t != NATIVE && ("function" == typeof r ? fails(r) : !!r)
                },
                normalize = isForced.normalize = function(e) {
                    return String(e).replace(replacement, ".").toLowerCase()
                },
                data = isForced.data = {},
                NATIVE = isForced.NATIVE = "N",
                POLYFILL = isForced.POLYFILL = "P",
                isForced_1 = isForced,
                getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f,
                _export = function(e, r) {
                    var t, n, o, a, i, s = e.target,
                        c = e.global,
                        l = e.stat;
                    if (t = c ? global$1 : l ? global$1[s] || setGlobal(s, {}) : (global$1[s] || {}).prototype)
                        for (n in r) {
                            if (a = r[n], o = e.noTargetGet ? (i = getOwnPropertyDescriptor$3(t, n)) && i.value : t[n], !isForced_1(c ? n : s + (l ? "." : "#") + n, e.forced) && void 0 !== o) {
                                if (typeof a == typeof o) continue;
                                copyConstructorProperties(a, o)
                            }(e.sham || o && o.sham) && createNonEnumerableProperty(a, "sham", !0), redefine(t, n, a, e)
                        }
                },
                nativePromiseConstructor = global$1.Promise,
                redefineAll = function(e, r, t) {
                    for (var n in r) redefine(e, n, r[n], t);
                    return e
                },
                aPossiblePrototype = function(e) {
                    if (!isObject(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
                    return e
                },
                objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, r = !1,
                        t = {};
                    try {
                        (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), r = t instanceof Array
                    } catch (e) {}
                    return function(t, n) {
                        return anObject(t), aPossiblePrototype(n), r ? e.call(t, n) : t.__proto__ = n, t
                    }
                }() : void 0),
                defineProperty$5 = objectDefineProperty.f,
                TO_STRING_TAG$2 = wellKnownSymbol("toStringTag"),
                setToStringTag = function(e, r, t) {
                    e && !has$1(e = t ? e : e.prototype, TO_STRING_TAG$2) && defineProperty$5(e, TO_STRING_TAG$2, {
                        configurable: !0,
                        value: r
                    })
                },
                SPECIES$6 = wellKnownSymbol("species"),
                setSpecies = function(e) {
                    var r = getBuiltIn(e),
                        t = objectDefineProperty.f;
                    descriptors && r && !r[SPECIES$6] && t(r, SPECIES$6, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                },
                aFunction = function(e) {
                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                    return e
                },
                anInstance = function(e, r, t) {
                    if (!(e instanceof r)) throw TypeError("Incorrect " + (t ? t + " " : "") + "invocation");
                    return e
                },
                iterators = {},
                ITERATOR$8 = wellKnownSymbol("iterator"),
                ArrayPrototype$1 = Array.prototype,
                isArrayIteratorMethod = function(e) {
                    return void 0 !== e && (iterators.Array === e || ArrayPrototype$1[ITERATOR$8] === e)
                },
                functionBindContext = function(e, r, t) {
                    if (aFunction(e), void 0 === r) return e;
                    switch (t) {
                        case 0:
                            return function() {
                                return e.call(r)
                            };
                        case 1:
                            return function(t) {
                                return e.call(r, t)
                            };
                        case 2:
                            return function(t, n) {
                                return e.call(r, t, n)
                            };
                        case 3:
                            return function(t, n, o) {
                                return e.call(r, t, n, o)
                            }
                    }
                    return function() {
                        return e.apply(r, arguments)
                    }
                },
                ITERATOR$7 = wellKnownSymbol("iterator"),
                getIteratorMethod = function(e) {
                    if (null != e) return e[ITERATOR$7] || e["@@iterator"] || iterators[classof(e)]
                },
                iteratorClose = function(e) {
                    var r = e.return;
                    if (void 0 !== r) return anObject(r.call(e)).value
                },
                Result = function(e, r) {
                    this.stopped = e, this.result = r
                },
                iterate = function(e, r, t) {
                    var n, o, a, i, s, c, l, u = t && t.that,
                        f = !(!t || !t.AS_ENTRIES),
                        p = !(!t || !t.IS_ITERATOR),
                        d = !(!t || !t.INTERRUPTED),
                        y = functionBindContext(r, u, 1 + f + d),
                        h = function(e) {
                            return n && iteratorClose(n), new Result(!0, e)
                        },
                        g = function(e) {
                            return f ? (anObject(e), d ? y(e[0], e[1], h) : y(e[0], e[1])) : d ? y(e, h) : y(e)
                        };
                    if (p) n = e;
                    else {
                        if ("function" != typeof(o = getIteratorMethod(e))) throw TypeError("Target is not iterable");
                        if (isArrayIteratorMethod(o)) {
                            for (a = 0, i = toLength(e.length); i > a; a++)
                                if ((s = g(e[a])) && s instanceof Result) return s;
                            return new Result(!1)
                        }
                        n = o.call(e)
                    }
                    for (c = n.next; !(l = c.call(n)).done;) {
                        try {
                            s = g(l.value)
                        } catch (e) {
                            throw iteratorClose(n), e
                        }
                        if ("object" == typeof s && s && s instanceof Result) return s
                    }
                    return new Result(!1)
                },
                ITERATOR$6 = wellKnownSymbol("iterator"),
                SAFE_CLOSING = !1;
            try {
                var called = 0,
                    iteratorWithReturn = {
                        next: function() {
                            return {
                                done: !!called++
                            }
                        },
                        return: function() {
                            SAFE_CLOSING = !0
                        }
                    };
                iteratorWithReturn[ITERATOR$6] = function() {
                    return this
                }, Array.from(iteratorWithReturn, (function() {
                    throw 2
                }))
            } catch (e) {}
            var checkCorrectnessOfIteration = function(e, r) {
                    if (!r && !SAFE_CLOSING) return !1;
                    var t = !1;
                    try {
                        var n = {};
                        n[ITERATOR$6] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: t = !0
                                    }
                                }
                            }
                        }, e(n)
                    } catch (e) {}
                    return t
                },
                SPECIES$5 = wellKnownSymbol("species"),
                speciesConstructor = function(e, r) {
                    var t, n = anObject(e).constructor;
                    return void 0 === n || null == (t = anObject(n)[SPECIES$5]) ? r : aFunction(t)
                },
                html = getBuiltIn("document", "documentElement"),
                engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent),
                engineIsNode = "process" == classofRaw(global$1.process),
                set$1 = global$1.setImmediate,
                clear = global$1.clearImmediate,
                process$2 = global$1.process,
                MessageChannel = global$1.MessageChannel,
                Dispatch = global$1.Dispatch,
                counter = 0,
                queue = {},
                ONREADYSTATECHANGE = "onreadystatechange",
                location, defer, channel, port;
            try {
                location = global$1.location
            } catch (e) {}
            var run = function(e) {
                    if (queue.hasOwnProperty(e)) {
                        var r = queue[e];
                        delete queue[e], r()
                    }
                },
                runner = function(e) {
                    return function() {
                        run(e)
                    }
                },
                listener = function(e) {
                    run(e.data)
                },
                post = function(e) {
                    global$1.postMessage(String(e), location.protocol + "//" + location.host)
                };
            set$1 && clear || (set$1 = function(e) {
                for (var r = [], t = arguments.length, n = 1; t > n;) r.push(arguments[n++]);
                return queue[++counter] = function() {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, r)
                }, defer(counter), counter
            }, clear = function(e) {
                delete queue[e]
            }, engineIsNode ? defer = function(e) {
                process$2.nextTick(runner(e))
            } : Dispatch && Dispatch.now ? defer = function(e) {
                Dispatch.now(runner(e))
            } : MessageChannel && !engineIsIos ? (channel = new MessageChannel, port = channel.port2, channel.port1.onmessage = listener, defer = functionBindContext(port.postMessage, port, 1)) : global$1.addEventListener && "function" == typeof postMessage && !global$1.importScripts && location && "file:" !== location.protocol && !fails(post) ? (defer = post, global$1.addEventListener("message", listener, !1)) : defer = ONREADYSTATECHANGE in documentCreateElement("script") ? function(e) {
                html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE] = function() {
                    html.removeChild(this), run(e)
                }
            } : function(e) {
                setTimeout(runner(e), 0)
            });
            var task$1 = {
                    set: set$1,
                    clear: clear
                },
                engineIsIosPebble = /iphone|ipod|ipad/i.test(engineUserAgent) && void 0 !== global$1.Pebble,
                engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent),
                getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f,
                macrotask = task$1.set,
                MutationObserver = global$1.MutationObserver || global$1.WebKitMutationObserver,
                document$2 = global$1.document,
                process$1 = global$1.process,
                Promise$1 = global$1.Promise,
                queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$1, "queueMicrotask"),
                queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value,
                flush, head, last, notify$1, toggle, node, promise, then;
            queueMicrotask || (flush = function() {
                var e, r;
                for (engineIsNode && (e = process$1.domain) && e.exit(); head;) {
                    r = head.fn, head = head.next;
                    try {
                        r()
                    } catch (e) {
                        throw head ? notify$1() : last = void 0, e
                    }
                }
                last = void 0, e && e.enter()
            }, engineIsIos || engineIsNode || engineIsWebosWebkit || !MutationObserver || !document$2 ? !engineIsIosPebble && Promise$1 && Promise$1.resolve ? (promise = Promise$1.resolve(void 0), promise.constructor = Promise$1, then = promise.then, notify$1 = function() {
                then.call(promise, flush)
            }) : notify$1 = engineIsNode ? function() {
                process$1.nextTick(flush)
            } : function() {
                macrotask.call(global$1, flush)
            } : (toggle = !0, node = document$2.createTextNode(""), new MutationObserver(flush).observe(node, {
                characterData: !0
            }), notify$1 = function() {
                node.data = toggle = !toggle
            }));
            var microtask = queueMicrotask || function(e) {
                    var r = {
                        fn: e,
                        next: void 0
                    };
                    last && (last.next = r), head || (head = r, notify$1()), last = r
                },
                PromiseCapability = function(e) {
                    var r, t;
                    this.promise = new e((function(e, n) {
                        if (void 0 !== r || void 0 !== t) throw TypeError("Bad Promise constructor");
                        r = e, t = n
                    })), this.resolve = aFunction(r), this.reject = aFunction(t)
                },
                f = function(e) {
                    return new PromiseCapability(e)
                },
                newPromiseCapability$1 = {
                    f: f
                },
                promiseResolve = function(e, r) {
                    if (anObject(e), isObject(r) && r.constructor === e) return r;
                    var t = newPromiseCapability$1.f(e);
                    return (0, t.resolve)(r), t.promise
                },
                hostReportErrors = function(e, r) {
                    var t = global$1.console;
                    t && t.error && (1 === arguments.length ? t.error(e) : t.error(e, r))
                },
                perform = function(e) {
                    try {
                        return {
                            error: !1,
                            value: e()
                        }
                    } catch (e) {
                        return {
                            error: !0,
                            value: e
                        }
                    }
                },
                engineIsBrowser = "object" == typeof window,
                task = task$1.set,
                SPECIES$4 = wellKnownSymbol("species"),
                PROMISE = "Promise",
                getInternalState$4 = internalState.get,
                setInternalState$5 = internalState.set,
                getInternalPromiseState = internalState.getterFor(PROMISE),
                NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype,
                PromiseConstructor = nativePromiseConstructor,
                PromiseConstructorPrototype = NativePromisePrototype,
                TypeError$1 = global$1.TypeError,
                document$1 = global$1.document,
                process = global$1.process,
                newPromiseCapability = newPromiseCapability$1.f,
                newGenericPromiseCapability = newPromiseCapability,
                DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent),
                NATIVE_REJECTION_EVENT = "function" == typeof PromiseRejectionEvent,
                UNHANDLED_REJECTION = "unhandledrejection",
                REJECTION_HANDLED = "rejectionhandled",
                PENDING = 0,
                FULFILLED = 1,
                REJECTED = 2,
                HANDLED = 1,
                UNHANDLED = 2,
                SUBCLASSING = !1,
                Internal, OwnPromiseCapability, PromiseWrapper, nativeThen, FORCED$6 = isForced_1(PROMISE, (function() {
                    var e = inspectSource(PromiseConstructor),
                        r = e !== String(PromiseConstructor);
                    if (!r && 66 === engineV8Version) return !0;
                    if (engineV8Version >= 51 && /native code/.test(e)) return !1;
                    var t = new PromiseConstructor((function(e) {
                            e(1)
                        })),
                        n = function(e) {
                            e((function() {}), (function() {}))
                        };
                    return (t.constructor = {})[SPECIES$4] = n, !(SUBCLASSING = t.then((function() {})) instanceof n) || !r && engineIsBrowser && !NATIVE_REJECTION_EVENT
                })),
                INCORRECT_ITERATION = FORCED$6 || !checkCorrectnessOfIteration((function(e) {
                    PromiseConstructor.all(e).catch((function() {}))
                })),
                isThenable = function(e) {
                    var r;
                    return !(!isObject(e) || "function" != typeof(r = e.then)) && r
                },
                notify = function(e, r) {
                    if (!e.notified) {
                        e.notified = !0;
                        var t = e.reactions;
                        microtask((function() {
                            for (var n = e.value, o = e.state == FULFILLED, a = 0; t.length > a;) {
                                var i, s, c, l = t[a++],
                                    u = o ? l.ok : l.fail,
                                    f = l.resolve,
                                    p = l.reject,
                                    d = l.domain;
                                try {
                                    u ? (o || (e.rejection === UNHANDLED && onHandleUnhandled(e), e.rejection = HANDLED), !0 === u ? i = n : (d && d.enter(), i = u(n), d && (d.exit(), c = !0)), i === l.promise ? p(TypeError$1("Promise-chain cycle")) : (s = isThenable(i)) ? s.call(i, f, p) : f(i)) : p(n)
                                } catch (e) {
                                    d && !c && d.exit(), p(e)
                                }
                            }
                            e.reactions = [], e.notified = !1, r && !e.rejection && onUnhandled(e)
                        }))
                    }
                },
                dispatchEvent = function(e, r, t) {
                    var n, o;
                    DISPATCH_EVENT ? ((n = document$1.createEvent("Event")).promise = r, n.reason = t, n.initEvent(e, !1, !0), global$1.dispatchEvent(n)) : n = {
                        promise: r,
                        reason: t
                    }, !NATIVE_REJECTION_EVENT && (o = global$1["on" + e]) ? o(n) : e === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", t)
                },
                onUnhandled = function(e) {
                    task.call(global$1, (function() {
                        var r, t = e.facade,
                            n = e.value;
                        if (isUnhandled(e) && (r = perform((function() {
                                engineIsNode ? process.emit("unhandledRejection", n, t) : dispatchEvent(UNHANDLED_REJECTION, t, n)
                            })), e.rejection = engineIsNode || isUnhandled(e) ? UNHANDLED : HANDLED, r.error)) throw r.value
                    }))
                },
                isUnhandled = function(e) {
                    return e.rejection !== HANDLED && !e.parent
                },
                onHandleUnhandled = function(e) {
                    task.call(global$1, (function() {
                        var r = e.facade;
                        engineIsNode ? process.emit("rejectionHandled", r) : dispatchEvent(REJECTION_HANDLED, r, e.value)
                    }))
                },
                bind = function(e, r, t) {
                    return function(n) {
                        e(r, n, t)
                    }
                },
                internalReject = function(e, r, t) {
                    e.done || (e.done = !0, t && (e = t), e.value = r, e.state = REJECTED, notify(e, !0))
                },
                internalResolve = function e(r, t, n) {
                    if (!r.done) {
                        r.done = !0, n && (r = n);
                        try {
                            if (r.facade === t) throw TypeError$1("Promise can't be resolved itself");
                            var o = isThenable(t);
                            o ? microtask((function() {
                                var n = {
                                    done: !1
                                };
                                try {
                                    o.call(t, bind(e, n, r), bind(internalReject, n, r))
                                } catch (t) {
                                    internalReject(n, t, r)
                                }
                            })) : (r.value = t, r.state = FULFILLED, notify(r, !1))
                        } catch (t) {
                            internalReject({
                                done: !1
                            }, t, r)
                        }
                    }
                };
            if (FORCED$6 && (PromiseConstructor = function(e) {
                    anInstance(this, PromiseConstructor, PROMISE), aFunction(e), Internal.call(this);
                    var r = getInternalState$4(this);
                    try {
                        e(bind(internalResolve, r), bind(internalReject, r))
                    } catch (e) {
                        internalReject(r, e)
                    }
                }, PromiseConstructorPrototype = PromiseConstructor.prototype, Internal = function(e) {
                    setInternalState$5(this, {
                        type: PROMISE,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: PENDING,
                        value: void 0
                    })
                }, Internal.prototype = redefineAll(PromiseConstructorPrototype, {
                    then: function(e, r) {
                        var t = getInternalPromiseState(this),
                            n = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
                        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof r && r, n.domain = engineIsNode ? process.domain : void 0, t.parent = !0, t.reactions.push(n), t.state != PENDING && notify(t, !1), n.promise
                    },
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }), OwnPromiseCapability = function() {
                    var e = new Internal,
                        r = getInternalState$4(e);
                    this.promise = e, this.resolve = bind(internalResolve, r), this.reject = bind(internalReject, r)
                }, newPromiseCapability$1.f = newPromiseCapability = function(e) {
                    return e === PromiseConstructor || e === PromiseWrapper ? new OwnPromiseCapability(e) : newGenericPromiseCapability(e)
                }, "function" == typeof nativePromiseConstructor && NativePromisePrototype !== Object.prototype)) {
                nativeThen = NativePromisePrototype.then, SUBCLASSING || (redefine(NativePromisePrototype, "then", (function(e, r) {
                    var t = this;
                    return new PromiseConstructor((function(e, r) {
                        nativeThen.call(t, e, r)
                    })).then(e, r)
                }), {
                    unsafe: !0
                }), redefine(NativePromisePrototype, "catch", PromiseConstructorPrototype.catch, {
                    unsafe: !0
                }));
                try {
                    delete NativePromisePrototype.constructor
                } catch (e) {}
                objectSetPrototypeOf && objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype)
            }
            _export({
                global: !0,
                wrap: !0,
                forced: FORCED$6
            }, {
                Promise: PromiseConstructor
            }), setToStringTag(PromiseConstructor, PROMISE, !1), setSpecies(PROMISE), PromiseWrapper = getBuiltIn(PROMISE), _export({
                target: PROMISE,
                stat: !0,
                forced: FORCED$6
            }, {
                reject: function(e) {
                    var r = newPromiseCapability(this);
                    return r.reject.call(void 0, e), r.promise
                }
            }), _export({
                target: PROMISE,
                stat: !0,
                forced: FORCED$6
            }, {
                resolve: function(e) {
                    return promiseResolve(this, e)
                }
            }), _export({
                target: PROMISE,
                stat: !0,
                forced: INCORRECT_ITERATION
            }, {
                all: function(e) {
                    var r = this,
                        t = newPromiseCapability(r),
                        n = t.resolve,
                        o = t.reject,
                        a = perform((function() {
                            var t = aFunction(r.resolve),
                                a = [],
                                i = 0,
                                s = 1;
                            iterate(e, (function(e) {
                                var c = i++,
                                    l = !1;
                                a.push(void 0), s++, t.call(r, e).then((function(e) {
                                    l || (l = !0, a[c] = e, --s || n(a))
                                }), o)
                            })), --s || n(a)
                        }));
                    return a.error && o(a.value), t.promise
                },
                race: function(e) {
                    var r = this,
                        t = newPromiseCapability(r),
                        n = t.reject,
                        o = perform((function() {
                            var o = aFunction(r.resolve);
                            iterate(e, (function(e) {
                                o.call(r, e).then(t.resolve, n)
                            }))
                        }));
                    return o.error && n(o.value), t.promise
                }
            });
            var inheritIfRequired = function(e, r, t) {
                    var n, o;
                    return objectSetPrototypeOf && "function" == typeof(n = r.constructor) && n !== t && isObject(o = n.prototype) && o !== t.prototype && objectSetPrototypeOf(e, o), e
                },
                objectKeys = Object.keys || function(e) {
                    return objectKeysInternal(e, enumBugKeys)
                },
                objectDefineProperties = descriptors ? Object.defineProperties : function(e, r) {
                    anObject(e);
                    for (var t, n = objectKeys(r), o = n.length, a = 0; o > a;) objectDefineProperty.f(e, t = n[a++], r[t]);
                    return e
                },
                GT = ">",
                LT = "<",
                PROTOTYPE$1 = "prototype",
                SCRIPT = "script",
                IE_PROTO$1 = sharedKey("IE_PROTO"),
                EmptyConstructor = function() {},
                scriptTag = function(e) {
                    return LT + SCRIPT + GT + e + LT + "/" + SCRIPT + GT
                },
                NullProtoObjectViaActiveX = function(e) {
                    e.write(scriptTag("")), e.close();
                    var r = e.parentWindow.Object;
                    return e = null, r
                },
                NullProtoObjectViaIFrame = function() {
                    var e, r = documentCreateElement("iframe"),
                        t = "java" + SCRIPT + ":";
                    if (r.style) return r.style.display = "none", html.appendChild(r), r.src = String(t), (e = r.contentWindow.document).open(), e.write(scriptTag("document.F=Object")), e.close(), e.F
                },
                activeXDocument, _NullProtoObject = function() {
                    try {
                        activeXDocument = new ActiveXObject("htmlfile")
                    } catch (e) {}
                    _NullProtoObject = document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() || NullProtoObjectViaActiveX(activeXDocument);
                    for (var e = enumBugKeys.length; e--;) delete _NullProtoObject[PROTOTYPE$1][enumBugKeys[e]];
                    return _NullProtoObject()
                };
            hiddenKeys$1[IE_PROTO$1] = !0;
            var objectCreate = Object.create || function(e, r) {
                    var t;
                    return null !== e ? (EmptyConstructor[PROTOTYPE$1] = anObject(e), t = new EmptyConstructor, EmptyConstructor[PROTOTYPE$1] = null, t[IE_PROTO$1] = e) : t = _NullProtoObject(), void 0 === r ? t : objectDefineProperties(t, r)
                },
                toString = function(e) {
                    if (isSymbol(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return String(e)
                },
                whitespaces = "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
                whitespace = "[" + whitespaces + "]",
                ltrim = RegExp("^" + whitespace + whitespace + "*"),
                rtrim = RegExp(whitespace + whitespace + "*$"),
                createMethod$4 = function(e) {
                    return function(r) {
                        var t = toString(requireObjectCoercible(r));
                        return 1 & e && (t = t.replace(ltrim, "")), 2 & e && (t = t.replace(rtrim, "")), t
                    }
                },
                stringTrim = {
                    start: createMethod$4(1),
                    end: createMethod$4(2),
                    trim: createMethod$4(3)
                },
                getOwnPropertyNames$1 = objectGetOwnPropertyNames.f,
                getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f,
                defineProperty$4 = objectDefineProperty.f,
                trim = stringTrim.trim,
                NUMBER = "Number",
                NativeNumber = global$1[NUMBER],
                NumberPrototype = NativeNumber.prototype,
                BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER,
                toNumber = function(e) {
                    if (isSymbol(e)) throw TypeError("Cannot convert a Symbol value to a number");
                    var r, t, n, o, a, i, s, c, l = toPrimitive(e, "number");
                    if ("string" == typeof l && l.length > 2)
                        if (43 === (r = (l = trim(l)).charCodeAt(0)) || 45 === r) {
                            if (88 === (t = l.charCodeAt(2)) || 120 === t) return NaN
                        } else if (48 === r) {
                        switch (l.charCodeAt(1)) {
                            case 66:
                            case 98:
                                n = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                n = 8, o = 55;
                                break;
                            default:
                                return +l
                        }
                        for (i = (a = l.slice(2)).length, s = 0; s < i; s++)
                            if ((c = a.charCodeAt(s)) < 48 || c > o) return NaN;
                        return parseInt(a, n)
                    }
                    return +l
                };
            if (isForced_1(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"))) {
                for (var NumberWrapper = function(e) {
                        var r = arguments.length < 1 ? 0 : e,
                            t = this;
                        return t instanceof NumberWrapper && (BROKEN_CLASSOF ? fails((function() {
                            NumberPrototype.valueOf.call(t)
                        })) : classofRaw(t) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(r)), t, NumberWrapper) : toNumber(r)
                    }, keys$1 = descriptors ? getOwnPropertyNames$1(NativeNumber) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), j$1 = 0, key$1; keys$1.length > j$1; j$1++) has$1(NativeNumber, key$1 = keys$1[j$1]) && !has$1(NumberWrapper, key$1) && defineProperty$4(NumberWrapper, key$1, getOwnPropertyDescriptor$1(NativeNumber, key$1));
                NumberWrapper.prototype = NumberPrototype, NumberPrototype.constructor = NumberWrapper, redefine(global$1, NUMBER, NumberWrapper)
            }
            var defineProperty$3 = objectDefineProperty.f,
                FunctionPrototype = Function.prototype,
                FunctionPrototypeToString = FunctionPrototype.toString,
                nameRE = /^\s*function ([^ (]*)/,
                NAME$1 = "name";
            descriptors && !(NAME$1 in FunctionPrototype) && defineProperty$3(FunctionPrototype, NAME$1, {
                configurable: !0,
                get: function() {
                    try {
                        return FunctionPrototypeToString.call(this).match(nameRE)[1]
                    } catch (e) {
                        return ""
                    }
                }
            }), _export({
                global: !0
            }, {
                globalThis: global$1
            });
            var $assign = Object.assign,
                defineProperty$2 = Object.defineProperty,
                objectAssign = !$assign || fails((function() {
                    if (descriptors && 1 !== $assign({
                            b: 1
                        }, $assign(defineProperty$2({}, "a", {
                            enumerable: !0,
                            get: function() {
                                defineProperty$2(this, "b", {
                                    value: 3,
                                    enumerable: !1
                                })
                            }
                        }), {
                            b: 2
                        })).b) return !0;
                    var e = {},
                        r = {},
                        t = Symbol();
                    return e[t] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    })), 7 != $assign({}, e)[t] || "abcdefghijklmnopqrst" != objectKeys($assign({}, r)).join("")
                })) ? function(e, r) {
                    for (var t = toObject(e), n = arguments.length, o = 1, a = objectGetOwnPropertySymbols.f, i = objectPropertyIsEnumerable.f; n > o;)
                        for (var s, c = indexedObject(arguments[o++]), l = a ? objectKeys(c).concat(a(c)) : objectKeys(c), u = l.length, f = 0; u > f;) s = l[f++], descriptors && !i.call(c, s) || (t[s] = c[s]);
                    return t
                } : $assign;
            _export({
                target: "Object",
                stat: !0,
                forced: Object.assign !== objectAssign
            }, {
                assign: objectAssign
            });
            var path = global$1;
            path.Object.assign;
            var regexpFlags = function() {
                    var e = anObject(this),
                        r = "";
                    return e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.sticky && (r += "y"), r
                },
                RE = function(e, r) {
                    return RegExp(e, r)
                },
                UNSUPPORTED_Y$2 = fails((function() {
                    var e = RE("a", "y");
                    return e.lastIndex = 2, null != e.exec("abcd")
                })),
                BROKEN_CARET = fails((function() {
                    var e = RE("^r", "gy");
                    return e.lastIndex = 2, null != e.exec("str")
                })),
                regexpStickyHelpers = {
                    UNSUPPORTED_Y: UNSUPPORTED_Y$2,
                    BROKEN_CARET: BROKEN_CARET
                },
                regexpUnsupportedDotAll = fails((function() {
                    var e = RegExp(".", "string".charAt(0));
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                })),
                regexpUnsupportedNcg = fails((function() {
                    var e = RegExp("(?<a>b)", "string".charAt(5));
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                })),
                getInternalState$3 = internalState.get,
                nativeExec = RegExp.prototype.exec,
                nativeReplace = shared("native-string-replace", String.prototype.replace),
                patchedExec = nativeExec,
                UPDATES_LAST_INDEX_WRONG = (re1 = /a/, re2 = /b*/g, nativeExec.call(re1, "a"), nativeExec.call(re2, "a"), 0 !== re1.lastIndex || 0 !== re2.lastIndex),
                re1, re2, UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET,
                NPCG_INCLUDED = void 0 !== /()??/.exec("")[1],
                PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;
            PATCH && (patchedExec = function(e) {
                var r, t, n, o, a, i, s, c = this,
                    l = getInternalState$3(c),
                    u = toString(e),
                    f = l.raw;
                if (f) return f.lastIndex = c.lastIndex, r = patchedExec.call(f, u), c.lastIndex = f.lastIndex, r;
                var p = l.groups,
                    d = UNSUPPORTED_Y$1 && c.sticky,
                    y = regexpFlags.call(c),
                    h = c.source,
                    g = 0,
                    A = u;
                if (d && (-1 === (y = y.replace("y", "")).indexOf("g") && (y += "g"), A = u.slice(c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== u.charAt(c.lastIndex - 1)) && (h = "(?: " + h + ")", A = " " + A, g++), t = new RegExp("^(?:" + h + ")", y)), NPCG_INCLUDED && (t = new RegExp("^" + h + "$(?!\\s)", y)), UPDATES_LAST_INDEX_WRONG && (n = c.lastIndex), o = nativeExec.call(d ? t : c, A), d ? o ? (o.input = o.input.slice(g), o[0] = o[0].slice(g), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : UPDATES_LAST_INDEX_WRONG && o && (c.lastIndex = c.global ? o.index + o[0].length : n), NPCG_INCLUDED && o && o.length > 1 && nativeReplace.call(o[0], t, (function() {
                        for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                    })), o && p)
                    for (o.groups = i = objectCreate(null), a = 0; a < p.length; a++) i[(s = p[a])[0]] = o[s[1]];
                return o
            });
            var regexpExec = patchedExec;
            _export({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== regexpExec
            }, {
                exec: regexpExec
            });
            var SPECIES$3 = wellKnownSymbol("species"),
                RegExpPrototype$1 = RegExp.prototype,
                fixRegexpWellKnownSymbolLogic = function(e, r, t, n) {
                    var o = wellKnownSymbol(e),
                        a = !fails((function() {
                            var r = {};
                            return r[o] = function() {
                                return 7
                            }, 7 != "" [e](r)
                        })),
                        i = a && !fails((function() {
                            var r = !1,
                                t = /a/;
                            return "split" === e && ((t = {}).constructor = {}, t.constructor[SPECIES$3] = function() {
                                return t
                            }, t.flags = "", t[o] = /./ [o]), t.exec = function() {
                                return r = !0, null
                            }, t[o](""), !r
                        }));
                    if (!a || !i || t) {
                        var s = /./ [o],
                            c = r(o, "" [e], (function(e, r, t, n, o) {
                                var i = r.exec;
                                return i === regexpExec || i === RegExpPrototype$1.exec ? a && !o ? {
                                    done: !0,
                                    value: s.call(r, t, n)
                                } : {
                                    done: !0,
                                    value: e.call(t, r, n)
                                } : {
                                    done: !1
                                }
                            }));
                        redefine(String.prototype, e, c[0]), redefine(RegExpPrototype$1, o, c[1])
                    }
                    n && createNonEnumerableProperty(RegExpPrototype$1[o], "sham", !0)
                },
                MATCH$1 = wellKnownSymbol("match"),
                isRegexp = function(e) {
                    var r;
                    return isObject(e) && (void 0 !== (r = e[MATCH$1]) ? !!r : "RegExp" == classofRaw(e))
                },
                createMethod$3 = function(e) {
                    return function(r, t) {
                        var n, o, a = toString(requireObjectCoercible(r)),
                            i = toInteger(t),
                            s = a.length;
                        return i < 0 || i >= s ? e ? "" : void 0 : (n = a.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === s || (o = a.charCodeAt(i + 1)) < 56320 || o > 57343 ? e ? a.charAt(i) : n : e ? a.slice(i, i + 2) : o - 56320 + (n - 55296 << 10) + 65536
                    }
                },
                stringMultibyte = {
                    codeAt: createMethod$3(!1),
                    charAt: createMethod$3(!0)
                },
                charAt$1 = stringMultibyte.charAt,
                advanceStringIndex = function(e, r, t) {
                    return r + (t ? charAt$1(e, r).length : 1)
                },
                regexpExecAbstract = function(e, r) {
                    var t = e.exec;
                    if ("function" == typeof t) {
                        var n = t.call(e, r);
                        if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                        return n
                    }
                    if ("RegExp" !== classofRaw(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                    return regexpExec.call(e, r)
                },
                UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y,
                arrayPush = [].push,
                min$4 = Math.min,
                MAX_UINT32 = 4294967295,
                SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails((function() {
                    var e = /(?:)/,
                        r = e.exec;
                    e.exec = function() {
                        return r.apply(this, arguments)
                    };
                    var t = "ab".split(e);
                    return 2 !== t.length || "a" !== t[0] || "b" !== t[1]
                }));
            fixRegexpWellKnownSymbolLogic("split", (function(e, r, t) {
                var n;
                return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, t) {
                    var n = toString(requireObjectCoercible(this)),
                        o = void 0 === t ? MAX_UINT32 : t >>> 0;
                    if (0 === o) return [];
                    if (void 0 === e) return [n];
                    if (!isRegexp(e)) return r.call(n, e, o);
                    for (var a, i, s, c = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = new RegExp(e.source, l + "g");
                        (a = regexpExec.call(f, n)) && !((i = f.lastIndex) > u && (c.push(n.slice(u, a.index)), a.length > 1 && a.index < n.length && arrayPush.apply(c, a.slice(1)), s = a[0].length, u = i, c.length >= o));) f.lastIndex === a.index && f.lastIndex++;
                    return u === n.length ? !s && f.test("") || c.push("") : c.push(n.slice(u)), c.length > o ? c.slice(0, o) : c
                } : "0".split(void 0, 0).length ? function(e, t) {
                    return void 0 === e && 0 === t ? [] : r.call(this, e, t)
                } : r, [function(r, t) {
                    var o = requireObjectCoercible(this),
                        a = null == r ? void 0 : r[e];
                    return void 0 !== a ? a.call(r, o, t) : n.call(toString(o), r, t)
                }, function(e, o) {
                    var a = anObject(this),
                        i = toString(e),
                        s = t(n, a, i, o, n !== r);
                    if (s.done) return s.value;
                    var c = speciesConstructor(a, RegExp),
                        l = a.unicode,
                        u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y"),
                        f = new c(UNSUPPORTED_Y ? "^(?:" + a.source + ")" : a, u),
                        p = void 0 === o ? MAX_UINT32 : o >>> 0;
                    if (0 === p) return [];
                    if (0 === i.length) return null === regexpExecAbstract(f, i) ? [i] : [];
                    for (var d = 0, y = 0, h = []; y < i.length;) {
                        f.lastIndex = UNSUPPORTED_Y ? 0 : y;
                        var g, A = regexpExecAbstract(f, UNSUPPORTED_Y ? i.slice(y) : i);
                        if (null === A || (g = min$4(toLength(f.lastIndex + (UNSUPPORTED_Y ? y : 0)), i.length)) === d) y = advanceStringIndex(i, y, l);
                        else {
                            if (h.push(i.slice(d, y)), h.length === p) return h;
                            for (var v = 1; v <= A.length - 1; v++)
                                if (h.push(A[v]), h.length === p) return h;
                            y = d = g
                        }
                    }
                    return h.push(i.slice(d)), h
                }]
            }), !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y), fixRegexpWellKnownSymbolLogic("match", (function(e, r, t) {
                return [function(r) {
                    var t = requireObjectCoercible(this),
                        n = null == r ? void 0 : r[e];
                    return void 0 !== n ? n.call(r, t) : new RegExp(r)[e](toString(t))
                }, function(e) {
                    var n = anObject(this),
                        o = toString(e),
                        a = t(r, n, o);
                    if (a.done) return a.value;
                    if (!n.global) return regexpExecAbstract(n, o);
                    var i = n.unicode;
                    n.lastIndex = 0;
                    for (var s, c = [], l = 0; null !== (s = regexpExecAbstract(n, o));) {
                        var u = toString(s[0]);
                        c[l] = u, "" === u && (n.lastIndex = advanceStringIndex(o, toLength(n.lastIndex), i)), l++
                    }
                    return 0 === l ? null : c
                }]
            }));
            var UNSCOPABLES = wellKnownSymbol("unscopables"),
                ArrayPrototype = Array.prototype;
            null == ArrayPrototype[UNSCOPABLES] && objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
                configurable: !0,
                value: objectCreate(null)
            });
            var addToUnscopables = function(e) {
                    ArrayPrototype[UNSCOPABLES][e] = !0
                },
                correctPrototypeGetter = !fails((function() {
                    function e() {}
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                })),
                IE_PROTO = sharedKey("IE_PROTO"),
                ObjectPrototype$2 = Object.prototype,
                objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(e) {
                    return e = toObject(e), has$1(e, IE_PROTO) ? e[IE_PROTO] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ObjectPrototype$2 : null
                },
                ITERATOR$5 = wellKnownSymbol("iterator"),
                BUGGY_SAFARI_ITERATORS$1 = !1,
                returnThis$2 = function() {
                    return this
                },
                IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
            [].keys && (arrayIterator = [].keys(), "next" in arrayIterator ? (PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)), PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS$1 = !0);
            var NEW_ITERATOR_PROTOTYPE = null == IteratorPrototype$2 || fails((function() {
                var e = {};
                return IteratorPrototype$2[ITERATOR$5].call(e) !== e
            }));
            NEW_ITERATOR_PROTOTYPE && (IteratorPrototype$2 = {}), has$1(IteratorPrototype$2, ITERATOR$5) || createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
            var iteratorsCore = {
                    IteratorPrototype: IteratorPrototype$2,
                    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
                },
                IteratorPrototype$1 = iteratorsCore.IteratorPrototype,
                returnThis$1 = function() {
                    return this
                },
                createIteratorConstructor = function(e, r, t) {
                    var n = r + " Iterator";
                    return e.prototype = objectCreate(IteratorPrototype$1, {
                        next: createPropertyDescriptor(1, t)
                    }), setToStringTag(e, n, !1), iterators[n] = returnThis$1, e
                },
                IteratorPrototype = iteratorsCore.IteratorPrototype,
                BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS,
                ITERATOR$4 = wellKnownSymbol("iterator"),
                KEYS = "keys",
                VALUES = "values",
                ENTRIES = "entries",
                returnThis = function() {
                    return this
                },
                defineIterator = function(e, r, t, n, o, a, i) {
                    createIteratorConstructor(t, r, n);
                    var s, c, l, u = function(e) {
                            if (e === o && h) return h;
                            if (!BUGGY_SAFARI_ITERATORS && e in d) return d[e];
                            switch (e) {
                                case KEYS:
                                case VALUES:
                                case ENTRIES:
                                    return function() {
                                        return new t(this, e)
                                    }
                            }
                            return function() {
                                return new t(this)
                            }
                        },
                        f = r + " Iterator",
                        p = !1,
                        d = e.prototype,
                        y = d[ITERATOR$4] || d["@@iterator"] || o && d[o],
                        h = !BUGGY_SAFARI_ITERATORS && y || u(o),
                        g = "Array" == r && d.entries || y;
                    if (g && (s = objectGetPrototypeOf(g.call(new e)), IteratorPrototype !== Object.prototype && s.next && (objectGetPrototypeOf(s) !== IteratorPrototype && (objectSetPrototypeOf ? objectSetPrototypeOf(s, IteratorPrototype) : "function" != typeof s[ITERATOR$4] && createNonEnumerableProperty(s, ITERATOR$4, returnThis)), setToStringTag(s, f, !0))), o == VALUES && y && y.name !== VALUES && (p = !0, h = function() {
                            return y.call(this)
                        }), d[ITERATOR$4] !== h && createNonEnumerableProperty(d, ITERATOR$4, h), iterators[r] = h, o)
                        if (c = {
                                values: u(VALUES),
                                keys: a ? h : u(KEYS),
                                entries: u(ENTRIES)
                            }, i)
                            for (l in c)(BUGGY_SAFARI_ITERATORS || p || !(l in d)) && redefine(d, l, c[l]);
                        else _export({
                            target: r,
                            proto: !0,
                            forced: BUGGY_SAFARI_ITERATORS || p
                        }, c);
                    return c
                },
                ARRAY_ITERATOR = "Array Iterator",
                setInternalState$4 = internalState.set,
                getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR),
                es_array_iterator = defineIterator(Array, "Array", (function(e, r) {
                    setInternalState$4(this, {
                        type: ARRAY_ITERATOR,
                        target: toIndexedObject(e),
                        index: 0,
                        kind: r
                    })
                }), (function() {
                    var e = getInternalState$2(this),
                        r = e.target,
                        t = e.kind,
                        n = e.index++;
                    return !r || n >= r.length ? (e.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : "keys" == t ? {
                        value: n,
                        done: !1
                    } : "values" == t ? {
                        value: r[n],
                        done: !1
                    } : {
                        value: [n, r[n]],
                        done: !1
                    }
                }), "values");
            iterators.Arguments = iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), addToUnscopables("entries");
            var arrayBufferNative = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
                defineProperty$1 = objectDefineProperty.f,
                Int8Array$3 = global$1.Int8Array,
                Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype,
                Uint8ClampedArray = global$1.Uint8ClampedArray,
                Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype,
                TypedArray = Int8Array$3 && objectGetPrototypeOf(Int8Array$3),
                TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype),
                ObjectPrototype$1 = Object.prototype,
                isPrototypeOf = ObjectPrototype$1.isPrototypeOf,
                TO_STRING_TAG$1 = wellKnownSymbol("toStringTag"),
                TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG"),
                TYPED_ARRAY_CONSTRUCTOR$1 = uid("TYPED_ARRAY_CONSTRUCTOR"),
                NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferNative && !!objectSetPrototypeOf && "Opera" !== classof(global$1.opera),
                TYPED_ARRAY_TAG_REQIRED = !1,
                NAME, Constructor, Prototype, TypedArrayConstructorsList = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                },
                BigIntArrayConstructorsList = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                },
                isView = function(e) {
                    if (!isObject(e)) return !1;
                    var r = classof(e);
                    return "DataView" === r || has$1(TypedArrayConstructorsList, r) || has$1(BigIntArrayConstructorsList, r)
                },
                isTypedArray = function(e) {
                    if (!isObject(e)) return !1;
                    var r = classof(e);
                    return has$1(TypedArrayConstructorsList, r) || has$1(BigIntArrayConstructorsList, r)
                },
                aTypedArray$m = function(e) {
                    if (isTypedArray(e)) return e;
                    throw TypeError("Target is not a typed array")
                },
                aTypedArrayConstructor$2 = function(e) {
                    if (objectSetPrototypeOf && !isPrototypeOf.call(TypedArray, e)) throw TypeError("Target is not a typed array constructor");
                    return e
                },
                exportTypedArrayMethod$n = function(e, r, t) {
                    if (descriptors) {
                        if (t)
                            for (var n in TypedArrayConstructorsList) {
                                var o = global$1[n];
                                if (o && has$1(o.prototype, e)) try {
                                    delete o.prototype[e]
                                } catch (e) {}
                            }
                        TypedArrayPrototype[e] && !t || redefine(TypedArrayPrototype, e, t ? r : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8ArrayPrototype[e] || r)
                    }
                },
                exportTypedArrayStaticMethod = function(e, r, t) {
                    var n, o;
                    if (descriptors) {
                        if (objectSetPrototypeOf) {
                            if (t)
                                for (n in TypedArrayConstructorsList)
                                    if ((o = global$1[n]) && has$1(o, e)) try {
                                        delete o[e]
                                    } catch (e) {}
                            if (TypedArray[e] && !t) return;
                            try {
                                return redefine(TypedArray, e, t ? r : NATIVE_ARRAY_BUFFER_VIEWS$1 && TypedArray[e] || r)
                            } catch (e) {}
                        }
                        for (n in TypedArrayConstructorsList) !(o = global$1[n]) || o[e] && !t || redefine(o, e, r)
                    }
                };
            for (NAME in TypedArrayConstructorsList) Constructor = global$1[NAME], Prototype = Constructor && Constructor.prototype, Prototype ? createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor) : NATIVE_ARRAY_BUFFER_VIEWS$1 = !1;
            for (NAME in BigIntArrayConstructorsList) Constructor = global$1[NAME], Prototype = Constructor && Constructor.prototype, Prototype && createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor);
            if ((!NATIVE_ARRAY_BUFFER_VIEWS$1 || "function" != typeof TypedArray || TypedArray === Function.prototype) && (TypedArray = function() {
                    throw TypeError("Incorrect invocation")
                }, NATIVE_ARRAY_BUFFER_VIEWS$1))
                for (NAME in TypedArrayConstructorsList) global$1[NAME] && objectSetPrototypeOf(global$1[NAME], TypedArray);
            if ((!NATIVE_ARRAY_BUFFER_VIEWS$1 || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$1) && (TypedArrayPrototype = TypedArray.prototype, NATIVE_ARRAY_BUFFER_VIEWS$1))
                for (NAME in TypedArrayConstructorsList) global$1[NAME] && objectSetPrototypeOf(global$1[NAME].prototype, TypedArrayPrototype);
            if (NATIVE_ARRAY_BUFFER_VIEWS$1 && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype && objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype), descriptors && !has$1(TypedArrayPrototype, TO_STRING_TAG$1))
                for (NAME in TYPED_ARRAY_TAG_REQIRED = !0, defineProperty$1(TypedArrayPrototype, TO_STRING_TAG$1, {
                        get: function() {
                            return isObject(this) ? this[TYPED_ARRAY_TAG] : void 0
                        }
                    }), TypedArrayConstructorsList) global$1[NAME] && createNonEnumerableProperty(global$1[NAME], TYPED_ARRAY_TAG, NAME);
            var arrayBufferViewCore = {
                    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$1,
                    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$1,
                    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
                    aTypedArray: aTypedArray$m,
                    aTypedArrayConstructor: aTypedArrayConstructor$2,
                    exportTypedArrayMethod: exportTypedArrayMethod$n,
                    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
                    isView: isView,
                    isTypedArray: isTypedArray,
                    TypedArray: TypedArray,
                    TypedArrayPrototype: TypedArrayPrototype
                },
                NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS,
                ArrayBuffer$1 = global$1.ArrayBuffer,
                Int8Array$2 = global$1.Int8Array,
                typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS || !fails((function() {
                    Int8Array$2(1)
                })) || !fails((function() {
                    new Int8Array$2(-1)
                })) || !checkCorrectnessOfIteration((function(e) {
                    new Int8Array$2, new Int8Array$2(null), new Int8Array$2(1.5), new Int8Array$2(e)
                }), !0) || fails((function() {
                    return 1 !== new Int8Array$2(new ArrayBuffer$1(2), 1, void 0).length
                })),
                toIndex = function(e) {
                    if (void 0 === e) return 0;
                    var r = toInteger(e),
                        t = toLength(r);
                    if (r !== t) throw RangeError("Wrong length or index");
                    return t
                },
                abs = Math.abs,
                pow$1 = Math.pow,
                floor$6 = Math.floor,
                log = Math.log,
                LN2 = Math.LN2,
                pack = function(e, r, t) {
                    var n, o, a, i = new Array(t),
                        s = 8 * t - r - 1,
                        c = (1 << s) - 1,
                        l = c >> 1,
                        u = 23 === r ? pow$1(2, -24) - pow$1(2, -77) : 0,
                        f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                        p = 0;
                    for ((e = abs(e)) != e || e === 1 / 0 ? (o = e != e ? 1 : 0, n = c) : (n = floor$6(log(e) / LN2), e * (a = pow$1(2, -n)) < 1 && (n--, a *= 2), (e += n + l >= 1 ? u / a : u * pow$1(2, 1 - l)) * a >= 2 && (n++, a /= 2), n + l >= c ? (o = 0, n = c) : n + l >= 1 ? (o = (e * a - 1) * pow$1(2, r), n += l) : (o = e * pow$1(2, l - 1) * pow$1(2, r), n = 0)); r >= 8; i[p++] = 255 & o, o /= 256, r -= 8);
                    for (n = n << r | o, s += r; s > 0; i[p++] = 255 & n, n /= 256, s -= 8);
                    return i[--p] |= 128 * f, i
                },
                unpack = function(e, r) {
                    var t, n = e.length,
                        o = 8 * n - r - 1,
                        a = (1 << o) - 1,
                        i = a >> 1,
                        s = o - 7,
                        c = n - 1,
                        l = e[c--],
                        u = 127 & l;
                    for (l >>= 7; s > 0; u = 256 * u + e[c], c--, s -= 8);
                    for (t = u & (1 << -s) - 1, u >>= -s, s += r; s > 0; t = 256 * t + e[c], c--, s -= 8);
                    if (0 === u) u = 1 - i;
                    else {
                        if (u === a) return t ? NaN : l ? -1 / 0 : 1 / 0;
                        t += pow$1(2, r), u -= i
                    }
                    return (l ? -1 : 1) * t * pow$1(2, u - r)
                },
                ieee754 = {
                    pack: pack,
                    unpack: unpack
                },
                arrayFill = function(e) {
                    for (var r = toObject(this), t = toLength(r.length), n = arguments.length, o = toAbsoluteIndex(n > 1 ? arguments[1] : void 0, t), a = n > 2 ? arguments[2] : void 0, i = void 0 === a ? t : toAbsoluteIndex(a, t); i > o;) r[o++] = e;
                    return r
                },
                getOwnPropertyNames = objectGetOwnPropertyNames.f,
                defineProperty = objectDefineProperty.f,
                getInternalState$1 = internalState.get,
                setInternalState$3 = internalState.set,
                ARRAY_BUFFER = "ArrayBuffer",
                DATA_VIEW = "DataView",
                PROTOTYPE = "prototype",
                WRONG_LENGTH = "Wrong length",
                WRONG_INDEX = "Wrong index",
                NativeArrayBuffer = global$1[ARRAY_BUFFER],
                $ArrayBuffer = NativeArrayBuffer,
                $DataView = global$1[DATA_VIEW],
                $DataViewPrototype = $DataView && $DataView[PROTOTYPE],
                ObjectPrototype = Object.prototype,
                RangeError$1 = global$1.RangeError,
                packIEEE754 = ieee754.pack,
                unpackIEEE754 = ieee754.unpack,
                packInt8 = function(e) {
                    return [255 & e]
                },
                packInt16 = function(e) {
                    return [255 & e, e >> 8 & 255]
                },
                packInt32 = function(e) {
                    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
                },
                unpackInt32 = function(e) {
                    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
                },
                packFloat32 = function(e) {
                    return packIEEE754(e, 23, 4)
                },
                packFloat64 = function(e) {
                    return packIEEE754(e, 52, 8)
                },
                addGetter = function(e, r) {
                    defineProperty(e[PROTOTYPE], r, {
                        get: function() {
                            return getInternalState$1(this)[r]
                        }
                    })
                },
                get = function(e, r, t, n) {
                    var o = toIndex(t),
                        a = getInternalState$1(e);
                    if (o + r > a.byteLength) throw RangeError$1(WRONG_INDEX);
                    var i = getInternalState$1(a.buffer).bytes,
                        s = o + a.byteOffset,
                        c = i.slice(s, s + r);
                    return n ? c : c.reverse()
                },
                set = function(e, r, t, n, o, a) {
                    var i = toIndex(t),
                        s = getInternalState$1(e);
                    if (i + r > s.byteLength) throw RangeError$1(WRONG_INDEX);
                    for (var c = getInternalState$1(s.buffer).bytes, l = i + s.byteOffset, u = n(+o), f = 0; f < r; f++) c[l + f] = u[a ? f : r - f - 1]
                };
            if (arrayBufferNative) {
                if (!fails((function() {
                        NativeArrayBuffer(1)
                    })) || !fails((function() {
                        new NativeArrayBuffer(-1)
                    })) || fails((function() {
                        return new NativeArrayBuffer, new NativeArrayBuffer(1.5), new NativeArrayBuffer(NaN), NativeArrayBuffer.name != ARRAY_BUFFER
                    }))) {
                    $ArrayBuffer = function(e) {
                        return anInstance(this, $ArrayBuffer), new NativeArrayBuffer(toIndex(e))
                    };
                    for (var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE], keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;)(key = keys[j++]) in $ArrayBuffer || createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
                    ArrayBufferPrototype.constructor = $ArrayBuffer
                }
                objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype && objectSetPrototypeOf($DataViewPrototype, ObjectPrototype);
                var testView = new $DataView(new $ArrayBuffer(2)),
                    $setInt8 = $DataViewPrototype.setInt8;
                testView.setInt8(0, 2147483648), testView.setInt8(1, 2147483649), !testView.getInt8(0) && testView.getInt8(1) || redefineAll($DataViewPrototype, {
                    setInt8: function(e, r) {
                        $setInt8.call(this, e, r << 24 >> 24)
                    },
                    setUint8: function(e, r) {
                        $setInt8.call(this, e, r << 24 >> 24)
                    }
                }, {
                    unsafe: !0
                })
            } else $ArrayBuffer = function(e) {
                anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                var r = toIndex(e);
                setInternalState$3(this, {
                    bytes: arrayFill.call(new Array(r), 0),
                    byteLength: r
                }), descriptors || (this.byteLength = r)
            }, $DataView = function(e, r, t) {
                anInstance(this, $DataView, DATA_VIEW), anInstance(e, $ArrayBuffer, DATA_VIEW);
                var n = getInternalState$1(e).byteLength,
                    o = toInteger(r);
                if (o < 0 || o > n) throw RangeError$1("Wrong offset");
                if (o + (t = void 0 === t ? n - o : toLength(t)) > n) throw RangeError$1(WRONG_LENGTH);
                setInternalState$3(this, {
                    buffer: e,
                    byteLength: t,
                    byteOffset: o
                }), descriptors || (this.buffer = e, this.byteLength = t, this.byteOffset = o)
            }, descriptors && (addGetter($ArrayBuffer, "byteLength"), addGetter($DataView, "buffer"), addGetter($DataView, "byteLength"), addGetter($DataView, "byteOffset")), redefineAll($DataView[PROTOTYPE], {
                getInt8: function(e) {
                    return get(this, 1, e)[0] << 24 >> 24
                },
                getUint8: function(e) {
                    return get(this, 1, e)[0]
                },
                getInt16: function(e) {
                    var r = get(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                    return (r[1] << 8 | r[0]) << 16 >> 16
                },
                getUint16: function(e) {
                    var r = get(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                    return r[1] << 8 | r[0]
                },
                getInt32: function(e) {
                    return unpackInt32(get(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
                },
                getUint32: function(e) {
                    return unpackInt32(get(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                },
                getFloat32: function(e) {
                    return unpackIEEE754(get(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
                },
                getFloat64: function(e) {
                    return unpackIEEE754(get(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
                },
                setInt8: function(e, r) {
                    set(this, 1, e, packInt8, r)
                },
                setUint8: function(e, r) {
                    set(this, 1, e, packInt8, r)
                },
                setInt16: function(e, r) {
                    set(this, 2, e, packInt16, r, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint16: function(e, r) {
                    set(this, 2, e, packInt16, r, arguments.length > 2 ? arguments[2] : void 0)
                },
                setInt32: function(e, r) {
                    set(this, 4, e, packInt32, r, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint32: function(e, r) {
                    set(this, 4, e, packInt32, r, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat32: function(e, r) {
                    set(this, 4, e, packFloat32, r, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat64: function(e, r) {
                    set(this, 8, e, packFloat64, r, arguments.length > 2 ? arguments[2] : void 0)
                }
            });
            setToStringTag($ArrayBuffer, ARRAY_BUFFER), setToStringTag($DataView, DATA_VIEW);
            var arrayBuffer = {
                    ArrayBuffer: $ArrayBuffer,
                    DataView: $DataView
                },
                floor$5 = Math.floor,
                isInteger = function(e) {
                    return !isObject(e) && isFinite(e) && floor$5(e) === e
                },
                toPositiveInteger = function(e) {
                    var r = toInteger(e);
                    if (r < 0) throw RangeError("The argument can't be less than 0");
                    return r
                },
                toOffset = function(e, r) {
                    var t = toPositiveInteger(e);
                    if (t % r) throw RangeError("Wrong offset");
                    return t
                },
                aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor,
                typedArrayFrom = function(e) {
                    var r, t, n, o, a, i, s = toObject(e),
                        c = arguments.length,
                        l = c > 1 ? arguments[1] : void 0,
                        u = void 0 !== l,
                        f = getIteratorMethod(s);
                    if (null != f && !isArrayIteratorMethod(f))
                        for (i = (a = f.call(s)).next, s = []; !(o = i.call(a)).done;) s.push(o.value);
                    for (u && c > 2 && (l = functionBindContext(l, arguments[2], 2)), t = toLength(s.length), n = new(aTypedArrayConstructor$1(this))(t), r = 0; t > r; r++) n[r] = u ? l(s[r], r) : s[r];
                    return n
                },
                isArray = Array.isArray || function(e) {
                    return "Array" == classofRaw(e)
                },
                SPECIES$2 = wellKnownSymbol("species"),
                arraySpeciesConstructor = function(e) {
                    var r;
                    return isArray(e) && ("function" != typeof(r = e.constructor) || r !== Array && !isArray(r.prototype) ? isObject(r) && null === (r = r[SPECIES$2]) && (r = void 0) : r = void 0), void 0 === r ? Array : r
                },
                arraySpeciesCreate = function(e, r) {
                    return new(arraySpeciesConstructor(e))(0 === r ? 0 : r)
                },
                push = [].push,
                createMethod$2 = function(e) {
                    var r = 1 == e,
                        t = 2 == e,
                        n = 3 == e,
                        o = 4 == e,
                        a = 6 == e,
                        i = 7 == e,
                        s = 5 == e || a;
                    return function(c, l, u, f) {
                        for (var p, d, y = toObject(c), h = indexedObject(y), g = functionBindContext(l, u, 3), A = toLength(h.length), v = 0, m = f || arraySpeciesCreate, E = r ? m(c, A) : t || i ? m(c, 0) : void 0; A > v; v++)
                            if ((s || v in h) && (d = g(p = h[v], v, y), e))
                                if (r) E[v] = d;
                                else if (d) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return p;
                            case 6:
                                return v;
                            case 2:
                                push.call(E, p)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                push.call(E, p)
                        }
                        return a ? -1 : n || o ? o : E
                    }
                },
                arrayIteration = {
                    forEach: createMethod$2(0),
                    map: createMethod$2(1),
                    filter: createMethod$2(2),
                    some: createMethod$2(3),
                    every: createMethod$2(4),
                    find: createMethod$2(5),
                    findIndex: createMethod$2(6),
                    filterReject: createMethod$2(7)
                },
                typedArrayConstructor = createCommonjsModule((function(e) {
                    var r = objectGetOwnPropertyNames.f,
                        t = arrayIteration.forEach,
                        n = internalState.get,
                        o = internalState.set,
                        a = objectDefineProperty.f,
                        i = objectGetOwnPropertyDescriptor.f,
                        s = Math.round,
                        c = global$1.RangeError,
                        l = arrayBuffer.ArrayBuffer,
                        u = arrayBuffer.DataView,
                        f = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS,
                        p = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR,
                        d = arrayBufferViewCore.TYPED_ARRAY_TAG,
                        y = arrayBufferViewCore.TypedArray,
                        h = arrayBufferViewCore.TypedArrayPrototype,
                        g = arrayBufferViewCore.aTypedArrayConstructor,
                        A = arrayBufferViewCore.isTypedArray,
                        v = function(e, r) {
                            for (var t = 0, n = r.length, o = new(g(e))(n); n > t;) o[t] = r[t++];
                            return o
                        },
                        m = function(e, r) {
                            a(e, r, {
                                get: function() {
                                    return n(this)[r]
                                }
                            })
                        },
                        E = function(e) {
                            var r;
                            return e instanceof l || "ArrayBuffer" == (r = classof(e)) || "SharedArrayBuffer" == r
                        },
                        I = function(e, r) {
                            return A(e) && !isSymbol(r) && r in e && isInteger(+r) && r >= 0
                        },
                        P = function(e, r) {
                            return r = toPropertyKey(r), I(e, r) ? createPropertyDescriptor(2, e[r]) : i(e, r)
                        },
                        T = function(e, r, t) {
                            return r = toPropertyKey(r), !(I(e, r) && isObject(t) && has$1(t, "value")) || has$1(t, "get") || has$1(t, "set") || t.configurable || has$1(t, "writable") && !t.writable || has$1(t, "enumerable") && !t.enumerable ? a(e, r, t) : (e[r] = t.value, e)
                        };
                    descriptors ? (f || (objectGetOwnPropertyDescriptor.f = P, objectDefineProperty.f = T, m(h, "buffer"), m(h, "byteOffset"), m(h, "byteLength"), m(h, "length")), _export({
                        target: "Object",
                        stat: !0,
                        forced: !f
                    }, {
                        getOwnPropertyDescriptor: P,
                        defineProperty: T
                    }), e.exports = function(e, i, g) {
                        var m = e.match(/\d+$/)[0] / 8,
                            I = e + (g ? "Clamped" : "") + "Array",
                            P = "get" + e,
                            T = "set" + e,
                            b = global$1[I],
                            S = b,
                            R = S && S.prototype,
                            _ = {},
                            w = function(e, r) {
                                a(e, r, {
                                    get: function() {
                                        return function(e, r) {
                                            var t = n(e);
                                            return t.view[P](r * m + t.byteOffset, !0)
                                        }(this, r)
                                    },
                                    set: function(e) {
                                        return function(e, r, t) {
                                            var o = n(e);
                                            g && (t = (t = s(t)) < 0 ? 0 : t > 255 ? 255 : 255 & t), o.view[T](r * m + o.byteOffset, t, !0)
                                        }(this, r, e)
                                    },
                                    enumerable: !0
                                })
                            };
                        f ? typedArrayConstructorsRequireWrappers && (S = i((function(e, r, t, n) {
                            return anInstance(e, S, I), inheritIfRequired(isObject(r) ? E(r) ? void 0 !== n ? new b(r, toOffset(t, m), n) : void 0 !== t ? new b(r, toOffset(t, m)) : new b(r) : A(r) ? v(S, r) : typedArrayFrom.call(S, r) : new b(toIndex(r)), e, S)
                        })), objectSetPrototypeOf && objectSetPrototypeOf(S, y), t(r(b), (function(e) {
                            e in S || createNonEnumerableProperty(S, e, b[e])
                        })), S.prototype = R) : (S = i((function(e, r, t, n) {
                            anInstance(e, S, I);
                            var a, i, s, f = 0,
                                p = 0;
                            if (isObject(r)) {
                                if (!E(r)) return A(r) ? v(S, r) : typedArrayFrom.call(S, r);
                                a = r, p = toOffset(t, m);
                                var d = r.byteLength;
                                if (void 0 === n) {
                                    if (d % m) throw c("Wrong length");
                                    if ((i = d - p) < 0) throw c("Wrong length")
                                } else if ((i = toLength(n) * m) + p > d) throw c("Wrong length");
                                s = i / m
                            } else s = toIndex(r), a = new l(i = s * m);
                            for (o(e, {
                                    buffer: a,
                                    byteOffset: p,
                                    byteLength: i,
                                    length: s,
                                    view: new u(a)
                                }); f < s;) w(e, f++)
                        })), objectSetPrototypeOf && objectSetPrototypeOf(S, y), R = S.prototype = objectCreate(h)), R.constructor !== S && createNonEnumerableProperty(R, "constructor", S), createNonEnumerableProperty(R, p, S), d && createNonEnumerableProperty(R, d, I), _[I] = S, _export({
                            global: !0,
                            forced: S != b,
                            sham: !f
                        }, _), "BYTES_PER_ELEMENT" in S || createNonEnumerableProperty(S, "BYTES_PER_ELEMENT", m), "BYTES_PER_ELEMENT" in R || createNonEnumerableProperty(R, "BYTES_PER_ELEMENT", m), setSpecies(I)
                    }) : e.exports = function() {}
                }));
            typedArrayConstructor("Uint8", (function(e) {
                return function(r, t, n) {
                    return e(this, r, t, n)
                }
            }));
            var min$3 = Math.min,
                arrayCopyWithin = [].copyWithin || function(e, r) {
                    var t = toObject(this),
                        n = toLength(t.length),
                        o = toAbsoluteIndex(e, n),
                        a = toAbsoluteIndex(r, n),
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        s = min$3((void 0 === i ? n : toAbsoluteIndex(i, n)) - a, n - o),
                        c = 1;
                    for (a < o && o < a + s && (c = -1, a += s - 1, o += s - 1); s-- > 0;) a in t ? t[o] = t[a] : delete t[o], o += c, a += c;
                    return t
                },
                aTypedArray$l = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$m("copyWithin", (function(e, r) {
                return arrayCopyWithin.call(aTypedArray$l(this), e, r, arguments.length > 2 ? arguments[2] : void 0)
            }));
            var $every = arrayIteration.every,
                aTypedArray$k = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$l("every", (function(e) {
                return $every(aTypedArray$k(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var aTypedArray$j = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$k("fill", (function(e) {
                return arrayFill.apply(aTypedArray$j(this), arguments)
            }));
            var arrayFromConstructorAndList = function(e, r) {
                    for (var t = 0, n = r.length, o = new e(n); n > t;) o[t] = r[t++];
                    return o
                },
                TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR,
                aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor,
                typedArraySpeciesConstructor = function(e) {
                    return aTypedArrayConstructor(speciesConstructor(e, e[TYPED_ARRAY_CONSTRUCTOR]))
                },
                typedArrayFromSpeciesAndList = function(e, r) {
                    return arrayFromConstructorAndList(typedArraySpeciesConstructor(e), r)
                },
                $filter$1 = arrayIteration.filter,
                aTypedArray$i = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$j("filter", (function(e) {
                var r = $filter$1(aTypedArray$i(this), e, arguments.length > 1 ? arguments[1] : void 0);
                return typedArrayFromSpeciesAndList(this, r)
            }));
            var $find = arrayIteration.find,
                aTypedArray$h = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$i("find", (function(e) {
                return $find(aTypedArray$h(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var $findIndex = arrayIteration.findIndex,
                aTypedArray$g = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$h("findIndex", (function(e) {
                return $findIndex(aTypedArray$g(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var $forEach$1 = arrayIteration.forEach,
                aTypedArray$f = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$g("forEach", (function(e) {
                $forEach$1(aTypedArray$f(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var $includes = arrayIncludes.includes,
                aTypedArray$e = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$f("includes", (function(e) {
                return $includes(aTypedArray$e(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var $indexOf = arrayIncludes.indexOf,
                aTypedArray$d = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$e("indexOf", (function(e) {
                return $indexOf(aTypedArray$d(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var ITERATOR$3 = wellKnownSymbol("iterator"),
                Uint8Array$2 = global$1.Uint8Array,
                arrayValues = es_array_iterator.values,
                arrayKeys = es_array_iterator.keys,
                arrayEntries = es_array_iterator.entries,
                aTypedArray$c = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod,
                nativeTypedArrayIterator = Uint8Array$2 && Uint8Array$2.prototype[ITERATOR$3],
                CORRECT_ITER_NAME = !!nativeTypedArrayIterator && ("values" == nativeTypedArrayIterator.name || null == nativeTypedArrayIterator.name),
                typedArrayValues = function() {
                    return arrayValues.call(aTypedArray$c(this))
                };
            exportTypedArrayMethod$d("entries", (function() {
                return arrayEntries.call(aTypedArray$c(this))
            })), exportTypedArrayMethod$d("keys", (function() {
                return arrayKeys.call(aTypedArray$c(this))
            })), exportTypedArrayMethod$d("values", typedArrayValues, !CORRECT_ITER_NAME), exportTypedArrayMethod$d(ITERATOR$3, typedArrayValues, !CORRECT_ITER_NAME);
            var aTypedArray$b = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod,
                $join = [].join;
            exportTypedArrayMethod$c("join", (function(e) {
                return $join.apply(aTypedArray$b(this), arguments)
            }));
            var arrayMethodIsStrict = function(e, r) {
                    var t = [][e];
                    return !!t && fails((function() {
                        t.call(null, r || function() {
                            throw 1
                        }, 1)
                    }))
                },
                min$2 = Math.min,
                $lastIndexOf = [].lastIndexOf,
                NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0,
                STRICT_METHOD$2 = arrayMethodIsStrict("lastIndexOf"),
                FORCED$5 = NEGATIVE_ZERO || !STRICT_METHOD$2,
                arrayLastIndexOf = FORCED$5 ? function(e) {
                    if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
                    var r = toIndexedObject(this),
                        t = toLength(r.length),
                        n = t - 1;
                    for (arguments.length > 1 && (n = min$2(n, toInteger(arguments[1]))), n < 0 && (n = t + n); n >= 0; n--)
                        if (n in r && r[n] === e) return n || 0;
                    return -1
                } : $lastIndexOf,
                aTypedArray$a = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$b("lastIndexOf", (function(e) {
                return arrayLastIndexOf.apply(aTypedArray$a(this), arguments)
            }));
            var $map = arrayIteration.map,
                aTypedArray$9 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$a("map", (function(e) {
                return $map(aTypedArray$9(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, r) {
                    return new(typedArraySpeciesConstructor(e))(r)
                }))
            }));
            var createMethod$1 = function(e) {
                    return function(r, t, n, o) {
                        aFunction(t);
                        var a = toObject(r),
                            i = indexedObject(a),
                            s = toLength(a.length),
                            c = e ? s - 1 : 0,
                            l = e ? -1 : 1;
                        if (n < 2)
                            for (;;) {
                                if (c in i) {
                                    o = i[c], c += l;
                                    break
                                }
                                if (c += l, e ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; e ? c >= 0 : s > c; c += l) c in i && (o = t(o, i[c], c, a));
                        return o
                    }
                },
                arrayReduce = {
                    left: createMethod$1(!1),
                    right: createMethod$1(!0)
                },
                $reduce = arrayReduce.left,
                aTypedArray$8 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$9("reduce", (function(e) {
                return $reduce(aTypedArray$8(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var $reduceRight = arrayReduce.right,
                aTypedArray$7 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$8("reduceRight", (function(e) {
                return $reduceRight(aTypedArray$7(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var aTypedArray$6 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod,
                floor$4 = Math.floor;
            exportTypedArrayMethod$7("reverse", (function() {
                for (var e, r = aTypedArray$6(this).length, t = floor$4(r / 2), n = 0; n < t;) e = this[n], this[n++] = this[--r], this[r] = e;
                return this
            }));
            var aTypedArray$5 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod,
                FORCED$4 = fails((function() {
                    new Int8Array(1).set({})
                }));
            exportTypedArrayMethod$6("set", (function(e) {
                aTypedArray$5(this);
                var r = toOffset(arguments.length > 1 ? arguments[1] : void 0, 1),
                    t = this.length,
                    n = toObject(e),
                    o = toLength(n.length),
                    a = 0;
                if (o + r > t) throw RangeError("Wrong length");
                for (; a < o;) this[r + a] = n[a++]
            }), FORCED$4);
            var aTypedArray$4 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod,
                $slice$1 = [].slice,
                FORCED$3 = fails((function() {
                    new Int8Array(1).slice()
                }));
            exportTypedArrayMethod$5("slice", (function(e, r) {
                for (var t = $slice$1.call(aTypedArray$4(this), e, r), n = typedArraySpeciesConstructor(this), o = 0, a = t.length, i = new n(a); a > o;) i[o] = t[o++];
                return i
            }), FORCED$3);
            var $some = arrayIteration.some,
                aTypedArray$3 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$4("some", (function(e) {
                return $some(aTypedArray$3(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }));
            var floor$3 = Math.floor,
                mergeSort = function e(r, t) {
                    var n = r.length,
                        o = floor$3(n / 2);
                    return n < 8 ? insertionSort(r, t) : merge(e(r.slice(0, o), t), e(r.slice(o), t), t)
                },
                insertionSort = function(e, r) {
                    for (var t, n, o = e.length, a = 1; a < o;) {
                        for (n = a, t = e[a]; n && r(e[n - 1], t) > 0;) e[n] = e[--n];
                        n !== a++ && (e[n] = t)
                    }
                    return e
                },
                merge = function(e, r, t) {
                    for (var n = e.length, o = r.length, a = 0, i = 0, s = []; a < n || i < o;) a < n && i < o ? s.push(t(e[a], r[i]) <= 0 ? e[a++] : r[i++]) : s.push(a < n ? e[a++] : r[i++]);
                    return s
                },
                arraySort = mergeSort,
                firefox = engineUserAgent.match(/firefox\/(\d+)/i),
                engineFfVersion = !!firefox && +firefox[1],
                engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent),
                webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./),
                engineWebkitVersion = !!webkit && +webkit[1],
                aTypedArray$2 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod,
                Uint16Array$1 = global$1.Uint16Array,
                nativeSort$1 = Uint16Array$1 && Uint16Array$1.prototype.sort,
                ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort$1 && !fails((function() {
                    var e = new Uint16Array$1(2);
                    e.sort(null), e.sort({})
                })),
                STABLE_SORT$1 = !!nativeSort$1 && !fails((function() {
                    if (engineV8Version) return engineV8Version < 74;
                    if (engineFfVersion) return engineFfVersion < 67;
                    if (engineIsIeOrEdge) return !0;
                    if (engineWebkitVersion) return engineWebkitVersion < 602;
                    var e, r, t = new Uint16Array$1(516),
                        n = Array(516);
                    for (e = 0; e < 516; e++) r = e % 4, t[e] = 515 - e, n[e] = e - 2 * r + 3;
                    for (t.sort((function(e, r) {
                            return (e / 4 | 0) - (r / 4 | 0)
                        })), e = 0; e < 516; e++)
                        if (t[e] !== n[e]) return !0
                })),
                getSortCompare$1 = function(e) {
                    return function(r, t) {
                        return void 0 !== e ? +e(r, t) || 0 : t != t ? -1 : r != r ? 1 : 0 === r && 0 === t ? 1 / r > 0 && 1 / t < 0 ? 1 : -1 : r > t
                    }
                };
            exportTypedArrayMethod$3("sort", (function(e) {
                if (void 0 !== e && aFunction(e), STABLE_SORT$1) return nativeSort$1.call(this, e);
                aTypedArray$2(this);
                var r, t = toLength(this.length),
                    n = Array(t);
                for (r = 0; r < t; r++) n[r] = this[r];
                for (n = arraySort(this, getSortCompare$1(e)), r = 0; r < t; r++) this[r] = n[r];
                return this
            }), !STABLE_SORT$1 || ACCEPT_INCORRECT_ARGUMENTS);
            var aTypedArray$1 = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;
            exportTypedArrayMethod$2("subarray", (function(e, r) {
                var t = aTypedArray$1(this),
                    n = t.length,
                    o = toAbsoluteIndex(e, n);
                return new(typedArraySpeciesConstructor(t))(t.buffer, t.byteOffset + o * t.BYTES_PER_ELEMENT, toLength((void 0 === r ? n : toAbsoluteIndex(r, n)) - o))
            }));
            var Int8Array$1 = global$1.Int8Array,
                aTypedArray = arrayBufferViewCore.aTypedArray,
                exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod,
                $toLocaleString = [].toLocaleString,
                $slice = [].slice,
                TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails((function() {
                    $toLocaleString.call(new Int8Array$1(1))
                })),
                FORCED$2 = fails((function() {
                    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString()
                })) || !fails((function() {
                    Int8Array$1.prototype.toLocaleString.call([1, 2])
                }));
            exportTypedArrayMethod$1("toLocaleString", (function() {
                return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments)
            }), FORCED$2);
            var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod,
                Uint8Array$1 = global$1.Uint8Array,
                Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {},
                arrayToString = [].toString,
                arrayJoin = [].join;
            fails((function() {
                arrayToString.call({})
            })) && (arrayToString = function() {
                return arrayJoin.call(this)
            });
            var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
            exportTypedArrayMethod("toString", arrayToString, IS_NOT_ARRAY_METHOD);
            var createProperty = function(e, r, t) {
                    var n = toPropertyKey(r);
                    n in e ? objectDefineProperty.f(e, n, createPropertyDescriptor(0, t)) : e[n] = t
                },
                SPECIES$1 = wellKnownSymbol("species"),
                arrayMethodHasSpeciesSupport = function(e) {
                    return engineV8Version >= 51 || !fails((function() {
                        var r = [];
                        return (r.constructor = {})[SPECIES$1] = function() {
                            return {
                                foo: 1
                            }
                        }, 1 !== r[e](Boolean).foo
                    }))
                },
                HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport("slice"),
                SPECIES = wellKnownSymbol("species"),
                nativeSlice = [].slice,
                max$1 = Math.max;
            _export({
                target: "Array",
                proto: !0,
                forced: !HAS_SPECIES_SUPPORT$1
            }, {
                slice: function(e, r) {
                    var t, n, o, a = toIndexedObject(this),
                        i = toLength(a.length),
                        s = toAbsoluteIndex(e, i),
                        c = toAbsoluteIndex(void 0 === r ? i : r, i);
                    if (isArray(a) && ("function" != typeof(t = a.constructor) || t !== Array && !isArray(t.prototype) ? isObject(t) && null === (t = t[SPECIES]) && (t = void 0) : t = void 0, t === Array || void 0 === t)) return nativeSlice.call(a, s, c);
                    for (n = new(void 0 === t ? Array : t)(max$1(c - s, 0)), o = 0; s < c; s++, o++) s in a && createProperty(n, o, a[s]);
                    return n.length = o, n
                }
            }), typedArrayConstructor("Uint32", (function(e) {
                return function(r, t, n) {
                    return e(this, r, t, n)
                }
            })), typedArrayConstructor("Uint16", (function(e) {
                return function(r, t, n) {
                    return e(this, r, t, n)
                }
            }));
            var $filter = arrayIteration.filter,
                HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
            _export({
                target: "Array",
                proto: !0,
                forced: !HAS_SPECIES_SUPPORT
            }, {
                filter: function(e) {
                    return $filter(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            });
            var TO_STRING = "toString",
                RegExpPrototype = RegExp.prototype,
                nativeToString = RegExpPrototype[TO_STRING],
                NOT_GENERIC = fails((function() {
                    return "/a/b" != nativeToString.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                INCORRECT_NAME = nativeToString.name != TO_STRING;
            (NOT_GENERIC || INCORRECT_NAME) && redefine(RegExp.prototype, TO_STRING, (function() {
                var e = anObject(this),
                    r = toString(e.source),
                    t = e.flags;
                return "/" + r + "/" + toString(void 0 === t && e instanceof RegExp && !("flags" in RegExpPrototype) ? regexpFlags.call(e) : t)
            }), {
                unsafe: !0
            });
            var test = [],
                nativeSort = test.sort,
                FAILS_ON_UNDEFINED = fails((function() {
                    test.sort(void 0)
                })),
                FAILS_ON_NULL = fails((function() {
                    test.sort(null)
                })),
                STRICT_METHOD$1 = arrayMethodIsStrict("sort"),
                STABLE_SORT = !fails((function() {
                    if (engineV8Version) return engineV8Version < 70;
                    if (!(engineFfVersion && engineFfVersion > 3)) {
                        if (engineIsIeOrEdge) return !0;
                        if (engineWebkitVersion) return engineWebkitVersion < 603;
                        var e, r, t, n, o = "";
                        for (e = 65; e < 76; e++) {
                            switch (r = String.fromCharCode(e), e) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    t = 3;
                                    break;
                                case 68:
                                case 71:
                                    t = 4;
                                    break;
                                default:
                                    t = 2
                            }
                            for (n = 0; n < 47; n++) test.push({
                                k: r + n,
                                v: t
                            })
                        }
                        for (test.sort((function(e, r) {
                                return r.v - e.v
                            })), n = 0; n < test.length; n++) r = test[n].k.charAt(0), o.charAt(o.length - 1) !== r && (o += r);
                        return "DGBEFHACIJK" !== o
                    }
                })),
                FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT,
                getSortCompare = function(e) {
                    return function(r, t) {
                        return void 0 === t ? -1 : void 0 === r ? 1 : void 0 !== e ? +e(r, t) || 0 : toString(r) > toString(t) ? 1 : -1
                    }
                };
            _export({
                target: "Array",
                proto: !0,
                forced: FORCED$1
            }, {
                sort: function(e) {
                    void 0 !== e && aFunction(e);
                    var r = toObject(this);
                    if (STABLE_SORT) return void 0 === e ? nativeSort.call(r) : nativeSort.call(r, e);
                    var t, n, o = [],
                        a = toLength(r.length);
                    for (n = 0; n < a; n++) n in r && o.push(r[n]);
                    for (t = (o = arraySort(o, getSortCompare(e))).length, n = 0; n < t;) r[n] = o[n++];
                    for (; n < a;) delete r[n++];
                    return r
                }
            });
            var UZIP_1 = createCommonjsModule((function(e) {
                    var r, t, n = {};
                    e.exports = n, n.parse = function(e, r) {
                            for (var t = n.bin.readUshort, o = n.bin.readUint, a = 0, i = {}, s = new Uint8Array(e), c = s.length - 4; 101010256 != o(s, c);) c--;
                            a = c, a += 4;
                            var l = t(s, a += 4);
                            t(s, a += 2);
                            var u = o(s, a += 2),
                                f = o(s, a += 4);
                            a += 4, a = f;
                            for (var p = 0; p < l; p++) {
                                o(s, a), a += 4, a += 4, a += 4, o(s, a += 4), u = o(s, a += 4);
                                var d = o(s, a += 4),
                                    y = t(s, a += 4),
                                    h = t(s, a + 2),
                                    g = t(s, a + 4);
                                a += 6;
                                var A = o(s, a += 8);
                                a += 4, a += y + h + g, n._readLocal(s, A, i, u, d, r)
                            }
                            return i
                        }, n._readLocal = function(e, r, t, o, a, i) {
                            var s = n.bin.readUshort,
                                c = n.bin.readUint;
                            c(e, r), s(e, r += 4), s(e, r += 2);
                            var l = s(e, r += 2);
                            c(e, r += 2), c(e, r += 4), r += 4;
                            var u = s(e, r += 8),
                                f = s(e, r += 2);
                            r += 2;
                            var p = n.bin.readUTF8(e, r, u);
                            if (r += u, r += f, i) t[p] = {
                                size: a,
                                csize: o
                            };
                            else {
                                var d = new Uint8Array(e.buffer, r);
                                if (0 == l) t[p] = new Uint8Array(d.buffer.slice(r, r + o));
                                else {
                                    if (8 != l) throw "unknown compression method: " + l;
                                    var y = new Uint8Array(a);
                                    n.inflateRaw(d, y), t[p] = y
                                }
                            }
                        }, n.inflateRaw = function(e, r) {
                            return n.F.inflate(e, r)
                        }, n.inflate = function(e, r) {
                            return e[0], e[1], n.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6), r)
                        }, n.deflate = function(e, r) {
                            null == r && (r = {
                                level: 6
                            });
                            var t = 0,
                                o = new Uint8Array(50 + Math.floor(1.1 * e.length));
                            o[t] = 120, o[t + 1] = 156, t += 2, t = n.F.deflateRaw(e, o, t, r.level);
                            var a = n.adler(e, 0, e.length);
                            return o[t + 0] = a >>> 24 & 255, o[t + 1] = a >>> 16 & 255, o[t + 2] = a >>> 8 & 255, o[t + 3] = a >>> 0 & 255, new Uint8Array(o.buffer, 0, t + 4)
                        }, n.deflateRaw = function(e, r) {
                            null == r && (r = {
                                level: 6
                            });
                            var t = new Uint8Array(50 + Math.floor(1.1 * e.length)),
                                o = n.F.deflateRaw(e, t, o, r.level);
                            return new Uint8Array(t.buffer, 0, o)
                        }, n.encode = function(e, r) {
                            null == r && (r = !1);
                            var t = 0,
                                o = n.bin.writeUint,
                                a = n.bin.writeUshort,
                                i = {};
                            for (var s in e) {
                                var c = !n._noNeed(s) && !r,
                                    l = e[s],
                                    u = n.crc.crc(l, 0, l.length);
                                i[s] = {
                                    cpr: c,
                                    usize: l.length,
                                    crc: u,
                                    file: c ? n.deflateRaw(l) : l
                                }
                            }
                            for (var s in i) t += i[s].file.length + 30 + 46 + 2 * n.bin.sizeUTF8(s);
                            t += 22;
                            var f = new Uint8Array(t),
                                p = 0,
                                d = [];
                            for (var s in i) {
                                var y = i[s];
                                d.push(p), p = n._writeHeader(f, p, s, y, 0)
                            }
                            var h = 0,
                                g = p;
                            for (var s in i) y = i[s], d.push(p), p = n._writeHeader(f, p, s, y, 1, d[h++]);
                            var A = p - g;
                            return o(f, p, 101010256), p += 4, a(f, p += 4, h), a(f, p += 2, h), o(f, p += 2, A), o(f, p += 4, g), p += 4, p += 2, f.buffer
                        }, n._noNeed = function(e) {
                            var r = e.split(".").pop().toLowerCase();
                            return -1 != "png,jpg,jpeg,zip".indexOf(r)
                        }, n._writeHeader = function(e, r, t, o, a, i) {
                            var s = n.bin.writeUint,
                                c = n.bin.writeUshort,
                                l = o.file;
                            return s(e, r, 0 == a ? 67324752 : 33639248), r += 4, 1 == a && (r += 2), c(e, r, 20), c(e, r += 2, 0), c(e, r += 2, o.cpr ? 8 : 0), s(e, r += 2, 0), s(e, r += 4, o.crc), s(e, r += 4, l.length), s(e, r += 4, o.usize), c(e, r += 4, n.bin.sizeUTF8(t)), c(e, r += 2, 0), r += 2, 1 == a && (r += 2, r += 2, s(e, r += 6, i), r += 4), r += n.bin.writeUTF8(e, r, t), 0 == a && (e.set(l, r), r += l.length), r
                        }, n.crc = {
                            table: function() {
                                for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
                                    for (var t = r, n = 0; n < 8; n++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                                    e[r] = t
                                }
                                return e
                            }(),
                            update: function(e, r, t, o) {
                                for (var a = 0; a < o; a++) e = n.crc.table[255 & (e ^ r[t + a])] ^ e >>> 8;
                                return e
                            },
                            crc: function(e, r, t) {
                                return 4294967295 ^ n.crc.update(4294967295, e, r, t)
                            }
                        }, n.adler = function(e, r, t) {
                            for (var n = 1, o = 0, a = r, i = r + t; a < i;) {
                                for (var s = Math.min(a + 5552, i); a < s;) o += n += e[a++];
                                n %= 65521, o %= 65521
                            }
                            return o << 16 | n
                        }, n.bin = {
                            readUshort: function(e, r) {
                                return e[r] | e[r + 1] << 8
                            },
                            writeUshort: function(e, r, t) {
                                e[r] = 255 & t, e[r + 1] = t >> 8 & 255
                            },
                            readUint: function(e, r) {
                                return 16777216 * e[r + 3] + (e[r + 2] << 16 | e[r + 1] << 8 | e[r])
                            },
                            writeUint: function(e, r, t) {
                                e[r] = 255 & t, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255
                            },
                            readASCII: function(e, r, t) {
                                for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[r + o]);
                                return n
                            },
                            writeASCII: function(e, r, t) {
                                for (var n = 0; n < t.length; n++) e[r + n] = t.charCodeAt(n)
                            },
                            pad: function(e) {
                                return e.length < 2 ? "0" + e : e
                            },
                            readUTF8: function(e, r, t) {
                                for (var o, a = "", i = 0; i < t; i++) a += "%" + n.bin.pad(e[r + i].toString(16));
                                try {
                                    o = decodeURIComponent(a)
                                } catch (o) {
                                    return n.bin.readASCII(e, r, t)
                                }
                                return o
                            },
                            writeUTF8: function(e, r, t) {
                                for (var n = t.length, o = 0, a = 0; a < n; a++) {
                                    var i = t.charCodeAt(a);
                                    if (0 == (4294967168 & i)) e[r + o] = i, o++;
                                    else if (0 == (4294965248 & i)) e[r + o] = 192 | i >> 6, e[r + o + 1] = 128 | i >> 0 & 63, o += 2;
                                    else if (0 == (4294901760 & i)) e[r + o] = 224 | i >> 12, e[r + o + 1] = 128 | i >> 6 & 63, e[r + o + 2] = 128 | i >> 0 & 63, o += 3;
                                    else {
                                        if (0 != (4292870144 & i)) throw "e";
                                        e[r + o] = 240 | i >> 18, e[r + o + 1] = 128 | i >> 12 & 63, e[r + o + 2] = 128 | i >> 6 & 63, e[r + o + 3] = 128 | i >> 0 & 63, o += 4
                                    }
                                }
                                return o
                            },
                            sizeUTF8: function(e) {
                                for (var r = e.length, t = 0, n = 0; n < r; n++) {
                                    var o = e.charCodeAt(n);
                                    if (0 == (4294967168 & o)) t++;
                                    else if (0 == (4294965248 & o)) t += 2;
                                    else if (0 == (4294901760 & o)) t += 3;
                                    else {
                                        if (0 != (4292870144 & o)) throw "e";
                                        t += 4
                                    }
                                }
                                return t
                            }
                        }, n.F = {}, n.F.deflateRaw = function(e, r, t, o) {
                            var a = [
                                    [0, 0, 0, 0, 0],
                                    [4, 4, 8, 4, 0],
                                    [4, 5, 16, 8, 0],
                                    [4, 6, 16, 16, 0],
                                    [4, 10, 16, 32, 0],
                                    [8, 16, 32, 32, 0],
                                    [8, 16, 128, 128, 0],
                                    [8, 32, 128, 256, 0],
                                    [32, 128, 258, 1024, 1],
                                    [32, 258, 258, 4096, 1]
                                ][o],
                                i = n.F.U,
                                s = n.F._goodIndex;
                            n.F._hash;
                            var c = n.F._putsE,
                                l = 0,
                                u = t << 3,
                                f = 0,
                                p = e.length;
                            if (0 == o) {
                                for (; l < p;) c(r, u, l + (b = Math.min(65535, p - l)) == p ? 1 : 0), u = n.F._copyExact(e, l, b, r, u + 8), l += b;
                                return u >>> 3
                            }
                            var d = i.lits,
                                y = i.strt,
                                h = i.prev,
                                g = 0,
                                A = 0,
                                v = 0,
                                m = 0,
                                E = 0,
                                I = 0;
                            for (p > 2 && (y[I = n.F._hash(e, 0)] = 0), l = 0; l < p; l++) {
                                if (E = I, l + 1 < p - 2) {
                                    I = n.F._hash(e, l + 1);
                                    var P = l + 1 & 32767;
                                    h[P] = y[I], y[I] = P
                                }
                                if (f <= l) {
                                    (g > 14e3 || A > 26697) && p - l > 100 && (f < l && (d[g] = l - f, g += 2, f = l), u = n.F._writeBlock(l == p - 1 || f == p ? 1 : 0, d, g, m, e, v, l - v, r, u), g = A = m = 0, v = l);
                                    var T = 0;
                                    l < p - 2 && (T = n.F._bestMatch(e, l, h, E, Math.min(a[2], p - l), a[3]));
                                    var b = T >>> 16,
                                        S = 65535 & T;
                                    if (0 != T) {
                                        S = 65535 & T;
                                        var R = s(b = T >>> 16, i.of0);
                                        i.lhst[257 + R]++;
                                        var _ = s(S, i.df0);
                                        i.dhst[_]++, m += i.exb[R] + i.dxb[_], d[g] = b << 23 | l - f, d[g + 1] = S << 16 | R << 8 | _, g += 2, f = l + b
                                    } else i.lhst[e[l]]++;
                                    A++
                                }
                            }
                            for (v == l && 0 != e.length || (f < l && (d[g] = l - f, g += 2, f = l), u = n.F._writeBlock(1, d, g, m, e, v, l - v, r, u), g = 0, A = 0, g = A = m = 0, v = l); 0 != (7 & u);) u++;
                            return u >>> 3
                        }, n.F._bestMatch = function(e, r, t, o, a, i) {
                            var s = 32767 & r,
                                c = t[s],
                                l = s - c + 32768 & 32767;
                            if (c == s || o != n.F._hash(e, r - l)) return 0;
                            for (var u = 0, f = 0, p = Math.min(32767, r); l <= p && 0 != --i && c != s;) {
                                if (0 == u || e[r + u] == e[r + u - l]) {
                                    var d = n.F._howLong(e, r, l);
                                    if (d > u) {
                                        if (f = l, (u = d) >= a) break;
                                        l + 2 < d && (d = l + 2);
                                        for (var y = 0, h = 0; h < d - 2; h++) {
                                            var g = r - l + h + 32768 & 32767,
                                                A = g - t[g] + 32768 & 32767;
                                            A > y && (y = A, c = g)
                                        }
                                    }
                                }
                                l += (s = c) - (c = t[s]) + 32768 & 32767
                            }
                            return u << 16 | f
                        }, n.F._howLong = function(e, r, t) {
                            if (e[r] != e[r - t] || e[r + 1] != e[r + 1 - t] || e[r + 2] != e[r + 2 - t]) return 0;
                            var n = r,
                                o = Math.min(e.length, r + 258);
                            for (r += 3; r < o && e[r] == e[r - t];) r++;
                            return r - n
                        }, n.F._hash = function(e, r) {
                            return (e[r] << 8 | e[r + 1]) + (e[r + 2] << 4) & 65535
                        }, n.saved = 0, n.F._writeBlock = function(e, r, t, o, a, i, s, c, l) {
                            var u, f, p, d, y, h, g, A, v, m = n.F.U,
                                E = n.F._putsF,
                                I = n.F._putsE;
                            m.lhst[256]++, f = (u = n.F.getTrees())[0], p = u[1], d = u[2], y = u[3], h = u[4], g = u[5], A = u[6], v = u[7];
                            var P = 32 + (0 == (l + 3 & 7) ? 0 : 8 - (l + 3 & 7)) + (s << 3),
                                T = o + n.F.contSize(m.fltree, m.lhst) + n.F.contSize(m.fdtree, m.dhst),
                                b = o + n.F.contSize(m.ltree, m.lhst) + n.F.contSize(m.dtree, m.dhst);
                            b += 14 + 3 * g + n.F.contSize(m.itree, m.ihst) + (2 * m.ihst[16] + 3 * m.ihst[17] + 7 * m.ihst[18]);
                            for (var S = 0; S < 286; S++) m.lhst[S] = 0;
                            for (S = 0; S < 30; S++) m.dhst[S] = 0;
                            for (S = 0; S < 19; S++) m.ihst[S] = 0;
                            var R = P < T && P < b ? 0 : T < b ? 1 : 2;
                            if (E(c, l, e), E(c, l + 1, R), l += 3, 0 == R) {
                                for (; 0 != (7 & l);) l++;
                                l = n.F._copyExact(a, i, s, c, l)
                            } else {
                                var _, w;
                                if (1 == R && (_ = m.fltree, w = m.fdtree), 2 == R) {
                                    n.F.makeCodes(m.ltree, f), n.F.revCodes(m.ltree, f), n.F.makeCodes(m.dtree, p), n.F.revCodes(m.dtree, p), n.F.makeCodes(m.itree, d), n.F.revCodes(m.itree, d), _ = m.ltree, w = m.dtree, I(c, l, y - 257), I(c, l += 5, h - 1), I(c, l += 5, g - 4), l += 4;
                                    for (var U = 0; U < g; U++) I(c, l + 3 * U, m.itree[1 + (m.ordr[U] << 1)]);
                                    l += 3 * g, l = n.F._codeTiny(A, m.itree, c, l), l = n.F._codeTiny(v, m.itree, c, l)
                                }
                                for (var N = i, O = 0; O < t; O += 2) {
                                    for (var C = r[O], $ = C >>> 23, L = N + (8388607 & C); N < L;) l = n.F._writeLit(a[N++], _, c, l);
                                    if (0 != $) {
                                        var x = r[O + 1],
                                            M = x >> 16,
                                            F = x >> 8 & 255,
                                            D = 255 & x;
                                        I(c, l = n.F._writeLit(257 + F, _, c, l), $ - m.of0[F]), l += m.exb[F], E(c, l = n.F._writeLit(D, w, c, l), M - m.df0[D]), l += m.dxb[D], N += $
                                    }
                                }
                                l = n.F._writeLit(256, _, c, l)
                            }
                            return l
                        }, n.F._copyExact = function(e, r, t, n, o) {
                            var a = o >>> 3;
                            return n[a] = t, n[a + 1] = t >>> 8, n[a + 2] = 255 - n[a], n[a + 3] = 255 - n[a + 1], a += 4, n.set(new Uint8Array(e.buffer, r, t), a), o + (t + 4 << 3)
                        }, n.F.getTrees = function() {
                            for (var e = n.F.U, r = n.F._hufTree(e.lhst, e.ltree, 15), t = n.F._hufTree(e.dhst, e.dtree, 15), o = [], a = n.F._lenCodes(e.ltree, o), i = [], s = n.F._lenCodes(e.dtree, i), c = 0; c < o.length; c += 2) e.ihst[o[c]]++;
                            for (c = 0; c < i.length; c += 2) e.ihst[i[c]]++;
                            for (var l = n.F._hufTree(e.ihst, e.itree, 7), u = 19; u > 4 && 0 == e.itree[1 + (e.ordr[u - 1] << 1)];) u--;
                            return [r, t, l, a, s, u, o, i]
                        }, n.F.getSecond = function(e) {
                            for (var r = [], t = 0; t < e.length; t += 2) r.push(e[t + 1]);
                            return r
                        }, n.F.nonZero = function(e) {
                            for (var r = "", t = 0; t < e.length; t += 2) 0 != e[t + 1] && (r += (t >> 1) + ",");
                            return r
                        }, n.F.contSize = function(e, r) {
                            for (var t = 0, n = 0; n < r.length; n++) t += r[n] * e[1 + (n << 1)];
                            return t
                        }, n.F._codeTiny = function(e, r, t, o) {
                            for (var a = 0; a < e.length; a += 2) {
                                var i = e[a],
                                    s = e[a + 1];
                                o = n.F._writeLit(i, r, t, o);
                                var c = 16 == i ? 2 : 17 == i ? 3 : 7;
                                i > 15 && (n.F._putsE(t, o, s, c), o += c)
                            }
                            return o
                        }, n.F._lenCodes = function(e, r) {
                            for (var t = e.length; 2 != t && 0 == e[t - 1];) t -= 2;
                            for (var n = 0; n < t; n += 2) {
                                var o = e[n + 1],
                                    a = n + 3 < t ? e[n + 3] : -1,
                                    i = n + 5 < t ? e[n + 5] : -1,
                                    s = 0 == n ? -1 : e[n - 1];
                                if (0 == o && a == o && i == o) {
                                    for (var c = n + 5; c + 2 < t && e[c + 2] == o;) c += 2;
                                    (l = Math.min(c + 1 - n >>> 1, 138)) < 11 ? r.push(17, l - 3) : r.push(18, l - 11), n += 2 * l - 2
                                } else if (o == s && a == o && i == o) {
                                    for (c = n + 5; c + 2 < t && e[c + 2] == o;) c += 2;
                                    var l = Math.min(c + 1 - n >>> 1, 6);
                                    r.push(16, l - 3), n += 2 * l - 2
                                } else r.push(o, 0)
                            }
                            return t >>> 1
                        }, n.F._hufTree = function(e, r, t) {
                            var o = [],
                                a = e.length,
                                i = r.length,
                                s = 0;
                            for (s = 0; s < i; s += 2) r[s] = 0, r[s + 1] = 0;
                            for (s = 0; s < a; s++) 0 != e[s] && o.push({
                                lit: s,
                                f: e[s]
                            });
                            var c = o.length,
                                l = o.slice(0);
                            if (0 == c) return 0;
                            if (1 == c) {
                                var u = o[0].lit;
                                return l = 0 == u ? 1 : 0, r[1 + (u << 1)] = 1, r[1 + (l << 1)] = 1, 1
                            }
                            o.sort((function(e, r) {
                                return e.f - r.f
                            }));
                            var f = o[0],
                                p = o[1],
                                d = 0,
                                y = 1,
                                h = 2;
                            for (o[0] = {
                                    lit: -1,
                                    f: f.f + p.f,
                                    l: f,
                                    r: p,
                                    d: 0
                                }; y != c - 1;) f = d != y && (h == c || o[d].f < o[h].f) ? o[d++] : o[h++], p = d != y && (h == c || o[d].f < o[h].f) ? o[d++] : o[h++], o[y++] = {
                                lit: -1,
                                f: f.f + p.f,
                                l: f,
                                r: p
                            };
                            var g = n.F.setDepth(o[y - 1], 0);
                            for (g > t && (n.F.restrictDepth(l, t, g), g = t), s = 0; s < c; s++) r[1 + (l[s].lit << 1)] = l[s].d;
                            return g
                        }, n.F.setDepth = function(e, r) {
                            return -1 != e.lit ? (e.d = r, r) : Math.max(n.F.setDepth(e.l, r + 1), n.F.setDepth(e.r, r + 1))
                        }, n.F.restrictDepth = function(e, r, t) {
                            var n = 0,
                                o = 1 << t - r,
                                a = 0;
                            for (e.sort((function(e, r) {
                                    return r.d == e.d ? e.f - r.f : r.d - e.d
                                })), n = 0; n < e.length && e[n].d > r; n++) {
                                var i = e[n].d;
                                e[n].d = r, a += o - (1 << t - i)
                            }
                            for (a >>>= t - r; a > 0;)(i = e[n].d) < r ? (e[n].d++, a -= 1 << r - i - 1) : n++;
                            for (; n >= 0; n--) e[n].d == r && a < 0 && (e[n].d--, a++);
                            0 != a && console.log("debt left")
                        }, n.F._goodIndex = function(e, r) {
                            var t = 0;
                            return r[16 | t] <= e && (t |= 16), r[8 | t] <= e && (t |= 8), r[4 | t] <= e && (t |= 4), r[2 | t] <= e && (t |= 2), r[1 | t] <= e && (t |= 1), t
                        }, n.F._writeLit = function(e, r, t, o) {
                            return n.F._putsF(t, o, r[e << 1]), o + r[1 + (e << 1)]
                        }, n.F.inflate = function(e, r) {
                            var t = Uint8Array;
                            if (3 == e[0] && 0 == e[1]) return r || new t(0);
                            var o = n.F,
                                a = o._bitsF,
                                i = o._bitsE,
                                s = o._decodeTiny,
                                c = o.makeCodes,
                                l = o.codes2map,
                                u = o._get17,
                                f = o.U,
                                p = null == r;
                            p && (r = new t(e.length >>> 2 << 3));
                            for (var d, y, h = 0, g = 0, A = 0, v = 0, m = 0, E = 0, I = 0, P = 0, T = 0; 0 == h;)
                                if (h = a(e, T, 1), g = a(e, T + 1, 2), T += 3, 0 != g) {
                                    if (p && (r = n.F._check(r, P + (1 << 17))), 1 == g && (d = f.flmap, y = f.fdmap, E = 511, I = 31), 2 == g) {
                                        A = i(e, T, 5) + 257, v = i(e, T + 5, 5) + 1, m = i(e, T + 10, 4) + 4, T += 14;
                                        for (var b = 0; b < 38; b += 2) f.itree[b] = 0, f.itree[b + 1] = 0;
                                        var S = 1;
                                        for (b = 0; b < m; b++) {
                                            var R = i(e, T + 3 * b, 3);
                                            f.itree[1 + (f.ordr[b] << 1)] = R, R > S && (S = R)
                                        }
                                        T += 3 * m, c(f.itree, S), l(f.itree, S, f.imap), d = f.lmap, y = f.dmap, T = s(f.imap, (1 << S) - 1, A + v, e, T, f.ttree);
                                        var _ = o._copyOut(f.ttree, 0, A, f.ltree);
                                        E = (1 << _) - 1;
                                        var w = o._copyOut(f.ttree, A, v, f.dtree);
                                        I = (1 << w) - 1, c(f.ltree, _), l(f.ltree, _, d), c(f.dtree, w), l(f.dtree, w, y)
                                    }
                                    for (;;) {
                                        var U = d[u(e, T) & E];
                                        T += 15 & U;
                                        var N = U >>> 4;
                                        if (N >>> 8 == 0) r[P++] = N;
                                        else {
                                            if (256 == N) break;
                                            var O = P + N - 254;
                                            if (N > 264) {
                                                var C = f.ldef[N - 257];
                                                O = P + (C >>> 3) + i(e, T, 7 & C), T += 7 & C
                                            }
                                            var $ = y[u(e, T) & I];
                                            T += 15 & $;
                                            var L = $ >>> 4,
                                                x = f.ddef[L],
                                                M = (x >>> 4) + a(e, T, 15 & x);
                                            for (T += 15 & x, p && (r = n.F._check(r, P + (1 << 17))); P < O;) r[P] = r[P++ - M], r[P] = r[P++ - M], r[P] = r[P++ - M], r[P] = r[P++ - M];
                                            P = O
                                        }
                                    }
                                } else {
                                    0 != (7 & T) && (T += 8 - (7 & T));
                                    var F = 4 + (T >>> 3),
                                        D = e[F - 4] | e[F - 3] << 8;
                                    p && (r = n.F._check(r, P + D)), r.set(new t(e.buffer, e.byteOffset + F, D), P), T = F + D << 3, P += D
                                }
                            return r.length == P ? r : r.slice(0, P)
                        }, n.F._check = function(e, r) {
                            var t = e.length;
                            if (r <= t) return e;
                            var n = new Uint8Array(Math.max(t << 1, r));
                            return n.set(e, 0), n
                        }, n.F._decodeTiny = function(e, r, t, o, a, i) {
                            for (var s = n.F._bitsE, c = n.F._get17, l = 0; l < t;) {
                                var u = e[c(o, a) & r];
                                a += 15 & u;
                                var f = u >>> 4;
                                if (f <= 15) i[l] = f, l++;
                                else {
                                    var p = 0,
                                        d = 0;
                                    16 == f ? (d = 3 + s(o, a, 2), a += 2, p = i[l - 1]) : 17 == f ? (d = 3 + s(o, a, 3), a += 3) : 18 == f && (d = 11 + s(o, a, 7), a += 7);
                                    for (var y = l + d; l < y;) i[l] = p, l++
                                }
                            }
                            return a
                        }, n.F._copyOut = function(e, r, t, n) {
                            for (var o = 0, a = 0, i = n.length >>> 1; a < t;) {
                                var s = e[a + r];
                                n[a << 1] = 0, n[1 + (a << 1)] = s, s > o && (o = s), a++
                            }
                            for (; a < i;) n[a << 1] = 0, n[1 + (a << 1)] = 0, a++;
                            return o
                        }, n.F.makeCodes = function(e, r) {
                            for (var t, o, a, i, s = n.F.U, c = e.length, l = s.bl_count, u = 0; u <= r; u++) l[u] = 0;
                            for (u = 1; u < c; u += 2) l[e[u]]++;
                            var f = s.next_code;
                            for (t = 0, l[0] = 0, o = 1; o <= r; o++) t = t + l[o - 1] << 1, f[o] = t;
                            for (a = 0; a < c; a += 2) 0 != (i = e[a + 1]) && (e[a] = f[i], f[i]++)
                        }, n.F.codes2map = function(e, r, t) {
                            for (var o = e.length, a = n.F.U.rev15, i = 0; i < o; i += 2)
                                if (0 != e[i + 1])
                                    for (var s = i >> 1, c = e[i + 1], l = s << 4 | c, u = r - c, f = e[i] << u, p = f + (1 << u); f != p;) t[a[f] >>> 15 - r] = l, f++
                        }, n.F.revCodes = function(e, r) {
                            for (var t = n.F.U.rev15, o = 15 - r, a = 0; a < e.length; a += 2) {
                                var i = e[a] << r - e[a + 1];
                                e[a] = t[i] >>> o
                            }
                        }, n.F._putsE = function(e, r, t) {
                            t <<= 7 & r;
                            var n = r >>> 3;
                            e[n] |= t, e[n + 1] |= t >>> 8
                        }, n.F._putsF = function(e, r, t) {
                            t <<= 7 & r;
                            var n = r >>> 3;
                            e[n] |= t, e[n + 1] |= t >>> 8, e[n + 2] |= t >>> 16
                        }, n.F._bitsE = function(e, r, t) {
                            return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << t) - 1
                        }, n.F._bitsF = function(e, r, t) {
                            return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << t) - 1
                        }, n.F._get17 = function(e, r) {
                            return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r)
                        }, n.F._get25 = function(e, r) {
                            return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r)
                        }, n.F.U = (r = Uint16Array, t = Uint32Array, {
                            next_code: new r(16),
                            bl_count: new r(16),
                            ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                            of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                            exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                            ldef: new r(32),
                            df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                            dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                            ddef: new t(32),
                            flmap: new r(512),
                            fltree: [],
                            fdmap: new r(32),
                            fdtree: [],
                            lmap: new r(32768),
                            ltree: [],
                            ttree: [],
                            dmap: new r(32768),
                            dtree: [],
                            imap: new r(512),
                            itree: [],
                            rev15: new r(32768),
                            lhst: new t(286),
                            dhst: new t(30),
                            ihst: new t(19),
                            lits: new t(15e3),
                            strt: new r(65536),
                            prev: new r(32768)
                        }),
                        function() {
                            for (var e = n.F.U, r = 0; r < 32768; r++) {
                                var t = r;
                                t = (4278255360 & (t = (4042322160 & (t = (3435973836 & (t = (2863311530 & t) >>> 1 | (1431655765 & t) << 1)) >>> 2 | (858993459 & t) << 2)) >>> 4 | (252645135 & t) << 4)) >>> 8 | (16711935 & t) << 8, e.rev15[r] = (t >>> 16 | t << 16) >>> 17
                            }

                            function o(e, r, t) {
                                for (; 0 != r--;) e.push(0, t)
                            }
                            for (r = 0; r < 32; r++) e.ldef[r] = e.of0[r] << 3 | e.exb[r], e.ddef[r] = e.df0[r] << 4 | e.dxb[r];
                            o(e.fltree, 144, 8), o(e.fltree, 112, 9), o(e.fltree, 24, 7), o(e.fltree, 8, 8), n.F.makeCodes(e.fltree, 9), n.F.codes2map(e.fltree, 9, e.flmap), n.F.revCodes(e.fltree, 9), o(e.fdtree, 32, 5), n.F.makeCodes(e.fdtree, 5), n.F.codes2map(e.fdtree, 5, e.fdmap), n.F.revCodes(e.fdtree, 5), o(e.itree, 19, 0), o(e.ltree, 286, 0), o(e.dtree, 30, 0), o(e.ttree, 320, 0)
                        }()
                })),
                UZIP = Object.freeze(Object.assign(Object.create(null), UZIP_1, {
                    default: UZIP_1
                })),
                UPNG = {},
                N, W, H;
            UPNG.toRGBA8 = function(e) {
                var r = e.width,
                    t = e.height;
                if (null == e.tabs.acTL) return [UPNG.toRGBA8.decodeImage(e.data, r, t, e).buffer];
                var n = [];
                null == e.frames[0].data && (e.frames[0].data = e.data);
                for (var o = r * t * 4, a = new Uint8Array(o), i = new Uint8Array(o), s = new Uint8Array(o), c = 0; c < e.frames.length; c++) {
                    var l = e.frames[c],
                        u = l.rect.x,
                        f = l.rect.y,
                        p = l.rect.width,
                        d = l.rect.height,
                        y = UPNG.toRGBA8.decodeImage(l.data, p, d, e);
                    if (0 != c)
                        for (var h = 0; h < o; h++) s[h] = a[h];
                    if (0 == l.blend ? UPNG._copyTile(y, p, d, a, r, t, u, f, 0) : 1 == l.blend && UPNG._copyTile(y, p, d, a, r, t, u, f, 1), n.push(a.buffer.slice(0)), 0 == l.dispose);
                    else if (1 == l.dispose) UPNG._copyTile(i, p, d, a, r, t, u, f, 0);
                    else if (2 == l.dispose)
                        for (h = 0; h < o; h++) a[h] = s[h]
                }
                return n
            }, UPNG.toRGBA8.decodeImage = function(e, r, t, n) {
                var o = r * t,
                    a = UPNG.decode._getBPP(n),
                    i = Math.ceil(r * a / 8),
                    s = new Uint8Array(4 * o),
                    c = new Uint32Array(s.buffer),
                    l = n.ctype,
                    u = n.depth,
                    f = UPNG._bin.readUshort;
                if (6 == l) {
                    var p = o << 2;
                    if (8 == u)
                        for (var d = 0; d < p; d += 4) s[d] = e[d], s[d + 1] = e[d + 1], s[d + 2] = e[d + 2], s[d + 3] = e[d + 3];
                    if (16 == u)
                        for (d = 0; d < p; d++) s[d] = e[d << 1]
                } else if (2 == l) {
                    var y = n.tabs.tRNS;
                    if (null == y) {
                        if (8 == u)
                            for (d = 0; d < o; d++) {
                                var h = 3 * d;
                                c[d] = 255 << 24 | e[h + 2] << 16 | e[h + 1] << 8 | e[h]
                            }
                        if (16 == u)
                            for (d = 0; d < o; d++) h = 6 * d, c[d] = 255 << 24 | e[h + 4] << 16 | e[h + 2] << 8 | e[h]
                    } else {
                        var g = y[0],
                            A = y[1],
                            v = y[2];
                        if (8 == u)
                            for (d = 0; d < o; d++) {
                                var m = d << 2;
                                h = 3 * d, c[d] = 255 << 24 | e[h + 2] << 16 | e[h + 1] << 8 | e[h], e[h] == g && e[h + 1] == A && e[h + 2] == v && (s[m + 3] = 0)
                            }
                        if (16 == u)
                            for (d = 0; d < o; d++) m = d << 2, h = 6 * d, c[d] = 255 << 24 | e[h + 4] << 16 | e[h + 2] << 8 | e[h], f(e, h) == g && f(e, h + 2) == A && f(e, h + 4) == v && (s[m + 3] = 0)
                    }
                } else if (3 == l) {
                    var E = n.tabs.PLTE,
                        I = n.tabs.tRNS,
                        P = I ? I.length : 0;
                    if (1 == u)
                        for (var T = 0; T < t; T++) {
                            var b = T * i,
                                S = T * r;
                            for (d = 0; d < r; d++) {
                                m = S + d << 2;
                                var R = 3 * (_ = e[b + (d >> 3)] >> 7 - ((7 & d) << 0) & 1);
                                s[m] = E[R], s[m + 1] = E[R + 1], s[m + 2] = E[R + 2], s[m + 3] = _ < P ? I[_] : 255
                            }
                        }
                    if (2 == u)
                        for (T = 0; T < t; T++)
                            for (b = T * i, S = T * r, d = 0; d < r; d++) m = S + d << 2, R = 3 * (_ = e[b + (d >> 2)] >> 6 - ((3 & d) << 1) & 3), s[m] = E[R], s[m + 1] = E[R + 1], s[m + 2] = E[R + 2], s[m + 3] = _ < P ? I[_] : 255;
                    if (4 == u)
                        for (T = 0; T < t; T++)
                            for (b = T * i, S = T * r, d = 0; d < r; d++) m = S + d << 2, R = 3 * (_ = e[b + (d >> 1)] >> 4 - ((1 & d) << 2) & 15), s[m] = E[R], s[m + 1] = E[R + 1], s[m + 2] = E[R + 2], s[m + 3] = _ < P ? I[_] : 255;
                    if (8 == u)
                        for (d = 0; d < o; d++) {
                            var _;
                            m = d << 2, R = 3 * (_ = e[d]), s[m] = E[R], s[m + 1] = E[R + 1], s[m + 2] = E[R + 2], s[m + 3] = _ < P ? I[_] : 255
                        }
                } else if (4 == l) {
                    if (8 == u)
                        for (d = 0; d < o; d++) {
                            m = d << 2;
                            var w = e[U = d << 1];
                            s[m] = w, s[m + 1] = w, s[m + 2] = w, s[m + 3] = e[U + 1]
                        }
                    if (16 == u)
                        for (d = 0; d < o; d++) {
                            var U;
                            m = d << 2, w = e[U = d << 2], s[m] = w, s[m + 1] = w, s[m + 2] = w, s[m + 3] = e[U + 2]
                        }
                } else if (0 == l)
                    for (g = n.tabs.tRNS ? n.tabs.tRNS : -1, T = 0; T < t; T++) {
                        var N = T * i,
                            O = T * r;
                        if (1 == u)
                            for (var C = 0; C < r; C++) {
                                var $ = (w = 255 * (e[N + (C >>> 3)] >>> 7 - (7 & C) & 1)) == 255 * g ? 0 : 255;
                                c[O + C] = $ << 24 | w << 16 | w << 8 | w
                            } else if (2 == u)
                                for (C = 0; C < r; C++) $ = (w = 85 * (e[N + (C >>> 2)] >>> 6 - ((3 & C) << 1) & 3)) == 85 * g ? 0 : 255, c[O + C] = $ << 24 | w << 16 | w << 8 | w;
                            else if (4 == u)
                            for (C = 0; C < r; C++) $ = (w = 17 * (e[N + (C >>> 1)] >>> 4 - ((1 & C) << 2) & 15)) == 17 * g ? 0 : 255, c[O + C] = $ << 24 | w << 16 | w << 8 | w;
                        else if (8 == u)
                            for (C = 0; C < r; C++) $ = (w = e[N + C]) == g ? 0 : 255, c[O + C] = $ << 24 | w << 16 | w << 8 | w;
                        else if (16 == u)
                            for (C = 0; C < r; C++) w = e[N + (C << 1)], $ = f(e, N + (C << d)) == g ? 0 : 255, c[O + C] = $ << 24 | w << 16 | w << 8 | w
                    }
                return s
            }, UPNG.decode = function(e) {
                for (var r, t = new Uint8Array(e), n = 8, o = UPNG._bin, a = o.readUshort, i = o.readUint, s = {
                        tabs: {},
                        frames: []
                    }, c = new Uint8Array(t.length), l = 0, u = 0, f = [137, 80, 78, 71, 13, 10, 26, 10], p = 0; p < 8; p++)
                    if (t[p] != f[p]) throw "The input is not a PNG file!";
                for (; n < t.length;) {
                    var d = o.readUint(t, n);
                    n += 4;
                    var y = o.readASCII(t, n, 4);
                    if (n += 4, "IHDR" == y) UPNG.decode._IHDR(t, n, s);
                    else if ("CgBI" == y) s.tabs[y] = t.slice(n, n + 4);
                    else if ("IDAT" == y) {
                        for (p = 0; p < d; p++) c[l + p] = t[n + p];
                        l += d
                    } else if ("acTL" == y) s.tabs[y] = {
                        num_frames: i(t, n),
                        num_plays: i(t, n + 4)
                    }, r = new Uint8Array(t.length);
                    else if ("fcTL" == y) {
                        var h;
                        0 != u && ((h = s.frames[s.frames.length - 1]).data = UPNG.decode._decompress(s, r.slice(0, u), h.rect.width, h.rect.height), u = 0);
                        var g = {
                                x: i(t, n + 12),
                                y: i(t, n + 16),
                                width: i(t, n + 4),
                                height: i(t, n + 8)
                            },
                            A = a(t, n + 22);
                        A = a(t, n + 20) / (0 == A ? 100 : A);
                        var v = {
                            rect: g,
                            delay: Math.round(1e3 * A),
                            dispose: t[n + 24],
                            blend: t[n + 25]
                        };
                        s.frames.push(v)
                    } else if ("fdAT" == y) {
                        for (p = 0; p < d - 4; p++) r[u + p] = t[n + p + 4];
                        u += d - 4
                    } else if ("pHYs" == y) s.tabs[y] = [o.readUint(t, n), o.readUint(t, n + 4), t[n + 8]];
                    else if ("cHRM" == y)
                        for (s.tabs[y] = [], p = 0; p < 8; p++) s.tabs[y].push(o.readUint(t, n + 4 * p));
                    else if ("tEXt" == y || "zTXt" == y) {
                        null == s.tabs[y] && (s.tabs[y] = {});
                        var m = o.nextZero(t, n),
                            E = o.readASCII(t, n, m - n),
                            I = n + d - m - 1;
                        if ("tEXt" == y) b = o.readASCII(t, m + 1, I);
                        else {
                            var P = UPNG.decode._inflate(t.slice(m + 2, m + 2 + I));
                            b = o.readUTF8(P, 0, P.length)
                        }
                        s.tabs[y][E] = b
                    } else if ("iTXt" == y) {
                        null == s.tabs[y] && (s.tabs[y] = {}), m = 0;
                        var T = n;
                        m = o.nextZero(t, T), E = o.readASCII(t, T, m - T);
                        var b, S = t[T = m + 1];
                        t[T + 1], T += 2, m = o.nextZero(t, T), o.readASCII(t, T, m - T), T = m + 1, m = o.nextZero(t, T), o.readUTF8(t, T, m - T), I = d - ((T = m + 1) - n), 0 == S ? b = o.readUTF8(t, T, I) : (P = UPNG.decode._inflate(t.slice(T, T + I)), b = o.readUTF8(P, 0, P.length)), s.tabs[y][E] = b
                    } else if ("PLTE" == y) s.tabs[y] = o.readBytes(t, n, d);
                    else if ("hIST" == y) {
                        var R = s.tabs.PLTE.length / 3;
                        for (s.tabs[y] = [], p = 0; p < R; p++) s.tabs[y].push(a(t, n + 2 * p))
                    } else if ("tRNS" == y) 3 == s.ctype ? s.tabs[y] = o.readBytes(t, n, d) : 0 == s.ctype ? s.tabs[y] = a(t, n) : 2 == s.ctype && (s.tabs[y] = [a(t, n), a(t, n + 2), a(t, n + 4)]);
                    else if ("gAMA" == y) s.tabs[y] = o.readUint(t, n) / 1e5;
                    else if ("sRGB" == y) s.tabs[y] = t[n];
                    else if ("bKGD" == y) 0 == s.ctype || 4 == s.ctype ? s.tabs[y] = [a(t, n)] : 2 == s.ctype || 6 == s.ctype ? s.tabs[y] = [a(t, n), a(t, n + 2), a(t, n + 4)] : 3 == s.ctype && (s.tabs[y] = t[n]);
                    else if ("IEND" == y) break;
                    n += d, o.readUint(t, n), n += 4
                }
                return 0 != u && ((h = s.frames[s.frames.length - 1]).data = UPNG.decode._decompress(s, r.slice(0, u), h.rect.width, h.rect.height), u = 0), s.data = UPNG.decode._decompress(s, c, s.width, s.height), delete s.compress, delete s.interlace, delete s.filter, s
            }, UPNG.decode._decompress = function(e, r, t, n) {
                var o = UPNG.decode._getBPP(e),
                    a = Math.ceil(t * o / 8),
                    i = new Uint8Array((a + 1 + e.interlace) * n);
                return r = e.tabs.CgBI ? UPNG.inflateRaw(r, i) : UPNG.decode._inflate(r, i), 0 == e.interlace ? r = UPNG.decode._filterZero(r, e, 0, t, n) : 1 == e.interlace && (r = UPNG.decode._readInterlace(r, e)), r
            }, UPNG.decode._inflate = function(e, r) {
                return UPNG.inflateRaw(new Uint8Array(e.buffer, 2, e.length - 6), r)
            }, UPNG.inflateRaw = (H = {}, H.H = {}, H.H.N = function(e, r) {
                var t, n, o = Uint8Array,
                    a = 0,
                    i = 0,
                    s = 0,
                    c = 0,
                    l = 0,
                    u = 0,
                    f = 0,
                    p = 0,
                    d = 0;
                if (3 == e[0] && 0 == e[1]) return r || new o(0);
                var y = H.H,
                    h = y.b,
                    g = y.e,
                    A = y.R,
                    v = y.n,
                    m = y.A,
                    E = y.Z,
                    I = y.m,
                    P = null == r;
                for (P && (r = new o(e.length >>> 2 << 5)); 0 == a;)
                    if (a = h(e, d, 1), i = h(e, d + 1, 2), d += 3, 0 != i) {
                        if (P && (r = H.H.W(r, p + (1 << 17))), 1 == i && (t = I.J, n = I.h, u = 511, f = 31), 2 == i) {
                            s = g(e, d, 5) + 257, c = g(e, d + 5, 5) + 1, l = g(e, d + 10, 4) + 4, d += 14;
                            for (var T = 1, b = 0; b < 38; b += 2) I.Q[b] = 0, I.Q[b + 1] = 0;
                            for (b = 0; b < l; b++) {
                                var S = g(e, d + 3 * b, 3);
                                I.Q[1 + (I.X[b] << 1)] = S, S > T && (T = S)
                            }
                            d += 3 * l, v(I.Q, T), m(I.Q, T, I.u), t = I.w, n = I.d, d = A(I.u, (1 << T) - 1, s + c, e, d, I.v);
                            var R = y.V(I.v, 0, s, I.C);
                            u = (1 << R) - 1;
                            var _ = y.V(I.v, s, c, I.D);
                            f = (1 << _) - 1, v(I.C, R), m(I.C, R, t), v(I.D, _), m(I.D, _, n)
                        }
                        for (;;) {
                            var w = t[E(e, d) & u];
                            d += 15 & w;
                            var U = w >>> 4;
                            if (U >>> 8 == 0) r[p++] = U;
                            else {
                                if (256 == U) break;
                                var N = p + U - 254;
                                if (U > 264) {
                                    var O = I.q[U - 257];
                                    N = p + (O >>> 3) + g(e, d, 7 & O), d += 7 & O
                                }
                                var C = n[E(e, d) & f];
                                d += 15 & C;
                                var $ = C >>> 4,
                                    L = I.c[$],
                                    x = (L >>> 4) + h(e, d, 15 & L);
                                for (d += 15 & L; p < N;) r[p] = r[p++ - x], r[p] = r[p++ - x], r[p] = r[p++ - x], r[p] = r[p++ - x];
                                p = N
                            }
                        }
                    } else {
                        0 != (7 & d) && (d += 8 - (7 & d));
                        var M = 4 + (d >>> 3),
                            F = e[M - 4] | e[M - 3] << 8;
                        P && (r = H.H.W(r, p + F)), r.set(new o(e.buffer, e.byteOffset + M, F), p), d = M + F << 3, p += F
                    }
                return r.length == p ? r : r.slice(0, p)
            }, H.H.W = function(e, r) {
                var t = e.length;
                if (r <= t) return e;
                var n = new Uint8Array(t << 1);
                return n.set(e, 0), n
            }, H.H.R = function(e, r, t, n, o, a) {
                for (var i = H.H.e, s = H.H.Z, c = 0; c < t;) {
                    var l = e[s(n, o) & r];
                    o += 15 & l;
                    var u = l >>> 4;
                    if (u <= 15) a[c] = u, c++;
                    else {
                        var f = 0,
                            p = 0;
                        16 == u ? (p = 3 + i(n, o, 2), o += 2, f = a[c - 1]) : 17 == u ? (p = 3 + i(n, o, 3), o += 3) : 18 == u && (p = 11 + i(n, o, 7), o += 7);
                        for (var d = c + p; c < d;) a[c] = f, c++
                    }
                }
                return o
            }, H.H.V = function(e, r, t, n) {
                for (var o = 0, a = 0, i = n.length >>> 1; a < t;) {
                    var s = e[a + r];
                    n[a << 1] = 0, n[1 + (a << 1)] = s, s > o && (o = s), a++
                }
                for (; a < i;) n[a << 1] = 0, n[1 + (a << 1)] = 0, a++;
                return o
            }, H.H.n = function(e, r) {
                for (var t, n, o, a, i = H.H.m, s = e.length, c = i.j, l = 0; l <= r; l++) c[l] = 0;
                for (l = 1; l < s; l += 2) c[e[l]]++;
                var u = i.K;
                for (t = 0, c[0] = 0, n = 1; n <= r; n++) t = t + c[n - 1] << 1, u[n] = t;
                for (o = 0; o < s; o += 2) 0 != (a = e[o + 1]) && (e[o] = u[a], u[a]++)
            }, H.H.A = function(e, r, t) {
                for (var n = e.length, o = H.H.m.r, a = 0; a < n; a += 2)
                    if (0 != e[a + 1])
                        for (var i = a >> 1, s = e[a + 1], c = i << 4 | s, l = r - s, u = e[a] << l, f = u + (1 << l); u != f;) t[o[u] >>> 15 - r] = c, u++
            }, H.H.l = function(e, r) {
                for (var t = H.H.m.r, n = 15 - r, o = 0; o < e.length; o += 2) {
                    var a = e[o] << r - e[o + 1];
                    e[o] = t[a] >>> n
                }
            }, H.H.M = function(e, r, t) {
                t <<= 7 & r;
                var n = r >>> 3;
                e[n] |= t, e[n + 1] |= t >>> 8
            }, H.H.I = function(e, r, t) {
                t <<= 7 & r;
                var n = r >>> 3;
                e[n] |= t, e[n + 1] |= t >>> 8, e[n + 2] |= t >>> 16
            }, H.H.e = function(e, r, t) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << t) - 1
            }, H.H.b = function(e, r, t) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << t) - 1
            }, H.H.Z = function(e, r) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r)
            }, H.H.i = function(e, r) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r)
            }, H.H.m = (N = Uint16Array, W = Uint32Array, {
                K: new N(16),
                j: new N(16),
                X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                q: new N(32),
                p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                c: new W(32),
                J: new N(512),
                _: [],
                h: new N(32),
                $: [],
                w: new N(32768),
                C: [],
                v: [],
                d: new N(32768),
                D: [],
                u: new N(512),
                Q: [],
                r: new N(32768),
                s: new W(286),
                Y: new W(30),
                a: new W(19),
                t: new W(15e3),
                k: new N(65536),
                g: new N(32768)
            }), function() {
                for (var e = H.H.m, r = 0; r < 32768; r++) {
                    var t = r;
                    t = (4278255360 & (t = (4042322160 & (t = (3435973836 & (t = (2863311530 & t) >>> 1 | (1431655765 & t) << 1)) >>> 2 | (858993459 & t) << 2)) >>> 4 | (252645135 & t) << 4)) >>> 8 | (16711935 & t) << 8, e.r[r] = (t >>> 16 | t << 16) >>> 17
                }

                function n(e, r, t) {
                    for (; 0 != r--;) e.push(0, t)
                }
                for (r = 0; r < 32; r++) e.q[r] = e.S[r] << 3 | e.T[r], e.c[r] = e.p[r] << 4 | e.z[r];
                n(e._, 144, 8), n(e._, 112, 9), n(e._, 24, 7), n(e._, 8, 8), H.H.n(e._, 9), H.H.A(e._, 9, e.J), H.H.l(e._, 9), n(e.$, 32, 5), H.H.n(e.$, 5), H.H.A(e.$, 5, e.h), H.H.l(e.$, 5), n(e.Q, 19, 0), n(e.C, 286, 0), n(e.D, 30, 0), n(e.v, 320, 0)
            }(), H.H.N), UPNG.decode._readInterlace = function(e, r) {
                for (var t = r.width, n = r.height, o = UPNG.decode._getBPP(r), a = o >> 3, i = Math.ceil(t * o / 8), s = new Uint8Array(n * i), c = 0, l = [0, 0, 4, 0, 2, 0, 1], u = [0, 4, 0, 2, 0, 1, 0], f = [8, 8, 8, 4, 4, 2, 2], p = [8, 8, 4, 4, 2, 2, 1], d = 0; d < 7;) {
                    for (var y = f[d], h = p[d], g = 0, A = 0, v = l[d]; v < n;) v += y, A++;
                    for (var m = u[d]; m < t;) m += h, g++;
                    var E = Math.ceil(g * o / 8);
                    UPNG.decode._filterZero(e, r, c, g, A);
                    for (var I = 0, P = l[d]; P < n;) {
                        for (var T = u[d], b = c + I * E << 3; T < t;) {
                            var S;
                            if (1 == o && (S = (S = e[b >> 3]) >> 7 - (7 & b) & 1, s[P * i + (T >> 3)] |= S << 7 - ((7 & T) << 0)), 2 == o && (S = (S = e[b >> 3]) >> 6 - (7 & b) & 3, s[P * i + (T >> 2)] |= S << 6 - ((3 & T) << 1)), 4 == o && (S = (S = e[b >> 3]) >> 4 - (7 & b) & 15, s[P * i + (T >> 1)] |= S << 4 - ((1 & T) << 2)), o >= 8)
                                for (var R = P * i + T * a, _ = 0; _ < a; _++) s[R + _] = e[(b >> 3) + _];
                            b += o, T += h
                        }
                        I++, P += y
                    }
                    g * A != 0 && (c += A * (1 + E)), d += 1
                }
                return s
            }, UPNG.decode._getBPP = function(e) {
                return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
            }, UPNG.decode._filterZero = function(e, r, t, n, o) {
                var a = UPNG.decode._getBPP(r),
                    i = Math.ceil(n * a / 8),
                    s = UPNG.decode._paeth;
                a = Math.ceil(a / 8);
                var c = 0,
                    l = 1,
                    u = e[t],
                    f = 0;
                if (u > 1 && (e[t] = [0, 0, 1][u - 2]), 3 == u)
                    for (f = a; f < i; f++) e[f + 1] = e[f + 1] + (e[f + 1 - a] >>> 1) & 255;
                for (var p = 0; p < o; p++)
                    if (f = 0, 0 == (u = e[(l = (c = t + p * i) + p + 1) - 1]))
                        for (; f < i; f++) e[c + f] = e[l + f];
                    else if (1 == u) {
                    for (; f < a; f++) e[c + f] = e[l + f];
                    for (; f < i; f++) e[c + f] = e[l + f] + e[c + f - a]
                } else if (2 == u)
                    for (; f < i; f++) e[c + f] = e[l + f] + e[c + f - i];
                else if (3 == u) {
                    for (; f < a; f++) e[c + f] = e[l + f] + (e[c + f - i] >>> 1);
                    for (; f < i; f++) e[c + f] = e[l + f] + (e[c + f - i] + e[c + f - a] >>> 1)
                } else {
                    for (; f < a; f++) e[c + f] = e[l + f] + s(0, e[c + f - i], 0);
                    for (; f < i; f++) e[c + f] = e[l + f] + s(e[c + f - a], e[c + f - i], e[c + f - a - i])
                }
                return e
            }, UPNG.decode._paeth = function(e, r, t) {
                var n = e + r - t,
                    o = n - e,
                    a = n - r,
                    i = n - t;
                return o * o <= a * a && o * o <= i * i ? e : a * a <= i * i ? r : t
            }, UPNG.decode._IHDR = function(e, r, t) {
                var n = UPNG._bin;
                t.width = n.readUint(e, r), r += 4, t.height = n.readUint(e, r), r += 4, t.depth = e[r], r++, t.ctype = e[r], r++, t.compress = e[r], r++, t.filter = e[r], r++, t.interlace = e[r], r++
            }, UPNG._bin = {
                nextZero: function(e, r) {
                    for (; 0 != e[r];) r++;
                    return r
                },
                readUshort: function(e, r) {
                    return e[r] << 8 | e[r + 1]
                },
                writeUshort: function(e, r, t) {
                    e[r] = t >> 8 & 255, e[r + 1] = 255 & t
                },
                readUint: function(e, r) {
                    return 16777216 * e[r] + (e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3])
                },
                writeUint: function(e, r, t) {
                    e[r] = t >> 24 & 255, e[r + 1] = t >> 16 & 255, e[r + 2] = t >> 8 & 255, e[r + 3] = 255 & t
                },
                readASCII: function(e, r, t) {
                    for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[r + o]);
                    return n
                },
                writeASCII: function(e, r, t) {
                    for (var n = 0; n < t.length; n++) e[r + n] = t.charCodeAt(n)
                },
                readBytes: function(e, r, t) {
                    for (var n = [], o = 0; o < t; o++) n.push(e[r + o]);
                    return n
                },
                pad: function(e) {
                    return e.length < 2 ? "0".concat(e) : e
                },
                readUTF8: function(e, r, t) {
                    for (var n, o = "", a = 0; a < t; a++) o += "%".concat(UPNG._bin.pad(e[r + a].toString(16)));
                    try {
                        n = decodeURIComponent(o)
                    } catch (n) {
                        return UPNG._bin.readASCII(e, r, t)
                    }
                    return n
                }
            }, UPNG._copyTile = function(e, r, t, n, o, a, i, s, c) {
                for (var l = Math.min(r, o), u = Math.min(t, a), f = 0, p = 0, d = 0; d < u; d++)
                    for (var y = 0; y < l; y++)
                        if (i >= 0 && s >= 0 ? (f = d * r + y << 2, p = (s + d) * o + i + y << 2) : (f = (-s + d) * r - i + y << 2, p = d * o + y << 2), 0 == c) n[p] = e[f], n[p + 1] = e[f + 1], n[p + 2] = e[f + 2], n[p + 3] = e[f + 3];
                        else if (1 == c) {
                    var h = e[f + 3] * (1 / 255),
                        g = e[f] * h,
                        A = e[f + 1] * h,
                        v = e[f + 2] * h,
                        m = n[p + 3] * (1 / 255),
                        E = n[p] * m,
                        I = n[p + 1] * m,
                        P = n[p + 2] * m,
                        T = 1 - h,
                        b = h + m * T,
                        S = 0 == b ? 0 : 1 / b;
                    n[p + 3] = 255 * b, n[p + 0] = (g + E * T) * S, n[p + 1] = (A + I * T) * S, n[p + 2] = (v + P * T) * S
                } else if (2 == c) h = e[f + 3], g = e[f], A = e[f + 1], v = e[f + 2], m = n[p + 3], E = n[p], I = n[p + 1], P = n[p + 2], h == m && g == E && A == I && v == P ? (n[p] = 0, n[p + 1] = 0, n[p + 2] = 0, n[p + 3] = 0) : (n[p] = g, n[p + 1] = A, n[p + 2] = v, n[p + 3] = h);
                else if (3 == c) {
                    if (h = e[f + 3], g = e[f], A = e[f + 1], v = e[f + 2], m = n[p + 3], E = n[p], I = n[p + 1], P = n[p + 2], h == m && g == E && A == I && v == P) continue;
                    if (h < 220 && m > 20) return !1
                }
                return !0
            }, UPNG.encode = function(e, r, t, n, o, a, i) {
                null == n && (n = 0), null == i && (i = !1);
                var s = UPNG.encode.compress(e, r, t, n, [!1, !1, !1, 0, i]);
                return UPNG.encode.compressPNG(s, -1), UPNG.encode._main(s, r, t, o, a)
            }, UPNG.encodeLL = function(e, r, t, n, o, a, i, s) {
                for (var c = {
                        ctype: 0 + (1 == n ? 0 : 2) + (0 == o ? 0 : 4),
                        depth: a,
                        frames: []
                    }, l = (n + o) * a, u = l * r, f = 0; f < e.length; f++) c.frames.push({
                    rect: {
                        x: 0,
                        y: 0,
                        width: r,
                        height: t
                    },
                    img: new Uint8Array(e[f]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(l / 8),
                    bpl: Math.ceil(u / 8)
                });
                return UPNG.encode.compressPNG(c, 0, !0), UPNG.encode._main(c, r, t, i, s)
            }, UPNG.encode._main = function(e, r, t, n, o) {
                null == o && (o = {});
                var a = UPNG.crc.crc,
                    i = UPNG._bin.writeUint,
                    s = UPNG._bin.writeUshort,
                    c = UPNG._bin.writeASCII,
                    l = 8,
                    u = e.frames.length > 1,
                    f = !1,
                    p = 33 + (u ? 20 : 0);
                if (null != o.sRGB && (p += 13), null != o.pHYs && (p += 21), 3 == e.ctype) {
                    for (var d = e.plte.length, y = 0; y < d; y++) e.plte[y] >>> 24 != 255 && (f = !0);
                    p += 8 + 3 * d + 4 + (f ? 8 + 1 * d + 4 : 0)
                }
                for (var h = 0; h < e.frames.length; h++) u && (p += 38), p += (b = e.frames[h]).cimg.length + 12, 0 != h && (p += 4);
                p += 12;
                var g = new Uint8Array(p),
                    A = [137, 80, 78, 71, 13, 10, 26, 10];
                for (y = 0; y < 8; y++) g[y] = A[y];
                if (i(g, l, 13), c(g, l += 4, "IHDR"), i(g, l += 4, r), i(g, l += 4, t), g[l += 4] = e.depth, g[++l] = e.ctype, g[++l] = 0, g[++l] = 0, g[++l] = 0, i(g, ++l, a(g, l - 17, 17)), l += 4, null != o.sRGB && (i(g, l, 1), c(g, l += 4, "sRGB"), g[l += 4] = o.sRGB, i(g, ++l, a(g, l - 5, 5)), l += 4), null != o.pHYs && (i(g, l, 9), c(g, l += 4, "pHYs"), i(g, l += 4, o.pHYs[0]), i(g, l += 4, o.pHYs[1]), g[l += 4] = o.pHYs[2], i(g, ++l, a(g, l - 13, 13)), l += 4), u && (i(g, l, 8), c(g, l += 4, "acTL"), i(g, l += 4, e.frames.length), i(g, l += 4, null != o.loop ? o.loop : 0), i(g, l += 4, a(g, l - 12, 12)), l += 4), 3 == e.ctype) {
                    for (i(g, l, 3 * (d = e.plte.length)), c(g, l += 4, "PLTE"), l += 4, y = 0; y < d; y++) {
                        var v = 3 * y,
                            m = e.plte[y],
                            E = 255 & m,
                            I = m >>> 8 & 255,
                            P = m >>> 16 & 255;
                        g[l + v + 0] = E, g[l + v + 1] = I, g[l + v + 2] = P
                    }
                    if (i(g, l += 3 * d, a(g, l - 3 * d - 4, 3 * d + 4)), l += 4, f) {
                        for (i(g, l, d), c(g, l += 4, "tRNS"), l += 4, y = 0; y < d; y++) g[l + y] = e.plte[y] >>> 24 & 255;
                        i(g, l += d, a(g, l - d - 4, d + 4)), l += 4
                    }
                }
                var T = 0;
                for (h = 0; h < e.frames.length; h++) {
                    var b = e.frames[h];
                    u && (i(g, l, 26), c(g, l += 4, "fcTL"), i(g, l += 4, T++), i(g, l += 4, b.rect.width), i(g, l += 4, b.rect.height), i(g, l += 4, b.rect.x), i(g, l += 4, b.rect.y), s(g, l += 4, n[h]), s(g, l += 2, 1e3), g[l += 2] = b.dispose, g[++l] = b.blend, i(g, ++l, a(g, l - 30, 30)), l += 4);
                    var S = b.cimg;
                    i(g, l, (d = S.length) + (0 == h ? 0 : 4));
                    var R = l += 4;
                    c(g, l, 0 == h ? "IDAT" : "fdAT"), l += 4, 0 != h && (i(g, l, T++), l += 4), g.set(S, l), i(g, l += d, a(g, R, l - R)), l += 4
                }
                return i(g, l, 0), c(g, l += 4, "IEND"), i(g, l += 4, a(g, l - 4, 4)), l += 4, g.buffer
            }, UPNG.encode.compressPNG = function(e, r, t) {
                for (var n = 0; n < e.frames.length; n++) {
                    var o = e.frames[n];
                    o.rect.width;
                    var a = o.rect.height,
                        i = new Uint8Array(a * o.bpl + a);
                    o.cimg = UPNG.encode._filterZero(o.img, a, o.bpp, o.bpl, i, r, t)
                }
            }, UPNG.encode.compress = function(e, r, t, n, o) {
                for (var a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = 6, f = 8, p = 255, d = 0; d < e.length; d++)
                    for (var y = new Uint8Array(e[d]), h = y.length, g = 0; g < h; g += 4) p &= y[g + 3];
                var A = 255 != p,
                    v = UPNG.encode.framize(e, r, t, a, i, s),
                    m = {},
                    E = [],
                    I = [];
                if (0 != n) {
                    var P = [];
                    for (g = 0; g < v.length; g++) P.push(v[g].img.buffer);
                    var T = UPNG.encode.concatRGBA(P),
                        b = UPNG.quantize(T, n),
                        S = 0,
                        R = new Uint8Array(b.abuf);
                    for (g = 0; g < v.length; g++) {
                        var _ = (W = v[g].img).length;
                        for (I.push(new Uint8Array(b.inds.buffer, S >> 2, _ >> 2)), d = 0; d < _; d += 4) W[d] = R[S + d], W[d + 1] = R[S + d + 1], W[d + 2] = R[S + d + 2], W[d + 3] = R[S + d + 3];
                        S += _
                    }
                    for (g = 0; g < b.plte.length; g++) E.push(b.plte[g].est.rgba)
                } else
                    for (d = 0; d < v.length; d++) {
                        var w = v[d],
                            U = new Uint32Array(w.img.buffer),
                            N = w.rect.width,
                            O = (h = U.length, new Uint8Array(h));
                        for (I.push(O), g = 0; g < h; g++) {
                            var C = U[g];
                            if (0 != g && C == U[g - 1]) O[g] = O[g - 1];
                            else if (g > N && C == U[g - N]) O[g] = O[g - N];
                            else {
                                var $ = m[C];
                                if (null == $ && (m[C] = $ = E.length, E.push(C), E.length >= 300)) break;
                                O[g] = $
                            }
                        }
                    }
                var L = E.length;
                for (L <= 256 && 0 == l && (f = L <= 2 ? 1 : L <= 4 ? 2 : L <= 16 ? 4 : 8, f = Math.max(f, c)), d = 0; d < v.length; d++) {
                    (w = v[d]).rect.x, w.rect.y, N = w.rect.width;
                    var x = w.rect.height,
                        M = w.img;
                    new Uint32Array(M.buffer);
                    var F = 4 * N,
                        D = 4;
                    if (L <= 256 && 0 == l) {
                        F = Math.ceil(f * N / 8);
                        for (var G = new Uint8Array(F * x), B = I[d], j = 0; j < x; j++) {
                            g = j * F;
                            var H = j * N;
                            if (8 == f)
                                for (var V = 0; V < N; V++) G[g + V] = B[H + V];
                            else if (4 == f)
                                for (V = 0; V < N; V++) G[g + (V >> 1)] |= B[H + V] << 4 - 4 * (1 & V);
                            else if (2 == f)
                                for (V = 0; V < N; V++) G[g + (V >> 2)] |= B[H + V] << 6 - 2 * (3 & V);
                            else if (1 == f)
                                for (V = 0; V < N; V++) G[g + (V >> 3)] |= B[H + V] << 7 - 1 * (7 & V)
                        }
                        M = G, u = 3, D = 1
                    } else if (0 == A && 1 == v.length) {
                        G = new Uint8Array(N * x * 3);
                        var k = N * x;
                        for (g = 0; g < k; g++) {
                            var W, Y = 4 * g;
                            G[W = 3 * g] = M[Y], G[W + 1] = M[Y + 1], G[W + 2] = M[Y + 2]
                        }
                        M = G, u = 2, D = 3, F = 3 * N
                    }
                    w.img = M, w.bpl = F, w.bpp = D
                }
                return {
                    ctype: u,
                    depth: f,
                    plte: E,
                    frames: v
                }
            }, UPNG.encode.framize = function(e, r, t, n, o, a) {
                for (var i = [], s = 0; s < e.length; s++) {
                    var c, l = new Uint8Array(e[s]),
                        u = new Uint32Array(l.buffer),
                        f = 0,
                        p = 0,
                        d = r,
                        y = t,
                        h = n ? 1 : 0;
                    if (0 != s) {
                        for (var g = a || n || 1 == s || 0 != i[s - 2].dispose ? 1 : 2, A = 0, v = 1e9, m = 0; m < g; m++) {
                            for (var E = new Uint8Array(e[s - 1 - m]), I = new Uint32Array(e[s - 1 - m]), P = r, T = t, b = -1, S = -1, R = 0; R < t; R++)
                                for (var _ = 0; _ < r; _++) u[L = R * r + _] != I[L] && (_ < P && (P = _), _ > b && (b = _), R < T && (T = R), R > S && (S = R)); - 1 == b && (P = T = b = S = 0), o && (1 == (1 & P) && P--, 1 == (1 & T) && T--);
                            var w = (b - P + 1) * (S - T + 1);
                            w < v && (v = w, A = m, f = P, p = T, d = b - P + 1, y = S - T + 1)
                        }
                        E = new Uint8Array(e[s - 1 - A]), 1 == A && (i[s - 1].dispose = 2), c = new Uint8Array(d * y * 4), UPNG._copyTile(E, r, t, c, d, y, -f, -p, 0), 1 == (h = UPNG._copyTile(l, r, t, c, d, y, -f, -p, 3) ? 1 : 0) ? UPNG.encode._prepareDiff(l, r, t, c, {
                            x: f,
                            y: p,
                            width: d,
                            height: y
                        }) : UPNG._copyTile(l, r, t, c, d, y, -f, -p, 0)
                    } else c = l.slice(0);
                    i.push({
                        rect: {
                            x: f,
                            y: p,
                            width: d,
                            height: y
                        },
                        img: c,
                        blend: h,
                        dispose: 0
                    })
                }
                if (n)
                    for (s = 0; s < i.length; s++)
                        if (1 != (x = i[s]).blend) {
                            var U = x.rect,
                                N = i[s - 1].rect,
                                O = Math.min(U.x, N.x),
                                C = Math.min(U.y, N.y),
                                $ = {
                                    x: O,
                                    y: C,
                                    width: Math.max(U.x + U.width, N.x + N.width) - O,
                                    height: Math.max(U.y + U.height, N.y + N.height) - C
                                };
                            i[s - 1].dispose = 1, s - 1 != 0 && UPNG.encode._updateFrame(e, r, t, i, s - 1, $, o), UPNG.encode._updateFrame(e, r, t, i, s, $, o)
                        }
                if (1 != e.length)
                    for (var L = 0; L < i.length; L++) {
                        var x;
                        (x = i[L]).rect.width, x.rect.height
                    }
                return i
            }, UPNG.encode._updateFrame = function(e, r, t, n, o, a, i) {
                for (var s = Uint8Array, c = Uint32Array, l = new s(e[o - 1]), u = new c(e[o - 1]), f = o + 1 < e.length ? new s(e[o + 1]) : null, p = new s(e[o]), d = new c(p.buffer), y = r, h = t, g = -1, A = -1, v = 0; v < a.height; v++)
                    for (var m = 0; m < a.width; m++) {
                        var E = a.x + m,
                            I = a.y + v,
                            P = I * r + E,
                            T = d[P];
                        0 == T || 0 == n[o - 1].dispose && u[P] == T && (null == f || 0 != f[4 * P + 3]) || (E < y && (y = E), E > g && (g = E), I < h && (h = I), I > A && (A = I))
                    } - 1 == g && (y = h = g = A = 0), i && (1 == (1 & y) && y--, 1 == (1 & h) && h--), a = {
                        x: y,
                        y: h,
                        width: g - y + 1,
                        height: A - h + 1
                    };
                var b = n[o];
                b.rect = a, b.blend = 1, b.img = new Uint8Array(a.width * a.height * 4), 0 == n[o - 1].dispose ? (UPNG._copyTile(l, r, t, b.img, a.width, a.height, -a.x, -a.y, 0), UPNG.encode._prepareDiff(p, r, t, b.img, a)) : UPNG._copyTile(p, r, t, b.img, a.width, a.height, -a.x, -a.y, 0)
            }, UPNG.encode._prepareDiff = function(e, r, t, n, o) {
                UPNG._copyTile(e, r, t, n, o.width, o.height, -o.x, -o.y, 2)
            }, UPNG.encode._filterZero = function(e, r, t, n, o, a, i) {
                var s, c = [],
                    l = [0, 1, 2, 3, 4]; - 1 != a ? l = [a] : (r * n > 5e5 || 1 == t) && (l = [0]), i && (s = {
                    level: 0
                });
                for (var u, f = UZIP, p = 0; p < l.length; p++) {
                    for (var d = 0; d < r; d++) UPNG.encode._filterLine(o, e, d, n, t, l[p]);
                    c.push(f.deflate(o, s))
                }
                var y = 1e9;
                for (p = 0; p < c.length; p++) c[p].length < y && (u = p, y = c[p].length);
                return c[u]
            }, UPNG.encode._filterLine = function(e, r, t, n, o, a) {
                var i = t * n,
                    s = i + t,
                    c = UPNG.decode._paeth;
                if (e[s] = a, s++, 0 == a)
                    if (n < 500)
                        for (var l = 0; l < n; l++) e[s + l] = r[i + l];
                    else e.set(new Uint8Array(r.buffer, i, n), s);
                else if (1 == a) {
                    for (l = 0; l < o; l++) e[s + l] = r[i + l];
                    for (l = o; l < n; l++) e[s + l] = r[i + l] - r[i + l - o] + 256 & 255
                } else if (0 == t) {
                    for (l = 0; l < o; l++) e[s + l] = r[i + l];
                    if (2 == a)
                        for (l = o; l < n; l++) e[s + l] = r[i + l];
                    if (3 == a)
                        for (l = o; l < n; l++) e[s + l] = r[i + l] - (r[i + l - o] >> 1) + 256 & 255;
                    if (4 == a)
                        for (l = o; l < n; l++) e[s + l] = r[i + l] - c(r[i + l - o], 0, 0) + 256 & 255
                } else {
                    if (2 == a)
                        for (l = 0; l < n; l++) e[s + l] = r[i + l] + 256 - r[i + l - n] & 255;
                    if (3 == a) {
                        for (l = 0; l < o; l++) e[s + l] = r[i + l] + 256 - (r[i + l - n] >> 1) & 255;
                        for (l = o; l < n; l++) e[s + l] = r[i + l] + 256 - (r[i + l - n] + r[i + l - o] >> 1) & 255
                    }
                    if (4 == a) {
                        for (l = 0; l < o; l++) e[s + l] = r[i + l] + 256 - c(0, r[i + l - n], 0) & 255;
                        for (l = o; l < n; l++) e[s + l] = r[i + l] + 256 - c(r[i + l - o], r[i + l - n], r[i + l - o - n]) & 255
                    }
                }
            }, UPNG.crc = {
                table: function() {
                    for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
                        for (var t = r, n = 0; n < 8; n++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                        e[r] = t
                    }
                    return e
                }(),
                update: function(e, r, t, n) {
                    for (var o = 0; o < n; o++) e = UPNG.crc.table[255 & (e ^ r[t + o])] ^ e >>> 8;
                    return e
                },
                crc: function(e, r, t) {
                    return 4294967295 ^ UPNG.crc.update(4294967295, e, r, t)
                }
            }, UPNG.quantize = function(e, r) {
                var t, n = new Uint8Array(e),
                    o = n.slice(0),
                    a = new Uint32Array(o.buffer),
                    i = UPNG.quantize.getKDtree(o, r),
                    s = i[0],
                    c = i[1],
                    l = UPNG.quantize.planeDst,
                    u = n,
                    f = a,
                    p = u.length,
                    d = new Uint8Array(n.length >> 2);
                if (n.length < 2e7)
                    for (var y = 0; y < p; y += 4) {
                        var h = u[y] * (1 / 255),
                            g = u[y + 1] * (1 / 255),
                            A = u[y + 2] * (1 / 255),
                            v = u[y + 3] * (1 / 255);
                        t = UPNG.quantize.getNearest(s, h, g, A, v), d[y >> 2] = t.ind, f[y >> 2] = t.est.rgba
                    } else
                        for (y = 0; y < p; y += 4) {
                            for (h = u[y] * (1 / 255), g = u[y + 1] * (1 / 255), A = u[y + 2] * (1 / 255), v = u[y + 3] * (1 / 255), t = s; t.left;) t = l(t.est, h, g, A, v) <= 0 ? t.left : t.right;
                            d[y >> 2] = t.ind, f[y >> 2] = t.est.rgba
                        }
                return {
                    abuf: o.buffer,
                    inds: d,
                    plte: c
                }
            }, UPNG.quantize.getKDtree = function(e, r, t) {
                null == t && (t = 1e-4);
                var n = new Uint32Array(e.buffer),
                    o = {
                        i0: 0,
                        i1: e.length,
                        bst: null,
                        est: null,
                        tdst: 0,
                        left: null,
                        right: null
                    };
                o.bst = UPNG.quantize.stats(e, o.i0, o.i1), o.est = UPNG.quantize.estats(o.bst);
                for (var a = [o]; a.length < r;) {
                    for (var i = 0, s = 0, c = 0; c < a.length; c++) a[c].est.L > i && (i = a[c].est.L, s = c);
                    if (i < t) break;
                    var l = a[s],
                        u = UPNG.quantize.splitPixels(e, n, l.i0, l.i1, l.est.e, l.est.eMq255);
                    if (l.i0 >= u || l.i1 <= u) l.est.L = 0;
                    else {
                        var f = {
                            i0: l.i0,
                            i1: u,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        f.bst = UPNG.quantize.stats(e, f.i0, f.i1), f.est = UPNG.quantize.estats(f.bst);
                        var p = {
                            i0: u,
                            i1: l.i1,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        for (p.bst = {
                                R: [],
                                m: [],
                                N: l.bst.N - f.bst.N
                            }, c = 0; c < 16; c++) p.bst.R[c] = l.bst.R[c] - f.bst.R[c];
                        for (c = 0; c < 4; c++) p.bst.m[c] = l.bst.m[c] - f.bst.m[c];
                        p.est = UPNG.quantize.estats(p.bst), l.left = f, l.right = p, a[s] = f, a.push(p)
                    }
                }
                for (a.sort((function(e, r) {
                        return r.bst.N - e.bst.N
                    })), c = 0; c < a.length; c++) a[c].ind = c;
                return [o, a]
            }, UPNG.quantize.getNearest = function(e, r, t, n, o) {
                if (null == e.left) return e.tdst = UPNG.quantize.dist(e.est.q, r, t, n, o), e;
                var a = UPNG.quantize.planeDst(e.est, r, t, n, o),
                    i = e.left,
                    s = e.right;
                a > 0 && (i = e.right, s = e.left);
                var c = UPNG.quantize.getNearest(i, r, t, n, o);
                if (c.tdst <= a * a) return c;
                var l = UPNG.quantize.getNearest(s, r, t, n, o);
                return l.tdst < c.tdst ? l : c
            }, UPNG.quantize.planeDst = function(e, r, t, n, o) {
                var a = e.e;
                return a[0] * r + a[1] * t + a[2] * n + a[3] * o - e.eMq
            }, UPNG.quantize.dist = function(e, r, t, n, o) {
                var a = r - e[0],
                    i = t - e[1],
                    s = n - e[2],
                    c = o - e[3];
                return a * a + i * i + s * s + c * c
            }, UPNG.quantize.splitPixels = function(e, r, t, n, o, a) {
                var i = UPNG.quantize.vecDot;
                for (n -= 4; t < n;) {
                    for (; i(e, t, o) <= a;) t += 4;
                    for (; i(e, n, o) > a;) n -= 4;
                    if (t >= n) break;
                    var s = r[t >> 2];
                    r[t >> 2] = r[n >> 2], r[n >> 2] = s, t += 4, n -= 4
                }
                for (; i(e, t, o) > a;) t -= 4;
                return t + 4
            }, UPNG.quantize.vecDot = function(e, r, t) {
                return e[r] * t[0] + e[r + 1] * t[1] + e[r + 2] * t[2] + e[r + 3] * t[3]
            }, UPNG.quantize.stats = function(e, r, t) {
                for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], o = [0, 0, 0, 0], a = t - r >> 2, i = r; i < t; i += 4) {
                    var s = e[i] * (1 / 255),
                        c = e[i + 1] * (1 / 255),
                        l = e[i + 2] * (1 / 255),
                        u = e[i + 3] * (1 / 255);
                    o[0] += s, o[1] += c, o[2] += l, o[3] += u, n[0] += s * s, n[1] += s * c, n[2] += s * l, n[3] += s * u, n[5] += c * c, n[6] += c * l, n[7] += c * u, n[10] += l * l, n[11] += l * u, n[15] += u * u
                }
                return n[4] = n[1], n[8] = n[2], n[9] = n[6], n[12] = n[3], n[13] = n[7], n[14] = n[11], {
                    R: n,
                    m: o,
                    N: a
                }
            }, UPNG.quantize.estats = function(e) {
                var r = e.R,
                    t = e.m,
                    n = e.N,
                    o = t[0],
                    a = t[1],
                    i = t[2],
                    s = t[3],
                    c = 0 == n ? 0 : 1 / n,
                    l = [r[0] - o * o * c, r[1] - o * a * c, r[2] - o * i * c, r[3] - o * s * c, r[4] - a * o * c, r[5] - a * a * c, r[6] - a * i * c, r[7] - a * s * c, r[8] - i * o * c, r[9] - i * a * c, r[10] - i * i * c, r[11] - i * s * c, r[12] - s * o * c, r[13] - s * a * c, r[14] - s * i * c, r[15] - s * s * c],
                    u = l,
                    f = UPNG.M4,
                    p = [Math.random(), Math.random(), Math.random(), Math.random()],
                    d = 0,
                    y = 0;
                if (0 != n)
                    for (var h = 0; h < 16 && (p = f.multVec(u, p), y = Math.sqrt(f.dot(p, p)), p = f.sml(1 / y, p), !(0 != h && Math.abs(y - d) < 1e-9)); h++) d = y;
                var g = [o * c, a * c, i * c, s * c];
                return {
                    Cov: l,
                    q: g,
                    e: p,
                    L: d,
                    eMq255: f.dot(f.sml(255, g), p),
                    eMq: f.dot(p, g),
                    rgba: (Math.round(255 * g[3]) << 24 | Math.round(255 * g[2]) << 16 | Math.round(255 * g[1]) << 8 | Math.round(255 * g[0]) << 0) >>> 0
                }
            }, UPNG.M4 = {
                multVec: function(e, r) {
                    return [e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3], e[4] * r[0] + e[5] * r[1] + e[6] * r[2] + e[7] * r[3], e[8] * r[0] + e[9] * r[1] + e[10] * r[2] + e[11] * r[3], e[12] * r[0] + e[13] * r[1] + e[14] * r[2] + e[15] * r[3]]
                },
                dot: function(e, r) {
                    return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3]
                },
                sml: function(e, r) {
                    return [e * r[0], e * r[1], e * r[2], e * r[3]]
                }
            }, UPNG.encode.concatRGBA = function(e) {
                for (var r = 0, t = 0; t < e.length; t++) r += e[t].byteLength;
                var n = new Uint8Array(r),
                    o = 0;
                for (t = 0; t < e.length; t++) {
                    for (var a = new Uint8Array(e[t]), i = a.length, s = 0; s < i; s += 4) {
                        var c = a[s],
                            l = a[s + 1],
                            u = a[s + 2],
                            f = a[s + 3];
                        0 == f && (c = l = u = 0), n[o + s] = c, n[o + s + 1] = l, n[o + s + 2] = u, n[o + s + 3] = f
                    }
                    o += i
                }
                return n.buffer
            };
            var MaxCanvasSize = {
                    chrome: 16384,
                    firefox: 22528,
                    safari: 16384,
                    "internet explorer": 8192,
                    etc: 8192
                },
                isBrowser = "undefined" != typeof window,
                moduleMapper = isBrowser && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"),
                CustomFile = isBrowser && (moduleMapper && moduleMapper.getOriginalSymbol(window, "File") || void 0 !== window.File && File),
                CustomFileReader = isBrowser && (moduleMapper && moduleMapper.getOriginalSymbol(window, "FileReader") || void 0 !== window.FileReader && FileReader);

            function getFilefromDataUrl(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                return new Promise((function(n) {
                    for (var o = e.split(","), a = o[0].match(/:(.*?);/)[1], i = globalThis.atob(o[1]), s = i.length, c = new Uint8Array(s); s--;) c[s] = i.charCodeAt(s);
                    var l = new Blob([c], {
                        type: a
                    });
                    l.name = r, l.lastModified = t, n(l)
                }))
            }

            function getDataUrlFromFile(e) {
                return new Promise((function(r, t) {
                    var n = new CustomFileReader;
                    n.onload = function() {
                        return r(n.result)
                    }, n.onerror = function(e) {
                        return t(e)
                    }, n.readAsDataURL(e)
                }))
            }

            function loadImage(e) {
                return new Promise((function(r, t) {
                    var n = new Image;
                    n.onload = function() {
                        return r(n)
                    }, n.onerror = function(e) {
                        return t(e)
                    }, n.src = e
                }))
            }

            function getBrowserName() {
                var e = "etc";
                return -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Chromium") || (e = "chrome"), -1 !== navigator.userAgent.indexOf("Safari") ? e = "safari" : -1 !== navigator.userAgent.indexOf("Firefox") ? e = "firefox" : -1 === navigator.userAgent.indexOf("MSIE") && 1 != !!document.documentMode || (e = "internet explorer"), e
            }

            function approximateBelowMaximumCanvasSizeOfBrowser(e, r) {
                for (var t = getBrowserName(), n = MaxCanvasSize[t], o = e, a = r, i = o * a, s = o > a ? a / o : o / a; i > n * n;) {
                    var c = (n + o) / 2,
                        l = (n + a) / 2;
                    c < l ? (a = l, o = l * s) : (a = c * s, o = c), i = o * a
                }
                return {
                    width: o,
                    height: a
                }
            }

            function getNewCanvasAndCtx(e, r) {
                var t, n;
                try {
                    if (null === (n = (t = new OffscreenCanvas(e, r)).getContext("2d"))) throw new Error("getContext of OffscreenCanvas returns null")
                } catch (e) {
                    n = (t = document.createElement("canvas")).getContext("2d")
                }
                return t.width = e, t.height = r, [t, n]
            }

            function drawImageInCanvas(e) {
                var r = approximateBelowMaximumCanvasSizeOfBrowser(e.width, e.height),
                    t = _slicedToArray(getNewCanvasAndCtx(r.width, r.height), 2),
                    n = t[0];
                return t[1].drawImage(e, 0, 0, n.width, n.height), n
            }

            function drawFileInCanvas(e) {
                return new Promise((function(r, t) {
                    var n, o, a = function() {
                            try {
                                return o = drawImageInCanvas(n), r([n, o])
                            } catch (e) {
                                return t(e)
                            }
                        },
                        i = function(r) {
                            try {
                                return getDataUrlFromFile(e).then((function(e) {
                                    try {
                                        return loadImage(e).then((function(e) {
                                            try {
                                                return n = e, a()
                                            } catch (e) {
                                                return t(e)
                                            }
                                        }), t)
                                    } catch (e) {
                                        return t(e)
                                    }
                                }), t)
                            } catch (e) {
                                return t(e)
                            }
                        };
                    try {
                        return createImageBitmap(e).then((function(e) {
                            try {
                                return n = e, a()
                            } catch (e) {
                                return i()
                            }
                        }), i)
                    } catch (e) {
                        i()
                    }
                }))
            }

            function canvasToFile(e, r, t, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                return new Promise((function(a, i) {
                    var s, c, l;
                    if ("image/png" === r) return c = e.getContext("2d").getImageData(0, 0, e.width, e.height).data, l = UPNG.encode([c], e.width, e.height, 256 * o), (s = new Blob([l], {
                        type: r
                    })).name = t, s.lastModified = n, f.call(this);
                    var u = function() {
                        return f.call(this)
                    };
                    return "function" == typeof OffscreenCanvas && e instanceof OffscreenCanvas ? e.convertToBlob({
                        type: r,
                        quality: o
                    }).then(function(e) {
                        try {
                            return (s = e).name = t, s.lastModified = n, u.call(this)
                        } catch (e) {
                            return i(e)
                        }
                    }.bind(this), i) : getFilefromDataUrl(e.toDataURL(r, o), t, n).then(function(e) {
                        try {
                            return s = e, u.call(this)
                        } catch (e) {
                            return i(e)
                        }
                    }.bind(this), i);

                    function f() {
                        return a(s)
                    }
                }))
            }

            function cleanupCanvasMemory(e) {
                e.width = 0, e.height = 0
            }

            function isAutoOrientationInBrowser() {
                return new Promise((function(e, r) {
                    var t, n, o, a;
                    return void 0 !== isAutoOrientationInBrowser.result ? e(isAutoOrientationInBrowser.result) : getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then((function(i) {
                        try {
                            return drawFileInCanvas(t = i).then((function(i) {
                                try {
                                    return canvasToFile(n = i[1], t.type, t.name, t.lastModified).then((function(t) {
                                        try {
                                            return o = t, cleanupCanvasMemory(n), drawFileInCanvas(o).then((function(t) {
                                                try {
                                                    return a = t[0], isAutoOrientationInBrowser.result = 1 === a.width && 2 === a.height, e(isAutoOrientationInBrowser.result)
                                                } catch (e) {
                                                    return r(e)
                                                }
                                            }), r)
                                        } catch (e) {
                                            return r(e)
                                        }
                                    }), r)
                                } catch (e) {
                                    return r(e)
                                }
                            }), r)
                        } catch (e) {
                            return r(e)
                        }
                    }), r)
                }))
            }

            function getExifOrientation(e) {
                return new Promise((function(r, t) {
                    var n = new CustomFileReader;
                    n.onload = function(e) {
                        var t = new DataView(e.target.result);
                        if (65496 != t.getUint16(0, !1)) return r(-2);
                        for (var n = t.byteLength, o = 2; o < n;) {
                            if (t.getUint16(o + 2, !1) <= 8) return r(-1);
                            var a = t.getUint16(o, !1);
                            if (o += 2, 65505 == a) {
                                if (1165519206 != t.getUint32(o += 2, !1)) return r(-1);
                                var i = 18761 == t.getUint16(o += 6, !1);
                                o += t.getUint32(o + 4, i);
                                var s = t.getUint16(o, i);
                                o += 2;
                                for (var c = 0; c < s; c++)
                                    if (274 == t.getUint16(o + 12 * c, i)) return r(t.getUint16(o + 12 * c + 8, i))
                            } else {
                                if (65280 != (65280 & a)) break;
                                o += t.getUint16(o, !1)
                            }
                        }
                        return r(-1)
                    }, n.onerror = function(e) {
                        return t(e)
                    }, n.readAsArrayBuffer(e)
                }))
            }

            function handleMaxWidthOrHeight(e, r) {
                var t, n = e.width,
                    o = e.height,
                    a = r.maxWidthOrHeight,
                    i = e;
                if (isFinite(a) && (n > a || o > a)) {
                    var s = _slicedToArray(getNewCanvasAndCtx(n, o), 2);
                    i = s[0], t = s[1], n > o ? (i.width = a, i.height = o / n * a) : (i.width = n / o * a, i.height = a), t.drawImage(e, 0, 0, i.width, i.height), cleanupCanvasMemory(e)
                }
                return i
            }

            function followExifOrientation(e, r) {
                var t = e.width,
                    n = e.height,
                    o = _slicedToArray(getNewCanvasAndCtx(t, n), 2),
                    a = o[0],
                    i = o[1];
                switch (r > 4 && r < 9 ? (a.width = n, a.height = t) : (a.width = t, a.height = n), r) {
                    case 2:
                        i.transform(-1, 0, 0, 1, t, 0);
                        break;
                    case 3:
                        i.transform(-1, 0, 0, -1, t, n);
                        break;
                    case 4:
                        i.transform(1, 0, 0, -1, 0, n);
                        break;
                    case 5:
                        i.transform(0, 1, 1, 0, 0, 0);
                        break;
                    case 6:
                        i.transform(0, 1, -1, 0, n, 0);
                        break;
                    case 7:
                        i.transform(0, -1, -1, 0, n, t);
                        break;
                    case 8:
                        i.transform(0, -1, 1, 0, 0, t)
                }
                return i.drawImage(e, 0, 0, t, n), cleanupCanvasMemory(e), a
            }

            function compress(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return new Promise((function(n, o) {
                    var a, i, s, c, l, u, f, p, d, y, h, g, A, v, m, E, I, P;

                    function T() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                        a += e, r.onProgress(Math.min(a, 100))
                    }

                    function b(e) {
                        a = Math.min(Math.max(e, a), 100), r.onProgress(a)
                    }
                    return a = t, i = r.maxIteration || 10, s = 1024 * r.maxSizeMB * 1024, T(), drawFileInCanvas(e).then(function(t) {
                        try {
                            var a = _slicedToArray(t, 2);
                            return c = a[1], T(), l = handleMaxWidthOrHeight(c, r), T(), new Promise((function(t, n) {
                                var o;
                                if (!(o = r.exifOrientation)) return getExifOrientation(e).then(function(e) {
                                    try {
                                        return o = e, a.call(this)
                                    } catch (e) {
                                        return n(e)
                                    }
                                }.bind(this), n);

                                function a() {
                                    return t(o)
                                }
                                return a.call(this)
                            })).then(function(t) {
                                try {
                                    return u = t, T(), isAutoOrientationInBrowser().then(function(t) {
                                        try {
                                            return f = t ? l : followExifOrientation(l, u), T(), p = r.initialQuality || 1, d = r.fileType || e.type, canvasToFile(f, d, e.name, e.lastModified, p).then(function(r) {
                                                try {
                                                    var t, a = function r() {
                                                            if (i-- && (m > s || m > A)) {
                                                                var t, n, a = _slicedToArray(getNewCanvasAndCtx(t = h ? .95 * P.width : P.width, n = h ? .95 * P.height : P.height), 2);
                                                                return I = a[0], a[1].drawImage(P, 0, 0, t, n), p *= .95, canvasToFile(I, d, e.name, e.lastModified, p).then((function(e) {
                                                                    try {
                                                                        return E = e, cleanupCanvasMemory(P), P = I, m = E.size, b(Math.min(99, Math.floor((v - m) / (v - s) * 100))), r
                                                                    } catch (e) {
                                                                        return o(e)
                                                                    }
                                                                }), o)
                                                            }
                                                            return [1]
                                                        },
                                                        u = function() {
                                                            return cleanupCanvasMemory(P), cleanupCanvasMemory(I), cleanupCanvasMemory(l), cleanupCanvasMemory(f), cleanupCanvasMemory(c), b(100), n(E)
                                                        };
                                                    return y = r, T(), h = y.size > s, g = y.size > e.size, h || g ? (A = e.size, v = y.size, m = v, P = f, (t = function(e) {
                                                        for (; e;) {
                                                            if (e.then) return void e.then(t, o);
                                                            try {
                                                                if (e.pop) {
                                                                    if (e.length) return e.pop() ? u.call(this) : e;
                                                                    e = a
                                                                } else e = e.call(this)
                                                            } catch (e) {
                                                                return o(e)
                                                            }
                                                        }
                                                    }.bind(this))(a)) : (b(100), n(y))
                                                } catch (e) {
                                                    return o(e)
                                                }
                                            }.bind(this), o)
                                        } catch (e) {
                                            return o(e)
                                        }
                                    }.bind(this), o)
                                } catch (e) {
                                    return o(e)
                                }
                            }.bind(this), o)
                        } catch (e) {
                            return o(e)
                        }
                    }.bind(this), o)
                }))
            }
            var charAt = stringMultibyte.charAt,
                STRING_ITERATOR = "String Iterator",
                setInternalState$2 = internalState.set,
                getInternalState = internalState.getterFor(STRING_ITERATOR);
            defineIterator(String, "String", (function(e) {
                setInternalState$2(this, {
                    type: STRING_ITERATOR,
                    string: toString(e),
                    index: 0
                })
            }), (function() {
                var e, r = getInternalState(this),
                    t = r.string,
                    n = r.index;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = charAt(t, n), r.index += e.length, {
                    value: e,
                    done: !1
                })
            }));
            var domIterables = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                },
                ITERATOR$2 = wellKnownSymbol("iterator"),
                TO_STRING_TAG = wellKnownSymbol("toStringTag"),
                ArrayValues = es_array_iterator.values;
            for (var COLLECTION_NAME$1 in domIterables) {
                var Collection$1 = global$1[COLLECTION_NAME$1],
                    CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
                if (CollectionPrototype$1) {
                    if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
                        createNonEnumerableProperty(CollectionPrototype$1, ITERATOR$2, ArrayValues)
                    } catch (e) {
                        CollectionPrototype$1[ITERATOR$2] = ArrayValues
                    }
                    if (CollectionPrototype$1[TO_STRING_TAG] || createNonEnumerableProperty(CollectionPrototype$1, TO_STRING_TAG, COLLECTION_NAME$1), domIterables[COLLECTION_NAME$1])
                        for (var METHOD_NAME in es_array_iterator)
                            if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
                                createNonEnumerableProperty(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME])
                            } catch (e) {
                                CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME]
                            }
                }
            }
            var ITERATOR$1 = wellKnownSymbol("iterator"),
                nativeUrl = !fails((function() {
                    var e = new URL("b?a=1&b=2&c=3", "http://a"),
                        r = e.searchParams,
                        t = "";
                    return e.pathname = "c%20d", r.forEach((function(e, n) {
                        r.delete("b"), t += n + e
                    })), isPure && !e.toJSON || !r.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[ITERATOR$1] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("http://a#\u0431").hash || "a1c3" !== t || "x" !== new URL("http://x", void 0).host
                })),
                callWithSafeIterationClosing = function(e, r, t, n) {
                    try {
                        return n ? r(anObject(t)[0], t[1]) : r(t)
                    } catch (r) {
                        throw iteratorClose(e), r
                    }
                },
                arrayFrom = function(e) {
                    var r, t, n, o, a, i, s = toObject(e),
                        c = "function" == typeof this ? this : Array,
                        l = arguments.length,
                        u = l > 1 ? arguments[1] : void 0,
                        f = void 0 !== u,
                        p = getIteratorMethod(s),
                        d = 0;
                    if (f && (u = functionBindContext(u, l > 2 ? arguments[2] : void 0, 2)), null == p || c == Array && isArrayIteratorMethod(p))
                        for (t = new c(r = toLength(s.length)); r > d; d++) i = f ? u(s[d], d) : s[d], createProperty(t, d, i);
                    else
                        for (a = (o = p.call(s)).next, t = new c; !(n = a.call(o)).done; d++) i = f ? callWithSafeIterationClosing(o, u, [n.value, d], !0) : n.value, createProperty(t, d, i);
                    return t.length = d, t
                },
                maxInt = 2147483647,
                base = 36,
                tMin = 1,
                tMax = 26,
                skew = 38,
                damp = 700,
                initialBias = 72,
                initialN = 128,
                delimiter = "-",
                regexNonASCII = /[^\0-\u007E]/,
                regexSeparators = /[.\u3002\uFF0E\uFF61]/g,
                OVERFLOW_ERROR = "Overflow: input needs wider integers to process",
                baseMinusTMin = base - tMin,
                floor$2 = Math.floor,
                stringFromCharCode = String.fromCharCode,
                ucs2decode = function(e) {
                    for (var r = [], t = 0, n = e.length; t < n;) {
                        var o = e.charCodeAt(t++);
                        if (o >= 55296 && o <= 56319 && t < n) {
                            var a = e.charCodeAt(t++);
                            56320 == (64512 & a) ? r.push(((1023 & o) << 10) + (1023 & a) + 65536) : (r.push(o), t--)
                        } else r.push(o)
                    }
                    return r
                },
                digitToBasic = function(e) {
                    return e + 22 + 75 * (e < 26)
                },
                adapt = function(e, r, t) {
                    var n = 0;
                    for (e = t ? floor$2(e / damp) : e >> 1, e += floor$2(e / r); e > baseMinusTMin * tMax >> 1; n += base) e = floor$2(e / baseMinusTMin);
                    return floor$2(n + (baseMinusTMin + 1) * e / (e + skew))
                },
                encode = function(e) {
                    var r, t, n = [],
                        o = (e = ucs2decode(e)).length,
                        a = initialN,
                        i = 0,
                        s = initialBias;
                    for (r = 0; r < e.length; r++)(t = e[r]) < 128 && n.push(stringFromCharCode(t));
                    var c = n.length,
                        l = c;
                    for (c && n.push(delimiter); l < o;) {
                        var u = maxInt;
                        for (r = 0; r < e.length; r++)(t = e[r]) >= a && t < u && (u = t);
                        var f = l + 1;
                        if (u - a > floor$2((maxInt - i) / f)) throw RangeError(OVERFLOW_ERROR);
                        for (i += (u - a) * f, a = u, r = 0; r < e.length; r++) {
                            if ((t = e[r]) < a && ++i > maxInt) throw RangeError(OVERFLOW_ERROR);
                            if (t == a) {
                                for (var p = i, d = base;; d += base) {
                                    var y = d <= s ? tMin : d >= s + tMax ? tMax : d - s;
                                    if (p < y) break;
                                    var h = p - y,
                                        g = base - y;
                                    n.push(stringFromCharCode(digitToBasic(y + h % g))), p = floor$2(h / g)
                                }
                                n.push(stringFromCharCode(digitToBasic(p))), s = adapt(i, f, l == c), i = 0, ++l
                            }
                        }++i, ++a
                    }
                    return n.join("")
                },
                stringPunycodeToAscii = function(e) {
                    var r, t, n = [],
                        o = e.toLowerCase().replace(regexSeparators, ".").split(".");
                    for (r = 0; r < o.length; r++) t = o[r], n.push(regexNonASCII.test(t) ? "xn--" + encode(t) : t);
                    return n.join(".")
                },
                getIterator = function(e) {
                    var r = getIteratorMethod(e);
                    if ("function" != typeof r) throw TypeError(String(e) + " is not iterable");
                    return anObject(r.call(e))
                },
                nativeFetch = getBuiltIn("fetch"),
                NativeRequest = getBuiltIn("Request"),
                RequestPrototype = NativeRequest && NativeRequest.prototype,
                Headers = getBuiltIn("Headers"),
                ITERATOR = wellKnownSymbol("iterator"),
                URL_SEARCH_PARAMS = "URLSearchParams",
                URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator",
                setInternalState$1 = internalState.set,
                getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS),
                getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR),
                plus = /\+/g,
                sequences = Array(4),
                percentSequence = function(e) {
                    return sequences[e - 1] || (sequences[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
                },
                percentDecode = function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (r) {
                        return e
                    }
                },
                deserialize = function(e) {
                    var r = e.replace(plus, " "),
                        t = 4;
                    try {
                        return decodeURIComponent(r)
                    } catch (e) {
                        for (; t;) r = r.replace(percentSequence(t--), percentDecode);
                        return r
                    }
                },
                find = /[!'()~]|%20/g,
                replace$1 = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+"
                },
                replacer = function(e) {
                    return replace$1[e]
                },
                serialize = function(e) {
                    return encodeURIComponent(e).replace(find, replacer)
                },
                parseSearchParams = function(e, r) {
                    if (r)
                        for (var t, n, o = r.split("&"), a = 0; a < o.length;)(t = o[a++]).length && (n = t.split("="), e.push({
                            key: deserialize(n.shift()),
                            value: deserialize(n.join("="))
                        }))
                },
                updateSearchParams = function(e) {
                    this.entries.length = 0, parseSearchParams(this.entries, e)
                },
                validateArgumentsLength = function(e, r) {
                    if (e < r) throw TypeError("Not enough arguments")
                },
                URLSearchParamsIterator = createIteratorConstructor((function(e, r) {
                    setInternalState$1(this, {
                        type: URL_SEARCH_PARAMS_ITERATOR,
                        iterator: getIterator(getInternalParamsState(e).entries),
                        kind: r
                    })
                }), "Iterator", (function() {
                    var e = getInternalIteratorState(this),
                        r = e.kind,
                        t = e.iterator.next(),
                        n = t.value;
                    return t.done || (t.value = "keys" === r ? n.key : "values" === r ? n.value : [n.key, n.value]), t
                })),
                URLSearchParamsConstructor = function() {
                    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
                    var e, r, t, n, o, a, i, s, c, l = arguments.length > 0 ? arguments[0] : void 0,
                        u = this,
                        f = [];
                    if (setInternalState$1(u, {
                            type: URL_SEARCH_PARAMS,
                            entries: f,
                            updateURL: function() {},
                            updateSearchParams: updateSearchParams
                        }), void 0 !== l)
                        if (isObject(l))
                            if ("function" == typeof(e = getIteratorMethod(l)))
                                for (t = (r = e.call(l)).next; !(n = t.call(r)).done;) {
                                    if ((i = (a = (o = getIterator(anObject(n.value))).next).call(o)).done || (s = a.call(o)).done || !a.call(o).done) throw TypeError("Expected sequence with length 2");
                                    f.push({
                                        key: toString(i.value),
                                        value: toString(s.value)
                                    })
                                } else
                                    for (c in l) has$1(l, c) && f.push({
                                        key: c,
                                        value: toString(l[c])
                                    });
                            else parseSearchParams(f, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : toString(l))
                },
                URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
            if (redefineAll(URLSearchParamsPrototype, {
                    append: function(e, r) {
                        validateArgumentsLength(arguments.length, 2);
                        var t = getInternalParamsState(this);
                        t.entries.push({
                            key: toString(e),
                            value: toString(r)
                        }), t.updateURL()
                    },
                    delete: function(e) {
                        validateArgumentsLength(arguments.length, 1);
                        for (var r = getInternalParamsState(this), t = r.entries, n = toString(e), o = 0; o < t.length;) t[o].key === n ? t.splice(o, 1) : o++;
                        r.updateURL()
                    },
                    get: function(e) {
                        validateArgumentsLength(arguments.length, 1);
                        for (var r = getInternalParamsState(this).entries, t = toString(e), n = 0; n < r.length; n++)
                            if (r[n].key === t) return r[n].value;
                        return null
                    },
                    getAll: function(e) {
                        validateArgumentsLength(arguments.length, 1);
                        for (var r = getInternalParamsState(this).entries, t = toString(e), n = [], o = 0; o < r.length; o++) r[o].key === t && n.push(r[o].value);
                        return n
                    },
                    has: function(e) {
                        validateArgumentsLength(arguments.length, 1);
                        for (var r = getInternalParamsState(this).entries, t = toString(e), n = 0; n < r.length;)
                            if (r[n++].key === t) return !0;
                        return !1
                    },
                    set: function(e, r) {
                        validateArgumentsLength(arguments.length, 1);
                        for (var t, n = getInternalParamsState(this), o = n.entries, a = !1, i = toString(e), s = toString(r), c = 0; c < o.length; c++)(t = o[c]).key === i && (a ? o.splice(c--, 1) : (a = !0, t.value = s));
                        a || o.push({
                            key: i,
                            value: s
                        }), n.updateURL()
                    },
                    sort: function() {
                        var e, r, t, n = getInternalParamsState(this),
                            o = n.entries,
                            a = o.slice();
                        for (o.length = 0, t = 0; t < a.length; t++) {
                            for (e = a[t], r = 0; r < t; r++)
                                if (o[r].key > e.key) {
                                    o.splice(r, 0, e);
                                    break
                                }
                            r === t && o.push(e)
                        }
                        n.updateURL()
                    },
                    forEach: function(e) {
                        for (var r, t = getInternalParamsState(this).entries, n = functionBindContext(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < t.length;) n((r = t[o++]).value, r.key, this)
                    },
                    keys: function() {
                        return new URLSearchParamsIterator(this, "keys")
                    },
                    values: function() {
                        return new URLSearchParamsIterator(this, "values")
                    },
                    entries: function() {
                        return new URLSearchParamsIterator(this, "entries")
                    }
                }, {
                    enumerable: !0
                }), redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries), redefine(URLSearchParamsPrototype, "toString", (function() {
                    for (var e, r = getInternalParamsState(this).entries, t = [], n = 0; n < r.length;) e = r[n++], t.push(serialize(e.key) + "=" + serialize(e.value));
                    return t.join("&")
                }), {
                    enumerable: !0
                }), setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS), _export({
                    global: !0,
                    forced: !nativeUrl
                }, {
                    URLSearchParams: URLSearchParamsConstructor
                }), !nativeUrl && "function" == typeof Headers) {
                var wrapRequestOptions = function(e) {
                    if (isObject(e)) {
                        var r, t = e.body;
                        if (classof(t) === URL_SEARCH_PARAMS) return (r = e.headers ? new Headers(e.headers) : new Headers).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), objectCreate(e, {
                            body: createPropertyDescriptor(0, String(t)),
                            headers: createPropertyDescriptor(0, r)
                        })
                    }
                    return e
                };
                if ("function" == typeof nativeFetch && _export({
                        global: !0,
                        enumerable: !0,
                        forced: !0
                    }, {
                        fetch: function(e) {
                            return nativeFetch(e, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {})
                        }
                    }), "function" == typeof NativeRequest) {
                    var RequestConstructor = function(e) {
                        return anInstance(this, RequestConstructor, "Request"), new NativeRequest(e, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {})
                    };
                    RequestPrototype.constructor = RequestConstructor, RequestConstructor.prototype = RequestPrototype, _export({
                        global: !0,
                        forced: !0
                    }, {
                        Request: RequestConstructor
                    })
                }
            }
            var web_urlSearchParams = {
                    URLSearchParams: URLSearchParamsConstructor,
                    getState: getInternalParamsState
                },
                codeAt = stringMultibyte.codeAt,
                NativeURL = global$1.URL,
                URLSearchParams$1 = web_urlSearchParams.URLSearchParams,
                getInternalSearchParamsState = web_urlSearchParams.getState,
                setInternalState = internalState.set,
                getInternalURLState = internalState.getterFor("URL"),
                floor$1 = Math.floor,
                pow = Math.pow,
                INVALID_AUTHORITY = "Invalid authority",
                INVALID_SCHEME = "Invalid scheme",
                INVALID_HOST = "Invalid host",
                INVALID_PORT = "Invalid port",
                ALPHA = /[A-Za-z]/,
                ALPHANUMERIC = /[\d+-.A-Za-z]/,
                DIGIT = /\d/,
                HEX_START = /^0x/i,
                OCT = /^[0-7]+$/,
                DEC = /^\d+$/,
                HEX = /^[\dA-Fa-f]+$/,
                FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
                TAB_AND_NEW_LINE = /[\t\n\r]/g,
                EOF, parseHost = function(e, r) {
                    var t, n, o;
                    if ("[" == r.charAt(0)) {
                        if ("]" != r.charAt(r.length - 1)) return INVALID_HOST;
                        if (!(t = parseIPv6(r.slice(1, -1)))) return INVALID_HOST;
                        e.host = t
                    } else if (isSpecial(e)) {
                        if (r = stringPunycodeToAscii(r), FORBIDDEN_HOST_CODE_POINT.test(r)) return INVALID_HOST;
                        if (null === (t = parseIPv4(r))) return INVALID_HOST;
                        e.host = t
                    } else {
                        if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(r)) return INVALID_HOST;
                        for (t = "", n = arrayFrom(r), o = 0; o < n.length; o++) t += percentEncode(n[o], C0ControlPercentEncodeSet);
                        e.host = t
                    }
                },
                parseIPv4 = function(e) {
                    var r, t, n, o, a, i, s, c = e.split(".");
                    if (c.length && "" == c[c.length - 1] && c.pop(), (r = c.length) > 4) return e;
                    for (t = [], n = 0; n < r; n++) {
                        if ("" == (o = c[n])) return e;
                        if (a = 10, o.length > 1 && "0" == o.charAt(0) && (a = HEX_START.test(o) ? 16 : 8, o = o.slice(8 == a ? 1 : 2)), "" === o) i = 0;
                        else {
                            if (!(10 == a ? DEC : 8 == a ? OCT : HEX).test(o)) return e;
                            i = parseInt(o, a)
                        }
                        t.push(i)
                    }
                    for (n = 0; n < r; n++)
                        if (i = t[n], n == r - 1) {
                            if (i >= pow(256, 5 - r)) return null
                        } else if (i > 255) return null;
                    for (s = t.pop(), n = 0; n < t.length; n++) s += t[n] * pow(256, 3 - n);
                    return s
                },
                parseIPv6 = function(e) {
                    var r, t, n, o, a, i, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                        l = 0,
                        u = null,
                        f = 0,
                        p = function() {
                            return e.charAt(f)
                        };
                    if (":" == p()) {
                        if (":" != e.charAt(1)) return;
                        f += 2, u = ++l
                    }
                    for (; p();) {
                        if (8 == l) return;
                        if (":" != p()) {
                            for (r = t = 0; t < 4 && HEX.test(p());) r = 16 * r + parseInt(p(), 16), f++, t++;
                            if ("." == p()) {
                                if (0 == t) return;
                                if (f -= t, l > 6) return;
                                for (n = 0; p();) {
                                    if (o = null, n > 0) {
                                        if (!("." == p() && n < 4)) return;
                                        f++
                                    }
                                    if (!DIGIT.test(p())) return;
                                    for (; DIGIT.test(p());) {
                                        if (a = parseInt(p(), 10), null === o) o = a;
                                        else {
                                            if (0 == o) return;
                                            o = 10 * o + a
                                        }
                                        if (o > 255) return;
                                        f++
                                    }
                                    c[l] = 256 * c[l] + o, 2 != ++n && 4 != n || l++
                                }
                                if (4 != n) return;
                                break
                            }
                            if (":" == p()) {
                                if (f++, !p()) return
                            } else if (p()) return;
                            c[l++] = r
                        } else {
                            if (null !== u) return;
                            f++, u = ++l
                        }
                    }
                    if (null !== u)
                        for (i = l - u, l = 7; 0 != l && i > 0;) s = c[l], c[l--] = c[u + i - 1], c[u + --i] = s;
                    else if (8 != l) return;
                    return c
                },
                findLongestZeroSequence = function(e) {
                    for (var r = null, t = 1, n = null, o = 0, a = 0; a < 8; a++) 0 !== e[a] ? (o > t && (r = n, t = o), n = null, o = 0) : (null === n && (n = a), ++o);
                    return o > t && (r = n, t = o), r
                },
                serializeHost = function(e) {
                    var r, t, n, o;
                    if ("number" == typeof e) {
                        for (r = [], t = 0; t < 4; t++) r.unshift(e % 256), e = floor$1(e / 256);
                        return r.join(".")
                    }
                    if ("object" == typeof e) {
                        for (r = "", n = findLongestZeroSequence(e), t = 0; t < 8; t++) o && 0 === e[t] || (o && (o = !1), n === t ? (r += t ? ":" : "::", o = !0) : (r += e[t].toString(16), t < 7 && (r += ":")));
                        return "[" + r + "]"
                    }
                    return e
                },
                C0ControlPercentEncodeSet = {},
                fragmentPercentEncodeSet = objectAssign({}, C0ControlPercentEncodeSet, {
                    " ": 1,
                    '"': 1,
                    "<": 1,
                    ">": 1,
                    "`": 1
                }),
                pathPercentEncodeSet = objectAssign({}, fragmentPercentEncodeSet, {
                    "#": 1,
                    "?": 1,
                    "{": 1,
                    "}": 1
                }),
                userinfoPercentEncodeSet = objectAssign({}, pathPercentEncodeSet, {
                    "/": 1,
                    ":": 1,
                    ";": 1,
                    "=": 1,
                    "@": 1,
                    "[": 1,
                    "\\": 1,
                    "]": 1,
                    "^": 1,
                    "|": 1
                }),
                percentEncode = function(e, r) {
                    var t = codeAt(e, 0);
                    return t > 32 && t < 127 && !has$1(r, e) ? e : encodeURIComponent(e)
                },
                specialSchemes = {
                    ftp: 21,
                    file: null,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443
                },
                isSpecial = function(e) {
                    return has$1(specialSchemes, e.scheme)
                },
                includesCredentials = function(e) {
                    return "" != e.username || "" != e.password
                },
                cannotHaveUsernamePasswordPort = function(e) {
                    return !e.host || e.cannotBeABaseURL || "file" == e.scheme
                },
                isWindowsDriveLetter = function(e, r) {
                    var t;
                    return 2 == e.length && ALPHA.test(e.charAt(0)) && (":" == (t = e.charAt(1)) || !r && "|" == t)
                },
                startsWithWindowsDriveLetter = function(e) {
                    var r;
                    return e.length > 1 && isWindowsDriveLetter(e.slice(0, 2)) && (2 == e.length || "/" === (r = e.charAt(2)) || "\\" === r || "?" === r || "#" === r)
                },
                shortenURLsPath = function(e) {
                    var r = e.path,
                        t = r.length;
                    !t || "file" == e.scheme && 1 == t && isWindowsDriveLetter(r[0], !0) || r.pop()
                },
                isSingleDot = function(e) {
                    return "." === e || "%2e" === e.toLowerCase()
                },
                isDoubleDot = function(e) {
                    return ".." === (e = e.toLowerCase()) || "%2e." === e || ".%2e" === e || "%2e%2e" === e
                },
                SCHEME_START = {},
                SCHEME = {},
                NO_SCHEME = {},
                SPECIAL_RELATIVE_OR_AUTHORITY = {},
                PATH_OR_AUTHORITY = {},
                RELATIVE = {},
                RELATIVE_SLASH = {},
                SPECIAL_AUTHORITY_SLASHES = {},
                SPECIAL_AUTHORITY_IGNORE_SLASHES = {},
                AUTHORITY = {},
                HOST = {},
                HOSTNAME = {},
                PORT = {},
                FILE = {},
                FILE_SLASH = {},
                FILE_HOST = {},
                PATH_START = {},
                PATH = {},
                CANNOT_BE_A_BASE_URL_PATH = {},
                QUERY = {},
                FRAGMENT = {},
                parseURL = function(e, r, t, n) {
                    var o, a, i, s, c = t || SCHEME_START,
                        l = 0,
                        u = "",
                        f = !1,
                        p = !1,
                        d = !1;
                    for (t || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, r = r.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, "")), r = r.replace(TAB_AND_NEW_LINE, ""), o = arrayFrom(r); l <= o.length;) {
                        switch (a = o[l], c) {
                            case SCHEME_START:
                                if (!a || !ALPHA.test(a)) {
                                    if (t) return INVALID_SCHEME;
                                    c = NO_SCHEME;
                                    continue
                                }
                                u += a.toLowerCase(), c = SCHEME;
                                break;
                            case SCHEME:
                                if (a && (ALPHANUMERIC.test(a) || "+" == a || "-" == a || "." == a)) u += a.toLowerCase();
                                else {
                                    if (":" != a) {
                                        if (t) return INVALID_SCHEME;
                                        u = "", c = NO_SCHEME, l = 0;
                                        continue
                                    }
                                    if (t && (isSpecial(e) != has$1(specialSchemes, u) || "file" == u && (includesCredentials(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                                    if (e.scheme = u, t) return void(isSpecial(e) && specialSchemes[e.scheme] == e.port && (e.port = null));
                                    u = "", "file" == e.scheme ? c = FILE : isSpecial(e) && n && n.scheme == e.scheme ? c = SPECIAL_RELATIVE_OR_AUTHORITY : isSpecial(e) ? c = SPECIAL_AUTHORITY_SLASHES : "/" == o[l + 1] ? (c = PATH_OR_AUTHORITY, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = CANNOT_BE_A_BASE_URL_PATH)
                                }
                                break;
                            case NO_SCHEME:
                                if (!n || n.cannotBeABaseURL && "#" != a) return INVALID_SCHEME;
                                if (n.cannotBeABaseURL && "#" == a) {
                                    e.scheme = n.scheme, e.path = n.path.slice(), e.query = n.query, e.fragment = "", e.cannotBeABaseURL = !0, c = FRAGMENT;
                                    break
                                }
                                c = "file" == n.scheme ? FILE : RELATIVE;
                                continue;
                            case SPECIAL_RELATIVE_OR_AUTHORITY:
                                if ("/" != a || "/" != o[l + 1]) {
                                    c = RELATIVE;
                                    continue
                                }
                                c = SPECIAL_AUTHORITY_IGNORE_SLASHES, l++;
                                break;
                            case PATH_OR_AUTHORITY:
                                if ("/" == a) {
                                    c = AUTHORITY;
                                    break
                                }
                                c = PATH;
                                continue;
                            case RELATIVE:
                                if (e.scheme = n.scheme, a == EOF) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query;
                                else if ("/" == a || "\\" == a && isSpecial(e)) c = RELATIVE_SLASH;
                                else if ("?" == a) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = "", c = QUERY;
                                else {
                                    if ("#" != a) {
                                        e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.path.pop(), c = PATH;
                                        continue
                                    }
                                    e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query, e.fragment = "", c = FRAGMENT
                                }
                                break;
                            case RELATIVE_SLASH:
                                if (!isSpecial(e) || "/" != a && "\\" != a) {
                                    if ("/" != a) {
                                        e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, c = PATH;
                                        continue
                                    }
                                    c = AUTHORITY
                                } else c = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                                break;
                            case SPECIAL_AUTHORITY_SLASHES:
                                if (c = SPECIAL_AUTHORITY_IGNORE_SLASHES, "/" != a || "/" != u.charAt(l + 1)) continue;
                                l++;
                                break;
                            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                                if ("/" != a && "\\" != a) {
                                    c = AUTHORITY;
                                    continue
                                }
                                break;
                            case AUTHORITY:
                                if ("@" == a) {
                                    f && (u = "%40" + u), f = !0, i = arrayFrom(u);
                                    for (var y = 0; y < i.length; y++) {
                                        var h = i[y];
                                        if (":" != h || d) {
                                            var g = percentEncode(h, userinfoPercentEncodeSet);
                                            d ? e.password += g : e.username += g
                                        } else d = !0
                                    }
                                    u = ""
                                } else if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e)) {
                                    if (f && "" == u) return INVALID_AUTHORITY;
                                    l -= arrayFrom(u).length + 1, u = "", c = HOST
                                } else u += a;
                                break;
                            case HOST:
                            case HOSTNAME:
                                if (t && "file" == e.scheme) {
                                    c = FILE_HOST;
                                    continue
                                }
                                if (":" != a || p) {
                                    if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e)) {
                                        if (isSpecial(e) && "" == u) return INVALID_HOST;
                                        if (t && "" == u && (includesCredentials(e) || null !== e.port)) return;
                                        if (s = parseHost(e, u)) return s;
                                        if (u = "", c = PATH_START, t) return;
                                        continue
                                    }
                                    "[" == a ? p = !0 : "]" == a && (p = !1), u += a
                                } else {
                                    if ("" == u) return INVALID_HOST;
                                    if (s = parseHost(e, u)) return s;
                                    if (u = "", c = PORT, t == HOSTNAME) return
                                }
                                break;
                            case PORT:
                                if (!DIGIT.test(a)) {
                                    if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e) || t) {
                                        if ("" != u) {
                                            var A = parseInt(u, 10);
                                            if (A > 65535) return INVALID_PORT;
                                            e.port = isSpecial(e) && A === specialSchemes[e.scheme] ? null : A, u = ""
                                        }
                                        if (t) return;
                                        c = PATH_START;
                                        continue
                                    }
                                    return INVALID_PORT
                                }
                                u += a;
                                break;
                            case FILE:
                                if (e.scheme = "file", "/" == a || "\\" == a) c = FILE_SLASH;
                                else {
                                    if (!n || "file" != n.scheme) {
                                        c = PATH;
                                        continue
                                    }
                                    if (a == EOF) e.host = n.host, e.path = n.path.slice(), e.query = n.query;
                                    else if ("?" == a) e.host = n.host, e.path = n.path.slice(), e.query = "", c = QUERY;
                                    else {
                                        if ("#" != a) {
                                            startsWithWindowsDriveLetter(o.slice(l).join("")) || (e.host = n.host, e.path = n.path.slice(), shortenURLsPath(e)), c = PATH;
                                            continue
                                        }
                                        e.host = n.host, e.path = n.path.slice(), e.query = n.query, e.fragment = "", c = FRAGMENT
                                    }
                                }
                                break;
                            case FILE_SLASH:
                                if ("/" == a || "\\" == a) {
                                    c = FILE_HOST;
                                    break
                                }
                                n && "file" == n.scheme && !startsWithWindowsDriveLetter(o.slice(l).join("")) && (isWindowsDriveLetter(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host), c = PATH;
                                continue;
                            case FILE_HOST:
                                if (a == EOF || "/" == a || "\\" == a || "?" == a || "#" == a) {
                                    if (!t && isWindowsDriveLetter(u)) c = PATH;
                                    else if ("" == u) {
                                        if (e.host = "", t) return;
                                        c = PATH_START
                                    } else {
                                        if (s = parseHost(e, u)) return s;
                                        if ("localhost" == e.host && (e.host = ""), t) return;
                                        u = "", c = PATH_START
                                    }
                                    continue
                                }
                                u += a;
                                break;
                            case PATH_START:
                                if (isSpecial(e)) {
                                    if (c = PATH, "/" != a && "\\" != a) continue
                                } else if (t || "?" != a)
                                    if (t || "#" != a) {
                                        if (a != EOF && (c = PATH, "/" != a)) continue
                                    } else e.fragment = "", c = FRAGMENT;
                                else e.query = "", c = QUERY;
                                break;
                            case PATH:
                                if (a == EOF || "/" == a || "\\" == a && isSpecial(e) || !t && ("?" == a || "#" == a)) {
                                    if (isDoubleDot(u) ? (shortenURLsPath(e), "/" == a || "\\" == a && isSpecial(e) || e.path.push("")) : isSingleDot(u) ? "/" == a || "\\" == a && isSpecial(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && isWindowsDriveLetter(u) && (e.host && (e.host = ""), u = u.charAt(0) + ":"), e.path.push(u)), u = "", "file" == e.scheme && (a == EOF || "?" == a || "#" == a))
                                        for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                                    "?" == a ? (e.query = "", c = QUERY) : "#" == a && (e.fragment = "", c = FRAGMENT)
                                } else u += percentEncode(a, pathPercentEncodeSet);
                                break;
                            case CANNOT_BE_A_BASE_URL_PATH:
                                "?" == a ? (e.query = "", c = QUERY) : "#" == a ? (e.fragment = "", c = FRAGMENT) : a != EOF && (e.path[0] += percentEncode(a, C0ControlPercentEncodeSet));
                                break;
                            case QUERY:
                                t || "#" != a ? a != EOF && ("'" == a && isSpecial(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : percentEncode(a, C0ControlPercentEncodeSet)) : (e.fragment = "", c = FRAGMENT);
                                break;
                            case FRAGMENT:
                                a != EOF && (e.fragment += percentEncode(a, fragmentPercentEncodeSet))
                        }
                        l++
                    }
                },
                URLConstructor = function(e) {
                    var r, t, n = anInstance(this, URLConstructor, "URL"),
                        o = arguments.length > 1 ? arguments[1] : void 0,
                        a = toString(e),
                        i = setInternalState(n, {
                            type: "URL"
                        });
                    if (void 0 !== o)
                        if (o instanceof URLConstructor) r = getInternalURLState(o);
                        else if (t = parseURL(r = {}, toString(o))) throw TypeError(t);
                    if (t = parseURL(i, a, null, r)) throw TypeError(t);
                    var s = i.searchParams = new URLSearchParams$1,
                        c = getInternalSearchParamsState(s);
                    c.updateSearchParams(i.query), c.updateURL = function() {
                        i.query = String(s) || null
                    }, descriptors || (n.href = serializeURL.call(n), n.origin = getOrigin.call(n), n.protocol = getProtocol.call(n), n.username = getUsername.call(n), n.password = getPassword.call(n), n.host = getHost.call(n), n.hostname = getHostname.call(n), n.port = getPort.call(n), n.pathname = getPathname.call(n), n.search = getSearch.call(n), n.searchParams = getSearchParams.call(n), n.hash = getHash.call(n))
                },
                URLPrototype = URLConstructor.prototype,
                serializeURL = function() {
                    var e = getInternalURLState(this),
                        r = e.scheme,
                        t = e.username,
                        n = e.password,
                        o = e.host,
                        a = e.port,
                        i = e.path,
                        s = e.query,
                        c = e.fragment,
                        l = r + ":";
                    return null !== o ? (l += "//", includesCredentials(e) && (l += t + (n ? ":" + n : "") + "@"), l += serializeHost(o), null !== a && (l += ":" + a)) : "file" == r && (l += "//"), l += e.cannotBeABaseURL ? i[0] : i.length ? "/" + i.join("/") : "", null !== s && (l += "?" + s), null !== c && (l += "#" + c), l
                },
                getOrigin = function() {
                    var e = getInternalURLState(this),
                        r = e.scheme,
                        t = e.port;
                    if ("blob" == r) try {
                        return new URLConstructor(r.path[0]).origin
                    } catch (e) {
                        return "null"
                    }
                    return "file" != r && isSpecial(e) ? r + "://" + serializeHost(e.host) + (null !== t ? ":" + t : "") : "null"
                },
                getProtocol = function() {
                    return getInternalURLState(this).scheme + ":"
                },
                getUsername = function() {
                    return getInternalURLState(this).username
                },
                getPassword = function() {
                    return getInternalURLState(this).password
                },
                getHost = function() {
                    var e = getInternalURLState(this),
                        r = e.host,
                        t = e.port;
                    return null === r ? "" : null === t ? serializeHost(r) : serializeHost(r) + ":" + t
                },
                getHostname = function() {
                    var e = getInternalURLState(this).host;
                    return null === e ? "" : serializeHost(e)
                },
                getPort = function() {
                    var e = getInternalURLState(this).port;
                    return null === e ? "" : String(e)
                },
                getPathname = function() {
                    var e = getInternalURLState(this),
                        r = e.path;
                    return e.cannotBeABaseURL ? r[0] : r.length ? "/" + r.join("/") : ""
                },
                getSearch = function() {
                    var e = getInternalURLState(this).query;
                    return e ? "?" + e : ""
                },
                getSearchParams = function() {
                    return getInternalURLState(this).searchParams
                },
                getHash = function() {
                    var e = getInternalURLState(this).fragment;
                    return e ? "#" + e : ""
                },
                accessorDescriptor = function(e, r) {
                    return {
                        get: e,
                        set: r,
                        configurable: !0,
                        enumerable: !0
                    }
                };
            if (descriptors && objectDefineProperties(URLPrototype, {
                    href: accessorDescriptor(serializeURL, (function(e) {
                        var r = getInternalURLState(this),
                            t = toString(e),
                            n = parseURL(r, t);
                        if (n) throw TypeError(n);
                        getInternalSearchParamsState(r.searchParams).updateSearchParams(r.query)
                    })),
                    origin: accessorDescriptor(getOrigin),
                    protocol: accessorDescriptor(getProtocol, (function(e) {
                        var r = getInternalURLState(this);
                        parseURL(r, toString(e) + ":", SCHEME_START)
                    })),
                    username: accessorDescriptor(getUsername, (function(e) {
                        var r = getInternalURLState(this),
                            t = arrayFrom(toString(e));
                        if (!cannotHaveUsernamePasswordPort(r)) {
                            r.username = "";
                            for (var n = 0; n < t.length; n++) r.username += percentEncode(t[n], userinfoPercentEncodeSet)
                        }
                    })),
                    password: accessorDescriptor(getPassword, (function(e) {
                        var r = getInternalURLState(this),
                            t = arrayFrom(toString(e));
                        if (!cannotHaveUsernamePasswordPort(r)) {
                            r.password = "";
                            for (var n = 0; n < t.length; n++) r.password += percentEncode(t[n], userinfoPercentEncodeSet)
                        }
                    })),
                    host: accessorDescriptor(getHost, (function(e) {
                        var r = getInternalURLState(this);
                        r.cannotBeABaseURL || parseURL(r, toString(e), HOST)
                    })),
                    hostname: accessorDescriptor(getHostname, (function(e) {
                        var r = getInternalURLState(this);
                        r.cannotBeABaseURL || parseURL(r, toString(e), HOSTNAME)
                    })),
                    port: accessorDescriptor(getPort, (function(e) {
                        var r = getInternalURLState(this);
                        cannotHaveUsernamePasswordPort(r) || ("" == (e = toString(e)) ? r.port = null : parseURL(r, e, PORT))
                    })),
                    pathname: accessorDescriptor(getPathname, (function(e) {
                        var r = getInternalURLState(this);
                        r.cannotBeABaseURL || (r.path = [], parseURL(r, toString(e), PATH_START))
                    })),
                    search: accessorDescriptor(getSearch, (function(e) {
                        var r = getInternalURLState(this);
                        "" == (e = toString(e)) ? r.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), r.query = "", parseURL(r, e, QUERY)), getInternalSearchParamsState(r.searchParams).updateSearchParams(r.query)
                    })),
                    searchParams: accessorDescriptor(getSearchParams),
                    hash: accessorDescriptor(getHash, (function(e) {
                        var r = getInternalURLState(this);
                        "" != (e = toString(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), r.fragment = "", parseURL(r, e, FRAGMENT)) : r.fragment = null
                    }))
                }), redefine(URLPrototype, "toJSON", (function() {
                    return serializeURL.call(this)
                }), {
                    enumerable: !0
                }), redefine(URLPrototype, "toString", (function() {
                    return serializeURL.call(this)
                }), {
                    enumerable: !0
                }), NativeURL) {
                var nativeCreateObjectURL = NativeURL.createObjectURL,
                    nativeRevokeObjectURL = NativeURL.revokeObjectURL;
                nativeCreateObjectURL && redefine(URLConstructor, "createObjectURL", (function(e) {
                    return nativeCreateObjectURL.apply(NativeURL, arguments)
                })), nativeRevokeObjectURL && redefine(URLConstructor, "revokeObjectURL", (function(e) {
                    return nativeRevokeObjectURL.apply(NativeURL, arguments)
                }))
            }
            setToStringTag(URLConstructor, "URL"), _export({
                global: !0,
                forced: !nativeUrl,
                sham: !descriptors
            }, {
                URL: URLConstructor
            });
            var $forEach = arrayIteration.forEach,
                STRICT_METHOD = arrayMethodIsStrict("forEach"),
                arrayForEach = STRICT_METHOD ? [].forEach : function(e) {
                    return $forEach(this, e, arguments.length > 1 ? arguments[1] : void 0)
                };
            for (var COLLECTION_NAME in domIterables) {
                var Collection = global$1[COLLECTION_NAME],
                    CollectionPrototype = Collection && Collection.prototype;
                if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
                    createNonEnumerableProperty(CollectionPrototype, "forEach", arrayForEach)
                } catch (e) {
                    CollectionPrototype.forEach = arrayForEach
                }
            }
            var propertyIsEnumerable = objectPropertyIsEnumerable.f,
                createMethod = function(e) {
                    return function(r) {
                        for (var t, n = toIndexedObject(r), o = objectKeys(n), a = o.length, i = 0, s = []; a > i;) t = o[i++], descriptors && !propertyIsEnumerable.call(n, t) || s.push(e ? [t, n[t]] : n[t]);
                        return s
                    }
                },
                objectToArray = {
                    entries: createMethod(!0),
                    values: createMethod(!1)
                },
                $entries = objectToArray.entries;
            _export({
                target: "Object",
                stat: !0
            }, {
                entries: function(e) {
                    return $entries(e)
                }
            });
            var notARegexp = function(e) {
                    if (isRegexp(e)) throw TypeError("The method doesn't accept regular expressions");
                    return e
                },
                MATCH = wellKnownSymbol("match"),
                correctIsRegexpLogic = function(e) {
                    var r = /./;
                    try {
                        "/./" [e](r)
                    } catch (t) {
                        try {
                            return r[MATCH] = !1, "/./" [e](r)
                        } catch (e) {}
                    }
                    return !1
                },
                getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f,
                $startsWith = "".startsWith,
                min$1 = Math.min,
                CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic("startsWith"),
                MDN_POLYFILL_BUG = !(CORRECT_IS_REGEXP_LOGIC || (descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith"), !descriptor || descriptor.writable)),
                descriptor;
            _export({
                target: "String",
                proto: !0,
                forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
            }, {
                startsWith: function(e) {
                    var r = toString(requireObjectCoercible(this));
                    notARegexp(e);
                    var t = toLength(min$1(arguments.length > 1 ? arguments[1] : void 0, r.length)),
                        n = toString(e);
                    return $startsWith ? $startsWith.call(r, n, t) : r.slice(t, t + n.length) === n
                }
            });
            var floor = Math.floor,
                replace = "".replace,
                SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g,
                getSubstitution = function(e, r, t, n, o, a) {
                    var i = t + e.length,
                        s = n.length,
                        c = SUBSTITUTION_SYMBOLS_NO_NAMED;
                    return void 0 !== o && (o = toObject(o), c = SUBSTITUTION_SYMBOLS), replace.call(a, c, (function(a, c) {
                        var l;
                        switch (c.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return r.slice(0, t);
                            case "'":
                                return r.slice(i);
                            case "<":
                                l = o[c.slice(1, -1)];
                                break;
                            default:
                                var u = +c;
                                if (0 === u) return a;
                                if (u > s) {
                                    var f = floor(u / 10);
                                    return 0 === f ? a : f <= s ? void 0 === n[f - 1] ? c.charAt(1) : n[f - 1] + c.charAt(1) : a
                                }
                                l = n[u - 1]
                        }
                        return void 0 === l ? "" : l
                    }))
                },
                REPLACE = wellKnownSymbol("replace"),
                max = Math.max,
                min = Math.min,
                maybeToString = function(e) {
                    return void 0 === e ? e : String(e)
                },
                REPLACE_KEEPS_$0 = "$0" === "a".replace(/./, "$0"),
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = !!/./ [REPLACE] && "" === /./ [REPLACE]("a", "$0"),
                REPLACE_SUPPORTS_NAMED_GROUPS = !fails((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                }));
            fixRegexpWellKnownSymbolLogic("replace", (function(e, r, t) {
                var n = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
                return [function(e, t) {
                    var n = requireObjectCoercible(this),
                        o = null == e ? void 0 : e[REPLACE];
                    return void 0 !== o ? o.call(e, n, t) : r.call(toString(n), e, t)
                }, function(e, o) {
                    var a = anObject(this),
                        i = toString(e);
                    if ("string" == typeof o && -1 === o.indexOf(n) && -1 === o.indexOf("$<")) {
                        var s = t(r, a, i, o);
                        if (s.done) return s.value
                    }
                    var c = "function" == typeof o;
                    c || (o = toString(o));
                    var l = a.global;
                    if (l) {
                        var u = a.unicode;
                        a.lastIndex = 0
                    }
                    for (var f = [];;) {
                        var p = regexpExecAbstract(a, i);
                        if (null === p) break;
                        if (f.push(p), !l) break;
                        "" === toString(p[0]) && (a.lastIndex = advanceStringIndex(i, toLength(a.lastIndex), u))
                    }
                    for (var d = "", y = 0, h = 0; h < f.length; h++) {
                        p = f[h];
                        for (var g = toString(p[0]), A = max(min(toInteger(p.index), i.length), 0), v = [], m = 1; m < p.length; m++) v.push(maybeToString(p[m]));
                        var E = p.groups;
                        if (c) {
                            var I = [g].concat(v, A, i);
                            void 0 !== E && I.push(E);
                            var P = toString(o.apply(void 0, I))
                        } else P = getSubstitution(g, i, A, v, E, o);
                        A >= y && (d += i.slice(y, A) + P, y = A + g.length)
                    }
                    return d + i.slice(y)
                }]
            }), !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
            var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable"),
                MAX_SAFE_INTEGER = 9007199254740991,
                MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded",
                IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails((function() {
                    var e = [];
                    return e[IS_CONCAT_SPREADABLE] = !1, e.concat()[0] !== e
                })),
                SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat"),
                isConcatSpreadable = function(e) {
                    if (!isObject(e)) return !1;
                    var r = e[IS_CONCAT_SPREADABLE];
                    return void 0 !== r ? !!r : isArray(e)
                },
                FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
            _export({
                target: "Array",
                proto: !0,
                forced: FORCED
            }, {
                concat: function(e) {
                    var r, t, n, o, a, i = toObject(this),
                        s = arraySpeciesCreate(i, 0),
                        c = 0;
                    for (r = -1, n = arguments.length; r < n; r++)
                        if (isConcatSpreadable(a = -1 === r ? i : arguments[r])) {
                            if (c + (o = toLength(a.length)) > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                            for (t = 0; t < o; t++, c++) t in a && createProperty(s, c, a[t])
                        } else {
                            if (c >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                            createProperty(s, c++, a)
                        }
                    return s.length = c, s
                }
            });
            var cnt = 0,
                imageCompressionLibUrl, worker;

            function createWorker(e) {
                return "function" == typeof e && (e = "(".concat(e, ")()")), new Worker(URL.createObjectURL(new Blob([e])))
            }

            function createSourceObject(e) {
                return URL.createObjectURL(new Blob([e], {
                    type: "application/javascript"
                }))
            }

            function stringify(e) {
                return JSON.stringify(e, (function(e, r) {
                    return "function" == typeof r ? "BIC_FN:::(function () { return ".concat(r.toString(), " })()") : r
                }))
            }

            function parse(o) {
                if ("string" == typeof o) return o;
                var result = {};
                return Object.entries(o).forEach((function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];
                    if ("string" == typeof value && value.startsWith("BIC_FN:::")) try {
                        result[key] = eval(value.replace(/^BIC_FN:::/, ""))
                    } catch (e) {
                        throw e
                    } else result[key] = parse(value)
                })), result
            }

            function generateLib() {
                return createSourceObject("\n    // reconstruct library\n    function imageCompression (){return (".concat(imageCompression, ").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile, "\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl, "\n    imageCompression.loadImage = ").concat(imageCompression.loadImage, "\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas, "\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas, "\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile, "\n    imageCompression.getExifOrientation = ").concat(imageCompression.getExifOrientation, "\n    imageCompression.handleMaxWidthOrHeight = ").concat(imageCompression.handleMaxWidthOrHeight, "\n    imageCompression.followExifOrientation = ").concat(imageCompression.followExifOrientation, "\n    imageCompression.cleanupCanvasMemory = ").concat(imageCompression.cleanupCanvasMemory, "\n    imageCompression.isAutoOrientationInBrowser = ").concat(imageCompression.isAutoOrientationInBrowser, "\n    imageCompression.approximateBelowMaximumCanvasSizeOfBrowser = ").concat(imageCompression.approximateBelowMaximumCanvasSizeOfBrowser, "\n    imageCompression.getBrowserName = ").concat(imageCompression.getBrowserName, "\n\n    // functions / objects\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n    cleanupCanvasMemory = imageCompression.cleanupCanvasMemory\n    isAutoOrientationInBrowser = imageCompression.isAutoOrientationInBrowser\n    approximateBelowMaximumCanvasSizeOfBrowser = imageCompression.approximateBelowMaximumCanvasSizeOfBrowser\n    getBrowserName = imageCompression.getBrowserName\n    \n    getNewCanvasAndCtx = ").concat(getNewCanvasAndCtx, "\n    CustomFileReader = FileReader\n    CustomFile = File\n    MaxCanvasSize = ").concat(JSON.stringify(MaxCanvasSize), "\n    function compress (){return (").concat(compress, ").apply(null, arguments)}\n\n    // core-js\n    function _slicedToArray(arr, n) { return arr }\n    function _typeof(a) { return typeof a }\n    function _objectSpread2(target) {\n      for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i] != null ? arguments[i] : {};\n  \n        Object.assign(target, source)\n      }\n  \n      return target;\n    }\n\n    // Libraries\n    const parse = ").concat(parse, "\n    const UPNG = {}\n    UPNG.toRGBA8 = ").concat(UPNG.toRGBA8, "\n    UPNG.toRGBA8.decodeImage = ").concat(UPNG.toRGBA8.decodeImage, "\n    UPNG.decode = ").concat(UPNG.decode, "\n    UPNG.decode._decompress = ").concat(UPNG.decode._decompress, "\n    UPNG.decode._inflate = ").concat(UPNG.decode._inflate, "\n    UPNG.decode._readInterlace = ").concat(UPNG.decode._readInterlace, "\n    UPNG.decode._getBPP = ").concat(UPNG.decode._getBPP, " \n    UPNG.decode._filterZero = ").concat(UPNG.decode._filterZero, "\n    UPNG.decode._paeth = ").concat(UPNG.decode._paeth, "\n    UPNG.decode._IHDR = ").concat(UPNG.decode._IHDR, "\n    UPNG._bin = parse(").concat(stringify(UPNG._bin), ")\n    UPNG._copyTile = ").concat(UPNG._copyTile, "\n    UPNG.encode = ").concat(UPNG.encode, "\n    UPNG.encodeLL = ").concat(UPNG.encodeLL, " \n    UPNG.encode._main = ").concat(UPNG.encode._main, "\n    UPNG.encode.compressPNG = ").concat(UPNG.encode.compressPNG, " \n    UPNG.encode.compress = ").concat(UPNG.encode.compress, "\n    UPNG.encode.framize = ").concat(UPNG.encode.framize, " \n    UPNG.encode._updateFrame = ").concat(UPNG.encode._updateFrame, " \n    UPNG.encode._prepareDiff = ").concat(UPNG.encode._prepareDiff, " \n    UPNG.encode._filterZero = ").concat(UPNG.encode._filterZero, " \n    UPNG.encode._filterLine = ").concat(UPNG.encode._filterLine, "\n    UPNG.encode.concatRGBA = ").concat(UPNG.encode.concatRGBA, "\n    UPNG.crc = parse(").concat(stringify(UPNG.crc), ")\n    UPNG.crc.table = ( function() {\n    var tab = new Uint32Array(256);\n    for (var n=0; n<256; n++) {\n      var c = n;\n      for (var k=0; k<8; k++) {\n        if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n        else        c = c >>> 1;\n      }\n      tab[n] = c;  }\n    return tab;  })()\n    UPNG.quantize = ").concat(UPNG.quantize, " \n    UPNG.quantize.getKDtree = ").concat(UPNG.quantize.getKDtree, " \n    UPNG.quantize.getNearest = ").concat(UPNG.quantize.getNearest, " \n    UPNG.quantize.planeDst = ").concat(UPNG.quantize.planeDst, " \n    UPNG.quantize.dist = ").concat(UPNG.quantize.dist, "     \n    UPNG.quantize.splitPixels = ").concat(UPNG.quantize.splitPixels, " \n    UPNG.quantize.vecDot = ").concat(UPNG.quantize.vecDot, " \n    UPNG.quantize.stats = ").concat(UPNG.quantize.stats, " \n    UPNG.quantize.estats = ").concat(UPNG.quantize.estats, "\n    UPNG.M4 = parse(").concat(stringify(UPNG.M4), ")\n    UPNG.encode.concatRGBA = ").concat(UPNG.encode.concatRGBA, '\n    UPNG.inflateRaw=function(){\n    var H={};H.H={};H.H.N=function(N,W){var R=Uint8Array,i=0,m=0,J=0,h=0,Q=0,X=0,u=0,w=0,d=0,v,C;\n      if(N[0]==3&&N[1]==0)return W?W:new R(0);var V=H.H,n=V.b,A=V.e,l=V.R,M=V.n,I=V.A,e=V.Z,b=V.m,Z=W==null;\n      if(Z)W=new R(N.length>>>2<<5);while(i==0){i=n(N,d,1);m=n(N,d+1,2);d+=3;if(m==0){if((d&7)!=0)d+=8-(d&7);\n        var D=(d>>>3)+4,q=N[D-4]|N[D-3]<<8;if(Z)W=H.H.W(W,w+q);W.set(new R(N.buffer,N.byteOffset+D,q),w);d=D+q<<3;\n        w+=q;continue}if(Z)W=H.H.W(W,w+(1<<17));if(m==1){v=b.J;C=b.h;X=(1<<9)-1;u=(1<<5)-1}if(m==2){J=A(N,d,5)+257;\n        h=A(N,d+5,5)+1;Q=A(N,d+10,4)+4;d+=14;var E=d,j=1;for(var c=0;c<38;c+=2){b.Q[c]=0;b.Q[c+1]=0}for(var c=0;\n                                                                                                        c<Q;c++){var K=A(N,d+c*3,3);b.Q[(b.X[c]<<1)+1]=K;if(K>j)j=K}d+=3*Q;M(b.Q,j);I(b.Q,j,b.u);v=b.w;C=b.d;\n        d=l(b.u,(1<<j)-1,J+h,N,d,b.v);var r=V.V(b.v,0,J,b.C);X=(1<<r)-1;var S=V.V(b.v,J,h,b.D);u=(1<<S)-1;M(b.C,r);\n        I(b.C,r,v);M(b.D,S);I(b.D,S,C)}while(!0){var T=v[e(N,d)&X];d+=T&15;var p=T>>>4;if(p>>>8==0){W[w++]=p}else if(p==256){break}else{var z=w+p-254;\n        if(p>264){var _=b.q[p-257];z=w+(_>>>3)+A(N,d,_&7);d+=_&7}var $=C[e(N,d)&u];d+=$&15;var s=$>>>4,Y=b.c[s],a=(Y>>>4)+n(N,d,Y&15);\n        d+=Y&15;while(w<z){W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a]}w=z}}}return W.length==w?W:W.slice(0,w)};\n      H.H.W=function(N,W){var R=N.length;if(W<=R)return N;var V=new Uint8Array(R<<1);V.set(N,0);return V};\n      H.H.R=function(N,W,R,V,n,A){var l=H.H.e,M=H.H.Z,I=0;while(I<R){var e=N[M(V,n)&W];n+=e&15;var b=e>>>4;\n        if(b<=15){A[I]=b;I++}else{var Z=0,m=0;if(b==16){m=3+l(V,n,2);n+=2;Z=A[I-1]}else if(b==17){m=3+l(V,n,3);\n          n+=3}else if(b==18){m=11+l(V,n,7);n+=7}var J=I+m;while(I<J){A[I]=Z;I++}}}return n};H.H.V=function(N,W,R,V){var n=0,A=0,l=V.length>>>1;\n        while(A<R){var M=N[A+W];V[A<<1]=0;V[(A<<1)+1]=M;if(M>n)n=M;A++}while(A<l){V[A<<1]=0;V[(A<<1)+1]=0;A++}return n};\n      H.H.n=function(N,W){var R=H.H.m,V=N.length,n,A,l,M,I,e=R.j;for(var M=0;M<=W;M++)e[M]=0;for(M=1;M<V;M+=2)e[N[M]]++;\n        var b=R.K;n=0;e[0]=0;for(A=1;A<=W;A++){n=n+e[A-1]<<1;b[A]=n}for(l=0;l<V;l+=2){I=N[l+1];if(I!=0){N[l]=b[I];\n          b[I]++}}};H.H.A=function(N,W,R){var V=N.length,n=H.H.m,A=n.r;for(var l=0;l<V;l+=2)if(N[l+1]!=0){var M=l>>1,I=N[l+1],e=M<<4|I,b=W-I,Z=N[l]<<b,m=Z+(1<<b);\n        while(Z!=m){var J=A[Z]>>>15-W;R[J]=e;Z++}}};H.H.l=function(N,W){var R=H.H.m.r,V=15-W;for(var n=0;n<N.length;\n                                                                                                 n+=2){var A=N[n]<<W-N[n+1];N[n]=R[A]>>>V}};H.H.M=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8};\n      H.H.I=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8;N[V+2]|=R>>>16};H.H.e=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8)>>>(W&7)&(1<<R)-1};\n      H.H.b=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)&(1<<R)-1};H.H.Z=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)};\n      H.H.i=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16|N[(W>>>3)+3]<<24)>>>(W&7)};H.H.m=function(){var N=Uint16Array,W=Uint32Array;\n        return{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(1<<15),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(1<<16),g:new N(1<<15)}}();\n      (function(){var N=H.H.m,W=1<<15;for(var R=0;R<W;R++){var V=R;V=(V&2863311530)>>>1|(V&1431655765)<<1;\n        V=(V&3435973836)>>>2|(V&858993459)<<2;V=(V&4042322160)>>>4|(V&252645135)<<4;V=(V&4278255360)>>>8|(V&16711935)<<8;\n        N.r[R]=(V>>>16|V<<16)>>>17}function n(A,l,M){while(l--!=0)A.push(0,M)}for(var R=0;R<32;R++){N.q[R]=N.S[R]<<3|N.T[R];\n        N.c[R]=N.p[R]<<4|N.z[R]}n(N._,144,8);n(N._,255-143,9);n(N._,279-255,7);n(N._,287-279,8);H.H.n(N._,9);\n        H.H.A(N._,9,N.J);H.H.l(N._,9);n(N.$,32,5);H.H.n(N.$,5);H.H.A(N.$,5,N.h);H.H.l(N.$,5);n(N.Q,19,0);n(N.C,286,0);\n        n(N.D,30,0);n(N.v,320,0)}());return H.H.N}()\n    \n    const UZIP = {}\n    UZIP["parse"] = ').concat(UZIP_1.parse, "\n    UZIP._readLocal = ").concat(UZIP_1._readLocal, "\n    UZIP.inflateRaw = ").concat(UZIP_1.inflateRaw, "\n    UZIP.inflate = ").concat(UZIP_1.inflate, "\n    UZIP.deflate = ").concat(UZIP_1.deflate, "\n    UZIP.deflateRaw = ").concat(UZIP_1.deflateRaw, "\n    UZIP.encode = ").concat(UZIP_1.encode, "\n    UZIP._noNeed = ").concat(UZIP_1._noNeed, "\n    UZIP._writeHeader = ").concat(UZIP_1._writeHeader, "\n    UZIP.crc = parse(").concat(stringify(UZIP_1.crc), ")\n    UZIP.crc.table = ( function() {\n      var tab = new Uint32Array(256);\n      for (var n=0; n<256; n++) {\n        var c = n;\n        for (var k=0; k<8; k++) {\n          if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n          else        c = c >>> 1;\n        }\n        tab[n] = c;  }\n      return tab;  })()\n    \n    UZIP.adler = ").concat(UZIP_1.adler, "\n    UZIP.bin = parse(").concat(stringify(UZIP_1.bin), ")\n    UZIP.F = {}\n    UZIP.F.deflateRaw = ").concat(UZIP_1.F.deflateRaw, "\n    UZIP.F._bestMatch = ").concat(UZIP_1.F._bestMatch, "\n    UZIP.F._howLong = ").concat(UZIP_1.F._howLong, "\n    UZIP.F._hash = ").concat(UZIP_1.F._hash, "\n    UZIP.saved = ").concat(UZIP_1.saved, "\n    UZIP.F._writeBlock = ").concat(UZIP_1.F._writeBlock, "\n    UZIP.F._copyExact = ").concat(UZIP_1.F._copyExact, "\n    UZIP.F.getTrees = ").concat(UZIP_1.F.getTrees, "\n    UZIP.F.getSecond = ").concat(UZIP_1.F.getSecond, "\n    UZIP.F.nonZero = ").concat(UZIP_1.F.nonZero, "\n    UZIP.F.contSize = ").concat(UZIP_1.F.contSize, "\n    UZIP.F._codeTiny = ").concat(UZIP_1.F._codeTiny, " \n    UZIP.F._lenCodes = ").concat(UZIP_1.F._lenCodes, " \n    UZIP.F._hufTree = ").concat(UZIP_1.F._hufTree, " \n    UZIP.F.setDepth = ").concat(UZIP_1.F.setDepth, " \n    UZIP.F.restrictDepth = ").concat(UZIP_1.F.restrictDepth, "\n    UZIP.F._goodIndex = ").concat(UZIP_1.F._goodIndex, " \n    UZIP.F._writeLit = ").concat(UZIP_1.F._writeLit, " \n    UZIP.F.inflate = ").concat(UZIP_1.F.inflate, " \n    UZIP.F._check = ").concat(UZIP_1.F._check, " \n    UZIP.F._decodeTiny = ").concat(UZIP_1.F._decodeTiny, " \n    UZIP.F._copyOut = ").concat(UZIP_1.F._copyOut, " \n    UZIP.F.makeCodes = ").concat(UZIP_1.F.makeCodes, " \n    UZIP.F.codes2map = ").concat(UZIP_1.F.codes2map, " \n    UZIP.F.revCodes = ").concat(UZIP_1.F.revCodes, " \n\n    // used only in deflate\n    UZIP.F._putsE = ").concat(UZIP_1.F._putsE, "\n    UZIP.F._putsF = ").concat(UZIP_1.F._putsF, "\n  \n    UZIP.F._bitsE = ").concat(UZIP_1.F._bitsE, "\n    UZIP.F._bitsF = ").concat(UZIP_1.F._bitsF, "\n\n    UZIP.F._get17 = ").concat(UZIP_1.F._get17, "\n    UZIP.F._get25 = ").concat(UZIP_1.F._get25, "\n    UZIP.F.U = function(){\n      var u16=Uint16Array, u32=Uint32Array;\n      return {\n        next_code : new u16(16),\n        bl_count  : new u16(16),\n        ordr : [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],\n        of0  : [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],\n        exb  : [0,0,0,0,0,0,0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,  4,  5,  5,  5,  5,  0,  0,  0,  0],\n        ldef : new u16(32),\n        df0  : [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577, 65535, 65535],\n        dxb  : [0,0,0,0,1,1,2, 2, 3, 3, 4, 4, 5, 5,  6,  6,  7,  7,  8,  8,   9,   9,  10,  10,  11,  11,  12,   12,   13,   13,     0,     0],\n        ddef : new u32(32),\n        flmap: new u16(  512),  fltree: [],\n        fdmap: new u16(   32),  fdtree: [],\n        lmap : new u16(32768),  ltree : [],  ttree:[],\n        dmap : new u16(32768),  dtree : [],\n        imap : new u16(  512),  itree : [],\n        //rev9 : new u16(  512)\n        rev15: new u16(1<<15),\n        lhst : new u32(286), dhst : new u32( 30), ihst : new u32(19),\n        lits : new u32(15000),\n        strt : new u16(1<<16),\n        prev : new u16(1<<15)\n      };\n    } ();\n\n    (function(){\n      var U = UZIP.F.U;\n      var len = 1<<15;\n      for(var i=0; i<len; i++) {\n        var x = i;\n        x = (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));\n        x = (((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2));\n        x = (((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4));\n        x = (((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8));\n        U.rev15[i] = (((x >>> 16) | (x << 16)))>>>17;\n      }\n  \n      function pushV(tgt, n, sv) {  while(n--!=0) tgt.push(0,sv);  }\n  \n      for(var i=0; i<32; i++) {  U.ldef[i]=(U.of0[i]<<3)|U.exb[i];  U.ddef[i]=(U.df0[i]<<4)|U.dxb[i];  }\n  \n      pushV(U.fltree, 144, 8);  pushV(U.fltree, 255-143, 9);  pushV(U.fltree, 279-255, 7);  pushV(U.fltree,287-279,8);\n      /*\n        var i = 0;\n        for(; i<=143; i++) U.fltree.push(0,8);\n        for(; i<=255; i++) U.fltree.push(0,9);\n        for(; i<=279; i++) U.fltree.push(0,7);\n        for(; i<=287; i++) U.fltree.push(0,8);\n        */\n      UZIP.F.makeCodes(U.fltree, 9);\n      UZIP.F.codes2map(U.fltree, 9, U.flmap);\n      UZIP.F.revCodes (U.fltree, 9)\n  \n      pushV(U.fdtree,32,5);\n      //for(i=0;i<32; i++) U.fdtree.push(0,5);\n      UZIP.F.makeCodes(U.fdtree, 5);\n      UZIP.F.codes2map(U.fdtree, 5, U.fdmap);\n      UZIP.F.revCodes (U.fdtree, 5)\n  \n      pushV(U.itree,19,0);  pushV(U.ltree,286,0);  pushV(U.dtree,30,0);  pushV(U.ttree,320,0);\n      /*\n        for(var i=0; i< 19; i++) U.itree.push(0,0);\n        for(var i=0; i<286; i++) U.ltree.push(0,0);\n        for(var i=0; i< 30; i++) U.dtree.push(0,0);\n        for(var i=0; i<320; i++) U.ttree.push(0,0);\n        */\n    })()\n    "))
            }

            function generateWorkerScript() {
                return createWorker("\n    let scriptImported = false\n    self.addEventListener('message', async (e) => {\n      const { file, id, imageCompressionLibUrl, options } = e.data\n      options.onProgress = (progress) => self.postMessage({ progress, id })\n      try {\n        if (!scriptImported) {\n          // console.log('[worker] importScripts', imageCompressionLibUrl)\n          self.importScripts(imageCompressionLibUrl)\n          scriptImported = true\n        }\n        // console.log('[worker] self', self)\n        const compressedFile = await imageCompression(file, options)\n        self.postMessage({ file: compressedFile, id })\n      } catch (e) {\n        // console.error('[worker] error', e)\n        self.postMessage({ error: e.message + '\\n' + e.stack, id })\n      }\n    })\n  ")
            }

            function compressOnWebWorker(e, r) {
                return new Promise((function(t, n) {
                    return new Promise((function(o, a) {
                        var i = cnt++;
                        return imageCompressionLibUrl || (imageCompressionLibUrl = generateLib()), worker || (worker = generateWorkerScript()), worker.addEventListener("message", (function e(o) {
                            if (o.data.id === i) {
                                if (void 0 !== o.data.progress) return void r.onProgress(o.data.progress);
                                worker.removeEventListener("message", e), o.data.error && n(new Error(o.data.error)), t(o.data.file)
                            }
                        })), worker.addEventListener("error", n), worker.postMessage({
                            file: e,
                            id: i,
                            imageCompressionLibUrl: imageCompressionLibUrl,
                            options: _objectSpread2(_objectSpread2({}, r), {}, {
                                onProgress: void 0
                            })
                        }), o()
                    }))
                }))
            }

            function imageCompression(e, r) {
                return new Promise((function(t, n) {
                    var o, a, i, s, c, l;
                    if (o = _objectSpread2({}, r), i = 0, s = o.onProgress, o.maxSizeMB = o.maxSizeMB || Number.POSITIVE_INFINITY, c = "boolean" != typeof o.useWebWorker || o.useWebWorker, delete o.useWebWorker, o.onProgress = function(e) {
                            i = e, "function" == typeof s && s(i)
                        }, !(e instanceof Blob || e instanceof CustomFile)) return n(new Error("The file given is not an instance of Blob or File"));
                    if (!/^image/.test(e.type)) return n(new Error("The file given is not an image"));
                    if (l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, !c || "function" != typeof Worker || l) return compress(e, o).then(function(e) {
                        try {
                            return a = e, p.call(this)
                        } catch (e) {
                            return n(e)
                        }
                    }.bind(this), n);
                    var u = function() {
                            try {
                                return p.call(this)
                            } catch (e) {
                                return n(e)
                            }
                        }.bind(this),
                        f = function(r) {
                            try {
                                return compress(e, o).then((function(e) {
                                    try {
                                        return a = e, u()
                                    } catch (e) {
                                        return n(e)
                                    }
                                }), n)
                            } catch (e) {
                                return n(e)
                            }
                        };
                    try {
                        return compressOnWebWorker(e, o).then((function(e) {
                            try {
                                return a = e, u()
                            } catch (e) {
                                return f()
                            }
                        }), f)
                    } catch (e) {
                        f()
                    }

                    function p() {
                        try {
                            a.name = e.name, a.lastModified = e.lastModified
                        } catch (e) {}
                        return t(a)
                    }
                }))
            }
            imageCompression.getDataUrlFromFile = getDataUrlFromFile, imageCompression.getFilefromDataUrl = getFilefromDataUrl, imageCompression.loadImage = loadImage, imageCompression.drawImageInCanvas = drawImageInCanvas, imageCompression.drawFileInCanvas = drawFileInCanvas, imageCompression.canvasToFile = canvasToFile, imageCompression.getExifOrientation = getExifOrientation, imageCompression.handleMaxWidthOrHeight = handleMaxWidthOrHeight, imageCompression.followExifOrientation = followExifOrientation, imageCompression.cleanupCanvasMemory = cleanupCanvasMemory, imageCompression.isAutoOrientationInBrowser = isAutoOrientationInBrowser, imageCompression.approximateBelowMaximumCanvasSizeOfBrowser = approximateBelowMaximumCanvasSizeOfBrowser, imageCompression.getBrowserName = getBrowserName, imageCompression.version = "1.0.15"
        }
    }
]);
//# sourceMappingURL=31.e568e621.chunk.js.map