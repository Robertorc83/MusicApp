import SearchSection from "./components/SearchSection/SearchSection";
import Sidebar from "./components/Sidebar/Sidebar/Sidebar";

function App() {
  return (
    <div className='h-full lg:h-screen font-main overflow-x-hidden'>
      <div className='lg:grid grid-cols-4 lg:grid-cols-6'>
        <Sidebar />
        <SearchSection width='col-span-3 lg:col-span-5' />
      </div>
    </div>
  );
}

export default App;
