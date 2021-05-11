import logo from './logo.svg';
import Card from './Card';
import Sdata from './Sdata';
import './App.css';

function App() {
  //console.log(Sdata);
  return (
    <>
      <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
      {Sdata.map((val, index) => {
        console.log(index);
        return (
          <Card
            key={val.id}
            imgscr={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.links}
          />
        );
      })}

    </>
  );
}

export default App;
