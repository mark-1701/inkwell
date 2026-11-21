import NavMenuDesktop from '@/components/NavMenuDesktop';
import NavMenuMobile from '@/components/NavMenuMobile';
import UnsupportedScreen from '@/components/UnsupportedScreen';

export default function DashboardPostsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Desktop */}
        <div className="hidden lg:block">
          <NavMenuDesktop />
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden">
          <NavMenuMobile />
        </div>

        <div className="w-full overflow-auto p-2 lg:p-12">{children}</div>
      </div>

      {/* <UnsupportedScreen /> */}
    </div>
  );
}
