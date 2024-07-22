import React from "react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributor } from "./components/SalesDistributor";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";
// import { CardSummary } from "./components/CardSummary";
// import { dataCardSummary } from "./components/CardSummary/CardSummary.data";

export default function Home() {
  return (
    <section>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardSummary.map((item) => (
          <React.Fragment key={item.title}>
            <CardSummary
              icon={item.icon}
              total={item.total}
              average={item.average}
              title={item.title}
              tooltipText={item.tooltipText}
            />
          </React.Fragment>
        ))}
      </div> */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributor />
      </div>

      <div className="flex flex-wrap gap-y-4 md:gap-y-0 mt-12 md:mb-10 md:gap-x-10 justify-between">
        <TotalSuscribers />
        <ListIntegrations />
      </div>
    </section>
  );
}
