import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddManufacturerController } from "../factories/controllers/add-manufacturer-controller-factory";

export const setupManufacturerRoutes = (router: Router): void => {
  router.post("/manufacturer", adaptRoute(makeAddManufacturerController()));
};
