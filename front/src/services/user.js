import client from './config';

const userPath = '/api/user';

const ClientUsers = {
    async createUser(data) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async updateUser(data) {
        try {
            const response = await client.put(`${userPath}`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listUser() {
        try {
            const response = await client.get(`${userPath}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async deleteUser(data) {
        try {
            const response = await client.delete(`${userPath}/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientUsers;