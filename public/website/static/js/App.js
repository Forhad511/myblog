import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import {
    HelmetProvider
} from "react-helmet-async";
import store from "./store";
import {
    Provider
} from "react-redux";
import jwt_decode from "jwt-decode";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import BottomBar from "./components/NavBar/BottomBar";
import Loading from "./components/Loading/Loading";
import setAuthToken from "./utils/setAuthToken";
import {
    setUser,
    logoutUser,
    sendReferer
} from "./actions/authAction";
import ErrorBoundary from "./components/ErrorBoundary";
import PromotionPopup from "./components/NavBar/PromotionPopup";
import Invoices from "./pages/Account/Invoices";
import MasterInvoice from "./pages/MasterInvoice";

const Reviews = lazy(() =>
    import ("./pages/Reviews"));
const WatchSeminars = lazy(() =>
    import ("./pages/WatchSeminars"));
const Seller = lazy(() =>
    import ("./pages/Seller"));

const Videos = lazy(() =>
    import ("./pages/Videos"));
const Cart = lazy(() =>
    import ("./pages/Cart/Cart"));
const Checkout = lazy(() =>
    import ("./pages/Cart/Checkout"));
const Product = lazy(() =>
    import ("./pages/Product"));
const Pay = lazy(() =>
    import ("./pages/Payments/Pay"));
const Confirmation = lazy(() =>
    import ("./pages/Payments/Confirmation"));
const Invoice = lazy(() =>
    import ("./pages/Payments/Invoice"));
const Auth = lazy(() =>
    import ("./pages/Auth/Auth"));
const Account = lazy(() =>
    import ("./pages/Account/Dashboard"));
const Orders = lazy(() =>
    import ("./pages/Account/Orders"));
const Balance = lazy(() =>
    import ("./pages/Account/Balance"));
const Agentship = lazy(() =>
    import ("./pages/Account/Agentship"));
const Settings = lazy(() =>
    import ("./pages/Account/Settings"));
const Order = lazy(() =>
    import ("./pages/Account/OrderDetails"));
const Delivery = lazy(() =>
    import ("./pages/Account/Delivery"));
const Support = lazy(() =>
    import ("./pages/Account/Support"));
const Ticket = lazy(() =>
    import ("./pages/Account/Ticket"));
const Home = lazy(() =>
    import ("./pages/Home"));
const ShoppingPage = lazy(() =>
    import ("./pages/ShoppingPage"));
// const Alibaba = lazy(() => import("./pages/Platforms/Alibaba"));
// const AliExpress = lazy(() => import("./pages/Platforms/AliExpress"));
// const AppPopup = lazy(() => import("./components/NavBar/AppPopup"));
const About = lazy(() =>
    import ("./pages/AboutUs"));
const RefundPolicy = lazy(() =>
    import ("./pages/RefundPolicy"));
const Privacy = lazy(() =>
    import ("./pages/Privacy"));
const Terms = lazy(() =>
    import ("./pages/Terms"));
const Certificates = lazy(() =>
    import ("./pages/Certificates"));
const WhyBelieveUs = lazy(() =>
    import ("./pages/WhyBelieveUs"));
const Contact = lazy(() =>
    import ("./pages/Contact/ContactUs"));
const Offers = lazy(() =>
    import ("./pages/Offers"));
const Offer = lazy(() =>
    import ("./pages/Offer"));
const WishList = lazy(() =>
    import ("./pages/WishList"));
const Footer = lazy(() =>
    import ("./components/Footer/Footer"));
const ErrorPage = lazy(() =>
    import ("./pages/ErrorPage"));

if (localStorage.agl) {
    setAuthToken(localStorage.agl);
    store.dispatch(setUser(true));
    try {
        const decoded = jwt_decode(localStorage.agl);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(logoutUser());
        }
    } catch (error) {}

    // if has token
    let currentReferer = document.referrer === "" ? "direct" : document.referrer;
    let prevReferer = localStorage.getItem("referer");
    if (!currentReferer.includes("wholesalecart") &&
        currentReferer !== prevReferer
    ) {
        let mData = {
            url: currentReferer ? currentReferer : "direct"
        };

        if (window.location.search.includes("agl_id")) {
            let arr = window.location.search.split("agl_id=");
            let agl_id = arr[1];
            if (agl_id) {
                mData.agl_id = agl_id;
            }
        }
        sendReferer(mData, () => {});
    }
} else {
    let prevReferer = localStorage.referer;
    if (!prevReferer) {
        if (!document.referrer.includes("wholesalecart")) {
            if (document.referrer) {
                localStorage.setItem("referer", document.referrer);
            } else {
                localStorage.setItem("referer", "direct");
            }
        }
    }
}

let token64 = window.location.search.includes("?agltoken=") ?
    window.location.search.replace("?agltoken=", "") :
    "";

