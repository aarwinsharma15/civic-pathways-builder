import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => (
  <Layout>
    <PageSEO
      title="About CYI"
      description="Learn about the Canadian Youth Institute — from two founders to a 20-person civic institution empowering youth across Brampton and the GTA."
      path="/about"
      keywords="about CYI, Canadian Youth Institute story, youth civic organization Brampton"
    />
    <section className="bg-primary page-header">
      <div className="container-narrow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          About CYI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-primary-foreground/80"
        >
          From two founders to a structured civic institution.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-lg text-foreground/80 leading-relaxed mb-6">
            The Canadian Youth Institute was founded by two youth leaders in Brampton who recognized a gap between youth passion and structured civic opportunity. Too many young people were told their voices mattered — but given no real platform, no real structure, and no real pathway into political engagement.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-foreground/80 leading-relaxed mb-6">
            Within six months, CYI grew from 2 founders to a 20-person team of dedicated staff and volunteers. This rapid growth reflects both the demand for structured youth civic engagement and the organizational discipline CYI was built upon.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-lg text-foreground/80 leading-relaxed mb-6">
            Today, CYI operates advocacy campaigns, policy programming, and community outreach — all led by youth, for youth. Our focus is on Brampton and the Greater Toronto Area, with ambitions to expand our model to serve youth across Ontario and Canada.
          </motion.p>
          <motion.p variants={fadeUp} custom={4} className="text-lg text-foreground/80 leading-relaxed">
            We are not a social club. We are not a resume filler. We are a civic institution built by the generation that refuses to wait for a seat at the table — and is building its own.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-dark-section">
      <div className="container-wide text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2", label: "Founders" },
            { value: "20", label: "Team Members" },
            { value: "6", label: "Months of Growth" },
            { value: "200K+", label: "Impressions" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-heading text-2xl md:text-5xl font-bold text-dark-section-foreground mb-2">{s.value}</div>
              <div className="text-sm text-dark-section-foreground/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Join the Institution</h2>
        <p className="text-secondary-foreground/85 text-lg mb-10">Be part of what we're building.</p>
        <Link to="/membership">
          <Button variant="default" size="lg" className="font-semibold px-10">
            Become a Member <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
