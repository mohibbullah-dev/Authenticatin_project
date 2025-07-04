import app from "./res/app.js";
import { PORT } from "./res/contant.js";

app.listen(PORT, () => {
  console.log(
    `server is running on the port of ${PORT}: http://localhost:8000/`
  );
});
