export interface MetricCard {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "flat";
}

export const dashboardMetrics: MetricCard[] = [
  { label: "Revenue", value: "$24,860", change: "+12.4%", trend: "up" },
  { label: "Orders", value: "1,284", change: "+8.1%", trend: "up" },
  { label: "Customers", value: "8,492", change: "+5.7%", trend: "up" },
  { label: "Conversion", value: "4.82%", change: "+0.6%", trend: "up" },
];
