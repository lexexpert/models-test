import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Layout from 'components/Layout';

export default function Settings() {
  return (
    <Layout home>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">User settings</Typography>
      </Box>
    </Layout>
  );
}
