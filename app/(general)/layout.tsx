import { SidebarNav } from '../components/SidebarNav';
// LRC ( layout Root Components) snipet para generar el rootLayout
export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="min-h-screen flex flex-row bg-gray-100 justify-between">
        
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          {/* Nuestra navegacion */}
          <SidebarNav />
        </div>

        <div className='container'>
          {/* Lo que generemos desde las carpetas  */}
          {children}
        </div>
      </div>

    </main>
  );
}
