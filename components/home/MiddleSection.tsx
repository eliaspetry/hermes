import React from "react";
import { Grid } from "@mui/material";
import Form from "./form/Form";
import DescriptionRight from "./DescriptionRight";

const FormSection: React.FC = ()=> {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Form></Form>
            </Grid>
            <Grid item xs={12} md={6}>
                <DescriptionRight></DescriptionRight>
            </Grid>
        </Grid>
    );
};

export default FormSection;