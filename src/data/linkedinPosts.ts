export interface LinkedInPost {
  id: string;
  url: string;
  title: string;
  summary: string;
  date: string; // ISO string or formatted date
  image?: string;
}

export const linkedinPosts: LinkedInPost[] = [
  {
    id: '1',
    url: 'https://www.linkedin.com/posts/modalavalasa-revanth_hacksagon2025-iiitmgwalior-smartwearables-activity-7346922571046510592-Hq4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: 'Journey at HACKSAGON 2025, hosted by (ABV-IIITM), Gwalior',
    summary: 'Our project: 🎯 SafeFit – A Smart Bracelet (Where Fashion Meets Innovation) Your all-in-one companion for Health, Fitness, and Safety.',
    date: '2025-07-04',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQGewU2eoIncBA/feedshare-shrink_2048_1536/B4EZfWDIAyG4As-/0/1751642838069?e=1754524800&v=beta&t=rfjbLfmOQKBL-hYniRVcFhVfDLptOJgmqwg4Jf5remE',
  },
  {
    id: '2',
    url: 'https://www.linkedin.com/posts/vitap-university_dronehackathon-dronefusion-innovation-ugcPost-7314288570372870144-FN6l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: 'Success at the Drone Hackathon! ',
    summary: 'First-place team competed under the theme "Search and Rescue"\nThe second-place team worked on the theme "UAV-Assisted Agriculture Monitoring"',
    date: '2025-03-15',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQGtlw5ajpwoJQ/feedshare-shrink_2048_1536/B56ZYGSrKHHEAo-/0/1743862282527?e=1754524800&v=beta&t=6mmgm5VknG_qNyDx6Cxf6uqMeVHVDy1Hc9EhkTF4sZE',
  },
  {
    id: '3',
    url: 'https://www.linkedin.com/posts/modalavalasa-revanth_llmsecurity-cybersecurity-ai-activity-7303478861369860096-0MtN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: '🔥 Proud to be a part of the LLM Security Bootcamp! 🔥',
    summary: 'wrapped up an incredible two-day journey at the LLM Security Bootcamp (Feb 21-22, 2025) at VIT-AP University! The hands-on training in LLM security, AI, and cybersecurity was truly insightful, covering GenAI, MLOps, LangChain, RAG, and more!',
    date: '2025-02-25',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQEyT7OnPmy8ZQ/feedshare-shrink_1280/B4EZVsrNn7HgAk-/0/1741285026253?e=1754524800&v=beta&t=nPKvPAPs7zBy9EFDo-deTd4yWN3Rdv84QAFclRnrM1k',
  },
  {
    id: '4',
    url: 'https://www.linkedin.com/posts/modalavalasa-revanth_postman-api-fundamentals-student-expert-activity-7302995001486024705-5Kdk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: 'Completed the Postman API Fundamentals Workshop',
    summary: 'Learning on REST APIs & HTTP Methods, Query & Path Parameters, Authentication & API Keys, Status Codes & Error Handling, Automating Tests in Postman',
    date: '2025-02-15',
    image: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQH7QjuBJe-rIA/articleshare-shrink_800/articleshare-shrink_800/0/1741169357012?e=1752372000&v=beta&t=rodfqzSKoyS3BoOHMo81hOO0LnqMxDPknPosPWCnQQQ',
  },
  {
    id: '5',
    url: 'https://www.linkedin.com/posts/modalavalasa-revanth_ai-hackathon2025-innovation-activity-7298930648503767040-sBpf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: 'AI Autonomous Hackathon and Model Expo 2025 at VRSEC Vijayawada',
    summary: 'We showcased our Agri Drone, an innovative solution designed to revolutionize precision farming as part of TechtoGreen’s product portfolio.',
    date: '2025-02-08',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQHYBpE14ieUFA/feedshare-shrink_800/B4EZUsCmy.HUAg-/0/1740200664974?e=1754524800&v=beta&t=ftWq2Gfe2ZSkr-QdhetPF5yiQwYW9Z9tpAVjw3xKQxo',
  },
  {
    id: '6',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:987654321/',
    title: 'Proud to announce that my team and I secured 1st place at HackAP - Transport & Logistics',
    summary: 'Our problem statement focused on Developing a Portable Safety Device (Helmet) for MEWP Operators. Our solution aimed to address the growing safety concerns in industries using Mobile Elevated Work Platforms (MEWPs)',
    date: '2024-09-30',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQF6-gi2DLr1BQ/feedshare-shrink_800/feedshare-shrink_800/0/1727979168192?e=1754524800&v=beta&t=936Q1nDPe46eGrxsrHwSbmFyS-VY7sBBh9cfJYpplOE',
  },
  {
    id: '7',
    url: 'https://www.linkedin.com/posts/frankmathewsajan_internationalstartupfestival-innovation-entrepreneurship-ugcPost-7246949639457775617-aPZj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwQ-FkByiZoHf0eqwYCgWPQ-T9YBqn5BlY',
    title: 'Attended the International Startup Festival 2024 at the Engineering Staff College of India (ESCI) in Gachibowli, Hyderabad, from September 26-28',
    summary: 'The event brought together participants from over 15 countries, including the USA, UK, Australia, Japan, Canada, New Zealand, and more. We explored innovations in AI, FinTech, AgriTech, and Health Tech, and had insightful conversations',
    date: '2024-09-29',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFEiGo7rALVnw/feedshare-shrink_800/feedshare-shrink_800/0/1727807434094?e=1754524800&v=beta&t=NIKuBy7uDtEp8XldBGTWT6G362dNFuE3zz8yWzT2jto',
  },
  // Add more posts as needed
]; 