'use client'
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Link from "next/link";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar-dark bg-primary" expand="md">
                    <NavbarBrand href="/">BootStrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/add">Добавить</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Компоненты</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">О нас</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    GitHub
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </DropdownItem>
                                    <DropdownItem href="https://github.com/DAndi5">
                                        GitHub
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Опции
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        Опция 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Опция 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Сброс
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
