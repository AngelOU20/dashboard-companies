import { CardSummaryProps } from "./CardSummary.type";
import { CustomIcon } from "@/components/CustomIcon/CustomIcon";
import { CustomTooltip } from "@/components/CustomTooltip/CustomTooltip";
import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpLeft, TrendingUp } from "lucide-react";

const CardSummary: React.FC<CardSummaryProps> = ({
  icon: Icon,
  total,
  average,
  title,
  tooltipText,
}) => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <CustomIcon icon={Icon} />
          {title}
        </div>
        <CustomTooltip content={tooltipText} />
      </div>
      <div className="flex gap-4 mt-2 md:mt-4">
        <p className="text-2xl">{total}</p>
        <div
          className={cn(
            `flex items-center gap-1 px-2 py-2 text-xs text-white rounded-full h-[1.25rem] bg-black dark:bg-secondary`
          )}
        >
          {average}%
          {average < 20 && (
            <MoveDownRight strokeWidth={2} className="h-3 w-3" />
          )}
          {average > 20 && average < 70 && (
            <MoveUpLeft strokeWidth={2} className="h-3 w-3" />
          )}
          {average > 70 && <TrendingUp strokeWidth={2} className="h-3 w-3" />}
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
