import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Yoma's Enterprise</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium African Foods</h3>
              <p className="text-gray-600">
                We take pride in sourcing the finest African ingredients and products, ensuring authentic 
                taste and superior quality for our customers. Every item in our collection is carefully 
                selected to bring you the true essence of African cuisine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Used Cars</h3>
              <p className="text-gray-600">
                Our automotive division specializes in hand-picked, quality used vehicles. Each car 
                undergoes thorough inspection and maintenance to ensure reliability and value for 
                our customers.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect With Us</h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                Follow us on social media for updates, special offers, and to be part of our growing 
                community. We're always here to assist you!
              </p>
              
              <a 
                href="https://instagram.com/yomas_enterprise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-6 w-6" />
                <span className="font-medium">Follow us on Instagram</span>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Chat with us on WhatsApp</span>
              </a>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}