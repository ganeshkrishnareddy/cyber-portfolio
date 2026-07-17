import { blogData } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogData.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container max-w-3xl mx-auto px-4 py-12 space-y-12">
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
