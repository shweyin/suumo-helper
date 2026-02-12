import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Suumo Helper</h1>
          <p className="text-blue-200 text-sm mt-1">物件検索ヘルパー</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            物件を探す
          </h2>
          <p className="text-gray-600">
            Suumoでの物件探しをサポートするツールです。
          </p>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
        <p>Suumo Helper &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
