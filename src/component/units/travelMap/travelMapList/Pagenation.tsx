import React, { Dispatch, useState, useCallback } from "react";
import { Pagination, Stack, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import styled from "@emotion/styled";

interface CustomPaginationProps {
  pagination: {
    totalPage?: number;
    currentPage?: number;
  };
  currentPageSize: number;
  onPageChange: (page: number) => void;

  //   setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

const CustomPagination: React.FC<CustomPaginationProps> = (props) => {
  const { pagination, onPageChange, currentPageSize } = props;
  const { totalPage, currentPage } = pagination || {};
  const [isMenuOpen, setMenuOpen] = useState(false);

  console.log();

  const handlePreviousPage = () => {
    if (currentPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = useCallback(() => {
    if (currentPage && totalPage) {
      onPageChange(currentPage + 1);
    }
    console.log("hello");
  }, [currentPage, totalPage, currentPageSize]);

  //   console.log("토탈", totalPage, "현재페이지", currentPage);
  return (
    <Container>
      <Stack
        style={{ color: "black" }}
        direction="row"
        spacing={2}
        alignItems="center"
        marginRight={"2rem"}
      >
        {currentPage !== undefined && currentPage > 1 && (
          <button onClick={handlePreviousPage}>이전</button>
        )}
        {totalPage && currentPage !== undefined && (
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
          />
        )}
        {currentPage !== undefined && totalPage && currentPage < totalPage && (
          <button onClick={handleNextPage}>다음</button>
        )}
      </Stack>
    </Container>
  );
};

export default CustomPagination;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  padding-top: 1rem;
  color: black;
`;
