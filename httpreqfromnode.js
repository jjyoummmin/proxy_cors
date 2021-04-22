// 대표적인 node에서 http request 보내는 방법.
const axios = require('axios');
const request = require('request');
// 1.axios로 보내기
axios.get('http://localhost:8000/students')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
})


// 2.request로 보내기
request('http://localhost:8000/students', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});