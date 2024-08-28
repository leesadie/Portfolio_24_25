import ClientOnly from "../components/ClientOnly";
import LabClient from "./LabClient";

const LabPage = () => {
    return (
        <ClientOnly>
            <LabClient />
        </ClientOnly>
    );
}

export default LabPage;