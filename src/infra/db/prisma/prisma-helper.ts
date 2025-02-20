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

  updateMany: async (
    prismaModel: string,
    where: object,
    data: object
  ): Promise<{ count: number }> => {
    return PrismaHelper.client[prismaModel].updateMany({
      where,
      data,
    });
  },

  deleteByUuid: async (
    prismaModel: string,
    uuid: string
  ): Promise<{ count: number }> => {
    try {
      return await PrismaHelper.client[prismaModel].deleteMany({
        where: { id: uuid },
      });
    } catch (error) {
      return { count: 0 };
    }
  },
};
