import React from 'react'
import  Link  from "next/link"
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

const Heading = () => {
    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        {/*<Navbar color="" dark>*/}
        {/*    <Container>*/}
        {/*        <NavbarBrand href="/"> Context App</NavbarBrand>*/}
                <Nav>
                    <NavItem>
                        <Link className="btn btn-success"  href="/add">Добавить</Link>
                    </NavItem>
                </Nav>
        {/*    </Container>*/}
        {/*</Navbar>*/}
        </div>
    )
}

export default Heading
