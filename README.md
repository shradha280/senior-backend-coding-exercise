# senior-backend-coding-exercise
Solution to refactor the legacy code using NestJS and implement a Repository Pattern with an in-memory data store.
# Here’s a breakdown of the updated folder structure:
```plaintext
src/
│
├── order/
│   ├── application/                # (Empty, ready for application services)
        ├── order.service.ts
│   ├── domain/                     # Domain layer
│   │   ├── order.entity.ts         # Order entity/model
│   │   └── order.repository.ts     # Repository interface for order
│   ├── infrastructure/             # Infrastructure layer
│   │   ├── order.controller.ts     # Legacy controller you need to refactor
│   │   ├── order.module.ts         # NestJS module for order
│   │── dto/            
│   │   ├── create-order.dto        # dto for request
│   │  
│   └── order.module                # order module
├── app.module.ts                   # app module
├── main.ts                         # Entry point of the application
├── test/                           # Jest configuration and tests (if applicable)
│
├── .eslintc.js                     # Linting configuration
├── .prettierrc                     # Code formatting configuration
├── nest-cli.json                   # NestJS CLI configuration
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.build.json             # Build configuration
└── README.md                       # You are here
