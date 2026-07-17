import { blogData } from '@/data/blog';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const metadata = {
    title: 'Engineering Blog | P Ganesh Krishna Reddy',
    description: 'Technical deep-dives into application security, system design, and engineering tradeoffs.',
};

export default function BlogPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary flex items-center gap-3">
                    <BookOpen className="w-10 h-10 text-primary" /> Engineering Blog
                </h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                    Deep dives into application security, system architecture, and production engineering.
                </p>
            </div>

            <div className="grid gap-6">
                {blogData.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                        <div className="p-6 rounded-2xl bg-surface/30 border border-surface hover:border-primary/50 transition-colors">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-mono uppercase tracking-widest">
                                <span className="text-text-muted">{post.date}</span>
                                <span className="text-surface-hover">•</span>
                                <span className="text-primary font-bold">{post.readTime}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                                {post.title}
                            </h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                {post.summary}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-surface-hover rounded-md text-xs font-bold text-text-muted uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
