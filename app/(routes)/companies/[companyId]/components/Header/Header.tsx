"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <Button
        onClick={() => router.push("/companies")}
        variant={"outline"}
        className="rounded-full mr-2 px-3 py-2"
      >
        <ArrowLeft strokeWidth={2} className="h-4 w-4" />
      </Button>
      <h1 className="text-xl font-semibold">Edit company</h1>
    </div>
  );
};
