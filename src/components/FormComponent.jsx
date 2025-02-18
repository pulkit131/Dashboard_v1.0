import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    category: false,
    description: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Clear errors on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate fields
    let newErrors = {
      name: formData.name.trim() === "",
      category: formData.category.trim() === "",
      description: formData.description.trim() === "",
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({ name: "", category: "", description: "" });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
        Report an Issue
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          select
          fullWidth
          label="Select Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          error={errors.category}
          helperText={errors.category ? "Category is required" : ""}
          sx={{ mb: 2 }}
        >
          <MenuItem value="violation">Violation</MenuItem>
          <MenuItem value="criminal">Criminal</MenuItem>
          <MenuItem value="threat">Threat</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          helperText={errors.description ? "Description is required" : ""}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { backgroundColor: "#1d4ed8" },
          }}
        >
          Submit Report
        </Button>
      </form>
    </Box>
  );
};

export default FormComponent;

