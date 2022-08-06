import { Container, Icons } from "./styles";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import women from '../../../public/assets/women-react.svg'
import Typed from "react-typed"
import Image from "next/image";

export function Introduction() {
    return (
        <Container id="home">
            <div className="textandimage">
                <h1>Olá, meu nome é <br />
                    <span className="name">Matheus Lucca</span>
                    <br />

                    <Typed
                        className="teste"
                        strings={["Front-end Developer"]}
                        typeSpeed={150}
                        backDelay={200}
                        backSpeed={100}
                        loop
                    />
                </h1>

                <Image src={women} width='300' height='200' className="teste1" alt="Logo do react" />
            </div>

            <Icons>
                <a href="https://github.com/MatheusLucca"> <FaGithub /> <span>Github</span> </a>
                <a href="https://www.instagram.com"> <FaInstagram className="icon" /> <span>Instagram</span> </a>
                <a href="https://www.linkedin.com/in/matheus-alves-b1a22720a/"> <FaLinkedin /> <span>Linkedin</span> </a>
            </Icons>
        </Container>
    )
}