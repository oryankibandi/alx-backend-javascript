const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  const results = Promise.all(promises);
  const resArr = [];

  results
    .then((result) => result.forEach((res) => {
      if (res.body) resArr.push(res.body);
      if (res.firstName) resArr.push(res.firstName);
      if (res.lastName) resArr.push(res.lastName);
    })).then(() => console.log(resArr.join(' ')));
}
