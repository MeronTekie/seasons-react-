import React from 'react'

const getSeason =(lat,month)=>{
  if(month > 2  && month < 9){
    //ternary operation
    return  lat > 0 ? 'Summer':'Winter';
  } else {
    return    lat > 0 ? 'Winter':'Summer';
  }
}


const SeasonDisplay = (props) => {
  console.log(props.err);
  console.log(props.lat)
  const season =getSeason(props.lat ,new Date().getMonth());
  const text = season ==='Winter'? 'Blurr it is chilly':'Lets hit the beach';
  const icon = season ==='Winter'?'snowflake':'sun';
    return (
    <div> 
      <i className={`${icon} icon` }/>
      {text}
      <i className={`${icon} icon` }/>
    </div>
  )
}

export default SeasonDisplay