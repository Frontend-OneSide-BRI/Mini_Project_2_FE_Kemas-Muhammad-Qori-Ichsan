import Featured from "../components/Featured";
import Heroes from "../components/Heroes";
import Navbar from "../components/Navbar";

function Main() {
    const apiKey = process.env.REACT_Main_API_KEY;
    console.log(apiKey);

    return (
        <>
            <Navbar />
            <Heroes />
            <Featured />
        </>
    );
}

export default Main;
