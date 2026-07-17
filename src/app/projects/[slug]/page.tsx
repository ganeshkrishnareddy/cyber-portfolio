import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectCaseStudyContent } from '@/components/content/ProjectCaseStudyContent';

export async function generateStaticParams() {
    return projectsData
        .filter((project) => project.slug)
        .map((project) => ({
            slug: project.slug,
        }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectCaseStudyContent project={project} />;
}
