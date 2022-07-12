import styled from 'styled-components'

export const Container = styled.section`

    width: 100%;
    height: calc(100vh - 5rem);
    padding: 3rem 8rem;
    
    background: var(--gray-850);
    
    @media (max-width: 1120px) {
        padding: 3rem  2rem;
        height: 840px;
    }
    
`

export const Content = styled.div`
    margin-top: 2rem;
    display: flex;
    margin-left: -2.0rem;
    justify-content: center;
    max-width: 1120px;
    gap: 10rem;
    height: 100%;


    @media (max-width: 768px) {
        margin-top: 2.5rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-left: 0;
        gap: 0.8rem;
        position: relative;
    }
    img{
       width: 460px;
       height: 460px;
       border-radius: 2rem;
    }
    
    
`

export const Text = styled.div`

    flex-basis: 37%;
    letter-spacing: 0.1rem;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;
        flex-wrap: wrap;
        position: relative;
    }
    h2{
        font-size: 3rem;
        color: var(--blue-600);
        font-weight: 900;
        @media (max-width: 768px) {
            font-size: 2.5rem;
            position: absolute;
            top: -31rem;
            left: 5rem;
            margin-bottom: 2rem;
        }
    }
    span{
        display: inline-block;
        margin-top: 1rem;
        font-size: 1.1rem;
        @media (max-width: 768px) {
            font-size: 0.7rem;
        }
    }
    p{
        font-size: 1.2rem;
        margin-top: 1rem;
        @media (max-width: 768px) {
            font-size: 0.8rem;
        }
    }
    a{
        background-color: var(--blue-600);
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