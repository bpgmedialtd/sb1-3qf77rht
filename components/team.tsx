'use client';

import { useState } from 'react';
import { User, Bot, Zap, Brain, Video, Workflow } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 'mathew',
    name: 'Mathew',
    role: 'Automations and Systems',
    description: 'Designs and implements intelligent automation workflows that streamline business operations and eliminate repetitive tasks.',
    icon: User,
    color: 'bg-blue-500',
    image: '/passport photo.jpg',
    tools: [
      { name: 'Bolt', icon: '/bolt-new.svg' },
      { name: 'Anthropic', icon: '/anthropic.svg' },
      { name: 'Claude AI', icon: '/claude-ai-icon.svg' }
    ]
  },
  {
    id: 'zak',
    name: 'Zak',
    role: 'AI Video Creation',
    description: 'Specializes in AI-powered video generation and visual content creation that engages audiences and drives conversions.',
    icon: User,
    color: 'bg-green-500',
    image: '/zak_headshot.jpg',
    tools: [
      { name: 'Webflow', icon: '/webflow.svg' },
      { name: 'Runway', icon: '/runway.svg' },
      { name: 'Figma', icon: '/figma.svg' }
    ]
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    role: 'Primary Tools',
    description: 'Advanced AI system that orchestrates and utilizes multiple specialized tools to deliver comprehensive automation solutions across all business functions.',
    icon: Bot,
    color: 'bg-gradient-to-br from-purple-600 to-indigo-600',
    tools: [
      { name: 'Cursor', icon: '/cursor.svg' },
      { name: 'OpenAI', icon: '/openai-logo.svg' },
      { name: 'ChatGPT', icon: '/chatgpt.svg' },
      { name: 'Lovable', icon: '/lovable.svg' },
      { name: 'Anthropic', icon: '/anthropic.svg' },
      { name: 'Claude AI', icon: '/claude-ai-icon.svg' },
      { name: 'Perplexity', icon: '/perplexity.svg' },
      { name: 'LinkedIn', icon: '/linkedin.svg' }
    ]
  }
];

export function Team() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-4">
            Meet The Team
          </h5>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Human Expertise + <span className="text-yellow-400">Performance Enhancers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine human creativity with AI tools that do the heavy lifting. Think of AI as legal steroids for business owners, and we're juiced to the gills.
          </p>
        </div>

        {/* Human Team */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={member.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  {/* Avatar */}
                  <div className="mb-6">
                    {member.image ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-yellow-600 font-semibold mb-4">{member.role}</p>
                  
                  {/* Tools Section */}
                  {member.tools ? (
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed mb-4">{member.description}</p>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Primary Tools:</p>
                        <div className="flex items-center space-x-2 flex-wrap gap-2">
                          {member.tools.map((tool, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 group-hover:bg-yellow-50 transition-colors duration-300">
                              <img 
                                src={tool.icon} 
                                alt={tool.name}
                                className="w-5 h-5 object-contain"
                              />
                              <span className="text-xs font-medium text-gray-700">{tool.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                  )}

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl transition-opacity duration-300 ${
                    hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}