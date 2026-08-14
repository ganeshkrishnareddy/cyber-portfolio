import type { Metadata } from 'next';
import { blogData } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/seo';

export function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);
    if (!post) return {};
    return pageMetadata({
        title: post.title,
        description: post.summary,
        path: `/blog/${post.slug}`,
        type: 'article',
        keywords: post.tags,
        publishedTime: post.date,
    });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en',
        author: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Person', name: SITE_NAME },
        url: `${SITE_URL}/blog/${post.slug}`,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.tags.join(', '),
    };

    return (
        <div className="container max-w-3xl mx-auto px-4 py-12 space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm font-mono uppercase tracking-widest text-text-muted">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="text-surface-hover">•</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-surface/50 border border-surface rounded-md text-xs font-bold text-primary uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div 
                className="prose prose-invert prose-p:text-text-muted prose-headings:text-text-primary prose-a:text-primary max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: post.content || `<p>Deep dive technical content for this topic is currently being ported from my internal knowledge base. Check back soon for the full architectural breakdown.</p>` }}
            />
        </div>
    );
}
