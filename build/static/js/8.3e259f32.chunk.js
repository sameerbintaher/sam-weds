(this["webpackJsonpsam-motors"] = this["webpackJsonpsam-motors"] || []).push([
  [8],
  {
    146: function (e, t, s) {},
    162: function (e, t, s) {},
    164: function (e, t, s) {},
    165: function (e, t, s) {},
    206: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(0),
        a = s(44),
        n = s(155),
        r = s.n(n),
        i = s(163),
        j = s(129),
        l = s(124),
        d = s(136),
        b = s(25),
        o = s(139),
        x = s.n(o),
        h = s(134),
        m = s.n(h),
        u = (s(162), s(2)),
        O = function () {
          var e = Object(d.a)(),
            t = e.register,
            s = e.handleSubmit,
            c = e.reset;
          return Object(u.jsx)("section", {
            id: "contact",
            className: "contact-section",
            children: Object(u.jsx)(x.a, {
              bottom: !0,
              duration: 2500,
              distance: "40px",
              children: Object(u.jsxs)(i.a, {
                children: [
                  Object(u.jsxs)("div", {
                    className: "text-center",
                    children: [
                      Object(u.jsx)("h1", { children: "Contact" }),
                      Object(u.jsx)("h4", {
                        children: "Don't be a stranger. Just say Hello",
                      }),
                    ],
                  }),
                  Object(u.jsx)("form", {
                    onSubmit: s(function (e) {
                      var t = b.b.loading("Please wait...!");
                      r.a
                        .send(
                          "gmail",
                          "sam-motors_template",
                          e,
                          "user_UhuudhC7XpS5QUo7xDWsT"
                        )
                        .then(
                          function (e) {
                            if ((b.b.dismiss(t), "OK" === e.text))
                              return (
                                c(),
                                m()(
                                  "Thank you!",
                                  "Your message was sent successfully.",
                                  "success"
                                )
                              );
                            m()(
                              "Sorry!",
                              "Something went wrong. Please try again later",
                              "error"
                            );
                          },
                          function (e) {
                            b.b.dismiss(t),
                              m()(
                                "Sorry!",
                                "Something went wrong. Please try again later",
                                "error"
                              );
                          }
                        );
                    }),
                    children: Object(u.jsxs)(j.a, {
                      className: "input-container",
                      style: { backgroundColor: "#000" },
                      children: [
                        Object(u.jsx)(l.a, {
                          xs: 12,
                          children: Object(u.jsxs)("div", {
                            className: "styled-input wide text-primary",
                            children: [
                              Object(u.jsx)(
                                "input",
                                Object(a.a)(
                                  Object(a.a)(
                                    { type: "text" },
                                    t("name", { required: !0 })
                                  ),
                                  {},
                                  { required: !0 }
                                )
                              ),
                              Object(u.jsx)("label", { children: "Name" }),
                            ],
                          }),
                        }),
                        Object(u.jsx)(l.a, {
                          md: 6,
                          sm: 12,
                          children: Object(u.jsxs)("div", {
                            className: "styled-input",
                            children: [
                              Object(u.jsx)(
                                "input",
                                Object(a.a)(
                                  Object(a.a)(
                                    { type: "text" },
                                    t("email", { required: !0 })
                                  ),
                                  {},
                                  { required: !0 }
                                )
                              ),
                              Object(u.jsx)("label", { children: "Email" }),
                            ],
                          }),
                        }),
                        Object(u.jsx)(l.a, {
                          md: 6,
                          sm: 12,
                          children: Object(u.jsxs)("div", {
                            className: "styled-input",
                            style: { float: "right" },
                            children: [
                              Object(u.jsx)(
                                "input",
                                Object(a.a)(
                                  Object(a.a)(
                                    { type: "text" },
                                    t("phone", { required: !0 })
                                  ),
                                  {},
                                  { required: !0 }
                                )
                              ),
                              Object(u.jsx)("label", {
                                children: "Phone Number",
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)(l.a, {
                          xs: 12,
                          children: Object(u.jsxs)("div", {
                            className: "styled-input wide",
                            children: [
                              Object(u.jsx)(
                                "textarea",
                                Object(a.a)(
                                  Object(a.a)(
                                    {},
                                    t("message", { required: !0 })
                                  ),
                                  {},
                                  { required: !0 }
                                )
                              ),
                              Object(u.jsx)("label", { children: "Message" }),
                            ],
                          }),
                        }),
                        Object(u.jsx)(l.a, {
                          xs: 12,
                          children: Object(u.jsx)("button", {
                            className: "btn-lrg submit-btn btn-primary",
                            children: "Send Message",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        p = s(79),
        f = s(122),
        y = s(83),
        g = function () {
          return Object(u.jsx)(i.a, {
            fluid: !0,
            className: "bg",
            children: Object(u.jsxs)(j.a, {
              className: "align-items-center justify-content-center banner",
              children: [
                Object(u.jsx)(l.a, {
                  md: 4,
                  className: "p-md-5 order-2 order-md-1",
                  children: Object(u.jsxs)(x.a, {
                    left: !0,
                    duration: 2e3,
                    distance: "40px",
                    children: [
                      Object(u.jsxs)("h1", {
                        className: "text-white mb-4",
                        children: [
                          "Own your dream bike ",
                          Object(u.jsx)("br", {}),
                          " The best rides happen on two wheels",
                        ],
                      }),
                      Object(u.jsx)(f.a, {
                        className: "btn-primary",
                        href: "#services",
                        children: "Get Started",
                      }),
                    ],
                  }),
                }),
                Object(u.jsx)(l.a, {
                  md: 6,
                  className: "order-1 order-md-2",
                  children: Object(u.jsx)(x.a, {
                    right: !0,
                    duration: 2e3,
                    distance: "40px",
                    children: Object(u.jsx)(y.a, {
                      src: "https://robbreport.com/wp-content/uploads/2020/01/eve-2020-digitial-2.jpg?w=1000",
                      fluid: !0,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        N = s(70),
        w =
          (s(164),
          function () {
            return Object(u.jsxs)("section", {
              className: "header-container",
              children: [Object(u.jsx)(N.a, {}), Object(u.jsx)(g, {})],
            });
          }),
        v = s(15),
        S = s(32),
        k = s.n(S),
        B = s(130),
        q = s(194),
        P = s(17),
        C = s(28),
        T = function (e) {
          var t = e.service,
            s = Object(c.useContext)(C.a),
            a = s.setSelectedService,
            n = s.isAdmin,
            r = t.title,
            i = t.image,
            j = t.description,
            d = t.price;
          return Object(u.jsx)(l.a, {
            md: 4,
            className: "mb-5 text-center",
            children: Object(u.jsx)(x.a, {
              bottom: !0,
              duration: 2500,
              distance: "40px",
              children: Object(u.jsxs)(q.a, {
                className: "border-0 py-4",
                style: { maxWidth: "30rem", height: "31rem" },
                children: [
                  Object(u.jsx)(q.a.Img, {
                    variant: "top",
                    height: "250",
                    src: i,
                    style: { objectFit: "contain" },
                  }),
                  Object(u.jsxs)(q.a.Body, {
                    className: "pt-0",
                    children: [
                      Object(u.jsx)(q.a.Title, {
                        as: "h2",
                        className: "my-4",
                        children: r,
                      }),
                      Object(u.jsx)(q.a.Text, {
                        className: "text-muted",
                        children: j,
                      }),
                      Object(u.jsxs)("div", {
                        className:
                          " d-flex align-items-center justify-content-between",
                        children: [
                          Object(u.jsxs)("h2", {
                            className: "text-success",
                            children: ["$", d],
                          }),
                          Object(u.jsx)(f.a, {
                            className: "btn-primary",
                            as: P.b,
                            to: n ? "/dashboard/orderList" : "/dashboard/book",
                            onClick: function () {
                              return a(t);
                            },
                            children: "Buy Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        E =
          (s(165),
          function () {
            var e = Object(c.useState)(!0),
              t = Object(v.a)(e, 2),
              s = t[0],
              a = t[1],
              n = Object(c.useState)([]),
              r = Object(v.a)(n, 2),
              i = r[0],
              l = r[1];
            return (
              Object(c.useEffect)(function () {
                k.a
                  .get("http://localhost:5000/services")
                  .then(function (e) {
                    l(e.data), a(!1);
                  })
                  .catch(function (e) {
                    return b.b.error(e.message);
                  });
              }, []),
              Object(u.jsxs)("section", {
                id: "services",
                className: "text-center py-5",
                style: { backgroundColor: "#000" },
                children: [
                  Object(u.jsx)("h5", {
                    className: "text-white",
                    children: "Services",
                  }),
                  Object(u.jsx)("h1", {
                    className: "text-white",
                    children: "Our Best Selling Bike",
                  }),
                  Object(u.jsx)(j.a, {
                    className: "justify-content-center mx-auto mt-md-5 pt-5",
                    children: s
                      ? Object(u.jsx)(B.a, {
                          animation: "border",
                          variant: "danger",
                        })
                      : i.slice(0, 6).map(function (e) {
                          return Object(u.jsx)(T, { service: e }, e._id);
                        }),
                  }),
                ],
              })
            );
          }),
        V = s(198),
        _ = s(201),
        I = s(196),
        J = s(197),
        U = (s(166), s(205)),
        D = s(199),
        M =
          (s(167),
          function (e) {
            var t = e.testimonial,
              s = t.name,
              c = t.address,
              a = t.img,
              n = t.description;
            return Object(u.jsxs)(q.a, {
              className: "my-4",
              children: [
                Object(u.jsx)(q.a.Img, { variant: "top", src: a, width: "60" }),
                Object(u.jsxs)(q.a.Body, {
                  className: "text-center",
                  children: [
                    Object(u.jsxs)("h5", {
                      children: [
                        s,
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("span", { children: c }),
                      ],
                    }),
                    Object(u.jsx)(q.a.Text, { children: n.slice(0, 165) }),
                  ],
                }),
              ],
            });
          }),
        W =
          (s(146),
          function () {
            _.a.use([I.a, J.a]);
            var e = Object(c.useState)(!0),
              t = Object(v.a)(e, 2),
              s = t[0],
              a = t[1],
              n = Object(c.useState)([]),
              r = Object(v.a)(n, 2),
              i = r[0],
              j = r[1];
            return (
              Object(c.useEffect)(function () {
                k.a
                  .get("http://localhost:5000/reviews")
                  .then(function (e) {
                    j(e.data), a(!1);
                  })
                  .catch(function (e) {
                    return b.b.error(e.message);
                  });
              }, []),
              Object(u.jsx)("section", {
                id: "reviews",
                className: "testimonials p-md-3",
                children: Object(u.jsx)(x.a, {
                  bottom: !0,
                  duration: 2500,
                  distance: "40px",
                  children: Object(u.jsxs)("div", {
                    className: "my-5 py-4",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "text-white text-center",
                        children: [
                          Object(u.jsx)("h1", { children: "User Reviews" }),
                          Object(u.jsx)("p", {
                            children: "Explore what our says",
                          }),
                        ],
                      }),
                      s
                        ? Object(u.jsx)("div", {
                            className: "text-center",
                            children: Object(u.jsx)(B.a, {
                              animation: "border",
                              variant: "danger",
                            }),
                          })
                        : Object(u.jsx)(V.a, {
                            className: "mt-5",
                            children: Object(u.jsx)(U.a, {
                              loop: !0,
                              pagination: { clickable: !0 },
                              slidesPerView: 1,
                              breakpoints: {
                                640: { slidesPerView: 1, spaceBetween: 2 },
                                768: { slidesPerView: 2, spaceBetween: 10 },
                                1024: { slidesPerView: 3, spaceBetween: 10 },
                              },
                              autoplay: {
                                delay: 2500,
                                disableOnInteraction: !1,
                              },
                              spaceBetween: 10,
                              children: i.map(function (e) {
                                return Object(u.jsx)(
                                  D.a,
                                  {
                                    children: Object(u.jsx)(M, {
                                      testimonial: e,
                                    }),
                                  },
                                  e._id
                                );
                              }),
                            }),
                          }),
                    ],
                  }),
                }),
              })
            );
          });
      t.default = function () {
        return Object(u.jsxs)("main", {
          children: [
            Object(u.jsx)(w, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsx)(W, {}),
            Object(u.jsx)(O, {}),
            Object(u.jsx)(p.a, {}),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8.3e259f32.chunk.js.map
