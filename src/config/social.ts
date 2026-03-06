import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/revanthm1902', label: 'GitHub', color: 'hover:text-neon-purple' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/modalavalasa-revanth/', label: 'LinkedIn', color: 'hover:text-neon-cyan' },
  { icon: Mail, href: 'mailto:revanthm051@gmail.com', label: 'Email', color: 'hover:text-neon-green' },
];
