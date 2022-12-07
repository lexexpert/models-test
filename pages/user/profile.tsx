import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from 'components/layout';

export default function Profile() {
  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">User profile</Typography>
      </Box>
    </Layout>
  );
}
