import React from "react";

export default function TicketForm(props) {
  console.log("props of TicketForm", props);

  return (<form onSubmit={props.onSubmit}>
        <label>
          Title:
          <input
            name="title"
            value={props.values.title}
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
          Price in euro:
          <input
            name="price"
            value={props.values.price}
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

        <button type="submit">Create</button>

        {/* <input type="submit" /> */}
      </form>)
}