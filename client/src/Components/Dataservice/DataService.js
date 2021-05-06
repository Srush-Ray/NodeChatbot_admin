import axios from "axios";

export const getAllQuestions = async () => {
  return await axios
    .get("/api/all")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return { message: "Error. Please try again later." };
    });
};

export const deleteQuestion = async (data) => {
  console.log(data);
  return await axios
    .post("/api/all/delete", data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return { message: "Error. Please try again later." };
    });
};
