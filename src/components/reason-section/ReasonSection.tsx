import {Heart} from 'lucide-react';
import './ReasonSection.css';

interface Reason {
    id: number;
    title: string;
    text: string;
    img: string;
    size: 'large' | 'medium' | 'small';
}

const REASONS: Reason[] = [
    {
        id: 1,
        title: 'Nhỏ Nhắn Đáng Iu',
        text: 'Sự đáng iu gói gọn trong cơ thể 1m54 nên chỉ cần nhìn thôi là muốn che chở.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-1.webp',
        size: 'large'
    },
    {
        id: 2,
        title: 'Sự Chu Đáo, Ngọt Ngào',
        text: 'Cách em luôn quan tâm mỗi khi anh buồn, luôn có những ly nước sâm, những chiếc bánh để động viên tinh thần làm anh thấy vô cùng ấm áp.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-2.webp',
        size: 'medium'
    },
    {
        id: 3,
        title: 'Tấm Lòng Nhân Hậu',
        text: 'Em luôn quan tâm giúp đỡ người khác, ủng hộ những hoàn cảnh khó khăn. Điều đó làm anh thấy em thật sự là một người con gái tuyệt vời.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-3.webp',
        size: 'small'
    },
    {
        id: 4,
        title: 'Lắng Nghe Và Sẻ Chia',
        text: 'Là người duy nhất anh có thể thoải mái kể mọi chuyện trên đời mà không sợ bị phán xét.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-4.webp',
        size: 'medium'
    },
    {
        id: 5,
        title: 'Food Girl Chính Hiệu',
        text: 'Có thể tìm 7x7 49 quán ăn và cũng có thể đi thử hết các quán đó. Thật sự là một cô gái yêu thích ẩm thực.',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-5.webp',
        size: 'large'
    },
    {
        id: 6,
        title: 'Đầu Bếp Học Việc',
        text: 'Em chịu khó lao vào bếp để làm đủ loại món ăn, từ thịt heo chiên xù, cho đến panna cotta. Anh rất là thích đấy nhá!',
        img: 'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/reason-6.webp',
        size: 'small'
    }
];

export default function ReasonSection() {
    return (
        <section className="reasons-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-eyebrow">Digital Jar of Hearts</span>
                    <h2 className="section-title">Hũ Thủy Tinh "Lý Do Anh Yêu Em"</h2>
                    <div className="section-divider"/>
                    <p className="section-description">
                        Không cần giấu kín, dưới đây là những điều chân thành nhất, những thói quen đáng yêu của em
                        làm trái tim anh rung động mỗi ngày.
                    </p>
                </div>

                <div className="reasons-grid">
                    {REASONS.map((item) => (
                        <div key={item.id} className={`reason-card reason-card--${item.size}`}>
                            <img src={item.img} alt={item.title} className="reason-card__image"/>
                            <div className="reason-card__overlay"/>

                            <div className="reason-card__body">
                                <div className="reason-card__icon">
                                    <Heart size={18} fill="currentColor"/>
                                </div>
                                <h3 className="reason-card__title">{item.title}</h3>
                                <p className="reason-card__text">{item.text}</p>
                            </div>

                            <div className="reason-card__hint">Chạm/Rê chuột xem</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

