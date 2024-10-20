import { Express, Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  readdirSync(join(__dirname, "../routes")).map(async (file) => {
    if (!file.endsWith(".map")) {
      const routeModule = await import(`../routes/${file}`);
      if (routeModule.setupManufacturerRoutes) {
        routeModule.setupManufacturerRoutes(router);
      }
    }
  });
};
