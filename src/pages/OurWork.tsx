import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, Linkedin, Instagram } from "lucide-react";

const stats = [
  { value: "200,000+", label: "Impressions", icon: TrendingUp },
  { value: "100+", label: "Engaged Youth", icon: Users },
  { value: "20", label: "Team Members", icon: Award },
];

const OurWork = () => (
  <Layout>
    <PageSEO
      title="Our Work"
      description="See how the Canadian Youth Institute drives real civic impact — from OSAP advocacy campaigns to community canvassing across Brampton and the GTA."
      path="/our-work"
      keywords="CYI advocacy, youth civic work Canada, OSAP campaign, youth activism Brampton"
    />
    <section className="bg-primary page-header">
      <div className="container-narrow text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-primary-foreground/80"
        >
          Real civic work, built for lasting impact.
        </motion.p>
      </div>
    </section>

    {/* Growth Metrics — large & bold */}
    <section className="section-padding bg-card">
      <div className="container-wide text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-16"
        >
          Our Growth
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                <s.icon className="h-7 w-7 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="font-heading text-2xl md:text-7xl font-bold text-foreground mb-3">{s.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* OSAP Campaign */}
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Active Campaign
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fair Student Funding
          </h2>
          <p className="text-foreground/80 leading-relaxed max-w-3xl mb-6">
            CYI is mobilizing youth in response to OSAP cuts and education policy decisions that impact students across the GTA. We run petitions, door-to-door canvassing, and advocacy team initiatives!
          </p>

          <div className="mt-10 text-center">
            <p className="text-xl font-bold text-foreground mb-6">
              Follow Us On Our Socials to see what we do.
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.linkedin.com/company/canadian-youth-institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
              </a>
              <a
                href="https://www.instagram.com/cyi_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 md:h-8 md:w-8" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Get Involved</h2>
        <p className="text-secondary-foreground/85 text-lg mb-10">Join our advocacy campaigns and make a real difference.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
          <Button variant="default" size="lg" className="font-semibold px-10">
            Become a Member <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  </Layout>
);

export default OurWork;
