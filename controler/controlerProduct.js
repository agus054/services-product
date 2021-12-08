const servicesUser = require("./users/controlerUsers");


module.exports = {
    getProduct: async (jwtToken) => {
        try {
            const user = await servicesUser.getUsers(jwtToken);
        } catch (error) {
            return error
        }
    },
    inputProduct: async (jwtToken) => {
        try {
            const user = await servicesUser.getUsers(jwtToken);
        } catch (error) {
            return error
        }
    },
    editProduct: async (jwtToken) => {
        try {
            const user = await servicesUser.getUsers(jwtToken);
        } catch (error) {
            return error
        }
    },
    deleteProduct: async (jwtToken) => {
        try {
            const user = await servicesUser.getUsers(jwtToken);
        } catch (error) {
            return error
        }
    }
};