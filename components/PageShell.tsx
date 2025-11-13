import Header from "@/components/Header";

export default function PageShell({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="w-fill md:w-80">
          <Header />
        </div>
        <div className="w-fill md:w-auto">{children}</div>
      </div>
    </>
  );
}
