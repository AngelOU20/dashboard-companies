import React from "react";
import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.type";
import { User } from "lucide-react";
import { CompanyForm } from "../CompanyForm";

export const CompanyInformation: React.FC<CompanyInformationProps> = ({
  company,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 mt-5">
      <div className="p-4 rounded-lg shadow-md bg-background hover:shadow-lg">
        <div>
          <Image
            src={company.profileImage}
            alt={`${company.name} image`}
            width={50}
            height={50}
            className="mb-3 rounded-lg"
          />

          <CompanyForm company={company} />
        </div>
      </div>

      <div className="p-4 rounded-lg shadow-md bg-background hover:shadow-lg h-min">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <User className="w-5 h-5" />
            Contacts
          </div>
          <div>
            <p>New contact</p>
          </div>
        </div>

        <p>List contacts</p>
      </div>
    </div>
  );
};
