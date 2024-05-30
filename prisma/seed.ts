import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const adminRoleSeed = await prisma.role.create({
    data: {
      name: "Admin",
      description:
        "Manages the entire subway system, oversees operations, and ensures compliance with policies.",
    },
  });

  const passengerRoleSeed = await prisma.role.create({
    data: { name: "Passenger", description: "Uses the subway for transportation, plans journeys, buys tickets, and receives service updates." },
  });

  const trainOperatorRoleSeed = await prisma.role.create({
    data: {
      name: "Train Operator",
      description: "Operates trains, maintains schedules, ensures safety, and communicates with the control center.",
    },
  });

  const ticketBoothAttendantRoleSeed = await prisma.role.create({
    data: {
      name: "Ticket Booth Attendant",
      description: "Assists passengers with ticket purchases and travel information, and handles transactions.",
    },
  });

  const mainentanceTechnicianRoleSeed = await prisma.role.create({
    data: {
      name: "Mainentance Technician",
      description: "Inspects, repairs, and maintains subway infrastructure to ensure safety and reliability.",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
