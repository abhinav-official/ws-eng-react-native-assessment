import axios from 'axios';

const api = {
    fetchMCQs: async () => {
        try {
            const response = await axios.get('https://cross-platform.rp.devfactory.com/for_you');
            return response.data;
        } catch (error) {
            console.log({ error });
        }
    },
    revealAnswer: async (id: string) => {
        try {
            const response = await axios.get(`https://cross-platform.rp.devfactory.com/reveal?id=${id}`);
            return response.data;
        } catch (error) {
            console.log({ error });
        }
    },
};

export default api;
