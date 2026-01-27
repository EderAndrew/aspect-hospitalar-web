export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  status: boolean;
};

enum Role {
  "ADMIN",
  "PATIENT",
}
