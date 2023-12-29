import { WebSocketServer } from "ws";

export default function init(app) {
  const wss = new WebSocketServer({ port: 8181 });

  const connections = {};

  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      const data = JSON.parse(message);
      let msg;

      switch (data.type) {
        case "join":
          connections[data.name] = ws;
          msg = JSON.stringify({
            type: "join",
            names: Object.keys(connections),
          });
          break;
        case "msg":
          msg = JSON.stringify({
            type: "msg",
            name: data.name,
            msg: data.msg,
          });
          break;
        default:
          break;
      }

      Object.values(connections).forEach((connection) => {
        connection.send && connection.send(msg);
      });
    });
  });

  return function logout(user) {
    connections[user].close();
    delete connections[user];

    const msg = JSON.stringify({
      type: "join",
      names: Object.keys(connections),
    });

    Object.values(connections).forEach((connection) => {
      connection.send && connection.send(msg);
    });
  };
}
