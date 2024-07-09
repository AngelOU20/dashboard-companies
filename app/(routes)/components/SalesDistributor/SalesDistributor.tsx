import { CustomIcon } from "@/components/CustomIcon";
import { BarChart } from "lucide-react";
import { GraphicSuscribers } from "../GraphicSuscribers/GraphicSuscribers";

export const SalesDistributor = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Last customers</p>
      </div>
      <div>
        <GraphicSuscribers />
      </div>
    </div>
  );
};
