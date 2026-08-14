import type { Metadata } from 'next';
import { AboutContent } from '@/components/content/AboutContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: "About",
    description: "Security Engineer with expertise in Red Hat Linux, AppSec, and Threat Detection. Experience with Burp Suite, OWASP ZAP, and Linux Hardening.",
    path: "/about",
    keywords: ["Cyber Security Engineer", "AppSec", "Red Hat Linux", "Threat Detection", "Burp Suite", "OWASP ZAP"],
});

export default function AboutPage() {
    return <AboutContent />;
}
