export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "monolithic-to-modular",
    title: "Migrating from Monolithic to Modular Monolithic Architecture",
    excerpt: "Lessons learned from re-architecting a legacy healthcare platform into a modular monolithic solution, balancing scalability with team productivity.",
    date: "Mar 2025",
    readTime: "8 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    content: `## The Challenge

When I joined iCareManager, the platform was a classic monolithic Ruby on Rails application. Over the years, feature after feature had been bolted on — eMAR, EMR, scheduling, billing — until the codebase became unwieldy. Deployments were risky, testing was slow, and teams stepped on each other's toes constantly.

## Why Not Micro-services?

The knee-jerk reaction might be "just go micro-services!" But for our team size and domain complexity, that would have introduced more problems than it solved. Instead, we chose a **modular monolithic** approach — keeping the deployment simplicity of a monolith while enforcing strict module boundaries.

## The Migration Strategy

We followed a phased approach:

1. **Domain Mapping** — Identified bounded contexts: Staff Management, Clinical (eMAR/EMR), Scheduling, and Billing.
2. **Interface Extraction** — Defined clear APIs between modules before physically separating code.
3. **Data Isolation** — Each module got its own schema namespace, with shared data accessed through well-defined interfaces.
4. **Gradual Enforcement** — Used linting rules and CI checks to prevent cross-module imports.

## Key Results

- **50% faster feature delivery** due to reduced conflicts
- **80% reduction** in deployment-related incidents
- **Team autonomy** — each squad owns their module end-to-end

## Lessons Learned

The biggest lesson: architecture decisions should be driven by team topology, not just technical ideals. A modular monolith gave us 80% of micro-services benefits at 20% of the operational cost.`,
  },
  {
    slug: "emar-micro-services",
    title: "Building Reliable eMAR Systems with Micro-services",
    excerpt: "How we achieved 90% reliability improvement in our electronic Medication Administration Record by adopting micro-services and event-driven architecture.",
    date: "Jan 2025",
    readTime: "6 min read",
    category: "Healthcare Tech",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    content: `## Why eMAR Reliability Matters

In healthcare, a missed or incorrect medication administration can have serious consequences. Our eMAR module needed to be rock-solid — zero data loss, real-time updates, and offline capability.

## The Architecture

We broke the eMAR into focused micro-services:

- **Medication Service** — Master drug database and formulary management
- **Administration Service** — Real-time MAR tracking and documentation
- **Alert Service** — Drug interaction checks and allergy warnings
- **Sync Service** — Handles offline-to-online data reconciliation

## Event-Driven Communication

Services communicate through an event bus using CQRS patterns. When a nurse administers a medication, the flow is:

1. Administration Service records the event
2. Alert Service validates against drug interactions
3. Sync Service ensures mobile devices are updated
4. Billing Service captures the charge

## Results

- **90% improvement** in system reliability
- **Zero data loss** incidents since migration
- **Sub-second** alert response times
- **Offline-first** mobile app support

## The Human Factor

