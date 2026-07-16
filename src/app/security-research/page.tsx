import type { Metadata } from 'next';
import { SecurityResearchContent } from '@/components/content/SecurityResearchContent';

export const metadata: Metadata = {
    title: "Security Research | P Ganesh Krishna Reddy",
    description: "In-depth security reconnaissance and vulnerability research across various targets and organizations.",
};

export default function SecurityResearchPage() {
    return <SecurityResearchContent />;
}
