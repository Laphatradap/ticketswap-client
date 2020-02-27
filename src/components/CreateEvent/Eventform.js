import React from "react";

export default function EventForm(props) {
  console.log("props of EventForm", props);

  return (<form onSubmit={props.onSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={props.values.name}
            onChange={props.onChange}
          />
        </label>

        <label>
          Description:
          <input
            name="description"
            value={props.values.description}
            onChange={props.onChange}
          />
        </label>

        <label>
          Start Date:
          <input
            name="start_date"
            type="date"
            value={props.values.start_date}
            onChange={props.onChange}
          />
        </label>

        <label>
          End Date:
          <input
            name="end_date"
            type="date"
            value={props.values.end_date}
            onChange={props.onChange}
          />
        </label>

        <label>
          ImageUrl:
          <input
            name="imgUrl"
            value={props.values.imgUrl}
            onChange={props.onChange}
          />
        </label>

        <button type="submit">Save</button>

        {/* <input type="submit" /> */}
      </form>)
}