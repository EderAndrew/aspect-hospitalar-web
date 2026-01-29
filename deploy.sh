set -e

echo "Atualizando código..."
git pull

echo "Instalando dependências..."
pnpm install

echo "Build standalone.."
pnpm build:standalone

echo "Reiniciando PM2..."
pm2 restart ecosystem.config.js

echo "esse é o comando obrigatório para utilizar em produção: chmod +x deploy.sh"