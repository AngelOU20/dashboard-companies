"use client";

import React from "react";
import axios from "axios";
import { FooterCompanyProps } from "./FooterCompany.type";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export const FooterCompany: React.FC<FooterCompanyProps> = ({ companyId }) => {
  const router = useRouter();

  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`);
      toast({
        title: "Company deleted!",
      });
      router.push("/companies");
    } catch (error) {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-end mt-5">
      <Button variant="destructive" onClick={onDeleteCompany}>
        <Trash className="w-4 h-4 mr-2" />
        Delete company
      </Button>
    </div>
  );
};
