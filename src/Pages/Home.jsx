import axios from "axios";
import { useState, useEffect } from "react";
import { Cards, Header } from "../Components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ total: 0, products: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("All");

  //Cart
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data);
      setFilteredProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run only once on mount

  const { products } = data;

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = () => {
    let filtered = products;

    // Apply search filter
    if (searchTerm) {
      const searchTermLowerCase = searchTerm.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTermLowerCase)
      );
    }

    // Apply price range filter
    if (priceRange && priceRange !== "All") {
      const [min, max] = priceRange.split(" - ").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setFilteredProducts(filtered);
  };

  // AddToCart
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  };

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    loadCartFromLocalStorage();
  }, []); // Run only once on mount

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        handleFilter={handleFilter}
        cart={cart}
      />

      <Cards
        loading={loading}
        data={data}
        filteredProducts={filteredProducts}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Home;
