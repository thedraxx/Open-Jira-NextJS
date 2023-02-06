import React from 'react'
import { Typography } from '@mui/material';
import Layout from '@/components/layouts/Layout';


export default function Home() {
  return (
    <Layout>
      <Typography variant="h1" component="h1" gutterBottom color='primary'>
        Hello World
      </Typography>
    </Layout>
  )
}
