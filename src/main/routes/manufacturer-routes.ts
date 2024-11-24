import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddManufacturerController } from "../factories/controllers/add-manufacturer-controller-factory";
import { makeLoadManufacturersController } from "../factories/controllers/load-manufacturers-controller-factory";
import { makeDeleteManufacturerByUuidController } from "../factories/controllers/delete-manufacturer-by-uuid-controller-factory";

export const setupManufacturerRoutes = (router: Router): void => {
  router.get("/manufacturer", adaptRoute(makeLoadManufacturersController()));
  router.post("/manufacturer", adaptRoute(makeAddManufacturerController()));
  router.delete(
    "/manufacturer/:manufacturerUuid",
    adaptRoute(makeDeleteManufacturerByUuidController())
  );
};
