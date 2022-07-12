import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    padding: 3rem 8rem;
    height: calc(100vh - 5rem);

    h2{
        margin-top: 2rem;
        margin-bottom: 5rem;
        text-align: center;
        
        color: var(--blue-600);
        
        font-size: 3rem;
        font-weight: 900;
    }


`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    div{
        color: var(--blue-300);
        h3{
            font-size: 2.0rem;
        }
        h4{
            font-size: 1.8rem;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
        span{
            font-size: 1.2rem;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 100%;
        margin-left: -3rem;


        input{
            width :30rem;
            height: 4rem;
            border-radius: 0.5rem;
            color: black;

            padding-left: 1rem;

            font-size: 1.4rem;
            
            opacity: 0.8;
            
            transition: all 0.2s;
            &:focus{
                outline: none;
                border: 2px solid var(--blue-300);
            }
        }
        div{
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            @media (max-width: 768px) {
                margin-top:1rem;
                gap: 1rem;
                width: 150%;
            }
        }
        .subject{
            width: 100%;
            @media (max-width: 768px) {
                width: 150%;
            }
        }
        textarea{
            height: 6rem;
            border-radius: 0.5rem;
            color: black;

            padding: 1rem;
            font-size: 1.4rem;
            opacity: 0.8;
            @media (max-width: 768px) {
                width: 150%;
            }
            transition: all 0.2s;
            &:focus{
                outline: none;
                border: 2px solid var(--blue-300);
            }
        }
        button{
            color: white;
            align-self: flex-end;
            font-size: 1.2rem;

            background-color: var(--blue-600);
            border: 0;
            height: 3rem;
            width: 15rem;

            border-radius: 1.5rem;

            transition: all 0.2s;
            @media (max-width: 768px) {
                align-self: flex-start;
                width: 150%;
            }
            &:hover{
                filter: brightness(0.8);
            }
            

        }
    }
`