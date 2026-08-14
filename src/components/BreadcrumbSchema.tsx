import { SITE_URL } from '@/lib/seo';

export function BreadcrumbSchema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_URL}/`,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: `${SITE_URL}/about`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Projects',
                item: `${SITE_URL}/projects`,
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: 'Contact',
                item: `${SITE_URL}/contact`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
