

const LoginPage = () => {

    return (

        (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
                <h1 className="text-4xl font-bold mb-4 text-indigo-800">Selamat Datang B2B App</h1>
                <p className="mb-6 text-gray-600">Lihat dan Check Barang Barang.</p>
                <a href="/notes" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl shadow">
                    Login
                </a>
            </div>

        )
    );
};


export default LoginPage;