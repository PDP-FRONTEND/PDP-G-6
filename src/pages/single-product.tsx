import { useParams } from "react-router-dom";

interface SingleProductProps {}

const SingleProduct = (props: SingleProductProps) => {
	const { productID } = useParams<{ productID: string }>();
	return <h1>Product ID : {productID}</h1>;
};

export default SingleProduct;
