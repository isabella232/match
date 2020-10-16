(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1501: function (module, exports, __webpack_require__) {
      "use strict";
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: v,
                });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                "default" !== k &&
                  Object.prototype.hasOwnProperty.call(mod, k) &&
                  __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, "__esModule", { value: !0 });
      const React = __importStar(__webpack_require__(0)),
        addons_1 = __importStar(__webpack_require__(106)),
        constants_1 = __webpack_require__(515),
        tool_1 = __webpack_require__(1502);
      addons_1.default.register(constants_1.ADDON_ID, () => {
        addons_1.default.add(constants_1.ADDON_ID, {
          title: "match / theme-switcher",
          type: addons_1.types.TOOL,
          match: ({ viewMode: viewMode }) => "story" === viewMode,
          render: () => React.createElement(tool_1.ThemeSwitcherTool, null),
        });
      });
    },
    1502: function (module, exports, __webpack_require__) {
      "use strict";
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: v,
                });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                "default" !== k &&
                  Object.prototype.hasOwnProperty.call(mod, k) &&
                  __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.ThemeSwitcherTool = void 0);
      const React = __importStar(__webpack_require__(0)),
        components_1 = __webpack_require__(28),
        theming_1 = __webpack_require__(2),
        api_1 = __webpack_require__(33),
        match_themes_1 = __webpack_require__(1505),
        constants_1 = __webpack_require__(515),
        IconButtonWithLabel = theming_1.styled(components_1.IconButton)(() => ({
          display: "inline-flex",
          alignItems: "center",
        })),
        IconButtonLabel = theming_1.styled.div(({ theme: theme }) => ({
          fontSize: theme.typography.size.s2 - 1,
          marginLeft: 10,
        })),
        themeList = Object.entries(match_themes_1.ThemeVariants);
      exports.ThemeSwitcherTool = () => {
        const [matchTheme, setMatchTheme] = api_1.useAddonState(
            constants_1.ADDON_ID,
            sessionStorage.getItem(constants_1.STORAGE_ID) ||
              match_themes_1.ThemeVariants.TWILIO
          ),
          emit = api_1.useChannel({
            [constants_1.CHANGED]: (theme) => setMatchTheme(theme),
          }),
          toLinks = React.useCallback(
            (close) =>
              themeList.map(([id, title]) => ({
                id: id,
                title: title,
                onClick: () => {
                  emit(constants_1.SET, title), close();
                },
              })),
            [emit]
          );
        return React.createElement(
          components_1.WithTooltip,
          {
            placement: "top",
            trigger: "click",
            tooltip: ({ onHide: onHide }) =>
              React.createElement(components_1.TooltipLinkList, {
                links: toLinks(onHide),
              }),
            closeOnClick: !0,
          },
          React.createElement(
            IconButtonWithLabel,
            { key: "match-theme", title: "Switch active theme" },
            React.createElement(components_1.Icons, { icon: "switchalt" }),
            React.createElement(IconButtonLabel, null, matchTheme)
          )
        );
      };
    },
    1503: function (module, exports, __webpack_require__) {
      "use strict";
      __webpack_require__(106).addons.setConfig({ refs: {} });
    },
    1505: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "ThemeVariants",
          function () {
            return ThemeVariants;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "MatchThemeProvider",
          function () {
            return MatchThemeProvider;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "StyledBase", function () {
          return StyledBase;
        }),
        __webpack_require__.d(__webpack_exports__, "withTheme", function () {
          return withTheme;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "ThemeConsumer",
          function () {
            return ThemeConsumer;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "useTheme", function () {
          return useTheme;
        }),
        __webpack_require__.d(__webpack_exports__, "TwilioTheme", function () {
          return TwilioTheme;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "SendGridTheme",
          function () {
            return SendGridTheme;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "SignalTheme", function () {
          return SignalTheme;
        }),
        __webpack_require__.d(__webpack_exports__, "AhoyTheme", function () {
          return AhoyTheme;
        });
      var styled_components_browser_esm = __webpack_require__(63),
        index_es = __webpack_require__(97),
        react = __webpack_require__(0);
      function _templateObject2() {
        var data = _taggedTemplateLiteral([
          "\n  color: ",
          ";\n  font-weight: ",
          ";\n  font-size: ",
          ";\n  font-family: ",
          ";\n",
        ]);
        return (
          (_templateObject2 = function () {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          "\n  html {\n    font-size: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n",
        ]);
        return (
          (_templateObject = function () {
            return data;
          }),
          data
        );
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          )
        );
      }
      var GlobalStyles = Object(styled_components_browser_esm.d)(
          _templateObject()
        ),
        StyledBase = styled_components_browser_esm.e.div(
          _templateObject2(),
          function (_ref) {
            return _ref.theme.text.primary.color;
          },
          function (_ref2) {
            return _ref2.theme.fontWeight.regular.value;
          },
          function (_ref3) {
            return _ref3.theme.fontSize.scale100.rem;
          },
          function (_ref4) {
            return _ref4.theme.fontFamily.text;
          }
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var ThemeVariants,
        withTokens = function (tokens) {
          return function (WrappedProvider) {
            return function (_ref) {
              var props = _extends({}, _ref);
              return react.createElement(
                WrappedProvider,
                { theme: tokens },
                react.createElement(GlobalStyles, null),
                react.createElement(StyledBase, props)
              );
            };
          };
        };
      !(function (ThemeVariants) {
        (ThemeVariants.TWILIO = "Twilio"),
          (ThemeVariants.SIGNAL = "Signal"),
          (ThemeVariants.AHOY = "Ahoy"),
          (ThemeVariants.SENDGRID = "SendGrid");
      })(ThemeVariants || (ThemeVariants = {}));
      var prop_types = __webpack_require__(4);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var MatchThemeProvider = function (_ref) {
        var theme = _ref.theme,
          excludeBaseStyles = _ref.excludeBaseStyles,
          props = _objectWithoutProperties(_ref, [
            "theme",
            "excludeBaseStyles",
          ]),
          tokens = react.useMemo(
            function () {
              switch (theme) {
                case ThemeVariants.SENDGRID:
                  return new index_es.b();
                case ThemeVariants.SIGNAL:
                  return new index_es.c();
                case ThemeVariants.AHOY:
                  return new index_es.a();
                case ThemeVariants.TWILIO:
                default:
                  return new index_es.d();
              }
            },
            [theme]
          );
        return react.createElement(
          styled_components_browser_esm.c,
          { theme: tokens },
          react.createElement(GlobalStyles, null),
          excludeBaseStyles
            ? react.createElement("div", props)
            : react.createElement(StyledBase, props)
        );
      };
      function with_theme_extends() {
        return (with_theme_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (MatchThemeProvider.propTypes = {
        theme: prop_types.oneOf([
          ThemeVariants.TWILIO,
          ThemeVariants.SENDGRID,
          ThemeVariants.SIGNAL,
          ThemeVariants.AHOY,
        ]).isRequired,
        excludeBaseStyles: prop_types.bool,
      }),
        (MatchThemeProvider.defaultProps = {
          theme: ThemeVariants.TWILIO,
          excludeBaseStyles: !1,
        });
      var withTheme = function () {
        var theme =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : ThemeVariants.TWILIO;
        return function (WrappedComponent) {
          return function (_ref) {
            var props = with_theme_extends({}, _ref);
            return react.createElement(
              MatchThemeProvider,
              { theme: theme },
              react.createElement(WrappedComponent, props)
            );
          };
        };
      };
      function theme_consumer_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function theme_consumer_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ThemeConsumer = function (_ref) {
        var children = _ref.children,
          props = theme_consumer_objectWithoutProperties(_ref, ["children"]);
        if (!children || "function" != typeof children)
          throw new Error(
            "[ThemeConsumer]: You must pass a function as children"
          );
        return react.createElement(
          styled_components_browser_esm.a,
          null,
          function (theme) {
            return children(Object.assign({}, props, { theme: theme }));
          }
        );
      };
      ThemeConsumer.propTypes = { children: prop_types.func };
      var useTheme = function () {
          var context = react.useContext(styled_components_browser_esm.b);
          if (!context)
            throw new Error(
              "[useHook]: must be used within a @twilio-labs/match-themes provider"
            );
          return context;
        },
        TwilioTheme = withTokens(new index_es.d())(
          styled_components_browser_esm.c
        ),
        SendGridTheme = withTokens(new index_es.b())(
          styled_components_browser_esm.c
        ),
        SignalTheme = withTokens(new index_es.c())(
          styled_components_browser_esm.c
        ),
        AhoyTheme = withTokens(new index_es.a())(
          styled_components_browser_esm.c
        );
    },
    515: function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.CHANGED = exports.SET = exports.STORAGE_ID = exports.PARAM_KEY = exports.ADDON_ID = void 0),
        (exports.ADDON_ID = "twilio/theme-switcher"),
        (exports.PARAM_KEY = "match-theme"),
        (exports.STORAGE_ID = exports.ADDON_ID + "/theme"),
        (exports.SET = exports.ADDON_ID + "/setTheme"),
        (exports.CHANGED = exports.ADDON_ID + "/themeChanged");
    },
    528: function (module, exports, __webpack_require__) {
      __webpack_require__(529),
        __webpack_require__(676),
        __webpack_require__(1480),
        __webpack_require__(1484),
        __webpack_require__(1487),
        __webpack_require__(1498),
        __webpack_require__(1501),
        (module.exports = __webpack_require__(1503));
    },
    593: function (module, exports) {},
    97: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      (function (process) {
        function createCommonjsModule(fn, basedir, module) {
          return (
            fn(
              (module = {
                path: basedir,
                exports: {},
                require: function (path, base) {
                  return (function commonjsRequire() {
                    throw new Error(
                      "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                    );
                  })(null == base && module.path);
                },
              }),
              module.exports
            ),
            module.exports
          );
        }
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return AhoyDesignTokens$1;
        }),
          __webpack_require__.d(__webpack_exports__, "b", function () {
            return SendGridDesignTokens$1;
          }),
          __webpack_require__.d(__webpack_exports__, "c", function () {
            return SignalDesignTokens$1;
          }),
          __webpack_require__.d(__webpack_exports__, "d", function () {
            return TwilioDesignTokens$1;
          });
        var cssMediaQuery = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.queryToCss = void 0),
              (exports.queryToCss = (query) => {
                const mediaQueries = [];
                return (
                  "none" !== query.operator && "none" !== query.type
                    ? mediaQueries.push(`${query.operator} ${query.type}`)
                    : "none" !== query.type && mediaQueries.push(query.type),
                  query.minWidth > -1 &&
                    mediaQueries.push(`(min-width: ${query.minWidth}px)`),
                  query.maxWidth > -1 &&
                    mediaQueries.push(`(max-width: ${query.maxWidth}px)`),
                  query.minHeight > -1 &&
                    mediaQueries.push(`(min-height: ${query.minHeight}px)`),
                  query.maxHeight > -1 &&
                    mediaQueries.push(`(max-height: ${query.maxHeight}px)`),
                  query.minAspectRatio.every((num) => num > -1) &&
                    mediaQueries.push(
                      `(min-aspect-ratio: ${query.minAspectRatio
                        .slice(0, 2)
                        .join("/")})`
                    ),
                  query.maxAspectRatio.every((num) => num > -1) &&
                    mediaQueries.push(
                      `(max-aspect-ratio: ${query.maxAspectRatio
                        .slice(0, 2)
                        .join("/")})`
                    ),
                  query.minResolution > -1 &&
                    mediaQueries.push(
                      `(min-resolution: ${query.minResolution}dpi)`
                    ),
                  query.maxResolution > -1 &&
                    mediaQueries.push(
                      `(max-resolution: ${query.maxResolution}dpi)`
                    ),
                  "none" !== query.orientation &&
                    mediaQueries.push(`(orientation: ${query.orientation})`),
                  "none" !== query.displayMode &&
                    mediaQueries.push(`(display-mode: ${query.displayMode})`),
                  "none" !== query.prefersColorScheme &&
                    mediaQueries.push(
                      `(prefers-color-scheme: ${query.prefersColorScheme})`
                    ),
                  "none" !== query.prefersReducedMotion &&
                    mediaQueries.push(
                      `(prefers-reduced-motion: ${query.prefersReducedMotion})`
                    ),
                  mediaQueries.join(" and ")
                );
              });
          }),
          linearGradient = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.cssLinearGradientLength = (t) =>
                Math.abs(Math.sin(t)) + Math.abs(Math.cos(t))),
              (exports.linearGradientStartAndEndPoints = (t, e, s) => {
                const a = (Math.sin(t) * e) / 2,
                  n = (Math.cos(t) * e) / 2;
                return {
                  start: { x: s.x - a, y: 1 - (s.y - n) },
                  end: { x: s.x + a, y: 1 - (s.y + n) },
                };
              });
          }),
          lib = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (function (e) {
                for (var r in e)
                  exports.hasOwnProperty(r) || (exports[r] = e[r]);
              })(linearGradient);
          }),
          cssColor = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.colorToCss = ({ h: s, s: o, l: e, a: t }) =>
                `hsla(${360 * s}, ${100 * o}%, ${100 * e}%, ${t})`),
              (exports.colorToLowFidelityCss = ({ h: o, s: e, l: t, a: l }) =>
                `hsla(${s(360 * o)}, ${s(100 * e)}%, ${s(100 * t)}%, ${l})`);
            const s = (s) => Math.round(10 * s) / 10;
          }),
          cssLinearGradient = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 });
            const e = (t) => Math.sqrt(t.x * t.x + t.y * t.y),
              n = (t, r) => ({ x: t.x - r.x, y: t.y - r.y }),
              o = (t, r) => t.x * r.x + t.y * r.y,
              i = (r, i) => {
                const x = lib.cssLinearGradientLength(r),
                  c = { x: 0.5, y: 0.5 },
                  y = lib.linearGradientStartAndEndPoints(r, x, c),
                  d = exports.convertPoint(y.start),
                  u = exports.convertPoint(y.end),
                  h = ((t, r, e) => {
                    const s = n(e, t),
                      a = o(s, r);
                    return { x: t.x + r.x * a, y: t.y + r.y * a };
                  })(
                    c,
                    ((t, r) =>
                      ((t) => {
                        const r = e(t);
                        return { x: t.x / r, y: t.y / r };
                      })(n(r, t)))(d, u),
                    i
                  ),
                  p = n(d, h);
                let l = e(p);
                return (
                  ((t, r, e) => {
                    const s = ((t, r, e) => {
                      const s = n(t, r),
                        a = n(t, e),
                        i = o(s, a),
                        x = ((t, r) => t.x * r.y - t.y * r.x)(s, a);
                      return Math.atan2(x, i);
                    })(t, r, e);
                    return Math.abs(s) < Math.PI / 2;
                  })(d, u, h) || (l *= -1),
                  l / x
                );
              };
            (exports.convertPoint = (t) => ({ x: t.x, y: 1 - t.y })),
              (exports.linearGradientToCss = (o) => {
                if (0 === o.stops.length) return "linear-gradient(none)";
                const s = exports.convertPoint(o.start),
                  a = exports.convertPoint(o.end),
                  x = n(a, s),
                  c = Math.atan2(x.y, x.x),
                  y = -c + Math.PI / 2,
                  d = lib.cssLinearGradientLength(c),
                  u = i(y, s),
                  h = e(x),
                  p = o.stops.map((t) => {
                    const e = u + (t.position * h) / d,
                      n = Math.round(100 * e);
                    return `${cssColor.colorToCss(t.color)} ${n}%`;
                  });
                return `linear-gradient(${Math.round(
                  (180 * y) / Math.PI
                )}deg, ${p.join(", ")})`;
              });
          }),
          cssDropShadow = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.dropShadowToCss = (s) =>
                `${s.offset.x}px ${s.offset.y}px ${
                  s.radius
                }px ${cssColor.colorToCss(s.color)}`),
              (exports.dropShadowToFilterCss = (s) => {
                const r = s.radius / 2;
                return `drop-shadow(${s.offset.x}px ${
                  s.offset.y
                }px ${r}px ${cssColor.colorToCss(s.color)})`;
              });
          }),
          cssFill = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.fillToBackgroundCss = (o) => {
                switch (o.type) {
                  case "Color":
                    return cssColor.colorToCss(o.color);
                  case "LinearGradient":
                    return cssLinearGradient.linearGradientToCss(
                      o.linearGradient
                    );
                  default:
                    throw Error("Unsupported fill type: " + o.type);
                }
              });
          }),
          cssFont = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.FontFormats = {
                eot: "embedded-opentype",
                woff: "woff",
                woff2: "woff2",
                otf: "opentype",
                ttf: "truetype",
                svg: "svg",
              });
            const e = [
              "serif",
              "sans-serif",
              "monospace",
              "cursive",
              "fantasy",
              "system-ui",
              "math",
              "emoji",
              "fangsong",
            ];
            exports.fontToCss = (s) => {
              const o = [];
              return (
                s.name && o.push(s.name),
                o.push(...s.fallbacks),
                ((s) => s.map((s) => (e.includes(s) ? s : `"${s}"`)))(o).join()
              );
            };
          }),
          cssTypograph = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.textAlignmentToCss = (e) => {
                switch (e) {
                  case "natural":
                    return "start";
                  case "left":
                    return "left";
                  case "right":
                    return "right";
                  case "center":
                    return "center";
                  default:
                    throw Error("Unsupported text alignment: " + e);
                }
              }),
              (exports.textDecorationsToCss = (e) => {
                const t = [];
                return (
                  e.includes("underline") && t.push("underline"),
                  e.includes("strikethrough") && t.push("line-through"),
                  0 === t.length ? "none" : t.join(" ")
                );
              });
          }),
          googleFonts = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 });
            class t {
              constructor(t, s = []) {
                (this.name = t), (this.variants = new Set());
                for (const t of s) this.addVariant(t);
              }
              static isGoogleFont(t) {
                return "remote" === t.file.type;
              }
              getHashedName() {
                return this.name.replace(/ /g, "+");
              }
              getHashedVariations() {
                return [...this.variants].join(",");
              }
              hash() {
                return 0 === this.variants.size
                  ? ""
                  : `${this.getHashedName()}:${this.getHashedVariations()}`;
              }
              addVariant({ style: t = "normal", weight: s = 400 }) {
                this.variants.add(`${s}${t}`);
              }
            }
            (exports.GoogleFont = t),
              (exports.GoogleFontCollection = class {
                constructor() {
                  (this.baseUrl = "https://fonts.googleapis.com/css"),
                    (this.collections = new Map());
                }
                set(s, e) {
                  const o = this.collections.get(s) || new t(s);
                  o.addVariant(e), this.collections.set(s, o);
                }
                get url() {
                  const t = [];
                  for (const s of this.collections.values()) t.push(s.hash());
                  return `${this.baseUrl}?family=${t.join("%7C")}&swap=true`;
                }
              });
          }),
          lib$1 = createCommonjsModule(function (module, exports) {
            function e(e) {
              for (var r in e) exports.hasOwnProperty(r) || (exports[r] = e[r]);
            }
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              e(cssLinearGradient),
              e(cssDropShadow),
              e(cssColor),
              e(cssFill),
              e(cssFont),
              e(cssTypograph),
              e(googleFonts);
          }),
          cssUnit = createCommonjsModule(function (module, exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.unitToRem = exports.unitToPx = void 0),
              (exports.unitToPx = (unit) => unit.pixels + "px"),
              (exports.unitToRem = (unit) =>
                Math.round((unit.pixels / 16) * 1e3) / 1e3 + "rem");
          }),
          dist = {};
        (void 0 !== process && process) || (process = { env: {} });
        const Environment = {
            serverUrl:
              Object({ NODE_ENV: "production", NODE_PATH: "", PUBLIC_URL: "" })
                .DIEZ_SERVER_URL || "/diez",
            isHot: Object({
              NODE_ENV: "production",
              NODE_PATH: "",
              PUBLIC_URL: "",
            }).DIEZ_IS_HOT,
          },
          diezHTMLExtensions = [];
        var Diez_1 = class Diez {
          constructor(componentType) {
            "undefined" != typeof document
              ? (this.iframe = document.createElement("iframe"))
              : (this.iframe = {}),
              (this.componentType = componentType),
              (this.component = new this.componentType()),
              (this.subscribers = []);
          }
          static applyHTMLExtensions() {
            diezHTMLExtensions.forEach((extension) => {
              extension instanceof Function && extension();
            });
          }
          broadcast() {
            for (const subscriber of this.subscribers)
              subscriber(this.component);
          }
          subscribe(subscriber) {
            this.subscribers.push(subscriber);
          }
          attach(subscriber) {
            subscriber(this.component),
              Environment.isHot &&
                (this.subscribe(subscriber),
                this.iframe.contentWindow ||
                  ((this.iframe.src = `${Environment.serverUrl}/components/${this.component.constructor.name}`),
                  (this.iframe.width = "0"),
                  (this.iframe.height = "0"),
                  (this.iframe.style.display = "none"),
                  "undefined" != typeof document &&
                    (document.body.appendChild(this.iframe),
                    window.addEventListener("message", (event) => {
                      event.source === this.iframe.contentWindow &&
                        event.origin.startsWith(Environment.serverUrl) &&
                        ((this.component = new this.componentType(
                          JSON.parse(event.data)
                        )),
                        this.broadcast());
                    }))));
          }
        };
        class MediaQuery {
          constructor({
            operator: operator,
            type: type,
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minAspectRatio: minAspectRatio,
            maxAspectRatio: maxAspectRatio,
            minResolution: minResolution,
            maxResolution: maxResolution,
            orientation: orientation,
            displayMode: displayMode,
            prefersColorScheme: prefersColorScheme,
            prefersReducedMotion: prefersReducedMotion,
          }) {
            (this.operator = operator),
              (this.type = type),
              (this.minWidth = minWidth),
              (this.maxWidth = maxWidth),
              (this.minHeight = minHeight),
              (this.maxHeight = maxHeight),
              (this.minAspectRatio = minAspectRatio),
              (this.maxAspectRatio = maxAspectRatio),
              (this.minResolution = minResolution),
              (this.maxResolution = maxResolution),
              (this.orientation = orientation),
              (this.displayMode = displayMode),
              (this.prefersColorScheme = prefersColorScheme),
              (this.prefersReducedMotion = prefersReducedMotion);
          }
        }
        var MediaQuery_1 = MediaQuery;
        const { queryToCss: queryToCss } = cssMediaQuery;
        Object.defineProperties(MediaQuery.prototype, {
          mediaQuery: {
            get() {
              return queryToCss(this);
            },
          },
        });
        class Breakpoint {
          constructor({
            small: small = {
              operator: "none",
              type: "screen",
              minWidth: 360,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            medium: medium = {
              operator: "none",
              type: "screen",
              minWidth: 768,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            large: large = {
              operator: "none",
              type: "screen",
              minWidth: 1024,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            xLarge: xLarge = {
              operator: "none",
              type: "screen",
              minWidth: 1200,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
          } = {}) {
            (this.small = new MediaQuery(small)),
              (this.medium = new MediaQuery(medium)),
              (this.large = new MediaQuery(large)),
              (this.xLarge = new MediaQuery(xLarge));
          }
        }
        var Breakpoint_1 = Breakpoint;
        class Color {
          constructor({ h: h, s: s, l: l, a: a }) {
            (this.h = h), (this.s = s), (this.l = l), (this.a = a);
          }
        }
        var Color_1 = Color;
        const {
          colorToCss: colorToCss,
          colorToLowFidelityCss: colorToLowFidelityCss,
        } = lib$1;
        Object.defineProperties(Color.prototype, {
          color: {
            get() {
              return colorToCss(this);
            },
          },
          lowFidelityColor: {
            get() {
              return colorToLowFidelityCss(this);
            },
          },
          colorStyle: {
            get() {
              return { color: this.color };
            },
          },
          backgroundColorStyle: {
            get() {
              return { backgroundColor: this.color };
            },
          },
          borderColorStyle: {
            get() {
              return { borderColor: this.color };
            },
          },
          outlineColorStyle: {
            get() {
              return { outlineColor: this.color };
            },
          },
        });
        class Swatch {
          constructor({
            brand: brand = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            brandHighlight: brandHighlight = {
              h: 0.9803418803418804,
              s: 0.8823529411764705,
              l: 0.5666666666666667,
              a: 1,
            },
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            baseBlue: baseBlue = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            baseGreen: baseGreen = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            baseOrange: baseOrange = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            baseYellow: baseYellow = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            basePurple: basePurple = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            gray10: gray10 = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            gray20: gray20 = {
              h: 0.6296296296296298,
              s: 0.17647058823529388,
              l: 0.8999999999999999,
              a: 1,
            },
            gray30: gray30 = {
              h: 0.6309523809523808,
              s: 0.15217391304347835,
              l: 0.8196078431372549,
              a: 1,
            },
            gray40: gray40 = {
              h: 0.6315789473684211,
              s: 0.13286713286713278,
              l: 0.7196078431372549,
              a: 1,
            },
            gray50: gray50 = {
              h: 0.6225490196078431,
              s: 0.1666666666666666,
              l: 0.6,
              a: 1,
            },
            gray60: gray60 = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            gray70: gray70 = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            gray80: gray80 = {
              h: 0.6097560975609756,
              s: 0.2645161290322581,
              l: 0.303921568627451,
              a: 1,
            },
            gray90: gray90 = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            gray100: gray100 = {
              h: 0.6049382716049383,
              s: 0.4285714285714286,
              l: 0.12352941176470589,
              a: 1,
            },
            red10: red10 = {
              h: 0,
              s: 0.9000000000000002,
              l: 0.9607843137254902,
              a: 1,
            },
            red20: red20 = { h: 0, s: 0.882352941176471, l: 0.9, a: 1 },
            red30: red30 = {
              h: 0,
              s: 0.7931034482758624,
              l: 0.8294117647058823,
              a: 1,
            },
            red40: red40 = {
              h: 0,
              s: 0.8425196850393704,
              l: 0.7509803921568627,
              a: 1,
            },
            red50: red50 = {
              h: 0,
              s: 0.7883597883597881,
              l: 0.6294117647058823,
              a: 1,
            },
            red60: red60 = {
              h: 0,
              s: 0.746938775510204,
              l: 0.4803921568627451,
              a: 1,
            },
            red70: red70 = {
              h: 0,
              s: 0.8210526315789474,
              l: 0.37254901960784315,
              a: 1,
            },
            red80: red80 = {
              h: 0,
              s: 0.813953488372093,
              l: 0.2529411764705882,
              a: 1,
            },
            red90: red90 = {
              h: 0,
              s: 0.7411764705882352,
              l: 0.16666666666666669,
              a: 1,
            },
            red100: red100 = {
              h: 0,
              s: 0.6065573770491803,
              l: 0.11960784313725491,
              a: 1,
            },
            orange10: orange10 = {
              h: 0.0729166666666667,
              s: 0.8888888888888893,
              l: 0.9647058823529412,
              a: 1,
            },
            orange20: orange20 = {
              h: 0.07017543859649124,
              s: 0.934426229508197,
              l: 0.8803921568627451,
              a: 1,
            },
            orange30: orange30 = {
              h: 0.06296296296296296,
              s: 0.9,
              l: 0.803921568627451,
              a: 1,
            },
            orange40: orange40 = {
              h: 0.07142857142857141,
              s: 1,
              l: 0.7392156862745098,
              a: 1,
            },
            orange50: orange50 = {
              h: 0.07156862745098039,
              s: 0.9444444444444445,
              l: 0.6470588235294117,
              a: 1,
            },
            orange60: orange60 = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            orange70: orange70 = {
              h: 0.049999999999999996,
              s: 0.6956521739130436,
              l: 0.4509803921568627,
              a: 1,
            },
            orange80: orange80 = {
              h: 0.03561253561253561,
              s: 0.7090909090909091,
              l: 0.3235294117647059,
              a: 1,
            },
            orange90: orange90 = {
              h: 0.013020833333333334,
              s: 0.6153846153846154,
              l: 0.20392156862745098,
              a: 1,
            },
            orange100: orange100 = {
              h: 0.01360544217687075,
              s: 0.620253164556962,
              l: 0.15490196078431373,
              a: 1,
            },
            yellow10: yellow10 = {
              h: 0.13492063492063483,
              s: 1,
              l: 0.9588235294117646,
              a: 1,
            },
            yellow20: yellow20 = {
              h: 0.13596491228070176,
              s: 1,
              l: 0.8509803921568627,
              a: 1,
            },
            yellow30: yellow30 = {
              h: 0.1377952755905512,
              s: 1,
              l: 0.7509803921568627,
              a: 1,
            },
            yellow40: yellow40 = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            yellow50: yellow50 = {
              h: 0.13933333333333334,
              s: 1,
              l: 0.49019607843137253,
              a: 1,
            },
            yellow60: yellow60 = {
              h: 0.12814814814814815,
              s: 0.9414225941422594,
              l: 0.46862745098039216,
              a: 1,
            },
            yellow70: yellow70 = {
              h: 0.12199312714776633,
              s: 1,
              l: 0.3803921568627451,
              a: 1,
            },
            yellow80: yellow80 = {
              h: 0.1056547619047619,
              s: 0.7272727272727273,
              l: 0.3019607843137255,
              a: 1,
            },
            yellow90: yellow90 = {
              h: 0.0942982456140351,
              s: 0.8260869565217391,
              l: 0.1803921568627451,
              a: 1,
            },
            yellow100: yellow100 = {
              h: 0.08181818181818183,
              s: 0.8208955223880597,
              l: 0.13137254901960785,
              a: 1,
            },
            green10: green10 = {
              h: 0.3958333333333331,
              s: 0.8000000000000006,
              l: 0.9607843137254902,
              a: 1,
            },
            green20: green20 = {
              h: 0.39430894308943093,
              s: 0.8039215686274511,
              l: 0.8999999999999999,
              a: 1,
            },
            green30: green30 = {
              h: 0.3988095238095238,
              s: 0.8235294117647062,
              l: 0.8,
              a: 1,
            },
            green40: green40 = {
              h: 0.3963963963963964,
              s: 0.7254901960784312,
              l: 0.7,
              a: 1,
            },
            green50: green50 = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            green60: green60 = {
              h: 0.4006410256410256,
              s: 0.7959183673469389,
              l: 0.38431372549019605,
              a: 1,
            },
            green70: green70 = {
              h: 0.39999999999999997,
              s: 0.7971014492753624,
              l: 0.27058823529411763,
              a: 1,
            },
            green80: green80 = {
              h: 0.39999999999999997,
              s: 0.794392523364486,
              l: 0.20980392156862746,
              a: 1,
            },
            green90: green90 = {
              h: 0.39999999999999997,
              s: 0.6338028169014084,
              l: 0.1392156862745098,
              a: 1,
            },
            green100: green100 = {
              h: 0.39351851851851855,
              s: 0.7826086956521738,
              l: 0.09019607843137256,
              a: 1,
            },
            blue10: blue10 = {
              h: 0.5916666666666665,
              s: 1,
              l: 0.9607843137254901,
              a: 1,
            },
            blue20: blue20 = { h: 0.5882352941176471, s: 1, l: 0.9, a: 1 },
            blue30: blue30 = { h: 0.5816993464052288, s: 1, l: 0.8, a: 1 },
            blue40: blue40 = { h: 0.5827886710239651, s: 1, l: 0.7, a: 1 },
            blue50: blue50 = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            blue60: blue60 = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            blue70: blue70 = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            blue80: blue80 = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            blue90: blue90 = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            blue100: blue100 = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
            purple10: purple10 = {
              h: 0.7361111111111112,
              s: 0.6666666666666677,
              l: 0.9647058823529412,
              a: 1,
            },
            purple20: purple20 = {
              h: 0.7277777777777777,
              s: 0.75,
              l: 0.9215686274509804,
              a: 1,
            },
            purple30: purple30 = {
              h: 0.7307692307692308,
              s: 0.6842105263157894,
              l: 0.8137254901960784,
              a: 1,
            },
            purple40: purple40 = {
              h: 0.7316666666666666,
              s: 0.6410256410256409,
              l: 0.6941176470588235,
              a: 1,
            },
            purple50: purple50 = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            purple60: purple60 = {
              h: 0.7310838445807771,
              s: 0.6392156862745098,
              l: 0.5,
              a: 1,
            },
            purple70: purple70 = {
              h: 0.7319277108433736,
              s: 0.7830188679245282,
              l: 0.41568627450980394,
              a: 1,
            },
            purple80: purple80 = {
              h: 0.7327044025157233,
              s: 0.7910447761194029,
              l: 0.2627450980392157,
              a: 1,
            },
            purple90: purple90 = {
              h: 0.7307692307692307,
              s: 0.783132530120482,
              l: 0.1627450980392157,
              a: 1,
            },
            purple100: purple100 = {
              h: 0.7304964539007092,
              s: 0.8545454545454546,
              l: 0.10784313725490197,
              a: 1,
            },
          } = {}) {
            (this.brand = new Color(brand)),
              (this.brandHighlight = new Color(brandHighlight)),
              (this.white = new Color(white)),
              (this.baseBlue = new Color(baseBlue)),
              (this.baseGreen = new Color(baseGreen)),
              (this.baseOrange = new Color(baseOrange)),
              (this.baseYellow = new Color(baseYellow)),
              (this.basePurple = new Color(basePurple)),
              (this.gray10 = new Color(gray10)),
              (this.gray20 = new Color(gray20)),
              (this.gray30 = new Color(gray30)),
              (this.gray40 = new Color(gray40)),
              (this.gray50 = new Color(gray50)),
              (this.gray60 = new Color(gray60)),
              (this.gray70 = new Color(gray70)),
              (this.gray80 = new Color(gray80)),
              (this.gray90 = new Color(gray90)),
              (this.gray100 = new Color(gray100)),
              (this.red10 = new Color(red10)),
              (this.red20 = new Color(red20)),
              (this.red30 = new Color(red30)),
              (this.red40 = new Color(red40)),
              (this.red50 = new Color(red50)),
              (this.red60 = new Color(red60)),
              (this.red70 = new Color(red70)),
              (this.red80 = new Color(red80)),
              (this.red90 = new Color(red90)),
              (this.red100 = new Color(red100)),
              (this.orange10 = new Color(orange10)),
              (this.orange20 = new Color(orange20)),
              (this.orange30 = new Color(orange30)),
              (this.orange40 = new Color(orange40)),
              (this.orange50 = new Color(orange50)),
              (this.orange60 = new Color(orange60)),
              (this.orange70 = new Color(orange70)),
              (this.orange80 = new Color(orange80)),
              (this.orange90 = new Color(orange90)),
              (this.orange100 = new Color(orange100)),
              (this.yellow10 = new Color(yellow10)),
              (this.yellow20 = new Color(yellow20)),
              (this.yellow30 = new Color(yellow30)),
              (this.yellow40 = new Color(yellow40)),
              (this.yellow50 = new Color(yellow50)),
              (this.yellow60 = new Color(yellow60)),
              (this.yellow70 = new Color(yellow70)),
              (this.yellow80 = new Color(yellow80)),
              (this.yellow90 = new Color(yellow90)),
              (this.yellow100 = new Color(yellow100)),
              (this.green10 = new Color(green10)),
              (this.green20 = new Color(green20)),
              (this.green30 = new Color(green30)),
              (this.green40 = new Color(green40)),
              (this.green50 = new Color(green50)),
              (this.green60 = new Color(green60)),
              (this.green70 = new Color(green70)),
              (this.green80 = new Color(green80)),
              (this.green90 = new Color(green90)),
              (this.green100 = new Color(green100)),
              (this.blue10 = new Color(blue10)),
              (this.blue20 = new Color(blue20)),
              (this.blue30 = new Color(blue30)),
              (this.blue40 = new Color(blue40)),
              (this.blue50 = new Color(blue50)),
              (this.blue60 = new Color(blue60)),
              (this.blue70 = new Color(blue70)),
              (this.blue80 = new Color(blue80)),
              (this.blue90 = new Color(blue90)),
              (this.blue100 = new Color(blue100)),
              (this.purple10 = new Color(purple10)),
              (this.purple20 = new Color(purple20)),
              (this.purple30 = new Color(purple30)),
              (this.purple40 = new Color(purple40)),
              (this.purple50 = new Color(purple50)),
              (this.purple60 = new Color(purple60)),
              (this.purple70 = new Color(purple70)),
              (this.purple80 = new Color(purple80)),
              (this.purple90 = new Color(purple90)),
              (this.purple100 = new Color(purple100));
          }
        }
        var Swatch_1 = Swatch;
        class FontFamily {
          constructor({
            text: text = "Whitney SSm A, Whitney SSm B, Helvetica Neue, Helvetica, Arial, sans-serif",
            heading: heading = "Whitney Cond SSm A, Whitney Cond SSm B, sans-serif",
            quote: quote = "Surveyor SSm A, Surveyor SSm B",
            code: code = "Fira Mono, Consolas, monospace",
          } = {}) {
            (this.text = text),
              (this.heading = heading),
              (this.quote = quote),
              (this.code = code);
          }
        }
        var FontFamily_1 = FontFamily;
        class Unit {
          constructor({ pixels: pixels }) {
            this.pixels = pixels;
          }
        }
        var Unit_1 = Unit;
        const { unitToPx: unitToPx, unitToRem: unitToRem } = cssUnit;
        Object.defineProperties(Unit.prototype, {
          px: {
            get() {
              return unitToPx(this);
            },
          },
          rem: {
            get() {
              return unitToRem(this);
            },
          },
        });
        class FontSize {
          constructor({
            scale60: scale60 = { pixels: 12 },
            scale70: scale70 = { pixels: 13 },
            scale80: scale80 = { pixels: 14 },
            scale100: scale100 = { pixels: 16 },
            scale120: scale120 = { pixels: 18 },
            scale140: scale140 = { pixels: 20 },
            scale160: scale160 = { pixels: 22 },
            scale180: scale180 = { pixels: 24 },
            scale220: scale220 = { pixels: 28 },
            scale280: scale280 = { pixels: 34 },
            scale340: scale340 = { pixels: 40 },
            scale420: scale420 = { pixels: 48 },
            scale440: scale440 = { pixels: 50 },
            scale500: scale500 = { pixels: 56 },
            scale1020: scale1020 = { pixels: 108 },
          } = {}) {
            (this.scale60 = new Unit(scale60)),
              (this.scale70 = new Unit(scale70)),
              (this.scale80 = new Unit(scale80)),
              (this.scale100 = new Unit(scale100)),
              (this.scale120 = new Unit(scale120)),
              (this.scale140 = new Unit(scale140)),
              (this.scale160 = new Unit(scale160)),
              (this.scale180 = new Unit(scale180)),
              (this.scale220 = new Unit(scale220)),
              (this.scale280 = new Unit(scale280)),
              (this.scale340 = new Unit(scale340)),
              (this.scale420 = new Unit(scale420)),
              (this.scale440 = new Unit(scale440)),
              (this.scale500 = new Unit(scale500)),
              (this.scale1020 = new Unit(scale1020));
          }
        }
        var FontSize_1 = FontSize;
        class Weight {
          constructor({ weight: weight }) {
            this.weight = weight;
          }
        }
        var Weight_1 = Weight;
        Object.defineProperties(Weight.prototype, {
          value: {
            get() {
              return this.weight;
            },
          },
        });
        class FontWeight {
          constructor({
            thin: thin = { weight: 200 },
            light: light = { weight: 300 },
            regular: regular = { weight: 400 },
            medium: medium = { weight: 500 },
            semibold: semibold = { weight: 600 },
            bold: bold = { weight: 700 },
          } = {}) {
            (this.thin = new Weight(thin)),
              (this.light = new Weight(light)),
              (this.regular = new Weight(regular)),
              (this.medium = new Weight(medium)),
              (this.semibold = new Weight(semibold)),
              (this.bold = new Weight(bold));
          }
        }
        var FontWeight_1 = FontWeight;
        class Background {
          constructor({
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            blue: blue = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            light: light = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            darkest: darkest = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.white = new Color(white)),
              (this.blue = new Color(blue)),
              (this.light = new Color(light)),
              (this.darkest = new Color(darkest));
          }
        }
        var Background_1 = Background;
        class Text {
          constructor({
            primary: primary = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            secondary: secondary = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            tertiary: tertiary = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            inversePrimary: inversePrimary = { h: 0, s: 0, l: 1, a: 1 },
          } = {}) {
            (this.primary = new Color(primary)),
              (this.secondary = new Color(secondary)),
              (this.tertiary = new Color(tertiary)),
              (this.inversePrimary = new Color(inversePrimary));
          }
        }
        var Text_1 = Text;
        class Point2D {
          constructor({ x: x, y: y }) {
            (this.x = x), (this.y = y);
          }
        }
        var Point2D_1 = Point2D;
        class DropShadow {
          constructor({ offset: offset, radius: radius, color: color }) {
            (this.offset = new Point2D(offset)),
              (this.radius = radius),
              (this.color = new Color(color));
          }
        }
        var DropShadow_1 = DropShadow;
        const {
          dropShadowToCss: dropShadowToCss,
          dropShadowToFilterCss: dropShadowToFilterCss,
        } = lib$1;
        Object.defineProperties(DropShadow.prototype, {
          boxShadow: {
            get() {
              return dropShadowToCss(this);
            },
          },
          textShadow: {
            get() {
              return dropShadowToCss(this);
            },
          },
          filter: {
            get() {
              return dropShadowToFilterCss(this);
            },
          },
          boxShadowStyle: {
            get() {
              return { boxShadow: this.boxShadow };
            },
          },
          textShadowStyle: {
            get() {
              return { textShadow: this.textShadow };
            },
          },
          filterStyle: {
            get() {
              return { filter: this.filter };
            },
          },
        });
        class Shadow {
          constructor({
            card: card = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
            navigation: navigation = {
              offset: { x: 0, y: 14 },
              radius: 25,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.12,
              },
            },
            image: image = {
              offset: { x: 0, y: 4 },
              radius: 16,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            large: large = {
              offset: { x: 0, y: 16 },
              radius: 60,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            inverse: inverse = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
          } = {}) {
            (this.card = new DropShadow(card)),
              (this.navigation = new DropShadow(navigation)),
              (this.image = new DropShadow(image)),
              (this.large = new DropShadow(large)),
              (this.inverse = new DropShadow(inverse));
          }
        }
        var Shadow_1 = Shadow;
        class GradientStop {
          constructor({ position: position, color: color }) {
            (this.position = position), (this.color = new Color(color));
          }
        }
        var GradientStop_1 = GradientStop;
        class LinearGradient {
          constructor({ stops: stops, start: start, end: end }) {
            (this.stops = stops.map((value1) => new GradientStop(value1))),
              (this.start = new Point2D(start)),
              (this.end = new Point2D(end));
          }
        }
        var LinearGradient_1 = LinearGradient;
        const { linearGradientToCss: linearGradientToCss } = lib$1;
        Object.defineProperties(LinearGradient.prototype, {
          linearGradient: {
            get() {
              return linearGradientToCss(this);
            },
          },
          backgroundImageStyle: {
            get() {
              return { backgroundImage: this.linearGradient };
            },
          },
          backgroundStyle: {
            get() {
              return { background: this.linearGradient };
            },
          },
        });
        class Gradient {
          constructor({
            redHero: redHero = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blueHero: blueHero = {
              stops: [
                {
                  position: 0,
                  color: { h: 0.5751633986928105, s: 1, l: 0.5, a: 0 },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5751633986928105,
                    s: 1,
                    l: 0.5,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            red180: red180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            orange180: orange180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            green180: green180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blue180: blue180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            purple180: purple180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            darkGray: darkGray = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.19999999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.8,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            lightRedBlue: lightRedBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.5,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.5,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            redBlue: redBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.8,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.7,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
          } = {}) {
            (this.redHero = new LinearGradient(redHero)),
              (this.blueHero = new LinearGradient(blueHero)),
              (this.red180 = new LinearGradient(red180)),
              (this.orange180 = new LinearGradient(orange180)),
              (this.green180 = new LinearGradient(green180)),
              (this.blue180 = new LinearGradient(blue180)),
              (this.purple180 = new LinearGradient(purple180)),
              (this.darkGray = new LinearGradient(darkGray)),
              (this.lightRedBlue = new LinearGradient(lightRedBlue)),
              (this.redBlue = new LinearGradient(redBlue));
          }
        }
        var Gradient_1 = Gradient;
        class Button {
          constructor({
            inverseText: inverseText = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            inverseHoverBg: inverseHoverBg = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            inverseFocusBg: inverseFocusBg = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.inverseText = new Color(inverseText)),
              (this.inverseHoverBg = new Color(inverseHoverBg)),
              (this.inverseFocusBg = new Color(inverseFocusBg));
          }
        }
        var Button_1 = Button;
        class TwilioDesignTokens {
          constructor({
            breakpoint: breakpoint = {},
            swatch: swatch = {},
            fontFamily: fontFamily = {},
            fontSize: fontSize = {},
            fontWeight: fontWeight = {},
            background: background = {},
            text: text = {},
            shadow: shadow = {},
            gradient: gradient = {},
            button: button = {},
          } = {}) {
            (this.breakpoint = new Breakpoint(breakpoint)),
              (this.swatch = new Swatch(swatch)),
              (this.fontFamily = new FontFamily(fontFamily)),
              (this.fontSize = new FontSize(fontSize)),
              (this.fontWeight = new FontWeight(fontWeight)),
              (this.background = new Background(background)),
              (this.text = new Text(text)),
              (this.shadow = new Shadow(shadow)),
              (this.gradient = new Gradient(gradient)),
              (this.button = new Button(button));
          }
        }
        Object.defineProperty(TwilioDesignTokens, "name", {
          value: "TwilioDesignTokens",
        });
        var TwilioDesignTokens_1 = TwilioDesignTokens;
        (dist.Diez = Diez_1),
          (dist.MediaQuery = MediaQuery_1),
          (dist.Breakpoint = Breakpoint_1),
          (dist.Color = Color_1),
          (dist.Swatch = Swatch_1),
          (dist.FontFamily = FontFamily_1),
          (dist.Unit = Unit_1),
          (dist.FontSize = FontSize_1),
          (dist.Weight = Weight_1),
          (dist.FontWeight = FontWeight_1),
          (dist.Background = Background_1),
          (dist.Text = Text_1),
          (dist.Point2D = Point2D_1),
          (dist.DropShadow = DropShadow_1),
          (dist.Shadow = Shadow_1),
          (dist.GradientStop = GradientStop_1),
          (dist.LinearGradient = LinearGradient_1),
          (dist.Gradient = Gradient_1),
          (dist.Button = Button_1),
          (dist.TwilioDesignTokens = TwilioDesignTokens_1);
        const TwilioDesignTokens$1 = dist.TwilioDesignTokens;
        var dist$1 = {};
        (void 0 !== process && process) || (process = { env: {} });
        const Environment$1 = {
            serverUrl:
              Object({ NODE_ENV: "production", NODE_PATH: "", PUBLIC_URL: "" })
                .DIEZ_SERVER_URL || "/diez",
            isHot: Object({
              NODE_ENV: "production",
              NODE_PATH: "",
              PUBLIC_URL: "",
            }).DIEZ_IS_HOT,
          },
          diezHTMLExtensions$1 = [];
        var Diez_1$1 = class Diez$1 {
          constructor(componentType) {
            "undefined" != typeof document
              ? (this.iframe = document.createElement("iframe"))
              : (this.iframe = {}),
              (this.componentType = componentType),
              (this.component = new this.componentType()),
              (this.subscribers = []);
          }
          static applyHTMLExtensions() {
            diezHTMLExtensions$1.forEach((extension) => {
              extension instanceof Function && extension();
            });
          }
          broadcast() {
            for (const subscriber of this.subscribers)
              subscriber(this.component);
          }
          subscribe(subscriber) {
            this.subscribers.push(subscriber);
          }
          attach(subscriber) {
            subscriber(this.component),
              Environment$1.isHot &&
                (this.subscribe(subscriber),
                this.iframe.contentWindow ||
                  ((this.iframe.src = `${Environment$1.serverUrl}/components/${this.component.constructor.name}`),
                  (this.iframe.width = "0"),
                  (this.iframe.height = "0"),
                  (this.iframe.style.display = "none"),
                  "undefined" != typeof document &&
                    (document.body.appendChild(this.iframe),
                    window.addEventListener("message", (event) => {
                      event.source === this.iframe.contentWindow &&
                        event.origin.startsWith(Environment$1.serverUrl) &&
                        ((this.component = new this.componentType(
                          JSON.parse(event.data)
                        )),
                        this.broadcast());
                    }))));
          }
        };
        class MediaQuery$1 {
          constructor({
            operator: operator,
            type: type,
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minAspectRatio: minAspectRatio,
            maxAspectRatio: maxAspectRatio,
            minResolution: minResolution,
            maxResolution: maxResolution,
            orientation: orientation,
            displayMode: displayMode,
            prefersColorScheme: prefersColorScheme,
            prefersReducedMotion: prefersReducedMotion,
          }) {
            (this.operator = operator),
              (this.type = type),
              (this.minWidth = minWidth),
              (this.maxWidth = maxWidth),
              (this.minHeight = minHeight),
              (this.maxHeight = maxHeight),
              (this.minAspectRatio = minAspectRatio),
              (this.maxAspectRatio = maxAspectRatio),
              (this.minResolution = minResolution),
              (this.maxResolution = maxResolution),
              (this.orientation = orientation),
              (this.displayMode = displayMode),
              (this.prefersColorScheme = prefersColorScheme),
              (this.prefersReducedMotion = prefersReducedMotion);
          }
        }
        var MediaQuery_1$1 = MediaQuery$1;
        const { queryToCss: queryToCss$1 } = cssMediaQuery;
        Object.defineProperties(MediaQuery$1.prototype, {
          mediaQuery: {
            get() {
              return queryToCss$1(this);
            },
          },
        });
        class Breakpoint$1 {
          constructor({
            small: small = {
              operator: "none",
              type: "screen",
              minWidth: 360,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            medium: medium = {
              operator: "none",
              type: "screen",
              minWidth: 768,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            large: large = {
              operator: "none",
              type: "screen",
              minWidth: 1024,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            xLarge: xLarge = {
              operator: "none",
              type: "screen",
              minWidth: 1200,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
          } = {}) {
            (this.small = new MediaQuery$1(small)),
              (this.medium = new MediaQuery$1(medium)),
              (this.large = new MediaQuery$1(large)),
              (this.xLarge = new MediaQuery$1(xLarge));
          }
        }
        var Breakpoint_1$1 = Breakpoint$1;
        class Color$1 {
          constructor({ h: h, s: s, l: l, a: a }) {
            (this.h = h), (this.s = s), (this.l = l), (this.a = a);
          }
        }
        var Color_1$1 = Color$1;
        const {
          colorToCss: colorToCss$1,
          colorToLowFidelityCss: colorToLowFidelityCss$1,
        } = lib$1;
        Object.defineProperties(Color$1.prototype, {
          color: {
            get() {
              return colorToCss$1(this);
            },
          },
          lowFidelityColor: {
            get() {
              return colorToLowFidelityCss$1(this);
            },
          },
          colorStyle: {
            get() {
              return { color: this.color };
            },
          },
          backgroundColorStyle: {
            get() {
              return { backgroundColor: this.color };
            },
          },
          borderColorStyle: {
            get() {
              return { borderColor: this.color };
            },
          },
          outlineColorStyle: {
            get() {
              return { outlineColor: this.color };
            },
          },
        });
        class Swatch$1 {
          constructor({
            brand: brand = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            brandHighlight: brandHighlight = {
              h: 0.9803418803418804,
              s: 0.8823529411764705,
              l: 0.5666666666666667,
              a: 1,
            },
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            baseBlue: baseBlue = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            baseGreen: baseGreen = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            baseOrange: baseOrange = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            baseYellow: baseYellow = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            basePurple: basePurple = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            gray10: gray10 = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            gray20: gray20 = {
              h: 0.6296296296296298,
              s: 0.17647058823529388,
              l: 0.8999999999999999,
              a: 1,
            },
            gray30: gray30 = {
              h: 0.6309523809523808,
              s: 0.15217391304347835,
              l: 0.8196078431372549,
              a: 1,
            },
            gray40: gray40 = {
              h: 0.6315789473684211,
              s: 0.13286713286713278,
              l: 0.7196078431372549,
              a: 1,
            },
            gray50: gray50 = {
              h: 0.6225490196078431,
              s: 0.1666666666666666,
              l: 0.6,
              a: 1,
            },
            gray60: gray60 = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            gray70: gray70 = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            gray80: gray80 = {
              h: 0.6097560975609756,
              s: 0.2645161290322581,
              l: 0.303921568627451,
              a: 1,
            },
            gray90: gray90 = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            gray100: gray100 = {
              h: 0.6049382716049383,
              s: 0.4285714285714286,
              l: 0.12352941176470589,
              a: 1,
            },
            red10: red10 = {
              h: 0,
              s: 0.9000000000000002,
              l: 0.9607843137254902,
              a: 1,
            },
            red20: red20 = { h: 0, s: 0.882352941176471, l: 0.9, a: 1 },
            red30: red30 = {
              h: 0,
              s: 0.7931034482758624,
              l: 0.8294117647058823,
              a: 1,
            },
            red40: red40 = {
              h: 0,
              s: 0.8425196850393704,
              l: 0.7509803921568627,
              a: 1,
            },
            red50: red50 = {
              h: 0,
              s: 0.7883597883597881,
              l: 0.6294117647058823,
              a: 1,
            },
            red60: red60 = {
              h: 0,
              s: 0.746938775510204,
              l: 0.4803921568627451,
              a: 1,
            },
            red70: red70 = {
              h: 0,
              s: 0.8210526315789474,
              l: 0.37254901960784315,
              a: 1,
            },
            red80: red80 = {
              h: 0,
              s: 0.813953488372093,
              l: 0.2529411764705882,
              a: 1,
            },
            red90: red90 = {
              h: 0,
              s: 0.7411764705882352,
              l: 0.16666666666666669,
              a: 1,
            },
            red100: red100 = {
              h: 0,
              s: 0.6065573770491803,
              l: 0.11960784313725491,
              a: 1,
            },
            orange10: orange10 = {
              h: 0.0729166666666667,
              s: 0.8888888888888893,
              l: 0.9647058823529412,
              a: 1,
            },
            orange20: orange20 = {
              h: 0.07017543859649124,
              s: 0.934426229508197,
              l: 0.8803921568627451,
              a: 1,
            },
            orange30: orange30 = {
              h: 0.06296296296296296,
              s: 0.9,
              l: 0.803921568627451,
              a: 1,
            },
            orange40: orange40 = {
              h: 0.07142857142857141,
              s: 1,
              l: 0.7392156862745098,
              a: 1,
            },
            orange50: orange50 = {
              h: 0.07156862745098039,
              s: 0.9444444444444445,
              l: 0.6470588235294117,
              a: 1,
            },
            orange60: orange60 = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            orange70: orange70 = {
              h: 0.049999999999999996,
              s: 0.6956521739130436,
              l: 0.4509803921568627,
              a: 1,
            },
            orange80: orange80 = {
              h: 0.03561253561253561,
              s: 0.7090909090909091,
              l: 0.3235294117647059,
              a: 1,
            },
            orange90: orange90 = {
              h: 0.013020833333333334,
              s: 0.6153846153846154,
              l: 0.20392156862745098,
              a: 1,
            },
            orange100: orange100 = {
              h: 0.01360544217687075,
              s: 0.620253164556962,
              l: 0.15490196078431373,
              a: 1,
            },
            yellow10: yellow10 = {
              h: 0.13492063492063483,
              s: 1,
              l: 0.9588235294117646,
              a: 1,
            },
            yellow20: yellow20 = {
              h: 0.13596491228070176,
              s: 1,
              l: 0.8509803921568627,
              a: 1,
            },
            yellow30: yellow30 = {
              h: 0.1377952755905512,
              s: 1,
              l: 0.7509803921568627,
              a: 1,
            },
            yellow40: yellow40 = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            yellow50: yellow50 = {
              h: 0.13933333333333334,
              s: 1,
              l: 0.49019607843137253,
              a: 1,
            },
            yellow60: yellow60 = {
              h: 0.12814814814814815,
              s: 0.9414225941422594,
              l: 0.46862745098039216,
              a: 1,
            },
            yellow70: yellow70 = {
              h: 0.12199312714776633,
              s: 1,
              l: 0.3803921568627451,
              a: 1,
            },
            yellow80: yellow80 = {
              h: 0.1056547619047619,
              s: 0.7272727272727273,
              l: 0.3019607843137255,
              a: 1,
            },
            yellow90: yellow90 = {
              h: 0.0942982456140351,
              s: 0.8260869565217391,
              l: 0.1803921568627451,
              a: 1,
            },
            yellow100: yellow100 = {
              h: 0.08181818181818183,
              s: 0.8208955223880597,
              l: 0.13137254901960785,
              a: 1,
            },
            green10: green10 = {
              h: 0.3958333333333331,
              s: 0.8000000000000006,
              l: 0.9607843137254902,
              a: 1,
            },
            green20: green20 = {
              h: 0.39430894308943093,
              s: 0.8039215686274511,
              l: 0.8999999999999999,
              a: 1,
            },
            green30: green30 = {
              h: 0.3988095238095238,
              s: 0.8235294117647062,
              l: 0.8,
              a: 1,
            },
            green40: green40 = {
              h: 0.3963963963963964,
              s: 0.7254901960784312,
              l: 0.7,
              a: 1,
            },
            green50: green50 = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            green60: green60 = {
              h: 0.4006410256410256,
              s: 0.7959183673469389,
              l: 0.38431372549019605,
              a: 1,
            },
            green70: green70 = {
              h: 0.39999999999999997,
              s: 0.7971014492753624,
              l: 0.27058823529411763,
              a: 1,
            },
            green80: green80 = {
              h: 0.39999999999999997,
              s: 0.794392523364486,
              l: 0.20980392156862746,
              a: 1,
            },
            green90: green90 = {
              h: 0.39999999999999997,
              s: 0.6338028169014084,
              l: 0.1392156862745098,
              a: 1,
            },
            green100: green100 = {
              h: 0.39351851851851855,
              s: 0.7826086956521738,
              l: 0.09019607843137256,
              a: 1,
            },
            blue10: blue10 = {
              h: 0.5916666666666665,
              s: 1,
              l: 0.9607843137254901,
              a: 1,
            },
            blue20: blue20 = { h: 0.5882352941176471, s: 1, l: 0.9, a: 1 },
            blue30: blue30 = { h: 0.5816993464052288, s: 1, l: 0.8, a: 1 },
            blue40: blue40 = { h: 0.5827886710239651, s: 1, l: 0.7, a: 1 },
            blue50: blue50 = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            blue60: blue60 = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            blue70: blue70 = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            blue80: blue80 = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            blue90: blue90 = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            blue100: blue100 = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
            purple10: purple10 = {
              h: 0.7361111111111112,
              s: 0.6666666666666677,
              l: 0.9647058823529412,
              a: 1,
            },
            purple20: purple20 = {
              h: 0.7277777777777777,
              s: 0.75,
              l: 0.9215686274509804,
              a: 1,
            },
            purple30: purple30 = {
              h: 0.7307692307692308,
              s: 0.6842105263157894,
              l: 0.8137254901960784,
              a: 1,
            },
            purple40: purple40 = {
              h: 0.7316666666666666,
              s: 0.6410256410256409,
              l: 0.6941176470588235,
              a: 1,
            },
            purple50: purple50 = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            purple60: purple60 = {
              h: 0.7310838445807771,
              s: 0.6392156862745098,
              l: 0.5,
              a: 1,
            },
            purple70: purple70 = {
              h: 0.7319277108433736,
              s: 0.7830188679245282,
              l: 0.41568627450980394,
              a: 1,
            },
            purple80: purple80 = {
              h: 0.7327044025157233,
              s: 0.7910447761194029,
              l: 0.2627450980392157,
              a: 1,
            },
            purple90: purple90 = {
              h: 0.7307692307692307,
              s: 0.783132530120482,
              l: 0.1627450980392157,
              a: 1,
            },
            purple100: purple100 = {
              h: 0.7304964539007092,
              s: 0.8545454545454546,
              l: 0.10784313725490197,
              a: 1,
            },
          } = {}) {
            (this.brand = new Color$1(brand)),
              (this.brandHighlight = new Color$1(brandHighlight)),
              (this.white = new Color$1(white)),
              (this.baseBlue = new Color$1(baseBlue)),
              (this.baseGreen = new Color$1(baseGreen)),
              (this.baseOrange = new Color$1(baseOrange)),
              (this.baseYellow = new Color$1(baseYellow)),
              (this.basePurple = new Color$1(basePurple)),
              (this.gray10 = new Color$1(gray10)),
              (this.gray20 = new Color$1(gray20)),
              (this.gray30 = new Color$1(gray30)),
              (this.gray40 = new Color$1(gray40)),
              (this.gray50 = new Color$1(gray50)),
              (this.gray60 = new Color$1(gray60)),
              (this.gray70 = new Color$1(gray70)),
              (this.gray80 = new Color$1(gray80)),
              (this.gray90 = new Color$1(gray90)),
              (this.gray100 = new Color$1(gray100)),
              (this.red10 = new Color$1(red10)),
              (this.red20 = new Color$1(red20)),
              (this.red30 = new Color$1(red30)),
              (this.red40 = new Color$1(red40)),
              (this.red50 = new Color$1(red50)),
              (this.red60 = new Color$1(red60)),
              (this.red70 = new Color$1(red70)),
              (this.red80 = new Color$1(red80)),
              (this.red90 = new Color$1(red90)),
              (this.red100 = new Color$1(red100)),
              (this.orange10 = new Color$1(orange10)),
              (this.orange20 = new Color$1(orange20)),
              (this.orange30 = new Color$1(orange30)),
              (this.orange40 = new Color$1(orange40)),
              (this.orange50 = new Color$1(orange50)),
              (this.orange60 = new Color$1(orange60)),
              (this.orange70 = new Color$1(orange70)),
              (this.orange80 = new Color$1(orange80)),
              (this.orange90 = new Color$1(orange90)),
              (this.orange100 = new Color$1(orange100)),
              (this.yellow10 = new Color$1(yellow10)),
              (this.yellow20 = new Color$1(yellow20)),
              (this.yellow30 = new Color$1(yellow30)),
              (this.yellow40 = new Color$1(yellow40)),
              (this.yellow50 = new Color$1(yellow50)),
              (this.yellow60 = new Color$1(yellow60)),
              (this.yellow70 = new Color$1(yellow70)),
              (this.yellow80 = new Color$1(yellow80)),
              (this.yellow90 = new Color$1(yellow90)),
              (this.yellow100 = new Color$1(yellow100)),
              (this.green10 = new Color$1(green10)),
              (this.green20 = new Color$1(green20)),
              (this.green30 = new Color$1(green30)),
              (this.green40 = new Color$1(green40)),
              (this.green50 = new Color$1(green50)),
              (this.green60 = new Color$1(green60)),
              (this.green70 = new Color$1(green70)),
              (this.green80 = new Color$1(green80)),
              (this.green90 = new Color$1(green90)),
              (this.green100 = new Color$1(green100)),
              (this.blue10 = new Color$1(blue10)),
              (this.blue20 = new Color$1(blue20)),
              (this.blue30 = new Color$1(blue30)),
              (this.blue40 = new Color$1(blue40)),
              (this.blue50 = new Color$1(blue50)),
              (this.blue60 = new Color$1(blue60)),
              (this.blue70 = new Color$1(blue70)),
              (this.blue80 = new Color$1(blue80)),
              (this.blue90 = new Color$1(blue90)),
              (this.blue100 = new Color$1(blue100)),
              (this.purple10 = new Color$1(purple10)),
              (this.purple20 = new Color$1(purple20)),
              (this.purple30 = new Color$1(purple30)),
              (this.purple40 = new Color$1(purple40)),
              (this.purple50 = new Color$1(purple50)),
              (this.purple60 = new Color$1(purple60)),
              (this.purple70 = new Color$1(purple70)),
              (this.purple80 = new Color$1(purple80)),
              (this.purple90 = new Color$1(purple90)),
              (this.purple100 = new Color$1(purple100));
          }
        }
        var Swatch_1$1 = Swatch$1;
        class FontFamily$1 {
          constructor({
            text: text = "Colfax, Helvetica, Arial, sans-serif",
            heading: heading = "Colfax, Helvetica, Arial, sans-serif",
            quote: quote = "Bookmania-Regular, Georgia,Cambria, Times New Roman, Times, serif",
            code: code = "Fira Mono, Consolas, monospace",
          } = {}) {
            (this.text = text),
              (this.heading = heading),
              (this.quote = quote),
              (this.code = code);
          }
        }
        var FontFamily_1$1 = FontFamily$1;
        class Unit$1 {
          constructor({ pixels: pixels }) {
            this.pixels = pixels;
          }
        }
        var Unit_1$1 = Unit$1;
        const { unitToPx: unitToPx$1, unitToRem: unitToRem$1 } = cssUnit;
        Object.defineProperties(Unit$1.prototype, {
          px: {
            get() {
              return unitToPx$1(this);
            },
          },
          rem: {
            get() {
              return unitToRem$1(this);
            },
          },
        });
        class FontSize$1 {
          constructor({
            scale60: scale60 = { pixels: 12 },
            scale70: scale70 = { pixels: 13 },
            scale80: scale80 = { pixels: 14 },
            scale100: scale100 = { pixels: 16 },
            scale120: scale120 = { pixels: 18 },
            scale140: scale140 = { pixels: 20 },
            scale160: scale160 = { pixels: 22 },
            scale180: scale180 = { pixels: 24 },
            scale220: scale220 = { pixels: 28 },
            scale280: scale280 = { pixels: 34 },
            scale340: scale340 = { pixels: 40 },
            scale420: scale420 = { pixels: 48 },
            scale440: scale440 = { pixels: 50 },
            scale500: scale500 = { pixels: 56 },
            scale1020: scale1020 = { pixels: 108 },
          } = {}) {
            (this.scale60 = new Unit$1(scale60)),
              (this.scale70 = new Unit$1(scale70)),
              (this.scale80 = new Unit$1(scale80)),
              (this.scale100 = new Unit$1(scale100)),
              (this.scale120 = new Unit$1(scale120)),
              (this.scale140 = new Unit$1(scale140)),
              (this.scale160 = new Unit$1(scale160)),
              (this.scale180 = new Unit$1(scale180)),
              (this.scale220 = new Unit$1(scale220)),
              (this.scale280 = new Unit$1(scale280)),
              (this.scale340 = new Unit$1(scale340)),
              (this.scale420 = new Unit$1(scale420)),
              (this.scale440 = new Unit$1(scale440)),
              (this.scale500 = new Unit$1(scale500)),
              (this.scale1020 = new Unit$1(scale1020));
          }
        }
        var FontSize_1$1 = FontSize$1;
        class Weight$1 {
          constructor({ weight: weight }) {
            this.weight = weight;
          }
        }
        var Weight_1$1 = Weight$1;
        Object.defineProperties(Weight$1.prototype, {
          value: {
            get() {
              return this.weight;
            },
          },
        });
        class FontWeight$1 {
          constructor({
            thin: thin = { weight: 200 },
            light: light = { weight: 300 },
            regular: regular = { weight: 400 },
            medium: medium = { weight: 500 },
            semibold: semibold = { weight: 600 },
            bold: bold = { weight: 700 },
          } = {}) {
            (this.thin = new Weight$1(thin)),
              (this.light = new Weight$1(light)),
              (this.regular = new Weight$1(regular)),
              (this.medium = new Weight$1(medium)),
              (this.semibold = new Weight$1(semibold)),
              (this.bold = new Weight$1(bold));
          }
        }
        var FontWeight_1$1 = FontWeight$1;
        class Text$1 {
          constructor({
            primary: primary = {
              h: 0.6049382716049383,
              s: 0.4285714285714286,
              l: 0.12352941176470589,
              a: 1,
            },
            secondary: secondary = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            tertiary: tertiary = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            inversePrimary: inversePrimary = { h: 0, s: 0, l: 1, a: 1 },
          } = {}) {
            (this.primary = new Color$1(primary)),
              (this.secondary = new Color$1(secondary)),
              (this.tertiary = new Color$1(tertiary)),
              (this.inversePrimary = new Color$1(inversePrimary));
          }
        }
        var Text_1$1 = Text$1;
        class Background$1 {
          constructor({
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            blue: blue = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            light: light = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            darkest: darkest = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.white = new Color$1(white)),
              (this.blue = new Color$1(blue)),
              (this.light = new Color$1(light)),
              (this.darkest = new Color$1(darkest));
          }
        }
        var Background_1$1 = Background$1;
        class Point2D$1 {
          constructor({ x: x, y: y }) {
            (this.x = x), (this.y = y);
          }
        }
        var Point2D_1$1 = Point2D$1;
        class DropShadow$1 {
          constructor({ offset: offset, radius: radius, color: color }) {
            (this.offset = new Point2D$1(offset)),
              (this.radius = radius),
              (this.color = new Color$1(color));
          }
        }
        var DropShadow_1$1 = DropShadow$1;
        const {
          dropShadowToCss: dropShadowToCss$1,
          dropShadowToFilterCss: dropShadowToFilterCss$1,
        } = lib$1;
        Object.defineProperties(DropShadow$1.prototype, {
          boxShadow: {
            get() {
              return dropShadowToCss$1(this);
            },
          },
          textShadow: {
            get() {
              return dropShadowToCss$1(this);
            },
          },
          filter: {
            get() {
              return dropShadowToFilterCss$1(this);
            },
          },
          boxShadowStyle: {
            get() {
              return { boxShadow: this.boxShadow };
            },
          },
          textShadowStyle: {
            get() {
              return { textShadow: this.textShadow };
            },
          },
          filterStyle: {
            get() {
              return { filter: this.filter };
            },
          },
        });
        class Shadow$1 {
          constructor({
            card: card = {
              offset: { x: 0, y: 10 },
              radius: 18,
              color: {
                h: 0.6296296296296298,
                s: 0.17647058823529388,
                l: 0.8999999999999999,
                a: 0.5,
              },
            },
            navigation: navigation = {
              offset: { x: 0, y: 7 },
              radius: 11,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.19999999999999996,
              },
            },
            image: image = {
              offset: { x: 0, y: 2 },
              radius: 8,
              color: {
                h: 0.6296296296296298,
                s: 0.17647058823529388,
                l: 0.8999999999999999,
                a: 0.5,
              },
            },
            large: large = {
              offset: { x: 0, y: 10 },
              radius: 29,
              color: {
                h: 0.6097560975609756,
                s: 0.2645161290322581,
                l: 0.303921568627451,
                a: 0.33999999999999997,
              },
            },
            inverse: inverse = {
              offset: { x: 0, y: 6 },
              radius: 8,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.12,
              },
            },
          } = {}) {
            (this.card = new DropShadow$1(card)),
              (this.navigation = new DropShadow$1(navigation)),
              (this.image = new DropShadow$1(image)),
              (this.large = new DropShadow$1(large)),
              (this.inverse = new DropShadow$1(inverse));
          }
        }
        var Shadow_1$1 = Shadow$1;
        class GradientStop$1 {
          constructor({ position: position, color: color }) {
            (this.position = position), (this.color = new Color$1(color));
          }
        }
        var GradientStop_1$1 = GradientStop$1;
        class LinearGradient$1 {
          constructor({ stops: stops, start: start, end: end }) {
            (this.stops = stops.map((value1) => new GradientStop$1(value1))),
              (this.start = new Point2D$1(start)),
              (this.end = new Point2D$1(end));
          }
        }
        var LinearGradient_1$1 = LinearGradient$1;
        const { linearGradientToCss: linearGradientToCss$1 } = lib$1;
        Object.defineProperties(LinearGradient$1.prototype, {
          linearGradient: {
            get() {
              return linearGradientToCss$1(this);
            },
          },
          backgroundImageStyle: {
            get() {
              return { backgroundImage: this.linearGradient };
            },
          },
          backgroundStyle: {
            get() {
              return { background: this.linearGradient };
            },
          },
        });
        class Gradient$1 {
          constructor({
            blue180: blue180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.09999999999999998,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.6,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            lightBlue180: lightBlue180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.09999999999999998,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.30000000000000004,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blue0: blue0 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.09999999999999998,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5916666666666665,
                    s: 1,
                    l: 0.9607843137254901,
                    a: 0.8,
                  },
                },
              ],
              start: { x: 0.5, y: 1 },
              end: { x: 0.5, y: 0 },
            },
          } = {}) {
            (this.blue180 = new LinearGradient$1(blue180)),
              (this.lightBlue180 = new LinearGradient$1(lightBlue180)),
              (this.blue0 = new LinearGradient$1(blue0));
          }
        }
        var Gradient_1$1 = Gradient$1;
        class Button$1 {
          constructor({
            inverseText: inverseText = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            inverseHoverBg: inverseHoverBg = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            inverseFocusBg: inverseFocusBg = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
          } = {}) {
            (this.inverseText = new Color$1(inverseText)),
              (this.inverseHoverBg = new Color$1(inverseHoverBg)),
              (this.inverseFocusBg = new Color$1(inverseFocusBg));
          }
        }
        var Button_1$1 = Button$1;
        class SendGridDesignTokens {
          constructor({
            breakpoint: breakpoint = {},
            swatch: swatch = {},
            fontFamily: fontFamily = {},
            fontSize: fontSize = {},
            fontWeight: fontWeight = {},
            text: text = {},
            background: background = {},
            shadow: shadow = {},
            gradient: gradient = {},
            button: button = {},
          } = {}) {
            (this.breakpoint = new Breakpoint$1(breakpoint)),
              (this.swatch = new Swatch$1(swatch)),
              (this.fontFamily = new FontFamily$1(fontFamily)),
              (this.fontSize = new FontSize$1(fontSize)),
              (this.fontWeight = new FontWeight$1(fontWeight)),
              (this.text = new Text$1(text)),
              (this.background = new Background$1(background)),
              (this.shadow = new Shadow$1(shadow)),
              (this.gradient = new Gradient$1(gradient)),
              (this.button = new Button$1(button));
          }
        }
        Object.defineProperty(SendGridDesignTokens, "name", {
          value: "SendGridDesignTokens",
        });
        var SendGridDesignTokens_1 = SendGridDesignTokens;
        (dist$1.Diez = Diez_1$1),
          (dist$1.MediaQuery = MediaQuery_1$1),
          (dist$1.Breakpoint = Breakpoint_1$1),
          (dist$1.Color = Color_1$1),
          (dist$1.Swatch = Swatch_1$1),
          (dist$1.FontFamily = FontFamily_1$1),
          (dist$1.Unit = Unit_1$1),
          (dist$1.FontSize = FontSize_1$1),
          (dist$1.Weight = Weight_1$1),
          (dist$1.FontWeight = FontWeight_1$1),
          (dist$1.Text = Text_1$1),
          (dist$1.Background = Background_1$1),
          (dist$1.Point2D = Point2D_1$1),
          (dist$1.DropShadow = DropShadow_1$1),
          (dist$1.Shadow = Shadow_1$1),
          (dist$1.GradientStop = GradientStop_1$1),
          (dist$1.LinearGradient = LinearGradient_1$1),
          (dist$1.Gradient = Gradient_1$1),
          (dist$1.Button = Button_1$1),
          (dist$1.SendGridDesignTokens = SendGridDesignTokens_1);
        const SendGridDesignTokens$1 = dist$1.SendGridDesignTokens;
        var dist$2 = {};
        (void 0 !== process && process) || (process = { env: {} });
        const Environment$2 = {
            serverUrl:
              Object({ NODE_ENV: "production", NODE_PATH: "", PUBLIC_URL: "" })
                .DIEZ_SERVER_URL || "/diez",
            isHot: Object({
              NODE_ENV: "production",
              NODE_PATH: "",
              PUBLIC_URL: "",
            }).DIEZ_IS_HOT,
          },
          diezHTMLExtensions$2 = [];
        var Diez_1$2 = class Diez$2 {
          constructor(componentType) {
            "undefined" != typeof document
              ? (this.iframe = document.createElement("iframe"))
              : (this.iframe = {}),
              (this.componentType = componentType),
              (this.component = new this.componentType()),
              (this.subscribers = []);
          }
          static applyHTMLExtensions() {
            diezHTMLExtensions$2.forEach((extension) => {
              extension instanceof Function && extension();
            });
          }
          broadcast() {
            for (const subscriber of this.subscribers)
              subscriber(this.component);
          }
          subscribe(subscriber) {
            this.subscribers.push(subscriber);
          }
          attach(subscriber) {
            subscriber(this.component),
              Environment$2.isHot &&
                (this.subscribe(subscriber),
                this.iframe.contentWindow ||
                  ((this.iframe.src = `${Environment$2.serverUrl}/components/${this.component.constructor.name}`),
                  (this.iframe.width = "0"),
                  (this.iframe.height = "0"),
                  (this.iframe.style.display = "none"),
                  "undefined" != typeof document &&
                    (document.body.appendChild(this.iframe),
                    window.addEventListener("message", (event) => {
                      event.source === this.iframe.contentWindow &&
                        event.origin.startsWith(Environment$2.serverUrl) &&
                        ((this.component = new this.componentType(
                          JSON.parse(event.data)
                        )),
                        this.broadcast());
                    }))));
          }
        };
        class MediaQuery$2 {
          constructor({
            operator: operator,
            type: type,
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minAspectRatio: minAspectRatio,
            maxAspectRatio: maxAspectRatio,
            minResolution: minResolution,
            maxResolution: maxResolution,
            orientation: orientation,
            displayMode: displayMode,
            prefersColorScheme: prefersColorScheme,
            prefersReducedMotion: prefersReducedMotion,
          }) {
            (this.operator = operator),
              (this.type = type),
              (this.minWidth = minWidth),
              (this.maxWidth = maxWidth),
              (this.minHeight = minHeight),
              (this.maxHeight = maxHeight),
              (this.minAspectRatio = minAspectRatio),
              (this.maxAspectRatio = maxAspectRatio),
              (this.minResolution = minResolution),
              (this.maxResolution = maxResolution),
              (this.orientation = orientation),
              (this.displayMode = displayMode),
              (this.prefersColorScheme = prefersColorScheme),
              (this.prefersReducedMotion = prefersReducedMotion);
          }
        }
        var MediaQuery_1$2 = MediaQuery$2;
        const { queryToCss: queryToCss$2 } = cssMediaQuery;
        Object.defineProperties(MediaQuery$2.prototype, {
          mediaQuery: {
            get() {
              return queryToCss$2(this);
            },
          },
        });
        class Breakpoint$2 {
          constructor({
            small: small = {
              operator: "none",
              type: "screen",
              minWidth: 360,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            medium: medium = {
              operator: "none",
              type: "screen",
              minWidth: 768,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            large: large = {
              operator: "none",
              type: "screen",
              minWidth: 1024,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            xLarge: xLarge = {
              operator: "none",
              type: "screen",
              minWidth: 1200,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
          } = {}) {
            (this.small = new MediaQuery$2(small)),
              (this.medium = new MediaQuery$2(medium)),
              (this.large = new MediaQuery$2(large)),
              (this.xLarge = new MediaQuery$2(xLarge));
          }
        }
        var Breakpoint_1$2 = Breakpoint$2;
        class Color$2 {
          constructor({ h: h, s: s, l: l, a: a }) {
            (this.h = h), (this.s = s), (this.l = l), (this.a = a);
          }
        }
        var Color_1$2 = Color$2;
        const {
          colorToCss: colorToCss$2,
          colorToLowFidelityCss: colorToLowFidelityCss$2,
        } = lib$1;
        Object.defineProperties(Color$2.prototype, {
          color: {
            get() {
              return colorToCss$2(this);
            },
          },
          lowFidelityColor: {
            get() {
              return colorToLowFidelityCss$2(this);
            },
          },
          colorStyle: {
            get() {
              return { color: this.color };
            },
          },
          backgroundColorStyle: {
            get() {
              return { backgroundColor: this.color };
            },
          },
          borderColorStyle: {
            get() {
              return { borderColor: this.color };
            },
          },
          outlineColorStyle: {
            get() {
              return { outlineColor: this.color };
            },
          },
        });
        class Swatch$2 {
          constructor({
            brand: brand = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            brandHighlight: brandHighlight = {
              h: 0.9803418803418804,
              s: 0.8823529411764705,
              l: 0.5666666666666667,
              a: 1,
            },
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            baseBlue: baseBlue = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            baseGreen: baseGreen = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            baseOrange: baseOrange = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            baseYellow: baseYellow = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            basePurple: basePurple = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            gray10: gray10 = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            gray20: gray20 = {
              h: 0.6296296296296298,
              s: 0.17647058823529388,
              l: 0.8999999999999999,
              a: 1,
            },
            gray30: gray30 = {
              h: 0.6309523809523808,
              s: 0.15217391304347835,
              l: 0.8196078431372549,
              a: 1,
            },
            gray40: gray40 = {
              h: 0.6315789473684211,
              s: 0.13286713286713278,
              l: 0.7196078431372549,
              a: 1,
            },
            gray50: gray50 = {
              h: 0.6225490196078431,
              s: 0.1666666666666666,
              l: 0.6,
              a: 1,
            },
            gray60: gray60 = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            gray70: gray70 = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            gray80: gray80 = {
              h: 0.6097560975609756,
              s: 0.2645161290322581,
              l: 0.303921568627451,
              a: 1,
            },
            gray90: gray90 = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            gray100: gray100 = {
              h: 0.6049382716049383,
              s: 0.4285714285714286,
              l: 0.12352941176470589,
              a: 1,
            },
            red10: red10 = {
              h: 0,
              s: 0.9000000000000002,
              l: 0.9607843137254902,
              a: 1,
            },
            red20: red20 = { h: 0, s: 0.882352941176471, l: 0.9, a: 1 },
            red30: red30 = {
              h: 0,
              s: 0.7931034482758624,
              l: 0.8294117647058823,
              a: 1,
            },
            red40: red40 = {
              h: 0,
              s: 0.8425196850393704,
              l: 0.7509803921568627,
              a: 1,
            },
            red50: red50 = {
              h: 0,
              s: 0.7883597883597881,
              l: 0.6294117647058823,
              a: 1,
            },
            red60: red60 = {
              h: 0,
              s: 0.746938775510204,
              l: 0.4803921568627451,
              a: 1,
            },
            red70: red70 = {
              h: 0,
              s: 0.8210526315789474,
              l: 0.37254901960784315,
              a: 1,
            },
            red80: red80 = {
              h: 0,
              s: 0.813953488372093,
              l: 0.2529411764705882,
              a: 1,
            },
            red90: red90 = {
              h: 0,
              s: 0.7411764705882352,
              l: 0.16666666666666669,
              a: 1,
            },
            red100: red100 = {
              h: 0,
              s: 0.6065573770491803,
              l: 0.11960784313725491,
              a: 1,
            },
            orange10: orange10 = {
              h: 0.0729166666666667,
              s: 0.8888888888888893,
              l: 0.9647058823529412,
              a: 1,
            },
            orange20: orange20 = {
              h: 0.07017543859649124,
              s: 0.934426229508197,
              l: 0.8803921568627451,
              a: 1,
            },
            orange30: orange30 = {
              h: 0.06296296296296296,
              s: 0.9,
              l: 0.803921568627451,
              a: 1,
            },
            orange40: orange40 = {
              h: 0.07142857142857141,
              s: 1,
              l: 0.7392156862745098,
              a: 1,
            },
            orange50: orange50 = {
              h: 0.07156862745098039,
              s: 0.9444444444444445,
              l: 0.6470588235294117,
              a: 1,
            },
            orange60: orange60 = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            orange70: orange70 = {
              h: 0.049999999999999996,
              s: 0.6956521739130436,
              l: 0.4509803921568627,
              a: 1,
            },
            orange80: orange80 = {
              h: 0.03561253561253561,
              s: 0.7090909090909091,
              l: 0.3235294117647059,
              a: 1,
            },
            orange90: orange90 = {
              h: 0.013020833333333334,
              s: 0.6153846153846154,
              l: 0.20392156862745098,
              a: 1,
            },
            orange100: orange100 = {
              h: 0.01360544217687075,
              s: 0.620253164556962,
              l: 0.15490196078431373,
              a: 1,
            },
            yellow10: yellow10 = {
              h: 0.13492063492063483,
              s: 1,
              l: 0.9588235294117646,
              a: 1,
            },
            yellow20: yellow20 = {
              h: 0.13596491228070176,
              s: 1,
              l: 0.8509803921568627,
              a: 1,
            },
            yellow30: yellow30 = {
              h: 0.1377952755905512,
              s: 1,
              l: 0.7509803921568627,
              a: 1,
            },
            yellow40: yellow40 = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            yellow50: yellow50 = {
              h: 0.13933333333333334,
              s: 1,
              l: 0.49019607843137253,
              a: 1,
            },
            yellow60: yellow60 = {
              h: 0.12814814814814815,
              s: 0.9414225941422594,
              l: 0.46862745098039216,
              a: 1,
            },
            yellow70: yellow70 = {
              h: 0.12199312714776633,
              s: 1,
              l: 0.3803921568627451,
              a: 1,
            },
            yellow80: yellow80 = {
              h: 0.1056547619047619,
              s: 0.7272727272727273,
              l: 0.3019607843137255,
              a: 1,
            },
            yellow90: yellow90 = {
              h: 0.0942982456140351,
              s: 0.8260869565217391,
              l: 0.1803921568627451,
              a: 1,
            },
            yellow100: yellow100 = {
              h: 0.08181818181818183,
              s: 0.8208955223880597,
              l: 0.13137254901960785,
              a: 1,
            },
            green10: green10 = {
              h: 0.3958333333333331,
              s: 0.8000000000000006,
              l: 0.9607843137254902,
              a: 1,
            },
            green20: green20 = {
              h: 0.39430894308943093,
              s: 0.8039215686274511,
              l: 0.8999999999999999,
              a: 1,
            },
            green30: green30 = {
              h: 0.3988095238095238,
              s: 0.8235294117647062,
              l: 0.8,
              a: 1,
            },
            green40: green40 = {
              h: 0.3963963963963964,
              s: 0.7254901960784312,
              l: 0.7,
              a: 1,
            },
            green50: green50 = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            green60: green60 = {
              h: 0.4006410256410256,
              s: 0.7959183673469389,
              l: 0.38431372549019605,
              a: 1,
            },
            green70: green70 = {
              h: 0.39999999999999997,
              s: 0.7971014492753624,
              l: 0.27058823529411763,
              a: 1,
            },
            green80: green80 = {
              h: 0.39999999999999997,
              s: 0.794392523364486,
              l: 0.20980392156862746,
              a: 1,
            },
            green90: green90 = {
              h: 0.39999999999999997,
              s: 0.6338028169014084,
              l: 0.1392156862745098,
              a: 1,
            },
            green100: green100 = {
              h: 0.39351851851851855,
              s: 0.7826086956521738,
              l: 0.09019607843137256,
              a: 1,
            },
            blue10: blue10 = {
              h: 0.5916666666666665,
              s: 1,
              l: 0.9607843137254901,
              a: 1,
            },
            blue20: blue20 = { h: 0.5882352941176471, s: 1, l: 0.9, a: 1 },
            blue30: blue30 = { h: 0.5816993464052288, s: 1, l: 0.8, a: 1 },
            blue40: blue40 = { h: 0.5827886710239651, s: 1, l: 0.7, a: 1 },
            blue50: blue50 = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            blue60: blue60 = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            blue70: blue70 = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            blue80: blue80 = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            blue90: blue90 = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            blue100: blue100 = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
            purple10: purple10 = {
              h: 0.7361111111111112,
              s: 0.6666666666666677,
              l: 0.9647058823529412,
              a: 1,
            },
            purple20: purple20 = {
              h: 0.7277777777777777,
              s: 0.75,
              l: 0.9215686274509804,
              a: 1,
            },
            purple30: purple30 = {
              h: 0.7307692307692308,
              s: 0.6842105263157894,
              l: 0.8137254901960784,
              a: 1,
            },
            purple40: purple40 = {
              h: 0.7316666666666666,
              s: 0.6410256410256409,
              l: 0.6941176470588235,
              a: 1,
            },
            purple50: purple50 = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            purple60: purple60 = {
              h: 0.7310838445807771,
              s: 0.6392156862745098,
              l: 0.5,
              a: 1,
            },
            purple70: purple70 = {
              h: 0.7319277108433736,
              s: 0.7830188679245282,
              l: 0.41568627450980394,
              a: 1,
            },
            purple80: purple80 = {
              h: 0.7327044025157233,
              s: 0.7910447761194029,
              l: 0.2627450980392157,
              a: 1,
            },
            purple90: purple90 = {
              h: 0.7307692307692307,
              s: 0.783132530120482,
              l: 0.1627450980392157,
              a: 1,
            },
            purple100: purple100 = {
              h: 0.7304964539007092,
              s: 0.8545454545454546,
              l: 0.10784313725490197,
              a: 1,
            },
          } = {}) {
            (this.brand = new Color$2(brand)),
              (this.brandHighlight = new Color$2(brandHighlight)),
              (this.white = new Color$2(white)),
              (this.baseBlue = new Color$2(baseBlue)),
              (this.baseGreen = new Color$2(baseGreen)),
              (this.baseOrange = new Color$2(baseOrange)),
              (this.baseYellow = new Color$2(baseYellow)),
              (this.basePurple = new Color$2(basePurple)),
              (this.gray10 = new Color$2(gray10)),
              (this.gray20 = new Color$2(gray20)),
              (this.gray30 = new Color$2(gray30)),
              (this.gray40 = new Color$2(gray40)),
              (this.gray50 = new Color$2(gray50)),
              (this.gray60 = new Color$2(gray60)),
              (this.gray70 = new Color$2(gray70)),
              (this.gray80 = new Color$2(gray80)),
              (this.gray90 = new Color$2(gray90)),
              (this.gray100 = new Color$2(gray100)),
              (this.red10 = new Color$2(red10)),
              (this.red20 = new Color$2(red20)),
              (this.red30 = new Color$2(red30)),
              (this.red40 = new Color$2(red40)),
              (this.red50 = new Color$2(red50)),
              (this.red60 = new Color$2(red60)),
              (this.red70 = new Color$2(red70)),
              (this.red80 = new Color$2(red80)),
              (this.red90 = new Color$2(red90)),
              (this.red100 = new Color$2(red100)),
              (this.orange10 = new Color$2(orange10)),
              (this.orange20 = new Color$2(orange20)),
              (this.orange30 = new Color$2(orange30)),
              (this.orange40 = new Color$2(orange40)),
              (this.orange50 = new Color$2(orange50)),
              (this.orange60 = new Color$2(orange60)),
              (this.orange70 = new Color$2(orange70)),
              (this.orange80 = new Color$2(orange80)),
              (this.orange90 = new Color$2(orange90)),
              (this.orange100 = new Color$2(orange100)),
              (this.yellow10 = new Color$2(yellow10)),
              (this.yellow20 = new Color$2(yellow20)),
              (this.yellow30 = new Color$2(yellow30)),
              (this.yellow40 = new Color$2(yellow40)),
              (this.yellow50 = new Color$2(yellow50)),
              (this.yellow60 = new Color$2(yellow60)),
              (this.yellow70 = new Color$2(yellow70)),
              (this.yellow80 = new Color$2(yellow80)),
              (this.yellow90 = new Color$2(yellow90)),
              (this.yellow100 = new Color$2(yellow100)),
              (this.green10 = new Color$2(green10)),
              (this.green20 = new Color$2(green20)),
              (this.green30 = new Color$2(green30)),
              (this.green40 = new Color$2(green40)),
              (this.green50 = new Color$2(green50)),
              (this.green60 = new Color$2(green60)),
              (this.green70 = new Color$2(green70)),
              (this.green80 = new Color$2(green80)),
              (this.green90 = new Color$2(green90)),
              (this.green100 = new Color$2(green100)),
              (this.blue10 = new Color$2(blue10)),
              (this.blue20 = new Color$2(blue20)),
              (this.blue30 = new Color$2(blue30)),
              (this.blue40 = new Color$2(blue40)),
              (this.blue50 = new Color$2(blue50)),
              (this.blue60 = new Color$2(blue60)),
              (this.blue70 = new Color$2(blue70)),
              (this.blue80 = new Color$2(blue80)),
              (this.blue90 = new Color$2(blue90)),
              (this.blue100 = new Color$2(blue100)),
              (this.purple10 = new Color$2(purple10)),
              (this.purple20 = new Color$2(purple20)),
              (this.purple30 = new Color$2(purple30)),
              (this.purple40 = new Color$2(purple40)),
              (this.purple50 = new Color$2(purple50)),
              (this.purple60 = new Color$2(purple60)),
              (this.purple70 = new Color$2(purple70)),
              (this.purple80 = new Color$2(purple80)),
              (this.purple90 = new Color$2(purple90)),
              (this.purple100 = new Color$2(purple100));
          }
        }
        var Swatch_1$2 = Swatch$2;
        class FontFamily$2 {
          constructor({
            text: text = "Whitney SSm A, Whitney SSm B, Helvetica Neue, Helvetica, Arial, sans-serif",
            heading: heading = "Whitney Cond SSm A, Whitney Cond SSm B, sans-serif",
            quote: quote = "Surveyor SSm A, Surveyor SSm B",
            code: code = "Fira Mono, Consolas, monospace",
          } = {}) {
            (this.text = text),
              (this.heading = heading),
              (this.quote = quote),
              (this.code = code);
          }
        }
        var FontFamily_1$2 = FontFamily$2;
        class Unit$2 {
          constructor({ pixels: pixels }) {
            this.pixels = pixels;
          }
        }
        var Unit_1$2 = Unit$2;
        const { unitToPx: unitToPx$2, unitToRem: unitToRem$2 } = cssUnit;
        Object.defineProperties(Unit$2.prototype, {
          px: {
            get() {
              return unitToPx$2(this);
            },
          },
          rem: {
            get() {
              return unitToRem$2(this);
            },
          },
        });
        class FontSize$2 {
          constructor({
            scale60: scale60 = { pixels: 12 },
            scale70: scale70 = { pixels: 13 },
            scale80: scale80 = { pixels: 14 },
            scale100: scale100 = { pixels: 16 },
            scale120: scale120 = { pixels: 18 },
            scale140: scale140 = { pixels: 20 },
            scale160: scale160 = { pixels: 22 },
            scale180: scale180 = { pixels: 24 },
            scale220: scale220 = { pixels: 28 },
            scale280: scale280 = { pixels: 34 },
            scale340: scale340 = { pixels: 40 },
            scale420: scale420 = { pixels: 48 },
            scale440: scale440 = { pixels: 50 },
            scale500: scale500 = { pixels: 56 },
            scale1020: scale1020 = { pixels: 108 },
          } = {}) {
            (this.scale60 = new Unit$2(scale60)),
              (this.scale70 = new Unit$2(scale70)),
              (this.scale80 = new Unit$2(scale80)),
              (this.scale100 = new Unit$2(scale100)),
              (this.scale120 = new Unit$2(scale120)),
              (this.scale140 = new Unit$2(scale140)),
              (this.scale160 = new Unit$2(scale160)),
              (this.scale180 = new Unit$2(scale180)),
              (this.scale220 = new Unit$2(scale220)),
              (this.scale280 = new Unit$2(scale280)),
              (this.scale340 = new Unit$2(scale340)),
              (this.scale420 = new Unit$2(scale420)),
              (this.scale440 = new Unit$2(scale440)),
              (this.scale500 = new Unit$2(scale500)),
              (this.scale1020 = new Unit$2(scale1020));
          }
        }
        var FontSize_1$2 = FontSize$2;
        class Weight$2 {
          constructor({ weight: weight }) {
            this.weight = weight;
          }
        }
        var Weight_1$2 = Weight$2;
        Object.defineProperties(Weight$2.prototype, {
          value: {
            get() {
              return this.weight;
            },
          },
        });
        class FontWeight$2 {
          constructor({
            thin: thin = { weight: 200 },
            light: light = { weight: 300 },
            regular: regular = { weight: 400 },
            medium: medium = { weight: 500 },
            semibold: semibold = { weight: 600 },
            bold: bold = { weight: 700 },
          } = {}) {
            (this.thin = new Weight$2(thin)),
              (this.light = new Weight$2(light)),
              (this.regular = new Weight$2(regular)),
              (this.medium = new Weight$2(medium)),
              (this.semibold = new Weight$2(semibold)),
              (this.bold = new Weight$2(bold));
          }
        }
        var FontWeight_1$2 = FontWeight$2;
        class Background$2 {
          constructor({
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            blue: blue = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            light: light = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            darkest: darkest = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.white = new Color$2(white)),
              (this.blue = new Color$2(blue)),
              (this.light = new Color$2(light)),
              (this.darkest = new Color$2(darkest));
          }
        }
        var Background_1$2 = Background$2;
        class Text$2 {
          constructor({
            primary: primary = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            secondary: secondary = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            tertiary: tertiary = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            inversePrimary: inversePrimary = { h: 0, s: 0, l: 1, a: 1 },
          } = {}) {
            (this.primary = new Color$2(primary)),
              (this.secondary = new Color$2(secondary)),
              (this.tertiary = new Color$2(tertiary)),
              (this.inversePrimary = new Color$2(inversePrimary));
          }
        }
        var Text_1$2 = Text$2;
        class Point2D$2 {
          constructor({ x: x, y: y }) {
            (this.x = x), (this.y = y);
          }
        }
        var Point2D_1$2 = Point2D$2;
        class DropShadow$2 {
          constructor({ offset: offset, radius: radius, color: color }) {
            (this.offset = new Point2D$2(offset)),
              (this.radius = radius),
              (this.color = new Color$2(color));
          }
        }
        var DropShadow_1$2 = DropShadow$2;
        const {
          dropShadowToCss: dropShadowToCss$2,
          dropShadowToFilterCss: dropShadowToFilterCss$2,
        } = lib$1;
        Object.defineProperties(DropShadow$2.prototype, {
          boxShadow: {
            get() {
              return dropShadowToCss$2(this);
            },
          },
          textShadow: {
            get() {
              return dropShadowToCss$2(this);
            },
          },
          filter: {
            get() {
              return dropShadowToFilterCss$2(this);
            },
          },
          boxShadowStyle: {
            get() {
              return { boxShadow: this.boxShadow };
            },
          },
          textShadowStyle: {
            get() {
              return { textShadow: this.textShadow };
            },
          },
          filterStyle: {
            get() {
              return { filter: this.filter };
            },
          },
        });
        class Shadow$2 {
          constructor({
            card: card = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
            navigation: navigation = {
              offset: { x: 0, y: 14 },
              radius: 25,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.12,
              },
            },
            image: image = {
              offset: { x: 0, y: 4 },
              radius: 16,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            large: large = {
              offset: { x: 0, y: 16 },
              radius: 60,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            inverse: inverse = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
          } = {}) {
            (this.card = new DropShadow$2(card)),
              (this.navigation = new DropShadow$2(navigation)),
              (this.image = new DropShadow$2(image)),
              (this.large = new DropShadow$2(large)),
              (this.inverse = new DropShadow$2(inverse));
          }
        }
        var Shadow_1$2 = Shadow$2;
        class GradientStop$2 {
          constructor({ position: position, color: color }) {
            (this.position = position), (this.color = new Color$2(color));
          }
        }
        var GradientStop_1$2 = GradientStop$2;
        class LinearGradient$2 {
          constructor({ stops: stops, start: start, end: end }) {
            (this.stops = stops.map((value1) => new GradientStop$2(value1))),
              (this.start = new Point2D$2(start)),
              (this.end = new Point2D$2(end));
          }
        }
        var LinearGradient_1$2 = LinearGradient$2;
        const { linearGradientToCss: linearGradientToCss$2 } = lib$1;
        Object.defineProperties(LinearGradient$2.prototype, {
          linearGradient: {
            get() {
              return linearGradientToCss$2(this);
            },
          },
          backgroundImageStyle: {
            get() {
              return { backgroundImage: this.linearGradient };
            },
          },
          backgroundStyle: {
            get() {
              return { background: this.linearGradient };
            },
          },
        });
        class Gradient$2 {
          constructor({
            redHero: redHero = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blueHero: blueHero = {
              stops: [
                {
                  position: 0,
                  color: { h: 0.5751633986928105, s: 1, l: 0.5, a: 0 },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5751633986928105,
                    s: 1,
                    l: 0.5,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            red180: red180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            orange180: orange180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            green180: green180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blue180: blue180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            purple180: purple180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            darkGray: darkGray = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.19999999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.8,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            lightRedBlue: lightRedBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.5,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.5,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            redBlue: redBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.8,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.7,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
          } = {}) {
            (this.redHero = new LinearGradient$2(redHero)),
              (this.blueHero = new LinearGradient$2(blueHero)),
              (this.red180 = new LinearGradient$2(red180)),
              (this.orange180 = new LinearGradient$2(orange180)),
              (this.green180 = new LinearGradient$2(green180)),
              (this.blue180 = new LinearGradient$2(blue180)),
              (this.purple180 = new LinearGradient$2(purple180)),
              (this.darkGray = new LinearGradient$2(darkGray)),
              (this.lightRedBlue = new LinearGradient$2(lightRedBlue)),
              (this.redBlue = new LinearGradient$2(redBlue));
          }
        }
        var Gradient_1$2 = Gradient$2;
        class Button$2 {
          constructor({
            inverseText: inverseText = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            inverseHoverBg: inverseHoverBg = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            inverseFocusBg: inverseFocusBg = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.inverseText = new Color$2(inverseText)),
              (this.inverseHoverBg = new Color$2(inverseHoverBg)),
              (this.inverseFocusBg = new Color$2(inverseFocusBg));
          }
        }
        var Button_1$2 = Button$2;
        class SignalDesignTokens {
          constructor({
            breakpoint: breakpoint = {},
            swatch: swatch = {},
            fontFamily: fontFamily = {},
            fontSize: fontSize = {},
            fontWeight: fontWeight = {},
            background: background = {},
            text: text = {},
            shadow: shadow = {},
            gradient: gradient = {},
            button: button = {},
          } = {}) {
            (this.breakpoint = new Breakpoint$2(breakpoint)),
              (this.swatch = new Swatch$2(swatch)),
              (this.fontFamily = new FontFamily$2(fontFamily)),
              (this.fontSize = new FontSize$2(fontSize)),
              (this.fontWeight = new FontWeight$2(fontWeight)),
              (this.background = new Background$2(background)),
              (this.text = new Text$2(text)),
              (this.shadow = new Shadow$2(shadow)),
              (this.gradient = new Gradient$2(gradient)),
              (this.button = new Button$2(button));
          }
        }
        Object.defineProperty(SignalDesignTokens, "name", {
          value: "SignalDesignTokens",
        });
        var SignalDesignTokens_1 = SignalDesignTokens;
        (dist$2.Diez = Diez_1$2),
          (dist$2.MediaQuery = MediaQuery_1$2),
          (dist$2.Breakpoint = Breakpoint_1$2),
          (dist$2.Color = Color_1$2),
          (dist$2.Swatch = Swatch_1$2),
          (dist$2.FontFamily = FontFamily_1$2),
          (dist$2.Unit = Unit_1$2),
          (dist$2.FontSize = FontSize_1$2),
          (dist$2.Weight = Weight_1$2),
          (dist$2.FontWeight = FontWeight_1$2),
          (dist$2.Background = Background_1$2),
          (dist$2.Text = Text_1$2),
          (dist$2.Point2D = Point2D_1$2),
          (dist$2.DropShadow = DropShadow_1$2),
          (dist$2.Shadow = Shadow_1$2),
          (dist$2.GradientStop = GradientStop_1$2),
          (dist$2.LinearGradient = LinearGradient_1$2),
          (dist$2.Gradient = Gradient_1$2),
          (dist$2.Button = Button_1$2),
          (dist$2.SignalDesignTokens = SignalDesignTokens_1);
        const SignalDesignTokens$1 = dist$2.SignalDesignTokens;
        var dist$3 = {};
        (void 0 !== process && process) || (process = { env: {} });
        const Environment$3 = {
            serverUrl:
              Object({ NODE_ENV: "production", NODE_PATH: "", PUBLIC_URL: "" })
                .DIEZ_SERVER_URL || "/diez",
            isHot: Object({
              NODE_ENV: "production",
              NODE_PATH: "",
              PUBLIC_URL: "",
            }).DIEZ_IS_HOT,
          },
          diezHTMLExtensions$3 = [];
        var Diez_1$3 = class Diez$3 {
          constructor(componentType) {
            "undefined" != typeof document
              ? (this.iframe = document.createElement("iframe"))
              : (this.iframe = {}),
              (this.componentType = componentType),
              (this.component = new this.componentType()),
              (this.subscribers = []);
          }
          static applyHTMLExtensions() {
            diezHTMLExtensions$3.forEach((extension) => {
              extension instanceof Function && extension();
            });
          }
          broadcast() {
            for (const subscriber of this.subscribers)
              subscriber(this.component);
          }
          subscribe(subscriber) {
            this.subscribers.push(subscriber);
          }
          attach(subscriber) {
            subscriber(this.component),
              Environment$3.isHot &&
                (this.subscribe(subscriber),
                this.iframe.contentWindow ||
                  ((this.iframe.src = `${Environment$3.serverUrl}/components/${this.component.constructor.name}`),
                  (this.iframe.width = "0"),
                  (this.iframe.height = "0"),
                  (this.iframe.style.display = "none"),
                  "undefined" != typeof document &&
                    (document.body.appendChild(this.iframe),
                    window.addEventListener("message", (event) => {
                      event.source === this.iframe.contentWindow &&
                        event.origin.startsWith(Environment$3.serverUrl) &&
                        ((this.component = new this.componentType(
                          JSON.parse(event.data)
                        )),
                        this.broadcast());
                    }))));
          }
        };
        class MediaQuery$3 {
          constructor({
            operator: operator,
            type: type,
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
            minAspectRatio: minAspectRatio,
            maxAspectRatio: maxAspectRatio,
            minResolution: minResolution,
            maxResolution: maxResolution,
            orientation: orientation,
            displayMode: displayMode,
            prefersColorScheme: prefersColorScheme,
            prefersReducedMotion: prefersReducedMotion,
          }) {
            (this.operator = operator),
              (this.type = type),
              (this.minWidth = minWidth),
              (this.maxWidth = maxWidth),
              (this.minHeight = minHeight),
              (this.maxHeight = maxHeight),
              (this.minAspectRatio = minAspectRatio),
              (this.maxAspectRatio = maxAspectRatio),
              (this.minResolution = minResolution),
              (this.maxResolution = maxResolution),
              (this.orientation = orientation),
              (this.displayMode = displayMode),
              (this.prefersColorScheme = prefersColorScheme),
              (this.prefersReducedMotion = prefersReducedMotion);
          }
        }
        var MediaQuery_1$3 = MediaQuery$3;
        const { queryToCss: queryToCss$3 } = cssMediaQuery;
        Object.defineProperties(MediaQuery$3.prototype, {
          mediaQuery: {
            get() {
              return queryToCss$3(this);
            },
          },
        });
        class Breakpoint$3 {
          constructor({
            small: small = {
              operator: "none",
              type: "screen",
              minWidth: 360,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            medium: medium = {
              operator: "none",
              type: "screen",
              minWidth: 768,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            large: large = {
              operator: "none",
              type: "screen",
              minWidth: 1024,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
            xLarge: xLarge = {
              operator: "none",
              type: "screen",
              minWidth: 1200,
              maxWidth: -1,
              minHeight: -1,
              maxHeight: -1,
              minAspectRatio: [-1, -1],
              maxAspectRatio: [-1, -1],
              minResolution: -1,
              maxResolution: -1,
              orientation: "none",
              displayMode: "none",
              prefersColorScheme: "none",
              prefersReducedMotion: "none",
            },
          } = {}) {
            (this.small = new MediaQuery$3(small)),
              (this.medium = new MediaQuery$3(medium)),
              (this.large = new MediaQuery$3(large)),
              (this.xLarge = new MediaQuery$3(xLarge));
          }
        }
        var Breakpoint_1$3 = Breakpoint$3;
        class Color$3 {
          constructor({ h: h, s: s, l: l, a: a }) {
            (this.h = h), (this.s = s), (this.l = l), (this.a = a);
          }
        }
        var Color_1$3 = Color$3;
        const {
          colorToCss: colorToCss$3,
          colorToLowFidelityCss: colorToLowFidelityCss$3,
        } = lib$1;
        Object.defineProperties(Color$3.prototype, {
          color: {
            get() {
              return colorToCss$3(this);
            },
          },
          lowFidelityColor: {
            get() {
              return colorToLowFidelityCss$3(this);
            },
          },
          colorStyle: {
            get() {
              return { color: this.color };
            },
          },
          backgroundColorStyle: {
            get() {
              return { backgroundColor: this.color };
            },
          },
          borderColorStyle: {
            get() {
              return { borderColor: this.color };
            },
          },
          outlineColorStyle: {
            get() {
              return { outlineColor: this.color };
            },
          },
        });
        class Swatch$3 {
          constructor({
            brand: brand = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            brandHighlight: brandHighlight = {
              h: 0.9803418803418804,
              s: 0.8823529411764705,
              l: 0.5666666666666667,
              a: 1,
            },
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            baseBlue: baseBlue = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            baseGreen: baseGreen = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            baseOrange: baseOrange = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            baseYellow: baseYellow = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            basePurple: basePurple = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            gray10: gray10 = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            gray20: gray20 = {
              h: 0.6296296296296298,
              s: 0.17647058823529388,
              l: 0.8999999999999999,
              a: 1,
            },
            gray30: gray30 = {
              h: 0.6309523809523808,
              s: 0.15217391304347835,
              l: 0.8196078431372549,
              a: 1,
            },
            gray40: gray40 = {
              h: 0.6315789473684211,
              s: 0.13286713286713278,
              l: 0.7196078431372549,
              a: 1,
            },
            gray50: gray50 = {
              h: 0.6225490196078431,
              s: 0.1666666666666666,
              l: 0.6,
              a: 1,
            },
            gray60: gray60 = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            gray70: gray70 = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            gray80: gray80 = {
              h: 0.6097560975609756,
              s: 0.2645161290322581,
              l: 0.303921568627451,
              a: 1,
            },
            gray90: gray90 = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            gray100: gray100 = {
              h: 0.6049382716049383,
              s: 0.4285714285714286,
              l: 0.12352941176470589,
              a: 1,
            },
            red10: red10 = {
              h: 0,
              s: 0.9000000000000002,
              l: 0.9607843137254902,
              a: 1,
            },
            red20: red20 = { h: 0, s: 0.882352941176471, l: 0.9, a: 1 },
            red30: red30 = {
              h: 0,
              s: 0.7931034482758624,
              l: 0.8294117647058823,
              a: 1,
            },
            red40: red40 = {
              h: 0,
              s: 0.8425196850393704,
              l: 0.7509803921568627,
              a: 1,
            },
            red50: red50 = {
              h: 0,
              s: 0.7883597883597881,
              l: 0.6294117647058823,
              a: 1,
            },
            red60: red60 = {
              h: 0,
              s: 0.746938775510204,
              l: 0.4803921568627451,
              a: 1,
            },
            red70: red70 = {
              h: 0,
              s: 0.8210526315789474,
              l: 0.37254901960784315,
              a: 1,
            },
            red80: red80 = {
              h: 0,
              s: 0.813953488372093,
              l: 0.2529411764705882,
              a: 1,
            },
            red90: red90 = {
              h: 0,
              s: 0.7411764705882352,
              l: 0.16666666666666669,
              a: 1,
            },
            red100: red100 = {
              h: 0,
              s: 0.6065573770491803,
              l: 0.11960784313725491,
              a: 1,
            },
            orange10: orange10 = {
              h: 0.0729166666666667,
              s: 0.8888888888888893,
              l: 0.9647058823529412,
              a: 1,
            },
            orange20: orange20 = {
              h: 0.07017543859649124,
              s: 0.934426229508197,
              l: 0.8803921568627451,
              a: 1,
            },
            orange30: orange30 = {
              h: 0.06296296296296296,
              s: 0.9,
              l: 0.803921568627451,
              a: 1,
            },
            orange40: orange40 = {
              h: 0.07142857142857141,
              s: 1,
              l: 0.7392156862745098,
              a: 1,
            },
            orange50: orange50 = {
              h: 0.07156862745098039,
              s: 0.9444444444444445,
              l: 0.6470588235294117,
              a: 1,
            },
            orange60: orange60 = {
              h: 0.07142857142857141,
              s: 0.9051724137931036,
              l: 0.5450980392156863,
              a: 1,
            },
            orange70: orange70 = {
              h: 0.049999999999999996,
              s: 0.6956521739130436,
              l: 0.4509803921568627,
              a: 1,
            },
            orange80: orange80 = {
              h: 0.03561253561253561,
              s: 0.7090909090909091,
              l: 0.3235294117647059,
              a: 1,
            },
            orange90: orange90 = {
              h: 0.013020833333333334,
              s: 0.6153846153846154,
              l: 0.20392156862745098,
              a: 1,
            },
            orange100: orange100 = {
              h: 0.01360544217687075,
              s: 0.620253164556962,
              l: 0.15490196078431373,
              a: 1,
            },
            yellow10: yellow10 = {
              h: 0.13492063492063483,
              s: 1,
              l: 0.9588235294117646,
              a: 1,
            },
            yellow20: yellow20 = {
              h: 0.13596491228070176,
              s: 1,
              l: 0.8509803921568627,
              a: 1,
            },
            yellow30: yellow30 = {
              h: 0.1377952755905512,
              s: 1,
              l: 0.7509803921568627,
              a: 1,
            },
            yellow40: yellow40 = {
              h: 0.13861386138613863,
              s: 1,
              l: 0.6039215686274509,
              a: 1,
            },
            yellow50: yellow50 = {
              h: 0.13933333333333334,
              s: 1,
              l: 0.49019607843137253,
              a: 1,
            },
            yellow60: yellow60 = {
              h: 0.12814814814814815,
              s: 0.9414225941422594,
              l: 0.46862745098039216,
              a: 1,
            },
            yellow70: yellow70 = {
              h: 0.12199312714776633,
              s: 1,
              l: 0.3803921568627451,
              a: 1,
            },
            yellow80: yellow80 = {
              h: 0.1056547619047619,
              s: 0.7272727272727273,
              l: 0.3019607843137255,
              a: 1,
            },
            yellow90: yellow90 = {
              h: 0.0942982456140351,
              s: 0.8260869565217391,
              l: 0.1803921568627451,
              a: 1,
            },
            yellow100: yellow100 = {
              h: 0.08181818181818183,
              s: 0.8208955223880597,
              l: 0.13137254901960785,
              a: 1,
            },
            green10: green10 = {
              h: 0.3958333333333331,
              s: 0.8000000000000006,
              l: 0.9607843137254902,
              a: 1,
            },
            green20: green20 = {
              h: 0.39430894308943093,
              s: 0.8039215686274511,
              l: 0.8999999999999999,
              a: 1,
            },
            green30: green30 = {
              h: 0.3988095238095238,
              s: 0.8235294117647062,
              l: 0.8,
              a: 1,
            },
            green40: green40 = {
              h: 0.3963963963963964,
              s: 0.7254901960784312,
              l: 0.7,
              a: 1,
            },
            green50: green50 = {
              h: 0.40041928721174,
              s: 0.6543209876543211,
              l: 0.5235294117647059,
              a: 1,
            },
            green60: green60 = {
              h: 0.4006410256410256,
              s: 0.7959183673469389,
              l: 0.38431372549019605,
              a: 1,
            },
            green70: green70 = {
              h: 0.39999999999999997,
              s: 0.7971014492753624,
              l: 0.27058823529411763,
              a: 1,
            },
            green80: green80 = {
              h: 0.39999999999999997,
              s: 0.794392523364486,
              l: 0.20980392156862746,
              a: 1,
            },
            green90: green90 = {
              h: 0.39999999999999997,
              s: 0.6338028169014084,
              l: 0.1392156862745098,
              a: 1,
            },
            green100: green100 = {
              h: 0.39351851851851855,
              s: 0.7826086956521738,
              l: 0.09019607843137256,
              a: 1,
            },
            blue10: blue10 = {
              h: 0.5916666666666665,
              s: 1,
              l: 0.9607843137254901,
              a: 1,
            },
            blue20: blue20 = { h: 0.5882352941176471, s: 1, l: 0.9, a: 1 },
            blue30: blue30 = { h: 0.5816993464052288, s: 1, l: 0.8, a: 1 },
            blue40: blue40 = { h: 0.5827886710239651, s: 1, l: 0.7, a: 1 },
            blue50: blue50 = { h: 0.5751633986928105, s: 1, l: 0.5, a: 1 },
            blue60: blue60 = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            blue70: blue70 = {
              h: 0.6139359698681732,
              s: 0.9567567567567566,
              l: 0.36274509803921573,
              a: 1,
            },
            blue80: blue80 = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            blue90: blue90 = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            blue100: blue100 = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
            purple10: purple10 = {
              h: 0.7361111111111112,
              s: 0.6666666666666677,
              l: 0.9647058823529412,
              a: 1,
            },
            purple20: purple20 = {
              h: 0.7277777777777777,
              s: 0.75,
              l: 0.9215686274509804,
              a: 1,
            },
            purple30: purple30 = {
              h: 0.7307692307692308,
              s: 0.6842105263157894,
              l: 0.8137254901960784,
              a: 1,
            },
            purple40: purple40 = {
              h: 0.7316666666666666,
              s: 0.6410256410256409,
              l: 0.6941176470588235,
              a: 1,
            },
            purple50: purple50 = {
              h: 0.7320000000000001,
              s: 0.6157635467980297,
              l: 0.6019607843137255,
              a: 1,
            },
            purple60: purple60 = {
              h: 0.7310838445807771,
              s: 0.6392156862745098,
              l: 0.5,
              a: 1,
            },
            purple70: purple70 = {
              h: 0.7319277108433736,
              s: 0.7830188679245282,
              l: 0.41568627450980394,
              a: 1,
            },
            purple80: purple80 = {
              h: 0.7327044025157233,
              s: 0.7910447761194029,
              l: 0.2627450980392157,
              a: 1,
            },
            purple90: purple90 = {
              h: 0.7307692307692307,
              s: 0.783132530120482,
              l: 0.1627450980392157,
              a: 1,
            },
            purple100: purple100 = {
              h: 0.7304964539007092,
              s: 0.8545454545454546,
              l: 0.10784313725490197,
              a: 1,
            },
          } = {}) {
            (this.brand = new Color$3(brand)),
              (this.brandHighlight = new Color$3(brandHighlight)),
              (this.white = new Color$3(white)),
              (this.baseBlue = new Color$3(baseBlue)),
              (this.baseGreen = new Color$3(baseGreen)),
              (this.baseOrange = new Color$3(baseOrange)),
              (this.baseYellow = new Color$3(baseYellow)),
              (this.basePurple = new Color$3(basePurple)),
              (this.gray10 = new Color$3(gray10)),
              (this.gray20 = new Color$3(gray20)),
              (this.gray30 = new Color$3(gray30)),
              (this.gray40 = new Color$3(gray40)),
              (this.gray50 = new Color$3(gray50)),
              (this.gray60 = new Color$3(gray60)),
              (this.gray70 = new Color$3(gray70)),
              (this.gray80 = new Color$3(gray80)),
              (this.gray90 = new Color$3(gray90)),
              (this.gray100 = new Color$3(gray100)),
              (this.red10 = new Color$3(red10)),
              (this.red20 = new Color$3(red20)),
              (this.red30 = new Color$3(red30)),
              (this.red40 = new Color$3(red40)),
              (this.red50 = new Color$3(red50)),
              (this.red60 = new Color$3(red60)),
              (this.red70 = new Color$3(red70)),
              (this.red80 = new Color$3(red80)),
              (this.red90 = new Color$3(red90)),
              (this.red100 = new Color$3(red100)),
              (this.orange10 = new Color$3(orange10)),
              (this.orange20 = new Color$3(orange20)),
              (this.orange30 = new Color$3(orange30)),
              (this.orange40 = new Color$3(orange40)),
              (this.orange50 = new Color$3(orange50)),
              (this.orange60 = new Color$3(orange60)),
              (this.orange70 = new Color$3(orange70)),
              (this.orange80 = new Color$3(orange80)),
              (this.orange90 = new Color$3(orange90)),
              (this.orange100 = new Color$3(orange100)),
              (this.yellow10 = new Color$3(yellow10)),
              (this.yellow20 = new Color$3(yellow20)),
              (this.yellow30 = new Color$3(yellow30)),
              (this.yellow40 = new Color$3(yellow40)),
              (this.yellow50 = new Color$3(yellow50)),
              (this.yellow60 = new Color$3(yellow60)),
              (this.yellow70 = new Color$3(yellow70)),
              (this.yellow80 = new Color$3(yellow80)),
              (this.yellow90 = new Color$3(yellow90)),
              (this.yellow100 = new Color$3(yellow100)),
              (this.green10 = new Color$3(green10)),
              (this.green20 = new Color$3(green20)),
              (this.green30 = new Color$3(green30)),
              (this.green40 = new Color$3(green40)),
              (this.green50 = new Color$3(green50)),
              (this.green60 = new Color$3(green60)),
              (this.green70 = new Color$3(green70)),
              (this.green80 = new Color$3(green80)),
              (this.green90 = new Color$3(green90)),
              (this.green100 = new Color$3(green100)),
              (this.blue10 = new Color$3(blue10)),
              (this.blue20 = new Color$3(blue20)),
              (this.blue30 = new Color$3(blue30)),
              (this.blue40 = new Color$3(blue40)),
              (this.blue50 = new Color$3(blue50)),
              (this.blue60 = new Color$3(blue60)),
              (this.blue70 = new Color$3(blue70)),
              (this.blue80 = new Color$3(blue80)),
              (this.blue90 = new Color$3(blue90)),
              (this.blue100 = new Color$3(blue100)),
              (this.purple10 = new Color$3(purple10)),
              (this.purple20 = new Color$3(purple20)),
              (this.purple30 = new Color$3(purple30)),
              (this.purple40 = new Color$3(purple40)),
              (this.purple50 = new Color$3(purple50)),
              (this.purple60 = new Color$3(purple60)),
              (this.purple70 = new Color$3(purple70)),
              (this.purple80 = new Color$3(purple80)),
              (this.purple90 = new Color$3(purple90)),
              (this.purple100 = new Color$3(purple100));
          }
        }
        var Swatch_1$3 = Swatch$3;
        class FontFamily$3 {
          constructor({
            text: text = "Whitney SSm A, Whitney SSm B, Helvetica Neue, Helvetica, Arial, sans-serif",
            heading: heading = "Whitney Cond SSm A, Whitney Cond SSm B, sans-serif",
            quote: quote = "Surveyor SSm A, Surveyor SSm B",
            code: code = "Fira Mono, Consolas, monospace",
          } = {}) {
            (this.text = text),
              (this.heading = heading),
              (this.quote = quote),
              (this.code = code);
          }
        }
        var FontFamily_1$3 = FontFamily$3;
        class Unit$3 {
          constructor({ pixels: pixels }) {
            this.pixels = pixels;
          }
        }
        var Unit_1$3 = Unit$3;
        const { unitToPx: unitToPx$3, unitToRem: unitToRem$3 } = cssUnit;
        Object.defineProperties(Unit$3.prototype, {
          px: {
            get() {
              return unitToPx$3(this);
            },
          },
          rem: {
            get() {
              return unitToRem$3(this);
            },
          },
        });
        class FontSize$3 {
          constructor({
            scale60: scale60 = { pixels: 12 },
            scale70: scale70 = { pixels: 13 },
            scale80: scale80 = { pixels: 14 },
            scale100: scale100 = { pixels: 16 },
            scale120: scale120 = { pixels: 18 },
            scale140: scale140 = { pixels: 20 },
            scale160: scale160 = { pixels: 22 },
            scale180: scale180 = { pixels: 24 },
            scale220: scale220 = { pixels: 28 },
            scale280: scale280 = { pixels: 34 },
            scale340: scale340 = { pixels: 40 },
            scale420: scale420 = { pixels: 48 },
            scale440: scale440 = { pixels: 50 },
            scale500: scale500 = { pixels: 56 },
            scale1020: scale1020 = { pixels: 108 },
          } = {}) {
            (this.scale60 = new Unit$3(scale60)),
              (this.scale70 = new Unit$3(scale70)),
              (this.scale80 = new Unit$3(scale80)),
              (this.scale100 = new Unit$3(scale100)),
              (this.scale120 = new Unit$3(scale120)),
              (this.scale140 = new Unit$3(scale140)),
              (this.scale160 = new Unit$3(scale160)),
              (this.scale180 = new Unit$3(scale180)),
              (this.scale220 = new Unit$3(scale220)),
              (this.scale280 = new Unit$3(scale280)),
              (this.scale340 = new Unit$3(scale340)),
              (this.scale420 = new Unit$3(scale420)),
              (this.scale440 = new Unit$3(scale440)),
              (this.scale500 = new Unit$3(scale500)),
              (this.scale1020 = new Unit$3(scale1020));
          }
        }
        var FontSize_1$3 = FontSize$3;
        class Weight$3 {
          constructor({ weight: weight }) {
            this.weight = weight;
          }
        }
        var Weight_1$3 = Weight$3;
        Object.defineProperties(Weight$3.prototype, {
          value: {
            get() {
              return this.weight;
            },
          },
        });
        class FontWeight$3 {
          constructor({
            thin: thin = { weight: 200 },
            light: light = { weight: 300 },
            regular: regular = { weight: 400 },
            medium: medium = { weight: 500 },
            semibold: semibold = { weight: 600 },
            bold: bold = { weight: 700 },
          } = {}) {
            (this.thin = new Weight$3(thin)),
              (this.light = new Weight$3(light)),
              (this.regular = new Weight$3(regular)),
              (this.medium = new Weight$3(medium)),
              (this.semibold = new Weight$3(semibold)),
              (this.bold = new Weight$3(bold));
          }
        }
        var FontWeight_1$3 = FontWeight$3;
        class Background$3 {
          constructor({
            white: white = { h: 0, s: 0, l: 1, a: 1 },
            blue: blue = {
              h: 0.6423357664233577,
              s: 1,
              l: 0.26862745098039215,
              a: 1,
            },
            light: light = {
              h: 0.6666666666666666,
              s: 0.09999999999999985,
              l: 0.9607843137254902,
              a: 1,
            },
            darkest: darkest = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.white = new Color$3(white)),
              (this.blue = new Color$3(blue)),
              (this.light = new Color$3(light)),
              (this.darkest = new Color$3(darkest));
          }
        }
        var Background_1$3 = Background$3;
        class Text$3 {
          constructor({
            primary: primary = {
              h: 0.6037037037037037,
              s: 0.42056074766355134,
              l: 0.20980392156862746,
              a: 1,
            },
            secondary: secondary = {
              h: 0.6184210526315789,
              s: 0.20212765957446804,
              l: 0.3686274509803922,
              a: 1,
            },
            tertiary: tertiary = {
              h: 0.6171171171171171,
              s: 0.16157205240174677,
              l: 0.44901960784313727,
              a: 1,
            },
            inversePrimary: inversePrimary = { h: 0, s: 0, l: 1, a: 1 },
          } = {}) {
            (this.primary = new Color$3(primary)),
              (this.secondary = new Color$3(secondary)),
              (this.tertiary = new Color$3(tertiary)),
              (this.inversePrimary = new Color$3(inversePrimary));
          }
        }
        var Text_1$3 = Text$3;
        class Point2D$3 {
          constructor({ x: x, y: y }) {
            (this.x = x), (this.y = y);
          }
        }
        var Point2D_1$3 = Point2D$3;
        class DropShadow$3 {
          constructor({ offset: offset, radius: radius, color: color }) {
            (this.offset = new Point2D$3(offset)),
              (this.radius = radius),
              (this.color = new Color$3(color));
          }
        }
        var DropShadow_1$3 = DropShadow$3;
        const {
          dropShadowToCss: dropShadowToCss$3,
          dropShadowToFilterCss: dropShadowToFilterCss$3,
        } = lib$1;
        Object.defineProperties(DropShadow$3.prototype, {
          boxShadow: {
            get() {
              return dropShadowToCss$3(this);
            },
          },
          textShadow: {
            get() {
              return dropShadowToCss$3(this);
            },
          },
          filter: {
            get() {
              return dropShadowToFilterCss$3(this);
            },
          },
          boxShadowStyle: {
            get() {
              return { boxShadow: this.boxShadow };
            },
          },
          textShadowStyle: {
            get() {
              return { textShadow: this.textShadow };
            },
          },
          filterStyle: {
            get() {
              return { filter: this.filter };
            },
          },
        });
        class Shadow$3 {
          constructor({
            card: card = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
            navigation: navigation = {
              offset: { x: 0, y: 8 },
              radius: 32,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.12,
              },
            },
            image: image = {
              offset: { x: 0, y: 4 },
              radius: 16,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            large: large = {
              offset: { x: 0, y: 16 },
              radius: 60,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.15000000000000002,
              },
            },
            inverse: inverse = {
              offset: { x: 0, y: 8 },
              radius: 24,
              color: {
                h: 0.6049382716049383,
                s: 0.4285714285714286,
                l: 0.12352941176470589,
                a: 0.09999999999999998,
              },
            },
          } = {}) {
            (this.card = new DropShadow$3(card)),
              (this.navigation = new DropShadow$3(navigation)),
              (this.image = new DropShadow$3(image)),
              (this.large = new DropShadow$3(large)),
              (this.inverse = new DropShadow$3(inverse));
          }
        }
        var Shadow_1$3 = Shadow$3;
        class GradientStop$3 {
          constructor({ position: position, color: color }) {
            (this.position = position), (this.color = new Color$3(color));
          }
        }
        var GradientStop_1$3 = GradientStop$3;
        class LinearGradient$3 {
          constructor({ stops: stops, start: start, end: end }) {
            (this.stops = stops.map((value1) => new GradientStop$3(value1))),
              (this.start = new Point2D$3(start)),
              (this.end = new Point2D$3(end));
          }
        }
        var LinearGradient_1$3 = LinearGradient$3;
        const { linearGradientToCss: linearGradientToCss$3 } = lib$1;
        Object.defineProperties(LinearGradient$3.prototype, {
          linearGradient: {
            get() {
              return linearGradientToCss$3(this);
            },
          },
          backgroundImageStyle: {
            get() {
              return { backgroundImage: this.linearGradient };
            },
          },
          backgroundStyle: {
            get() {
              return { background: this.linearGradient };
            },
          },
        });
        class Gradient$3 {
          constructor({
            redHero: redHero = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blueHero: blueHero = {
              stops: [
                {
                  position: 0,
                  color: { h: 0.5751633986928105, s: 1, l: 0.5, a: 0 },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5751633986928105,
                    s: 1,
                    l: 0.5,
                    a: 0.07499999999999996,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            red180: red180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.9803418803418804,
                    s: 0.8823529411764705,
                    l: 0.5666666666666667,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            orange180: orange180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.07142857142857141,
                    s: 0.9051724137931036,
                    l: 0.5450980392156863,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            green180: green180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.40041928721174,
                    s: 0.6543209876543211,
                    l: 0.5235294117647059,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            blue180: blue180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            purple180: purple180 = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0.07499999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.7320000000000001,
                    s: 0.6157635467980297,
                    l: 0.6019607843137255,
                    a: 0,
                  },
                },
              ],
              start: { x: 0.5, y: 0 },
              end: { x: 0.5, y: 1 },
            },
            darkGray: darkGray = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.19999999999999996,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.6037037037037037,
                    s: 0.42056074766355134,
                    l: 0.20980392156862746,
                    a: 0.8,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            lightRedBlue: lightRedBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.5,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.5,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
            redBlue: redBlue = {
              stops: [
                {
                  position: 0,
                  color: {
                    h: 0,
                    s: 0.746938775510204,
                    l: 0.4803921568627451,
                    a: 0.8,
                  },
                },
                {
                  position: 1,
                  color: {
                    h: 0.5938438438438438,
                    s: 0.9823008849557523,
                    l: 0.44313725490196076,
                    a: 0.7,
                  },
                },
              ],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            },
          } = {}) {
            (this.redHero = new LinearGradient$3(redHero)),
              (this.blueHero = new LinearGradient$3(blueHero)),
              (this.red180 = new LinearGradient$3(red180)),
              (this.orange180 = new LinearGradient$3(orange180)),
              (this.green180 = new LinearGradient$3(green180)),
              (this.blue180 = new LinearGradient$3(blue180)),
              (this.purple180 = new LinearGradient$3(purple180)),
              (this.darkGray = new LinearGradient$3(darkGray)),
              (this.lightRedBlue = new LinearGradient$3(lightRedBlue)),
              (this.redBlue = new LinearGradient$3(redBlue));
          }
        }
        var Gradient_1$3 = Gradient$3;
        class Button$3 {
          constructor({
            inverseText: inverseText = {
              h: 0.5938438438438438,
              s: 0.9823008849557523,
              l: 0.44313725490196076,
              a: 1,
            },
            inverseHoverBg: inverseHoverBg = {
              h: 0.6518518518518518,
              s: 0.9374999999999999,
              l: 0.18823529411764706,
              a: 1,
            },
            inverseFocusBg: inverseFocusBg = {
              h: 0.6757575757575758,
              s: 0.9016393442622952,
              l: 0.1196078431372549,
              a: 1,
            },
          } = {}) {
            (this.inverseText = new Color$3(inverseText)),
              (this.inverseHoverBg = new Color$3(inverseHoverBg)),
              (this.inverseFocusBg = new Color$3(inverseFocusBg));
          }
        }
        var Button_1$3 = Button$3;
        class AhoyDesignTokens {
          constructor({
            breakpoint: breakpoint = {},
            swatch: swatch = {},
            fontFamily: fontFamily = {},
            fontSize: fontSize = {},
            fontWeight: fontWeight = {},
            background: background = {},
            text: text = {},
            shadow: shadow = {},
            gradient: gradient = {},
            button: button = {},
          } = {}) {
            (this.breakpoint = new Breakpoint$3(breakpoint)),
              (this.swatch = new Swatch$3(swatch)),
              (this.fontFamily = new FontFamily$3(fontFamily)),
              (this.fontSize = new FontSize$3(fontSize)),
              (this.fontWeight = new FontWeight$3(fontWeight)),
              (this.background = new Background$3(background)),
              (this.text = new Text$3(text)),
              (this.shadow = new Shadow$3(shadow)),
              (this.gradient = new Gradient$3(gradient)),
              (this.button = new Button$3(button));
          }
        }
        Object.defineProperty(AhoyDesignTokens, "name", {
          value: "AhoyDesignTokens",
        });
        var AhoyDesignTokens_1 = AhoyDesignTokens;
        (dist$3.Diez = Diez_1$3),
          (dist$3.MediaQuery = MediaQuery_1$3),
          (dist$3.Breakpoint = Breakpoint_1$3),
          (dist$3.Color = Color_1$3),
          (dist$3.Swatch = Swatch_1$3),
          (dist$3.FontFamily = FontFamily_1$3),
          (dist$3.Unit = Unit_1$3),
          (dist$3.FontSize = FontSize_1$3),
          (dist$3.Weight = Weight_1$3),
          (dist$3.FontWeight = FontWeight_1$3),
          (dist$3.Background = Background_1$3),
          (dist$3.Text = Text_1$3),
          (dist$3.Point2D = Point2D_1$3),
          (dist$3.DropShadow = DropShadow_1$3),
          (dist$3.Shadow = Shadow_1$3),
          (dist$3.GradientStop = GradientStop_1$3),
          (dist$3.LinearGradient = LinearGradient_1$3),
          (dist$3.Gradient = Gradient_1$3),
          (dist$3.Button = Button_1$3),
          (dist$3.AhoyDesignTokens = AhoyDesignTokens_1);
        const AhoyDesignTokens$1 = dist$3.AhoyDesignTokens;
      }.call(this, __webpack_require__(129)));
    },
  },
  [[528, 1, 2]],
]);
