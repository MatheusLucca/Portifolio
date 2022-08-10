import Image from 'next/image'
import me from '../../../public/assets/me.png'
import { Container, Content, Text } from './style'
export function About() {
    return (
        <Container id='about'>
            <Content>
                <div className='img'>
                    <Image src={me} alt="Uma foto minha" width={400} height={400}  />
                </div>
                <Text>
                    <h2>Sobre mim</h2>
                    <span>Campo Grande-MS, Brasil.</span>
                    <p>19 anos, técnico em informática, cursando sistemas de informação na Universidade Federal de Mato Grosso do Sul(UFMS).</p>
                    <p>Estou à procura da minha primeira experiência profissional como desenvolvedor estágiario no mercado de trabalho e disponível a trabalhos freelancer.</p>
                    <p>Aqui você encontra alguns dos meus projetos, assim como no linkedin e github.</p>       
                    <a href=''>Currículo</a>         
                </Text>
            </Content>

        </Container>
    )
}