import {
  NextCertLabel,
  Quantity,
  QuantityLabel,
} from "./PointsContainer.styled";

const PointsContainer = () => {
  return (
    <div>
      <Quantity>239</Quantity>
      <NextCertLabel>POINT TO NEXT CERTIFICATE</NextCertLabel>
      <hr style={{ margin: 0 }} />
      <QuantityLabel>CURRENT POINTS</QuantityLabel>
      <Quantity>761</Quantity>
    </div>
  );
};

export default PointsContainer;
