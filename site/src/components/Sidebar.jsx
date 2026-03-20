import docs from "../data/docs";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-6 border-border]">
      <h2 className="font-bold text-lg mb-6">vibe-toast</h2>

      <div className="flex flex-col gap-3 text-sm">
        {docs.map((item) => (
          <a
            key={item.slug}
            href={`/docs?doc=${item.slug}`}
            className="hover:underline"
          >
            {item.title}
          </a>
        ))}
      </div>
    </aside>
  );
}
