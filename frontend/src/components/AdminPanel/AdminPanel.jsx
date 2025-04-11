import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const AdminPanel = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard");
  const [applications, setApplications] = useState([]);

  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    startDate: "",
    description: "",
    openings: 0,
  });

  const handleInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    axios
      .post("http://localhost:5000/api/jobopenings/create", newJob)
      .then(() => {
        alert("Job created successfully");
        setNewJob({
          title: "",
          location: "",
          startDate: "",
          description: "",
          openings: 0,
        });
      })
      .catch((error) => console.log("Error creating job:", error));
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log("Error fetching applications:", err));
  }, [currentView]);

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Admin Panel
      </Typography>
      <List>
        {["Dashboard", "Jobs", "Applications"].map((text) => (
          <ListItem button key={text} onClick={() => setCurrentView(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <Toolbar />

        {/* Dashboard View */}
        {currentView === "Dashboard" && (
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Welcome to the Admin Dashboard
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                gap: 3,
                my: 3,
              }}
            >
              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Total Job Openings
                </Typography>
                <Typography variant="h4" color="primary">
                  10
                </Typography>
              </Card>

              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Applications Received
                </Typography>
                <Typography variant="h4" color="secondary">
                  {applications.length}
                </Typography>
              </Card>

              <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <Typography variant="h6" color="text.secondary">
                  Interviews Scheduled
                </Typography>
                <Typography variant="h4" color="success.main">
                  3
                </Typography>
              </Card>
            </Box>

            <Card sx={{ p: 3, boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recent Applications
              </Typography>
              {applications.slice(0, 5).map((app, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom: "1px solid #eee",
                    py: 1,
                  }}
                >
                  <Typography variant="subtitle1">{app.fullName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Applied for {app.position} on{" "}
                    {new Date(app.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              ))}
            </Card>
          </Container>
        )}

        {/* Job Creation View */}
        {currentView === "Jobs" && (
          <Container maxWidth="md">
            <Card sx={{ boxShadow: 3, padding: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Create Job Opening
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    label="Title"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Start Date"
                    name="startDate"
                    value={newJob.startDate}
                    onChange={handleInputChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                  <TextField
                    label="Description"
                    name="description"
                    value={newJob.description}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <TextField
                    label="Openings"
                    name="openings"
                    value={newJob.openings}
                    onChange={handleInputChange}
                    type="number"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreate}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Create Job
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Container>
        )}

        {/* Applications View */}
        {currentView === "Applications" && (
          <Container maxWidth="md">
            <Card sx={{ boxShadow: 3, padding: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Submitted Applications
                </Typography>
                {applications.map((app, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 3,
                      p: 2,
                      border: "1px solid #ccc",
                      borderRadius: 2,
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <Typography variant="h6">{app.fullName}</Typography>
                    <Typography variant="body2">
                      Position: {app.position}
                    </Typography>
                    <Typography variant="body2">
                      Submitted on: {new Date(app.createdAt).toLocaleString()}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        href={`http://localhost:5000/${app.resumePath}`}
                        target="_blank"
                      >
                        Download Resume
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        href={`http://localhost:5000/${app.photoPath}`}
                        target="_blank"
                      >
                        Download Photo
                      </Button>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default AdminPanel;
