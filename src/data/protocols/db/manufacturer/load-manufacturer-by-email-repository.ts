import { Manufacturer } from "../../../../domain/models/manufacturer";

export interface LoadManufacturerByEmailRepository {
  loadByEmail: (email: string) => Promise<Manufacturer | LoadManufacturerByEmailRepository.Message>;
}

export namespace LoadManufacturerByEmailRepository {
  export type Message = {
    message: string;
  };
}
