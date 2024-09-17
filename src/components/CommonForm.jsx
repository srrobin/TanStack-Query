import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CommonForm = ({title,handleSubmit,initialValue}) => {
    const [formData, setFormData] = useState({
        title: initialValue.title || "",
        desc: initialValue.desc || "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
       const {name,value} = e.target;
       setFormData({
        ...formData,
        [name]:value
       });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(formData)
    }
    const handleBack = () => {
         navigate(-1);
    }
    return (
        <div>
            <h2> {title} </h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Post Description</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="light" type="submit">  Submit  </Button> { "  " }
                <Button variant="warning" onClick={handleBack}>  Back  </Button>
            </Form>
        </div>
    );
};

export default CommonForm;