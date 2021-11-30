import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    font-size: 18px;
    text-decoration: none;
    z-index: 999;


`

const Logo = styled.div`
    text-decoration: none;
    cursor: pointer;
`
const UnorderedList = styled.ul`
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-right: 30px; */
`
const NavItem = styled.li`
    display: inline;
    margin-right: 30px;
    font-size: 14px;
    color: lightgray;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`

const Navbar = () => {
    return (

        <Container>
            <Link href="/"><Logo>WU Hosted</Logo></Link>
            <UnorderedList>
                <Link href="/fullJourney">
                    <NavItem>
                        New Customer
                    </NavItem>
                </Link>
                <Link href="/existingCustJourney">
                    <NavItem>
                        Existing Customer
                    </NavItem>
                </Link>
                <Link href="/verificationJourney">
                    <NavItem>
                        Verification
                    </NavItem>
                </Link>
            </UnorderedList>
        </Container>
    )
}

export default Navbar
