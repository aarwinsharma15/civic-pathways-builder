import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useSiteImages } from "@/hooks/use-site-images";

import heroBgFallback from "@/assets/hero-bg.jpg";
import actionCanvassing from "@/assets/action-canvassing.jpg";
import actionSpeaking from "@/assets/action-speaking.jpg";
import actionModelun from "@/assets/action-modelun.jpg";
import actionPetition from "@/assets/action-petition.jpg";
import actionRoundtable from "@/assets/action-roundtable.jpg";
import actionLeadership from "@/assets/action-leadership.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const actionFallbacks = [
  { src: actionCanvassing, alt: "Youth canvassing in the community", key: "action_1" },
  { src: actionSpeaking, alt: "Youth speaking publicly at a civic event", key: "action_2" },
  { src: actionModelun, alt: "Model United Nations debate session", key: "action_3" },
  { src: actionPetition, alt: "Community petition signing", key: "action_4" },
  { src: actionRoundtable, alt: "Civic roundtable discussion", key: "action_5" },
  { src: actionLeadership, alt: "Group leadership meeting", key: "action_6" },
];

const stats = [
  { value: "200,000+", label: "Youth Reached Through Impressions" },
  { value: "100+", label: "Youth Actively Engaged in 6 Months" },
  { value: "20", label: "Staff & Volunteer Team" },
  { value: "2 → 20", label: "Growth From Founders to Full Team" },
];

const Index = () => {
  const siteImages = useSiteImages();
  const heroBg = siteImages["hero_bg"] || heroBgFallback;
  const actionImages = actionFallbacks.map(a => ({
    src: siteImages[a.key] || a.src,
    alt: a.alt,
  }));

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Empowering Youth to Lead Change
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="font-semibold text-base px-8">
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/our-work">
              <Button variant="default" size="lg" className="font-semibold text-base px-8">
                Our Work
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 overflow-hidden rounded-full border border-primary-foreground/20 bg-primary-foreground/10 py-2"
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-8 px-4"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="text-sm md:text-base font-semibold tracking-wide uppercase text-primary-foreground">
                  Join Today
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/85 mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            The Canadian Youth Institute (CYI) is a youth-led non-profit organization dedicated to unifying ambitious young Canadians and closing the opportunity gap they all face.
          </motion.p>
        </div>
      </section>

      {/* IN ACTION */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              In Action
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-2xl">
              CYI youth engaging in real civic participation across Brampton and the Greater Toronto Area.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {actionImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="aspect-[4/3] overflow-hidden rounded-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg leading-relaxed text-foreground/80">
              The Canadian Youth Institute (CYI) is a youth-led non-profit organization dedicated to unifying ambitious young Canadians and closing the opportunity gap they all face. We aim to build a future where every young person has the resources and network to shape their own lives by empowering individuals through placements, mentorship, and networking, while driving national reform through advocacy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding bg-dark-section">
        <div className="container-wide text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <div className="font-heading text-3xl md:text-5xl font-bold text-dark-section-foreground mb-2">
                  {s.value}
                </div>
                <div className="text-sm md:text-base text-dark-section-foreground/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-dark-section-foreground/70 text-lg"
          >
            One of Brampton's largest youth-led civic organizations.
          </motion.p>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            Our Programs
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Youth Policy Council",
                desc: "A structured forum where youth research policy issues, draft recommendations, and present solutions. Members gain experience in policy literacy, public speaking, and legislative awareness.",
                timeline: "Launching April 2026",
                link: "/programs",
              },
              {
                title: "Brampton Model United Nations",
                desc: "A one-day conference simulation where delegates represent countries, draft resolutions, and engage in moderated debate on pressing global issues.",
                timeline: "Launching December 2026",
                link: "/programs",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-md p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <p className="text-sm font-medium text-secondary mb-6">{p.timeline}</p>
                <Link to={p.link}>
                  <Button variant="outline" size="sm">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6"
          >
            Ready to Break Into Politics?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-secondary-foreground/85 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            If you are passionate about your community, want your voice heard, and are looking to gain volunteer hours, resume-building experience, and real leadership skills — CYI membership is your entry point.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVgO7owVS8wreW0hUycVucNB8WpM2WEDb6Lk6Q78Hc24EGLw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="font-semibold text-base px-10">
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
