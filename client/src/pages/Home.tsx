import { useEffect, useState } from 'react';

export default function Home() {
  const [income, setIncome] = useState(250000);
  const [stopYear, setStopYear] = useState(6);
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [totals, setTotals] = useState({
    mr10: 0, mr20: 0, mr30: 0, mr50: 0,
    mrs10: 0, mrs20: 0, mrs30: 0, mrs50: 0,
  });

  const fmt = (n: number) => {
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 2) + 'M';
    return '$' + Math.round(n / 1000) + 'K';
  };

  useEffect(() => {
    let mr10 = 0, mr20 = 0, mr30 = 0, mr50 = 0;
    let mrs10 = 0, mrs20 = 0, mrs30 = 0, mrs50 = 0;
    const rows: any[] = [];

    for (let y = 1; y <= 50; y++) {
      const mr = y <= stopYear ? income : 0;
      const mrs = income * y;
      if (y <= 10) { mr10 += mr; mrs10 += mrs; }
      if (y <= 20) { mr20 += mr; mrs20 += mrs; }
      if (y <= 30) { mr30 += mr; mrs30 += mrs; }
      mr50 += mr; mrs50 += mrs;

      if (y <= 30) {
        rows.push({
          year: y,
          mr: fmt(mr),
          mrs: fmt(mrs),
          gap: fmt(mrs - mr),
        });
      }
    }

    setTableRows(rows);
    setTotals({ mr10, mr20, mr30, mr50, mrs10, mrs20, mrs30, mrs50 });
  }, [income, stopYear]);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{
      backgroundImage: 'radial-gradient(circle at top right, rgba(0,212,212,0.15), transparent 30%)'
    }}>
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">RENEWALSFORLIFE</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Income Model Paradigm Shift</p>
            </div>
            <div className="text-right text-sm text-muted-foreground italic">
              <p>Real wealth is agency, opportunity & time.</p>
              <p>Design the life first.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 text-xs tracking-widest uppercase text-muted-foreground">
          <div className="w-6 h-px bg-muted-foreground"></div>
          <span>The math most Americans were never shown</span>
        </div>

        {/* Hero Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
          SAME SKILL.<br />
          <span className="text-accent">DIFFERENT</span> COMPENSATION STRUCTURE.
        </h2>

        {/* Video Section */}
        <div className="mb-16">
          <div className="aspect-video bg-card rounded-lg overflow-hidden border border-border shadow-2xl">
            <div id="wistia-container" className="w-full h-full">
              <script src="https://fast.wistia.com/embed/mvpjltt2t2.js" async type="module"></script>
              <style>{`wistia-player[media-id='mvpjltt2t2']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/mvpjltt2t2/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
              {/* @ts-ignore */}
              <wistia-player media-id="mvpjltt2t2" aspect="1.7777777777777777"></wistia-player>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="bg-card/30 border border-border rounded-2xl p-8 md:p-12 mb-12" style={{
          background: 'linear-gradient(180deg, rgba(0,212,212,0.04), rgba(0,212,212,0.01))'
        }}>
          {/* Pythagoras Quote */}
          <div className="text-center mb-12 p-6 border border-border rounded-lg bg-card/50">
            <p className="text-primary italic text-lg mb-2">
              "Numbers have a way of taking a man by the hand and leading him down the path of reason."
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">— Pythagoras</p>
          </div>

          {/* Sliders */}
          <div className="mb-12 p-6 border border-border rounded-lg bg-card/50">
            <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Personalize the math — enter your situation</h3>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-muted-foreground">Year 1 Income</label>
                <span className="text-2xl font-bold text-primary">{fmt(income)}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-destructive">Both stop working — year</label>
                <span className="text-2xl font-bold text-destructive">Year {stopYear}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={stopYear}
                onChange={(e) => setStopYear(Number(e.target.value))}
                className="w-full accent-accent"
              />
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border border-destructive/50 rounded-lg p-6 bg-destructive/10">
              <h3 className="text-2xl font-bold text-destructive mb-2">Mr. Transactional</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Linear — income stops when work stops</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">10-year total</span>
                  <span className="font-bold text-destructive">{fmt(totals.mr10)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">30-year total</span>
                  <span className="font-bold text-destructive">{fmt(totals.mr30)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Both stop working</span>
                  <span className="font-bold text-destructive">Year {stopYear}</span>
                </div>
              </div>
            </div>

            <div className="border border-accent/50 rounded-lg p-6 bg-accent/10">
              <h3 className="text-2xl font-bold text-accent mb-2">Mrs. Residual</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Compounding — continues paying after work stops</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">10-year total</span>
                  <span className="font-bold text-accent">{fmt(totals.mrs10)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">30-year total</span>
                  <span className="font-bold text-accent">{fmt(totals.mrs30)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Advantage over 30 yrs</span>
                  <span className="font-bold text-primary">{fmt(totals.mrs30 - totals.mr30)} more</span>
                </div>
              </div>
            </div>
          </div>

          {/* 10-Year Table */}
          <div className="mb-12 overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">YR</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest bg-destructive/10 text-destructive">Mr. Transactional</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent">Mrs. Residual</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary">Gap</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50 hover:bg-card/50 transition">
                    <td className="px-4 py-3 text-muted-foreground font-bold">{row.year}</td>
                    <td className="px-4 py-3 text-center text-destructive font-bold bg-destructive/5">{row.mr}</td>
                    <td className="px-4 py-3 text-center text-accent font-bold bg-accent/5">{row.mrs}</td>
                    <td className="px-4 py-3 text-center text-primary font-bold bg-primary/5">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decade Summary */}
          <div className="mb-12">
            <p className="text-center text-xs tracking-widest uppercase text-muted-foreground mb-6">The gap compounds every decade — forever</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-destructive/50 rounded-lg p-4 bg-destructive/10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">10 YRS</p>
                <p className="text-xl font-bold text-destructive">{fmt(totals.mr10)}</p>
                <p className="text-xs text-muted-foreground mt-1">Mr. T</p>
              </div>
              <div className="border border-accent/50 rounded-lg p-4 bg-accent/10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">10 YRS</p>
                <p className="text-xl font-bold text-accent">{fmt(totals.mrs10)}</p>
                <p className="text-xs text-muted-foreground mt-1">Mrs. R</p>
              </div>
              <div className="border border-destructive/50 rounded-lg p-4 bg-destructive/10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">30 YRS</p>
                <p className="text-xl font-bold text-destructive">{fmt(totals.mr30)}</p>
                <p className="text-xs text-muted-foreground mt-1">Mr. T</p>
              </div>
              <div className="border border-accent/50 rounded-lg p-4 bg-accent/10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">30 YRS</p>
                <p className="text-xl font-bold text-accent">{fmt(totals.mrs30)}</p>
                <p className="text-xs text-muted-foreground mt-1">Mrs. R</p>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="border border-primary/50 rounded-lg p-8 bg-primary/10 text-center">
            <p className="text-2xl font-bold text-foreground mb-4">
              "When you stop working, do you still get paid? <span className="text-accent">We do.</span>"
            </p>
            <p className="text-muted-foreground">
              Same skill. Same hours in year one. Completely different financial architecture.<br />
              The only difference is the structure you chose to build inside.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition uppercase tracking-widest text-sm">
            Get Back With The Person Who Invited You
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary mb-4 uppercase text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Dreams Business Resources</a></li>
                <li><a href="#" className="hover:text-primary transition">Training</a></li>
                <li><a href="#" className="hover:text-primary transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4 uppercase text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">About</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4 uppercase text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4 uppercase text-sm">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Renewals for Life. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
