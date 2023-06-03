function App() {
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-red-500">Hai</h1>
        </div>
    );
}

export default App;
