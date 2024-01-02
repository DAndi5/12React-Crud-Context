'use client'
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/GlobalState';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import '../../style/index.scss';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { v4 as uuid } from 'uuid'

const AddUser = () => {

    const router = useRouter();

    const [name, setName] = useState('');

    const { addUser } = useContext(UserContext);


    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuid(),
            name
        }

        addUser(newUser)
        router.push('/')
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormGroup>
                <Label></Label>
                <Input type="text" placeholder="Enter name" name="name" value={name} onChange={handleInputChange} required></Input>

            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link href="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddUser
