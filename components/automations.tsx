'use client';

import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack";

const AUTOMATION_PHASES = [
  {
    id: "automation-1",
    title: "AI Video Generation",
    description:
      "A boutique retailer releases weekly highlight videos of new arrivals and store promotions, increasing online engagement and foot traffic, all without hiring a videographer.",
    icons: ['/runway.svg', '/hugging_face.svg', '/premiere.svg']
  },
  {
    id: "automation-2",
    title: "Workflow Automation",
    description:
      "A national legal services provider automates document processing, client onboarding, and invoice generation—reducing operational overhead and eliminating bottlenecks as they scale to manage hundreds of new cases each month.",
    icons: ['/n8n.svg', '/claude-ai-icon.svg', '/supabase.svg', '/drive.svg', '/firebase.svg']
  },
  {
    id: "automation-3",
    title: "Content Creation",
    description:
      "A mid-sized SaaS company automatically generates product release notes, knowledge base articles, and monthly newsletters for thousands of customers, ensuring every update is covered without extra strain on their marketing team.",
    icons: ['/claude-ai-icon.svg', '/openai.svg']
  },
  {
    id: "automation-4",
    title: "Custom AI Model Training",
    description:
      "A digital marketing agency uses a custom AI to analyze social media feedback, instantly flagging posts or reviews that need urgent attention or suggesting responses in the brand's tone.",
    icons: ['/openai.svg', '/claude-ai-icon.svg', '/deepseek.svg', '/perplexity.svg', '/xai_light.svg']
  },
  {
    id: "automation-5",
    title: "Chatbots & Virtual Assistants",
    description:
      "A national chain of fitness centers deploys an AI chatbot on their website and WhatsApp, providing instant answers to membership questions, scheduling facility tours, and handling class bookings at scale across dozens of locations.",
    icons: ['/whatsapp.svg', '/openai.svg']
  },
  {
    id: "automation-6",
    title: "API & Data Integration",
    description:
      "A commercial property management firm integrates CRM, accounting, and maintenance ticketing systems so leasing teams, finance, and operations always work with up-to-date data—reducing manual errors and speeding up tenant requests.",
    icons: ['/supabase.svg', '/drive.svg', '/n8n.svg', '/anthropic.svg', '/cursor.svg']
  },
];

export function Automations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 text-gray-900 xl:px-12 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
          <div className="left-0 top-0 md:sticky md:h-screen md:py-12 flex flex-col justify-start">
            <h5 className="text-xs uppercase tracking-wide text-yellow-600 font-semibold">
              Our Automations
            </h5>
            <h2 className="mb-6 mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              What Automation Really Looks Like
            </h2>
            <p className="max-w-prose text-lg text-gray-600 leading-relaxed">
              No jargon, just real scenarios. Here's how companies like yours put automation to work every day.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Proven Automations</p>
                <p className="text-sm text-gray-600">6 strategic automations for success</p>
              </div>
            </div>
          </div>
          
          <ContainerScroll className="min-h-[500vh] space-y-8 py-12">
            {AUTOMATION_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="rounded-2xl border border-gray-200 p-8 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                    {phase.title}
                  </h2>
                  {index === 0 ? (
                    // Card 1 (AI Video Generation) gets Zak's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/zak_headshot.jpg" 
                        alt="Zak"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 1 ? (
                    // Card 2 (Workflow Automation) gets Mathew's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/passport photo.jpg" 
                        alt="Mathew"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 2 ? (
                    // Card 3 (Content Creation) gets Mathew's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/passport photo.jpg" 
                        alt="Mathew"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 3 ? (
                    // Card 4 (Custom AI Model Training) gets Mathew's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/passport photo.jpg" 
                        alt="Mathew"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 4 ? (
                    // Card 5 (Chatbots & Virtual Assistants) gets Zak's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/zak_headshot.jpg" 
                        alt="Zak"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // Card 6 (API & Data Integration) gets Mathew's photo
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src="/passport photo.jpg" 
                        alt="Mathew"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {phase.description}
                </p>

                <div className="mt-6 flex items-center space-x-3">
                  {phase.icons.map((iconPath, iconIndex) => (
                    <img 
                      key={iconIndex}
                      src={iconPath} 
                      alt={iconPath.split('/').pop()?.split('.')[0] || 'Icon'} 
                      className="w-6 h-6" 
                    />
                  ))}
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
}