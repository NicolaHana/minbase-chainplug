import axios from "axios";

export const getFeatureItems = async () => {
let featuredItems: any[] =[];

  await axios
    .get(
      "https://api.mintbase.xyz/categories/Featured/listings?limit=48&offset=0",
      {
        headers: {
          "mb-api-key": "anon",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
    featuredItems = response.data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return featuredItems;
};
