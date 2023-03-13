const baseURL = process.env.BASE_URL;
const options = {
	method: 'GET',
	headers: {
		Authorization: 'Bearer ' + process.env.TOKEN,
	},
};

export const getPendingOrder = async () => {
	try {
		const res = await fetch(baseURL + 'orders/getPendingOrders', options);
		const result = await res.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};
export const getAllOrders = async () => {
	try {
		const res = await fetch(baseURL + 'orders/getAllOrders', options);
		const result = await res.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};
