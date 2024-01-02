'use client'
import { useContext, useEffect, useState } from 'react';
import {useRouter} from "next/navigation";
import Link from 'next/link';
import { UserContext } from '../../context/GlobalState';
import '../../../style/index.scss';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

type Props = {
    params: {
        id: string;
    };
};

const EditUser = ({ params: { id } }: Props) => {

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });

    const { users, editUser } = useContext(UserContext);
    const router = useRouter();
    const currentUserId = id;


    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find((user:any) => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users])

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]:value })
    }

    const handleSubmitForm = (e:any) => {
        e.preventDefault();

        editUser(selectedUser)

        router.push('/')
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter name" name="name" value={selectedUser.name} onChange={handleInputChange} required></Input>
            </FormGroup>
            <Button type="submit">Edit</Button>
            <Link href="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser
