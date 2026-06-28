import React, {useEffect, useState} from 'react';
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

    const handleUnlock = (event: React.SyntheticEvent<HTMLFormElement>) => {
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
                        Nơi cất giữ bức thư mừng sinh nhật chân thành và mong ước tương lai của anh dành cho em.
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
                            <span className="secret-modal__eyebrow">Gửi Em Bé Nhỏ Của Anh</span>
                            <h3 className="secret-modal__title">Gửi Em, Cô người iu dễ thương</h3>
                            <p className="secret-modal__subtitle">Gom hết vốn từ vựng, viết riêng cho em</p>
                        </div>

                        <div className="secret-modal__body">
                            <p>Chào em,</p>

                            <p>
                                Tháng 7 lại về mang theo những cơn mưa rào rạt và cả nụ cười tỏa nắng của em — nụ cười
                                đã làm thay đổi cuộc đời anh. Khi anh ngồi gõ những chữ này, anh đang mỉm cười nhớ về
                                những kỷ niệm nhỏ của hai ta, nhớ về ngày đầu ngượng ngùng, trăn trở hết sức có nên đồng
                                ý lời yêu anh không.
                            </p>

                            <p>
                                Anh chưa bao giờ là một người quá khéo ăn khéo nói, nhưng anh sẽ dùng hết những hành
                                động thực tế nhất để che chở cho em. Cảm ơn em vì đã luôn ở đây, đồng hành, bao dung cho
                                những lần lười biếng của anh, và là chỗ dựa tinh thần bình yên nhất của anh sau mỗi ngày
                                làm việc mệt mỏi.
                            </p>

                            <p>
                                Bước sang tuổi mới, anh mong em luôn có thật nhiều sức khỏe, luôn được tự do làm những
                                điều mình thích, luôn yêu đời và nở nụ cười rạng rỡ tựa như ánh dương. Hãy nhớ rằng, bất
                                kể ngoài kia mọi người có khó khăn với em thế nào, thì phía sau luôn có anh sẵn sàng an
                                ủi và che chở.
                            </p>

                            <p>
                                Chúc em một ngày sinh nhật thật hạnh phúc, ý nghĩa và ngập tràn tình yêu. Nhớ dẫn anh đi
                                ăn buffet mừng tổi mới nhé!
                            </p>
                        </div>

                        <div className="secret-modal__footer">
                            <p className="secret-modal__footer-text">Mãi yêu em ❤️,</p>
                            <p className="secret-modal__signature">Người con trai luôn đứng phía sau em</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

