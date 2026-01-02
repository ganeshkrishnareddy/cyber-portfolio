import type { Metadata } from 'next';
import { ContactContent } from '@/components/content/ContactContent';

export const metadata: Metadata = {
    title: "Contact | P Ganesh Krishna Reddy",
    description: "Get in touch for Security Engineering roles, Penetration Testing engagements, or collaboration.",
};

export default function ContactPage() {
    return <ContactContent />;
}
