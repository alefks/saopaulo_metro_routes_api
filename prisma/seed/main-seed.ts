import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { executeRoleSeed } from "./role-seed";

async function main() {
  executeRoleSeed();
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
