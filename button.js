import { Button, TextField, Box, Typography } from "@mui/material";

return (
    <Box sx={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
        <Typography variant="h4" mb={3}>Healthcare Dashboard</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
            />
            <TextField
                label="Age"
                variant="outlined"
                fullWidth
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                margin="normal"
            />
            <Button
                variant="contained"
                component="label"
                sx={{ marginBottom: 2 }}
            >
                Upload File
                <input type="file" hidden name="file" onChange={handleChange} />
            </Button>
            <Button variant="contained" type="submit" fullWidth>
                Submit
            </Button>
        </form>
    </Box>
);
