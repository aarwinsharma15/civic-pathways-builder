import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">Canadian Youth Institute</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            CYI is a youth-led non-profit unifying ambitious young Canadians and closing the opportunity gap through placements, mentorship, networking, and advocacy.
          </p>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Our Work", path: "/our-work" },
              { label: "Programs", path: "/programs" },
              { label: "Sponsors", path: "/sponsors" },
              { label: "Hiring", path: "/hiring" },
              { label: "Membership", path: "/membership" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">Organization</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <span>Brampton, Ontario</span>
            <a href="mailto:info.can.cyi@gmail.com" className="hover:text-primary-foreground transition-colors">
              info.can.cyi@gmail.com
            </a>
            <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/code-of-conduct" className="hover:text-primary-foreground transition-colors">Code of Conduct</Link>
            <Link to="/admin/login" className="hover:text-primary-foreground transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Canadian Youth Institute. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
