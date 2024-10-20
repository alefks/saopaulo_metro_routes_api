import { Manufacturer } from "../../../../domain/models/manufacturer";

export interface LoadManufacturerByPhoneRepository {
  loadByPhone: (
    phone: string
  ) => Promise<Manufacturer | LoadManufacturerByPhoneRepository.Message>;
}

export namespace LoadManufacturerByPhoneRepository {
  export type Message = {
    message: string;
  };
}
