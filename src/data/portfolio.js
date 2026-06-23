export const portfolioData = {
  hero: {
    name: "Nephat",
    nameHighlight: "Gikunju",
    tag: "Available for opportunities",
    roles: [
      "Backend Software Engineer",
      "Distributed Systems Engineer",
      "Security Automation Builder",
      "Cloud-Native Developer"
    ],
    description: "Backend Software Engineer with a strong foundation in distributed systems, secure application design, and digital financial services. Experienced building high availability backend solutions, secure REST APIs, microservices, and enterprise integrations."
  },

  about: {
    title: "About Me",
    paragraphs: [
      "I am a Backend Software Engineer with a strong foundation in distributed systems, secure application design, and digital financial services. I have proven experience building high availability backend solutions, secure REST APIs, microservices, and enterprise integrations for mission-critical applications.",
      "My technical skill set is anchored in Java, Spring Boot, PostgreSQL, Docker, and cloud-native technologies. I have hands-on experience delivering scalable, fault-tolerant middleware and backend systems in high-traffic banking and enterprise environments.",
      "I am committed to clean code practices, continuous improvement, and building backend solutions that solve complex distributed system issues and create measurable business value."
    ],
    stats: [
      { num: "99.99%", label: "Service Uptime Sustained" },
      { num: "~33%", label: "Operational Efficiency Gained" },
      { num: "40%", label: "Manual Effort Reduced" },
      { num: "Top 1%", label: "TryHackMe Ranking" }
    ]
  },

  techStack: [
    {
      category: "Languages",
      items: [
        { name: "Java", pct: 95 },
        { name: "Python", pct: 90 },
        { name: "Bash / Shell", pct: 85 },
        { name: "SQL", pct: 90 },
        { name: "TypeScript / JavaScript", pct: 85 }
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Spring Boot / Spring Framework", pct: 95 },
        { name: "PostgreSQL / pgvector", pct: 90 },
        { name: "REST APIs & Middleware", pct: 95 },
        { name: "Express.js / FastAPI", pct: 88 },
        { name: "Database Design & Optimization", pct: 90 }
      ]
    },
    {
      category: "Integration & DevOps",
      items: [
        { name: "Docker", pct: 90 },
        { name: "CI/CD Pipelines", pct: 88 },
        { name: "Microsoft Azure & Cloud Infrastructure", pct: 85 },
        { name: "Red Hat Integration", pct: 85 },
        { name: "Payment System Integrations (Daraja)", pct: 90 }
      ]
    },
    {
      category: "AI & Engineering",
      items: [
        { name: "RAG & LangChain", pct: 90 },
        { name: "Semantic Search", pct: 85 },
        { name: "OOP & System Design", pct: 92 },
        { name: "Distributed Systems", pct: 90 }
      ]
    }
  ],

  skills: [
    {
      icon: "☕",
      title: "Backend & Systems",
      tags: ["Java", "Spring Boot", "Spring Framework", "FastAPI", "Express.js", "REST APIs", "Middleware Design", "Microservices", "System Design", "Distributed Systems"]
    },
    {
      icon: "🛡️",
      title: "Security & Integration",
      tags: ["API Security", "RBAC", "Authentication & Authorization", "Red Hat Integration", "Shuffle SOAR", "Wazuh", "TheHive", "Enterprise API Integration"]
    },
    {
      icon: "🤖",
      title: "AI, RAG & Databases",
      tags: ["LangChain", "pgvector", "Groq API", "PostgreSQL", "Database Design", "Semantic Search", "LLM Integration", "Schema Optimization"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      tags: ["Docker", "CI/CD Pipelines", "Microsoft Azure", "Railway", "Vercel", "AWS", "Git", "GitHub Actions", "Linux Administration"]
    }
  ],

  experience: [
    {
      period: "Feb 2026 – Present",
      title: "Backend Engineer",
      company: "Tezza Business Solutions",
      type: "Full-time",
      points: [
        "Built and maintained high availability digital finance solutions Spring Framework, directly supporting mission critical banking operations at scale.",
        "Designed and shipped secure RESTful APIs consumed by frontend systems and third-party integrations, following secure API design principles and banking-grade standards.",
        "Engineered scalable, fault tolerant middleware solutions using Java and Red Hat Integration, supporting high traffic financial services with resilience and reliability under load.",
        "Connected payment systems and web applications to enable seamless transaction workflows across digital banking channels.",
        "Engaged with frontend engineers and business teams to deliver stable, compliant solutions aligned to product requirements.",
        "Built CI/CD pipeline workflows, tested and deployed backend services to cloud environments with automated quality gates.",
        "Authored technical documentations and API specifications used across engineering teams."
      ]
    },
    {
      period: "Feb 2025 – Feb 2026",
      title: "IT Security Architect / Backend Systems Engineer",
      company: "YelBridges Ltd",
      type: "Full-time",
      points: [
        "Sustained 99.99% service uptime across 13 customer environments by building and maintaining backend systems for security monitoring and operations tooling.",
        "Cut manual release effort and improved deployment reliability by implementing CI/CD workflows for security tooling and automation scripts.",
        "Improved operational efficiency by ~33% by designing scalable automation in Python and Bash for monitoring, reporting and incident management.",
        "Built REST API integrations across Wazuh, TheHive, OpenCTI, MISP and Shuffle SOAR, automating enrichment, triage and cross-platform data flows.",
        "Designed fault-tolerant backend workflows processing high frequency security event data from 300+ monitored endpoints across multiple tenants.",
        "Developed PostgreSQL schemas and queries supporting high volume operational data storage, log management and reporting pipelines.",
        "Deployed and managed backend infrastructure on Microsoft Azure and Hetzner, VMs, storage and network configuration while applying RBAC, input validation and access control across all integration work.",
        "Resolved complex distributed system issues by coordinating with infrastructure teams on performance and reliability.",
        "Produced API integration guides and process documentation supporting large-scale, multi-tenant environments."
      ]
    },
    {
      period: "June 2024 – Feb 2025",
      title: "Freelance Backend Developer",
      company: "Upwork & Direct Clients",
      type: "Contract",
      points: [
        "Delivered end to end backend solutions for clients using Express.js, Spring Boot, PostgreSQL and Docker, deployed on Railway, AWS and Alibaba Cloud.",
        "Built RESTful APIs, authentication and authorization systems, file management, CDN-backed asset delivery and payment integrations for production applications.",
        "Enabled localized payments by integrating the Safaricom Daraja API, supporting M-Pesa STK Push, C2B, and transaction confirmation workflows.",
        "Extended application reach to users without smartphones by integrating Africa's Talking USSD and SMS APIs.",
        "Containerized applications with Docker and CI/CD on AWS and Alibaba Cloud, improving deployment speed and monitoring.",
        "Owned client projects from requirements, development, testing till deployment and offered post-launch support.",
        "Collaborated with frontend teams to ensure reliable API contracts and performant responses under high traffic."
      ]
    }
  ],

  projects: [
    {
      id: "haki-rag",
      status: "done",
      title: "Haki — Kenyan Legal Rights RAG Platform",
      description: "Production RAG platform delivering plain-language Kenyan legal guidance in real time, indexing 1,948 chunks across 7 Kenyan legal Acts with semantic search and source-grounded responses.",
      tags: ["Python", "FastAPI", "LangChain", "pgvector", "PostgreSQL", "Next.js"],
      completed: "2025",
      type: "Solo Project",
      category: "AI & RAG / Backend",
      overview: "A production RAG platform delivering plain-language Kenyan legal guidance in real time. It indexes 1,948 chunks across 7 Kenyan legal Acts, using semantic search and source-grounded responses to provide accurate information to users.",
      features: [
        "Eliminated hallucination risk on legal queries with a strict grounding system prompt on Groq (LLaMA 3.3 70B), ensuring every response cites the specific Act and Section, making the platform safe for real legal guidance.",
        "Built an evaluation framework of 225 police encounter test scenarios with a standalone HTML review interface, letting legal advocates rate accuracy and citation quality with structured JSON/CSV export.",
        "Engineered the ingestion pipeline with LangChain, HuggingFace sentence-transformers, and pgvector for accurate retrieval over the full document set.",
        "Improved response consistency by tuning retrieval from k=5 to k=8 chunks and normalizing inconsistent LLM output via markdown stripping.",
        "Shipped a FastAPI backend with CORS, structured error handling, response time tracking, and out-of-scope query detection, deployed to Render with Railway PostgreSQL via CI/CD."
      ],
      techTags: ["Python", "FastAPI", "LangChain", "pgvector", "PostgreSQL", "Groq API", "Next.js 14", "Render", "Vercel", "HuggingFace sentence-transformers"],
      links: [
        { text: "⌥ GitHub Repository", url: "https://github.com/muchirigikunju22/Haki" }
      ]
    },
    {
      id: "haki-api",
      status: "done",
      title: "Haki API — Legal Rights Management Backend",
      description: "Backend API powering legal rights management workflows, with RESTful endpoints for user management, applications, and document workflows, backed by optimized PostgreSQL schemas and secure service layer logic.",
      tags: ["Express.js", "PostgreSQL", "Docker", "Railway"],
      completed: "2024",
      type: "Solo Project",
      category: "Backend Development",
      overview: "A robust backend API powering legal rights management workflows. It exposes secure RESTful endpoints for user onboarding, application processing, and document management, utilizing optimized PostgreSQL schemas.",
      features: [
        "Designed RESTful API contracts supporting secure onboarding, document workflows, and payment transactions.",
        "Implemented secure service layer logic with robust authentication, role-based access control (RBAC), and access control.",
        "Database schemas optimized for high performance and integrity, backed by PostgreSQL.",
        "Fully containerized with Docker and deployed to Railway via automated workflows."
      ],
      techTags: ["Express.js", "PostgreSQL", "Docker", "Railway", "REST APIs", "Database Design", "Schema Optimization"],
      links: [
        { text: "⌥ GitHub Repository", url: "https://github.com/muchirigikunju22/Haki/tree/main/app" }
      ]
    },
    {
      id: "soar-platform",
      status: "done",
      title: "SOAR Automation Platform",
      description: "Designed and built an end to end backend automation platform integrating multiple enterprise APIs (Wazuh, TheHive, VirusTotal, AbuseIPDB) reducing manual processing time by 40%.",
      tags: ["Python", "Shuffle SOAR", "REST APIs", "PostgreSQL"],
      completed: "2025",
      type: "Solo Project",
      category: "Security Automation",
      overview: "An enterprise-grade Security Orchestration, Automation, and Response (SOAR) platform that integrates Wazuh, TheHive, VirusTotal, and AbuseIPDB. The system automates the enrichment and triage of security events, significantly cutting incident response times.",
      features: [
        "Designed and built end-to-end backend workflows processing high frequency security events from multiple sources.",
        "Implemented event-driven workflow logic, automated data enrichment pipelines, and severity-based routing with PostgreSQL-backed state management.",
        "Built REST API integrations across Wazuh, TheHive, OpenCTI, MISP and Shuffle SOAR, automating enrichment, triage and cross-platform data flows.",
        "Reduced manual processing time by 40% across security operations center (SOC) environments."
      ],
      techTags: ["Python", "Shuffle SOAR", "REST APIs", "PostgreSQL", "Wazuh", "TheHive", "VirusTotal", "AbuseIPDB", "Event-Driven Architecture"],
      links: [
        { text: "⌥ GitHub Repository", url: "https://github.com/nephat-gikunju" }
      ]
    }
  ],

  contact: {
    intro: "I'm open to backend software engineering roles, distributed systems design, and collaborations on secure application development or AI-driven systems. Based in Nairobi, Kenya — available remotely or on-site.",
    links: [
      { icon: "✉", text: "kunjuinfotech2@gmail.com", href: "mailto:kunjuinfotech2@gmail.com" },
      { icon: "📱", text: "+254 757 936 138", href: "tel:+254757936138" },
      { icon: "in", text: "linkedin.com/in/nephat-gikunju", href: "https://linkedin.com/in/nephat-gikunju", external: true },
      { icon: "⌥", text: "github.com/nephat-gikunju || github.com/muchirigikunju22"},
      { icon: "🌐", text: "nephatgikunju.vercel.app", href: "https://nephatgikunju.vercel.app", external: true }
    ]
  },

  footer: {
    copyright: "© 2026 Nephat Gikunju — All rights reserved",
    location: "Nairobi, Kenya 🇰🇪"
  }
};
