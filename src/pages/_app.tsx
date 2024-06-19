import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const RevealProvider = dynamic(() => import('@/components/reveal').then((mod) => mod.Provider), {
    ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RevealProvider>
            <Component {...pageProps} />
        </RevealProvider>
    );
}
