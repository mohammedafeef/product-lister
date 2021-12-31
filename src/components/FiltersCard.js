import styled from "styled-components";
import SelectBox from "./SelectBox";

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const FilterTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(165, 165, 165, 1);
`;
const Line = styled.hr`
  width: 100%;
  height: 0.8px;
  background: rgba(165, 165, 165, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export default function filterCard(props) {
  const { product, state, city, onChangeHandler, filter } = props;
  return (
    <>
      <TitleSection>
        <FilterTitle>Filter</FilterTitle>
        <Line />
      </TitleSection>
      <FilterSection>
        <SelectBox
          title={"product"}
          options={product}
          onChangeHandler={onChangeHandler}
          values={filter}
        />
        <SelectBox
          title={"state"}
          options={state}
          onChangeHandler={onChangeHandler}
          values={filter} 
        />
        <SelectBox
          title={"city"}
          options={city}
          onChangeHandler={onChangeHandler}
          values={filter}
        />
      </FilterSection>
    </>
  );
}
