// Mảng chứa thông tin kết quả trận đấu
const matches = [];

var url = '/aoe/matches.json'; // Đường dẫn đến tệp JSON

// Sử dụng XMLHttpRequest hoặc Fetch API để tải tệp JSON
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    matches.push(...data); // Thêm dữ liệu từ JSON vào mảng matches

    // Tiếp tục xử lý dữ liệu ở đây
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

    // Sắp xếp vận động viên theo hiệu số thắng thua giảm dần
    athletes.sort((a, b) => b.goalDifference - a.goalDifference);

    // Loại bỏ các vận động viên đã nghỉ hưu khỏi mảng athletes
    const retiredAthletes = ['Thạch', 'Bảo', 'Khanh'];
    const activeAthletes = athletes.filter(athlete => !retiredAthletes.includes(athlete.name));

    // Hiển thị thông tin vận động viên
    var athleteTable = document.getElementById("athletes");

    activeAthletes.forEach((athlete, index) => {
      var row = athleteTable.insertRow();

     var rankCell = row.insertCell();
      if (index < 3) {
        // Sử dụng biểu tượng huy chương tương ứng với vị trí đầu tiên, thứ hai và thứ ba
        var medalIcon;
        if (index === 0) {
          medalIcon = '<i class="fa-sharp fa-light fa-medal gold"></i>';
        } else if (index === 1) {
          medalIcon = '<i class="fa-sharp fa-light fa-medal silver"></i>';
        } else if (index === 2) {
          medalIcon = '<i class="fa-sharp fa-light fa-medal bronze"></i>';
        }
        rankCell.innerHTML = medalIcon;
      } else {
        rankCell.textContent = index + 1;
      }

      var nameCell = row.insertCell();
      nameCell.textContent = athlete.name;

      var winsCell = row.insertCell();
      winsCell.textContent = athlete.wins;

      var lossesCell = row.insertCell();
      lossesCell.textContent = athlete.losses;

      var goalDiffCell = row.insertCell();
      goalDiffCell.textContent = athlete.goalDifference;
    });
  }
};
xhr.send();
