import React, { useEffect, useMemo, useState, useCallback } from "react";
import styled from "@emotion/styled";
import { GoogleMap, useJsApiLoader, LoadScriptNext } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import { useLoadScript } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";

const GoogleTravelMap = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [mapLoaded, setMapLoaded] = useState(false);
  const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = [
    "places",
  ];
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(searchKeyword);
  }, [searchKeyword]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"], // 변경된 부분
  });

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // ...
      getGeocode({ address: value })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          sendAddressToServer({ lat, lng });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    [searchKeyword, setValue, value, isLoaded, status, data]
  );

  const sendAddressToServer = (address: { lat: number; lng: number }) => {
    // 서버에 주소 정보를 전송하고 응답을 처리하는 비동기 함수를 구현합니다.
    // 응답을 받은 후 지도를 해당 위도와 경도로 이동시킵니다.
    // 예시로 setTimeout 함수를 사용하여 응답 처리를 가정하겠습니다.
    setTimeout(() => {
      // 서버 응답 처리 후에 지도를 이동시키는 로직을 구현합니다.
      // 예시로 setSearchResult 함수를 사용하여 searchResult 상태를 업데이트하고,
      // 해당 위도와 경도로 지도를 이동시키는 로직을 추가합니다.
      setMapCenter(address);
    }, 10);
  };
  // useEffect(() => {
  //   if (searchKeyword.trim() === "") {
  //     clearSuggestions();
  //     return;
  //   }

  //   const fetchSuggestions = async () => {
  //     try {
  //       const results = await getAutocomplete(searchKeyword);
  //       setValue(searchKeyword);
  //     } catch (error) {
  //       console.error("Error fetching autocomplete suggestions:", error);
  //     }
  //   };

  //   fetchSuggestions();
  // }, [searchKeyword, setValue, clearSuggestions]);

  // const onCloseHandler = useCallback(() => {
  //   setSearchKeyword("");
  //   setValue("");
  // }, []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const handleMapLoad = useCallback(() => {
    // 맵이 로드되었을 때 호출되는 콜백 함수
    console.log("Map Component Loaded...");
    setMapLoaded(true); // 로딩 상태 업데이트
  }, []);

  if (!isLoaded) {
    console.log("!!!!!!!!!!!!!!!!!!");
    return <p>loading...</p>;
  }
  console.log("isload", isLoaded);

  return (
    <Container>
      <TopContainer>
        <SearchWrapper>
          <CusSearchIcon />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`}
            async
            defer
          ></script>
          <form onSubmit={handleSearch}>
            <input placeholder="검색어를 입력하세요" onChange={handleInput} />
            {status === "OK" && (
              <ul>
                {data.map((suggestion, index) => (
                  <li key={index}>{suggestion.description}</li>
                ))}
              </ul>
            )}
            {/* <button>
              <CloseIcon onClick={onCloseHandler} />
            </button> */}
          </form>
        </SearchWrapper>
      </TopContainer>
      <BottomContainer>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={() => console.log("Map Component Loaded...")}
        />
      </BottomContainer>
    </Container>
  );
};

export default GoogleTravelMap;

const Container = styled.div`
  width: 75%;
  height: 100%;
  position: relative;
`;
const TopContainer = styled.div`
  width: 50rem;
  height: 5rem;
  padding: 0.5rem;
  background-color: white;
  position: absolute;
  border-radius: 30px;
  z-index: 999;
  margin-top: 1rem;
`;
const BottomContainer = styled.div`
  height: 100%;
`;
const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid whitesmoke;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  & form {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    & ul {
      z-index: 999;
      position: absolute;
      top: 4rem;
      background-color: white;
      width: 90%;
      padding: 1rem;
      & li {
        font-size: 1.3rem;

        list-style: none;
        padding-bottom: 1rem;
        cursor: pointer;
      }
    }
    & input {
      padding: 1rem;
      width: 90%;
      border: none;
    }
    & button {
      width: 10%;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const CusSearchIcon = styled(SearchIcon)`
  width: 10%;
  height: 100%;
  padding: 0.5rem;
`;
