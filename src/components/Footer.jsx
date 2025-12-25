export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm">
          © 2025 JobFinder. All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0 text-sm">
          <p className="cursor-pointer hover:underline">Privacy</p>
          <p className="cursor-pointer hover:underline">Terms</p>
          <p className="cursor-pointer hover:underline">Contact</p>
        </div>

      </div>
    </footer>
  )
}
