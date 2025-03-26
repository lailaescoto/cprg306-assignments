export default function Item({ name, quantity, category, onSelect }) {
    
    return (
        <section className="bg-gray-800 m-4 p-2 max-w-sm" onClick={() => onSelect(name)}>
            <ul>
            <li className="font-bold text-lg cursor-pointer hover:bg-gray-700 p-2 ">
                {name}  
                <div className="text-sm ">
                Buy {quantity} in {category}
                </div>
            </li>
            </ul>
        </section>
    );
}
