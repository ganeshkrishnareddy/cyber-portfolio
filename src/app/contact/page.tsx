import type { Metadata } from 'next';
import { ContactContent } from '@/components/content/ContactContent';

export const metadata: Metadata = {
    title: "Contact | P Ganesh Krishna Reddy",
    description: "Get in touch for Secure Software Engineering, Backend Development, or Application Security opportunities.",
};

export default function ContactPage() {
    return <ContactContent />;
}
