import { Container, Content } from './style'

export function Header() {
    return (
        <Container>
            <Content>
                <span>Portifo<span>lio</span></span>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}