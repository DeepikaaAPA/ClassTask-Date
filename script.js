let input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.id = "dob";
input_date.style.width = "300px";
input_date.className = "p-1";

let button = document.createElement("button");
button.setAttribute("type", "button");
button.innerText = "Click Me!";
button.addEventListener("click", findDateDiff);
button.className = "btn btn-primary mx-2";

let div = document.createElement("div");
div.style.textAlign = "center";
div.append(input_date, button);
document.body.append(div);
div.className = "py-5";

let outputdiv = document.createElement("div");
outputdiv.style.textAlign = "center";
outputdiv.innerHTML = `<br>Current date and time is ${new Date()}`;
document.body.append(outputdiv);

function findDateDiff() {
  outputdiv.innerHTML = "";
  let input = input_date.value;
  let timestamp = Date.parse(input);
  let dob = new Date(timestamp);
  let currDate = new Date();
  outputdiv.innerHTML += `<br> Your Date of birth :${dob}`;

  let msDiff = currDate.getTime() - dob.getTime();
  outputdiv.innerHTML += `<br> Differernce in ms : ${msDiff}`;

  let secDiff = parseInt(msDiff / 1000);
  outputdiv.innerHTML += `<br> Differernce in sec : ${secDiff}`;

  let minDiff = parseInt(secDiff / 60);
  outputdiv.innerHTML += `<br> Differernce in min : ${minDiff}`;

  let hoursDiff = parseInt(minDiff / 60);
  outputdiv.innerHTML += `<br> Differernce in hours : ${hoursDiff}`;

  let daysDiff = parseInt(hoursDiff / 24);
  outputdiv.innerHTML += `<br> Differernce in days : ${daysDiff}`;

  let years = currDate.getFullYear() - dob.getFullYear();
  let months = years * 12 + (currDate.getMonth() - dob.getMonth());

  outputdiv.innerHTML += `<br> Differernce in months : ${months}`;
  outputdiv.innerHTML += `<br> Differernce in years : ${years}`;
}
