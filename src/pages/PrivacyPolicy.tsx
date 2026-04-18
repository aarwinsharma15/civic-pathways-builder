import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const PrivacyPolicy = () => (
  <Layout>
    <PageSEO title="Privacy Policy" description="How Youth of Peel collects, uses, and protects your information." path="/privacy-policy" />
    <section className="bg-primary page-header">
      <div className="container-narrow">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Privacy Policy</h1>
        <p className="text-lg text-primary-foreground/80">How YOP collects, uses, and protects your information.</p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-narrow space-y-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
          <p className="text-foreground/80 leading-relaxed">We collect information you submit through our forms, including your name, contact details, and application responses.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How We Use Information</h2>
          <p className="text-foreground/80 leading-relaxed">We use your information to process membership and team applications, communicate with you, and improve YOP programs and operations.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Data Sharing</h2>
          <p className="text-foreground/80 leading-relaxed">YOP does not sell your personal information. We only share data when legally required or when necessary to run organizational tools and services.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Contact</h2>
          <p className="text-foreground/80 leading-relaxed">For privacy questions, contact us at <a className="text-secondary font-semibold hover:underline" href="mailto:info.youthofpeel@gmail.com">info.youthofpeel@gmail.com</a>.</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
