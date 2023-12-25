import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  TextField,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const data = response.data;

      if ("token" in data) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        console.log(data);
        navigate("/home");
      } else {
        console.error("Authentication problem:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Card>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "30px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",

              fontWeight: 500,
              fontSize: "40px",
            }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineOutlinedIcon
                style={{
                  color: "#d3d3d3",
                  marginTop: "40px",
                  marginRight: "20px",
                  width: "30px",
                  height: "30px",
                }}
              />
              <TextField
                label="Username"
                type="text"
                variant="standard"
                color="secondary"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                style={{ marginTop: "20px", width: "250px" }}
              />
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <LockOpenOutlinedIcon
                style={{
                  color: "#d3d3d3",
                  marginTop: "40px",
                  marginRight: "20px",
                  width: "30px",
                  height: "30px",
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="standard"
                color="secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginTop: "20px", width: "250px" }}
              />
            </div>
            <br />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{
                marginTop: "20px",
                textTransform: "none",
                fontFamily: "Poppins",
              }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
