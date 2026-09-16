// =========================================
// CM CREATIVE SHOTS
// BOOKING SYSTEM
// =========================================

const bookingForm = document.getElementById("bookingForm");

const timeButtons = document.querySelectorAll(".time-option");
const typeButtons = document.querySelectorAll(".type-option");
const paymentButtons = document.querySelectorAll(".payment-option");

const timeInput = document.getElementById("time");
const eventTypeInput = document.getElementById("eventType");
const paymentInput = document.getElementById("payment");

const formMessage = document.getElementById("formMessage");


// =========================================
// TIME SELECTION
// =========================================

timeButtons.forEach(button => {

    button.addEventListener("click", () => {

        timeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        timeInput.value = button.dataset.value;

    });

});


// =========================================
// EVENT TYPE SELECTION
// =========================================

typeButtons.forEach(button => {

    button.addEventListener("click", () => {

        typeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        eventTypeInput.value = button.dataset.value;

    });

});


// =========================================
// PAYMENT SELECTION
// =========================================

paymentButtons.forEach(button => {

    button.addEventListener("click", () => {

        paymentButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        paymentInput.value = button.dataset.value;

    });

});


// =========================================
// BOOKING SUBMIT
// =========================================

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = timeInput.value;
    const location = document.getElementById("location").value.trim();
    const eventType = eventTypeInput.value;
    const payment = paymentInput.value;


    // =====================================
    // CHECK EVERYTHING
    // =====================================

    if (
        !name ||
        !phone ||
        !date ||
        !time ||
        !location ||
        !eventType ||
        !payment
    ) {

        formMessage.textContent =
            "Por fabor yena tur kos promé ku bo manda bo booking.";

        return;
    }


    // =====================================
    // FORMAT DATE
    // =====================================

    const selectedDate = new Date(date + "T00:00:00");

    const formattedDate = selectedDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );


    // =====================================
    // CREATE WHATSAPP MESSAGE
    // =====================================

    const message =

`📸 NUEVO BOOKING – CM CREATIVE SHOTS

Nomber: ${name}

Number di telefon:
${phone}

Fecha:
${formattedDate}

Orario:
${time}

Location:
${location}

Tipo:
${eventType}

Metodo di pago:
${payment}

--------------------------------

Booking received via CM CreativeShots Website.`;


    // =====================================
    // WHATSAPP NUMBER
    // =====================================

    const whatsappNumber = "59996876956";


    // =====================================
    // WHATSAPP LINK
    // =====================================

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    // =====================================
    // SUCCESS MESSAGE
    // =====================================

    formMessage.textContent =
        "Bo booking ta kla! WhatsApp lo habri awor.";


    // =====================================
    // OPEN WHATSAPP
    // =====================================

    window.open(whatsappURL, "_blank");


    // =====================================
    // RESET FORM
    // =====================================

    bookingForm.reset();

    timeButtons.forEach(button => {
        button.classList.remove("selected");
    });

    typeButtons.forEach(button => {
        button.classList.remove("selected");
    });

    paymentButtons.forEach(button => {
        button.classList.remove("selected");
    });

    timeInput.value = "";
    eventTypeInput.value = "";
    paymentInput.value = "";

});