import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
//custom components
import ProductList from "./components/ProductList";
import FilterCard from "./components/FiltersCard";

//styling
//filter section
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #292929;
  display: flex;
  padding: 2rem 1.5rem;
  padding-bottom: 0;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const FilterWrapper = styled.div`
  padding: 1.5rem 2rem;
  width: 225px;
  height: fit-content;
  border-radius: 15px;
  background: #131313;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FilterWrapperMobile = styled(FilterWrapper)`
  width: 100%;
  margin: 1rem 0;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

//content section
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
const BrandName = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const TabTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
`;

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productNames, setProductNames] = useState(["TCS Coperation", "wipro"]);
  const [states, setStates] = useState(["kerala", "delhi"]);
  const [cities, setCities] = useState(["mumbai", "delhi", "kolkata"]);
  const [filter, setFilter] = useState({
    state: "all",
    city: "all",
    product: "all",
  });

  //To categories product based on product name
  const categoraizeProducts = (products) =>
    products.reduce((r, a) => {
      r[a.product_name] = [...(r[a.product_name] || []), a];
      return r;
    }, {});

  //To get the value of the corresponding key
  const getKeyValue = (ele, key) =>
    key.includes(".")
      ? key.split(".").reduce((value, ele) => value[ele], ele)
      : ele[key];

  //To filter array based on any key
  const filterArr = (arr, key) => {
    const mappedArr = arr.map((ele) => getKeyValue(ele, key));
    return mappedArr.filter((ele, index) => mappedArr.indexOf(ele) === index);
  };

  //To extract the details from products fethched from the api endpoint
  const extractDetails = (products) => {
    setProducts(products);
    setFilteredProducts(categoraizeProducts(products));
    setProductNames(filterArr(products, "product_name"));
    setCities(filterArr(products, "address.city"));
    setStates(filterArr(products, "address.state"));
  };

  //To filter by state and city
  const filterByStateCity = (state, city, obj) => {
    if (state !== "all" && city !== "all") {
      return obj.filter(
        (ele) => ele.address.state === state && ele.address.city === city
      );
    } else if (state !== "all") {
      return obj.filter((ele) => ele.address.state === state);
    } else if (city !== "all") {
      return obj.filter((ele) => ele.address.city === city);
    }
  };

  //handle filtering by state,city and product name
  const handleFilter = (condition) => {
    setFilter(condition);
    const { state, city, product } = condition;

    //check all filters are none
    if (product === "all" && state === "all" && city === "all")
      return setFilteredProducts(categoraizeProducts(products));

    let updatedProducts = {};
    if (product !== "all") {
      updatedProducts = filterByStateCity(
        state,
        city,
        products.filter((ele) => ele.product_name === product)
      );
    } else {
      updatedProducts = filterByStateCity(state, city, products);
    }
    setFilteredProducts(categoraizeProducts(updatedProducts));
  };

  //To get the products from the api endpoint on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://assessment-edvora.herokuapp.com");
        extractDetails(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <Container>
      <FilterWrapper>
        <FilterCard
          filter={filter}
          product={productNames}
          state={states}
          city={cities}
          onChangeHandler={handleFilter}
        />
      </FilterWrapper>
      <ContentWrapper>
        <BrandName>Edvora</BrandName>
        <TabTitle>Products</TabTitle>
        <FilterWrapperMobile>
          <FilterCard
            filter={filter}
            product={productNames}
            state={states}
            city={cities}
            onChangeHandler={handleFilter}
          />
        </FilterWrapperMobile>
        {filteredProducts &&
          Object.keys(filteredProducts).map((brandName) => (
            <ProductList
              title={brandName}
              products={filteredProducts[brandName]}
            />
          ))}
      </ContentWrapper>
    </Container>
  );
}

export default App;
