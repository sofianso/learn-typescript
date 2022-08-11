import axios from "axios";
// Unlike axios which includes its own type
//  runninng npm i lodash, TS will throw an error that it does not know its type
// you need to install it with npm i --save-dev @types/lodash
import { get } from "lodash";

axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
});

