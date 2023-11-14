(this.webpackJsonpwholesalecart = this.webpackJsonpwholesalecart || []).push([
    [2],
    [, , , , , , , , , function(e, t, a) {
        "use strict";
        t.a = "https://api.wholesalecart.com/v2/"
    }, , , , , , , , , function(e, t, a) {
        "use strict";
        a.d(t, "c", (function() {
            return l
        })), a.d(t, "a", (function() {
            return d
        })), a.d(t, "b", (function() {
            return u
        })), a.d(t, "d", (function() {
            return m
        }));
        var n = a(15),
            s = a(4),
            i = a.n(s),
            c = a(28),
            r = a(19),
            o = a(9);
        var l = function(e, t) {
                var a = e ? Object(n.a)({}, e) : {};
                a.platform = e.url.replace(/.+\/\/|www.|\..+/g, ""), a.url = e.url, i.a.post(o.a + "user/referer", a).then((function(a) {
                    console.log(a.data), t(!0), localStorage.setItem("referer", e.url), e.agl_id && localStorage.setItem("agl_id", e.agl_id)
                })).catch((function(a) {
                    console.log(a), localStorage.setItem("referer", e.url), t(!1)
                }))
            },
            d = function(e, t, a, n) {
                return function(s) {
                    i.a.post(o.a + "user/verify-otp", e).then((function(e) {
                        if (e.data && e.data.success) {
                            var i = e.data.success,
                                c = i.token,
                                o = i.name,
                                l = i.phone;
                            localStorage.setItem("agl", c), localStorage.setItem("profile", JSON.stringify({
                                name: o,
                                phone: l
                            })), Object(r.a)(c), s(m(!0)), n ? t.push("/account") : a(!0)
                        }
                    })).catch((function(e) {
                        a(!1, Object(c.a)(e))
                    }))
                }
            },
            u = function() {
                return function(e) {
                    localStorage.removeItem("agl"), localStorage.removeItem("profile"), localStorage.removeItem("prev"), localStorage.removeItem("referer"), localStorage.removeItem("agl_id"), Object(r.a)(null), e(m(!1)), window.location = "/login"
                }
            },
            m = function(e) {
                return {
                    type: "SET_USER_AUTH",
                    payload: e
                }
            }
    }, function(e, t, a) {
        "use strict";
        var n = a(4),
            s = a.n(n);
        t.a = function(e) {
            e ? s.a.defaults.headers.common.Authorization = "Bearer " + e : delete s.a.defaults.headers.common.Authorization
        }
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }));
        a(1), a(206);
        var n = a(0);

        function s(e) {
            var t = e.white;
            return Object(n.jsxs)("div", {
                className: t ? "whiteRing" : "lds-ring",
                children: [Object(n.jsx)("div", {}), Object(n.jsx)("div", {}), Object(n.jsx)("div", {}), Object(n.jsx)("div", {})]
            })
        }
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/arrow_right.466cbb54.svg"
    }, , function(e, t, a) {
        "use strict";
        t.a = "https://api.wholesalecart.com/v2"
    }, , , , function(e, t, a) {
        "use strict";
        t.a = function(e) {
            if (console.log(e), e && e.response && console.log(e.response), e.response && e.response.data && e.response.data.errors && "string" !== typeof e.response.data.errors) {
                var t = e.response.data.errors[Object.keys(e.response.data.errors)[0]];
                if ("string" === typeof t[0] && t[0].length > 5) return t[0]
            } else {
                if (!(e && e.response && e.response.data && e.response.data.error && "string" !== typeof e.response.data.error)) return e && e.response && e.response.data && e.response.data.message && "string" === typeof e.response.data.message ? e.response.data.message : e && e.response && e.response.data && e.response.data.error && "string" === typeof e.response.data.error ? e.response.data.error : "Unknown Server Error";
                var a = e.response.data.error[Object.keys(e.response.data.error)[0]];
                if ("string" === typeof a[0] && a[0].length > 5) return a[0]
            }
        }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "c", (function() {
            return o
        })), a.d(t, "l", (function() {
            return l
        })), a.d(t, "g", (function() {
            return d
        })), a.d(t, "f", (function() {
            return u
        })), a.d(t, "e", (function() {
            return m
        })), a.d(t, "d", (function() {
            return h
        })), a.d(t, "i", (function() {
            return j
        })), a.d(t, "a", (function() {
            return b
        })), a.d(t, "k", (function() {
            return g
        })), a.d(t, "j", (function() {
            return p
        })), a.d(t, "h", (function() {
            return f
        })), a.d(t, "b", (function() {
            return O
        }));
        var n = a(4),
            s = a.n(n),
            i = a(28),
            c = a(9),
            r = a(54),
            o = function(e) {
                var t = "".concat(c.a, "user/profile");
                s.a.get(t).then((function(t) {
                    console.log(t), e(t.data.data)
                })).catch((function(t) {
                    Object(r.a)(t), console.log(t), e(!1)
                }))
            },
            l = function(e, t, a) {
                t(!0);
                var n = "".concat(c.a, "user/update-profile");
                s.a.post(n, e).then((function(e) {
                    console.log(e), t(!1), a("updated")
                })).catch((function(e) {
                    t(!1)
                }))
            },
            d = function(e, t, a) {
                var n = "".concat(c.a, "user/balance-transaction?page=").concat(t);
                s.a.get(n).then((function(t) {
                    console.log(t.data), e(t.data.data), a(t.data.meta)
                })).catch((function(t) {
                    console.log(t), e([])
                }))
            },
            u = function(e) {
                var t = "".concat(c.a, "user/stats");
                s.a.get(t).then((function(t) {
                    console.log(t.data), e(t.data)
                })).catch((function(t) {
                    e(!1)
                }))
            },
            m = function(e, t) {
                var a = "".concat(c.a, "user/orders/").concat(e);
                s.a.get(a).then((function(e) {
                    console.log(e.data), t(e.data.data)
                })).catch((function(e) {
                    console.log(e.response), t(!1)
                }))
            },
            h = function(e, t) {
                t(!0);
                var a = "".concat(c.a, "user/invoices");
                s.a.get(a).then((function(a) {
                    e(a.data.data), t(!1)
                })).catch((function(a) {
                    e([]), t(!1)
                }))
            },
            j = function(e) {
                s()({
                    method: "get",
                    url: c.a + "user/support/categories"
                }).then((function(t) {
                    console.log(t.data), e(t.data)
                })).catch((function(e) {
                    console.log(e.response)
                }))
            },
            b = function(e, t) {
                s.a.post(c.a + "user/support/ticket", e).then((function(e) {
                    t(!0, "success")
                })).catch((function(e) {
                    t(!1, Object(i.a)(e))
                }))
            },
            g = function(e) {
                s.a.get(c.a + "user/support/ticket").then((function(t) {
                    e(t.data)
                })).catch((function(t) {
                    e(null)
                }))
            },
            p = function(e, t) {
                s.a.get(c.a + "user/support/ticket/".concat(e)).then((function(e) {
                    t(e.data)
                })).catch((function(e) {
                    t(null)
                }))
            },
            f = function(e, t) {
                s.a.get(c.a + "user/order-amount").then((function(e) {
                    t(e.data)
                })).catch((function(e) {
                    t(null)
                }))
            },
            O = function(e, t) {
                s.a.post(c.a + "user/support/conversation", e).then((function(e) {
                    t(!0, "success")
                })).catch((function(e) {
                    t(!1, Object(i.a)(e))
                }))
            }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return j
        }));
        var n = a(2),
            s = a(1),
            i = a(6),
            c = a(5),
            r = a(11),
            o = a(18),
            l = a(48),
            d = a(49),
            u = a(29),
            m = a(17),
            h = a(0);

        function j() {
            var e = Object(r.b)(),
                t = Object(s.useState)("none"),
                a = Object(n.a)(t, 2),
                j = a[0],
                b = a[1],
                g = Object(i.useLocation)(),
                p = Object(s.useState)(!1),
                f = Object(n.a)(p, 2),
                O = f[0],
                x = f[1];
            Object(s.useEffect)((function() {
                Object(u.c)(x)
            }), []);
            var v = localStorage.profile ? JSON.parse(localStorage.profile).name : O ? O.phone : "",
                y = O ? O.balance : 0,
                S = function() {
                    e(Object(o.b)())
                };
            return Object(h.jsxs)("div", {
                className: "accNav",
                children: [Object(h.jsxs)("div", {
                    className: "accNavProfile",
                    children: [Object(h.jsx)("div", {
                        style: {
                            width: 64,
                            height: 64,
                            borderRadius: "80px",
                            color: "#fff",
                            background: "#aaa",
                            marginBottom: "8px",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            fontSize: "20px"
                        },
                        children: v ? v.charAt(0) : "U"
                    }), Object(h.jsx)("h1", {
                        style: {
                            fontSize: "18px",
                            textTransform: "uppercase",
                            marginBottom: "4px"
                        },
                        children: v
                    }), Object(h.jsx)("div", {
                        className: "accNavBalance",
                        children: Object(h.jsxs)("span", {
                            className: "accNavAmount",
                            children: ["Balance: ", Object(h.jsx)(d.a, {
                                amount: y
                            })]
                        })
                    })]
                }), (null === O || void 0 === O ? void 0 : O.crm_manager) && Object(h.jsxs)("div", {
                    style: {
                        borderBottom: "3px solid #eee"
                    },
                    children: [Object(h.jsxs)("div", {
                        className: "flexRow p1",
                        style: {
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [Object(h.jsxs)("div", {
                            children: [16716 !== (null === O || void 0 === O ? void 0 : O.crm_manager.id) && Object(h.jsx)("span", {
                                style: {
                                    fontWeight: "bold"
                                },
                                children: null === O || void 0 === O ? void 0 : O.crm_manager.name
                            }), Object(h.jsx)("p", {
                                style: {
                                    fontSize: "14px",
                                    margin: "0.125rem 0",
                                    color: "#444",
                                    fontWeight: 600
                                },
                                children: 16716 === (null === O || void 0 === O ? void 0 : O.crm_manager.id) ? "Customer Support" : "Your Account Manager"
                            }), Object(h.jsx)("p", {
                                style: {
                                    fontSize: "13px",
                                    color: "#444",
                                    fontWeight: 600,
                                    marginTop: "0.225rem"
                                },
                                children: null === O || void 0 === O ? void 0 : O.crm_manager.hotline
                            })]
                        }), Object(h.jsx)("a", {
                            href: "tel:".concat(null === O || void 0 === O ? void 0 : O.crm_manager.hotline),
                            style: {
                                width: "32px",
                                height: "32px",
                                background: "#111",
                                borderRadius: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: Object(h.jsx)(m.b, {
                                color: "#fff"
                            })
                        })]
                    }), Object(h.jsx)("p", {
                        style: {
                            fontSize: "14px",
                            fontWeight: 600,
                            backgroundColor: "#FBF2CD",
                            textAlign: "center",
                            padding: "0.5rem"
                        },
                        children: "Office Time: 10AM - 7PM"
                    })]
                }), "logout" === j && Object(h.jsx)(l.a, {
                    type: "regular",
                    setPopUp: b,
                    title: "Confirmation",
                    message: "Are you sure want to logout?",
                    bt1Text: "Yes",
                    bt1Action: S,
                    bt2Text: "No"
                }), Object(h.jsx)("div", {
                    className: "accNavList",
                    children: Object(h.jsxs)("ul", {
                        children: [Object(h.jsx)("li", {
                            className: g.pathname.length < 12 ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account",
                                "aria-label": "account",
                                title: "Account",
                                children: [Object(h.jsx)(m.g, {
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Dashboard"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/orders") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/orders",
                                "aria-label": "account",
                                title: "Account",
                                children: [Object(h.jsx)(m.a, {
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Orders"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/balance") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/balance",
                                "aria-label": "account",
                                title: "Account",
                                children: [Object(h.jsx)(m.d, {
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Balance"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/delivery") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/delivery",
                                "aria-label": "account",
                                title: "Account",
                                children: [Object(h.jsx)(m.c, {
                                    size: 18,
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Delivery"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/support") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/support",
                                "aria-label": "account",
                                title: "Support",
                                children: [Object(h.jsx)(m.e, {
                                    size: 18,
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Support"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/agentship") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/agentship",
                                "aria-label": "account",
                                title: "Agentship",
                                children: [Object(h.jsx)(m.h, {
                                    size: 18,
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Agentship"
                                })]
                            })
                        }), Object(h.jsx)("li", {
                            className: g.pathname.includes("/account/setting") ? "accNavListSelected" : "",
                            children: Object(h.jsxs)(c.b, {
                                to: "/account/settings",
                                "aria-label": "account",
                                title: "Account",
                                children: [Object(h.jsx)(m.i, {
                                    size: 18,
                                    color: "#111"
                                }), Object(h.jsx)("div", {
                                    className: "accNavListDiv",
                                    children: "Settings"
                                })]
                            })
                        }), Object(h.jsxs)("li", {
                            style: {
                                display: "flex",
                                padding: "16px 24px",
                                alignItems: "center"
                            },
                            onClick: function() {
                                return S()
                            },
                            children: [Object(h.jsx)(m.f, {
                                size: 18
                            }), Object(h.jsx)("div", {
                                className: "accNavListDiv",
                                children: "Logout"
                            })]
                        })]
                    })
                })]
            })
        }
    }, , function(e, t, a) {
        var n = {
            "./11sale.svg": 85,
            "./404.svg": 86,
            "./agentship1.svg": 87,
            "./agentship2.svg": 140,
            "./automobile.svg": 141,
            "./baby_items.svg": 142,
            "./bank_receipt.svg": 88,
            "./beauty_product.svg": 143,
            "./bkash.svg": 89,
            "./bridal.svg": 144,
            "./child-shoe.svg": 145,
            "./clothing.svg": 146,
            "./complete.svg": 90,
            "./contact.svg": 91,
            "./customer.svg": 147,
            "./electronics.svg": 148,
            "./empty.svg": 51,
            "./expand.svg": 149,
            "./facebook.svg": 150,
            "./facebook_round.svg": 92,
            "./failed.svg": 93,
            "./food.svg": 151,
            "./gift.svg": 94,
            "./grocery.svg": 152,
            "./handbag.svg": 153,
            "./headphone.svg": 154,
            "./health.svg": 155,
            "./home_imporvements.svg": 156,
            "./home_improvements.svg": 157,
            "./imageLoading.svg": 158,
            "./industry.svg": 159,
            "./instagram.svg": 95,
            "./invoice.svg": 160,
            "./kid.svg": 161,
            "./laptop.svg": 162,
            "./linkedin.svg": 96,
            "./login.svg": 97,
            "./logo.svg": 163,
            "./logo_vertical.svg": 164,
            "./logo_white.svg": 165,
            "./mail_round.svg": 166,
            "./mens_clothing.svg": 167,
            "./mobile.svg": 168,
            "./mobile_app.svg": 169,
            "./mouse.svg": 170,
            "./nagad.svg": 98,
            "./nav_dw.svg": 171,
            "./necklace.svg": 172,
            "./nodata.svg": 99,
            "./offers.svg": 173,
            "./order_process.svg": 174,
            "./payment.svg": 175,
            "./pending.svg": 100,
            "./perfume.svg": 176,
            "./pet.svg": 177,
            "./playstore.svg": 178,
            "./review.svg": 179,
            "./seminar.svg": 180,
            "./share.svg": 181,
            "./shoes.svg": 182,
            "./shop.svg": 183,
            "./shopping.svg": 184,
            "./sport.svg": 185,
            "./suggestion.svg": 186,
            "./sunglass.svg": 187,
            "./test2.svg": 188,
            "./test_logo.svg": 189,
            "./tools.svg": 190,
            "./tracking.svg": 191,
            "./travel.svg": 192,
            "./twitter_round.svg": 193,
            "./user.svg": 194,
            "./wallet.svg": 101,
            "./watch.svg": 195,
            "./weeding.svg": 196,
            "./whatsapp_round.svg": 102,
            "./wholesalecart_icon.svg": 197,
            "./wholesalecart_logo.svg": 198,
            "./wholesalecart_logo2.svg": 199,
            "./wholesalecart_logo3.svg": 200,
            "./wholesalecart_new.svg": 201,
            "./wishlist.svg": 103,
            "./women-shoe.svg": 202,
            "./youtube.svg": 104
        };

        function s(e) {
            var t = i(e);
            return a(t)
        }

        function i(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.resolve = i, e.exports = s, s.id = 32
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }));
        a(1);
        var n = a(0);

        function s(e) {
            var t = e.name,
                a = (e.type, e.onClick),
                s = null;
            return t && (s = t.toLowerCase().includes("completed") ? {
                name: t,
                color: "#237804"
            } : t.toLowerCase().includes("pending") ? {
                name: t,
                color: "#8c8c8c"
            } : t.toLowerCase().includes("processing") || t.toLowerCase().includes("debit") ? {
                name: t,
                color: "#d48806"
            } : t.toLowerCase().includes("partially") ? {
                name: t,
                color: "#3f6600"
            } : t.toLowerCase().includes("hold") ? {
                name: t,
                color: "#F8DDA7"
            } : t.toLowerCase().includes("completed") ? {
                name: t,
                color: "#3f6600"
            } : t.toLowerCase().includes("cancelled") || t.toLowerCase().includes("failed") || t.toLowerCase().includes("redx") ? {
                name: t,
                color: "#a8071a"
            } : t.toLowerCase().includes("repurchase") ? {
                name: t,
                color: "#780650"
            } : t.toLowerCase().includes("rocket") ? {
                name: t,
                color: "#89288F"
            } : t.toLowerCase().includes("bkash") ? {
                name: t,
                color: "#E3106E"
            } : t.toLowerCase().includes("ssl") ? {
                name: t,
                color: "#22639C"
            } : t.toLowerCase().includes("balance") ? {
                name: t,
                color: "#000"
            } : t.toLowerCase().includes("nagad") ? {
                name: t,
                color: "#D41111"
            } : t.toLowerCase().includes("1688") ? {
                name: t,
                color: "#ad2102"
            } : t.toLowerCase().includes("alibaba") ? {
                name: t,
                color: "#FF4D74"
            } : {
                name: t,
                color: "#111"
            }), Object(n.jsx)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: s ? Object(n.jsx)("div", {
                    style: {
                        cursor: "pointer",
                        textTransform: "capitalize",
                        backgroundColor: s.color,
                        color: "#fff",
                        padding: "0.175rem .575rem",
                        fontSize: "13px",
                        borderRadius: "4px"
                    },
                    onClick: function() {
                        a && a()
                    },
                    children: s.name
                }) : "--"
            })
        }
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "d", (function() {
            return c
        })), a.d(t, "c", (function() {
            return r
        })), a.d(t, "b", (function() {
            return o
        })), a.d(t, "a", (function() {
            return l
        }));
        var n = a(4),
            s = a.n(n),
            i = a(24),
            c = function(e, t) {
                s()({
                    method: "post",
                    url: i.a + "/user/carts",
                    data: e
                }).then((function(e) {
                    console.log(e.data.cart), e.data.cart && t(e.data.cart.id, e.data.message)
                })).catch((function(e) {
                    console.log(e.response)
                }))
            },
            r = function(e, t, a) {
                s.a.get(i.a + "/user/order-filter" + e).then((function(e) {
                    t(e.data), a && a(!1)
                })).catch((function(e) {
                    a(!0)
                }))
            },
            o = function(e, t, a) {
                s.a.get(i.a + "/user/invoices" + e).then((function(e) {
                    t(e.data), a && a(!1)
                })).catch((function(e) {
                    a(!0)
                }))
            },
            l = function(e, t) {
                s.a.get(i.a + "/user/invoice/".concat(e)).then((function(e) {
                    console.log(e.data), t(e.data)
                })).catch((function(e) {
                    console.log(e.response), t([])
                }))
            }
    }, , , function(e, t, a) {
        "use strict";
        a.d(t, "d", (function() {
            return i
        })), a.d(t, "f", (function() {
            return c
        })), a.d(t, "a", (function() {
            return r
        })), a.d(t, "c", (function() {
            return o
        })), a.d(t, "b", (function() {
            return l
        })), a.d(t, "e", (function() {
            return d
        }));
        var n = a(8),
            s = a.n(n),
            i = "2023-01-17 23:59:59",
            c = "2023-01-10 23:59:59",
            r = "2022-12-30 23:59:59",
            o = {
                start: "2022-10-10 23:59:59",
                end: "2022-10-31 23:59:59",
                end_bn: "\u09e7\u09e8 \u099c\u09c1\u09b2\u09be\u0987, \u09e8\u09e6\u09e8\u09e8",
                low_shipping: (s()(new Date).isBefore(i), 650),
                high_shipping: (s()(new Date).isBefore(i), 780),
                low_shipping_bn: (s()(new Date).isBefore(i), "\u09ec\u09eb\u09e6"),
                high_shipping_bn: (s()(new Date).isBefore(i), "\u09ed\u09ee\u09e6"),
                offer_range: (s()(new Date).isBefore(i), "650 / 780"),
                offer_range_bn: (s()(new Date).isBefore(i), "\u09ec\u09eb\u09e6 / \u09ed\u09ee\u09e6"),
                offer_sea_range: (s()(new Date).isBefore(i), "100 - 350")
            },
            l = function(e, t) {
                var a = e.substr(-2);
                parseInt(a);
                return {
                    fake_price: Math.round(100 * t / 90),
                    percentage: 10
                }
            },
            d = function(e) {
                try {
                    var t = ["\u09e6", "\u09e7", "\u09e8", "\u09e9", "\u09ea", "\u09eb", "\u09ec", "\u09ed", "\u09ee", "\u09ef"];
                    return e.toString().replace(/[0-9]/g, (function(e) {
                        return t[+e]
                    }))
                } catch (a) {}
            }
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return n
        }));
        var n = [{
            id: 1,
            name: "Shoes",
            seller: "shoe",
            icon: "shoes",
            sub: [{
                id: "1001",
                name: "Men Shoes"
            }, {
                id: "1002",
                name: "Men Boots"
            }, {
                id: "1003",
                name: "Ladies Shoes"
            }, {
                id: "1004",
                name: "Ladies Boot"
            }, {
                id: "1005",
                name: "Ladies High Heels"
            }, {
                id: "1006",
                name: "Formal Shoes For Gents"
            }, {
                id: "1007",
                name: "Sandals"
            }, {
                id: "1008",
                name: "Running/ Gym Shoes"
            }, {
                id: "1009",
                name: "Casual Shoes"
            }, {
                id: "1010",
                name: "Loafers For Women"
            }, {
                id: "1011",
                name: "Sports Shoes"
            }, {
                id: "1012",
                name: "Baby Shoes"
            }, {
                id: "1013",
                name: "Low Top Shoes"
            }, {
                id: "1014",
                name: "Rain Boots"
            }, {
                id: "1015",
                name: "Men High Top Shoes"
            }, {
                id: "1016",
                name: "Football/Soccer Shoes"
            }, {
                id: "1017",
                name: "Slippers"
            }]
        }, {
            id: 4,
            name: "Bags",
            seller: "Bag",
            icon: "handbag",
            sub: [{
                id: "4000",
                name: "Ladies Purse"
            }, {
                id: "4001",
                name: "Ladies Bags"
            }, {
                id: "4002",
                name: "Briefcases",
                search: "Handbag Briefcase "
            }, {
                id: "4003",
                name: "Money Clip"
            }, {
                id: "4004",
                name: "Men Wallets"
            }, {
                id: "4005",
                name: "Backpacks"
            }, {
                id: "4006",
                name: "Women Wallets",
                search: "Female Leather Wallet"
            }, {
                id: "4007",
                name: "Travel Bagpacks"
            }, {
                id: "4008",
                name: "Id Cases"
            }, {
                id: "4009",
                name: "Laptop Bags"
            }, {
                id: "4010",
                name: "Suitcase"
            }, {
                id: "4011",
                name: "Waist Bag"
            }, {
                id: "4012",
                name: "Hand Bag"
            }, {
                id: "4013",
                name: "Gift Box"
            }, {
                id: "4014",
                name: "Baseball Caps"
            }]
        }, {
            id: 445,
            name: "Jewelry",
            seller: "jewelry",
            icon: "necklace",
            sub: [{
                id: "17000",
                name: "Men Bracelets",
                search: "Bracelets For Men"
            }, {
                id: "17001",
                name: "Men Earrings",
                search: ""
            }, {
                id: "17002",
                name: "Women Earrings",
                search: "Earrings For Women"
            }, {
                id: "17003",
                name: "Jewellery Cases",
                search: ""
            }, {
                id: "17004",
                name: "Women Necklaces",
                search: "Necklaces"
            }, {
                id: "17005",
                name: "Bridal"
            }, {
                id: "17006",
                name: "Crown For Women",
                search: ""
            }, {
                id: "17007",
                name: "Bride Necklace",
                search: ""
            }, {
                id: "17008",
                name: "Pendant",
                search: ""
            }, {
                id: "17009",
                name: "Bangle",
                search: ""
            }, {
                id: "17010",
                name: "Ring",
                search: ""
            }, {
                id: "17011",
                name: "Anklet"
            }, {
                id: "17012",
                name: "Womwn Tiara"
            }, {
                id: "17013",
                name: "Belly Chain",
                search: ""
            }, {
                id: "17014",
                name: "Jewellery Box",
                search: ""
            }, {
                id: "17015",
                name: "Pin Brooch",
                search: ""
            }, {
                id: "17016",
                name: "Fashion Jewelry"
            }]
        }, {
            id: 8,
            name: "Beauty and Personal Care",
            seller: "makeup",
            icon: "beauty_product",
            sub: [{
                id: "8000",
                name: "Eyeshadow",
                search: ""
            }, {
                id: "8001",
                name: "Eyeliner",
                search: ""
            }, {
                id: "8002",
                name: "Face Powder",
                search: "Face Cream"
            }, {
                id: "8003",
                name: "Makeup Remover",
                search: " Oil Free Makeup Remover"
            }, {
                id: "8004",
                name: "Eye Brushes",
                search: "Eye Shadow Brushes"
            }, {
                id: "8005",
                name: "Hair Removal",
                search: "Hair Removal For Women"
            }, {
                id: "8006",
                name: "Mirrors",
                search: ""
            }, {
                id: "8007",
                name: "Teeth Whitening",
                search: ""
            }, {
                id: "8008",
                name: "Nail Polish",
                search: ""
            }, {
                id: "8009",
                name: "Lip Gloss",
                search: ""
            }, {
                id: "8010",
                name: "Lip Liner",
                search: ""
            }, {
                id: "8011",
                name: "Lip Sticks",
                search: ""
            }, {
                id: "8012",
                name: "Anti Hair Thinning & Loss",
                search: ""
            }, {
                id: "8013",
                name: "Hairspray & Styling",
                search: ""
            }, {
                id: "8014",
                name: "Hair Dryers",
                search: ""
            }, {
                id: "8015",
                name: "Hair Dye",
                search: ""
            }, {
                id: "8016",
                name: "Hair Massage Oil",
                search: ""
            }, {
                id: "8017",
                name: "Irons & Stylers",
                search: "Hair Care"
            }, {
                id: "8018",
                name: "Bath & Shower",
                search: ""
            }, {
                id: "8019",
                name: "Candles & Scents",
                search: ""
            }, {
                id: "8020",
                name: "Lotions & Oil",
                search: ""
            }, {
                id: "8021",
                name: "Perfume",
                search: ""
            }, {
                id: "8022",
                name: "Perfume Sets",
                search: ""
            }, {
                id: "8023",
                name: "Deodorant",
                search: "Body Spray"
            }, {
                id: "8024",
                name: "Soaps",
                search: ""
            }, {
                id: "8025",
                name: "Body Wash",
                search: "Beauty Soap"
            }, {
                id: "8026",
                name: "Hair Conditioner",
                search: ""
            }, {
                id: "8027",
                name: "Toner",
                search: ""
            }, {
                id: "8028",
                name: "Facial Masks",
                search: ""
            }, {
                id: "8029",
                name: "Face Moisturizer",
                search: ""
            }, {
                id: "8030",
                name: "Eye Treatment ",
                search: ""
            }, {
                id: "8031",
                name: "Face Serum",
                search: ""
            }, {
                id: "8032",
                name: "Body Sunscreen",
                search: ""
            }, {
                id: "8033",
                name: "Face Sunscreen",
                search: ""
            }]
        }, {
            id: 2,
            name: "Men\u2019s Clothing",
            seller: "men",
            icon: "mens_clothing",
            sub: [{
                id: "2001",
                name: "Casual Pants For Men",
                search: "Pants Casual For Men"
            }, {
                id: "2002",
                name: "Mens Jeans Pant",
                search: ""
            }, {
                id: "2003",
                name: "Men Suit",
                search: ""
            }, {
                id: "2004",
                name: "Leather Jackets For Men",
                search: ""
            }, {
                id: "2005",
                name: "Winter Pajamas",
                search: ""
            }, {
                id: "2006",
                name: "Shirts",
                search: ""
            }, {
                id: "2007",
                name: "Athletic Shorts",
                search: ""
            }, {
                id: "2008",
                name: "Tie Clips",
                search: ""
            }, {
                id: "2009",
                name: "Mens Sweater",
                search: ""
            }, {
                id: "2010",
                name: "Boxers",
                search: "Mens Underwear Boxer"
            }, {
                id: "2011",
                name: "Mens Hat",
                search: ""
            }, {
                id: "2012",
                name: "Leather Gloves",
                search: ""
            }, {
                id: "2013",
                name: "Men Sweatpants",
                search: "Running Fitness Casual Trouser"
            }, {
                id: "2014",
                name: "Socks",
                search: ""
            }, {
                id: "2015",
                name: "Tie",
                search: "Tie Formal"
            }, {
                id: "2016",
                name: "Bow Ties",
                search: ""
            }, {
                id: "2017",
                name: "Gloves",
                search: ""
            }]
        }, {
            id: 3,
            name: "Women's Clothing",
            seller: "women",
            icon: "clothing",
            sub: [{
                id: "3000",
                name: "Hoodies & Sweatshirts"
            }, {
                id: "3001",
                name: "Women Sets",
                search: ""
            }, {
                id: "3002",
                name: "Womens Suits Blazers",
                search: ""
            }, {
                id: "3003",
                name: "Bodysuits",
                search: "Womens Bodysuits"
            }, {
                id: "3004",
                name: "Womens Coats Jackets",
                search: ""
            }, {
                id: "3005",
                name: "Swimwear",
                search: ""
            }, {
                id: "3006",
                name: "Bikini Sets",
                search: ""
            }, {
                id: "3007",
                name: "Skirts",
                search: ""
            }, {
                id: "3008",
                name: "Womens Jeans",
                search: ""
            }, {
                id: "3009",
                name: "Pants & Capris",
                search: "Womens Pants Capris"
            }, {
                id: "3010",
                name: "Event Dress",
                search: ""
            }, {
                id: "3011",
                name: "Wedding Dresses",
                search: ""
            }, {
                id: "3012",
                name: "Prom Dresses",
                search: ""
            }, {
                id: "3013",
                name: "Evening Dresses",
                search: ""
            }, {
                id: "3014",
                name: "Cosplay Costumes",
                search: ""
            }, {
                id: "3015",
                name: "Bra",
                search: "Bra"
            }, {
                id: "3016",
                name: "Panties",
                search: "Female Panties"
            }, {
                id: "3017",
                name: "Women Socks",
                search: "WOMEN S SOCKS"
            }, {
                id: "3018",
                name: "Bodysuit",
                search: "Bodysuit"
            }, {
                id: "3019",
                name: "Bucket Hats",
                search: "Womens Bucket Hats"
            }, {
                id: "3020",
                name: "Belts",
                search: "Female Belt"
            }, {
                id: "3021",
                name: "Beach Style",
                search: "Womens Beach Fashion"
            }]
        }, {
            id: 5,
            name: "Baby Items",
            seller: "child",
            icon: "child-shoe",
            sub: [{
                id: "5000",
                name: "Baby Cleaning",
                search: ""
            }, {
                id: "5001",
                name: "Baby Bottles",
                search: "Baby Feed Baby Bottle "
            }, {
                id: "5002",
                name: "Changing Mats & Cloth Diapers",
                search: "Baby Diaper Changing Pad"
            }, {
                id: "5003",
                name: "Child Furniture",
                search: ""
            }, {
                id: "5004",
                name: "Diapers",
                search: ""
            }, {
                id: "5005",
                name: "Potty & Washing",
                search: ""
            }, {
                id: "5006",
                name: "Baby Pools & Water Toys",
                search: ""
            }, {
                id: "5007",
                name: "Remote Control Toys",
                search: ""
            }, {
                id: "5008",
                name: "Baby Gift Sets",
                search: ""
            }, {
                id: "5009",
                name: "Children S Formal Dress",
                search: ""
            }, {
                id: "5010",
                name: "Children'S Socks",
                search: ""
            }, {
                id: "5011",
                name: "Children S Swim Suit",
                search: ""
            }, {
                id: "5012",
                name: "Children Under Garments"
            }, {
                id: "5013",
                name: "Chinese Outfits",
                search: ""
            }, {
                id: "5014",
                name: "Cotton Jackets",
                search: "CHILD JACKETS"
            }, {
                id: "5015",
                name: "Baby Skirts Dresses",
                search: ""
            }, {
                id: "5016",
                name: "Baby Sweaters",
                search: ""
            }, {
                id: "5017",
                name: "Baby Shoes",
                search: ""
            }, {
                id: "5018",
                name: "Baby Sports Shoes",
                search: ""
            }, {
                id: "5019",
                name: "Baby Snacks",
                search: ""
            }, {
                id: "5020",
                name: "Infant Formula",
                search: ""
            }, {
                id: "5021",
                name: "Infant Milk Powder",
                search: "Milk Powder"
            }, {
                id: "5022",
                name: "Maternity Supplies",
                search: ""
            }, {
                id: "5023",
                name: "Stretch Mark Removal",
                search: ""
            }]
        }, {
            id: 18,
            name: "Eyewear",
            seller: "eye",
            icon: "sunglass",
            sub: [{
                id: "1801",
                name: "Sunglasses",
                search: ""
            }, {
                id: "1802",
                name: "Ladies Sunglass",
                search: ""
            }, {
                id: "1803",
                name: "Mens Sunglass",
                search: ""
            }, {
                id: "1804",
                name: "Baby Sunglass",
                search: ""
            }, {
                id: "1805",
                name: "Party Sunglass",
                search: ""
            }, {
                id: "1806",
                name: "Goggles",
                search: ""
            }, {
                id: "1807",
                name: "Reading Glasses",
                search: ""
            }]
        }, {
            id: 6,
            name: "Office & School Supplies",
            seller: "kid",
            icon: "kid",
            sub: [{
                id: "6000",
                name: "Water Purification Equipment",
                search: ""
            }, {
                id: "6001",
                name: "Ceiling Fans",
                search: ""
            }, {
                id: "6002",
                name: "Electric Blankets",
                search: ""
            }, {
                id: "6003",
                name: "Fan",
                search: ""
            }, {
                id: "6004",
                name: "Heaters",
                search: "Fan Heater"
            }, {
                id: "6005",
                name: "Portable Air Conditioners",
                search: ""
            }, {
                id: "6006",
                name: "Home Automation",
                search: "Smart Home Control"
            }, {
                id: "6007",
                name: "Led Screens",
                search: ""
            }, {
                id: "6008",
                name: "Monitoring Equipment",
                search: ""
            }, {
                id: "6009",
                name: "Security Inspection Device",
                search: ""
            }, {
                id: "6010",
                name: "Solar Panels",
                search: ""
            }, {
                id: "6011",
                name: "Voltage Converters",
                search: "Electronic Voltage Converters"
            }, {
                id: "6012",
                name: "Carpets & Rugs",
                search: ""
            }, {
                id: "6013",
                name: "Curtains & Accessories",
                search: ""
            }, {
                id: "6014",
                name: "Dust Protection",
                search: ""
            }, {
                id: "6015",
                name: "Pillow",
                search: ""
            }, {
                id: "6016",
                name: "Seat Cushions",
                search: ""
            }, {
                id: "6017",
                name: "Decorative Umbrella",
                search: ""
            }, {
                id: "6018",
                name: "Calculators",
                search: ""
            }, {
                id: "6019",
                name: "Compasses",
                search: ""
            }, {
                id: "6020",
                name: "Digital Pen Translators",
                search: ""
            }, {
                id: "6021",
                name: "Electronic Dictionaries",
                search: ""
            }, {
                id: "6022",
                name: "Kindles & E-Readers",
                search: ""
            }, {
                id: "6023",
                name: "Lab Equipment",
                search: ""
            }, {
                id: "6024",
                name: "Learning Tablets",
                search: ""
            }, {
                id: "6025",
                name: "Pencil Erasers",
                search: ""
            }, {
                id: "6026",
                name: "Pencil Grips",
                search: ""
            }, {
                id: "6027",
                name: "Planners",
                search: ""
            }, {
                id: "6028",
                name: "Tape",
                search: ""
            }, {
                id: "6029",
                name: "Whiteboards",
                search: ""
            }, {
                id: "6030",
                name: "Whiteboard Magnets",
                search: ""
            }, {
                id: "6031",
                name: "Hole Punches",
                search: "Punching Machine Hole"
            }, {
                id: "6032",
                name: "Scissors & X-Acto Knives",
                search: ""
            }, {
                id: "6033",
                name: "Projectors",
                search: ""
            }, {
                id: "6034",
                name: "Diaries & Planners",
                search: ""
            }, {
                id: "6035",
                name: "Wrapping Paper",
                search: ""
            }, {
                id: "6036",
                name: "Binding Accessories"
            }, {
                id: "6037",
                name: "Laminating Paper"
            }]
        }, {
            id: 669,
            name: "Seasonal Products",
            seller: "bridal",
            icon: "bridal",
            sub: [{
                id: "18000",
                name: "Summer",
                search: ""
            }, {
                id: "18001",
                name: "Summer Dress",
                search: ""
            }, {
                id: "18002",
                name: "Ice Cream Maker",
                search: ""
            }, {
                id: "18003",
                name: "Juicer",
                search: ""
            }, {
                id: "18004",
                name: "Neck Fan",
                search: ""
            }, {
                id: "18005",
                name: "Rainy Season",
                search: ""
            }, {
                id: "18006",
                name: "Rain Coat",
                search: ""
            }, {
                id: "18007",
                name: "Magic Umbrella",
                search: ""
            }, {
                id: "18008",
                name: "Mosquito Killing Racket",
                search: "Mosquito"
            }, {
                id: "18009",
                name: "Bike Raincoat",
                search: ""
            }, {
                id: "18010",
                name: "Waterproof Backpack",
                search: ""
            }, {
                id: "18011",
                name: "Autumn",
                search: ""
            }, {
                id: "18012",
                name: "Winter",
                search: ""
            }, {
                id: "18013",
                name: "Winter Dresses",
                search: ""
            }, {
                id: "18014",
                name: "Badminton",
                search: ""
            }]
        }, {
            id: 6235,
            name: "Phone accessories",
            seller: "mobile",
            icon: "mobile",
            sub: [{
                id: "19000",
                name: "Xiaomi",
                search: ""
            }, {
                id: "19001",
                name: "Apple",
                search: ""
            }, {
                id: "19002",
                name: "Huwaei",
                search: ""
            }, {
                id: "19003",
                name: "Realme",
                search: ""
            }, {
                id: "19004",
                name: "One Plus",
                search: ""
            }, {
                id: "19005",
                name: "Samsung",
                search: ""
            }, {
                id: "19006",
                name: "Google",
                search: ""
            }, {
                id: "19007",
                name: "Vivo ",
                search: "Vivo Smartphone"
            }, {
                id: "19008",
                name: "Nokia",
                search: ""
            }, {
                id: "19009",
                name: "Lg",
                search: ""
            }, {
                id: "19010",
                name: "Tecno",
                search: ""
            }, {
                id: "19011",
                name: "Htc",
                search: ""
            }, {
                id: "19012",
                name: "Motorola",
                search: ""
            }, {
                id: "19013",
                name: "Asus",
                search: ""
            }]
        }, {
            id: 7,
            name: "Sports & Fitness",
            seller: "sport",
            icon: "sport",
            sub: [{
                id: "7000",
                name: "Snowboarding",
                search: ""
            }, {
                id: "7001",
                name: "Jet Skis",
                search: ""
            }, {
                id: "7002",
                name: "Swimming Gear",
                search: ""
            }, {
                id: "7003",
                name: "Fishing Rods",
                search: ""
            }, {
                id: "7004",
                name: "Grills & Bbq Equipment",
                search: "Bbq Machine"
            }, {
                id: "7005",
                name: "Luggage Locks",
                search: ""
            }, {
                id: "7006",
                name: "Military Apparel",
                search: ""
            }, {
                id: "7007",
                name: "Yoga Accessories",
                search: ""
            }, {
                id: "7008",
                name: "Tents & Canopies",
                search: ""
            }, {
                id: "7009",
                name: "Fitness Clothes",
                search: ""
            }]
        }, {
            id: 9,
            name: "Entertainment Items",
            seller: "electronic",
            icon: "electronics",
            sub: [{
                id: "9000",
                name: "Gopro",
                search: "4K Action Camera"
            }, {
                id: "9001",
                name: "Cameras",
                search: ""
            }, {
                id: "9002",
                name: "Travel",
                search: "Travelling"
            }, {
                id: "9003",
                name: "Travel Bags",
                search: ""
            }, {
                id: "9004",
                name: "Travel Luggage",
                search: "Baggage Box"
            }, {
                id: "9005",
                name: "Travel Pillows",
                search: ""
            }, {
                id: "9006",
                name: "4K Ultra Hd Tvs",
                search: ""
            }, {
                id: "9007",
                name: "Beanbags & Sofa Chairs",
                search: ""
            }, {
                id: "9008",
                name: "Flat Tvs",
                search: ""
            }, {
                id: "9009",
                name: "Movie Poster",
                search: ""
            }, {
                id: "9010",
                name: "Popcorn Makers",
                search: ""
            }, {
                id: "9011",
                name: "Vaping Gear",
                search: "Electronic Ciggarate"
            }, {
                id: "9012",
                name: "Video Games",
                search: "Games Controller"
            }, {
                id: "9013",
                name: "Virtual Reality",
                search: ""
            }, {
                id: "9014",
                name: "Nintendo Wii",
                search: ""
            }, {
                id: "9015",
                name: "Bluetooth Speakers",
                search: ""
            }, {
                id: "9016",
                name: "Drawing Tablet",
                search: ""
            }, {
                id: "9017",
                name: "Headphones",
                search: ""
            }, {
                id: "9018",
                name: "Ipad",
                search: ""
            }]
        }, {
            id: 10,
            name: "Watches",
            seller: "watch",
            icon: "watch",
            sub: [{
                id: "10000",
                name: "Womens Watch",
                search: ""
            }, {
                id: "10001",
                name: "Male Watches",
                search: ""
            }, {
                id: "10002",
                name: "Sports Watches",
                search: "Female Watch"
            }, {
                id: "10003",
                name: "Watch",
                search: ""
            }, {
                id: "10004",
                name: "Smart Watches",
                search: ""
            }, {
                id: "10005",
                name: "Branded Watches",
                search: ""
            }, {
                id: "10006",
                name: "Gshock "
            }, {
                id: "10007",
                name: "Apple Watch",
                search: ""
            }, {
                id: "10008",
                name: "Huawei Watches",
                search: ""
            }, {
                id: "10009",
                name: "Smart Fit Band",
                search: ""
            }, {
                id: "10010",
                name: "Amazefit Watches",
                search: ""
            }]
        }, {
            id: 11,
            name: "Automobile Items",
            seller: "automobile",
            icon: "automobile",
            sub: [{
                id: "11000",
                name: "Auto Oils & Fluids",
                search: "Store Abb B2B 2207674923374E092A"
            }, {
                id: "11001",
                name: "Automobile",
                search: ""
            }, {
                id: "11002",
                name: "Interior Accessories",
                search: "Car Interior"
            }, {
                id: "11003",
                name: "Exterior Accessories",
                search: ""
            }, {
                id: "11004",
                name: "Covers",
                search: "Car Dust Cover"
            }, {
                id: "11005",
                name: "Exterior Vehicle Care",
                search: ""
            }, {
                id: "11006",
                name: "Interior Vehicle Care",
                search: "Car Interior Vehicle Care"
            }, {
                id: "11007",
                name: "Car Electronics Accessories",
                search: ""
            }, {
                id: "11008",
                name: "Car Audio Accesories",
                search: ""
            }, {
                id: "11009",
                name: "Motorcycle",
                search: ""
            }, {
                id: "11010",
                name: "Motorcycle Accessories",
                search: ""
            }, {
                id: "11011",
                name: "Motorcycle Riding Accesories",
                search: ""
            }, {
                id: "11012",
                name: "Car Kit",
                search: ""
            }]
        }, {
            id: 12,
            name: "Groceries and Pets",
            seller: "seed",
            icon: "grocery",
            sub: [{
                id: "12000",
                name: "Breakfast, Choco & Snacks",
                search: ""
            }, {
                id: "12001",
                name: "Beverages",
                search: ""
            }, {
                id: "12002",
                name: "Food Staples",
                search: "Staple Food"
            }, {
                id: "12003",
                name: "Cooking Ingredients",
                search: ""
            }, {
                id: "12004",
                name: "Laundry & Household",
                search: ""
            }, {
                id: "12005",
                name: "Cat",
                search: ""
            }, {
                id: "12006",
                name: "Cat Bag",
                search: ""
            }, {
                id: "12007",
                name: "Dog",
                search: ""
            }, {
                id: "12008",
                name: "Fish",
                search: ""
            }, {
                id: "12009",
                name: "Bird",
                search: ""
            }, {
                id: "12010",
                name: "Small Pet",
                search: ""
            }]
        }, {
            id: 13,
            name: "Outdoor & Travelling",
            seller: "travel",
            icon: "travel",
            sub: [{
                id: "13000",
                name: "Fishing Reels",
                search: ""
            }, {
                id: "13001",
                name: "Fishing",
                search: ""
            }, {
                id: "13002",
                name: "Fishing Lines",
                search: ""
            }, {
                id: "13003",
                name: "Fishing Rods",
                search: ""
            }, {
                id: "13004",
                name: "Fishing Tackle Boxes",
                search: ""
            }, {
                id: "13005",
                name: "Sportswear",
                search: ""
            }, {
                id: "13006",
                name: "Sports Bag",
                search: ""
            }, {
                id: "13007",
                name: "Sport Accessories",
                search: ""
            }, {
                id: "13008",
                name: "Camping & Hiking",
                search: ""
            }, {
                id: "13009",
                name: "Hunting",
                search: ""
            }, {
                id: "13010",
                name: "Fitness & Bodybuilding",
                search: ""
            }, {
                id: "13011",
                name: "Skiing & Snowboarding",
                search: ""
            }, {
                id: "13012",
                name: "Musical Instrument",
                search: ""
            }]
        }, {
            id: 14,
            name: "Electronics & Gadgets",
            seller: "Phone",
            icon: "electronics",
            sub: [{
                id: "14000",
                name: "Accessories & Supplies",
                search: "Electric Supplies"
            }, {
                id: "14001",
                name: "Electronics",
                search: ""
            }, {
                id: "14002",
                name: "Camera & Photo",
                search: ""
            }, {
                id: "14003",
                name: "Car & Vehicle Electronics",
                search: ""
            }, {
                id: "14004",
                name: "Cell Phones & Accessories",
                search: ""
            }, {
                id: "14005",
                name: "Computers & Accessories",
                search: ""
            }, {
                id: "14006",
                name: "Gps & Navigation",
                search: ""
            }, {
                id: "14007",
                name: "Home Audio",
                search: ""
            }, {
                id: "14008",
                name: "Office Electronics",
                search: "Office Electronic Supplies"
            }, {
                id: "14009",
                name: "Portable Audio & Video",
                search: ""
            }, {
                id: "14010",
                name: "Security & Surveillance"
            }, {
                id: "14011",
                name: "Service Plans",
                search: ""
            }, {
                id: "14012",
                name: "Television & Video",
                search: ""
            }, {
                id: "14013",
                name: "Video Game Consoles & Accessories",
                search: ""
            }, {
                id: "14014",
                name: "Video Projectors",
                search: ""
            }, {
                id: "14015",
                name: "Wearable Smart Device"
            }, {
                id: "14016",
                name: "Ebook Readers & Accessories",
                search: ""
            }]
        }, {
            id: 15,
            name: "Home And Kitchen",
            seller: "kitchen",
            icon: "home_improvements",
            sub: [{
                id: "15000",
                name: "Medical Supplies & Equipment",
                search: ""
            }, {
                id: "15001",
                name: "Household Supplies",
                search: ""
            }, {
                id: "15002",
                name: "Oral Care",
                search: ""
            }, {
                id: "15003",
                name: "Personal Care",
                search: ""
            }, {
                id: "15004",
                name: "Sexual Wellness",
                search: "Sexual "
            }, {
                id: "15005",
                name: "Health Nutrition",
                search: ""
            }, {
                id: "15006",
                name: "Stationery & Gift Wrapping Supplies",
                search: "Gift Wrapping Supplies"
            }, {
                id: "15007",
                name: "Vision Care",
                search: "Eye Care"
            }, {
                id: "15008",
                name: "Vitamins & Dietary Supplements",
                search: ""
            }, {
                id: "15009",
                name: "Wellness & Relaxation",
                search: ""
            }, {
                id: "15010",
                name: "Kids' Home Store",
                search: ""
            }, {
                id: "15011",
                name: "Kitchen ",
                search: ""
            }, {
                id: "15012",
                name: "Dining",
                search: ""
            }, {
                id: "15013",
                name: "Bedding",
                search: ""
            }, {
                id: "15014",
                name: "Bath",
                search: ""
            }, {
                id: "15015",
                name: "Furniture",
                search: ""
            }, {
                id: "15016",
                name: "Wall Art",
                search: ""
            }]
        }, {
            id: 16,
            name: "Tools & Home Improvement",
            seller: "tools",
            icon: "tools",
            sub: [{
                id: "16000",
                name: "Event & Party Supplies",
                search: ""
            }, {
                id: "16001",
                name: "Heating, Cooling & Air Quality",
                search: ""
            }, {
                id: "16002",
                name: "Electric Irons & Steamers",
                search: "Irons For Clothes"
            }, {
                id: "16003",
                name: "Vacuum Cleaner",
                search: ""
            }, {
                id: "16004",
                name: "Storage Organizer",
                search: ""
            }, {
                id: "16005",
                name: "Cleaning Supplies",
                search: ""
            }, {
                id: "16006",
                name: "Smart Home Appliances",
                search: ""
            }, {
                id: "16007",
                name: "Building Supplies",
                search: ""
            }, {
                id: "16008",
                name: "Electrical",
                search: ""
            }, {
                id: "16009",
                name: "Kitchen & Bath Fixtures",
                search: ""
            }, {
                id: "16010",
                name: "Light Bulbs",
                search: ""
            }, {
                id: "16011",
                name: "Lighting & Ceiling Fans",
                search: ""
            }, {
                id: "16012",
                name: "Measuring & Layout Tool",
                search: ""
            }, {
                id: "16013",
                name: "Painting Supplies & Wall Treatments",
                search: "Wall Paint"
            }, {
                id: "16014",
                name: "Power & Hand Tools",
                search: ""
            }, {
                id: "16015",
                name: "Safety & Security",
                search: "Safety Security Accesories"
            }, {
                id: "16016",
                name: "Storage & Home Organization",
                search: ""
            }, {
                id: "16017",
                name: "Welding & Soldering",
                search: ""
            }]
        }]
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return n
        }));
        var n = [{
            id: 1,
            name: "Men's Collection",
            icon: "mens_clothing",
            sub: []
        }, {
            id: 2,
            name: "Women's Collection",
            icon: "clothing",
            sub: []
        }, {
            id: 3,
            name: "Wedding Exclusive",
            icon: "weeding",
            sub: []
        }, {
            id: 4,
            name: "Bridal Exclusive",
            icon: "bridal",
            sub: []
        }, {
            id: 5,
            name: "Jewelry Collection",
            icon: "necklace",
            sub: []
        }, {
            id: 6,
            name: "Beauty & Health",
            icon: "beauty_product",
            sub: []
        }, {
            id: 7,
            name: "Kids Collection",
            icon: "kid",
            sub: []
        }, {
            id: 8,
            name: "Bags & Wallets",
            icon: "handbag",
            sub: []
        }, {
            id: 9,
            name: "Footwear",
            icon: "shoes",
            sub: []
        }, {
            id: 10,
            name: "Pakistani Perfumes",
            icon: "perfume",
            sub: []
        }]
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return r
        }));
        var n = a(15),
            s = a(4),
            i = a.n(s),
            c = a(9);
        var r = function(e, t) {
            var a = e ? Object(n.a)({}, e) : {},
                s = localStorage.getItem("referer");
            s && (a.platform = s.replace(/.+\/\/|www.|\..+/g, ""), a.url = s);
            var r = localStorage.getItem("agl_id");
            r && (a.agl_id = r), i.a.post(c.a + "user/login-register", a).then((function(e) {
                localStorage.removeItem("referer"), localStorage.removeItem("agl_id"), t(!0)
            })).catch((function(e) {
                t(!1)
            }))
        }
    }, , , , , function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return m
        }));
        var n = a(2),
            s = a(1),
            i = a(11),
            c = a(43),
            r = a(18),
            o = a(6),
            l = (a(203), a(8)),
            d = a.n(l),
            u = a(0);

        function m(e) {
            var t = e.setPopUp,
                a = e.type,
                l = e.chainAction,
                m = e.title,
                h = e.message,
                j = e.bt1Text,
                b = e.bt2Text,
                g = e.bt1Action,
                p = e.bt2Action,
                f = Object(o.useHistory)(),
                O = Object(s.useState)(!1),
                x = Object(n.a)(O, 2),
                v = x[0],
                y = x[1],
                S = Object(s.useState)(!1),
                w = Object(n.a)(S, 2),
                C = w[0],
                k = w[1],
                N = Object(s.useState)(!1),
                B = Object(n.a)(N, 2),
                _ = B[0],
                P = B[1],
                E = Object(s.useState)(!0),
                A = Object(n.a)(E, 2),
                R = A[0],
                D = A[1],
                T = Object(s.useState)(!1),
                I = Object(n.a)(T, 2),
                L = I[0],
                W = I[1],
                F = Object(s.useState)(null),
                M = Object(n.a)(F, 2),
                H = M[0],
                z = M[1],
                G = Object(s.useState)(null),
                J = Object(n.a)(G, 2),
                U = J[0],
                V = J[1],
                K = Object(i.b)(),
                Y = function(e) {
                    var t = (11 * e).toString().split("").reverse().join("");
                    return btoa(t)
                },
                q = function() {
                    W(!0), _ ? C && K(Object(r.a)({
                        phone: v,
                        otp: C
                    }, f, Q, !1)) : Object(c.a)({
                        phone: v,
                        token: Y(v)
                    }, X)
                },
                X = function(e) {
                    W(!1), z(new Date), e && !_ && P(!0)
                },
                Q = function(e) {
                    W(!1), e ? (D(!0), Z()) : D(!1)
                },
                Z = function() {
                    t("none"), l && l()
                };
            return Object(s.useEffect)((function() {
                var e = setInterval((function() {
                    try {
                        var e = d()(H).add(30, "s"),
                            t = d()(new Date).diff(e, "s");
                        null !== t && t <= 0 && V(t)
                    } catch (a) {}
                }), 1e3);
                return function() {
                    clearInterval(e)
                }
            }), [H]), Object(u.jsx)("div", {
                style: {
                    position: "fixed",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.24)"
                },
                children: "login" === a ? Object(u.jsxs)("div", {
                    className: "loginPopup",
                    style: {
                        maxWidth: "90%"
                    },
                    children: [Object(u.jsx)("h2", {
                        children: "Login / Register"
                    }), !_ && Object(u.jsxs)(u.Fragment, {
                        children: [Object(u.jsx)("p", {
                            children: "A verification code will be sent to your mobile number."
                        }), Object(u.jsx)("div", {
                            className: "loginPopupNumber",
                            children: Object(u.jsx)("input", {
                                onChange: function(e) {
                                    return y(e.target.value)
                                },
                                type: "text",
                                name: "number",
                                placeholder: "017xxxxxxxx",
                                onKeyPress: function(e) {
                                    "Enter" === e.code && q()
                                }
                            })
                        }), Object(u.jsx)("div", {
                            className: "loginPopupButton",
                            children: Object(u.jsx)("button", {
                                className: "bt ripple",
                                onClick: q,
                                children: L ? "Submitting..." : "Submit"
                            })
                        })]
                    }), _ && Object(u.jsxs)(u.Fragment, {
                        children: [Object(u.jsx)("p", {
                            children: "A verification code is sent to your mobile number."
                        }), !L && !R && Object(u.jsx)("p", {
                            style: {
                                color: "red",
                                fontSize: "18px"
                            },
                            children: "Invalid Code"
                        }), Object(u.jsx)("div", {
                            className: "loginPopupNumber",
                            children: Object(u.jsx)("input", {
                                onChange: function(e) {
                                    return k(e.target.value)
                                },
                                type: "text",
                                name: "otp",
                                placeholder: "xxxx",
                                onKeyPress: function(e) {
                                    "Enter" === e.code && q()
                                }
                            })
                        }), Object(u.jsx)("div", {
                            className: "loginPopupButton",
                            children: Object(u.jsx)("button", {
                                className: "bt ripple",
                                onClick: q,
                                children: L ? "Verifying..." : "Verify"
                            })
                        }), U <= 0 && Object(u.jsx)("div", {
                            className: "mt1",
                            children: 0 === U ? Object(u.jsx)("button", {
                                className: "bt",
                                onClick: function() {
                                    Object(c.a)({
                                        phone: v,
                                        token: Y(v)
                                    }, X)
                                },
                                children: "RESEND OTP"
                            }) : Object(u.jsxs)("button", {
                                className: "bt disabled",
                                children: ["RESEND OTP", " ", "WAIT ".concat(U && U < 0 ? -1 * U : 30, " SEC")]
                            })
                        })]
                    })]
                }) : Object(u.jsxs)("div", {
                    className: "card p2",
                    style: {
                        width: "600px",
                        maxWidth: "90%",
                        textAlign: "left"
                    },
                    children: [Object(u.jsx)("h4", {
                        style: {
                            fontSize: "18px"
                        },
                        children: m
                    }), Object(u.jsx)("p", {
                        className: "mt05",
                        style: {
                            fontSize: "14px"
                        },
                        children: h
                    }), Object(u.jsxs)("div", {
                        className: "flexRow mt1",
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: [b && Object(u.jsx)("button", {
                            onClick: function() {
                                p ? p() : Z(), Z()
                            },
                            className: "bt ripple",
                            children: b || "Cancel"
                        }), j && Object(u.jsx)("button", {
                            onClick: function() {
                                g ? g() : Z(), Z()
                            },
                            className: "bt ripple",
                            style: {
                                marginLeft: "10px"
                            },
                            children: j || "Ok"
                        })]
                    })]
                })
            })
        }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }));
        a(1);
        var n = a(0);

        function s(e) {
            var t = e.amount,
                a = e.fontsize,
                s = a || "16px";
            return Object(n.jsxs)("span", {
                style: {
                    fontSize: s
                },
                className: "accAmount",
                children: ["\u09f3 ", t]
            })
        }
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return c
        }));
        var n = a(4),
            s = a.n(n),
            i = a(9),
            c = function() {
                return function(e) {
                    s.a.get(i.a + "user/counts").then((function(t) {
                        t.data && (console.log(t.data), e(r(t.data)))
                    })).catch((function(e) {}))
                }
            },
            r = function(e) {
                return {
                    type: "SET_COUNT",
                    payload: e
                }
            }
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/empty.ad320c8d.svg"
    }, , function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }));
        var n = a(0);

        function s(e) {
            var t = e.image,
                s = e.text,
                i = e.type,
                c = s || "Product Not Found",
                r = t || a(51).default,
                o = "small" === i ? "200px" : "300px",
                l = "small" === i ? "200px" : "400px";
            return Object(n.jsxs)("div", {
                className: "flexColumn align-center justify-center",
                style: {
                    height: o
                },
                children: [Object(n.jsx)("img", {
                    src: r,
                    style: {
                        width: l,
                        maxWidth: "80%"
                    },
                    alt: ""
                }), Object(n.jsx)("p", {
                    className: "mt1 bold",
                    style: {
                        fontSize: "20px"
                    },
                    children: c
                })]
            })
        }
    }, function(e, t, a) {
        "use strict";
        var n = a(19);
        t.a = function(e) {
            e.response && 401 === e.response.status && localStorage.getItem("agl") && (localStorage.removeItem("agl"), localStorage.removeItem("profile"), Object(n.a)(null), window.location = "/login")
        }
    }, , , function(e, t, a) {}, , , , , , , , , function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/arrow_back.ceecbfa5.svg"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return s
        }));
        a(1);
        var n = a(0);

        function s(e) {
            var t, a = e.invoice,
                s = a.delivery_method,
                i = a.courier_tracking_id;
            (null === (t = i) || void 0 === t ? void 0 : t.includes("SB")) && (i = i.substr(2));
            var c = !1;
            return "sundarban" === s ? c = "http://103.3.227.172:4040/Default.aspx?Page=SearchByCNNumber&CN_Number=" + i : "redx" === s ? c = "https://redx.com.bd/track-parcel/?trackingId=" + i : "ecourier" === s && (c = "https://ecourier.com.bd/tracking/?tracking_no=" + i), Object(n.jsx)(n.Fragment, {
                children: c ? Object(n.jsx)("a", {
                    target: "_blank",
                    href: c,
                    rel: "noreferrer",
                    children: Object(n.jsx)("button", {
                        style: {
                            padding: "2px 10px",
                            height: "30px"
                        },
                        className: "bt",
                        children: "Track"
                    })
                }) : ""
            })
        }
    }, , , , , , , , , , function(e, t, a) {}, , function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/cart.e56831e9.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/favourite.2faf520e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/offer_card_3.57b8457f.png"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/call.2c221fe6.svg"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return c
        }));
        var n = a(2),
            s = a(1),
            i = a(0);

        function c(e) {
            var t = e.src,
                a = e.style,
                c = Object(s.useState)(!1),
                r = Object(n.a)(c, 2),
                o = r[0],
                l = r[1];
            return Object(i.jsxs)("div", {
                className: o ? "imagePopup cursor-pointer" : "cursor-pointer",
                onClick: function(e) {
                    o && l(!1)
                },
                children: [o && Object(i.jsx)("button", {
                    className: "bt",
                    onClick: function() {
                        return l(!1)
                    },
                    children: "Close"
                }), Object(i.jsx)("img", {
                    src: t,
                    alt: "",
                    onClick: function() {
                        return l(!0)
                    },
                    style: o ? {} : a
                })]
            })
        }
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_logo.75f5de74.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/11sale.67a4e010.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/404.27463b69.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/agentship1.0a4311bc.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/bank_receipt.5c01cba7.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/bkash.0470ea86.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/complete.38068bc8.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/contact.3ac180d0.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/facebook_round.cebbbbea.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/failed.8697a450.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/gift.f8abd15d.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/instagram.6948ea4b.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/linkedin.8f3ee2e4.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/login.8cc1ab77.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/nagad.426025c7.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/nodata.d50429e3.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/pending.d1f0612e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wallet.467db509.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/whatsapp_round.56e45a64.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wishlist.2608e609.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/youtube.a166d430.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/shop.4a2e1c7d.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/chat.ce271821.svg"
    }, function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        }));
        var n = a(2),
            s = a(1),
            i = a(6),
            c = a(29),
            r = a(0);

        function o(e) {
            var t = e.current,
                a = e.setCurrent,
                o = Object(s.useState)(!1),
                l = Object(n.a)(o, 2),
                d = l[0],
                u = l[1],
                m = Object(i.useHistory)();
            Object(s.useEffect)((function() {
                Object(c.f)(u)
            }), []);
            var h = d ? d.total_orders : 0,
                j = d ? d.processing : 0,
                b = d ? d.finished : 0,
                g = d ? d.pending_payment : 0;
            return Object(r.jsxs)("div", {
                className: "accStats",
                children: [Object(r.jsxs)("div", {
                    className: "pending" === t ? "accStatsPart accStatsPartActive" : "accStatsPart",
                    onClick: function() {
                        a("pending"), m.push("/account/orders/1?status=pending")
                    },
                    children: [Object(r.jsx)("span", {
                        className: "accStatNumber",
                        children: g
                    }), Object(r.jsx)("span", {
                        className: "accStatTitle",
                        children: "Pending"
                    })]
                }), Object(r.jsxs)("div", {
                    className: "processing" === t ? "accStatsPart accStatsPartActive" : "accStatsPart",
                    onClick: function() {
                        a("processing"), m.push("/account/orders/1?status=processing")
                    },
                    children: [Object(r.jsx)("span", {
                        className: "accStatNumber",
                        children: j
                    }), Object(r.jsx)("span", {
                        className: "accStatTitle",
                        children: "Processing"
                    })]
                }), Object(r.jsxs)("div", {
                    className: "completed" === t ? "accStatsPart accStatsPartActive" : "accStatsPart",
                    onClick: function() {
                        a("completed"), m.push("/account/orders/1?status=completed")
                    },
                    children: [Object(r.jsx)("span", {
                        className: "accStatNumber",
                        children: b
                    }), Object(r.jsx)("span", {
                        className: "accStatTitle",
                        children: "Finished"
                    })]
                }), Object(r.jsxs)("div", {
                    className: "all" === t ? "accStatsPart accStatsPartActive" : "accStatsPart",
                    onClick: function() {
                        a("all"), m.push("/account/orders/1?status=all")
                    },
                    children: [Object(r.jsx)("span", {
                        className: "accStatNumber",
                        children: h
                    }), Object(r.jsx)("span", {
                        className: "accStatTitle",
                        children: "All"
                    })]
                })]
            })
        }
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_yellow.9757aec6.svg"
    }, , , , , function(e, t, a) {}, function(e, t, a) {}, , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/person.8159e527.svg"
    }, function(e, t, a) {}, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/agentship2.b93b6d3d.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/automobile.4ed70ccd.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/baby_items.0731f252.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/beauty_product.d6563689.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/bridal.6082f4f9.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/child-shoe.dae19981.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/clothing.5733a1bd.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/customer.f4b4a97f.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/electronics.02940b83.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/expand.014b083d.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/facebook.3f7115f9.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/food.e8631880.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/grocery.c9f18939.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/handbag.22b1446e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/headphone.6e7a6c9d.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/health.c65d3d8f.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/home_imporvements.e52c4098.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/home_improvements.e52c4098.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/imageLoading.8cc87816.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/industry.4250425e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/invoice.3a25ca4b.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/kid.6fde6134.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/laptop.e7cd58f8.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/logo.2a73a6b8.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/logo_vertical.0b5d077e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/logo_white.ac399c9c.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/mail_round.507e95b6.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/mens_clothing.7a80e76a.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/mobile.a21477e9.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/mobile_app.aac314a4.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/mouse.8e4c16de.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/nav_dw.ac28266c.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/necklace.d6dc2778.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/offers.037db747.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/order_process.7b61ac70.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/payment.aeb5885f.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/perfume.bdb572b5.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/pet.07f73c89.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/playstore.2449457e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/review.9adff2a3.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/seminar.6b1025db.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/share.ea5c3a32.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/shoes.eaaac92b.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/shop.7e6da77c.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/shopping.d9625239.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/sport.046f3687.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/suggestion.a5788633.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/sunglass.38a3617a.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/test2.5c422ace.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/test_logo.c803b5b9.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/tools.8c1c27c1.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/tracking.ae4fa3a6.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/travel.ff60166e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/twitter_round.16ec4858.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/user.2ab6e483.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/watch.9105f254.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/weeding.fb10e88f.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_icon.9ad9a240.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_logo.fb341e7e.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_logo2.753ff2ef.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_logo3.05272b3f.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_new.8abda557.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/women-shoe.50b3d1a2.svg"
    }, function(e, t, a) {}, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/account.4df26ade.svg"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/wholesalecart_icon.9ad9a240.svg"
    }, function(e, t, a) {}, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/1day.b8c0e31b.png"
    }, function(e, t, a) {
        "use strict";
        a.r(t), t.default = a.p + "static/media/0day.49818eb8.png"
    }, function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(1),
            s = a.n(n),
            i = a(34),
            c = a.n(i),
            r = (a(113), a(15)),
            o = a(2),
            l = (a(114), a(5)),
            d = a(6),
            u = a(55),
            m = a(23),
            h = a(70),
            j = {
                productList: null
            };
        var b = function() {
            var e = localStorage.getItem("wishlist");
            return e ? JSON.parse(e).length : 0
        };
        var g = {
            isAuthenticated: !1
        };
        var p = {
            cart_count: 0,
            wishlist_count: 0
        };
        var f = Object(m.b)({
                products: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "SET_PRODUCTS" === t.type ? Object(r.a)(Object(r.a)({}, e), {}, {
                        productList: t.payload
                    }) : e
                },
                platform: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "china",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "SET_PLATFORM" === t.type ? t.payload : e
                },
                wishlist: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "SET_WISHLIST" === t.type ? t.payload : e
                },
                auth: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "SET_USER_AUTH" === t.type ? Object(r.a)(Object(r.a)({}, e), {}, {
                        isAuthenticated: t.payload
                    }) : e
                },
                count: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "SET_COUNT" === t.type ? t.payload : e
                }
            }),
            O = [h.a],
            x = Object(m.d)(f, {}, Object(m.c)(m.a.apply(void 0, O))),
            v = a(11),
            y = a(45),
            S = (a(57), a(50)),
            w = (a(83), a(0)),
            C = Object(n.lazy)((function() {
                return Promise.all([a.e(31), a.e(16)]).then(a.bind(null, 611))
            }));

        function k() {
            var e = Object(n.useState)(!0),
                t = Object(o.a)(e, 2),
                s = t[0],
                i = t[1],
                c = Object(v.c)((function(e) {
                    return e.count
                })),
                r = Object(v.b)(),
                d = function() {
                    var e = window.pageYOffset;
                    e > 200 && (window.screen.width <= 768 ? i(!1) : i(!0)), e < 50 && i(!0)
                };
            Object(n.useEffect)((function() {
                return window.addEventListener("scroll", d, {
                        passive: !0
                    }),
                    function() {
                        window.removeEventListener("scroll", d)
                    }
            }), []), Object(n.useEffect)((function() {
                localStorage.getItem("agl") && r(Object(S.a)())
            }), []);
            var u = localStorage.getItem("profile"),
                m = !1,
                h = !1;
            return u && (m = !!(u = JSON.parse(u)).name && u.name.replace(/ .*/, ""), h = u.phone), Object(w.jsxs)("nav", {
                style: s ? {} : {
                    height: "64px"
                },
                children: [Object(w.jsx)("div", {
                    className: s ? "navStart" : "navStart display-none",
                    children: Object(w.jsx)("a", {
                        href: "/",
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            color: "white"
                        },
                        "aria-label": "home",
                        children: Object(w.jsx)("img", {
                            src: a(84).default,
                            alt: ""
                        })
                    })
                }), Object(w.jsx)("div", {
                    className: "navSearch",
                    style: s ? {} : {
                        margin: "0px"
                    },
                    children: Object(w.jsx)(n.Suspense, {
                        fallback: "",
                        children: Object(w.jsx)(C, {
                            id: "searchprod"
                        })
                    })
                }), Object(w.jsxs)("div", {
                    className: s ? "navIconsContainer" : "navIconsContainer display-none",
                    children: [Object(w.jsxs)(l.b, {
                        to: "/cart",
                        "aria-label": "cart",
                        title: "Cart",
                        children: [Object(w.jsx)("img", {
                            style: {
                                padding: "2px"
                            },
                            src: a(79).default,
                            alt: ""
                        }), Object(w.jsx)("span", {
                            style: {
                                fontSize: "12px",
                                fontWeight: "bold"
                            },
                            children: c.cart_count ? c.cart_count : "0"
                        })]
                    }), Object(w.jsxs)(l.b, {
                        to: "/wishlist",
                        "aria-label": "wishlist",
                        title: "Wishlist",
                        children: [Object(w.jsx)("img", {
                            style: {
                                padding: "9px"
                            },
                            src: a(80).default,
                            alt: ""
                        }), Object(w.jsx)("span", {
                            style: {
                                marginLeft: "-6px",
                                fontSize: "12px",
                                fontWeight: "bold"
                            },
                            children: c.wishlist_count ? c.wishlist_count : "0"
                        })]
                    }), Object(w.jsx)(l.b, {
                        to: "/account",
                        "aria-label": "account",
                        title: "Account",
                        style: localStorage.getItem("prev") && "wholesalecartapp" !== navigator.userAgent ? {
                            border: "4px solid red"
                        } : {},
                        children: Object(w.jsxs)("div", {
                            style: {
                                display: "grid",
                                alignItems: "center",
                                gridTemplateColumns: "44px 1fr"
                            },
                            children: [Object(w.jsx)("img", {
                                style: {
                                    padding: "6px"
                                },
                                src: a(138).default,
                                alt: ""
                            }), m ? Object(w.jsxs)("div", {
                                className: "onlyPc",
                                children: [Object(w.jsx)("div", {
                                    style: {
                                        fontSize: "14px",
                                        fontWeight: "bold"
                                    },
                                    children: m
                                }), Object(w.jsx)("div", {
                                    style: {
                                        fontSize: "13px"
                                    },
                                    children: h
                                })]
                            }) : ""]
                        })
                    })]
                })]
            })
        }
        a(139);
        var N = a(20),
            B = a(40),
            _ = a(42),
            P = [{
                id: 1,
                name: "Men\u2019s Outfit",
                icon: "mens_clothing",
                sub: [{
                    id: "1000",
                    name: "Formal / Casual/Jeans Pants for Men"
                }, {
                    id: "1001",
                    name: "Leather Jackets for Men"
                }, {
                    id: "1002",
                    name: "Jerseys for Men"
                }, {
                    id: "1003",
                    name: "Swimming Trunks"
                }, {
                    id: "1004",
                    name: "Tie Clips & Ties "
                }, {
                    id: "1005",
                    name: "Leather Gloves"
                }, {
                    id: "1006",
                    name: "Men Blazers"
                }, {
                    id: "1007",
                    name: "Men's Belts"
                }, {
                    id: "1008",
                    name: "Casual Sweaters for Men"
                }, {
                    id: "1009",
                    name: "Beanies & Hats"
                }, {
                    id: "1010",
                    name: "T-Shirts for Men"
                }]
            }, {
                id: 2,
                name: "Women\u2019s Outfit",
                icon: "clothing",
                sub: [{
                    id: "2000",
                    name: "Women\u2019s dresses"
                }, {
                    id: "2001",
                    name: "Gown & party wear"
                }, {
                    id: "2002",
                    name: "Top, Shorts, Skirts"
                }, {
                    id: "2003",
                    name: "Pants, jeans, leggings"
                }, {
                    id: "2004",
                    name: "T-shirts & Hoodies"
                }, {
                    id: "2005",
                    name: "Jumpsuit"
                }, {
                    id: "2006",
                    name: "Undergarments"
                }, {
                    id: "2007",
                    name: "Women\u2019s playsuit"
                }, {
                    id: "2008",
                    name: "Women\u2019s Swimwear "
                }, {
                    id: "2009",
                    name: "Formal Dresses"
                }, {
                    id: "2010",
                    name: "Winter clothing"
                }, {
                    id: "2011",
                    name: "Hair accessories & head wear"
                }]
            }, {
                id: 3,
                name: "Jewelry",
                icon: "necklace",
                sub: [{
                    id: "3000",
                    name: "Earring"
                }, {
                    id: "3001",
                    name: "Finger Ring"
                }, {
                    id: "3002",
                    name: "Necklace & chokers"
                }, {
                    id: "3003",
                    name: "Pendants"
                }, {
                    id: "3004",
                    name: "Bracelets"
                }, {
                    id: "3005",
                    name: "Bangles"
                }, {
                    id: "3006",
                    name: "Bun pins"
                }, {
                    id: "3007",
                    name: "Hair clips & Bands"
                }, {
                    id: "3008",
                    name: "Nose pins"
                }, {
                    id: "3009",
                    name: "Brooches"
                }]
            }, {
                id: 4,
                name: "Cosmetics Items",
                icon: "beauty_product",
                sub: [{
                    id: "4000",
                    name: "Facial mask"
                }, {
                    id: "4001",
                    name: "Hair Oil"
                }, {
                    id: "4002",
                    name: "Hair Mask"
                }, {
                    id: "4003",
                    name: "Hair Gel"
                }, {
                    id: "4004",
                    name: "Bath Gel"
                }, {
                    id: "4005",
                    name: "Shampoo"
                }, {
                    id: "4006",
                    name: "Body oil"
                }, {
                    id: "4007",
                    name: "Eye Shadow"
                }, {
                    id: "4008",
                    name: "Eyebrow Enhancers "
                }, {
                    id: "4009",
                    name: "Eyeliner"
                }, {
                    id: "4010",
                    name: "Eyebrow Pencil"
                }, {
                    id: "4011",
                    name: "Lipstick"
                }, {
                    id: "4012",
                    name: "Brushes"
                }, {
                    id: "4013",
                    name: "Beauty blender"
                }, {
                    id: "4014",
                    name: "Drawers"
                }]
            }, {
                id: 5,
                name: "Bags & Wallets",
                icon: "handbag",
                sub: [{
                    id: "5000",
                    name: "Hand Bags"
                }, {
                    id: "5001",
                    name: "Cross body Bags"
                }, {
                    id: "5002",
                    name: "Clutches"
                }, {
                    id: "5003",
                    name: "Men\u2019s & Women\u2019s Wallet"
                }, {
                    id: "5004",
                    name: "Shoulder Bags"
                }, {
                    id: "5005",
                    name: "Laptop Bags"
                }, {
                    id: "5006",
                    name: "Bag pack"
                }, {
                    id: "5007",
                    name: "School Bags"
                }, {
                    id: "5008",
                    name: "Hand Purse"
                }, {
                    id: "5009",
                    name: "Makeup Bags"
                }, {
                    id: "5010",
                    name: "Travel Bags"
                }, {
                    id: "5011",
                    name: "Sports Bags"
                }]
            }, {
                id: 6,
                name: "Home & Kitchen Appliances",
                icon: "home_improvements",
                sub: [{
                    id: "6000",
                    name: "Blender, Juicer, Mixer"
                }, {
                    id: "6001",
                    name: "Rice Cooker"
                }, {
                    id: "6002",
                    name: "Kettles & Air-Pots"
                }, {
                    id: "6003",
                    name: "Coffee Maker & Boilers"
                }, {
                    id: "6004",
                    name: "Meat Grinder"
                }, {
                    id: "6005",
                    name: "Microwaves"
                }, {
                    id: "6006",
                    name: "Air Purifier"
                }, {
                    id: "6007",
                    name: "Air Conditioner"
                }, {
                    id: "6008",
                    name: "Desk Fan"
                }, {
                    id: "6009",
                    name: "Air Cooler"
                }, {
                    id: "6010",
                    name: "Wet & Dry Vacuum"
                }, {
                    id: "6011",
                    name: "Floor Polishers"
                }, {
                    id: "6012",
                    name: "Table-Top Sewing Machine"
                }, {
                    id: "6013",
                    name: "Hand Held Sewing Machine"
                }, {
                    id: "6014",
                    name: "Steamer"
                }, {
                    id: "6015",
                    name: "Washing Machines"
                }, {
                    id: "6016",
                    name: "Vacuum Cleaner Parts"
                }, {
                    id: "6017",
                    name: "Washer - Dryer Parts & Accessories"
                }, {
                    id: "6018",
                    name: "Lights & Electrical"
                }, {
                    id: "6019",
                    name: "Kitchen Application"
                }, {
                    id: "6020",
                    name: "Crockeries"
                }, {
                    id: "6021",
                    name: "Spoons Forks & Others"
                }, {
                    id: "6022",
                    name: "Cleaning Products"
                }, {
                    id: "6023",
                    name: "Air Freshener"
                }, {
                    id: "6024",
                    name: "Pest Control "
                }]
            }, {
                id: 7,
                name: "Baby Products",
                icon: "child-shoe",
                sub: [{
                    id: "7000",
                    name: "Baby Dress"
                }, {
                    id: "7001",
                    name: "Baby Shoe"
                }, {
                    id: "7002",
                    name: "Newborn Essentials"
                }, {
                    id: "7003",
                    name: "Diapers & Wipes"
                }, {
                    id: "7004",
                    name: "Feeders"
                }, {
                    id: "7005",
                    name: "Baby Food"
                }, {
                    id: "7006",
                    name: "Bath & Skincare"
                }, {
                    id: "7007",
                    name: "Baby Accessories"
                }, {
                    id: "7008",
                    name: "Baby Oral Care"
                }, {
                    id: "7009",
                    name: "Others Accessories"
                }]
            }, {
                id: 8,
                name: "FOOD ITEMS",
                icon: "food",
                sub: [{
                    id: "8000",
                    name: "Diabetic Food"
                }, {
                    id: "8001",
                    name: "Breakfast"
                }, {
                    id: "8002",
                    name: "Beverages"
                }, {
                    id: "8003",
                    name: "Chocolate"
                }, {
                    id: "8004",
                    name: "Snacks"
                }, {
                    id: "8005",
                    name: "Dairy"
                }, {
                    id: "8006",
                    name: "Frozen & Canned"
                }, {
                    id: "8007",
                    name: "Bread & Bakery"
                }, {
                    id: "8008",
                    name: "Baking Needs"
                }, {
                    id: "8009",
                    name: "Cooking Essential"
                }]
            }, {
                id: 9,
                name: "Gadgets & Accessories",
                icon: "laptop",
                sub: [{
                    id: "9000",
                    name: "Speaker"
                }, {
                    id: "9001",
                    name: "Headset"
                }, {
                    id: "9002",
                    name: "Charger & Adapter"
                }, {
                    id: "9003",
                    name: "Wireless Charger"
                }, {
                    id: "9004",
                    name: "Car Accessories"
                }, {
                    id: "9005",
                    name: "Tripod/ Selfie Stick"
                }, {
                    id: "9006",
                    name: "Router"
                }, {
                    id: "9007",
                    name: "Hard Drive"
                }, {
                    id: "9008",
                    name: "Wireless Headphones"
                }, {
                    id: "9009",
                    name: "TWS (True Wireless)"
                }]
            }, {
                id: 10,
                name: "Office & Home Security",
                icon: "electronics",
                sub: [{
                    id: "10000",
                    name: "Smart Tracker"
                }, {
                    id: "10001",
                    name: "Home Locker"
                }, {
                    id: "10002",
                    name: "Personal Lockers"
                }, {
                    id: "10003",
                    name: "Home alarm systems"
                }, {
                    id: "10004",
                    name: "Security Cameras/ CC camera"
                }, {
                    id: "10005",
                    name: "Biometric Attendance System"
                }, {
                    id: "10006",
                    name: "Smart Door Locker"
                }, {
                    id: "10007",
                    name: "Fire & Smoke Alarm"
                }, {
                    id: "10008",
                    name: "Door/ Window Sensor"
                }]
            }, {
                id: 11,
                name: "Office & Home D\xe9cor",
                icon: "home_improvements",
                sub: [{
                    id: "11000",
                    name: "Interior Lighting"
                }, {
                    id: "11001",
                    name: "Home Decorations: Clocks, Mirrors, Frames, Vases"
                }, {
                    id: "11002",
                    name: "Floor Covering: Indoor flooring, Carpeting"
                }, {
                    id: "11003",
                    name: "Paint Decorating"
                }, {
                    id: "11004",
                    name: "Wood working"
                }]
            }, {
                id: 12,
                name: "Travelling & Outdoor",
                icon: "travel",
                sub: [{
                    id: "12000",
                    name: "Hiking Rope"
                }, {
                    id: "12001",
                    name: "Tent"
                }, {
                    id: "12002",
                    name: "Waterproof Bag"
                }, {
                    id: "12003",
                    name: "Tent Rod"
                }, {
                    id: "12004",
                    name: "Blowing Machine"
                }, {
                    id: "12005",
                    name: "Solar Light for tent"
                }, {
                    id: "12006",
                    name: "Portable Gas Stove"
                }, {
                    id: "12007",
                    name: "Portable Bed"
                }, {
                    id: "12008",
                    name: "Fishing Rod"
                }, {
                    id: "12009",
                    name: "Hanger Lock "
                }]
            }],
            E = s.a.memo((function(e) {
                var t = e.isClosed,
                    s = e.setClosed,
                    i = e.handleDrawer,
                    c = e.platForm,
                    r = Object(n.useState)(null),
                    d = Object(o.a)(r, 2),
                    u = d[0],
                    m = d[1],
                    h = Object(n.useState)([]),
                    j = Object(o.a)(h, 2),
                    b = j[0],
                    g = j[1];
                Object(n.useEffect)((function() {
                    if ("china" === c && g(Object(N.a)(B.a)), "alibaba" === c && g(Object(N.a)(P)), "pakistan" !== c) return [];
                    g(Object(N.a)(_.a))
                }), [c]);
                return Object(w.jsx)(w.Fragment, {
                    children: t ? Object(w.jsx)("ul", {
                        className: "adminSidebarUl",
                        children: Object(w.jsx)("li", {
                            onClick: function() {
                                return s(!t)
                            },
                            children: Object(w.jsxs)("div", {
                                className: "a",
                                children: [Object(w.jsx)("div", {
                                    children: Object(w.jsx)("span", {
                                        children: "Categories"
                                    })
                                }), Object(w.jsx)("img", {
                                    style: {
                                        transform: "rotate(90deg)"
                                    },
                                    className: "arrowRight",
                                    src: a(22).default,
                                    alt: "",
                                    loading: "lazy"
                                })]
                            })
                        })
                    }) : Object(w.jsxs)("ul", {
                        className: "adminSidebarUl",
                        style: {
                            borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
                        },
                        children: [null !== u && Object(w.jsx)("li", {
                            onClick: function() {
                                g("china" === c ? Object(N.a)(B.a) : "alibaba" === c ? Object(N.a)(P) : "pakistan" === c ? Object(N.a)(_.a) : []), m(null)
                            },
                            children: Object(w.jsx)("div", {
                                className: "a",
                                children: Object(w.jsxs)("div", {
                                    children: [Object(w.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: Object(w.jsx)("img", {
                                            className: "arrowRight",
                                            style: {
                                                width: "20px",
                                                marginRight: "0.5rem"
                                            },
                                            src: a(66).default,
                                            alt: "",
                                            loading: "lazy"
                                        })
                                    }), Object(w.jsx)("span", {
                                        children: u
                                    })]
                                })
                            })
                        }), b.length > 0 && b.map((function(e, t) {
                            return e.sub && e.sub.length > 0 ? Object(w.jsx)("li", {
                                onClick: function() {
                                    g(e.sub), m(e.name)
                                },
                                children: Object(w.jsxs)("div", {
                                    className: "a",
                                    children: [Object(w.jsxs)("div", {
                                        children: [e.icon && Object(w.jsx)("img", {
                                            className: "sidebarImage",
                                            src: a(32)("./".concat(e.icon, ".svg")).default,
                                            alt: ""
                                        }), Object(w.jsx)("span", {
                                            children: e.name
                                        })]
                                    }), Object(w.jsx)("img", {
                                        className: "arrowRight",
                                        src: a(22).default,
                                        alt: "",
                                        loading: "lazy"
                                    })]
                                })
                            }, e.id) : Object(w.jsx)("li", {
                                onClick: function() {
                                    return i()
                                },
                                children: Object(w.jsxs)(l.b, {
                                    className: "a",
                                    to: "/shop/".concat(c, "/").concat(e.search ? e.search : (n = e.name, "pakistan" !== c ? n.replace(/[^A-Z0-9]+/gi, "-").toLowerCase() : n)),
                                    children: [Object(w.jsxs)("div", {
                                        children: [e.icon && Object(w.jsx)("img", {
                                            className: "sidebarImage",
                                            src: a(32)("./".concat(e.icon, ".svg")).default,
                                            alt: "",
                                            loading: "lazy"
                                        }), Object(w.jsx)("span", {
                                            children: e.name
                                        })]
                                    }), Object(w.jsx)("img", {
                                        className: "arrowRight",
                                        src: a(22).default,
                                        alt: "",
                                        loading: "lazy"
                                    })]
                                })
                            }, e.id);
                            var n
                        })), Object(w.jsx)("li", {
                            onClick: function() {
                                return s(!t)
                            },
                            children: Object(w.jsxs)("div", {
                                className: "a",
                                children: [Object(w.jsx)("div", {
                                    children: Object(w.jsx)("span", {
                                        children: "See Less"
                                    })
                                }), Object(w.jsx)("img", {
                                    style: {
                                        transform: "rotate(270deg)"
                                    },
                                    className: "arrowRight",
                                    src: a(22).default,
                                    alt: "",
                                    loading: "lazy"
                                })]
                            })
                        })]
                    })
                })
            })),
            A = a(30);

        function R(e) {
            var t = e.categories,
                s = e.source,
                i = Object(n.useState)(null),
                c = Object(o.a)(i, 2),
                r = c[0],
                d = c[1],
                u = Object(n.useState)([]),
                m = Object(o.a)(u, 2),
                h = m[0],
                j = m[1];
            return Object(n.useEffect)((function() {
                j(t)
            }), [t]), Object(w.jsx)(w.Fragment, {
                children: Object(w.jsxs)("ul", {
                    className: "adminSidebarUl",
                    style: {
                        borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
                    },
                    children: [null !== r && Object(w.jsx)("li", {
                        onClick: function() {
                            j(t), d(null)
                        },
                        children: Object(w.jsx)("div", {
                            className: "a",
                            children: Object(w.jsxs)("div", {
                                children: [Object(w.jsx)("img", {
                                    src: a(66).default,
                                    style: {
                                        width: "18px",
                                        height: "18px"
                                    },
                                    alt: ""
                                }), Object(w.jsx)("span", {
                                    children: r
                                })]
                            })
                        })
                    }), h.length > 0 && h.map((function(e, t) {
                        return e.childCategories && e.childCategories.length > 0 ? Object(w.jsx)("li", {
                            onClick: function() {
                                j(e.childCategories), d(e.categoryEnName)
                            },
                            children: Object(w.jsxs)("div", {
                                className: "a",
                                children: [Object(w.jsxs)("div", {
                                    children: [e.icon && Object(w.jsx)("img", {
                                        className: "sidebarImage",
                                        src: a(32)("./".concat(e.icon, ".svg")).default,
                                        alt: ""
                                    }), Object(w.jsx)("span", {
                                        children: e.categoryEnName
                                    })]
                                }), Object(w.jsx)("img", {
                                    src: a(22).default,
                                    style: {
                                        width: "18px",
                                        height: "18px"
                                    },
                                    alt: ""
                                })]
                            })
                        }, e.categoryId) : Object(w.jsx)("li", {
                            children: Object(w.jsxs)(l.b, {
                                className: "a",
                                to: "/shop?source=".concat(s, "&search=").concat(e.categoryEnName, "&page=", 1),
                                children: [Object(w.jsxs)("div", {
                                    children: [e.icon && Object(w.jsx)("img", {
                                        className: "sidebarImage",
                                        src: a(32)("./".concat(e.icon, ".svg")).default,
                                        alt: ""
                                    }), Object(w.jsx)("span", {
                                        children: e.categoryEnName
                                    })]
                                }), Object(w.jsx)("img", {
                                    src: a(22).default,
                                    style: {
                                        width: "18px",
                                        height: "18px"
                                    },
                                    alt: ""
                                })]
                            })
                        }, e.categoryId)
                    }))]
                })
            })
        }
        var D = a(36),
            T = s.a.memo((function(e) {
                var t = e.sideBar,
                    a = e.setSideBar,
                    s = Object(v.c)((function(e) {
                        return e.platform
                    })),
                    i = Object(v.c)((function(e) {
                        return e.products.productList
                    })),
                    c = Object(n.useState)(!1),
                    r = Object(o.a)(c, 2),
                    l = r[0],
                    u = r[1],
                    m = Object(n.useState)(null),
                    h = Object(o.a)(m, 2),
                    j = h[0],
                    b = h[1],
                    g = Object(d.useHistory)(),
                    p = Object(D.useLocation)(),
                    f = Object(n.useState)(""),
                    O = Object(o.a)(f, 2),
                    x = O[0],
                    y = O[1];
                Object(n.useEffect)((function() {
                    p.pathname.includes("/account") ? y("account") : y("")
                }), [p.pathname]);
                var S = function() {
                    a(!1)
                };
                Object(n.useEffect)((function() {
                    i && i.relevant_category && i.relevant_category.length > 0 ? (u(!0), b(i.relevant_category)) : u(!1)
                }), [i, g.location, s]);
                var C = Object(w.jsxs)("div", {
                        className: t ? "sideBarContainer showSideBar" : "sideBarContainer",
                        onClick: function(e) {
                            "backdrop" === e.target.id && S()
                        },
                        children: [Object(w.jsx)("div", {
                            className: "backDrop",
                            id: "backdrop"
                        }), Object(w.jsxs)("div", {
                            className: t ? "sideBar animateSlideBar" : "sideBar",
                            children: [Object(w.jsx)(E, {
                                platForm: s,
                                isClosed: l,
                                setClosed: u,
                                handleDrawer: S
                            }), j && j.length > 0 && Object(w.jsx)(R, {
                                categories: j,
                                source: i && i.source ? i.source : "china"
                            })]
                        })]
                    }),
                    k = Object(w.jsxs)("div", {
                        className: t ? "sideBarContainer showSideBar" : "sideBarContainer",
                        onClick: function(e) {
                            "backdrop" === e.target.id && S()
                        },
                        children: [Object(w.jsx)("div", {
                            className: "backDrop",
                            id: "backdrop"
                        }), Object(w.jsx)("div", {
                            className: t ? "sideBar animateSlideBar" : "sideBar",
                            children: Object(w.jsx)(A.a, {})
                        })]
                    });
                return x ? k : C
            }));

        function I(e) {
            var t = e.setSideBar,
                s = Object(d.useLocation)(),
                i = Object(n.useState)(!0),
                c = Object(o.a)(i, 2),
                r = c[0],
                u = c[1];
            return Object(n.useEffect)((function() {
                var e = !1;
                ["/product", "/checkout", "/cart", "/pay"].forEach((function(t) {
                    s.pathname.includes(t) && (e = !0)
                })), u(!e)
            }), [s.pathname]), Object(w.jsxs)("div", {
                className: "card p05 flex bottomBar",
                style: r ? {} : {
                    display: "none"
                },
                children: [Object(w.jsxs)("div", {
                    className: "item",
                    onClick: function() {
                        t((function(e) {
                            return !e
                        }))
                    },
                    children: [Object(w.jsx)("img", {
                        src: a(105).default,
                        alt: ""
                    }), Object(w.jsx)("span", {
                        children: "Category"
                    })]
                }), Object(w.jsxs)(l.b, {
                    className: "item",
                    to: "/account",
                    "aria-label": "account",
                    children: [Object(w.jsx)("img", {
                        src: a(204).default,
                        alt: ""
                    }), Object(w.jsx)("span", {
                        children: "Account"
                    })]
                }), Object(w.jsx)(l.b, {
                    className: "bottomBarHomeContainer item",
                    to: "/",
                    "aria-label": "home",
                    children: Object(w.jsx)("div", {
                        className: "bottomBarHome",
                        children: Object(w.jsx)("img", {
                            style: {
                                width: "40px",
                                height: "40px"
                            },
                            src: a(205).default,
                            alt: ""
                        })
                    })
                }), Object(w.jsxs)("a", {
                    className: "item",
                    href: "tel:+8809666-799125",
                    "aria-label": "phone",
                    children: [Object(w.jsx)("img", {
                        src: a(82).default,
                        alt: ""
                    }), Object(w.jsx)("span", {
                        children: "Call"
                    })]
                }), Object(w.jsxs)("a", {
                    className: "item",
                    href: "https://m.me/WholesaleCard",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "chat",
                    children: [Object(w.jsx)("img", {
                        src: a(106).default,
                        alt: ""
                    }), Object(w.jsx)("span", {
                        children: "Chat"
                    })]
                })]
            })
        }
        var L = a(21),
            W = a(19),
            F = a(18),
            M = a(72),
            H = a(73),
            z = a(75),
            G = a(74),
            J = function(e) {
                Object(z.a)(a, e);
                var t = Object(G.a)(a);

                function a(e) {
                    var n;
                    return Object(M.a)(this, a), (n = t.call(this, e)).state = {
                        hasError: !1
                    }, n
                }
                return Object(H.a)(a, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        console.log(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.hasError ? Object(w.jsx)("div", {
                            className: "mainContainer",
                            children: Object(w.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "90vh"
                                },
                                children: Object(w.jsx)(L.a, {})
                            })
                        }) : this.props.children
                    }
                }], [{
                    key: "getDerivedStateFromError",
                    value: function(e) {
                        return {
                            hasError: !0
                        }
                    }
                }]), a
            }(s.a.Component),
            U = a(8),
            V = a.n(U),
            K = a(38);

        function Y() {
            var e = Object(n.useState)(!1),
                t = Object(o.a)(e, 2),
                s = t[0],
                i = t[1];
            Object(n.useEffect)((function() {
                var e = localStorage.getItem("promotion_popup");
                if (!e && V()(new Date).isBefore(K.d)) i(!0);
                else {
                    var t = e,
                        a = V()(new Date),
                        n = V()(new Date(t));
                    a.diff(n, "seconds") > 3600 && "/" === window.location.pathname && V()(new Date).isBefore(K.d) && i(!0)
                }
            }), []);
            return Object(w.jsx)("div", {
                children: s ? Object(w.jsx)("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: 1100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.4)"
                    },
                    onClick: function() {
                        localStorage.setItem("promotion_popup", new Date), i(!1)
                    },
                    children: Object(w.jsxs)("div", {
                        style: {
                            width: "600px",
                            position: "relative",
                            maxWidth: "90%"
                        },
                        children: [Object(w.jsx)("div", {
                            style: {
                                position: "absolute",
                                left: "50%",
                                bottom: 16,
                                transform: "translateX(-50%)",
                                cursor: "pointer",
                                background: "#000",
                                padding: "8px 20px",
                                borderRadius: "4px",
                                color: "#fff"
                            },
                            children: "Close"
                        }), Object(w.jsx)("img", {
                            src: function() {
                                var e = a(81).default,
                                    t = V()(new Date).format("YYYY-MM-DD"),
                                    n = a(207).default,
                                    s = a(208).default;
                                return "16/01/2023" === V()(t).format("DD/MM/YYYY") && (e = n), "17/01/2023" === V()(t).format("DD/MM/YYYY") && (e = s), e
                            }(),
                            style: {
                                width: "100%",
                                objectFit: "contain",
                                boxShadow: "#000 0 0 8px",
                                cursor: "pointer",
                                borderRadius: 4
                            },
                            alt: ""
                        })]
                    })
                }) : ""
            })
        }
        a(107), a(77);
        var q = a(53),
            X = a(35),
            Q = a(33),
            Z = a(52),
            $ = a.n(Z),
            ee = a(67);

        function te(e) {
            var t, a, s = e.filter,
                i = e.order_code,
                c = e.limit,
                r = (e.basicLayout, e.setFilter),
                u = Object(n.useState)(null),
                m = Object(o.a)(u, 2),
                h = m[0],
                j = m[1],
                b = Object(n.useState)(!1),
                g = Object(o.a)(b, 2),
                p = g[0],
                f = g[1],
                O = Object(D.useHistory)(),
                x = Object(n.useState)([]),
                v = Object(o.a)(x, 2),
                y = v[0],
                S = (v[1], Object(d.useParams)().page);
            S = S || 1, Object(n.useEffect)((function() {
                window.scrollTo({
                    top: 0
                });
                var e = "".concat("all" === s ? "?" : "?status=" + s + "&", "page=").concat(S);
                c && (e += "&per_page=" + c), i && (e = "all" !== s ? "?status=".concat(s, "&master_invoice_code=").concat(i) : "?master_invoice_code=".concat(i)), f(!0), j(null), s && Object(X.b)(e, j, f)
            }), [s, S, i]);
            var C = function(e) {
                var t = [];
                e.forEach((function(e, a) {
                    t.push(e)
                }));
                var a = {
                    from: "invoice",
                    data: t
                };
                a = btoa(JSON.stringify(a)), O.push("/pay/" + a)
            };
            return Object(n.useEffect)((function() {
                y && y.length > 0 ? document.getElementsByClassName("bottomBar")[0].style.display = "none" : window.innerWidth <= 800 && (document.getElementsByClassName("bottomBar")[0].style.display = "grid")
            }), [y]), Object(w.jsx)("div", {
                children: Object(w.jsxs)("div", {
                    className: "card",
                    style: {
                        overFlow: "hidden",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0
                    },
                    children: [h && (null === (t = h.data) || void 0 === t ? void 0 : t.length) > 0 ? Object(w.jsxs)("div", {
                        children: [Object(w.jsxs)("div", {
                            className: "tableRow customTableHeader",
                            style: {
                                background: "#eee"
                            },
                            children: [Object(w.jsx)("div", {
                                style: {
                                    background: "#eee",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Invoice ID"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Date"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Due Amount"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Delivery Method"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Branch"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Track"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Weight"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Orders"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Status"
                                })
                            }), Object(w.jsx)("div", {
                                style: {
                                    background: "#eee"
                                },
                                className: "tableRowEl",
                                children: Object(w.jsx)("span", {
                                    children: "Action"
                                })
                            })]
                        }), null === h || void 0 === h ? void 0 : h.data.map((function(e, t) {
                            return Object(w.jsxs)("div", {
                                className: "tableRow",
                                children: [Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    style: {
                                        justifyContent: "flex-start",
                                        padding: ".75rem 1rem"
                                    },
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "ID"
                                    }), Object(w.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: Object(w.jsx)(l.b, {
                                            to: "/account/master-invoice/".concat(e.master_invoice_code),
                                            style: {
                                                width: "100%",
                                                color: "#c27b00",
                                                cursor: "pointer",
                                                fontSize: "14px"
                                            },
                                            children: e.master_invoice_code
                                        })
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Date"
                                    }), Object(w.jsx)("span", {
                                        children: V()(new Date(e.created_at)).format("DD MMM, YY, hh:mm A")
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Due Amount"
                                    }), Object(w.jsxs)("span", {
                                        children: ["\u09f3 ", e.due_amount]
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Delivery Method"
                                    }), Object(w.jsx)(Q.a, {
                                        name: e.delivery_method,
                                        type: "status"
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Branch"
                                    }), Object(w.jsx)(Q.a, {
                                        name: e.branch_name,
                                        type: "status"
                                    })]
                                }), Object(w.jsx)("div", {
                                    className: "tableRowEl",
                                    children: Object(w.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        },
                                        children: [e.courier_tracking_id && Object(w.jsx)("p", {
                                            style: {
                                                marginRight: 8,
                                                marginBottom: "0.5rem"
                                            },
                                            children: e.courier_tracking_id
                                        }), Object(w.jsx)(ee.a, {
                                            invoice: e
                                        })]
                                    })
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Weight"
                                    }), Object(w.jsxs)("span", {
                                        children: [" ", e.total_weight ? e.total_weight + " kg" : ""]
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Orders"
                                    }), Object(w.jsx)("div", {
                                        children: e.order_codes.map((function(e) {
                                            return Object(w.jsx)("div", {
                                                style: {
                                                    backgroundColor: "#ECD38E",
                                                    padding: "2px 8px",
                                                    marginBottom: "4px",
                                                    borderRadius: "4px"
                                                },
                                                children: Object(w.jsx)(l.b, {
                                                    to: "/account/order/".concat(e),
                                                    style: {
                                                        fontSize: "14px"
                                                    },
                                                    children: e
                                                })
                                            }, e)
                                        }))
                                    })]
                                }), Object(w.jsxs)("div", {
                                    className: "tableRowEl",
                                    children: [Object(w.jsx)("span", {
                                        className: "mobileTableHeder",
                                        children: "Status"
                                    }), Object(w.jsx)(Q.a, {
                                        name: e.status,
                                        type: "status"
                                    })]
                                }), Object(w.jsx)("div", {
                                    className: "tableRowEl",
                                    children: Object(w.jsxs)("div", {
                                        className: "flexRow",
                                        children: [("pending" === e.status.toLowerCase() || "submitted" === e.status.toLowerCase()) && e.due_amount > 0 && Object(w.jsx)("button", {
                                            style: {
                                                height: "30px",
                                                marginRight: "0.5rem"
                                            },
                                            className: "bt ripple",
                                            onClick: function() {
                                                return C(e.order_ids)
                                            },
                                            children: "Pay"
                                        }), Object(w.jsx)(l.b, {
                                            to: "/account/master-invoice/".concat(e.master_invoice_code),
                                            children: Object(w.jsx)("button", {
                                                style: {
                                                    height: "30px"
                                                },
                                                className: "bt ripple",
                                                onClick: function() {
                                                    return C(e.order_ids)
                                                },
                                                children: "View"
                                            })
                                        })]
                                    })
                                })]
                            }, t)
                        }))]
                    }) : Object(w.jsx)("div", {
                        className: "accNoTrx",
                        style: {
                            border: "0px solid #eaeaea"
                        },
                        children: p ? Object(w.jsx)(L.a, {}) : Object(w.jsx)(q.a, {
                            text: "No Invoice found"
                        })
                    }), (null === h || void 0 === h || null === (a = h.meta) || void 0 === a ? void 0 : a.total) > 1 ? Object(w.jsx)("div", {
                        style: {
                            marginBottom: "2rem",
                            marginTop: "1rem"
                        },
                        children: Object(w.jsx)($.a, {
                            forcePage: S - 1,
                            previousLabel: "Prev",
                            nextLabel: "Next",
                            breakLabel: "...",
                            breakClassName: "break-me",
                            pageCount: h.meta.last_page,
                            marginPagesDisplayed: 2,
                            pageRangeDisplayed: 2,
                            onPageChange: function(e) {
                                var t = e.selected + 1;
                                j(null), r(null), O.push("/account/delivery/" + t + "?status=".concat(s))
                            },
                            containerClassName: "accPagination",
                            activeClassName: "accPaginationActive"
                        })
                    }) : ""]
                })
            })
        }

        function ae() {
            var e = Object(v.c)((function(e) {
                    return e.auth.isAuthenticated
                })),
                t = Object(d.useHistory)(),
                a = Object(d.useLocation)();
            Object(n.useEffect)((function() {
                e || (console.log(e), t.replace("/login"))
            }), [e, t]), Object(n.useEffect)((function() {
                var e = null === a || void 0 === a ? void 0 : a.search;
                if (e) try {
                    p(e.substring(8))
                } catch (t) {
                    p("pending")
                } else p("pending")
            }), [a]);
            var s = Object(n.useState)(""),
                i = Object(o.a)(s, 2),
                c = i[0],
                r = i[1],
                l = Object(n.useState)(""),
                u = Object(o.a)(l, 2),
                m = u[0],
                h = u[1],
                j = Object(n.useState)(""),
                b = Object(o.a)(j, 2),
                g = b[0],
                p = b[1];
            return Object(w.jsxs)("div", {
                className: "account",
                children: [Object(w.jsx)("div", {
                    className: "phoneOnly",
                    children: Object(w.jsx)(A.a, {})
                }), Object(w.jsxs)("div", {
                    className: "accContent",
                    children: [Object(w.jsxs)("div", {
                        className: "card p1",
                        style: {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderBottom: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap"
                        },
                        children: [Object(w.jsx)("div", {
                            className: "accStats",
                            children: ["pending", "submitted", "returned", "completed", "all"].map((function(e) {
                                return Object(w.jsx)("div", {
                                    className: g === e ? "accStatsPart accStatsPartActive" : "accStatsPart",
                                    onClick: function() {
                                        p(e), t.push("/account/delivery/1?status=".concat(e))
                                    },
                                    children: Object(w.jsx)("span", {
                                        className: "accStatTitle",
                                        style: {
                                            textTransform: "capitalize"
                                        },
                                        children: e
                                    })
                                })
                            }))
                        }), Object(w.jsxs)("div", {
                            className: window.innerWidth > 600 ? "accDeposit" : "accDeposit mt15",
                            children: [Object(w.jsx)("input", {
                                type: "text",
                                className: "accDepositInput",
                                placeholder: "Invoice ID",
                                style: {
                                    height: "36px"
                                },
                                onChange: function(e) {
                                    e.target.value ? h(e.target.value) : (h(""), r(""))
                                },
                                onKeyPress: function(e) {
                                    "Enter" === e.code && r(m)
                                }
                            }), Object(w.jsx)("button", {
                                className: "bt",
                                style: {
                                    height: "36px"
                                },
                                onClick: function() {
                                    r(m)
                                },
                                children: "Search"
                            })]
                        })]
                    }), g && Object(w.jsx)(te, {
                        filter: g,
                        order_code: c,
                        limit: "pending" === g ? 400 : 50,
                        setFilter: p
                    })]
                })]
            })
        }
        var ne = function() {
                Object(d.useHistory)();
                var e, t, s = Object(n.useState)(null),
                    i = Object(o.a)(s, 2),
                    c = i[0],
                    r = i[1],
                    u = Object(n.useState)(null),
                    m = Object(o.a)(u, 2),
                    h = m[0],
                    j = m[1],
                    b = Object(n.useState)([]),
                    g = Object(o.a)(b, 2),
                    p = (g[0], g[1]),
                    f = Object(n.useState)([]),
                    O = Object(o.a)(f, 2),
                    x = (O[0], O[1]),
                    v = Object(n.useState)(null),
                    y = Object(o.a)(v, 2),
                    S = (y[0], y[1]),
                    C = Object(n.useState)(null),
                    k = Object(o.a)(C, 2),
                    N = k[0],
                    B = k[1],
                    _ = Object(n.useState)(null),
                    P = Object(o.a)(_, 2),
                    E = (P[0], P[1]),
                    A = Object(n.useState)(null),
                    R = Object(o.a)(A, 2),
                    D = R[0],
                    T = R[1],
                    I = Object(n.useState)(null),
                    L = Object(o.a)(I, 2),
                    W = L[0],
                    F = L[1],
                    M = Object(n.useState)(null),
                    H = Object(o.a)(M, 2),
                    z = H[0],
                    G = H[1],
                    J = Object(n.useState)(null),
                    U = Object(o.a)(J, 2),
                    K = U[0],
                    Y = U[1],
                    q = Object(n.useState)(null),
                    Q = Object(o.a)(q, 2),
                    Z = Q[0],
                    $ = Q[1],
                    ee = Object(n.useState)(0),
                    te = Object(o.a)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    se = Object(n.useState)(null),
                    ie = Object(o.a)(se, 2),
                    ce = ie[0],
                    re = ie[1],
                    oe = Object(n.useState)(null),
                    le = Object(o.a)(oe, 2),
                    de = le[0],
                    ue = le[1],
                    me = Object(n.useState)(null),
                    he = Object(o.a)(me, 2),
                    je = he[0],
                    be = he[1],
                    ge = Object(n.useState)(null),
                    pe = Object(o.a)(ge, 2),
                    fe = (pe[0], pe[1]),
                    Oe = Object(n.useState)(null),
                    xe = Object(o.a)(Oe, 2),
                    ve = xe[0],
                    ye = xe[1],
                    Se = Object(n.useState)(!1),
                    we = Object(o.a)(Se, 2),
                    Ce = we[0],
                    ke = we[1],
                    Ne = Object(n.useState)(!1),
                    Be = Object(o.a)(Ne, 2),
                    _e = Be[0],
                    Pe = Be[1],
                    Ee = Object(d.useParams)().id;
                Object(n.useEffect)((function() {
                    Object(X.a)(Ee, r)
                }), [Ee]), Object(n.useEffect)((function() {
                    c && c.orders && c.invoice && (j({
                        data: c.orders
                    }), ke(c.invoice.master_invoice_code), Y(c.invoice.warehouse_delay_charge ? c.invoice.warehouse_delay_charge : null), $(c.invoice.courier_return_charge ? c.invoice.courier_return_charge : null), ne(c.invoice.courier_charge_discount), re(c.invoice.delivery_method), ue(c.invoice.note), be(c.invoice.branch_name))
                }), [c]), console.log(c), Object(n.useEffect)((function() {
                    var e = 0,
                        t = 0,
                        a = 0,
                        n = 0,
                        s = 0,
                        i = [],
                        c = [],
                        r = 0;
                    h && h.data && h.data.length > 0 && (ye({
                        id: h.data[0].user_id,
                        name: h.data[0].user_name,
                        phone: h.data[0].user_phone,
                        address: h.data[0].address,
                        user_emergency_phone: h.data[0].user_emergency_phone,
                        city: h.data[0].city,
                        district: h.data[0].district
                    }), fe(h.data[0].address), h.data.forEach((function(o) {
                        i.push(o.id), c.push(o.order_code), o.weight && (r += o.weight), a += o.grand_total, n += o.deposit_amount, e += o.grand_total - o.deposit_amount, t += o.grand_total - o.deposit_amount, o.fees.forEach((function(e) {
                            t -= e.amount, 2 === e.fee.id && (s += e.amount)
                        }))
                    })), p(i), x(c), Pe(parseFloat(r).toFixed(2)), B(e), S([]), F(n), E(t), T(a), G(s))
                }), [h]);
                var Ae = function(e) {
                    var t = 0,
                        a = e.findIndex((function(e) {
                            return 2 === e.fee.id
                        }));
                    return a >= 0 && (t = e[a].amount), t
                };
                return Object(w.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [Object(w.jsx)("div", {
                        className: "A4 masterInvoice",
                        children: c && Object(w.jsxs)("div", {
                            className: "section-to-print section-to-print-raw",
                            style: {
                                backgroundColor: "white",
                                padding: "2rem"
                            },
                            size: "small",
                            children: [Object(w.jsxs)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "1rem"
                                },
                                children: [Object(w.jsxs)("div", {
                                    xs: {
                                        span: 12
                                    },
                                    md: {
                                        span: 12
                                    },
                                    children: [Object(w.jsx)("img", {
                                        src: a(108).default,
                                        alt: "",
                                        style: {
                                            width: "180px",
                                            marginBottom: "1rem"
                                        }
                                    }), Object(w.jsxs)("div", {
                                        size: "middle",
                                        column: 1,
                                        children: [Object(w.jsx)("div", {
                                            style: {
                                                paddingBottom: "0.275rem"
                                            },
                                            children: Object(w.jsx)("div", {
                                                children: Object(w.jsx)("p", {
                                                    style: {
                                                        marginBottom: "0.125rem",
                                                        fontSize: "15px"
                                                    },
                                                    children: "Floor: 1 & 3, House: 30, Road: 11, Sector: 4, Uttara, Dhaka-1230 Bangladesh"
                                                })
                                            })
                                        }), Object(w.jsx)("div", {
                                            label: "Phone",
                                            style: {
                                                paddingBottom: "0.275rem"
                                            },
                                            children: "(+88) 09666-799125"
                                        }), Object(w.jsx)("div", {
                                            label: "Email",
                                            style: {
                                                paddingBottom: "0.275rem"
                                            },
                                            children: Object(w.jsx)("span", {
                                                type: "danger",
                                                children: "info@wholesalecart.com"
                                            })
                                        }), Object(w.jsx)("div", {
                                            label: "Website",
                                            style: {
                                                paddingBottom: "0.275rem"
                                            },
                                            children: "https://wholesalecart.com"
                                        })]
                                    })]
                                }), Object(w.jsx)("div", {
                                    xs: {
                                        span: 12
                                    },
                                    md: {
                                        span: 12
                                    },
                                    children: Object(w.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            height: "100%"
                                        },
                                        children: [Object(w.jsxs)("div", {
                                            size: "middle",
                                            column: 1,
                                            style: {
                                                marginTop: "0.275rem",
                                                fontSize: "15px"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                label: "Name",
                                                style: {
                                                    paddingBottom: "0.15rem"
                                                },
                                                children: ve ? ve.name : "--"
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    paddingBottom: "0.15rem"
                                                },
                                                children: Object(w.jsx)("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: Object(w.jsxs)("div", {
                                                        children: [Object(w.jsx)("span", {
                                                            children: "Address: "
                                                        }), ve && ve.address ? ve.address : "--", ", ", ve ? ve.district : "--", " ,", " ", ve ? ve.city : "--"]
                                                    })
                                                })
                                            }), Object(w.jsxs)("div", {
                                                style: {
                                                    paddingBottom: "0.15rem"
                                                },
                                                children: ["Emergency Phone:", " ", ve && ve.user_emergency_phone ? ve.user_emergency_phone : "--"]
                                            }), Object(w.jsxs)("div", {
                                                style: {
                                                    paddingBottom: "0.15rem"
                                                },
                                                children: ["Phone:", " ", ve && ve.phone ? ve.phone : "--"]
                                            })]
                                        }), Object(w.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                borderTop: "2px solid rgba(0,0,0,0.16)",
                                                marginTop: "0.5rem",
                                                paddingTop: "0.5rem"
                                            },
                                            children: [Object(w.jsxs)("h1", {
                                                style: {
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    marginBottom: "0.275rem"
                                                },
                                                children: ["Invoice# ", Ce, " ,", " ", Object(w.jsxs)("span", {
                                                    style: {
                                                        marginTop: "0.25rem"
                                                    },
                                                    children: ["Total Orders:", " ", h && h.data ? h.data.length : 0]
                                                })]
                                            }), Object(w.jsxs)("span", {
                                                children: ["Date: ", V()(new Date).format("DD/MM/YY"), ", Time:", " ", V()(new Date).format("hh:mm A")]
                                            })]
                                        }), (ce || je) && Object(w.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                borderTop: "2px solid rgba(0,0,0,0.16)",
                                                marginTop: "0.5rem",
                                                paddingTop: "0.5rem"
                                            },
                                            children: [ce && Object(w.jsxs)("h1", {
                                                style: {
                                                    fontSize: "14px",
                                                    marginBottom: "0.275rem",
                                                    fontWeight: "bold"
                                                },
                                                children: ["Courier: ", ce.toUpperCase()]
                                            }), je && Object(w.jsxs)("b", {
                                                children: ["Branch: ", je.toUpperCase()]
                                            }), (null === c || void 0 === c || null === (e = c.invoice) || void 0 === e ? void 0 : e.courier_tracking_id) && Object(w.jsxs)("b", {
                                                style: {
                                                    marginTop: "0.275rem"
                                                },
                                                children: ["Tracking ID: ", null === c || void 0 === c || null === (t = c.invoice) || void 0 === t ? void 0 : t.courier_tracking_id]
                                            })]
                                        })]
                                    })
                                })]
                            }), h && Object(w.jsxs)("div", {
                                style: {
                                    margin: "1.5rem 0"
                                },
                                bodyStyle: {
                                    padding: "0px"
                                },
                                children: [Object(w.jsx)("div", {
                                    children: h.data.map((function(e) {
                                        return Object(w.jsxs)("div", {
                                            className: "noPageBreak",
                                            style: {
                                                backgroundColor: "#eee",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "0.5rem 0rem"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                index: 0,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsx)(l.b, {
                                                    to: "/order/".concat(e.id),
                                                    children: Object(w.jsx)("span", {
                                                        style: {
                                                            color: "black"
                                                        },
                                                        children: e.order_code ? e.order_code : e.id
                                                    })
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 1,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: [e.weight ? e.weight : 0, " Kg"]
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 0,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["\u09f3 ", e.grand_total]
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 1,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["\u09f3 ", e.deposit_amount]
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 1,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["\u09f3 ", e.grand_total - e.deposit_amount]
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 1,
                                                align: "center",
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "center"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["\u09f3 ", Ae(e.fees)]
                                                })
                                            })]
                                        }, e.id)
                                    }))
                                }), Object(w.jsxs)(w.Fragment, {
                                    children: [Object(w.jsxs)("div", {
                                        className: "noPageBreak",
                                        style: {
                                            backgroundColor: "#eee",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "0.5rem 0rem"
                                        },
                                        children: [Object(w.jsx)("div", {
                                            index: 0,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: "Total"
                                        }), Object(w.jsx)("div", {
                                            index: 1,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: Object(w.jsxs)("span", {
                                                children: [_e, " kg"]
                                            })
                                        }), Object(w.jsx)("div", {
                                            index: 0,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: Object(w.jsxs)("span", {
                                                children: ["\u09f3 ", D]
                                            })
                                        }), Object(w.jsx)("div", {
                                            index: 1,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: Object(w.jsxs)("span", {
                                                children: ["\u09f3 ", W]
                                            })
                                        }), Object(w.jsx)("div", {
                                            index: 1,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: Object(w.jsxs)("span", {
                                                children: ["\u09f3 ", N]
                                            })
                                        }), Object(w.jsx)("div", {
                                            index: 1,
                                            align: "center",
                                            style: {
                                                width: "16.5%",
                                                textAlign: "center"
                                            },
                                            children: Object(w.jsxs)("span", {
                                                children: ["\u09f3 ", z]
                                            })
                                        })]
                                    }), Object(w.jsxs)(w.Fragment, {
                                        children: [K && Object(w.jsxs)("div", {
                                            className: "noPageBreak",
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "0.5rem 0rem"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                index: 0,
                                                style: {
                                                    width: "66%",
                                                    textAlign: "right"
                                                },
                                                children: Object(w.jsx)("span", {
                                                    children: "Warehouse Delay Charge"
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 0,
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "right",
                                                    paddingRight: "1rem"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["+ \u09f3 ", K]
                                                })
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "right"
                                                }
                                            })]
                                        }), Z && Object(w.jsxs)("div", {
                                            className: "noPageBreak",
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "0.5rem 0rem"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                index: 0,
                                                style: {
                                                    width: "66%",
                                                    textAlign: "right"
                                                },
                                                children: Object(w.jsx)("span", {
                                                    children: "Courier Return Charge"
                                                })
                                            }), Object(w.jsx)("div", {
                                                index: 0,
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "right",
                                                    paddingRight: "1rem"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["+ \u09f3 ", Z]
                                                })
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    width: "16.5%"
                                                }
                                            })]
                                        }), (Z || K) && Object(w.jsxs)("div", {
                                            className: "noPageBreak",
                                            style: {
                                                backgroundColor: "#eee",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "0.5rem 0rem"
                                            },
                                            children: [Object(w.jsx)("div", {
                                                style: {
                                                    width: "66%",
                                                    textAlign: "right"
                                                },
                                                children: Object(w.jsx)("span", {
                                                    children: "Total Due"
                                                })
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "right",
                                                    paddingRight: "1rem"
                                                },
                                                children: Object(w.jsxs)("span", {
                                                    children: ["\u09f3", " ", Z && K ? N + Z + K : Z && !K ? N + Z : N + K]
                                                })
                                            }), Object(w.jsx)("div", {
                                                style: {
                                                    width: "16.5%",
                                                    textAlign: "right"
                                                }
                                            })]
                                        })]
                                    }), z > 0 && ae > 0 && Object(w.jsxs)("div", {
                                        className: "noPageBreak",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "0.5rem 0rem"
                                        },
                                        children: [Object(w.jsxs)("div", {
                                            index: 0,
                                            style: {
                                                textAlign: "right",
                                                width: "66%"
                                            },
                                            children: [ae > 0 && Object(w.jsxs)("span", {
                                                style: {
                                                    marginRight: "0.5rem"
                                                },
                                                children: [parseFloat(ae / z * 100).toFixed(1), "%"]
                                            }), "BD Courier Charge Discount"]
                                        }), Object(w.jsxs)("div", {
                                            style: {
                                                textAlign: "right",
                                                width: "16.5%",
                                                paddingRight: "1rem"
                                            },
                                            children: ["- \u09f3 ", ae]
                                        }), Object(w.jsx)("div", {
                                            style: {
                                                width: "16.5%"
                                            }
                                        })]
                                    }), Object(w.jsxs)("div", {
                                        className: "noPageBreak",
                                        style: {
                                            backgroundColor: "#eee",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "0.5rem 0rem"
                                        },
                                        children: [Object(w.jsx)("div", {
                                            index: 0,
                                            style: {
                                                width: "66%",
                                                textAlign: "right"
                                            },
                                            children: "Total Payment Due"
                                        }), Object(w.jsxs)("div", {
                                            index: 0,
                                            style: {
                                                textAlign: "right",
                                                width: "16.5%",
                                                paddingRight: "1rem"
                                            },
                                            children: ["\u09f3 ", K && Z ? N + K + Z - ae : K && !Z ? N + K - ae : !K && Z ? N + Z - ae : N - ae]
                                        }), Object(w.jsx)("div", {
                                            style: {
                                                width: "16.5%"
                                            }
                                        })]
                                    })]
                                })]
                            }), Object(w.jsxs)("div", {
                                className: "printOnly",
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "3rem"
                                },
                                children: [Object(w.jsxs)("div", {
                                    children: [Object(w.jsx)("div", {
                                        style: {
                                            height: "1px",
                                            backgroundColor: "#000",
                                            marginBottom: "0.15rem"
                                        }
                                    }), Object(w.jsx)("p", {
                                        children: "Customer Signature"
                                    })]
                                }), Object(w.jsxs)("div", {
                                    children: [Object(w.jsx)("div", {
                                        style: {
                                            height: "1px",
                                            backgroundColor: "#000",
                                            marginBottom: "0.15rem"
                                        }
                                    }), Object(w.jsx)("p", {
                                        children: "Store Manager Signature"
                                    })]
                                }), Object(w.jsxs)("div", {
                                    children: [Object(w.jsx)("div", {
                                        style: {
                                            height: "1px",
                                            backgroundColor: "#000",
                                            marginBottom: "0.15rem"
                                        }
                                    }), Object(w.jsx)("p", {
                                        children: "Accounts Signature"
                                    })]
                                })]
                            }), Object(w.jsx)("div", {
                                children: de ? Object(w.jsxs)("div", {
                                    style: {
                                        marginTop: "2rem"
                                    },
                                    children: [Object(w.jsx)("h3", {
                                        children: "Instruction"
                                    }), Object(w.jsx)("p", {
                                        children: de
                                    })]
                                }) : ""
                            })]
                        })
                    }), Object(w.jsx)("div", {
                        className: "fixedRightBottom",
                        children: Object(w.jsx)("button", {
                            className: "bt",
                            type: "primary",
                            onClick: function() {
                                return window.print()
                            },
                            children: "Print"
                        })
                    })]
                })
            },
            se = Object(n.lazy)((function() {
                return a.e(47).then(a.bind(null, 570))
            })),
            ie = Object(n.lazy)((function() {
                return a.e(50).then(a.bind(null, 571))
            })),
            ce = Object(n.lazy)((function() {
                return a.e(24).then(a.bind(null, 572))
            })),
            re = Object(n.lazy)((function() {
                return a.e(49).then(a.bind(null, 573))
            })),
            oe = Object(n.lazy)((function() {
                return Promise.all([a.e(0), a.e(1), a.e(41)]).then(a.bind(null, 574))
            })),
            le = Object(n.lazy)((function() {
                return Promise.all([a.e(0), a.e(1), a.e(30)]).then(a.bind(null, 613))
            })),
            de = Object(n.lazy)((function() {
                return Promise.all([a.e(5), a.e(6)]).then(a.bind(null, 608))
            })),
            ue = Object(n.lazy)((function() {
                return Promise.all([a.e(23), a.e(12)]).then(a.bind(null, 583))
            })),
            me = Object(n.lazy)((function() {
                return a.e(28).then(a.bind(null, 584))
            })),
            he = Object(n.lazy)((function() {
                return a.e(44).then(a.bind(null, 585))
            })),
            je = Object(n.lazy)((function() {
                return a.e(27).then(a.bind(null, 586))
            })),
            be = Object(n.lazy)((function() {
                return a.e(15).then(a.bind(null, 614))
            })),
            ge = Object(n.lazy)((function() {
                return a.e(29).then(a.bind(null, 587))
            })),
            pe = Object(n.lazy)((function() {
                return a.e(37).then(a.bind(null, 588))
            })),
            fe = Object(n.lazy)((function() {
                return a.e(36).then(a.bind(null, 589))
            })),
            Oe = Object(n.lazy)((function() {
                return a.e(40).then(a.bind(null, 590))
            })),
            xe = Object(n.lazy)((function() {
                return a.e(39).then(a.bind(null, 612))
            })),
            ve = Object(n.lazy)((function() {
                return a.e(19).then(a.bind(null, 616))
            })),
            ye = Object(n.lazy)((function() {
                return a.e(20).then(a.bind(null, 592))
            })),
            Se = Object(n.lazy)((function() {
                return a.e(10).then(a.bind(null, 609))
            })),
            we = Object(n.lazy)((function() {
                return a.e(14).then(a.bind(null, 610))
            })),
            Ce = Object(n.lazy)((function() {
                return a.e(35).then(a.bind(null, 593))
            })),
            ke = Object(n.lazy)((function() {
                return a.e(46).then(a.bind(null, 594))
            })),
            Ne = Object(n.lazy)((function() {
                return a.e(45).then(a.bind(null, 595))
            })),
            Be = Object(n.lazy)((function() {
                return a.e(48).then(a.bind(null, 596))
            })),
            _e = Object(n.lazy)((function() {
                return a.e(21).then(a.bind(null, 597))
            })),
            Pe = Object(n.lazy)((function() {
                return a.e(51).then(a.bind(null, 598))
            })),
            Ee = Object(n.lazy)((function() {
                return a.e(22).then(a.bind(null, 599))
            })),
            Ae = Object(n.lazy)((function() {
                return a.e(17).then(a.bind(null, 600))
            })),
            Re = Object(n.lazy)((function() {
                return a.e(43).then(a.bind(null, 601))
            })),
            De = Object(n.lazy)((function() {
                return a.e(18).then(a.bind(null, 602))
            })),
            Te = Object(n.lazy)((function() {
                return a.e(9).then(a.bind(null, 603))
            })),
            Ie = Object(n.lazy)((function() {
                return a.e(42).then(a.bind(null, 604))
            }));
        if (localStorage.agl) {
            Object(W.a)(localStorage.agl), x.dispatch(Object(F.d)(!0));
            try {
                var Le = Object(y.a)(localStorage.agl),
                    We = Date.now() / 1e3;
                Le.exp < We && x.dispatch(Object(F.b)())
            } catch (Xe) {}
            var Fe = "" === document.referrer ? "direct" : document.referrer,
                Me = localStorage.getItem("referer");
            if (!Fe.includes("wholesalecart") && Fe !== Me) {
                var He = {
                    url: Fe || "direct"
                };
                if (window.location.search.includes("agl_id")) {
                    var ze = window.location.search.split("agl_id=")[1];
                    ze && (He.agl_id = ze)
                }
                Object(F.c)(He, (function() {}))
            }
        } else {
            localStorage.referer || document.referrer.includes("wholesalecart") || (document.referrer ? localStorage.setItem("referer", document.referrer) : localStorage.setItem("referer", "direct"))
        }
        var Ge = window.location.search.includes("?agltoken=") ? window.location.search.replace("?agltoken=", "") : "";
        if (Ge) try {
            localStorage.agl ? localStorage.setItem("prev", localStorage.getItem("agl")) : localStorage.setItem("prev", "noprevdata");
            var Je = atob(Ge),
                Ue = JSON.parse(Je),
                Ve = Ue.name,
                Ke = Ue.phone,
                Ye = Ue.token;
            Object(y.a)(Ye), localStorage.setItem("agl", Ye), localStorage.setItem("profile", JSON.stringify({
                name: Ve,
                phone: Ke
            })), Object(W.a)(Ye), x.dispatch(Object(F.d)(!0)), window.location.href = "/"
        } catch (Xe) {
            console.log("Token Invalid")
        }
        var qe = function(e) {
            Object(n.useEffect)((function() {
                window.scrollTo({
                    top: 0
                })
            }), []);
            var t = Object(n.useState)(!1),
                a = Object(o.a)(t, 2),
                s = a[0],
                i = a[1];
            return Object(w.jsx)(u.b, {
                children: Object(w.jsx)(v.a, {
                    store: x,
                    children: Object(w.jsx)(l.a, {
                        children: Object(w.jsxs)("div", {
                            className: "App",
                            children: [Object(w.jsx)(k, {
                                setSideBar: i
                            }), Object(w.jsx)(T, {
                                sideBar: s,
                                setSideBar: i
                            }), Object(w.jsx)(I, {
                                setSideBar: i
                            }), Object(w.jsx)(J, {
                                children: Object(w.jsx)("div", {
                                    className: "mainContainer",
                                    children: Object(w.jsxs)(n.Suspense, {
                                        fallback: Object(w.jsxs)("div", {
                                            className: "lazyPage",
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: [" ", Object(w.jsx)(L.a, {}), " "]
                                        }),
                                        children: [Object(w.jsxs)("div", {
                                            className: "content mobileRadius",
                                            children: [Object(w.jsx)(Y, {}), Object(w.jsxs)(d.Switch, {
                                                children: [Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/",
                                                    children: Object(w.jsx)(Se, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/login",
                                                    children: Object(w.jsx)(je, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/pay/confirmation/:key?",
                                                    children: Object(w.jsx)(me, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account",
                                                    children: Object(w.jsx)(be, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/orders/:page?",
                                                    children: Object(w.jsx)(ge, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/balance/:page?",
                                                    children: Object(w.jsx)(pe, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/delivery/:page?",
                                                    children: Object(w.jsx)(ae, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/settings",
                                                    children: Object(w.jsx)(Oe, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/master-invoice/:id",
                                                    children: Object(w.jsx)(ne, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/support",
                                                    children: Object(w.jsx)(ve, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/ticket/:id",
                                                    children: Object(w.jsx)(ye, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/agentship",
                                                    children: Object(w.jsx)(fe, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    path: "/account/order/:id",
                                                    render: function(e) {
                                                        return Object(w.jsx)(xe, Object(r.a)({}, e))
                                                    }
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/cart",
                                                    children: Object(w.jsx)(oe, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/checkout/:key?",
                                                    children: Object(w.jsx)(le, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/about-us",
                                                    children: Object(w.jsx)(Ce, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/offers",
                                                    children: Object(w.jsx)(Ae, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/offer/:slug",
                                                    children: Object(w.jsx)(Re, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/reviews",
                                                    children: Object(w.jsx)(se, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/watch-seminars",
                                                    children: Object(w.jsx)(ie, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/wishlist/:page?",
                                                    children: Object(w.jsx)(De, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/contact-us",
                                                    children: Object(w.jsx)(Ee, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/why-believe-us",
                                                    children: Object(w.jsx)(Pe, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/terms-conditions",
                                                    children: Object(w.jsx)(Be, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/returns-refunds",
                                                    children: Object(w.jsx)(ke, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/certificates",
                                                    children: Object(w.jsx)(_e, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/pay/:key?",
                                                    children: Object(w.jsx)(ue, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/privacy-policy",
                                                    children: Object(w.jsx)(Ne, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/seller/:page?",
                                                    children: Object(w.jsx)(ce, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/how-to-order",
                                                    children: Object(w.jsx)(re, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/account/invoice/:id",
                                                    children: Object(w.jsx)(he, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    path: "/shop/:sourcename/:keyword/:pageno?",
                                                    render: function(e) {
                                                        return Object(w.jsx)(we, Object(r.a)({}, e))
                                                    }
                                                }), Object(w.jsx)(d.Route, {
                                                    exact: !0,
                                                    path: "/product/:pid/:id",
                                                    children: Object(w.jsx)(de, {})
                                                }), Object(w.jsx)(d.Route, {
                                                    component: Ie
                                                })]
                                            })]
                                        }), Object(w.jsx)(Te, {})]
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        };
        "localhost" !== window.location.hostname && (console.log = function() {}), c.a.render(Object(w.jsx)(s.a.StrictMode, {
            children: Object(w.jsx)(qe, {})
        }), document.getElementById("root"))
    }],
    [
        [209, 3, 4]
    ]
]);
//# sourceMappingURL=main.ac386207.chunk.js.map