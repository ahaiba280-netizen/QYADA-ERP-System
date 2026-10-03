import { useMemo, useState } from 'react';

const navigationTree = [
  {
    id: 'executive',
    label: 'Executive Dashboard',
    children: ['Overview', 'Portfolio', 'Cash & Profit', 'Risk Monitor'],
  },
  {
    id: 'projects',
    label: 'Projects',
    children: ['Portfolio', 'Project Controls', 'Schedules', 'Cost & Budget', 'Site Execution', 'Quality & HSE'],
  },
  {
    id: 'finance',
    label: 'Finance',
    children: ['Budget', 'Forecast', 'Treasury', 'AR/AP', 'Cash Flow', 'Margin Analysis'],
  },
  {
    id: 'accounting',
    label: 'Accounting',
    children: ['General Ledger', 'Bank Reconciliation', 'VAT', 'Assets', 'Journals', 'Reports'],
  },
  {
    id: 'hr',
    label: 'HR & Payroll',
    children: ['Employees', 'Attendance', 'Payroll', 'Leaves', 'Recruitment', 'Performance'],
  },
  {
    id: 'assets',
    label: 'Assets & Equipment',
    children: ['Assets Register', 'Depreciation', 'Maintenance', 'Utilization', 'Warranty', 'Inspections'],
  },
  {
    id: 'fleet',
    label: 'Fleet Management',
    children: ['Vehicles', 'Fuel', 'Trips', 'Service', 'Driver Records', 'Safety'],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    children: ['Stock Cards', 'Materials', 'Warehouse', 'Transfers', 'Stock Counts', 'Returns'],
  },
  {
    id: 'procurement',
    label: 'Procurement',
    children: ['RFQ', 'POs', 'Suppliers', 'Subcontractors', 'Evaluations', 'Delivery Tracking'],
  },
  {
    id: 'crm',
    label: 'CRM',
    children: ['Leads', 'Clients', 'Opportunities', 'Proposal', 'Contracts', 'After Sales'],
  },
  {
    id: 'contracts',
    label: 'Contracts',
    children: ['Contract Register', 'Claims', 'Variation Orders', 'Claims Tracking', 'Compliance'],
  },
  {
    id: 'documents',
    label: 'Documents',
    children: ['Document Center', 'Approval Matrix', 'Templates', 'Versions', 'Retention'],
  },
  {
    id: 'quality',
    label: 'Quality & Safety',
    children: ['QA Plans', 'Inspections', 'Safety Incidents', 'Permits', 'Training', 'HSE Reports'],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    children: ['Work Orders', 'Preventive', 'Breakdowns', 'Spare Parts', 'Teams', 'Schedules'],
  },
  {
    id: 'administration',
    label: 'Administration',
    children: ['Companies', 'Branches', 'Users', 'Roles', 'Permissions', 'Settings'],
  },
  {
    id: 'ai',
    label: 'AI Center',
    children: ['Project Risk', 'Cash Forecast', 'Delay Prediction', 'Supplier Analytics', 'AI Assistant'],
  },
  {
    id: 'settings',
    label: 'Settings',
    children: ['System Config', 'Integrations', 'Audit Logs', 'Localization', 'Backups'],
  },
];

const kpis = [
  { label: 'Revenue', value: 'AED 58.4M', delta: '+18.4%', trend: [18, 30, 26, 32, 42, 54], accent: 'gold' },
  { label: 'Profit', value: 'AED 10.9M', delta: '+12.1%', trend: [12, 20, 32, 27, 39, 48], accent: 'green' },
  { label: 'Cash', value: 'AED 14.7M', delta: '+9.3%', trend: [8, 16, 22, 18, 30, 44], accent: 'blue' },
  { label: 'Receivables', value: 'AED 4.2M', delta: '-2.8%', trend: [34, 30, 28, 25, 22, 20], accent: 'orange' },
  { label: 'Payables', value: 'AED 3.0M', delta: '+3.4%', trend: [10, 18, 17, 21, 26, 31], accent: 'red' },
  { label: 'Projects', value: '124', delta: '+14', trend: [22, 16, 20, 28, 30, 34], accent: 'gold' },
];

const recentActivities = [
  { project: 'Burj Heights Tower', action: 'Approval for concrete procurement', time: '12 min ago', color: 'gold' },
  { project: 'Industrial Park RAK', action: 'Budget variance alert reviewed', time: '2 hours ago', color: 'orange' },
  { project: 'Abu Dhabi Logistics', action: 'Delay risk flagged by AI forecast', time: '4 hours ago', color: 'red' },
  { project: 'Dubai Infrastructure', action: 'Subcontractor invoice approved', time: 'Today', color: 'green' },
];

const tasks = [
  { title: 'Budget Control Board', type: 'Approval', due: 'Due today', priority: 'High' },
  { title: 'RFI Closure - Tower B', type: 'Task', due: 'Due tomorrow', priority: 'Medium' },
  { title: 'Safety Training Review', type: 'Meeting', due: 'This week', priority: 'Low' },
];

const milestoneData = [
  { project: 'Al Ain Residential', task: 'Structural handover', date: '15 Nov 2026', remaining: '12 days', tone: 'gold' },
  { project: 'RAK Logistics Hub', task: 'MEP testing', date: '22 Nov 2026', remaining: '19 days', tone: 'orange' },
  { project: 'Dubai Hospital', task: 'Final commissioning', date: '02 Dec 2026', remaining: '29 days', tone: 'green' },
];

