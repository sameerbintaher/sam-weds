(this["webpackJsonpsam-motors"] = this["webpackJsonpsam-motors"] || []).push([
  [1],
  {
    111: function (e, t, n) {},
    121: function (e, t, n) {},
    28: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return L;
      });
      var c = n(15),
        a = n(32),
        s = n.n(a),
        r = n(0),
        i = n(25),
        o = n(17),
        l = n(8),
        d = (n(111), n(129)),
        u = n(130),
        j = n(124),
        b = n(122),
        m = n(70),
        h = n(79),
        x = n(2),
        O = function () {
          var e = Object(r.useContext)(L),
            t = e.setSelectedService,
            n = e.isAdmin,
            a = Object(r.useState)(!0),
            l = Object(c.a)(a, 2),
            O = l[0],
            p = l[1],
            f = Object(r.useState)([]),
            g = Object(c.a)(f, 2),
            v = g[0],
            y = g[1];
          return (
            Object(r.useEffect)(function () {
              s.a
                .get("http://localhost:5000/services")
                .then(function (e) {
                  y(e.data), p(!1);
                })
                .catch(function (e) {
                  return i.b.error(e.message);
                });
            }, []),
            Object(x.jsxs)(x.Fragment, {
              children: [
                Object(x.jsxs)("section", {
                  id: "services",
                  className: "text-center py-5",
                  style: { backgroundColor: "#000" },
                  children: [
                    Object(x.jsx)(m.a, {}),
                    Object(x.jsx)("h1", {
                      className: "text-white mt-5",
                      children: "Explore our all services",
                    }),
                    Object(x.jsx)(d.a, {
                      className: "justify-content-center mx-auto mt-md-5 pt-5",
                      children: O
                        ? Object(x.jsx)(u.a, {
                            animation: "border",
                            variant: "danger",
                          })
                        : v.map(function (e) {
                            return Object(x.jsxs)(
                              j.a,
                              {
                                md: 3,
                                className: "border rounded-3 m-2 bg-white p-3",
                                children: [
                                  Object(x.jsx)("img", {
                                    className: "img-fluid",
                                    src: e.image,
                                  }),
                                  Object(x.jsx)("h2", { children: e.title }),
                                  Object(x.jsx)("p", {
                                    children: e.description,
                                  }),
                                  Object(x.jsxs)("div", {
                                    className:
                                      "d-flex flex-direction-column justify-content-between align-items-center text-center",
                                    children: [
                                      Object(x.jsxs)("h3", {
                                        className: "text-success",
                                        children: ["$", e.price],
                                      }),
                                      Object(x.jsx)(b.a, {
                                        className: "btn-primary",
                                        as: o.b,
                                        to: n
                                          ? "/dashboard/orderList"
                                          : "/dashboard/book",
                                        onClick: function () {
                                          return t(e);
                                        },
                                        children: "Buy Now",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e._id
                            );
                          }),
                    }),
                  ],
                }),
                Object(x.jsx)(h.a, {}),
              ],
            })
          );
        },
        p = n(83),
        f = n.p + "static/media/loadingSpinner.8997e53c.svg",
        g = function () {
          return Object(x.jsx)("section", {
            className:
              "vh-100 vw-100 d-flex justify-content-center align-items-center",
            children: Object(x.jsx)(p.a, { src: f }),
          });
        },
        v = n(31),
        y = n(44),
        N = n(60),
        k = ["children"],
        w = function (e) {
          var t = e.children,
            n = Object(N.a)(e, k),
            c = Object(r.useContext)(L).loggedInUser.isSignedIn;
          return Object(x.jsx)(
            l.b,
            Object(y.a)(
              Object(y.a)({}, n),
              {},
              {
                render: function (e) {
                  var n = e.location;
                  return c
                    ? t
                    : Object(x.jsx)(l.a, {
                        to: { pathname: "/login", state: { from: n } },
                      });
                },
              }
            )
          );
        },
        S = Object(r.lazy)(function () {
          return Promise.all([n.e(0), n.e(5), n.e(8)]).then(n.bind(null, 206));
        }),
        I = Object(r.lazy)(function () {
          return Promise.all([n.e(0), n.e(4), n.e(6)]).then(n.bind(null, 202));
        }),
        C = Object(r.lazy)(function () {
          return Promise.all([n.e(0), n.e(7), n.e(9)]).then(n.bind(null, 208));
        }),
        L = Object(r.createContext)();
      t.b = function () {
        var e = Object(r.useState)(Object(v.b)()),
          t = Object(c.a)(e, 2),
          n = t[0],
          a = t[1],
          d = Object(r.useState)([]),
          u = Object(c.a)(d, 2),
          j = u[0],
          b = u[1],
          m = Object(r.useState)(!0),
          h = Object(c.a)(m, 2),
          p = h[0],
          f = h[1],
          y = Object(r.useState)(!1),
          N = Object(c.a)(y, 2),
          k = N[0],
          U = N[1];
        return (
          Object(r.useEffect)(
            function () {
              s.a
                .get(
                  "http://localhost:5000/isAdmin?email=".concat(
                    null === n || void 0 === n ? void 0 : n.email
                  )
                )
                .then(function (e) {
                  U(e.data), f(!1);
                })
                .catch(function (e) {
                  return i.b.error(e.message);
                });
            },
            [null === n || void 0 === n ? void 0 : n.email]
          ),
          Object(x.jsx)(L.Provider, {
            value: {
              loggedInUser: n,
              setLoggedInUser: a,
              isAdmin: k,
              selectedService: j,
              setSelectedService: b,
            },
            children: Object(x.jsxs)(o.a, {
              children: [
                Object(x.jsx)(i.a, {}),
                Object(x.jsx)(r.Suspense, {
                  fallback: Object(x.jsx)(g, {}),
                  children: Object(x.jsxs)(l.d, {
                    children: [
                      Object(x.jsx)(l.b, {
                        exact: !0,
                        path: "/",
                        children: Object(x.jsx)(S, {}),
                      }),
                      Object(x.jsx)(l.b, {
                        path: "/explore",
                        children: Object(x.jsx)(O, {}),
                      }),
                      Object(x.jsx)(w, {
                        path: "/dashboard/:panel",
                        children: Object(x.jsx)(I, { adminLoading: p }),
                      }),
                      Object(x.jsx)(l.b, {
                        path: "/login",
                        children: Object(x.jsx)(C, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    31: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "f", function () {
          return j;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return m;
        });
      var c = n(19),
        a = (n(112), n(81)),
        s = {
          apiKey: "AIzaSyBWy4IhuYbHCy8eVf4D8DQGszlYUbu7yHo",
          authDomain: "sam-motors.firebaseapp.com",
          projectId: "sam-motors",
          storageBucket: "sam-motors.appspot.com",
          messagingSenderId: "123136569344",
          appId: "1:123136569344:web:cb2fde0ac259b78082a8e5",
        },
        r = function () {
          !c.a.apps.length && c.a.initializeApp(s);
        },
        i = function () {
          var e = new c.a.auth.GoogleAuthProvider();
          return c.a
            .auth()
            .signInWithPopup(e)
            .then(function (e) {
              return u(e);
            });
        },
        o = function (e, t, n) {
          return c.a
            .auth()
            .createUserWithEmailAndPassword(t, n)
            .then(function (t) {
              return l(e), u(t);
            });
        },
        l = function (e) {
          c.a.auth().currentUser.updateProfile({ displayName: e });
        },
        d = function (e, t) {
          return c.a
            .auth()
            .signInWithEmailAndPassword(e, t)
            .then(function (e) {
              return u(e);
            });
        },
        u = function (e) {
          var t = e.user,
            n = t.displayName,
            c = t.photoURL;
          return {
            isSignedIn: !0,
            name: n,
            email: t.email,
            photo: c || "https://i.ibb.co/5GzXkwq/user.png",
          };
        },
        j = function () {
          return c.a
            .auth()
            .currentUser.getIdToken(!0)
            .then(function (e) {
              localStorage.setItem("token", e);
            });
        },
        b = function () {
          var e = localStorage.getItem("token");
          if (!e) return {};
          var t = Object(a.a)(e),
            n = t.name,
            c = t.picture;
          return {
            isSignedIn: !0,
            name: n,
            email: t.email,
            photo: c || "https://i.ibb.co/5GzXkwq/user.png",
          };
        },
        m = function () {
          return c.a
            .auth()
            .signOut()
            .then(function () {
              localStorage.removeItem("token");
              return { isSignedIn: !1, userName: "", email: "", userPhoto: "" };
            })
            .catch(function (e) {
              return console.log(e.message);
            });
        };
    },
    70: function (e, t, n) {
      "use strict";
      var c = n(15),
        a = n(0),
        s = n(42),
        r = n(24),
        i = n(17),
        o = n(28),
        l = n(71),
        d = n(72),
        u = n(2);
      t.a = function () {
        var e = Object(a.useContext)(o.a).loggedInUser.isSignedIn,
          t = Object(a.useState)(!1),
          n = Object(c.a)(t, 2),
          j = n[0],
          b = n[1],
          m = Object(a.useState)(null),
          h = Object(c.a)(m, 2),
          x = h[0],
          O = h[1];
        return (
          Object(a.useEffect)(function () {
            window.addEventListener("scroll", function () {
              window.scrollY > 50 ? b(!0) : b(!1);
            });
          }, []),
          Object(u.jsxs)(s.a, {
            collapseOnSelect: !0,
            expand: "lg",
            variant: "light",
            fixed: "top",
            className: j || x ? "shadow-sm bg-dark py-2" : "py-4",
            children: [
              Object(u.jsxs)(s.a.Brand, {
                as: i.b,
                to: "/",
                className: "ml-md-5 text-white",
                style: { fontSize: "30px" },
                children: [
                  Object(u.jsx)("img", {
                    alt: "Logo",
                    src: l.a,
                    width: "40",
                    height: "40",
                    className: "d-inline-block align-top",
                  }),
                  " ",
                  Object(u.jsx)("strong", { children: "Sam Motors" }),
                ],
              }),
              Object(u.jsx)(s.a.Toggle, {
                onClick: function () {
                  return O(x ? null : "show");
                },
                "aria-controls": "responsive-navbar-nav",
              }),
              Object(u.jsx)(s.a.Collapse, {
                id: "responsive-navbar-nav",
                className: x,
                children: Object(u.jsxs)(r.a, {
                  className: "ml-auto",
                  children: [
                    Object(u.jsx)(r.a.Link, {
                      as: i.b,
                      to: "/",
                      className: "mr-md-5 text-white",
                      onClick: function () {
                        return window.scrollTo(500, 0);
                      },
                      active: !0,
                      children: "Home",
                    }),
                    Object(u.jsx)(r.a.Link, {
                      as: i.b,
                      to: "/explore",
                      className: "mr-md-5 text-white",
                      active: !0,
                      children: "Explore",
                    }),
                    Object(u.jsx)(r.a.Link, {
                      href: "#reviews",
                      className: "mr-md-5 text-white",
                      active: !0,
                      children: "Reviews",
                    }),
                    Object(u.jsx)(r.a.Link, {
                      href: "#contact",
                      className: "mr-md-5 text-white",
                      active: !0,
                      children: "Contact Us",
                    }),
                    Object(u.jsx)(r.a.Link, {
                      as: i.b,
                      to: "/dashboard/profile",
                      className: "mr-md-5 text-white",
                      active: !0,
                      children: "Dashboard",
                    }),
                    e
                      ? Object(u.jsx)("div", {
                          style: { marginRight: "5.5rem" },
                          children: Object(u.jsx)(d.a, {}),
                        })
                      : Object(u.jsx)(r.a.Link, {
                          as: i.b,
                          to: "/login",
                          className: "mr-md-5 px-4 btn btn-primary text-white",
                          active: !0,
                          children: "Login",
                        }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    71: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/logo.ce991acb.png";
    },
    72: function (e, t, n) {
      "use strict";
      var c = n(0),
        a = n(123),
        s = n(84),
        r = n(83),
        i = n(122),
        o = n(24),
        l = n(25),
        d = n(28),
        u = n(31),
        j = n(2);
      t.a = function () {
        var e = Object(c.useContext)(d.a),
          t = e.loggedInUser,
          n = t.name,
          b = t.email,
          m = t.photo,
          h = e.setLoggedInUser;
        return Object(j.jsx)(
          a.a,
          {
            trigger: "click",
            rootClose: !0,
            placement: "bottom",
            overlay: Object(j.jsxs)(s.a, {
              id: "popover-positioned-bottom",
              children: [
                Object(j.jsx)("div", {
                  className: "d-flex justify-content-center mt-1",
                  children: Object(j.jsx)(r.a, {
                    style: { maxWidth: "60px" },
                    src: m,
                    roundedCircle: !0,
                  }),
                }),
                Object(j.jsxs)(s.a.Content, {
                  children: [
                    Object(j.jsx)("strong", {
                      className: "text-center d-block",
                      children: n,
                    }),
                    Object(j.jsx)("strong", {
                      className: "text-center d-block",
                      children: b,
                    }),
                    Object(j.jsx)("div", {
                      className: "d-flex justify-content-center mt-1",
                      children: Object(j.jsx)(i.a, {
                        onClick: function () {
                          Object(u.e)(),
                            Object(u.d)().then(function (e) {
                              h(e), l.b.error("Logged Out!");
                            });
                        },
                        variant: "outline-danger",
                        className: "py-0 px-1 btn ",
                        size: "sm",
                        children: "Logout",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            children: Object(j.jsx)(o.a.Link, {
              className: "p-0",
              children: Object(j.jsx)(r.a, {
                src: m,
                width: "40",
                height: "40",
                roundedCircle: !0,
                className: "d-inline-block align-top",
                alt: "Profile",
              }),
            }),
          },
          "bottom"
        );
      };
    },
    79: function (e, t, n) {
      "use strict";
      n(0);
      var c = n(2);
      t.a = function () {
        return Object(c.jsxs)("div", {
          className: "",
          children: [
            Object(c.jsxs)("div", {
              className: "text-primary text-center p-5",
              style: { backgroundColor: "#000" },
              children: [
                Object(c.jsx)("h2", { children: "Stay Updated" }),
                Object(c.jsx)("input", {
                  className: "w-50 me-1",
                  type: "",
                  placeholder: "Enter you Email",
                }),
                Object(c.jsx)("button", {
                  className: "btn btn-primary",
                  children: "Subscribe",
                }),
              ],
            }),
            Object(c.jsx)("p", {
              className: "text-center text-white  mb-0 p-3",
              style: { backgroundColor: "#000" },
              children:
                "Sam Motors \xa9 2021. All Rights Reserved. Terms of Use and Privacy Policy",
            }),
          ],
        });
      };
    },
    87: function (e, t, n) {
      "use strict";
      n.r(t);
      n(88);
      var c = n(0),
        a = n.n(c),
        s = n(16),
        r = n.n(s),
        i = n(28),
        o = (n(121), n(2));
      r.a.render(
        Object(o.jsx)(a.a.StrictMode, { children: Object(o.jsx)(i.b, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[87, 2, 3]],
]);
//# sourceMappingURL=main.e24b2220.chunk.js.map
