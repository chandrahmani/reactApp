const Bike = () => {
    return (
      <section>
        <h1>Welcome to Bajaj Bike</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Bajaj Pulsar N160</li>
          <li className="list-group-item">Bajaj Pulsar 125</li>
          <li className="list-group-item">Bajaj Pulsar 150</li>
          <li className="list-group-item">Bajaj Pulsar RS 200</li>
          <li className="list-group-item">Bajaj Dominar 400</li>
          <li className="list-group-item">Bajaj Platina 110</li>
          <li className="list-group-item">Bajaj Pulsar N250</li>
          <li className="list-group-item">Bajaj Avenger Street 160</li>
        </ul>
      </section>
    );
  };
  
  export const Detail = () => {
    return (
      <section>
        <h1>Pulsar N160 Bajaj</h1>
        <p>
          Bajaj Pulsar N160 is a street bike available at a starting price of Rs.
          1,24,264 in India. It is available in 2 variants and 4 colours with top
          variant price starting from Rs. 1,26,420. The Bajaj Pulsar N160 is
          powered by 164.82cc BS6 engine which develops a power of 15.68 bhp and a
        </p>
  
        <hr />
  
        <h1>Pulsar 125 Bajaj</h1>
        <p>
          Bajaj Pulsar 125 is a commuter bike available at a starting price of Rs.
          82,713 in India. It is available in 4 variants and 3 colours with top
          variant price starting from Rs. 90,750. The Bajaj Pulsar 125 is powered
          by 124.4cc BS6 engine which develops a power of 11.64 bhp and a
        </p>
        <hr />
  
        <h1>Pulsar 150 Bajaj</h1>
        <p>
          Bajaj Pulsar 150 is a street bike available at a starting price of Rs.
          1,05,882 in India. It is available in 3 variants and 10 colours with top
          variant price starting from Rs. 1,16,177. The Bajaj Pulsar 150 is
          powered by 149.5cc BS6 engine which develops a power of 13.8 bhp and a
        </p>
        <hr />
      </section>
    );
  };
  
  export const Price = () => {
    return (
      <section>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Pulsar N160 Bajaj - ₹ 1,24,264 </li>
          <li className="list-group-item">Pulsar 125 Bajaj - ₹ 82,713</li>
          <li className="list-group-item">Pulsar 150 Bajaj - ₹ 1,05,882</li>
        </ol>
      </section>
    );
  };
  
  export const Contact = () => {
    return (
      <section>
        <h1>Contact Bajaj </h1>
        <form>
          <label>First name:</label>
          <input type="text" placeholder="First Name" />
          <label>Last name:</label>
          <input type="text" placeholder="Last Name" />
          <button type="submit">Submit </button>
        </form>
      </section>
    );
  };
  
  export const PageNotFound = () => {
    return (
      <section>
        <h1>302 Page not found</h1>
      </section>
    );
  };
  
  export default Bike;
  