import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 288px;
  margin: 0 0.8rem;
  padding: 1rem;
  border-radius: 5px;
  background: #232323;
`;
const ImageSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.6);
`;
const CoreDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.6);
`;
const MetaData = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 13px;
`;

const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
`;
const BrandName = styled.h4`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const Price = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 11px;
`;

const Location = styled.span`
  width: 50%;
  font-size: 13px;
  font-weight: 400;
`;
const ProductDate = styled.span`
  width: 50%;
  font-size: 13px;
  font-weight: 500;
`;

const Discription = styled.span`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 400;
  margin-top: 13px;
`;

export default function ProductCard(props) {
  const { details } = props;
  //To format the date obj
  const getFormatedDate = (date) =>
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return (
    <ProductWrapper>
      <ImageSection>
        <Image src={details?.image} />
      </ImageSection>
      <CoreDetails>
        <ProductName>{details?.product_name}</ProductName>
        <BrandName>{details?.brand_name}</BrandName>
        <Price>${details?.price}</Price>
      </CoreDetails>
      <MetaData>
        <Location>{details?.address?.city}</Location>

        <ProductDate>
          {details?.date && getFormatedDate(new Date(details.date))}
        </ProductDate>
      </MetaData>
      <Discription>{details?.discription}</Discription>
    </ProductWrapper>
  );
}
