import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import hiringHeroFallback from "@/assets/hiring-hero.jpg";
import { useSiteImages } from "@/hooks/use-site-images";

const APPLY_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdGInMfx_K-ZuBZ67BADlN7EBX4kUu4K9A4qFP3dF13A95xMA/viewform";

const Hiring = () => {
  const { images: siteImages, loaded } = useSiteImages();
  const hiringHero = siteImages["hiring_hero"] || (loaded ? hiringHeroFallback : null);

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {hiringHero && <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hiringHero}')` }} />}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Join Our Executive Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8"
          >
            We are looking for passionate and dedicated leaders aged 14–21 to join our executive team. Gain real leadership experience, build your resume, and make a difference in your community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="font-semibold text-base px-10">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-foreground mb-4"
          >
            Don't See Your Role?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto"
          >
            We're always open to hearing from motivated youth. Send us your resume and a brief message about your skills and interests.
          </motion.p>
          <a href="mailto:info.can.cyi@gmail.com" className="text-primary font-semibold text-lg hover:underline">
            info.can.cyi@gmail.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Hiring;
