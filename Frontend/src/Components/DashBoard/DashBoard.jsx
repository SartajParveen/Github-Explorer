import React, { useState } from 'react';
import './Dashboard.css';
import searchIcon from '../../assets/search.jpg';

const DashBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [users,setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userType,setUserType] = useState(false);

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const getGithubRepos = async () => {
    if (!searchQuery.trim()) return alert('Please enter a repository name');

    setLoading(true);
    setError('');
    setRepos([]);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setRepos(data.items.slice(0, 10)); // Limit to top 10 results
      } else {
        setError('No repositories found.');
      }
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  const getGithubUsers = async ()=>{
    if (!searchQuery.trim()) return alert('Please enter a user name');

    setLoading(true);
    setError('');
    setUsers([]);

    try{
      const response = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setUsers(data.items);

    } catch(error){
      console.error("Error fetching GitHub users:",error);
      setError("Something went wrong. Please try again");
    } finally{
      setLoading(false);
    }
  }

  const searchTypeUser=()=>{
    setUserType(true);
  };
const searchTypeRepo=()=>{
    setUserType(false);
  }

  return (
  // <>
  // <div className='searchType'>
  //   <h2 onClick={change}>Users</h2> 
  //   <h2>Repositories</h2>
  // </div>
  //   <div className="searchBar">
  //     <div className="searchForm">
  //       <input
  //         type="text"
  //         placeholder="Search GitHub Repositories..."
  //         className="search"
  //         onChange={changeHandler}
  //         value={searchQuery}
  //       />
  //       <img
  //         onClick={getGithubRepos}
  //         className="icon"
  //         src={searchIcon}
  //         alt="Search"
  //       />
  //     </div>

  //     {loading && <p>Loading...</p>}
  //     {error && <p style={{ color: 'red' }}>{error}</p>}

  //     <div className="repoResults">
  //       {repos.map((repo) => (
  //         <div key={repo.id} className="repoCard">
  //           <h3>{repo.full_name}</h3>
  //           <p>{repo.description || 'No description'}</p>
  //           <p><strong>⭐ Stars:</strong> {repo.stargazers_count}</p>
  //           <p><strong>🍴 Forks:</strong> {repo.forks_count}</p>
  //           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
  //             View on GitHub
  //           </a>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  //   </>


   <div className="searchBar">
<div className='searchType'>
      <h2  onClick={searchTypeUser} className = {userType ? "clickUser" : 'users'} >Users</h2> <h2  onClick={searchTypeRepo} className={userType==false ? 'clickUser' : 'repos'} >Repositories</h2>
      </div>
      
     {userType==false ? 
     <div>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search GitHub Repositories..."
          className="search"
          onChange={changeHandler}
          value={searchQuery}
        />
        <img
          onClick={getGithubRepos}
          className="icon"
          src={searchIcon}
          alt="Search"
        />
      </div>

      {loading && <p className='load'>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="repoResults">
        {repos.map((repo) => (
          <div key={repo.id} className="repoCard">
            <h3>{repo.full_name}</h3>
            <p>{repo.description || 'No description'}</p>
            <p><strong>⭐ Stars:</strong> {repo.stargazers_count}</p>
            <p><strong>🍴 Forks:</strong> {repo.forks_count}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

        ))}
     
      </div>

      </div>

      :


      <div >
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search GitHub Users..."
          className="search"
          onChange={changeHandler}
          value={searchQuery}
        />
        <img
          onClick={getGithubUsers}
          className="icon"
          src={searchIcon}
          alt="Search"
        />
      </div>

      {loading && <p className='load'>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="repoResults">
        {users.map((user) => (
          <div key={user.id} className="repoCard">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
            <h3>{user.login}</h3>
            <p><strong>Type:</strong> {user.type}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
}


    </div>


  );
};

export default DashBoard;

















// // import React from 'react'
// // import './DashBoard.css'

// // import searchIcon from '../../assets/searchIcon.jpg'
// // import { useState } from 'react'


// // const DashBoard = () => {
  
// //   const [formData,setformData]=useState({
// //     search:""
// //   });

// //   const [response ,setResponse] = useState(false);
// //   const [repoUrl,setrepotUrl] = useState("");
// //   const changeHandler =  (e) =>{
// //     setformData({...formData,[e.target.name]:e.target.value})
// //   }

// //   const getGithubRepos=async()=>{
// //     const response =await fetch('http://localhost:4000/search',{
// //       method:'POST',
// //       headers:{
// //         Accept:'application/json',
// //         'Content-Type':'application/json'
// //       },
// //       body:JSON.stringify(formData),
// //     })

// //     try{
// //       const data = await response.json();
// //       if(data){
// //         setrepotUrl(data);
// //         setResponse(true);
// //       }
// //       else{
// //         alert("Failed to get repos");
// //       }
// //     }
// //     catch(error){
// //       console.error('Error in finding repo',error);
// //       alert('Something went wrong');
// //     }
// //   }
// //   return (
// //     <div className='searchBar'>
// //       <form action="">
// //       <input onChange={changeHandler} className='search' type="text" />
// //       <img onClick={getGithubRepos} className='icon' src={searchIcon} alt="" />
      
// //       {response && <div className="answer">
// //         <p className="finalrepos">Repositories: <a href={repoUrl}>{repoUrl} </a> </p>
// //       </div>
// // }
// // </form>
// //     </div>
    
// //   )
// // }

// // export default DashBoard






// import React, { useState } from 'react';

// import './DashBoard.css';
// import searchIcon from '../../assets/searchIcon.jpg';

// const DashBoard = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [repos, setRepos] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
// const [users, setUsers] = useState([]);
//   const [userType,setuserType]=useState();

//   const changeHandler = (e) => {
//     setSearchQuery(e.target.value);
//   };





//   const getGithubUsers = async () => {
//     if (!searchQuery.trim()) return alert('Please enter a username');

//     setLoading(true);
//     setError('');
//     setUsers([]);

//     try {
//       const response = await fetch(
//         `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`
//       );
//       const data = await response.json();

//       if (data.items && data.items.length > 0) {
//         setUsers(data.items.slice(0, 10)); // Top 10 matches
//       } else {
//         setError('No users found.');
//       }
//     } catch (error) {
//       console.error('Error fetching GitHub users:', error);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getGithubRepos = async () => {
//     if (!searchQuery.trim()) return alert('Please enter a repository name');

//     setLoading(true);
//     setError('');
//     setRepos([]);

//     try {
//       const response = await fetch(
//         `http://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}`
//       );
//       const data = await response.json();

//       if (data.items && data.items.length > 0) {
//         setRepos(data.items.slice(0, 10)); // Limit to top 10 results
//       } else {
//         setError('No repositories found.');
//       }
//     } catch (error) {
//       console.error('Error fetching GitHub repos:', error);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };


//   const searchTypeUser=()=>{
//     setuserType(true);
//   };
// const searchTypeRepo=()=>{
//     setuserType(false);
//   }


//   return (


//     <div className="searchBar">
// <div className='searchType'>
//       <h2  onClick={searchTypeUser} className = {userType ? "clickUser" : 'users'} >Users</h2> <h2  onClick={searchTypeRepo} className={userType==false ? 'clickUser' : 'repos'} >Repositories</h2>
//       </div>
      
//      {userType==false ? 
//      <div>
//       <div className="searchForm">
//         <input
//           type="text"
//           placeholder="Search GitHub Repositories..."
//           className="search"
//           onChange={changeHandler}
//           value={searchQuery}
//         />
//         <img
//           onClick={getGithubRepos}
//           className="icon"
//           src={searchIcon}
//           alt="Search"
//         />
//       </div>

//       {loading && <p className='load'>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div className="repoResults">
//         {repos.map((repo) => (
//           <div key={repo.id} className="repoCard">
//             <h3>{repo.full_name}</h3>
//             <p>{repo.description || 'No description'}</p>
//             <p><strong>⭐ Stars:</strong> {repo.stargazers_count}</p>
//             <p><strong>🍴 Forks:</strong> {repo.forks_count}</p>
//             <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//               View on GitHub
//             </a>
//           </div>

//         ))}
     
//       </div>

//       </div>

//       :


//       <div >
//       <div className="searchForm">
//         <input
//           type="text"
//           placeholder="Search GitHub Users..."
//           className="search"
//           onChange={changeHandler}
//           value={searchQuery}
//         />
//         <img
//           onClick={getGithubUsers}
//           className="icon"
//           src={searchIcon}
//           alt="Search"
//         />
//       </div>

//       {loading && <p className='load'>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div className="repoResults">
//         {users.map((user) => (
//           <div key={user.id} className="repoCard">
//             <img
//               src={user.avatar_url}
//               alt={`${user.login} avatar`}
//               style={{ width: '100px', height: '100px', borderRadius: '50%' }}
//             />
//             <h3>{user.login}</h3>
//             <p><strong>Type:</strong> {user.type}</p>
//             <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//               View Profile
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
// }


//     </div>

//   );
// };

// export default DashBoard;
