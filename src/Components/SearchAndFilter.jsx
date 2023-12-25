import {
  Button,
  MenuItem,
  Select,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
  priceRange,
  setPriceRange,
  handleFilter,
}) => {
  const isSmallScreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const priceRanges = [
    "All",
    "0 - 100",
    "100 - 200",
    "200 - 300",
    "300 - 400",
    "400 - 500",
    "500 - 600",
    "600 - 700",
    "700 - 800",
    "800 - 900",
    "900 - 1000",
    "1000 - 1100",
    "1100 - 1200",
    // Add more price ranges as needed
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          marginTop: "10px",
        }}
      >
        <TextField
          type="text"
          label={isSmallScreen ? "Search by name ..." : "S..."}
          value={searchTerm}
          color="secondary"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: isSmallScreen ? "300px" : "100px",
            marginRight: "10px",
            fontFamily: "Poppins",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlinedIcon
                  onClick={handleSearch}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </InputAdornment>
            ),
          }}
        />

        <div style={{ display: "flex", alignContent: "center" }}>
          <FormControl variant="outlined" size="small" color="secondary">
            <Select
              InputProps={{
                sx: { borderRadius: 2 },
              }}
              id="price-range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{
                fontSize: "14px",
                width: isSmallScreen ? "80px" : "60px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              {priceRanges.map((range) => (
                <MenuItem
                  key={range}
                  value={range}
                  style={{ fontFamily: "Poppins" }}
                >
                  {range}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            size="small"
            variant="contained"
            color="secondary"
            style={{
              width: isSmallScreen ? "20px" : "10px",
              padding: "0px",
              height: "37px",
              textTransform: "none",
              marginLeft: "10px",
              fontFamily: "Poppins",
            }}
            onClick={handleFilter}
          >
            Filter
          </Button>
        </div>
        <Button
          size="small"
          variant="contained"
          color="error"
          style={{
            width: isSmallScreen ? "20px" : "10px",
            padding: "0px",
            height: "37px",
            textTransform: "none",
            marginLeft: "10px",
            fontFamily: "Poppins",
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default SearchAndFilter;
