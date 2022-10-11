"use strict";
exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hub)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(734);
// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(259);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Hub.vue?vue&type=template&id=0dfeafc1&ts=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = (0,external_vue_.resolveComponent)("Header");

  const _component_router_link = (0,external_vue_.resolveComponent)("router-link");

  const _component_TagContentCard = (0,external_vue_.resolveComponent)("TagContentCard");

  const _component_Footer = (0,external_vue_.resolveComponent)("Footer");

  _push(`<!--[-->`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_Header, null, null, _parent));

  _push(`<main><div class="tag_content_wrapper"><div class="tag_content"><!--[-->`);

  (0,server_renderer_.ssrRenderList)(_ctx.shwonItem, (item, idx) => {
    _push(`<ul>`);

    _push((0,server_renderer_.ssrRenderComponent)(_component_router_link, {
      to: `post/${item.postId}`
    }, {
      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<li${_scopeId}>`);

          _push((0,server_renderer_.ssrRenderComponent)(_component_TagContentCard, {
            imgUrl: item.imgUrl,
            title: item.title,
            author: item.author,
            webkitLineClamp: 2
          }, null, _parent, _scopeId));

          _push(`</li>`);
        } else {
          return [(0,external_vue_.createVNode)("li", null, [(0,external_vue_.createVNode)(_component_TagContentCard, {
            imgUrl: item.imgUrl,
            title: item.title,
            author: item.author,
            webkitLineClamp: 2
          }, null, 8, ["imgUrl", "title", "author"])])];
        }
      }),
      _: 2
    }, _parent));

    _push(`</ul>`);
  });

  _push(`<!--]--></div><div class="target"></div></div></main>`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_Footer, null, null, _parent));

  _push(`<!--]-->`);
}
;// CONCATENATED MODULE: ./src/components/page/Hub.vue?vue&type=template&id=0dfeafc1&ts=true

// EXTERNAL MODULE: external "core-js/modules/es.promise.js"
var es_promise_js_ = __webpack_require__(117);
// EXTERNAL MODULE: external "core-js/modules/es.array.iterator.js"
var es_array_iterator_js_ = __webpack_require__(624);
// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(534);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(887);
// EXTERNAL MODULE: ./src/components/organisms/Header.vue + 27 modules
var Header = __webpack_require__(888);
// EXTERNAL MODULE: ./src/components/molecules/TagContentCard.vue + 6 modules
var TagContentCard = __webpack_require__(125);
// EXTERNAL MODULE: ./src/components/organisms/Footer.vue + 27 modules
var Footer = __webpack_require__(35);
;// CONCATENATED MODULE: ./src/hooks/useintersection.ts


const useIntersection = (cb, option) => {
  const intersectionHandler = ([entry], intersec) => {
    if (entry.isIntersecting) {
      intersec.unobserve(entry.target);
      cb();
      intersec.observe(entry.target);
    }
  };

  return new IntersectionObserver(intersectionHandler, option);
};
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Hub.vue?vue&type=script&lang=ts




var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








/* harmony default export */ const Hubvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "app",
  components: {
    Header: Header/* default */.Z,
    TagContentCard: TagContentCard/* default */.Z,
    Footer: Footer/* default */.Z
  },

  setup() {
    const route = (0,external_vue_router_.useRoute)();
    let beginIndexofFetchData = 0;
    let category = route.params.category;
    let totalItem = [];
    const countOfFetchData = 8;
    const targetRef = (0,external_vue_.ref)();
    const shwonItem = (0,external_vue_.ref)([]);
    const itemLength = 72;

    const fetchData = () => __awaiter(this, void 0, void 0, function* () {
      const {
        data
      } = yield external_axios_default().get(`http://localhost:3000/${category}`);
      beginIndexofFetchData = 0;
      totalItem = data;
      shwonItem.value = totalItem.slice(0, 8);
    });

    (0,external_vue_.watch)(() => route.params.category, newParam => __awaiter(this, void 0, void 0, function* () {
      category = newParam;
      window.scrollTo(0, 0);
      fetchData();
    }));

    const getMoreData = () => {
      if (shwonItem.value.length >= itemLength) {
        return;
      }

      beginIndexofFetchData += countOfFetchData;
      shwonItem.value = [...shwonItem.value, ...totalItem.slice(beginIndexofFetchData, beginIndexofFetchData + countOfFetchData)];
    };

    const observer = useIntersection(getMoreData, {
      threshold: 0.45
    }); // useScroll(getMoreData);

    (0,external_vue_.onMounted)(() => {
      fetchData();
      observer.observe(targetRef.value);
    });
    (0,external_vue_.onUnmounted)(() => {
      if (targetRef.value) {
        observer.unobserve(targetRef.value);
      }
    });
    return {
      shwonItem,
      targetRef,
      countOfFetchData,
      beginIndexofFetchData
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/page/Hub.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Hub.vue?vue&type=style&index=0&id=0dfeafc1&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/page/Hub.vue?vue&type=style&index=0&id=0dfeafc1&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/components/page/Hub.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Hubvue_type_script_lang_ts, [['ssrRender',ssrRender]])

/* harmony default export */ const Hub = (__exports__);

/***/ })

};
;
//# sourceMappingURL=917.37a73ddc.js.map