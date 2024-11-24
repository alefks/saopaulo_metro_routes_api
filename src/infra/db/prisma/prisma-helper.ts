import { PrismaClient } from "@prisma/client";

export const PrismaHelper = {
  client: new PrismaClient(),

  create: async <T>(prismaModel: string, data: object): Promise<T> => {
    return PrismaHelper.client[prismaModel].create({
      data,
    }) as Promise<T>;
  },

  findUnique: async <T>(
    prismaModel: string,
    where: object
  ): Promise<T | null> => {
    return PrismaHelper.client[prismaModel].findUnique({
      where,
    }) as Promise<T | null>;
  },

  findMany: async <T>(prismaModel: string, where?: object): Promise<T[]> => {
    return PrismaHelper.client[prismaModel].findMany({
      where,
    }) as Promise<T[]>;
  },

  update: async <T>(
    prismaModel: string,
    where: object,
    data: object
  ): Promise<T> => {
    return PrismaHelper.client[prismaModel].update({
      where,
      data,
    }) as Promise<T>;
  },

  deleteByUuid: async <T>(prismaModel: string, uuid: string): Promise<T | null> => {
    try {
      return await PrismaHelper.client[prismaModel].delete({
        where: { id: uuid },
      });
    } catch (error) {
      return null;
    }
  },
};
