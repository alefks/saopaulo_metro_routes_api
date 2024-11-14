import { LoadManufacturers } from "../../domain/usecases/load-manufacturers";
import { Controller, HttpResponse } from "../protocols";
import { ok, noContent, serverError } from "../helpers/http-helper";

export class LoadManufacturersController implements Controller {
  constructor(private readonly loadManufacturers: LoadManufacturers) {}

  async handle(): Promise<HttpResponse> {
    try {
      const manufacturers = await this.loadManufacturers.load();
      if (
        "message" in manufacturers &&
        manufacturers.message === "No manufacturer found"
      ) {
        return noContent();
      }
      return ok(manufacturers);
    } catch (error) {
      return serverError(error);
    }
  }
}
