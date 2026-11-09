// Single source of truth for verified profile facts.
// Source: LinkedIn certifications page (18 entries, verified Nov 2026) and
// the latest portfolio export.

export interface Certification {
    name: string;
    issuer: string;
    issued: string;
    expires?: string;
    credentialId?: string;
    verifyUrl: string;
}

export const CERTIFICATIONS: Certification[] = [
    {
        name: "ISO/IEC 27001:2022 INFORMATION SECURITY ASSOCIATE",
        issuer: "SkillFront",
        issued: "Jul 2026",
        credentialId: "29630783517679",
        verifyUrl: "https://www.skillfront.com/Badges/29630783517679",
    },
    {
        name: "Certificate of completion: Claude 101",
        issuer: "Anthropic",
        issued: "Jun 2026",
        credentialId: "9b696rjo8b2s",
        verifyUrl: "https://verify.skilljar.com/c/9b696rjo8b2s",
    },
    {
        name: "Certificate of Completion: AI Fluency Framework & Foundations",
        issuer: "Anthropic",
        issued: "Jun 2026",
        credentialId: "7rruqtzbtvch",
        verifyUrl: "https://verify.skilljar.com/c/7rruqtzbtvch",
    },
    {
        name: "Launch Crew Certificate of Association",
        issuer: "Give My Certificate",
        issued: "Apr 2026",
        credentialId: "b9d2128b-95d6-42e9-8895-34e0cfe129b3",
        verifyUrl: "https://certificate.givemycertificate.com/c/b9d2128b-95d6-42e9-8895-34e0cfe129b3",
    },
    {
        name: "CompTIA Security Analytics Professional – CSAP",
        issuer: "CompTIA",
        issued: "Aug 2025",
        credentialId: "COMP001022527079",
        verifyUrl: "https://drive.google.com/file/d/13i5jBd0fDmihFLUdUj-fXZQJwlWuv8s_/view?usp=sharing",
    },
    {
        name: "CompTIA Network Vulnerability Assessment Professional - CNVP",
        issuer: "CompTIA",
        issued: "Aug 2025",
        credentialId: "COMP001022527079",
        verifyUrl: "https://drive.google.com/file/d/11UALDF4AWeKRDiETTQYoy11z-qEEYtwl/view?usp=sharing",
    },
    {
        name: "CompTIA Network Security Professional - CNSP",
        issuer: "CompTIA",
        issued: "Aug 2025",
        credentialId: "COMP001022527079",
        verifyUrl: "https://drive.google.com/file/d/1-a1qR8H0XUAo7VaZejCqNyHsKqiW0v1J/view?usp=sharing",
    },
    {
        name: "CompTIA Cybersecurity Analyst (CySA+)",
        issuer: "CompTIA",
        issued: "Aug 2025",
        credentialId: "TQKZXD0Y9MF450TJ",
        verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx?code=TQKZXD0Y9MF450TJ",
    },
    {
        name: "CompTIA PenTest+",
        issuer: "CompTIA",
        issued: "Aug 2025",
        expires: "Aug 2028",
        credentialId: "HKBGH2859MVQ5QC2",
        verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx?code=HYVJSZ36VQKPFTWJ",
    },
    {
        name: "Foundation Level Threat Intelligence Analyst",
        issuer: "arcX",
        issued: "Jun 2025",
        verifyUrl: "https://arcx.io/verify-certificate?id=07750cc7d588bb4cedd64ecab896112b1e32b093&k=46605057f6d94490aeba4287a75c75b4",
    },
    {
        name: "Tata Group - Cybersecurity Analyst Job Simulation",
        issuer: "Forage",
        issued: "Jun 2025",
        credentialId: "X5R5dKq9DkjnwSQW4",
        verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_SLa4iANMguG7m2Zin_1749878938454_completion_certificate.pdf",
    },
    {
        name: "Deloitte Australia - Cyber Job Simulation",
        issuer: "Forage",
        issued: "Jun 2025",
        credentialId: "3o683ubu49Fa5G3wB",
        verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_SLa4iANMguG7m2Zin_1748834447065_completion_certificate.pdf",
    },
    {
        name: "Microsoft Power Platform Fundamentals PL-900 Exam Prep",
        issuer: "Coursera",
        issued: "Apr 2025",
        credentialId: "SHY8XOE77RB5",
        verifyUrl: "https://coursera.org/verify/specialization/SHY8XOE77RB5",
    },
    {
        name: "CompTIA Security+ CE",
        issuer: "CompTIA",
        issued: "Jan 2025",
        expires: "Jan 2028",
        credentialId: "QDR90YBSZJVQQKWS",
        verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx?code=YLP7LZ44L706VHCZ",
    },
    {
        name: "QuickHeal Certified Digital Forensic Investigator",
        issuer: "Quick Heal Academy",
        issued: "Jan 2025",
        credentialId: "LPU-0000-780553",
        verifyUrl: "https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-780553",
    },
    {
        name: "CompTIA Network+ ce Certification",
        issuer: "CompTIA",
        issued: "Aug 2024",
        expires: "Jan 2028",
        credentialId: "83JGFW2TN2RQQCKG",
        verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx?code=9LGHCR89B7LLFLS1",
    },
    {
        name: "CS50's Understanding Technology",
        issuer: "Harvard University",
        issued: "Nov 2023",
        credentialId: "1f305a31-6d98-4043-ac2b-35c76bc38a0c",
        verifyUrl: "https://cs50.harvard.edu/certificates/1f305a31-6d98-4043-ac2b-35c76bc38a0c",
    },
    {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        issued: "Dec 2022",
        verifyUrl: "https://www.credly.com/badges/b93f3ace-c9fe-45e3-b4cb-e26b24eaba23/linked_in_profile",
    },
];

