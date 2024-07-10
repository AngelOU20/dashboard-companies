"use client";

import React from "react";
import { CustomIcon } from "@/components/CustomIcon";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import { Percent } from "lucide-react";
import { dataSuscribers as data } from "./TotalSuscribers.data";

export const TotalSuscribers = () => {
  return (
    <div className="mb-4 lg:mb-8 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={Percent} />
        <p className="text-xl">Total Suscribers</p>
      </div>
      <div className="w-full h-[200px] p-5">
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <PieChart>
            <Pie
              dataKey={"value"}
              data={data}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
