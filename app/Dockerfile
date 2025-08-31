FROM node:20-alpine
WORKDIR /app
RUN corepack enable
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  else npm ci; fi
COPY . .
EXPOSE 5173
CMD sh -lc "\
  if [ -f pnpm-lock.yaml ]; then pnpm dev --host --port 5173; \
  elif [ -f yarn.lock ]; then yarn dev --host --port 5173; \
  else npm run dev -- --host --port 5173; fi"