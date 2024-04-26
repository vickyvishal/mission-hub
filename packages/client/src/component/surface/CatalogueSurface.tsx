import React from "react";
import { Mission } from "../../types";
import styled from "styled-components";

const StyledCatlogueSurface = styled.div`
  display: flex;
  flex-direction: column;
`;
const CatalogueTable = styled.table`
  border-collapse: collapse;
  background-color: #fff;

  width: 300px;
  overflow: hidden;
  & th {
    border: 2px solid black;
  }
  & td {
    border: 2px solid black;
  }
`;

const CatalogueTableHeader = styled.thead`
  & tr {
    & th {
      padding: 1rem;
      text-align: left;
      height: 4rem;
    }
  }
`;

const CatalogueTableBody = styled.tbody`
  & tr {
    & td {
      text-align: left;
      padding: 0.2rem;
    }
  }
`;

const ValueData = styled.td`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ValueHeader = styled.th`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function CatalogueSurface({ mission }: { mission: Mission }) {
  const { image_src, ...rest } = mission;
  return (
    <StyledCatlogueSurface>
      <CatalogueTable>
        <CatalogueTableHeader>
          <tr>
            <th>Index</th>
            <th>Field</th>
            <ValueHeader>Value</ValueHeader>
          </tr>
        </CatalogueTableHeader>
        <CatalogueTableBody>
          {Object.entries(rest).map(([key, value], index) => (
            <tr key={key}>
              <td>{index + 1}</td>
              <td>
                {key
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </td>
              <ValueData>{value}</ValueData>
            </tr>
          ))}
        </CatalogueTableBody>
      </CatalogueTable>
    </StyledCatlogueSurface>
  );
}
