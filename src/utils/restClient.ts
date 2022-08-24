import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "";

export async function get(path: string, params: any): Promise<any> {
  const response = await axios({
    method: "get",
    url: `${apiBaseUrl}${path}`,
    params,
  });

  return response.data;
}

export async function post(path: string, data: any): Promise<any> {
  const response = await axios({
    method: "post",
    url: `${apiBaseUrl}${path}`,
    data,
  });

  return response.data;
}

export async function put(path: string, data: any): Promise<any> {
  const response = await axios({
    method: "put",
    url: `${apiBaseUrl}${path}`,
    data,
  });

  return response.data;
}
