/*
  Warnings:

  - You are about to drop the column `endDate` on the `Excursion` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Excursion` table. All the data in the column will be lost.
  - Added the required column `date` to the `Excursion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureTime` to the `Excursion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `Excursion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Excursion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfTravelers` to the `Excursion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Excursion" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "availability" TEXT[],
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "departureTime" TEXT NOT NULL,
ADD COLUMN     "distance" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "numberOfTravelers" INTEGER NOT NULL;
