import React from 'react'

export default function Footer() {
  return (
    
    <footer className="bg-[#292929]">
    <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Next.js
          </a>
        </div>
  
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Remix
          </a>
        </div>
  
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Svelte
          </a>
        </div>
  
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Textarea
          </a>
        </div>
  
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Tailwind
          </a>
        </div>
  
        <div className="px-5 py-2">
          <a href="#" className="text-sm text-gray-500 hover:text-[#e40000]">
            Contact
          </a>
        </div>
      </nav>
      <br></br>
      <br></br>
      <p className="mt-8 text-center">
        <span className="mx-auto mt-2 text-sm text-gray-500">
          Copyright © NoteVault
          <a href="#" className="mx-2 text-[#e40000] hover:text-gray-500 " rel="noopener noreferrer">
            @NoteVault
          </a>
          .Since 2023
        </span>
      </p>
    </div>
  </footer>            
  )
}
