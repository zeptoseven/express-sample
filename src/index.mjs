import { createApp } from "./server.mjs";

const app = createApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
