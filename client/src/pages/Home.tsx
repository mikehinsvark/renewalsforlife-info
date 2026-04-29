import { useState, useEffect } from 'react';

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

      if (y <= 10) {
        rows.push({
          year: y,
          mr,
          mrs,
          gap: mrs - mr,
        });
      }
    }

    setTableRows(rows);
    setTotals({ mr10, mr20, mr30, mr50, mrs10, mrs20, mrs30, mrs50 });
  }, [income, stopYear]);

  return (
    <div style={{
      background: 'linear-gradient(160deg, #010810 0%, #041220 50%, #050D1A 100%)',
      color: '#E2EEF5',
      fontFamily: '"Jost", sans-serif',
      minHeight: '100vh',
      padding: '0'
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,201,184,.022) 39px, rgba(0,201,184,.022) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,201,184,.022) 39px, rgba(0,201,184,.022) 40px)
        `
      }} />

      <div style={{
        background: 'rgba(2, 10, 22, 0.55)',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 0 0 1px rgba(0,201,184,.08), 0 0 60px rgba(0,0,0,.6)',
          overflow: 'hidden',
          background: '#010810'
        }}>
          {/* HEADER */}
          <div style={{
            background: 'rgba(2, 11, 24, 0.97)',
            borderBottom: '1px solid rgba(0,201,184,.22)',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
            <div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem',
                color: '#00C9B8',
                letterSpacing: '0.07em',
                fontWeight: 400
              }}>
                RENEWALSFORLIFE
              </div>
              <div style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '0.57rem',
                letterSpacing: '0.28em',
                color: '#6A8FA8',
                textTransform: 'uppercase',
                marginTop: '2px',
                fontWeight: 300
              }}>
                INCOME MODEL PARADIGM SHIFT
              </div>
            </div>
            </div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: '0.88rem',
              color: '#6A8FA8',
              textAlign: 'right',
              lineHeight: '1.6',
              fontWeight: 400
            }}>
              <div>Real wealth is agency, opportunity & time.</div>
              <div style={{ color: '#00C9B8' }}>Design the life first.</div>
            </div>
          </div>

          {/* HERO SECTION - INTRO TAGLINE */}
          <div style={{
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            background: 'rgba(1, 8, 16, 0.5)',
            borderBottom: '1px solid rgba(0,201,184,.09)'
          }}>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.2rem',
              color: '#E2EEF5',
              marginBottom: '0.5rem',
              lineHeight: '1.3',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}>
              Stop Building Someone Else's Asset.
            </h2>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.2rem',
              color: '#00FF88',
              marginBottom: 0,
              lineHeight: '1.3',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}>
              Start Building Income That Pays You for Life.
            </h2>
          </div>

          {/* VIDEO SECTION */}
          <div style={{
            padding: '1.5rem 1.6rem',
            borderBottom: '1px solid rgba(0,201,184,.09)'
          }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '8px',
                border: '6px solid #00FF88',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,136,.15)',
                background: '#000',
                aspectRatio: '16 / 9'
              }}
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    wistia-player[media-id='mvpjltt2t2']:not(:defined) {
                      background: center / cover no-repeat url('/manus-storage/DBR2026abc_0a2f7f7f.png');
                      display: block;
                      padding-top: 56.25%;
                    }
                  </style>
                  <script src="https://fast.wistia.com/player.js" async><\/script>
                  <script>
                    window.wistiaOptions = { autoPlay: false, playerColor: '00FF88' };
                  <\/script>
                  <script src="https://fast.wistia.com/embed/mvpjltt2t2.js" async type="module"><\/script>
                  <wistia-player media-id="mvpjltt2t2" aspect="1.7777777777777777" poster="/manus-storage/DBR2026abc_0a2f7f7f.png" style="width: 100%; display: block;"><\/wistia-player>
                `
              }}
            />
          </div>

          {/* QUOTE SECTION - BELOW VIDEO */}
          <div style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            background: 'rgba(1, 8, 16, 0.5)',
            borderBottom: '1px solid rgba(0,201,184,.09)'
          }}>
            <p style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: '#007A72',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              THE MATH MOST AMERICANS WERE NEVER SHOWN
            </p>
            
            <h1 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.8rem',
              color: '#E2EEF5',
              lineHeight: '1.1',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
              fontWeight: 400
            }}>
              SAME SKILL.
            </h1>
            
            <h2 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.8rem',
              lineHeight: '1.1',
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
              fontWeight: 400
            }}>
              <span style={{ color: '#00FF88' }}>DIFFERENT</span> COMPENSATION STRUCTURE.
            </h2>

            <div style={{
              background: 'rgba(0,201,184,.05)',
              border: '1px solid rgba(0,201,184,.22)',
              borderRadius: '7px',
              padding: '1rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: '#00C9B8',
                lineHeight: '1.8',
                marginBottom: '0.75rem',
                fontWeight: 400
              }}>
                "Numbers have a way of taking a man by the hand and leading him down the path of reason."
              </p>
              <p style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6A8FA8',
                fontWeight: 400
              }}>
                — PYTHAGORAS
              </p>
            </div>
          </div>

          {/* CALCULATOR SECTION */}
          <div style={{
            padding: '1.3rem 1.6rem'
          }}>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: '#007A72',
              paddingBottom: '0.32rem',
              borderBottom: '1px solid rgba(0,201,184,.09)',
              marginBottom: '1.5rem',
              fontWeight: 600
            }}>
              PERSONALIZE THE MATH — ENTER YOUR SITUATION
            </p>

            {/* Sliders */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <label style={{ fontSize: '0.82rem' }}>Year 1 Income</label>
                <span style={{ color: '#00C9B8', fontWeight: 'bold' }}>${(income / 1000).toFixed(0)}K</span>
              </div>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  outline: 'none',
                  background: `linear-gradient(to right, #00C9B8 0%, #00C9B8 ${((income - 50000) / 450000) * 100}%, rgba(0,201,184,.2) ${((income - 50000) / 450000) * 100}%, rgba(0,201,184,.2) 100%)`
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <label style={{ fontSize: '0.82rem' }}>Mr. T stops — year</label>
              <span style={{ color: '#FF5A5A', fontWeight: 'bold' }}>Year {stopYear}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={stopYear}
              onChange={(e) => setStopYear(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                outline: 'none',
                background: `linear-gradient(to right, #00C9B8 0%, #00C9B8 ${(stopYear / 10) * 100}%, rgba(0,201,184,.2) ${(stopYear / 10) * 100}%, rgba(0,201,184,.2) 100%)`
              }}
            />

            {/* Summary Boxes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(255, 90, 90, 0.05)',
                border: '1px solid #FF5A5A',
                borderRadius: '6px',
                padding: '0.85rem'
              }}>
                <p style={{
                  color: '#FF5A5A',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem'
                }}>
                  Mr. Transactional
                </p>
                <p style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6A8FA8',
                  marginBottom: '0.75rem'
                }}>
                  LINEAR · STOPS WHEN HE STOPS
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>10-year total</span>
                  <span style={{ color: '#FF5A5A', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(totals.mr10)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>30-year total</span>
                  <span style={{ color: '#FF5A5A', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(totals.mr30)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Income stops</span>
                  <span style={{ color: '#FF5A5A', fontWeight: 'bold', fontSize: '1rem' }}>Year {stopYear}</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid #00FF88',
                borderRadius: '6px',
                padding: '0.85rem'
              }}>
                <p style={{
                  color: '#00FF88',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem'
                }}>
                  Mrs. Residual
                </p>
                <p style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6A8FA8',
                  marginBottom: '0.75rem'
                }}>
                  COMPOUNDING · WORKS ONCE, PAID FOREVER
                </p>
                <div style={{ fontSize: '0.75rem', color: '#6A8FA8', lineHeight: '1.6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>10-year total</span>
                    <span style={{ color: '#00FF88', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(totals.mrs10)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>30-year total</span>
                    <span style={{ color: '#00FF88', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(totals.mrs30)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Advantage over 30 yrs</span>
                    <span style={{ color: '#00C9B8', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(totals.mrs30 - totals.mr30)} more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10-Year Comparison Table */}
            <div style={{
              background: 'rgba(3, 28, 36, 0.5)',
              border: '1px solid rgba(0,201,184,.22)',
              borderRadius: '6px',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}>
              {/* Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                borderBottom: '1px solid rgba(0,201,184,.09)',
                background: 'rgba(0,201,184,.05)'
              }}>
                  <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)', fontSize: '0.85rem', color: '#6A8FA8', fontWeight: '600' }}>YR</div>
                <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#FF5A5A', marginBottom: '0.15rem' }}>Mr. Transactional</div>
                  <div style={{ fontSize: '0.65rem', color: '#6A8FA8' }}>LINEAR INCOME</div>
                </div>
                <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#00FF88', marginBottom: '0.15rem' }}>Mrs. Residual</div>
                  <div style={{ fontSize: '0.65rem', color: '#6A8FA8' }}>RESIDUAL INCOME</div>
                </div>
                <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#00C9B8', marginBottom: '0.15rem' }}>Gap</div>
                  <div style={{ fontSize: '0.65rem', color: '#6A8FA8' }}>HER ADVANTAGE</div>
                </div>
              </div>

              {/* Rows */}
              {tableRows.map((row, idx) => (
                <div key={row.year} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  borderBottom: idx !== tableRows.length - 1 ? '1px solid rgba(0,201,184,.09)' : 'none'
                }}>
                  <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)', fontSize: '0.95rem', color: '#6A8FA8', fontWeight: '600' }}>{row.year}</div>
                  <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#FF5A5A' }}>{fmt(row.mr)}</div>
                    <p style={{ fontSize: '0.55rem', color: '#6A8FA8' }}>Mr. T</p>
                  </div>
                  <div style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1px solid rgba(0,201,184,.09)' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#00FF88' }}>{fmt(row.mrs)}</div>
                    <div style={{ fontSize: '0.6rem', color: '#6A8FA8', marginTop: '0.25rem' }}>Total: {fmt(row.mrs * row.year)}</div>
                    <div style={{ width: '100%', height: '2px', background: '#00FF88', marginTop: '0.5rem', borderRadius: '1px' }} />
                  </div>
                  <div style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#00C9B8' }}>{fmt(row.gap)}</div>
                    <div style={{ fontSize: '0.6rem', color: '#6A8FA8', marginTop: '0.25rem' }}>her lead</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decade Summary */}
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: '#007A72',
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontWeight: 600
            }}>
              THE GAP COMPOUNDS EVERY DECADE — FOREVER
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              {[
                { label: '10 YRS', mr: totals.mr10, mrs: totals.mrs10 },
                { label: '20 YRS', mr: totals.mr20, mrs: totals.mrs20 },
                { label: '30 YRS', mr: totals.mr30, mrs: totals.mrs30 },
                { label: '50 YRS', mr: totals.mr50, mrs: totals.mrs50 },
              ].map((period) => (
                <div key={period.label} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6A8FA8',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600
                  }}>
                    {period.label}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{
                      background: 'rgba(255, 90, 90, 0.05)',
                      border: '1px solid #FF5A5A',
                      borderRadius: '6px',
                      padding: '0.6rem'
                    }}>
                      <p style={{ color: '#FF5A5A', fontWeight: 'bold', fontSize: '0.85rem' }}>{fmt(period.mr)}</p>
                      <p style={{ fontSize: '0.55rem', color: '#6A8FA8' }}>Mr. T</p>
                    </div>
                    <div style={{
                      background: 'rgba(0, 255, 136, 0.05)',
                      border: '1px solid #00FF88',
                      borderRadius: '6px',
                      padding: '0.6rem'
                    }}>
                    <div style={{ color: '#00FF88', fontWeight: 'bold', fontSize: '1.1rem' }}>{fmt(period.mrs)}</div>
                      <p style={{ fontSize: '0.55rem', color: '#6A8FA8' }}>Mrs. R</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div style={{
              background: 'rgba(0,201,184,.05)',
              border: '1px solid rgba(0,201,184,.22)',
              borderRadius: '7px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                color: '#00C9B8',
                marginBottom: '1rem',
                fontStyle: 'italic',
                lineHeight: '1.6',
                fontWeight: 600
              }}>
                "When you stop working, do you still get paid? <span style={{ color: '#00FF88' }}>We do.</span>"
              </p>
              <p style={{
                fontSize: '1.05rem',
                color: '#6A8FA8',
                lineHeight: '1.8'
              }}>
                Same skill. Same hours in year one. Completely different financial architecture.<br />
                The only difference is the structure you chose to build inside.
              </p>
            </div>

            {/* CTA Button */}
            <button style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1rem',
              background: '#00FF88',
              color: '#010810',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              GET BACK WITH THE PERSON WHO INVITED YOU
            </button>

            {/* Footer */}
            <div style={{
              textAlign: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(0,201,184,.09)',
              fontSize: '0.6rem',
              color: '#6A8FA8'
            }}>
              © 2026 Dreams Business Resources · Built for the next generation of residual income builders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
