 document.getElementById("scrollBtn").addEventListener("click", function () {
    document.getElementById("bookingForm").scrollIntoView({ behavior: "smooth" });
  });
    document.getElementById("helpBtn").addEventListener("click", function () {
    alert("📞 Contact us at +91 98765 43210 or tulip@hotel.com");
  });


  // Handle form submission
  document.getElementById("stayForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let roomType = document.getElementById("roomType").value;
    let message = document.getElementById("formMessage");

    if (name === "" || email === "" || checkin === "" || checkout === "" || roomType === "") {
      message.textContent = "⚠️ Please fill all fields.";
      message.style.color = "red";
    } else {
      message.textContent = "✅ Your booking request has been received!";
      message.style.color = "green";
      document.getElementById("stayForm").reset();
    }
  });