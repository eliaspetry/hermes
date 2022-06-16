import React from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/home/Banner.module.css";
import paperPlane from "../../public/images/paper_plane.png";
import { useEffect, useState } from "react";

const Banner: React.FC = ()=> {
    const [planeClassName, setPlaneClassName] = useState(styles.planeSlideIn); 
    
    useEffect(()=> {
        //Swap animation class on the paper plane image (we had a 4 second duration set in our CSS, hence 4000ms for a seamless transition).
        const changePlaneAnimation = async ()=> {
            await new Promise(resolve => setTimeout(()=> setPlaneClassName(styles.planeSpin), 4000));
        };

        changePlaneAnimation();
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box id={styles.mobileBannerImage}></Box>
                <Box id={styles.banner}>
                    <Box>
                        <Box>
                            <h1>Die neusten eCommerce Insights für Sie.</h1>
                            <Box id={styles.paperPlaneIcon} className={planeClassName}>
                                <Image src={paperPlane} alt="papierflugzeug" objectFit="contain"></Image>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Banner;