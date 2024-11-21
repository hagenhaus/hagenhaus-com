---
author: ""
hasOtp: false
hasPageHeader: true
hasScrollbar: false
---

# Account

<!-- Sign In/Up Section -->
<div id="sign-in-up" style="display:none;">

  <!-- Sign In Form -->
  <h2>Sign in</h2>
  <form id="sign-in-form" class="row gx-3">
    <div class="col-md-6 mb-3">
      <label for="email" class="form-label">Email</label>
      <input name="email" type="email" class="form-control" autocomplete="username email" required="">
    </div>
    <div class="col-md-6 mb-3">
      <label for="password" class="form-label">Password</label>
      <input name="password" type="password" class="form-control" autocomplete="current-password" required="">
    </div>
    <div class="col-12 mb-3">
      <button type="submit" class="btn btn-secondary hh-normal">Sign in</button>
    </div>
  </form>

  <!-- Sign Up Form -->
  <h2>Sign up</h2>
  <form id="sign-up-form" class="row gx-3 mb-3">
    <div class="col-md-6 mb-3">
      <label for="firstName" class="form-label">First name</label>
      <input name="firstName" type="text" class="form-control" required="">
    </div>
    <div class="col-md-6 mb-3">
      <label for="lastName" class="form-label">Last name</label>
      <input name="lastName" type="text" class="form-control" required="">
    </div>
    <div class="col-md-6 mb-3">
      <label for="email" class="form-label">Email</label>
      <input name="email" type="email" class="form-control" required="">
    </div>
    <div class="col-md-6 mb-3">
      <label for="password" class="form-label">Password</label>
      <input name="password" type="text" class="form-control" style="-webkit-text-security: disc;" autocomplete="current-password" required="">
    </div>
    <div class="col-md-6 mb-3">
      <label for="partnerId" class="form-label">Partner ID</label>
      <input name="partnerId" type="text" class="form-control" style="-webkit-text-security: disc;" required="">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-secondary hh-normal">Sign up</button>
    </div>
  </form>

</div>

<!-- Account Section -->
<div id="account" style="display:none;">

  <p>
    <a id="sign-out-link" class="hh-no-follow" href="">Sign out</a>
    <span> or </span>
    <a id="delete-account-link" class="hh-no-follow" href="">Delete my account</a>
  </p>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-3">

  <!-- First Name Form -->
  <form id="first-name-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="firstName" class="form-label">First name</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="firstName" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Last Name Form -->
  <form id="last-name-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="lastName" class="form-label">Last name</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="lastName" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Email Form -->
  <form id="email-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="email" class="form-label">Email</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="email" type="email" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Password Form -->
  <form id="password-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="password" class="form-label">Password</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="password" type="password" class="form-control" autocomplete="current-password" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Street Form -->
  <form id="street-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="street" class="form-label">Street</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="street" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- City Form -->
  <form id="city-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="city" class="form-label">City</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="city" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Region Form -->
  <form id="region-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="region" class="form-label">Region</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="region" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Country Form -->
  <form id="country-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="country" class="form-label">Country</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="country" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  <!-- Postal Code Form -->
  <form id="postal-code-form" class="col update-account-field">
    <div class="row gx-3">
      <div class="col">
        <label for="postalCode" class="form-label">Postal Code</label>
      </div>
    </div>
    <div class="row gx-2 mb-3">
      <div class="col">
        <input name="postalCode" type="text" class="form-control" value="" required="">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
      </div>
    </div>
  </form>

  </div>
</div>

<!-- JS Section -->
<script type="module">
  (async () => {
    document.getElementById('sign-in-form').addEventListener('submit', signInListener);
    document.getElementById('sign-up-form').addEventListener('submit', signUpListener);
    document.getElementById('sign-out-link').addEventListener('click', signOutListener);
    document.getElementById('delete-account-link').addEventListener('click', deleteAccountListener);
    for (const form of document.querySelectorAll('form.update-account-field')) { form.addEventListener('submit', updateAccountListener); }

    try {
      const [userId, bearerToken] = window.getUserIdAndBearerToken();
      if (userId) {
        const res = await axios({
          method: 'get',
          url: `${getHHApiDomain()}/api/v2/users/${userId}`,
          headers: { authorization: `${bearerToken}` }
        });

        document.getElementById('first-name-form').querySelector('input').value = res.data.firstName;
        document.getElementById('last-name-form').querySelector('input').value = res.data.lastName;
        document.getElementById('email-form').querySelector('input').value = res.data.email;
        document.getElementById('password-form').querySelector('input').value = '';
        document.getElementById('street-form').querySelector('input').value = res.data.street;
        document.getElementById('city-form').querySelector('input').value = res.data.city;
        document.getElementById('region-form').querySelector('input').value = res.data.region;
        document.getElementById('country-form').querySelector('input').value = res.data.country;
        document.getElementById('postal-code-form').querySelector('input').value = res.data.postalCode;

        document.getElementById('account').style.display = 'block';
      } else {
        document.getElementById('sign-in-up').style.display = 'block';
      }
    } catch (error) {
      localStorage.removeItem('user');
      document.getElementById('sign-in-up').style.display = 'block';
    }
  })();
</script>