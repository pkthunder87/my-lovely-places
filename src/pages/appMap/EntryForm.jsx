import locations from '../../data/locations';
import moods from '../../data/moods';

function EntryForm() {
  return (
    <div className="bg-accent-teal flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl drop-shadow-lg">
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

        <select
          className="input-login h-10 w-full rounded-xl text-lg "
          id="location_type"
          name="location_type"
          defaultValue="none"
          required
        >
          <option value="none" disabled hidden>
            Select Location Type
          </option>
          {locations.toSorted().map((location) => {
            return (
              <option value={location} key={location}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </option>
            );
          })}
          <option value="others...">Others...</option>
        </select>

        <select
          className="input-login h-10 w-full rounded-xl text-lg "
          id="primary_mood"
          name="primary_mood"
          defaultValue="none"
          required
        >
          <option value="none" disabled hidden>
            Select 1 Primary Mood
          </option>
          {moods.toSorted().map((mood) => {
            return (
              <option value={mood} key={mood}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </option>
            );
          })}
          <option value="others...">Others...</option>
        </select>

        <p className="-m-4 ml-2 mt-0 self-start text-white">
          Select 0 or more secondary moods :
        </p>
        <div className="ml-4 grid grid-cols-3 text-white">
          {moods.toSorted().map((mood) => {
            return (
              <div key={mood}>
                <input className="" type="checkbox" id={mood} name={mood} />
                <label className="ml-2 mr-2" htmlFor={mood}>
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </label>
              </div>
            );
          })}
        </div>

        <textarea
          className="input-login flex h-64 w-full rounded-xl text-lg  "
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
