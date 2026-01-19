const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 select-none">
      <main className="px-6 md:px-8 pt-10 pb-16">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Dashboard
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Your current score, risk snapshot, and recent activity.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">
                Last updated:
              </span>
              <span className="text-xs font-semibold text-gray-900">Today</span>
            </div>
          </div>

          {/* Top stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Credit Score"
              value="742"
              chip="Good"
              chipTone="good"
              sub="Range: 300–850"
            />
            <StatCard
              title="Risk Level"
              value="Low"
              chip="Stable"
              chipTone="low"
              sub="Based on recent behavior"
            />
            <StatCard
              title="Utilization"
              value="28%"
              chip="Healthy"
              chipTone="good"
              sub="Target: under 30%"
            />
            <StatCard
              title="On-time Payments"
              value="98%"
              chip="Strong"
              chipTone="good"
              sub="Last 12 months"
            />
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Score trend */}
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900">
                  Score Trend
                </h2>
                <span className="text-xs text-gray-500">Last 6 months</span>
              </div>

              {/* Simple “fake chart” (no library needed) */}
              <div className="mt-5 h-40 rounded-xl bg-blue-50 border border-blue-100 flex items-end gap-2 p-4">
                <Bar h="40%" label="Aug" />
                <Bar h="52%" label="Sep" />
                <Bar h="48%" label="Oct" />
                <Bar h="62%" label="Nov" />
                <Bar h="70%" label="Dec" />
                <Bar h="76%" label="Jan" active />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <MiniStat title="Highest" value="760" />
                <MiniStat title="Lowest" value="690" />
                <MiniStat title="Change" value="+18" />
              </div>
            </Card>

            {/* Key factors */}
            <Card>
              <h2 className="text-sm font-semibold text-gray-900">
                Key Factors
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                What impacts your score the most.
              </p>

              <div className="mt-5 space-y-4">
                <Factor label="Payment History" value={92} />
                <Factor label="Credit Utilization" value={78} />
                <Factor label="Credit Age" value={66} />
                <Factor label="Inquiries" value={84} />
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-semibold text-gray-900">Tip</p>
                <p className="mt-1 text-xs text-gray-600">
                  Keep utilization under 30% and avoid new inquiries this month.
                </p>
              </div>
            </Card>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Recent activity */}
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900">
                  Recent Activity
                </h2>
                <button className="text-xs font-semibold text-blue-600 hover:underline">
                  View all
                </button>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-blue-100 bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="bg-blue-50">
                    <tr className="text-xs text-gray-600">
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Amount</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    <Row
                      date="2026-01-10"
                      type="Payment"
                      amount="Rs. 25000"
                      status="On time"
                      tone="good"
                    />
                    <Row
                      date="2025-12-22"
                      type="Loan EMI"
                      amount="Rs. 24000"
                      status="On time"
                      tone="good"
                    />
                    <Row
                      date="2025-12-03"
                      type="Card Bill"
                      amount="Rs. 15000"
                      status="On time"
                      tone="good"
                    />
                    <Row
                      date="2025-11-18"
                      type="New Inquiry"
                      amount="—"
                      status="Recorded"
                      tone="neutral"
                    />
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Alerts */}
            <Card>
              <h2 className="text-sm font-semibold text-gray-900">Alerts</h2>
              <div className="mt-4 space-y-3">
                <Alert
                  title="Utilization is close to 30%"
                  desc="Try paying down your card balance this week."
                  tone="warn"
                />
                <Alert
                  title="No missed payments"
                  desc="Great — keep the streak going."
                  tone="good"
                />
              </div>

              <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                Check Risk Details
              </button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

/* ---------- Small UI pieces ---------- */

const Card = ({ children, className = "" }) => (
  <div
    className={
      "rounded-2xl bg-white shadow-sm border border-blue-100 p-6 " + className
    }
  >
    {children}
  </div>
);

const StatCard = ({ title, value, chip, chipTone, sub }) => {
  const chipClass =
    chipTone === "good"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : chipTone === "low"
        ? "bg-blue-50 text-blue-700 border-blue-100"
        : "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-blue-100 p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-gray-500">{title}</p>
        <span
          className={
            "text-xs font-semibold px-2 py-1 rounded-full border " + chipClass
          }
        >
          {chip}
        </span>
      </div>
      <p className="mt-3 text-2xl font-extrabold text-gray-900">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{sub}</p>
    </div>
  );
};

const MiniStat = ({ title, value }) => (
  <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
    <p className="text-[11px] font-semibold text-gray-600">{title}</p>
    <p className="mt-1 text-sm font-extrabold text-gray-900">{value}</p>
  </div>
);

const Factor = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between text-xs">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="font-semibold text-gray-900">{value}%</span>
    </div>
    <div className="mt-2 h-2 rounded-full bg-blue-50 border border-blue-100 overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const Bar = ({ h, label, active }) => (
  <div className="flex-1 flex flex-col items-center justify-end gap-2">
    <div
      className={
        "w-full rounded-lg border border-blue-100 " +
        (active ? "bg-blue-600" : "bg-blue-200")
      }
      style={{ height: h }}
    />
    <span className="text-[11px] text-gray-600">{label}</span>
  </div>
);

const Row = ({ date, type, amount, status, tone }) => {
  const pill =
    tone === "good"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : tone === "warn"
        ? "bg-blue-50 text-blue-700 border-blue-100"
        : "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <tr className="text-sm text-gray-800">
      <td className="px-4 py-3 text-xs text-gray-600">{date}</td>
      <td className="px-4 py-3">{type}</td>
      <td className="px-4 py-3">{amount}</td>
      <td className="px-4 py-3">
        <span
          className={
            "text-xs font-semibold px-2 py-1 rounded-full border " + pill
          }
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

const Alert = ({ title, desc, tone }) => {
  const box =
    tone === "warn"
      ? "bg-blue-50 border-blue-100"
      : "bg-blue-50 border-blue-100";

  return (
    <div className={"rounded-xl border p-4 " + box}>
      <p className="text-xs font-extrabold text-gray-900">{title}</p>
      <p className="mt-1 text-xs text-gray-600">{desc}</p>
    </div>
  );
};

export default Dashboard;
