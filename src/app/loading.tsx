 '"use client"'

 export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-black relative">
       <div className="absolute h-full w-full flex justify-center items-center z-[9999]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-300"></div>
    
       </div>
      </div>
    );
 }