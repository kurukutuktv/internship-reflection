import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-base-200 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Internship Reflection</Link>
        <div className="space-x-4">
          <Link href="/my-profile" className="btn btn-primary">Profile</Link>
          <Link href="/my-journal" className="btn btn-secondary">OJT Journal</Link>
          <Link href="/my-reflection" className="btn btn-accent">Reflection</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
