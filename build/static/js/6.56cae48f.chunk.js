(this["webpackJsonpsam-motors"] = this["webpackJsonpsam-motors"] || []).push([
  [6],
  {
    146: function (e, t, c) {},
    169: function (e, t, c) {},
    181: function (e, t, c) {},
    182: function (e, t, c) {},
    183: function (e, t, c) {},
    202: function (e, t, c) {
      "use strict";
      c.r(t);
      var r = c(15),
        s = c(32),
        a = c.n(s),
        i = c(0),
        n = c(25),
        d = c(8),
        l = c(28),
        o = c(44),
        j = c(138),
        b = c.n(j),
        h = c(143),
        x = c(141),
        u = c(140),
        m = c(204),
        O = c(124),
        p = c(122),
        g = c(136),
        y = c(134),
        f = c.n(y),
        v = (c(169), c(2)),
        w = function (e) {
          var t = e.editService,
            c = e.setEditService,
            r = Object(g.a)(),
            s = r.register,
            i = r.handleSubmit,
            d = (function () {
              var e = Object(h.a)(
                b.a.mark(function e(r) {
                  var s, i, d, l, o;
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t || r.image[0]) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              n.b.error("Please upload an image!")
                            );
                          case 2:
                            if (
                              ((s = n.b.loading("Uploading...Please wait!")),
                              (i = t ? t.image : ""),
                              !(!t || (t && r.image[0])))
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (
                              (d = new FormData()).set(
                                "key",
                                "08d5da1c81cc5c52012f0b930505d031"
                              ),
                              d.append("image", r.image[0]),
                              (e.prev = 8),
                              (e.next = 11),
                              a.a.post("https://api.imgbb.com/1/upload", d)
                            );
                          case 11:
                            (l = e.sent),
                              (i = l.data.data.display_url),
                              (e.next = 19);
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(8)),
                              n.b.dismiss(s),
                              e.abrupt(
                                "return",
                                n.b.error("Failed to upload the image!")
                              )
                            );
                          case 19:
                            if (
                              ((o = {
                                title: r.title,
                                description: r.description,
                                price: r.price,
                                image: i,
                              }),
                              !t)
                            ) {
                              e.next = 27;
                              break;
                            }
                            if (
                              r.title !== t.title ||
                              r.price !== t.price ||
                              i !== t.image ||
                              r.description !== t.description
                            ) {
                              e.next = 25;
                              break;
                            }
                            return (
                              n.b.dismiss(s),
                              c({}),
                              e.abrupt(
                                "return",
                                n.b.error("You haven't changed anything!")
                              )
                            );
                          case 25:
                            return (
                              a.a
                                .patch(
                                  "https://fathomless-mesa-11589.herokuapp.com/update/".concat(
                                    t._id
                                  ),
                                  o
                                )
                                .then(function (e) {
                                  if ((n.b.dismiss(s), e.data))
                                    return (
                                      c(o),
                                      f()(
                                        "Successfully updated",
                                        "Your service has been successfully updated!",
                                        "success"
                                      )
                                    );
                                  c({}),
                                    f()(
                                      "Failed!",
                                      "Something went wrong! Please try again.",
                                      "error",
                                      { dangerMode: !0 }
                                    );
                                })
                                .catch(function (e) {
                                  n.b.dismiss(s),
                                    c({}),
                                    f()(
                                      "Failed!",
                                      "Something went wrong! Please try again.",
                                      "error",
                                      { dangerMode: !0 }
                                    );
                                }),
                              e.abrupt("return")
                            );
                          case 27:
                            a.a
                              .post(
                                "https://fathomless-mesa-11589.herokuapp.com/addService",
                                o
                              )
                              .then(function (e) {
                                if ((n.b.dismiss(s), e.data))
                                  return f()(
                                    "Successfully Uploaded",
                                    "Your new service has been successfully added.",
                                    "success"
                                  );
                                f()(
                                  "Failed!",
                                  "Something went wrong! Please try again.",
                                  "error",
                                  { dangerMode: !0 }
                                );
                              })
                              .catch(function (e) {
                                n.b.dismiss(s),
                                  f()(
                                    "Failed!",
                                    "Something went wrong! Please try again.",
                                    "error",
                                    { dangerMode: !0 }
                                  );
                              });
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[8, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(v.jsx)("section", {
            className: "add-service",
            children: Object(v.jsx)(m.a, {
              onSubmit: i(d),
              className: "w-100",
              children: Object(v.jsxs)("div", {
                className: "py-5 mx-auto mt-5 bg-white form-main",
                style: { borderRadius: "15px", maxWidth: "85rem" },
                children: [
                  Object(v.jsxs)(m.a.Row, {
                    className: "justify-content-center",
                    children: [
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 5,
                        sm: 12,
                        className: "mr-md-5",
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Service Title",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  type: "text",
                                  defaultValue: t ? t.title : "",
                                },
                                s("title", { required: !0 })
                              ),
                              {},
                              { placeholder: "Enter Title" }
                            )
                          ),
                        ],
                      }),
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 5,
                        sm: 12,
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Price",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  style: { maxWidth: "260px" },
                                  type: "text",
                                  defaultValue: t ? t.price : "",
                                },
                                s("price", { required: !0 })
                              ),
                              {},
                              { placeholder: "Enter Price" }
                            )
                          ),
                        ],
                      }),
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 5,
                        sm: 12,
                        className: "mr-md-5 mt-md-3",
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Description",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  style: { height: "10rem" },
                                  type: "text",
                                  defaultValue: t ? t.description : "",
                                  as: "textarea",
                                },
                                s("description", { required: !0 })
                              ),
                              {},
                              { placeholder: "Enter Description" }
                            )
                          ),
                        ],
                      }),
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 5,
                        sm: 12,
                        className: "mt-md-3",
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: t ? "Add New Image" : "Add Image",
                          }),
                          Object(v.jsxs)(p.a, {
                            as: "label",
                            htmlFor: "upload",
                            variant: "outline-primary",
                            className: "d-block p-2 upload-btn",
                            children: [
                              Object(v.jsx)(u.a, {
                                icon: x.b,
                                className: "mr-2",
                              }),
                              "Upload Image",
                            ],
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  hidden: "hidden",
                                  id: "upload",
                                  type: "file",
                                },
                                s("image")
                              ),
                              {},
                              { placeholder: "Upload photo" }
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  Object(v.jsx)("div", {
                    className: "text-center mt-4",
                    children: Object(v.jsx)(p.a, {
                      type: "submit",
                      className: "submit-btn btn-main",
                      children: t ? "Update" : "Submit",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        N = c(150),
        k = c(170),
        S = c(207),
        C = c(163),
        L = c(129),
        P = c(193),
        E = c.p + "static/media/info-emoji.91ce4204.svg",
        A = function (e) {
          var t = e.serviceInfo,
            c = Object(i.useContext)(l.a).loggedInUser,
            r = c.name,
            s = c.email,
            d = Object(N.useStripe)(),
            j = Object(N.useElements)(),
            x = Object(i.useMemo)(function () {
              return {
                style: {
                  base: {
                    fontSize: "1.2rem",
                    lineHeight: "2",
                    color: "#495057",
                    letterSpacing: "0.025em",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              };
            }, []),
            u = Object(g.a)(),
            y = u.register,
            w = u.handleSubmit,
            k = (function () {
              var e = Object(h.a)(
                b.a.mark(function e(c) {
                  var r, s, i, l, h;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (d && j) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (r = n.b.loading("Please wait...!")),
                            (e.next = 5),
                            d.createPaymentMethod({
                              type: "card",
                              card: j.getElement(N.CardNumberElement),
                            })
                          );
                        case 5:
                          if (
                            ((s = e.sent),
                            (i = s.error),
                            (l = s.paymentMethod),
                            !i)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            n.b.dismiss(r),
                            e.abrupt(
                              "return",
                              f()("Failed!", i.message, "error", {
                                dangerMode: !0,
                              })
                            )
                          );
                        case 11:
                          delete t._id,
                            (t.service = t.title),
                            (c.payWith = "Credit Card"),
                            (c.status = "Pending"),
                            (h = Object(o.a)(
                              Object(o.a)(Object(o.a)({}, c), t),
                              {},
                              {
                                paymentId: l.id,
                                orderTime: new Date().toLocaleString(),
                              }
                            )),
                            a.a
                              .post(
                                "https://fathomless-mesa-11589.herokuapp.com/addOrder",
                                h
                              )
                              .then(function (e) {
                                if ((n.b.dismiss(r), e.data))
                                  return f()(
                                    "Payment successful",
                                    "Your booking and payment has been successful.",
                                    "success"
                                  );
                                f()(
                                  "Failed!",
                                  "Something went wrong! Please try again.",
                                  "error",
                                  { dangerMode: !0 }
                                );
                              })
                              .catch(function (e) {
                                n.b.dismiss(r),
                                  f()(
                                    "Failed!",
                                    "Something went wrong! Please try again.",
                                    "error",
                                    { dangerMode: !0 }
                                  );
                              });
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(v.jsx)("section", {
            children: Object(v.jsxs)(m.a, {
              onSubmit: w(k),
              children: [
                Object(v.jsx)("div", {
                  className: "form-main",
                  style: { borderRadius: "15px", maxWidth: "85rem" },
                  children: Object(v.jsxs)(m.a.Row, {
                    children: [
                      Object(v.jsxs)(O.a, {
                        md: 6,
                        xs: 12,
                        className: "pr-md-4",
                        children: [
                          Object(v.jsxs)(m.a.Group, {
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "Your Name",
                              }),
                              Object(v.jsx)(
                                m.a.Control,
                                Object(o.a)(
                                  Object(o.a)(
                                    { type: "text", defaultValue: r },
                                    y("name", { required: !0 })
                                  ),
                                  {},
                                  { placeholder: "Your Name" }
                                )
                              ),
                            ],
                          }),
                          Object(v.jsxs)(m.a.Group, {
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "Email",
                              }),
                              Object(v.jsx)(
                                m.a.Control,
                                Object(o.a)(
                                  Object(o.a)(
                                    { type: "text", defaultValue: s },
                                    y("email", { required: !0 })
                                  ),
                                  {},
                                  { placeholder: "Email Address" }
                                )
                              ),
                            ],
                          }),
                          Object(v.jsxs)(m.a.Group, {
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "Address",
                              }),
                              Object(v.jsx)(
                                m.a.Control,
                                Object(o.a)(
                                  Object(o.a)(
                                    { type: "text" },
                                    y("address", { required: !0 })
                                  ),
                                  {},
                                  { placeholder: "Address" }
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      Object(v.jsxs)(O.a, {
                        md: 6,
                        xs: 12,
                        className: "pl-md-4",
                        children: [
                          Object(v.jsxs)("div", {
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "Card Number",
                              }),
                              Object(v.jsx)(N.CardNumberElement, {
                                className: "form-control",
                                options: x,
                              }),
                            ],
                          }),
                          Object(v.jsxs)("div", {
                            className: "mt-3",
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "Expiration Date",
                              }),
                              Object(v.jsx)(N.CardExpiryElement, {
                                className: "form-control",
                                options: x,
                              }),
                            ],
                          }),
                          Object(v.jsxs)("div", {
                            className: "mt-3",
                            children: [
                              Object(v.jsx)(m.a.Label, {
                                style: { fontWeight: "bold" },
                                children: "CVC",
                              }),
                              Object(v.jsx)(N.CardCvcElement, {
                                className: "form-control",
                                options: x,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)("div", {
                  className: "text-center mt-4",
                  children: Object(v.jsx)(p.a, {
                    type: "submit",
                    className: "btn-primary",
                    disabled: !d,
                    style: { padding: ".68rem 2rem" },
                    children: "Book",
                  }),
                }),
              ],
            }),
          });
        },
        W = function () {
          var e = Object(i.useContext)(l.a).selectedService,
            t = e.title,
            c = e.price,
            s = Object(i.useState)(!0),
            d = Object(r.a)(s, 2),
            j = d[0],
            b = d[1],
            h = Object(k.a)(
              "pk_test_51Ie33uCljQ1lWJFNhmzcstvqqVDr07o9lhLNTrHtGtIqZ2XVyaT1PdijIb0nX2Wyj6RNJ56ipbI7AKhGG6DPRYsv003m5nQO7F"
            ),
            x = Object(i.useState)([]),
            u = Object(r.a)(x, 2),
            m = u[0],
            p = u[1],
            g = m.map(function (e) {
              return { value: e.title, label: e.title, price: e.price };
            }),
            y = t
              ? { value: t, label: t, price: c }
              : g[0] || { value: " ", label: "Your Service", price: "" },
            f = Object(i.useState)(y),
            w = Object(r.a)(f, 2),
            W = w[0],
            F = w[1],
            M = m.find(function (e) {
              return e.title === W.value;
            });
          Object(i.useEffect)(function () {
            a.a
              .get("https://fathomless-mesa-11589.herokuapp.com/services")
              .then(function (e) {
                return p(e.data);
              })
              .catch(function (e) {
                return n.b.error(e.message);
              });
          }, []);
          var I = {
            control: function (e) {
              return Object(o.a)(
                Object(o.a)({}, e),
                {},
                {
                  backgroundColor: "white",
                  boxShadow: "none",
                  border: "2px solid #ced4da",
                  "&:hover": { border: "2px solid #fd7e15" },
                  height: "calc(2em + 0.75rem + 2px)",
                }
              );
            },
            option: function (e, t) {
              var c = t.isDisabled,
                r = t.isFocused,
                s = t.isSelected;
              return Object(o.a)(
                Object(o.a)({}, e),
                {},
                {
                  backgroundColor: c
                    ? null
                    : s
                    ? "#fd7709"
                    : r
                    ? "#fd770928"
                    : null,
                  color: c ? null : s ? "white" : "black",
                  cursor: c ? "not-allowed" : "default",
                  ":active": Object(o.a)(
                    Object(o.a)({}, e[":active"]),
                    {},
                    { backgroundColor: !c && (s ? "#fd7709" : "#fd770948") }
                  ),
                }
              );
            },
          };
          return Object(v.jsxs)(v.Fragment, {
            children: [
              Object(v.jsxs)(S.a, {
                className: "toast-right",
                onClose: function () {
                  return b(!1);
                },
                show: j,
                delay: 5e3,
                autohide: !0,
                children: [
                  Object(v.jsxs)(S.a.Header, {
                    children: [
                      Object(v.jsx)("img", {
                        src: E,
                        className: "rounded mr-2",
                        alt: "Info",
                      }),
                      Object(v.jsx)("strong", {
                        className: "mr-auto",
                        children: "Important Info",
                      }),
                    ],
                  }),
                  Object(v.jsxs)(S.a.Body, {
                    className: "text-center",
                    children: [
                      "Use this Card Number to test the payment",
                      Object(v.jsx)("br", {}),
                      Object(v.jsx)("b", { children: "4242 4242 4242 4242" }),
                    ],
                  }),
                ],
              }),
              Object(v.jsx)("section", {
                children: Object(v.jsx)(C.a, {
                  className: "p-5 mx-auto mt-5 bg-white",
                  style: { borderRadius: "15px" },
                  children: Object(v.jsxs)("div", {
                    className: "px-4",
                    children: [
                      Object(v.jsxs)(L.a, {
                        children: [
                          Object(v.jsxs)(O.a, {
                            md: 6,
                            xs: 12,
                            className: "pr-md-4",
                            children: [
                              Object(v.jsx)("label", {
                                style: { fontWeight: "bold" },
                                children: "Service",
                              }),
                              Object(v.jsx)(P.a, {
                                onChange: function (e) {
                                  return F(e);
                                },
                                defaultValue: y,
                                options: g,
                                styles: I,
                              }),
                            ],
                          }),
                          Object(v.jsxs)(O.a, {
                            md: 6,
                            xs: 12,
                            className: "pl-md-4 form-main",
                            children: [
                              Object(v.jsx)("label", {
                                style: { fontWeight: "bold" },
                                children: "Price",
                              }),
                              Object(v.jsxs)("div", {
                                className: "form-control w-50 pl-3",
                                style: { lineHeight: "2", fontWeight: "500" },
                                children: ["$", c || W.price],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(v.jsx)("div", {
                        className: "mt-5",
                        children: Object(v.jsx)(N.Elements, {
                          stripe: h,
                          children: Object(v.jsx)(A, { serviceInfo: M }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        F = c(194),
        M = c(60),
        I = c(137),
        R = ["row", "column", "width", "padding", "borderRadius"],
        D = function (e) {
          for (
            var t,
              c = e.row,
              r = void 0 === c ? 3 : c,
              s = e.column,
              a = void 0 === s ? 3 : s,
              i = e.width,
              n = void 0 === i ? 1466 : i,
              d = e.padding,
              l = void 0 === d ? 25 : d,
              j = e.borderRadius,
              b = void 0 === j ? 15 : j,
              h = Object(M.a)(e, R),
              x = [],
              u = 1;
            u <= r;
            u++
          )
            for (
              var m = (1300 - l * (a + 1)) / a,
                O = (12 * m) / 16,
                p = l + (O + 36) * (u - 1),
                g = 0;
              g < a;
              g++
            ) {
              var y = l + g * (m + 110),
                f = p + 0.5,
                w = f + 1 + O + l / 2 + 20;
              x.push(
                Object(v.jsx)(v.Fragment, {
                  children: Object(v.jsx)("rect", {
                    x: y,
                    y: f,
                    rx: b,
                    ry: b,
                    width: m,
                    height: O,
                  }),
                })
              ),
                u === r && (t = w + 20);
            }
          return Object(v.jsx)(
            I.a,
            Object(o.a)(
              Object(o.a)(
                {
                  viewBox: "0 0 ".concat(n, " ").concat(t),
                  width: n,
                  height: t,
                },
                h
              ),
              {},
              { children: x }
            )
          );
        },
        U =
          (c(181),
          function () {
            var e = Object(i.useContext)(l.a).loggedInUser.email,
              t = Object(i.useState)([]),
              c = Object(r.a)(t, 2),
              s = c[0],
              d = c[1],
              o = Object(i.useState)(!0),
              j = Object(r.a)(o, 2),
              b = j[0],
              h = j[1];
            return (
              Object(i.useEffect)(
                function () {
                  a.a
                    .get(
                      "https://fathomless-mesa-11589.herokuapp.com/orders?email=".concat(
                        e
                      )
                    )
                    .then(function (e) {
                      d(e.data), h(!1);
                    })
                    .catch(function (e) {
                      return n.b.error(e.message);
                    });
                },
                [e]
              ),
              Object(v.jsx)(v.Fragment, {
                children: b
                  ? Object(v.jsx)("div", {
                      className: "px-md-4 pt-md-1 bg-white",
                      style: { borderRadius: "15px" },
                      children: Object(v.jsx)(D, {}),
                    })
                  : Object(v.jsx)(L.a, {
                      className: "mx-md-5",
                      children: s.map(function (e) {
                        return Object(v.jsx)(
                          O.a,
                          {
                            md: 4,
                            children: Object(v.jsxs)(F.a, {
                              className: "border-0 py-4 mb-4 booking-list",
                              children: [
                                Object(v.jsxs)("div", {
                                  className:
                                    "d-flex justify-content-between px-4",
                                  children: [
                                    Object(v.jsx)("img", {
                                      height: "100",
                                      width: "100",
                                      src: e.image,
                                      alt: "",
                                    }),
                                    Object(v.jsx)("h5", {
                                      className: e.status.toLowerCase(),
                                      children: e.status,
                                    }),
                                  ],
                                }),
                                Object(v.jsxs)(F.a.Body, {
                                  className: "py-0",
                                  children: [
                                    Object(v.jsx)(F.a.Title, {
                                      as: "h4",
                                      className: "my-4",
                                      children: e.service,
                                    }),
                                    Object(v.jsx)(F.a.Text, {
                                      className: "text-muted",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e._id
                        );
                      }),
                    }),
              })
            );
          }),
        Y =
          (c(182),
          function (e) {
            return Object(v.jsxs)(
              I.a,
              Object(o.a)(
                Object(o.a)(
                  {
                    width: "100%",
                    height: 600,
                    viewBox: "0 0 850 600",
                    backgroundColor: "#f0f0f0",
                    foregroundColor: "#dedede",
                  },
                  e
                ),
                {},
                {
                  children: [
                    Object(v.jsx)("rect", {
                      x: "43",
                      y: "304",
                      rx: "4",
                      ry: "4",
                      width: "271",
                      height: "9",
                    }),
                    Object(v.jsx)("rect", {
                      x: "44",
                      y: "323",
                      rx: "3",
                      ry: "3",
                      width: "119",
                      height: "6",
                    }),
                    Object(v.jsx)("rect", {
                      x: "42",
                      y: "7",
                      rx: "10",
                      ry: "10",
                      width: "1050",
                      height: "600",
                    }),
                  ],
                }
              )
            );
          }),
        G = c(42),
        B = c(72),
        _ = function (e) {
          var t = e.setShowSidebar,
            c = e.show,
            r = Object(d.i)().panel;
          return Object(v.jsx)(G.a, {
            expand: "lg",
            variant: "light",
            style: { backgroundColor: "#fff" },
            children: Object(v.jsxs)(C.a, {
              fluid: !0,
              children: [
                Object(v.jsxs)("button", {
                  onClick: function () {
                    return t(!c);
                  },
                  type: "button",
                  id: "sidebarCollapse",
                  className: c ? "navbar-btn active" : "navbar-btn",
                  children: [
                    Object(v.jsx)("span", {}),
                    Object(v.jsx)("span", {}),
                    Object(v.jsx)("span", {}),
                  ],
                }),
                Object(v.jsx)(G.a.Brand, {
                  children: Object(v.jsx)("h2", {
                    className: "d-inline-block ml-md-3 mb-0",
                    style: { fontSize: "1.4rem", fontWeight: "600" },
                    children:
                      "profile" === r
                        ? "Profile"
                        : "orderList" === r
                        ? "Order List"
                        : "addService" === r
                        ? "Add Service"
                        : "makeAdmin" === r
                        ? "Make Admin"
                        : "manageServices" === r
                        ? "Manage Services"
                        : "book" === r
                        ? "Book"
                        : "bookingList" === r
                        ? "Booking List"
                        : "review" === r
                        ? "Review"
                        : "",
                  }),
                }),
                Object(v.jsx)(G.a.Collapse, {
                  id: "responsive-navbar-nav",
                  children: Object(v.jsx)("div", {
                    className: "ml-auto",
                    children: Object(v.jsx)(B.a, {}),
                  }),
                }),
              ],
            }),
          });
        },
        q =
          (c(183),
          function () {
            var e = Object(i.useContext)(l.a).loggedInUser.email,
              t = Object(g.a)(),
              c = t.register,
              r = t.handleSubmit;
            return Object(v.jsx)("section", {
              className: "make-admin",
              children: Object(v.jsx)(m.a, {
                onSubmit: r(function (t) {
                  if ("admin@admin.com" === e)
                    return f()(
                      "Permission restriction!",
                      "As a test-admin, you don't have this permission.",
                      "info"
                    );
                  var c = n.b.loading("Adding...Please wait!");
                  a.a
                    .post(
                      "https://fathomless-mesa-11589.herokuapp.com/addAdmin",
                      t
                    )
                    .then(function (e) {
                      if ((n.b.dismiss(c), e.data))
                        return f()(
                          "Successfully Added",
                          "".concat(
                            t.email,
                            " has been successfully added as an admin."
                          ),
                          "success"
                        );
                      f()(
                        "Failed!",
                        "Something went wrong! Please try again.",
                        "error",
                        { dangerMode: !0 }
                      );
                    })
                    .catch(function (e) {
                      n.b.dismiss(c),
                        f()(
                          "Failed!",
                          "Something went wrong! Please try again.",
                          "error",
                          { dangerMode: !0 }
                        );
                    });
                }),
                children: Object(v.jsx)("div", {
                  className:
                    "p-5 mx-md-5 mt-5 bg-white form-main d-flex justify-content-center",
                  children: Object(v.jsxs)("div", {
                    className: "py-md-4",
                    children: [
                      Object(v.jsx)(m.a.Label, { children: "Email" }),
                      Object(v.jsxs)(m.a.Row, {
                        children: [
                          Object(v.jsx)(m.a.Group, {
                            as: O.a,
                            xs: "auto",
                            style: { width: "25rem" },
                            children: Object(v.jsx)(
                              m.a.Control,
                              Object(o.a)(
                                Object(o.a)(
                                  { type: "text" },
                                  c("email", { required: !0 })
                                ),
                                {},
                                { placeholder: "Email Address" }
                              )
                            ),
                          }),
                          Object(v.jsx)(m.a.Group, {
                            as: O.a,
                            xs: "auto",
                            children: Object(v.jsx)(p.a, {
                              type: "submit",
                              className: "btn-main",
                              children: "Add",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        V = c(200),
        T = function (e) {
          return Object(v.jsxs)(
            I.a,
            Object(o.a)(
              Object(o.a)(
                {
                  width: "100%",
                  height: "100%",
                  style: { transform: "translate(-72px, -64px)" },
                  viewBox: "0 0 958 520",
                  backgroundColor: "#eaeced",
                  foregroundColor: "#ffffff",
                },
                e
              ),
              {},
              {
                children: [
                  Object(v.jsx)("rect", {
                    x: "51",
                    y: "45",
                    rx: "3",
                    ry: "3",
                    width: "906",
                    height: "17",
                  }),
                  Object(v.jsx)("circle", { cx: "879", cy: "123", r: "11" }),
                  Object(v.jsx)("circle", { cx: "914", cy: "123", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "104",
                    y: "115",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "305",
                    y: "114",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "661",
                    y: "114",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "55",
                    y: "155",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("circle", { cx: "880", cy: "184", r: "11" }),
                  Object(v.jsx)("circle", { cx: "915", cy: "184", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "105",
                    y: "176",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "306",
                    y: "175",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "662",
                    y: "175",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "56",
                    y: "216",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("circle", { cx: "881", cy: "242", r: "11" }),
                  Object(v.jsx)("circle", { cx: "916", cy: "242", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "106",
                    y: "234",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "307",
                    y: "233",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "663",
                    y: "233",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "57",
                    y: "274",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("circle", { cx: "882", cy: "303", r: "11" }),
                  Object(v.jsx)("circle", { cx: "917", cy: "303", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "107",
                    y: "295",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "308",
                    y: "294",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "664",
                    y: "294",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "58",
                    y: "335",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("circle", { cx: "881", cy: "363", r: "11" }),
                  Object(v.jsx)("circle", { cx: "916", cy: "363", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "106",
                    y: "355",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "307",
                    y: "354",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "663",
                    y: "354",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "57",
                    y: "395",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("circle", { cx: "882", cy: "424", r: "11" }),
                  Object(v.jsx)("circle", { cx: "917", cy: "424", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "107",
                    y: "416",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "308",
                    y: "415",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "664",
                    y: "415",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "55",
                    y: "453",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("rect", {
                    x: "51",
                    y: "49",
                    rx: "3",
                    ry: "3",
                    width: "2",
                    height: "465",
                  }),
                  Object(v.jsx)("rect", {
                    x: "955",
                    y: "49",
                    rx: "3",
                    ry: "3",
                    width: "2",
                    height: "465",
                  }),
                  Object(v.jsx)("circle", { cx: "882", cy: "484", r: "11" }),
                  Object(v.jsx)("circle", { cx: "917", cy: "484", r: "11" }),
                  Object(v.jsx)("rect", {
                    x: "107",
                    y: "476",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "308",
                    y: "475",
                    rx: "3",
                    ry: "3",
                    width: "299",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "664",
                    y: "475",
                    rx: "3",
                    ry: "3",
                    width: "141",
                    height: "15",
                  }),
                  Object(v.jsx)("rect", {
                    x: "55",
                    y: "513",
                    rx: "3",
                    ry: "3",
                    width: "897",
                    height: "2",
                  }),
                  Object(v.jsx)("rect", {
                    x: "52",
                    y: "80",
                    rx: "3",
                    ry: "3",
                    width: "906",
                    height: "17",
                  }),
                  Object(v.jsx)("rect", {
                    x: "53",
                    y: "57",
                    rx: "3",
                    ry: "3",
                    width: "68",
                    height: "33",
                  }),
                  Object(v.jsx)("rect", {
                    x: "222",
                    y: "54",
                    rx: "3",
                    ry: "3",
                    width: "149",
                    height: "33",
                  }),
                  Object(v.jsx)("rect", {
                    x: "544",
                    y: "55",
                    rx: "3",
                    ry: "3",
                    width: "137",
                    height: "33",
                  }),
                  Object(v.jsx)("rect", {
                    x: "782",
                    y: "56",
                    rx: "3",
                    ry: "3",
                    width: "72",
                    height: "33",
                  }),
                  Object(v.jsx)("rect", {
                    x: "933",
                    y: "54",
                    rx: "3",
                    ry: "3",
                    width: "24",
                    height: "33",
                  }),
                ],
              }
            )
          );
        },
        z = function () {
          Object(i.useContext)(l.a).loggedInUser.email;
          var e = Object(i.useState)([]),
            t = Object(r.a)(e, 2),
            c = t[0],
            s = t[1],
            d = Object(i.useState)({}),
            o = Object(r.a)(d, 2),
            j = o[0],
            b = o[1],
            h = Object(i.useState)(!0),
            m = Object(r.a)(h, 2),
            O = m[0],
            g = m[1];
          Object(i.useEffect)(
            function () {
              a.a
                .get("https://fathomless-mesa-11589.herokuapp.com/services")
                .then(function (e) {
                  s(e.data), g(!1);
                })
                .catch(function (e) {
                  return n.b.error(e.message);
                });
            },
            [j]
          );
          return j._id
            ? Object(v.jsx)(w, { editService: j, setEditService: b })
            : Object(v.jsx)("div", {
                className: "px-5 pt-4 mx-md-4 mt-5 bg-white",
                style: { borderRadius: "15px" },
                children: O
                  ? Object(v.jsx)(T, {})
                  : Object(v.jsxs)(V.a, {
                      hover: !0,
                      borderless: !0,
                      responsive: !0,
                      children: [
                        Object(v.jsx)("thead", {
                          className: "bg-light",
                          children: Object(v.jsxs)("tr", {
                            children: [
                              Object(v.jsx)("th", { children: "Service" }),
                              Object(v.jsx)("th", { children: "Description" }),
                              Object(v.jsx)("th", { children: "Price" }),
                              Object(v.jsx)("th", {
                                className: "text-center",
                                children: "Action",
                              }),
                            ],
                          }),
                        }),
                        c.map(function (e) {
                          return Object(v.jsx)(
                            "tbody",
                            {
                              style: { fontWeight: "500" },
                              children: Object(v.jsxs)("tr", {
                                children: [
                                  Object(v.jsx)("td", { children: e.title }),
                                  Object(v.jsxs)("td", {
                                    children: [
                                      e.description.slice(0, 100),
                                      "...",
                                    ],
                                  }),
                                  Object(v.jsxs)("td", {
                                    children: ["$", e.price],
                                  }),
                                  Object(v.jsxs)("td", {
                                    className: "text-center",
                                    children: [
                                      Object(v.jsxs)(p.a, {
                                        variant: "outline-success",
                                        className: "p-1 mb-0",
                                        onClick: function () {
                                          return b(e);
                                        },
                                        children: [
                                          Object(v.jsx)(u.a, {
                                            icon: x.e,
                                            className: "mx-1",
                                          }),
                                          "Edit",
                                        ],
                                      }),
                                      Object(v.jsxs)(p.a, {
                                        variant: "outline-danger",
                                        className: "p-1 ml-3 mb-0",
                                        onClick: function () {
                                          return (
                                            (t = e._id),
                                            void f()({
                                              title: "Are you sure?",
                                              text: "Are you sure you want to delete this service?",
                                              icon: "warning",
                                              buttons: [!0, "Yes"],
                                              dangerMode: !0,
                                            }).then(function (e) {
                                              if (e) {
                                                var r = n.b.loading(
                                                    "Deleting...Please wait!"
                                                  ),
                                                  i = c.filter(function (e) {
                                                    return e._id !== t;
                                                  });
                                                a.a
                                                  .delete(
                                                    "https://fathomless-mesa-11589.herokuapp.com/delete/".concat(
                                                      t
                                                    )
                                                  )
                                                  .then(function (e) {
                                                    if (
                                                      (n.b.dismiss(r), e.data)
                                                    )
                                                      return (
                                                        s(i),
                                                        f()(
                                                          "Successfully Deleted!",
                                                          "Your service has been successfully deleted.",
                                                          "success"
                                                        )
                                                      );
                                                    f()(
                                                      "Failed!",
                                                      "Something went wrong! Please try again.",
                                                      "error",
                                                      { dangerMode: !0 }
                                                    );
                                                  })
                                                  .catch(function (e) {
                                                    n.b.dismiss(r),
                                                      f()(
                                                        "Failed!",
                                                        "Something went wrong! Please try again.",
                                                        "error",
                                                        { dangerMode: !0 }
                                                      );
                                                  });
                                              }
                                            })
                                          );
                                          var t;
                                        },
                                        children: [
                                          Object(v.jsx)(u.a, {
                                            icon: x.j,
                                            className: "mx-1",
                                          }),
                                          "Delete",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e._id
                          );
                        }),
                      ],
                    }),
              });
        },
        H = function () {
          var e = Object(i.useContext)(l.a).loggedInUser.email,
            t = Object(i.useState)([]),
            c = Object(r.a)(t, 2),
            s = c[0],
            d = c[1],
            o = Object(i.useState)(!0),
            j = Object(r.a)(o, 2),
            b = j[0],
            h = j[1];
          Object(i.useEffect)(
            function () {
              a.a
                .get(
                  "https://fathomless-mesa-11589.herokuapp.com/orders?email=".concat(
                    e
                  )
                )
                .then(function (e) {
                  d(e.data), h(!1);
                })
                .catch(function (e) {
                  return n.b.error(e.message);
                });
            },
            [e]
          );
          return Object(v.jsx)("div", {
            className: "px-5 pt-4 mx-md-4 mt-5 bg-white",
            style: { borderRadius: "15px" },
            children: b
              ? Object(v.jsx)(T, {})
              : Object(v.jsxs)(V.a, {
                  hover: !0,
                  borderless: !0,
                  responsive: !0,
                  children: [
                    Object(v.jsx)("thead", {
                      className: "bg-light",
                      children: Object(v.jsxs)("tr", {
                        children: [
                          Object(v.jsx)("th", { children: "Name" }),
                          Object(v.jsx)("th", { children: "Email ID" }),
                          Object(v.jsx)("th", { children: "Service" }),
                          Object(v.jsx)("th", { children: "Pay With" }),
                          Object(v.jsx)("th", { children: "Status" }),
                        ],
                      }),
                    }),
                    s.map(function (e) {
                      return Object(v.jsx)(
                        "tbody",
                        {
                          style: { fontWeight: "500" },
                          children: Object(v.jsxs)("tr", {
                            children: [
                              Object(v.jsx)("td", { children: e.name }),
                              Object(v.jsx)("td", { children: e.email }),
                              Object(v.jsx)("td", { children: e.service }),
                              Object(v.jsx)("td", { children: e.payWith }),
                              Object(v.jsx)("td", {
                                children: Object(v.jsxs)("select", {
                                  className:
                                    "Pending" === e.status
                                      ? "btn btn-danger"
                                      : "Done" === e.status
                                      ? "btn btn-success"
                                      : "btn btn-info",
                                  defaultValue: e.status,
                                  onChange: function (t) {
                                    return (function (e, t) {
                                      var c = [];
                                      s.forEach(function (r) {
                                        r._id === e && (r.status = t),
                                          c.push(r);
                                      }),
                                        d(c);
                                      var r = { id: e, status: t };
                                      a.a
                                        .patch(
                                          "https://fathomless-mesa-11589.herokuapp.com/updateOrderStatus",
                                          r
                                        )
                                        .then(function (e) {
                                          return (
                                            e.data &&
                                            n.b.success("Set to ".concat(t))
                                          );
                                        })
                                        .catch(function (e) {
                                          return n.b.error(e.message);
                                        });
                                    })(e._id, t.target.value);
                                  },
                                  children: [
                                    Object(v.jsx)("option", {
                                      className: "bg-white text-muted",
                                      children: "Pending",
                                    }),
                                    Object(v.jsx)("option", {
                                      className: "bg-white text-muted",
                                      children: "On going",
                                    }),
                                    Object(v.jsx)("option", {
                                      className: "bg-white text-muted",
                                      children: "Done",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        e._id
                      );
                    }),
                  ],
                }),
          });
        },
        J = c(31),
        X = function () {
          var e = Object(i.useContext)(l.a),
            t = e.loggedInUser,
            c = t.name,
            r = t.email,
            s = t.photo,
            a = e.setLoggedInUser;
          return Object(v.jsx)(C.a, {
            style: { maxWidth: "30rem" },
            children: Object(v.jsx)(F.a, {
              className: "border-0 shadow",
              children: Object(v.jsx)(F.a.Body, {
                className: "card-body",
                children: Object(v.jsxs)("div", {
                  className:
                    "d-flex flex-column align-items-center text-center",
                  children: [
                    Object(v.jsx)("img", {
                      src: s,
                      alt: "Admin",
                      className: "rounded-circle",
                      width: "150",
                    }),
                    Object(v.jsxs)("div", {
                      className: "mt-3",
                      children: [
                        Object(v.jsx)("h4", { children: c }),
                        Object(v.jsx)("p", {
                          className: "text-secondary mb-1",
                          children: r,
                        }),
                      ],
                    }),
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        Object(J.e)(),
                          Object(J.d)().then(function (e) {
                            a(e), n.b.error("Logged Out!");
                          });
                      },
                      className: "px-4 logout-btn btn-primary",
                      children: "Logout",
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Q = function (e) {
          var t = e.review,
            c = e.setReview,
            r = e.edit,
            s = e.setEdit,
            d = Object(i.useContext)(l.a).loggedInUser,
            j = d.photo,
            b = d.name,
            h = d.email,
            x = Object(g.a)(),
            u = x.register,
            y = x.handleSubmit,
            w = x.reset;
          return Object(v.jsx)("section", {
            children: Object(v.jsx)(m.a, {
              onSubmit: y(function (e) {
                var i = n.b.loading("Uploading...Please wait!");
                (e.img = j || "https://i.ibb.co/5GzXkwq/user.png"),
                  (e.email = h),
                  r
                    ? a.a
                        .patch(
                          "https://fathomless-mesa-11589.herokuapp.com/updateReview/".concat(
                            t._id
                          ),
                          e
                        )
                        .then(function (c) {
                          return (
                            n.b.dismiss(i),
                            e.name === t.name &&
                            e.address === t.address &&
                            e.description === t.description
                              ? (s(!1),
                                n.b.error("You haven't changed anything!"))
                              : c.data
                              ? (s(!1),
                                f()(
                                  "Successfully updated",
                                  "Your review has been successfully updated!",
                                  "success"
                                ))
                              : void f()(
                                  "Failed!",
                                  "Something went wrong! Please try again.",
                                  "error",
                                  { dangerMode: !0 }
                                )
                          );
                        })
                        .catch(function (e) {
                          n.b.dismiss(i),
                            f()(
                              "Failed!",
                              "Something went wrong! Please try again.",
                              "error",
                              { dangerMode: !0 }
                            );
                        })
                    : a.a
                        .post(
                          "https://fathomless-mesa-11589.herokuapp.com/addReview",
                          e
                        )
                        .then(function (t) {
                          if ((n.b.dismiss(i), t.data))
                            return (
                              w(),
                              c(e),
                              f()(
                                "Successfully Submitted",
                                "Your review has been successfully submitted.",
                                "success"
                              )
                            );
                          f()(
                            "Failed!",
                            "Something went wrong! Please try again.",
                            "error",
                            { dangerMode: !0 }
                          );
                        })
                        .catch(function (e) {
                          n.b.dismiss(i),
                            f()(
                              "Failed!",
                              "Something went wrong! Please try again.",
                              "error",
                              { dangerMode: !0 }
                            );
                        });
              }),
              className: "w-100 form-main",
              children: Object(v.jsxs)("div", {
                className: "p-5 mx-auto mt-5 bg-white",
                style: { borderRadius: "15px", maxWidth: "50rem" },
                children: [
                  Object(v.jsxs)(m.a.Row, {
                    className: "justify-content-center px-4",
                    children: [
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 12,
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Your Name",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  type: "text",
                                  defaultValue:
                                    (null === t || void 0 === t
                                      ? void 0
                                      : t.name) || b,
                                },
                                u("name", { required: !0 })
                              ),
                              {},
                              { placeholder: "Your Name" }
                            )
                          ),
                        ],
                      }),
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 12,
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Address",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  type: "text",
                                  defaultValue:
                                    (null === t || void 0 === t
                                      ? void 0
                                      : t.address) || "",
                                },
                                u("address", { required: !0 })
                              ),
                              {},
                              { placeholder: "Address" }
                            )
                          ),
                        ],
                      }),
                      Object(v.jsxs)(m.a.Group, {
                        as: O.a,
                        md: 12,
                        children: [
                          Object(v.jsx)(m.a.Label, {
                            style: { fontWeight: "bold" },
                            children: "Description",
                          }),
                          Object(v.jsx)(
                            m.a.Control,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  style: { height: "10rem" },
                                  type: "text",
                                  defaultValue:
                                    (null === t || void 0 === t
                                      ? void 0
                                      : t.description) || "",
                                  as: "textarea",
                                },
                                u("description", { required: !0 })
                              ),
                              {},
                              { placeholder: "Description" }
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  Object(v.jsx)("div", {
                    className: "text-center mt-4",
                    children: Object(v.jsx)(p.a, {
                      type: "submit",
                      className: "btn-main",
                      style: { padding: ".6rem 2rem" },
                      children: t ? "Update" : "Submit",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        $ =
          (c(146),
          function (e) {
            var t = e.review,
              c = t.name,
              r = t.description,
              s = t.address,
              i = t.img,
              d = t._id,
              l = e.setEdit;
            return Object(v.jsx)("section", {
              children: Object(v.jsxs)("div", {
                className: "testimonials mx-auto",
                style: { borderRadius: "15px", maxWidth: "60rem" },
                children: [
                  Object(v.jsx)("div", {
                    className: "review-title pt-2 text-center",
                    children: Object(v.jsx)("h2", {
                      children: "My Testimonials",
                    }),
                  }),
                  Object(v.jsxs)(F.a, {
                    className: "my-4 mx-auto",
                    style: { maxWidth: "30rem" },
                    children: [
                      Object(v.jsx)(F.a.Img, {
                        variant: "top",
                        src: i,
                        width: "60",
                      }),
                      Object(v.jsxs)(F.a.Body, {
                        className: "text-center",
                        children: [
                          Object(v.jsxs)("h5", {
                            children: [
                              c,
                              " ",
                              Object(v.jsx)("br", {}),
                              Object(v.jsx)("span", { children: s }),
                            ],
                          }),
                          Object(v.jsx)(F.a.Text, { children: r }),
                        ],
                      }),
                    ],
                  }),
                  Object(v.jsxs)("div", {
                    className: "text-center",
                    children: [
                      Object(v.jsxs)(p.a, {
                        variant: "outline-success",
                        onClick: function () {
                          return l(!0);
                        },
                        className: "py-1 px-2",
                        children: [
                          Object(v.jsx)(u.a, { icon: x.e, className: "mx-1" }),
                          " Edit",
                        ],
                      }),
                      Object(v.jsxs)(p.a, {
                        variant: "outline-danger",
                        onClick: function () {
                          return (
                            (e = d),
                            void f()({
                              title: "Are you sure?",
                              text: "Are you sure you want to delete the review?",
                              icon: "warning",
                              buttons: [!0, "Yes"],
                              dangerMode: !0,
                            }).then(function (t) {
                              if (t) {
                                var c = n.b.loading("Deleting...Please wait!");
                                a.a
                                  .delete(
                                    "https://fathomless-mesa-11589.herokuapp.com/deleteReview/".concat(
                                      e
                                    )
                                  )
                                  .then(function (e) {
                                    if ((n.b.dismiss(c), e.data))
                                      return f()(
                                        "Successfully Deleted!",
                                        "Your review has been successfully deleted.",
                                        "success"
                                      );
                                    f()(
                                      "Failed!",
                                      "Something went wrong! Please try again.",
                                      "error",
                                      { dangerMode: !0 }
                                    );
                                  })
                                  .catch(function (e) {
                                    n.b.dismiss(c),
                                      f()(
                                        "Failed!",
                                        "Something went wrong! Please try again.",
                                        "error",
                                        { dangerMode: !0 }
                                      );
                                  });
                              }
                            })
                          );
                          var e;
                        },
                        className: "py-1 px-2 ml-4",
                        children: [
                          Object(v.jsx)(u.a, { icon: x.j, className: "mx-1" }),
                          " Delete",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        K = function (e) {
          var t = e.review,
            c = e.edit,
            r = e.setEdit;
          return Object(v.jsx)(Q, { review: t, edit: c, setEdit: r });
        },
        Z = function (e) {
          return Object(v.jsxs)(
            I.a,
            Object(o.a)(
              Object(o.a)(
                {
                  width: "100%",
                  height: 600,
                  viewBox: "0 0 850 600",
                  backgroundColor: "#f0f0f0",
                  foregroundColor: "#dedede",
                },
                e
              ),
              {},
              {
                children: [
                  Object(v.jsx)("rect", {
                    x: "43",
                    y: "304",
                    rx: "4",
                    ry: "4",
                    width: "271",
                    height: "9",
                  }),
                  Object(v.jsx)("rect", {
                    x: "44",
                    y: "323",
                    rx: "3",
                    ry: "3",
                    width: "119",
                    height: "6",
                  }),
                  Object(v.jsx)("rect", {
                    x: "42",
                    y: "7",
                    rx: "10",
                    ry: "10",
                    width: "1050",
                    height: "600",
                  }),
                ],
              }
            )
          );
        },
        ee = c(17),
        te = c(71),
        ce = function (e) {
          return Object(v.jsxs)(
            I.a,
            Object(o.a)(
              Object(o.a)(
                { viewBox: "0 0 400 980", height: "78vh ", width: "300px" },
                e
              ),
              {},
              {
                children: [
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "40",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "100",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "160",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "220",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "280",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                  Object(v.jsx)("rect", {
                    x: "30",
                    y: "340",
                    rx: "0",
                    ry: "0",
                    width: "340",
                    height: "50",
                  }),
                ],
              }
            )
          );
        },
        re = function (e) {
          var t = e.show,
            c = e.adminLoading,
            r = Object(i.useContext)(l.a).isAdmin,
            s = Object(d.i)().panel;
          return Object(v.jsxs)("nav", {
            id: "sidebar",
            className: t ? "active" : "",
            children: [
              Object(v.jsxs)("div", {
                className: "sidebar-header",
                children: [
                  Object(v.jsx)("img", {
                    alt: "Logo",
                    src: te.a,
                    width: "42",
                    height: "42",
                    className: "d-inline-block align-top",
                  }),
                  " ",
                  Object(v.jsx)("h2", {
                    className: "d-inline-block",
                    children: "Sam Motor",
                  }),
                ],
              }),
              c
                ? Object(v.jsx)(ce, {})
                : Object(v.jsxs)("ul", {
                    className: "list-unstyled components",
                    children: [
                      Object(v.jsx)("li", {
                        children: Object(v.jsxs)(ee.b, {
                          to: "/dashboard/profile",
                          className: "profile" === s ? "link-active" : "",
                          children: [
                            Object(v.jsx)(u.a, {
                              icon: x.k,
                              style: { fontSize: "1.3rem" },
                            }),
                            " ",
                            Object(v.jsx)("span", { children: "Profile" }),
                          ],
                        }),
                      }),
                      r
                        ? Object(v.jsxs)(v.Fragment, {
                            children: [
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/orderList",
                                  className:
                                    "orderList" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.g }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Order List",
                                    }),
                                  ],
                                }),
                              }),
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/addService",
                                  className:
                                    "addService" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.f }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Add Service",
                                    }),
                                  ],
                                }),
                              }),
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/makeAdmin",
                                  className:
                                    "makeAdmin" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.l }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Make Admin",
                                    }),
                                  ],
                                }),
                              }),
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/manageServices",
                                  className:
                                    "manageServices" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.c }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Manage Services",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          })
                        : Object(v.jsxs)(v.Fragment, {
                            children: [
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/book",
                                  className: "book" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.h }),
                                    " ",
                                    Object(v.jsx)("span", { children: "Book" }),
                                  ],
                                }),
                              }),
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/bookingList",
                                  className:
                                    "bookingList" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.a }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Booking List",
                                    }),
                                  ],
                                }),
                              }),
                              Object(v.jsx)("li", {
                                children: Object(v.jsxs)(ee.b, {
                                  to: "/dashboard/review",
                                  className:
                                    "review" === s ? "link-active" : "",
                                  children: [
                                    Object(v.jsx)(u.a, { icon: x.d }),
                                    " ",
                                    Object(v.jsx)("span", {
                                      children: "Review",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
              Object(v.jsx)("ul", {
                className: "",
                children: Object(v.jsx)("li", {
                  children: Object(v.jsxs)(ee.b, {
                    to: "/",
                    className: "btn btn-primary",
                    children: [Object(v.jsx)(u.a, { icon: x.i }), "Home"],
                  }),
                }),
              }),
            ],
          });
        };
      t.default = function (e) {
        var t = e.adminLoading,
          c = Object(i.useContext)(l.a),
          s = c.loggedInUser.email,
          o = c.isAdmin,
          j = Object(d.i)().panel,
          b = Object(d.g)(),
          h = Object(i.useState)(!1),
          x = Object(r.a)(h, 2),
          u = x[0],
          m = x[1],
          O = Object(i.useState)(!0),
          p = Object(r.a)(O, 2),
          g = p[0],
          y = p[1],
          f = Object(i.useState)({}),
          N = Object(r.a)(f, 2),
          k = N[0],
          S = N[1],
          C = Object(i.useState)(!1),
          L = Object(r.a)(C, 2),
          P = L[0],
          E = L[1];
        return (
          t ||
            o ||
            ("orderList" !== j &&
              "addService" !== j &&
              "makeAdmin" !== j &&
              "manageServices" !== j) ||
            b.replace({ pathname: "/dashboard/profile" }),
          t ||
            !o ||
            ("book" !== j && "bookingList" !== j && "review" !== j) ||
            b.replace({ pathname: "/dashboard/profile" }),
          Object(i.useEffect)(
            function () {
              a.a
                .get(
                  "https://fathomless-mesa-11589.herokuapp.com/reviews?email=".concat(
                    s
                  )
                )
                .then(function (e) {
                  S(e.data), y(!1);
                })
                .catch(function (e) {
                  return n.b.error(e.message);
                });
            },
            [s, P, k]
          ),
          Object(v.jsxs)("main", {
            className: "wrapper",
            children: [
              Object(v.jsx)(re, { show: u, adminLoading: t }),
              Object(v.jsxs)("div", {
                id: "content",
                children: [
                  Object(v.jsx)(_, { setShowSidebar: m, show: u }),
                  t
                    ? Object(v.jsx)(Y, {})
                    : "profile" === j
                    ? Object(v.jsx)(X, {})
                    : "orderList" === j && o
                    ? Object(v.jsx)(H, {})
                    : "addService" === j && o
                    ? Object(v.jsx)(w, {})
                    : "makeAdmin" === j && o
                    ? Object(v.jsx)(q, {})
                    : "manageServices" === j && o
                    ? Object(v.jsx)(z, {})
                    : "book" === j
                    ? Object(v.jsx)(W, {})
                    : "bookingList" === j
                    ? Object(v.jsx)(U, {})
                    : "review" === j && g
                    ? Object(v.jsx)(Z, {})
                    : "review" === j && k.name && !P
                    ? Object(v.jsx)($, { review: k, setEdit: E })
                    : "review" === j && P
                    ? Object(v.jsx)(K, { review: k, edit: P, setEdit: E })
                    : "review" === j
                    ? Object(v.jsx)(Q, { setReview: S })
                    : null,
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=6.56cae48f.chunk.js.map
