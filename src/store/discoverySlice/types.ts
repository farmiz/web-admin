export type RiskLevel = "high" | "moderate" | "low"
export interface DiscoveryProps {
    id?: string;
    name: string;
    duration: {
      type: "day" | "month" | "year",
      value: number;
    };
    description: string;
    tags: string[];
    amount: number;
    profitPercentage: number;
    riskLevel: RiskLevel;
    startDate: Date;
    endDate: Date;
    closingDate: Date;
  }
  