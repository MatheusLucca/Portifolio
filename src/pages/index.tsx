import { About } from "../components/About";
import { Introduction } from "../components/Introduction";
import { Skills } from "../components/Skills";
import { Container } from "./home";

export default function Home() {
  return (
    <Container>
      <Introduction />
      <About />
      <Skills />
    </Container>
  )
}