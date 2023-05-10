import { Routes as Switch, BrowserRouter as MyRouter, Route } from "react-router-dom";
import { Home, Products, SingleProduct } from "./pages";
interface RoutesProps {}

const Routes = (props: RoutesProps) => {
	return (
		<MyRouter>
			<Switch>
				<Route path="" element={<Home />} />
				<Route path="products">
					<Route index element={<Products />} />
					<Route path=":productID" element={<SingleProduct />} />
				</Route>
			</Switch>
		</MyRouter>
	);
};

export default Routes;
