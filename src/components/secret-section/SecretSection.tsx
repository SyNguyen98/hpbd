import {type FormEvent, useEffect, useState} from 'react';
import {Gift, Heart, Lock, Sparkles, Unlock, X} from 'lucide-react';
import './SecretSection.css';

export default function SecretSection() {
    const [unlocked, setUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showSecretModal, setShowSecretModal] = useState(false);

    useEffect(() => {
        if (!showSecretModal) {
            return undefined;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowSecretModal(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [showSecretModal]);

    const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password === '0504') {
            setUnlocked(true);
            setPasswordError('');
            return;
        }

        setPasswordError('Mật khẩu chưa đúng rồi bé ơi! Gợi ý: Ngày kỷ niệm đầu tiên của tụi mình (ddmm)');
        setPassword('');
    };

    return (
        <>
            <section className="secret-section">
                <div className="secret-card">
                    <div className="secret-card__sparkle secret-card__sparkle--top">
                        <Sparkles size={24}/>
                    </div>
                    <div className="secret-card__sparkle secret-card__sparkle--bottom">
                        <Heart size={24}/>
                    </div>

                    <div className="secret-card__icon-shell">
                        {unlocked ? (
                            <Unlock size={40} className="secret-card__icon secret-card__icon--unlocked"/>
                        ) : (
                            <Lock size={40} className="secret-card__icon"/>
                        )}
                    </div>

                    <h2 className="secret-card__title">Thư Mục Mật Của Chúng Ta</h2>
                    <p className="secret-card__description">
                        Nơi cất giữ bức thư tay dài chứa đựng mọi tâm tư kín đáo, lời thú nhận chân thành và mong ước
                        tương lai của anh dành cho em.
                    </p>

                    {!unlocked ? (
                        <form onSubmit={handleUnlock} className="password-form">
                            <div>
                                <input
                                    type="password"
                                    placeholder="Nhập ngày kỷ niệm (Ví dụ: 0102)"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="password-input"
                                />
                            </div>
                            {passwordError && <p className="password-error">{passwordError}</p>}
                            <button type="submit" className="primary-button primary-button--pill primary-button--full">
                                Mở Khóa Bức Thư
                            </button>
                        </form>
                    ) : (
                        <div className="secret-card__actions">
                            <p className="secret-success">
                                <Sparkles size={16}/>
                                <span>Mở khóa thành công!</span>
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowSecretModal(true)}
                                className="secondary-button secondary-button--full"
                            >
                                <Gift size={18}/>
                                <span>Đọc thư ngay bé ơi!</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {showSecretModal && (
                <div className="secret-modal" onClick={() => setShowSecretModal(false)} role="presentation">
                    <div
                        className="secret-modal__dialog"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Thư bí mật"
                    >
                        <button
                            type="button"
                            onClick={() => setShowSecretModal(false)}
                            className="secret-modal__close"
                        >
                            <X size={20}/>
                        </button>

                        <div className="secret-modal__header">
                            <span className="secret-modal__eyebrow">Gửi Công Chúa Nhỏ Của Anh</span>
                            <h3 className="secret-modal__title">Gửi Em, Cô gái ngọt ngào nhất...</h3>
                            <p className="secret-modal__subtitle">Đêm tĩnh lặng, viết riêng cho em</p>
                        </div>

                        <div className="secret-modal__body">
                            <p>Chào cô bé bé nhỏ,</p>

                            <p>
                                Tháng 7 lại về mang theo những cơn mưa ngâu rào rạt và cả nụ cười rạng ngời của em — nụ
                                cười đã hoàn toàn làm thay đổi cuộc đời anh. Khi anh ngồi gõ những dòng mã này, anh đang
                                mỉm cười nhớ về từng kỷ niệm nhỏ của hai chúng ta, nhớ về ngày đầu ngượng ngùng trú mưa
                                cho đến lúc cầm tay dạo quanh bờ cát vàng Phan Thiết.
                            </p>

                            <p>
                                Anh chưa bao giờ là một người quá khéo ăn khéo nói hay lãng mạn như phim, nhưng anh hứa
                                sẽ dùng hết sự chân thành và hành động thực tế nhất để che chở cho em. Cảm ơn em vì đã
                                luôn ở đây, đồng hành, bao dung cho những nét trẻ con vụng về của anh, và là chỗ dựa
                                tinh thần bình yên nhất của anh sau mỗi ngày làm việc mệt mỏi.
                            </p>

                            <p>
                                Bước sang tuổi mới, anh mong em luôn có thật nhiều sức khỏe, luôn được tự do làm những
                                điều mình thích, luôn yêu đời và nở nụ cười rạng rỡ như ánh mặt trời. Hãy nhớ rằng, bất
                                kể bầu trời ngoài kia có bão giông thế nào, phía sau em luôn có một bờ vai ấm áp sẵn
                                sàng che chở cho em.
                            </p>

                            <p>
                                Anh chúc em một ngày sinh nhật thật hạnh phúc, ý nghĩa và ngập tràn tình yêu. Anh yêu em
                                nhiều hơn mọi ngôn từ có thể diễn tả!
                            </p>
                        </div>

                        <div className="secret-modal__footer">
                            <p className="secret-modal__footer-text">Mãi yêu em,</p>
                            <p className="secret-modal__signature">Người con trai luôn đứng phía sau em</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

