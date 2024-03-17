export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>Puffin {children}</div>;
}
