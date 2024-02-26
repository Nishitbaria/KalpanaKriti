import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subsciption";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  console.log(apiLimitCount);

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-800">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <div className="md:pl-72">
        <Navbar apiLimitCount={apiLimitCount} />
        {children}
      </div>
    </div>
  );
}
