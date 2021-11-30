import React from 'react'
import Image from 'next/image'

import FullJourneyInfo from '../components/fulljourney/FullJourenyIntro'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
  
`

const fullJourney = () => {
    return (
        <Container>
            <FullJourneyInfo />
        </Container>
    )
}

export default fullJourney
