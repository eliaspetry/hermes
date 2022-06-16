import React from "react";
import { Grid, Box } from "@mui/material";
import styles from "../../styles/common/Footer.module.css";

const Footer: React.FC = ()=> {
    return (
        <Grid container id={styles.footer}>
            <Grid item xs={12} md={4}>
                <a href="https://www.hermesworld.com/de/impressum/">Impressum</a>
                <a href="https://www.hermesworld.com/de/content/gesellschaften/hlgd/einkauf/agb-hermes-hlg.pdf">AGB</a>
                <a href="https://www.hermesworld.com/de/datenschutz/">Datenschutz</a>
                <a href="https://www.hermesworld.com/de/sicherheitshinweise/">Sicherheitshinweise</a>
            </Grid>
            <Grid item xs={12} md={4}>
                © {new Date().getFullYear()} - Hermes Germany GmbH
                <p>
                    <strong>Developer Application Test for OSF Digital</strong>
                    <br/>
                    Author: Elias Petry
                </p>
            </Grid>
            <Grid item xs={12} md={4}>
                <a href="https://www.hermesworld.com/de/ueber-uns/hermes-gruppe/">Über uns</a>
                <a href="https://newsroom.hermesworld.com/presse/">Presse</a>
                <a href="https://www.hermesworld.com/de/karriere/karriere-uebersicht/">Karriere</a>
                <a href="https://blog.myhermes.de/">Blog</a>
            </Grid>
        </Grid>
    );
};

export default Footer;