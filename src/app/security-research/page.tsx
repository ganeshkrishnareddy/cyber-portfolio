import type { Metadata } from 'next';
import { SecurityResearchContent } from '@/components/content/SecurityResearchContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: "Security Research",
    description: "$400 USD paid HackerOne bug bounty and verified vulnerability research across CLEAR, Plaid, Stripchat, and Com Olho programs. P1 severity in pursuit.",
    path: "/security-research",
    keywords: ["Bug Bounty", "HackerOne", "Security Research", "Vulnerability Disclosure", "Responsible Disclosure", "Penetration Testing"],
});

export default function SecurityResearchPage() {
    return <SecurityResearchContent />;
}
