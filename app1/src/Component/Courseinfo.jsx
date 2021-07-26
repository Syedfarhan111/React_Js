 const Courseinfo = ({Cname,cityNmae,MobileNo,instituteName}) =>{
return (  <table border= "4px">
    <h3 style={{color:"purple"}}>Institues</h3>
<tr>
  <th>Course Name</th>
  <th>:</th>
  <th style={{color:"red"}}>{Cname}</th>
</tr>  
<tr>
  <th>Institite</th>
  <th>:</th>
  <th style={{background:"blue"}}>{instituteName} </th>
</tr>  
<tr>
  <th>Contact</th>
  <th>:</th>
  <th >{MobileNo} </th>
</tr>
<tr>
  <th>City</th>
  <th>:</th>
  <th>{cityNmae} </th>
</tr>
</table> 
);


}
export  default Courseinfo;