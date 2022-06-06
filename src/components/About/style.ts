import styled from 'styled-components'

export const Container = styled.section`

    width: 100%;
    height: calc(90vh - 5rem);
    
    padding: 3rem 8rem;
    
    background: var(--gray-850);
    

    
`

export const Content = styled.div`
    display: flex;
    max-width: 1120px;
    gap: 10rem;
    height: 100%;

    img{
       width: 460px;
       height: 460px;
       border-radius: 2rem;
    }
    
`

export const Text = styled.div`
    flex-basis: 37%;
    letter-spacing: 0.1rem;
    h2{
        font-size: 3rem;
        color: var(--blue-600);
        font-weight: 900;
    }
    span{
        display: inline-block;
        margin-top: 1rem;
        font-size: 1.1rem;
    }
    p{
        font-size: 1.2rem;
        margin-top: 1rem;
        
    }
    a{
        background-color: var(--blue-600);
        display: inline-block;
        margin-top: 1.5rem;
        width: 10rem;
        height: 3rem;
        
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }
`