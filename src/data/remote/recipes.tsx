import axios from "axios";

async function recipes() {
  const { data } = await axios.get("http://localhost:80/api/recipes");
  return data.data;
}

export default recipes;
