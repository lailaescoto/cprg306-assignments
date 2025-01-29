export default function Item({ name, quantity, category }) {

    // const { name, quantity, category } = props;

    // const name = props.name;
    // const quantity = props.quantity;
    // const category = props.category;
    
    return (
        <section className="bg-red-200 m-2 p-2">
            <ul>
            <li className="font-bold text-lg text-red-800">{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
            </ul>
        </section>
    );
}
