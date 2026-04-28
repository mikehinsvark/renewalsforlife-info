import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  // Calculator 1: Mr. Transactional vs Mrs. Residual
  const [yearlyIncome, setYearlyIncome] = useState(250000);
  const [stopYear, setStopYear] = useState(6);

  // Calculate totals
  const calc1 = useMemo(() => {
    const years = [];
    let transTotal = 0;
    let residualTotal = 0;

    for (let year = 1; year <= 30; year++) {
      const transIncome = year <= stopYear ? yearlyIncome : 0;
      const residualIncome = yearlyIncome;

      transTotal += transIncome;
      residualTotal += residualIncome;

      years.push({
        year,
        trans: transIncome,
        transTotal,
        residual: residualIncome,
        residualTotal,
        gap: residualTotal - transTotal,
      });
    }

    return years;
  }, [yearlyIncome, stopYear]);

  // Calculator 2: Savings Reality
  const [savingsGoal, setSavingsGoal] = useState(2000000);
  const [currentAge, setCurrentAge] = useState(35);
  const [returnRate, setReturnRate] = useState(5);

  const retirementAge = 65;
  const yearsToRetire = retirementAge - currentAge;

  const monthlySavingsNeeded = useMemo(() => {
    if (yearsToRetire <= 0) return 0;
    const monthlyRate = returnRate / 100 / 12;
    const numPayments = yearsToRetire * 12;
    const fv = savingsGoal;
    const pmt = fv / (((Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate) || 1);
    return Math.max(0, pmt);
  }, [savingsGoal, currentAge, returnRate]);

  const savingsPercentages = [
    { age: 35, percent: 12 },
    { age: 40, percent: 7 },
    { age: 45, percent: 4 },
    { age: 50, percent: 2 },
    { age: 55, percent: 1 },
    { age: 60, percent: 0.1 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">
            RENEWALS<span className="text-foreground">FORLIFE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#philosophy" className="hover:text-accent transition">Philosophy</a>
            <a href="#calculator" className="hover:text-accent transition">The Math</a>
            <a href="#savings" className="hover:text-accent transition">Reality</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-green-600">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold">THE PARADIGM SHIFT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Building<br />
              <span className="text-accent">Someone Else's Asset.</span><br />
              Build Your Family's Legacy.
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Two income models exist in this world. One pays you <span className="text-red-500 font-semibold">once</span> — then resets to zero every month. The other builds an asset that pays you <span className="text-accent font-semibold">forever</span>.
            </p>
          </div>

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

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-foreground/70">Renewals to Agents</div>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-sm text-foreground/70">Lifetime Income</div>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">$0</div>
              <div className="text-sm text-foreground/70">Cost to Join</div>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">8-12x</div>
              <div className="text-sm text-foreground/70">EBITDA Valuation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">The Math Most Americans Were Never Shown</h2>
            <p className="text-lg text-foreground/80">
              "Numbers have a way of taking a man by the hand and leading him down the path of reason."
            </p>
            <p className="text-sm text-accent mt-2">— Pythagoras</p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2 text-accent">The Linear Lie</h3>
              <p className="text-foreground/80">
                Trading time for dollars is the oldest wealth trap on earth. You earn. You stop. The meter stops the moment you do. After 10 years of excellence, a linear income agent has a savings account. Not an empire.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2 text-accent">The Critical Question</h3>
              <p className="text-foreground/80 mb-3">
                <span className="font-semibold">When you stop working, do you still get paid?</span>
              </p>
              <p className="text-accent font-semibold">We do. And once you see how — you'll never look at your income the same way again.</p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold mb-2">Same Skill. Different Compensation Structure.</h3>
              <p className="text-foreground/80">
                Same skill. Same hours in year one. Completely different financial architecture. The only difference is the structure you chose to build inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator 1: Mr. Transactional vs Mrs. Residual */}
      <section id="calculator" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Mr. Transactional vs Mrs. Residual</h2>
          <p className="text-center text-foreground/70 mb-12">Move the sliders — let the numbers lead you</p>

          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            {/* Sliders */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Year 1 Annual Income: <span className="text-accent">${(yearlyIncome / 1000).toFixed(0)}K</span>
                </label>
                <Slider
                  value={[yearlyIncome]}
                  onValueChange={(val) => setYearlyIncome(val[0])}
                  min={50000}
                  max={500000}
                  step={10000}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4">
                  Mr. T stops working — year: <span className="text-accent">Year {stopYear}</span>
                </label>
                <Slider
                  value={[stopYear]}
                  onValueChange={(val) => setStopYear(val[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4">Mr. Transactional</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>10-year total:</span>
                    <span className="text-red-400 font-semibold">${(calc1[9].transTotal / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30-year total:</span>
                    <span className="text-red-400 font-semibold">${(calc1[29].transTotal / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Income stops:</span>
                    <span className="text-red-400 font-semibold">Year {stopYear}</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-accent mb-4">Mrs. Residual</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>10-year total:</span>
                    <span className="text-accent font-semibold">${(calc1[9].residualTotal / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30-year total:</span>
                    <span className="text-accent font-semibold">${(calc1[29].residualTotal / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advantage over 30 yrs:</span>
                    <span className="text-accent font-semibold">${((calc1[29].residualTotal - calc1[29].transTotal) / 1000000).toFixed(2)}M more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2">Year</th>
                    <th className="text-right py-3 px-2">Mr. T (Linear)</th>
                    <th className="text-right py-3 px-2">Total</th>
                    <th className="text-right py-3 px-2">Mrs. R (Residual)</th>
                    <th className="text-right py-3 px-2">Total</th>
                    <th className="text-right py-3 px-2">Gap (Her Advantage)</th>
                  </tr>
                </thead>
                <tbody>
                  {calc1.slice(0, 10).map((row) => (
                    <tr key={row.year} className="border-b border-border/50 hover:bg-card/50">
                      <td className="py-2 px-2">{row.year}</td>
                      <td className="text-right py-2 px-2 text-red-400">${(row.trans / 1000).toFixed(0)}K</td>
                      <td className="text-right py-2 px-2 text-red-400">${(row.transTotal / 1000000).toFixed(2)}M</td>
                      <td className="text-right py-2 px-2 text-accent">${(row.residual / 1000).toFixed(0)}K</td>
                      <td className="text-right py-2 px-2 text-accent">${(row.residualTotal / 1000000).toFixed(2)}M</td>
                      <td className="text-right py-2 px-2 text-accent font-semibold">${(row.gap / 1000000).toFixed(2)}M</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Decade Comparison */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "10 yrs", trans: calc1[9].transTotal, res: calc1[9].residualTotal },
                { label: "20 yrs", trans: calc1[19].transTotal, res: calc1[19].residualTotal },
                { label: "30 yrs", trans: calc1[29].transTotal, res: calc1[29].residualTotal },
                { label: "50 yrs", trans: calc1[29].transTotal, res: calc1[29].residualTotal * (50 / 30) },
              ].map((decade) => (
                <div key={decade.label} className="text-center">
                  <div className="text-xs text-foreground/60 mb-2">{decade.label}</div>
                  <div className="flex justify-between text-sm font-bold">
                    <div className="text-red-400">${(decade.trans / 1000000).toFixed(1)}M</div>
                    <div className="text-accent">${(decade.res / 1000000).toFixed(1)}M</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Savings Reality Section */}
      <section id="savings" className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">The Retirement Crisis</h2>
          <p className="text-center text-foreground/70 mb-12">$2 Million Nest Egg by 65 — Who Can Actually Do It?</p>

          <div className="bg-card border border-border rounded-lg p-8">
            {/* Sliders */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Nest Egg Goal: <span className="text-accent">${(savingsGoal / 1000000).toFixed(1)}M</span>
                </label>
                <Slider
                  value={[savingsGoal]}
                  onValueChange={(val) => setSavingsGoal(val[0])}
                  min={500000}
                  max={5000000}
                  step={100000}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4">
                  Your Current Age: <span className="text-accent">{currentAge}</span>
                </label>
                <Slider
                  value={[currentAge]}
                  onValueChange={(val) => setCurrentAge(val[0])}
                  min={20}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4">
                  Expected Annual Return: <span className="text-accent">{returnRate}%</span>
                </label>
                <Slider
                  value={[returnRate]}
                  onValueChange={(val) => setReturnRate(val[0])}
                  min={2}
                  max={10}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-6">Theory — The Dream World</h3>
                <div className="space-y-3">
                  <p className="text-sm text-foreground/70">Monthly savings needed if you start at each age:</p>
                  {savingsPercentages.map((item) => (
                    <div key={item.age} className="flex justify-between items-center">
                      <span className="text-sm">Age {item.age}</span>
                      <span className="text-accent font-semibold">${(monthlySavingsNeeded * (item.age === currentAge ? 1 : 1.5)).toFixed(0)}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Reality — What Most Experience</h3>
                <div className="space-y-3">
                  <p className="text-sm text-foreground/70">Actual % of Americans who can save this amount monthly:</p>
                  {savingsPercentages.map((item) => (
                    <div key={item.age} className="flex justify-between items-center">
                      <span className="text-sm">Age {item.age}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-red-400 font-semibold text-sm">{item.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-center text-foreground/80">
                <span className="font-semibold">Monthly savings required at your age ({currentAge}):</span><br />
                <span className="text-2xl font-bold text-red-400 mt-2">${monthlySavingsNeeded.toFixed(0)}/month</span><br />
                <span className="text-sm text-foreground/60 mt-2">for {yearsToRetire} years to reach your goal</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Same Skill. Different Compensation Structure.
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            The math below is not a pitch. It is a mirror.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-green-600 text-lg px-8 py-6">
            Get Back With The Person Who Invited You
          </Button>
          <p className="text-sm text-foreground/60 mt-6">
            This site is designed for reps to share with prospects. Share the math. Let the numbers lead them.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Renewals for Life</h3>
              <p className="text-sm text-foreground/70">
                Teaching the world about 100% renewals and recurring income models.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition">Dreams Business Resources</a></li>
                <li><a href="#" className="hover:text-accent transition">Training</a></li>
                <li><a href="#" className="hover:text-accent transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-accent transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>© 2026 Renewals for Life. All rights reserved.</p>
            <p className="mt-2">For recruiting, training and educational use only. No promise or guarantee of income is intended or implied.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
