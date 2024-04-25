class LoginForm {
    username: string;
    password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }

    handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const name = target.id;

        this[name] = value;
    }

    handleSubmit(event: Event) {
        event.preventDefault();

        if (this.username && this.password) {
            console.log('Username: ', this.username);
            console.log('Password: ', this.password);
            // You can add your logic here to send the data to the server
        } else {
            console.log('Please fill in both fields.');
        }
    }
}

const loginForm = new LoginForm();

console.log('loginForm: ', loginForm);

document.getElementById('username')?.addEventListener('input', (event) => loginForm.handleInputChange(event));
document.getElementById('password')?.addEventListener('input', (event) => loginForm.handleInputChange(event));
document.querySelector('form')?.addEventListener('submit', (event) => loginForm.handleSubmit(event));