'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Bot, ChevronDown } from 'lucide-react';
import { Automations } from '@/components/automations';
import { Team } from '@/components/team';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-xl font-bold text-gray-900">Black Plastic Glasses</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Announcement Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-sm font-medium text-gray-700 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              <Zap className="w-4 h-4 mr-2 text-yellow-600" />
              We've evolved beyond traditional marketing
            </div>

            {/* Main Headline */}
            <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              Automation That Doesn't Need
              <span className="block text-yellow-400 mt-2">
                A Dev Team
              </span>
            </h1>

            {/* Subheadline */}
            <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              We've transformed our business growth by automating systems. You can now do the same.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <div className="flex flex-col items-center animate-bounce">
                <span className="text-sm text-gray-500 mb-2">Discover Our Solutions</span>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-8 hidden lg:block">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/3 right-8 hidden lg:block">
          <div className="w-6 h-6 bg-gray-900 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="absolute top-2/3 left-1/4 hidden lg:block">
          <div className="w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Automations Section */}
      <Automations />

      {/* Team Section */}
      <Team />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
}