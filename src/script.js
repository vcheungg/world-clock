function updateTime() {
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");
    let honoluluTime = moment().tz("Pacific/Honolulu");
    honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");
    cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateSelectedCityTime() {
  let cityName = selectedTimeZone.split("/")[1];
  let cityTime = moment().tz(selectedTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

function cityChange(event) {
  selectedTimeZone = event.target.value;
  if (selectedTimeZone === "current") {
    selectedTimeZone = moment.tz.guess();
  }
  updateSelectedCityTime();
}
updateTime();
setInterval(updateTime, 1000);
setInterval(updateSelectedCityTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", cityChange);
