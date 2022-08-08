import styled from 'styled-components'

export const Container = styled.li`
    padding: 0 4rem;
    display: block;
    width: 100vw;
    height: 300px;
    position: relative;
    
    &.left{
        @media (max-width: 768px) {
            display:flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
        a{
            left: 44rem;
            
        }
        .image-container{
            position: absolute;
            left: 3.5rem;
            @media (max-width: 768px) {
                position: relative;
                left: -2.5rem;
            }
        }

        .title-desc{
            left: 37rem;
        }

        &:hover{
            .title-desc{
                left: 42rem;
            }
        }

    }
    &.right{
        align-self: flex-end;
        @media (max-width: 768px) {
            align-self: flex-start;
            display:flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
        .image-container{
            position: absolute;
            right: 3.5rem;

            @media (max-width: 768px) {
                position: relative;
                left: -2.5rem;
            }
        }
        a{
            right: 43rem;
        }
        .title-desc{
            right: 39rem;
        }

        &:hover{
            .title-desc{
                right:42rem;
            }
        }
    }

    .title-desc{
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 1;

        top: 3rem;

        letter-spacing: 0.1rem;
        @media (max-width: 768px) {
            position: static;
        }
        strong{
            font-size: 2.5rem;
            font-weight: 900;
            

            color: var(--purple-400);
        }
        .description{
            font-size: 2.0rem;
            font-weight: 700;

            color: var(--purple-400);
        }

        transition: all 0.4s;
    }

    .image{
        position: absolute;
        z-index: 0;
        opacity: 0.5;
        
        transition: all 0.3s;

        @media (max-width: 768px) {
            position: static;
            opacity: 1;
        }
    }
    a{
        position: absolute;
        bottom: 1rem;

        font-size: 2.2rem;

        display: flex;
        gap: 1rem;
        align-items: center;

        transition: all 0.2s;
        @media (max-width: 768px) {
            position: static;
        }
    }

    &:hover{

        .image{
            opacity: 1;
        }

        a{
            color: var(--purple-700);

            &:hover{
                font-size: 2.6rem;
            }
        }
    }
`
