import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectCaseStudyContent } from '@/components/content/ProjectCaseStudyContent';
import { pageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
    return projectsData
        .filter((project) => project.slug)
        .map((project) => ({
            slug: project.slug,
        }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);
    if (!project) return {};
    return pageMetadata({
        title: project.title,
        description: project.shortDescription,
        path: `/projects/${project.slug}`,
        type: 'article',
        keywords: project.tags,
    });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectCaseStudyContent project={project} />;
}
