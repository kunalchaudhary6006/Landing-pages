/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Bus, 
  MapPin, 
  Clock, 
  Plane, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
  UserPlus
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, VEHICLES, DESTINATIONS, OUTSTATION_ROUTES, FAQS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[1].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = (vehicleId: string = VEHICLES[1].id) => {
    setSelectedVehicle(vehicleId);
    setIsBookingModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setIsBookingModalOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl ring-2 ring-blue-100 group-hover:scale-110 transition-transform">
              Y
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">
              YaYatra <span className="text-blue-600 underline underline-offset-4 decoration-2">Travel India</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-sm font-semibold uppercase tracking-wider">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-slate-500 hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => handleBooking()}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
            >
              Quick Booking
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-6 p-8 text-center">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button 
                  onClick={() => handleBooking()}
                  className="bg-blue-600 text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest active:scale-95 transition-transform"
                >
                  Book Your Ride
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-14 relative shadow-2xl shadow-slate-200/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-24 -translate-y-24 opacity-50 -z-0"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
                <Star className="w-3 h-3 fill-blue-700" />
                <span>Top Rated in Bihar</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Premium AC <br/><span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Traveler</span> Hire
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                Expert group travel solutions starting from just <span className="text-slate-900 font-bold">₹20/km</span>. Reliable, safe, and luxurious 9-20 seaters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleBooking()}
                  className="bg-blue-600 text-white px-10 py-4.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
                >
                  Book Now
                </button>
                <a href="#fleet" className="bg-white border border-slate-200 text-slate-800 px-10 py-4.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all text-center">
                  View Fleet
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex flex-col gap-6"
          >
            <div className="bg-blue-600 rounded-3xl p-10 text-white flex justify-between items-center shadow-xl shadow-blue-100 group cursor-default">
              <div>
                <div className="text-5xl md:text-6xl font-black mb-1 italic tracking-tight">1000+</div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Verified Group Trips</div>
              </div>
              <Bus size={48} className="text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-white p-3 border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/truck/1200/800" 
                alt="Tempo Traveller" 
                className="rounded-2xl w-full h-[360px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 flex justify-between items-center">
                 <div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Featured</div>
                    <div className="font-black text-slate-900">12-Seater Executive</div>
                 </div>
                 <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-black">₹22/km</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="inline-block text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">The YaYatra Fleet</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">Built for Group Comfort</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Choose from our diverse range of perfectly maintained vehicles suited for every group size and journey type.</p>
            </div>
            <div className="flex gap-3">
               <button className="p-4 border border-slate-200 rounded-2xl hover:bg-white transition-all bg-slate-50 active:scale-95"><ChevronRight className="w-5 h-5 rotate-180" /></button>
               <button className="p-4 border border-blue-600 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VEHICLES.slice(0, 4).map((vehicle) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-white border p-6 flex flex-col rounded-[32px] transition-all group ${vehicle.id === '12-seater' ? 'border-blue-400 ring-2 ring-blue-50 shadow-2xl shadow-blue-100' : 'border-slate-200 hover:border-blue-300 hover:shadow-xl'}`}
              >
                <div className="w-full aspect-[4/3] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                   <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                   {vehicle.id === '12-seater' && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-[9px] text-white px-3 py-1 rounded-full font-black uppercase tracking-[0.2em] shadow-lg">Popular choice</div>
                   )}
                </div>
                <h3 className="font-bold text-slate-900 text-xl tracking-tight mb-2">
                  {vehicle.name.replace(' Tempo Traveller', '')}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mb-6 leading-relaxed flex-1">
                  {vehicle.id === '9-seater' && "Spacious 1+1 luxury seating perfect for family airport transfers and day tours."}
                  {vehicle.id === '12-seater' && "Our bestseller for weddings and heritage site tours across Bihar and Jharkhand."}
                  {vehicle.id === '16-seater' && "Ample legroom and roof storage for school trips and long-distance pilgrimages."}
                  {vehicle.id === '20-seater' && "The ultimate group transport for corporate offsites and large family events."}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">Starts from</div>
                    <div className="font-black text-2xl text-blue-600 leading-none mt-1">₹{vehicle.pricePerKm}<span className="text-xs font-bold text-slate-400">/km</span></div>
                  </div>
                  <button 
                    onClick={() => handleBooking(vehicle.id)}
                    className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg active:scale-90"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-32 bg-slate-950 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <aside className="bg-slate-900 border border-slate-800 rounded-[32px] p-10 flex flex-col h-full shadow-2xl">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Tour Packages</span>
              <h3 className="text-3xl font-black mb-10 tracking-tighter leading-none">Popular Routes</h3>
              <div className="flex flex-col gap-2">
                {(OUTSTATION_ROUTES).map((route, idx) => (
                  <motion.div 
                    key={route.id}
                    whileHover={{ x: 10 }}
                    onClick={() => handleBooking()}
                    className="group"
                  >
                    <div className="flex items-center justify-between cursor-pointer py-4">
                      <div>
                        <div className="font-black text-lg group-hover:text-blue-400 transition-colors tracking-tight">Patna to {route.to}</div>
                        <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-black">{route.description.split('.')[0]}</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                    {idx < OUTSTATION_ROUTES.length - 1 && <div className="h-[1px] bg-slate-800" />}
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-blue-500 uppercase tracking-widest font-black mb-6 flex items-center gap-2">
                   <Users size={12} /> Standard Travel Comforts
                </div>
                <div className="grid grid-cols-1 gap-y-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">
                  <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-blue-600" /> Individual Reclining Seats</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-blue-600" /> High-Cooling Turbo AC</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-blue-600" /> Professional 24/7 Support</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-blue-600" /> Smooth Air-Ride Suspension</div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {DESTINATIONS.map((dest, idx) => (
                <motion.div 
                  key={dest.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group h-[340px] rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl"
                >
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4 className="text-2xl font-black mb-2 tracking-tighter">{dest.name}</h4>
                    <p className="text-slate-400 text-xs font-bold mb-6 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">{dest.description}</p>
                    <button 
                      onClick={() => handleBooking()}
                      className="flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                    >
                      Book Tour <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <span className="inline-block text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Why YaYatra?</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">Setting New Standards in <br/> Bihar Travel Logistics</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: <ShieldCheck size={32} />, title: "Safety First", desc: "Every driver is background verified with minimum 5+ years experience on NH highways." },
                 { icon: <MapPin size={32} />, title: "Smart Routing", desc: "GPS optimized travel to avoid peak hour congestion at Bailey Road and Patna City." },
                 { icon: <Calendar size={32} />, title: "Instant Booking", desc: "Transparent availability and digital invoicing with zero hidden service fees." },
                 { icon: <Clock size={32} />, title: "Always Punctual", desc: "30-minute early arrival guarantee for airport pickups and wedding guest transfers." }
               ].map((s, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group"
                 >
                    <div className="text-blue-600 mb-8 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">{s.icon}</div>
                    <h3 className="font-black text-slate-900 text-xl tracking-tight mb-4">{s.title}</h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed">{s.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ & CTA Section */}
      <section id="faq" className="py-32 bg-slate-50 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Planning Help</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-10 leading-none">Essential Booking <br/> Information</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <motion.details 
                  key={idx} 
                  className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-black text-slate-900 uppercase tracking-tight text-sm">
                    {faq.question}
                    <div className="bg-slate-100 p-1 rounded-lg group-open:rotate-90 transition-transform text-slate-400">
                      <ChevronRight size={16} />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-semibold text-slate-500 leading-relaxed max-w-lg">
                    {faq.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            
            <div className="relative z-10 text-center lg:text-left">
              <div className="bg-blue-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-10 shadow-xl border border-blue-400">
                 <Bus size={36} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.95]">Ready to Book <br/> Your Journey?</h3>
              <p className="text-blue-100 text-lg font-medium mb-12 leading-relaxed opacity-90">Enjoy the best group travel rates in Patna with absolute transparency and premium comfort features.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:+919998887777" className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-xl shadow-blue-900/20">
                  <Phone size={18} /> +91 999 888 7777
                </a>
                <button 
                  onClick={() => handleBooking()}
                  className="bg-blue-700 text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-blue-500 transition-all hover:bg-blue-800"
                >
                  Quick Inquiry
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-blue-600" referrerPolicy="no-referrer" />)}
                 </div>
                 <span>Joined by 500+ Happy Client Groups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden"
            >
              {showSuccess ? (
                <div className="p-16 text-center">
                   <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <CheckCircle2 size={48} />
                   </div>
                   <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">Inquiry Received!</h2>
                   <p className="text-slate-500 font-bold mb-2">Our travel expert will call you shortly on your provided number.</p>
                   <p className="text-sm font-black text-blue-600 uppercase tracking-widest">YaYatra Travel Team</p>
                </div>
              ) : (
                <>
                  <div className="bg-slate-900 p-8 text-white relative">
                    <button 
                      onClick={() => setIsBookingModalOpen(false)}
                      className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                    <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Booking Form</span>
                    <h2 className="text-3xl font-black tracking-tighter">Reserve Your Traveler</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="p-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-bold text-sm outline-none focus:border-blue-600 transition-colors" placeholder="Ankit Kumar" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                        <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-bold text-sm outline-none focus:border-blue-600 transition-colors" placeholder="+91 00000 00000" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Vehicle Type</label>
                        <select 
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-bold text-sm outline-none focus:border-blue-600 transition-colors appearance-none"
                        >
                          {VEHICLES.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Travel Date</label>
                        <input required type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-bold text-sm outline-none focus:border-blue-600 transition-colors appearance-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trip Details (Optional)</label>
                       <textarea 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 font-bold text-sm outline-none focus:border-blue-600 transition-colors h-24 resize-none"
                        placeholder="Tell us about your route: Patna to Rajgir, Local Sightseeing, etc."
                       />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Request Custom Quote'
                      )}
                    </button>
                    <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 px-10">By booking, you agree to our terms of service and standard cancellation policy.</p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-24 pb-12">
         <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-1">
               <div className="flex items-center gap-3 mb-8 group cursor-default">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
                  Y
                </div>
                <span className="font-black text-xl tracking-tight text-slate-900 uppercase">
                  YaYatra <span className="text-blue-600">Travel</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] leading-[2.2] mb-10 max-w-xs">Connecting Bihar with Premium Group Transport Solutions. Available 24/7 for Outstation and Local Trips.</p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all active:scale-90"><Instagram size={18} /></a>
                 <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all active:scale-90"><Facebook size={18} /></a>
                 <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all active:scale-90"><Twitter size={18} /></a>
              </div>
            </div>

            <div>
               <h4 className="font-black text-xs uppercase tracking-[0.3em] text-slate-400 mb-10 font-display">Service Regions</h4>
               <ul className="space-y-5 text-[11px] font-black uppercase tracking-[0.1em] text-slate-900">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Patna Airport Transfers</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Rajgir Heritage Tour</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Bodh Gaya Pilgrimage</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Nalanda University Site</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Corporate Event Shuttles</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-black text-xs uppercase tracking-[0.3em] text-slate-400 mb-10 font-display">Specialized Fleet</h4>
               <ul className="space-y-5 text-[11px] font-black uppercase tracking-[0.1em] text-slate-900">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">9rd Row Luxury AC</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">12 Seats Executive</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">16 Seats Premium Bus</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">20 Seats Large Group</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Wedding Guest Support</a></li>
               </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
               <h4 className="font-black text-xs uppercase tracking-[0.3em] text-slate-400 mb-8 font-display">Contact Expert</h4>
               <div className="space-y-6">
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Call Booking Line</div>
                    <p className="text-sm font-black text-slate-900 tracking-tight">+91 999 888 7777</p>
                 </div>
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Corporate Inquiry</div>
                    <p className="text-sm font-black text-slate-900 tracking-tight">contact@yayatra.in</p>
                 </div>
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Main Office</div>
                    <p className="text-[11px] font-bold text-slate-900 leading-relaxed uppercase tracking-tight">Bailey Road, Boring Road Junction, Patna, BR 800001</p>
                 </div>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span>© 2026 YaYatra Travel India • Licensed Transporter in Bihar</span>
            <div className="flex gap-8">
               <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
