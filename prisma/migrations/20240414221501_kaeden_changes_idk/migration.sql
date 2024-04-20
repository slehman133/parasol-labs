/*
  Warnings:

  - Added the required column `status` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `PartnershipForm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContactForm" DROP CONSTRAINT "ContactForm_userId_fkey";

-- AlterTable
ALTER TABLE "ContactForm" ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PartnershipForm" ADD COLUMN     "status" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContactForm" ADD CONSTRAINT "ContactForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
