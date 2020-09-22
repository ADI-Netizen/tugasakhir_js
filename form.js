function buat_login() {
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);
    // Membuat Element Paragraf & masuk ke div
    var p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "SILAHKAN MENDAFTAR"
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p)

    // Membuat Form
    var form = document.createElement("form");
    form.method = "post"
    form.action = "index.html"
    element.appendChild(form);

    // Membuat Inputan Nama User
    var label = document.createElement("label");
    label.innerHTML = "Nama User";
    form.appendChild(label);
    var input_username = document.createElement("input");
    input_username.type = "text";
    input_username.name = "username";
    input_username.placeholder = "Nama User..";
    input_username.className = "form_login";
    form.appendChild(input_username);

    // Membuat Inputan Nomor HP
    var label2 = document.createElement("label");
    label2.innerHTML = "Nomor Handphone";
    form.appendChild(label2);
    var input_noHp = document.createElement("input");
    input_noHp.type = "text";
    input_noHp.name = "nomorhp";
    input_noHp.placeholder = "Nomor Handphone.";
    input_noHp.className = "form_login";
    form.appendChild(input_noHp);

    // Membuat Inputan username atau email
    var label3 = document.createElement("label");
    label3.innerHTML = "Username";
    form.appendChild(label3);
    var input_email = document.createElement("input");
    input_email.type = "text";
    input_email.name = "email";
    input_email.placeholder = "Username atau email ..";
    input_email.className = "form_login";
    form.appendChild(input_email);

    // Membuat Inputan Password
    var label4 = document.createElement("label");
    label4.innerHTML = "Password";
    form.appendChild(label4);
    var input_password = document.createElement("input");
    input_password.type = "password";
    input_password.name = "password";
    input_password.placeholder = "Password ..";
    input_password.className = "form_login";
    form.appendChild(input_password);

    var tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.className = "tombol_login";
    tombol.value = "DAFTAR SEKARANG"
    form.appendChild(tombol);
}