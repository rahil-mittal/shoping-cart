let cartModel = {
    q:[],
    fetchData: async function() {
        return await fetch('./../cart.JSON')
                .then((response) => response.json());
    }
};

export {cartModel};