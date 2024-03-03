// In /pages/Blogs.jsx
import React from 'react';
import Posts from '../components/Posts'; // Adjust the path as necessary
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Blogs() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <Posts />
    </Container>
  );
}

export default Blogs;
