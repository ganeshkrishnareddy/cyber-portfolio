import type { Metadata } from 'next';
import { JourneyContent } from '@/components/content/JourneyContent';

export const metadata: Metadata = {
    title: "Journey",
    description: "Security & Engineering Journey — certifications, learning roadmap, and growth path of a Secure Software Engineer.",
};

export default function JourneyPage() {
    return <JourneyContent />;
}
