import UnsupportedScreen from '@/components/UnsupportedScreen';

export default function DashboardPostsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden h-full lg:block">{children}</div>
      <UnsupportedScreen />
    </>
  );
}
