export interface DeleteManufacturerByUuidRepository {
  deleteByUuid: (
    manufacturerUuid: string
  ) => Promise<DeleteManufacturerByUuidRepository.Message>;
}

export namespace DeleteManufacturerByUuidRepository {
  export type Message = {
    message: string;
  };
}
