<script>
    let email = '';
    let password = '';
    let firstName = '';
    let lastName = '';
</script>

<form>
    <div class="field">
        <label class="label" for="firstName">Name</label>
        <input bind:value={firstName} class="input" id="firstName" name="firstName" placeholder="EnterName" type="text" />
    </div>
    <div class="field">
        <label class="label" for="lastName">Surname</label>
        <input bind:value={lastName} class="input" id="lastName" name="lastName" placeholder="Enter Surname" type="text" />
    </div>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Log In</button>
    </div>
</form>
