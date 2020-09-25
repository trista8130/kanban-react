import axios from "axios";
import getAPIUrl from "../constants/apiUrl";

const url = getAPIUrl();

const fetchAll = () => {
  return axios.get(`${url}/forms/fetch`);
};

const createCard = ({ formId, text }) => {
  return axios.post(`${url}/forms/card/create`, { formId, text });
};

const removeCard = ({ removeFormId, cardIndex }) => {
  return axios.post(`${url}/forms/card/remove`, { removeFormId, cardIndex });
};

const FormServices = {
  fetchAll,
  createCard,
  removeCard,
};

export default FormServices;