Technology alone didn't solve this — we also redesigned the nursing workflow with direct input from clinical staff. The best architecture serves its users.`,
  },
  {
    slug: "clean-architecture-staff-time",
    title: "Clean Architecture in Practice: Staff Time Module",
    excerpt: "Applying clean architecture and pub-sub patterns to improve maintainability by 50% in an enterprise time & attendance system.",
    date: "Nov 2024",
    readTime: "7 min read",
    category: "Clean Code",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    content: `## The Problem

Our Staff Time & Attendance module had become a maintenance nightmare. Business rules were scattered across controllers, views, and even database triggers. A simple policy change could require touching 20+ files.

## Applying Clean Architecture

We restructured around concentric layers:

- **Entities** — Core business objects (TimeEntry, Schedule, PayPeriod)
- **Use Cases** — Application-specific business rules (CalculateOvertime, ApproveTimesheet)
- **Interface Adapters** — Controllers, presenters, gateways
- **Frameworks** — Rails, database, external APIs

## Pub-Sub for Decoupling

Time events now flow through a pub-sub system:

- Clock-in/out → publishes TimeEvent
- Scheduling service subscribes for conflict detection
- Payroll subscribes for real-time cost tracking
- Compliance subscribes for overtime alerts

## Measurable Impact

- **50% reduction** in time-to-fix for bugs
- **3x faster** onboarding for new developers
- **Zero regression** bugs in the last 6 months
- Test coverage jumped from 40% to 85%

## Key Takeaway

Clean architecture isn't about following rules religiously — it's about making the right dependencies point inward and keeping business logic framework-agnostic.`,
  },
  {
    slug: "leading-healthcare-teams",
    title: "Leading Engineering Teams in Healthcare Software",
    excerpt: "Key insights on managing cross-functional teams, navigating compliance requirements, and fostering innovation in regulated industries.",
    date: "Sep 2024",
    readTime: "5 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    content: `## The Unique Challenge of Healthcare

Leading engineering teams in healthcare is different from typical software development. You're building systems where bugs aren't just inconvenient — they can impact patient safety. This requires a culture that balances speed with rigor.

## Building the Right Culture

### Psychological Safety First
Engineers need to feel safe raising concerns about code quality, architectural decisions, or timeline pressures. In healthcare, a junior dev catching a potential data integrity issue is worth more than hitting a sprint deadline.

### Cross-Functional Collaboration
Our best solutions emerge when engineers work directly with clinical staff. We run regular "shadowing sessions" where developers observe nurses and doctors using our software in real clinical settings.

## Managing Compliance

HIPAA, SOC 2, and various state regulations add complexity. Our approach:

1. **Compliance as Code** — Automated checks in CI/CD pipeline
2. **Security Champions** — Rotating role within each team
3. **Regular Audits** — Quarterly security reviews with external partners

## Fostering Innovation

Despite regulatory constraints, innovation is possible:

- **20% Time** — Engineers can explore new technologies and approaches
- **Hack Days** — Quarterly events focused on clinical workflow improvements
- **Tech Radar** — Regular evaluation of emerging technologies

## The Reward

There's nothing quite like seeing software you built help a nurse deliver better patient care. That purpose drives everything we do.`,
  },
  {
    slug: "react-native-healthcare",
    title: "React Native for Healthcare: Lessons from the Field",
    excerpt: "Building cross-platform mobile apps for EHR systems — challenges, patterns, and best practices from real-world deployments.",
    date: "Jul 2024",
    readTime: "6 min read",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    content: `## Why React Native for Healthcare?

When we decided to build mobile apps for our EHR/eMAR platform, the choice came down to native vs cross-platform. With a small team supporting both iOS and Android, React Native was the pragmatic choice — but healthcare apps have unique requirements.

## Key Challenges

### Offline-First Architecture
Nurses often work in areas with poor connectivity. Our app must function fully offline and sync seamlessly when connected. We use a local SQLite database with a custom sync engine that handles conflict resolution.

### Security Requirements
Healthcare data requires encryption at rest and in transit. We implemented:
- Biometric authentication (Face ID / fingerprint)
- Certificate pinning for API communication
- Encrypted local storage
- Automatic session timeout

### Barcode Scanning
Medication administration requires scanning patient wristbands and medication barcodes. We integrated native camera modules with real-time barcode processing.

## Performance Optimization

Healthcare apps need to be fast — nurses are busy. Our optimizations:

1. **Lazy Loading** — Screens load data on demand
2. **Optimistic Updates** — UI updates immediately, syncs in background
3. **Image Optimization** — Compressed wound photos before upload
4. **Memory Management** — Careful lifecycle management for long-running sessions

## Deployment Strategy

We use OTA (Over-The-Air) updates for JavaScript bundle changes, but native module updates go through the app stores. This lets us push critical fixes instantly while maintaining app store compliance.

## Results

- **4.5 star rating** on both app stores
- **60% adoption** among nursing staff within 3 months
- **30% reduction** in medication documentation errors`,
  },
];
