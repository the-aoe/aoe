// Mảng chứa thông tin kết quả trận đấu
// const matches = [
//   {
//     id:'1',
//     time: '05/01/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Hưởng', 'Thạch'],
//     teamB: ['Tùng', 'Trực', 'Thế'],
//     score: '5-1'
//   },
//   {
//     id:'2',
//     time: '09/01/2023',
//     category: 'Assyrian',
//     teamA: ['Bách', 'Hưởng', 'Thạch'],
//     teamB: ['Tùng', 'Trực', 'Thế'],
//     score: '4-0'
//   },
//   {
//     id:'3',
//     time: '13/01/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Thạch'],
//     teamB: ['Tùng', 'Hưởng', 'Dũng'],
//     score: '4-2'
//   },
//   {
//     id:'4',
//     time: '06/02/2023',
//     category: 'Random',
//     teamA: ['Tùng', 'Thế', 'Thạch'],
//     teamB: ['Dũng', 'Hưởng', 'Trực'],
//     score: '1-5'
//   },
//   {
//     id:'5',
//     time: '02/02/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thạch'],
//     teamB: ['Hưởng', 'Tùng'],
//     score: '2-5'
//   },
//   {
//     id:'6',
//     time: '10/02/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Tùng'],
//     teamB: ['Hưởng', 'Trực', 'Thạch'],
//     score: '4-5'
//   },
//   {
//     id:'7',
//     time: '17/02/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Trực', 'Thạch'],
//     teamB: ['Hưởng', 'Dũng', 'Tùng', 'Tuấn'],
//     score: '1-4'
//   },
//   {
//     id:'8',
//     time: '20/02/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Trực', 'Hưởng'],
//     teamB: ['Thạch', 'Dũng', 'Tùng', 'Tuấn'],
//     score: '3-4'
//   },
//   {
//     id:'9',
//     time: '27/02/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Trực', 'Hưởng'],
//     teamB: ['Thạch', 'Dũng', 'Tùng', 'Tuấn'],
//     score: '4-3'
//   },
//   {
//     id:'10',
//     time: '10/03/2023',
//     category: 'Random',
//     teamA: ['Thế', 'Trực', 'Hưởng'],
//     teamB: ['Thạch', 'Dũng', 'Tùng'],
//     score: '4-5'
//   },
//   {
//     id:'11',
//     time: '17/3/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Trực', 'Hưởng'],
//     teamB: ['Thạch', 'Dũng', 'Tùng', 'Tuấn'],
//     score: '3-5'
//   },
//   {
//     id:'12',
//     time: '18/3/2023',
//     category: 'Random',
//     teamA: ['Thế', 'Trực'],
//     teamB: ['Thạch', 'Tùng'],
//     score: '3-5'
//   },
//   {
//     id:'13',
//     time: '24/3/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Tuấn'],
//     teamB: ['Tùng', 'Hưởng', 'Thạch'],
//     score: '4-5'
//   },
//   {
//     id:'14',
//     time: '29/3/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thạch', 'Tuấn'],
//     teamB: ['Tùng', 'Hưởng', 'Trực'],
//     score: '5-1'
//   },
//   {
//     id:'15',
//     time: '31/3/2023',
//     category: 'Random',
//     teamA: ['Trực'],
//     teamB: ['Thạch'],
//     score: '7-0'
//   },
//   {
//     id:'16',
//     time: '12/4/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Tuấn'],
//     teamB: ['Tùng', 'Hưởng'],
//     score: '5-1'
//   },
//   {
//     id:'17',
//     time: '13/4/2023',
//     category: 'Random',
//     teamA: ['Thế', 'Trực'],
//     teamB: ['Dũng', 'Hưởng'],
//     score: '3-4'
//   },
//   {
//     id:'18',
//     time: '28/4/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Thế', 'Trực', 'Hưởng'],
//     teamB: ['Thạch', 'Dũng', 'Tùng', 'Tuấn'],
//     score: '0-5'
//   },
//   {
//     id:'19',
//     time: '11/5/2023',
//     category: 'Random',
//     teamA: ['Bách', 'Dũng', 'Trực', 'Thạch'],
//     teamB: ['Hưởng', 'Thế', 'Tùng', 'Tuấn'],
//     score: '3-4'
//   },
//   {
//     id:'20',
//     time: '18/5/2023',
//     category: 'Random',
//     teamA: ['Dũng', 'Hưởng'],
//     teamB: ['Thế', 'Trực'],
//     score: '3-5'
//   },
//   {
//     id:'21',
//     time: '19/5/2023',
//     category: 'Random',
//     teamA: ['Tuấn', 'Hưởng'],
//     teamB: ['Thế', 'Trực'],
//     score: '1-5'
//   },
//   {
//     id:'22',
//     time: '26/5/2023',
//     category: 'Random',
//     teamA: ['Tuấn', 'Hưởng', 'Dũng'],
//     teamB: ['Thế', 'Trực', 'Bách'],
//     score: '3-5'
//   },
//   {
//     id:'23',
//     time: '31/5/2023',
//     category: 'Random',
//     teamA: ['Tùng', 'Hưởng', 'Dũng', 'Tuấn'],
//     teamB: ['Thế', 'Trực', 'Bách', 'Hải'],
//     score: '2-3'
//   }
// ];

