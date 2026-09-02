const steps = [
  {
    number: '01',
    title: 'Browse',
    description: 'Filter by type, price and availability to find your match.',
  },
  {
    number: '02',
    title: 'Book',
    description: 'Pick your dates and confirm — no paperwork, no waiting.',
  },
  {
    number: '03',
    title: 'Drive',
    description: 'Pick up the vehicle and hit the road, insured and ready.',
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          How it works
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-3xl font-semibold text-accent-dark">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}