-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" VARCHAR(30) NOT NULL,
    "roleId" TEXT NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "address" VARCHAR(30) NOT NULL,
    "street" VARCHAR(30) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "country" VARCHAR(15) NOT NULL,
    "postal_code" VARCHAR(10) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "nationality" VARCHAR(20) NOT NULL,
    "language" VARCHAR(15) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
