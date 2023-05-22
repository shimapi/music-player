export default class Api {
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=corey%20taylor';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3bcdb659c9mshb5fe703204633aep1adfcajsna346aa62d211',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

}
/* 
	constructor() {
		this.authorization = "e693c678-e26f-42f9-a95c-4c1ab4d74246";
		this.originURL = "https://around.nomoreparties.co/v1/web_es_cohort_03";
	}

	async _useFetch(url, method, body) {
		const res = await fetch(url, {
			headers: {
				authorization: this.authorization,
				"Content-Type": "application/json",
			},
			method,
			body: JSON.stringify(body),
		});

		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Error: ${res.status}`);
	}

	async getProfileInitialInfo() {
		const profileInitialInfo = await this._useFetch(
			`${this.originURL}/users/me`,
			"GET"
		);
		return profileInitialInfo;
	} */