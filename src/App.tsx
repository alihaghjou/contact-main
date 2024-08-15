function App() {
  return (
    <main className="main">
      <h1 className="font-bold mb-4">Contact Us</h1>
      <div className="flex flex-col min-[375px]:flex-row flex-wrap gap-6 w-full">
        <div className="inputSection">
          <label htmlFor="">First Name</label>
          <input type="text" className="input" />
        </div>
        <div className="inputSection">
          <label htmlFor="">Last Name</label>
          <input type="text" className="input" />
        </div>
      </div>

      <div className="inputSection">
        <label htmlFor="">Email Address</label>
        <input type="text" className="input w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">Query Type</label>
        <div className="inputSection">
          <div className="input radioinputSection">
            <input type="radio" name="" id="" />
            <label htmlFor="">General Enquiry</label>
          </div>
          <div className="input radioinputSection">
            <input type="radio" name="" id="" />
            <label htmlFor="">Support Request</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">Message</label>
        <textarea name="" id="" className="input"></textarea>
      </div>
      <div className="flex justify-center items-center gap-4">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">I consent to being contacted by the team</label>
      </div>
      <button className="bg-green-600 text-white p-4 rounded-lg">Submit</button>
    </main>
  );
}

export default App;
