-- CreateTable
CREATE TABLE "PostDailyMetrics" (
    "postId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PostDailyMetrics_pkey" PRIMARY KEY ("postId","date")
);

-- CreateIndex
CREATE INDEX "PostDailyMetrics_date_idx" ON "PostDailyMetrics"("date");

-- AddForeignKey
ALTER TABLE "PostDailyMetrics" ADD CONSTRAINT "PostDailyMetrics_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
