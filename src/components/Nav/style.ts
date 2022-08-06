import styled from "styled-components";

export const Container = styled.nav`  
    ul{
        list-style: none;
        
        li{
                font-size: 1.2rem;
                a{
                    padding: 0 0.5rem;

                    transition: filter 0.2s;

                    &:hover{
                        filter: brightness(0.7);
                    }
                }
            }
    }
`;