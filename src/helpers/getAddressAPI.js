const getAddressAPI = (cep) => {
    cep = cep.replace(/\D/g, '')
    
    const apiURL = 'https://viacep.com.br/ws'
    const cepRegEx = /^[0-9]{8}$/

    if (!cepRegEx.test(cep)) {
        return Promise.resolve({
            error: true
        })
    }

    return (
        fetch(`${apiURL}/${cep}/json`)
            .then(res => res.json())
    )

}

export default getAddressAPI