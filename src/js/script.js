$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<div class="slick-arrow slick-prev"><img src="img/arrow-left.png" alt="Назад" style="width: 30px; height: 30px; background-color: transparent;"></div>',
        nextArrow: '<div class="slick-arrow slick-next"><img src="img/arrow-right.png" alt="Вперед" style="width: 30px; height: 30px; background-color: transparent;"></div>',
    });
});
function openModal(event) {
    event.preventDefault(); // Запобігаємо стандартному поведінці посилання
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

    };

    const serviceID = "service_w3d8921";
    const templateID = "template_qtgei99";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}


// Get the button:
function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10);
    }
}

window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight;

    if (scrollTop > (scrollHeight / 3)) {
        document.getElementById("scrollUpButton").style.display = "flex";
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
    }
});

document.getElementById("scrollUpButton").addEventListener("click", function () {
    scrollToTop();
});
