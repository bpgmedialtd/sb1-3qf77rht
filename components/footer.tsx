'use client';

import { Bot, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold">Black Plastic Glasses</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We've helped 50+ businesses save 1000+ hours monthly through intelligent automation systems. No dev team required.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/black-plastic-glasses/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  AI Content Generation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Marketing Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  AI Model Fine-Tuning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Performance Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/gmail.svg" alt="Gmail" className="w-5 h-5" />
                <a href="mailto:hello@blackplasticglasses.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  hello@blackplasticglasses.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Black Plastic Glasses. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}