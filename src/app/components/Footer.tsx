export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Aakash Subedi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
