import ClientOnly from "../components/ClientOnly";
import ReachoutClient from "./ReachoutClient";

const ReachoutPage = () => {
    return (
        <ClientOnly>
            <ReachoutClient />
        </ClientOnly>
    );
}

export default ReachoutPage;