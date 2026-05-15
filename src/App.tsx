import { Shield, Lock, FileText, Bell, CheckCircle2, ArrowRight, Sparkles, Globe, Clock, TrendingUp, Award, BookOpen } from 'lucide-react';
import universityLogo from './assets/universityLogo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f3] via-[#f5f1e8] to-[#ebe7dc]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#1a5f3f]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-md border-2 border-[#1a5f3f]/20 p-1 flex items-center justify-center">
                <img src={universityLogo} alt="University Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1a5f3f]">NoticeChain</h1>
                <p className="text-xs text-[#1a5f3f]/60">Blockchain-Secured Platform</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              <a href="#features" className="text-gray-700 hover:text-[#1a5f3f] font-medium transition">Features</a>
              <a href="#how" className="text-gray-700 hover:text-[#1a5f3f] font-medium transition">How it Works</a>
              <a href="#benefits" className="text-gray-700 hover:text-[#1a5f3f] font-medium transition">Benefits</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#1a5f3f] to-[#2d8659] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#1a5f3f]/20 transition-all">
                Get Access
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a5f3f08_1px,transparent_1px),linear-gradient(to_bottom,#1a5f3f08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        {/* Soft Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#1a5f3f]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-bl from-[#8b2332]/15 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-[#1a5f3f]/20 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 bg-[#1a5f3f] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#1a5f3f]">Blockchain-Secured Institutional Platform</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-gray-800">Tamper-Proof</span>
              <br />
              <span className="bg-gradient-to-r from-[#1a5f3f] via-[#2d8659] to-[#8b2332] bg-clip-text text-transparent">
                Notice System
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Revolutionary blockchain platform ensuring every university notice is cryptographically sealed,
              permanently recorded, and impossible to alter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-10 py-4 bg-gradient-to-r from-[#1a5f3f] to-[#2d8659] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#1a5f3f]/25 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                Access Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white border-2 border-[#8b2332]/30 text-[#8b2332] font-semibold rounded-xl hover:border-[#8b2332] hover:shadow-lg transition-all hover:-translate-y-0.5">
                See Demo
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, label: 'Security', value: '256-bit', color: 'from-[#1a5f3f] to-[#2d8659]' },
              { icon: Clock, label: 'Uptime', value: '99.9%', color: 'from-[#8b2332] to-[#a84557]' },
              { icon: CheckCircle2, label: 'Verified', value: '10K+', color: 'from-[#1a5f3f] to-[#2d8659]' },
              { icon: Globe, label: 'Decentralized', value: '100%', color: 'from-[#8b2332] to-[#a84557]' }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#1a5f3f]/30 transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Preview Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Notice Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a5f3f] to-[#2d8659] rounded-lg flex items-center justify-center shadow-lg">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Live Notices</h3>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#1a5f3f]/20 rounded-full ml-auto shadow-sm">
                  <div className="w-2 h-2 bg-[#1a5f3f] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#1a5f3f] font-medium">Real-time</span>
                </div>
              </div>

              {[
                { title: 'Semester Examination Schedule - May 2026', dept: 'Academic Affairs', time: '2 min ago', verified: true },
                { title: 'Research Symposium Registration Open', dept: 'R&D Department', time: '1 hour ago', verified: true },
                { title: 'Library Hours Extended for Finals Week', dept: 'Administration', time: '3 hours ago', verified: true },
              ].map((notice, idx) => (
                <div key={idx} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#1a5f3f]/40 transition-all cursor-pointer hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1.5 group-hover:text-[#1a5f3f] transition-colors leading-snug">{notice.title}</h4>
                      <p className="text-sm text-gray-500">{notice.dept}</p>
                    </div>
                    {notice.verified && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1a5f3f]/10 rounded-lg border border-[#1a5f3f]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#1a5f3f]" />
                        <span className="text-xs text-[#1a5f3f] font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span>{notice.time}</span>
                    <span className="font-mono">Hash: 0x{Math.random().toString(16).slice(2, 8)}...</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Features */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Every Notice,
                <span className="bg-gradient-to-r from-[#1a5f3f] to-[#8b2332] bg-clip-text text-transparent"> Permanently Secured</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our blockchain infrastructure ensures that once a notice is published, it becomes an immutable part of the institutional record.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Lock, title: 'Cryptographically Sealed', desc: 'SHA-256 hashing prevents any tampering', color: 'from-[#1a5f3f] to-[#2d8659]' },
                  { icon: FileText, title: 'Instant Verification', desc: 'Anyone can verify authenticity in seconds', color: 'from-[#8b2332] to-[#a84557]' },
                  { icon: TrendingUp, title: 'Complete Audit Trail', desc: 'Full history of all publications maintained', color: 'from-[#1a5f3f] to-[#2d8659]' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-[#1a5f3f]/30 transition-all hover:-translate-y-0.5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1.5">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-20 px-6 bg-gradient-to-b from-white to-[#faf8f3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Why Institutions Trust Us</h2>
            <p className="text-xl text-gray-600">Built for academic excellence and institutional integrity</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Institutional Credibility',
                desc: 'Build trust with stakeholders through transparent, verifiable communications',
                color: 'from-[#1a5f3f] to-[#2d8659]'
              },
              {
                icon: Shield,
                title: 'Legal Compliance',
                desc: 'Meet regulatory requirements with tamper-proof documentation',
                color: 'from-[#8b2332] to-[#a84557]'
              },
              {
                icon: BookOpen,
                title: 'Historical Archive',
                desc: 'Permanent institutional memory accessible for decades',
                color: 'from-[#1a5f3f] to-[#2d8659]'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-[#1a5f3f]/30 transition-all hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Simple. Secure. Seamless.</h2>
            <p className="text-xl text-gray-600">From creation to verification in four steps</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1a5f3f]/30 via-[#8b2332]/30 to-[#1a5f3f]/30"></div>

            <div className="space-y-12">
              {[
                { step: '01', title: 'Authorized Access', desc: 'University officials log in with secure multi-factor authentication', side: 'left', color: 'from-[#1a5f3f] to-[#2d8659]' },
                { step: '02', title: 'Create Notice', desc: 'Draft and upload notice with attachments through intuitive interface', side: 'right', color: 'from-[#8b2332] to-[#a84557]' },
                { step: '03', title: 'Blockchain Seal', desc: 'System generates cryptographic hash and records on blockchain', side: 'left', color: 'from-[#1a5f3f] to-[#2d8659]' },
                { step: '04', title: 'Instant Publish', desc: 'Notice goes live with permanent verification certificate', side: 'right', color: 'from-[#8b2332] to-[#a84557]' }
              ].map((item, idx) => (
                <div key={idx} className={`flex ${item.side === 'right' ? 'lg:flex-row-reverse' : ''} items-center gap-8`}>
                  <div className="flex-1 text-right lg:block hidden"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-xl`}>
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#1a5f3f]/30 transition-all hover:-translate-y-1">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#faf8f3] to-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1a5f3f]/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#8b2332]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-white shadow-xl border-2 border-[#1a5f3f]/20 p-2 mx-auto mb-6 flex items-center justify-center">
              <img src={universityLogo} alt="University Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Transform Your Institution's
            <br />
            <span className="bg-gradient-to-r from-[#1a5f3f] to-[#8b2332] bg-clip-text text-transparent">
              Communication System
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 50+ leading institutions already using blockchain for secure, verifiable notices
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-[#1a5f3f] to-[#2d8659] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#1a5f3f]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-[#8b2332]/30 text-[#8b2332] font-semibold rounded-xl hover:border-[#8b2332] hover:shadow-xl transition-all hover:-translate-y-0.5">
              Talk to Sales
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Universities' },
              { value: '10K+', label: 'Notices/Month' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1a5f3f] to-[#8b2332] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5f3f]/10 to-[#8b2332]/10 border border-[#1a5f3f]/20 p-1.5 flex items-center justify-center">
                  <img src={universityLogo} alt="University Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#1a5f3f]">NoticeChain</h3>
                  <p className="text-xs text-gray-500">Blockchain-Secured Platform</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                Revolutionizing institutional communications with decentralized, tamper-proof notice management for universities worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#1a5f3f] transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 NoticeChain. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a5f3f] rounded-full animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}