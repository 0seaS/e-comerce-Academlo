async function getProducts() {
    // esta es una forma de hacerlo
    // function getProducts() {
    //      return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    //      .then((res) => res.json())
    //      .then((data) => data)
    //      .catch((err) => {console.log(err)})
    // }

    // otra forma de hacerlo

    try {
        const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)        
    }
}

export default getProducts