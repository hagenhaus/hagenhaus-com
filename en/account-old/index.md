---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
menuItem: mi-account
---

# Account

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-9'>

# Account

<p><a class="action-link" href="" data-bs-toggle="modal" data-bs-target="#delete-my-account-modal">Delete my account</a></p>

<div class="row gx-3">

<form id="first-name-form" class="col-12 col-md-6">
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

<form id="last-name-form" class="col-12 col-md-6">
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
    <input name="email" type="email" class="form-control" autocomplete="username email" value="" required="">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
  </div>
</div>
</form>

<form id="password-form" class="col-12 col-md-6">
<div class="row gx-3">
  <div class="col-12">
    <label for="password" class="form-label">Password</label>
  </div>
</div>
<div class="row gx-2 mb-3">
  <div class="col">
    <input type="text" autocomplete="username" hidden="">
    <input name="password" type="password" class="form-control" autocomplete="current-password" required="">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-secondary"><i class="fas fa-check size"></i></button>
  </div>
</div>
</form>

</div>
</div>

<script type="module">
  var user = JSON.parse(localStorage.getItem('user'));
  (async () => {
    try {
      const res = await axios({ url: `http://localhost:8081/api/v1/users/${user.userId}`, method: 'get' });
      let firstNameForm = document.getElementById('first-name-form');
      firstNameForm.querySelector('input').value = res.data.firstName;
      let lasttNameForm = document.getElementById('last-name-form');
      lasttNameForm.querySelector('input').value = res.data.lastName;
      let emailForm = document.getElementById('email-form');
      emailForm.querySelector('input').value = res.data.email;
    } catch (error) { reportError(error); }
  })();
</script>