const matches = [

];
var url = '\matches.JSON';

// Sử dụng XMLHttpRequest hoặc Fetch API để tải tệp JSON
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    // Xử lý dữ liệu JSON ở đây
  }
};
xhr.send();



// Lấy tham chiếu đến bảng kết quả
var resultsTable = document.getElementById("all-matches");

// Tạo các hàng và cột cho bảng kết quả
matches.forEach(function(match) {
  var row = resultsTable.insertRow();

  var idCell = row.insertCell();
  idCell.textContent = match.id;

  var timeCell = row.insertCell();
  timeCell.textContent = match.time;

  var categoryCell = row.insertCell();
  categoryCell.textContent = match.category;

  var teamACell = row.insertCell();
  teamACell.textContent = match.teamA.join(", ");

  var teamBCell = row.insertCell();
  teamBCell.textContent = match.teamB.join(", ");

  var scoreCell = row.insertCell();
  scoreCell.textContent = match.score;
});

// Tạo mảng chứa thông tin vận động viên
const athletes = [];

// Lặp qua các trận đấu và tính toán số trận thắng, thua và hiệu số thắng thua
matches.forEach(match => {
  // Đội nhà
  match.teamA.forEach(player => {
    const athlete = athletes.find(a => a.name === player);
    if (athlete) {
      if (parseInt(match.score[0]) > parseInt(match.score[2])) {
        athlete.wins++;
      } else if (parseInt(match.score[0]) < parseInt(match.score[2])) {
        athlete.losses++;
      }
      athlete.goalDifference = athlete.wins - athlete.losses;
    } else {
      athletes.push({
        name: player,
        wins: parseInt(match.score[0]) > parseInt(match.score[2]) ? 1 : 0,
        losses: parseInt(match.score[0]) < parseInt(match.score[2]) ? 1 : 0,
        goalDifference: parseInt(match.score[0]) - parseInt(match.score[2])
      });
    }
  });

  // Đội khách
  match.teamB.forEach(player => {
    const athlete = athletes.find(a => a.name === player);
    if (athlete) {
      if (parseInt(match.score[2]) > parseInt(match.score[0])) {
        athlete.wins++;
      } else if (parseInt(match.score[2]) < parseInt(match.score[0])) {
        athlete.losses++;
      }
      athlete.goalDifference = athlete.wins - athlete.losses;
    } else {
      athletes.push({
        name: player,
        wins: parseInt(match.score[2]) > parseInt(match.score[0]) ? 1 : 0,
        losses: parseInt(match.score[2]) < parseInt(match.score[0]) ? 1 : 0,
        goalDifference: parseInt(match.score[2]) - parseInt(match.score[0])
      });
    }
  });
});

// Sắp xếp mảng athletes theo hiệu số thắng thua giảm dần
athletes.sort((a, b) => b.goalDifference - a.goalDifference);

