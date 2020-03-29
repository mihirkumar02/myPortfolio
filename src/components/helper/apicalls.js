import { API } from '../../backend';

export const createMessage = data => {
    return fetch(`${API}/contact`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}