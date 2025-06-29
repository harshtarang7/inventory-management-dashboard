import Navbar from "./(components)/Navbar/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"light flex bg-gray-50 text-gray-900 w-full min-h-screen"}>
      <Sidebar />
      <main
        className={"flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24"}
      >
        <Navbar />
        dashboard wrapper:{children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
