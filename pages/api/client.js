import { API_URL } from "./../../constants";
import { getCookieTokenObject } from "../../helpers/cookies.helpers";

const identityCookies = getCookieTokenObject();
const identity = identityCookies ? JSON.parse(identityCookies) : null;
const headers = identity
  ? {
      "content-type": "application/json",
      "access-token": identity["access-token"],
      client: identity.client,
      uid: identity.uid,
    }
  : {
      "content-type": "application/json",
    };

const getFetch = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: headers,
    });
    const json = await response.json();

    if (response.ok) {
      if (json.data) {
        return { data: json.data };
      } else {
        return { data: json };
      }
    } else {
      return Promise.reject(json.errors.pop());
    }
  } catch (error) {
    return Promise.reject("Network error");
  }
};

// To edit!!!
const postFetch = async (endpoint, body) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return Promise.reject(data.errors.message);
    }
  } catch (error) {
    return console.log(error);
  }
};

const postFetchWithHeaders = async (endpoint, body) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const json = await response.json();

    if (response.ok) {
      return {
        data: json.data,
        headers: {
          "access-token": response.headers.get("access-token"),
          client: response.headers.get("client"),
          uid: response.headers.get("uid"),
        },
      };
    }
    return Promise.reject(json.errors.pop());
  } catch (error) {
    return Promise.reject("Network error");
  }
};

// To edit!!!
const patchFetch = async (endpoint, body) => {
  // let headers = {
  //   "content-type": "application/json",
  //   Authorization: `Bearer ${token}`,
  // };

  try {
    const response = await fetch(`${APIURL}${endpoint}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.ok) {
      return { data };
    } else {
      return Promise.reject(data.errors.message);
    }
  } catch (error) {
    return Promise.reject({ message: "Network error" });
  }
};

export { getFetch, postFetch, postFetchWithHeaders, patchFetch };
