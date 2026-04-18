import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, HandshakeIcon, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const tiers = [
  {
    name: "Founding Partner",
    icon: Award,
    benefits: [
      "Logo on all event materials & website homepage",
      "Speaking opportunity at YOP flagship events",
      "Co-branded social media campaigns",
      "Priority access to YOP research & publications",
      "Exclusive invitations to roundtable discussions",
    ],
  },
  {
    name: "Community Partner",
    icon: HandshakeIcon,
    benefits: [
      "Logo on website sponsors page",
      "Social media recognition",
      "Invitation to YOP public events",
      "Mention in quarterly newsletter",
    ],
  },
  {
    name: "In-Kind Supporter",
    icon: Building2,
    benefits: [
      "Recognition on sponsors page",
      "Social media shout-out",
      "Certificate of partnership",
    ],
  },
];

const Sponsors = () => {
  return (
    <Layout>
      <PageSEO
        title="Sponsor & Partner"
        description="Partner with Youth of Peel. Support youth leadership programs and civic engagement initiatives across the Region of Peel."
        path="/sponsors"
        keywords="sponsor YOP, Youth of Peel sponsors, youth organization partnership, community sponsor Peel"
      />
      <section className="bg-primary page-header">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Support the next generation of civic leaders. YOP sponsors help us deliver programs, events, and resources that empower youth across the Region of Peel.
          </motion.p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            Sponsorship Tiers
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                custom={i}
                className="border border-border rounded-md p-5 md:p-8 bg-card hover:shadow-md transition-shadow"
              >
                <tier.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{tier.name}</h3>
                <ul className="space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6"
          >
            Become a Sponsor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-foreground/80 mb-10 max-w-xl mx-auto"
          >
            Interested in partnering with YOP? Reach out to discuss how we can work together.
          </motion.p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
