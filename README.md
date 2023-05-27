# Webpack 5 + TypeScript 5 running Serverless

as above hahaah, its an absolute pain configuring this, so heres a basic template. good luck soliders

## Prerequisites

- Node.js (v14 or higher)
- Serverless Framework CLI (latest)
- AWS Account (if deploying to AWS)
- PNPM (because you're cool)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/dexxiez/serverless-typescript-template.git
   ```

2. Install dependencies:
   ```shell
   mv serverless-typescript-template [YOUR PROJECT NAME]
   cd [YOUR PROJECT NAME]
   rm -rf .git/ # delete this repo, its shit
   git init     # make your better one
   pnpm install # or you can use npm, whatever.
   ```

## Building

To build the project:
`shell
    sls package
    `
To deploy the project using Serverless Framework:
`shell
    sls deploy
    `

## Configuration

Modify the following files according to your project requirements:

- `webpack.config.js`: Webpack configuration file.
- `serverless.yml`: Serverless Framework configuration file.

## Structure

```bash
├── src/
│   ├── main.ts         # Entry point of your application
│   └── ...
├── .serverless/        # Compiled output (generated after build)
├── .build/             # Temp webpack directory
├── webpack.config.js   # Webpack configuration
├── serverless.yml      # Serverless Framework configuration
└── ...
```

---

Feel free to customize and modify the above template to suit your specific project needs.
