/*
  Warnings:

  - The `status` column on the `ContactForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `PartnershipForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "status_type" AS ENUM ('delivered', 'active', 'completed');

-- AlterTable
ALTER TABLE "ContactForm" DROP COLUMN "status",
ADD COLUMN     "status" "status_type" NOT NULL DEFAULT 'delivered';

-- AlterTable
ALTER TABLE "PartnershipForm" DROP COLUMN "status",
ADD COLUMN     "status" "status_type" NOT NULL DEFAULT 'delivered';
