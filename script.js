const forms = document.querySelectorAll(".lead-form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name") || "Customer";
    const phone = formData.get("phone") || "";
    const interest = formData.get("interest") || "Forest Trails Bhugaon";
    const text = encodeURIComponent(
      `New enquiry for ${interest}\nName: ${name}\nPhone: ${phone}`
    );

    window.location.href = `https://wa.me/917066787989?text=${text}`;
  });
});
