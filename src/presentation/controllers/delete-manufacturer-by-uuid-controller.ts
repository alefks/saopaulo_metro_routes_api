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
      const manufacturerUuid = request.params.manufacturerUuid;
      console.log(manufacturerUuid);
      const result = await this.deleteManufacturerByUuid.deleteByUuid(
        manufacturerUuid
      );

      if (result.message === "Manufacturer not found.") {
        return noContent();
      }

      if (result.message === "Manufacturer successfully deleted.") {
        return ok(null);
      }
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

export namespace DeleteManufacturerByUuidController {
  export type Request = {
    params: {
      manufacturerUuid: string;
    };
  };
}
