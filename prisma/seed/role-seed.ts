import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function executeRoleSeed() {
  const roleSeeds = await prisma.role.createMany({
    data: [
      {
        name: "Admin",
        description:
          "Manages the entire subway system, oversees operations, and ensures compliance with policies.",
      },
      {
        name: "Passenger",
        description:
          "Uses the subway for transportation, plans journeys, buys tickets, and receives service updates.",
      },
      {
        name: "Train Operator",
        description:
          "Operates trains, maintains schedules, ensures safety, and communicates with the control center.",
      },
      {
        name: "Ticket Booth Attendant",
        description:
          "Assists passengers with ticket purchases and travel information, and handles transactions.",
      },
      {
        name: "Mainentance Technician",
        description:
          "Inspects, repairs, and maintains subway infrastructure to ensure safety and reliability.",
      },
    ],
  });
}
