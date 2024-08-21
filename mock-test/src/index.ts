import { config } from "dotenv";
import path from "path";
import cors from "cors";

config({ path: path.join(__dirname, ".env") });

import app from "./app";
import sequelize from "./models/";

app.set("port", process.env.PORT || 3000);
app.use(
  cors({
    origin: [/http:\/\/localhost:*/, /https:\/\/127.0.0.1:*/],
    credentials: true, // 쿠키가 있다면
  })
);

sequelize.sync().then(() => {
  console.log("connect DB");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
