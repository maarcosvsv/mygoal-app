import Navbar from '../components/Navbar';
import BannerMeta from '../components/BannerMeta';
import Ranking from '../components/Ranking';

function Dashboard() {


  return (
    <>
        <Navbar />
        <BannerMeta />

        <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <Ranking />
            </div>
        </div>
    </>
  )
}

export default Dashboard