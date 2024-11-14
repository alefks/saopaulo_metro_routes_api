import { LoadManufacturersController } from "../../../presentation/controllers/load-manufacturers-controller";
import { Controller } from "../../../presentation/protocols";
import { makeDbLoadManufacturers } from "../usecases/load-manufacturers-factory";

export const makeLoadManufacturersController = (): Controller => {
  const controller = new LoadManufacturersController(makeDbLoadManufacturers());
  return controller;
};
