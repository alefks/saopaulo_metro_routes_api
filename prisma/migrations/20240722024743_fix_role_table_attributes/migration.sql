/*
  Warnings:

  - You are about to alter the column `name` on the `Role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `description` on the `Role` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(150);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
