let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

/* ADD BOOKING */
function addBooking(place) {
    bookings.push(place);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert(place + " added!");
    renderBookings();
}

/* REMOVE SINGLE BOOKING */
function removeBooking(index) {
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    renderBookings();
}

/* RENDER BOOKINGS ON PAGE */
function renderBookings() {
    let list = document.getElementById("bookingList");
    let count = document.getElementById("count");

    if (!list) return;

    list.innerHTML = "";

    bookings.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button onclick="removeBooking(${index})" class="remove-btn">Remove</button>
        `;

        list.appendChild(li);
    });

    if (count) {
        count.innerText = bookings.length;
    }
}

/* LOAD ON PAGE OPEN */
window.onload = renderBookings;