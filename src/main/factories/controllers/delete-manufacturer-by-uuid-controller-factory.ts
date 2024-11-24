import { DeleteManufacturerByUuidController } from "../../../presentation/controllers/delete-manufacturer-by-uuid-controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbDeleteManufacturerByUuid } from "../usecases/delete-manufacturer-by-id-factory";

export const makeDeleteManufacturerByUuidController = (): Controller => {
  const controller = new DeleteManufacturerByUuidController(
    makeDbDeleteManufacturerByUuid()
  );
  return controller;
};
