import type { Metadata } from 'next';
import { BuildLogContent } from '@/components/content/BuildLogContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: 'Build Log',
    description: 'A raw timeline of production problem-solving, architectural decisions, and security patches.',
    path: '/build-log',
    keywords: ['Build Log', 'Engineering', 'Architecture', 'Security Patches'],
});

export default function BuildLogPage() {
    return <BuildLogContent />;
}
