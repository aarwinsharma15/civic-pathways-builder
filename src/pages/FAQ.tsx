import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Youth of Peel (YOP)?",
    answer: "Youth of Peel (YOP) is a youth-led non-profit organization based in the Region of Peel that empowers young people through leadership development, civic engagement, and real community impact opportunities.",
  },
  {
    question: "What do we do?",
    answer: "YOP helps youth break into politics, civic engagement, and advocacy for youth rights across Brampton, Mississauga, and Caledon. We close opportunity gaps through placements, mentorship, networking, and advocacy.",
  },
  {
    question: "How can I join?",
    answer: "You can join by becoming a YOP member or by applying to be part of the executive team. Visit our Membership page or Hiring page to get started.",
  },
  {
    question: "Who is YOP for?",
    answer: "YOP is for ambitious youth across the Region of Peel who want leadership experience, civic involvement, and a stronger voice in shaping their communities and public policy.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <PageSEO
        title="FAQ"
        description="Frequently asked questions about Youth of Peel (YOP), what we do, and how to join through membership or hiring opportunities."
        path="/faq"
        keywords="YOP FAQ, Youth of Peel questions, join YOP, youth leadership FAQ Peel"
      />
      <section className="bg-primary page-header">
        <div className="container-narrow">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-primary-foreground/85"
          >
            Quick answers about YOP, what we do, and how you can join.
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
