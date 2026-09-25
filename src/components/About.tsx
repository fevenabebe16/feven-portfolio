const FOCUS_AREAS = [
  {
    label: "Distributed & Federated Learning",
    detail: "Training across non-IID clients without centralizing data.",
  },
  {
    label: "Health Informatics",
    detail: "EMR, DHIS2, and health-data systems built for real hospital workflows.",
  },
  {
    label: "Robotics & Computer Vision",
    detail: "Perception-to-control pipelines, from image to actuation.",
  },
  {
    label: "Resource-Constrained AI",
    detail: "Edge inference, offline-first design, CPU-bound experimentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Systems, not just models.
          </h2>
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-dim">
            I'm an MSc Artificial Intelligence student at Addis Ababa University (AAiT), coming into AI from a health
            informatics background rather than a purely computational one. I spent 3+ years inside real health
            information systems — customizing EMR and DHIS2 deployments and building data-tracking tools for a
            referral hospital — which shaped how I think about AI: less about a model in isolation, more about a
            system that has to work reliably across messy, distributed, real-world constraints. I've since completed
            the Qiyas Data Science and AI Engineering training, sharpening those instincts with hands-on ML, deep
            learning, NLP, and deployment work.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
            That throughline now runs across my project work — federated learning across non-IID clients, an
            autonomous robot built on a perception-and-control pipeline, and an edge-AI concept for agricultural
            decision support. I'm drawn to problems where data is decentralized, connectivity is unreliable, or
            compute is limited, and the interesting engineering is making AI work anyway.
          </p>

          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {FOCUS_AREAS.map((f) => (
              <div key={f.label} className="border-l-2 border-node-dim pl-4">
                <dt className="font-mono text-sm text-ink">{f.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-faint">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
