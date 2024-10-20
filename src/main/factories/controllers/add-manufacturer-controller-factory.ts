import { AddManufacturerController } from "../../../presentation/controllers/add-manufacturer-controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbAddManufacturer } from "../usecases/add-manufacturer-factory";
import { makeAddManufacturerValidation } from "./add-manufacturer-validation-factory";

export const makeAddManufacturerController = (): Controller => {
  const controller = new AddManufacturerController(
    makeDbAddManufacturer(),
    makeAddManufacturerValidation()
  );

  return controller;
};
