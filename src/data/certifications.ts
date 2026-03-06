import type { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'oci-genai',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    description: 'Professional-level certification validating expertise in Generative AI concepts, Large Language Models, RAG architecture, and OCI AI services.',
    skills: ['Generative AI', 'LLMs', 'RAG', 'OCI AI Services', 'Prompt Engineering'],
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=72674E2FF8ED27F7B5228B9D24C8F84A9978E3D24496BE990733E523BE1B4C45',
    certificateUrl: 'https://drive.google.com/file/d/1YTr2u8tW7E3QeqL54FC-NBF55_ewy4Bd/view?usp=sharing',
    color: 'neon-purple',
  },
  {
    id: 'oci-foundations',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    description: 'Foundational certification covering OCI core services including compute, storage, networking, identity, database, and security.',
    skills: ['OCI Compute', 'OCI Storage', 'OCI Networking', 'IAM', 'Cloud Security'],
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E0EBE9E66EF3522343C267D9DC298C20E8C09A2519C946E4893F70880BFC4EA1',
    certificateUrl: 'https://drive.google.com/file/d/1HD0HZJN5HvB1O8wnosahhsNhLPCocZfE/view?usp=sharing',
    color: 'neon-cyan',
  },
  {
    id: 'mckinsey-forward',
    title: 'McKinsey & Company Forward Program',
    issuer: 'McKinsey & Company',
    date: '2025',
    description: 'Completed McKinsey Forward — a selective program developing essential professional skills including problem-solving, communication, and leadership for the future of work.',
    skills: ['Problem Solving', 'Communication', 'Leadership', 'Adaptability', 'Strategic Thinking'],
    verifyUrl: 'https://www.credly.com/badges/7efca65a-3cfc-4a58-a827-63ef667e1219/linked_in_profile',
    certificateUrl: 'https://www.credly.com/badges/7efca65a-3cfc-4a58-a827-63ef667e1219/linked_in_profile',
    color: 'neon-green',
  },
];
