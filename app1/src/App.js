import logo from './logo.svg';                
import './App.css';
import {Courseinfo} from "./Component/Courseinfo"

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center" }}> <b> List of Institutions </b></h1>

      <tr>
      <td><Courseinfo Cname="Pdac" MobileNo="7706208868" cityNmae="pune" instituteName="3rI technology " /></td>
      <pre>   </pre>
      <td><Courseinfo Cname="c-dac"  MobileNo="254698752" cityNmae="Mumbai" instituteName=" naresh it" /></td>
      <pre>   </pre>
      <td> <Courseinfo Cname=" Hacking" MobileNo="88526947" cityNmae=" Aurangabad" instituteName="itm collage" /></td>
      <pre>   </pre>
      </tr>
      <pre>   </pre> <hr />
   

      <tr>
      <td><Courseinfo Cname="PDAc" MobileNo="7706208868" cityNmae="pune" instituteName="3rI technology " /></td>
      <pre>   </pre>
      <td><Courseinfo Cname="c-dac"  MobileNo="254698752" cityNmae="Mumbai" instituteName=" naresh it" /></td>
      <pre>   </pre>
      <td> <Courseinfo Cname=" Hacking" MobileNo="88526947" cityNmae=" Aurangabad" instituteName="itm collage" /></td>
      <pre>   </pre>
      </tr>
      <pre>   </pre> <hr />
      


      <tr>
      <td><Courseinfo Cname="Pdac" MobileNo="7706208868" cityNmae="pune" instituteName="3rI technology " /></td>
      <pre>   </pre>
      <td><Courseinfo Cname="c-dac"  MobileNo="254698752" cityNmae="Mumbai" instituteName=" naresh it" /></td>
      <pre>   </pre>
      <td> <Courseinfo Cname=" Hacking" MobileNo="88526947" cityNmae=" Aurangabad" instituteName="itm collage" /></td>
      <pre>   </pre>
      </tr>
      <pre>   </pre> <hr />
      
    </div>
  );
}

export default App;
