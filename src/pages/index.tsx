import { About } from "../components/About";
import { Form } from "../components/Form";
import { Introduction } from "../components/Introduction";
import { ProjectList } from "../components/ProjectList";
import { Skills } from "../components/Skills";
import { Container } from "../components/home";

export default function Home() {
  return (
    <Container>
      <Introduction />
      <About />
      <Skills />
      <ProjectList />
      <Form />
    </Container>
  )
}