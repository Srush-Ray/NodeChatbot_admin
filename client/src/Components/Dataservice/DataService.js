import axios from "axios";

export const getAllQuestions = async () => {
  return await fetch("/api/all")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return { message: "Error. Please try again later." };
    });
};
