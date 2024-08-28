import * as React from "react"
import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

type FilterInputProps = {
  table: Table<any>
}

export function FilterInput({ table }: FilterInputProps) {
  return (
    <Input
      placeholder="Filter emails..."
      value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  )
}
