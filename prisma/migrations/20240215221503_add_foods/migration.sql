-- CreateTable
CREATE TABLE "Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "servingSize" TEXT NOT NULL,
    "calories" REAL NOT NULL,
    "carbs" REAL NOT NULL,
    "fat" REAL NOT NULL,
    "protein" REAL NOT NULL
);
