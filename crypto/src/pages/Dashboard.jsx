import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header';
import Tabs from '../components/Dashboard/Tabs/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search/Search';
import Page from '../components/Pagination/Page';
import Loader from '../components/Common/Loader/Loader'; // Import the Loader component

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [page, setPage] = useState(1);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '100',
      page: '1',
      sparkline: 'false'
    },
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-XpECphzQwwMWcY4WgQHpbfzS' }
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Ensure loading is false even if there’s an error
      });
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  return (
    <div className='min-h-screen bg-gray-950'>
      <Header />
      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <Loader /> {/* Display loader while loading */}
        </div>
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />
          {!search && <Page page={page} handlePageChange={handlePageChange} />}
        </>
      )}
    </div>
  );
}

export default Dashboard;
