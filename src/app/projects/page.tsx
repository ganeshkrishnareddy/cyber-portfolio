import type { Metadata } from 'next';
import { ProjectsContent } from '@/components/content/ProjectsContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: "Security Projects",
    description: "Cybersecurity case studies including Web App Penetration Testing, Secure File Transfer implementation, and Android Security Analysis. Review methodologies and outcomes.",
    path: "/projects",
    keywords: ["Security Projects", "Penetration Testing", "Web App Security", "Android Security", "Secure Engineering"],
});

export default function ProjectsPage() {
    return <ProjectsContent />;
}
