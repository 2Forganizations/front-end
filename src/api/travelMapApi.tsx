import axios from "axios";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cmF2ZWwtbWF0ZSIsImlkIjoiMDVjMTlmMmEtN2ZiYi00NjJkLWIxYWYtMGMyMjc1N2UzZTU1IiwiZXhwIjoxNjg2ODIxNDE3fQ.zV_5IglIXSP8acJMlAos8srRXhHeNw0jaTJzauRJOJgWftbgizEvT1rbSqhGm6A_9M28fixYfN21mPPMGBQ1Sg";

const TravelMapApi = {
  getPlanIdDetail: async function getPlanIdDetail(planId: number) {
    console.log("planId", planId);
    try {
      const response = await axios.get(`http://3.36.128.53:8080/api/plan/${planId}/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("planiddata", response);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default TravelMapApi;
