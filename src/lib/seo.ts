import type { Metadata } from 'next';

export const SITE_URL = 'https://pganeshkrishnareddy.vercel.app';
export const SITE_NAME = 'P Ganesh Krishna Reddy';
export const SITE_IMAGE = `${SITE_URL}/profile.jpeg`;

interface PageSeo {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    type?: 'website' | 'article';
    publishedTime?: string;
}

/**
 * Builds complete page metadata: canonical URL, OpenGraph, Twitter card, and
 * robots. `title` stays short so the root layout's "%s | P Ganesh Krishna
 * Reddy" template expands it exactly once.
 */
export function pageMetadata({ title, description, path, keywords, type = 'website', publishedTime }: PageSeo): Metadata {
    const url = `${SITE_URL}${path}`;
    const fullTitle = `${title} | ${SITE_NAME}`;
    return {
        title,
        description,
        ...(keywords ? { keywords } : {}),
        alternates: { canonical: url },
        openGraph: {
            type,
            url,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            ...(publishedTime ? { publishedTime } : {}),
            images: [{ url: SITE_IMAGE, width: 512, height: 512, alt: SITE_NAME }],
        },
        twitter: {
            card: 'summary',
            title: fullTitle,
            description,
        },
        robots: { index: true, follow: true },
    };
}
