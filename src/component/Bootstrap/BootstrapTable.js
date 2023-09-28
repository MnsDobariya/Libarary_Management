import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const BoostrapTable = ({rows,columns}) => {
        const columnData = columns.map((x)=> (x.label))
        console.log(columnData)
  return (
    <div>
      <BootstrapTable
        keyField='id'
        data={rows}
        columns={columnData}
        striped
        hover
        condensed
        // selectRow={selectRow}
      />
    </div>
  );
};

export default BoostrapTable;
