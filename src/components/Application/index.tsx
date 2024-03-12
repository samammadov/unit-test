import "./style.scss";

const Application = () => {
  return (
    <div className="application">
      <h1>Job application</h1>
      <h4>Section 1</h4>
      <form className="application-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" autoComplete="false" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" autoComplete="false" />
        </div>
        <div className="form-group">
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value=""></option>
            <option value="US">USA</option>
            <option value="UK">UK</option>
            <option value="CA">CANADA</option>
            <option value="IN">INDIA</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">
            <input type="checkbox" />I agree with terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Application;