function App() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    projects: true,
    finance: true,
    administration: true,
  });
  const [rtl, setRtl] = useState(true);

  const metricCards = useMemo(() => kpis, []);

  const toggleSection = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={rtl ? 'app rtl' : 'app'}>
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="logo-mark">Q</div>
          <div>
            <div className="brand-name">QYADA</div>
            <div className="brand-sub">قيادة</div>
          </div>
        </div>

        <nav className="nav-tree">
          {navigationTree.map((section) => (
            <div key={section.id} className="nav-group">
              <button className="nav-header" onClick={() => toggleSection(section.id)}>
                <span>{section.label}</span>
                <span className="nav-arrow">{expanded[section.id] ? '▾' : '▸'}</span>
              </button>
              {expanded[section.id] && (
                <div className="nav-children">
                  {section.children.map((item) => (
                    <button key={item} className="nav-child">
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div>Settings</div>
          <div>Help</div>
          <div>v1.0.0</div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="left-tools">
            <button className="icon-btn">☰</button>
            <div className="search-box">Search projects, suppliers, approvals...</div>
          </div>

          <div className="status-row">
            <div className="pill">12:45</div>
            <div className="pill">03 Oct 2026</div>
            <div className="pill">Dubai</div>
            <div className="pill">AED</div>
            <button className="lang-btn" onClick={() => setRtl((v) => !v)}>{rtl ? 'AR' : 'EN'}</button>
            <div className="avatar-wrap">
              <div className="avatar">MA</div>
              <span className="online-dot" />
            </div>
          </div>
        </header>

        <section className="quick-actions">
          {['Projects', 'BOQ', 'Estimation', 'Contracts', 'RFQ', 'Invoices', 'Payments', 'Inventory', 'Equipment', 'Employees', 'Reports', 'AI Assistant'].map((item) => (
            <button key={item} className="quick-btn">
              {item}
            </button>
          ))}
        </section>

        <section className="kpis-grid">
          {metricCards.map((kpi) => (
            <article key={kpi.label} className="kpi-card">
              <div className="kpi-top">
                <div className={`icon-badge ${kpi.accent}`}>{kpi.label[0]}</div>
                <span className="trend-up">{kpi.delta}</span>
              </div>
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-label">{kpi.label}</div>
              <div className="sparkline">
                {kpi.trend.map((point, i) => (
                  <span key={`${kpi.label}-${i}`} style={{ height: `${point}%` }} className={`bar ${kpi.accent}`} />
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel chart-panel wide-panel">
            <div className="panel-header">
              <h3>Revenue vs Expenses</h3>
              <div className="filter-chip">FY2026</div>
            </div>
            <div className="chart-area">
              <div className="bars-chart">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div key={idx} className="bar-stack">
                    <span className="bar-gold" style={{ height: `${32 + idx * 2}%` }} />
                    <span className="bar-blue" style={{ height: `${24 + idx * 3}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel donut-panel">
            <div className="panel-header">
              <h3>Project Health</h3>
            </div>
            <div className="donut-wrap">
              <div className="donut-chart">
                <div className="donut-center">124</div>
              </div>
              <div className="legend-list">
                <div><span className="dot green" /> On Track</div>
                <div><span className="dot blue" /> Active</div>
                <div><span className="dot orange" /> At Risk</div>
                <div><span className="dot red" /> Delayed</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Cash Flow</h3>
            </div>
            <div className="mini-line">
              <span className="line-income" />
            </div>
            <div className="cash-meter">
              <div><strong>Income</strong><span>AED 27.5M</span></div>
              <div><strong>Expense</strong><span>AED 20.3M</span></div>
              <div><strong>Net</strong><span>AED 7.2M</span></div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Recent Activities</h3>
            </div>
            <div className="timeline">
              {recentActivities.map((activity) => (
                <div key={activity.project} className="timeline-item">
                  <span className={`dot ${activity.color}`} />
                  <div>
                    <strong>{activity.project}</strong>
                    <p>{activity.action}</p>
                  </div>
                  <small>{activity.time}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Tasks</h3>
            </div>
            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.title} className="task-item">
                  <div>
                    <strong>{task.title}</strong>
                    <p>{task.type}</p>
                  </div>
                  <div className="task-meta">
                    <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                    <small>{task.due}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel ai-panel">
            <div className="panel-header">
              <h3>AI Assistant</h3>
            </div>
            <div className="ai-box">
              <div className="ai-robot">✦</div>
              <div>
                <strong>Hello, Executive Team</strong>
                <p>Projected cash stress is low risk this quarter. Delay warnings are concentrated in 3 projects.</p>
              </div>
            </div>
            <div className="suggestion-list">
              {['Project risk overview', 'Cash flow forecast', 'Supplier delays', 'Approval bottlenecks'].map((q) => (
                <button key={q} className="suggestion">
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Upcoming Milestones</h3>
            </div>
            <div className="milestone-list">
              {milestoneData.map((item) => (
                <div key={item.project} className="milestone-item">
                  <span className={`dot ${item.tone}`} />
                  <div>
                    <strong>{item.project}</strong>
                    <p>{item.task}</p>
                  </div>
                  <div className="milestone-meta">
                    <small>{item.date}</small>
                    <span className="badge">{item.remaining}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {[
            ['Employee Count', '2,430', '+3.1%'],
            ['Equipment Count', '845', '+2.4%'],
            ['Vehicles', '318', '+1.6%'],
            ['Inventory', 'AEDS 8.9M', '+7.8%'],
            ['Suppliers', '456', '+9.1%'],
            ['Customers', '214', '+6.2%'],
            ['Documents', '34,520', '+13.0%'],
            ['Approvals', '42', '-4.2%'],
          ].map(([label, value, delta]) => (
            <div key={label} className="stat-card">
              <div className="stat-label">{label}</div>
              <div className="stat-value">{value}</div>
              <div className="stat-delta">{delta}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
