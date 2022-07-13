import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButtonComponent = styled(Button)`
  background: #24b434;
  color: #fff;
  &:hover {
    background: #24b434;
  }
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 15px;
  width: 100%;
  max-width: 340px;
  height: 56px;
  margin: 0 auto;
  position: relative;
`;

export const StyledButton = (props) => {
  return <StyledButtonComponent variant="outlined" {...props}></StyledButtonComponent>;
};
