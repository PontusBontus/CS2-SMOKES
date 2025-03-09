//Kod av Felix

document.addEventListener('DOMContentLoaded', function () {  // Väntar på att hela sidan ska vara laddad

    const faqQuestions = document.querySelectorAll('.faq-question');  // Hämtar alla FAQ-frågor

    faqQuestions.forEach(function (question) {  // Loopar genom alla FAQ-frågor
        question.addEventListener('click', function () {  // Lägger till en klick-händelse på varje fråga
            const answer = this.nextElementSibling;  // Hämtar svaret för den valda frågan
            if (answer.style.display === 'block') {  // Kollar om svaret redan är synligt
                answer.style.display = 'none';  // Döljer svaret om det redan är synligt
            } else {
                answer.style.display = 'block';  // Visar svaret om det är dolt
            }
        });
    });
});