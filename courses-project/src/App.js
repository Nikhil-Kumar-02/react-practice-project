import './App.css';
import { apiUrl} from './data'
import Card from './card';
import { useState } from 'react';
import Navbar from './navbar';

function App() {

  const [courseLoaded,LoadCourse] = useState([]);
  const [courseSelected,setcourseSelected] = useState([]);
  
  const apiResponse = async () => {
    var res = await fetch(apiUrl);
    res = await res.json();
    
    const newArray = [];

    const objectsArray = Object.values(res.data);
    objectsArray.forEach((arr) => {
      arr.forEach((ele) => {
        newArray.push(ele);
      })
    })

    LoadCourse(res.data);
    setcourseSelected(newArray);
  }

  if(courseLoaded.length === 0){
    apiResponse();
  }

  function clickHandler(e){
    const newData = courseLoaded[`${e.target.className}`];
    console.log(newData);
    const filteredCourse = [];
    if(newData){
      //we have something apart from all
      newData.forEach((course) => {
        filteredCourse.push(course);
      })
    }
    else{
      console.log(courseLoaded);
      const objectsArray = Object.values(courseLoaded);
      objectsArray.forEach((arr) => {
        arr.forEach((ele) => {
          filteredCourse.push(ele);
        })
      })
    }
    setcourseSelected(filteredCourse);

  }

  return (
    <div className="wrapper">

      <Navbar clickHandler={clickHandler}></Navbar>
      
      <div className='cards'>
        {
          courseLoaded.length !== 0 ? (
            <div className='allCardsHolder'>
            {
              courseSelected.map((course) => {
              return <Card key={course.id} {...course}></Card>
              })
            }
            </div>
          ) : (
            <h1 className='loading'>Loading Courses .....</h1>
          )
        }
      </div>
    </div>
  );
}

export default App;
