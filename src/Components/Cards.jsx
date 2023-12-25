import { useState } from "react";

import Button from "@mui/material/Button";

import {
  CardContent,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";

const Cards = ({ loading, data, filteredProducts, addToCart }) => {
  const [expandedDescription, setExpandedDescription] = useState({});

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          alignItems: "center",
        }}
      >
        <CircularProgress color="success" />
      </div>
    );
  }

  return (
    <>
      {/*  */}

      {/* Product list */}
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              style={{
                minHeight: "440px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.images[0]}
                alt="green iguana"
                style={{ objectFit: "contain" }}
              />

              <CardContent style={{ flex: 1 }}>
                <div>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    ${product.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    {expandedDescription[product.id]
                      ? product.description
                      : product.description.slice(0, 50)}
                  </Typography>
                  {product.description.length > 50 && (
                    <Button
                      variant="text"
                      style={{
                        fontFamily: "Poppins",
                        textTransform: "none",
                        color: "#00782d",
                      }}
                      onClick={() =>
                        setExpandedDescription((prev) => ({
                          ...prev,
                          [product.id]: !prev[product.id],
                        }))
                      }
                    >
                      {expandedDescription[product.id]
                        ? "Read Less"
                        : "Read More"}
                    </Button>
                  )}
                </div>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  style={{
                    fontFamily: "Poppins",
                    textTransform: "none",
                    backgroundColor: "#00782d",
                    marginTop: "auto",
                    marginBottom: "10px",
                  }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
