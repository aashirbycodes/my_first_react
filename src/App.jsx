function App() {
  return (
    <div>
      <h1>This is my first App</h1>

      <ol>
        <li>Laptops</li>
        <li>Mobile</li>
        <li>Smart Watches</li>
        <li>Air Conditioner</li>
      </ol>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
        </tr>

        <tr>
          <td>Aslam</td>
          <td>29</td>
          <td>60</td>
        </tr>

        <tr>
          <td>Ali</td>
          <td>18</td>
          <td>90</td>
        </tr>

        <tr>
          <td>Aashir</td>
          <td>21</td>
          <td>90</td>
        </tr>
      </table>

      <form action="">
        Name: <input type="text" placeholder="Name" />
        <br />
        <br />

        Email: <input type="email" placeholder="Email" />
        <br />
        <br />

        Password: <input type="password" placeholder="Password" />
        <br />
        <br />
      </form>
    </div>
  );
}

export default App;