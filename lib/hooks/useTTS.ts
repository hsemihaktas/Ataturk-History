import { useState, useEffect, useCallback, useRef } from 'react';

type Language = 'tr' | 'en';

interface UseTTSProps {
    language: Language;
    onEnd?: () => void;
}

export function useTTS({ language, onEnd }: UseTTSProps) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
    const speakingRef = useRef(false); // Ref to track status immediately
    const voiceInitialized = useRef(false);

    // Initial voice load
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length === 0) return;

            if (language === 'tr') {
                const trVoices = voices.filter(v => v.lang.includes('tr'));
                if (trVoices.length > 0) {
                    const preferredVoice = trVoices.find(v =>
                        v.name.includes('Google') ||
                        v.name.includes('Yelda') ||
                        v.name.includes('Siri') ||
                        v.name.includes('Natural')
                    );
                    setVoice(preferredVoice || trVoices[0]);
                }
            } else {
                const enVoices = voices.filter(v => v.lang.includes('en'));
                if (enVoices.length > 0) {
                    const preferredVoice = enVoices.find(v =>
                        v.name.includes('Google US') ||
                        v.name.includes('Samantha') ||
                        v.name.includes('Arthur') ||
                        v.name.includes('Natural')
                    );
                    setVoice(preferredVoice || enVoices[0]);
                }
            }
            voiceInitialized.current = true;
        };

        loadVoices();

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, [language]);

    const cancel = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        speakingRef.current = false;
    }, []);

    const speak = useCallback((text: string) => {
        // Cancel any current speech
        cancel();

        // Small timeout to ensure cancel completes
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language === 'tr' ? 'tr-TR' : 'en-US';
            if (voice) {
                utterance.voice = voice;
            }

            utterance.onstart = () => {
                setIsSpeaking(true);
                speakingRef.current = true;
            };

            utterance.onend = () => {
                setIsSpeaking(false);
                speakingRef.current = false;
                if (onEnd) onEnd();
            };

            utterance.onerror = (e) => {
                // Ignore interruption/cancel errors as they are expected user actions
                if (e.error === 'interrupted' || e.error === 'canceled') {
                    setIsSpeaking(false);
                    speakingRef.current = false;
                    return;
                }

                console.error("TTS Error:", e);
                setIsSpeaking(false);
                speakingRef.current = false;
            };

            window.speechSynthesis.speak(utterance);
        }, 50);
    }, [language, voice, onEnd, cancel]);

    // Cleanup
    useEffect(() => {
        return () => {
            cancel();
        };
    }, [cancel]);

    return { speak, cancel, isSpeaking };
}
