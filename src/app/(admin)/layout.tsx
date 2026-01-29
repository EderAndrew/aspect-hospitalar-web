import { redirect } from "next/navigation";
import { AuthHydrator } from "@/components/auth-hydrator";
import { getMe } from "@/services/user.service";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarHeaderApp } from "@/components/sidebar/sidebar-header";

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
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main className="flex flex-col min-h-screen w-full">
          <SidebarHeaderApp />
          {children}
        </main>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
