export const portfolioData = {
  hero: {
    name: "Nephat",
    nameHighlight: "Gikunju",
    tag: "Available for opportunities",
    roles: [
      "Full-Stack Developer",
      "Cybersecurity Analyst",
      "Threat Intelligence Expert",
      "SOC Engineer",
      "Security Automation Builder"
    ],
    description: "Building secure, intelligent systems at the intersection of software engineering and cyber threat intelligence. Based in Nairobi, Kenya. Currently engineering an AI-driven threat intelligence platform."
  },

  about: {
    title: "About Me",
    paragraphs: [
      "I'm a Cybersecurity Analyst and Full-Stack Developer with hands-on experience in cyber threat intelligence, SOC operations, incident response, and security automation. I thrive at the intersection of code and security — building tools that don't just work, but actively protect.",
      "My expertise spans SIEM platforms, threat intelligence tools (OpenCTI, MISP, TheHive), and SOAR automation with Shuffle. I bring deep understanding of MITRE ATT&CK, Cyber Kill Chain, Diamond Model, and STIX 2.0 to every engagement.",
      "Currently developing an agentic AI-driven threat intelligence platform — automating threat collection, interpretation, enrichment, and reporting using cutting-edge AI pipelines."
    ],
    stats: [
      { num: "140+", label: "TryHackMe Labs" },
      { num: "Top 1%", label: "TryHackMe Rank" },
      { num: "40%", label: "Incident Effort Reduced" },
      { num: "30%", label: "Downtime Reduced" },
      { num: "5+", label: "CTF Competitions", span: 2 }
    ]
  },

  techStack: [
    {
      category: "Languages",
      items: [
        { name: "Python", pct: 90 },
        { name: "Bash / Shell", pct: 80 },
        { name: "Regex", pct: 82 },
        { name: "MySQL / SQL", pct: 75 },
        { name: "YAML / JSON", pct: 85 }
      ]
    },
    {
      category: "Security Tools",
      items: [
        { name: "Wazuh / ELK Stack", pct: 88 },
        { name: "OpenCTI", pct: 85 },
        { name: "MISP", pct: 82 },
        { name: "TheHive / Cortex", pct: 80 },
        { name: "Splunk", pct: 75 },
        { name: "Shuffle SOAR", pct: 83 },
        { name: "Trend Micro Vision One", pct: 70 }
      ]
    },
    {
      category: "Platforms & OS",
      items: [
        { name: "Linux (Ubuntu/Kali)", pct: 90 },
        { name: "Windows Server", pct: 78 },
        { name: "Docker / Containers", pct: 72 },
        { name: "Git / GitHub", pct: 85 },
        { name: "Networking / TCP-IP", pct: 82 }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "MITRE ATT&CK", pct: 90 },
        { name: "Cyber Kill Chain", pct: 88 },
        { name: "Diamond Model", pct: 85 },
        { name: "STIX 2.0", pct: 80 },
        { name: "Incident Response", pct: 87 }
      ]
    }
  ],

  skills: [
    {
      icon: "🛡️",
      title: "Threat Intel Tools",
      tags: ["OpenCTI", "MISP", "TheHive", "Cortex", "Wazuh", "ELK Stack", "Splunk", "Shuffle SOAR", "Trend Micro Vision One"]
    },
    {
      icon: "🔍",
      title: "Frameworks",
      tags: ["MITRE ATT&CK", "Cyber Kill Chain", "Diamond Model", "STIX 2.0", "Threat Intel Lifecycle", "IR Lifecycle"]
    },
    {
      icon: "⚡",
      title: "CTI & SOC Skills",
      tags: ["Threat Hunting", "OSINT", "IOC Analysis", "Incident Response", "Alert Triage", "Malware Analysis", "Phishing Investigation", "Log Correlation"]
    },
    {
      icon: "💻",
      title: "Technical",
      tags: ["Python", "Regex", "Linux", "Windows", "MySQL", "Security Automation", "Large Dataset Analysis"]
    }
  ],

  experience: [
    {
      period: "2024 – Present",
      title: "Cybersecurity Analyst & Threat Intelligence Specialist",
      company: "Kingston Consulting",
      type: "Full-time",
      points: [
        "Design and implement detection logic for SIEM platforms (Wazuh, ELK Stack) to identify advanced threats and anomalous behavior",
        "Perform threat hunting and root cause analysis on security alerts, investigating multi-stage attack patterns",
        "Build and maintain threat intelligence feeds using OpenCTI and MISP — automating IOC collection, enrichment, and sharing",
        "Develop custom SOAR playbooks in Shuffle to automate incident response workflows and alert triage at scale",
        "Reduce mean time to detect (MTTD) by 40% and incident remediation effort by 40% through automation",
        "Perform phishing investigations and OSINT on threat actors using open-source tools"
      ]
    },
    {
      period: "2023 – 2024",
      title: "Full-Stack Developer",
      company: "Self-Employed",
      type: "Freelance",
      points: [
        "Built end-to-end web applications using React, Node.js, and Python",
        "Designed and optimized relational databases (MySQL) for production systems",
        "Implemented real-time data processing pipelines for security event correlation",
        "Collaborated with clients to define technical requirements and deliver solutions on deadline"
      ]
    },
    {
      period: "2022 – 2023",
      title: "Cybersecurity Researcher & Educator",
      company: "Strathmore University",
      type: "Internship & Volunteer",
      points: [
        "Conducted research on emerging threats and malware analysis techniques",
        "Taught secure coding practices to university students"
      ]
    }
  ],

  projects: [
    {
      id: "agentic",
      status: "active",
      title: "Agentic Threat Intelligence Platform",
      description: "AI-driven platform automating threat analysis, enrichment, and reporting workflows using agentic AI pipelines and MITRE ATT&CK integration.",
      tags: ["Python", "Agentic AI", "MITRE ATT&CK", "Automation"],
      started: "2025",
      type: "Solo Project",
      category: "AI / Cybersecurity",
      link: "In development",
      overview: "An AI-driven threat intelligence platform designed to automate the full lifecycle of threat analysis — from raw data collection to enriched, actionable intelligence reports. The system uses agentic AI pipelines where autonomous agents work together to collect, parse, correlate, enrich, and report on cyber threats without manual intervention. The goal is to give security teams faster, richer, and more structured threat context at scale.",
      features: [
        "Automated threat collection from OSINT feeds, dark web sources, and threat intelligence APIs",
        "AI-powered enrichment of Indicators of Compromise (IOCs) — IPs, domains, file hashes, URLs",
        "Automated identification and flagging of phishing domains and suspicious infrastructure",
        "MITRE ATT&CK TTP mapping — correlating observed behaviour with known threat actor patterns",
        "Auto-generated threat intelligence reports in structured formats (STIX 2.0 compatible)",
        "Agentic pipeline architecture where agents hand off work autonomously across the threat intel lifecycle",
        "Alert correlation engine to surface high-confidence threats from noisy data"
      ],
      techTags: ["Python", "Agentic AI Frameworks", "MITRE ATT&CK", "STIX 2.0", "OSINT APIs", "OpenCTI", "REST APIs", "Threat Intel Lifecycle"],
      links: [
        { text: "⌥ GitHub Repository", url: "https://github.com/nephat-gikunju", icon: "github" }
      ],
      coming: "// Live demo coming soon"
    },
    {
      id: "ids",
      status: "done",
      title: "Rule-Based Intrusion Detection System",
      description: "Real-time IDS with detection logic for brute force and anomalous traffic, with full SOC triage and escalation workflow simulation.",
      tags: ["Python", "Network Analysis", "SOC", "Detection Engineering"],
      completed: "2024",
      type: "Solo Project",
      category: "Network Security / SOC",
      overview: "A real-time, rule-based Intrusion Detection System (IDS) built to monitor network traffic and system events, detect malicious activity, and simulate a full SOC triage and escalation workflow. The project demonstrates end-to-end detection engineering — from writing detection rules to validating them against simulated attack scenarios in a lab environment.",
      features: [
        "Real-time network traffic monitoring and anomaly detection using packet inspection",
        "Rule-based detection logic targeting brute force attacks, port scans, and abnormal traffic volumes",
        "Alert generation with severity classification — low / medium / high / critical",
        "Simulated SOC escalation workflow: triage → investigation → escalation → remediation",
        "Log parsing and correlation to identify multi-stage attack patterns across sessions",
        "Detection rules documented with MITRE ATT&CK technique references for auditability"
      ],
      techTags: ["Python", "Scapy", "Regex", "Linux", "Log Analysis", "MITRE ATT&CK", "Detection Engineering", "Network Analysis"],
      links: [
        { text: "⌥ GitHub Repository", url: "https://github.com/nephat-gikunju" }
      ]
    },
    {
      id: "ctf",
      status: "ongoing",
      title: "Competitive Cybersecurity & CTF",
      description: "Active participation across PicoCTF, SheHacksCTF, Cyberweek, BSides Nairobi, and East Africa Intervarsity CTF. Ranked Top 1% on TryHackMe.",
      tags: ["CTF", "Penetration Testing", "Threat Analysis", "TryHackMe"],
      period: "2023 – Present",
      achievement: "Top 1% TryHackMe",
      category: "Competitive Security",
      overview: "Active and consistent participation in Capture the Flag (CTF) competitions and cybersecurity challenges across Africa and globally. These competitions sharpen real-world offensive and defensive security skills across domains including web security, reverse engineering, forensics, network analysis, cryptography, and threat intelligence. Competing at this level requires applying theory under pressure and time constraints — the closest thing to real-world incident conditions.",
      competitions: [
        { name: "PicoCTF", desc: "Web exploitation, binary exploitation, cryptography, and forensics challenges hosted by Carnegie Mellon University" },
        { name: "SheHacksCTF", desc: "Participated in one of East Africa's leading inclusive cybersecurity competitions" },
        { name: "Cyberweek", desc: "National cybersecurity challenge covering threat analysis and incident response scenarios" },
        { name: "BSides Nairobi", desc: "Kenya's premier community-driven security conference and CTF event" },
        { name: "East Africa Intervarsity CTF", desc: "Competed across universities in the East Africa region" },
        { name: "TryHackMe", desc: "Ranked Top 1% globally with 140+ labs completed across threat analysis, IR, and penetration testing" }
      ],
      skillTags: ["Web Exploitation", "Network Forensics", "Cryptography", "Reverse Engineering", "Threat Analysis", "Incident Response", "OSINT", "Penetration Testing", "Binary Exploitation"],
      links: [
        { text: "TryHackMe Profile", url: "https://tryhackme.com" },
        { text: "⌥ GitHub", url: "https://github.com/nephat-gikunju" }
      ]
    }
    ,
    {
      id: "retail-shop",
      status: "done",
      title: "Retail Shop Management System",
      description: "A full-stack retail management system built for small shops (pilot in Nairobi) — POS, inventory, debt management and weekly reconciliation workflows.",
      tags: ["React", "Supabase", "POS", "Inventory"],
      completed: "2025",
      type: "Client Project",
      category: "Retail / Full-Stack",
      link: "https://retailshop.vercel.app",
      overview: "Built and piloted a retail management application for small shops. The system replaces Excel-based workflows with a POS + weekly reconciliation flow that computes expected stock from recorded sales and highlights discrepancies for quick owner verification.",
      features: [
        "Real-time POS sales entry",
        "Automated weekly stock reconciliation and discrepancy reporting",
        "Customer debt recording and settlement",
        "Low-stock alerts and inventory audit trail",
        "CSV bulk product import and SKU management"
      ],
      techTags: ["React", "Tailwind", "Supabase", "Postgres", "Vercel"],
      links: [
        { text: "Live Demo", url: "https://retailshop.vercel.app" },
        { text: "Documentation", url: "./PORTFOLIO.md" }
      ],
      notes: "Pilot: started with one Nairobi shop, pitched to 7 shops and adopted by 5 — currently scaling.",
      storyShort: "Pilot in Nairobi: replaced Excel + manual counts with POS + weekly reconciliation; spreadsheet was linked to the database to keep historic records and enable quick verification.",
      story: `Problem
A shop owner in Nairobi tracked stock and sales in a spreadsheet maintained by a store keeper. To confirm that reported sales matched physical stock the owner had to manually count every item — a slow, error-prone process that damaged trust and consumed hours.

Solution
We implemented a lightweight workflow: the store keeper records sales in the POS during the day, and the owner performs a weekly stock update in the app. The system computes expected stock from recorded sales and flags discrepancies so the owner only needs to spot-check a few items. Importantly, the shop's spreadsheet was linked to the application's database (via an import/sync integration) so historical records were preserved and everyday users kept working the way they were used to while data flowed into the new system.

Outcome
The pilot reduced full-store counts to a few targeted spot-checks, improved reconciliation speed and accuracy, and increased transparency between the owner and the keeper. After demonstrating the workflow we pitched to 7 other small shops; 5 adopted the solution and are actively using it. The pilot also drove product improvements: simplified POS entry flows, clearer discrepancy reports, and automated low-stock alerts.

Technical notes
- Spreadsheet integration: the shop's existing spreadsheet (CSV/Google Sheets) was periodically synced or imported into the Supabase/Postgres database to bootstrap historical data and keep continuity during the transition.
- Data flow: POS → API → Supabase DB; periodic spreadsheet sync imports appended historical rows and reconciled with the live data.
- Key lessons: keep onboarding low-friction, preserve customers' existing artifacts (spreadsheets) during migration, and show quick wins (reduced counts, discrepancy highlights).`
    }
  ],

  contact: {
    intro: "I'm open to cybersecurity roles, full-stack development projects, and collaborations on security automation or AI-driven tooling. Based in Nairobi, Kenya — available remotely or on-site.",
    links: [
  { icon: "✉", text: "gikunjunephat@gmail.com", href: "mailto:gikunjunephat@gmail.com" },
      { icon: "📱", text: "+254 757 936 138", href: "tel:+254757936138" },
      { icon: "in", text: "linkedin.com/in/nephat-gikunju", href: "https://linkedin.com/in/nephat-gikunju", external: true },
      { icon: "⌥", text: "github.com/nephat-gikunju", href: "https://github.com/nephat-gikunju", external: true }
    ]
  },

  footer: {
    copyright: "© 2026 Nephat Gikunju — All rights reserved",
    location: "Nairobi, Kenya 🇰🇪"
  }
};
