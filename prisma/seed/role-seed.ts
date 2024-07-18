import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function executeRoleSeed() {
  await prisma.role.deleteMany();

  await prisma.role.createMany({
    data: [
      {
        id: "3bd1216e-cc68-46cc-bcf9-1a00e59b0bc7",
        name: "Admin",
        description:
          "Manages the entire subway system, oversees operations, and ensures compliance with policies.",
      },
      {
        id: "2520fd96-6d93-4149-873b-55438be44439",
        name: "Passenger",
        description:
          "Uses the subway for transportation, plans journeys, buys tickets, and receives service updates.",
      },
      {
        id: "2ec4ea7f-8c8c-4316-b8f1-ce34331e6989",
        name: "Train Operator",
        description:
          "Operates trains, maintains schedules, ensures safety, and communicates with the control center.",
      },
      {
        id: "7a0a5524-2957-4775-a86e-2d664e2482b9",
        name: "Ticket Booth Attendant",
        description:
          "Assists passengers with ticket purchases and travel information, and handles transactions.",
      },
      {
        id: "11860955-69c1-48be-b123-bc52138f180a",
        name: "Mainentance Technician",
        description:
          "Inspects, repairs, and maintains subway infrastructure to ensure safety and reliability.",
      },
    ],
  });
}
