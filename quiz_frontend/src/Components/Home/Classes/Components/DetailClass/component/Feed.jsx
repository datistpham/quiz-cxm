import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import IconFeed from "../../../../../Icon/IconFeed";

const Feed = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Avatar />
        <TextField
          placeholder="Nhập nội dung thảo luận với lớp học..."
          variant="outlined"
          fullWidth
          sx={{ marginLeft: 2 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="icon-button-file"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ImageOutlinedIcon />
          </IconButton>
        </label>
        <Button variant="contained" disabled>
          Đăng tin
        </Button>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 2,
          border: "1px solid #ddd",
          borderRadius: 1,
        }}
      >
        <div style={{width: "100%"}} className="c-flex-center">
            <div style={{width: "50%"}}>
                <IconFeed />
            </div>
        </div>

        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Bảng tin
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Nơi trao đổi các vấn đề trong lớp học dành cho giáo viên học sinh
        </Typography>
      </Box>
    </Box>
  );
};

export default Feed;
