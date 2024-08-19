import { config } from "dotenv";
import path from "path";

config({ path: path.join(__dirname, ".env") });

import app from "./app";
import sequelize from "./models/";

app.set("port", process.env.PORT || 3000);

sequelize.sync().then(() => {
  console.log("connect DB");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
