import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/home/DescriptionRight.module.css";
import eccDocument from "../../public/images/ecc_document.png";
import checkmark from "../../public/images/checkmark.png";
import questionmark from "../../public/images/question_mark.png";

const DescriptionRight: React.FC = ()=> {
    return (
        <Box id={styles.descriptionRight}>
            <h2>Stadt, Land, Los!</h2>
            <h3>Der Weg zu kundenorientierten Zustellungs- und Retourenlösungen in der Stadt und auf dem Land.</h3>
            <Box>
                <Box id={styles.eccDocument}>
                    <Image src={eccDocument} alt="ecc" objectFit="contain"></Image>
                </Box>
                <Box id={styles.eccDocumentMobile}>
                    <Image src={eccDocument} alt="ecc" objectFit="contain"></Image>
                </Box>
                <p>Insights der Studie:</p>
                <p>Stadt vs. Land</p>
                <ul>
                {
                    ["Online-Shoppingverhalten", "Top-Zustellkriterien", "Retourenablauf"].map((ele, key) =>
                        <li key={key}><Image src={checkmark} alt="checkmark" height="15" width="15"></Image>&emsp;{ele}</li>
                    )
                }
                </ul>
            </Box>
            <a href="mailto:marketing@hermesworld.com">
                <Box>
                    <Box id={styles.promptBackground}>
                        <Box id={styles.promptForeground}>
                            <Box id={styles.questionPrompt}>
                                <Box id={styles.questionmark}>
                                    <Image src={questionmark} alt="questions" objectFit="contain" height="40" width="40"></Image>
                                </Box>
                                <h2>Noch Fragen?</h2>
                            </Box>
                            
                            <p>
                                Erreichen Sie uns per E-Mail unter:
                                <br/>
                                <span className={styles.mail}>marketing@hermesworld.com</span>
                            </p>
                        </Box>
                    </Box>
                </Box>
            </a>
        </Box>
    );
};

export default DescriptionRight;