import ReactDOM from "react-dom/client";
import Routes from "./routes";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Provider store={}>
		<Routes />
	</Provider>
);
