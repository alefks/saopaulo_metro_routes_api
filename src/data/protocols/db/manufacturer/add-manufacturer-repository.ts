import { Manufacturer } from "@prisma/client"
import { AddManufacturer } from "../../../../domain/usecases/add-manufacturer"

export interface AddManufacturerRepository {
    add: (data: AddManufacturerRepository.Params) => Promise<Manufacturer>
}

export namespace AddManufacturerRepository {
    export type Params = AddManufacturer.Params
}