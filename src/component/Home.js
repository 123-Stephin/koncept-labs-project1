import { useEffect, useState } from 'react';
import './Home.css'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://project-bd1df-default-rtdb.firebaseio.com/.json')
      .then(response => response.json())
      .then(data => {
        const dataArray = [];
        for (const key in data) {
          dataArray.push({
            id: key,
            name: data[key].name,
            age: data[key].age,
            domain: data[key].domain
          });
        }
        setData(dataArray);
      });
  }, []); 

  return (
    <div className='fire-base' >
      <h2  className='title'>Data from Firebase</h2>
      <div className='card'>
        {data.map(item => (
          <div className='card-display' key={item.id}>
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Domain: {item.domain}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
