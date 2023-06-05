import React, { FC, Dispatch, SetStateAction, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
//components
import TravelMapListItem from "./travelMapListCard";
import { dummyData } from "@/dummyData/travelMap";
import { useQuery } from "react-query";

interface Props {
  setTravelDetailModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setSelectTravelMapId: Dispatch<SetStateAction<string>>;
}

const TravelMapList: FC<Props> = ({ setTravelDetailModalIsOpen, setSelectTravelMapId }) => {
  const onClickHandler = useCallback((id: string) => {
    setSelectTravelMapId(id);
    setTravelDetailModalIsOpen((pre) => !pre);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cmF2ZWwtbWF0ZSIsImlkIjoiMDEwNzQ5NWYtZWIwMC00MDNkLWFhYmUtZDI4YTI4MjRmMDEyIiwiZXhwIjoxNjg1OTU0MDEzfQ.FCxN28JGbRPIrO6WBkdkEP7GqUotMVEtYeFmuy-WCcYNKBOVknSkkg-Pgb3OVbJT-c1ZTYj-mNAfHDZiKIfGqw"; // 토큰 값을 변수에 저장하거나 상수로 설정합니다.
      try {
        const response = await axios.get("http://3.36.128.53:8080/api/plans/get?page=0&size=5", {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 추가합니다.
          },
        });
        console.log(response.data);
        return response;
      } catch {
        console.error("에러");
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

  return (
    <Container>
      <FilterContainer>
        <CartItemWrapper>
          <CatItem>
            <img src="/assets/travelMap/new.png" alt="new" />
            <div>새로운 만남</div>
          </CatItem>
          <CatItem>
            <img src="/assets/travelMap/active.png" alt="active" />
            <div>액티비티</div>
          </CatItem>
          <CatItem>
            <img src="/assets/travelMap/eat.png" alt="eat" />
            <div>식사</div>
          </CatItem>
        </CartItemWrapper>

        <div>
          <select id="largeGroup" required>
            <option value="">필터</option>
          </select>
        </div>
      </FilterContainer>
      <TravelMapListsContainer>
        {dummyData.content.map((item) => {
          return (
            <TravelMapListItem key={item.id} item={item} onClick={() => onClickHandler(item.id)} />
          );
        })}
      </TravelMapListsContainer>
      <BottomContainer>글 작성하기</BottomContainer>
    </Container>
  );
};

export default TravelMapList;

const Container = styled.div`
  width: 25%;
  height: 100%;
  background-color: #a9a4a4;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const FilterContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  & select {
    width: 8rem;
    display: flex;
  }
`;
const TravelMapListsContainer = styled.div`
  flex: 1;
  height: 80%;
`;
const BottomContainer = styled.div`
  height: 10%;
  background-color: gray;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
`;
const CartItemWrapper = styled.div`
  width: 60%;
  display: flex;
`;
const CatItem = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
  align-items: center;
  & img {
    height: 50%;
  }
  & > div {
    height: 40%;
  }
`;
