require("dotenv").config();

async function launchServer() {
  const { setupApp } = await import("./config/app");
  const app = await setupApp();
  app.listen(process.env.APP_PORT, () =>
    console.log(`Server running at http://localhost:${process.env.APP_PORT}`)
  );
}
launchServer();
