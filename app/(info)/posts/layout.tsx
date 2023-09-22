export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>PostLayout</span>
      {children}
    </div>
  );
}
