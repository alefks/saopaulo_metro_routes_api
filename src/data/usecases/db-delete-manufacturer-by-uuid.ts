import { DeleteManufacturerByUuid } from "../../domain/usecases/delete-manufacturer-by-uuid";
import { DeleteManufacturerByUuidRepository } from "../protocols/db/manufacturer";

export class DbDeleteManufacturerByUuid implements DeleteManufacturerByUuid {
  constructor(
    private readonly deleteManufacturerByUuidRepository: DeleteManufacturerByUuidRepository
  ) {}

  async deleteByUuid(
    manufacturerUuid: DeleteManufacturerByUuid.Params
  ): Promise<DeleteManufacturerByUuid.Message> {
    const deletedManufacturer =
      await this.deleteManufacturerByUuidRepository.deleteByUuid(
        manufacturerUuid
      );

    if (deletedManufacturer === null) {
      return { message: "Manufacturer successfully deleted." };
    } else {
        return {message: "Manufacturer not found."}
    }
  }
}
