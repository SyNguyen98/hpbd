import "./Timeline.scss";
import Carousel from "../Carousel.tsx";

type Milestone = {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string[];
    colorClass: string;
    delay?: number; // Optional delay for the carousel
}

const milestonesData: Milestone[] = [
    {
        id: 1,
        title: "Sự khởi đầu",
        date: "12 Tháng 7, 2000",
        description: "Khoảnh khắc em cất tiếng khóc chào đời là lúc vũ trụ thêm một ngôi sao siêu đáng yêu, sáng chói và " +
            "sẵn sàng làm những điều vĩ đại. Từ giây phút đó, hành trình khám phá thế giới rộng lớn đã chính thức bắt đầu, " +
            "đánh dấu sự ra đời của một phiên bản độc đáo không ai có thể sao chép!",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-1.webp'
        ],
        colorClass: "blue"
    },
    {
        id: 2,
        title: "Tuổi 18",
        date: "30 Tháng 5, 2018",
        description: "Tốt nghiệp cấp 3 là khoảnh khắc chính thức \"phá đảo\" một chặng đường đầy ắp kỷ niệm và những bài " +
            "kiểm tra \"khó nhằn\"! Giờ đây, cánh cửa tương lai đang rộng mở, sẵn sàng chào đón bạn bước vào những cuộc " +
            "phiêu lưu mới đầy thú vị.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-2.webp'
        ],
        colorClass: "red"
    },
    {
        id: 3,
        title: "Tốt nghiệp",
        date: "28 Tháng 8, 2022",
        description: "Hoàn thành đại học là khoảnh khắc chính thức nâng tầm \"level\" bản thân, sẵn sàng chinh phục " +
            "mọi thử thách của thế giới người lớn! Hãy tận hưởng thành quả của bao đêm thức khuya học bài và những buổi " +
            "\"deadline dí\" không ngừng nghỉ.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-3.webp'
        ],
        colorClass: "green"
    },
    {
        id: 4,
        title: "Gặp gỡ",
        date: "5 Tháng 4, 2024",
        description: "Khoảnh khắc chạm mặt \"người ấy\" lần đầu tiên, tim em chắc hẳn đã \"nhảy múa\" và thế giới bỗng nhiên " +
            "có thêm một màu hồng rực rỡ! Từ giây phút đó, một câu chuyện tình yêu lãng mạn đã chính thức được viết nên, " +
            "hứa hẹn bao điều bất ngờ và ngọt ngào.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-41.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-42.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-43.webp'
        ],
        colorClass: "blue"
    },
    {
        id: 5,
        title: "Hành trình vẫn sẽ tiếp tục",
        date: "",
        description: "Đây có thể là điểm dừng cuối cùng trong \"timeline\" này, nhưng cuộc phiêu lưu của em vẫn chưa kết thúc đâu nhé! " +
            "Mỗi khoảnh khắc là một trang mới, và những điều tuyệt vời nhất vẫn đang chờ đợi bạn ở phía trước. Hãy cứ vững tin bước tiếp " +
            "và tạo nên những chương mới rực rỡ hơn nữa!",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-51.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-52.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/hpbd/milestone-53.webp',
        ],
        colorClass: "purple",
        delay: 2300
    }
];

function Timeline() {
    return (
        <div className="timeline">
            {milestonesData.map(milestone => (
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="image-container">
                            <Carousel images={milestone.image} delay={milestone.delay}/>
                        </div>
                        <div className={`text-box ${milestone.colorClass}`}>
                            <h2>{milestone.title}</h2>
                            <p className="date">{milestone.date}</p>
                            <p className="description">{milestone.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline;