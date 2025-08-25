#!/bin/bash

# GitHub Pages用にパスを修正するスクリプト
BASE_PATH="/nextjs-test-blog"

echo "Fixing paths for GitHub Pages..."
echo "Base path: $BASE_PATH"
echo "Working directory: $(pwd)"
echo "OS Type: $OSTYPE"
echo "Contents of out directory:"
ls -la out/

# 修正前のパスをチェック
echo "Before fixing - checking for /_next references:"
grep -r '/_next' out/ | head -5

# OS判定してsedコマンドを切り替え
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "Using macOS sed syntax..."
    
    echo "Fixing CSS and JS paths..."
    find out -name "*.html" -type f -exec sed -i '' "s|href=\"/_next|href=\"$BASE_PATH/_next|g" {} \;
    find out -name "*.html" -type f -exec sed -i '' "s|src=\"/_next|src=\"$BASE_PATH/_next|g" {} \;

    echo "Fixing image paths..."
    find out -name "*.html" -type f -exec sed -i '' "s|href=\"/images|href=\"$BASE_PATH/images|g" {} \;
    find out -name "*.html" -type f -exec sed -i '' "s|src=\"/images|src=\"$BASE_PATH/images|g" {} \;

    echo "Fixing internal links..."
    find out -name "*.html" -type f -exec sed -i '' "s|href=\"/\"|href=\"$BASE_PATH/\"|g" {} \;
    find out -name "*.html" -type f -exec sed -i '' "s|href=\"/posts/|href=\"$BASE_PATH/posts/|g" {} \;

    echo "Fixing JSON files..."
    find out -name "*.json" -type f -exec sed -i '' "s|\"/_next|\"$BASE_PATH/_next|g" {} \;
else
    # Linux (GitHub Actions)
    echo "Using Linux sed syntax..."
    
    echo "Fixing CSS and JS paths..."
    find out -name "*.html" -type f -exec sed -i "s|href=\"/_next|href=\"$BASE_PATH/_next|g" {} \;
    find out -name "*.html" -type f -exec sed -i "s|src=\"/_next|src=\"$BASE_PATH/_next|g" {} \;

    echo "Fixing image paths..."
    find out -name "*.html" -type f -exec sed -i "s|href=\"/images|href=\"$BASE_PATH/images|g" {} \;
    find out -name "*.html" -type f -exec sed -i "s|src=\"/images|src=\"$BASE_PATH/images|g" {} \;

    echo "Fixing internal links..."
    find out -name "*.html" -type f -exec sed -i "s|href=\"/\"|href=\"$BASE_PATH/\"|g" {} \;
    find out -name "*.html" -type f -exec sed -i "s|href=\"/posts/|href=\"$BASE_PATH/posts/|g" {} \;

    echo "Fixing JSON files..."
    find out -name "*.json" -type f -exec sed -i "s|\"/_next|\"$BASE_PATH/_next|g" {} \;
fi

# 修正後のパスをチェック
echo "After fixing - checking for basePath references:"
grep -r "$BASE_PATH/_next" out/ | head -5

echo "Path fixing completed!"
