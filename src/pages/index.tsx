import { type ClassValue, clsx } from 'clsx';
import { Raleway } from 'next/font/google';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`${raleway.className} slides`}>
            <section>
                <h1>The 2-minute rule</h1>
            </section>
            <section>
                <p className="fragment shrink">Reduces procrastination for small tasks.</p>
                <p className="fragment shrink">Creates a sense of accomplishment and momentum.</p>
                <p className="fragment shrink">Frees up mental space for larger tasks.</p>
                <p className="negatives fragment">
                    May not be suitable for all tasks (complex or lengthy ones)
                </p>
                <p className="negatives fragment">
                    Risk of getting caught up in a series of small tasks and neglecting bigger
                    priorities.
                </p>
            </section>
        </main>
    );
}

interface Props extends HTMLAttributes<HTMLDivElement> {
    hideContent?: boolean;
    activeItem?: number;
}

function Technique2MinuteRules({ hideContent, activeItem = 0, ...props }: Props) {
    return (
        <section {...props} data-auto-animate={true}>
            <h1>The 2-minute rule</h1>
            <article className="grid grid-cols-3 gap-10 *:rounded *:p-5 *:text-lg [&>[data-active=true].negatives]:bg-amber-600 [&>[data-active=true]]:bg-violet-600 [&>[data-active=true]]:text-white [&>[data-active=true]~*]:invisible"></article>
        </section>
    );
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
