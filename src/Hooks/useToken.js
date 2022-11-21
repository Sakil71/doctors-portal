import { useEffect, useState } from "react"

// Not use yet

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accesstoken) {
                        localStorage.setItem('accessToken', data.accesstoken);
                        setToken(data.accesstoken);
                    }
                });
        }
    }, [email])
    return token;
}

export default useToken;