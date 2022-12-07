// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">Home</Typography>
      </Box>
    </Layout>
  );
}
