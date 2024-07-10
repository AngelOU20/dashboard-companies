import { TableIntegrationProps } from "./TableIntegrations.type";

export const dataTableIntegration: TableIntegrationProps[] = [
  {
    app: "Stripe",
    icon: "/images/stripe.svg",
    type: "Finance",
    rate: 60,
    profit: 450,
  },
  {
    app: "Zapier",
    icon: "/images/zapier.svg",
    type: "CRM",
    rate: 20,
    profit: 120.5,
  },
  {
    app: "Shopify",
    icon: "/images/shopify.svg",
    type: "Marketplace",
    rate: 80,
    profit: 879.89,
  }
];