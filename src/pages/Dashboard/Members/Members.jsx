import { columns } from "@/components/Members/Column";
import { DataTable } from "@/components/Members/DataTable";
import { members } from "@/constants/data";
import React from "react";

const Members = () => {
  return (
    <div>
      Members
      <DataTable columns={columns} data={members} />
    </div>
  );
};

export default Members;
