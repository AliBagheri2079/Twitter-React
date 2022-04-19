import axios from "axios";
import { errorMessage } from "../utils/toast";

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.error(error);
        errorMessage("There is a problem");
    }

    return Promise.reject(error);
});

export default axios;

// export default  {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     delete: axios.delete
// };