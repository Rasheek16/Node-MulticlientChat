import cookieSession from "cookie-session";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./app/router.js";
import initWebSocket from "./app/websocket.js";

const logoutWebsocket = initWebSocket();
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(express.urlencoded({ extended: false }));
app.set("views", `${dirname(fileURLToPath(import.meta.url))}/app/views/`);
app.set("view engine", "pug");

app.get("/", (request, response) => {
  response.render("login");
});

app.use(router(logoutWebsocket));

app.listen(8080, () => {
  console.log("listening to http://localhost:8080");
});
