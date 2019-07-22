var upload = data => {
  debugger;
  console.log(data);
  return fetch(
    "http://node-express-env.ir8hkvdpni.us-east-2.elasticbeanstalk.com/flu/upload",
    {
      method: "POST",
      data: data
    }
  )
    .then(function(response) {
      return response;
    })
    .then(function(body) {
      return body;
    });
};
export default upload;
