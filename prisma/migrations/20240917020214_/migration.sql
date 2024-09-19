-- CreateTable
CREATE TABLE "Journal" (
    "id" TEXT NOT NULL,
    "drinkId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "timeDrunk" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Journal_drinkId_key" ON "Journal"("drinkId");

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
