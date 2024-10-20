import { DbAddManufacturer } from "../../../data/usecases/db-add-manufacturer";
import { AddManufacturer } from "../../../domain/usecases/add-manufacturer";
import { ManufacturerPrismaRepository } from "../../../infra/db/prisma";
import { UuidGeneratorAdapter } from "../../adapters/uuid-generator-adapter";

export const makeDbAddManufacturer = (): AddManufacturer => {
  const uuidGenerator = new UuidGeneratorAdapter();
  const manufacturerPrismaRepository = new ManufacturerPrismaRepository();
  return new DbAddManufacturer(
    uuidGenerator,
    manufacturerPrismaRepository,
    manufacturerPrismaRepository,
    manufacturerPrismaRepository
  );
};
