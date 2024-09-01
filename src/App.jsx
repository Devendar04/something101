import React from 'react';
import UploadSection from './components/UploadSection';
import OutputSection from './components/OutputSection';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-700 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-lg font-semibold">ISL to Txt</h1>
        <div className="settings-icon">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01m-6.938 4h13.856c.948 0 1.816-.48 2.338-1.222l2.829-4.24c.73-1.095.73-2.464 0-3.559l-2.829-4.24A2.671 2.671 0 0018.938 4H5.062c-.948 0-1.816.48-2.338 1.222l-2.829 4.24c-.73 1.095-.73 2.464 0 3.559l2.829 4.24c.522.742 1.39 1.222 2.338 1.222z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex justify-center items-start gap-8 py-16 px-8">
        <UploadSection />
        <div className="w-full">
          <OutputSection />

          <LanguageSelector />
        </div>
      </main>
    </div>
  );
};

export default App;
