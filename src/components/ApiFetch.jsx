// import React, { useState, useEffect } from 'react';

// const LaunchesList = () => {
//   // State for storing launches data and loading state
//   const [launches, setLaunches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch launches data on component mount
//   useEffect(() => {
//     const fetchLaunches = async () => {
//       try {
//         const response = await fetch('https://api.spacexdata.com/v3/launches');
//         if (!response.ok) {
//           throw new Error('Failed to fetch launches');
//         }
//         const data = await response.json();
//         setLaunches(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLaunches();
//   }, []);

//   // Loading and error handling
//   if (loading) {
//     return <div className="text-center text-lg">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-lg text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">SpaceX Launches</h1>
      
//       {/* Map over launches data and display each launch card */}
     

// <a href={`/missions/${launch.flight_number}`}>


// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {launches.map((launch) => (
//           <div key={launch.flight_number} className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold text-gray-800">{launch.mission_name}</h2>
//             <p className="text-gray-600">Launch Year: {launch.launch_year}</p>
//             <p className="text-gray-600">Rocket Name: {launch.rocket.rocket_name}</p>
//             <p className="text-gray-600">Rocket Type: {launch.rocket.rocket_type}</p>
//           </div>






//         ))}
//       </div>


// </a>


//     </div>
//   );
// };

// export default LaunchesList;





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

const LaunchesList = () => {
  // State for storing launches data and loading state
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch launches data on component mount
  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        if (!response.ok) {
          throw new Error('Failed to fetch launches');
        }
        const data = await response.json();
        setLaunches(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  // Loading and error handling
  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">SpaceX Launches</h1>
      
      {/* Map over launches data and display each launch card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {launches.map((launch) => (
          <div key={launch.flight_number} className="bg-white p-6 rounded-lg shadow-md">
            {/* Each launch card is now a clickable link */}
            <Link
              to={`/missions/${launch.flight_number}`} // Using Link from react-router-dom for internal routing
              className="block hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">{launch.mission_name}</h2>
              <p className="text-gray-600">Launch Year: {launch.launch_year}</p>
              <p className="text-gray-600">Rocket Name: {launch.rocket.rocket_name}</p>
              <p className="text-gray-600">Rocket Type: {launch.rocket.rocket_type}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchesList;

