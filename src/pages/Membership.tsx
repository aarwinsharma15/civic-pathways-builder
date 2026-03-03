import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Clock,
  FileText,
  Award,
  BookOpen,
  Globe,
  Mail,
  MessageSquare,
  Megaphone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const benefits = [
  { icon: Megaphone, text: "Direct involvement in youth-led advocacy campaigns" },
  { icon: Clock, text: "Volunteer hours documentation" },
  { icon: FileText, text: "Resume-building civic experience" },
  { icon: Award, text: "Leadership development opportunities" },
  { icon: BookOpen, text: "Free participation in the Youth Policy Council (April 2026)" },
  { icon: Globe, text: "Free access to Brampton Model United Nations (December 2026)" },
  { icon: Mail, text: "Weekly civic newsletter" },
  { icon: MessageSquare, text: "Access to CYI Discord community" },
  { icon: Users, text: "Opportunity to join campaign teams, including OSAP advocacy efforts" },
];

const whoFor = [
  "Want to break into politics",
  "Are passionate about their communities",
  "Want their voices heard",
  "Want real-world civic experience",
  "Want to build leadership credentials",
];

const Membership = () => (
  <Layout>
    <PageSEO
      title="Membership"
      description="Join the Canadian Youth Institute. Get volunteer hours, leadership experience, access to programs, and a real platform for civic engagement. Free membership for youth."
      path="/membership"
      keywords="CYI membership, join CYI, youth membership Canada, volunteer hours youth, civic engagement membership"
    />
    <section className="bg-primary section-padding pt-32 md:pt-40">
      <div className="container-narrow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8"
        >
          Membership
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-primary-foreground/80 leading-relaxed"
        >
          CYI Membership is designed for youth who are ready to break into politics, advocacy, and civic leadership. Whether you want to gain volunteer hours, build experience for your resume, strengthen your leadership skills, or simply ensure your voice is heard — this is your starting point.
        </motion.p>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          What Members Receive
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex items-start gap-4 p-5 rounded-md border border-border bg-card"
            >
              <b.icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-sm leading-relaxed">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Who this is for */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
        >
          Who This Is For
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-foreground/80 mb-8"
        >
          This is for youth who:
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {whoFor.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex items-center gap-3 text-foreground/80"
            >
              <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="text-base md:text-lg">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
          Join CYI Today
        </h2>
        <p className="text-secondary-foreground/85 text-lg mb-10">
          No vague language. No empty promises. Just real civic experience, real leadership, and a real voice.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-10">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  </Layout>
);

export default Membership;
