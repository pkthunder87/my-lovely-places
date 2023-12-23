function EntryForm() {
  return (
    <div className="bg-accent-teal flex h-[85%] w-[90%] flex-col items-center justify-center rounded-xl drop-shadow-lg">
      <form className=" -ml-2 mt-8 flex h-full w-[90%] flex-col items-center gap-6">
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="current_location"
          name="current_location"
          placeholder="Current Location"
        />
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="date"
          name="date"
          placeholder="Date"
        />
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="location_type"
          name="location_type"
          placeholder="Location Type"
        />
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="primary_mood"
          name="primary_mood"
          placeholder="Primary Mood"
        />
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="secondary_moods"
          name="secondary_moods"
          placeholder="Secondary Moods"
        />
        <textarea
          className="input-login flex h-72 w-full rounded-xl text-lg  "
          disabled={false}
          id="current_location"
          name="current_location"
          placeholder="Current Location"
        ></textarea>
        <div className=" flex gap-8">
          <button className="button-general bg-accent-teal h-10 w-32 border-2 ">
            Save Draft
          </button>
          <button className="button-general h-10 w-32 bg-tint-teal drop-shadow-md">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
