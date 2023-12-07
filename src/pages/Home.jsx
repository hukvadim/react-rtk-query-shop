import { Helmet } from "react-helmet-async";
import Catalog from "../components/Catalog";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>React RTK Query Shop</title>
            </Helmet>
            <Catalog />
        </>
    );
}
