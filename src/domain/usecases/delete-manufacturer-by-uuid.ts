export interface DeleteManufacturerByUuid {
  deleteByUuid: (
    manufacturerUuid: DeleteManufacturerByUuid.Params
  ) => Promise<DeleteManufacturerByUuid.Message>;
}

export namespace DeleteManufacturerByUuid {
  export type Params = string;
  export type Message = { message: string };
}
