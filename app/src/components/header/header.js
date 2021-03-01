import { Link } from '@reach/router';

// Constants
import { ROUTES } from '../../constants';

const Header = () => {
    return (
        <header className="absolute w-full px-4 py-6 bg-white z-20">
            <div className="container mx-auto flex items-center justify-between flex-wrap ">
                <div className="flex items-center flex-no-shrink text-black mr-6">
                    <span className="font-semibold text-2xl tracking-tight" data-testid="logo">Doc.ly</span>
                </div>

                <div className="justify-self-end">
                    <div className="text-sm">
                        <Link to={ROUTES.FIND_DOCTOR} className="mr-6 font-bold hover:underline">Find a Doctor</Link>
                        <Link to="/" className="mr-6 hover:underline">Services</Link>
                        <Link to="/" className="mr-6 hover:underline">Care plans</Link>
                        <Link to="/" className="mr-6 hover:underline">About</Link>
                        <Link to="/" className="hover:underline">Emergency</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;