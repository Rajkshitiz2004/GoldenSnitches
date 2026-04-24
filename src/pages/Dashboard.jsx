import React from "react";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '32px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>Channel Dashboard</h1>
      <p style={{ color: 'gray', marginBottom: '28px' }}>
        Welcome back, Curator. Your channel is up <span style={{ color: 'green', fontWeight: '600' }}>12%</span> compared to last month.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>

        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'silver' }}>Views</span>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'white', margin: '8px 0 4px' }}>1.2M</div>
          <div style={{ fontSize: '12px', color: 'green' }}>↑ 12.4% vs last 28d</div>
        </div>
        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'silver' }}>Watch Time</span>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'white', margin: '8px 0 4px' }}>45.2K</div>
          <div style={{ fontSize: '12px', color: 'green' }}>↑ 8.1% vs last 28d</div>
        </div>
        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'silver' }}>Subscribers</span>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'white', margin: '8px 0 4px' }}>214.8K</div>
          <div style={{ fontSize: '12px', color: 'green' }}>↑ +2,401 new</div>
        </div>
        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'silver' }}>Estimated Revenue</span>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'white', margin: '8px 0 4px' }}>$4,821.50</div>
          <div style={{ fontSize: '12px', color: 'red' }}>↓ 2.1% vs last 28d</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '16px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>View Trends</h3>
              <p style={{ fontSize: '12px', color: 'silver' }}>Last 28 days performance</p>
            </div>
            <div style={{ display: 'flex', gap: '4px', backgroundColor: 'gray', borderRadius: '8px', padding: '3px' }}>
              <button style={{ padding: '5px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', border: 'none', backgroundColor: 'darkgray', color: 'white', cursor: 'pointer' }}>Views</button>
              <button style={{ padding: '5px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', border: 'none', backgroundColor: 'transparent', color: 'silver', cursor: 'pointer' }}>Revenue</button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '200px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', left: '72%', fontSize: '11px', fontWeight: '700', backgroundColor: 'white', color: 'black', padding: '2px 6px', borderRadius: '4px' }}>Peak: 52K</div>
            <div style={{ flex: 1, height: '45%', backgroundColor: 'indianred', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '52%', backgroundColor: 'indianred', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '58%', backgroundColor: 'firebrick', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '62%', backgroundColor: 'firebrick', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '68%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '60%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '72%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '78%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '82%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '75%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '70%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '76%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '65%', backgroundColor: 'crimson', borderRadius: '4px 4px 0 0' }}></div>
            <div style={{ flex: 1, height: '100%', backgroundColor: 'red', borderRadius: '4px 4px 0 0' }}></div>
          </div>
        </div>
        <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'white' }}>Latest Comments</h3>
            <span style={{ fontSize: '12px', color: 'red', cursor: 'pointer' }}>View all</span>
          </div>
          <div style={{ paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid gray' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'purple', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0 }}>AR</div>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Alex Rivera</span>
                  <span style={{ fontSize: '10px', color: 'silver' }}>2H AGO</span>
                </div>
                <p style={{ fontSize: '12px', color: 'lightgray', lineHeight: '1.5', marginTop: '4px' }}>The cinematography in the second half was absolutely breathtaking. Keep it up!</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', paddingLeft: '44px' }}>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>👍</button>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>↩ Reply</button>
            </div>
          </div>
          <div style={{ paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid gray' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'steelblue', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0 }}>EV</div>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Elena Vance</span>
                  <span style={{ fontSize: '10px', color: 'silver' }}>5H AGO</span>
                </div>
                <p style={{ fontSize: '12px', color: 'lightgray', lineHeight: '1.5', marginTop: '4px' }}>Could you do a breakdown of the color grading you used for the desert scene?</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', paddingLeft: '44px' }}>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>👍</button>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>↩ Reply</button>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'teal', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0 }}>MT</div>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Marcus Thorne</span>
                  <span style={{ fontSize: '10px', color: 'silver' }}>8H AGO</span>
                </div>
                <p style={{ fontSize: '12px', color: 'lightgray', lineHeight: '1.5', marginTop: '4px' }}>Great editing rhythm. Subscribed immediately.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', paddingLeft: '44px' }}>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>👍</button>
              <button style={{ fontSize: '12px', color: 'silver', background: 'none', border: 'none', cursor: 'pointer' }}>↩ Reply</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'dimgray', border: '1px solid gray', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '600', color: 'white' }}>Recent Uploads</h3>
          <button style={{ backgroundColor: 'gray', border: '1px solid darkgray', borderRadius: '8px', padding: '7px 14px', fontSize: '12px', color: 'white', cursor: 'pointer' }}>See all content</button>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid gray', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>VIDEO</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>RANKING</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>CTR</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>AVG VIEW DURATION</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>VIEWS</span>
          <span style={{ fontSize: '10px', fontWeight: '700', color: 'silver' }}>ACTIONS</span>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '12px', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid gray' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '72px', height: '44px', backgroundColor: 'gray', borderRadius: '6px', flexShrink: 0 }}></div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>Mastering the Dark Canvas: Color Grading</div>
              <div style={{ fontSize: '11px', color: 'silver' }}>Uploaded Dec 12, 2023</div>
            </div>
          </div>
          <span style={{ fontSize: '13px', color: 'white' }}>1 of 10</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>8.4%</div>
            <span style={{ fontSize: '10px', color: 'green', backgroundColor: 'darkgreen', padding: '2px 6px', borderRadius: '20px' }}>High</span>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'white' }}>4:52</div>
            <div style={{ fontSize: '11px', color: 'silver' }}>(38.4%)</div>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>142,401</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ width: '30px', height: '30px', backgroundColor: 'gray', border: '1px solid darkgray', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>✏️</button>
            <button style={{ width: '30px', height: '30px', backgroundColor: 'gray', border: '1px solid darkgray', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>📊</button>
          </div>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '12px', alignItems: 'center', padding: '14px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '72px', height: '44px', backgroundColor: 'gray', borderRadius: '6px', flexShrink: 0 }}></div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>The Future of Cinematic Minimalism</div>
              <div style={{ fontSize: '11px', color: 'silver' }}>Uploaded Dec 08, 2023</div>
            </div>
          </div>
          <span style={{ fontSize: '13px', color: 'white' }}>4 of 10</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>5.2%</div>
            <span style={{ fontSize: '10px', color: 'orange', backgroundColor: 'darkorange', padding: '2px 6px', borderRadius: '20px' }}>Average</span>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'white' }}>3:15</div>
            <div style={{ fontSize: '11px', color: 'silver' }}>(28.1%)</div>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>89,120</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ width: '30px', height: '30px', backgroundColor: 'gray', border: '1px solid darkgray', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>✏️</button>
            <button style={{ width: '30px', height: '30px', backgroundColor: 'gray', border: '1px solid darkgray', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>📊</button>
          </div>
        </div>

      </div>

    </div>
  );
}