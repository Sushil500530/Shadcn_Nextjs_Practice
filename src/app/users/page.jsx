
import { DataTable } from "@/components/data-table";
import { columns} from "./columns";

async function getUsers() {
 const res = await fetch("https://66c9fca059f4350f064e16fc.mockapi.io/crud")
 const data = await res.json();
 return data
  }
export default async function Users() {
const data = await getUsers();
console.log(data)

    return (
        <div className='py-12'>
            <div className="container !w-1/2 !mx-auto">
                <h1 className="text-4xl font-bold my-8 text-center">Show All Users</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}
