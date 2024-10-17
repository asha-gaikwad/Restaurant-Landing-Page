import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, id: "home" },
    { text: "About", icon: <InfoIcon />, id: "about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, id: "testimonials" },
    { text: "Contact", icon: <PhoneRoundedIcon />, id: "contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, id: "cart" },
  ];

  // Function to handle scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle modal toggle
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to a server)
    alert("Booking submitted!");
    setOpenModal(false); // Close the modal after submission
  };

  return (
    <>
      <nav>
        <div id="home" className="nav-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-links-container">
          {menuOptions.map((item) => (
            <a
              key={item.text}
              href={`${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.id);
              }}
            >
              {item.text}
            </a>
          ))}
          <a href="">
            <BsCart2 className="navbar-cart-icon" />
          </a>
          <button className="primary-button" onClick={handleOpenModal}>
            Bookings Now
          </button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => handleScroll(item.id)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Booking Form Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="booking-form-title"
          aria-describedby="booking-form-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 id="booking-form-title">Booking Form</h2>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseModal}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Date"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                
                sx={{
                  mt: 2,
                  bgcolor: '#fe9e0d',
                  '&:hover': {
                    bgcolor: '#e88b00', 
                  },
                  borderRadius: 10,
                }}
                
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;
