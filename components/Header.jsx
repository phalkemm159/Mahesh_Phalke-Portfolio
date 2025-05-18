import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tighter">
            mahesh<span className="text-accent">.dev</span>
          </h1>
        </Link>

        {/* desktop nav - hidden on mobile */}
        <div className="desktop-nav">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        </div>

        {/* mobile nav - visible only on small screens */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
