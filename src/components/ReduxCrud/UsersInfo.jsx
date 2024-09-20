import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsync } from '../../features/crud/crudSlice';
import TableElement from './TableElement';
import LoadingBlock from "../../utils/LoadingBlock"
import ErrorBlock from "../../utils/ErrorBlock"

const UsersInfo = () => {
    const dispatch = useDispatch();
    const {users, isLoading, isError, error} = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(fetchAsync())
    },[dispatch])

    let content;
    if(isLoading) content = <> <LoadingBlock /></>
    if(!isLoading && isError) content = <> <ErrorBlock message={error.message}/></>
    if(!isLoading && !isError && users.length === 0) content = <> No Users </>
    if(!isLoading && !isError ) { content = 
        users?.map((item, index) => (
            <TableElement key={item.id} user={item} index={index}/> 
        ))
    }

    return (
        <div>
            <Link to="/redux_create">
               <Button className="mb-5" size="sm" variant="primary">Add Users</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>Ations</th>
                    </tr>
                </thead>
                <tbody>
                {content}  
                </tbody>
            </Table>

        </div>
    );
};

export default UsersInfo;