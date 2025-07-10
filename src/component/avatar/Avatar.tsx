import "./Avatar.scss"

function Avatar() {
    return (
        <div className="profile-container">
            <img src='https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/avatar.webp?raw=true'
                 alt="Profile"
                 loading="lazy"/>

            <div className="profile-name">
                Phạm Minh Anh
            </div>
        </div>
    );
}

export default Avatar;