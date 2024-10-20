import { AddManufacturer } from "../../domain/usecases/add-manufacturer";
import { EmailInUseError, PhoneInUseError } from "../errors";
import { badRequest, forbidden, ok, serverError } from "../helpers/http-helper";
import { Controller, HttpResponse, Validation } from "../protocols";

export class AddManufacturerController implements Controller {
  constructor(
    private readonly addManufacturer: AddManufacturer,
    private readonly validation: Validation
  ) {}

  async handle(
    request: AddManufacturerController.Request
  ): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }

      const {
        adress,
        city,
        email,
        name,
        number,
        phone,
        state,
        street,
        website,
        zip_code,
      } = request;

      const manufacturer = await this.addManufacturer.add({
        name,
        adress,
        city,
        email,
        number,
        phone,
        state,
        street,
        website,
        zip_code,
      });

      if ("message" in manufacturer) {
        if (manufacturer.message === "Email already in use") {
          return forbidden(new EmailInUseError());
        }
        if (manufacturer.message === "Phone already in use") {
          return forbidden(new PhoneInUseError());
        }
        if (manufacturer.message === "Email and phone already in use") {
          return forbidden([new EmailInUseError(), new PhoneInUseError()]);
        }
      }

      return ok(manufacturer);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddManufacturerController {
  export type Request = {
    adress: string;
    city: string;
    email: string;
    name: string;
    number: string;
    phone: string;
    state: string;
    street: string;
    website: string;
    zip_code: string;
  };
}
