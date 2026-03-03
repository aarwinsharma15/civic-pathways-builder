import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the Canadian Youth Institute (CYI)?",
    answer:
      "The Canadian Youth Institute (CYI) is a youth-led non-profit organization that empowers young Canadians through leadership development, civic engagement, and real community impact opportunities.",
  },
  {
    question: "What do we do?",
    answer:
      "CYI helps youth break into politics, civic engagement, and advocacy for youth rights. We close opportunity gaps through placements, mentorship, networking, and advocacy.",
  },
  {
    question: "How can I join?",
    answer:
      "You can join by becoming a CYI member or by applying to be part of the executive team. Visit our Membership page or Hiring page to get started.",
  },
  {
    question: "Who is CYI for?",
    answer:
      "CYI is for ambitious youth who want leadership experience, civic involvement, and a stronger voice in shaping their communities and public policy.",
  },
];

const FAQ = () => (
  <Layout>
    <PageSEO
      title="FAQ"
      description="Frequently asked questions about the Canadian Youth Institute (CYI), what we do, and how to join through membership or hiring opportunities."
      path="/faq"
      keywords="CYI FAQ, Canadian Youth Institute questions, join CYI, youth leadership FAQ"
    />

    <section className="bg-primary section-padding pt-32 md:pt-40">
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
          Quick answers about CYI, what we do, and how you can join.
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

export default FAQ;
