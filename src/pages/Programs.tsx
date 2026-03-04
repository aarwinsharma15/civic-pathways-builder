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

const Programs = () => (
  <Layout>
    <PageSEO
      title="Programs"
      description="Explore CYI's youth programs — Youth Policy Council and Brampton Model United Nations. Free for members. Build policy skills, public speaking, and civic leadership."
      path="/programs"
      keywords="youth policy council, Brampton Model United Nations, CYI programs, youth leadership programs Canada"
    />
    <section className="bg-primary page-header">
      <div className="container-narrow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          Programs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-primary-foreground/80"
        >
          Structured civic programming for youth who want to lead.
        </motion.p>
      </div>
    </section>

    {/* Youth Policy Council */}
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="inline-block px-3 py-1 rounded-sm bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              Launching April 2026
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Youth Policy Council
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
              Members research policy issues affecting youth, draft structured recommendations, debate solutions, and present ideas publicly. The Youth Policy Council is CYI's flagship deliberative body.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="space-y-3 mb-8">
              {["Policy literacy & research skills", "Public speaking & presentation", "Legislative awareness", "Collaborative problem solving"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <Link to="/membership">
                <Button variant="outline">Apply Through Membership <ArrowRight className="ml-2 h-3 w-3" /></Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="inline-block px-3 py-1 rounded-sm bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              Launching December 2026
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Brampton Model United Nations
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
              A one-day conference simulation where delegates are assigned countries, draft resolutions, and engage in moderated debate on pressing global issues. Professional and rigorous.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="space-y-3 mb-8">
              {["Country representation & research", "Resolution drafting", "Moderated & unmoderated debate", "Awards & recognition"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <Link to="/membership">
                <Button variant="outline">Apply Through Membership <ArrowRight className="ml-2 h-3 w-3" /></Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Ready to Participate?</h2>
        <p className="text-secondary-foreground/85 text-lg mb-10">All programs are free for CYI members.</p>
        <Link to="/membership">
          <Button variant="default" size="lg" className="font-semibold px-10">
            Become a Member <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Programs;
