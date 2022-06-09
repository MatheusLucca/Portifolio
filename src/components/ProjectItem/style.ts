import styled from 'styled-components'

export const Container = styled.li`
    padding: 0 4rem;
    display: block;
    width: 800px;
    height: 300px;
    position: relative;
    
    &.left{
        a{
            right: 0;
            
        }
        .image-container{
            position: absolute;
            left: 3.5rem;

        }

        .title-desc{
            right: 6rem;
        }

        &:hover{
            .title-desc{
                right: 2rem;
            }
        }

    }
    &.right{
        align-self: flex-end;

        .image-container{
            position: absolute;
            right: 3.5rem;

        }
        a{
            left: 0;
        }
        .title-desc{
            left: 8rem;
        }

        &:hover{
            .title-desc{
                left:4rem;
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
    }
    a{
        position: absolute;
        bottom: 1rem;

        font-size: 2.2rem;

        display: flex;
        gap: 1rem;
        align-items: center;

        transition: all 0.2s;
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
