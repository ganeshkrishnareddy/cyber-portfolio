import { notesData } from '@/data/notes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export function generateStaticParams() {
    return notesData.map((note) => ({
        slug: note.slug,
    }));
}

export default function NotePost({ params }: { params: { slug: string } }) {
    const note = notesData.find((n) => n.slug === params.slug);

    if (!note) {
        notFound();
    }

    return (
        <div className="container max-w-3xl mx-auto px-4 py-12 space-y-12">
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
