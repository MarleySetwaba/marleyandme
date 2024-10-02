import Footer from "@/components/Marley/Footer";
import Nav from "@/components/Marley/Nav";

export default function MarleyLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

<>
          <Nav/>
          {children}
          <Footer/>
          </>

    );
  }