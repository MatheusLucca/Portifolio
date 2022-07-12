import styled from "styled-components";

export const Container = styled.section`
    width: 100vh;
    height: 100%;
    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    background: var(--gray-850);
    
    h2{
        text-align: center;
        font-size: 3rem;
        color: var(--blue-600);
        font-weight: 900;

        margin-top: 2rem;
        
    }
    
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6rem;
    }
    
    > a{
        align-self: center;
        
        background-color: var(--blue-600);

        border-radius: 1.5rem;

        width: 15rem;
        height: 4rem;
        
        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }    

`