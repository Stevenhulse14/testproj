const badData = new Promise((resolve, reject) => {
  return resolve([
    "europe:germany,poland,italy,france;asia:phillipines,malaysia,china,burma",
  ]);
});
// Uncommenting the script and link file as well.

// The reason we have to use .then() is because it is a promise and we need to successfully complete the promise.
function formatStr(str) {
  return str.split(":")[1].split(",");
}

badData
  .then((data) => {
    console.log(data[0].split(";"));
    // To split the data set in two I can use the split() method and split() along the " ; "
    // I am also using deconstruction to make is more easily readable
    const [E, A] = data[0].split(";");

    // Grabbing Items from HTML
    let europe = document.querySelector(".europe");
    let asia = document.querySelector(".asia");

    // Calling my function I used to clean up the data.
    const Eu = formatStr(E);
    const Asia = formatStr(A);

    Eu.forEach((item) => {
      // Create a new list item
      let listItem = document.createElement("li");
      // Set the text content to the current item
      listItem.textContent = item.split("")[0].toUpperCase() + item.slice(1);
      // Append the list item to the list
      europe.append(listItem);
    });
    Asia.forEach((item) => {
      let listItem = document.createElement("li");
      // to capitalize the first letter of the string
      listItem.textContent = item.split("")[0].toUpperCase() + item.slice(1);
      asia.append(listItem);
    });
  })
  .catch((error) => {
    console.error(error);
  });
