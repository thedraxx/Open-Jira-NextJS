import React from 'react'
import { Card, CardHeader, Grid } from '@mui/material';
import Layout from '@/components/layouts/Layout';
import EntryList from '@/components/UI/EntryList';
import NewEntry from '../components/newEntry/newEntry';



export default function Home() {

  // console.log('process.env', process.env.NEXT_PUBLIC_API_URL)



  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card sx={{
            height: 'calc(100vh - 100px)',
          }}>
            <CardHeader title="Pending" />

            {/* Agregar una nueva tarea */}
            {/* Listado de las entradas */}
            <NewEntry />
            <EntryList status="pending" />

          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{
            height: 'calc(100vh - 100px)',
          }}>
            <CardHeader title="In Progress" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{
            height: 'calc(100vh - 100px)',
          }}>
            <CardHeader title="Completed" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}
