import { redirect } from "next/navigation";
import { AuthHydrator } from "@/components/auth-hydrator";
import { getMe } from "@/services/user.services";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const me = await getMe();
  if (!me) redirect("/");

  return (
    <>
      <AuthHydrator user={me.user} />
      <main className="flex flex-col min-h-screen w-full">{children}</main>
    </>
  );
}
