import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section>
            <p className="text-3xl font-bold underline">Home Page</p>

            <Link to="/links">Go to my links.</Link>
        </section>
    );
}
