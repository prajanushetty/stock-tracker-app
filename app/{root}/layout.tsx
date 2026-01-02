import Header from "@/components/ui/header";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({children,}: {children: React.ReactNode;}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

    if(!session?.user)
        redirect('/login');

    const user={
        id:session.user.id,
        email:session.user.email,
        name:session.user.name
    }
  return (
    <main className='min-h-screen text-gray-400'>
        <Header user={user} />
        <div className="container py-8">
            {children}
        </div>
    </main>
  );
}