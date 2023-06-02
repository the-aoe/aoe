// Dữ liệu lịch thi đấu
const scheduleData = [
  {
    time: 'Thứ 4 (31/5/2023 17:30)',
    category: '4 vs 4',
    teamA: ['Dũng (C)', 'Tùng', 'Hưởng', 'Tuấn'],
    teamB: ['Trực (C)', 'Thế', 'Hải', 'Bách'],
  },
  // Thêm dữ liệu lịch thi đấu khác (nếu có)
];

// Dữ liệu kết quả trận đấu gần nhất
const resultsData = [
  {
    time: 'Thứ 4 (31/5/2023 17:30)',
    category: '4 vs 4',
    teamA: ['Dũng (C)', 'Tùng', 'Hưởng', 'Tuấn'],
    teamB: ['Trực (C)', 'Thế', 'Hải', 'Bách'],
    score: '2-3'
  },
  // Thêm dữ liệu kết quả trận đấu khác (nếu có)
];

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
    const currentTime = new Date();
    const startTime = new Date(schedule.time);
    
    if (currentTime > startTime) {
      statusCell.textContent = 'Đã bắt đầu';
    } else {
      const countdown = startTime - currentTime;
      const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
      const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
      
      if (days > 0) {
        statusCell.textContent = `${days} Ngày ${hours}:${minutes}:${seconds}`;
      } else {
        statusCell.textContent = `${hours}:${minutes}:${seconds}`;
      }
    }
    
    row.appendChild(statusCell);

    scheduleTableBody.appendChild(row);
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
