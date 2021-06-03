import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getUsers() {
  try {
    const response = await axios({
      url: `${baseUrl}/users`,
      method: 'GET'
    });
    return response
  } catch(e) {
    console.log(e)
  }
}

export async function saveUser(UserData) {
  try {
    const formData = new FormData();
    formData.append('name', UserData.name);
    formData.append('commune', UserData.commune);
    formData.append('wish', UserData.wish);
    formData.append('imgUrl', UserData.imgUrl);

    const response = await axios({
      url: `${baseUrl}/users`,
      method: 'POST',
      data: formData,
    });
    return response
  } catch(e) {
    console.log(e)
  }
}