if (token64) {
    try {
        if (localStorage.agl) {
            localStorage.setItem("prev", localStorage.getItem("agl"));
        } else {
            localStorage.setItem("prev", "noprevdata");
        }
        let stringToken = atob(token64);
        let {
            name,
            phone,
            token
        } = JSON.parse(stringToken);
        jwt_decode(token);
        localStorage.setItem("agl", token);
        localStorage.setItem(
            "profile",
            JSON.stringify({
                name: name,
                phone: phone,
            })
        );
        setAuthToken(token);
        store.dispatch(setUser(true));
        window.location.href = "/";
    } catch (error) {
        console.log("Token Invalid");
    }
}

function App(props) {
    //const [count, setCount] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    const [sideBar, setSideBar] = useState(false);
    return ( <
            HelmetProvider >
            <
            Provider store = {
                store
            } >
            <
            Router >
            <
            div className = "App" >
            <
            NavBar setSideBar = {
                setSideBar
            }
            /> <
            SideBar sideBar = {
                sideBar
            }
            setSideBar = {
                setSideBar
            }
            /> <
            BottomBar setSideBar = {
                setSideBar
            }
            /> <
            ErrorBoundary >
            <
            div className = "mainContainer" >
            <
            Suspense fallback = { <
                div
                className = "lazyPage"
                style = {
                    {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }
                } >
                {
                    " "
                } <
                Loading / > {
                    " "
                } <
                /div>
            } >
            <
            div className = "content mobileRadius" > { /* <AppPopup /> */ } <
            PromotionPopup / >
            <
            Switch >
            <
            Route exact path = "/" >
            <
            Home / >
            <
            /Route> <
            Route exact path = "/login" >
            <
            Auth / >
            <
            /Route> <
            Route exact path = "/pay/confirmation/:key?" >
            <
            Confirmation / >
            <
            /Route> <
            Route exact path = "/account" >
            <
            Account / >
            <
            /Route> <
            Route exact path = "/account/orders/:page?" >
            <
            Orders / >
            <
            /Route> <
            Route exact path = "/account/balance/:page?" >
            <
            Balance / >
            <
            /Route> <
            Route exact path = "/account/delivery/:page?" >
            <
            Invoices / >
            <
            /Route> <
            Route exact path = "/account/settings" >
            <
            Settings / >
            <
            /Route> <
            Route exact path = "/account/master-invoice/:id" >
            <
            MasterInvoice / >
            <
            /Route> <
            Route exact path = "/account/support" >
            <
            Support / >
            <
            /Route> <
            Route exact path = "/account/ticket/:id" >
            <
            Ticket / >
            <
            /Route> <
            Route exact path = "/account/agentship" >
            <
            Agentship / >
            <
            /Route> <
            Route path = "/account/order/:id"
            render = {
                (props) => < Order { ...props
                }
                />} /
                >
                <
                Route exact path = "/cart" >
                <
                Cart / >
                <
                /Route> <
                Route exact path = "/checkout/:key?" >
                <
                Checkout / >
                <
                /Route>

                <
                Route exact path = "/about-us" >
                <
                About / >
                <
                /Route> <
                Route exact path = "/offers" >
                <
                Offers / >
                <
                /Route> <
                Route exact path = "/offer/:slug" >
                <
                Offer / >
                <
                /Route> <
                Route exact path = "/reviews" >
                <
                Reviews / >
                <
                /Route> <
                Route exact path = "/watch-seminars" >
                <
                WatchSeminars / >
                <
                /Route> <
                Route exact path = "/wishlist/:page?" >
                <
                WishList / >
                <
                /Route> <
                Route exact path = "/contact-us" >
                <
                Contact / >
                <
                /Route> <
                Route exact path = "/why-believe-us" >
                <
                WhyBelieveUs / >
                <
                /Route> <
                Route exact path = "/terms-conditions" >
                <
                Terms / >
                <
                /Route> <
                Route exact path = "/returns-refunds" >
                <
                RefundPolicy / >
                <
                /Route> <
                Route exact path = "/certificates" >
                <
                Certificates / >
                <
                /Route> <
                Route exact path = "/pay/:key?" >
                <
                Pay / >
                <
                /Route> <
                Route exact path = "/privacy-policy" >
                <
                Privacy / >
                <
                /Route> <
                Route exact path = "/seller/:page?" >
                <
                Seller / >
                <
                /Route> <
                Route exact path = "/how-to-order" >
                <
                Videos / >
                <
                /Route> {
                    /* <Route exact path="/alibaba">
                                            <Alibaba />
                                          </Route> */
                } {
                    /* <Route exact path="/aliexpress">
                                            <AliExpress />
                                          </Route> */
                } <
                Route exact path = "/account/invoice/:id" >
                <
                Invoice / >
                <
                /Route> <
                Route
                path = "/shop/:sourcename/:keyword/:pageno?"
                render = {
                    (props) => < ShoppingPage { ...props
                    }
                    />} /
                    >
                    <
                    Route exact path = "/product/:pid/:id" >
                    <
                    Product / >
                    <
                    /Route> <
                    Route component = {
                        ErrorPage
                    }
                    /> <
                    /Switch> <
                    /div> <
                    Footer / >
                    <
                    /Suspense> <
                    /div> <
                    /ErrorBoundary> <
                    /div> <
                    /Router> <
                    /Provider> <
                    /HelmetProvider>
                );
            }

            export default App;