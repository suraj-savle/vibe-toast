export default function FeatureGrid() {
  const features = [
    { emoji: "🎯", title: "Simple API", desc: "Intuitive and easy to use" },
    { emoji: "⚡", title: "Lightweight", desc: "Zero dependencies, tiny size" },
    { emoji: "🎨", title: "Customizable", desc: "Fully themeable" },
    { emoji: "📱", title: "Responsive", desc: "Works on all devices" },
    { emoji: "🔧", title: "TypeScript", desc: "Full type support" },
    { emoji: "🚀", title: "Performant", desc: "Optimized animations" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {features.map((feature, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-lg">
          <div className="text-2xl mb-2">{feature.emoji}</div>
          <h4 className="font-medium text-sm">{feature.title}</h4>
          <p className="text-xs text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}