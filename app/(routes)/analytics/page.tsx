import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { CompaniesChart } from "./components/CompaniesChart/CompaniesChart";

export default async function AnalyticsPage() {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4 rounded-lg shadow-sm bg-background">
      <h2 className="mb-4 text-2xl">Analytics Page</h2>

      <div>
        <CompaniesChart companies={companies} events={events} />
      </div>
    </div>
  );
}
