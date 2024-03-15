import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const term = searchTerm.trim();
        if (term.length) {
            navigate(`/search?query=${term}`);
            setSearchTerm('');
        } else {
            setIsAnimating(true);
        }
    };

    return (
        <form
            className={`relative w-full ${isAnimating ? 'animate-shake' : 'animate-none'}`}
            onSubmit={handleSubmit}>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
                type="text"
                placeholder="Search for a product..."
            />
            <button
                className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none"
                type="submit">
                <FiSearch className="text-xl" />
            </button>
        </form>
    );
};

export default SearchForm;
