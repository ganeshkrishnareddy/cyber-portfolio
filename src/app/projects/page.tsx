import type { Metadata } from 'next';
import { ProjectsContent } from '@/components/content/ProjectsContent';

export const metadata: Metadata = {
    title: "Security Projects | P Ganesh Krishna Reddy",
    description: "Cybersecurity case studies including Web App Penetration Testing, Secure File Transfer implementation, and Android Security Analysis. Review methodologies and outcomes.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
