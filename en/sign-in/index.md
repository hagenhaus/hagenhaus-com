---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
menuItem: mi-sign-in
---

# Sign in

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-9'>

<h1>Sign in</h1>
<form id="sign-in-form" class="row gx-3">
  <div class="col-md-6 mb-3">
    <label for="email" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" required="">
  </div>
  <div class="col-md-6 mb-3">
    <label for="password" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" style="-webkit-text-security: disc;" required="">
  </div>
  <div class="col-12 mb-3">
    <button type="submit" class="btn btn-secondary hh-normal">Sign in</button>
  </div>
</form>
<h1>Sign up</h1>
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
  <div class="col-12">
    <button type="submit" class="btn btn-secondary hh-normal">Sign up</button>
  </div>
</form>
</div>
</div>

<script>
(async () => {
  var { signInFormListener, signUpFormListener } = await import('/assets/scripts.js');

  var signInForm = document.getElementById('sign-in-form');
  signInForm.addEventListener('submit', signInFormListener);

  var signUpForm = document.getElementById('sign-up-form');
  signUpForm.addEventListener('submit', signUpFormListener);
})();
</script>