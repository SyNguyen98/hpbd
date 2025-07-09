import "./Timeline.scss";
import Carousel from "../Carousel.tsx";

type Milestone = {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string[];
    colorClass: string;
}

const milestonesData: Milestone[] = [
    {
        id: 1,
        title: "Sự khởi đầu",
        date: "12 Tháng 7, 2000",
        description: "Vào ngày này, bé Minh Anh được sinh ra, đánh dấu sự bắt đầu của một hành trình đầy hứa hẹn.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-1.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-2.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-3.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-4.webp'
        ],
        colorClass: "blue"
    },
    {
        id: 2,
        title: "Tuổi 18",
        date: "30 Tháng 5, 2018",
        description: "We rolled out a critical new feature, significantly enhancing user experience and expanding our capabilities.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-1.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-2.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-3.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-4.webp'
        ],
        colorClass: "red"
    },
    {
        id: 3,
        title: "Tốt nghiệp",
        date: "28 Tháng 8, 2022",
        description: "Our community reached a new milestone, demonstrating strong engagement and a growing user base.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-1.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-2.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-3.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-4.webp'
        ],
        colorClass: "green"
    },
    {
        id: 4,
        title: "Gặp gỡ",
        date: "5 Tháng 4, 2024",
        description: "A significant strategic partnership was formed, opening new avenues for collaboration and growth.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-1.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-2.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-3.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-4.webp'
        ],
        colorClass: "blue"
    },
    {
        id: 5,
        title: "Hành trình vẫn sẽ tiếp tục",
        date: "",
        description: "Our efforts were recognized with a prestigious industry award, celebrating our team's dedication.",
        image: [
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-1.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-2.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-3.webp',
            'https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/achievements/chika-4.webp'
        ],
        colorClass: "purple"
    }
];

function Timeline() {
    return (
        <div className="timeline">
            {milestonesData.map(milestone => (
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="image-container">
                            <Carousel images={milestone.image}/>
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