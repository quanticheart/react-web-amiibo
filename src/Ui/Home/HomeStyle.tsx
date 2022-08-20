import styled from 'styled-components'
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import Colors from "../../Ui/Resources/Colors";


export const Main = styled.div`
  margin-top: 180px;
`;

export const Box = styled(Main)`
  background: white;
  ${media.lessThan("medium")`
    /* screen width < 768px */
    background: red;
  `}
  
  ${media.between("medium", "large")`
    /* screen width - 768px | 1170px */
    background: green;
  `}
  ${media.greaterThan("large")`
    /* screen width - 1170px */
    background: #00000010;
  `}
`;

export const CustomLink = styled(Link)`
  && {
    text-align: center;
    font-size: 16vm;
    color: ${Colors.PrimaryMedium};
  }
`;

export const AcUnitIconCustom = styled(AcUnitIcon)`
  color: #ff0000
`;

export const Title = styled(Typography)`
&& {
  text-align: center;
  line-height: 60px
}`;

type CustomBoxType = {
    color: string;
};

const Box2 = styled(Main)`
  && {
    text-align: center;
    width: 200px;
    height: 60px;
    background-color: ${(props: CustomBoxType) =>
    props.color || "blue"};
  }
`;

export const CustomBox = ({ color }:CustomBoxType) => {
    return <Box2 color={color} />;
};