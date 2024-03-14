const Event = () => {
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(event);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search anything you want" />

        <button>Submit Now</button>   
        <button>Submit Now</button>




      </form>
    </div>
  );
};

export default Event;
