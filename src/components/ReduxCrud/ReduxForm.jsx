import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAsync, inactiveUser, updateAsync } from '../../features/crud/crudSlice';

const ReduxForm = () => {
    const [formData, setFormData] = useState({
         name:"",
         email:"",
         state:""
    })
    console.log("🚀 ~ ReduxForm ~ formData:", formData)
    const [updateMode, setUpdateMode] = useState(false);
    console.log("🚀 ~ ReduxForm ~ updateMode:", updateMode)
    const {editing} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resetData = () => {
        setFormData({
            name: "",
            email: "",
            state: ""
        })
    }
    useEffect(() => {
        const {id} = editing || {}
        if(id) {
            setUpdateMode(true);
            setFormData(editing)
        }else{
           setUpdateMode(false);
           resetData()
        }
    },[editing])
    const handleChange = (e) => {
       const {name,value} = e.target;
       setFormData({
        ...formData,
        [name]:value
       });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(createAsync(formData))
        navigate("/redux");
    }
     const handleUpdate = (e) => {
        const {id} = editing || {}
        e.preventDefault();
        dispatch(updateAsync({
            id: id,
            data:{
                name:formData.name,
                email:formData.email,
                state:formData.state,
            }
        }));
        navigate("/redux");
     }
    const handleBack = () => {
         navigate(-1);
    }
    return (
        <div>
            {/* <h2> {updateMode ? "Update User" : "Add New User"} </h2> */}
            <Form onSubmit={ updateMode ? handleUpdate : handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group   className="mb-3">
                <Form.Label>State</Form.Label>
                    <Form.Select 
                    defaultValue="Choose..."
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    >
                        <option>Choose...</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="barisal">Barisal</option>
                        <option value="mymensingh">Mymensingh</option>
                    </Form.Select>
                </Form.Group>
 

                <Button variant="light" type="submit"> {updateMode ? "Update" : "Submit"}    </Button> { "  " }
                <Button  variant="warning" onClick={handleBack}> {updateMode ? "Cancel" : "Back"}   </Button>
            </Form>
        </div>
    );
};

export default ReduxForm;