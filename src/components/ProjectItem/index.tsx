import Image from "next/image";
import { Container, } from "./style";
import { BsArrowRightCircle } from 'react-icons/bs'
interface ProjectItemProps {
    project: {
        name: string;
        type: string;
        description: string;
        imagem: string;
        link: string;
        class: string;
    }
}
export function ProjectItem({ project }: ProjectItemProps) {
    return (
        <Container className={project.class}>
            <div className="title-desc">
                <strong>{project.name}</strong>
                <span className="description">- {project.type}</span>
            </div>
            <div className="image-container">
                <Image src={project.imagem} alt={project.name} width="550" height="300" className="image" />
            </div>
            <a href="">
                Ver mais
                <BsArrowRightCircle />
            </a>
        </Container>
    )
}