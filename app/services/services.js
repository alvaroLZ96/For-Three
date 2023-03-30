export const getData = async (param) => {
  try {
    const data = await fetch(
      `https://for-three-production.up.railway.app/${param}`
    );
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log("Error:", error);
  }
};
