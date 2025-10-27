// Data kuis modul 1
const questions = [
  {
    question: "Apa kepanjangan dari HTML?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Level",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Siapa yang membuat bahasa pemrograman JavaScript?",
    options: [
      "Brendan Eich",
      "Bill Gates",
      "Elon Musk",
      "Mark Zuckerberg"
    ],
    correct: 0
  },
  {
    question: "CSS digunakan untuk apa?",
    options: [
      "Struktur halaman",
      "Menentukan gaya dan tampilan",
      "Menyimpan data",
      "Menjalankan logika program"
    ],
    correct: 1
  }
];

// Menampilkan kuis ke halaman
export function loadModule1(content) {
  let html = "<h2>Modul 1: Kuis Dasar Web</h2>";
  
  questions.forEach((q, index) => {
    html += `
      <div class="question">
        <p><strong>${index + 1}. ${q.question}</strong></p>
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}"> ${opt}
          </label><br>
        `).join('')}
      </div>
    `;
  });

  html += `<button id="checkAnswers">Periksa Jawaban</button>
           <p id="result"></p>
           <button id="backButton">Kembali ke Beranda</button>`;

  content.innerHTML = html;

  // Fungsi tombol
  document.getElementById("checkAnswers").addEventListener("click", () => {
    let score = 0;
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && parseInt(selected.value) === q.correct) {
        score++;
      }
    });
    document.getElementById("result").innerText = `Nilai kamu: ${score} dari ${questions.length}`;
  });

  document.getElementById("backButton").addEventListener("click", () => {
    location.reload();
  });
}
