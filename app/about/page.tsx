import ClientOnly from "../components/ClientOnly";
import AboutClient from "./AboutClient";

const AboutPage = () => {
    return (
        <ClientOnly>
            <AboutClient />
        </ClientOnly>
    );
}

export default AboutPage;