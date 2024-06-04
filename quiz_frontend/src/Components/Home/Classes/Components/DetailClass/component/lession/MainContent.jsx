import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar } from '@mui/material';

const createData = (name, views, unseen, date, description, attachment) => {
  return { name, views, unseen, date, description, attachment };
};

const rows = [
  createData('aaaaa', '0 đã xem', '0 chưa xem', '22 tháng 5 lúc 04:53', 'Xem', 'Không có'),
];

const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'white', p: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên bài giảng</TableCell>
              <TableCell align="center">Mô tả</TableCell>
              <TableCell align="center">Đính kèm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar variant="square" src="https://via.placeholder.com/150" sx={{ marginRight: 2 }} />
                    <Box>
                      <Typography variant="body1">{row.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {row.views} • {row.unseen} • {row.date}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography color="primary" component="a" href="#">
                    {row.description}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.attachment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainContent;
