import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 0 8rem;
    height: calc(90vh - 5rem);
    margin-top: 8rem;
    font-size: 2.5rem;

    .textandimage{
        display: flex;
        justify-content: space-between;

        .name{
            font-size: 5rem;
            color: var(--blue-600);
            font-weight: 900;
        }
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: -2.0rem;
    
    a{
        background-color: var(--gray-600);
        border-radius: 2rem;
        position: relative;
        height: 4rem;
        width: 4rem;
        padding: 0.8rem;
        margin-left: 1rem;

        transition: filter 0.2s;
        transition: width 0.2s ;

        span{
            position: absolute;
            display: inline-block;
            top: 1.1rem;
            left: 1rem;
            font-size: 1.5rem;
            font-weight: 700;
            margin-left: 3rem;

            visibility: hidden;
            
        }
        &:hover{
            background-color: var(--blue-600);
            width: 12rem;
            
            span{
                visibility: visible;
                transition: visibility 90ms;
            }
        }
        &:not(:hover){
            span{
                visibility: hidden;
                transition: visibility 0s;
            }
        }



    }
    a:first-child{
        margin-left: 2rem;
    }

`
