-- CreateTable
CREATE TABLE "PartnershipForm" (
    "id" SERIAL NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "companyWebpage" VARCHAR(255),
    "streetAddress" VARCHAR(255) NOT NULL,
    "streetAddress2" VARCHAR(255),
    "city" VARCHAR(255) NOT NULL,
    "stateOrProvince" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "services" TEXT[],
    "additionalInfo" TEXT,
    "contactName" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "emailAddress" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnershipForm_pkey" PRIMARY KEY ("id")
);
