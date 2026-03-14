export default function RightPanel() {
  return (
    <aside className="w-72 border-l p-6 border-[var(--border)]">

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold mb-2">
            Latest Feature
          </h3>

          <p className="text-sm text-gray-600">
            Promise based toasts are now supported.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            News
          </h3>

          <p className="text-sm text-gray-600">
            notiflow v1 launching soon 🚀
          </p>
        </div>

      </div>

    </aside>
  );
}