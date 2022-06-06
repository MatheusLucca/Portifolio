import styled from "styled-components";

export const Container = styled.header`
    height: 5rem;
    border-bottom: 1px solid var(--gray-800);

`

export const Content = styled.div`
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    > span{
            font-size: 1.7rem;
            font-weight: 900;
            letter-spacing: 0.1rem;
            color: var(--yellow-500);
            
            span{
                color: var(--red);
            }
            
        }
    nav{
        margin-left: auto;
        height: 5rem;

        ul{
            
            height: 5rem;
            list-style: none;
            
            display: flex;
            align-items: center;
            gap: 2rem;
            
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
    }
`