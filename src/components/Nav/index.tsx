import Link from "next/link";
import { Container } from "./style";

interface NavProps {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}
export function Nav({ setIsMenuOpen }: NavProps) {
    return(
        <Container>
            <ul>
                <li onClick={()=>setIsMenuOpen(false)}><Link href={'#home'}><a>Home</a></Link></li>
                <li onClick={()=>setIsMenuOpen(false)}><Link href={'#about'}><a>Sobre mim</a></Link></li>
                <li onClick={()=>setIsMenuOpen(false)}><Link href={'#skills'}><a href="#">Habilidades</a></Link></li>
                <li onClick={()=>setIsMenuOpen(false)}><Link href={'#projects'}><a href="#">Projetos</a></Link></li>
                <li onClick={()=>setIsMenuOpen(false)}><Link href={'#form'}><a href="#">Contato</a></Link></li>
            </ul>
        </Container>
    )
}