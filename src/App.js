import "./App.css";
import styled from "styled-components";
import { useState } from "react";
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
    padding:1rem;
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
    margin:0;
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
  const [product, setProduct] = useState(["TCS Coperation", "wipro"]);
  const [state, setState] = useState(["kerala", "delhi"]);
  const [city, setCity] = useState(["mumbai", "delhi", "kolkata"]);
  const products = [
    {
      product_name: "Rebook shoes inc",
      brand_name: "Rebook",
      price: 1100,
      address: {
        state: "Puducherry",
        city: "Mahe",
      },
      discription: "Its a good product",
      date: "2020-06-28T03:07:47.491Z",
      time: "2014-06-02T13:20:30.451Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: {
        state: "Gujarat",
        city: "Nadiad",
      },
      discription: "Its a good product",
      date: "2020-03-17T15:27:25.112Z",
      time: "2017-01-21T01:13:39.277Z",
      image:
        "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
    },
    {
      product_name: "Rebook shoes inc",
      brand_name: "Rebook",
      price: 1100,
      address: {
        state: "Puducherry",
        city: "Pondicherry",
      },
      discription: "Its a good product",
      date: "2012-04-20T07:24:56.211Z",
      time: "2021-02-18T10:03:40.612Z",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: {
        state: "Himachal Pradesh",
        city: "Solan",
      },
      discription: "Its a good product",
      date: "2014-09-06T17:31:42.059Z",
      time: "2015-05-06T08:07:38.761Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: {
        state: "Himachal Pradesh",
        city: "Nahan",
      },
      discription: "Its a good product",
      date: "2012-07-25T11:14:59.209Z",
      time: "2018-10-21T12:29:09.736Z",
      image:
        "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
    },
  ];
  return (
    <Container>
      <FilterWrapper>
        <FilterCard product={product} state={state} city={city} />
      </FilterWrapper>
      <ContentWrapper>
        <BrandName>Edvora</BrandName>
        <TabTitle>Products</TabTitle>
        <FilterWrapperMobile>
          <FilterCard product={product} state={state} city={city} />
        </FilterWrapperMobile>
        <ProductList title={"Product name"} products={products} />
        <ProductList title={"Product name"} products={products} />
        <ProductList title={"Product name"} products={products} />
      </ContentWrapper>
    </Container>
  );
}

export default App;
