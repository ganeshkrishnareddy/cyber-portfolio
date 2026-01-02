export function BreadcrumbSchema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ganeshsecurity.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://ganeshsecurity.com/about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Projects",
                "item": "https://ganeshsecurity.com/projects"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://ganeshsecurity.com/contact"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
