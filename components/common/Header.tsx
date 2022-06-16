import React from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/common/Header.module.css";
import logo from "../../public/images/hermes_logo.png";

const Header: React.FC = ()=> {
    return (
        <Grid container>
            <Grid item xs={12} id={styles.logoRow}>
                <Box>
                    <Image src={logo} alt="logo" objectFit="contain"></Image>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Header;