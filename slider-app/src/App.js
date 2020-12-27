import React, {useEffect, useState} from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    if (index > people.length - 1){
      setIndex(0)
    };
    if (index < 0){
      setIndex(people.length -1 )
    };
  }, [index, people]);

  useEffect(()=> {
    let slider = setInterval(() => {
        setIndex(index + 1);
    }, 3000);
    
    return () => clearInterval(slider);
  }, [index]);

  return (
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2> 
    </div>
    <div className='section-center'>
        {people.map((person, personIndex)  => {
            let position = 'nextSlide';
            if (personIndex === index){
              position = 'activeSlide';
            };
            if (personIndex === index -1 || (index === 0 && personIndex === people.length -1)){
              position = 'lastSlide';
            };
           return (
            <article className={position} key={person.id}>
                <img src={person.image} alt={person.name} className='person-img'/>
              <h4>{person.name}</h4>
              <p className='title'>{person.title}</p>
              <p className='text'>{person.quote}</p>
            </article>
          );
        })}
        <button onClick={() => setIndex(index - 1)} className='prev'>#</button>
        <button onClick={() => setIndex(index + 1)} className='next'>#</button>
    </div>
  </section>
  );
}

export default App;
