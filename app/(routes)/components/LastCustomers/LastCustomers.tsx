import { Building } from "lucide-react";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon";
import { CustomersTable } from "../CustomersTable/CustomersTable";
export const LastCustomers = () => {
  return (
    <div className="mb-4 shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={Building} />
        <p className="text-xl">Last customers</p>
      </div>
      <div>
        <CustomersTable />
      </div>
    </div>
  );
};
