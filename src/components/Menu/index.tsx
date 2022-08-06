import { Container } from "./style";
import { IoClose } from 'react-icons/io5'
import { Nav } from "../Nav";
import { useEffect } from "react";

interface MenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}
export function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
    useEffect(() => {
        document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen])
    return(
        <Container isOpen={isMenuOpen}>
            <IoClose size={45} onClick={() => setIsMenuOpen(false)}/>
            <Nav setIsMenuOpen={setIsMenuOpen}/>
        </Container>
    )
}