import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cyiLogo from "@/assets/cyi-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Work", path: "/our-work" },
  { label: "Programs", path: "/programs" },
  { label: "Membership", path: "/membership" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "Hiring", path: "/hiring" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-primary shadow-lg"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground font-heading text-lg md:text-2xl font-bold tracking-tight">
          <img src={cyiLogo} alt="CYI Logo" className="h-9 md:h-12 w-auto shrink-0" />
          <span className="hidden sm:inline">Canadian Youth Institute</span>
          <span className="sm:hidden">CYI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium tracking-wide transition-colors text-primary-foreground/80 hover:text-primary-foreground ${
                location.pathname === l.path ? "text-primary-foreground" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="font-semibold">
              Become a Member
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              <Button variant="default" size="sm" className="w-full font-semibold mt-2">
                Become a Member
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
