import ItemList from "./item-list";

export default function Page() {
    return (
      <main>           
        <h1 className="font-bold text-4xl m-5">Shopping List</h1>
        <ItemList />
    </main>
    );
}