import { AI } from "./actions";



export default function AILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<AI>
    {children}
</AI>
  );
}
