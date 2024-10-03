export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex justify-center items-center h-screen w-full">
        {children}
      </div>
    </main>
  );
}