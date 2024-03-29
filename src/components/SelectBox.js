import styled from "styled-components";

const SelectWrapper = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0.5rem 0;
  &:after {
    content: "";
    position: absolute;
    pointer-events: none;
    right: 0.8em;
    top: 65%;
    margin-top: -0.5em;
    width: 0;
    height: 0;
    border-left: 5.5px solid transparent;
    border-right: 5.5px solid transparent;
    border-top: 5.5px solid #a5a5a5;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Select = styled.select`
  background: #232323;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  text-transform:capitalize;
  padding: 0.5rem 0.8rem;
  padding-right: 2rem;
  border: 0;
  margin: 0;
  border-radius: 4.8px;
  text-indent: 0.01px;
  text-overflow: "";
  appearance: none;
  :focus-visible {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    padding: 0.8rem 2rem 0.8rem 1rem;
  }
`;
const Option = styled.option``;

export default function SelectBox(props) {
  const { title, options, onChangeHandler, values } = props;
  return (
    <SelectWrapper>
      <Select
        onChange={(e) =>
          onChangeHandler({ ...values, [title]: e.target.value },title)
        }
        value={values[title] || "all"}
      >
        <Option value="all">{title}</Option>
        {options.map((option) => (
          <Option value={option}>{option}</Option>
        ))}
      </Select>
    </SelectWrapper>
  );
}
