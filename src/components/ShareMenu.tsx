import React, { useState, useRef } from 'react';
import { Share2, X, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

interface ShareMenuProps {
  title: string;
  url: string;
  description: string;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ title, url, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      label: 'Share on Twitter'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      label: 'Share on Facebook'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
      label: 'Share on LinkedIn'
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-colors p-2 rounded-full hover:bg-white/10"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Share this content"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Share2 className="h-5 w-5" aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          onKeyDown={handleKeyDown}
        >
          <div className="py-1">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                role="menuitem"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4 mr-3" aria-hidden="true" />
                {link.name}
              </a>
            ))}
            <button
              onClick={copyToClipboard}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              role="menuitem"
            >
              <LinkIcon className="h-4 w-4 mr-3" aria-hidden="true" />
              {copyStatus === 'copied' ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareMenu