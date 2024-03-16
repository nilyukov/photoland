import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CategoryNavMobile = ({ setCatNavMobile }) => {
    const { data } = useFetch('/categories');

    return (
        <div className="w-full h-full bg-primary p-8">
            <div
                onClick={() => setCatNavMobile(false)}
                className="flex justify-end mb-8 cursor-pointer">
                <FiX className="text-3xl" />
            </div>
            <nav className="flex flex-col gap-y-8">
                {data?.map((category) => (
                    <Link
                        key={category.id}
                        to={`/products/${category.id}`}
                        className="uppercase font-medium"
                        onClick={() => setCatNavMobile(false)}>
                        {category.attributes.title} Cameras
                    </Link>
                ))}
            </nav>
        </div>
    );
};

CategoryNavMobile.propTypes = {
    setCatNavMobile: PropTypes.func
};

export default CategoryNavMobile;
