(this["webpackJsonpsunburst-onclick-working"] =
  this["webpackJsonpsunburst-onclick-working"] || []).push([
  [0],
  {
    57: function (e) {
      e.exports = JSON.parse(
        '{"name":"Deadth","color":"#053929","children":[{"name":"Credit Risk","color":"#0F6046","children":[{"name":"Credit Decisioning","color":"#208D6A","size":3}]},{"name":"Customer","color":"#0F6046","children":[{"name":"Customer Details","color":"#208D6A","size":92},{"name":"KYC","color":"#208D6A","size":1}]},{"name":"Financial Crime","color":"#0F6046","children":[{"name":"Fraud","color":"#208D6A","size":2}]},{"name":"ID&Auth","color":"#0F6046","children":[{"name":"3rd Party Authentication","color":"#208D6A","size":9},{"name":"Customer Authentication","color":"#208D6A","size":12}]},{"name":"Payments","color":"#0F6046","children":[{"name":"Payee Authentication","color":"#208D6A","size":1},{"name":"Payment Initiation","color":"#208D6A","size":9},{"name":"Payments Scheme Services","color":"#208D6A","size":10}]},{"name":"Product","color":"#0F6046","children":[{"name":"Account","color":"#208D6A","size":13},{"name":"Card","color":"#208D6A","size":4}]},{"name":"Utilities","color":"#0F6046","children":[{"name":"Industry Data Services","color":"#208D6A","size":3},{"name":"Customer Authentication","color":"#208D6A","size":1}]}]}'
      );
    },
    58: function (e) {
      e.exports = JSON.parse(
        '{"name":"Cardiovascular","color":"#053929","children":[{"name":"Customer","color":"#0F6046","children":[{"name":"Communications","color":"#208D6A","size":4},{"name":"Customer Details","color":"#208D6A","size":10}]},{"name":"Financial Crime","color":"#0F6046","children":[{"name":"Fraud","color":"#208D6A","size":1}]},{"name":"ID&Auth","color":"#0F6046","children":[{"name":"Authentication","color":"#208D6A","size":57},{"name":"Authorisation","color":"#208D6A","size":91},{"name":"Identity","color":"#208D6A","size":9}]},{"name":"Payments","color":"#0F6046","children":[{"name":"Payment Initiation","color":"#208D6A","size":1},{"name":"Payments Scheme Services","color":"#208D6A","size":1}]},{"name":"Product","color":"#0F6046","children":[{"name":"Account","color":"#208D6A","size":13},{"name":"Card","color":"#208D6A","size":3},{"name":"Insurance","color":"#208D6A","size":17},{"name":"Loans","color":"#208D6A","size":2}]},{"name":"Test","color":"#0F6046","size":1}]}'
      );
    },
    59: function (e) {
      e.exports = JSON.parse(
        '{"name":"Road Injuries","color":"#053929","children":[{"name":"Customer","color":"#0F6046","children":[{"name":"Customer Details","color":"#208D6A","size":13}]},{"name":"Financial Crime","color":"#0F6046","children":[{"name":"Fraud","color":"#208D6A","size":4}]},{"name":"ID&Auth","color":"#0F6046","children":[{"name":"Authentication","color":"#208D6A","size":81},{"name":"Authorisation","color":"#208D6A","size":5}]},{"name":"Payments","color":"#0F6046","children":[{"name":"Mandate","color":"#208D6A","size":15},{"name":"Payment Initiation","color":"#208D6A","size":7},{"name":"Payments Scheme Services","color":"#208D6A","size":11}]},{"name":"Product","color":"#0F6046","children":[{"name":"Account","color":"#208D6A","size":10},{"name":"Commercial","color":"#208D6A","size":3}]}]}'
      );
    },
    60: function (e) {
      e.exports = JSON.parse(
        '{"name":"HIV/AIDS","color":"#053929","children":[{"name":"ID&Auth","color":"#0F6046","children":[{"name":"Authentication","color":"#208D6A","size":78},{"name":"Authorisation","color":"#208D6A","size":24}]},{"name":"Product","color":"#0F6046","children":[{"name":"Account","color":"#208D6A","size":1}]}]}'
      );
    },
    75: function (e, o, n) {},
    90: function (e, o, n) {
      "use strict";
      n.r(o);
      var c = n(0),
        a = n(55),
        r = n.n(a),
        t = n(7),
        i = (n(75), n(63)),
        l = n(64),
        s = n(1),
        m = Object(l.a)(i.a, { methodNames: ["focusOnNode"] });
      function u(e) {
        var o = e.data,
          n = Object(c.useRef)();
        return Object(s.jsx)(m, {
          ref: n,
          width: 500,
          height: 500,
          excludeRoot: !0,
          label: "name",
          size: "size",
          color: "color",
          centerRadius: 0.3,
          radiusScaleExponent: 0.7,
          tooltipContent: function (e, o) {
            return "".concat(o.value, " products");
          },
          data: o,
          onClick: function (e) {
            n.current.focusOnNode(e), console.log("clicked");
          },
        });
      }
      var d = n(115),
        h = n(117),
        A = n(118),
        j = n(116),
        D = n(57),
        b = n(58),
        z = n(59),
        x = n(60);
      function O() {
        var e = Object(c.useState)("internal"),
          o = Object(t.a)(e, 2),
          n = o[0],
          a = o[1];
        return Object(s.jsxs)("div", {
          className: "App",
          children: [
            Object(s.jsx)("h1", { children: "Hello CodeSandbox" }),
            Object(s.jsx)("h2", {
              children: "Start editing to see some magic happen!",
            }),
            console.log(n),
            Object(s.jsx)("div", {
              className: "radio",
              children: Object(s.jsx)(j.a, {
                children: Object(s.jsxs)(h.a, {
                  row: !0,
                  "aria-labelledby": "demo-row-radio-buttons-group-label",
                  name: "row-radio-buttons-group",
                  value: n,
                  onChange: function (e) {
                    a(e.target.value);
                  },
                  children: [
                    Object(s.jsx)(A.a, {
                      value: "internal",
                      control: Object(s.jsx)(d.a, { color: "success" }),
                      label: "Deadth",
                    }),
                    Object(s.jsx)(A.a, {
                      value: "exch",
                      control: Object(s.jsx)(d.a, { color: "success" }),
                      label: "Cardiovascular",
                    }),
                    Object(s.jsx)(A.a, {
                      value: "exlbg",
                      control: Object(s.jsx)(d.a, { color: "success" }),
                      label: "Road Injuries",
                    }),
                    Object(s.jsx)(A.a, {
                      value: "sca",
                      control: Object(s.jsx)(d.a, { color: "success" }),
                      label: "HIV/AIDS",
                    }),
                  ],
                }),
              }),
            }),
            Object(s.jsx)("div", {
              className: "chart",
              children:
                "internal" === n
                  ? Object(s.jsx)(u, { data: D })
                  : "exch" === n
                  ? Object(s.jsx)(u, { data: b })
                  : "exlbg" === n
                  ? Object(s.jsx)(u, { data: z })
                  : Object(s.jsx)(u, { data: x }),
            }),
          ],
        });
      }
      var C = document.getElementById("root");
      r.a.render(
        Object(s.jsx)(c.StrictMode, { children: Object(s.jsx)(O, {}) }),
        C
      );
    },
  },
  [[90, 1, 2]],
]);
//# sourceMappingURL=main.f2201434.chunk.js.map
