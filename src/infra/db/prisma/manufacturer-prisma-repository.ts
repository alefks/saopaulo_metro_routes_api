import { PrismaHelper } from "./prisma-helper";
import {
  AddManufacturerRepository,
  LoadManufacturerByEmailRepository,
  LoadManufacturerByPhoneRepository,
} from "../../../data/protocols/db/manufacturer";
import { Manufacturer } from "../../../domain/models/manufacturer";

export class ManufacturerPrismaRepository
  implements
    AddManufacturerRepository,
    LoadManufacturerByEmailRepository,
    LoadManufacturerByPhoneRepository
{
  async add(data: AddManufacturerRepository.Params): Promise<Manufacturer> {
    const result = await PrismaHelper.client.manufacturer.create({
      data,
    });
    return result;
  }

  async loadByEmail(
    email: string
  ): Promise<Manufacturer | LoadManufacturerByEmailRepository.Message> {
    const manufacturer = await PrismaHelper.client.manufacturer.findUnique({
      where: { email },
    });
    if (manufacturer == null) {
      return {
        message: "No manufacturer found with this email.",
      };
    } else {
      return manufacturer;
    }
  }

  async loadByPhone(
    phone: string
  ): Promise<Manufacturer | LoadManufacturerByPhoneRepository.Message> {
    const manufacturer = await PrismaHelper.client.manufacturer.findUnique({
      where: { phone },
    });
    if (manufacturer == null) {
      return {
        message: "No manufacturer found with this phone.",
      };
    } else {
      return manufacturer;
    }
  }
}
