import { useState } from 'react';
import { sculptureList } from './data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);  
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <Container maxWidth="sm" sx={{ margin: '0 auto' }}>
      <Box 
        component="section" 
        sx={{ 
          p: 2, 
          border: '1px dashed grey', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center', 
          textAlign: 'center', 
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {sculpture.artist}
        </Typography>  

        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          {sculpture.name}
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 4, 
            marginTop: 2,    
            justifyContent: 'center', 
          }}
        >
          <Button variant="contained" onClick={handleBackClick} sx={{ padding: '12px 24px' }}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNextClick} sx={{ padding: '12px 24px' }}>
            Next
          </Button>
        </Stack>

        <Box sx={{ position: 'relative' }}>
          <img
            src={sculpture.url}
            alt={sculpture.alt}
            style={{
              width: '90%',  
              maxWidth: '550px',  
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
              marginBottom: 16,  
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>

        <Typography variant="h5" component="h2" sx={{ fontStyle: 'italic', mb: 1 }}>
          {sculpture.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          ({index + 1} of {sculptureList.length})
        </Typography>

        <IconButton 
          onClick={handleMoreClick} 
          sx={{
            marginLeft: 'auto', 
            marginRight: 'auto', 
          }}
        >
          {showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>

        {showMore && (
          <Typography variant="body1" sx={{ mt: 1 }}>
            {sculpture.description}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
