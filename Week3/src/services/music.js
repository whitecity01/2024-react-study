import axios from "axios";
const MUSIC_IP = process.env.REACT_APP_MUSIC_API;

const musicAPI = async (url, method, data = null) => {
  try {
    const res = await axios({
      method: method,
      url: `${MUSIC_IP}${url}`,
      data: method === "get" ? {} : data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    throw new Error(e.response ? e.response.data : "API request failed");
  }
};

const getTopChart = async () => {
  const res = await musicAPI("", "get");
  console.log(res);
  return res.data;
};

export { getTopChart };
