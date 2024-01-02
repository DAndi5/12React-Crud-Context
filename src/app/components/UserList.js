'use client'
import React, { useContext } from "react";
import { UserContext } from "../context/GlobalState";
import  Link  from "next/link"
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(UserContext);

  return (
    <ListGroup className="mt-4">
      {users ? (
        <>
          {users.length ? users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link href={`/edit/${user.id}`}  className="btn btn-primary mr-1">
                  &#128396;
                </Link>
                <Button onClick={() => removeUser(user.id)} color="warning">
                  --
                </Button>
              </div>
            </ListGroupItem>
          )):(
              <h1>Нету:(</h1>
          )}
        </>
      ) : (
        <h3 className="text-center">...</h3>
      )}
    </ListGroup>
  );
};

export default UserList;
