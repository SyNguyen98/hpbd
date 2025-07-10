import "./WishCards.scss"

function WishCards() {
    return (
        <div className="wish-cards">
            <div className="wish-card">
                <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/wish-1.webp?raw=true'
                     alt="Duong & Minh Anh"
                     loading="lazy"/>
                <div className="wish-content">
                    <p className="content">
                        Thêm một năm đã qua, heo hai đã thêm 1 tuổi chúc hai sự nghiệp thành đạt như thuyền gặp gió ⛵️, tiền vô như nước :)))
                        có j mua bánh tráng cho em càng tốt 😋, mau hết què chân, dồi dào sức khỏe 💪
                    </p>
                    <p className="sign">
                        - Bé Dương -
                    </p>
                </div>
            </div>

            <div className="wish-card">
                <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/wish-2.webp?raw=true'
                     alt="An & Minh Anh"
                     loading="lazy"/>
                <div className="wish-content">
                    <p className="content">
                        Thêm ...
                    </p>
                    <p className="sign">
                        - Ân -
                    </p>
                </div>
            </div>

            <div className="wish-card">
                <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/wish-3.webp?raw=true'
                     alt="we"
                     loading="lazy"/>
                <div className="wish-content">
                    <p className="content">
                        Lần thứ hai mừng sinh nhật cùng em nên lần này phải làm đặc biệt hơn 1 tí ^^ Chúc em luôn vui tươi,
                        khỏe mạnh, chân mau lành. Thành công trong cuộc sống và sự nghiệp. Và luôn hạnh phúc bên anh nhé! 😉
                    </p>
                    <p className="sign">
                        - Anh ❤️ -
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WishCards;