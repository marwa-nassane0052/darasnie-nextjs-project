import Introducingpage from "./introducingpage/page"; 
import ServicesPage from "./servicespage/page";

const RootLayout = ({ children }) => {
    return (

        <div>
            <Introducingpage></Introducingpage>
            <ServicesPage></ServicesPage>
        </div>
         );
        };
        
        export default RootLayout;