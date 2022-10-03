// const path = require("path");
// const express = require("express");
// const { createSSRApp } = require("vue");
// // const { renderToString } = require("vue/server-renderer");
// const { renderToString } = require("@vue/server-renderer");
// const manifest = require("../dist/ssr-manifest.json");

// const server = express();

// const appPath = path.join(__dirname, "../dist", manifest["app.js"]);
// const createApp = require(appPath).default;

// server.use("/img", express.static(path.join(__dirname, "../dist", "img")));
// server.use("/js", express.static(path.join(__dirname, "../dist", "js")));
// server.use("/css", express.static(path.join(__dirname, "../dist", "css")));
// server.use(
//   "/favicon.ico",
//   express.static(path.join(__dirname, "../dist", "favicon.ico"))
// );

// server.get("*", async (req, res) => {
//   const { app } = createApp();
//   const appContent = await renderToString(app);
//   console.log(app, appContent);

//   const html = `
//   <html>
//     <head>
//       <title>Hello</title>
//       <link rel="stylesheet" href="${manifest["app.css"]}" />
//     </head>
//     <body>
//       ${appContent}
//     </body>
//   </html>
//   `;

//   res.send(html);
// });

// server.listen(8080, () => {
//   console.log("서버 실행 8080");
// });

const path = require("path");
const express = require("express");
const fs = require("fs");
const serialize = require("serialize-javascript");
const { renderToString } = require("@vue/server-renderer");
const manifest = require("../dist/ssr-manifest.json");

const server = express();

const appPath = path.join(__dirname, "../dist", manifest["app.js"]);
const createApp = require(appPath).default;

server.use("/img", express.static(path.join(__dirname, "../dist", "img")));
server.use("/js", express.static(path.join(__dirname, "../dist", "js")));
server.use("/css", express.static(path.join(__dirname, "../dist", "css")));
server.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../dist", "favicon.ico"))
);

const renderState = (store, windowKey) => {
  const state = serialize(store);
  const autoRemove =
    ";(function(){var s;(s=document.currentScript||document.scripts[document.scripts.length-1]).parentNode.removeChild(s);}());";
  const nonceAttr = store.nonce ? ' nonce="' + store.nonce + '"' : "";
  return store
    ? "<script" +
        nonceAttr +
        ">window." +
        windowKey +
        "=" +
        state +
        autoRemove +
        "</script>"
    : "";
};

server.get("*", async (req, res) => {
  const { app, router } = await createApp();

  router.push(req.url);

  await router.isReady();

  let appContent = await renderToString(app);
  console.log(app, appContent);

  fs.readFile(path.join(__dirname, "../dist/index.html"), (err, html) => {
    if (err) {
      throw err;
    }

    appContent = `<div id="app">${appContent}</div>`;

    html = html.toString().replace('<div id="app"></div>', `${appContent}`);
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  });
});

server.listen(8282, () => {
  console.log("You can navigate to http://localhost:8282");
});
