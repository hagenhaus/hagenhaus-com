---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
menuItem: mi-home
---

# Home

<div class="row">
  <div class="col-12 col-md-6">
    <h2>Services</h2>
    <p>Please contact me for the following services:</p>
    <ul>
      <li>Document and test APIs and SDKs.</li>
      <li>Write developer guides.</li>
      <li>Deploy developer portals.</li>
      <li>Establish related workflows.</li>
      <li>Create example applications.</li>
    </ul>
    <p>I am glad to furnish examples and references.</p>
  </div>
  <div id="contact-me-section" class="col-12 col-md-6">
    <h2>Contact Me</h2>
    <form id="contact-us-form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Send</button>
    </form>
  </div>
  <div id="thank-you-section" class="col-12 col-md-6" style="display:none;">
    <h2>Thank you</h2>
    <p>We will contact you soon. We look forward to helping you.</p>
  </div>
  <div id="error-msg-section" class="col-12 col-md-6" style="display:none;">
    <h2>Error Message</h2>
    <p id="error-msg"></p>
  </div>
</div>

<script>
  document.getElementById('contact-us-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
      "name": document.getElementById('name').value,
      "email": document.getElementById('email').value,
      "message": document.getElementById('message').value
    };
    (async () => {
      try {
        // Where Hagenhaus API is.
        const origin =  window.location.hostname == 'localhost' ? 'http://localhost:8086' : 'https://hagenhaus.com:3002';
        const res = await axios({
          url: `${origin}/api/v1/messages`,
          method: 'post',
          data: data
        });
        document.getElementById('contact-me-section').style.display = "none";
        document.getElementById('thank-you-section').style.display = "block";
      } catch (error) {
        document.getElementById('error-msg').innerHTML = `${error.message}.`;
        document.getElementById('contact-me-section').style.display = "none";
        document.getElementById('error-msg-section').style.display = "block";
      }
    })();
  });
</script>