import axios from "axios";

class AuthService {

    async login(username, password) {

        let form = new FormData();
        form.append('login', username);
        form.append('password', password);

        const response = await axios({
            method: 'post',
            url: window.global.baseUrl + '/api/login/check_login.php',
            data: form
        });

        if(window.global.debug)
            console.log("Login try: ", response.data);

        if(response.data.error === 0){

            let user = response.data.result;

            this.setUser(user);

            return true;

        }

        return false;
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {

    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    setUser(user){
        if(window.global.debug)
            console.log("Save user to localStorage");

        localStorage.setItem('user', JSON.stringify(user));
    }
}

export default new AuthService();
