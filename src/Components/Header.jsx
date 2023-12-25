import { AppBar, Toolbar, Container } from "@mui/material";

// Components
import SearchAndFilter from "./SearchAndFilter";
import Cart from "./Cart";

function Header({
  searchTerm,
  setSearchTerm,
  handleSearch,
  priceRange,
  setPriceRange,
  handleFilter,
  cart,
}) {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            handleFilter={handleFilter}
          />
          <Cart cart={cart} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
