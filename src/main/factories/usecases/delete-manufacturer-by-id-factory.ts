import { DbDeleteManufacturerByUuid } from "../../../data/usecases/db-delete-manufacturer-by-uuid";
import { DeleteManufacturerByUuid } from "../../../domain/usecases/delete-manufacturer-by-uuid";
import { ManufacturerPrismaRepository } from "../../../infra/db/prisma";

export const makeDbDeleteManufacturerByUuid = (): DeleteManufacturerByUuid => {
  const manufacturerPrismaRepository = new ManufacturerPrismaRepository();
  return new DbDeleteManufacturerByUuid(manufacturerPrismaRepository);
};
