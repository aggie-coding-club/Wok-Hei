import Sidebar from "@/components/Sidebar";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  if (!userId)
    throw new Error("User not found");
  const user = await getUserById(userId);
  const username = user?.username;
  const email = user.email;

  return (
    <main>
      <div className="flex flex-row text-textColor">
        <Sidebar username={username} email={email}>
          {children}
        </Sidebar>
        {/* <div className="w-full p-10" >
          {children}
        </div> */}
        
      </div>
    </main>
  );
}