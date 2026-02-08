export type Plan = {
  id: string;
  name: string;
  type: PlanType;
  status: boolean;
};

enum PlanType {
  "INDIVIDUAL",
  "FAMILIAR",
}
