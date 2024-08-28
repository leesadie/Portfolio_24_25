import ClientOnly from "../components/ClientOnly";
import ForestarClient from "./ForestarClient";

const ForestarPage = () => {
    return (
        <ClientOnly>
            <ForestarClient />
        </ClientOnly>
    );
}

export default ForestarPage;