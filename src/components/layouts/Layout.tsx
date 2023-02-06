import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar'
import SiderBar from '../UI/SideBar'

interface Props {
    title?: string,
    children: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
    return (
        <Box sx={{
            flexGrow: 1,
        }}>
            <Head>
                <title>{title = "OpenJira"}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />

            </Head>

            {/* navbar */}
            <Navbar />
            {/* Sidebar */}
            <SiderBar />
            {/* main content */}
            <Box sx={{ padding: "10px 20px" }}>
                {children}
            </Box>
        </Box>

    )
}

export default Layout