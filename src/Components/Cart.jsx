import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Cart = ({ cart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          marginLeft: "5px",
          marginTop: "7px",
        }}
      >
        <div
          onClick={handleOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "20px",
            height: "20px",
            color: "black",
            cursor: "pointer",
            borderRadius: isHovered ? "5px" : null,
            backgroundColor: isHovered ? "#C1F2B0" : "transparent",
            padding: isHovered && "8px",
            transition: "background-color 0.3s",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "5px",
          }}
        >
          <ShoppingCartOutlinedIcon style={{ width: "30px", height: "30px" }} />
          <Typography style={{ fontFamily: "Poppins" }}>
            {cart.length === 0 ? null : cart.length}
          </Typography>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Poppins", fontWeight: "500" }}
                >
                  Shopping Cart
                </Typography>
                <Typography variant="h6" style={{ color: "gray" }}>
                  Items in Cart: {cart.length}
                </Typography>
                <>
                  {cart.map((item) => (
                    <Card key={item.id} style={{ marginBottom: "10px" }}>
                      <CardContent>
                        {item.title} - ${item.price}
                        <CardMedia
                          component="img"
                          sx={{ width: 100, height: 50, objectFit: "contain" }}
                          image={item.images[0]}
                          alt="Live from space album cover"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Cart;
