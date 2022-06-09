import { useState } from "react";
import { Container, Content } from "./styles";

export function Form() {

    const [name, setName] = useState('')

    return (
        <Container>
            <h2>Entre em contato</h2>
            <Content>
                <div>
                    <h3>Informações</h3>

                    <h4>Nome</h4>
                    <span>Matheus Lucca Alves</span>

                    <h4>Email</h4>
                    <span>mat.lualves@gmail.com</span>
                </div>

                <form action="">
                    <div>
                        <input
                            type="text" name="" id=""
                            placeholder="Nome"
                            value={name}
                            onChange={(event) => {
                                const value = event.target.value;

                                setName(value)
                            }}
                        />
                        <input type="email" name="" id=""
                            placeholder="Email"
                        />
                    </div>
                    <input type="text" name="" id="" className="subject"
                        placeholder="Assunto"
                    />
                    <textarea
                        placeholder="Descrição"
                    >

                    </textarea>

                    <button type="button"> Enviar Mensagem </button>
                </form>
            </Content>
        </Container>
    )
}