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
            margin-right: auto;

            font-size: 1.7rem;
            font-weight: 900;
            letter-spacing: 0.1rem;
            color: var(--blue-300);
            
            span{
                color: var(--purple-400);
            }
            
        }
    nav{
        
        height: 5rem;

        @media (max-width: 768px){
            display:none;
        }
        ul{
            
            height: 5rem;
            list-style: none;
            
            display: flex;
            align-items: center;
            gap: 2rem;
            
            
        }
    }
`
export const MenuHamburguer = styled.div`
    display: none;
    @media (max-width: 768px){
        display: flex;
    }
    cursor: pointer;
    `