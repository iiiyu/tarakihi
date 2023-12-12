export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl">Create</h1>
      <div className="">
        <div>Title:</div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <div>Language:</div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      <div>
        <div>Content:</div>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary">Create</button>
      </div>
    </div>
  );
}
