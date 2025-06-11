'use client';

import { HelpCircle, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: 'what-is-automation',
    question: 'What exactly do you mean by "automation that doesn\'t need a dev team"?',
    answer: 'We create intelligent automation systems using no-code and low-code platforms combined with AI tools. This means you get sophisticated business automation without needing to hire developers, manage technical teams, or deal with complex coding. Our systems handle everything from lead generation to customer communications automatically.'
  },
  {
    id: 'how-long-setup',
    question: 'How long does it take to set up automation systems?',
    answer: 'Most automation systems can be implemented within 2-4 weeks, depending on complexity. Simple workflows like email automation can be live within days, while comprehensive multi-channel systems typically take 2-3 weeks. We work in phases so you start seeing results quickly while we build out more advanced features.'
  },
  {
    id: 'what-businesses',
    question: 'What types of businesses benefit most from your automation?',
    answer: 'Any business that deals with repetitive tasks, customer communications, or lead management can benefit. We\'ve worked with service providers, e-commerce stores, consultants, agencies, and SaaS companies. If you find yourself doing the same tasks repeatedly or struggling to follow up with leads consistently, automation can help.'
  },
  {
    id: 'cost-vs-hiring',
    question: 'How does the cost compare to hiring a development team?',
    answer: 'Our automation solutions typically cost 70-90% less than hiring a development team. Instead of paying $100k+ annually for developers plus ongoing maintenance costs, you get comprehensive automation systems for a fraction of that investment. Plus, our systems start working immediately rather than taking months to develop.'
  },
  {
    id: 'maintenance-support',
    question: 'Do I need technical knowledge to maintain these systems?',
    answer: 'Not at all. We design our automation systems to be user-friendly and self-maintaining. We provide training on how to monitor and make basic adjustments, plus ongoing support for any technical issues. Most clients find they can manage day-to-day operations without any technical background.'
  },
  {
    id: 'integration-existing',
    question: 'Can your automation integrate with my existing tools and software?',
    answer: 'Yes, we specialize in connecting different platforms and tools. Whether you use CRM systems, email platforms, social media schedulers, or industry-specific software, we can typically integrate everything into a seamless automated workflow. We\'ll audit your current tools during our consultation.'
  },
  {
    id: 'roi-timeline',
    question: 'How quickly will I see return on investment?',
    answer: 'Most clients see positive ROI within 30-60 days. The time savings alone often justify the investment - if automation saves you 10 hours per week, that\'s equivalent to hiring a part-time employee. Add in improved lead conversion and customer retention, and the returns compound quickly.'
  },
  {
    id: 'customization',
    question: 'Can the automation be customized for my specific industry or needs?',
    answer: 'Absolutely. Every automation system we build is customized for your specific business, industry, and goals. We don\'t use cookie-cutter templates - we analyze your unique processes and create tailored solutions. This includes industry-specific terminology, compliance requirements, and specialized workflows.'
  }
];

export function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6 xl:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-4">
            Frequently Asked Questions
          </h5>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Got <span className="text-yellow-400">Questions?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our automation systems and how they can transform your business operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white border border-gray-200 rounded-xl mb-4 px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-yellow-600 transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Still Have Questions?
              </h3>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're here to help you understand how automation can work for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 flex items-center">
                Schedule Free Consultation
                <Zap className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}