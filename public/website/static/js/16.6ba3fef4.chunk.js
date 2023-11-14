(this.webpackJsonpwholesalecart = this.webpackJsonpwholesalecart || []).push([
    [16], {
        213: function(e, a, n) {
            "use strict";
            n.d(a, "c", (function() {
                return o
            })), n.d(a, "e", (function() {
                return d
            })), n.d(a, "h", (function() {
                return c
            })), n.d(a, "f", (function() {
                return r
            })), n.d(a, "d", (function() {
                return m
            })), n.d(a, "i", (function() {
                return l
            })), n.d(a, "g", (function() {
                return u
            })), n.d(a, "a", (function() {
                return h
            })), n.d(a, "b", (function() {
                return p
            }));
            var i = n(4),
                s = n.n(i),
                t = n(24),
                o = function(e, a, n, i, o) {
                    var d = a;
                    "china" !== a && "pakistan" !== a && "alibaba" !== a || (d = "1688");
                    var c = "".concat(t.a, "/product/details?product_code=").concat(e, "&source=").concat(d);
                    e.includes("alb") ? o({
                        error: 9,
                        error_message: "Product Not Found!"
                    }) : s.a.get(c).then((function(e) {
                        console.log(e.data), e.data && 0 !== e.data.error ? (n(e.data.data), i(!1)) : o && o({
                            error: 9,
                            error_message: "Product Not Found!"
                        })
                    })).catch((function(e) {
                        n(null), o && o({
                            error: 9,
                            error_message: "Product Not Found!"
                        })
                    }))
                },
                d = function(e, a, n, i, o) {
                    var d = "".concat(t.a, "/product/description/").concat(a);
                    s.a.get(d).then((function(e) {
                        e.data ? (i(e.data), o(!1)) : (i(null), o(!1))
                    })).catch((function(e) {
                        i(null), o(!1)
                    }))
                },
                c = function(e, a, n) {
                    n(!0);
                    var i = "".concat(t.a, "/seller/details/").concat(e);
                    s.a.get(i).then((function(e) {
                        e.data && e.data.VendorInfo ? (a(e.data.VendorInfo), n(!1)) : (a(!1), n(!1))
                    })).catch((function(e) {
                        a(!1), n(!1)
                    }))
                },
                r = function(e, a, n, i) {
                    s.a.get("".concat(t.a, "/get-price.php?source=").concat(a, "&code=").concat(e, "&id=").concat(i)).then((function(e) {
                        e.data ? n(e.data) : n(0)
                    })).catch((function(e) {
                        console.log(e.response)
                    }))
                },
                m = function(e, a, n) {
                    var i = a;
                    "china" === i && (i = "1688");
                    var o = "".concat(t.a, "/product/key-search?source=").concat(i, "&key=").concat(e, "&page=", 1);
                    s.a.get(o).then((function(e) {
                        e.data && e.data.results && Array.isArray(e.data.results) && n(e.data)
                    })).catch((function(e) {
                        n(null)
                    }))
                },
                l = function(e, a) {
                    var n = e ? "?" + new URLSearchParams(e).toString() : "";
                    s.a.get(t.a + "/sellers/all" + n).then((function(e) {
                        e.data && a(e.data)
                    })).catch((function(e) {
                        a(null)
                    }))
                },
                u = function(e, a) {
                    var n = e ? "?" + new URLSearchParams(e).toString() : "";
                    s.a.get(t.a + "/product/key-search" + n).then((function(e) {
                        e.data && a(e.data)
                    })).catch((function(e) {
                        a(null)
                    }))
                },
                h = function(e, a, n) {
                    var i = "number" === typeof a ? a : 1,
                        o = "".concat(t.a, "/campaigns/").concat(e, "?page=").concat(i);
                    s.a.get(o).then((function(e) {
                        e.data && n(e.data)
                    })).catch((function(e) {
                        n(null)
                    }))
                },
                p = function(e, a) {
                    var n = "number" === typeof e ? e : 1,
                        i = "".concat(t.a, "/product/all/?page=").concat(n);
                    s.a.get(i).then((function(e) {
                        e.data && a(e.data)
                    })).catch((function(e) {
                        a(null)
                    }))
                }
        },
        221: function(e, a, n) {
            "use strict";
            n.d(a, "a", (function() {
                return d
            })), n.d(a, "c", (function() {
                return c
            })), n.d(a, "b", (function() {
                return r
            }));
            var i = n(222),
                s = n(4),
                t = n.n(s),
                o = n(24),
                d = function(e, a, n, i, s, d) {
                    return function(c) {
                        var r = e;
                        "china" !== r && "pakistan" !== r || (r = "1688");
                        var m = !1;
                        if (a.includes("abb-") && !a.includes("alb-") && (m = !0), "alibaba" === r) return s({
                            type: 9,
                            message: "Backend Error"
                        }), void c({
                            type: "SET_PRODUCTS",
                            payload: null
                        });
                        var l = "".concat(o.a, "/product/key-search?source=").concat(a.includes("alb-") ? "alibaba" : r, "&key=").concat(decodeURI(a.split("%").join(" ")), "&page=").concat(n);
                        m && (l = "".concat(o.a, "/product/key-search?source=").concat(r, "&key=").concat(decodeURI(a), "&vendor_id=").concat(decodeURI(a), "&page=").concat(n)), d && (l = l + "&" + d.slice(1)), t.a.get(encodeURI(l)).then((function(e) {
                            console.log(e.data), e.data && e.data.results && Array.isArray(e.data.results) ? (c({
                                type: "SET_PRODUCTS",
                                payload: e.data
                            }), i(!1)) : s({
                                type: 9,
                                message: "Product Not Found ..."
                            })
                        })).catch((function(e) {
                            s({
                                type: 9,
                                message: "Backend Error"
                            }), c({
                                type: "SET_PRODUCTS",
                                payload: null
                            })
                        }))
                    }
                },
                c = function(e) {
                    return function(a) {
                        a({
                            type: "SET_PRODUCTS",
                            payload: e
                        })
                    }
                },
                r = function(e, a, n, s, d, c, r) {
                    return function(m) {
                        var l = e;
                        "china" === l && (l = "1688");
                        var u = "".concat(o.a, "/product/image-search"),
                            h = new FormData;
                        h.append("source", l), h.append("page", n), a ? h.append("image", a) : c && h.append("img_src", c);
                        var p, g = Object(i.a)(h.entries());
                        try {
                            for (g.s(); !(p = g.n()).done;) {
                                var f = p.value;
                                console.log(f[0] + ", " + f[1])
                            }
                        } catch (b) {
                            g.e(b)
                        } finally {
                            g.f()
                        }
                        m({
                            type: "SET_PRODUCTS",
                            payload: null
                        }), t()({
                            method: "post",
                            url: u,
                            data: h,
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(e) {
                            console.log(e.data), e.data && e.data.results && Array.isArray(e.data.results) ? (m({
                                type: "SET_PRODUCTS",
                                payload: e.data
                            }), a && r.push({
                                pathname: "/shop/".concat("china", "/imagesearch"),
                                search: "?imagesrc=".concat(e.data.key),
                                state: {
                                    loadAgain: !1
                                }
                            }), s(!1)) : (s(!1), r.push("/product/".concat("china", "/link")))
                        })).catch((function(e) {
                            s(!1), d({
                                type: 9,
                                message: "Backend Error"
                            }), m({
                                type: "SET_PRODUCTS",
                                payload: null
                            })
                        }))
                    }
                }
        },
        536: function(e, a, n) {
            "use strict";
            n.r(a), a.default = n.p + "static/media/camera.27f45331.svg"
        },
        537: function(e, a, n) {
            "use strict";
            n.r(a), a.default = n.p + "static/media/search_white.3a327b42.svg"
        },
        611: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, "default", (function() {
                return b
            }));
            var i = n(2),
                s = n(1),
                t = n.n(s),
                o = n(6),
                d = n(11),
                c = n(535),
                r = n(221),
                m = n(21),
                l = n(0),
                u = t.a.memo((function() {
                    var e = Object(s.useRef)(null),
                        a = Object(s.useState)(null),
                        t = Object(i.a)(a, 2),
                        u = t[0],
                        h = t[1],
                        p = Object(d.b)(),
                        g = Object(s.useState)(!1),
                        f = Object(i.a)(g, 2),
                        b = f[0],
                        S = f[1],
                        y = Object(s.useState)(null),
                        C = Object(i.a)(y, 2),
                        B = (C[0], C[1]),
                        w = Object(o.useHistory)();

                    function v(e) {
                        var a = e.target.files[0];
                        if (!a || !a.name.match(/\.(jpg|jpeg|png|PNG|JPG|JPEG)$/)) return !1;
                        var n = a.name.split(".")[1];
                        Object(c.a)(a, {
                            maxSizeMB: .2,
                            maxWidthOrHeight: 500,
                            useWebWorker: !0
                        }).then((function(e) {
                            var a, i, s = (a = e, i = "image.".concat(n), new File([a], i));
                            return h(s)
                        })).catch((function(e) {
                            console.log(e.message)
                        }))
                    }
                    return Object(s.useEffect)((function() {
                        u && (S(!0), p(Object(r.b)("china", u, 1, S, B, null, w)))
                    }), [u]), Object(l.jsxs)("div", {
                        className: "imageUploaderContainer",
                        children: [Object(l.jsx)("img", {
                            className: "arrowRight",
                            onClick: function() {
                                e && e.current && e.current.click()
                            },
                            style: {
                                width: "24px",
                                marginLeft: "0.65rem",
                                cursor: "pointer"
                            },
                            src: n(536).default,
                            alt: ""
                        }), Object(l.jsx)("label", {
                            htmlFor: "inputId",
                            style: {
                                position: "fixed",
                                top: "-100em"
                            },
                            children: "Image Search"
                        }), Object(l.jsx)("input", {
                            name: "uploadImage",
                            ref: e,
                            id: "inputId",
                            type: "file",
                            style: {
                                position: "fixed",
                                top: "-100em"
                            },
                            onChange: function(e) {
                                return v(e)
                            }
                        }), b && Object(l.jsx)("div", {
                            className: "loadingContainer",
                            children: Object(l.jsx)(m.a, {})
                        })]
                    })
                })),
                h = (n(213), n(40)),
                p = [{
                    id: 1,
                    name: "Women's Fashion",
                    icon: "clothing",
                    sub: [{
                        id: "1000",
                        name: "Dresses"
                    }, {
                        id: "1001",
                        name: "Tees"
                    }, {
                        id: "1002",
                        name: "Blouses & Shirts"
                    }, {
                        id: "1003",
                        name: "Hoodies & Sweatshirts"
                    }, {
                        id: "1004",
                        name: "Women's Sets"
                    }, {
                        id: "1005",
                        name: "Suits & Blazers"
                    }, {
                        id: "1006",
                        name: "Bodysuits"
                    }, {
                        id: "1007",
                        name: "Tanks & Camis"
                    }, {
                        id: "1008",
                        name: "Coats & Jackets"
                    }, {
                        id: "1009",
                        name: "Sweaters"
                    }, {
                        id: "1010",
                        name: "Swimwear"
                    }, {
                        id: "1011",
                        name: "Bikini Sets"
                    }, {
                        id: "1012",
                        name: "Cover-Ups"
                    }, {
                        id: "1013",
                        name: "Bottoms"
                    }, {
                        id: "1014",
                        name: "Leggings"
                    }, {
                        id: "1015",
                        name: "Skirts"
                    }, {
                        id: "1016",
                        name: "Shorts"
                    }, {
                        id: "1017",
                        name: "Jeans"
                    }, {
                        id: "1018",
                        name: "Pants & Capris"
                    }, {
                        id: "1019",
                        name: "Weddings & Events"
                    }, {
                        id: "1020",
                        name: "Wedding Dresses"
                    }, {
                        id: "1021",
                        name: "Prom Dresses"
                    }, {
                        id: "1022",
                        name: "Evening Dresses"
                    }, {
                        id: "1023",
                        name: "Africa Clothing"
                    }, {
                        id: "1024",
                        name: "Cosplay Costumes"
                    }, {
                        id: "1025",
                        name: "Women's Underwear"
                    }, {
                        id: "1026",
                        name: "Pajama Sets"
                    }, {
                        id: "1027",
                        name: "Bras"
                    }, {
                        id: "1028",
                        name: "Panties"
                    }, {
                        id: "1029",
                        name: "Women's Socks"
                    }, {
                        id: "1030",
                        name: "Bra & Brief Sets"
                    }, {
                        id: "1031",
                        name: "Shapewear"
                    }, {
                        id: "1032",
                        name: "Accessories"
                    }, {
                        id: "1033",
                        name: "Hair Accessories"
                    }, {
                        id: "1034",
                        name: "Sunglasses"
                    }, {
                        id: "1035",
                        name: "Blue Light Blocking Glasses"
                    }, {
                        id: "1036",
                        name: "Baseball Caps"
                    }, {
                        id: "1037",
                        name: "Bucket Hats"
                    }, {
                        id: "1038",
                        name: "Belts"
                    }, {
                        id: "1039",
                        name: "Summer Sale"
                    }, {
                        id: "1040",
                        name: "Beach Style"
                    }]
                }, {
                    id: 2,
                    name: "Mens Fashion",
                    icon: "mens_clothing",
                    sub: [{
                        id: "2000",
                        name: "Hoodies & Sweatshirts"
                    }, {
                        id: "2001",
                        name: "T-Shirts"
                    }, {
                        id: "2002",
                        name: "Shirts"
                    }, {
                        id: "2003",
                        name: "Casual Shorts"
                    }, {
                        id: "2004",
                        name: "Men's Sets"
                    }, {
                        id: "2005",
                        name: "Jackets"
                    }, {
                        id: "2006",
                        name: "Bottoms"
                    }, {
                        id: "2007",
                        name: "Casual Pants"
                    }, {
                        id: "2008",
                        name: "Sweatpants"
                    }, {
                        id: "2009",
                        name: "Cargo Pants"
                    }, {
                        id: "2010",
                        name: "Jeans"
                    }, {
                        id: "2011",
                        name: "Harem Pants"
                    }, {
                        id: "2012",
                        name: "Shorts"
                    }, {
                        id: "2013",
                        name: "Outerwear & Jackets"
                    }, {
                        id: "2014",
                        name: "Jackets"
                    }, {
                        id: "2015",
                        name: "Sweaters"
                    }, {
                        id: "2016",
                        name: "Casual Faux Leather"
                    }, {
                        id: "2017",
                        name: "Genuine Leather"
                    }, {
                        id: "2018",
                        name: "Parkas"
                    }, {
                        id: "2019",
                        name: "Down Jackets"
                    }, {
                        id: "2020",
                        name: "Suits & Blazer"
                    }, {
                        id: "2021",
                        name: "Underwear & Loungewear"
                    }, {
                        id: "2022",
                        name: "Boxers"
                    }, {
                        id: "2023",
                        name: "Briefs"
                    }, {
                        id: "2024",
                        name: "Long Johns"
                    }, {
                        id: "2025",
                        name: "Men's Sleep & Lounge"
                    }, {
                        id: "2026",
                        name: "Pajama Sets"
                    }, {
                        id: "2027",
                        name: "Accessories"
                    }, {
                        id: "2028",
                        name: "Scarves"
                    }, {
                        id: "2029",
                        name: "Skullies & Beanies"
                    }, {
                        id: "2030",
                        name: "Prescription Glasses"
                    }, {
                        id: "2031",
                        name: "Gloves & Mittens"
                    }, {
                        id: "2032",
                        name: "Belts"
                    }, {
                        id: "2033",
                        name: "Bomber Hats"
                    }, {
                        id: "2034",
                        name: "Fedoras"
                    }, {
                        id: "2035",
                        name: "Berets"
                    }, {
                        id: "2036",
                        name: "Baseball Caps"
                    }, {
                        id: "2037",
                        name: "Novelty & Special Use"
                    }, {
                        id: "2038",
                        name: "Cosplay Costumes"
                    }, {
                        id: "2039",
                        name: "Stage & Dance Wear"
                    }, {
                        id: "2040",
                        name: "Exotic Apparel"
                    }]
                }, {
                    id: 3,
                    name: "Outdoor Fun Sports",
                    icon: "sport",
                    sub: [{
                        id: "3000",
                        name: "Swimming"
                    }, {
                        id: "3001",
                        name: "One-Piece Suits"
                    }, {
                        id: "3002",
                        name: "Two-Piece Suits"
                    }, {
                        id: "3003",
                        name: "Cover-Ups"
                    }, {
                        id: "3004",
                        name: "Men's Swimwear"
                    }, {
                        id: "3005",
                        name: "Children's Swimwear"
                    }, {
                        id: "3006",
                        name: "Cycling & Scooters"
                    }, {
                        id: "3007",
                        name: "Bicycles"
                    }, {
                        id: "3008",
                        name: "Bicycle Frames"
                    }, {
                        id: "3009",
                        name: "Bicycle Lights"
                    }, {
                        id: "3010",
                        name: "Bicycle Helmets"
                    }, {
                        id: "3011",
                        name: "Cycling Jerseys"
                    }, {
                        id: "3012",
                        name: "Cycling Eyewear"
                    }, {
                        id: "3013",
                        name: "Sneakers"
                    }, {
                        id: "3014",
                        name: "Running Shoes"
                    }, {
                        id: "3015",
                        name: "Hiking Shoes"
                    }, {
                        id: "3016",
                        name: "Soccer Shoes"
                    }, {
                        id: "3017",
                        name: "Skateboarding Shoes"
                    }, {
                        id: "3018",
                        name: "Dance Shoes"
                    }, {
                        id: "3019",
                        name: "Basketball Shoes"
                    }, {
                        id: "3020",
                        name: "Fishing"
                    }, {
                        id: "3021",
                        name: "Fishing Reels"
                    }, {
                        id: "3022",
                        name: "Fishing Lures"
                    }, {
                        id: "3023",
                        name: "Fishing Lines"
                    }, {
                        id: "3024",
                        name: "Fishing Rods"
                    }, {
                        id: "3025",
                        name: "Rod Combos"
                    }, {
                        id: "3026",
                        name: "Fishing Tackle Boxes"
                    }, {
                        id: "3027",
                        name: "Sportswear"
                    }, {
                        id: "3028",
                        name: "Jerseys"
                    }, {
                        id: "3029",
                        name: "Hiking Jackets"
                    }, {
                        id: "3030",
                        name: "Pants"
                    }, {
                        id: "3031",
                        name: "Shorts"
                    }, {
                        id: "3032",
                        name: "Sports Bags"
                    }, {
                        id: "3033",
                        name: "Sports Accessories"
                    }, {
                        id: "3034",
                        name: "Other Sports Equipment"
                    }, {
                        id: "3035",
                        name: "Camping & Hiking"
                    }, {
                        id: "3036",
                        name: "Hunting"
                    }, {
                        id: "3037",
                        name: "Golf"
                    }, {
                        id: "3038",
                        name: "Fitness & Bodybuilding"
                    }, {
                        id: "3039",
                        name: "Skiing & Snowboarding"
                    }, {
                        id: "3040",
                        name: "Musical Instruments"
                    }]
                }, {
                    id: 4,
                    name: "Jewelry Items",
                    icon: "necklace",
                    sub: [{
                        id: "4000",
                        name: "925 Silver Jewelry"
                    }, {
                        id: "4001",
                        name: "Diamond Jewelry"
                    }, {
                        id: "4002",
                        name: "Pearl Jewelry"
                    }, {
                        id: "4003",
                        name: "Gemstones"
                    }, {
                        id: "4004",
                        name: "K-Gold Jewelry"
                    }, {
                        id: "4005",
                        name: "Fine Earrings"
                    }, {
                        id: "4006",
                        name: "Fine Jewelry Sets"
                    }, {
                        id: "4007",
                        name: "Men's Fine Jewelry"
                    }, {
                        id: "4008",
                        name: "Wedding & Engagement"
                    }, {
                        id: "4009",
                        name: "Bridal Jewelry Sets"
                    }, {
                        id: "4010",
                        name: "Engagement Rings"
                    }, {
                        id: "4011",
                        name: "Wedding Hair Jewelry"
                    }, {
                        id: "4012",
                        name: "Men's Watches"
                    }, {
                        id: "4013",
                        name: "Mechanical Watches"
                    }, {
                        id: "4014",
                        name: "Quartz Watches"
                    }, {
                        id: "4015",
                        name: "Digital Watches"
                    }, {
                        id: "4016",
                        name: "Dual Display Watches"
                    }, {
                        id: "4017",
                        name: "Sports Watches"
                    }, {
                        id: "4018",
                        name: "Women's Watches"
                    }, {
                        id: "4019",
                        name: "Women's Bracelet Watches"
                    }, {
                        id: "4020",
                        name: "Elegant Watches"
                    }, {
                        id: "4021",
                        name: "Romantic Watches"
                    }, {
                        id: "4022",
                        name: "Sports Watches"
                    }, {
                        id: "4023",
                        name: "Innovative Watches"
                    }, {
                        id: "4024",
                        name: "Fashion Jewelry"
                    }, {
                        id: "4025",
                        name: "Necklaces & Pendants"
                    }, {
                        id: "4026",
                        name: "Trendy Rings"
                    }, {
                        id: "4027",
                        name: "Trendy Earrings"
                    }, {
                        id: "4028",
                        name: "Bracelets & Bangles"
                    }, {
                        id: "4029",
                        name: "Men's Cuff Links"
                    }, {
                        id: "4030",
                        name: "Fashion Jewelry Sets"
                    }, {
                        id: "4031",
                        name: "Charms"
                    }, {
                        id: "4032",
                        name: "Body Jewelry"
                    }, {
                        id: "4033",
                        name: "Beads & DIY Jewelry"
                    }, {
                        id: "4034",
                        name: "Beads"
                    }]
                }, {
                    id: 5,
                    name: "Bags",
                    icon: "handbag",
                    sub: [{
                        id: "5000",
                        name: "Handbag"
                    }, {
                        id: "5001",
                        name: "Cross body Bags"
                    }, {
                        id: "5002",
                        name: " Clutches"
                    }, {
                        id: "5003",
                        name: "Wallets"
                    }, {
                        id: "5004",
                        name: "Shoulder Bags"
                    }, {
                        id: "5005",
                        name: "Laptop Bags"
                    }, {
                        id: "5006",
                        name: " Bag pack"
                    }, {
                        id: "5007",
                        name: "School Bags"
                    }, {
                        id: "5008",
                        name: "Hand Purse"
                    }]
                }, {
                    id: 6,
                    name: "Kid's Collections",
                    icon: "kid",
                    sub: [{
                        id: "6000",
                        name: "Boys Clothing"
                    }, {
                        id: "6001",
                        name: "Girls Clothing"
                    }, {
                        id: "6002",
                        name: "Baby T-Shirts"
                    }, {
                        id: "6003",
                        name: "Baby Pants"
                    }, {
                        id: "6004",
                        name: "Baby Rompers"
                    }, {
                        id: "6005",
                        name: "Baby Clothing sets"
                    }, {
                        id: "6006",
                        name: "Baby Hoodies, Jackets & outwears"
                    }, {
                        id: "6007",
                        name: "Baby bibs"
                    }, {
                        id: "6008",
                        name: "Baby socks"
                    }, {
                        id: "6009",
                        name: "Baby caps & Hair bands"
                    }]
                }, {
                    id: 7,
                    name: "Footwear",
                    icon: "shoes",
                    sub: [{
                        id: "7000",
                        name: "Heels"
                    }, {
                        id: "7001",
                        name: "Women's Loafer, Canvas & Sneakers"
                    }, {
                        id: "7002",
                        name: "Women's Slippers & Flip Flops"
                    }, {
                        id: "7003",
                        name: "Men's Shoes"
                    }, {
                        id: "7004",
                        name: "Men's Loafer, canvas & sneakers"
                    }, {
                        id: "7005",
                        name: "Men's Sandals"
                    }, {
                        id: "7006",
                        name: "Men's Slippers & Flip Flop"
                    }, {
                        id: "7007",
                        name: "Kid's Shoes"
                    }, {
                        id: "7008",
                        name: "Kid's Slippers & Flip Flop"
                    }, {
                        id: "7009",
                        name: "Boots"
                    }]
                }, {
                    id: 8,
                    name: "Beauty & Health",
                    icon: "beauty_product",
                    sub: [{
                        id: "8000",
                        name: "Makeup Items"
                    }, {
                        id: "8001",
                        name: "Skin Care"
                    }, {
                        id: "8002",
                        name: "Hair Care"
                    }, {
                        id: "8003",
                        name: "Bath & Body "
                    }, {
                        id: "8004",
                        name: "Personal Care"
                    }]
                }, {
                    id: 9,
                    name: "Home Decoration",
                    icon: "home_improvements",
                    sub: [{
                        id: "9000",
                        name: "Wallpapers"
                    }, {
                        id: "9001",
                        name: "Curtain & Accessories"
                    }, {
                        id: "9002",
                        name: "Carpet & Rugs"
                    }, {
                        id: "9003",
                        name: "Pillows & Cushions"
                    }, {
                        id: "9004",
                        name: "Candles"
                    }, {
                        id: "9005",
                        name: "Decorative Boxes"
                    }, {
                        id: "9006",
                        name: "Artificial Flower & Vases"
                    }, {
                        id: "9007",
                        name: "Picture Frame"
                    }, {
                        id: "9008",
                        name: "Wall paintings & Decorations"
                    }, {
                        id: "9009",
                        name: "Decorative Lights & Lamps"
                    }]
                }, {
                    id: 10,
                    name: "Accessories",
                    icon: "watch",
                    sub: [{
                        id: "10000",
                        name: "Men's Watches"
                    }, {
                        id: "10001",
                        name: "Belts"
                    }, {
                        id: "10002",
                        name: "Hair bands"
                    }, {
                        id: "10003",
                        name: "Caps"
                    }, {
                        id: "10004",
                        name: "Tie"
                    }, {
                        id: "10005",
                        name: "Sunglasses "
                    }]
                }],
                g = n(42),
                f = [{
                    id: 1,
                    name: "Electronics Accessories & Gadgets",
                    icon: "electronics",
                    sub: [{
                        id: "1000",
                        name: "Car & vehicle Electronics"
                    }, {
                        id: "1001",
                        name: "Apple Accessories"
                    }, {
                        id: "1002",
                        name: "Samsung Accessories"
                    }, {
                        id: "1003",
                        name: "Portable Speakers"
                    }, {
                        id: "1004",
                        name: "Camera & Photo Accessories"
                    }, {
                        id: "1005",
                        name: "Cell Phones & Computer Accessories"
                    }, {
                        id: "1006",
                        name: "Computer & Accessories"
                    }, {
                        id: "1007",
                        name: "Headphones & Back Cases"
                    }, {
                        id: "1008",
                        name: "Projectors"
                    }, {
                        id: "1009",
                        name: "Video games consoles & Accessories"
                    }, {
                        id: "1010",
                        name: "Office Electronics"
                    }, {
                        id: "1011",
                        name: "Power banks and chargers"
                    }, {
                        id: "1012",
                        name: "Home Electronics"
                    }, {
                        id: "1013",
                        name: "New Smart Devices"
                    }, {
                        id: "1014",
                        name: "Audio & Video devices"
                    }]
                }, {
                    id: 2,
                    name: "Home & Kitchen",
                    icon: "home_improvements",
                    sub: [{
                        id: "2000",
                        name: "Decorations, Wall arts & Lightings"
                    }, {
                        id: "2001",
                        name: "Furniture & Home D\xe9cor"
                    }, {
                        id: "2002",
                        name: "Smart Locks & Entry"
                    }, {
                        id: "2003",
                        name: "Events & Party Supplies"
                    }, {
                        id: "2004",
                        name: "Kitchen Storage & Organization"
                    }, {
                        id: "2005",
                        name: "Kitchen & Bath"
                    }, {
                        id: "2006",
                        name: "Vacuums, Mops & Cleaning Supplies"
                    }, {
                        id: "2007",
                        name: "Crockeries"
                    }, {
                        id: "2008",
                        name: "Tools & Home improvements"
                    }, {
                        id: "2009",
                        name: "Heating, Cooling & Air Quality"
                    }]
                }, {
                    id: 3,
                    name: "Beauty & Personal Care",
                    icon: "beauty_product",
                    sub: [{
                        id: "3000",
                        name: "Skin Care"
                    }, {
                        id: "3001",
                        name: "Hair Care"
                    }, {
                        id: "3002",
                        name: "Foot, Hand & Nail Care"
                    }, {
                        id: "3003",
                        name: "Shave & Hair Removal"
                    }, {
                        id: "3004",
                        name: "Oral Care"
                    }, {
                        id: "3005",
                        name: "Personal Care"
                    }, {
                        id: "3006",
                        name: "Fragrances"
                    }, {
                        id: "3007",
                        name: "Baby  Care"
                    }, {
                        id: "3008",
                        name: "False Eyelashes & Nails"
                    }]
                }, {
                    id: 4,
                    name: "Women's Style",
                    icon: "clothing",
                    sub: [{
                        id: "4999",
                        name: "Clothing"
                    }, {
                        id: "4000",
                        name: "Shoes"
                    }, {
                        id: "4001",
                        name: "Jewelry"
                    }, {
                        id: "4002",
                        name: "Watches"
                    }, {
                        id: "4003",
                        name: "Handbags"
                    }, {
                        id: "4004",
                        name: "Hats & Belts"
                    }, {
                        id: "4005",
                        name: "Sunglasses"
                    }, {
                        id: "4006",
                        name: "Hair Accessories"
                    }, {
                        id: "4007",
                        name: "Other Accessories"
                    }]
                }, {
                    id: 5,
                    name: "Men's Style",
                    icon: "mens_clothing",
                    sub: [{
                        id: "5000",
                        name: "Clothing"
                    }, {
                        id: "5001",
                        name: "Shoes"
                    }, {
                        id: "5002",
                        name: "Belts"
                    }, {
                        id: "5003",
                        name: "Watches"
                    }, {
                        id: "5004",
                        name: "Bags & Wallets"
                    }, {
                        id: "5005",
                        name: "Caps & Hats"
                    }, {
                        id: "5006",
                        name: "Sunglasses"
                    }, {
                        id: "5007",
                        name: "Ties & Accessories"
                    }, {
                        id: "5008",
                        name: "Other Accessories"
                    }]
                }, {
                    id: 6,
                    name: "Toys, Kids & Baby",
                    icon: "kid",
                    sub: [{
                        id: "6000",
                        name: " Shoes"
                    }, {
                        id: "6001",
                        name: "Caps & Hats"
                    }, {
                        id: "6002",
                        name: "Diapering"
                    }, {
                        id: "6003",
                        name: "Feeding"
                    }, {
                        id: "6004",
                        name: "Baby Care & Stationery"
                    }, {
                        id: "6005",
                        name: "Baby Entertainments"
                    }, {
                        id: "6006",
                        name: "Car Seats & Accessories"
                    }, {
                        id: "6007",
                        name: "Baby & Toddler Toys"
                    }]
                }, {
                    id: 7,
                    name: "Sports & Outdoor",
                    icon: "sport",
                    sub: [{
                        id: "7000",
                        name: "Exercise & Fitness"
                    }, {
                        id: "7001",
                        name: "Sports Shoes & Bags"
                    }, {
                        id: "7002",
                        name: "Hunting & Fishing"
                    }, {
                        id: "7003",
                        name: "Gym Equipment & Accessories"
                    }, {
                        id: "7004",
                        name: "Outdoor Clothing"
                    }, {
                        id: "7005",
                        name: "Outdoor Recreation"
                    }]
                }, {
                    id: 8,
                    name: "Pet Supplies",
                    icon: "pet",
                    sub: [{
                        id: "8001",
                        name: "Cat Food"
                    }, {
                        id: "8002",
                        name: "Dog Food"
                    }, {
                        id: "8003",
                        name: "Fish & Aquatic pet Food"
                    }, {
                        id: "8004",
                        name: "Cat Accessories"
                    }, {
                        id: "8005",
                        name: "Dog Accessories"
                    }, {
                        id: "8006",
                        name: "Fish & Aquatic pet Accessories"
                    }, {
                        id: "8007",
                        name: "Cat Accessories"
                    }]
                }, {
                    id: 9,
                    name: "Industrial And Scientific",
                    icon: "industry",
                    sub: [{
                        id: "9000",
                        name: "Industrial Electrical & Hardware"
                    }, {
                        id: "9001",
                        name: "Industrial Power & Hand Tools"
                    }, {
                        id: "9002",
                        name: "Janitorial & Sanitation Supplies"
                    }, {
                        id: "9003",
                        name: "Cutting Tools"
                    }, {
                        id: "9004",
                        name: "Material Handling Products"
                    }, {
                        id: "9005",
                        name: "Occupational Health & Safety Products"
                    }, {
                        id: "9006",
                        name: "Packaging & Shipping Supplies"
                    }, {
                        id: "9007",
                        name: "Tapes, Adhesives & Sealants"
                    }, {
                        id: "9008",
                        name: "Lab & Scientific Products"
                    }, {
                        id: "9009",
                        name: "Professional Medical Supplies"
                    }]
                }, {
                    id: 10,
                    name: "Tools & Home Improvements",
                    icon: "tools",
                    sub: [{
                        id: "10000",
                        name: "Building Supplies"
                    }, {
                        id: "10001",
                        name: "Electrical  & Hardware"
                    }, {
                        id: "10002",
                        name: "Lighting & Ceiling Fans"
                    }, {
                        id: "10003",
                        name: "Measuring & Layout Tools"
                    }, {
                        id: "10004",
                        name: "Painting Supplies & Wall Treatments"
                    }, {
                        id: "10005",
                        name: "Power & Hand Tools"
                    }, {
                        id: "10006",
                        name: "Rough Plumbing"
                    }, {
                        id: "10007",
                        name: "Safety & Security"
                    }, {
                        id: "10008",
                        name: "Storage & Home Organization"
                    }]
                }, {
                    id: 11,
                    name: "Food Products",
                    icon: "food",
                    sub: [{
                        id: "11000",
                        name: "Grocery & Gourmet food"
                    }, {
                        id: "11001",
                        name: "Canned, Jarred & Packaged food"
                    }, {
                        id: "11002",
                        name: "Beverages, Drinks & water"
                    }, {
                        id: "11003",
                        name: "Breakfast Foods"
                    }, {
                        id: "11004",
                        name: "Cooking & Baking Grocery"
                    }, {
                        id: "11005",
                        name: "Diet Foods"
                    }, {
                        id: "11006",
                        name: "Baby Foods"
                    }, {
                        id: "11007",
                        name: "Snacks, Nuts & seeds"
                    }]
                }];

            function b(e) {
                var a = Object(o.useHistory)(),
                    t = Object(o.useLocation)(),
                    c = Object(s.useState)(""),
                    r = Object(i.a)(c, 2),
                    b = r[0],
                    S = r[1],
                    y = Object(d.b)(),
                    C = (Object(d.b)(), Object(s.useState)(!1)),
                    B = Object(i.a)(C, 2),
                    w = B[0],
                    v = (B[1], Object(s.useState)(!0)),
                    k = Object(i.a)(v, 2),
                    O = k[0],
                    j = k[1],
                    P = Object(d.c)((function(e) {
                        return e.platform
                    })),
                    F = function() {
                        var e = [];
                        return h.a.forEach((function(a) {
                            e.push(a.name.toLocaleLowerCase()), a.sub.forEach((function(a) {
                                e.push(a.name.toLocaleLowerCase())
                            }))
                        })), g.a.forEach((function(a) {
                            e.push(a.name.toLocaleLowerCase()), a.sub.forEach((function(a) {
                                e.push(a.name.toLocaleLowerCase())
                            }))
                        })), p.forEach((function(a) {
                            e.push(a.name.toLocaleLowerCase()), a.sub.forEach((function(a) {
                                e.push(a.name.toLocaleLowerCase())
                            }))
                        })), f.forEach((function(a) {
                            e.push(a.name.toLocaleLowerCase()), a.sub.forEach((function(a) {
                                e.push(a.name.toLocaleLowerCase())
                            }))
                        })), e
                    }(),
                    L = !1;
                if (t.pathname.includes("/shop/")) {
                    var E = t.pathname.split("/");
                    (L = E[3]) && (L = L.trim().split("-").join(" ").toUpperCase())
                }
                Object(s.useEffect)((function() {
                    var e = setInterval((function() {
                        j((function(e) {
                            return !e
                        }))
                    }), 4e3);
                    return function() {
                        clearInterval(e)
                    }
                }), []), Object(s.useEffect)((function() {
                    L ? S(L) : S("");
                    if (localStorage.getItem("platform")) {
                        var e = t.pathname + t.search;
                        e.includes("china") || e.includes("alibaba") ? y({
                            type: "SET_PLATFORM",
                            payload: "china"
                        }) : e.includes("pakistan") || y({
                            type: "SET_PLATFORM",
                            payload: "china"
                        })
                    }
                }), [t, a, P, y]);
                var H = function() {
                    if ("" !== b)
                        if (b.includes("https://") || b.includes(".com")) {
                            if (b.includes("www.alibaba.com")) {
                                var e = b.indexOf(".html"),
                                    n = b.substring(1, e).lastIndexOf("_") + 2,
                                    i = b.substring(n, e);
                                i && (i = "alb-" + i, a.push("/shop/".concat("china", "/", i)))
                            } else if (b.includes("m.alibaba.com")) {
                                var s = b.indexOf("product/") + 8,
                                    t = b.substring(s),
                                    o = t.indexOf("/"),
                                    d = t.substring(0, o);
                                d && (d = "alb-" + d, a.push("/shop/".concat("china", "/", d)))
                            }
                            if (b.includes("detail.1688.com")) {
                                var c = b.indexOf("offer/") + 6,
                                    r = b.substring(c),
                                    m = r.indexOf(".html"),
                                    l = r.substring(0, m);
                                l && (l = "abb-" + l, a.push("/product/".concat("china", "/", l, "?source=", "china", "&search=", "link")))
                            } else if (b.includes("m.1688.com")) {
                                var u = "";
                                if (b.includes("offerId=")) {
                                    var h = b.indexOf("offerId=") + 8;
                                    u = (u = b.substring(h)).replace(/\s/g, "")
                                } else {
                                    var p = b.split("offer/").length > 1 ? b.split("offer/")[1] : "";
                                    u = p.split(".html").length > 1 ? p.split(".html")[0] : ""
                                }
                                u && (u = "abb-" + u, a.push("/product/".concat("china", "/", u, "?source=", "china", "&search=", "link")))
                            }
                        } else if (b.includes("abb-") || b.includes("Abb-")) {
                        var g = b.replace(/\s/g, "").toLowerCase();
                        a.push("/product/".concat("china", "/", g, "?source=", "china", "&search=", "link"))
                    } else if (b.includes("alb-") || b.includes("Alb-")) {
                        var f = b.replace(/\s/g, "").toLowerCase();
                        a.push("/product/".concat("alibaba", "/", f, "?source=", "alibaba", "&search=", "link"))
                    } else {
                        var S = b.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();
                        a.push("/shop/".concat(P, "/").concat(encodeURI(S)))
                    }
                };
                return Object(l.jsxs)("div", {
                    className: "searchContainer platformSelect",
                    style: e.platform ? {
                        boxShadow: "0 0 0 2px #000",
                        borderRadius: 10
                    } : {},
                    children: [!e.platform && Object(l.jsx)(u, {}), Object(l.jsx)("label", {
                        htmlFor: "name",
                        style: {
                            width: 0,
                            overflow: "hidden"
                        },
                        children: "Search"
                    }), Object(l.jsx)("input", {
                        type: "text",
                        list: "suggestions",
                        autoComplete: "off",
                        name: "search",
                        id: e.id,
                        placeholder: e.platform ? "Search By Product Link" : O ? "Search By Keyword" : "Search By Link",
                        value: b.includes("api.wholesalecart.com") || b.includes("link") ? "" : b,
                        onChange: function(e) {
                            return S(e.target.value)
                        },
                        onKeyDown: function(e) {
                            "Enter" === e.key && H()
                        },
                        style: {
                            borderRadius: "0px",
                            borderBottomLeftRadius: "4px",
                            borderTopLeftRadius: "4px",
                            fontSize: "13px"
                        }
                    }), Object(l.jsx)("datalist", {
                        id: "suggestions",
                        children: F.filter((function(e) {
                            return e.includes(b) || e.startsWith(b)
                        })).slice(0, 4).map((function(e, a) {
                            return Object(l.jsx)("option", {
                                value: e
                            }, e)
                        }))
                    }), Object(l.jsx)("div", {
                        className: "bt btSearch",
                        onClick: function() {
                            H()
                        },
                        style: e.platform ? {
                            background: "#000",
                            border: "none",
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6
                        } : {},
                        children: w ? Object(l.jsx)(m.a, {
                            white: !0
                        }) : Object(l.jsx)("img", {
                            className: "arrowRight",
                            style: {
                                width: "24px"
                            },
                            src: n(537).default,
                            alt: ""
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=16.6ba3fef4.chunk.js.map