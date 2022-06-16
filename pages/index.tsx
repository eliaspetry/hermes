import React from "react";
import Header from "../components/common/Header";
import Banner from "../components/home/Banner";
import MiddleSection from "../components/home/MiddleSection";
import Footer from "../components/common/Footer";
import Head from 'next/head'

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>OSF Digital - Developer Application Test (Hermes)</title>
            </Head>
            <Header />
            <Banner />
            <MiddleSection />
            <Footer />
        </>
    );
}

export default Index;