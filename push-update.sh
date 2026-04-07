#!/bin/bash
# ============================================================
# push-update.sh — Actualizar GitHub con los archivos v1.1
#
# USO:
#   bash push-update.sh NOMBRE_DEL_REPO
#
# EJEMPLO:
#   bash push-update.sh consulta-rapida-enf
#
# Este script clona el repo, reemplaza los archivos actualizados
# y hace push manteniendo los íconos y README existentes.
# ============================================================

GITHUB_USER="Soilwork78"
REPO_NAME=${1:-""}

if [ -z "$REPO_NAME" ]; then
  echo "❌ Debes indicar el nombre del repo."
  echo "   Ejemplo: bash push-update.sh consulta-rapida-enf"
  exit 1
fi

REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
CLONE_DIR="/tmp/repo-update-$$"
SOURCE_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "📥 Clonando repo desde GitHub..."
git clone "$REPO_URL" "$CLONE_DIR" || { echo "❌ Error al clonar. Verifica el nombre del repo."; exit 1; }

echo "📋 Copiando archivos actualizados..."
# Archivos que se actualizan (mantiene íconos, README y manifest del repo original si existen)
cp "$SOURCE_DIR/index.html"              "$CLONE_DIR/index.html"
cp "$SOURCE_DIR/app.js"                  "$CLONE_DIR/app.js"
cp "$SOURCE_DIR/cdss.js"                 "$CLONE_DIR/cdss.js"
cp "$SOURCE_DIR/data.js"                 "$CLONE_DIR/data.js"
cp "$SOURCE_DIR/extras.js"              "$CLONE_DIR/extras.js"
cp "$SOURCE_DIR/sw.js"                   "$CLONE_DIR/sw.js"
cp "$SOURCE_DIR/manifest.json"           "$CLONE_DIR/manifest.json"
cp "$SOURCE_DIR/antibioticos-slides.html" "$CLONE_DIR/antibioticos-slides.html"
cp "$SOURCE_DIR/.gitignore"              "$CLONE_DIR/.gitignore" 2>/dev/null || true

echo "📝 Preparando commit..."
cd "$CLONE_DIR"
git config user.email "rpincheiragonzalez@gmail.com"
git config user.name "Rodrigo Pincheira"

git add index.html app.js cdss.js data.js extras.js sw.js manifest.json antibioticos-slides.html .gitignore

git diff --cached --stat

git commit -m "feat: v1.1 — Mobile responsive + Profe IA + Antibióticos slides

Cambios principales:
- Mobile responsive completo (sidebar overlay, iOS input fix, tabs scroll)
- eGFR visible solo en sección antibióticos
- Presentación 12 slides: Farmacología Antibióticos (link desde Sesión 3)
- Asistente Profe IA integrado con Claude API
- SW actualizado: cachea antibioticos-slides.html (PWA offline)
- manifest.json: tema azul UDP, orientación portrait
- PWA meta tags iOS (apple-mobile-web-app-capable)
- Test suite CDSS: 103/103 ✅"

echo ""
echo "🚀 Haciendo push a GitHub..."
git push origin main || git push origin master

echo ""
echo "✅ ¡Listo! Cambios publicados en:"
echo "   https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "📱 GitHub Pages (si está habilitado):"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""

# Limpiar carpeta temporal
cd / && rm -rf "$CLONE_DIR"
