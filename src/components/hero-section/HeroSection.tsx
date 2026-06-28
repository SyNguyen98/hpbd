import {useEffect, useState} from 'react';
import {ChevronDown, Sparkles} from 'lucide-react';
import './HeroSection.css';

const HERO_IMAGES = [
    'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/hero-1.webp',
    'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/hero-2.webp',
    'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/hero-3.webp',
    'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/hero-4.webp'
];

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, [setCurrentImageIndex]);

    const scrollToTimeline = () => {
        document.getElementById('story-timeline')?.scrollIntoView({behavior: 'smooth'});
    };

    if (!isClient) {
        return null;
    }

    return (
        <section className="hero-section">
            <div className="hero-background">
                {HERO_IMAGES.map((image, index) => (
                    <div
                        key={image}
                        className={`hero-slide ${index === currentImageIndex ? 'hero-slide--active' : ''}`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="hero-slide__image"
                        />
                    </div>
                ))}
                <div className="hero-overlay"/>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <Sparkles size={16}/>
                    <span>Món quà dành riêng cho cô gái Cự Giải</span>
                </div>

                <h1 className="hero-title">
                    Chúc Mừng Sinh Nhật <br/>
                    <span className="hero-title__highlight">Cô Gái Tháng 7</span> Của Anh!
                </h1>

                <p className="hero-description">
                    Hôm nay là một ngày đặc biệt nhất trong năm — ngày mà cả thế giới đón chào một thiên thần đáng yêu
                    xuất hiện. Cảm ơn em đã bước vào cuộc đời anh và tô điểm nó bằng những gam màu ngọt ngào nhất.
                </p>

                <button type="button" onClick={scrollToTimeline} className="hero-cta">
                    <span>Bắt đầu hành trình kỷ niệm</span>
                    <ChevronDown size={18}/>
                </button>
            </div>

            <div className="hero-scroll-indicator">
                <p>Cuộn xuống</p>
                <div className="hero-scroll-track">
                    <div className="hero-scroll-thumb"/>
                </div>
            </div>
        </section>
    );
}

