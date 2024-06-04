import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const CreateLession = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f4f4f4' }}>
      <Box sx={{ width: '60%', bgcolor: 'white', padding: 3, boxShadow: 1, borderRadius: 1 }}>
        <Typography variant="h5" gutterBottom>Tạo bài giảng từ Youtube, Facebook Video hoặc Google Drive</Typography>
        <Typography variant="body2" gutterBottom>
          Có thể tải nhiều bài giảng video bằng cách nhập link playlist từ Youtube
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="https://www.youtube.com/watch?v=i43tkaTXtwI"
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Tên bài giảng"
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Mô tả"
          multiline
          rows={4}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" component="label">
            Chọn bài tập
            <input type="file" hidden />
          </Button>
          <Button variant="outlined" component="label">
            Chọn tài liệu
            <input type="file" hidden />
          </Button>
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>Hoàn tất</Button>
      </Box>
    </Box>
  );
};

export default CreateLession;
