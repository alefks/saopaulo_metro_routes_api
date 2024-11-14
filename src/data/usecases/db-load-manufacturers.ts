import { LoadManufacturers } from "../../domain/usecases/load-manufacturers";
import { LoadManufacturersRepository } from "../protocols/db/manufacturer/load-manufacturers-repository";

export class DbLoadManufacturers implements LoadManufacturers {
  constructor(
    private readonly loadManufacturersRepository: LoadManufacturersRepository
  ) {}

  async load(): Promise<LoadManufacturers.Result | LoadManufacturers.Message> {
    const manufacturers = await this.loadManufacturersRepository.loadAll();
    if (Array.isArray(manufacturers) && manufacturers.length === 0) {
      return { message: "No manufacturers found" };
    }
    return manufacturers;
  }
}
