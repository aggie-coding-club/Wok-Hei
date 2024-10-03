import Sidebar from "@/components/Sidebar";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      <div className="flex flex-row text-textColor">
        <Sidebar>
          {children}
        </Sidebar>
        {/* <div className="w-full p-10" >
          {children}
        </div> */}
        
      </div>
    </main>
  );
}