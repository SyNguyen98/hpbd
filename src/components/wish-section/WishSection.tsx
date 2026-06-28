import {type CSSProperties} from 'react';
import {Heart} from 'lucide-react';
import './WishSection.css';

type WishTone = 'pink' | 'rose' | 'amber' | 'blue' | 'purple';

interface WishNote {
    id: number;
    sender: string;
    avatar: string;
    content: string;
    tone: WishTone;
    rotation: number;
}

const WISH_NOTES: WishNote[] = [
    {
        id: 1,
        sender: 'Mẹ của Em',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=mom',
        content: 'Chúc con gái yêu của mẹ bước sang tuổi mới luôn xinh đẹp, bình an và hạnh phúc. Hãy luôn mỉm cười con nhé, bố mẹ luôn yêu thương và tự hào về con!',
        tone: 'pink',
        rotation: 2
    },
    {
        id: 2,
        sender: 'Anh Người Yêu',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=boyfriend',
        content: 'Chúc cô gái tháng 7 của anh một ngày sinh nhật ngập tràn niềm vui. Anh hứa sẽ luôn ở bên, yêu thương, che chở và đồng hành cùng em trong mọi chặng đường sắp tới!',
        tone: 'rose',
        rotation: -3
    },
    {
        id: 3,
        sender: 'Cô bạn thân (Hương)',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=friend1',
        content: 'Happy Birthday bạn yêu! Chúc bà luôn trẻ trung xinh đẹp như tuổi 18 nhé. Sớm hoàn thành mục tiêu mua nhà, mua xe nha. Bao giờ rảnh phải đi ăn lẩu ăn mừng nha!',
        tone: 'amber',
        rotation: 1
    },
    {
        id: 4,
        sender: 'Cậu em trai (Duy)',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=brother',
        content: 'Chúc bà chị khó tính của em sang tuổi mới bớt bớt mắng em lại nha, xinh đẹp hơn và mau dắt anh rể về nhà ăn cơm tiếp ạ. Sinh nhật vui vẻ nha chị hai!',
        tone: 'blue',
        rotation: -2
    },
    {
        id: 5,
        sender: 'Đồng nghiệp (Mai)',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=colleague',
        content: 'Chúc mừng sinh nhật em gái tài năng nhất phòng. Tuổi mới thăng tiến vượt bậc, KPI lúc nào cũng vượt mức và luôn giữ được ngọn lửa rạng ngời này nhé!',
        tone: 'purple',
        rotation: 3
    }
];

export default function WishSection() {
    return (
        <section className="wish-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-eyebrow">Secret Wish Wall</span>
                    <h2 className="section-title">Bức Tường Chúc Mừng Sinh Nhật</h2>
                    <div className="section-divider"/>
                    <p className="section-description">
                        Anh đã âm thầm tập hợp những lời chúc ấm áp nhất từ gia đình, bạn bè thân thiết nhất của em.
                        Ai cũng rất yêu mến em đó!
                    </p>
                </div>

                <div className="wish-grid">
                    {WISH_NOTES.map((note) => (
                        <div
                            key={note.id}
                            className={`wish-note wish-note--${note.tone}`}
                            style={{'--wish-rotation': `${note.rotation}deg`} as CSSProperties}
                        >
                            <div className="wish-note__header">
                                <img src={note.avatar} alt={note.sender} className="wish-note__avatar"/>
                                <div>
                                    <h4 className="wish-note__sender">{note.sender}</h4>
                                    <span className="wish-note__meta">Người Gửi</span>
                                </div>
                                <div className="wish-note__hover-heart">
                                    <Heart size={14} className="wish-note__heart-icon" fill="#FF8E9E"/>
                                </div>
                            </div>
                            <p className="wish-note__content">" {note.content} "</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


