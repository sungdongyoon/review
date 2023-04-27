// function whatsYourFavorite() {
//   let fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`Hello ${subject}`));
// }

// whatsYourFavorite()
//   .then(displaySubject)
//   .then(console.log);



async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello ${subject}`;
}

