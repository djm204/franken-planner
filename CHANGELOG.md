# Changelog

## [0.2.0](https://github.com/djm204/franken-planner/compare/franken-planner-v0.1.0...franken-planner-v0.2.0) (2026-03-08)


### Features

* add RecursionDepthExceededError ([3d9be46](https://github.com/djm204/franken-planner/commit/3d9be464727acae692736cabd012aabec42c4132))
* **config:** add tsconfig.json with strict mode (ADR-001) ([c9c0db7](https://github.com/djm204/franken-planner/commit/c9c0db71e64bd2da2b7f2d2a7b69cf53d28ac9b7))
* **cot:** add RationaleRejectedError ([90e2587](https://github.com/djm204/franken-planner/commit/90e2587db1482bd3fba53a9d0999b3416119454a))
* **cot:** implement CoT gate — wraps executor with verifyRationale check ([e4724f7](https://github.com/djm204/franken-planner/commit/e4724f741a41fd2f005820ca61f568c81bf77d56))
* **cot:** implement RationaleEnforcer — generates rationale from task objective ([476e73e](https://github.com/djm204/franken-planner/commit/476e73eff2c7ef3ec535068b1895c07fc96a2b8e))
* **dag:** define CyclicDependencyError, TaskNotFoundError, DuplicateTaskError ([c96a8a0](https://github.com/djm204/franken-planner/commit/c96a8a0b0150462cc361c8e866257c65de531738))
* **dag:** implement PlanGraph with adjacency list, Kahn sort, and mutations (ADR-002, ADR-007) ([2754318](https://github.com/djm204/franken-planner/commit/27543180232c59b1aaf0f3564030c68cef8a9599))
* **hitl:** define HITLGate interface and approval types (ADR-006) ([5de2cf2](https://github.com/djm204/franken-planner/commit/5de2cf27bb2e52daaf7f83e8e5f3f50459f20349))
* **hitl:** implement plan modifier — apply TaskModification changes to PlanGraph ([80965cc](https://github.com/djm204/franken-planner/commit/80965ccfaee85f4aabac6c474789286e6fcd0aea))
* **hitl:** implement PlanExporter — renders PlanGraph as Markdown checklist ([12d7adf](https://github.com/djm204/franken-planner/commit/12d7adf506abfcfdf341ea9a150f99a961fc64c0))
* implement ParallelPlanner — wave-based concurrent dispatch ([1f0e8ed](https://github.com/djm204/franken-planner/commit/1f0e8ed7aed77e892b4a6055fa51751239270f86))
* implement RecursivePlanner — depth-limited recursive task expansion ([63eb0c1](https://github.com/djm204/franken-planner/commit/63eb0c1dd7fb671d3d3949f7edbf47975cda5a7d))
* **lint:** add ESLint + Prettier with TypeScript rules ([870a6b1](https://github.com/djm204/franken-planner/commit/870a6b1473b111f3e149a5d9536ca2163a360de8))
* **modules:** define GuardrailsModule interface (MOD-01) (ADR-005) ([078d49f](https://github.com/djm204/franken-planner/commit/078d49fb9c2b84488e79b1bc6a82748df58898e3))
* **modules:** define MemoryModule interface (MOD-03) (ADR-005) ([ecfb021](https://github.com/djm204/franken-planner/commit/ecfb021574ec6329db0c8858d8983f17a8014838))
* **modules:** define SelfCritiqueModule interface (MOD-07) (ADR-005) ([73cd29f](https://github.com/djm204/franken-planner/commit/73cd29f78b76a152692f126657ab32397ceac122))
* **modules:** define SkillsModule interface (MOD-02) (ADR-005) ([0e1e84c](https://github.com/djm204/franken-planner/commit/0e1e84cd0a4ef738380e71bf95115e38ca37c894))
* **planner:** add GraphBuilder interface (ADR-005) ([39ccea5](https://github.com/djm204/franken-planner/commit/39ccea550327ca5829244af33c45ed00114f65f2))
* **planner:** define PlanningStrategy interface and PlanContext (ADR-004) ([5ae23dc](https://github.com/djm204/franken-planner/commit/5ae23dcc471c9f4762b5b63f64f0ca3ba9ec3595))
* **planner:** implement LinearPlanner failure handling — stops on first failure ([1a3f42b](https://github.com/djm204/franken-planner/commit/1a3f42bd78f3765c548978761f5a38184cfa873f))
* **planner:** implement LinearPlanner sequential task execution ([cea8183](https://github.com/djm204/franken-planner/commit/cea8183431f7ad9e5a6962d787f73d1e2efe2851))
* **planner:** implement Planner orchestrator — wire all components end-to-end ([948d22f](https://github.com/djm204/franken-planner/commit/948d22f4529e6ebbfaab32ad1160b014097f9fb5))
* **recovery:** add MaxRecoveryAttemptsError and UnknownErrorEscalatedError ([d7fc031](https://github.com/djm204/franken-planner/commit/d7fc031324b60f4bdc4166e6213926db8cdb2d76))
* **recovery:** implement ErrorIngester — classify errors against known patterns ([c79ea67](https://github.com/djm204/franken-planner/commit/c79ea679e52c77418381710062dbcd8df7cb4875))
* **recovery:** implement RecoveryController — orchestrate recovery with escalation and circuit breaker ([2e726da](https://github.com/djm204/franken-planner/commit/2e726daa4de8a7c576e6825cdde53f0d8c78ac47))
* **recovery:** implement RecoveryPlanGenerator — inject fix-it task via PlanGraph ([00d8bf6](https://github.com/djm204/franken-planner/commit/00d8bf62e7c83252e5524cec6026d86c0d861fd7))
* **test:** configure Vitest with coverage thresholds (ADR-003) ([68797a4](https://github.com/djm204/franken-planner/commit/68797a497ce482429e962fd878e4b53e7292a49e))
* **types:** define ADR, KnownError, ProjectContext types ([d1420ee](https://github.com/djm204/franken-planner/commit/d1420ee4d9c7e5e29e035f7803f23ddc27c56c6b))
* **types:** define Intent, RationaleBlock, VerificationResult types ([f6a57d7](https://github.com/djm204/franken-planner/commit/f6a57d7ce734c397c48ec537124de9f71e8e5572))
* **types:** define PlanningStrategyName, TaskResult, PlanResult types ([dfb8221](https://github.com/djm204/franken-planner/commit/dfb8221a3a60ea7fcfe83b6326eeed4138fa1cd3))
* **types:** define Task, TaskId, TaskStatus types (ADR-002) ([17f2e3e](https://github.com/djm204/franken-planner/commit/17f2e3eb561480e11835045e3af46dc9d6ef1dc2))
* **types:** implement isTask and isIntent type guards ([ac1ab23](https://github.com/djm204/franken-planner/commit/ac1ab2314a6a35e1e70d23126c0cd03c71f70402))
* wire full public API in barrel export (PR-12) ([562fd99](https://github.com/djm204/franken-planner/commit/562fd99d2e4c926d85219e1513dfe641a597cb21))


### Bug Fixes

* use vitest run instead of watch mode for test script ([0ea4cf8](https://github.com/djm204/franken-planner/commit/0ea4cf89ac83d14fa0fe658dec823e3794775637))


### Miscellaneous

* add .gitignore and .editorconfig ([7914acc](https://github.com/djm204/franken-planner/commit/7914acc764c02978fff9f3a9912006bdb35c785b))
* add cursor AI rules ([d590f14](https://github.com/djm204/franken-planner/commit/d590f143fb0c2894fd2c7cffdfe08c8037e08a32))
* **ci:** add GitHub Actions workflow — lint, typecheck, test ([6c8d769](https://github.com/djm204/franken-planner/commit/6c8d7699738d9d534fa1dfcc422b0a56c3305c16))
* initialize pnpm project with package.json ([9fbf9c9](https://github.com/djm204/franken-planner/commit/9fbf9c90382068ec9243061bffd4cfa2636e1619))
* initialize repository ([8e2dee7](https://github.com/djm204/franken-planner/commit/8e2dee795bb1c76bc4a106750f184d0c6b26967f))
* migrate build from tsup to tsc with NodeNext resolution ([d4ae355](https://github.com/djm204/franken-planner/commit/d4ae355c8be8b11a1a4206f6ef958bc9ddcf4fc4))


### Documentation

* add RAMP_UP.md for agent onboarding ([77b9e64](https://github.com/djm204/franken-planner/commit/77b9e648beb4a435b7ecaff34f23f4e4744e2b33))
* add README with architecture overview and development guide ([c23764f](https://github.com/djm204/franken-planner/commit/c23764fb19c95c1e8a67415f82d069803baa7d86))


### CI/CD

* add release-please config and workflow ([428da6d](https://github.com/djm204/franken-planner/commit/428da6d0fb544c0a3aa43aae18483e98bd851501))


### Tests

* add ParallelPlanner stub and red tests ([1080239](https://github.com/djm204/franken-planner/commit/10802397d5805d6fa1d3577c7f4e9b2373074c8d))
* add RecursivePlanner stub and red tests ([e6bd551](https://github.com/djm204/franken-planner/commit/e6bd551206d897514f03e60dad2994412b40ffc3))
* **cot:** write failing tests for CoT gate — approved and rejected paths ([7d8ff9d](https://github.com/djm204/franken-planner/commit/7d8ff9d9d666e5d873124b4b211e5ccbd16d40b0))
* **cot:** write failing tests for RationaleEnforcer ([af9d2f9](https://github.com/djm204/franken-planner/commit/af9d2f927fcb1d2fc8778335d16c7be813aed2a9))
* **dag:** write failing tests for PlanGraph (construction, sort, cycles, mutations) ([92fd226](https://github.com/djm204/franken-planner/commit/92fd2267a60e6909fc5bd2d06202ecb954774c2f))
* **hitl:** write failing tests for plan modifier and StubHITLGate ([b4a2cbe](https://github.com/djm204/franken-planner/commit/b4a2cbe3522faabbdc4ed0d2338d7995d9535151))
* **hitl:** write failing tests for PlanExporter.toMarkdown ([18784dc](https://github.com/djm204/franken-planner/commit/18784dcbeffa34e55991aefc662aea4c624c85ee))
* **integration:** add full Planner integration test — happy path, HITL, and recovery ([9e9193b](https://github.com/djm204/franken-planner/commit/9e9193b555c850f2ed64da402629b2e28313754e))
* **integration:** add integration test for CoT rationale enforcement ([b784e0d](https://github.com/djm204/franken-planner/commit/b784e0d41782b09a68acd79dda64bd668a36af19))
* **integration:** add integration test for parallel planning with concurrent waves ([b5c887b](https://github.com/djm204/franken-planner/commit/b5c887bbe8cc97e9960b793f101f22b1bbb7d06f))
* **integration:** add integration test for recursive planning with expansion ([1383928](https://github.com/djm204/franken-planner/commit/1383928278c6ecfe57182339f34004622f689cda))
* **planner:** write failing tests for LinearPlanner (ADR-004) ([2e8c542](https://github.com/djm204/franken-planner/commit/2e8c542c9962265ad37c1fb8058ee354a3153623))
* **planner:** write failing tests for Planner orchestrator ([1d181df](https://github.com/djm204/franken-planner/commit/1d181dfabdd0e79186c030b0f0808e238ced3963))
* **recovery:** write failing tests for ErrorIngester ([fef1506](https://github.com/djm204/franken-planner/commit/fef1506ea8a575592e16052a6a9d817664a4205f))
* **recovery:** write failing tests for RecoveryController ([e2e6cb3](https://github.com/djm204/franken-planner/commit/e2e6cb360d452d7f446e45659806d17c79a21604))
* **recovery:** write failing tests for RecoveryPlanGenerator ([d7668d5](https://github.com/djm204/franken-planner/commit/d7668d537ee704ad6c6fd100b69d01d8fb4e2edb))
* **types:** write failing tests for isTask and isIntent guards ([68d05c6](https://github.com/djm204/franken-planner/commit/68d05c69a8db32535951bbc307e99bde294e1837))


### Refactoring

* **PR-23:** adopt @franken/types for TaskId, RationaleBlock ([48639d4](https://github.com/djm204/franken-planner/commit/48639d47e1e60058ac246dda744ccf6e364863f3))
