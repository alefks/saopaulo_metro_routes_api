import { Manufacturer } from "../models/manufacturer";

export interface AddManufacturer {
  add: (
    manufacturer: AddManufacturer.Params
  ) => Promise<Manufacturer | AddManufacturer.Message>;
}

export namespace AddManufacturer {
  export type Params = Omit<Manufacturer, "id" | "createdAt" | "updatedAt">;
  export type Message = {
    message: string;
  };
}
