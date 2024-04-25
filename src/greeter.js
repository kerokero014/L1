var _a, _b, _c;
var LoginForm = /** @class */ (function () {
    function LoginForm() {
        this.username = '';
        this.password = '';
    }
    LoginForm.prototype.handleInputChange = function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.id;
        this[name] = value;
    };
    LoginForm.prototype.handleSubmit = function (event) {
        event.preventDefault();
        if (this.username && this.password) {
            console.log('Username: ', this.username);
            console.log('Password: ', this.password);
            // You can add your logic here to send the data to the server
        }
        else {
            console.log('Please fill in both fields.');
        }
    };
    return LoginForm;
}());
var loginForm = new LoginForm();
console.log('loginForm: ', loginForm);
(_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function (event) { return loginForm.handleInputChange(event); });
(_b = document.getElementById('password')) === null || _b === void 0 ? void 0 : _b.addEventListener('input', function (event) { return loginForm.handleInputChange(event); });
(_c = document.querySelector('form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (event) { return loginForm.handleSubmit(event); });
