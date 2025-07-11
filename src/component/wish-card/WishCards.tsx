import "./WishCards.scss"

function WishCards() {
    return (
        <div className="wish-cards">
            <div className="wish-card" style={{backgroundColor: '#E3F2FD'}}>
                <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/wish-1.webp?raw=true'
                     alt="Duong & Minh Anh"
                     loading="lazy"/>
                <div className="wish-content">
                    <p className="content">
                        Thêm một năm đã qua, heo hai đã thêm 1 tuổi. Chúc hai sự nghiệp thành đạt như thuyền gặp gió ⛵️, tiền vô như nước :)))
                        có j mua bánh tráng cho em càng tốt 😋, mau hết què chân, dồi dào sức khỏe 💪
                    </p>
                    <p className="sign">
                        - Bé Dương -
                    </p>
                </div>
            </div>

            <div className="wish-card" style={{backgroundColor: '#E8F5E9'}}>
                <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/wish-2.webp?raw=true'
                     alt="An & Minh Anh"
                     loading="lazy"/>
                <div className="wish-content">
                    <p className="content">
                        Hé lô người đẹp, cuối cùng tui cũng có thể sống đến ngày có thể nhìn Minh Anh có người yêu và
                        viết lời chúc này vì người yêu MinAnh muốn tạo bất ngờ =))
                    </p>
                    <p className="content">
                        Này chắc lần thứ 9 chúc mừng sn bà rồi nhỉ, chúc bà tuổi mới hạnh phúc, vui vẻ, ngày càng tài giỏi
                        và vẫn giữ được sự vô tri hài hước, tuổi mới rực rỡ hơn nhá
                    </p>
                    <p className="sign">
                        - Ân -
                    </p>
                </div>
            </div>

            <div className="wish-card" style={{backgroundColor: '#FCE4EC'}}>
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