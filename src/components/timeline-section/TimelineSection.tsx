import {useEffect, useState} from 'react';
import {Calendar, Heart, MapPin} from 'lucide-react';
import './TimelineSection.css';

interface Milestone {
    id: number;
    date: string;
    location: string;
    title: string;
    desc: string;
    img: string;
}

const MILESTONES: Milestone[] = [
    {
        id: 1,
        date: '05/04/2024',
        location: 'Trên Tầng Thượng',
        title: 'Ngày Mình Đến Với Nhau',
        desc: 'Sau những hôm trò chuyện thâu đêm, ngày ấy anh đã lấy hết can đảm để ngỏ lời yêu em. Bên trên tầng thượng ấy, em đã gật đầu đồng ý sau hàng loạt đắn đo suy nghĩ, mở ra chương mới tràn ngập hạnh phúc trong cuộc đời anh.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/timeline-1.webp'
    },
    {
        id: 2,
        date: '26/06/2025',
        location: 'Phan Thiết',
        title: 'Chuyến Đi Chơi Xa Đầu Tiên',
        desc: 'Rời xa sự náo nhiệt của Sài Gòn, hai đứa cùng vi vu đến bãi biển Phan Thiết lộng gió. Quãng đường dài bỗng chốc hóa ngắn ngủi nhờ có tiếng cười nói của em ở sau yên xe. Chuyến đi ấy đã mở ra thật nhiều dặm đường trong tương lai.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/timeline-2.webp'
    },
    {
        id: 3,
        date: '04/12/2025',
        location: 'Đà Lạt',
        title: 'Đón Cái Lạnh ở Thành Phố Ngàn Hoa',
        desc: 'Đà Lạt những ngày cuối năm lạnh buốt nhưng lòng anh ấm áp lạ thường. Mình cùng dạo bờ hồ Xuân Hương, nhâm nhi ly sữa đậu nành và chiếc bánh tráng nướng nóng hổi. Giữa sương mù dày đặc của xứ sở ngàn hoa, em chính là thứ sưởi ấm trái tim anh.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/timeline-3.webp'
    },
    {
        id: 4,
        date: '29/05/2026',
        location: 'Phú Yên',
        title: 'Vitamin Sea Nơi Miền Trung Nắng Gió',
        desc: 'Hành trình tìm về xứ sở \'hoa vàng trên cỏ xanh\'. Cùng checkin Gành Đá Đĩa, nơi cực đông ở Mũi Điện và dạo bước trên bãi cát ở Bãi Môn. Phú Yên lộng gió đầy vitamin sea mát lành, nhưng \'vitamin yêu\' từ em mới là thứ làm anh say đắm.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/timeline-4.webp'
    }
];

export default function TimelineSection() {
    const [activeTimeline, setActiveTimeline] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const rawId = entry.target.getAttribute('data-id');
                    const id = rawId ? Number.parseInt(rawId, 10) : Number.NaN;

                    if (!Number.isNaN(id)) {
                        setActiveTimeline((prev) => [...new Set([...prev, id])]);
                    }
                });
            },
            {threshold: 0.25}
        );

        const elements = document.querySelectorAll<HTMLElement>('.timeline-item');
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
    }, []);

    return (
        <section id="story-timeline" className="timeline-section">
            <div className="section-header">
                <span className="section-eyebrow">The Story Timeline</span>
                <h2 className="section-title">Dòng Thời Gian Kỷ Niệm</h2>
                <div className="section-divider"/>
                <p className="section-description">
                    Cùng nhìn lại chặng đường lãng mạn mà chúng mình đã kề vai sát cánh đi qua. Mỗi bước đi đều vẽ
                    nên một bức tranh hạnh phúc.
                </p>
            </div>

            <div className="timeline-shell">
                <div className="timeline-axis"/>
                <div className="timeline-axis timeline-axis--active"/>

                <div className="timeline-list">
                    {MILESTONES.map((item, index) => {
                        const isVisible = activeTimeline.includes(item.id);

                        return (
                            <div
                                key={item.id}
                                data-id={item.id}
                                className={`timeline-item ${isVisible ? 'timeline-item--visible' : ''} ${index % 2 === 0 ? '' : 'timeline-item--reverse'}`}
                            >
                                <div className="timeline-item__column timeline-item__column--content">
                                    <div className="timeline-card">
                                        <div className="timeline-card__accent"/>
                                        <div className="timeline-card__content">
                                            <div className="timeline-card__meta">
                                                <span className="timeline-card__badge timeline-card__badge--date">
                                                    <Calendar size={12}/>
                                                    {item.date}
                                                </span>
                                                <span className="timeline-card__badge timeline-card__badge--location">
                                                    <MapPin size={12} className="timeline-card__icon--pulse"/>
                                                    {item.location}
                                                </span>
                                            </div>
                                            <h3 className="timeline-card__title">{item.title}</h3>
                                            <p className="timeline-card__description">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item__node">
                                    <Heart
                                        size={16}
                                        className={`timeline-item__node-heart ${isVisible ? 'timeline-item__node-heart--active' : ''}`}
                                        fill="#FF8E9E"
                                    />
                                </div>

                                <div className="timeline-item__column timeline-item__column--image">
                                    <div className="timeline-image-card">
                                        <img src={item.img} alt={item.title} className="timeline-image-card__image"/>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

