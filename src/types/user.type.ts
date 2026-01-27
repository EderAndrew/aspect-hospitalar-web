export type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  status: boolean;
  createdAt: string;
  updatedAt?: string;
};

enum Role {
  "ADMIN",
  "PATIENT",
}
