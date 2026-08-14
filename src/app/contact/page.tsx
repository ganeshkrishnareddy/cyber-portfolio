import type { Metadata } from 'next';
import { ContactContent } from '@/components/content/ContactContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: "Contact",
    description: "Get in touch for Secure Software Engineering, Backend Development, or Application Security opportunities.",
    path: "/contact",
    keywords: ["Contact Security Engineer", "Hire Security Researcher", "Application Security", "Bug Bounty Services"],
});

export default function ContactPage() {
    return <ContactContent />;
}
