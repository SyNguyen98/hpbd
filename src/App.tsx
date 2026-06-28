import {useRef, useState} from 'react';
import {Heart, Volume2, VolumeX} from 'lucide-react';
import HeroSection from './components/hero-section/HeroSection';
import TimelineSection from './components/timeline-section/TimelineSection';
import ReasonSection from './components/reason-section/ReasonSection';
import WishSection from './components/wish-section/WishSection';
import SecretSection from './components/secret-section/SecretSection';
import './App.css';

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMusic = () => {
        const audioElement = audioRef.current;

        if (!audioElement) {
            return;
        }

        if (isPlaying) {
            audioElement.pause();
            setIsPlaying(false);
            return;
        }

        void audioElement.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setIsPlaying(false);
        });
    };

    return (
        <div className="birthday-app">
            <audio
                ref={audioRef}
                src="https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/Mai-Mai-Ben-Nhau.mp3"
                loop
            />

            <button
                type="button"
                onClick={toggleMusic}
                className={`music-toggle ${isPlaying ? 'music-toggle--playing' : ''}`}
                aria-label="Toggle Music"
            >
                {isPlaying ? (
                    <div className="music-toggle__content">
                        <span className="music-bar music-bar--short"></span>
                        <span className="music-bar music-bar--tall"></span>
                        <span className="music-bar music-bar--medium"></span>
                        <Volume2 size={20} className="music-toggle__icon"/>
                    </div>
                ) : (
                    <div className="music-toggle__content music-toggle__content--muted">
                        <VolumeX size={20} className="music-toggle__icon music-toggle__icon--muted"/>
                    </div>
                )}
            </button>

            <HeroSection />

            <TimelineSection />

            <ReasonSection />

            <WishSection />

            <SecretSection />

            <footer className="app-footer">
                <div className="app-footer__inner">
                    <p className="app-footer__headline">
                        <span>Thiết kế bằng cả trái tim</span>
                        <Heart size={14} className="app-footer__heart" fill="#FF8E9E"/>
                        <span>bởi anh người yêu đáng yêu của em.</span>
                    </p>
                    <p>© 2026 Toàn bộ bản quyền thuộc về Chuyện tình yêu tuyệt đẹp của tụi mình.</p>
                </div>
            </footer>
        </div>
    );
}


