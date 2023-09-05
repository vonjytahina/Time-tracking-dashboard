
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const workCurrentHours = document.querySelector(".work .bottom .hours h1");
const workPreviousHours = document.querySelector(".work .bottom .hours p");
const playCurrentHours = document.querySelector(".play .bottom .hours h1");
const playPreviousHours = document.querySelector(".play .bottom .hours p");
const studyCurrentHours = document.querySelector(".study .bottom .hours h1");
const studyPreviousHours = document.querySelector(".study .bottom .hours p");
const exerciseCurrentHours = document.querySelector(
  ".exercise .bottom .hours h1"
);
const exercisePreviousHours = document.querySelector(
  ".exercise .bottom .hours p"
);
const socialCurrentHours = document.querySelector(".social .bottom .hours h1");
const socialPreviousHours = document.querySelector(".social .bottom .hours p");
const selfCareCurrentHours = document.querySelector(
  ".self-care .bottom .hours h1"
);
const selfCarePreviousHours = document.querySelector(
  ".self-care .bottom .hours p"
);

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      if (item.title === "Work") {
        workCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        workPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Play") {
        playCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        playPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Work") {
        workCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        workPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Study") {
        studyCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        studyPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Exercise") {
        exerciseCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        exercisePreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Social") {
        socialCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        socialPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
      if (item.title === "Self Care") {
        selfCareCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
        selfCarePreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
      }
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

daily.onclick = () => {
  daily.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Play") {
          playCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          playPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Study") {
          studyCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          studyPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Exercise") {
          exerciseCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          exercisePreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Social") {
          socialCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          socialPreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
        if (item.title === "Self Care") {
          selfCareCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          selfCarePreviousHours.textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
        }
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
};

weekly.onclick = () => {
  daily.classList.remove("active");
  weekly.classList.add("active");
  monthly.classList.remove("active");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Play") {
          playCurrentHours.textContent = `${item.timeframes.daily.current}hrs`;
          playPreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Study") {
          studyCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          studyPreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Exercise") {
          exerciseCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          exercisePreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Social") {
          socialCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          socialPreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
        if (item.title === "Self Care") {
          selfCareCurrentHours.textContent = `${item.timeframes.weekly.current}hrs`;
          selfCarePreviousHours.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        }
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
};

monthly.onclick = () => {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.add("active");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Play") {
          playCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          playPreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Work") {
          workCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          workPreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Study") {
          studyCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          studyPreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Exercise") {
          exerciseCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          exercisePreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Social") {
          socialCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          socialPreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
        if (item.title === "Self Care") {
          selfCareCurrentHours.textContent = `${item.timeframes.monthly.current}hrs`;
          selfCarePreviousHours.textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
        }
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
};