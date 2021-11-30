import React from 'react'
import styled from 'styled-components'
import MobileEntry from './MobileEntry'


const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: rgb(249, 222, 75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScreenWrapper = styled.div`
    background-color: white;
    width: 470px;
    height: auto;
    min-height: 690px;
    display: flex;
    flex-direction: column;
    border: none;

    -webkit-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
    box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
    

`

const Title = styled.h2`
    margin-top: 100px;

`

const Desc = styled.p`
    width: 50%;
`

const Intro = () => {
    return (
        <Container>
            <Title>Welcome to WU Hosted Solution Customer Journey</Title>
            <Desc></Desc>
            
            <ScreenWrapper>
                <MobileEntry />
            </ScreenWrapper>

        </Container>
    )
}

export default Intro
