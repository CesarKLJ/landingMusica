import React, { useState } from 'react';
import { Send, Music, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="subscribe" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-secondary-900/40 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-dark-800/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-dark-600 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary-500/20 rounded-full">
                <Music className="h-8 w-8 text-primary-400" />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                Subscribe to our newsletter to get updates on new music releases, 
                exclusive artist interviews, and special event invitations.
              </p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-dark-700/50 border border-dark-500 rounded-full py-3 px-4 pr-12 focus:outline-none focus:border-primary-500 transition-colors duration-300 text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-400 text-sm mt-2 text-center"
                >
                  Thank you! You've been subscribed.
                </motion.p>
              )}
              
              <p className="text-gray-400 text-xs mt-4 text-center">
                We respect your privacy and won't share your information with anyone.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};