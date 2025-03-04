export default function Item({ name, quantity, category }) {

    
    return (
        <section className="bg-gray-800 m-4 p-2 max-w-sm">
            <ul>
            <li className="font-bold text-lg">{name}  
                <div className="text-sm ">
                Buy {quantity} in {category}
                </div>
            </li>
            </ul>
        </section>
    );
}
