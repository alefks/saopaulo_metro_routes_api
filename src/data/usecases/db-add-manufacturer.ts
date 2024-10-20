import { Manufacturer } from "../../domain/models/manufacturer";
import { AddManufacturer } from "../../domain/usecases/add-manufacturer";
import { UuidGenerator } from "../../domain/usecases/generate-uuid";
import {
  LoadManufacturerByEmailRepository,
  LoadManufacturerByPhoneRepository,
} from "../protocols/db/manufacturer";
import { AddManufacturerRepository } from "../protocols/db/manufacturer/add-manufacturer-repository";

export class DbAddManufacturer implements AddManufacturer {
  constructor(
    private readonly uuidGenerator: UuidGenerator,
    private readonly addManufacturerRepository: AddManufacturerRepository,
    private readonly loadManufacturerByEmailRepository: LoadManufacturerByEmailRepository,
    private readonly loadManufacturerByPhoneRepository: LoadManufacturerByPhoneRepository
  ) {}

  async add(
    manufacturerData: AddManufacturer.Params
  ): Promise<Manufacturer | AddManufacturer.Message> {
    const [emailExists, phoneExists] = await Promise.all([
      this.loadManufacturerByEmailRepository.loadByEmail(
        manufacturerData.email
      ),
      this.loadManufacturerByPhoneRepository.loadByPhone(
        manufacturerData.phone
      ),
    ]);

    if (
      (emailExists && "id" in emailExists) ||
      (phoneExists && "id" in phoneExists)
    ) {
      return {
        message:
          emailExists &&
          "id" in emailExists &&
          phoneExists &&
          "id" in phoneExists
            ? "Email and phone already in use"
            : emailExists && "id" in emailExists
            ? "Email already in use"
            : "Phone already in use",
      };
    }

    const manufacturerToAdd = {
      ...manufacturerData,
      id: this.uuidGenerator.generate(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const manufacturer = await this.addManufacturerRepository.add(
      manufacturerToAdd
    );
    return manufacturer;
  }
}
