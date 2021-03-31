import * as React from "react";
import { table, tableWrapper } from "./table.module.css";

export const Table: React.FC = (props) => (
  <div className={tableWrapper}>
    <table className={table} {...props} />
  </div>
);
