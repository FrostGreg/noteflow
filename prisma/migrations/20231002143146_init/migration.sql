-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "chips" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
