'use client';

import BasicFloatingWidgetPage from './BasicFloatingWidgetPage';

const FloatingWidgetDemo: React.FC = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add a Floating Widget for Site-wide Attention</h1>
      <p className="mb-4">Singularity includes floating widget options.</p>
      <BasicFloatingWidgetPage
        position={{ bottom: '30px', right: '30px' }}
        initialOpen={false}
      />
    </main>
  );
};

export default FloatingWidgetDemo;