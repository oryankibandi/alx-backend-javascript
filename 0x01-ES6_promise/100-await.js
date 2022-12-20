const { uploadPhoto, createUser } = require('./utils');

export default async function asyncUploadUser() {
  const promises = [];
  const responseObj = {};
  promises.push(uploadPhoto(), createUser());

  try {
    const results = await Promise.all(promises);

    results.forEach((e) => {
      if (e.status) {
        responseObj.photo = e;
      } else {
        responseObj.user = e;
      }
    });
  } catch (err) {
    responseObj.photo = null;
    responseObj.user = null;
  }

  return responseObj;
}
