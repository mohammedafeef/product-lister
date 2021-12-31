import styled from "styled-components";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 0.5rem;
`;
const ListTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  background: rgba(203, 203, 203, 0.5);
  border-radius: 5px;
  margin: 0.8rem 0;
  border: none;
`;
const List = styled.div`
  display: -webkit-box;
  overflow-x: auto;
  padding: 21px 0 19px 20px;
  border-radius: 15px;
  background: rgba(19, 19, 19);
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RightArrow = styled(ArrowForwardIosIcon)`
  color: #fff;
  font-size: 2.3rem;
  margin-left: 0.8rem;
  cursor: pointer;
`;
export default function ProductList(props) {
  const { title, products } = props;
  const ref = useRef(null);
  const handleScroll = () => (ref.current.scrollLeft += 100);
  return (
    <Container>
      <ListWrapper>
        <ListTitle>{title}</ListTitle>
        <Line />
        <List ref={ref}>
          {products.map((product, index) => (
            <ProductCard key={index} details={product} />
          ))}
        </List>
      </ListWrapper>
      <RightArrow onClick={handleScroll} />
    </Container>
  );
}
