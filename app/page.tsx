export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Bypass Government VPN Blocks<br />
          <span className="text-[#58a6ff]">with Rotating Protocols</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          VPN Bypass Toolkit automatically switches between OpenVPN, WireGuard, IKEv2, and SSTP
          the moment a block is detected — keeping journalists, activists, and everyday users connected.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $19/mo
        </a>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {["OpenVPN", "WireGuard", "IKEv2", "SSTP"].map((p) => (
            <div key={p} className="bg-[#161b22] border border-[#30363d] rounded-lg py-3 px-2 text-[#58a6ff] font-semibold">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Config files for 4 protocols",
              "Auto-rotation recommendations",
              "Real-time block detection alerts",
              "Step-by-step connection guides",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which countries is this designed for?",
              a: "VPN Bypass Toolkit is built for users in regions with heavy internet censorship — including but not limited to China, Iran, Russia, and Belarus. It works anywhere VPN protocols are actively blocked."
            },
            {
              q: "How does automatic protocol rotation work?",
              a: "Our backend monitors connection success rates across all supported protocols. When a block is detected, you receive an instant alert with a recommended protocol switch and a ready-to-use config file."
            },
            {
              q: "Do I need technical knowledge to use this?",
              a: "No. Each protocol comes with a plain-language step-by-step guide for Windows, macOS, iOS, and Android. Most users are connected in under five minutes."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} VPN Bypass Toolkit. All rights reserved.
      </footer>
    </main>
  );
}
