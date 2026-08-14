import type { Metadata } from 'next';
import { JourneyContent } from '@/components/content/JourneyContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: "Journey",
    description: "Security & Engineering Journey — certifications, learning roadmap, and growth path of a Secure Software Engineer.",
    path: "/journey",
    keywords: ["Security Career", "Certifications", "Learning Roadmap", "SOC Analyst", "Penetration Tester"],
});

export default function JourneyPage() {
    return <JourneyContent />;
}
