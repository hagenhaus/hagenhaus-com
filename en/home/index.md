---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
menuItem: mi-home
---

# Home

<div class="row">
  <div class="col-12 col-md-6">
    <h2>What we do</h2>
    <ul>
      <li>Create developer documentation and training.</li>
      <li>Design and deploy developer portals.</li>
      <li>Design related business processes.</li>
      <li>Design, test, and/or document APIs and SDKs.</li>
      <li>Provide webinar or in-person developer training.</li>
      <li>Engage in short-term and/or multi-month projects.</li>
    </ul>
  </div>

  <div id="contact-us-section" class="col-12 col-md-6">
    <h2>Contact Us</h2>
    <p>We do not share your information with anyone.</p>
    <form id="contact-us-form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" value="Matt Hagen" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" value="matt@hagenhaus.com" required>
      </div>
      <div class="mb-3">
        <label for="website" class="form-label">Website</label>
        <input type="url" class="form-control" id="website" value="https://hagenhaus.com" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" required>This is a message.</textarea>
      </div>
      <button type="submit" class="btn btn-secondary">Send</button>
    </form>
  </div>

  <div id="thank-you-section" class="col-12 col-md-6" style="display:none;">
    <h2>Thank you</h2>
    <p>We will follow up in a day or two.</p>
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
      "website": document.getElementById('website').value,
      "message": document.getElementById('message').value
    };
    (async () => {
      try {
        // Where Hagenhaus API is.
        const origin =  window.location.hostname == 'localhost' ? 'http://localhost:8086' : 'https://hagenhaus:3002';
        const res = await axios({
          url: `${origin}/api/v1/messages`,
          method: 'post',
          data: data
        });
        document.getElementById('contact-us-section').style.display = "none";
        document.getElementById('thank-you-section').style.display = "block";
      } catch (error) {
        //document.getElementById('contact-us-section').style.display = "none";
        //document.getElementById('thank-you-section').style.display = "block";
        document.getElementById('error-msg').innerHTML = `${error.message}.`;
        document.getElementById('contact-us-section').style.display = "none";
        document.getElementById('error-msg-section').style.display = "block";
      }
    })();
  });
</script>
