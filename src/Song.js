import React from "react";

const EditorialDetail = () => {};
const TableRow = () => {};
const TableCell = () => {};
const CircularProgress = () => {};

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorialInfo: "", completed: false };
  }

  render() {
    const { editorialInfo, completed } = this.state;
    return editorialInfo ? (
      editorialInfo.map((info) =>
        info.items.map((item) => (
          <EditorialDetail
            key={item.skey}
            brand={item.brand}
            prdname={item.prdname}
            value1={item.value1}
            value2={item.value2}
            value5={item.value5}
            value6={item.value6}
            image={item.image}
          />
        ))
      )
    ) : (
      <TableRow>
        <TableCell colSpan="7" align="center">
          <CircularProgress variant="determinate" value={completed} />
        </TableCell>
      </TableRow>
    );
  }
}
