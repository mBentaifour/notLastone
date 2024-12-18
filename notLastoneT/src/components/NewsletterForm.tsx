import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
        required
      />
      <button 
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-lg transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;