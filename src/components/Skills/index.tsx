import { Container } from "./style";
import { DiHtml5, DiCss3, DiJavascript1, DiPostgresql, DiGit, DiReact, } from 'react-icons/di'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export function Skills() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Container>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                shouldResetAutoplay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <h2>Habilidades</h2>
                <div>
                    Item 1
                    <DiHtml5 size={150} />
                </div>
                <div><DiHtml5 size={150} /></div>
                <div><DiHtml5 size={150} /></div>
                <div><DiHtml5 size={150} /></div>
            </Carousel>;
        </Container>
    )
}
