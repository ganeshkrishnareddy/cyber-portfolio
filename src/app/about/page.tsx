import type { Metadata } from 'next';
import { AboutContent } from '@/components/content/AboutContent';

export const metadata: Metadata = {
    title: "About | P Ganesh Krishna Reddy",
    description: "Security Engineer with expertise in Red Hat Linux, AppSec, and Threat Detection. Experience with Burp Suite, OWASP ZAP, and Linux Hardening.",
};

export default function AboutPage() {
    return <AboutContent />;
}
