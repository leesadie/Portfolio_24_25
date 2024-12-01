import ClientOnly from "../components/ClientOnly";
import AboutClient from "./AboutClient";
import AboutClient2 from "./AboutClient2";

const AboutPage = () => {
    return (
        <ClientOnly>
            <AboutClient2 />
        </ClientOnly>
    );
}

export default AboutPage;