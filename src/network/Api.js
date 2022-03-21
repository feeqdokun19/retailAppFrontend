const baseurl = process.env.REACT_APP_BASE_URL;

const getRetails = () => {
    return fetch(`${baseurl}/user/create `)

}

const getRetailsLogin = () => {
    return fetch(`${baseurl}/user/login `)

}

export{
    getRetails,
    getRetailsLogin

}