export interface EducationEntry {
    degree: string;
    field?: string;
    school: string;
    period: string;
    grade?: string;
    note?: string;
}

export const EDUCATION: EducationEntry[] = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        field: "Cyber Security & Blockchain",
        school: "Lovely Professional University",
        period: "Aug 2022 – Aug 2026",
        note: "Active member of the Cyber Security Club and Blockchain Society. Participated in coding competitions and hackathons. Volunteered for tech workshops and seminars.",
    },
    {
        degree: "Intermediate, MPC",
        school: "Narayana Junior College - India",
        period: "Jun 2020 – Mar 2022",
        grade: "A",
    },
    {
        degree: "Secondary School Certificate, SSC",
        school: "Narayana E.M School",
        period: "Jun 2019 – Mar 2020",
        grade: "A",
    },
];

export interface ExperienceEntry {
    role: string;
    org: string;
    period: string;
    type?: string;
    description: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        role: "AI Associate, ML Data Operations",
        org: "Amazon",
        period: "Oct 2026 – Present",
        type: "Full-time",
        description: "ML data operations, working remotely.",
    },
    {
        role: "Fraud and Risk Analyst",
        org: "Khatabook",
        period: "Aug 2026 – Oct 2026",
        type: "Full-time",
        description: "Fraud and risk analysis.",
    },
    {
        role: "Technical Lead",
        org: "Zentoja Technologies Private Limited",
        period: "Present",
        description: "Technical lead for the Zentoja family-safety product.",
    },
    {
        role: "Technical Lead",
        org: "ProgVision",
        period: "2024 – Present",
        type: "Freelance",
        description: "Technical lead for freelance web development work.",
    },
    {
        role: "Intern",
        org: "Red Hat",
        period: "Jun 2024 – Jul 2024",
        type: "Internship · Remote, India",
        description: "Linux system administration training internship.",
    },
];

export const HERO = {
    headline: "I break systems. I build better ones.",
    supporting:
        "I'm Ganesh Krishna Reddy — a cybersecurity researcher and secure software engineer who investigates vulnerabilities, engineers resilient applications and builds products designed for the real world.",
};

export const RESEARCH_PROFILES = [
    { name: "HackerOne", url: "https://hackerone.com/pganeshkrishnareddy" },
    { name: "YesWeHack", url: "https://yeswehack.com/hunters/pganeshkrishnareddy" },
    { name: "Hack The Box", url: "https://profile.hackthebox.com/profile/019ec51d-f016-710d-88bb-8a98ebb8cc9b" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/pganeshkrishnareddy" },
    { name: "PlayCTF", url: "https://playctf.in/profile/pganeshkrishnareddy" },
    { name: "ComOlho", url: "https://cyber.comolho.com/researcher/profile/pganeshkrishnareddy_7104d6dc/" },
    { name: "GitHub", url: "https://github.com/ganeshkrishnareddy" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pganeshkrishnareddy" },
    { name: "X", url: "https://x.com/_this_is_ganesh" },
];
