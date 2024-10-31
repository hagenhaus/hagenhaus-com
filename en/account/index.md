---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
---

# Account

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-9'>

# Account

<div id="sign-in" style="display:none;">
<h2>Sign in</h2>
<form id="sign-in-form" class="row gx-3">
  <div class="col-md-6 mb-3">
    <label for="email" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" required="">
  </div>
  <div class="col-md-6 mb-3">
    <label for="password" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" required="">
  </div>
  <div class="col-12 mb-3">
    <button type="submit" class="btn btn-secondary hh-normal">Sign in</button>
  </div>
</form>
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
    <input name="password" type="text" class="form-control" style="-webkit-text-security: disc;" required="">
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

<div id="account" style="display:none;">
<p>
  <a id="sign-out-link" class="hh-no-follow" href="">Sign out</a>
  <span> or </span>
  <a id="delete-account-link" class="hh-no-follow" href="">Delete my account</a>
</p>
<div class="row gx-3">
<form id="first-name-form" class="col-12 col-md-6 update-account-field">
<div class="row gx-3">
  <div class="col-12">
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
<form id="last-name-form" class="col-12 col-md-6 update-account-field">
<div class="row gx-3">
  <div class="col-12">
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
<form id="email-form" class="col-12 col-md-6">
<div class="row gx-3">
  <div class="col-12">
    <label for="email" class="form-label">Email</label>
  </div>
</div>
<div class="row gx-2 mb-3">
  <div class="col">
    <input name="email" type="email" class="form-control" autocomplete="username email" value="" required="" disabled>
  </div>
</div>
</form>
<form id="password-form" class="col-12 col-md-6 update-account-field">
<div class="row gx-3">
  <div class="col-12">
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
</div>

</div>
</div>

<script type="module">
  (async () => {
    document.getElementById('sign-in-form').addEventListener('submit', signInListener);
    document.getElementById('sign-up-form').addEventListener('submit', signUpListener);
    document.getElementById('sign-out-link').addEventListener('click', signOutListener);
    document.getElementById('delete-account-link').addEventListener('click', deleteAccountListener);
    for(const form of document.querySelectorAll('form.update-account-field')) { form.addEventListener('submit', updateAccountListener); }

    try {
      const user = localStorage.getItem('user');
      if(user) {
        const res = await axios({ url: `${getHHApiDomain()}/api/users/${JSON.parse(user).userId}`, method: 'get' });
        const firstNameForm = document.getElementById('first-name-form');
        firstNameForm.querySelector('input').value = res.data.firstName;
        const lasttNameForm = document.getElementById('last-name-form');
        lasttNameForm.querySelector('input').value = res.data.lastName;
        const emailForm = document.getElementById('email-form');
        emailForm.querySelector('input').value = res.data.email;
        document.getElementById('account').style.display = 'block';
      } else {
        document.getElementById('sign-in').style.display = 'block'; 
      }
    } catch (error) { 
      localStorage.removeItem('user');
      document.getElementById('sign-in').style.display = 'block';
    }
  })();
</script>