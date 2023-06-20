

import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))

const ASS = () => {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [inputFields, setInputFields] = useState([{ id: uuidv4(), firstName: '', lastName: '' }]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);

        const result = await fetch(`http://localhost:5005/attachments`, {
            method: "post",
            body: JSON.stringify({
                title,
                inputFields,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (result) {
            alert("Vendor is added Succesfully!")
        }
    };

    useEffect(() => {
        getproductdetail()
    }, [])

    const getproductdetail = async () => {
        let result = await fetch(`http://localhost:5005/attachments/63f513b8f3ea621bf3ae59af`)
        result = await result.json()
        setTitle(result[0].title);
        setInputFields(result[0].inputFields)
    }

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        const newInputFields = [...inputFields, { id: uuidv4(), firstName: '', lastName: '' }];
        setInputFields(newInputFields);
    }

    const handleRemoveFields = (id) => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <Container>
            <h1>Add New Member</h1>
            <form className={classes.root}  >
                {inputFields.map((inputField, index) => (
                    <div key={inputField.id}>
                        <TextField
                            name={`firstName[${index}]`}
                            label="First Name"
                            variant="filled"
                            value={inputField.firstName}
                            onChange={(event) => handleChangeInput(inputField.id, event)}
                        />
                        <a href={ inputField.lastName } download>   <h6 className="float-left mb-1">  download</h6></a>

                        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={handleAddFields}>
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}
                >
                    Send
                </Button>
                <TextField
                    name="lastName"
                    label="Last Name"
                    variant="filled"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </Container>
    );
};

export default ASS;
