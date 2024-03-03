// In /components/Posts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardMedia, CardContent, Typography, Grid } from '@mui/material';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost/thedev8/wp-json/wp/v2/posts?_embed')
      .then(response => setPosts(response.data))
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
      });
  }, []);

  console.log("POSTS DATA: ", posts)

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={3}>
      {posts.map(post => (
        <Grid item xs={12} sm={12} md={6} lg={6} key={post.id}>
          <Card>
            {post._embedded['wp:featuredmedia']?.[0]?.source_url && (
              <CardMedia
                component="img"
                height="140"
                image={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
              />
            )}
            <CardHeader
              title={post.title.rendered}
              subheader={new Date(post.date).toDateString()}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.excerpt.rendered.replace(/<[^>]+>/g, '')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
