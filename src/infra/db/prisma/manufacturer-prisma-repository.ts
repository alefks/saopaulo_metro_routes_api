import { PrismaHelper } from "./prisma-helper";
import {
  AddManufacturerRepository,
  LoadManufacturerByEmailRepository,
  LoadManufacturerByPhoneRepository,
  LoadManufacturers,
} from "../../../data/protocols/db/manufacturer";
import { Manufacturer } from "../../../domain/models/manufacturer";

export class ManufacturerPrismaRepository
  implements
    AddManufacturerRepository,
    LoadManufacturerByEmailRepository,
    LoadManufacturerByPhoneRepository
{
  private readonly prismaModel = "manufacturer";

  async add(data: AddManufacturerRepository.Params): Promise<Manufacturer> {
    const result = await PrismaHelper.create<Manufacturer>(
      this.prismaModel,
      data
    );
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

  async loadAll(): Promise<Manufacturer[] | LoadManufacturers.Message> {
    const manufacturers = await PrismaHelper.findMany<Manufacturer>(
      this.prismaModel
    );
    if (manufacturers.length === 0) {
      return { message: "No manufacturers found." };
    }
    return manufacturers;
  }

  async deleteByUuid(uuid: string): Promise<{ message: string } | null> {
    const deletedManufacturer = await PrismaHelper.deleteByUuid<Manufacturer>(
      this.prismaModel,
      uuid
    );
    if (!deletedManufacturer) {
      return { message: "Manufacturer not found." };
    }
    return null;
  }
}
