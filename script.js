let scheduleData = [];

function fetchScheduleData() {
  fetch('https://the-aoe.github.io/aoe/schedule.json')
    .then(response => response.json())
    .then(data => {
      scheduleData = data.map(item => ({
        time: item.time,
        category: item.category,
        teamA: item.teamA,
        teamB: item.teamB,
      }));
      updateScheduleData();
    })
    .catch(error => {
      console.error('Có lỗi xảy ra:', error);
    });
}

function updateScheduleData() {
  const scheduleTableBody = document.querySelector('#schedule-table tbody');
  scheduleTableBody.innerHTML = '';

  scheduleData.forEach((schedule) => {
    const row = document.createElement('tr');

    const timeCell = document.createElement('td');
    timeCell.textContent = schedule.time;
    row.appendChild(timeCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = schedule.category;
    row.appendChild(categoryCell);

    const teamACell = document.createElement('td');
    teamACell.innerHTML = schedule.teamA.join('<br>');
    row.appendChild(teamACell);

    const vsCell = document.createElement('td');
    vsCell.textContent = 'VS';
    row.appendChild(vsCell);

    const teamBCell = document.createElement('td');
    teamBCell.innerHTML = schedule.teamB.join('<br>');
    row.appendChild(teamBCell);

    const statusCell = document.createElement('td');
    const startTime = moment(schedule.time, "D/M/YYYY HH:mm").toDate();
    if (startTime <= new Date()) {
      statusCell.textContent = 'Đã bắt đầu';
    } else {
      const countdown = moment(startTime).fromNow(true);
      statusCell.textContent = countdown;
    }
    row.appendChild(statusCell);

    scheduleTableBody.appendChild(row);
  });
}

fetchScheduleData();


const resultsData = [];

function fetchLastMatchData() {
  fetch('https://the-aoe.github.io/aoe/matches.json')
    .then(response => response.json())
    .then(data => {
      const maxId = Math.max(...data.map(match => parseInt(match.id)));
      const lastMatch = data.find(match => match.id === maxId.toString());
      resultsData.push(lastMatch);
      updateResultsData();
    })
    .catch(error => console.error('Lỗi khi lấy dữ liệu từ tệp JSON:', error));
}

document.addEventListener('DOMContentLoaded', fetchLastMatchData);

function updateResultsData() {
  const resultsTableBody = document.querySelector('#results-table tbody');
  resultsTableBody.innerHTML = '';

  resultsData.forEach((result) => {
    const row = document.createElement('tr');

    const timeCell = document.createElement('td');
    timeCell.textContent = result.time;
    row.appendChild(timeCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = result.category;
    row.appendChild(categoryCell);

    const teamACell = document.createElement('td');
    teamACell.innerHTML = result.teamA.join('<br>');
    row.appendChild(teamACell);

    const vsCell = document.createElement('td');
    vsCell.textContent = 'VS';
    row.appendChild(vsCell);

    const teamBCell = document.createElement('td');
    teamBCell.innerHTML = result.teamB.join('<br>');
    row.appendChild(teamBCell);

    const scoreCell = document.createElement('td');
    scoreCell.textContent = result.score;
    row.appendChild(scoreCell);

    resultsTableBody.appendChild(row);
  });
}

function updateResultsData() {
  const resultsTableBody = document.querySelector('#results-table tbody');
  resultsTableBody.innerHTML = '';

  resultsData.forEach((result) => {
    const row = document.createElement('tr');

    const timeCell = document.createElement('td');
    timeCell.textContent = result.time;
    row.appendChild(timeCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = result.category;
    row.appendChild(categoryCell);

    const teamACell = document.createElement('td');
    teamACell.innerHTML = result.teamA.join('<br>');
    row.appendChild(teamACell);

    const vsCell = document.createElement('td');
    vsCell.textContent = 'VS';
    row.appendChild(vsCell);

    const teamBCell = document.createElement('td');
    teamBCell.innerHTML = result.teamB.join('<br>');
    row.appendChild(teamBCell);

    const scoreCell = document.createElement('td');
    scoreCell.textContent = result.score;
    row.appendChild(scoreCell);

    resultsTableBody.appendChild(row);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  updateScheduleData();
  updateResultsData();
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var time = document.getElementById("time").value;
  var type = document.getElementById("type").value;
  var otherType = document.getElementById("otherType").value;
  var teamA = document.getElementById("teamA").value;
  var teamB = document.getElementById("teamB").value;
});

openScoreModalBtn.addEventListener('click', function() {
  scoreModal.style.display = 'block';
});

closeScoreBtn.addEventListener('click', function() {
  scoreModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == scoreModal) {
    scoreModal.style.display = 'none';
  }
});

scoreForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const timeValue = timeInput.value;
  const typeValue = typeInput.value;
  const teamAValue = teamAInput.value;
  const teamBValue = teamBInput.value;

  const isValidTime = validateTime(timeValue);
  const isValidTeamA = validateTeam(teamAValue);
  const isValidTeamB = validateTeam(teamBValue);

  if (isValidTime && isValidTeamA && isValidTeamB) {
    saveScoreBtn.disabled = false;
  } else {
    saveScoreBtn.disabled = true;
  }

  if (!saveScoreBtn.disabled) {
    console.log('Thông tin tỷ số đã được lưu');
  }
});


  document.getElementById("saveScheduleBtn").addEventListener("click", function(event) {
    event.preventDefault();

    var time = document.getElementById("time").value;
    var category = document.getElementById("type").value;
    var teamA = document.getElementById("teamA").value.split(",");
    var teamB = document.getElementById("teamB").value.split(",");

    // Kiểm tra định dạng thời gian
    var timeRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!timeRegex.test(time)) {
      alert("Thời gian không hợp lệ. Vui lòng nhập lại theo định dạng d/m/yyyy hh:mm");
      return;
    }


    var scheduleData = {
      "time": time,
      "category": category,
      "teamA": teamA,
      "teamB": teamB
    };

    var schedules = [scheduleData];

    var jsonData = JSON.stringify(schedules, null, 2);

    var blob = new Blob([jsonData], { type: "application/json" });

    var url = URL.createObjectURL(blob);

    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "schedule.json";
    downloadLink.click();

    URL.revokeObjectURL(url);
    downloadLink.remove();
  });


