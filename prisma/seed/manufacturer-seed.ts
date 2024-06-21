import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function executeManufacturerSeed() {
  await prisma.manufacturer.createMany({
    data: [
      {
        name: "Fabrica de Trens Brasil",
        phone: "+55 (11) 98765-4321",
        email: "contato@fabrica-trens.com.br",
        adress: "Avenida das Nacoes",
        street: "Nacoes",
        number: "1234",
        city: "Sao Paulo",
        state: "Sao Paulo",
        zip_code: "01000-000",
        website: "https://www.fabrica-trens.com.br",
      },
      {
        name: "Metro Equipamentos Ltda",
        phone: "+55 (21) 91234-5678",
        email: "vendas@metroequip.com.br",
        adress: "Rua dos Trilhos",
        street: "Trilhos",
        number: "5678",
        city: "Sao Paulo ",
        state: "Sao Paulo",
        zip_code: "20000-000",
        website: "https://www.metroequip.com.br",
      },
      {
        name: "Tecnologia Ferroviaria SA",
        phone: "+55 (31) 92345-6789",
        email: "suporte@tecferrovia.com.br",
        adress: "Avenida Central",
        street: "Central",
        number: "910",
        city: "Sao Paulo",
        state: "Sao Paulo",
        zip_code: "30000-000",
        website: "https://www.tecferrovia.com.br",
      },
      {
        name: "Soluções Metroviarias",
        phone: "+55 (41) 93456-7890",
        email: "info@solucoesmetro.com.br",
        adress: "Rua da Estacao",
        street: "Estacao",
        number: "1122",
        city: "Sao Paulo",
        state: "Sao Paulo",
        zip_code: "40000-000",
        website: "https://www.solucoesmetro.com.br",
      },
      {
        name: "Inovacoes em Transporte",
        phone: "+55 (51) 94567-8901",
        email: "contato@inovatransporte.com.br",
        adress: "Rua Nova",
        street: "Nova",
        number: "3344",
        city: "Sao Paulo",
        state: "Sao Paulo",
        zip_code: "90000-000",
        website: "https://www.inovatransporte.com.br",
      },
    ],
  });
}
