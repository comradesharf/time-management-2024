import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

const Context = createContext<Reveal.Api>(null as any);

export function useReveal() {
    return useContext(Context);
}

export interface ProviderProps extends PropsWithChildren {}

export function Provider({ children }: ProviderProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    const [deck, setDeck] = useState<Reveal.Api | null>(null);

    useEffect(() => {
        if (!nodeRef.current) {
            return;
        }
        const deck = new Reveal(nodeRef.current, {
            transition: 'slide',
        });
        void deck.initialize().then(setDeck).catch(console.error);
        return () => {
            try {
                deck.destroy();
            } catch (e) {
                console.warn('Reveal.js destroy call failed.', e);
            } finally {
                setDeck(null);
            }
        };
    }, []);

    return (
        <Context.Provider value={deck!}>
            <div className="h-dvh w-dvw">
                <div ref={nodeRef} className="reveal">
                    {children}
                </div>
            </div>
        </Context.Provider>
    );
}
