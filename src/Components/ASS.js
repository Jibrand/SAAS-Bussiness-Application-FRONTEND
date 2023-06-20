import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import FileBase from "react-file-base64";
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

function App() {
    const classes = useStyles()
    const [title, setTitle] = useState('')

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);





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
        setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <Container>
            <h1>Add New Member</h1>
            <form className={classes.root} >
                {inputFields.map(inputField => (
                    <div key={inputField.id}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            value={inputField.firstName}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <FileBase
                            type="file"
                            multiple={""}
                            onDone={({ base64 }) =>
                                handleChangeInput(inputField.id, { target: { name: "lastName", value: base64 } })
                            }
                        />

                        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleAddFields}
                        >
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
                >Send</Button>
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
}

export default App;