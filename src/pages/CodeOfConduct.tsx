import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const CodeOfConduct = () => (
  <Layout>
    <PageSEO title="Code of Conduct" description="Standards for respectful, safe, and mission-driven participation at the Canadian Youth Institute." path="/code-of-conduct" />
    <section className="bg-primary page-header">
      <div className="container-narrow">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Code of Conduct</h1>
        <p className="text-lg text-primary-foreground/80">Standards for respectful, safe, and mission-driven participation at CYI.</p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-narrow space-y-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Respect and Inclusion</h2>
          <p className="text-foreground/80 leading-relaxed">All members, volunteers, and applicants must treat others with respect regardless of background, identity, or political perspective.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Professional Conduct</h2>
          <p className="text-foreground/80 leading-relaxed">Represent CYI responsibly in meetings, events, and digital spaces. Harassment, hate speech, and intimidation are not tolerated.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Accountability</h2>
          <p className="text-foreground/80 leading-relaxed">Violations may result in warnings, role removal, or membership suspension depending on severity and repeated behavior.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Report Concerns</h2>
          <p className="text-foreground/80 leading-relaxed">To report a concern, email <a className="text-secondary font-semibold hover:underline" href="mailto:info.can.cyi@gmail.com">info.can.cyi@gmail.com</a>.</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CodeOfConduct;
