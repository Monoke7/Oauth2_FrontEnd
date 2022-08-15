import axios from "axios";

export async function InitiateConnection() {
    const config = {
        method: 'post',
        url: `http://localhost:80/AuthStepOne`
    }

    try {
        var response = await axios(config);
        window.open(response.data.authUrl, "_self");
    } catch (error) {
        console.log(error);
    }
}

export async function ConnectionProcess2(email, code) {
    const data = {
        email,
        code
    }

    const config = {
        method: 'post',
        url: `http://localhost:80/AuthStepTwo`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    }

    try {
        var response = await axios(config);

        let userAuth = {
            email,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            expiresIn: response.data.expires_in
        };

        localStorage.setItem("userAuth", JSON.stringify(userAuth));
        return { status: response.status, statusTest: response.statusTest };
    } catch (error) {
        console.log(error);
    }
}

export async function RunImap() {
    try {
        let { email, accessToken, refreshToken } = JSON.parse(localStorage.getItem("userAuth"));

        const data = {
            email,
            accessToken,
            refreshToken
        };
        const config = {
            method: 'post',
            url: `http://localhost:80/ImapTest`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }

        var response = await axios(config);

        console.log(response)

    } catch (e) {
        console.log(e);
    }
}