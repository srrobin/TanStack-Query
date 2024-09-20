import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activeUser, deleteAsync, updateAsync } from '../../features/crud/crudSlice';

const TableElement = ({user, index}) => {
    const {id, name, email, state} = user || {}
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = () => {
       navigate(`/redux_update/${id}`)
       dispatch(activeUser(user))
    }

    const handleDelete = () => {
        dispatch(deleteAsync(id))
    }

    const handleDetails = () => {
        navigate(`/redux/${id}`)
    }
    return (

            <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{state}</td>
            <td >
            <Button  onClick={handleDetails} size="sm" variant="primary">Details</Button>{' '}
            <Button  onClick={handleDelete}size="sm" variant="secondary">Delete</Button>{' '}
            <Button  onClick={handleUpdate}size="sm" variant="success">Update</Button>{' '}
            </td>
            </tr>
            
    );
};

export default TableElement;