import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { blogData } from '@/data/blog';
import { notesData } from '@/data/notes';
import { projectsData } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/security-research`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}/journey`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/build-log`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/notes`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ];

    const blogPosts: MetadataRoute.Sitemap = blogData.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }));

    const notes: MetadataRoute.Sitemap = notesData.map((note) => ({
        url: `${SITE_URL}/notes/${note.slug}`,
        lastModified: new Date(note.lastUpdated),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const projects: MetadataRoute.Sitemap = projectsData
        .filter((project) => project.slug)
        .map((project) => ({
            url: `${SITE_URL}/projects/${project.slug}`,
            lastModified: now,
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        }));

    return [...staticPages, ...blogPosts, ...notes, ...projects];
}
