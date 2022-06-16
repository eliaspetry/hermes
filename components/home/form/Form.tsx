import React from "react";
import { TextField, Button, MenuItem, FormControlLabel, Checkbox, Box } from "@mui/material";
import styles from "../../../styles/home/Form.module.css";
import { useFormik } from 'formik';
import { validationSchema } from "./formValidation";
import { textFields, selectFields } from "./formFields";

const Form: React.FC = ()=> {
    //Instantiate Formik
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            country: "",
            interest: "",
            title: "",
            name: "",
            surname: "",
            email: "",
            phone: "",
            company: "",
            position: "",
            optin: false
        },
        onSubmit: async (values) => {
            await alert(`
            You made it! These are the form values:

            ${JSON.stringify(values)}

            *In a real scenario, these values should be doublechecked server-side after being posted.
            `);
        },
    });

    //We'll be adding the "*" sign only visually in the label strings, since declaring fields with a required attribute would interfere with the formik validation tooltips.
    return (
        <form onSubmit={formik.handleSubmit} id={styles.form}>
            {
                selectFields.map(({name, label, required, options}, key) => 
                    <TextField
                    select
                    fullWidth
                    key={key}
                    id={name}
                    value={formik.values[name]}
                    label={required ? `* ${label}` : label}
                    onChange={formik.handleChange(name)}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    >
                        <MenuItem key={0} value="" disabled>{label}</MenuItem>
                        {
                            options.map((option, key) => <MenuItem key={key + 1} value={option.value}>{option.label}</MenuItem>)
                        }
                    </TextField>
                )
            }

            {   
                textFields.map(({name, label, required}, key) => 
                    <TextField
                    key={key}
                    id={name}
                    fullWidth
                    name={name}
                    label={required ? `* ${label}` : label}
                    onChange={formik.handleChange}
                    value={formik.values[name]}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    />
                )
            }

            <p className={styles.compulsoryFieldWarning}><span>*</span>&emsp;Pflichtfeld</p>

            <FormControlLabel
            control={<Checkbox checked={formik.values.optin} />}
            label="Ja, ich möchte von Hermes über Paket- und Serviceleistungen für Geschäftskunden, sowie über geschäftliche Vertragsangebote informiert werden."
            name="optin"
            onChange={formik.handleChange}
            />

            <Box id={styles.submitButtonWrapper}>
                <Button type="submit" id={styles.submitButton} fullWidth>Absenden</Button>
            </Box>
        </form>
    );
};

export default Form;