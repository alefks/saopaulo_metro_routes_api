import { Manufacturer } from "../../domain/models/manufacturer";

export interface LoadManufacturers {
  load: () => Promise<LoadManufacturers.Result | LoadManufacturers.Message>;
}

export namespace LoadManufacturers {
  export type Result = Manufacturer[];
  export type Message = {
    message: string;
  };
}
