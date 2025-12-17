import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Policy from './components/Policy';
import FAQ from './components/FAQ';
import News from './components/News';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Policy />
        <FAQ />
        <News />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;