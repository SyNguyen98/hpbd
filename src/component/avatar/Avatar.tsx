import "./Avatar.scss"

function Avatar() {
    return (
        <div className="profile-container">
            <div className="birthday-title">
                <div className="title">
                    <div style={{ color: "#4CAF50" }}>
                        Hap
                    </div>
                    <div style={{ color: "#2196F3" }}>
                        py
                    </div>
                    <div style={{ color: "#9C27B0", marginLeft: "12px" }}>
                        Bir
                    </div>
                    <div style={{ color: "#F44336" }}>
                        th
                    </div>
                    <div style={{ color: "#FF9800" }}>
                        day
                    </div>
                </div>
            </div>

            <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/avatar.webp?raw=true'
                 alt="Profile"
                 loading="lazy"/>

            <div className="profile-name">
                Phạm Minh Anh
            </div>
            <div className="profile-birthday">
                12 Tháng 7, 2000
            </div>
        </div>
    );
}

export default Avatar;