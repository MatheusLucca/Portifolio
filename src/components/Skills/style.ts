import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    padding: 3rem 8rem;
    height: calc(100vh - 5rem);
    h2{
        margin-top: 2rem;
        margin-bottom: 4rem;
        text-align: center;

        font-size: 3rem;
        color: var(--blue-600);
        font-weight: 900;
        @media (max-width: 768px) {
            text-align: start;
            margin-left: -3rem;
        }
    }

    div{
        &.item{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            span{
                font-size: 1.6rem;
            }
        }
    }
`