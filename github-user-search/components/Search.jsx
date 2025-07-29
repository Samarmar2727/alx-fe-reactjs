import { useState } from 'react';
import { fetchUserData, fetchAdvancedUsers } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    setUsers([]); // to delete oldest results

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null); 
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Advanced Search Form */}
      <form onSubmit={handleAdvancedSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Single User Result */}
      {user && (
        <div className="mt-4 p-4 border rounded shadow-sm">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-bold">{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}

      {/* Multiple Users Result */}
      {users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border mb-2 rounded shadow-sm flex items-center gap-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p>{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
