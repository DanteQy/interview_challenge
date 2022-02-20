const ENDPOINT = "http://localhost:3002";

async function getReviews(id) {
  try {
    const stringifiedId = id.toString();
    const response = await fetch(`${ENDPOINT}/reviews/"${id}"`);
    const body = await response.json();
    console.log(id, stringifiedId)
    return body;
  } catch (error) {
    return [
      {
        error: "Unable to retrieve reviews",
        more: JSON.stringify(error),
      },
    ];
  }
}

async function addReviews(id, payload) {
  try {
      console.log('payload',payload)
    const response = await fetch(`${ENDPOINT}/reviews/"${id}"`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload)
      });

  } catch (error) {
    return [
      {
        error: "Unable to add reviews",
        more: JSON.stringify(error),
      },
    ];
  }
}

export { getReviews, addReviews };
