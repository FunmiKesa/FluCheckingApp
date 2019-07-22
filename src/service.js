export class FluService {
  upload(data) {
    debugger;
    console.log(data);
    return fetch(
      "http://node-express-env.ir8hkvdpni.us-east-2.elasticbeanstalk.com/flu/upload",
      // "http://localhost:3000/flu/upload",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
      }
    )
      .then(function(response) {
        return response;
      })
      .then(function(body) {
        return body;
      })
      .catch(error => {
        console.log(error);
        return response;
      });
  }

  hasFlu({ hadCough, hadFever, temperature }) {
    if (hadFever == "yes" && parseInt(temperature) > 38 && hadCough == "yes") {
      return true;
    }
    return false;
  }
}
