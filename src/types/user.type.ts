import { Plan } from "./plan.type";

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  cpf: string;
  role: Role;
  avatar?: string;
  status: boolean;
  plan?: Plan;
};

enum Role {
  "ADMIN",
  "PATIENT",
}
