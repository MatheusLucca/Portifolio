import styled, { css } from "styled-components";
interface ContainerProps {	
    isOpen: boolean;
}
export const Container = styled.section<ContainerProps>`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    backdrop-filter: blur(3px);
    background: rgb(31,39,41);
    background: linear-gradient(90deg, rgba(31,39,41,0.95) 0%, rgba(18,18,20,0.95) 73%);

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: .5s;

    > svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        transform: rotate(45deg);
        transition: .7s;
    }

    nav{
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 2rem;
            
            transform: scale(0.7);
            transition: .5s;
            li{
                font-size: 2.2rem;
            }
        }
      
    }
    ${({isOpen}) => isOpen && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        
        > svg {
            transform: rotate(0deg);
        }
        nav {
            uL{
                transform: scale(1);
            }
        }
    `}
`