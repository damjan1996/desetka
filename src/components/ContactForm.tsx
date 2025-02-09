import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { getCsrfToken } from '../utils/csrf';
import { rateLimiter } from '../utils/rateLimiting';

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Check rate limiting
      const clientIp = '127.0.0.1'; // In production, get this from the request
      if (rateLimiter.isRateLimited(clientIp)) {
        const timeToReset = Math.ceil(rateLimiter.getTimeToReset(clientIp) / 1000 / 60);
        throw new Error(`Too many attempts. Please try again in ${timeToReset} minutes.`);
      }

      // Validate CSRF token
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('csrf_token', getCsrfToken());

      await onSubmit(formData);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg">
          Message sent successfully!
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;