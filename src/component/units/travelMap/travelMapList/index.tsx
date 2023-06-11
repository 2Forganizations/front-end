import React, { useState, FC, Dispatch, SetStateAction, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useQuery } from "react-query";

//components
import TravelMapListItem from "./travelMapListCard";
import CustomPagenation from "./Pagenation";

interface Props {
  setTravelDetailModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setSelectTravelMapId: Dispatch<SetStateAction<number>>;
}

export interface TravelMapList {
  planId: number;
  address: { city: string; detail: string; latitude: string; longitude: string; nation: string };
  category: string;
  content: string;
  startDate: string;
  endDate: string;
  maxAge: number;
  minAge: number;
  owner: { memberId: string; profileImage: string; role: string; uername: string };
  recruitNumber: {
    recruitEtcNumber: string | null;
    recruitManNumber: string | null;
    recruitWomanNumber: string | null;
  };
  title: string;
}
export interface PageInfo {
  totalPages: number;
  last: boolean;
  size: number;
  empty: boolean;
  number: number;
}

const TravelMapList: FC<Props> = ({ setTravelDetailModalIsOpen, setSelectTravelMapId }) => {
  const [catNew, setCatNew] = useState(true);
  const [catActivity, setCatActivity] = useState(false);
  const [catEat, setCatEat] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [data, setData] = useState<TravelMapList[]>([]);

  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const onClickHandler = useCallback((id: number) => {
    setSelectTravelMapId(id);
    setTravelDetailModalIsOpen((pre) => !pre);
  }, []);

  useEffect(() => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cmF2ZWwtbWF0ZSIsImlkIjoiMDVjMTlmMmEtN2ZiYi00NjJkLWIxYWYtMGMyMjc1N2UzZTU1IiwiZXhwIjoxNjg2ODIxNDE3fQ.zV_5IglIXSP8acJMlAos8srRXhHeNw0jaTJzauRJOJgWftbgizEvT1rbSqhGm6A_9M28fixYfN21mPPMGBQ1Sg"; // 토큰 값을 변수에 저장하거나 상수로 설정합니다.
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://3.36.128.53:8080/api/plans/get?page=0&size=5", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("data!!!!", response.data);
        setData(response.data.content);
        setTotalPages(response.data.totalPages);

        setCurrentPage(response.data.number + 1);
      } catch (error) {
        console.log("에러", error);
      }
    };

    fetchUserData();
  }, []);

  // const fetchUserData = async () => {
  //   const token =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cmF2ZWwtbWF0ZSIsImlkIjoiMDEwNzQ5NWYtZWIwMC00MDNkLWFhYmUtZDI4YTI4MjRmMDEyIiwiZXhwIjoxNjg1OTU0MDEzfQ.FCxN28JGbRPIrO6WBkdkEP7GqUotMVEtYeFmuy-WCcYNKBOVknSkkg-Pgb3OVbJT-c1ZTYj-mNAfHDZiKIfGqw"; // 토큰 값을 변수에 저장하거나 상수로 설정합니다.
  //   try {
  //     const response = await axios.get("http://3.36.128.53:8080/api/plans/get?page=0&size=5", {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 추가합니다.
  //       },
  //     });
  //     // console.log(response);
  //     return response;
  //   } catch {
  //     console.log("에러");
  //   }
  // };

  // const { data, isLoading, error } = useQuery("getmapList", fetchUserData);
  // console.log("데이타", data);
  const onClickCatChange = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.getAttribute("name");
    if (name === "new") {
      setCatNew(true);
      setCatActivity(false);
      setCatEat(false);
    } else if (name === "activity") {
      setCatNew(false);
      setCatActivity(true);
      setCatEat(false);
    } else if (name === "eat") {
      setCatNew(false);
      setCatActivity(false);
      setCatEat(true);
    }
  }, []);
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },

    [currentPage, currentPageSize]
  );

  return (
    <Container>
      <FilterContainer>
        <CartItemWrapper>
          <CatItem name="new" onClick={onClickCatChange}>
            {catNew ? (
              <img src="/assets/travelMap/category/new/select_new.png" alt="new" />
            ) : (
              <img src="/assets/travelMap/category/new/new.png" alt="new" />
            )}
          </CatItem>
          <CatItem name="activity" onClick={onClickCatChange}>
            {catActivity ? (
              <img src="/assets/travelMap/category/activity/select_activity.png" alt="active" />
            ) : (
              <img src="/assets/travelMap/category/activity/activity.png" alt="active" />
            )}
          </CatItem>
          <CatItem name="eat" onClick={onClickCatChange}>
            {catEat ? (
              <img src="/assets/travelMap/category/eat/select_eat.png" alt="eat" />
            ) : (
              <img src="/assets/travelMap/category/eat/eat.png" alt="eat" />
            )}
          </CatItem>
        </CartItemWrapper>
        <CatItem>
          <img src="/assets/travelMap/filter/filter.png" alt="filter" />
        </CatItem>
      </FilterContainer>
      <TravelMapListsContainer>
        {data.map((item) => {
          return (
            <TravelMapListItem
              key={item.planId}
              item={item}
              onClick={() => onClickHandler(item.planId)}
            />
          );
        })}
      </TravelMapListsContainer>
      <BottomContainer>
        <CustomPagenation
          pagination={{
            totalPage: totalPages,
            currentPage: currentPage,
          }}
          currentPageSize={currentPageSize}
          onPageChange={handlePageChange}
        />
      </BottomContainer>
    </Container>
  );
};

export default TravelMapList;

const Container = styled.div`
  width: 27%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
const FilterContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TravelMapListsContainer = styled.div`
  flex: 1;
  height: 80%;
`;
const BottomContainer = styled.div`
  height: 5%;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
`;
const CartItemWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: start;
`;
const CatItem = styled.button`
  width: 8rem;
  height: 2.8rem;
  display: flex;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;

  & > img {
    height: 100%;
    width: 100%;
  }
`;
