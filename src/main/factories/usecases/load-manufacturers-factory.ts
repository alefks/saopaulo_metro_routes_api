import { DbLoadManufacturers } from "../../../data/usecases/db-load-manufacturers";
import { LoadManufacturers } from "../../../domain/usecases/load-manufacturers";
import { ManufacturerPrismaRepository } from "../../../infra/db/prisma";

export const makeDbLoadManufacturers = (): LoadManufacturers => {
  const manufacturerPrismaRepository = new ManufacturerPrismaRepository();
  return new DbLoadManufacturers(manufacturerPrismaRepository);
};
