import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div>
<h1>formulario de registro</h1>

<form>
<label>Identificación </label>
<input type="#" id="Identificacion" required minLength="4" maxLength="10" />   

<form>
<label>Nombre completo:</label>
<input id="Nombre completo:" type="text" required minLength="4" maxLength="100"/>  
</form>

<form>
<label>Género</label>
<select id="Género" type="radio">
<option value="Femenino">Femenino</option>
<option value="Masculino">Masculino</option>
<option value="otro">Otro</option> </select>

</form>

<form>
<label>Número de teléfono:</label>
<input id="Número de teléfono:  " type="tel" pattern='[6-3]' maxLength={10}/>  
</form>

<form>
<label>Correo Electronico</label>
<input id="Correo Electronico" type="email" pattern='@' size={30}/>  

</form>
<input type="submit"/>
</form>
</div>


  );
}

export default App;
