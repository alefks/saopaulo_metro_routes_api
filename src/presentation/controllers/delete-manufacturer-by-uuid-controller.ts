import { DeleteManufacturerByUuid } from "../../domain/usecases/delete-manufacturer-by-uuid";
import { noContent, ok, serverError } from "../helpers/http-helper";
import { Controller, HttpResponse } from "../protocols";

export class DeleteManufacturerByUuidController implements Controller {
  constructor(
    private readonly deleteManufacturerByUuid: DeleteManufacturerByUuid
  ) {}

  async handle(
    request: DeleteManufacturerByUuidController.Request
  ): Promise<HttpResponse> {
    try {
      const manufacturerUuid = request.manufacturerUuid;
      const result = await this.deleteManufacturerByUuid.deleteByUuid(
        manufacturerUuid
      );

      if (result.message === "Manufacturer not found.") {
        return noContent();
      }

      if (result.message === "Manufacturer deleted successfully.") {
        return ok({ message: result.message });
      }
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace DeleteManufacturerByUuidController {
  export type Request = {
    manufacturerUuid: string;
  };
}
