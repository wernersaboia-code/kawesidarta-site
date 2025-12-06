export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fdff]">
      <div className="animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#ccedf8] to-[#8bcae8] mx-auto mb-4" />
        <p className="text-[#2c3e50]">Carregando...</p>
      </div>
    </div>
  );
}