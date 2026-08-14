import type { Metadata } from 'next';
import { notesData } from '@/data/notes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/seo';

export function generateStaticParams() {
    return notesData.map((note) => ({
        slug: note.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const note = notesData.find((n) => n.slug === slug);
    if (!note) return {};
    return pageMetadata({
        title: note.title,
        description: note.summary,
        path: `/notes/${note.slug}`,
        type: 'article',
        keywords: [note.category],
        publishedTime: note.lastUpdated,
    });
}

export default async function NotePost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const note = notesData.find((n) => n.slug === slug);

    if (!note) {
        notFound();
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: note.title,
        description: note.summary,
        datePublished: note.lastUpdated,
        dateModified: note.lastUpdated,
        inLanguage: 'en',
        author: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Person', name: SITE_NAME },
        url: `${SITE_URL}/notes/${note.slug}`,
        mainEntityOfPage: `${SITE_URL}/notes/${note.slug}`,
    };

    return (
        <div className="container max-w-3xl mx-auto px-4 py-12 space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Link href="/notes" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Notes
            </Link>

            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm font-mono uppercase tracking-widest text-text-muted">
                    <span className="text-primary font-bold">{note.category}</span>
                    <span className="text-surface-hover">•</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Updated: {note.lastUpdated}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                    {note.title}
                </h1>
            </div>

            <div 
                className="prose prose-invert prose-p:text-text-muted prose-headings:text-text-primary prose-a:text-primary prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: note.content || `<p>System design notes and architectural patterns for this topic are currently being documented. This section serves as a raw ledger of engineering decisions.</p>` }}
            />
        </div>
    );
}
