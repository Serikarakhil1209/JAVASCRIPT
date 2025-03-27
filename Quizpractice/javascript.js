// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwNVzMKWtLdtgwbU5l05k2aL8aJxy0-GA",
    authDomain: "practicequizz.firebaseapp.com",
    projectId: "practicequizz",
    storageBucket: "practicequizz.appspot.com",
    messagingSenderId: "559699524128",
    appId: "1:559699524128:web:760eba12830a5a8d789a45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get quiz container element
const quizContainer = document.getElementById("quiz-container");

// Function to fetch quiz from Firestore
async function loadQuiz() {
    try {
        const quizRef = db.collection("quizzes").doc("quiz1"); // Fetching quiz1 (change for multiple quizzes)
        const quizDoc = await quizRef.get();

        if (quizDoc.exists) {
            const quizData = quizDoc.data();
            displayQuiz(quizData);
        } else {
            quizContainer.innerHTML = "<p>No quiz found!</p>";
        }
    } catch (error) {
        console.error("Error fetching quiz:", error);
        quizContainer.innerHTML = "<p>Error loading quiz.</p>";
    }
}

// Function to display quiz questions
function displayQuiz(quizData) {
    let quizHTML = `<h2>${quizData.title}</h2>`;
    quizData.questions.forEach((q, index) => {
        quizHTML += `<div>
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => 
                `<button onclick="checkAnswer('${q.answer}', '${option}', this)">${option}</button>`
            ).join("")}
        </div>`;
    });
    quizContainer.innerHTML = quizHTML;
}

// Function to check the answer
function checkAnswer(correctAnswer, selectedAnswer, button) {
    if (correctAnswer === selectedAnswer) {
        button.style.backgroundColor = "green";
        alert("✅ Correct Answer!");
    } else {
        button.style.backgroundColor = "red";
        alert("❌ Wrong Answer. Try again!");
    }
}

// Load quiz when page loads
loadQuiz();
