# Dùng Node.js 20
FROM node:20

# Tạo thư mục làm việc
WORKDIR /app

# Copy file cấu hình
COPY package.json pnpm-lock.yaml* ./

# Cài pnpm
RUN npm install -g pnpm

# Cài dependencies
RUN pnpm install

# Copy toàn bộ source
COPY . .

# Expose port 3000
EXPOSE 3000

# Chạy Next.js
CMD ["pnpm", "dev"]
