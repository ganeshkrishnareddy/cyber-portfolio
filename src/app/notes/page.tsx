import { notesData } from '@/data/notes';
import Link from 'next/link';
import { Network } from 'lucide-react';

export const metadata = {
    title: 'System Design Notes | P Ganesh Krishna Reddy',
    description: 'Raw documentation and design patterns for distributed systems.',
};

export default function NotesPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary flex items-center gap-3">
                    <Network className="w-10 h-10 text-primary" /> System Design
                </h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                    Raw notes, architectural patterns, and engineering ledgers. 
                </p>
            </div>

            <div className="grid gap-6">
                {notesData.map((note) => (
                    <Link href={`/notes/${note.slug}`} key={note.slug} className="block group">
                        <div className="p-6 rounded-2xl bg-surface/30 border border-surface hover:border-primary/50 transition-colors">
                            <div className="flex flex-wrap items-center gap-4 mb-2 text-sm font-bold uppercase tracking-widest">
                                <span className="text-primary">{note.category}</span>
                                <span className="text-surface-hover">•</span>
                                <span className="text-text-muted">Updated: {note.lastUpdated}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                                {note.title}
                            </h2>
                            <p className="text-text-muted leading-relaxed">
                                {note.summary}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
