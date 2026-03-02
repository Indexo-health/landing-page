import { useLanguage } from '../contexts/LanguageContext';

export default function InsightsSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-brand-cream py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-teal/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-brand-teal/20 rounded-full px-3 py-1 mb-4 shadow-sm mx-auto">
            <span className="material-symbols-outlined text-brand-teal text-sm">verified</span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-brand-teal">{t('hiw.ins.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight mb-6">
            {t('hiw.ins.title1')}<span className="text-brand-teal">{t('hiw.ins.title2')}</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('hiw.ins.desc')}
          </p>
        </div>

        {/* Four Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="bg-white rounded-[24px] p-8 shadow-card border border-surface-border flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal-light/40 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">pulmonology</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{t('hiw.ins.c1.title')}</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {t('hiw.ins.c1.desc')}
            </p>
            <div className="mt-auto pt-4 w-full border-t border-surface-border flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">AHI</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">SpO2</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">ODI</span>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-card border border-surface-border flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal-light/40 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">ecg_heart</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{t('hiw.ins.c2.title')}</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {t('hiw.ins.c2.desc')}
            </p>
            <div className="mt-auto pt-4 w-full border-t border-surface-border flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">RHR</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">HRV</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Arrhythmia</span>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-card border border-surface-border flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal-light/40 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">battery_charging_full</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{t('hiw.ins.c3.title')}</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {t('hiw.ins.c3.desc')}
            </p>
            <div className="mt-auto pt-4 w-full border-t border-surface-border flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Sleep Score</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Deep/REM</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Recovery</span>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-card border border-surface-border flex flex-col h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-teal-light/40 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">bedtime</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{t('hiw.ins.c4.title')}</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {t('hiw.ins.c4.desc')}
            </p>
            <div className="mt-auto pt-4 w-full border-t border-surface-border flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">In/Out-of-bed</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Toss & Turn</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Sleep/Wake</span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-text-secondary border border-gray-100">Restlessness</span>
            </div>
          </div>
        </div>

        {/* Patient + Dashboard Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative items-start">
          {/* Patient Experience - Phone Mockup */}
          <div className="lg:col-span-5 relative flex flex-col h-full">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">{t('hiw.ins.patient.title')}</h3>
              <p className="text-text-secondary">{t('hiw.ins.patient.desc')}</p>
            </div>

            <div className="relative mx-auto max-w-[340px] w-full bg-gray-50 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden h-[850px] z-10 flex flex-col">
              {/* Phone status bar */}
              <div className="flex-shrink-0 h-14 bg-white/90 backdrop-blur-md z-30 flex justify-between px-6 items-center text-[10px] text-text-secondary border-b border-gray-100 sticky top-0">
                <span>9:41</span>
                <div className="w-20 h-5 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
                <div className="flex space-x-1">
                  <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[14px]">wifi</span>
                  <span className="material-symbols-outlined text-[14px]">battery_full</span>
                </div>
              </div>

              {/* Phone content */}
              <div className="flex-1 overflow-y-auto py-6 bg-gray-50 scroll-smooth flex flex-col gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Active Alert */}
                <div className="px-5">
                  <div className="bg-red-500 text-white p-4 rounded-2xl flex flex-col justify-between shadow-lg shadow-red-200 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-2 z-10">
                      <span className="material-symbols-outlined text-lg">warning</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Active Alert</span>
                    </div>
                    <p className="text-xs font-medium opacity-90 leading-snug z-10">
                      Unusual breathing pattern detected compared to your 14-day baseline.
                    </p>
                    <div className="absolute -right-4 -bottom-4 bg-white/10 w-24 h-24 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Sleep Apnea Card */}
                <div className="px-5">
                  <div className="bg-white p-4 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">air</span>
                        </span>
                        <h4 className="text-sm font-bold text-gray-800">Sleep Apnea (AHI)</h4>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-xs text-gray-500">Long-term Trend</span>
                        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">High Deviation</span>
                      </div>
                      <div className="h-24 w-full flex items-end justify-between gap-1.5 pb-2 border-b border-gray-100">
                        {[15, 18, 14, 16, 15, 17, 14, 19].map((h, i) => (
                          <div key={i} className="w-2 bg-gray-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                        <div className="w-2 bg-red-500 h-[95%] rounded-t-sm shadow-md shadow-red-200"></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                        <span>14 Days Ago</span>
                        <span className="text-red-500 font-bold">Today</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-2xl">
                        <div className="text-[10px] text-gray-500 mb-1">Baseline AHI</div>
                        <div className="text-xl font-bold text-gray-800">5.0</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-2xl border border-red-100">
                        <div className="text-[10px] text-red-500 mb-1">Last Night</div>
                        <div className="text-xl font-bold text-red-600">32.5</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cardiovascular Card */}
                <div className="px-5 py-2">
                  <div className="bg-white p-4 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">ecg_heart</span>
                      </span>
                      <h4 className="text-sm font-bold text-gray-800">Cardiovascular</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="mb-2">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-xs text-gray-500">14-Day HRV Trend</span>
                          <span className="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded">Normal</span>
                        </div>
                        <div className="h-24 w-full flex items-end justify-between gap-1.5 pb-2 border-b border-gray-100">
                          {[45, 50, 48, 52, 47, 55, 51, 49].map((h, i) => (
                            <div key={i} className="w-2 bg-purple-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
                          ))}
                          <div className="w-2 bg-purple-500 h-[53%] rounded-t-sm"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-2xl">
                          <div className="text-[10px] text-gray-500 mb-1">HRV (rmSSD)</div>
                          <div className="text-lg font-bold text-gray-800">42 <span className="text-[10px] font-normal text-gray-400">ms</span></div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-2xl">
                          <div className="text-[10px] text-gray-500 mb-1">Avg RHR</div>
                          <div className="text-lg font-bold text-gray-800">62 <span className="text-[10px] font-normal text-gray-400">bpm</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sleep Recovery Card */}
                <div className="px-5 mt-4 mb-4">
                  <div className="bg-white p-4 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">bedtime</span>
                      </span>
                      <h4 className="text-sm font-bold text-gray-800">Sleep Recovery</h4>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" fill="transparent" r="32" stroke="#E2E8F0" strokeWidth="6"></circle>
                          <circle cx="40" cy="40" fill="transparent" r="32" stroke="#6366F1" strokeDasharray="200" strokeDashoffset="30" strokeWidth="6"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-xl font-bold text-gray-800">85</span>
                          <span className="text-[8px] text-gray-400 uppercase">Score</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div>
                          <div className="flex justify-between text-[10px] mb-1 text-gray-500">
                            <span>Deep</span>
                            <span>1h 45m</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full">
                            <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[10px] mb-1 text-gray-500">
                            <span>REM</span>
                            <span>2h 10m</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full">
                            <div className="h-1.5 bg-sky-400 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone bottom nav */}
              <div className="flex-shrink-0 h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 z-20 sticky bottom-0">
                <div className="flex flex-col items-center gap-1 text-brand-teal">
                  <span className="material-symbols-outlined text-xl">home</span>
                  <span className="text-[8px] font-medium">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                  <span className="material-symbols-outlined text-xl">bar_chart</span>
                  <span className="text-[8px] font-medium">Trends</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                  <span className="material-symbols-outlined text-xl">person</span>
                  <span className="text-[8px] font-medium">Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Dashboard */}
          <div className="lg:col-span-7 flex flex-col justify-start h-full">
            <div className="mb-4 lg:pl-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">{t('hiw.ins.dash.title')}</h3>
              <p className="text-text-secondary">{t('hiw.ins.dash.desc')}</p>
            </div>

            <div className="relative w-full bg-white rounded-xl shadow-2xl border border-surface-border overflow-hidden lg:ml-8 h-[850px] flex flex-col">
              {/* Browser chrome */}
              <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-3 flex-shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white h-6 w-3/5 rounded-md border border-gray-200 flex items-center px-3">
                    <span className="material-symbols-outlined text-[10px] text-gray-400 mr-2">lock</span>
                    <span className="text-[10px] text-gray-500">portal.clinical-dashboard.com/patients/overview</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-8 bg-gray-50 flex-1 overflow-y-auto">
                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mb-10">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Total Patients</div>
                    <div className="text-2xl font-bold text-gray-800">1,248</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-[0_4px_20px_rgba(220,38,38,0.25)] border border-red-200 relative overflow-hidden transform transition-all hover:-translate-y-1">
                    <div className="absolute right-0 top-0 w-16 h-16 bg-red-100 rounded-bl-full -mr-4 -mt-4"></div>
                    <div className="text-xs text-red-700 font-bold mb-1 uppercase tracking-wide">Critical Alerts</div>
                    <div className="text-2xl font-black text-red-700">12</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Adherence Rate</div>
                    <div className="text-2xl font-bold text-brand-teal">94%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">New Enrollments</div>
                    <div className="text-2xl font-bold text-gray-800">+28</div>
                  </div>
                </div>

                {/* Triage Table */}
                <div className="grid grid-cols-1 gap-10 mb-10">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                      <h4 className="font-bold text-gray-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-400">priority_high</span>
                        Priority Triage List
                      </h4>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500 cursor-pointer">Filter: All High Risk</span>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                          <tr>
                            <th className="px-5 py-3 font-medium">Patient Name</th>
                            <th className="px-5 py-3 font-medium">ID</th>
                            <th className="px-5 py-3 font-medium">Primary Alert</th>
                            <th className="px-5 py-3 font-medium">Last Sync</th>
                            <th className="px-5 py-3 font-medium text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-3 font-medium text-gray-800">Sarah Jenkins</td>
                            <td className="px-5 py-3 text-gray-500">#P-9281</td>
                            <td className="px-5 py-3"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">Severe AHI (32.5)</span></td>
                            <td className="px-5 py-3 text-gray-500">2m ago</td>
                            <td className="px-5 py-3 text-right"><button className="text-brand-teal hover:text-brand-teal/80 font-medium text-xs border border-brand-teal px-3 py-1 rounded">Review</button></td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-3 font-medium text-gray-800">Michael Ross</td>
                            <td className="px-5 py-3 text-gray-500">#P-4421</td>
                            <td className="px-5 py-3"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-bold">Arrhythmia Detected</span></td>
                            <td className="px-5 py-3 text-gray-500">15m ago</td>
                            <td className="px-5 py-3 text-right"><button className="text-brand-teal hover:text-brand-teal/80 font-medium text-xs border border-brand-teal px-3 py-1 rounded">Review</button></td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-3 font-medium text-gray-800">Eleanor Rigby</td>
                            <td className="px-5 py-3 text-gray-500">#P-3390</td>
                            <td className="px-5 py-3"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">SpO2 &lt; 88%</span></td>
                            <td className="px-5 py-3 text-gray-500">1h ago</td>
                            <td className="px-5 py-3 text-right"><button className="text-brand-teal hover:text-brand-teal/80 font-medium text-xs border border-brand-teal px-3 py-1 rounded">Review</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Key Data Chart */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-center mb-8">
                        <h4 className="font-bold text-gray-800 text-base">Key Data: Last 14 Days</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-8 mb-10">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-gray-600">Severe Nights</span>
                            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Severe
                            </span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">3 / 14</span>
                            <span className="text-sm text-gray-400">nights</span>
                          </div>
                          <div className="mt-2 bg-gray-50 rounded-md px-2 py-1 inline-block">
                            <span className="text-xs text-gray-500">Includes Today</span>
                          </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-gray-600">Today's Min SpO2</span>
                            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Severe
                            </span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">78%</span>
                          </div>
                          <div className="mt-2 bg-gray-50 rounded-md px-2 py-1 inline-block">
                            <span className="text-xs text-gray-500">1/12 (Today)</span>
                          </div>
                        </div>
                      </div>

                      {/* SpO2 Chart */}
                      <div className="w-full relative mt-8">
                        <h5 className="text-sm font-bold text-gray-800 mb-6">14-Day Daily Minimum SpO2</h5>
                        <div className="relative h-64 w-full px-4 pt-4 pb-8 border border-gray-100 rounded-lg bg-gray-50/50">
                          <div className="absolute w-full border-t border-dashed border-red-400 top-[60%] left-0 right-0 z-10 pointer-events-none"></div>
                          <div className="absolute right-2 top-[55%] text-xs font-bold text-red-600 bg-white px-2 py-0.5 rounded border border-red-100 z-20 shadow-sm">
                            Severe Threshold (80%)
                          </div>
                          <div className="h-full w-full flex items-end justify-between gap-3 relative z-0">
                            {[60, 30, 75, 72, 78, 65, 70, 72, 68, 74, 35, 65, 76, 28].map((h, i) => (
                              <div key={i} className="w-full h-full flex flex-col justify-end group relative">
                                <div className={`w-full rounded-t-sm transition-colors ${h < 40 ? 'bg-red-600 shadow-md shadow-red-200' : 'bg-gray-200 hover:bg-gray-300'}`} style={{ height: `${h}%` }}></div>
                                <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  {i === 13 ? <span className="text-red-500 font-bold">Today</span> : `Day ${i + 1}`}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between text-[11px] text-gray-400 mt-4 px-2 font-medium">
                          <span>Nov 1</span>
                          <span>Nov 7</span>
                          <span>Nov 14 (Today)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
